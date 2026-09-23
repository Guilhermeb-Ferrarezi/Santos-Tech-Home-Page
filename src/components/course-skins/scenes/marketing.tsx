import { GripVertical, MousePointer2, CalendarCheck2, Heart } from "lucide-react";
import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";
import { Avatar, Float, Label, Phone, Spark } from "@/components/course-skins/scenes/marketing-kit";
import { FeedAdScene, SearchAdScene, VerticalVideoScene } from "@/components/course-skins/scenes/marketing-ads";
import { CopyScene, RankingScene, StoreScene } from "@/components/course-skins/scenes/marketing-web";

/**
 * Arte do hero da categoria Marketing & Negócios. A `variante` do curso escolhe
 * a cena; sem variante conhecida, mostra a visão geral de canais.
 */
export function MarketingScene({ theme, variante }: { theme: CourseTheme; variante?: string }) {
  switch (variante) {
    case "meta-ads":
      return <FeedAdScene theme={theme} />;
    case "google-ads":
      return <SearchAdScene theme={theme} />;
    case "tiktok-ads":
      return <VerticalVideoScene theme={theme} />;
    case "copywriting":
      return <CopyScene theme={theme} />;
    case "funil-vendas":
      return <PipelineScene theme={theme} />;
    case "seo":
      return <RankingScene theme={theme} />;
    case "redes-sociais":
      return <CalendarScene theme={theme} />;
    case "ecommerce":
      return <StoreScene theme={theme} />;
    default:
      return <ChannelsScene theme={theme} />;
  }
}

// ── Marketing Digital: visão geral de canais ─────────────────────────────────

