import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/power-bi")({
  component: PowerBiPage,
  head: () =>
    pageMeta({
      title: "Curso de Power BI para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Power BI do zero ao profissional em Ribeirão Preto: DAX, modelagem, dashboards executivos e integração com Python e IA. Aulas individuais e presenciais.",
      path: "/adultos/cursos/power-bi",
    }),
})

const COURSE_DATA = {
  nome: "Power BI",
  categoria: "Office Específico",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Conectar fontes de dados, criar relatórios interativos e publicar seu primeiro dashboard no Power BI Service",
      modules: [
        {
          title: "Introdução ao Power BI e ecossistema Microsoft",
          topics: [
            "Power BI Desktop vs Power BI Service vs Power BI Mobile: qual a diferença",
            "Instalando o Power BI Desktop e navegando pela interface",
            "O fluxo completo: dados brutos → modelo → relatório → publicação",
            "Conectando ao Excel, CSV e planilhas do SharePoint",
            "Atualização de dados: manual vs automática no Service",
          ],
        },
        {
          title: "Power Query no Power BI: transformando dados",
          topics: [
            "Editor do Power Query: a base de qualquer modelo de dados",
            "Limpeza de dados: removendo duplicatas, nulos e erros",
            "Mesclando tabelas: equivalente ao PROCV sem fórmula",
            "Adicionando colunas calculadas com transformações condicionais",
            "Aplicando etapas e criando consultas reutilizáveis",
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
          title: "Criando relatórios e visuais impactantes",
          topics: [
            "Os principais visuais: gráfico de barras, linhas, pizza, mapa, cartão e tabela",
            "Segmentações de dados (Slicers) para filtros interativos",
            "Filtros de página, filtro de visual e filtro de relatório",
            "Formatação de visuais: cores, rótulos, títulos e tooltips personalizados",
            "Publicando no Power BI Service e compartilhando com a equipe",
          ],
        },
      ],
      tools: ["Power BI Desktop", "Power BI Service", "Microsoft Excel"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Dominar DAX para criar métricas complexas, construir dashboards executivos e conectar a bancos de dados reais",
      modules: [
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
          title: "DAX avançado: inteligência de tempo e KPIs",
          topics: [
            "Funções de inteligência temporal: SAMEPERIODLASTYEAR, YTD, MTD, QTD",
            "Variáveis DAX (VAR) para fórmulas legíveis e reutilizáveis",
            "Medidas de comparação: crescimento percentual e variação absoluta",
            "KPIs com metas e semáforos dinâmicos",
            "Tabelas virtuais com SUMMARIZE, ADDCOLUMNS e CROSSJOIN",
          ],
        },
        {
          title: "Conectando a fontes de dados corporativas",
          topics: [
            "Conectando ao SQL Server e Azure SQL Database",
            "Importação vs DirectQuery: prós, contras e quando usar cada modo",
            "Gateway de dados: atualizações automáticas de fontes on-premise",
            "Conectando a APIs REST via Power Query e JSON",
            "SharePoint Lists e Google Sheets como fontes de dados",
          ],
        },
        {
          title: "Design avançado de dashboards",
          topics: [
            "Layout responsivo: mobile first e desktop",
            "Visuais customizados do AppSource: Deneb, HTML Content e outros",
            "Drill-through e drill-down para navegação hierárquica",
            "Tooltips personalizados com páginas de relatório",
            "Bookmarks e botões para navegação e apresentações interativas",
          ],
        },
        {
          title: "Power BI Service: publicação e governança",
          topics: [
            "Workspaces, aplicativos e permissões de acesso por área",
            "Agendamento de atualização e alertas de dados",
            "Assinaturas e exportação programada por e-mail",
            "Row-Level Security (RLS): cada usuário vê apenas seus dados",
            "Lineage view e impacto de mudanças no modelo",
          ],
        },
      ],
      tools: [
        "Power BI Desktop",
        "Power BI Service",
        "SQL Server",
        "Power Query",
        "DAX Studio",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar DAX avançado, modelagem enterprise, integração com Python e IA, e entregar um projeto de BI completo como portfólio",
      modules: [
        {
          title: "DAX de nível expert",
          topics: [
            "Contexto de linha vs contexto de filtro: entendendo a fundo",
            "EARLIER e iteradores aninhados para cálculos complexos",
            "Medidas dinâmicas com SWITCH e seleção de métricas por parâmetro de campo",
            "Análise de coorte, pareto e ABC no Power BI",
            "Otimização de DAX com DAX Studio: encontrando gargalos de performance",
            "Padrões DAX avançados: moving average, forecast simples, bucket dinâmico",
          ],
        },
        {
          title: "Modelagem enterprise e arquitetura de dados",
          topics: [
            "Modelo floco de neve vs estrela: quando e por quê",
            "Agregações para performance em grandes volumes de dados",
            "Tabelas de parâmetros para simulação de cenários interativos",
            "Incremental refresh: atualizando apenas dados novos",
            "Separando camadas: Bronze, Prata e Ouro no Power BI",
          ],
        },
        {
          title: "Python e R no Power BI",
          topics: [
            "Rodando scripts Python no Power Query para transformações avançadas",
            "Visuais Python no Power BI: matplotlib, seaborn e plotly",
            "Machine learning com scikit-learn integrado ao relatório",
            "Análise estatística e detecção de anomalias com Python",
            "Quando usar Python no Power BI vs Azure Machine Learning",
          ],
        },
        {
          title: "Power BI com IA e Copilot",
          topics: [
            "Copilot no Power BI: gerando relatórios por linguagem natural",
            "Q&A visual: perguntas em português diretamente no relatório",
            "Narrativas inteligentes automáticas nos visuais",
            "Azure AI e Cognitive Services integrados ao Power BI",
            "Power BI Embedded: incorporando relatórios em aplicações web",
          ],
        },
        {
          title: "Projeto final: solução de BI do zero ao deploy",
          topics: [
            "Definindo escopo: vendas, financeiro ou operacional",
            "Extração e modelagem dos dados em modelo estrela completo",
            "Desenvolvimento de 20+ medidas DAX com documentação",
            "Dashboard executivo e relatório operacional na mesma solução",
            "Publicação no Power BI Service com RLS, gateway e atualização automática",
            "Apresentação da solução com defesa das escolhas técnicas",
          ],
        },
      ],
      tools: [
        "Power BI Desktop",
        "Power BI Service",
        "DAX Studio",
        "SQL Server",
        "Python",
        "Azure AI Services",
        "Microsoft Copilot",
        "Tabular Editor",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber Excel avançado pra fazer esse curso de Power BI?",
      a: "Não é obrigatório, mas ajuda. O curso é pensado justamente pra quem trabalha com dados no Excel e sente que precisa de uma ferramenta mais poderosa — o Essencial já começa do zero, conectando fontes de dados e publicando seu primeiro dashboard.",
    },
    {
      q: "Qual a diferença entre os três níveis do curso?",
      a: "Essencial ensina a conectar dados, criar relatórios e publicar seu primeiro dashboard. Intermediário foca em DAX pra métricas complexas, dashboards executivos e conexão com bancos de dados corporativos. Profissional + IA fecha com DAX de nível expert, modelagem enterprise, integração com Python e Copilot, e um projeto de BI completo pro portfólio.",
    },
    {
      q: "Esse curso serve pra quem trabalha em BI, finanças, marketing ou operações?",
      a: "Sim — é o público principal. O curso ensina a apresentar dados com clareza pra essas áreas, além de publicar relatórios no Power BI Service e compartilhar com equipe e gestores.",
    },
  ],
}

function PowerBiPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
