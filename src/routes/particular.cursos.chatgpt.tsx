import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/chatgpt")({
  component: ChatGptPage,
  head: () =>
    pageMeta({
      title: "Curso de ChatGPT e IA Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a usar ChatGPT e IA no trabalho em Ribeirão Preto. Do prompt engineering à automação: multiplique sua produtividade com inteligência artificial.",
      path: "/particular/cursos/chatgpt",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "ChatGPT e IA para Profissionais",
  categoria: "Inteligência Artificial",
  tema: "ia" as const,
  logo: "chatgpt",
  variante: "chat",
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
      levelName: "ChatGPT",
      totalHours: "48h",
      outcome: "Dominar ChatGPT e as principais ferramentas de IA generativa do zero ao uso avançado — da anatomia de um prompt eficiente ao Chain-of-Thought, passando pelo uso no trabalho do dia a dia, produção de conteúdo, análise de dados e automação leve — com segurança e consciência dos limites da tecnologia",
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
          title: "Prompt Engineering: do Básico ao Avançado",
          topics: [
            "Anatomia de um bom prompt: persona + tarefa + contexto + formato de saída",
            "Zero-shot vs few-shot: quando dar exemplos transforma o resultado",
            "Iteração e refinamento: como melhorar respostas ruins em vez de desistir",
            "Chain-of-Thought prompting: ensinar a IA a raciocinar passo a passo",
            "ReAct e personas especializadas: simular especialistas para análises complexas",
            "Structured output: forçar respostas em JSON, tabelas e formatos específicos",
          ],
        },
        {
          title: "ChatGPT no Trabalho do Dia a Dia",
          topics: [
            "E-mails profissionais: da resposta rápida ao comunicado formal em segundos",
            "Resumo de documentos longos: contratos, relatórios e atas sem esforço",
            "Brainstorming estruturado: gerar e filtrar ideias para projetos e reuniões",
            "Preparação de reuniões: agenda, perguntas e follow-up gerados por IA",
            "IA por área profissional: prompts e casos de uso prontos para marketing, RH, financeiro, jurídico e TI",
          ],
        },
        {
          title: "IA para Conteúdo e Análise de Dados",
          topics: [
            "Artigos e posts para redes sociais: estrutura, tom e adaptação por público",
            "Apresentações no PowerPoint com Microsoft Copilot: slides em minutos",
            "Revisão e melhoria de textos existentes: clareza, coesão e persuasão",
            "Análise de planilhas e dados com Code Interpreter: insights, estatísticas e gráficos sem programar",
            "Geração de fórmulas Excel e Google Sheets em português com explicação",
          ],
        },
        {
          title: "Automação Leve e Projeto Aplicado",
          topics: [
            "GPTs customizados: criando seu assistente especializado sem código",
            "Integrações prontas: conectar ChatGPT a e-mail, planilhas e CRM com Zapier e Make",
            "Relatórios recorrentes automáticos: dados + IA + entrega programada",
            "Projeto final: aplicar IA a um desafio real do seu contexto profissional",
            "Tendências em IA e no mercado de trabalho: novos modelos, raciocínio avançado e as habilidades que se valorizam",
          ],
        },
        {
          title: "Segurança, Privacidade e Limites Éticos",
          topics: [
            "O que NUNCA colocar no ChatGPT: dados pessoais, senhas e informações confidenciais",
            "LGPD e IA: responsabilidades do profissional ao usar ferramentas generativas",
            "Como verificar informações geradas por IA e evitar propagar desinformação",
            "Política de uso corporativo de IA: o que empresas já estão exigindo",
            "Transparência e autoria: quando e como declarar o uso de IA no seu trabalho",
          ],
        },
      ],
      tools: ["ChatGPT Plus", "Claude Pro", "Google Gemini", "Microsoft Copilot", "Notion AI", "Google Sheets", "Zapier", "Make"],
    },
  ],
  faqItems: [
    {
      q: "Já usei o ChatGPT e os resultados foram genéricos, esse curso resolve isso?",
      a: "Sim, é justamente o foco do módulo de Prompt Engineering. Você aprende a estrutura de um bom prompt (persona, tarefa, contexto e formato), a diferença entre zero-shot e few-shot, e como iterar em vez de desistir de uma resposta ruim.",
    },
    {
      q: "O curso tem conteúdo específico pra minha área, tipo RH, financeiro ou jurídico?",
      a: "Tem. O módulo 'ChatGPT no Trabalho do Dia a Dia' inclui um tópico dedicado a marketing, RH, financeiro, jurídico e TI — cada um com os usos práticos de IA que fazem sentido pra rotina daquela área.",
    },
  ],
}

function ChatGptPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
