import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Heart, Target, Users, ArrowRight } from "lucide-react";
import img1 from "@/assets/students-3.png";
import img2 from "@/assets/students-1.png";

export const Route = createFileRoute("/sobre")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre — Santos Tech" },
      { name: "description", content: "Conheça a Santos Tech: centro presencial de programação para crianças em Ribeirão Preto, com gamificação por níveis e plataforma própria." },
      { property: "og:title", content: "Sobre a Santos Tech" },
      { property: "og:description", content: "Escola única, melhor e mais bem avaliada de Ribeirão Preto." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="bg-accent/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Quem somos</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Programação para a <span className="text-gradient-hero">próxima geração</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Centro presencial em Ribeirão Preto, com método próprio, plataforma exclusiva e progressão por níveis. Aqui o aluno constrói — e os pais acompanham.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img src={img1} alt="Turma Santos Tech" className="rounded-3xl shadow-xl" />
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Nossa missão</h2>
            <p className="mt-5 text-muted-foreground">
              Transformar tempo de tela em tempo de habilidade. Nosso método combina gamificação, projetos práticos e a plataforma PORTAL DO ALUNO ST para que cada criança avance no próprio ritmo — com objetivos claros e conquistas visíveis.
            </p>
            <p className="mt-4 text-muted-foreground">
              Aulas 100% presenciais, professores treinados e ambiente seguro com acesso restrito. O aluno não aprende só sintaxe — ele aprende a criar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Nossos valores</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Trophy, t: "Excelência", d: "5.0 no Google e mais de 183 avaliações 5★ de famílias da região." },
              { icon: Heart, t: "Acolhimento", d: "Ambiente seguro que respeita o ritmo de cada criança." },
              { icon: Target, t: "Progresso visível", d: "Níveis e trilha personalizada — os pais veem a evolução." },
              { icon: Users, t: "Comunidade", d: "Turmas controladas com até 20 alunos e amigos da mesma tribo." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Quer conhecer a escola?</h2>
            <p className="mt-4 text-muted-foreground">
              Venha fazer uma visita, conversar com nossa equipe e participar de uma aula experimental gratuita.
            </p>
            <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90">
              Agendar visita <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={img2} alt="Aluno na Santos Tech" className="rounded-3xl shadow-xl" />
        </div>
      </section>
    </>
  );
}
