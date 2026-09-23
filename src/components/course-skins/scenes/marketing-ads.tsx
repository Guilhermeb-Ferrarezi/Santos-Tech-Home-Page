import { Heart, MessageCircle, Search, Send, Share2, Bookmark, Music2, Globe } from "lucide-react";
import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";
import { Avatar, Bar, Float, Label, Phone, Spark, SponsoredTag } from "@/components/course-skins/scenes/marketing-kit";

/**
 * Cenas de hero dos cursos de tráfego pago (Meta Ads, Google Ads, TikTok Ads).
 * Mockups genéricos de anúncio — feed, página de busca e vídeo vertical — sem
 * reproduzir a interface de nenhuma rede. Os números são ilustração de painel.
 */

// ── Meta Ads: post patrocinado no feed ───────────────────────────────────────

export function FeedAdScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <Phone className="left-[4%] top-[5%] w-[56%] sm:left-[6%] sm:w-[46%]">
        <div className="px-2.5 pb-2 pt-5">
          {/* Cabeçalho do post */}
          <div className="flex items-center gap-1.5">
            <Avatar color={theme.accent} className="h-6 w-6" />
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[9px] font-bold text-white sm:text-[10px]">Café da Esquina</p>
              <p className="flex items-center gap-1 text-[7.5px] text-white/50 sm:text-[8.5px]">
                Patrocinado · <Globe className="h-2 w-2" />
              </p>
            </div>
            <span className="text-[10px] font-bold tracking-widest text-white/40">···</span>
          </div>
          <p className="mt-1.5 text-[8.5px] leading-snug text-white/80 sm:text-[9.5px]">
            Grão torrado nesta semana, moído na hora. Entrega no mesmo dia em Ribeirão.
          </p>
        </div>

        {/* Criativo */}
        <svg viewBox="0 0 200 200" className="block w-full" aria-hidden="true">
          <defs>
            <linearGradient id="mkt-feed-bg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor={theme.accent2} />
              <stop offset="1" stopColor={theme.accent} />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#mkt-feed-bg)" />
          <circle cx="160" cy="40" r="46" fill="#fff" fillOpacity="0.14" />
          <circle cx="30" cy="175" r="34" fill="#000" fillOpacity="0.08" />
          {/* Vapor */}
          {[78, 100, 122].map((x, i) => (
            <path
              key={x}
              d={`M${x} ${70 - i * 2} q-8 -12 0 -24 q8 -12 0 -24`}
              fill="none"
              stroke="#fff"
              strokeOpacity="0.65"
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
          {/* Xícara */}
          <ellipse cx="100" cy="162" rx="62" ry="10" fill="#000" fillOpacity="0.15" />
          <path d="M52 86 H148 L140 146 Q138 158 126 158 H74 Q62 158 60 146 Z" fill="#fff" />
          <path d="M146 98 q26 0 24 22 q-2 20 -28 18" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
          <ellipse cx="100" cy="86" rx="48" ry="8" fill="#5b3a29" />
          <rect x="62" y="108" width="76" height="16" rx="8" fill={theme.accent} fillOpacity="0.9" />
          <text x="100" y="120" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="inherit">
            -15% HOJE
          </text>
        </svg>

        {/* Barra de CTA */}
        <div className="flex items-center justify-between bg-white/[0.06] px-2.5 py-1.5">
          <div className="leading-tight">
            <p className="text-[7.5px] uppercase text-white/45 sm:text-[8.5px]">cafedaesquina.com.br</p>
            <p className="text-[9px] font-bold text-white sm:text-[10px]">Peça o seu hoje</p>
          </div>
          <span className="rounded-md px-2 py-1 text-[8.5px] font-bold text-white sm:text-[9.5px]" style={{ background: theme.accent }}>
            Saiba mais
          </span>
        </div>
        <div className="flex items-center gap-2.5 px-2.5 py-2 text-white/75">
          <Heart className="h-3.5 w-3.5" style={{ color: theme.accent, fill: theme.accent }} />
          <MessageCircle className="h-3.5 w-3.5" />
          <Send className="h-3.5 w-3.5" />
          <Bookmark className="ml-auto h-3.5 w-3.5" />
        </div>
      </Phone>

      {/* Público do conjunto de anúncios */}
      <Float className="animate-float-slow right-[1%] top-[24%] w-[46%] sm:right-[2%] sm:w-[44%]">
        <Label>Público</Label>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {["25–44 anos", "Ribeirão Preto + 10 km", "Interesse: café"].map((t) => (
            <span key={t} className="rounded-full border border-white/15 bg-white/[0.06] px-1.5 py-0.5 text-[8px] text-white/80 sm:text-[9px]">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-2.5 flex items-center justify-between text-[7.5px] text-white/40 sm:text-[8.5px]">
          <span>Específico</span>
          <span>Amplo</span>
        </div>
        <div className="relative mt-1 h-1.5 rounded-full bg-white/10">
          <div className="absolute inset-y-0 left-0 w-[58%] rounded-full" style={{ background: `linear-gradient(90deg, ${theme.accent2}, ${theme.accent})` }} />
          <span className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#181114] bg-white" style={{ left: "calc(58% - 6px)" }} />
        </div>
      </Float>

      {/* Resultado do anúncio */}
      <Float className="animate-float-y bottom-[5%] right-[3%] w-[44%] sm:bottom-[8%] sm:w-[40%]">
        <div className="flex items-baseline justify-between">
          <Label>Cliques no link</Label>
          <span className="text-[8px] font-bold sm:text-[9px]" style={{ color: theme.accent2 }}>
            7 dias
          </span>
        </div>
        <p className="mt-1 text-base font-black leading-none text-white sm:text-lg">1.284</p>
        <Spark values={[4, 6, 5, 9, 8, 12, 15]} color={theme.accent2} className="mt-2 h-7 w-full" />
      </Float>
    </>
  );
}

// ── Google Ads: resultado patrocinado na busca ───────────────────────────────

export function SearchAdScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="buscador" className="left-0 top-[7%] w-[94%] sm:w-[90%]">
        <div className="p-3">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5">
            <Search className="h-3 w-3 text-white/50" />
            <span className="truncate text-[9.5px] text-white/85 sm:text-[10.5px]">padaria artesanal ribeirão preto</span>
            <span className="ml-auto h-3 w-px animate-pulse bg-white/70" />
          </div>
          <div className="mt-2 flex gap-3 border-b border-white/10 pb-1.5 text-[8px] text-white/40 sm:text-[9px]">
            <span className="font-bold text-white/80" style={{ boxShadow: `0 6px 0 -4px ${theme.accent}` }}>
              Todos
            </span>
            <span>Mapas</span>
            <span>Imagens</span>
            <span>Notícias</span>
          </div>

          {/* O anúncio */}
          <div className="relative mt-2.5 rounded-lg border border-dashed p-2" style={{ borderColor: `${theme.accent}aa`, background: `${theme.accent}12` }}>
            <span
              className="absolute -top-2 right-2 rounded-full px-1.5 py-px text-[7.5px] font-black uppercase tracking-wider text-[#1b1216] sm:text-[8.5px]"
              style={{ background: theme.accent2 }}
            >
              seu anúncio
            </span>
            <div className="flex items-center gap-1.5">
              <SponsoredTag />
              <span className="truncate text-[8px] text-white/55 sm:text-[9px]">padariadobairro.com.br</span>
            </div>
            <p className="mt-1 text-[11px] font-bold leading-tight text-white sm:text-[12.5px]">
              Pão de Fermentação Natural | <span style={{ color: theme.accent2 }}>Encomende até as 18h</span>
            </p>
            <p className="mt-1 text-[8.5px] leading-snug text-white/55 sm:text-[9.5px]">
              Fornadas às 7h e às 16h. Retire na loja ou receba em casa no Jardim América.
            </p>
            <div className="mt-1.5 grid grid-cols-2 gap-1">
              {["Cardápio do dia", "Encomendas", "Como chegar", "Horários"].map((s) => (
                <span key={s} className="truncate rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 text-[8px] text-white/75 sm:text-[9px]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Resultados orgânicos (esqueleto) */}
          {[0, 1].map((r) => (
            <div key={r} className="mt-2.5 space-y-1 px-1">
              <Bar w="34%" className="h-[4px] bg-white/10" />
              <Bar w={r ? "62%" : "72%"} className="h-[6px] bg-white/25" />
              <Bar w="88%" />
            </div>
          ))}
        </div>
      </AppWindow>

      {/* Palavras-chave */}
      <Float className="animate-float-y bottom-[3%] left-[3%] w-[60%] sm:bottom-[4%] sm:w-[54%]">
        <Label>Palavras-chave</Label>
        <div className="mt-1.5 space-y-1">
          {[
            ["[padaria artesanal]", "exata"],
            ['"pão natural"', "frase"],
            ["padaria perto", "ampla"],
          ].map(([k, t], i) => (
            <div key={k} className="flex items-center justify-between gap-2 font-mono text-[8px] sm:text-[9px]">
              <span className="truncate text-white/80">{k}</span>
              <span
                className="shrink-0 rounded-sm px-1 py-px font-sans font-bold uppercase"
                style={{ background: i === 0 ? theme.accent : "rgba(255,255,255,0.08)", color: i === 0 ? "#fff" : "rgba(255,255,255,0.6)" }}
              >
                {t}
              </span>
            </div>
          ))}
        </div>
      </Float>

      {/* Qualidade do anúncio */}
      <Float className="animate-float-slow bottom-[13%] right-[1%] w-[34%] sm:bottom-[16%] sm:w-[30%]">
        <Label>Qualidade</Label>
        <div className="mt-1.5 flex gap-[3px]">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="h-3 flex-1 rounded-[2px]" style={{ background: i < 8 ? theme.accent2 : "rgba(255,255,255,0.1)" }} />
          ))}
        </div>
        <p className="mt-1.5 text-[8.5px] text-white/60 sm:text-[9.5px]">
          <span className="font-black text-white">8</span>/10 · relevância alta
        </p>
      </Float>
    </>
  );
}

// ── TikTok Ads: vídeo vertical com CTA ───────────────────────────────────────

export function VerticalVideoScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <Phone className="left-[27%] top-[3%] aspect-[9/17.5] w-[48%] sm:left-[31%] sm:w-[38%]">
        {/* "Vídeo": cena ilustrada */}
        <svg viewBox="0 0 180 350" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="mkt-vid-bg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor={theme.accent} />
              <stop offset="0.55" stopColor="#3a1020" />
              <stop offset="1" stopColor="#0d0709" />
            </linearGradient>
          </defs>
          <rect width="180" height="350" fill="url(#mkt-vid-bg)" />
          <circle cx="140" cy="70" r="60" fill={theme.accent2} fillOpacity="0.25" />
          {/* Pessoa segurando o produto */}
          <path d="M40 350 Q44 232 90 226 Q136 232 140 350 Z" fill="#1d1d24" />
          <rect x="82" y="200" width="16" height="22" rx="6" fill="#e9b894" />
          <circle cx="90" cy="178" r="30" fill="#e9b894" />
          <path d="M60 176 Q58 142 92 144 Q122 146 120 172 Q104 160 88 166 Q74 172 60 176 Z" fill="#2b2118" />
          <rect x="112" y="238" width="36" height="56" rx="8" fill="#fff" transform="rotate(-10 130 266)" />
          <rect x="118" y="252" width="24" height="10" rx="3" fill={theme.accent} transform="rotate(-10 130 266)" />
          <path d="M120 300 Q108 280 116 262" stroke="#e9b894" strokeWidth="12" strokeLinecap="round" fill="none" />
        </svg>

        {/* Barra de progresso do vídeo */}
        <div className="absolute inset-x-3 top-4 z-10 flex gap-1">
          {[1, 0.55, 0].map((p, i) => (
            <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
              <span className="block h-full bg-white" style={{ width: `${p * 100}%` }} />
            </span>
          ))}
        </div>

        {/* Ações laterais */}
        <div className="absolute bottom-[27%] right-1.5 z-10 flex flex-col items-center gap-2 text-white">
          <Avatar color={theme.accent2} className="h-6 w-6 ring-2 ring-white" />
          {[Heart, MessageCircle, Share2].map((Icon, i) => (
            <span key={i} className="flex flex-col items-center">
              <Icon className="h-4 w-4 drop-shadow" style={i === 0 ? { color: theme.accent, fill: theme.accent } : undefined} />
            </span>
          ))}
          <span className="animate-spin-slow flex h-5 w-5 items-center justify-center rounded-full bg-black ring-2 ring-white/30">
            <Music2 className="h-2.5 w-2.5" />
          </span>
        </div>

        {/* Legenda + CTA */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 to-transparent px-2.5 pb-2.5 pt-8">
          <p className="text-[9px] font-bold text-white sm:text-[10px]">@sualoja</p>
          <p className="mt-0.5 text-[8px] leading-snug text-white/80 sm:text-[9px]">3 jeitos de usar a mesma garrafa no dia a dia</p>
          <SponsoredTag className="mt-1" />
          <span
            className="mt-1.5 flex items-center justify-center rounded-md py-1 text-[9px] font-black text-white sm:text-[10px]"
            style={{ background: theme.accent }}
          >
            Comprar agora
          </span>
        </div>
      </Phone>

      {/* Roteiro do criativo */}
      <Float className="animate-float-slow left-0 top-[16%] w-[40%] sm:left-[1%] sm:w-[34%]">
        <Label>Roteiro · 15s</Label>
        <div className="mt-2 space-y-1.5">
          {[
            ["Gancho", "0–3s", 20, theme.accent2],
            ["Problema", "3–6s", 20, "#ffffff55"],
            ["Demonstração", "6–12s", 40, "#ffffff35"],
            ["CTA", "12–15s", 20, theme.accent],
          ].map(([t, s, w, c]) => (
            <div key={t as string}>
              <div className="flex justify-between text-[8px] text-white/70 sm:text-[9px]">
                <span className="font-bold">{t}</span>
                <span className="font-mono text-white/40">{s}</span>
              </div>
              <span className="mt-0.5 block h-1.5 rounded-full" style={{ width: `${(w as number) * 2.2}%`, background: c as string }} />
            </div>
          ))}
        </div>
      </Float>

      {/* Retenção */}
      <Float className="animate-float-y bottom-[6%] right-0 w-[38%] sm:right-[1%] sm:w-[32%]">
        <Label>Retenção do vídeo</Label>
        <Spark values={[100, 92, 70, 63, 60, 57, 55, 52]} color={theme.accent2} className="mt-2 h-8 w-full" />
        <div className="mt-1 flex justify-between font-mono text-[7.5px] text-white/35 sm:text-[8.5px]">
          <span>0s</span>
          <span>15s</span>
        </div>
      </Float>
    </>
  );
}
