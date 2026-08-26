import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type CountUpOptions = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

function format(value: number, decimals: number, prefix: string, suffix: string) {
  return `${prefix}${value.toFixed(decimals)}${suffix}`;
}

/**
 * Anima o texto de um elemento de 0 até `to` quando ele entra na tela
 * (uma vez só). Sem `prefers-reduced-motion`, mostra o valor final direto.
 * Não escreve nada se o elemento nunca ganhar um `ref` (uso condicional
 * em `StatNumber`, pra estatísticas que não fazem sentido contar, tipo
 * um intervalo "5–15").
 */
export function useCountUp<T extends HTMLElement>({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
}: CountUpOptions): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = format(to, decimals, prefix, suffix);
        return;
      }

      const proxy = { value: 0 };
      gsap.to(proxy, {
        value: to,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = format(proxy.value, decimals, prefix, suffix);
        },
      });
    },
    { scope: ref, dependencies: [] },
  );

  return ref;
}
