import { Check, Clapperboard, Play, Timer } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  ConteudoSection,
  ConversaLink,
  PublicoSection,
  StepHeading,
  TierPicker,
  ToolsRow,
  type MktBlockProps,
} from "@/components/course-skins/variants/marketing-kit";
import { BODY, CARD, INK, KICKER, SOFT, pad2, ritmo, useMarcados } from "@/components/course-skins/variants/marketing-tokens";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * TikTok Ads. "Para quem é" é uma sequência de vídeos verticais (cada perfil é
 * a legenda de um vídeo curto). O conteúdo é o roteiro de um anúncio: uma
 * linha do tempo de edição no topo e, abaixo, as cenas com minutagem —
 * gancho, problema, demonstração, prova e chamada — uma por módulo.
 */

const FUNDOS = [
  "linear-gradient(160deg, var(--accent) 0%, #7a0b2a 100%)",
  "linear-gradient(160deg, #2a1117 0%, #0e0709 100%)",
  "linear-gradient(160deg, var(--accent-2) 0%, #fb923c 100%)",
  "linear-gradient(160deg, #3b1420 0%, var(--accent) 120%)",
  "linear-gradient(160deg, #fb7185 0%, #9f1239 100%)",
  "linear-gradient(160deg, #1f1216 0%, #4a1d28 100%)",
];

