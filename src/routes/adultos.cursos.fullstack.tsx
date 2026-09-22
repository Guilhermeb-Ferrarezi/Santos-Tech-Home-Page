import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/fullstack")({
  component: FullstackPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Full Stack para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Curso presencial de desenvolvimento Full Stack em Ribeirão Preto. Do HTML ao deploy em produção com React, Node.js e Cloud. Para quem quer entrar na área de tecnologia ou conquistar sua primeira vaga de dev.",
      path: "/adultos/cursos/fullstack",
    }),
})

const COURSE_DATA = {
  nome: "Full Stack Web Developer",
  categoria: "Programação",
  tagline: "Do HTML ao deploy em produção com React, Node.js e Cloud",
  targetAudience: [
    "Você quer entrar na área de tecnologia sem experiência prévia em programação",
    "Você já sabe HTML/CSS básico mas quer dominar JavaScript moderno e frameworks",
    "Você trabalha com TI de suporte ou infraestrutura e quer migrar para desenvolvimento",
    "Você é freelancer e quer criar aplicações web completas, do front ao back-end",
    "Você quer construir um portfólio sólido para conquistar sua primeira vaga de dev",
    "Você busca trabalhar remoto para empresas nacionais ou internacionais como desenvolvedor",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Construir SPAs com React, criar APIs REST com Node.js conectadas a banco de dados PostgreSQL e publicar aplicações online com autenticação e segurança",
      modules: [
        {
          title: "Fundamentos da Web e Setup",
          topics: [
            "Como funciona a internet: HTTP, DNS, cliente-servidor",
            "Configuração do ambiente: VS Code, extensões e terminal",
            "Git e GitHub: init, add, commit, push e pull",
            "Criação de repositório e deploy no GitHub Pages",
          ],
        },
        {
          title: "HTML5 e Semântica",
          topics: [
            "Tags estruturais: header, main, section, article, footer",
            "Formulários: input types, validação nativa e acessibilidade",
            "SEO básico: meta tags, Open Graph e estrutura de headings",
            "Imagens responsivas com srcset e formatos modernos (WebP)",
          ],
        },
        {
          title: "CSS3 e Layout Moderno",
          topics: [
            "Flexbox: alinhamento, direção, wrap e grow/shrink",
            "CSS Grid: grid-template, áreas e layouts complexos",
            "Responsividade com media queries e unidades relativas (rem, vh)",
            "Variáveis CSS, pseudo-classes e animações com @keyframes",
          ],
        },
        {
          title: "JavaScript Fundamentos",
          topics: [
            "Tipos de dados, operadores e estruturas de controle",
            "Funções, arrow functions e escopo (let, const, var)",
            "Manipulação do DOM: querySelector, addEventListener, classList",
            "Fetch API: consumo de APIs públicas e tratamento de JSON",
          ],
        },
        {
          title: "JavaScript Avançado e TypeScript",
          topics: [
            "ES6+: destructuring, spread, optional chaining e nullish coalescing",
            "Promises, async/await e tratamento de erros com try/catch",
            "Módulos ES6: import/export e organização de código",
            "TypeScript: tipos básicos, interfaces, generics e configuração do tsconfig",
          ],
        },
        {
          title: "React.js: Componentes e Estado",
          topics: [
            "JSX, componentes funcionais e props tipadas com TypeScript",
            "useState, useEffect e ciclo de vida de componentes",
            "React Router v6: rotas aninhadas, parâmetros e rotas protegidas",
            "Context API e gerenciamento de estado global",
            "Formulários com React Hook Form e validação com Zod",
          ],
        },
        {
          title: "Node.js e API REST",
          topics: [
            "Configuração do servidor com Express.js e middlewares",
            "Rotas RESTful: GET, POST, PUT, DELETE com status codes corretos",
            "Autenticação com JWT: geração, validação e refresh tokens",
            "Upload de arquivos com Multer e armazenamento em cloud (AWS S3)",
          ],
        },
        {
          title: "Banco de Dados Relacional",
          topics: [
            "Modelagem de dados: entidades, relacionamentos e normalização",
            "PostgreSQL: DDL, DML e queries com JOINs",
            "ORM com Prisma: migrations, schema e queries type-safe",
            "Variáveis de ambiente e conexão segura ao banco",
          ],
        },
      ],
      tools: [
        "VS Code",
        "Git",
        "GitHub Pages",
        "Chrome DevTools",
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Postman",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Entregar aplicações full stack completas em produção com Next.js, Docker, CI/CD, testes automatizados e integração com IA generativa, prontas para o mercado nacional e internacional",
      modules: [
        {
          title: "Fundamentos da Web e Setup",
          topics: [
            "Como funciona a internet: HTTP, DNS, cliente-servidor",
            "Configuração do ambiente: VS Code, extensões e terminal",
            "Git e GitHub: init, add, commit, push e pull",
            "Criação de repositório e deploy no GitHub Pages",
          ],
        },
        {
          title: "HTML5 e Semântica",
          topics: [
            "Tags estruturais: header, main, section, article, footer",
            "Formulários: input types, validação nativa e acessibilidade",
            "SEO básico: meta tags, Open Graph e estrutura de headings",
            "Imagens responsivas com srcset e formatos modernos (WebP)",
          ],
        },
        {
          title: "CSS3 e Layout Moderno",
          topics: [
            "Flexbox: alinhamento, direção, wrap e grow/shrink",
            "CSS Grid: grid-template, áreas e layouts complexos",
            "Responsividade com media queries e unidades relativas (rem, vh)",
            "Variáveis CSS, pseudo-classes e animações com @keyframes",
          ],
        },
        {
          title: "JavaScript Fundamentos",
          topics: [
            "Tipos de dados, operadores e estruturas de controle",
            "Funções, arrow functions e escopo (let, const, var)",
            "Manipulação do DOM: querySelector, addEventListener, classList",
            "Fetch API: consumo de APIs públicas e tratamento de JSON",
          ],
        },
        {
          title: "JavaScript Avançado e TypeScript",
          topics: [
            "ES6+: destructuring, spread, optional chaining e nullish coalescing",
            "Promises, async/await e tratamento de erros com try/catch",
            "Módulos ES6: import/export e organização de código",
            "TypeScript: tipos básicos, interfaces, generics e configuração do tsconfig",
          ],
        },
        {
          title: "React.js: Componentes e Estado",
          topics: [
            "JSX, componentes funcionais e props tipadas com TypeScript",
            "useState, useEffect e ciclo de vida de componentes",
            "React Router v6: rotas aninhadas, parâmetros e rotas protegidas",
            "Context API e gerenciamento de estado global",
            "Formulários com React Hook Form e validação com Zod",
          ],
        },
        {
          title: "Node.js e API REST",
          topics: [
            "Configuração do servidor com Express.js e middlewares",
            "Rotas RESTful: GET, POST, PUT, DELETE com status codes corretos",
            "Autenticação com JWT: geração, validação e refresh tokens",
            "Upload de arquivos com Multer e armazenamento em cloud (AWS S3)",
          ],
        },
        {
          title: "Banco de Dados Relacional",
          topics: [
            "Modelagem de dados: entidades, relacionamentos e normalização",
            "PostgreSQL: DDL, DML e queries com JOINs",
            "ORM com Prisma: migrations, schema e queries type-safe",
            "Variáveis de ambiente e conexão segura ao banco",
          ],
        },
        {
          title: "React Avançado e Next.js",
          topics: [
            "Next.js 14+: App Router, Server Components e Server Actions",
            "SSR, SSG e ISR: estratégias de renderização e performance",
            "Tailwind CSS: design system, componentes reutilizáveis e tema customizado",
            "Otimização de imagens, fonts e Core Web Vitals no Next.js",
            "Shadcn/ui: biblioteca de componentes acessíveis e customizáveis",
          ],
        },
        {
          title: "Backend Avançado e Arquitetura",
          topics: [
            "WebSockets com Socket.io para funcionalidades em tempo real",
            "Cache com Redis: estratégias de invalidação e sessões",
            "Filas de processamento com BullMQ para tarefas assíncronas",
            "Arquitetura em camadas: controllers, services, repositories",
            "MongoDB e Mongoose para dados não relacionais",
          ],
        },
        {
          title: "DevOps e Deploy em Produção",
          topics: [
            "Docker: Dockerfile, docker-compose e multi-stage builds",
            "CI/CD com GitHub Actions: lint, testes e deploy automatizado",
            "Deploy na AWS EC2 e configuração de domínio com Nginx como proxy reverso",
            "Variáveis de ambiente, secrets e configuração de SSL/HTTPS",
            "Monitoramento com logs estruturados e alertas básicos",
          ],
        },
        {
          title: "Testes Automatizados",
          topics: [
            "Testes unitários com Vitest e Jest para funções e serviços",
            "Testes de integração para rotas de API com Supertest",
            "Testes de componentes React com Testing Library",
            "Cobertura de código e boas práticas de TDD",
          ],
        },
        {
          title: "IA Generativa para Devs Full Stack",
          topics: [
            "Integração da API da OpenAI (GPT-4o) em aplicações Node.js",
            "Streaming de respostas de LLMs com Server-Sent Events",
            "RAG (Retrieval-Augmented Generation): embeddings e busca vetorial com pgvector",
            "Criação de chatbots com memória de conversa usando LangChain.js",
            "Uso de IA no desenvolvimento: GitHub Copilot e Cursor para produtividade",
          ],
        },
      ],
      tools: [
        "VS Code",
        "Git",
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Postman",
        "Next.js",
        "Docker",
        "GitHub Actions",
        "AWS EC2",
        "Redis",
        "Nginx",
        "OpenAI API",
        "LangChain.js",
        "GitHub Copilot",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber programar pra começar esse curso?",
      a: "Não. O curso parte do absoluto zero: como a internet funciona, Git e GitHub, HTML5 semântico e CSS3 antes de chegar em JavaScript, React e Node.js. Se você nunca programou mas quer entrar na área de tecnologia, é o nível Essencial que te leva até uma aplicação completa com banco de dados PostgreSQL.",
    },
    {
      q: "Qual a diferença entre o Essencial e o Intermediário?",
      a: "O Essencial cobre a base completa — HTML, CSS, JavaScript, TypeScript, React, Node.js com API REST e PostgreSQL com Prisma — o suficiente pra construir e publicar uma aplicação real. O Intermediário pega esse mesmo conteúdo e adiciona Next.js, Docker, CI/CD com GitHub Actions, deploy na AWS, testes automatizados e integração com IA generativa (OpenAI, LangChain.js), preparando pra vagas de mercado nacional e internacional.",
    },
    {
      q: "Esse curso serve pra quem já trabalha com TI mas quer migrar pra desenvolvimento?",
      a: "Sim — é um público comum aqui. Quem já trabalha com suporte ou infraestrutura costuma ter familiaridade com terminal e lógica, o que acelera bastante a passagem para JavaScript, React e Node.js. O curso já termina com portfólio e prática de deploy em produção, dois pontos que pesam bastante em processo seletivo de dev.",
    },
  ],
}

function FullstackPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
