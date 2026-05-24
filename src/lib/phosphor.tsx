/**
 * Phosphor Icons — wrapper utility.
 *
 * Phosphor tem 6 pesos (thin/light/regular/bold/fill/duotone) que dão
 * o look premium. Mas o nosso sistema (BadgeChip, ModuleCard, etc.)
 * espera componentes que só recebem `className` — sem weight.
 *
 * `phosphor()` curra a propriedade weight, retornando um componente
 * compatível com o tipo `ComponentType<{ className?: string }>` que
 * o resto do sistema usa.
 *
 * IMPORTANTE: chamar phosphor() no top-level do módulo (uma vez).
 * Nunca dentro de render — cada chamada cria um componente novo
 * e quebra a reconciliação do React.
 *
 * Exemplos de uso:
 *
 *   import { Lightning, GearSix } from "@phosphor-icons/react";
 *   import { phosphor } from "@/lib/phosphor";
 *
 *   // Top-level: define uma vez
 *   const FaiscaIcon = phosphor(Lightning, "bold");
 *   const EngrenagemIcon = phosphor(GearSix, "duotone");
 *
 *   // No render:
 *   <FaiscaIcon className="h-7 w-7 text-white" />
 *
 * Convenções de weight no projeto:
 * - "duotone"  pillars, metodologia, ícones em fundo claro
 * - "bold"     badges em fundo colorido (precisam de presença forte)
 * - "regular"  caso default — equivalente ao lucide
 * - "light"    decorações sutis (não usado ainda)
 */

import type { ComponentType, CSSProperties } from "react";

export type PhosphorWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

type PhosphorIconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties;
  weight?: PhosphorWeight;
}>;

/** Tipo de saída — equivalente a um lucide icon (aceita className + style). */
export type LucideCompatible = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

export function phosphor(
  Icon: PhosphorIconComponent,
  weight: PhosphorWeight = "duotone",
): LucideCompatible {
  function PhosphorWrapped({ className, style }: { className?: string; style?: CSSProperties }) {
    return <Icon className={className} style={style} weight={weight} />;
  }
  return PhosphorWrapped;
}
