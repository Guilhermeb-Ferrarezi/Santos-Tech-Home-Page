import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/suporte")({
  component: SuportePage,
  head: () =>
    pageMeta({
      title:
        "Curso de Suporte Técnico / Help Desk para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Entre na área de TI em até 60 dias: hardware, redes, Active Directory e ticketing. Prepare-se para a certificação CompTIA A+ com aulas individuais e presenciais.",
      path: "/adultos/cursos/suporte",
    }),
})

const COURSE_DATA = {
  nome: "Suporte Técnico / Help Desk",
  categoria: "T.I",
  tagline: "Do atendimento ao primeiro emprego em TI em 60 dias",
  targetAudience: [
    "Quer entrar na área de TI mas não sabe por onde começar",
    "Trabalha em outra área e quer migrar para tecnologia ainda este ano",
    "Já faz pequenos consertos e quer formalizar o conhecimento",
    "Busca a primeira certificação reconhecida pelo mercado (CompTIA A+)",
    "Precisa de um curso com saída de emprego rápida e demanda garantida",
    "Quer trabalhar em empresas de médio e grande porte como analista de suporte",
  ],
  tiers: [
    {
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Atender chamados básicos, instalar sistemas e periféricos, e entender o fluxo de um Help Desk",
      modules: [
        {
          title: "Fundamentos de Hardware",
          topics: [
            "Identificação e função de cada componente do PC (CPU, RAM, SSD, placa-mãe)",
            "Tipos de conectores: USB-A/C, HDMI, DisplayPort, RJ-45, SATA, M.2",
            "Periféricos: impressoras, scanners, monitores — configuração e drivers",
            "Diagnóstico de falhas: POST, beep codes e leds de erro",
          ],
        },
        {
          title: "Sistemas Operacionais na Prática",
          topics: [
            "Windows 10/11: instalação limpa e particionamento de disco",
            "Gerenciador de tarefas, serviços e inicialização automática",
            "Prompt de comando essencial: ipconfig, ping, tracert, sfc /scannow",
            "Perfis de usuário, UAC e permissões básicas de arquivos",
          ],
        },
        {
          title: "Atendimento e Ticketing",
          topics: [
            "Fluxo de um chamado: abertura, triagem, resolução e encerramento",
            "Introdução ao Freshdesk e ao Jira Service Management (hands-on)",
            "Comunicação técnica com usuário final sem jargões",
            "SLA: o que é, por que importa e como cumprir",
          ],
        },
      ],
      tools: ["Freshdesk", "Windows 10/11", "Prompt de Comando"],
    },
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Atuar como técnico N1/N2, resolver problemas de rede local, gerenciar Active Directory e documentar soluções",
      modules: [
        {
          title: "Fundamentos de Hardware",
          topics: [
            "Identificação e função de cada componente do PC (CPU, RAM, SSD, placa-mãe)",
            "Tipos de conectores: USB-A/C, HDMI, DisplayPort, RJ-45, SATA, M.2",
            "Periféricos: impressoras, scanners, monitores — configuração e drivers",
            "Diagnóstico de falhas: POST, beep codes e leds de erro",
          ],
        },
        {
          title: "Sistemas Operacionais na Prática",
          topics: [
            "Windows 10/11: instalação limpa e particionamento de disco",
            "Gerenciador de tarefas, serviços e inicialização automática",
            "Prompt de comando essencial: ipconfig, ping, tracert, sfc /scannow",
            "Perfis de usuário, UAC e permissões básicas de arquivos",
          ],
        },
        {
          title: "Redes para Suporte",
          topics: [
            "Modelo OSI na prática: onde ocorre cada tipo de problema",
            "IP, máscara de sub-rede, gateway e DNS — configuração manual e DHCP",
            "Wi-Fi: padrões 802.11ac/ax, canais, interferência e troubleshooting",
            "Ferramentas: Wireshark (captura básica), Advanced IP Scanner, nmap",
          ],
        },
        {
          title: "Active Directory e Ambientes Corporativos",
          topics: [
            "Usuários, grupos e unidades organizacionais no AD",
            "GPO: aplicação de políticas de segurança na rede",
            "Microsoft 365 Admin Center: criação de usuários e licenças",
            "Remote Desktop e TeamViewer para suporte remoto",
          ],
        },
        {
          title: "Atendimento e Ticketing Avançado",
          topics: [
            "Jira Service Management: filas, prioridades e escalação",
            "Base de conhecimento: como escrever um artigo de solução",
            "Métricas de suporte: CSAT, FCR, MTTR",
            "Comunicação difícil: usuário frustrado, urgências e expectativas",
          ],
        },
      ],
      tools: [
        "Jira Service Management",
        "Active Directory",
        "Microsoft 365",
        "Wireshark",
        "TeamViewer",
      ],
    },
    {
      label: "3 meses",
      levelName: "Profissional + IA",
      totalHours: "60h",
      outcome:
        "Estar preparado para a certificação CompTIA A+, atuar como N2/N3 e automatizar tarefas repetitivas de suporte com PowerShell e IA",
      modules: [
        {
          title: "Fundamentos de Hardware",
          topics: [
            "Identificação e função de cada componente do PC (CPU, RAM, SSD, placa-mãe)",
            "Tipos de conectores: USB-A/C, HDMI, DisplayPort, RJ-45, SATA, M.2",
            "Periféricos: impressoras, scanners, monitores — configuração e drivers",
            "Diagnóstico de falhas: POST, beep codes e leds de erro",
          ],
        },
        {
          title: "Redes para Suporte",
          topics: [
            "Modelo OSI na prática: onde ocorre cada tipo de problema",
            "IP, máscara de sub-rede, gateway e DNS — configuração manual e DHCP",
            "Wi-Fi: padrões 802.11ac/ax, canais, interferência e troubleshooting",
            "Ferramentas: Wireshark (captura básica), Advanced IP Scanner, nmap",
          ],
        },
        {
          title: "Active Directory e Microsoft 365",
          topics: [
            "Usuários, grupos e unidades organizacionais no AD",
            "GPO: aplicação de políticas de segurança na rede",
            "Microsoft 365 Admin Center: usuários, licenças e Exchange Online",
            "Remote Desktop e suporte remoto com TeamViewer e Quick Assist",
          ],
        },
        {
          title: "PowerShell para Automação de Suporte",
          topics: [
            "Cmdlets essenciais: Get-Process, Stop-Service, Get-EventLog",
            "Scripts para criação em massa de usuários no AD",
            "Automação de relatórios de disco e inventário de hardware",
            "Agendamento de tarefas com Task Scheduler e scripts PowerShell",
          ],
        },
        {
          title: "Segurança e Conformidade no Suporte",
          topics: [
            "Malware: tipos, vetores de infecção e remoção com Malwarebytes",
            "Política de senhas, MFA e princípio do menor privilégio",
            "Backup: estratégia 3-2-1 e ferramentas (Windows Backup, Veeam Free)",
            "LGPD aplicada ao dia a dia do técnico de suporte",
          ],
        },
        {
          title: "IA Aplicada ao Help Desk e Preparação CompTIA A+",
          topics: [
            "Uso do ChatGPT e Copilot para redigir artigos de base de conhecimento",
            "IA para diagnóstico assistido: descrever sintomas e interpretar respostas",
            "Simulados dos exams 220-1101 e 220-1102 da CompTIA A+",
            "Projeto final: documentar e resolver um caso real de suporte N2 completo",
          ],
        },
      ],
      tools: [
        "PowerShell",
        "Active Directory",
        "Microsoft 365",
        "Wireshark",
        "Malwarebytes",
        "Jira Service Management",
        "ChatGPT/Copilot",
      ],
    },
  ],
}

function SuportePage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
