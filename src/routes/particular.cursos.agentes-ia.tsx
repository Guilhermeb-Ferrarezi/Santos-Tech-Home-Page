import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/agentes-ia")({
  component: AgentesIaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Agentes de IA com N8N e LLMs Particular em Ribeirão Preto — Santos Tech",
      description:
        "Crie agentes de IA autônomos e sistemas multiagentes com N8N, LangChain e CrewAI. Curso presencial em Ribeirão Preto para quem quer automatizar processos com inteligência artificial.",
      path: "/particular/cursos/agentes-ia",
    }),
})

const COURSE_DATA = {
  nome: "Agentes de IA com N8N e LLMs",
  categoria: "Inteligência Artificial",
  tema: "ia" as const,
  logo: "ia",
  variante: "agentes",
  tagline: "Crie agentes autônomos que trabalham por você 24h com inteligência real",
  targetAudience: [
    "Você quer automatizar processos do seu negócio com IA real, além de chatbots simples",
    "Você já usa N8N ou Make e quer dar o próximo passo integrando LLMs que raciocinam e decidem",
    "Você é desenvolvedor, analista ou empreendedor que quer construir produtos com IA sem esperar pela área de TI",
    "Você quer criar agentes que leem e-mails, pesquisam na web, atualizam CRMs e geram relatórios sozinhos",
    "Você acompanha o avanço de LangChain, CrewAI e OpenAI e quer sair da teoria e ir para a prática",
    "Você quer oferecer automações inteligentes como serviço para clientes e cobrar mais pelo resultado",
  ],
  tiers: [
    {
      levelName: "Agentes de IA com N8N e LLMs",
      ctaLabel: "curso de Agentes de IA",
      totalHours: "48h",
      outcome:
        "Construir agentes de IA funcionais do zero absoluto — começando 100% no-code no N8N, com memória, ferramentas e integração a APIs e planilhas reais — até dar os primeiros passos em Python com LangChain e LangGraph, conectar o agente a uma base de conhecimento própria via RAG e montar um sistema multiagente simples com CrewAI, pronto para publicar em produção.",
      modules: [
        {
          title: "Fundamentos de Agentes de IA",
          topics: [
            "O que diferencia um agente de IA de um chatbot ou de uma automação linear",
            "Os quatro componentes de um agente: LLM, memória, ferramentas e loop de ação",
            "Padrões de design agêntico: ReAct (Reason + Act) e como o N8N o implementa",
            "Como LLMs como GPT-4o e Gemini 1.5 Pro decidem qual ferramenta usar (function calling)",
            "Arquitetura de um agente no N8N: AI Agent Node, ferramentas e memória",
            "Configurando credenciais OpenAI, Anthropic e Google Gemini no N8N",
          ],
        },
        {
          title: "Construindo Agentes no N8N com OpenAI e Gemini",
          topics: [
            "AI Agent Node: configurando o modelo, system prompt e nível de autonomia",
            "Adicionando ferramentas nativas: Wikipedia, SerpAPI e calculadora",
            "Conectando o agente ao Google Sheets como ferramenta de leitura e escrita",
            "Agente respondendo perguntas sobre dados de uma planilha em linguagem natural",
            "Testando e depurando o raciocínio do agente com o painel de execução do N8N",
          ],
        },
        {
          title: "Ferramentas HTTP, APIs Externas e Memória de Conversa",
          topics: [
            "Transformar qualquer API REST em ferramenta do agente com HTTP Request Tool",
            "Configurando autenticação Bearer Token e API Key nas ferramentas do N8N",
            "Agente que consulta APIs externas em tempo real (câmbio, clima) e responde em linguagem natural",
            "Tratamento de erros: como o agente lida com respostas inesperadas de APIs",
            "Tipos de memória no N8N: Window Buffer, Summary e memória persistente com Redis",
            "Chave de sessão (session ID) para múltiplos usuários simultâneos, com atendimento integrado ao Telegram",
          ],
        },
        {
          title: "Projeto Prático: Agente de Suporte Inteligente",
          topics: [
            "Definindo o escopo: agente que responde dúvidas usando base de conhecimento em Google Sheets",
            "Configurando gatilho via Webhook para receber mensagens do WhatsApp ou Telegram",
            "Implementando ferramenta de busca na planilha com aproximação semântica via embeddings",
            "Adicionando fallback: quando o agente não sabe, escala para humano via e-mail",
            "Testando fluxos de conversa e refinando o system prompt para reduzir alucinações",
            "Deploy e monitoramento: ativando o workflow em produção no N8N Cloud",
          ],
        },
        {
          title: "Do No-Code ao Código: Primeiros Passos com LangChain e LangGraph",
          topics: [
            "Configurando ambiente Python com LangChain 0.3 e LangGraph 0.2",
            "Criando ferramentas customizadas com o decorator @tool",
            "LangGraph: modelando um agente simples como grafo de estado com StateGraph",
            "Nós condicionais: agente que decide sozinho o próximo passo no fluxo",
            "Do N8N ao código: quando vale a pena migrar um agente pra Python",
          ],
        },
        {
          title: "RAG, Multiagentes com CrewAI e Publicação em Produção",
          topics: [
            "Pipeline RAG completo: carregamento de documentos, chunking, embedding e recuperação",
            "Bancos de dados vetoriais na prática (Pinecone e Chroma) conectados ao agente",
            "CrewAI: criando uma crew simples com agentes especializados (pesquisador, redator, revisor)",
            "Definindo Tasks com descrições, resultados esperados e dependências entre agentes",
            "Projeto: pipeline multiagente que pesquisa, analisa e formata um resultado final",
            "Publicando seu agente em produção: opções simples de deploy (N8N Cloud ou VPS), sem exigir um pipeline completo de CI/CD",
          ],
        },
      ],
      tools: [
        "N8N Cloud",
        "OpenAI GPT-4o",
        "Google Gemini 1.5 Pro",
        "SerpAPI",
        "Redis",
        "Google Sheets API",
        "Evolution API (WhatsApp)",
        "Telegram Bot API",
        "Python",
        "LangChain 0.3",
        "LangGraph 0.2",
        "CrewAI",
        "Anthropic Claude API",
        "Pinecone",
        "Chroma",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já uso N8N ou Make, esse curso ainda faz sentido pra mim?",
      a: "Faz — é exatamente pra esse perfil. O curso parte do que você já sabe de automação e mostra como integrar LLMs como GPT-4o e Gemini pra criar agentes que raciocinam e decidem, com memória e ferramentas, em vez de fluxos lineares fixos — e depois avança pra Python, RAG e sistemas multiagentes.",
    },
    {
      q: "Preciso saber programar pra criar agentes de IA?",
      a: "Não pra começar — a base do curso é 100% visual no N8N, incluindo integração com APIs, planilhas e WhatsApp. Na segunda metade, o curso avança pra Python com LangChain e LangGraph, RAG e sistemas multiagentes com CrewAI, pra quem quer ir além do no-code.",
    },
    {
      q: "Dá pra usar o que aprendo aqui pra oferecer automações como serviço?",
      a: "Sim. O curso foi desenhado pensando nisso — do agente de suporte com fallback pra humano até agentes com busca em base de conhecimento própria via RAG e sistemas multiagentes com CrewAI, prontos pra vender como solução pra clientes.",
    },
  ],
}

function AgentesIaPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
