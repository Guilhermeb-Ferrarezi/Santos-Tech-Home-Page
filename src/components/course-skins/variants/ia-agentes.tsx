import { useState } from "react";
import {
  Bot,
  Brain,
  Briefcase,
  Check,
  ChevronDown,
  Database,
  Globe,
  Mail,
  Plug,
  Rocket,
  Rows3,
  Users,
  Webhook,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import { tierMeta } from "@/components/course-skins/shared";
import type { CourseTheme } from "@/lib/course-themes";
import {
  ACCENT_TEXT,
  BORDER,
  GradientFrame,
  Heading,
  MUTED,
  PANEL,
  SHADOW,
  TEXT,
  TITLE,
  TierIntro,
  ToolList,
  type IaBlockProps,
} from "@/components/course-skins/variants/ia-kit";
import { pad } from "@/components/course-skins/variants/ia-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Agentes de IA: "Para quem é" é a fila de tarefas que o agente assume (cada
 * perfil vira uma tarefa com a ferramenta que o agente chamaria) e o conteúdo é
 * um fluxo de nós, do gatilho à ação final, com um nó expansível por módulo.
 */

/** Ferramenta que o agente "chama" em cada tarefa da fila (decorativo, cíclico). */
const TAREFAS: { icon: LucideIcon; call: string }[] = [
  { icon: Zap, call: "processo.automatizar()" },
  { icon: Workflow, call: "llm.decidir(próximo_passo)" },
  { icon: Briefcase, call: "produto.construir()" },
  { icon: Mail, call: "gmail.ler() → crm.atualizar()" },
  { icon: Globe, call: "web.pesquisar()" },
  { icon: Plug, call: "cliente.entregar(resultado)" },
];

/** Tipo de nó conforme o assunto do módulo (ícone + rótulo estilo editor de fluxo). */
function tipoDoNo(title: string): { icon: LucideIcon; kind: string } {
  const t = title.toLowerCase();
  if (/projeto/.test(t)) return { icon: Rocket, kind: "Deploy" };
  if (/mem[óo]ria/.test(t)) return { icon: Database, kind: "Memória" };
  if (/rag|conhecimento/.test(t)) return { icon: Rows3, kind: "Base de conhecimento" };
  if (/multi/.test(t)) return { icon: Users, kind: "Multiagente" };
  if (/api|http|integra|escala/.test(t)) return { icon: Plug, kind: "HTTP Request" };
  if (/fundamento/.test(t)) return { icon: Brain, kind: "Conceito" };
  return { icon: Bot, kind: "AI Agent" };
}

/** Tela do monitor: um mini fluxo de nós (SVG 400×320). */
function FlowScreen({ theme, x, y, w, h }: { theme: CourseTheme; x: number; y: number; w: number; h: number }) {
  const cy = y + h / 2;
  const nodes = [
    { cx: x + 18, fill: "#fff", op: 0.25 },
    { cx: x + w / 2, fill: theme.accent, op: 1 },
    { cx: x + w - 18, fill: theme.accent2, op: 1 },
  ];
  return (
    <g>
      <path d={`M${x + 28} ${cy} H${x + w / 2 - 16}`} stroke="#fff" strokeOpacity="0.35" strokeWidth="2" />
      <path d={`M${x + w / 2 + 16} ${cy} C${x + w / 2 + 34} ${cy} ${x + w - 44} ${cy - 22} ${x + w - 28} ${cy - 22}`} stroke="#fff" strokeOpacity="0.35" strokeWidth="2" fill="none" />
      <path d={`M${x + w / 2 + 16} ${cy} C${x + w / 2 + 34} ${cy} ${x + w - 44} ${cy + 22} ${x + w - 28} ${cy + 22}`} stroke="#fff" strokeOpacity="0.35" strokeWidth="2" fill="none" />
      <rect x={nodes[0].cx - 10} y={cy - 10} width="20" height="20" rx="10" fill="#fff" fillOpacity="0.25" />
      <rect x={nodes[1].cx - 16} y={cy - 14} width="32" height="28" rx="7" fill={theme.accent} />
      <circle cx={nodes[1].cx} cy={cy} r="5" fill="#fff" />
      <rect x={x + w - 28} y={cy - 30} width="20" height="16" rx="4" fill={theme.accent2} />
      <rect x={x + w - 28} y={cy + 14} width="20" height="16" rx="4" fill="#fff" fillOpacity="0.5" />
    </g>
  );
}

