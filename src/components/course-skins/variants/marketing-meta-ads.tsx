import { Flag, Layers, Target, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import {
  ConteudoSection,
  ConversaLink,
  PublicoSection,
  StepHeading,
  TierPicker,
  ToolsRow,
  type MktBlockProps,
} from "@/components/course-skins/variants/marketing-kit";
import { BODY, CARD, INK, KICKER, PERSONA_CORES, SOFT, pad2, ritmo, useMarcados } from "@/components/course-skins/variants/marketing-tokens";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Meta Ads. "Para quem é" é o construtor de públicos (a pessoa liga os perfis
 * que combinam com ela). O conteúdo segue a estrutura real de uma conta:
 * campanha (o objetivo do nível) → conjuntos de anúncios (módulos) → anúncios
 * (tópicos), cada anúncio com uma miniatura de criativo desenhada aqui.
 */

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={`relative mt-0.5 inline-flex h-5 w-9 shrink-0 items-center rounded-full transition ${on ? "bg-(--accent)" : "bg-[#e8d6d3] dark:bg-white/15"}`}>
      <span className={`absolute h-4 w-4 rounded-full bg-white shadow transition-all ${on ? "left-[18px]" : "left-0.5"}`} />
    </span>
  );
}

function Persona({ i }: { i: number }) {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill={PERSONA_CORES[i % PERSONA_CORES.length]} />
      <circle cx="20" cy="16" r="6.5" fill="#fff" fillOpacity="0.95" />
      <path d="M7.5 33.5 Q20 19 32.5 33.5 A20 20 0 0 1 7.5 33.5 Z" fill="#fff" fillOpacity="0.95" />
    </svg>
  );
}

/** Medidor semicircular de correspondência do público. */
function Gauge({ value }: { value: number }) {
  const a = Math.PI * (1 - value);
  const nx = 60 + 40 * Math.cos(a);
  const ny = 62 - 40 * Math.sin(a);
  return (
    <svg viewBox="0 0 120 70" className="w-36" aria-hidden="true">
      <defs>
        <linearGradient id="mkt-gauge" x1="0" x2="1">
          <stop offset="0" stopColor="var(--accent-2)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path d="M12 62 A48 48 0 0 1 108 62" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M12 62 A48 48 0 0 1 108 62"
        fill="none"
        stroke="url(#mkt-gauge)"
        strokeWidth="10"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={`${Math.max(value * 100, 0.01)} 100`}
        className="transition-all duration-500"
      />
      <line x1="60" y1="62" x2={nx} y2={ny} stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="transition-all duration-500" />
      <circle cx="60" cy="62" r="5" fill="currentColor" />
    </svg>
  );
}

