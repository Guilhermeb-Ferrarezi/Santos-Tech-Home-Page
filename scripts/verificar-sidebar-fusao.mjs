// Verificador da "fusão" da sidebar de /particular com o fundo da página.
//
// A sidebar em telas grandes não tem fundo próprio: é o mesmo fundo da página aparecendo
// por trás dela, e só os traços separam. Este script abre todas as páginas de /particular
// (home + cursos), nos modos claro/escuro e com a sidebar aberta/recolhida, rola a página
// inteira e mede, em cada posição:
//
//   fallback  — atrás da sidebar aparece algo que não é a página (o fundo neutro do layout).
//   corte     — um elemento de largura total pinta a partir da borda da sidebar, em vez de
//               continuar por baixo dela (faixa/seção sem "vazamento").
//   contraste — texto/ícone da sidebar sem contraste suficiente contra o que está de fato
//               atrás dele (texto 4.5:1, ícones e texto grande 3:1 — WCAG AA).
//   alinhamento — o vazamento moveu o conteúdo da página (comparado com o vazamento desligado).
//   overflow  — a página ganhou rolagem horizontal.
//
// Uso: com o dev server rodando, `node scripts/verificar-sidebar-fusao.mjs [BASE_URL]`
//      (padrão http://localhost:5173). Sai com código 1 se houver qualquer violação.
//      Variáveis opcionais: ONLY=slug1,slug2 · SHOTS=1 (salva screenshots em OUT_DIR).

