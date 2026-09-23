import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/photoshop")({
  component: PhotoshopPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Design Gráfico — Photoshop + Illustrator Particular em Ribeirão Preto — Santos Tech",
      description:
        "Domine Photoshop e Illustrator do zero ao portfólio profissional em Ribeirão Preto. Retoque, identidade visual, Adobe Firefly e IA generativa para designers, fotógrafos e profissionais de marketing.",
      path: "/particular/cursos/photoshop",
    }),
})

const COURSE_DATA = {
  nome: "Design Gráfico — Photoshop + Illustrator",
  categoria: "Design & Criação",
  tema: "design" as const,
  logo: "photoshop",
  variante: "photoshop",
  tagline: "Adobe do zero ao portfólio que compete com qualquer agência",
  targetAudience: [
    "Aspira trabalhar em agência de publicidade, estúdio ou como designer freelancer",
    "Já usa Canva mas quer aprender as ferramentas Adobe usadas pelo mercado profissional",
    "Fotógrafo que quer dominar retoque, tratamento de cor e composição avançada",
    "Profissional de marketing que precisa criar peças no padrão exigido por grandes marcas",
    "Designer iniciante que quer construir portfólio sólido com ferramentas da indústria",
  ],
  tiers: [
    {
      levelName: "Photoshop + Illustrator",
      totalHours: "48h",
      outcome:
        "Dominar Photoshop e Illustrator do zero absoluto até a composição fotorrealista, a identidade visual completa e os recursos de IA generativa do Adobe Firefly — pronto para montar portfólio competitivo e atuar como designer, retocador ou freelancer no mercado profissional.",
      modules: [
        {
          title: "Photoshop — Interface e Ferramentas Fundamentais",
          topics: [
            "Workspace, painéis e atalhos essenciais",
            "Modos de cor: RGB vs CMYK para tela e impressão",
            "Seleções precisas com Laço, Varinha Mágica e Select Subject",
            "Camadas, grupos e organização de projetos complexos",
            "Máscaras de camada e recorte de objetos com precisão",
            "Ajustes não destrutivos com Curves, Levels e Hue/Saturation",
          ],
        },
        {
          title: "Photoshop — Retoque e Composição de Imagem",
          topics: [
            "Correção de pele: Healing Brush, Patch Tool, Clone Stamp e Frequency Separation para retoque editorial avançado",
            "Remoção de objetos com Content-Aware Fill e substituição automática de céu com Sky Replacement",
            "Dodge and Burn para modelagem de volume e profundidade, e tratamento de cor com LUTs personalizados",
            "Composição de imagens: substituição de fundos, múltiplas camadas e fontes de luz para resultado fotorrealista",
            "Efeitos de texto profissionais com estilos de camada",
            "Exportação para web, redes sociais, gráfica, impressão em grande formato, e-commerce e campanhas digitais",
          ],
        },
        {
          title: "Photoshop Avançado — Composição, Cor e Automação",
          topics: [
            "Blend Modes avançados para composições cinematográficas",
            "Smart Objects e transformações não destrutivas",
            "Pintura digital e técnicas de texturização",
            "Color Grading cinematográfico com Camera Raw, Curves e Gradient Maps",
            "Automação de fluxo de trabalho com Actions, Scripts e Batch Processing",
          ],
        },
        {
          title: "Illustrator — Fundamentos de Vetores",
          topics: [
            "Interface do Illustrator e diferença entre raster e vetor",
            "Ferramenta Caneta (Pen Tool) para criação de formas precisas",
            "Pathfinder e Shape Builder para combinação de formas",
            "Tipografia vetorial: kerning, tracking e criação de outline",
            "Criação de logo simples em vetor com variações de cor",
            "Exportação em SVG, EPS, PDF e PNG com fundo transparente",
          ],
        },
        {
          title: "Illustrator Avançado — Identidade Visual e Sistemas de Marca",
          topics: [
            "Sistemas de identidade visual completos e brand systems escaláveis para múltiplas aplicações",
            "Criação de ícones, pictogramas e padrões vetoriais com Pattern Tool",
            "Infográficos e data visualization vetorial",
            "Illustrator para estamparia, embalagens, product design, serigrafia e corte a laser",
            "Tipografia expressiva e lettering vetorial",
            "Illustrator para motion: exportação de vetores para After Effects",
          ],
        },
        {
          title: "Adobe Firefly e IA Generativa",
          topics: [
            "Generative Fill: adição e remoção de objetos por prompt no Photoshop",
            "Generative Expand: extensão inteligente de composições",
            "Firefly Image Model 5: geração de imagens 4MP para campanhas",
            "Generative Shape Fill no Illustrator: vetores por prompt de texto",
            "Generative Recolor: recoloração automática de ilustrações",
            "Text to Pattern: criação de padrões vetoriais com IA",
            "Harmonize: integração fotorrealista de objetos em cenas",
            "Fluxo de trabalho IA: do prompt ao arquivo final entregável",
          ],
        },
        {
          title: "Direção de Arte e Projeto de Branding Completo",
          topics: [
            "Briefing, pesquisa de referências e criação de peças publicitárias para campanha 360°",
            "Criação de logo, variações e sistema de marca completo",
            "Aplicações de marca: embalagem, papelaria, digital, outdoor e layout editorial (revistas e e-books)",
            "Mockups profissionais e manual de identidade visual em PDF interativo",
            "Gestão de projeto criativo, apresentação e defesa para banca simulada",
            "Entrega de arquivos ao cliente e publicação de portfólio em Behance e portfolio.adobe.com",
          ],
        },
      ],
      tools: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Camera Raw",
        "Adobe Firefly",
        "Adobe Bridge",
        "Adobe InDesign",
        "Behance",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já uso Canva — preciso saber Photoshop ou Illustrator antes de começar?",
      a: "Não. O curso começa pela interface e pelas ferramentas fundamentais dos dois programas, do zero absoluto. A ideia é justamente te tirar do Canva e te levar pras ferramentas Adobe que o mercado profissional usa.",
    },
    {
      q: "Sou fotógrafo — esse curso ensina retoque de verdade ou só design gráfico?",
      a: "As duas coisas. O curso tem módulos dedicados a retoque de pele com Frequency Separation, Dodge and Burn, correção de cor e composição fotorrealista — técnicas usadas em fotografia profissional, não só em peças gráficas.",
    },
  ],
}

function PhotoshopPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
