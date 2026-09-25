import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

type DetalhesProps = {
  /** Conteúdo do `<summary>` (a pergunta, o título do módulo…). Use um heading (`<h3>`) para o texto principal. */
  resumo: ReactNode;
  /** Conteúdo que abre/fecha. Fica sempre no HTML servido, mesmo fechado. */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  summaryClassName?: string;
  /** Mesmo `name` em vários `<details>` = só um aberto por vez (comportamento nativo do navegador). */
  name?: string;
};

/**
 * `<details>` nativo com animação de altura (GSAP) ao abrir/fechar.
 *
 * O conteúdo fica SEMPRE no HTML servido: o `<details>` fechado esconde o texto
 * da tela e do leitor de tela (e tira do foco o que houver dentro, como um CTA),
 * mas robôs de busca e de IA leem o texto. É o que mantém as respostas do FAQ e
 * a ementa aula a aula indexáveis — auditoria SEO de 24/09/2026
 * (aeo-respostas-01/-02, lacuna-conteudo-01). Não troque por renderização
 * condicional (`{open && …}`) nem por um accordion que desmonta o conteúdo.
 *
 * Sem JS, o navegador abre/fecha na hora. Com JS, o clique no `<summary>` é
 * interceptado e a altura é animada. O visual de "aberto" (seta girada etc.)
 * vem do atributo `open` via `group-open/<nome>:` no CSS, não de estado React —
 * então acompanha também a busca na página (Ctrl+F abre o `<details>` sozinho).
 * Com `prefers-reduced-motion`, abre/fecha sem animação.
 */
export function Detalhes({ resumo, children, className, style, summaryClassName = "", name }: DetalhesProps) {
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
      return;
    }

    if (!details.open) {
      details.open = true;
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
            gsap.set(content, { clearProps: "height,overflow" });
            animating.current = false;
          },
        },
      );
    }
  }

  return (
    <details ref={detailsRef} name={name} className={className} style={style}>
      <summary
        onClick={handleToggle}
        className={`cursor-pointer list-none [&::-webkit-details-marker]:hidden ${summaryClassName}`}
      >
        {resumo}
      </summary>
      <div ref={contentRef}>{children}</div>
    </details>
  );
}

/** Pergunta do FAQ da home: pergunta como `<h3>` dentro do `<summary>`, resposta sempre no HTML. */
export function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <Detalhes
      className="group/faq rounded-2xl border-2 border-primary/10 bg-card p-5 transition hover:border-primary/30"
      summaryClassName="flex items-center justify-between gap-4 font-black text-st-blue-dark"
      resumo={
        <>
          <h3 className="flex items-start gap-3">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            {q}
          </h3>
          <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open/faq:rotate-180" />
        </>
      }
    >
      <p className="mt-3 pl-8 text-muted-foreground">{a}</p>
    </Detalhes>
  );
}
