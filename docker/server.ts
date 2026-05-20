import path from "node:path";
import { promises as fs } from "node:fs";

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

async function serveStaticAsset(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return null;
  }

  const url = new URL(request.url);
  if (!url.pathname.startsWith("/assets/")) {
    return null;
  }

  const assetPath = path.resolve(clientAssetsDir, `.${url.pathname}`);
  if (!assetPath.startsWith(path.join(clientAssetsDir, "assets"))) {
    return new Response("Not Found", { status: 404 });
  }

  const file = Bun.file(assetPath);
  if (!(await file.exists())) {
    return new Response("Not Found", { status: 404 });
  }

  const headers = new Headers();
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
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

    return worker.fetch(
      request,
      {},
      {
        waitUntil: (promise: Promise<unknown>) => {
          promise.catch((error) => console.error(error));
        },
      },
    );
  },
});
