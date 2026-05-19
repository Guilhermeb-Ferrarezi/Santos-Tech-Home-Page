import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const nav = [
  { to: "/", label: "Início" },
  { to: "/cursos", label: "Cursos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Santos Tech" className="h-12 w-12" />
          <span className="text-lg font-bold tracking-tight">
            SANTOS <span className="text-primary">TECH</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5516992578710"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-st-green px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-[1.03] glow-green"
          >
            Matricule-se
          </a>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5516992578710"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-st-green px-5 py-3 text-sm font-bold text-white"
            >
              Matricule-se
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
