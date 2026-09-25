import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/frontend")({
  component: FrontendPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento Web Front-End Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda HTML, CSS, JavaScript e React do zero ao profissional em Ribeirão Preto. Aulas individuais, ritmo flexível e projetos reais do início ao deploy.",
      path: "/particular/cursos/frontend",
    }),
})

const COURSE_DATA = {
  nome: "Desenvolvimento Web Front-End",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "html",
  variante: "frontend",
  tagline:
    "Crie interfaces profissionais que encantam usuários",
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
      levelName: "Desenvolvimento Web Front-End",
      totalHours: "48h",
      outcome:
        "Desenvolve aplicações React completas do zero — com hooks, TypeScript, rotas e consumo de APIs reais —, estiliza com Tailwind CSS e shadcn/ui, dá os primeiros passos em Next.js e usa IA como copiloto de código, fechando o curso com um SaaS front-end com dashboard, autenticação simulada e deploy na Vercel",
      modules: [
        {
          title: "JavaScript Moderno (ES6+)",
          topics: [
            "Arrow functions, destructuring e spread operator",
            "Promises, async/await e tratamento de erros",
            "Módulos ES6: import e export",
            "Array methods: map, filter, reduce, find, some",
            "Optional chaining e nullish coalescing",
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
          ],
        },
        {
          title: "Rotas e Consumo de API",
          topics: [
            "React Router DOM v6: rotas, parâmetros e navegação",
            "Páginas protegidas e redirecionamento",
            "Consumir API REST com Axios e React Query (TanStack Query)",
            "Loading states, error boundaries e feedback ao usuário",
          ],
        },
        {
          title: "TypeScript no React",
          topics: [
            "Tipar props, estados e eventos no React",
            "Interfaces e types para modelos de dados da API",
            "Enums e union types para estados da aplicação",
            "Migrar um componente de JavaScript para TypeScript na prática",
          ],
        },
        {
          title: "Next.js: Introdução ao React para Produção",
          topics: [
            "App Router: estrutura de pastas, páginas e layouts",
            "Server Components e Client Components: conceito e quando usar cada um",
            "Rotas dinâmicas e navegação com next/link",
            "Fundamentos de renderização no servidor (SSR)",
            "Deploy de projeto Next.js na Vercel",
          ],
        },
        {
          title: "Panorama Profissional e Projeto Final",
          topics: [
            "Além do useState: Context API e panorama do mercado (Zustand, Redux Toolkit, Jotai) para quando o projeto crescer",
            "Testes automatizados na prática: como Vitest e Testing Library encaixam no fluxo de trabalho",
            "Performance web: Core Web Vitals e otimização de imagens e fontes",
            "IA como copiloto: GitHub Copilot, v0.dev e Cursor IDE no dia a dia do front-end",
            "Projeto final: SaaS front-end com dashboard, autenticação simulada, dark mode e deploy na Vercel",
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
        "TypeScript",
        "Next.js",
        "Zustand",
        "Vitest",
        "Testing Library",
        "GitHub Copilot",
        "v0.dev",
        "Cursor IDE",
        "Vercel",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber HTML e CSS pra começar esse curso?",
      a: "O ideal é ter pelo menos noção básica de HTML e CSS — o curso começa direto em JavaScript moderno (ES6+) e React, não em tags HTML do zero. Se você já mexeu com sites mas trava na hora de adicionar interatividade real com JavaScript, é exatamente o ponto de partida.",
    },
    {
      q: "O curso ensina a usar IA no desenvolvimento, ou só programação tradicional?",
      a: "As duas coisas. Além da base sólida de React e TypeScript, o curso tem um módulo dedicado a usar IA no fluxo de trabalho: GitHub Copilot para gerar componentes e testes, v0.dev para prototipar UI por prompt e Cursor IDE para desenvolvimento assistido — ferramentas que já fazem parte do dia a dia de quem trabalha com front-end hoje.",
    },
  ],
}

function FrontendPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
