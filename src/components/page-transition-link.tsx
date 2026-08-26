import { Link, useRouter } from "@tanstack/react-router";
import { gsap } from "gsap";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  to: "/cursos";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

/**
 * Link com animação de saída (fade + leve movimento) antes de navegar.
 * Usado hoje só no par piloto home ⇄ /cursos (ver
 * docs/superpowers/specs/2026-08-25-home-motion-upgrade-design.md). A
 * entrada na nova página é responsabilidade de `useRouteEnterFade`, já
 * ligado no `<main>` do root — este componente só cuida da saída.
 */
export function PageTransitionLink({ to, className, onClick, children }: Props) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.getElementById("conteudo");
    if (!main) return;

    e.preventDefault();
    gsap.to(main, {
      opacity: 0,
      y: -16,
      scale: 0.985,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        router.navigate({ to });
      },
    });
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
