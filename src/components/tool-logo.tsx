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
  if (f.includes("canva")) return "canva";
  if (f.includes("bambu")) return "bambulab";
  if (f.includes("capcut")) return "capcut";
  if (f.includes("apps script") || f.includes("appsscript")) return "appsscript";
  if (f.includes("vba")) return "vba";
  if (f.includes("forms") || f.includes("formul")) return "forms";
  if (f.includes("cloud")) return "cloud";
  if (f.includes("python") || f.includes("pygame")) return "python";
  if (f.includes("realidade virtual")) return "vr";
  if (f.includes("unity")) return "unity";
  if (f.includes("meet")) return "meet";
  if (f.includes("maps")) return "maps";
  if (f.includes("earth")) return "earth";
  if (f.includes("aseprite")) return "aseprite";
  if (f.includes("construct")) return "construct";
  if (f.includes("blender")) return "blender";
  if (f.includes("gemini")) return "gemini";
  if (f.includes("chatgpt")) return "chatgpt";
  if (f.includes("nano") && f.includes("banana")) return "nanobanana";
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
  if (f.includes("imagem")) return "imageai";
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
    case "construct":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#127FBF" />
          <path d="M9 7 L17 12 L9 17 Z" fill="#fff" />
        </>
      );
    case "blender":
      return (
        <>
          <circle cx="12" cy="12" r="9" fill="#E87D0D" />
          <circle cx="12" cy="13" r="4.6" fill="#fff" />
          <circle cx="14.6" cy="10" r="1.7" fill="#2A6FB0" />
        </>
      );
    case "imageai":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#7C3AED" />
          <rect x="5" y="7" width="14" height="10" rx="1.5" fill="#fff" />
          <circle cx="9.5" cy="11" r="1.4" fill="#7C3AED" />
          <path d="M6 16.5 L11 12 L14 15 L19 10.8 L19 16.5 Z" fill="#7C3AED" opacity="0.85" />
          <path d="M18.2 4 l0.6 1.6 1.6 0.6 -1.6 0.6 -0.6 1.6 -0.6 -1.6 -1.6 -0.6 1.6 -0.6 Z" fill="#FBBF24" />
        </>
      );
    case "appsscript":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#4285F4" />
          <path
            d="M10 8 L6.5 12 L10 16 M14 8 L17.5 12 L14 16"
            fill="none"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
    case "calendar":
      return (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2.5" fill="#fff" stroke="#2E8FCF" strokeWidth="1.6" />
          <path d="M3 9.5 H21" stroke="#2E8FCF" strokeWidth="1.6" />
          <rect x="7" y="2.5" width="1.8" height="4" rx="0.9" fill="#2E8FCF" />
          <rect x="15.2" y="2.5" width="1.8" height="4" rx="0.9" fill="#2E8FCF" />
          <circle cx="8" cy="14" r="1.2" fill="#2E8FCF" />
          <circle cx="12" cy="14" r="1.2" fill="#2E8FCF" />
          <circle cx="16" cy="14" r="1.2" fill="#2E8FCF" />
          <circle cx="8" cy="17.6" r="1.2" fill="#2E8FCF" />
          <circle cx="12" cy="17.6" r="1.2" fill="#2E8FCF" />
        </>
      );
    case "python":
      return (
        <>
          <rect x="3" y="3" width="13" height="13" rx="4" fill="#306998" />
          <rect x="8" y="8" width="13" height="13" rx="4" fill="#FFD43B" />
          <circle cx="6.8" cy="6.8" r="1.1" fill="#fff" />
          <circle cx="17.2" cy="17.2" r="1.1" fill="#306998" />
        </>
      );
    case "unity":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#222C37" />
          <path d="M12 4.5 L18.5 8.25 L18.5 15.75 L12 19.5 L5.5 15.75 L5.5 8.25 Z" fill="none" stroke="#fff" strokeWidth="1.2" />
          <path d="M12 4.5 L12 12 M12 12 L18.5 15.75 M12 12 L5.5 15.75" stroke="#fff" strokeWidth="1" />
        </>
      );
    case "vr":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#2E8FCF" />
          <rect x="3.5" y="9" width="17" height="8" rx="3.2" fill="#fff" />
          <circle cx="9" cy="13" r="1.7" fill="#2E8FCF" />
          <circle cx="15" cy="13" r="1.7" fill="#2E8FCF" />
          <path d="M11.2 13 h1.6" stroke="#2E8FCF" strokeWidth="1" />
        </>
      );
    case "meet":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#00832D" />
          <rect x="4.5" y="8" width="9.5" height="8" rx="1.6" fill="#fff" />
          <path d="M15 11 L19.5 8.2 L19.5 15.8 L15 13 Z" fill="#fff" />
        </>
      );
    case "maps":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#fff" />
          <path d="M12 3.2 C8.7 3.2 6.2 5.8 6.2 9 C6.2 13.4 12 20.5 12 20.5 C12 20.5 17.8 13.4 17.8 9 C17.8 5.8 15.3 3.2 12 3.2 Z" fill="#EA4335" />
          <circle cx="12" cy="9" r="2.3" fill="#fff" />
        </>
      );
    case "earth":
      return (
        <>
          <circle cx="12" cy="12" r="9" fill="#1A73E8" />
          <path d="M6.5 8 c3 1.6 7.5 1.6 11 0 M5.5 15 c4 -1.6 9 -1.6 13 0" fill="none" stroke="#fff" strokeWidth="0.9" opacity="0.55" />
          <path d="M9 6.5 c1.5 1.6 1 3.5 -0.5 4.5 c-1.5 1 -1 2.5 0.5 3 M16 8 c-1.5 0.5 -2.5 2 -1.5 3.5 c1 1.5 3 1 3.5 2.5" fill="#34A853" opacity="0.9" />
        </>
      );
    case "cloud":
      return (
        <>
          <rect width="24" height="24" rx="5" fill="#2E8FCF" />
          <g fill="#fff">
            <circle cx="9" cy="13" r="3.1" />
            <circle cx="13.4" cy="11.4" r="3.7" />
            <circle cx="16" cy="14" r="2.7" />
            <rect x="8" y="13.4" width="8.5" height="3.6" rx="1.8" />
          </g>
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
