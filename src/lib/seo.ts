/**
 * SEO + GEO helpers — schema.org JSON-LD + canonical URLs.
 *
 * **Por que JSON-LD em vez de microdata:** Schema.org via JSON-LD é o formato
 * preferido pelo Google e por LLMs (ChatGPT, Perplexity, Claude com web
 * search). O ganho hoje é **semântico** — o buscador e a IA entendem quem é a
 * escola, o que cada curso ensina e onde fica —, não um enfeite na busca: o rich
 * result de FAQ saiu do Google em 07/05/2026, o sitelinks search box em 11/2024
 * e o "Course info" também foi descontinuado.
 *
 * **Cobertura:**
 * - EducationalOrganization + LocalBusiness e WebSite **completos só na home**
 *   (`__root.tsx`); nas outras páginas a escola aparece pela referência curta
 *   `ORG_REF` (mesmo `@id`), dentro do `provider` do Course
 * - Course em cada página de curso
 * - FAQPage **só onde o FAQ está visível na página** (a marcação espelha o texto)
 * - BreadcrumbList pra navegação; ItemList nos hubs que listam cursos
 *
 * ⚠️ Só marcar o que o visitante vê na página e só propriedades definidas para o
 * tipo (validar em https://validator.schema.org). Nada de nota da escola dentro do
 * curso, nem avaliação autodeclarada (políticas do Google para review snippet).
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
    "A Santos Tech é uma escola presencial de tecnologia em Ribeirão Preto, SP (Av. Nove de Julho, 1992, Jardim América), com mais de 325 avaliações de 5 estrelas no Google. Atende dois públicos distintos: (1) Crianças e adolescentes de 5 a 15 anos — programação em Python, criação de jogos com Minecraft e Roblox, modelagem e impressão 3D, Excel e Pacote Office, em turmas de até 10 alunos. (2) Cursos particulares (individuais) para todas as idades — 52 cursos presenciais nas áreas de informática, programação (Python, JavaScript, SQL, N8N, Make, React Native), inteligência artificial (Agentes de IA, ChatGPT, RAG, LangChain, automações com IA), marketing digital (Meta Ads, Google Ads, TikTok Ads, SEO, Copywriting, Funil de Vendas), Power BI, design gráfico (Photoshop, Canva, Illustrator), edição de vídeo, cibersegurança, redes e T.I. Nos cursos particulares: aulas 100% individuais, horário flexível de segunda a sábado das 8h às 22h, professores selecionados com critério rigoroso técnico e pedagógico, certificado de conclusão emitido pela Santos Tech. A Santos Tech é referência em ensino de tecnologia particular em Ribeirão Preto e região.",
  shortDescription:
    "Escola presencial de tecnologia em Ribeirão Preto, SP. Para crianças (5-15 anos): programação, jogos, 3D, Excel. Cursos particulares: 52 cursos individuais em IA, programação, marketing digital e mais. Mais de 325 avaliações 5 estrelas.",
  // Avaliação agregada real do Google — só para TEXTO VISÍVEL. Não vai para o
  // JSON-LD: nota que a própria escola declara sobre si não é elegível a estrelas
  // (Google, review snippet), e copiá-la em cada curso seria marcação enganosa.
  rating: { value: "5.0", count: 329 },
} as const;

// ──────────────────────────────────────────────────────────────────────────
// SCHEMA.ORG BUILDERS
// ──────────────────────────────────────────────────────────────────────────

type JsonLd = Record<string, unknown>;

const ORG_ID = `${BASE_URL}/#organization`;
const ORG_TYPES = ["EducationalOrganization", "LocalBusiness"];

/**
 * Referência curta à escola, para usar dentro de outros nós (`provider`, `publisher`).
 * O nó completo só sai na home; este traz `@type`, `@id`, `name` e `url` para que a
 * página continue autossuficiente (o `@id` liga os dois quando o grafo é unido).
 * Tipo só EducationalOrganization de propósito: um LocalBusiness sem `address` seria
 * lido pelo Google como negócio local incompleto em toda página de curso.
 */
const ORG_REF: JsonLd = {
  "@type": "EducationalOrganization",
  "@id": ORG_ID,
  name: ORG.name,
  url: ORG.url,
};

/** EducationalOrganization + LocalBusiness completo — emitido só na home (`__root.tsx`). */
export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ORG_TYPES,
    "@id": ORG_ID,
    name: ORG.name,
    legalName: ORG.legalName,
    alternateName: ["Escola Santos Tech", "Santos Tech Particular"],
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
    // Tópicos que a escola ensina — curtos, sem cidade e sem "Curso de": a
    // localização já está em `address`, `geo` e `areaServed`. Lista longa de frases
    // de busca com "em Ribeirão Preto" é keyword stuffing (políticas de spam do Google).
    knowsAbout: [
      "Programação para crianças",
      "Criação de jogos digitais",
      "Modelagem e impressão 3D",
      "Informática",
      "Pacote Office",
      "Excel",
      "Power BI",
      "Python",
      "Inteligência artificial",
      "Marketing digital",
      "Design gráfico",
      "Cibersegurança",
    ],
    // Sem `audience`: não é propriedade de Organization (o validator acusa). O público
    // de cada curso vai no próprio Course. Sem `aggregateRating`: ver `ORG.rating`.
    priceRange: "R$$$",
  };
}

