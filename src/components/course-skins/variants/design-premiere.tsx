import { useEffect, useState, type ReactNode } from "react";
import { AudienceTitle, Picked, SectionHead, TierTabs } from "@/components/course-skins/variants/design-ui";
import { ChevronRight, Download, Film, FolderPlus, LayoutGrid, List, Pause, Play, Search, SkipBack, SkipForward, Trash2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta } from "@/components/course-skins/shared";
import { StudioLogo } from "@/components/course-skins/scenes/design-kit";
import { CYAN, DOTS_LIGHT, GREEN, VIOLET, pad, type AudienceProps, type ContentProps } from "@/components/course-skins/variants/design-tokens";

/**
 * Adobe Premiere: o padrão de agência, organizado em bins e montado em timeline.
 * - Para quem é: o painel Projeto em modo ícone, onde cada público é um bin (pasta
 *   de mídia) com rótulo de cor, ao lado do monitor de Origem com você em cena.
 * - Conteúdo: a timeline multitrilha (V2 títulos, V1 um clipe por módulo, A1/A2),
 *   com monitor de programa, inspetor e reprodução.
 */

// ── Tela do monitor (SVG 400×320): monitor + timeline ─────────────────────────

function premiereScreen(theme: CourseTheme) {
  return function screen({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
    const rows = [
      [0.05, 0.4, 0.42, 0.8],
      [0.2, 0.55, 0.6, 0.95],
      [0.05, 0.95],
    ];
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill="#141217" />
        <rect x={x + w * 0.2} y={y + 6} width={w * 0.6} height={h * 0.42} rx="2" fill={VIOLET} fillOpacity="0.55" />
        <circle cx={x + w * 0.5} cy={y + 6 + h * 0.21} r="6" fill="#fff" fillOpacity="0.85" />
        <path d={`M${x + w * 0.5 - 2} ${y + 6 + h * 0.21 - 3.5} l6 3.5 l-6 3.5 z`} fill={VIOLET} />
        {rows.map((r, ri) =>
          Array.from({ length: r.length / 2 }, (_, k) => (
            <rect
              key={`${ri}-${k}`}
              x={x + w * r[k * 2]}
              y={y + h * 0.6 + ri * 9}
              width={w * (r[k * 2 + 1] - r[k * 2])}
              height="6"
              rx="1.5"
              fill={ri === 2 ? GREEN : k % 2 ? theme.accent : VIOLET}
              fillOpacity={ri === 2 ? 0.6 : 0.9}
            />
          )),
        )}
        <rect x={x + w * 0.46} y={y + h * 0.56} width="1.6" height={h * 0.42} fill={theme.accent2} />
      </g>
    );
  };
}

// ── 01 · PARA QUEM É: painel Projeto com bins ─────────────────────────────────

/** Rótulos de cor do Premiere (nome + cor). */
const ROTULOS: [string, string][] = [
  ["Violeta", VIOLET],
  ["Magenta", "#DB2777"],
  ["Manga", "#FBBF24"],
  ["Caribe", CYAN],
  ["Floresta", GREEN],
];

/** Pasta (bin) com aba, no modo ícone. */
function Bin({ cor, children }: { cor: string; children: ReactNode }) {
  return (
    <div className="relative pt-3">
      <span className="absolute left-0 top-0 h-4 w-[38%] rounded-t-lg" style={{ background: cor }} />
      <div className="relative h-full rounded-b-xl rounded-tr-xl p-4 pt-5 text-[#1f1a24]" style={{ background: cor }}>
        <span className="absolute inset-x-0 top-0 h-2 rounded-tr-xl bg-white/25" />
        {children}
      </div>
    </div>
  );
}

