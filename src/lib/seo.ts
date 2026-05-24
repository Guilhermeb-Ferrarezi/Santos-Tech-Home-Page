/**
 * SEO + GEO helpers — schema.org JSON-LD + canonical URLs.
 *
 * **Por que JSON-LD em vez de microdata:** Schema.org via JSON-LD é o formato
 * preferido pelo Google e por LLMs (ChatGPT, Perplexity, Claude com web
 * search). Aumenta chance de aparecer em rich results E de ser citado em
 * respostas geradas por IA (GEO — Generative Engine Optimization).
 *
 * **Cobertura mínima:**
 * - Organization + EducationalOrganization no root (sinaliza institucional)
 * - LocalBusiness (sinaliza presencial, com endereço e contato)
 * - Course pra cada página de curso
 * - FAQPage pra páginas com FAQ
 * - BreadcrumbList pra navegação
 *
 * Convenção: `BASE_URL` é o canonical absoluto. Todas as URLs internas
 * passam por `absoluteUrl()` pra ficarem em formato HTTPS absoluto.
 */

export const BASE_URL = "https://santos-tech.com";

/** Converte path relativo em URL absoluta (`/cursos` → `https://santos-tech.com/cursos`). */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

// ──────────────────────────────────────────────────────────────────────────
// DADOS INSTITUCIONAIS — single source of truth
// ──────────────────────────────────────────────────────────────────────────

export const ORG = {
  name: "Santos Tech",
  legalName: "Santos Tech — Escola de Programação",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  image: `${BASE_URL}/og-image.png`,
  email: "ceo.santosgames@gmail.com",
  telephone: "+55-16-99257-8710",
  whatsappUrl: "https://wa.me/5516992578710",
  instagram: "https://instagram.com/escolasantostech",
  address: {
    street: "Av. Nove de Julho, 1992",
    neighborhood: "Jardim América",
    city: "Ribeirão Preto",
    state: "SP",
    country: "BR",
    postalCode: "14025-000",
  },
  // Coords aproximadas do endereço (Av. Nove de Julho, Jardim América, Ribeirão Preto)
  geo: { latitude: -21.1957, longitude: -47.8104 },
  // Foundational description — usada por LLMs pra entender o que somos
  description:
    "Escola presencial de programação para crianças e adolescentes de 5 a 14 anos em Ribeirão Preto, SP. Ensina lógica, programação, criação de jogos, robótica e inteligência artificial em ambiente lúdico e estruturado.",
  shortDescription:
    "Escola de programação para crianças e adolescentes em Ribeirão Preto. Programas CREATE, JR, Academia de Robótica, Academia de IA e Férias Tech.",
} as const;

// ──────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG BUILDERS
// ──────────────────────────────────────────────────────────────────────────

type JsonLd = Record<string, unknown>;

/** EducationalOrganization + LocalBusiness — root institucional. */
export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: ORG.name,
    legalName: ORG.legalName,
    alternateName: "Escola Santos Tech",
    url: ORG.url,
    logo: ORG.logo,
    image: ORG.image,
    description: ORG.description,
    email: ORG.email,
    telephone: ORG.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.address.street,
      addressLocality: ORG.address.city,
      addressRegion: ORG.address.state,
      postalCode: ORG.address.postalCode,
      addressCountry: ORG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ORG.geo.latitude,
      longitude: ORG.geo.longitude,
    },
    sameAs: [ORG.instagram],
    areaServed: {
      "@type": "City",
      name: "Ribeirão Preto",
      containedInPlace: { "@type": "AdministrativeArea", name: "São Paulo, Brasil" },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    knowsAbout: [
      "Programação para crianças",
      "Ensino de programação",
      "Game design educacional",
      "Robótica educacional",
      "Inteligência artificial",
      "Lógica de programação",
      "JavaScript",
      "Scratch",
      "MakeCode Arcade",
      "Unity",
      "C#",
      "STEM",
    ],
    audience: [
      { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Crianças de 5 a 14 anos" },
      { "@type": "EducationalAudience", educationalRole: "parent", audienceType: "Pais e responsáveis" },
    ],
  };
}

