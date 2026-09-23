import type { ReactNode } from "react";

// ── Peças compartilhadas pelas cenas ─────────────────────────────────────────

/** Painel de monitoramento (não é janela de app: sem os três pontinhos). */
export function ScenePanel({
  title,
  right,
  className = "",
  children,
}: {
  title: string;
  right?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-2xl border border-white/10 bg-[#0b1714]/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#A3E635] shadow-[0_0_6px_#A3E635] motion-safe:animate-pulse" />
        <span className="truncate text-[9px] font-bold uppercase tracking-[0.18em] text-white/60 sm:text-[10px]">{title}</span>
        {right && <span className="ml-auto shrink-0 text-[9px] font-bold text-white/45 sm:text-[10px]">{right}</span>}
      </div>
      {children}
    </div>
  );
}

export function Led({ color, blink = false, delay = 0 }: { color: string; blink?: boolean; delay?: number }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${blink ? "motion-safe:animate-pulse" : ""}`}
      style={{ background: color, boxShadow: `0 0 6px ${color}`, animationDelay: `${delay}ms` }}
    />
  );
}
