import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

/**
 * Scroll suave (inércia) pro site inteiro, via GSAP ScrollSmoother. Envolve
 * `#smooth-wrapper` / `#smooth-content` (montados em `__root.tsx`) — cabeçalho
 * (`fixed`, não `sticky`) e o botão de WhatsApp ficam FORA do wrapper de
 * propósito: um `transform` no ancestral (o jeito que o ScrollSmoother produz
 * o efeito) faz filhos `fixed`/`sticky` pararem de se comportar como tal.
 *
 * Uma instância pro app inteiro — chamado em `__root.tsx`. Recria quando
 * `hasWrapper` muda (a rota `/adultos` não usa esse layout, então não tem
 * `#smooth-wrapper` — o smoother é desligado nela e religado ao sair).
 * Sem `prefers-reduced-motion`, nem inicializa (scroll nativo comum).
 */
export function useSmoothScroll(hasWrapper: boolean) {
  useGSAP(() => {
    if (typeof window === "undefined") return;
    if (!hasWrapper) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: false,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, [hasWrapper]);
}
