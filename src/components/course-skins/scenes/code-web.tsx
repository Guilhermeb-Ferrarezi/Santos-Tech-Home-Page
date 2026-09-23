import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";
import { CodeLines, FloatTerm, Panel, type Tok } from "@/components/course-skins/scenes/code-kit";

// ── APIs com Python: rota FastAPI que recebe um evento e avisa outro sistema ──

const API_PY: Tok[][] = [
  [["from", "kw"], [" fastapi ", "pl"], ["import", "kw"], [" FastAPI", "fn"]],
  [["import", "kw"], [" httpx", "pl"]],
  [],
  [["app", "var"], [" = ", "pl"], ["FastAPI", "fn"], ["()", "pl"]],
  [],
  [["@app", "kw"], [".", "pl"], ["post", "fn"], ["(", "pl"], ['"/webhook/pedido"', "str"], [")", "pl"]],
  [["async def", "kw"], [" novo_pedido", "fn"], ["(pedido: ", "pl"], ["Pedido", "fn"], ["):", "pl"]],
  [["    # avisa a equipe no chat", "cm"]],
  [["    await", "kw"], [" httpx", "pl"], [".", "pl"], ["post", "fn"], ["(CHAT_URL, json=", "pl"], ["{", "pl"]],
  [['        "texto"', "str"], [": ", "pl"], ['f"Pedido {pedido.id} pago"', "str"]],
  [["    })", "pl"]],
  [["    return", "kw"], [" {", "pl"], ['"ok"', "str"], [": ", "pl"], ["True", "num"], ["}", "pl"]],
];

export function PythonApisScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="integracoes.py" className="left-0 top-[8%] w-[92%]">
        <CodeLines lines={API_PY} theme={theme} />
      </AppWindow>
      <FloatTerm>
        <p className="text-white/50">
          <span style={{ color: theme.accent }}>POST</span> /webhook/pedido
        </p>
        <p className="text-white/80">
          <span style={{ color: theme.accent2 }}>200 OK</span> {"{"} &quot;ok&quot;: true {"}"}
        </p>
        <p className="text-white/80">
          <span style={{ color: theme.accent2 }}>✓</span> equipe avisada no chat
        </p>
        <p className="mt-1 text-white/45">loja → sistema → chat, sem ninguém copiar e colar</p>
      </FloatTerm>
    </>
  );
}

// ── TypeScript: o tipo acusa o erro antes de o código rodar ────────────────

const TS: Tok[][] = [
  [["type", "kw"], [" Pedido", "fn"], [" = {", "pl"]],
  [["  id", "var"], [": ", "pl"], ["number", "kw"], [";", "pl"]],
  [["  cliente", "var"], [": ", "pl"], ["string", "kw"], [";", "pl"]],
  [["  total", "var"], [": ", "pl"], ["number", "kw"], [";", "pl"]],
  [["};", "pl"]],
  [],
  [["function", "kw"], [" calcularFrete", "fn"], ["(p: ", "pl"], ["Pedido", "fn"], ["): ", "pl"], ["number", "kw"], [" {", "pl"]],
  [["  return", "kw"], [" p.total > ", "pl"], ["200", "num"], [" ? ", "pl"], ["0", "num"], [" : ", "pl"], ["19.9", "num"], [";", "pl"]],
  [["}", "pl"]],
  [],
  [["calcularFrete", "fn"], ["({ id: ", "pl"], ["7", "num"], [", cliente: ", "pl"], ['"Ana"', "str"], [" });", "pl"]],
];

export function TypescriptScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="frete.ts" className="left-0 top-[8%] w-[92%]">
        <CodeLines lines={TS} theme={theme} mark={10} cursor={false} />
      </AppWindow>
      {/* Balão de erro do editor */}
      <div className="animate-float-y absolute bottom-[4%] right-[2%] w-[66%] rounded-xl border border-[#ff5f57]/40 bg-[#1a0f12]/95 p-3 font-mono text-[9.5px] leading-relaxed shadow-[0_24px_48px_-16px_rgba(0,0,0,0.9)] sm:text-[10.5px]">
        <p className="font-bold text-[#ff8a84]">✖ Falta a propriedade &quot;total&quot;</p>
        <p className="mt-1 text-white/70">O editor avisa enquanto você digita, antes do cliente ver o bug.</p>
        <p className="mt-2 text-white/45">
          <span style={{ color: theme.accent }}>$</span> bun run frete.ts
        </p>
      </div>
    </>
  );
}