function Publico({ course, tema, theme, whatsappUrl }: MktBlockProps) {
  const [marcados, alternar] = useMarcados();
  const total = course.targetAudience.length;
  return (
    <PublicoSection>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div>
          <StepHeading
            step="01"
            label="Público-alvo · Conjunto"
            Icon={Users}
            title="Este curso é ideal se você..."
            sub="Monte o seu público como num conjunto de anúncios: ligue os perfis que têm a ver com você."
          />
          <Reveal delay={120}>
            <PersonAtDesk
              theme={theme}
              tema={tema}
              className="mt-6 hidden w-full max-w-md lg:block"
              renderScreen={({ x, y, w, h }) => (
                <g>
                  <rect x={x} y={y} width={w} height={h} fill="#20141a" />
                  {/* Prévia de um anúncio no feed (genérica) */}
                  <rect x={x + 34} y={y + 4} width={70} height={h - 8} rx={4} fill="#fff" />
                  <circle cx={x + 42} cy={y + 12} r={4} fill={theme.accent} />
                  <rect x={x + 49} y={y + 9} width={26} height={3} rx={1.5} fill="#1f1216" fillOpacity={0.6} />
                  <rect x={x + 49} y={y + 14} width={14} height={2.5} rx={1.2} fill="#1f1216" fillOpacity={0.3} />
                  <rect x={x + 38} y={y + 20} width={62} height={36} rx={2} fill={theme.accent} fillOpacity={0.85} />
                  <circle cx={x + 82} cy={y + 32} r={9} fill={theme.accent2} />
                  <path d={`M${x + 38} ${y + 56} L${x + 58} ${y + 38} L${x + 72} ${y + 50} L${x + 100} ${y + 30} V${y + 56} Z`} fill="#fff" fillOpacity={0.35} />
                  <rect x={x + 38} y={y + 60} width={62} height={10} rx={2} fill="#1f1216" fillOpacity={0.08} />
                  <rect x={x + 72} y={y + 62} width={26} height={6} rx={2} fill={theme.accent} />
                  <rect x={x + 41} y={y + 63.5} width={22} height={3} rx={1.2} fill="#1f1216" fillOpacity={0.45} />
                  {/* Segmentação ao lado */}
                  {[0, 1, 2].map((k) => (
                    <g key={k}>
                      <circle cx={x + 118} cy={y + 18 + k * 18} r={6} fill={PERSONA_CORES[k]} />
                      <rect x={x + 108} y={y + 26 + k * 18} width={20} height={2.5} rx={1} fill="#fff" fillOpacity={0.4} />
                    </g>
                  ))}
                  {[0, 1, 2].map((k) => (
                    <rect key={k} x={x + 6} y={y + 14 + k * 20} width={22} height={12} rx={6} fill={k === 1 ? theme.accent : "#fff"} fillOpacity={k === 1 ? 1 : 0.18} />
                  ))}
                </g>
              )}
            />
          </Reveal>
        </div>

        <div>
          <div className="space-y-3">
            {course.targetAudience.map((item, i) => {
              const on = marcados.has(i);
              return (
                <Reveal key={item} delay={i * 60}>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    onClick={() => alternar(i)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                      on ? "border-(--accent) bg-(--accent)/[0.06] shadow-[0_12px_28px_-18px_var(--accent)]" : `${CARD} hover:border-(--accent)/50`
                    }`}
                  >
                    <Persona i={i} />
                    <span className="min-w-0 flex-1">
                      <span className={`block ${KICKER} text-[#a3868c] dark:text-white/45`}>Público {pad2(i)}</span>
                      <span className={`mt-1 block text-[15px] font-semibold leading-relaxed ${INK}`}>{item}</span>
                    </span>
                    <Toggle on={on} />
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="mt-5 flex flex-col items-center gap-4 rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-white/10 sm:flex-row sm:items-center sm:gap-6">
              <div className="text-center text-white">
                <Gauge value={total ? marcados.size / total : 0} />
                <p className="-mt-1 text-xs font-bold text-white/60">
                  {marcados.size} de {total} perfis
                </p>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className={`${KICKER} text-(--accent-2)`}>Correspondência do público</p>
                {marcados.size === 0 ? (
                  <p className="mt-1.5 text-sm text-white/75">Ligue acima os perfis que descrevem você e veja se este curso combina com o seu momento.</p>
                ) : (
                  <>
                    <p className="mt-1.5 text-sm text-white/85">
                      {marcados.size === 1 ? "Um perfil combina" : `${marcados.size} perfis combinam`} com você — este curso foi pensado pra esse público.
                    </p>
                    <div className="mt-3">
                      <ConversaLink href={whatsappUrl} light />
                    </div>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </PublicoSection>
  );
}

/** Miniatura de criativo: formas simples que mudam por anúncio (nada de interface real). */
function Criativo({ i, j }: { i: number; j: number }) {
  const k = (i * 3 + j) % 4;
  const fundo = ["var(--accent)", "var(--accent-2)", "#1f1216", "#fb923c"][(i + j) % 4];
  const traco = (i + j) % 4 === 1 ? "#1f1216" : "#fff";
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0 overflow-hidden rounded-lg" aria-hidden="true">
      <rect width="48" height="48" fill={fundo} />
      {k === 0 && <circle cx="30" cy="18" r="9" fill={traco} fillOpacity="0.85" />}
      {k === 0 && <path d="M0 48 L16 28 L28 40 L48 22 V48 Z" fill={traco} fillOpacity="0.35" />}
      {k === 1 && <rect x="10" y="10" width="28" height="28" rx="6" fill="none" stroke={traco} strokeWidth="3.5" />}
      {k === 1 && <path d="M20 17 L31 24 L20 31 Z" fill={traco} />}
      {k === 2 && (
        <g fill={traco}>
          <rect x="8" y="12" width="32" height="5" rx="2.5" fillOpacity="0.9" />
          <rect x="8" y="21" width="22" height="5" rx="2.5" fillOpacity="0.55" />
          <rect x="8" y="32" width="16" height="7" rx="3.5" />
        </g>
      )}
      {k === 3 && (
        <g fill={traco}>
          <rect x="7" y="9" width="15" height="30" rx="3" fillOpacity="0.9" />
          <rect x="26" y="9" width="15" height="30" rx="3" fillOpacity="0.5" />
        </g>
      )}
    </svg>
  );
}

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const n = tier.modules.length;
  const totalAnuncios = tier.modules.reduce((s, m) => s + m.topics.length, 0);
  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={Layers}
        title="O que você vai aprender"
        sub="Organizado como uma conta de anúncios: a campanha é o objetivo do curso, cada módulo é um conjunto e cada tópico é um anúncio dentro dele."
      />
      <TierPicker {...p} unidade="conjuntos" />

      {/* Campanha */}
      <Reveal delay={60} className="mt-10">
        <div className="relative rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-white/10 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-(--accent) px-2 py-1 text-[11px] font-black uppercase tracking-wider">
              <Flag className="h-3.5 w-3.5" /> Campanha
            </span>
            <span className="text-sm font-black">{course.nome}</span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Veiculando
            </span>
          </div>
          <p className={`mt-4 ${KICKER} text-(--accent-2)`}>Objetivo da campanha · {tier.levelName}</p>
          <OutcomeText text={tier.outcome} className="mt-1.5 text-base leading-relaxed sm:text-lg" />
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/65">
            <span>{n} conjuntos de anúncios</span>
            <span>{totalAnuncios} anúncios (tópicos)</span>
            <span>{ritmo(course, tier)}</span>
          </div>
        </div>
      </Reveal>

      {/* Conjuntos → anúncios, em árvore */}
      <div className="relative mt-2 pl-5 sm:pl-10">
        <span className="absolute bottom-10 left-2 top-0 w-0.5 bg-(--accent)/30 sm:left-5" aria-hidden="true" />
        {tier.modules.map((m, i) => (
          <Reveal key={`${tier.levelName}-${m.title}`} delay={i * 60}>
            <div className="relative pt-5">
              <span className="absolute left-[-12px] top-11 h-0.5 w-3 bg-(--accent)/30 sm:left-[-20px] sm:w-5" aria-hidden="true" />
              <article className={`overflow-hidden rounded-2xl ${CARD}`}>
                <header className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[#f3e4e0] bg-[#fff5f2] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03] sm:px-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--accent)/12 text-(--accent)">
                    <Target className="h-4 w-4" />
                  </span>
                  <span className={`${KICKER} text-(--accent)`}>Conjunto {pad2(i)}</span>
                  <h3 className={`basis-full text-base font-black sm:basis-auto sm:text-lg ${INK}`}>{m.title}</h3>
                  <span className={`text-xs font-semibold sm:ml-auto ${SOFT}`}>{m.topics.length} anúncios</span>
                </header>
                <ul className="grid gap-px bg-[#f3e4e0] dark:bg-white/10 md:grid-cols-2">
                  {m.topics.map((topic, j) => (
                    <li key={topic} className="flex items-start gap-3 bg-white p-3.5 dark:bg-[#150b0f] sm:p-4">
                      <Criativo i={i} j={j} />
                      <span className="min-w-0">
                        <span className={`block text-[11px] font-bold ${SOFT}`}>
                          Anúncio {i + 1}.{j + 1}
                        </span>
                        <span className={`mt-0.5 block text-sm leading-snug ${BODY}`}>{topic}</span>
                      </span>
                    </li>
                  ))}
                  {m.topics.length % 2 === 1 && <li className="hidden bg-white dark:bg-[#150b0f] md:block" aria-hidden="true" />}
                </ul>
              </article>
            </div>
          </Reveal>
        ))}
      </div>

      <ToolsRow tools={tier.tools} label="Integrações da conta" />
    </ConteudoSection>
  );
}

export { Publico as MetaAdsPublico, Conteudo as MetaAdsConteudo };
