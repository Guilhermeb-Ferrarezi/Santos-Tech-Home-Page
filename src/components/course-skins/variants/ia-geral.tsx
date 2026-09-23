import { ArrowRight, Bot, Briefcase, Check, Clock, MessageSquare, Target, TrendingUp, Users, Workflow, Zap, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TIER_GUIDE, tierMeta } from "@/components/course-skins/shared";
import type { CourseTheme } from "@/lib/course-themes";
import {
  ACCENT_TEXT,
  BORDER,
  CARD,
  GradientFrame,
  Heading,
  MUTED,
  PANEL,
  TEXT,
  TITLE,
  ToolList,
  type IaBlockProps,
} from "@/components/course-skins/variants/ia-kit";
import { pad } from "@/components/course-skins/variants/ia-util";

/**
 * Inteligência Artificial (visão geral): "Para quem é" é uma constelação em
 * volta do núcleo "você + IA" (cada perfil orbita o centro) e o conteúdo é a
 * trilha de evolução prompt → automação → agente: os níveis são as etapas da
 * trilha e os módulos formam uma linha do tempo em zigue-zague.
 */

const ICONES_PERFIL: LucideIcon[] = [Briefcase, Clock, TrendingUp, Users, Target, Zap];

/** Núcleo da constelação: órbitas concêntricas com o "você + IA" no meio. */
function Nucleo({ theme, className = "" }: { theme: CourseTheme; className?: string }) {
  const orbitas = [
    { r: 150, dots: [20, 200], op: 0.18 },
    { r: 112, dots: [110, 290], op: 0.28 },
    { r: 74, dots: [60, 240], op: 0.4 },
  ];
  return (
    <svg viewBox="0 0 340 340" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ia-geral-core" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor={theme.accent2} />
          <stop offset="1" stopColor={theme.accent} />
        </radialGradient>
        <radialGradient id="ia-geral-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={theme.accent} stopOpacity="0.35" />
          <stop offset="1" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="170" cy="170" r="168" fill="url(#ia-geral-glow)" />
      {orbitas.map((o) => (
        <g key={o.r}>
          <circle cx="170" cy="170" r={o.r} fill="none" stroke={theme.accent} strokeOpacity={o.op} strokeWidth="1.5" strokeDasharray={o.r === 112 ? "4 6" : undefined} />
          {o.dots.map((a) => {
            const rad = (a * Math.PI) / 180;
            return <circle key={a} cx={170 + o.r * Math.cos(rad)} cy={170 + o.r * Math.sin(rad)} r="5" fill={a % 3 ? theme.accent2 : theme.accent} />;
          })}
        </g>
      ))}
      <circle cx="170" cy="170" r="46" fill="url(#ia-geral-core)" />
      <path d="M170 146 l6 16 l16 6 l-16 6 l-6 16 l-6 -16 l-16 -6 l16 -6Z" fill="#fff" />
    </svg>
  );
}

