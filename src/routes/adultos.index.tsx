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
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/adultos/")({
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
    paraQuem: "Para quem precisa ser mais produtivo e se destacar no trabalho.",
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
      <section className="relative isolate overflow-hidden bg-neutral-900">
        {/* Dot pattern branco sutil */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Accent verde — círculo grande desfocado no canto */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#0DB88F]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-14 text-center sm:px-6 sm:pt-18 lg:px-8 lg:pb-28 lg:pt-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#0DB88F]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Santos Tech · Adultos
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tecnologia pra{" "}
              <span className="text-[#0DB88F]">quem já cresceu.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
              Cursos presenciais para adultos em Ribeirão Preto. Turmas de até{" "}
              <strong className="font-semibold text-white/90">10 alunos</strong>,
              ferramentas profissionais e conteúdo que você aplica no trabalho.
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
              className="inline-flex items-center gap-2 rounded-lg bg-[#0DB88F] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_8px_24px_-8px_rgba(13,184,143,0.6)] transition hover:bg-[#0aaa82] hover:scale-[1.02] active:scale-[0.99]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Quero saber mais
            </a>
          </Reveal>

          <Reveal
            delay={480}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50"
          >
            <span className="flex items-center gap-0.5 text-amber-400">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-white/80">5,0</strong> no
              Google · 329 avaliações
            </span>
          </Reveal>

          {/* Mini stats */}
          <Reveal delay={600} className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10">
            {[
              { n: "+200", l: "alunos formados" },
              { n: "10", l: "alunos por turma" },
              { n: "5,0★", l: "nota no Google" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 px-4 py-5 backdrop-blur-sm">
                <p className="text-2xl font-black text-white">{s.n}</p>
                <p className="mt-0.5 text-xs text-white/50">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Transição wave escuro → seção seguinte */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            className="block h-[48px] w-full sm:h-[72px] fill-white dark:fill-neutral-950"
          >
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" />
          </svg>
        </div>
      </section>

      {/* ============ OS DOIS EIXOS ============ */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Os cursos
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Escolha o seu caminho
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {EIXOS.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.nome} delay={i * 120}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-black text-neutral-900 dark:text-white">
                      {e.nome}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{e.descricao}</p>

                    <ul className="mt-5 flex-1 space-y-2">
                      {e.aprende.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-neutral-700 dark:text-neutral-300"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0DB88F]" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 rounded-lg bg-neutral-50 dark:bg-neutral-800 px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      {e.paraQuem}
                    </p>

                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-5 py-3 text-sm font-bold text-neutral-900 dark:text-white transition hover:border-[#0DB88F] hover:text-[#0DB88F]"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-[#0DB88F]" />
                      Quero saber mais
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DIFERENCIAIS ============ */}
      <section className="border-y border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Por que a Santos Tech
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Aula de verdade, não mais um curso online
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d.t} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0DB88F]/40 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition group-hover:bg-[#0DB88F]/10 group-hover:text-[#0DB88F]">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-black text-neutral-900 dark:text-white">{d.t}</h3>
                  <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-14 text-center text-white shadow-xl sm:px-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Pronto pra começar?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-neutral-400">
                  Fale com a gente pelo WhatsApp, tire suas dúvidas e descubra
                  qual curso é o certo pra você.
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0DB88F] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#0aaa82] hover:scale-[1.02] active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </div>
                <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 sm:grid-cols-2 sm:gap-0">
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
