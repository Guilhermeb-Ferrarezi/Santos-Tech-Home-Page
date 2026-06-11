import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/frontend")({
  component: FrontendPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento Web Front-End para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda HTML, CSS, JavaScript e React do zero ao profissional em Ribeirão Preto. Aulas individuais, ritmo flexível e projetos reais para entrar no mercado de tecnologia.",
      path: "/adultos/cursos/frontend",
    }),
})

const COURSE_DATA = {
  nome: "Desenvolvimento Web Front-End",
  categoria: "Programação",
  tagline:
    "Crie interfaces profissionais que encantam usuários e impressionam recrutadores",
  targetAudience: [
    "Você quer se tornar desenvolvedor front-end e conseguir sua primeira vaga de emprego",
    "Você tem noções de HTML e CSS mas trava quando precisa adicionar JavaScript real",
    "Você é designer e quer aprender a transformar seus layouts Figma em código",
    "Você já desenvolve sites mas quer dominar React e entrar no mercado de produtos digitais",
    "Você quer construir seu portfólio com projetos que se pareçam com aplicações reais",
    "Você busca uma requalificação para trabalhar remoto em empresa de tecnologia",
  ],
  tiers: [
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Desenvolve aplicações React com estado, rotas e consumo de APIs reais; domina Tailwind CSS e entrega projetos com design profissional deployados na Vercel",
      modules: [
        {
          title: "JavaScript Moderno (ES6+)",
          topics: [
            "Arrow functions, destructuring e spread operator",
            "Promises, async/await e tratamento de erros",
            "Módulos ES6: import e export",
            "Array methods: map, filter, reduce, find, some",
            "Optional chaining e nullish coalescing",
            "Introdução ao TypeScript: tipos básicos e interfaces",
          ],
        },
        {
          title: "React: Fundamentos e Hooks",
          topics: [
            "Criar projeto com Vite e estrutura de pastas",
            "Componentes funcionais e props",
            "useState: gerenciar estado local",
            "useEffect: efeitos colaterais e chamadas de API",
            "Renderização condicional e listas com key",
            "Formulários controlados com React",
          ],
        },
        {
          title: "Estilização com Tailwind CSS",
          topics: [
            "Filosofia utility-first e configuração no Vite",
            "Responsividade com prefixos sm:, md:, lg:, xl:",
            "Customizar tema: cores, fontes e espaçamentos no tailwind.config",
            "Componentes com variantes usando cva (class-variance-authority)",
            "Integrar shadcn/ui para componentes pré-estilizados",
            "Projeto: clone de interface de SaaS com Tailwind",
          ],
        },
        {
          title: "Rotas e Consumo de API",
          topics: [
            "React Router DOM v6: rotas, parâmetros e navegação",
            "Páginas protegidas e redirecionamento",
            "Consumir API REST com Axios e React Query (TanStack Query)",
            "Loading states, error boundaries e feedback ao usuário",
            "Projeto: aplicação de busca de filmes (OMDb API) com favoritos",
          ],
        },
      ],
      tools: [
        "React",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "React Router DOM v6",
        "TanStack Query",
        "Vercel",
      ],
    },
    {
      label: "3 meses",
      levelName: "Profissional + IA",
      totalHours: "60h",
      outcome:
        "Domina o ecossistema React avançado com TypeScript, gerenciamento de estado global, Next.js e testes automatizados; usa IA como copiloto de código e entrega um SaaS front-end completo com autenticação",
      modules: [
        {
          title: "TypeScript no React",
          topics: [
            "Tipar props, estados e eventos no React",
            "Interfaces e types para modelos de dados da API",
            "Generics em hooks customizados",
            "Enums e union types para estados da aplicação",
            "Configuração do tsconfig para projetos React+Vite",
          ],
        },
        {
          title: "Gerenciamento de Estado Global",
          topics: [
            "Context API: quando usar e limitações",
            "Zustand: criar stores simples sem boilerplate",
            "Redux Toolkit: slice, thunk e RTK Query",
            "Jotai para estado atômico em aplicações complexas",
            "Comparativo: quando usar cada solução",
          ],
        },
        {
          title: "Next.js: React para Produção",
          topics: [
            "App Router vs Pages Router no Next.js 14+",
            "Server Components e Client Components",
            "SSR, SSG e ISR: quando usar cada estratégia",
            "Rotas dinâmicas, layouts e loading UI",
            "Autenticação com NextAuth.js (GitHub, Google, credentials)",
            "Deploy na Vercel com variáveis de ambiente",
          ],
        },
        {
          title: "Testes e Performance",
          topics: [
            "Testes unitários de componentes com Vitest e Testing Library",
            "Testes de integração: simular APIs com MSW",
            "Core Web Vitals: LCP, FID, CLS e como otimizar",
            "Code splitting com lazy e Suspense",
            "Otimização de imagens e fontes no Next.js",
          ],
        },
        {
          title: "IA no Desenvolvimento Front-End + Projeto Final",
          topics: [
            "GitHub Copilot: gerar componentes, testes e refatorações",
            "v0.dev: prototipagem de UI com prompts em texto",
            "Cursor IDE para desenvolvimento assistido por IA",
            "Projeto final: SaaS front-end com autenticação, dashboard, dark mode e deploy na Vercel",
          ],
        },
      ],
      tools: [
        "Next.js",
        "TypeScript",
        "Zustand",
        "Vitest",
        "Testing Library",
        "GitHub Copilot",
        "v0.dev",
        "Cursor IDE",
      ],
    },
  ],
}

function FrontendPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
