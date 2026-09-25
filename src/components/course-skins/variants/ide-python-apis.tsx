import { useState, type ReactNode } from "react";
import { Circle, FileCode2, Play, Plus, Square } from "lucide-react";
import { F, K, NivelSeletor, P, Q } from "@/components/course-skins/variants/ide-kit";
import { curto, kebab, nn, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * APIs e Integrações com Python: “Para quem é” é um notebook Jupyter que
 * chama uma API e mostra o resultado; o conteúdo é o mapa de integrações —
 * o seu script no centro, cada módulo um serviço conectado, com a
 * requisição e a resposta do serviço selecionado.
 */

function Celula({ n, entrada, saida }: { n: number; entrada: ReactNode; saida?: ReactNode }) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-x-2 sm:grid-cols-[72px_1fr]">
      <p className="pt-2.5 text-right font-mono text-[11.5px] text-(--accent)">[{n}]:</p>
      <div className="min-w-0 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[13px] leading-6">{entrada}</div>
      {saida && (
        <>
          <p className="pt-2.5 text-right font-mono text-[11.5px] text-[#f78c6c]">[{n}]:</p>
          <div className="min-w-0 px-1 py-2">{saida}</div>
        </>
      )}
    </div>
  );
}

export function PythonApisPublico({ itens }: PublicoProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
      {/* barra do notebook */}
      <div className="flex flex-wrap items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] text-white/55">
        <FileCode2 className="h-4 w-4 text-(--accent-2)" />
        <span className="font-mono text-white/80">para_quem_e.ipynb</span>
        <span className="flex items-center gap-2 text-white/35">
          <Plus className="h-3.5 w-3.5" /> <Play className="h-3.5 w-3.5" /> <Square className="h-3 w-3" />
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[11.5px]">
          Python 3 <Circle className="h-2.5 w-2.5 fill-current text-white/40" />
        </span>
      </div>

      <div className="space-y-4 px-2 py-5 sm:px-5">
        {/* célula markdown renderizada */}
        <div className="grid grid-cols-[52px_1fr] gap-x-2 sm:grid-cols-[72px_1fr]">
          <span />
          <p className="text-xl font-bold text-white">Quem aproveita mais este curso?</p>
        </div>

        <Celula
          n={1}
          entrada={
            <>
              <p>
                <P>resp = requests.</P>
                <F>get</F>
                <P>(</P>
                <Q>https://api.santos-tech.com/publico-alvo</Q>
                <P>)</P>
              </p>
              <p>
                <P>publico = pd.</P>
                <F>Series</F>
                <P>(resp.</P>
                <F>json</F>
                <P>())</P>
              </p>
              <p>
                <P>publico</P>
              </p>
            </>
          }
          saida={
            <table className="w-full border-collapse">
              <tbody>
                {itens.map((item, i) => (
                  <tr key={item} className={i % 2 ? "" : "bg-white/[0.04]"}>
                    <td className="w-8 px-2 py-1.5 text-right align-top font-mono text-[12px] font-bold text-white/45">{i}</td>
                    <td className="px-2 py-1.5 text-[14px] leading-snug text-white/90">{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        />

        <Celula
          n={2}
          entrada={
            <p>
              <Q>você</Q> <K>in</K> <P>publico.values</P>
            </p>
          }
          saida={
            <p className="font-mono text-[13px]">
              <span className="text-[#f78c6c]">True</span>
              <span className="ml-3 [font-family:Poppins,system-ui,sans-serif] text-[14px] font-semibold text-(--accent-2)">→ Esse curso é pra você</span>
            </p>
          }
        />
      </div>
    </div>
  );
}

// ── Mapa de integrações ────────────────────────────────────────────────────

const METODO = ["GET", "POST", "GET", "PUT", "POST", "GET", "GET"];

export function PythonApisConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const multiTier = course.tiers.length > 1;
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const metade = Math.ceil(total / 2);
  const lados = [tier.modules.slice(0, metade).map((mod, k) => ({ mod, i: k })), tier.modules.slice(metade).map((mod, k) => ({ mod, i: metade + k }))];
  const endpoint = (t: string) => `/v1/${curto(t, 2)}`;

  const servico = (mod: (typeof tier.modules)[number], i: number, lado: 0 | 1) => {
    const on = i === atual;
    return (
      <button
        key={mod.title}
        type="button"
        onClick={() => setSel(i)}
        className={`relative flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition ${
          on ? "border-(--accent-2) bg-(--accent-2)/10" : "border-white/10 bg-[#0f1524] hover:border-white/30"
        }`}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[12px] font-bold ${
            on ? "bg-(--accent-2) text-[#0b0f19]" : "bg-white/10 text-white/70"
          }`}
        >
          {nn(i)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[14px] font-semibold leading-snug text-white/90">{mod.title}</span>
          <span className="mt-0.5 block font-mono text-[11.5px] text-[#49cc90]">● 200 OK</span>
        </span>
        {/* conector até o hub (só no desktop) */}
        <span
          aria-hidden="true"
          className={`absolute top-1/2 hidden h-0.5 w-10 lg:block ${lado === 0 ? "-right-10" : "-left-10"} ${on ? "bg-(--accent-2)" : "bg-white/15"}`}
        />
      </button>
    );
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#0b0f19] p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/40">Integrações · {total} serviços</p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} rotulo={(n) => `ambiente: ${kebab(n)}`} />
      </div>

      <div className="mt-6 grid items-center gap-4 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-10">
        <div className="order-2 space-y-3 lg:order-1">
          {lados[0].map(({ mod, i }) => servico(mod, i, 0))}
        </div>

        {/* Hub: o seu script, com requisição e resposta do serviço selecionado */}
        <div className="order-1 min-w-0 overflow-hidden rounded-xl border-2 border-(--accent)/60 bg-[#0d1322] shadow-[0_0_60px_-20px_var(--accent)] lg:order-2">
          <p className="flex items-center gap-2 border-b border-white/10 bg-(--accent)/15 px-4 py-2 font-mono text-[12px] text-white/80">
            <FileCode2 className="h-3.5 w-3.5 text-(--accent-2)" /> integra.py
          </p>
          <div className="px-4 py-3 font-mono text-[12.5px] leading-6">
            <p>
              <P>r = cliente.</P>
              <F>{METODO[atual % METODO.length].toLowerCase()}</F>
              <P>(</P>
              <Q>{endpoint(m.title)}</Q>
              <P>)</P>
            </p>
            <p className="text-white/40"># módulo {atual + 1} de {total}</p>
          </div>
          <div className="border-t border-white/10 px-4 py-3">
            <p className="flex items-center justify-between font-mono text-[11.5px]">
              <span className="text-[#49cc90]">200 OK</span>
              <span className="text-white/35">{80 + ((atual * 37) % 140)} ms</span>
            </p>
            <p className="mt-2 text-[15px] font-bold leading-snug text-white">{m.title}</p>
            <ul className="mt-2 space-y-1.5">
              {m.topics.map((t) => (
                <li key={t} className="flex gap-2 text-[14px] leading-snug text-white/85">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent-2)" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-3 space-y-3">
          {lados[1].map(({ mod, i }) => servico(mod, i, 1))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 border-t border-white/10 pt-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">{multiTier ? "Ao final do nível" : "Ao final do curso"}</p>
          <OutcomeText text={tier.outcome} className="mt-2 text-[14px] leading-snug text-white/90" />
          <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">requirements.txt</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tier.tools.map((tool) => (
              <span key={tool} className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[12.5px] text-white/75">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
