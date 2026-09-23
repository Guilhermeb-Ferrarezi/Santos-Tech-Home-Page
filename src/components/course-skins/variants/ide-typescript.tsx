import { useState } from "react";
import { ArrowRight, Box, CheckCircle2, Info, Type } from "lucide-react";
import { A, F, K, M, NivelSeletor, P, Win } from "@/components/course-skins/variants/ide-kit";
import { nn, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";

/**
 * TypeScript: “Para quem é” é o autocomplete do editor sugerindo os perfis de
 * um tipo união; o conteúdo é a hierarquia de interfaces do nível, cada
 * módulo estendendo o anterior, com a checagem de tipos no rodapé.
 */

export function TypescriptPublico({ itens }: PublicoProps) {
  return (
    <Win title="publico-alvo.ts" className="mx-auto max-w-4xl">
      <div className="px-2 py-4 font-mono text-[13px] leading-6 sm:px-4">
        <p className="flex">
          <span className="w-8 shrink-0 select-none pr-3 text-right text-white/20">1</span>
          <span>
            <K>type</K> <F>PublicoAlvo</F> <P>=</P> <span className="text-white/40">/* {itens.length} perfis */</span>
          </span>
        </p>
        <p className="flex">
          <span className="w-8 shrink-0 select-none pr-3 text-right text-white/20">2</span>
          <span className="min-w-0">
            <K>const</K> <P>voce</P>
            <P>: </P>
            <F>PublicoAlvo</F> <P>= </P>
            <span className="text-(--accent-2)">&quot;</span>
            <span className="inline-block h-4 w-[2px] translate-y-[3px] animate-pulse bg-white" />
          </span>
        </p>

        {/* Widget de sugestões + detalhes */}
        <div className="ml-4 mt-1 grid overflow-hidden rounded-md border border-white/15 bg-[#161c2b] [font-family:Poppins,system-ui,sans-serif] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)] sm:ml-10 lg:grid-cols-[1.35fr_1fr]">
          <ul className="min-w-0 py-1">
            {itens.map((item, i) => (
              <li
                key={item}
                className={`flex items-start gap-2.5 px-3 py-2 text-[14px] leading-snug ${i === 0 ? "bg-(--accent)/30 text-white" : "text-white/80"}`}
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-white/10 font-mono text-[9px] font-bold text-(--accent-2)">
                  <Type className="h-3 w-3" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-(--accent-2)">&quot;</span>
                  {item}
                  <span className="text-(--accent-2)">&quot;</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-white/10 p-4 lg:border-l lg:border-t-0">
            <p className="font-mono text-[12.5px] text-white/70">
              <K>type</K> <F>PublicoAlvo</F>
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80">Qualquer um destes perfis é um valor válido para você.</p>
            <p className="mt-4 flex items-center gap-2 rounded-md bg-[#3fb950]/12 px-3 py-2 text-[14px] font-semibold text-[#7ee2a8]">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> Esse curso é pra você
            </p>
            <p className="mt-4 font-mono text-[11px] text-white/35">↑↓ para navegar · Enter para aceitar</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 border-t border-white/10 bg-black/40 px-4 py-2 font-mono text-[11.5px] text-white/50">
        <span className="flex items-center gap-1.5 text-[#7ee2a8]">
          <CheckCircle2 className="h-3.5 w-3.5" /> 0 erros
        </span>
        <span>TypeScript 5 · strict</span>
      </div>
    </Win>
  );
}

// ── Hierarquia de interfaces ───────────────────────────────────────────────

const nomeInterface = (i: number) => `Modulo${nn(i)}`;

export function TypescriptConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <p className="font-mono text-[12.5px] text-white/50">
          <span className="text-white/35">Hierarquia de tipos ·</span> curso.d.ts
        </p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} rotulo={(n) => `<${n.replace(/\s+/g, "")}>`} />
      </div>

      {/* Cadeia de interfaces: cada módulo estende o anterior */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 border-b border-white/10 bg-white/[0.02] px-4 py-5 sm:px-6">
        {tier.modules.map((mod, i) => {
          const on = i === atual;
          return (
            <div key={mod.title} className="flex items-center gap-2">
              {i > 0 && (
                <span className="flex items-center gap-1 font-mono text-[11px] text-[#c792ea]/80">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
              <button
                type="button"
                onClick={() => setSel(i)}
                title={mod.title}
                className={`flex max-w-[210px] flex-col rounded-md border px-2.5 py-1.5 text-left transition ${
                  on ? "border-(--accent) bg-(--accent)/20 text-white" : "border-white/15 text-white/65 hover:border-white/35 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-1.5 font-mono text-[12px]">
                  <Box className={`h-3.5 w-3.5 shrink-0 ${on ? "text-(--accent-2)" : "text-white/40"}`} />
                  {nomeInterface(i)}
                </span>
                <span className="mt-0.5 truncate text-[12.5px] text-white/55">{mod.title}</span>
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        {/* Definição da interface selecionada */}
        <div className="min-w-0 px-4 py-5 font-mono text-[13px] leading-7 sm:px-6">
          <p className="text-white/40">/** {m.title} */</p>
          <p>
            <K>export interface</K> <F>{nomeInterface(atual)}</F>
            {atual > 0 && (
              <>
                {" "}
                <K>extends</K> <F>{nomeInterface(atual - 1)}</F>
              </>
            )}{" "}
            <P>{"{"}</P>
          </p>
          {m.topics.map((t, k) => (
            <div key={t} className="flex gap-2 pl-5">
              <span className="shrink-0">
                <K>readonly</K> <A>t{k + 1}</A>
                <P>:</P>
              </span>
              <span className="min-w-0 [font-family:Poppins,system-ui,sans-serif] text-[14px] leading-7 text-white/90">
                <span className="text-(--accent-2)">&quot;</span>
                {t}
                <span className="text-(--accent-2)">&quot;</span>
                <P>;</P>
              </span>
            </div>
          ))}
          <p>
            <P>{"}"}</P>
          </p>
        </div>

        {/* Quick info + checagem de tipos */}
        <div className="min-w-0 border-t border-white/10 p-4 sm:p-6 lg:border-l lg:border-t-0">
          <div className="rounded-md border border-white/15 bg-[#161c2b] p-4">
            <p className="flex items-center gap-2 font-mono text-[12px] text-white/60">
              <Info className="h-3.5 w-3.5 text-(--accent)" /> (interface) {nomeInterface(atual)}
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-snug text-white">{m.title}</p>
            <p className="mt-2 text-[13px] text-white/55">
              Módulo {atual + 1} de {total} · {m.topics.length} tópicos
              {atual > 0 && <> · herda tudo de {nomeInterface(atual - 1)}</>}
            </p>
          </div>

          <div className="mt-5 rounded-md border border-[#3fb950]/30 bg-[#3fb950]/[0.06] p-4">
            <p className="flex items-center gap-2 font-mono text-[12px] text-[#7ee2a8]">
              <CheckCircle2 className="h-3.5 w-3.5" /> tsc --noEmit · 0 erros
            </p>
            <p className="mt-2 text-[14px] leading-snug text-white/90">{tier.outcome}</p>
            <p className="mt-2 font-mono text-[11.5px] text-white/40">
              <M>{ritmo(tier, meta)}</M>
            </p>
          </div>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">devDependencies</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tier.tools.map((tool) => (
              <span key={tool} className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[12.5px] text-white/75">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
