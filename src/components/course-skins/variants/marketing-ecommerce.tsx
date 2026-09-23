import { Check, ClipboardList, CreditCard, Heart, MousePointerClick, Package, PackageCheck, ShoppingBag, ShoppingCart, Store, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  ConteudoSection,
  ConversaLink,
  PublicoSection,
  StepHeading,
  TierPicker,
  ToolsRow,
  type MktBlockProps,
} from "@/components/course-skins/variants/marketing-kit";
import { BODY, CARD, INK, KICKER, SOFT, pad2, ritmo, useMarcados } from "@/components/course-skins/variants/marketing-tokens";

/**
 * E-commerce. "Para quem é" é o catálogo de uma loja: cada perfil é um produto
 * com ilustração própria, e a pessoa coloca no carrinho os que combinam com
 * ela. O conteúdo é a jornada de compra: vitrine → produto → carrinho →
 * checkout → entrega → pós-venda, um passo por módulo, fechando num pedido
 * confirmado (o resultado do nível).
 */

/** Ilustrações de produto genéricas (desenho próprio). */
function Produto({ i }: { i: number }) {
  const k = i % 6;
  return (
    <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
      <ellipse cx="80" cy="96" rx="44" ry="6" fill="#000" fillOpacity="0.08" />
      {k === 0 && (
        <g>
          {/* caixa */}
          <path d="M44 42 L80 28 L116 42 L80 56 Z" fill="var(--accent-2)" />
          <path d="M44 42 V78 L80 92 V56 Z" fill="color-mix(in srgb, var(--accent-2) 70%, #7a4f00)" />
          <path d="M116 42 V78 L80 92 V56 Z" fill="color-mix(in srgb, var(--accent-2) 85%, #7a4f00)" />
          <path d="M62 35 L98 49 V60" fill="none" stroke="#fff" strokeWidth="5" strokeOpacity="0.7" />
        </g>
      )}
      {k === 1 && (
        <g>
          {/* sacola */}
          <path d="M60 40 V32 a20 20 0 0 1 40 0 V40" fill="none" stroke="#1f1216" strokeWidth="5" strokeLinecap="round" />
          <path d="M46 40 H114 L108 92 H52 Z" fill="var(--accent)" />
          <circle cx="80" cy="64" r="11" fill="#fff" fillOpacity="0.9" />
          <path d="M75 64 l4 4 l7 -8" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {k === 2 && (
        <g>
          {/* camiseta */}
          <path d="M60 24 L46 30 L34 48 L48 56 L54 48 V92 H106 V48 L112 56 L126 48 L114 30 L100 24 Q80 36 60 24 Z" fill="#1f1216" />
          <path d="M66 58 H94 M70 66 H90" stroke="var(--accent-2)" strokeWidth="4" strokeLinecap="round" />
        </g>
      )}
      {k === 3 && (
        <g>
          {/* caneca */}
          <rect x="52" y="36" width="46" height="54" rx="6" fill="#fff" stroke="#1f1216" strokeOpacity="0.12" />
          <path d="M98 48 h8 a10 10 0 0 1 0 20 h-8" fill="none" stroke="#e9d9d6" strokeWidth="6" />
          <rect x="52" y="52" width="46" height="14" fill="var(--accent)" />
          <path d="M64 30 q4 -8 0 -14 M76 30 q4 -8 0 -14" fill="none" stroke="#1f1216" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}
      {k === 4 && (
        <g>
          {/* tênis */}
          <path d="M34 80 V64 Q34 50 50 50 L70 48 Q80 62 100 64 L122 68 Q130 70 130 80 Z" fill="#fb923c" />
          <rect x="32" y="80" width="100" height="10" rx="4" fill="#fff" stroke="#1f1216" strokeOpacity="0.12" />
          <path d="M58 56 l6 8 M66 54 l6 8 M74 55 l6 8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {k === 5 && (
        <g>
          {/* livro/curso digital */}
          <rect x="46" y="28" width="62" height="64" rx="4" fill="var(--accent)" />
          <rect x="52" y="28" width="6" height="64" fill="#000" fillOpacity="0.15" />
          <rect x="66" y="44" width="32" height="5" rx="2.5" fill="#fff" />
          <rect x="66" y="54" width="22" height="4" rx="2" fill="#fff" fillOpacity="0.7" />
          <circle cx="104" cy="32" r="12" fill="var(--accent-2)" />
          <path d="M99 32 l4 4 l6 -7" fill="none" stroke="#1f1216" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

const VITRINES = ["bg-[#fff1ec] dark:bg-[#2a1418]", "bg-[#fff7e0] dark:bg-[#2a2212]", "bg-[#f7ecea] dark:bg-[#241317]"];

function Publico({ course, whatsappUrl }: MktBlockProps) {
  const [carrinho, alternar] = useMarcados();
  return (
    <PublicoSection>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <StepHeading
          step="01"
          label="Público-alvo · Catálogo"
          Icon={Store}
          title="Este curso é ideal se você..."
          sub="A vitrine da loja: cada perfil é um produto. Coloque no carrinho os que combinam com você."
        />
        <Reveal delay={100}>
          <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${CARD}`}>
            <span className="relative">
              <ShoppingCart className="h-6 w-6 text-(--accent)" />
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-(--accent) px-1 text-[11px] font-black text-white">
                {carrinho.size}
              </span>
            </span>
            <span className={`text-sm font-bold ${INK}`}>{carrinho.size === 0 ? "Carrinho vazio" : `${carrinho.size} no carrinho`}</span>
            {carrinho.size > 0 && <ConversaLink href={whatsappUrl}>Finalizar conversa</ConversaLink>}
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {course.targetAudience.map((item, i) => {
          const on = carrinho.has(i);
          return (
            <Reveal key={item} delay={i * 60}>
              <article className={`flex h-full flex-col overflow-hidden rounded-2xl ${CARD} transition ${on ? "ring-2 ring-(--accent)" : ""}`}>
                <div className={`relative h-36 ${VITRINES[i % VITRINES.length]}`}>
                  <Produto i={i} />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-black text-[#1f1216] shadow-sm">Perfil {pad2(i)}</span>
                  <Heart className={`absolute right-3 top-3 h-5 w-5 ${on ? "fill-(--accent) text-(--accent)" : "text-[#1f1216]/30 dark:text-white/40"}`} />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className={`flex-1 text-[15px] font-semibold leading-snug ${INK}`}>{item}</p>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => alternar(i)}
                    className={`mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-black transition ${
                      on ? "bg-emerald-600 text-white" : "bg-(--hero-bg) text-white hover:bg-(--accent) dark:bg-(--accent)"
                    }`}
                  >
                    {on ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
                    {on ? "No carrinho · é você" : "Adicionar ao carrinho"}
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </PublicoSection>
  );
}

const PASSOS: { nome: string; Icon: LucideIcon }[] = [
  { nome: "Vitrine", Icon: Store },
  { nome: "Produto", Icon: Package },
  { nome: "Carrinho", Icon: ShoppingCart },
  { nome: "Checkout", Icon: CreditCard },
  { nome: "Entrega", Icon: Truck },
  { nome: "Pós-venda", Icon: Heart },
];

/**
 * Ponto da jornada de compra que cada módulo trabalha, pelo título; sem
 * correspondência, cai na posição proporcional ao longo dos passos.
 */
const PONTOS: [RegExp, { nome: string; Icon: LucideIcon }][] = [
  [/fundament|planej/i, { nome: "Planejamento", Icon: ClipboardList }],
  [/tráfego|anúnc|\bads\b/i, { nome: "Visita", Icon: MousePointerClick }],
  [/e-mail|whatsapp|carrinho/i, { nome: "Carrinho", Icon: ShoppingCart }],
  [/estoque|logíst|entrega|frete/i, { nome: "Entrega", Icon: Truck }],
  [/pagamento|checkout/i, { nome: "Checkout", Icon: CreditCard }],
  [/pós-venda|fideliz|recompra/i, { nome: "Pós-venda", Icon: Heart }],
  [/produto/i, { nome: "Produto", Icon: Package }],
  [/loja|configura/i, { nome: "Vitrine", Icon: Store }],
];

function passo(titulo: string, i: number, n: number) {
  const achado = PONTOS.find(([re]) => re.test(titulo));
  if (achado) return achado[1];
  return PASSOS[n <= 1 ? 0 : Math.round((i * (PASSOS.length - 1)) / (n - 1))];
}

function Conteudo(p: MktBlockProps) {
  const { course, tier } = p;
  const n = tier.modules.length;
  return (
    <ConteudoSection>
      <StepHeading
        step="02"
        label="Conteúdo programático"
        Icon={ShoppingCart}
        title="O que você vai aprender"
        sub="O curso acompanha a jornada de compra da sua loja: cada módulo cuida de um ponto dela, do planejamento à entrega."
      />
      <TierPicker {...p} unidade="passos" />

      {/* Barra de progresso do checkout */}
      <Reveal delay={60} className="mt-10">
        <ol className={`grid gap-2 rounded-2xl p-3 ${CARD}`} style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
          {tier.modules.map((m, i) => {
            const s = passo(m.title, i, n);
            return (
              <li key={m.title} className="relative flex flex-col items-center gap-1.5 text-center">
                {i > 0 && <span className="absolute right-1/2 top-5 h-0.5 w-[calc(100%+0.5rem)] bg-(--accent)/30" aria-hidden="true" />}
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-(--accent) text-white shadow-[0_6px_16px_-6px_var(--accent)]">
                  <s.Icon className="h-4.5 w-4.5" />
                </span>
                <span className={`hidden text-xs font-black sm:block ${INK}`}>{s.nome}</span>
                <span className={`text-[11px] font-bold ${SOFT}`}>{pad2(i)}</span>
              </li>
            );
          })}
        </ol>
      </Reveal>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {tier.modules.map((m, i) => {
          const s = passo(m.title, i, n);
          return (
            <Reveal key={`${tier.levelName}-${m.title}`} delay={(i % 2) * 60}>
              <article className={`flex h-full flex-col overflow-hidden rounded-2xl ${CARD}`}>
                <header className="flex items-center gap-3 border-b border-dashed border-[#ead6d2] px-5 py-4 dark:border-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--accent)/12 text-(--accent)">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className={`${KICKER} text-(--accent)`}>
                      Passo {pad2(i)} · {s.nome}
                    </p>
                    <h3 className={`text-base font-black leading-snug sm:text-lg ${INK}`}>{m.title}</h3>
                  </div>
                </header>
                {/* itens do pedido */}
                <ul className="flex-1 divide-y divide-[#f5e8e5] px-5 dark:divide-white/5">
                  {m.topics.map((topic, j) => (
                    <li key={topic} className="flex items-start gap-3 py-2.5">
                      <span className="mt-0.5 shrink-0 rounded-md bg-[#f7ebe8] px-1.5 py-0.5 font-mono text-[11px] font-bold text-[#7c2a32] dark:bg-white/10 dark:text-white/70">
                        {j + 1}×
                      </span>
                      <span className={`text-sm leading-snug ${BODY}`}>{topic}</span>
                    </li>
                  ))}
                </ul>
                <footer className={`flex items-center justify-between bg-[#fff7f4] px-5 py-2.5 text-xs font-bold dark:bg-white/[0.03] ${SOFT}`}>
                  <span>{m.topics.length} itens nesta etapa</span>
                  <span className="text-(--accent)">{i === n - 1 ? "Última etapa" : `Próximo: ${passo(tier.modules[i + 1].title, i + 1, n).nome}`}</span>
                </footer>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Pedido confirmado = resultado do nível */}
      <Reveal delay={80} className="mt-6">
        <div className="relative rounded-2xl bg-(--hero-bg) p-5 text-white dark:border dark:border-(--accent)/40 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500">
              <PackageCheck className="h-6 w-6" />
            </span>
            <div>
              <p className={`${KICKER} text-(--accent-2)`}>Pedido confirmado · {tier.levelName}</p>
              <p className="mt-2 text-base font-semibold leading-relaxed sm:text-lg">{tier.outcome}</p>
              <p className="mt-2 text-xs text-white/60">{ritmo(course, tier)}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <ToolsRow tools={tier.tools} label="Stack da loja" />
    </ConteudoSection>
  );
}

export { Publico as EcommercePublico, Conteudo as EcommerceConteudo };
