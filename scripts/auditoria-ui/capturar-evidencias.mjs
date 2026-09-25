/**
 * Captura de evidências pra auditoria de UI/UX — screenshots (desktop, mobile, tablet),
 * métricas de DOM (tipografia, blocos densos, alvos de toque, overflow, imagens, CTAs,
 * landmarks) e varredura axe-core de TODAS as rotas do public/sitemap.xml (+ 404).
 *
 * Usado na auditoria de 24/09/2026 (docs/auditorias/2026-09-24-auditoria-ui-ux-design.md).
 * Não roda no build nem no CI — é ferramenta de auditoria manual.
 *
 * Pré-requisitos: dev server no ar (padrão http://localhost:5173) e Chromium do Playwright
 * instalado (bunx playwright install chromium).
 *
 * Uso:  node scripts/auditoria-ui/capturar-evidencias.mjs <pastaDeSaida> [concorrencia] [baseUrl]
 * Ex.:  node scripts/auditoria-ui/capturar-evidencias.mjs ../evidencias-ui 4 http://localhost:5199
 * Saída: <pasta>/manifest.json (índice por rota), <pasta>/routes/<slug>/*.png|*.json,
 *        <pasta>/specials/* (banner de cookies, menu mobile, foco por teclado, formulário,
 *        hover, reduced-motion, zoom 200%). ~300 MB pra 75 rotas — não commitar a saída.
 */
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "../..");
const BASE = process.argv[4] || "http://localhost:5173";
const OUT = path.resolve(process.argv[2] || "../evidencias-ui");
const CONCURRENCY = Number(process.argv[3] || 4);
const AXE_URL = "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js";

