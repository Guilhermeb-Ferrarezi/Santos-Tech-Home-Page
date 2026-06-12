import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons"

export const ADULTOS_FAQ_ITEMS = [
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
    q: "Em quanto tempo termino o curso?",
    a: "Depende do seu ritmo. A maioria dos cursos tem 24 aulas. No ritmo padrão de 2 aulas por semana você conclui em cerca de 3 meses. Se preferir um ritmo mais intensivo, é possível terminar em 1 mês.",
  },
  {
    q: "Preciso me matricular em uma turma?",
    a: "Não. Na Santos Tech adultos não existem turmas. As aulas são individuais — só você e o professor. Isso significa atenção total, sem fila de dúvidas e sem adaptação ao ritmo de ninguém.",
  },
  {
    q: "Quanto custa?",
    a: "O valor varia conforme o curso e o plano escolhido. Fale com a gente pelo WhatsApp — é rápido, sem compromisso, e a gente indica o caminho certo pra você.",
    cta: true,
  },
]

interface AdultosFaqProps {
  whatsappUrl: string
}

export function AdultosFaq({ whatsappUrl }: AdultosFaqProps) {
  const [open, setOpen] = useState<number | null>(null)
  const FAQ = ADULTOS_FAQ_ITEMS

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-neutral-900 dark:text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`mt-0.5 h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {item.a}
                      </p>
                      {item.cta && (
                        <div className="pb-5">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#0DB88F] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#0aaa82]"
                          >
                            <WhatsAppIcon className="h-4 w-4" />
                            Falar no WhatsApp
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
