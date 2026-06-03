/**
 * Fotos da Colônia de Férias.
 *
 * 👉 Pra trocar/adicionar fotos: basta soltar arquivos (.jpg, .jpeg, .png,
 *    .webp ou .avif) na pasta `src/assets/colonia/`. Elas entram
 *    automaticamente no carrossel do hero da página da colônia — não precisa
 *    mexer em código nem rodar script. A ordem segue o nome do arquivo
 *    (ex.: 01-..., 02-...).
 */
const mods = import.meta.glob("./colonia/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const COLONIA_PHOTOS: string[] = Object.keys(mods)
  .sort()
  .map((k) => mods[k]);
