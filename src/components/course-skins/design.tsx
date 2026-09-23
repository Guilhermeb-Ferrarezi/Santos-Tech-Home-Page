import type { ComponentType, CSSProperties, ReactNode } from "react";
import { ArrowDown, Circle, Film, Frame, Hand, MousePointer2, PenTool, Play, SkipBack, SkipForward, Square, Type } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CommonSections, type Look } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { tierMeta, type SkinProps } from "@/components/course-skins/shared";
import type { CourseTheme } from "@/lib/course-themes";
import { Handles, StudioHeroArt } from "@/components/course-skins/scenes/design-kit";
import { CanvaScene, PhotoshopScene } from "@/components/course-skins/scenes/design-grafico";
import { CapcutScene, DavinciScene, PremiereScene } from "@/components/course-skins/scenes/design-video";
import { CHECKER, CREAM, CYAN, SWATCHES, VIOLET, type AudienceProps, type ContentProps } from "@/components/course-skins/variants/design-tokens";
import { CanvaAudience, CanvaContent } from "@/components/course-skins/variants/design-canva";
import { PhotoshopAudience, PhotoshopContent } from "@/components/course-skins/variants/design-photoshop";
import { CapcutAudience, CapcutContent } from "@/components/course-skins/variants/design-capcut";
import { DavinciAudience, DavinciContent } from "@/components/course-skins/variants/design-davinci";
import { PremiereAudience, PremiereContent } from "@/components/course-skins/variants/design-premiere";

/**
 * Pele "Estúdio" (categoria Design & Criação): a página é um editor de mídia.
 *
 * O hero é da categoria (modo "design" com régua e prancheta; modo "vídeo" com
 * timecode e timeline). Já "Para quem é" e "Conteúdo programático" são próprios
 * de cada curso, com a metáfora da ferramenta dele (ver `variants/design-*.tsx`):
 * - canva: galeria de modelos + kit de marca / editor com páginas empilhadas;
 * - photoshop: painel de camadas com máscaras / pranchetas do Illustrator;
 * - capcut: stories 9:16 em sequência / edição no celular com trilhas;
 * - davinci: nós de cor com antes/depois / páginas do Resolve como navegação;
 * - premiere: bins do painel Projeto / timeline multitrilha.
 *
 * A parte comercial usa o bloco comum com acabamento limpo, sem metáfora.
 */

export const DESIGN_THEME: CourseTheme = { accent: "#DB2777", accentHover: "#BE185D", accent2: "#FBBF24", heroBg: "#16121a" };

type Modo = "design" | "video";

type Variante = {
  modo: Modo;
  Scene: (p: { theme: CourseTheme }) => ReactNode;
  formato: string;
  Audience: ComponentType<AudienceProps>;
  Content: ComponentType<ContentProps>;
};

const VARIANTES: Record<string, Variante> = {
  canva: { modo: "design", Scene: CanvaScene, formato: "1080 × 1080 px", Audience: CanvaAudience, Content: CanvaContent },
  photoshop: { modo: "design", Scene: PhotoshopScene, formato: "A3 · 300 dpi", Audience: PhotoshopAudience, Content: PhotoshopContent },
  capcut: { modo: "video", Scene: CapcutScene, formato: "9:16 · 1080p · 30 fps", Audience: CapcutAudience, Content: CapcutContent },
  davinci: { modo: "video", Scene: DavinciScene, formato: "4K DCI · 24 fps", Audience: DavinciAudience, Content: DavinciContent },
  premiere: { modo: "video", Scene: PremiereScene, formato: "4K UHD · 23,976 fps", Audience: PremiereAudience, Content: PremiereContent },
};

const DOTS_DARK: CSSProperties = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
  backgroundSize: "20px 20px",
};

/** Acabamento das seções comerciais: claro, limpo, sem piadas visuais. */
const LOOK: Look = {
  bgA: "bg-[#faf8f9] dark:bg-[#121014]",
  bgB: "bg-white dark:bg-[#18151b]",
  title: "text-[#1f1a24] dark:text-white",
  text: "text-[#4a4250] dark:text-white/80",
  muted: "text-[#766c7d] dark:text-white/50",
  card: "border border-[#ece6eb] bg-white dark:border-white/10 dark:bg-white/[0.04]",
  radius: "rounded-2xl",
  eyebrow: "text-xs font-bold uppercase tracking-[0.25em] text-(--accent)",
  h2: "text-3xl font-black tracking-tight sm:text-4xl",
  button: "rounded-full",
  cta: "bg-(--hero-bg) text-white",
  divider: "divide-[#ece6eb] dark:divide-white/10",
};

