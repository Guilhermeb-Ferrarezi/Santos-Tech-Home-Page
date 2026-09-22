import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/agentes-ia")({
  component: AgentesIaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Agentes de IA com N8N e LLMs para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Crie agentes de IA autônomos e sistemas multiagentes com N8N, LangChain e CrewAI. Curso presencial em Ribeirão Preto para quem quer automatizar processos com inteligência artificial.",
      path: "/adultos/cursos/agentes-ia",
    }),
})

const COURSE_DATA = {
  nome: "Agentes de IA com N8N e LLMs",
  categoria: "Inteligência Artificial",
  tagline: "Crie agentes autônomos que trabalham por você 24h com inteligência real",
  pricePerAula: 109.9,
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Construir agentes de IA funcionais no N8N com memória, uso de ferramentas e integração com OpenAI e Google Gemini, capazes de executar tarefas autônomas conectadas a APIs e planilhas reais",
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
          title: "Construindo Agentes no N8N com OpenAI",
          topics: [
            "AI Agent Node: configurando o modelo, system prompt e nível de autonomia",
            "Adicionando ferramentas nativas: Wikipedia, SerpAPI e calculadora",
            "Conectando o agente ao Google Sheets como ferramenta de leitura e escrita",
            "Memória de janela de contexto com Window Buffer Memory Node",
            "Agente respondendo perguntas sobre dados de uma planilha em linguagem natural",
            "Testando e depurando o raciocínio do agente com o painel de execução do N8N",
          ],
        },
        {
          title: "Ferramentas HTTP e Integração com APIs Externas",
          topics: [
            "Transformar qualquer API REST em ferramenta do agente com HTTP Request Tool",
            "Configurando autenticação Bearer Token e API Key nas ferramentas do N8N",
            "Agente que busca cotações de câmbio em tempo real via API do Open Exchange Rates",
            "Agente que consulta o clima via OpenWeatherMap e responde em linguagem natural",
            "Criando ferramenta personalizada com Code Node para transformações específicas",
            "Tratamento de erros: como o agente lida com respostas inesperadas de APIs",
          ],
        },
        {
          title: "Memória e Sessões de Conversa",
          topics: [
            "Tipos de memória no N8N: Window Buffer, Summary e Simple Memory",
            "Persistindo histórico de conversa entre sessões com Redis Memory Node",
            "Chave de sessão (session ID) para múltiplos usuários simultâneos",
            "Agente de atendimento com memória de contexto integrado ao Telegram",
            "Limpeza de memória e gerenciamento de contexto em conversas longas",
          ],
        },
        {
          title: "Projeto Essencial: Agente de Suporte Inteligente",
          topics: [
            "Definindo o escopo: agente que responde dúvidas usando base de conhecimento em Google Sheets",
            "Configurando gatilho via Webhook para receber mensagens do WhatsApp ou Telegram",
            "Implementando ferramenta de busca na planilha com aproximação semântica via embeddings",
            "Adicionando fallback: quando o agente não sabe, escala para humano via e-mail",
            "Testando fluxos de conversa e refinando o system prompt para reduzir alucinações",
            "Deploy e monitoramento: ativando o workflow em produção no N8N Cloud",
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
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Arquitetar e colocar em produção sistemas multiagentes com N8N, LangChain, LangGraph e CrewAI, com RAG sobre documentos reais, memória de longo prazo, avaliação de qualidade e deploy escalável em infraestrutura própria",
      modules: [
        {
          title: "Agentes Avançados com LangChain e LangGraph",
          topics: [
            "Configurando ambiente Python com uv, LangChain 0.3 e LangGraph 0.2",
            "Criando ferramentas customizadas com @tool decorator e StructuredTool",
            "LangGraph: modelando agentes como grafos de estado com StateGraph",
            "Nós condicionais e ciclos de reflexão: agente que critica e reescreve o próprio output",
            "Checkpointing de estado com SqliteSaver para retomada de tarefas longas",
            "Streaming de tokens e eventos intermediários para UX responsiva",
            "Monitoramento e rastreamento de execuções com LangSmith",
          ],
        },
        {
          title: "RAG Avançado: Bases de Conhecimento Inteligentes",
          topics: [
            "Pipeline RAG completo: carregamento, chunking semântico, embedding e recuperação",
            "Escolhendo o tamanho de chunk e estratégia de overlap para documentos técnicos vs narrativos",
            "Bancos de dados vetoriais na prática: Pinecone, Chroma e pgvector no PostgreSQL",
            "Embedding models: text-embedding-3-large (OpenAI) vs all-MiniLM-L6-v2 (local)",
            "RAG híbrido: combinando busca vetorial com BM25 para melhor precisão",
            "Self-querying retriever: agente que constrói filtros de metadados automaticamente",
            "Avaliação de qualidade de RAG com RAGAS: faithfulness, answer relevance e context recall",
          ],
        },
        {
          title: "Sistemas Multiagentes com CrewAI e AutoGen",
          topics: [
            "Arquitetura multiagente: quando orquestrar vs quando os agentes colaboram entre si",
            "CrewAI: criando crews com Researcher, Writer, Reviewer e Manager agents",
            "Definindo Tasks com descrições, expected outputs e dependências entre agentes",
            "Padrões de execução no CrewAI: sequential, hierarchical e asynchronous",
            "AutoGen: comunicação bidirecional entre agentes com GroupChat e RoundRobin",
            "Agente gerente com LLM que delega para agentes especialistas dinâmicos",
            "Pipeline multiagente para análise de concorrência: agente pesquisa, agente analisa, agente formata",
          ],
        },
        {
          title: "Agentes com N8N em Escala Empresarial",
          topics: [
            "N8N self-hosted com Docker Compose: PostgreSQL, Redis e configuração de workers",
            "Queue mode no N8N: execuções paralelas e escalabilidade horizontal",
            "Agente de análise de leads: lê CRM, pesquisa CNPJ na Receita Federal, pontua e atualiza HubSpot",
            "Agente de monitoramento de contrato: lê PDF via LlamaParse, extrai datas críticas e agenda alertas",
            "Integração bidirecional com Slack: agente recebe comandos e envia relatórios formatados",
            "Agente de voz com GPT-4o Realtime API via Webhook e resposta em áudio com ElevenLabs",
            "Rate limiting, retry logic e circuit breaker para agentes em produção",
          ],
        },
        {
          title: "Memória de Longo Prazo e Personalização",
          topics: [
            "Arquitetura de memória em camadas: episódica, semântica e procedural",
            "Implementando memória de longo prazo com mem0 e Supabase pgvector",
            "Agente que lembra preferências do usuário entre sessões e personaliza respostas",
            "Extração e consolidação automática de fatos importantes do histórico de conversa",
            "Forgetting curve: política de expiração e relevância de memórias antigas",
            "Multi-user memory isolation: segurança e privacidade em agentes compartilhados",
          ],
        },
        {
          title: "Projeto Final: Sistema Multiagente em Produção",
          topics: [
            "Levantamento do problema real e design da arquitetura multiagente no whiteboard",
            "Desenvolvimento iterativo com ciclos de avaliação usando LangSmith e RAGAS",
            "Integração com sistemas legados via API REST e webhooks bidirecionais",
            "Observabilidade: logs estruturados, traces de agente e dashboards no Grafana",
            "Deploy em VPS com Docker, Nginx e certificado SSL; CI/CD com GitHub Actions",
            "Estratégia de atualização de modelos sem downtime e rollback seguro",
            "Apresentação técnica e pitch do agente para stakeholders não-técnicos",
          ],
        },
      ],
      tools: [
        "N8N (self-hosted)",
        "LangChain 0.3",
        "LangGraph 0.2",
        "LangSmith",
        "CrewAI",
        "AutoGen",
        "OpenAI GPT-4o",
        "Anthropic Claude API",
        "Pinecone",
        "pgvector (PostgreSQL)",
        "mem0",
        "ElevenLabs",
        "LlamaParse",
        "Docker",
        "Python",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já uso N8N ou Make, esse curso ainda faz sentido pra mim?",
      a: "Faz — é exatamente pra esse perfil. O Essencial parte do que você já sabe de automação e mostra como integrar LLMs como GPT-4o e Gemini pra criar agentes que raciocinam e decidem, com memória e ferramentas, em vez de fluxos lineares fixos.",
    },
    {
      q: "Preciso saber programar pra criar agentes de IA?",
      a: "No módulo Essencial não — tudo é construído visualmente no N8N, incluindo integração com APIs, planilhas e WhatsApp. O Profissional + IA é que entra em Python com LangChain, LangGraph e CrewAI pra quem quer arquitetar sistemas multiagentes mais complexos.",
    },
    {
      q: "Dá pra usar o que aprendo aqui pra oferecer automações como serviço?",
      a: "Sim. O curso foi desenhado pensando nisso — do agente de suporte com fallback pra humano no Essencial até agentes de análise de leads, monitoramento de contrato e atendimento por voz em produção no Profissional + IA, prontos pra vender como solução pra clientes.",
    },
  ],
}

function AgentesIaPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
