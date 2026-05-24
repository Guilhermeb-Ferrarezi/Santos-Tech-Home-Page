/**
 * TEMPLATE — Página de Curso (não-rota)
 *
 * Como usar (recipe rápido):
 *
 *  1. COPIE este arquivo pra `src/routes/cursos.<programa>.<slug>.tsx`
 *     Exemplo: `src/routes/cursos.informatica.basico.tsx`
 *
 *  2. EDITE o `createFileRoute("/...")` pra bater com o nome do arquivo:
 *     - cursos.informatica.basico.tsx → "/cursos/informatica/basico"
 *
 *  3. RODE o dev server uma vez (`npm run dev`). TanStack Router vai gerar
 *     automaticamente `src/routeTree.gen.ts` com a nova rota.
 *
 *  4. PREENCHA todos os blocos marcados com `// TODO`:
 *     - meta + JSON-LD do curso
 *     - THEME (cores do programa)
 *     - hero (eyebrow, title, subtitle, image, métricas)
 *     - "Pra quem é" (perfil + checklist)
 *     - módulos do curso (currículo)
 *     - FAQ (perguntas e respostas)
 *     - CTA final
 *
 *  5. ADICIONE a URL ao `public/sitemap.xml` com prioridade adequada.
 *
 *  6. ADICIONE link no `src/components/site-header.tsx` se o programa for novo
 *     (atualizar `PROGRAMAS_PRINCIPAIS` ou `PROGRAMAS_ADICIONAIS`).
 *
 *  7. ADICIONE entry em `src/lib/program-theme.ts` se o programa for novo
 *     (atualizar `ProgramKey`, `ACCENT_DARK`, `ACCENT_SOFT`, `getProgramKey`).
 *
 *  8. CONFIRA o build local: `npm run build`. Se passar, commit + push.
 *
 * Componentes disponíveis em `@/components/course-page`:
 *  - <CourseHero>          → topo escuro + métricas
 *  - <ProgressionTrail>    → sistema de selos/insígnias (opcional)
 *  - <ParaQuemESection>    → perfil ideal + checklist
 *  - <FormatSection>       → formato das aulas (carga horária, etc)
 *  - <ModuleGrid>          → grade de módulos com mini-projetos
 *  - <LessonAccordion>     → ementa aula-a-aula (opcional)
 *  - <ToolGrid>            → grid de ferramentas usadas
 *  - <MethodologySection>  → pilares do método Santos Tech
 *  - <BridgeBanner>        → banner conector entre seções
 *  - <FaqSection>          → FAQ visível (corresponde ao JSON-LD)
 *  - <CourseCtaFinal>      → CTA final com WhatsApp
 */

import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  // TODO — escolher ícones de @phosphor-icons/react pros módulos e badges.
  GameController as PhGameController,
  Sparkle as PhSparkle,
} from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";
import {
  CourseHero,
  ParaQuemESection,
  ModuleGrid,
  MethodologySection,
  FaqSection,
  CourseCtaFinal,
  type CourseTheme,
  type Module,
  type FaqItem,
} from "@/components/course-page";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, coursePageSchemas } from "@/lib/seo";

// ──────────────────────────────────────────────────────────────────────────
// 1) ROTA + META + SCHEMA
// ──────────────────────────────────────────────────────────────────────────

