import { Check, ClipboardCheck, Globe, MousePointerClick, Search } from "lucide-react";
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

/**
 * SEO. "Para quem é" é uma página de resultados orgânicos em forma de ranking:
 * cada perfil ocupa uma posição, com a URL em migalhas e o título. O conteúdo é
 * um checklist de auditoria: cada módulo é um bloco da auditoria e o anel mostra
 * quanto do checklist completo já foi coberto até ali (tópicos acumulados).
 */

function Publico({ course, whatsappUrl }: MktBlockProps) {
  const [clicados, alternar] = useMarcados();
  return (
    <PublicoSection>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <StepHeading
            step="01"
            label="Público-alvo · Busca orgânica"
            Icon={Search}
            title="Este curso é ideal se você..."
            sub="Os perfis deste curso ranqueados como resultados de busca. Clique no resultado que responde à sua pergunta."
          />
          <Reveal delay={120}>
            <div className={`mt-8 flex items-center gap-3 rounded-full px-4 py-3 ${CARD}`}>
              <Search className="h-4 w-4 shrink-0 text-(--accent)" />
              <span className={`min-w-0 flex-1 truncate text-sm ${INK}`}>o curso de {course.nome.split(" — ")[0].toLowerCase()} é pra mim?</span>
            </div>
            <p className={`mt-3 px-2 text-xs ${SOFT}`}>
              {clicados.size === 0 ? "Nenhum resultado clicado ainda." : `${clicados.size} ${clicados.size === 1 ? "resultado respondeu" : "resultados responderam"} à sua busca.`}
            </p>
            {clicados.size > 0 && (
              <div className="mt-4 px-2">
                <ConversaLink href={whatsappUrl} />
              </div>
            )}
          </Reveal>
        </div>

        <ol className="space-y-3">
          {course.targetAudience.map((item, i) => {
            const on = clicados.has(i);
            return (
              <Reveal key={item} as="li" delay={i * 60}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => alternar(i)}
                  className={`group grid w-full grid-cols-[44px_1fr] items-start gap-3 rounded-2xl border p-4 text-left transition sm:grid-cols-[64px_1fr] sm:gap-5 sm:p-5 ${
                    on ? "border-(--accent) bg-(--accent)/[0.05]" : "border-transparent hover:border-[#f0dedb] hover:bg-white dark:hover:border-white/10 dark:hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="flex flex-col items-center">
                    <span className="text-3xl font-black leading-none text-transparent [-webkit-text-stroke:1.5px_var(--accent)] sm:text-5xl">{i + 1}</span>
                    <span className={`mt-1.5 text-[11px] font-bold ${SOFT}`}>posição</span>
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--accent)/12 text-(--accent)">
                        <Globe className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0 leading-tight">
                        <span className={`block text-xs font-bold ${INK}`}>Santos Tech</span>
                        <span className={`block truncate text-xs ${SOFT}`}>santos-tech.com › {course.variante ?? "curso"} › perfil-{pad2(i)}</span>
                      </span>
                    </span>
                    <span className="mt-2 block text-[17px] font-bold leading-snug text-(--accent) group-hover:underline">{item}</span>
                    <span className={`mt-1.5 flex items-center gap-1.5 text-xs font-semibold ${on ? "text-(--accent)" : SOFT}`}>
                      <MousePointerClick className="h-3.5 w-3.5" />
                      {on ? "Clicado · responde à sua busca" : "Resultado orgânico"}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </PublicoSection>
  );
}

/** Frente da auditoria pelo título do módulo (com rótulo neutro de reserva). */
function frente(titulo: string) {
  if (/on-page/i.test(titulo)) return "On-page";
  if (/técnico/i.test(titulo)) return "Técnico";
  if (/link|autoridade|local/i.test(titulo)) return "Off-page";
  if (/palavra|fundament/i.test(titulo)) return "Pesquisa";
  if (/\bIA\b|relat/i.test(titulo)) return "IA e relatórios";
  if (/compet|estratég/i.test(titulo)) return "Estratégia";
  return "Auditoria";
}

function Anel({ valor }: { valor: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      <svg viewBox="0 0 56 56" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="28" cy="28" r={r} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="6" />
        <circle cx="28" cy="28" r={r} fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${(valor / 100) * c} ${c}`} />
      </svg>
      <span className={`text-sm font-black ${INK}`}>{valor}%</span>
    </span>
  );
}

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const total = tier.modules.reduce((s, m) => s + m.topics.length, 0) || 1;
  let acumulado = 0;
  const pontos = tier.modules.map((m) => {
    acumulado += m.topics.length;
    return Math.round((acumulado / total) * 100);
  });

  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={ClipboardCheck}
        title="O que você vai aprender"
        sub="O curso como um checklist de auditoria de SEO: cada módulo é um bloco de itens, e o anel mostra quanto do checklist você já cobre ao terminar aquele bloco."
      />
      <TierPicker {...p} unidade="blocos" />

      {/* Barra geral do checklist */}
      <Reveal delay={60} className="mt-10">
        <div className={`rounded-2xl p-4 sm:p-5 ${CARD}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className={`text-sm font-black ${INK}`}>Checklist de auditoria · {total} itens</p>
            <p className={`text-xs ${SOFT}`}>cada faixa é um bloco do curso</p>
          </div>
          <div className="mt-3 flex h-3 gap-1 overflow-hidden rounded-full">
            {tier.modules.map((m, i) => (
              <span
                key={m.title}
                className="h-full"
                style={{
                  flexGrow: m.topics.length,
                  flexBasis: 0,
                  background: `color-mix(in srgb, var(--accent) ${Math.round(40 + (i / Math.max(tier.modules.length - 1, 1)) * 60)}%, var(--accent-2))`,
                }}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-4 space-y-4">
        {tier.modules.map((m, i) => (
          <Reveal key={`${tier.levelName}-${m.title}`} delay={i * 50}>
            <article className={`rounded-2xl p-4 sm:p-6 ${CARD}`}>
              <header className="flex items-center gap-4">
                <Anel valor={pontos[i]} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`${KICKER} ${SOFT}`}>Bloco {pad2(i)}</span>
                    <span className="rounded-full bg-(--accent-2)/25 px-2 py-0.5 text-[11px] font-black text-[#7a4f00] dark:text-(--accent-2)">{frente(m.title)}</span>
                  </div>
                  <h3 className={`mt-1 text-base font-black sm:text-lg ${INK}`}>{m.title}</h3>
                </div>
              </header>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                {m.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5 rounded-lg bg-[#fff7f4] px-3 py-2.5 dark:bg-white/[0.03]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-(--accent) text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={`text-sm leading-snug ${BODY}`}>{topic}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <Reveal delay={80}>
          <div className="flex flex-col gap-4 rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-(--accent)/40 sm:flex-row sm:items-center sm:p-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[6px] border-(--accent) text-sm font-black">100%</span>
            <div>
              <p className={`${KICKER} text-(--accent-2)`}>Auditoria completa · {tier.levelName}</p>
              <p className="mt-1.5 text-base font-semibold leading-relaxed">{tier.outcome}</p>
              <p className="mt-2 text-xs text-white/60">{ritmo(course, tier)}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <ToolsRow tools={tier.tools} label="Ferramentas da auditoria" />
    </ConteudoSection>
  );
}

export { Publico as SeoPublico, Conteudo as SeoConteudo };
