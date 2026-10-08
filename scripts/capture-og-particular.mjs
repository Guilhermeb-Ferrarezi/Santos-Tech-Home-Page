/**
 * Gera as imagens de Open Graph (1200×630) dos cursos particulares como um
 * RECORTE DO HERO REAL de cada página — fundo, cores, cena e logo da
 * ferramenta vêm da própria página, então a OG nunca diverge do site.
 *
 * Como: abre cada /particular/cursos/<slug> num Chromium (Playwright, já é
 * devDependency), esconde sidebar/banner de cookies e reorganiza o hero no
 * layout de OG aprovado no canvas de design (08/10/2026):
 *   - marca, título, subtítulo e CTA CENTRALIZADOS no quadrado de 630×630 do
 *     meio — é o que sobra quando o WhatsApp/iMessage recorta a miniatura;
 *   - a cena do hero aparece nas duas laterais (podem ser cortadas sem perda);
 *   - selo "SANTOS TECH · PARTICULAR" no topo.
 * Também gera public/og-image.png (institucional) a partir de um HTML fixo.
 *
 * Não roda no build (o Docker não tem Chromium): os PNGs são versionados, e o
 * generate-og-images.mjs do build só cria a capa genérica de um curso que
 * ainda não tenha PNG. Rode de novo quando mudar o hero de um curso.
 *
 * Rodar:
 *   bun run generate:og:hero                      # todos, contra produção
 *   bun run generate:og:hero -- logica excel      # só esses slugs
 *   OG_BASE_URL=http://localhost:3000 bun run generate:og:hero   # contra o build local
 */

import { chromium } from "playwright";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const BASE_URL = (process.env.OG_BASE_URL ?? "https://santos-tech.com").replace(/\/$/, "");
const OUT_DIR = path.join(ROOT, "public/og/particular");
const WIDTH = 1200;
const HEIGHT = 630;

async function discoverSlugs() {
  const files = await fs.readdir(path.join(ROOT, "src/routes"));
  return files
    .filter((f) => /^particular\.cursos\..+\.tsx$/.test(f))
    .map((f) => f.replace(/^particular\.cursos\./, "").replace(/\.tsx$/, ""))
    .sort();
}

/**
 * Roda DENTRO da página: transforma o hero no layout de OG. Genérico pras 8
 * peles — acha tudo a partir do <h1> (coluna de texto) e do bloco
 * `aria-hidden` da arte (CourseHeroArt).
 */
