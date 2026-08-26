import { useEffect, useRef, type RefObject } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap } from "gsap";

/**
 * Roda um fade+movimento de entrada no elemento toda vez que o pathname da
 * rota muda — cobre qualquer tipo de navegação (link, voltar/avançar,
 * teclado). Não roda na primeira montagem (senão brigaria com o SSR).
 */
export function useRouteEnterFade(containerRef: RefObject<HTMLElement | null>) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 16, scale: 1.01 },
      { opacity: 1, y: 0, scale: 1, duration: 0.38, ease: "power2.out" },
    );
  }, [pathname, containerRef]);
}
