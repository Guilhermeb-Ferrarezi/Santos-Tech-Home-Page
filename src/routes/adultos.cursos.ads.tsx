import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/ads")({
  component: AdsPage,
  head: () =>
    pageMeta({
      title:
        "Curso de ADS — Formação Profissional em Programação para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Formação profissional completa em Análise e Desenvolvimento de Sistemas: lógica, back-end, mobile, cloud e IA. Do zero ao mercado de TI em até 12 meses, presencial em Ribeirão Preto.",
      path: "/adultos/cursos/ads",
    }),
})

const COURSE_DATA = {
  nome: "ADS — Análise e Desenvolvimento de Sistemas",
  categoria: "Programação",
  tagline:
    "Formação profissional completa em tecnologia: da lógica ao sistema em produção",
  targetAudience: [
    "Você quer uma formação estruturada e completa em TI sem precisar fazer uma graduação de 4 anos",
    "Você está em transição de carreira e precisa de base sólida para entrar no mercado de tecnologia",
    "Você já trabalha em TI (suporte, infraestrutura) e quer formação formal em desenvolvimento de sistemas",
    "Você busca uma qualificação profissional reconhecida pelo mercado em menos de 12 meses",
    "Você quer dominar tanto o desenvolvimento quanto a análise de requisitos e gestão de projetos",
    "Você tem tempo parcial para estudar e precisa de um curso estruturado que respeite seu ritmo de trabalhador",
  ],
  tiers: [
    {
      label: "6 meses",
      levelName: "Avançado",
      totalHours: "120h",
      outcome:
        "Dominar lógica de programação, banco de dados relacional, front-end, POO com Java e desenvolvimento de APIs RESTful com Spring Boot — pronto para posições de desenvolvedor júnior",
      modules: [
        {
          title: "Lógica de Programação e Algoritmos",
          topics: [
            "Pseudocódigo e fluxograma: representação de algoritmos",
            "Python: variáveis, tipos, operadores e estruturas de controle",
            "Funções, recursividade e manipulação de listas e dicionários",
            "Introdução à programação orientada a objetos com Python",
          ],
        },
        {
          title: "Engenharia de Software e Gestão Ágil",
          topics: [
            "Ciclo de vida do software: requisitos, design, implementação, testes e manutenção",
            "Scrum: papéis (PO, SM, Dev), cerimônias e artefatos",
            "Kanban com Jira: gestão visual de tarefas e métricas de fluxo",
            "Levantamento de requisitos: entrevistas, casos de uso e user stories",
            "Git e GitHub para equipes: branches, pull requests e code review",
          ],
        },
        {
          title: "Banco de Dados Relacional",
          topics: [
            "Modelagem entidade-relacionamento (ER) com BRModelo",
            "Normalização: 1FN, 2FN e 3FN com exemplos práticos",
            "SQL no PostgreSQL: DDL, DML e queries com GROUP BY e JOINs",
            "Constraints, índices e boas práticas de design de schema",
            "Backup, restauração e introdução à administração de banco",
          ],
        },
        {
          title: "Front-end Web: HTML, CSS e JavaScript",
          topics: [
            "HTML5 semântico, formulários e acessibilidade (WCAG básico)",
            "CSS3: Flexbox, Grid e responsividade com media queries",
            "JavaScript: DOM, eventos, Fetch API e LocalStorage",
            "Bootstrap 5: grid system, componentes e customização com SASS",
          ],
        },
        {
          title: "Programação Orientada a Objetos com Java",
          topics: [
            "Classes, objetos, herança, polimorfismo e encapsulamento",
            "Interfaces, classes abstratas e design patterns (Singleton, Factory)",
            "Collections Framework: List, Map, Set e iteradores",
            "JDBC para conexão ao PostgreSQL e execução de queries",
            "Introdução ao Spring Boot: criação de projeto e primeira API REST",
          ],
        },
        {
          title: "API REST e Arquitetura Web",
          topics: [
            "Princípios REST: recursos, métodos HTTP, status codes e HATEOAS",
            "Spring Boot: controllers, services, repositories e injeção de dependência",
            "JPA e Hibernate: mapeamento objeto-relacional e lazy/eager loading",
            "Autenticação com Spring Security e JWT",
            "Documentação de API com Swagger/OpenAPI 3",
          ],
        },
        {
          title: "Banco de Dados Avançado e NoSQL",
          topics: [
            "PL/SQL: stored procedures, functions, triggers e packages no Oracle",
            "Otimização de queries: execution plan, índices compostos e particionamento",
            "MongoDB: documentos, coleções, CRUD e aggregation pipeline",
            "Comparativo SQL vs NoSQL: quando usar cada abordagem",
          ],
        },
        {
          title: "Desenvolvimento Mobile Android",
          topics: [
            "Kotlin: sintaxe, null safety, data classes e coroutines",
            "Activities, Fragments e Jetpack Compose: UI declarativa",
            "Retrofit para consumo de APIs REST e serialização com Gson",
            "Room Database para persistência local no Android",
          ],
        },
      ],
      tools: [
        "Python",
        "PostgreSQL",
        "BRModelo",
        "Git",
        "Jira",
        "VS Code",
        "Bootstrap 5",
        "Java",
        "Spring Boot",
        "Oracle",
        "MongoDB",
        "Kotlin",
        "Retrofit",
        "Swagger",
      ],
    },
    {
      label: "12 meses",
      levelName: "Profissional Intensivo",
      totalHours: "240h",
      outcome:
        "Projetar e liderar o desenvolvimento de sistemas complexos com DevOps, microsserviços, IA generativa integrada e projeto de conclusão entregável ao mercado — pronto para posições plenas e sênior em TI",
      modules: [
        {
          title: "Lógica de Programação e Algoritmos",
          topics: [
            "Pseudocódigo e fluxograma: representação de algoritmos",
            "Python: variáveis, tipos, operadores e estruturas de controle",
            "Funções, recursividade e manipulação de listas e dicionários",
            "Introdução à programação orientada a objetos com Python",
          ],
        },
        {
          title: "Engenharia de Software e Gestão Ágil",
          topics: [
            "Ciclo de vida do software: requisitos, design, implementação, testes e manutenção",
            "Scrum: papéis (PO, SM, Dev), cerimônias e artefatos",
            "Kanban com Jira: gestão visual de tarefas e métricas de fluxo",
            "Levantamento de requisitos: entrevistas, casos de uso e user stories",
            "Git e GitHub para equipes: branches, pull requests e code review",
          ],
        },
        {
          title: "Banco de Dados Relacional",
          topics: [
            "Modelagem entidade-relacionamento (ER) com BRModelo",
            "Normalização: 1FN, 2FN e 3FN com exemplos práticos",
            "SQL no PostgreSQL: DDL, DML e queries com GROUP BY e JOINs",
            "Constraints, índices e boas práticas de design de schema",
            "Backup, restauração e introdução à administração de banco",
          ],
        },
        {
          title: "Front-end Web: HTML, CSS e JavaScript",
          topics: [
            "HTML5 semântico, formulários e acessibilidade (WCAG básico)",
            "CSS3: Flexbox, Grid e responsividade com media queries",
            "JavaScript: DOM, eventos, Fetch API e LocalStorage",
            "Bootstrap 5: grid system, componentes e customização com SASS",
          ],
        },
        {
          title: "Programação Orientada a Objetos com Java",
          topics: [
            "Classes, objetos, herança, polimorfismo e encapsulamento",
            "Interfaces, classes abstratas e design patterns (Singleton, Factory)",
            "Collections Framework: List, Map, Set e iteradores",
            "JDBC para conexão ao PostgreSQL e execução de queries",
            "Introdução ao Spring Boot: criação de projeto e primeira API REST",
          ],
        },
        {
          title: "API REST e Arquitetura Web",
          topics: [
            "Princípios REST: recursos, métodos HTTP, status codes e HATEOAS",
            "Spring Boot: controllers, services, repositories e injeção de dependência",
            "JPA e Hibernate: mapeamento objeto-relacional e lazy/eager loading",
            "Autenticação com Spring Security e JWT",
            "Documentação de API com Swagger/OpenAPI 3",
          ],
        },
        {
          title: "Banco de Dados Avançado e NoSQL",
          topics: [
            "PL/SQL: stored procedures, functions, triggers e packages no Oracle",
            "Otimização de queries: execution plan, índices compostos e particionamento",
            "MongoDB: documentos, coleções, CRUD e aggregation pipeline",
            "Comparativo SQL vs NoSQL: quando usar cada abordagem",
          ],
        },
        {
          title: "Desenvolvimento Mobile Android",
          topics: [
            "Kotlin: sintaxe, null safety, data classes e coroutines",
            "Activities, Fragments e Jetpack Compose: UI declarativa",
            "Retrofit para consumo de APIs REST e serialização com Gson",
            "Room Database para persistência local no Android",
          ],
        },
        {
          title: "DevOps e Cloud Computing",
          topics: [
            "Cloud AWS: EC2, S3, RDS, Lambda e IAM — configuração e custos",
            "Docker: containers, imagens, docker-compose e networking",
            "CI/CD com GitHub Actions: pipeline de build, testes e deploy automático",
            "Infrastructure as Code com Terraform: provisionamento de recursos AWS",
            "Monitoramento com CloudWatch, logs estruturados e alertas",
          ],
        },
        {
          title: "Qualidade de Software e Testes",
          topics: [
            "Pirâmide de testes: unitários, integração e e2e",
            "JUnit 5 e Mockito para testes em Java",
            "Testes de API com Rest Assured e contratos com Pact",
            "BDD com Cucumber e Gherkin: cenários orientados ao negócio",
            "Testes de carga com JMeter e análise de bottlenecks",
          ],
        },
        {
          title: "Arquitetura de Microsserviços",
          topics: [
            "Decomposição de monolito em microsserviços: domain-driven design",
            "Spring Cloud: Gateway, Config Server e Service Discovery com Eureka",
            "Comunicação assíncrona com Apache Kafka: producers, consumers e topics",
            "Circuit Breaker com Resilience4j para resiliência entre serviços",
            "Containerização de microsserviços com Docker e orquestração básica com Kubernetes",
          ],
        },
        {
          title: "IoT e Sistemas Embarcados",
          topics: [
            "Arduino: prototipagem com sensores de temperatura, umidade e movimento",
            "Raspberry Pi: Linux embarcado e GPIO programming com Python",
            "Protocolo MQTT: broker Mosquitto, publicação e subscrição de tópicos",
            "Dashboard IoT com Node-RED para visualização de dados de sensores",
          ],
        },
        {
          title: "Inteligência Artificial e Dados",
          topics: [
            "Machine Learning com Python e scikit-learn: regressão, classificação e clustering",
            "Redes neurais com TensorFlow/Keras: treinamento e avaliação de modelos",
            "Análise exploratória com Pandas e visualização com Matplotlib e Seaborn",
            "Big Data: conceitos de data lake, data warehouse e introdução ao Apache Spark",
          ],
        },
        {
          title: "IA Generativa Aplicada a Sistemas",
          topics: [
            "API da OpenAI (GPT-4o): integração em sistemas Java e Python",
            "LangChain: chains, agents e memória para sistemas conversacionais",
            "RAG (Retrieval-Augmented Generation): embeddings e busca vetorial com Pinecone",
            "Chatbots inteligentes com base de conhecimento da empresa",
            "Automação de processos com IA: extração de dados de documentos (OCR + LLM)",
          ],
        },
        {
          title: "Segurança da Informação e LGPD",
          topics: [
            "OWASP Top 10: vulnerabilidades mais comuns e como mitigá-las",
            "Criptografia aplicada: hashing com bcrypt, SSL/TLS e assinatura digital",
            "LGPD: princípios, bases legais, DPO e adequação de sistemas",
            "Pen testing básico: OWASP ZAP e identificação de vulnerabilidades em APIs",
          ],
        },
        {
          title: "Projeto de Conclusão de Curso",
          topics: [
            "Definição do escopo: problema real de negócio, stakeholders e viabilidade",
            "Arquitetura do sistema: diagrama C4, escolha de stack e planejamento de sprints",
            "Desenvolvimento iterativo com entregas quinzenais e revisão de código",
            "Documentação técnica: README, Swagger, diagrama ER e manual do usuário",
            "Apresentação e defesa do projeto para banca avaliadora com pitch de 10 minutos",
          ],
        },
      ],
      tools: [
        "Python",
        "PostgreSQL",
        "BRModelo",
        "Git",
        "Jira",
        "VS Code",
        "Bootstrap 5",
        "Java",
        "Spring Boot",
        "Oracle",
        "MongoDB",
        "Kotlin",
        "Retrofit",
        "Swagger",
        "AWS",
        "Docker",
        "Terraform",
        "GitHub Actions",
        "JUnit 5",
        "Kafka",
        "Kubernetes",
        "Arduino",
        "Raspberry Pi",
        "Node-RED",
        "scikit-learn",
        "TensorFlow",
        "Apache Spark",
        "OpenAI API",
        "LangChain",
        "Pinecone",
        "OWASP ZAP",
        "GitHub Copilot",
      ],
    },
  ],
}

function AdsPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
