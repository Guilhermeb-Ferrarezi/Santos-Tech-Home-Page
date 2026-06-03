import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Gamepad2,
  Rocket,
  Monitor,
  BarChart3,
  ArrowRight,
  ArrowRightLeft,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { DecorativeElements } from "@/components/decorative-elements";
import { RarityBadge } from "@/components/rarity-badge";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, buildBreadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/cursos/")({
  component: ProgramasPage,
  head: () =>
    pageMeta({
      title:
        "Programas e Cursos — Santos Tech | Tecnologia e Informática para Crianças e Adolescentes",
      description:
        "Os programas da Santos Tech em Ribeirão Preto: Tecnologia (criação de jogos, 3D, Roblox, Python, VR) e Informática (Office, Excel, IA) — cada um nas turmas Júnior (5 a 9 anos) e Create (10 a 15 anos). Turmas de até 10 alunos, 100% presencial. Agende uma aula experimental grátis.",
      path: "/cursos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// ──────────────────────────────────────────────────────────────────────────
// CORES POR IDADE (comunicação visual): crianças = laranja, adolescentes = roxo.
// Algo que englobe as duas idades usa o gradiente laranja→roxo.
// ──────────────────────────────────────────────────────────────────────────
const KIDS = {
  gradient: "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)",
  dark: "#0A6E57",
  tier: "Crianças",
};
const TEENS = {
  gradient: "linear-gradient(135deg, #2E8FCF 0%, #04325A 100%)",
  dark: "#04325A",
  tier: "Adolescentes",
};

type ProgramCard = {
  id: string;
  icon: LucideIcon;
  name: string;
  meta: string;
  pitch: string;
  highlights: string[];
  gradient: string;
  dark: string;
  tier: string;
  destaque?: boolean;
};

const TECNOLOGIA: ProgramCard[] = [
  {
    id: "tec-junior",
    icon: Gamepad2,
    name: "Tecnologia Júnior",
    meta: "5 a 9 anos",
    pitch:
      "Cria seus primeiros jogos, personagens e objetos em 3D que saem impressos de verdade — brincando, com Minecraft e Roblox.",
    highlights: [
      "Minecraft e Roblox: cria os próprios jogos",
      "Modela e imprime em 3D — e leva pra casa",
      "Aprende a criar brincando, sem precisar ler muito",
    ],
    ...KIDS,
  },
  {
    id: "tec-create",
    icon: Rocket,
    name: "Tecnologia Create",
    meta: "10 a 15 anos",
    pitch:
      "Programa de verdade: cria e publica os próprios jogos, modela em 3D e chega até a realidade virtual. Termina com portfólio.",
    highlights: [
      "Roblox + Lua, depois Python",
      "Modelagem 3D profissional, Unity e VR",
      "Termina com projetos de portfólio",
    ],
    ...TEENS,
    destaque: true,
  },
];

const INFORMATICA: ProgramCard[] = [
  {
    id: "inf-junior",
    icon: Monitor,
    name: "Informática Júnior",
    meta: "5 a 9 anos",
    pitch:
      "Domina o computador de verdade — não só o celular. Cria trabalhos, joguinhos e apresentações.",
    highlights: [
      "Word, PowerPoint e Excel na prática",
      "Primeiros passos com inteligência artificial",
      "A base digital que a escola não dá",
    ],
    ...KIDS,
  },
  {
    id: "inf-create",
    icon: BarChart3,
    name: "Informática Create",
    meta: "10 a 15 anos",
    pitch:
      "As ferramentas que todo emprego exige — Excel, organização de dados e uso de IA. Termina com um portfólio profissional.",
    highlights: [
      "Excel que calcula sozinho: fórmulas, gráficos, dashboards",
      "Power BI e uso aplicado de IA",
      "Termina com portfólio pro mercado",
    ],
    ...TEENS,
  },
];

// ──────────────────────────────────────────────────────────────────────────
// CARD — fundo colorido por idade + ícone-SVG grande de fundo (tema do curso)
// ──────────────────────────────────────────────────────────────────────────
function ProgramCardItem({ program }: { program: ProgramCard }) {
  const Icon = program.icon;
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group block h-full">
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-white shadow-[0_18px_44px_-18px_rgba(0,0,0,0.45)] transition group-hover:-translate-y-1"
        style={{ background: program.gradient }}
      >
        {/* elementos SVG de fundo */}
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <Icon className="pointer-events-none absolute -bottom-6 -right-4 h-44 w-44 rotate-12 text-white/10" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Icon className="h-7 w-7" />
            </span>
            {program.destaque ? (
              <RarityBadge />
            ) : (
              <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur">
                {program.tier}
              </span>
            )}
          </div>

          <h3 className="mt-5 text-2xl font-black tracking-tight">{program.name}</h3>
          <p className="mt-1 text-xs font-black uppercase tracking-wider text-white/80">
            {program.tier} · {program.meta}
          </p>

          <p className="mt-4 text-sm text-white/90">{program.pitch}</p>

          <ul className="mt-5 space-y-2 border-t border-white/20 pt-4">
            {program.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <span
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-black uppercase tracking-wider shadow-md transition group-hover:scale-[1.03]"
              style={{ color: program.dark }}
            >
              <WhatsAppIcon className="h-4 w-4" /> Quero saber mais
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function FamilyBlock({
  eyebrow,
  title,
  description,
  programs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  programs: ProgramCard[];
}) {
  return (
    <div>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {programs.map((program, i) => (
          <Reveal key={program.id} delay={i * 120}>
            <ProgramCardItem program={program} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────
function ProgramasPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Programas", path: "/cursos" },
        ])}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#0DB88F]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob [animation-delay:3s]" />
        <DecorativeElements variant="default" color="#187ABF" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Nossos programas</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Escolha o <span className="text-gradient-hero">caminho do seu filho</span>
            </h1>
            <p className="mx-auto mt-5 text-lg text-muted-foreground">
              Dois eixos — <strong>Tecnologia</strong> e <strong>Informática</strong> — cada um com
              uma turma certa pra idade. As cores ajudam você a identificar rapidinho:
            </p>
          </Reveal>
          <Reveal delay={120}>
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

      {/* TECNOLOGIA */}
      <section id="tecnologia" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FamilyBlock
            eyebrow="Tecnologia"
            title="Criar a tecnologia — não só usar"
            description="O carro-chefe da escola. Seu filho cria jogos, mundos 3D e projetos reais — do Minecraft ao Unity, evoluindo no ritmo dele."
            programs={TECNOLOGIA}
          />
        </div>
      </section>

      {/* INFORMÁTICA */}
      <section id="informatica" className="scroll-mt-24 bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FamilyBlock
            eyebrow="Informática"
            title="A base digital e as ferramentas do mercado"
            description="Do domínio real do computador ao Excel que calcula sozinho e à IA aplicada. A porta de entrada que prepara pra escola, pra vida e pro trabalho."
            programs={INFORMATICA}
          />
        </div>
      </section>

      {/* COMO SE CONECTAM */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border-2 border-primary/15 bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ArrowRightLeft className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-black text-st-blue-dark">Não sabe por qual começar?</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Tudo bem — os caminhos se conectam. A Informática é uma ótima porta de entrada e
                  prepara pra Tecnologia; e cada eixo evolui por níveis, no ritmo da criança.
                  Matrícula anual: você renova a cada ano, só se quiser. Na conversa a gente indica
                  o ponto de partida ideal pra idade e o perfil do seu filho.
                </p>
              </div>
            </div>
          </Reveal>
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
                  Descubra o programa ideal numa aula grátis
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Fale com a gente no WhatsApp e agende uma aula experimental gratuita — seu filho
                  vem criar algo de verdade já no primeiro dia.
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
