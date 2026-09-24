import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import {
  ACC_TEXT,
  CABOS,
  Port,
  SectionHead,
  StatusLed,
  TierSwitch,
  nn,
  type TiBlockProps,
} from "@/components/course-skins/variants/ti-kit";

/**
 * T.I · Redes e Infraestrutura: o público-alvo é um patch panel, com cada
 * perfil num cabo etiquetado e com link ativo; o conteúdo é um traceroute até
 * o objetivo, com cada módulo como um salto (hop) da rota e o resultado como o
 * destino alcançado.
 */

/** Tela do monitor: mapa da rede com os enlaces ativos. */
function MapaScreen({ theme, box }: { theme: CourseTheme; box: { x: number; y: number; w: number; h: number } }) {
  const { x, y, w, h } = box;
  const cx = x + w / 2;
  const nos = [0.14, 0.38, 0.62, 0.86].map((f, i) => ({ x: x + w * f, cor: [theme.accent, theme.accent, "#38BDF8", theme.accent2][i] }));
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#08120f" />
      <path d={`M${cx} ${y + 16} V${y + 34}`} stroke="#ffffff50" strokeWidth="1.5" strokeDasharray="3 3" />
      {nos.map((n) => (
        <path key={n.x} d={`M${cx} ${y + 40} C ${cx} ${y + 52}, ${n.x} ${y + 50}, ${n.x} ${y + 62}`} fill="none" stroke={n.cor} strokeWidth="1.6" />
      ))}
      <circle cx={cx} cy={y + 11} r="6" fill="#ffffff30" />
      <rect x={cx - 16} y={y + 32} width="32" height="10" rx="2.5" fill={theme.accent} />
      {[0, 1, 2, 3].map((k) => (
        <circle key={k} cx={cx - 10 + k * 6.6} cy={y + 37} r="1.2" fill={theme.accent2} />
      ))}
      {nos.map((n) => (
        <rect key={n.x} x={n.x - 7} y={y + 62} width="14" height="10" rx="2" fill={n.cor} />
      ))}
      <circle cx={x + w * 0.26} cy={y + 50.5} r="2" fill="#fff" />
      <circle cx={x + w * 0.7} cy={y + 50} r="2" fill="#fff" />
    </g>
  );
}

// ── Para quem é: patch panel com cabos etiquetados ──────────────────────────

