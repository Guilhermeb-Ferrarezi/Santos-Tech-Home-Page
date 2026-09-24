import { useState } from "react";
import { AudienceTitle, Picked, SectionHead, TierTabs } from "@/components/course-skins/variants/design-ui";
import { Bookmark, Captions, Globe, Heart, MessageCircle, Monitor, Music, Play, Scissors, Send, SlidersHorizontal, Smartphone, Sparkles, Type, Upload, X, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta } from "@/components/course-skins/shared";
import { StudioLogo } from "@/components/course-skins/scenes/design-kit";
import { CYAN, DOTS_LIGHT, GREEN, VIOLET, pad, type AudienceProps, type ContentProps } from "@/components/course-skins/variants/design-tokens";

/**
 * CapCut: vertical, no celular.
 * - Para quem é: uma sequência de stories/reels em telas de celular (9:16), com a
 *   barra de progresso de story e a legenda no estilo "viral" do CapCut.
 * - Conteúdo: a edição no celular. O aparelho mostra a prévia do módulo e, ao lado,
 *   cada módulo é uma trilha (vídeo, texto, efeitos, áudio) com os tópicos como clipes.
 */

// ── Tela do monitor (SVG 400×320): CapCut PC com prévia vertical ──────────────

function capcutScreen(theme: CourseTheme) {
  return function screen({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
    const pw = h * 0.36;
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill="#0f0e12" />
        {/* Prévia 9:16 */}
        <rect x={x + w / 2 - pw / 2} y={y + 4} width={pw} height={h * 0.62} rx="2" fill={theme.accent} />
        <circle cx={x + w / 2 + pw * 0.2} cy={y + 14} r="6" fill={theme.accent2} />
        <rect x={x + w / 2 - pw * 0.38} y={y + h * 0.46} width={pw * 0.76} height="5" rx="1" fill="#fff" />
        <rect x={x + w / 2 - pw * 0.26} y={y + h * 0.46 + 7} width={pw * 0.52} height="5" rx="1" fill={theme.accent2} />
        {/* Trilhas */}
        {[
          { c: CYAN, s: 0.06, e: 0.9 },
          { c: theme.accent2, s: 0.22, e: 0.62 },
          { c: GREEN, s: 0.06, e: 0.96 },
        ].map((t, i) => (
          <rect key={i} x={x + w * t.s} y={y + h * 0.7 + i * 8} width={w * (t.e - t.s)} height="5.5" rx="1.5" fill={t.c} fillOpacity="0.85" />
        ))}
        <rect x={x + w * 0.5} y={y + h * 0.67} width="1.5" height={h * 0.31} fill="#fff" />
      </g>
    );
  };
}

// ── 01 · PARA QUEM É: stories em sequência ────────────────────────────────────

const FUNDOS = [
  "linear-gradient(170deg, var(--accent) 0%, #5b21b6 100%)",
  "linear-gradient(170deg, #0f766e 0%, #1f1a24 100%)",
  "linear-gradient(170deg, var(--accent-2) 0%, #db2777 100%)",
  "linear-gradient(170deg, #1f1a24 0%, #3b1d33 100%)",
  "linear-gradient(170deg, #8b7cf6 0%, #0e7490 100%)",
];

/** Legenda estilo CapCut: palavras brancas com contorno e uma palavra destacada. */
function LegendaViral({ texto, destaque }: { texto: string; destaque: number }) {
  const palavras = texto.split(" ");
  const alvo = Math.min(destaque, palavras.length - 1);
  return (
    <p className="text-[15px] font-black leading-[1.35] text-white [text-shadow:0_2px_0_#000,0_0_6px_rgba(0,0,0,0.6)]">
      {palavras.map((p, i) => (
        <span key={i}>
          {i === alvo ? (
            <span className="rounded bg-(--accent-2) px-1 text-[#1f1a24] [text-shadow:none]">{p}</span>
          ) : (
            p
          )}{" "}
        </span>
      ))}
    </p>
  );
}

