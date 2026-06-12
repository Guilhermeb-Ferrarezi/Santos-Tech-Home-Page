import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/impressao-3d")({
  component: Impressao3dPage,
  head: () =>
    pageMeta({
      title: "Curso de Impressão 3D para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Domine impressão 3D FDM e resina: fatiamento, calibração e materiais técnicos em aulas individuais e presenciais em Ribeirão Preto. Do arquivo ao produto final.",
      path: "/adultos/cursos/impressao-3d",
    }),
})

const COURSE_DATA = {
  nome: "Impressão 3D: Do Fatiamento ao Produto Final",
  categoria: "Universo 3D",
  tagline: "Transforme arquivos digitais em peças reais com domínio técnico completo",
  targetAudience: [
    "Você já tem ou quer comprar uma impressora 3D FDM ou de resina e não sabe por onde começar",
    "Você trabalha em engenharia, odontologia, design de produto ou arquitetura e quer usar prototipagem rápida",
    "Você quer abrir um negócio de impressão 3D por demanda ou serviço de prototipagem",
    "Você já imprime mas tem problemas de qualidade, falhas de impressão e desperdício de filamento",
    "Você quer entender materiais técnicos como PETG, TPU, ABS e resina para aplicações industriais",
    "Você atua no setor automotivo, saúde ou educação e quer integrar manufatura aditiva ao seu trabalho",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Imprimir peças funcionais com qualidade consistente, entendendo materiais, fatiamento e calibração básica",
      modules: [
        {
          title: "Fundamentos da Impressão 3D e Tecnologias",
          topics: [
            "Contexto histórico e Indústria 4.0: onde a impressão 3D se encaixa",
            "Tecnologias FDM, SLA, MSLA, SLS: diferenças e aplicações práticas",
            "Anatomia de uma impressora FDM: hotend, bed, extruder e motion system",
            "Anatomia de uma impressora de resina: LCD, FEP, UV e tanque",
            "Terminologia técnica: layer height, infill, support, retraction",
            "Escolha de impressora por orçamento e aplicação",
          ],
        },
        {
          title: "Fatiamento com Ultimaker Cura e Bambu Studio",
          topics: [
            "Importação e posicionamento de modelos STL e 3MF",
            "Parâmetros essenciais: layer height, velocidade, temperatura de bico e cama",
            "Infill: padrões (grid, gyroid, cubic), porcentagem e resistência",
            "Suportes automáticos e manuais: onde, quando e como configurar",
            "Brim, skirt e raft: adesão à cama e prevenção de warping",
            "Estimativa de material e tempo; exportação de G-code",
          ],
        },
        {
          title: "Materiais FDM: PLA, PETG e ABS",
          topics: [
            "PLA: temperatura, velocidade, umidade e armazenamento correto",
            "PETG: ajustes de retração, stringing e adesão",
            "ABS: câmara fechada, warp e acetona para acabamento",
            "TPU flexível: velocidade reduzida, parâmetros de retração",
            "Tabela de compatibilidade: material x aplicação x impressora",
            "Armazenamento de filamento com caixas secas (dry box)",
          ],
        },
        {
          title: "Calibração e Resolução de Problemas",
          topics: [
            "Nivelamento manual e automático da cama (bed leveling)",
            "Calibração de first layer: live adjust Z e babystepping",
            "Calibração de fluxo de extrusão (flow rate) e E-steps",
            "Diagnóstico visual: stringing, layer shifting, under/over extrusion",
            "Pós-processamento básico: remoção de suportes, lixamento e pintura de PLA",
          ],
        },
      ],
      tools: [
        "Ultimaker Cura 5.x",
        "Bambu Studio",
        "Bambu Lab P1S / Creality Ender 3",
      ],
    },
  ],
}

function Impressao3dPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
