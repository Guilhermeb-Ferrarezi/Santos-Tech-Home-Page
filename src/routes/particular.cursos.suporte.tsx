import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/suporte")({
  component: SuportePage,
  head: () =>
    pageMeta({
      title:
        "Curso de Suporte Técnico / Help Desk Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda do zero hardware, redes, Active Directory e ticketing e prepare-se para a CompTIA A+, com aulas individuais e presenciais em Ribeirão Preto.",
      path: "/particular/cursos/suporte",
    }),
})

const COURSE_DATA = {
  nome: "Suporte Técnico / Help Desk",
  categoria: "T.I",
  tema: "ti" as const,
  logo: "pc",
  variante: "suporte",
  tagline: "Do primeiro chamado ao suporte N2: sua base em TI",
  targetAudience: [
    "Quer entrar na área de TI mas não sabe por onde começar",
    "Trabalha em outra área e quer dar o primeiro passo rumo à tecnologia",
    "Já faz pequenos consertos e quer formalizar o conhecimento",
    "Quer se preparar para a sua primeira certificação (CompTIA A+)",
    "Quer aprender, na prática, a rotina de um técnico de suporte",
    "Quer trabalhar em empresas de médio e grande porte como analista de suporte",
  ],
  tiers: [
    {
      levelName: "Suporte Técnico",
      totalHours: "48h",
      outcome:
        "Atender chamados de Help Desk do zero — hardware, sistemas operacionais e ticketing — até resolver casos de nível N2, gerenciando redes, Active Directory e automação com PowerShell e IA, com simulados da CompTIA A+ e um caso real de suporte documentado para o seu portfólio.",
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
          title: "Atendimento, Ticketing e Comunicação com o Usuário",
          topics: [
            "Fluxo de um chamado: abertura, triagem, resolução e encerramento",
            "Freshdesk e Jira Service Management na prática: filas, prioridades e escalação",
            "SLA: o que é, por que importa e como cumprir",
            "Base de conhecimento e métricas de suporte: como escrever um artigo de solução, CSAT, FCR e MTTR",
            "Comunicação técnica e situações difíceis: sem jargões pro usuário final, frustração e urgência",
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
          title: "Active Directory, Microsoft 365 e Suporte Remoto",
          topics: [
            "Usuários, grupos e unidades organizacionais no AD",
            "GPO: aplicação de políticas de segurança na rede",
            "Microsoft 365 Admin Center: usuários, licenças e Exchange Online",
            "Remote Desktop e suporte remoto com TeamViewer e Quick Assist",
          ],
        },
        {
          title: "Automação com PowerShell, Segurança e IA Aplicada ao Help Desk",
          topics: [
            "Cmdlets essenciais do PowerShell (Get-Process, Stop-Service, Get-EventLog) e scripts para criação em massa de usuários no AD",
            "Automação de relatórios de disco, inventário de hardware e agendamento de tarefas com Task Scheduler",
            "Malware: tipos, vetores de infecção e remoção com Malwarebytes",
            "Política de senhas, MFA, backup 3-2-1 (Windows Backup, Veeam Free) e LGPD aplicada ao suporte",
            "IA aplicada ao Help Desk: ChatGPT e Copilot para base de conhecimento e diagnóstico assistido",
            "Simulados CompTIA A+ (220-1101 e 220-1102) e projeto final: caso real de suporte N2 documentado e resolvido",
          ],
        },
      ],
      tools: [
        "Windows 10/11",
        "Prompt de Comando",
        "Freshdesk",
        "Jira Service Management",
        "Wireshark",
        "Active Directory",
        "Microsoft 365",
        "TeamViewer",
        "PowerShell",
        "Malwarebytes",
        "ChatGPT/Copilot",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso ter experiência em TI pra começar esse curso?",
      a: "Não. O curso foi desenhado pra quem quer entrar na área de TI sem saber por onde começar, inclusive pra quem vem de outra profissão e quer migrar de carreira. O curso parte de fundamentos de hardware e sistemas operacionais, sem exigir nenhuma experiência prévia.",
    },
    {
      q: "O curso prepara pra certificação CompTIA A+?",
      a: "Sim, o curso inclui simulados dos exames 220-1101 e 220-1102 da CompTIA A+, além de um projeto final documentando a resolução de um caso real de suporte N2.",
    },
  ],
}

function SuportePage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
