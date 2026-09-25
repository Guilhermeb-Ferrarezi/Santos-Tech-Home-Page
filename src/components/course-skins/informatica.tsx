import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Keyboard,
  LayoutGrid,
  MapPin,
  MousePointerClick,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import { Reveal, RevealHero } from "@/components/reveal";
import { CommonSections, type Look } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { CourseHeroArt } from "@/components/course-hero-art";
import { PersonAtDesk } from "@/components/course-illustrations";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import {
  CursorArrow,
  DesktopScene,
  FileIcon,
  FolderIcon,
  MiniDesktop,
  StartGlyph,
  WinTitleBar,
} from "@/components/course-skins/scenes/informatica";
import type { CourseTheme } from "@/lib/course-themes";
import { TIER_GUIDE, tierMeta, type SkinProps } from "@/components/course-skins/shared";

/**
 * Pele "Área de trabalho" (categoria Informática). O público costuma ser
 * iniciante e muitas vezes mais velho, então tudo aqui prioriza leitura: fonte
 * maior, alto contraste e alvos de clique grandes.
 *
 * - Hero: a própria tela do computador, com papel de parede, atalhos na área de
 *   trabalho (que levam às seções), a janela de boas-vindas e a barra de tarefas.
 * - Para quem é: bilhetes autoadesivos colados num monitor; dá pra marcar os
 *   que têm a ver com você.
 * - Conteúdo: cada módulo é uma pasta; clicar abre a janela com os tópicos.
 * - O resto (planos, FAQ…) usa o bloco comum com acabamento sóbrio.
 */

export const INFORMATICA_THEME: CourseTheme = {
  accent: "#0F6CD4",
  accentHover: "#0b59b3",
  accent2: "#FFC83D",
  heroBg: "#0a1830",
};

/**
 * No modo escuro o azul fica um pouco mais claro pra manter contraste, e
 * `--accent-ink` é a versão pra texto sobre fundo escuro.
 */
const VARS = "[--accent-ink:var(--accent)] dark:[--accent:#2F86EB] dark:[--accent-hover:#1f74d6] dark:[--accent-ink:#8cc4ff]";

const WALLPAPER =
  "bg-[linear-gradient(160deg,#e9f2fe_0%,#cfe2fb_50%,#b4d2f6_100%)] dark:bg-[linear-gradient(160deg,#0b1a33_0%,#10294f_55%,#0b1a33_100%)]";

const LOOK: Look = {
  bgA: "bg-white dark:bg-[#0b1322]",
  bgB: "bg-[#f4f7fb] dark:bg-[#0e192b]",
  title: "text-slate-900 dark:text-white",
  text: "text-slate-700 dark:text-slate-200",
  muted: "text-slate-600 dark:text-slate-400",
  card: "border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none",
  radius: "rounded-xl",
  eyebrow: "text-sm font-bold uppercase tracking-[0.18em] text-(--accent-ink)",
  h2: "text-3xl font-black tracking-tight sm:text-4xl",
  button: "rounded-lg",
  cta: "bg-(--accent) text-white",
  divider: "divide-slate-200 dark:divide-white/10",
  // Público iniciante/mais velho: texto de apoio maior e destaque com contraste reforçado.
  small: "text-sm",
  accentText: "text-(--accent-ink)",
  invertCta: true,
};

/** Bilhetes: cor do papel e leve inclinação (só a partir do tablet). */
const NOTAS = [
  { bg: "#FFF1A6", tape: -3, r: -1.5 },
  { bg: "#CFF3D6", tape: 2, r: 1 },
  { bg: "#FFD9E2", tape: -1, r: -0.5 },
  { bg: "#D6E8FF", tape: 3, r: 1.5 },
  { bg: "#FFE2BF", tape: -2, r: -1 },
  { bg: "#E7DDFF", tape: 1, r: 0.5 },
];

/** Ícones próprios pras ferramentas que não têm logo no repositório. */
const FALLBACK_ICONS: { test: RegExp; Icon: typeof Globe; bg: string }[] = [
  { test: /chrome|navegador/i, Icon: Globe, bg: "#1A73E8" },
  { test: /typing|digita/i, Icon: Keyboard, bg: "#475569" },
  { test: /zapier/i, Icon: Zap, bg: "#FF4F00" },
  { test: /workspace/i, Icon: LayoutGrid, bg: "#1E8E3E" },
];