export function layoutOg({ width, height }) {
  const style = document.createElement("style");
  style.textContent = `
    #particular-sidebar, [aria-label="Consentimento de cookies"], a[aria-label*="WhatsApp"] { display: none !important; }
    .sb-layout { --sb-width: 0px !important; --sbw: 0px !important; }
    *, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }
  `;
  document.head.appendChild(style);

  const sidebar = document.getElementById("particular-sidebar");
  for (const el of sidebar?.parentElement?.children ?? []) {
    if (el !== sidebar) el.style.paddingLeft = "0";
  }

  const h1 = document.querySelector("h1");
  const hero = h1.closest("section");

  // Coluna de texto = filho do grid que contém o h1; arte = o outro filho.
  let textCol = h1;
  while (textCol.parentElement && getComputedStyle(textCol.parentElement).display !== "grid") {
    textCol = textCol.parentElement;
  }
  const grid = textCol.parentElement;
  const art = [...grid.children].find((c) => c !== textCol);

  hero.style.position = "relative";
  hero.style.height = `${height}px`;
  hero.style.overflow = "hidden";

  // Filhos do hero fora do container do texto (barras de título/status):
  // os que vêm antes vão pro topo, os que vêm depois vão pro rodapé.
  let container = grid;
  while (container.parentElement !== hero) container = container.parentElement;
  let topOffset = 0;
  let bottomOffset = 0;
  let passed = false;
  for (const child of [...hero.children]) {
    if (child === container) {
      passed = true;
      continue;
    }
    const pos = getComputedStyle(child).position;
    if (pos === "absolute" || pos === "fixed") continue;
    const h = child.getBoundingClientRect().height;
    Object.assign(child.style, { position: "absolute", left: "0", right: "0", zIndex: "5" });
    if (passed) {
      child.style.bottom = `${bottomOffset}px`;
      bottomOffset += h;
    } else {
      child.style.top = `${topOffset}px`;
      topOffset += h;
    }
  }
  Object.assign(container.style, { position: "absolute", inset: "0", maxWidth: "none", margin: "0", padding: "0" });
  Object.assign(grid.style, { display: "block", position: "absolute", inset: "0", padding: "0", margin: "0", maxWidth: "none" });

  // Texto no quadrado central (x 285–915), centralizado.
  const top = topOffset + 70;
  Object.assign(textCol.style, {
    position: "absolute",
    left: `${(width - 600) / 2}px`,
    width: "600px",
    top: `${top}px`,
    bottom: `${bottomOffset + 24}px`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    zIndex: "3",
  });
  for (const el of textCol.querySelectorAll("*")) {
    const cs = getComputedStyle(el);
    if (el.parentElement === textCol || cs.display.includes("block")) {
      el.style.marginLeft = "auto";
      el.style.marginRight = "auto";
    }
    if (cs.display.includes("flex")) el.style.justifyContent = "center";
  }

  // Cena do hero nas laterais: dois clones, cada um mostrando um lado.
  if (art) {
    // Selo da logo da ferramenta = o elemento flutuante pequeno e quadrado
    // (algumas peles têm outros flutuantes, como cartões de dica).
    const badgeIndex = [...art.querySelectorAll(".animate-float-slow")].findIndex((el) => {
      const r = el.getBoundingClientRect();
      return r.width <= 110 && Math.abs(r.width - r.height) < 14;
    });
    const badge = badgeIndex >= 0 ? art.querySelectorAll(".animate-float-slow")[badgeIndex] : null;
    // Cada lateral é uma faixa com overflow escondido: arte que vaza da própria
    // caixa (ex.: janelas grandes da pele de marketing) nunca invade o centro.
    const FLANK = (width - 600) / 2;
    const flank = (side) => {
      const inner = side === "left" ? "right" : "left";
      const wrap = document.createElement("div");
      Object.assign(wrap.style, {
        position: "absolute",
        top: `${topOffset}px`,
        bottom: `${bottomOffset}px`,
        [side]: "0",
        width: `${FLANK}px`,
        overflow: "hidden",
        zIndex: "1",
        maskImage: `linear-gradient(to ${side}, transparent 0, #000 36px)`,
        webkitMaskImage: `linear-gradient(to ${side}, transparent 0, #000 36px)`,
      });
      const clone = art.cloneNode(true);
      if (badgeIndex >= 0) clone.querySelectorAll(".animate-float-slow")[badgeIndex].remove();
      Object.assign(clone.style, {
        position: "absolute",
        width: "520px",
        maxWidth: "none",
        top: "50%",
        transform: "translateY(-50%) scale(0.92)",
        [inner]: "36px",
      });
      wrap.appendChild(clone);
      grid.appendChild(wrap);
    };
    flank("left");
    flank("right");
    art.remove();
    if (badge) {
      Object.assign(badge.style, {
        position: "absolute",
        top: `${topOffset + 46}px`,
        right: "64px",
        left: "auto",
        transform: "rotate(6deg) scale(1.15)",
        zIndex: "4",
      });
      grid.appendChild(badge);
    }
  }

  // Selo da marca no topo, centralizado.
  const logoSrc = document.querySelector("#particular-sidebar img")?.currentSrc ?? "";
  const brand = document.createElement("div");
  brand.innerHTML = `
    <span style="display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 6px;border-radius:999px;background:#fff;color:#0c1220;box-shadow:0 10px 24px -10px rgba(0,0,0,.45);font-family:Poppins,system-ui,sans-serif">
      <img src="${logoSrc}" alt="" style="width:30px;height:30px;object-fit:contain">
      <span style="font-size:15px;font-weight:900;letter-spacing:-.01em">SANTOS TECH</span>
      <span style="padding:3px 8px;border-radius:6px;background:#0c1220;color:#fff;font-size:10.5px;font-weight:800;letter-spacing:.08em">PARTICULAR</span>
    </span>`;
  Object.assign(brand.style, {
    position: "absolute",
    top: `${topOffset + 22}px`,
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    zIndex: "6",
  });
  hero.appendChild(brand);

  window.scrollTo(0, 0);
  const r = hero.getBoundingClientRect();
  return { x: r.left + window.scrollX, y: r.top + window.scrollY };
}

