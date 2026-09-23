import type { ComponentType, ReactNode } from "react";
import { ArrowDown, Megaphone, MousePointer2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CourseHeroArt } from "@/components/course-hero-art";
import { CommonSections, type Look } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { MarketingScene } from "@/components/course-skins/scenes/marketing";
import type { CourseTheme } from "@/lib/course-themes";
import { ToolLogo } from "@/components/tool-logo";
import { tierMeta, type SkinProps } from "@/components/course-skins/shared";
import type { MktBlockProps } from "@/components/course-skins/variants/marketing-kit";
import { CARD, DOT_VARS, INK, PAPER, SOFT } from "@/components/course-skins/variants/marketing-tokens";
import { MarketingPublico, MarketingConteudo } from "@/components/course-skins/variants/marketing-marketing";
import { MetaAdsPublico, MetaAdsConteudo } from "@/components/course-skins/variants/marketing-meta-ads";
import { GoogleAdsPublico, GoogleAdsConteudo } from "@/components/course-skins/variants/marketing-google-ads";
import { TiktokAdsPublico, TiktokAdsConteudo } from "@/components/course-skins/variants/marketing-tiktok-ads";
import { CopywritingPublico, CopywritingConteudo } from "@/components/course-skins/variants/marketing-copywriting";
import { FunilVendasPublico, FunilVendasConteudo } from "@/components/course-skins/variants/marketing-funil-vendas";
import { SeoPublico, SeoConteudo } from "@/components/course-skins/variants/marketing-seo";
import { RedesSociaisPublico, RedesSociaisConteudo } from "@/components/course-skins/variants/marketing-redes-sociais";
import { EcommercePublico, EcommerceConteudo } from "@/components/course-skins/variants/marketing-ecommerce";

/**
 * Pele "Painel de campanha" (categoria Marketing & Negócios): a página se
 * comporta como um gerenciador de anúncios. O hero é a campanha; "Para quem é"
 * e "Conteúdo programático" são blocos próprios de cada curso, cada um com a
 * metáfora do seu canal (variants/marketing-<variante>.tsx): quadro de CRM,
 * construtor de públicos, palavras-chave, vídeos verticais, rascunho em
 * revisão, ranking orgânico, grade de perfil, catálogo e quadro de briefing.
 * A parte comercial usa o bloco comum, com acabamento limpo e cantos suaves.
 */

export const MARKETING_THEME: CourseTheme = { accent: "#E5484D", accentHover: "#cc3a3f", accent2: "#FFC53D", heroBg: "#170c10" };

// ── Variações por curso ─────────────────────────────────────────────────────

const VARIANTES: Record<string, { painel: string; canal: string }> = {
  marketing: { painel: "Visão geral de canais", canal: "Multicanal" },
  "meta-ads": { painel: "Anúncio no feed", canal: "Social pago" },
  "google-ads": { painel: "Rede de pesquisa", canal: "Busca paga" },
  "tiktok-ads": { painel: "Anúncio em vídeo curto", canal: "Vídeo vertical" },
  copywriting: { painel: "Revisão de texto", canal: "Texto persuasivo" },
  "funil-vendas": { painel: "Pipeline de vendas", canal: "Funil + CRM" },
  seo: { painel: "Ranqueamento orgânico", canal: "Busca orgânica" },
  "redes-sociais": { painel: "Calendário editorial", canal: "Social orgânico" },
  ecommerce: { painel: "Vitrine e carrinho", canal: "Loja virtual" },
};

// ── Ícones próprios (genéricos) para cursos sem logo oficial em assets ──────

