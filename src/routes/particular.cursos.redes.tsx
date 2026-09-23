import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/redes")({
  component: RedesPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Redes e Infraestrutura Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a configurar redes corporativas, VLANs, roteamento e Wi-Fi com preparação para a certificação CompTIA Network+. Aulas individuais e horário flexível.",
      path: "/particular/cursos/redes",
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
      levelName: "Redes e Infraestrutura",
      ctaLabel: "curso de Redes e Infraestrutura",
      totalHours: "48h",
      outcome:
        "Configurar redes corporativas do zero absoluto — endereçamento IP e VLANs — até o roteamento avançado com OSPF multi-área, BGP e VPN, Wi-Fi corporativo e automação com Python e IA, pronto para a certificação CompTIA Network+.",
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
            "Spanning Tree Protocol (STP/RSTP): prevenção de loops e convergência rápida",
            "Port security: controle de dispositivos por MAC address",
            "EtherChannel: LACP e agregação de links para redundância e banda",
          ],
        },
        {
          title: "Roteamento",
          topics: [
            "Roteamento estático: configuração de rotas e gateway de último recurso",
            "RIP e OSPF: dos fundamentos em Cisco IOS ao design multi-área hierárquico com otimização de LSAs",
            "Inter-VLAN routing: roteador-on-a-stick e Layer 3 switch",
            "BGP: conceitos de roteamento entre ASNs (preparo para atuar em ISP)",
            "VPN e SD-WAN: IPSec site-to-site, cliente-a-site com OpenVPN e os conceitos de SD-WAN frente ao roteamento tradicional",
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
          title: "Monitoramento e Gestão de Rede",
          topics: [
            "SNMP: coleta de dados de dispositivos de rede",
            "Zabbix: instalação, templates, dashboards e criação de alertas/triggers com notificação por e-mail/Telegram",
            "ACLs e Syslog: controle de tráfego por regras no roteador Cisco e centralização de logs de rede",
            "PRTG e Netflow/ntopng: monitoramento de banda, disponibilidade de serviços e análise de tráfego",
            "Gestão de configurações com Rancid e backup automático de configs",
          ],
        },
        {
          title: "Automação, IA e Certificação",
          topics: [
            "Python para redes: Netmiko para configurar múltiplos dispositivos via SSH",
            "Ansible: playbooks para provisionamento de switches e roteadores",
            "IA para troubleshooting: uso do ChatGPT para interpretar logs de rede e propor soluções",
            "Projeto final: projetar, documentar e implementar a rede completa de uma empresa fictícia",
            "Preparação CompTIA Network+ (N10-008): simulados comentados, performance-based questions, revisão de domínios e estratégias de prova",
          ],
        },
      ],
      tools: [
        "Cisco Packet Tracer",
        "GNS3",
        "Wireshark",
        "Zabbix",
        "Cisco IOS (CLI)",
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
      a: "O curso é voltado pra quem já está na área — seja como técnico de suporte que quer subir pra infraestrutura, seja alguém que já entende de TI e quer avançar em redes. Ele começa direto com endereçamento IP, sub-redes e VLANs, sem cobrir fundamentos de informática do zero.",
    },
    {
      q: "O curso prepara pra certificação CompTIA Network+?",
      a: "Sim, o curso inclui um módulo dedicado com simulados do exame N10-008, prática de performance-based questions e revisão de todos os domínios cobrados na prova — incluindo estratégias de gerenciamento de tempo.",
    },
  ],
}

function RedesPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
