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
  tema: "design" as const,
  logo: "davinci",
  variante: "davinci",
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
      levelName: "DaVinci Resolve",
      totalHours: "48h",
      outcome:
        "Editar profissionalmente no DaVinci Resolve do zero absoluto até o color grading cinematográfico, os efeitos visuais com Fusion e as ferramentas de IA do Neural Engine — pronto para atuar como editor ou colorista em produções de cinema, TV e streaming.",
      modules: [
        {
          title: "Interface, Projeto e Primeiros Cortes",
          topics: [
            "Instalação, configuração de GPU e criação de projetos",
            "Navegação entre as páginas: Cut, Edit, Fusion, Color, Fairlight e Deliver",
            "Importação, organização de bins e gerenciamento de mídia; timeline, resolução e frame rate",
            "Decupagem de entrevistas e documentários na página Cut, e edição precisa com Blade e Trim na página Edit",
            "Atalhos de teclado para edição ágil",
          ],
        },
        {
          title: "Montagem Profissional",
          topics: [
            "Inserção de B-roll, cobertura visual, transições e ajuste de velocidade (slow e fast motion)",
            "Estabilização de câmera com DaVinci Resolve Stabilizer",
            "Edição multicam para eventos e entrevistas",
            "Compound clips e timelines aninhadas (nested sequences)",
            "Gerenciamento de projetos colaborativos e otimização de performance com proxies",
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
          title: "Color Grading — do Sistema de Nós ao Cinematográfico",
          topics: [
            "Sistema de nós (serial, paralelo e layer) e correção primária: Lift, Gamma, Gain e Offset",
            "Qualificadores para seleção de cor por área e uso de LUTs (aplicação e criação de look personalizado)",
            "Correspondência de cor entre cenas (Color Match) e scopes: Waveform, Vectorscope, Parade e Histogram",
            "Grading cinematográfico com look de Hollywood, Film Emulation e grain de película",
            "HDR Grading, gerenciamento de cor com ACES e entrega para streaming, DCI-P3, Rec.2020 e Dolby Vision",
          ],
        },
        {
          title: "Efeitos Visuais e IA com Fusion e Neural Engine",
          topics: [
            "Interface baseada em nós do Fusion: composição de texto 3D, títulos animados e title sequences profissionais",
            "Tracking de objetos, Planar Tracking e substituição de elementos (placas e telas)",
            "Keying profissional com DeltaKeyer, Roto (recorte manual de objetos em movimento) e partículas com pEmitter",
            "Magic Mask (rotoscoping automático) e Scene Cut Detection: decupagem automática de clipes com IA",
            "Speed Warp (slow motion por IA), Smart Reframe (reenquadramento automático) e Super Scale (upscale de imagem)",
            "Voice Isolation e Dialogue Leveler: limpeza e nivelamento automático de voz no Fairlight com IA",
          ],
        },
        {
          title: "Exportação e Projeto Final",
          topics: [
            "Configurações de render na página Deliver",
            "Exportação para YouTube, Vimeo, Instagram e broadcast, com compressão H.264, H.265 e ProRes",
            "Exportação com e sem áudio, legendas e capítulos",
            "Projeto entregável: curta-metragem ou documentário de 10-15 minutos, com color grading completo e entrega em múltiplos formatos",
            "Criação de showreel profissional (2-3 minutos) e publicação de portfólio no Vimeo e LinkedIn",
            "Preparação para a certificação Blackmagic Design: DaVinci Resolve Operator",
          ],
        },
      ],
      tools: ["DaVinci Resolve 19", "Fairlight Audio", "Blackmagic Design Camera"],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber usar o DaVinci Resolve pra começar?",
      a: "Não. O curso já parte da instalação e da interface do zero, incluindo os atalhos básicos e a estrutura de projeto. Se você já edita no celular ou é curioso mas nunca abriu o Resolve, esse é o ponto de partida — o curso vai te levar, em ordem, até o color grading cinematográfico, os efeitos visuais com Fusion e as ferramentas de IA do Neural Engine.",
    },
    {
      q: "O curso dá alguma certificação reconhecida no mercado?",
      a: "Sim. O projeto final do curso inclui a certificação Blackmagic Design: DaVinci Resolve Operator, além de um showreel de 2-3 minutos pronto para publicar no Vimeo e no LinkedIn — ótimo para quem precisa comprovar domínio técnico como editor ou colorista.",
    },
  ],
}

function DavinciPage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
