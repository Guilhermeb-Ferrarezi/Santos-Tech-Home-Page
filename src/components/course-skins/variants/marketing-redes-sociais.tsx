import { CalendarDays, Heart, Images, LayoutGrid, Radio, Square, Clapperboard, CircleDashed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
import { tierMeta } from "@/components/course-skins/shared";

/**
 * Gestão de Redes Sociais. "Para quem é" é a grade de um perfil (fictício):
 * cabeçalho com bio e cada perfil de público vira uma publicação da grade. O
 * conteúdo é um calendário editorial: cada módulo é uma semana e cada tópico é
 * uma publicação agendada num dia, com o formato marcado por cor.
 */

const POSTS = [
  { bg: "bg-(--accent)", fg: "text-white", sub: "text-white/70" },
  { bg: "bg-[#1f1216]", fg: "text-white", sub: "text-white/60" },
  { bg: "bg-(--accent-2)", fg: "text-[#1f1216]", sub: "text-black/55" },
  { bg: "bg-[#fde2e1] dark:bg-[#3a1a20]", fg: "text-[#7a1a24] dark:text-[#ffd0d2]", sub: "text-[#7a1a24]/60 dark:text-white/50" },
  { bg: "bg-[#fb923c]", fg: "text-[#1f1216]", sub: "text-black/55" },
  { bg: "bg-[#fff4d6] dark:bg-[#33280f]", fg: "text-[#5a3b00] dark:text-[#ffe3a3]", sub: "text-[#5a3b00]/60 dark:text-white/50" },
];

const DESTAQUES = ["Estratégia", "Conteúdo", "Métricas", "Clientes"];

function Publico({ course, tier, whatsappUrl }: MktBlockProps) {
  const [curtidos, alternar] = useMarcados();
  const meta = tierMeta(course, tier);
  return (
    <PublicoSection>
      <StepHeading
        step="01"
        label="Público-alvo · Perfil"
        Icon={LayoutGrid}
        title="Este curso é ideal se você..."
        sub="A grade de um perfil onde cada publicação é um tipo de aluno. Curta as que parecem com você."
      />

      <Reveal delay={80} className="mt-10">
        <div className={`mx-auto max-w-4xl overflow-hidden rounded-3xl ${CARD} shadow-[0_30px_70px_-50px_rgba(120,30,40,0.6)]`}>
          {/* Cabeçalho do perfil */}
          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
            <span className="mx-auto flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(var(--accent),var(--accent-2),#fb923c,var(--accent))] p-[3px] sm:mx-0 sm:h-28 sm:w-28">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-[#150b0f]">
                <span className="flex h-[86%] w-[86%] items-center justify-center rounded-full bg-(--hero-bg) text-2xl font-black text-white">ST</span>
              </span>
            </span>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className={`text-lg font-black ${INK}`}>@turma.{course.variante ?? "curso"}</p>
              <dl className="mt-2 flex justify-center gap-6 sm:justify-start">
                {[
                  [String(course.targetAudience.length), "perfis"],
                  [String(tier.modules.length), "semanas"],
                  [meta?.aulas.replace(" aulas", "") ?? tier.totalHours, "aulas"],
                ].map(([v, k]) => (
                  <div key={k}>
                    <dt className="sr-only">{k}</dt>
                    <dd className={`text-sm ${SOFT}`}>
                      <span className={`font-black ${INK}`}>{v}</span> {k}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className={`mt-2 text-sm ${BODY}`}>
                Curso de {course.nome} · Santos Tech, Ribeirão Preto. Aula individual, no seu ritmo.
              </p>
            </div>
          </div>
          {/* Destaques */}
          <div className="flex justify-center gap-5 px-5 pb-5 sm:justify-start sm:px-8">
            {DESTAQUES.map((d, i) => (
              <span key={d} className="flex flex-col items-center gap-1.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f0dedb] dark:border-white/15">
                  <span className="h-9 w-9 rounded-full" style={{ background: ["var(--accent)", "var(--accent-2)", "#fb923c", "#1f1216"][i] }} />
                </span>
                <span className={`text-[11px] font-semibold ${SOFT}`}>{d}</span>
              </span>
            ))}
          </div>
          {/* Grade */}
          <div className={`flex justify-center gap-10 border-t border-[#f0dedb] text-xs font-bold dark:border-white/10 ${SOFT}`}>
            <span className={`-mt-px flex items-center gap-1.5 border-t-2 border-(--accent) py-2.5 ${INK}`}>
              <LayoutGrid className="h-3.5 w-3.5" /> Publicações
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1 p-1 sm:grid-cols-3">
            {course.targetAudience.map((item, i) => {
              const s = POSTS[i % POSTS.length];
              const on = curtidos.has(i);
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={on}
                  onClick={() => alternar(i)}
                  className={`group relative flex min-h-[190px] flex-col justify-between p-3.5 text-left transition sm:aspect-square sm:min-h-0 sm:p-5 ${s.bg}`}
                >
                  <span className={`flex items-center justify-between text-[11px] font-bold ${s.sub}`}>
                    <span>Post {pad2(i)}</span>
                    {i % 2 === 0 ? <Images className="h-4 w-4" /> : <Square className="h-4 w-4" />}
                  </span>
                  <span className={`block text-sm font-black leading-snug sm:text-base ${s.fg}`}>{item}</span>
                  <span className={`flex items-center gap-1.5 text-xs font-bold ${s.fg}`}>
                    <Heart className={`h-4 w-4 transition group-hover:scale-110 ${on ? "fill-current" : ""}`} />
                    {on ? "Curtiu · sou eu" : "Curtir"}
                  </span>
                </button>
              );
            })}
          </div>
          {curtidos.size > 0 && (
            <div className="flex flex-col items-start gap-3 bg-(--hero-bg) px-5 py-4 text-white sm:flex-row sm:items-center sm:px-8">
              <p className="flex-1 text-sm text-white/85">
                Você curtiu {curtidos.size} {curtidos.size === 1 ? "publicação" : "publicações"} — dá pra montar a sua trilha a partir disso.
              </p>
              <ConversaLink href={whatsappUrl} light />
            </div>
          )}
        </div>
      </Reveal>
    </PublicoSection>
  );
}

const FORMATOS: { nome: string; Icon: LucideIcon; cor: string }[] = [
  { nome: "Reels", Icon: Clapperboard, cor: "var(--accent)" },
  { nome: "Carrossel", Icon: Images, cor: "var(--accent-2)" },
  { nome: "Stories", Icon: CircleDashed, cor: "#fb923c" },
  { nome: "Post", Icon: Square, cor: "#f472b6" },
  { nome: "Ao vivo", Icon: Radio, cor: "#a78bfa" },
];

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const colunas = Math.min(Math.max(...tier.modules.map((m) => m.topics.length), 1), 7);
  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={CalendarDays}
        title="O que você vai aprender"
        sub="O curso como um calendário editorial: cada módulo é uma semana, e cada tópico é uma publicação agendada."
      />
      <TierPicker {...p} unidade="semanas" />

      {/* Legenda de formatos */}
      <Reveal delay={60} className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`mr-1 text-xs font-bold ${SOFT}`}>Formatos:</span>
          {FORMATOS.map((f) => (
            <span key={f.nome} className={`inline-flex items-center gap-1.5 rounded-full py-1 pl-1.5 pr-2.5 text-xs font-semibold ${CARD} ${BODY}`}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: f.cor }} />
              {f.nome}
            </span>
          ))}
        </div>
      </Reveal>

      <div className={`mt-5 overflow-hidden rounded-2xl ${CARD}`}>
        {/* Cabeçalho de dias (desktop) */}
        <div
          className="hidden gap-px border-b border-[#f0dedb] bg-[#fff5f2] dark:border-white/10 dark:bg-white/[0.03] lg:grid"
          style={{ gridTemplateColumns: `200px repeat(${colunas}, minmax(0, 1fr))` }}
        >
          <span className={`px-4 py-2.5 ${KICKER} ${SOFT}`}>Semana</span>
          {DIAS.slice(0, colunas).map((d) => (
            <span key={d} className={`px-3 py-2.5 ${KICKER} ${SOFT}`}>
              {d}
            </span>
          ))}
        </div>

        {tier.modules.map((m, i) => (
          <Reveal key={`${tier.levelName}-${m.title}`} delay={i * 50}>
            <div
              className={`grid gap-px bg-[#f0dedb] dark:border-white/10 dark:bg-white/10 lg:[grid-template-columns:var(--cols)] ${i > 0 ? "border-t-2 border-[#f0dedb]" : ""}`}
              style={{ ["--cols" as string]: `200px repeat(${colunas}, minmax(0, 1fr))` }}
            >
              <div className="bg-white p-4 dark:bg-[#150b0f]">
                <p className="text-xs font-black text-(--accent)">Semana {i + 1}</p>
                <h3 className={`mt-1 text-base font-black leading-snug ${INK}`}>{m.title}</h3>
                <p className={`mt-1 text-xs ${SOFT}`}>{m.topics.length} publicações</p>
              </div>
              {Array.from({ length: Math.max(colunas, m.topics.length) }).map((_, j) => {
                const topic = m.topics[j];
                if (!topic) return <div key={j} className="hidden bg-white/60 dark:bg-[#150b0f]/60 lg:block" aria-hidden="true" />;
                const f = FORMATOS[(i + j * 2) % FORMATOS.length];
                return (
                  <div key={topic} className="bg-white p-3 dark:bg-[#150b0f]">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] font-bold lg:hidden ${SOFT}`}>{DIAS[j % 7]} ·</span>
                      <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-black text-[#1f1216] dark:text-white" style={{ background: `color-mix(in srgb, ${f.cor} 30%, transparent)` }}>
                        <f.Icon className="h-3 w-3" />
                        {f.nome}
                      </span>
                    </div>
                    <p className={`mt-2 text-sm leading-snug ${BODY}`}>{topic}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80} className="mt-5">
        <div className="rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-(--accent)/40 sm:p-6">
          <p className={`${KICKER} text-(--accent-2)`}>Meta do calendário · {tier.levelName}</p>
          <p className="mt-2 text-base font-semibold leading-relaxed sm:text-lg">{tier.outcome}</p>
          <p className="mt-2 text-xs text-white/60">{ritmo(course, tier)}</p>
        </div>
      </Reveal>

      <ToolsRow tools={tier.tools} label="Ferramentas de gestão" />
    </ConteudoSection>
  );
}

export { Publico as RedesSociaisPublico, Conteudo as RedesSociaisConteudo };
