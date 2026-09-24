import { type ComponentType, type CSSProperties, type ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { CommonSections } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { CourseHeroArt } from "@/components/course-hero-art";
import { hasLogoFile } from "@/components/tool-logo";
import { PrintScene } from "@/components/course-skins/scenes/print";
import { ModelagemScene } from "@/components/course-skins/scenes/3d-modelagem";
import { AutocadScene } from "@/components/course-skins/scenes/3d-autocad";
import { RevitScene } from "@/components/course-skins/scenes/3d-revit";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta, type SkinProps } from "@/components/course-skins/shared";
import { GRID_DARK, GRID_LIGHT, LAYERS_DARK, LAYERS_LIGHT, type OficinaBlockProps } from "@/components/course-skins/variants/oficina-util";
import { ImpressaoConteudo, ImpressaoParaQuem } from "@/components/course-skins/variants/oficina-impressao";
import { ModelagemConteudo, ModelagemParaQuem } from "@/components/course-skins/variants/oficina-modelagem";
import { AutocadConteudo, AutocadParaQuem } from "@/components/course-skins/variants/oficina-autocad";
import { RevitConteudo, RevitParaQuem } from "@/components/course-skins/variants/oficina-revit";

/**
 * Pele "Oficina" (categoria Universo 3D): creme e marrom de bancada, textura de
 * camadas de impressão, cotas de desenho técnico, cards com canto chanfrado.
 * Módulos empilham como camadas de uma peça; a parte comercial usa o bloco comum.
 *
 * `course.variante` troca a metáfora por curso, mantendo a mesma família visual. O hero
 * é comum (muda só a cena); "Para quem é" e "Conteúdo" são blocos próprios de cada curso,
 * em variants/oficina-<variante>.tsx:
 * - (padrão) "impressao": fichas chanfradas · camadas empilhando até a "Peça pronta";
 * - "modelagem": viewport + hierarquia da cena · passes de render + pilha de modificadores;
 * - "autocad": gerenciador de camadas · pranchas A-01… com carimbo e abas de layout;
 * - "revit": prédio em corte, um perfil por pavimento · navegador de projeto + tabelas.
 */

export const OFICINA_THEME: CourseTheme = { accent: "#F97316", accentHover: "#e0620c", accent2: "#FDBA74", heroBg: "#1a110b" };

const CREAM = "bg-[#fbf5ec] dark:bg-[#140d08]";

/** Borda em degraus, como as camadas de uma peça vistas de lado. */
function Steps({ className, flip = false }: { className: string; flip?: boolean }) {
  const bands = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className={`sb-bleed-full block h-10 w-full sm:h-14 ${className}`} aria-hidden="true">
      <g transform={flip ? "translate(0 60) scale(1 -1)" : undefined}>
        {bands.map((b) => {
          const inset = b * 150;
          return <rect key={b} x={inset} y={48 - b * 12} width={1440 - inset * 2} height={12 + b * 12} fill="currentColor" />;
        })}
        <rect x="0" y="48" width="1440" height="12" fill="currentColor" />
      </g>
    </svg>
  );
}

/** Cota de desenho técnico: |←—— label ——→| */
function Dim({ label, light = false }: { label: string; light?: boolean }) {
  const line = light ? "bg-white/40" : "bg-(--accent)/60";
  return (
    <div className={`flex items-center gap-2 font-mono text-[11px] ${light ? "text-white/60" : "text-(--accent)"}`}>
      <span className={`h-3 w-px ${line}`} />
      <span className={`h-px flex-1 ${line}`} />
      <span className="shrink-0 tracking-wider">{label}</span>
      <span className={`h-px flex-1 ${line}`} />
      <span className={`h-3 w-px ${line}`} />
    </div>
  );
}

