/**
 * Program theming — single source of truth.
 *
 * Mapeia pathname → "program key" (jr / create / camps / academies / default)
 * e expõe DUAS paletas distintas:
 *
 *   - **accentDark**: cor escura/saturada — usa em fundos CLAROS (header
 *     light, contrast WCAG AA garantido). Ex: "TECH" no header.
 *   - **accentSoft**: cor clara/dessaturada — usa em fundos ESCUROS
 *     (footer themed). Ex: "TECH" no footer roxo do JR.
 *
 * Antes a gente tinha só uma paleta soft que renderizava com péssimo
 * contraste no header light. PSI reportou contraste insuficiente — fix
 * é separar as duas variações.
 *
 * Adicionar programa novo:
 *   1. Adicionar à `ProgramKey`
 *   2. Mapear pathname em `getProgramKey()`
 *   3. Adicionar entrada em ACCENT_DARK e ACCENT_SOFT
 */

import { useLocation } from "@tanstack/react-router";

export type ProgramKey = "default" | "jr" | "create" | "camps" | "academies";

/** Cor de acento ESCURA — pra texto sobre fundo CLARO (header). WCAG AA. */
const ACCENT_DARK: Record<ProgramKey, string> = {
  default: "#04325A",   // st-blue-dark
  jr: "#3d1858",        // JR dark roxo
  create: "#04325A",    // CREATE dark azul
  camps: "#0f5a6b",     // CAMPS dark teal
  academies: "#020a6b", // ACADEMIES dark indigo
};

/** Cor de acento SUAVE — pra texto sobre fundo ESCURO (footer themed). */
const ACCENT_SOFT: Record<ProgramKey, string> = {
  default: "var(--primary)",
  jr: "#DEABF7",
  create: "#49A8EB",
  camps: "#6EC4CC",
  academies: "#818CF8",
};

export function getProgramKey(pathname: string): ProgramKey {
  if (pathname.startsWith("/cursos/junior")) return "jr";
  if (pathname.startsWith("/cursos/create")) return "create";
  if (pathname.startsWith("/cursos/camps")) return "camps";
  if (pathname.startsWith("/cursos/academies")) return "academies";
  return "default";
}

export function getAccentDark(pathname: string): string {
  return ACCENT_DARK[getProgramKey(pathname)];
}

export function getAccentSoft(pathname: string): string {
  return ACCENT_SOFT[getProgramKey(pathname)];
}

/** Hook — program key da rota atual. */
export function useProgramKey(): ProgramKey {
  const { pathname } = useLocation();
  return getProgramKey(pathname);
}

/** Hook — cor de acento ESCURA (fundos claros). Usar no header. */
export function useProgramAccentDark(): string {
  const { pathname } = useLocation();
  return getAccentDark(pathname);
}

/** Hook — cor de acento SUAVE (fundos escuros). Usar no footer themed. */
export function useProgramAccentSoft(): string {
  const { pathname } = useLocation();
  return getAccentSoft(pathname);
}
