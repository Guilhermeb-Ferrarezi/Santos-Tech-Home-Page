/**
 * useReveal — observa um elemento e marca `visible=true` na primeira
 * vez que ele entra no viewport.
 *
 * Implementação: usa um único IntersectionObserver compartilhado pra
 * todos os Reveals da página. Antes a gente criava 1 observer por
 * componente (300+ instâncias num scroll de página longa), agora é 1
 * só com um Map de callbacks. Win de performance no first paint.
 *
 * Nasce VISÍVEL (`visible=true`): o HTML do servidor já sai com o conteúdo
 * pintado, então sem JS (ou com o JS atrasado) nada fica invisível
 * (auditoria de UI/UX 24/09/2026, F034). No cliente, antes da pintura
 * (layout effect), só o que está ABAIXO da dobra é escondido e passa a ser
 * observado — o que já está na tela não pisca. Com
 * `prefers-reduced-motion` ou sem IntersectionObserver, nada é escondido.
 * Ou seja: `visible=false` só acontece fora da tela, esperando a entrada —
 * o componente pode desligar a transição nesse estado (o sumiço é
 * instantâneo; só a entrada anima).
 */

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Callback = (visible: boolean) => void;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, Callback>();

// useLayoutEffect avisa no servidor; lá ele nunca roda mesmo.
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb(true);
            sharedObserver?.unobserve(entry.target);
            callbacks.delete(entry.target);
          }
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
  );
  return sharedObserver;
}

function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(true);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = getObserver();
    if (!obs || prefersReducedMotion()) return;

    // Já na tela (ou acima dela, ex.: voltou com o scroll restaurado): fica
    // como veio do servidor, sem animar nem piscar.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setVisible(false);
    callbacks.set(el, setVisible);
    obs.observe(el);

    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return { ref, visible };
}
