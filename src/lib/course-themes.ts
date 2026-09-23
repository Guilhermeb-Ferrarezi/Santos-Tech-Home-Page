import type { CSSProperties } from "react";

/**
 * Identidade visual por categoria dos cursos particulares.
 *
 * Cada categoria tem uma "pele" (course-skins/<pele>.tsx) com layout próprio e
 * paleta própria (exportada pela própria pele). O verde da marca (#0DB88F)
 * continua sendo o padrão quando o curso não declara tema.
 */
export type CourseThemeKey =
  | "informatica"
  | "office"
  | "ia"
  | "programacao"
  | "ti"
  | "universo-3d"
  | "design"
  | "marketing";

export type CourseTheme = {
  /** Cor de destaque (texto, bordas, botões). Precisa ler bem em fundo claro e escuro. */
  accent: string;
  /** Hover dos botões sólidos. */
  accentHover: string;
  /** Cor secundária usada nas artes. */
  accent2: string;
  /** Fundo escuro de hero/seções escuras, levemente tingido pela categoria. */
  heroBg: string;
};

export const BRAND_THEME: CourseTheme = {
  accent: "#0DB88F",
  accentHover: "#0aaa82",
  accent2: "#0DB88F",
  heroBg: "#171717",
};

export function themeVars(theme: CourseTheme): CSSProperties {
  return {
    "--accent": theme.accent,
    "--accent-hover": theme.accentHover,
    "--accent-2": theme.accent2,
    "--hero-bg": theme.heroBg,
  } as CSSProperties;
}
