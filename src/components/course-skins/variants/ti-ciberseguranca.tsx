import type { ReactNode } from "react";
import { Check, ShieldCheck, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import type { TopicGroup } from "@/components/particular-course-page";
import {
  SectionHead,
  StatusLed,
  TierSwitch,
  nn,
  type TiBlockProps,
} from "@/components/course-skins/variants/ti-kit";

/**
 * T.I · Cibersegurança: o público-alvo é um relatório de avaliação de risco,
 * com cada perfil como um achado mitigado pelo curso; o conteúdo é a defesa
 * em profundidade, com cada módulo como uma camada que envolve a próxima até
 * o núcleo protegido (o resultado).
 */

const RED = "#EF4444";

/** Tela do monitor: radar de varredura com ameaças bloqueadas. */
function RadarScreen({ theme, box }: { theme: CourseTheme; box: { x: number; y: number; w: number; h: number } }) {
  const { x, y, w, h } = box;
  const cx = x + 40;
  const cy = y + h / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#08120f" />
      {[32, 22, 12].map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke={theme.accent} strokeOpacity="0.45" />
      ))}
      <path d={`M${cx} ${cy} L${cx + 30} ${cy - 12} A32 32 0 0 1 ${cx + 32} ${cy + 4} Z`} fill={theme.accent2} fillOpacity="0.35" />
      <circle cx={cx + 16} cy={cy - 14} r="2.6" fill={RED} />
      <circle cx={cx - 18} cy={cy + 10} r="2.6" fill={RED} />
      <circle cx={cx + 6} cy={cy + 20} r="2.6" fill={theme.accent2} />
      {[0, 1, 2, 3].map((k) => (
        <g key={k}>
          <rect x={x + 82} y={y + 12 + k * 16} width="48" height="10" rx="2" fill="#12211e" />
          <rect x={x + 86} y={y + 15.5 + k * 16} width="22" height="3" rx="1.5" fill="#ffffff70" />
          <rect x={x + 112} y={y + 14.5 + k * 16} width="15" height="5" rx="2.5" fill={k === 3 ? theme.accent2 : RED} fillOpacity="0.9" />
        </g>
      ))}
    </g>
  );
}

// ── Para quem é: relatório de avaliação de risco ─────────────────────────────

function Medidor({ rotulo, nivel, pct, cor }: { rotulo: string; nivel: string; pct: number; cor: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[13px] text-white/60">{rotulo}</span>
        <span className="font-mono text-sm font-black" style={{ color: cor }}>
          {nivel}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-10 gap-1">
        {Array.from({ length: 10 }, (_, k) => (
          <span key={k} className="h-2.5 rounded-[2px]" style={{ background: k < pct ? cor : "#ffffff14" }} />
        ))}
      </div>
    </div>
  );
}

