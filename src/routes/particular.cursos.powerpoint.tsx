import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/powerpoint")({
  component: PowerpointPage,
  head: () =>
    pageMeta({
      title:
        "Curso de PowerPoint Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda PowerPoint do básico ao avançado: storytelling visual, animações Morph, IA com Copilot e design profissional. Aulas individuais e flexíveis em Ribeirão Preto.",
      path: "/particular/cursos/powerpoint",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "PowerPoint e Storytelling Visual",
  categoria: "Office Específico",
  tema: "office" as const,
  logo: "ppt",
  variante: "powerpoint",
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
      levelName: "PowerPoint",
      totalHours: "48h",
      outcome:
        "Dominar o PowerPoint do design básico ao storytelling avançado — Slide Mestre, animações profissionais, Morph, Designer e Copilot — para criar apresentações e pitches de vendas que convencem qualquer audiência, da equipe ao board executivo",
      modules: [
        {
          title: "Fundamentos de design para apresentações",
          topics: [
            "Os 4 princípios de design: contraste, alinhamento, repetição e proximidade",
            "Teoria das cores aplicada a slides: paletas harmônicas e psicologia da cor",
            "Tipografia profissional: escolhendo e combinando fontes",
            "Regra dos três e a arte do slide minimalista: o que cortar para ganhar clareza",
            "Ícones, pictogramas e imagens de alto impacto: onde encontrar sem violar licenças",
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
          title: "Storytelling e dados que sustentam o argumento",
          topics: [
            "A estrutura do Monomito e a jornada do herói aplicada a apresentações",
            "O método SCR (Situação, Complicação e Resolução) e a Pirâmide de Minto para comunicação executiva top-down",
            "Como criar um roteiro antes de abrir o PowerPoint — e slides de abertura e fechamento que ficam na memória",
            "Escolhendo o gráfico certo para cada tipo de dado e simplificando tabelas para leitura executiva",
            "Mockups, dispositivos e composição de imagem com texto para apresentar produtos e ideias",
          ],
        },
        {
          title: "Animações e Morph que convencem (não distraem)",
          topics: [
            "Diferença entre animações de entrada, ênfase, saída e trajetória, e o painel de animação para controlar timing e ordem",
            "Animações em lote para listas e dados sequenciais, e efeitos de revelação progressiva para construir argumentos aos poucos",
            "Erros clássicos de animação e como evitá-los",
            "Morph: criando animações cinematográficas sem código, com a técnica do duplicar slide",
            "Zoom de Seção e Zoom de Resumo para navegação não-linear e apresentações interativas com links internos",
          ],
        },
        {
          title: "Designer, Copilot e apresentações que vendem",
          topics: [
            "Designer: sugestões automáticas de layout com IA integrada",
            "PowerPoint Copilot: gerando e revisando apresentações completas por prompt, com geração de imagens direto no slide",
            "Estrutura de pitch de vendas: problema, solução, prova social e CTA",
            "Deck de proposta comercial e apresentações para board e comitê executivo: uma mensagem por slide, gráfico com insight anotado, sem enfeite supérfluo",
            "One-pager e handout: quando uma versão enxuta ou de leitura autônoma substitui o deck completo",
          ],
        },
        {
          title: "Apresentação ao vivo, exportação e projeto final",
          topics: [
            "Transcrição ao vivo, legendas automáticas e coach de apresentação: feedback de ritmo, clareza e vícios de linguagem",
            "Exportando a apresentação como vídeo MP4 narrado, com narração e anotações de tela slide a slide",
            "Compartilhando via Microsoft Teams com anotações, e PDF interativo com links e marcadores",
            "Polls e quizzes ao vivo com Mentimeter integrado para manter a audiência engajada",
            "Projeto final: deck de até 15 slides com roteiro e mapa de mensagens, template de Slide Mestre e Morph, apresentado ao vivo com feedback do professor",
          ],
        },
      ],
      tools: [
        "Microsoft PowerPoint 365",
        "Microsoft Copilot",
        "Unsplash",
        "Flaticon",
        "Mentimeter",
        "Microsoft Teams",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já sei o básico de PowerPoint — esse curso ainda serve pra mim?",
      a: "Serve, e é pra isso que ele existe. O curso não é sobre botões e menus — é sobre design, narrativa e storytelling: por que um slide convence e outro não, mesmo os dois usando o mesmo PowerPoint.",
    },
    {
      q: "Trabalho com vendas ou consultoria e apresento com frequência — esse curso é pra mim?",
      a: "Sim, é um dos públicos centrais do curso. Tem módulo específico sobre estrutura de pitch de vendas, deck de proposta comercial e apresentações estilo board executivo.",
    },
  ],
}

function PowerpointPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
