import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/modelagem-3d")({
  component: Modelagem3dPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Modelagem 3D Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Blender e SketchUp do zero ao portfólio 3D profissional em Ribeirão Preto. Renderização fotorrealista, escultura digital e IA generativa — aulas presenciais e individuais na Santos Tech.",
      path: "/particular/cursos/modelagem-3d",
    }),
})

const COURSE_DATA = {
  nome: "Modelagem 3D: Blender e SketchUp",
  categoria: "Universo 3D",
  tema: "universo-3d" as const,
  logo: "blender",
  variante: "modelagem",
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
      levelName: "Modelagem 3D",
      ctaLabel: "curso de Modelagem 3D",
      totalHours: "48h",
      outcome:
        "Modelar, esculpir, texturizar, renderizar e animar em Blender e SketchUp do zero absoluto até o pipeline profissional com V-Ray, Lumion, Substance Painter e IA generativa (Meshy AI, Stable Diffusion) — pronto para criar projetos de arquitetura, produto, personagem e animação com portfólio publicável e precificação como freelancer.",
      modules: [
        {
          title: "Fundamentos do Blender: Interface e Modelagem Poligonal",
          topics: [
            "Workspace, atalhos essenciais (G, R, S, X, Z) e viewport: sólido, wireframe e renderização em tempo real",
            "Collections, outliner, Edit Mode vs Object Mode, snap e pivot",
            "Transformações precisas com coordenadas numéricas",
            "Primitivas 3D e técnicas de extrude, inset e loop cut",
            "Modificadores Mirror, Array, Boolean, Solidify e Bevel",
            "Subdivision Surface, topologia limpa, normals e problemas comuns de mesh",
            "Modelagem de objeto doméstico do zero ao acabamento",
          ],
        },
        {
          title: "SketchUp Pro: Modelagem Arquitetônica do Zero",
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
          title: "Materiais, UV Mapping e Renderização",
          topics: [
            "Aplicação de materiais e texturas no SketchUp",
            "Material Principled BSDF no Blender: roughness, metallic, specular e subsurface",
            "UV Mapping (Smart UV Project e Unwrap manual), Texture Paint e Vertex/Weight Painting",
            "Bake de mapas AO, Normal e Diffuse; materiais procedurais com Noise, Voronoi e Math nodes",
            "Iluminação com HDRI, luz de área, ponto, sol e mesh light",
            "Sampling e denoising (OptiX e OpenImageDenoise) no Cycles e Eevee-Next",
            "Compositor do Blender: color grading, DOF, glare e passes de render em camadas",
            "Configurações de câmera, exportação de imagem e uso de GPU/render farm para produção acelerada",
          ],
        },
        {
          title: "Modelagem Avançada, Procedural e Escultura Digital",
          topics: [
            "Topologia limpa (quads, edge loops), Asset Browser e modificador Lattice",
            "Modelagem hard-surface de produto industrial e arquitetônica: fachada e volumetria urbana",
            "Retopologia profissional (Shrinkwrap, RetopoFlow) e Geometry Nodes para modelagem procedural",
            "Bevel Shader e controle de chanfros por weight",
            "Escultura digital: Multires vs Dyntopo e brushes essenciais (Draw, Clay, Crease, Smooth, Grab)",
            "Simetria, Face Sets, Masks e Remesh para escultura precisa",
            "Modelagem de personagem: anatomia, proporção, detalhamento de superfície e skin textures",
            "Pipeline CAD-to-Blender (STEP, STL, OBJ) e assets game-ready com LODs para impressão 3D ou games",
          ],
        },
        {
          title: "SketchUp Avançado: Renderização Fotorrealista e Apresentação",
          topics: [
            "Extensões essenciais: Curviloft, FredoScale e CleanUp3",
            "V-Ray para SketchUp: materiais PBR, iluminação IES e HDRI",
            "Lumion 2025: importação de modelos, cenários e animação de cenas",
            "LayOut: pranchas técnicas, cotas e apresentação impressa",
            "SketchUp Diffusion: renderização com IA generativa integrada",
            "Exportação para DWG, FBX, OBJ e formatos de realidade aumentada",
          ],
        },
        {
          title: "Animação e Texturização Profissional no Blender",
          topics: [
            "Keyframes, interpolações e Graph Editor profissional",
            "Rigging: armatures, IK/FK e weight painting de personagem",
            "NLA Editor, Grease Pencil (animação 2D) e simulações de cloth, rigid body e partículas",
            "Animação de câmera e tracking de câmera real",
            "Escultura de alta frequência com alpha brushes customizados e texture painting multi-layer com máscaras avançadas",
            "Bake workflow de high-poly para low-poly (xNormal) e Substance Painter para texturização PBR profissional",
          ],
        },
        {
          title: "IA Generativa no Pipeline 3D e Projeto Final de Portfólio",
          topics: [
            "Meshy AI: geração de modelos 3D por prompt de texto e Meshy Text-to-Texture para texturização estilizada com IA",
            "Blender + Stable Diffusion: inpainting e concept art para texturas, e DreamBooth para variações de assets",
            "Automação de tarefas repetitivas com Python scripting no Blender",
            "Fluxo de trabalho IA-first: do conceito ao modelo em horas, com IA para criar mockups e variações rápidas para cliente",
            "Projeto final: briefing, pipeline completo (modelagem, textura, iluminação, render) e walkthrough de apresentação",
            "Publicação em ArtStation e Behance com estratégia de portfólio, e precificação de serviços de modelagem 3D como freelancer",
          ],
        },
      ],
      tools: [
        "Blender 4.x",
        "SketchUp Pro 2025",
        "3D Warehouse",
        "V-Ray 7",
        "Lumion 2025",
        "LayOut",
        "Substance Painter",
        "Meshy AI",
        "Python scripting",
      ],
    },
  ],
  faqItems: [
    {
      q: "Nunca usei Blender nem SketchUp — consigo acompanhar o curso?",
      a: "Sim. O curso foi pensado pra quem nunca abriu nenhum dos dois programas: começa pela interface, navegação e atalhos básicos do Blender e do SketchUp antes de entrar em modelagem de verdade — e te leva, em ordem, até a renderização fotorrealista com V-Ray e Lumion, a escultura digital e os recursos de IA generativa.",
    },
    {
      q: "Esse curso serve pra quem trabalha com arquitetura ou design de interiores?",
      a: "Sim — é um dos públicos principais. Você aprende a sair da planta baixa em SketchUp pra apresentações fotorrealistas de projeto, com renderização profissional em V-Ray e Lumion.",
    },
  ],
}

function Modelagem3dPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
