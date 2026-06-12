import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/modelagem-3d")({
  component: Modelagem3dPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Modelagem 3D para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Blender e SketchUp do zero ao portfólio 3D profissional em Ribeirão Preto. Renderização fotorrealista, escultura digital e IA generativa — aulas presenciais e individuais na Santos Tech.",
      path: "/adultos/cursos/modelagem-3d",
    }),
})

const COURSE_DATA = {
  nome: "Modelagem 3D: Blender e SketchUp",
  categoria: "Universo 3D",
  tagline: "Do zero ao portfólio 3D profissional que o mercado contrata",
  targetAudience: [
    "Você trabalha com arquitetura, design de interiores ou engenharia e quer sair do papel para o 3D",
    "Você quer criar produtos, cenários ou personagens para games, filmes ou animação",
    "Você usa SketchUp básico e quer dominar renderização fotorrealista com V-Ray ou Lumion",
    "Você quer atuar como freelancer de visualização 3D ou apresentação de projetos",
    "Você nunca abriu Blender ou SketchUp e quer aprender do zero com método profissional",
    "Você já modela em outras ferramentas e quer migrar para o Blender 4.x com IA integrada",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar e apresentar modelos 3D básicos em Blender e SketchUp para uso imediato em projetos",
      modules: [
        {
          title: "Interface e Navegação no Blender 4.x",
          topics: [
            "Configuração do workspace e atalhos essenciais (G, R, S, X, Z)",
            "Viewport: modo sólido, wireframe, renderização em tempo real",
            "Collections, outliner e organização de cena",
            "Transformações precisas com coordenadas numéricas",
            "Edit Mode vs Object Mode: quando usar cada um",
            "Snap, pivot e transformações de precisão",
          ],
        },
        {
          title: "Modelagem Poligonal no Blender",
          topics: [
            "Primitivas 3D e técnicas de extrude, inset e loop cut",
            "Modificadores Mirror, Array, Boolean e Solidify",
            "Bevel, Subdivision Surface e controle de topologia",
            "Normals e problemas comuns de mesh",
            "Modelagem de objeto doméstico do zero ao acabamento",
          ],
        },
        {
          title: "SketchUp Pro: Modelagem Arquitetônica",
          topics: [
            "Interface do SketchUp 2025 e ferramentas de desenho fundamentais",
            "Grupos e Componentes: como reusar e organizar geometria",
            "Modelagem de planta baixa importada em DWG",
            "Criação de paredes, pisos, telhados e aberturas",
            "Uso da 3D Warehouse: importar mobiliário e elementos",
            "Tags (layers) e cenas para apresentação de projeto",
          ],
        },
        {
          title: "Materiais, Texturas e Apresentação Básica",
          topics: [
            "Aplicação de materiais e texturas no SketchUp",
            "Criação de material Principled BSDF no Blender",
            "UV Mapping básico: Smart UV Project e Unwrap manual",
            "Iluminação com luz de área e HDRI no Blender",
            "Exportação de imagem e configuração de câmera",
            "Renderização rápida com Eevee para apresentações",
          ],
        },
      ],
      tools: ["Blender 4.x", "SketchUp Pro 2025", "3D Warehouse"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Produzir renders fotorrealistas, escultura orgânica e apresentações profissionais de projeto com V-Ray ou Lumion",
      modules: [
        {
          title: "Interface e Navegação no Blender 4.x",
          topics: [
            "Configuração do workspace e atalhos essenciais (G, R, S, X, Z)",
            "Viewport: modo sólido, wireframe, renderização em tempo real",
            "Collections, outliner e organização de cena",
            "Transformações precisas com coordenadas numéricas",
            "Edit Mode vs Object Mode: quando usar cada um",
            "Snap, pivot e transformações de precisão",
          ],
        },
        {
          title: "Modelagem Poligonal e Modificadores Avançados",
          topics: [
            "Primitivas 3D e técnicas de extrude, inset e loop cut",
            "Modificadores Mirror, Array, Boolean, Solidify, Bevel e Lattice",
            "Topologia limpa: quads, edge loops e densidade de malha",
            "Asset Browser e bibliotecas de objetos reutilizáveis",
            "Modelagem hard-surface de produto industrial",
            "Modelagem arquitetônica: fachada e volumetria urbana",
          ],
        },
        {
          title: "Escultura Digital com Blender",
          topics: [
            "Multires vs Dyntopo: quando usar cada abordagem",
            "Brushes essenciais: Draw, Clay, Crease, Smooth, Grab",
            "Simetria, Face Sets e Masks para escultura precisa",
            "Remesh e retopologia básica para produção",
            "Detalhamento de superfícies e skin textures",
            "Exportação para impressão 3D ou game engine",
          ],
        },
        {
          title: "Materiais PBR e Shader Editor",
          topics: [
            "Principled BSDF: roughness, metallic, specular e subsurface",
            "UV Mapping manual e Texture Paint no Blender",
            "Bake de mapas AO, Normal e Diffuse",
            "Materiais procedurais com Noise, Voronoi e Math nodes",
            "Vertex Paint e weight painting para efeitos especiais",
          ],
        },
        {
          title: "Renderização com Cycles e Eevee-Next",
          topics: [
            "Configurações de sampling, denoising (OptiX e OpenImageDenoise)",
            "Lighting: HDRI, área, ponto, sol e mesh light",
            "Compositor do Blender: color grading, DOF e glare",
            "Passes de render e composição em camadas",
            "Camera settings: DOF, distorção e animação de câmera",
            "Render farm e uso de GPU para produção acelerada",
          ],
        },
        {
          title: "SketchUp Pro Avançado com V-Ray e Lumion",
          topics: [
            "Extensões essenciais: Curviloft, FredoScale, CleanUp3",
            "V-Ray para SketchUp: materiais PBR, iluminação IES e HDRI",
            "Lumion 2025: importação de modelos, cenários e animação de cenas",
            "LayOut: pranchas técnicas, cotas e apresentação impressa",
            "SketchUp Diffusion: renderização com IA generativa integrada",
            "Exportação para DWG, FBX, OBJ e formatos de realidade aumentada",
          ],
        },
      ],
      tools: [
        "Blender 4.x",
        "SketchUp Pro 2025",
        "V-Ray 7",
        "Lumion 2025",
        "LayOut",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar pipeline completo de modelagem, animação, IA generativa e entrega de projeto 3D profissional com portfólio publicável",
      modules: [
        {
          title: "Modelagem Hard-Surface e Orgânica Avançada",
          topics: [
            "Retopologia profissional com Shrinkwrap e RetopoFlow",
            "Geometry Nodes: modelagem procedural e arrays paramétricos",
            "Bevel Shader e controle de chanfros por weight",
            "Modelagem de personagem: anatomia, proporção e detalhamento",
            "Criação de assets de game-ready com LODs",
            "Pipeline CAD-to-Blender: importação de STEP, STL e OBJ",
          ],
        },
        {
          title: "Escultura e Texturização Profissional",
          topics: [
            "Escultura de alta frequência com alpha brushes customizados",
            "Texture painting multi-layer com máscaras avançadas",
            "Bake workflow: high-poly para low-poly com xNormal e Blender",
            "Substance Painter: texturização PBR profissional integrada ao Blender",
            "Stylized texturing com IA usando Meshy Text-to-Texture",
          ],
        },
        {
          title: "Animação e Motion Graphics",
          topics: [
            "Keyframes, interpolações e Graph Editor profissional",
            "Rigging: armatures, IK/FK e weight painting de personagem",
            "NLA Editor para mixagem de animações",
            "Grease Pencil: animação 2D integrada ao 3D",
            "Simulações: cloth, rigid body e partículas",
            "Animação de câmera e tracking de câmera real",
          ],
        },
        {
          title: "IA Integrada ao Pipeline 3D",
          topics: [
            "Meshy AI: geração de modelos 3D por prompt de texto",
            "SketchUp Diffusion: renderizações estilizadas por IA",
            "Blender + Stable Diffusion: inpainting e concept art para texturas",
            "DreamBooth para geração de variações de assets",
            "Automação de tarefas repetitivas com Python scripting no Blender",
            "Fluxo de trabalho IA-first: do conceito ao modelo em horas",
          ],
        },
        {
          title: "Projeto Final e Portfólio",
          topics: [
            "Definição de briefing e conceito do projeto entregável",
            "Pipeline completo: concept, modelagem, textura, iluminação e render",
            "Animação ou walkthrough de apresentação de projeto",
            "Publicação em ArtStation e Behance com estratégia de portfólio",
            "Precificação de serviços de modelagem 3D como freelancer",
            "Uso de IA para criar mockups e variações rápidas para cliente",
          ],
        },
      ],
      tools: [
        "Blender 4.x",
        "SketchUp Pro 2025",
        "V-Ray 7",
        "Lumion 2025",
        "Substance Painter",
        "Meshy AI",
        "Python scripting",
      ],
    },
  ],
}

function Modelagem3dPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
