/**
 * Program theming — single source of truth.
 *
 * Maps the current pathname to a "program key" (jr / create / camps /
 * academies / default) and exposes the brand accent color used by both
 * SiteHeader (TECH text) and SiteFooter (themed brand heading).
 *
 * When adding a new program (e.g. /cursos/clubes), update only:
 *   1. ProgramKey union below
 *   2. getProgramKey() pathname mapping
 *   3. ACCENT_COLOR map
 * The header and footer pick the change up automatically.
 */

import { useLocation } from "@tanstack/react-router";

export type ProgramKey = "default" | "jr" | "create" | "camps" | "academies";

/** Brand accent color (used in "TECH" span — header light bg, footer dark bg). */
const ACCENT_COLOR: Record<ProgramKey, string> = {
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

export function getAccentColor(pathname: string): string {
  return ACCENT_COLOR[getProgramKey(pathname)];
}

/** Hook — returns the program key for the current route. */
export function useProgramKey(): ProgramKey {
  const { pathname } = useLocation();
  return getProgramKey(pathname);
}

/** Hook — returns the brand accent color (CSS value) for the current route. */
export function useProgramAccent(): string {
  const { pathname } = useLocation();
  return getAccentColor(pathname);
}
