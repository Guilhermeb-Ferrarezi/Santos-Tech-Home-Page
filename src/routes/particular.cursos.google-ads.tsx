import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/google-ads")({
  component: GoogleAdsPage,
  head: () =>
    pageMeta({
      title: "Curso de Google Ads para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar e otimizar campanhas no Google Ads em Ribeirão Preto. Do básico ao avançado com IA, Performance Max e gestão profissional de mídia paga.",
      path: "/adultos/cursos/google-ads",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Google Ads",
  categoria: "Marketing & Negócios",
  tagline:
    "Apareça no topo do Google exatamente quando seu cliente está pronto para comprar",
  targetAudience: [
    "Você tem um negócio local em Ribeirão Preto e quer gerar mais clientes sem depender de indicação",
    "Você já tentou impulsionar posts nas redes sociais e não viu resultado concreto nas vendas",
    "Você quer entender por que seu concorrente aparece antes de você no Google e como mudar isso",
    "Você é profissional de marketing e precisa dominar mídia paga para avançar na carreira",
    "Você quer gerenciar o orçamento de anúncios com estratégia, sem desperdiçar verba em cliques irrelevantes",
    "Você busca uma habilidade técnica valorizada para oferecer como serviço freelancer ou em agências",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar e publicar campanhas de Search com segmentação correta, acompanhar conversões e fazer as primeiras otimizações com base em dados reais",
      modules: [
        {
          title: "Estrutura do Google Ads",
          topics: [
            "Hierarquia de conta, campanha, grupo de anúncios e anúncio",
            "Vinculação entre Google Ads e Google Analytics 4",
            "Navegação no painel: visão geral, relatórios e configurações",
            "Criação e configuração inicial de uma conta Google Ads",
            "Faturamento, limites de gastos e alertas de orçamento",
          ],
        },
        {
          title: "Campanhas de Search",
          topics: [
            "Tipos de correspondência de palavras-chave: ampla, frase e exata",
            "Uso do Planejador de Palavras-chave para pesquisa e volume",
            "Segmentação geográfica por cidade, raio e região",
            "Segmentação por dispositivo, idioma e programação de anúncios",
            "Organização de grupos de anúncios por tema e intenção de busca",
          ],
        },
        {
          title: "Anúncios Responsive Search (RSA)",
          topics: [
            "Estrutura de títulos e descrições em anúncios responsivos",
            "Estratégias para maximizar o Ad Strength do anúncio",
            "Extensões de sitelink: criação e boas práticas",
            "Extensões de chamada, destaque e estrutura de frase",
            "Testes A/B de anúncios e análise de desempenho por variação",
          ],
        },
        {
          title: "Conversões e Estratégias de Lance",
          topics: [
            "Configuração de acompanhamento de conversões via Google Tag",
            "Lance manual de CPC: quando e como usar",
            "Estratégia Maximizar Cliques e seus casos de uso",
            "Índice de qualidade: relevância, CTR esperado e experiência na página",
            "Leitura do relatório de desempenho de conversões",
          ],
        },
        {
          title: "Análise e Primeiras Otimizações",
          topics: [
            "Relatório de termos de pesquisa: o que os usuários realmente digitaram",
            "Adição de palavras-chave negativas para filtrar tráfego irrelevante",
            "Ajuste de lances por dispositivo, horário e localização",
            "Auction Insights: analisando a concorrência no leilão",
            "Checklist semanal de otimização para campanhas Search",
          ],
        },
      ],
      tools: ["Google Ads", "Google Analytics 4", "Google Keyword Planner", "Google Tag Manager"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Gerenciar campanhas de Display, YouTube e Shopping, aplicar Smart Bidding com confiança e construir relatórios profissionais no Looker Studio",
      modules: [
        {
          title: "Rede de Display",
          topics: [
            "Responsive Display Ads: assets de imagem, logo e texto",
            "Segmentação por contexto, interesse, tópico e posicionamento",
            "Criação de listas de remarketing e segmentação de visitantes",
            "Exclusão de posicionamentos e categorias de conteúdo sensível",
            "Métricas de Display: impressões, viewability, frequência e alcance",
          ],
        },
        {
          title: "YouTube Ads",
          topics: [
            "Formatos In-stream puláveis, não-puláveis e Bumper Ads",
            "Anúncios In-feed e campanhas de geração de interesse",
            "Segmentação por canal, vídeo, interesse e eventos de vida",
            "View-through conversions e atribuição de conversões em vídeo",
            "Métricas-chave: view rate, CPV, earned actions e brand lift",
          ],
        },
        {
          title: "Google Shopping e Merchant Center",
          topics: [
            "Criação e estruturação de feed de produtos no Merchant Center",
            "Diferenças entre Shopping Standard e Performance Max",
            "Segmentação por categoria, marca, ID de produto e preço",
            "Estratégia de lances ROAS em campanhas Shopping",
            "Diagnóstico de produtos reprovados e correção de feed",
          ],
        },
        {
          title: "Smart Bidding Avançado",
          topics: [
            "Target CPA: configuração, metas realistas e período de aprendizado",
            "Target ROAS: cálculo, histórico mínimo necessário e ajustes",
            "Maximizar Conversões vs Maximizar Valor de Conversão",
            "Como interpretar o período de aprendizado e evitar oscilações",
            "Quando manter lance manual e quando migrar para automação",
          ],
        },
        {
          title: "Estrutura Avançada e Relatórios",
          topics: [
            "Labels para organizar campanhas, grupos e palavras-chave",
            "Segmentação por intenção personalizada e públicos combinados",
            "Scripts básicos do Google Ads para alertas de desempenho",
            "Criação de dashboards no Looker Studio conectado ao Google Ads",
            "Análise de share of voice e oportunidades de crescimento",
          ],
        },
      ],
      tools: [
        "Google Ads",
        "Google Analytics 4",
        "Google Tag Manager",
        "Google Merchant Center",
        "Looker Studio",
        "Google Ads Editor",
        "SEMrush",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Gerenciar contas de múltiplos clientes via MCC, automatizar operações com Scripts, dominar Performance Max com IA e entregar relatórios estratégicos de alto nível",
      modules: [
        {
          title: "Performance Max — Estratégia e Otimização",
          topics: [
            "Asset Groups: criação, organização e sinais de público-alvo",
            "Como a IA do Google distribui orçamento entre canais no PMax",
            "Exclusões de palavras-chave e listas de segmentos em PMax",
            "Leitura do relatório de Insights e categorias de pesquisa",
            "PMax vs Search: quando combinar e como evitar canibalização",
          ],
        },
        {
          title: "Demand Gen e Funil Completo",
          topics: [
            "Demand Gen: formato, canais (YouTube, Display, Discover) e objetivos",
            "Estratégia de funil completo: topo awareness, meio consideração, fundo conversão",
            "Distribuição de orçamento por etapa do funil e ajuste de sazonalidade",
            "Lookalike audiences e expansão de público com IA no Demand Gen",
            "Mensuração de impacto de campanhas de topo de funil com Brand Lift",
          ],
        },
        {
          title: "Scripts e Automação Avançada",
          topics: [
            "Introdução ao Google Ads Scripts: estrutura, autenticação e execução",
            "Scripts para alertas de CPA acima do limite e queda de conversões",
            "Regras automáticas para pausar anúncios e ajustar lances por desempenho",
            "Integração entre Google Ads Scripts e Google Sheets para relatórios",
            "Bulk operations com Google Ads Editor: importação, exportação e edição em massa",
          ],
        },
        {
          title: "GTM Avançado e Atribuição",
          topics: [
            "Triggers e variáveis avançadas no Google Tag Manager",
            "Eventos personalizados para compras, formulários e scroll depth",
            "Modelo de atribuição data-driven vs last-click no Google Ads",
            "Cross-channel attribution no GA4: relatório de caminhos de conversão",
            "Privacidade e cookies: consent mode v2 e impacto na mensuração",
          ],
        },
        {
          title: "Gestão em Agência",
          topics: [
            "MCC (My Client Center): estrutura, acesso e gerenciamento multi-conta",
            "Construção de relatórios executivos no Looker Studio para clientes",
            "Comunicação estratégica de resultados: métricas de negócio vs métricas de mídia",
            "Precificação de gestão de mídia paga: modelos fixo, percentual e híbrido",
            "Onboarding de novos clientes: auditoria de conta, briefing e planejamento inicial",
          ],
        },
      ],
      tools: [
        "Google Ads",
        "Google Analytics 4",
        "Google Tag Manager",
        "Google Merchant Center",
        "Google Keyword Planner",
        "Looker Studio",
        "Google Ads Editor",
        "Google Ads Scripts",
        "SEMrush",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já ter experiência com marketing digital pra começar?",
      a: "Não. O curso parte da estrutura básica do Google Ads — conta, campanha, grupo de anúncios — e da criação das primeiras campanhas de Search com acompanhamento de conversão. Se você só impulsionou post em rede social e não viu resultado em vendas, é esse o ponto de partida.",
    },
    {
      q: "Qual a diferença entre os três níveis?",
      a: "Essencial ensina a criar e publicar campanhas de Search com segmentação e conversões configuradas. Intermediário expande pra Display, YouTube, Shopping e Smart Bidding, com relatórios no Looker Studio. Profissional + IA foca em Performance Max, Demand Gen, Scripts de automação e gestão de múltiplas contas de cliente via MCC — o nível de quem vai gerenciar mídia paga como agência ou freelancer.",
    },
    {
      q: "O curso serve pra quem quer oferecer gestão de tráfego pago como serviço?",
      a: "Sim, o Profissional + IA foi pensado pra isso: MCC para gerenciar contas de vários clientes, relatórios executivos no Looker Studio, modelos de precificação de gestão de mídia (fixo, percentual, híbrido) e onboarding de cliente novo — a parte de negócio, não só a técnica de campanha.",
    },
  ],
}

function GoogleAdsPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
