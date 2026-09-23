import type { ReactNode } from "react";
import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow, CourseHeroArt } from "@/components/course-hero-art";
import { SheetGrid } from "@/components/course-skins/scenes/office";

/**
 * Cenas do hero da pele Office para cada app da família (Word, PowerPoint,
 * Power BI, Power Apps…). Tudo desenhado aqui com HTML/SVG — nenhuma imagem
 * copiada. As cores de app são tons próprios, só pra evocar cada programa; o
 * acento da página continua o da categoria.
 */

export const APP_COLORS = {
  excel: "#21A366",
  word: "#2B5CB8",
  ppt: "#C94F2A",
  powerbi: "#E8B30F",
  powerapps: "#7E3A8C",
} as const;

type SceneProps = { theme: CourseTheme };

/** Linha de "texto" (barra cinza) usada nos documentos e slides. */
function TextLine({ w, className = "bg-neutral-300" }: { w: string; className?: string }) {
  return <span className={`block h-[4px] rounded-full ${className}`} style={{ width: w }} />;
}

function FloatCard({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`absolute rounded-xl border border-white/10 bg-[#141414]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
}

// ── Word: documento com régua e parágrafos formatados ─────────────────────────

export function WordScene({ theme }: SceneProps) {
  const c = APP_COLORS.word;
  return (
    <>
      <AppWindow title="proposta_comercial.docx" className="left-0 top-[9%] w-[88%]">
        {/* Faixa de formatação */}
        <div className="flex items-center gap-1 border-b border-white/10 px-3 py-1.5 text-[10px] text-white/70">
          <span className="rounded px-1 font-serif font-bold">N</span>
          <span className="rounded px-1 font-serif italic">I</span>
          <span className="rounded px-1 font-serif underline">S</span>
          <span className="mx-1 h-3 w-px bg-white/15" />
          {["Normal", "Título 1", "Título 2"].map((s, i) => (
            <span
              key={s}
              className="rounded-sm border px-1.5 py-px text-[9px]"
              style={i === 1 ? { borderColor: c, color: "#fff", background: `${c}40` } : { borderColor: "#ffffff1a" }}
            >
              {s}
            </span>
          ))}
        </div>
        {/* Régua com recuos */}
        <div className="relative mx-[7%] mt-2 h-3 border-b border-white/15">
          <div
            className="absolute inset-x-[8%] bottom-0 h-1.5"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, #ffffff40 0 1px, transparent 1px 12px)",
            }}
          />
          <svg viewBox="0 0 10 8" className="absolute bottom-0 left-[8%] h-2 w-2.5 -translate-x-1/2" style={{ fill: c }}>
            <path d="M0 0 H10 L5 8 Z" />
          </svg>
          <svg viewBox="0 0 10 8" className="absolute bottom-0 right-[8%] h-2 w-2.5 translate-x-1/2" style={{ fill: c }}>
            <path d="M5 0 L10 8 H0 Z" />
          </svg>
        </div>
        {/* Página */}
        <div className="bg-[#1b1b1b] px-[7%] pt-2">
          <div className="space-y-2 rounded-t-sm bg-white px-[9%] pb-5 pt-4 text-neutral-900">
            <p className="text-[8px] font-bold uppercase tracking-[0.2em]" style={{ color: c }}>
              Proposta comercial
            </p>
            <p className="font-serif text-[15px] font-bold leading-tight sm:text-[17px]">Plano de expansão 2026</p>
            <div className="space-y-1.5">
              <TextLine w="100%" />
              <TextLine w="96%" />
              <TextLine w="72%" />
            </div>
            <p className="pt-1 text-[10px] font-bold" style={{ color: c }}>
              1. Objetivos
            </p>
            {["88%", "74%", "80%"].map((w) => (
              <div key={w} className="flex items-center gap-1.5">
                <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                <TextLine w={w} />
              </div>
            ))}
            {/* Trecho com alteração controlada */}
            <div className="flex items-center gap-1">
              <TextLine w="38%" />
              <span className="block h-[5px] w-[30%] rounded-full" style={{ background: `${c}55`, boxShadow: `0 2px 0 ${c}` }} />
              <TextLine w="20%" />
            </div>
          </div>
        </div>
      </AppWindow>

      {/* Sumário automático */}
      <FloatCard className="animate-float-y bottom-[3%] left-[4%] w-[50%]">
        <p className="text-[10px] font-bold text-white/70">Sumário</p>
        <div className="mt-2 space-y-1 text-[9px] text-white/60 sm:text-[10px]">
          {[
            ["1. Objetivos", "2"],
            ["2. Cronograma", "4"],
            ["3. Investimento", "7"],
          ].map(([t, p]) => (
            <div key={t} className="flex items-end gap-1">
              <span className="shrink-0">{t}</span>
              <span className="mb-[3px] flex-1 border-b border-dotted border-white/25" />
              <span className="font-mono" style={{ color: theme.accent2 }}>
                {p}
              </span>
            </div>
          ))}
        </div>
      </FloatCard>

      {/* Comentário de revisão */}
      <div
        className="absolute bottom-[16%] right-[1%] max-w-[44%] rounded-xl border px-3 py-2 shadow-lg"
        style={{ borderColor: `${c}99`, background: "#141414f2" }}
      >
        <p className="text-[10px] font-bold" style={{ color: "#8fb3f5" }}>
          Revisão · Ana
        </p>
        <p className="mt-0.5 text-[10px] leading-snug text-white/65">Prazo ajustado para março ✓</p>
      </div>
    </>
  );
}

// ── PowerPoint: slide com miniaturas laterais ─────────────────────────────────

function MiniSlide({ variant }: { variant: number }) {
  return (
    <div className="flex aspect-video flex-col justify-center gap-[3px] rounded-[2px] bg-white px-[12%]">
      {variant === 0 ? (
        <>
          <span className="block h-[3px] w-[70%] rounded-full" style={{ background: APP_COLORS.ppt }} />
          <span className="block h-[2px] w-[45%] rounded-full bg-neutral-300" />
        </>
      ) : variant === 2 ? (
        <div className="flex h-[55%] items-end gap-[2px]">
          {[0.5, 0.8, 0.35, 1].map((h, i) => (
            <span key={i} className="block flex-1 rounded-[1px] bg-neutral-300" style={{ height: `${h * 100}%` }} />
          ))}
        </div>
      ) : (
        <>
          <span className="block h-[3px] w-[55%] rounded-full bg-neutral-700" />
          <span className="block h-[2px] w-[80%] rounded-full bg-neutral-300" />
          <span className="block h-[2px] w-[65%] rounded-full bg-neutral-300" />
        </>
      )}
    </div>
  );
}

export function PowerPointScene({ theme }: SceneProps) {
  const c = APP_COLORS.ppt;
  const bars = [0.38, 0.55, 0.7, 0.95];
  return (
    <>
      <AppWindow title="pitch_2026.pptx" className="left-0 top-[9%] w-[90%]">
        <div className="grid grid-cols-[23%_1fr]">
          {/* Miniaturas */}
          <div className="space-y-1.5 border-r border-white/10 p-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-1">
                <span className="w-2 shrink-0 font-mono text-[8px] text-white/40">{i + 1}</span>
                <div
                  className="flex-1 rounded-[3px] p-[2px]"
                  style={{ outline: i === 1 ? `2px solid ${c}` : "1px solid #ffffff1a" }}
                >
                  <MiniSlide variant={i === 1 ? 2 : i === 0 ? 0 : 1} />
                </div>
              </div>
            ))}
          </div>
          {/* Slide ativo */}
          <div className="flex items-center bg-[#1b1b1b] p-2.5 sm:p-3">
            <div className="relative grid aspect-video w-full grid-cols-[1fr_0.9fr] gap-2 overflow-hidden rounded-sm bg-white p-[6%] text-neutral-900">
              <span className="absolute inset-y-0 left-0 w-1" style={{ background: c }} />
              <div className="flex flex-col justify-center">
                <p className="text-[7px] font-bold uppercase tracking-widest" style={{ color: c }}>
                  Resultados
                </p>
                <p className="mt-0.5 text-[11px] font-black leading-tight sm:text-[13px]">Crescemos 3× em um ano</p>
                <div className="mt-1.5 space-y-1">
                  <TextLine w="90%" className="bg-neutral-200" />
                  <TextLine w="70%" className="bg-neutral-200" />
                </div>
              </div>
              <div className="flex items-end gap-[6%] border-b border-neutral-200 pb-px">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="block flex-1 rounded-t-[2px]"
                    style={{ height: `${h * 88}%`, background: i === 3 ? c : `${c}40` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Anotações do orador */}
        <div className="flex items-center gap-2 border-t border-white/10 px-3 py-1.5 text-[9px] text-white/45">
          <span className="font-bold text-white/60">Anotações:</span>
          <span className="truncate">contar a história antes de mostrar o número</span>
        </div>
      </AppWindow>

      {/* Modo apresentador */}
      <FloatCard className="animate-float-y bottom-[3%] left-[5%] w-[48%]">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-white/70">Modo apresentador</p>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
        </div>
        <p className="mt-1.5 font-mono text-lg font-black leading-none" style={{ color: theme.accent2 }}>
          00:12:48
        </p>
        <p className="mt-1 text-[9px] text-white/50">Próximo: 3 · Metas para 2027</p>
      </FloatCard>

      {/* Transição */}
      <div
        className="absolute bottom-[18%] right-[1%] rounded-xl border px-3 py-2 shadow-lg"
        style={{ borderColor: `${c}99`, background: "#141414f2" }}
      >
        <p className="text-[9px] uppercase tracking-wider text-white/45">Transição</p>
        <p className="text-[11px] font-bold text-white">Transformar</p>
      </div>
    </>
  );
}

// ── Power BI: painel com visuais ──────────────────────────────────────────────

function Kpi({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
      <p className="truncate text-[8px] text-white/45">{label}</p>
      <p className="text-[12px] font-black leading-tight sm:text-sm" style={{ color }}>
        {value}
      </p>
    </div>
  );
}

function Donut({ color, rest }: { color: string; rest: string }) {
  const r = 15;
  const len = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
      <circle cx="20" cy="20" r={r} fill="none" stroke={rest} strokeWidth="7" />
      <circle cx="20" cy="20" r={r} fill="none" stroke={color} strokeWidth="7" strokeDasharray={`${len * 0.62} ${len}`} />
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="7"
        strokeDasharray={`${len * 0.18} ${len}`}
        strokeDashoffset={-len * 0.62}
      />
    </svg>
  );
}

function Dashboard({ theme, compact = false }: { theme: CourseTheme; compact?: boolean }) {
  const y = APP_COLORS.powerbi;
  const line = "0,34 20,30 40,31 60,22 80,24 100,14 120,16 140,6";
  return (
    <div className="space-y-1.5 bg-[#161616] p-2">
      <div className={`grid gap-1.5 ${compact ? "grid-cols-2" : "grid-cols-3"}`}>
        <Kpi label="Receita" value="R$ 1,28 mi" color="#fff" />
        <Kpi label="Margem" value="31,4%" color={y} />
        {!compact && <Kpi label="Clientes" value="2.418" color={theme.accent2} />}
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] gap-1.5">
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
          <p className="text-[8px] text-white/45">Receita por mês</p>
          <svg viewBox="0 0 140 40" className="mt-1 w-full" preserveAspectRatio="none">
            <polygon points={`${line} 140,40 0,40`} fill={y} fillOpacity="0.18" />
            <polyline points={line} fill="none" stroke={y} strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col rounded-md border border-white/10 bg-white/[0.04] p-1.5">
          <p className="text-[8px] text-white/45">Por canal</p>
          <div className="mx-auto mt-1 aspect-square w-[70%]">
            <Donut color={y} rest={`${theme.accent}88`} />
          </div>
        </div>
      </div>
      {!compact && (
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
          {[
            ["Sudeste", 0.92],
            ["Nordeste", 0.58],
            ["Sul", 0.5],
          ].map(([r, v]) => (
            <div key={r} className="flex items-center gap-1.5 py-[2px] text-[8px] text-white/55">
              <span className="w-12 shrink-0 truncate">{r}</span>
              <span className="block h-[5px] rounded-full" style={{ width: `${Number(v) * 70}%`, background: y }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function PowerBiScene({ theme }: SceneProps) {
  const y = APP_COLORS.powerbi;
  return (
    <>
      <AppWindow title="vendas_2026.pbix" className="left-0 top-[5%] w-[88%]">
        <Dashboard theme={theme} />
        {/* Páginas do relatório */}
        <div className="flex items-center gap-3 border-t border-white/10 px-3 py-1 text-[9px] text-white/45">
          {["Visão geral", "Regiões", "Produtos"].map((p, i) => (
            <span
              key={p}
              className={i === 0 ? "font-bold text-white" : ""}
              style={i === 0 ? { boxShadow: `0 2px 0 ${y}` } : undefined}
            >
              {p}
            </span>
          ))}
        </div>
      </AppWindow>

      {/* Medida DAX */}
      <FloatCard className="animate-float-y bottom-[1%] left-[3%] w-[66%] !py-2.5">
        <p className="text-[10px] font-bold text-white/70">Nova medida</p>
        <p className="mt-1 font-mono text-[9px] leading-relaxed text-white/60 sm:text-[10px]">
          <span style={{ color: y }}>Receita YoY</span> =
          <span className="block truncate">
            <span className="text-white/85">DIVIDE</span>([Receita]; [Receita LY]) - 1
          </span>
        </p>
      </FloatCard>

      {/* Segmentação */}
      <div
        className="absolute bottom-[4%] right-[1%] rounded-xl border px-3 py-2 shadow-lg"
        style={{ borderColor: `${y}99`, background: "#141414f2" }}
      >
        <p className="text-[9px] uppercase tracking-wider text-white/45">Ano</p>
        <p className="text-[11px] font-bold text-white">2026 ▾</p>
      </div>
    </>
  );
}

// ── Power Apps + Power Automate: tela de app + fluxo ──────────────────────────

function FlowStep({ color, title, sub }: { color: string; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-2 py-1.5">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px]" style={{ background: color }}>
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[9px] font-bold text-white/85">{title}</p>
        <p className="truncate text-[8px] text-white/45">{sub}</p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 8 14" className="h-3 w-2">
        <path d="M4 0 V11 M1 8 L4 12 L7 8" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export function PowerAppsScene({ theme }: SceneProps) {
  const p = APP_COLORS.powerapps;
  const items = [
    ["Notebook — TI", "Aprovado", theme.accent],
    ["Cadeiras — RH", "Pendente", "#E8B30F"],
    ["Licenças — Vendas", "Aprovado", theme.accent],
  ] as const;
  return (
    <>
      {/* Tela do app (celular) */}
      <div className="absolute left-0 top-[5%] w-[46%] overflow-hidden rounded-[18px] border-[3px] border-[#2a2a2a] bg-[#101010] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="px-2.5 pb-2 pt-2.5 text-white" style={{ background: p }}>
          <p className="text-[8px] opacity-70">App de Solicitações</p>
          <p className="text-[12px] font-black">Minhas compras</p>
        </div>
        <div className="space-y-1.5 p-2">
          {items.map(([t, s, col]) => (
            <div key={t} className="flex items-center gap-1.5 rounded-md bg-white/[0.05] p-1.5">
              <span className="h-5 w-5 shrink-0 rounded-full" style={{ background: `${p}66` }} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[8px] font-bold text-white/80 sm:text-[9px]">{t}</p>
                <span
                  className="mt-0.5 inline-block rounded-sm px-1 text-[7px] font-bold"
                  style={{ background: `${col}33`, color: col }}
                >
                  {s}
                </span>
              </div>
            </div>
          ))}
          <div className="rounded-md py-1.5 text-center text-[9px] font-bold text-white" style={{ background: p }}>
            + Nova solicitação
          </div>
        </div>
      </div>

      {/* Fluxo de automação */}
      <AppWindow title="Fluxo · aprovação de compra" className="right-0 top-[30%] w-[58%]">
        <div className="p-2">
          <FlowStep color={p} title="Quando um item é criado" sub="Lista de solicitações" />
          <Connector />
          <FlowStep color="#2B5CB8" title="Iniciar aprovação" sub="Gestor da área" />
          <Connector />
          <div className="grid grid-cols-2 gap-1.5">
            <FlowStep color={theme.accent} title="Se sim" sub="Enviar e-mail" />
            <FlowStep color="#C94F2A" title="Se não" sub="Avisar no Teams" />
          </div>
        </div>
      </AppWindow>

      {/* Execução */}
      <div
        className="animate-float-y absolute bottom-[5%] left-[5%] rounded-xl border px-3 py-2 shadow-lg"
        style={{ borderColor: `${theme.accent}88`, background: "#141414f2" }}
      >
        <p className="text-[11px] font-bold" style={{ color: theme.accent2 }}>
          ✓ Fluxo executado
        </p>
        <p className="mt-0.5 text-[9px] text-white/55">há 2 s · 148 execuções no mês</p>
      </div>
    </>
  );
}

// ── Excel + IA: planilha com painel de copiloto ───────────────────────────────

const PLANILHA_IA = [
  ["Cliente", "Pedido", "Valor", "Status"],
  ["Mercado Sol", "#1042", "3.420", "Pago"],
  ["Padaria Lua", "#1043", "860", "Atraso"],
  ["Ótica Vista", "#1044", "1.975", "Pago"],
  ["Pet Amigo", "#1045", "2.310", "Aberto"],
  ["Café Grão", "#1046", "740", "Pago"],
];

export function ExcelIaScene({ theme }: SceneProps) {
  return (
    <>
      <AppWindow title="pedidos_setembro.xlsx" className="left-0 top-[8%] w-[84%]">
        <SheetGrid accent={theme.accent} formula={`=FILTRO(Pedidos;Pedidos[Status]="Atraso")`} rows={PLANILHA_IA} selected={[2, 3]} />
      </AppWindow>

      {/* Painel do copiloto */}
      <div className="animate-float-y absolute bottom-[3%] right-0 w-[64%] overflow-hidden rounded-xl border border-white/10 bg-[#141414]/95 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
          <span className="text-[11px]" style={{ color: theme.accent2 }}>
            ✦
          </span>
          <span className="text-[10px] font-bold text-white/80">Assistente de IA</span>
        </div>
        <div className="space-y-1.5 p-2.5">
          <p className="ml-auto w-fit max-w-[90%] rounded-lg rounded-br-sm bg-white/10 px-2 py-1 text-[9px] text-white/80">
            Quais pedidos estão atrasados?
          </p>
          <p className="text-[9px] text-white/55">Sugestão de fórmula:</p>
          <p
            className="truncate rounded-md border px-2 py-1 font-mono text-[9px] text-white"
            style={{ borderColor: `${theme.accent}88`, background: `${theme.accent}1f` }}
          >
            =FILTRO(Pedidos;Pedidos[Status]="Atraso")
          </p>
          <div className="flex gap-1.5">
            <span className="rounded-sm px-2 py-0.5 text-[9px] font-bold text-white" style={{ background: theme.accent }}>
              Inserir
            </span>
            <span className="rounded-sm border border-white/15 px-2 py-0.5 text-[9px] text-white/60">Explicar</span>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Excel + Power BI: planilha alimentando o painel ───────────────────────────

const PLANILHA_BI = [
  ["Mês", "Receita", "Custo", "Margem"],
  ["Jan", "98.400", "67.100", "31,8%"],
  ["Fev", "104.900", "71.300", "32,0%"],
  ["Mar", "121.200", "82.000", "32,3%"],
];

export function ExcelPowerBiScene({ theme }: SceneProps) {
  const y = APP_COLORS.powerbi;
  return (
    <>
      <AppWindow title="base_vendas.xlsx" className="left-0 top-[6%] w-[70%]">
        <SheetGrid accent={theme.accent} formula="=Receita - Custo" rows={PLANILHA_BI} selected={[3, 1]} />
      </AppWindow>

      {/* Seta de atualização entre os dois */}
      <div className="absolute right-[14%] top-[33%] flex flex-col items-center gap-1">
        <svg viewBox="0 0 40 50" className="h-10 w-8" fill="none">
          <path d="M6 4 C 30 8, 34 24, 30 44" stroke={y} strokeWidth="2" strokeDasharray="4 4" />
          <path d="M24 38 L30 46 L35 37" stroke={y} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="rounded-full border px-2 py-0.5 text-[9px] font-bold text-white/80" style={{ borderColor: `${y}88`, background: "#141414f2" }}>
          ↻ Atualizar
        </span>
      </div>

      <AppWindow title="painel_vendas.pbix" className="bottom-[3%] right-0 w-[70%]">
        <Dashboard theme={theme} compact />
      </AppWindow>
    </>
  );
}

// ── Pacote Office: os apps juntos ─────────────────────────────────────────────

export function PacoteOfficeScene({ theme }: SceneProps) {
  const w = APP_COLORS.word;
  const pp = APP_COLORS.ppt;
  return (
    <>
      {/* Word, ao fundo */}
      <AppWindow title="relatorio.docx" className="left-0 top-[5%] w-[60%]">
        <div className="h-1 w-full" style={{ background: w }} />
        <div className="bg-[#1b1b1b] px-[8%] pt-2">
          <div className="space-y-1.5 rounded-t-sm bg-white px-[10%] pb-8 pt-3">
            <p className="font-serif text-[11px] font-bold text-neutral-900">Relatório mensal</p>
            <TextLine w="100%" />
            <TextLine w="92%" />
            <TextLine w="64%" />
            <p className="pt-0.5 text-[8px] font-bold" style={{ color: w }}>
              1. Resumo
            </p>
            <TextLine w="86%" />
            <TextLine w="70%" />
          </div>
        </div>
      </AppWindow>

      {/* Excel, no meio */}
      <AppWindow title="orcamento.xlsx" className="right-0 top-[20%] w-[66%]">
        <div className="h-1 w-full" style={{ background: APP_COLORS.excel }} />
        <SheetGrid
          accent={theme.accent}
          formula="=SOMA(B2:B4)"
          rows={[
            ["Item", "Valor", "Total"],
            ["Aluguel", "2.400", "2.400"],
            ["Internet", "180", "2.580"],
            ["Energia", "320", "2.900"],
          ]}
          selected={[3, 2]}
        />
      </AppWindow>

      {/* PowerPoint, à frente */}
      <AppWindow title="apresentacao.pptx" className="animate-float-y bottom-[3%] left-[6%] w-[54%]">
        <div className="h-1 w-full" style={{ background: pp }} />
        <div className="bg-[#1b1b1b] p-2">
          <div className="relative flex aspect-video flex-col justify-center gap-1 overflow-hidden rounded-sm bg-white px-[10%]">
            <span className="absolute inset-y-0 left-0 w-1" style={{ background: pp }} />
            <p className="text-[6px] font-bold uppercase tracking-widest" style={{ color: pp }}>
              Reunião de equipe
            </p>
            <p className="text-[12px] font-black leading-tight text-neutral-900">Metas do trimestre</p>
            <TextLine w="60%" className="bg-neutral-200" />
          </div>
        </div>
      </AppWindow>
    </>
  );
}

// ── Ícones próprios para apps sem logo em src/assets/logos ────────────────────

/** Desenho original (não é a logo oficial) para chaves sem arquivo de logo. */
export function OfficeAppIcon({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  if (name === "powerapps") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="5" fill={APP_COLORS.powerapps} />
        <path d="M12 4.5 L19.5 12 L12 19.5 L4.5 12 Z" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 8.5 L15.5 12 L12 15.5 L8.5 12 Z" fill="#fff" />
      </svg>
    );
  }
  // "office": quatro blocos, um por app da família
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="9.4" height="9.4" rx="2.2" fill={APP_COLORS.word} />
      <rect x="12.6" y="2" width="9.4" height="9.4" rx="2.2" fill={APP_COLORS.excel} />
      <rect x="2" y="12.6" width="9.4" height="9.4" rx="2.2" fill={APP_COLORS.ppt} />
      <rect x="12.6" y="12.6" width="9.4" height="9.4" rx="2.2" fill={APP_COLORS.powerapps} />
    </svg>
  );
}

/** Chaves de logo que não têm arquivo e são desenhadas por `OfficeAppIcon`. */
export const OFFICE_CUSTOM_ICONS = new Set(["office", "powerapps"]);

/** Moldura padrão do hero com selo próprio (Office e Power Apps não têm arquivo de logo). */
export function OfficeHeroArt({ theme, icon, children }: { theme: CourseTheme; icon: ReactNode; children: ReactNode }) {
  return (
    <CourseHeroArt theme={theme} logo="" badge={icon}>
      {children}
    </CourseHeroArt>
  );
}
