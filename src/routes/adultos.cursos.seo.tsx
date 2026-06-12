import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/seo")({
  component: SeoPage,
  head: () =>
    pageMeta({
      title: "Curso de SEO para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda SEO do zero ao avançado em Ribeirão Preto: rankeie no Google, atraia tráfego orgânico e cresça sem depender de anúncios pagos.",
      path: "/adultos/cursos/seo",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "SEO — Otimização para Buscadores",
  categoria: "Marketing & Negócios",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Otimizar páginas e conteúdos para rankeamento orgânico e monitorar resultados no Google Search Console",
      modules: [
        {
          title: "Como o Google Funciona",
          topics: [
            "Crawling, indexação e renderização: como o Googlebot lê seu site",
            "E-E-A-T: Experiência, Especialidade, Autoridade e Confiabilidade",
            "Core Web Vitals e sua influência no ranking",
            "SERP features: featured snippets, People Also Ask e AI Overview",
            "SEO orgânico versus anúncios pagos: quando usar cada estratégia",
          ],
        },
        {
          title: "Pesquisa de Palavras-Chave",
          topics: [
            "Intenção de busca: informacional, navegacional, transacional e comercial",
            "Volume de busca, dificuldade de keyword e CPC: como interpretar",
            "Long-tail versus head keywords: oportunidades e estratégias",
            "Ferramentas gratuitas: Google Keyword Planner e Search Console",
            "Mapeando palavras-chave para páginas do site",
          ],
        },
        {
          title: "SEO On-Page Essencial",
          topics: [
            "Title tag e meta description: escrevendo para humanos e para o Google",
            "Hierarquia de headings H1–H4 e estrutura semântica",
            "URLs amigáveis, alt text em imagens e densidade natural de keywords",
            "Estrutura de conteúdo otimizada para featured snippets",
            "Links internos: distribuindo autoridade entre as páginas do site",
          ],
        },
        {
          title: "Conteúdo Otimizado para SEO",
          topics: [
            "LSI keywords e termos semanticamente relacionados",
            "Estrutura de artigo para rankeamento: do briefing ao publish",
            "Comprimento ideal de conteúdo por tipo de página",
            "FAQ markup e como conquistar o box de perguntas frequentes",
            "Auditoria e otimização de conteúdo já publicado",
          ],
        },
        {
          title: "Google Search Console e Analytics",
          topics: [
            "Verificando indexação e cobertura de páginas no Search Console",
            "Relatório de desempenho: cliques, impressões, CTR e posição média",
            "Diagnóstico de Core Web Vitals diretamente no Search Console",
            "Conectando Google Analytics 4 ao Search Console",
            "Interpretando dados para priorizar ações de SEO",
          ],
        },
      ],
      tools: ["Google Search Console", "Google Analytics 4", "PageSpeed Insights", "Yoast SEO"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Executar auditorias técnicas, construir autoridade com link building e dominar SEO local e análise competitiva",
      modules: [
        {
          title: "SEO Técnico",
          topics: [
            "PageSpeed e Core Web Vitals: LCP, CLS e INP na prática",
            "Sitemaps XML, robots.txt, canonical e hreflang",
            "HTTPS, estrutura de URLs e configuração de redirecionamentos 301/302",
            "Crawl de site completo com Screaming Frog: identificando erros críticos",
            "Diagnóstico e correção de páginas com problemas de indexação",
          ],
        },
        {
          title: "Link Building e Autoridade de Domínio",
          topics: [
            "Domain Authority e Domain Rating: o que realmente importa",
            "Guest post, HARO e broken link building: estratégias éticas e escaláveis",
            "Como prospectar e abordar sites para parcerias de link",
            "Identificando e descartando backlinks tóxicos com disavow",
            "Monitorando o perfil de backlinks com Ahrefs e SEMrush",
          ],
        },
        {
          title: "SEO Local",
          topics: [
            "Otimização completa do Google Business Profile: categoria, fotos e posts",
            "Gerenciamento de avaliações: respondendo e incentivando reviews",
            "NAP consistency: nome, endereço e telefone uniformes na web",
            "Citações locais: diretórios e plataformas relevantes por nicho",
            "Estratégias para rankeamento no Google Maps e Local Pack",
          ],
        },
        {
          title: "Análise da Concorrência e Gap de Conteúdo",
          topics: [
            "Análise de domínios concorrentes com SEMrush e Ahrefs",
            "Keyword gap: encontrando palavras-chave que o concorrente rankeie e você não",
            "Reverse engineering de páginas top 3 para entender o que o Google prioriza",
            "SERP analysis: identificando oportunidades de featured snippets e PAA",
            "Priorizando ações com base em volume, dificuldade e ROI estimado",
          ],
        },
        {
          title: "Estratégia de Conteúdo e Clusters",
          topics: [
            "Topic Clusters e Pillar Pages: arquitetura de autoridade temática",
            "Calendário editorial alinhado à jornada de compra e intenção de busca",
            "Content refresh: atualizando conteúdo antigo para recuperar posições",
            "Blog corporativo como canal de aquisição orgânica sustentável",
            "Métricas de conteúdo: tempo na página, scroll depth e conversão orgânica",
          ],
        },
      ],
      tools: ["Screaming Frog", "SEMrush", "Ahrefs", "Google Search Console", "Google Analytics 4", "PageSpeed Insights"],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Liderar projetos de SEO com IA, executar auditorias completas, escalar resultados em e-commerce e entregar relatórios executivos com atribuição de receita",
      modules: [
        {
          title: "IA Aplicada ao SEO",
          topics: [
            "ChatGPT para clustering de keywords e geração de meta descriptions em escala",
            "Surfer SEO: otimização de conteúdo guiada por dados de SERP",
            "Otimização para AI Overviews do Google: o que muda na estratégia",
            "Riscos do conteúdo gerado por IA e como evitar penalizações",
            "Automação de relatórios e auditorias com IA e scripts Python básicos",
          ],
        },
        {
          title: "SEO Técnico Avançado",
          topics: [
            "JavaScript SEO: como o Google renderiza React, Next.js e SPAs",
            "Schema Markup JSON-LD: tipos, implementação e validação",
            "Log file analysis: entendendo o comportamento real do Googlebot",
            "Crawl budget optimization para sites de grande porte",
            "Diagnóstico avançado com Google Search Console e Screaming Frog integrados",
          ],
        },
        {
          title: "SEO para E-commerce",
          topics: [
            "Otimização de páginas de categoria e produto para conversão e ranking",
            "Faceted navigation: filtros sem canibalização e duplicidade de conteúdo",
            "SEO para marketplace: Amazon, Mercado Livre e estratégia omnichannel",
            "Estratégia multi-país e multi-idioma com hreflang avançado",
            "Rich results para e-commerce: preço, avaliações e disponibilidade no SERP",
          ],
        },
        {
          title: "Análise Avançada e Relatórios Executivos",
          topics: [
            "Looker Studio + Search Console: construindo dashboards para diretores",
            "Atribuição de receita ao canal orgânico no GA4",
            "Forecasting de tráfego e receita com base em posicionamento atual",
            "Medindo e comunicando o impacto de Google Core Updates no negócio",
            "KPIs de SEO por tipo de negócio: e-commerce, SaaS, local e editorial",
          ],
        },
        {
          title: "Projeto Final: Auditoria e Estratégia Completa",
          topics: [
            "Auditoria técnica e on-page de site real com relatório estruturado",
            "Plano de conteúdo baseado em clusters e gap de palavras-chave identificado",
            "Proposta de link building: alvos, abordagem e métricas de sucesso",
            "Roadmap de 90 dias com prioridades, responsáveis e projeção de resultado",
            "Apresentação da estratégia para banca: feedback e ajustes finais",
          ],
        },
      ],
      tools: [
        "ChatGPT",
        "Surfer SEO",
        "SEMrush",
        "Ahrefs",
        "Screaming Frog",
        "Google Search Console",
        "Google Analytics 4",
        "Looker Studio",
        "PageSpeed Insights",
        "Yoast SEO",
      ],
    },
  ],
}

function SeoPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