export function RedesPublico({ course, theme, tema }: TiBlockProps) {
  return (
    <section className="sb-bleed py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_300px]">
          <SectionHead n="01" label="Para quem é" title="Este curso é ideal se você...">
            Cada perfil é um cabo ligado no patch panel do curso. Se um deles é o seu, o link já está ativo.
          </SectionHead>
          <Reveal delay={120} className="hidden md:block">
            <PersonAtDesk theme={theme} tema={tema} className="w-full" renderScreen={(box) => <MapaScreen theme={theme} box={box} />} />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-[#dbe4e1] bg-white shadow-[0_20px_50px_-30px_rgba(8,20,18,0.35)] dark:border-white/10 dark:bg-[#0a1513]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-[#e3eae8] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5f6f6b] dark:border-white/10 dark:text-white/50">
              <span className="font-bold text-[#0b1412] dark:text-white">patch-panel · sw-core-01</span>
              <span className={`ml-auto inline-flex items-center gap-2 font-bold ${ACC_TEXT}`}>
                <StatusLed /> {course.targetAudience.length}/{course.targetAudience.length} links ativos
              </span>
            </div>

            <ul>
              {course.targetAudience.map((item, i) => {
                const cor = CABOS[i % CABOS.length];
                return (
                  <li key={item} className="grid grid-cols-[64px_28px_1fr] items-center sm:grid-cols-[92px_72px_1fr]">
                    {/* Porta no painel (a coluna escura forma o painel inteiro) */}
                    <div className="flex h-full flex-col items-center justify-center gap-1.5 border-b border-white/5 bg-[#0b1412] py-5 dark:bg-[#050b0a]">
                      <span className="flex items-center gap-1.5">
                        <StatusLed className="h-1.5 w-1.5" blink={i % 2 === 0} />
                        <StatusLed color="#F59E0B" className="h-1.5 w-1.5" />
                      </span>
                      <span className="flex h-7 w-9 items-center justify-center rounded-[4px] border border-white/15 bg-black">
                        <Port color={cor} className="h-3.5 w-4" />
                      </span>
                      <span className="font-mono text-[11px] font-bold text-white/60">{nn(i + 1)}</span>
                    </div>
                    {/* Cabo saindo da porta */}
                    <svg viewBox="0 0 72 60" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
                      <path d="M0 30 C 30 30, 34 30, 72 30" stroke={cor} strokeWidth="7" strokeLinecap="round" fill="none" />
                      <path d="M0 27 H72" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.5" />
                    </svg>
                    {/* Etiqueta do cabo */}
                    <div className="min-w-0 border-b border-[#e3eae8] py-4 pr-4 sm:pr-6 dark:border-white/[0.06]">
                      <div className="flex items-stretch gap-3 rounded-lg border border-[#dbe4e1] bg-[#f7faf9] dark:border-white/10 dark:bg-white/[0.04]">
                        <span className="w-2 shrink-0 rounded-l-lg" style={{ background: cor }} />
                        <div className="min-w-0 flex-1 py-3 pr-3">
                          <p className="flex flex-wrap items-center gap-x-3 font-mono text-[11px] text-[#7a8a86] dark:text-white/40">
                            <span className={`font-bold ${ACC_TEXT}`}>cabo {nn(i + 1)}</span>
                            <span>10.0.{10 + i}.1/24</span>
                            <span className="hidden sm:inline">link up · 1 Gbps</span>
                          </p>
                          <p className="mt-1 text-[15px] font-semibold leading-snug text-[#1d2b28] dark:text-white/85">{item}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Conteúdo: traceroute até o objetivo ────────────────────────────────────

/** Roteador (ícone do salto). */
function Roteador({ destino = false }: { destino?: boolean }) {
  return (
    <span
      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] ${
        destino ? "border-(--accent-2) bg-(--accent-2)" : "border-(--accent) bg-[#0b1412]"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        {destino ? (
          <path d="M5 12.5 l4.5 4.5 L19 7.5" fill="none" stroke="#0b1412" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <g fill="none" stroke="#A3E635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9 H14 M11 6 L14 9 L11 12" />
            <path d="M20 15 H10 M13 12 L10 15 L13 18" />
          </g>
        )}
      </svg>
    </span>
  );
}

export function RedesConteudo(props: TiBlockProps) {
  const { course, tier, metricas } = props;
  const total = tier.modules.length;

  return (
    <section className="sb-bleed bg-white py-20 dark:bg-[#081210]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" title="O que você vai aprender">
          A rota até o objetivo tem {total} saltos. Cada módulo é um roteador no caminho, e o pacote só chega ao destino passando por todos.
        </SectionHead>
        <TierSwitch {...props} />

        <Reveal delay={60} className="mt-8">
          <p className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-[#0b1412] px-4 py-2.5 font-mono text-[12px] text-white/70 dark:ring-1 dark:ring-white/10">
            <span className="text-(--accent-2)">traceroute</span>
            <span className="truncate">você → {course.nome.toLowerCase()}</span>
            <span className="text-white/40">{total} saltos · 0% perda</span>
          </p>
        </Reveal>

        <ol className="relative mt-10">
          {/* Cabo da rota */}
          <span
            className="absolute bottom-6 left-[23px] top-6 w-1 rounded-full bg-[linear-gradient(180deg,var(--accent),var(--accent-2))] md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          {tier.modules.map((m, i) => {
            const direita = i % 2 === 1;
            const endereco = `10.${i + 1}.0.1 · ${2 + i * 3} ms`;
            const ip = (
              <p className={`hidden pt-3.5 font-mono text-[12px] text-[#7a8a86] md:block dark:text-white/40 ${direita ? "text-right" : ""}`}>
                {endereco}
              </p>
            );
            const card = (
              <article className="min-w-0 rounded-xl border border-[#dbe4e1] bg-white p-5 shadow-[0_1px_2px_rgba(8,20,18,0.05)] dark:border-white/10 dark:bg-[#0c1816]">
                <p className={`flex flex-wrap items-center gap-x-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] ${ACC_TEXT}`}>
                  Salto {nn(i + 1)}
                  <span className="font-normal normal-case tracking-normal text-[#7a8a86] md:hidden dark:text-white/40">{endereco}</span>
                </p>
                <h3 className="mt-1 text-lg font-black leading-snug text-[#0b1412] dark:text-white">{m.title}</h3>
                <ul className="mt-3 space-y-2">
                  {m.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#33423e] dark:text-white/75">
                      <span className="mt-[9px] h-1.5 w-3 shrink-0 rounded-full bg-(--accent)" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            );
            return (
              <Reveal
                as="li"
                key={`${tier.levelName}:${m.title}`}
                delay={50 * i}
                className="relative grid grid-cols-[48px_1fr] gap-4 pb-8 md:grid-cols-[1fr_48px_1fr] md:gap-8"
              >
                {direita ? ip : card}
                <div className="order-first md:order-none">
                  <Roteador />
                </div>
                {direita ? card : ip}
              </Reveal>
            );
          })}

          {/* Destino: o resultado */}
          <Reveal as="li" delay={80} className="relative grid grid-cols-[48px_1fr] gap-4 md:grid-cols-[1fr_48px_1fr] md:gap-8">
            <div className="hidden md:block" />
            <Roteador destino />
            <div className="hidden md:block" />
            <div className="relative col-start-2 min-w-0 rounded-xl bg-[#0b1412] p-5 text-white ring-1 ring-black/5 sm:p-6 md:col-span-3 md:col-start-1 dark:ring-white/10">
              <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent-2)">
                <StatusLed blink /> Destino alcançado · ao final do curso
              </p>
              <p className="mt-2.5 text-base font-semibold leading-relaxed sm:text-lg">{tier.outcome}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-white/50">
                {metricas.map((m) => (
                  <span key={m.label}>
                    {m.label.toLowerCase()} <span className="font-bold text-white/85">{m.value}</span>
                  </span>
                ))}
              </div>

              {tier.tools.length > 0 && (
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">Ferramentas no caminho</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {tier.tools.map((tool, i) => (
                      <li key={tool} className="inline-flex items-center gap-2 rounded-full border border-white/15 py-1 pl-1.5 pr-3 text-[13px] font-bold">
                        <span className="h-3.5 w-3.5 rounded-full" style={{ background: CABOS[i % CABOS.length] }} />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
