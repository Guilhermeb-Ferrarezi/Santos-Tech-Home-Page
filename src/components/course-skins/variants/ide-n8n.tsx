import { useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, MessageCircle, Play, Split, Zap } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { nn, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";

/**
 * n8n (automação, sem programar): “Para quem é” é um workflow com um nó “IF”
 * aberto no painel de parâmetros — cada perfil vira uma condição; o conteúdo
 * é o canvas do workflow do nível, nós quadrados em linha, com a janela de
 * detalhes do nó (entrada · parâmetros · saída) mostrando os tópicos.
 */

function No({ icone: Icone, cor, rotulo, gatilho, ativo, onClick, responsivo, children }: {
  icone?: LucideIcon;
  cor: string;
  rotulo: ReactNode;
  gatilho?: boolean;
  ativo?: boolean;
  onClick?: () => void;
  /** No celular vira linha (ícone + rótulo ao lado); no desktop, coluna. */
  responsivo?: boolean;
  children?: ReactNode;
}) {
  const Tag = onClick ? "button" : "div";
  const caixa = responsivo
    ? "flex w-full items-center gap-3 text-left xl:w-[96px] xl:flex-col xl:gap-0 xl:text-center 2xl:w-[112px]"
    : "flex w-[84px] shrink-0 flex-col items-center text-center sm:w-[112px]";
  return (
    <Tag type={onClick ? "button" : undefined} onClick={onClick} className={`group shrink-0 ${caixa}`}>
      <span
        className={`relative flex shrink-0 items-center justify-center border-2 bg-[#252a3a] font-mono text-[15px] font-bold transition ${
          responsivo ? "h-12 w-12 xl:h-[68px] xl:w-[68px]" : "h-16 w-16 sm:h-[72px] sm:w-[72px]"
        } ${gatilho ? "rounded-l-[36px] rounded-r-lg" : "rounded-lg"} ${ativo ? "shadow-[0_0_0_4px_rgba(255,122,152,0.25)]" : "group-hover:brightness-125"}`}
        style={{ borderColor: ativo ? "var(--accent-2)" : cor, color: cor }}
      >
        {Icone ? <Icone className="h-6 w-6" /> : children}
        {/* alças de entrada/saída */}
        {!gatilho && <span className="absolute -left-[5px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/50" />}
        <span className="absolute -right-[5px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/50" />
      </span>
      <span className={`text-[13px] font-semibold leading-tight ${responsivo ? "xl:mt-2" : "mt-2"} ${ativo ? "text-white" : "text-white/80"}`}>{rotulo}</span>
    </Tag>
  );
}

/** Ligação entre dois nós, com a contagem de itens que passam por ela. */
function Fio({ itens, vertical }: { itens?: number; vertical?: boolean }) {
  return (
    <span className={`relative flex shrink-0 items-center justify-center ${vertical ? "ml-6 h-6 w-0.5 bg-white/30" : "mt-8 h-0.5 min-w-4 flex-1 bg-white/30 sm:mt-9"}`}>
      {itens !== undefined && !vertical && (
        <span className="absolute -top-5 whitespace-nowrap font-mono text-[10.5px] text-white/40">{itens} itens</span>
      )}
    </span>
  );
}

const canvas = { backgroundImage: "radial-gradient(#ffffff16 1px, transparent 1px)", backgroundSize: "18px 18px" };

export function N8nPublico({ itens }: PublicoProps) {
  return (
    <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#161a26] lg:grid-cols-[1fr_1.15fr]">
      {/* Canvas */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-auto lg:min-h-[380px]" style={canvas}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M13 46 L46 46" stroke="#ffffff55" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M46 46 C 64 46, 62 22, 81 22" stroke="#3fb950" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M46 46 C 64 46, 62 70, 81 70" stroke="#ffffff40" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
        {[
          { x: 13, y: 46, no: <No icone={Zap} cor="#FFB020" rotulo="Quando você chega aqui" gatilho /> },
          { x: 46, y: 46, no: <No icone={Split} cor="#4B8BF5" rotulo="Se identifica?" ativo /> },
          { x: 81, y: 22, no: <No icone={CheckCircle2} cor="#3fb950" rotulo="Esse curso é pra você" /> },
          { x: 81, y: 70, no: <No icone={MessageCircle} cor="#8b93a7" rotulo="Fale com a gente" /> },
        ].map(({ x, y, no }) => (
          <div key={`${x}-${y}`} className="absolute z-10 -translate-x-1/2 -translate-y-8 sm:-translate-y-9" style={{ left: `${x}%`, top: `${y}%` }}>
            {no}
          </div>
        ))}
        <span className="absolute left-[63%] top-[26%] z-10 -translate-x-1/2 rounded bg-[#3fb950]/20 px-1.5 py-0.5 font-mono text-[11px] font-bold text-[#7ee2a8]">true</span>
        <span className="absolute left-[63%] top-[60%] z-10 -translate-x-1/2 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] font-bold text-white/55">false</span>
      </div>

      {/* Painel de parâmetros do nó IF */}
      <div className="min-w-0 border-t border-white/10 bg-[#1d2231] lg:border-l lg:border-t-0">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <Split className="h-4 w-4 text-[#4B8BF5]" />
          <p className="text-[14px] font-bold text-white">Se identifica?</p>
          <span className="ml-auto flex gap-3 text-[12px] text-white/45">
            <span className="border-b-2 border-(--accent-2) pb-0.5 text-white">Parâmetros</span>
            <span>Configurações</span>
          </span>
        </div>
        <div className="px-4 py-4">
          <p className="text-[12.5px] font-semibold text-white/55">Condições</p>
          <div className="mt-2 space-y-1.5">
            {itens.map((item, i) => (
              <div key={item}>
                {i > 0 && <p className="py-1 pl-2 font-mono text-[11px] font-bold text-(--accent-2)">OU</p>}
                <div className="flex flex-col gap-1.5 rounded-lg border border-white/10 bg-[#161a26] p-2.5 sm:flex-row sm:items-start sm:gap-2">
                  <span className="flex shrink-0 gap-1.5">
                    <span className="rounded bg-white/10 px-2 py-1 text-[12px] font-semibold text-white/75">você</span>
                    <span className="rounded bg-white/5 px-2 py-1 text-[12px] text-white/50">combina com</span>
                  </span>
                  <span className="min-w-0 flex-1 rounded border border-white/10 bg-black/20 px-2.5 py-1 text-[14px] leading-snug text-white/90">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Workflow do nível + janela de detalhes do nó ───────────────────────────

export function N8nConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const multiTier = course.tiers.length > 1;
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const anterior = atual === 0 ? (multiTier ? "Início do nível" : "Início do curso") : tier.modules[atual - 1].title;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#161a26]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <p className="flex items-center gap-2 text-[13px] font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-[#3fb950]" /> Workflow · {tier.levelName}
        </p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} estilo="pilula" />
      </div>

      {/* Canvas: no celular os nós descem em lista; no desktop, uma linha */}
      <div className="px-4 py-6 sm:px-6 xl:py-8" style={canvas}>
        <div className="flex flex-col xl:flex-row xl:items-start">
          <No icone={Play} cor="#FFB020" rotulo="Início" gatilho responsivo />
          {tier.modules.map((mod, i) => (
            <div key={mod.title} className="flex flex-col xl:flex-1 xl:flex-row xl:items-start">
              <span className="xl:hidden">
                <Fio vertical />
              </span>
              <span className="hidden flex-1 xl:flex">
                <Fio itens={mod.topics.length} />
              </span>
              <No cor={i === atual ? "var(--accent-2)" : "#8b93a7"} rotulo={mod.title} ativo={i === atual} onClick={() => setSel(i)} responsivo>
                {nn(i)}
              </No>
            </div>
          ))}
          <span className="xl:hidden">
            <Fio vertical />
          </span>
          <span className="hidden flex-1 xl:flex">
            <Fio />
          </span>
          <No icone={CheckCircle2} cor="#3fb950" rotulo="Nível concluído" responsivo />
        </div>
      </div>

      {/* Janela de detalhes do nó selecionado */}
      <div className="grid border-t border-white/10 bg-[#1d2231] md:grid-cols-[1fr_1.2fr_1.6fr]">
        <div className="min-w-0 border-b border-white/10 p-4 md:border-b-0 md:border-r">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">Entrada</p>
          <p className="mt-2 text-[13.5px] leading-snug text-white/70">{anterior}</p>
          <p className="mt-1 font-mono text-[11.5px] text-white/35">1 item</p>
        </div>
        <div className="min-w-0 border-b border-white/10 p-4 md:border-b-0 md:border-r">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">Parâmetros</p>
          <p className="mt-2 text-[12px] text-white/45">Nó</p>
          <p className="text-[15px] font-bold leading-snug text-white">{m.title}</p>
          <p className="mt-3 text-[12px] text-white/45">Posição</p>
          <p className="text-[13.5px] text-white/80">
            módulo {atual + 1} de {total}
          </p>
        </div>
        <div className="min-w-0 p-4">
          <p className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
            Saída <span className="normal-case tracking-normal text-[#7ee2a8]">{m.topics.length} itens</span>
          </p>
          <table className="mt-2 w-full border-collapse overflow-hidden rounded-md">
            <thead>
              <tr className="bg-white/[0.06] text-left font-mono text-[11px] text-white/45">
                <th className="w-8 px-2 py-1.5 font-normal">#</th>
                <th className="px-2 py-1.5 font-normal">tópico</th>
              </tr>
            </thead>
            <tbody>
              {m.topics.map((t, k) => (
                <tr key={t} className="border-t border-white/5">
                  <td className="px-2 py-2 align-top font-mono text-[11.5px] text-white/35">{k}</td>
                  <td className="px-2 py-2 text-[14px] leading-snug text-white/90">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 border-t border-white/10 p-4 md:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">Execução bem-sucedida</p>
          <p className="mt-2 text-[14px] leading-snug text-white/90">{tier.outcome}</p>
          <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">Credenciais conectadas</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tier.tools.map((tool) => (
              <span key={tool} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[13px] text-white/80">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
