import { useEffect, useRef } from "react";
import type { RefObject } from "react";

/**
 * Aciona `apply` em resposta ao scroll, de forma eficiente:
 *
 * - Um loop `requestAnimationFrame` roda **só enquanto há rolagem** e se
 *   auto-desliga após ~8 frames parado (idle = zero CPU). Acordar é via
 *   listener de scroll passivo. Isso mantém o tracking suave no momentum do
 *   iOS (amostra cada frame durante o movimento) sem queimar CPU à toa.
 * - O loop só liga quando a seção está visível (IntersectionObserver).
 *
 * `apply` é lido de um ref, então pode ser uma função nova a cada render sem
 * re-assinar os listeners.
 */
export function useScrollScrub(
  enabled: boolean,
  rootRef: RefObject<HTMLElement | null>,
  apply: () => void,
) {
  const applyRef = useRef(apply);
  applyRef.current = apply;

  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    let lastY = -1;
    let idle = 0;
    let running = false;
    let active = false;

    const frame = () => {
      applyRef.current();
      const y = window.scrollY;
      if (y === lastY) {
        if (++idle > 8) {
          running = false;
          return;
        }
      } else {
        idle = 0;
        lastY = y;
      }
      raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (!active || running) return;
      running = true;
      idle = 0;
      lastY = -1;
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        active = e.isIntersecting;
        if (active) {
          applyRef.current();
          wake();
        } else {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(root);
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", wake, { passive: true });

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", wake);
    };
  }, [enabled, rootRef]);
}
