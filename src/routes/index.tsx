import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Users,
  Cpu,
  Shield,
  BookOpen,
  Gift,
  Gamepad2,
  Rocket,
  Monitor,
  BarChart3,
  MessageCircle,
  Calendar,
  Sparkles,
  Star,
  MapPin,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  KeyRound,
  Package,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  Brain,
  Bot,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Preloader } from "@/components/preloader";
import { useHeroParallax } from "@/hooks/use-hero-parallax";
import { DecorativeElements } from "@/components/decorative-elements";
import { Img } from "@/components/img";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { IconPop } from "@/components/icon-pop";
import { RarityBadge } from "@/components/rarity-badge";
import { HeroIllustration } from "@/components/hero-illustration";
import { ScrollStage } from "@/components/scroll-stage";
import { Testimonials } from "@/components/testimonials";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, buildFaqSchema, buildCourseSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    pageMeta({
      title:
        "Santos Tech — Cursos de Tecnologia, Programação e Informática para Crianças em Ribeirão Preto",
      description:
        "Escola presencial em Ribeirão Preto especializada em tecnologia para crianças e adolescentes de 5 a 15 anos: programação, criação de jogos (Minecraft e Roblox), impressão 3D, informática e Excel, em turmas de até 10 alunos. Nota 5,0 no Google. Também oferecemos cursos individuais de tecnologia para adultos. Agende uma aula experimental grátis.",
      path: "/",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// ──────────────────────────────────────────────────────────────────────────
// DADOS (conteúdo real — arquivos 02 e 03 de Contexto)
// ──────────────────────────────────────────────────────────────────────────

const DIFERENCIAIS = [
  { icon: Users, t: "Turmas de até 10", lead: "Seu filho tem nome, não número.", d: "Atenção individual de verdade: o professor sabe onde cada criança está e pra onde vai. Impossível numa sala lotada." },
  { icon: Cpu, t: "Equipamentos de ponta", lead: "A tecnologia que ele não tem em casa.", d: "Computadores potentes, impressora 3D e ferramentas profissionais. Aqui ele cria de verdade — não simula." },
  { icon: Shield, t: "100% presencial", lead: "Presença que vira aprendizado.", d: "Criança aprende com gente ao lado, não atrás de uma tela. Ambiente preparado e seguro, do portão à sala." },
  { icon: BookOpen, t: "Portal do Aluno", lead: "Você acompanha cada passo.", d: "Notas, frequência, projetos e conquistas — com acesso de pai/mãe pra ver de casa o que está sendo construído." },
  { icon: Gift, t: "Leva o que cria", lead: "O que ele cria sai pela porta com ele.", d: "Jogos, projetos e objetos impressos em 3D vão pra casa. Resultado pra ver, tocar e mostrar pros amigos." },
];

type Produto = {
  icon: typeof Gamepad2;
  family: string;
  age: string;
  name: string;
  faz: string;
  ideal: string;
  tools: string[];
  gradient: string;
  image: string;
  imageAlt: string;
  destaque?: boolean;
};

const PRODUTOS: Produto[] = [
  {
    icon: Gamepad2,
    family: "Tecnologia",
    age: "5 a 9 anos",
    name: "Tecnologia Júnior",
    faz: "Cria seus primeiros jogos, personagens e objetos em 3D que saem impressos de verdade. Aprende a pensar como um criador — brincando, com Minecraft e Roblox.",
    ideal: "Começar cedo, com diversão e as primeiras habilidades do futuro.",
    tools: ["Minecraft", "Roblox", "Impressão 3D"],
    gradient: "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)",
    image: "marina-3d",
    imageAlt: "Criança na Tecnologia Júnior da Santos Tech",
  },
  {
    icon: Rocket,
    family: "Tecnologia",
    age: "10 a 15 anos",
    name: "Tecnologia Create",
    faz: "Programa de verdade: cria e publica os próprios jogos, modela em 3D e chega até a realidade virtual. Termina com projetos de portfólio.",
    ideal: "Transformar o tempo de tela em habilidade real e profissional.",
    tools: ["Roblox + Lua", "Python", "Unity + VR"],
    gradient: "linear-gradient(135deg, #2E8FCF 0%, #04325A 100%)",
    image: "students-4",
    imageAlt: "Adolescente na Tecnologia Create da Santos Tech",
    destaque: true,
  },
  {
    icon: Monitor,
    family: "Informática",
    age: "5 a 9 anos",
    name: "Informática Júnior",
    faz: "Domina o computador de verdade — não só o celular. Cria trabalhos, joguinhos e apresentações, e dá os primeiros passos com inteligência artificial.",
    ideal: "A base que toda criança precisa pra escola e pra vida digital.",
    tools: ["Word", "PowerPoint", "Excel", "IA"],
    gradient: "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)",
    image: "marina-digitacao",
    imageAlt: "Criança na Informática Júnior da Santos Tech",
  },
  {
    icon: BarChart3,
    family: "Informática",
    age: "10 a 15 anos",
    name: "Informática Create",
    faz: "Aprende as ferramentas que todo emprego exige — Excel, apresentações, organização de dados e uso de IA. Termina com um portfólio profissional.",
    ideal: "Preparar o adolescente pro mercado de trabalho desde cedo.",
    tools: ["Excel avançado", "Power BI", "IA"],
    gradient: "linear-gradient(135deg, #2E8FCF 0%, #04325A 100%)",
    image: "students-2",
    imageAlt: "Adolescente na Informática Create da Santos Tech",
  },
];

const PASSOS = [
  { icon: MessageCircle, t: "Fale com a gente no WhatsApp", d: "Tire todas as dúvidas e já saiba os valores, sem enrolação." },
  { icon: Calendar, t: "Agende a aula experimental grátis", d: "Seu filho vem conhecer e criar algo de verdade já no primeiro dia." },
  { icon: Sparkles, t: "Veja o brilho no olho", d: "Se ele amar (e costuma amar), é só matricular." },
];

const PRECOS = [
  { nome: "Tecnologia", sub: "Júnior e Create", icon: Rocket, cor: "#0DB88F", corDark: "#04325A", material: "R$ 690/ano", destaque: true },
  { nome: "Informática", sub: "Júnior e Create", icon: Monitor, cor: "#0DB88F", corDark: "#04325A", material: "R$ 290/ano", destaque: false },
];

const MATERIAL = [
  { icon: Monitor, t: "Portal do Aluno", d: "Trilha, videoaulas, ebooks e conteúdo sempre atualizado — vivo, nunca defasado." },
  { icon: Package, t: "Ferramentas profissionais", d: "Os mesmos programas licenciados do mercado, liberados durante todas as aulas." },
  { icon: Users, t: "Acesso de pai/mãe", d: "Um login só pra você acompanhar a evolução, as notas e a frequência do seu filho." },
  { icon: Gift, t: "Impressões 3D inclusas", d: "Na Tecnologia, o filamento e as impressões entram no material — ele leva pra casa o que cria." },
];

const MATRICULA = [
  { icon: Users, t: "Vaga numa turma de até 10", d: "Lugar reservado pro seu filho numa turma pequena, com atenção de verdade." },
  { icon: BadgeCheck, t: "Avaliação de nivelamento", d: "Identificamos o nível certo pra ele começar — na medida, nem fácil nem difícil demais." },
  { icon: KeyRound, t: "Acessos criados", d: "Login do aluno e o seu, de pai/mãe, no Portal do Aluno — prontos desde o primeiro dia." },
];

const STATS = [
  { n: "5–15", l: "anos" },
  { n: "Até 10", l: "alunos por turma" },
  { n: "5,0★", l: "nota no Google" },
  { n: "329", l: "avaliações" },
];

// ──────────────────────────────────────────────────────────────────────────
// FAIXA DE PRODUTO (full-width, colorida — design premium restaurado)
// ──────────────────────────────────────────────────────────────────────────

function ProductBand({ p, reverse, curveBottom }: { p: Produto; reverse?: boolean; curveBottom?: boolean }) {
  const Icon = p.icon;
  return (
    <div className="relative isolate overflow-hidden text-white" style={{ background: p.gradient }}>
      {/* curva branca no topo (divisor) */}
      <div className="absolute -top-px left-0 right-0 leading-[0] animate-curve-breathe">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[44px] w-full rotate-180 sm:h-[64px]">
          <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="absolute inset-0 dotted-bg opacity-20" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <Reveal y={30}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40%] bg-white/10 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border-2 border-white/30 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)] rotate-[-2deg] animate-float-slow">
                <Img name={p.image} alt={p.imageAlt} className="h-[320px] w-full object-cover sm:h-[380px]" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} y={30}>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-white/80">{p.family}</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                {p.age}
              </span>
              {p.destaque && <RarityBadge />}
            </div>
            <h3 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">{p.name}</h3>

            <p className="mt-5 max-w-lg text-base text-white/90 sm:text-lg">{p.faz}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <span key={t} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-5 flex items-start gap-2 text-sm text-white/85">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              <span><strong className="font-bold text-white">Ideal para:</strong> {p.ideal}</span>
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:scale-[1.03] glow-green"
            >
              <WhatsAppIcon className="h-4 w-4" /> Quero saber mais
            </a>
          </Reveal>
        </div>
      </div>

      {curveBottom && (
        <div className="absolute bottom-0 left-0 right-0 leading-[0] animate-curve-breathe">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[44px] w-full sm:h-[64px]">
            <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// FAQ — perguntas de alta intenção (SEO: FAQPage) + objeções de venda
// ──────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Vocês têm curso de informática e Excel para crianças e adolescentes?",
    a: "Sim. A trilha de Informática vai do domínio do computador ao Excel que calcula sozinho e ao pacote Office (Word, PowerPoint e Excel), nas turmas Júnior (5 a 9 anos) e Create (10 a 15 anos). É a base digital que prepara pra escola, pra vida e pro mercado de trabalho — 100% presencial em Ribeirão Preto.",
  },
  {
    q: "Tem curso de programação e criação de jogos?",
    a: "Tem — é o nosso carro-chefe. Na trilha de Tecnologia seu filho cria jogos no Minecraft e no Roblox, modela e imprime objetos em 3D e evolui até programação em Python, Unity e realidade virtual. Aqui ele aprende a criar a tecnologia, não só a usar.",
  },
  {
    q: "Vocês têm curso de robótica em Ribeirão Preto?",
    a: "Nosso foco é a criação digital: programação, criação de jogos, modelagem 3D e informática — habilidades de altíssima demanda que a criança usa todos os dias. Não trabalhamos com robótica de montagem, mas ensinamos a mesma base de lógica e programação que sustenta a robótica. Agende uma aula experimental gratuita e conheça as trilhas.",
  },
  {
    q: "Vocês têm colônia de férias? Como funciona o curso de férias?",
    a: "Temos! Nas férias escolares a Santos Tech abre a Colônia de Férias para crianças e adolescentes de 5 a 14 anos: período integral, de segunda a sexta, com tecnologia, arte, cultura e recreação — resolvendo as férias de quem trabalha. É por semana (a partir de R$ 939,90) e você escolhe quantas semanas. Tudo em Ribeirão Preto.",
  },
  {
    q: "Quanto custa? Qual o valor da mensalidade?",
    a: "A mensalidade é R$ 539,90 — no mesmo patamar do que muitas famílias de Ribeirão já investem em inglês ou natação de alto padrão, por uma habilidade que vale pra próxima década. Inclui turma de até 10 alunos, equipamentos de ponta, impressão 3D e o Portal do Aluno para acompanhar a evolução. Fale no WhatsApp para conhecer as condições e agendar uma aula experimental grátis.",
  },
  {
    q: "A partir de qual idade? Para quais faixas etárias?",
    a: "Atendemos crianças e adolescentes de 5 a 15 anos, em turmas separadas por idade: Júnior (5 a 9 anos) e Create (10 a 15 anos) — tanto em Tecnologia quanto em Informática. Assim cada criança aprende no nível e no ritmo certo.",
  },
  {
    q: "As aulas são presenciais? Onde fica a escola?",
    a: "São 100% presenciais — criança aprende melhor com gente ao lado, não atrás de uma tela. Ficamos na Av. Nove de Julho, 1992, Jardim América, Ribeirão Preto/SP, com fácil acesso pela zona sul. Funcionamos de segunda a sexta das 8h às 22h e aos sábados das 8h às 18h.",
  },
  {
    q: "Meu filho nunca programou. Ele consegue acompanhar?",
    a: "Com certeza. As turmas são de até 10 alunos e a evolução é por níveis, no ritmo de cada criança — começamos do zero, de um jeito lúdico. Logo na aula experimental gratuita ele já cria algo de verdade no primeiro dia.",
  },
  {
    q: "Como agendo uma aula experimental ou faço a matrícula?",
    a: "É simples: chame a gente no WhatsApp, agende a aula experimental gratuita e venha conhecer a escola. Seu filho cria algo já na primeira aula e você decide com calma, sem compromisso.",
  },
];

