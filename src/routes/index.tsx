import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
  ArrowRight,
  Gamepad2,
  Bot,
  Cpu,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  MapPin,
  TrendingUp,
  Shield,
} from "lucide-react";
import heroImg from "@/assets/students-1.png";
import classImg from "@/assets/students-3.png";
import student2 from "@/assets/students-2.png";
import student4 from "@/assets/students-4.png";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Santos Tech — Programação para Crianças em Ribeirão Preto" },
      { name: "description", content: "Centro presencial de aprendizagem de programação para crianças e jovens. CREATE, JR, CAMPS e ACADEMIES — gamificação, progressão por níveis e plataforma própria." },
      { property: "og:title", content: "Santos Tech — Programação para Crianças" },
      { property: "og:description", content: "Transformamos tempo de tela em tempo de habilidade. Aulas presenciais em Ribeirão Preto." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP = "https://wa.me/5516992578710?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20cursos%20da%20Santos%20Tech.";

type ProgramBandProps = {
  bg: string;
  age: string;
  brand: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  curveTop?: boolean;
  curveBottom?: boolean;
};

function ProgramBand({ bg, age, brand, title, description, image, imageAlt, reverse, curveTop, curveBottom }: ProgramBandProps) {
  return (
    <div className={`relative isolate overflow-hidden ${bg} text-white`}>
      {curveTop && (
        <div className="absolute -top-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[80px] rotate-180">
            <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="currentColor" className="text-white" />
          </svg>
        </div>
      )}
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <Reveal y={30}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40%] bg-white/10 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border-[6px] border-white shadow-2xl rotate-[-2deg] animate-float-slow">
                <img src={image} alt={imageAlt} className="h-[340px] w-full object-cover sm:h-[400px]" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} y={30}>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/80">{age}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-white/90">{brand}</p>
            <h3 className="mt-2 text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">{title}</h3>
            <p className="mt-6 max-w-lg text-base text-white/85 sm:text-lg">{description}</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:scale-[1.03] glow-green"
            >
              Saiba mais <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>

      {curveBottom && (
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[80px]">
            <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      )}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* HERO — fundo claro, paleta azul/verde Santos Tech */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-40 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                  Centro de Programação · Ribeirão Preto
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="block text-st-blue-dark">Transforme tempo</span>
                  <span className="mt-2 block text-gradient-hero">de tela em tempo de habilidade</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-st-blue-dark px-5 py-2.5 text-sm font-bold text-white shadow-lg sm:text-base">
                  CREATE · JR · CAMPS · ACADEMIES
                </div>
              </Reveal>
              <Reveal delay={360}>
                <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Imagine seu filho construindo os próprios jogos em vez de só
                  jogá-los. Na Santos Tech ele aprende programação com método,
                  progressão por níveis e plataforma própria — formando a
                  próxima geração de criadores, solucionadores de problemas
                  e líderes.
                </p>
              </Reveal>
              <Reveal delay={480} className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_12px_30px_-10px_rgba(13,184,143,0.65)] transition hover:scale-[1.03] glow-green"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agendar aula experimental
                </a>
                <Link
                  to="/cursos"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-st-blue-dark transition hover:border-primary/60 hover:text-primary"
                >
                  Ver programas <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
              <Reveal delay={600} className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Av. Nove de Julho, 1992 — Jardim América · Aulas 100% presenciais</span>
              </Reveal>
            </div>

            {/* Collage */}
            <div className="relative hidden h-[480px] lg:block">
              <Reveal delay={400} y={30} className="absolute left-4 top-0 w-56 rotate-[-6deg]">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl animate-float-slow">
                  <img src={heroImg} alt="Aluno Santos Tech" className="h-64 w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={520} y={30} className="absolute right-0 top-10 w-60 rotate-[4deg]">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl animate-float-slower">
                  <img src={student2} alt="Aluna Santos Tech" className="h-72 w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={640} y={30} className="absolute left-16 bottom-0 w-64 rotate-[3deg]">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl animate-float-slow [animation-delay:1.4s]">
                  <img src={classImg} alt="Turma Santos Tech" className="h-56 w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={760} y={30} className="absolute right-6 bottom-6 w-52 rotate-[-5deg]">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl animate-float-slower [animation-delay:2.2s]">
                  <img src={student4} alt="Aluno avançado" className="h-56 w-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[100px]">
            <path d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,90 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { n: "5–14", l: "Faixa etária" },
            { n: "5.0", l: "Nota no Google" },
            { n: "183+", l: "Avaliações 5★" },
            { n: "100%", l: "Aulas presenciais" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100} className="text-center">
              <p className="text-4xl font-black text-primary sm:text-5xl">{s.n}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* YEAR ROUND PROGRAMS — Code Ninjas style colored sections with curved dividers */}
      <section className="bg-white pt-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">O que oferecemos</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              PROGRAMAS <span className="text-gradient-hero">O ANO TODO</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Quatro trilhas para acompanhar cada fase: do primeiro contato com a tecnologia até módulos avançados de Robótica e IA.
            </p>
          </Reveal>
        </div>

        {/* CREATE — azul, programa carro-chefe */}
        <ProgramBand
          bg="bg-program-create"
          age="8 a 14 anos"
          brand="SANTOS TECH"
          title="CREATE"
          description="Nosso programa carro-chefe foi desenhado para manter crianças e pré-adolescentes engajados, desafiados e aprendendo. Com progressão por níveis e a plataforma própria PORTAL DO ALUNO ST, seu filho constrói os próprios jogos, depura código e cria projetos reais — e quer voltar para a próxima aula."
          image={heroImg}
          imageAlt="Aluno do CREATE programando na Santos Tech"
          reverse={false}
          curveTop={false}
        />

        {/* JR — roxo, base inicial sem leitura */}
        <ProgramBand
          bg="bg-program-jr"
          age="5 a 7 anos"
          brand="SANTOS TECH"
          title="JR"
          description="Seu pequeno já é fascinado por tecnologia? O JR foi pensado para a primeira infância — não precisa nem saber ler. Atividades lúdicas, lógica, criatividade e resolução de problemas, em encontros curtos e estruturados que constroem uma base tecnológica sólida desde cedo."
          image={student2}
          imageAlt="Aluna do JR na Santos Tech"
          reverse
          curveTop
        />

        {/* CAMPS — teal, férias */}
        <ProgramBand
          bg="bg-program-camps"
          age="5 a 14 anos"
          brand="SANTOS TECH"
          title="CAMPS"
          description="Transforme as férias do seu filho em uma aventura de aprendizagem. Os CAMPS da Santos Tech ocupam o contraturno e os recessos com semanas temáticas guiadas pelos nossos professores — habilidades reais, novos amigos e diversão com propósito do início ao fim."
          image={classImg}
          imageAlt="Turma de CAMPS da Santos Tech"
          reverse={false}
          curveTop
        />

        {/* ACADEMIES — azul-marinho, módulos avançados */}
        <ProgramBand
          bg="bg-program-academies"
          age="Módulos avançados"
          brand="SANTOS TECH"
          title="ACADEMIES"
          description="Para o aluno que já está à frente. As ACADEMIES são módulos multi-semanas em Robótica, Inteligência Artificial e habilidades que deixam a próxima geração pronta para o futuro — desafios reais, pensamento crítico e projetos com profundidade técnica."
          image={student4}
          imageAlt="Aluno das ACADEMIES da Santos Tech"
          reverse
          curveTop
          curveBottom
        />
      </section>

      {/* PILLARS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Por que escolher a <span className="text-gradient-santos">Santos Tech</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Centro presencial com método próprio, plataforma exclusiva e progressão por níveis — para o aluno avançar com clareza e os pais acompanharem cada etapa.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, t: "Progressão por níveis", d: "Gamificação estilo jogo: cada conquista é visível, cada nível é uma evolução real." },
              { icon: BookOpen, t: "Plataforma própria", d: "PORTAL DO ALUNO ST com trilha personalizada — você vê o progresso do seu filho." },
              { icon: Users, t: "Professores treinados", d: "Time formado para ensinar criança e jovem com método e paciência." },
              { icon: Shield, t: "Ambiente seguro", d: "Acesso restrito a alunos e professores, turmas controladas e área de espera para pais." },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES / O QUE SE APRENDE */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">O que o aluno aprende</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Habilidades reais para a nova geração
              </h2>
              <p className="mt-3 text-muted-foreground">
                Programação, criação de jogos, robótica e inteligência artificial — tudo com projeto prático e progressão clara.
              </p>
            </div>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Ver todos os programas <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gamepad2, lang: "MakeCode · Lua", t: "Criação de Jogos", d: "Do primeiro jogo no MakeCode aos projetos completos: lógica em ação." },
              { icon: Cpu, lang: "Lógica · Algoritmos", t: "Pensamento Computacional", d: "Resolver problemas é a habilidade do século — começa cedo, evolui sempre." },
              { icon: Bot, lang: "Robótica · IA", t: "Robótica e Inteligência Artificial", d: "Módulos avançados das ACADEMIES para o aluno que quer ir além." },
              { icon: Sparkles, lang: "Criatividade Digital", t: "Projetos próprios", d: "Cada aluno termina o nível com algo seu — pronto para mostrar em casa." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 110}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">{c.lang}</p>
                  <h3 className="mt-1 text-lg font-bold">{c.t}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JR vs CREATE — comparativo por faixa */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Cada idade tem seu <span className="text-gradient-hero">programa</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Do primeiro contato com a tecnologia ao programa carro-chefe.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="overflow-hidden rounded-3xl border border-border bg-card transition hover:shadow-xl">
              <img src={student2} alt="Aluno do JR na Santos Tech" className="h-64 w-full object-cover" />
              <div className="p-8">
                <span className="inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: "#512374" }}>
                  JR · 5 a 7 anos
                </span>
                <h3 className="mt-4 text-2xl font-black">Base tecnológica desde cedo</h3>
                <p className="mt-3 text-muted-foreground">
                  Aprendizado lúdico antes mesmo de aprender a ler. Lógica,
                  criatividade e curiosidade transformadas em projetos
                  visuais, com feedback claro para os pais.
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {["Não precisa saber ler", "Atividades lúdicas e estruturadas", "Acompanhamento dos pais"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/cursos"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-st-blue-dark px-6 py-3 text-sm font-bold text-white transition hover:bg-primary"
                >
                  Saber mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150} className="overflow-hidden rounded-3xl border border-border bg-card transition hover:shadow-xl">
              <img src={student4} alt="Aluno do CREATE na Santos Tech" className="h-64 w-full object-cover" />
              <div className="p-8">
                <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  CREATE · 8 a 14 anos
                </span>
                <h3 className="mt-4 text-2xl font-black">Programa carro-chefe</h3>
                <p className="mt-3 text-muted-foreground">
                  Trilha gamificada com progressão por níveis no PORTAL DO
                  ALUNO ST. O aluno constrói os próprios jogos, depura código
                  e enxerga, nível por nível, o quanto evoluiu.
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {["Progressão por níveis", "Plataforma própria PORTAL DO ALUNO ST", "Projetos reais a cada etapa"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/cursos"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-st-green px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02] glow-green"
                >
                  Saber mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Nossos alunos</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Quem estuda na Santos Tech
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[heroImg, student2, classImg, student4].map((img, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <img src={img} alt={`Aluno Santos Tech ${i + 1}`} className="aspect-square w-full object-cover transition duration-500 hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="relative overflow-hidden rounded-3xl bg-program-create px-8 py-14 text-center text-white shadow-xl sm:px-16">
            <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
            <div className="relative">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Pronto para conhecer a Santos Tech?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Agende uma aula experimental gratuita e descubra como transformar o tempo de tela do seu filho em habilidades reais para o futuro.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
