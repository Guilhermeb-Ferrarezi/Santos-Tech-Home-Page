import { ArrowRight, Check, Filter, KanbanSquare, Target, Undo2, UserRound } from "lucide-react";
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
import { BODY, CARD, INK, KICKER, PERSONA_CORES, SOFT, pad2, ritmo, useMarcados } from "@/components/course-skins/variants/marketing-tokens";

/**
 * Funil de Vendas + CRM. "Para quem é" vira um quadro de CRM: cada perfil é um
 * lead e a pessoa qualifica os que descrevem ela, movendo o cartão de coluna.
 * O conteúdo mantém o funil (a metáfora de referência da categoria).
 */

function LeadCard({ i, texto, etapa, qualificado, onClick }: { i: number; texto: string; etapa: string; qualificado: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={qualificado}
      className={`group relative w-full overflow-hidden rounded-xl border bg-white p-4 pl-5 text-left shadow-[0_1px_2px_rgba(80,20,30,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-14px_rgba(120,30,40,0.45)] dark:bg-[#1c1015] ${
        qualificado ? "border-(--accent)/60" : "border-[#f0dedb] dark:border-white/10"
      }`}
    >
      <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: PERSONA_CORES[i % PERSONA_CORES.length] }} />
      <span className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: PERSONA_CORES[i % PERSONA_CORES.length] }}
        >
          <UserRound className="h-4 w-4" />
        </span>
        <span className={`${KICKER} text-[#a3868c] dark:text-white/45`}>Lead #{pad2(i)}</span>
        <span
          className={`ml-auto rounded-full px-2 py-0.5 text-[11px] font-bold ${
            qualificado ? "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300" : "bg-(--accent-2)/20 text-[#8a5a00] dark:text-(--accent-2)"
          }`}
        >
          {qualificado ? "Qualificado" : etapa}
        </span>
      </span>
      <span className={`mt-3 block text-[15px] font-semibold leading-snug ${INK}`}>{texto}</span>
      <span className={`mt-3 flex items-center gap-1.5 text-xs font-bold ${qualificado ? SOFT : "text-(--accent)"}`}>
        {qualificado ? (
          <>
            <Undo2 className="h-3.5 w-3.5" /> Voltar para novos leads
          </>
        ) : (
          <>
            É o meu caso <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </>
        )}
      </span>
    </button>
  );
}

const ETAPAS = ["Novo", "Em contato"];