export function PremiereAudience({ course, tema, theme }: AudienceProps) {
  const total = course.targetAudience.length;
  return (
    <section className={`sb-bleed overflow-hidden bg-[#efeaee] py-20 dark:bg-[#0f0d12] ${DOTS_LIGHT}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="01" label="Para quem é" video>
          <AudienceTitle video />
        </SectionHead>

        <Reveal delay={100} className="mt-10">
          <div className="grid overflow-hidden rounded-xl bg-[#1c1a20] text-white shadow-[0_40px_90px_-40px_rgba(31,26,36,0.8)] ring-1 ring-black/10 lg:grid-cols-[1fr_380px] dark:ring-white/10">
            {/* Painel Projeto */}
            <div className="min-w-0 border-b border-white/10 lg:border-b-0 lg:border-r">
              <div className="flex gap-5 border-b border-white/10 bg-[#151318] px-4 pt-2.5 text-xs">
                <span className="border-b-2 border-(--accent) pb-2 font-bold text-white">Projeto: voce.prproj</span>
                <span className="hidden pb-2 text-white/40 sm:inline">Navegador de mídia</span>
                <span className="hidden pb-2 text-white/40 md:inline">Bibliotecas</span>
              </div>
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
                <span className="flex min-w-0 items-center gap-1 font-mono text-[11px] text-white/60">
                  voce.prproj <ChevronRight className="h-3 w-3" /> <span className="text-white/85">Público</span>
                </span>
                <span className="ml-auto flex items-center gap-2 rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/45">
                  <Search className="h-3 w-3" /> <span className="hidden sm:inline">Pesquisar</span>
                </span>
                <span className="shrink-0 font-mono text-[11px] text-white/45">{total} itens</span>
              </div>

              <div className="grid items-start gap-x-4 gap-y-5 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-3">
                {course.targetAudience.map((item, i) => {
                  const [rotulo, cor] = ROTULOS[i % ROTULOS.length];
                  return (
                    <Reveal key={item} delay={i * 70}>
                      <Bin cor={cor}>
                        <p className="text-[15px] font-bold leading-snug">{item}</p>
                        <p className="mt-3 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider text-[#1f1a24]/60">
                          <span>Bin {pad(i + 1)}</span>
                          <span>{rotulo}</span>
                        </p>
                      </Bin>
                    </Reveal>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 px-4 py-2 text-white/45" aria-hidden="true">
                <List className="h-4 w-4" />
                <LayoutGrid className="h-4 w-4 text-(--accent-2)" />
                <span className="relative h-1 w-20 rounded-full bg-white/15">
                  <span className="absolute -top-1 left-[60%] h-3 w-3 rounded-full bg-white/70" />
                </span>
                <span className="ml-auto flex items-center gap-3">
                  <FolderPlus className="h-4 w-4" />
                  <Trash2 className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* Monitor de Origem */}
            <div className="flex flex-col">
              <div className="border-b border-white/10 bg-[#151318] px-4 py-2.5 font-mono text-[11px] text-white/60">
                Origem: <span className="text-white/85">voce_na_ilha.mp4</span>
              </div>
              <div className="flex flex-1 items-center bg-black/40 p-4">
                <div className="w-full overflow-hidden rounded-sm bg-[#f4eff3]">
                  <PersonAtDesk theme={theme} tema={tema} renderScreen={premiereScreen(theme)} className="block w-full" />
                </div>
              </div>
              <div className="border-t border-white/10 px-4 py-3">
                <div className="relative h-1.5 rounded-full bg-white/10">
                  <span className="absolute inset-y-0 left-[18%] right-[30%] rounded-full bg-(--accent)/60" />
                  <span className="absolute -top-1 left-[40%] h-3.5 w-0.5 bg-(--accent-2)" />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-(--accent-2)">00:00:04:12</span>
                  <span className="flex items-center gap-2 text-white/70" aria-hidden="true">
                    <SkipBack className="h-3.5 w-3.5" />
                    <Play className="h-4 w-4 fill-current" />
                    <SkipForward className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-white/45">Entrada · Saída</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── 02 · CONTEÚDO: timeline multitrilha ───────────────────────────────────────

export function PremiereContent({ course, logo, selectedTier, onSelectTier }: ContentProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const total = tier.modules.length;
  const [clip, setClip] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atual = Math.min(clip, total - 1);
  const m = tier.modules[atual];

  // Reprodução: avança um clipe a cada 4s e para no último.
  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => {
      if (atual >= total - 1) setPlaying(false);
      else setClip(atual + 1);
    }, 4000);
    return () => window.clearTimeout(t);
  }, [playing, atual, total]);

  const pesos = tier.modules.map((mod) => mod.topics.length);
  const soma = pesos.reduce((a, b) => a + b, 0);
  const inicio = pesos.map((_, i) => (pesos.slice(0, i).reduce((a, b) => a + b, 0) / soma) * 100);
  const agulha = inicio[atual] + (pesos[atual] / soma) * 50;
  const aulasNum = parseInt(meta?.aulas ?? tier.totalHours) || soma;
  const tc = (pct: number) => {
    const h = Math.round((pct / 100) * aulasNum);
    return `${pad(h)}:00:00`;
  };

  const select = (i: number) => {
    setPlaying(false);
    setClip(i);
  };

  return (
    <section id="conteudo" className="sb-bleed scroll-mt-4 bg-(--hero-bg) py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" video dark>
          O que você vai <Picked video>aprender</Picked>
        </SectionHead>
        <TierTabs
          course={course}
          selectedTier={selectedTier}
          onSelect={(i) => {
            onSelectTier(i);
            select(0);
          }}
          label="Sequência"
          dark
        />

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0e0c11] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
            <div className="grid lg:grid-cols-[1fr_260px]">
              {/* Monitor de programa */}
              <div className="relative min-h-[320px] border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <span className="pointer-events-none absolute inset-3 rounded border border-dashed border-white/10" />
                <p className="relative flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px]">
                  <span className="rounded bg-(--accent) px-1.5 py-0.5 font-bold text-white">
                    CLIPE {pad(atual + 1)}/{pad(total)}
                  </span>
                  <span className="text-(--accent-2)">{tc(inicio[atual])}</span>
                  <span className="text-white/35">Programa</span>
                </p>
                <h3 key={m.title} className="relative mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                  {m.title}
                </h3>
                <ul className="relative mt-5 grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                  {m.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/80">
                      <Play className="mt-[6px] h-2.5 w-2.5 shrink-0 fill-(--accent) text-(--accent)" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inspetor */}
              <div className="flex flex-col p-5 font-mono text-[11px] sm:p-6">
                <p className="font-bold uppercase tracking-[0.2em] text-white/40">Controles de efeito</p>
                <dl className="mt-4 space-y-2.5">
                  {[
                    ["Clipe", `${pad(atual + 1)} de ${pad(total)}`],
                    ["Tópicos", String(m.topics.length)],
                    ["Sequência", tier.levelName],
                    ["Duração total", meta?.aulas ?? tier.totalHours],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3 border-b border-white/5 pb-2">
                      <dt className="text-white/40">{k}</dt>
                      <dd className="truncate text-right text-white/85">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex items-center justify-center gap-2 lg:mt-auto">
                  <button
                    type="button"
                    aria-label="Módulo anterior"
                    onClick={() => select(Math.max(0, atual - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/70 transition hover:bg-white/10 disabled:opacity-30"
                    disabled={atual === 0}
                  >
                    <SkipBack className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={playing ? "Pausar" : "Reproduzir módulos"}
                    onClick={() => {
                      if (!playing && atual >= total - 1) setClip(0);
                      setPlaying(!playing);
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-(--accent) text-white shadow-[0_10px_24px_-8px_var(--accent)] transition hover:bg-(--accent-hover)"
                  >
                    {playing ? <Pause className="h-4 w-4 fill-current" /> : <Play className="ml-0.5 h-4 w-4 fill-current" />}
                  </button>
                  <button
                    type="button"
                    aria-label="Próximo módulo"
                    onClick={() => select(Math.min(total - 1, atual + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/70 transition hover:bg-white/10 disabled:opacity-30"
                    disabled={atual === total - 1}
                  >
                    <SkipForward className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Timeline multitrilha */}
            <div className="border-t border-white/10 px-3 pb-4 pt-2 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="w-6 shrink-0" />
                <div className="relative h-5 flex-1">
                  {inicio.map((p, i) => (
                    <span key={i} className="absolute top-0 font-mono text-[10px] text-white/40" style={{ left: `${p}%` }}>
                      <span className="block h-1.5 w-px bg-white/25" />
                      <span className="hidden sm:inline">{tc(p)}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative space-y-1.5">
                {/* V2: títulos (Essential Graphics) */}
                <div className="flex items-center gap-2">
                  <span className="w-6 shrink-0 font-mono text-[10px] text-white/40">V2</span>
                  <div className="relative flex h-5 flex-1">
                    {inicio.map((p, i) => (
                      <span
                        key={i}
                        className="absolute inset-y-0 rounded-[4px] bg-(--accent-2)/80"
                        style={{ left: `${p + 0.4}%`, width: `${(pesos[i] / soma) * 38}%` }}
                      />
                    ))}
                  </div>
                </div>
                {/* V1: um clipe por módulo */}
                <div className="flex items-center gap-2">
                  <span className="w-6 shrink-0 font-mono text-[10px] text-white/40">V1</span>
                  <div className="flex min-w-0 flex-1 gap-[3px]">
                    {tier.modules.map((mod, i) => {
                      const on = i === atual;
                      return (
                        <button
                          key={mod.title}
                          type="button"
                          onClick={() => select(i)}
                          title={mod.title}
                          className={`min-w-0 overflow-hidden rounded-md px-2 py-2 text-left transition ${
                            on ? "ring-2 ring-white" : "opacity-75 hover:opacity-100"
                          }`}
                          style={{ flex: pesos[i], background: on ? "var(--accent)" : i % 2 ? VIOLET : "#5b4bd6" }}
                        >
                          <span className="block font-mono text-[10px] font-bold text-white/85">{pad(i + 1)}</span>
                          <span className="hidden truncate text-[12px] font-semibold text-white sm:block">{mod.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* A1: voz */}
                <div className="flex items-center gap-2">
                  <span className="w-6 shrink-0 font-mono text-[10px] text-white/40">A1</span>
                  <div className="flex h-7 flex-1 items-center gap-[2px] overflow-hidden rounded-md bg-[#34d399]/10 px-1 ring-1 ring-[#34d399]/40">
                    {Array.from({ length: 90 }, (_, i) => {
                      const v = 0.2 + Math.abs(Math.sin(i * 0.8) * 0.55 + Math.sin(i * 0.31) * 0.35);
                      return <span key={i} className="flex-1 rounded-full bg-[#34d399]/70" style={{ height: `${Math.min(1, v) * 100}%` }} />;
                    })}
                  </div>
                </div>
                {/* A2: trilha sonora */}
                <div className="flex items-center gap-2">
                  <span className="w-6 shrink-0 font-mono text-[10px] text-white/40">A2</span>
                  <div className="h-4 flex-1 rounded-md bg-[#22d3ee]/15 ring-1 ring-[#22d3ee]/40">
                    <span className="block h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(34,211,238,0.35)_12%,rgba(34,211,238,0.35)_88%,transparent_100%)]" />
                  </div>
                </div>
                {/* Agulha */}
                <span
                  className="pointer-events-none absolute -top-2 bottom-0 w-0.5 bg-(--accent-2) transition-[left] duration-500"
                  style={{ left: `calc(2rem + (100% - 2rem) * ${agulha / 100})` }}
                >
                  <span className="absolute -left-[5px] -top-1 h-2.5 w-3 rounded-sm bg-(--accent-2)" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Fila do Media Encoder = resultado */}
        <Reveal delay={150} className="mt-6">
          <div className="grid gap-6 rounded-xl bg-white p-6 text-[#1f1a24] sm:p-8 md:grid-cols-[auto_1fr] md:items-center dark:bg-white/[0.05] dark:text-white dark:ring-1 dark:ring-white/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-(--hero-bg) p-1.5">
              <StudioLogo name={logo} className="h-full w-full" />
            </div>
            <div>
              <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent)">
                <Download className="h-3.5 w-3.5" /> Exportar sequência · ao concluir você vai
              </p>
              <p className="mt-2 text-lg font-semibold leading-relaxed">{tier.outcome}</p>
              {tier.tools.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tier.tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center gap-1.5 rounded-full bg-[#f1ecf0] px-3 py-1 text-xs font-semibold text-[#4a4250] dark:bg-white/10 dark:text-white/80">
                      <Film className="h-3 w-3 text-(--accent)" />
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

