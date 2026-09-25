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
 * `hasWrapper` muda (a rota `/particular` não usa esse layout, então não tem
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

    // Âncoras (#programas, #investimento…): sem isto o navegador faz o salto rolando o
    // #smooth-wrapper (overflow-hidden), não a janela, e o visitante fica preso — não
    // consegue mais rolar de volta pro topo sem recarregar. Aqui o salto passa pelo
    // smoother, compensando o header fixo (80px + folga).
    const OFFSET = "top 96px";
    const alvoDo = (hash: string) => {
      if (!hash || hash === "#") return null;
      try {
        return document.querySelector<HTMLElement>(decodeURIComponent(hash));
      } catch {
        return null;
      }
    };
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const alvo = alvoDo(url.hash);
      if (!alvo) return;
      e.preventDefault();
      smoother.scrollTo(alvo, true, OFFSET);
      // Sem pushState do hash de propósito: o router reage à troca de hash com o próprio
      // scrollIntoView, que rola o #smooth-wrapper e prende a página de novo.
      // "Pular para o conteúdo" (#conteudo) precisa levar o FOCO, não só a rolagem.
      if (alvo.tagName === "MAIN") {
        if (!alvo.hasAttribute("tabindex")) alvo.setAttribute("tabindex", "-1");
        alvo.focus({ preventScroll: true });
      }
    };
    document.addEventListener("click", onClick);

    // Link direto com hash (ex.: /#investimento compartilhado no WhatsApp): rola pelo
    // smoother depois que o ScrollTrigger mediu a página.
    const alvoInicial = alvoDo(location.hash);
    const timer = alvoInicial
      ? window.setTimeout(() => {
          ScrollTrigger.refresh();
          smoother.scrollTo(alvoInicial, false, OFFSET);
        }, 150)
      : 0;

    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(timer);
      smoother.kill();
    };
  }, [hasWrapper]);
}