import { chromium } from "playwright";
import sharp from "sharp";
import { readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = (process.argv[2] ?? process.env.BASE_URL ?? "http://localhost:5173").replace(/\/$/, "");
const OUT_DIR = process.env.OUT_DIR ?? join(ROOT, ".verificacao-sidebar");
const SHOTS = process.env.SHOTS === "1";
const CONCURRENCY = Number(process.env.CONCURRENCY ?? 4);

const slugs = readdirSync(join(ROOT, "src", "routes"))
  .map((f) => f.match(/^particular\.cursos\.(.+)\.tsx$/)?.[1])
  .filter(Boolean)
  .sort();
const only = process.env.ONLY?.split(",").map((s) => s.trim()).filter(Boolean);
const paths = ["/particular", ...slugs.map((s) => `/particular/cursos/${s}`)].filter(
  (p) => !only || only.some((o) => p === o || p.endsWith(`/${o}`) || (o === "home" && p === "/particular")),
);

const CONFIGS = [
  { name: "claro", dark: false, collapsed: false, viewport: { width: 1440, height: 900 } },
  { name: "escuro", dark: true, collapsed: false, viewport: { width: 1440, height: 900 } },
  { name: "claro-recolhida", dark: false, collapsed: true, viewport: { width: 1440, height: 900 } },
  { name: "escuro-recolhida", dark: true, collapsed: true, viewport: { width: 1440, height: 900 } },
  { name: "claro-1280", dark: false, collapsed: false, viewport: { width: 1280, height: 800 } },
  { name: "escuro-1920", dark: true, collapsed: false, viewport: { width: 1920, height: 1080 } },
];
const configs = process.env.CONFIGS
  ? CONFIGS.filter((c) => process.env.CONFIGS.split(",").includes(c.name))
  : CONFIGS;

const CONSENT = JSON.stringify({ version: 1, analytics: false, decision: "rejected", decidedAt: "2026-09-24T00:00:00.000Z" });

// Tudo que roda dentro da página vive aqui (serializado pelo Playwright).
function installProbe() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.globalCompositeOperation = "copy";
  const cache = new Map();
  function rgba(str) {
    if (!str || str === "transparent" || str === "none") return [0, 0, 0, 0];
    if (cache.has(str)) return cache.get(str);
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillStyle = str;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    const out = [d[0], d[1], d[2], d[3] / 255];
    cache.set(str, out);
    return out;
  }
  const COLOR_FN = /(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*(?:\([^()]*\)[^()]*)*\)|#[0-9a-fA-F]{3,8}\b/g;
  // Cor de um fundo: background-color + média das paradas de um gradiente (se houver).
  function bgOf(el) {
    const cs = getComputedStyle(el);
    let c = rgba(cs.backgroundColor);
    const img = cs.backgroundImage;
    if (img && img !== "none" && /gradient/.test(img)) {
      const stops = (img.match(COLOR_FN) ?? []).map(rgba).filter((s) => s[3] > 0);
      if (stops.length) {
        const n = stops.length;
        const avg = [0, 1, 2].map((i) => stops.reduce((a, s) => a + s[i], 0) / n);
        const a = stops.reduce((acc, s) => acc + s[3], 0) / n;
        // gradiente por cima da cor de fundo
        c = over([...avg, a], c);
      }
    }
    return c;
  }
  function over(top, bottom) {
    const a = top[3] + bottom[3] * (1 - top[3]);
    if (a === 0) return [0, 0, 0, 0];
    const ch = (i) => (top[i] * top[3] + bottom[i] * bottom[3] * (1 - top[3])) / a;
    return [ch(0), ch(1), ch(2), a];
  }
  function visible(el) {
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) < 0.05) return false;
    }
    return true;
  }
  // "Pinta" = tem fundo com alfa relevante, gradiente, ou é gráfico (svg/img/canvas/video).
  function paints(el) {
    if (!visible(el)) return false;
    if (el instanceof SVGElement) {
      if (el.tagName === "svg") return false; // só os filhos desenham
      const cs = getComputedStyle(el);
      const fill = rgba(cs.fill);
      return fill[3] > 0.4 && cs.fillOpacity !== "0";
    }
    if (["IMG", "CANVAS", "VIDEO", "PICTURE"].includes(el.tagName)) return true;
    return bgOf(el)[3] > 0.4;
  }
  function describe(el) {
    if (!el) return null;
    const owner = el instanceof SVGElement && el.ownerSVGElement ? el.ownerSVGElement : el;
    const r = owner.getBoundingClientRect();
    const cls = typeof owner.className === "string" ? owner.className : owner.getAttribute("class") ?? "";
    const path = [];
    for (let n = owner; n && n !== document.body && path.length < 6; n = n.parentElement) {
      path.unshift(n.tagName.toLowerCase() + (n.id ? `#${n.id}` : ""));
    }
    return { tag: owner.tagName.toLowerCase(), id: owner.id || undefined, cls: cls.slice(0, 160), path: path.join(">"), left: Math.round(r.left), width: Math.round(r.width), top: Math.round(r.top + scrollY) };
  }
  const aside = () => document.getElementById("particular-sidebar");
  const main = () => document.querySelector("main");
  function painterAt(x, y, { skipAside = true } = {}) {
    const a = aside();
    for (const el of document.elementsFromPoint(x, y)) {
      if (skipAside && a && (el === a || a.contains(el))) continue;
      if (paints(el)) return el;
    }
    return null;
  }
  window.__sb = {
    // Liga/desliga o vazamento tirando as classes de verdade (o padding original volta).
    // Faixas verticais (na viewport) ocupadas por ornamentos que ficam na borda do conteúdo
    // de propósito (.sb-edge) — costura ali é intencional.
    edgeRanges() {
      return [...document.querySelectorAll(".sb-edge, [data-sb-edge]")].map((el) => {
        const r = el.getBoundingClientRect();
        return [r.top, r.bottom];
      });
    },
    toggleBleed(on) {
      if (!on) {
        window.__sbRemoved = [];
        for (const cls of ["sb-bleed", "sb-bleed-full", "sb-edge", "sb-inset"]) {
          for (const el of document.querySelectorAll(`.${cls}`)) {
            el.classList.remove(cls);
            window.__sbRemoved.push([el, cls]);
          }
        }
      } else {
        for (const [el, cls] of window.__sbRemoved ?? []) el.classList.add(cls);
        window.__sbRemoved = [];
      }
    },
    // Posição x real de cada trecho de texto dentro do <main> (glifos, não a caixa do
    // elemento — um elemento que "vaza" muda a própria caixa, mas o texto não pode andar).
    textPositions() {
      const out = [];
      const walker = document.createTreeWalker(main(), NodeFilter.SHOW_TEXT);
      const range = document.createRange();
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (!n.textContent.trim()) continue;
        range.selectNodeContents(n);
        const r = range.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        out.push([Math.round(r.left * 10) / 10, n.textContent.trim().slice(0, 40)]);
      }
      return out;
    },
    overflowX() {
      return document.documentElement.scrollWidth - document.documentElement.clientWidth;
    },
    fusionActive() {
      const a = aside();
      return !!a && (a.hasAttribute("data-fusion") || a.hasAttribute("data-fusion-tone"));
    },
    sweep() {
      const a = aside();
      const sbw = a.getBoundingClientRect().width;
      const vw = document.documentElement.clientWidth;
      const vh = innerHeight;
      const found = [];
      for (let y = 6; y < vh - 4; y += 24) {
        // fallback: atrás da sidebar tem que estar a PÁGINA (<main>), não o layout
        for (const x of [8, Math.round(sbw / 2), Math.round(sbw - 8)]) {
          const p = painterAt(x, y);
          if (!p || !main().contains(p)) {
            found.push({ tipo: "fallback", x, y: Math.round(y + scrollY), atras: describe(p), aoLado: describe(painterAt(sbw + 14, y)) });
            break;
          }
        }
        // corte: elemento de largura total que começa exatamente na borda da sidebar
        const q = painterAt(Math.round(sbw + 14), y);
        if (q) {
          const owner = q instanceof SVGElement && q.ownerSVGElement ? q.ownerSVGElement : q;
          const r = owner.getBoundingClientRect();
          if (Math.abs(r.left - sbw) <= 2 && r.right >= vw - 24 && r.width > 200) {
            found.push({ tipo: "corte", y: Math.round(y + scrollY), el: describe(q) });
          }
        }
      }
      // fundo-proprio: a sidebar não pinta nada além de item ativo (.sb-accent), selo/botão
      // (.sb-solid) e linhas de 1px (.sb-divider). Qualquer outro fundo é um painel.
      for (const el of [a, ...a.querySelectorAll("*")]) {
        if (el instanceof SVGElement || !visible(el)) continue;
        const bg = bgOf(el);
        if (bg[3] <= 0.02) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1 || r.bottom < 0 || r.top > vh) continue;
        if (el.closest(".sb-accent, .sb-solid")) continue;
        if (el.classList.contains("sb-divider") && r.height <= 2) continue;
        found.push({ tipo: "fundo-proprio", el: describe(el), alfa: Math.round(bg[3] * 100) / 100 });
      }
      return found;
    },
    // Textos/ícones visíveis da sidebar, com cor e contraste mínimo exigido. O fundo real
    // atrás de cada um é lido depois, dos pixels da screenshot (com a tinta escondida).
    sidebarItems() {
      const a = aside();
      const sbw = a.getBoundingClientRect().width;
      const vh = innerHeight;
      const items = [];
      for (const el of a.querySelectorAll("*")) {
        const isIcon = el.tagName === "svg";
        const hasText = !isIcon && [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim());
        if (!isIcon && !hasText) continue;
        if (!visible(el)) continue;
        let r = el.getBoundingClientRect();
        if (hasText) {
          // caixa dos glifos, não do elemento (um link largo tem muito fundo sem texto)
          const range = document.createRange();
          range.selectNodeContents(el);
          r = range.getBoundingClientRect();
        }
        if (r.width < 2 || r.height < 2 || r.bottom < 0 || r.top > vh || r.right > sbw + 1 || r.left < 0) continue;
        // o nav rola dentro da sidebar: ignora o que estiver cortado pelo overflow dele
        const nav = el.closest("nav");
        if (nav) {
          const nr = nav.getBoundingClientRect();
          if (r.top < nr.top || r.bottom > nr.bottom) continue;
        }
        // Itens com fundo opaco próprio (botão "Entrar na conta", selo "particular") não
        // dependem do fundo da página — ficam fora desta medição.
        let ownBg = false;
        for (let n = el; n && n !== a; n = n.parentElement) {
          if (!(n instanceof SVGElement) && bgOf(n)[3] >= 0.9) {
            ownBg = true;
            break;
          }
        }
        if (ownBg) continue;
        const cs = getComputedStyle(el);
        const fg = rgba(isIcon ? (cs.stroke !== "none" ? cs.stroke : cs.color) : cs.color);
        let op = 1;
        for (let n = el; n && n !== document.documentElement; n = n.parentElement) op *= Number(getComputedStyle(n).opacity);
        if (fg[3] * op < 0.05) continue;
        const size = parseFloat(cs.fontSize);
        const bold = Number(cs.fontWeight) >= 700;
        items.push({
          x: Math.max(0, Math.floor(r.left)),
          y: Math.max(0, Math.floor(r.top)),
          w: Math.max(1, Math.round(r.width)),
          h: Math.max(1, Math.round(r.height)),
          fg: [fg[0], fg[1], fg[2], fg[3] * op],
          min: isIcon || size >= 24 || (bold && size >= 18.66) ? 3 : 4.5,
          texto: isIcon
            ? `[ícone ${el.getAttribute("class")?.split(" ").find((c) => c.startsWith("lucide-")) ?? ""}]`
            : (el.textContent ?? "").trim().slice(0, 40),
          scrollY: Math.round(scrollY),
        });
      }
      return { items, sbw: Math.ceil(sbw) };
    },
  };
}

