import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Parallax scroll-linked só na primeira dobra (Hero). Reutiliza o mesmo
 * `sectionRef` que a seção já usa como container. Cada camada devolvida deve
 * ser anexada ao elemento correspondente no JSX via `ref`.
 */
export function useHeroParallax(sectionRef: RefObject<HTMLElement | null>) {
  const dotsRef = useRef<HTMLDivElement | null>(null);
  const blobsRef = useRef<HTMLDivElement | null>(null);
  const collageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const section = sectionRef.current;
      if (!section) return;

      const scrollTrigger = { trigger: section, start: "top top", end: "bottom top", scrub: true };
      // Valores bem maiores que a primeira tentativa (que era imperceptível).
      if (dotsRef.current) gsap.to(dotsRef.current, { y: 140, ease: "none", scrollTrigger });
      if (blobsRef.current) {
        gsap.to(blobsRef.current, { y: 320, scale: 1.15, ease: "none", scrollTrigger });
      }
      if (collageRef.current) gsap.to(collageRef.current, { y: 420, ease: "none", scrollTrigger });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return { dotsRef, blobsRef, collageRef };
}
