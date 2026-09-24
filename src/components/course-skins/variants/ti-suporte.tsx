import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import {
  ACC_TEXT,
  CABOS,
  Port,
  RackRail,
  SectionHead,
  StatusLed,
  TierSwitch,
  nn,
  type TiBlockProps,
} from "@/components/course-skins/variants/ti-kit";

/**
 * T.I · Suporte / Help Desk (referência da pele): o público-alvo é uma fila de
 * chamados que o curso resolve, e os módulos são unidades montadas num rack,
 * com o resultado como painel de status e as ferramentas num patch panel.
 */

/** Tela do monitor: a própria fila de chamados, com status coloridos. */
function TicketScreen({ theme, box }: { theme: CourseTheme; box: { x: number; y: number; w: number; h: number } }) {
  const { x, y, w, h } = box;
  const linhas = [
    { cor: theme.accent2, largura: 0.55 },
    { cor: theme.accent2, largura: 0.42 },
    { cor: "#38BDF8", largura: 0.5 },
    { cor: "#F59E0B", largura: 0.36 },
    { cor: "#ffffff40", largura: 0.46 },
  ];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#08120f" />
      <rect x={x} y={y} width={w} height="11" fill="#12211e" />
      <circle cx={x + 6} cy={y + 5.5} r="2" fill={theme.accent2} />
      <rect x={x + 12} y={y + 4} width="30" height="3" rx="1.5" fill="#ffffff66" />
      <rect x={x + w - 26} y={y + 3} width="22" height="5" rx="2.5" fill={theme.accent} />
      {linhas.map((l, i) => (
        <g key={i}>
          <rect x={x + 4} y={y + 15 + i * 12.5} width={w - 8} height="10" rx="2" fill={i === 2 ? "#163b35" : "#101c19"} />
          <rect x={x + 8} y={y + 18.5 + i * 12.5} width="12" height="3" rx="1.5" fill="#ffffff40" />
          <rect x={x + 24} y={y + 18.5 + i * 12.5} width={(w - 64) * l.largura} height="3" rx="1.5" fill="#ffffffa0" />
          <rect x={x + w - 26} y={y + 17 + i * 12.5} width="20" height="6" rx="3" fill={l.cor} fillOpacity="0.9" />
        </g>
      ))}
    </g>
  );
}

