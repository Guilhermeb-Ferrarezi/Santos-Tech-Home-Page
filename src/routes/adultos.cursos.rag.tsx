import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/rag")({
  component: RagPage,
  head: () =>
    pageMeta({
      title:
        "Curso de RAG — IA com seus Próprios Dados para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a construir sistemas de RAG (Retrieval-Augmented Generation) com embeddings, bancos vetoriais e LLMs para criar chatbots e assistentes com seus documentos.",
      path: "/adultos/cursos/rag",
    }),
})

const COURSE_DATA = {
  nome: "RAG — IA com seus Próprios Dados",
  categoria: "Inteligência Artificial",
  tagline:
    "Ensine a IA a responder com seus documentos, dados e contexto privado",
  pricePerAula: 109.9,
  targetAudience: [
    "Você tem toneladas de documentos internos e quer um assistente que realmente os conheça",
    "Você já usou ChatGPT mas precisa que a IA responda com os dados específicos da sua empresa",
    "Você é engenheiro, analista ou cientista de dados que quer dominar a stack RAG de ponta a ponta",
    "Você quer construir chatbots corporativos sem vazar documentos confidenciais para APIs externas",
    "Você já tentou plugar PDFs no GPT e os resultados foram imprecisos ou alucinados",
    "Você quer entregar produtos de IA com base em conhecimento proprietário e se destacar no mercado",
  ],
  tiers: [
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Construir pipelines RAG completos do zero com LangChain, bancos vetoriais e LLMs, entregando um chatbot funcional capaz de responder perguntas sobre documentos reais com alta precisão",
      modules: [
        {
          title: "Fundamentos de RAG e Arquitetura do Pipeline",
          topics: [
            "O que é Retrieval-Augmented Generation e por que supera o fine-tuning para dados privados",
            "Componentes do pipeline RAG: ingestão, chunking, embedding, indexação, recuperação e geração",
            "Limitações do contexto de LLMs e por que RAG resolve o problema de documentos longos",
            "Comparação de abordagens: RAG naive vs RAG avançado vs GraphRAG",
            "Configurando ambiente Python com LangChain 0.3, OpenAI SDK e dependências RAG",
          ],
        },
        {
          title: "Chunking, Embedding e Indexação de Documentos",
          topics: [
            "Estratégias de chunking: fixed-size, recursive, semantic e parent-document chunker",
            "Trade-offs de tamanho de chunk: granularidade vs contexto (chunk_size e chunk_overlap)",
            "Modelos de embedding: text-embedding-3-small, text-embedding-3-large e modelos open-source",
            "Como embeddings capturam semântica e por que cosine similarity funciona",
            "Indexando documentos no Chroma DB localmente com LangChain",
            "Processando PDFs, Word, HTML e CSVs com LangChain document loaders",
          ],
        },
        {
          title: "Retrieval: Estratégias de Busca e Reranking",
          topics: [
            "Busca por similaridade vetorial (dense retrieval) na prática",
            "BM25 e busca híbrida: combinando busca léxica e semântica",
            "Maximum Marginal Relevance (MMR) para diversificar resultados recuperados",
            "Reranking com Cohere Rerank e cross-encoders para melhorar precisão",
            "Self-query retriever: deixando o LLM gerar filtros de metadados automaticamente",
            "Avaliando qualidade do retrieval com métricas de recall e precision",
          ],
        },
        {
          title: "Geração: Construindo o Pipeline QA com LangChain",
          topics: [
            "RetrievalQA chain vs LCEL (LangChain Expression Language): quando usar cada um",
            "Construindo um chain LCEL com runnable passthrough, retriever e prompt template",
            "Prompt engineering para sistemas RAG: instrução, contexto e pergunta",
            "Histórico de conversa em RAG: ConversationalRetrievalChain e memória",
            "Citação de fontes: forçar o LLM a indicar os trechos usados na resposta",
            "Streaming de respostas para UX responsiva em aplicações web",
          ],
        },
        {
          title: "Avaliação e Debugging de Sistemas RAG",
          topics: [
            "Avaliação RAG com RAGAS: faithfulness, answer relevancy e context recall",
            "Construindo golden dataset de perguntas e respostas esperadas para benchmarking",
            "Debugging de alucinações: quando o LLM ignora o contexto recuperado",
            "LangSmith: rastreando e inspecionando cada etapa do pipeline em produção",
            "Estratégias de melhoria iterativa baseadas em métricas de avaliação",
          ],
        },
        {
          title: "Projeto Intermediário: Chatbot sobre Documentos da Empresa",
          topics: [
            "Definindo escopo: base de conhecimento, casos de uso e critérios de aceitação",
            "Ingestão de documentos reais: PDFs, manuais, políticas internas e FAQs",
            "Construindo interface com Streamlit ou Gradio para demonstração",
            "Testando com perguntas reais e iterando sobre chunking e prompts",
            "Preparando demonstração do protótipo para stakeholders",
          ],
        },
      ],
      tools: [
        "Python",
        "LangChain 0.3",
        "OpenAI API",
        "Chroma DB",
        "RAGAS",
        "LangSmith",
        "Cohere Rerank",
        "Streamlit",
        "Gradio",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Arquitetar e colocar em produção sistemas RAG avançados com GraphRAG, agentes com ferramentas, bancos vetoriais escaláveis e pipelines de avaliação contínua, entregando um produto de IA robusto e pronto para uso corporativo",
      modules: [
        {
          title: "RAG Avançado: Técnicas de Última Geração",
          topics: [
            "HyDE (Hypothetical Document Embeddings): gerar hipóteses para melhorar retrieval",
            "Multi-query retriever: reformular perguntas em perspectivas diferentes automaticamente",
            "Contextual compression: extrair apenas o trecho relevante do chunk recuperado",
            "Parent document retriever: indexar chunks pequenos mas retornar documentos maiores",
            "FLARE (Forward-Looking Active REtrieval): recuperação iterativa durante a geração",
            "Agentic RAG: agente que decide quando e o que recuperar em loop",
            "Comparativo de técnicas: quando cada abordagem avançada vale a complexidade",
          ],
        },
        {
          title: "GraphRAG e Conhecimento Estruturado",
          topics: [
            "Limitações do RAG vetorial para perguntas relacionais e multi-hop",
            "GraphRAG da Microsoft: construindo grafos de conhecimento a partir de documentos",
            "Neo4j e LangChain: modelando entidades, relações e propriedades em grafos",
            "Cypher query generation: deixar o LLM escrever queries de grafo automaticamente",
            "Hybrid GraphRAG: combinando busca vetorial e traversal de grafo",
            "Casos de uso ideais para GraphRAG: análise de contratos, compliance e pesquisa científica",
          ],
        },
        {
          title: "Bancos Vetoriais em Escala: Pinecone, Weaviate e pgvector",
          topics: [
            "Arquitetura de bancos vetoriais: HNSW, IVF e quantização de produto",
            "Pinecone Serverless: indexando e consultando milhões de vetores sem gerenciar infraestrutura",
            "Weaviate: schema, módulos de embedding nativos e filtragem híbrida",
            "pgvector no PostgreSQL: embeddings em banco relacional com suporte a metadados ricos",
            "Estratégias de namespace e filtragem por metadados para multi-tenancy",
            "Custo, latência e throughput: benchmarkando e escolhendo o banco certo para cada caso",
            "Atualização incremental de índices sem reconstruir do zero (upsert e delete)",
          ],
        },
        {
          title: "Agentes RAG com LangGraph e Ferramentas de Busca",
          topics: [
            "Construindo agente RAG com LangGraph: state machine, nós e arestas condicionais",
            "Ferramenta de retrieval como tool do agente: decisão de quando buscar",
            "Agente com múltiplas fontes: alternando entre vetor, SQL e APIs externas",
            "Reflexão e auto-crítica: agente que avalia própria resposta e rebusca se necessário",
            "Agente com acesso à web (Tavily Search) para complementar base de conhecimento",
            "Human-in-the-loop com LangGraph: pontos de interrupção para aprovação humana",
            "Persistência de estado entre sessões com LangGraph checkpointers",
          ],
        },
        {
          title: "Segurança, Privacidade e Governança em RAG Corporativo",
          topics: [
            "Controle de acesso por documento: garantir que usuários vejam apenas o que têm permissão",
            "PII detection e redação automática antes de indexar documentos sensíveis",
            "Prevenção de prompt injection em sistemas RAG expostos a usuários finais",
            "Auditoria e logging de consultas para rastreabilidade e compliance",
            "On-premise vs cloud: estratégias para dados ultra-sensíveis com modelos open-source (Ollama + Llama 3)",
            "LGPD e GDPR em sistemas de IA: direito ao esquecimento e exclusão de vetores",
          ],
        },
        {
          title: "Deploy, Observabilidade e Projeto Final em Produção",
          topics: [
            "Containerizando o pipeline RAG com Docker e servindo com FastAPI",
            "Deploy na nuvem: Railway, Fly.io ou AWS ECS com auto-scaling",
            "Monitoramento em produção: LangSmith, Langfuse e métricas de qualidade contínua",
            "Atualização e reindexação automática de documentos com pipeline de ingestão agendado",
            "Projeto final: sistema RAG corporativo end-to-end com autenticação, multi-tenancy e dashboard de avaliação",
            "Code review, documentação técnica e apresentação da arquitetura para a turma",
            "Roadmap pós-curso: pesquisas e tendências em RAG para 2025-2026",
          ],
        },
      ],
      tools: [
        "Python",
        "LangChain 0.3",
        "LangGraph",
        "LangSmith",
        "Langfuse",
        "OpenAI API",
        "Ollama + Llama 3",
        "Pinecone",
        "Weaviate",
        "pgvector",
        "Neo4j",
        "Cohere Rerank",
        "Tavily Search",
        "FastAPI",
        "Docker",
        "RAGAS",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já programar ou trabalhar com dados pra fazer esse curso?",
      a: "O curso começa no nível Intermediário e assume que você já lida com dados, programação ou é curioso o suficiente pra configurar um ambiente Python. Ele foi pensado pra quem é engenheiro, analista, cientista de dados ou já usou ChatGPT e sentiu que faltava plugar seus próprios documentos com precisão.",
    },
    {
      q: "Qual a diferença entre o nível Intermediário e o Profissional + IA?",
      a: "No Intermediário você constrói pipelines RAG completos do zero — chunking, embeddings, retrieval e geração — e entrega um chatbot funcional sobre documentos reais. No Profissional + IA você avança pra técnicas de ponta como GraphRAG, agentes com LangGraph, bancos vetoriais em escala e segurança/governança, fechando com um sistema RAG corporativo em produção.",
    },
    {
      q: "O curso ensina a usar IA sem vazar documentos confidenciais da empresa pra fora?",
      a: "Sim, essa é uma das preocupações centrais do curso. Você aprende a construir chatbots corporativos sem depender de APIs externas, incluindo estratégias on-premise com modelos open-source como Ollama e Llama 3, além de controle de acesso por documento e conformidade com LGPD.",
    },
  ],
}

function RagPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
