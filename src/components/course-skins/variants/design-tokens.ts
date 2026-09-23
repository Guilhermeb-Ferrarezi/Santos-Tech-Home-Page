import type { CSSProperties } from "react";
import type { SkinProps } from "@/components/course-skins/shared";

/** Cores, texturas e tipos comuns da pele "Estúdio" (Design & Criação). */

export const VIOLET = "#8b7cf6";
export const CYAN = "#22d3ee";
export const GREEN = "#34d399";
export const CREAM = "#fff4e8";
export const INK = "#1f1a24";

/** Cores das "camadas"/clipes, em ciclo. */
export const SWATCHES = ["var(--accent)", "var(--accent-2)", VIOLET, CYAN, GREEN];

export const DOTS_LIGHT =
  "bg-[radial-gradient(rgba(31,26,36,0.10)_1px,transparent_1px)] bg-[length:20px_20px] dark:bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]";

export const CHECKER: CSSProperties = {
  backgroundImage:
    "linear-gradient(45deg, #d9d4dc 25%, transparent 25%), linear-gradient(-45deg, #d9d4dc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d9d4dc 75%), linear-gradient(-45deg, transparent 75%, #d9d4dc 75%)",
  backgroundSize: "12px 12px",
  backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0",
  backgroundColor: "#f4f1f5",
};

export function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Props do bloco "Para quem é" de cada curso. */
export type AudienceProps = Pick<SkinProps, "course" | "tema" | "theme">;
/** Props do bloco "Conteúdo programático" de cada curso. */
export type ContentProps = Pick<SkinProps, "course" | "tema" | "theme" | "logo" | "selectedTier" | "onSelectTier">;
