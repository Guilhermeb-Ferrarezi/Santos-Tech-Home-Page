import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Trophy,
  Heart,
  Target,
  Users,
  ArrowRight,
  Lightbulb,
  Sparkles,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { DecorativeElements } from "@/components/decorative-elements";
import { Img } from "@/components/img";

export const Route = createFileRoute("/sobre/")({
  component: SobreNosPage,
  head: () => ({
    meta: [
      { title: "Sobre Nós — Santos Tech" },
      {
        name: "description",
        content:
          "Conheça a Santos Tech: escola presencial de programação para crianças e jovens em Ribeirão Preto. Método próprio, gamificação por níveis e plataforma PORTAL DO ALUNO ST.",
      },
      { property: "og:title", content: "Sobre a Santos Tech" },
      {
        property: "og:description",
        content: "A escola onde tela vira habilidade.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

const WHATSAPP = WHATSAPP_URL.courses;

function SobreNosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />
        <DecorativeElements variant="code" color="#187ABF" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              Sobre Nós
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Programação que <span className="text-gradient-hero">forma criadores</span>,
              não só programadores
            </h1>
            <p className="mx-auto mt-5 text-lg text-muted-foreground">
              Na Santos Tech, criança não aprende só código — desenvolve
              criatividade, pensamento crítico, resolução de problemas e a
              base para áreas como Robótica, IA, STEM e desenvolvimento de
              jogos. Em ambiente seguro, presencial, divertido.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Img
              name="students-3"
              alt="Turma da Santos Tech"
              className="rounded-3xl shadow-xl"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Quem somos
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Uma escola pensada para a{" "}
              <span className="text-gradient-santos">primeira infância à pré-adolescência</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              A Santos Tech é um centro presencial em <strong>Ribeirão Preto</strong> dedicado
              ao ensino de programação para crianças e jovens de <strong>5 a 14 anos</strong>.
              Mais que aulas, oferecemos uma jornada estruturada — do primeiro
              contato lúdico com a tecnologia (JR) até o desenvolvimento de
              jogos completos em Unity (CREATE).
            </p>
            <p className="mt-4 text-muted-foreground">
              Temos método próprio, <strong>plataforma exclusiva (PORTAL DO ALUNO ST)</strong> e
              um sistema de progressão por níveis que torna o avanço da criança
              visível para a família. Aqui o aluno constrói — e os pais acompanham.
            </p>
          </Reveal>
        </div>
      </section>

      {/* O QUE SIGNIFICA SER ALUNO SANTOS TECH */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              O que significa ser aluno Santos Tech
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              É desenvolver o próprio jogo. <br />
              É fazer amigos da mesma tribo. <br />
              É descobrir o lado{" "}
              <span className="text-gradient-hero">criativo</span> que estava escondido.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Cada criança aqui sai com algo concreto que ela mesma construiu —
              um jogo, um robô, um projeto. E descobre cedo que tecnologia é
              ferramenta de expressão, não só de consumo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HABILIDADES PARA O FUTURO */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Habilidades para o futuro
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Programar é o veículo. <br />O que fica é{" "}
              <span className="text-gradient-santos">repertório de vida</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Mesmo quem não vai virar programador desenvolve um conjunto de
              habilidades que serve para qualquer carreira do século 21.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Target,
                t: "Resolução de problemas",
                d: "Aprende a quebrar um desafio grande em pedaços menores até virar uma solução. Habilidade que escala — do código à vida.",
              },
              {
                icon: Sparkles,
                t: "Criatividade",
                d: "Permite pensar fora da caixa, gerar ideias novas e encontrar caminhos que ninguém pensou. É o oposto de fórmula pronta.",
              },
              {
                icon: Lightbulb,
                t: "Pensamento lógico",
                d: "Raciocinar com clareza, tomar decisões com base em evidência, entender sistemas complexos. Base de qualquer profissão técnica e analítica.",
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="h-full rounded-xl border border-border bg-card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CRIAÇÃO NO CENTRO */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Criação no centro
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Currículo desenhado para{" "}
              <span className="text-gradient-hero">criar</span>, não para repetir
            </h2>
            <p className="mt-5 text-muted-foreground">
              Nosso método existe para que cada aluno expresse a própria
              imaginação, experimente novas ideias e desenvolva senso de autoria
              sobre o que constrói. Criatividade é o melhor veículo de
              autoexpressão, exploração e descoberta — essenciais ao
              desenvolvimento cognitivo, social e emocional na infância e
              adolescência.
            </p>
            <p className="mt-4 text-muted-foreground">
              Por isso, nada aqui é só "fazer exercício do livro". Cada módulo
              termina com um <strong>mini-projeto autoral</strong> e cada ano
              culmina em uma apresentação real para a turma e para a família.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Img
              name="students-1"
              alt="Aluno construindo projeto autoral na Santos Tech"
              className="rounded-3xl shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* APRENDIZAGEM BASEADA EM RESULTADO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Img
              name="students-2"
              alt="Professor e aluna na Santos Tech"
              className="rounded-3xl shadow-xl"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Aprendizagem baseada em resultado
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Cada aula tem objetivo. <br />Cada módulo tem{" "}
              <span className="text-gradient-santos">conquista visível</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Nossa abordagem é centrada no aluno: cada atividade existe pra
              que ele alcance um objetivo claro de aprendizagem, e não pra
              cumprir um currículo de prateleira.
            </p>
            <p className="mt-4 text-muted-foreground">
              Cada aula vem com um objetivo. Cada módulo termina com um
              mini-projeto. Cada ano fecha com uma insígnia ou marco da{" "}
              <strong>Trilha Pixel</strong>. Quando o aluno avança, a família
              vê — pelo PORTAL DO ALUNO ST e pelo que ele leva pra casa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Nossos valores
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que orienta cada decisão da escola
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Trophy,
                t: "Excelência",
                d: "5.0 no Google e mais de 300 avaliações 5★ de famílias da região.",
              },
              {
                icon: Heart,
                t: "Acolhimento",
                d: "Ambiente seguro que respeita o ritmo de cada criança — não há aluno atrasado, há ritmos diferentes.",
              },
              {
                icon: Target,
                t: "Progresso visível",
                d: "Trilha por níveis, mini-projetos e plataforma própria. A família acompanha cada etapa.",
              },
              {
                icon: Users,
                t: "Comunidade",
                d: "Turmas controladas, projetos em equipe, amigos da mesma tribo. Ninguém aprende sozinho.",
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="h-full rounded-xl border border-border bg-card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMUNIDADE E ENDEREÇO */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Comunidade
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Construindo comunidade em Ribeirão Preto
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Buscamos uma relação positiva com a comunidade — oferecendo
              ambiente seguro e acolhedor pra criança fora da escola
              tradicional, e incentivando os alunos a usar o que aprendem para
              resolver problemas reais ao redor deles.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Av. Nove de Julho, 1992 — Jardim América · Ribeirão Preto, SP</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-program-create px-8 py-14 text-center text-white shadow-xl sm:px-16">
              <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Venha conhecer a Santos Tech
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Visita guiada gratuita pra você ver o espaço, conversar com a
                  equipe e descobrir o programa ideal pro seu filho. Sem
                  compromisso.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Agendar visita
                  </a>
                  <Link
                    to="/sobre/visao"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Conheça nossa visão <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