function PerfilCard({ item, i, lado }: { item: string; i: number; lado: "esq" | "dir" }) {
  const Icon = ICONES_PERFIL[i % ICONES_PERFIL.length];
  return (
    <Reveal delay={i * 60} y={12} className={`relative ${CARD} flex gap-3.5 p-4`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--accent)/10 text-(--accent)">
        <Icon className="h-5 w-5" />
      </span>
      <p className={`text-[15px] leading-relaxed ${TEXT}`}>{item}</p>
      {/* Ligação com o núcleo (só no desktop) */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 hidden h-px w-8 bg-(--accent)/40 lg:block ${lado === "esq" ? "-right-8" : "-left-8"}`}
      />
      <span
        aria-hidden="true"
        className={`absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-(--accent) lg:block ${lado === "esq" ? "-right-9" : "-left-9"}`}
      />
    </Reveal>
  );
}

// ── Para quem é: constelação ──────────────────────────────────────────────────

export function GeralAudience({ course, theme }: IaBlockProps) {
  const itens = course.targetAudience;
  const meio = Math.ceil(itens.length / 2);
  const esq = itens.slice(0, meio);
  const dir = itens.slice(meio);
  return (
    <section id="para-quem-ia" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Para quem é"
          title="No centro, você e a IA. Em volta, quem faz este curso"
          sub="Cada perfil gira em torno da mesma ideia: usar IA para trabalhar melhor. Veja em qual órbita você está."
          icon={<Target className="h-3.5 w-3.5" />}
        />

        <div className="mt-12 grid items-center gap-4 lg:grid-cols-[1fr_300px_1fr] lg:gap-16">
          <div className="space-y-4">
            {esq.map((item, i) => (
              <PerfilCard key={item} item={item} i={i} lado="esq" />
            ))}
          </div>
          <Reveal delay={120} className="order-first mx-auto w-44 lg:order-none lg:w-full">
            <Nucleo theme={theme} className="w-full" />
            <p className={`-mt-2 text-center text-sm font-bold ${TITLE}`}>
              Você <span className="text-(--accent)">+</span> IA
            </p>
          </Reveal>
          <div className="space-y-4">
            {dir.map((item, i) => (
              <PerfilCard key={item} item={item} i={i + meio} lado="dir" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Marco da linha do tempo: cartão do módulo com o número preso na linha. */
function MarcoCard({ i, title, topics, etapa, lado }: { i: number; title: string; topics: string[]; etapa: string; lado: "mob" | "esq" | "dir" }) {
  const pos = lado === "mob" ? "-left-14" : lado === "esq" ? "-right-[3.75rem]" : "-left-[3.75rem]";
  return (
    <li className={`relative ${lado === "mob" ? "ml-14" : ""}`}>
      <span
        className={`absolute ${pos} top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] font-mono text-sm font-bold text-white ring-4 ring-white dark:ring-[#120e1d]`}
      >
        {pad(i + 1)}
      </span>
      <Reveal delay={Math.min(i, 3) * 60} y={14} className={`${CARD} p-5`}>
        <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${ACCENT_TEXT}`}>
          {etapa} · módulo {pad(i + 1)}
        </p>
        <h3 className={`mt-1.5 text-lg font-bold leading-snug ${TITLE}`}>{title}</h3>
        <ul className="mt-3 space-y-2">
          {topics.map((topic) => (
            <li key={topic} className={`flex items-start gap-2.5 text-[15px] leading-relaxed ${TEXT}`}>
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
              {topic}
            </li>
          ))}
        </ul>
      </Reveal>
    </li>
  );
}

// ── Conteúdo: trilha de evolução ──────────────────────────────────────────────

const ETAPAS: { label: string; icon: LucideIcon }[] = [
  { label: "Prompt", icon: MessageSquare },
  { label: "Automação", icon: Workflow },
  { label: "Agente", icon: Bot },
];

function etapaDe(i: number, total: number, levelName: string) {
  if (total === ETAPAS.length) return ETAPAS[i];
  return { label: levelName, icon: ETAPAS[Math.min(i, ETAPAS.length - 1)].icon };
}

function Trilha({ course, selectedTier, onSelectTier }: IaBlockProps) {
  const n = course.tiers.length;
  return (
    <Reveal delay={80} className="mt-10">
      <ol className={`grid gap-3 ${n === 2 ? "sm:grid-cols-2" : n >= 3 ? "sm:grid-cols-3" : ""}`}>
        {course.tiers.map((t, i) => {
          const e = etapaDe(i, n, t.levelName);
          const Icon = e.icon;
          const on = i === selectedTier;
          const feito = i < selectedTier;
          const meta = tierMeta(course, t);
          return (
            <li key={t.levelName} className="relative">
              <button
                type="button"
                onClick={() => onSelectTier(i)}
                aria-pressed={on}
                disabled={n === 1}
                className={`flex h-full w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                  on
                    ? "border-transparent bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_18px_40px_-18px_var(--accent)]"
                    : `${BORDER} ${PANEL} hover:border-(--accent)/60`
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    on ? "bg-white/20 text-white" : feito ? "bg-(--accent) text-white" : "bg-(--accent)/10 text-(--accent)"
                  }`}
                >
                  {feito ? <Check className="h-6 w-6" strokeWidth={3} /> : <Icon className="h-6 w-6" />}
                </span>
                <span className="min-w-0">
                  <span className={`block font-mono text-xs font-bold ${on ? "text-white/80" : MUTED}`}>etapa {pad(i + 1)}</span>
                  <span className={`block text-xl font-bold leading-tight ${on ? "text-white" : TITLE}`}>{e.label}</span>
                  <span className={`block text-xs ${on ? "text-white/85" : MUTED}`}>
                    {t.levelName} · {meta?.aulas ?? t.totalHours}
                  </span>
                </span>
              </button>
              {i < n - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7e1f8] bg-white text-(--accent) dark:border-white/10 dark:bg-[#1a1429] sm:flex"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {n > 1 && (
        <>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-(--accent)/10" aria-hidden="true">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))] transition-all duration-500"
              style={{ width: `${((selectedTier + 1) / n) * 100}%` }}
            />
          </div>
          <p className={`mx-auto mt-3 max-w-xl text-center text-sm ${MUTED}`}>
            <span className={`font-semibold ${TEXT}`}>Pra quem é este nível: </span>
            {TIER_GUIDE[course.tiers[selectedTier].levelName] ?? course.tiers[selectedTier].outcome}
          </p>
        </>
      )}
    </Reveal>
  );
}

export function GeralProgram(props: IaBlockProps) {
  const { course, selectedTier, onSelectTier } = props;
  const tier = course.tiers[selectedTier];
  const n = course.tiers.length;
  const etapa = etapaDe(selectedTier, n, tier.levelName);
  const proxima = selectedTier < n - 1 ? etapaDe(selectedTier + 1, n, course.tiers[selectedTier + 1].levelName) : null;

  return (
    <section id="conteudo-ia" className={`scroll-mt-6 border-y ${BORDER} ${PANEL} py-20`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Conteúdo programático"
          title="Uma trilha de evolução: do prompt ao agente"
          sub="Cada nível é uma etapa da trilha. Escolha a etapa e acompanhe os módulos na linha do tempo."
          icon={<TrendingUp className="h-3.5 w-3.5" />}
        />
        <Trilha {...props} />

        {/* Linha do tempo: uma coluna no celular; no desktop, zigue-zague com a direita deslocada */}
        <div className="relative mt-14">
          <span aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-0.5 bg-[linear-gradient(var(--accent),var(--accent-2))] opacity-40 md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-6 md:hidden">
            {tier.modules.map((m, i) => (
              <MarcoCard key={`${tier.levelName}-${m.title}`} i={i} title={m.title} topics={m.topics} etapa={etapa.label} lado="mob" />
            ))}
          </ol>
          <div className="hidden gap-20 md:grid md:grid-cols-2">
            {(["esq", "dir"] as const).map((lado) => (
              <ol key={lado} className={`space-y-8 ${lado === "dir" ? "pt-28" : ""}`}>
                {tier.modules.map((m, i) =>
                  (i % 2 === 0) === (lado === "esq") ? (
                    <MarcoCard key={`${tier.levelName}-${m.title}`} i={i} title={m.title} topics={m.topics} etapa={etapa.label} lado={lado} />
                  ) : null,
                )}
              </ol>
            ))}
          </div>
        </div>

        {/* Etapa concluída */}
        <Reveal className="relative mt-10">
          <GradientFrame>
            <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${ACCENT_TEXT}`}>Etapa concluída · {etapa.label}</p>
            <p className={`mt-2 text-base font-semibold leading-relaxed sm:text-lg ${TITLE}`}>{tier.outcome}</p>
            <ToolList tools={tier.tools} label="Ferramentas desta etapa" />
            {proxima && (
              <button
                type="button"
                onClick={() => {
                  onSelectTier(selectedTier + 1);
                  document.getElementById("conteudo-ia")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--accent) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--accent-hover)"
              >
                Próxima etapa: {proxima.label} <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </GradientFrame>
        </Reveal>
      </div>
    </section>
  );
}
