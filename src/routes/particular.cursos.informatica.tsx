import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/informatica")({
  component: InformaticaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Informática Particular em Ribeirão Preto — Santos Tech",
      description:
        "Domine o computador, o pacote Office e as ferramentas de IA em aulas presenciais individuais. Do básico ao avançado, do zero ao mercado de trabalho.",
      path: "/particular/cursos/informatica",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Informática",
  categoria: "Informática",
  tagline: "De zero ao computador dominado — com confiança e autonomia real",
  targetAudience: [
    "Você nunca usou computador ou usa só o básico e quer parar de depender de outras pessoas para tarefas simples",
    "Você perdeu ou não consegue emprego porque o recrutador pede 'informática básica' e você não tem essa habilidade",
    "Você tem mais de 30 anos e sente que o mundo digital passou na sua frente sem que te ensinassem",
    "Você usa o celular bem, mas na hora do computador trava — e precisa dominar isso para trabalhar",
    "Você quer aprender Word, Excel e PowerPoint para atender os requisitos de vagas administrativas",
    "Você é autônomo ou empreendedor e precisa de informática para gerir o próprio negócio com mais independência",
  ],
  tiers: [
    {
      levelName: "Informática",
      ctaLabel: "curso de Informática",
      totalHours: "48h",
      outcome:
        "Dominar o computador do zero absoluto — hardware, Windows 11, internet e digitação — até o pacote Office, o Google Workspace e as ferramentas de IA como Copilot e Gemini com fluência profissional, entregando um projeto final real que demonstra as competências para o mercado de trabalho",
      modules: [
        {
          title: "Hardware, Sistema Operacional Windows e Manutenção",
          topics: [
            "Partes físicas do computador: processador, memória RAM, SSD e placa-mãe — e as diferenças entre desktop, notebook e tablet",
            "Ligar, desligar, reiniciar, modo avião e a área de trabalho do Windows 11: barra de tarefas, menu Iniciar e atalhos essenciais (Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S, Alt+Tab, Win+D)",
            "Gerenciador de arquivos: criar, renomear, mover, copiar e excluir pastas e arquivos; instalar e desinstalar programas com segurança",
            "Configurações básicas (data/hora, brilho, volume, resolução, idioma) e manutenção do Windows: limpeza de arquivos temporários, desfragmentação do SSD e Gerenciador de Tarefas",
            "Windows Update, backup em HD externo e no Google Drive, o que é formatar o computador e suporte técnico remoto com Quick Assist",
          ],
        },
        {
          title: "Internet, Segurança Digital e Digitação",
          topics: [
            "Como funciona a internet (Wi-Fi, cabo, roteador, dados móveis) e navegação no Google Chrome: abas, favoritos, histórico e atalhos de teclado",
            "Pesquisa avançada no Google: filtros de data, tipo de arquivo, site específico e operadores de busca",
            "Gmail do básico ao avançado: criar conta, enviar, responder e encaminhar e-mails, organizar com pastas e etiquetas, filtros automáticos, respostas padrão e assinatura profissional",
            "Golpes digitais e engenharia social: phishing, links suspeitos, senhas seguras, downloads seguros e como se proteger no ambiente de trabalho",
            "Digitação no TypingClub: posição correta das mãos (home row), teclas de função (F1–F12, Delete, Backspace, Enter), velocidade, precisão e acentuação no teclado ABNT2 (agudo, crase, til, cedilha)",
            "Captura e edição básica de tela: Print Screen, Snipping Tool, atalho Win+Shift+S e Paint",
          ],
        },
        {
          title: "Microsoft Word e Google Docs — do Básico ao Avançado",
          topics: [
            "Criar, salvar e exportar documentos em .docx e PDF",
            "Formatação de texto: fonte, tamanho, negrito, itálico, alinhamento e espaçamento",
            "Estilos de parágrafo, cabeçalhos, rodapés, numeração de páginas, sumário automático, referências cruzadas e marcadores de página",
            "Inserir tabelas, imagens e hiperlinks em documentos",
            "Mala direta (Mail Merge): gerar documentos personalizados em lote",
            "Controle de alterações, comentários e revisão colaborativa no Google Docs",
            "Modelos profissionais: currículo, ofício, ata de reunião, relatório, proposta comercial e carta de apresentação",
          ],
        },
        {
          title: "Microsoft Excel e Google Planilhas — do Básico ao Avançado",
          topics: [
            "Estrutura da planilha (células, linhas, colunas e guias) e formatação de número, moeda, data e percentual",
            "Fórmulas essenciais: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, SE, CONT.SE e SOMASE",
            "PROCV, PROCX e as fórmulas modernas que substituem o PROCV no Excel 365",
            "Criar tabelas formatadas, classificar e filtrar dados, e tabelas dinâmicas para analisar grandes volumes",
            "Gráficos de coluna, pizza, linha, combinados, com linha de tendência e gráficos de rosca",
            "Formatação condicional, validação de dados e proteção de células para formulários profissionais",
            "Planilha de gestão financeira: controle pessoal (receitas, despesas e saldo), orçamento, DRE simplificado e painel de indicadores",
          ],
        },
        {
          title: "Microsoft PowerPoint e Google Apresentações — Design Profissional",
          topics: [
            "Criar apresentação do zero: layout, tema, esquema de cores e princípios de design (contraste, alinhamento e hierarquia visual)",
            "Inserir textos, imagens, ícones, formas e infográficos com SmartArt e design limpo",
            "Slide Master: criar um template padrão da empresa ou pessoal",
            "Animações e transições de entrada e trajetória com timing profissional, usadas com moderação e propósito",
            "Modo apresentador (notas, cronômetro, controle remoto) e exportação em PDF, formato interativo e nuvem para compartilhamento",
            "Projeto final: deck de até 12 slides sobre um tema profissional real — apresentação de resultado ou proposta comercial",
          ],
        },
        {
          title: "Google Workspace, Automações e Inteligência Artificial Aplicada",
          topics: [
            "Google Drive: organizar arquivos em nuvem, permissões avançadas, versões de arquivo, pesquisa por conteúdo e trabalho offline",
            "Google Agenda e Google Meet: eventos, lembretes, agendamento de reuniões com disponibilidade, compartilhamento de tela, legenda automática e gravação",
            "Google Formulários e Notion: pesquisas vinculadas a planilhas, páginas, listas de tarefas e banco de dados com filtros e visão kanban",
            "Automações sem código: Google Apps Script (e-mail automático ao atualizar planilha) e Zapier conectando Gmail, Sheets e WhatsApp Business",
            "ChatGPT, Microsoft Copilot e Google Gemini: criar e resumir textos, responder e-mails, pesquisar e gerar rascunhos, fórmulas e slides direto no Word, Excel e PowerPoint",
            "Boas práticas e limites da IA: como escrever prompts claros e o que verificar antes de usar uma resposta gerada",
            "Projeto final com tema real (candidatura a emprego, gestão do próprio negócio ou relatório de área): currículo, planilha de controle e apresentação reunidos em um pacote profissional único, organizado no Drive, revisado com IA e apresentado ao professor",
          ],
        },
      ],
      tools: [
        "Windows 11",
        "Google Chrome",
        "Gmail",
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Google Workspace",
        "Notion",
        "ChatGPT",
        "Microsoft Copilot",
        "Google Gemini",
        "Zapier",
        "TypingClub",
      ],
    },
  ],
  faqItems: [
    {
      q: "Nunca usei computador — consigo acompanhar esse curso?",
      a: "Sim, o curso foi desenhado exatamente para isso. Você começa do zero absoluto: ligar e desligar o computador, entender as partes físicas da máquina, navegar no Windows 11 e usar a internet com segurança, sem pressa e sem julgamento.",
    },
    {
      q: "Uso bem o celular mas travo na hora do computador — isso é normal?",
      a: "É mais comum do que parece, e o curso foi pensado justamente para esse perfil. Muita gente domina o celular no dia a dia mas nunca teve alguém para ensinar o computador com calma — o curso cobre esse caminho desde o básico até o nível que o mercado de trabalho exige.",
    },
  ],
}

function InformaticaPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
