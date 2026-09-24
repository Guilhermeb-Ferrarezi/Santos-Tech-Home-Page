import type { CourseData } from "@/components/particular-course-page"
import { tierMeta } from "@/components/course-skins/shared"

const DURACAO_PERGUNTA = "Em quanto tempo termino o curso?"

// Fallback genérico — só aparece se um tier não tiver entrada em TIER_META
// (não deveria acontecer hoje: todo curso do catálogo tem par levelName/TIER_META).
const DURACAO_FALLBACK =
  "Depende do seu ritmo e do curso. A maioria dos cursos tem 48 aulas: no ritmo padrão de 2 aulas por semana você conclui em cerca de 6 meses, e no ritmo mais intensivo em cerca de 3 meses. Alguns cursos são mais curtos ou mais longos — a duração exata de cada um está no card de Investimento, aqui nesta página."

export const PARTICULAR_FAQ_ITEMS = [
  {
    q: "Quais são os horários de aula?",
    a: "Atendemos de segunda a sábado, das 8h às 22h. Você escolhe o horário que melhor encaixa na sua rotina — basta combinar com a gente pelo WhatsApp.",
  },
  {
    q: "Quais dias têm aula?",
    a: "Qualquer dia de segunda a sábado. Não existem turmas com dias fixos: você decide quando quer estudar, semana a semana, de acordo com a sua agenda.",
  },
  {
    q: "Quanto tempo dura cada aula?",
    a: "Cada aula tem duração de 1 hora — tempo ideal para aprender algo novo, praticar e tirar dúvidas sem se sobrecarregar.",
  },
  {
    q: DURACAO_PERGUNTA,
    a: DURACAO_FALLBACK,
  },
  {
    q: "Preciso me matricular em uma turma?",
    a: "Não. Na Santos Tech Particular não existem turmas. As aulas são individuais — só você e o professor. Isso significa atenção total, sem fila de dúvidas e sem adaptação ao ritmo de ninguém.",
  },
  {
    q: "Quanto custa?",
    a: "O valor varia conforme o curso e o plano escolhido. Fale com a gente pelo WhatsApp — é rápido, sem compromisso, e a gente indica o caminho certo pra você.",
    cta: true,
  },
]

/**
 * Resposta de "Em quanto tempo termino o curso?" calculada a partir dos tiers
 * reais do curso (TIER_META), em vez do texto genérico fixo.
 *
 * Caso multi-tier (decisão de 23/09, nenhum curso do catálogo usa hoje — todos
 * já migraram pra plano único, ver docs/superpowers/specs/2026-09-23-cursos-
 * particulares-plano-unico-design.md): em vez de listar todos os níveis, mostra
 * a faixa do mais rápido (primeiro tier, ritmo intensivo) ao mais completo
 * (último tier, ritmo padrão) — os tiers já vêm ordenados do menor pro maior
 * em todo curso existente, então não precisa ordenar de novo.
 */
function buildDuracaoAnswer(course: CourseData): string {
  const { tiers } = course
  if (tiers.length === 1) {
    const m = tierMeta(course, tiers[0])
    if (!m) return DURACAO_FALLBACK
    return `O curso de ${course.nome} tem ${m.aulas}: no ritmo padrão de 2 aulas por semana você conclui em ${m.padrao}, e no ritmo mais intensivo, em ${m.intensivo}.`
  }

  const first = tierMeta(course, tiers[0])
  const last = tierMeta(course, tiers[tiers.length - 1])
  if (!first || !last) return DURACAO_FALLBACK
  return `Depende do nível escolhido: no curso de ${course.nome}, a duração vai de ${first.intensivo} (nível ${tiers[0].levelName}, ritmo intensivo) até ${last.padrao} (nível ${tiers[tiers.length - 1].levelName}, ritmo padrão). Veja o detalhe de cada nível no card de Investimento, aqui nesta página.`
}

/**
 * FAQ completo de uma página de curso: perguntas específicas do curso primeiro,
 * depois as genéricas — com a resposta de duração substituída pela calculada
 * a partir dos tiers reais do curso.
 */
export function buildCourseFaqItems(course: CourseData): { q: string; a: string; cta?: boolean }[] {
  const duracaoResposta = buildDuracaoAnswer(course)
  const generico = PARTICULAR_FAQ_ITEMS.map((item) =>
    item.q === DURACAO_PERGUNTA ? { ...item, a: duracaoResposta } : item,
  )
  return [...(course.faqItems ?? []), ...generico]
}
