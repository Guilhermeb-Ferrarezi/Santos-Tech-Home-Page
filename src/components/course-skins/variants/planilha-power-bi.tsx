import type { ReactNode } from "react";
import { MoreHorizontal } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ToolLogo } from "@/components/tool-logo";
import {
  FormulaHeading,
  PageTabs,
  TierGuide,
  ToolsStrip,
} from "@/components/course-skins/variants/planilha-kit";
import {
  APP_COLORS,
  DOTS,
  type BlockProps,
} from "@/components/course-skins/variants/planilha-base";

/**
 * Power BI: "Para quem é" é uma página de relatório — segmentação no topo,
 * cartão com o total de perfis e um cartão de KPI por perfil, com os painéis
 * Filtros/Visualizações recolhidos na borda. O conteúdo é o relatório do
 * nível: páginas em abas (os níveis), cartões com números reais (módulos,
 * tópicos, carga horária), o resultado como cartão de destaque e cada módulo
 * como um visual diferente (barras, tabela, lista).
 */

const Y = APP_COLORS.powerbi;
const CANVAS = "bg-[#eeedeb] dark:bg-neutral-950";
const TILE = "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:bg-neutral-900";

/** Mini gráfico de colunas decorativo, determinístico pelo índice. */
function Spark({ seed }: { seed: number }) {
  const hs = [0.35, 0.55, 0.45, 0.7, 0.6, 0.9].map((h, i) => ((h + ((seed * 7 + i * 3) % 5) * 0.08) % 1) * 0.7 + 0.3);
  return (
    <svg viewBox="0 0 66 24" className="h-6 w-16" aria-hidden="true">
      {hs.map((h, i) => (
        <rect key={i} x={i * 11} y={24 - h * 24} width="8" height={h * 24} fill={i === hs.length - 1 ? Y : "#c8c6c4"} />
      ))}
    </svg>
  );
}

function VisualHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">{children}</div>
      <MoreHorizontal className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
    </div>
  );
}