const NO_MOTION = `*,*::before,*::after{transition:none!important;animation:none!important;scroll-behavior:auto!important}`;
// Esconde só a "tinta" da sidebar (texto e ícones) pra screenshot mostrar o fundo real atrás.
const HIDE_INK = `#particular-sidebar,#particular-sidebar *{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important}#particular-sidebar svg{visibility:hidden!important}`;

// Costura: com a sidebar escondida, o fundo logo à esquerda da borda dela tem que ser o
// mesmo logo à direita. Compara médias de 6px de cada lado (pontilhados se anulam) e acusa
// trechos de ≥6px de altura (linha diagonal cruzando a borda dá 2–4px) com diferença visível — faixa que para na borda.
const HIDE_SIDEBAR = `#particular-sidebar{visibility:hidden!important}`;
async function pixelSeams(page, sbw, edgeRanges, scrollY) {
  const vh = page.viewportSize().height;
  const style = await page.addStyleTag({ content: HIDE_SIDEBAR });
  const png = await page.screenshot({ clip: { x: sbw - 10, y: 0, width: 20, height: vh } });
  await style.evaluate((n) => n.remove());
  const { data, info } = await sharp(png).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const avg = (y, x0, x1) => {
    const c = [0, 0, 0];
    for (let x = x0; x < x1; x++) for (let k = 0; k < 3; k++) c[k] += data[(y * info.width + x) * 3 + k];
    return c.map((v) => v / (x1 - x0));
  };
  const out = [];
  let start = -1;
  const flush = (end) => {
    if (start >= 0 && end - start >= 6) {
      const mid = Math.round((start + end) / 2);
      const inEdge = edgeRanges.some(([t, b]) => mid >= t - 2 && mid <= b + 2);
      if (!inEdge) out.push({ tipo: "costura", y: start + scrollY, altura: end - start, esquerda: avg(mid, 1, 7).map(Math.round), direita: avg(mid, 13, 19).map(Math.round) });
    }
    start = -1;
  };
  for (let y = 0; y < info.height; y++) {
    const l = avg(y, 1, 7);
    const r = avg(y, 13, 19);
    const diff = Math.max(...l.map((v, k) => Math.abs(v - r[k])));
    if (diff > 24) {
      if (start < 0) start = y;
    } else flush(y);
  }
  flush(info.height);
  return out;
}

