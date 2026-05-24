/**
 * useReveal — observa um elemento e marca `visible=true` na primeira
 * vez que ele entra no viewport.
 *
 * Implementação: usa um único IntersectionObserver compartilhado pra
 * todos os Reveals da página. Antes a gente criava 1 observer por
 * componente (300+ instâncias num scroll de página longa), agora é 1
 * só com um Map de callbacks. Win de performance no first paint.
 *
 * SSR-safe: se IntersectionObserver não existir, retorna `visible=true`
 * imediatamente.
 */

import { useEffect, useRef, useState } from "react";

type Callback = (visible: boolean) => void;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, Callback>();

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

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = getObserver();
    if (!obs) {
      setVisible(true);
      return;
    }

    callbacks.set(el, setVisible);
    obs.observe(el);

    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return { ref, visible };
}
