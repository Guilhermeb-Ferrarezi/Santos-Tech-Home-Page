import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/canva")({
  component: CanvaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Design Gráfico — Canva Pro para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Canva Pro do zero ao design profissional: posts, apresentações, identidade visual e Magic Studio com IA. Aulas individuais e flexíveis em Ribeirão Preto.",
      path: "/adultos/cursos/canva",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Design Gráfico — Canva Pro",
  categoria: "Design & Criação",
  tagline: "Do zero ao design profissional que atrai clientes de verdade",
  targetAudience: [
    "Quer criar posts, stories e artes para redes sociais sem depender de designer",
    "Empreendedor que precisa de materiais visuais profissionais com orçamento enxuto",
    "Social media ou assistente de marketing que quer dominar a ferramenta mais usada no mercado",
    "Freelancer que quer oferecer criação de conteúdo visual como serviço",
    "Profissional que já usa o Canva gratuito e quer explorar o potencial completo do Pro",
  ],
  tiers: [
    {
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Criar peças profissionais para redes sociais, apresentações e materiais de divulgação sem experiência prévia em design.",
      modules: [
        {
          title: "Interface e Fundamentos do Canva Pro",
          topics: [
            "Navegação no painel principal e atalhos de teclado",
            "Diferenças entre conta gratuita e Canva Pro",
            "Criação e organização de pastas e Brand Kit",
            "Importação de fontes, logos e paletas de cor personalizadas",
            "Configuração de tamanhos personalizados para cada rede social",
          ],
        },
        {
          title: "Design para Redes Sociais",
          topics: [
            "Templates para Feed, Stories, Reels e YouTube Thumbnail",
            "Hierarquia visual: tipografia, cor e espaçamento",
            "Uso de elementos gráficos, ícones e molduras",
            "Criação de Carrossel com identidade visual consistente",
            "Exportação em PNG, PDF e MP4 com configurações otimizadas",
          ],
        },
        {
          title: "Apresentações e Materiais Impressos",
          topics: [
            "Criação de apresentações profissionais com animações de slide",
            "Design de flyer, cardápio e cartão de visita para impressão",
            "Configurações de sangria e resolução para gráficas",
            "Templates de proposta comercial e portfólio",
            "Exportação em PDF impresso com marcas de corte",
          ],
        },
        {
          title: "Colaboração e Entrega de Projetos",
          topics: [
            "Compartilhamento de designs com clientes para aprovação",
            "Criação de links públicos e controle de permissões",
            "Organização de projetos por cliente na área de trabalho",
            "Uso de comentários e histórico de versões",
            "Criação de templates reutilizáveis para equipes",
          ],
        },
      ],
      tools: ["Canva Pro", "Google Drive", "WhatsApp Business"],
    },
  ],
}

function CanvaPage() {
  return (
    <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
  )
}
