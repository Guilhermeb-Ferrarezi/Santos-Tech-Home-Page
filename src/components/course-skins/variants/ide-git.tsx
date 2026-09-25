import { useState } from "react";
import { Check, CheckCircle2, FileText, GitMerge, GitPullRequest, MessageSquare, Tag } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { curto, hash7, kebab, nn, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Git e GitHub: “Para quem é” é um pull request aberto (descrição com
 * checklist, checagens e botão de merge); o conteúdo é o grafo de commits,
 * cada módulo uma branch que nasce da main e volta com merge, com o diff do
 * commit selecionado ao lado.
 */

const BRANCH_CORES = ["#F4845F", "#4B8BF5", "#c792ea", "#7CE38B", "#FFD43B", "#f07178"];

export function GitPublico({ itens, course }: PublicoProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19]">
      {/* Cabeçalho do PR */}
      <div className="border-b border-white/10 px-4 py-5 sm:px-6">
        <p className="text-xl font-bold leading-snug text-white sm:text-2xl">
          Você entra para o time <span className="font-normal text-white/35">#42</span>
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] text-white/55">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#238636] px-3 py-1 font-semibold text-white">
            <GitPullRequest className="h-4 w-4" /> Aberto
          </span>
          <span>
            <b className="text-white/80">voce</b> quer fazer merge de {itens.length} commits em{" "}
            <code className="rounded bg-(--accent)/15 px-1.5 py-0.5 font-mono text-[12px] text-(--accent)">main</code> a partir de{" "}
            <code className="rounded bg-(--accent)/15 px-1.5 py-0.5 font-mono text-[12px] text-(--accent)">voce/{curto(course.nome, 2)}</code>
          </span>
        </div>
        <div className="mt-5 flex gap-5 overflow-x-auto border-b border-white/10 text-[13px] text-white/50">
          <span className="flex shrink-0 items-center gap-1.5 border-b-2 border-(--accent-2) pb-2 text-white">
            <MessageSquare className="h-4 w-4" /> Conversa
          </span>
          <span className="shrink-0 pb-2">Commits {itens.length}</span>
          <span className="shrink-0 pb-2">Checks 3</span>
          <span className="hidden shrink-0 pb-2 sm:inline">Arquivos alterados</span>
        </div>
      </div>

      <div className="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_240px]">
        <div className="min-w-0 space-y-4">
          {/* Descrição do PR */}
          <div className="flex gap-3">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-(--accent-2) to-(--accent) font-bold text-white">
              V
            </span>
            <div className="min-w-0 flex-1 overflow-hidden rounded-lg border border-white/15">
              <p className="border-b border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/55">
                <b className="text-white/85">voce</b> comentou
              </p>
              <div className="px-4 py-4">
                <p className="text-[15px] font-bold text-white">Por que este PR faz sentido</p>
                <ul className="mt-3 space-y-2.5">
                  {itens.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[14px] leading-snug text-white/85">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-(--accent)">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Caixa de merge */}
          <div className="flex gap-3">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#238636]">
              <GitMerge className="h-4.5 w-4.5 text-white" />
            </span>
            <div className="min-w-0 flex-1 rounded-lg border border-[#238636]/60">
              <p className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-[14px] font-semibold text-white">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3fb950]" /> Todas as checagens passaram
              </p>
              <div className="flex flex-wrap items-center gap-3 px-4 py-3">
                <span className="rounded-md bg-[#238636] px-4 py-2 text-[14px] font-bold text-white">Merge pull request</span>
                <span className="text-[14px] font-semibold text-(--accent-2)">Esse curso é pra você</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lateral do PR */}
        <aside className="grid content-start gap-4 text-[13px] sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["Revisores", <span className="flex items-center gap-2 text-white/80"><span className="h-5 w-5 rounded-full bg-(--accent)" /> professor <Check className="h-3.5 w-3.5 text-[#3fb950]" /></span>],
            [
              "Etiquetas",
              <span className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-(--accent-2)/20 px-2 py-0.5 text-[12px] font-semibold text-(--accent-2)">carreira</span>
                <span className="rounded-full bg-(--accent)/20 px-2 py-0.5 text-[12px] font-semibold text-(--accent)">aula individual</span>
              </span>,
            ],
            ["Marco", <span className="text-white/80">{course.nome}</span>],
          ].map(([rotulo, valor]) => (
            <div key={rotulo as string} className="border-b border-white/10 pb-3">
              <p className="mb-1.5 text-[12px] font-semibold text-white/45">{rotulo}</p>
              {valor}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

// ── Grafo de commits ───────────────────────────────────────────────────────

/** Coluna do grafo: main contínua à esquerda, branch do módulo à direita. */
function Trilho({ cor, on }: { cor: string; on: boolean }) {
  return (
    <svg viewBox="0 0 64 100" preserveAspectRatio="none" className="absolute inset-y-0 left-0 h-full w-16" aria-hidden="true">
      <line x1="16" y1="0" x2="16" y2="100" stroke="#8b949e" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      <path d="M16 12 C 16 26, 44 22, 44 36 L 44 64 C 44 78, 16 74, 16 88" fill="none" stroke={cor} strokeWidth={on ? 3.5 : 2.5} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function GitConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const cor = (i: number) => BRANCH_CORES[i % BRANCH_CORES.length];
  const branch = (i: number, t: string) => `modulo-${nn(i)}/${curto(t)}`;

  return (
    <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19] lg:grid-cols-[1.05fr_1fr]">
      {/* Grafo */}
      <div className="min-w-0 border-b border-white/10 py-4 lg:border-b-0 lg:border-r">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 pb-3">
          <p className="font-mono text-[12px] text-white/45">
            <span className="text-(--accent)">$</span> git log --graph --all
          </p>
          <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} rotulo={(n) => `nivel/${kebab(n)}`} />
        </div>

        {/* commit inicial */}
        <div className="relative flex min-h-[44px] items-center">
          <svg viewBox="0 0 64 44" className="absolute left-0 top-0 h-[44px] w-16" aria-hidden="true">
            <line x1="16" y1="22" x2="16" y2="44" stroke="#8b949e" strokeWidth="2.5" />
            <circle cx="16" cy="22" r="6" fill="#0b0f19" stroke="#8b949e" strokeWidth="2.5" />
          </svg>
          <p className="pl-16 font-mono text-[12.5px] text-white/50">
            <span className="text-white/35">{hash7("init")}</span> commit inicial ·{" "}
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-white/70">main</span>
          </p>
        </div>

        {tier.modules.map((mod, i) => {
          const on = i === atual;
          return (
            <button
              key={mod.title}
              type="button"
              onClick={() => setSel(i)}
              className={`relative block w-full py-3 pl-16 pr-4 text-left transition ${on ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"}`}
            >
              <Trilho cor={cor(i)} on={on} />
              {/* nó do commit na branch */}
              <span
                className="absolute left-[44px] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-[#0b0f19]"
                style={{ borderColor: cor(i), background: on ? cor(i) : "#0b0f19" }}
              />
              <span className="block pl-2">
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px]">
                  <span className="text-white/35">{hash7(mod.title)}</span>
                  <span className="rounded px-1.5 py-0.5 font-semibold" style={{ color: cor(i), background: `${cor(i)}22` }}>
                    {branch(i, mod.title)}
                  </span>
                </span>
                <span className={`mt-1 block text-[14px] leading-snug ${on ? "font-semibold text-white" : "text-white/75"}`}>{mod.title}</span>
              </span>
            </button>
          );
        })}

        {/* tag final */}
        <div className="relative flex min-h-[48px] items-center">
          <svg viewBox="0 0 64 48" className="absolute left-0 top-0 h-[48px] w-16" aria-hidden="true">
            <line x1="16" y1="0" x2="16" y2="24" stroke="#8b949e" strokeWidth="2.5" />
            <circle cx="16" cy="24" r="7" fill="var(--accent-2)" />
          </svg>
          <p className="flex items-center gap-2 pl-16 font-mono text-[12.5px] text-white/60">
            <Tag className="h-3.5 w-3.5 text-(--accent-2)" />
            <span className="rounded bg-(--accent-2)/20 px-1.5 py-0.5 font-semibold text-(--accent-2)">v1.0</span> HEAD → main
          </p>
        </div>
      </div>

      {/* Diff do commit selecionado */}
      <div className="min-w-0 p-4 sm:p-6">
        <p className="font-mono text-[12px] text-white/40">
          commit {hash7(m.title)}{hash7(m.title, 17)} · merge em main
        </p>
        <p className="mt-2 text-lg font-bold leading-snug text-white">
          Módulo {nn(atual)} · {m.title}
        </p>
        <p className="mt-2 flex items-center gap-3 font-mono text-[12px]">
          <span className="text-[#3fb950]">+{m.topics.length}</span>
          <span className="text-[#f85149]">−0</span>
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, k) => (
              <span key={k} className="h-2 w-2 rounded-[2px] bg-[#3fb950]" />
            ))}
          </span>
        </p>
        <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
          <p className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[12px] text-white/65">
            <FileText className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{branch(atual, m.title)}.md</span>
          </p>
          <div className="py-1">
            {m.topics.map((t, k) => (
              <p key={t} className="flex bg-[#3fb950]/[0.09] py-1 pr-3 text-[14px] leading-snug text-[#c9f7d3]">
                <span className="w-9 shrink-0 select-none text-right font-mono text-[12px] text-white/25">{k + 1}</span>
                <span className="w-6 shrink-0 text-center font-mono text-[#3fb950]">+</span>
                <span className="min-w-0">{t}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-(--accent-2)/30 bg-(--accent-2)/[0.06] p-4">
          <p className="flex items-center gap-2 font-mono text-[12px] font-bold text-(--accent-2)">
            <Tag className="h-3.5 w-3.5" /> release v1.0 · {tier.levelName}
          </p>
          <OutcomeText text={tier.outcome} className="mt-2 text-[14px] leading-snug text-white/90" />
          <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tier.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-[12.5px] text-white/75">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
