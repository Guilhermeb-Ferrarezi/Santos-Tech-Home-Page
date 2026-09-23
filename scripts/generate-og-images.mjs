/**
 * Gera as imagens de Open Graph (1200×630) de cada curso.
 *
 * Por quê: hoje TODO curso compartilha public/og-image.png (a mesma capa
 * genérica). O objetivo é cada curso ter uma imagem própria, com um ícone
 * temático (ex.: planilha pro Excel, código pro Python) sobre um fundo na
 * paleta institucional.
 *
 * Como: monta um SVG por curso (fundo + ícone + título) e rasteriza com
 * `sharp` (já é devDependency — usa o backend librsvg embutido). Os ícones
 * vêm direto do `__iconNode` que o lucide-react exporta por ícone — dado
 * puro (array de elementos SVG), sem precisar renderizar React. Ou seja:
 * zero dependência nova só pra gerar imagem.
 *
 * Fonte: o SVG pede "Poppins" primeiro, mas o render (librsvg/fontconfig)
 * só acha a fonte se ela estiver instalada como fonte de SISTEMA na máquina
 * que roda o script — @fontsource/poppins (dependência do site) só publica
 * woff/woff2, que o fontconfig não indexa. Sem Poppins instalada, cai pro
 * fallback sans-serif (Liberation Sans/Noto Sans/Arial) — ainda sem serifa,
 * ainda legível, só não é pixel-perfect na tipografia. Se quiser a Poppins
 * exata, instale a fonte (TTF/OTF) no sistema antes de rodar.
 *
 * Rodar:  bun run generate:og
 */

import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const ICONS_DIR = path.join(ROOT, "node_modules/lucide-react/dist/esm/icons");
const LOGO_PATH = path.join(ROOT, "src/assets/logo.png");

const WIDTH = 1200;
const HEIGHT = 630;
const FONT_STACK = "Poppins, 'Liberation Sans', 'Noto Sans', Arial, sans-serif";

// ──────────────────────────────────────────────────────────────────────────
// PALETA — DESIGN_SYSTEM.md §Cores + src/lib/program-theme.ts (per programa)
// ──────────────────────────────────────────────────────────────────────────

const PARTICULAR_THEME = { bgDark: "#04325A", bgLight: "#187ABF", accent: "#0DB88F" };

const PROGRAM_THEME = {
  jr: { bgDark: "#3d1858", bgLight: "#5a2680", accent: "#DEABF7" },
  create: { bgDark: "#04325A", bgLight: "#187ABF", accent: "#49A8EB" },
  camps: { bgDark: "#0f5a6b", bgLight: "#157e94", accent: "#6EC4CC" },
  academies: { bgDark: "#020a6b", bgLight: "#1c2ea8", accent: "#818CF8" },
};

// ──────────────────────────────────────────────────────────────────────────
// MANIFESTO — curso → ícone lucide (kebab-case = nome do arquivo em
// lucide-react/dist/esm/icons/) + texto de exibição na imagem
// ──────────────────────────────────────────────────────────────────────────

const PARTICULAR_ICONS = {
  ads: "layers",
  "agentes-ia": "bot",
  autocad: "drafting-compass",
  backend: "server",
  canva: "palette",
  capcut: "clapperboard",
  chatgpt: "message-circle",
  ciberseguranca: "shield",
  "conteudo-ia": "sparkles",
  copywriting: "pen-tool",
  davinci: "film",
  ecommerce: "shopping-cart",
  "excel-ia": "table-2",
  "excel-power-bi": "table-properties",
  excel: "sheet",
  frontend: "code-xml",
  fullstack: "boxes",
  "funil-vendas": "route",
  git: "git-branch",
  "google-ads": "search",
  "ia-visual": "image",
  ia: "brain-circuit",
  "impressao-3d": "printer",
  informatica: "monitor-smartphone",
  jogos: "gamepad-2",
  linux: "square-terminal",
  logica: "braces",
  make: "wand-sparkles",
  manutencao: "wrench",
  marketing: "megaphone",
  "meta-ads": "target",
  mobile: "smartphone",
  "modelagem-3d": "box",
  n8n: "git-fork",
  office: "folder",
  photoshop: "image-plus",
  "power-apps": "blocks",
  "power-bi": "chart-column",
  powerpoint: "presentation",
  premiere: "scissors",
  "python-apis": "square-code",
  python: "terminal",
  rag: "database-zap",
  "redes-sociais": "messages-square",
  redes: "network",
  revit: "compass",
  seo: "trending-up",
  sql: "database",
  suporte: "message-circle-question-mark",
  "tiktok-ads": "video",
  typescript: "file-code",
  word: "type",
};

