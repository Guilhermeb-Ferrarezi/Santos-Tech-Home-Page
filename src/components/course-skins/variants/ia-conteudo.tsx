import { CalendarDays, ChevronLeft, ChevronRight, Clock, Lightbulb, Palette, PenLine, Send, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import { tierMeta } from "@/components/course-skins/shared";
import type { CourseTheme } from "@/lib/course-themes";
import {
  ACCENT_TEXT,
  BORDER,
  CARD,
  GradientFrame,
  Heading,
  MUTED,
  PANEL,
  SHADOW,
  SOFT,
  TEXT,
  TITLE,
  TierIntro,
  ToolList,
  type IaBlockProps,
} from "@/components/course-skins/variants/ia-kit";
import { pad } from "@/components/course-skins/variants/ia-util";

/**
 * Criação de Conteúdo com IA: "Para quem é" é o calendário editorial da semana
 * (cada perfil é a pauta de um dia, com formato e horário) e o conteúdo é a
 * esteira de produção em quadro: ideia → roteiro → arte → post, com os módulos
 * distribuídos pelas etapas.
 */

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

/** Formato de cada pauta (decorativo, cíclico). A cor só marca a etiqueta. */
const FORMATOS: { label: string; hora: string; tag: string; bar: string }[] = [
  { label: "Reels", hora: "09:00", tag: "bg-fuchsia-500/12 text-fuchsia-700 dark:text-fuchsia-300", bar: "bg-fuchsia-500" },
  { label: "Carrossel", hora: "12:30", tag: "bg-violet-500/12 text-violet-700 dark:text-violet-300", bar: "bg-violet-500" },
  { label: "Story", hora: "18:00", tag: "bg-sky-500/12 text-sky-700 dark:text-sky-300", bar: "bg-sky-500" },
  { label: "Post", hora: "10:15", tag: "bg-amber-500/15 text-amber-800 dark:text-amber-300", bar: "bg-amber-500" },
  { label: "Vídeo curto", hora: "19:30", tag: "bg-rose-500/12 text-rose-700 dark:text-rose-300", bar: "bg-rose-500" },
  { label: "Newsletter", hora: "08:00", tag: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300", bar: "bg-emerald-500" },
];

/** Tela do monitor: calendário com posts agendados (SVG 400×320). */
function CalendarScreen({ theme, x, y, w, h }: { theme: CourseTheme; x: number; y: number; w: number; h: number }) {
  const cols = 5;
  const rows = 3;
  const cw = (w - 12 - (cols - 1) * 3) / cols;
  const ch = (h - 22 - (rows - 1) * 3) / rows;
  const marcados: Record<number, string> = { 1: theme.accent, 3: theme.accent2, 5: "#38bdf8", 8: theme.accent, 11: "#fbbf24", 13: theme.accent2 };
  return (
    <g>
      <rect x={x + 6} y={y + 5} width={w * 0.4} height="7" rx="3.5" fill="#fff" fillOpacity="0.45" />
      {Array.from({ length: cols * rows }, (_, i) => {
        const cx = x + 6 + (i % cols) * (cw + 3);
        const cy = y + 17 + Math.floor(i / cols) * (ch + 3);
        return (
          <g key={i}>
            <rect x={cx} y={cy} width={cw} height={ch} rx="3" fill="#fff" fillOpacity="0.08" />
            {marcados[i] && <rect x={cx + 3} y={cy + ch - 10} width={cw - 6} height="6" rx="3" fill={marcados[i]} />}
          </g>
        );
      })}
    </g>
  );
}

// ── Para quem é: calendário editorial ─────────────────────────────────────────

export function ConteudoAudience({ course, theme, tema }: IaBlockProps) {
  return (
    <section id="para-quem-ia" className="py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.45fr] lg:px-8">
        <div className="lg:sticky lg:top-10">
          <Heading
            eyebrow="Para quem é"
            title="A semana de quem produz com a gente"
            sub="Cada pauta do calendário é uma situação real de quem nos procura. Se o seu dia a dia está aqui, o curso é pra você."
            icon={<CalendarDays className="h-3.5 w-3.5" />}
          />
          <Reveal delay={120}>
            <PersonAtDesk theme={theme} tema={tema} renderScreen={(box) => <CalendarScreen theme={theme} {...box} />} className="mt-8 hidden w-full max-w-md lg:block" />
          </Reveal>
        </div>

        <Reveal delay={60} className={`overflow-hidden rounded-3xl border ${BORDER} ${PANEL} ${SHADOW}`}>
          <div className={`flex flex-wrap items-center gap-3 border-b ${BORDER} px-4 py-3.5 sm:px-6`}>
            <CalendarDays className="h-5 w-5 text-(--accent)" />
            <p className={`text-sm font-bold ${TITLE}`}>Calendário editorial</p>
            <span className={`text-xs ${MUTED}`}>semana 1 · {course.targetAudience.length} pautas</span>
            <span className={`ml-auto flex items-center gap-1 ${MUTED}`} aria-hidden="true">
              <span className={`flex h-7 w-7 items-center justify-center rounded-lg border ${BORDER}`}>
                <ChevronLeft className="h-4 w-4" />
              </span>
              <span className={`flex h-7 w-7 items-center justify-center rounded-lg border ${BORDER}`}>
                <ChevronRight className="h-4 w-4" />
              </span>
            </span>
          </div>

          <ol className={`grid gap-px ${SOFT} bg-[#ece7f8] dark:bg-white/10 sm:grid-cols-2 xl:grid-cols-3`}>
            {course.targetAudience.map((item, i) => {
              const f = FORMATOS[i % FORMATOS.length];
              return (
                <Reveal as="li" key={item} delay={i * 60} y={10} className={`flex flex-col ${PANEL} p-4 sm:p-5`}>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-xs font-bold uppercase tracking-[0.18em] ${MUTED}`}>{DIAS[i % DIAS.length]}</span>
                    <span className={`text-2xl font-bold leading-none ${TITLE}`}>{pad(i + 1)}</span>
                    <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold ${f.tag}`}>{f.label}</span>
                  </div>
                  <div className={`mt-3 flex-1 rounded-xl border ${BORDER} ${SOFT} p-3`}>
                    <span className={`mb-2 block h-1 w-10 rounded-full ${f.bar}`} aria-hidden="true" />
                    <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${ACCENT_TEXT}`}>Pauta</p>
                    <p className={`mt-1 text-[15px] leading-relaxed ${TEXT}`}>{item}</p>
                  </div>
                  <p className={`mt-3 flex items-center gap-1.5 text-xs ${MUTED}`}>
                    <Clock className="h-3.5 w-3.5" /> agendado · {f.hora}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

// ── Conteúdo: esteira de produção em quadro ───────────────────────────────────

const ETAPAS: { label: string; icon: LucideIcon; desc: string }[] = [
  { label: "Ideia", icon: Lightbulb, desc: "pauta e referências" },
  { label: "Roteiro", icon: PenLine, desc: "texto e copy" },
  { label: "Arte", icon: Palette, desc: "imagem, vídeo e voz" },
  { label: "Post", icon: Send, desc: "publicar e medir" },
];

export function ConteudoProgram(props: IaBlockProps) {
  const { course, selectedTier } = props;
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const multiTier = course.tiers.length > 1;
  const n = tier.modules.length;
  const nCols = Math.min(ETAPAS.length, n);
  // Distribui os módulos pelas etapas em ordem (ex.: 5 módulos → 2, 1, 1, 1).
  const colunas = ETAPAS.slice(0, nCols).map((e, c) => ({
    ...e,
    mods: tier.modules.map((m, i) => ({ m, i })).filter(({ i }) => Math.floor((i * nCols) / n) === c),
  }));

  return (
    <section id="conteudo-ia" className={`scroll-mt-6 border-y ${BORDER} ${SOFT} py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Conteúdo programático"
          title="A esteira de produção do curso"
          sub="Os módulos seguem o caminho de uma peça de conteúdo: da ideia ao post publicado."
          icon={<Send className="h-3.5 w-3.5" />}
        />
        <TierIntro {...props} />

        <p className={`mt-10 text-center text-xs font-semibold ${MUTED}`}>
          <span className={ACCENT_TEXT}>{tier.levelName}</span> · {meta?.aulas ?? tier.totalHours} · {n} módulos em {nCols} etapas
        </p>

        <div className={`mt-4 grid gap-4 md:grid-cols-2 ${nCols >= 4 ? "xl:grid-cols-4" : nCols === 3 ? "xl:grid-cols-3" : ""}`}>
          {colunas.map((col, c) => {
            const Icon = col.icon;
            return (
              <Reveal key={col.label} delay={c * 80} className={`flex flex-col rounded-3xl border ${BORDER} bg-[#f1edfc] p-3 dark:bg-white/[0.03]`}>
                <div className="flex items-center gap-2.5 px-1.5 pb-3 pt-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-bold ${TITLE}`}>
                      {c + 1}. {col.label}
                    </span>
                    <span className={`block text-xs ${MUTED}`}>{col.desc}</span>
                  </span>
                  <span className={`rounded-full bg-white px-2 py-0.5 text-xs font-bold dark:bg-white/10 ${ACCENT_TEXT}`}>{col.mods.length}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  {col.mods.map(({ m, i }) => (
                    <article key={m.title} className={`${CARD} p-4`}>
                      <p className={`font-mono text-xs font-bold ${MUTED}`}>Módulo {pad(i + 1)}</p>
                      <h3 className={`mt-1 text-base font-bold leading-snug ${TITLE}`}>{m.title}</h3>
                      <ul className="mt-3 space-y-1.5">
                        {m.topics.map((topic) => (
                          <li key={topic} className={`flex items-start gap-2 text-sm leading-relaxed ${TEXT}`}>
                            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Publicado: o resultado do nível */}
        <Reveal className="mt-8">
          <GradientFrame>
            <p className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${ACCENT_TEXT}`}>
              <Send className="h-3.5 w-3.5" /> Publicado · o que você entrega {multiTier ? "ao fim do nível" : "ao fim do curso"}
            </p>
            <p className={`mt-2 text-base font-semibold leading-relaxed sm:text-lg ${TITLE}`}>{tier.outcome}</p>
            <ToolList tools={tier.tools} label={multiTier ? "Ferramentas da esteira neste nível" : "Ferramentas da esteira neste curso"} />
          </GradientFrame>
        </Reveal>
      </div>
    </section>
  );
}
