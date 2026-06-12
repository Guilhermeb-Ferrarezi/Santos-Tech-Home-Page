import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/meta-ads")({
  component: MetaAdsPage,
  head: () =>
    pageMeta({
      title: "Curso de Meta Ads para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar campanhas lucrativas no Facebook e Instagram com Meta Ads em Ribeirão Preto. Do básico ao Advantage+ com IA.",
      path: "/adultos/cursos/meta-ads",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Configurar uma conta de anúncios profissional, criar campanhas com objetivo correto, segmentar o público certo e ler métricas para tomar as primeiras decisões com dados",
      modules: [
        {
          title: "Business Manager e Estrutura do Meta Ads",
          topics: [
            "Criação e configuração do Meta Business Manager do zero",
            "Instalação e verificação do Meta Pixel no site",
            "Hierarquia campanha → conjunto de anúncios → anúncio na prática",
            "Gerenciamento de permissões, contas de anúncio e páginas",
            "Verificação de domínio e conformidade com a política do Meta",
          ],
        },
        {
          title: "Tipos de Campanha e Objetivos",
          topics: [
            "Reconhecimento de marca e alcance: quando e por que usar",
            "Campanhas de tráfego e engajamento: atrair visitantes e interações",
            "Campanhas de geração de leads: capturar contatos qualificados",
            "Campanhas de conversão e vendas: otimizar para o resultado final",
            "Escolhendo o objetivo certo para cada etapa do funil de vendas",
          ],
        },
        {
          title: "Segmentação de Público",
          topics: [
            "Configuração de interesses, comportamentos e dados demográficos",
            "Criação e organização de públicos salvos reutilizáveis",
            "Retargeting básico: alcançar quem visitou o site ou interagiu",
            "Exclusão de públicos para evitar desperdício de verba",
            "Estimativa de tamanho de público e alcance potencial",
          ],
        },
        {
          title: "Criação de Anúncios Eficazes",
          topics: [
            "Formatos disponíveis: imagem única, vídeo, carrossel e stories",
            "Copywriting persuasivo: estrutura de headline, texto e CTA",
            "Especificações técnicas e boas práticas de design para cada formato",
            "Políticas de aprovação do Meta e como evitar reprovações",
            "Checklist pré-publicação para anúncios profissionais",
          ],
        },
        {
          title: "Métricas e Análise Básica",
          topics: [
            "CPM, CPC, CTR e frequência: o que cada métrica revela",
            "ROAS e custo por resultado: avaliando a lucratividade da campanha",
            "Navegação e personalização do Gerenciador de Relatórios",
            "Identificando anúncios que performam e os que drenam o orçamento",
            "Tomando decisões de pausar, editar ou escalar com base em dados",
          ],
        },
      ],
      tools: ["Meta Ads Manager", "Meta Business Manager", "Meta Pixel", "Canva"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Montar funis de vendas completos com retargeting, conduzir testes A/B estruturados, criar anúncios dinâmicos para e-commerce e gerar leads qualificados via formulários nativos e WhatsApp",
      modules: [
        {
          title: "Públicos Personalizados e Lookalike",
          topics: [
            "Custom Audiences a partir de lista de clientes (CSV/email/telefone)",
            "Públicos de tráfego do site por URL, tempo de permanência e evento",
            "Públicos de engajamento: vídeo, Instagram, Facebook e formulários",
            "Criação de Lookalike Audiences de 1% a 10% e quando usar cada faixa",
            "Estratégia de empilhamento e exclusão para públicos mais precisos",
          ],
        },
        {
          title: "Retargeting Avançado e Funil de Vendas",
          topics: [
            "Arquitetura de funil topo, meio e fundo com sequência de anúncios",
            "Configuração de janelas de atribuição e impacto nos resultados",
            "Exclusão de conversores para otimizar verba no fundo de funil",
            "Anúncios de upsell e cross-sell para clientes recentes",
            "Mensuração do caminho completo do lead até a conversão",
          ],
        },
        {
          title: "Testes A/B e Dynamic Creative",
          topics: [
            "Metodologia de teste de variável única: público, criativo ou posicionamento",
            "Configuração de experimentos A/B no Gerenciador de Anúncios",
            "Dynamic Creative Optimization: combinações automáticas de criativos",
            "Identificando e combatendo a fadiga de anúncio com rotação",
            "Documentando aprendizados para escalar o que funciona",
          ],
        },
        {
          title: "Catálogo e Anúncios Dinâmicos",
          topics: [
            "Configuração do Catalog Manager e importação de produtos",
            "Dynamic Ads para e-commerce: mostrando o produto certo para cada usuário",
            "Formato de coleção e experiência instantânea para mobile",
            "Anúncios com preço e disponibilidade dinâmicos via feed de dados",
            "Otimização do catálogo para reduzir rejeições e melhorar entrega",
          ],
        },
        {
          title: "Lead Ads e WhatsApp Ads",
          topics: [
            "Criação de formulários nativos de geração de leads no Meta",
            "Integração de Lead Ads com CRM e automação de seguimento",
            "Configuração de campanhas Click-to-WhatsApp",
            "Qualificação de leads com perguntas personalizadas no formulário",
            "Métricas específicas de campanhas de leads: CPL e taxa de qualidade",
          ],
        },
      ],
      tools: [
        "Meta Ads Manager",
        "Meta Business Manager",
        "Meta Pixel",
        "Canva",
        "HubSpot CRM",
        "RD Station",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Operar campanhas em escala com automação inteligente do Meta Advantage+, implementar Conversions API para rastreamento preciso pós-iOS 14, usar IA generativa para produção de criativos em escala e entregar relatórios executivos completos para clientes",
      modules: [
        {
          title: "Advantage+ e Automação com IA do Meta",
          topics: [
            "Advantage+ Shopping Campaigns: estrutura, vantagens e limitações",
            "Advantage+ Audience: como a IA expande e otimiza o público automaticamente",
            "Advantage+ Creative: ajustes automáticos de brilho, contraste e enquadramento",
            "Comparando performance de campanhas manuais vs Advantage+ com dados reais",
            "Quando confiar na IA do Meta e quando manter controle manual",
          ],
        },
        {
          title: "Atribuição Avançada e Conversions API",
          topics: [
            "Implementação da Meta Conversions API (CAPI) via servidor",
            "Configuração de eventos CAPI para redundância com o Pixel",
            "Impacto do iOS 14+ na rastreabilidade e soluções práticas",
            "Modelos de atribuição: data-driven vs last-click vs linear",
            "Auditando a qualidade dos eventos com o Event Match Quality Score",
          ],
        },
        {
          title: "Escala e Gestão de Verba",
          topics: [
            "Escala horizontal: novos públicos, posicionamentos e criativos",
            "Escala vertical: aumento gradual de orçamento sem quebrar o aprendizado",
            "CBO vs ABO: quando delegar o controle de verba ao algoritmo",
            "Criação de regras automáticas para pausar, aumentar e diminuir orçamentos",
            "Gestão de múltiplas contas de anúncio para diferentes clientes",
          ],
        },
        {
          title: "IA Generativa para Criativos",
          topics: [
            "ChatGPT para geração de copy, variações de headline e roteiros de vídeo",
            "Midjourney e DALL-E para criação de imagens publicitárias em escala",
            "AdCreative.ai: geração automatizada de banners e variações de anúncio",
            "Fluxo de produção criativa com IA: briefing → geração → seleção → teste",
            "Boas práticas legais e éticas no uso de IA em materiais publicitários",
          ],
        },
        {
          title: "Projeto Final: Campanha Completa",
          topics: [
            "Briefing com cliente: levantamento de objetivos, público e verba",
            "Estratégia de funil: definição de fases, formatos e cronograma",
            "Criação e configuração completa da campanha no Gerenciador",
            "Acompanhamento ao vivo, otimizações e registro de aprendizados",
            "Relatório executivo com métricas, insights e recomendações para o cliente",
          ],
        },
      ],
      tools: [
        "Meta Ads Manager",
        "Meta Business Manager",
        "Meta Pixel",
        "Meta Conversions API",
        "Canva",
        "ChatGPT",
        "AdCreative.ai",
        "Looker Studio",
        "HubSpot CRM",
        "RD Station",
      ],
    },
  ],
}

function MetaAdsPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
