import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

type Props = {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Botão que "puxa" levemente na direção do cursor quando ele passa perto —
 * só com mouse de verdade (`hover: hover`) e sem `prefers-reduced-motion`.
 * Em touch/mobile funciona como um link normal, sem custo nenhum.
 */
export function MagneticButton({ href, target, rel, className, children }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!window.matchMedia("(hover: hover)").matches) return;

      function handleMove(e: MouseEvent) {
        const rect = el!.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.35, ease: "power2.out" });
      }
      function handleLeave() {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      }

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <a ref={ref} href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
}
