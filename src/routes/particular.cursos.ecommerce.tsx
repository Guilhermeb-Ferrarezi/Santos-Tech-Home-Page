import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/ecommerce")({
  component: EcommercePage,
  head: () =>
    pageMeta({
      title:
        "Curso de E-commerce & Vendas Online Particular em Ribeirão Preto — Santos Tech",
      description:
        "Monte sua loja virtual do zero, atraia clientes com tráfego pago e automatize vendas. Do Shopify ao escala com marketplaces, presencial em Ribeirão Preto.",
      path: "/particular/cursos/ecommerce",
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
      levelName: "E-commerce",
      totalHours: "48h",
      outcome:
        "Criar e configurar uma loja virtual do zero no Shopify ou WooCommerce — produtos, pagamento e frete prontos para vender — e evoluir a operação com tráfego pago, automação de e-mail e WhatsApp, gestão de estoque e logística e analytics, para crescimento consistente de vendas.",
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
          title: "Apresentação de Produto e Primeiras Vendas",
          topics: [
            "Fotografia de produto com smartphone: iluminação, cenografia e edição para fundo branco e lifestyle",
            "Copywriting de descrição de produto que converte, com SEO de produto (nome, descrição e tags)",
            "Estratégias de lançamento: oferta inaugural e lista de espera",
            "Google Shopping: feed de produtos e primeiras campanhas",
            "Anúncio no Mercado Livre e Shopee como canal complementar",
            "Atendimento ao cliente: WhatsApp Business e chat online",
          ],
        },
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
          title: "Estoque, Logística e Analytics",
          topics: [
            "Controle de estoque com SKU e gestão por planilha ou sistema",
            "Fulfillment: processo de separação, embalagem e despacho",
            "Gestão de devoluções e política de troca eficiente",
            "Dropshipping nacional: fornecedores e integração automática",
            "Google Analytics 4 para e-commerce: eventos, funil de compra e taxa de conversão (CRO)",
            "Heatmaps e testes A/B: gravações de sessão com Hotjar, testes de página de produto e checkout",
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
        "Google Ads",
        "Meta Ads Manager",
        "Klaviyo",
        "Google Analytics 4",
        "Hotjar",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso ter conhecimento técnico pra montar minha loja virtual?",
      a: "Não. O curso começa do zero: modelos de negócio, escolha de plataforma (Shopify, WooCommerce, Nuvemshop, Tray) e a criação da loja passo a passo, incluindo pagamento, frete e políticas. Você já sai com uma loja funcional pronta pra vender e segue evoluindo, em ordem, até tráfego pago, automação de marketing e analytics.",
    },
    {
      q: "Esse curso serve pra quem já revende produtos e quer estruturar um canal online?",
      a: "Sim — o curso foi pensado inclusive pra revendedor e atacadista que quer sair do informal e estruturar um canal de vendas online de verdade, com precificação correta, controle de estoque por SKU e fulfillment organizado.",
    },
  ],
}

function EcommercePage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
