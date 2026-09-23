import { ArrowUp, Check, Minus, Plus, Search, ShoppingBag, Star, Truck } from "lucide-react";
import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";
import { Bar, Float, Label, Spark } from "@/components/course-skins/scenes/marketing-kit";

/**
 * Cenas de hero de Copywriting, SEO e E-commerce: texto sendo reescrito,
 * página de resultados com o site subindo de posição e vitrine com carrinho.
 * Marcas, produtos e números são fictícios, só pra ilustrar o painel.
 */

// ── Copywriting: headline reescrita com destaques ────────────────────────────

function Marker({ color, children }: { color: string; children: string }) {
  return (
    <span className="rounded-[3px] px-0.5 [box-decoration-break:clone]" style={{ background: `${color}66` }}>
      {children}
    </span>
  );
}

export function CopyScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="anuncio_padaria_v3.doc" className="left-0 top-[7%] w-[92%] sm:w-[84%]">
        <div className="bg-[#fbf7f1] px-4 pb-4 pt-3 text-[#2a1d18] sm:px-5">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#a08a7c] sm:text-[9px]">Headline</p>
          <p className="mt-1 text-[10px] text-[#a08a7c] line-through decoration-2 sm:text-[11px]" style={{ textDecorationColor: theme.accent }}>
            Nossos pães são de ótima qualidade
          </p>
          <p className="mt-1 text-[15px] font-black leading-[1.15] tracking-tight sm:text-[19px]">
            Pão quentinho <Marker color={theme.accent2}>às 7h</Marker>, <Marker color={theme.accent2}>na sua porta</Marker>
            <span className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[0.12em] animate-pulse" style={{ background: theme.accent }} />
          </p>
          <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#a08a7c] sm:text-[9px]">Texto</p>
          <p className="mt-1 text-[9.5px] leading-relaxed text-[#4a3a33] sm:text-[11px]">
            Você acorda, o café está passando e o pão chega <Marker color={theme.accent2}>ainda morno</Marker>. Sem fila,
            sem sair de casa. <span className="font-bold underline decoration-2 underline-offset-2" style={{ textDecorationColor: theme.accent }}>Assine a
            primeira semana</span> e escolha o horário.
          </p>
          <div className="mt-3 flex gap-1.5">
            <span className="rounded-md px-2 py-1 text-[9px] font-black text-white sm:text-[10px]" style={{ background: theme.accent }}>
              Quero meu pão às 7h
            </span>
            <span className="rounded-md border border-[#e3d6cc] px-2 py-1 text-[9px] text-[#a08a7c] line-through sm:text-[10px]">Saiba mais</span>
          </div>
        </div>
      </AppWindow>

      {/* Comentários de revisão */}
      <Float className="animate-float-slow bottom-[24%] left-0 w-[46%] sm:bottom-[8%] sm:left-[1%] sm:w-[38%]">
        <div className="flex gap-1.5">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={{ background: theme.accent2 }} />
          <p className="text-[8.5px] leading-snug text-white/80 sm:text-[9.5px]">
            <span className="font-bold text-white">Especificidade:</span> hora e lugar concretos convencem mais.
          </p>
        </div>
      </Float>

      {/* Teste A/B de headline */}
      <Float className="animate-float-y bottom-[3%] right-[2%] w-[58%] sm:bottom-[5%] sm:w-[48%]">
        <Label>Teste A/B · headline</Label>
        {[
          ["A", "Pães de ótima qualidade", 38, false],
          ["B", "Pão quentinho às 7h…", 62, true],
        ].map(([k, t, p, win]) => (
          <div key={k as string} className="mt-1.5">
            <div className="flex items-center gap-1.5 text-[8.5px] sm:text-[9.5px]">
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-white/10 font-black text-white">{k}</span>
              <span className="truncate text-white/75">{t}</span>
              {win && (
                <span className="ml-auto shrink-0 rounded-full px-1.5 text-[7.5px] font-black uppercase text-[#1b1216] sm:text-[8.5px]" style={{ background: theme.accent2 }}>
                  vence
                </span>
              )}
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${p}%`, background: win ? theme.accent : "rgba(255,255,255,0.3)" }} />
            </div>
          </div>
        ))}
      </Float>
    </>
  );
}

// ── SEO: página de resultados, site subindo de posição ───────────────────────

export function RankingScene({ theme }: { theme: CourseTheme }) {
  const rows = [
    { pos: 1, w: ["66%", "90%"] },
    { pos: 2, mine: true },
    { pos: 3, w: ["58%", "84%"] },
    { pos: 4, w: ["70%", "78%"] },
  ];
  return (
    <>
      <AppWindow title="resultados da busca" className="left-0 top-[7%] w-[92%] sm:w-[86%]">
        <div className="p-3">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5">
            <Search className="h-3 w-3 text-white/50" />
            <span className="truncate text-[9.5px] text-white/85 sm:text-[10.5px]">bolo de pote ribeirão preto</span>
          </div>
          <div className="mt-2.5 space-y-2">
            {rows.map((r) =>
              r.mine ? (
                <div
                  key={r.pos}
                  className="relative flex items-start gap-2 rounded-lg border p-2"
                  style={{ borderColor: theme.accent, background: `${theme.accent}1f`, boxShadow: `0 10px 30px -12px ${theme.accent}` }}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-black text-white" style={{ background: theme.accent }}>
                    {r.pos}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[8px] text-white/55 sm:text-[9px]">doceriadamaria.com.br › bolo-de-pote</p>
                    <p className="text-[10.5px] font-bold leading-tight text-white sm:text-[12px]">Bolo de Pote em Ribeirão Preto: 12 sabores</p>
                    <p className="mt-0.5 line-clamp-2 text-[8px] leading-snug text-white/55 sm:text-[9px]">
                      Feitos no dia, com entrega na zona sul. Veja sabores, preços e como encomendar.
                    </p>
                  </div>
                  <span
                    className="absolute -right-2 -top-2.5 flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[8px] font-black text-[#1b1216] shadow-lg sm:text-[9px]"
                    style={{ background: theme.accent2 }}
                  >
                    <ArrowUp className="h-2.5 w-2.5" strokeWidth={3} /> 9 → 2
                  </span>
                </div>
              ) : (
                <div key={r.pos} className="flex items-start gap-2 px-2 opacity-70">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold text-white/60">
                    {r.pos}
                  </span>
                  <div className="flex-1 space-y-1 pt-0.5">
                    <Bar w="30%" className="h-[4px] bg-white/10" />
                    <Bar w={r.w?.[0] ?? "60%"} className="h-[6px] bg-white/25" />
                    <Bar w={r.w?.[1] ?? "80%"} />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </AppWindow>

      {/* Posição média ao longo das semanas */}
      <Float className="animate-float-y bottom-[3%] left-[2%] w-[48%] sm:bottom-[4%] sm:w-[42%]">
        <div className="flex items-baseline justify-between">
          <Label>Posição média</Label>
          <span className="text-[8px] font-bold sm:text-[9px]" style={{ color: theme.accent2 }}>
            12 semanas
          </span>
        </div>
        <Spark values={[14, 13, 13, 11, 9, 9, 7, 6, 4, 3, 3, 2]} invert color={theme.accent2} className="mt-2 h-9 w-full" area={false} />
      </Float>

      {/* Checklist on-page */}
      <Float className="animate-float-slow bottom-[10%] right-0 w-[44%] sm:bottom-[14%] sm:w-[36%]">
        <Label>On-page</Label>
        <ul className="mt-1.5 space-y-1">
          {[
            ["Title e meta description", true],
            ["H1 com a palavra-chave", true],
            ["Imagens com alt text", true],
            ["Velocidade no celular", false],
          ].map(([t, ok]) => (
            <li key={t as string} className="flex items-center gap-1.5 text-[8.5px] text-white/75 sm:text-[9.5px]">
              <span
                className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full"
                style={{ background: ok ? theme.accent : "transparent", border: ok ? "none" : `1.5px solid ${theme.accent2}` }}
              >
                {ok && <Check className="h-2 w-2 text-white" strokeWidth={4} />}
              </span>
              <span className="truncate">{t}</span>
            </li>
          ))}
        </ul>
      </Float>
    </>
  );
}

// ── E-commerce: página de produto e carrinho ─────────────────────────────────

function Mug({ color, className }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <ellipse cx="58" cy="102" rx="34" ry="6" fill="#000" fillOpacity="0.18" />
      <path d="M86 44 q22 0 20 20 q-2 18 -22 16" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <path d="M26 34 H90 V88 Q90 100 78 100 H38 Q26 100 26 88 Z" fill={color} />
      <ellipse cx="58" cy="34" rx="32" ry="6" fill="#000" fillOpacity="0.18" />
      <path d="M34 58 H82" stroke="#fff" strokeOpacity="0.45" strokeWidth="3" strokeDasharray="2 5" strokeLinecap="round" />
      <path d="M34 68 H82" stroke="#fff" strokeOpacity="0.45" strokeWidth="3" strokeDasharray="2 5" strokeLinecap="round" />
    </svg>
  );
}

export function StoreScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="loja · produto" className="left-0 top-[6%] w-[94%] sm:w-[88%]">
        <div className="grid grid-cols-[1fr_1.15fr] gap-3 p-3">
          <div>
            <div className="flex aspect-square items-center justify-center rounded-lg" style={{ background: `${theme.accent2}26` }}>
              <Mug color={theme.accent} className="h-[78%] w-[78%]" />
            </div>
            <div className="mt-1.5 grid grid-cols-3 gap-1">
              {[theme.accent, "#3f7a8c", "#e9e2d8"].map((c, i) => (
                <span
                  key={c}
                  className="flex aspect-square items-center justify-center rounded-md bg-white/[0.05]"
                  style={i === 0 ? { boxShadow: `inset 0 0 0 1.5px ${theme.accent}` } : undefined}
                >
                  <Mug color={c} className="h-[70%] w-[70%]" />
                </span>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-[8px] uppercase tracking-wider text-white/45 sm:text-[9px]">Cerâmica feita à mão</p>
            <p className="mt-0.5 text-[11px] font-bold leading-tight text-white sm:text-[13px]">Caneca Artesanal 350 ml</p>
            <div className="mt-1 flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-2.5 w-2.5" style={{ color: theme.accent2, fill: i < 4 ? theme.accent2 : "transparent" }} />
              ))}
              <span className="ml-1 text-[8px] text-white/45 sm:text-[9px]">(86)</span>
            </div>
            <p className="mt-1.5 text-[15px] font-black leading-none text-white sm:text-[18px]">R$ 89,90</p>
            <p className="mt-0.5 text-[8px] text-white/50 sm:text-[9px]">ou 3× de R$ 29,97</p>
            <div className="mt-2 flex gap-1">
              {[theme.accent, "#3f7a8c", "#e9e2d8"].map((c, i) => (
                <span
                  key={c}
                  className="h-3.5 w-3.5 rounded-full"
                  style={{ background: c, boxShadow: i === 0 ? `0 0 0 2px #101010, 0 0 0 3.5px ${c}` : undefined }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="flex items-center gap-1.5 rounded-md border border-white/15 px-1.5 py-0.5 text-[9px] text-white/80">
                <Minus className="h-2.5 w-2.5" /> 1 <Plus className="h-2.5 w-2.5" />
              </span>
            </div>
            <span
              className="mt-2 flex items-center justify-center gap-1 rounded-md py-1.5 text-[9px] font-black text-white sm:text-[10.5px]"
              style={{ background: theme.accent }}
            >
              <ShoppingBag className="h-3 w-3" /> Adicionar ao carrinho
            </span>
            <p className="mt-1.5 flex items-center gap-1 text-[8px] text-white/50 sm:text-[9px]">
              <Truck className="h-2.5 w-2.5" /> Calcule o frete pelo CEP
            </p>
          </div>
        </div>
      </AppWindow>

      {/* Carrinho */}
      <Float className="animate-float-y bottom-[3%] right-0 w-[50%] sm:bottom-[4%] sm:w-[42%]">
        <div className="flex items-center justify-between">
          <Label>Carrinho (2)</Label>
          <ShoppingBag className="h-3 w-3 text-white/50" />
        </div>
        {[
          [theme.accent, "Caneca Artesanal", "R$ 89,90"],
          ["#3f7a8c", "Jogo de pires", "R$ 54,00"],
        ].map(([c, n, p]) => (
          <div key={n} className="mt-1.5 flex items-center gap-1.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.06]">
              <Mug color={c} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1 truncate text-[8.5px] text-white/75 sm:text-[9.5px]">{n}</span>
            <span className="shrink-0 font-mono text-[8.5px] text-white/80 sm:text-[9.5px]">{p}</span>
          </div>
        ))}
        <span
          className="mt-2 flex items-center justify-center rounded-md py-1 text-[8.5px] font-black text-[#1b1216] sm:text-[9.5px]"
          style={{ background: theme.accent2 }}
        >
          Finalizar compra
        </span>
      </Float>

      {/* Notificação de pedido */}
      <Float className="animate-float-slow bottom-[8%] left-[1%] w-[42%] sm:bottom-[10%] sm:w-[36%]">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: `${theme.accent}33`, color: theme.accent }}>
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="text-[9px] font-bold text-white sm:text-[10px]">Pedido #1048 pago</p>
            <p className="truncate text-[8px] text-white/50 sm:text-[9px]">Etiqueta de envio gerada</p>
          </div>
        </div>
      </Float>
    </>
  );
}
