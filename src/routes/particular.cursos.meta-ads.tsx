import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/meta-ads")({
  component: MetaAdsPage,
  head: () =>
    pageMeta({
      title: "Curso de Meta Ads Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar campanhas lucrativas no Facebook e Instagram com Meta Ads em Ribeirão Preto. Do básico ao Advantage+ com IA.",
      path: "/particular/cursos/meta-ads",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Meta Ads — Facebook e Instagram",
  categoria: "Marketing & Negócios",
  tagline: "Crie campanhas lucrativas no Facebook e Instagram e venda todos os dias",
  targetAudience: [
    "Você tem um negócio mas não sabe como anunciar no Facebook e Instagram de forma eficiente",
    "Você já tentou impulsionar posts e jogou dinheiro fora sem ver resultado real",
    "Você quer trabalhar como gestor de tráfego e atender clientes de forma profissional",
    "Você investe em anúncios mas não consegue interpretar os dados para tomar decisões",
    "Você quer escalar vendas online usando audiências qualificadas e estratégias de funil",
    "Você sente que a concorrência aparece mais e quer dominar os anúncios no Meta de uma vez por todas",
  ],
  tiers: [
    {
      levelName: "Meta Ads",
      totalHours: "48h",
      outcome:
        "Criar e escalar campanhas no Facebook e Instagram do zero absoluto — da configuração do Business Manager e Pixel até públicos personalizados, retargeting em funil completo, Advantage+, Conversions API e criativos com IA generativa — pronto para gerar leads e vendas de forma consistente ou atuar como gestor de tráfego para clientes",
      modules: [
        {
          title: "Fundamentos e Estrutura do Meta Ads",
          topics: [
            "Criação do Meta Business Manager, verificação de domínio e conformidade com a política do Meta",
            "Instalação e verificação do Meta Pixel no site",
            "Hierarquia campanha → conjunto de anúncios → anúncio, com gerenciamento de permissões, contas e páginas",
            "Objetivos de campanha: reconhecimento e alcance, tráfego e engajamento, geração de leads, conversão e vendas",
            "Escolhendo o objetivo certo para cada etapa do funil de vendas",
          ],
        },
        {
          title: "Segmentação, Criativos e Primeiras Métricas",
          topics: [
            "Segmentação por interesses, comportamentos e dados demográficos, com públicos salvos reutilizáveis",
            "Retargeting básico de quem visitou o site ou interagiu, com exclusão de públicos para não desperdiçar verba",
            "Estimativa de tamanho de público e alcance potencial",
            "Formatos de anúncio — imagem, vídeo, carrossel e stories —, copywriting persuasivo e boas práticas de design",
            "Políticas de aprovação do Meta e checklist pré-publicação para evitar reprovações",
            "CPM, CPC, CTR, frequência, ROAS e custo por resultado: lendo o Gerenciador de Relatórios para pausar, editar ou escalar",
          ],
        },
        {
          title: "Públicos Personalizados, Lookalike e Retargeting Avançado",
          topics: [
            "Custom Audiences a partir de lista de clientes (CSV/e-mail/telefone) e de tráfego do site por URL, tempo e evento",
            "Públicos de engajamento (vídeo, Instagram, Facebook, formulários) e Lookalike Audiences de 1% a 10%, com empilhamento e exclusão",
            "Arquitetura de funil topo, meio e fundo com sequência de anúncios e janelas de atribuição",
            "Exclusão de conversores no fundo de funil, com anúncios de upsell e cross-sell para clientes recentes",
            "Mensuração do caminho completo do lead até a conversão",
          ],
        },
        {
          title: "Testes A/B, Catálogo Dinâmico e Geração de Leads",
          topics: [
            "Teste de variável única (público, criativo ou posicionamento) com experimentos A/B no Gerenciador de Anúncios",
            "Dynamic Creative Optimization, fadiga de anúncio e rotação de criativos, documentando aprendizados para escalar o que funciona",
            "Catalog Manager e Dynamic Ads para e-commerce: o produto certo para cada usuário, com preço e disponibilidade via feed",
            "Formato de coleção, experiência instantânea para mobile e otimização do catálogo para reduzir rejeições",
            "Lead Ads nativos com perguntas de qualificação, integração com CRM e campanhas Click-to-WhatsApp",
            "Métricas específicas de campanhas de leads: CPL e taxa de qualidade",
          ],
        },
        {
          title: "Advantage+, Conversions API e Escala de Verba",
          topics: [
            "Advantage+ Shopping, Audience e Creative: como a IA do Meta expande público e ajusta criativos automaticamente",
            "Comparando performance de campanhas manuais vs Advantage+ com dados reais, e quando manter controle manual",
            "Implementação da Meta Conversions API (CAPI) via servidor, com eventos redundantes ao Pixel",
            "Impacto do iOS 14+ na rastreabilidade, modelos de atribuição (data-driven, last-click, linear) e Event Match Quality Score",
            "Escala horizontal (públicos, posicionamentos, criativos) e vertical (orçamento gradual), CBO vs ABO e regras automáticas",
            "Gestão de múltiplas contas de anúncio para diferentes clientes",
          ],
        },
        {
          title: "IA Generativa para Criativos e Projeto Final",
          topics: [
            "ChatGPT para copy, headlines e roteiros de vídeo, e Midjourney/DALL-E para imagens publicitárias em escala",
            "AdCreative.ai para geração automatizada de banners, com fluxo briefing → geração → seleção → teste",
            "Boas práticas legais e éticas no uso de IA em materiais publicitários",
            "Briefing com cliente, estratégia de funil e criação da campanha completa no Gerenciador de Anúncios",
            "Acompanhamento ao vivo, otimizações e relatório executivo com métricas, insights e recomendações para o cliente",
          ],
        },
      ],
      tools: [
        "Meta Ads Manager",
        "Meta Business Manager",
        "Meta Pixel",
        "Meta Conversions API",
        "Canva",
        "HubSpot CRM",
        "RD Station",
        "ChatGPT",
        "AdCreative.ai",
        "Looker Studio",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já tentei impulsionar posts e joguei dinheiro fora sem resultado — esse curso é diferente disso?",
      a: "Sim. Impulsionar posts não é a mesma coisa que rodar campanhas de verdade no Gerenciador de Anúncios. O curso ensina a estrutura correta — campanha, conjunto de anúncios e anúncio —, o objetivo certo para cada etapa do funil e como ler métricas como CPM, CTR e ROAS para não desperdiçar verba.",
    },
    {
      q: "Quero trabalhar como gestor de tráfego para clientes — esse curso me prepara pra isso?",
      a: "Sim. O curso cobre desde a configuração profissional da conta até gestão de múltiplas contas de anúncio, relatórios executivos e apresentação de resultados para cliente — o caminho completo para atuar como gestor de tráfego no Meta.",
    },
  ],
}

function MetaAdsPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
