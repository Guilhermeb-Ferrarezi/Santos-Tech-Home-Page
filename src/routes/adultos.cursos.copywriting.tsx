import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/copywriting")({
  component: CopywritingPage,
  head: () =>
    pageMeta({
      title: "Curso de Copywriting & Persuasão para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a escrever textos que convencem, vendem e geram cliques em Ribeirão Preto. Do AIDA ao funil completo com IA generativa.",
      path: "/adultos/cursos/copywriting",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Escrever headlines, posts de redes sociais, anúncios e propostas de valor que capturam atenção e geram cliques",
      modules: [
        {
          title: "Fundamentos do Copywriting",
          topics: [
            "O que é copywriting e como ele difere de redação publicitária tradicional",
            "A jornada do leitor: atenção → interesse → desejo → ação (AIDA na prática)",
            "Pesquisa de avatar e ICP: identificando dores, desejos e objeções do cliente ideal",
            "Voz da marca: tom, personalidade e consistência em todos os canais",
            "Leitura F-pattern e escaneabilidade: como o leitor lê (e como escrever para isso)",
          ],
        },
        {
          title: "Frameworks Clássicos de Copy",
          topics: [
            "AIDA: Atenção, Interesse, Desejo e Ação — estrutura e exemplos reais",
            "PAS: Problema, Agitação e Solução — quando e como usar para maximizar impacto",
            "BAB: Before, After, Bridge — copy de transformação para produtos e serviços",
            "4Us: Urgente, Único, Útil e Ultra-específico — critérios para headlines e CTAs",
            "Como escolher o framework certo para cada formato e objetivo de campanha",
          ],
        },
        {
          title: "Headlines e Aberturas Irresistíveis",
          topics: [
            "Os 6 tipos de headline: curiosidade, benefício direto, número, como fazer, pergunta e problema",
            "Especificidade e números: por que '7 técnicas' converte mais do que 'várias técnicas'",
            "Aberturas de parágrafos que prendem o leitor nos primeiros 3 segundos de leitura",
            "Como criar e gerenciar um banco de headlines para testar variações rapidamente",
            "Erros comuns em headlines e como reescrever na hora para melhorar a taxa de clique",
          ],
        },
        {
          title: "Copy para Redes Sociais e Anúncios",
          topics: [
            "Copy curto para Instagram e Facebook Ads: gancho, corpo e CTA dentro do limite de caracteres",
            "Scripts de Stories e Reels: estrutura em 15 segundos que retém atenção até o swipe-up",
            "Carrossel persuasivo: slide de capa, desenvolvimento e slide de oferta com CTA",
            "Google Search Ads: títulos, descrições e extensões com palavras-chave de alta intenção",
            "Regras de compliance das plataformas e como escrever copy agressivo sem reprovar anúncio",
          ],
        },
        {
          title: "Proposta de Valor e Diferenciação",
          topics: [
            "Benefícios vs características: como traduzir funcionalidades em resultados tangíveis",
            "Construindo a UVP (Proposta Única de Valor) em uma frase clara e memorável",
            "Social proof: como escrever depoimentos, estudos de caso e números que convencem",
            "Objeções comuns e como neutralizá-las dentro do próprio copy antes de surgir",
            "CTAs que convertem: verbos de ação, urgência, especificidade e posicionamento estratégico",
          ],
        },
      ],
      tools: ["Google Docs", "Notion", "Hemingway App"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Criar páginas de vendas, sequências de e-mail, scripts de vídeo e copy baseado em psicologia da persuasão com alta taxa de conversão",
      modules: [
        {
          title: "Psicologia da Persuasão",
          topics: [
            "Os 7 princípios de Cialdini: reciprocidade, escassez, autoridade, afinidade, consistência, prova social e unidade",
            "Vieses cognitivos aplicados ao copy: ancoragem, aversão à perda, efeito IKEA e priming",
            "Gatilhos mentais de urgência e escassez: como usar de forma autêntica sem soar manipulador",
            "Neuromarketing básico: emoção vs razão e como ativar os dois no mesmo texto",
            "Ética na persuasão: limites, transparência e construção de confiança a longo prazo",
          ],
        },
        {
          title: "Copy para Páginas de Vendas e Landing Pages",
          topics: [
            "Anatomia da landing page de alta conversão: headline, subheadline, hero shot e acima da dobra",
            "Sequência de seções: dor, agitação, solução, prova, oferta, garantia e CTA final",
            "Escrevendo para superar objeções: preço alto, não preciso agora, não confio na marca",
            "Garantias e políticas de devolução escritas de forma a aumentar (não reduzir) conversões",
            "Copy para botões e micro-CTAs: testes reais e impacto na taxa de conversão da página",
          ],
        },
        {
          title: "E-mail Marketing e Sequências de Nutrição",
          topics: [
            "Subject lines que abrem: personalização, curiosidade, benefício direto e emojis estratégicos",
            "E-mail de boas-vindas: apresentação, expectativas e primeiro valor entregue em menos de 300 palavras",
            "Sequência de 7 e-mails: educação, prova social, objeções, urgência e oferta final",
            "E-mail de reengajamento para lista fria: como recuperar leads sem parecer desesperado",
            "Segmentação comportamental: como personalizar copy com base em cliques e abertura de e-mails",
          ],
        },
        {
          title: "Copy para Vídeos e Scripts",
          topics: [
            "Estrutura do VSL (Video Sales Letter): gancho, problema, solução, prova e oferta irresistível",
            "Scripts para Reels e TikTok: gancho nos 2 primeiros segundos, desenvolvimento e CTA no fim",
            "Roteiro de apresentação de produto: demonstração, benefícios em destaque e comparação com alternativas",
            "Webinar persuasivo: abertura de autoridade, conteúdo de valor, pivô para oferta e fechamento",
            "Legendas e closed captions: como adaptar o copy falado para texto sem perder a força persuasiva",
          ],
        },
        {
          title: "Pesquisa de Mercado e Voz do Cliente",
          topics: [
            "Mineração de reviews na Amazon, Google e App Store: extraindo linguagem real do mercado",
            "Conduzindo entrevistas com clientes: perguntas abertas, sondagem e síntese de insights",
            "Construindo o mapa de empatia do avatar com linguagem direta aplicável ao copy",
            "Swipe file pessoal: como organizar referências de copy de alta conversão no Notion",
            "Análise competitiva de copy: o que os concorrentes fazem certo e onde há gap de posicionamento",
          ],
        },
      ],
      tools: ["Google Docs", "Notion", "Hemingway App", "Google Analytics", "Hotjar"],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Produzir funis de copy completos, campanhas de lançamento e otimizações baseadas em dados, usando IA generativa como acelerador estratégico",
      modules: [
        {
          title: "Copywriting com IA Generativa",
          topics: [
            "ChatGPT e Claude para rascunhos rápidos: prompts estruturados para copy de anúncio, e-mail e landing page",
            "Prompts avançados para copy persuasivo: persona, contexto, formato, tom e exemplos de saída esperada",
            "Fluxo humano + IA: como revisar, humanizar e injetar voz da marca em textos gerados por IA",
            "Jasper AI para equipes de marketing: templates, campanhas e colaboração em escala",
            "Limites éticos e legais do uso de IA em copy: transparência, plágio e direitos autorais",
          ],
        },
        {
          title: "Copy para Funis de Vendas Completos",
          topics: [
            "Mapeando o funil: anúncio → landing page → página de obrigado → upsell → sequência de e-mail",
            "Consistência de mensagem entre etapas: como manter o fio narrativo do primeiro clique à compra",
            "Copy de upsell e order bump: como aumentar o ticket médio sem pressionar o cliente",
            "Remarketing textual: adaptar o copy para leads que já conhecem a marca mas não converteram",
            "Auditoria de funil: identificando pontos de abandono e reescrevendo copy para eliminar fricção",
          ],
        },
        {
          title: "Copy para Lançamentos e Campanhas Sazonais",
          topics: [
            "Método PLF (Product Launch Formula): sequência CPL, copy de pré-lançamento e vídeos de valor",
            "Copy de abertura e fechamento de carrinho: urgência autêntica, contagem regressiva e last call",
            "Black Friday e datas sazonais: copy de antecipação, D-Day e pós-venda para retenção",
            "Campanhas de reativação de base: como relançar um produto para quem já comprou ou quase comprou",
            "Storytelling de lançamento: a narrativa de origem, o herói e a transformação que conecta e vende",
          ],
        },
        {
          title: "Análise e Otimização de Copy",
          topics: [
            "Testes A/B de headlines e CTAs: como configurar, definir hipótese e interpretar resultados",
            "Métricas de copy: CTR, taxa de conversão, tempo na página, bounce rate e receita por visitante",
            "Heatmaps e mapas de scroll no Hotjar: onde o leitor para, clica e abandona a página",
            "Revisão pós-campanha: framework de análise para extrair aprendizados e melhorar a próxima rodada",
            "Relatório de performance de copy para clientes: como apresentar resultados com contexto e recomendações",
          ],
        },
        {
          title: "Projeto Final: Campanha Completa com Copy",
          topics: [
            "Pesquisa de avatar: entrevistas, mineração de reviews e construção do ICP com linguagem real",
            "Copy de anúncio em 3 variações: texto curto para feed, médio para stories e script de vídeo 30s",
            "Landing page completa: da headline ao CTA final com todas as seções mapeadas e copy escrito",
            "Sequência de 5 e-mails: boas-vindas, educação, prova social, objeções e oferta com urgência",
            "Revisão em grupo, feedback estruturado e entrega do portfólio final pronto para clientes reais",
          ],
        },
      ],
      tools: ["ChatGPT", "Claude", "Jasper AI", "Notion", "Hemingway App", "Google Docs", "Hotjar", "Google Analytics"],
    },
  ],
}

function CopywritingPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