export function PowerBiParaQuem({ course }: BlockProps) {
  const items = course.targetAudience;
  return (
    <section data-sec="para-quem" className="sb-bleed py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Página 2" fn="Para quem é" title="Este curso é ideal se você..." />

        <Reveal delay={120} className="mt-10">
          <div className="flex overflow-hidden border border-neutral-300 dark:border-neutral-700">
            <div className={`min-w-0 flex-1 p-3 sm:p-5 ${CANVAS}`}>
              {/* Linha de cima: segmentação + cartão */}
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className={`${TILE} p-4`}>
                  <p className="text-xs font-semibold text-neutral-500">Segmentação · Você se identifica?</p>
                  <div className="mt-2 flex flex-wrap gap-1.5 text-sm font-semibold">
                    <span className="border border-neutral-300 px-3 py-1 text-neutral-500 dark:border-neutral-700">Todos</span>
                    <span className="border px-3 py-1 text-neutral-900" style={{ background: Y, borderColor: Y }}>
                      Sim, sou eu
                    </span>
                    <span className="border border-neutral-300 px-3 py-1 text-neutral-500 dark:border-neutral-700">Ainda não sei</span>
                  </div>
                </div>
                <div className={`${TILE} flex items-center gap-4 p-4 sm:min-w-56`}>
                  <span className="text-5xl font-black leading-none text-neutral-900 dark:text-white">{items.length}</span>
                  <span className="text-sm leading-tight text-neutral-600 dark:text-neutral-400">
                    perfis para quem
                    <br />o curso foi feito
                  </span>
                </div>
              </div>

              {/* Um cartão de KPI por perfil */}
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <div key={item} className={`${TILE} flex flex-col border-t-[3px] p-4`} style={{ borderTopColor: Y }}>
                    <VisualHeader>
                      <p className="text-xs font-semibold text-neutral-500">Perfil {String(i + 1).padStart(2, "0")}</p>
                    </VisualHeader>
                    <p className="mt-2 flex-1 text-[15px] font-semibold leading-snug text-neutral-900 dark:text-neutral-100">{item}</p>
                    <div className="mt-4 flex items-end justify-between border-t border-neutral-100 pt-3 dark:border-neutral-800">
                      <span className="text-xs font-bold text-(--accent)">▲ Indicado</span>
                      <Spark seed={i} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Painéis recolhidos */}
            <div className="hidden w-10 shrink-0 flex-col items-center gap-6 border-l border-neutral-300 bg-white py-4 text-xs font-semibold text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 sm:flex" aria-hidden="true">
              <span className="[writing-mode:vertical-rl]">Filtros</span>
              <span className="[writing-mode:vertical-rl]">Visualizações</span>
              <span className="[writing-mode:vertical-rl]">Dados</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Largura "de dado" determinística para as barras de um visual. */
const barW = (mi: number, ti: number) => 45 + ((mi * 5 + ti * 13) % 50);

function ModuleVisual({ title, topics, i }: { title: string; topics: string[]; i: number }) {
  const kind = i % 3;
  return (
    <div className={`${TILE} h-full p-4 sm:p-5`}>
      <VisualHeader>
        <p className="text-xs font-semibold text-neutral-500">
          Visual {i + 1} · {kind === 0 ? "Gráfico de barras" : kind === 1 ? "Tabela" : "Lista"}
        </p>
        <h3 className="mt-1 text-base font-black leading-snug text-neutral-900 dark:text-white">{title}</h3>
      </VisualHeader>

      {kind === 0 && (
        <ul className="mt-4 space-y-3">
          {topics.map((t, ti) => (
            <li key={t}>
              <p className="text-sm leading-snug text-neutral-700 dark:text-neutral-300">{t}</p>
              <span className="mt-1 block h-2" style={{ width: `${barW(i, ti)}%`, background: ti === 0 ? Y : `${Y}66` }} />
            </li>
          ))}
        </ul>
      )}

      {kind === 1 && (
        <table className="mt-4 w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 text-xs font-bold text-neutral-500" style={{ borderColor: Y }}>
              <th className="w-10 py-1.5 font-bold">Nº</th>
              <th className="py-1.5 font-bold">Tópico</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((t, ti) => (
              <tr key={t} className="border-b border-neutral-100 even:bg-neutral-50 dark:border-neutral-800 dark:even:bg-white/[0.03]">
                <td className="py-2 align-top font-mono text-xs text-neutral-400">{ti + 1}</td>
                <td className="py-2 leading-snug text-neutral-700 dark:text-neutral-300">{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {kind === 2 && (
        <>
          <p className="mt-3 text-3xl font-black leading-none text-neutral-900 dark:text-white">
            {topics.length}
            <span className="ml-1.5 text-sm font-semibold text-neutral-500">tópicos</span>
          </p>
          <ul className="mt-3 space-y-2">
            {topics.map((t) => (
              <li key={t} className="flex gap-2.5 text-sm leading-snug text-neutral-700 dark:text-neutral-300">
                <span className="mt-[0.4em] h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: Y }} />
                {t}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function PowerBiConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  const topics = tier.modules.reduce((n, m) => n + m.topics.length, 0);
  const kpis: [string, string][] = [
    [String(tier.modules.length), "módulos"],
    [String(topics), "tópicos"],
    [tier.totalHours, "de aula"],
  ];
  return (
    <section data-sec="conteudo" className="sb-bleed border-y border-neutral-200 py-20 dark:border-neutral-800" style={DOTS}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Página 3" fn="Conteúdo programático" title="O que você vai aprender" />

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden border border-neutral-300 dark:border-neutral-700">
            {/* Barra do serviço */}
            <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2 text-xs text-white">
              <ToolLogo name="powerbi" className="h-4 w-4" />
              <span className="truncate font-semibold">{course.nome} · Relatório</span>
              <span className="ml-auto hidden text-white/60 sm:inline">Exportar · Compartilhar · Atualizado agora</span>
            </div>
            {/* Páginas = níveis */}
            <div className="border-b border-neutral-300 bg-white px-2 dark:border-neutral-700 dark:bg-neutral-900">
              {multiTier ? (
                <PageTabs tiers={course.tiers} selected={selectedTier} onSelect={onSelectTier} />
              ) : (
                <span className="relative inline-block px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white">
                  {tier.levelName}
                  <span className="absolute inset-x-2 bottom-0 h-[3px]" style={{ background: Y }} />
                </span>
              )}
            </div>

            <div className={`p-3 sm:p-5 ${CANVAS}`}>
              {multiTier && <TierGuide tier={tier} className="mb-3" />}

              {/* Cartões */}
              <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
                <div className={`${TILE} border-l-4 p-4`} style={{ borderLeftColor: Y }}>
                  <p className="text-xs font-semibold text-neutral-500">{multiTier ? "Resultado do nível" : "Resultado do curso"}</p>
                  <p className="mt-1 text-[15px] font-semibold leading-snug text-neutral-900 dark:text-neutral-100">{tier.outcome}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {kpis.map(([value, label]) => (
                    <div key={label} className={`${TILE} flex flex-col justify-center px-4 py-3 text-center lg:min-w-28`}>
                      <span className="text-3xl font-black leading-none text-neutral-900 dark:text-white">{value}</span>
                      <span className="mt-1 text-xs font-semibold text-neutral-500">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Um visual por módulo */}
              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                {tier.modules.map((m, i) => (
                  <div key={m.title} className={tier.modules.length % 2 === 1 && i === tier.modules.length - 1 ? "lg:col-span-2" : ""}>
                    <ModuleVisual title={m.title} topics={m.topics} i={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {tier.tools.length > 0 && (
          <Reveal delay={160} className="mt-8">
            <ToolsStrip tools={tier.tools} label="Fontes e ferramentas" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

