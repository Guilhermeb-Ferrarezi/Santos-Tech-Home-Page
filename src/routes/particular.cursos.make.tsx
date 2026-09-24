import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/make")({
  component: MakePage,
  head: () =>
    pageMeta({
      title: "Curso de Automações No-Code com Make Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar automações poderosas com Make em Ribeirão Preto: conecte apps, elimine tarefas repetitivas e integre IA sem escrever código.",
      path: "/particular/cursos/make",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Automações No-Code — Make",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "ia",
  variante: "make",
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
      levelName: "Automações No-Code — Make",
      ctaLabel: "curso de Automações com Make",
      totalHours: "48h",
      outcome:
        "Criar automações completas com Make, do zero absoluto até integrações avançadas — conectando os apps mais usados no dia a dia, aplicando lógica condicional, integrando qualquer sistema via API e webhook e incorporando Inteligência Artificial nos seus fluxos — com um projeto final de automação de processo real pronto pra aplicar no seu negócio.",
      modules: [
        {
          title: "Fundamentos do Make e Primeiro Cenário",
          topics: [
            "Diferença entre Make, Zapier e n8n: quando usar cada ferramenta",
            "Estrutura de um cenário: módulos, conexões, triggers e fluxo de dados",
            "Planos do Make, limites de operações e como economizar créditos",
            "Primeiro cenário do zero: conectando Google Sheets, Gmail e Slack em um único fluxo",
            "Tipos de trigger: webhook, agendamento e por evento",
            "Histórico de execuções: depurando erros e rastreando dados",
          ],
        },
        {
          title: "Lógica, Condições e Tratamento de Erros",
          topics: [
            "Router: dividindo fluxos por condição com múltiplas rotas",
            "Filtros em conexões: deixando passar apenas o que importa",
            "Iterator e Aggregator: processando listas e arrays de dados",
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
        {
          title: "APIs, Webhooks e Integrações em Tempo Real",
          topics: [
            "O que é uma REST API: conceito de endpoint, método e resposta JSON",
            "Usando o módulo HTTP do Make para chamar qualquer API, com autenticação via API Key, Bearer Token e OAuth 2.0",
            "Parseando e mapeando respostas JSON dentro do cenário",
            "Criando e configurando webhooks para receber dados externos em tempo real",
            "Integrando sistemas sem conector nativo e recebendo respostas do Typeform em tempo real",
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
          title: "Cenários Avançados e Projeto Final",
          topics: [
            "DataStore do Make: salvando e consultando dados entre execuções",
            "Subflows e cenários reutilizáveis para evitar duplicação de lógica",
            "Monitoramento de execuções: alertas automáticos e painel de saúde",
            "Mapeamento do processo real escolhido: entradas, saídas e pontos de dor",
            "Construção, teste e deploy do cenário em produção com dados reais",
            "Apresentação do projeto final com métricas de tempo e esforço economizados",
          ],
        },
      ],
      tools: [
        "Make",
        "Google Sheets",
        "Google Drive",
        "Gmail",
        "Slack",
        "WhatsApp Business",
        "HubSpot",
        "Shopify",
        "Typeform",
        "Airtable",
        "Notion API",
        "OpenAI API",
        "Zapier (comparativo)",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber programar para aprender Make?",
      a: "Não. Make é uma ferramenta no-code — você monta as automações visualmente, conectando módulos, sem escrever código. O curso foi desenhado justamente para quem acredita que automatizar processos é coisa só de desenvolvedor.",
    },
    {
      q: "Qual a diferença entre Make e Zapier — o curso ensina os dois?",
      a: "O curso é focado em Make, mas o primeiro módulo já compara Make, Zapier e n8n na prática, para você entender quando cada ferramenta faz mais sentido e não ficar perdido se precisar usar outra no futuro.",
    },
  ],
}

function MakePage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
