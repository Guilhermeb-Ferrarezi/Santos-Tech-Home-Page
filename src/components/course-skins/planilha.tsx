import { type ComponentType, type CSSProperties, type ReactNode } from "react";
import { RevealHero } from "@/components/reveal";
import { CommonSections } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { CourseHeroArt } from "@/components/course-hero-art";
import { OfficeScene } from "@/components/course-skins/scenes/office";
import {
  APP_COLORS,
  ExcelIaScene,
  ExcelPowerBiScene,
  OFFICE_CUSTOM_ICONS,
  OfficeHeroArt,
  PacoteOfficeScene,
  PowerAppsScene,
  PowerBiScene,
  PowerPointScene,
  WordScene,
} from "@/components/course-skins/scenes/office-apps";
import type { CourseTheme } from "@/lib/course-themes";
import type { SkinProps } from "@/components/course-skins/shared";
import { DOTS, GRID, GRID_VARS, RULED, type BlockProps, type PlanilhaBlocks } from "@/components/course-skins/variants/planilha-base";
import { LogoMark, SheetTabs } from "@/components/course-skins/variants/planilha-kit";
import { ExcelConteudo, ExcelParaQuem } from "@/components/course-skins/variants/planilha-excel";
import { WordConteudo, WordParaQuem } from "@/components/course-skins/variants/planilha-word";
import { PowerPointConteudo, PowerPointParaQuem } from "@/components/course-skins/variants/planilha-powerpoint";
import { PowerBiConteudo, PowerBiParaQuem } from "@/components/course-skins/variants/planilha-power-bi";
import { PowerAppsConteudo, PowerAppsParaQuem } from "@/components/course-skins/variants/planilha-power-apps";
import { ExcelIaConteudo, ExcelIaParaQuem } from "@/components/course-skins/variants/planilha-excel-ia";
import { ExcelPowerBiConteudo, ExcelPowerBiParaQuem } from "@/components/course-skins/variants/planilha-excel-power-bi";
import { PacoteConteudo, PacoteParaQuem } from "@/components/course-skins/variants/planilha-pacote";

/**
 * Pele "Planilha" (categoria Office): a página inteira se comporta como uma
 * pasta de trabalho — grade de células, barra de fórmulas nos títulos, níveis
 * como abas de planilha. A parte comercial usa o bloco comum com cantos retos.
 *
 * `course.variante` troca o app evocado (Word, PowerPoint, Power BI…): cena do
 * hero, cor da barra de título e fundo. "Para quem é" e "Conteúdo programático"
 * vêm de variants/planilha-<variante>.tsx, cada um com a metáfora do próprio
 * programa (documento, deck de slides, relatório, app + fluxo, copiloto…).
 * O acento da página continua o da categoria (PLANILHA_THEME) em todas.
 */

// Paleta da pele em course-skins/themes.ts (PLANILHA_THEME) — módulo leve, sem componentes.

/** Fundos por app: células (Excel), linhas de texto (Word), grade de pontos (telas/slides). */
const PATTERNS: Record<Variante["pattern"], CSSProperties> = { cells: GRID, ruled: RULED, dots: DOTS };

type Variante = {
  /** Cor da barra de título do hero (a do app) e cor do texto sobre ela. */
  bar: string;
  barInk: string;
  /** Texto à esquerda na barra de título. */
  barLeft: string;
  /** Selo acima do título do hero (ex.: "A1", "Pág. 1"). */
  tag: string;
  /** Texto de status na faixa dos níveis. */
  status: string;
  /** Botão "+" de nova aba (só faz sentido em planilha/relatório). */
  addTab: boolean;
  pattern: "cells" | "ruled" | "dots";
  Scene: ComponentType<{ theme: CourseTheme }>;
  /** "Para quem é" + "Conteúdo" com a metáfora do curso. */
  blocks: PlanilhaBlocks;
};

const EXCEL: Variante = {
  bar: "var(--accent)",
  barInk: "#fff",
  barLeft: "Salvamento automático",
  tag: "A1",
  status: "Pronto · 100%",
  addTab: true,
  pattern: "cells",
  Scene: OfficeScene,
  blocks: { ParaQuem: ExcelParaQuem, Conteudo: ExcelConteudo },
};