/** WebSite schema — habilita sitelinks search box no Google. */
export function buildWebSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: ORG.name,
    description: ORG.shortDescription,
    inLanguage: "pt-BR",
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}

/** Course schema — usar nas páginas de curso. */
export function buildCourseSchema(input: {
  /** Nome do curso (ex.: "CREATE 1 — 8 a 9 anos"). */
  name: string;
  /** Descrição pedagógica. */
  description: string;
  /** Path relativo do curso (ex.: "/cursos/create/8-9-anos"). */
  path: string;
  /** Faixa etária mínima. */
  ageMin?: number;
  /** Faixa etária máxima. */
  ageMax?: number;
  /** Modalidade. Default: presencial. */
  courseMode?: "presencial" | "online" | "blended";
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": `${BASE_URL}/#organization` },
    educationalLevel: "Educação básica",
    inLanguage: "pt-BR",
    ...(input.ageMin && input.ageMax
      ? { typicalAgeRange: `${input.ageMin}-${input.ageMax}` }
      : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: input.courseMode === "online" ? "Online" : "Onsite",
      location: {
        "@type": "Place",
        name: ORG.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG.address.street,
          addressLocality: ORG.address.city,
          addressRegion: ORG.address.state,
          addressCountry: ORG.address.country,
        },
      },
    },
  };
}

/** FAQPage schema — usar em páginas com FAQ. */
export function buildFaqSchema(items: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** BreadcrumbList schema — usar em páginas internas. */
export function buildBreadcrumbSchema(crumbs: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

// ──────────────────────────────────────────────────────────────────────────
// META BUILDERS — helpers que retornam tags formatadas pra TanStack Start
// ──────────────────────────────────────────────────────────────────────────

/**
 * Helper composto pra páginas de curso individual (CREATE3, JR2, etc).
 * Retorna ARRAY de schemas pra passar pro <JsonLd data={...}>.
 *
 * Inclui: BreadcrumbList (Home → Cursos → Programa → Curso),
 * Course (curso específico) e FAQPage (se faq passado).
 */
export function coursePageSchemas(input: {
  /** Path do curso (ex: "/cursos/create/8-9-anos"). */
  path: string;
  /** Nome do programa pai (ex: "CREATE"). */
  programName: string;
  /** Path do programa pai (ex: "/cursos/create"). */
  programPath: string;
  /** Nome do curso específico (ex: "CREATE Ano 1 (8 a 9 anos)"). */
  courseName: string;
  /** Descrição pedagógica completa. */
  courseDescription: string;
  /** Faixa etária mínima. */
  ageMin: number;
  /** Faixa etária máxima. */
  ageMax: number;
  /** FAQ items pra gerar FAQPage schema. Opcional. */
  faq?: { q: string; a: string }[];
}): JsonLd[] {
  const schemas: JsonLd[] = [
    buildBreadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Programas", path: "/cursos" },
      { name: input.programName, path: input.programPath },
      { name: input.courseName, path: input.path },
    ]),
    buildCourseSchema({
      name: input.courseName,
      description: input.courseDescription,
      path: input.path,
      ageMin: input.ageMin,
      ageMax: input.ageMax,
    }),
  ];
  if (input.faq && input.faq.length > 0) {
    schemas.push(buildFaqSchema(input.faq));
  }
  return schemas;
}

/** Gera meta tags básicas + canonical pra uma rota. */
export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  /** Override do OG image (default: og-image.png). */
  ogImage?: string;
}) {
  const canonical = absoluteUrl(input.path);
  const ogImage = input.ogImage ?? `${BASE_URL}/og-image.png`;
  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { property: "og:title", content: input.title },
      { property: "og:description", content: input.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { name: "twitter:title", content: input.title },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

