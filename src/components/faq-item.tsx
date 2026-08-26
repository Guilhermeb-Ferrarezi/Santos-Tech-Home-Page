import { useRef, useState, type MouseEvent } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

type Props = { q: string; a: string };

/**
 * `<details>` nativo por baixo (SSR/sem-JS funciona igual antes — abre/fecha
 * na hora, sem nenhum estilo inline nosso interferindo). Com JS, intercepta
 * o clique e anima a altura do conteúdo em vez do "snap" instantâneo do
 * navegador. Nenhum estilo é aplicado no primeiro render — só a partir do
 * primeiro clique, via GSAP imperativo.
 */
export function FaqItem({ q, a }: Props) {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);

  function handleToggle(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (animating.current) return;
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      details.open = !details.open;
      setOpen(details.open);
      return;
    }

    if (!details.open) {
      details.open = true;
      setOpen(true);
      const targetHeight = content.scrollHeight;
      animating.current = true;
      gsap.fromTo(
        content,
        { height: 0, overflow: "hidden" },
        {
          height: targetHeight,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(content, { clearProps: "height,overflow" });
            animating.current = false;
          },
        },
      );
    } else {
      animating.current = true;
      gsap.fromTo(
        content,
        { height: content.scrollHeight, overflow: "hidden" },
        {
          height: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            details.open = false;
            setOpen(false);
            gsap.set(content, { clearProps: "height,overflow" });
            animating.current = false;
          },
        },
      );
    }
  }

  return (
    <details
      ref={detailsRef}
      className="group rounded-2xl border-2 border-primary/10 bg-card p-5 transition hover:border-primary/30"
    >
      <summary
        onClick={handleToggle}
        className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-st-blue-dark [&::-webkit-details-marker]:hidden"
      >
        <span className="flex items-start gap-3">
          <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          {q}
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${open ? "rotate-180" : ""}`} />
      </summary>
      <div ref={contentRef}>
        <p className="mt-3 pl-8 text-muted-foreground">{a}</p>
      </div>
    </details>
  );
}
