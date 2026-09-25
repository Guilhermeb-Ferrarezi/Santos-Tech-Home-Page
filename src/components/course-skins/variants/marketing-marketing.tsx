import { BarChart3, Compass, FileText, Mail, Megaphone, PieChart, Search, Share2, Sparkles, StickyNote } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  ConteudoSection,
  ConversaLink,
  PublicoSection,
  StepHeading,
  TierPicker,
  ToolsRow,
  type MktBlockProps,
} from "@/components/course-skins/variants/marketing-kit";
import { BODY, CARD, INK, KICKER, SOFT, pad2, ritmo, useMarcados } from "@/components/course-skins/variants/marketing-tokens";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Marketing Digital (multicanal). "Para quem é" é o quadro de planejamento de
 * uma estratégia, com cada perfil numa nota adesiva (a pessoa carimba as que
 * são ela). O conteúdo é o mix de canais: uma barra mostra o peso de cada canal
 * no curso (pela quantidade real de tópicos) e cada módulo é o painel do canal.
 */

const NOTAS = [
  { bg: "bg-[#fff1b8] dark:bg-[#4a3d12]", rot: "-rotate-[1.6deg]" },
  { bg: "bg-[#ffd9d6] dark:bg-[#4a1c22]", rot: "rotate-[1.2deg]" },
  { bg: "bg-[#ffe6c7] dark:bg-[#4a2c14]", rot: "-rotate-[0.6deg]" },
  { bg: "bg-white dark:bg-[#2b1a1f]", rot: "rotate-[1.8deg]" },
  { bg: "bg-[#ffe0ee] dark:bg-[#47192e]", rot: "-rotate-[1.2deg]" },
  { bg: "bg-[#fff1b8] dark:bg-[#4a3d12]", rot: "rotate-[0.8deg]" },
];