/** "Design Gráfico — Canva Pro" → ["Design Gráfico", "Canva Pro"]. */
function splitNome(nome: string): [string | null, string] {
  const i = nome.indexOf(" — ");
  return i === -1 ? [null, nome] : [nome.slice(0, i), nome.slice(i + 3)];
}

// ── Peças de interface ────────────────────────────────────────────────────────

function Cta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-(--accent) px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_14px_34px_-12px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-(--accent-hover)"
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

/** Régua de editor (topo do hero, modo design). */
function Ruler() {
  return (
    <div
      className="absolute inset-x-0 top-0 h-5 border-b border-white/10 bg-white/[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "100px 100%, 10px 35%",
        backgroundPosition: "0 0, 0 100%",
        backgroundRepeat: "repeat-x",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 24 }, (_, i) => (
        <span key={i} className="absolute top-0.5 font-mono text-[8px] text-white/35" style={{ left: i * 100 + 3 }}>
          {i * 100}
        </span>
      ))}
    </div>
  );
}

/** Faixa de paleta que fecha o hero (modo design). */
function PaletteBand() {
  const blocks: { bg?: string; flex: number; label: string; dark?: boolean; checker?: boolean }[] = [
    { bg: "var(--accent)", flex: 3, label: "#DB2777" },
    { bg: "var(--accent-2)", flex: 2, label: "#FBBF24", dark: true },
    { bg: VIOLET, flex: 1.6, label: "#8B7CF6" },
    { bg: CYAN, flex: 1.1, label: "#22D3EE", dark: true },
    { bg: CREAM, flex: 2.2, label: "#FFF4E8", dark: true },
    { flex: 1.4, label: "0%", dark: true, checker: true },
  ];
  return (
    <div className="relative flex h-9 sm:h-11" aria-hidden="true">
      {blocks.map((b) => (
        <div
          key={b.label}
          className={`flex items-end px-2 pb-1 font-mono text-[9px] font-bold sm:text-[10px] ${b.dark ? "text-black/55" : "text-white/80"}`}
          style={{ flex: b.flex, ...(b.checker ? CHECKER : { background: b.bg }) }}
        >
          <span className="hidden sm:inline">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Faixa de linha do tempo que fecha o hero (modo vídeo). */
function TimelineBand() {
  const clips = [
    { f: 2.2, c: VIOLET },
    { f: 1.2, c: "var(--accent)" },
    { f: 3, c: VIOLET },
    { f: 0.8, c: "var(--accent-2)" },
    { f: 2.4, c: CYAN },
    { f: 1.6, c: VIOLET },
    { f: 2.6, c: "var(--accent)" },
  ];
  return (
    <div className="relative bg-[#0e0c11]" aria-hidden="true">
      <div
        className="h-3 border-b border-white/10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 100%, 12px 45%",
          backgroundPosition: "0 0, 0 100%",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div className="flex h-7 gap-[3px] px-[3px] py-1 sm:h-8">
        {clips.map((c, i) => (
          <span key={i} className="rounded-[3px] opacity-90" style={{ flex: c.f, background: c.c }} />
        ))}
      </div>
      <span className="absolute -top-1 bottom-0 left-[38%] w-0.5 bg-white">
        <span className="absolute -left-[5px] top-0 h-2.5 w-3 rounded-sm bg-white" />
      </span>
    </div>
  );
}

// ── Pele ──────────────────────────────────────────────────────────────────────

export function DesignSkin({ course, tema, theme, logo, whatsappUrl, selectedTier, onSelectTier, faq }: SkinProps) {
  const variante = VARIANTES[course.variante ?? ""] ?? VARIANTES.canva;
  const video = variante.modo === "video";
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const [kicker, principal] = splitNome(course.nome);
  const { Scene, Audience, Content } = variante;

  return (
    <div className="bg-[#faf8f9] text-[#1f1a24] dark:bg-[#121014] dark:text-white">
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-(--hero-bg) text-white">
        <div className="pointer-events-none absolute inset-0" style={DOTS_DARK} />
        <div className="pointer-events-none absolute -right-40 -top-32 h-[560px] w-[560px] rounded-full bg-(--accent)/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full bg-(--accent-2)/10 blur-3xl" />
        {video ? (
          <div className="absolute inset-x-0 top-0 flex h-6 items-center gap-4 border-b border-white/10 bg-black/30 px-4 font-mono text-[10px] text-white/45 sm:px-6 lg:px-8">
            <span className="flex items-center gap-1.5 text-[#ff5a5f]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff5a5f]" /> REC
            </span>
            <span className="text-white/70">00:00:00:00</span>
            <span className="ml-auto hidden sm:inline">{variante.formato}</span>
          </div>
        ) : (
          <Ruler />
        )}

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-20 lg:pt-24">
          <div className="min-w-0">
            <Reveal>
              <div className="inline-flex max-w-full items-center gap-1 rounded-xl border border-white/10 bg-white/[0.06] p-1 backdrop-blur">
                {video ? (
                  <>
                    {[SkipBack, Play, SkipForward].map((Icon, i) => (
                      <span
                        key={i}
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${i === 1 ? "bg-(--accent) text-white" : "text-white/55"}`}
                      >
                        <Icon className={`h-3.5 w-3.5 ${i === 1 ? "fill-current" : ""}`} />
                      </span>
                    ))}
                  </>
                ) : (
                  <>
                    {[MousePointer2, Frame, PenTool, Type, Square, Circle, Hand].map((Icon, i) => (
                      <span
                        key={i}
                        className={`h-7 w-7 items-center justify-center rounded-lg ${i === 3 ? "bg-(--accent) text-white" : "text-white/55"} ${
                          i > 4 ? "hidden sm:flex" : "flex"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                    ))}
                  </>
                )}
                <span className="mx-1 h-5 w-px bg-white/15" />
                <span className="truncate px-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {course.categoria}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-8">
                {kicker && (
                  <span className="block font-serif text-2xl italic text-(--accent-2) sm:text-3xl">{kicker}</span>
                )}
                <span className="relative mt-3 inline-block">
                  <span className="block text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">{principal}</span>
                  {video ? (
                    <span className="pointer-events-none absolute -inset-x-3 -inset-y-3" aria-hidden="true">
                      <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-white/60" />
                      <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-white/60" />
                      <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-white/60" />
                      <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-white/60" />
                    </span>
                  ) : (
                    <span className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 border border-(--accent)" aria-hidden="true">
                      <Handles size={8} />
                    </span>
                  )}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p
                className={`mt-5 inline-flex rounded-md px-2 py-0.5 font-mono text-[11px] font-bold ${
                  video ? "bg-white/10 text-white/80" : "bg-(--accent) text-white"
                }`}
              >
                {video ? `Duração · ${meta?.aulas ?? tier.totalHours} de 1h` : `${meta?.aulas ?? tier.totalHours} × 1h`}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-base text-white/65 sm:text-lg">{course.tagline}</p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Cta href={whatsappUrl}>Quero saber mais</Cta>
                <a href="#conteudo" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/60 transition hover:text-white">
                  Ver o conteúdo <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap gap-2">
                {tier.tools.map((tool, i) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] py-1 pl-1.5 pr-3 text-[11px] font-semibold text-white/75"
                  >
                    {video ? (
                      <Film className="h-3 w-3 text-white/50" />
                    ) : (
                      <span className="h-3 w-3 rounded-full" style={{ background: SWATCHES[i % SWATCHES.length] }} />
                    )}
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <StudioHeroArt theme={theme} logo={logo}>
              <Scene theme={theme} />
            </StudioHeroArt>
          </Reveal>
        </div>

        {video ? <TimelineBand /> : <PaletteBand />}
      </section>

      {/* Blocos de identidade próprios de cada curso (variants/design-*.tsx) */}
      <Audience course={course} tema={tema} theme={theme} />
      <Content course={course} tema={tema} theme={theme} logo={logo} selectedTier={selectedTier} onSelectTier={onSelectTier} />

      <CommonSections
        lookKey="oficina"
        look={LOOK}
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
