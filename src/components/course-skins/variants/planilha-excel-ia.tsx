import type { CSSProperties, ReactNode } from "react";
import { ArrowUp, ArrowUpRight, Check, Sparkles, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  FormulaHeading,
  SheetTabs,
  TierGuide,
  ToolsStrip,
} from "@/components/course-skins/variants/planilha-kit";
import {
  GRID,
  type BlockProps,
} from "@/components/course-skins/variants/planilha-base";

/**
 * Excel + IA: tudo acontece no painel do assistente de IA ao lado da planilha.
 * "Para quem é" é a tela inicial do assistente — cada perfil vira um cartão de
 * sugestão. O conteúdo é a conversa do nível: você pede cada módulo e a IA
 * responde com um intervalo sugerido (borda tracejada, "Manter/Descartar"),
 * com os tópicos já nas células.
 */

const AI_GRAD = "linear-gradient(135deg, #21A366 0%, #0EA5A4 45%, #7C5CFF 100%)";
/** Borda em degradê com fundo sólido (--pane muda no modo escuro). */
const GRAD_BORDER: CSSProperties = {
  border: "1.5px solid transparent",
  background: `linear-gradient(var(--pane), var(--pane)) padding-box, ${AI_GRAD} border-box`,
};
const PANE_VARS = "[--pane:#ffffff] dark:[--pane:#171717]";

function AiMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-md text-white ${className}`} style={{ background: AI_GRAD }}>
      <Sparkles className="h-[55%] w-[55%]" />
    </span>
  );
}

function PromptBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md px-3 py-2.5" style={GRAD_BORDER} aria-hidden="true">
      <span className="min-w-0 flex-1 truncate text-sm text-neutral-400">{placeholder}</span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white" style={{ background: AI_GRAD }}>
        <ArrowUp className="h-4 w-4" />
      </span>
    </div>
  );
}

/** Planilha esmaecida à esquerda do painel (só no desktop). */
function SheetBehind() {
  const widths = [72, 54, 88, 40, 64, 80, 48, 70, 58, 84, 44, 66];
  return (
    <div className="hidden border-r border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:block" aria-hidden="true">
      <div className="grid grid-cols-[28px_1fr_1fr_1fr] border-b border-neutral-200 bg-neutral-100 font-mono text-[10px] text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800">
        <span />
        {["A", "B", "C"].map((c) => (
          <span key={c} className="border-l border-neutral-200 py-0.5 text-center dark:border-neutral-700">
            {c}
          </span>
        ))}
      </div>
      {widths.map((w, r) => (
        <div key={r} className="grid grid-cols-[28px_1fr_1fr_1fr] border-b border-neutral-100 dark:border-neutral-800">
          <span className="bg-neutral-50 py-2 text-center font-mono text-[10px] text-neutral-400 dark:bg-neutral-800">{r + 1}</span>
          {[0, 1, 2].map((c) => (
            <span key={c} className="flex items-center border-l border-neutral-100 px-2 dark:border-neutral-800">
              <span
                className={`block h-1.5 ${r === 0 ? "bg-neutral-400 dark:bg-neutral-600" : "bg-neutral-200 dark:bg-neutral-700"}`}
                style={{ width: `${(w + c * 17) % 70 + 25}%` }}
              />
            </span>
          ))}
        </div>
      ))}
      {/* coluna sendo preenchida pela IA */}
      <div className="mx-3 mt-3 rounded-sm border border-dashed border-(--accent) bg-(--accent)/5 p-2 font-mono text-[10px] text-(--accent)">
        =IA(&quot;classificar&quot;; B2:B13)
      </div>
    </div>
  );
}

export function ExcelIaParaQuem({ course }: BlockProps) {
  return (
    <section data-sec="para-quem" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className={`grid overflow-hidden border border-neutral-300 dark:border-neutral-700 lg:grid-cols-[300px_1fr] ${PANE_VARS}`}>
            <SheetBehind />
            <div className="bg-(--pane)">
              <div className="flex items-center gap-2.5 border-b border-neutral-200 px-4 py-2.5 dark:border-neutral-800">
                <AiMark className="h-6 w-6" />
                <span className="text-sm font-bold text-neutral-900 dark:text-white">Assistente de IA</span>
                <span className="rounded-sm bg-(--accent)/10 px-1.5 py-0.5 text-[11px] font-bold text-(--accent)">Excel</span>
                <X className="ml-auto h-4 w-4 text-neutral-400" aria-hidden="true" />
              </div>
              <div className="px-5 py-8 sm:px-10 sm:py-10">
                <AiMark className="h-11 w-11" />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-(--accent)">Para quem é</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                  Este curso é ideal se você...
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Sugestões com base no seu perfil</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {course.targetAudience.map((item) => (
                    <div key={item} className="group flex gap-3 rounded-md p-4" style={GRAD_BORDER}>
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-(--accent)" aria-hidden="true" />
                      <p className="flex-1 text-[15px] leading-snug text-neutral-800 dark:text-neutral-200">{item}</p>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-300 transition group-hover:text-(--accent)" aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <PromptBar placeholder="Pergunte sobre seus dados ou descreva o que precisa…" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Bubble({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[88%] rounded-lg rounded-br-sm bg-(--accent) px-4 py-2.5 text-sm font-semibold leading-snug text-white">{children}</p>
    </div>
  );
}

function Answer({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <AiMark className="mt-1 hidden h-7 w-7 sm:flex" />
      <div className="min-w-0 flex-1 rounded-md p-4 sm:p-5" style={GRAD_BORDER}>
        {children}
      </div>
    </div>
  );
}

export function ExcelIaConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  // As linhas continuam de um módulo pro outro, como numa planilha só.
  const firstRows = tier.modules.map((_, i) => 2 + tier.modules.slice(0, i).reduce((n, m) => n + m.topics.length, 0));
  return (
    <section data-sec="conteudo" className="border-y border-neutral-200 py-20 dark:border-neutral-800" style={GRID}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="✦ IA" fn="Conteúdo programático" title="O que você vai aprender" />

        {multiTier && (
          <Reveal delay={80} className="mt-10">
            <div className="border-b border-neutral-300 dark:border-neutral-700">
              <SheetTabs tiers={course.tiers} selected={selectedTier} onSelect={onSelectTier} />
            </div>
            <TierGuide tier={tier} className="mt-3" />
          </Reveal>
        )}

        <Reveal delay={120} className="mt-6">
          <div className={`overflow-hidden border border-neutral-300 bg-(--pane) dark:border-neutral-700 ${PANE_VARS}`}>
            <div className="flex items-center gap-2.5 border-b border-neutral-200 px-4 py-2.5 dark:border-neutral-800">
              <AiMark className="h-6 w-6" />
              <span className="text-sm font-bold text-neutral-900 dark:text-white">Assistente de IA</span>
              <span className="truncate text-xs text-neutral-500">· conversa do nível {tier.levelName}</span>
            </div>

            <div className="space-y-6 px-4 py-6 sm:px-8">
              <Answer>
                <p className="text-xs font-bold uppercase tracking-wider text-(--accent)">Resumo do nível</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200">{tier.outcome}</p>
              </Answer>

              {tier.modules.map((m, i) => {
                const first = firstRows[i];
                const last = first + m.topics.length - 1;
                const col = "B";
                return (
                  <div key={m.title} className="space-y-3">
                    <Bubble>
                      {i === 0 ? "Por onde eu começo?" : `E o módulo ${i + 1}?`}
                    </Bubble>
                    <Answer>
                      <p className="text-[15px] font-black leading-snug text-neutral-900 dark:text-white">
                        Módulo {i + 1} · {m.title}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-neutral-500">
                        Intervalo sugerido {col}
                        {first}:{col}
                        {last} · {m.topics.length} tópicos
                      </p>
                      <div className="mt-3 overflow-hidden rounded-sm border border-dashed border-(--accent) bg-(--accent)/[0.04]">
                        {m.topics.map((t, ti) => (
                          <div key={t} className="grid grid-cols-[38px_1fr] border-b border-(--accent)/15 last:border-b-0">
                            <span className="flex items-center justify-center font-mono text-[11px] text-neutral-400">{first + ti}</span>
                            <span className="border-l border-(--accent)/15 px-3 py-2 text-sm leading-snug text-neutral-800 dark:text-neutral-200">
                              {t}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex gap-2 text-xs font-bold" aria-hidden="true">
                        <span className="flex items-center gap-1 rounded-sm bg-(--accent) px-2.5 py-1 text-white">
                          <Check className="h-3.5 w-3.5" /> Manter
                        </span>
                        <span className="rounded-sm border border-neutral-300 px-2.5 py-1 text-neutral-500 dark:border-neutral-700">Descartar</span>
                      </div>
                    </Answer>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-neutral-200 p-4 dark:border-neutral-800">
              <PromptBar placeholder="Peça outro exemplo, uma fórmula ou um gráfico…" />
            </div>
          </div>
        </Reveal>

        {tier.tools.length > 0 && (
          <Reveal delay={160} className="mt-8">
            <ToolsStrip tools={tier.tools} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

