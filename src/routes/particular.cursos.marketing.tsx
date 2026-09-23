import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/marketing")({
  component: MarketingPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Marketing Digital Particular em Ribeirão Preto — Santos Tech",
      description:
        "Domine Google Ads, Meta Ads e SEO com aulas individuais em Ribeirão Preto. Do funil de marketing à gestão de campanhas com IA: forme-se especialista em tráfego pago.",
      path: "/particular/cursos/marketing",
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
      levelName: "Marketing Digital",
      totalHours: "48h",
      outcome:
        "Planejar e executar estratégias completas de marketing digital do zero absoluto — funil, Google Ads, Meta Ads, SEO e e-mail marketing — até a automação de campanhas com IA, analytics avançado e a gestão de budget real de cliente, pronto para atuar como especialista em tráfego pago ou gestor de marketing.",
      modules: [
        {
          title: "Fundamentos do Marketing Digital",
          topics: [
            "Funil de marketing: awareness, consideração, conversão e fidelização",
            "Jornada do cliente e criação de persona com dados reais",
            "Diferença entre tráfego orgânico e pago, e quando usar cada estratégia",
            "Métricas essenciais: CPC, CPA, ROAS, CTR e CPM",
            "Google Analytics 4: configuração e leitura de relatórios",
          ],
        },
        {
          title: "Google Ads — do Básico ao Avançado com IA",
          topics: [
            "Estrutura de conta, tipos de campanha (Search, Display, Shopping e Performance Max) e correspondência de palavras-chave: ampla, frase e exata",
            "Criação de anúncios de busca com extensões e lances inteligentes com CPA e ROAS alvo",
            "Performance Max avançado com automação por IA Max, YouTube Ads (TrueView, Bumper e Discovery) e campanhas Demand Gen no Shorts, Discover e Gmail",
            "Google Shopping: feed de produtos e estratégias de lance; Audiences para remarketing, Customer Match e Similar Audiences",
            "Scripts, automação de campanhas em escala e relatórios customizados no Looker Studio",
          ],
        },
        {
          title: "Meta Ads — do Básico à Escala com IA",
          topics: [
            "Gerenciador de Anúncios, Business Manager e estrutura de campanha, conjunto de anúncios e anúncio",
            "Segmentação por interesse, comportamento e localização, e criação de criativo em imagem, carrossel e vídeo",
            "Pixel do Meta com eventos personalizados, públicos personalizados, lookalike e remarketing com catálogo de produtos",
            "Advantage+ e automação por IA da Meta, com testes A/B de criativos e copy em escala",
            "Scaling horizontal e vertical de campanhas vencedoras, CBO vs ABO e modelos de atribuição (Attribution Window) na análise de conversão",
          ],
        },
        {
          title: "SEO e Marketing de Conteúdo",
          topics: [
            "Como o Google indexa e ranqueia páginas, e pesquisa de palavras-chave com o Google Keyword Planner",
            "On-page SEO — título, meta description, H1 e alt text — e configuração e análise no Google Search Console",
            "SEO técnico: velocidade de página, Core Web Vitals e dados estruturados (Schema)",
            "Estratégia de pillar pages, topic clusters e link building com técnicas white hat para autoridade de domínio",
            "Distribuição de conteúdo integrada entre blog, YouTube e redes sociais",
          ],
        },
        {
          title: "E-mail Marketing e Automação",
          topics: [
            "Construção de lista com lead magnets e landing pages",
            "Fluxos de automação: boas-vindas, nutrição e carrinho abandonado",
            "Copywriting para e-mail: subject line, preheader e CTA",
            "Segmentação por comportamento e estágio no funil",
            "Análise de métricas: taxa de abertura, cliques e conversões",
          ],
        },
        {
          title: "IA Aplicada, Analytics e Projeto Final",
          topics: [
            "ChatGPT e Claude para geração de copy e estratégias, e criação de criativos com Adobe Firefly e Midjourney",
            "Automação de relatórios com Make (Integromat) e Zapier, e agentes de IA para monitoramento e otimização de campanhas",
            "Análise preditiva de campanhas com Google Meridian e personalização dinâmica de anúncios com IA",
            "Google Analytics 4 com eventos customizados e conversões avançadas, UTMs, data layers e tracking avançado",
            "Dashboards executivos no Looker Studio e modelagem de atribuição multi-touch para ROI",
            "Planejamento de campanha 360° e gestão de R$ 5.000 em tráfego pago com otimização em tempo real para uma empresa real",
            "Relatório executivo mensal, preparação para as certificações Google Ads Search e Meta Blueprint, e montagem de portfólio com cases e resultados mensuráveis",
          ],
        },
      ],
      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "Google Analytics 4",
        "Google Search Console",
        "Looker Studio",
        "SEMrush",
        "RD Station",
        "Mailchimp",
        "Make",
        "ChatGPT",
        "Hotjar",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso ter experiência prévia em marketing para começar esse curso?",
      a: "Não. O curso começa pelos fundamentos — funil de marketing, jornada do cliente e diferença entre tráfego orgânico e pago — antes de entrar nas primeiras campanhas em Google Ads e Meta Ads.",
    },
    {
      q: "Sou freelancer e quero oferecer marketing digital completo pros meus clientes — esse curso serve?",
      a: "Sim. O curso cobre tráfego pago, SEO, conteúdo e e-mail marketing de ponta a ponta, exatamente o pacote que um freelancer precisa para atender pequenas empresas sem depender de uma agência por trás.",
    },
  ],
}

function MarketingPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
