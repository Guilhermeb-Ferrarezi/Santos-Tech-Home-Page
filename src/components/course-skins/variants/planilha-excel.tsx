import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  FormulaHeading,
  SheetTabs,
  TierGuide,
  ToolsStrip,
} from "@/components/course-skins/variants/planilha-kit";
import {
  COLS,
  GRID,
  type BlockProps,
} from "@/components/course-skins/variants/planilha-base";

/**
 * Excel (referência da pele): "Para quem é" é uma tabela com cabeçalho de
 * colunas (A, B) e a coluna "É você? → SIM"; o conteúdo é uma mini-planilha por
 * módulo, com o resultado do nível na barra de fórmulas.
 */

export function ExcelParaQuem({ course }: BlockProps) {
  return (
    <section data-sec="para-quem" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="B2" fn="Para quem é" title="Este curso é ideal se você..." />
        <Reveal delay={120} className="mt-10">
          <div className="overflow-hidden rounded-sm border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
            <div className="grid grid-cols-[40px_1fr_96px] border-b border-neutral-300 bg-neutral-100 font-mono text-[11px] text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800">
              <span />
              <span className="border-l border-neutral-300 px-3 py-1 text-center dark:border-neutral-700">A</span>
              <span className="border-l border-neutral-300 px-3 py-1 text-center dark:border-neutral-700">B</span>
            </div>
            <div className="grid grid-cols-[40px_1fr_96px] border-b border-neutral-200 bg-(--accent)/10 text-xs font-black text-neutral-800 dark:border-neutral-800 dark:text-neutral-200">
              <span className="flex items-center justify-center bg-neutral-100 font-mono font-normal text-neutral-500 dark:bg-neutral-800">
                1
              </span>
              <span className="border-l border-neutral-200 px-3 py-2 dark:border-neutral-800">Situação</span>
              <span className="border-l border-neutral-200 px-3 py-2 text-center dark:border-neutral-800">É você?</span>
            </div>
            {course.targetAudience.map((item, i) => (
              <div
                key={item}
                className="grid grid-cols-[40px_1fr_96px] border-b border-neutral-200 text-sm last:border-b-0 hover:bg-(--accent)/[0.04] dark:border-neutral-800"
              >
                <span className="flex items-center justify-center bg-neutral-100 font-mono text-[11px] text-neutral-500 dark:bg-neutral-800">
                  {i + 2}
                </span>
                <span className="border-l border-neutral-200 px-3 py-2.5 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                  {item}
                </span>
                <span className="flex items-center justify-center border-l border-neutral-200 dark:border-neutral-800">
                  <span className="inline-flex items-center gap-1 rounded-sm bg-(--accent) px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                    <Check className="h-3 w-3" /> SIM
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ExcelConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  return (
    <section data-sec="conteudo" className="border-y border-neutral-200 py-20 dark:border-neutral-800" style={GRID}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="C3" fn="Conteúdo programático" title="O que você vai aprender" />

        {multiTier && (
          <Reveal delay={80} className="mt-10">
            <div className="border-b border-neutral-300 dark:border-neutral-700">
              <SheetTabs tiers={course.tiers} selected={selectedTier} onSelect={onSelectTier} />
            </div>
            <TierGuide tier={tier} className="mt-3" />
          </Reveal>
        )}

        <Reveal delay={120}>
          <div className="mt-6 flex overflow-hidden rounded-sm border border-neutral-300 bg-white font-mono text-xs dark:border-neutral-700 dark:bg-neutral-900">
            <span className="shrink-0 border-r border-neutral-300 bg-neutral-50 px-3 py-2 font-bold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              Resultado
            </span>
            <span className="shrink-0 border-r border-neutral-300 px-2 py-2 font-bold italic text-(--accent) dark:border-neutral-700">
              fx
            </span>
            <span className="px-3 py-2 font-sans text-sm font-semibold text-neutral-800 dark:text-neutral-200">{tier.outcome}</span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {tier.modules.map((m, mi) => (
            <Reveal key={m.title} delay={mi * 60}>
              <div className="h-full overflow-hidden rounded-sm border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-3 bg-(--accent) px-3 py-2 text-white">
                  <span className="shrink-0 font-mono text-[11px] font-bold opacity-80">{COLS[mi]}1</span>
                  <span className="text-sm font-black">{m.title}</span>
                </div>
                {m.topics.map((topic, ti) => (
                  <div
                    key={topic}
                    className="grid grid-cols-[34px_1fr_34px] border-b border-neutral-200 text-sm last:border-b-0 dark:border-neutral-800"
                  >
                    <span className="flex items-center justify-center bg-neutral-50 font-mono text-[10px] text-neutral-400 dark:bg-neutral-800">
                      {ti + 2}
                    </span>
                    <span className="border-l border-neutral-200 px-3 py-2 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                      {topic}
                    </span>
                    <span className="flex items-center justify-center border-l border-neutral-200 text-(--accent) dark:border-neutral-800">
                      <Check className="h-4 w-4" />
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {tier.tools.length > 0 && (
          <Reveal delay={160} className="mt-8">
            <ToolsStrip tools={tier.tools} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

