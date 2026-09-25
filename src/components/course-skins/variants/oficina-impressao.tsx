import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import { SectionTitle, TierTabs } from "./oficina-base";
import { NOTCH, pad2, type OficinaBlockProps } from "./oficina-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Impressão 3D — a referência da família "Oficina".
 * Para quem é: fichas com canto chanfrado (como uma peça recém-saída da mesa).
 * Conteúdo: camadas empilhando pelo bico da impressora até a "Peça pronta".
 */

/** Carretel de filamento (ícone das ferramentas). */
export function Spool({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill="#2a1a10" />
      {[50, 46, 42, 38, 34, 30].map((r, i) => (
        <circle key={r} cx="60" cy="60" r={r} fill="none" stroke="var(--accent)" strokeWidth="4" strokeOpacity={1 - i * 0.08} />
      ))}
      <circle cx="60" cy="60" r="22" fill="#fbf5ec" />
      <circle cx="60" cy="60" r="9" fill="#2a1a10" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle
          key={a}
          cx={60 + 15 * Math.cos((a * Math.PI) / 180)}
          cy={60 + 15 * Math.sin((a * Math.PI) / 180)}
          r="3"
          fill="#2a1a10"
          fillOpacity="0.35"
        />
      ))}
    </svg>
  );
}

export function ImpressaoParaQuem({ course, theme, tema }: OficinaBlockProps) {
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
      <div>
        <SectionTitle n="01" eyebrow="Para quem é">
          Este curso é ideal se você...
        </SectionTitle>
        <Reveal delay={120}>
          <PersonAtDesk theme={theme} tema={tema} className="mt-6 w-full max-w-md" />
        </Reveal>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {course.targetAudience.map((item, i) => (
          <Reveal key={item} delay={i * 70}>
            <div className="h-full bg-[#e9dccb] p-[2px] dark:bg-white/15" style={NOTCH}>
              <div className="h-full bg-white p-5 dark:bg-[#1f140d]" style={NOTCH}>
                <span className="font-mono text-xs font-bold text-(--accent)">{pad2(i + 1)}</span>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#4a3526] dark:text-white/80">{item}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ImpressaoConteudo(props: OficinaBlockProps) {
  const { tier } = props;
  const total = tier.modules.length;
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionTitle n="02" eyebrow="Conteúdo programático">
        O que você vai aprender
      </SectionTitle>
      <TierTabs {...props} label="Perfil:" />

      <div className="relative mt-12">
        {/* Trilho do bico da impressora */}
        <span className="absolute bottom-6 left-[27px] top-6 w-1 rounded-full bg-[#efe3d4] dark:bg-white/10" />
        <div className="space-y-6">
          {tier.modules.map((m, i) => {
            const pct = Math.round(((i + 1) / (total + 1)) * 100);
            return (
              <Reveal key={m.title} delay={i * 80}>
                <div className="grid grid-cols-[58px_1fr] gap-4">
                  <div className="relative z-10 flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-(--accent) text-white shadow-[0_4px_0_0_color-mix(in_srgb,var(--accent)_50%,black)]">
                    <span className="text-[9px] font-bold uppercase opacity-80">Camada</span>
                    <span className="text-lg font-black leading-none">{pad2(i + 1)}</span>
                  </div>
                  <div className="rounded-2xl border-2 border-[#efe3d4] bg-[#fffaf4] p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-black uppercase tracking-tight">{m.title}</h3>
                      <span className="shrink-0 font-mono text-xs font-bold text-(--accent)">{pct}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#efe3d4] dark:bg-white/10">
                      <div className="h-full rounded-full bg-(--accent)" style={{ width: `${pct}%` }} />
                    </div>
                    <ul className="mt-4 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                      {m.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-[#5b4434] dark:text-white/70">
                          <span className="mt-[7px] h-1.5 w-3 shrink-0 rounded-sm bg-(--accent)/70" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <Reveal delay={total * 80}>
            <div className="grid grid-cols-[58px_1fr] gap-4">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2a1a10] text-2xl dark:bg-white">
                <span className="text-(--accent)">★</span>
              </div>
              <div className="rounded-2xl bg-[#2a1a10] p-5 text-white dark:bg-white dark:text-[#2a1a10]">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent)">Peça pronta · 100%</p>
                <OutcomeText text={tier.outcome} className="mt-2 text-base leading-relaxed" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {tier.tools.length > 0 && (
        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          {tier.tools.map((tool) => (
            <span key={tool} className="inline-flex items-center gap-2 rounded-full bg-[#f6ecdf] py-1 pl-1 pr-4 text-xs font-bold dark:bg-white/10">
              <Spool className="h-7 w-7" />
              {tool}
            </span>
          ))}
        </Reveal>
      )}
    </div>
  );
}
