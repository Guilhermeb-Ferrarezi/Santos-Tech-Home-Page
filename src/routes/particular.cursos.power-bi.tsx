import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/power-bi")({
  component: PowerBiPage,
  head: () =>
    pageMeta({
      title: "Curso de Power BI Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Power BI do zero ao profissional em Ribeirão Preto: DAX, modelagem, dashboards executivos e integração com Python e IA. Aulas individuais e presenciais.",
      path: "/particular/cursos/power-bi",
    }),
})

const COURSE_DATA = {
  nome: "Power BI",
  categoria: "Office Específico",
  tema: "office" as const,
  logo: "powerbi",
  variante: "power-bi",
  tagline:
    "Dados brutos em dashboards que tomam decisões: do zero ao Power BI profissional",
  targetAudience: [
    "Você trabalha com dados no Excel mas sente que precisa de algo mais poderoso para análises e relatórios",
    "Você precisa criar dashboards e relatórios interativos que atualizam automaticamente",
    "Você quer aprender DAX para criar métricas, KPIs e cálculos que o Excel não consegue fazer com facilidade",
    "Você trabalha em BI, análise de dados, finanças, marketing ou operações e precisa apresentar dados com clareza",
    "Você quer publicar relatórios no Power BI Service e compartilhar com a equipe e gestores",
    "Você quer integrar Power BI com fontes de dados como SQL Server, Excel, APIs e o SharePoint",
  ],
  tiers: [
    {
      levelName: "Power BI",
      totalHours: "48h",
      outcome:
        "Dominar o Power BI do zero absoluto até a análise de dados avançada: conectar e modelar dados de qualquer fonte, construir dashboards executivos, escrever DAX do essencial ao nível expert e aplicar Python e Copilot num projeto de BI completo — preparo para trabalhar como analista de dados, BI ou de qualquer área que decide com base em dados reais.",
      modules: [
        {
          title: "Fundamentos do Power BI e o ecossistema Microsoft",
          topics: [
            "Power BI Desktop vs Power BI Service vs Power BI Mobile: qual a diferença",
            "Instalando o Power BI Desktop e navegando pela interface",
            "O fluxo completo: dados brutos → modelo → relatório → publicação",
            "Conectando ao Excel, CSV e planilhas do SharePoint",
            "Atualização de dados: manual vs automática no Service",
          ],
        },
        {
          title: "Power Query: transformando e conectando dados de qualquer fonte",
          topics: [
            "Editor do Power Query: a base de qualquer modelo de dados",
            "Limpeza de dados: removendo duplicatas, nulos e erros",
            "Mesclando tabelas: equivalente ao PROCV sem fórmula",
            "Adicionando colunas calculadas com transformações condicionais",
            "Conectando a fontes corporativas: SQL Server, Azure SQL Database e APIs REST",
            "Importação vs DirectQuery e gateway de dados para atualização de fontes on-premise",
          ],
        },
        {
          title: "Modelagem de dados: a base dos cálculos corretos",
          topics: [
            "Relacionamentos entre tabelas: fato e dimensão",
            "Modelo estrela (Star Schema): por que é obrigatório no Power BI",
            "Cardinalidade: um para muitos, muitos para muitos e armadilhas comuns",
            "Tabela de calendário: como criar e por que é essencial",
            "Direção do filtro cruzado e impacto nos visuais",
          ],
        },
        {
          title: "Criando relatórios e dashboards profissionais",
          topics: [
            "Os principais visuais: gráfico de barras, linhas, pizza, mapa, cartão e tabela",
            "Segmentações de dados (Slicers) e filtros de página, visual e relatório",
            "Formatação de visuais: cores, rótulos, títulos e tooltips personalizados",
            "Layout responsivo (mobile first e desktop) e visuais customizados do AppSource, como Deneb",
            "Drill-through, drill-down e bookmarks para navegação interativa",
            "Publicando no Power BI Service e compartilhando com a equipe",
          ],
        },
        {
          title: "DAX essencial: a linguagem de análise do Power BI",
          topics: [
            "Diferença entre coluna calculada e medida: quando usar cada uma",
            "CALCULATE: a função mais poderosa do DAX",
            "Funções de agregação: SUM, AVERAGE, COUNTROWS, DISTINCTCOUNT",
            "ALL, ALLEXCEPT e ALLSELECTED para remover filtros seletivamente",
            "FILTER e iteradores: SUMX, AVERAGEX e RANKX",
          ],
        },
        {
          title: "DAX intermediário, KPIs e governança no Power BI Service",
          topics: [
            "Funções de inteligência temporal: SAMEPERIODLASTYEAR, YTD, MTD, QTD",
            "Variáveis DAX (VAR) para fórmulas legíveis e reutilizáveis",
            "Medidas de comparação (crescimento percentual, variação absoluta) e KPIs com metas e semáforos dinâmicos",
            "Workspaces, aplicativos e permissões de acesso por área",
            "Row-Level Security (RLS): cada usuário vê apenas seus dados",
            "Agendamento de atualização, alertas de dados e lineage view",
          ],
        },
        {
          title: "DAX Expert, Python e Projeto Final com IA",
          topics: [
            "DAX de nível expert: contexto de linha vs. contexto de filtro, EARLIER, iteradores aninhados, medidas dinâmicas com SWITCH e tabelas virtuais (SUMMARIZE, ADDCOLUMNS)",
            "Análise avançada: coorte, pareto/ABC e padrões como moving average, forecast simples e bucket dinâmico",
            "Modelagem enterprise: floco de neve vs. estrela, agregações para performance e tabelas de parâmetros para simulação de cenários",
            "Python e R no Power BI: scripts no Power Query, visuais com matplotlib, seaborn e plotly, e machine learning com scikit-learn para detecção de anomalias",
            "Power BI com IA e Copilot: relatórios por linguagem natural, Q&A visual, narrativas automáticas, Azure AI Services e Power BI Embedded",
            "Projeto final: solução de BI completa em modelo estrela, com 20+ medidas DAX documentadas, dashboard executivo e operacional, e apresentação com defesa técnica das escolhas",
          ],
        },
      ],
      tools: [
        "Power BI Desktop",
        "Power BI Service",
        "Power Query",
        "Microsoft Excel",
        "SQL Server",
        "DAX Studio",
        "Python",
        "Tabular Editor",
        "Azure AI Services",
        "Microsoft Copilot",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber Excel avançado pra fazer esse curso de Power BI?",
      a: "Não é obrigatório, mas ajuda. O curso é pensado justamente pra quem trabalha com dados no Excel e sente que precisa de uma ferramenta mais poderosa — começa do zero, conectando fontes de dados e publicando seu primeiro dashboard, antes de avançar para DAX, modelagem de dados corporativos e os recursos de IA do Copilot.",
    },
    {
      q: "Esse curso serve pra quem trabalha em BI, finanças, marketing ou operações?",
      a: "Sim — é o público principal. O curso ensina a apresentar dados com clareza pra essas áreas, além de publicar relatórios no Power BI Service e compartilhar com equipe e gestores.",
    },
  ],
}

function PowerBiPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
