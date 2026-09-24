import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { CommonSections, type Look } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { TiHeroArt, TiScene } from "@/components/course-skins/scenes/ti";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta, type SkinProps } from "@/components/course-skins/shared";
import { ACC_TEXT, RackRail, StatusLed, Tape, type TiBlocos } from "@/components/course-skins/variants/ti-kit";
import { SuporteConteudo, SuportePublico } from "@/components/course-skins/variants/ti-suporte";
import { ManutencaoConteudo, ManutencaoPublico } from "@/components/course-skins/variants/ti-manutencao";
import { RedesConteudo, RedesPublico } from "@/components/course-skins/variants/ti-redes";
import { CibersegurancaConteudo, CibersegurancaPublico } from "@/components/course-skins/variants/ti-ciberseguranca";
import { LinuxConteudo, LinuxPublico } from "@/components/course-skins/variants/ti-linux";

/**
 * Pele "Infraestrutura" (categoria T.I): sala de servidores. O hero traz a
 * cena do curso (fila de chamados, placa-mãe, topologia, escudo, rack Linux).
 * "Para quem é" e "Conteúdo programático" têm a metáfora de cada curso, em
 * variants/ti-<variante>.tsx: chamados + rack (suporte), ordem de serviço +
 * PC explodido (manutenção), patch panel + traceroute (redes), relatório de
 * risco + camadas de defesa (cibersegurança) e painel de serviços + árvore
 * de diretórios (linux). Etiquetas de rotulador marcam as seções. A parte
 * comercial usa o bloco comum, com acabamento frio e sóbrio.
 */

export const TI_THEME: CourseTheme = { accent: "#0D9488", accentHover: "#0F766E", accent2: "#A3E635", heroBg: "#081412" };

/** Rótulos por curso (campo `variante` do COURSE_DATA). */
const VARIANTES: Record<string, { area: string; blocos: TiBlocos }> = {
  suporte: { area: "Help Desk", blocos: { Publico: SuportePublico, Conteudo: SuporteConteudo } },
  manutencao: { area: "Hardware", blocos: { Publico: ManutencaoPublico, Conteudo: ManutencaoConteudo } },
  redes: { area: "Redes", blocos: { Publico: RedesPublico, Conteudo: RedesConteudo } },
  ciberseguranca: { area: "Segurança", blocos: { Publico: CibersegurancaPublico, Conteudo: CibersegurancaConteudo } },
  linux: { area: "Servidores Linux", blocos: { Publico: LinuxPublico, Conteudo: LinuxConteudo } },
};
const VARIANTE_PADRAO = { area: "Infraestrutura", blocos: { Publico: SuportePublico, Conteudo: SuporteConteudo } };

const TI_LOOK: Look = {
  bgA: "bg-white dark:bg-[#081210]",
  bgB: "bg-[#f3f6f5] dark:bg-[#060e0c]",
  title: "text-[#0b1412] dark:text-white",
  text: "text-[#33423e] dark:text-white/80",
  muted: "text-[#5f6f6b] dark:text-white/50",
  card: "border border-[#dbe4e1] bg-white shadow-[0_1px_2px_rgba(8,20,18,0.05)] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none",
  radius: "rounded-xl",
  eyebrow: `font-mono text-[11px] font-bold uppercase tracking-[0.22em] ${ACC_TEXT}`,
  h2: "text-3xl font-black tracking-tight sm:text-4xl",
  button: "rounded-lg",
  cta: "bg-(--hero-bg) text-white dark:ring-1 dark:ring-white/10",
  divider: "divide-[#dbe4e1] dark:divide-white/10",
};

// ── Peças visuais ─────────────────────────────────────────────────────────────

/** Faixa de patch panel que separa o hero do corpo da página. */
const PATCH_STRIP: CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='30'><rect x='8' y='9' width='18' height='14' rx='2' fill='#050b0a' stroke='#24403a'/><rect x='14' y='20' width='6' height='3' fill='#24403a'/><circle cx='17' cy='5' r='1.6' fill='#A3E635'/><rect x='38' y='9' width='18' height='14' rx='2' fill='#050b0a' stroke='#24403a'/><rect x='44' y='20' width='6' height='3' fill='#24403a'/><circle cx='47' cy='5' r='1.6' fill='#2c4a44'/></svg>`,
  )}")`,
  backgroundRepeat: "repeat-x",
  backgroundPosition: "center",
};

function WppButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-(--accent) px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_32px_-14px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-(--accent-hover)"
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

// ── Pele ──────────────────────────────────────────────────────────────────────

export function TiSkin({ course, tema, theme, logo, whatsappUrl, selectedTier, onSelectTier, faq }: SkinProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const multiTier = course.tiers.length > 1;
  const v = VARIANTES[course.variante ?? ""] ?? VARIANTE_PADRAO;

  const metricas = [
    { label: "Carga", value: meta?.aulas ?? tier.totalHours },
    { label: "Intensivo", value: meta?.intensivo ?? "—" },
    { label: "Padrão", value: meta?.padrao ?? "—" },
  ];
  const blocoProps = { course, tier, tema, theme, multiTier, selectedTier, onSelectTier, metricas };

  return (
    <div className="bg-[#f3f6f5] text-[#0b1412] dark:bg-[#060e0c] dark:text-white">
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="sb-bleed relative isolate overflow-hidden bg-(--hero-bg) text-white">
        <div className="pointer-events-none absolute -right-48 -top-40 h-[560px] w-[560px] rounded-full bg-(--accent)/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[380px] w-[380px] rounded-full bg-(--accent-2)/[0.07] blur-3xl" />
        {/* Trilhos do rack nas laterais */}
        <RackRail count={12} className="absolute inset-y-0 left-0 hidden w-7 border-r border-white/5 bg-black/20 xl:flex" />
        <RackRail count={12} className="absolute inset-y-0 right-0 hidden w-7 border-l border-white/5 bg-black/20 xl:flex" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:pb-20 lg:pt-20">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Tape lime>
                  {course.categoria} · {v.area}
                </Tape>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                  <StatusLed blink /> online
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">{course.nome}</h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-xl text-base text-white/65 sm:text-lg">{course.tagline}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8">
                <WppButton href={whatsappUrl}>Quero saber mais</WppButton>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <dl className="mt-9 grid max-w-md grid-cols-3 gap-2">
                {metricas.map((m) => (
                  <div key={m.label} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
                    <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/45">
                      <StatusLed className="h-1.5 w-1.5" /> {m.label}
                    </dt>
                    <dd className="mt-1 text-sm font-black sm:text-base">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <TiHeroArt theme={theme} logo={logo}>
              <TiScene variante={course.variante} theme={theme} />
            </TiHeroArt>
          </Reveal>
        </div>

        {/* Patch panel */}
        <div className="relative h-8 border-t border-white/5 bg-black/30" style={PATCH_STRIP} aria-hidden="true" />
      </section>

      {/* ── 01 · PARA QUEM É e 02 · CONTEÚDO: metáfora própria de cada curso ── */}
      <v.blocos.Publico {...blocoProps} />
      <v.blocos.Conteudo {...blocoProps} />

      <CommonSections
        lookKey="oficina"
        look={TI_LOOK}
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
