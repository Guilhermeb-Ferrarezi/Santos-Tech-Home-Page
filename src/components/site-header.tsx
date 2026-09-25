import { Link } from "@tanstack/react-router";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X, ChevronDown } from "lucide-react";
import { Img } from "@/components/img";

gsap.registerPlugin(useGSAP);
import { PageTransitionLink } from "@/components/page-transition-link";
import { RarityBadge } from "@/components/rarity-badge";
import { useProgramAccentDark } from "@/lib/program-theme";
import { useSession } from "@/hooks/use-session";
import { logout, loginUrl, APP_URL, type SessionUser } from "@/lib/auth";

// ──────────────────────────────────────────────────────────────────────────
// DATA — 4 produtos reais, agrupados por eixo. "Também" mantém Robótica/IA
// e Férias acessíveis (páginas no ar) como links secundários.
// ──────────────────────────────────────────────────────────────────────────
type NavItem = { label: string; meta?: string; href: string; color: string; badge?: boolean };

const NAV_TEC: NavItem[] = [
  { label: "Tecnologia Júnior", meta: "5–9 anos", href: "/cursos#tecnologia", color: "#0DB88F" },
  { label: "Tecnologia Create", meta: "10–15 anos", href: "/cursos#tecnologia", color: "#187ABF", badge: true },
];
const NAV_INF: NavItem[] = [
  { label: "Informática Júnior", meta: "5–9 anos", href: "/cursos#informatica", color: "#0DB88F" },
  { label: "Informática Create", meta: "10–15 anos", href: "/cursos#informatica", color: "#187ABF" },
];
const NAV_EXTRAS: NavItem[] = [
  { label: "Colônia de Férias", href: "/cursos/camps", color: "#0E9E8E" },
];

type SobreItem = { label: string; href: string };
const SOBRE_ITEMS: SobreItem[] = [
  { label: "SOBRE NÓS", href: "/sobre" },
  { label: "NOSSA VISÃO", href: "/sobre/visao" },
];

/** /blog é outro app (repo blog, deploy próprio) no mesmo domínio: a URL canônica
 *  dele tem barra no fim — `/blog` responde 301 para `/blog/`. */
const BLOG_URL = "/blog/";

/** Anel de foco visível para quem navega pelo teclado (não aparece no clique). */
const FOCO =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const DESKTOP_LINK = `text-sm font-semibold text-foreground/80 transition-colors hover:text-primary ${FOCO}`;

