import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react";
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

/**
 * PowerPoint: "Para quem é" é o modo Classificação de slides — uma seção do
 * deck com um slide por perfil, cada um com um layout diferente. O conteúdo é o
 * modo Normal: miniaturas à esquerda, o slide ativo grande (um módulo por
 * slide, tópicos em marcadores) e as anotações do orador com o objetivo do
 * nível. No celular os slides aparecem empilhados.
 */

const P = APP_COLORS.ppt;

/** Um slide do modo Classificação: quatro layouts que se alternam. */
function SorterSlide({ text, i }: { text: string; i: number }) {
  const layout = i % 4;
  return (
    <div className="relative flex h-full min-h-[170px] flex-col overflow-hidden bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_10px_24px_-12px_rgba(0,0,0,0.3)] dark:bg-neutral-900 sm:aspect-video sm:min-h-0">
      {layout === 0 && <span className="absolute inset-y-0 left-0 w-2" style={{ background: P }} />}
      {layout === 2 && <span className="absolute inset-x-0 top-0 h-2" style={{ background: P }} />}
      {layout === 3 && (
        <span className="absolute bottom-0 right-0 h-16 w-16" style={{ background: P, clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
      )}
      <div className={`flex flex-1 flex-col justify-center ${layout === 0 ? "pl-2" : ""}`}>
        {layout === 1 && (
          <span className="-mb-2 font-serif text-5xl leading-none" style={{ color: P }}>
            “
          </span>
        )}
        {layout === 2 && (
          <span className="mb-1 font-mono text-xs font-bold" style={{ color: P }}>
            {String(i + 1).padStart(2, "0")}
          </span>
        )}
        <p className="text-[15px] font-semibold leading-snug text-neutral-800 dark:text-neutral-100">{text}</p>
      </div>
      <span className="mt-2 h-1 w-10" style={{ background: layout === 3 ? "transparent" : `${P}55` }} />
    </div>
  );
}

export function PowerPointParaQuem({ course }: BlockProps) {
  const items = course.targetAudience;
  return (
    <section data-sec="para-quem" className="bg-neutral-100 py-20 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Slide 2" fn="Para quem é" title="Este curso é ideal se você..." color={P} />

        <Reveal delay={120} className="mt-10">
          {/* Modos de exibição */}
          <div className="flex items-center gap-1 border-b border-neutral-300 text-xs font-semibold text-neutral-500 dark:border-neutral-700">
            <span className="px-3 py-2">Normal</span>
            <span className="border-b-2 px-3 py-2 text-neutral-900 dark:text-white" style={{ borderColor: P }}>
              Classificação de slides
            </span>
            <span className="hidden px-3 py-2 sm:inline">Anotações</span>
          </div>
          {/* Cabeçalho da seção do deck */}
          <p className="mt-6 flex items-center gap-2 text-sm font-bold text-neutral-800 dark:text-neutral-200">
            <ChevronRight className="h-4 w-4 rotate-90" style={{ color: P }} />
            Para quem é
            <span className="font-normal text-neutral-500">({items.length} slides)</span>
          </p>
          <div className="mt-4 grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div key={item} className="flex gap-2">
                <span className="w-5 shrink-0 pt-1 text-right text-xs font-semibold text-neutral-500">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className={i === 0 ? "outline outline-[3px] outline-offset-[3px]" : ""} style={i === 0 ? { outlineColor: P } : undefined}>
                    <SorterSlide text={item} i={i} />
                  </div>
                  <Sparkles className="mt-1.5 h-3 w-3 text-neutral-400" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Slide grande do modo Normal: um módulo, tópicos em marcadores. */
function ModuleSlide({
  title,
  topics,
  index,
  total,
  course,
}: {
  title: string;
  topics: string[];
  index: number;
  total: number;
  course: string;
}) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden bg-white px-6 pb-12 pt-8 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_18px_40px_-18px_rgba(0,0,0,0.4)] dark:bg-neutral-900 sm:px-10 sm:pt-10 lg:min-h-[460px]">
      <span className="absolute right-0 top-0 h-24 w-24 opacity-90" style={{ background: P, clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: P }}>
        Módulo {index + 1} de {total}
      </p>
      <h3 className="mt-2 max-w-[85%] text-2xl font-black leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-3xl">{title}</h3>
      <span className="mt-4 h-1 w-16" style={{ background: P }} />
      <ul className="mt-6 space-y-2.5">
        {topics.map((t) => (
          <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
            <span className="mt-[0.6em] h-2 w-2 shrink-0" style={{ background: P }} />
            {t}
          </li>
        ))}
      </ul>
      <div className="absolute inset-x-6 bottom-4 flex justify-between text-[11px] text-neutral-400 sm:inset-x-10">
        <span className="truncate">Santos Tech · {course}</span>
        <span className="tabular-nums">{index + 2}</span>
      </div>
    </div>
  );
}

export function PowerPointConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  const [picked, setPicked] = useState(0);
  const n = tier.modules.length;
  const active = Math.min(picked, n - 1);

  return (
    <section data-sec="conteudo" className="border-y border-neutral-200 py-20 dark:border-neutral-800" style={DOTS}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Slide 3" fn="Conteúdo programático" title="O que você vai aprender" color={P} />

        {multiTier && (
          <Reveal delay={80} className="mt-10">
            {/* Níveis como seções do deck */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-neutral-500">Seção:</span>
              {course.tiers.map((t, i) => (
                <button
                  key={t.levelName}
                  type="button"
                  data-tier={i}
                  onClick={() => {
                    onSelectTier(i);
                    setPicked(0);
                  }}
                  className={`flex items-center gap-1.5 border px-3 py-1.5 text-sm font-bold transition ${
                    selectedTier === i
                      ? "text-white"
                      : "border-neutral-300 bg-white text-neutral-600 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                  style={selectedTier === i ? { background: P, borderColor: P } : undefined}
                >
                  <ChevronRight className={`h-3.5 w-3.5 transition ${selectedTier === i ? "rotate-90" : ""}`} />
                  {t.levelName}
                </button>
              ))}
            </div>
            <TierGuide tier={tier} className="mt-3" />
          </Reveal>
        )}

        <Reveal delay={120} className="mt-6">
          <div className="overflow-hidden border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900/70">
            <div className="grid lg:grid-cols-[216px_1fr]">
              {/* Miniaturas */}
              <ol className="hidden max-h-[640px] space-y-3 overflow-y-auto border-r border-neutral-300 bg-white/60 p-3 dark:border-neutral-700 dark:bg-neutral-900 lg:block">
                {tier.modules.map((m, i) => (
                  <li key={m.title} className="flex gap-2">
                    <span className="w-4 shrink-0 pt-0.5 text-right text-[11px] font-semibold text-neutral-500">{i + 2}</span>
                    <button
                      type="button"
                      onClick={() => setPicked(i)}
                      aria-label={`Ver módulo ${i + 1}: ${m.title}`}
                      className="relative block aspect-video min-w-0 flex-1 overflow-hidden border-2 bg-white p-2 text-left transition dark:bg-neutral-800"
                      style={{ borderColor: active === i ? P : "transparent" }}
                    >
                      <span className="absolute right-0 top-0 h-5 w-5" style={{ background: P, clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
                      <span className="line-clamp-2 pr-3 text-[11px] font-bold leading-tight text-neutral-800 dark:text-neutral-100">{m.title}</span>
                      <span className="mt-1.5 block h-0.5 w-5" style={{ background: P }} />
                      <span className="mt-1.5 block space-y-1">
                        {[88, 72, 80].map((w) => (
                          <span key={w} className="block h-1 bg-neutral-200 dark:bg-neutral-700" style={{ width: `${w}%` }} />
                        ))}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>

              {/* Slide ativo (no celular, todos empilhados) */}
              <div className="min-w-0 space-y-6 p-3 sm:p-6 lg:space-y-0 lg:p-8">
                {tier.modules.map((m, i) => (
                  <div key={m.title} className={i === active ? "" : "lg:hidden"}>
                    <ModuleSlide title={m.title} topics={m.topics} index={i} total={n} course={course.nome} />
                  </div>
                ))}
              </div>
            </div>

            {/* Anotações do orador */}
            <div className="border-t border-neutral-300 bg-white px-4 py-4 dark:border-neutral-700 dark:bg-neutral-900 sm:px-6">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Anotações do orador</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200">
                <span className="font-bold">{multiTier ? "Ao final deste nível: " : "Ao final deste curso: "}</span>
                {tier.outcome}
              </p>
            </div>

            {/* Barra de status */}
            <div className="flex items-center justify-between gap-3 border-t border-neutral-300 px-4 py-2 text-xs text-neutral-500 dark:border-neutral-700">
              <span className="hidden tabular-nums lg:inline">
                Slide {active + 2} de {n + 1}
              </span>
              <span className="tabular-nums lg:hidden">{n} slides · um por módulo</span>
              <div className="flex items-center gap-2">
                <div className="hidden items-center lg:flex">
                  <button
                    type="button"
                    aria-label="Slide anterior"
                    disabled={active === 0}
                    onClick={() => setPicked(active - 1)}
                    className="p-1 hover:text-neutral-900 disabled:opacity-30 dark:hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Próximo slide"
                    disabled={active === n - 1}
                    onClick={() => setPicked(active + 1)}
                    className="p-1 hover:text-neutral-900 disabled:opacity-30 dark:hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <span className="flex items-center gap-1.5 px-2.5 py-1 font-bold text-white" style={{ background: P }}>
                  <Play className="h-3 w-3 fill-current" /> Apresentar
                </span>
              </div>
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

