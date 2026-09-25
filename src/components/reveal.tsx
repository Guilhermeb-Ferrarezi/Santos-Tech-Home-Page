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

/**
 * Surge (opacidade + deslize) quando entra na tela. Nasce com `opacity:0` no
 * HTML do servidor e só aparece depois do JS — por isso é só para conteúdo
 * ABAIXO da dobra. Acima da dobra (hero: badge, H1, texto, CTAs) use `RevealHero`.
 */
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
      className={cn("transition-[transform,opacity] duration-700 ease-out will-change-transform", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}

type RevealHeroProps = {
  children: ReactNode;
  className?: string;
  /** Atraso da entrada em ms (escalonamento entre badge, título, texto e botões). */
  delay?: number;
  as?: ElementType;
};

/**
 * Entrada do conteúdo ACIMA DA DOBRA (hero). Só movimento, nunca opacidade: o
 * texto já chega pintado no HTML do servidor e pode ser o LCP sem esperar o JS
 * (auditoria SEO/performance de 24/09/2026, performance-cwv-01). Animação em CSS
 * puro (tw-animate-css): desliza 1rem de baixo pra cima; `fill-mode-backwards`
 * segura o ponto de partida durante o atraso. Desligada com `prefers-reduced-motion`.
 * `will-change-transform` mantém o mesmo contexto de empilhamento e bloco de
 * contenção do `Reveal` (filhos `absolute`/`z-index` se comportam igual).
 */
export function RevealHero({ children, className, delay = 0, as: Tag = "div" }: RevealHeroProps) {
  return (
    <Tag
      className={cn(
        "animate-in slide-in-from-bottom-4 fill-mode-backwards duration-700 ease-out will-change-transform motion-reduce:animate-none",
        className,
      )}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