function lum([r, g, b]) {
  const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function contrast(a, b) {
  const l1 = lum(a);
  const l2 = lum(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// Contraste de cada item contra os pixels reais atrás dele. Usa o percentil 10 (a pior
// décima parte da área): texto que atravessa uma divisa de seção falha mesmo que a maior
// parte dele esteja legível.
async function pixelContrast(page, sbw, items) {
  if (!items.length) return [];
  const style = await page.addStyleTag({ content: HIDE_INK });
  const vh = page.viewportSize().height;
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: sbw + 2, height: vh } });
  await style.evaluate((n) => n.remove());
  const { data, info } = await sharp(png).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = [];
  const p10Of = (it, color) => {
    const ratios = [];
    const x1 = Math.min(info.width, it.x + it.w);
    const y1 = Math.min(info.height, it.y + it.h);
    for (let y = it.y; y < y1; y += 2) {
      for (let x = it.x; x < x1; x += 2) {
        const i = (y * info.width + x) * 3;
        const bg = [data[i], data[i + 1], data[i + 2]];
        const a = color[3];
        const fg = [0, 1, 2].map((k) => color[k] * a + bg[k] * (1 - a));
        ratios.push(contrast(fg, bg));
      }
    }
    if (!ratios.length) return Infinity;
    ratios.sort((p, q) => p - q);
    return ratios[Math.floor(ratios.length * 0.1)];
  };
  for (const it of items) {
    const p10 = p10Of(it, it.fg);
    if (p10 >= it.min) continue;
    // O tom oposto (texto claro ↔ escuro) teria se saído melhor? Então a sidebar escolheu
    // errado: falha. Se nem o oposto resolve, o fundo não comporta contraste AA com uma cor
    // só (texto atravessando divisa de seção, faixa de cor média): aviso.
    const alt = lum(it.fg) > 0.5 ? [23, 23, 23, 1] : [255, 255, 255, 1];
    const altP10 = p10Of(it, alt);
    const base = { texto: it.texto, y: it.y + it.scrollY, razao: Math.round(p10 * 100) / 100, oposto: Math.round(altP10 * 100) / 100, minimo: it.min };
    if (altP10 >= it.min) out.push({ tipo: "contraste", ...base });
    else out.push({ tipo: "aviso-contraste", ...base });
  }
  return out;
}

