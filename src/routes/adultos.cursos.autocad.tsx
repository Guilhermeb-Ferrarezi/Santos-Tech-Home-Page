import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/autocad")({
  component: AutocadPage,
  head: () =>
    pageMeta({
      title: "Curso de AutoCAD para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Domine AutoCAD 2D e 3D com aulas individuais e presenciais em Ribeirão Preto. Do traço à prancha executiva para arquitetos, engenheiros e projetistas técnicos.",
      path: "/adultos/cursos/autocad",
    }),
})

const COURSE_DATA = {
  nome: "AutoCAD",
  categoria: "Universo 3D",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Executar plantas baixas e cortes 2D com precisão, gerenciar layers e plotar pranchas técnicas formatadas",
      modules: [
        {
          title: "Interface, Workspace e Configuração",
          topics: [
            "Interface do AutoCAD 2025: ribbon, command line, tool palettes e status bar",
            "Configuração de unidades, limites e sistemas de coordenadas (absoluto, relativo e polar)",
            "Perfis de workspace personalizados e temas de cor",
            "Zoom, Pan, Orbit e navegação eficiente com scroll e atalhos",
            "Configuração de variáveis de sistema essenciais: LTSCALE, DIMSCALE, TEXTSIZE",
            "Templates (.dwt): criação e uso de arquivos padrão de empresa",
          ],
        },
        {
          title: "Desenho 2D com Precisão",
          topics: [
            "Comandos de criação: LINE, POLYLINE, CIRCLE, ARC, RECTANGLE, ELLIPSE, SPLINE",
            "OSNAP (snap a objeto): endpoint, midpoint, intersection, perpendicular, tangent",
            "ORTHO e POLAR TRACKING para desenho em ângulos precisos",
            "Comandos de edição: MOVE, COPY, ROTATE, SCALE, MIRROR, OFFSET, TRIM, EXTEND",
            "FILLET, CHAMFER e BREAK para ajuste de geometrias",
            "GRIPS: edição direta de objetos por pontos de controle",
          ],
        },
        {
          title: "Layers, Textos e Cotagem",
          topics: [
            "Gerenciamento de layers: criação, cores, tipos de linha (LINETYPE) e espessuras (LINEWEIGHT)",
            "Freeze, Lock e Isolate de layers para produtividade",
            "MTEXT e DTEXT: formatação, estilos e alinhamento de textos técnicos",
            "DIMSTYLE: criação de estilos de cota para normas brasileiras (ABNT)",
            "Tipos de cota: linear, alinhada, angular, raio, diâmetro e ordenada",
            "QLEADER e MULTILEADER para anotações técnicas",
          ],
        },
        {
          title: "Blocos, Hachuras e Plotagem",
          topics: [
            "BLOCK e INSERT: criação e inserção de blocos reutilizáveis (portas, janelas, sanitários)",
            "WBLOCK: exportação de blocos para biblioteca compartilhada",
            "ATTDEF e ATTEDIT: atributos de bloco para legendas e carimbos",
            "HATCH: hachuras com padrões ANSI, ISO e personalizados; escala e ângulo",
            "XREF: referência externa de arquivos DWG para trabalho colaborativo",
            "Layout e Viewports: configuração de paper space para plotagem em escalas múltiplas",
            "Plot Style Tables (CTB/STB) e plotagem em PDF com espessuras corretas",
          ],
        },
      ],
      tools: ["AutoCAD 2025", "Autodesk Account (licença estudantil)"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Executar projetos completos 2D com alta produtividade, iniciar modelagem 3D sólida e usar recursos avançados de automação",
      modules: [
        {
          title: "Interface, Workspace e Configuração Profissional",
          topics: [
            "Interface do AutoCAD 2025: ribbon, command line, tool palettes e status bar",
            "Sistemas de coordenadas UCS: definição de plano de trabalho personalizado",
            "Templates (.dwt) corporativos com layers, estilos de cota e blocos pré-configurados",
            "Variáveis de sistema essenciais: LTSCALE, DIMSCALE, TEXTSIZE, HPSCALE",
            "Configuração de perfis de trabalho e sincronização na nuvem (Autodesk Drive)",
          ],
        },
        {
          title: "Desenho 2D com Alta Produtividade",
          topics: [
            "Comandos de criação e edição avançados com aliases personalizados",
            "OSNAP profissional: tracking de objeto, pontos de referência temporários",
            "Geometric Constraints e Dimensional Constraints para desenho paramétrico 2D",
            "OVERKILL, AUDIT e PURGE: limpeza e otimização de arquivos DWG",
            "Express Tools: FLATTEN, ALIGN SPACE, COPY NESTED, BURST e outros",
            "PDF to AutoCAD: importação e conversão com Markup Import & Assist (IA)",
          ],
        },
        {
          title: "Blocos Inteligentes e IA no AutoCAD 2025",
          topics: [
            "Smart Blocks: Placement e Replacement com Autodesk AI",
            "Smart Blocks Object Detection: conversão automática de geometria em blocos",
            "Markup Import & Assist: revisão de projeto com anotações em PDF usando IA",
            "Autodesk Assistant: chatbot integrado para dúvidas e produtividade no workspace",
            "Activity Insights: rastreamento de histórico de edições colaborativas",
            "Collaboration for AutoCAD: revisão simultânea em nuvem",
          ],
        },
        {
          title: "Modelagem 3D Sólida no AutoCAD",
          topics: [
            "Workspace 3D Modeling: interface, ViewCube e configurações de visualização",
            "Criação de sólidos: BOX, CYLINDER, SPHERE, CONE, WEDGE e TORUS",
            "Operações booleanas: UNION, SUBTRACT, INTERSECT para modelagem combinada",
            "EXTRUDE, REVOLVE, SWEEP e LOFT: sólidos a partir de perfis 2D",
            "PRESSPULL: extrusão interativa de faces e regiões",
            "Edição de sólidos: CHAMFER EDGE, FILLET EDGE, SHELL e SLICE",
          ],
        },
        {
          title: "Documentação e Projeto Completo",
          topics: [
            "Geração de vistas 2D a partir de modelo 3D (VIEWBASE, VIEWSECTION, VIEWDETAIL)",
            "Desenvolvimento de projeto residencial completo: planta baixa, cortes e fachadas",
            "Normas ABNT NBR 6492 para representação de projetos arquitetônicos",
            "Quadro de áreas e esquadrias com tabelas e atributos de bloco",
            "Sheet Sets: gerenciamento de conjunto de pranchas para projeto completo",
            "Exportação: DWG, DXF, PDF, DWF e integração com Revit via AEC Exchange",
          ],
        },
      ],
      tools: [
        "AutoCAD 2025",
        "Autodesk Drive",
        "Smart Blocks AI",
        "Express Tools",
        "Sheet Sets Manager",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar AutoCAD 2D/3D completo, especialidades Civil 3D ou Mechanical, automação com LISP e IA, e entregar projeto executivo profissional",
      modules: [
        {
          title: "AutoCAD 2D Avançado e Produtividade Máxima",
          topics: [
            "Configuração completa de template corporativo com normas ABNT",
            "Constraints geométricas e dimensionais para desenho paramétrico",
            "XREF: attachar, sobrepor, clipar e gerenciar referências em equipe",
            "Express Tools completo: batch plotting, layer tools, text tools",
            "Sheet Sets: automação de carimbo, numeração e plotagem em lote",
            "AUDIT, PURGE e RECOVER: manutenção e recuperação de arquivos",
          ],
        },
        {
          title: "Modelagem 3D Sólida e Superfícies",
          topics: [
            "Modelagem sólida completa: EXTRUDE, REVOLVE, SWEEP, LOFT e PRESSPULL",
            "Superfícies NURBS: SURFPATCH, SURFFILLET e edição de superfícies complexas",
            "Malhas 3D (MESH): conversão entre sólidos, superfícies e malhas",
            "Renderização no AutoCAD: materiais, iluminação e render de alta qualidade",
            "Geração de vistas 2D a partir de modelo 3D para documentação executiva",
            "Integração 3D AutoCAD com Revit, Navisworks e Inventor",
          ],
        },
        {
          title: "Especialização: AutoCAD Civil 3D ou Mechanical",
          topics: [
            "Civil 3D: superfícies, alinhamentos horizontais e perfis verticais",
            "Civil 3D: seções transversais e volumes de terraplenagem",
            "Mechanical: anotações GD&T, tabelas de furos e catálogo de peças normalizadas",
            "Plant 3D: isométricos de tubulação e P&ID para projetos industriais",
            "Configuração de especialidade por área de atuação do aluno",
          ],
        },
        {
          title: "Automação com AutoLISP e Scripts",
          topics: [
            "Fundamentos de AutoLISP: variáveis, funções e estruturas de controle",
            "Criação de comandos personalizados para tarefas repetitivas",
            "DCL (Dialog Control Language): criação de caixas de diálogo customizadas",
            "Action Macros e Action Recorder para gravação de sequências",
            "Integração com Excel via Data Extraction e atributos de bloco",
            "Autodesk APIs: introdução ao desenvolvimento com .NET para AutoCAD",
          ],
        },
        {
          title: "IA, Colaboração e Projeto Final",
          topics: [
            "Autodesk AI completo: Smart Blocks, Markup Assist e Autodesk Assistant avançado",
            "Neural CAD (preview): geração automatizada de elementos repetitivos",
            "Autodesk Docs: revisão colaborativa com markups e aprovação digital",
            "Construção do projeto executivo completo: planta, cortes, fachadas, detalhes e pranchas",
            "Compatibilidade com RFI e projetos As-Built em obra",
            "Montagem de portfólio técnico e preparação para certificação Autodesk",
          ],
        },
      ],
      tools: [
        "AutoCAD 2025",
        "AutoCAD Civil 3D",
        "AutoLISP",
        "Autodesk Docs",
        "Sheet Sets Manager",
        "Autodesk Drive",
      ],
    },
  ],
}

function AutocadPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
