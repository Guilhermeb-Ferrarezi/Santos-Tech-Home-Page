import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/n8n")({
  component: N8nPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Automações + N8N Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a automatizar processos, criar agentes de IA e integrar sistemas sem programar. Curso presencial de N8N em Ribeirão Preto para gestores e empreendedores.",
      path: "/particular/cursos/n8n",
    }),
})

const COURSE_DATA = {
  nome: "Automações + N8N",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "ia",
  variante: "n8n",
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
      levelName: "Automações + N8N",
      ctaLabel: "curso de Automações com N8N",
      totalHours: "48h",
      outcome:
        "Criar automações completas no N8N do zero absoluto — conectando Google Sheets, e-mail, Telegram e WhatsApp com lógica condicional e agendamento automático — até consumir e expor qualquer API via Webhook e HTTP Request, integrar CRMs como HubSpot e Notion, e dar os primeiros passos em agentes de IA com o AI Agent Node, incluindo um panorama de MCP, sistemas multiagentes e automação como serviço.",
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
          title: "Nodes Essenciais e Automações do Dia a Dia",
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
          title: "Projeto Prático: Workflow de Notificações Automáticas",
          topics: [
            "Monitorar uma planilha e enviar alerta quando um valor muda",
            "Enviar relatório diário por e-mail com dados do Google Sheets",
            "Criar formulário Google Forms que dispara workflow automático",
            "Tratar erros: node Error Trigger e notificação de falha",
            "Usar templates da comunidade N8N e adaptar para sua necessidade",
          ],
        },
        {
          title: "Webhooks, HTTP Request e Integração com Qualquer API",
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
          title: "Lógica Avançada, Transformação de Dados e Integrações com CRM",
          topics: [
            "Switch, Merge e Loop Node: múltiplos caminhos, combinação de branches e iteração sobre arrays",
            "Code Node: JavaScript simples para transformações que os nodes visuais não resolvem",
            "Expressões N8N ({{$json}}, {{$node}}) para formatar datas, números e strings dinamicamente",
            "HubSpot e Notion: criar e atualizar contatos, deals e páginas direto do workflow",
            "Slack e WhatsApp Business (via Evolution API): notificações e atendimento automatizado",
            "Airtable como banco de dados no-code integrado ao N8N",
          ],
        },
        {
          title: "AI Agent Node: Primeiros Passos com Agentes de IA",
          topics: [
            "AI Agent Node: como funciona o loop de raciocínio ReAct no N8N",
            "Conectar OpenAI, Anthropic Claude e Google Gemini como LLM provider",
            "Ferramentas (tools) nativas: Code, HTTP Request, Google Sheets, Calculadora",
            "Memória de sessão e memória de janela para o agente manter contexto na conversa",
            "Projeto: agente que responde perguntas sobre dados de uma planilha em linguagem natural",
            "Depurar o raciocínio do agente com o painel de execução do N8N",
          ],
        },
        {
          title: "Panorama Avançado: MCP, Multiagentes e Automação como Serviço",
          topics: [
            "Model Context Protocol (MCP): por que virou padrão para conectar agentes a ferramentas externas, e como o N8N atua como servidor ou cliente MCP",
            "RAG básico: conectar o agente a documentos e páginas do Notion como base de conhecimento própria via embeddings",
            "Sistemas multiagentes: orquestrar múltiplos AI Agent Nodes em pipeline (padrão orchestrator-worker) para tarefas mais complexas",
            "Deploy em produção: opções simples pra colocar seu workflow no ar, do N8N Cloud a um VPS próprio com Docker",
            "Automação como serviço: como estruturar, precificar e vender automações de IA para clientes",
          ],
        },
      ],
      tools: [
        "N8N Cloud",
        "Docker",
        "Google Sheets API",
        "Gmail",
        "Telegram Bot API",
        "ngrok",
        "HubSpot",
        "Notion API",
        "Evolution API (WhatsApp)",
        "Airtable",
        "N8N AI Agent Node",
        "OpenAI API",
        "Anthropic Claude API",
        "MCP Protocol",
        "Pinecone",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber programar pra aprender N8N?",
      a: "Não. O N8N é uma ferramenta visual — você conecta blocos (nodes) pra montar automações sem escrever código. O curso é voltado justamente pra quem é gestor, analista ou empreendedor e não quer virar programador pra automatizar o próprio negócio.",
    },
    {
      q: "Já uso Zapier ou Make — vale a pena migrar para o N8N?",
      a: "Se você já sente o limite de operações ou o custo do Zapier/Make, sim. O curso mostra como o N8N resolve os mesmos problemas com mais poder e sem esse limite — inclusive indo além, com agentes de IA e integrações que essas ferramentas não oferecem.",
    },
  ],
}

function N8nPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
