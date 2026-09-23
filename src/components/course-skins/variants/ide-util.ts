import type { ComponentType } from "react";
import type { CourseData, Tier } from "@/components/particular-course-page";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";
import type { tierMeta } from "@/components/course-skins/shared";

/**
 * Tipos e utilitários da pele "IDE" (Programação), compartilhados pelas
 * variantes por curso em `variants/ide-*.tsx`.
 */

export type Modulo = Tier["modules"][number];
export type TierMeta = ReturnType<typeof tierMeta>;

/** Props do bloco "Para quem é" de cada curso. */
export type PublicoProps = {
  itens: string[];
  course: CourseData;
  theme: CourseTheme;
  tema: CourseThemeKey;
};

/** Props do bloco "Conteúdo programático" de cada curso. */
export type ConteudoProps = {
  course: CourseData;
  tier: Tier;
  tierIndex: number;
  onSelectTier: (i: number) => void;
  meta: TierMeta;
};

/**
 * Identidade de um curso dentro da pele IDE: cores e rótulos do hero (que não
 * mudam) e os dois blocos com a metáfora da própria ferramenta.
 */
export type VarianteIde = {
  /** Cor secundária (strings, checks) — acompanha a ferramenta. */
  accent2: string;
  /** Comentário usado nos títulos de seção (“# 01 · …”). */
  cm: string;
  /** Envoltório da tagline no hero. */
  doc: [string, string];
  status: [string, string];
  linguagem: string;
  /** Rótulo em mono acima do título “Este curso é ideal se você...”. */
  publicoRotulo: string;
  /** Rótulo em mono acima do título “O que você vai aprender”. */
  conteudoRotulo: string;
  Publico: ComponentType<PublicoProps>;
  Conteudo: ComponentType<ConteudoProps>;
};

/** Classes de cor da sintaxe (tema escuro da pele). */
export const C = {
  kw: "text-[#c792ea]",
  fn: "text-(--accent)",
  str: "text-(--accent-2)",
  num: "text-[#f78c6c]",
  cm: "text-white/40",
  pl: "text-white/85",
  tag: "text-[#f07178]",
  attr: "text-[#ffcb6b]",
};

// ── Identificadores no estilo de cada linguagem ─────────────────────────────

export function slug(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 42);
}
export const kebab = (t: string) => slug(t).replace(/_/g, "-");
export const pascal = (t: string) =>
  slug(t)
    .split("_")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("")
    .slice(0, 34);
export const camel = (t: string) => {
  const p = pascal(t);
  return p ? p[0].toLowerCase() + p.slice(1) : p;
};
export const nn = (i: number) => String(i + 1).padStart(2, "0");

const MIUDAS = new Set(["e", "de", "do", "da", "dos", "das", "com", "para", "pra", "em", "no", "na", "a", "o", "os", "as", "ao", "por", "um", "uma"]);
/** Trecho curto e legível de um título para rotas, branches e tabelas (sem “de”, “e”, “com”…). */
export const curto = (t: string, palavras = 3, sep = "-") =>
  slug(t)
    .split("_")
    .filter((w) => w && !MIUDAS.has(w))
    .slice(0, palavras)
    .join(sep);
/** Hash curto e estável (commits, ids de requisição…). */
export const hash7 = (s: string, semente = 5381) =>
  [...s].reduce((h, ch) => (h * 33 + ch.charCodeAt(0)) >>> 0, semente).toString(16).padStart(7, "0").slice(0, 7);

/** Texto de ritmo do nível (aulas · intensivo · padrão). */
export const ritmo = (tier: Tier, meta: TierMeta) =>
  `${meta?.aulas ?? tier.totalHours} · intensivo ${meta?.intensivo ?? "—"} · padrão ${meta?.padrao ?? "—"}`;
