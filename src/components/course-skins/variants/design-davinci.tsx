import { useState, type CSSProperties, type ReactNode } from "react";
import { AudienceTitle, Picked, SectionHead, TierTabs } from "@/components/course-skins/variants/design-ui";
import { AudioLines, ChevronLeft, ChevronRight, Film, FolderOpen, Palette, Rocket, Scissors, Workflow, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta } from "@/components/course-skins/shared";
import { StudioLogo } from "@/components/course-skins/scenes/design-kit";
import { CYAN, DOTS_LIGHT, GREEN, VIOLET, pad, type AudienceProps, type ContentProps } from "@/components/course-skins/variants/design-tokens";

/**
 * DaVinci Resolve: o software de color grading.
 * - Para quem é: a página Cor. O visor mostra você em "antes/depois" (log × graduado)
 *   e cada público é um nó da correção paralela, entre a Entrada e a Saída.
 * - Conteúdo: as páginas do Resolve (Mídia → Corte → Edição → Fusion → Cor →
 *   Fairlight → Entrega) viram a navegação; cada módulo abre na sua página.
 */

// ── Tela do monitor (SVG 400×320): página Cor ─────────────────────────────────

function davinciScreen(theme: CourseTheme) {
  return function screen({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
    const r = Math.min(w, h) * 0.11;
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill="#141217" />
        {/* Visor com wipe antes/depois */}
        <rect x={x + w * 0.1} y={y + 5} width={w * 0.4} height={h * 0.46} fill="#6b6570" />
        <rect x={x + w * 0.5} y={y + 5} width={w * 0.4} height={h * 0.46} fill={theme.accent} fillOpacity="0.85" />
        <circle cx={x + w * 0.62} cy={y + 16} r="6" fill={theme.accent2} />
        <rect x={x + w * 0.5 - 0.6} y={y + 5} width="1.2" height={h * 0.46} fill="#fff" />
        {/* Rodas de cor */}
        {[0.22, 0.5, 0.78].map((cx, i) => (
          <g key={cx}>
            <circle cx={x + w * cx} cy={y + h * 0.72} r={r} fill="none" stroke="#fff" strokeOpacity="0.35" />
            <circle cx={x + w * cx + (i - 1) * 2} cy={y + h * 0.72 - 1.5} r="1.8" fill={[CYAN, "#fff", theme.accent2][i]} />
          </g>
        ))}
        {/* Nós */}
        {[0.3, 0.55].map((nx, i) => (
          <rect key={nx} x={x + w * nx} y={y + h * 0.9} width={w * 0.14} height="5" rx="1.5" fill={i ? theme.accent : GREEN} />
        ))}
      </g>
    );
  };
}

// ── 01 · PARA QUEM É: página Cor, antes/depois + nós ──────────────────────────

/** "Grade" de cada nó, aplicado à miniatura. */
const GRADES: { nome: string; filtro: string }[] = [
  { nome: "Teal & orange", filtro: "saturate(1.4) hue-rotate(-12deg) contrast(1.1)" },
  { nome: "Quente", filtro: "sepia(0.45) saturate(1.5) brightness(1.05)" },
  { nome: "Frio", filtro: "hue-rotate(40deg) saturate(1.1) brightness(0.95)" },
  { nome: "P&B", filtro: "grayscale(1) contrast(1.25)" },
  { nome: "Vivo", filtro: "saturate(1.9) contrast(1.05)" },
];

/** Miniatura de quadro (paisagem) usada nos nós. */
function Frame({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 64 36" className="h-9 w-16 shrink-0 rounded-[3px] ring-1 ring-white/15" style={style} aria-hidden="true">
      <rect width="64" height="36" fill="#f59e9e" />
      <rect width="64" height="20" fill="#7cc3e8" />
      <circle cx="46" cy="11" r="5" fill="#fde68a" />
      <path d="M0 26 L18 14 L30 22 L44 12 L64 26 L64 36 L0 36 Z" fill="#4c7a5a" />
      <path d="M0 30 L64 28 L64 36 L0 36 Z" fill="#2f4a3a" />
    </svg>
  );
}