export function SuportePublico({ course, theme, tema }: TiBlockProps) {
  return (
    <section className="sb-bleed py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="lg:sticky lg:top-8">
          <SectionHead n="01" label="Para quem é" title="Este curso é ideal se você...">
            Cada situação abaixo é um chamado aberto. O curso foi montado pra fechar todos eles.
          </SectionHead>
          <Reveal delay={120}>
            <PersonAtDesk
              theme={theme}
              tema={tema}
              className="mt-6 w-full max-w-md"
              renderScreen={(box) => <TicketScreen theme={theme} box={box} />}
            />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-2xl border border-[#dbe4e1] bg-white shadow-[0_20px_50px_-30px_rgba(8,20,18,0.35)] dark:border-white/10 dark:bg-[#0a1513]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[#e3eae8] px-5 py-3.5 dark:border-white/10">
              <p className="text-sm font-black">Fila de chamados</p>
              <span className="rounded-full bg-[#eef3f1] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#5f6f6b] dark:bg-white/10 dark:text-white/60">
                {course.targetAudience.length} abertos
              </span>
              <span className={`ml-auto inline-flex items-center gap-1.5 text-xs font-bold ${ACC_TEXT}`}>
                <StatusLed color="var(--accent)" /> Atribuídos ao curso
              </span>
            </div>
            <ul className="divide-y divide-[#e3eae8] dark:divide-white/[0.06]">
              {course.targetAudience.map((item, i) => (
                <li key={item} className="relative flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-5">
                  <span className="absolute inset-y-3 left-0 w-1 rounded-r bg-(--accent)" />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] text-[#7a8a86] dark:text-white/40">
                      <span className={`font-bold ${ACC_TEXT}`}>#TI-{String(1041 + i)}</span> · aberto por você
                    </p>
                    <p className="mt-1 text-[15px] font-semibold leading-snug text-[#1d2b28] dark:text-white/85">{item}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-[#ecfccb] px-3 py-1 text-[11px] font-bold text-[#3f6212] sm:self-center dark:bg-(--accent-2)/15 dark:text-(--accent-2)">
                    <Check className="h-3.5 w-3.5" /> Resolvido no curso
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SuporteConteudo(props: TiBlockProps) {
  const { tier, multiTier, metricas } = props;
  const total = tier.modules.length;
  const [fechados, setFechados] = useState<string[]>([]);
  const toggle = (key: string) => setFechados((f) => (f.includes(key) ? f.filter((k) => k !== key) : [...f, key]));

  return (
    <section className="sb-bleed bg-white py-20 dark:bg-[#081210]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" title="O que você vai aprender">
          {total} módulos em sequência, montados como um rack: cada unidade apoia a próxima, do básico até o que vai pra produção.
        </SectionHead>
        <TierSwitch {...props} />

        <Reveal delay={120} className="mt-10">
          <div className="rounded-2xl bg-[#0b1412] p-2 text-white shadow-[0_40px_80px_-40px_rgba(8,20,18,0.7)] ring-1 ring-black/5 sm:p-3 dark:bg-[#0c1917] dark:ring-white/10">
            <div className="flex items-center justify-between gap-3 px-2 pb-2.5 pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 sm:px-3">
              <span className="truncate">
                rack-01 · helpdesk
                {multiTier ? ` · ${tier.levelName}` : ""}
              </span>
              <span className="flex shrink-0 items-center gap-2">
                {total}U ocupadas <StatusLed blink />
              </span>
            </div>

            <div className="grid gap-2 sm:grid-cols-[26px_1fr_26px]">
              <RackRail count={Math.max(total, 3) * 2} className="hidden rounded-md bg-black/30 sm:flex" />

              <div className="min-w-0 space-y-2">
                {tier.modules.map((m, i) => {
                  const key = `${tier.levelName}:${i}`;
                  const aberto = !fechados.includes(key);
                  return (
                    <article key={key} className="overflow-hidden rounded-lg border border-white/10 bg-[#0f1a18]">
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-expanded={aberto}
                        className="flex w-full items-center gap-3 bg-[linear-gradient(180deg,#1d2c28,#141f1c)] px-3 py-3 text-left transition hover:brightness-110 sm:gap-4 sm:px-4"
                      >
                        <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full border border-white/20 bg-black/40 sm:block" />
                        <span className="shrink-0 rounded bg-black/40 px-2 py-1 font-mono text-[11px] font-bold text-(--accent-2)">U{nn(i + 1)}</span>
                        <h3 className="min-w-0 flex-1 text-sm font-black leading-snug sm:text-base">{m.title}</h3>
                        <span className="hidden shrink-0 gap-[3px] md:flex" aria-hidden="true">
                          {Array.from({ length: 7 }, (_, k) => (
                            <span key={k} className="h-4 w-[3px] rounded-full bg-black/40" />
                          ))}
                        </span>
                        <span className="hidden shrink-0 font-mono text-[10px] text-white/40 sm:inline">{m.topics.length} tópicos</span>
                        <span className="flex shrink-0 gap-1.5">
                          <StatusLed className="h-1.5 w-1.5" />
                          <StatusLed color="var(--accent)" blink={aberto} className="h-1.5 w-1.5" />
                        </span>
                        <ChevronDown className={`h-4 w-4 shrink-0 text-white/40 transition ${aberto ? "rotate-180" : ""}`} />
                      </button>
                      {aberto && (
                        <ul className="grid gap-x-6 gap-y-2 border-t border-white/5 px-4 py-4 sm:grid-cols-2 sm:px-5">
                          {m.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                              <Port color="var(--accent)" className="mt-[6px] h-2.5 w-3" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  );
                })}

                {/* Painel de status: o resultado */}
                <div className="rounded-lg border border-(--accent)/50 bg-[radial-gradient(120%_140%_at_0%_0%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_60%)] p-4 sm:p-5">
                  <p className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-(--accent-2)">
                    <StatusLed blink /> Status ao final do curso · tudo online
                  </p>
                  <p className="mt-2.5 text-base font-semibold leading-relaxed text-white sm:text-lg">{tier.outcome}</p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-white/50">
                    {metricas.map((m) => (
                      <span key={m.label}>
                        {m.label.toLowerCase()} <span className="font-bold text-white/85">{m.value}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Patch panel: ferramentas */}
                {tier.tools.length > 0 && (
                  <div className="rounded-lg border border-white/10 bg-[#0f1a18] p-4 sm:p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Patch panel · ferramentas que você vai usar</p>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-3">
                      {tier.tools.map((tool, i) => (
                        <li key={tool} className="flex items-center gap-2">
                          <span className="flex flex-col items-center">
                            <span className="h-2 w-1.5 rounded-t-sm" style={{ background: CABOS[i % CABOS.length] }} />
                            <span
                              className="flex h-5 w-6 items-center justify-center rounded-[3px] border"
                              style={{ borderColor: CABOS[i % CABOS.length], background: "#050b0a" }}
                            >
                              <Port color={CABOS[i % CABOS.length]} className="h-2 w-2.5" />
                            </span>
                          </span>
                          <span className="rounded-sm bg-white px-2 py-0.5 text-[12px] font-bold text-[#0b1412]">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <RackRail count={Math.max(total, 3) * 2} className="hidden rounded-md bg-black/30 sm:flex" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