function Publico({ course, tema, theme, whatsappUrl }: MktBlockProps) {
  const [qualificados, alternar] = useMarcados();
  const itens = course.targetAudience.map((texto, i) => ({ texto, i }));
  const quentes = itens.filter(({ i }) => qualificados.has(i));

  const coluna = (titulo: string, cor: string, lista: typeof itens, vazio: string, etapa: string) => (
    <div key={titulo} className="flex min-w-0 flex-col rounded-2xl bg-[#f7ebe8] p-3 dark:bg-white/[0.04]">
      <div className="flex items-center gap-2 px-1 pb-3 pt-1">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: cor }} />
        <span className={`text-sm font-black ${INK}`}>{titulo}</span>
        <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-xs font-bold text-[#6e565c] dark:bg-white/10 dark:text-white/70">{lista.length}</span>
      </div>
      <div className="space-y-2.5">
        {lista.map(({ texto, i }) => (
          <Reveal key={texto} delay={40}>
            <LeadCard i={i} texto={texto} etapa={etapa} qualificado={qualificados.has(i)} onClick={() => alternar(i)} />
          </Reveal>
        ))}
        {lista.length === 0 && (
          <div className={`rounded-xl border-2 border-dashed border-[#e8d2ce] px-4 py-8 text-center text-sm dark:border-white/10 ${SOFT}`}>{vazio}</div>
        )}
      </div>
    </div>
  );

  return (
    <PublicoSection>
      <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
        <StepHeading
          step="01"
          label="Público-alvo · Pipeline"
          Icon={KanbanSquare}
          title="Este curso é ideal se você..."
          sub="Cada perfil é um lead no quadro do CRM. Clique nos cartões que descrevem você para mover o lead até a coluna de qualificados."
        />
        <Reveal delay={120} className="hidden lg:block">
          <PersonAtDesk
            theme={theme}
            tema={tema}
            className="ml-auto w-full max-w-xs"
            renderScreen={({ x, y, h }) => (
              <g>
                <rect x={x} y={y} width={138} height={h} fill="#170c10" />
                {[0, 1, 2].map((c) => {
                  const cx = x + 6 + c * 44;
                  return (
                    <g key={c}>
                      <rect x={cx} y={y + 6} width={40} height={h - 12} rx={3} fill="#fff" fillOpacity={0.06} />
                      <rect x={cx + 4} y={y + 10} width={16} height={3} rx={1.5} fill={[theme.accent2, "#fb923c", "#34d399"][c]} />
                      {Array.from({ length: 3 - c }).map((_, k) => (
                        <g key={k}>
                          <rect x={cx + 4} y={y + 18 + k * 18} width={32} height={14} rx={2.5} fill="#fff" fillOpacity={0.9} />
                          <rect x={cx + 4} y={y + 18 + k * 18} width={2.5} height={14} fill={theme.accent} />
                          <rect x={cx + 9} y={y + 22 + k * 18} width={20} height={2.5} rx={1} fill="#1f1216" fillOpacity={0.5} />
                          <rect x={cx + 9} y={y + 27 + k * 18} width={13} height={2.5} rx={1} fill="#1f1216" fillOpacity={0.25} />
                        </g>
                      ))}
                    </g>
                  );
                })}
                <path d={`M${x + 38} ${y + 44} q8 -10 18 -2`} fill="none" stroke={theme.accent2} strokeWidth="1.6" strokeDasharray="2 2" />
              </g>
            )}
          />
        </Reveal>
      </div>

      <Reveal delay={80} className="mt-8">
        <div className={`rounded-3xl p-3 sm:p-4 ${CARD} shadow-[0_24px_60px_-40px_rgba(120,30,40,0.5)]`}>
          <div className="flex flex-wrap items-center gap-2 px-1 pb-3">
            <span className={`text-sm font-black ${INK}`}>Pipeline · Novos alunos</span>
            <span className={`text-xs ${SOFT}`}>quadro ilustrativo</span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-(--accent)/10 px-2.5 py-1 text-xs font-bold text-(--accent)">
              {quentes.length} de {itens.length} qualificados
            </span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {ETAPAS.map((etapa, c) =>
              coluna(
                c === 0 ? "Novos leads" : "Em contato",
                c === 0 ? "var(--accent-2)" : "#fb923c",
                itens.filter(({ i }) => !qualificados.has(i) && i % ETAPAS.length === c),
                "Nenhum lead nesta etapa.",
                etapa,
              ),
            )}
            {coluna("Qualificados · é você", "#34d399", quentes, "Clique num cartão de lead para trazê-lo pra cá.", "Qualificado")}
          </div>
          {quentes.length > 0 && (
            <div className="mt-3 flex flex-col items-start gap-3 rounded-2xl bg-(--hero-bg) p-4 text-white sm:flex-row sm:items-center">
              <p className="flex-1 text-sm text-white/85">
                {quentes.length === 1 ? "Um perfil qualificado" : `${quentes.length} perfis qualificados`}: o próximo passo do funil é uma conversa.
              </p>
              <ConversaLink href={whatsappUrl} light />
            </div>
          )}
        </div>
      </Reveal>
    </PublicoSection>
  );
}

