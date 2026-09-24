import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/python-apis")({
  component: PythonApisPage,
  head: () =>
    pageMeta({
      title: "Curso de APIs e Integrações com Python em Ribeirão Preto — Santos Tech",
      description: "Aprenda a consumir e criar APIs REST com Python, integrar serviços externos e conectar sistemas usando webhooks. Curso presencial em Ribeirão Preto focado em automações reais.",
      path: "/particular/cursos/python-apis",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "APIs e Integrações com Python",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "python",
  variante: "python-apis",
  tagline: "Conecte qualquer sistema e integre IA em seus projetos com Python",
  targetAudience: [
    "Você já sabe Python básico e quer integrar sistemas reais para automatizar fluxos de negócio",
    "Você trabalha em TI ou operações e precisa conectar ferramentas que não conversam entre si",
    "Você quer construir automações que disparam ações em Slack, Notion, Google Sheets ou HubSpot via API",
    "Você é dev iniciante e quer entender como APIs, webhooks e integrações funcionam de verdade",
    "Você quer criar produtos SaaS que consomem e expõem APIs como produto principal",
    "Você busca evoluir de scripts locais para sistemas integrados que rodam 24h em servidor",
  ],
  tiers: [
    {
      levelName: "APIs e Integrações com Python",
      ctaLabel: "curso de APIs com Python",
      totalHours: "48h",
      outcome:
        "Domina o ciclo completo de integrações com Python: consome e cria APIs REST, autentica com OAuth 2.0 e JWT, conecta serviços como Google Sheets, Notion, Slack e Stripe, recebe eventos via webhook, entrega sua própria API com FastAPI e ainda processa tarefas em fila e constrói um agente de IA que aciona APIs reais para automatizar tarefas de negócio",
      modules: [
        {
          title: "HTTP e APIs REST com Python",
          topics: [
            "Protocolo HTTP na prática: métodos, headers, status codes e body",
            "Fazer requisições GET, POST, PUT, PATCH, DELETE com httpx e requests",
            "Inspecionar APIs com Insomnia e Bruno (alternativa open-source ao Postman)",
            "Manipular respostas JSON: parsing, validação e tratamento de erros",
            "Query params, path params e paginação de resultados (cursor vs offset)",
            "Projeto: coletar dados de API pública e salvar em CSV e SQLite",
          ],
        },
        {
          title: "Autenticação em APIs",
          topics: [
            "API Keys: enviar via header, query param e bearer token",
            "OAuth 2.0: fluxo Authorization Code e Client Credentials com requests-oauthlib",
            "JWT: decodificar e validar tokens com PyJWT sem biblioteca de terceiros",
            "Gerenciar refresh tokens e renovação automática de sessão",
            "Armazenar credenciais com segurança usando python-dotenv e variáveis de ambiente",
            "Projeto: autenticar na API do GitHub e listar repositórios privados",
          ],
        },
        {
          title: "Integrações com Serviços Populares",
          topics: [
            "Google Sheets API v4: ler, escrever e formatar células via Python",
            "Notion API: criar páginas, atualizar databases e consultar filtros",
            "Slack API: enviar mensagens, criar canais e responder a eventos",
            "Twilio: enviar SMS e WhatsApp programaticamente",
            "Stripe API: criar clientes, cobranças e consultar transações",
            "Projeto: pipeline que lê pedidos do Google Sheets e cria cobranças no Stripe",
          ],
        },
        {
          title: "Webhooks: Receber Eventos em Tempo Real",
          topics: [
            "Como funcionam webhooks vs polling: diferenças e quando usar cada um",
            "Criar servidor de webhook com Flask para receber payloads",
            "Validar assinatura HMAC-SHA256 de webhooks (Stripe, GitHub, Shopify)",
            "Processar eventos assincronamente com filas simples (Redis + RQ)",
            "Expor servidor local para testes com ngrok e Cloudflare Tunnel",
            "Projeto: webhook do Stripe que atualiza planilha do Google Sheets ao receber pagamento",
          ],
        },
        {
          title: "Criando Sua Primeira API com FastAPI",
          topics: [
            "Estrutura de projeto FastAPI com UV e pyproject.toml",
            "Rotas GET, POST, PUT, DELETE com tipagem Pydantic v2",
            "Validação automática de corpo da requisição e query params",
            "Autenticação com API Key via Depends no FastAPI",
            "Documentação automática com Swagger UI e ReDoc",
            "Deploy da API no Render ou Railway com variáveis de ambiente",
          ],
        },
        {
          title: "Resiliência e Boas Práticas de Integração",
          topics: [
            "Retry automático com backoff exponencial usando tenacity",
            "Circuit breaker: evitar cascata de falhas em integrações externas",
            "Logging estruturado de chamadas de API com structlog",
            "Rate limiting: respeitar limites de API e usar filas de throttling",
            "Testar integrações sem chamar API real com responses e pytest-httpx",
            "Projeto: sistema de sincronização de dados entre dois serviços via API",
          ],
        },
        {
          title: "Processamento Assíncrono com Filas",
          topics: [
            "Arquitetura event-driven na prática: por que tirar tarefas lentas do caminho principal da API",
            "Celery com Redis Broker: criar e disparar tasks assíncronas a partir do FastAPI",
            "Retry automático de tasks com backoff e Dead Letter Queue pra não perder evento com falha",
            "Processar webhooks de alto volume em fila pra evitar timeout, evoluindo a fila simples da aula de Webhooks",
            "Projeto: mover o processamento do webhook do Stripe pra uma fila Celery com retry automático",
          ],
        },
        {
          title: "Agentes de IA que Chamam APIs Reais",
          topics: [
            "Tool calling com LLMs (OpenAI GPT-4o e Anthropic Claude): como o modelo decide qual função chamar",
            "Criar tools que chamam APIs reais (GitHub, Notion, Stripe) como ações disponíveis pro agente",
            "Arquitetura básica de agente com LangGraph: state, nodes e edges pra decidir o próximo passo",
            "Projeto final: agente que recebe um ticket de suporte, consulta uma API externa e abre issue no GitHub automaticamente",
            "Panorama avançado pra quem for pra produção: observabilidade (Prometheus, Grafana, Jaeger), publicar SDK próprio no PyPI e arquitetura multi-tenant pra atender vários clientes",
          ],
        },
      ],
      tools: [
        "Python 3.12",
        "httpx",
        "requests",
        "FastAPI",
        "Pydantic v2",
        "Flask",
        "Google Sheets API",
        "Notion API",
        "Stripe API",
        "Slack API",
        "Twilio",
        "tenacity",
        "ngrok",
        "Redis",
        "Insomnia",
        "pytest-httpx",
        "Celery",
        "LangGraph",
        "OpenAI API",
        "Anthropic API",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber Python pra fazer esse curso?",
      a: "Sim, o curso pressupõe Python básico — variáveis, funções, estruturas de controle. A partir daí ele foca 100% em integrar sistemas reais: consumir e criar APIs, autenticar com OAuth e JWT, conectar serviços externos e, no fim do curso, processar tarefas em fila e construir um agente de IA que chama APIs de verdade.",
    },
    {
      q: "Esse curso ensina a integrar ferramentas como Slack, Notion e Google Sheets?",
      a: "Sim, tem projetos práticos com exatamente essas integrações, além de Stripe e Twilio — incluindo um pipeline real que lê pedidos do Google Sheets e cria cobranças no Stripe.",
    },
  ],
}

function PythonApisPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
