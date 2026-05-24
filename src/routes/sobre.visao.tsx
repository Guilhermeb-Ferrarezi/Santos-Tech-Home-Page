import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  ArrowRight,
  Zap,
  Users,
  Lightbulb,
  Quote,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { DecorativeElements } from "@/components/decorative-elements";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, buildBreadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/sobre/visao")({
  component: NossaVisaoPage,
  head: () =>
    pageMeta({
      title: "Nossa Visão — Santos Tech | Um mundo onde crianças escrevem o código",
      description:
        "Nossa visão é um mundo onde crianças escrevem o código. Aprender programação desenvolve pensamento computacional, resolução de problemas, criatividade e liderança — habilidades que ficam pra vida.",
      path: "/sobre/visao",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const PRINCIPIOS = [
  {
    icon: Zap,
    title: "Adaptabilidade e resiliência",
    description:
      "Ao aprender a programar, a criança desenvolve a capacidade de se adaptar a tecnologias novas, persistir diante de desafios e criar soluções inovadoras para problemas do mundo real.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Quando crianças escrevem o código, surge o foco em compartilhar conhecimento e habilidades para chegar à melhor solução possível — juntas, não isoladas.",
  },
  {
    icon: Lightbulb,
    title: "Resolução criativa de problemas",
    description:
      "Quando crianças escrevem o código, elas abordam problemas complexos com perspectiva fresca e disposição pra experimentar. Daí saem respostas que ninguém esperava — inovadoras e não convencionais.",
  },
];

function NossaVisaoPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
          { name: "Nossa Visão", path: "/sobre/visao" },
        ])}
      />
      {/* HERO — visão como manifesto */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white py-20 sm:py-28">
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
        <DecorativeElements variant="ai" color="#187ABF" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Nossa Visão
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Um mundo onde{" "}
              <span className="text-gradient-hero">crianças escrevem o código</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="space-y-5 text-lg text-foreground/90 sm:text-xl">
              <p>
                Na Santos Tech, acreditamos que o mundo fica melhor quando
                crianças aprendem a programar.
              </p>
              <p>
                Nem toda criança vai virar programadora profissional — e tá
                tudo bem. Mas as habilidades que ela ganha pelo caminho — <strong>pensamento
                computacional</strong>, <strong>resolução de problemas</strong>, <strong>criatividade</strong>{" "}
                e <strong>liderança</strong> — vão servir pra qualquer carreira,
                pra qualquer área da vida.
              </p>
              <p>
                Programar é o veículo. O que fica é repertório de quem aprendeu
                a pensar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 PRINCÍPIOS */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Os três princípios
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que sustenta nossa visão
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Três valores que orientam o método, o currículo e cada decisão
              dentro da escola.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PRINCIPIOS.map((principio, i) => (
              <Reveal key={principio.title} delay={i * 120}>
                <div className="group h-full rounded-xl border border-border bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <principio.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight">
                    {principio.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {principio.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE DO FUNDADOR */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#04325A] to-[#187ABF] p-10 text-white shadow-xl sm:p-14">
              <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
              <div className="relative">
                <Quote className="h-12 w-12 text-white/30" />
                <blockquote className="mt-6 text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                  "Empoderar mentes jovens com pensamento computacional é dar
                  a elas a chave para destravar possibilidades ilimitadas."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/15" />
                  <div>
                    <p className="text-base font-black">
                      [VERIFICAR: Nome do CEO / Fundador]
                    </p>
                    <p className="text-sm text-white/75">CEO da Santos Tech</p>
                  </div>
                </div>
              </div>
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
                  Viva o efeito Santos Tech
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Visita guiada gratuita pra você ver o método em ação — e
                  entender por que tantas famílias confiam a primeira escola
                  de programação dos filhos na gente.
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
                    to="/sobre"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Sobre nós <ArrowRight className="h-4 w-4" />
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
