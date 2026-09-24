import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/python")({
  component: PythonPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Python para Automações Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Python do zero e automatize planilhas, e-mails, relatórios e processos repetitivos. Aulas individuais, horário flexível e 100% prático em Ribeirão Preto.",
      path: "/particular/cursos/python",
    }),
})

const COURSE_DATA = {
  nome: "Python para Automações",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "python",
  tagline:
    "Automatize tarefas repetitivas e libere horas do seu dia com Python",
  targetAudience: [
    "Você perde horas por semana copiando dados entre planilhas Excel manualmente",
    "Você trabalha em financeiro, RH, operações ou marketing e quer automatizar relatórios",
    "Você quer aprender programação com foco em resultados práticos imediatos",
    "Você é analista de dados e quer ir além do Excel com código real",
    "Você quer criar bots e scripts que trabalhem enquanto você dorme",
    "Você busca uma segunda habilidade para aumentar seu valor no mercado",
  ],
  tiers: [
    {
      levelName: "Python para Automações",
      totalHours: "48h",
      outcome:
        "Programar em Python do zero absoluto até automações completas de ponta a ponta — planilhas com openpyxl, e-mails e notificações, web scraping com Playwright, análise de dados com Pandas, integração com APIs REST e automação inteligente com IA generativa —, pronto para eliminar tarefas repetitivas do financeiro, RH, operações ou marketing e agregar uma segunda habilidade de peso no mercado.",
      modules: [
        {
          title: "Python do Zero ao Script Funcional",
          topics: [
            "Instalação do Python e VS Code com extensões",
            "Variáveis, tipos de dados e operadores",
            "Condicionais (if/elif/else) e loops (for/while)",
            "Funções: definição, parâmetros e retorno",
            "Listas, tuplas, dicionários e sets na prática",
            "Leitura e escrita de arquivos .txt e .csv com open()",
          ],
        },
        {
          title: "Automação de Planilhas com openpyxl",
          topics: [
            "Instalar bibliotecas com pip e gerenciar ambientes virtuais",
            "Ler e escrever dados em arquivos .xlsx",
            "Formatar células, aplicar cores e ajustar colunas",
            "Criar fórmulas Excel via código Python",
            "Gerar relatórios automáticos a partir de dados brutos",
            "Projeto: relatório de vendas gerado automaticamente",
          ],
        },
        {
          title: "Automação de E-mails, Notificações e Agendamento",
          topics: [
            "Enviar e-mails com smtplib e anexos",
            "Templates de e-mail com variáveis dinâmicas",
            "Leitura de caixa de entrada com imaplib",
            "Envio de mensagens via API do Telegram Bot",
            "Agendamento de scripts com schedule, com introdução a APScheduler e crontab para rodar em produção",
          ],
        },
        {
          title: "Web Scraping com Requests, BeautifulSoup e Playwright",
          topics: [
            "Como funciona o HTML e inspecionar páginas no browser",
            "Requisições HTTP com requests (GET, POST, headers) e parsing com BeautifulSoup",
            "Playwright: navegar, clicar, preencher formulários e lidar com páginas dinâmicas (JavaScript)",
            "Capturar screenshots e gerar PDFs automáticos",
            "Robots.txt e boas práticas de scraping responsável",
            "Projeto: coletor automático de preços e dados de um site",
          ],
        },
        {
          title: "Análise de Dados com Pandas",
          topics: [
            "DataFrames: criar, importar (CSV, Excel, JSON) e exportar",
            "Filtrar, agrupar e ordenar dados com groupby e sort_values",
            "Limpeza de dados: valores nulos, duplicatas, tipos incorretos",
            "Cruzar tabelas com merge e join",
            "Visualização básica com Matplotlib",
            "Projeto: dashboard de análise financeira em Excel",
          ],
        },
        {
          title: "Integração com APIs REST e Automação Robusta",
          topics: [
            "Conceito de API REST: endpoints, verbos HTTP e status codes",
            "Autenticar com API Key e Bearer Token",
            "Consumir APIs externas: Google Sheets API, OpenAI API, Notion API",
            "Tratamento de erros com try/except e logging estruturado",
            "Projeto: automação que lê planilha, consulta uma API externa e grava o resultado",
          ],
        },
        {
          title: "Automação Inteligente com IA Generativa",
          topics: [
            "Integrar a OpenAI API (GPT-4o) em scripts Python",
            "Extração estruturada de dados de PDFs e e-mails com LLM + Pydantic",
            "Prompts eficazes para classificação, resumo e resposta automática",
            "Panorama de frameworks de agentes (LangChain e afins) para quem quiser ir além",
            "Projeto final: pipeline que lê e-mails ou documentos, classifica com IA e responde automaticamente",
          ],
        },
      ],
      tools: [
        "Python 3.12",
        "VS Code",
        "openpyxl",
        "smtplib",
        "schedule",
        "pip",
        "Requests",
        "BeautifulSoup",
        "Playwright",
        "Pandas",
        "Matplotlib",
        "Google Sheets API",
        "OpenAI API",
        "Pydantic",
      ],
    },
  ],
  faqItems: [
    {
      q: "Nunca programei — consigo aprender Python do zero nesse curso?",
      a: "Sim. O curso começa do absoluto zero: instalação do Python, variáveis, condicionais, loops e funções, antes de partir pra automação de planilhas e e-mails.",
    },
    {
      q: "Trabalho com financeiro, RH ou operações — esse curso serve pra automatizar relatórios do meu setor?",
      a: "Sim, é um dos focos principais do curso. Você aprende a automatizar geração de relatórios, planilhas e notificações — reduzindo o trabalho manual repetitivo dessas áreas.",
    },
  ],
}

function PythonPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
