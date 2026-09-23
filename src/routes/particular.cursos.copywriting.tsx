import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/copywriting")({
  component: CopywritingPage,
  head: () =>
    pageMeta({
      title: "Curso de Copywriting & Persuasão Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a escrever textos que convencem, vendem e geram cliques em Ribeirão Preto. Do AIDA ao funil completo com IA generativa.",
      path: "/particular/cursos/copywriting",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Copywriting & Persuasão",
  categoria: "Marketing & Negócios",
  tagline: "Escreva textos que convencem, vendem e fazem o leitor tomar ação imediata",
  targetAudience: [
    "Você tem um negócio ou serviço mas não sabe como comunicar o valor do que vende",
    "Você publica nas redes sociais e não consegue engajamento nem cliques nos seus anúncios",
    "Você quer trabalhar como freelancer de copy ou marketing de conteúdo e precisa de um portfólio",
    "Você sente que seu e-mail marketing não converte e não sabe o que está errado",
    "Você cria anúncios no Instagram ou Google mas desperdiça verba sem retorno real",
    "Você quer dominar IA generativa para produzir copy persuasivo em escala sem perder a voz da marca",
  ],
  tiers: [
    {
      label: "Copywriting",
      levelName: "Copywriting",
      totalHours: "48h",
      outcome:
        "Escrever copy persuasivo do zero absoluto — headlines, redes sociais e anúncios — até páginas de vendas, e-mail marketing, scripts de vídeo e funis de lançamento completos, aplicando psicologia da persuasão, testes de otimização e IA generativa como acelerador estratégico, pronto para atuar como copywriter freelancer ou em marketing de conteúdo.",
      modules: [
        {
          title: "Fundamentos do Copywriting e Pesquisa de Avatar",
          topics: [
            "O que é copywriting, a jornada do leitor (AIDA na prática) e como manter a voz da marca — tom e personalidade — consistente em cada canal",
            "Pesquisa de avatar e ICP — dores, desejos e objeções do cliente ideal — aprofundada com mineração de reviews (Amazon, Google, App Store) e entrevistas reais com clientes",
            "Mapa de empatia do avatar e swipe file pessoal: como organizar referências de copy de alta conversão e linguagem real do mercado",
            "Leitura em F-pattern e escaneabilidade: como o leitor lê e como estruturar o texto pra isso",
            "Análise competitiva de copy: o que os concorrentes fazem certo e onde há gap de posicionamento",
          ],
        },
        {
          title: "Frameworks, Headlines e Psicologia da Persuasão",
          topics: [
            "AIDA, PAS, BAB e 4Us: os frameworks clássicos de copy e como escolher o certo pra cada formato e objetivo de campanha",
            "Os 6 tipos de headline (curiosidade, benefício direto, número, como fazer, pergunta, problema) e a especificidade que aumenta a taxa de clique",
            "Aberturas de parágrafo que prendem o leitor nos primeiros segundos, banco de headlines pra testar variações e como corrigir erros comuns",
            "Os 7 princípios de Cialdini (reciprocidade, escassez, autoridade, afinidade, consistência, prova social e unidade) aplicados ao copy",
            "Vieses cognitivos (ancoragem, aversão à perda, efeito IKEA, priming) e gatilhos mentais de urgência e escassez usados de forma autêntica",
            "Neuromarketing básico (emoção vs razão) e os limites éticos da persuasão — transparência e construção de confiança a longo prazo",
          ],
        },
        {
          title: "Copy para Redes Sociais, Anúncios e Proposta de Valor",
          topics: [
            "Copy curto pra Instagram e Facebook Ads, scripts de Stories e Reels (estrutura de 15 segundos) e carrossel persuasivo — capa, desenvolvimento e slide de oferta",
            "Google Search Ads: títulos, descrições e extensões com palavras-chave de alta intenção, respeitando as regras de compliance das plataformas",
            "Benefícios vs características: como traduzir funcionalidades em resultados tangíveis e construir a UVP em uma frase clara e memorável",
            "Social proof e as objeções mais comuns — como neutralizá-las dentro do próprio copy antes de surgirem",
            "CTAs que convertem: verbos de ação, urgência, especificidade e posicionamento estratégico",
          ],
        },
        {
          title: "Páginas de Vendas, E-mail Marketing e Vídeo",
          topics: [
            "Anatomia da landing page de alta conversão: headline, dor, agitação, solução, prova, oferta e copy de botões/micro-CTAs",
            "Como superar objeções de preço e confiança dentro do próprio copy, com garantias e políticas de devolução que aumentam (não reduzem) a conversão",
            "Subject lines que abrem, e-mail de boas-vindas e sequência de nutrição em 7 e-mails — da educação à oferta final",
            "Reengajamento de lista fria e segmentação comportamental: personalizar copy com base em cliques e aberturas de e-mail",
            "VSL (Video Sales Letter) e scripts pra Reels/TikTok: gancho, desenvolvimento e oferta, com roteiro de apresentação de produto",
            "Webinar persuasivo (abertura de autoridade ao fechamento) e legendas/closed captions adaptando o copy falado pra texto sem perder força persuasiva",
          ],
        },
        {
          title: "Copywriting com IA, Funis de Vendas e Lançamentos",
          topics: [
            "ChatGPT, Claude e Jasper AI: prompts estruturados (persona, contexto, formato, tom) pra rascunho de anúncio, e-mail e landing page",
            "Fluxo humano + IA — revisar, humanizar e injetar a voz da marca em textos gerados — e os limites éticos e legais do uso de IA em copy (transparência, plágio, direitos autorais)",
            "Mapeamento de funil completo (anúncio → landing page → página de obrigado → upsell → sequência de e-mail), mantendo consistência de mensagem do primeiro clique à compra",
            "Copy de upsell, order bump e remarketing textual pra leads que já conhecem a marca mas não converteram",
            "Método PLF (Product Launch Formula): pré-lançamento, abertura e fechamento de carrinho com urgência autêntica",
            "Campanhas sazonais (Black Friday) e de reativação de base, com storytelling de lançamento — a narrativa que conecta e vende",
          ],
        },
        {
          title: "Análise, Otimização e Projeto Final",
          topics: [
            "Testes A/B de headlines e CTAs: como configurar, definir hipótese e interpretar resultado",
            "Métricas de copy (CTR, taxa de conversão, tempo na página, bounce rate e receita por visitante) e heatmaps/mapas de scroll no Hotjar",
            "Auditoria de funil — identificar pontos de abandono e reescrever copy pra eliminar fricção",
            "Revisão pós-campanha e relatório de performance de copy pra clientes: extrair aprendizados e apresentar resultados com contexto e recomendações",
            "Projeto final: pesquisa de avatar aplicada, anúncio em 3 variações, landing page completa e sequência de 5 e-mails",
            "Revisão em grupo, feedback estruturado e entrega do portfólio final pronto pra apresentar a clientes reais",
          ],
        },
      ],
      tools: ["ChatGPT", "Claude", "Jasper AI", "Notion", "Hemingway App", "Google Docs", "Hotjar", "Google Analytics"],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber escrever bem pra fazer esse curso?",
      a: "Não. O curso parte do zero — o que é copywriting, a jornada AIDA e a pesquisa de avatar — antes de chegar nos frameworks (AIDA, PAS, BAB, 4Us) e nas headlines. É pensado pra quem tem um negócio e não sabe como comunicar o valor do que vende.",
    },
    {
      q: "Dá pra usar esse curso pra virar freelancer de copywriting?",
      a: "Sim. O projeto final do curso monta uma campanha completa — anúncio, landing page e sequência de e-mails — com revisão em grupo e feedback estruturado, pra sair com portfólio pronto pra apresentar a clientes reais.",
    },
  ],
}

function CopywritingPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
