/**
 * Shared course-page components.
 *
 * Use these to assemble any program-detail or course-detail page (JR, CREATE,
 * CAMPS, ACADEMIES). Each page becomes mostly DATA + glue: declare a
 * CourseTheme, fill the data arrays, render the sections in order.
 *
 * Conventions:
 * - Theme is passed as a single object (not N color props) — extend the
 *   CourseTheme type when adding new programs.
 * - Icons come from lucide-react; the caller passes the icon component itself.
 * - Sections are presentational + data-driven; no fetching, no state.
 */

import { Link } from "@tanstack/react-router";
import type { ComponentType, CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Users,
} from "lucide-react";
// Phosphor — usado em destaques visuais (pillars, badges, ícones de método).
// Weight "duotone" dá look premium em fundos claros.
import {
  GraduationCap as PhGraduationCap,
  UsersThree as PhUsersThree,
  HeartStraight as PhHeartStraight,
  ShieldCheck as PhShieldCheck,
} from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { getOptimizedUrl } from "@/components/img";
import { HoverWashCard } from "@/components/hover-wash-card";
import { TechHero } from "@/components/tech-hero";

// Pillars da MethodologySection — Phosphor duotone (look premium em bg claro)
const GraduationCapIcon = phosphor(PhGraduationCap, "duotone");
const UsersThreeIcon = phosphor(PhUsersThree, "duotone");
const HeartStraightIcon = phosphor(PhHeartStraight, "duotone");
const ShieldCheckIcon = phosphor(PhShieldCheck, "duotone");
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ──────────────────────────────────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────────────────────────────────

/** Palette of a single program (JR, CREATE, CAMPS, ACADEMIES). */
export type CourseTheme = {
  /** Main brand color (e.g. JR purple #512374). */
  primary: string;
  /** Darker variation, used in gradient ends. */
  dark: string;
  /** Soft / lighter variation, used for accents on dark backgrounds. */
  soft: string;
};

type LucideIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

/** One badge in a progression trail (selo, insígnia, marco, faixa, ...). */
export type ProgressionBadge = {
  name: string;
  icon: LucideIcon;
  /** Hex color for the badge background. */
  color: string;
  /** Short description (~60 chars). */
  desc: string;
};

/** Single lesson inside a module. */
export type Lesson = {
  n: number;
  title: string;
  goal: string;
};

/** A full module of a course. */
export type Module = {
  n: number;
  name: string;
  /** e.g. "Aulas 1 a 10". */
  classes: string;
  /** e.g. "10 semanas". */
  duration: string;
  /** e.g. "20h". */
  hours: string;
  /** What the student will learn (1 sentence). */
  objectives: string;
  /** Optional mini-project description. */
  project?: string;
  /** Tool name(s) used. */
  tool: string;
  /** Badge conquered at the end of this module. */
  badge: ProgressionBadge;
  /** Icon shown next to the tool name. */
  icon: LucideIcon;
  /** All lessons in this module (typically 8-12). */
  lessons: Lesson[];
};

/** A real tool used in the course (e.g. ScratchJr, Bee-Bot, MakeCode). */
export type Tool = {
  name: string;
  /** "Gratuito", "Hardware (escola)", "Assinatura (escola)", etc. */
  type: string;
  /** What the tool is used for. */
  role: string;
  icon: LucideIcon;
};

export type FaqItem = { q: string; a: string };

/** Single metric in the hero (e.g. "40 aulas"). */
export type Metric = { value: string; label: string };

// ──────────────────────────────────────────────────────────────────────────
// PRIMITIVES
// ──────────────────────────────────────────────────────────────────────────

function MetricCard({ value, label }: Metric) {
  return (
    <div className="text-center">
      <p className="text-4xl font-black text-white sm:text-5xl">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/75">{label}</p>
    </div>
  );
}