async function checkPage(browser, path, cfg) {
  const context = await browser.newContext({ viewport: cfg.viewport, deviceScaleFactor: 1 });
  await context.addInitScript(
    ({ dark, consent }) => {
      try {
        localStorage.setItem("particular:dark", String(dark));
        localStorage.setItem("st_cookie_consent", consent);
      } catch {}
    },
    { dark: cfg.dark, consent: CONSENT },
  );
  const page = await context.newPage();
  const issues = [];
  try {
    await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 60_000 });
    await page.addStyleTag({ content: NO_MOTION });
    await page.evaluate(installProbe);
    if (cfg.collapsed) {
      await page.getByRole("button", { name: "Recolher menu" }).click();
    }
    // dá tempo pra hidratação + efeito da fusão rodar
    await page.waitForTimeout(400);
    await page.evaluate(() => window.dispatchEvent(new Event("scroll")));
    await page.waitForTimeout(150);

    const active = await page.evaluate(() => window.__sb.fusionActive());
    if (!active) issues.push({ tipo: "fusao-inativa" });

    // alinhamento: posições do texto com o vazamento ligado x desligado
    const withBleed = await page.evaluate(() => window.__sb.textPositions());
    await page.evaluate(() => window.__sb.toggleBleed(false));
    const noBleed = await page.evaluate(() => window.__sb.textPositions());
    await page.evaluate(() => window.__sb.toggleBleed(true));
    const n = Math.min(withBleed.length, noBleed.length);
    let moved = 0;
    const exemplos = [];
    for (let i = 0; i < n; i++) {
      if (Math.abs(withBleed[i][0] - noBleed[i][0]) > 1) {
        moved++;
        if (exemplos.length < 5) exemplos.push({ texto: withBleed[i][1], com: withBleed[i][0], sem: noBleed[i][0] });
      }
    }
    if (withBleed.length !== noBleed.length || moved) {
      issues.push({ tipo: "alinhamento", movidos: moved, total: n, exemplos });
    }

    const ox = await page.evaluate(() => window.__sb.overflowX());
    if (ox > 1) issues.push({ tipo: "overflow", px: ox });

    // varre a página inteira
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    const vh = cfg.viewport.height;
    const stops = [];
    for (let y = 0; y < height - vh; y += Math.round(vh * 0.6)) stops.push(y);
    stops.push(Math.max(0, height - vh));
    let shot = 0;
    for (const y of stops) {
      await page.evaluate((yy) => {
        window.scrollTo(0, yy);
        window.dispatchEvent(new Event("scroll"));
      }, y);
      await page.waitForTimeout(90); // um frame pro efeito de tom rodar
      const found = await page.evaluate(() => window.__sb.sweep());
      const { items, sbw } = await page.evaluate(() => window.__sb.sidebarItems());
      found.push(...(await pixelContrast(page, sbw, items)));
      const edges = await page.evaluate(() => window.__sb.edgeRanges());
      const sy = await page.evaluate(() => Math.round(scrollY));
      found.push(...(await pixelSeams(page, sbw, edges, sy)));
      issues.push(...found);
      if (SHOTS && (shot < 3 || found.length)) {
        mkdirSync(OUT_DIR, { recursive: true });
        const file = join(OUT_DIR, `${path.replace(/\W+/g, "_")}__${cfg.name}__${y}.png`);
        await page.screenshot({ path: file });
        shot++;
      }
    }
  } catch (e) {
    issues.push({ tipo: "erro", mensagem: String(e?.message ?? e).slice(0, 300) });
  } finally {
    await context.close();
  }
  return issues;
}

