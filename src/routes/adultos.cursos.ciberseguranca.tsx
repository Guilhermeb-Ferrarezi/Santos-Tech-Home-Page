import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/ciberseguranca")({
  component: CibersegurancaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Cibersegurança para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda cibersegurança em Ribeirão Preto: de proteções essenciais a pentest e SOC. Prepare-se para CompTIA Security+ ou eJPT com aulas práticas e individuais.",
      path: "/adultos/cursos/ciberseguranca",
    }),
})

const COURSE_DATA = {
  nome: "Cibersegurança",
  categoria: "T.I",
  tagline: "Proteja redes e sistemas com as técnicas que hackers usam para atacar",
  targetAudience: [
    "Trabalha em TI (suporte, redes, dev) e quer especializar em segurança",
    "Quer se tornar analista de SOC, pentester ou consultor de segurança",
    "Está preparando-se para certificações CompTIA Security+ ou eJPT",
    "Gestor de TI responsável por conformidade, LGPD e proteção de dados",
    "Quer entender como ataques reais acontecem para poder se defender",
    "Busca uma das áreas de maior salário e menor oferta de profissionais no Brasil",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Entender os principais vetores de ataque, aplicar proteções básicas e usar ferramentas de segurança em ambiente controlado",
      modules: [
        {
          title: "Fundamentos de Segurança",
          topics: [
            "CIA Triad: confidencialidade, integridade e disponibilidade",
            "Tipos de ataque: phishing, engenharia social, malware, ransomware",
            "Superfície de ataque: o que expõe uma organização a riscos",
            "Princípio do menor privilégio e defesa em profundidade",
          ],
        },
        {
          title: "Proteções Essenciais",
          topics: [
            "Senhas seguras: gerenciadores Bitwarden e 1Password — uso prático",
            "MFA: tipos (TOTP, FIDO2, SMS) e como habilitar em contas corporativas",
            "Antivírus e EDR: diferença entre soluções e configuração do Defender",
            "Firewall do Windows: regras de entrada e saída para proteção do endpoint",
          ],
        },
        {
          title: "Introdução ao Hacking Ético",
          topics: [
            "Metodologia: reconhecimento, enumeração, exploração e relatório",
            "Kali Linux: instalação em VM e principais ferramentas do menu",
            "Nmap: varredura de portas, detecção de OS e serviços",
            "Prática em ambiente controlado: TryHackMe — primeiras rooms",
          ],
        },
      ],
      tools: [
        "Kali Linux",
        "Nmap",
        "Bitwarden",
        "TryHackMe",
        "VirtualBox",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Realizar varreduras e análises de vulnerabilidade, monitorar eventos de segurança e aplicar controles em ambientes corporativos",
      modules: [
        {
          title: "Fundamentos de Segurança",
          topics: [
            "CIA Triad: confidencialidade, integridade e disponibilidade",
            "Tipos de ataque: phishing, engenharia social, malware, ransomware",
            "Superfície de ataque: o que expõe uma organização a riscos",
            "Princípio do menor privilégio e defesa em profundidade",
          ],
        },
        {
          title: "Reconhecimento e OSINT",
          topics: [
            "OSINT: coleta de informações públicas com theHarvester e Maltego CE",
            "Shodan: encontrar dispositivos expostos na internet",
            "Google Hacking (Google Dorks): operadores avançados para reconhecimento",
            "Análise de e-mails suspeitos: cabeçalhos, SPF, DKIM e phishing indicators",
          ],
        },
        {
          title: "Análise de Vulnerabilidades",
          topics: [
            "Nessus Essentials: instalação, scan de rede e interpretação de relatório",
            "CVE e CVSS: como ler uma vulnerabilidade e priorizar correção",
            "OpenVAS: alternativa open source para scanning de vulnerabilidades",
            "Patch management: processo de atualização segura em ambientes Windows",
          ],
        },
        {
          title: "Monitoramento e SOC",
          topics: [
            "SIEM: conceito de correlação de eventos e alertas",
            "Wazuh: instalação e integração de agentes Windows e Linux",
            "Análise de logs: identificar padrões de ataque em logs do Windows Event Viewer",
            "Incident response: fases de resposta a um incidente de segurança",
          ],
        },
      ],
      tools: [
        "Kali Linux",
        "Nessus Essentials",
        "Wazuh",
        "Wireshark",
        "Maltego CE",
        "TryHackMe",
        "HackTheBox",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Realizar testes de penetração completos, operar um SOC básico, redigir relatório técnico de pentest e estar preparado para CompTIA Security+ ou eJPT",
      modules: [
        {
          title: "Reconhecimento e OSINT",
          topics: [
            "OSINT: theHarvester, Maltego CE e Recon-ng para mapeamento de alvos",
            "Shodan e Censys: identificação de ativos expostos",
            "Google Dorks avançados: servidores, câmeras e painéis administrativos",
            "Análise de vazamentos com Have I Been Pwned e DeHashed",
          ],
        },
        {
          title: "Exploração e Pós-Exploração",
          topics: [
            "Metasploit Framework: módulos, payloads e sessões Meterpreter",
            "Exploração web: SQL Injection, XSS e CSRF com DVWA e Burp Suite Community",
            "Escalação de privilégios no Windows: técnicas comuns e detecção",
            "Pivoting: acesso a redes internas via máquina comprometida",
          ],
        },
        {
          title: "Segurança em Nuvem e Redes",
          topics: [
            "AWS Security: IAM, grupos de segurança, CloudTrail e GuardDuty",
            "Azure Security Center: configuração de políticas e alertas",
            "Segmentação de rede: VLANs, DMZ e firewall Sophos/pfSense",
            "VPN e Zero Trust: conceitos e implementação com WireGuard",
          ],
        },
        {
          title: "SOC e Resposta a Incidentes",
          topics: [
            "Wazuh SIEM: criação de regras customizadas e alertas automáticos",
            "Análise forense: coleta de evidências com Volatility e Autopsy",
            "Threat Intelligence: feeds, IOCs e plataformas como MISP",
            "Relatório de incidente: estrutura e comunicação para gestores",
          ],
        },
        {
          title: "IA em Cibersegurança e Certificações",
          topics: [
            "IA ofensiva: como atacantes usam LLMs para phishing e geração de malware",
            "IA defensiva: SIEM com ML, detecção de anomalias e resposta automatizada",
            "Uso do ChatGPT para análise de logs, geração de regras Yara e SIEM queries",
            "Simulados CompTIA Security+ (SY0-701) e eJPT — questões comentadas",
            "Projeto final: relatório de pentest completo em laboratório virtual",
          ],
        },
      ],
      tools: [
        "Kali Linux",
        "Metasploit",
        "Burp Suite",
        "Wazuh",
        "Nessus Essentials",
        "Wireshark",
        "Volatility",
        "ChatGPT",
        "TryHackMe",
        "HackTheBox",
      ],
    },
  ],
}

function CibersegurancaPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
