import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/marketing")({
  component: MarketingPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Marketing Digital para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Domine Google Ads, Meta Ads e SEO com aulas individuais em Ribeirão Preto. Do funil de marketing à gestão de campanhas com IA: forme-se especialista em tráfego pago.",
      path: "/adultos/cursos/marketing",
    }),
})

const COURSE_DATA = {
  nome: "Marketing Digital",
  categoria: "Marketing & Negócios",
  tagline: "Tráfego pago, SEO e conteúdo: a tríade que gera resultados reais",
  targetAudience: [
    "Empreendedor que quer aprender a atrair clientes pela internet sem depender de agência",
    "Profissional que quer migrar para a área de marketing digital e tráfego pago",
    "Analista de marketing que quer adicionar habilidades em Google Ads e Meta Ads ao currículo",
    "Freelancer que quer oferecer serviços completos de marketing digital para pequenas empresas",
    "Social media que quer ampliar o serviço para além da criação de conteúdo",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Entender o funil de marketing digital e criar campanhas básicas no Google Ads e Meta Ads com resultado mensurável.",
      modules: [
        {
          title: "Fundamentos do Marketing Digital",
          topics: [
            "Funil de marketing: awareness, consideração, conversão e fidelização",
            "Jornada do cliente e persona: criação com dados reais",
            "Diferença entre tráfego orgânico e pago",
            "Métricas essenciais: CPC, CPA, ROAS, CTR e CPM",
            "Google Analytics 4: configuração e leitura de relatórios básicos",
          ],
        },
        {
          title: "Google Ads — Primeiros Passos",
          topics: [
            "Estrutura de conta: campanhas, grupos de anúncio e palavras-chave",
            "Tipos de campanha: Search, Display, Shopping e Performance Max",
            "Correspondência de palavras-chave: ampla, frase e exata",
            "Criação de anúncio de busca com extensões",
            "Lances inteligentes: CPA alvo e ROAS alvo",
          ],
        },
        {
          title: "Meta Ads — Facebook e Instagram",
          topics: [
            "Configuração do Gerenciador de Anúncios e Business Manager",
            "Estrutura de campanha, conjunto de anúncios e anúncio",
            "Segmentação por interesse, comportamento e localização",
            "Criação de criativo: imagem, carrossel e vídeo",
            "Pixel do Meta: instalação e eventos personalizados",
          ],
        },
        {
          title: "SEO Básico",
          topics: [
            "Como o Google indexa e ranqueia páginas",
            "Pesquisa de palavras-chave com Google Keyword Planner",
            "On-page SEO: título, meta description, H1 e alt text",
            "Google Search Console: configuração e análise básica",
          ],
        },
      ],
      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "Google Analytics 4",
        "Google Search Console",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Gerenciar campanhas pagas completas no Google e Meta com otimização de ROAS, além de executar estratégia de conteúdo e e-mail marketing integrados.",
      modules: [
        {
          title: "Google Ads Avançado",
          topics: [
            "Campanhas Performance Max: estrutura e otimização",
            "YouTube Ads: TrueView, Bumper e Discovery",
            "Google Shopping: feed de produtos e estratégias de lance",
            "Audiences: remarketing, Customer Match e Similar Audiences",
            "Scripts e automação no Google Ads",
          ],
        },
        {
          title: "Meta Ads Avançado",
          topics: [
            "Advantage+ Shopping Campaigns e automação por IA",
            "Criação de públicos personalizados e lookalike",
            "Estratégias de remarketing com catálogo de produtos",
            "Testes A/B de criativos e copy em escala",
            "Análise de Attribution e modelos de atribuição",
          ],
        },
        {
          title: "E-mail Marketing",
          topics: [
            "Construção de lista com lead magnets e landing pages",
            "Fluxos de automação: boas-vindas, nutrição e carrinho abandonado",
            "Copywriting para e-mail: subject line, preheader e CTA",
            "Segmentação por comportamento e estágio no funil",
            "Análise de métricas: taxa de abertura, cliques e conversões",
          ],
        },
        {
          title: "SEO e Marketing de Conteúdo",
          topics: [
            "Estratégia de pillar pages e topic clusters",
            "Link building: técnicas white hat para autoridade de domínio",
            "SEO técnico: velocidade de página, Core Web Vitals e Schema",
            "Distribuição de conteúdo: blog, YouTube e redes sociais integrados",
          ],
        },
      ],
      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "RD Station",
        "Mailchimp",
        "Google Analytics 4",
        "SEMrush",
        "Hotjar",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Planejar e executar estratégias completas de marketing digital com IA, gerenciar budgets de clientes, criar relatórios executivos e atuar como especialista em tráfego pago ou gestor de marketing.",
      modules: [
        {
          title: "Google Ads Avançado",
          topics: [
            "Performance Max e IA Max: automação de campanhas com IA",
            "Demand Gen Campaigns: YouTube, Shorts, Discover e Gmail",
            "Scripts e automação para escala de campanhas",
            "Relatórios customizados no Looker Studio",
          ],
        },
        {
          title: "Meta Ads — Escala e ROAS",
          topics: [
            "Advantage+ e automação com IA da Meta",
            "Scaling horizontal e vertical de campanhas vencedoras",
            "CBO vs ABO: estratégias para diferentes budgets",
            "Attribution Window e análise de dados de conversão",
          ],
        },
        {
          title: "IA Aplicada ao Marketing Digital",
          topics: [
            "ChatGPT e Claude para geração de copy e estratégias",
            "Geração de criativos com Adobe Firefly e Midjourney",
            "Automação de relatórios com Make (Integromat) e Zapier",
            "Análise preditiva de campanhas com Google Meridian",
            "Personalização dinâmica de anúncios com IA",
            "Agentes de IA para monitoramento e otimização de campanhas",
          ],
        },
        {
          title: "Analytics e Tomada de Decisão por Dados",
          topics: [
            "Google Analytics 4: eventos customizados e conversões avançadas",
            "Looker Studio: dashboards executivos para clientes",
            "UTMs, data layers e tracking avançado",
            "ROI e modelagem de atribuição multi-touch",
          ],
        },
        {
          title: "Projeto e Certificações",
          topics: [
            "Planejamento de campanha 360° para empresa real com orçamento definido",
            "Gestão de R$5.000 em tráfego pago com otimização em tempo real",
            "Relatório executivo mensal com recomendações estratégicas",
            "Certificação Google Ads Search e Meta Blueprint (preparação)",
            "Montagem de portfólio com cases e resultados mensuráveis",
          ],
        },
      ],
      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "Google Analytics 4",
        "Looker Studio",
        "SEMrush",
        "RD Station",
        "Make",
        "ChatGPT",
        "Hotjar",
      ],
    },
  ],
}

function MarketingPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
