import type { CSSProperties, ReactNode } from "react";
import { AudienceTitle, Picked, SectionHead, TierTabs } from "@/components/course-skins/variants/design-ui";
import { ChevronDown, ChevronUp, CloudUpload, Copy, Crown, Download, Folder, Hand, LayoutTemplate, Lock, Plus, Search, Shapes, Share2, Star, Type } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta } from "@/components/course-skins/shared";
import { Handles, StudioLogo } from "@/components/course-skins/scenes/design-kit";
import { CREAM, DOTS_LIGHT, INK, SWATCHES, VIOLET, pad, type AudienceProps, type ContentProps } from "@/components/course-skins/variants/design-tokens";

/**
 * Canva: tudo é "modelo pronto + kit de marca".
 * - Para quem é: a galeria de modelos do Canva (story, post, apresentação, flyer,
 *   miniatura), cada público vira um modelo já diagramado, ao lado do kit de marca.
 * - Conteúdo: o editor do Canva com as páginas empilhadas (uma por módulo) e os
 *   elementos sendo arrastados do painel lateral para dentro das páginas.
 */

// ── Tela do monitor (SVG 400×320) ─────────────────────────────────────────────

function canvaScreen(theme: CourseTheme) {
  return function screen({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
    const side = w * 0.2;
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill="#ebe8ee" />
        <defs>
          <linearGradient id="canva-bar" x1="0" x2="1">
            <stop offset="0" stopColor={theme.accent} />
            <stop offset="1" stopColor={VIOLET} />
          </linearGradient>
        </defs>
        <rect x={x} y={y} width={w} height="7" fill="url(#canva-bar)" />
        {/* Painel lateral com miniaturas de modelos */}
        <rect x={x} y={y + 7} width={side} height={h - 7} fill="#fff" />
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={x + 4}
            y={y + 12 + i * 17}
            width={side - 8}
            height="13"
            rx="2"
            fill={[theme.accent, theme.accent2, VIOLET][i]}
            fillOpacity="0.85"
          />
        ))}
        {/* Página sendo montada */}
        <rect x={x + side + 10} y={y + 13} width={w - side - 20} height={h - 22} fill={CREAM} />
        <circle cx={x + w - 22} cy={y + 30} r="12" fill={theme.accent} />
        <rect x={x + side + 16} y={y + 24} width={w * 0.34} height="6" rx="1" fill={INK} />
        <rect x={x + side + 16} y={y + 34} width={w * 0.26} height="6" rx="1" fill={INK} />
        <rect x={x + side + 16} y={y + 48} width={w * 0.2} height="6" rx="3" fill={theme.accent2} />
        {/* Elemento sendo arrastado do painel */}
        <path
          d={`M${x + side + 26} ${y + h - 26} l3 6 l6.5 .8 l-4.8 4.4 l1.3 6.4 l-6 -3.2 l-6 3.2 l1.3 -6.4 l-4.8 -4.4 l6.5 -.8 z`}
          fill={VIOLET}
        />
        <rect
          x={x + side + 15}
          y={y + h - 29}
          width="22"
          height="22"
          fill="none"
          stroke={theme.accent}
          strokeWidth="0.8"
          strokeDasharray="2 1.5"
        />
      </g>
    );
  };
}

// ── 01 · PARA QUEM É: galeria de modelos + kit de marca ───────────────────────

type Formato = {
  nome: string;
  medida: string;
  /** Proporção como piso (padding-top em % da largura); o modelo cresce se o texto precisar. */
  piso: string;
  render: (texto: string, n: number) => ReactNode;
};

