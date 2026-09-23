import type { CSSProperties } from "react";
import type { CourseData, Tier } from "@/components/particular-course-page";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";

/** Constantes, tipos e utilitários da família "Oficina" (sem componentes, para o Fast Refresh). */

export const LAYERS_LIGHT: CSSProperties = {
  backgroundImage: "repeating-linear-gradient(0deg, rgba(60,30,10,0.045) 0 1px, transparent 1px 7px)",
};
export const LAYERS_DARK: CSSProperties = {
  backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 7px)",
};
/** Papel milimetrado: grade de desenho técnico, para CAD, BIM e modelagem. */
export const GRID_LIGHT: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(60,30,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(60,30,10,0.05) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};
export const GRID_DARK: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};
export const NOTCH: CSSProperties = { clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)" };

/** Tela do monitor da ilustração `PersonAtDesk` (coordenadas do SVG 400×320). */
export type TelaBox = { x: number; y: number; w: number; h: number };

/** O que cada bloco de identidade (Para quem é / Conteúdo) recebe da pele. */
export type OficinaBlockProps = {
  course: CourseData;
  tier: Tier;
  tema: CourseThemeKey;
  theme: CourseTheme;
  selectedTier: number;
  onSelectTier: (i: number) => void;
};

export const pad2 = (n: number) => String(n).padStart(2, "0");
