import type { CSSProperties, ReactNode } from "react";
import { ToolLogo, hasLogoFile } from "@/components/tool-logo";
import { CourseHeroArt } from "@/components/course-hero-art";
import type { CourseTheme } from "@/lib/course-themes";

/**
 * Peças comuns das cenas da categoria Design & Criação: moldura do hero (halo +
 * logo), janela de editor escura, alças de seleção e ícones próprios para as
 * ferramentas que ainda não têm logo oficial em src/assets/logos.
 */


/**
 * Ícones genéricos (não reproduzem as marcas) para quando a logo oficial não
 * está no repositório. Assim que o arquivo `<chave>.png|svg|webp` entrar em
 * src/assets/logos, a logo oficial passa a aparecer sozinha.
 */
function FallbackIcon({ name, className }: { name: string; className: string }) {
  if (name === "photoshop") {
    // Camadas + curva bézier com âncoras
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#0f1e33" />
        <path d="M12 30 l12 6 l12 -6" fill="none" stroke="#7cc4ff" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M12 24 l12 6 l12 -6 l-12 -6 z" fill="#7cc4ff" fillOpacity="0.35" stroke="#7cc4ff" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M11 17 C 17 7, 31 7, 37 15" fill="none" stroke="#ff9a3d" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="8.8" y="14.8" width="4.4" height="4.4" fill="#fff" stroke="#ff9a3d" strokeWidth="1.4" />
        <rect x="34.8" y="12.8" width="4.4" height="4.4" fill="#fff" stroke="#ff9a3d" strokeWidth="1.4" />
      </svg>
    );
  }
  if (name === "davinci") {
    // Roda de cor com cursor (color grading)
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#17181c" />
        <circle cx="24" cy="24" r="14" fill="none" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.2" />
        <path d="M24 10 A14 14 0 0 1 36.1 31 L24 24 Z" fill="#f2b441" />
        <path d="M36.1 31 A14 14 0 0 1 11.9 31 L24 24 Z" fill="#3fb6ff" />
        <path d="M11.9 31 A14 14 0 0 1 24 10 L24 24 Z" fill="#ff5a7a" />
        <circle cx="24" cy="24" r="6.5" fill="#17181c" />
        <circle cx="27" cy="21" r="2.2" fill="#fff" />
      </svg>
    );
  }
  if (name === "premiere") {
    // Linha do tempo com playhead
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#1b1033" />
        <rect x="8" y="14" width="18" height="6" rx="2" fill="#a78bfa" />
        <rect x="28" y="14" width="12" height="6" rx="2" fill="#a78bfa" fillOpacity="0.6" />
        <rect x="8" y="23" width="10" height="6" rx="2" fill="#f472b6" />
        <rect x="20" y="23" width="20" height="6" rx="2" fill="#f472b6" fillOpacity="0.6" />
        <rect x="8" y="32" width="32" height="5" rx="2" fill="#34d399" fillOpacity="0.7" />
        <path d="M24 9 v31" stroke="#fff" strokeWidth="1.6" />
        <path d="M21 8 h6 l-3 4 z" fill="#fff" />
      </svg>
    );
  }
  return <ToolLogo name={name} className={className} />;
}

export function StudioLogo({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  return hasLogoFile(name) ? <ToolLogo name={name} className={className} /> : <FallbackIcon name={name} className={className} />;
}

/** Moldura padrão do hero com halo em duas cores e o selo próprio do estúdio. */
export function StudioHeroArt({ theme, logo, children }: { theme: CourseTheme; logo: string; children: ReactNode }) {
  const own = !hasLogoFile(logo);
  return (
    <CourseHeroArt
      theme={theme}
      logo={logo}
      halo={`radial-gradient(circle, ${theme.accent}50, ${theme.accent2}18 55%, transparent 72%)`}
      badgePosition="-right-1 top-1"
      badgeClassName={own ? "bg-[#0d0b10] p-1.5" : "bg-white"}
      badge={<StudioLogo name={logo} className={own ? "h-full w-full" : "h-10 w-10 sm:h-12 sm:w-12"} />}
    >
      {children}
    </CourseHeroArt>
  );
}

/** Janela de editor de mídia: barra superior com título e abas de área de trabalho. */
export function EditorWindow({
  title,
  tabs,
  className = "",
  style,
  children,
}: {
  title: string;
  tabs?: string[];
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-xl border border-white/10 bg-[#141217]/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)] backdrop-blur ${className}`}
      style={style}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[9px] text-white/50 sm:text-[10px]">{title}</span>
        {tabs && (
          <span className="ml-auto hidden gap-2 font-mono text-[9px] text-white/35 sm:flex">
            {tabs.map((t, i) => (
              <span key={t} className={i === 0 ? "text-white/80" : ""}>
                {t}
              </span>
            ))}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

/** As 8 alças de uma caixa de seleção (posicionadas no pai `relative`). */
export function Handles({ color = "var(--accent)", size = 7 }: { color?: string; size?: number }) {
  const pos = [
    "left-0 top-0",
    "left-1/2 top-0",
    "left-full top-0",
    "left-0 top-1/2",
    "left-full top-1/2",
    "left-0 top-full",
    "left-1/2 top-full",
    "left-full top-full",
  ];
  return (
    <>
      {pos.map((p) => (
        <span
          key={p}
          className={`pointer-events-none absolute ${p} -translate-x-1/2 -translate-y-1/2 border bg-white`}
          style={{ width: size, height: size, borderColor: color }}
        />
      ))}
    </>
  );
}
