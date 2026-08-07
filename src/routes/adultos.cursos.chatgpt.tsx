import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/chatgpt")({
  component: ChatGptPage,
  head: () =>
    pageMeta({
      title: "Curso de ChatGPT e IA para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a usar ChatGPT e IA no trabalho em Ribeirão Preto. Do prompt engineering à automação: multiplique sua produtividade com inteligência artificial.",
      path: "/adultos/cursos/chatgpt",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "ChatGPT e IA para Profissionais",
  categoria: "Inteligência Artificial",
  tagline: "Multiplique sua produtividade no trabalho usando inteligência artificial de forma prática e segura",
  targetAudience: [
    "Você ouve falar de IA todo dia mas ainda não sabe como aplicar no seu trabalho",
    "Você perde horas em tarefas repetitivas que poderiam ser automatizadas com IA",
    "Você já tentou usar o ChatGPT mas os resultados foram genéricos e decepcionantes",
    "Você quer se destacar na sua área dominando ferramentas que a maioria ainda não usa bem",
    "Você tem medo de ficar para trás enquanto colegas e concorrentes adotam IA",
    "Você precisa produzir mais conteúdo, relatórios e análises com menos tempo disponível",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome: "Usar ChatGPT e ferramentas de IA no dia a dia profissional com prompts eficientes, produzindo textos, análises e conteúdos com segurança e consciência dos limites da tecnologia",
      modules: [
        {
          title: "Fundamentos do ChatGPT e Modelos de Linguagem",
          topics: [
            "O que são LLMs: como o ChatGPT realmente funciona por baixo dos panos",
            "Diferenças práticas entre GPT-4o, Claude e Gemini: quando usar cada um",
            "Alucinações e limitações de contexto: como identificar e contornar erros da IA",
            "ChatGPT Free vs Plus vs API: qual plano faz sentido para você",
            "Configurando seu ambiente de trabalho com IA: extensões, atalhos e boas práticas",
          ],
        },
        {
          title: "Prompt Engineering Básico",
          topics: [
            "Anatomia de um bom prompt: persona + tarefa + contexto + formato de saída",
            "Zero-shot vs few-shot: quando dar exemplos transforma o resultado",
            "Iteração e refinamento: como melhorar respostas ruins em vez de desistir",
            "Prompts por área profissional: modelos prontos para marketing, RH e financeiro",
            "Salvando e organizando seus melhores prompts para reutilização",
          ],
        },
        {
          title: "ChatGPT no Trabalho do Dia a Dia",
          topics: [
            "E-mails profissionais: da resposta rápida ao comunicado formal em segundos",
            "Resumo de documentos longos: contratos, relatórios e atas sem esforço",
            "Análise de planilhas com Code Interpreter: insights sem fórmulas complexas",
            "Brainstorming estruturado: gerar e filtrar ideias para projetos e reuniões",
            "Preparação de reuniões: agenda, perguntas e follow-up gerados por IA",
          ],
        },
        {
          title: "IA para Produção de Conteúdo",
          topics: [
            "Artigos e posts para redes sociais: estrutura, tom e adaptação por público",
            "Tradução profissional e adaptação cultural de textos com IA",
            "Roteiros para vídeos e podcasts: do esboço ao script final",
            "Apresentações no PowerPoint com Microsoft Copilot: slides em minutos",
            "Revisão e melhoria de textos existentes: clareza, coesão e persuasão",
          ],
        },
        {
          title: "Segurança, Privacidade e Limites Éticos",
          topics: [
            "O que NUNCA colocar no ChatGPT: dados pessoais, senhas e informações confidenciais",
            "LGPD e IA: responsabilidades do profissional ao usar ferramentas generativas",
            "Como verificar informações geradas por IA e evitar propagar desinformação",
            "Política de uso corporativo de IA: o que empresas já estão exigindo em 2025",
            "Transparência e autoria: quando e como declarar o uso de IA no seu trabalho",
          ],
        },
      ],
      tools: ["ChatGPT Plus", "Google Gemini", "Microsoft Copilot", "Notion AI"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome: "Dominar técnicas avançadas de prompt engineering, automatizar fluxos de trabalho reais com IA, aplicar análise de dados com ChatGPT e construir soluções de IA personalizadas para a sua área profissional",
      modules: [
        {
          title: "Prompt Engineering Avançado",
          topics: [
            "Chain-of-Thought prompting: ensinar a IA a raciocinar passo a passo",
            "ReAct e personas especializadas: simular especialistas para análises complexas",
            "Prompt Chaining: encadear prompts para tarefas de múltiplas etapas",
            "Structured output: forçar respostas em JSON, tabelas e formatos específicos",
            "Prompts para análise de dados: extrair padrões e insights de textos não estruturados",
          ],
        },
        {
          title: "ChatGPT para Análise de Dados e Excel",
          topics: [
            "Advanced Data Analysis: upload de planilhas e análise automática de colunas",
            "Geração de gráficos automáticos: visualizações prontas sem saber programar",
            "Análise estatística em linguagem natural: médias, tendências e correlações",
            "Geração de fórmulas Excel e Google Sheets em português com explicação",
            "Limpeza e padronização de dados sujos direto no Code Interpreter",
          ],
        },
        {
          title: "Automação de Tarefas com IA",
          topics: [
            "GPTs customizados: criando seu assistente especializado sem código",
            "Integração via API com Zapier: conectar ChatGPT a e-mail, planilhas e CRM",
            "Fluxos no Make: geração → revisão → publicação de conteúdo automatizado",
            "Relatórios recorrentes automáticos: dados + IA + entrega programada",
            "Monitoramento e manutenção de automações: o que fazer quando quebra",
          ],
        },
        {
          title: "IA por Área Profissional",
          topics: [
            "Marketing: geração de copy, campanhas completas e análise de concorrência",
            "RH: criação de job descriptions, triagem de currículos e roteiros de entrevista",
            "Financeiro: análise de relatórios, identificação de anomalias e narrativa de resultados",
            "Jurídico: resumo de contratos e identificação de cláusulas críticas com cautela",
            "Engenharia e TI: documentação técnica, revisão de código e explicação de erros",
          ],
        },
        {
          title: "Projeto Aplicado e Tendências em IA",
          topics: [
            "Projeto final: cada aluno aplica IA a um desafio real do seu contexto profissional",
            "OpenAI o1 e o3: raciocínio avançado e casos de uso para profissionais",
            "Gemini 2.0 e Claude 3.5: o que diferencia os modelos mais recentes",
            "Como acompanhar a evolução da IA sem se perder na enxurrada de novidades",
            "IA e mercado de trabalho em 2025: habilidades que valorizam e o que muda na prática",
          ],
        },
      ],
      tools: ["ChatGPT Plus", "Claude Pro", "Google Gemini", "Microsoft Copilot", "Make", "Zapier", "Notion AI", "Google Sheets"],
    },
  ],
  faqItems: [
    {
      q: "Já usei o ChatGPT e os resultados foram genéricos, esse curso resolve isso?",
      a: "Sim, é justamente o foco do módulo de Prompt Engineering. Você aprende a estrutura de um bom prompt (persona, tarefa, contexto e formato), a diferença entre zero-shot e few-shot, e como iterar em vez de desistir de uma resposta ruim.",
    },
    {
      q: "Qual a diferença entre os módulos Essencial e Intermediário?",
      a: "Essencial ensina os fundamentos de prompt, uso do ChatGPT no trabalho do dia a dia — e-mails, resumos, brainstorming — e os limites éticos e de segurança. Intermediário avança pra Chain-of-Thought, análise de dados e Excel com IA, automações com Zapier e Make, e aplicações específicas por área profissional.",
    },
    {
      q: "O curso tem conteúdo específico pra minha área, tipo RH, financeiro ou jurídico?",
      a: "Tem. O módulo 'IA por Área Profissional' do Intermediário cobre marketing, RH, financeiro, jurídico e engenharia/TI — cada um com os usos práticos de IA que fazem sentido pra rotina daquela área.",
    },
  ],
}

function ChatGptPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
