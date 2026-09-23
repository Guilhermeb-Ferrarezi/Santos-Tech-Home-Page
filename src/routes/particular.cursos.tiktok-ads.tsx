import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/tiktok-ads")({
  component: TikTokAdsPage,
  head: () =>
    pageMeta({
      title: "Curso de TikTok Ads Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar e gerenciar anúncios no TikTok do zero ao avançado em Ribeirão Preto. Criativos nativos, segmentação e ROAS real.",
      path: "/particular/cursos/tiktok-ads",
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
      levelName: "TikTok Ads",
      totalHours: "48h",
      outcome:
        "Criar, produzir e gerenciar campanhas de TikTok Ads do zero absoluto até a operação em escala — criativos nativos que convertem, segmentação com retargeting por funil, TikTok Shop e Spark Ads com creators, e otimização orientada a dados com automações de budget — pronto para gerar ROAS real como gestor de tráfego ou dono de negócio.",
      modules: [
        {
          title: "TikTok for Business e Estrutura de Conta",
          topics: [
            "Criação e configuração do Business Center e do TikTok Ads Manager",
            "Instalação e verificação do TikTok Pixel no site",
            "Estrutura campanha → grupo de anúncios → anúncio na prática",
            "Principais diferenças entre TikTok Ads e Meta Ads",
            "Políticas de anúncios e boas práticas para aprovação de criativos",
          ],
        },
        {
          title: "Criativos Nativos e Produção de Vídeo",
          topics: [
            "In-Feed Ads, TopView e Spark Ads: quando usar cada formato, com apoio do TikTok Creative Center para pesquisar tendências e referências",
            "Princípio 'Don't Make Ads, Make TikToks': estrutura hook → conteúdo → CTA em vídeos verticais de 15 a 30 segundos",
            "Como construir um hook irresistível nos 3 primeiros segundos, com texto overlay, stickers e sons nativos para aumentar retenção",
            "Técnicas de filmagem vertical nativa com smartphone e edição no CapCut: cortes, legendas automáticas e efeitos",
            "Uso estratégico de músicas e sons em alta para ampliar alcance, e os erros mais comuns em criativos de TikTok Ads",
          ],
        },
        {
          title: "Segmentação, Públicos e Funil de Retargeting",
          topics: [
            "Segmentação por interesse, comportamento e tipo de dispositivo",
            "Custom Audiences a partir de listas de clientes e pixel, e Lookalike Audiences: configuração e boas práticas de tamanho",
            "Públicos por engajamento — viewers de vídeo e seguidores do perfil — e exclusão de públicos para evitar sobreposição e desperdício de verba",
            "Estrutura de campanhas por etapa de funil (topo, meio e fundo) com retargeting de viewers de vídeo (25%, 50%, 75%) e de visitantes do site",
            "Exclusão de compradores recentes, modelos de atribuição (view-through vs click-through) e sequenciamento de mensagens ao longo do funil",
          ],
        },
        {
          title: "Estratégia de Criativos em Escala e Parcerias com Creators",
          topics: [
            "Processo criar → testar → aprender → iterar para produção contínua em escala, com UGC (User Generated Content) como estratégia de anúncios autênticos",
            "Briefs eficientes para creators e freelancers, e biblioteca de hooks para catalogar e reutilizar abordagens vencedoras",
            "Análise competitiva de criativos com TikTok Creative Center e ferramentas como AdSpy",
            "Spark Ads: como impulsionar conteúdo de criadores parceiros, processo de autorização (solicitação de código e vinculação de posts) e Creator Marketplace para encontrar, filtrar e contratar creators",
            "Comparando métricas de engajamento versus conversão em campanhas Spark, e gestão de múltiplas parcerias com controle de desempenho por creator",
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
          title: "Métricas, Otimização e Gestão de Budget",
          topics: [
            "Principais KPIs — CPM, CPC, CTR, VTR e ROAS — e navegação no painel de analytics do TikTok Ads Manager",
            "Testes A/B de criativos: como estruturar e interpretar resultados, decidindo quando pausar, escalar ou recriar um anúncio com base em dados",
            "Smart Performance Campaign: configuração e quando utilizá-la, com regras automáticas para pausar ou escalar campanhas por ROAS e CPA",
            "Gestão de budget mensal: distribuição por objetivo, formato e sazonalidade",
            "Dashboards no Looker Studio integrado ao TikTok Ads, e como apresentar relatórios de desempenho e ROI ao cliente",
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
  faqItems: [
    {
      q: "Já anuncio no Meta Ads. Vale a pena aprender TikTok Ads também?",
      a: "Vale bastante. O curso foi pensado inclusive pra quem já anuncia no Meta Ads e quer diversificar canais e reduzir o custo por aquisição — as diferenças entre TikTok Ads e Meta Ads são explicadas logo no início, já no primeiro módulo do curso.",
    },
    {
      q: "O curso ensina a produzir os vídeos, ou só a configurar as campanhas?",
      a: "Ensina as duas coisas. Tem módulo específico de criação de vídeos que convertem — hook, filmagem vertical, edição no CapCut — além de toda a configuração do Ads Manager, segmentação e leitura de métricas como CPM, CTR, VTR e ROAS.",
    },
  ],
}

function TikTokAdsPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
