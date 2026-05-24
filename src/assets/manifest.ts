/**
 * Image manifest — auto-discovered via Vite glob imports.
 *
 * Lê tudo em src/assets/optimized/ e organiza por nome + formato + tamanho.
 * Os PNGs originais em src/assets/*.png viram o fallback.
 *
 * Convenção dos arquivos optimized: `{name}-{size}.{avif|webp}`
 * (gerado por scripts/optimize-images.mjs).
 *
 * O <Img name="capa-jr" /> consulta esse manifest e renderiza <picture>.
 */

// Vite resolve esses globs em build-time pra um objeto Record<path, url>.
const avifMods = import.meta.glob("./optimized/*.avif", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const webpMods = import.meta.glob("./optimized/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

// Não importamos os PNGs originais — eles ficam em src/assets/ só pra
// servirem de fonte pro script de otimização. O fallback do <picture>
// usa o maior WebP disponível (cobertura ~97% dos browsers).

type ImageEntry = {
  fallback: string;
  sizes: number[];
  avif: Record<number, string>;
  webp: Record<number, string>;
};

function parsePathToNameSize(filepath: string): { name: string; size: number } | null {
  const filename = filepath.split("/").pop() ?? "";
  const match = filename.match(/^(.+)-(\d+)\.(avif|webp)$/);
  if (!match) return null;
  return { name: match[1], size: parseInt(match[2], 10) };
}

const manifest: Record<string, ImageEntry> = {};

// Bucket AVIFs
for (const [path, url] of Object.entries(avifMods)) {
  const parsed = parsePathToNameSize(path);
  if (!parsed) continue;
  if (!manifest[parsed.name]) {
    manifest[parsed.name] = { fallback: "", sizes: [], avif: {}, webp: {} };
  }
  manifest[parsed.name].avif[parsed.size] = url;
  if (!manifest[parsed.name].sizes.includes(parsed.size)) {
    manifest[parsed.name].sizes.push(parsed.size);
  }
}

// Bucket WebPs
for (const [path, url] of Object.entries(webpMods)) {
  const parsed = parsePathToNameSize(path);
  if (!parsed) continue;
  if (!manifest[parsed.name]) {
    manifest[parsed.name] = { fallback: "", sizes: [], avif: {}, webp: {} };
  }
  manifest[parsed.name].webp[parsed.size] = url;
}

// Ordena sizes ascendente + define fallback como o maior WebP disponível.
for (const entry of Object.values(manifest)) {
  entry.sizes.sort((a, b) => a - b);
  const biggestSize = entry.sizes[entry.sizes.length - 1];
  entry.fallback = entry.webp[biggestSize] ?? entry.avif[biggestSize] ?? "";
}

export const IMAGES = manifest;
export type ImageName = keyof typeof manifest;
