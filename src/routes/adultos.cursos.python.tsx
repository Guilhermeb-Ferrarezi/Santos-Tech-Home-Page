import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/python")({
  component: PythonPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Python para Automações para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Python do zero e automatize planilhas, e-mails, relatórios e processos repetitivos. Aulas individuais, horário flexível e 100% prático em Ribeirão Preto.",
      path: "/adultos/cursos/python",
    }),
})

const COURSE_DATA = {
  nome: "Python para Automações",
  categoria: "Programação",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Capaz de escrever scripts Python para manipular arquivos, automatizar tarefas no Excel com openpyxl e enviar e-mails programaticamente",
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
          title: "Automação de E-mails e Notificações",
          topics: [
            "Enviar e-mails com smtplib e anexos",
            "Templates de e-mail com variáveis dinâmicas",
            "Leitura de caixa de entrada com imaplib",
            "Envio de mensagens via API do Telegram Bot",
            "Agendamento básico de scripts com schedule",
          ],
        },
      ],
      tools: ["Python 3.12", "VS Code", "openpyxl", "smtplib", "schedule", "pip"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Desenvolve bots de web scraping com Selenium e Playwright, processa dados com Pandas e integra com APIs REST externas, entregando um dashboard de monitoramento automatizado",
      modules: [
        {
          title: "Web Scraping com BeautifulSoup e Requests",
          topics: [
            "Como funciona o HTML e inspecionar páginas no browser",
            "Fazer requisições HTTP com requests: GET, POST, headers",
            "Parsear HTML com BeautifulSoup: find, find_all, select",
            "Extrair dados de tabelas, listas e cards",
            "Respeitar robots.txt e boas práticas de scraping",
            "Salvar dados extraídos em CSV e JSON",
          ],
        },
        {
          title: "Automação de Navegador com Playwright",
          topics: [
            "Diferença entre Selenium e Playwright em 2025",
            "Instalar e configurar Playwright no Python",
            "Navegar, clicar, preencher formulários e fazer login",
            "Lidar com páginas dinâmicas (JavaScript renderizado)",
            "Capturar screenshots e gerar PDFs automáticos",
            "Projeto: coletor de preços de produtos em e-commerce",
          ],
        },
        {
          title: "Análise de Dados com Pandas",
          topics: [
            "DataFrames: criar, importar (CSV, Excel, JSON) e exportar",
            "Filtrar, agrupar e ordenar dados com groupby e sort_values",
            "Limpeza de dados: valores nulos, duplicatas, tipos incorretos",
            "Cruzar tabelas com merge e join",
            "Visualização básica com matplotlib e seaborn",
            "Projeto: análise de relatório financeiro com dashboard em Excel",
          ],
        },
        {
          title: "Integração com APIs REST",
          topics: [
            "Conceito de API REST, endpoints, verbos HTTP e status codes",
            "Autenticar com API Key e Bearer Token",
            "Consumir APIs: Google Sheets API, OpenAI API, Notion API",
            "Manipular JSON de resposta e tratar erros de rede",
            "Criar automação que lê planilha e posta em API externa",
          ],
        },
      ],
      tools: [
        "Pandas",
        "Playwright",
        "BeautifulSoup",
        "Requests",
        "Matplotlib",
        "Google Sheets API",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional",
      totalHours: "72h",
      outcome:
        "Arquiteta automações robustas e escaláveis com tratamento de erros, logging e agendamento em servidor; cria APIs com FastAPI; integra IA generativa (OpenAI) em pipelines de automação e entrega um projeto completo deployado",
      modules: [
        {
          title: "Automação Robusta: Erros, Logs e Agendamento",
          topics: [
            "Try/except: capturar erros específicos e genéricos",
            "Logging profissional com o módulo logging",
            "Retries automáticos com tenacity",
            "Agendamento avançado com APScheduler e crontab no Linux",
            "Enviar alertas por e-mail ou Telegram quando um script falha",
            "Dockerizar um script Python para rodar em VPS",
          ],
        },
        {
          title: "Automação Desktop com PyAutoGUI",
          topics: [
            "Controlar mouse e teclado com PyAutoGUI",
            "Reconhecimento de imagens na tela com locateOnScreen",
            "Automação de sistemas legados sem API",
            "Interagir com aplicativos Windows via win32com (Excel, Word, Outlook)",
            "Projeto: RPA de preenchimento de formulário em sistema desktop",
          ],
        },
        {
          title: "Criando APIs com FastAPI",
          topics: [
            "Conceito de API e quando criar a sua própria",
            "Estrutura de um projeto FastAPI",
            "Rotas GET, POST, PUT, DELETE com tipagem Pydantic",
            "Documentação automática com Swagger UI",
            "Conectar FastAPI a banco de dados SQLite com SQLModel",
            "Deploy da API no Railway ou Render",
          ],
        },
        {
          title: "IA Generativa em Pipelines de Automação",
          topics: [
            "Integrar OpenAI API (GPT-4o) em scripts Python",
            "Classificar e resumir documentos automaticamente com IA",
            "Extrair dados estruturados de PDFs e e-mails com LLM",
            "Criar agente simples com memória usando LangChain",
            "Projeto: bot que lê e-mails, classifica e responde automaticamente com IA",
          ],
        },
        {
          title: "Projeto Final: Automação End-to-End",
          topics: [
            "Levantamento de requisitos de uma automação real",
            "Arquitetura da solução: scraping + processamento + API + notificação",
            "Versionamento com Git e GitHub",
            "Deploy em VPS (Ubuntu) com systemd ou Docker",
            "Documentação técnica e entrega para o cliente/empresa",
          ],
        },
      ],
      tools: [
        "FastAPI",
        "PyAutoGUI",
        "APScheduler",
        "Docker",
        "OpenAI API",
        "LangChain",
        "Railway",
      ],
    },
  ],
}

function PythonPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
