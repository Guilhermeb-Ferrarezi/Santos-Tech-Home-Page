import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Home,
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  BookOpen,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
  LogIn,
} from "lucide-react";
import { Img } from "@/components/img";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { SKINS } from "@/components/course-skins";
import { BRAND_THEME, themeVars, type CourseThemeKey } from "@/lib/course-themes";

export const Route = createFileRoute("/particular")({
  component: ParticularLayout,
});

const DARK_KEY = "particular:dark";

/** `id` bate com `CourseThemeKey` — é a chave usada pra buscar o tema (cor) da categoria em `SKINS`. */
const GRUPOS: {
  id: CourseThemeKey;
  label: string;
  cursos: { slug: string; nome: string; legenda?: string }[];
}[] = [
  {
    id: "informatica",
    label: "Informática",
    cursos: [{ slug: "informatica", nome: "Informática" }],
  },
  {
    id: "office",
    label: "Office",
    cursos: [
      { slug: "office", nome: "Pacote Office" },
      { slug: "excel-power-bi", nome: "Excel + Power BI" },
      { slug: "excel", nome: "Excel" },
      { slug: "excel-ia", nome: "Excel + IA" },
      { slug: "word", nome: "Word" },
      { slug: "powerpoint", nome: "PowerPoint" },
      { slug: "power-bi", nome: "Power BI" },
      { slug: "power-apps", nome: "Power Apps + Power Automate" },
    ],
  },
  {
    id: "ia",
    label: "Inteligência Artificial",
    cursos: [
      { slug: "ia", nome: "Inteligência Artificial" },
      { slug: "agentes-ia", nome: "Agentes de IA com N8N e LLMs" },
      { slug: "rag", nome: "RAG", legenda: "IA com seus Próprios Dados" },
      { slug: "ia-visual", nome: "IA para Criadores: Imagem, Vídeo e Áudio" },
      { slug: "chatgpt", nome: "ChatGPT e IA para Profissionais" },
      { slug: "conteudo-ia", nome: "Criação de Conteúdo com IA" },
    ],
  },
  {
    id: "programacao",
    label: "Programação",
    cursos: [
      { slug: "logica", nome: "Lógica de Programação" },
      { slug: "python", nome: "Python para Automações" },
      { slug: "python-apis", nome: "APIs e Integrações com Python" },
      { slug: "typescript", nome: "TypeScript para Desenvolvimento Moderno" },
      { slug: "git", nome: "Git e GitHub para Profissionais" },
      { slug: "n8n", nome: "Automações + N8N" },
      { slug: "make", nome: "Automações No-Code Make" },
      { slug: "sql", nome: "Banco de Dados com SQL" },
      { slug: "frontend", nome: "Desenvolvimento Web Front-End" },
      { slug: "backend", nome: "Desenvolvimento Web Back-End" },
      { slug: "fullstack", nome: "Full Stack" },
      { slug: "mobile", nome: "Desenvolvimento de Aplicativos" },
      { slug: "jogos", nome: "Desenvolvimento de Jogos" },
      { slug: "ads", nome: "ADS", legenda: "Formação Profissional" },
    ],
  },
  {
    id: "ti",
    label: "T.I",
    cursos: [
      { slug: "suporte", nome: "Suporte Técnico / Help Desk" },
      { slug: "manutencao", nome: "Montagem e Manutenção" },
      { slug: "redes", nome: "Redes e Infraestrutura" },
      { slug: "ciberseguranca", nome: "Cibersegurança" },
      { slug: "linux", nome: "Linux Essencial" },
    ],
  },
  {
    id: "universo-3d",
    label: "Universo 3D",
    cursos: [
      { slug: "modelagem-3d", nome: "Modelagem 3D" },
      { slug: "impressao-3d", nome: "Impressão 3D" },
      { slug: "autocad", nome: "AutoCAD" },
      { slug: "revit", nome: "Revit" },
    ],
  },
  {
    id: "design",
    label: "Design & Criação",
    cursos: [
      { slug: "canva", nome: "Canva Pro" },
      { slug: "photoshop", nome: "Photoshop + Illustrator" },
      { slug: "capcut", nome: "Edição de Vídeo", legenda: "CapCut" },
      { slug: "davinci", nome: "Edição de Vídeo", legenda: "DaVinci Resolve" },
      { slug: "premiere", nome: "Edição de Vídeo", legenda: "Adobe Premiere" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Negócios",
    cursos: [
      { slug: "marketing", nome: "Marketing Digital" },
      { slug: "meta-ads", nome: "Meta Ads", legenda: "Facebook e Instagram" },
      { slug: "google-ads", nome: "Google Ads" },
      { slug: "tiktok-ads", nome: "TikTok Ads" },
      { slug: "copywriting", nome: "Copywriting & Persuasão" },
      { slug: "funil-vendas", nome: "Funil de Vendas + CRM" },
      { slug: "seo", nome: "SEO", legenda: "Otimização para Buscadores" },
      { slug: "redes-sociais", nome: "Gestão de Redes Sociais" },
      { slug: "ecommerce", nome: "E-commerce & Vendas Online" },
    ],
  },
];

type Tone = "dark" | "light";
type Rgba = [number, number, number, number];

/** Textos/ícones da sidebar que ganham tom próprio na fusão (ver styles.css). */
const TONE_TARGETS = ".sb-fg, .sb-fg-soft, .sb-hover, .sb-accent";

const COLOR_FN = /(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*(?:\([^()]*\)[^()]*)*\)|#[0-9a-fA-F]{3,8}\b/g;

function over(top: Rgba, bottom: Rgba): Rgba {
  const a = top[3] + bottom[3] * (1 - top[3]);
  if (a === 0) return [0, 0, 0, 0];
  const ch = (i: number) => (top[i] * top[3] + bottom[i] * bottom[3] * (1 - top[3])) / a;
  return [ch(0), ch(1), ch(2), a];
}

function luminance([r, g, b]: Rgba) {
  const f = (v: number) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

const INK_LUMINANCE = luminance([23, 23, 23, 1]);

/**
 * Texto claro ou escuro pra um item cujas letras podem estar sobre mais de um fundo (ex.:
 * metade sobre uma faixa colorida, metade sobre o hero). Vence o tom legível (≥ 3:1, WCAG)
 * em mais pontos das letras; empate → o de melhor pior-caso. A fração que sobra do outro
 * lado da divisa é segurada pelo halo (styles.css).
 */
function toneFor(backgrounds: Rgba[]): Tone {
  let okWhite = 0;
  let okInk = 0;
  let worstWhite = Infinity;
  let worstInk = Infinity;
  for (const bg of backgrounds) {
    const l = luminance(bg);
    const vsWhite = 1.05 / (l + 0.05);
    const vsInk = (l + 0.05) / (INK_LUMINANCE + 0.05);
    if (vsWhite >= 3) okWhite++;
    if (vsInk >= 3) okInk++;
    worstWhite = Math.min(worstWhite, vsWhite);
    worstInk = Math.min(worstInk, vsInk);
  }
  if (okWhite !== okInk) return okWhite > okInk ? "dark" : "light";
  return worstWhite >= worstInk ? "dark" : "light";
}

/** Caixa das letras de um item (não a do elemento, que inclui padding). */
function inkBox(el: Element): DOMRect {
  if (el instanceof SVGElement) return el.getBoundingClientRect();
  const range = document.createRange();
  range.selectNodeContents(el);
  const r = range.getBoundingClientRect();
  return r.width > 0 && r.height > 0 ? r : el.getBoundingClientRect();
}

/**
 * Cor que a página pintou num ponto da tela, ignorando a sidebar: compõe, de baixo pra
 * cima, as camadas até a primeira opaca (fundo, gradiente, forma SVG como a onda da home).
 * O canvas 1x1 normaliza qualquer formato de cor do navegador (Tailwind v4 usa oklch()).
 */
function createBackdropReader(exclude: Element) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (ctx) ctx.globalCompositeOperation = "copy";
  const cache = new Map<string, Rgba>();

  const toRgba = (css: string): Rgba => {
    if (!ctx || !css || css === "none" || css === "transparent") return [0, 0, 0, 0];
    const hit = cache.get(css);
    if (hit) return hit;
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillStyle = css;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    const c: Rgba = [d[0], d[1], d[2], d[3] / 255];
    cache.set(css, c);
    return c;
  };

  // Barras de curso (Excel+Power BI, Pacote Office…) usam `background: linear-gradient(...)`
  // com stops em posições específicas (ex.: "55%") — um pixel perto da borda pode estar
  // 100% na primeira cor. Média simples dos stops erra a cor aí (já pegou um ícone
  // invisível assim). `sampleLinearGradient` projeta o PONTO de verdade na reta do
  // gradiente e interpola, igual o motor de CSS faria.
  const sampleLinearGradient = (bgImage: string, box: DOMRect, px: number, py: number): Rgba | null => {
    const m = bgImage.match(/linear-gradient\(([\s\S]+)\)/);
    if (!m) return null;
    const parts: string[] = [];
    let depth = 0;
    let cur = "";
    for (const ch of m[1]) {
      if (ch === "(") depth++;
      if (ch === ")") depth--;
      if (ch === "," && depth === 0) {
        parts.push(cur.trim());
        cur = "";
      } else cur += ch;
    }
    if (cur.trim()) parts.push(cur.trim());
    if (!parts.length) return null;

    let angleDeg = 180; // padrão do CSS ("to bottom") quando o ângulo vem omitido
    let stopParts = parts;
    const deg = parts[0].match(/^(-?[\d.]+)deg$/);
    const toSide: Record<string, number> = { top: 0, right: 90, bottom: 180, left: 270 };
    if (deg) {
      angleDeg = parseFloat(deg[1]);
      stopParts = parts.slice(1);
    } else if (/^to\s/.test(parts[0])) {
      const words = parts[0].replace(/^to\s+/, "").split(/\s+/);
      if (words.length === 1 && words[0] in toSide) angleDeg = toSide[words[0]];
      else if (words.includes("right") && words.includes("bottom")) angleDeg = 135;
      else if (words.includes("left") && words.includes("bottom")) angleDeg = 225;
      else if (words.includes("right") && words.includes("top")) angleDeg = 45;
      else if (words.includes("left") && words.includes("top")) angleDeg = 315;
      stopParts = parts.slice(1);
    }

    const raw = stopParts.map((p) => {
      const colorMatch = p.match(COLOR_FN);
      const posMatch = p.match(/(-?[\d.]+)%\s*$/);
      return { color: colorMatch ? toRgba(colorMatch[0]) : ([0, 0, 0, 0] as Rgba), pos: posMatch ? parseFloat(posMatch[1]) / 100 : -1 };
    });
    if (!raw.length) return null;
    // Posições implícitas: 1º stop = 0, último = 1, os do meio se espalham entre os vizinhos
    // com posição conhecida — igual o CSS resolve quando você não escreve "%".
    if (raw[0].pos < 0) raw[0].pos = 0;
    if (raw[raw.length - 1].pos < 0) raw[raw.length - 1].pos = 1;
    for (let i = 0; i < raw.length; i++) {
      if (raw[i].pos >= 0) continue;
      let j = i;
      while (raw[j].pos < 0) j++;
      const start = raw[i - 1].pos;
      const span = raw[j].pos - start;
      const count = j - i + 1;
      for (let k = i; k < j; k++) raw[k].pos = start + (span * (k - i + 1)) / count;
      i = j - 1;
    }
    for (let i = 1; i < raw.length; i++) if (raw[i].pos < raw[i - 1].pos) raw[i].pos = raw[i - 1].pos;

    const rad = (angleDeg * Math.PI) / 180;
    const dx = Math.sin(rad);
    const dy = -Math.cos(rad);
    const length = Math.abs(box.width * dx) + Math.abs(box.height * dy);
    const t = length === 0 ? 0.5 : ((px - box.width / 2) * dx + (py - box.height / 2) * dy) / length + 0.5;
    const clamped = Math.max(0, Math.min(1, t));

    if (clamped <= raw[0].pos) return raw[0].color;
    const lastStop = raw[raw.length - 1];
    if (clamped >= lastStop.pos) return lastStop.color;
    for (let i = 1; i < raw.length; i++) {
      if (clamped > raw[i].pos) continue;
      const a = raw[i - 1];
      const b = raw[i];
      const span = b.pos - a.pos;
      const f = span > 0 ? (clamped - a.pos) / span : 0;
      return [0, 1, 2, 3].map((k) => a.color[k] + (b.color[k] - a.color[k]) * f) as Rgba;
    }
    return lastStop.color;
  };

  const layerOf = (el: Element, x: number, y: number): Rgba => {
    const cs = getComputedStyle(el);
    const opacity = Number(cs.opacity);
    if (el instanceof SVGGeometryElement) {
      const fill = toRgba(cs.fill);
      return [fill[0], fill[1], fill[2], fill[3] * Number(cs.fillOpacity) * opacity];
    }
    if (el instanceof SVGElement) return [0, 0, 0, 0];
    let c = toRgba(cs.backgroundColor);
    if (cs.backgroundImage.includes("linear-gradient")) {
      const box = el.getBoundingClientRect();
      const g = sampleLinearGradient(cs.backgroundImage, box, x - box.left, y - box.top);
      if (g) c = over(g, c);
    } else if (cs.backgroundImage.includes("gradient")) {
      // radial/conic (ex.: textura de pontinhos): a média basta, é decorativo e pequeno.
      const stops = (cs.backgroundImage.match(COLOR_FN) ?? []).map(toRgba).filter((s) => s[3] > 0);
      if (stops.length) {
        const avg = (i: number) => stops.reduce((sum, s) => sum + s[i], 0) / stops.length;
        c = over([avg(0), avg(1), avg(2), avg(3)], c);
      }
    }
    return [c[0], c[1], c[2], c[3] * opacity];
  };

  return (x: number, y: number): Rgba => {
    const layers: Rgba[] = [];
    for (const el of document.elementsFromPoint(x, y)) {
      if (exclude.contains(el)) continue;
      const c = layerOf(el, x, y);
      if (c[3] <= 0.01) continue;
      layers.push(c);
      if (c[3] >= 0.99) break;
    }
    return layers.reduceRight<Rgba>((acc, c) => over(c, acc), [255, 255, 255, 1]);
  };
}

function ParticularLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(true);
  const [gruposOpen, setGruposOpen] = useState<Record<string, boolean>>({});
  const [dark, setDark] = useState(false);
  const sidebarRef = useRef<HTMLElement | null>(null);

  // Lê a preferência salva no mount (inicia em false p/ casar com o SSR e evitar mismatch).
  useEffect(() => {
    setDark(localStorage.getItem(DARK_KEY) === "true");
  }, []);

  const toggleDark = () =>
    setDark((d) => {
      const next = !d;
      localStorage.setItem(DARK_KEY, String(next));
      return next;
    });

  const toggleGrupo = (id: string) =>
    setGruposOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Categoria do curso atual (se a rota for uma página de curso) — usada pra "herdar"
  // a cor de destaque daquele curso na sidebar (borda, ícone e item ativos).
  const activeSlug = pathname.startsWith("/particular/cursos/")
    ? pathname.slice("/particular/cursos/".length).split("/")[0]
    : null;
  const activeGroup = activeSlug
    ? GRUPOS.find((g) => g.cursos.some((c) => c.slug === activeSlug))
    : undefined;
  const activeTheme = activeGroup ? SKINS[activeGroup.id].theme : BRAND_THEME;

  // Ao entrar numa página de curso, garante que o grupo dela esteja expandido
  // na sidebar (senão o highlight fica escondido atrás de um dropdown fechado).
  useEffect(() => {
    if (activeGroup) {
      setCursosOpen(true);
      setGruposOpen((prev) => ({ ...prev, [activeGroup.id]: true }));
    }
  }, [activeGroup]);

  // Fusão da sidebar com o fundo da página (telas ≥ lg): a sidebar não tem fundo próprio
  // — o fundo real da página passa por trás dela e só os traços separam (regras em
  // styles.css). Como esse fundo muda ao longo da altura (hero escuro em cima, seção clara
  // embaixo), cada texto/ícone decide o próprio tom pelo que está exatamente atrás dele.
  // Lê o que o navegador pintou em vez de mapear cor por pele: vale igual pra home e pras
  // 8 categorias de curso. Conferido em todas as páginas por scripts/verificar-sidebar-fusao.mjs.
  useEffect(() => {
    const aside = sidebarRef.current;
    if (!aside) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const backdrop = createBackdropReader(aside);

    function sample() {
      if (!aside) return;
      if (!desktop.matches) {
        aside.removeAttribute("data-fusion");
        return;
      }
      aside.setAttribute("data-fusion", "");
      const vh = window.innerHeight;
      const seen = new Map<number, Rgba>();
      const at = (x: number, y: number) => {
        const key = (y >> 2) * 8192 + (x >> 2);
        let c = seen.get(key);
        if (!c) {
          c = backdrop(x, y);
          seen.set(key, c);
        }
        return c;
      };
      for (const el of aside.querySelectorAll<HTMLElement | SVGElement>(TONE_TARGETS)) {
        if (el.getBoundingClientRect().height === 0) continue;
        const r = inkBox(el);
        if (r.bottom < 0 || r.top > vh) continue;
        // Amostra as letras (começo do texto, que é alinhado à esquerda) em 5 alturas —
        // pega item atravessando a divisa entre dois fundos, inclusive faixa fina (barra
        // de status) no meio de um item de 2 linhas.
        const x = Math.round(r.left + Math.min(r.width, 48) / 2);
        const ys = [0.15, 0.33, 0.5, 0.67, 0.85].map((f) => Math.round(r.top + r.height * f));
        const tone = toneFor(ys.map((y) => at(x, y)));
        if (el.dataset.tone !== tone) el.dataset.tone = tone;
      }
    }

    let raf = 0;
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        sample();
      });
    };
    // Enquanto a própria sidebar anima (abrir grupo, recolher), os itens mudam de lugar a
    // cada frame: reamostra até a animação acabar.
    let animatingUntil = 0;
    const onTransition = () => {
      const running = performance.now() < animatingUntil;
      animatingUntil = performance.now() + 450;
      if (running) return;
      const loop = () => {
        sample();
        if (performance.now() < animatingUntil) requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    };
    // Conteúdo da página que muda de altura sem rolar (FAQ abrindo, imagem carregando).
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);

    sample();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    aside.addEventListener("scroll", schedule, { capture: true, passive: true });
    aside.addEventListener("transitionrun", onTransition);
    desktop.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(raf);
      animatingUntil = 0;
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      aside.removeEventListener("scroll", schedule, { capture: true });
      aside.removeEventListener("transitionrun", onTransition);
      desktop.removeEventListener("change", schedule);
    };
  }, [pathname, collapsed, dark, cursosOpen, gruposOpen]);

  const navItem = (active: boolean) =>
    [
      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
      active
        ? "sb-accent bg-[#0DB88F]/10 text-[#0DB88F]"
        : "sb-fg-soft sb-hover text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white",
    ].join(" ");

  const iconCls = (active: boolean) =>
    active ? "sb-accent text-[#0DB88F]" : "sb-fg-soft text-neutral-400 dark:text-neutral-500";

  const label = (text: string) => (
    <span
      className={[
        "whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-300",
        collapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100",
      ].join(" ")}
    >
      {text}
    </span>
  );

  return (
    <div className={dark ? "dark" : ""}>
    <div
      className={`sb-layout relative min-h-screen ${dark ? "bg-neutral-950" : "bg-neutral-50"}`}
      style={{ "--sb-width": collapsed ? "60px" : "256px" } as React.CSSProperties}
    >
      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── SIDEBAR ── */}
      <aside
        id="particular-sidebar"
        ref={sidebarRef}
        style={themeVars(activeTheme)}
        className={[
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r overflow-hidden",
          "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800",
          // Mobile: slide transform, largura fixa
          "w-64 -translate-x-full transition-transform duration-300 ease-in-out",
          mobileOpen && "translate-x-0",
          // Desktop: sempre visível (agora sobrepõe o conteúdo, não empurra, sem fundo
          // próprio), anima só a largura.
          "lg:translate-x-0 lg:transition-[width] lg:duration-300 lg:ease-in-out",
          collapsed ? "lg:w-[60px]" : "lg:w-64",
        ].filter(Boolean).join(" ")}
      >
        {/* Cabeçalho */}
        <div
          className={[
            "sb-border flex shrink-0 border-b border-neutral-200 dark:border-neutral-800",
            collapsed
              ? "flex-col items-center gap-2 px-2 py-3"
              : "h-16 flex-row items-center gap-1.5 px-2.5",
          ].join(" ")}
        >
          {/* Logo — tamanho maior quando colapsado para melhor resolução */}
          <Img
            name="logo"
            alt="Santos Tech"
            width={192}
            height={192}
            sizesAttr="40px"
            className={collapsed ? "h-10 w-10 shrink-0" : "h-8 w-8 shrink-0"}
          />

          {/* Texto — some quando colapsado */}
          <div
            className={[
              "flex min-w-0 flex-1 flex-col items-start leading-none overflow-hidden transition-[opacity,max-width] duration-300",
              collapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100",
            ].join(" ")}
          >
            <span className="sb-fg-soft whitespace-nowrap text-[8px] font-light uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-0.5">Escola</span>
            <div className="flex min-w-0 items-center gap-1">
              <span className="sb-fg min-w-0 truncate text-xs font-black tracking-tight text-neutral-900 dark:text-white">
                SANTOS TECH
              </span>
              <span className="sb-solid shrink-0 inline-flex items-center rounded-md bg-neutral-900 dark:bg-white px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white dark:text-neutral-900">
                particular
              </span>
            </div>
          </div>

          {/* Botão recolher (expandido) ou expandir (colapsado) — sempre no cabeçalho */}
          {!collapsed ? (
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Recolher menu"
              className="sb-fg-soft sb-hover ml-auto hidden lg:flex shrink-0 rounded-md p-1 text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <PanelLeftClose className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCollapsed(false)}
              aria-label="Expandir menu"
              className="sb-fg-soft sb-hover hidden lg:flex items-center justify-center rounded-lg p-1.5 text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <PanelLeftOpen className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-4 space-y-0.5">

          {/* Início */}
          <Link
            to="/particular"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? "Início" : undefined}
            className={navItem(pathname === "/particular")}
          >
            <Home className={`h-4 w-4 shrink-0 ${iconCls(pathname === "/particular")}`} />
            {label("Início")}
          </Link>

          <div className="sb-divider my-3 h-px bg-neutral-100 dark:bg-neutral-800" />

          {/* Cursos dropdown */}
          <button
            type="button"
            onClick={() => {
              if (collapsed) {
                setCollapsed(false);
                setCursosOpen(true);
              } else {
                setCursosOpen((o) => !o);
              }
            }}
            title={collapsed ? "Cursos — clique para expandir" : undefined}
            className="sb-fg-soft sb-hover w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <BookOpen className="sb-fg-soft h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
            <span
              className={[
                "flex-1 text-left whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-300",
                collapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100",
              ].join(" ")}
            >
              Cursos
            </span>
            <ChevronDown
              className={[
                "sb-fg-soft h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500 transition-all duration-300",
                collapsed ? "max-w-0 opacity-0" : "max-w-[20px] opacity-100",
                cursosOpen ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
          </button>

          {/* Dropdown — grupos com sub-dropdowns */}
          <div
            className={[
              "grid transition-[grid-template-rows] duration-300 ease-in-out",
              cursosOpen && !collapsed ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            ].join(" ")}
          >
            <div className="overflow-hidden">
              <div className="sb-border ml-3 border-l border-neutral-200 dark:border-neutral-800 pl-2 pt-1 pb-1 space-y-0.5">
                {GRUPOS.map(({ id, label: lbl, cursos }) => {
                  const isActiveGroup = activeGroup?.id === id;
                  return (
                    <div key={id}>
                      {/* Botão do grupo — herda a cor do curso atual quando é o grupo ativo */}
                      <button
                        type="button"
                        onClick={() => toggleGrupo(id)}
                        className={[
                          "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wider transition-colors",
                          isActiveGroup
                            ? "sb-accent text-(--accent) bg-(--accent)/[0.06] hover:bg-(--accent)/10"
                            : "sb-fg sb-hover text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/[0.07]",
                        ].join(" ")}
                      >
                        <span className="flex-1 text-left line-clamp-2">{lbl}</span>
                        <ChevronDown
                          className={[
                            "h-3 w-3 shrink-0 transition-transform duration-200",
                            isActiveGroup ? "sb-accent text-(--accent)" : "sb-fg-soft",
                            gruposOpen[id] ? "rotate-180" : "rotate-0",
                          ].join(" ")}
                        />
                      </button>

                      {/* Links do grupo — animação grid */}
                      <div
                        className={[
                          "grid transition-[grid-template-rows] duration-200 ease-in-out",
                          gruposOpen[id] ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={[
                              "ml-2 border-l pl-2 pb-1 space-y-0.5 transition-colors",
                              isActiveGroup
                                ? "border-(--accent)/40"
                                : "sb-border border-neutral-100 dark:border-neutral-800/60",
                            ].join(" ")}
                          >
                            {cursos.map(({ slug, nome, legenda }) => {
                              const isActiveCourse = pathname === `/particular/cursos/${slug}`;
                              return (
                                <Link
                                  key={slug}
                                  to={`/particular/cursos/${slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  title={legenda ? `${nome} — ${legenda}` : nome}
                                  className={[
                                    "flex min-w-0 flex-col rounded-lg px-3 py-1.5 leading-tight transition-colors",
                                    isActiveCourse
                                      ? "sb-accent bg-(--accent)/10 text-(--accent)"
                                      : "sb-fg-soft sb-hover text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white",
                                  ].join(" ")}
                                >
                                  <span className="line-clamp-2 text-sm font-medium">{nome}</span>
                                  {legenda && (
                                    <span
                                      className={[
                                        "truncate text-xs",
                                        isActiveCourse
                                          ? "sb-accent text-(--accent)/70"
                                          : "sb-fg-soft text-neutral-400 dark:text-neutral-500",
                                      ].join(" ")}
                                    >
                                      {legenda}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="sb-divider my-3 h-px bg-neutral-100 dark:bg-neutral-800" />

          {/* Suporte */}
          <a
            href={WHATSAPP_URL.courses}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? "Falar no WhatsApp" : undefined}
            className="sb-fg-soft sb-hover flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <MessageCircle className="sb-fg-soft h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
            {label("Falar no WhatsApp")}
          </a>

        </nav>

        {/* Rodapé */}
        <div className="sb-border shrink-0 border-t border-neutral-200 dark:border-neutral-800 p-3 space-y-2">
          <button
            type="button"
            onClick={toggleDark}
            title={collapsed ? (dark ? "Modo claro" : "Modo escuro") : undefined}
            className="sb-fg-soft sb-hover w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {dark
              ? <Sun className="sb-fg-soft h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
              : <Moon className="sb-fg-soft h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />}
            {label(dark ? "Modo claro" : "Modo escuro")}
          </button>

          <a
            href="https://auth.santos-tech.com"
            title={collapsed ? "Entrar na conta" : undefined}
            className={[
              "sb-solid flex items-center justify-center gap-2 rounded-lg bg-[#0DB88F] text-sm font-bold text-white transition hover:bg-[#0aaa82] active:scale-[0.98]",
              collapsed ? "px-2 py-2.5" : "px-4 py-2.5",
            ].join(" ")}
          >
            {collapsed ? <LogIn className="h-4 w-4" /> : "Entrar na conta"}
          </a>
        </div>
      </aside>

      {/* ── CONTEÚDO ── */}
      {/* A sidebar agora sobrepõe (não empurra) o conteúdo em telas grandes, pra dar pra
          amostrar o fundo real da página; esse padding-left reserva o espaço visual dela. */}
      <div className={`flex flex-col transition-[padding-left] duration-300 ease-in-out ${collapsed ? "lg:pl-[60px]" : "lg:pl-64"}`}>
        {/* Topbar mobile */}
        <div className="sticky top-0 z-40 flex h-14 shrink-0 items-center border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 lg:hidden">
          {/* Logo + nome — esquerda */}
          <div className="flex items-center gap-2">
            <Img name="logo" alt="Santos Tech" width={28} height={28} className="h-7 w-7 shrink-0" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[8px] font-light uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-0.5">Escola</span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-neutral-900 dark:text-white">SANTOS TECH</span>
                <span className="inline-flex items-center rounded-md bg-neutral-900 dark:bg-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white dark:text-neutral-900">
                  particular
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1" />

          {/* Login — direita */}
          <a
            href="https://auth.santos-tech.com"
            className="rounded-lg bg-neutral-900 dark:bg-white px-4 py-1.5 text-xs font-bold text-white dark:text-neutral-900 transition hover:bg-neutral-700 dark:hover:bg-neutral-100"
          >
            Login
          </a>

          {/* Hambúrguer — direita */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menu"
            className="ml-2 rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] dark:text-neutral-400 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  );
}
