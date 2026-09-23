import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/google-ads")({
  component: GoogleAdsPage,
  head: () =>
    pageMeta({
      title: "Curso de Google Ads Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar e otimizar campanhas no Google Ads em Ribeirão Preto. Do básico ao avançado com IA, Performance Max e gestão profissional de mídia paga.",
      path: "/particular/cursos/google-ads",
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
      label: "Google Ads",
      levelName: "Google Ads",
      totalHours: "48h",
      outcome:
        "Criar, publicar e otimizar campanhas no Google Ads do zero absoluto até Performance Max, Demand Gen e automação com Scripts — dominando Search, Display, YouTube, Shopping e Smart Bidding com IA, pronto para gerenciar contas de múltiplos clientes via MCC e atuar como especialista de mídia paga em agências ou como freelancer.",
      modules: [
        {
          title: "Estrutura da Conta e Fundamentos de Search",
          topics: [
            "Hierarquia de conta, campanha, grupo de anúncios e anúncio, com vinculação ao Google Analytics 4",
            "Criação e configuração inicial da conta: faturamento, limites de gastos e alertas de orçamento",
            "Tipos de correspondência de palavras-chave (ampla, frase e exata) e pesquisa de volume com o Planejador de Palavras-chave",
            "Segmentação geográfica por cidade, raio e região, por dispositivo, idioma e programação de anúncios",
            "Organização de grupos de anúncios por tema e intenção de busca, com navegação no painel de relatórios e configurações",
          ],
        },
        {
          title: "Anúncios, Conversões e Primeiras Otimizações",
          topics: [
            "Anúncios Responsive Search (RSA): estrutura de títulos e descrições e estratégias para maximizar o Ad Strength",
            "Extensões de sitelink, chamada, destaque e frase estruturada, com testes A/B de variações de anúncio",
            "Acompanhamento de conversões via Google Tag e leitura do relatório de desempenho de conversões",
            "Lance manual de CPC, estratégia Maximizar Cliques e o papel do índice de qualidade",
            "Relatório de termos de pesquisa, palavras-chave negativas e ajuste de lances por dispositivo, horário e localização",
            "Auction Insights e checklist semanal de otimização de campanhas Search",
          ],
        },
        {
          title: "Display, YouTube e Shopping",
          topics: [
            "Rede de Display: Responsive Display Ads e segmentação por contexto, interesse, tópico e posicionamento",
            "Remarketing, exclusão de posicionamentos e conteúdo sensível, e métricas de impressões, viewability, frequência e alcance",
            "YouTube Ads: formatos In-stream, Bumper e In-feed, com segmentação por canal, vídeo, interesse e eventos de vida",
            "View-through conversions e métricas de vídeo: view rate, CPV, earned actions e brand lift",
            "Google Shopping: estruturação do feed de produtos no Merchant Center e segmentação por categoria, marca, ID e preço",
            "Shopping Standard vs Performance Max, estratégia de lances ROAS e diagnóstico de produtos reprovados no feed",
          ],
        },
        {
          title: "Smart Bidding e Relatórios Avançados",
          topics: [
            "Target CPA e Target ROAS: configuração, metas realistas e histórico mínimo necessário",
            "Maximizar Conversões vs Maximizar Valor de Conversão, e como interpretar o período de aprendizado",
            "Quando manter o lance manual e quando migrar para automação com Smart Bidding",
            "Labels e segmentação por intenção personalizada e públicos combinados",
            "Dashboards no Looker Studio conectados ao Google Ads e análise de share of voice",
          ],
        },
        {
          title: "Performance Max, Demand Gen e Funil Completo",
          topics: [
            "Performance Max: Asset Groups, sinais de público-alvo e como a IA do Google distribui orçamento entre canais",
            "Exclusões de palavras-chave e segmentos em PMax, relatório de Insights e como evitar canibalização com Search",
            "Demand Gen: formatos e canais (YouTube, Display, Discover) organizados por etapa de funil — topo, meio e fundo",
            "Distribuição de orçamento por etapa do funil e sazonalidade, com lookalike audiences e expansão de público via IA",
            "Mensuração de campanhas de topo de funil com Brand Lift",
          ],
        },
        {
          title: "Automação, Atribuição e Gestão em Agência",
          topics: [
            "Google Ads Scripts: estrutura, alertas de CPA acima do limite e queda de conversões, e regras automáticas para pausar e ajustar lances",
            "Integração de Scripts com Google Sheets e bulk operations com o Google Ads Editor",
            "Triggers, variáveis e eventos personalizados avançados no Google Tag Manager, com privacidade e consent mode v2",
            "Modelo de atribuição data-driven vs last-click e cross-channel attribution no GA4",
            "MCC para gerenciar contas de múltiplos clientes e relatórios executivos no Looker Studio, com comunicação estratégica de métricas de negócio vs métricas de mídia",
            "Precificação de gestão de mídia paga (fixo, percentual, híbrido) e onboarding de cliente novo: auditoria de conta, briefing e planejamento inicial",
          ],
        },
      ],
      tools: [
        "Google Ads",
        "Google Analytics 4",
        "Google Tag Manager",
        "Google Keyword Planner",
        "Google Merchant Center",
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
      q: "O curso serve pra quem quer oferecer gestão de tráfego pago como serviço?",
      a: "Sim, o curso tem uma trilha dedicada a isso: MCC para gerenciar contas de vários clientes, relatórios executivos no Looker Studio, modelos de precificação de gestão de mídia (fixo, percentual, híbrido) e onboarding de cliente novo — a parte de negócio, não só a técnica de campanha.",
    },
  ],
}

function GoogleAdsPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