function ToolIcon({ tool, className = "h-8 w-8" }: { tool: string; className?: string }) {
  const key = logoKey(tool);
  if (key !== "ia") return <ToolLogo name={key} className={className} />;
  const fb = FALLBACK_ICONS.find((f) => f.test.test(tool));
  const Icon = fb?.Icon ?? Sparkles;
  return (
    <span className={`flex items-center justify-center rounded-lg text-white ${className}`} style={{ background: fb?.bg ?? "#6D28D9" }}>
      <Icon className="h-[60%] w-[60%]" />
    </span>
  );
}

function WppButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-(--accent) px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_24px_-10px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-(--accent-hover) focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-(--accent)/40 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

function SectionHeading({ icon, eyebrow, title, hint }: { icon: ReactNode; eyebrow: string; title: string; hint?: ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-(--accent-ink)">
        {icon}
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {hint && <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-slate-300">{hint}</p>}
    </Reveal>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Atalho da área de trabalho: ícone grande + rótulo. */
function Shortcut({ label, icon, onClick, href }: { label: string; icon: ReactNode; onClick?: () => void; href?: string }) {
  const cls =
    "group flex w-28 flex-col items-center gap-1.5 rounded-xl p-2 text-center transition hover:bg-white/50 focus-visible:bg-white/60 focus-visible:outline-none dark:hover:bg-white/10 dark:focus-visible:bg-white/10";
  const inner = (
    <>
      <span className="flex h-14 w-14 items-center justify-center transition group-hover:-translate-y-0.5">{icon}</span>
      <span className="text-sm font-semibold leading-tight text-slate-800 dark:text-white">{label}</span>
    </>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

function StickyIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
      <path d="M8 6h32a2 2 0 0 1 2 2v24L32 42H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" fill="#FFE27A" />
      <path d="M32 42V34a2 2 0 0 1 2-2h8Z" fill="#E6C24F" />
      <path d="M13 16h20M13 22h22M13 28h14" stroke="#8a6d10" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Pele ───────────────────────────────────────────────────────────────────────

export function InformaticaSkin(props: SkinProps) {
  const { course, theme, logo, whatsappUrl, selectedTier, onSelectTier } = props;
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const multiTier = course.tiers.length > 1;

  // Programas fixados na barra de tarefas do hero: só os que têm logo própria.
  const pinned = [...new Set(tier.tools.map(logoKey))].filter((k) => k !== "ia" && k !== "pc").slice(0, 6);

  return (
    <div className={`sb-bleed ${VARS} bg-white text-slate-900 dark:bg-[#0b1322] dark:text-white`}>
      {/* ── HERO: a tela do computador ─────────────────────────────────────── */}
      <section className={`sb-bleed relative isolate overflow-hidden ${WALLPAPER}`}>
        {/* Ondas do papel de parede */}
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
          aria-hidden="true"
        >
          <path d="M0 420 C 320 300, 620 520, 980 380 S 1440 300, 1440 300 V600 H0Z" className="fill-white/30 dark:fill-white/[0.035]" />
          <path d="M0 500 C 380 420, 760 600, 1440 430 V600 H0Z" className="fill-(--accent)/10 dark:fill-(--accent)/15" />
          <circle cx="1240" cy="90" r="220" className="fill-white/20 dark:fill-white/[0.03]" />
        </svg>

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[120px_minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:pb-16 lg:pt-12">
          {/* Atalhos da área de trabalho: levam às seções da página */}
          <RevealHero className="flex justify-center gap-2 sm:gap-6 lg:flex-col lg:justify-start lg:gap-5 lg:self-start">
            <Shortcut label="Para quem é" icon={<StickyIcon />} onClick={() => scrollToId("info-para-quem")} />
            <Shortcut label="Conteúdo" icon={<FolderIcon className="h-12 w-14" />} onClick={() => scrollToId("info-conteudo")} />
            <Shortcut
              label="WhatsApp"
              href={whatsappUrl}
              icon={
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-sm">
                  <WhatsAppIcon className="h-7 w-7" />
                </span>
              }
            />
          </RevealHero>

          {/* Janela de boas-vindas */}
          <RevealHero delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-[0_40px_80px_-32px_rgba(15,40,80,0.55)] dark:border-white/10 dark:bg-[#0f1b31] dark:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.8)]">
              <WinTitleBar
                icon={<ToolLogo name={logo} className="h-4 w-4 shrink-0" />}
                title="Boas-vindas"
                className="px-4 py-2.5 text-sm font-semibold"
              />
              <div className="p-6 sm:p-9">
                <p className="inline-flex items-center gap-2 rounded-full bg-(--accent)/10 px-3.5 py-1.5 text-sm font-bold text-(--accent-ink) dark:bg-white/10">
                  Aula particular · {course.categoria}
                </p>
                <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl dark:text-white">
                  {course.nome}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl dark:text-slate-200">{course.tagline}</p>
                <div className="mt-8">
                  <WppButton href={whatsappUrl}>Quero saber mais</WppButton>
                </div>
                <ul className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-base text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-6 dark:border-white/10 dark:text-slate-200">
                  {[
                    { Icon: Clock, text: meta?.aulas ?? tier.totalHours },
                    { Icon: User, text: "Só você e o professor" },
                    { Icon: MapPin, text: "Presencial em Ribeirão Preto" },
                  ].map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 font-semibold">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--accent)/10 text-(--accent-ink)">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealHero>

          <RevealHero delay={200}>
            <CourseHeroArt theme={theme} logo={logo}>
              <DesktopScene theme={theme} />
            </CourseHeroArt>
          </RevealHero>
        </div>

        {/* Barra de tarefas */}
        <div className="sb-bleed border-t border-white/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-[#07101f]/85">
          <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
            <span className="hidden flex-1 sm:block" />
            <div className="flex min-w-0 items-center gap-1.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg text-(--accent) dark:text-(--accent-ink)" title="Iniciar">
                <StartGlyph className="h-6 w-6" />
              </span>
              <span className="hidden h-9 w-48 items-center gap-2 rounded-full border border-slate-300/70 bg-white px-3 text-sm text-slate-500 md:flex dark:border-white/15 dark:bg-white/5 dark:text-slate-400">
                <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                  <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Pesquisar
              </span>
              {pinned.map((k, i) => (
                <span
                  key={k}
                  className={`h-10 w-10 items-center justify-center rounded-lg ${i >= 4 ? "hidden sm:flex" : "flex"} ${
                    i === 0 ? "relative bg-white/80 dark:bg-white/10" : ""
                  }`}
                >
                  <ToolLogo name={k} className="h-6 w-6" />
                  {i === 0 && <span className="absolute bottom-0.5 left-1/2 h-1 w-3 -translate-x-1/2 rounded-full bg-(--accent)" />}
                </span>
              ))}
            </div>
            <span className="flex-1" />
            <div className="shrink-0 text-right text-xs leading-tight text-slate-700 dark:text-slate-300">
              <p className="font-bold">{meta?.aulas ?? tier.totalHours}</p>
              <p>{meta ? `intensivo ${meta.intensivo}` : tier.levelName}</p>
            </div>
          </div>
        </div>
      </section>

      <ParaQuemE items={course.targetAudience} whatsappUrl={whatsappUrl} />

      <Conteudo
        course={course}
        theme={theme}
        selectedTier={selectedTier}
        onSelectTier={onSelectTier}
        multiTier={multiTier}
        tema={props.tema}
      />

      <CommonSections lookKey="planilha" look={LOOK} {...props} />
    </div>
  );
}

// ── Para quem é: bilhetes colados no monitor ─────────────────────────────────

function ParaQuemE({ items, whatsappUrl }: { items: string[]; whatsappUrl: string }) {
  const [marcados, setMarcados] = useState<Set<number>>(() => new Set());
  const toggle = (i: number) =>
    setMarcados((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="info-para-quem" className="sb-bleed scroll-mt-4 bg-white py-20 dark:bg-[#0b1322]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Check className="h-4 w-4" />}
          eyebrow="Para quem é"
          title="Este curso é ideal se você..."
          hint="Toque nos bilhetes que têm a ver com você."
        />

        <Reveal delay={120} className="mt-12">
          {/* Monitor */}
          <div className="rounded-[26px] bg-slate-800 p-2.5 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.7)] sm:p-4 dark:bg-slate-700">
            <div className={`relative overflow-hidden rounded-2xl ${WALLPAPER}`}>
              <div className="grid gap-5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:grid-cols-3">
                {items.map((item, i) => {
                  const nota = NOTAS[i % NOTAS.length];
                  const on = marcados.has(i);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggle(i)}
                      aria-pressed={on}
                      style={{ background: nota.bg, "--r": `${nota.r}deg` } as CSSProperties}
                      className={`relative flex h-full flex-col rounded-sm px-5 pb-4 pt-6 text-left text-[#1f2937] shadow-[0_14px_24px_-14px_rgba(15,23,42,0.55)] transition sm:rotate-(--r) sm:hover:rotate-0 sm:hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
                        on ? "ring-4 ring-(--accent)" : ""
                      }`}
                    >
                      {/* Fita adesiva */}
                      <span
                        className="absolute -top-2.5 left-1/2 h-5 w-16 bg-white/65 shadow-sm"
                        style={{ transform: `translateX(-50%) rotate(${nota.tape}deg)` }}
                        aria-hidden="true"
                      />
                      <span className="flex-1 text-[17px] font-medium leading-relaxed">{item}</span>
                      <span className="mt-4 flex items-center gap-2.5 border-t border-black/10 pt-3 text-sm font-bold">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-md border-2 transition ${
                            on ? "border-(--accent) bg-(--accent) text-white" : "border-[#1f2937]/40 bg-white/70"
                          }`}
                        >
                          {on && <Check className="h-4 w-4" strokeWidth={3} />}
                        </span>
                        {on ? "Sou eu!" : "Isso sou eu"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Pé do monitor */}
          <div className="mx-auto h-8 w-20 bg-gradient-to-b from-slate-400 to-slate-300 sm:h-10 sm:w-28 dark:from-slate-600 dark:to-slate-700" />
          <div className="mx-auto h-3 w-48 rounded-full bg-slate-300 sm:w-64 dark:bg-slate-700" />
        </Reveal>

        <div className="mt-8 min-h-[56px] text-center" aria-live="polite">
          {marcados.size > 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 inline-flex flex-col items-center gap-4 sm:flex-row">
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Você marcou {marcados.size} de {items.length}. Esse curso foi feito pra você.
              </p>
              <WppButton href={whatsappUrl} className="px-5 py-3 text-sm">
                Tirar dúvidas
              </WppButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Conteúdo: pastas que abrem ───────────────────────────────────────────────

const FILE_COLORS = ["#0F6CD4", "#16A34A", "#DC2626", "#9333EA", "#EA580C", "#0891B2"];

function Conteudo({
  course,
  theme,
  tema,
  selectedTier,
  onSelectTier,
  multiTier,
}: Pick<SkinProps, "course" | "theme" | "tema" | "selectedTier" | "onSelectTier"> & { multiTier: boolean }) {
  const tier = course.tiers[selectedTier];
  const [aberta, setAberta] = useState(0);
  const idx = Math.min(aberta, tier.modules.length - 1);
  const mod = tier.modules[idx];
  const total = tier.modules.length;
  const janelaRef = useRef<HTMLDivElement>(null);

  const abrir = (i: number) => {
    setAberta(i);
    // Se o topo da janela não estiver à vista (comum no celular), leva a pessoa até ele.
    requestAnimationFrame(() => {
      const el = janelaRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top < 0 || top > window.innerHeight * 0.6) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section
      id="info-conteudo"
      className="sb-bleed scroll-mt-4 border-y border-slate-200 bg-[linear-gradient(180deg,#eaf2fd,#d9e8fb)] py-20 dark:border-white/10 dark:bg-[linear-gradient(180deg,#0d1d38,#0b1830)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<FolderIcon className="h-4 w-5" />}
          eyebrow="Conteúdo programático"
          title="O que você vai aprender"
          hint={
            <>
              São {total} pastas, uma para cada módulo.{" "}
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800 dark:text-white">
                <MousePointerClick className="h-5 w-5 text-(--accent-ink)" /> Clique numa pasta para abrir.
              </span>
            </>
          }
        />

        {multiTier && (
          <Reveal delay={60} className="mt-8 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-white/70 p-1.5 dark:bg-white/5">
              {course.tiers.map((t, i) => (
                <button
                  key={t.levelName}
                  type="button"
                  onClick={() => onSelectTier(i)}
                  className={`min-h-11 rounded-xl px-5 text-sm font-bold transition ${
                    selectedTier === i
                      ? "bg-(--accent) text-white"
                      : "text-slate-700 hover:bg-white dark:text-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  {t.levelName}
                </button>
              ))}
            </div>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{TIER_GUIDE[tier.levelName] ?? tier.outcome}</p>
          </Reveal>
        )}

        {/* Pastas */}
        <Reveal delay={100} className="mt-10">
          <div className="grid gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
            {tier.modules.map((m, i) => {
              const on = i === idx;
              return (
                <button
                  key={m.title}
                  type="button"
                  onClick={() => abrir(i)}
                  aria-pressed={on}
                  aria-controls="info-pasta-aberta"
                  className={`group relative flex items-center gap-4 rounded-2xl px-3 py-2.5 text-left transition sm:flex-col sm:gap-2 sm:px-2 sm:pb-4 sm:pt-3 sm:text-center focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-(--accent)/50 ${
                    on
                      ? "bg-white shadow-[0_12px_28px_-16px_rgba(15,40,80,0.6)] ring-2 ring-(--accent) dark:bg-white/10"
                      : "hover:bg-white/60 dark:hover:bg-white/5"
                  }`}
                >
                  <FolderIcon open={on} className="h-12 w-14 shrink-0 transition group-hover:-translate-y-0.5 sm:h-16 sm:w-20" />
                  <span className="flex min-w-0 flex-col gap-1 sm:items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-(--accent-ink)">Pasta {i + 1}</span>
                    <span className="text-[15px] font-bold leading-snug text-slate-800 sm:text-sm dark:text-white">{m.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Janela da pasta aberta */}
        <div ref={janelaRef} className="mt-8 scroll-mt-4">
          <div
            key={`${selectedTier}-${idx}`}
            id="info-pasta-aberta"
            className="animate-in fade-in zoom-in-[0.98] overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-[0_30px_70px_-34px_rgba(15,40,80,0.6)] duration-300 dark:border-white/10 dark:bg-[#0f1b31]"
          >
            <WinTitleBar
              icon={<FolderIcon open className="h-5 w-6 shrink-0" />}
              title={`Pasta ${idx + 1}`}
              className="px-4 py-3 text-sm font-semibold sm:text-base"
            />
            <div className="border-b border-slate-200 px-4 pb-4 pt-2.5 sm:px-5 dark:border-white/10">
              <p className="truncate rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
                {course.nome} › Pasta {idx + 1}
              </p>
              <h3 className="mt-3 px-1 text-xl font-black leading-snug text-slate-900 sm:text-2xl dark:text-white">{mod.title}</h3>
            </div>
            <ol className="divide-y divide-slate-100 dark:divide-white/[0.06]">
              {mod.topics.map((t, ti) => (
                <li key={t} className="flex items-start gap-4 px-4 py-4 sm:px-6">
                  <FileIcon color={FILE_COLORS[idx % FILE_COLORS.length]} className="mt-0.5 h-10 w-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Tópico {idx + 1}.{ti + 1}
                    </p>
                    <p className="mt-0.5 text-base leading-relaxed text-slate-800 sm:text-[17px] dark:text-slate-100">{t}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {mod.topics.length} tópicos · pasta {idx + 1} de {total}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => abrir(idx - 1)}
                  className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-(--accent) hover:text-(--accent) disabled:pointer-events-none disabled:opacity-40 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:text-(--accent-ink)"
                >
                  <ChevronLeft className="h-4 w-4" /> Anterior
                </button>
                <button
                  type="button"
                  disabled={idx === total - 1}
                  onClick={() => abrir(idx + 1)}
                  className="inline-flex min-h-11 items-center gap-1 rounded-lg bg-(--accent) px-4 text-sm font-bold text-white transition hover:bg-(--accent-hover) disabled:pointer-events-none disabled:opacity-40"
                >
                  Próxima pasta <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resultado + programas */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,40,80,0.6)] sm:p-7 dark:border-white/10 dark:bg-[#0f1b31]">
                <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-(--accent-ink)">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--accent) text-white">
                    <Award className="h-5 w-5" />
                  </span>
                  Ao concluir o curso
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-800 dark:text-slate-100">{tier.outcome}</p>
              </div>
            </Reveal>

            {tier.tools.length > 0 && (
              <Reveal delay={100}>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Programas que você vai usar</p>
                <ul className="mt-3 grid grid-cols-3 gap-2 rounded-2xl border border-white/70 bg-white/75 p-3 backdrop-blur sm:grid-cols-4 lg:grid-cols-5 dark:border-white/10 dark:bg-white/[0.05]">
                  {tier.tools.map((tool) => (
                    <li key={tool} className="flex flex-col items-center gap-1.5 rounded-xl px-1 py-2 text-center">
                      <ToolIcon tool={tool} className="h-9 w-9" />
                      <span className="text-xs font-semibold leading-tight text-slate-700 dark:text-slate-200">{tool}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
          <Reveal delay={150} className="relative hidden lg:block">
            <PersonAtDesk
              theme={theme}
              tema={tema}
              className="w-full"
              renderScreen={(box) => <MiniDesktop box={box} theme={theme} />}
            />
            <CursorArrow className="absolute left-[64%] top-[36%] h-6 w-5 drop-shadow" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