// ── Front-end: código HTML/CSS ao lado do resultado no navegador ────────────

const HTML: Tok[][] = [
  [["<article", "tag"], [" class", "var"], ["=", "pl"], ['"card"', "str"], [">", "tag"]],
  [["  <img", "tag"], [" src", "var"], ["=", "pl"], ['"tenis.png"', "str"], [" />", "tag"]],
  [["  <h3>", "tag"], ["Tênis Runner", "pl"], ["</h3>", "tag"]],
  [["  <p", "tag"], [" class", "var"], ["=", "pl"], ['"preco"', "str"], [">", "tag"], ["R$ 299", "pl"], ["</p>", "tag"]],
  [["  <button>", "tag"], ["Comprar", "pl"], ["</button>", "tag"]],
  [["</article>", "tag"]],
  [],
  [[".card", "fn"], [" {", "pl"]],
  [["  border-radius", "var"], [": ", "pl"], ["16px", "num"], [";", "pl"]],
  [["  box-shadow", "var"], [": ", "pl"], ["0 8px 24px ", "num"], ["#0003", "str"], [";", "pl"]],
  [["}", "pl"]],
];

function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#eef1f6] px-2.5 py-1.5">
      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      <span className="ml-1.5 flex-1 truncate rounded bg-white px-2 py-0.5 font-mono text-[8.5px] text-neutral-500 sm:text-[9.5px]">
        {url}
      </span>
    </div>
  );
}

