import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Lock,
} from "lucide-react";
import {
  GameController as PhGameController,
  Sparkle as PhSparkle,
  PaintBrush as PhPaintBrush,
  HeartStraight as PhHeartStraight,
} from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";

// Pillars do "Método JR" — Phosphor duotone (fundo roxo escuro, presença forte)
const GameControllerIcon = phosphor(PhGameController, "duotone");
const SparkleIcon = phosphor(PhSparkle, "duotone");
const PaintBrushIcon = phosphor(PhPaintBrush, "duotone");
const HeartStraightIcon = phosphor(PhHeartStraight, "duotone");
import { Img, getOptimizedUrl } from "@/components/img";
import { TechHero } from "@/components/tech-hero";

export const Route = createFileRoute("/cursos/junior/")({
  component: JuniorPage,
  head: () => ({
    meta: [
      { title: "JR · 5 a 8 anos — Santos Tech" },
      {
        name: "description",
        content:
          "Programação para crianças de 5 a 8 anos em Ribeirão Preto. 3 blocos de 1 ano (5–6, 6–7, 7–8), Passaporte do Inventor com progressão por selos. Aulas presenciais.",
      },
      { property: "og:title", content: "JR · Santos Tech" },
      {
        property: "og:description",
        content:
          "Base sólida em programação para a primeira infância. Aulas presenciais, divertidas e estruturadas.",
      },
      { property: "og:url", content: "/cursos/junior" },
    ],
    links: [{ rel: "canonical", href: "/cursos/junior" }],
  }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// Paleta JR
const JR = "#512374";
const JR_SOFT = "#DEABF7";
const JR_DARK = "#3d1858";

// ──────────────────────────────────────────────────────────────────────────
// Sub-componente: bloco por idade
// ──────────────────────────────────────────────────────────────────────────
type AgeBlockProps = {
  eyebrow: string;
  ageRange: string;
  title: string;
  description: string;
  highlights: string[];
  ferramentas: string[];
  outcome: string;
  imageName: string;
  imageAlt: string;
  reverse?: boolean;
  href?: string;
  comingSoon?: boolean;
};

function AgeBlock({
  eyebrow,
  ageRange,
  title,
  description,
  highlights,
  ferramentas,
  outcome,
  imageName,
  imageAlt,
  reverse,
  href,
  comingSoon,
}: AgeBlockProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal y={30}>
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[40%] blur-3xl opacity-40"
                style={{ background: JR_SOFT }}
              />
              <div
                className="overflow-hidden rounded-2xl border-4 shadow-[0_24px_50px_-20px_rgba(81,35,116,0.45),0_4px_12px_rgba(81,35,116,0.08)] rotate-[-2deg]"
                style={{ borderColor: `${JR_SOFT}80` }}
              >
                <Img
                  name={imageName}
                  alt={imageAlt}
                  className="h-[360px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} y={30}>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white"
              style={{ background: JR }}
            >
              {eyebrow} · {ageRange}
            </span>
            <h2
              className="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
              style={{ color: JR }}
            >
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
              {description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider" style={{ color: JR }}>
                  <Lightbulb className="h-4 w-4" /> O que vê
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: JR }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wider" style={{ color: JR }}>
                  <Cpu className="h-4 w-4" /> Ferramentas
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                  {ferramentas.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: JR }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="mt-6 rounded-xl border bg-white p-5 shadow-sm"
              style={{ borderColor: JR_SOFT }}
            >
              <p className="text-sm font-bold uppercase tracking-wider" style={{ color: JR }}>
                O que ele leva pra casa
              </p>
              <p className="mt-1.5 text-sm text-foreground/90">{outcome}</p>
            </div>

            <div className="mt-6">
              {href && !comingSoon ? (
                <Link
                  to={href}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03]"
                  style={{ background: JR }}
                >
                  Ver currículo completo <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-dashed px-6 py-3 text-sm font-bold uppercase tracking-wider"
                  style={{ borderColor: JR_SOFT, color: JR }}
                >
                  <Lock className="h-4 w-4" /> Página detalhada em breve
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Sub-componente: feature card (método)
// ──────────────────────────────────────────────────────────────────────────
function MethodPoint({ icon: Icon, title, children }: { icon: typeof Sparkles; title: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
        style={{ background: `${JR_SOFT}40`, color: JR_SOFT }}
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

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────
function JuniorPage() {
  return (
    <>
      {/* HERO JR */}
      <TechHero primary={JR} dark={JR_DARK} soft={JR_SOFT} decor="playful">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-white"
                  style={{ background: `${JR_SOFT}30`, border: `1px solid ${JR_SOFT}66` }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Idades de 5 a 8 anos
                </span>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-6 text-7xl font-black leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
                  JR
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-5 max-w-xl space-y-3 text-lg text-white/90 sm:text-xl">
                  <p>
                    A Santos Tech <strong>JR</strong> é a base sólida em
                    programação para a primeira infância — <strong>sem
                    precisar saber ler</strong>.
                  </p>
                  <p>
                    São <strong>3 cursos de 1 ano</strong>:{" "}
                    <strong>JR1</strong> (5–6),{" "}
                    <strong>JR2</strong> (6–7) e{" "}
                    <strong>JR3</strong> (7–8) — com Passaporte do Inventor
                    próprio.
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
                  Agendar visita guiada grátis
                </a>
                <a
                  href="#blocos"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white/10"
                >
                  Ver os 3 cursos <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>

              <Reveal delay={480} className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: JR_SOFT }} />
                  Não precisa saber ler
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: JR_SOFT }} />
                  2h/semana · 40 semanas/ano
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: JR_SOFT }} />
                  100% presencial
                </span>
              </Reveal>
            </div>

            {/* Blob shape com imagem */}
            <Reveal delay={400} y={40} className="hidden lg:block">
              <div className="relative mx-auto h-[440px] w-[440px]">
                <svg
                  viewBox="0 0 600 600"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <clipPath id="jrBlob">
                      <path d="M421.7,328.8Q403,407.6,326.6,440.6Q250.2,473.5,176.6,432.6Q103,391.6,82,317.3Q61,243,109.3,179.2Q157.7,115.3,239,103.2Q320.4,91,375.1,150.5Q429.9,210,425.8,275Q421.7,340,421.7,328.8Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M421.7,328.8Q403,407.6,326.6,440.6Q250.2,473.5,176.6,432.6Q103,391.6,82,317.3Q61,243,109.3,179.2Q157.7,115.3,239,103.2Q320.4,91,375.1,150.5Q429.9,210,425.8,275Q421.7,340,421.7,328.8Z"
                    fill={JR_SOFT}
                    opacity="0.25"
                    transform="translate(20 20)"
                  />
                  <image
                    href={getOptimizedUrl("capa-jr", 800, "avif")}
                    x="0"
                    y="0"
                    width="600"
                    height="600"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#jrBlob)"
                  />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </TechHero>

      {/* POR QUE COMEÇAR CEDO */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: JR }}>
              Por que começar cedo
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Onde mentes jovens aprendem a{" "}
              <span style={{ color: JR }}>criar</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Antes mesmo de aprender a ler, seu filho já é capaz de pensar em
              sequência, resolver problemas e expressar ideias com tecnologia.
              O JR usa o jogo como caminho — porque é assim que criança aprende
              de verdade.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MÉTODO */}
      <section
        className="relative isolate overflow-hidden py-20"
        style={{ background: `linear-gradient(135deg, ${JR} 0%, ${JR_DARK} 100%)` }}
      >
        <div className="pointer-events-none absolute inset-0 dotted-bg opacity-15" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center text-white">
            <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: JR_SOFT }}>
              O método JR
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Fundamentos de programação <br />
              <span style={{ color: JR_SOFT }}>através do brincar</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal delay={120}>
              <MethodPoint icon={GameControllerIcon} title="Aprende jogando">
                Conceitos de programação introduzidos por jogos, desafios e
                atividades visuais. Sem aula expositiva, sem pressão de leitura.
              </MethodPoint>
            </Reveal>
            <Reveal delay={200}>
              <MethodPoint icon={SparkleIcon} title="Lógica, sequência, repetição">
                Sequenciamento, padrões, repetição e depuração — o ABC da
                programação ensinado no ritmo da criança.
              </MethodPoint>
            </Reveal>
            <Reveal delay={280}>
              <MethodPoint icon={PaintBrushIcon} title="Ferramentas de mercado">
                Atividades desplugadas, ScratchJr, Bee-Bot/Code &amp; Go,
                codeSpark — tecnologia reconhecida no ensino infantil, nada
                proprietário.
              </MethodPoint>
            </Reveal>
            <Reveal delay={360}>
              <MethodPoint icon={HeartStraightIcon} title="Ambiente acolhedor">
                Turmas pequenas, professores treinados pra primeira infância,
                acesso restrito e área de espera pra você acompanhar.
              </MethodPoint>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 SISTEMAS DE PROGRESSÃO — UM POR ANO */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: JR }}>
              3 sistemas próprios Santos Tech
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Uma jornada por ano,{" "}
              <span style={{ color: JR }}>conquistas visíveis</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Cada ano tem seu próprio sistema de progressão. Seu filho conquista
              algo concreto ao terminar cada módulo — e fecha o ano com um
              título de graduação.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal delay={100}>
              <div
                className="h-full rounded-xl border-2 bg-white p-7 transition hover:-translate-y-1"
                style={{
                  borderColor: `${JR_SOFT}80`,
                  boxShadow: `0 10px 30px -10px ${JR}33`,
                }}
              >
                <span className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white" style={{ background: JR }}>JR1</span>
                <h3 className="mt-4 text-xl font-black" style={{ color: JR }}>Passaporte do Inventor</h3>
                <p className="mt-2 text-sm text-foreground/85">
                  5 selos pra conquistar: Faísca → Circuito → Engrenagem → Foguete → Estrela Tech.
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Termina como: <span style={{ color: JR }}>Estrela Tech</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div
                className="h-full rounded-xl border-2 bg-white p-7 transition hover:-translate-y-1"
                style={{
                  borderColor: `${JR_SOFT}80`,
                  boxShadow: `0 10px 30px -10px ${JR}33`,
                }}
              >
                <span className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white" style={{ background: JR }}>JR2</span>
                <h3 className="mt-4 text-xl font-black" style={{ color: JR }}>Mapa do Explorador</h3>
                <p className="mt-2 text-sm text-foreground/85">
                  4 insígnias: Repetidor, Navegador, Palco e Criador de Jogos.
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Termina como: <span style={{ color: JR }}>Explorador Graduado</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div
                className="h-full rounded-xl border-2 bg-white p-7 transition hover:-translate-y-1"
                style={{
                  borderColor: `${JR_SOFT}80`,
                  boxShadow: `0 10px 30px -10px ${JR}33`,
                }}
              >
                <span className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white" style={{ background: JR }}>JR3</span>
                <h3 className="mt-4 text-xl font-black" style={{ color: JR }}>Bússola do Criador</h3>
                <p className="mt-2 text-sm text-foreground/85">
                  4 marcos: Variáveis, Decisão, Mensagens e Transição (MakeCode).
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Termina como: <span style={{ color: JR }}>Pronto pro CREATE</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro dos 3 cursos */}
      <section id="blocos" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: JR }}>
              3 cursos · 1 ano cada
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Um curso para cada idade
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada bloco é um ano letivo completo — 40 aulas, 80h, currículo
              próprio. Uma criança de 5 anos aprende diferente de uma de 7, e
              por isso o conteúdo é desenhado pra cada fase do desenvolvimento.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BLOCO 1: 5–6 anos — LINKADO */}
      <AgeBlock
        eyebrow="JR1"
        ageRange="5 a 6 anos"
        title="Primeiros Passos"
        description="A descoberta. Lógica, sequência e direção no corpo e no tapete — depois robô tangível e ScratchJr no tablet. Termina com projeto autoral próprio."
        highlights={[
          "Atividades desplugadas (corpo, tapete, cartões)",
          "Robótica tangível com Bee-Bot",
          "ScratchJr — histórias e animações",
          "Projeto autoral apresentado no final",
        ]}
        ferramentas={[
          "Desplugado (gratuito)",
          "Bee-Bot / Code & Go (hardware)",
          "ScratchJr (gratuito)",
          "codeSpark (assinatura)",
        ]}
        outcome="Passaporte do Inventor completo: Faísca → Circuito → Engrenagem → Foguete → Estrela Tech."
        imageName="capa-jr"
        imageAlt="Criança de 5 anos em atividade de lógica na Santos Tech"
        href="/cursos/junior/5-6-anos"
      />

      {/* BLOCO 2: 6–7 anos */}
      <AgeBlock
        eyebrow="JR2"
        ageRange="6 a 7 anos"
        title="Construindo a Base"
        description="O ano em que a criança começa a ler e a programar com lógica — repetição, eventos e os primeiros mini-jogos. Mapa do Explorador com 4 insígnias."
        highlights={[
          "ScratchJr avançado com repetição e mensagens",
          "Robótica com lógica e decisão",
          "Primeiros passos no Scratch (MIT)",
          "Primeiro mini-jogo concluído",
        ]}
        ferramentas={[
          "ScratchJr (gratuito)",
          "Bee-Bot / Code & Go",
          "Scratch (gratuito)",
        ]}
        outcome="Título de Explorador Graduado após conquistar as 4 insígnias (Repetidor, Navegador, Palco e Criador de Jogos)."
        imageName="students-2"
        imageAlt="Criança de 6 anos criando jogo no ScratchJr"
        reverse
        href="/cursos/junior/6-7-anos"
      />

      {/* BLOCO 3: 7–8 anos */}
      <AgeBlock
        eyebrow="JR3"
        ageRange="7 a 8 anos"
        title="Pronto pra Criar"
        description="O ano-ponte pro CREATE. Variáveis, condicionais completas, mensagens, clones — e os primeiros jogos no MakeCode. Bússola do Criador com 4 marcos."
        highlights={[
          "Scratch com variáveis (placar, vidas, tempo)",
          "Condicionais completas e operadores lógicos",
          "Mensagens, clones e jogos com fases",
          "Transição pro MakeCode (ponte pro CREATE)",
        ]}
        ferramentas={[
          "Scratch (MIT) — versão completa",
          "MakeCode Arcade (Microsoft)",
        ]}
        outcome="Título de Criador Pronto pro CREATE — entra na Faixa Branca aos 8 anos sem salto brusco."
        imageName="students-3"
        imageAlt="Criança de 7 anos programando no Scratch na Santos Tech"
        href="/cursos/junior/7-8-anos"
      />

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-xl sm:px-16"
              style={{ background: `linear-gradient(135deg, ${JR} 0%, ${JR_DARK} 100%)` }}
            >
              <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Ajude a desbloquear o futuro dele
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Venha conhecer o espaço, ver uma aula em andamento e descobrir
                  o curso ideal pra idade do seu filho. É uma visita guiada,
                  sem compromisso.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Agendar visita guiada grátis
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
