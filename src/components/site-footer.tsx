import { Link } from "@tanstack/react-router";
import { useProgramKey, type ProgramKey } from "@/lib/program-theme";
import { openConsentPreferences } from "@/lib/consent";

type FooterTheme = {
  wrapper: string;
  brandHeading: string;
  brandHeadingAccent: string;
  bodyText: string;
  headings: string;
  links: string;
  iconColor: string;
  bottomBar: string;
  bottomText: string;
};

const themes: Record<ProgramKey, FooterTheme> = {
  default: {
    wrapper: "bg-[#04325A] text-white",
    brandHeading: "text-white",
    brandHeadingAccent: "text-[#49A8EB]",
    bodyText: "text-white/85",
    headings: "text-white",
    links: "hover:text-[#49A8EB]",
    iconColor: "text-[#49A8EB]",
    bottomBar: "border-t border-white/15",
    bottomText: "text-white/70",
  },
  jr: {
    wrapper: "bg-[#512374] text-white",
    brandHeading: "text-white",
    brandHeadingAccent: "text-[#DEABF7]",
    bodyText: "text-white/85",
    headings: "text-white",
    links: "hover:text-[#DEABF7]",
    iconColor: "text-[#DEABF7]",
    bottomBar: "border-t border-white/15",
    bottomText: "text-white/70",
  },
  create: {
    wrapper: "bg-[#04325A] text-white",
    brandHeading: "text-white",
    brandHeadingAccent: "text-[#49A8EB]",
    bodyText: "text-white/85",
    headings: "text-white",
    links: "hover:text-[#49A8EB]",
    iconColor: "text-[#49A8EB]",
    bottomBar: "border-t border-white/15",
    bottomText: "text-white/70",
  },
  camps: {
    wrapper: "bg-[#0f5a6b] text-white",
    brandHeading: "text-white",
    brandHeadingAccent: "text-[#6EC4CC]",
    bodyText: "text-white/85",
    headings: "text-white",
    links: "hover:text-[#6EC4CC]",
    iconColor: "text-[#6EC4CC]",
    bottomBar: "border-t border-white/15",
    bottomText: "text-white/70",
  },
  academies: {
    wrapper: "bg-[#020a6b] text-white",
    brandHeading: "text-white",
    brandHeadingAccent: "text-[#818CF8]",
    bodyText: "text-white/85",
    headings: "text-white",
    links: "hover:text-[#818CF8]",
    iconColor: "text-[#818CF8]",
    bottomBar: "border-t border-white/15",
    bottomText: "text-white/70",
  },
};

function useFooterTheme(): FooterTheme {
  return themes[useProgramKey()];
}

export function SiteFooter() {
  const t = useFooterTheme();

  return (
    <footer className={t.wrapper}>
      <div className={t.bottomBar}>
        <div className={`mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8 ${t.bottomText}`}>
          <p>© {new Date().getFullYear()} Santos Tech. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <Link to="/privacidade" className={t.links}>Política de Privacidade</Link>
            <span aria-hidden="true" className="opacity-50">·</span>
            <Link to="/termos" className={t.links}>Termos de Uso</Link>
            <span aria-hidden="true" className="opacity-50">·</span>
            {/* Revogar o consentimento tem que ser tão fácil quanto dar
                (LGPD, art. 8º, §5º) — reabre o mesmo card do banner. */}
            <button type="button" onClick={openConsentPreferences} className={t.links}>
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
