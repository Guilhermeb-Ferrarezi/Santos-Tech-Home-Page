import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  User,
  Users,
  Monitor,
  Shield,
  Cpu,
  Star,
  MapPin,
  TrendingUp,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { Img } from "@/components/img";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/adultos/")({
  component: AdultosPage,
  head: () =>
    pageMeta({
      title:
        "Cursos de Tecnologia e Programação para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Cursos presenciais individuais de Excel, Python, IA e informática para adultos em Ribeirão Preto. Aulas um a um — só você e o professor. Agende uma conversa pelo WhatsApp.",
      path: "/adultos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const CATEGORIAS = [
  { nome: "Informática", slug: "informatica" },
  { nome: "Office", slug: "office" },
  { nome: "Inteligência Artificial", slug: "ia" },
  { nome: "Programação", slug: "logica" },
  { nome: "T.I", slug: "suporte" },
  { nome: "Universo 3D", slug: "modelagem-3d" },
  { nome: "Design & Criação", slug: "canva" },
  { nome: "Marketing & Negócios", slug: "marketing" },
];

const PILARES = [
  {
    id: "cursos",
    titulo: "Cursos",
    descricao: "Aprenda uma habilidade e aplique direto no trabalho.",
    bullets: [
      "32 cursos em 8 áreas de conhecimento",
      "Do Excel ao Python, do Canva ao Power BI",
      "Escolha pelo que o mercado está pedindo",
    ],
    cta: "Ver todos os cursos",
    href: "#categorias",
    bg: "linear-gradient(135deg, #0a1a12 0%, #0d2e1e 100%)",
    glow: "bg-[#0DB88F]/15",
  },
  {
    id: "profissoes",
    titulo: "Profissões",
    descricao: "Quer mudar de carreira ou entrar na área de T.I do zero?",
    bullets: [
      "Trilha estruturada: da primeira aula ao primeiro emprego",
      "Orientação sobre qual área combina com você",
      "Conteúdo organizado por objetivo profissional",
    ],
    cta: "Explorar profissões",
    href: "#categorias",
    bg: "linear-gradient(135deg, #080f1e 0%, #0d1a38 100%)",
    glow: "bg-blue-500/15",
  },
  {
    id: "destaque",
    titulo: "Pacote Office + IA",
    descricao: "O mais exigido pelas empresas — em qualquer área.",
    bullets: [
      "Word, Excel e PowerPoint do básico ao avançado",
      "Inteligência Artificial aplicada ao trabalho real",
      "Válido para qualquer cargo ou setor",
    ],
    cta: "Conhecer este curso",
    href: "/adultos/cursos/office",
    bg: "linear-gradient(135deg, #100a00 0%, #1e1200 100%)",
    glow: "bg-amber-500/15",
    badge: "Mais procurado",
  },
];

const DIFERENCIAIS = [
  {
    icon: User,
    t: "Aula 100% individual",
    d: "Só você e o professor — zero distrações, zero fila de dúvidas.",
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

const EXPERIENCIA = [
  {
    icon: Briefcase,
    titulo: "Professores que atuam no mercado",
    texto:
      "Aprenda com quem já fez. Nossos professores têm experiência prática nas ferramentas que ensinam — não apenas conhecimento teórico.",
  },
  {
    icon: Monitor,
    titulo: "Ferramentas reais, sem atalhos",
    texto:
      "Você aprende no mesmo ambiente que as empresas usam. Excel de verdade, Python de verdade — sem simulações que não funcionam no dia a dia.",
  },
  {
    icon: TrendingUp,
    titulo: "Prático desde a primeira aula",
    texto:
      "Cada aula termina com um exercício aplicado. Você sai com algo feito, não apenas com anotações. No final do curso, tem uma habilidade comprovável.",
  },
  {
    icon: User,
    titulo: "Aula individual, evolução real",
    texto:
      "Sem turma, sem fila de dúvidas. O professor adapta cada aula ao seu ritmo e ao seu nível — porque a única pessoa na sala é você.",
  },
];

const POPULARES = [
  { slug: "ia", titulo: "Inteligência Artificial", categoria: "IA", duracao: "2 meses", img: "/courses/ia.jpg" },
  { slug: "excel", titulo: "Excel Avançado", categoria: "Office", duracao: "1 mês", img: "/courses/excel.jpg" },
  { slug: "python", titulo: "Python para Automações", categoria: "Programação", duracao: "3 meses", img: "/courses/python.jpg" },
  { slug: "power-bi", titulo: "Power BI", categoria: "Office", duracao: "1 mês", img: "/courses/power-bi.jpg" },
  { slug: "ciberseguranca", titulo: "Cibersegurança", categoria: "T.I", duracao: "4 meses", img: "/courses/ciberseguranca.jpg" },
  { slug: "marketing", titulo: "Marketing Digital", categoria: "Marketing", duracao: "2 meses", img: "/courses/marketing.jpg" },
  { slug: "office", titulo: "Pacote Office Completo", categoria: "Office", duracao: "2 meses", img: "/courses/office.jpg" },
  { slug: "fullstack", titulo: "Desenvolvimento Full Stack", categoria: "Programação", duracao: "6 meses", img: "/courses/fullstack.jpg" },
  { slug: "redes-sociais", titulo: "Gestão de Redes Sociais", categoria: "Marketing", duracao: "1 mês", img: "/courses/redes-sociais.jpg" },
  { slug: "suporte", titulo: "Suporte Técnico / Help Desk", categoria: "T.I", duracao: "3 meses", img: "/courses/suporte.jpg" },
];

function AdultosPage() {
  const [mostrarMais, setMostrarMais] = useState(false);
  const cursosVisiveis = mostrarMais ? POPULARES : POPULARES.slice(0, 3);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-neutral-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#0DB88F]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-14 text-center sm:px-6 sm:pt-18 lg:px-8 lg:pb-28 lg:pt-20">
          <Reveal>
            <div className="inline-flex flex-col items-start rounded-md border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="text-[9px] font-light uppercase tracking-[0.2em] text-white/35 leading-none mb-0.5">
                Escola
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                Santos Tech — Para Adultos
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Comece do zero<br />
              <span className="text-[#0DB88F]">ou se especialize</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
              Ensinamos as habilidades práticas que o mercado exige — para você{" "}
              <strong className="font-semibold text-white/90">iniciar uma nova carreira</strong>{" "}
              ou <strong className="font-semibold text-white/90">conquistar a sua promoção</strong>.
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
            <span>
              <strong className="font-semibold text-white/80">329</strong> avaliações
            </span>
            <span className="flex items-center gap-0.5 text-amber-400">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-white/80">5,0</strong> no Google
            </span>
          </Reveal>

          <Reveal delay={600} className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10">
            {[
              { n: "+300", l: "alunos formados" },
              { n: "+300", l: "carreiras transformadas" },
              { n: "5,0★", l: "nota no Google" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 px-4 py-5 backdrop-blur-sm">
                <p className="text-2xl font-black text-white">{s.n}</p>
                <p className="mt-0.5 text-xs text-white/50">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>

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

      {/* ============ CATEGORIAS ============ */}
      <section id="categorias" className="py-16 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Áreas de conhecimento
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              O que você quer aprender?
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-3">
            {CATEGORIAS.map((cat) => (
              <a
                key={cat.slug}
                href={`/adultos/cursos/${cat.slug}`}
                className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm transition hover:border-[#0DB88F] hover:text-[#0DB88F] hover:shadow-md"
              >
                {cat.nome}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ PILARES ============ */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Escolha o seu caminho
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {PILARES.map((p, i) => (
              <Reveal key={p.id} delay={i * 120}>
                <div
                  className="relative overflow-hidden rounded-xl p-8 min-h-[300px] flex flex-col text-white"
                  style={{ background: p.bg }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div className={`pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full blur-2xl ${p.glow}`} />

                  <div className="relative flex flex-1 flex-col">
                    {p.badge && (
                      <span className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        {p.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-black">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-white/45">{p.descricao}</p>
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-white/75">
                          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={p.href}
                      className="mt-6 inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERIÊNCIA ============ */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]">
                A forma mais eficiente<br />
                <span className="text-[#0DB88F]">de aprender tecnologia</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                Cada curso da Santos Tech foi desenhado a partir do que o mercado exige hoje.
                Não ensinamos teoria por teoria —{" "}
                <strong className="font-semibold text-neutral-700 dark:text-neutral-200">
                  ensinamos o que você vai usar no trabalho amanhã.
                </strong>
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {EXPERIENCIA.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.titulo} delay={i * 100}>
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-7 shadow-sm">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0DB88F]/10 text-[#0DB88F]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-black text-neutral-900 dark:text-white">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {item.texto}
                    </p>
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
                <div className="group h-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0DB88F]/40 hover:shadow-md">
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

      {/* ============ CURSOS MAIS POPULARES ============ */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Cursos mais populares
            </h2>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              Confira os preferidos dos nossos alunos.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cursosVisiveis.map((curso, i) => (
              <Reveal key={curso.slug} delay={(i % 3) * 80}>
                <a
                  href={`/adultos/cursos/${curso.slug}`}
                  className="group block overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Banner visual */}
                  <div className="relative h-36 overflow-hidden bg-neutral-900">
                    <img
                      src={curso.img}
                      alt={curso.titulo}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-4">
                    <h3 className="font-black text-neutral-900 dark:text-white group-hover:text-[#0DB88F] transition-colors">
                      {curso.titulo}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      <span className="rounded-md bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                        {curso.categoria}
                      </span>
                      <span className="rounded-md bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                        {curso.duracao}
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {!mostrarMais && (
            <Reveal className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setMostrarMais(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-8 py-3.5 text-sm font-bold text-neutral-700 dark:text-neutral-300 shadow-sm transition hover:border-[#0DB88F] hover:text-[#0DB88F]"
              >
                Mostrar mais
                <ChevronDown className="h-4 w-4" />
              </button>
            </Reveal>
          )}
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-neutral-900 px-8 py-14 text-center text-white shadow-xl sm:px-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Difícil escolher?<br />A gente te ajuda.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-neutral-400">
                  Nosso time está pronto pra entender seus objetivos — seu nível atual,
                  sua rotina e onde você quer chegar — e indicar o melhor caminho pra você.
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
                <footer className="mt-10 border-t border-white/10 pt-10 text-left">
                  <div className="grid gap-8 sm:grid-cols-3">
                    {/* Brand */}
                    <div>
                      <div className="flex items-center gap-2">
                        <Img name="logo" alt="Santos Tech" width={192} height={192} sizesAttr="32px" className="h-8 w-8 shrink-0" />
                        <div className="flex flex-col items-start leading-none">
                          <span className="mb-0.5 text-[8px] font-light uppercase tracking-[0.2em] text-white/35">Escola</span>
                          <div className="flex items-center gap-1.5">
                            <span className="whitespace-nowrap text-xs font-black tracking-tight text-white/80">SANTOS TECH</span>
                            <span className="shrink-0 inline-flex items-center rounded-md bg-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-neutral-900">
                              para adultos
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 flex items-start gap-1.5 text-xs leading-relaxed text-neutral-500">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP
                      </p>
                    </div>

                    {/* Cursos */}
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/35">
                        Cursos
                      </p>
                      <ul className="space-y-2">
                        {CATEGORIAS.map((cat) => (
                          <li key={cat.slug}>
                            <a
                              href={`/adultos/cursos/${cat.slug}`}
                              className="text-xs text-neutral-500 transition hover:text-white/80"
                            >
                              {cat.nome}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contato */}
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/35">
                        Contato
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-xs text-neutral-500 transition hover:text-white/80"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                            (16) 99257-8710
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:contato@santos-tech.com"
                            className="text-xs text-neutral-500 transition hover:text-white/80"
                          >
                            contato@santos-tech.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-neutral-600">
                    © 2025 Santos Tech — Todos os direitos reservados.
                  </p>
                </footer>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
