import { useState } from "react";
import { Check, CircleDot, Route } from "lucide-react";
import type { Modulo } from "@/components/course-skins/variants/ide-util";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { nn, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
^ * ADS (curso): “Para quem é” é o mural de personas da análise de
 * requisitos, em post-its; o conteúdo é a trilha do curso em estilo
 * roadmap — disciplinas agrupadas por etapa, com progresso até a disciplina
 * selecionada.
 */

const POSTITS = ["#FFE27A", "#9EE6B8", "#9CC7FF", "#FFB4C2", "#D6B8FF", "#FFC894"];
const GIROS = [-1.6, 1.2, -0.6, 1.8, -1.2, 0.8];

export function AdsPublico({ itens }: PublicoProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0f1524] p-4 sm:p-8" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/45">Análise de requisitos · mural de personas</p>
        <p className="font-mono text-[12px] text-white/35">{itens.length} personas</p>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((item, i) => (
          <div
            key={item}
            className="relative rounded-sm p-4 pt-5 text-[#1a1d24] shadow-[0_14px_24px_-12px_rgba(0,0,0,0.8)]"
            style={{ background: POSTITS[i % POSTITS.length], transform: `rotate(${GIROS[i % GIROS.length]}deg)` }}
          >
            {/* fita adesiva */}
            <span className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-3deg] bg-white/45" />
            <p className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-black/50">
              <span>Persona {nn(i)}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 text-[12px] text-black/70">{String.fromCharCode(65 + i)}</span>
            </p>
            <p className="mt-2 text-[14.5px] font-medium leading-snug">{item}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-[15px] font-bold text-white">
        <Check className="h-5 w-5 text-(--accent-2)" /> Requisito atendido: esse curso é pra você
      </p>
    </div>
  );
}

// ── Roadmap do curso ────────────────────────────────────────────────────────

function Topicos({ m }: { m: Modulo }) {
  return (
    <ul className="space-y-2">
      {m.topics.map((t) => (
        <li key={t} className="flex gap-2.5 text-[14px] leading-snug text-white/85">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-(--accent-2)/60" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function AdsConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const porEtapa = 4;
  const etapas = Array.from({ length: Math.ceil(total / porEtapa) }, (_, e) => tier.modules.slice(e * porEtapa, (e + 1) * porEtapa).map((mod, k) => ({ mod, i: e * porEtapa + k })));
  const progresso = Math.round(((atual + 1) / total) * 100);

  return (
    <div className="rounded-xl border border-white/10 bg-[#0b0f19] p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-white/45">
          <Route className="h-4 w-4 text-(--accent-2)" /> Trilha do curso
        </p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} estilo="pilula" rotulo={(n, i) => `${n} · ${course.tiers[i].modules.length} disciplinas`} />
      </div>

      {/* barra de progresso */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between font-mono text-[12px]">
          <span className="text-white/55">
            disciplina {atual + 1} de {total}
          </span>
          <span className="font-bold text-(--accent-2)">{progresso}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full rounded-full bg-gradient-to-r from-(--accent) to-(--accent-2) transition-all" style={{ width: `${progresso}%` }} />
        </div>
      </div>

      <div className="mt-7 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
        {/* Roadmap: espinha central com as etapas e disciplinas alternando de lado */}
        <div className="relative min-w-0">
          <span className="absolute bottom-0 left-4 top-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
          {etapas.map((etapa, e) => (
            <div key={e} className="relative pb-6">
              <p className="relative z-10 mb-4 ml-9 w-fit rounded-md bg-(--accent-2) px-3 py-1 text-[13px] font-black text-[#0b0f19] md:mx-auto">
                Etapa {e + 1}
              </p>
              <div className="space-y-3">
                {etapa.map(({ mod, i }) => {
                  const feita = i < atual;
                  const on = i === atual;
                  const direita = i % 2 === 1;
                  return (
                    <div key={`${mod.title}-${i}`} className={`relative flex md:w-1/2 ${direita ? "md:ml-auto md:pl-8" : "md:pr-8"} pl-11 md:pl-0`}>
                      {/* nó na espinha */}
                      <span
                        className={`absolute top-3 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 left-[7px] ${
                          direita ? "md:-left-2.5" : "md:left-auto md:-right-2.5"
                        } ${on ? "border-(--accent-2) bg-(--accent-2)" : feita ? "border-(--accent) bg-(--accent)" : "border-white/30 bg-[#0b0f19]"}`}
                      >
                        {feita && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                        {on && <CircleDot className="h-3 w-3 text-[#0b0f19]" />}
                      </span>
                      <div className="w-full">
                        <button
                          type="button"
                          onClick={() => setSel(i)}
                          className={`flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition ${
                            on ? "border-(--accent-2) bg-(--accent-2)/10" : feita ? "border-(--accent)/40 bg-(--accent)/[0.07]" : "border-white/10 bg-white/[0.02] hover:border-white/30"
                          }`}
                        >
                          <span className="mt-px font-mono text-[11.5px] text-white/40">{nn(i)}</span>
                          <span className={`text-[14px] leading-snug ${on ? "font-semibold text-white" : "text-white/80"}`}>{mod.title}</span>
                        </button>
                        {/* no celular, os tópicos abrem logo abaixo da disciplina */}
                        {on && (
                          <div className="mt-2 rounded-lg border border-white/10 bg-[#0f1524] p-3 lg:hidden">
                            <Topicos m={mod} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <p className="relative z-10 ml-9 w-fit rounded-md border border-(--accent-2)/60 px-3 py-1 text-[13px] font-bold text-(--accent-2) md:mx-auto">
            Projeto de conclusão entregue
          </p>
        </div>

        {/* Painel da disciplina (desktop) + resultado */}
        <div className="min-w-0 space-y-4 lg:sticky lg:top-24">
          <div className="hidden rounded-xl border border-(--accent-2)/40 bg-[#0f1524] p-5 lg:block">
            <p className="font-mono text-[11.5px] text-(--accent-2)">
              Disciplina {nn(atual)} · etapa {Math.floor(atual / porEtapa) + 1}
            </p>
            <p className="mt-1 text-lg font-bold leading-snug text-white">{m.title}</p>
            <div className="mt-4">
              <Topicos m={m} />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Perfil de saída</p>
            <OutcomeText text={tier.outcome} className="mt-2 text-[14px] leading-snug text-white/90" />
            <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Tecnologias da trilha</p>
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
    </div>
  );
}
