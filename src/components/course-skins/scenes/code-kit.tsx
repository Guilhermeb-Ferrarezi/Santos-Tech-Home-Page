import type { ReactNode } from "react";
import type { CourseTheme } from "@/lib/course-themes";

/**
 * Peças comuns das cenas do hero da pele IDE (Programação): trecho de código
 * colorido e terminal flutuante. Cada curso monta a própria cena com elas em
 * scenes/code-*.tsx.
 */

export type TokKind = "kw" | "fn" | "str" | "var" | "cm" | "pl" | "tag" | "num";
export type Tok = [string, TokKind];

function tokColors(theme: CourseTheme): Record<TokKind, string> {
  return {
    kw: "#c792ea",
    fn: theme.accent,
    str: theme.accent2,
    var: "#f78c6c",
    cm: "#ffffff55",
    pl: "#ffffffcc",
    tag: "#f07178",
    num: "#f78c6c",
  };
}

/** Bloco de código numerado, com cursor piscando na última linha. */
export function CodeLines({
  lines,
  theme,
  cursor = true,
  start = 1,
  mark,
}: {
  lines: Tok[][];
  theme: CourseTheme;
  cursor?: boolean;
  start?: number;
  /** Linha (índice) sublinhada como erro. */
  mark?: number;
}) {
  const color = tokColors(theme);
  return (
    <div className="py-2 font-mono text-[9.5px] leading-[1.75] sm:text-[11px]">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          <span className="w-7 shrink-0 pr-2 text-right text-white/25">{i + start}</span>
          <span
            className="whitespace-pre"
            style={
              mark === i
                ? { textDecoration: "underline wavy #ff5f57", textUnderlineOffset: "3px", textDecorationThickness: "1px" }
                : undefined
            }
          >
            {line.map(([t, k], j) => (
              <span key={j} style={{ color: color[k] }}>
                {t}
              </span>
            ))}
            {cursor && i === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse align-middle" style={{ background: theme.accent }} />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Terminal flutuante (canto inferior direito por padrão). */
export function FloatTerm({ className = "bottom-[3%] right-[2%] w-[62%]", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`animate-float-y absolute rounded-xl border border-white/10 bg-black/95 p-3 font-mono text-[9.5px] leading-relaxed shadow-[0_24px_48px_-16px_rgba(0,0,0,0.9)] sm:text-[10.5px] ${className}`}
    >
      {children}
    </div>
  );
}

/** Painel escuro genérico (sem barra de janela). */
export function Panel({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-xl border border-white/10 bg-[#0e1422]/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
}
