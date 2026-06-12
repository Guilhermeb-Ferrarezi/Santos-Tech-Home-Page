import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/typescript")({
  component: TypescriptPage,
  head: () =>
    pageMeta({
      title:
        "Curso de TypeScript para Desenvolvimento Moderno em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda TypeScript do zero e escreva código mais seguro, escalável e fácil de manter. Curso presencial em Ribeirão Preto para devs que querem entrar no mercado de trabalho moderno.",
      path: "/adultos/cursos/typescript",
    }),
})

const COURSE_DATA = {
  nome: "TypeScript para Desenvolvimento Moderno",
  categoria: "Programação",
  tagline:
    "Escreva JavaScript com tipagem, autocomplete e zero erros em produção",
  pricePerAula: 109.9,
  targetAudience: [
    "Você já sabe JavaScript mas seus projetos quebram em produção com erros que só aparecem em runtime",
    "Você quer ser contratado por empresas que exigem TypeScript em vagas de React, Node.js ou full stack",
    "Você trabalha em equipe e sente que o código fica difícil de manter à medida que o projeto cresce",
    "Você usa VS Code e quer aproveitar autocomplete inteligente e refatoração segura no dia a dia",
    "Você está aprendendo um framework moderno (Next.js, NestJS, Angular) que já usa TypeScript nativamente",
    "Você quer dominar a linguagem que virou padrão de mercado em empresas sérias de tecnologia",
  ],
  tiers: [
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Escrever aplicações TypeScript completas com tipagem avançada, generics, módulos, decorators e integração com React e Node.js, entregando código production-ready em projetos reais",
      modules: [
        {
          title: "Fundamentos de TypeScript e Configuração do Ambiente",
          topics: [
            "Instalar TypeScript 5.x globalmente e configurar tsconfig.json com strictMode e paths",
            "Entender como o compilador tsc transforma TS em JS e o papel do ts-node",
            "Tipos primitivos: string, number, boolean, null, undefined, symbol e bigint",
            "Type inference: quando declarar tipos explicitamente e quando deixar o compilador inferir",
            "Arrays tipados, tuplas e enums em projetos reais",
            "Configuração do VS Code com extensões TypeScript Hero e Error Lens",
          ],
        },
        {
          title: "Interfaces, Types e Modelagem de Dados",
          topics: [
            "Diferença prática entre interface e type alias: quando usar cada um",
            "Union types (A | B) e intersection types (A & B) para modelagem flexível",
            "Optional properties (?), readonly e index signatures em interfaces",
            "Literal types e discriminated unions para modelar estados finitos",
            "Type narrowing: typeof, instanceof, in e type predicates (is)",
            "Utility types essenciais: Partial, Required, Pick, Omit, Record e Readonly",
          ],
        },
        {
          title: "Funções, Generics e Programação Orientada a Tipos",
          topics: [
            "Tipagem de funções: parâmetros, retorno, overloads e rest parameters",
            "Generics: criar funções e classes reutilizáveis com type parameters",
            "Constraints em generics com extends para restringir tipos aceitos",
            "Conditional types: T extends U ? X : Y para lógica baseada em tipos",
            "Template literal types para construir strings tipadas dinamicamente",
            "infer keyword: extrair tipos de dentro de outros tipos",
          ],
        },
        {
          title: "Classes, OOP e Design Patterns com TypeScript",
          topics: [
            "Classes com tipagem: constructors, propriedades públicas, privadas e protected",
            "Abstract classes e métodos abstratos para definir contratos de implementação",
            "Implementação de interfaces em classes e polimorfismo type-safe",
            "Decorators de classe e método (experimentalDecorators): uso e criação",
            "Design patterns em TypeScript: Singleton, Repository e Factory",
            "Projeto: sistema de gerenciamento de entidades com herança e interfaces",
          ],
        },
        {
          title: "TypeScript com React: Componentes e Hooks Tipados",
          topics: [
            "Configurar projeto React + TypeScript com Vite e @types/react",
            "Tipar props de componentes funcionais com interface e React.FC vs tipagem direta",
            "Tipar useState, useReducer, useRef e useContext corretamente",
            "Criar hooks customizados com retorno genérico e type-safe",
            "Tipar eventos de formulário: React.ChangeEvent, React.FormEvent e MouseEvent",
            "Projeto: formulário dinâmico com validação via Zod e react-hook-form tipado",
          ],
        },
        {
          title: "TypeScript com Node.js e APIs REST",
          topics: [
            "Configurar Node.js + Express + TypeScript com ts-node-dev para hot reload",
            "Tipar handlers do Express: Request, Response e NextFunction com generics",
            "Middleware type-safe e tipagem de body, params e query com interfaces",
            "Integração com Prisma ORM: tipos gerados automaticamente a partir do schema",
            "Validação de entrada com Zod em rotas de API e geração de tipos a partir do schema",
            "Projeto: API REST de tarefas com autenticação JWT completamente tipada",
          ],
        },
      ],
      tools: [
        "TypeScript 5.x",
        "VS Code",
        "ts-node",
        "Vite",
        "React",
        "Express.js",
        "Prisma",
        "Zod",
        "React Hook Form",
        "ESLint + typescript-eslint",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Arquitetar sistemas TypeScript de larga escala com monorepos, testes end-to-end tipados, integração com IA generativa via SDK type-safe, performance de compilação otimizada e contribuição em projetos open source de nível profissional",
      modules: [
        {
          title: "TypeScript Avançado: Sistema de Tipos Profundo",
          topics: [
            "Mapped types: transformar interfaces existentes em novos tipos automaticamente",
            "Recursive types para modelar estruturas de dados aninhadas como árvores e JSON",
            "Variance em TypeScript: covariance, contravariance e bivariance na prática",
            "Template literal types avançados para APIs fluentes e DSLs internas",
            "Module augmentation e declaration merging para estender tipos de bibliotecas de terceiros",
            "satisfies operator (TS 4.9+): validar tipos sem perder inferência",
            "const type parameters (TS 5.0+) e variadic tuple types para APIs expressivas",
          ],
        },
        {
          title: "Monorepos e Arquitetura de Projetos em Escala",
          topics: [
            "Configurar monorepo com pnpm workspaces e TypeScript project references",
            "Turborepo: cache inteligente de build e pipeline de tarefas entre pacotes",
            "Compartilhar tipos, utilitários e componentes entre frontend e backend no mesmo repo",
            "tsconfig paths e aliases: imports limpos sem caminhos relativos longos",
            "Estratégias de versionamento de pacotes internos com Changesets",
            "Performance do compilador: incremental builds, tsbuildinfo e skipLibCheck",
          ],
        },
        {
          title: "Testes Tipados: Unitários, Integração e E2E",
          topics: [
            "Vitest com TypeScript: configuração, mocks tipados e coverage com v8",
            "Testing Library + React: testar componentes com queries type-safe",
            "Tipar mocks de módulos e funções com vi.fn() e jest.MockedFunction",
            "Testes de integração para APIs com Supertest e banco de dados real em container Docker",
            "Playwright com TypeScript: testes E2E com Page Object Model tipado",
            "Snapshot typing com expect-type para garantir que tipos não regridem",
            "Pipeline de CI com GitHub Actions: type-check, lint e testes em paralelo",
          ],
        },
        {
          title: "NestJS: Backend Enterprise com TypeScript Nativo",
          topics: [
            "Arquitetura NestJS: modules, controllers, services e dependency injection",
            "Decorators de validação com class-validator e class-transformer",
            "Guards, interceptors e pipes type-safe para autenticação e autorização",
            "Integração com TypeORM e Prisma em ambiente NestJS",
            "Websockets em tempo real com @nestjs/websockets e tipagem de eventos",
            "Testes unitários de services e controllers com mocks do NestJS Testing",
            "Projeto: API de e-commerce com autenticação, autorização por roles e testes completos",
          ],
        },
        {
          title: "IA Generativa Integrada com TypeScript",
          topics: [
            "Vercel AI SDK com TypeScript: streaming de texto, estruturado e multimodal",
            "Tipar respostas de LLMs com Zod e ai.generateObject() para dados estruturados",
            "Construir chatbot com memória de conversa usando useChat hook tipado",
            "LangChain.js com TypeScript: chains, tools e agentes type-safe",
            "Model Context Protocol (MCP) SDK em TypeScript: criar servers e clients de ferramentas",
            "RAG type-safe: embeddings com OpenAI, busca vetorial no pgvector e tipos end-to-end",
            "Projeto: assistente de código com acesso a base de conhecimento via RAG e MCP",
          ],
        },
        {
          title: "Deploy, Observabilidade e Open Source",
          topics: [
            "Compilação eficiente para produção: esbuild, tsup e bundle analysis",
            "Publicar pacote TypeScript no npm com types exportados e suporte a ESM + CJS",
            "Logging estruturado com Pino e traces distribuídos com OpenTelemetry em TypeScript",
            "Configurar Sentry com sourcemaps TypeScript para rastrear erros em produção",
            "Contribuir para projetos open source em TypeScript: PRs, discussions e types",
            "Migrando codebase JavaScript legada para TypeScript com estratégia incremental",
          ],
        },
      ],
      tools: [
        "TypeScript 5.x",
        "NestJS",
        "Turborepo",
        "pnpm workspaces",
        "Vitest",
        "Playwright",
        "Vercel AI SDK",
        "LangChain.js",
        "MCP SDK",
        "OpenAI API",
        "Prisma",
        "pgvector",
        "tsup",
        "GitHub Actions",
        "Sentry",
        "OpenTelemetry",
      ],
    },
  ],
}

function TypescriptPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
