import { promises as fs } from "node:fs";
import path from "node:path";

import JSZip from "jszip";

import { normalizePublishedRoutePath, routePathToDirectoryName } from "./site-path";

export type PublishedSiteSummary = {
  routePath: string;
  title: string | null;
  sourceFileName: string;
  fileCount: number;
  totalBytes: number;
  publishedAt: string;
  updatedAt: string;
};

type PublishedSiteManifest = PublishedSiteSummary & {
  previewHtml: string | null;
};

const storageRoot = process.env.SITE_PUBLISHER_STORAGE_DIR?.trim()
  ? path.resolve(process.env.SITE_PUBLISHER_STORAGE_DIR.trim())
  : path.resolve(process.cwd(), ".site-routes");
const publisherSecret =
  process.env.SITE_PUBLISHER_SECRET?.trim() ||
  (process.env.NODE_ENV === "production" ? "" : "dev-publicador");

const manifestFileName = "manifest.json";

async function ensureStorageRoot() {
  await fs.mkdir(storageRoot, { recursive: true });
}

function assertPublisherSecret(secret: string | null | undefined) {
  if (!publisherSecret) {
    throw new Error("Configure SITE_PUBLISHER_SECRET no ambiente do app.");
  }

  if (!secret || secret.trim() !== publisherSecret) {
    throw new Error("Chave de publicação inválida.");
  }
}

function toSafeOutputPath(routePath: string, entryName: string) {
  const routeDir = routePathToDirectoryName(routePath);
  const normalized = path.posix.normalize(entryName).replace(/^(\.\.(\/|\\|$))+/, "");
  if (!normalized || normalized === "." || normalized.startsWith("../") || normalized.startsWith("..\\")) {
    return null;
  }

  const fullPath = path.join(storageRoot, routeDir, normalized);
  const relative = path.relative(path.join(storageRoot, routeDir), fullPath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return null;
  }

  return fullPath;
}

function extractTitle(html: string) {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  return match?.[1]?.trim() || null;
}

async function readManifest(routePath: string): Promise<PublishedSiteManifest | null> {
  const manifestPath = path.join(storageRoot, routePathToDirectoryName(routePath), manifestFileName);

  try {
    const raw = await fs.readFile(manifestPath, "utf8");
    return JSON.parse(raw) as PublishedSiteManifest;
  } catch {
    return null;
  }
}

async function walkManifests(dir: string, routePrefix = ""): Promise<PublishedSiteManifest[]> {
  let entries: Array<PublishedSiteManifest> = [];

  let dirEntries: Array<import("node:fs").Dirent>;
  try {
    dirEntries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return entries;
  }

  const manifest = await readManifest(routePrefix || "/");
  if (manifest) {
    entries.push(manifest);
  }

  for (const entry of dirEntries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const nextRoutePrefix = routePrefix
      ? `${routePrefix}/${entry.name}`
      : `/${entry.name}`;
    entries = entries.concat(await walkManifests(path.join(dir, entry.name), nextRoutePrefix));
  }

  return entries;
}

export async function listPublishedSitesFromDisk(): Promise<PublishedSiteSummary[]> {
  await ensureStorageRoot();
  const manifests = await walkManifests(storageRoot);
  return manifests.sort((a, b) => a.routePath.localeCompare(b.routePath));
}

export async function removePublishedSiteFromDisk(routePathInput: string) {
  const normalized = normalizePublishedRoutePath(routePathInput);
  if (!normalized.path) {
    throw new Error(normalized.error ?? "Rota inválida.");
  }

  const routeDir = path.join(storageRoot, routePathToDirectoryName(normalized.path));
  await fs.rm(routeDir, { recursive: true, force: true });
}

export async function publishPublishedSiteFromFormData(formData: FormData): Promise<PublishedSiteSummary> {
  const routePathInput = formData.get("routePath")?.toString() ?? "";
  const secret = formData.get("publisherSecret")?.toString() ?? "";
  const normalized = normalizePublishedRoutePath(routePathInput);
  if (!normalized.path) {
    throw new Error(normalized.error ?? "Rota inválida.");
  }

  assertPublisherSecret(secret);

  const archiveEntry = formData.get("archive");
  if (!(archiveEntry instanceof File)) {
    throw new Error("Envie um arquivo ZIP.");
  }

  await ensureStorageRoot();

  const routeDir = path.join(storageRoot, routePathToDirectoryName(normalized.path));
  await fs.rm(routeDir, { recursive: true, force: true });
  await fs.mkdir(routeDir, { recursive: true });

  const archive = await JSZip.loadAsync(await archiveEntry.arrayBuffer());
  const files = Object.values(archive.files);
  let totalBytes = 0;
  let indexHtml = "";
  let fileCount = 0;

  for (const entry of files) {
    if (entry.dir) {
      continue;
    }

    const outputPath = toSafeOutputPath(normalized.path, entry.name);
    if (!outputPath) {
      continue;
    }

    const buffer = await entry.async("nodebuffer");
    totalBytes += buffer.byteLength;
    fileCount += 1;

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, buffer);

    if (path.posix.normalize(entry.name) === "index.html") {
      indexHtml = buffer.toString("utf8");
    }
  }

  if (!indexHtml) {
    throw new Error("O ZIP precisa conter um `index.html` na raiz.");
  }

  const now = new Date().toISOString();
  const manifest: PublishedSiteManifest = {
    routePath: normalized.path,
    sourceFileName: archiveEntry.name || "site.zip",
    title: extractTitle(indexHtml),
    fileCount,
    totalBytes,
    publishedAt: now,
    updatedAt: now,
    previewHtml: indexHtml.slice(0, 2000),
  };

  await fs.writeFile(
    path.join(routeDir, manifestFileName),
    JSON.stringify(manifest, null, 2),
    "utf8",
  );

  return manifest;
}

export async function readPublishedSiteFromDisk(routePathInput: string) {
  const normalized = normalizePublishedRoutePath(routePathInput);
  if (!normalized.path) {
    return null;
  }

  return readManifest(normalized.path);
}
