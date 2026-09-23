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
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Executar projetos completos de edição com color grading profissional no Adobe Premiere, do corte à entrega final.",
      modules: [
        {
          title: "Adobe Premiere — Interface e Projeto",
          topics: [
            "Instalação via Creative Cloud e criação de projetos",
            "Interface: painel Project, Timeline, Program Monitor e Lumetri",
            "Configurações de sequência: resolução, frame rate e codecs",
            "Media Browser, organização de bins e uso de proxies",
            "Atalhos de teclado para edição ágil",
          ],
        },
        {
          title: "Edição e Montagem",
          topics: [
            "Cortes, trims e ajuste de velocidade (time remapping)",
            "Edição multicam para entrevistas e eventos",
            "Essential Graphics: títulos e templates de texto",
            "Marcadores e organização de timeline complexa",
            "Transições profissionais e efeitos de câmera",
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
          title: "Color Grading com Lumetri",
          topics: [
            "Lumetri Color: curvas, rodas de cor e correção primária",
            "Uso de LUTs e criação de look personalizado",
            "Scopes: Waveform, Vectorscope e Parade",
            "Correspondência de cor entre cenas (Color Match)",
          ],
        },
        {
          title: "Exportação e Entrega",
          topics: [
            "Fila de exportação com Adobe Media Encoder",
            "Exportação para YouTube, Vimeo, Instagram e broadcast",
            "Compressão H.264, H.265 e ProRes",
            "Presets de entrega para cliente e agência",
          ],
        },
      ],
      tools: ["Adobe Premiere Pro", "Adobe Media Encoder"],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar o Adobe Premiere em nível profissional completo, incluindo motion graphics, color grading cinematográfico e IA generativa, atuando como editor sênior em agência ou emissora.",
      modules: [
        {
          title: "Edição Avançada e Fluxo Colaborativo",
          topics: [
            "Productions e Team Projects para projetos grandes",
            "Organização de mídia em produções colaborativas",
            "Workflow com proxies em produções 4K/6K",
            "Compound clips e nested sequences",
          ],
        },
        {
          title: "Color Grading Cinematográfico",
          topics: [
            "Scopes avançados: Waveform, Vectorscope, Parade e Histogram",
            "Gerenciamento de cor e HDR no Lumetri",
            "Entrega para DCI-P3 e Rec.2020",
            "Look development e grading por cena",
          ],
        },
        {
          title: "Motion Graphics com After Effects",
          topics: [
            "Integração Premiere + After Effects com Dynamic Link",
            "Essential Graphics Templates avançados (Motion Graphics Templates)",
            "Composição de títulos animados e lower thirds",
            "Tracking de objetos e chroma key",
          ],
        },
        {
          title: "IA no Premiere (Adobe Sensei / Firefly)",
          topics: [
            "Generative Extend: extensão de clipes com IA generativa",
            "Auto Reframe para múltiplos formatos automaticamente",
            "Enhance Speech: limpeza de áudio com IA",
            "Scene Edit Detection: decupagem automática de clipes",
            "Adobe Sensei: busca de assets por conteúdo visual",
            "Legendas automáticas com transcrição por IA",
          ],
        },
        {
          title: "Projeto Entregável e Portfólio",
          topics: [
            "Edição de curta-metragem ou peça publicitária completa",
            "Color grading e entrega em múltiplos formatos",
            "Criação de showreel profissional de 2-3 minutos",
            "Publicação de portfólio no Vimeo e LinkedIn",
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
      a: "Não. O curso já parte da instalação via Creative Cloud e da interface do zero, incluindo os atalhos básicos e a estrutura de projeto. Se você já edita no celular ou é curioso mas nunca abriu o Premiere, esse é o ponto de partida — o curso vai te levar até o color grading com Lumetri e o Dynamic Link com After Effects no nível Profissional + IA.",
    },
    {
      q: "Qual a diferença entre o nível Intermediário e o Profissional + IA?",
      a: "No Intermediário você aprende o fluxo completo de edição: cortes, áudio no Essential Sound, color grading com Lumetri e exportação para YouTube, Instagram e broadcast. No Profissional + IA você avança para motion graphics com After Effects, color grading cinematográfico com scopes avançados, as ferramentas de IA do Adobe Sensei e Firefly (Generative Extend, Auto Reframe, Enhance Speech) e sai com um showreel pronto para a certificação Adobe Certified Professional.",
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