function Publico({ course, whatsappUrl }: MktBlockProps) {
  const [carimbados, alternar] = useMarcados();
  return (
    <PublicoSection plain>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <StepHeading
          step="01"
          label="Público-alvo · Briefing"
          Icon={StickyNote}
          title="Este curso é ideal se você..."
          sub="O quadro de planejamento da campanha: cada nota é um perfil de aluno. Clique nas que são você."
        />
        {carimbados.size > 0 && (
          <Reveal>
            <ConversaLink href={whatsappUrl} />
          </Reveal>
        )}
      </div>

      <Reveal delay={80} className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border-[6px] border-[#e9dcd9] bg-[#fbfaf8] p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-[#18100f] sm:p-8">
          {/* grade do quadro */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(120,40,50,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(120,40,50,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-wrap items-center gap-3">
            <span className={`rounded-md bg-(--hero-bg) px-2.5 py-1 text-xs font-black text-white`}>Briefing</span>
            <span className={`text-sm font-bold ${INK}`}>Público da campanha · {course.nome}</span>
            <span className={`ml-auto text-xs font-bold ${SOFT}`}>
              {carimbados.size} de {course.targetAudience.length} carimbadas
            </span>
          </div>
          <div className="relative mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {course.targetAudience.map((item, i) => {
              const s = NOTAS[i % NOTAS.length];
              const on = carimbados.has(i);
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={on}
                  onClick={() => alternar(i)}
                  className={`group relative min-h-[160px] p-5 pt-7 text-left shadow-[0_14px_24px_-16px_rgba(60,20,20,0.55)] transition hover:rotate-0 hover:scale-[1.02] ${s.bg} ${s.rot}`}
                >
                  {/* fita adesiva */}
                  <span className="absolute left-1/2 top-0 h-5 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] bg-white/70 shadow-sm dark:bg-white/20" aria-hidden="true" />
                  <span className={`block text-xs font-black ${SOFT}`}>Persona {pad2(i)}</span>
                  <span className={`mt-2 block text-base font-bold leading-snug ${INK}`}>{item}</span>
                  {on && (
                    <span className="absolute -bottom-3 right-3 rotate-[-10deg] rounded-md border-2 border-(--accent) bg-white px-2 py-0.5 text-xs font-black uppercase tracking-wider text-(--accent) dark:bg-[#1f1216]">
                      Sou eu
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>
    </PublicoSection>
  );
}

/** Canal do módulo pelo título (com canal genérico de reserva). */
function canal(titulo: string): { nome: string; Icon: LucideIcon } {
  if (/google/i.test(titulo)) return { nome: "Busca paga", Icon: Search };
  if (/meta|facebook|instagram/i.test(titulo)) return { nome: "Social pago", Icon: Share2 };
  if (/seo|conteúdo/i.test(titulo)) return { nome: "Orgânico e conteúdo", Icon: FileText };
  if (/e-mail|automa/i.test(titulo)) return { nome: "E-mail e automação", Icon: Mail };
  if (/\bIA\b|analytics|dados/i.test(titulo)) return { nome: "IA e dados", Icon: Sparkles };
  if (/fundament|estratég/i.test(titulo)) return { nome: "Estratégia", Icon: Compass };
  return { nome: "Canal", Icon: Megaphone };
}

const CORES = ["var(--accent)", "var(--accent-2)", "#fb923c", "#f472b6", "#9f1239", "#a78bfa", "#34d399"];

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const total = tier.modules.reduce((s, m) => s + m.topics.length, 0) || 1;
  const maior = Math.max(1, ...tier.modules.map((m) => m.topics.length));
  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={PieChart}
        title="O que você vai aprender"
        sub="O curso como um mix de canais: cada módulo é um canal da estratégia, com o peso que ele tem no conteúdo."
      />
      <TierPicker {...p} unidade="canais" />

      {/* Mix de canais */}
      <Reveal delay={60} className="mt-10">
        <div className="rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-white/10 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm font-black">Mix de canais · {tier.levelName}</p>
            <p className="text-xs text-white/60">peso de cada canal = tópicos no curso</p>
          </div>
          <div className="mt-4 flex h-5 overflow-hidden rounded-full ring-1 ring-white/10">
            {tier.modules.map((m, i) => (
              <span key={m.title} className="h-full" style={{ flexGrow: m.topics.length, flexBasis: 0, background: CORES[i % CORES.length] }} title={m.title} />
            ))}
          </div>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {tier.modules.map((m, i) => (
              <li key={m.title} className="flex items-center gap-2 text-white/85">
                <span className="h-3 w-3 shrink-0 rounded-sm ring-1 ring-white/20" style={{ background: CORES[i % CORES.length] }} />
                <span className="truncate">{canal(m.title).nome}</span>
                <span className="ml-auto font-mono text-xs text-white/55">{Math.round((m.topics.length / total) * 100)}%</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Painel de cada canal */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tier.modules.map((m, i) => {
          const c = canal(m.title);
          const cor = CORES[i % CORES.length];
          return (
            <Reveal key={`${tier.levelName}-${m.title}`} delay={(i % 3) * 60}>
              <article className={`flex h-full flex-col overflow-hidden rounded-2xl ${CARD}`}>
                <span className="h-1.5" style={{ background: cor }} />
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: `color-mix(in srgb, ${cor} 85%, #1f1216)` }}>
                      <c.Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className={`${KICKER} ${SOFT}`}>
                        Canal {pad2(i)} · {c.nome}
                      </p>
                      <h3 className={`text-base font-black leading-snug ${INK}`}>{m.title}</h3>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {m.topics.map((topic) => (
                      <li key={topic} className={`flex gap-2.5 text-sm leading-snug ${BODY}`}>
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: cor }} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-3 border-t border-[#f3e4e0] px-5 py-3 dark:border-white/10">
                  <BarChart3 className="h-4 w-4 shrink-0 text-(--accent)" />
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#f3e4e0] dark:bg-white/10">
                    <span className="block h-full rounded-full" style={{ width: `${(m.topics.length / maior) * 100}%`, background: cor }} />
                  </span>
                  <span className={`text-xs font-bold ${SOFT}`}>{m.topics.length} tópicos</span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={80} className="mt-6">
        <div className="rounded-2xl border-2 border-dashed border-(--accent)/40 p-5 sm:p-6">
          <p className={`${KICKER} text-(--accent)`}>Resultado da estratégia · {tier.levelName}</p>
          <OutcomeText text={tier.outcome} className={`mt-2 text-base leading-relaxed sm:text-lg ${INK}`} />
          <p className={`mt-2 text-xs ${SOFT}`}>{ritmo(course, tier)}</p>
        </div>
      </Reveal>

      <ToolsRow tools={tier.tools} label="Ferramentas do mix" />
    </ConteudoSection>
  );
}

export { Publico as MarketingPublico, Conteudo as MarketingConteudo };
