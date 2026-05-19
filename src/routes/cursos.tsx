import { createFileRoute, Link } from "@tanstack/react-router";
import { Gamepad2, Sparkles, Cpu, Bot, Palette, ArrowRight, MessageCircle, TrendingUp, Brain } from "lucide-react";

export const Route = createFileRoute("/cursos")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Cursos — Santos Tech" },
      { name: "description", content: "Conheça nossos cursos de programação: jogos, apps, web, robótica e muito mais. Para crianças, jovens e adultos." },
      { property: "og:title", content: "Cursos — Santos Tech" },
      { property: "og:description", content: "Cursos de programação presenciais em Ribeirão Preto." },
      { property: "og:url", content: "/cursos" },
    ],
    links: [{ rel: "canonical", href: "/cursos" }],
  }),
});

const WHATSAPP = "https://wa.me/5516992578710";

const create = [
  { icon: Gamepad2, t: "Criação de Jogos", d: "Construa jogos com MakeCode e Lua, avançando por níveis a cada conquista." },
  { icon: Cpu, t: "Lógica e Algoritmos", d: "Pensamento computacional aplicado a desafios reais e estruturados." },
  { icon: TrendingUp, t: "Progressão por Níveis", d: "Trilha personalizada no PORTAL DO ALUNO ST — o aluno vê o quanto evoluiu." },
  { icon: Sparkles, t: "Projetos próprios", d: "Cada nível termina com algo que o aluno construiu sozinho." },
];

const jr = [
  { icon: Palette, t: "Lúdico e estruturado", d: "Atividades pensadas para 5 a 7 anos — não precisa nem saber ler." },
  { icon: Bot, t: "Lógica desde cedo", d: "Resolução de problemas, sequência e criatividade em formato de brincadeira." },
  { icon: Sparkles, t: "Curiosidade primeiro", d: "A criança quer voltar — e cada encontro deixa marca clara nos pais." },
];

const academies = [
  { icon: Bot, t: "Robótica", d: "Módulos multi-semanas com projetos práticos e desafios avançados." },
  { icon: Brain, t: "Inteligência Artificial", d: "Introdução à IA com aplicação real — preparando o aluno para o futuro." },
  { icon: TrendingUp, t: "Habilidades do futuro", d: "Pensamento crítico, autonomia e profundidade técnica." },
];

function CoursesPage() {
  return (
    <>
      <section className="bg-accent/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Nossos programas</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            CREATE · JR · CAMPS · <span className="text-gradient-hero">ACADEMIES</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Trilhas para cada fase: da primeira infância à robótica e IA. Aulas presenciais, plataforma própria e progressão por níveis.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">CREATE · 8 a 14 anos</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">CREATE — carro-chefe</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">Gamificação por níveis e plataforma própria. O programa principal da Santos Tech.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {create.map((c) => (
              <div key={c.t} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: "#512374" }}>JR · 5 a 7 anos</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">JR — base tecnológica desde cedo</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Não precisa saber ler. Aprendizado lúdico, estruturado e divertido para a primeira infância.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {jr.map((c) => (
              <div key={c.t} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "#512374" }}>
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: "#0411A0" }}>ACADEMIES · Avançado</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">ACADEMIES — Robótica & IA</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Módulos multi-semanas para o aluno que quer ir além — habilidades que preparam para o futuro.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {academies.map((c) => (
              <div key={c.t} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "#0411A0" }}>
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: "#1C8299" }}>CAMPS · 5 a 14 anos</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">CAMPS — férias com propósito</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Semanas temáticas no contraturno e nos recessos. Habilidades reais, novos amigos e diversão estruturada.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-program-create px-8 py-14 text-center text-white shadow-xl sm:px-16">
            <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
            <div className="relative">
            <h2 className="text-3xl font-black sm:text-4xl">Não sabe por onde começar?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Fale com nossa equipe e descubra o programa ideal para a idade, o perfil e a rotina do seu filho.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green">
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Página de contato <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