function summarize(issues) {
  // colapsa repetições (mesmo tipo + mesmo elemento/texto) pra relatório legível
  const seen = new Map();
  for (const i of issues) {
    const key =
      i.tipo === "corte" ? `corte|${i.el?.cls}` :
      i.tipo === "costura" ? `costura|${Math.round(i.y / 40)}` :
      i.tipo === "fundo-proprio" ? `fundo-proprio|${i.el?.cls}` :
      i.tipo === "fallback" ? `fallback|${i.aoLado?.cls}` :
      i.tipo === "contraste" || i.tipo === "aviso-contraste" ? `${i.tipo}|${i.texto}` :
      i.tipo;
    const prev = seen.get(key);
    if (prev) prev.ocorrencias++;
    else seen.set(key, { ...i, ocorrencias: 1 });
  }
  return [...seen.values()];
}

const browser = await chromium.launch();
const jobs = [];
for (const cfg of configs) for (const path of paths) jobs.push({ path, cfg });
const results = [];
let idx = 0;
async function worker() {
  while (idx < jobs.length) {
    const job = jobs[idx++];
    const issues = await checkPage(browser, job.path, job.cfg);
    const resumo = summarize(issues);
    results.push({ path: job.path, config: job.cfg.name, violacoes: resumo });
    const falhas = resumo.filter((v) => !v.tipo.startsWith("aviso")).length;
    const avisos = resumo.length - falhas;
    const tag = falhas ? `✗ ${falhas}` : avisos ? `~ ${avisos}` : "✓";
    console.log(`${tag.padEnd(5)} ${job.cfg.name.padEnd(17)} ${job.path}`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
await browser.close();

results.sort((a, b) => (a.path + a.config).localeCompare(b.path + b.config));
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "relatorio.json"), JSON.stringify(results, null, 2));

const bad = results.filter((r) => r.violacoes.some((v) => !v.tipo.startsWith("aviso")));
const porTipo = {};
for (const r of results) for (const v of r.violacoes) porTipo[v.tipo] = (porTipo[v.tipo] ?? 0) + 1;
console.log(`\n${results.length} verificações · ${bad.length} com falha · por tipo: ${JSON.stringify(porTipo)}`);
console.log(`relatório: ${join(OUT_DIR, "relatorio.json")}`);
process.exit(bad.length ? 1 : 0);
