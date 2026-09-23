import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/seo")({
  component: SeoPage,
  head: () =>
    pageMeta({
      title: "Curso de SEO Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda SEO do zero ao avançado em Ribeirão Preto: rankeie no Google, atraia tráfego orgânico e cresça sem depender de anúncios pagos.",
      path: "/particular/cursos/seo",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "SEO — Otimização para Buscadores",
  categoria: "Marketing & Negócios",
  tema: "marketing" as const,
  logo: "seo",
  variante: "seo",
  tagline:
    "Apareça na primeira página do Google e conquiste clientes sem pagar por clique",
  targetAudience: [
    "Você tem um negócio ou site e não aparece nas buscas do Google",
    "Você gasta com anúncios pagos e quer reduzir o custo de aquisição de clientes",
    "Você produz conteúdo mas não entende por que não recebe tráfego orgânico",
    "Você é profissional de marketing e quer adicionar SEO ao seu portfólio",
    "Você quer trabalhar como freelancer ou consultor de SEO em 2025",
    "Você quer entender como a inteligência artificial está mudando as buscas e o SEO",
  ],
  tiers: [
    {
      levelName: "SEO",
      ctaLabel: "curso de SEO",
      totalHours: "48h",
      outcome:
        "Dominar SEO do zero absoluto até a liderança de projetos com inteligência artificial: otimizar páginas e conteúdo para rankeamento orgânico, executar auditorias técnicas completas, construir autoridade com link building, rankear negócios locais e escalar resultados em e-commerce, e entregar relatórios executivos com atribuição de receita — pronto para atuar como profissional ou consultor de SEO no mercado.",
      modules: [
        {
          title: "Fundamentos de SEO e Pesquisa de Palavras-Chave",
          topics: [
            "Crawling, indexação e renderização: como o Googlebot lê e interpreta seu site",
            "E-E-A-T (Experiência, Especialidade, Autoridade e Confiabilidade) e Core Web Vitals como fatores de ranking",
            "SERP features — featured snippets, People Also Ask e AI Overview — e SEO orgânico versus anúncios pagos",
            "Intenção de busca: informacional, navegacional, transacional e comercial",
            "Volume de busca, dificuldade de keyword, CPC e long-tail versus head keywords",
            "Ferramentas gratuitas de pesquisa (Google Keyword Planner e Search Console) e mapeamento de palavras-chave por página",
          ],
        },
        {
          title: "SEO On-Page e Otimização de Conteúdo",
          topics: [
            "Title tag, meta description e hierarquia de headings H1–H4 com estrutura semântica",
            "URLs amigáveis, alt text em imagens e densidade natural de keywords",
            "Estrutura de conteúdo otimizada para featured snippets e FAQ markup",
            "LSI keywords, termos semanticamente relacionados e estrutura de artigo do briefing ao publish",
            "Links internos: distribuindo autoridade entre as páginas do site",
            "Comprimento ideal de conteúdo por tipo de página, auditoria e otimização de conteúdo já publicado",
          ],
        },
        {
          title: "SEO Técnico: do Básico ao Avançado",
          topics: [
            "PageSpeed e Core Web Vitals na prática: LCP, CLS e INP",
            "Sitemaps XML, robots.txt, canonical, hreflang, HTTPS e redirecionamentos 301/302",
            "Crawl de site completo com Screaming Frog: identificando e corrigindo erros de indexação",
            "Google Search Console e Screaming Frog integrados: cobertura de páginas, relatório de desempenho e diagnóstico avançado de Core Web Vitals, conectado ao Google Analytics 4",
            "JavaScript SEO (React, Next.js e SPAs) e Schema Markup JSON-LD",
            "Log file analysis e crawl budget optimization para sites de grande porte",
          ],
        },
        {
          title: "Autoridade de Domínio, Link Building e SEO Local",
          topics: [
            "Domain Authority e Domain Rating: o que realmente importa pra autoridade do site",
            "Guest post, HARO e broken link building: prospecção e abordagem de parcerias de link",
            "Backlinks tóxicos: identificação, disavow e monitoramento do perfil com Ahrefs e SEMrush",
            "Google Business Profile: categoria, fotos, posts e gerenciamento de avaliações",
            "NAP consistency, citações locais e estratégias de rankeamento no Google Maps e Local Pack",
          ],
        },
        {
          title: "Análise Competitiva, Estratégia de Conteúdo e E-commerce",
          topics: [
            "Análise de domínios concorrentes e keyword gap com SEMrush e Ahrefs",
            "Reverse engineering de páginas top 3 e SERP analysis para priorizar ações por volume, dificuldade e ROI",
            "Topic Clusters, Pillar Pages e calendário editorial alinhado à jornada de compra",
            "Content refresh e blog corporativo como canal de aquisição orgânica, com métricas de conteúdo (tempo na página, scroll depth e conversão orgânica)",
            "SEO para e-commerce: páginas de categoria e produto, e faceted navigation sem canibalização de conteúdo",
            "SEO para marketplace (Amazon, Mercado Livre), estratégia multi-país/multi-idioma com hreflang avançado e rich results (preço, avaliações, disponibilidade)",
          ],
        },
        {
          title: "IA Aplicada ao SEO, Relatórios Executivos e Projeto Final",
          topics: [
            "ChatGPT para clustering de keywords e meta descriptions em escala, e Surfer SEO para otimização de conteúdo guiada por dados de SERP",
            "Otimização para AI Overviews do Google e riscos do conteúdo gerado por IA — como evitar penalizações",
            "Automação de relatórios e auditorias com IA e scripts Python básicos",
            "Looker Studio integrado ao Search Console: dashboards executivos e atribuição de receita ao canal orgânico no GA4",
            "Forecasting de tráfego e receita, e como medir e comunicar o impacto de Google Core Updates no negócio",
            "KPIs de SEO por tipo de negócio (e-commerce, SaaS, local e editorial) e projeto final: auditoria completa, plano de conteúdo, proposta de link building, roadmap de 90 dias e apresentação estruturada da estratégia",
          ],
        },
      ],
      tools: [
        "Google Search Console",
        "Google Analytics 4",
        "PageSpeed Insights",
        "Yoast SEO",
        "Screaming Frog",
        "SEMrush",
        "Ahrefs",
        "ChatGPT",
        "Surfer SEO",
        "Looker Studio",
      ],
    },
  ],
  faqItems: [
    {
      q: "Esse curso vale a pena mesmo se eu já invisto em anúncios pagos?",
      a: "Vale, e é justamente pra quem quer reduzir a dependência de anúncios pagos. O curso ensina a construir tráfego orgânico sustentável — desde como o Google indexa seu site até estratégias avançadas de conteúdo — pra você gastar menos com cliques e ainda assim atrair clientes.",
    },
    {
      q: "O curso ensina SEO local pra negócio físico?",
      a: "Sim. Você aprende a otimizar o Google Business Profile, gerenciar avaliações, manter NAP consistente (nome, endereço e telefone uniformes na web) e aplicar estratégias pra rankear no Google Maps e no Local Pack.",
    },
  ],
}

function SeoPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
