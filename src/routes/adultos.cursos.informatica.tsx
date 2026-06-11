import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/informatica")({
  component: InformaticaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Informática para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Domine o computador, o pacote Office e as ferramentas de IA em aulas presenciais individuais. Do básico ao avançado, do zero ao mercado de trabalho.",
      path: "/adultos/cursos/informatica",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Informática Básica, Intermediária e Avançada",
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
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Usar o computador com autonomia no dia a dia: navegar, criar arquivos, escrever documentos simples e se comunicar por e-mail e plataformas digitais sem precisar pedir ajuda",
      modules: [
        {
          title: "Hardware e Sistema Operacional Windows",
          topics: [
            "Partes físicas do computador: processador, memória RAM, SSD e placa-mãe",
            "Diferenças entre desktop, notebook e tablets — o que cada um serve",
            "Ligar, desligar, reiniciar e o modo avião: sem medo do botão de power",
            "Área de trabalho do Windows 11: barra de tarefas, menu Iniciar e atalhos essenciais",
            "Gerenciador de arquivos: criar, renomear, mover, copiar e excluir pastas e arquivos",
            "Instalar e desinstalar programas com segurança",
            "Configurações básicas: data/hora, brilho, volume, resolução e idioma",
          ],
        },
        {
          title: "Internet e Segurança Digital",
          topics: [
            "Como funciona a internet: Wi-Fi, cabo, roteador e dados móveis",
            "Navegador Google Chrome: abas, favoritos, histórico e atalhos de teclado",
            "Google como ferramenta de pesquisa avançada: filtros de data, tipo de arquivo e site específico",
            "Gmail: criar conta, enviar, responder, encaminhar e organizar e-mails com pastas e etiquetas",
            "Golpes digitais: como identificar phishing, links suspeitos e senhas seguras",
            "Downloads seguros: onde baixar, onde não baixar e como checar a fonte",
          ],
        },
        {
          title: "Digitação e Produtividade no Teclado",
          topics: [
            "Posição correta das mãos: home row e teclas de função (F1–F12, Delete, Backspace, Enter)",
            "Atalhos essenciais do Windows: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S, Alt+Tab, Win+D",
            "Acentuação correta no teclado ABNT2: agudo, crase, til e cedilha",
            "Prática de digitação com foco em velocidade e precisão usando o TypingClub",
            "Captura de tela: Print Screen, Snipping Tool e atalho Win+Shift+S",
          ],
        },
      ],
      tools: ["Windows 11", "Google Chrome", "Gmail", "TypingClub"],
    },
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Criar documentos, planilhas e apresentações profissionais no Microsoft Office e no Google Workspace, e se comunicar e colaborar com equipes em ambiente digital com competência real",
      modules: [
        {
          title: "Hardware e Sistema Operacional Windows",
          topics: [
            "Partes físicas do computador: processador, memória RAM, SSD e placa-mãe",
            "Diferenças entre desktop, notebook e tablets — o que cada um serve",
            "Ligar, desligar, reiniciar e o modo avião: sem medo do botão de power",
            "Área de trabalho do Windows 11: barra de tarefas, menu Iniciar e atalhos essenciais",
            "Gerenciador de arquivos: criar, renomear, mover, copiar e excluir pastas e arquivos",
            "Instalar e desinstalar programas com segurança",
            "Configurações básicas: data/hora, brilho, volume, resolução e idioma",
          ],
        },
        {
          title: "Internet e Segurança Digital",
          topics: [
            "Como funciona a internet: Wi-Fi, cabo, roteador e dados móveis",
            "Navegador Google Chrome: abas, favoritos, histórico e atalhos de teclado",
            "Google como ferramenta de pesquisa avançada: filtros de data, tipo de arquivo e site específico",
            "Gmail: criar conta, enviar, responder, encaminhar e organizar e-mails com pastas e etiquetas",
            "Golpes digitais: como identificar phishing, links suspeitos e senhas seguras",
            "Downloads seguros: onde baixar, onde não baixar e como checar a fonte",
          ],
        },
        {
          title: "Digitação e Produtividade no Teclado",
          topics: [
            "Posição correta das mãos: home row e teclas de função (F1–F12, Delete, Backspace, Enter)",
            "Atalhos essenciais do Windows: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S, Alt+Tab, Win+D",
            "Acentuação correta no teclado ABNT2: agudo, crase, til e cedilha",
            "Prática de digitação com foco em velocidade e precisão usando o TypingClub",
            "Captura de tela: Print Screen, Snipping Tool e atalho Win+Shift+S",
          ],
        },
        {
          title: "Microsoft Word e Google Docs",
          topics: [
            "Criar, salvar e exportar documentos em .docx e PDF",
            "Formatação de texto: fonte, tamanho, negrito, itálico, alinhamento e espaçamento",
            "Estilos de parágrafo, cabeçalhos e sumário automático",
            "Inserir tabelas, imagens e hiperlinks em documentos",
            "Controle de alterações, comentários e revisão colaborativa no Google Docs",
            "Modelos prontos: currículo, ofício, ata de reunião e carta de apresentação",
          ],
        },
        {
          title: "Microsoft Excel e Google Planilhas — Fundamentos",
          topics: [
            "Estrutura da planilha: células, linhas, colunas e guias de planilha",
            "Formatação de células: número, moeda, data e percentual",
            "Fórmulas essenciais: SOMA, MÉDIA, MÁXIMO, MÍNIMO e CONT.VALORES",
            "Criar tabelas formatadas e classificar/filtrar dados",
            "Gráficos de coluna, pizza e linha para apresentar resultados visualmente",
            "Planilha de controle financeiro pessoal: receitas, despesas e saldo",
          ],
        },
        {
          title: "Microsoft PowerPoint e Google Apresentações",
          topics: [
            "Criar apresentação do zero: layout, tema e esquema de cores",
            "Inserir textos, imagens, ícones e formas com design limpo",
            "Animações e transições: usar com moderação e propósito",
            "Modo apresentador: notas, cronômetro e controle remoto",
            "Exportar em PDF e publicar no Google Apresentações para compartilhamento",
            "Projeto final: apresentação de 8 slides sobre um tema profissional real",
          ],
        },
        {
          title: "Google Workspace: Drive, Meet e Calendário",
          topics: [
            "Google Drive: organizar arquivos em nuvem, compartilhar com permissões e trabalhar offline",
            "Google Agenda: criar eventos, configurar lembretes e compartilhar agenda com colegas",
            "Google Meet: entrar em reuniões, compartilhar tela, ativar legenda automática e gravar",
            "Notion para organização pessoal: páginas, listas de tarefa e banco de dados simples",
            "Integração entre ferramentas: Gmail + Agenda + Drive + Meet no dia a dia",
          ],
        },
        {
          title: "Manutenção Básica e Autonomia Digital",
          topics: [
            "Limpeza de arquivos temporários e desfragmentação do SSD",
            "Gerenciador de Tarefas: identificar processos que travam o computador",
            "Windows Update: por que atualizar e como configurar atualizações automáticas",
            "Backup: cópias de segurança no HD externo e no Google Drive",
            "O que é formatar um computador e quando vale a pena",
            "Suporte técnico remoto: como compartilhar acesso com segurança usando Quick Assist",
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
        "TypingClub",
      ],
    },
    {
      label: "3 meses",
      levelName: "Profissional + IA",
      totalHours: "60h",
      outcome:
        "Dominar o computador, o pacote Office e as ferramentas de IA de produtividade com fluência profissional — e entregar um projeto final real que demonstra as competências para o mercado de trabalho",
      modules: [
        {
          title: "Hardware e Sistema Operacional Windows",
          topics: [
            "Partes físicas do computador: processador, memória RAM, SSD e placa-mãe",
            "Diferenças entre desktop, notebook e tablets — o que cada um serve",
            "Ligar, desligar, reiniciar e o modo avião: sem medo do botão de power",
            "Área de trabalho do Windows 11: barra de tarefas, menu Iniciar e atalhos essenciais",
            "Gerenciador de arquivos: criar, renomear, mover, copiar e excluir pastas e arquivos",
            "Instalar e desinstalar programas com segurança",
            "Configurações básicas: data/hora, brilho, volume, resolução e idioma",
          ],
        },
        {
          title: "Internet, Segurança Digital e Digitação",
          topics: [
            "Navegador Google Chrome: abas, favoritos, histórico e atalhos de teclado",
            "Pesquisa avançada no Google: filtros, operadores e verificação de fontes",
            "Gmail avançado: filtros automáticos, respostas padrão e assinatura profissional",
            "Golpes digitais e engenharia social: como se proteger no trabalho",
            "Atalhos essenciais do Windows e digitação produtiva com TypingClub",
            "Captura e edição básica de tela: Snipping Tool e Paint",
          ],
        },
        {
          title: "Microsoft Word e Google Docs — Do Básico ao Avançado",
          topics: [
            "Criar, salvar e exportar documentos em .docx e PDF",
            "Formatação avançada: estilos, cabeçalhos, rodapés e numeração de páginas",
            "Sumário automático, referências cruzadas e marcadores de página",
            "Mala direta (Mail Merge): gerar documentos personalizados em lote",
            "Controle de alterações, comentários e revisão colaborativa",
            "Modelos profissionais: relatório, proposta comercial, ata e ofício",
          ],
        },
        {
          title: "Microsoft Excel e Google Planilhas — Do Básico ao Avançado",
          topics: [
            "Fórmulas essenciais: SOMA, MÉDIA, SE, CONT.SE, SOMASE e PROCV",
            "PROCX e fórmulas modernas que substituem o PROCV no Excel 365",
            "Tabelas dinâmicas: resumir e analisar grandes volumes de dados",
            "Gráficos avançados: combinados, com linha de tendência e gráficos de rosca",
            "Formatação condicional: destacar automaticamente dados críticos",
            "Planilha de gestão financeira: orçamento, DRE simplificado e painel de indicadores",
            "Validação de dados e proteção de células para formulários profissionais",
          ],
        },
        {
          title: "Microsoft PowerPoint e Google Apresentações — Design Profissional",
          topics: [
            "Princípios de design para apresentações: contraste, alinhamento e hierarquia visual",
            "Slide Master: criar um template padrão da empresa ou pessoal",
            "Animações de entrada e de trajetória com timing profissional",
            "Infográficos no PowerPoint: gráficos SmartArt e formas combinadas",
            "Exportar em formato interativo e publicar na nuvem para acesso pelo link",
            "Projeto: deck de 12 slides para apresentação de resultado ou proposta comercial",
          ],
        },
        {
          title: "Inteligência Artificial Aplicada à Produtividade",
          topics: [
            "ChatGPT e Microsoft Copilot: criar textos, resumir documentos e responder e-mails com IA",
            "Copilot no Word: gerar rascunhos, reformular parágrafos e revisar gramática automaticamente",
            "Copilot no Excel: criar fórmulas complexas descrevendo o que você quer em português",
            "Copilot no PowerPoint: gerar slides e sugerir layouts a partir de um documento",
            "Google Gemini: pesquisa inteligente, resumo de páginas e integração com Google Workspace",
            "Boas práticas de prompts: como dar instruções claras para obter resultados realmente úteis",
            "Limites e cuidados da IA: o que verificar sempre antes de usar uma resposta gerada",
          ],
        },
        {
          title: "Google Workspace Avançado e Automações Simples",
          topics: [
            "Google Drive: permissões avançadas, versões de arquivo e pesquisa por conteúdo",
            "Google Formulários: criar pesquisas, vincular respostas a planilhas e gerar relatórios",
            "Google Agenda: agendamento de reuniões com disponibilidade e integração com Meet",
            "Notion avançado: banco de dados com filtros, visão kanban e integração com Google Drive",
            "Automações com Google Apps Script: enviar e-mail automático quando planilha é atualizada",
            "Zapier no modo gratuito: conectar Gmail, Google Sheets e WhatsApp Business sem código",
          ],
        },
        {
          title: "Projeto Final: Pacote Profissional Completo",
          topics: [
            "Definir um tema real: candidatura a emprego, gestão do próprio negócio ou relatório de área",
            "Criar um currículo no Word com design profissional e palavras-chave para ATS",
            "Montar uma planilha de controle (financeiro, vendas ou estoque) com fórmulas e gráfico",
            "Preparar uma apresentação de 10 slides com Slide Master e animações moderadas",
            "Organizar tudo no Google Drive com estrutura de pastas e compartilhamento correto",
            "Usar IA para revisar os documentos e gerar versões alternativas de texto",
            "Apresentar o pacote ao professor com defesa de escolhas de design e conteúdo",
          ],
        },
      ],
      tools: [
        "Windows 11",
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Google Workspace",
        "ChatGPT",
        "Microsoft Copilot",
        "Google Gemini",
        "Notion",
        "Zapier",
        "TypingClub",
      ],
    },
  ],
}

function InformaticaPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