export function FrontendScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="index.html · estilo.css" className="left-0 top-[6%] w-[74%]">
        <CodeLines lines={HTML} theme={theme} />
      </AppWindow>
      {/* Navegador com o resultado */}
      <div className="animate-float-y absolute bottom-[2%] right-[1%] w-[50%] overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_30px_60px_-16px_rgba(0,0,0,0.9)]">
        <BrowserBar url="localhost:5173" />
        <div className="bg-[#f6f7fb] p-3">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <div className="relative h-16 sm:h-20" style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})` }}>
              {/* tênis estilizado */}
              <svg viewBox="0 0 100 40" className="absolute inset-x-4 bottom-1.5 h-10 sm:h-12" aria-hidden="true">
                <path d="M8 30 C 12 18, 26 16, 34 20 L 52 26 C 64 29, 80 26, 90 30 L 92 34 L 8 34 Z" fill="#fff" />
                <path d="M8 34 L 92 34 L 92 37 L 8 37 Z" fill="#111" fillOpacity="0.8" />
                <path d="M30 21 L 36 27 M38 23 L 43 28 M46 25 L 50 29" stroke="#111" strokeOpacity="0.5" strokeWidth="1.4" />
              </svg>
            </div>
            <div className="p-2.5">
              <p className="text-[11px] font-bold text-neutral-900 sm:text-xs">Tênis Runner</p>
              <p className="text-[10px] font-bold sm:text-[11px]" style={{ color: theme.accent }}>
                R$ 299
              </p>
              <div className="mt-1.5 rounded-lg py-1 text-center text-[9px] font-bold text-white sm:text-[10px]" style={{ background: theme.accent }}>
                Comprar
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Back-end: rota de API e a resposta JSON ────────────────────────────────

const ROTA: Tok[][] = [
  [["app", "var"], [".", "pl"], ["get", "fn"], ["(", "pl"], ['"/produtos/:id"', "str"], [", ", "pl"], ["async", "kw"], [" (req, res) => {", "pl"]],
  [["  const", "kw"], [" produto = ", "pl"], ["await", "kw"], [" db.produto.", "pl"], ["buscar", "fn"], ["({", "pl"]],
  [["    id", "var"], [": req.params.id,", "pl"]],
  [["  });", "pl"]],
  [],
  [["  if", "kw"], [" (!produto) ", "pl"], ["return", "kw"], [" res.", "pl"], ["status", "fn"], ["(", "pl"], ["404", "num"], [");", "pl"]],
  [["  res", "pl"], [".", "pl"], ["json", "fn"], ["(produto);", "pl"]],
  [["});", "pl"]],
];

export function BackendScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="rotas/produtos.ts" className="left-0 top-[8%] w-[92%]">
        <CodeLines lines={ROTA} theme={theme} />
      </AppWindow>
      <Panel className="animate-float-y bottom-[3%] right-[2%] w-[58%]">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-1.5 font-mono text-[9px] sm:text-[10px]">
          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-bold text-emerald-300">GET</span>
          <span className="truncate text-white/60">/produtos/42</span>
          <span className="ml-auto shrink-0" style={{ color: theme.accent2 }}>
            200 OK
          </span>
        </div>
        <pre className="px-3 py-2 font-mono text-[9.5px] leading-[1.7] text-white/80 sm:text-[10.5px]">
          {"{\n"}
          {"  "}
          <span style={{ color: "#f07178" }}>&quot;id&quot;</span>: <span style={{ color: "#f78c6c" }}>42</span>,{"\n"}
          {"  "}
          <span style={{ color: "#f07178" }}>&quot;nome&quot;</span>: <span style={{ color: theme.accent2 }}>&quot;Tênis Runner&quot;</span>,{"\n"}
          {"  "}
          <span style={{ color: "#f07178" }}>&quot;preco&quot;</span>: <span style={{ color: "#f78c6c" }}>299.9</span>,{"\n"}
          {"  "}
          <span style={{ color: "#f07178" }}>&quot;estoque&quot;</span>: <span style={{ color: "#f78c6c" }}>12</span>
          {"\n}"}
        </pre>
      </Panel>
    </>
  );
}

// ── Full stack: tela, API e banco conectados, até o deploy ─────────────────

export function FullstackScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      {/* Conexões */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M44 30 C 60 30, 56 50, 66 52" fill="none" stroke={theme.accent} strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        <path d="M72 60 C 72 76, 16 70, 12 79" fill="none" stroke={theme.accent2} strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Front */}
      <div className="absolute left-0 top-[8%] w-[50%] overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_30px_60px_-16px_rgba(0,0,0,0.9)]">
        <BrowserBar url="minhaloja.com" />
        <div className="space-y-1.5 bg-[#f6f7fb] p-2.5">
          <div className="h-2 w-2/3 rounded bg-neutral-800" />
          {["Pedido #128", "Pedido #129"].map((p, i) => (
            <div key={p} className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5 shadow-sm">
              <span className="text-[9px] font-bold text-neutral-800 sm:text-[10px]">{p}</span>
              <span
                className="rounded-full px-1.5 text-[8px] font-bold text-white sm:text-[9px]"
                style={{ background: i === 0 ? theme.accent : "#16a34a" }}
              >
                {i === 0 ? "a caminho" : "entregue"}
              </span>
            </div>
          ))}
        </div>
        <p className="border-t border-black/5 bg-white px-2.5 py-1 font-mono text-[8.5px] text-neutral-500 sm:text-[9.5px]">front-end · React</p>
      </div>

      {/* API */}
      <Panel className="right-[2%] top-[42%] w-[50%] p-3 font-mono text-[9.5px] leading-relaxed sm:text-[10.5px]">
        <p className="text-white/40">back-end · Node.js</p>
        <p className="mt-1 text-white/80">
          <span style={{ color: theme.accent }}>GET</span> /api/pedidos
        </p>
        <p style={{ color: theme.accent2 }}>200 OK · 2 pedidos</p>
      </Panel>

      {/* Banco */}
      <div className="absolute bottom-[4%] left-[6%] flex items-center gap-2.5">
        <svg viewBox="0 0 40 48" className="h-14 w-12 sm:h-16 sm:w-14" aria-hidden="true">
          <ellipse cx="20" cy="8" rx="17" ry="6" fill={theme.accent2} />
          <path d="M3 8 v30 c0 3.3 7.6 6 17 6 s17 -2.7 17 -6 v-30" fill={theme.accent2} fillOpacity="0.75" />
          <path d="M3 18 c0 3.3 7.6 6 17 6 s17 -2.7 17 -6 M3 28 c0 3.3 7.6 6 17 6 s17 -2.7 17 -6" fill="none" stroke="#0b0f19" strokeOpacity="0.5" strokeWidth="1.4" />
        </svg>
        <div className="font-mono text-[9.5px] leading-snug sm:text-[10.5px]">
          <p className="text-white/40">banco de dados</p>
          <p className="text-white/80">PostgreSQL</p>
        </div>
      </div>

      {/* Deploy */}
      <div className="animate-float-y absolute bottom-[4%] right-[2%] rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1.5 font-mono text-[9.5px] font-bold text-emerald-300 sm:text-[10.5px]">
        ● no ar · deploy ok
      </div>
    </>
  );
}

// ── Mobile: componente React Native e o app rodando no celular ─────────────

const RN: Tok[][] = [
  [["<View", "tag"], [" style", "var"], ["={s.card}", "pl"], [">", "tag"]],
  [["  <Text", "tag"], [" style", "var"], ["={s.titulo}", "pl"], [">", "tag"]],
  [["    Pedido #128", "pl"]],
  [["  </Text>", "tag"]],
  [["  <Text>", "tag"], ["A caminho", "pl"], ["</Text>", "tag"]],
  [["  <Button", "tag"]],
  [["    title", "var"], ["=", "pl"], ['"Rastrear"', "str"]],
  [["    onPress", "var"], ["={rastrear}", "pl"]],
  [["  />", "tag"]],
  [["</View>", "tag"]],
];

export function MobileScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="PedidoCard.tsx" className="left-0 top-[12%] w-[64%]">
        <CodeLines lines={RN} theme={theme} />
      </AppWindow>

      {/* Celular */}
      <div className="animate-float-y absolute bottom-[2%] right-[3%] w-[42%] rounded-[1.6rem] border-[5px] border-[#1d2333] bg-[#1d2333] shadow-[0_30px_60px_-16px_rgba(0,0,0,0.9)]">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-[#f4f6fb]">
          <div className="mx-auto mt-1 h-1.5 w-10 rounded-full bg-[#1d2333]" />
          <div className="px-2.5 pb-2 pt-2">
            <p className="text-[8px] text-neutral-500 sm:text-[9px]">Olá, Ana</p>
            <p className="text-[11px] font-black text-neutral-900 sm:text-[12px]">Meus pedidos</p>
            <div className="mt-2 rounded-xl bg-white p-2 shadow-sm">
              <p className="text-[9px] font-bold text-neutral-900 sm:text-[10px]">Pedido #128</p>
              <p className="text-[8px] text-neutral-500 sm:text-[9px]">A caminho</p>
              <div className="mt-1.5 rounded-lg py-1 text-center text-[8px] font-bold text-white sm:text-[9px]" style={{ background: theme.accent }}>
                Rastrear
              </div>
            </div>
            <div className="mt-1.5 rounded-xl bg-white p-2 opacity-70 shadow-sm">
              <div className="h-1.5 w-2/3 rounded bg-neutral-300" />
              <div className="mt-1 h-1.5 w-1/3 rounded bg-neutral-200" />
            </div>
          </div>
          <div className="flex justify-around border-t border-black/5 bg-white py-1.5">
            {[theme.accent, "#c5cad6", "#c5cad6"].map((c, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
      <p className="absolute bottom-[4%] left-[4%] font-mono text-[9.5px] text-white/45 sm:text-[10.5px]">
        um código → <span className="text-white/80">iPhone e Android</span>
      </p>
    </>
  );
}
