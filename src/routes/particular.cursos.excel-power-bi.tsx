import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/excel-power-bi")({
  component: ExcelPowerBiPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Excel + Power BI Particular em Ribeirão Preto — Santos Tech",
      description:
        "Do Excel básico ao Power BI profissional em uma trilha integrada: tabelas dinâmicas, Power Query, DAX e dashboards executivos. Aulas individuais e presenciais em Ribeirão Preto.",
      path: "/particular/cursos/excel-power-bi",
    }),
})

const COURSE_DATA = {
  nome: "Excel + Power BI: Da Planilha ao Dashboard",
  categoria: "Office",
  tema: "office" as const,
  logo: "excel",
  variante: "excel-power-bi",
  tagline:
    "A trilha completa: domine Excel, conecte com Power BI e entregue análises que impressionam",
  targetAudience: [
    "Você usa Excel no dia a dia mas ainda faz muita coisa manualmente e quer mudar isso",
    "Você quer aprender Power BI mas não sabe se tem base suficiente de Excel para começar",
    "Você precisa criar relatórios e dashboards que atualizam automaticamente e impressionam gestores",
    "Você trabalha em financeiro, vendas, RH ou operações e lida com grandes volumes de dados",
    "Você quer uma trilha integrada — não dois cursos desconexos — que vai do básico ao profissional",
    "Você quer dominar as ferramentas de dados mais exigidas pelas empresas brasileiras hoje",
  ],
  tiers: [
    {
      levelName: "Excel + Power BI",
      totalHours: "48h",
      outcome:
        "Dominar Excel e Power BI como uma trilha só: do zero em fórmulas e tabelas dinâmicas até Power Query, modelagem em Star Schema, DAX avançado, VBA e governança com Row-Level Security no Power BI Service — incluindo os recursos de IA do Copilot — pronto para transformar planilhas soltas em dashboards executivos de verdade.",
      modules: [
        {
          title: "Excel para Análise de Dados",
          topics: [
            "Atalhos de teclado, formatação condicional e validação de dados para planilhas profissionais",
            "Referências absolutas, relativas e mistas — a base de qualquer fórmula robusta",
            "Fórmulas essenciais: SOMA, MÉDIA, CONT.SE, SOMASE, SEERRO, e as funções de texto e data mais usadas no dia a dia",
            "PROCV, PROCX e ÍNDICE + CORRESP: busca de dados sem as limitações do PROCV clássico",
            "Tabelas dinâmicas: criação a partir de bases reais, segmentação (Slicers), campos calculados e gráficos dinâmicos",
            "Dashboard de uma página no Excel: KPIs e segmentações integradas — a ponte antes de migrar pro Power BI",
          ],
        },
        {
          title: "Power Query — Conectando e Limpando Dados",
          topics: [
            "O que é o Power Query e por que ele existe no Excel e no Power BI",
            "Conectando a CSV, Excel, JSON, SQL Server e SharePoint",
            "Limpeza de dados: duplicatas, nulos, tipos incorretos e valores inconsistentes",
            "Mesclagem e acréscimo de consultas — o equivalente ao PROCV sem fórmulas",
            "Atualização automática com um clique: o mesmo clique que funciona nos dois programas",
          ],
        },
        {
          title: "Modelagem de Dados e Star Schema",
          topics: [
            "Por que o modelo estrela (Star Schema) é obrigatório no Power BI",
            "Relacionamentos entre tabelas: tabelas fato, dimensão e o papel de cada uma",
            "Tabela de calendário: como criar e por que é essencial para análise temporal",
            "Cardinalidade e direção do filtro cruzado: impacto direto nos seus números",
            "Quando criar colunas no Power Query vs colunas calculadas no modelo",
          ],
        },
        {
          title: "Power BI Desktop — Do Zero ao Primeiro Dashboard",
          topics: [
            "Interface do Power BI Desktop: visões de Dados, Modelo e Relatório",
            "Importando dados do Excel já tratados e construindo o modelo",
            "Os principais visuais: barras, linhas, cartões, tabelas, mapas e segmentações",
            "Filtros de página, visual e relatório: como cada nível afeta a análise",
            "Publicando no Power BI Service e compartilhando relatórios com a equipe",
          ],
        },
        {
          title: "DAX Essencial e Projeto Integrado",
          topics: [
            "Diferença entre coluna calculada e medida: o erro mais comum de iniciantes",
            "CALCULATE: a função mais poderosa do DAX, explicada do zero com exemplos reais",
            "Funções de agregação e contexto de filtro: SUM, AVERAGE, DISTINCTCOUNT, ALL, FILTER, RELATED",
            "KPIs com metas, variação percentual e semáforos dinâmicos",
            "Projeto integrado: base de dados real tratada no Power Query, modelo estrela completo e 10 medidas DAX de vendas ou financeiro",
            "Dashboard executivo com drill-down, tooltips personalizados e bookmarks",
          ],
        },
        {
          title: "Módulo Avançado — VBA, Governança e IA",
          topics: [
            "VBA: gravador de macros, variáveis, condicionais, loops e UserForms para automatizar relatórios sem intervenção manual",
            "DAX avançado: contexto de linha vs contexto de filtro, inteligência de tempo (YTD, MTD, SAMEPERIODLASTYEAR), variáveis DAX (VAR) e otimização com DAX Studio",
            "Power BI Service — governança: Row-Level Security (RLS), gateway de dados on-premise e workspaces por departamento",
            "Python e Copilot no ecossistema Excel + Power BI: pandas no Excel e Copilot gerando fórmulas, análises e medidas DAX por linguagem natural",
            "Power Automate: fluxos automáticos entre Excel, Power BI, e-mail e Teams disparados por mudança de dados",
            "Projeto final: solução de analytics completa (Excel → Power Query → Power BI) publicada com RLS, gateway e atualização automática",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "OneDrive",
        "Power Query",
        "Power BI Desktop",
        "Power BI Service",
        "VBA Editor",
        "DAX Studio",
        "Python (Microsoft 365)",
        "Microsoft Copilot",
        "Power Automate",
        "Tabular Editor",
      ],
    },
  ],
  faqItems: [
    {
      q: "Não sei se tenho Excel suficiente pra aprender Power BI. Serve pra mim?",
      a: "Sim — é exatamente pra isso que o curso existe. As primeiras aulas fecham as lacunas de Excel (fórmulas, PROCV/PROCX, tabelas dinâmicas) antes de entrar no Power Query e no Power BI, então você não precisa chegar sabendo Power BI, só sair sabendo.",
    },
    {
      q: "Qual a diferença entre esse curso e um curso comum de Power BI?",
      a: "A maioria dos cursos de Power BI assume que você já sabe Excel e pula direto pro DAX. Aqui a trilha é integrada: você aprende Excel, Power Query (que é a mesma ferramenta nos dois programas) e só depois entra no Power BI, terminando com um projeto que usa o Excel como fonte de dados e o Power BI como tela de apresentação.",
    },
    {
      q: "O curso ensina modelagem de dados de verdade, ou só a montar gráficos?",
      a: "Ensina modelagem de verdade. Você aprende Star Schema, relacionamentos entre tabelas fato e dimensão, DAX do básico ao avançado com inteligência de tempo, e o curso ainda entra em Row-Level Security e governança no Power BI Service — não é só arrastar campo pra gráfico.",
    },
  ],
}

function ExcelPowerBiPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
