import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/revit")({
  component: RevitPage,
  head: () =>
    pageMeta({
      title: "Curso de Revit Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Revit BIM do modelo arquitetônico ao projeto executivo completo: famílias paramétricas, Dynamo e coordenação multidisciplinar para arquitetos e engenheiros em Ribeirão Preto.",
      path: "/particular/cursos/revit",
    }),
})

const COURSE_DATA = {
  nome: "Revit BIM para Arquitetura",
  categoria: "Universo 3D",
  tagline: "Projete em BIM do zero ao executivo com o padrão Autodesk do mercado",
  targetAudience: [
    "Você é arquiteto, engenheiro civil ou técnico de edificações e precisa migrar para BIM para se manter competitivo",
    "Você usa AutoCAD ou SketchUp e quer dar o salto para modelagem paramétrica com informação integrada",
    "Você trabalha em escritório de projetos e precisa entregar plantas executivas, cortes e pranchas direto do modelo",
    "Você quer atuar como Coordenador BIM ou BIM Manager em construtoras e incorporadoras",
    "Você quer dominar Dynamo para automatizar tarefas repetitivas e criar famílias paramétricas avançadas",
    "Você precisa da certificação Autodesk Certified Professional em Revit para concorrer a vagas internacionais",
  ],
  tiers: [
    {
      levelName: "Revit BIM",
      totalHours: "48h",
      outcome:
        "Projetar em Revit BIM do zero absoluto até o projeto executivo completo — modelagem arquitetônica, famílias paramétricas, coordenação multidisciplinar, automação com Dynamo e os recursos de IA generativa do BIM — pronto para atuar como projetista ou coordenador BIM em escritórios, construtoras e incorporadoras.",
      modules: [
        {
          title: "Interface do Revit e Fundamentos BIM",
          topics: [
            "O que é BIM: diferença entre modelagem 3D convencional e informação paramétrica",
            "Interface do Revit 2025: ribbon, properties palette, project browser e view cube",
            "Tipos de arquivo: projeto (.rvt), família (.rfa) e template (.rte), com unidades, tolerâncias e templates de projeto ABNT",
            "Níveis (levels) e planos de referência: a base da modelagem paramétrica",
            "Disciplinas e categorias de elementos no Revit",
          ],
        },
        {
          title: "Modelagem Arquitetônica: do Básico ao Avançado",
          topics: [
            "Paredes simples, compostas (múltiplas camadas de material e função estrutural) e cortina, com grade, painéis e mullions personalizados",
            "Portas e janelas (parâmetros de tipo) e componentes de fachada: platibandas, peitoris e elementos decorativos",
            "Pisos, lajes e aberturas: camadas de material, borda, contorno, shaft opening, floor opening e slab edge",
            "Telhados: por footprint, extrusão e face, até junções complexas de planos, calhas e rufos",
            "Escadas e corrimãos (espelhos, peças, guarda-corpo) e elementos in-place para geometrias únicas do projeto",
            "Toposuperfície: criação de terreno a partir de pontos, DWG e nuvem de pontos",
          ],
        },
        {
          title: "Documentação, Schedules e Entrega de Projeto",
          topics: [
            "Views de planta (piso, teto, cobertura), cortes e elevações: crop region, profundidade e anotação",
            "Cotas, textos, family tags de porta/janela/ambiente e legenda de tipos e tabelas de esquadrias",
            "Schedules de áreas, materiais e elementos: key schedules, filters, grouping e Material Takeoff direto do modelo",
            "Room schedule, color fill e exportação de schedules para Excel (orçamentação)",
            "Sheets, viewports e title blocks: montagem de pranchas com carimbo editável, escala e alinhamento de vistas",
            "Exportação para DWG, PDF e IFC, revisões com revision clouds e impressão de conjunto de pranchas (plotter virtual)",
          ],
        },
        {
          title: "Famílias Paramétricas: do Básico ao Avançado",
          topics: [
            "Family Editor: fluxo de trabalho, templates por categoria, reference planes e constraints (EQ, dimensões paramétricas)",
            "Famílias de mobiliário (parâmetros de comprimento e largura) e luminária com fonte de luz real (photometric web)",
            "Família de porta e janela com parâmetros de folha e requadro, shared parameters e project parameters para schedules personalizados",
            "Famílias de sistema (paredes, pisos e telhados com sweep e reveal) e Adaptive Components para formas complexas e fachadas",
            "Móveis planejados (cozinha, banheiro, guarda-roupa) com quantificação e In-Place Massing para análise volumétrica de projeto",
            "Carga de família otimizada: purge, auditoria e desempenho de arquivo",
          ],
        },
        {
          title: "Coordenação e Gestão BIM",
          topics: [
            "Linked models: vinculação de projetos arquitetônico, estrutural e instalações, com Worksets para trabalho colaborativo em arquivo central",
            "Clash Detection: da verificação visual básica à automatizada com Navisworks (Freedom e Manage) e relatório de interferências",
            "Phasing e Design Options: fases de projeto, filtros de fase e alternativas de projeto no mesmo arquivo",
            "IFC export e Common Data Environment (CDE): interoperabilidade e gestão de documentos com Autodesk Docs e ACC",
            "BIM Execution Plan (BEP) conforme ISO 19650 e definição de LOD 100 a 400 por fase de projeto",
            "Apresentação do projeto com visualização 3D, walkthrough e VR (Enscape), e preparação para a certificação Autodesk Certified Professional: Revit",
          ],
        },
        {
          title: "Projeto Executivo, Dynamo e IA no BIM",
          topics: [
            "Projeto executivo residencial multifamiliar: detalhes construtivos, modulação de alvenaria (primeira e segunda fiada) e revestimentos por face (split face)",
            "Documentação de aprovação (exigências de prefeitura e condomínio) e emissão de ART com documentação gerada pelo Revit",
            "Dynamo: interface (nós, wires, watch nodes), coleta e filtragem de elementos por categoria e parâmetro, e automação de criação em série (grids, rooms, tags) e de famílias e layouts",
            "Dynamo aplicado: manipulação de planilhas Excel para atualização massiva de dados, Generative Design no Revit e publicação de scripts no Dynamo Player",
            "IA generativa no BIM: Generative Design Studio e Universal Connector (Revit 2026), e ferramentas de revisão de projeto como archiAI, TestFit e Spacemaker",
            "Autodesk Forma (sol, vento e ruído urbano), Scan-to-BIM (nuvem de pontos e As-Built), realidade aumentada com Autodesk Tandem/BIM 360 e automação de documentação com IA",
          ],
        },
      ],
      tools: [
        "Revit 2025/2026",
        "Dynamo 2.x",
        "Autodesk Docs / ACC",
        "Autodesk Drive",
        "Navisworks Freedom",
        "Navisworks Manage",
        "IFC Viewer (BIMcollab Zoom)",
        "Autodesk Forma",
        "Enscape",
        "Autodesk Tandem",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber Revit ou modelagem BIM pra começar?",
      a: "Não. O curso começa pela interface do Revit e os conceitos básicos de BIM, ideal pra quem vem do AutoCAD ou SketchUp e nunca modelou com informação paramétrica. Dali você evolui, em ordem, até projeto executivo completo e automação com Dynamo.",
    },
    {
      q: "O curso prepara pra atuar como Coordenador ou BIM Manager?",
      a: "Sim. O curso cobre BIM Execution Plan conforme ISO 19650, Common Data Environment, clash detection com Navisworks Manage e definição de LOD por fase de projeto — as ferramentas que um Coordenador BIM usa no dia a dia.",
    },
  ],
}

function RevitPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
