import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/photoshop")({
  component: PhotoshopPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Design Gráfico — Photoshop + Illustrator para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Domine Photoshop e Illustrator do zero ao portfólio profissional em Ribeirão Preto. Retoque, identidade visual, Adobe Firefly e IA generativa para designers, fotógrafos e profissionais de marketing.",
      path: "/adultos/cursos/photoshop",
    }),
})

const COURSE_DATA = {
  nome: "Design Gráfico — Photoshop + Illustrator",
  categoria: "Design & Criação",
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
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Executar projetos completos de identidade visual, direção de arte e peças publicitárias com qualidade de agência usando Adobe Photoshop e Illustrator.",
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
          title: "Retoque e Manipulação de Imagem",
          topics: [
            "Correção de pele: Healing Brush, Patch Tool e Clone Stamp",
            "Remoção de objetos indesejados com Content-Aware Fill",
            "Tratamento de cor e criação de LUTs personalizados",
            "Composição de imagens e substituição de fundos",
            "Efeitos de texto profissionais com estilos de camada",
            "Exportação para web, redes sociais e gráfica",
          ],
        },
        {
          title: "Photoshop Avançado — Composição e Efeitos",
          topics: [
            "Blend Modes para composições cinematográficas",
            "Smart Objects e transformações não destrutivas",
            "Pintura digital e técnicas de texturização",
            "Color Grading profissional com Camera Raw",
            "Automação com Actions e Batch Processing",
            "Preparação de arquivos para impressão em grande formato",
          ],
        },
        {
          title: "Retoque Profissional e Fotografia",
          topics: [
            "Retoque de pele de alta frequência (Frequency Separation)",
            "Dodge and Burn para modelagem de volume",
            "Substituição de céu automática com Sky Replacement",
            "Composição fotorrealista com múltiplas camadas",
            "Tratamento de imagem para e-commerce (fundo branco, sombra)",
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
          title: "Illustrator Avançado — Identidade Visual",
          topics: [
            "Construção de sistemas de identidade visual completos",
            "Criação de ícones e pictogramas vetoriais",
            "Padrões vetoriais e fundos decorativos com Pattern Tool",
            "Infográficos e data visualization vetorial",
            "Illustrator para estamparia e product design",
            "Preparação de arquivos para serigrafia e corte a laser",
          ],
        },
        {
          title: "Direção de Arte e Design Editorial",
          topics: [
            "Criação de peças publicitárias para campanha 360°",
            "Layout editorial para revistas e e-books",
            "Mockups profissionais para apresentação de identidade visual",
            "Gestão de projeto criativo e entrega de arquivos ao cliente",
          ],
        },
      ],
      tools: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Bridge",
        "Adobe Camera Raw",
        "Adobe InDesign",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar Photoshop, Illustrator e Adobe Firefly com IA para executar projetos de qualquer complexidade, montar portfólio competitivo e atuar como designer sênior ou freelancer.",
      modules: [
        {
          title: "Photoshop — Técnicas Avançadas",
          topics: [
            "Frequency Separation e retoque editorial avançado",
            "Camera Raw como filtro não destrutivo",
            "Composição de cenas impossíveis com múltiplas fontes de luz",
            "Automação de fluxo com Actions e Scripts",
            "Color Grading cinematográfico com Curves e Gradient Maps",
          ],
        },
        {
          title: "Retoque e Composição de Alto Nível",
          topics: [
            "Dodge and Burn para modelagem de volume e profundidade",
            "Substituição de céu automática com Sky Replacement",
            "Composição fotorrealista com múltiplas camadas e fontes de luz",
            "Tratamento de imagem para e-commerce e campanhas digitais",
            "Blend Modes avançados para composições cinematográficas",
          ],
        },
        {
          title: "Illustrator — Sistemas Visuais",
          topics: [
            "Brand systems escaláveis para múltiplas aplicações",
            "Illustrator para motion: exportação de vetores para After Effects",
            "Tipografia expressiva e lettering vetorial",
            "Padrões e texturas para embalagens e produtos físicos",
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
          title: "Projeto de Branding Completo",
          topics: [
            "Briefing e pesquisa de referências para identidade visual",
            "Criação de logo, variações e sistema de marca completo",
            "Aplicações: embalagem, papelaria, digital e outdoor",
            "Manual de identidade visual em PDF interativo",
            "Apresentação do projeto e defesa para banca simulada",
            "Publicação de portfólio em Behance e portfolio.adobe.com",
          ],
        },
      ],
      tools: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Firefly",
        "Adobe Camera Raw",
        "Adobe InDesign",
        "Behance",
      ],
    },
  ],
}

function PhotoshopPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
