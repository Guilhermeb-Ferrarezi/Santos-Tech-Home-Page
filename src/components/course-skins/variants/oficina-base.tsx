import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import type { OficinaBlockProps } from "./oficina-util";

/**
 * Peças comuns da família "Oficina" (Universo 3D), usadas pela pele e pelos blocos
 * de identidade de cada curso (variants/oficina-*.tsx). Aqui fica só o que é da
 * família — paleta, texturas, numeração vazada e a troca de nível —; a metáfora de
 * cada curso vive no arquivo da variante.
 */

const OUTLINE_NUM: CSSProperties = { WebkitTextStroke: "1.5px var(--accent)", color: "transparent" };

export function Eyebrow({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-5xl font-black leading-none sm:text-6xl" style={OUTLINE_NUM}>
        {n}
      </span>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-(--accent)">{children}</span>
    </div>
  );
}

/** Título padrão das seções da família (numeração vazada + H2 em maiúsculas). */
export function SectionTitle({ n, eyebrow, children }: { n: string; eyebrow: string; children: ReactNode }) {
  return (
    <Reveal>
      <Eyebrow n={n}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-black uppercase tracking-tight sm:text-4xl">{children}</h2>
    </Reveal>
  );
}

/**
 * Troca de nível (só aparece com mais de um). Cada curso passa o rótulo e o
 * formato das abas que combinam com a sua ferramenta.
 */
export function TierTabs({
  course,
  selectedTier,
  onSelectTier,
  label,
  shape = "pill",
  className = "mt-8",
}: Pick<OficinaBlockProps, "course" | "selectedTier" | "onSelectTier"> & {
  label: string;
  /** pill: bolinhas · tab: abas coladas embaixo (layouts do CAD) · box: botões quadrados. */
  shape?: "pill" | "tab" | "box";
  className?: string;
}) {
  if (course.tiers.length < 2) return null;
  const base =
    shape === "pill"
      ? "rounded-full px-4 py-1.5"
      : shape === "tab"
        ? "rounded-t-md border-x border-t px-4 py-1.5 -mb-px"
        : "rounded-md border px-3 py-1.5";
  return (
    <Reveal delay={80} className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="mr-2 font-mono text-[11px] uppercase tracking-wider text-[#8a6d57] dark:text-white/50">{label}</span>
      {course.tiers.map((t, i) => (
        <button
          key={t.levelName}
          type="button"
          onClick={() => onSelectTier(i)}
          aria-pressed={selectedTier === i}
          className={`${base} text-xs font-black transition ${
            selectedTier === i
              ? "border-(--accent) bg-(--accent) text-white"
              : "border-[#e9dccb] bg-[#f1e6d8] text-[#6b5242] hover:bg-[#e9dccb] dark:border-white/10 dark:bg-white/10 dark:text-white/70"
          }`}
        >
          {t.levelName}
        </button>
      ))}
    </Reveal>
  );
}
