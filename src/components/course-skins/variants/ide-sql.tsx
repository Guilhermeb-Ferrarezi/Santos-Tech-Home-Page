import { useState } from "react";
import { Check, Database, Key, KeyRound, Play, Table2 } from "lucide-react";
import { K, M, NivelSeletor, P, Q } from "@/components/course-skins/variants/ide-kit";
import { nn, ritmo, slug, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Banco de Dados com SQL: “Para quem é” é uma consulta executada num cliente
 * de banco, com o resultado em grade; o conteúdo é o diagrama entidade-
 * relacionamento do nível, cada módulo uma tabela ligada à anterior.
 */

export function SqlPublico({ itens }: PublicoProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
      {/* barra do cliente */}
      <div className="flex flex-wrap items-center gap-3 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="flex items-center gap-1.5 font-mono text-[12px] text-white/60">
          <Database className="h-3.5 w-3.5 text-(--accent-2)" /> santos_tech
        </span>
        <span className="font-mono text-[12px] text-white/30">/ public</span>
        <span className="ml-auto flex items-center gap-1.5 rounded bg-[#238636] px-2.5 py-1 font-mono text-[11.5px] font-bold text-white">
          <Play className="h-3 w-3 fill-current" /> Executar
        </span>
      </div>
      {/* consulta */}
      <div className="border-b border-white/10 px-4 py-3 font-mono text-[13px] leading-6">
        <p><M>-- quem aproveita mais este curso?</M></p>
        <p>
          <K>SELECT</K> <P>perfil, combina</P>
        </p>
        <p>
          <K>FROM</K> <P>publico_alvo</P>
        </p>
        <p>
          <K>WHERE</K> <P>voce_se_identifica =</P> <K>TRUE</K><P>;</P>
        </p>
      </div>
      {/* resultado em grade */}
      <div className="flex gap-4 border-b border-white/10 bg-white/[0.02] px-4 pt-2 text-[12px] text-white/45">
        <span className="border-b-2 border-(--accent-2) pb-1.5 text-white">Resultado</span>
        <span className="pb-1.5">Plano de execução</span>
      </div>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.04] font-mono text-[11.5px] text-white/45">
            <th className="w-10 border-r border-white/10 px-2 py-2 text-right font-normal">#</th>
            <th className="px-3 py-2 font-normal">
              perfil <span className="text-white/25">text</span>
            </th>
            <th className="w-24 px-3 py-2 font-normal sm:w-28">
              combina <span className="hidden text-white/25 sm:inline">bool</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item, i) => (
            <tr key={item} className={`border-b border-white/5 ${i % 2 ? "bg-white/[0.02]" : ""}`}>
              <td className="border-r border-white/10 px-2 py-2.5 text-right align-top font-mono text-[12px] text-white/30">{i + 1}</td>
              <td className="px-3 py-2.5 text-[14px] leading-snug text-white/90">{item}</td>
              <td className="px-3 py-2.5 align-top">
                <span className="inline-flex items-center gap-1 rounded bg-[#3fb950]/15 px-1.5 py-0.5 font-mono text-[11.5px] font-bold text-[#3fb950]">
                  <Check className="h-3 w-3" strokeWidth={3} /> true
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="flex flex-wrap items-center justify-between gap-2 bg-white/[0.03] px-4 py-2 font-mono text-[11.5px] text-white/45">
        <span>
          {itens.length} linhas · 12 ms
        </span>
        <span className="text-[13px] font-bold text-(--accent-2)">→ Esse curso é pra você</span>
      </p>
    </div>
  );
}

// ── Diagrama ER ────────────────────────────────────────────────────────────

