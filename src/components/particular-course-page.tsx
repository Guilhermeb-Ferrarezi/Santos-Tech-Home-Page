import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { buildCourseFaqItems } from "@/components/particular-faq-items";
import { JsonLd } from "@/components/json-ld";
import { buildParticularPageSchemas } from "@/lib/seo";
import { themeVars, type CourseThemeKey } from "@/lib/course-themes";
import { SKINS } from "@/components/course-skins";

// ── Types ─────────────────────────────────────────────────────────────────

export type TopicGroup = { title: string; topics: string[] };

export type Tier = {
  /** Nome do nível (ex.: "Essencial") em curso multi-tier; em curso de plano único, vira o nome do próprio curso/software (ex.: "Adobe Premiere") — todo consumo daqui precisa checar `multiTier`/`tiers.length` antes de tratar como rótulo de nível. */
  levelName: string;
  /** Texto do botão de CTA no card de preço, se diferente de `levelName` (ex.: "Hardware" em vez de "Montagem e Manutenção"). */
  ctaLabel?: string;
  totalHours: string;
  outcome: string;
  modules: TopicGroup[];
  tools: string[];
};

export type CourseData = {
  nome: string;
  categoria: string;
  tagline: string;
  targetAudience: string[];
  tiers: Tier[];
  pricePerAula?: number;
  /**
   * Perguntas específicas deste curso, exibidas antes do FAQ genérico
   * (PARTICULAR_FAQ_ITEMS) e incluídas no JSON-LD FAQPage da página — evita que
   * as ~50 páginas de /particular/cursos/* tenham o mesmo schema estrutural
   * idêntico (sinal de conteúdo duplicado pro Google).
   */
  faqItems?: { q: string; a: string }[];
  /**
   * Identidade visual própria da categoria: a página inteira é renderizada pela
   * "pele" correspondente (course-skins/*). Obrigatório — o template genérico
   * sem pele foi removido em 25/09/2026 (nenhum curso o usava).
   */
  tema: CourseThemeKey;
  /** Chave da logo em src/assets/logos (ex.: "excel"). */
  logo: string;
  /**
   * Variação dentro da pele da categoria (ex.: "word" ou "powerpoint" na pele
   * Office), pra arte do hero e rótulos acompanharem o curso específico.
   */
  variante?: string;
};

// ── Página ─────────────────────────────────────────────────────────────────

export function ParticularCursosPage({
  course,
  whatsappUrl,
}: {
  course: CourseData;
  whatsappUrl: string;
}) {
  const [selectedTier, setSelectedTier] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const faqItems = buildCourseFaqItems(course);

  const schemas = buildParticularPageSchemas({
    courseName: course.nome,
    courseDescription: course.tagline,
    path: pathname,
    tiers: course.tiers.map((t) => ({
      levelName: t.levelName,
      totalHours: t.totalHours,
      outcome: t.outcome,
    })),
    faq: faqItems.map(({ q, a }) => ({ q, a })),
  });

  const { Skin, theme } = SKINS[course.tema];
  return (
    <div style={themeVars(theme)}>
      <JsonLd data={schemas} />
      <Skin
        course={course}
        tema={course.tema}
        theme={theme}
        logo={course.logo}
        whatsappUrl={whatsappUrl}
        selectedTier={selectedTier}
        onSelectTier={setSelectedTier}
        faq={faqItems}
      />
    </div>
  );
}
