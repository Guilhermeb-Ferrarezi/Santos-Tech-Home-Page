import { useRef, type CSSProperties, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Cartão com leve inclinação 3D seguindo o cursor — só ativa com mouse de
 * verdade (`hover: hover`) e sem `prefers-reduced-motion`. Em touch/mobile
 * fica estático, sem custo nenhum.
 */
export function TiltCard({ children, className, style }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!window.matchMedia("(hover: hover)").matches) return;

      gsap.set(el, { transformPerspective: 800 });

      function handleMove(e: MouseEvent) {
        const rect = el!.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(el, {
          rotateY: px * 10,
          rotateX: -py * 10,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      function handleLeave() {
        gsap.to(el, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.5, ease: "power2.out" });
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
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
