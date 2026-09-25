import type { CSSProperties, ReactNode } from "react";
import { GitBranch, Play } from "lucide-react";
import { Reveal, RevealHero } from "@/components/reveal";
import { CommonSections } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { CourseHeroArt } from "@/components/course-hero-art";
import { CodeSceneFor } from "@/components/course-skins/scenes/code";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta, type SkinProps } from "@/components/course-skins/shared";
import { VARIANTES_IDE } from "@/components/course-skins/variants/ide-variantes";
import { kebab, slug } from "@/components/course-skins/variants/ide-util";

/**
 * Pele "IDE" (categoria Programação): a página é um ambiente de desenvolvimento
 * escuro. O hero é comum à categoria; “Para quem é” e “Conteúdo programático”
 * usam a metáfora da ferramenta de cada curso (editor Python, navegador com
 * DevTools, Swagger, grafo de commits, mapa de fases…), escolhida pela
 * `variante` do curso — ver `variants/ide-variantes.ts`.
 */

// Paleta da pele em course-skins/themes.ts (IDE_THEME) — módulo leve, sem componentes.

function Heading({ n, cm, file, title }: { n: string; cm: string; file: string; title: string }) {
  return (
    <Reveal>
      <p className="font-mono text-sm text-(--accent)">
        <span className="text-white/30">
          {cm} {n} ·{" "}
        </span>
        {file}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

function RunButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-md bg-(--accent) px-5 py-3 font-mono text-sm font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_10px_30px_-10px_var(--accent)] transition hover:bg-(--accent-hover)"
    >
      <Play className="h-3.5 w-3.5 fill-current" />
      {children}
      <WhatsAppIcon className="ml-1 h-4 w-4 opacity-80" />
    </a>
  );
}

export function IdeSkin({ course, tema, theme: baseTheme, logo, whatsappUrl, selectedTier, onSelectTier, faq }: SkinProps) {
  const v = VARIANTES_IDE[course.variante ?? "python"] ?? VARIANTES_IDE.python;
  const theme: CourseTheme = { ...baseTheme, accent2: v.accent2 };
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const { Publico, Conteudo } = v;

  return (
    <div className="sb-bleed bg-(--hero-bg) text-white" style={{ "--accent-2": v.accent2 } as CSSProperties}>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="sb-bleed relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-(--accent)/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-(--accent-2)/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-24 lg:pt-20">
          <div className="min-w-0">
            <RevealHero>
              <p className="font-mono text-sm text-white/50">
                <span className="text-(--accent)">~/santos-tech</span> $ cursos --categoria {slug(course.categoria)}
              </p>
            </RevealHero>
            <RevealHero delay={100}>
              <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
                {course.nome}
                <span className="ml-1 inline-block h-[0.8em] w-[0.35em] translate-y-[0.08em] animate-pulse bg-(--accent)" />
              </h1>
            </RevealHero>
            <RevealHero delay={180}>
              <p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-white/55 sm:text-base">
                <span className="text-white/30">{v.doc[0]}</span>
                {course.tagline}
                <span className="text-white/30">{v.doc[1]}</span>
              </p>
            </RevealHero>
            <RevealHero delay={260}>
              <div className="mt-8">
                <RunButton href={whatsappUrl}>Quero saber mais</RunButton>
              </div>
            </RevealHero>
            {course.tiers.length > 1 && (
              <RevealHero delay={340}>
                <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
                  {course.tiers.map((t, i) => (
                    <button
                      key={t.levelName}
                      type="button"
                      onClick={() => onSelectTier(i)}
                      className={`rounded border px-3 py-1.5 transition ${
                        selectedTier === i
                          ? "border-(--accent) bg-(--accent)/15 text-(--accent)"
                          : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                      }`}
                    >
                      --{kebab(t.levelName)}
                    </button>
                  ))}
                </div>
              </RevealHero>
            )}
          </div>
          <RevealHero delay={200}>
            <CourseHeroArt theme={theme} logo={logo}>
              <CodeSceneFor variante={course.variante} theme={theme} />
            </CourseHeroArt>
          </RevealHero>
        </div>

        {/* Barra de status do editor */}
        <div className="sb-bleed relative flex items-center gap-5 overflow-x-auto bg-(--accent) px-4 py-1 font-mono text-[11px] text-white [--sb-pl:1rem]">
          <span className="flex shrink-0 items-center gap-1">
            <GitBranch className="h-3 w-3" /> {v.status[0]}
          </span>
          <span className="shrink-0">{v.status[1]}</span>
          <span className="ml-auto shrink-0">{tier.levelName}</span>
          <span className="shrink-0">{meta?.aulas ?? tier.totalHours}</span>
          <span className="hidden shrink-0 sm:inline">{v.linguagem}</span>
          <span className="shrink-0">UTF-8</span>
        </div>
      </section>

      {/* ── PARA QUEM É: metáfora da ferramenta do curso ───────────────────── */}
      <section className="sb-bleed py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading n="01" cm={v.cm} file={v.publicoRotulo} title="Este curso é ideal se você..." />
          <Reveal delay={100} className="mt-10">
            <Publico itens={course.targetAudience} course={course} theme={theme} tema={tema} />
          </Reveal>
        </div>
      </section>

      {/* ── CONTEÚDO: módulos do nível selecionado, resultado e ferramentas ── */}
      <section className="sb-bleed border-y border-white/5 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading n="02" cm={v.cm} file={v.conteudoRotulo} title="O que você vai aprender" />
          <Reveal delay={100} className="mt-10">
            <Conteudo key={selectedTier} course={course} tier={tier} tierIndex={selectedTier} onSelectTier={onSelectTier} meta={meta} />
          </Reveal>
        </div>
      </section>

      <CommonSections
        lookKey="ide"
        course={course}
        tema={tema}
        theme={theme}
        logo={logo}
        whatsappUrl={whatsappUrl}
        selectedTier={selectedTier}
        onSelectTier={onSelectTier}
        faq={faq}
      />
    </div>
  );
}
