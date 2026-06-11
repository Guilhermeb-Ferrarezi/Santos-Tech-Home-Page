import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/capcut")({
  component: CapcutPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Edição de Vídeo — CapCut para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a editar Reels, TikToks e Shorts com CapCut usando IA, legendas automáticas e efeitos profissionais. Curso presencial em Ribeirão Preto para criadores e empreendedores.",
      path: "/adultos/cursos/capcut",
    }),
})

const COURSE_DATA = {
  nome: "Edição de Vídeo — CapCut",
  categoria: "Design & Criação",
  tagline: "Edite vídeos virais no celular e no PC como um profissional",
  targetAudience: [
    "Criador de conteúdo que quer editar Reels, TikToks e Shorts de forma rápida e profissional",
    "Empreendedor que quer produzir vídeos de vendas e depoimentos sem contratar editor",
    "Social media que precisa entregar vídeos com qualidade e agilidade para múltiplos clientes",
    "Influenciador iniciante que quer aprender os recursos de IA e tendências de edição",
    "Profissional que quer migrar para a carreira de editor de vídeo para redes sociais",
  ],
  tiers: [
    {
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Editar vídeos para Reels, TikTok e Shorts com qualidade profissional usando CapCut no celular e no computador.",
      modules: [
        {
          title: "CapCut — Interface e Fluxo de Trabalho",
          topics: [
            "Diferenças entre CapCut Mobile e CapCut PC/Web",
            "Importação e organização de clipes na timeline",
            "Cortes, trims e ajuste de velocidade (slow motion e time-lapse)",
            "Adição e sincronização de trilha sonora",
            "Transições profissionais e efeitos de câmera",
            "Exportação em 1080p e 4K para cada plataforma",
          ],
        },
        {
          title: "Texto, Legendas e Gráficos",
          topics: [
            "Geração automática de legendas com IA (Autogenerate Captions)",
            "Edição e estilização de legendas virais (estilo Podcasts)",
            "Animação de títulos e chamadas para ação (CTAs)",
            "Uso de stickers, emojis e elementos gráficos animados",
            "Criação de lower thirds e créditos profissionais",
          ],
        },
        {
          title: "Ajustes de Imagem e Cor",
          topics: [
            "Filtros e LUTs para identidade visual consistente",
            "Ajuste de exposição, saturação e temperatura de cor",
            "Remoção de fundo com Chroma Key e IA",
            "Estabilização de vídeo automática",
            "Criação de templates reutilizáveis para branding",
          ],
        },
        {
          title: "Projetos Práticos",
          topics: [
            "Edição de Reel de 30 segundos para produto",
            "Vídeo de depoimento com cortes ritmados e legendas",
            "Talking head com fundo virtual e letreiro animado",
            "Criação de template de série para feed",
          ],
        },
      ],
      tools: ["CapCut Mobile", "CapCut PC", "CapCut Web"],
    },
  ],
}

function CapcutPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