export function CibersegurancaPublico({ course, theme, tema }: TiBlockProps) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div>
          <SectionHead n="01" label="Para quem é" title="Este curso é ideal se você...">
            Fizemos a avaliação antes de você chegar. Cada achado abaixo é um perfil que o curso atende, e todos saem mitigados.
          </SectionHead>

          <Reveal delay={80} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-[#dbe4e1] bg-white shadow-[0_20px_50px_-30px_rgba(8,20,18,0.35)] dark:border-white/10 dark:bg-[#0a1513]">
              {/* Faixa de classificação */}
              <div className="flex items-center justify-between gap-3 bg-[repeating-linear-gradient(135deg,#0b1412_0_12px,#1c2b27_12px_24px)] px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                <span>Confidencial</span>
                <span className="rounded bg-(--accent-2) px-2 py-0.5 text-[#0b1412]">Pentest · RA-2026</span>
              </div>
              <div className="border-b border-[#e3eae8] px-5 py-5 sm:px-6 dark:border-white/10">
                <p className="text-xl font-black tracking-tight">Relatório de avaliação</p>
                <p className="mt-1 text-sm text-[#5f6f6b] dark:text-white/55">
                  Escopo: <span className="font-bold text-[#0b1412] dark:text-white">você</span> · {course.targetAudience.length} achados · método:
                  entrevista + análise de perfil
                </p>
                <div className="mt-3 flex gap-1.5" aria-hidden="true">
                  {[60, 34, 80, 22].map((wd, k) => (
                    <span key={k} className="h-2 rounded-full bg-[#0b1412]/80 dark:bg-white/25" style={{ width: wd }} />
                  ))}
                </div>
              </div>

              <ul className="grid gap-px bg-[#e3eae8] sm:grid-cols-2 dark:bg-white/[0.06]">
                {course.targetAudience.map((item, i) => (
                  <li key={item} className="flex flex-col gap-3 bg-white p-5 dark:bg-[#0a1513]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b91c1c] dark:text-[#fca5a5]">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-[#fee2e2] dark:bg-[#EF4444]/15">
                          <X className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        Achado {nn(i + 1)}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#ecfccb] px-2.5 py-0.5 text-[11px] font-bold text-[#3f6212] dark:bg-(--accent-2)/15 dark:text-(--accent-2)">
                        <Check className="h-3 w-3" strokeWidth={3} /> Mitigado
                      </span>
                    </div>
                    <p className="text-[15px] font-semibold leading-snug text-[#1d2b28] dark:text-white/85">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Painel lateral: risco antes e depois */}
        <Reveal delay={160} className="lg:sticky lg:top-8 lg:pt-24">
          <div className="rounded-2xl bg-[#0b1412] p-5 text-white ring-1 ring-black/5 dark:ring-white/10">
            <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              <StatusLed color={RED} blink /> Nível de risco
            </p>
            <div className="mt-4 space-y-4">
              <Medidor rotulo="Hoje, sem o curso" nivel="ALTO" pct={8} cor={RED} />
              <Medidor rotulo="Ao final do curso" nivel="BAIXO" pct={2} cor="#A3E635" />
            </div>
            <p className="mt-4 border-t border-white/10 pt-3 text-[13px] leading-relaxed text-white/60">
              Risco aqui é ficar de fora de uma das áreas que mais contratam em TI.
            </p>
          </div>
          <PersonAtDesk
            theme={theme}
            tema={tema}
            className="mx-auto mt-6 hidden w-full max-w-sm lg:block"
            renderScreen={(box) => <RadarScreen theme={theme} box={box} />}
          />
        </Reveal>
      </div>
    </section>
  );
}

// ── Conteúdo: camadas de defesa ──────────────────────────────────────────────

/** Borda de cada camada: de fora (teal) para dentro (lima). */
const CAMADA_COR = ["#0D9488", "#14a38f", "#2bb68a", "#52c47a", "#7ad165", "#A3E635"];

function Camada({ modulos, i, core }: { modulos: TopicGroup[]; i: number; core: ReactNode }) {
  const m = modulos[i];
  if (!m) return <>{core}</>;
  const cor = CAMADA_COR[Math.min(i, CAMADA_COR.length - 1)];
  return (
    <div className="rounded-l-xl rounded-tr-xl border-l-2 border-t-2 bg-white/[0.025] pl-1.5 sm:rounded-2xl sm:border-2 sm:p-3" style={{ borderColor: cor }}>
      <div className="px-2.5 pb-4 pt-3 sm:px-4">
        <div className="flex items-start gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-black text-[#0b1412]"
            style={{ background: cor }}
          >
            {nn(i + 1)}
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Camada {i + 1}</p>
            <h3 className="text-base font-black leading-snug text-white sm:text-lg">{m.title}</h3>
          </div>
        </div>
        <ul className="mt-3 grid gap-x-6 gap-y-2 md:grid-cols-2">
          {m.topics.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75 sm:text-[15px]">
              <ShieldCheck className="mt-[3px] h-4 w-4 shrink-0" style={{ color: cor }} />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <Camada modulos={modulos} i={i + 1} core={core} />
    </div>
  );
}

export function CibersegurancaConteudo(props: TiBlockProps) {
  const { tier, metricas } = props;
  const total = tier.modules.length;

  const nucleo = (
    <div className="rounded-xl bg-(--accent-2) p-5 text-[#0b1412] sm:p-6">
      <p className="flex items-center gap-2 font-mono text-[11px] font-black uppercase tracking-[0.2em]">
        <ShieldCheck className="h-4 w-4" /> Núcleo protegido · ao final do curso
      </p>
      <p className="mt-2 text-base font-bold leading-relaxed sm:text-lg">{tier.outcome}</p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-[#0b1412]/70">
        {metricas.map((m) => (
          <span key={m.label}>
            {m.label.toLowerCase()} <span className="font-black text-[#0b1412]">{m.value}</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-white py-20 dark:bg-[#081210]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" title="O que você vai aprender">
          Defesa em profundidade: {total} camadas, cada módulo envolvendo o próximo. Pra chegar no núcleo, um ataque teria que passar por todas.
        </SectionHead>
        <TierSwitch {...props} />

        <Reveal delay={100} className="mt-10">
          <div className="relative rounded-3xl bg-[#0b1412] p-2 shadow-[0_40px_80px_-40px_rgba(8,20,18,0.7)] ring-1 ring-black/5 sm:p-4 dark:bg-[#0c1917] dark:ring-white/10">
            {/* Ameaças batendo no perímetro */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-3 pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 sm:px-3">
              <span className="inline-flex items-center gap-2">
                <span className="font-bold text-(--accent-2)">perímetro</span> → núcleo
              </span>
              <span className="inline-flex flex-wrap gap-2">
                {["phishing", "ransomware", "força bruta"].map((a) => (
                  <span key={a} className="inline-flex items-center gap-1 rounded-full bg-[#EF4444]/15 px-2 py-0.5 normal-case tracking-normal text-[#fca5a5]">
                    <X className="h-3 w-3" strokeWidth={3} /> {a}
                  </span>
                ))}
              </span>
            </div>
            <Camada modulos={tier.modules} i={0} core={nucleo} />
          </div>
        </Reveal>

        {tier.tools.length > 0 && (
          <Reveal delay={80} className="mt-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#5f6f6b] dark:text-white/50">
              Arsenal do analista · ferramentas que você vai usar
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tier.tools.map((tool) => (
                <li
                  key={tool}
                  className="inline-flex items-center gap-2 rounded-md border border-[#0b1412] bg-[#0b1412] px-3 py-1.5 text-[13px] font-bold text-white dark:border-white/15 dark:bg-white/[0.04]"
                >
                  <span className="h-2 w-2 rounded-[2px] bg-(--accent-2)" />
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
