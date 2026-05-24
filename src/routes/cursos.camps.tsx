import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Bot,
  Cpu,
  Wrench,
  Brain,
  Sparkles,
  Calendar,
  Clock,
  Users,
  Sun,
  Coffee,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HoverWashCard } from "@/components/hover-wash-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CourseHero,
  ParaQuemESection,
  MethodologySection,
  FaqSection,
  CourseCtaFinal,
  type CourseTheme,
  type FaqItem,
} from "@/components/course-page";

export const Route = createFileRoute("/cursos/camps")({
  component: CampsPage,
  head: () => ({
    meta: [
      { title: "CAMPS · 5 a 14 anos — Semanas Temáticas · Santos Tech" },
      {
        name: "description",
        content:
          "Férias e contraturno com semanas temáticas de programação, robótica, jogos e IA. Para crianças de 5 a 14 anos em Ribeirão Preto. Vagas limitadas por turma.",
      },
      { property: "og:title", content: "CAMPS · Santos Tech" },
      {
        property: "og:description",
        content:
          "Tela vira habilidade nas férias. Semanas temáticas, projeto pronto pra mostrar, novos amigos.",
      },
      { property: "og:url", content: "/cursos/camps" },
    ],
    links: [{ rel: "canonical", href: "/cursos/camps" }],
  }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const THEME: CourseTheme = {
  primary: "#1C8299",
  dark: "#0f5a6b",
  soft: "#6EC4CC",
};

// ──────────────────────────────────────────────────────────────────────────
// SEMANAS TEMÁTICAS — placeholders (validar com escola)
// ──────────────────────────────────────────────────────────────────────────
type CampTheme = {
  name: string;
  tagline: string;
  description: string;
  ageRange: string;
  icon: LucideIcon;
  color: string;
  highlights: string[];
};

const CAMPS: CampTheme[] = [
  {
    name: "Roblox Studio",
    tagline: "Criando jogos no Roblox de verdade",
    description: "A semana inteira no Roblox Studio. A criança aprende a montar mapas, programar mecânicas e publicar uma experiência pra jogar com amigos.",
    ageRange: "8 a 14 anos",
    icon: Gamepad2,
    color: "#ef4444",
    highlights: [
      "Construção de mapas no Roblox Studio",
      "Programação básica em Lua",
      "Publicação de uma experiência jogável",
    ],
  },
  {
    name: "Minecraft Education",
    tagline: "Programando no Minecraft com Make Code",
    description: "Edição educacional do Minecraft + MakeCode. A criança usa blocos pra automatizar construções, criar mecânicas e desafios próprios.",
    ageRange: "7 a 14 anos",
    icon: Cpu,
    color: "#10b981",
    highlights: [
      "Minecraft Education Edition",
      "MakeCode pra automação por blocos",
      "Mundo próprio montado e compartilhado",
    ],
  },
  {
    name: "Robótica Maker",
    tagline: "Robôs que se mexem, sensores que respondem",
    description: "Semana mão-na-massa com kits de robótica educacional. Montar, programar e fazer competir.",
    ageRange: "8 a 14 anos",
    icon: Bot,
    color: "#06b6d4",
    highlights: [
      "Kits de robótica educacional",
      "Sensores, motores e estruturas",
      "Mini-desafio final entre equipes",
    ],
  },
  {
    name: "IA pra Curiosos",
    tagline: "Inteligência artificial sem mistério",
    description: "Introdução prática ao que é IA — treinar modelos simples, brincar com geração de imagem e entender como a máquina aprende.",
    ageRange: "10 a 14 anos",
    icon: Brain,
    color: "#8b5cf6",
    highlights: [
      "Treinar modelos simples com exemplos",
      "Geração de imagem e texto guiada",
      "Conversa real sobre o que IA pode e não pode",
    ],
  },
  {
    name: "Maker & Eletrônica",
    tagline: "Da ideia ao circuito que funciona",
    description: "Semana de inventor. Eletrônica básica com kits seguros, prototipagem e um projeto físico pra levar pra casa.",
    ageRange: "8 a 14 anos",
    icon: Wrench,
    color: "#f59e0b",
    highlights: [
      "Eletrônica básica e prototipagem",
      "Materiais seguros pra criança",
      "Projeto físico finalizado",
    ],
  },
  {
    name: "Game Design Express",
    tagline: "Inventar um jogo do zero em 5 dias",
    description: "Imersão acelerada em criação de jogos. Conceito, regras, prototipagem em Scratch ou MakeCode, playtest e apresentação.",
    ageRange: "8 a 14 anos",
    icon: Sparkles,
    color: "#ec4899",
    highlights: [
      "Conceito + regras do próprio jogo",
      "Prototipagem em Scratch/MakeCode",
      "Playtest com a turma + apresentação",
    ],
  },
];

// ──────────────────────────────────────────────────────────────────────────
// FAQ
// ──────────────────────────────────────────────────────────────────────────
const FAQ: FaqItem[] = [
  {
    q: "Como funciona uma semana de CAMP?",
    a: "Cada CAMP é uma semana temática de segunda a sexta. Geralmente 4 horas por dia (ex.: 8h às 12h ou 13h às 17h). No fim da semana, a criança apresenta o projeto que construiu na turma e pra família.",
  },
  {
    q: "Em que épocas do ano vocês oferecem?",
    a: "Principais temporadas: férias de janeiro, julho e dezembro. Algumas semanas temáticas também rodam no contraturno escolar ao longo do ano. Datas exatas e temas disponíveis variam por temporada — consulta a gente pra ver o calendário aberto agora.",
  },
  {
    q: "Meu filho nunca fez aula de programação. Pode entrar?",
    a: "Sim. Os CAMPS são desenhados pra serem porta de entrada. Cada semana começa do zero no tema dela. Não exige experiência prévia — só interesse e a faixa etária certa.",
  },
  {
    q: "Que idade pode participar?",
    a: "5 a 14 anos. Cada semana indica uma faixa etária ideal (algumas são pra mais novos, outras pra mais velhos). As turmas são separadas por idade pra o conteúdo bater no ponto.",
  },
  {
    q: "Quantas crianças por turma?",
    a: "Turmas pequenas, com atenção individual. Capacidade controlada por semana e tema — quanto mais técnico, menor a turma. Vagas se esgotam rápido nas temporadas de férias.",
  },
  {
    q: "Posso matricular meu filho em mais de uma semana?",
    a: "Pode. Várias famílias matriculam em 2-3 semanas seguidas pra cobrir todo o recesso. Os temas não se repetem entre semanas — cada uma é um conteúdo novo.",
  },
  {
    q: "Tem alimentação inclusa?",
    a: "Não. As semanas atendem turno de meio período (4h). Recomendamos um lanche reforçado pra criança. Água sempre disponível no espaço.",
  },
  {
    q: "Qual o investimento?",
    a: "O valor varia por tema e temporada (alguns CAMPS têm kit incluso, como o de Maker e Robótica). Te passamos preços e formas de pagamento na conversa — sem compromisso.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// SUBCOMPONENTES
// ──────────────────────────────────────────────────────────────────────────
function CampCard({ camp }: { camp: CampTheme }) {
  const Icon = camp.icon;
  return (
    <HoverWashCard accent={camp.color} bubbleSize="sm">
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-white shadow"
            style={{ background: camp.color }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            {camp.ageRange}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-black tracking-tight" style={{ color: THEME.dark }}>
          {camp.name}
        </h3>
        <p className="mt-1 text-sm font-bold" style={{ color: camp.color }}>
          {camp.tagline}
        </p>
        <p className="mt-3 text-sm text-foreground/85">{camp.description}</p>

        <ul className="mt-5 space-y-2 border-t border-border pt-4">
          {camp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: camp.color }} />
              <span className="text-foreground/85">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </HoverWashCard>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────
function CampsPage() {
  return (
    <>
      <CourseHero
        theme={THEME}
        eyebrow="CAMPS · 5 a 14 anos"
        title={
          <>
            Tela vira <br />
            <span style={{ color: THEME.soft }}>habilidade nas férias</span>
          </>
        }
        subtitle={
          <>
            <p>
              Semanas temáticas de programação, robótica, jogos e IA. Pras{" "}
              <strong>férias</strong> ou pro <strong>contraturno</strong> da
              escola — segunda a sexta.
            </p>
            <p>
              Seu filho sai da semana com um <strong>projeto pronto pra
              mostrar</strong>, novos amigos e zero tempo perdido em frente ao
              celular.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Reservar vaga agora" }}
        secondaryCta={{ href: "#temas", label: "Ver semanas temáticas" }}
        imageName="students-3"
        imageAlt="Crianças em CAMP de programação na Santos Tech"
        blobId="campsBlob"
        decor="games"
        metrics={[
          { value: "5–14", label: "Faixa etária" },
          { value: "5 dias", label: "Por semana" },
          { value: "4h", label: "Por dia" },
          { value: "1", label: "Projeto na mão" },
        ]}
      />

      {/* POR QUE CAMPS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              Por que CAMPS
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Férias com{" "}
              <span style={{ color: THEME.primary }}>propósito</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Recesso escolar é o tempo em que a tela do celular mais ganha. Os
              CAMPS oferecem uma alternativa que vira esse tempo a favor da
              criança — sem cara de aula, com mão na massa e resultado palpável
              no fim da semana.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sun, t: "Cobre as férias", d: "Janeiro, julho, dezembro e recessos pontuais. Resolve a logística do pai." },
              { icon: Coffee, t: "Contraturno também", d: "Algumas semanas rodam ao longo do ano, no oposto do horário escolar." },
              { icon: Users, t: "Faz amigos novos", d: "Turmas pequenas, projetos em grupo. Criança volta pra casa querendo voltar." },
              { icon: Sparkles, t: "Projeto pra mostrar", d: "Cada semana entrega algo concreto — jogo, robô, animação — apresentado pra família." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 100}>
                <div
                  className="h-full rounded-xl border-2 bg-white p-7"
                  style={{
                    borderColor: `${THEME.soft}50`,
                    boxShadow: `0 8px 24px -8px ${THEME.primary}26`,
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `${THEME.soft}40`, color: THEME.primary }}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AS SEMANAS TEMÁTICAS */}
      <section id="temas" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              As semanas temáticas
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Escolhe o que faz brilhar o olho dele
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada semana é um tema fechado, do zero ao projeto pronto. Os
              temas disponíveis variam por temporada — consulta o calendário
              atual pra ver o que está aberto.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAMPS.map((camp, i) => (
              <Reveal key={camp.name} delay={i * 80}>
                <CampCard camp={camp} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div
              className="mx-auto mt-10 max-w-2xl rounded-xl border bg-white p-5 text-sm text-foreground/85 shadow-sm"
              style={{ borderColor: THEME.soft }}
            >
              <strong style={{ color: THEME.dark }}>Nem todos os temas rodam em toda temporada.</strong>{" "}
              Fala com a gente pra saber o calendário e os temas confirmados pra
              o período que te interessa.
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              Formato da semana
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Como funciona um CAMP
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "5 dias seguidos",
                desc: "Segunda a sexta. Cada CAMP é uma semana fechada, com começo, meio e fim — projeto entregue na sexta.",
              },
              {
                icon: Clock,
                title: "4h por dia",
                desc: "Turno de meio período: 8h–12h ou 13h–17h, dependendo da temporada. Ideal pra encaixar com a rotina da família.",
              },
              {
                icon: Users,
                title: "Turmas pequenas",
                desc: "Atenção individual e ambiente focado. Vagas limitadas por tema — quanto mais técnico (Robótica, Maker), menor a turma.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div
                  className="rounded-xl border-2 bg-white p-7"
                  style={{
                    borderColor: `${THEME.soft}50`,
                    boxShadow: `0 8px 24px -8px ${THEME.primary}26`,
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-md"
                    style={{ background: `${THEME.soft}40`, color: THEME.primary }}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            A solução de férias e{" "}
            <span style={{ color: THEME.primary }}>contraturno</span>
          </>
        }
        description={
          <>
            Os <strong>CAMPS</strong> são desenhados pro pai que precisa ocupar
            o tempo livre da criança com algo que valha a pena, sem cair na
            armadilha da tela infinita. Funciona pra quem nunca programou e
            também pra quem já estuda no CREATE ou JR.
          </>
        }
        checklistTitle="É ideal se você"
        items={[
          "Precisa cobrir um recesso escolar (férias, feriadão, recesso)",
          "Quer testar a Santos Tech sem se comprometer com um ano letivo",
          "Tem filho de 5 a 14 anos curioso por tecnologia",
          "Já é aluno e quer um tema diferente pra explorar nas férias",
        ]}
        bg="muted"
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Vaga é por semana e tema — e elas voam"
        description="Cada temporada abre datas e temas limitados. Reserva agora pra garantir a melhor semana pra rotina da família. Sem compromisso até confirmação."
        primaryCta={{ href: WHATSAPP, label: "Reservar vaga agora" }}
        secondaryCta={{ href: "/cursos", label: "Ver outros programas" }}
      />
    </>
  );
}
