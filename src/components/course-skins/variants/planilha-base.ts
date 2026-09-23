import type { ComponentType, CSSProperties } from "react";
import type { SkinProps } from "@/components/course-skins/shared";
import { APP_COLORS } from "@/components/course-skins/scenes/office-apps";

/**
 * Tipos e constantes dos blocos por curso da pele "Planilha" (sem componentes,
 * pra não atrapalhar o fast refresh). Os componentes comuns ficam em
 * planilha-kit.tsx; cada curso monta os seus em planilha-<variante>.tsx.
 */

export type Course = SkinProps["course"];
export type Tier = Course["tiers"][number];

/** O que cada bloco por curso recebe da pele. */
export type BlockProps = {
  course: Course;
  tier: Tier;
  selectedTier: number;
  onSelectTier: (i: number) => void;
  multiTier: boolean;
};

/** Par de blocos de identidade de um curso: "Para quem é" + "Conteúdo programático". */
export type PlanilhaBlocks = {
  ParaQuem: ComponentType<BlockProps>;
  Conteudo: ComponentType<BlockProps>;
};

export { APP_COLORS };

// ── Fundos ────────────────────────────────────────────────────────────────────

export const GRID: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
  backgroundSize: "96px 28px",
};
export const GRID_VARS =
  "[--grid:#e8ebe9] [--dot:#d3d9d6] dark:[--grid:rgba(255,255,255,0.05)] dark:[--dot:rgba(255,255,255,0.09)]";
export const RULED: CSSProperties = {
  backgroundImage: "linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
  backgroundSize: "100% 30px",
};
export const DOTS: CSSProperties = {
  backgroundImage: "radial-gradient(circle, var(--dot) 1.2px, transparent 1.4px)",
  backgroundSize: "22px 22px",
};

export const COLS = "ABCDEFGHIJKL".split("");

