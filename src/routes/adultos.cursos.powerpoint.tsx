import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/powerpoint")({
  component: PowerpointPage,
  head: () =>
    pageMeta({
      title:
        "Curso de PowerPoint para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda PowerPoint do básico ao avançado: storytelling visual, animações Morph, IA com Copilot e design profissional. Aulas individuais e flexíveis em Ribeirão Preto.",
      path: "/adultos/cursos/powerpoint",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "PowerPoint e Storytelling Visual",
  categoria: "Office Específico",
  tagline:
    "Apresentações que convencem: do slide básico ao storytelling que fecha negócios",
  targetAudience: [
    "Você precisa apresentar projetos, resultados e propostas para gestores ou clientes e quer causar impacto real",
    "Você gasta horas montando slides e o resultado ainda parece amador",
    "Você quer aprender os princípios de design e narrativa que os melhores apresentadores do mundo usam",
    "Você trabalha em vendas, consultoria, marketing ou gestão e apresenta com frequência",
    "Você quer dominar recursos avançados como animações profissionais, Morph e Designer",
    "Você precisa criar apresentações reutilizáveis e templates padronizados para a sua empresa",
  ],
  tiers: [
    {
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Criar apresentações visualmente consistentes com hierarquia clara, boa tipografia e narrativa estruturada",
      modules: [
        {
          title: "Fundamentos de design para apresentações",
          topics: [
            "Os 4 princípios de design: contraste, alinhamento, repetição e proximidade",
            "Teoria das cores aplicada a slides: paletas harmônicas e psicologia da cor",
            "Tipografia profissional: escolhendo e combinando fontes",
            "Regra dos três: como simplificar qualquer slide",
            "O que remover: a arte do slide minimalista e eficiente",
          ],
        },
        {
          title: "PowerPoint do zero ao profissional",
          topics: [
            "Slide Mestre: como funciona e por que é a base de tudo",
            "Criando layouts personalizados para diferentes tipos de slide",
            "Trabalhando com guias inteligentes e grades para alinhamento perfeito",
            "Paleta de cores personalizada e fontes do tema",
            "Salvando e distribuindo um template (.potx) pronto para uso",
          ],
        },
        {
          title: "Storytelling: a narrativa por trás dos slides",
          topics: [
            "A estrutura do Monomito e a jornada do herói aplicada a apresentações",
            "O método SCR: Situação, Complicação e Resolução",
            "Pirâmide de Minto: comunicação top-down para executivos",
            "Como criar um roteiro antes de abrir o PowerPoint",
            "Slides de abertura e fechamento que ficam na memória",
          ],
        },
        {
          title: "Elementos visuais e dados em slides",
          topics: [
            "Escolhendo o gráfico certo para cada tipo de dado",
            "Simplificando tabelas de dados para slides executivos",
            "Ícones e pictogramas: onde encontrar e como usar sem violar licenças",
            "Imagens de alto impacto: stock gratuito e composição com texto",
            "Mockups e dispositivos para apresentar produtos digitais",
          ],
        },
      ],
      tools: ["Microsoft PowerPoint 365", "Unsplash", "Flaticon"],
    },
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Dominar animações profissionais, transição Morph, slides interativos e apresentações de alto impacto para diferentes contextos",
      modules: [
        {
          title: "Animações que convencem (não distraem)",
          topics: [
            "Diferença entre animações de entrada, ênfase, saída e trajetória",
            "Painel de animação: controlando timing e ordem de forma precisa",
            "Animações em lote para listas e dados sequenciais",
            "Efeitos de revelação progressiva para construir argumentos",
            "Erros clássicos de animação e como evitá-los",
          ],
        },
        {
          title: "Transição Morph e Zoom de Seção",
          topics: [
            "Morph: criando animações cinematográficas sem código",
            "Técnica do duplicar slide para movimento fluido de objetos",
            "Zoom de Seção e Zoom de Resumo para navegação não-linear",
            "Criando apresentações interativas com links internos",
            "Efeito de câmera e parallax com Morph",
          ],
        },
        {
          title: "Designer e recursos de IA no PowerPoint",
          topics: [
            "Designer: sugestões automáticas de layout com IA integrada",
            "PowerPoint Copilot: gerando apresentações completas por prompt",
            "Geração e edição de imagens com IA diretamente no slide",
            "Transcrição ao vivo e legendas automáticas durante apresentação",
            "Coach de apresentação: feedback de ritmo, clareza e vícios de linguagem",
          ],
        },
        {
          title: "Pitch, vendas e apresentações executivas",
          topics: [
            "Estrutura de pitch de vendas: problema, solução, prova social, CTA",
            "Deck de proposta comercial: o que incluir e o que cortar",
            "Apresentações para board e comitê executivo: estilo McKinsey",
            "One-pager: quando uma única página substitui 20 slides",
            "Handout e versão para leitura autônoma do mesmo deck",
          ],
        },
        {
          title: "Apresentações interativas e vídeo",
          topics: [
            "Exportando apresentação como vídeo MP4 narrado",
            "Gravando narração e anotações de tela slide a slide",
            "Polls e quizzes ao vivo com Mentimeter integrado",
            "Compartilhando apresentações via Microsoft Teams com anotações",
            "PDF interativo com links e marcadores",
          ],
        },
      ],
      tools: [
        "Microsoft PowerPoint 365",
        "Microsoft Copilot",
        "Mentimeter",
        "Canva",
        "Microsoft Teams",
      ],
    },
    {
      label: "3 meses",
      levelName: "Profissional + IA",
      totalHours: "60h",
      outcome:
        "Criar apresentações de nível consultoria com Figma, IA generativa e storytelling avançado, e entregar um deck de projeto completo como portfólio",
      modules: [
        {
          title: "Nível consultoria: o método das Big 4",
          topics: [
            "Princípios de comunicação visual da McKinsey, Bain e BCG",
            "Slide de uma mensagem: uma ideia por slide sem exceção",
            "Gráficos com anotação de insight (não apenas o dado bruto)",
            "Grids de 12 colunas para alinhamento milimétrico",
            "Revisão editorial: como um consultor corta conteúdo supérfluo",
          ],
        },
        {
          title: "Figma e ferramentas de design para slides",
          topics: [
            "Fundamentos do Figma para quem vem do PowerPoint",
            "Criando componentes reutilizáveis e biblioteca de design",
            "Exportando slides do Figma para PowerPoint sem perda de qualidade",
            "Prototipagem de apresentações interativas no Figma",
            "Canva Pro: quando usar no lugar do PowerPoint e quando não usar",
          ],
        },
        {
          title: "IA generativa aplicada a apresentações",
          topics: [
            "Gamma.app: criando decks completos por texto com IA",
            "Beautiful.ai e Tome: alternativas IA-first ao PowerPoint",
            "Midjourney e DALL-E para criar imagens exclusivas para slides",
            "ChatGPT como roteirista: gerando estrutura de narrativa por prompt",
            "Revisando e melhorando conteúdo de slides com Claude e ChatGPT",
          ],
        },
        {
          title: "Projeto final: deck de alto impacto",
          topics: [
            "Escolha do contexto: proposta comercial, relatório de resultados ou pitch de projeto",
            "Desenvolvimento do roteiro com mapa de mensagens por slide",
            "Aplicação do template corporativo com Slide Mestre completo",
            "Animações Morph e interatividade estratégica",
            "Apresentação ao vivo com feedback da turma e versão final entregável",
          ],
        },
      ],
      tools: [
        "Microsoft PowerPoint 365",
        "Microsoft Copilot",
        "Figma",
        "Canva Pro",
        "Gamma.app",
        "ChatGPT",
        "Midjourney",
      ],
    },
  ],
}

function PowerpointPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
