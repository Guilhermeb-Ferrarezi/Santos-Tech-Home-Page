import { Binary, FileText, MessageSquareQuote, Quote, Scissors, Search, Sheet, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { tierMeta } from "@/components/course-skins/shared";
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
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * RAG: "Para quem é" é uma busca na base de conhecimento (cada perfil é um
 * documento recuperado, com o trecho citado e a similaridade) e o conteúdo é o
 * próprio pipeline: ingestão → pedaços → embeddings → busca → resposta com fonte,
 * em que cada módulo é um pedaço indexado e o resultado cita os módulos.
 */

/** Tipos de arquivo da base (decorativo, cíclico). Cores só na etiqueta. */
const ARQUIVOS: { ext: string; icon: LucideIcon; tag: string }[] = [
  { ext: "pdf", icon: FileText, tag: "bg-rose-500/12 text-rose-700 dark:text-rose-300" },
  { ext: "xlsx", icon: Sheet, tag: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300" },
  { ext: "docx", icon: FileText, tag: "bg-sky-500/12 text-sky-700 dark:text-sky-300" },
  { ext: "md", icon: FileText, tag: "bg-violet-500/12 text-violet-700 dark:text-violet-300" },
];

/** Hash simples e estável para desenhar "vetores" diferentes por texto. */
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function Vetor({ seed, n = 18, className = "" }: { seed: string; n?: number; className?: string }) {
  let h = hash(seed);
  const vals = Array.from({ length: n }, () => {
    h = Math.imul(h ^ (h >>> 13), 0x5bd1e995) >>> 0;
    return 0.2 + ((h % 1000) / 1000) * 0.8;
  });
  return (
    <span className={`flex h-5 items-end gap-[3px] ${className}`} aria-hidden="true">
      {vals.map((v, i) => (
        <span key={i} className="w-[4px] rounded-sm bg-(--accent)" style={{ height: `${Math.round(v * 100)}%`, opacity: 0.35 + v * 0.6 }} />
      ))}
    </span>
  );
}

// ── Para quem é: busca na base de conhecimento ────────────────────────────────

export function RagAudience({ course }: IaBlockProps) {
  const n = course.targetAudience.length;
  return (
    <section id="para-quem-ia" className="sb-bleed py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Para quem é"
          title="Buscamos na base: quem é o aluno deste curso?"
          sub="Cada documento recuperado é um perfil real de quem nos procura. O trecho citado é o que importa."
          icon={<Search className="h-3.5 w-3.5" />}
        />

        {/* Barra de busca */}
        <Reveal delay={100} className={`mx-auto mt-10 max-w-3xl rounded-2xl border ${BORDER} ${PANEL} p-2 ${SHADOW}`}>
          <div className="flex items-center gap-3 rounded-xl px-3 py-2">
            <Search className="h-5 w-5 shrink-0 text-(--accent)" />
            <span className={`min-w-0 flex-1 text-[15px] font-semibold ${TITLE}`}>Esse curso é pra mim?</span>
            <span className={`hidden rounded-lg border ${BORDER} px-2 py-1 font-mono text-[11px] sm:inline ${MUTED}`}>top-k = {n}</span>
          </div>
          <p className={`border-t ${BORDER} px-3 pb-1 pt-2 text-xs ${MUTED}`}>
            <span className={`font-semibold ${ACCENT_TEXT}`}>{n} trechos relevantes</span> em {n} documentos da base · ordenados por similaridade
          </p>
        </Reveal>

        {/* Documentos recuperados */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.targetAudience.map((item, i) => {
            const a = ARQUIVOS[i % ARQUIVOS.length];
            const Icon = a.icon;
            const sim = (0.96 - i * 0.03).toFixed(2).replace(".", ",");
            return (
              <Reveal key={item} delay={i * 60} y={14} className={`${CARD} flex flex-col p-5`}>
                <div className="flex items-center gap-3">
                  <span className={`relative flex h-11 w-9 shrink-0 items-end justify-center rounded-md border ${BORDER} bg-white pb-1 dark:bg-white/5`}>
                    <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-bl-sm border-b border-l border-[#e7e1f8] bg-[#f7f5ff] dark:border-white/10 dark:bg-white/10" />
                    <Icon className={`h-4 w-4 ${MUTED}`} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`truncate font-mono text-sm font-semibold ${TITLE}`}>perfil-{pad(i + 1)}.{a.ext}</p>
                    <p className={`text-xs ${MUTED}`}>trecho {i + 1} · pág. {(i % 3) + 1}</p>
                  </div>
                  <span className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-bold uppercase ${a.tag}`}>{a.ext}</span>
                </div>
                <blockquote className={`mt-4 flex-1 border-l-2 border-(--accent) pl-3.5 text-[15px] leading-relaxed ${TEXT}`}>
                  <Quote className="mb-1 h-4 w-4 text-(--accent)/60" aria-hidden="true" />
                  {item}
                </blockquote>
                <div className={`mt-4 flex items-center gap-3 border-t ${BORDER} pt-3`}>
                  <span className={`text-xs ${MUTED}`}>similaridade</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-(--accent)/10">
                    <span className="block h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" style={{ width: `${96 - i * 3}%` }} />
                  </span>
                  <span className={`font-mono text-xs font-bold ${ACCENT_TEXT}`}>{sim}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Conteúdo: o pipeline RAG ──────────────────────────────────────────────────

const ETAPAS: { icon: LucideIcon; label: string; desc: string }[] = [
  { icon: FileText, label: "Ingestão", desc: "PDFs, planilhas e páginas" },
  { icon: Scissors, label: "Pedaços", desc: "chunking com sobreposição" },
  { icon: Binary, label: "Embeddings", desc: "texto vira vetor" },
  { icon: Search, label: "Busca", desc: "top-k e reranking" },
  { icon: MessageSquareQuote, label: "Resposta", desc: "com a fonte citada" },
];

function Pipeline() {
  return (
    <Reveal delay={100} className="mt-10">
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
        {ETAPAS.map((e, i) => {
          const Icon = e.icon;
          const ultimo = i === ETAPAS.length - 1;
          return (
            <li key={e.label} className={`relative ${ultimo ? "col-span-2 sm:col-span-1" : ""}`}>
              <div className={`flex h-full items-center gap-3 rounded-2xl border ${BORDER} ${ultimo ? "bg-(--accent) text-white" : `${PANEL}`} p-3 lg:mx-2`}>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${ultimo ? "bg-white/20 text-white" : "bg-(--accent)/10 text-(--accent)"}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className={`block text-sm font-bold ${ultimo ? "text-white" : TITLE}`}>
                    <span className={`mr-1 font-mono text-xs ${ultimo ? "text-white/75" : MUTED}`}>{i + 1}</span>
                    {e.label}
                  </span>
                  <span className={`block text-xs leading-snug ${ultimo ? "text-white/85" : MUTED}`}>{e.desc}</span>
                </span>
              </div>
              {!ultimo && (
                <span aria-hidden="true" className="absolute -right-1.5 top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-(--accent) lg:block" />
              )}
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}

export function RagProgram(props: IaBlockProps) {
  const { course, selectedTier } = props;
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const multiTier = course.tiers.length > 1;
  return (
    <section id="conteudo-ia" className={`sb-bleed scroll-mt-6 border-y ${BORDER} ${SOFT} py-20`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Conteúdo programático"
          title="O curso segue o pipeline de um RAG"
          sub="Cada módulo é um pedaço indexado da trilha. No fim, a resposta cita os módulos que a sustentam."
          icon={<Binary className="h-3.5 w-3.5" />}
        />
        <TierIntro {...props} />
        <Pipeline />

        <p className={`mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold ${MUTED}`}>
          <span className={`font-mono ${ACCENT_TEXT}`}>índice: {tier.levelName.toLowerCase()}</span>
          <span aria-hidden="true">·</span> {tier.modules.length} pedaços <span aria-hidden="true">·</span> {meta?.aulas ?? tier.totalHours}
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {tier.modules.map((m, i) => (
            <Reveal key={`${tier.levelName}-${m.title}`} delay={Math.min(i, 3) * 60} y={14} className={`${CARD} overflow-hidden`}>
              <div className={`flex items-center gap-3 border-b ${BORDER} ${SOFT} px-4 py-2.5`}>
                <span className={`font-mono text-xs font-bold ${ACCENT_TEXT}`}>chunk_{pad(i + 1)}</span>
                <Vetor seed={m.title} className="ml-auto" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className={`text-base font-bold leading-snug sm:text-lg ${TITLE}`}>
                  <span className={`mr-2 inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-(--accent)/12 px-1 align-[2px] font-mono text-xs text-(--accent)`}>
                    [{i + 1}]
                  </span>
                  {m.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {m.topics.map((topic) => (
                    <li key={topic} className={`flex items-start gap-2.5 text-[15px] leading-relaxed ${TEXT}`}>
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Resposta com fonte */}
        <Reveal className="mt-10">
          <GradientFrame>
            <p className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${ACCENT_TEXT}`}>
              <Sparkles className="h-3.5 w-3.5" /> Resposta gerada · o que você consegue {multiTier ? "ao final do nível" : "ao final do curso"}
            </p>
            <OutcomeText text={tier.outcome} className={`mt-2 text-base leading-relaxed sm:text-lg ${TITLE}`} />
            <p className={`mt-3 flex flex-wrap items-center gap-1.5 text-xs ${MUTED}`}>
              Fontes:
              {tier.modules.map((m, i) => (
                <span key={m.title} title={m.title} className="rounded-md bg-(--accent)/12 px-1.5 py-0.5 font-mono font-bold text-(--accent)">
                  [{i + 1}]
                </span>
              ))}
            </p>
            <ToolList tools={tier.tools} label={multiTier ? "Stack usada neste nível" : "Stack usada neste curso"} />
          </GradientFrame>
        </Reveal>
      </div>
    </section>
  );
}
