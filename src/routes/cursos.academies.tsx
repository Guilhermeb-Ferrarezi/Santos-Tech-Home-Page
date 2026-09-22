import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import {
  Robot as PhRobot,
  Brain as PhBrain,
  Cpu as PhCpu,
  Sparkle as PhSparkle,
  Lightning as PhLightning,
  Wrench as PhWrench,
  GraduationCap as PhGraduationCap,
  StackSimple as PhStackSimple,
  FlowArrow as PhFlowArrow,
} from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";
import { Reveal } from "@/components/reveal";
import { HoverWashCard } from "@/components/hover-wash-card";

// Academy badges — duotone (sit em fundo branco do card, ícone grande)
const Bot = phosphor(PhRobot, "duotone");
const Brain = phosphor(PhBrain, "duotone");

// Ícones de método e pilares — duotone
const Wrench = phosphor(PhWrench, "duotone");
const Zap = phosphor(PhLightning, "duotone");
const Layers = phosphor(PhStackSimple, "duotone");
const GraduationCap = phosphor(PhGraduationCap, "duotone");
const Cpu = phosphor(PhCpu, "duotone");
const Sparkles = phosphor(PhSparkle, "duotone");
const Workflow = phosphor(PhFlowArrow, "duotone");
import {
  CourseHero,
  ParaQuemESection,
  MethodologySection,
  FaqSection,
  CourseCtaFinal,
  BridgeBanner,
  type CourseTheme,
  type FaqItem,
} from "@/components/course-page";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, buildCourseSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const Route = createFileRoute("/cursos/academies")({
  component: AcademiesPage,
  head: () =>
    pageMeta({
      title: "Academia de Robótica e Academia de IA — Especialização | Santos Tech",
      description:
        "Academias da Santos Tech: módulos avançados de Robótica (9 a 14 anos) e Inteligência Artificial (11 a 14 anos) em Ribeirão Preto. Especialização técnica com kits físicos, treinamento de modelos, engenharia de prompt e projetos próprios.",
      path: "/cursos/academies",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const THEME: CourseTheme = {
  primary: "#0411A0",
  dark: "#020a6b",
  soft: "#818CF8",
};

// ──────────────────────────────────────────────────────────────────────────
// MÓDULOS — Robótica + IA
// ──────────────────────────────────────────────────────────────────────────
type Academy = {
  /** Anchor id for deep linking (e.g., #robotica, #ai). */
  anchor: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  highlights: string[];
  /** O que o aluno constrói/leva pra casa. */
  outcome: string;
  /** Pré-requisito recomendado. */
  prereq: string;
  /** Faixa etária ideal. */
  ageRange: string;
};

const ACADEMIES: Academy[] = [
  {
    anchor: "robotica",
    name: "Robotics Academy",
    tagline: "Robôs físicos que se mexem, reagem e competem",
    description:
      "Módulo de especialização em robótica. Kits educacionais com motores, sensores e estruturas. A criança monta, programa e testa robôs reais — não simulações.",
    icon: Bot,
    color: "#10b981",
    ageRange: "9 a 14 anos",
    highlights: [
      "Kits de robótica educacional (motores, sensores, estrutura)",
      "Programação por blocos evoluindo pra texto",
      "Desafios práticos: sumô, seguidor de linha, resgate",
      "Trabalho em equipe e mentalidade de competição",
    ],
    outcome:
      "Vários protótipos funcionais ao longo do módulo + projeto final apresentado.",
    prereq: "Nenhum (versão iniciante). Versão avançada exige CREATE 1+.",
  },
  {
    anchor: "ai",
    name: "AI Academy",
    tagline: "Inteligência Artificial sem mistério, mão na massa",
    description:
      "Módulo de introdução prática a IA. Treinamento de modelos simples, prompts, geração de imagem e texto, e entendimento de como a máquina aprende e onde ela erra.",
    icon: Brain,
    color: "#8b5cf6",
    ageRange: "11 a 14 anos",
    highlights: [
      "O que IA pode e não pode — base conceitual real",
      "Treinar modelos simples com exemplos próprios",
      "Engenharia de prompt aplicada a problemas reais",
      "Ética, vieses e responsabilidade ao usar IA",
    ],
    outcome:
      "Coleção de mini-projetos com IA aplicada + apresentação de um caso de uso original.",
    prereq: "Idade mínima 11 anos. Recomendado já ter base de programação (JR3+ ou CREATE 2+).",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// FAQ
// ──────────────────────────────────────────────────────────────────────────
const FAQ: FaqItem[] = [
  {
    q: "Qual a diferença entre ACADEMIES e CREATE?",
    a: "O CREATE é a trilha principal de programação criando jogos, ano a ano dos 8 aos 14. As ACADEMIES são módulos paralelos de especialização — robótica física e IA — que aprofundam áreas específicas. Um aluno pode fazer só ACADEMIES, ou combinar com CREATE.",
  },
  {
    q: "Meu filho precisa estar no CREATE pra entrar nas ACADEMIES?",
    a: "Não. As ACADEMIES funcionam como entrada também. A Robotics Academy aceita iniciantes; a AI Academy pede idade mínima 11 anos. Conversa com a gente pra avaliar o caminho ideal.",
  },
  {
    q: "Como é o formato de uma ACADEMY?",
    a: "Módulo multi-semanas com encontros semanais. Cada módulo tem foco em uma área (Robótica ou IA) com projetos práticos a cada etapa e um projeto final. Duração e carga horária variam por módulo — consulta a gente pro detalhe do que está aberto agora.",
  },
  {
    q: "Robotics Academy: qual robô vai ser usado?",
    a: "Kits educacionais com motores, sensores e blocos estruturais. A criança monta o robô do zero — não é um robô pronto. Cada projeto é um protótipo novo desenhado pra resolver um desafio diferente.",
  },
  {
    q: "AI Academy: meu filho vai aprender a programar IA?",
    a: "Vai aprender a usar IA com profundidade — treinar modelos simples, escrever prompts inteligentes, gerar imagem/texto e entender o que está acontecendo por baixo. Programação de IA mais avançada (modelos próprios, redes neurais) é um próximo passo, não o foco desta Academy.",
  },
  {
    q: "Que idade pode participar?",
    a: "Robotics Academy: 9 a 14 anos (com versões adaptadas pra cada faixa). AI Academy: 11 a 14 anos (conceitos exigem maturidade). Avaliamos caso a caso.",
  },
  {
    q: "Posso fazer as duas Academies?",
    a: "Sim. Algumas famílias combinam Robotics + IA pra cobrir as duas frentes da especialização tech. Não há ordem obrigatória entre elas.",
  },
  {
    q: "Qual o investimento?",
    a: "Varia por módulo. A Robotics Academy tem kit incluso, então o investimento reflete isso. Te passamos valores e formas de pagamento na conversa — sem compromisso.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// SUBCOMPONENTES
// ──────────────────────────────────────────────────────────────────────────
function AcademyCard({ academy }: { academy: Academy }) {
  const Icon = academy.icon;
  return (
    <HoverWashCard accent={academy.color} bubbleSize="lg" padding="p-8" id={academy.anchor} className="scroll-mt-24">
      <div className="relative">
        <div className="flex items-start gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-white shadow-lg"
            style={{ background: academy.color }}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div className="flex-1 min-w-0">
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ background: academy.color }}
            >
              {academy.ageRange}
            </span>
            <h3 className="mt-2 text-2xl font-black tracking-tight" style={{ color: THEME.dark }}>
              {academy.name}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-base font-bold" style={{ color: academy.color }}>
          {academy.tagline}
        </p>
        <p className="mt-3 text-sm text-foreground/85">{academy.description}</p>

        <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
          {academy.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: academy.color }} />
              <span className="text-foreground/85">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div
            className="rounded-lg border bg-white p-3 shadow-sm"
            style={{ borderColor: academy.color + "50" }}
          >
            <p className="text-[10px] font-black uppercase tracking-wider" style={{ color: academy.color }}>
              Leva pra casa
            </p>
            <p className="mt-1 text-xs text-foreground/85">{academy.outcome}</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-3 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">
              Pré-requisito
            </p>
            <p className="mt-1 text-xs text-foreground/85">{academy.prereq}</p>
          </div>
        </div>
      </div>
    </HoverWashCard>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────
function AcademiesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Programas", path: "/cursos" },
            { name: "Academies", path: "/cursos/academies" },
          ]),
          buildCourseSchema({
            name: "Academia de Robótica (9 a 14 anos) — Santos Tech",
            description:
              "Módulo de especialização em robótica educacional. Kits físicos com motores, sensores e estrutura. Crianças montam, programam e testam robôs reais com desafios de sumô, seguidor de linha e resgate.",
            path: "/cursos/academies#robotica",
            ageMin: 9,
            ageMax: 14,
          }),
          buildCourseSchema({
            name: "Academia de IA (11 a 14 anos) — Santos Tech",
            description:
              "Módulo de introdução prática à Inteligência Artificial. Treinamento de modelos simples, engenharia de prompt, geração de imagem e texto, ética e responsabilidade ao usar IA.",
            path: "/cursos/academies#ai",
            ageMin: 11,
            ageMax: 14,
          }),
          buildFaqSchema(FAQ),
        ]}
      />
      <CourseHero
        theme={THEME}
        eyebrow="ACADEMIES · Módulos avançados"
        title={
          <>
            Especialização <br />
            <span style={{ color: THEME.soft }}>em Robótica e IA</span>
          </>
        }
        subtitle={
          <>
            <p>
              Módulos de <strong>aprofundamento técnico</strong> em áreas que
              vão definir os próximos 10 anos. Robótica física e Inteligência
              Artificial — sem mistério, com mão na massa.
            </p>
            <p>
              Aluno avançado do CREATE ganha um próximo passo. Aluno novo
              encontra uma <strong>porta de entrada moderna</strong> pra
              tecnologia que importa.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Conhecer as Academies" }}
        secondaryCta={{ href: "#modulos", label: "Ver os módulos" }}
        imageName="students-4"
        imageAlt="Aluno avançado das ACADEMIES da Santos Tech"
        blobId="academiesBlob"
        decor="robot"
        metrics={[
          { value: "2", label: "Módulos" },
          { value: "9–14", label: "Faixa etária" },
          { value: "Avançado", label: "Nível técnico" },
          { value: "Hands-on", label: "100% prático" },
        ]}
      />

      {/* POR QUE ACADEMIES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              Por que ACADEMIES
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que está {" "}
              <span style={{ color: THEME.primary }}>além do CREATE</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O CREATE forma o desenvolvedor de jogos. As <strong>ACADEMIES</strong>{" "}
              formam o especialista. Robótica e IA são áreas que precisam de
              kits, ferramentas e currículo próprios — e ganham um módulo dedicado.
            </p>
          </Reveal>

          <div className="mt-8">
            <BridgeBanner
              title="Módulo paralelo, não substitui o CREATE"
              from={THEME.soft}
              to={THEME.primary}
            >
              ACADEMIES funcionam <strong>em paralelo</strong> ao CREATE. O
              aluno pode fazer só Academies, só CREATE, ou combinar os dois
              caminhos. Não existe pré-requisito obrigatório do CREATE pra
              entrar — embora ajude muito.
            </BridgeBanner>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Wrench, t: "Mão na massa de verdade", d: "Robôs físicos, kits reais, modelos de IA treinados pela própria criança. Nada de simulação." },
              { icon: Zap, t: "Áreas que importam", d: "Robótica e IA são os pilares da próxima geração tech. Quem começa cedo sai na frente." },
              { icon: Layers, t: "Específico e profundo", d: "Em vez de cobrir vários temas superficialmente, cada Academy aprofunda uma área até dominar." },
              { icon: GraduationCap, t: "Aluno avançado tem pra onde ir", d: "Pra quem terminou ou está no CREATE e quer um próximo passo concreto antes da carreira." },
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
                    className="flex h-12 w-12 items-center justify-center rounded-md"
                    style={{ background: `${THEME.soft}25`, color: THEME.primary }}
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

      {/* OS 2 MÓDULOS */}
      <section
        id="modulos"
        className="relative isolate overflow-hidden py-20 text-white"
        style={{ background: `linear-gradient(135deg, ${THEME.primary} 0%, ${THEME.dark} 100%)` }}
      >
        <div className="pointer-events-none absolute inset-0 dotted-bg opacity-15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: THEME.soft }}>
              Os módulos disponíveis
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Duas Academies, <br />
              <span style={{ color: THEME.soft }}>dois caminhos de especialista</span>
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Robotics Academy e AI Academy. Independentes entre si — pode
              fazer uma, fazer as duas, fazer em qualquer ordem.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {ACADEMIES.map((academy, i) => (
              <Reveal key={academy.name} delay={i * 150}>
                <AcademyCard academy={academy} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              Formato
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Como funciona uma Academy
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Workflow,
                title: "Módulo multi-semanas",
                desc: "Cada Academy é um módulo com começo, meio e fim — projetos práticos a cada etapa e um projeto final.",
              },
              {
                icon: Cpu,
                title: "Kits e ferramentas inclusas",
                desc: "Robótica usa kit educacional físico. IA usa ferramentas profissionais gratuitas e pagas inclusas no curso.",
              },
              {
                icon: Sparkles,
                title: "Projetos próprios",
                desc: "Não é assistir vídeo nem fazer exercício de gabarito. Cada aluno constrói coisas dele — pra mostrar, demonstrar, defender.",
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
                    style={{ background: `${THEME.soft}25`, color: THEME.primary }}
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
            Pra quem quer{" "}
            <span style={{ color: THEME.primary }}>aprofundar de verdade</span>
          </>
        }
        description={
          <>
            As <strong>ACADEMIES</strong> são desenhadas pra criança que já
            sabe que gosta de tecnologia e quer ir além do "criar jogos".
            Robótica e IA exigem um foco diferente — específico, hands-on, com
            ferramentas próprias.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Já curte programação e quer um caminho de especialização",
          "Curioso por máquinas físicas (Robotics) ou IA generativa",
          "Está no CREATE e quer um módulo paralelo pra aprofundar",
          "Tem entre 9 e 14 anos (Robotics 9+, IA 11+)",
        ]}
        bg="muted"
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Próximo passo: a especialização"
        description="Robótica ou IA — qual faz mais sentido pro seu filho? Vem conhecer o espaço, ver os kits e as ferramentas, e a gente te ajuda a escolher. Sem compromisso."
        primaryCta={{ href: WHATSAPP, label: "Conhecer as Academies" }}
        secondaryCta={{ href: "/cursos", label: "Ver outros programas" }}
      />
    </>
  );
}
