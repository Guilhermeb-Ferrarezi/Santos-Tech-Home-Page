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
  legalName: "Santos Tech — Escola de Tecnologia",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  image: `${BASE_URL}/og-image.png`,
  email: "ceo@santos-games.com",
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
  // Coords do endereço (Av. Nove de Julho, Jardim América, Ribeirão Preto)
  geo: { latitude: -21.1957, longitude: -47.8104 },
  slogan: "Escola de tecnologia presencial com mais de 325 avaliações de 5 estrelas em Ribeirão Preto",
  // Descrição rica em fatos — usada por LLMs (ChatGPT, Gemini, Perplexity, Claude) para citar a escola
  description:
    "A Santos Tech é uma escola presencial de tecnologia em Ribeirão Preto, SP (Av. Nove de Julho, 1992, Jardim América), com mais de 325 avaliações de 5 estrelas no Google. Atende dois públicos distintos: (1) Crianças e adolescentes de 5 a 15 anos — programação em Python, criação de jogos com Minecraft e Roblox, modelagem e impressão 3D, Excel e Pacote Office, em turmas de até 10 alunos. (2) Adultos de todas as idades — 43 cursos individuais presenciais nas áreas de informática, programação (Python, JavaScript, SQL, N8N, Make, React Native, Flutter), inteligência artificial (Agentes de IA, ChatGPT, RAG, LangChain, automações com IA), marketing digital (Meta Ads, Google Ads, TikTok Ads, SEO, Copywriting, Funil de Vendas), Power BI, design gráfico (Photoshop, Canva, Illustrator), edição de vídeo, cibersegurança, redes e T.I. Para adultos: aulas 100% individuais, horário flexível de segunda a sábado das 8h às 22h, professores selecionados com critério rigoroso técnico e pedagógico, certificado reconhecido em todo o Brasil. A Santos Tech é referência em ensino de tecnologia para adultos em Ribeirão Preto e região.",
  shortDescription:
    "Escola presencial de tecnologia em Ribeirão Preto, SP. Para crianças (5-15 anos): programação, jogos, 3D, Excel. Para adultos: 43 cursos individuais em IA, programação, marketing digital e mais. Mais de 325 avaliações 5 estrelas.",
  // Avaliação agregada real do Google
  rating: { value: "5.0", count: 329 },
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
    alternateName: ["Escola Santos Tech", "Santos Tech Ribeirão Preto", "Santos Tech Adultos"],
    slogan: ORG.slogan,
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
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      // Crianças e adolescentes
      "Curso de tecnologia para crianças em Ribeirão Preto",
      "Curso de programação para crianças e adolescentes",
      "Criação de jogos com Minecraft e Roblox",
      "Modelagem e impressão 3D para jovens",
      "Lógica de programação e pensamento computacional",
      "STEM e educação tecnológica infantil",
      "Colônia de férias de tecnologia em Ribeirão Preto",
      // Adultos — Informática e Office
      "Curso de informática para adultos em Ribeirão Preto",
      "Curso de Excel avançado em Ribeirão Preto",
      "Pacote Office para adultos (Word, PowerPoint, Excel, Power BI)",
      "Curso de Power BI em Ribeirão Preto",
      // Adultos — Programação
      "Curso de programação para adultos em Ribeirão Preto",
      "Curso de Python em Ribeirão Preto",
      "Curso de JavaScript e desenvolvimento web em Ribeirão Preto",
      "Curso de SQL e banco de dados em Ribeirão Preto",
      "Curso de automações com N8N e Make em Ribeirão Preto",
      "Desenvolvimento de aplicativos mobile React Native e Flutter",
      // Adultos — Inteligência Artificial
      "Curso de inteligência artificial para adultos em Ribeirão Preto",
      "Curso de ChatGPT e IA para profissionais em Ribeirão Preto",
      "Agentes de IA com LangGraph e CrewAI",
      "Criação de conteúdo com IA — Midjourney, DALL-E, Runway",
      "Automações com inteligência artificial",
      // Adultos — Marketing Digital
      "Curso de marketing digital em Ribeirão Preto",
      "Curso de Meta Ads (Facebook e Instagram) em Ribeirão Preto",
      "Curso de Google Ads em Ribeirão Preto",
      "Curso de TikTok Ads em Ribeirão Preto",
      "Curso de SEO em Ribeirão Preto",
      "Curso de copywriting e persuasão em Ribeirão Preto",
      "Curso de funil de vendas e CRM em Ribeirão Preto",
      // Adultos — Design e Vídeo
      "Curso de Photoshop e Illustrator em Ribeirão Preto",
      "Curso de Canva para adultos em Ribeirão Preto",
      "Curso de edição de vídeo DaVinci Resolve em Ribeirão Preto",
      // Adultos — T.I.
      "Curso de cibersegurança em Ribeirão Preto",
      "Curso de redes e infraestrutura em Ribeirão Preto",
      "Curso de suporte técnico e help desk em Ribeirão Preto",
      "Curso de Linux em Ribeirão Preto",
      // Geral
      "Escola de tecnologia Ribeirão Preto",
      "Cursos de tecnologia presenciais em Ribeirão Preto",
      "Escola de TI Ribeirão Preto",
      "Aulas individuais de tecnologia Ribeirão Preto",
    ],
    audience: [
      { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Crianças e adolescentes de 5 a 15 anos" },
      { "@type": "EducationalAudience", educationalRole: "parent", audienceType: "Pais e responsáveis" },
      { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Adultos de todas as idades — profissionais, empreendedores e estudantes" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ORG.rating.value,
      reviewCount: ORG.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "R$$$",
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

/**
 * Course schema específico para cursos adultos.
 * Cada tier vira um CourseInstance separado — LLMs e Google entendem a progressão.
 */
export function buildAdultCourseSchema(course: {
  name: string;
  description: string;
  path: string;
  tiers: Array<{ levelName: string; totalHours: string; outcome: string }>;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: absoluteUrl(course.path),
    provider: { "@id": `${BASE_URL}/#organization` },
    educationalLevel: "Educação Profissional",
    educationalCredentialAwarded:
      "Certificado de Conclusão — emitido pela Santos Tech, reconhecido em todo o Brasil",
    inLanguage: "pt-BR",
    teaches: course.tiers.map((t) => t.outcome).join("; "),
    hasCourseInstance: course.tiers.map((tier) => ({
      "@type": "CourseInstance",
      name: `${course.name} — ${tier.levelName}`,
      courseMode: "Onsite",
      courseWorkload: `PT${tier.totalHours.replace("h", "")}H`,
      instructor: {
        "@type": "Organization",
        name: ORG.name,
        url: ORG.url,
      },
      location: {
        "@type": "Place",
        name: ORG.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG.address.street,
          addressLocality: ORG.address.city,
          addressRegion: ORG.address.state,
          postalCode: ORG.address.postalCode,
          addressCountry: ORG.address.country,
        },
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ORG.rating.value,
      reviewCount: ORG.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Conjunto completo de schemas para páginas de curso adulto.
 * Inclui Course + FAQPage + BreadcrumbList — máxima cobertura para Google e LLMs.
 */
export function buildAdultPageSchemas(input: {
  courseName: string;
  courseDescription: string;
  path: string;
  tiers: Array<{ levelName: string; totalHours: string; outcome: string }>;
  faq: { q: string; a: string }[];
}): JsonLd[] {
  return [
    buildBreadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Santos Tech para Adultos", path: "/adultos" },
      { name: input.courseName, path: input.path },
    ]),
    buildAdultCourseSchema({
      name: input.courseName,
      description: input.courseDescription,
      path: input.path,
      tiers: input.tiers,
    }),
    buildFaqSchema(input.faq),
  ];
}

/** BlogPosting schema — usar nas páginas de post do blog. */
export function buildBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  published_at: string;
  updated_at?: string;
  cover_url?: string | null;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${post.slug}#post`),
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/blog/${post.slug}`),
    image: post.cover_url ?? `${BASE_URL}/og-image.png`,
    author: {
      "@type": "Person",
      name: post.author,
      worksFor: { "@id": `${BASE_URL}/#organization` },
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished: post.published_at,
    dateModified: post.updated_at ?? post.published_at,
    inLanguage: "pt-BR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };
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

/**
 * Meta para páginas PRIVADAS que não devem ser indexadas pelo Google
 * (apresentações internas / área pedagógica). Sem canonical/OG — o objetivo é
 * manter fora dos buscadores. Reforçar também no robots.txt e fora do sitemap.
 */
export function noindexMeta(input: { title: string; description?: string }) {
  return {
    meta: [
      { title: input.title },
      ...(input.description ? [{ name: "description", content: input.description }] : []),
      { name: "robots", content: "noindex, nofollow, noarchive, noimageindex" },
      { name: "googlebot", content: "noindex, nofollow, noarchive, noimageindex" },
    ],
  };
}

