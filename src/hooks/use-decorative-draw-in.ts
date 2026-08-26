import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

/**
 * Anima o traço (stroke-dasharray/dashoffset) de todo path/circle com stroke
 * dentro do container, na entrada. Ícones só de fill (sem stroke) recebem
 * apenas o fade do <svg> pai. Não roda com prefers-reduced-motion.
 */
export function useDecorativeDrawIn(containerRef: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const container = containerRef.current;
      if (!container) return;

      const svgs = Array.from(container.querySelectorAll("svg"));
      if (svgs.length === 0) return;

      gsap.set(svgs, { opacity: 0 });
      gsap.to(svgs, { opacity: 1, duration: 0.5, stagger: 0.06, ease: "power1.out" });

      svgs.forEach((svg) => {
        const shapes = Array.from(
          svg.querySelectorAll<SVGGeometryElement>("path[stroke], circle[stroke]"),
        );
        shapes.forEach((shape) => {
          const length = shape.getTotalLength();
          gsap.set(shape, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(shape, { strokeDashoffset: 0, duration: 0.7, ease: "power2.out", delay: 0.1 });
        });
      });
    },
    { scope: containerRef, dependencies: [] },
  );
}
