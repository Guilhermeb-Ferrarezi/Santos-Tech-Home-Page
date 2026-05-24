/**
 * One-off image optimization.
 *
 * Lê src/assets/*.png e gera, em src/assets/optimized/, versões AVIF + WebP
 * em múltiplos tamanhos pra serem usadas via <picture>/srcset.
 *
 * Rodar:  node scripts/optimize-images.mjs
 *
 * Política:
 * - Tamanhos: 400, 800, 1200 (cobre mobile, tablet, desktop hi-dpi)
 * - Formatos: AVIF (q=55) + WebP (q=72) — AVIF é prioritário, WebP fallback
 * - Originais PNG preservados em src/assets/ pra compatibilidade
 * - Skip logos/favicons (já são pequenos e precisam transparência fiel)
 */

import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "src/assets");
const OUT = path.join(SRC, "optimized");

const SIZES = [400, 800, 1200];
// Tamanhos extras pro logo (display 48px = 96px @2x DPR). Cobre header/footer.
const LOGO_SIZES = [96, 192];
const SKIP = new Set();

await fs.mkdir(OUT, { recursive: true });

const files = (await fs.readdir(SRC)).filter(
  (f) => f.endsWith(".png") && !SKIP.has(f),
);

console.log(`Optimizing ${files.length} images at ${SIZES.length} sizes × 2 formats...`);

for (const file of files) {
  const name = path.basename(file, ".png");
  const inputPath = path.join(SRC, file);
  const input = sharp(inputPath);
  const { width: origWidth } = await input.metadata();
  const isLogo = name === "logo";

  // Logo precisa de tamanhos pequenos (display em 48-96px). Outras imagens
  // usam SIZES; pequenas exportam no tamanho nativo.
  let targets;
  if (isLogo) {
    targets = LOGO_SIZES;
  } else if (origWidth && origWidth < SIZES[0]) {
    targets = [origWidth];
  } else {
    targets = SIZES.filter((s) => !origWidth || origWidth >= s);
  }

  for (const size of targets) {
    const resized = input.clone().resize(size, null, { withoutEnlargement: true });

    await Promise.all([
      resized
        .clone()
        .avif({ quality: 55, effort: 6 })
        .toFile(path.join(OUT, `${name}-${size}.avif`)),
      resized
        .clone()
        .webp({ quality: 72, effort: 5 })
        .toFile(path.join(OUT, `${name}-${size}.webp`)),
    ]);
  }

  const stat = await fs.stat(inputPath);
  console.log(`  ✓ ${file} (${Math.round(stat.size / 1024)} KB original)`);
}

// Report saving
const optimized = await fs.readdir(OUT);
let totalOpt = 0;
for (const f of optimized) {
  totalOpt += (await fs.stat(path.join(OUT, f))).size;
}
let totalOrig = 0;
for (const f of files) {
  totalOrig += (await fs.stat(path.join(SRC, f))).size;
}

console.log(`\nDone. Generated ${optimized.length} optimized files.`);
console.log(`  Originals (PNG): ${Math.round(totalOrig / 1024)} KB`);
console.log(`  Optimized total: ${Math.round(totalOpt / 1024)} KB`);
