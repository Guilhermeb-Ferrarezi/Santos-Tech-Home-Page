import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Img } from "@/components/img";
import { useProgramAccentDark } from "@/lib/program-theme";

// ──────────────────────────────────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────────────────────────────────

// Programas dropdown — cores correspondem à identidade de cada programa.
type ProgramItem = {
  label: string;
  href: string;
  color: string;
};

const PROGRAMAS_PRINCIPAIS: ProgramItem[] = [
  { label: "CREATE", href: "/cursos/create", color: "#187ABF" },
  { label: "JR", href: "/cursos/junior", color: "#512374" },
];

const PROGRAMAS_ADICIONAIS: ProgramItem[] = [
  { label: "ACADEMIA DE IA", href: "/cursos/academies#ai", color: "#0411A0" },
  { label: "ACADEMIA DE ROBÓTICA", href: "/cursos/academies#robotica", color: "#0411A0" },
  { label: "FÉRIAS TECH", href: "/cursos/camps", color: "#1C8299" },
];

// Sobre dropdown — itens institucionais (cor neutra/primary).
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeAll} aria-label="Santos Tech — página inicial">
          <Img
            name="logo"
            alt="Logo Santos Tech"
            priority
            width={48}
            height={48}
            className="h-12 w-12"
          />
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

          <Link
            to="/contato"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Contato
          </Link>

          <a
            href="https://auth.santos-tech.com"
            className="inline-flex items-center justify-center rounded-md bg-st-green px-5 py-2.5 text-base font-bold text-white shadow-sm transition hover:scale-[1.03] glow-green"
          >
            Entrar
          </a>
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
              <ChevronDown
                className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {programsOpen && (
              <div className="mb-2 ml-3 flex flex-col gap-1 border-l-2 border-border pl-3">
                <Link
                  to="/cursos"
                  onClick={closeAll}
                  className="rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-primary hover:bg-muted"
                >
                  Ver todos os programas
                </Link>

                <p className="px-3 pt-3 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  Programas principais
                </p>
                {PROGRAMAS_PRINCIPAIS.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    onClick={closeAll}
                    className="rounded-md px-3 py-2 text-sm font-black uppercase tracking-wider hover:bg-muted"
                    style={{ color: p.color }}
                  >
                    {p.label}
                  </Link>
                ))}

                <p className="px-3 pt-3 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  Programas adicionais
                </p>
                {PROGRAMAS_ADICIONAIS.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    onClick={closeAll}
                    className="rounded-md px-3 py-2 text-sm font-black uppercase tracking-wider hover:bg-muted"
                    style={{ color: p.color }}
                  >
                    {p.label}
                  </a>
                ))}
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
              <ChevronDown
                className={`h-4 w-4 transition-transform ${sobreOpen ? "rotate-180" : ""}`}
              />
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

            <Link
              to="/contato"
              onClick={closeAll}
              className="rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
              activeProps={{ className: "text-primary bg-muted" }}
            >
              Contato
            </Link>

            <a
              href="https://auth.santos-tech.com"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-st-green px-5 py-3 text-base font-bold text-white"
            >
              Entrar
            </a>
          </div>
        </div>
      )}
    </header>
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

      {/* invisible bridge to avoid hover gap */}
      <div className="absolute left-0 right-0 top-full h-3" aria-hidden />

      <div className="invisible absolute left-1/2 top-[calc(100%+0.5rem)] w-72 -translate-x-1/2 rounded-lg border-2 border-primary/25 bg-white p-2 shadow-[0_12px_40px_-8px_rgba(24,122,191,0.18),0_4px_12px_rgba(0,0,0,0.04)] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <Link
          to="/cursos"
          className="block rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-primary hover:bg-muted"
        >
          Ver todos os programas
        </Link>

        <div className="my-1 h-px bg-border" />

        <p className="px-4 pt-2 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
          Programas principais
        </p>
        {PROGRAMAS_PRINCIPAIS.map((p) => (
          <Link
            key={p.href}
            to={p.href}
            className="block rounded-xl px-4 py-2 text-sm font-black uppercase tracking-wider hover:bg-muted"
            style={{ color: p.color }}
          >
            {p.label}
          </Link>
        ))}

        <p className="px-4 pt-3 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
          Programas adicionais
        </p>
        {PROGRAMAS_ADICIONAIS.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className="block rounded-xl px-4 py-2 text-sm font-black uppercase tracking-wider hover:bg-muted"
            style={{ color: p.color }}
          >
            {p.label}
          </a>
        ))}
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

      {/* invisible bridge to avoid hover gap */}
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
