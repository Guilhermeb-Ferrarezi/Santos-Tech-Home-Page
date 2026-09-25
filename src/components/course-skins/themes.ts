import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";

/**
 * Paleta de cada pele (categoria) dos cursos particulares.
 *
 * ⚠️ Módulo LEVE de propósito: só dados, nenhum componente. Quem precisa apenas
 * da cor da categoria (ex.: a sidebar do layout de /particular) importa daqui, e
 * não de `course-skins/index.ts` — aquele puxa as 8 peles inteiras (~200 KB de
 * JS) pro bundle de quem importa (auditoria de performance de 24/09/2026,
 * performance-cwv-05).
 */

export const INFORMATICA_THEME: CourseTheme = {
  accent: "#0F6CD4",
  accentHover: "#0b59b3",
  accent2: "#FFC83D",
  heroBg: "#0a1830",
};
export const PLANILHA_THEME: CourseTheme = { accent: "#21A366", accentHover: "#1b8a56", accent2: "#9BE7C1", heroBg: "#0d1712" };
export const IA_THEME: CourseTheme = { accent: "#8B5CF6", accentHover: "#7c3aed", accent2: "#E879F9", heroBg: "#120d1f" };
export const IDE_THEME: CourseTheme = { accent: "#4B8BF5", accentHover: "#3a76dc", accent2: "#FFD43B", heroBg: "#0c1220" };
export const TI_THEME: CourseTheme = { accent: "#0D9488", accentHover: "#0F766E", accent2: "#A3E635", heroBg: "#081412" };
export const OFICINA_THEME: CourseTheme = { accent: "#F97316", accentHover: "#e0620c", accent2: "#FDBA74", heroBg: "#1a110b" };
export const DESIGN_THEME: CourseTheme = { accent: "#DB2777", accentHover: "#BE185D", accent2: "#FBBF24", heroBg: "#16121a" };
export const MARKETING_THEME: CourseTheme = { accent: "#E5484D", accentHover: "#cc3a3f", accent2: "#FFC53D", heroBg: "#170c10" };

/** Tema por categoria — mesma chave de `CourseThemeKey` e de `SKINS`. */
export const COURSE_THEMES: Record<CourseThemeKey, CourseTheme> = {
  informatica: INFORMATICA_THEME,
  office: PLANILHA_THEME,
  ia: IA_THEME,
  programacao: IDE_THEME,
  ti: TI_THEME,
  "universo-3d": OFICINA_THEME,
  design: DESIGN_THEME,
  marketing: MARKETING_THEME,
};