// ──────────────────────────────────────────────────────────────────────────
// HEADER
// ──────────────────────────────────────────────────────────────────────────
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const accentColor = useProgramAccentDark();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useGSAP(
    () => {
      const el = menuRef.current;
      if (!el) return;
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return; // já nasce com `h-0` via className — nada pra animar aqui.
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.style.height = open ? "auto" : "0px";
        return;
      }
      if (open) {
        gsap.fromTo(
          el,
          { height: 0 },
          {
            height: el.scrollHeight,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => gsap.set(el, { height: "auto" }),
          },
        );
      } else {
        gsap.fromTo(el, { height: el.scrollHeight }, { height: 0, duration: 0.25, ease: "power2.in" });
      }
    },
    { scope: menuRef, dependencies: [open] },
  );

  // Escape fecha o menu mobile e devolve o foco ao botão que o abriu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      setProgramsOpen(false);
      setSobreOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setProgramsOpen(false);
    setSobreOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`flex items-center gap-3 ${FOCO}`}
          onClick={closeAll}
          aria-label="Santos Tech — página inicial"
        >
          <Img name="logo" alt="Logo Santos Tech" priority width={48} height={48} className="h-12 w-12" />
          <span className="text-lg font-bold tracking-tight">
            SANTOS{" "}
            <span style={{ color: accentColor }} className="transition-colors">
              TECH
            </span>
          </span>
        </Link>

        {/* ============== DESKTOP NAV ============== */}
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={DESKTOP_LINK}
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Início
          </Link>

          <DesktopDisclosure
            label="Programas"
            buttonClassName={`inline-flex items-center gap-1 ${DESKTOP_LINK}`}
            panelClassName="left-1/2 w-80 -translate-x-1/2"
          >
            <PageTransitionLink
              to="/cursos"
              className="block rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-primary hover:bg-muted focus-visible:bg-muted"
            >
              Ver todos os programas
            </PageTransitionLink>

            <div className="my-1 h-px bg-border" />
            <NavGroup title="Tecnologia" items={NAV_TEC} variant="desktop" />
            <NavGroup title="Informática" items={NAV_INF} variant="desktop" />

            <div className="my-1 h-px bg-border" />
            <NavGroup title="Também" items={NAV_EXTRAS} variant="desktop" />
          </DesktopDisclosure>

          <DesktopDisclosure
            label="Sobre"
            buttonClassName={`inline-flex items-center gap-1 ${DESKTOP_LINK}`}
            panelClassName="left-1/2 w-60 -translate-x-1/2"
          >
            {SOBRE_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block rounded-xl px-4 py-2.5 text-sm font-black uppercase tracking-wider text-foreground/85 hover:bg-muted hover:text-primary focus-visible:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </DesktopDisclosure>

          {/* /blog é outro app no mesmo domínio — <a> normal, não <Link> do router
              (que só conhece as rotas deste app e daria 404 client-side). */}
          <a href={BLOG_URL} className={DESKTOP_LINK}>
            Blog
          </a>

          <Link to="/contato" className={DESKTOP_LINK} activeProps={{ className: "text-primary" }}>
            Contato
          </Link>

          <AuthAction variant="desktop" />
        </nav>

        {/* ============== MOBILE TOGGLE ============== */}
        <button
          ref={toggleRef}
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden ${FOCO}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ============== MOBILE MENU ==============
          Tudo fica no HTML desde o servidor (inclusive os grupos recolhidos): na
          indexação mobile-first, o menu do celular precisa ter os mesmos links do
          desktop. Fechado, some da tela e do teclado com `h-0` + `inert`. */}
      <div
        id="menu-mobile"
        ref={menuRef}
        inert={!open}
        aria-hidden={!open}
        className="h-0 overflow-hidden border-t border-border bg-background md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <Link
              to="/"
              onClick={closeAll}
              className="rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              activeProps={{ className: "text-primary bg-muted" }}
              activeOptions={{ exact: true }}
            >
              Início
            </Link>

            {/* Programas (mobile accordion) */}
            <button
              type="button"
              onClick={() => setProgramsOpen((o) => !o)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              aria-expanded={programsOpen}
              aria-controls="menu-mobile-programas"
            >
              <span>Programas</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </button>

            <MobileCollapse id="menu-mobile-programas" open={programsOpen}>
              <div className="mb-2 ml-3 flex flex-col gap-1 border-l-2 border-border pl-3">
                <PageTransitionLink
                  to="/cursos"
                  onClick={closeAll}
                  className="rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-primary hover:bg-muted"
                >
                  Ver todos os programas
                </PageTransitionLink>
                <NavGroup title="Tecnologia" items={NAV_TEC} onClick={closeAll} variant="mobile" />
                <NavGroup title="Informática" items={NAV_INF} onClick={closeAll} variant="mobile" />
                <NavGroup title="Também" items={NAV_EXTRAS} onClick={closeAll} variant="mobile" />
              </div>
            </MobileCollapse>

            {/* Sobre (mobile accordion) */}
            <button
              type="button"
              onClick={() => setSobreOpen((o) => !o)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              aria-expanded={sobreOpen}
              aria-controls="menu-mobile-sobre"
            >
              <span>Sobre</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${sobreOpen ? "rotate-180" : ""}`} />
            </button>

            <MobileCollapse id="menu-mobile-sobre" open={sobreOpen}>
              <div className="mb-2 ml-3 flex flex-col gap-1 border-l-2 border-border pl-3">
                {SOBRE_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeAll}
                    className="rounded-md px-3 py-2 text-sm font-black uppercase tracking-wider text-foreground/85 hover:bg-muted hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </MobileCollapse>

            <a
              href={BLOG_URL}
              onClick={closeAll}
              className="rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
            >
              Blog
            </a>

            <Link
              to="/contato"
              onClick={closeAll}
              className="rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              activeProps={{ className: "text-primary bg-muted" }}
            >
              Contato
            </Link>

            <AuthAction variant="mobile" onNavigate={closeAll} />
        </div>
      </div>
    </header>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// ACORDEÃO DO MENU MOBILE — sempre renderizado; recolhido, a linha do grid vai a
// 0 (anima a altura sem medir) e o conteúdo fica `inert` (fora do Tab e do leitor
// de tela), mas os links continuam no HTML.
// ──────────────────────────────────────────────────────────────────────────
function MobileCollapse({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  return (
    <div
      id={id}
      inert={!open}
      className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// SESSÃO — botão "Entrar" quando deslogado; avatar + menu (conta/sair)
// quando logado. Checa /auth/me na API central (cookie httpOnly cross-
// subdomain, ver src/lib/auth.ts).
// ──────────────────────────────────────────────────────────────────────────
function AuthAction({
  variant,
  onNavigate,
}: {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const { data, isPending, isError } = useSession();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    onNavigate?.();
    await logout();
    queryClient.setQueryData(["session"], undefined);
    window.location.href = "/";
  };

  // Enquanto checa a sessão, não pisca nada no lugar do botão — evita
  // layout shift e um "Entrar" fantasma pra quem já está logado.
  if (isPending) {
    return variant === "desktop" ? <div className="h-10 w-24" aria-hidden /> : null;
  }

  if (isError || !data?.user) {
    return variant === "desktop" ? (
      <a
        href={loginUrl()}
        className={`inline-flex items-center justify-center rounded-md bg-st-green px-5 py-2.5 text-base font-bold text-white shadow-sm transition hover:scale-[1.03] glow-green ${FOCO}`}
      >
        Entrar
      </a>
    ) : (
      <a
        href={loginUrl()}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-st-green px-5 py-3 text-base font-bold text-white"
      >
        Entrar
      </a>
    );
  }

  const user = data.user;

  if (variant === "mobile") {
    return (
      <div className="mt-2 flex flex-col gap-1 rounded-md border border-border p-2">
        <a
          href={APP_URL}
          onClick={onNavigate}
          className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted"
        >
          <UserAvatar user={user} />
          <span className="truncate text-sm font-bold text-foreground">{user.name}</span>
        </a>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md px-3 py-2 text-left text-sm font-semibold text-destructive hover:bg-muted"
        >
          Sair
        </button>
      </div>
    );
  }

  return (
    <DesktopDisclosure
      label={
        <>
          <UserAvatar user={user} />
          <span className="max-w-[10ch] truncate">{user.name.split(" ")[0]}</span>
        </>
      }
      buttonClassName={`inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary ${FOCO}`}
      panelClassName="right-0 w-48"
    >
      <a
        href={APP_URL}
        className="block rounded-xl px-4 py-2.5 text-sm font-bold text-foreground/85 hover:bg-muted hover:text-primary focus-visible:bg-muted"
      >
        Minha conta
      </a>
      <button
        type="button"
        onClick={handleLogout}
        className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold text-destructive hover:bg-muted focus-visible:bg-muted"
      >
        Sair
      </button>
    </DesktopDisclosure>
  );
}

function UserAvatar({ user }: { user: SessionUser }) {
  if (user.avatarUrl) {
    return (
      <img
        src={user.avatarUrl}
        alt=""
        referrerPolicy="no-referrer"
        className="h-8 w-8 shrink-0 rounded-full object-cover"
      />
    );
  }
  const initial = user.name.trim().charAt(0).toUpperCase() || "?";
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-st-green text-sm font-bold text-white">
      {initial}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// GRUPO DE LINKS (reutilizado em desktop e mobile)
// ──────────────────────────────────────────────────────────────────────────
function NavGroup({
  title,
  items,
  onClick,
  variant,
}: {
  title: string;
  items: NavItem[];
  onClick?: () => void;
  variant: "desktop" | "mobile";
}) {
  const isDesktop = variant === "desktop";
  return (
    <>
      <p className={`${isDesktop ? "px-4 pt-2" : "px-3 pt-3"} text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground`}>
        {title}
      </p>
      {items.map((p) => (
        <a
          key={p.label}
          href={p.href}
          onClick={onClick}
          className={`flex items-center justify-between gap-3 ${isDesktop ? "rounded-xl px-4 py-2" : "rounded-md px-3 py-2"} text-sm font-bold hover:bg-muted focus-visible:bg-muted`}
        >
          <span style={{ color: p.color }}>{p.label}</span>
          {p.badge ? (
            <RarityBadge className="shrink-0" />
          ) : (
            p.meta && <span className="shrink-0 text-[10px] font-semibold text-muted-foreground">{p.meta}</span>
          )}
        </a>
      ))}
    </>
  );
}

/** Itens focáveis do painel, na ordem do DOM. */
function panelItems(panel: HTMLElement | null): HTMLElement[] {
  return [...(panel?.querySelectorAll<HTMLElement>("a, button") ?? [])];
}

// ──────────────────────────────────────────────────────────────────────────
// DESKTOP DROPDOWN — padrão "disclosure" (WAI-ARIA APG).
// O mouse continua abrindo pelo hover (CSS, como antes). O teclado e o clique
// passam pelo estado: Enter/Espaço alternam, Seta para baixo abre e foca o
// primeiro item, setas navegam entre os itens, Escape fecha e devolve o foco
// ao botão; sair com o Tab ou clicar fora também fecha. `aria-expanded` e
// `aria-controls` informam o estado ao leitor de tela. Os links ficam no HTML
// o tempo todo (o painel só fica invisível), então a indexação não muda.
// ──────────────────────────────────────────────────────────────────────────
function DesktopDisclosure({
  label,
  buttonClassName,
  panelClassName,
  children,
}: {
  label: ReactNode;
  buttonClassName: string;
  panelClassName: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const focusFirstOnOpen = useRef(false);

  // Clique fora fecha.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Aberto pela seta: o foco vai ao primeiro item assim que o painel fica visível
  // (aberto pelo estado, `visibility` não tem transição — ver as classes do painel).
  useEffect(() => {
    if (!open || !focusFirstOnOpen.current) return;
    focusFirstOnOpen.current = false;
    panelItems(panelRef.current)[0]?.focus();
  }, [open]);

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const insidePanel = panelRef.current?.contains(target) ?? false;

    if (event.key === "Escape" && (open || insidePanel)) {
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    if (target === buttonRef.current && event.key === "ArrowDown") {
      event.preventDefault();
      if (open) panelItems(panelRef.current)[0]?.focus();
      else {
        focusFirstOnOpen.current = true;
        setOpen(true);
      }
      return;
    }
    if (insidePanel) {
      event.preventDefault();
      const list = panelItems(panelRef.current);
      const i = list.indexOf(target);
      const next = event.key === "ArrowDown" ? (i + 1) % list.length : (i - 1 + list.length) % list.length;
      list[next]?.focus();
    }
  };

  return (
    <div
      ref={rootRef}
      className="group relative"
      onKeyDown={onKeyDown}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={buttonClassName}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform group-hover:rotate-180 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div className="absolute left-0 right-0 top-full h-3" aria-hidden />

      <div
        ref={panelRef}
        id={panelId}
        // Escolher um item fecha o painel (o header continua montado entre rotas).
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
        // Aberto: só a opacidade anima e `visibility` vira na hora — um item escondido
        // não recebe foco, e a Seta para baixo precisa focar o 1º item já no commit.
        // Fechando, `transition-all` segura o painel visível até o fade-out terminar.
        className={`absolute top-[calc(100%+0.5rem)] rounded-lg border-2 border-primary/25 bg-white p-2 shadow-[0_12px_40px_-8px_rgba(24,122,191,0.18),0_4px_12px_rgba(0,0,0,0.04)] duration-150 ${panelClassName} ${
          open
            ? "visible opacity-100 transition-opacity"
            : "invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