function Pill({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wider transition hover:-translate-y-0.5 active:translate-y-0 ${
        dark
          ? "bg-[#2a1a10] text-white shadow-[0_5px_0_0_#000] dark:bg-white dark:text-[#2a1a10]"
          : "bg-(--accent) text-white shadow-[0_5px_0_0_color-mix(in_srgb,var(--accent)_50%,black)] hover:bg-(--accent-hover)"
      }`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

/** Marcas próprias e genéricas para o selo do hero quando não há logo oficial em src/assets/logos. */
function MarkDesenho({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M8 40 V10 L38 40 Z" fill="none" stroke="#2a1a10" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M14 34 V24 L24 34 Z" fill="#2a1a10" />
      <g stroke="var(--accent)" strokeWidth="3" strokeLinecap="round">
        <path d="M34 6 V20 M27 13 H41" />
      </g>
      <rect x="31" y="10" width="6" height="6" fill="none" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  );
}
function MarkBim({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 5 L41 14 L24 23 L7 14 Z" fill="#2a1a10" />
      <path d="M7 14 L24 23 L24 43 L7 34 Z" fill="#6b5242" />
      <path d="M24 23 L41 14 L41 34 L24 43 Z" fill="var(--accent)" />
      <path d="M24 30 L41 21 M24 37 L41 28" stroke="#2a1a10" strokeWidth="2" />
    </svg>
  );
}

type Variante = "impressao" | "modelagem" | "autocad" | "revit";

const VARIANTES: Record<
  Variante,
  {
    Scene: ComponentType<{ theme: CourseTheme }>;
    /** Textura de fundo: `claro` na seção "Para quem é", `escuro` no hero. */
    textura: { claro: CSSProperties; escuro: CSSProperties };
    /** Selo do hero quando o curso não tem logo oficial em src/assets/logos. */
    Mark: ComponentType<{ className?: string }>;
    /** Bloco "Para quem é" com a metáfora da própria ferramenta. */
    ParaQuem: ComponentType<OficinaBlockProps>;
    /** Bloco "Conteúdo programático" (módulos do nível, resultado e ferramentas). */
    Conteudo: ComponentType<OficinaBlockProps>;
  }
> = {
  impressao: {
    Scene: PrintScene,
    textura: { claro: LAYERS_LIGHT, escuro: LAYERS_DARK },
    Mark: MarkBim,
    ParaQuem: ImpressaoParaQuem,
    Conteudo: ImpressaoConteudo,
  },
  modelagem: {
    Scene: ModelagemScene,
    textura: { claro: GRID_LIGHT, escuro: GRID_DARK },
    Mark: MarkBim,
    ParaQuem: ModelagemParaQuem,
    Conteudo: ModelagemConteudo,
  },
  autocad: {
    Scene: AutocadScene,
    textura: { claro: GRID_LIGHT, escuro: GRID_DARK },
    Mark: MarkDesenho,
    ParaQuem: AutocadParaQuem,
    Conteudo: AutocadConteudo,
  },
  revit: {
    Scene: RevitScene,
    textura: { claro: GRID_LIGHT, escuro: GRID_DARK },
    Mark: MarkBim,
    ParaQuem: RevitParaQuem,
    Conteudo: RevitConteudo,
  },
};

const varianteDe = (v?: string): Variante => (v && v in VARIANTES ? (v as Variante) : "impressao");

/**
 * Arte do hero: usa a moldura padrão (com a logo oficial) quando a logo existe;
 * senão, a mesma moldura com um selo próprio e genérico — nunca a logo errada.
 */
function HeroArt({ theme, logo, Mark, children }: { theme: CourseTheme; logo: string; Mark: ComponentType<{ className?: string }>; children: ReactNode }) {
  return (
    <CourseHeroArt
      theme={theme}
      logo={logo}
      badge={hasLogoFile(logo) ? undefined : <Mark className="h-10 w-10 sm:h-12 sm:w-12" />}
    >
      {children}
    </CourseHeroArt>
  );
}

export function OficinaSkin({ course, tema, theme, logo, whatsappUrl, selectedTier, onSelectTier, faq }: SkinProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const v = VARIANTES[varianteDe(course.variante)];
  const bloco: OficinaBlockProps = { course, tier, tema, theme, selectedTier, onSelectTier };

  return (
    <div className={`sb-bleed ${CREAM} text-[#2a1a10] dark:text-white`}>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="sb-bleed relative isolate overflow-hidden bg-(--hero-bg) text-white" style={v.textura.escuro}>
        <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-(--accent)/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-20 lg:pt-20">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-(--accent) px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                ▲ {course.categoria}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
                {course.nome}
              </h1>
            </Reveal>
            <Reveal delay={160} className="mt-4 max-w-md">
              <Dim label={`${meta?.aulas ?? tier.totalHours} · 1h cada`} light />
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-base text-white/65 sm:text-lg">{course.tagline}</p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8">
                <Pill href={whatsappUrl}>Quero saber mais</Pill>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap gap-2">
                {tier.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/20 px-3 py-1 font-mono text-[11px] text-white/70">
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <HeroArt theme={theme} logo={logo} Mark={v.Mark}>
              <v.Scene theme={theme} />
            </HeroArt>
          </Reveal>
        </div>
        <Steps className="text-[#fbf5ec] dark:text-[#140d08]" />
      </section>

      {/* ── 01 · PARA QUEM É (bloco próprio do curso) ─────────────────────── */}
      <section className="sb-bleed py-20" style={v.textura.claro}>
        <v.ParaQuem {...bloco} />
      </section>

      {/* ── 02 · CONTEÚDO (bloco próprio do curso) ─────────────────────────── */}
      <section className="sb-bleed bg-white py-20 dark:bg-[#1a110b]">
        <v.Conteudo {...bloco} />
      </section>

      <CommonSections
        lookKey="oficina"
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
