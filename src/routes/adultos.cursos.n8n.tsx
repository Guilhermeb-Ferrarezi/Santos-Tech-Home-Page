import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/n8n")({
  component: N8nPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Automações + N8N para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a automatizar processos, criar agentes de IA e integrar sistemas sem programar. Curso presencial de N8N em Ribeirão Preto para gestores e empreendedores.",
      path: "/adultos/cursos/n8n",
    }),
})

const COURSE_DATA = {
  nome: "Automações + N8N",
  categoria: "Programação",
  tagline: "Conecte qualquer sistema e crie agentes de IA sem escrever código",
  targetAudience: [
    "Você quer automatizar processos do seu negócio mas não quer aprender programação",
    "Você é gestor, analista ou empreendedor que perde tempo em tarefas manuais repetitivas",
    "Você quer criar integrações entre ferramentas como WhatsApp, Google Sheets, CRM e e-mail",
    "Você já usa Zapier ou Make e quer uma ferramenta mais poderosa e sem limite de operações",
    "Você quer montar agentes de IA para atendimento ou triagem sem contratar desenvolvedor",
    "Você quer oferecer automação como serviço para clientes",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Capaz de criar workflows funcionais no N8N conectando Google Sheets, e-mail, Telegram e WhatsApp, com lógica condicional e agendamento automático",
      modules: [
        {
          title: "Fundamentos do N8N",
          topics: [
            "O que é N8N e como se compara ao Zapier e Make",
            "Instalação via Docker (local) e acesso ao N8N Cloud",
            "Interface: canvas, nodes, conexões e execuções",
            "Diferença entre Trigger Node e Action Node",
            "Executar workflows manualmente vs por agendamento",
            "Inspecionar dados em cada node com o painel de debug",
          ],
        },
        {
          title: "Nodes Essenciais e Integrações Básicas",
          topics: [
            "Google Sheets: ler, escrever, atualizar e buscar linhas",
            "Gmail e Outlook: enviar e-mails com anexos dinâmicos",
            "Telegram Bot: enviar mensagens e receber comandos",
            "Schedule Trigger: cron jobs visuais sem código",
            "IF Node: criar ramificações condicionais no fluxo",
            "Set Node: transformar e mapear campos de dados",
          ],
        },
        {
          title: "Projeto: Workflow de Notificações Automáticas",
          topics: [
            "Monitorar uma planilha e enviar alerta quando valor muda",
            "Enviar relatório diário por e-mail com dados do Google Sheets",
            "Criar formulário Google Forms que dispara workflow automático",
            "Tratar erros: node Error Trigger e notificação de falha",
            "Usar templates da comunidade N8N e adaptar para sua necessidade",
          ],
        },
      ],
      tools: [
        "N8N Cloud",
        "Docker",
        "Google Sheets API",
        "Telegram Bot API",
        "Gmail",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Constrói automações com Webhook, HTTP Request para qualquer API, lógica avançada com Switch e Merge, e integra N8N com CRMs, WhatsApp Business e bancos de dados",
      modules: [
        {
          title: "Webhooks e HTTP Request",
          topics: [
            "O que é um Webhook e como configurar no N8N",
            "Receber dados de sistemas externos via Webhook Trigger",
            "HTTP Request Node: consumir qualquer API REST",
            "Autenticação: API Key, Bearer Token e OAuth2 no N8N",
            "Enviar dados para APIs de pagamento (Stripe, Mercado Pago)",
            "Testar webhooks com ngrok em ambiente local",
          ],
        },
        {
          title: "Lógica Avançada e Transformação de Dados",
          topics: [
            "Switch Node: múltiplos caminhos baseados em valor",
            "Merge Node: combinar dados de dois branches",
            "Loop Node: iterar sobre arrays de itens",
            "Code Node: JavaScript simples para transformações complexas",
            "Expressões N8N: {{$json}}, {{$node}}, funções built-in",
            "Formatação de datas, números e strings com expressões",
          ],
        },
        {
          title: "Integrações com CRM e Comunicação",
          topics: [
            "HubSpot: criar e atualizar contatos e deals via N8N",
            "Notion: criar páginas, atualizar banco de dados",
            "Slack: enviar mensagens e criar canais programaticamente",
            "WhatsApp Business API via Evolution API + N8N",
            "Airtable como banco de dados no-code integrado ao N8N",
          ],
        },
        {
          title: "Sub-Workflows e Organização de Projetos",
          topics: [
            "Criar Sub-Workflows reutilizáveis (como funções)",
            "Executar Sub-Workflow de dentro de outro fluxo",
            "Nomear nodes e usar sticky notes para documentação",
            "Organizar workflows com pastas no N8N",
            "Controle de versão e backup de workflows em JSON",
          ],
        },
      ],
      tools: [
        "N8N",
        "ngrok",
        "HubSpot",
        "Notion API",
        "Evolution API (WhatsApp)",
        "Airtable",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Construir agentes de IA com N8N AI Agent Node, orquestrar sistemas multiagentes, integrar MCP (Model Context Protocol), deployar N8N em VPS e entregar automações de IA como serviço para clientes",
      modules: [
        {
          title: "N8N AI Agent Node — Agentes Nativos",
          topics: [
            "AI Agent Node: como funciona o loop de raciocínio ReAct no N8N",
            "Conectar OpenAI, Anthropic Claude e Google Gemini como LLM provider",
            "Ferramentas (tools) nativas: Code, HTTP Request, Google Sheets, Calculadora",
            "Memória de sessão e memória de janela para agentes com contexto",
            "Subagentes: chamar um AI Agent de dentro de outro Agent",
            "Depurar o raciocínio do agente com o painel de execução do N8N",
          ],
        },
        {
          title: "Model Context Protocol (MCP) no N8N",
          topics: [
            "O que é MCP e por que se tornou o padrão para ferramentas de IA em 2025",
            "N8N como servidor MCP: expor workflows como ferramentas para agentes externos",
            "Conectar Claude Desktop e Cursor ao N8N via MCP",
            "N8N como cliente MCP: consumir ferramentas de servidores MCP externos",
            "Autenticação e segurança em servidores MCP",
            "Casos de uso: agente que acessa banco de dados, CRM e e-mail via MCP",
          ],
        },
        {
          title: "RAG e Bases de Conhecimento com N8N",
          topics: [
            "Embeddings no N8N: gerar e armazenar vetores com OpenAI e Supabase pgvector",
            "Vector Store Node: Pinecone, Qdrant e Supabase como bases vetoriais",
            "Pipeline de ingestão: carregar PDFs, Notion e websites na base de conhecimento",
            "Retrieval no N8N: busca semântica integrada ao AI Agent Node",
            "Atualização incremental da base de conhecimento via webhook",
            "Projeto: chatbot corporativo que responde a partir dos documentos da empresa",
          ],
        },
        {
          title: "Sistemas Multiagentes com N8N",
          topics: [
            "Padrão Orchestrator-Worker: agente gestor delega para sub-agentes especialistas",
            "Agente pesquisador + agente redator + agente revisor em pipeline",
            "Comunicação entre agentes via HTTP Request e Webhook internos",
            "Controle de estado e contexto compartilhado entre agentes",
            "Avaliador automático de qualidade no loop de agentes",
            "Projeto: sistema de geração de relatórios com 3 agentes em cadeia",
          ],
        },
        {
          title: "Deploy e N8N em Produção",
          topics: [
            "Deploy do N8N self-hosted em VPS com Docker Compose e Nginx",
            "Configuração de SSL com Let's Encrypt e domínio próprio",
            "Variáveis de ambiente, secrets e boas práticas de segurança",
            "Backup automático de workflows e banco de dados N8N",
            "Monitoramento com UptimeRobot e alertas de falha por Telegram",
            "Escalabilidade: N8N em modo queue com Redis para alta demanda",
          ],
        },
        {
          title: "Automação de IA como Serviço (AaaS)",
          topics: [
            "Modelo de negócio: vender automações de IA para pequenas empresas",
            "Precificação por setup, mensalidade e número de execuções",
            "Criar white-label de N8N para clientes com domínio próprio",
            "Contratos, SLA e gestão de múltiplos clientes com N8N",
            "Apresentar ROI de automações: horas economizadas, custo por tarefa",
            "Portfólio de automações mais vendidas: atendimento, relatórios e marketing",
          ],
        },
      ],
      tools: [
        "N8N",
        "N8N AI Agent Node",
        "MCP Protocol",
        "OpenAI API",
        "Anthropic Claude API",
        "Pinecone",
        "Supabase pgvector",
        "Docker",
        "Nginx",
        "Redis",
      ],
    },
  ],
}

function N8nPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
