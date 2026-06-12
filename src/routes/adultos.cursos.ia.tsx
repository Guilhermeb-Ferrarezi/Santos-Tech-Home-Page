import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/ia")({
  component: IaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Inteligência Artificial para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda IA na prática em Ribeirão Preto: de ChatGPT e prompting avançado a agentes autônomos com LangChain e CrewAI. Aulas individuais, horário flexível.",
      path: "/adultos/cursos/ia",
    }),
})

const COURSE_DATA = {
  nome: "Inteligência Artificial: do Essencial ao Profissional com Agentes",
  categoria: "Inteligência Artificial",
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
      label: "Tier 1",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Usar ChatGPT, Gemini e Copilot com técnicas reais de prompting para acelerar tarefas do dia a dia profissional e entregar mais resultados em menos tempo",
      modules: [
        {
          title: "Como a IA Generativa Realmente Funciona",
          topics: [
            "O que são LLMs (Large Language Models) e como geram texto",
            "Diferenças práticas entre ChatGPT, Gemini, Claude e Microsoft Copilot",
            "Capacidades e limitações reais: o que a IA faz bem e onde erra",
            "Alucinações, viés e como verificar outputs críticos",
            "Configurando suas contas e ambientes de trabalho com IA",
          ],
        },
        {
          title: "Engenharia de Prompt para Resultados Reais",
          topics: [
            "Anatomia de um prompt eficaz: contexto, papel, tarefa e formato",
            "Técnica few-shot: ensinar a IA com exemplos concretos",
            "Chain-of-thought: pedindo raciocínio passo a passo",
            "Refinamento iterativo de prompts até o resultado ideal",
            "Prompts para resumo, análise, geração e reescrita de textos profissionais",
            "Criando templates de prompts reutilizáveis para sua área",
          ],
        },
        {
          title: "IA na Produtividade do Escritório",
          topics: [
            "Redação de e-mails, relatórios e apresentações com ChatGPT",
            "Microsoft Copilot no Word, Excel e PowerPoint: recursos práticos",
            "Gemini no Google Workspace: Docs, Sheets e Gmail",
            "Resumo e análise de documentos longos em minutos",
            "Pesquisa e síntese de informações com Perplexity AI",
            "Geração de imagens para apresentações com DALL-E e Canva IA",
          ],
        },
        {
          title: "Uso Responsável e Ético da IA",
          topics: [
            "Riscos de privacidade: o que nunca colocar em ferramentas de IA",
            "Identificando desinformação e outputs enviesados",
            "Políticas corporativas e conformidade no uso de IA",
            "Framework para avaliar quando usar ou não usar IA em uma tarefa",
            "Direitos autorais e propriedade intelectual em conteúdo gerado por IA",
          ],
        },
      ],
      tools: [
        "ChatGPT",
        "Google Gemini",
        "Microsoft Copilot",
        "Perplexity AI",
        "DALL-E",
        "Canva IA",
      ],
    },
    {
      label: "Tier 2",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Integrar IA em fluxos de trabalho complexos, dominar ferramentas avançadas de produtividade e construir automações simples com n8n e Make para eliminar trabalho repetitivo da sua rotina profissional",
      modules: [
        {
          title: "Prompting Avançado e Estratégias de Contexto",
          topics: [
            "Persona pattern: definindo papéis especializados para a IA",
            "RAG conceitual: como alimentar a IA com seus próprios documentos",
            "Prompts encadeados para tarefas complexas em múltiplos passos",
            "Técnica de árvore de pensamento para análises estratégicas",
            "Comparando resultados entre ChatGPT, Claude e Gemini para cada tipo de tarefa",
            "Construindo biblioteca de prompts por área profissional",
          ],
        },
        {
          title: "IA para Análise de Dados e Relatórios",
          topics: [
            "ChatGPT Advanced Data Analysis: upload e análise de planilhas Excel",
            "Interpretação de gráficos e geração de insights com IA",
            "Gemini no Google Sheets: fórmulas, análises e resumos automáticos",
            "Copilot no Excel: análise de tendências e geração de dashboards",
            "Criando relatórios executivos a partir de dados brutos",
            "Prompt engineering para análise quantitativa e qualitativa",
          ],
        },
        {
          title: "Criação de Conteúdo Profissional com IA",
          topics: [
            "Estratégia de conteúdo assistida por IA para LinkedIn e redes sociais",
            "Criação de apresentações executivas com Gamma e Tome",
            "Geração e edição de vídeos curtos com Runway e CapCut IA",
            "Escrita de propostas comerciais e documentos técnicos",
            "Transcrição e resumo automático de reuniões com Otter.ai e Fireflies",
            "Criação de imagens profissionais com Midjourney e Adobe Firefly",
          ],
        },
        {
          title: "Automações sem Código com Make e n8n",
          topics: [
            "Conceitos de automação: triggers, ações, filtros e webhooks",
            "Make (Makaron): criando fluxos visuais de automação",
            "Conectando ChatGPT a formulários, e-mails e planilhas via Make",
            "n8n: instalação e primeiros fluxos com nós de IA",
            "Automação de respostas de e-mail com IA integrada",
            "Criando notificações inteligentes no Slack e WhatsApp via API",
          ],
        },
        {
          title: "IA por Área Profissional",
          topics: [
            "IA para Marketing: geração de copies, SEO e segmentação",
            "IA para RH: triagem de currículos, onboarding e comunicação interna",
            "IA para Vendas: scripts de prospecção, follow-up e análise de CRM",
            "IA para Jurídico e Compliance: revisão de contratos e pesquisa legal",
            "IA para Finanças: modelagem, forecasting e relatórios automatizados",
            "Construindo seu case de uso específico para sua área",
          ],
        },
      ],
      tools: [
        "ChatGPT Advanced Data Analysis",
        "Claude",
        "Google Gemini",
        "Microsoft Copilot",
        "Make (Makaron)",
        "n8n",
        "Gamma",
        "Otter.ai",
        "Midjourney",
        "Adobe Firefly",
      ],
    },
    {
      label: "Tier 3",
      levelName: "Profissional",
      totalHours: "72h",
      outcome:
        "Arquitetar e implementar agentes de IA autônomos, sistemas multiagentes e automações de nível profissional com LangChain, LangGraph e CrewAI, entregando um projeto real pronto para produção",
      modules: [
        {
          title: "Fundamentos de Agentes de IA",
          topics: [
            "O que são agentes de IA: autonomia, ferramentas e memória",
            "Quatro padrões de design: Reflexão, Uso de Ferramentas, Planejamento e Multi-Agente",
            "Decomposição de tarefas complexas em passos executáveis",
            "Frameworks de avaliação de sistemas agênticos (evals)",
            "Model Context Protocol (MCP): como agentes se conectam a sistemas externos",
            "Custo, latência e otimização de sistemas agênticos em produção",
          ],
        },
        {
          title: "Construindo Agentes com LangChain e LangGraph",
          topics: [
            "Configurando ambiente Python com LangChain e APIs de LLMs",
            "Criando ferramentas (tools) e conectando agentes a APIs externas",
            "LangGraph: gerenciamento de estado e fluxos de agentes com grafos",
            "Memória de curto e longo prazo com LangMem",
            "Padrão Reflexão: agente que critica e itera sobre o próprio output",
            "Integração com bancos de dados vetoriais para RAG (Retrieval-Augmented Generation)",
            "Debugging e monitoramento de agentes com LangSmith",
          ],
        },
        {
          title: "Sistemas Multi-Agentes com CrewAI e AutoGen",
          topics: [
            "Arquitetura de times de agentes com papéis especializados",
            "CrewAI: criando crews com agentes pesquisador, escritor e revisor",
            "AutoGen: comunicação e coordenação entre múltiplos agentes",
            "Padrões de orquestração: sequential, parallel e hierarchical",
            "Agente gerente delegando tarefas para agentes especialistas",
            "Construindo pipeline de análise de mercado com multi-agentes",
            "Testes e avaliação de qualidade em sistemas multi-agentes",
          ],
        },
        {
          title: "Automações Avançadas com n8n e Integrações de API",
          topics: [
            "n8n avançado: subworkflows, error handling e execução paralela",
            "Agente de IA para WhatsApp Business com n8n e OpenAI",
            "Integração de agentes com CRMs (HubSpot, Salesforce) via API",
            "Webhooks e eventos em tempo real para fluxos reativos",
            "Construindo pipeline de automação para geração de relatórios semanais",
            "Voz e multimodalidade: agentes de voz com GPT-4o e ElevenLabs",
          ],
        },
        {
          title: "RAG e Bases de Conhecimento Inteligentes",
          topics: [
            "Arquitetura RAG completa: chunking, embedding e recuperação",
            "Bancos de dados vetoriais: Pinecone, Chroma e Weaviate na prática",
            "Construindo chatbot com base nos documentos da empresa",
            "Fine-tuning vs RAG: quando usar cada abordagem",
            "Avaliação de qualidade de respostas em sistemas RAG",
            "Segurança e controle de acesso em bases de conhecimento com IA",
          ],
        },
        {
          title: "Projeto Final: Agente de IA para Caso Real de Negócio",
          topics: [
            "Definição do problema e arquitetura da solução com agentes",
            "Desenvolvimento iterativo do agente com ciclos de avaliação",
            "Integração com sistemas existentes (e-mail, CRM, planilhas, APIs)",
            "Deploy do agente em produção com monitoramento e alertas",
            "Documentação técnica e apresentação para stakeholders",
            "Estratégia de manutenção, atualização e escalonamento do agente",
          ],
        },
      ],
      tools: [
        "LangChain",
        "LangGraph",
        "LangSmith",
        "CrewAI",
        "AutoGen",
        "n8n",
        "Pinecone",
        "OpenAI API",
        "Anthropic Claude API",
        "ElevenLabs",
        "Python",
      ],
    },
  ],
}

function IaPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