function Wheel({ label, dot }: { label: string; dot: [number, number] }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className="relative h-16 w-16 rounded-full ring-1 ring-white/20 sm:h-20 sm:w-20"
        style={{ background: "conic-gradient(from 90deg, #f87171, #fbbf24, #a3e635, #22d3ee, #818cf8, #f472b6, #f87171)" }}
      >
        <span className="absolute inset-[3px] rounded-full bg-[radial-gradient(circle,#2a2630_0%,#2a2630cc_55%,transparent_100%)]" />
        <span className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow" style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }} />
      </span>
      <span className="font-mono text-[11px] text-white/60">{label}</span>
    </div>
  );
}

/** Nó de correção (entrada verde à esquerda, saída à direita). */
function NodeShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-lg bg-[#2d2933] ring-1 ring-white/12 ${className}`}>
      <span className="absolute -left-[5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-[#34d399] lg:block" />
      <span className="absolute -right-[5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 bg-[#34d399] lg:block" />
      {children}
    </div>
  );
}

export function DavinciAudience({ course, tema, theme }: AudienceProps) {
  const total = course.targetAudience.length;
  return (
    <section className={`overflow-hidden bg-[#efeaee] py-20 dark:bg-[#0f0d12] ${DOTS_LIGHT}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="01" label="Para quem é" video>
          <AudienceTitle video />
        </SectionHead>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-xl bg-[#1c1a20] text-white shadow-[0_40px_90px_-40px_rgba(31,26,36,0.8)] ring-1 ring-black/10 dark:ring-white/10">
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#151318] px-4 py-2 font-mono text-[11px] text-white/50">
              <Palette className="h-3.5 w-3.5 text-(--accent-2)" />
              <span className="text-white/80">Cor</span>
              <span className="hidden sm:inline">· Linha do tempo 1 · V1 · Clipe 01</span>
              <span className="ml-auto">Rec.709 · 24 fps</span>
            </div>

            {/* Visor antes/depois + rodas */}
            <div className="grid gap-6 border-b border-white/10 p-5 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-md bg-[#f4eff3]">
                <PersonAtDesk theme={theme} tema={tema} renderScreen={davinciScreen(theme)} className="block w-full" />
                {/* Metade "antes" (log, lavado) */}
                <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                  <div className="h-full w-[200%] bg-[#e9e6ea]" style={{ filter: "saturate(0.15) contrast(0.7) brightness(1.08)" }}>
                    <PersonAtDesk theme={theme} tema={tema} renderScreen={davinciScreen(theme)} className="block w-full" />
                  </div>
                </div>
                <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]">
                  <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1f1a24] shadow">
                    <ChevronLeft className="-mr-1 h-3.5 w-3.5" />
                    <ChevronRight className="-ml-1 h-3.5 w-3.5" />
                  </span>
                </span>
                <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[10px] text-white/85">Antes · log</span>
                <span className="absolute right-2 top-2 rounded bg-(--accent) px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">Depois · você</span>
              </div>
              <div className="rounded-lg bg-[#2a2630] p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/45">Rodas primárias</p>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  <Wheel label="Lift" dot={[42, 58]} />
                  <Wheel label="Gamma" dot={[55, 46]} />
                  <Wheel label="Gain" dot={[60, 40]} />
                  <Wheel label="Offset" dot={[48, 52]} />
                </div>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-white/45">Parade RGB</p>
                <div className="mt-2 grid grid-cols-3 gap-1.5" aria-hidden="true">
                  {["#f87171", "#4ade80", "#60a5fa"].map((c, k) => (
                    <span key={c} className="flex h-14 items-end gap-px overflow-hidden rounded-sm bg-black/40 px-1 pb-1">
                      {Array.from({ length: 22 }, (_, j) => (
                        <span
                          key={j}
                          className="flex-1 rounded-full"
                          style={{ background: c, opacity: 0.75, height: `${25 + Math.abs(Math.sin(j * 0.7 + k) * 55 + Math.sin(j * 0.23) * 15)}%` }}
                        />
                      ))}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Grafo de nós: correção paralela */}
            <div className="p-5 sm:p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/45">
                <Workflow className="h-3.5 w-3.5 text-(--accent)" /> Nós · correção paralela · {total} nós
              </p>
              <div className="mt-5 grid gap-4 lg:grid-cols-[110px_40px_1fr_40px_150px] lg:gap-0">
                {/* Entrada */}
                <div className="flex items-center">
                  <NodeShell className="w-full p-2.5">
                    <Frame style={{ filter: "saturate(0.15) contrast(0.7) brightness(1.08)" }} />
                    <p className="mt-1.5 font-mono text-[11px] text-white/70">Entrada</p>
                  </NodeShell>
                </div>
                {/* Barramento de saída da entrada */}
                <div className="relative hidden lg:block">
                  <span className="absolute left-0 right-1/2 top-1/2 h-0.5 bg-[#34d399]/70" />
                </div>
                {/* Nós em paralelo */}
                <div className="space-y-3">
                  {course.targetAudience.map((item, i) => {
                    const g = GRADES[i % GRADES.length];
                    return (
                      <Reveal key={item} delay={i * 70} className="relative">
                        {/* Pedaços do barramento vertical (esquerda e direita) */}
                        <span
                          className="absolute -left-5 hidden w-0.5 bg-[#34d399]/70 lg:block"
                          style={{ top: i === 0 ? "50%" : "-6px", bottom: i === total - 1 ? "50%" : "-6px" }}
                        />
                        <span className="absolute -left-5 top-1/2 hidden h-0.5 w-5 bg-[#34d399]/70 lg:block" />
                        <span
                          className="absolute -right-5 hidden w-0.5 bg-[#34d399]/70 lg:block"
                          style={{ top: i === 0 ? "50%" : "-6px", bottom: i === total - 1 ? "50%" : "-6px" }}
                        />
                        <span className="absolute -right-5 top-1/2 hidden h-0.5 w-5 bg-[#34d399]/70 lg:block" />
                        <NodeShell className="flex items-center gap-3 p-3">
                          <span className="flex shrink-0 flex-col items-center gap-1">
                            <Frame style={{ filter: g.filtro }} />
                            <span className="font-mono text-[10px] text-white/45">{pad(i + 1)}</span>
                          </span>
                          <span className="min-w-0">
                            <span className="block font-mono text-[10px] uppercase tracking-wider text-(--accent-2)">{g.nome}</span>
                            <span className="mt-0.5 block text-[15px] font-medium leading-snug text-white/90">{item}</span>
                          </span>
                        </NodeShell>
                      </Reveal>
                    );
                  })}
                </div>
                <div className="relative hidden lg:block">
                  <span className="absolute left-1/2 right-0 top-1/2 h-0.5 bg-[#34d399]/70" />
                </div>
                {/* Mixer + Saída */}
                <div className="flex flex-col justify-center gap-3">
                  <NodeShell className="p-2.5 text-center">
                    <p className="font-mono text-[11px] text-white/70">Mixer paralelo</p>
                  </NodeShell>
                  <NodeShell className="p-2.5">
                    <Frame style={{ filter: GRADES[0].filtro }} />
                    <p className="mt-1.5 font-mono text-[11px] font-bold text-(--accent-2)">Saída · você</p>
                  </NodeShell>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── 02 · CONTEÚDO: as páginas do Resolve como navegação ───────────────────────

type Pagina = { id: string; nome: string; icon: LucideIcon; chave: RegExp };

const PAGINAS: Pagina[] = [
  { id: "midia", nome: "Mídia", icon: FolderOpen, chave: /mídia|importa/ },
  { id: "corte", nome: "Corte", icon: Scissors, chave: /interface|primeiros cortes|corte/ },
  { id: "edicao", nome: "Edição", icon: Film, chave: /montagem|edição/ },
  { id: "fusion", nome: "Fusion", icon: Workflow, chave: /fusion|efeitos visuais/ },
  { id: "cor", nome: "Cor", icon: Palette, chave: /color|cor\b|grading/ },
  { id: "fairlight", nome: "Fairlight", icon: AudioLines, chave: /áudio|audio|fairlight/ },
  { id: "entrega", nome: "Entrega", icon: Rocket, chave: /export|entrega|deliver|projeto final/ },
];

/** Página de cada módulo: pela palavra-chave do título, senão a próxima livre. */
function paginasDosModulos(titulos: string[]): number[] {
  const usadas = new Set<number>();
  const res = titulos.map((t) => {
    const low = t.toLowerCase();
    const p = PAGINAS.findIndex((pg, k) => !usadas.has(k) && pg.chave.test(low));
    if (p >= 0) usadas.add(p);
    return p;
  });
  return res.map((p) => {
    if (p >= 0) return p;
    const livre = PAGINAS.findIndex((_, k) => !usadas.has(k));
    usadas.add(livre);
    return livre;
  });
}

/** Mini visual de cada página, ao lado do conteúdo. */
function PaginaVisual({ id }: { id: string }) {
  if (id === "cor") {
    return (
      <div className="grid grid-cols-3 gap-2">
        <Wheel label="Lift" dot={[40, 60]} />
        <Wheel label="Gamma" dot={[56, 44]} />
        <Wheel label="Gain" dot={[62, 38]} />
      </div>
    );
  }
  if (id === "fairlight") {
    return (
      <div className="flex h-36 items-end justify-center gap-3">
        {[0.55, 0.8, 0.4, 0.7, 0.62, 0.35].map((v, i) => (
          <span key={i} className="relative h-full w-4 overflow-hidden rounded-sm bg-white/10">
            <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,#34d399_0%,#34d399_60%,#fbbf24_80%,#f87171_100%)]" style={{ height: `${v * 100}%` }} />
          </span>
        ))}
      </div>
    );
  }
  if (id === "fusion") {
    const nos = ["MediaIn", "Text+", "Merge", "MediaOut"];
    return (
      <div className="flex flex-col items-center gap-2">
        {nos.map((n, i) => (
          <div key={n} className="flex flex-col items-center">
            <span className={`rounded-md px-3 py-1 font-mono text-[11px] ${i === 1 ? "bg-(--accent) text-white" : "bg-white/10 text-white/75"}`}>{n}</span>
            {i < nos.length - 1 && <span className="h-3 w-0.5 bg-white/30" />}
          </div>
        ))}
      </div>
    );
  }
  if (id === "entrega") {
    return (
      <div className="space-y-2">
        {["YouTube · H.264", "Vimeo · H.265", "Master · ProRes"].map((j, i) => (
          <div key={j} className="rounded-md bg-white/[0.06] p-2.5">
            <p className="flex justify-between font-mono text-[11px] text-white/75">
              <span>Job {i + 1}</span>
              <span className="text-white/45">{j}</span>
            </p>
            <span className="mt-1.5 block h-1.5 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full rounded-full bg-(--accent-2)" style={{ width: `${[100, 72, 30][i]}%` }} />
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (id === "corte") {
    // Página Corte: bin de clipes + linha do tempo dupla (visão geral e detalhe)
    return (
      <div>
        <div className="grid grid-cols-3 gap-1.5">
          {GRADES.concat(GRADES[0]).map((g, i) => (
            <Frame key={i} style={{ filter: g.filtro, width: "100%", height: "auto" }} />
          ))}
        </div>
        <div className="mt-4 flex h-3 gap-px">
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} className="flex-1 rounded-[2px]" style={{ background: [VIOLET, CYAN, "var(--accent)"][i % 3], opacity: 0.55 }} />
          ))}
        </div>
        <div className="relative mt-1.5 flex h-8 gap-0.5">
          {[0.3, 0.15, 0.4, 0.15].map((f, k) => (
            <span key={k} className="rounded-sm" style={{ flex: f, background: k % 2 ? "var(--accent)" : VIOLET }} />
          ))}
          <span className="absolute -top-6 bottom-0 left-[38%] w-0.5 bg-(--accent-2)" />
        </div>
        <p className="mt-2 text-right font-mono text-[10px] text-white/40">Linha do tempo dupla</p>
      </div>
    );
  }
  // Mídia e Edição: trilhas rotuladas
  const trilhas: [string, number[], string][] = [
    ["V2", [0.2, 0.25, 0.55], "var(--accent-2)"],
    ["V1", [0.25, 0.35, 0.2, 0.2], VIOLET],
    ["A1", [0.6, 0.4], GREEN],
    ["A2", [1], CYAN],
  ];
  return (
    <div className="relative space-y-1.5">
      {trilhas.map(([nome, partes, cor]) => (
        <div key={nome} className="flex items-center gap-2">
          <span className="w-6 font-mono text-[10px] text-white/45">{nome}</span>
          <div className="flex h-7 flex-1 gap-0.5">
            {partes.map((f, k) => (
              <span key={k} className="rounded-sm" style={{ flex: f, background: nome === "V1" && k % 2 ? "var(--accent)" : cor, opacity: k === 0 && nome === "V2" ? 0 : 0.85 }} />
            ))}
          </div>
        </div>
      ))}
      <span className="absolute -top-1 bottom-0 left-[55%] w-0.5 bg-white" />
    </div>
  );
}

export function DavinciContent({ course, logo, selectedTier, onSelectTier }: ContentProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const total = tier.modules.length;
  const [sel, setSel] = useState(0);
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const paginas = paginasDosModulos(tier.modules.map((mod) => mod.title));
  const pg = PAGINAS[paginas[atual]];

  return (
    <section id="conteudo" className="scroll-mt-4 bg-(--hero-bg) py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" video dark>
          O que você vai <Picked video>aprender</Picked>
        </SectionHead>
        <TierTabs
          course={course}
          selectedTier={selectedTier}
          onSelect={(i) => {
            onSelectTier(i);
            setSel(0);
          }}
          label="Projeto"
          dark
        />

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1c1a20] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#151318] px-4 py-2 font-mono text-[11px] text-white/50">
              <span className="text-white/80">DaVinci Resolve</span>
              <span className="hidden sm:inline">· Projeto: {tier.levelName}</span>
              <span className="ml-auto">
                Módulo {pad(atual + 1)}/{pad(total)}
              </span>
            </div>

            {/* Página atual */}
            <div className="grid min-h-[380px] lg:grid-cols-[1fr_300px]">
              <div key={atual} className="p-6 sm:p-8">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-(--accent-2)">
                  <pg.icon className="h-4 w-4" /> Página {pg.nome}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight sm:text-3xl">{m.title}</h3>
                <ul className="mt-6 space-y-3">
                  {m.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/80">
                      <span className="mt-[9px] h-1.5 w-3 shrink-0 rounded-full bg-(--accent)" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center border-t border-white/10 bg-[#232027] p-6 lg:border-l lg:border-t-0" aria-hidden="true">
                <PaginaVisual id={pg.id} />
              </div>
            </div>

            {/* Barra de páginas (navegação) */}
            <nav className="grid grid-cols-4 border-t border-white/10 bg-[#151318] sm:grid-cols-7" aria-label="Módulos por página do DaVinci Resolve">
              {PAGINAS.map((p, k) => {
                const mod = paginas.indexOf(k);
                const on = mod === atual;
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    type="button"
                    disabled={mod < 0}
                    onClick={() => setSel(mod)}
                    className={`relative flex flex-col items-center gap-1 px-1 py-3 text-xs font-semibold transition ${
                      on ? "text-(--accent-2)" : mod < 0 ? "cursor-default text-white/20" : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {p.nome}
                    {mod >= 0 && (
                      <span className={`font-mono text-[10px] ${on ? "text-(--accent-2)" : "text-white/40"}`}>Módulo {pad(mod + 1)}</span>
                    )}
                    {on && <span className="absolute inset-x-3 top-0 h-0.5 rounded-full bg-(--accent-2)" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </Reveal>

        {/* Módulo anterior/próximo */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setSel(Math.max(0, atual - 1))}
            disabled={atual === 0}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-bold text-white/75 transition hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> Anterior
          </button>
          <span className="font-mono text-[11px] text-white/45">{meta?.aulas ?? tier.totalHours} · ordem das aulas</span>
          <button
            type="button"
            onClick={() => setSel(Math.min(total - 1, atual + 1))}
            disabled={atual === total - 1}
            className="inline-flex items-center gap-1.5 rounded-full bg-(--accent) px-4 py-2 text-xs font-bold text-white transition hover:bg-(--accent-hover) disabled:opacity-30"
          >
            Próximo <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Fila de render = resultado */}
        <Reveal delay={150} className="mt-8">
          <div className="grid gap-6 rounded-xl bg-white p-6 text-[#1f1a24] sm:p-8 md:grid-cols-[auto_1fr] md:items-center dark:bg-white/[0.05] dark:text-white dark:ring-1 dark:ring-white/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-(--hero-bg) p-1.5">
              <StudioLogo name={logo} className="h-full w-full" />
            </div>
            <div>
              <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent)">
                <Rocket className="h-3.5 w-3.5" /> Fila de render · ao concluir você vai
              </p>
              <p className="mt-2 text-lg font-semibold leading-relaxed">{tier.outcome}</p>
              <span className="mt-4 block h-2 overflow-hidden rounded-full bg-[#f1ecf0] dark:bg-white/10">
                <span className="block h-full w-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" />
              </span>
              {tier.tools.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tier.tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center gap-1.5 rounded-full bg-[#f1ecf0] px-3 py-1 text-xs font-semibold text-[#4a4250] dark:bg-white/10 dark:text-white/80">
                      <Palette className="h-3 w-3 text-(--accent)" />
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
