import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/excel-ia")({
  component: ExcelIaPage,
  head: () =>
    pageMeta({
      title: "Curso de Excel + IA para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a usar Copilot, Claude, ChatGPT e Python no Excel e no Google Sheets — faça em minutos o que levava horas. Aulas individuais e presenciais em Ribeirão Preto.",
      path: "/adultos/cursos/excel-ia",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Excel + IA",
  categoria: "Office + IA",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Usar a IA como copiloto no dia a dia: gerar fórmulas, limpar dados e montar planilhas pedindo em português — sem travar.",
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
          title: "Da planilha à apresentação: resumos e gráficos com IA",
          topics: [
            "Pedindo à IA um resumo dos principais números de uma base",
            "Gerando gráficos e tabelas dinâmicas descrevendo o que você quer ver",
            "Identificando tendências e destaques automaticamente",
            "Formatação condicional criada pela IA para destacar o que importa",
            "Transformando uma análise em texto pronto para e-mail ou relatório",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Copilot no Excel",
        "Google Sheets",
        "Gemini",
        "ChatGPT",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Fazer análise de dados de verdade com IA: Python por linguagem natural, IA em escala e auditoria de planilhas com Claude e ChatGPT.",
      modules: [
        {
          title: "Copilot avançado: do chat ao Agent Mode",
          topics: [
            "Edit Mode: deixando o Copilot alterar a planilha por você, passo a passo",
            "Plan Mode: revisando o plano da IA antes de executar",
            "Agent Mode: delegando tarefas de várias etapas de uma vez",
            "Entendendo e auditando as mudanças que o Copilot fez",
            "Prompts avançados para tarefas complexas de planilha",
          ],
        },
        {
          title: "Python no Excel sem saber programar",
          topics: [
            "O que é o Python no Excel e por que ele mudou o jogo",
            "Pedindo análises em Python ao Copilot, em português",
            "Transformando e cruzando grandes bases com pandas (via IA)",
            "Gerando gráficos avançados (matplotlib) descrevendo o resultado esperado",
            "Lendo e ajustando o código que a IA gerou quando precisar",
          ],
        },
        {
          title: "IA em escala: classificar e extrair milhares de linhas",
          topics: [
            "A função =AI() na prática: aplicando IA célula a célula",
            "Numerous.ai e GPT for Work: IA arrastável por milhares de linhas",
            "Classificação automática: sentimento, categorias e prioridade",
            "Extração de dados de textos livres (e-mails, respostas, descrições)",
            "Controle de custo e de limites ao rodar IA em lote",
          ],
        },
        {
          title: "Claude e ChatGPT dentro da planilha",
          topics: [
            "Claude for Excel: lendo planilhas multi-aba com citação célula a célula",
            "Auditoria de modelos: encontrando erros e premissas escondidas",
            "ChatGPT for Excel: criando e limpando planilhas pela barra lateral",
            "Quando usar cada assistente — forças e limitações de cada um",
            "Preservando fórmulas e dependências ao deixar a IA editar",
          ],
        },
        {
          title: "Google Sheets + Gemini para quem vive na nuvem",
          topics: [
            "Gemini no Sheets: construindo planilhas inteiras a partir de uma conversa",
            "A função =AI() no Google Sheets para texto e categorização",
            "Dashboards e insights automáticos no Sheets",
            "Colaboração em tempo real com IA em equipe",
            "Migrando análises entre Excel e Google Sheets",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Copilot (Agent Mode)",
        "Python no Excel",
        "Claude for Excel",
        "ChatGPT for Excel",
        "Google Sheets",
        "Gemini",
        "Numerous.ai",
        "GPT for Work",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Desenhar e entregar fluxos de dados automatizados com IA: agentes, integração entre apps, automação de relatórios e um projeto final real.",
      modules: [
        {
          title: "Fluxos agênticos: a IA trabalhando sozinha",
          topics: [
            "Delegando tarefas completas de planilha para agentes de IA",
            "Encadeando etapas: coletar → limpar → analisar → apresentar",
            "Reutilizando fluxos com Skills e prompts salvos",
            "Supervisão humana: pontos de checagem e aprovação",
            "Limites do modo agente e como evitar resultados errados",
          ],
        },
        {
          title: "Da análise ao slide: Excel + PowerPoint com IA",
          topics: [
            "Contexto compartilhado entre Excel e PowerPoint (Claude)",
            "Gerando apresentações executivas a partir da sua análise",
            "Relatórios em Word com dados da planilha via IA",
            "Mantendo identidade visual e narrativa nos materiais gerados",
            "Revisão final: o que a IA acerta e o que você precisa ajustar",
          ],
        },
        {
          title: "Conectando dados externos e APIs",
          topics: [
            "Trazendo dados de sistemas externos para a planilha",
            "Conectores MCP: integrando a IA com suas fontes de dados",
            "Consultando APIs e JSON com ajuda da IA (via Power Query)",
            "Atualização automática de bases conectadas",
            "Segurança e privacidade ao conectar dados sensíveis",
          ],
        },
        {
          title: "Automação de relatórios recorrentes",
          topics: [
            "Power Automate + IA: disparando planilhas e relatórios sozinhos",
            "Rotinas mensais: da coleta ao envio automático por e-mail",
            "Alertas inteligentes baseados em regras e IA",
            "Documentando e versionando seus fluxos de automação",
            "Governança: quem pode rodar, revisar e aprovar",
          ],
        },
        {
          title: "Projeto final: um fluxo de dados com IA de ponta a ponta",
          topics: [
            "Escolha do caso real: relatório de vendas, financeiro ou operacional",
            "Desenho do fluxo: fontes, transformação, análise e entrega",
            "Construção com Copilot, Python e agentes",
            "Automação da atualização e da distribuição",
            "Apresentação do resultado e checklist de qualidade da IA",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Copilot (Agent Mode)",
        "Python no Excel",
        "Claude for Excel",
        "ChatGPT for Excel",
        "Power Automate",
        "Power Query",
        "MCP Connectors",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber Excel avançado ou programar em Python pra fazer esse curso?",
      a: "Não. O curso não exige nem Excel avançado nem programação. A ideia é justamente deixar a IA (Copilot, Claude, ChatGPT) escrever fórmulas, gerar código Python e montar dashboards a partir de pedidos em português — você aprende a conduzir a IA, não a decorar sintaxe.",
    },
    {
      q: "Qual a diferença entre os três níveis?",
      a: "Essencial ensina a usar a IA como copiloto no dia a dia — gerar fórmulas, limpar dados e montar planilhas em português. Intermediário entra em Python no Excel sem programar, IA em escala (classificar milhares de linhas) e os assistentes Claude e ChatGPT dentro da planilha. Profissional + IA fecha com fluxos agênticos, integração com APIs externas e automação de relatórios recorrentes, terminando num projeto de dados real de ponta a ponta.",
    },
    {
      q: "Esse curso também serve pra quem usa Google Sheets, não só Excel?",
      a: "Sim. Tem um módulo dedicado a Google Sheets com Gemini e a função =AI(), incluindo como migrar análises entre Excel e Sheets — então se você vive mais na nuvem do que no Excel, o conteúdo se aplica igual.",
    },
  ],
}

function ExcelIaPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
