import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons"
import { Detalhes } from "@/components/faq-item"
import { PARTICULAR_FAQ_ITEMS } from "@/components/particular-faq-items"

interface ParticularFaqProps {
  whatsappUrl: string
  /** Perguntas a exibir; por padrão usa só o FAQ genérico (uso na landing /particular, sem curso específico). */
  items?: { q: string; a: string; cta?: boolean }[]
}

/**
 * FAQ de /particular e do template padrão dos cursos particulares.
 * `<details>` nativo: a resposta fica no HTML servido mesmo fechada (o texto
 * visível bate com o FAQPage do JSON-LD) e, fechada, sai da leitura e do foco
 * (inclusive o CTA). Pergunta em `<h3>` dentro do `<summary>`.
 */
export function ParticularFaq({ whatsappUrl, items = PARTICULAR_FAQ_ITEMS }: ParticularFaqProps) {
  return (
    <section className="sb-bleed py-20 bg-neutral-50 dark:bg-neutral-900">
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
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <Detalhes
                name="faq-particular"
                className="group/faq"
                summaryClassName="flex w-full items-start justify-between gap-4 py-5 text-left"
                resumo={
                  <>
                    <h3 className="font-bold text-neutral-900 dark:text-white">{item.q}</h3>
                    <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 group-open/faq:rotate-180" />
                  </>
                }
              >
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
              </Detalhes>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
