// Verificador de SEO/GEO/AEO — critérios de aceite da Fase 1 da auditoria de 24/09/2026
// (docs/auditorias/2026-09-24-seo-geo-aeo.md, §7.3). Lê o site como um robô lê: só o HTML
// que o servidor entrega, sem rodar JavaScript.
//
// Checagens (cada uma aponta o ID do achado no relatório):
//   robots      — robots.txt não bloqueia /assets/ nem as áreas com noindex    (tecnico-rastreio-indexacao-01/-04)
//   sitemap     — sem <priority>/<changefreq>                                  (tecnico-rastreio-indexacao-14)
//   links       — toda URL do sitemap é alcançável por <a href> a partir da home (arquitetura-links-internos-01/-03)
//   faq-html    — toda resposta do FAQPage aparece no HTML visível              (aeo-respostas-01/-02)
//   aulas-html  — a ementa aula a aula do CREATE 8–9 está no HTML                (lacuna-conteudo-01)
//   h1-visivel  — o H1 não nasce dentro de um elemento com opacity:0 (home, hub,
//                 curso particular e curso infantil)                               (performance-cwv-01)
//   accept      — Accept sem text/html não devolve 500; /_serverFn/* dá 404      (lacuna-infra-04 = lacuna-geo-03)
//   json-ld     — sem aggregateRating, sem instructor=Organization, sem audience
//                 na organização, ItemList no hub /particular                    (seo-local-02, dados-estruturados-03/-04/-15)
//   404         — rota inexistente responde 404 com noindex e título próprio      (tecnico-rastreio-indexacao-05)
//   rodape      — rodapé com <nav>, <address> e link tel:                        (arquitetura-links-internos-06)
//
// Uso: node scripts/verificar-seo.mjs [BASE_URL]   (padrão http://localhost:3000)
//      Para testar a produção: node scripts/verificar-seo.mjs https://santos-tech.com
//      ONLY=links,faq-html restringe as checagens. Sai com código 1 se alguma falhar.

const BASE = (process.argv[2] ?? process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const PROD = "https://santos-tech.com";
const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(",")) : null;
const UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

const cache = new Map();
async function get(path, headers = {}) {
  const key = path + JSON.stringify(headers);
  if (cache.has(key)) return cache.get(key);
  const res = await fetch(BASE + path, { headers: { "user-agent": UA, ...headers }, redirect: "manual" });
  const out = { status: res.status, headers: res.headers, body: await res.text() };
  cache.set(key, out);
  return out;
}

const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const stripScripts = (html) => html.replace(/<script[\s\S]*?<\/script>/g, "");
const norm = (s) => decode(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const jsonLd = (html) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
    try {
      const j = JSON.parse(m[1]);
      return Array.isArray(j) ? j : j["@graph"] ?? [j];
    } catch {
      return [{ __invalido: m[1].slice(0, 80) }];
    }
  });
const walk = (node, fn) => {
  if (Array.isArray(node)) return node.forEach((n) => walk(n, fn));
  if (node && typeof node === "object") {
    fn(node);
    Object.values(node).forEach((v) => walk(v, fn));
  }
};
const toPath = (loc) => loc.replace(PROD, "").replace(/\/$/, "") || "/";

