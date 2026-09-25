import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/linux")({
  component: LinuxPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Linux Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a administrar servidores Linux no terminal, gerenciar usuários, automatizar tarefas e configurar serviços web. Curso presencial em Ribeirão Preto para profissionais de TI.",
      path: "/particular/cursos/linux",
    }),
})

const COURSE_DATA = {
  nome: "Linux",
  categoria: "T.I",
  tema: "ti" as const,
  logo: "linux",
  variante: "linux",
  tagline: "Domine o sistema que move 96% dos servidores do mundo",
  targetAudience: [
    "Trabalha em TI e depende de servidores Linux mas nunca aprendeu direito",
    "Quer trabalhar com DevOps, cloud ou infraestrutura e precisa dominar o terminal",
    "Desenvolve software e precisa subir aplicações em servidores Linux",
    "Prepara-se para certificações como CompTIA Linux+, LPIC-1 ou RHCSA",
    "Quer migrar de Windows Server para Linux e reduzir custos de licenciamento",
    "Está entrando em cybersecurity e precisa de fluência no Kali Linux e ambientes Unix",
  ],
  tiers: [
    {
      levelName: "Linux",
      totalHours: "48h",
      outcome:
        "Administrar servidores Linux do zero absoluto — terminal, usuários e permissões — até colocar serviços web e banco de dados em produção com segurança e automação via shell script — base para trabalhar com infraestrutura, DevOps ou administração de servidores.",
      modules: [
        {
          title: "Primeiros Passos no Linux",
          topics: [
            "Distribuições: Ubuntu Server, Debian, CentOS/RHEL e Kali — quando usar cada",
            "Instalação do Ubuntu 24.04 em VirtualBox: particionamento e primeiros pacotes",
            "Terminal vs GUI: por que o terminal é mais poderoso",
            "Estrutura de diretórios: /, /home, /etc, /var, /usr, /tmp — o que fica onde",
          ],
        },
        {
          title: "Comandos Essenciais do Terminal",
          topics: [
            "Navegação: ls, cd, pwd, find, locate — opções e flags mais usadas",
            "Manipulação de arquivos: cp, mv, rm, mkdir, touch, ln",
            "Visualização: cat, less, more, head, tail e tail -f para logs em tempo real",
            "Redirecionamento e pipes: >, >>, |, grep, sort, uniq, wc",
            "Expressões regulares básicas com grep, sed e awk",
          ],
        },
        {
          title: "Usuários e Permissões",
          topics: [
            "Usuários e grupos: useradd, usermod, passwd, groupadd",
            "Permissões: chmod (rwx), chown e chgrp — leitura e alteração",
            "sudo e su: diferença, configuração do sudoers e boas práticas",
            "SSH: geração de chaves RSA, acesso seguro e disable de senha root",
          ],
        },
        {
          title: "Gerenciamento de Pacotes e Serviços",
          topics: [
            "APT: apt update, apt upgrade, apt install, apt purge e repositórios",
            "Systemd: systemctl start/stop/enable/status e criação de units",
            "Snap e Flatpak: instalação de pacotes containerizados",
            "Compilação manual: ./configure, make, make install",
          ],
        },
        {
          title: "Servidores Web e Banco de Dados",
          topics: [
            "Apache2 e Nginx: instalação, virtual hosts e configuração de HTTPS com Let's Encrypt",
            "MySQL/MariaDB: instalação, criação de banco, usuários e backup com mysqldump",
            "PHP-FPM: configuração com Nginx para aplicações web",
            "Fail2ban: proteção automática contra ataques de força bruta",
          ],
        },
        {
          title: "Shell Script e Automação",
          topics: [
            "Bash scripting: variáveis, condicionais, loops e funções",
            "Scripts de backup automatizado com tar, rsync e rotação de arquivos",
            "Cron: agendamento de tarefas e notificação por e-mail",
            "Tratamento de erros: exit codes e logging em scripts",
          ],
        },
      ],
      tools: [
        "Ubuntu Server 24.04",
        "VirtualBox",
        "Vim/Nano",
        "OpenSSH",
        "Nginx",
        "MySQL",
        "Fail2ban",
        "Let's Encrypt",
        "Bash",
        "Cron",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já trabalhar com TI para fazer esse curso de Linux?",
      a: "Não necessariamente, mas ele é voltado para quem pretende atuar com servidores, DevOps ou desenvolvimento. O curso começa do zero — instalação, estrutura de diretórios e comandos básicos de terminal — antes de avançar para administração de servidor em produção.",
    },
    {
      q: "Esse curso prepara para certificações como LPIC-1 ou CompTIA Linux+?",
      a: "O conteúdo cobre boa parte da base cobrada nessas certificações — terminal, usuários e permissões, gerenciamento de pacotes e serviços, e shell scripting — o que ajuda bastante quem está se preparando para CompTIA Linux+, LPIC-1 ou RHCSA.",
    },
  ],
}

function LinuxPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
