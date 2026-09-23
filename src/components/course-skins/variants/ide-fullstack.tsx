import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Database, Monitor, Rocket, Server, Wrench } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { curto, nn, ritmo, slug, type ConteudoProps, type Modulo, type PublicoProps } from "@/components/course-skins/variants/ide-util";

/**
 * Full Stack: “Para quem é” é a própria pilha — camadas empilhadas da tela ao
 * servidor, cada uma com um perfil; o conteúdo distribui os módulos pelas
 * camadas lado a lado (front → API → banco → entrega) e mostra o caminho de
 * uma requisição até o módulo selecionado.
 */

const CAMADAS_PUBLICO = ["tela", "componentes", "api", "regras", "banco", "deploy", "nuvem"];

export function FullstackPublico({ itens }: PublicoProps) {
  const n = itens.length;
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_200px]">
      <div className="mx-auto w-full max-w-4xl space-y-2.5">
        {itens.map((item, i) => {
          // cada camada é um pouco mais larga que a de cima: a pilha se abre até a base
          const recuo = ((n - 1 - i) / Math.max(1, n - 1)) * 8;
          const mix = n === 1 ? 0 : i / (n - 1);
          return (
            <div key={item} style={{ marginInline: `${recuo}%` }}>
              <div
                className="relative flex items-center gap-3 rounded-lg border border-white/15 px-3 py-3 shadow-[0_6px_0_-1px_rgba(0,0,0,0.55)] sm:gap-4 sm:px-4"
                style={{
                  background: `linear-gradient(90deg, color-mix(in srgb, var(--accent-2) ${Math.round((1 - mix) * 22)}%, #111827), color-mix(in srgb, var(--accent) ${Math.round(mix * 26)}%, #0f1524))`,
                }}
              >
                <span className="w-[86px] shrink-0 rounded bg-black/40 px-2 py-1 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-white/70 sm:w-[104px]">
                  {CAMADAS_PUBLICO[i % CAMADAS_PUBLICO.length]}
                </span>
                <span className="min-w-0 text-[14px] leading-snug text-white/90">{item}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* chave lateral: você cobre a pilha inteira */}
      <div className="flex items-center gap-4 lg:h-full">
        <span className="hidden h-full min-h-[200px] w-4 rounded-r-xl border-y-2 border-r-2 border-(--accent-2)/70 lg:block" />
        <div className="w-full rounded-xl border border-(--accent-2)/40 bg-(--accent-2)/10 p-4 text-center lg:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-(--accent-2)">full stack</p>
          <p className="mt-1 text-[15px] font-bold leading-snug text-white">Da tela ao banco: esse curso é pra você</p>
        </div>
      </div>
    </div>
  );
}

// ── Camadas lado a lado ────────────────────────────────────────────────────

type Camada = { chave: string; nome: string; icone: LucideIcon; rota: (i: number, t: string) => string };

const CAMADAS: Camada[] = [
  { chave: "base", nome: "Base", icone: Wrench, rota: () => "~/projeto $ git init" },
  { chave: "front", nome: "Front-end", icone: Monitor, rota: (i) => `<Modulo${nn(i)} />` },
  { chave: "api", nome: "API", icone: Server, rota: (i) => `GET /api/modulos/${nn(i)}` },
  { chave: "banco", nome: "Banco de dados", icone: Database, rota: (_, t) => `tabela ${curto(t, 2, "_")}` },
  { chave: "entrega", nome: "Entrega", icone: Rocket, rota: (i) => `deploy #${nn(i)}` },
];

/** Em qual camada da pilha o módulo mora (pelo título). */
function camadaDe(m: Modulo): string {
  const t = slug(m.title);
  if (/banco|sql|dados|prisma|postgres|mongo/.test(t)) return "banco";
  if (/node|api|back|express|servidor|auth|arquitetura/.test(t)) return "api";
  if (/html|css|react|front|next|javascript|typescript|interface|tailwind/.test(t)) return "front";
  if (/fundament|setup|ambiente|introduc|logica/.test(t)) return "base";
  return "entrega";
}

export function FullstackConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  const grupos = CAMADAS.map((c) => ({ ...c, mods: tier.modules.map((mod, i) => ({ mod, i })).filter(({ mod }) => camadaDe(mod) === c.chave) })).filter(
    (g) => g.mods.length,
  );
  const camadaAtual = CAMADAS.find((c) => c.chave === camadaDe(m)) ?? CAMADAS[0];
  const iCamada = grupos.findIndex((g) => g.chave === camadaAtual.chave);

  return (
    <div className="rounded-xl border border-white/10 bg-[#0b0f19] p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/40">
          {total} módulos em {grupos.length} camadas
        </p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} estilo="pilula" />
      </div>

      {/* Colunas por camada */}
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-flow-col xl:auto-cols-fr xl:grid-cols-none">
        {grupos.map((g, gi) => {
          const Icone = g.icone;
          const ativa = gi === iCamada;
          return (
            <div key={g.chave} className="relative">
              <div className={`h-full rounded-xl border p-3 transition ${ativa ? "border-(--accent-2)/60 bg-(--accent-2)/[0.06]" : "border-white/10 bg-white/[0.02]"}`}>
                <p className="flex items-center gap-2 px-1 pb-3 pt-1">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${ativa ? "bg-(--accent-2) text-[#0b0f19]" : "bg-white/10 text-white/70"}`}>
                    <Icone className="h-4 w-4" />
                  </span>
                  <span className="text-[14px] font-bold text-white">{g.nome}</span>
                  <span className="ml-auto font-mono text-[11px] text-white/35">{g.mods.length}</span>
                </p>
                <div className="space-y-1.5">
                  {g.mods.map(({ mod, i }) => (
                    <button
                      key={mod.title}
                      type="button"
                      onClick={() => setSel(i)}
                      className={`flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] leading-snug transition ${
                        i === atual ? "bg-(--accent)/25 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="mt-px font-mono text-[11.5px] text-white/35">{nn(i)}</span>
                      {mod.title}
                    </button>
                  ))}
                </div>
              </div>
              {gi < grupos.length - 1 && (
                <span className="absolute -right-[11px] top-5 z-10 hidden h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-[#0b0f19] xl:flex">
                  <ArrowRight className="h-3 w-3 text-white/50" />
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Módulo selecionado + caminho da requisição pelas camadas */}
      <div className="mt-5 grid gap-5 rounded-xl border border-white/10 bg-[#0f1524] p-4 sm:p-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-1.5 font-mono text-[11.5px] text-white/45">
            {grupos.map((g, gi) => (
              <span key={g.chave} className="flex items-center gap-1.5">
                {gi > 0 && <ArrowRight className="h-3 w-3 text-white/25" />}
                <span className={g.chave === camadaAtual.chave ? "rounded bg-(--accent-2)/20 px-1.5 py-0.5 text-(--accent-2)" : ""}>
                  {g.chave === camadaAtual.chave ? camadaAtual.rota(atual, m.title) : g.nome}
                </span>
              </span>
            ))}
          </p>
          <p className="mt-3 text-lg font-bold leading-snug text-white">
            <span className="text-white/40">{nn(atual)} · </span>
            {m.title}
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {m.topics.map((t) => (
              <li key={t} className="flex gap-2.5 rounded-lg bg-white/[0.04] px-3 py-2 text-[14px] leading-snug text-white/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-2)" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 space-y-4 lg:border-l lg:border-white/10 lg:pl-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Você sai fazendo</p>
            <p className="mt-2 text-[14px] leading-snug text-white/90">{tier.outcome}</p>
            <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Stack</p>
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
    </div>
  );
}