export function CapcutAudience({ course, tema, theme }: AudienceProps) {
  const total = course.targetAudience.length;
  return (
    <section className={`sb-bleed overflow-hidden bg-[#efeaee] py-20 dark:bg-[#0f0d12] ${DOTS_LIGHT}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <SectionHead n="01" label="Para quem é" video>
            <AudienceTitle video />
          </SectionHead>
          <Reveal delay={120}>
            <PersonAtDesk theme={theme} tema={tema} renderScreen={capcutScreen(theme)} className="mx-auto w-full max-w-[340px]" />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mt-10 flex items-center gap-2 font-mono text-[11px] text-[#766c7d] dark:text-white/45">
            <Smartphone className="h-3.5 w-3.5 text-(--accent)" /> Sequência de stories · 9:16 · toque para avançar
          </p>
        </Reveal>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {course.targetAudience.map((item, i) => (
            <Reveal key={item} delay={i * 80} as="figure" className={i === total - 1 && total % 2 === 1 ? "col-span-2 mx-auto w-1/2 sm:col-span-1 sm:w-auto" : ""}>
              {/* Aparelho */}
              <div className="rounded-[1.6rem] bg-[#0b0a0d] p-1.5 shadow-[0_24px_50px_-26px_rgba(31,26,36,0.9)] ring-1 ring-black/20 dark:ring-white/10">
                <div
                  className="relative flex aspect-[9/16] flex-col overflow-hidden rounded-[1.25rem] px-3 pb-4 pt-3 text-white"
                  style={{ background: FUNDOS[i % FUNDOS.length] }}
                >
                  {/* Progresso do story */}
                  <div className="flex gap-1">
                    {Array.from({ length: total }, (_, k) => (
                      <span key={k} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
                        <span className="block h-full bg-white" style={{ width: k < i ? "100%" : k === i ? "55%" : "0%" }} />
                      </span>
                    ))}
                  </div>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-serif text-sm italic text-(--accent) ring-2 ring-(--accent-2)">
                      v
                    </span>
                    <span className="text-[11px] font-bold">você</span>
                    <span className="text-[11px] text-white/60">· {pad(i + 1)}</span>
                  </div>

                  {/* Ações laterais */}
                  <div className="absolute bottom-24 right-2 flex flex-col items-center gap-3 text-white/90" aria-hidden="true">
                    <Heart className="h-5 w-5" />
                    <MessageCircle className="h-5 w-5" />
                    <Send className="h-5 w-5" />
                    <Bookmark className="h-5 w-5" />
                  </div>

                  <div className="mt-auto pr-7">
                    <LegendaViral texto={item} destaque={2 + (i % 3)} />
                  </div>
                </div>
              </div>
              <figcaption className="mt-2 text-center font-mono text-[11px] text-[#766c7d] dark:text-white/45">
                Story {i + 1}/{total} · 0:0{(i % 5) + 3}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 02 · CONTEÚDO: celular com a edição + trilhas por módulo ──────────────────

type Trilha = { nome: string; icon: LucideIcon; cor: string };

/** Tipo de trilha de cada módulo, pelo título. */
function trilhaDoModulo(title: string, i: number): Trilha {
  const t = title.toLowerCase();
  if (/legenda|texto|gráfico/.test(t)) return { nome: "Texto", icon: Type, cor: "#FBBF24" };
  if (/cor|imagem|ajuste|filtro/.test(t)) return { nome: "Efeitos", icon: Sparkles, cor: VIOLET };
  if (/áudio|audio|som|trilha/.test(t)) return { nome: "Áudio", icon: Music, cor: GREEN };
  if (/projeto/.test(t)) return { nome: "Projeto", icon: Upload, cor: "#DB2777" };
  return i === 0 ? { nome: "Vídeo", icon: Scissors, cor: CYAN } : { nome: "Sobreposição", icon: Sparkles, cor: CYAN };
}

/** Barra inferior do editor no celular. */
const BARRA: { label: string; icon: LucideIcon }[] = [
  { label: "Editar", icon: Scissors },
  { label: "Áudio", icon: Music },
  { label: "Texto", icon: Type },
  { label: "Efeitos", icon: Sparkles },
  { label: "Legendas", icon: Captions },
  { label: "Ajustar", icon: SlidersHorizontal },
];

function barraAtiva(trilha: Trilha) {
  if (trilha.nome === "Texto") return "Texto";
  if (trilha.nome === "Efeitos") return "Efeitos";
  if (trilha.nome === "Áudio") return "Áudio";
  if (trilha.nome === "Projeto") return "Legendas";
  return "Editar";
}

export function CapcutContent({ course, logo, selectedTier, onSelectTier }: ContentProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const total = tier.modules.length;
  const [sel, setSel] = useState(0);
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const trilhas = tier.modules.map((mod, i) => trilhaDoModulo(mod.title, i));
  const t = trilhas[atual];

  return (
    <section id="conteudo" className="sb-bleed scroll-mt-4 bg-white py-20 dark:bg-[#141117]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" video>
          O que você vai <Picked video>editar</Picked>
        </SectionHead>
        <TierTabs
          course={course}
          selectedTier={selectedTier}
          onSelect={(i) => {
            onSelectTier(i);
            setSel(0);
          }}
          label="Projeto"
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[300px_1fr] xl:gap-14">
          {/* Celular com o editor */}
          <Reveal className="mx-auto w-full max-w-[300px] lg:sticky lg:top-6">
            <div className="rounded-[2.4rem] bg-[#0b0a0d] p-2.5 shadow-[0_40px_80px_-40px_rgba(31,26,36,0.9)] ring-1 ring-black/10 dark:ring-white/15">
              <div className="overflow-hidden rounded-[1.9rem] bg-[#141217] text-white">
                <div className="flex items-center justify-between px-4 pb-2 pt-3">
                  <X className="h-4 w-4 text-white/70" />
                  <span className="font-mono text-[11px] text-white/60">1080P ▾</span>
                  <span className="rounded-full bg-(--accent) px-3 py-1 text-[11px] font-black">Exportar</span>
                </div>
                {/* Prévia */}
                <div className="mx-auto w-[62%]">
                  <div
                    key={atual}
                    className="relative flex aspect-[9/16] flex-col justify-end overflow-hidden rounded-md p-3"
                    style={{ background: FUNDOS[atual % FUNDOS.length] }}
                  >
                    <span className="absolute left-2 top-2 rounded bg-black/40 px-1.5 py-0.5 font-mono text-[10px]">
                      {pad(atual + 1)}/{pad(total)}
                    </span>
                    <span className="absolute -right-5 top-8 h-16 w-16 rounded-full bg-(--accent-2)/80" />
                    <span className="absolute left-3 top-24 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-black text-[#1f1a24] shadow">
                      Módulo {atual + 1}
                    </span>
                    <span className="relative">
                      <LegendaViral texto={m.title} destaque={0} />
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-3 font-mono text-[11px] text-white/60">
                  <span>00:{pad(atual * 6)}</span>
                  <Play className="h-4 w-4 fill-white text-white" />
                  <span>00:{pad(total * 6)}</span>
                </div>
                {/* Mini linha do tempo */}
                <div className="relative mt-2 space-y-1 px-3">
                  <div className="flex h-5 gap-0.5">
                    {trilhas.map((tr, i) => (
                      <span key={i} className={`flex-1 rounded-sm ${i === atual ? "ring-2 ring-white" : ""}`} style={{ background: tr.cor, opacity: i === atual ? 1 : 0.55 }} />
                    ))}
                  </div>
                  <div className="ml-[18%] h-2.5 w-[46%] rounded-sm bg-(--accent-2)/80" />
                  <div className="h-2.5 rounded-sm bg-[#34d399]/60" />
                  <span className="absolute -top-1 bottom-0 w-0.5 bg-white transition-[left] duration-500" style={{ left: `calc(12px + (100% - 24px) * ${(atual + 0.5) / total})` }} />
                </div>
                {/* Barra de ferramentas */}
                <div className="mt-3 grid grid-cols-6 border-t border-white/10 px-1 py-2.5">
                  {BARRA.map(({ label, icon: Icon }) => {
                    const on = label === barraAtiva(t);
                    return (
                      <span key={label} className={`flex flex-col items-center gap-1 text-[10px] ${on ? "text-(--accent-2)" : "text-white/55"}`} aria-hidden="true">
                        <Icon className="h-4 w-4" />
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Trilhas: uma por módulo, tópicos como clipes */}
          <div className="min-w-0">
            <Reveal>
              <p className="flex items-center justify-between gap-3 font-mono text-[11px] text-[#766c7d] dark:text-white/45">
                <span>
                  Linha do tempo · {total} trilhas · toque numa trilha
                </span>
                <span>{meta?.aulas ?? tier.totalHours}</span>
              </p>
            </Reveal>
            <div className="mt-3 space-y-4">
              {tier.modules.map((mod, i) => {
                const tr = trilhas[i];
                const on = i === atual;
                const Icon = tr.icon;
                return (
                  <Reveal key={mod.title} delay={i * 60}>
                    <button
                      type="button"
                      onClick={() => setSel(i)}
                      aria-pressed={on}
                      className={`w-full rounded-2xl p-4 text-left transition sm:p-5 ${
                        on
                          ? "bg-[#1f1a24] text-white shadow-[0_24px_50px_-30px_rgba(31,26,36,0.9)] dark:bg-white/[0.08] dark:ring-1 dark:ring-white/15"
                          : "bg-[#f6f2f5] hover:bg-[#efe9ee] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: tr.cor }}>
                          <Icon className="h-4 w-4 text-[#1f1a24]" />
                        </span>
                        <span className="min-w-0">
                          <span className={`block font-mono text-[11px] uppercase tracking-wider ${on ? "text-white/55" : "text-[#766c7d] dark:text-white/45"}`}>
                            Trilha {pad(i + 1)} · {tr.nome}
                          </span>
                          <span className="block text-lg font-black leading-tight tracking-tight">{mod.title}</span>
                        </span>
                      </span>
                      <span className="mt-4 flex flex-wrap gap-2">
                        {mod.topics.map((topic) => (
                          <span
                            key={topic}
                            className={`rounded-lg border-l-4 px-3 py-2 text-[14px] font-medium leading-snug ${
                              on ? "bg-white/[0.08] text-white/90" : "bg-white text-[#4a4250] dark:bg-white/[0.05] dark:text-white/75"
                            }`}
                            style={{ borderLeftColor: tr.cor }}
                          >
                            {topic}
                          </span>
                        ))}
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            {/* Exportar */}
            <Reveal className="mt-6">
              <div className="relative overflow-hidden rounded-2xl bg-(--accent) p-6 text-white sm:p-7">
                <span className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-(--accent-2)/40 blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 p-1.5">
                    <StudioLogo name={logo} className="h-full w-full" />
                  </span>
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                      <Upload className="h-3.5 w-3.5" /> Exportar · 1080p · 30 fps
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-relaxed">{tier.outcome}</p>
                  </div>
                </div>
                {tier.tools.length > 0 && (
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {tier.tools.map((tool) => {
                      const low = tool.toLowerCase();
                      const Icon = low.includes("mobile") ? Smartphone : low.includes("web") ? Globe : Monitor;
                      return (
                        <span key={tool} className="inline-flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1 text-xs font-bold">
                          <Icon className="h-3.5 w-3.5" />
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