// Ícone padrão pra curso novo que ainda não ganhou uma entrada em PARTICULAR_ICONS —
// garante que TODO curso sai com imagem, mesmo antes de alguém escolher um
// ícone temático melhor pra ele.
const DEFAULT_ICON = "graduation-cap";

/**
 * Descobre os cursos particulares direto de `src/routes/particular.cursos.*.tsx` —
 * lê `nome`/`categoria` do `COURSE_DATA` de cada rota, em vez de uma lista
 * fixa. Curso novo (arquivo novo) ou título renomeado aparece aqui sozinho
 * na próxima vez que o script rodar, sem precisar editar nada aqui.
 */
async function discoverParticularCourses() {
  const routesDir = path.join(ROOT, "src/routes");
  const files = (await fs.readdir(routesDir)).filter((f) => /^particular\.cursos\..+\.tsx$/.test(f));
  const courses = [];
  for (const file of files) {
    const content = await fs.readFile(path.join(routesDir, file), "utf8");
    const slug = file.replace(/^particular\.cursos\./, "").replace(/\.tsx$/, "");
    const nomeMatch = content.match(/nome:\s*"([^"]+)"/);
    const categoriaMatch = content.match(/categoria:\s*"([^"]+)"/);
    if (!nomeMatch || !categoriaMatch) {
      console.warn(`  ! ${file}: não achei nome/categoria no COURSE_DATA, pulando`);
      continue;
    }
    courses.push({ slug, title: nomeMatch[1], tag: categoriaMatch[1] });
  }
  return courses.sort((a, b) => a.slug.localeCompare(b.slug));
}

const KIDS_PAGES = [
  { slug: "create", title: "CREATE — Criação de Jogos", tag: "8 a 14 anos", icon: "gamepad-2", program: "create" },
  { slug: "create-8-9-anos", title: "CREATE Ano 1 — Fundamentos do Arcade", tag: "8 a 9 anos", icon: "gamepad-2", program: "create" },
  { slug: "create-9-10-anos", title: "CREATE Ano 2 — Construtores de Mundos", tag: "9 a 10 anos", icon: "boxes", program: "create" },
  { slug: "create-10-11-anos", title: "CREATE Ano 3 — Códex do Programador", tag: "10 a 11 anos", icon: "file-code", program: "create" },
  { slug: "create-11-12-anos", title: "CREATE Ano 4 — Forja dos Algoritmos", tag: "11 a 12 anos", icon: "braces", program: "create" },
  { slug: "create-12-13-anos", title: "CREATE Ano 5 — Unity + C#", tag: "12 a 13 anos", icon: "cpu", program: "create" },
  { slug: "create-13-14-anos", title: "CREATE Ano 6 — Arquitetura Viva", tag: "13 a 14 anos", icon: "layers", program: "create" },
  { slug: "junior", title: "JR — Primeira Infância", tag: "5 a 8 anos", icon: "sparkles", program: "jr" },
  { slug: "junior-5-6-anos", title: "JR1 — Primeiros Passos", tag: "5 a 6 anos", icon: "footprints", program: "jr" },
  { slug: "junior-6-7-anos", title: "JR2 — Construindo a Base", tag: "6 a 7 anos", icon: "blocks", program: "jr" },
  { slug: "junior-7-8-anos", title: "JR3 — Pronto pra Criar", tag: "7 a 8 anos", icon: "rocket", program: "jr" },
  { slug: "camps", title: "Colônia de Férias", tag: "5 a 14 anos", icon: "sun", program: "camps" },
  { slug: "academies", title: "Academias de Robótica e IA", tag: "Especialização", icon: "bot", program: "academies" },
];

// ──────────────────────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────────────────────

/** Escapa texto pra uso seguro dentro de atributos/conteúdo SVG. */
function esc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Quebra um título em linhas que caibam em `maxCharsPerLine` (heurística por contagem de caracteres). */
function wrapTitle(title, maxCharsPerLine) {
  const words = title.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** Carrega o `__iconNode` (dado puro, sem React) de um ícone lucide-react pelo nome kebab-case. */
async function loadIconNode(iconName) {
  const mod = await import(pathToFileURL(path.join(ICONS_DIR, `${iconName}.mjs`)).href);
  return mod.__iconNode;
}

/** Converte um `__iconNode` lucide em elementos SVG (string), como um <g> em viewBox 0 0 24 24. */
function iconNodeToSvgChildren(iconNode) {
  return iconNode
    .map(([tag, attrs]) => {
      const attrStr = Object.entries(attrs)
        .filter(([k]) => k !== "key")
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ");
      return `<${tag} ${attrStr} />`;
    })
    .join("");
}

/** SVG do ícone posicionado em (x,y) com tamanho `size`, cor `color` e opacidade `opacity`. */
function renderIcon(iconNode, { x, y, size, color, opacity = 1, strokeWidth = 1.5 }) {
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}">${iconNodeToSvgChildren(iconNode)}</svg>`;
}

