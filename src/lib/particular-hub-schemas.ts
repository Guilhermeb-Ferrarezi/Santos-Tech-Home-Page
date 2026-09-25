/**
 * JSON-LD do hub `/particular`: BreadcrumbList + ItemList dos cursos + FAQPage.
 *
 * - ItemList: os cursos do catálogo (`cursos-particulares.ts`), na ordem da sidebar,
 *   com a URL canônica e o nome de cada página de curso.
 * - FAQPage: exatamente as perguntas que o `<ParticularFaq>` mostra no hub
 *   (`PARTICULAR_FAQ_ITEMS`, o padrão do componente) — a marcação espelha o texto
 *   visível. Não rende rich result (saiu do Google em 07/05/2026): é dado semântico.
 *
 * Fica fora de `cursos-particulares.ts` porque aquele módulo só pode ter `import type`
 * (o teste dele roda direto no Node).
 */
import { PARTICULAR_FAQ_ITEMS } from "@/components/particular-faq-items";
import { CURSOS_PARTICULARES, cursoParticularPath } from "@/lib/cursos-particulares";
import { buildBreadcrumbSchema, buildCourseListSchema, buildFaqSchema } from "@/lib/seo";

export function buildParticularHubSchemas() {
  return [
    buildBreadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Santos Tech Particular", path: "/particular" },
    ]),
    buildCourseListSchema({
      name: "Cursos particulares da Santos Tech",
      items: CURSOS_PARTICULARES.map((curso) => ({
        name: curso.nome,
        path: cursoParticularPath(curso.slug),
      })),
    }),
    buildFaqSchema(PARTICULAR_FAQ_ITEMS.map(({ q, a }) => ({ q, a }))),
  ];
}
