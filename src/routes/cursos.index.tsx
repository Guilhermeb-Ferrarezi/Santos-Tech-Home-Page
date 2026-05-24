import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Gamepad2,
  Bot,
  Palette,
  ArrowRight,
  Brain,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { DecorativeElements } from "@/components/decorative-elements";
import { HoverWashCard } from "@/components/hover-wash-card";

export const Route = createFileRoute("/cursos/")({
  component: ProgramasPage,
  head: () => ({
    meta: [
      { title: "Programas — Santos Tech" },
      {
        name: "description",
        content:
          "Todos os programas da Santos Tech em um só lugar: JR (5–8 anos), CREATE (8–14), Academia de IA, Academia de Robótica e Férias Tech. Aulas presenciais em Ribeirão Preto.",
      },
      { property: "og:title", content: "Programas — Santos Tech" },
      {
        property: "og:description",
        content: "Programação para crianças e jovens — do primeiro contato à formação completa.",
      },
      { property: "og:url", content: "/cursos" },
    ],
    links: [{ rel: "canonical", href: "/cursos" }],
  }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// ──────────────────────────────────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────────────────────────────────

type ProgramCard = {
  id: string;
  href: string;
  /** Cor primária do programa (usada em badge, ícone, hover). */
  color: string;
  /** Cor mais escura, usada em gradient + hover button. */
  dark: string;
  /** Cor de acento (usada em fundo soft do ícone). */
  soft: string;
  icon: LucideIcon;
  /** Nome do programa. */
  name: string;
  /** Subtítulo / faixa etária. */
  meta: string;
  /** 1 frase do que a criança ganha. */
  pitch: string;
  /** 3 highlights pra escanear. */
  highlights: string[];
  /** Label do CTA. */
  cta: string;
};

const CORE: ProgramCard[] = [
  {
    id: "create",
    href: "/cursos/create",
    color: "#187ABF",
    dark: "#04325A",
    soft: "#E1F0FA",
    icon: Gamepad2,
    name: "CREATE",
    meta: "Carro-chefe · 8 a 14 anos · 6 cursos",
    pitch: "Seu filho cria os próprios jogos. Do MakeCode Arcade ao Unity + C#, ano a ano.",
    highlights: [
      "6 cursos anuais (8-9, 9-10, 10-11, 11-12, 12-13, 13-14)",
      "Trilha Pixel com sistema próprio de progressão",
      "Termina com título de Desenvolvedor de Jogos",
    ],
    cta: "Conhecer o CREATE",
  },
  {
    id: "jr",
    href: "/cursos/junior",
    color: "#512374",
    dark: "#3d1858",
    soft: "#F5E6FA",
    icon: Palette,
    name: "JR",
    meta: "Primeira infância · 5 a 8 anos · 3 cursos",
    pitch: "Base sólida em programação pros pequenos. Sem precisar saber ler.",
    highlights: [
      "3 cursos anuais (5-6, 6-7, 7-8)",
      "Atividades desplugadas, robótica tangível e ScratchJr",
      "Termina pronto pra Faixa Branca do CREATE",
    ],
    cta: "Conhecer o JR",
  },
];

const ADICIONAIS: ProgramCard[] = [
  {
    id: "academia-ia",
    href: "/cursos/academies#ai",
    color: "#0411A0",
    dark: "#020a6b",
    soft: "#E0E7FF",
    icon: Brain,
    name: "Academia de IA",
    meta: "Especialização · 11 a 14 anos",
    pitch: "Inteligência Artificial sem mistério, com mão na massa.",
    highlights: [
      "Treinar modelos simples com exemplos próprios",
      "Engenharia de prompt e geração de imagem/texto",
      "Ética, vieses e responsabilidade ao usar IA",
    ],
    cta: "Conhecer a Academia de IA",
  },
  {
    id: "academia-robotica",
    href: "/cursos/academies#robotica",
    color: "#0411A0",
    dark: "#020a6b",
    soft: "#E0E7FF",
    icon: Bot,
    name: "Academia de Robótica",
    meta: "Especialização · 9 a 14 anos",
    pitch: "Robôs físicos que se mexem, reagem e competem.",
    highlights: [
      "Kits educacionais com motores, sensores e estrutura",
      "Desafios práticos: sumô, seguidor de linha, resgate",
      "Trabalho em equipe e mentalidade de competição",
    ],
    cta: "Conhecer a Academia de Robótica",
  },
  {
    id: "camps",
    href: "/cursos/camps",
    color: "#1C8299",
    dark: "#0f5a6b",
    soft: "#E0F4F1",
    icon: Sun,
    name: "Férias Tech",
    meta: "Férias e contraturno · 5 a 14 anos",
    pitch: "Semanas temáticas pras férias. Tela vira habilidade.",
    highlights: [
      "Roblox · Minecraft · Robótica · IA · Maker · Game Design",
      "5 dias, 4h por dia, projeto pronto na sexta",
      "Cobre férias de janeiro, julho e dezembro",
    ],
    cta: "Ver semanas temáticas",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// SUBCOMPONENTES
// ──────────────────────────────────────────────────────────────────────────
function ProgramCardItem({ program, isInternal }: { program: ProgramCard; isInternal: boolean }) {
  const Icon = program.icon;
  const inner = (
    <HoverWashCard accent={program.color} bubbleSize="md">
      <div className="relative flex h-full flex-col">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-md text-white shadow-lg"
          style={{ background: program.color }}
        >
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="mt-5 text-2xl font-black tracking-tight" style={{ color: program.dark }}>
          {program.name}
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider" style={{ color: program.color }}>
          {program.meta}
        </p>

        <p className="mt-4 text-sm text-foreground/85">{program.pitch}</p>

        <ul className="mt-5 space-y-2 border-t border-border pt-4">
          {program.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: program.color }}
              />
              <span className="text-foreground/85">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <span
            className="inline-flex items-center gap-1.5 text-sm font-black uppercase tracking-wider"
            style={{ color: program.color }}
          >
            {program.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </HoverWashCard>
  );

  if (isInternal) {
    return (
      <Link to={program.href} className="block h-full">
        {inner}
      </Link>
    );
  }
  // External link (hash anchors trazem #ai e #robotica)
  return (
    <a href={program.href} className="block h-full">
      {inner}
    </a>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────
function ProgramasPage() {
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
        <DecorativeElements variant="default" color="#187ABF" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Nossos programas</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Programação que evolui com o seu filho —{" "}
              <span className="text-gradient-hero">dos 5 aos 14 anos</span>
            </h1>
            <p className="mx-auto mt-5 text-lg text-muted-foreground">
              Do primeiro contato lúdico aos jogos completos no Unity. Mais
              módulos de especialização e semanas temáticas pras férias —
              caminhos pra qualquer perfil e qualquer momento da jornada.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMAS PRINCIPAIS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Programas principais
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A trilha que cobre dos 5 aos 14 anos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              JR e CREATE formam a coluna vertebral da Santos Tech. Cada um é
              um programa anual sequencial — ano a ano, sua criança evolui em
              ambiente certo pra fase dela.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {CORE.map((program, i) => (
              <Reveal key={program.id} delay={i * 120}>
                <ProgramCardItem program={program} isInternal />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAS ADICIONAIS */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
              Programas adicionais
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Especialização e oportunidades sazonais
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pra quem quer aprofundar em áreas específicas (Robótica, IA) ou
              aproveitar férias e contraturno com semanas temáticas. Funcionam
              em paralelo aos programas principais — pode combinar.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADICIONAIS.map((program, i) => (
              <Reveal key={program.id} delay={i * 100}>
                <ProgramCardItem program={program} isInternal={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-program-create px-8 py-14 text-center text-white shadow-xl sm:px-16">
              <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
              <div className="relative">
                <h2 className="text-3xl font-black sm:text-4xl">
                  Não sabe por onde começar?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Fale com nossa equipe e descubra o programa ideal para a
                  idade, o perfil e a rotina do seu filho. Aula experimental
                  gratuita pra você ver ao vivo.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
                  </a>
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Página de contato <ArrowRight className="h-4 w-4" />
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