// Schemas estruturados da home: Course (4 produtos) + FAQPage
const HOME_SCHEMAS = [
  buildCourseSchema({
    name: "Tecnologia Júnior — Criação de jogos e impressão 3D (5 a 9 anos)",
    description:
      "Crianças de 5 a 9 anos criam jogos no Minecraft e no Roblox e modelam e imprimem objetos em 3D, aprendendo a criar tecnologia de forma lúdica.",
    path: "/cursos#tecnologia",
    ageMin: 5,
    ageMax: 9,
  }),
  buildCourseSchema({
    name: "Tecnologia Create — Programação, jogos e 3D (10 a 15 anos)",
    description:
      "Adolescentes de 10 a 15 anos programam e publicam jogos (Roblox com Lua e Python), modelam em 3D e exploram Unity e realidade virtual, terminando com projetos de portfólio.",
    path: "/cursos#tecnologia",
    ageMin: 10,
    ageMax: 15,
  }),
  buildCourseSchema({
    name: "Informática Júnior — Computador, Office e IA (5 a 9 anos)",
    description:
      "Crianças de 5 a 9 anos dominam o computador de verdade: Word, PowerPoint, Excel e os primeiros passos com inteligência artificial.",
    path: "/cursos#informatica",
    ageMin: 5,
    ageMax: 9,
  }),
  buildCourseSchema({
    name: "Informática Create — Excel avançado, Office e IA (10 a 15 anos)",
    description:
      "Adolescentes de 10 a 15 anos aprendem Excel avançado, organização de dados, Power BI e uso aplicado de inteligência artificial — as ferramentas que o mercado exige.",
    path: "/cursos#informatica",
    ageMin: 10,
    ageMax: 15,
  }),
  buildFaqSchema(FAQ_ITEMS),
];