const xml = await fs.readFile(path.join(REPO, "public/sitemap.xml"), "utf8");
const routes = [...xml.matchAll(/<loc>https:\/\/santos-tech\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
routes.push("/pagina-que-nao-existe-404");

const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};
const TABLET = { viewport: { width: 768, height: 1024 }, deviceScaleFactor: 1 };
const KEY_PAGES = ["/", "/cursos", "/particular", "/contato", "/sobre", "/cursos/create/8-9-anos", "/cursos/junior/5-6-anos", "/cursos/camps", "/cursos/academies", "/particular/cursos/excel", "/particular/cursos/python", "/particular/cursos/photoshop", "/particular/cursos/marketing", "/particular/cursos/ciberseguranca", "/links", "/privacidade"];

const slugOf = (r) => (r === "/" ? "home" : r.replace(/^\//, "").replace(/\//g, "__"));
const routeFile = async (r) => {
  if (r === "/") return "src/routes/index.tsx";
  const base = r.replace(/^\//, "").replace(/\//g, ".");
  for (const c of [`src/routes/${base}.tsx`, `src/routes/${base}.index.tsx`]) {
    try { await fs.access(path.join(REPO, c)); return c; } catch {}
  }
  return null;
};

const CONSENT_INIT = () => {
  try {
    localStorage.setItem("st_cookie_consent", JSON.stringify({ version: 1, analytics: false, decision: "rejected", decidedAt: new Date().toISOString() }));
  } catch {}
};

async function settle(page, route) {
  // preloader só na home (GSAP ~1.5s); espera um pouco a mais pra estabilizar
  await page.waitForTimeout(route === "/" ? 2600 : 700);
  const vh = page.viewportSize().height;
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h + vh; y += Math.round(vh * 0.6)) {
    await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(1000);
}

async function domAudit(page) {
  return page.evaluate(() => {
    const vw = window.innerWidth;
    const isVisible = (el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none";
    };
    const textOf = (el) => (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
    const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => ({ tag: h.tagName.toLowerCase(), text: textOf(h).slice(0, 140), hidden: !isVisible(h) }));
    // fontes: amostra de elementos com texto direto
    const fontMap = {};
    const textEls = [...document.querySelectorAll("body *")].filter((el) => {
      if (!isVisible(el)) return false;
      return [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    });
    let minFont = 999; let minFontSample = "";
    const denseBlocks = []; const longLines = []; const smallText = [];
    for (const el of textEls) {
      const cs = getComputedStyle(el);
      const fs = parseFloat(cs.fontSize); const fw = cs.fontWeight; const lh = cs.lineHeight;
      const key = `${fs}px/${lh} w${fw} ${cs.fontFamily.split(",")[0].replace(/"/g, "")}`;
      fontMap[key] = (fontMap[key] || 0) + 1;
      const t = textOf(el);
      if (fs < minFont) { minFont = fs; minFontSample = t.slice(0, 60); }
      if (fs < 12) smallText.push({ text: t.slice(0, 60), fontSize: fs, tag: el.tagName.toLowerCase() });
      if (["P", "LI", "DD", "BLOCKQUOTE", "DIV", "SPAN"].includes(el.tagName) && t.length >= 380 && !el.querySelector("p,li,br")) {
        denseBlocks.push({ tag: el.tagName.toLowerCase(), chars: t.length, text: t.slice(0, 100) });
      }
      if (el.tagName === "P" && t.length > 120) {
        const r = el.getBoundingClientRect();
        const cpl = Math.round(r.width / (fs * 0.5));
        if (cpl > 90) longLines.push({ cpl, width: Math.round(r.width), fontSize: fs, text: t.slice(0, 80) });
      }
    }
    const fonts = Object.entries(fontMap).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ×${v}`);
    // imagens
    const imgs = [...document.querySelectorAll("img")];
    const imgIssues = imgs.map((img) => {
      const r = img.getBoundingClientRect();
      const alt = img.getAttribute("alt");
      const issue = [];
      if (alt === null) issue.push("sem-alt");
      if (alt === "") issue.push("alt-vazio");
      if (img.naturalWidth && r.width && img.naturalWidth > r.width * (window.devicePixelRatio || 1) * 2) issue.push(`superdimensionada ${img.naturalWidth}px→${Math.round(r.width)}px`);
      if (img.naturalWidth === 0 && img.complete) issue.push("quebrada");
      if (!img.getAttribute("loading") && r.top > window.innerHeight) issue.push("sem-lazy-abaixo-da-fold");
      return issue.length ? { src: (img.currentSrc || img.src || "").split("/").slice(-2).join("/").slice(0, 80), alt: (alt || "").slice(0, 60), rendered: `${Math.round(r.width)}x${Math.round(r.height)}`, issues: issue } : null;
    }).filter(Boolean);
    // alvos de toque / links
    const controls = [...document.querySelectorAll("a,button,[role=button],input,select,textarea,summary")].filter(isVisible);
    const smallTargets = [];
    const genericLinks = [];
    const GENERIC = /^(clique aqui|saiba mais|leia mais|veja mais|aqui|ver mais|link|mais)$/i;
    for (const c of controls) {
      const r = c.getBoundingClientRect();
      const label = (c.getAttribute("aria-label") || textOf(c) || c.getAttribute("title") || "").slice(0, 60);
      if ((r.width < 24 || r.height < 24) || (vw < 500 && (r.width < 44 || r.height < 44) && c.tagName !== "INPUT")) {
        smallTargets.push({ tag: c.tagName.toLowerCase(), label, size: `${Math.round(r.width)}x${Math.round(r.height)}` });
      }
      if (c.tagName === "A" && GENERIC.test(textOf(c))) genericLinks.push({ text: textOf(c), href: c.getAttribute("href") });
      if (!label && !c.querySelector("img[alt]:not([alt=''])")) genericLinks.push({ text: "(sem nome acessível)", tag: c.tagName.toLowerCase(), href: c.getAttribute("href") || "", html: c.outerHTML.slice(0, 120) });
    }
    // overflow horizontal
    const docW = document.documentElement.scrollWidth;
    const overflowEls = [];
    if (docW > vw + 1) {
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 2 && r.width > 20 && isVisible(el) && getComputedStyle(el).position !== "fixed") {
          overflowEls.push({ tag: el.tagName.toLowerCase(), cls: (el.className && el.className.toString ? el.className.toString() : "").slice(0, 80), right: Math.round(r.right), width: Math.round(r.width) });
          if (overflowEls.length >= 12) break;
        }
      }
    }
    // cores
    const colorSet = new Set(); const bgSet = new Set();
    for (const el of textEls.slice(0, 1500)) { const cs = getComputedStyle(el); colorSet.add(cs.color); if (cs.backgroundColor !== "rgba(0, 0, 0, 0)") bgSet.add(cs.backgroundColor); }
    // CTAs
    const ctas = [...document.querySelectorAll("a[href*='wa.me'],a[href*='whatsapp']")].filter(isVisible).map((a) => textOf(a).slice(0, 60));
    const externalNoRel = [...document.querySelectorAll("a[target=_blank]")].filter((a) => !/noopener|noreferrer/.test(a.getAttribute("rel") || "")).length;
    // landmarks
    const landmarks = { main: document.querySelectorAll("main").length, nav: document.querySelectorAll("nav").length, header: document.querySelectorAll("header").length, footer: document.querySelectorAll("footer").length, skipLink: !!document.querySelector("a[href^='#'][class*=skip], a[href='#main'], a[href='#conteudo']") };
    const buttonsWithoutType = document.querySelectorAll("button:not([type])").length;
    const inputs = [...document.querySelectorAll("input,select,textarea")].map((i) => ({ type: i.type, id: i.id, hasLabel: !!(i.id && document.querySelector(`label[for='${i.id}']`)) || !!i.closest("label") || !!i.getAttribute("aria-label") || !!i.getAttribute("aria-labelledby"), placeholder: i.placeholder, required: i.required, autocomplete: i.getAttribute("autocomplete") }));
    const wordCount = (document.body.innerText || "").split(/\s+/).filter(Boolean).length;
    return {
      title: document.title, lang: document.documentElement.lang, url: location.pathname,
      viewport: `${vw}x${window.innerHeight}`, pageHeight: document.documentElement.scrollHeight, docScrollWidth: docW, horizontalOverflow: docW > vw + 1, overflowEls,
      h1Count: headings.filter((h) => h.tag === "h1").length, headings, wordCount,
      fonts: fonts.slice(0, 40), fontVariants: fonts.length, minFont, minFontSample, smallText: smallText.slice(0, 15), denseBlocks: denseBlocks.slice(0, 15), longLines: longLines.slice(0, 15),
      imgCount: imgs.length, imgIssues: imgIssues.slice(0, 25),
      controlsCount: controls.length, smallTargets: smallTargets.slice(0, 25), genericLinks: genericLinks.slice(0, 15),
      textColors: colorSet.size, bgColors: bgSet.size, ctas, ctaCount: ctas.length, externalNoRel, landmarks, buttonsWithoutType, inputs,
      metaDescription: document.querySelector("meta[name=description]")?.content?.slice(0, 200) || null,
      canonical: document.querySelector("link[rel=canonical]")?.href || null,
    };
  });
}

async function runAxe(page) {
  try {
    await page.addScriptTag({ url: AXE_URL });
    const res = await page.evaluate(async () => {
      const r = await axe.run(document, { resultTypes: ["violations", "incomplete"], rules: { "target-size": { enabled: true } } });
      const trim = (arr) => arr.map((v) => ({ id: v.id, impact: v.impact, help: v.help, helpUrl: v.helpUrl, nodes: v.nodes.length, samples: v.nodes.slice(0, 4).map((n) => ({ target: n.target.join(" "), html: n.html.slice(0, 160), msg: (n.failureSummary || "").slice(0, 220) })) }));
      return { violations: trim(r.violations), incomplete: trim(r.incomplete).filter((i) => i.id === "color-contrast") };
    });
    return res;
  } catch (e) {
    return { error: String(e).slice(0, 200) };
  }
}

async function captureLong(page, prefix, maxSegments = 14) {
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = page.viewportSize().height;
  const dsf = page.context()._options?.deviceScaleFactor || 1;
  const files = [];
  if (h * dsf <= 16000 && h <= 12000) {
    try { await page.screenshot({ path: `${prefix}.full.png`, fullPage: true }); files.push(`${path.basename(prefix)}.full.png`); return files; } catch {}
  }
  // segmentos
  let i = 0;
  for (let y = 0; y < h && i < maxSegments; y += vh, i++) {
    await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
    await page.waitForTimeout(250);
    const f = `${prefix}.seg${String(i + 1).padStart(2, "0")}.png`;
    await page.screenshot({ path: f });
    files.push(path.basename(f));
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  return files;
}

async function capturePage(browser, route, vpName, vpOpts, dir, opts = {}) {
  const ctx = await browser.newContext({ ...vpOpts, locale: "pt-BR", colorScheme: "light" });
  if (!opts.keepCookieBanner) await ctx.addInitScript(CONSENT_INIT);
  const page = await ctx.newPage();
  const consoleErrors = []; const failedReqs = [];
  page.on("console", (m) => { if (["error", "warning"].includes(m.type())) consoleErrors.push(`${m.type()}: ${m.text().slice(0, 200)}`); });
  page.on("response", (r) => { if (r.status() >= 400) failedReqs.push(`${r.status()} ${r.url().slice(0, 140)}`); });
  page.on("requestfailed", (r) => failedReqs.push(`FAILED ${r.url().slice(0, 140)} ${r.failure()?.errorText || ""}`));
  const result = { route, vp: vpName };
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 90000 });
    await settle(page, route);
    const prefix = path.join(dir, vpName);
    await page.screenshot({ path: `${prefix}.fold.png` });
    result.files = [`${vpName}.fold.png`, ...(await captureLong(page, prefix))];
    result.dom = await domAudit(page);
    if (!opts.skipAxe) result.axe = await runAxe(page);
    // rodapé (só desktop/mobile principais)
    if (opts.footer) {
      await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
      await page.waitForTimeout(700);
      await page.screenshot({ path: `${prefix}.footer.png` });
      result.files.push(`${vpName}.footer.png`);
    }
  } catch (e) {
    result.error = String(e).slice(0, 300);
  }
  result.consoleErrors = [...new Set(consoleErrors)].slice(0, 20);
  result.failedRequests = [...new Set(failedReqs)].slice(0, 20);
  await ctx.close();
  return result;
}

async function specials(browser, dir) {
  const out = [];
  const tryStep = async (name, fn) => { try { await fn(); out.push(`${name}: ok`); } catch (e) { out.push(`${name}: FALHOU ${String(e).slice(0, 160)}`); } };
  // 1. cookie banner (sem consentimento) — desktop e mobile
  for (const [vp, o] of Object.entries(VIEWPORTS)) {
    await tryStep(`cookie-banner-${vp}`, async () => {
      const ctx = await browser.newContext({ ...o, locale: "pt-BR" });
      const page = await ctx.newPage();
      await page.goto(BASE + "/sobre", { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(dir, `cookie-banner.${vp}.png`) });
      // painel "Gerenciar"
      const manage = page.getByRole("button", { name: /gerenciar/i }).first();
      if (await manage.count()) { await manage.click(); await page.waitForTimeout(600); await page.screenshot({ path: path.join(dir, `cookie-manage.${vp}.png`) }); }
      await ctx.close();
    });
  }
  // 2. header: dropdown Programas (desktop) e menu mobile aberto
  await tryStep("header-dropdown-desktop", async () => {
    const ctx = await browser.newContext({ ...VIEWPORTS.desktop, locale: "pt-BR" }); await ctx.addInitScript(CONSENT_INIT);
    const page = await ctx.newPage();
    await page.goto(BASE + "/sobre", { waitUntil: "networkidle", timeout: 90000 }); await page.waitForTimeout(800);
    const trig = page.locator("header button").filter({ hasText: /programas|cursos/i }).first();
    if (await trig.count()) { await trig.hover(); await page.waitForTimeout(300); await trig.click(); await page.waitForTimeout(700); }
    await page.screenshot({ path: path.join(dir, "header-dropdown.desktop.png") });
    const sobre = page.locator("header button").filter({ hasText: /sobre/i }).first();
    if (await sobre.count()) { await sobre.click(); await page.waitForTimeout(600); await page.screenshot({ path: path.join(dir, "header-dropdown-sobre.desktop.png") }); }
    // header depois de rolar (estado sticky)
    await page.keyboard.press("Escape");
    await page.evaluate(() => window.scrollTo({ top: 700, behavior: "instant" })); await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(dir, "header-scrolled.desktop.png"), clip: { x: 0, y: 0, width: 1440, height: 160 } });
    // foco por teclado: 6 tabs a partir do topo
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    for (let i = 0; i < 6; i++) await page.keyboard.press("Tab");
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(dir, "keyboard-focus-6tabs.desktop.png") });
    const focusInfo = await page.evaluate(() => { const a = document.activeElement; const cs = a ? getComputedStyle(a) : null; return a ? { tag: a.tagName, text: (a.innerText || a.getAttribute("aria-label") || "").slice(0, 60), outline: cs.outlineStyle + " " + cs.outlineWidth + " " + cs.outlineColor, boxShadow: cs.boxShadow.slice(0, 120) } : null; });
    await fs.writeFile(path.join(dir, "keyboard-focus.json"), JSON.stringify(focusInfo, null, 2));
    await ctx.close();
  });
  await tryStep("header-menu-mobile", async () => {
    const ctx = await browser.newContext({ ...VIEWPORTS.mobile, locale: "pt-BR" }); await ctx.addInitScript(CONSENT_INIT);
    const page = await ctx.newPage();
    await page.goto(BASE + "/sobre", { waitUntil: "networkidle", timeout: 90000 }); await page.waitForTimeout(800);
    const btn = page.getByRole("button", { name: /abrir menu/i }).first();
    await btn.click(); await page.waitForTimeout(900);
    await page.screenshot({ path: path.join(dir, "menu-mobile-open.png") });
    const prog = page.locator("header button").filter({ hasText: /programas|cursos/i }).first();
    if (await prog.count()) { await prog.click(); await page.waitForTimeout(700); await page.screenshot({ path: path.join(dir, "menu-mobile-programas.png"), fullPage: true }); }
    await ctx.close();
  });
  // 3. contato: foco e validação vazia
  await tryStep("contato-form", async () => {
    for (const [vp, o] of Object.entries(VIEWPORTS)) {
      const ctx = await browser.newContext({ ...o, locale: "pt-BR" }); await ctx.addInitScript(CONSENT_INIT);
      const page = await ctx.newPage();
      await page.goto(BASE + "/contato", { waitUntil: "networkidle", timeout: 90000 }); await page.waitForTimeout(800);
      const first = page.locator("form input, form textarea").first();
      if (await first.count()) {
        await first.scrollIntoViewIfNeeded(); await first.focus(); await page.waitForTimeout(300);
        await page.screenshot({ path: path.join(dir, `contato-focus.${vp}.png`) });
        const submit = page.locator("form button[type=submit], form button").last();
        if (await submit.count()) { await submit.click(); await page.waitForTimeout(900); await page.screenshot({ path: path.join(dir, `contato-submit-vazio.${vp}.png`) }); }
      }
      await ctx.close();
    }
  });
  // 4. hover em card (desktop) — /particular e /cursos
  await tryStep("hover-cards", async () => {
    const ctx = await browser.newContext({ ...VIEWPORTS.desktop, locale: "pt-BR" }); await ctx.addInitScript(CONSENT_INIT);
    const page = await ctx.newPage();
    for (const r of ["/particular", "/cursos"]) {
      await page.goto(BASE + r, { waitUntil: "networkidle", timeout: 90000 }); await page.waitForTimeout(900);
      const card = page.locator("main a[href^='/cursos'], main a[href^='/particular/cursos']").first();
      if (await card.count()) { await card.scrollIntoViewIfNeeded(); await page.waitForTimeout(700); await card.hover(); await page.waitForTimeout(600); await page.screenshot({ path: path.join(dir, `hover-card.${slugOf(r)}.png`) }); }
    }
    await ctx.close();
  });
  // 5. prefers-reduced-motion na home (o que fica invisível?)
  await tryStep("reduced-motion-home", async () => {
    const ctx = await browser.newContext({ ...VIEWPORTS.desktop, locale: "pt-BR", reducedMotion: "reduce" }); await ctx.addInitScript(CONSENT_INIT);
    const page = await ctx.newPage();
    await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 90000 }); await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(dir, "reduced-motion.home.fold.png") });
    await ctx.close();
  });
  // 6. tablet nas páginas-chave
  for (const r of KEY_PAGES) {
    await tryStep(`tablet ${r}`, async () => {
      const d = path.join(OUT, "routes", slugOf(r)); await fs.mkdir(d, { recursive: true });
      const res = await capturePage(browser, r, "tablet", TABLET, d, { skipAxe: true });
      await fs.writeFile(path.join(d, "tablet.json"), JSON.stringify(res, null, 2));
    });
  }
  // 7. zoom 200% (texto reflow) na home e num curso particular — desktop 1440 com zoom = viewport 720 css
  await tryStep("zoom-200", async () => {
    const ctx = await browser.newContext({ viewport: { width: 720, height: 450 }, deviceScaleFactor: 2, locale: "pt-BR" }); await ctx.addInitScript(CONSENT_INIT);
    const page = await ctx.newPage();
    for (const r of ["/", "/particular/cursos/excel"]) { await page.goto(BASE + r, { waitUntil: "networkidle", timeout: 90000 }); await page.waitForTimeout(r === "/" ? 2600 : 900); await page.screenshot({ path: path.join(dir, `zoom200.${slugOf(r)}.png`) }); }
    await ctx.close();
  });
  await fs.writeFile(path.join(dir, "_specials.log"), out.join("\n"));
  return out;
}

async function main() {
  await fs.mkdir(path.join(OUT, "routes"), { recursive: true });
  await fs.mkdir(path.join(OUT, "specials"), { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const manifest = [];
  const queue = [...routes];
  const worker = async () => {
    while (queue.length) {
      const route = queue.shift();
      const slug = slugOf(route);
      const dir = path.join(OUT, "routes", slug);
      await fs.mkdir(dir, { recursive: true });
      const entry = { route, slug, sourceFile: await routeFile(route), dir: path.relative(OUT, dir) };
      const isKey = KEY_PAGES.includes(route);
      for (const [vp, o] of Object.entries(VIEWPORTS)) {
        const res = await capturePage(browser, route, vp, o, dir, { footer: isKey });
        await fs.writeFile(path.join(dir, `${vp}.json`), JSON.stringify(res, null, 2));
        const d = res.dom || {};
        entry[vp] = {
          error: res.error || null, files: res.files || [], pageHeight: d.pageHeight, h1Count: d.h1Count, title: d.title, wordCount: d.wordCount,
          horizontalOverflow: d.horizontalOverflow, minFont: d.minFont, fontVariants: d.fontVariants, denseBlocks: (d.denseBlocks || []).length, longLines: (d.longLines || []).length,
          smallTargets: (d.smallTargets || []).length, imgIssues: (d.imgIssues || []).length, ctaCount: d.ctaCount, textColors: d.textColors,
          axeViolations: res.axe?.violations ? res.axe.violations.map((v) => `${v.id}(${v.impact}×${v.nodes})`) : res.axe?.error || null,
          consoleErrors: res.consoleErrors.length, failedRequests: res.failedRequests.length,
        };
      }
      manifest.push(entry);
      console.log(`[${manifest.length}/${routes.length}] ${route} ok`);
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  manifest.sort((a, b) => routes.indexOf(a.route) - routes.indexOf(b.route));
  await fs.writeFile(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log("rotas concluídas; capturas especiais...");
  const sp = await specials(browser, path.join(OUT, "specials"));
  console.log(sp.join("\n"));
  await browser.close();
  console.log("FIM");
}

main().catch((e) => { console.error(e); process.exit(1); });