const FORMATOS: Formato[] = [
  {
    nome: "Story",
    medida: "1080 × 1920 px",
    piso: "pt-[125%] sm:pt-[177.78%]",
    render: (texto, n) => (
      <div className="relative flex flex-col overflow-hidden bg-[linear-gradient(165deg,var(--accent),#7c3aed)] p-6 text-white">
        <span className="absolute -right-16 -top-10 h-44 w-44 rounded-full bg-(--accent-2)/90" />
        <span className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border-[18px] border-white/15" />
        <div className="relative flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-1 flex-1 rounded-full ${i === 0 ? "bg-white" : "bg-white/35"}`} />
          ))}
        </div>
        <span className="relative mt-6 font-serif text-5xl italic leading-none text-white/85">{pad(n)}</span>
        <p className="relative mt-auto text-xl font-black leading-snug">{texto}</p>
        <span className="relative mx-auto mt-6 rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-(--accent)">
          É você? Arrasta pra cima
        </span>
      </div>
    ),
  },
  {
    nome: "Post do Instagram",
    medida: "1080 × 1080 px",
    piso: "pt-[100%]",
    render: (texto, n) => (
      <div className="relative flex flex-col overflow-hidden p-6" style={{ background: CREAM, color: INK }}>
        <span className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-(--accent-2)" />
        <span className="absolute right-6 top-12 font-serif text-4xl italic text-[#1f1a24]">{pad(n)}</span>
        <span className="relative w-fit rounded-full bg-(--accent) px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-white">
          Para você
        </span>
        <p className="relative mt-auto text-lg font-black leading-snug">{texto}</p>
        <span className="relative mt-4 h-1.5 w-16 rounded-full bg-(--accent)" />
      </div>
    ),
  },
  {
    nome: "Apresentação",
    medida: "1920 × 1080 px",
    piso: "pt-[56.25%]",
    render: (texto, n) => (
      <div className="relative flex overflow-hidden bg-[#1f1a24] text-white">
        <span className="absolute -right-6 -top-8 h-20 w-20 rotate-12 rounded-2xl bg-(--accent)/80" />
        <span className="w-3 shrink-0 bg-(--accent-2)" />
        <div className="relative flex flex-1 flex-col p-5">
          <span className="font-mono text-[11px] text-white/50">Slide {n}</span>
          <p className="mt-auto pt-3 text-base font-bold leading-snug">{texto}</p>
        </div>
      </div>
    ),
  },
  {
    nome: "Flyer",
    medida: "A5 · 148 × 210 mm",
    piso: "pt-[133.33%]",
    render: (texto, n) => (
      <div className="relative flex flex-col overflow-hidden p-6 text-white" style={{ background: VIOLET }}>
        <span className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-white/15" />
        <Star className="absolute right-5 top-5 h-10 w-10 fill-(--accent-2) text-(--accent-2)" />
        <span className="relative font-serif text-6xl italic leading-none text-white/90">{pad(n)}</span>
        <p className="relative mt-6 text-lg font-bold leading-snug">{texto}</p>
        <span className="relative -mx-6 -mb-6 mt-auto bg-(--accent-2) px-6 py-2.5 text-center text-xs font-black uppercase tracking-[0.2em] text-[#1f1a24]">
          Vagas abertas
        </span>
      </div>
    ),
  },
  {
    nome: "Miniatura do YouTube",
    medida: "1280 × 720 px",
    piso: "pt-[56.25%]",
    render: (texto, n) => (
      <div className="relative flex flex-col justify-between gap-3 overflow-hidden bg-(--accent-2) p-5 text-[#1f1a24]">
        <span className="absolute -bottom-9 -right-9 h-20 w-20 rounded-full bg-(--accent)" />
        <span className="relative font-serif text-4xl italic leading-none text-(--accent)">{pad(n)}</span>
        <p className="relative pr-10 text-base font-black leading-snug">{texto}</p>
      </div>
    ),
  },
];

