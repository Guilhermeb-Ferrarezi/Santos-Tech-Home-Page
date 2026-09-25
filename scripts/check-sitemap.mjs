/**
 * Confere se o public/sitemap.xml lista exatamente as rotas públicas do site.
 *
 * Por quê: o sitemap é mantido à mão e é a fonte de verdade das rotas para o
 * bot de WhatsApp (santos-tech-infra/apps/bot-go), que só lê as URLs listadas
 * nele. Rota nova fora do sitemap = o bot não responde sobre ela; URL velha no
 * sitemap = o bot abre um 404. Antes era só uma regra escrita no CLAUDE.md;
 * agora roda no `bun run lint` (achado tecnico-rastreio-indexacao-18).
 *
 * Como:
 *   1. Lê os arquivos de src/routes (roteamento por arquivos do TanStack Router:
 *      pontos no nome = segmentos da URL, "index" = raiz do segmento).
 *   2. Ignora __root, arquivos com prefixo "-" (ignorados pelo TanStack),
 *      as áreas internas apresentacoes.* e professores.*, e qualquer rota que
 *      chame noindexMeta( (não deve ir pro sitemap).
 *   3. Rota de layout (ex.: cursos.tsx, que só tem <Outlet />) não gera URL
 *      própria: quem gera é o filho index (cursos.index.tsx → /cursos).
 *   4. Compara com os <loc> do sitemap nos dois sentidos e confere o formato
 *      (https://santos-tech.com/..., sem barra final, sem duplicata).
 *
 * Sai com código 1 e lista o que falta/sobra. Rodar: node scripts/check-sitemap.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PASTA_ROTAS = path.join(RAIZ, "src", "routes");
const ARQUIVO_SITEMAP = path.join(RAIZ, "public", "sitemap.xml");
const ORIGEM = "https://santos-tech.com";
const AREAS_INTERNAS = ["apresentacoes", "professores"];
const EXTENSAO_ROTA = /\.(tsx|ts|jsx|js)$/;

const erros = [];

// ── 1. Rotas públicas a partir de src/routes ────────────────────────────────
const entradas = await fs.readdir(PASTA_ROTAS, { withFileTypes: true });

// Subpastas e convenções que este script não sabe converter em URL: falha
// alto em vez de gerar uma lista errada em silêncio.
for (const e of entradas) {
  if (e.isDirectory()) {
    erros.push(`src/routes/${e.name}/: subpasta de rotas não suportada — adapte scripts/check-sitemap.mjs`);
  }
}

const arquivos = entradas
  .filter((e) => e.isFile() && EXTENSAO_ROTA.test(e.name) && !e.name.startsWith("-"))
  .map((e) => ({ arquivo: e.name, nome: e.name.replace(EXTENSAO_ROTA, "") }))
  .filter(({ nome }) => nome !== "__root");
const nomes = arquivos.map(({ nome }) => nome);

const rotasPublicas = new Map(); // path → arquivo de origem
for (const { arquivo, nome } of arquivos) {
  const segmentos = nome.split(".");

  if (AREAS_INTERNAS.includes(segmentos[0])) continue;

  // Layout: existe outro arquivo "nome.*" → a URL vem do filho index (se houver).
  if (nomes.some((outro) => outro.startsWith(`${nome}.`))) continue;

  const invalido = segmentos.find((s) => /^[$_(]|[[\]]/.test(s));
  if (invalido) {
    erros.push(`src/routes/${arquivo}: segmento "${invalido}" (rota dinâmica/pathless) não suportado — adapte scripts/check-sitemap.mjs`);
    continue;
  }

  const fonte = await fs.readFile(path.join(PASTA_ROTAS, arquivo), "utf8");
  if (fonte.includes("noindexMeta(")) continue;

  if (segmentos.at(-1) === "index") segmentos.pop();
  const caminho = `/${segmentos.join("/")}`;
  rotasPublicas.set(caminho, `src/routes/${arquivo}`);
}

// ── 2. URLs do sitemap ──────────────────────────────────────────────────────
const xml = (await fs.readFile(ARQUIVO_SITEMAP, "utf8")).replace(/<!--[\s\S]*?-->/g, "");
const locs = [...xml.matchAll(/<loc>\s*([^<]*?)\s*<\/loc>/g)].map((m) => m[1]);

const caminhosSitemap = new Set();
for (const loc of locs) {
  if (!loc.startsWith(`${ORIGEM}/`)) {
    erros.push(`sitemap: ${loc} não começa com ${ORIGEM}/`);
    continue;
  }
  const caminho = loc.slice(ORIGEM.length);
  if (caminho !== "/" && caminho.endsWith("/")) {
    erros.push(`sitemap: ${loc} tem barra final (a forma canônica é sem barra)`);
  }
  const normalizado = caminho === "/" ? "/" : caminho.replace(/\/$/, "");
  if (caminhosSitemap.has(normalizado)) erros.push(`sitemap: ${loc} aparece duplicada`);
  caminhosSitemap.add(normalizado);
}

// ── 3. Comparação nos dois sentidos ─────────────────────────────────────────
const faltando = [...rotasPublicas.keys()].filter((p) => !caminhosSitemap.has(p)).sort();
const sobrando = [...caminhosSitemap].filter((p) => !rotasPublicas.has(p)).sort();

for (const p of faltando) {
  erros.push(`faltando no sitemap: ${ORIGEM}${p}  (rota em ${rotasPublicas.get(p)})`);
}
for (const p of sobrando) {
  erros.push(`sobrando no sitemap: ${ORIGEM}${p}  (nenhuma rota pública em src/routes gera essa URL)`);
}

if (erros.length) {
  console.error("check-sitemap: public/sitemap.xml fora de sincronia com src/routes\n");
  for (const e of erros) console.error(`  - ${e}`);
  console.error(
    "\nToda mudança de rota atualiza o public/sitemap.xml no mesmo commit (ver CLAUDE.md): o bot de WhatsApp só lê as URLs listadas nele.",
  );
  process.exit(1);
}

console.log(`check-sitemap: ok — ${rotasPublicas.size} rotas públicas = ${locs.length} URLs no sitemap`);