const ICON_GLYPHS: Record<string, { glyph: ReactNode; ad?: boolean }> = {
  marketing: {
    glyph: (
      <>
        <path d="M5 10.2 L13.5 6.5 V17.5 L5 13.8 Z" fill="#fff" />
        <rect x="3.4" y="10" width="2.4" height="4" rx="0.8" fill="#fff" />
        <path d="M7 14.3 L8.2 18.2 H10 L9.2 14.9" fill="#fff" />
        <path d="M16 9.5 q1.6 2.5 0 5 M18 8 q2.6 4 0 8" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
  },
  "meta-ads": {
    ad: true,
    glyph: (
      <>
        <path d="M5 6.5 h12 a2 2 0 0 1 2 2 v6.5 a2 2 0 0 1 -2 2 h-7 l-3.2 2.6 v-2.6 h-1.8 a2 2 0 0 1 -2 -2 v-6.5 a2 2 0 0 1 2 -2 z" fill="#fff" />
        <path d="M11 14.2 l-2.5 -2.4 a1.5 1.5 0 0 1 2.5 -1.7 a1.5 1.5 0 0 1 2.5 1.7 z" fill="currentColor" />
      </>
    ),
  },
  "google-ads": {
    ad: true,
    glyph: (
      <>
        <circle cx="10.5" cy="10.5" r="4.6" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M14 14 L18.5 18.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </>
    ),
  },
  "tiktok-ads": {
    ad: true,
    glyph: (
      <>
        <rect x="7" y="4" width="10" height="16" rx="2.2" fill="#fff" />
        <path d="M10.6 9.4 L14.4 12 L10.6 14.6 Z" fill="currentColor" />
      </>
    ),
  },
  "funil-vendas": {
    glyph: <path d="M4.5 5.5 H19.5 L14 12.5 V18.5 L10 16.8 V12.5 Z" fill="#fff" />,
  },
  seo: {
    glyph: (
      <>
        <circle cx="10.5" cy="10.5" r="5.2" fill="none" stroke="#fff" strokeWidth="1.9" />
        <path d="M14.3 14.3 L18.8 18.8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M8 12.2 L10 10.2 L11.3 11.4 L13.2 9" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  "redes-sociais": {
    glyph: (
      <>
        <rect x="4.5" y="6" width="15" height="13" rx="2.2" fill="#fff" />
        <rect x="7.5" y="4" width="1.8" height="4" rx="0.9" fill="#fff" />
        <rect x="14.7" y="4" width="1.8" height="4" rx="0.9" fill="#fff" />
        <path d="M12 16.4 l-2.6 -2.5 a1.6 1.6 0 0 1 2.6 -1.9 a1.6 1.6 0 0 1 2.6 1.9 z" fill="currentColor" />
      </>
    ),
  },
  ecommerce: {
    glyph: (
      <>
        <path d="M6 8.5 H18 L17 19 H7 Z" fill="#fff" />
        <path d="M9.3 10.5 V7.5 a2.7 2.7 0 0 1 5.4 0 V10.5" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
};

/** Logo do curso: arquivo oficial quando existe, senão um ícone genérico desenhado aqui. */
function CourseMark({ logo, className = "h-10 w-10" }: { logo: string; className?: string }) {
  const icon = ICON_GLYPHS[logo];
  if (!icon) return <ToolLogo name={logo} className={className} />;
  return (
    <svg viewBox="0 0 24 24" className={`text-(--accent) ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`mkt-mark-${logo}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="color-mix(in srgb, var(--accent) 70%, #7a0b2a)" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#mkt-mark-${logo})`} />
      {icon.glyph}
      {icon.ad && (
        <g>
          <rect x="14.2" y="1.6" width="8.4" height="5.2" rx="1.4" fill="var(--accent-2)" />
          <text x="18.4" y="5.5" textAnchor="middle" fontSize="3.9" fontWeight="900" fill="#1b1216" fontFamily="inherit">
            AD
          </text>
        </g>
      )}
    </svg>
  );
}

/** Moldura padrão do hero com o selo próprio da categoria. */
function HeroArt({ theme, logo, children }: { theme: CourseTheme; logo: string; children: ReactNode }) {
  return (
    <CourseHeroArt
      theme={theme}
      logo={logo}
      badgePosition="-right-1 -top-3"
      badge={<CourseMark logo={logo} className="h-10 w-10 sm:h-12 sm:w-12" />}
    >
      {children}
    </CourseHeroArt>
  );
}

function CtaButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-(--accent) px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_14px_30px_-12px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-(--accent-hover)"
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
      <MousePointer2 className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 fill-white text-[#1b1216] drop-shadow" />
    </a>
  );
}

// ── Blocos por curso ────────────────────────────────────────────────────────

type Blocos = { Publico: ComponentType<MktBlockProps>; Conteudo: ComponentType<MktBlockProps> };

const BLOCOS: Record<string, Blocos> = {
  marketing: { Publico: MarketingPublico, Conteudo: MarketingConteudo },
  "meta-ads": { Publico: MetaAdsPublico, Conteudo: MetaAdsConteudo },
  "google-ads": { Publico: GoogleAdsPublico, Conteudo: GoogleAdsConteudo },
  "tiktok-ads": { Publico: TiktokAdsPublico, Conteudo: TiktokAdsConteudo },
  copywriting: { Publico: CopywritingPublico, Conteudo: CopywritingConteudo },
  "funil-vendas": { Publico: FunilVendasPublico, Conteudo: FunilVendasConteudo },
  seo: { Publico: SeoPublico, Conteudo: SeoConteudo },
  "redes-sociais": { Publico: RedesSociaisPublico, Conteudo: RedesSociaisConteudo },
  ecommerce: { Publico: EcommercePublico, Conteudo: EcommerceConteudo },
};

// ── Pele ────────────────────────────────────────────────────────────────────

const LOOK: Look = {
  bgA: "bg-white dark:bg-[#100a0c]",
  bgB: `${PAPER}`,
  title: INK,
  text: "text-[#3f2c31] dark:text-white/80",
  muted: SOFT,
  card: `${CARD} shadow-[0_1px_2px_rgba(80,20,30,0.04)]`,
  radius: "rounded-2xl",
  eyebrow: "text-xs font-bold uppercase tracking-[0.22em] text-(--accent)",
  h2: "text-3xl font-black tracking-tight sm:text-4xl",
  button: "rounded-xl",
  cta: "bg-(--hero-bg) text-white dark:border dark:border-white/10",
  divider: "divide-[#f0dedb] dark:divide-white/10",
};

export function MarketingSkin({ course, tema, theme, logo, whatsappUrl, selectedTier, onSelectTier, faq }: SkinProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const multiTier = course.tiers.length > 1;
  const v = VARIANTES[course.variante ?? ""] ?? VARIANTES.marketing;
  const n = tier.modules.length;
  const blocos = BLOCOS[course.variante ?? ""] ?? BLOCOS.marketing;
  const blocoProps: MktBlockProps = { course, tier, tema, theme, whatsappUrl, selectedTier, onSelectTier };

  const irParaConteudo = () => document.getElementById("conteudo-programatico")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className={`${DOT_VARS} bg-white dark:bg-[#100a0c]`}>
      {/* ── HERO: a campanha ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-(--hero-bg) text-white">
        {/* Gráfico de alcance subindo ao fundo */}
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          {[120, 240, 360, 480].map((y) => (
            <line key={y} x1="0" x2="1440" y1={y} y2={y} stroke="#fff" strokeOpacity="0.04" />
          ))}
          <path
            d="M0 560 C180 540 260 500 400 505 C560 510 620 420 780 400 C930 380 1000 300 1140 260 C1260 225 1340 150 1440 110 L1440 600 L0 600 Z"
            fill="var(--accent)"
            fillOpacity="0.09"
          />
          <path
            d="M0 560 C180 540 260 500 400 505 C560 510 620 420 780 400 C930 380 1000 300 1140 260 C1260 225 1340 150 1440 110"
            fill="none"
            stroke="var(--accent)"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        </svg>
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-(--accent)/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[380px] w-[380px] rounded-full bg-(--accent-2)/10 blur-3xl" />

        {/* Barra do gerenciador */}
        <div className="relative flex h-11 items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 text-xs sm:px-6 lg:px-8">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
            <CourseMark logo={logo} className="h-4 w-4" />
          </span>
          <span className="truncate font-bold text-white/85">Gerenciador de campanhas</span>
          <span className="hidden text-white/25 sm:inline">/</span>
          <span className="hidden truncate text-white/55 sm:inline">{v.painel}</span>
          <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/12 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Ativa
          </span>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-16 lg:pt-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                <Megaphone className="h-3.5 w-3.5 text-(--accent-2)" />
                Campanha · {course.categoria}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">{course.nome}</h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-xl text-base text-white/65 sm:text-lg">{course.tagline}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaButton href={whatsappUrl}>Quero saber mais</CtaButton>
                <button
                  type="button"
                  onClick={irParaConteudo}
                  className="inline-flex items-center gap-1.5 rounded-xl px-3 py-3 text-sm font-bold text-white/70 transition hover:text-white"
                >
                  Ver as etapas do curso <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <HeroArt theme={theme} logo={logo}>
              <MarketingScene theme={theme} variante={course.variante} />
            </HeroArt>
          </Reveal>
        </div>

        {/* Colunas do painel = fatos do curso (sem métricas inventadas) */}
        <div className="relative border-t border-white/10">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["Canal", v.canal],
              ["Formato", "Aula individual"],
              ["Carga", meta?.aulas ?? tier.totalHours],
              ["Etapas", `${n} módulos`],
              [multiTier ? "Níveis" : "Plano", multiTier ? `${course.tiers.length} níveis` : tier.levelName],
            ].map(([k, val], i) => (
              <div key={k} className={`bg-(--hero-bg) px-4 py-3 sm:px-6 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
                <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">{k}</dt>
                <dd className="mt-0.5 truncate text-sm font-bold text-white">{val}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── PARA QUEM É e CONTEÚDO: blocos próprios de cada curso ───────── */}
      <blocos.Publico {...blocoProps} />
      <blocos.Conteudo {...blocoProps} />

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
