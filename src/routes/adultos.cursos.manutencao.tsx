import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/manutencao")({
  component: ManutencaoPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Montagem e Manutenção de Computadores para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Monte, conserte e atualize PCs como um técnico profissional: hardware, diagnóstico de falhas e instalação de Windows. Aulas presenciais em Ribeirão Preto para quem quer atuar em assistência técnica ou abrir o próprio negócio.",
      path: "/adultos/cursos/manutencao",
    }),
})

const COURSE_DATA = {
  nome: "Montagem e Manutenção de Computadores",
  categoria: "T.I",
  tagline: "Monte, conserte e atualize PCs como um técnico profissional",
  targetAudience: [
    "Quer abrir um negócio de manutenção de computadores ou já tem e quer crescer",
    "Trabalha ou quer trabalhar em assistência técnica de informática",
    "Compra e revende hardware e precisa entender o que está avaliando",
    "Tem PCs velhos em casa ou na empresa e quer aprender a recuperá-los",
    "Busca complementar um curso de suporte técnico com conhecimento de hardware",
    "Precisa de uma habilidade com retorno financeiro rápido e baixo investimento inicial",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Desmontar e montar um PC completo com segurança, instalar Windows e drivers corretamente",
      modules: [
        {
          title: "Anatomia do PC",
          topics: [
            "Placa-mãe: chipset, soquete, slots PCIe e M.2, fases de energia VRM",
            "Processadores Intel (LGA) e AMD (AM5): TDP, núcleos e compatibilidade de socket",
            "RAM: DDR4 vs DDR5, frequência, latência e dual-channel na prática",
            "Armazenamento: HDD, SSD SATA e NVMe — comparativo de desempenho real",
          ],
        },
        {
          title: "Montagem Prática",
          topics: [
            "ESD: como evitar dano eletrostático durante a montagem",
            "Aplicação correta de pasta térmica e montagem de cooler",
            "Roteamento de cabos e gestão de fios para airflow ideal",
            "Primeiro boot: BIOS/UEFI, XMP/EXPO e checklist pós-montagem",
          ],
        },
        {
          title: "Instalação de Sistema e Drivers",
          topics: [
            "Criação de pendrive bootável com Rufus e Windows Media Creation Tool",
            "Instalação do Windows 11: particionamento, formatação e ativação",
            "Drivers: ordem de instalação, Device Manager e atualização segura",
            "Softwares essenciais pós-instalação: Chrome, LibreOffice, VLC, 7-Zip",
          ],
        },
      ],
      tools: ["Rufus", "HWiNFO64", "CPU-Z", "BIOS/UEFI"],
    },
  ],
}

function ManutencaoPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
