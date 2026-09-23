import { Check, MessageSquareText, PenLine } from "lucide-react";
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
import { BODY, INK, KICKER, SOFT, pad2, ritmo, useMarcados } from "@/components/course-skins/variants/marketing-tokens";

/**
 * Copywriting. "Para quem é" é um rascunho em revisão: o título genérico é
 * riscado e cada perfil é um parágrafo com sugestão pendente, que a pessoa
 * aceita quando se reconhece. O conteúdo é um manuscrito: cada módulo é um
 * capítulo com uma fórmula de persuasão e um exemplo de antes e depois.
 */

const SERIF = "font-serif";
const FOLHA = "rounded-[4px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_30px_60px_-40px_rgba(80,20,30,0.55)] ring-1 ring-[#ecdcd8] dark:bg-[#1a1014] dark:ring-white/10";

function Publico({ course, whatsappUrl }: MktBlockProps) {
  const [aceitos, alternar] = useMarcados();
  return (
    <PublicoSection plain>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-12">
        <div>
          <StepHeading
            step="01"
            label="Público-alvo · Revisão"
            Icon={PenLine}
            title="Este curso é ideal se você..."
            sub="Um rascunho em revisão. Clique nos parágrafos que descrevem você para aceitar a sugestão."
          />
          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-dashed border-(--accent)/35 p-5">
              <p className={`${KICKER} text-(--accent)`}>Revisão</p>
              <p className={`mt-2 text-3xl font-black ${INK}`}>
                {aceitos.size}
                <span className={`text-base font-bold ${SOFT}`}> de {course.targetAudience.length} trechos aceitos</span>
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f1e2df] dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-(--accent) transition-all duration-500"
                  style={{ width: `${(aceitos.size / Math.max(course.targetAudience.length, 1)) * 100}%` }}
                />
              </div>
              {aceitos.size > 0 && (
                <div className="mt-4">
                  <ConversaLink href={whatsappUrl} />
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className={`${FOLHA} relative px-5 py-7 sm:px-10 sm:py-10`}>
            <p className={`${KICKER} ${SOFT}`}>Rascunho · página “Para quem é”</p>
            <h3 className={`${SERIF} mt-4 text-2xl leading-snug sm:text-3xl ${INK}`}>
              <del className="decoration-(--accent) decoration-2 opacity-45">Um curso para qualquer pessoa.</del>{" "}
              <ins className="bg-(--accent-2)/30 no-underline dark:bg-(--accent-2)/20">Um curso para quem se reconhece aqui:</ins>
            </h3>
            <ol className="mt-7 space-y-3">
              {course.targetAudience.map((item, i) => {
                const on = aceitos.has(i);
                return (
                  <li key={item}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => alternar(i)}
                      className="group grid w-full grid-cols-[28px_1fr] gap-x-3 rounded-lg px-1 py-1.5 text-left transition hover:bg-(--accent)/[0.04] sm:grid-cols-[28px_1fr_190px]"
                    >
                      <span className={`pt-1 text-right font-mono text-xs ${SOFT}`}>{pad2(i)}</span>
                      <span
                        className={`${SERIF} text-[17px] leading-relaxed ${INK} ${
                          on ? "bg-(--accent-2)/35 dark:bg-(--accent-2)/25" : "underline decoration-(--accent)/50 decoration-dotted decoration-2 underline-offset-[5px]"
                        }`}
                      >
                        {item}
                      </span>
                      {/* comentário de margem */}
                      <span
                        className={`col-start-2 mt-2 flex items-start gap-2 rounded-lg border-l-[3px] px-2.5 py-1.5 text-xs sm:col-start-3 sm:mt-0 ${
                          on ? "border-emerald-500 bg-emerald-500/[0.08] text-emerald-800 dark:text-emerald-300" : "border-(--accent) bg-(--accent)/[0.06] text-[#7c2a32] dark:text-[#ffb3b6]"
                        }`}
                      >
                        {on ? <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" /> : <MessageSquareText className="mt-0.5 h-3.5 w-3.5 shrink-0" />}
                        <span>
                          <span className="block font-bold">{on ? "Aceito · é você" : "Sugestão pendente"}</span>
                          <span className="opacity-80">{on ? "Trecho aprovado na revisão" : "Toque pra aceitar se for o seu caso"}</span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </PublicoSection>
  );
}

/** Fórmulas clássicas de copy, uma por capítulo (ciclo). */
const FORMULAS: { sigla: string; partes: string[] }[] = [
  { sigla: "AIDA", partes: ["Atenção", "Interesse", "Desejo", "Ação"] },
  { sigla: "PAS", partes: ["Problema", "Agitação", "Solução"] },
  { sigla: "BAB", partes: ["Antes", "Depois", "Ponte"] },
  { sigla: "4U", partes: ["Útil", "Urgente", "Único", "Ultraespecífico"] },
  { sigla: "FAB", partes: ["Característica", "Vantagem", "Benefício"] },
  { sigla: "4P", partes: ["Promessa", "Imagem", "Prova", "Chamada"] },
];

/** Exemplos de reescrita (marcas e frases fictícias, só ilustração). */
const REESCRITAS: [string, string][] = [
  ["Temos os melhores preços da região.", "Economize já no primeiro pedido, sem abrir mão da qualidade."],
  ["Clique aqui para saber mais.", "Veja em 2 minutos como funciona na prática."],
  ["Somos uma empresa com anos de experiência.", "Resolvemos o seu problema já na primeira visita."],
  ["Assine a nossa newsletter.", "Receba toda semana uma ideia pronta para aplicar."],
  ["Produto de alta qualidade.", "Feito para aguentar o uso pesado do dia a dia."],
  ["Compre agora!", "Escolha o seu horário e comece na próxima semana."],
];

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={PenLine}
        title="O que você vai aprender"
        sub="O curso como um manuscrito: cada módulo é um capítulo, com a fórmula de persuasão em foco e um exemplo de reescrita."
      />
      <TierPicker {...p} unidade="capítulos" />

      <div className={`${FOLHA} mx-auto mt-10 max-w-5xl overflow-hidden`}>
        {/* régua do documento */}
        <div className="flex h-7 items-end gap-[9px] overflow-hidden border-b border-[#efe0dc] bg-[#fbf4f2] px-6 dark:border-white/10 dark:bg-white/[0.03]" aria-hidden="true">
          {Array.from({ length: 90 }).map((_, k) => (
            <span key={k} className={`w-px shrink-0 bg-[#c9aaa4] dark:bg-white/25 ${k % 5 === 0 ? "h-3" : "h-1.5"}`} />
          ))}
        </div>

        <div className="px-5 py-8 sm:px-12 sm:py-12">
          <p className={`${KICKER} text-(--accent)`}>Manuscrito · {tier.levelName}</p>
          <h3 className={`${SERIF} mt-3 text-3xl leading-tight sm:text-4xl ${INK}`}>{course.nome}</h3>
          <p className={`${SERIF} mt-3 max-w-3xl text-lg italic leading-relaxed ${SOFT}`}>{tier.outcome}</p>

          <div className="mt-8 space-y-12">
            {tier.modules.map((m, i) => {
              const f = FORMULAS[i % FORMULAS.length];
              const [antes, depois] = REESCRITAS[i % REESCRITAS.length];
              return (
                <Reveal key={`${tier.levelName}-${m.title}`} delay={40}>
                  <section className="border-t border-[#efe0dc] pt-8 dark:border-white/10">
                    <p className={`${KICKER} ${SOFT}`}>Capítulo {pad2(i)}</p>
                    <h4 className={`${SERIF} mt-2 text-2xl leading-snug ${INK}`}>{m.title}</h4>

                    <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
                      {/* Fórmula */}
                      <div className="rounded-xl bg-(--hero-bg) p-4 text-white">
                        <p className="text-xs font-bold text-white/60">Fórmula em foco</p>
                        <p className="mt-1 text-2xl font-black tracking-wide text-(--accent-2)">{f.sigla}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {f.partes.map((parte, k) => (
                            <span key={parte} className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold">
                              <span className="mr-1 font-black text-(--accent-2)">{k + 1}</span>
                              {parte}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Antes / depois */}
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="rounded-xl border border-[#efe0dc] p-3.5 dark:border-white/10">
                          <p className="text-xs font-bold text-(--accent)">Antes</p>
                          <p className={`${SERIF} mt-1 text-[15px] leading-snug line-through decoration-(--accent)/60 ${SOFT}`}>{antes}</p>
                        </div>
                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] p-3.5">
                          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Depois</p>
                          <p className={`${SERIF} mt-1 text-[15px] leading-snug ${INK}`}>{depois}</p>
                        </div>
                        <p className={`text-[11px] sm:col-span-2 ${SOFT}`}>Exemplo ilustrativo de reescrita.</p>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                      {m.topics.map((topic) => (
                        <li key={topic} className={`flex gap-2.5 text-[15px] leading-relaxed ${BODY}`}>
                          <span className={`${SERIF} shrink-0 text-lg leading-6 text-(--accent)`}>¶</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </section>
                </Reveal>
              );
            })}
          </div>

          <p className={`mt-12 border-t border-[#efe0dc] pt-5 text-xs dark:border-white/10 ${SOFT}`}>
            Fim do manuscrito · {tier.modules.length} capítulos · {ritmo(course, tier)}
          </p>
        </div>
      </div>

      <ToolsRow tools={tier.tools} label="Mesa de trabalho do redator" />
    </ConteudoSection>
  );
}

export { Publico as CopywritingPublico, Conteudo as CopywritingConteudo };
