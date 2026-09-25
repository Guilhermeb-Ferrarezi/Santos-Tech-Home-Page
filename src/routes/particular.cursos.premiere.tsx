import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/premiere")({
  component: PremierePage,
  head: () =>
    pageMeta({
      title:
        "Curso de Edição de Vídeo — Adobe Premiere Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda edição profissional com Adobe Premiere: Lumetri Color, integração com After Effects e IA generativa. Curso presencial particular em Ribeirão Preto para editores, agências e profissionais do audiovisual.",
      path: "/particular/cursos/premiere",
    }),
})

const COURSE_DATA = {
  nome: "Edição de Vídeo — Adobe Premiere",
  categoria: "Design & Criação",
  tema: "design" as const,
  logo: "premiere",
  variante: "premiere",
  tagline: "O padrão de agências, emissoras e produtoras — do corte à entrega",
  targetAudience: [
    "Editor iniciante que quer aprender a ferramenta padrão de agências, emissoras e produtoras",
    "Videomaker que já edita no celular e quer dar o próximo passo em qualidade técnica",
    "Profissional de comunicação que precisa editar vídeos institucionais e corporativos",
    "YouTuber ou criador de conteúdo que quer elevar a qualidade de produção do canal",
    "Designer ou motion designer que já usa Photoshop/Illustrator e quer integrar vídeo ao fluxo Adobe",
  ],
  tiers: [
    {
      levelName: "Adobe Premiere",
      totalHours: "48h",
      outcome:
        "Editar profissionalmente no Adobe Premiere do zero absoluto até o color grading cinematográfico, motion graphics com After Effects e os recursos de IA generativa — base para trabalhar em agências, emissoras e produtoras.",
      modules: [
        {
          title: "Interface, Projeto e Primeiros Cortes",
          topics: [
            "Instalação via Creative Cloud e criação de projetos",
            "Interface: painel Project, Timeline, Program Monitor e Lumetri",
            "Configurações de sequência: resolução, frame rate e codecs",
            "Media Browser, organização de bins e uso de proxies",
            "Cortes, trims e ajuste de velocidade (time remapping)",
            "Atalhos de teclado para edição ágil",
          ],
        },
        {
          title: "Montagem Profissional",
          topics: [
            "Edição multicam para entrevistas e eventos",
            "Essential Graphics: títulos e templates de texto",
            "Marcadores e organização de timeline complexa",
            "Transições profissionais e efeitos de câmera",
            "Compound clips e nested sequences",
          ],
        },
        {
          title: "Áudio no Premiere",
          topics: [
            "Essential Sound: diálogo, música e efeitos sonoros",
            "Mixagem, ducking automático e normalização",
            "Redução de ruído e limpeza de áudio",
            "Sincronização de áudio externo com Merge Clips",
          ],
        },
        {
          title: "Color Grading — do Lumetri ao Cinematográfico",
          topics: [
            "Lumetri Color: curvas, rodas de cor e correção primária",
            "Uso de LUTs e criação de look personalizado",
            "Scopes: Waveform, Vectorscope, Parade e Histogram",
            "Correspondência de cor entre cenas (Color Match)",
            "Gerenciamento de cor, HDR e look development por cena",
          ],
        },
        {
          title: "Motion Graphics e IA no Premiere",
          topics: [
            "Integração com After Effects via Dynamic Link",
            "Motion Graphics Templates, títulos animados e lower thirds",
            "Tracking de objetos e chroma key",
            "Generative Extend, Auto Reframe e Enhance Speech (IA generativa)",
            "Legendas automáticas e Scene Edit Detection",
          ],
        },
        {
          title: "Exportação e Projeto Final",
          topics: [
            "Fila de exportação com Adobe Media Encoder",
            "Exportação para YouTube, Vimeo, Instagram e broadcast",
            "Compressão H.264, H.265 e ProRes",
            "Projeto entregável (curta-metragem ou peça publicitária) e showreel",
            "Preparação para a certificação Adobe Certified Professional: Premiere Pro",
          ],
        },
      ],
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Media Encoder", "Adobe Firefly"],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber usar o Adobe Premiere pra começar?",
      a: "Não. O curso já parte da instalação via Creative Cloud e da interface do zero, incluindo os atalhos básicos e a estrutura de projeto. Se você já edita no celular ou é curioso mas nunca abriu o Premiere, esse é o ponto de partida — o curso vai te levar, em ordem, até o color grading cinematográfico, o Dynamic Link com After Effects e os recursos de IA generativa do Adobe Sensei e Firefly.",
    },
    {
      q: "Por que aprender Premiere e não só DaVinci Resolve (ou o contrário)?",
      a: "São ferramentas diferentes, usadas por mercados diferentes. O Premiere é o padrão em agências de publicidade, emissoras e produtoras que já trabalham no ecossistema Adobe (Photoshop, Illustrator, After Effects). O DaVinci Resolve domina em color grading cinematográfico e produções independentes. A Santos Tech oferece os dois cursos separados — você escolhe o que combina com o mercado em que quer atuar, ou faz os dois.",
    },
  ],
}

function PremierePage() {
  return (
    <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
