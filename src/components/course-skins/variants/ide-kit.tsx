import type { ReactNode } from "react";
import type { Tier } from "@/components/particular-course-page";
import { C } from "@/components/course-skins/variants/ide-util";

/**
 * Peças visuais comuns da pele IDE: tokens de sintaxe, janela, linhas de
 * código numeradas e o seletor de nível. Cada curso monta a sua metáfora em
 * `variants/ide-<variante>.tsx` usando (ou não) estas peças.
 */


type Kids = { children?: ReactNode };
export const K = ({ children }: Kids) => <span className={C.kw}>{children}</span>;
export const F = ({ children }: Kids) => <span className={C.fn}>{children}</span>;
export const P = ({ children }: Kids) => <span className={C.pl}>{children}</span>;
export const N = ({ children }: Kids) => <span className={C.num}>{children}</span>;
export const M = ({ children }: Kids) => <span className={C.cm}>{children}</span>;
export const T = ({ children }: Kids) => <span className={C.tag}>{children}</span>;
export const A = ({ children }: Kids) => <span className={C.attr}>{children}</span>;
/** String entre aspas duplas (ou simples, no SQL). */
export const Q = ({ children, s = '"' }: Kids & { s?: string }) => (
  <span className={C.str}>
    {s}
    {children}
    {s}
  </span>
);

/** Janela com os três “semáforos” e título em mono. */
export function Win({ title, children, className = "", extra }: { title: ReactNode; children: ReactNode; className?: string; extra?: ReactNode }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-white/10 bg-[#0b0f19] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28c840]" />
        <span className="ml-3 min-w-0 flex-1 truncate font-mono text-[11px] text-white/50">{title}</span>
        {extra}
      </div>
      {children}
    </div>
  );
}

/** Linha de código com número; o conteúdo pode quebrar mantendo o recuo. */
export function Ln({ n, indent = 0, children }: { n: number; indent?: number; children?: ReactNode }) {
  return (
    <div className="flex font-mono text-[12.5px] leading-6 sm:text-[13px]">
      <span className="w-10 shrink-0 select-none pr-3 text-right text-white/20">{n}</span>
      <span className="min-w-0 flex-1 whitespace-pre-wrap break-words" style={{ paddingLeft: `${indent * 2}ch` }}>
        {children}
      </span>
    </div>
  );
}

/** Linhas de código: [recuo, conteúdo] ou null para linha em branco. */
export type L = [number, ReactNode] | null;
export function Code({ lines, className = "py-3" }: { lines: L[]; className?: string }) {
  return (
    <div className={className}>
      {lines.map((l, i) => (
        <Ln key={i} n={i + 1} indent={l?.[0] ?? 0}>
          {l?.[1]}
        </Ln>
      ))}
    </div>
  );
}

/** Seletor de nível no idioma de cada ferramenta. Some em curso de nível único. */
export function NivelSeletor({
  tiers,
  atual,
  onSelect,
  rotulo = (n) => n,
  className = "",
  estilo = "aba",
}: {
  tiers: Tier[];
  atual: number;
  onSelect: (i: number) => void;
  rotulo?: (levelName: string, i: number) => ReactNode;
  className?: string;
  estilo?: "aba" | "pilula";
}) {
  if (tiers.length < 2) return null;
  return (
    <div role="tablist" className={`flex flex-wrap gap-1.5 ${className}`}>
      {tiers.map((t, i) => {
        const on = i === atual;
        return (
          <button
            key={t.levelName}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onSelect(i)}
            className={
              estilo === "pilula"
                ? `rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition ${
                    on ? "border-(--accent-2) bg-(--accent-2) text-[#0b0f19]" : "border-white/15 text-white/60 hover:border-white/35 hover:text-white"
                  }`
                : `rounded-md border px-3 py-1.5 font-mono text-[12px] transition ${
                    on ? "border-(--accent) bg-(--accent)/15 text-white" : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/85"
                  }`
            }
          >
            {rotulo(t.levelName, i)}
          </button>
        );
      })}
    </div>
  );
}
