import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/sql")({
  component: SqlPage,
  head: () =>
    pageMeta({
      title: "Curso de Banco de Dados com SQL Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda SQL do zero ao avançado em Ribeirão Preto: consultas, modelagem, performance e conexão com Power BI e Python em bancos de dados reais.",
      path: "/particular/cursos/sql",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Banco de Dados com SQL",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "database",
  variante: "sql",
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
      levelName: "Banco de Dados com SQL",
      totalHours: "48h",
      outcome:
        "Sair do zero absoluto até escrever consultas avançadas com CTEs, Window Functions e agregações complexas, modelar bancos de dados relacionais profissionais e manipular dados com segurança, conectando SQL a Power BI e Python — com uma introdução prática a bancos NoSQL e visão do panorama de cloud, pipelines de dados e IA aplicada a SQL — pronto para atuar como analista, desenvolvedor ou futuro engenheiro de dados.",
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
          title: "SELECT: Consultando e Filtrando Dados",
          topics: [
            "SELECT básico com FROM: buscando registros de uma tabela",
            "WHERE com operadores: =, >, <, LIKE, BETWEEN e IN",
            "ORDER BY e LIMIT: ordenando e paginando resultados",
            "Trabalhando com NULL e aliases AS para renomear colunas",
            "Comentários SQL e boas práticas de legibilidade",
          ],
        },
        {
          title: "Agregação e GROUP BY",
          topics: [
            "COUNT, SUM, AVG, MIN e MAX em consultas reais",
            "GROUP BY para agrupar resultados por categoria",
            "HAVING para filtrar grupos após a agregação",
            "DISTINCT para eliminar valores duplicados",
            "Combinando WHERE, GROUP BY e HAVING em uma só query",
          ],
        },
        {
          title: "JOINs e Relacionamentos entre Tabelas",
          topics: [
            "INNER JOIN: combinando tabelas por chaves relacionadas",
            "LEFT JOIN e RIGHT JOIN com exemplos práticos de uso",
            "Realizando múltiplos JOINs em uma única consulta",
            "Subqueries simples com IN e EXISTS",
            "Quando usar JOIN vs subquery: comparando abordagens",
          ],
        },
        {
          title: "Manipulação de Dados, Estrutura e Transações",
          topics: [
            "INSERT INTO: inserindo registros com segurança",
            "UPDATE e DELETE com WHERE: atualizando e removendo sem apagar dados errados",
            "CREATE TABLE com restrições NOT NULL, UNIQUE e DEFAULT",
            "ALTER TABLE: adicionando colunas e boas práticas de migração",
            "Transactions com COMMIT e ROLLBACK: garantindo consistência nas operações",
          ],
        },
        {
          title: "Consultas Avançadas: CTEs, Window Functions e Performance",
          topics: [
            "CTEs com WITH: tornando queries complexas mais legíveis",
            "Window Functions: ROW_NUMBER, RANK, LAG, LEAD e PARTITION BY",
            "Subqueries correlacionadas para cálculos dependentes de linha",
            "EXPLAIN ANALYZE: lendo o plano de execução e identificando gargalos",
            "Criando e otimizando índices para acelerar consultas",
          ],
        },
        {
          title: "Modelagem e Design de Banco de Dados",
          topics: [
            "Modelagem entidade-relacionamento (ER) com dbdiagram.io",
            "Normalização 1FN, 2FN e 3FN com exemplos reais",
            "Desnormalização: quando violar as formas normais faz sentido",
            "Views e Stored Procedures para consultas reutilizáveis, com introdução a Triggers para automações simples",
            "Criando e documentando um schema do zero para um sistema real",
          ],
        },
        {
          title: "SQL para Análise de Dados e Panorama Além do Relacional",
          topics: [
            "Conectando o banco de dados ao Power BI via SQL nativo",
            "Exportando resultados para Python com pandas para análises mais avançadas",
            "Segurança essencial: SQL Injection, permissões com GRANT/REVOKE e backup do banco",
            "NoSQL na prática: uma introdução a MongoDB e Redis e quando cada um resolve melhor que o relacional",
            "Panorama do mercado: cloud (BigQuery, Supabase), pipelines com Python, dbt e Airflow, e IA aplicada a SQL como próximos passos de especialização",
            "Projeto final: modelando, populando e consultando um banco de dados completo, com dashboard conectado ao Power BI",
          ],
        },
      ],
      tools: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "DBeaver",
        "MySQL Workbench",
        "pgAdmin",
        "dbdiagram.io",
        "Power BI",
        "Python (pandas)",
        "MongoDB",
        "Redis",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber programar pra aprender SQL?",
      a: "Não. O curso começa do zero absoluto — o que é uma tabela, chave primária e estrangeira, tipos de dados — pensado pra quem hoje só usa planilhas e quer consultar dados diretamente no banco sem depender de outra pessoa.",
    },
    {
      q: "O curso ensina a conectar SQL com Power BI e Python?",
      a: "Sim. Você conecta o banco de dados ao Power BI via SQL nativo e exporta resultados para Python com pandas para análises mais avançadas. O curso também traz uma introdução prática a bancos NoSQL e um panorama de cloud e IA aplicada a SQL, como direção para quem quiser se especializar depois.",
    },
  ],
}

function SqlPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
