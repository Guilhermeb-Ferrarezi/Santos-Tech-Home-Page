import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Lock,
} from "lucide-react";
import {
  GameController as PhGameController,
  Code as PhCode,
  TrendUp as PhTrendUp,
  RocketLaunch as PhRocketLaunch,
} from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { TechHero } from "@/components/tech-hero";
import { HoverWashCard } from "@/components/hover-wash-card";

// Pillars do "Método CREATE" — Phosphor duotone
const GameControllerIcon = phosphor(PhGameController, "duotone");
const CodeIcon = phosphor(PhCode, "duotone");
const TrendUpIcon = phosphor(PhTrendUp, "duotone");
const RocketLaunchIcon = phosphor(PhRocketLaunch, "duotone");
import { getOptimizedUrl } from "@/components/img";

const heroImg = getOptimizedUrl("students-1", 800, "avif");

export const Route = createFileRoute("/cursos/create/")({
  component: CreatePage,
  head: () => ({
    meta: [
      { title: "CREATE · 8 a 14 anos — Santos Tech" },
      {
        name: "description",
        content:
          "Programa carro-chefe da Santos Tech. 6 cursos de 1 ano para crianças e pré-adolescentes (8 a 14 anos) construírem os próprios jogos, depurarem código e fazerem projetos reais.",
      },
      { property: "og:title", content: "CREATE · Santos Tech" },
      {
        property: "og:description",
        content:
          "6 cursos · do primeiro jogo ao projeto final. Aulas presenciais em Ribeirão Preto.",
      },
      { property: "og:url", content: "/cursos/create" },
    ],
    links: [{ rel: "canonical", href: "/cursos/create" }],
  }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// Paleta CREATE (azul Santos Tech)
const CREATE = "#0067BE";
const CREATE_DARK = "#04325A";
const CREATE_LIGHT = "#49A8EB";

// ──────────────────────────────────────────────────────────────────────────
// 6 Cursos CREATE (placeholders — conteúdo programático vem depois)
// ──────────────────────────────────────────────────────────────────────────
type CourseCard = {
  id: string;          // CREATE1, CREATE2...
  ageRange: string;    // "8 a 9 anos"
  slug: string;        // URL fragment (ex.: "8-9-anos")
  title: string;       // "[A definir]" enquanto conteúdo não chega
  pitch: string;       // 1 frase do que a criança faz
  ready: boolean;      // se a página existe
};

const COURSES: CourseCard[] = [
  {
    id: "CREATE1",
    ageRange: "8 a 9 anos",
    slug: "8-9-anos",
    title: "Fundamentos do Arcade",
    pitch: "Entrada no MakeCode Arcade. Do primeiro sprite ao jogo completo autoral. Trilha de Insígnias Pixel.",
    ready: true,
  },
  {
    id: "CREATE2",
    ageRange: "9 a 10 anos",
    slug: "9-10-anos",
    title: "Construtores de Mundos",
    pitch: "Tilemaps, câmera, listas, física e transição do bloco pro JavaScript escrito.",
    ready: true,
  },
  {
    id: "CREATE3",
    ageRange: "10 a 11 anos",
    slug: "10-11-anos",
    title: "Códex do Programador",
    pitch: "JavaScript do zero, escrito à mão. Variáveis, condicionais, laços, funções e arrays em texto.",
    ready: true,
  },
  {
    id: "CREATE4",
    ageRange: "11 a 12 anos",
    slug: "11-12-anos",
    title: "Forja dos Algoritmos",
    pitch: "JavaScript intermediário, objetos, coleções avançadas e IA de jogo. Engenheiro de Jogos Júnior.",
    ready: true,
  },
  {
    id: "CREATE5",
    ageRange: "12 a 13 anos",
    slug: "12-13-anos",
    title: "Núcleo do Motor",
    pitch: "Entrada no Unity com C#. Motor profissional, física 2D, animação e jogo 2D completo.",
    ready: true,
  },
  {
    id: "CREATE6",
    ageRange: "13 a 14 anos",
    slug: "13-14-anos",
    title: "A Arquitetura Viva",
    pitch: "POO em C# aprofundada + jogo autoral final. Formatura da jornada CREATE com título de Desenvolvedor de Jogos.",
    ready: true,
  },
];

// ──────────────────────────────────────────────────────────────────────────
// Subcomponentes
// ──────────────────────────────────────────────────────────────────────────
function MethodPoint({ icon: Icon, title, children }: { icon: typeof Sparkles; title: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
        style={{ background: `${CREATE_LIGHT}30`, color: CREATE_LIGHT }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-black text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/85">{children}</p>
      </div>
    </div>
  );
}

function CourseCardItem({ course }: { course: CourseCard }) {
  const content = (
    <HoverWashCard accent={CREATE} bubbleSize="sm">
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white"
            style={{ background: CREATE }}
          >
            {course.id}
          </span>
          <span className="text-xs font-bold text-muted-foreground">{course.ageRange}</span>
        </div>

        <h3
          className="mt-5 text-2xl font-black tracking-tight"
          style={{ color: CREATE_DARK }}
        >
          {course.title}
        </h3>

        <p className="mt-3 flex-1 text-sm text-foreground/85">{course.pitch}</p>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          {course.ready ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-black uppercase tracking-wider" style={{ color: CREATE }}>
              Ver currículo <ArrowRight className="h-4 w-4" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> Em breve
            </span>
          )}
        </div>
      </div>
    </HoverWashCard>
  );

  if (course.ready) {
    return (
      <Link to={`/cursos/create/${course.slug}`} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────
function CreatePage() {
  return (
    <>
      {/* HERO CREATE */}
      <TechHero primary={CREATE} dark={CREATE_DARK} soft={CREATE_LIGHT} decor="games">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-white"
                  style={{ background: `${CREATE_LIGHT}30`, border: `1px solid ${CREATE_LIGHT}66` }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Programa carro-chefe · 8 a 14 anos
                </span>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-6 text-7xl font-black leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
                  CREATE
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-5 max-w-xl space-y-3 text-lg text-white/90 sm:text-xl">
                  <p>
                    Onde seu filho deixa de <strong>só jogar</strong> e começa
                    a <strong>criar os próprios jogos</strong>.
                  </p>
                  <p>
                    São <strong>6 cursos de 1 ano</strong>:{" "}
                    <strong>CREATE1</strong> a <strong>CREATE6</strong> — um por
                    idade — com progressão por níveis no{" "}
                    <strong>PORTAL DO ALUNO ST</strong>.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={360} className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:scale-[1.03] glow-green"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar aula experimental grátis
                </a>
                <a
                  href="#cursos"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white/10"
                >
                  Ver os 6 cursos <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>

              <Reveal delay={480} className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: CREATE_LIGHT }} />
                  Plataforma própria (Portal ST)
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: CREATE_LIGHT }} />
                  Progressão por níveis
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: CREATE_LIGHT }} />
                  100% presencial
                </span>
              </Reveal>
            </div>

            {/* Blob com imagem */}
            <Reveal delay={400} y={40} className="hidden lg:block">
              <div className="relative mx-auto h-[440px] w-[440px]">
                <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden>
                  <defs>
                    <clipPath id="createBlob">
                      <path d="M421.7,328.8Q403,407.6,326.6,440.6Q250.2,473.5,176.6,432.6Q103,391.6,82,317.3Q61,243,109.3,179.2Q157.7,115.3,239,103.2Q320.4,91,375.1,150.5Q429.9,210,425.8,275Q421.7,340,421.7,328.8Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M421.7,328.8Q403,407.6,326.6,440.6Q250.2,473.5,176.6,432.6Q103,391.6,82,317.3Q61,243,109.3,179.2Q157.7,115.3,239,103.2Q320.4,91,375.1,150.5Q429.9,210,425.8,275Q421.7,340,421.7,328.8Z"
                    fill={CREATE_LIGHT}
                    opacity="0.25"
                    transform="translate(20 20)"
                  />
                  <image
                    href={heroImg}
                    x="0"
                    y="0"
                    width="600"
                    height="600"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#createBlob)"
                  />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </TechHero>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: CREATE }}>
              Por que o CREATE
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Do primeiro jogo ao{" "}
              <span style={{ color: CREATE }}>projeto final</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O CREATE é o programa carro-chefe da Santos Tech. Cobre dos 8 aos
              14 anos com 6 cursos sequenciais — cada um construído sobre o
              anterior, sempre com mão na massa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MÉTODO */}
      <section
        className="relative isolate overflow-hidden py-20"
        style={{ background: `linear-gradient(135deg, ${CREATE} 0%, ${CREATE_DARK} 100%)` }}
      >
        <div className="pointer-events-none absolute inset-0 dotted-bg opacity-15" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center text-white">
            <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: CREATE_LIGHT }}>
              O método CREATE
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Construir, depurar, <br />
              <span style={{ color: CREATE_LIGHT }}>evoluir por níveis</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal delay={120}>
              <MethodPoint icon={GameControllerIcon} title="Constrói os próprios jogos">
                Da primeira aula em diante, é projeto. Nada de assistir vídeo
                de programação — mão no código desde o dia 1.
              </MethodPoint>
            </Reveal>
            <Reveal delay={200}>
              <MethodPoint icon={CodeIcon} title="Depura código de verdade">
                Errar faz parte. Aprender a achar o erro e consertar é o que
                separa quem só "estuda" de quem programa.
              </MethodPoint>
            </Reveal>
            <Reveal delay={280}>
              <MethodPoint icon={TrendUpIcon} title="Progressão por níveis">
                PORTAL DO ALUNO ST — plataforma própria. Cada nível concluído
                é visível pro aluno e pra família.
              </MethodPoint>
            </Reveal>
            <Reveal delay={360}>
              <MethodPoint icon={RocketLaunchIcon} title="Projetos reais a cada etapa">
                Jogos completos, apps simples, sites — o aluno sempre tem algo
                pronto pra mostrar em casa.
              </MethodPoint>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRID DOS 6 CURSOS */}
      <section id="cursos" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: CREATE }}>
              6 cursos · 1 ano cada
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Um curso para cada idade
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada bloco é um ano letivo completo, com currículo próprio
              desenhado para a fase de desenvolvimento da criança.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => (
              <Reveal key={course.id} delay={i * 80}>
                <CourseCardItem course={course} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div
              className="mx-auto mt-10 max-w-2xl rounded-xl border bg-white p-5 text-sm text-foreground/85 shadow-sm"
              style={{ borderColor: CREATE_LIGHT }}
            >
              <strong style={{ color: CREATE_DARK }}>Jornada completa de 6 anos.</strong>{" "}
              Cada curso tem ementa detalhada (40 aulas), ferramentas, FAQ e
              página de venda completa. Do primeiro sprite ao jogo autoral final
              no Unity — 8 a 14 anos.
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-xl sm:px-16"
              style={{ background: `linear-gradient(135deg, ${CREATE} 0%, ${CREATE_DARK} 100%)` }}
            >
              <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Pronto pra ver o CREATE ao vivo?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Aula experimental gratuita. Seu filho vai pro computador,
                  mexe no Portal do Aluno e sai da aula com algo que ele
                  mesmo construiu.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Agendar aula experimental
                  </a>
                  <Link
                    to="/cursos"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Ver outros programas <ArrowRight className="h-4 w-4" />
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
