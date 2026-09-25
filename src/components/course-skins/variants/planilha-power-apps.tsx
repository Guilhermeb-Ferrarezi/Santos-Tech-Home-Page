import { Fragment, type ReactNode } from "react";
import {
  ArrowDown,
  Bot,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Database,
  MoreHorizontal,
  Plus,
  Search,
  Sigma,
  Smartphone,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  FormulaHeading,
  TierGuide,
  ToolsStrip,
} from "@/components/course-skins/variants/planilha-kit";
import {
  APP_COLORS,
  DOTS,
  type BlockProps,
} from "@/components/course-skins/variants/planilha-base";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Power Apps + Power Automate: "Para quem é" são telas de um app no celular
 * (galeria com um perfil por item, três telas lado a lado). O conteúdo é um
 * fluxo de automação: gatilho "quando você começa o nível", uma ação por
 * módulo com os tópicos dentro e, no fim, o fluxo concluído com o resultado.
 */

const PA = APP_COLORS.powerapps;

function Phone({ screen, total, items, offset }: { screen: number; total: number; items: string[]; offset: number }) {
  const last = screen === total;
  return (
    <div className="mx-auto h-full w-full max-w-[320px] rounded-[34px] bg-neutral-800 p-[7px] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)] dark:bg-neutral-700">
      <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white dark:bg-neutral-900">
        {/* Barra de status */}
        <div className="flex items-center justify-between px-6 pb-1 pt-2.5 text-[11px] font-semibold text-white" style={{ background: PA }}>
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-black/40" />
          <span>5G</span>
        </div>
        {/* Cabeçalho do app */}
        <div className="px-4 pb-4 pt-2 text-white" style={{ background: PA }}>
          <div className="flex items-center gap-2">
            <ChevronLeft className={`h-4 w-4 ${screen === 1 ? "opacity-30" : ""}`} />
            <span className="text-[11px] font-semibold opacity-80">
              Tela {screen} de {total}
            </span>
          </div>
          <p className="mt-1 text-lg font-black">Para quem é</p>
        </div>
        <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-2.5 text-xs text-neutral-400 dark:border-neutral-800">
          <Search className="h-3.5 w-3.5" /> Pesquisar perfis
        </div>
        {/* Galeria */}
        <ul className="flex-1">
          {items.map((item, i) => (
            <li key={item} className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3.5 dark:border-neutral-800">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black"
                style={{ background: `${PA}1f`, color: PA }}
              >
                {offset + i + 1}
              </span>
              <span className="min-w-0 flex-1 text-sm leading-snug text-neutral-800 dark:text-neutral-200">{item}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-neutral-300" aria-hidden="true" />
            </li>
          ))}
        </ul>
        <div className="p-4">
          <span className="block py-2.5 text-center text-sm font-bold text-white" style={{ background: last ? "var(--accent)" : PA }}>
            {last ? "Sou eu! Quero começar" : "Próxima tela"}
          </span>
          <span className="mx-auto mt-3 block h-1 w-24 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>
    </div>
  );
}

export function PowerAppsParaQuem({ course }: BlockProps) {
  const items = course.targetAudience;
  const per = Math.ceil(items.length / 3);
  const screens = [0, 1, 2].map((s) => items.slice(s * per, s * per + per)).filter((s) => s.length > 0);
  return (
    <section data-sec="para-quem" className="sb-bleed bg-neutral-100 py-20 dark:bg-neutral-900/50" style={DOTS}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Tela 1" fn="Para quem é" title="Este curso é ideal se você..." color={PA} />
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {screens.map((s, i) => (
            <Reveal key={i} delay={i * 120} className="h-full">
              <Phone screen={i + 1} total={screens.length} items={s} offset={i * per} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Ícone + cor de cada ação do fluxo (se alternam). */
const ACTIONS: [LucideIcon, string][] = [
  [Smartphone, PA],
  [Sigma, APP_COLORS.excel],
  [Workflow, APP_COLORS.word],
  [Bot, APP_COLORS.ppt],
  [Database, "#0F7B8C"],
];

function Connector() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <span className="h-4 w-px bg-neutral-400 dark:bg-neutral-600" />
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 dark:border-neutral-600 dark:bg-neutral-900">
        <Plus className="h-3.5 w-3.5" />
      </span>
      <span className="h-3 w-px bg-neutral-400 dark:bg-neutral-600" />
      <ArrowDown className="-mt-1 h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600" />
    </div>
  );
}

function Card({
  Icon,
  color,
  kicker,
  title,
  children,
}: {
  Icon: LucideIcon;
  color: string;
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800" style={{ background: `${color}14` }}>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] text-white" style={{ background: color }}>
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">{kicker}</p>
          <p className="text-[15px] font-bold leading-snug text-neutral-900 dark:text-white">{title}</p>
        </div>
        <MoreHorizontal className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

export function PowerAppsConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  return (
    <section data-sec="conteudo" className="sb-bleed border-y border-neutral-200 py-20 dark:border-neutral-800" style={DOTS}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Fluxo" fn="Conteúdo programático" title="O que você vai aprender" color={PA} />

        {multiTier && (
          <Reveal delay={80} className="mt-10 text-center">
            <div className="inline-flex flex-wrap justify-center border border-neutral-300 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-900">
              {course.tiers.map((t, i) => (
                <button
                  key={t.levelName}
                  type="button"
                  data-tier={i}
                  onClick={() => onSelectTier(i)}
                  className={`px-4 py-2 text-sm font-bold transition ${
                    selectedTier === i ? "text-white" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                  style={selectedTier === i ? { background: PA } : undefined}
                >
                  Fluxo {t.levelName}
                </button>
              ))}
            </div>
            <TierGuide tier={tier} className="mx-auto mt-3 max-w-xl" />
          </Reveal>
        )}

        <Reveal delay={120} className="mt-10">
          <Card
            Icon={Zap}
            color={PA}
            kicker="Gatilho"
            title={multiTier ? `Quando você começa o nível ${tier.levelName}` : "Quando você começa o curso"}
          >
            <p className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
              {tier.modules.length} ações · {tier.totalHours} de aula · aula individual
            </p>
          </Card>
        </Reveal>

        {tier.modules.map((m, i) => {
          const [Icon, color] = ACTIONS[i % ACTIONS.length];
          return (
            <Fragment key={m.title}>
              <Connector />
              <Reveal delay={60}>
                <Card Icon={Icon} color={color} kicker={`Ação ${i + 1}`} title={m.title}>
                  {/* Parâmetros da ação: os tópicos */}
                  <ol>
                    {m.topics.map((t, ti) => (
                      <li
                        key={t}
                        className="flex gap-3 border-b border-neutral-100 px-4 py-2.5 text-sm leading-snug text-neutral-700 last:border-b-0 dark:border-neutral-800 dark:text-neutral-300"
                      >
                        <span className="w-8 shrink-0 pt-px font-mono text-xs text-neutral-400">
                          {i + 1}.{ti + 1}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ol>
                </Card>
              </Reveal>
            </Fragment>
          );
        })}

        <Connector />
        <Reveal delay={60}>
          <div className="rounded-md border-2 border-(--accent) bg-white p-4 dark:bg-neutral-900">
            <p className="flex items-center gap-2 text-sm font-bold text-(--accent)">
              <CircleCheck className="h-5 w-5" /> Fluxo concluído com êxito
            </p>
            <OutcomeText text={tier.outcome} className="mt-2 text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200" />
          </div>
        </Reveal>

        {tier.tools.length > 0 && (
          <Reveal delay={100} className="mt-10">
            <ToolsStrip tools={tier.tools} label="Conectores" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

