import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/sql")({
  component: SqlPage,
  head: () =>
    pageMeta({
      title: "Curso de Banco de Dados com SQL para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda SQL do zero ao avançado em Ribeirão Preto: consultas, modelagem, performance, cloud e IA aplicada a bancos de dados reais.",
      path: "/adultos/cursos/sql",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Banco de Dados com SQL",
  categoria: "Programação",
  tagline:
    "Domine SQL para analisar dados, construir sistemas e tomar decisões baseadas em dados reais",
  targetAudience: [
    "Você trabalha com planilhas e quer consultar dados diretamente em bancos de dados sem depender de outros",
    "Você está entrando na área de tecnologia e precisa de SQL para vagas de dev, dados ou BI",
    "Você desenvolve sistemas e quer entender modelagem relacional, JOINs e boas práticas de banco",
    "Você atua em análise de dados e precisa ir além do Excel conectando SQL ao Power BI e Python",
    "Você quer migrar para engenharia de dados ou analytics e precisa de uma base sólida em SQL",
    "Você tem curiosidade sobre como grandes empresas armazenam e consultam milhões de registros",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar e consultar bancos de dados relacionais, escrever SELECT com JOINs, agregações e filtros, e manipular tabelas com segurança",
      modules: [
        {
          title: "Fundamentos de Bancos de Dados Relacionais",
          topics: [
            "Tabelas, linhas e colunas: como os dados são organizados",
            "Chave primária e chave estrangeira na prática",
            "Tipos de dados: INT, VARCHAR, DATE, BOOLEAN e TEXT",
            "SGBD: diferenças entre MySQL, PostgreSQL e SQLite e quando usar cada um",
            "Instalando e configurando o DBeaver para conectar ao banco",
          ],
        },
        {
          title: "SELECT: Consultando Dados",
          topics: [
            "SELECT básico com FROM: buscando registros de uma tabela",
            "WHERE com operadores: =, >, <, LIKE, BETWEEN e IN",
            "ORDER BY e LIMIT: ordenando e paginando resultados",
            "Trabalhando com NULL e aliases AS para renomear colunas",
            "Comentários SQL e boas práticas de legibilidade",
          ],
        },
        {
          title: "Funções de Agregação e GROUP BY",
          topics: [
            "COUNT, SUM, AVG, MIN e MAX em consultas reais",
            "GROUP BY para agrupar resultados por categoria",
            "HAVING para filtrar grupos após a agregação",
            "DISTINCT para eliminar valores duplicados",
            "Combinando WHERE, GROUP BY e HAVING em uma só query",
          ],
        },
        {
          title: "Relacionamentos e JOINs",
          topics: [
            "INNER JOIN: combinando tabelas por chaves relacionadas",
            "LEFT JOIN e RIGHT JOIN com exemplos práticos de uso",
            "Realizando múltiplos JOINs em uma única consulta",
            "Subqueries simples com IN e EXISTS",
            "Quando usar JOIN vs subquery: comparando abordagens",
          ],
        },
        {
          title: "Manipulação de Dados e Estrutura",
          topics: [
            "INSERT INTO: inserindo registros com segurança",
            "UPDATE com WHERE: atualizando sem apagar dados errados",
            "DELETE com WHERE: removendo registros com cuidado",
            "CREATE TABLE com restrições NOT NULL, UNIQUE e DEFAULT",
            "ALTER TABLE: adicionando colunas e boas práticas de migração",
          ],
        },
      ],
      tools: ["MySQL", "PostgreSQL", "SQLite", "DBeaver", "MySQL Workbench"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Escrever queries avançadas com CTEs e Window Functions, modelar bancos normalizados, criar views e procedures, e conectar SQL a ferramentas de BI e análise",
      modules: [
        {
          title: "Consultas Avançadas e Performance",
          topics: [
            "CTEs com WITH: tornando queries complexas mais legíveis",
            "Window Functions: ROW_NUMBER, RANK, LAG, LEAD e PARTITION BY",
            "Subqueries correlacionadas para cálculos dependentes de linha",
            "EXPLAIN ANALYZE: lendo o plano de execução e identificando gargalos",
            "Criando e gerenciando índices para acelerar consultas",
          ],
        },
        {
          title: "Design de Banco de Dados",
          topics: [
            "Modelagem entidade-relacionamento (ER) com dbdiagram.io",
            "Normalização 1FN, 2FN e 3FN com exemplos reais",
            "Desnormalização: quando violar as formas normais faz sentido",
            "Criando um schema do zero para um sistema real",
            "Revisando e documentando o modelo de dados de forma profissional",
          ],
        },
        {
          title: "Stored Procedures, Views e Triggers",
          topics: [
            "Criando Stored Procedures no MySQL e no PostgreSQL",
            "Views e Materialized Views para consultas reutilizáveis",
            "Triggers pós-INSERT, UPDATE e DELETE para automações",
            "Transactions com COMMIT e ROLLBACK: garantindo consistência",
            "Tratamento de erros dentro de procedures e transactions",
          ],
        },
        {
          title: "SQL para Análise de Dados",
          topics: [
            "SQL no contexto de Business Intelligence e relatórios",
            "Conectando o banco de dados ao Power BI via SQL nativo",
            "Queries para KPIs, funis de conversão e métricas de negócio",
            "Exportando resultados para Python com pandas e para Excel",
            "Boas práticas de queries analíticas: legibilidade e reuso",
          ],
        },
        {
          title: "Administração Básica e Segurança",
          topics: [
            "Criando usuários e gerenciando permissões com GRANT e REVOKE",
            "Backup e restore de bancos MySQL e PostgreSQL",
            "SQL Injection: como o ataque funciona e como prevenir",
            "Usando variáveis de ambiente para proteger credenciais",
            "Auditoria de acessos e logs de atividade no banco de dados",
          ],
        },
      ],
      tools: [
        "MySQL",
        "PostgreSQL",
        "DBeaver",
        "pgAdmin",
        "dbdiagram.io",
        "Power BI",
        "Python (pandas)",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Trabalhar com bancos NoSQL e cloud, construir pipelines de dados com Python e dbt, aplicar IA para geração e otimização de queries, e entregar um projeto completo de ponta a ponta",
      modules: [
        {
          title: "Bancos NoSQL e Quando Usar",
          topics: [
            "MongoDB: documentos, collections e queries básicas",
            "Redis para cache: acelerando leituras em sistemas de alta carga",
            "Relacional vs NoSQL: comparando estrutura, escala e uso",
            "MongoDB Atlas: banco na nuvem, índices e aggregation pipeline",
            "Escolhendo o banco certo: critérios de decisão para projetos reais",
          ],
        },
        {
          title: "SQL em Cloud e Data Warehouses",
          topics: [
            "PostgreSQL no Supabase: banco gerenciado com API REST embutida",
            "BigQuery: armazenamento colunar e consultas em petabytes",
            "Snowflake básico: conceitos de warehouse e virtual compute",
            "Amazon RDS: provisionando e conectando bancos na AWS",
            "Particionamento e clustering no BigQuery para reduzir custos",
          ],
        },
        {
          title: "Python + SQL para Engenharia de Dados",
          topics: [
            "SQLAlchemy ORM: mapeando tabelas como classes Python",
            "ETL com pandas e SQL: extraindo, transformando e carregando dados",
            "dbt para transformações analíticas versionadas e testáveis",
            "Apache Airflow básico: orquestrando pipelines de dados com DAGs",
            "Boas práticas de versionamento de schema e migrations",
          ],
        },
        {
          title: "IA Aplicada a Banco de Dados",
          topics: [
            "ChatGPT para geração, explicação e refatoração de queries SQL",
            "GitHub Copilot no SQL: acelerando a escrita de queries complexas",
            "Text-to-SQL (NL2SQL): transformando perguntas em linguagem natural em queries",
            "Revisando performance de queries com auxílio de IA",
            "Limitações e riscos: quando não confiar no SQL gerado por IA",
          ],
        },
        {
          title: "Projeto Final: Modelagem e Sistema Completo",
          topics: [
            "Escolhendo o domínio: e-commerce, escola, clínica ou fintech",
            "Criando o diagrama ER completo e validando a modelagem",
            "Implementando todas as tabelas, constraints e relacionamentos",
            "Populando com dados fictícios e escrevendo queries analíticas reais",
            "Conectando ao Power BI e entregando um dashboard de resultados",
          ],
        },
      ],
      tools: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "BigQuery",
        "Supabase",
        "dbt",
        "Python (pandas, SQLAlchemy)",
        "Apache Airflow",
        "Power BI",
        "ChatGPT",
        "GitHub Copilot",
        "DBeaver",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber programar pra aprender SQL?",
      a: "Não. O curso começa do zero no nível Essencial — o que é uma tabela, chave primária e estrangeira, tipos de dados — pensado pra quem hoje só usa planilhas e quer consultar dados diretamente no banco sem depender de outra pessoa.",
    },
    {
      q: "Qual a diferença entre os níveis Essencial, Intermediário e Profissional + IA?",
      a: "Essencial ensina a criar e consultar bancos com SELECT, JOINs e agregações. Intermediário entra em queries avançadas com CTEs e Window Functions, modelagem e normalização, stored procedures e conexão com Power BI. Profissional + IA cobre bancos NoSQL, cloud (BigQuery, Supabase), pipelines de dados com Python e dbt, e IA aplicada à geração de queries.",
    },
    {
      q: "O curso ensina a conectar SQL com Power BI e Python?",
      a: "Sim. No Intermediário você já conecta o banco ao Power BI via SQL nativo e exporta resultados para Python com pandas. No Profissional + IA isso evolui pra pipelines completos de ETL com SQLAlchemy, dbt e Apache Airflow.",
    },
  ],
}

function SqlPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
