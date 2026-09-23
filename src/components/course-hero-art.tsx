import type { ReactNode } from "react";
import { ToolLogo } from "@/components/tool-logo";
import type { CourseTheme } from "@/lib/course-themes";

/**
 * Moldura da arte do hero dos cursos particulares: halo na cor da categoria e
 * a logo oficial da ferramenta flutuando. A cena em si (planilha, editor,
 * impressora…) vem como `children` — cada pele tem as suas em
 * course-skins/scenes/*.
 */
export function CourseHeroArt({
  theme,
  logo,
  children,
  badge,
  badgeClassName = "bg-white",
  badgePosition = "-right-1 top-2",
  halo,
  aspectClassName = "aspect-[4/5] sm:aspect-[13/11]",
}: {
  theme: CourseTheme;
  logo: string;
  children: ReactNode;
  /** Selo próprio no lugar da logo (quando não existe arquivo em src/assets/logos). */
  badge?: ReactNode;
  /** Fundo/preenchimento do selo flutuante. */
  badgeClassName?: string;
  /** Posição do selo flutuante (classes de posicionamento). */
  badgePosition?: string;
  /** `background` CSS do halo; por padrão, radial na cor de destaque. */
  halo?: string;
  /** Proporção da área da arte (mobile e desktop). */
  aspectClassName?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[520px] select-none text-left ${aspectClassName}`} aria-hidden="true">
      {/* Halo da categoria */}
      <div
        className="absolute inset-[12%] rounded-full blur-3xl"
        style={{ background: halo ?? `radial-gradient(circle, ${theme.accent}55, transparent 70%)` }}
      />

      {children}

      {/* Logo oficial da ferramenta (ou selo próprio) */}
      <div
        className={`animate-float-slow absolute z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] sm:h-20 sm:w-20 ${badgePosition} ${badgeClassName}`}
      >
        {badge ?? <ToolLogo name={logo} className="h-10 w-10 sm:h-12 sm:w-12" />}
      </div>
    </div>
  );
}

// ── Base: janela de app ───────────────────────────────────────────────────────

export function AppWindow({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-xl border border-white/10 bg-[#101010]/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[10px] text-white/50">{title}</span>
      </div>
      {children}
    </div>
  );
}

