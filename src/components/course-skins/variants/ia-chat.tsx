import { useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp, Check, Copy, Flag, MessageSquare, Pin, RotateCcw, SquarePen, ThumbsUp } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { PersonAtDesk } from "@/components/course-illustrations";
import { AiAvatar } from "@/components/course-skins/scenes/ia";
import { tierMeta } from "@/components/course-skins/shared";
import type { CourseTheme } from "@/lib/course-themes";
import {
  ACCENT_TEXT,
  BORDER,
  GradientFrame,
  Heading,
  LevelPicker,
  MUTED,
  PANEL,
  SHADOW,
  SOFT,
  TEXT,
  TITLE,
  ToolList,
  type IaBlockProps,
} from "@/components/course-skins/variants/ia-kit";
import { pad } from "@/components/course-skins/variants/ia-util";

/**
 * ChatGPT e IA para Profissionais: o curso É o chat. "Para quem é" é a resposta
 * do assistente à pergunta "esse curso é pra mim?" e o conteúdo é o próprio app,
 * com o histórico de conversas na lateral: cada módulo é uma conversa salva.
 */

function Bubble({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-end">
      {label && <span className={`mb-1 mr-1 text-[11px] font-semibold uppercase tracking-wider ${MUTED}`}>{label}</span>}
      <div className="max-w-[88%] rounded-3xl rounded-br-md bg-(--accent) px-4 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-14px_var(--accent)] sm:max-w-[75%]">
        {children}
      </div>
    </div>
  );
}

function Answer({ children, name = "Santos Tech" }: { children: ReactNode; name?: string }) {
  return (
    <div>
      <p className={`flex items-center gap-2.5 text-xs font-bold ${TITLE}`}>
        <AiAvatar className="h-7 w-7 sm:h-8 sm:w-8" />
        {name}
      </p>
      <div className="mt-2 sm:pl-[2.625rem]">{children}</div>
    </div>
  );
}

/** Tela do monitor: uma conversa em miniatura (SVG 400×320). */
function ChatScreen({ theme, x, y, w, h }: { theme: CourseTheme; x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x + w * 0.42} y={y + 7} width={w * 0.52} height="13" rx="6.5" fill={theme.accent} />
      <circle cx={x + 11} cy={y + 32} r="5" fill={theme.accent2} />
      <rect x={x + 20} y={y + 26} width={w * 0.6} height="9" rx="4.5" fill="#fff" fillOpacity="0.28" />
      <rect x={x + 20} y={y + 39} width={w * 0.45} height="9" rx="4.5" fill="#fff" fillOpacity="0.18" />
      <rect x={x + 6} y={y + h - 17} width={w - 12} height="12" rx="6" fill="none" stroke="#fff" strokeOpacity="0.3" />
      <circle cx={x + w - 12} cy={y + h - 11} r="4" fill={theme.accent} />
    </g>
  );
}

// ── Para quem é: o chat responde "esse curso é pra mim?" ─────────────────────

