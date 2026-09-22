import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/python-apis")({
  component: PythonApisPage,
  head: () =>
    pageMeta({
      title: "Curso de APIs e Integrações com Python em Ribeirão Preto — Santos Tech",
      description: "Aprenda a consumir e criar APIs REST com Python, integrar serviços externos e conectar sistemas usando webhooks. Curso presencial em Ribeirão Preto focado em automações reais.",
      path: "/adultos/cursos/python-apis",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "APIs e Integrações com Python",
  categoria: "Programação",
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
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Consome e cria APIs REST com Python, autentica com OAuth 2.0 e JWT, integra serviços como Google Sheets, Notion e Stripe, e entrega automações webhook-driven rodando em nuvem",
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
            "Projeto final: sistema de sincronização de dados entre dois serviços via API",
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
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Arquiteta plataformas de integração com filas assíncronas, observabilidade, SDK próprio e agentes de IA com LangGraph que orquestram múltiplas APIs para resolver tarefas complexas de negócio",
      modules: [
        {
          title: "FastAPI Avançado: Autenticação, Middlewares e Performance",
          topics: [
            "OAuth 2.0 completo no FastAPI: Authorization Code Flow com PKCE",
            "JWT com refresh token rotation e blacklist via Redis",
            "Middleware de rate limiting por IP e por usuário autenticado",
            "Background tasks com asyncio e workers Celery integrados ao FastAPI",
            "Cache de respostas de API com Redis e invalidação por evento",
            "Perfil de performance de endpoints com Pyinstrument e async profiling",
            "Versionamento de API: path versioning vs header versioning",
          ],
        },
        {
          title: "Filas Assíncronas e Processamento de Eventos",
          topics: [
            "Arquitetura event-driven: produtores, consumidores e event bus",
            "Celery com Redis Broker: criar tasks, chains, groups e chords",
            "Dead letter queue: capturar falhas e reprocessar tarefas",
            "Processar webhooks de alto volume com filas para evitar timeout",
            "RabbitMQ como alternativa ao Redis: exchange, routing keys e bindings",
            "Monitorar filas com Flower e alertas no Slack quando fila trava",
          ],
        },
        {
          title: "SDK e Clientes de API Profissionais",
          topics: [
            "Construir SDK Python tipado para sua API com httpx e Pydantic",
            "Async client: usar asyncio e httpx.AsyncClient para chamadas paralelas",
            "Publicar SDK no PyPI com Poetry e CI automático via GitHub Actions",
            "Gerar SDK automaticamente a partir do OpenAPI spec com openapi-generator",
            "Testes de contrato com Pact para garantir compatibilidade entre produtor e consumidor",
            "Documentação do SDK com MkDocs Material e exemplos interativos",
          ],
        },
        {
          title: "Observabilidade de Integrações em Produção",
          topics: [
            "Distributed tracing com OpenTelemetry e Jaeger para rastrear chamadas entre APIs",
            "Métricas de integração com Prometheus: latência, taxa de erro e throughput",
            "Dashboards de saúde de integrações no Grafana",
            "Alertas inteligentes: alertar quando SLA de integração externa degrada",
            "Health check endpoints e readiness/liveness probes para APIs em Docker",
            "Gestão de segredos em produção com HashiCorp Vault ou AWS Secrets Manager",
          ],
        },
        {
          title: "Agentes de IA com LangGraph e Integração de APIs",
          topics: [
            "Arquitetura de agentes com LangGraph 0.2: StateGraph, nodes e edges",
            "Tool calling com OpenAI GPT-4o e Anthropic Claude 3.5 Sonnet",
            "Criar tools que chamam APIs reais (Notion, GitHub, Stripe) como ações do agente",
            "Multi-agent: orquestrar agentes especializados com supervisor pattern",
            "Memória persistente de agentes com LangGraph Checkpointing no PostgreSQL",
            "Streaming de respostas de agente via Server-Sent Events (SSE) no FastAPI",
            "Projeto: agente que recebe ticket de suporte, consulta CRM e abre issue no GitHub automaticamente",
          ],
        },
        {
          title: "Projeto Final: Plataforma de Integração End-to-End",
          topics: [
            "Arquitetura da solução: API gateway + workers + banco de dados + fila + observabilidade",
            "Multi-tenancy: isolar integrações e credenciais por organização",
            "Armazenar e criptografar tokens OAuth de clientes com segurança (AES-256)",
            "Pipeline CI/CD com GitHub Actions: lint (Ruff), testes, build Docker e deploy",
            "Deploy no Railway com PostgreSQL, Redis e variáveis de ambiente gerenciadas",
            "Documentação técnica OpenAPI publicada e onboarding de novos integradores",
          ],
        },
      ],
      tools: [
        "FastAPI",
        "Celery",
        "Redis",
        "RabbitMQ",
        "LangGraph 0.2",
        "OpenAI API",
        "Anthropic API",
        "OpenTelemetry",
        "Prometheus",
        "Grafana",
        "Jaeger",
        "Pydantic v2",
        "Docker",
        "GitHub Actions",
        "Railway",
        "Poetry",
        "Ruff",
        "MkDocs",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber Python pra fazer esse curso?",
      a: "Sim, o curso pressupõe Python básico — variáveis, funções, estruturas de controle. A partir daí ele foca 100% em integrar sistemas reais: consumir e criar APIs, autenticar com OAuth e JWT, e conectar serviços externos.",
    },
    {
      q: "Qual a diferença entre os níveis Intermediário e Profissional + IA?",
      a: "No Intermediário você consome e cria APIs REST, autentica com OAuth 2.0 e JWT, integra serviços como Google Sheets, Notion e Stripe, e recebe eventos via webhook. No Profissional + IA você avança pra filas assíncronas, observabilidade em produção, SDK próprio publicado no PyPI e agentes de IA com LangGraph que orquestram várias APIs.",
    },
    {
      q: "Esse curso ensina a integrar ferramentas como Slack, Notion e Google Sheets?",
      a: "Sim, tem projetos práticos com exatamente essas integrações, além de Stripe e Twilio — incluindo um pipeline real que lê pedidos do Google Sheets e cria cobranças no Stripe.",
    },
  ],
}

function PythonApisPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