const checks = {
  async robots() {
    const { body } = await get("/robots.txt");
    const bad = body
      .split("\n")
      .filter((l) => /^\s*Disallow:\s*\/(assets|apresentacoes|professores)\b/i.test(l));
    return bad.length ? `robots.txt ainda tem: ${bad.join(" | ")}` : null;
  },

  async sitemap() {
    const { body } = await get("/sitemap.xml");
    const extras = (body.match(/<(priority|changefreq)>/g) ?? []).length;
    return extras ? `${extras} tags <priority>/<changefreq> no sitemap` : null;
  },

  async links() {
    const { body } = await get("/sitemap.xml");
    const alvo = new Set([...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => toPath(m[1])));
    const visto = new Set(["/"]);
    const fila = ["/"];
    while (fila.length) {
      const atual = fila.shift();
      const { body: html } = await get(atual);
      for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]*)"/g)) {
        let href = m[1].split("#")[0].split("?")[0];
        if (href.startsWith(PROD)) href = href.slice(PROD.length);
        if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/blog")) continue;
        href = href.replace(/\/$/, "") || "/";
        if (visto.has(href)) continue;
        visto.add(href);
        if (alvo.has(href)) fila.push(href);
      }
    }
    const faltam = [...alvo].filter((p) => !visto.has(p));
    return faltam.length
      ? `${alvo.size - faltam.length}/${alvo.size} URLs alcançáveis pela home; faltam ex.: ${faltam.slice(0, 5).join(", ")}`
      : null;
  },

  async "faq-html"() {
    const erros = [];
    for (const path of ["/particular/cursos/excel", "/cursos/create/8-9-anos", "/particular"]) {
      const { body } = await get(path);
      const visivel = norm(stripScripts(body));
      let total = 0;
      let faltam = 0;
      for (const n of jsonLd(body)) {
        if (n["@type"] !== "FAQPage") continue;
        for (const q of n.mainEntity ?? []) {
          total++;
          const trecho = norm(q.acceptedAnswer?.text ?? "").slice(0, 60);
          if (!visivel.includes(trecho)) faltam++;
        }
      }
      if (faltam) erros.push(`${path}: ${faltam}/${total} respostas só no JSON-LD`);
    }
    return erros.length ? erros.join(" · ") : null;
  },

  async "aulas-html"() {
    const { body } = await get("/cursos/create/8-9-anos");
    return norm(stripScripts(body)).includes("Bem-vindo ao Arcade")
      ? null
      : '/cursos/create/8-9-anos: aula "Bem-vindo ao Arcade" fora do HTML';
  },

  async "h1-visivel"() {
    const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
    const erros = [];
    for (const path of ["/", "/particular", "/particular/cursos/excel", "/cursos/create/8-9-anos"]) {
      const { body } = await get(path);
      const html = stripScripts(body);
      const fim = html.indexOf("<h1");
      if (fim < 0) {
        erros.push(`${path}: sem H1`);
        continue;
      }
      const pilha = [];
      for (const m of html.slice(0, fim + html.slice(fim).indexOf(">") + 1).matchAll(/<(\/?)([a-zA-Z0-9-]+)([^>]*)>/g)) {
        const [, fecha, tag, attrs] = m;
        const t = tag.toLowerCase();
        if (fecha) {
          const i = pilha.map((p) => p.t).lastIndexOf(t);
          if (i >= 0) pilha.length = i;
        } else if (!VOID.has(t) && !attrs.endsWith("/")) {
          pilha.push({ t, oculto: /opacity:\s*0(?![.\d])/.test(attrs) });
        }
      }
      if (pilha.some((p) => p.oculto)) erros.push(`${path}: H1 dentro de elemento com opacity:0`);
    }
    return erros.length ? erros.join(" · ") : null;
  },

  async accept() {
    const erros = [];
    for (const accept of ["text/markdown", "application/json", "text/plain", "text/*", "TEXT/HTML"]) {
      const { status } = await get("/cursos", { accept });
      if (status >= 500) erros.push(`Accept ${accept} → ${status}`);
    }
    const { status: sf } = await get("/_serverFn/verificador-seo");
    if (sf !== 404) erros.push(`/_serverFn/* → ${sf} (esperado 404)`);
    return erros.length ? erros.join(" · ") : null;
  },

  async "json-ld"() {
    const erros = [];
    for (const path of ["/", "/particular", "/particular/cursos/excel", "/cursos/create/8-9-anos"]) {
      const { body } = await get(path);
      const nos = jsonLd(body);
      walk(nos, (n) => {
        if (n.__invalido) erros.push(`${path}: JSON-LD inválido`);
        if (n.aggregateRating) erros.push(`${path}: aggregateRating em ${n["@type"]}`);
        const inst = [].concat(n.instructor ?? []);
        if (inst.some((i) => i?.["@type"] === "Organization")) erros.push(`${path}: instructor=Organization`);
        const tipos = [].concat(n["@type"] ?? []);
        if (tipos.includes("EducationalOrganization") && n.audience) erros.push(`${path}: audience na organização`);
      });
      if (path === "/particular" && !nos.some((n) => n["@type"] === "ItemList"))
        erros.push("/particular: sem ItemList dos cursos");
    }
    return erros.length ? [...new Set(erros)].join(" · ") : null;
  },

  async 404() {
    const { status, body } = await get("/pagina-que-nao-existe-verificador-seo");
    const home = (await get("/")).body.match(/<title>([^<]*)<\/title>/)?.[1];
    const titulo = body.match(/<title>([^<]*)<\/title>/)?.[1];
    const erros = [];
    if (status !== 404) erros.push(`status ${status}`);
    if (!/name="robots" content="[^"]*noindex/.test(body)) erros.push("sem meta robots noindex");
    if (!titulo || titulo === home) erros.push("título igual ao da home");
    return erros.length ? `404: ${erros.join(", ")}` : null;
  },

  async rodape() {
    const { body } = await get("/");
    const rodape = body.slice(body.lastIndexOf("<footer"));
    const faltam = [
      [/<nav\b/, "<nav>"],
      [/<address\b/, "<address>"],
      [/href="tel:/, "link tel:"],
      [/href="\/particular"/, "link para /particular"],
    ]
      .filter(([re]) => !re.test(rodape))
      .map(([, nome]) => nome);
    return faltam.length ? `rodapé sem ${faltam.join(", ")}` : null;
  },
};

let falhas = 0;
for (const [nome, fn] of Object.entries(checks)) {
  if (ONLY && !ONLY.has(nome)) continue;
  try {
    const erro = await fn();
    if (erro) falhas++;
    console.log(`${erro ? "FALHOU" : "ok    "}  ${nome.padEnd(11)} ${erro ?? ""}`);
  } catch (e) {
    falhas++;
    console.log(`ERRO    ${nome.padEnd(11)} ${e.message}`);
  }
}
console.log(`\n${falhas ? `${falhas} checagem(ns) falharam` : "tudo ok"} — base ${BASE}`);
process.exit(falhas ? 1 : 0);
