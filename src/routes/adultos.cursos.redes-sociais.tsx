import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/redes-sociais")({
  component: RedesSociaisPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Gestão de Redes Sociais para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Torne-se Social Media profissional: estratégia de conteúdo, métricas, tráfego pago e IA aplicada. Do essencial ao gestor estratégico, presencial em Ribeirão Preto.",
      path: "/adultos/cursos/redes-sociais",
    }),
})

const COURSE_DATA = {
  nome: "Gestão de Redes Sociais",
  categoria: "Marketing & Negócios",
  tagline: "De criador de conteúdo a gestor estratégico que entrega resultado",
  targetAudience: [
    "Quer trabalhar como Social Media para agências, empresas ou como freelancer",
    "Empreendedor que precisa gerenciar as redes sociais do próprio negócio com estratégia",
    "Profissional de comunicação que quer se especializar em redes sociais e monetizar a carreira",
    "Designer ou editor que quer expandir os serviços oferecidos para gestão completa de perfis",
    "Recém-formado em Comunicação, Publicidade ou Marketing que quer entrar no mercado digital",
  ],
  tiers: [
    {
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Gerir perfis profissionais no Instagram, TikTok e LinkedIn com estratégia de conteúdo e análise de métricas básica.",
      modules: [
        {
          title: "Fundamentos de Redes Sociais",
          topics: [
            "Algoritmos do Instagram, TikTok, Facebook e LinkedIn em 2025",
            "Perfil profissional vs conta pessoal: configuração e otimização de bio",
            "Formatos de conteúdo: feed, story, reels, lives e carrossel",
            "Planejamento de conteúdo mensal com calendário editorial",
            "Tom de voz e linguagem adaptados por plataforma",
          ],
        },
        {
          title: "Criação de Conteúdo para Redes",
          topics: [
            "Copywriting para legendas que geram engajamento",
            "Uso estratégico de hashtags por nicho e plataforma",
            "Criação de conteúdo com Canva Pro para múltiplos formatos",
            "Gravação e edição básica de Reels e TikToks com CapCut",
            "Conteúdo para LinkedIn: artigos, posts e newsletters",
          ],
        },
        {
          title: "Métricas e Análise de Resultado",
          topics: [
            "KPIs de redes sociais: alcance, engajamento, salvamentos e compartilhamentos",
            "Instagram Insights: leitura e interpretação dos dados",
            "TikTok Analytics: métricas específicas da plataforma",
            "Relatório mensal básico para apresentação ao cliente",
            "Ajuste de estratégia baseado em dados de desempenho",
          ],
        },
        {
          title: "Relacionamento e Comunidade",
          topics: [
            "Gestão de comentários e direct messages",
            "Estratégias de engajamento para crescimento orgânico",
            "Parcerias e menções com outros perfis do nicho",
            "Stories interativos: enquetes, perguntas e contagens regressivas",
          ],
        },
      ],
      tools: [
        "Instagram Business",
        "TikTok for Business",
        "LinkedIn Creator Mode",
        "Canva Pro",
        "CapCut",
        "Meta Business Suite",
      ],
    },
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Gerenciar múltiplos clientes como Social Media profissional, criar estratégia de conteúdo, planejar campanhas pagas e entregar relatórios executivos.",
      modules: [
        {
          title: "Fundamentos de Redes Sociais",
          topics: [
            "Algoritmos do Instagram, TikTok, Facebook e LinkedIn em 2025",
            "Perfil profissional vs conta pessoal: configuração e otimização de bio",
            "Formatos de conteúdo: feed, story, reels, lives e carrossel",
            "Planejamento de conteúdo mensal com calendário editorial",
            "Tom de voz e linguagem adaptados por plataforma",
          ],
        },
        {
          title: "Criação de Conteúdo para Redes",
          topics: [
            "Copywriting para legendas que geram engajamento",
            "Uso estratégico de hashtags por nicho e plataforma",
            "Criação de conteúdo com Canva Pro para múltiplos formatos",
            "Gravação e edição básica de Reels e TikToks com CapCut",
            "Conteúdo para LinkedIn: artigos, posts e newsletters",
          ],
        },
        {
          title: "Métricas e Análise de Resultado",
          topics: [
            "KPIs de redes sociais: alcance, engajamento, salvamentos e compartilhamentos",
            "Instagram Insights: leitura e interpretação dos dados",
            "TikTok Analytics: métricas específicas da plataforma",
            "Relatório mensal básico para apresentação ao cliente",
            "Ajuste de estratégia baseado em dados de desempenho",
          ],
        },
        {
          title: "Relacionamento e Comunidade",
          topics: [
            "Gestão de comentários e direct messages",
            "Estratégias de engajamento para crescimento orgânico",
            "Parcerias e menções com outros perfis do nicho",
            "Stories interativos: enquetes, perguntas e contagens regressivas",
          ],
        },
        {
          title: "Estratégia de Conteúdo",
          topics: [
            "Posicionamento de marca nas redes sociais",
            "Matriz de conteúdo: entretenimento, educação, inspiração e venda",
            "Criação de pilares de conteúdo por nicho",
            "Calendário editorial de 30 dias com ferramentas de planejamento",
            "Reaproveitamento de conteúdo entre plataformas (repurposing)",
          ],
        },
        {
          title: "Ferramentas de Gestão e Agendamento",
          topics: [
            "Mlabs: agendamento, inbox e relatórios para múltiplos clientes",
            "Later: planejamento visual de feed e link in bio",
            "Notion para organização de calendário editorial e processos",
            "Criação de fluxo de trabalho para aprovação de conteúdo",
            "Gestão de múltiplos perfis com eficiência",
          ],
        },
        {
          title: "Impulsionamento e Tráfego Pago",
          topics: [
            "Meta Ads para impulsionar posts e stories",
            "Criação de campanha de alcance e engajamento",
            "Segmentação de público por interesse e comportamento",
            "Análise de resultado de campanhas pagas vs orgânicas",
          ],
        },
        {
          title: "Gestão de Clientes e Precificação",
          topics: [
            "Onboarding de cliente: briefing, pesquisa e imersão na marca",
            "Contrato e escopo de serviços de Social Media",
            "Precificação por pacotes: básico, intermediário e completo",
            "Relatório executivo mensal com métricas e insights",
          ],
        },
      ],
      tools: [
        "Mlabs",
        "Later",
        "Meta Business Suite",
        "Meta Ads Manager",
        "Canva Pro",
        "Notion",
        "CapCut",
      ],
    },
  ],
}

function RedesSociaisPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
