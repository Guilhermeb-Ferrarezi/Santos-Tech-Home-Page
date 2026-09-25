import { useState, type ReactNode } from "react";
import { ArrowRight, Check, ChevronDown, ChevronRight, Code2, Layers, MonitorSmartphone, Palette, RotateCw, Rocket, Sparkles, X } from "lucide-react";
import { kebab, nn, pascal, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Front-end: tudo acontece dentro do navegador. “Para quem é” é uma página
 * renderizada com cards; o conteúdo é a página do curso montada com
 * componentes, inspecionada no DevTools (árvore de elementos + console).
 */

function Navegador({ abas, url, children }: { abas: { rotulo: string; ativa: boolean; onClick?: () => void }[]; url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
      {/* abas */}
      <div className="flex items-end gap-1 bg-[#070a12] px-2 pt-2">
        <span className="mb-2.5 ml-1 mr-2 hidden gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        {abas.map((a) => (
          <button
            key={a.rotulo}
            type="button"
            onClick={a.onClick}
            disabled={!a.onClick}
            className={`flex min-w-0 max-w-[220px] items-center gap-2 rounded-t-lg px-3 py-2 text-[12px] transition ${
              a.ativa ? "bg-[#131a2a] text-white" : "text-white/45 hover:bg-white/5 hover:text-white/75"
            }`}
          >
            <span className="h-3 w-3 shrink-0 rounded-sm bg-gradient-to-br from-(--accent) to-(--accent-2)" />
            <span className="truncate">{a.rotulo}</span>
            {a.ativa && <X className="h-3 w-3 shrink-0 text-white/35" />}
          </button>
        ))}
      </div>
      {/* barra de endereço */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#131a2a] px-3 py-2">
        <RotateCw className="h-3.5 w-3.5 shrink-0 text-white/35" />
        <span className="min-w-0 flex-1 truncate rounded-full bg-black/40 px-3 py-1 font-mono text-[12px] text-white/60">
          <span className="text-white/35">http://</span>
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

const ICONES = [Sparkles, Palette, Layers, Rocket, Code2, MonitorSmartphone];

export function FrontendPublico({ itens }: PublicoProps) {
  return (
    <Navegador abas={[{ rotulo: "Para quem é · Santos Tech", ativa: true }]} url="localhost:5173/para-quem-e">
      <div className="bg-[radial-gradient(ellipse_at_top,rgba(75,139,245,0.18),transparent_60%)] px-4 pb-8 pt-5 sm:px-8">
        {/* navbar da página */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="flex items-center gap-2 text-[13px] font-bold text-white">
            <span className="h-5 w-5 rounded-md bg-gradient-to-br from-(--accent) to-(--accent-2)" /> meu-primeiro-site
          </span>
          <span className="hidden gap-5 text-[12px] text-white/50 sm:flex">
            <span>Início</span>
            <span className="text-white">Para quem é</span>
            <span>Projetos</span>
          </span>
        </div>

        <p className="mt-7 font-mono text-[12px] text-(--accent-2)">&lt;section id=&quot;publico&quot;&gt;</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Feito pra você que…</h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((item, i) => {
            const Icone = ICONES[i % ICONES.length];
            return (
              <div
                key={item}
                className={`relative rounded-xl border bg-white/[0.04] p-4 ${i === 0 ? "border-(--accent) outline outline-2 outline-offset-2 outline-(--accent)/60" : "border-white/10"}`}
              >
                {i === 0 && (
                  <span className="absolute -top-3 left-3 rounded bg-(--accent) px-1.5 py-0.5 font-mono text-[11px] font-bold text-white">
                    div.card
                  </span>
                )}
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--accent-2)/15 text-(--accent-2)">
                  <Icone className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[14px] leading-snug text-white/85">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-lg bg-(--accent-2) px-4 py-2.5 text-[14px] font-bold text-[#0b0f19]">
            Esse curso é pra você <ArrowRight className="h-4 w-4" />
          </span>
          <span className="font-mono text-[12px] text-white/35">&lt;/section&gt;</span>
        </div>
      </div>
    </Navegador>
  );
}

export function FrontendConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const atual = Math.min(sel, tier.modules.length - 1);
  const comp = (t: string) => pascal(t) || "Modulo";

  return (
    <Navegador
      abas={course.tiers.map((t, i) => ({
        rotulo: t.levelName,
        ativa: i === tierIndex,
        onClick: course.tiers.length > 1 ? () => onSelectTier(i) : undefined,
      }))}
      url={`localhost:5173/curso/${kebab(tier.levelName)}`}
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr]">
        {/* A página renderizada */}
        <div className="min-w-0 space-y-2.5 px-4 py-5 sm:px-6">
          {tier.modules.map((mod, i) =>
            i === atual ? (
              <div key={mod.title} className="relative rounded-xl border border-(--accent) bg-(--accent)/[0.06] p-4 outline outline-2 outline-offset-2 outline-(--accent)/50 sm:p-5">
                <span className="absolute -top-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded bg-(--accent) px-1.5 py-0.5 font-mono text-[11px] font-bold text-white">
                  &lt;{comp(mod.title)} /&gt;
                </span>
                <p className="font-mono text-[12px] text-(--accent-2)">Módulo {nn(i)}</p>
                <h3 className="mt-1 text-lg font-bold leading-snug text-white">{mod.title}</h3>
                <ul className="mt-3 space-y-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex gap-2.5 text-[14px] leading-snug text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-2)" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <button
                key={mod.title}
                type="button"
                onClick={() => setSel(i)}
                className="flex w-full items-center gap-3 rounded-xl border border-dashed border-white/12 bg-white/[0.02] px-4 py-2.5 text-left text-[14px] text-white/65 transition hover:border-(--accent)/60 hover:text-white"
              >
                <span className="font-mono text-[12px] text-white/35">{nn(i)}</span>
                <span className="min-w-0 flex-1">{mod.title}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-white/30" />
              </button>
            ),
          )}
        </div>

        {/* DevTools */}
        <div className="min-w-0 border-t border-white/10 bg-[#080b13] font-mono text-[12.5px] lg:border-l lg:border-t-0">
          <div className="flex gap-4 border-b border-white/10 px-4 py-2 text-[11px] text-white/40">
            <span className="border-b-2 border-(--accent) pb-1 text-white">Elements</span>
            <span>Console</span>
            <span className="hidden sm:inline">Network</span>
          </div>
          <div className="px-3 py-3 leading-6">
            <p className="flex items-center gap-1 text-white/55">
              <ChevronDown className="h-3 w-3" />
              <span className="text-[#f07178]">&lt;main</span> <span className="text-[#ffcb6b]">class</span>=<span className="text-(--accent-2)">&quot;curso&quot;</span>
              <span className="text-[#f07178]">&gt;</span>
            </p>
            <p className="flex items-center gap-1 pl-4 text-white/55">
              <ChevronDown className="h-3 w-3 shrink-0" />
              <span className="truncate">
                <span className="text-[#f07178]">&lt;Nivel</span> <span className="text-[#ffcb6b]">nome</span>=<span className="text-(--accent-2)">&quot;{kebab(tier.levelName)}&quot;</span>
                <span className="text-[#f07178]">&gt;</span>
              </span>
            </p>
            {tier.modules.map((mod, i) => (
              <button
                key={mod.title}
                type="button"
                onClick={() => setSel(i)}
                className={`flex w-full items-center gap-1 rounded-sm py-0.5 pl-8 pr-2 text-left transition ${
                  i === atual ? "bg-(--accent)/25 text-white" : "text-white/60 hover:bg-white/5"
                }`}
              >
                {i === atual ? <ChevronDown className="h-3 w-3 shrink-0" /> : <ChevronRight className="h-3 w-3 shrink-0" />}
                <span className="min-w-0 truncate">
                  <span className="text-[#f07178]">&lt;{comp(mod.title)}</span>
                  <span className="text-[#f07178]"> /&gt;</span>
                </span>
                {i === atual && <span className="ml-auto shrink-0 text-white/35">== $0</span>}
              </button>
            ))}
            <p className="pl-4 text-[#f07178]">&lt;/Nivel&gt;</p>
            <p className="text-[#f07178]">&lt;/main&gt;</p>
          </div>

          {/* Console com o resultado do nível */}
          <div className="border-t border-white/10 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Console</p>
            <p className="mt-2 text-white/50">
              <span className="text-(--accent)">&gt;</span> curso.resultado
            </p>
            <OutcomeText
              text={tier.outcome}
              className="mt-1 [font-family:Poppins,system-ui,sans-serif] text-[13.5px] leading-snug text-white/90"
              antes={<span className="text-(--accent-2)">“</span>}
              depois={<span className="text-(--accent-2)">”</span>}
            />
            <p className="mt-2 text-white/40">{ritmo(tier, meta)}</p>
          </div>

          {/* Dependências */}
          <div className="border-t border-white/10 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">package.json · dependências</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tier.tools.map((tool) => (
                <span key={tool} className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 [font-family:Poppins,system-ui,sans-serif] text-[12.5px] text-white/75">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Navegador>
  );
}
