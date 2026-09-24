import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/rag")({
  component: RagPage,
  head: () =>
    pageMeta({
      title:
        "Curso de RAG — IA com seus Próprios Dados Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a construir sistemas de RAG (Retrieval-Augmented Generation) com embeddings, bancos vetoriais e LLMs para criar chatbots e assistentes com seus documentos.",
      path: "/particular/cursos/rag",
    }),
})

const COURSE_DATA = {
  nome: "RAG — IA com seus Próprios Dados",
  categoria: "Inteligência Artificial",
  tema: "ia" as const,
  logo: "ia",
  variante: "rag",
  tagline:
    "Ensine a IA a responder com seus documentos, dados e contexto privado",
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
      levelName: "RAG",
      ctaLabel: "curso de RAG",
      totalHours: "48h",
      outcome:
        "Construir pipelines RAG completos do zero — chunking, embedding, indexação, retrieval e geração — entregando um chatbot funcional sobre documentos reais, com avaliação via RAGAS e uma introdução prática a técnicas de ponta como GraphRAG e HyDE, pronto para estruturar sistemas de IA que respondem com o conhecimento proprietário da sua empresa",
      modules: [
        {
          title: "Fundamentos de RAG e Arquitetura do Pipeline",
          topics: [
            "O que é Retrieval-Augmented Generation e por que supera o fine-tuning para dados privados",
            "Componentes do pipeline RAG: ingestão, chunking, embedding, indexação, recuperação e geração",
            "Limitações do contexto de LLMs e por que RAG resolve o problema de documentos longos",
            "Panorama de abordagens: RAG naive, RAG avançado e GraphRAG — o mapa do que vem a seguir no curso",
          ],
        },
        {
          title: "Chunking, Embedding e Indexação de Documentos",
          topics: [
            "Estratégias de chunking: fixed-size, recursive, semantic e parent-document chunker",
            "Trade-offs de tamanho de chunk: granularidade vs contexto (chunk_size e chunk_overlap)",
            "Modelos de embedding: text-embedding-3-small, text-embedding-3-large e alternativas open-source, e por que cosine similarity funciona",
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
          ],
        },
        {
          title: "Avaliação de Sistemas RAG com RAGAS",
          topics: [
            "Avaliação RAG com RAGAS: faithfulness, answer relevancy e context recall",
            "Construindo golden dataset de perguntas e respostas esperadas para benchmarking",
            "Debugging de alucinações: quando o LLM ignora o contexto recuperado e como iterar sobre isso",
            "LangSmith: rastreando e inspecionando cada etapa do pipeline",
          ],
        },
        {
          title: "Técnicas de Ponta: GraphRAG, HyDE e o Panorama Avançado",
          topics: [
            "HyDE (Hypothetical Document Embeddings): gerando hipóteses de resposta para melhorar retrieval em perguntas complexas",
            "GraphRAG: por que o RAG vetorial falha em perguntas relacionais e multi-hop, e como um grafo de conhecimento resolve isso",
            "Construindo um grafo de conhecimento simples no Neo4j a partir de documentos e consultando em linguagem natural",
            "Panorama avançado: agentes RAG (LangGraph), bancos vetoriais em escala (Pinecone, Weaviate, pgvector) e segurança/governança — controle de acesso, LGPD e alternativas on-premise (Ollama + Llama 3) — o mapa de onde ir depois do curso",
          ],
        },
        {
          title: "Projeto Final: Chatbot RAG sobre Documentos da Empresa",
          topics: [
            "Definindo escopo: base de conhecimento, casos de uso e critérios de aceitação",
            "Ingestão de documentos reais: PDFs, manuais, políticas internas e FAQs",
            "Construindo interface com Streamlit ou Gradio para demonstração",
            "Testando com perguntas reais e iterando sobre chunking, retrieval e prompts",
            "Preparando demonstração do protótipo para stakeholders",
          ],
        },
      ],
      tools: [
        "Python",
        "LangChain 0.3",
        "OpenAI API",
        "Chroma DB",
        "Cohere Rerank",
        "Neo4j",
        "RAGAS",
        "LangSmith",
        "Streamlit",
        "Gradio",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já programar ou trabalhar com dados pra fazer esse curso?",
      a: "O curso assume que você já lida com dados, programação ou é curioso o suficiente pra configurar um ambiente Python — não foi desenhado pra quem nunca escreveu uma linha de código. Ele é pensado pra quem é engenheiro, analista, cientista de dados ou já usou ChatGPT e sentiu que faltava plugar seus próprios documentos com precisão.",
    },
    {
      q: "O curso ensina a usar IA sem vazar documentos confidenciais da empresa pra fora?",
      a: "Sim, é uma das preocupações centrais do curso. Desde o desenho do pipeline você aprende boas práticas de privacidade, e o curso fecha com um panorama de como manter dados sensíveis dentro de casa — controle de acesso por documento, conformidade com LGPD e alternativas on-premise com modelos open-source como Ollama e Llama 3 — pra você saber o caminho quando o projeto de verdade exigir.",
    },
  ],
}

function RagPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