// ── Para quem é: a fila de tarefas do agente ──────────────────────────────────

export function AgentesAudience({ course, theme, tema }: IaBlockProps) {
  const n = course.targetAudience.length;
  return (
    <section id="para-quem-ia" className="sb-bleed py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,400px)]">
          <Heading
            eyebrow="Para quem é"
            title="A fila de tarefas do seu futuro agente"
            sub="Cada perfil abaixo é uma tarefa que um agente bem construído assume sozinho. Se uma delas é a sua, o curso foi feito pra você."
          />
          <Reveal delay={120} className="hidden lg:block">
            <PersonAtDesk theme={theme} tema={tema} renderScreen={(box) => <FlowScreen theme={theme} {...box} />} className="w-full" />
          </Reveal>
        </div>

        <Reveal delay={80} className={`mt-10 overflow-hidden rounded-3xl border ${BORDER} ${PANEL} ${SHADOW}`}>
          <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 border-b ${BORDER} px-4 py-3.5 sm:px-6`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white">
              <Bot className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className={`text-sm font-bold ${TITLE}`}>Agente Santos Tech</p>
              <p className={`text-xs ${MUTED}`}>Fila de tarefas · {n} tarefas assumidas</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              ativo
            </span>
          </div>

          <ol className={`divide-y divide-[#ece7f8] dark:divide-white/10`}>
            {course.targetAudience.map((item, i) => {
              const t = TAREFAS[i % TAREFAS.length];
              const Icon = t.icon;
              const rodando = i === 0;
              return (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 60}
                  y={10}
                  className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-2 px-4 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-6"
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${BORDER} bg-(--accent)/8 text-(--accent)`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className={`font-mono text-xs ${MUTED}`}>
                      <span className={`font-bold ${ACCENT_TEXT}`}>T-{pad(i + 1)}</span> · {t.call}
                    </p>
                    <p className={`mt-1 text-[15px] leading-relaxed ${TEXT}`}>{item}</p>
                  </div>
                  <span
                    className={`col-start-2 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold sm:col-start-3 ${
                      rodando ? "bg-(--accent) text-white" : "bg-(--accent)/10 text-[#6d28d9] dark:text-[#c4b5fd]"
                    }`}
                  >
                    {rodando ? <Workflow className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                    {rodando ? "executando" : "assumida"}
                  </span>
                </Reveal>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

// ── Conteúdo: fluxo de nós, do gatilho à ação ────────────────────────────────

function Connector() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div className="h-9 w-0.5 bg-[linear-gradient(var(--accent),var(--accent-2))] opacity-50" />
    </div>
  );
}

function Port({ side }: { side: "top" | "bottom" }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-(--accent) bg-white dark:bg-[#171126] ${side === "top" ? "-top-1.5" : "-bottom-1.5"}`}
    />
  );
}

function ModuleNode({
  index,
  title,
  topics,
  open,
  onToggle,
}: {
  index: number;
  title: string;
  topics: string[];
  open: boolean;
  onToggle: () => void;
}) {
  const { icon: Icon, kind } = tipoDoNo(title);
  return (
    <div className={`relative rounded-2xl border ${open ? "border-(--accent)/50" : BORDER} bg-white shadow-[0_18px_40px_-28px_rgba(76,29,149,0.5)] transition dark:bg-[#171126]`}>
      <Port side="top" />
      <Port side="bottom" />
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center gap-4 p-4 text-left sm:px-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_8px_20px_-10px_var(--accent)]">
          <Icon className="h-6 w-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block font-mono text-xs ${MUTED}`}>
            nó {pad(index + 1)} · {kind}
          </span>
          <span className={`mt-0.5 block text-base font-bold leading-snug sm:text-lg ${TITLE}`}>{title}</span>
        </span>
        <span className={`hidden shrink-0 text-xs font-semibold sm:inline ${MUTED}`}>{topics.length} tópicos</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180 text-(--accent)" : MUTED}`} />
      </button>
      {open && (
        <ul className={`grid gap-x-6 gap-y-2.5 border-t ${BORDER} p-4 sm:grid-cols-2 sm:px-5 sm:pb-5`}>
          {topics.map((topic) => (
            <li key={topic} className={`flex items-start gap-2.5 text-[15px] leading-relaxed ${TEXT}`}>
              <span className="mt-[9px] h-1.5 w-3 shrink-0 rounded-full bg-(--accent)/70" />
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Flow({ course, selectedTier }: IaBlockProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const multiTier = course.tiers.length > 1;
  const [abertos, setAbertos] = useState<Set<number>>(() => new Set([0]));
  const todos = abertos.size === tier.modules.length;

  const alternar = (i: number) =>
    setAbertos((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="mt-10">
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={() => setAbertos(todos ? new Set() : new Set(tier.modules.map((_, i) => i)))}
          className={`rounded-full border ${BORDER} bg-white px-3.5 py-1.5 text-xs font-semibold transition hover:border-(--accent)/60 dark:bg-white/5 ${TEXT}`}
        >
          {todos ? "Recolher todos os nós" : "Expandir todos os nós"}
        </button>
      </div>

      {/* Gatilho */}
      <div className="flex justify-center">
        <div className={`relative inline-flex items-center gap-3 rounded-full border ${BORDER} bg-white py-2 pl-2 pr-5 shadow-sm dark:bg-[#171126]`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Webhook className="h-4.5 w-4.5" />
          </span>
          <span className="min-w-0">
            <span className={`block font-mono text-[11px] ${MUTED}`}>gatilho</span>
            <span className={`block text-sm font-bold ${TITLE}`}>
              {multiTier ? `Você começa o nível ${tier.levelName}` : "Você começa agora"} · {meta?.aulas ?? tier.totalHours}
            </span>
          </span>
          <Port side="bottom" />
        </div>
      </div>

      {tier.modules.map((m, i) => (
        <Reveal key={m.title} delay={Math.min(i, 3) * 60}>
          <Connector />
          <ModuleNode index={i} title={m.title} topics={m.topics} open={abertos.has(i)} onToggle={() => alternar(i)} />
        </Reveal>
      ))}

      <Connector />
      <Reveal>
        <GradientFrame className="relative">
          <p className={`flex items-center gap-2 font-mono text-xs font-bold ${ACCENT_TEXT}`}>
            <Rocket className="h-4 w-4" /> ação final · o que o fluxo entrega
          </p>
          <OutcomeText text={tier.outcome} className={`mt-2 text-base leading-relaxed sm:text-lg ${TITLE}`} />
          <ToolList tools={tier.tools} label={multiTier ? "Credenciais conectadas neste nível" : "Credenciais conectadas neste curso"} />
        </GradientFrame>
      </Reveal>
    </div>
  );
}

export function AgentesProgram(props: IaBlockProps) {
  const tier = props.course.tiers[props.selectedTier];
  return (
    <section id="conteudo-ia" className={`sb-bleed relative scroll-mt-6 overflow-hidden border-y ${BORDER} ${PANEL} py-20`}>
      {/* Canvas pontilhado de editor de fluxo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-25"
        style={{ backgroundImage: "radial-gradient(#d8cff3 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Conteúdo programático"
          title="Um fluxo de agente, um nó por módulo"
          sub="Do gatilho à ação final: abra cada nó para ver o que você vai construir nele."
          icon={<Workflow className="h-3.5 w-3.5" />}
        />
        <TierIntro {...props} />
        <Flow key={tier.levelName} {...props} />
      </div>
    </section>
  );
}
