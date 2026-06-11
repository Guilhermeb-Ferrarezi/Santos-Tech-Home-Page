import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  BookOpen,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
  LogIn,
} from "lucide-react";
import { Img } from "@/components/img";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/adultos")({
  component: AdultosLayout,
});

const GRUPOS: { id: string; label: string; cursos: { slug: string; nome: string }[] }[] = [
  {
    id: "informatica",
    label: "Informática",
    cursos: [{ slug: "informatica", nome: "Informática" }],
  },
  {
    id: "office",
    label: "Office",
    cursos: [
      { slug: "office", nome: "Pacote Office" },
      { slug: "excel", nome: "Excel" },
      { slug: "word", nome: "Word" },
      { slug: "powerpoint", nome: "PowerPoint" },
      { slug: "power-bi", nome: "Power BI" },
    ],
  },
  {
    id: "ia",
    label: "Inteligência Artificial",
    cursos: [{ slug: "ia", nome: "Inteligência Artificial" }],
  },
  {
    id: "programacao",
    label: "Programação",
    cursos: [
      { slug: "logica", nome: "Lógica de Programação" },
      { slug: "python", nome: "Python para Automações" },
      { slug: "n8n", nome: "Automações + N8N" },
      { slug: "frontend", nome: "Desenvolvimento Web Front-End" },
      { slug: "backend", nome: "Desenvolvimento Web Back-End" },
      { slug: "fullstack", nome: "Full Stack" },
      { slug: "mobile", nome: "Desenvolvimento de Aplicativos" },
      { slug: "jogos", nome: "Desenvolvimento de Jogos" },
      { slug: "ads", nome: "ADS — Formação Profissional" },
    ],
  },
  {
    id: "ti",
    label: "T.I.",
    cursos: [
      { slug: "suporte", nome: "Suporte Técnico / Help Desk" },
      { slug: "manutencao", nome: "Montagem e Manutenção" },
      { slug: "redes", nome: "Redes e Infraestrutura" },
      { slug: "ciberseguranca", nome: "Cibersegurança" },
      { slug: "linux", nome: "Linux Essencial" },
    ],
  },
  {
    id: "3d",
    label: "Universo 3D",
    cursos: [
      { slug: "modelagem-3d", nome: "Modelagem 3D" },
      { slug: "impressao-3d", nome: "Impressão 3D" },
      { slug: "autocad", nome: "AutoCAD" },
      { slug: "revit", nome: "Revit" },
    ],
  },
  {
    id: "design",
    label: "Design & Criação",
    cursos: [
      { slug: "canva", nome: "Canva Pro" },
      { slug: "photoshop", nome: "Photoshop + Illustrator" },
      { slug: "capcut", nome: "Edição de Vídeo — CapCut" },
      { slug: "davinci", nome: "DaVinci Resolve / Premiere" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Negócios",
    cursos: [
      { slug: "marketing", nome: "Marketing Digital" },
      { slug: "redes-sociais", nome: "Gestão de Redes Sociais" },
      { slug: "ecommerce", nome: "E-commerce & Vendas Online" },
    ],
  },
];

function AdultosLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(true);
  const [gruposOpen, setGruposOpen] = useState<Record<string, boolean>>({});
  const [dark, setDark] = useState(false);

  const toggleGrupo = (id: string) =>
    setGruposOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const navItem = (active: boolean) =>
    [
      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
      active
        ? "bg-[#0DB88F]/10 text-[#0DB88F]"
        : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white",
    ].join(" ");

  const iconCls = (active: boolean) =>
    active ? "text-[#0DB88F]" : "text-neutral-400 dark:text-neutral-500";

  const label = (text: string) => (
    <span
      className={[
        "whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-300",
        collapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100",
      ].join(" ")}
    >
      {text}
    </span>
  );

  return (
    <div className={dark ? "dark" : ""}>
    <div className={`flex h-screen overflow-hidden ${dark ? "bg-neutral-950" : "bg-neutral-50"}`}>
      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── SIDEBAR ── */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r overflow-hidden",
          "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800",
          // Mobile: slide transform, largura fixa
          "w-64 -translate-x-full transition-transform duration-300 ease-in-out",
          mobileOpen && "translate-x-0",
          // Desktop: sempre visível, anima largura
          "lg:static lg:translate-x-0 lg:transition-[width] lg:duration-300 lg:ease-in-out",
          collapsed ? "lg:w-[60px]" : "lg:w-64",
        ].filter(Boolean).join(" ")}
      >
        {/* Cabeçalho */}
        <div className="flex h-16 shrink-0 items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 px-3">
          {/* Logo — sempre visível */}
          <Img name="logo" alt="Santos Tech" width={32} height={32} className="h-8 w-8 shrink-0" />

          {/* Texto — some quando colapsado */}
          <div
            className={[
              "flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden transition-[opacity,max-width] duration-300",
              collapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100",
            ].join(" ")}
          >
            <span className="whitespace-nowrap text-xs font-black tracking-tight text-neutral-900 dark:text-white">
              SANTOS TECH
            </span>
            <span className="shrink-0 rounded-sm bg-neutral-900 dark:bg-white px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white dark:text-neutral-900">
              adultos
            </span>
          </div>

          {/* Botão recolher — só aparece no DOM quando expandido */}
          {!collapsed && (
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Recolher menu"
              className="ml-auto hidden lg:flex shrink-0 rounded-md p-1.5 text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <PanelLeftClose className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-4 space-y-0.5">
          {/* Expandir — só aparece quando colapsado */}
          {collapsed && (
            <button
              type="button"
              onClick={() => setCollapsed(false)}
              aria-label="Expandir menu"
              className="hidden lg:flex w-full items-center justify-center rounded-lg p-2 text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors mb-1"
            >
              <PanelLeftOpen className="h-4 w-4" />
            </button>
          )}

          {/* Início */}
          <Link
            to="/adultos"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? "Início" : undefined}
            className={navItem(pathname === "/adultos")}
          >
            <Home className={`h-4 w-4 shrink-0 ${iconCls(pathname === "/adultos")}`} />
            {label("Início")}
          </Link>

          <div className="my-3 h-px bg-neutral-100 dark:bg-neutral-800" />

          {/* Cursos dropdown */}
          <button
            type="button"
            onClick={() => {
              if (collapsed) {
                setCollapsed(false);
                setCursosOpen(true);
              } else {
                setCursosOpen((o) => !o);
              }
            }}
            title={collapsed ? "Cursos — clique para expandir" : undefined}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <BookOpen className="h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
            <span
              className={[
                "flex-1 text-left whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-300",
                collapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100",
              ].join(" ")}
            >
              Cursos
            </span>
            <ChevronDown
              className={[
                "h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500 transition-all duration-300",
                collapsed ? "max-w-0 opacity-0" : "max-w-[20px] opacity-100",
                cursosOpen ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
          </button>

          {/* Dropdown — grupos com sub-dropdowns */}
          <div
            className={[
              "grid transition-[grid-template-rows] duration-300 ease-in-out",
              cursosOpen && !collapsed ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            ].join(" ")}
          >
            <div className="overflow-hidden">
              <div className="ml-3 border-l border-neutral-200 dark:border-neutral-800 pl-2 pt-1 pb-1 space-y-0.5">
                {GRUPOS.map(({ id, label: lbl, cursos }) => (
                  <div key={id}>
                    {/* Botão do grupo */}
                    <button
                      type="button"
                      onClick={() => toggleGrupo(id)}
                      className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wider text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/[0.07] transition-colors"
                    >
                      <span className="flex-1 text-left truncate">{lbl}</span>
                      <ChevronDown
                        className={[
                          "h-3 w-3 shrink-0 transition-transform duration-200",
                          gruposOpen[id] ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                      />
                    </button>

                    {/* Links do grupo — animação grid */}
                    <div
                      className={[
                        "grid transition-[grid-template-rows] duration-200 ease-in-out",
                        gruposOpen[id] ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-2 border-l border-neutral-100 dark:border-neutral-800/60 pl-2 pb-1 space-y-0.5">
                          {cursos.map(({ slug, nome }) => (
                            <a
                              key={slug}
                              href={`/adultos/cursos/${slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="flex min-w-0 items-center rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                              <span className="truncate">{nome}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="my-3 h-px bg-neutral-100 dark:bg-neutral-800" />

          {/* Suporte */}
          <a
            href={WHATSAPP_URL.courses}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? "Falar no WhatsApp" : undefined}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
            {label("Falar no WhatsApp")}
          </a>

          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? "Site principal" : undefined}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Home className="h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
            {label("Site principal")}
          </Link>
        </nav>

        {/* Rodapé */}
        <div className="shrink-0 border-t border-neutral-200 dark:border-neutral-800 p-3 space-y-2">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            title={collapsed ? (dark ? "Modo claro" : "Modo escuro") : undefined}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {dark
              ? <Sun className="h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
              : <Moon className="h-4 w-4 shrink-0 text-neutral-400 dark:text-neutral-500" />}
            {label(dark ? "Modo claro" : "Modo escuro")}
          </button>

          <a
            href="https://auth.santos-tech.com"
            title={collapsed ? "Entrar na conta" : undefined}
            className={[
              "flex items-center justify-center gap-2 rounded-lg bg-[#0DB88F] text-sm font-bold text-white transition hover:bg-[#0aaa82] active:scale-[0.98]",
              collapsed ? "px-2 py-2.5" : "px-4 py-2.5",
            ].join(" ")}
          >
            {collapsed ? <LogIn className="h-4 w-4" /> : "Entrar na conta"}
          </a>
        </div>
      </aside>

      {/* ── CONTEÚDO ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar mobile */}
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menu"
            className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] dark:text-neutral-400 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <span className="text-sm font-black text-neutral-900 dark:text-white">SANTOS TECH</span>
          <span className="rounded-sm bg-neutral-900 dark:bg-white px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white dark:text-neutral-900">
            adultos
          </span>
        </div>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  );
}
