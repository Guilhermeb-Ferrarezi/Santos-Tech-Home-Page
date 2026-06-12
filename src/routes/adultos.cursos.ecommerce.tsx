import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/ecommerce")({
  component: EcommercePage,
  head: () =>
    pageMeta({
      title:
        "Curso de E-commerce & Vendas Online para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Monte sua loja virtual do zero, atraia clientes com tráfego pago e automatize vendas. Do Shopify ao escala com marketplaces, presencial em Ribeirão Preto.",
      path: "/adultos/cursos/ecommerce",
    }),
})

const COURSE_DATA = {
  nome: "E-commerce & Vendas Online",
  categoria: "Marketing & Negócios",
  tagline: "Monte sua loja virtual e venda todos os dias no piloto automático",
  targetAudience: [
    "Quer abrir uma loja virtual do zero sem experiência técnica prévia",
    "Empreendedor com produto físico ou digital que quer vender pela internet",
    "Profissional que trabalha em e-commerce e quer entender toda a operação estrategicamente",
    "Revendedor ou atacadista que quer estruturar canal de vendas online",
    "Freelancer que quer oferecer serviços de criação e gestão de lojas virtuais para clientes",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar e configurar uma loja virtual funcional no Shopify ou WooCommerce com produtos, meios de pagamento e logística prontos para vender.",
      modules: [
        {
          title: "Fundamentos do E-commerce",
          topics: [
            "Modelos de negócio: e-commerce próprio, marketplace e dropshipping",
            "Escolha de nicho e validação de produto com pesquisa de mercado",
            "Plataformas: Shopify, WooCommerce, Nuvemshop e Tray — comparativo",
            "Aspectos legais: CNPJ, MEI, Código de Defesa do Consumidor e LGPD",
            "Precificação: markup, margem de lucro e ponto de equilíbrio",
          ],
        },
        {
          title: "Criação e Configuração da Loja",
          topics: [
            "Criação de loja no Shopify do zero: tema, domínio e configurações",
            "Cadastro de produtos: fotos, descrição, SKU e variações",
            "Configuração de métodos de pagamento: Mercado Pago, Pagar.me e Stripe",
            "Integração de frete: Melhor Envio, Correios e transportadoras",
            "Configuração de políticas de troca, devolução e privacidade",
          ],
        },
        {
          title: "Fotografia e Descrição de Produto",
          topics: [
            "Fotografia de produto com smartphone: iluminação e cenografia",
            "Edição de fotos para e-commerce: fundo branco e lifestyle",
            "Copywriting de descrição de produto que converte",
            "SEO de produto: nome, descrição e tags para busca orgânica",
          ],
        },
        {
          title: "Primeiras Vendas",
          topics: [
            "Estratégias de lançamento: oferta inaugural e lista de espera",
            "Google Shopping: feed de produtos e primeiras campanhas",
            "Anúncio no Mercado Livre e Shopee como canal complementar",
            "Atendimento ao cliente: WhatsApp Business e chat online",
          ],
        },
      ],
      tools: [
        "Shopify",
        "WooCommerce",
        "Mercado Pago",
        "Melhor Envio",
        "WhatsApp Business",
        "Canva",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Operar uma loja virtual com tráfego pago, automação de marketing, gestão de estoque e análise de métricas para crescimento consistente de vendas.",
      modules: [
        {
          title: "Tráfego Pago para E-commerce",
          topics: [
            "Google Ads Shopping: criação e otimização de campanhas de produto",
            "Performance Max para e-commerce: configuração e análise",
            "Meta Ads com catálogo de produtos: remarketing dinâmico",
            "TikTok Ads para e-commerce: criativo nativo e shopping",
            "ROAS alvo e otimização de lances por produto",
          ],
        },
        {
          title: "E-mail e WhatsApp Marketing",
          topics: [
            "Automação de e-mail: boas-vindas, carrinho abandonado e pós-compra",
            "Segmentação por histórico de compras e comportamento",
            "WhatsApp Business API para recuperação de carrinho e notificações",
            "Klaviyo para e-commerce: configuração e fluxos principais",
            "SMS marketing e push notifications",
          ],
        },
        {
          title: "Gestão de Estoque e Logística",
          topics: [
            "Controle de estoque com SKU e gestão por planilha ou sistema",
            "Fulfillment: processo de separação, embalagem e despacho",
            "Gestão de devoluções e política de troca eficiente",
            "Dropshipping nacional: fornecedores e integração automática",
          ],
        },
        {
          title: "Analytics e Otimização de Conversão",
          topics: [
            "Google Analytics 4 para e-commerce: eventos e funil de compra",
            "Taxa de conversão: benchmark e estratégias de otimização (CRO)",
            "Heatmaps e gravações de sessão com Hotjar",
            "Testes A/B de página de produto e checkout",
          ],
        },
      ],
      tools: [
        "Shopify",
        "Google Ads",
        "Meta Ads Manager",
        "Klaviyo",
        "Google Analytics 4",
        "Hotjar",
        "Melhor Envio",
      ],
    },
  ],
}

function EcommercePage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
