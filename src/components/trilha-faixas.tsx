import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { CourseTheme } from "@/components/course-page";

type Faixa = { rotulo: string; idade: string; nome: string; href: string };

/**
 * As 9 faixas etárias em sequência — JR1 → JR3 e depois CREATE Ano 1 → Ano 6.
 * A passagem JR3 → CREATE Ano 1 é a que as próprias páginas descrevem (o JR3 é o
 * "ano-ponte pro CREATE"; o CREATE Ano 1 retoma de onde o JR3 parou). Nomes e
 * idades são os que as páginas usam hoje (ver /cursos/junior e /cursos/create).
 */
const FAIXAS: Faixa[] = [
  { rotulo: "JR1", idade: "5 a 6 anos", nome: "Primeiros Passos", href: "/cursos/junior/5-6-anos" },
  { rotulo: "JR2", idade: "6 a 7 anos", nome: "Construindo a Base", href: "/cursos/junior/6-7-anos" },
  { rotulo: "JR3", idade: "7 a 8 anos", nome: "Pronto pra Criar", href: "/cursos/junior/7-8-anos" },
  { rotulo: "CREATE Ano 1", idade: "8 a 9 anos", nome: "Fundamentos do Arcade", href: "/cursos/create/8-9-anos" },
  { rotulo: "CREATE Ano 2", idade: "9 a 10 anos", nome: "Construtores de Mundos", href: "/cursos/create/9-10-anos" },
  { rotulo: "CREATE Ano 3", idade: "10 a 11 anos", nome: "Códex do Programador", href: "/cursos/create/10-11-anos" },
  { rotulo: "CREATE Ano 4", idade: "11 a 12 anos", nome: "Forja dos Algoritmos", href: "/cursos/create/11-12-anos" },
  { rotulo: "CREATE Ano 5", idade: "12 a 13 anos", nome: "Núcleo do Motor", href: "/cursos/create/12-13-anos" },
  { rotulo: "CREATE Ano 6", idade: "13 a 14 anos", nome: "A Arquitetura Viva", href: "/cursos/create/13-14-anos" },
];

/**
 * Trilha "faixa anterior / próxima faixa" no fim de cada página de faixa etária.
 * Liga as 9 páginas entre si com âncora descritiva (rótulo · idade — nome), em vez
 * de cada uma só apontar de volta para o hub do programa.
 */
export function TrilhaFaixas({ atual, theme }: { atual: string; theme: CourseTheme }) {
  const i = FAIXAS.findIndex((f) => f.href === atual);
  if (i < 0) return null;
  const anterior = FAIXAS[i - 1];
  const proxima = FAIXAS[i + 1];

  return (
    <nav aria-label="Trilha por idade" className="pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p
            className="text-center text-sm font-black uppercase tracking-[0.25em]"
            style={{ color: theme.dark }}
          >
            Trilha por idade
          </p>
          <div className={`mt-6 grid gap-4 ${anterior && proxima ? "sm:grid-cols-2" : "sm:mx-auto sm:max-w-md"}`}>
            {anterior && <CardFaixa faixa={anterior} direcao="anterior" theme={theme} />}
            {proxima && <CardFaixa faixa={proxima} direcao="proxima" theme={theme} />}
          </div>
        </Reveal>
      </div>
    </nav>
  );
}

function CardFaixa({
  faixa,
  direcao,
  theme,
}: {
  faixa: Faixa;
  direcao: "anterior" | "proxima";
  theme: CourseTheme;
}) {
  const proxima = direcao === "proxima";
  return (
    <Link
      to={faixa.href}
      rel={proxima ? "next" : "prev"}
      className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ outlineColor: theme.primary }}
    >
      {!proxima && (
        <ArrowLeft
          className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1"
          style={{ color: theme.primary }}
        />
      )}
      <span className={`flex min-w-0 flex-1 flex-col ${proxima ? "items-end text-right" : ""}`}>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {proxima ? "Próxima faixa" : "Faixa anterior"}
        </span>
        <span className="mt-1 text-lg font-black tracking-tight" style={{ color: theme.dark }}>
          {faixa.rotulo} · {faixa.idade}
        </span>
        <span className="text-sm text-muted-foreground">{faixa.nome}</span>
      </span>
      {proxima && (
        <ArrowRight
          className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
          style={{ color: theme.primary }}
        />
      )}
    </Link>
  );
}