export function ChatAudience({ course, theme, tema, whatsappUrl, verConteudo }: IaBlockProps) {
  return (
    <section id="para-quem-ia" className="py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.25fr] lg:px-8">
        <div className="lg:sticky lg:top-10">
          <Heading eyebrow="Para quem é" title="Pergunte ao chat se o curso é pra você" sub="A resposta abaixo reúne as situações mais comuns de quem chega até nós procurando este curso." />
          <Reveal delay={120}>
            <PersonAtDesk theme={theme} tema={tema} renderScreen={(box) => <ChatScreen theme={theme} {...box} />} className="mt-8 hidden w-full max-w-md lg:block" />
          </Reveal>
        </div>

        <div className={`overflow-hidden rounded-3xl border ${BORDER} ${PANEL} ${SHADOW}`}>
          <div className={`flex items-center gap-2.5 border-b ${BORDER} px-5 py-3`}>
            <AiAvatar className="h-7 w-7" />
            <div className="min-w-0">
              <p className={`truncate text-sm font-bold ${TITLE}`}>Orientação de curso</p>
              <p className={`flex items-center gap-1.5 text-[11px] ${MUTED}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Santos Tech · online
              </p>
            </div>
          </div>

          <div className="space-y-6 p-4 sm:p-7">
            <Bubble>Esse curso é pra mim?</Bubble>
            <Answer>
              <p className={`text-[15px] ${TEXT}`}>É, sim, se você se reconhece em pelo menos uma destas situações:</p>
              <ul className="mt-4 space-y-2.5">
                {course.targetAudience.map((item, i) => (
                  <Reveal as="li" key={item} delay={i * 60} y={12} className={`flex gap-3 rounded-2xl border ${BORDER} ${SOFT} px-3.5 py-3 sm:px-4`}>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--accent)/12 text-(--accent)">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className={`text-[15px] leading-relaxed ${TEXT}`}>{item}</span>
                  </Reveal>
                ))}
              </ul>
              <p className={`mt-4 text-[15px] ${TEXT}`}>Se marcou alguma, o curso foi pensado pra você.</p>
              <div className={`mt-3 flex gap-3 ${MUTED}`} aria-hidden="true">
                <Copy className="h-4 w-4" />
                <ThumbsUp className="h-4 w-4" />
                <RotateCcw className="h-4 w-4" />
              </div>
            </Answer>

            <div className="flex flex-wrap justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={verConteudo}
                className={`inline-flex items-center gap-1.5 rounded-full border ${BORDER} bg-white px-4 py-2 text-sm font-semibold transition hover:border-(--accent)/60 dark:bg-white/5 ${TEXT}`}
              >
                O que vou aprender? <ArrowDown className="h-3.5 w-3.5" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-(--accent) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--accent-hover)"
              >
                <WhatsAppIcon className="h-4 w-4" /> Me identifiquei, quero conversar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Conteúdo: o app de chat, com o histórico de conversas na lateral ─────────

function ChatApp({ course, selectedTier, onSelectTier }: IaBlockProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const [open, setOpen] = useState(0);
  const m = tier.modules[open];
  const temProximo = open < tier.modules.length - 1;

  return (
    <div className={`mt-10 overflow-hidden rounded-3xl border ${BORDER} ${PANEL} ${SHADOW} lg:grid lg:grid-cols-[300px_1fr]`}>
      {/* Lateral: histórico */}
      <aside className={`border-b ${BORDER} ${SOFT} p-3 lg:border-b-0 lg:border-r`}>
        <div className={`flex items-center justify-between rounded-xl px-2 py-2 text-sm font-bold ${TITLE}`}>
          <span className="flex items-center gap-2">
            <AiAvatar className="h-6 w-6" /> Santos Tech · Chat
          </span>
          <SquarePen className={`h-4 w-4 ${MUTED}`} aria-hidden="true" />
        </div>
        <p className={`mt-3 px-2 text-[11px] font-bold uppercase tracking-[0.18em] ${MUTED}`}>Conversas · {tier.levelName}</p>
        <ul className="mt-1.5 space-y-0.5">
          {tier.modules.map((mod, i) => {
            const on = i === open;
            return (
              <li key={mod.title}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-pressed={on}
                  className={`flex w-full items-start gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm leading-snug transition ${
                    on ? `bg-white font-semibold shadow-sm ring-1 ring-(--accent)/25 dark:bg-white/10 ${TITLE}` : `${TEXT} hover:bg-white/70 dark:hover:bg-white/5`
                  }`}
                >
                  <MessageSquare className={`mt-0.5 h-4 w-4 shrink-0 ${on ? "text-(--accent)" : MUTED}`} />
                  <span className="min-w-0">
                    <span className={`mr-1.5 font-mono text-xs ${on ? ACCENT_TEXT : MUTED}`}>{pad(i + 1)}</span>
                    {mod.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Conversa aberta */}
      <div className="flex min-w-0 flex-col">
        <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${BORDER} px-4 py-3 sm:px-6`}>
          {course.tiers.length > 1 ? (
            <LevelPicker course={course} selected={selectedTier} onSelect={onSelectTier} />
          ) : (
            <span className={`rounded-xl border ${BORDER} px-3 py-1.5 text-sm font-bold ${TITLE}`}>{tier.levelName}</span>
          )}
          <span className={`text-xs font-semibold ${MUTED}`}>
            {meta?.aulas ?? tier.totalHours} · {tier.modules.length} conversas
          </span>
        </div>

        <div key={`${tier.levelName}-${open}`} className="flex-1 space-y-6 p-4 sm:p-7">
          <Bubble label={`Módulo ${pad(open + 1)}`}>Me ensina: {m.title}</Bubble>
          <Answer>
            <p className={`text-[15px] ${TEXT}`}>Claro! Neste módulo você vai praticar, com o professor do lado:</p>
            <ol className="mt-4 space-y-2">
              {m.topics.map((topic, i) => (
                <li key={topic} className={`flex gap-3 text-[15px] leading-relaxed ${TEXT}`}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-(--accent)/12 font-mono text-xs font-bold text-(--accent)">
                    {i + 1}
                  </span>
                  {topic}
                </li>
              ))}
            </ol>
            <div className={`mt-4 flex gap-3 ${MUTED}`} aria-hidden="true">
              <Copy className="h-4 w-4" />
              <ThumbsUp className="h-4 w-4" />
              <RotateCcw className="h-4 w-4" />
            </div>
          </Answer>
        </div>

        {/* Caixa de mensagem: leva à próxima conversa */}
        <div className="p-3 sm:p-4">
          <button
            type="button"
            onClick={() => setOpen(temProximo ? open + 1 : 0)}
            className={`group flex w-full items-center gap-3 rounded-2xl border ${BORDER} bg-white py-2 pl-4 pr-2 text-left transition hover:border-(--accent)/60 dark:bg-white/5`}
          >
            <span className={`min-w-0 flex-1 truncate text-sm ${MUTED}`}>
              {temProximo ? `E depois? ${tier.modules[open + 1].title}` : "Voltar para o primeiro módulo"}
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-(--accent) text-white transition group-hover:bg-(--accent-hover)">
              {temProximo ? <ArrowUp className="h-4 w-4" /> : <RotateCcw className="h-4 w-4" />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function ChatProgram(props: IaBlockProps) {
  const tier = props.course.tiers[props.selectedTier];
  const multiTier = props.course.tiers.length > 1;
  return (
    <section id="conteudo-ia" className={`scroll-mt-6 border-y ${BORDER} ${PANEL} py-20`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Conteúdo programático"
          title="Cada módulo é uma conversa salva"
          sub="Abra uma conversa no histórico para ver o que você vai praticar. Troque o nível no seletor de modelo."
        />
        <Reveal delay={100}>
          <ChatApp key={tier.levelName} {...props} />
        </Reveal>

        {/* Resposta fixada: o resultado do nível */}
        <Reveal delay={120} className="mt-6">
          <GradientFrame>
            <p className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] ${ACCENT_TEXT}`}>
              <Pin className="h-3.5 w-3.5" /> Resposta fixada{multiTier ? ` · ao final do nível ${tier.levelName}` : ""}
            </p>
            <p className={`mt-2 flex items-start gap-2 text-base font-semibold leading-relaxed sm:text-lg ${TITLE}`}>
              <Flag className="mt-1 h-4 w-4 shrink-0 text-(--accent)" />
              {tier.outcome}
            </p>
            <ToolList tools={tier.tools} label="Ferramentas usadas neste nível" />
          </GradientFrame>
        </Reveal>
      </div>
    </section>
  );
}
