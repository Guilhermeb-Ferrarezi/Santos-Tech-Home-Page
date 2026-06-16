import path from "node:path";
import { promises as fs } from "node:fs";
import { gzipSync, brotliCompressSync } from "node:zlib";
import { initBlogDb } from "./blog-db";

// Inicializa banco do blog antes de servir qualquer requisição
initBlogDb();

import app from "../dist/server/index.js";

type WorkerApp = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const worker = app as unknown as WorkerApp;
const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";
const clientAssetsDir = path.resolve(import.meta.dir, "../dist/client");
const publishedSitesRoot = path.resolve(
  process.env.SITE_PUBLISHER_STORAGE_DIR?.trim() || "/srv/site-routes",
);

function resolvePublishedSitePath(pathname: string) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  let decodedPath: string;

  try {
    decodedPath = decodeURIComponent(normalizedPath);
  } catch {
    return null;
  }

  const resolvedPath = path.resolve(publishedSitesRoot, `.${decodedPath}`);
  const relativePath = path.relative(publishedSitesRoot, resolvedPath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return resolvedPath;
}

// Padrão pra arquivos top-level do public/ (favicon.png, og-image.png, robots.txt, etc):
// exatamente UM segment com extensão e sem ponto no início (regex exclui /.hidden).
const TOP_LEVEL_PUBLIC_FILE = /^\/[^./][^/]*\.[^/]+$/;
// Subdiretórios explicitamente permitidos dentro de public/ (path traversal guard abaixo).
const PUBLIC_SUBDIRS = ["/courses/"];

async function serveStaticAsset(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return null;
  }

  const url = new URL(request.url);
  const isBundledAsset = url.pathname.startsWith("/assets/");
  const isTopLevelPublic = TOP_LEVEL_PUBLIC_FILE.test(url.pathname);
  const isPublicSubdir = PUBLIC_SUBDIRS.some((dir) => url.pathname.startsWith(dir));

  if (!isBundledAsset && !isTopLevelPublic && !isPublicSubdir) {
    return null;
  }

  const assetPath = path.resolve(clientAssetsDir, `.${url.pathname}`);
  // Path traversal guard: resolved path precisa estar DENTRO de clientAssetsDir.
  if (
    assetPath !== clientAssetsDir &&
    !assetPath.startsWith(clientAssetsDir + path.sep)
  ) {
    return new Response("Not Found", { status: 404 });
  }

  const file = Bun.file(assetPath);
  if (!(await file.exists())) {
    return new Response("Not Found", { status: 404 });
  }

  const headers = new Headers();
  // Bundled assets têm hash no nome → cache eterno. Public files (top-level
  // ou subpastas permitidas) mudam sem invalidar URL → cache curto.
  const isLongLivedStatic =
    url.pathname === "/robots.txt" ||
    url.pathname === "/sitemap.xml" ||
    url.pathname === "/sitemap-0.xml";

  headers.set(
    "Cache-Control",
    isBundledAsset
      ? "public, max-age=31536000, immutable"
      : isLongLivedStatic
        ? "public, max-age=604800"
        : "public, max-age=3600",
  );
  return new Response(file, { headers });
}

async function servePublishedSite(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return null;
  }

  const url = new URL(request.url);
  const publishedPath = resolvePublishedSitePath(url.pathname);
  if (!publishedPath) {
    return null;
  }

  const publishedFile = Bun.file(publishedPath);
  if (await publishedFile.exists()) {
    return new Response(publishedFile);
  }

  const publishedStat = await fs.stat(publishedPath).catch(() => null);
  if (!publishedStat?.isDirectory()) {
    return null;
  }

  const indexFile = Bun.file(path.join(publishedPath, "index.html"));
  if (!(await indexFile.exists())) {
    return null;
  }

  return new Response(indexFile);
}

const COMPRESSIBLE = /text\/html|text\/css|application\/javascript|application\/json|image\/svg\+xml/;

async function compressWorkerResponse(request: Request, response: Response): Promise<Response> {
  const ct = response.headers.get("content-type") ?? "";
  if (!COMPRESSIBLE.test(ct)) return response;
  if (response.headers.has("content-encoding")) return response;
  if (!response.body) return response;

  const accept = request.headers.get("accept-encoding") ?? "";
  let encoding: "br" | "gzip" | null = null;
  if (accept.includes("br")) encoding = "br";
  else if (accept.includes("gzip")) encoding = "gzip";
  if (!encoding) return response;

  const body = Buffer.from(await response.arrayBuffer());
  // Skip compression for very large payloads to avoid blocking
  if (body.byteLength > 4 * 1024 * 1024) return response;

  const compressed = encoding === "br" ? brotliCompressSync(body) : gzipSync(body);
  const headers = new Headers(response.headers);
  headers.set("content-encoding", encoding);
  headers.set("vary", "Accept-Encoding");
  headers.delete("content-length");

  return new Response(compressed, { status: response.status, statusText: response.statusText, headers });
}

Bun.serve({
  port,
  hostname,
  async fetch(request) {
    const staticResponse = await serveStaticAsset(request);
    if (staticResponse) {
      return staticResponse;
    }

    const publishedSiteResponse = await servePublishedSite(request);
    if (publishedSiteResponse) {
      return publishedSiteResponse;
    }

    const workerResponse = await worker.fetch(
      request,
      {},
      {
        waitUntil: (promise: Promise<unknown>) => {
          promise.catch((error) => console.error(error));
        },
      },
    );

    return compressWorkerResponse(request, workerResponse);
  },
});