/**
 * WebSite schema — dá ao Google o nome do site (site names) e liga o site à escola.
 * Emitido só na home. (O sitelinks search box, que usava este nó, saiu em 11/2024.)
 */
export function buildWebSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: ORG.name,
    description: ORG.shortDescription,
    inLanguage: "pt-BR",
    publisher: ORG_REF,
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
    provider: ORG_REF,
    educationalLevel: "Educação básica",
    inLanguage: "pt-BR",
    ...(input.ageMin && input.ageMax
      ? {
          typicalAgeRange: `${input.ageMin}-${input.ageMax}`,
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            audienceType: `Alunos de ${input.ageMin} a ${input.ageMax} anos`,
          },
        }
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

/**
 * FAQPage schema — só em página cujo FAQ está VISÍVEL (as mesmas perguntas e
 * respostas do texto). Não rende mais rich result no Google (saiu em 07/05/2026):
 * fica como dado semântico para buscadores e LLMs. Não migrar para QAPage.
 */
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

/**
 * ItemList de cursos — para hubs que listam cursos com página própria.
 * Formato "página-resumo" do Google: cada ListItem aponta para o curso (`position` +
 * `url` igual ao canonical e ao sitemap) e o Course completo fica na página dele. O
 * `name` deixa buscadores e LLMs lerem a lista sem abrir cada página. O carrossel
 * "Course list" só aparece em inglês: o ganho aqui é consistência de entidade.
 */
export function buildCourseListSchema(input: {
  /** Nome da lista (ex.: "Cursos particulares da Santos Tech"). */
  name: string;
  /** Cursos na ordem em que a página mostra. */
  items: { name: string; path: string }[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(item.path),
      name: item.name,
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
 * Course (curso específico) e FAQPage (se faq passado — o mesmo FAQ que a
 * página mostra no <FaqSection>).
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
  /** FAQ visível da página, pra gerar o FAQPage. Opcional. */
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
 * Course schema específico para cursos particulares.
 * Cada tier vira um CourseInstance separado — LLMs e Google entendem a progressão.
 *
 * Sem `instructor`: `CourseInstance.instructor` só aceita Person (o validator acusa
 * erro com Organization) e a página não nomeia professor — quem dá o curso já está
 * no `provider`. Usar Person só quando houver professor nomeado e visível na página.
 * Sem `aggregateRating`: a nota é da escola, não do curso (ver `ORG.rating`).
 */
export function buildParticularCourseSchema(course: {
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
    provider: ORG_REF,
    educationalCredentialAwarded:
      "Certificado de Conclusão — emitido pela Santos Tech",
    inLanguage: "pt-BR",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Todas as idades — profissionais, empreendedores e estudantes, em aulas individuais",
    },
    teaches: course.tiers.map((t) => t.outcome).join("; "),
    hasCourseInstance: course.tiers.map((tier) => ({
      "@type": "CourseInstance",
      name: course.tiers.length > 1 ? `${course.name} — ${tier.levelName}` : course.name,
      courseMode: "Onsite",
      courseWorkload: `PT${tier.totalHours.replace("h", "")}H`,
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
  };
}

/**
 * Conjunto completo de schemas para páginas de curso particular:
 * BreadcrumbList + Course + FAQPage. O `faq` tem de ser o mesmo que a página
 * mostra (o FAQ do curso é visível na página).
 */
export function buildParticularPageSchemas(input: {
  courseName: string;
  courseDescription: string;
  path: string;
  tiers: Array<{ levelName: string; totalHours: string; outcome: string }>;
  faq: { q: string; a: string }[];
}): JsonLd[] {
  return [
    buildBreadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Santos Tech Particular", path: "/particular" },
      { name: input.courseName, path: input.path },
    ]),
    buildParticularCourseSchema({
      name: input.courseName,
      description: input.courseDescription,
      path: input.path,
      tiers: input.tiers,
    }),
    buildFaqSchema(input.faq),
  ];
}

/**
 * Infere o caminho da imagem de OG pela convenção de pastas (sem precisar
 * declarar `ogImage` rota por rota — script `scripts/generate-og-images.mjs`
 * gera as imagens seguindo essa mesma convenção a partir do slug da rota):
 * - `/particular/cursos/<slug>` → `/og/particular/<slug>.png`
 * - `/cursos/(create|junior|camps|academies)[/<faixa>]` → `/og/infantil/<slug>.png`
 * - qualquer outra rota → `/og-image.png` (capa institucional genérica)
 */
function inferOgImagePath(path: string): string {
  const particularMatch = path.match(/^\/particular\/cursos\/([^/]+)\/?$/);
  if (particularMatch) return `/og/particular/${particularMatch[1]}.png`;

  const kidsMatch = path.match(/^\/cursos\/(create|junior|camps|academies)(?:\/([^/]+))?\/?$/);
  if (kidsMatch) {
    const [, program, faixa] = kidsMatch;
    const slug = faixa ? `${program}-${faixa}` : program;
    return `/og/infantil/${slug}.png`;
  }

  return "/og-image.png";
}

/** Gera meta tags básicas + canonical pra uma rota. */
export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  /** Override do OG image (default: inferido pela convenção, ver `inferOgImagePath`). */
  ogImage?: string;
}) {
  const canonical = absoluteUrl(input.path);
  const ogImage = input.ogImage ?? absoluteUrl(inferOgImagePath(input.path));
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