export function CanvaAudience({ course, tema, theme }: AudienceProps) {
  return (
    <section className={`sb-bleed overflow-hidden bg-[#efeaee] py-20 dark:bg-[#0f0d12] ${DOTS_LIGHT}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <SectionHead n="01" label="Para quem é" video={false}>
            <AudienceTitle />
          </SectionHead>
          <Reveal delay={120}>
            <PersonAtDesk theme={theme} tema={tema} renderScreen={canvaScreen(theme)} className="mx-auto w-full max-w-[340px]" />
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-40px_rgba(31,26,36,0.45)] ring-1 ring-[#ece6eb] dark:bg-[#1a171e] dark:shadow-none dark:ring-white/10">
            {/* Busca de modelos */}
            <div className="border-b border-[#ece6eb] p-4 sm:p-5 dark:border-white/10">
              <div className="flex items-center gap-3 rounded-xl bg-[#f4f1f5] px-4 py-3 dark:bg-white/[0.06]">
                <Search className="h-4 w-4 shrink-0 text-[#766c7d] dark:text-white/50" />
                <span className="min-w-0 truncate text-sm text-[#766c7d] dark:text-white/55">
                  Modelos para <b className="font-black text-[#1f1a24] dark:text-white">quem vai fazer o curso</b>
                </span>
                <span className="ml-auto hidden shrink-0 font-mono text-[11px] text-[#766c7d] sm:inline dark:text-white/45">
                  {course.targetAudience.length} modelos
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Todos", ...FORMATOS.map((f) => f.nome)].map((f, i) => (
                  <span
                    key={f}
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      i === 0 ? "bg-[#1f1a24] text-white dark:bg-white dark:text-[#1f1a24]" : "bg-[#f4f1f5] text-[#4a4250] dark:bg-white/[0.06] dark:text-white/70"
                    } ${i > 3 ? "hidden sm:inline" : ""}`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-[230px_1fr]">
              {/* Kit de marca */}
              <aside className="border-b border-[#ece6eb] p-5 lg:border-b-0 lg:border-r dark:border-white/10">
                <p className="flex items-center gap-2 text-sm font-black">
                  <Crown className="h-4 w-4 text-(--accent-2)" /> Kit de marca
                </p>
                <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#766c7d] dark:text-white/45">Logo</p>
                    <span className="mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--accent) font-serif text-3xl italic text-white">
                      v
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#766c7d] dark:text-white/45">Cores</p>
                    <div className="mt-2 flex gap-1.5">
                      {[...SWATCHES.slice(0, 4), CREAM].map((c) => (
                        <span key={c} className="h-8 w-8 rounded-full ring-1 ring-black/10" style={{ background: c }} />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#766c7d] dark:text-white/45">Fontes</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xl font-black leading-tight">Aa Título</p>
                      <p className="font-serif text-lg italic leading-tight text-(--accent)">Aa Destaque</p>
                      <p className="text-sm text-[#4a4250] dark:text-white/70">Aa Corpo do texto</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Galeria (masonry) */}
              <div className="columns-1 gap-5 p-5 sm:columns-2 sm:p-6 xl:columns-3">
                {course.targetAudience.map((item, i) => {
                  const f = FORMATOS[i % FORMATOS.length];
                  return (
                    <Reveal key={item} delay={i * 70} as="figure" className="mb-6 break-inside-avoid">
                      <div className="group relative flex rounded-lg shadow-[0_14px_30px_-18px_rgba(31,26,36,0.55)]">
                        {/* Espaçador com a proporção do formato: piso de altura, nunca corta o texto */}
                        <span className={`w-0 shrink-0 ${f.piso}`} aria-hidden="true" />
                        <div className="flex flex-1 overflow-hidden rounded-lg *:flex-1">{f.render(item, i + 1)}</div>
                        <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow">
                          <Crown className="h-3.5 w-3.5 text-(--accent-2)" />
                        </span>
                        <span className="pointer-events-none absolute inset-0 hidden rounded-lg ring-[3px] ring-inset ring-(--accent) group-hover:block" />
                      </div>
                      <figcaption className="mt-2 flex items-baseline justify-between gap-2 text-xs">
                        <span className="font-bold">{f.nome}</span>
                        <span className="font-mono text-[11px] text-[#766c7d] dark:text-white/45">{f.medida}</span>
                      </figcaption>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── 02 · CONTEÚDO: editor com páginas empilhadas ──────────────────────────────

/** Estilo de cada página, em ciclo. */
const PAGINAS: { page: string; num: string; box: string; mark: string; extra: ReactNode }[] = [
  {
    page: "bg-[#fff4e8] text-[#1f1a24]",
    num: "text-(--accent)",
    box: "bg-white/80 ring-1 ring-[#1f1a24]/10",
    mark: "var(--accent)",
    extra: <span className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-(--accent-2)" />,
  },
  {
    page: "bg-(--accent) text-white",
    num: "text-white/80",
    box: "bg-white/15 ring-1 ring-white/20",
    mark: "var(--accent-2)",
    extra: <span className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border-[22px] border-white/15" />,
  },
  {
    page: "bg-[#1f1a24] text-white",
    num: "text-(--accent-2)",
    box: "bg-white/[0.07] ring-1 ring-white/10",
    mark: VIOLET,
    extra: <span className="absolute -right-10 top-8 h-28 w-28 rotate-12 rounded-3xl bg-(--accent)/70" />,
  },
  {
    page: "bg-(--accent-2) text-[#1f1a24]",
    num: "text-[#1f1a24]",
    box: "bg-white/55 ring-1 ring-[#1f1a24]/10",
    mark: "var(--accent)",
    extra: <Star className="absolute -right-4 -top-4 h-32 w-32 fill-white/40 text-white/0" />,
  },
];

const RAIL = [
  { icon: LayoutTemplate, label: "Design" },
  { icon: Shapes, label: "Elementos" },
  { icon: Type, label: "Texto" },
  { icon: Crown, label: "Marca" },
  { icon: CloudUpload, label: "Uploads" },
  { icon: Folder, label: "Projetos" },
];

/** Formas do painel "Elementos". */
function ShapeTile({ children, style }: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <span className="flex aspect-square items-center justify-center rounded-lg bg-[#f4f1f5] dark:bg-white/[0.06]" style={style}>
      {children}
    </span>
  );
}

export function CanvaContent({ course, logo, selectedTier, onSelectTier }: ContentProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const total = tier.modules.length;

  return (
    <section id="conteudo" className="sb-bleed scroll-mt-4 bg-[#e9e5ec] py-20 dark:bg-[#141117]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" video={false}>
          O que você vai <Picked>criar</Picked>
        </SectionHead>
        <TierTabs course={course} selectedTier={selectedTier} onSelect={onSelectTier} label="Design" />

        <Reveal delay={100} className="mt-10">
          <div className="overflow-clip rounded-2xl bg-white shadow-[0_40px_90px_-50px_rgba(31,26,36,0.6)] ring-1 ring-black/5 dark:bg-[#1a171e] dark:ring-white/10">
            {/* Barra superior do editor */}
            <div className="flex items-center gap-4 bg-[linear-gradient(90deg,var(--accent),#7c3aed)] px-4 py-2.5 text-white sm:px-5">
              <span className="hidden gap-4 text-xs font-semibold text-white/85 sm:flex">
                <span>Arquivo</span>
                <span className="flex items-center gap-1">
                  <Crown className="h-3 w-3 text-(--accent-2)" /> Redimensionar
                </span>
                <span>Editar</span>
              </span>
              <span className="min-w-0 truncate text-sm font-bold sm:mx-auto">Curso — {tier.levelName}</span>
              <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-black text-[#1f1a24] sm:ml-0">
                <Share2 className="h-3.5 w-3.5" /> Compartilhar
              </span>
            </div>

            <div className="grid lg:grid-cols-[76px_240px_1fr]">
              {/* Trilho de abas */}
              <nav className="hidden border-r border-[#ece6eb] py-3 lg:block dark:border-white/10" aria-hidden="true">
                <div className="sticky top-4 space-y-1">
                  {RAIL.map(({ icon: Icon, label }, i) => (
                    <span
                      key={label}
                      className={`mx-2 flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] font-semibold ${
                        i === 1 ? "bg-(--accent)/10 text-(--accent)" : "text-[#766c7d] dark:text-white/50"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                    </span>
                  ))}
                </div>
              </nav>

              {/* Painel "Elementos" */}
              <aside className="hidden border-r border-[#ece6eb] p-4 lg:block dark:border-white/10" aria-hidden="true">
                <div className="sticky top-4">
                  <p className="text-sm font-black">Elementos</p>
                  <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#f4f1f5] px-3 py-2 text-xs text-[#766c7d] dark:bg-white/[0.06] dark:text-white/50">
                    <Search className="h-3.5 w-3.5" /> Buscar elementos
                  </div>
                  <p className="mt-5 text-xs font-bold text-[#4a4250] dark:text-white/70">Formas</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <ShapeTile>
                      <span className="h-8 w-8 rounded-full bg-(--accent)" />
                    </ShapeTile>
                    <ShapeTile>
                      <span className="h-8 w-8 rounded-md bg-(--accent-2)" />
                    </ShapeTile>
                    <ShapeTile>
                      <span className="h-0 w-0 border-x-[16px] border-b-[28px] border-x-transparent" style={{ borderBottomColor: VIOLET }} />
                    </ShapeTile>
                    <ShapeTile>
                      <Star className="h-8 w-8 fill-(--accent-2) text-(--accent-2)" />
                    </ShapeTile>
                    <ShapeTile style={{ outline: "2px dashed var(--accent)", outlineOffset: -2 }}>
                      <Star className="h-8 w-8 fill-[#8b7cf6] text-[#8b7cf6] opacity-40" />
                    </ShapeTile>
                    <ShapeTile>
                      <span className="h-1.5 w-9 rounded-full bg-[#1f1a24] dark:bg-white" />
                    </ShapeTile>
                  </div>
                  <p className="mt-5 text-xs font-bold text-[#4a4250] dark:text-white/70">Texto</p>
                  <div className="mt-2 space-y-2">
                    <span className="block rounded-lg bg-[#f4f1f5] px-3 py-2 text-base font-black dark:bg-white/[0.06]">Adicionar título</span>
                    <span className="block rounded-lg bg-[#f4f1f5] px-3 py-2 text-sm font-bold dark:bg-white/[0.06]">Adicionar subtítulo</span>
                    <span className="block rounded-lg bg-[#f4f1f5] px-3 py-2 text-xs dark:bg-white/[0.06]">Adicionar corpo de texto</span>
                  </div>
                </div>
              </aside>

              {/* Área de trabalho: páginas empilhadas */}
              <div className="min-w-0 bg-[#f1eef3] p-4 sm:p-8 dark:bg-[#121014]">
                <div className="space-y-10">
                  {tier.modules.map((m, i) => {
                    const s = PAGINAS[i % PAGINAS.length];
                    const arrastando = i === 1;
                    const selecionado = i === 0;
                    return (
                      <Reveal key={m.title}>
                        <div className="mb-2 flex items-center gap-3 text-[#766c7d] dark:text-white/50">
                          <p className="min-w-0 truncate text-sm">
                            <b className="font-black text-[#1f1a24] dark:text-white">Página {i + 1}</b> — {m.title}
                          </p>
                          <span className="ml-auto hidden shrink-0 items-center gap-2.5 sm:flex" aria-hidden="true">
                            <ChevronUp className="h-4 w-4" />
                            <ChevronDown className="h-4 w-4" />
                            <Lock className="h-3.5 w-3.5" />
                            <Copy className="h-3.5 w-3.5" />
                            <Plus className="h-4 w-4" />
                          </span>
                        </div>
                        <div className={`relative overflow-hidden rounded-sm p-6 shadow-[0_18px_40px_-24px_rgba(31,26,36,0.5)] sm:p-9 ${s.page}`}>
                          {s.extra}
                          <div className="relative">
                            <div className="flex items-end gap-4">
                              <span className={`font-serif text-6xl italic leading-none sm:text-7xl ${s.num}`}>{pad(i + 1)}</span>
                              <span className="pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] opacity-70">
                                Módulo · {m.topics.length} elementos
                              </span>
                            </div>
                            <h3 className={`relative w-fit max-w-full ${selecionado ? "mt-4 sm:mt-16" : "mt-4"} text-2xl font-black leading-tight tracking-tight sm:text-3xl`}>
                              {m.title}
                              {selecionado && (
                                <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 hidden border-2 border-(--accent) sm:block">
                                  <Handles size={8} />
                                  <span className="absolute -top-11 left-0 flex items-center gap-3 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-[#1f1a24] shadow-lg ring-1 ring-black/5">
                                    Poppins <ChevronDown className="h-3 w-3" />
                                    <span className="h-4 w-px bg-black/10" />
                                    <span className="font-mono">32</span>
                                    <span className="h-4 w-px bg-black/10" />
                                    <b>B</b>
                                    <i className="font-serif">I</i>
                                    <span className="h-3.5 w-3.5 rounded-full bg-(--accent)" />
                                  </span>
                                </span>
                              )}
                            </h3>
                            <ul className="mt-6 grid gap-3 md:grid-cols-2">
                              {m.topics.map((topic, k) => (
                                <li key={topic} className={`flex items-start gap-3 rounded-xl p-3.5 text-[15px] font-medium leading-snug ${s.box}`}>
                                  <span
                                    className={`mt-0.5 h-4 w-4 shrink-0 ${["rounded-full", "rounded-[4px]", "rotate-45 rounded-[3px]"][k % 3]}`}
                                    style={{ background: s.mark }}
                                  />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Elemento sendo arrastado para a página */}
                          {arrastando && (
                            <span className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
                              <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-white/70" />
                              <span className="absolute right-[12%] top-8 flex h-16 w-16 items-center justify-center border border-dashed border-white">
                                <Star className="h-11 w-11 fill-(--accent-2) text-(--accent-2) drop-shadow" />
                                <Hand className="absolute -bottom-4 -right-3 h-7 w-7 fill-white text-[#1f1a24]" />
                              </span>
                              <span className="absolute right-[12%] top-[6.5rem] rounded bg-[#1f1a24] px-2 py-0.5 font-mono text-[10px] text-white">
                                arrastando elemento
                              </span>
                            </span>
                          )}
                        </div>
                      </Reveal>
                    );
                  })}

                  <div className="flex items-center justify-center gap-2 rounded-sm border-2 border-dashed border-[#d9d2dc] py-4 text-sm font-bold text-[#766c7d] dark:border-white/15 dark:text-white/45" aria-hidden="true">
                    <Plus className="h-4 w-4" /> Adicionar página
                  </div>

                  {/* Janela "Baixar" = resultado final */}
                  <Reveal>
                    <div className="ml-auto max-w-2xl rounded-2xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(31,26,36,0.6)] ring-1 ring-black/5 sm:p-7 dark:bg-[#1f1b24] dark:ring-white/10">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--hero-bg) p-1.5">
                          <StudioLogo name={logo} className="h-full w-full" />
                        </span>
                        <div className="min-w-0">
                          <p className="flex items-center gap-2 text-base font-black">
                            <Download className="h-4 w-4 text-(--accent)" /> Baixar · ao final você vai
                          </p>
                          <p className="font-mono text-[11px] text-[#766c7d] dark:text-white/45">
                            {total} páginas · {meta?.aulas ?? tier.totalHours}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-lg font-semibold leading-relaxed">{tier.outcome}</p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#766c7d] dark:text-white/45">Tipo de arquivo</span>
                        <div className="flex flex-wrap gap-1.5">
                          {["PNG", "PDF para impressão", "MP4"].map((t, i) => (
                            <span
                              key={t}
                              className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                                i === 0 ? "bg-(--accent) text-white" : "bg-[#f4f1f5] text-[#4a4250] dark:bg-white/10 dark:text-white/75"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {tier.tools.length > 0 && (
                          <>
                            <span className="font-mono text-[11px] uppercase tracking-wider text-[#766c7d] dark:text-white/45">Apps conectados</span>
                            <div className="flex flex-wrap gap-1.5">
                              {tier.tools.map((tool, i) => (
                                <span
                                  key={tool}
                                  className="inline-flex items-center gap-1.5 rounded-md bg-[#f4f1f5] px-2.5 py-1 text-xs font-bold text-[#4a4250] dark:bg-white/10 dark:text-white/75"
                                >
                                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: SWATCHES[i % SWATCHES.length] }} />
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
