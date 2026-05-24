/**
 * <HoverWashCard> — card com bolinha decorativa no canto + wash que cresce no hover.
 *
 * Comportamento (inspirado no site da EBAC):
 * - Estado normal: bolinha colorida no top-right, 20% opacity.
 * - Hover: bolinha some (opacity → 0) E um wash da MESMA cor cresce
 *   via clip-path circle a partir do top-right, cobrindo o card inteiro.
 * - Sai do hover: reverte — bolinha reaparece, wash recolhe.
 *
 * Usado em: ModuleCard (course-page), AcademyCard, ProgramCardItem,
 * CourseCardItem, CampCard.
 *
 * Tamanhos predefinidos da bolinha (porque cada card historicamente
 * tem proporções diferentes):
 *   sm  → 128px (-right/top-8)
 *   md  → 144px (-right/top-10)
 *   lg  → 192px (-right/top-12)
 */

import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BubbleSize = "sm" | "md" | "lg";

type Props = {
  /** Cor principal — usada na borda, shadow, bolinha e wash. */
  accent: string;
  /** Conteúdo do card. */
  children: ReactNode;
  /** Tamanho da bolinha decorativa. Default: "sm". */
  bubbleSize?: BubbleSize;
  /** Opacidade alpha da borda (0-1). Default: 0.4 (= COLOR40). */
  borderAlpha?: number;
  /** Padding inside the card. Default: "p-7". */
  padding?: string;
} & Omit<HTMLAttributes<HTMLElement>, "color">;

const BUBBLE_CLASSES: Record<BubbleSize, string> = {
  sm: "-right-8 -top-8 h-32 w-32",
  md: "-right-10 -top-10 h-36 w-36",
  lg: "-right-12 -top-12 h-48 w-48",
};

export function HoverWashCard({
  accent,
  children,
  bubbleSize = "sm",
  borderAlpha = 0.4,
  padding = "p-7",
  className,
  style,
  ...rest
}: Props) {
  const borderHex = Math.round(borderAlpha * 255)
    .toString(16)
    .padStart(2, "0");

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-xl border-2 bg-white transition hover:-translate-y-1",
        padding,
        className,
      )}
      style={{
        borderColor: `${accent}${borderHex}`,
        boxShadow: `0 10px 30px -10px ${accent}33`,
        ...style,
      }}
      {...rest}
    >
      {/* Bolinha decorativa — some no hover pra "virar" o wash */}
      <div
        className={cn("pointer-events-none absolute rounded-full opacity-20 transition-opacity duration-700 ease-out group-hover:opacity-0", BUBBLE_CLASSES[bubbleSize])}
        style={{ background: accent }}
      />
      {/* Wash hover — mesma cor da bolinha, expande do top-right */}
      <div
        className="pointer-events-none absolute inset-0 [clip-path:circle(0%_at_top_right)] transition-all duration-700 ease-out group-hover:[clip-path:circle(150%_at_top_right)]"
        style={{ background: accent, opacity: 0.2 }}
      />
      <div className="relative h-full">{children}</div>
    </article>
  );
}
