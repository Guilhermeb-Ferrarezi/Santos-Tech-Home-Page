import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/excel")({
  component: ExcelPage,
  head: () =>
    pageMeta({
      title: "Curso de Excel para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Do básico ao VBA e Power Query: domine Excel Avançado com aulas individuais e presenciais em Ribeirão Preto. Dashboards, macros e Power BI para quem trabalha com dados.",
      path: "/adultos/cursos/excel",
    }),
})

const COURSE_DATA = {
  nome: "Excel Avançado",
  categoria: "Office Específico",
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
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Usar Excel com segurança no dia a dia: fórmulas essenciais, tabelas dinâmicas e gráficos profissionais",
      modules: [
        {
          title: "Fundamentos que todo profissional precisa dominar",
          topics: [
            "Atalhos de teclado que economizam horas por semana",
            "Formatação condicional com regras personalizadas",
            "Validação de dados: listas suspensas e restrições",
            "Funções essenciais: SOMA, MÉDIA, CONT.SE, SOMASE, CONT.SES",
            "Referências absolutas, relativas e mistas na prática",
          ],
        },
        {
          title: "Funções de busca e análise de dados",
          topics: [
            "PROCV e PROCH: como e quando usar",
            "ÍNDICE + CORRESP: busca bidirecional sem limitações",
            "Funções de texto: CONCATENAR, ESQUERDA, DIREITA, EXT.TEXTO, ARRUMAR",
            "Funções de data: DATEDIF, DIA.DA.SEMANA, FIMMÊS",
            "Tratamento de erros com SEERRO e SE",
          ],
        },
        {
          title: "Tabelas dinâmicas do zero ao essencial",
          topics: [
            "Criando tabelas dinâmicas a partir de bases de dados reais",
            "Campos calculados e agrupamentos por data",
            "Segmentação de dados (Slicers) para filtros visuais",
            "Linha do tempo para análise temporal",
            "Gráficos dinâmicos conectados à tabela",
          ],
        },
        {
          title: "Dashboards e apresentação de dados",
          topics: [
            "Boas práticas de layout para relatórios profissionais",
            "Gráficos avançados: cascata, termômetro, velocímetro",
            "Sparklines para análise em linha",
            "Protegendo planilhas e células críticas",
            "Impressão e exportação profissional para PDF",
          ],
        },
      ],
      tools: ["Microsoft Excel 365", "OneDrive"],
    },
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Automatizar relatórios com Power Query, criar dashboards avançados e iniciar em macros VBA",
      modules: [
        {
          title: "Power Query: importação e transformação de dados",
          topics: [
            "Conectando Excel a CSV, TXT, JSON e bancos de dados",
            "Transformações essenciais: dividir colunas, pivotar, despivotar",
            "Mesclagem e acréscimo de consultas (equivalente ao PROCV sem fórmula)",
            "Limpeza automática de dados sujos: duplicatas, erros, nulos",
            "Atualização automática com um clique",
          ],
        },
        {
          title: "Power Query avançado e modelagem de dados",
          topics: [
            "Linguagem M: fórmulas personalizadas no editor avançado",
            "Parâmetros e consultas dinâmicas",
            "Combinando múltiplas planilhas de uma pasta de forma automática",
            "Transformações condicionais com colunas personalizadas",
            "Preparando dados para o Power BI",
          ],
        },
        {
          title: "Fórmulas avançadas e funções de matriz",
          topics: [
            "PROCX: substituto moderno do PROCV com mais poder",
            "Funções de matriz dinâmica: FILTRAR, ORDENAR, ÚNICO, SEQUÊNCIA",
            "SOMARPRODUTO para cálculos matriciais complexos",
            "Funções LAMBDA: criando suas próprias funções reutilizáveis",
            "Fórmulas aninhadas para lógicas de negócio complexas",
          ],
        },
        {
          title: "Introdução ao VBA e automação de tarefas",
          topics: [
            "Gravador de macros: criando automações sem digitar código",
            "Editor VBA: entendendo a estrutura básica de um módulo",
            "Variáveis, condicionais (If/Then) e loops (For Each)",
            "Automatizando formatação, cálculos e geração de relatórios",
            "Criando botões para executar macros com um clique",
          ],
        },
        {
          title: "Dashboards profissionais e KPIs",
          topics: [
            "Design de dashboards executivos com hierarquia visual",
            "KPIs e indicadores com semáforos automáticos",
            "Gráficos combinados e eixo duplo",
            "Interatividade com botões de opção e caixas de seleção",
            "Templates reutilizáveis para relatórios mensais",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Power Query",
        "VBA Editor",
        "OneDrive",
      ],
    },
    {
      label: "3 meses",
      levelName: "Profissional + IA",
      totalHours: "60h",
      outcome:
        "Dominar VBA completo, integrar Excel com Power BI e IA, e entregar um sistema de gestão funcional como projeto final",
      modules: [
        {
          title: "VBA profissional: código de verdade",
          topics: [
            "Programação orientada a objetos no VBA: classes e objetos",
            "UserForms: criando formulários de entrada de dados personalizados",
            "Manipulação de arquivos: abrir, salvar, renomear e excluir via VBA",
            "Conexão com bancos de dados externos via ADODB",
            "Tratamento de erros profissional com On Error e debug avançado",
            "Criando suplementos (.xlam) para distribuir ferramentas na empresa",
          ],
        },
        {
          title: "Integração Excel + Power BI",
          topics: [
            "Publicando dados do Excel no Power BI Service",
            "Atualizações agendadas e gateway de dados",
            "Usando Power Pivot dentro do Excel para modelo de dados relacional",
            "DAX básico no Excel: medidas calculadas em tabelas dinâmicas",
            "Importando visuais do Power BI de volta ao Excel",
          ],
        },
        {
          title: "Excel e Inteligência Artificial",
          topics: [
            "Copilot no Excel 365: gerando fórmulas e análises por linguagem natural",
            "Python no Excel (preview): pandas e matplotlib dentro da planilha",
            "Conectando a APIs externas via Power Query e JSON",
            "Automatizando tarefas com Power Automate integrado ao Excel",
            "ChatGPT como assistente de VBA: escrevendo e revisando código com IA",
          ],
        },
        {
          title: "Análise financeira e de negócios avançada",
          topics: [
            "Modelagem financeira: DRE, fluxo de caixa e projeções",
            "Solver e Atingir Meta para otimização de cenários",
            "Análise de sensibilidade com tabela de dados bidimensional",
            "Previsão de série temporal com função PREVISÃO.ETS",
            "Análise de regressão e correlação sem add-ins externos",
          ],
        },
        {
          title: "Projeto final: sistema de gestão em Excel",
          topics: [
            "Definição do escopo: controle de vendas, estoque ou RH",
            "Arquitetura de dados: separando base de dados da interface",
            "Desenvolvimento do formulário de entrada com VBA",
            "Dashboard executivo com KPIs e gráficos dinâmicos",
            "Documentação, proteção e entrega do sistema para uso real",
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
        "Power Automate",
      ],
    },
  ],
}

function ExcelPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
