/**
 * <TechHero> — wrapper de hero com fundo escuro temático Santos Tech.
 *
 * Empilha: gradient colorido, padrão de pontos, dois blobs animados,
 * elementos decorativos flutuantes (cubos/brackets/etc) e divisor de onda
 * no rodapé. É o "esqueleto" visual usado em todos os heros de programa
 * (CourseHero, /cursos/junior, /cursos/create) — o conteúdo entra como
 * children.
 *
 * Uso:
 *   <TechHero primary="#187ABF" dark="#04325A" soft="#49A8EB" decor="games">
 *     <SeuConteudo />
 *   </TechHero>
 */

import type { ReactNode } from "react";
import { DecorativeElements } from "@/components/decorative-elements";

type DecorVariant = "default" | "code" | "games" | "robot" | "ai" | "playful";

type Props = {
  /** Cor primária — usada no gradient inicial e no segundo blob. */
  primary: string;
  /** Cor escura — usada como fim do gradient. */
  dark: string;
  /** Cor suave/acento — usada no primeiro blob e nos elementos decorativos. */
  soft: string;
  /** Composição decorativa flutuante (cubos, brackets, etc). Default: "default". */
  decor?: DecorVariant;
  /** Conteúdo do hero (container + texto + imagem). */
  children: ReactNode;
  /** Classe extra do <section> raiz. */
  className?: string;
  /** Esconder o divisor de onda no rodapé (default: false). */
  noWave?: boolean;
};

export function TechHero({
  primary,
  dark,
  soft,
  decor = "default",
  children,
  className,
  noWave = false,
}: Props) {
  return (
    <section
      className={`relative isolate overflow-hidden text-white ${className ?? ""}`}
      style={{ background: `linear-gradient(135deg, ${primary} 0%, ${dark} 100%)` }}
    >
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full blur-3xl animate-blob"
        style={{ background: `${soft}55` }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full blur-3xl animate-blob [animation-delay:3s]"
        style={{ background: `${primary}99` }}
      />
      <DecorativeElements variant={decor} color={soft} />

      {children}

      {!noWave && (
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[100px]">
            <path
              d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,90 1440,60 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
