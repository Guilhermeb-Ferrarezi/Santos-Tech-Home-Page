type LogoProps = { name: string; className?: string };

// Logos originais (arquivos em src/assets/logos). Vite resolve com hash.
const files = import.meta.glob("../assets/logos/*.{png,svg,webp,jpg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const REAL: Record<string, string> = {};
for (const [path, url] of Object.entries(files)) {
  const base = (path.split("/").pop() ?? "").replace(/\.[^.]+$/, "");
  REAL[base] = url;
}

/** Deriva a logo a partir do nome da ferramenta. */
export function logoKey(ferramenta: string): string {
  const f = ferramenta.toLowerCase();
  if (f.includes("aseprite")) return "aseprite";
  if (f.includes("minecraft")) return "minecraft";
  if (f.includes("makecode")) return "makecode";
  if (f.includes("teachable")) return "teachable";
  if (f.includes("scratch")) return "scratch";
  if (f.includes("maya")) return "maya";
  if (f.includes("voxel")) return "voxel";
  if (f.includes("roblox")) return "roblox";
  if (f.includes("lua")) return "lua";
  if (f.includes("gmail") || f.includes("e-mail") || f.includes("email")) return "gmail";
  if (f.includes("word")) return "word";
  if (f.includes("docs")) return "docs";
  if (f.includes("powerpoint")) return "ppt";
  if (f.includes("slides") || f.includes("apresenta")) return "slides";
  if (f.includes("excel")) return "excel";
  if (f.includes("sheets") || f.includes("planilha")) return "sheets";
  if (f.includes("drive")) return "drive";
  if (f.includes("calendar") || f.includes("agenda")) return "calendar";
  if (f.includes("projeto")) return "projeto";
  if (f.includes("computador") || f.includes("windows") || f.includes("digita")) return "pc";
  return "ia";
}

/**
 * Mostra a logo ORIGINAL da ferramenta (imagem) quando o arquivo existe em
 * src/assets/logos; caso contrário, cai num ícone SVG estilizado (fallback).
 */
export function ToolLogo({ name, className = "h-7 w-7" }: LogoProps) {
  const url = REAL[name];
  if (url) {
    return <img src={url} alt="" aria-hidden="true" className={`${className} object-contain`} />;
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {fallback(name)}
    </svg>
  );
}

function fallback(name: string) {
  switch (name) {
    case "lua":
      return (
        <>
          <circle cx="12" cy="12" r="7" fill="#02027B" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.5"
            fill="none"
            stroke="#02027B"
            strokeWidth="1.3"
            transform="rotate(-25 12 12)"
          />
          <circle cx="9.5" cy="10" r="1.4" fill="#fff" />
        </>
      );
    case "ia":
    default:
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#0D9488" />
          <path d="M12 5 L13.6 10.4 L19 12 L13.6 13.6 L12 19 L10.4 13.6 L5 12 L10.4 10.4 Z" fill="#fff" />
        </>
      );
  }
}
