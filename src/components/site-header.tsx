import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Menu, X, ChevronDown } from "lucide-react";
import { Img } from "@/components/img";
import { PageTransitionLink } from "@/components/page-transition-link";
import { RarityBadge } from "@/components/rarity-badge";
import { useProgramAccentDark } from "@/lib/program-theme";
import { useSession } from "@/hooks/use-session";
import { logout, loginUrl, PORTAL_URL, type SessionUser } from "@/lib/auth";

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

// ──────────────────────────────────────────────────────────────────────────
// HEADER
// ──────────────────────────────────────────────────────────────────────────
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const accentColor = useProgramAccentDark();

  const closeAll = () => {
    setOpen(false);
    setProgramsOpen(false);
    setSobreOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeAll} aria-label="Santos Tech — página inicial">
          <Img name="logo" alt="Logo Santos Tech" priority width={48} height={48} className="h-12 w-12" />
          <span className="text-lg font-bold tracking-tight">
            SANTOS{" "}
            <span style={{ color: accentColor }} className="transition-colors">
              TECH
            </span>
          </span>
        </Link>

        {/* ============== DESKTOP NAV ============== */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Início
          </Link>

          <ProgramsDropdown />
          <SobreDropdown />

          {/* /blog é outro app (repo blog, deploy próprio) no mesmo domínio —
              <a> normal, não <Link> do router (que só conhece as rotas
              deste app e daria 404 client-side). */}
          <a
            href="/blog"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
          >
            Blog
          </a>

          <Link
            to="/contato"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Contato
          </Link>

          <AuthAction variant="desktop" />
        </nav>

        {/* ============== MOBILE TOGGLE ============== */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ============== MOBILE MENU ============== */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
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
            >
              <span>Programas</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </button>

            {programsOpen && (
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
            )}

            {/* Sobre (mobile accordion) */}
            <button
              type="button"
              onClick={() => setSobreOpen((o) => !o)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              aria-expanded={sobreOpen}
            >
              <span>Sobre</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${sobreOpen ? "rotate-180" : ""}`} />
            </button>

            {sobreOpen && (
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
            )}

            <a
              href="/blog"
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
      )}
    </header>
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
        className="inline-flex items-center justify-center rounded-md bg-st-green px-5 py-2.5 text-base font-bold text-white shadow-sm transition hover:scale-[1.03] glow-green"
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
          href={PORTAL_URL}
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
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
      >
        <UserAvatar user={user} />
        <span className="max-w-[10ch] truncate">{user.name.split(" ")[0]}</span>
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>

      <div className="absolute left-0 right-0 top-full h-3" aria-hidden />

      <div className="invisible absolute right-0 top-[calc(100%+0.5rem)] w-48 rounded-lg border-2 border-primary/25 bg-white p-2 shadow-[0_12px_40px_-8px_rgba(24,122,191,0.18),0_4px_12px_rgba(0,0,0,0.04)] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <a
          href={PORTAL_URL}
          className="block rounded-xl px-4 py-2.5 text-sm font-bold text-foreground/85 hover:bg-muted hover:text-primary"
        >
          Minha conta
        </a>
        <button
          type="button"
          onClick={handleLogout}
          className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold text-destructive hover:bg-muted"
        >
          Sair
        </button>
      </div>
    </div>
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
          className={`flex items-center justify-between gap-3 ${isDesktop ? "rounded-xl px-4 py-2" : "rounded-md px-3 py-2"} text-sm font-bold hover:bg-muted`}
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

// ──────────────────────────────────────────────────────────────────────────
// DESKTOP DROPDOWNS — hover-based, CSS-only group transitions
// ──────────────────────────────────────────────────────────────────────────
function ProgramsDropdown() {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
      >
        Programas
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>

      <div className="absolute left-0 right-0 top-full h-3" aria-hidden />

      <div className="invisible absolute left-1/2 top-[calc(100%+0.5rem)] w-80 -translate-x-1/2 rounded-lg border-2 border-primary/25 bg-white p-2 shadow-[0_12px_40px_-8px_rgba(24,122,191,0.18),0_4px_12px_rgba(0,0,0,0.04)] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <PageTransitionLink
          to="/cursos"
          className="block rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-primary hover:bg-muted"
        >
          Ver todos os programas
        </PageTransitionLink>

        <div className="my-1 h-px bg-border" />
        <NavGroup title="Tecnologia" items={NAV_TEC} variant="desktop" />
        <NavGroup title="Informática" items={NAV_INF} variant="desktop" />

        <div className="my-1 h-px bg-border" />
        <NavGroup title="Também" items={NAV_EXTRAS} variant="desktop" />
      </div>
    </div>
  );
}

function SobreDropdown() {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
      >
        Sobre
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>

      <div className="absolute left-0 right-0 top-full h-3" aria-hidden />

      <div className="invisible absolute left-1/2 top-[calc(100%+0.5rem)] w-60 -translate-x-1/2 rounded-lg border-2 border-primary/25 bg-white p-2 shadow-[0_12px_40px_-8px_rgba(24,122,191,0.18),0_4px_12px_rgba(0,0,0,0.04)] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        {SOBRE_ITEMS.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block rounded-xl px-4 py-2.5 text-sm font-black uppercase tracking-wider text-foreground/85 hover:bg-muted hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
