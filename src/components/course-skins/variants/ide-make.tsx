import { useState } from "react";
import { CheckCircle2, ChevronDown, Filter, GitFork, User } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Make (automação, sem programar): “Para quem é” é um roteador que abre uma
 * rota com filtro para cada perfil; o conteúdo é o cenário do nível — módulos
 * redondos num arco pontilhado — com o inspetor de “bundle” mostrando a
 * saída do módulo selecionado.
 */

const pontilhado = (cor = "#ffffff55") => ({ backgroundImage: `radial-gradient(circle, ${cor} 1.6px, transparent 1.8px)`, backgroundSize: "2px 9px" });

export function MakePublico({ itens }: PublicoProps) {
  return (
    <div
      className="rounded-xl border border-white/10 bg-[#1a1530] p-4 sm:p-8"
      style={{ backgroundImage: "radial-gradient(#ffffff12 1px, transparent 1px)", backgroundSize: "20px 20px" }}
    >
      <div className="grid items-start gap-6 lg:grid-cols-[220px_1fr]">
        {/* Gatilho + roteador */}
        <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:pt-6">
          <div className="flex flex-col items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6d4aff] shadow-[0_0_0_6px_rgba(109,74,255,0.2)]">
              <User className="h-7 w-7 text-white" />
            </span>
            <span className="mt-2 text-[13px] font-semibold text-white/80">Você</span>
          </div>
          <span className="h-1 w-10 lg:hidden" style={{ ...pontilhado("#B98CFF"), backgroundSize: "9px 2px" }} />
          <span className="hidden h-10 w-1 lg:block" style={pontilhado("#B98CFF")} />
          <div className="flex flex-col items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-(--accent-2) bg-[#2a2146]">
              <GitFork className="h-7 w-7 rotate-90 text-(--accent-2)" />
            </span>
            <span className="mt-2 text-[13px] font-semibold text-white/80">Roteador</span>
          </div>
        </div>

        {/* Rotas: tronco pontilhado + um ramo com filtro por perfil */}
        <div className="relative pl-7">
          <span className="absolute bottom-7 left-0 top-7 w-1" style={pontilhado("#B98CFF")} aria-hidden="true" />
          <div className="space-y-3">
            {itens.map((item, i) => (
              <div key={item} className="relative flex items-center gap-2">
                <span className="absolute -left-7 top-1/2 h-1 w-7" style={{ ...pontilhado("#B98CFF"), backgroundSize: "9px 2px" }} aria-hidden="true" />
                <span
                  title="Filtro"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-(--accent-2)/60 bg-[#1a1530] text-(--accent-2)"
                >
                  <Filter className="h-3.5 w-3.5" />
                </span>
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-2 pr-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2a2146] font-mono text-[12px] font-bold text-(--accent-2)">
                    {i + 1}
                  </span>
                  <span className="min-w-0 text-[14px] leading-snug text-white/90">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-7 flex items-center justify-center gap-2 text-center text-[15px] font-bold text-white">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3fb950]" /> Passou em algum filtro? Esse curso é pra você.
      </p>
    </div>
  );
}

// ── Cenário em arco + inspetor de bundle ───────────────────────────────────

export function MakeConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  // posições no arco (em % da área do cenário)
  const pts = tier.modules.map((_, i) => {
    const t = total === 1 ? 0.5 : i / (total - 1);
    return { x: 8 + 84 * t, y: 72 - Math.sin(Math.PI * t) * 44 };
  });
  const arco = pts.map((p, i) => `${i ? "L" : "M"}${p.x * 10} ${p.y * 3}`).join(" ");
  const [aberto, setAberto] = useState(true);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1530]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <p className="flex items-center gap-2 text-[13px] font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-[#3fb950]" /> Cenário · {tier.levelName}
        </p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} estilo="pilula" />
      </div>

      {/* Arco de módulos */}
      <div className="relative h-[200px] sm:h-[280px]" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d={arco} fill="none" stroke="#B98CFF" strokeOpacity="0.55" strokeWidth="3" strokeDasharray="0.1 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        {pts.map((p, i) => {
          const on = i === atual;
          const mod = tier.modules[i];
          return (
            <button
              key={mod.title}
              type="button"
              onClick={() => setSel(i)}
              aria-label={`Módulo ${i + 1}: ${mod.title}`}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={`relative flex h-11 w-11 items-center justify-center rounded-full font-mono text-[15px] font-black transition sm:h-16 sm:w-16 sm:text-lg ${
                  on ? "bg-(--accent-2) text-[#1a1530] shadow-[0_0_0_7px_rgba(185,140,255,0.22)]" : "bg-[#6d4aff] text-white hover:brightness-110"
                }`}
              >
                {i + 1}
                {/* bolha de operações (quantidade de tópicos) */}
                <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#1a1530] bg-white px-1 font-mono text-[10px] font-bold text-[#1a1530] sm:h-6 sm:min-w-6 sm:text-[11px]">
                  {mod.topics.length}
                </span>
              </span>
              <span
                className={`mt-2 hidden w-[128px] text-center text-[12.5px] leading-tight lg:block ${on ? "font-semibold text-white" : "text-white/60"}`}
              >
                {mod.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Inspetor de saída do módulo selecionado */}
      <div className="grid gap-5 border-t border-white/10 bg-[#211a3a] p-4 sm:p-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0 rounded-xl border border-white/10 bg-[#1a1530]">
          <p className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--accent-2) font-mono text-[11px] font-black text-[#1a1530]">{atual + 1}</span>
            <span className="text-[13px] font-semibold text-white/80">Operação 1 · Saída</span>
          </p>
          <div className="px-4 py-3">
            <button type="button" onClick={() => setAberto((v) => !v)} className="flex w-full items-center gap-2 text-left">
              <ChevronDown className={`h-4 w-4 shrink-0 text-white/50 transition ${aberto ? "" : "-rotate-90"}`} />
              <span className="text-[13px] font-bold text-white">Bundle 1</span>
              <span className="ml-auto font-mono text-[11.5px] text-white/40">Coleção</span>
            </button>
            {aberto && (
              <div className="mt-2 space-y-1 border-l border-white/10 pl-4 text-[14px]">
                <p className="flex flex-wrap gap-x-2">
                  <span className="text-white/45">módulo</span>
                  <span className="font-semibold text-white">{m.title}</span>
                </p>
                <p className="flex gap-2 pt-1">
                  <span className="text-white/45">tópicos</span>
                  <span className="font-mono text-[11.5px] leading-6 text-white/35">Array · {m.topics.length} itens</span>
                </p>
                <ol className="space-y-1.5 border-l border-white/10 pl-4 pt-1">
                  {m.topics.map((t, k) => (
                    <li key={t} className="flex gap-2.5 leading-snug text-white/90">
                      <span className="shrink-0 font-mono text-[12px] leading-5 text-(--accent-2)">{k + 1}</span>
                      {t}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">Histórico · sucesso</p>
            <OutcomeText text={tier.outcome} className="mt-2 text-[14px] leading-snug text-white/90" />
            <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">Apps conectados</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tier.tools.map((tool) => (
                <span key={tool} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] py-1 pl-1 pr-2.5 text-[13px] text-white/85">
                  <span className="h-5 w-5 rounded-full bg-[#6d4aff]" />
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