const VARIANTES: Record<string, Variante> = {
  excel: EXCEL,
  "excel-ia": { ...EXCEL, Scene: ExcelIaScene, blocks: { ParaQuem: ExcelIaParaQuem, Conteudo: ExcelIaConteudo } },
  "excel-power-bi": {
    ...EXCEL,
    bar: `linear-gradient(90deg, ${APP_COLORS.excel} 55%, ${APP_COLORS.powerbi})`,
    Scene: ExcelPowerBiScene,
    blocks: { ParaQuem: ExcelPowerBiParaQuem, Conteudo: ExcelPowerBiConteudo },
  },
  pacote: {
    ...EXCEL,
    bar: `linear-gradient(90deg, ${APP_COLORS.word}, ${APP_COLORS.excel} 50%, ${APP_COLORS.ppt})`,
    tag: "Início",
    status: "Word · Excel · PowerPoint · Outlook",
    Scene: PacoteOfficeScene,
    blocks: { ParaQuem: PacoteParaQuem, Conteudo: PacoteConteudo },
  },
  word: {
    bar: APP_COLORS.word,
    barInk: "#fff",
    barLeft: "Salvamento automático",
    tag: "Pág. 1",
    status: "Página 1 de 3 · Português (Brasil)",
    addTab: false,
    pattern: "ruled",
    Scene: WordScene,
    blocks: { ParaQuem: WordParaQuem, Conteudo: WordConteudo },
  },
  powerpoint: {
    bar: APP_COLORS.ppt,
    barInk: "#fff",
    barLeft: "Salvamento automático",
    tag: "Slide 1",
    status: "Slide 1 de 12 · Modo de exibição normal",
    addTab: false,
    pattern: "dots",
    Scene: PowerPointScene,
    blocks: { ParaQuem: PowerPointParaQuem, Conteudo: PowerPointConteudo },
  },
  "power-bi": {
    bar: APP_COLORS.powerbi,
    barInk: "#1a1a1a",
    barLeft: "Relatório",
    tag: "Página 1",
    status: "Atualizado agora · 3 páginas",
    addTab: true,
    pattern: "dots",
    Scene: PowerBiScene,
    blocks: { ParaQuem: PowerBiParaQuem, Conteudo: PowerBiConteudo },
  },
  "power-apps": {
    bar: APP_COLORS.powerapps,
    barInk: "#fff",
    barLeft: "Estúdio do app",
    tag: "Tela 1",
    status: "App salvo · fluxo ativado",
    addTab: false,
    pattern: "dots",
    Scene: PowerAppsScene,
    blocks: { ParaQuem: PowerAppsParaQuem, Conteudo: PowerAppsConteudo },
  },
};

function WppButton({ href, children, invert = false }: { href: string; children: ReactNode; invert?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-black uppercase tracking-wider transition hover:-translate-y-0.5 ${
        invert
          ? "bg-white text-(--accent) shadow-lg hover:bg-neutral-50"
          : "bg-(--accent) text-white shadow-[0_6px_0_0_color-mix(in_srgb,var(--accent)_55%,black)] hover:bg-(--accent-hover)"
      }`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

export function PlanilhaSkin({ course, tema, theme, logo, whatsappUrl, selectedTier, onSelectTier, faq }: SkinProps) {
  const tier = course.tiers[selectedTier];
  const multiTier = course.tiers.length > 1;
  const v = (course.variante && VARIANTES[course.variante]) || EXCEL;
  const { Scene } = v;
  const pattern = PATTERNS[v.pattern];
  const { ParaQuem, Conteudo } = v.blocks;
  const blockProps: BlockProps = { course, tier, selectedTier, onSelectTier, multiTier };

  return (
    <div className={`sb-bleed ${GRID_VARS} bg-white dark:bg-neutral-950`}>
      {/* ── HERO: janela do app (Excel, Word, PowerPoint…) ─────────────────── */}
      <section className="sb-bleed border-b border-neutral-300 dark:border-neutral-800">
        <div className="sb-bleed flex h-9 items-center justify-between px-4 [--sb-pl:1rem]" style={{ background: v.bar, color: v.barInk }}>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white">
              <LogoMark name={logo} className="h-3.5 w-3.5" />
            </span>
            <span className="hidden text-xs font-semibold sm:inline">{v.barLeft}</span>
          </div>
          <span className="truncate text-xs font-semibold">{course.nome} — Santos Tech</span>
          <span className="w-24" />
        </div>

        <div className="sb-bleed relative" style={pattern}>
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-20">
            <div>
              <RevealHero>
                <p className="inline-flex items-center gap-2 rounded-sm border border-(--accent)/40 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-(--accent) dark:bg-neutral-900">
                  {v.tag} · Particular · {course.categoria}
                </p>
              </RevealHero>
              <RevealHero delay={100}>
                <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
                  {course.nome}
                </h1>
              </RevealHero>
              <RevealHero delay={180}>
                <p className="mt-5 max-w-xl text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">{course.tagline}</p>
              </RevealHero>
              <RevealHero delay={260}>
                <div className="mt-8">
                  <WppButton href={whatsappUrl}>Quero saber mais</WppButton>
                </div>
              </RevealHero>
            </div>
            <RevealHero delay={200}>
              {OFFICE_CUSTOM_ICONS.has(logo) ? (
                <OfficeHeroArt theme={theme} icon={<LogoMark name={logo} className="h-10 w-10 sm:h-12 sm:w-12" />}>
                  <Scene theme={theme} />
                </OfficeHeroArt>
              ) : (
                <CourseHeroArt theme={theme} logo={logo}>
                  <Scene theme={theme} />
                </CourseHeroArt>
              )}
            </RevealHero>
          </div>
        </div>

        {/* Abas (de planilha, de páginas…) = níveis */}
        <div className="sb-bleed flex items-center justify-between gap-4 border-t border-neutral-300 bg-neutral-100 px-4 [--sb-pl:1rem] dark:border-neutral-800 dark:bg-neutral-900/60">
          {multiTier ? (
            <SheetTabs tiers={course.tiers} selected={selectedTier} onSelect={onSelectTier} addTab={v.addTab} />
          ) : (
            <span className="py-2 text-xs font-bold text-(--accent)">{tier.levelName}</span>
          )}
          <span className="hidden shrink-0 font-mono text-[11px] text-neutral-500 sm:inline">{v.status}</span>
        </div>
      </section>

      {/* ── PARA QUEM É + CONTEÚDO: metáfora própria de cada curso ────────── */}
      <ParaQuem {...blockProps} />
      <Conteudo {...blockProps} />

      <CommonSections
        lookKey="planilha"
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
