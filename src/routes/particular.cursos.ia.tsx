import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/ia")({
  component: IaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Inteligência Artificial Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda IA na prática em Ribeirão Preto: de ChatGPT e prompting avançado a agentes autônomos com LangChain e CrewAI. Aulas individuais, horário flexível.",
      path: "/particular/cursos/ia",
    }),
})

const COURSE_DATA = {
  nome: "Inteligência Artificial: do Essencial ao Profissional com Agentes",
  categoria: "Inteligência Artificial",
  tema: "ia" as const,
  logo: "ia",
  variante: "geral",
  tagline: "Domine IA na prática e multiplique sua produtividade no trabalho real",
  targetAudience: [
    "Você usa ferramentas digitais no trabalho mas ainda não adotou IA no dia a dia",
    "Você quer parar de perder horas em tarefas que o ChatGPT poderia fazer em minutos",
    "Você precisa apresentar resultados mais rápidos sem aumentar sua carga de trabalho",
    "Você é gestor, analista, redator, vendedor ou profissional de RH que quer vantagem competitiva",
    "Você já tentou usar IA mas os resultados foram medíocres e quer aprender a extrair o máximo",
    "Você quer construir automações e agentes de IA sem depender de equipe de TI",
  ],
  tiers: [
    {
      levelName: "IA: Essencial ao Profissional com Agentes",
      ctaLabel: "curso de IA com Agentes",
      totalHours: "48h",
      outcome:
        "Sair do zero em prompting e uso prático de IA (ChatGPT, Gemini, Copilot) até a automação sem código com n8n e a construção de agentes de IA reais com LangChain e CrewAI — pronto para multiplicar produtividade no trabalho e entregar um projeto de agente de IA aplicado a um caso de negócio real.",
      modules: [
        {
          title: "Fundamentos da IA Generativa",
          topics: [
            "O que são LLMs (Large Language Models) e como geram texto",
            "ChatGPT, Gemini, Claude e Microsoft Copilot: diferenças práticas e quando usar cada um",
            "Capacidades e limitações reais: alucinações, viés e como verificar outputs críticos",
            "Uso responsável: privacidade, o que nunca colocar em prompts, e direitos autorais de conteúdo gerado por IA",
          ],
        },
        {
          title: "Engenharia de Prompt do Básico ao Avançado",
          topics: [
            "Anatomia de um prompt eficaz: contexto, papel, tarefa e formato",
            "Few-shot e chain-of-thought: ensinando com exemplos e pedindo raciocínio passo a passo",
            "Persona pattern e prompts encadeados para tarefas complexas em múltiplos passos",
            "RAG conceitual: alimentando a IA com seus próprios documentos",
            "Refinamento iterativo e biblioteca de prompts reutilizáveis por área profissional",
          ],
        },
        {
          title: "Produtividade e Criação de Conteúdo com IA",
          topics: [
            "Redação de e-mails, relatórios e apresentações com ChatGPT e Microsoft Copilot (Word, Excel, PowerPoint)",
            "Análise de dados e planilhas com ChatGPT Advanced Data Analysis, Gemini e Copilot no Excel",
            "Criação de conteúdo visual e apresentações com Midjourney e Canva IA",
            "Transcrição e resumo automático de reuniões com Otter.ai",
            "IA aplicada por área profissional — marketing, vendas, RH, jurídico e finanças — com casos práticos rápidos por área",
          ],
        },
        {
          title: "Automação sem Código com n8n",
          topics: [
            "Conceitos de automação: triggers, ações, filtros e webhooks",
            "n8n: instalação, interface e criação dos primeiros fluxos com nós de IA",
            "Conectando ChatGPT a formulários, e-mails e planilhas via automação",
            "Automação de respostas de e-mail e notificações inteligentes no Slack e WhatsApp",
            "n8n avançado: subworkflows, tratamento de erros e integração com APIs externas e CRMs",
          ],
        },
        {
          title: "Fundamentos de Agentes de IA",
          topics: [
            "O que são agentes de IA: autonomia, ferramentas e memória",
            "Padrões de design: uso de ferramentas, planejamento, reflexão e multiagente",
            "Model Context Protocol (MCP): como agentes se conectam a sistemas externos",
            "RAG na prática: bancos de dados vetoriais (Pinecone) para dar memória e conhecimento próprio ao agente",
            "Custo, latência e boas práticas de agentes em produção",
          ],
        },
        {
          title: "Construindo Agentes com LangChain e CrewAI",
          topics: [
            "Configurando ambiente Python com LangChain e conectando a APIs de LLMs (OpenAI, Anthropic Claude)",
            "Criando ferramentas (tools) e conectando agentes a sistemas e APIs externas",
            "CrewAI: montando um time de agentes com papéis especializados (pesquisador, escritor, revisor)",
            "Noções de LangGraph (fluxos com estado) e AutoGen (multiagentes) para cenários mais avançados",
            "Projeto final: construção de um agente de IA para um caso real de negócio, do design ao deploy simplificado, com monitoramento básico via LangSmith",
          ],
        },
      ],
      tools: [
        "ChatGPT",
        "Google Gemini",
        "Microsoft Copilot",
        "Claude",
        "Midjourney",
        "Canva IA",
        "n8n",
        "Python",
        "LangChain",
        "CrewAI",
        "Pinecone",
        "OpenAI API",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber programar para fazer esse curso de IA?",
      a: "Não no início. O curso começa do zero, usando ChatGPT, Gemini e Copilot com prompting de verdade, passa por automação no-code com n8n e só entra em Python e construção de agentes com LangChain e CrewAI nas aulas finais — quando você já tem a base necessária pra programar com confiança.",
    },
    {
      q: "Já uso ChatGPT no trabalho mas os resultados não me impressionam — o curso ajuda nisso?",
      a: "Sim, é exatamente para esse caso. O curso ensina engenharia de prompt de verdade — contexto, exemplos, raciocínio passo a passo — que é o que separa quem usa IA de forma rasa de quem realmente extrai resultado dela, seja você gestor, analista, redator, vendedor ou profissional de RH.",
    },
  ],
}

function IaPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
