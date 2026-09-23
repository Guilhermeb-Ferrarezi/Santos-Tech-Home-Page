import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/davinci")({
  component: DavinciPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Edição de Vídeo — DaVinci Resolve Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda edição profissional com DaVinci Resolve: cortes, Fairlight, color grading e Fusion. Curso presencial particular em Ribeirão Preto para videomakers, criadores de conteúdo e profissionais do audiovisual.",
      path: "/particular/cursos/davinci",
    }),
})

const COURSE_DATA = {
  nome: "Edição de Vídeo — DaVinci Resolve",
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
        "Executar projetos completos de edição com color grading profissional no DaVinci Resolve, do corte à entrega final.",
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
          title: "Exportação e Entrega",
          topics: [
            "Configurações de render na página Deliver",
            "Exportação para YouTube, Vimeo, Instagram e broadcast",
            "Compressão H.264, H.265 e ProRes",
            "Exportação com e sem áudio, legendas e capítulos",
          ],
        },
      ],
      tools: ["DaVinci Resolve 19", "Fairlight Audio"],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar o DaVinci Resolve em nível profissional completo, incluindo efeitos visuais, IA e entrega para cinema, TV e streaming, atuando como editor ou colorista sênior.",
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
          title: "IA no DaVinci Resolve (Neural Engine)",
          topics: [
            "Magic Mask: rotoscoping automático com IA",
            "Scene Cut Detection: decupagem automática de clipes",
            "Speed Warp: slow motion por IA em qualquer material",
            "Voice Isolation e Dialogue Leveler: limpeza e nivelamento automático de voz no Fairlight",
            "Smart Reframe: reenquadramento automático para vertical e quadrado",
            "Super Scale: upscale de imagem com IA",
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
      tools: ["DaVinci Resolve 19", "Fairlight Audio", "Blackmagic Design Camera"],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber usar o DaVinci Resolve pra começar?",
      a: "Não. O curso já parte da instalação e da interface do zero, incluindo os atalhos básicos e a estrutura de projeto. Se você já edita no celular ou é curioso mas nunca abriu o Resolve, esse é o ponto de partida — o curso vai te levar até o color grading profissional e o Fusion no nível Profissional + IA.",
    },
    {
      q: "Qual a diferença entre o nível Intermediário e o Profissional + IA?",
      a: "No Intermediário você aprende o fluxo completo de edição: cortes, áudio no Fairlight, color grading com sistema de nós e exportação para YouTube, Instagram e broadcast. No Profissional + IA você avança para efeitos visuais com Fusion, color grading cinematográfico com scopes, as ferramentas de IA do Neural Engine (Magic Mask, Voice Isolation, Smart Reframe, Super Scale) e sai com um showreel e a certificação Blackmagic Design: DaVinci Resolve Operator.",
    },
    {
      q: "O curso dá alguma certificação reconhecida no mercado?",
      a: "Sim. No nível Profissional + IA, o projeto final inclui a certificação Blackmagic Design: DaVinci Resolve Operator, além de um showreel de 2-3 minutos pronto para publicar no Vimeo e no LinkedIn — ótimo para quem precisa comprovar domínio técnico como editor ou colorista.",
    },
  ],
}

function DavinciPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
