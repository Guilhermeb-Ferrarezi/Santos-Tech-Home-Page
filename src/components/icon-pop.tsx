import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

/**
 * Ícone com pop de escala/rotação ao entrar na tela — usa o mesmo
 * IntersectionObserver compartilhado do `useReveal` (não duplica lógica de
 * visibilidade).
 */
export function IconPop({ icon: Icon, className, iconClassName }: Props) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex transition-transform duration-500 ease-out",
        visible ? "scale-100 rotate-0" : "scale-50 rotate-[-25deg]",
        className,
      )}
    >
      <Icon className={iconClassName} />
    </span>
  );
}