// TODO — ajustar o path da rota (deve bater com o nome do arquivo).
export const Route = createFileRoute("/cursos/PROGRAMA/SLUG")({
  component: NovoCursoPage,
  head: () =>
    pageMeta({
      // TODO — título com keywords + faixa etária + cidade (Ribeirão Preto).
      title: "NOME DO CURSO (FAIXA-ETÁRIA) — DESCRIÇÃO CURTA | Santos Tech",
      // TODO — descrição com 1) o que é, 2) pra quem, 3) onde, 4) diferencial.
      // Limite ~155 chars pra aparecer completo no Google.
      description:
        "Descrição da página em até 155 caracteres — explica o que é o curso, faixa etária, local (Ribeirão Preto) e diferencial.",
      // TODO — confirmar path absoluto.
      path: "/cursos/PROGRAMA/SLUG",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// ──────────────────────────────────────────────────────────────────────────
// 2) THEME — paleta de cores do programa
// ──────────────────────────────────────────────────────────────────────────

// TODO — usar as cores do programa correspondente.
// Cores conhecidas:
//   JR:        #512374 / #3d1858 / #DEABF7
//   CREATE:    #0067BE / #04325A / #49A8EB
//   CAMPS:     #1C8299 / #0f5a6b / #6EC4CC
//   ACADEMIES: #0411A0 / #020a6b / #818CF8
const THEME: CourseTheme = {
  primary: "#0067BE",
  dark: "#04325A",
  soft: "#49A8EB",
};

// ──────────────────────────────────────────────────────────────────────────
// 3) DADOS DE CONTEÚDO — módulos, FAQ, etc
// ──────────────────────────────────────────────────────────────────────────

// Ícones de módulo (Phosphor duotone — bom em fundos claros)
const ModuleIcon1 = phosphor(PhGameController, "duotone");
const ModuleIcon2 = phosphor(PhSparkle, "duotone");

// TODO — listar todos os módulos do curso (geralmente 4-6).
const MODULES: Module[] = [
  {
    n: 1,
    name: "TODO — Nome do Módulo 1",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives: "TODO — 1 frase do que o aluno aprende neste módulo.",
    project: "TODO — descrição opcional do mini-projeto final do módulo.",
    tool: "TODO — ferramenta principal (ex.: Scratch, MakeCode, Unity).",
    icon: ModuleIcon1,
    badge: {
      name: "TODO — Nome da Conquista",
      icon: ModuleIcon1,
      color: "#0067BE",
      desc: "TODO — descrição curta da conquista.",
    },
    lessons: [
      { n: 1, title: "TODO — Título da aula 1", goal: "TODO — objetivo da aula." },
      { n: 2, title: "TODO — Título da aula 2", goal: "TODO — objetivo." },
      // ... adicionar todas as aulas do módulo
    ],
  },
  {
    n: 2,
    name: "TODO — Nome do Módulo 2",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives: "TODO — objetivo do módulo 2.",
    tool: "TODO — ferramenta.",
    icon: ModuleIcon2,
    badge: {
      name: "TODO — Conquista 2",
      icon: ModuleIcon2,
      color: "#49A8EB",
      desc: "TODO — descrição.",
    },
    lessons: [
      // ...
    ],
  },
];

// TODO — preencher com 6-8 perguntas que os pais realmente fazem.
// Respostas devem ser DIRETAS e CONCRETAS (otimizadas pra LLMs).
const FAQ: FaqItem[] = [
  {
    q: "TODO — Pergunta 1?",
    a: "TODO — Resposta direta e útil em 1-3 frases.",
  },
  {
    q: "TODO — Pergunta 2?",
    a: "TODO — Resposta.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// 4) PAGE COMPONENT
// ──────────────────────────────────────────────────────────────────────────

function NovoCursoPage() {
  return (
    <>
      {/* JSON-LD pra SEO + GEO (Google + LLMs entendem o que é este curso). */}
      <JsonLd
        data={coursePageSchemas({
          path: "/cursos/PROGRAMA/SLUG",
          programName: "TODO — Nome do programa pai (ex: CREATE, JR, INFORMÁTICA)",
          programPath: "/cursos/PROGRAMA",
          courseName: "TODO — Nome completo do curso com faixa etária",
          courseDescription:
            "TODO — Descrição pedagógica de 2-3 frases. O que o aluno aprende + ferramentas + abordagem.",
          ageMin: 0,
          ageMax: 0,
          faq: FAQ,
        })}
      />

      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/PROGRAMA", label: "Programa TODO" }}
        eyebrow="TODO · faixa etária"
        title={
          <>
            TODO título <br />
            <span style={{ color: THEME.soft }}>com destaque colorido</span>
          </>
        }
        subtitle={
          <>
            <p>
              TODO — primeiro parágrafo do hero. Direto e claro. Use{" "}
              <strong>negrito</strong> nos pontos-chave.
            </p>
            <p>TODO — segundo parágrafo opcional.</p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="students-1"
        imageAlt="TODO — alt text descritivo da imagem do hero."
        blobId="novocursoBlob"
        decor="default"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "40", label: "Semanas" },
          { value: "X–Y", label: "Faixa etária" },
        ]}
      />

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            Pra quem é <span style={{ color: THEME.primary }}>esse curso</span>
          </>
        }
        description={<>TODO — parágrafo explicando o perfil ideal.</>}
        checklistTitle="É ideal se seu filho"
        items={[
          "TODO — sinal 1",
          "TODO — sinal 2",
          "TODO — sinal 3",
          "TODO — sinal 4",
        ]}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="TODO — título do currículo"
        description="TODO — frase introdutória opcional."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="TODO — chamada final"
        description="TODO — descrição final com convite à ação."
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "/cursos", label: "Ver outros programas" }}
      />
    </>
  );
}
