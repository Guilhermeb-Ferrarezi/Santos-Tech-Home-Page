import { useState, type CSSProperties } from "react";
import type { CourseData, Tier } from "@/components/particular-course-page";
import { tierMeta } from "@/components/course-skins/shared";

/**
 * Tokens visuais da pele de Marketing & Negócios, compartilhados entre a pele
 * (course-skins/marketing.tsx) e os blocos por curso (variants/marketing-*.tsx).
 */

export const INK = "text-[#1f1216] dark:text-white";
export const SOFT = "text-[#6e565c] dark:text-white/60";
/** Texto de conteúdo (tópicos, público): contraste alto nos dois modos. */
export const BODY = "text-[#3f2c31] dark:text-white/80";
export const CARD = "border border-[#f0dedb] bg-white dark:border-white/10 dark:bg-white/[0.035]";
export const PAPER = "bg-[#fff8f5] dark:bg-[#140a0e]";
export const LINE = "border-[#f0dedb] dark:border-white/10";
/** Rótulo pequeno em caixa alta (nunca usado para conteúdo, só para metadado). */
export const KICKER = "text-[11px] font-bold uppercase tracking-[0.16em]";

/** Pontilhado discreto de fundo, como a grade de um painel. */
export const DOTS: CSSProperties = {
  backgroundImage: "radial-gradient(var(--dot) 1px, transparent 1.2px)",
  backgroundSize: "20px 20px",
};
export const DOT_VARS = "[--dot:rgba(120,40,50,0.09)] dark:[--dot:rgba(255,255,255,0.05)]";

/** Cor de persona/destaque por índice, sempre dentro da família vermelho/amarelo. */
export const PERSONA_CORES = ["var(--accent)", "var(--accent-2)", "#fb923c", "#f472b6", "#a78bfa", "#34d399"];

export const pad2 = (i: number) => String(i + 1).padStart(2, "0");

/** Resumo de ritmo do nível (fatos do curso, sem métricas inventadas). */
export function ritmo(course: CourseData, tier: Tier) {
  const meta = tierMeta(course, tier);
  return meta ? `${meta.aulas} · intensivo ${meta.intensivo} · padrão ${meta.padrao}` : tier.totalHours;
}

/** Conjunto de índices marcados (perfis escolhidos, cartões qualificados…). */
export function useMarcados() {
  const [marcados, setMarcados] = useState<Set<number>>(() => new Set());
  const alternar = (i: number) =>
    setMarcados((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  return [marcados, alternar] as const;
}
