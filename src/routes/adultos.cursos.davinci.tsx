import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/davinci")({
  component: DavinciPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Edição de Vídeo — DaVinci Resolve / Premiere para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda edição profissional com DaVinci Resolve e Adobe Premiere. Curso presencial em Ribeirão Preto para videomakers, criadores de conteúdo e profissionais do audiovisual.",
      path: "/adultos/cursos/davinci",
    }),
})

const COURSE_DATA = {
  nome: "Edição de Vídeo — DaVinci Resolve / Premiere",
  categoria: "Design & Criação",
  tagline: "Domine o software de Hollywood e edite como os grandes estúdios",
  targetAudience: [
    "Editor iniciante que quer aprender a ferramenta usada em produções cinematográficas e publicitárias",
    "Videomaker que já edita no celular e quer dar o próximo passo em qualidade técnica",
    "Profissional de comunicação que precisa editar vídeos institucionais e corporativos",
    "YouTuber ou criador de conteúdo que quer elevar a qualidade de produção do canal",
    "Técnico de audiovisual que precisa certificação e domínio profissional das ferramentas",
  ],
  tiers: [
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Executar projetos completos de edição com color grading profissional, efeitos visuais e motion graphics no DaVinci Resolve e Adobe Premiere.",
      modules: [
        {
          title: "DaVinci Resolve — Interface e Projeto",
          topics: [
            "Instalação, configuração de GPU e criação de projetos",
            "Navegação entre as páginas: Cut, Edit, Fusion, Color, Fairlight, Deliver",
            "Importação, organização de bins e gerenciamento de mídia",
            "Timeline: criação, configuração de resolução e frame rate",
            "Atalhos de teclado para edição ágil",
          ],
        },
        {
          title: "Edição na Página Cut e Edit",
          topics: [
            "Decupagem de entrevistas e documentários na página Cut",
            "Edição precisa na página Edit com Blade e Trim",
            "Inserção de B-roll e cobertura visual",
            "Transições e velocidade: slow motion e fast motion",
            "Estabilização de câmera com DaVinci Resolve Stabilizer",
          ],
        },
        {
          title: "Áudio com Fairlight",
          topics: [
            "Mixagem de voz, trilha e efeitos sonoros",
            "Normalização de áudio e remoção de ruído",
            "Equalização e compressão de voz para clareza",
            "Sincronização de áudio externo com vídeo",
          ],
        },
        {
          title: "Color Grading Profissional",
          topics: [
            "Sistema de nós: serial, paralelo e layer",
            "Correção primária: Lift, Gamma, Gain e Offset",
            "Qualificadores para seleção de cor por área",
            "LUTs: aplicação e criação de look personalizado",
            "Correspondência de cor entre cenas (Color Match)",
            "HDR Grading e entrega para streaming",
          ],
        },
        {
          title: "Adobe Premiere — Fundamentos e Integração",
          topics: [
            "Interface do Premiere: painel Project, Timeline e Lumetri",
            "Edição de vídeos corporativos e publicitários no Premiere",
            "Integração Premiere + After Effects com Dynamic Link",
            "Lumetri Color: correção e gradação de cor no Premiere",
            "Fluxo de trabalho Premiere para agências e emissoras",
          ],
        },
        {
          title: "Exportação e Entrega",
          topics: [
            "Configurações de render na página Deliver",
            "Exportação para YouTube, Vimeo, Instagram e broadcast",
            "Compressão H.264, H.265 e ProRes",
            "Exportação com e sem áudio, legendas e capítulos",
          ],
        },
      ],
      tools: [
        "DaVinci Resolve 19",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Fairlight Audio",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar DaVinci Resolve e Adobe Premiere em nível profissional completo, incluindo efeitos visuais, IA e entrega para cinema, TV e streaming, atuando como editor ou colorista sênior.",
      modules: [
        {
          title: "DaVinci Resolve — Edição Avançada",
          topics: [
            "Edição multicam para eventos e entrevistas",
            "Compound clips e timelines aninhadas",
            "Gerenciamento de projetos colaborativos",
            "Otimização de performance com proxies",
          ],
        },
        {
          title: "Color Grading Avançado",
          topics: [
            "Grading cinematográfico com look de Hollywood",
            "Uso de scopes: Waveform, Vectorscope, Parade e Histogram",
            "Film Emulation e grain de película",
            "Delivery para DCI-P3, Rec.2020 e Dolby Vision",
            "Gerenciamento de cor com ACES",
          ],
        },
        {
          title: "Efeitos Visuais com Fusion",
          topics: [
            "Interface baseada em nós do Fusion",
            "Composição de texto 3D e títulos animados",
            "Tracking de objetos e substituição de elementos",
            "Keying (chroma key) profissional com DeltaKeyer",
            "Roto: recorte manual de objetos em movimento",
            "Planar Tracking para substituição de placas e telas",
            "Partículas e simulações com pEmitter",
            "Criação de title sequences profissionais",
          ],
        },
        {
          title: "IA no DaVinci Resolve e Premiere",
          topics: [
            "Magic Mask: rotoscoping automático com IA",
            "Scene Cut Detection: decupagem automática de clipes",
            "Speed Warp: slow motion por IA em qualquer material",
            "Voice Isolation: separação de voz de ambiente com IA",
            "Generative AI no Premiere: extensão de clipes e preenchimento",
            "Auto Reframe no Premiere para múltiplos formatos automaticamente",
            "Adobe Sensei: busca de assets por conteúdo visual",
          ],
        },
        {
          title: "Projeto Entregável e Portfólio",
          topics: [
            "Edição de curta-metragem ou documentário de 10-15 minutos",
            "Color grading completo de projeto real com entrega em múltiplos formatos",
            "Criação de showreel profissional de 2-3 minutos",
            "Publicação de portfólio no Vimeo e LinkedIn",
            "Certificação Blackmagic Design: DaVinci Resolve Operator",
          ],
        },
      ],
      tools: [
        "DaVinci Resolve 19",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Adobe Audition",
        "Blackmagic Design Camera",
      ],
    },
  ],
}

function DavinciPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
