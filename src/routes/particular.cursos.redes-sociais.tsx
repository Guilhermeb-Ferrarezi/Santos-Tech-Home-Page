import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/redes-sociais")({
  component: RedesSociaisPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Gestão de Redes Sociais Particular em Ribeirão Preto — Santos Tech",
      description:
        "Torne-se Social Media profissional: estratégia de conteúdo, métricas, tráfego pago e IA aplicada. Do essencial ao gestor estratégico, presencial em Ribeirão Preto.",
      path: "/particular/cursos/redes-sociais",
    }),
})

const COURSE_DATA = {
  nome: "Gestão de Redes Sociais",
  categoria: "Marketing & Negócios",
  tema: "marketing" as const,
  logo: "redes-sociais",
  variante: "redes-sociais",
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
      levelName: "Redes Sociais",
      ctaLabel: "curso de Redes Sociais",
      totalHours: "48h",
      outcome:
        "Gerir perfis profissionais do zero absoluto — Instagram, TikTok e LinkedIn — até atuar como Social Media estratégico para múltiplos clientes, com ferramentas de agendamento profissional, tráfego pago e relatórios executivos, base para trabalhar em agências ou como freelancer.",
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
          title: "Comunidade e Métricas",
          topics: [
            "Gestão de comentários, direct messages e stories interativos (enquetes, perguntas, contagens regressivas)",
            "Estratégias de engajamento orgânico e parcerias com outros perfis do nicho",
            "KPIs de redes sociais: alcance, engajamento, salvamentos e compartilhamentos",
            "Instagram Insights e TikTok Analytics: leitura e interpretação de dados por plataforma",
            "Ajuste de estratégia baseado em dados de desempenho",
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
          title: "Ferramentas de Gestão e Tráfego Pago",
          topics: [
            "Mlabs e Later: agendamento, inbox e relatórios para múltiplos clientes, com planejamento visual de feed e link in bio",
            "Notion para organização de calendário editorial, processos e fluxo de aprovação de conteúdo",
            "Gestão de múltiplos perfis com eficiência",
            "Meta Ads: impulsionamento de posts e stories, criação de campanha de alcance e engajamento",
            "Segmentação de público por interesse e comportamento e análise de resultado pago vs orgânico",
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
        "Instagram Business",
        "TikTok for Business",
        "LinkedIn Creator Mode",
        "Meta Business Suite",
        "Canva Pro",
        "CapCut",
        "Mlabs",
        "Later",
        "Notion",
        "Meta Ads Manager",
      ],
    },
  ],
  faqItems: [
    {
      q: "Esse curso serve pra quem já tem um negócio e só quer cuidar das próprias redes?",
      a: "Sim. O curso atende tanto quem quer trabalhar como Social Media para clientes quanto o empreendedor que precisa gerenciar as redes do próprio negócio com estratégia — planejamento de conteúdo, métricas e engajamento valem pra qualquer um dos dois casos.",
    },
    {
      q: "O curso ensina a cobrar pelos serviços e trabalhar como freelancer?",
      a: "Sim. Você aprende onboarding de cliente, como montar contrato e escopo de serviços, precificação por pacotes (básico, intermediário e completo) e como entregar um relatório executivo mensal — a base pra quem quer atuar como freelancer ou para agências.",
    },
  ],
}

function RedesSociaisPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
