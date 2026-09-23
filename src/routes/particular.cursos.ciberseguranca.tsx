import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/ciberseguranca")({
  component: CibersegurancaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Cibersegurança Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda cibersegurança em Ribeirão Preto: de proteções essenciais a pentest e SOC. Prepare-se para CompTIA Security+ ou eJPT com aulas práticas e individuais.",
      path: "/particular/cursos/ciberseguranca",
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
      levelName: "Cibersegurança",
      ctaLabel: "curso de Cibersegurança",
      totalHours: "48h",
      outcome:
        "Entender os fundamentos de segurança do zero absoluto — CIA Triad, proteções essenciais e hacking ético — até realizar testes de penetração completos, operar um SOC básico com Wazuh e redigir relatório técnico de pentest, pronto para as certificações CompTIA Security+ ou eJPT.",
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
          title: "Hacking Ético e Reconhecimento (OSINT)",
          topics: [
            "Metodologia de pentest: reconhecimento, enumeração, exploração e relatório",
            "Kali Linux e Nmap: instalação da VM, ferramentas essenciais do menu e varredura de portas, detecção de OS e serviços",
            "OSINT: mapeamento de alvos e ativos expostos com theHarvester, Maltego CE, Recon-ng, Shodan e Censys",
            "Google Dorks (Google Hacking): operadores avançados para encontrar servidores, câmeras e painéis administrativos expostos",
            "Análise de e-mails suspeitos: cabeçalhos, SPF, DKIM e indicadores de phishing",
            "Análise de vazamentos com Have I Been Pwned e DeHashed",
            "Prática em ambiente controlado: TryHackMe — primeiras rooms",
          ],
        },
        {
          title: "Análise de Vulnerabilidades e Exploração",
          topics: [
            "Scanners de vulnerabilidade: Nessus Essentials e OpenVAS — instalação, scan de rede e leitura de relatório",
            "CVE e CVSS: como ler e priorizar uma vulnerabilidade, com patch management em ambientes Windows",
            "Metasploit Framework: módulos, payloads e sessões Meterpreter",
            "Exploração web: SQL Injection, XSS e CSRF com DVWA e Burp Suite Community",
            "Escalação de privilégios no Windows: técnicas comuns e detecção",
            "Pivoting: acesso a redes internas via máquina comprometida",
          ],
        },
        {
          title: "Segurança em Nuvem, Redes e SOC",
          topics: [
            "AWS e Azure Security: IAM, grupos de segurança, CloudTrail, GuardDuty e Security Center",
            "Segmentação de rede e VPN: VLANs, DMZ, firewall Sophos/pfSense e Zero Trust com WireGuard",
            "SIEM: conceito de correlação de eventos e alertas, instalação e integração de agentes Wazuh (Windows e Linux)",
            "Wazuh: criação de regras customizadas, alertas automáticos e análise de logs no Windows Event Viewer",
            "Investigação de incidentes: análise forense com Volatility e Autopsy, mais Threat Intelligence com feeds, IOCs e plataformas como MISP",
            "Incident response: fases de resposta a um incidente e relatório técnico para gestores",
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
        "Nmap",
        "Bitwarden",
        "TryHackMe",
        "VirtualBox",
        "Nessus Essentials",
        "Wazuh",
        "Wireshark",
        "Maltego CE",
        "HackTheBox",
        "Metasploit",
        "Burp Suite",
        "Volatility",
        "ChatGPT",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já trabalhar em TI pra fazer esse curso?",
      a: "Ajuda, mas não é obrigatório. O curso parte de fundamentos como a Tríade CIA, tipos de ataque e proteções essenciais antes de instalar Kali Linux e usar Nmap — então quem já está em TI (suporte, redes, dev) avança rápido, mas ninguém começa perdido.",
    },
    {
      q: "O curso realmente prepara pra certificação CompTIA Security+ ou eJPT?",
      a: "Sim. O módulo final do curso inclui simulados comentados do CompTIA Security+ (SY0-701) e do eJPT, além de um relatório de pentest completo em laboratório virtual como projeto de conclusão.",
    },
  ],
}

function CibersegurancaPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
