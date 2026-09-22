import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/excel-power-bi")({
  component: ExcelPowerBiPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Excel + Power BI para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Do Excel básico ao Power BI profissional em uma trilha integrada: tabelas dinâmicas, Power Query, DAX e dashboards executivos. Aulas individuais e presenciais em Ribeirão Preto.",
      path: "/adultos/cursos/excel-power-bi",
    }),
})

const COURSE_DATA = {
  nome: "Excel + Power BI: Da Planilha ao Dashboard",
  categoria: "Office",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Usar Excel com segurança no trabalho: fórmulas avançadas, tabelas dinâmicas e dashboards visuais que comunicam resultados",
      modules: [
        {
          title: "Excel no Trabalho Real",
          topics: [
            "Atalhos de teclado e navegação eficiente que economizam horas por semana",
            "Formatação condicional com regras personalizadas e semáforos visuais",
            "Validação de dados: listas suspensas, restrições por tipo e mensagens de erro",
            "Referências absolutas, relativas e mistas — o erro que todo iniciante comete",
            "Fórmulas essenciais: SOMA, MÉDIA, CONT.SE, SOMASE, CONT.SES, MÍNIMO, MÁXIMO",
          ],
        },
        {
          title: "Funções de Busca e Análise de Dados",
          topics: [
            "PROCV e PROCX: diferença, limitações e quando usar cada um",
            "ÍNDICE + CORRESP: busca bidirecional sem as restrições do PROCV",
            "Funções de texto: CONCATENAR, ESQUERDA, DIREITA, EXT.TEXTO, ARRUMAR, SUBSTITUIR",
            "Funções de data: HOJE, DATEDIF, DIA.DA.SEMANA, FIMMÊS, DIAS.ÚTEIS",
            "Tratamento de erros com SEERRO e SE aninhado para relatórios limpos",
          ],
        },
        {
          title: "Tabelas Dinâmicas e Análise Visual",
          topics: [
            "Criando tabelas dinâmicas a partir de bases de dados reais",
            "Segmentação de dados (Slicers) e linha do tempo para filtros visuais",
            "Campos calculados, agrupamentos por data e percentuais automáticos",
            "Gráficos dinâmicos vinculados: barras, linhas, pizza e combinados",
            "Dashboard de uma página: KPIs, gráficos e segmentações integrados",
          ],
        },
      ],
      tools: ["Microsoft Excel 365", "OneDrive"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Conectar Excel e Power BI através do Power Query, modelar dados corretamente e criar dashboards executivos com DAX básico publicados no Power BI Service",
      modules: [
        {
          title: "Power Query — A Tecnologia que Une os Dois Programas",
          topics: [
            "O que é o Power Query e por que ele existe no Excel e no Power BI",
            "Conectando a CSV, Excel, JSON, SQL Server e SharePoint",
            "Limpeza de dados: duplicatas, nulos, tipos incorretos e valores inconsistentes",
            "Mesclagem e acréscimo de consultas — o equivalente ao PROCV sem fórmulas",
            "Atualização automática com um clique: o mesmo clique que funciona nos dois programas",
          ],
        },
        {
          title: "Modelagem de Dados — A Base de Tudo",
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
          title: "DAX Essencial — A Linguagem de Análise",
          topics: [
            "Diferença entre coluna calculada e medida: o erro mais comum de iniciantes",
            "CALCULATE: a função mais poderosa do DAX explicada do zero com exemplos reais",
            "Funções de agregação: SUM, AVERAGE, COUNTROWS, DISTINCTCOUNT",
            "ALL, FILTER e RELATED para controlar contexto de filtro",
            "KPIs com metas, variação percentual e semáforos dinâmicos",
          ],
        },
        {
          title: "Projeto Integrado — Excel como Fonte, Power BI como Tela",
          topics: [
            "Construindo uma base de dados real no Excel e tratando com Power Query",
            "Importando para o Power BI e montando o modelo estrela completo",
            "Criando 10 medidas DAX para análise de vendas ou resultados financeiros",
            "Dashboard executivo com drill-down, tooltips personalizados e bookmarks",
            "Publicação, agendamento de atualização automática e distribuição para a equipe",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Power Query",
        "Power BI Desktop",
        "Power BI Service",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar VBA, DAX avançado e Power BI Service com governança; integrar Python e Copilot; entregar uma solução de analytics completa do zero ao deploy com RLS e atualização automática",
      modules: [
        {
          title: "Excel Profissional — VBA e Automação",
          topics: [
            "Gravador de macros e navegação no Editor VBA",
            "Variáveis, condicionais (If/Then) e loops (For Each / For Next) na prática",
            "UserForms: criando formulários de entrada de dados personalizados",
            "Automatizando relatórios: abrir, processar, salvar e distribuir arquivos via código",
            "Integrando VBA com tabelas dinâmicas e Power Query para relatórios sem intervenção manual",
          ],
        },
        {
          title: "DAX Avançado e Inteligência de Tempo",
          topics: [
            "Contexto de linha vs contexto de filtro: entendendo a fundo com casos reais",
            "Funções de inteligência temporal: YTD, MTD, QTD, SAMEPERIODLASTYEAR",
            "Variáveis DAX (VAR) para fórmulas legíveis, reutilizáveis e mais rápidas",
            "SWITCH dinâmico para seleção de métricas por parâmetro de campo",
            "Análise de Pareto, ranking ABC, crescimento acumulado e análise de coorte",
            "Otimização de DAX com DAX Studio: encontrando gargalos de performance",
          ],
        },
        {
          title: "Power BI Service — Governança e Colaboração",
          topics: [
            "Workspaces, aplicativos e permissões de acesso por departamento",
            "Row-Level Security (RLS): cada usuário vê apenas os próprios dados",
            "Gateway de dados on-premise para atualizar fontes internas automaticamente",
            "Assinaturas automáticas e exportação programada de relatórios por e-mail",
            "Lineage view: rastreando impacto de qualquer mudança no modelo de dados",
          ],
        },
        {
          title: "Python e IA no Ecossistema Excel + Power BI",
          topics: [
            "Python no Excel (Microsoft 365): pandas e matplotlib dentro da própria planilha",
            "Scripts Python no Power Query do Power BI para transformações avançadas",
            "Copilot no Excel: gerando fórmulas, análises e gráficos por linguagem natural",
            "Copilot no Power BI: criando relatórios e medidas DAX por linguagem natural",
            "ChatGPT como assistente de DAX e VBA: escrever, revisar e otimizar código",
          ],
        },
        {
          title: "Power Automate — Fluxos entre Excel e Power BI",
          topics: [
            "Acionando fluxos automáticos quando dados mudam no Excel ou SharePoint",
            "Enviando alertas e snapshots de dashboards do Power BI por e-mail e Teams",
            "Conectando Power BI com Forms, SharePoint Lists e outras fontes Microsoft",
            "Automatizando o ciclo completo: extração, transformação e distribuição de dados",
          ],
        },
        {
          title: "Projeto Final — Solução de Analytics do Zero ao Deploy",
          topics: [
            "Definindo o escopo: vendas, financeiro, RH ou operações",
            "Arquitetura da solução: Excel (Bronze) → Power Query (Prata) → Power BI (Ouro)",
            "Desenvolvimento de 20+ medidas DAX com documentação técnica",
            "Dashboard executivo + relatório operacional na mesma solução",
            "Publicação com RLS, gateway, atualização automática e distribuição por área",
            "Apresentação e defesa das escolhas técnicas de modelagem e DAX",
          ],
        },
      ],
      tools: [
        "Microsoft Excel 365",
        "Power Query",
        "VBA Editor",
        "Power BI Desktop",
        "Power BI Service",
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
      a: "Sim — é exatamente pra isso que o curso existe. O nível Essencial fecha as lacunas de Excel (fórmulas, tabelas dinâmicas, dashboards) antes de entrar no Power Query e no Power BI no Intermediário, então você não precisa chegar sabendo Power BI, só sair sabendo.",
    },
    {
      q: "Qual a diferença entre esse curso e um curso comum de Power BI?",
      a: "A maioria dos cursos de Power BI assume que você já sabe Excel e pula direto pro DAX. Aqui a trilha é integrada: você aprende Excel, Power Query (que é a mesma ferramenta nos dois programas) e só depois entra no Power BI, terminando com um projeto que usa o Excel como fonte de dados e o Power BI como tela de apresentação.",
    },
    {
      q: "O curso ensina modelagem de dados de verdade, ou só a montar gráficos?",
      a: "Ensina modelagem de verdade. Você aprende Star Schema, relacionamentos entre tabelas fato e dimensão, DAX do básico ao avançado com inteligência de tempo, e no nível Profissional + IA ainda entra Row-Level Security e governança no Power BI Service — não é só arrastar campo pra gráfico.",
    },
  ],
}

function ExcelPowerBiPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
