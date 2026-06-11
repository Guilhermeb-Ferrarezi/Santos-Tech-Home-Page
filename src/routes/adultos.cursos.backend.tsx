import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/backend")({
  component: BackendPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento Web Back-End para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Node.js, FastAPI, NestJS e PostgreSQL do zero ao SaaS em produção. Aulas individuais, horário flexível e projeto real com APIs REST, JWT e deploy em nuvem.",
      path: "/adultos/cursos/backend",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Desenvolvimento Web Back-End",
  categoria: "Programação",
  tagline: "Construa o motor das aplicações que movem negócios reais na internet",
  targetAudience: [
    "Você é front-end e quer se tornar full stack para aumentar seu salário",
    "Você quer construir APIs e sistemas que suportam milhares de usuários",
    "Você tem lógica de programação e quer entrar direto no desenvolvimento back-end",
    "Você quer criar seu próprio SaaS ou produto digital do zero",
    "Você trabalha com dados e quer expor modelos via API para consumo de aplicações",
    "Você quer trabalhar em empresa de produto (fintech, health tech, edtech) como back-end developer",
  ],
  tiers: [
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Desenvolve APIs seguras com autenticação JWT, conectadas a PostgreSQL, com testes automatizados, upload de arquivos e deploy em nuvem; domina tanto Node.js quanto FastAPI em Python",
      modules: [
        {
          title: "Fundamentos de APIs REST",
          topics: [
            "O que é uma API REST e o protocolo HTTP",
            "Verbos HTTP: GET, POST, PUT, PATCH, DELETE",
            "Status codes: 200, 201, 400, 401, 403, 404, 500",
            "JSON como formato de troca de dados",
            "Testar APIs com Insomnia e Thunder Client (VS Code)",
            "Anatomia de uma requisição: headers, body, query params, path params",
          ],
        },
        {
          title: "Criando API com Node.js e Express",
          topics: [
            "Setup do projeto Node.js com npm e package.json",
            "Criar servidor HTTP com Express",
            "Definir rotas GET, POST, PUT, DELETE",
            "Middleware: CORS, JSON parser, logging com Morgan",
            "Organizar código em routers e controllers",
            "Validação de dados de entrada com Zod",
          ],
        },
        {
          title: "Banco de Dados Relacional com SQLite e Prisma",
          topics: [
            "Conceitos: tabelas, colunas, tipos, chaves primárias e estrangeiras",
            "ORM vs SQL puro: vantagens e trade-offs",
            "Configurar Prisma com SQLite",
            "Schema do Prisma: models, relações e migrations",
            "CRUD completo via Prisma Client",
            "Projeto: API de cadastro de tarefas com banco de dados",
          ],
        },
        {
          title: "Autenticação e Autorização",
          topics: [
            "Sessões vs tokens: por que usar JWT",
            "Criar e assinar JWT com payload customizado",
            "Middleware de autenticação: verificar token em rotas protegidas",
            "Refresh tokens e expiração segura",
            "Hash de senhas com bcrypt",
            "RBAC: controle de acesso por papéis (admin, user, moderator)",
          ],
        },
        {
          title: "PostgreSQL em Produção com Prisma",
          topics: [
            "Migrar de SQLite para PostgreSQL",
            "Relações 1-N e N-N com Prisma: include e select",
            "Migrations e seed de dados",
            "Índices para otimização de queries",
            "Connection pooling com PgBouncer no Supabase",
            "Transações com prisma.$transaction()",
          ],
        },
        {
          title: "FastAPI com Python: API Moderna e Tipada",
          topics: [
            "Estrutura de projeto FastAPI com Poetry ou UV",
            "Rotas, path params, query params e request body com Pydantic",
            "Dependency injection no FastAPI",
            "Autenticação OAuth2 com JWT no FastAPI",
            "SQLModel (Pydantic + SQLAlchemy) para banco de dados",
            "Documentação automática: Swagger UI e ReDoc",
          ],
        },
        {
          title: "Upload, E-mail e Testes",
          topics: [
            "Upload de arquivos para AWS S3 ou Cloudflare R2",
            "Envio de e-mails transacionais com Resend ou SendGrid",
            "Testes unitários com Jest (Node.js) ou Pytest (Python)",
            "Testes de integração de rotas com Supertest",
            "Cobertura de testes e CI com GitHub Actions",
          ],
        },
      ],
      tools: [
        "Node.js",
        "Express",
        "Prisma",
        "SQLite",
        "PostgreSQL",
        "Insomnia",
        "Zod",
        "JWT",
        "bcrypt",
        "FastAPI",
        "Pydantic",
        "AWS S3",
        "Jest",
        "Pytest",
        "GitHub Actions",
      ],
    },
    {
      label: "3 meses",
      levelName: "Profissional + IA",
      totalHours: "60h",
      outcome:
        "Arquiteta sistemas back-end escaláveis com NestJS, filas assíncronas, cache com Redis, monitoramento em produção e integração com IA generativa; entrega uma API completa de SaaS com multi-tenancy e documentação profissional",
      modules: [
        {
          title: "NestJS: Arquitetura Enterprise",
          topics: [
            "Arquitetura modular do NestJS: modules, controllers, services, providers",
            "Injeção de dependência e inversão de controle (IoC)",
            "Guards, Interceptors e Pipes para validação e transformação",
            "Exception filters globais e respostas padronizadas",
            "Documentação de API com Swagger/OpenAPI no NestJS",
            "Testes com Jest no ecossistema NestJS",
          ],
        },
        {
          title: "Filas Assíncronas e Mensageria",
          topics: [
            "Por que usar filas: casos de uso (e-mails, processamento de imagens, notificações)",
            "BullMQ com Redis: criar producers e workers",
            "Retry automático, dead letter queue e prioridade de jobs",
            "WebSockets com Socket.io para comunicação em tempo real",
            "Webhooks: enviar notificações para sistemas externos",
          ],
        },
        {
          title: "Cache, Performance e Observabilidade",
          topics: [
            "Redis como cache: cache-aside pattern com invalidação",
            "Estratégias de cache: TTL, LRU e cache por usuário",
            "Rate limiting com Redis para proteção de API",
            "Monitoramento com Prometheus + Grafana",
            "Logs estruturados com Pino e integração com Datadog ou Logtail",
            "APM: rastrear performance de endpoints lentos",
          ],
        },
        {
          title: "IA Integrada ao Back-End",
          topics: [
            "Integrar OpenAI API no NestJS com streaming de resposta",
            "Embeddings e busca semântica com pgvector no PostgreSQL",
            "RAG (Retrieval-Augmented Generation): indexar documentos e responder perguntas",
            "Webhook de IA: processar resultados assincronamente",
            "Limitar e cobrar pelo uso de IA: metering por tokens",
          ],
        },
        {
          title: "Projeto Final: API de SaaS Completo",
          topics: [
            "Multi-tenancy: isolamento de dados por organização",
            "Planos e assinaturas com Stripe Billing",
            "Deploy no Railway ou Fly.io com banco de dados gerenciado",
            "Pipeline CI/CD com GitHub Actions: lint, testes e deploy automático",
            "Documentação OpenAPI pública e SDK gerado automaticamente",
          ],
        },
      ],
      tools: [
        "NestJS",
        "BullMQ",
        "Redis",
        "Socket.io",
        "Prometheus",
        "Grafana",
        "OpenAI API",
        "pgvector",
        "Stripe",
        "Railway",
        "Fly.io",
      ],
    },
  ],
}

function BackendPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