async function captureCourse(context, slug) {
  const page = await context.newPage();
  try {
    // "networkidle" nunca chega (analytics mantém conexão aberta): espera o
    // load + um respiro pra hidratação e imagens do hero.
    await page.goto(`${BASE_URL}/particular/cursos/${slug}`, { waitUntil: "load", timeout: 60_000 });
    await page.waitForSelector("h1", { timeout: 20_000 });
    await page.waitForTimeout(1500);
    await page.evaluate(() => document.fonts.ready);
    const origin = await page.evaluate(layoutOg, { width: WIDTH, height: HEIGHT });
    // Logos clonadas pras laterais são `loading="lazy"`: força o carregamento.
    await page.evaluate(() => {
      for (const img of document.querySelectorAll("section img")) img.loading = "eager";
    });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: path.join(OUT_DIR, `${slug}.png`),
      clip: { x: origin.x, y: origin.y, width: WIDTH, height: HEIGHT },
    });
    console.log(`✓ ${slug}`);
  } catch (err) {
    console.error(`✗ ${slug}: ${err.message}`);
    process.exitCode = 1;
  } finally {
    await page.close();
  }
}

/** og-image.png institucional — mesmo HTML do canvas aprovado. */
async function captureInstitucional(context) {
  const logo = await fs.readFile(path.join(ROOT, "src/assets/logo.png"));
  const logoUrl = `data:image/png;base64,${logo.toString("base64")}`;
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap">
<style>body{margin:0}</style></head><body>
<div style="position:relative;width:1200px;height:630px;overflow:hidden;font-family:Poppins,system-ui,sans-serif;background:#F5F8FA;color:#04325A">
  <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(24,122,191,.16) 1.5px,transparent 1.5px);background-size:28px 28px"></div>
  <div style="position:absolute;width:480px;height:480px;left:-180px;top:-120px;border-radius:50%;background:rgba(73,168,235,.30);filter:blur(60px)"></div>
  <div style="position:absolute;width:460px;height:460px;right:-160px;bottom:-160px;border-radius:50%;background:rgba(13,184,143,.26);filter:blur(60px)"></div>
  <div style="position:absolute;left:300px;top:52px;width:600px;display:flex;flex-direction:column;align-items:center;text-align:center">
    <div style="width:150px;height:150px;border-radius:50%;background:#fff;box-shadow:0 24px 50px -24px rgba(4,50,90,.4);outline:2px solid rgba(24,122,191,.18);display:flex;align-items:center;justify-content:center">
      <img src="${logoUrl}" alt="" style="width:104px;height:104px;object-fit:contain">
    </div>
    <h1 style="margin:26px 0 0;font-size:92px;line-height:.98;font-weight:900;letter-spacing:-.035em">Santos Tech</h1>
    <p style="margin:14px 0 0;font-size:28px;line-height:1.25;font-weight:600;color:#187ABF">Escola de tecnologia presencial</p>
    <div style="display:flex;gap:10px;margin-top:24px">
      <span style="padding:9px 16px;border-radius:14px;background:#fff;border:1.5px solid rgba(24,122,191,.18);font-size:18px;font-weight:600">Crianças a partir de 5 anos</span>
      <span style="padding:9px 16px;border-radius:14px;background:#fff;border:1.5px solid rgba(24,122,191,.18);font-size:18px;font-weight:600">Cursos particulares</span>
    </div>
  </div>
  <div style="position:absolute;left:0;right:0;bottom:0;height:44px;background:#04325A;border-top:5px solid #0DB88F;display:flex;align-items:center;justify-content:center;gap:22px;font-size:16px;font-weight:600;color:#fff">
    <span>Ribeirão Preto · SP</span><span style="font-weight:900">santos-tech.com</span>
  </div>
</div></body></html>`;
  const page = await context.newPage();
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(ROOT, "public/og-image.png"), clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
  await page.close();
  console.log("✓ og-image.png (institucional)");
}

async function main() {
  const only = process.argv.slice(2);
  const all = await discoverSlugs();
  const slugs = only.length ? all.filter((s) => only.includes(s)) : all;
  await fs.mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: WIDTH, height: 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
  // Banner de cookies já respondido (só essenciais) — não aparece na captura.
  await context.addInitScript(() => {
    localStorage.setItem(
      "st_cookie_consent",
      JSON.stringify({ version: 1, analytics: false, decision: "rejected", decidedAt: new Date().toISOString() }),
    );
  });

  if (!only.length) await captureInstitucional(context);
  for (const slug of slugs) await captureCourse(context, slug);
  await browser.close();
}

if (import.meta.main) main().catch((err) => {
  console.error(err);
  process.exit(1);
});
