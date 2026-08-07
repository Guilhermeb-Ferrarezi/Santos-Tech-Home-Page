import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/revit")({
  component: RevitPage,
  head: () =>
    pageMeta({
      title: "Curso de Revit para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Revit BIM do modelo arquitetônico ao projeto executivo completo: famílias paramétricas, Dynamo e coordenação multidisciplinar para arquitetos e engenheiros em Ribeirão Preto.",
      path: "/adultos/cursos/revit",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar um modelo arquitetônico residencial básico no Revit com plantas, cortes, fachadas e pranchas técnicas",
      modules: [
        {
          title: "Interface Revit e Conceitos BIM",
          topics: [
            "O que é BIM: diferença entre modelagem 3D convencional e informação paramétrica",
            "Interface do Revit 2025: ribbon, properties palette, project browser e view cube",
            "Tipos de arquivo: projeto (.rvt), família (.rfa) e template (.rte)",
            "Níveis (levels) e planos de referência: base da modelagem paramétrica",
            "Disciplinas e categorias de elementos no Revit",
            "Configuração de unidades, tolerâncias e templates de projeto ABNT",
          ],
        },
        {
          title: "Modelagem Arquitetônica: Envoltória",
          topics: [
            "Criação de paredes: simples, compostas e cortina com configurações de material",
            "Portas e janelas: inserção, configuração de família e parâmetros de tipo",
            "Pisos: camadas de material, borda e contorno",
            "Telhados: por footprint, por extrusão e por face",
            "Escadas e corrimãos: configuração de espelhos, peças e guarda-corpo",
            "Lajes e aberturas: shaft opening, floor opening e slab edge",
          ],
        },
        {
          title: "Documentação: Plantas, Cortes e Fachadas",
          topics: [
            "Views de planta: criação de planta de piso, teto e cobertura com crop region",
            "Cortes e elevações: criação, ajuste de profundidade e anotação",
            "Cotas no Revit: tipos, estilo de cota e ajuste de posição",
            "Textos e tags: family tags de porta, janela e ambiente",
            "Schedule de áreas: quadro de ambientes com nome, área e perímetro",
            "Legenda de tipos e tabelas de esquadrias",
          ],
        },
        {
          title: "Pranchas e Entrega de Projeto",
          topics: [
            "Sheets: criação de pranchas com carimbo e inserção de vistas",
            "Viewports: escala, detalhe e alinhamento de vistas em prancha",
            "Title blocks: famílias de carimbo editáveis e preenchimento de parâmetros",
            "Exportação para DWG, PDF e IFC",
            "Revisões de projeto: tracking de alterações com revision clouds",
            "Configuração de plotter virtual e impressão de conjunto de pranchas",
          ],
        },
      ],
      tools: ["Revit 2025", "Autodesk Drive", "IFC Viewer (BIMcollab Zoom)"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Executar projeto residencial ou comercial completo com famílias paramétricas, schedules avançados e coordenação multidisciplinar básica",
      modules: [
        {
          title: "Modelagem Arquitetônica Completa",
          topics: [
            "Paredes compostas com múltiplas camadas de material e função estrutural",
            "Curtain walls: grade, painéis e mullions personalizados",
            "Telhados complexos: junção de planos, calhas e rufos",
            "Elementos in-place: modelagem de geometrias únicas no projeto",
            "Toposuperfície: criação de terreno a partir de pontos, DWG e nuvem de pontos",
            "Componentes de fachada: platibandas, peitoris e elementos decorativos",
          ],
        },
        {
          title: "Famílias Paramétricas no Revit",
          topics: [
            "Family Editor: fluxo de trabalho, templates por categoria e reference planes",
            "Criação de família de mobiliário com parâmetros de comprimento e largura",
            "Família de luminária com fonte de luz real (photometric web)",
            "Família de porta e janela com parâmetros de folha e requadro",
            "Constraints: bloqueio de geometria com EQ e dimensões paramétricas",
            "Shared parameters e project parameters para schedules personalizados",
          ],
        },
        {
          title: "Schedules e Quantitativos BIM",
          topics: [
            "Schedule de áreas, materiais e elementos arquitetônicos",
            "Key schedules para padronização de tipos de elemento",
            "Filters e grouping em schedules para relatórios customizados",
            "Material Takeoff: quantificação de materiais diretamente do modelo",
            "Room schedule e color fill para mapa de áreas e uso",
            "Exportação de schedules para Excel para orçamentação",
          ],
        },
        {
          title: "Coordenação e Colaboração BIM",
          topics: [
            "Linked models: vinculação de projetos arquitetônico, estrutural e instalações",
            "Clash Detection básica: verificação visual de interferências entre disciplinas",
            "Worksets: configuração de trabalho colaborativo em arquivo central",
            "Phasing: fases de projeto e filtros de fase para apresentação de etapas",
            "Design Options: alternativas de projeto no mesmo arquivo Revit",
            "IFC export: configurações para interoperabilidade com outros softwares BIM",
          ],
        },
      ],
      tools: [
        "Revit 2025",
        "Autodesk Docs",
        "BIMcollab Zoom",
        "Navisworks Freedom",
        "IFC Viewer",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Atuar como projetista ou coordenador BIM sênior, dominando Dynamo, IA generativa, coordenação multidisciplinar e entregando projeto executivo completo",
      modules: [
        {
          title: "Projeto Executivo Completo no Revit",
          topics: [
            "Desenvolvimento de projeto legal e executivo residencial multifamiliar",
            "Detalhes construtivos: seções de detalhe, detailing components e linha de detalhe",
            "Modulação de alvenaria: plantas de primeira e segunda fiada no Revit",
            "Revestimentos e acabamentos: materiais por face e split face",
            "Documentação de aprovação: exigências de prefeitura e condomínio em formato BIM",
            "Emissão de ART e aprovação de projeto com documentação gerada pelo Revit",
          ],
        },
        {
          title: "Famílias Avançadas e Revit para Móveis Planejados",
          topics: [
            "Famílias de sistema: paredes, pisos e telhados com sweep e reveal",
            "Adaptive Components: famílias adaptativas para formas complexas e fachadas",
            "Família de móvel planejado: cozinha, banheiro e guarda-roupa com quantificação",
            "In-Place Massing: massas conceituais e análise volumétrica de projeto",
            "Dynamo básico: introdução a scripts para automação de famílias e layouts",
            "Carga de família otimizada: purge, auditoria e desempenho de arquivo",
          ],
        },
        {
          title: "Dynamo: Programação Visual para BIM",
          topics: [
            "Interface Dynamo: nós, wires, watch nodes e estrutura de script",
            "Coleta e filtragem de elementos do modelo Revit por categoria e parâmetro",
            "Automatização de criação de elementos em série (grids, rooms, tags)",
            "Manipulação de planilhas Excel com Dynamo para atualização massiva de dados",
            "Generative Design no Revit: exploração de soluções otimizadas por restrições",
            "Publicação de scripts Dynamo Player para uso por não-programadores",
          ],
        },
        {
          title: "IA e Tecnologias Emergentes no BIM",
          topics: [
            "Revit 2026: Generative Design Studio e Universal Connector Framework",
            "IA para revisão de projeto: archiAI, TestFit e Spacemaker integrados ao BIM",
            "Autodesk Forma: análise de luz solar, vento e ruído urbano com IA",
            "Scan-to-BIM: importação de nuvem de pontos e modelagem de As-Built",
            "Realidade aumentada: visualização de modelo Revit com Autodesk Tandem e BIM 360",
            "Automação de documentação com IA: geração automática de pranchas e legendas",
          ],
        },
        {
          title: "Coordenação BIM e Projeto Final",
          topics: [
            "Navisworks Manage: clash detection automatizada e relatório de interferências",
            "BIM Execution Plan (BEP): elaboração de plano de execução BIM conforme ISO 19650",
            "Common Data Environment (CDE): gestão de documentos com Autodesk Docs e ACC",
            "LOD 100 a 400: definição de nível de detalhe por fase de projeto",
            "Apresentação do projeto final: visualização 3D, walkthrough e VR com Enscape",
            "Preparação para certificação Autodesk Certified Professional: Revit",
          ],
        },
      ],
      tools: [
        "Revit 2025/2026",
        "Dynamo 2.x",
        "Navisworks Manage",
        "Autodesk Forma",
        "Enscape",
        "Autodesk Docs / ACC",
        "Autodesk Tandem",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber Revit ou modelagem BIM pra começar?",
      a: "Não. O curso começa no Essencial com a interface do Revit e os conceitos básicos de BIM, ideal pra quem vem do AutoCAD ou SketchUp e nunca modelou com informação paramétrica. Dali você evolui até projeto executivo completo e Dynamo no nível Profissional + IA.",
    },
    {
      q: "Qual a diferença entre os níveis Essencial, Intermediário e Profissional + IA?",
      a: "Essencial ensina a criar um modelo arquitetônico residencial básico com plantas, cortes e pranchas. Intermediário entra em famílias paramétricas, schedules avançados e coordenação multidisciplinar. Profissional + IA fecha com projeto executivo completo, Dynamo, IA generativa aplicada ao BIM e preparação pra certificação Autodesk Certified Professional.",
    },
    {
      q: "O curso prepara pra atuar como Coordenador ou BIM Manager?",
      a: "Sim. O Profissional + IA cobre BIM Execution Plan conforme ISO 19650, Common Data Environment, clash detection com Navisworks Manage e definição de LOD por fase de projeto — as ferramentas que um Coordenador BIM usa no dia a dia.",
    },
  ],
}

function RevitPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