/** Template principal (curso adulto ou infantil): fundo temático + ícone grande + título + tag. */
// Faixa vertical reservada pro título (entre o badge e a tag/rodapé) — fixa,
// pra tag e rodapé nunca colidirem com o título, não importa quantas linhas.
const TITLE_BAND_TOP = 175;
const TITLE_BAND_HEIGHT = 270;

/** Escolhe fonte + quebra de linha que caibam na faixa reservada (no máx. 4 linhas). */
function fitTitle(title) {
  const candidates = [
    { fontSize: 64, maxChars: 20 },
    { fontSize: 56, maxChars: 23 },
    { fontSize: 48, maxChars: 26 },
    { fontSize: 40, maxChars: 30 },
    { fontSize: 34, maxChars: 36 },
    { fontSize: 28, maxChars: 44 },
  ];
  let chosen = candidates[candidates.length - 1];
  let lines = wrapTitle(title, chosen.maxChars);
  for (const c of candidates) {
    const l = wrapTitle(title, c.maxChars);
    if (l.length <= 4 && l.length * c.fontSize * 1.15 <= TITLE_BAND_HEIGHT) {
      chosen = c;
      lines = l;
      break;
    }
  }
  return { lines, fontSize: chosen.fontSize, lineHeight: chosen.fontSize * 1.15 };
}

function buildCourseSvg({ title, tag, badge, iconNode, theme }) {
  const { lines: titleLines, fontSize: titleFontSize, lineHeight } = fitTitle(title);
  const blockHeight = titleLines.length * lineHeight;
  const titleStartY = TITLE_BAND_TOP + (TITLE_BAND_HEIGHT - blockHeight) / 2 + titleFontSize * 0.78;

  const titleTspans = titleLines
    .map((line, i) => `<tspan x="80" y="${titleStartY + i * lineHeight}">${esc(line)}</tspan>`)
    .join("");

  const tagY = TITLE_BAND_TOP + TITLE_BAND_HEIGHT + 24;

  return `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${theme.bgDark}" />
        <stop offset="100%" stop-color="${theme.bgLight}" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${theme.accent}" stop-opacity="0" />
      </radialGradient>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fill-opacity="0.08" />
      </pattern>
    </defs>

    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)" />
    <circle cx="1000" cy="200" r="380" fill="url(#glow)" />

    <!-- badge -->
    <rect x="80" y="72" width="${52 + badge.length * 10.5}" height="40" rx="20" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.16" />
    <text x="${80 + 22}" y="98" font-family="${FONT_STACK}" font-size="15" font-weight="600" letter-spacing="1.6" fill="#ffffff" fill-opacity="0.75">${esc(badge.toUpperCase())}</text>

    <!-- título -->
    <text font-family="${FONT_STACK}" font-size="${titleFontSize}" font-weight="800" fill="#ffffff">${titleTspans}</text>

    <!-- tag (categoria / faixa etária) -->
    <text x="80" y="${tagY}" font-family="${FONT_STACK}" font-size="24" font-weight="500" fill="${theme.accent}">${esc(tag)}</text>

    <!-- ícone grande decorativo -->
    <circle cx="1000" cy="410" r="170" fill="#ffffff" fill-opacity="0.06" />
    ${renderIcon(iconNode, { x: 870, y: 280, size: 260, color: theme.accent, opacity: 0.95 })}

    <!-- rodapé -->
    <text x="164" y="574" font-family="${FONT_STACK}" font-size="26" font-weight="700" fill="#ffffff">Santos Tech</text>
  </svg>`;
}

