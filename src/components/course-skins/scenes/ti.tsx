import type { ReactNode } from "react";
import { CourseHeroArt } from "@/components/course-hero-art";
import { ToolLogo } from "@/components/tool-logo";
import type { CourseTheme } from "@/lib/course-themes";
import { SuporteScene } from "@/components/course-skins/scenes/ti-suporte";
import { ManutencaoScene } from "@/components/course-skins/scenes/ti-manutencao";
import { RedesScene } from "@/components/course-skins/scenes/ti-redes";
import { CibersegurancaScene } from "@/components/course-skins/scenes/ti-ciberseguranca";
import { LinuxScene } from "@/components/course-skins/scenes/ti-linux";

/**
 * Cenas do hero da categoria T.I. Cada curso (campo `variante` do COURSE_DATA)
 * tem a sua: fila de chamados, placa-mãe, topologia, escudo ou rack Linux.
 * A moldura repete a de CourseHeroArt, mas com logos próprias da categoria
 * (pinguim, escudo, rede, chip) que ainda não existem em src/assets/logos.
 */

export function TiScene({ variante, theme }: { variante?: string; theme: CourseTheme }) {
  switch (variante) {
    case "suporte":
      return <SuporteScene theme={theme} />;
    case "manutencao":
      return <ManutencaoScene theme={theme} />;
    case "ciberseguranca":
      return <CibersegurancaScene theme={theme} />;
    case "linux":
      return <LinuxScene theme={theme} />;
    case "redes":
    default:
      return <RedesScene theme={theme} />;
  }
}

/** Moldura padrão do hero com as logos próprias da categoria (quadrada no mobile). */
export function TiHeroArt({ theme, logo, children }: { theme: CourseTheme; logo: string; children: ReactNode }) {
  return (
    <CourseHeroArt
      theme={theme}
      logo={logo}
      aspectClassName="aspect-square sm:aspect-[13/11]"
      badge={<TiLogo name={logo} className="h-10 w-10 sm:h-12 sm:w-12" />}
    >
      {children}
    </CourseHeroArt>
  );
}

/**
 * Logos da categoria que não existem em src/assets/logos. Chaves desconhecidas
 * caem no ToolLogo padrão (ex.: "pc" → logo do Windows).
 */
export function TiLogo({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  const icon = TI_LOGOS[name];
  if (!icon) return <ToolLogo name={name} className={className} />;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {icon}
    </svg>
  );
}

const TI_LOGOS: Record<string, ReactNode> = {
  // Pinguim (desenho próprio, não é o Tux oficial)
  linux: (
    <>
      <ellipse cx="12" cy="13.6" rx="6.6" ry="8.4" fill="#16181d" />
      <ellipse cx="12" cy="15.4" rx="4.3" ry="5.8" fill="#f5f5f4" />
      <circle cx="10.1" cy="8.2" r="1.35" fill="#fff" />
      <circle cx="13.9" cy="8.2" r="1.35" fill="#fff" />
      <circle cx="10.35" cy="8.35" r="0.6" fill="#16181d" />
      <circle cx="13.65" cy="8.35" r="0.6" fill="#16181d" />
      <path d="M10.2 10.2 L13.8 10.2 L12 12.2 Z" fill="#F5B82E" />
      <path d="M5.8 13 C4 15 4.3 17.5 5.6 18.4 L7 16.2 Z M18.2 13 C20 15 19.7 17.5 18.4 18.4 L17 16.2 Z" fill="#16181d" />
      <ellipse cx="9" cy="21.6" rx="2.7" ry="1.2" fill="#F5B82E" />
      <ellipse cx="15" cy="21.6" rx="2.7" ry="1.2" fill="#F5B82E" />
    </>
  ),
  // Escudo com cadeado
  seguranca: (
    <>
      <path d="M12 1.8 L20.5 5 V11.4 C20.5 16.6 16.9 20.4 12 22.2 C7.1 20.4 3.5 16.6 3.5 11.4 V5 Z" fill="#0D9488" />
      <path d="M12 1.8 L20.5 5 V11.4 C20.5 16.6 16.9 20.4 12 22.2 Z" fill="#0F766E" />
      <path d="M9.3 11 V9.3 a2.7 2.7 0 0 1 5.4 0 V11" fill="none" stroke="#fff" strokeWidth="1.5" />
      <rect x="7.9" y="10.8" width="8.2" height="6.4" rx="1.3" fill="#fff" />
      <circle cx="12" cy="13.6" r="1" fill="#0F766E" />
      <rect x="11.5" y="13.8" width="1" height="1.9" rx="0.4" fill="#0F766E" />
    </>
  ),
  // Topologia: roteador ligado a três pontos
  rede: (
    <>
      <rect width="24" height="24" rx="5" fill="#0D9488" />
      <path d="M12 8.2 V12 M12 12 L6.5 16.4 M12 12 V16.4 M12 12 L17.5 16.4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="8.6" y="4.6" width="6.8" height="4" rx="1.2" fill="#fff" />
      <circle cx="6.5" cy="17.4" r="1.9" fill="#A3E635" />
      <circle cx="12" cy="17.4" r="1.9" fill="#A3E635" />
      <circle cx="17.5" cy="17.4" r="1.9" fill="#A3E635" />
    </>
  ),
  // Chip / processador
  hardware: (
    <>
      <rect width="24" height="24" rx="5" fill="#0b1412" />
      {[7, 10, 13, 16].map((p) => (
        <g key={p} fill="#A3E635">
          <rect x={p} y="3" width="1.3" height="3" rx="0.4" />
          <rect x={p} y="18" width="1.3" height="3" rx="0.4" />
          <rect x="3" y={p} width="3" height="1.3" rx="0.4" />
          <rect x="18" y={p} width="3" height="1.3" rx="0.4" />
        </g>
      ))}
      <rect x="6" y="6" width="12" height="12" rx="1.8" fill="#0D9488" />
      <rect x="8.6" y="8.6" width="6.8" height="6.8" rx="1" fill="none" stroke="#fff" strokeWidth="1.1" />
      <circle cx="9.3" cy="9.3" r="0.7" fill="#fff" />
    </>
  ),
};
