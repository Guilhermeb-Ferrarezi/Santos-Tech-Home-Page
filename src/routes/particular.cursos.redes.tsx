import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/redes")({
  component: RedesPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Redes e Infraestrutura para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a configurar redes corporativas, VLANs, roteamento e Wi-Fi com preparação para a certificação CompTIA Network+. Aulas individuais e horário flexível.",
      path: "/adultos/cursos/redes",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Redes e Infraestrutura",
  categoria: "T.I",
  tagline: "Configure redes corporativas do zero com certificação CompTIA Network+",
  targetAudience: [
    "Trabalha em TI e quer subir de nível saindo do suporte para infraestrutura",
    "Técnico de suporte que precisa entender redes para resolver problemas mais complexos",
    "Quer trabalhar como analista de redes, NOC ou administrador de infraestrutura",
    "Busca a certificação CompTIA Network+ ou preparação para o CCNA da Cisco",
    "Precisa configurar e gerenciar a rede de uma pequena ou média empresa",
    "Quer entender como a internet realmente funciona por dentro",
  ],
  tiers: [
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Configurar switches gerenciáveis com VLANs, implementar roteamento estático e dinâmico e monitorar a rede",
      modules: [
        {
          title: "Endereçamento IP e Sub-redes",
          topics: [
            "IPv4: classes A, B, C e endereços privados (RFC 1918)",
            "CIDR e VLSM: cálculo de sub-redes para segmentação corporativa",
            "IPv6: formato, tipos de endereço e dual-stack",
            "NAT: tipos (estático, dinâmico, PAT) e configuração em roteadores",
          ],
        },
        {
          title: "Switching e VLANs",
          topics: [
            "Switches gerenciáveis: diferença entre acesso e trunk (802.1Q)",
            "VLANs: criação, atribuição de portas e segmentação de rede",
            "Spanning Tree Protocol (STP): como previne loops em redes comutadas",
            "EtherChannel: agregação de links para redundância e banda",
          ],
        },
        {
          title: "Roteamento",
          topics: [
            "Roteamento estático: configuração de rotas e gateway de último recurso",
            "RIP e OSPF: conceitos e configuração básica em Cisco IOS",
            "Inter-VLAN routing: roteador-on-a-stick e Layer 3 switch",
            "Simulação completa no Cisco Packet Tracer",
          ],
        },
        {
          title: "Monitoramento e Segurança de Rede",
          topics: [
            "SNMP: coleta de dados de dispositivos de rede",
            "Zabbix: instalação, templates e dashboards de monitoramento",
            "ACLs: controle de tráfego por regras no roteador Cisco",
            "Syslog: centralização de logs de rede",
          ],
        },
      ],
      tools: [
        "Cisco Packet Tracer",
        "Wireshark",
        "Zabbix",
        "Cisco IOS (CLI)",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Projetar e implementar redes corporativas completas, estar preparado para CompTIA Network+ e usar ferramentas de automação e IA",
      modules: [
        {
          title: "Switching e VLANs",
          topics: [
            "VLANs: criação, trunk 802.1Q e segmentação de rede",
            "Spanning Tree Protocol (STP/RSTP): convergência e proteção de loops",
            "Port security: controle de dispositivos por MAC address",
            "EtherChannel: LACP e agregação de links físicos",
          ],
        },
        {
          title: "Roteamento Avançado",
          topics: [
            "OSPF multi-área: design hierárquico e otimização de LSAs",
            "BGP: conceitos de roteamento entre ASNs (preparo para ISP)",
            "VPN: IPSec site-to-site e cliente-a-site com OpenVPN",
            "SD-WAN: conceitos e diferença em relação ao roteamento tradicional",
          ],
        },
        {
          title: "Wi-Fi Corporativo",
          topics: [
            "802.11ax (Wi-Fi 6): MU-MIMO, OFDMA e ganhos reais de desempenho",
            "Controladora Unifi: configuração de SSIDs, VLANs e roaming",
            "Análise de canal com WiFi Analyzer e posicionamento de APs",
            "WPA3 Enterprise: autenticação 802.1X com servidor RADIUS",
          ],
        },
        {
          title: "Monitoramento e Gerenciamento",
          topics: [
            "Zabbix: criação de alertas, triggers e notificações por e-mail/Telegram",
            "PRTG: monitoramento de banda e disponibilidade de serviços",
            "Netflow e análise de tráfego com ntopng",
            "Gestão de configurações com Rancid e backup automático de configs",
          ],
        },
        {
          title: "Automação e IA em Redes",
          topics: [
            "Python para redes: Netmiko para configurar múltiplos dispositivos via SSH",
            "Ansible: playbooks para provisionamento de switches e roteadores",
            "IA para troubleshooting: uso do ChatGPT para interpretar logs e propor soluções",
            "Projeto final: projetar, documentar e implementar a rede de uma empresa fictícia",
          ],
        },
        {
          title: "Preparação CompTIA Network+",
          topics: [
            "Simulados do exame N10-008: questões comentadas por domínio",
            "Performance-based questions (PBQs): prática em simulador",
            "Revisão dos domínios: infraestrutura, segurança, operações e troubleshooting",
            "Dicas de prova: gerenciamento de tempo e abordagem de questões difíceis",
          ],
        },
      ],
      tools: [
        "Cisco Packet Tracer",
        "GNS3",
        "Wireshark",
        "Zabbix",
        "Netmiko/Python",
        "Ansible",
        "Unifi Controller",
        "ChatGPT",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já trabalhar com TI pra fazer esse curso?",
      a: "O curso é voltado pra quem já está na área — seja como técnico de suporte que quer subir pra infraestrutura, seja alguém que já entende de TI e quer avançar em redes. Ele começa direto no Intermediário com endereçamento IP, sub-redes e VLANs, sem cobrir fundamentos de informática do zero.",
    },
    {
      q: "Qual a diferença entre o nível Intermediário e o Profissional + IA?",
      a: "No Intermediário você configura switches gerenciáveis com VLANs, roteamento estático e dinâmico e monitora a rede com Zabbix. No Profissional + IA você avança pra roteamento com OSPF multi-área e BGP, VPN, Wi-Fi corporativo, automação com Python e Ansible, e fecha com preparação específica para a certificação CompTIA Network+.",
    },
    {
      q: "O curso prepara pra certificação CompTIA Network+?",
      a: "Sim, o Profissional + IA inclui um módulo dedicado com simulados do exame N10-008, prática de performance-based questions e revisão de todos os domínios cobrados na prova — incluindo dicas de gerenciamento de tempo.",
    },
  ],
}

function RedesPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
