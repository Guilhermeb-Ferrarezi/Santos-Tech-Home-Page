import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Users,
  Monitor,
  Shield,
  Cpu,
  Star,
  MapPin,
  TrendingUp,
  Code2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { DecorativeElements } from "@/components/decorative-elements";
import { WhatsAppIcon } from "@/components/icons";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/adultos")({
  component: AdultosPage,
  head: () =>
    pageMeta({
      title:
        "Cursos de Tecnologia e Programação para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Cursos presenciais de Excel avançado, programação Python e informática profissional para adultos em Ribeirão Preto. Turmas de até 10 alunos. Agende uma conversa pelo WhatsApp.",
      path: "/adultos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const EIXOS = [
  {
    icon: Monitor,
    nome: "Informática Profissional",
    descricao: "Domine as ferramentas que o trabalho exige de verdade.",
    aprende: [
      "Excel avançado e fórmulas",
      "Power BI e dashboards",
      "Office completo",
      "IA aplicada ao dia a dia",
    ],
    paraQuem:
      "Para quem precisa ser mais produtivo e se destacar no trabalho.",
    gradient: "linear-gradient(135deg, #187ABF 0%, #04325A 100%)",
  },
  {
    icon: Code2,
    nome: "Programação",
    descricao: "Aprenda a programar do zero — sem precisar de experiência anterior.",
    aprende: [
      "Lógica de programação",
      "Python na prática",
      "Projetos reais",
      "Portfólio para mostrar",
    ],
    paraQuem:
      "Para quem quer entrar na área de tecnologia ou entender como as coisas funcionam.",
    gradient: "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)",
  },
];

const DIFERENCIAIS = [
  {
    icon: Users,
    t: "Turmas de até 10",
    d: "Atenção de verdade — não uma sala lotada.",
  },
  {
    icon: Shield,
    t: "100% presencial",
    d: "Aprenda com um professor ao seu lado, não sozinho numa tela.",
  },
  {
    icon: Cpu,
    t: "Ferramentas reais",
    d: "Os mesmos programas que o mercado usa — sem simulações.",
  },
  {
    icon: TrendingUp,
    t: "Do zero ao avançado",
    d: "Começa do começo, vai até onde você quiser chegar.",
  },
];

function AdultosPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />
        <DecorativeElements color="#187ABF" />

        <div className="relative mx-auto max-w-4xl px-4 pb-32 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8 lg:pb-40 lg:pt-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              <MapPin className="h-4 w-4 shrink-0" />
              Escola presencial de tecnologia · Ribeirão Preto
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-st-blue-dark">Tecnologia pra</span>
              <span className="mt-1 block text-gradient-hero">
                quem já cresceu.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Cursos presenciais para adultos em Ribeirão Preto. Turmas de até{" "}
              <strong>10 alunos</strong>, ferramentas profissionais e conteúdo
              que você aplica no trabalho.
            </p>
          </Reveal>
          <Reveal
            delay={360}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_12px_30px_-10px_rgba(13,184,143,0.65)] transition hover:scale-[1.03] glow-green"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Quero saber mais
            </a>
          </Reveal>
          <Reveal
            delay={480}
            className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80"
          >
            <span className="flex items-center gap-1 text-amber-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span>5,0 no Google · 329 avaliações</span>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[100px]"
          >
            <path
              d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,90 1440,60 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ============ OS DOIS EIXOS ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Os cursos
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Escolha{" "}
              <span className="text-gradient-hero">o seu caminho</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {EIXOS.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.nome} delay={i * 120}>
                  <div
                    className="relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-white shadow-lg"
                    style={{ background: e.gradient }}
                  >
                    <div className="absolute inset-0 dotted-bg opacity-20" />
                    <div className="relative flex h-full flex-col">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 text-2xl font-black">{e.nome}</h3>
                      <p className="mt-2 text-white/85">{e.descricao}</p>
                      <ul className="mt-5 flex-1 space-y-2">
                        {e.aprende.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-white/90"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                        {e.paraQuem}
                      </p>
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-st-blue-dark shadow transition hover:scale-[1.02]"
                      >
                        <WhatsAppIcon className="h-4 w-4 text-st-green" />{" "}
                        Quero saber mais
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DIFERENCIAIS ============ */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Por que a Santos Tech
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Aula de verdade, não mais um curso online
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d.t} delay={i * 90}>
                <div className="group h-full rounded-2xl border-2 border-primary/15 bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <d.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-black text-st-blue-dark">{d.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-program-create px-8 py-14 text-center text-white shadow-xl sm:px-16">
              <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Pronto pra começar?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Fale com a gente pelo WhatsApp, tire suas dúvidas e descubra
                  qual curso é o certo pra você.
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </div>
                <div className="mt-10 grid gap-4 border-t border-white/20 pt-8 text-sm text-white/90 sm:grid-cols-2 sm:gap-0">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <WhatsAppIcon className="h-4 w-4" />
                    (16) 99257-8710
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
