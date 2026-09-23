import { useState, type ReactNode } from "react";
import { CheckCircle2, ChevronDown, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { CalendarSpot, CertificateSpot, OneOnOne, SchoolSpot } from "@/components/course-illustrations";
import {
  CRITERIOS_PROFESSOR,
  CUSTOS_UNICOS,
  DIFERENCIAIS,
  FORMAS_PAGAMENTO,
  TRILHA_PERSONALIZADA,
  tierMeta,
  type SkinProps,
} from "@/components/course-skins/shared";

/**
 * Seções comerciais comuns a todas as peles (diferenciais, professores,
 * formato, planos, FAQ e CTA). A estrutura é a mesma em todo curso — é aqui que
 * a pessoa compara e decide — e só o acabamento (cor, cantos, fonte, fundo)
 * acompanha a identidade da categoria.
 */

export type LookKey = "planilha" | "ide" | "oficina";

export type Look = {
  /** Fundos alternados das seções. */
  bgA: string;
  bgB: string;
  title: string;
  text: string;
  muted: string;
  card: string;
  radius: string;
  eyebrow: string;
  h2: string;
  button: string;
  cta: string;
  divider: string;
  /** Texto pequeno de apoio (descrições, rótulos). Padrão `text-xs`; peles com público iniciante podem aumentar. */
  small?: string;
  /** Cor de destaque para texto sobre fundo claro, quando o acento puro tem pouco contraste. */
  accentText?: string;
  /** Borda interna dos cards de plano. */
  planBorder?: string;
  /** Botão do CTA final invertido (fundo branco), para CTA sobre fundo na cor de destaque. */
  invertCta?: boolean;
};

export const LOOKS: Record<LookKey, Look> = {
  planilha: {
    bgA: "bg-white dark:bg-neutral-950",
    bgB: "bg-neutral-50 dark:bg-neutral-900/60",
    title: "text-neutral-900 dark:text-white",
    text: "text-neutral-700 dark:text-neutral-300",
    muted: "text-neutral-500 dark:text-neutral-400",
    card: "border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
    radius: "rounded-sm",
    eyebrow: "text-xs font-black uppercase tracking-[0.25em] text-(--accent)",
    h2: "text-3xl font-black tracking-tight sm:text-4xl",
    button: "rounded-sm",
    cta: "bg-(--accent) text-white",
    divider: "divide-neutral-200 dark:divide-neutral-800",
    invertCta: true,
  },
  ide: {
    bgA: "bg-(--hero-bg)",
    bgB: "bg-(--hero-bg) bg-[linear-gradient(rgba(255,255,255,0.02),rgba(255,255,255,0.02))]",
    title: "text-white",
    text: "text-white/80",
    muted: "text-white/50",
    card: "border border-white/10 bg-white/[0.04]",
    radius: "rounded-lg",
    eyebrow: "font-mono text-sm text-(--accent)",
    h2: "text-3xl font-black tracking-tight sm:text-4xl",
    button: "rounded-md",
    cta: "border border-white/10 bg-white/[0.04] text-white",
    divider: "divide-white/10",
    planBorder: "border-white/10",
  },
  oficina: {
    bgA: "bg-[#fbf5ec] dark:bg-[#140d08]",
    bgB: "bg-white dark:bg-[#1a110b]",
    title: "text-[#2a1a10] dark:text-white",
    text: "text-[#4a3526] dark:text-white/80",
    muted: "text-[#8a6d57] dark:text-white/50",
    card: "bg-white shadow-[0_1px_0_0_#e9dccb] dark:bg-white/[0.04] dark:shadow-none",
    radius: "rounded-3xl",
    eyebrow: "font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-(--accent)",
    h2: "text-3xl font-black uppercase tracking-tight sm:text-4xl",
    button: "rounded-full",
    cta: "bg-(--hero-bg) text-white",
    divider: "divide-[#efe3d4] dark:divide-white/10",
  },
};

function Heading({ look, eyebrow, title }: { look: Look; eyebrow: string; title: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className={look.eyebrow}>{eyebrow}</p>
      <h2 className={`mt-3 ${look.h2} ${look.title}`}>{title}</h2>
    </Reveal>
  );
}

function Cta({ look, href, children, invert = false }: { look: Look; href: string; children: ReactNode; invert?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-black uppercase tracking-wider transition hover:-translate-y-0.5 ${look.button} ${
        invert ? "bg-white text-(--accent) shadow-lg" : "bg-(--accent) text-white hover:bg-(--accent-hover)"
      }`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

export function CommonSections({
  lookKey,
  look: customLook,
  course,
  theme,
  whatsappUrl,
  selectedTier,
  onSelectTier,
  faq,
}: SkinProps & { lookKey: LookKey; look?: Look }) {
  const look = customLook ?? LOOKS[lookKey];
  const small = look.small ?? "text-xs";
  const accentText = look.accentText ?? "text-(--accent)";
  const multiTier = course.tiers.length > 1;
  const planBorder = look.planBorder ?? "border-neutral-200 dark:border-neutral-800";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Diferenciais ───────────────────────────────────────────────────── */}
      <section className={`py-20 ${look.bgB}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading look={look} eyebrow="Por que a Santos Tech" title="Mais do que um curso — um método" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {DIFERENCIAIS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={(i % 5) * 50}>
                  <div className={`h-full p-5 ${look.card} ${look.radius}`}>
                    <span className={`flex h-9 w-9 items-center justify-center bg-(--accent)/12 text-(--accent) ${look.radius === "rounded-3xl" ? "rounded-xl" : look.radius}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className={`mt-3 text-sm font-black ${look.title}`}>{d.title}</h3>
                    <p className={`mt-1 ${small} ${look.muted}`}>{d.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Professores + certificado ─────────────────────────────────────── */}
      <section className={`py-20 ${look.bgA}`}>
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className={`flex h-full flex-col p-7 ${look.card} ${look.radius}`}>
              <OneOnOne theme={theme} className="h-40 w-full" />
              <h3 className={`mt-4 text-xl font-black ${look.title}`}>Quem está do outro lado da mesa</h3>
              <p className={`mt-1 text-sm ${look.muted}`}>Critério rigoroso de contratação — não contratamos por disponibilidade.</p>
              <ul className="mt-5 space-y-3">
                {CRITERIOS_PROFESSOR.map((c) => (
                  <li key={c} className={`flex items-start gap-3 text-sm ${look.text}`}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-(--accent)" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className={`flex h-full flex-col p-7 ${look.card} ${look.radius}`}>
              <CertificateSpot theme={theme} curso={course.nome} className="h-40 w-full" />
              <h3 className={`mt-4 text-xl font-black ${look.title}`}>O que você recebe ao concluir</h3>
              <p className={`mt-1 text-sm ${look.muted}`}>
                Certificado emitido pela Santos Tech, reconhecido em todo o território nacional.
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${look.text}`}>
                Mas o que realmente importa é o que você consegue fazer depois. Cada aula é projetada pra entregar
                habilidade aplicável — o papel prova que você concluiu, a habilidade prova que você aprendeu.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Formato ───────────────────────────────────────────────────────── */}
      <section className={`py-20 ${look.bgB}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading look={look} eyebrow="Formato" title="Como as aulas funcionam" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { Illo: OneOnOne, title: "Aula individual", desc: "Você não compete atenção com ninguém. O professor é só seu durante toda a aula." },
              { Illo: CalendarSpot, title: "Horário flexível", desc: "Segunda a sábado, das 8h às 22h — você agenda o dia e o horário que funcionam pra você." },
              { Illo: SchoolSpot, title: "100% presencial", desc: "Ribeirão Preto/SP — Av. Nove de Julho, 1992 · Jardim América." },
            ].map(({ Illo, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className={`h-full p-6 ${look.card} ${look.radius}`}>
                  <Illo theme={theme} className="h-36 w-full" />
                  <h3 className={`mt-4 text-lg font-black ${look.title}`}>{title}</h3>
                  <p className={`mt-1 text-sm ${look.muted}`}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planos ─────────────────────────────────────────────────────────── */}
      <section className={`py-20 ${look.bgA}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading look={look} eyebrow="Investimento" title={multiTier ? "Escolha o seu plano" : "Seu investimento"} />
          <div
            className={`mt-12 grid gap-6 ${
              course.tiers.length === 1 ? "mx-auto max-w-sm" : course.tiers.length === 2 ? "mx-auto max-w-3xl md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            {course.tiers.map((t, i) => {
              const m = tierMeta(course, t);
              const selected = selectedTier === i && course.tiers.length > 1;
              return (
                <Reveal key={t.levelName} delay={i * 100}>
                  <div
                    onClick={() => onSelectTier(i)}
                    className={`flex h-full flex-col overflow-hidden ${look.card} ${look.radius} ${
                      selected ? "ring-2 ring-(--accent)" : ""
                    }`}
                  >
                    <div className="px-6 pt-6">
                      <h3 className={`text-xl font-black ${look.title}`}>{t.levelName}</h3>
                      <p className={`mt-1 flex items-center gap-1.5 ${small} ${look.muted}`}>
                        <Clock className="h-3.5 w-3.5" /> {m?.aulas ?? t.totalHours}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-6">
                      <p className={`text-sm ${look.text}`}>{t.outcome}</p>
                      <div>
                        <p className={`text-3xl font-black tracking-tight ${look.title}`}>
                          {m?.investimento?.parcelaFormatted ?? "—"}
                        </p>
                        <p className={`mt-0.5 ${small} ${look.muted}`}>12x sem juros no cartão</p>
                        {m?.investimento && (
                          <p className={`mt-1.5 ${small} ${look.muted}`}>ou {m.investimento.totalFormatted} à vista</p>
                        )}
                      </div>
                      {m && (
                        <div className={`space-y-2 border-t pt-4 text-sm ${planBorder}`}>
                          <div className="flex justify-between">
                            <span className={`font-bold ${accentText}`}>Intensivo (sugerido)</span>
                            <span className={`font-bold ${look.title}`}>{m.intensivo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={look.muted}>Padrão (2×/semana)</span>
                            <span className={look.muted}>{m.padrao}</span>
                          </div>
                        </div>
                      )}
                      <div className="mt-auto">
                        <Cta look={look} href={whatsappUrl}>
                          Quero o {t.ctaLabel ?? t.levelName}
                        </Cta>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150} className={`mx-auto mt-10 grid gap-5 ${multiTier ? "max-w-4xl md:grid-cols-2" : "max-w-2xl"}`}>
            <div className={`p-6 ${look.card} ${look.radius}`}>
              <p className={`text-xs font-black uppercase tracking-[0.2em] ${look.muted}`}>Custos únicos — pagos uma vez só</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {CUSTOS_UNICOS.map((c) => (
                  <div key={c.label}>
                    <p className={`${small} ${look.muted}`}>{c.label}</p>
                    <p className={`mt-1 text-xl font-black ${look.title}`}>{c.value}</p>
                  </div>
                ))}
              </div>
              <p className={`mt-4 ${small} ${look.muted}`}>{FORMAS_PAGAMENTO}</p>
            </div>
            {/* Trilha personalizada — só faz sentido quando há mais de um nível pra "não se encaixar" */}
            {multiTier && (
              <div className={`border border-(--accent)/30 bg-(--accent)/[0.06] p-6 ${look.radius}`}>
                <p className={`text-xs font-black uppercase tracking-[0.2em] ${accentText}`}>Não se encaixa em nenhum nível?</p>
                <p className={`mt-3 text-sm leading-relaxed ${look.text}`}>{TRILHA_PERSONALIZADA}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-3 inline-flex items-center gap-1.5 text-sm font-black hover:underline ${accentText}`}
                >
                  <WhatsAppIcon className="h-4 w-4" /> Falar sobre o meu caso
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className={`py-20 ${look.bgB}`}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Heading look={look} eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
          <div className={`mt-10 divide-y ${look.divider}`}>
            {faq.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className={`font-bold ${look.title}`}>{item.q}</span>
                    <ChevronDown className={`mt-0.5 h-5 w-5 shrink-0 text-(--accent) transition ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className={`pb-5 text-sm leading-relaxed ${look.muted}`}>
                      {item.a}
                      {item.cta && (
                        <div className="mt-4">
                          <Cta look={look} href={whatsappUrl}>
                            Falar no WhatsApp
                          </Cta>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────────────── */}
      <section className={`py-20 ${look.bgA}`}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className={`relative overflow-hidden px-8 py-14 text-center sm:px-16 ${look.cta} ${look.radius}`}>
              <div className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl" />
              <h2 className={`relative ${look.h2}`}>Pronto pra começar com {course.nome}?</h2>
              <p className="relative mx-auto mt-4 max-w-xl opacity-80">
                Fale com a gente pelo WhatsApp, tire suas dúvidas e descubra qual plano é o certo pra você.
              </p>
              <div className="relative mt-8">
                <Cta look={look} href={whatsappUrl} invert={look.invertCta ?? false}>
                  Quero saber mais
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <p className={`py-6 text-center text-xs ${look.bgA} ${look.muted}`}>
        © {new Date().getFullYear()} Santos Tech — Todos os direitos reservados.
      </p>
    </>
  );
}
