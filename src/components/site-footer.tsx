import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { WhatsAppIcon } from "@/components/icons";
import { useProgramKey, type ProgramKey } from "@/lib/program-theme";
import { WHATSAPP_URL, WHATSAPP_PHONE_DISPLAY } from "@/lib/whatsapp";

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
    wrapper: "border-t border-border bg-muted/40",
    brandHeading: "text-foreground",
    brandHeadingAccent: "text-primary",
    bodyText: "text-muted-foreground",
    headings: "text-foreground",
    links: "hover:text-primary",
    iconColor: "text-primary",
    bottomBar: "border-t border-border",
    bottomText: "text-muted-foreground",
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Santos Tech" className="h-12 w-12" />
            <span className={`text-lg font-bold ${t.brandHeading}`}>
              SANTOS <span className={t.brandHeadingAccent}>TECH</span>
            </span>
          </div>
          <p className={`mt-4 max-w-md text-sm ${t.bodyText}`}>
            Centro presencial de aprendizagem de programação para crianças e
            jovens em Ribeirão Preto. Aqui, o tempo de tela vira habilidade do
            futuro.
          </p>
        </div>

        <div>
          <h3 className={`text-sm font-bold uppercase tracking-wider ${t.headings}`}>
            Navegação
          </h3>
          <ul className={`mt-4 space-y-2 text-sm ${t.bodyText}`}>
            <li><Link to="/" className={t.links}>Início</Link></li>
            <li><Link to="/cursos" className={t.links}>Cursos</Link></li>
            <li><Link to="/sobre" className={t.links}>Sobre</Link></li>
            <li><Link to="/contato" className={t.links}>Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className={`text-sm font-bold uppercase tracking-wider ${t.headings}`}>
            Contato
          </h3>
          <ul className={`mt-4 space-y-3 text-sm ${t.bodyText}`}>
            <li className="flex items-start gap-2.5">
              <MapPin className={`mt-0.5 h-5 w-5 shrink-0 ${t.iconColor}`} />
              <span>Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto, SP</span>
            </li>
            <li>
              <a href={WHATSAPP_URL.footer} target="_blank" rel="noreferrer" className={`flex items-center gap-2.5 ${t.links}`}>
                <WhatsAppIcon className={`h-5 w-5 shrink-0 ${t.iconColor}`} /> {WHATSAPP_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href="https://instagram.com/escolasantostech" target="_blank" rel="noreferrer" className={`flex items-center gap-2.5 ${t.links}`}>
                <Instagram className={`h-5 w-5 shrink-0 ${t.iconColor}`} /> @escolasantostech
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className={`h-5 w-5 shrink-0 ${t.iconColor}`} />
              <a href="mailto:ceo.santosgames@gmail.com" className={t.links}>
                ceo.santosgames@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={t.bottomBar}>
        <div className={`mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8 ${t.bottomText}`}>
          <p>© {new Date().getFullYear()} Santos Tech. Todos os direitos reservados.</p>
          <p>Escola de programação · Ribeirão Preto</p>
        </div>
      </div>
    </footer>
  );
}
