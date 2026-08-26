import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Anima a largura (0% → `toPercent`) de uma barra de progresso quando ela
 * entra na tela (uma vez só). Sem `prefers-reduced-motion`, mostra o valor
 * final direto.
 */
export function useFillOnScroll<T extends HTMLElement>(toPercent: number): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: `${toPercent}%`,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return ref;
}
