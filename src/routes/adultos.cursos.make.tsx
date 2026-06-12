import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/make")({
  component: MakePage,
  head: () =>
    pageMeta({
      title: "Curso de Automações No-Code com Make para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar automações poderosas com Make em Ribeirão Preto: conecte apps, elimine tarefas repetitivas e integre IA sem escrever código.",
      path: "/adultos/cursos/make",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Automações No-Code — Make",
  categoria: "Programação",
  tagline: "Conecte qualquer app e automatize tarefas repetitivas sem escrever uma linha de código",
  targetAudience: [
    "Você perde horas por semana copiando dados entre planilhas, e-mails e sistemas diferentes",
    "Você quer automatizar processos do seu negócio mas não sabe programar e acredita que isso é só para devs",
    "Você já ouviu falar de Zapier ou Make e quer entender qual usar e como tirar o máximo proveito",
    "Você é freelancer, empreendedor ou profissional de marketing e precisa escalar sem contratar mais pessoas",
    "Você quer integrar ferramentas como WhatsApp, CRM, Google Sheets e redes sociais de forma automática",
    "Você deseja usar Inteligência Artificial dentro das suas automações para classificar, resumir e gerar conteúdo",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar automações práticas com os apps mais usados no dia a dia — Google Sheets, Gmail, Slack e WhatsApp — eliminando tarefas manuais e repetitivas",
      modules: [
        {
          title: "O que é Make e a Lógica de Automação",
          topics: [
            "Diferença entre Make, Zapier e N8N: quando usar cada ferramenta",
            "Estrutura de um cenário: módulos, conexões e fluxo de dados",
            "Planos do Make, limites de operações e como economizar créditos",
            "Conceito de trigger, ação e mapeamento de variáveis",
            "Criando e executando o primeiro cenário do zero",
          ],
        },
        {
          title: "Primeiras Automações com Apps Populares",
          topics: [
            "Conectando Google Sheets, Gmail e Slack em um único fluxo",
            "Tipos de trigger: webhook, agendamento e por evento",
            "Mapeamento de dados entre módulos: campos dinâmicos e variáveis",
            "Histórico de execuções: depurando erros e rastreando dados",
            "Boas práticas para nomear e organizar cenários",
          ],
        },
        {
          title: "Lógica e Condições nos Cenários",
          topics: [
            "Router: dividindo fluxos por condição com múltiplas rotas",
            "Filtros em conexões: deixando passar apenas o que importa",
            "Iterator e Aggregator básicos: processando listas de dados",
            "Set Variable e manipulação de texto e números",
            "Tratando erros com o módulo Error Handler e notificações de falha",
          ],
        },
        {
          title: "Automações para Vendas e Atendimento",
          topics: [
            "Lead do Facebook Ads enviado automaticamente para o CRM",
            "Formulário do site dispara mensagem no WhatsApp e atualiza planilha",
            "Novo pedido no Shopify gera e-mail de confirmação e atualiza controle",
            "Follow-up pós-reunião: e-mail automático com resumo e próximos passos",
            "Notificando o time no Slack quando uma oportunidade muda de estágio",
          ],
        },
        {
          title: "Automações para Produtividade Pessoal",
          topics: [
            "E-mail com anexo salvo automaticamente em pasta organizada no Google Drive",
            "Agendamento automático de posts nas redes sociais a partir de planilha",
            "Relatório semanal gerado e enviado por e-mail sem intervenção manual",
            "Notificações inteligentes: só receba alertas quando o que importa acontece",
            "Dashboard pessoal atualizado automaticamente com dados do dia",
          ],
        },
      ],
      tools: ["Make", "Google Sheets", "Google Drive", "Gmail", "Slack", "WhatsApp Business", "Zapier (comparativo)"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Construir automações avançadas com APIs, webhooks e IA — integrando qualquer sistema, processando dados em tempo real e entregando um projeto completo de automação de processo real",
      modules: [
        {
          title: "APIs e Módulos HTTP no Make",
          topics: [
            "O que é uma REST API: conceito de endpoint, método e resposta JSON",
            "Usando o módulo HTTP do Make para chamar qualquer API",
            "Autenticação: API Key, Bearer Token e OAuth 2.0 na prática",
            "Parseando e mapeando respostas JSON dentro do cenário",
            "Testando requisições com Insomnia antes de integrar ao Make",
          ],
        },
        {
          title: "Webhooks e Integrações em Tempo Real",
          topics: [
            "Criando e configurando webhooks no Make para receber dados externos",
            "Integrando sistemas que não têm conector nativo via webhook personalizado",
            "Recebendo respostas de formulários do Typeform em tempo real",
            "Capturando eventos do WhatsApp Business e disparando fluxos automáticos",
            "Boas práticas de segurança e validação de payload em webhooks",
          ],
        },
        {
          title: "Make + IA: Automações Inteligentes",
          topics: [
            "Configurando o módulo OpenAI no Make com sua chave de API",
            "Classificação automática de leads por perfil usando GPT",
            "Geração de copy de produto e descrições a partir de dados da planilha",
            "Moderação automática de comentários e conteúdo com IA",
            "Resumo automático de e-mails longos enviado para Slack ou WhatsApp",
          ],
        },
        {
          title: "Cenários Complexos e Boas Práticas",
          topics: [
            "DataStore do Make: salvando e consultando dados entre execuções",
            "Subflows e cenários reutilizáveis para evitar duplicação de lógica",
            "Gerenciamento avançado de erros com fallbacks e alertas automáticos",
            "Documentando cenários: descrições, notas e versionamento",
            "Monitoramento de execuções: alertas por e-mail e painel de saúde",
          ],
        },
        {
          title: "Projeto Final: Automação de Processo Real",
          topics: [
            "Mapeamento do processo escolhido: entradas, saídas e pontos de dor",
            "Desenho do fluxo no Make: módulos, condições e integrações necessárias",
            "Construção e teste iterativo do cenário com dados reais",
            "Deploy, agendamento e monitoramento em produção",
            "Apresentação do projeto com métricas de tempo e esforço economizados",
          ],
        },
      ],
      tools: [
        "Make",
        "OpenAI API",
        "Google Sheets",
        "Google Drive",
        "Gmail",
        "Slack",
        "HubSpot",
        "Shopify",
        "Typeform",
        "Airtable",
        "Notion API",
        "WhatsApp Business",
      ],
    },
  ],
}

function MakePage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