function BadgeChip({ badge, last }: { badge: ProgressionBadge; last?: boolean }) {
  const Icon = badge.icon;
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center text-center">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white shadow-lg"
          style={{ background: badge.color }}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
        <p className="mt-2 max-w-[110px] text-xs font-black uppercase tracking-wider text-white">
          {badge.name}
        </p>
        <p className="mt-0.5 max-w-[150px] text-[10px] leading-snug text-white/70">{badge.desc}</p>
      </div>
      {!last && <div className="hidden h-0.5 w-12 bg-white/30 sm:block" />}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// COURSE HERO
// ──────────────────────────────────────────────────────────────────────────

type CourseHeroProps = {
  theme: CourseTheme;
  /** Optional breadcrumb back to the program overview. */
  breadcrumb?: { href: string; label: string };
  /** Eyebrow chip text (e.g. "JR1 · 5 a 6 anos"). */
  eyebrow: string;
  /** H1 — pass plain text or JSX for line breaks with accent color. */
  title: ReactNode;
  /** 1-2 paragraphs of subtitle (already formatted with strong, etc). */
  subtitle: ReactNode;
  /** Primary CTA — usually WhatsApp link. */
  primaryCta: { href: string; label: string };
  /** Secondary CTA — usually scroll to #anchor. */
  secondaryCta?: { href: string; label: string };
  /** Nome da imagem (sem extensão) — resolvida via manifest otimizado. Ex: "capa-jr". */
  imageName: string;
  imageAlt: string;
  /** Unique id for the SVG clipPath (since multiple pages may share the page). */
  blobId: string;
  /** 4 metrics shown at the bottom of the hero. */
  metrics: Metric[];
  /** Composição decorativa do hero — define o "tema" dos elementos flutuantes. */
  decor?: "default" | "code" | "games" | "robot" | "ai" | "playful";
};

export function CourseHero({
  theme,
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageName,
  imageAlt,
  blobId,
  metrics,
  decor = "default",
}: CourseHeroProps) {
  // 800px é o tamanho exibido (440-520px CSS × 2x DPR ≈ 800). AVIF pra leveza.
  const image = getOptimizedUrl(imageName, 800, "avif");
  return (
    <TechHero primary={theme.primary} dark={theme.dark} soft={theme.soft} decor={decor}>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        {breadcrumb && (
          <Reveal>
            <Link
              to={breadcrumb.href}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white"
            >
              <ArrowRight className="h-3 w-3 rotate-180" /> {breadcrumb.label}
            </Link>
          </Reveal>
        )}

        <div className={`${breadcrumb ? "mt-6 " : ""}grid items-center gap-10 lg:grid-cols-2`}>
          <div>
            <Reveal delay={80}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-white"
                style={{ background: `${theme.soft}30`, border: `1px solid ${theme.soft}66` }}
              >
                {eyebrow}
              </span>
            </Reveal>

            <Reveal delay={160}>
              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-5 max-w-xl space-y-3 text-lg text-white/90 sm:text-xl">
                {subtitle}
              </div>
            </Reveal>

            <Reveal delay={360} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:scale-[1.03] glow-green"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white/10"
                >
                  {secondaryCta.label} <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={400} y={40} className="hidden lg:block">
            {/* Wrapper FIXO 440px — trava a altura da linha do grid (não cresce com a imagem) */}
            <div className="relative h-[440px]">
              {/* Imagem ABSOLUTA — pode crescer sem afetar layout do hero.
                  Centralizada no wrapper; transborda simetricamente. */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[440px] w-[440px] xl:h-[480px] xl:w-[480px] 2xl:h-[520px] 2xl:w-[520px]">
                <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden>
                  <defs>
                    <clipPath id={blobId}>
                      <path d="M421.7,328.8Q403,407.6,326.6,440.6Q250.2,473.5,176.6,432.6Q103,391.6,82,317.3Q61,243,109.3,179.2Q157.7,115.3,239,103.2Q320.4,91,375.1,150.5Q429.9,210,425.8,275Q421.7,340,421.7,328.8Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M421.7,328.8Q403,407.6,326.6,440.6Q250.2,473.5,176.6,432.6Q103,391.6,82,317.3Q61,243,109.3,179.2Q157.7,115.3,239,103.2Q320.4,91,375.1,150.5Q429.9,210,425.8,275Q421.7,340,421.7,328.8Z"
                    fill={theme.soft}
                    opacity="0.25"
                    transform="translate(20 20)"
                  />
                  <image
                    href={image}
                    x="0"
                    y="0"
                    width="600"
                    height="600"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#${blobId})`}
                  />
                  <title>{imageAlt}</title>
                </svg>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={520} className="mt-14 grid grid-cols-2 gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:grid-cols-4 sm:p-8">
          {metrics.map((m) => (
            <MetricCard key={m.label} value={m.value} label={m.label} />
          ))}
        </Reveal>
      </div>
    </TechHero>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PROGRESSION TRAIL (selos/insígnias/marcos/faixas)
// ──────────────────────────────────────────────────────────────────────────

type ProgressionTrailProps = {
  theme: CourseTheme;
  /** Section label (e.g. "Sistema de níveis"). */
  eyebrow: string;
  /** H2 (e.g. "Passaporte do Inventor"). Pass JSX for accent split. */
  title: ReactNode;
  /** Intro paragraph below H2. */
  description: ReactNode;
  badges: ProgressionBadge[];
};

export function ProgressionTrail({ theme, eyebrow, title, description, badges }: ProgressionTrailProps) {
  return (
    <section
      className="relative isolate overflow-hidden py-20 text-white"
      style={{ background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.dark} 100%)` }}
    >
      <div className="pointer-events-none absolute inset-0 dotted-bg opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: theme.soft }}>
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{description}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap items-start justify-center gap-4 sm:gap-2">
            {badges.map((badge, i) => (
              <BadgeChip key={badge.name} badge={badge} last={i === badges.length - 1} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// "PARA QUEM É" — perfil do aluno + checklist
// ──────────────────────────────────────────────────────────────────────────

type ParaQuemESectionProps = {
  theme: CourseTheme;
  title: ReactNode;
  description: ReactNode;
  /** Checklist label (e.g. "É ideal se seu filho"). */
  checklistTitle: string;
  /** Items in the checklist. */
  items: string[];
  /** Wrapper background; default white. Pass 'bg-muted/40' to alternate. */
  bg?: "white" | "muted";
};

export function ParaQuemESection({
  theme,
  title,
  description,
  checklistTitle,
  items,
  bg = "white",
}: ParaQuemESectionProps) {
  return (
    <section className={`py-20 ${bg === "muted" ? "bg-muted/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
              Para quem é
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{description}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border-2 bg-white p-7" style={{ borderColor: theme.soft }}>
              <p className="text-xs font-black uppercase tracking-wider" style={{ color: theme.primary }}>
                {checklistTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: theme.primary }} />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// "COMO FUNCIONA" — formato do curso
// ──────────────────────────────────────────────────────────────────────────

type FormatItem = { icon: LucideIcon; title: string; desc: string };

type FormatSectionProps = {
  theme: CourseTheme;
  /** Optional override of the 3 default cards. Default = ano/horas/turma. */
  items?: FormatItem[];
  /** Optional footnote below the 3 cards. */
  footnote?: ReactNode;
};

const DEFAULT_FORMAT_ITEMS: FormatItem[] = [
  {
    icon: Calendar,
    title: "1 ano letivo",
    desc: "40 semanas, divididas em 4 módulos com conquista no fim de cada um.",
  },
  {
    icon: Clock,
    title: "2 horas por semana",
    desc: "1 aula de 2h ou 2 aulas de 1h em dias diferentes — conteúdo é o mesmo, dividido em Parte A + Parte B.",
  },
  {
    icon: Users,
    title: "Turmas pequenas",
    desc: "Atenção individual. Professores treinados pra acompanhar o ritmo de cada aluno.",
  },
];

export function FormatSection({ theme, items = DEFAULT_FORMAT_ITEMS, footnote }: FormatSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
            Formato
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Como funciona o curso
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div
                className="rounded-xl border-2 bg-white p-7"
                style={{
                  borderColor: `${theme.soft}66`,
                  boxShadow: `0 8px 24px -8px ${theme.primary}26`,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-md"
                  style={{ background: `${theme.soft}40`, color: theme.primary }}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {footnote && (
          <Reveal delay={400}>
            <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm" style={{ borderColor: theme.soft }}>
              <p className="text-sm">{footnote}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// MODULE GRID (4 cards de módulo)
// ──────────────────────────────────────────────────────────────────────────

type ModuleGridProps = {
  theme: CourseTheme;
  /** Label e.g. "Currículo". */
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  modules: Module[];
  /** Term used for the badge ("Selo", "Insígnia", "Marco", "Faixa"). */
  badgeLabel?: string;
  /** Optional id for anchor links from hero. */
  id?: string;
};

function ModuleCard({ mod, theme, badgeLabel = "Conquista" }: { mod: Module; theme: CourseTheme; badgeLabel: string }) {
  const Badge = mod.badge.icon;
  const ModIcon = mod.icon;
  return (
    <HoverWashCard accent={theme.primary} bubbleSize="sm">
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
            Módulo {mod.n}
          </span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
            {mod.classes}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-black tracking-tight" style={{ color: theme.primary }}>
          {mod.name}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {mod.duration} · {mod.hours}
        </div>
        <p className="mt-4 text-sm text-foreground/85">{mod.objectives}</p>

        <div className="mt-5 flex items-start gap-3 rounded-xl p-3" style={{ background: `${theme.soft}30` }}>
          <ModIcon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: theme.primary }} />
          <div className="text-sm">
            <p className="font-bold" style={{ color: theme.primary }}>{mod.tool}</p>
          </div>
        </div>

        {mod.project && (
          <div
            className="mt-3 rounded-lg border bg-white p-3 text-sm"
            style={{ borderColor: mod.badge.color + "40" }}
          >
            <p className="text-[11px] font-black uppercase tracking-wider text-[#075b45]">Mini-projeto</p>
            <p className="mt-0.5 text-[#0a6e54]">{mod.project}</p>
          </div>
        )}

        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white shadow"
            style={{ background: mod.badge.color }}
          >
            <Badge className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {badgeLabel}
            </p>
            <p className="text-sm font-black" style={{ color: theme.primary }}>
              {mod.badge.name}
            </p>
          </div>
        </div>
      </div>
    </HoverWashCard>
  );
}

export function ModuleGrid({
  theme,
  eyebrow,
  title,
  description,
  modules,
  badgeLabel,
  id,
}: ModuleGridProps) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground">{description}</p>
          )}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {modules.map((mod, i) => (
            <Reveal key={mod.n} delay={i * 100}>
              <ModuleCard mod={mod} theme={theme} badgeLabel={badgeLabel ?? "Conquista"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// LESSON ACCORDION (ementa aula a aula)
// ──────────────────────────────────────────────────────────────────────────

type LessonAccordionProps = {
  theme: CourseTheme;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  modules: Module[];
  /** Term for badge label inside accordion ("Selo", "Insígnia", etc). */
  badgeWord?: string;
  /** Wrapper bg; default 'muted' (alternates from previous section). */
  bg?: "white" | "muted";
};

export function LessonAccordion({
  theme,
  eyebrow = "Ementa completa",
  title = "As 40 aulas do ano, uma por uma",
  description = "Transparência total. Clica num módulo pra abrir.",
  modules,
  badgeWord = "Conquista",
  bg = "muted",
}: LessonAccordionProps) {
  return (
    <section className={`py-20 ${bg === "muted" ? "bg-muted/40" : ""}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <Accordion type="multiple" className="space-y-4">
            {modules.map((mod) => {
              const BadgeIcon = mod.badge.icon;
              return (
                <AccordionItem
                  key={mod.n}
                  value={`mod-${mod.n}`}
                  className="overflow-hidden rounded-xl border-2 bg-white"
                  style={{
                    borderColor: `${theme.soft}66`,
                    boxShadow: `0 6px 20px -8px ${theme.primary}1f`,
                  }}
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white shadow"
                        style={{ background: mod.badge.color }}
                      >
                        <BadgeIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider" style={{ color: theme.primary }}>
                          Módulo {mod.n} · {mod.classes}
                        </p>
                        <p className="mt-0.5 text-lg font-black">{mod.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {mod.duration} · {mod.hours} · {badgeWord} {mod.badge.name}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    {mod.project && (
                      <div
                        className="mb-4 rounded-lg border bg-white p-4 text-sm"
                        style={{ borderColor: theme.soft }}
                      >
                        <p className="text-[11px] font-black uppercase tracking-wider" style={{ color: theme.primary }}>
                          Mini-projeto
                        </p>
                        <p className="mt-1 text-foreground/85">{mod.project}</p>
                      </div>
                    )}
                    <ol className="space-y-3">
                      {mod.lessons.map((lesson) => (
                        <li
                          key={lesson.n}
                          className="flex gap-4 rounded-xl border border-border bg-muted/30 p-4"
                        >
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white"
                            style={{ background: theme.primary }}
                          >
                            {lesson.n}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">
                              Aula {lesson.n} — {lesson.title}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">{lesson.goal}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// BRIDGE BANNER (ponte verde→azul, usada quando o curso conecta a outro)
// ──────────────────────────────────────────────────────────────────────────

type BridgeBannerProps = {
  title: string;
  /** Gradient start color. */
  from?: string;
  /** Gradient end color. */
  to?: string;
  children: ReactNode;
};

export function BridgeBanner({ title, from = "#0DB88F", to = "#187ABF", children }: BridgeBannerProps) {
  return (
    <Reveal>
      <div
        className="flex flex-wrap items-center gap-6 rounded-3xl p-8 text-white shadow-lg sm:p-10"
        style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      >
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-2xl font-black"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          <ArrowRight className="h-7 w-7" />
        </div>
        <div className="flex-1 min-w-[280px]">
          <h3 className="text-xl font-black">{title}</h3>
          <p className="mt-1.5 text-sm text-white/90 sm:text-base">{children}</p>
        </div>
      </div>
    </Reveal>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// TOOL GRID
// ──────────────────────────────────────────────────────────────────────────

type ToolGridProps = {
  theme: CourseTheme;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  tools: Tool[];
  /** Wrapper bg. */
  bg?: "white" | "muted";
};

export function ToolGrid({
  theme,
  eyebrow = "Ferramentas",
  title = "Tecnologia de mercado, nada inventado",
  description,
  tools,
  bg = "white",
}: ToolGridProps) {
  const cols = tools.length >= 4 ? "lg:grid-cols-4" : tools.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section className={`py-20 ${bg === "muted" ? "bg-muted/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
          )}
        </Reveal>

        <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${cols}`}>
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 100}>
              <div
                className="h-full rounded-xl border-2 bg-card p-6 transition hover:-translate-y-1"
                style={{
                  borderColor: `${theme.soft}66`,
                  boxShadow: `0 8px 24px -8px ${theme.primary}26`,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-md"
                  style={{ background: `${theme.soft}40`, color: theme.primary }}
                >
                  <tool.icon className="h-6 w-6" />
                </div>
                <p
                  className="mt-4 text-[10px] font-black uppercase tracking-wider"
                  style={{ color: theme.primary }}
                >
                  {tool.type}
                </p>
                <h3 className="mt-1 text-lg font-bold">{tool.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tool.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// METHODOLOGY SECTION (4 pilares Santos Tech — mesmo em todos os cursos)
// ──────────────────────────────────────────────────────────────────────────

type MethodologyPillar = { icon: LucideIcon; t: string; d: string };

type MethodologySectionProps = {
  theme: CourseTheme;
  /** Override the 4 default pillars if needed. */
  pillars?: MethodologyPillar[];
  bg?: "white" | "muted";
};

const DEFAULT_PILLARS: MethodologyPillar[] = [
  { icon: GraduationCapIcon, t: "Professores treinados", d: "Equipe formada pra ensinar criança e jovem com método e paciência." },
  { icon: UsersThreeIcon, t: "Turmas pequenas", d: "Atenção individual. Cada aluno tem seu ritmo respeitado." },
  { icon: HeartStraightIcon, t: "Ambiente acolhedor", d: "Espaço pensado pro aluno — seguro, organizado, sem cara de aula tradicional." },
  { icon: ShieldCheckIcon, t: "Acesso controlado", d: "Só alunos e equipe entram. Área de espera pros pais com visibilidade." },
];

export function MethodologySection({
  theme,
  pillars = DEFAULT_PILLARS,
  bg = "muted",
}: MethodologySectionProps) {
  return (
    <section className={`py-20 ${bg === "muted" ? "bg-muted/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
            Metodologia Santos Tech
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Por que o método funciona
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}>
              <div
                className="h-full rounded-xl border-2 bg-white p-7"
                style={{
                  borderColor: `${theme.soft}66`,
                  boxShadow: `0 8px 24px -8px ${theme.primary}26`,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-md"
                  style={{ background: `${theme.soft}40`, color: theme.primary }}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// FAQ SECTION
// ──────────────────────────────────────────────────────────────────────────

type FaqSectionProps = {
  theme: CourseTheme;
  items: FaqItem[];
};

export function FaqSection({ theme, items }: FaqSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: theme.primary }}>
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Perguntas que pais costumam fazer
          </h2>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border-2 bg-white px-2"
                style={{
                  borderColor: `${theme.soft}66`,
                  boxShadow: `0 6px 18px -8px ${theme.primary}1f`,
                }}
              >
                <AccordionTrigger className="px-4 py-5 text-left text-base font-bold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// COURSE CTA FINAL (cartão na cor do programa)
// ──────────────────────────────────────────────────────────────────────────

type CourseCtaFinalProps = {
  theme: CourseTheme;
  title: string;
  description: ReactNode;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function CourseCtaFinal({
  theme,
  title,
  description,
  primaryCta,
  secondaryCta,
}: CourseCtaFinalProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-xl sm:px-16"
            style={{ background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.dark} 100%)` }}
          >
            <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/90">{description}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {primaryCta.label}
                </a>
                {secondaryCta && (
                  <Link
                    to={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    {secondaryCta.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
