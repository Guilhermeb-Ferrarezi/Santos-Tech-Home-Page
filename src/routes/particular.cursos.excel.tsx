import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/excel")({
  component: ExcelPage,
  head: () =>
    pageMeta({
      title: "Curso de Excel Particular em Ribeirão Preto — Santos Tech",
      description:
        "Do básico ao VBA e Power Query: domine Excel Avançado com aulas individuais e presenciais em Ribeirão Preto. Dashboards, macros e Power BI para quem trabalha com dados.",
      path: "/particular/cursos/excel",
    }),
})

const COURSE_DATA = {
  nome: "Excel Avançado",
  categoria: "Office Específico",
  tema: "office" as const,
  logo: "excel",
  tagline: "Do Excel básico ao Power Query e VBA que o mercado exige",
  targetAudience: [
    "Você usa Excel no trabalho mas ainda perde horas fazendo coisas manualmente",
    "Você quer dominar tabelas dinâmicas, Power Query e fórmulas avançadas como PROCV, ÍNDICE e CORRESP",
    "Você precisa automatizar relatórios e dashboards para impressionar gestores e clientes",
    "Você quer aprender VBA para criar macros e sair do ciclo de tarefas repetitivas",
    "Você trabalha com dados financeiros, RH, vendas ou logística e precisa analisar grande volume de informações",
    "Você quer conectar Excel ao Power BI e à inteligência artificial para entregar análises mais ricas",
  ],
  tiers: [
    {
      levelName: "Excel Avançado",
      totalHours: "48h",
      outcome:
        "Dominar Excel do zero absoluto até tabelas dinâmicas, Power Query, fórmulas de matriz e VBA com automação real, incluindo a integração com Power BI e os recursos de IA do Copilot — pronto para analisar dados, automatizar relatórios e entregar um sistema de gestão funcional como projeto final.",
      modules: [
        {
          title: "Fundamentos e Funções Essenciais",
          topics: [
            "Atalhos de teclado, formatação condicional com regras personalizadas e validação de dados com listas suspensas",
            "Funções essenciais (SOMA, MÉDIA, SE, CONT.SE, SOMASE, CONT.SES) e referências absolutas, relativas e mistas",
            "PROCV, PROCH e ÍNDICE + CORRESP: as buscas vertical, horizontal e bidirecional que resolvem a maioria dos casos reais",
            "Funções de texto (CONCATENAR, ESQUERDA, DIREITA, EXT.TEXTO, ARRUMAR) e de data (DATEDIF, DIA.DA.SEMANA, FIMMÊS)",
            "Tratamento de erros com SEERRO e SE, deixando a planilha robusta antes de avançar pra automação",
          ],
        },
        {
          title: "Tabelas Dinâmicas e Dashboards Visuais",
          topics: [
            "Tabelas dinâmicas a partir de bases de dados reais: campos calculados e agrupamentos por data",
            "Segmentação de dados (Slicers), Linha do Tempo e gráficos dinâmicos conectados à tabela",
            "Gráficos avançados (cascata, termômetro, velocímetro) e Sparklines para análise em linha",
            "Boas práticas de layout para dashboards e relatórios profissionais",
            "Protegendo planilhas e células críticas, com impressão e exportação profissional em PDF",
          ],
        },
        {
          title: "Power Query — Importação e Transformação de Dados",
          topics: [
            "Conectando Excel a CSV, TXT, JSON e bancos de dados externos com Power Query",
            "Transformações essenciais: dividir colunas, pivotar, despivotar, mesclar e acrescentar consultas — o PROCV sem fórmula",
            "Limpeza automática de dados sujos (duplicatas, erros, nulos) com atualização automática de um clique",
            "Linguagem M no editor avançado, parâmetros e consultas dinâmicas para automações reutilizáveis",
            "Combinando múltiplas planilhas de uma pasta automaticamente, com transformações condicionais por coluna",
            "Preparando e modelando os dados tratados para consumo direto no Power BI",
          ],
        },
        {
          title: "Fórmulas Avançadas e Matrizes Dinâmicas",
          topics: [
            "PROCX: o substituto moderno do PROCV, mais rápido e sem limitação de direção",
            "Funções de matriz dinâmica: FILTRAR, ORDENAR, ÚNICO e SEQUÊNCIA",
            "SOMARPRODUTO para cálculos matriciais complexos, sem precisar de fórmula em matriz",
            "Funções LAMBDA: criando suas próprias funções reutilizáveis, sem VBA",
            "Fórmulas aninhadas para lógicas de negócio complexas do dia a dia",
          ],
        },
        {
          title: "VBA — Automação Real do Zero ao Avançado",
          topics: [
            "Gravador de macros: criando automações sem digitar uma linha de código",
            "Editor VBA: estrutura de um módulo, variáveis, condicionais (If/Then) e loops (For Each)",
            "Automatizando formatação, cálculos e geração de relatórios com macros",
            "Manipulação de arquivos via VBA: abrir, salvar, renomear e organizar pastas de trabalho automaticamente",
            "Botões para executar macros com um clique e tratamento de erros com On Error para automações confiáveis",
          ],
        },
        {
          title: "Integração com Power BI, IA e Projeto Final",
          topics: [
            "Publicando dados do Excel no Power BI Service, com atualizações agendadas e gateway de dados",
            "Power Pivot e DAX básico no Excel: medidas calculadas direto em tabelas dinâmicas",
            "Copilot no Excel 365: gerando fórmulas, análises e insights por linguagem natural",
            "ChatGPT como assistente de VBA: escrevendo, revisando e depurando macros com IA",
            "Conectando a APIs externas via Power Query e JSON para trazer dados de fora do Excel",
            "Projeto final: sistema de gestão (vendas, estoque ou RH) com base de dados separada da interface, dashboard executivo com KPIs e documentação de entrega",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Power Query",
        "VBA Editor",
        "Power Pivot",
        "Power BI Desktop",
        "Microsoft Copilot",
        "OneDrive",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber Excel avançado pra começar?",
      a: "Não. O curso parte do básico — fórmulas essenciais, formatação e tabelas dinâmicas — e avança em ordem até Power Query, fórmulas de matriz, VBA com automação real e a integração com Power BI e Copilot. Como as aulas são individuais, o professor avalia o que você já sabe na primeira aula e ajusta o ritmo, sem repetir o que você já domina nem pular uma base que ainda falta.",
    },
    {
      q: "Esse curso serve pra quem trabalha com dados financeiros, RH ou vendas?",
      a: "Sim — é justamente pra esse perfil. O curso ensina a analisar grande volume de informação, automatizar relatórios repetitivos e montar dashboards e KPIs que fazem sentido pra área financeira, RH, vendas ou logística.",
    },
  ],
}

function ExcelPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
