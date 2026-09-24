import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
import { SKINS } from "@/components/course-skins";
import { BRAND_THEME, themeVars, type CourseThemeKey } from "@/lib/course-themes";

export const Route = createFileRoute("/particular")({
  component: ParticularLayout,
});

const DARK_KEY = "particular:dark";

/** `id` bate com `CourseThemeKey` — é a chave usada pra buscar o tema (cor) da categoria em `SKINS`. */
const GRUPOS: {
  id: CourseThemeKey;
  label: string;
  cursos: { slug: string; nome: string; legenda?: string }[];
}[] = [
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
      { slug: "excel-power-bi", nome: "Excel + Power BI" },
      { slug: "excel", nome: "Excel" },
      { slug: "excel-ia", nome: "Excel + IA" },
      { slug: "word", nome: "Word" },
      { slug: "powerpoint", nome: "PowerPoint" },
      { slug: "power-bi", nome: "Power BI" },
      { slug: "power-apps", nome: "Power Apps + Power Automate" },
    ],
  },
  {
    id: "ia",
    label: "Inteligência Artificial",
    cursos: [
      { slug: "ia", nome: "Inteligência Artificial" },
      { slug: "agentes-ia", nome: "Agentes de IA com N8N e LLMs" },
      { slug: "rag", nome: "RAG", legenda: "IA com seus Próprios Dados" },
      { slug: "ia-visual", nome: "IA para Criadores: Imagem, Vídeo e Áudio" },
      { slug: "chatgpt", nome: "ChatGPT e IA para Profissionais" },
      { slug: "conteudo-ia", nome: "Criação de Conteúdo com IA" },
    ],
  },
  {
    id: "programacao",
    label: "Programação",
    cursos: [
      { slug: "logica", nome: "Lógica de Programação" },
      { slug: "python", nome: "Python para Automações" },
      { slug: "python-apis", nome: "APIs e Integrações com Python" },
      { slug: "typescript", nome: "TypeScript para Desenvolvimento Moderno" },
      { slug: "git", nome: "Git e GitHub para Profissionais" },
      { slug: "n8n", nome: "Automações + N8N" },
      { slug: "make", nome: "Automações No-Code Make" },
      { slug: "sql", nome: "Banco de Dados com SQL" },
      { slug: "frontend", nome: "Desenvolvimento Web Front-End" },
      { slug: "backend", nome: "Desenvolvimento Web Back-End" },
      { slug: "fullstack", nome: "Full Stack" },
      { slug: "mobile", nome: "Desenvolvimento de Aplicativos" },
      { slug: "jogos", nome: "Desenvolvimento de Jogos" },
      { slug: "ads", nome: "ADS", legenda: "Formação Profissional" },
    ],
  },
  {
    id: "ti",
    label: "T.I",
    cursos: [
      { slug: "suporte", nome: "Suporte Técnico / Help Desk" },
      { slug: "manutencao", nome: "Montagem e Manutenção" },
      { slug: "redes", nome: "Redes e Infraestrutura" },
      { slug: "ciberseguranca", nome: "Cibersegurança" },
      { slug: "linux", nome: "Linux Essencial" },
    ],
  },
  {
    id: "universo-3d",
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
      { slug: "capcut", nome: "Edição de Vídeo", legenda: "CapCut" },
      { slug: "davinci", nome: "Edição de Vídeo", legenda: "DaVinci Resolve" },
      { slug: "premiere", nome: "Edição de Vídeo", legenda: "Adobe Premiere" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Negócios",
    cursos: [
      { slug: "marketing", nome: "Marketing Digital" },
      { slug: "meta-ads", nome: "Meta Ads", legenda: "Facebook e Instagram" },
      { slug: "google-ads", nome: "Google Ads" },
      { slug: "tiktok-ads", nome: "TikTok Ads" },
      { slug: "copywriting", nome: "Copywriting & Persuasão" },
      { slug: "funil-vendas", nome: "Funil de Vendas + CRM" },
      { slug: "seo", nome: "SEO", legenda: "Otimização para Buscadores" },
      { slug: "redes-sociais", nome: "Gestão de Redes Sociais" },
      { slug: "ecommerce", nome: "E-commerce & Vendas Online" },
    ],
  },
];

function ParticularLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(true);
  const [gruposOpen, setGruposOpen] = useState<Record<string, boolean>>({});
  const [dark, setDark] = useState(false);

  // Lê a preferência salva no mount (inicia em false p/ casar com o SSR e evitar mismatch).
  useEffect(() => {
    setDark(localStorage.getItem(DARK_KEY) === "true");
  }, []);

  const toggleDark = () =>
    setDark((d) => {
      const next = !d;
      localStorage.setItem(DARK_KEY, String(next));
      return next;
    });

  const toggleGrupo = (id: string) =>
    setGruposOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Categoria do curso atual (se a rota for uma página de curso) — usada pra "herdar"
  // a cor de destaque daquele curso na sidebar (borda, ícone e item ativos).
  const activeSlug = pathname.startsWith("/particular/cursos/")
    ? pathname.slice("/particular/cursos/".length).split("/")[0]
    : null;
  const activeGroup = activeSlug
    ? GRUPOS.find((g) => g.cursos.some((c) => c.slug === activeSlug))
    : undefined;
  const activeTheme = activeGroup ? SKINS[activeGroup.id].theme : BRAND_THEME;

  // Ao entrar numa página de curso, garante que o grupo dela esteja expandido
  // na sidebar (senão o highlight fica escondido atrás de um dropdown fechado).
  useEffect(() => {
    if (activeGroup) {
      setCursosOpen(true);
      setGruposOpen((prev) => ({ ...prev, [activeGroup.id]: true }));
    }
  }, [activeGroup]);

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
        style={themeVars(activeTheme)}
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
        <div
          className={[
            "flex shrink-0 border-b border-neutral-200 dark:border-neutral-800",
            collapsed
              ? "flex-col items-center gap-2 px-2 py-3"
              : "h-16 flex-row items-center gap-1.5 px-2.5",
          ].join(" ")}
        >
          {/* Logo — tamanho maior quando colapsado para melhor resolução */}
          <Img
            name="logo"
            alt="Santos Tech"
            width={192}
            height={192}
            sizesAttr="40px"
            className={collapsed ? "h-10 w-10 shrink-0" : "h-8 w-8 shrink-0"}
          />

          {/* Texto — some quando colapsado */}
          <div
            className={[
              "flex min-w-0 flex-1 flex-col items-start leading-none overflow-hidden transition-[opacity,max-width] duration-300",
              collapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100",
            ].join(" ")}
          >
            <span className="whitespace-nowrap text-[8px] font-light uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-0.5">Escola</span>
            <div className="flex min-w-0 items-center gap-1">
              <span className="min-w-0 truncate text-xs font-black tracking-tight text-neutral-900 dark:text-white">
                SANTOS TECH
              </span>
              <span className="shrink-0 inline-flex items-center rounded-md bg-neutral-900 dark:bg-white px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white dark:text-neutral-900">
                particular
              </span>
            </div>
          </div>

          {/* Botão recolher (expandido) ou expandir (colapsado) — sempre no cabeçalho */}
          {!collapsed ? (
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Recolher menu"
              className="ml-auto hidden lg:flex shrink-0 rounded-md p-1 text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <PanelLeftClose className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCollapsed(false)}
              aria-label="Expandir menu"
              className="hidden lg:flex items-center justify-center rounded-lg p-1.5 text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <PanelLeftOpen className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-4 space-y-0.5">

          {/* Início */}
          <Link
            to="/particular"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? "Início" : undefined}
            className={navItem(pathname === "/particular")}
          >
            <Home className={`h-4 w-4 shrink-0 ${iconCls(pathname === "/particular")}`} />
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
                {GRUPOS.map(({ id, label: lbl, cursos }) => {
                  const isActiveGroup = activeGroup?.id === id;
                  return (
                    <div key={id}>
                      {/* Botão do grupo — herda a cor do curso atual quando é o grupo ativo */}
                      <button
                        type="button"
                        onClick={() => toggleGrupo(id)}
                        className={[
                          "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wider transition-colors",
                          isActiveGroup
                            ? "text-(--accent) bg-(--accent)/[0.06] hover:bg-(--accent)/10"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/[0.07]",
                        ].join(" ")}
                      >
                        <span className="flex-1 text-left line-clamp-2">{lbl}</span>
                        <ChevronDown
                          className={[
                            "h-3 w-3 shrink-0 transition-transform duration-200",
                            isActiveGroup ? "text-(--accent)" : "",
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
                          <div
                            className={[
                              "ml-2 border-l pl-2 pb-1 space-y-0.5 transition-colors",
                              isActiveGroup
                                ? "border-(--accent)/40"
                                : "border-neutral-100 dark:border-neutral-800/60",
                            ].join(" ")}
                          >
                            {cursos.map(({ slug, nome, legenda }) => {
                              const isActiveCourse = pathname === `/particular/cursos/${slug}`;
                              return (
                                <Link
                                  key={slug}
                                  to={`/particular/cursos/${slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  title={legenda ? `${nome} — ${legenda}` : nome}
                                  className={[
                                    "flex min-w-0 flex-col rounded-lg px-3 py-1.5 leading-tight transition-colors",
                                    isActiveCourse
                                      ? "bg-(--accent)/10 text-(--accent)"
                                      : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/[0.07] hover:text-neutral-900 dark:hover:text-white",
                                  ].join(" ")}
                                >
                                  <span className="line-clamp-2 text-sm font-medium">{nome}</span>
                                  {legenda && (
                                    <span
                                      className={[
                                        "truncate text-xs",
                                        isActiveCourse
                                          ? "text-(--accent)/70"
                                          : "text-neutral-400 dark:text-neutral-500",
                                      ].join(" ")}
                                    >
                                      {legenda}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

        </nav>

        {/* Rodapé */}
        <div className="shrink-0 border-t border-neutral-200 dark:border-neutral-800 p-3 space-y-2">
          <button
            type="button"
            onClick={toggleDark}
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
        <div className="flex h-14 shrink-0 items-center border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 lg:hidden">
          {/* Logo + nome — esquerda */}
          <div className="flex items-center gap-2">
            <Img name="logo" alt="Santos Tech" width={28} height={28} className="h-7 w-7 shrink-0" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[8px] font-light uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-0.5">Escola</span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-neutral-900 dark:text-white">SANTOS TECH</span>
                <span className="inline-flex items-center rounded-md bg-neutral-900 dark:bg-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white dark:text-neutral-900">
                  particular
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1" />

          {/* Login — direita */}
          <a
            href="https://auth.santos-tech.com"
            className="rounded-lg bg-neutral-900 dark:bg-white px-4 py-1.5 text-xs font-bold text-white dark:text-neutral-900 transition hover:bg-neutral-700 dark:hover:bg-neutral-100"
          >
            Login
          </a>

          {/* Hambúrguer — direita */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menu"
            className="ml-2 rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/[0.07] dark:text-neutral-400 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  );
}
