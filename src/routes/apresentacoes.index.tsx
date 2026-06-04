import { createFileRoute } from "@tanstack/react-router";
import {
  Gamepad2,
  Rocket,
  Monitor,
  BarChart3,
  ArrowRight,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { noindexMeta } from "@/lib/seo";

export const Route = createFileRoute("/apresentacoes/")({
  component: ApresentacoesHub,
  head: () =>
    noindexMeta({
      title: "Apresentações de Cursos — Santos Tech (área interna)",
    }),
});

const KIDS = "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)";
const TEENS = "linear-gradient(135deg, #2E8FCF 0%, #04325A 100%)";

type Curso = {
  href?: string; // se tiver, a apresentação está pronta
  icon: LucideIcon;
  nome: string;
  faixa: string;
  tier: string;
  anos: string;
  gradient: string;
  resumo: string;
};

const CURSOS: Curso[] = [
  {
    href: "/apresentacoes/tecnologia-junior",
    icon: Gamepad2,
    nome: "Tecnologia Júnior",
    faixa: "5 a 9 anos",
    tier: "Crianças",
    anos: "Trilha de 4 anos",
    gradient: KIDS,
    resumo:
      "Lógica e criação de jogos — do MakeCode + Minecraft ao Roblox + Lua e impressão 3D.",
  },
  {
    icon: Rocket,
    nome: "Tecnologia Create",
    faixa: "10 a 15 anos",
    tier: "Adolescentes",
    anos: "Trilha de 4–5 anos",
    gradient: TEENS,
    resumo:
      "Programação séria, Python, 3D profissional (Maya), Unity e Realidade Virtual.",
  },
  {
    href: "/apresentacoes/informatica-junior",
    icon: Monitor,
    nome: "Informática Júnior",
    faixa: "5 a 9 anos",
    tier: "Crianças",
    anos: "1 ano",
    gradient: KIDS,
    resumo:
      "Domínio real do computador e criação no Office (Word, PowerPoint, Excel) + IA.",
  },
  {
    icon: BarChart3,
    nome: "Informática Create",
    faixa: "10 a 15 anos",
    tier: "Adolescentes",
    anos: "Trilha de 2 anos",
    gradient: TEENS,
    resumo:
      "Excel que calcula sozinho, organização de dados, Power BI e IA aplicada.",
  },
];

function ApresentacoesHub() {
  return (
    <div className="bg-muted/30">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
              <Presentation className="h-4 w-4" /> Área de apresentações
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Apresentações <span className="text-gradient-hero">dos cursos</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Selecione um curso para abrir a apresentação completa — a trilha, os módulos e o
              detalhamento aula a aula.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {CURSOS.map((c, i) => {
              const Icon = c.icon;
              const ready = Boolean(c.href);
              const inner = (
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-white shadow-lg transition ${
                    ready ? "group-hover:-translate-y-1" : "opacity-75"
                  }`}
                  style={{ background: c.gradient }}
                >
                  <div className="absolute inset-0 dotted-bg opacity-20" />
                  <Icon className="pointer-events-none absolute -bottom-5 -right-3 h-40 w-40 rotate-12 text-white/10" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur">
                        {ready ? c.anos : "Em breve"}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-black">{c.nome}</h2>
                    <p className="mt-1 text-xs font-black uppercase tracking-wider text-white/80">
                      {c.tier} · {c.faixa}
                    </p>
                    <p className="mt-4 flex-1 text-sm text-white/90">{c.resumo}</p>
                    <div className="mt-6">
                      {ready ? (
                        <span className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-black uppercase tracking-wider shadow-md transition group-hover:scale-[1.03] text-st-blue-dark">
                          Ver apresentação <ArrowRight className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-md bg-white/20 px-5 py-2.5 text-sm font-black uppercase tracking-wider text-white/90 backdrop-blur">
                          Em preparação
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
              return (
                <Reveal key={c.nome} delay={i * 100}>
                  {ready ? (
                    <a href={c.href} className="group block h-full">
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full cursor-default">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
