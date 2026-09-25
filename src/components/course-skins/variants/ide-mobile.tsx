import { useState, type ReactNode } from "react";
import { ArrowRight, BookOpen, Check, ChevronLeft, Home, Package, Rocket, Smartphone, Sparkles, User, Wifi } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { nn, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Desenvolvimento de Aplicativos: tudo é tela de celular. “Para quem é” vira
 * um onboarding de app em três telas; o conteúdo é o mapa de navegação do
 * app (cada módulo uma tela) com a tela selecionada aberta num aparelho.
 */

function Celular({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative flex flex-col rounded-[2.3rem] border-[7px] border-[#1d2333] bg-[#0f1524] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.95)] ${className}`}>
      <div className="flex items-center justify-between px-5 pt-3 font-mono text-[11px] font-bold text-white/70">
        <span>9:41</span>
        <span className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-[#1d2333]" />
        <span className="flex items-center gap-1">
          <Wifi className="h-3 w-3" />
          <span className="h-2.5 w-5 rounded-[3px] border border-white/60 p-px">
            <span className="block h-full w-3/4 rounded-[1px] bg-white/70" />
          </span>
        </span>
      </div>
      {children}
      <div className="mx-auto mb-2 mt-1 h-1 w-24 rounded-full bg-white/30" />
    </div>
  );
}

const ICONES_ONB = [Smartphone, Rocket, Sparkles];

export function MobilePublico({ itens }: PublicoProps) {
  const porTela = Math.ceil(itens.length / 3);
  const telas = [0, 1, 2].map((k) => itens.slice(k * porTela, (k + 1) * porTela)).filter((t) => t.length);

  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:justify-center lg:gap-8 lg:overflow-visible">
      {telas.map((tela, k) => {
        const Icone = ICONES_ONB[k % ICONES_ONB.length];
        const ultima = k === telas.length - 1;
        return (
          <Celular key={k} className={`w-[270px] shrink-0 snap-center ${k === 1 ? "lg:-translate-y-5" : ""}`}>
            <div className="flex min-h-[470px] flex-1 flex-col px-4 pb-4 pt-5">
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                Passo {k + 1} de {telas.length}
              </p>
              <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-(--accent) to-(--accent-2)/80 shadow-[0_15px_30px_-12px_var(--accent)]">
                <Icone className="h-9 w-9 text-white" />
              </div>
              <p className="mt-4 text-center text-[17px] font-black leading-tight text-white">
                {k === 0 ? "Esse curso é pra você se…" : "…ou se"}
              </p>
              <div className="mt-4 space-y-2.5">
                {tela.map((item) => (
                  <p key={item} className="flex gap-2.5 rounded-2xl bg-white/[0.06] p-3 text-[14px] leading-snug text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-2)" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <div className="mb-3 flex justify-center gap-1.5">
                  {telas.map((_, d) => (
                    <span key={d} className={`h-1.5 rounded-full ${d === k ? "w-5 bg-(--accent-2)" : "w-1.5 bg-white/25"}`} />
                  ))}
                </div>
                <span
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-[14px] font-bold ${
                    ultima ? "bg-(--accent-2) text-[#0b0f19]" : "bg-white/10 text-white"
                  }`}
                >
                  {ultima ? "Esse curso é pra você" : "Próximo"} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Celular>
        );
      })}
    </div>
  );
}

export function MobileConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const atual = Math.min(sel, tier.modules.length - 1);
  const m = tier.modules[atual];
  const total = tier.modules.length;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr]">
      {/* A tela aberta no aparelho */}
      <Celular className="mx-auto w-full max-w-[300px] lg:sticky lg:top-24">
        <div className="flex min-h-[540px] flex-col">
          <div className="flex items-center gap-2 border-b border-white/10 px-3 pb-3 pt-4">
            <button
              type="button"
              aria-label="Tela anterior"
              onClick={() => setSel(Math.max(0, atual - 1))}
              className="rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="flex-1 text-center text-[13px] font-bold text-white/80">Tela {nn(atual)}</p>
            <span className="w-7" />
          </div>
          <div className="flex-1 px-4 py-4">
            <p className="text-[18px] font-black leading-tight text-white">{m.title}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full rounded-full bg-(--accent-2)" style={{ width: `${((atual + 1) / total) * 100}%` }} />
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-white/40">
              módulo {atual + 1} de {total}
            </p>
            <ul className="mt-4 space-y-2">
              {m.topics.map((t) => (
                <li key={t} className="flex gap-3 rounded-2xl bg-white/[0.06] px-3 py-2.5 text-[14px] leading-snug text-white/90">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-(--accent-2)" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-around border-t border-white/10 px-2 pb-1 pt-2.5 text-white/40">
            <Home className="h-5 w-5" />
            <BookOpen className="h-5 w-5 text-(--accent-2)" />
            <User className="h-5 w-5" />
          </div>
        </div>
      </Celular>

      {/* Mapa de navegação do app */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/40">Fluxo de telas · {course.nome}</p>
          <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} estilo="pilula" />
        </div>

        <div
          className="mt-5 grid grid-cols-2 gap-x-7 gap-y-6 rounded-2xl border border-white/10 p-5 sm:grid-cols-3 sm:p-6"
          style={{ backgroundImage: "radial-gradient(#ffffff12 1px, transparent 1px)", backgroundSize: "18px 18px" }}
        >
          {tier.modules.map((mod, i) => {
            const on = i === atual;
            const ultimo = i === total - 1;
            return (
              <div key={mod.title} className="relative">
                <button
                  type="button"
                  onClick={() => setSel(i)}
                  className={`flex w-full flex-col rounded-[1.1rem] border-2 p-2.5 text-left transition ${
                    on ? "border-(--accent-2) bg-(--accent-2)/10 shadow-[0_0_0_4px_rgba(195,232,141,0.08)]" : "border-white/15 bg-[#0f1524] hover:border-white/35"
                  }`}
                >
                  <span className="mx-auto h-1 w-7 rounded-full bg-white/20" />
                  <span className={`mt-2 font-mono text-[11px] ${on ? "text-(--accent-2)" : "text-white/40"}`}>Tela {nn(i)}</span>
                  <span className="mt-1 text-[13px] font-semibold leading-snug text-white/90">{mod.title}</span>
                  <span className="mt-2 space-y-1">
                    <span className="block h-1.5 w-full rounded bg-white/10" />
                    <span className="block h-1.5 w-2/3 rounded bg-white/10" />
                  </span>
                </button>
                {/* seta de navegação para a próxima tela */}
                {!ultimo && (
                  <ArrowRight
                    className={`absolute -right-[1.45rem] top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 ${i % 2 === 1 ? "hidden" : "block"} ${
                      i % 3 === 2 ? "sm:hidden" : "sm:block"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Notificação de build com o resultado do nível */}
        <div className="mt-6 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-(--accent) to-(--accent-2)/80">
            <Smartphone className="h-5 w-5 text-white" />
          </span>
          <div className="min-w-0">
            <p className="flex flex-wrap items-baseline justify-between gap-x-3 text-[13px] font-bold text-white">
              Build pronto · iOS e Android <span className="font-mono text-[11px] font-normal text-white/40">agora</span>
            </p>
            <OutcomeText text={tier.outcome} className="mt-1 text-[14px] leading-snug text-white/80" />
            <p className="mt-1.5 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
            <Package className="h-3.5 w-3.5" /> instalado
          </span>
          {tier.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[12.5px] text-white/75">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
