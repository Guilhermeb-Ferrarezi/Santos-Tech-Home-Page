import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/typescript")({
  component: TypescriptPage,
  head: () =>
    pageMeta({
      title:
        "Curso de TypeScript para Desenvolvimento Moderno em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda TypeScript do zero e escreva código mais seguro, escalável e fácil de manter. Curso presencial em Ribeirão Preto para devs que querem entrar no mercado de trabalho moderno.",
      path: "/particular/cursos/typescript",
    }),
})

const COURSE_DATA = {
  nome: "TypeScript para Desenvolvimento Moderno",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "javascript",
  variante: "typescript",
  tagline:
    "Escreva JavaScript com tipagem, autocomplete e zero erros em produção",
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
      levelName: "TypeScript",
      totalHours: "48h",
      outcome:
        "Escrever TypeScript do zero até aplicações completas, dominando tipagem avançada, generics e orientação a objetos, e aplicando tudo em projetos reais de React e Node.js/Express, com testes tipados e uma introdução prática a NestJS — pronto pra entregar código production-ready e disputar vagas que exigem TypeScript no mercado",
      modules: [
        {
          title: "Fundamentos de TypeScript e Configuração do Ambiente",
          topics: [
            "Instalar TypeScript 5.x, configurar tsconfig.json com strictMode e paths, e preparar o VS Code com as extensões que aceleram o dia a dia",
            "Como o compilador tsc transforma TS em JS e o papel do ts-node",
            "Tipos primitivos: string, number, boolean, null, undefined e tipos especiais (symbol, bigint)",
            "Type inference: quando declarar tipos explicitamente e quando deixar o compilador inferir",
            "Arrays tipados, tuplas e enums em projetos reais",
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
          ],
        },
        {
          title: "Classes, OOP e Design Patterns com TypeScript",
          topics: [
            "Classes com tipagem: constructors, propriedades públicas, privadas e protected",
            "Abstract classes e métodos abstratos para definir contratos de implementação",
            "Implementação de interfaces em classes e polimorfismo type-safe",
            "Decorators de classe e método (experimentalDecorators): uso e criação — a base que o NestJS usa mais adiante",
            "Projeto: sistema de gerenciamento de entidades com herança, interfaces e um design pattern aplicado (Repository ou Factory)",
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
        {
          title: "Testes Tipados com Vitest",
          topics: [
            "Vitest com TypeScript: configuração, mocks tipados e coverage com v8",
            "Tipar mocks de módulos e funções com vi.fn()",
            "Testing Library + React: testar componentes com queries type-safe",
            "Testes de integração para APIs com Supertest",
            "Boas práticas de organização de testes em projetos TypeScript: unitário vs. integração",
          ],
        },
        {
          title: "Introdução ao NestJS e Próximos Passos",
          topics: [
            "Arquitetura NestJS: modules, controllers, services e dependency injection",
            "Decorators de validação com class-validator e class-transformer",
            "Guards e pipes básicos para autenticação e validação de entrada",
            "Integração com Prisma em ambiente NestJS",
            "Panorama de próximos passos: monorepos com Turborepo, IA generativa com Vercel AI SDK e contribuição em projetos open source — temas pra quem quiser se aprofundar além deste curso",
          ],
        },
      ],
      tools: [
        "TypeScript 5.x",
        "VS Code",
        "ts-node",
        "Vite",
        "React",
        "React Hook Form",
        "Zod",
        "Express.js",
        "Prisma",
        "ESLint + typescript-eslint",
        "Vitest",
        "Testing Library",
        "Supertest",
        "NestJS",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber JavaScript pra fazer esse curso?",
      a: "Sim. O curso parte do princípio que você já programa em JavaScript e sente na pele os erros que só aparecem em produção. A trilha única de 48 aulas vai da tipagem básica até a aplicação prática em React e Node.js, passando por testes tipados e uma introdução a NestJS — dando tipagem, autocomplete e segurança a um código que hoje quebra em runtime.",
    },
    {
      q: "O curso ensina TypeScript com React e Node, ou só a linguagem pura?",
      a: "Ensina os dois. Além da linguagem em si, tem módulos dedicados a tipar componentes e hooks no React e a construir APIs REST tipadas com Node.js, Express e Prisma — com projetos práticos em cada frente.",
    },
  ],
}

function TypescriptPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
