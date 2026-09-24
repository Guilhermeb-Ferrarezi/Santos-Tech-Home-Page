import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/backend")({
  component: BackendPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento Web Back-End Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Node.js, Express e PostgreSQL do zero ao deploy em produção. Aulas individuais, horário flexível e projeto real com APIs REST, autenticação JWT e deploy em nuvem.",
      path: "/particular/cursos/backend",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Desenvolvimento Web Back-End",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "database",
  variante: "backend",
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
      levelName: "Desenvolvimento Web Back-End",
      totalHours: "48h",
      outcome:
        "Desenvolve APIs REST seguras com Node.js e Express, do banco relacional com Prisma — de SQLite a PostgreSQL em produção — até autenticação JWT, testes automatizados, filas assíncronas e cache com Redis; conhece o panorama de FastAPI em Python e entrega o deploy real de uma API em produção",
      modules: [
        {
          title: "Fundamentos de APIs REST e HTTP",
          topics: [
            "O que é uma API REST e o protocolo HTTP",
            "Verbos HTTP e status codes: GET, POST, PUT, PATCH, DELETE, 200, 201, 400, 401, 403, 404, 500",
            "JSON, headers, body, query params e path params — a anatomia de uma requisição",
            "Testar APIs com Insomnia e Thunder Client (VS Code)",
          ],
        },
        {
          title: "Node.js e Express: Construindo sua API",
          topics: [
            "Setup do projeto com npm/package.json e primeiro servidor HTTP com Express",
            "Rotas GET, POST, PUT, DELETE organizadas em routers e controllers",
            "Middleware: CORS, JSON parser e logging com Morgan",
            "Validação de dados de entrada com Zod",
          ],
        },
        {
          title: "Banco de Dados com Prisma: do SQLite ao PostgreSQL em Produção",
          topics: [
            "Conceitos de banco relacional — tabelas, chaves primárias e estrangeiras — e ORM vs SQL puro",
            "Configurar o Prisma, definir schema (models e relações) e rodar migrations",
            "CRUD completo via Prisma Client: projeto de API de cadastro com banco de dados",
            "Relações 1-N e N-N com include/select, migrations e seed de dados",
            "Migrar de SQLite para PostgreSQL em produção, com índices e connection pooling (PgBouncer/Supabase)",
            "Transações com prisma.$transaction()",
          ],
        },
        {
          title: "Autenticação e Autorização com JWT",
          topics: [
            "Sessões vs tokens: por que usar JWT",
            "Criar e assinar JWT com payload customizado, e hash de senhas com bcrypt",
            "Middleware de autenticação: verificar token em rotas protegidas",
            "Refresh tokens e expiração segura",
            "RBAC: controle de acesso por papéis (admin, user, moderator)",
          ],
        },
        {
          title: "FastAPI: Panorama Python para Back-End",
          topics: [
            "Onde Python lidera no back-end — dados, automação, IA — em comparação com Node.js",
            "Estrutura de um projeto FastAPI: rotas, path/query params e validação com Pydantic",
            "Autenticação, ORM (SQLModel) e documentação automática (Swagger/ReDoc) — os mesmos conceitos de Node, no ecossistema Python",
          ],
        },
        {
          title: "Upload, E-mail e Testes Automatizados",
          topics: [
            "Upload de arquivos para AWS S3 ou Cloudflare R2",
            "Envio de e-mails transacionais com Resend ou SendGrid",
            "Testes unitários e de integração com Jest e Supertest (Pytest no ecossistema Python)",
            "Cobertura de testes e integração contínua com GitHub Actions",
          ],
        },
        {
          title: "Filas Assíncronas, Cache com Redis e Deploy em Produção",
          topics: [
            "Por que usar filas — e-mails, processamento de imagens, notificações — com BullMQ e Redis",
            "Cache com Redis: padrão cache-aside, TTL e rate limiting para proteger a API",
            "WebSockets com Socket.io para tempo real e webhooks para integrar sistemas externos",
            "Deploy em produção no Railway ou Fly.io com banco gerenciado e pipeline CI/CD (lint, testes, deploy automático)",
            "Projeto final: API pronta para produção, com documentação OpenAPI pública",
            "Próximo nível: frameworks enterprise (NestJS), observabilidade (Prometheus/Grafana) e multi-tenancy para SaaS",
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
        "Redis",
        "BullMQ",
        "Socket.io",
        "Railway",
        "Fly.io",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já ter experiência com back-end pra começar?",
      a: "Não precisa de experiência em back-end especificamente, mas ajuda ter lógica de programação. O curso começa pelos fundamentos de API REST — HTTP, verbos, status codes, JSON — antes de entrar em Node.js, Express, Prisma e autenticação JWT.",
    },
    {
      q: "Dá pra usar esse curso pra construir meu próprio SaaS?",
      a: "Sim — o projeto final é construir e colocar em produção uma API REST completa: autenticação JWT, banco PostgreSQL, filas assíncronas, cache com Redis e deploy em nuvem (Railway ou Fly.io) com documentação OpenAPI pública. É a base real pra lançar um produto; tópicos de escala como multi-tenancy, cobrança recorrente e frameworks enterprise (NestJS) ficam como próximo passo depois que a sua API já estiver rodando de verdade.",
    },
  ],
}

function BackendPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
