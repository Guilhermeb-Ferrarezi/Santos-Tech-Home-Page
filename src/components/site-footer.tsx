import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { useProgramKey, type ProgramKey } from "@/lib/program-theme";
import { openConsentPreferences } from "@/lib/consent";
import { ORG } from "@/lib/seo";
import { WHATSAPP_URL, WHATSAPP_PHONE_DISPLAY } from "@/lib/whatsapp";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

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

// ──────────────────────────────────────────────────────────────────────────
// NAVEGAÇÃO DO RODAPÉ — presente em todas as páginas do site institucional.
// É por aqui que um robô (e quem chega ao fim da página) alcança os
// programas, o hub de cursos particulares e as páginas institucionais.
// Os nomes são os que as próprias páginas usam hoje (breadcrumb/título).
// /particular entra só como hub: listar os cursos aqui repetiria 50+ âncoras
// em cada página do site.
// ──────────────────────────────────────────────────────────────────────────
type FooterLink = { label: string; href: string; externo?: boolean };

const GRUPOS: { titulo: string; links: FooterLink[] }[] = [
  {
    titulo: "Programas",
    links: [
      { label: "Todos os programas", href: "/cursos" },
      { label: "Programa JR", href: "/cursos/junior" },
      { label: "Programa CREATE", href: "/cursos/create" },
      { label: "Academies", href: "/cursos/academies" },
      { label: "Colônia de Férias", href: "/cursos/camps" },
    ],
  },
  {
    titulo: "Cursos particulares",
    links: [{ label: "Todos os cursos particulares", href: "/particular" }],
  },
  {
    titulo: "Institucional",
    links: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Nossa visão", href: "/sobre/visao" },
      { label: "Contato", href: "/contato" },
      // /blog é outro app no mesmo domínio: <a> comum (o router não conhece a
      // rota) e já na URL canônica, com barra, pra não passar por um 301.
      { label: "Blog", href: "/blog/", externo: true },
      { label: "Todos os links", href: "/links" },
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos" },
    ],
  },
];

/** `tel:` montado a partir do telefone do JSON-LD — mesma fonte, sem redigitar o número. */
const TEL_HREF = `tel:+${ORG.telephone.replace(/\D/g, "")}`;

const FOCO =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function SiteFooter() {
  const t = useFooterTheme();
  const linkCls = `transition-colors ${t.links} ${FOCO}`;

  return (
    <footer className={t.wrapper}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16 lg:px-8">
        {/* Marca + contato */}
        <div>
          <Link
            to="/"
            className={`inline-block text-xl font-black tracking-tight ${t.brandHeading} ${FOCO}`}
          >
            SANTOS <span className={t.brandHeadingAccent}>TECH</span>
          </Link>
          <p className={`mt-2 max-w-xs text-sm ${t.bodyText}`}>
            Escola de tecnologia presencial em {ORG.address.city}.
          </p>

          {/* Endereço e telefone vêm de ORG (src/lib/seo.ts), a mesma fonte do
              JSON-LD — sem o CEP enquanto ele não for confirmado. */}
          <address className={`mt-6 space-y-3 text-sm not-italic ${t.bodyText}`}>
            <p className="flex items-start gap-2.5">
              <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${t.iconColor}`} />
              <span>
                {ORG.address.street}
                <br />
                {ORG.address.neighborhood} — {ORG.address.city}/{ORG.address.state}
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className={`h-4 w-4 shrink-0 ${t.iconColor}`} />
              <a href={TEL_HREF} className={linkCls}>
                Telefone: {WHATSAPP_PHONE_DISPLAY}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <WhatsAppIcon className={`h-4 w-4 shrink-0 ${t.iconColor}`} />
              <a href={WHATSAPP_URL.footer} target="_blank" rel="noreferrer" className={linkCls}>
                Falar no WhatsApp
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <InstagramIcon className={`h-4 w-4 shrink-0 ${t.iconColor}`} />
              <a href={ORG.instagram} target="_blank" rel="noreferrer" className={linkCls}>
                Instagram @escolasantostech
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
          {GRUPOS.map((grupo) => (
            <div key={grupo.titulo}>
              <h2 className={`text-xs font-black uppercase tracking-[0.18em] ${t.headings}`}>
                {grupo.titulo}
              </h2>
              <ul className={`mt-4 space-y-2.5 text-sm ${t.bodyText}`}>
                {grupo.links.map((item) => (
                  <li key={item.href}>
                    {item.externo ? (
                      <a href={item.href} className={linkCls}>
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.href} className={linkCls}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={t.bottomBar}>
        <div
          className={`mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8 ${t.bottomText}`}
        >
          <p>© {new Date().getFullYear()} Santos Tech. Todos os direitos reservados.</p>
          {/* Revogar o consentimento tem que ser tão fácil quanto dar
              (LGPD, art. 8º, §5º) — reabre o mesmo card do banner. */}
          <button type="button" onClick={openConsentPreferences} className={linkCls}>
            Cookies
          </button>
        </div>
      </div>

      {/* Com o banner de cookies aberto, reserva a altura dele no fim da página: o
          scroll-padding (styles.css) não resolve os últimos links, porque a página
          já não tem para onde rolar e eles ficariam atrás do card (WCAG 2.4.11).
          Banner fechado = variável em 0. */}
      <div aria-hidden="true" className="h-[var(--st-consent-height,0px)]" />
    </footer>
  );
}
