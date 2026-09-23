import { Check, KeyRound, Plus, Search, Target } from "lucide-react";
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
import { BODY, CARD, INK, KICKER, LINE, SOFT, pad2, ritmo, useMarcados } from "@/components/course-skins/variants/marketing-tokens";

/**
 * Google Ads. "Para quem é" vira uma lista de palavras-chave com tipo de
 * correspondência (a pessoa adiciona as que descrevem ela ao grupo). O
 * conteúdo é uma página de resultados patrocinados: cada módulo é um anúncio de
 * pesquisa e os tópicos são os sitelinks dele.
 */

const MATCH = [
  { nome: "Exata", abre: "[", fecha: "]" },
  { nome: "Frase", abre: "“", fecha: "”" },
  { nome: "Ampla", abre: "", fecha: "" },
] as const;

function Publico({ course, tema, theme, whatsappUrl }: MktBlockProps) {
  const [adicionadas, alternar] = useMarcados();
  return (
    <PublicoSection>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12">
        <div>
          <StepHeading
            step="01"
            label="Público-alvo · Palavras-chave"
            Icon={KeyRound}
            title="Este curso é ideal se você..."
            sub="Cada perfil é uma palavra-chave. Adicione ao seu grupo de anúncios as que descrevem a sua busca."
          />
          <Reveal delay={120}>
            <PersonAtDesk
              theme={theme}
              tema={tema}
              className="mt-8 hidden w-full max-w-md lg:block"
              renderScreen={({ x, y, w, h }) => (
                <g>
                  <rect x={x} y={y} width={w} height={h} fill="#fff" />
                  <rect x={x + 12} y={y + 7} width={w - 24} height={11} rx={5.5} fill="#fff" stroke="#1f1216" strokeOpacity={0.18} />
                  <circle cx={x + 20} cy={y + 12.5} r={2.6} fill="none" stroke={theme.accent} strokeWidth={1.2} />
                  <rect x={x + 26} y={y + 11} width={46} height={3} rx={1.5} fill="#1f1216" fillOpacity={0.45} />
                  {[0, 1, 2].map((k) => (
                    <g key={k}>
                      <rect x={x + 12} y={y + 25 + k * 17} width={12} height={4.5} rx={1} fill={k < 2 ? theme.accent : "#1f1216"} fillOpacity={k < 2 ? 1 : 0.15} />
                      <rect x={x + 27} y={y + 25.5 + k * 17} width={30} height={3} rx={1} fill="#1f1216" fillOpacity={0.3} />
                      <rect x={x + 12} y={y + 31 + k * 17} width={70 - k * 8} height={4} rx={1} fill={theme.accent} fillOpacity={0.8} />
                      <rect x={x + 12} y={y + 37 + k * 17} width={100 - k * 12} height={2.5} rx={1} fill="#1f1216" fillOpacity={0.2} />
                    </g>
                  ))}
                </g>
              )}
            />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className={`overflow-hidden rounded-2xl ${CARD} shadow-[0_24px_60px_-40px_rgba(120,30,40,0.5)]`}>
            {/* Barra de pesquisa do planejador */}
            <div className={`flex items-center gap-3 border-b px-4 py-3 ${LINE}`}>
              <Search className="h-4 w-4 shrink-0 text-(--accent)" />
              <span className={`min-w-0 flex-1 truncate text-sm ${SOFT}`}>para quem é o curso de {course.nome.toLowerCase()}</span>
              <span className="hidden shrink-0 rounded-md bg-(--accent) px-2.5 py-1 text-xs font-bold text-white sm:inline">Ver ideias</span>
            </div>
            {/* Cabeçalho da tabela */}
            <div className={`hidden grid-cols-[1fr_110px_120px] gap-3 border-b bg-[#fff5f2] px-4 py-2 dark:bg-white/[0.03] sm:grid ${LINE} ${KICKER} ${SOFT}`}>
              <span>Palavra-chave</span>
              <span>Correspondência</span>
              <span className="text-right">Grupo</span>
            </div>
            <ul className="divide-y divide-[#f3e4e0] dark:divide-white/10">
              {course.targetAudience.map((item, i) => {
                const m = MATCH[i % MATCH.length];
                const on = adicionadas.has(i);
                return (
                  <li key={item} className={`grid gap-3 px-4 py-3.5 transition sm:grid-cols-[1fr_110px_120px] sm:items-center ${on ? "bg-(--accent)/[0.05]" : ""}`}>
                    <p className={`text-[15px] font-semibold leading-snug ${INK}`}>
                      {m.abre && <span className="mr-0.5 font-mono text-(--accent)">{m.abre}</span>}
                      {item}
                      {m.fecha && <span className="ml-0.5 font-mono text-(--accent)">{m.fecha}</span>}
                    </p>
                    <div className="flex items-center justify-between gap-3 sm:contents">
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-(--accent-2)/20 px-2.5 py-0.5 text-xs font-bold text-[#7a4f00] dark:text-(--accent-2)">
                        {m.nome}
                      </span>
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => alternar(i)}
                        className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition sm:justify-self-end ${
                          on ? "border-(--accent) bg-(--accent) text-white" : "border-(--accent)/40 text-(--accent) hover:bg-(--accent)/[0.08]"
                        }`}
                      >
                        {on ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                        {on ? "Adicionada" : "Adicionar"}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col items-start gap-3 bg-(--hero-bg) px-4 py-4 text-white sm:flex-row sm:items-center">
              <p className="flex-1 text-sm text-white/80">
                <span className="font-black text-white">Grupo “Você”</span> ·{" "}
                {adicionadas.size === 0
                  ? "nenhuma palavra-chave ainda — adicione as que combinam com você."
                  : `${adicionadas.size} ${adicionadas.size === 1 ? "palavra-chave combina" : "palavras-chave combinam"} com a sua busca.`}
              </p>
              {adicionadas.size > 0 && <ConversaLink href={whatsappUrl} light />}
            </div>
          </div>
        </Reveal>
      </div>
    </PublicoSection>
  );
}

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const slug = course.variante ?? "curso";
  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={Search}
        title="O que você vai aprender"
        sub="Uma página de resultados só com anúncios deste curso: cada módulo é um anúncio de pesquisa, e os tópicos são os links dele."
      />
      <TierPicker {...p} unidade="anúncios" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <Reveal delay={60}>
          <div className={`overflow-hidden rounded-3xl ${CARD} shadow-[0_24px_60px_-44px_rgba(120,30,40,0.55)]`}>
            {/* Busca */}
            <div className={`border-b px-4 py-4 sm:px-6 ${LINE}`}>
              <div className="flex items-center gap-3 rounded-full border border-[#ead6d2] bg-white px-4 py-2.5 shadow-sm dark:border-white/15 dark:bg-white/5">
                <Search className="h-4 w-4 shrink-0 text-(--accent)" />
                <span className={`min-w-0 flex-1 truncate text-sm font-medium ${INK}`}>curso de {course.nome.toLowerCase()} em ribeirão preto</span>
              </div>
              <p className={`mt-2 px-1 text-xs ${SOFT}`}>{tier.modules.length} resultados patrocinados · página ilustrativa</p>
            </div>

            <div className="divide-y divide-[#f3e4e0] dark:divide-white/10">
              {tier.modules.map((m, i) => (
                <Reveal key={`${tier.levelName}-${m.title}`} delay={i * 50}>
                  <article className="px-4 py-5 sm:px-6">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-(--accent) text-[11px] font-black text-white">{pad2(i)}</span>
                      <span className="min-w-0">
                        <span className={`block text-xs font-black ${INK}`}>
                          Patrocinado <span className={`font-normal ${SOFT}`}>· Santos Tech</span>
                        </span>
                        <span className={`block truncate text-xs ${SOFT}`}>
                          santos-tech.com › {slug} › módulo-{pad2(i)}
                        </span>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-(--accent) sm:text-xl">{m.title}</h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {m.topics.map((topic) => (
                        <li key={topic} className="rounded-xl border border-[#f3e4e0] bg-[#fffaf8] px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
                          <span className={`block text-sm leading-snug ${BODY}`}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Lateral: a conversão (resultado do nível) e o resumo da campanha */}
        <div className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Reveal delay={100}>
            <div className="rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-(--accent)/40">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-(--accent)">
                <Target className="h-4.5 w-4.5" />
              </span>
              <p className={`mt-3 ${KICKER} text-(--accent-2)`}>Conversão · {tier.levelName}</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed">{tier.outcome}</p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#f0dedb] dark:bg-white/10 lg:grid-cols-1`}>
              {[
                ["Anúncios", `${tier.modules.length} módulos`],
                ["Sitelinks", `${tier.modules.reduce((s, m) => s + m.topics.length, 0)} tópicos`],
                ["Ritmo", ritmo(course, tier)],
              ].map(([k, v], i) => (
                <div key={k} className={`bg-white px-4 py-3 dark:bg-[#150b0f] ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}>
                  <dt className={`${KICKER} ${SOFT}`}>{k}</dt>
                  <dd className={`mt-0.5 text-sm font-bold ${INK}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <ToolsRow tools={tier.tools} label="Ferramentas da conta" />
    </ConteudoSection>
  );
}

export { Publico as GoogleAdsPublico, Conteudo as GoogleAdsConteudo };
