import { useState, type ReactNode } from "react";
import { ArrowDown, Flag } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Lógica de Programação (para quem nunca programou): “Para quem é” é um
 * fluxograma de decisões — um losango por perfil, com o “sim” levando ao
 * curso; o conteúdo é montado com blocos de encaixar, cada módulo uma pilha
 * de blocos dentro de um “repita até dominar”.
 */

export function LogicaPublico({ itens }: PublicoProps) {
  return (
    <div
      className="rounded-xl border border-white/10 bg-[#0f1524] p-4 sm:p-8"
      style={{ backgroundImage: "linear-gradient(#ffffff07 1px, transparent 1px), linear-gradient(90deg, #ffffff07 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-start sm:items-center">
          <span className="rounded-full border-2 border-white/40 bg-white/10 px-6 py-2 text-[14px] font-bold text-white">Início</span>
          <ArrowDown className="my-1 h-5 w-5 text-white/40 sm:mx-auto" />
        </div>

        <div className="space-y-3">
          {itens.map((item, i) => (
            <div key={item}>
              <div className="grid items-center gap-2 sm:grid-cols-[1fr_auto] sm:gap-0">
                {/* decisão */}
                <div className="flex items-center gap-4 rounded-xl border-2 border-(--accent-2)/50 bg-[#0b0f19] px-3 py-3 sm:px-4">
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                    <span className="absolute inset-1 rotate-45 rounded-[4px] border-2 border-(--accent-2) bg-(--accent-2)/15" />
                    <span className="relative text-[15px] font-black text-(--accent-2)">?</span>
                  </span>
                  <p className="min-w-0 text-[15px] leading-snug text-white">{item}?</p>
                </div>
                {/* saída "sim" */}
                <div className="flex items-center gap-2 pl-6 sm:pl-0">
                  <span className="hidden h-0.5 w-10 bg-[#3fb950] sm:block" />
                  <span className="rounded-md bg-[#3fb950]/15 px-2 py-1 text-[12.5px] font-bold text-[#7ee2a8]">Sim → é pra você</span>
                </div>
              </div>
              {i < itens.length - 1 && (
                <p className="flex items-center gap-2 py-1 pl-6 text-[12.5px] font-semibold text-white/45">
                  <ArrowDown className="h-4 w-4" /> não
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border-2 border-[#3fb950]/60 bg-[#3fb950]/10 px-5 py-4 text-center sm:flex-row sm:justify-center sm:gap-3">
          <span className="rounded-full bg-[#3fb950] px-4 py-1 text-[13px] font-bold text-[#0b0f19]">Fim</span>
          <span className="text-[16px] font-bold text-white">Respondeu “sim” a pelo menos uma? Esse curso é pra você.</span>
        </div>
      </div>
    </div>
  );
}

// ── Blocos de encaixar ─────────────────────────────────────────────────────

const CORES_BLOCO = ["#E8883A", "#4B8BF5", "#9B6BDF", "#2FA86B", "#D9508A", "#C9A227", "#3AA6B9"];

/** Bloco de encaixar: o “dente” sai por baixo e entra no bloco seguinte. */
function Bloco({ cor, children, className = "", dente = true }: { cor: string; children: ReactNode; className?: string; dente?: boolean }) {
  return (
    <div className={`relative rounded-md px-4 py-2.5 text-[14px] font-semibold leading-snug text-white ${className}`} style={{ background: cor }}>
      {children}
      {dente && <span className="absolute -bottom-2 left-5 z-10 h-2.5 w-8 rounded-b-[5px]" style={{ background: cor }} />}
    </div>
  );
}

export function LogicaConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const multiTier = course.tiers.length > 1;
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const cor = CORES_BLOCO[atual % CORES_BLOCO.length];

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/45">Editor de blocos</p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} estilo="pilula" />
      </div>

      <div className="grid lg:grid-cols-[250px_1fr]">
        {/* Paleta de categorias: um módulo por cor */}
        <nav className="flex flex-wrap gap-2 border-b border-white/10 p-3 lg:flex-col lg:flex-nowrap lg:border-b-0 lg:border-r lg:p-4">
          {tier.modules.map((mod, i) => {
            const c = CORES_BLOCO[i % CORES_BLOCO.length];
            const on = i === atual;
            return (
              <button
                key={mod.title}
                type="button"
                onClick={() => setSel(i)}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] leading-snug transition ${
                  on ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="h-5 w-5 shrink-0 rounded-full border-2 border-white/20" style={{ background: c }} />
                <span className="min-w-0">{mod.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Área de montagem */}
        <div
          className="min-w-0 p-4 sm:p-8"
          style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        >
          <div className="max-w-xl">
            {/* bloco-chapéu */}
            <div className="relative rounded-t-[22px] rounded-b-md px-4 pb-3 pt-4 text-white" style={{ background: cor }}>
              <span className="absolute -bottom-2 left-5 z-10 h-2.5 w-8 rounded-b-[5px]" style={{ background: cor }} />
              <p className="flex items-center gap-2 text-[13px] font-bold text-white/85">
                quando <Flag className="h-4 w-4 fill-current" /> for clicado
              </p>
              <p className="mt-1 text-[16px] font-black leading-snug">
                Módulo {atual + 1}: {m.title}
              </p>
            </div>

            {/* “repita até dominar” envolvendo os tópicos */}
            <div className="mt-1">
              <Bloco cor="#C9A227" className="rounded-b-none">
                repita até dominar
              </Bloco>
              <div className="flex">
                <span className="w-4 shrink-0" style={{ background: "#C9A227" }} />
                <div className="min-w-0 flex-1 space-y-1 py-1.5 pl-1.5">
                  {m.topics.map((t) => (
                    <Bloco key={t} cor={cor}>
                      {t}
                    </Bloco>
                  ))}
                </div>
              </div>
              <div className="h-5 w-full rounded-b-md rounded-tr-md" style={{ background: "#C9A227" }} />
            </div>

            <Bloco cor="#7a5cff" className="mt-1 rounded-b-[14px]" dente={false}>
              próximo módulo {atual + 2 <= total ? `→ ${atual + 2}` : multiTier ? "→ fim do nível" : "→ fim do curso"}
            </Bloco>
          </div>

          {/* resultado como um “diga” */}
          <div className="mt-8 grid gap-4 sm:grid-cols-[1.5fr_1fr]">
            <div className="relative rounded-2xl border-2 border-white/15 bg-white/[0.04] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">diga</p>
              <OutcomeText text={tier.outcome} className="mt-1.5 text-[14px] leading-snug text-white/90" />
              <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Ferramentas</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {tier.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[13px] text-white/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
