import type { ReactNode, ElementType, CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  y?: number;
};

export function Reveal({ children, className, delay = 0, as: Tag = "div", y = 24 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    opacity: visible ? 1 : 0,
  };
  return (
    <Tag
      ref={ref as never}
      className={cn("transition-all duration-700 ease-out will-change-transform", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