function ChannelsScene({ theme }: { theme: CourseTheme }) {
  const canais = [
    { nome: "Busca paga", v: 0.82, c: theme.accent },
    { nome: "Social", v: 0.64, c: theme.accent2 },
    { nome: "Orgânico", v: 0.48, c: "#fb923c" },
    { nome: "E-mail", v: 0.3, c: "#ffffff70" },
  ];
  return (
    <>
      <AppWindow title="painel · todos os canais" className="left-0 top-[7%] w-[94%] sm:w-[88%]">
        <div className="grid grid-cols-3 border-b border-white/10">
          {[
            ["Alcance", "48,2 mil", [3, 4, 4, 6, 7, 9]],
            ["Cliques", "3.910", [2, 3, 5, 4, 6, 8]],
            ["Leads", "212", [1, 2, 2, 3, 5, 6]],
          ].map(([t, v, s], i) => (
            <div key={t as string} className={`px-2.5 py-2 ${i ? "border-l border-white/10" : ""}`}>
              <Label>{t as string}</Label>
              <p className="mt-0.5 text-[12px] font-black leading-none text-white sm:text-[14px]">{v as string}</p>
              <Spark values={s as number[]} color={i === 0 ? theme.accent : theme.accent2} className="mt-1.5 h-4 w-full" area={false} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-3 p-3">
          <div>
            <div className="flex items-center justify-between gap-2">
              <Label>Visitas por semana</Label>
              <div className="flex gap-2 text-[7.5px] text-white/55 sm:text-[8.5px]">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-2.5 rounded-full" style={{ background: theme.accent }} /> Pago
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-2.5 rounded-full" style={{ background: theme.accent2 }} /> Orgânico
                </span>
              </div>
            </div>
            <svg viewBox="0 0 160 80" className="mt-1.5 w-full" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="0" x2="160" y1={10 + i * 20} y2={10 + i * 20} stroke="#fff" strokeOpacity="0.06" />
              ))}
              <path d="M0 62 L22 58 L44 60 L66 48 L88 44 L110 36 L132 28 L160 18 L160 80 L0 80 Z" fill={theme.accent} fillOpacity="0.22" />
              <path d="M0 62 L22 58 L44 60 L66 48 L88 44 L110 36 L132 28 L160 18" fill="none" stroke={theme.accent} strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M0 70 L22 68 L44 66 L66 64 L88 58 L110 56 L132 50 L160 46" fill="none" stroke={theme.accent2} strokeWidth="2" strokeDasharray="4 3" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <Label>Leads por canal</Label>
            <div className="mt-2 space-y-2">
              {canais.map((c) => (
                <div key={c.nome}>
                  <p className="text-[8.5px] text-white/70 sm:text-[9.5px]">{c.nome}</p>
                  <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full" style={{ width: `${c.v * 100}%`, background: c.c }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AppWindow>

      {/* Mini funil */}
      <Float className="animate-float-y bottom-[3%] left-[3%] w-[42%] sm:bottom-[4%] sm:w-[34%]">
        <Label>Funil</Label>
        <div className="mt-1.5 flex flex-col items-center gap-[3px]">
          {["Atenção", "Interesse", "Desejo", "Ação"].map((t, i) => (
            <span
              key={t}
              className="flex h-4 items-center justify-center text-[7.5px] font-bold sm:h-[18px] sm:text-[8.5px]"
              style={{
                width: `${100 - i * 18}%`,
                background: `color-mix(in srgb, ${theme.accent} ${i * 33}%, ${theme.accent2})`,
                color: i < 2 ? "#1b1216" : "#fff",
                clipPath: "polygon(0 0, 100% 0, 94% 100%, 6% 100%)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </Float>

      {/* Notificação */}
      <Float className="animate-float-slow bottom-[14%] right-0 w-[44%] sm:bottom-[16%] sm:w-[36%]">
        <div className="flex items-center gap-2">
          <Avatar color={theme.accent} className="h-6 w-6" />
          <div className="min-w-0 leading-tight">
            <p className="text-[9px] font-bold text-white sm:text-[10px]">Novo lead</p>
            <p className="truncate text-[8px] text-white/50 sm:text-[9px]">via formulário · agora</p>
          </div>
        </div>
      </Float>
    </>
  );
}

// ── Funil de Vendas + CRM ─────────────────────────────────────────────────────

function PipelineScene({ theme }: { theme: CourseTheme }) {
  const etapas = [
    ["Visitantes", "2.400"],
    ["Leads", "380"],
    ["Oportunidades", "96"],
    ["Clientes", "31"],
  ];
  const colunas = [
    { t: "Novo", cards: [["Ana P.", "R$ 1,2 mil"], ["Loja Sol", "R$ 800"]] },
    { t: "Contato", cards: [["Clínica Vida", "R$ 2,4 mil"]] },
    { t: "Proposta", cards: [["Studio K", "R$ 3,1 mil"]] },
    { t: "Fechado", cards: [["Pet Mania", "R$ 1,9 mil"]], won: true },
  ];
  return (
    <>
      {/* Funil */}
      <Float className="left-[2%] top-[4%] w-[62%] sm:left-[4%] sm:w-[50%]">
        <Label>Funil do mês</Label>
        <div className="mt-2 space-y-[3px]">
          {etapas.map(([t, n], i) => (
            <div key={t} className="flex justify-center">
              <span
                className="flex h-[22px] items-center justify-between px-[9%] text-[8.5px] font-bold sm:h-6 sm:text-[9.5px]"
                style={{
                  width: `${100 - i * 17}%`,
                  background: `color-mix(in srgb, ${theme.accent} ${i * 33}%, ${theme.accent2})`,
                  color: i < 2 ? "#1b1216" : "#fff",
                  clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)",
                }}
              >
                <span className="truncate">{t}</span>
                <span className="font-mono">{n}</span>
              </span>
            </div>
          ))}
        </div>
      </Float>

      {/* Quadro do CRM */}
      <AppWindow title="crm · pipeline de vendas" className="bottom-[4%] right-0 w-[96%] sm:bottom-[6%] sm:w-[84%]">
        <div className="grid grid-cols-4 gap-1.5 p-2">
          {colunas.map((col, ci) => (
            <div key={col.t} className="min-w-0 rounded-md bg-white/[0.04] p-1">
              <p className="flex items-center justify-between px-0.5 text-[7.5px] font-bold uppercase tracking-wide text-white/55 sm:text-[8.5px]">
                <span className="truncate">{col.t}</span>
                <span className="text-white/30">{col.cards.length}</span>
              </p>
              <div className="mt-1 space-y-1">
                {col.cards.map(([n, v]) => (
                  <div
                    key={n}
                    className="rounded border border-white/10 bg-[#1c1418] p-1"
                    style={col.won ? { borderColor: `${theme.accent2}88` } : undefined}
                  >
                    <p className="truncate text-[8px] font-bold text-white/85 sm:text-[9px]">{n}</p>
                    <p className="font-mono text-[7.5px] text-white/45 sm:text-[8.5px]">{v}</p>
                  </div>
                ))}
                {ci === 2 && <div className="h-7 rounded border border-dashed" style={{ borderColor: `${theme.accent}99`, background: `${theme.accent}12` }} />}
              </div>
            </div>
          ))}
        </div>
      </AppWindow>

      {/* Card sendo arrastado para "Proposta" */}
      <div
        className="animate-float-slow absolute bottom-[9%] right-[29%] w-[22%] rotate-[-6deg] rounded-md border bg-[#241a1e] p-1.5 shadow-[0_18px_30px_-10px_rgba(0,0,0,0.9)] sm:bottom-[10%] sm:right-[24%] sm:w-[19%]"
        style={{ borderColor: theme.accent }}
      >
        <div className="flex items-center gap-1">
          <GripVertical className="h-2.5 w-2.5 shrink-0 text-white/40" />
          <p className="truncate text-[8px] font-bold text-white sm:text-[9px]">Padaria Pão Bom</p>
        </div>
        <p className="pl-3.5 font-mono text-[7.5px] text-white/50 sm:text-[8.5px]">R$ 1,5 mil</p>
        <MousePointer2 className="absolute -bottom-3 -right-2 h-4 w-4 fill-white text-[#1b1216]" />
      </div>

      {/* Automação */}
      <Float className="animate-float-y right-[1%] top-[10%] w-[34%] sm:right-[3%] sm:w-[30%]">
        <Label>Automação</Label>
        <p className="mt-1 text-[8.5px] leading-snug text-white/75 sm:text-[9.5px]">
          Lead novo <span style={{ color: theme.accent2 }}>→</span> e-mail de boas-vindas <span style={{ color: theme.accent2 }}>→</span> tarefa pro vendedor
        </p>
      </Float>
    </>
  );
}

// ── Gestão de Redes Sociais: calendário de conteúdo ──────────────────────────

function CalendarScene({ theme }: { theme: CourseTheme }) {
  const formatos = {
    R: { nome: "Reels", c: theme.accent, t: "#fff" },
    C: { nome: "Carrossel", c: theme.accent2, t: "#1b1216" },
    S: { nome: "Stories", c: "#ffffff30", t: "#fff" },
  } as const;
  type F = keyof typeof formatos;
  // Duas semanas: dia do mês + posts do dia
  const semanas: [number, F[]][][] = [
    [[13, ["C"]], [14, ["S"]], [15, ["R"]], [16, []], [17, ["C", "S"]], [18, ["R"]], [19, []]],
    [[20, ["R"]], [21, ["S"]], [22, ["C"]], [23, ["S"]], [24, ["R", "C"]], [25, []], [26, ["S"]]],
  ];
  return (
    <>
      <AppWindow title="calendário editorial · outubro" className="left-0 top-[7%] w-[94%] sm:w-[88%]">
        <div className="p-2.5">
          <div className="grid grid-cols-7 gap-1 text-center text-[7.5px] font-bold uppercase text-white/40 sm:text-[8.5px]">
            {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          {semanas.map((sem, si) => (
            <div key={si} className="mt-1 grid grid-cols-7 gap-1">
              {sem.map(([dia, posts]) => {
                const hoje = dia === 17;
                return (
                  <div
                    key={dia}
                    className="flex min-h-[46px] flex-col gap-[3px] rounded-md border p-1 sm:min-h-[54px]"
                    style={{
                      borderColor: hoje ? theme.accent : "rgba(255,255,255,0.08)",
                      background: hoje ? `${theme.accent}14` : "rgba(255,255,255,0.025)",
                    }}
                  >
                    <span className={`text-[8px] font-bold sm:text-[9px] ${hoje ? "text-white" : "text-white/45"}`}>{dia}</span>
                    {posts.map((p, pi) => (
                      <span
                        key={pi}
                        className="truncate rounded-[3px] px-0.5 text-[6.5px] font-bold leading-[1.5] sm:text-[7.5px]"
                        style={{ background: formatos[p].c, color: formatos[p].t }}
                      >
                        {formatos[p].nome}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
          <div className="mt-2 flex flex-wrap gap-2.5 text-[8px] text-white/55 sm:text-[9px]">
            {Object.values(formatos).map((f) => (
              <span key={f.nome} className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm" style={{ background: f.c }} /> {f.nome}
              </span>
            ))}
          </div>
        </div>
      </AppWindow>

      {/* Perfil: grade de posts */}
      <Phone className="bottom-[2%] right-[1%] w-[32%] sm:bottom-[3%] sm:right-[2%] sm:w-[26%]">
        <div className="px-1.5 pb-1.5 pt-4">
          <div className="flex items-center gap-1">
            <Avatar color={theme.accent} className="h-4 w-4" />
            <span className="truncate text-[7.5px] font-bold text-white sm:text-[8.5px]">@sua.marca</span>
          </div>
          <div className="mt-1.5 grid grid-cols-3 gap-[2px]">
            {[theme.accent, theme.accent2, "#fb923c", "#3a2a30", theme.accent, "#f472b6", theme.accent2, "#3a2a30", theme.accent].map((c, i) => (
              <span key={i} className="relative aspect-square" style={{ background: c, opacity: i % 4 === 3 ? 0.9 : 1 }}>
                {i % 3 === 0 && <span className="absolute inset-[30%] rounded-full bg-white/35" />}
              </span>
            ))}
          </div>
        </div>
      </Phone>

      {/* Post agendado */}
      <Float className="animate-float-y bottom-[5%] left-[2%] w-[56%] sm:bottom-[6%] sm:w-[50%]">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ background: `${theme.accent2}22`, color: theme.accent2 }}>
            <CalendarCheck2 className="h-3.5 w-3.5" />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="text-[9px] font-bold text-white sm:text-[10px]">Agendado · sex, 19h</p>
            <p className="truncate text-[8px] text-white/55 sm:text-[9px]">Carrossel: 5 erros ao abrir uma loja</p>
          </div>
          <Heart className="ml-auto h-3 w-3 shrink-0" style={{ color: theme.accent, fill: theme.accent }} />
        </div>
      </Float>
    </>
  );
}