export function SqlConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const tabela = (t: string) => slug(t).split("_").slice(0, 3).join("_");

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <p className="flex items-center gap-2 font-mono text-[12.5px] text-white/60">
          <Database className="h-4 w-4 text-(--accent-2)" /> diagrama ER · schema <span className="text-white">{slug(tier.levelName)}</span>
        </p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} rotulo={(n) => slug(n)} />
      </div>

      <div
        className="grid gap-x-12 gap-y-10 p-5 sm:p-8 lg:grid-cols-3"
        style={{ backgroundImage: "linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      >
        {tier.modules.map((mod, i) => {
          const on = i === atual;
          const ultimo = i === total - 1;
          return (
            <div key={mod.title} className="relative">
              <button
                type="button"
                onClick={() => setSel(i)}
                className={`block w-full overflow-hidden rounded-lg border text-left transition ${
                  on ? "border-(--accent-2) shadow-[0_0_0_3px_rgba(247,165,65,0.18)]" : "border-white/15 hover:border-white/35"
                }`}
              >
                <span className={`flex items-center gap-2 px-3 py-2 ${on ? "bg-(--accent-2)/20" : "bg-white/[0.06]"}`}>
                  <Table2 className="h-4 w-4 shrink-0 text-(--accent-2)" />
                  <span className="min-w-0 truncate font-mono text-[12.5px] font-bold text-white">{tabela(mod.title)}</span>
                  <span className="ml-auto font-mono text-[11px] text-white/35">{nn(i)}</span>
                </span>
                <span className="block border-b border-white/10 bg-[#0f1524] px-3 py-2 text-[13.5px] font-semibold leading-snug text-white/90">{mod.title}</span>
                <span className="block bg-[#0b0f19]">
                  <span className="flex items-center gap-2 border-b border-white/5 px-3 py-1.5 font-mono text-[12px]">
                    <KeyRound className="h-3.5 w-3.5 shrink-0 text-[#FFD43B]" />
                    <span className="text-white/80">id</span>
                    <span className="ml-auto text-white/30">PK</span>
                  </span>
                  {mod.topics.map((t) => (
                    <span key={t} className="flex gap-2 border-b border-white/5 px-3 py-1.5 text-[13.5px] leading-snug text-white/80">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-white/35" />
                      <span className="min-w-0">{t}</span>
                    </span>
                  ))}
                  {i > 0 && (
                    <span className="flex items-center gap-2 px-3 py-1.5 font-mono text-[12px]">
                      <Key className="h-3.5 w-3.5 shrink-0 text-(--accent)" />
                      <span className="min-w-0 truncate text-white/60">{tabela(tier.modules[i - 1].title)}_id</span>
                      <span className="ml-auto text-white/30">FK</span>
                    </span>
                  )}
                </span>
              </button>
              {/* relacionamento com a próxima tabela (1:N) */}
              {!ultimo && (
                <>
                  <span className="absolute -bottom-10 left-8 h-10 w-px bg-white/30 lg:hidden" aria-hidden="true">
                    <span className="absolute -left-[5px] bottom-0 h-px w-[11px] bg-white/50" />
                    <span className="absolute -left-[5px] bottom-1.5 h-px w-[11px] bg-white/50" />
                  </span>
                  {i % 3 !== 2 && (
                    <span className="absolute -right-12 top-16 hidden h-px w-12 bg-white/30 lg:block" aria-hidden="true">
                      <span className="absolute -top-1 left-1 h-2 w-px bg-white/50" />
                      <span className="absolute -top-[5px] right-0 h-[11px] w-px bg-white/50" />
                      <span className="absolute right-0 top-0 h-px w-2.5 origin-right -rotate-[28deg] bg-white/50" />
                      <span className="absolute right-0 top-0 h-px w-2.5 origin-right rotate-[28deg] bg-white/50" />
                    </span>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* VIEW com o resultado do nível + ferramentas */}
      <div className="grid gap-5 border-t border-white/10 p-4 sm:p-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0 font-mono text-[12.5px]">
          <p>
            <K>CREATE VIEW</K> <P>resultado_{slug(tier.levelName)}</P> <K>AS</K>
          </p>
          <OutcomeText text={tier.outcome} className="mt-2 border-l-2 border-(--accent-2) pl-3 [font-family:Poppins,system-ui,sans-serif] text-[14px] leading-snug text-white/90" />
          <p className="mt-2 text-white/40">
            <M>-- {ritmo(tier, meta)}</M>
          </p>
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[12px]">
            <K>SELECT</K> <P>nome</P> <K>FROM</K> <P>ferramentas</P><P>;</P>
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tier.tools.map((tool) => (
              <span key={tool} className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[12.5px] text-white/75">
                <Q s="'">{tool}</Q>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
