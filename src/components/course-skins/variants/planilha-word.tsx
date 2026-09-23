import { useState, type ReactNode } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ToolLogo } from "@/components/tool-logo";
import {
  FormulaHeading,
  TierGuide,
  ToolChip,
} from "@/components/course-skins/variants/planilha-kit";
import {
  APP_COLORS,
  RULED,
  type BlockProps,
} from "@/components/course-skins/variants/planilha-base";

/**
 * Word: "Para quem é" é uma página de documento no modo rascunho, com a área de
 * estilos à esquerda (Título, Subtítulo, Lista com marcadores) e um comentário
 * na margem. O conteúdo é o documento do nível: painel de navegação com os
 * títulos, resumo do objetivo e o sumário automático com pontilhado e número
 * de página — cada módulo um Título 1, cada tópico um Título 2.
 */

const W = APP_COLORS.word;

/** Régua horizontal com margens cinza e marcações a cada centímetro. */
function Ruler() {
  return (
    <div className="relative flex h-6 select-none border-b border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900" aria-hidden="true">
      <span className="w-[9%] shrink-0 bg-neutral-200 dark:bg-neutral-800" />
      <span
        className="relative flex flex-1 items-start justify-between px-[2px] pt-0.5 font-mono text-[10px] leading-none text-neutral-400"
        style={{
          backgroundImage: "repeating-linear-gradient(to right, currentColor 0 1px, transparent 1px 8.33%)",
          backgroundSize: "100% 5px",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {Array.from({ length: 11 }, (_, i) => (
          <span key={i} className={i === 0 ? "invisible" : ""}>
            {i}
          </span>
        ))}
      </span>
      <span className="w-[9%] shrink-0 bg-neutral-200 dark:bg-neutral-800" />
      {/* recuos (triângulos) */}
      <span className="absolute bottom-0 left-[9%] -translate-x-1/2 border-x-[5px] border-b-[6px] border-x-transparent" style={{ borderBottomColor: W }} />
      <span className="absolute bottom-0 right-[9%] translate-x-1/2 border-x-[5px] border-b-[6px] border-x-transparent" style={{ borderBottomColor: W }} />
    </div>
  );
}

/** Galeria de estilos da faixa de opções, com o estilo ativo destacado. */
function StyleGallery({ active }: { active: string }) {
  const styles: [string, string][] = [
    ["Normal", "text-[13px]"],
    ["Título", "text-[15px] font-bold"],
    ["Subtítulo", "text-[13px] italic"],
    ["Marcadores", "text-[13px]"],
  ];
  return (
    <div className="hidden items-stretch gap-1 border border-b-0 border-neutral-300 bg-neutral-50 p-1.5 dark:border-neutral-700 dark:bg-neutral-800/60 sm:flex" aria-hidden="true">
      <span className="flex items-center px-2 text-[11px] font-semibold text-neutral-500">Estilos</span>
      {styles.map(([name, cls]) => (
        <span
          key={name}
          className={`flex min-w-24 flex-col justify-center border bg-white px-2.5 py-1 dark:bg-neutral-900 ${
            name === active ? "" : "border-neutral-200 dark:border-neutral-700"
          }`}
          style={name === active ? { borderColor: W, boxShadow: `inset 0 0 0 1px ${W}` } : undefined}
        >
          <span className={`${cls} leading-tight text-neutral-800 dark:text-neutral-200`}>AaBbCc</span>
          <span className="text-[11px] text-neutral-500">{name}</span>
        </span>
      ))}
    </div>
  );
}

/** Linha do modo rascunho: nome do estilo na área de estilos + parágrafo. */
function StyleRow({ style, children, note }: { style: string; children: ReactNode; note?: ReactNode }) {
  return (
    <div className="grid sm:grid-cols-[104px_1fr] lg:grid-cols-[104px_1fr_232px]">
      <span className="hidden border-r border-neutral-200 px-3 pt-1.5 text-[11px] text-neutral-400 dark:border-neutral-800 sm:block">{style}</span>
      <div className="px-6 sm:px-10">{children}</div>
      {/* O comentário flutua na margem sem esticar a linha */}
      <div className="relative hidden bg-neutral-50 dark:bg-neutral-950/40 lg:block">
        {note && <div className="absolute inset-x-0 top-0 z-10">{note}</div>}
      </div>
    </div>
  );
}

function Comment({ children }: { children: ReactNode }) {
  return (
    <div className="relative ml-4 mr-3 border-l-[3px] bg-white p-3 text-sm leading-snug text-neutral-700 shadow-sm dark:bg-neutral-900 dark:text-neutral-300" style={{ borderLeftColor: W }}>
      <p className="mb-1 flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white">
        <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black text-white" style={{ background: W }}>
          ST
        </span>
        Santos Tech
      </p>
      {children}
    </div>
  );
}

const COMMENT = "Se você se reconheceu em pelo menos um item, este curso foi pensado pra você.";

export function WordParaQuem({ course }: BlockProps) {
  const items = course.targetAudience;
  return (
    <section data-sec="para-quem" className="bg-neutral-100 py-20 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StyleGallery active="Marcadores" />
          <Ruler />
          <article className="bg-white pb-10 pt-12 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_18px_40px_-18px_rgba(0,0,0,0.35)] dark:bg-neutral-900">
            <StyleRow style="Subtítulo">
              <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: W }}>
                Para quem é
              </p>
            </StyleRow>
            <StyleRow style="Título">
              <h2 className="mt-2 border-b border-neutral-200 pb-4 text-3xl font-black tracking-tight text-neutral-900 dark:border-neutral-800 dark:text-white sm:text-4xl">
                Este curso é ideal se você...
              </h2>
            </StyleRow>
            <div className="h-5" />
            {items.map((item, i) => (
              <StyleRow key={item} style="Marcadores" note={i === 0 ? <Comment>{COMMENT}</Comment> : undefined}>
                <p
                  className={`flex gap-3 py-2 text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200 ${
                    i === 0 ? "bg-[#2B5CB8]/[0.08] dark:bg-[#2B5CB8]/20" : ""
                  }`}
                >
                  <span className="mt-[0.55em] h-2 w-2 shrink-0" style={{ background: W }} />
                  <span>
                    {item}
                    {i === items.length - 1 && <span className="ml-0.5 inline-block h-[1.1em] w-px animate-pulse bg-neutral-900 align-text-bottom dark:bg-white" />}
                  </span>
                </p>
              </StyleRow>
            ))}
            {/* No celular o comentário da margem vira um balão depois da lista */}
            <div className="mt-6 px-4 lg:hidden">
              <Comment>{COMMENT}</Comment>
            </div>
            <p className="mt-10 text-center font-mono text-[11px] text-neutral-400">— 1 —</p>
          </article>
          <div className="flex items-center justify-between px-1 pt-2 text-[11px] text-neutral-500">
            <span>
              Página 1 de 1 · {items.length} itens · Português (Brasil)
            </span>
            <span className="hidden sm:inline">Foco · Layout de impressão · 100%</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Numeração de página fictícia pro sumário: cada 3 tópicos ocupam uma página. */
function pages(modules: BlockProps["tier"]["modules"]) {
  let p = 3;
  return modules.map((m) => {
    const start = p;
    p += Math.max(1, Math.ceil(m.topics.length / 3));
    return start;
  });
}

function Leader() {
  return <span aria-hidden="true" className="mb-[0.45em] min-w-4 flex-1 sm:min-w-8 border-b-2 border-dotted border-neutral-300 dark:border-neutral-600" />;
}

export function WordConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  const [active, setActive] = useState(0);
  const starts = pages(tier.modules);
  const go = (i: number) => {
    setActive(i);
    document.getElementById(`word-titulo-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section data-sec="conteudo" className="border-y border-neutral-200 py-20 dark:border-neutral-800" style={RULED}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Título 1" fn="Conteúdo programático" title="O que você vai aprender" color={W} />

        {multiTier && (
          <Reveal delay={80} className="mt-10">
            {/* Níveis como documentos abertos */}
            <div className="flex flex-wrap gap-1 border-b border-neutral-300 dark:border-neutral-700">
              {course.tiers.map((t, i) => (
                <button
                  key={t.levelName}
                  type="button"
                  data-tier={i}
                  onClick={() => {
                    onSelectTier(i);
                    setActive(0);
                  }}
                  className={`-mb-px flex items-center gap-2 border px-3 py-2 text-sm font-semibold transition ${
                    selectedTier === i
                      ? "border-neutral-300 border-b-white bg-white text-neutral-900 dark:border-neutral-700 dark:border-b-neutral-900 dark:bg-neutral-900 dark:text-white"
                      : "border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                  style={selectedTier === i ? { borderTopColor: W, boxShadow: `inset 0 2px 0 ${W}` } : undefined}
                >
                  <ToolLogo name="word" className="h-4 w-4" />
                  {t.levelName}.docx
                </button>
              ))}
            </div>
            <TierGuide tier={tier} className="mt-3" />
          </Reveal>
        )}

        <Reveal delay={120} className="mt-6">
          <div className="grid overflow-hidden border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900/60 lg:grid-cols-[272px_1fr]">
            {/* Painel de navegação */}
            <aside className="hidden border-r border-neutral-300 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900 lg:block">
              <p className="text-sm font-bold text-neutral-900 dark:text-white">Navegação</p>
              <div className="mt-3 flex items-center gap-2 border border-neutral-300 px-2 py-1.5 text-xs text-neutral-400 dark:border-neutral-700">
                <Search className="h-3.5 w-3.5" /> Pesquisar no documento
              </div>
              <div className="mt-3 flex gap-4 border-b border-neutral-200 text-xs font-semibold text-neutral-500 dark:border-neutral-800">
                <span className="border-b-2 pb-1.5 text-neutral-900 dark:text-white" style={{ borderColor: W }}>
                  Títulos
                </span>
                <span className="pb-1.5">Páginas</span>
                <span className="pb-1.5">Resultados</span>
              </div>
              <ol className="mt-2 space-y-0.5">
                {tier.modules.map((m, i) => (
                  <li key={m.title}>
                    <button
                      type="button"
                      onClick={() => go(i)}
                      className={`flex w-full gap-2 border-l-[3px] px-2 py-1.5 text-left text-[13px] leading-snug transition ${
                        active === i
                          ? "bg-[#2B5CB8]/10 font-semibold text-neutral-900 dark:text-white"
                          : "border-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-white/5"
                      }`}
                      style={active === i ? { borderLeftColor: W } : undefined}
                    >
                      <span className="shrink-0 tabular-nums">{i + 1}</span>
                      {m.title}
                    </button>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Página do documento */}
            <div className="min-w-0 p-3 sm:p-6 lg:p-8">
              <div className="mx-auto max-w-3xl">
                <Ruler />
                <article className="bg-white px-5 pb-8 pt-10 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_18px_40px_-18px_rgba(0,0,0,0.35)] dark:bg-neutral-900 sm:px-12 sm:pt-14">
                  <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: W }}>
                    Resumo
                  </p>
                  <p className="mt-2 border-l-2 border-neutral-200 pl-4 text-[15px] italic leading-relaxed text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
                    {tier.outcome}
                  </p>

                  <h3 className="mt-10 text-2xl font-black tracking-tight" style={{ color: W }}>
                    Sumário
                  </h3>
                  <div className="mt-5 space-y-6">
                    {tier.modules.map((m, i) => (
                      <div key={m.title} id={`word-titulo-${i}`} className="scroll-mt-24">
                        <p className="flex items-end gap-2 text-[15px] font-bold text-neutral-900 dark:text-white">
                          <span className="w-7 shrink-0 tabular-nums" style={{ color: W }}>
                            {i + 1}
                          </span>
                          <span className="min-w-0">{m.title}</span>
                          <Leader />
                          <span className="shrink-0 tabular-nums">{starts[i]}</span>
                        </p>
                        <ul className="mt-1.5 space-y-1">
                          {m.topics.map((topic, ti) => (
                            <li key={topic} className="flex items-end gap-2 text-sm sm:pl-7 leading-relaxed text-neutral-700 dark:text-neutral-300">
                              <span className="w-8 shrink-0 self-start pt-px text-[13px] tabular-nums text-neutral-400">
                                {i + 1}.{ti + 1}
                              </span>
                              <span className="min-w-0">{topic}</span>
                              <Leader />
                              <span className="shrink-0 tabular-nums text-neutral-500">{starts[i] + Math.floor(ti / 3)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {tier.tools.length > 0 && (
                    <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: W }}>
                        Ferramentas
                      </span>
                      {tier.tools.map((tool) => (
                        <ToolChip key={tool} tool={tool} />
                      ))}
                    </div>
                  )}
                  <p className="mt-8 text-center font-mono text-[11px] text-neutral-400">— 2 —</p>
                </article>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

