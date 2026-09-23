import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/autocad")({
  component: AutocadPage,
  head: () =>
    pageMeta({
      title: "Curso de AutoCAD Particular em Ribeirão Preto — Santos Tech",
      description:
        "Domine AutoCAD 2D e 3D com aulas individuais e presenciais em Ribeirão Preto. Do traço à prancha executiva para arquitetos, engenheiros e projetistas técnicos.",
      path: "/particular/cursos/autocad",
    }),
})

const COURSE_DATA = {
  nome: "AutoCAD",
  categoria: "Universo 3D",
  tema: "universo-3d" as const,
  logo: "autocad",
  variante: "autocad",
  tagline: "Do traço à prancha técnica perfeita que arquitetos e engenheiros entregam",
  targetAudience: [
    "Você trabalha ou quer trabalhar como desenhista técnico, projetista ou arquiteto e precisa dominar AutoCAD",
    "Você já usa AutoCAD no básico e quer otimizar produtividade com blocos, xrefs e plotagem profissional",
    "Você estuda ou atua em engenharia civil, mecânica, elétrica ou arquitetura e precisa de CAD no currículo",
    "Você usa ferramentas concorrentes (CorelDraw, SketchUp) e quer migrar para o padrão do mercado",
    "Você quer explorar modelagem 3D sólida e paramétrica no AutoCAD para projetos industriais",
    "Você quer usar os novos recursos de IA do AutoCAD 2025+ para acelerar seu fluxo de trabalho",
  ],
  tiers: [
    {
      levelName: "AutoCAD",
      totalHours: "48h",
      outcome:
        "Desenhar no AutoCAD do zero absoluto até projetos executivos completos em 2D e 3D, com blocos inteligentes, IA, modelagem sólida e automação via AutoLISP, incluindo uma especialização em Civil 3D, Mechanical ou Plant 3D — pronto para atuar como desenhista técnico, projetista ou engenheiro.",
      modules: [
        {
          title: "Interface, Configuração e Padrões de Projeto",
          topics: [
            "Interface do AutoCAD 2025: ribbon, command line, tool palettes, status bar e perfis de workspace personalizados",
            "Unidades, limites e sistemas de coordenadas — absoluto, relativo, polar — e UCS para plano de trabalho personalizado",
            "Zoom, Pan, Orbit e navegação eficiente com atalhos, além das variáveis de sistema essenciais (LTSCALE, DIMSCALE, TEXTSIZE, HPSCALE)",
            "Templates (.dwt) corporativos com layers, estilos de cota e blocos pré-configurados",
            "Sincronização de perfis de trabalho e arquivos na nuvem com Autodesk Drive",
          ],
        },
        {
          title: "Desenho 2D de Precisão",
          topics: [
            "Comandos de criação: LINE, POLYLINE, CIRCLE, ARC, RECTANGLE, ELLIPSE e SPLINE",
            "OSNAP, ORTHO e POLAR TRACKING, incluindo tracking de objeto e pontos de referência temporários",
            "Comandos de edição: MOVE, COPY, ROTATE, SCALE, MIRROR, OFFSET, TRIM, EXTEND, FILLET, CHAMFER e BREAK",
            "GRIPS, aliases personalizados e Geometric/Dimensional Constraints para desenho paramétrico 2D",
            "OVERKILL, AUDIT, PURGE e RECOVER: limpeza, otimização e recuperação de arquivos DWG",
          ],
        },
        {
          title: "Layers, Anotação e Documentação Técnica",
          topics: [
            "Gerenciamento de layers: criação, cores, tipos de linha, espessuras, freeze, lock e isolate",
            "MTEXT e DTEXT: formatação, estilos e alinhamento de textos técnicos",
            "DIMSTYLE e tipos de cota (linear, alinhada, angular, raio, diâmetro, ordenada) para normas ABNT",
            "QLEADER e MULTILEADER para anotações técnicas",
            "Layout, Viewports, Plot Style Tables (CTB/STB) e Sheet Sets: plotagem em escala, PDF com espessuras corretas, automação de carimbo, numeração e plotagem em lote",
          ],
        },
        {
          title: "Blocos, Referências e Produtividade com IA",
          topics: [
            "BLOCK, INSERT, WBLOCK e ATTDEF/ATTEDIT: blocos reutilizáveis, biblioteca compartilhada e atributos para legendas e carimbos",
            "HATCH: hachuras com padrões ANSI, ISO e personalizados",
            "XREF: attachar, sobrepor, clipar e gerenciar referências externas em equipe",
            "Express Tools: FLATTEN, ALIGN SPACE, COPY NESTED, BURST e ferramentas completas de plotagem em lote, layers e texto",
            "Smart Blocks (Placement, Replacement e Object Detection) e Markup Import & Assist: IA para blocos e conversão de PDF em CAD",
            "Autodesk Assistant, Activity Insights e Collaboration for AutoCAD: produtividade e revisão colaborativa em nuvem",
          ],
        },
        {
          title: "Modelagem 3D Sólida, Superfícies e Renderização",
          topics: [
            "Workspace 3D Modeling, ViewCube e criação de sólidos: BOX, CYLINDER, SPHERE, CONE, WEDGE e TORUS",
            "Operações booleanas (UNION, SUBTRACT, INTERSECT) e sólidos a partir de perfis 2D: EXTRUDE, REVOLVE, SWEEP, LOFT e PRESSPULL",
            "Edição de sólidos: CHAMFER EDGE, FILLET EDGE, SHELL e SLICE",
            "Superfícies NURBS (SURFPATCH, SURFFILLET) e malhas 3D (MESH)",
            "Renderização: materiais, iluminação e render de alta qualidade",
            "Geração de vistas 2D a partir do modelo 3D (VIEWBASE, VIEWSECTION, VIEWDETAIL) e integração com Revit, Navisworks e Inventor",
          ],
        },
        {
          title: "Especialização, Automação e Projeto Executivo",
          topics: [
            "Especialização configurável por área: Civil 3D (superfícies, alinhamentos horizontais, perfis verticais, seções transversais e volumes de terraplenagem), Mechanical (GD&T, tabelas de furos e catálogo de peças normalizadas) ou Plant 3D (isométricos de tubulação e P&ID)",
            "Fundamentos de AutoLISP: variáveis, funções, estruturas de controle e criação de comandos personalizados",
            "DCL, Action Macros e Action Recorder para automação de tarefas repetitivas, com integração ao Excel via Data Extraction e introdução a APIs .NET",
            "Neural CAD (preview) e Autodesk Docs: geração automatizada de elementos repetitivos e revisão colaborativa com markups e aprovação digital",
            "Desenvolvimento do projeto executivo completo — planta baixa, cortes, fachadas e detalhes — com quadro de áreas e esquadrias conforme a NBR 6492",
            "Exportação em DWG, DXF, PDF e DWF (com AEC Exchange para Revit), compatibilidade com RFI/As-Built em obra e preparação de portfólio técnico para certificação Autodesk",
          ],
        },
      ],
      tools: [
        "AutoCAD 2025",
        "Autodesk Account (licença estudantil)",
        "Autodesk Drive",
        "Smart Blocks AI",
        "Express Tools",
        "Sheet Sets Manager",
        "AutoCAD Civil 3D",
        "AutoLISP",
        "Autodesk Docs",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já sei o básico de AutoCAD, vale a pena fazer o curso?",
      a: "Vale. Como as aulas são individuais, o professor avalia o que você já sabe na primeira aula e vai direto ao que importa: produtividade avançada com blocos inteligentes e IA, xrefs, constraints paramétricas, limpeza de arquivo com OVERKILL/PURGE e plotagem profissional em lote — sem repetir o que você já domina.",
    },
    {
      q: "Serve pra quem trabalha com engenharia civil, mecânica ou elétrica?",
      a: "Sim. Além da base completa de AutoCAD 2D e 3D, o curso tem um módulo de especialização configurável por área — Civil 3D para terraplenagem e alinhamentos, Mechanical para GD&T e catálogo de peças, ou Plant 3D para isométricos de tubulação.",
    },
  ],
}

function AutocadPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
