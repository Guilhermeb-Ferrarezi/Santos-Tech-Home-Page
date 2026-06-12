import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/tiktok-ads")({
  component: TikTokAdsPage,
  head: () =>
    pageMeta({
      title: "Curso de TikTok Ads para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar e gerenciar anúncios no TikTok do zero ao avançado em Ribeirão Preto. Criativos nativos, segmentação e ROAS real.",
      path: "/adultos/cursos/tiktok-ads",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "TikTok Ads",
  categoria: "Marketing & Negócios",
  tagline:
    "Alcance milhões de potenciais clientes com anúncios nativos que parecem conteúdo de verdade",
  targetAudience: [
    "Você tem um negócio local ou e-commerce e quer explorar o TikTok como canal de vendas",
    "Você já anuncia no Meta Ads mas quer diversificar e reduzir o custo por aquisição",
    "Você cria conteúdo no TikTok organicamente e quer amplificar os resultados com tráfego pago",
    "Você é gestor de tráfego e precisa dominar mais uma plataforma para atender seus clientes",
    "Você sente que seus criativos não engajam e quer aprender a produzir vídeos que realmente convertem",
    "Você quer entender métricas como ROAS, VTR e CTR para tomar decisões baseadas em dados",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar, segmentar e publicar campanhas no TikTok Ads Manager com criativos nativos que geram cliques e primeiras conversões",
      modules: [
        {
          title: "TikTok for Business e Estrutura de Conta",
          topics: [
            "Criação e configuração do Business Center e Ads Manager",
            "Instalação e verificação do TikTok Pixel no site",
            "Estrutura campanha → grupo de anúncios → anúncio na prática",
            "Principais diferenças entre TikTok Ads e Meta Ads",
            "Políticas de anúncios e boas práticas para aprovação de criativos",
          ],
        },
        {
          title: "Formatos de Anúncio e Criativos Nativos",
          topics: [
            "In-Feed Ads, TopView e Spark Ads: quando usar cada formato",
            "Princípio 'Don't Make Ads, Make TikToks' aplicado na prática",
            "Como construir um hook irresistível nos 3 primeiros segundos",
            "Uso de texto overlay, stickers e sons nativos para aumentar retenção",
            "TikTok Creative Center: biblioteca de inspiração e tendências de criativos",
          ],
        },
        {
          title: "Segmentação e Públicos",
          topics: [
            "Segmentação por interesse, comportamento e tipo de dispositivo",
            "Criação de Custom Audiences a partir de listas de clientes e pixel",
            "Lookalike Audiences: configuração e boas práticas de tamanho",
            "Públicos por engajamento: viewers de vídeo e seguidores do perfil",
            "Exclusão de públicos para evitar sobreposição e desperdício de verba",
          ],
        },
        {
          title: "Criação de Vídeos que Convertem",
          topics: [
            "Estrutura hook → conteúdo → CTA em vídeos verticais de 15 a 30 segundos",
            "Técnicas de filmagem vertical nativa com smartphone",
            "Edição básica no CapCut: cortes, legendas automáticas e efeitos",
            "Uso estratégico de músicas e sons em alta para aumentar alcance orgânico",
            "Erros mais comuns em criativos de TikTok Ads e como evitá-los",
          ],
        },
        {
          title: "Métricas e Otimização Inicial",
          topics: [
            "Principais KPIs: CPM, CPC, CTR, VTR e ROAS — o que cada um indica",
            "Navegação e leitura do painel de analytics do TikTok Ads Manager",
            "Quando pausar, escalar ou recriar um anúncio com base em dados",
            "Testes A/B de criativos: como estruturar e interpretar resultados",
            "Relatórios semanais: como montar um resumo de desempenho para o cliente",
          ],
        },
      ],
      tools: [
        "TikTok Ads Manager",
        "TikTok Business Center",
        "TikTok Pixel",
        "TikTok Creative Center",
        "CapCut",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Gerenciar campanhas de alto desempenho em escala, dominar retargeting, TikTok Shop e relatórios avançados com automações",
      modules: [
        {
          title: "Estratégia de Criativos em Escala",
          topics: [
            "Processo criar → testar → aprender → iterar para produção contínua",
            "UGC (User Generated Content) como estratégia de anúncios autênticos",
            "Como criar briefs eficientes para creators e freelancers",
            "Biblioteca de hooks: como catalogar e reutilizar abordagens vencedoras",
            "Análise competitiva de criativos com TikTok Creative Center e AdSpy",
          ],
        },
        {
          title: "Funil de Vendas e Retargeting",
          topics: [
            "Estrutura de campanhas por etapa: topo, meio e fundo de funil",
            "Retargeting de viewers de vídeo (25%, 50%, 75%) e visitantes do site",
            "Exclusão de compradores recentes para evitar gastos desnecessários",
            "Modelos de atribuição no TikTok: view-through vs click-through",
            "Estratégia de sequenciamento de mensagens ao longo do funil",
          ],
        },
        {
          title: "TikTok Shop e E-commerce",
          topics: [
            "Configuração do TikTok Shop e envio do catálogo de produtos",
            "Shoppable Videos: como vincular produtos diretamente ao vídeo",
            "LIVE Shopping: planejamento e execução de lives com produtos à venda",
            "Integração do TikTok Shop com Shopify e gestão de pedidos",
            "Métricas de e-commerce: GMV, taxa de conversão e ticket médio no TikTok",
          ],
        },
        {
          title: "Spark Ads e Parcerias com Creators",
          topics: [
            "O que são Spark Ads e como impulsionar conteúdo de criadores parceiros",
            "Processo de autorização: solicitação de código e vinculação de posts",
            "Creator Marketplace: como encontrar, filtrar e contratar creators",
            "Comparando métricas de engajamento versus conversão em campanhas Spark",
            "Gestão de múltiplas parcerias e controle de desempenho por creator",
          ],
        },
        {
          title: "Relatórios, Otimização e Gestão de Budget",
          topics: [
            "Smart Performance Campaign: configuração e quando utilizá-la",
            "Regras automáticas para pausar ou escalar campanhas por ROAS e CPA",
            "Criação de dashboards no Looker Studio integrado ao TikTok Ads",
            "Gestão de budget mensal: distribuição por objetivo, formato e sazonalidade",
            "Apresentação de resultados: como comunicar ROI e próximos passos ao cliente",
          ],
        },
      ],
      tools: [
        "TikTok Ads Manager",
        "TikTok Business Center",
        "TikTok Pixel",
        "TikTok Creative Center",
        "CapCut",
        "Shopify",
        "Looker Studio",
        "Creator Marketplace",
      ],
    },
  ],
}

function TikTokAdsPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