/** Nome da etapa do funil para o módulo i de n. */
function stageName(i: number, n: number) {
  if (n === 1) return "Etapa única";
  if (i === 0) return "Topo";
  if (i === n - 1) return "Fundo";
  return "Meio";
}

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const multiTier = course.tiers.length > 1;
  const n = tier.modules.length;
  const MIN = 0.36;
  const largura = (k: number) => 1 - (k / n) * (1 - MIN);
  return (
    <ConteudoSection>
      <div className="mx-auto max-w-6xl">
        <StepHeading
          step="02"
          label="Conteúdo programático"
          Icon={Filter}
          title="O que você vai aprender"
          sub={
            multiTier
              ? "Cada módulo é uma etapa do funil: começa amplo, afunila no que importa e termina no resultado do nível."
              : "Cada módulo é uma etapa do funil: começa amplo, afunila no que importa e termina no resultado do curso."
          }
        />
        <TierPicker {...p} unidade="etapas" className="mt-8" />

        <div className="mt-10 space-y-2">
          {tier.modules.map((m, i) => {
            const a = ((1 - largura(i)) / 2) * 100;
            const b = ((1 - largura(i + 1)) / 2) * 100;
            const mix = n === 1 ? 100 : Math.round((i / (n - 1)) * 100);
            const escuro = mix < 45;
            return (
              <Reveal key={`${tier.levelName}-${m.title}`} delay={i * 70}>
                <div className="grid grid-cols-[56px_1fr] gap-3 sm:grid-cols-[150px_1fr] sm:gap-5 lg:grid-cols-[210px_1fr]">
                  <div className="relative">
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: `polygon(${a}% 0, ${100 - a}% 0, ${100 - b}% 100%, ${b}% 100%)`,
                        background: `color-mix(in srgb, var(--accent) ${mix}%, var(--accent-2))`,
                      }}
                    />
                    <div className={`relative flex flex-col items-center pt-4 text-center ${escuro ? "text-[#2a1216]" : "text-white"}`}>
                      <span className="text-lg font-black leading-none sm:text-3xl">{pad2(i)}</span>
                      <span className="mt-1 hidden text-[11px] font-bold uppercase tracking-[0.2em] opacity-80 sm:block">{stageName(i, n)}</span>
                    </div>
                  </div>
                  <article className={`rounded-2xl p-5 ${CARD}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className={`text-base font-black sm:text-lg ${INK}`}>{m.title}</h3>
                      <span className={`${KICKER} text-(--accent)`}>
                        Etapa {i + 1} de {n} · {m.topics.length} tópicos
                      </span>
                    </div>
                    <ul className="mt-3 grid gap-x-6 gap-y-2 md:grid-cols-2">
                      {m.topics.map((topic) => (
                        <li key={topic} className={`flex items-start gap-2 text-sm ${BODY}`}>
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-(--accent)" strokeWidth={2.6} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            );
          })}

          {/* Saída do funil: o resultado do nível */}
          <Reveal delay={n * 70}>
            <div className="grid grid-cols-[56px_1fr] gap-3 sm:grid-cols-[150px_1fr] sm:gap-5 lg:grid-cols-[210px_1fr]">
              <div className="flex flex-col items-center">
                <div className="h-10 bg-(--accent)" style={{ width: `${largura(n) * 100}%`, clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
                <span className="mt-2 flex h-9 w-9 items-center justify-center rounded-full bg-(--accent) text-white shadow-[0_8px_20px_-6px_var(--accent)] sm:h-11 sm:w-11">
                  <Target className="h-5 w-5" />
                </span>
              </div>
              <div className="rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-(--accent)/40 sm:p-6">
                <p className={`${KICKER} text-(--accent-2)`}>Conversão · {tier.levelName}</p>
                <p className="mt-2 text-base font-semibold leading-relaxed sm:text-lg">{tier.outcome}</p>
                <p className="mt-3 text-xs text-white/60">{ritmo(course, tier)}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <ToolsRow tools={tier.tools} label="Stack do funil" />
      </div>
    </ConteudoSection>
  );
}

export { Publico as FunilVendasPublico, Conteudo as FunilVendasConteudo };
