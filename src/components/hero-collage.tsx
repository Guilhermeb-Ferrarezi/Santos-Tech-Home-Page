import { useEffect, useRef, useState } from "react";
import { RevealHero } from "@/components/reveal";
import { Img } from "@/components/img";

/**
 * Colagem do herói com fotos rotativas em CROSSFADE. A cada ciclo, cada quadro
 * recebe a próxima foto numa camada nova que faz fade-in POR CIMA da anterior —
 * a foto antiga só é removida depois que a nova cobriu, então nunca aparece o
 * fundo do site no meio da troca.
 *
 * Sem duplicatas na tela: os 4 quadros usam índices {offset, +2, +4, +6} num
 * pool de 8 → sempre 4 fotos distintas. Respeita prefers-reduced-motion.
 *
 * Carregamento (auditoria de performance de 24/09/2026, performance-cwv-08):
 * - `sizes` com a largura real de cada quadro — sem ele o navegador assume
 *   100vw e baixa a variante de 1200w pra um quadro de ~240px.
 * - `fetchpriority="high"` + eager só na 1ª foto do maior quadro (candidato a
 *   LCP no desktop); os outros quadros e as trocas do crossfade são lazy e sem
 *   prioridade. A colagem é `hidden lg:block`: no celular, imagem lazy
 *   escondida nem chega a ser baixada.
 * - Entrada só com movimento (RevealHero): as fotos já chegam visíveis no HTML
 *   do servidor, sem esperar o JS.
 */
const POOL = [
  { name: "marina-aula", alt: "Aluna criando no Roblox com o professor na Santos Tech" },
  { name: "students-1", alt: "Aluno programando na Santos Tech" },
  { name: "students-2", alt: "Aluna na aula de tecnologia da Santos Tech" },
  { name: "marina-pc", alt: "Aluna concentrada na aula na Santos Tech" },
  { name: "marina-roblox", alt: "Aluna criando um jogo no Roblox na Santos Tech" },
  { name: "students-3", alt: "Turma da Santos Tech em aula" },
  { name: "students-4", alt: "Aluno avançado da Santos Tech" },
  { name: "marina-3d", alt: "Aluna com seus personagens impressos em 3D" },
];

// `sizes` = largura do quadro (w-56 = 224px, w-60 = 240px, w-64 = 256px, w-52 = 208px).
const TILES = [
  { pos: "absolute left-4 top-0 w-56 rotate-[-6deg]", float: "animate-float-slow", h: "h-64", sizes: "224px", delay: 400, lcp: false },
  { pos: "absolute right-0 top-10 w-60 rotate-[4deg]", float: "animate-float-slower", h: "h-72", sizes: "240px", delay: 520, lcp: true },
  { pos: "absolute left-16 bottom-0 w-64 rotate-[3deg]", float: "animate-float-slow [animation-delay:1.4s]", h: "h-56", sizes: "256px", delay: 640, lcp: false },
  { pos: "absolute right-6 bottom-6 w-52 rotate-[-5deg]", float: "animate-float-slower [animation-delay:2.2s]", h: "h-56", sizes: "208px", delay: 760, lcp: false },
];

type Layer = { name: string; alt: string; id: number };

/** Empilha a foto atual + a nova; a nova faz fade-in por cima, a antiga sai depois. */
function CrossfadeImage({
  name,
  alt,
  imgClassName,
  sizes,
  lcp,
}: {
  name: string;
  alt: string;
  imgClassName: string;
  sizes: string;
  lcp: boolean;
}) {
  const [stack, setStack] = useState<Layer[]>([{ name, alt, id: 0 }]);
  const idRef = useRef(0);
  const prevName = useRef(name);

  useEffect(() => {
    if (name === prevName.current) return;
    prevName.current = name;
    idRef.current += 1;
    const id = idRef.current;
    setStack((s) => [...s, { name, alt, id }]);
    const t = setTimeout(() => {
      setStack((s) => s.filter((l) => l.id === id));
    }, 1700);
    return () => clearTimeout(t);
  }, [name, alt]);

  return (
    <>
      {stack.map((l, i) => (
        <div key={l.id} className={`absolute inset-0 ${i > 0 ? "crossfade-in" : ""}`}>
          <Img
            name={l.name}
            alt={l.alt}
            sizesAttr={sizes}
            priority={lcp && l.id === 0}
            className={imgClassName}
          />
        </div>
      ))}
    </>
  );
}

export function HeroCollage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => setOffset((o) => (o + 1) % POOL.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative hidden h-[480px] lg:block">
      {TILES.map((t, i) => {
        const photo = POOL[(offset + i * 2) % POOL.length];
        return (
          <RevealHero key={i} delay={t.delay} className={t.pos}>
            <div
              className={`overflow-hidden rounded-2xl border-2 border-primary/25 shadow-[0_20px_40px_-15px_rgba(24,122,191,0.35),0_4px_12px_rgba(24,122,191,0.08)] ${t.float}`}
            >
              <div className={`relative w-full ${t.h}`}>
                <CrossfadeImage
                  name={photo.name}
                  alt={photo.alt}
                  imgClassName={`${t.h} w-full object-cover`}
                  sizes={t.sizes}
                  lcp={t.lcp}
                />
              </div>
            </div>
          </RevealHero>
        );
      })}
    </div>
  );
}
