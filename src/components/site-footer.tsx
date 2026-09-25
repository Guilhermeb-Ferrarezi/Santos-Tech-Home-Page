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
        {/* O botão flutuante do WhatsApp (whatsapp-fab.tsx: bottom-5 h-14 no
            mobile, bottom-6 right-6 w-16 do sm pra cima) fica por cima do fim
            da página. Sem reservar a faixa dele, "Cookies" — a revogação do
            consentimento — ficava coberto no fim da rolagem:
            - abaixo do lg tudo empilha centralizado; no mobile, pb-24 (96px)
              deixa a última linha acima do botão (76px). Do sm ao lg a coluna
              centralizada já não chega ao canto do botão;
            - do lg ao 2xl, em linha: lg:mr-24 afasta os links da borda direita,
              onde o botão fica (88px); de 2xl pra cima a margem do container
              já basta. */}
        <div className={`mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 pt-6 pb-24 text-xs sm:px-6 sm:pb-6 lg:flex-row lg:px-8 ${t.bottomText}`}>
          <p>© {new Date().getFullYear()} Santos Tech. Todos os direitos reservados.</p>
          <div className="flex flex-col items-center gap-2 lg:mr-24 lg:flex-row 2xl:mr-0">
            {/* Entrada do público adulto (aula individual) em todas as páginas
                do site infantil — o /particular tem layout próprio. */}
            <Link to="/particular" className={`font-semibold text-white ${t.links}`}>
              Cursos particulares
            </Link>
            <span aria-hidden="true" className="hidden opacity-50 lg:inline">·</span>
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
      </div>
    </footer>
  );
}
