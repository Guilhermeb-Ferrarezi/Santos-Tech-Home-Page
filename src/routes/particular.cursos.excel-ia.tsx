import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/excel-ia")({
  component: ExcelIaPage,
  head: () =>
    pageMeta({
      title: "Curso de Excel + IA Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a usar Copilot, Claude, ChatGPT e Python no Excel e no Google Sheets — faça em minutos o que levava horas. Aulas individuais e presenciais em Ribeirão Preto.",
      path: "/particular/cursos/excel-ia",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Excel + IA",
  categoria: "Office + IA",
  tema: "office" as const,
  logo: "excel",
  variante: "excel-ia",
  tagline:
    "Faça em minutos o que levava horas — planilhas turbinadas com Copilot, Claude, ChatGPT e Python por linguagem natural",
  targetAudience: [
    "Você usa Excel ou Google Sheets no trabalho e quer fazer em minutos o que hoje leva horas — com a IA como copiloto",
    "Você quer usar Copilot, Claude e ChatGPT dentro da própria planilha, não só o Excel puro",
    "Você precisa analisar grandes volumes de dados sem saber programar, deixando a IA escrever o Python por você",
    "Você quer automatizar relatórios, limpeza de dados e dashboards pedindo em português",
    "Você trabalha com Google Sheets e quer dominar a função =AI() e o Gemini também",
    "Você quer se destacar dominando a competência mais requisitada de 2026: unir Excel e Inteligência Artificial",
  ],
  tiers: [
    {
      levelName: "Excel + IA",
      totalHours: "48h",
      outcome:
        "Sair do zero e dominar a IA dentro do Excel e do Google Sheets — gerar fórmulas, limpar dados, analisar grandes bases com Python, delegar tarefas ao Agent Mode e usar Claude e ChatGPT dentro da planilha — até entregar um painel ou relatório automatizado real.",
      modules: [
        {
          title: "A IA dentro da planilha: primeiros passos",
          topics: [
            "Panorama das IAs de planilha: Copilot, Claude, ChatGPT e Gemini — qual usar e quando",
            "Instalando e ativando os assistentes no Excel e no Google Sheets",
            "Como conversar com a IA: escrevendo bons pedidos (prompts) para planilhas",
            "Modos do Copilot no Excel: chat, plan e edit — o que cada um faz",
            "Boa prática essencial: revisar o que a IA fez antes de confiar no resultado",
          ],
        },
        {
          title: "Fórmulas sem decorar: a IA escreve por você",
          topics: [
            "Gerando fórmulas em português: PROCX, SOMASES, SE aninhado e mais",
            "Explicando fórmulas prontas que você recebeu de outra pessoa",
            "Corrigindo erros de fórmula (#N/D, #VALOR!, #REF!) com ajuda da IA",
            "Traduzindo regras de negócio em fórmulas com linguagem natural",
            "Convertendo fórmulas entre Excel e Google Sheets",
          ],
        },
        {
          title: "Organizando e limpando dados com IA",
          topics: [
            "Padronizando textos, datas e números bagunçados automaticamente",
            "Separando e juntando colunas com um pedido em português",
            "Removendo duplicatas, espaços e erros de digitação em lote",
            "Categorizando e classificando dados com a função =AI() (IA nas células)",
            "Preenchimento inteligente (Smart Fill) guiado por exemplos",
          ],
        },
        {
          title: "Copilot Agent Mode e Python no Excel: a IA no trabalho pesado",
          topics: [
            "Do chat ao Agent Mode: Edit Mode, Plan Mode e Agent Mode — o Copilot planejando e executando tarefas de várias etapas",
            "Revisando e auditando o que a IA mudou na planilha antes de confiar no resultado",
            "O que é o Python no Excel e por que ele mudou o jogo",
            "Pedindo análises em Python ao Copilot, em português, para transformar e cruzar grandes bases",
            "Gerando gráficos avançados descrevendo o resultado esperado, e lendo o código quando precisar ajustar algo",
          ],
        },
        {
          title: "IA em escala, Claude e ChatGPT dentro da planilha",
          topics: [
            "A função =AI() e ferramentas como Numerous.ai e GPT for Work: aplicando IA em milhares de linhas de uma vez",
            "Classificando, extraindo e organizando dados de textos livres (e-mails, respostas, descrições) automaticamente",
            "Controle de custo e de limites ao rodar IA em lote",
            "Claude for Excel: lendo planilhas multi-aba com citação célula a célula e auditando erros e premissas escondidas",
            "ChatGPT for Excel: criando e limpando planilhas pela barra lateral",
            "Quando usar cada assistente — forças e limites do Copilot, Claude e ChatGPT, preservando fórmulas ao deixar a IA editar",
          ],
        },
        {
          title: "Do dado ao resultado: resumos, gráficos, Google Sheets e projeto final",
          topics: [
            "Pedindo à IA um resumo dos principais números de uma base e identificando tendências automaticamente",
            "Gerando gráficos, tabelas dinâmicas e formatação condicional descrevendo o que você quer ver",
            "Transformando uma análise em texto, e-mail, relatório ou apresentação pronta, com um pedido em português",
            "Gemini no Google Sheets: construindo planilhas, dashboards e insights inteiros a partir de uma conversa",
            "A função =AI() no Google Sheets e a migração de análises entre Excel e Sheets",
            "Projeto final: um painel ou relatório automatizado com IA, do dado bruto à apresentação",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Copilot no Excel",
        "Python no Excel",
        "Claude for Excel",
        "ChatGPT for Excel",
        "Google Sheets",
        "Gemini",
        "Numerous.ai",
        "GPT for Work",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber Excel avançado ou programar em Python pra fazer esse curso?",
      a: "Não. O curso não exige nem Excel avançado nem programação. A ideia é justamente deixar a IA (Copilot, Claude, ChatGPT) escrever fórmulas, gerar código Python e montar dashboards a partir de pedidos em português — você aprende a conduzir a IA, não a decorar sintaxe.",
    },
    {
      q: "Esse curso também serve pra quem usa Google Sheets, não só Excel?",
      a: "Sim. O curso cobre Google Sheets com Gemini e a função =AI(), incluindo como migrar análises entre Excel e Sheets — então se você vive mais na nuvem do que no Excel, o conteúdo se aplica igual.",
    },
  ],
}

function ExcelIaPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
