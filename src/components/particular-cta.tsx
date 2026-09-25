import { Link } from "@tanstack/react-router";
import { ArrowRight, UserRound } from "lucide-react";
import { Reveal } from "@/components/reveal";

// Áreas dos cursos particulares — os mesmos rótulos dos grupos da sidebar de
// /particular (GRUPOS em src/routes/particular.tsx). Só texto: o link é um só,
// para o hub, que é quem apresenta os cursos.
const AREAS = [
  "Informática",
  "Office",
  "Inteligência Artificial",
  "Programação",
  "T.I",
  "Universo 3D",
  "Design & Criação",
  "Marketing & Negócios",
];

/**
 * Chamada para o hub de cursos particulares (/particular) a partir das páginas
 * do público infantil (home e /cursos). Sem ela, o hub e os cursos ficavam sem
 * nenhum link vindo do site institucional — só o sitemap levava até eles.
 * Texto só com fatos já publicados no hub: aulas individuais, presenciais,
 * para todas as idades, em Ribeirão Preto. Sem preço e sem contagem de cursos.
 */
export function ParticularCta() {
  return (
    <section aria-labelledby="particular-cta-titulo" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-8 rounded-3xl border-2 border-primary/15 bg-card p-8 sm:p-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
                <UserRound className="h-4 w-4 shrink-0" />
                Cursos particulares
              </span>
              <h2
                id="particular-cta-titulo"
                className="mt-4 text-3xl font-black tracking-tight text-st-blue-dark sm:text-4xl"
              >
                E para você? Aulas individuais, em qualquer idade
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Além dos programas para crianças e adolescentes, a Santos Tech tem{" "}
                <strong className="text-foreground">cursos particulares</strong>: aulas
                individuais e presenciais, um aluno e um professor, para todas as idades, aqui
                em Ribeirão Preto.
              </p>
              <div className="mt-8">
                <Link
                  to="/particular"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-st-blue-dark transition hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Conhecer os cursos particulares <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Áreas
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {AREAS.map((area) => (
                  <li
                    key={area}
                    className="rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-bold text-st-blue-dark"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