/** Template do og-image.png padrão (institucional, sem curso específico). */
function buildDefaultSvg() {
  return `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${PARTICULAR_THEME.bgDark}" />
        <stop offset="100%" stop-color="${PARTICULAR_THEME.bgLight}" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${PARTICULAR_THEME.accent}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${PARTICULAR_THEME.accent}" stop-opacity="0" />
      </radialGradient>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fill-opacity="0.08" />
      </pattern>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)" />
    <circle cx="600" cy="315" r="420" fill="url(#glow)" />
    <text x="600" y="330" text-anchor="middle" font-family="${FONT_STACK}" font-size="72" font-weight="800" fill="#ffffff">Santos Tech</text>
    <text x="600" y="384" text-anchor="middle" font-family="${FONT_STACK}" font-size="28" font-weight="500" fill="${PARTICULAR_THEME.accent}">Escola de tecnologia presencial em Ribeirão Preto</text>
  </svg>`;
}

// ──────────────────────────────────────────────────────────────────────────
// RUN
// ──────────────────────────────────────────────────────────────────────────

async function main() {
  // Logo institucional: usa a arte original (preta) sem recolorir — é a
  // mesma logo do header do site, não dá pra inventar uma versão "branca"
  // dela. Como a arte é preta e o fundo dos cards é escuro, ela vai dentro
  // de um selo branco (mesma solução do header, que também põe a logo sobre
  // fundo claro) só pra garantir contraste — a logo em si fica intacta.
  const BADGE_SIZE = 72;
  const LOGO_SIZE = 52;
  const badgeCircleSvg = `<svg width="${BADGE_SIZE}" height="${BADGE_SIZE}"><circle cx="${BADGE_SIZE / 2}" cy="${BADGE_SIZE / 2}" r="${BADGE_SIZE / 2}" fill="#ffffff" /></svg>`;
  const logoOriginal = await sharp(LOGO_PATH).resize(LOGO_SIZE, LOGO_SIZE, { fit: "inside" }).png().toBuffer();
  const logoBadge = await sharp(Buffer.from(badgeCircleSvg))
    .composite([{ input: logoOriginal, left: Math.round((BADGE_SIZE - LOGO_SIZE) / 2), top: Math.round((BADGE_SIZE - LOGO_SIZE) / 2) }])
    .png()
    .toBuffer();

  const iconCache = new Map();
  async function getIcon(name) {
    if (!iconCache.has(name)) iconCache.set(name, await loadIconNode(name));
    return iconCache.get(name);
  }

  // 1) og-image.png padrão (institucional)
  const defaultBase = await sharp(Buffer.from(buildDefaultSvg())).png().toBuffer();
  await sharp(defaultBase)
    .composite([{ input: logoBadge, left: WIDTH / 2 - 36, top: 436 }])
    .png()
    .toFile(path.join(ROOT, "public/og-image.png"));
  console.log("✓ public/og-image.png (1200×630)");

  // 2) cursos particulares — descobertos direto das rotas (ver discoverParticularCourses)
  const particularDir = path.join(ROOT, "public/og/particular");
  await fs.mkdir(particularDir, { recursive: true });
  const particularCourses = await discoverParticularCourses();
  for (const course of particularCourses) {
    const iconName = PARTICULAR_ICONS[course.slug];
    if (!iconName) {
      console.warn(`  ! ${course.slug}: sem ícone mapeado em PARTICULAR_ICONS, usando "${DEFAULT_ICON}"`);
    }
    const iconNode = await getIcon(iconName ?? DEFAULT_ICON);
    const svg = buildCourseSvg({
      title: course.title,
      tag: course.tag,
      badge: `Santos Tech · Particular`,
      iconNode,
      theme: PARTICULAR_THEME,
    });
    const base = await sharp(Buffer.from(svg)).png().toBuffer();
    const final = await sharp(base)
      .composite([{ input: logoBadge, left: 80, top: 518 }])
      .png()
      .toFile(path.join(particularDir, `${course.slug}.png`));
    void final;
  }
  console.log(`✓ public/og/particular/*.png (${particularCourses.length} imagens)`);

  // 3) cursos infantis
  const infantilDir = path.join(ROOT, "public/og/infantil");
  await fs.mkdir(infantilDir, { recursive: true });
  for (const page of KIDS_PAGES) {
    const iconNode = await getIcon(page.icon);
    const theme = PROGRAM_THEME[page.program];
    const svg = buildCourseSvg({
      title: page.title,
      tag: page.tag,
      badge: `Santos Tech`,
      iconNode,
      theme,
    });
    const base = await sharp(Buffer.from(svg)).png().toBuffer();
    await sharp(base)
      .composite([{ input: logoBadge, left: 80, top: 518 }])
      .png()
      .toFile(path.join(infantilDir, `${page.slug}.png`));
  }
  console.log(`✓ public/og/infantil/*.png (${KIDS_PAGES.length} imagens)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