function Publico({ course, whatsappUrl }: MktBlockProps) {
  const [salvos, alternar] = useMarcados();
  const n = course.targetAudience.length;
  return (
    <PublicoSection>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <StepHeading
          step="01"
          label="Público-alvo · Sequência"
          Icon={Clapperboard}
          title="Este curso é ideal se você..."
          sub="Uma sequência de vídeos curtos, um para cada perfil. Toque nos que parecem falar com você."
        />
        <Reveal delay={100}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-(--hero-bg) px-3 py-1.5 text-xs font-bold text-white">
              {salvos.size} de {n} salvos
            </span>
            {salvos.size > 0 && <ConversaLink href={whatsappUrl} />}
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
        {course.targetAudience.map((item, i) => {
          const on = salvos.has(i);
          const claro = i % FUNDOS.length === 2;
          return (
            <Reveal key={item} delay={i * 60}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => alternar(i)}
                className={`group relative flex aspect-[9/16] w-full flex-col overflow-hidden rounded-[22px] p-3 text-left shadow-[0_18px_40px_-22px_rgba(80,10,20,0.7)] ring-offset-2 transition hover:-translate-y-1 sm:p-3.5 ${
                  on ? "ring-4 ring-(--accent) ring-offset-white dark:ring-offset-[#100a0c]" : ""
                } ${claro ? "text-[#1f1216]" : "text-white"}`}
                style={{ background: FUNDOS[i % FUNDOS.length] }}
              >
                {/* barra de progresso do vídeo */}
                <span className={`relative block h-1 w-full overflow-hidden rounded-full ${claro ? "bg-black/15" : "bg-white/20"}`}>
                  <span className={`absolute inset-y-0 left-0 rounded-full ${claro ? "bg-[#1f1216]" : "bg-white"}`} style={{ width: `${((i + 1) / n) * 100}%` }} />
                </span>
                <span className={`mt-2 flex items-center justify-between text-[11px] font-bold ${claro ? "text-black/60" : "text-white/70"}`}>
                  <span>Vídeo {pad2(i)}</span>
                  <span>0:{String(6 + i * 3).padStart(2, "0")}</span>
                </span>
                {/* play central */}
                <span className="flex flex-1 items-center justify-center">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur ${claro ? "bg-black/10" : "bg-white/15"} transition group-hover:scale-110`}>
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </span>
                {/* legenda = o perfil */}
                <span className="block text-sm font-bold leading-snug [text-wrap:pretty]">{item}</span>
                <span className={`mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-black ${on ? "bg-white text-(--accent)" : claro ? "bg-black/10" : "bg-white/15"}`}>
                  {on ? <Check className="h-3.5 w-3.5" /> : null}
                  {on ? "Salvo · sou eu" : "É o meu caso?"}
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>
    </PublicoSection>
  );
}

/** Papel de cada cena no roteiro, pela posição do módulo. */
function cena(i: number, n: number) {
  if (n === 1) return "Vídeo completo";
  if (i === 0) return "Gancho";
  if (i === n - 1) return "Chamada";
  if (i === 1) return "Problema";
  if (i === n - 2 && n >= 5) return "Prova";
  return "Demonstração";
}

const seg = (s: number) => `0:${String(Math.round(s)).padStart(2, "0")}`;

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const n = tier.modules.length;
  const DURACAO = 60;
  const pesos = tier.modules.map((m) => m.topics.length);
  const soma = pesos.reduce((a, b) => a + b, 0) || 1;
  const inicios: number[] = [];
  pesos.reduce((acc, w, i) => {
    inicios[i] = acc;
    return acc + (w / soma) * DURACAO;
  }, 0);
  const fim = (i: number) => (i === n - 1 ? DURACAO : inicios[i + 1]);

  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={Timer}
        title="O que você vai aprender"
        sub="O curso como o roteiro de um anúncio em vídeo: cada módulo é uma cena, com a sua minutagem na linha do tempo."
      />
      <TierPicker {...p} unidade="cenas" />

      {/* Linha do tempo de edição */}
      <Reveal delay={60} className="mt-10">
        <div className="rounded-2xl bg-(--hero-bg) p-4 text-white dark:border dark:border-white/10 sm:p-5">
          <div className="flex items-center justify-between text-xs font-bold text-white/60">
            <span>Linha do tempo · {tier.levelName}</span>
            <span className="font-mono">0:00 — 1:00</span>
          </div>
          <div className="relative mt-3">
            <div className="flex h-12 gap-1 overflow-hidden rounded-lg sm:h-14">
              {tier.modules.map((m, i) => (
                <div
                  key={m.title}
                  className="relative flex min-w-0 items-end overflow-hidden rounded-md px-1.5 pb-1 sm:px-2"
                  style={{
                    flexGrow: pesos[i],
                    flexBasis: 0,
                    background: `color-mix(in srgb, var(--accent) ${n === 1 ? 100 : Math.round(100 - (i / (n - 1)) * 70)}%, var(--accent-2))`,
                  }}
                >
                  <span className="absolute inset-x-0 top-1.5 flex gap-0.5 px-1 opacity-30" aria-hidden="true">
                    {Array.from({ length: 10 }).map((_, k) => (
                      <span key={k} className="h-3 w-1 rounded-sm bg-white" style={{ height: `${4 + ((k * 7 + i * 3) % 9)}px` }} />
                    ))}
                  </span>
                  <span className={`truncate text-[11px] font-black sm:text-xs ${n > 1 && i / (n - 1) > 0.5 ? "text-[#1f1216]" : "text-white"}`}>
                    {pad2(i)} <span className="hidden sm:inline">{cena(i, n)}</span>
                  </span>
                </div>
              ))}
            </div>
            <span className="absolute -top-1.5 bottom-[-6px] left-0 w-0.5 bg-white" aria-hidden="true">
              <span className="absolute -left-[5px] -top-1 h-3 w-3 rotate-45 rounded-sm bg-white" />
            </span>
          </div>
          <div className="mt-2 flex justify-between font-mono text-[11px] text-white/45">
            {[0, 15, 30, 45, 60].map((s) => (
              <span key={s}>{s === 60 ? "1:00" : seg(s)}</span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Roteiro: cenas */}
      <div className={`mt-6 overflow-hidden rounded-2xl ${CARD}`}>
        <div className={`hidden grid-cols-[150px_1fr] gap-6 border-b border-[#f3e4e0] bg-[#fff5f2] px-6 py-2.5 dark:border-white/10 dark:bg-white/[0.03] md:grid ${KICKER} ${SOFT}`}>
          <span>Tempo · cena</span>
          <span>Roteiro (o que você aprende)</span>
        </div>
        {tier.modules.map((m, i) => (
          <Reveal key={`${tier.levelName}-${m.title}`} delay={i * 50}>
            <div className="grid gap-4 border-b border-[#f3e4e0] px-4 py-5 last:border-b-0 dark:border-white/10 sm:px-6 md:grid-cols-[180px_1fr] md:gap-6">
              <div className="flex items-center gap-3 md:block">
                <span className="font-mono text-sm font-bold text-(--accent)">
                  {seg(inicios[i])}–{fim(i) === DURACAO ? "1:00" : seg(fim(i))}
                </span>
                <span className="inline-flex rounded-full bg-(--accent-2)/25 px-2.5 py-0.5 text-xs font-black text-[#7a4f00] dark:text-(--accent-2) md:mt-2">
                  Cena {pad2(i)} · {cena(i, n)}
                </span>
                {/* quadro vertical da cena */}
                <span
                  className="ml-auto flex h-16 w-9 items-center justify-center rounded-lg text-white md:ml-0 md:mt-3"
                  style={{ background: FUNDOS[i % FUNDOS.length] }}
                  aria-hidden="true"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
              </div>
              <div>
                <h3 className={`text-base font-black sm:text-lg ${INK}`}>{m.title}</h3>
                <ol className="mt-3 space-y-2">
                  {m.topics.map((topic, j) => (
                    <li key={topic} className={`flex gap-3 text-sm leading-relaxed ${BODY}`}>
                      <span className="mt-0.5 shrink-0 font-mono text-xs font-bold text-(--accent)/80">
                        {i + 1}.{j + 1}
                      </span>
                      {topic}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        ))}
        {/* Chamada final = o resultado do nível */}
        <div className="grid gap-3 bg-(--hero-bg) px-4 py-5 text-white sm:px-6 md:grid-cols-[180px_1fr] md:gap-6">
          <span className="font-mono text-sm font-bold text-(--accent-2)">CTA final</span>
          <div>
            <OutcomeText text={tier.outcome} className="text-base leading-relaxed sm:text-lg" />
            <p className="mt-2 text-xs text-white/60">{ritmo(course, tier)}</p>
          </div>
        </div>
      </div>

      <ToolsRow tools={tier.tools} label="Ferramentas de produção e veiculação" />
    </ConteudoSection>
  );
}

export { Publico as TiktokAdsPublico, Conteudo as TiktokAdsConteudo };
