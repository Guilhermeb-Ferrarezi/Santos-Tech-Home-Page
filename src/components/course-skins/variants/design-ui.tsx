import type { ReactNode } from "react";
import { Clapperboard, Frame } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { SkinProps } from "@/components/course-skins/shared";
import { Handles } from "@/components/course-skins/scenes/design-kit";

/**
 * Peças comuns da pele "Estúdio" (Design & Criação), usadas pelo esqueleto em
 * `course-skins/design.tsx` e pelos blocos de cada curso em `variants/design-*.tsx`.
 */

/** Palavra em serifa itálica com caixa de seleção (a "assinatura" tipográfica da pele). */
export function Picked({ children, video = false }: { children: ReactNode; video?: boolean }) {
  return (
    <span className="relative ml-1 inline-block px-1 font-serif font-normal italic text-(--accent)">
      {children}
      {video ? (
        <span className="absolute inset-x-1 -bottom-0.5 h-1 rounded-full bg-(--accent-2)" />
      ) : (
        <span className="pointer-events-none absolute inset-0 border border-(--accent)">
          <Handles size={6} />
        </span>
      )}
    </span>
  );
}

/** "Este curso é ideal se você…" — título padrão do bloco de público. */
export function AudienceTitle({ video = false }: { video?: boolean }) {
  return (
    <>
      Este curso é ideal se{" "}
      <span className="whitespace-nowrap">
        <Picked video={video}>você</Picked>
        <span className="font-serif font-normal italic text-(--accent)">…</span>
      </span>
    </>
  );
}

export function SectionHead({
  n,
  label,
  video,
  dark = false,
  children,
}: {
  n: string;
  label: string;
  video: boolean;
  /** Seção sempre escura (independe do modo claro/escuro da página). */
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <p
        className={`flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${
          dark ? "text-white/50" : "text-[#766c7d] dark:text-white/50"
        }`}
      >
        {video ? <Clapperboard className="h-3.5 w-3.5 text-(--accent)" /> : <Frame className="h-3.5 w-3.5 text-(--accent)" />}
        <span className="text-(--accent)">{n}</span> — {label}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">{children}</h2>
    </Reveal>
  );
}

/** Seletor de nível (só aparece em curso com mais de um nível). */
export function TierTabs({
  course,
  selectedTier,
  onSelect,
  label,
  dark = false,
}: {
  course: SkinProps["course"];
  selectedTier: number;
  onSelect: (i: number) => void;
  label: string;
  dark?: boolean;
}) {
  if (course.tiers.length < 2) return null;
  return (
    <Reveal delay={80} className="mt-8 flex flex-wrap items-center gap-2">
      <span className={`mr-1 font-mono text-[11px] uppercase tracking-wider ${dark ? "text-white/45" : "text-[#766c7d] dark:text-white/45"}`}>
        {label}:
      </span>
      {course.tiers.map((t, i) => (
        <button
          key={t.levelName}
          type="button"
          onClick={() => onSelect(i)}
          className={`rounded-full px-4 py-1.5 text-xs font-black transition ${
            selectedTier === i
              ? "bg-(--accent) text-white"
              : dark
                ? "bg-white/10 text-white/70 hover:bg-white/15"
                : "bg-[#f1ecf0] text-[#4a4250] hover:bg-[#e9e2e8] dark:bg-white/10 dark:text-white/70"
          }`}
        >
          {t.levelName}
        </button>
      ))}
    </Reveal>
  );
}
