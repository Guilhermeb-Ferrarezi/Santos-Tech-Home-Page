import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Clock,
  Calendar,
  Sun,
  Sparkles,
  Shield,
  Gamepad2,
  Palette,
  Globe,
  Wallet,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { ColoniaPhotos } from "@/components/colonia-photos";
import { RarityBadge } from "@/components/rarity-badge";
import {
  ParaQuemESection,
  FaqSection,
  CourseCtaFinal,
  type CourseTheme,
  type FaqItem,
} from "@/components/course-page";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, buildCourseSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const Route = createFileRoute("/cursos/camps")({
  component: ColoniaPage,
  head: () =>
    pageMeta({
      title: "Colônia de Férias — Santos Tech | Tecnologia, Arte e Diversão (Ribeirão Preto)",
      description:
        "A Colônia de Férias da Santos Tech resolve as férias de quem trabalha: seu filho passa o dia aprendendo e se divertindo — tecnologia, cultura, arte e recreação — de segunda a sexta, no horário em que você está no trabalho. A partir de R$ 939,90 por semana, você escolhe quantas. Em Ribeirão Preto.",
      path: "/cursos/camps",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// Colônia atende as duas idades (5–14) → identidade no gradiente verde→azul
const THEME: CourseTheme = { primary: "#0E9E8E", dark: "#04325A", soft: "#8FDCCF" };

const METRICS = [
  { value: "Seg–Sex", label: "no seu horário de trabalho" },
  { value: "Dia todo", label: "período integral" },
  { value: "Por semana", label: "você escolhe quantas" },
  { value: "2×/ano", label: "nas férias escolares" },
];

const PORQUE = [
  { icon: Clock, t: "Cobre seu horário de trabalho", d: "Segunda a sexta, no mesmo período em que ele estaria na escola. Você trabalha tranquilo." },
  { icon: Shield, t: "Ambiente seguro e premium", d: "Equipe ao lado o tempo todo, espaço preparado. Seu filho bem cuidado o dia inteiro." },
  { icon: Sparkles, t: "Um dia que vale a pena", d: "Em vez de passar as férias na tela, ele cria, aprende e se diverte de verdade." },
  { icon: Wallet, t: "Você escolhe as semanas", d: "Pode ser 1 semana ou as férias inteiras — e paga só pelo período que escolher." },
];

const PILARES = [
  { icon: Gamepad2, t: "Tecnologia", d: "Jogos, robótica, criação digital e impressão 3D — a parte que faz o olho brilhar." },
  { icon: Palette, t: "Arte", d: "Desenho, pintura e criação manual — pra soltar a imaginação e criar com as próprias mãos." },
  { icon: Globe, t: "Cultura", d: "Atividades culturais que ampliam o repertório da criança enquanto ela se diverte." },
  { icon: Sun, t: "Recreação", d: "Brincadeiras, jogos e muita diversão — e novos amigos pra levar pra vida." },
];

const COMO = [
  { icon: Calendar, t: "Duas vezes por ano", d: "Nas férias escolares (meio do ano e virada de ano). As datas de cada edição saem com antecedência." },
  { icon: Clock, t: "Período integral, seg a sex", d: "Cobre o horário em que você está no trabalho — seu filho passa o dia inteiro aqui." },
  { icon: Wallet, t: "Por semana, flexível", d: "Escolha quantas semanas quiser. Você paga somente pelo período escolhido, sem pacote fechado." },
];

const INCLUSO = [
  "Período integral, de segunda a sexta",
  "Tecnologia, arte, cultura e recreação",
];

const PRECOS = [
  { semanas: "1 semana", tag: "Pra experimentar", preco: "R$ 939,90", porSemana: "R$ 939,90 / semana", destaque: false },
  { semanas: "2 semanas", tag: "Mais economia", preco: "R$ 1.790,90", porSemana: "≈ R$ 895 / semana", destaque: false },
  { semanas: "3 semanas", tag: "Melhor custo-benefício", preco: "R$ 2.490,90", porSemana: "≈ R$ 830 / semana", destaque: true },
];

const FAQ: FaqItem[] = [
  {
    q: "Como funciona a Colônia de Férias?",
    a: "De segunda a sexta, no período em que seu filho estaria na escola, ele passa o dia na Santos Tech com atividades de tecnologia, arte, cultura e recreação. Acontece duas vezes por ano, nas férias escolares.",
  },
  {
    q: "Quanto custa? Preciso pagar as férias inteiras?",
    a: "Não. O valor é por semana e você escolhe quantas quer: 1 semana R$ 939,90, 2 semanas R$ 1.790,90 e 3 semanas R$ 2.490,90. Você paga somente pelo período escolhido — pode ser uma única semana.",
  },
  {
    q: "Que idades podem participar?",
    a: "De 5 a 14 anos, com as turmas organizadas por faixa etária pra cada idade aproveitar no seu ritmo.",
  },
  {
    q: "Meu filho não é aluno da escola. Pode participar?",
    a: "Pode! A Colônia de Férias é aberta — não precisa ser aluno da Santos Tech nem ter feito tecnologia antes.",
  },
  {
    q: "Quais atividades meu filho faz?",
    a: "Um equilíbrio entre aprender e se divertir: tecnologia (jogos, robótica, criação digital), arte, cultura e recreação. Nada de passar o dia na tela à toa.",
  },
  {
    q: "Quando acontece a próxima edição?",
    a: "Duas vezes por ano, nas férias escolares (meio do ano e virada de ano). As datas exatas de cada edição a gente divulga e confirma no WhatsApp.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// CARD genérico (Por que / Pilares / Como)
// ──────────────────────────────────────────────────────────────────────────
function InfoCard({ item }: { item: { icon: typeof Clock; t: string; d: string } }) {
  const Icon = item.icon;
  return (
    <div
      className="h-full rounded-xl border-2 bg-white p-7 transition hover:-translate-y-1"
      style={{ borderColor: `${THEME.soft}50`, boxShadow: `0 8px 24px -8px ${THEME.primary}26` }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: `${THEME.soft}40`, color: THEME.primary }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-base font-bold">{item.t}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────
function ColoniaPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Programas", path: "/cursos" },
            { name: "Colônia de Férias", path: "/cursos/camps" },
          ]),
          buildCourseSchema({
            name: "Colônia de Férias — Santos Tech",
            description:
              "Colônia de férias em período integral, de segunda a sexta, para crianças de 5 a 14 anos em Ribeirão Preto. Cobre o horário de trabalho dos pais nas férias escolares, com atividades de tecnologia, cultura, arte e recreação. A partir de R$ 939,90 por semana.",
            path: "/cursos/camps",
            ageMin: 5,
            ageMax: 14,
          }),
          buildFaqSchema(FAQ),
        ]}
      />

      {/* ============ HERO (texto + 2 fotos rotativas) ============ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f4f4] via-[#f3faf9] to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: "radial-gradient(rgba(14,158,142,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#187ABF]/20 blur-3xl animate-blob [animation-delay:3s]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] shadow-sm"
                  style={{ borderColor: `${THEME.soft}`, color: THEME.dark }}
                >
                  <Sun className="h-4 w-4" /> Colônia de Férias · 5 a 14 anos
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Férias incríveis pro seu filho —{" "}
                  <span style={{ color: THEME.primary }}>tranquilidade pra você</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Chegaram as férias, mas o trabalho não para e a escola fechou. Aqui seu filho
                  passa o dia no mesmo horário em que estaria na escola —{" "}
                  <strong>aprendendo e se divertindo muito</strong> — enquanto você trabalha
                  tranquilo. De segunda a sexta.
                </p>
              </Reveal>
              <Reveal delay={360} className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Garantir a vaga
                </a>
                <a
                  href="#preco"
                  className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-4 text-sm font-black uppercase tracking-wider transition"
                  style={{ borderColor: `${THEME.primary}33`, color: THEME.dark }}
                >
                  Ver valores <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
              <Reveal delay={480} className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                {METRICS.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-black" style={{ color: THEME.dark }}>{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={300} y={30}>
              <ColoniaPhotos />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ POR QUE ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              A solução das férias
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Você trabalhando, e o filho?{" "}
              <span style={{ color: THEME.primary }}>A gente resolve.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nas férias escolares, o pai continua no trabalho — mas a criança não tem escola. A
              Colônia de Férias cobre exatamente esse período, num lugar seguro onde seu filho
              passa o dia muito bem cuidado.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PORQUE.map((item, i) => (
              <Reveal key={item.t} delay={i * 100}>
                <InfoCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ O QUE ELE FAZ (fundo colorido) ============ */}
      <section
        id="atividades"
        className="relative isolate scroll-mt-24 overflow-hidden py-24 text-white"
        style={{ background: `linear-gradient(135deg, ${THEME.primary} 0%, ${THEME.dark} 100%)` }}
      >
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.soft }}>
              O que seu filho faz
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Muito além de "passar o tempo"
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Cada dia mistura quatro frentes — pra criança aprender, criar e se divertir sem nem
              perceber que está aprendendo.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((item, i) => (
              <Reveal key={item.t} delay={i * 100}>
                <InfoCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMO FUNCIONA ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Simples e do jeito que cabe na sua rotina
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMO.map((item, i) => (
              <Reveal key={item.t} delay={i * 120}>
                <InfoCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PREÇO (fundo colorido + 3 cards) ============ */}
      <section
        id="preco"
        className="relative isolate scroll-mt-24 overflow-hidden py-24 text-white"
        style={{ background: `linear-gradient(135deg, ${THEME.dark} 0%, #0A6E57 100%)` }}
      >
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#6EC4CC]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.soft }}>
              Investimento
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A partir de R$ 939,90 por semana
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Você escolhe quantas semanas quer deixar seu filho — e paga só pelo período escolhido.
              Quanto mais semanas, melhor o preço por semana.
            </p>
          </Reveal>

          <div className="mt-14 grid items-end gap-6 md:grid-cols-3">
            {PRECOS.map((p, i) => (
              <Reveal key={p.semanas} delay={i * 110}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl bg-white p-7 text-center text-foreground ${
                    p.destaque ? "shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] md:-mt-4 md:pb-9" : "shadow-xl"
                  }`}
                  style={p.destaque ? { boxShadow: `0 0 0 4px ${THEME.soft}, 0 30px 60px -20px rgba(0,0,0,0.6)` } : undefined}
                >
                  {p.destaque && (
                    <RarityBadge className="absolute -top-3 left-1/2 -translate-x-1/2" />
                  )}
                  <p className="text-sm font-black uppercase tracking-wider" style={{ color: THEME.primary }}>
                    {p.semanas}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.tag}</p>
                  <p className="mt-4 text-4xl font-black" style={{ color: THEME.dark }}>
                    {p.preco}
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground">{p.porSemana}</p>

                  <ul className="mt-5 space-y-2 border-t border-border pt-5 text-left">
                    {INCLUSO.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: THEME.primary }} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-md transition hover:scale-[1.02]"
                    style={{ background: THEME.primary }}
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Quero essa
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-sm text-white/70">
              Vagas limitadas por edição. Fale no WhatsApp pra confirmar as datas da próxima
              colônia e garantir a semana do seu filho.
            </p>
          </Reveal>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            Feita pra família que{" "}
            <span style={{ color: THEME.primary }}>não para nas férias</span>
          </>
        }
        description={
          <>
            A Colônia de Férias é a solução pro pai e pra mãe que continuam trabalhando quando a
            escola fecha — sem abrir mão de um lugar seguro, produtivo e divertido pro filho.
          </>
        }
        checklistTitle="É ideal se você"
        items={[
          "Trabalha e precisa de um lugar seguro pro filho nas férias",
          "Não quer a criança o dia todo na tela ou entediada em casa",
          "Quer que as férias também somem aprendizado e diversão",
          "Prefere flexibilidade — escolher só as semanas que precisa",
        ]}
        bg="muted"
      />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Garanta a vaga do seu filho nas próximas férias"
        description="As vagas por semana são limitadas e esgotam rápido nas temporadas de férias. Fale com a gente no WhatsApp pra saber as datas da próxima edição e reservar."
        primaryCta={{ href: WHATSAPP, label: "Falar no WhatsApp" }}
        secondaryCta={{ href: "/cursos", label: "Ver os programas" }}
      />
    </>
  );
}