// ──────────────────────────────────────────────────────────────────────────
// PÁGINA
// ──────────────────────────────────────────────────────────────────────────

function Index() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { dotsRef, blobsRef, collageRef } = useHeroParallax(heroRef);

  return (
    <>
      <Preloader />
      <JsonLd data={HOME_SCHEMAS} />
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white">
        <div
          ref={dotsRef}
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div ref={blobsRef}>
          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />
        </div>
        <DecorativeElements color="#187ABF" />

        <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-40 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Escola presencial de tecnologia · Ribeirão Preto
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-st-blue-dark">Onde seu filho aprende a</span>
                  <span className="mt-1 block text-gradient-hero">criar a tecnologia</span>
                  <span className="mt-1 block text-st-blue-dark">— não só a usar.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Escola presencial de tecnologia para crianças e adolescentes em
                  Ribeirão Preto. Turmas de até <strong>10 alunos</strong>,
                  equipamentos de ponta e um método em que seu filho cria jogos,
                  robôs e projetos reais <strong>desde a primeira aula</strong>.
                </p>
              </Reveal>
              <Reveal delay={360} className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_12px_30px_-10px_rgba(13,184,143,0.65)] transition hover:scale-[1.03] glow-green"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agende uma aula experimental grátis
                </a>
                <a
                  href="#programas"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-st-blue-dark transition hover:border-primary/60 hover:text-primary"
                >
                  Ver os programas <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
              <Reveal delay={480} className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <span className="flex items-center gap-1 text-amber-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span>5,0 no Google · 329 avaliações de pais e alunos</span>
              </Reveal>
            </div>

            {/* Ilustração flat — criança criando no computador, elementos flutuando */}
            <div ref={collageRef}>
              <HeroIllustration />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-[0] animate-curve-breathe">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[100px]">
            <path d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,90 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ============ SCROLL STAGE (efeito estilo Apple) ============ */}
      <ScrollStage
        heading={
          <>
            Uma escola pra formar
            <br />
            criadores de tecnologia
          </>
        }
        photo={{ name: "marina-roblox", alt: "Aluna da Santos Tech criando um jogo no Roblox" }}
        features={[
          { icon: Brain, title: "Lógica desde cedo", desc: "Pensamento computacional dos 5 aos 14 anos, na medida certa pra cada idade." },
          { icon: Bot, title: "Robótica, games e IA", desc: "Projetos reais que ganham vida — do bloco ao código de verdade." },
          { icon: Users, title: "Professores presentes", desc: "Turmas pequenas e acompanhamento de perto, aula após aula." },
          { icon: Smartphone, title: "Portal pra família", desc: "O pai acompanha notas, presença e projetos na palma da mão." },
        ]}
      />

      {/* ============ STATS BAR ============ */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 100} className="text-center">
              <p className="text-4xl font-black text-primary sm:text-5xl">{s.n}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ DEPOIMENTOS (prova social — avaliações reais do Google) ============ */}
      <Testimonials />

      {/* ============ POR QUE A SANTOS TECH ============ */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-[#f3f8fc]" />
        <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#187ABF]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Por que a Santos Tech</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Não é curso de computador. É o futuro do seu filho — começando agora.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A maioria das escolas ensina a{" "}
              <span className="font-semibold text-foreground/60 line-through decoration-2">usar</span>{" "}
              a tecnologia. Aqui, seu filho aprende a{" "}
              <span className="font-black text-gradient-hero">criar</span> — e sai de cada fase
              com algo nas mãos pra provar.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {DIFERENCIAIS.map((p, i) => {
              const featured = i === 0;
              return (
                <Reveal key={p.t} delay={i * 90} className={featured ? "lg:col-span-2" : ""}>
                  {featured ? (
                    <div
                      className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 text-white shadow-[0_24px_60px_-20px_rgba(24,122,191,0.5)]"
                      style={{ background: "linear-gradient(135deg, #187ABF 0%, #0A6E57 100%)" }}
                    >
                      <div className="absolute inset-0 dotted-bg opacity-20" />
                      <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                      <div className="relative">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                          <IconPop icon={p.icon} iconClassName="h-7 w-7" />
                        </span>
                        <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-white/70">{p.t}</p>
                        <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">{p.lead}</h3>
                        <p className="mt-3 max-w-md text-white/85">{p.d}</p>
                      </div>
                      <span className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                        <Sparkles className="h-3.5 w-3.5" /> Diferencial premium
                      </span>
                    </div>
                  ) : (
                    <div className="group h-full rounded-3xl border-2 border-primary/15 bg-card p-7 shadow-[0_8px_24px_-8px_rgba(24,122,191,0.18)] transition hover:-translate-y-1 hover:border-primary/40">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 group-hover:scale-110">
                        <IconPop icon={p.icon} iconClassName="h-6 w-6" />
                      </span>
                      <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-primary">{p.t}</p>
                      <h3 className="mt-1 text-lg font-black leading-snug">{p.lead}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ OS PROGRAMAS — intro + 4 faixas coloridas ============ */}
      <section id="programas" className="scroll-mt-24 bg-white pt-4">
        <div className="mx-auto max-w-3xl px-4 pb-12 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Os programas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Escolha o <span className="text-gradient-hero">caminho do seu filho</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dois eixos — Tecnologia e Informática — cada um com a turma certa pra idade.
              E a cor já mostra de quem é cada um:{" "}
              <strong style={{ color: "#0A6E57" }}>verde para as crianças</strong> e{" "}
              <strong style={{ color: "#187ABF" }}>azul para os adolescentes</strong>.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-black uppercase tracking-wider">
              <span className="inline-flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full" style={{ background: "#0DB88F" }} /> Crianças · 5–9 anos
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full" style={{ background: "#187ABF" }} /> Adolescentes · 10–15 anos
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {PRODUTOS.map((p, i) => (
        <ProductBand
          key={p.name}
          p={p}
          reverse={i % 2 === 1}
          curveBottom={i === PRODUTOS.length - 1}
        />
      ))}

      <section className="bg-white py-8">
        <Reveal className="mx-auto max-w-2xl px-4 text-center text-sm text-muted-foreground sm:px-6">
          <p>
            Matrícula anual. Você renova a cada ano, só se quiser — e seu filho evolui por
            níveis, no ritmo dele.
          </p>
        </Reveal>
      </section>

      {/* ============ COMO FUNCIONA ============ */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Como funciona</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Simples do primeiro contato à matrícula
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PASSOS.map((s, i) => (
              <Reveal key={s.t} delay={i * 120}>
                <div className="relative h-full rounded-xl border-2 border-primary/15 bg-card p-7">
                  <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-st-blue-dark text-sm font-black text-white shadow-lg">
                    {i + 1}
                  </span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Começar pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ INVESTIMENTO ============ */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#eef5fb] to-white" />
        <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#187ABF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-[#0DB88F]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
              <BadgeCheck className="h-4 w-4" /> Transparência total
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Sem surpresa: você sabe{" "}
              <span className="text-gradient-hero">exatamente</span> o que vai pagar
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A maioria das escolas esconde o preço pra te prender numa conversa.
              A gente prefere o contrário — tudo na mesa desde o começo.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-7 max-w-xl">
            <p className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-5 py-2.5 text-center text-sm font-bold text-amber-900">
              <Users className="h-4 w-4 shrink-0 text-amber-600" />
              Turmas de até 10 alunos — as vagas de cada turma são limitadas
            </p>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
            {PRECOS.map((p) => (
              <Reveal key={p.nome}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-card transition hover:-translate-y-1 ${
                    p.destaque
                      ? "shadow-[0_24px_60px_-20px_rgba(24,122,191,0.45)]"
                      : "shadow-[0_12px_36px_-16px_rgba(0,0,0,0.18)]"
                  }`}
                  style={{ border: `2px solid ${p.cor}55` }}
                >
                  {/* cabeçalho colorido */}
                  <div
                    className="relative overflow-hidden px-8 pb-7 pt-9 text-white"
                    style={{ background: `linear-gradient(135deg, ${p.cor} 0%, ${p.corDark} 100%)` }}
                  >
                    <div className="absolute inset-0 dotted-bg opacity-20" />
                    {p.destaque && <RarityBadge className="absolute right-5 top-2" />}
                    <div className="relative flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-black">{p.nome}</h3>
                        <p className="text-sm font-semibold text-white/80">{p.sub}</p>
                      </div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                        <p.icon className="h-6 w-6" />
                      </span>
                    </div>
                  </div>

                  {/* corpo */}
                  <div className="flex flex-1 flex-col p-8">
                    <div className="text-center">
                      <p className="text-5xl font-black tracking-tight" style={{ color: p.corDark }}>
                        R$ 539,90
                      </p>
                      <p className="mt-1 text-sm font-semibold text-muted-foreground">
                        por mês · curso de 12 meses
                      </p>
                    </div>

                    <ul className="mt-7 space-y-4 border-t border-border pt-6 text-sm">
                      <li className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <KeyRound className="h-4 w-4 shrink-0" style={{ color: p.cor }} />
                          Matrícula <span className="text-xs">(única)</span>
                        </span>
                        <span className="font-bold text-foreground">R$ 299,90</span>
                      </li>
                      <li className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Package className="h-4 w-4 shrink-0" style={{ color: p.cor }} />
                          Material <span className="text-xs">(3x sem juros)</span>
                        </span>
                        <span className="font-bold text-foreground">{p.material}</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: p.cor }} />
                        <span>Portal do Aluno e ferramentas profissionais inclusos no material.</span>
                      </li>
                    </ul>

                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-md transition hover:scale-[1.02]"
                      style={{ background: p.cor }}
                    >
                      <WhatsAppIcon className="h-4 w-4" /> Quero saber mais
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl space-y-4">
            {/* Ancoragem — diluição por dia + régua premium + valor incluso */}
            <div className="rounded-2xl border-2 border-primary/15 bg-white p-6 shadow-sm">
              <div className="grid gap-5 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
                <div className="px-3">
                  <p className="text-2xl font-black text-st-blue-dark">
                    ≈ R$ 18<span className="text-base font-bold">/dia</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Menos que um lanche — por uma habilidade que vale a vida toda.
                  </p>
                </div>
                <div className="px-3">
                  <p className="text-2xl font-black text-st-blue-dark">No nível do inglês</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Mesmo patamar das atividades premium que a família já investe (inglês, natação).
                  </p>
                </div>
                <div className="px-3">
                  <p className="text-2xl font-black text-st-blue-dark">Turma de 10</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Atenção quase individual, equipamentos de ponta e Portal do Aluno inclusos.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-white/70 p-6 text-center backdrop-blur">
              <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
                <RefreshCw className="h-4 w-4 text-primary" />
                Renovação para o ano seguinte: rematrícula de{" "}
                <strong className="text-foreground">R$ 149,95</strong> — metade da matrícula.
              </p>
              <p className="mt-4 border-t border-border pt-4 text-base font-semibold italic text-st-blue-dark">
                “Um investimento na altura das melhores atividades da cidade — pela
                habilidade mais valiosa da próxima década.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PORTAL DO ALUNO (pilar: "o pai vê o que pagou") ============ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
                Portal do Aluno
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Você <span className="text-gradient-hero">acompanha cada passo</span> — de casa
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Premium de verdade é poder ver o que está sendo construído. No Portal do Aluno você
                acompanha a evolução do seu filho quando quiser — sem depender de reunião nem de
                ficar perguntando.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: BarChart3, t: "Notas e evolução" },
                  { icon: Calendar, t: "Frequência das aulas" },
                  { icon: Gamepad2, t: "Projetos e conquistas" },
                  { icon: BadgeCheck, t: "Acesso de pai e mãe" },
                ].map((f) => (
                  <li
                    key={f.t}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-st-blue-dark">{f.t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              {/* Ilustração estilizada do Portal (não é captura de tela real) */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#187ABF]/15 to-[#0DB88F]/15 blur-2xl" />
                <div className="rounded-3xl border border-border bg-card p-5 shadow-xl">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-st-blue-dark text-white">
                        <BookOpen className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-black text-st-blue-dark">Portal do Aluno</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Olá, família 👋</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-st-blue-dark">
                        <span>Progresso — Tecnologia Create</span>
                        <span className="text-primary">72%</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-st-green" style={{ width: "72%" }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { v: "9,4", l: "Nota" },
                        { v: "96%", l: "Frequência" },
                        { v: "7", l: "Projetos" },
                      ].map((s) => (
                        <div key={s.l} className="rounded-lg bg-muted p-3 text-center">
                          <p className="text-lg font-black text-st-blue-dark">{s.v}</p>
                          <p className="text-[10px] text-muted-foreground">{s.l}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-st-green/15 text-st-green">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-st-blue-dark">Novo projeto entregue</p>
                        <p className="text-[10px] text-muted-foreground">
                          Jogo de plataforma publicado no Roblox
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center text-[11px] text-muted-foreground">
                  Ilustração do Portal do Aluno.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ O MATERIAL ============ */}
      <section
        className="relative isolate overflow-hidden py-24 text-white"
        style={{ background: "linear-gradient(135deg, #04325A 0%, #021F3A 100%)" }}
      >
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#187ABF]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0DB88F]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5AB0F0]">O material</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Material que <span className="text-[#5AB0F0]">nunca fica velho</span>
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Tecnologia muda rápido demais pra caber num livro impresso. Por isso o material da
              Santos Tech é digital e vivo — atualizado o tempo todo.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/60">
                  <BookOpen className="h-4 w-4" />
                </span>
                <p className="text-sm text-white/60">
                  <strong className="font-bold text-white/75">Apostila impressa:</strong> nasce
                  desatualizada e encosta na estante.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex h-full items-start gap-3 rounded-2xl border-2 border-[#5AB0F0]/60 bg-white/10 p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)] backdrop-blur">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5AB0F0]/20 text-[#5AB0F0]">
                  <RefreshCw className="h-4 w-4" />
                </span>
                <p className="text-sm text-white/90">
                  <strong className="font-bold text-[#5AB0F0]">Portal vivo:</strong> atualizado o
                  tempo todo, sempre na última versão.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MATERIAL.map((m, i) => (
              <Reveal key={m.t} delay={i * 90}>
                <div className="group h-full rounded-2xl bg-white p-6 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <m.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-black text-foreground">{m.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MATRÍCULA ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">A matrícula</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que a sua matrícula <span className="text-gradient-hero">garante</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A matrícula é única, paga só na entrada. Ela não é uma taxa solta — é o que deixa o
              primeiro dia do seu filho pronto.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {MATRICULA.map((m, i) => (
              <Reveal key={m.t} delay={i * 110}>
                <div className="relative h-full rounded-2xl border-2 border-primary/15 bg-card p-7 shadow-[0_8px_24px_-8px_rgba(24,122,191,0.18)] transition hover:-translate-y-1 hover:border-primary/40">
                  <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-st-blue-dark text-sm font-black text-white shadow-lg">
                    {i + 1}
                  </span>
                  <span className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-black">{m.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-8 max-w-2xl">
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-primary/15 bg-muted/40 px-6 py-4 text-center text-sm text-muted-foreground">
              <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
              <span>Sem letra miúda: você enxerga exatamente o que é cada valor, do começo ao fim.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROVA SOCIAL ============ */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Pais e alunos que já fazem parte
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-amber-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-7 w-7 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-3xl font-black text-gradient-hero">5,0 no Google</p>
                <p className="text-sm text-muted-foreground">329 avaliações</p>
              </div>
              <div className="hidden h-16 w-px bg-border sm:block" />
              <a
                href="https://instagram.com/escolasantostech"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center transition hover:opacity-80"
              >
                <InstagramIcon className="h-9 w-9 text-primary" />
                <p className="mt-2 text-3xl font-black text-gradient-hero">+14 mil</p>
                <p className="text-sm text-muted-foreground">seguidores no Instagram</p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ (SEO FAQPage + objeções) ============ */}
      <section id="faq" className="scroll-mt-24 bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Perguntas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Tudo que os pais <span className="text-gradient-hero">perguntam</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Curso de tecnologia, programação ou informática em Ribeirão Preto — as dúvidas mais
              comuns, respondidas.
            </p>
          </Reveal>

          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <Reveal key={item.q}>
                <details className="group rounded-2xl border-2 border-primary/10 bg-card p-5 transition hover:border-primary/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-st-blue-dark [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {item.q}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 pl-8 text-muted-foreground">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
            >
              <WhatsAppIcon className="h-4 w-4" /> Ainda tem dúvida? Fale no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ COMO CHEGAR ============ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Onde estamos</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Venha nos <span className="text-gradient-hero">conhecer</span>
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border-2 border-primary/15 bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Endereço</p>
                    <p className="mt-1 font-black text-foreground">Av. Nove de Julho, 1992</p>
                    <p className="text-sm text-muted-foreground">Jardim América — Ribeirão Preto, SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border-2 border-primary/15 bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                    <p className="mt-1 font-black text-foreground">(16) 99257-8710</p>
                    <p className="text-sm text-muted-foreground">Seg a Sáb · 8h às 22h</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl border-2 border-primary/15 shadow-md">
                <iframe
                  title="Localização Santos Tech"
                  src="https://www.google.com/maps?q=Av.+Nove+de+Julho%2C+1992+-+Jardim+Am%C3%A9rica%2C+Ribeir%C3%A3o+Preto+-+SP&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ LOCALIZAÇÃO + CTA FINAL ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="relative overflow-hidden rounded-3xl bg-program-create px-8 py-14 text-center text-white shadow-xl sm:px-16">
            <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Venha conhecer pessoalmente</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/90">
                Agende uma aula experimental gratuita e veja seu filho criar algo de verdade já no
                primeiro dia.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agende a aula experimental grátis
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-white/20 pt-8 text-sm text-white/90 sm:grid-cols-2">
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP
                </p>
                <p className="flex items-center justify-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  (16) 99257-8710
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Star className="h-4 w-4 fill-current text-amber-300" />
                  5,0 no Google · 329 avaliações
                </p>
                <p className="flex items-center justify-center gap-2">
                  <InstagramIcon className="h-4 w-4" />
                  @escolasantostech
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
