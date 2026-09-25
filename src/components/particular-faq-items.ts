import type { CourseData } from "@/components/particular-course-page"
import { CUSTOS_UNICOS, tierMeta } from "@/components/course-skins/shared"

const DURACAO_PERGUNTA = "Em quanto tempo termino o curso?"
const PRECO_PERGUNTA = "Quanto custa?"

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
    q: PRECO_PERGUNTA,
    // Genérico de propósito: é o FAQ da landing, sem curso. O preço de cada curso
    // está na página dele (card de Investimento), e lá esta resposta é trocada
    // pelos valores reais (buildPrecoAnswer).
    a: "O valor depende do curso: cada página de curso mostra o investimento completo, com a parcela em até 12x sem juros no cartão e o valor à vista. Se preferir, fale com a gente pelo WhatsApp — é rápido, sem compromisso, e a gente indica o caminho certo pra você.",
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

/** "matrícula (R$ 199,90) e material didático (R$ 389,90)" — da mesma lista do card de Investimento. */
function custosUnicosTexto(): string {
  const itens = CUSTOS_UNICOS.map((c) => `${c.label.toLowerCase()} (${c.value})`)
  return itens.length > 1 ? `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}` : itens.join("")
}

/**
 * Resposta de "Quanto custa?" com os valores reais do curso — a mesma fonte do
 * card de Investimento da página (tierMeta → parcela e total; CUSTOS_UNICOS →
 * matrícula e material). Auditoria de UI/UX 24/09/2026, F217: a resposta
 * genérica mandava pedir preço no WhatsApp na mesma página que mostra o preço.
 * Sem preço calculável (tier fora de TIER_META e sem pricePerAula), devolve
 * `null` e o texto genérico fica — nunca inventa valor.
 */
function buildPrecoAnswer(course: CourseData): string | null {
  const precos = course.tiers.map((t) => ({ tier: t, inv: tierMeta(course, t)?.investimento }))
  if (precos.length === 0 || precos.some((p) => !p.inv)) return null
  const custos = `Além disso, há os custos únicos, pagos uma vez só: ${custosUnicosTexto()}.`

  if (precos.length === 1) {
    const inv = precos[0].inv!
    return `O curso de ${course.nome} custa 12x de ${inv.parcelaFormatted} sem juros no cartão, ou ${inv.totalFormatted} à vista. ${custos}`
  }

  // Multi-tier (nenhum curso usa hoje): lista cada nível, na ordem da página.
  const niveis = precos.map((p) => `${p.tier.levelName}: 12x de ${p.inv!.parcelaFormatted} (ou ${p.inv!.totalFormatted} à vista)`)
  return `Depende do nível escolhido no curso de ${course.nome} — ${niveis.join("; ")}. Parcelas sem juros no cartão. ${custos}`
}

/**
 * FAQ completo de uma página de curso: perguntas específicas do curso primeiro,
 * depois as genéricas — com as respostas de duração e de preço substituídas
 * pelas calculadas a partir dos tiers reais do curso.
 */
export function buildCourseFaqItems(course: CourseData): { q: string; a: string; cta?: boolean }[] {
  const duracaoResposta = buildDuracaoAnswer(course)
  const precoResposta = buildPrecoAnswer(course)
  const generico = PARTICULAR_FAQ_ITEMS.map((item) => {
    if (item.q === DURACAO_PERGUNTA) return { ...item, a: duracaoResposta }
    if (item.q === PRECO_PERGUNTA && precoResposta) return { ...item, a: precoResposta }
    return item
  })
  return [...(course.faqItems ?? []), ...generico]
}
