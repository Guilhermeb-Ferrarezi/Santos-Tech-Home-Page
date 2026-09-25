import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronRight, Server } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { curto, nn, ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Back-End: “Para quem é” são os logs do servidor recebendo uma requisição
 * por perfil; o conteúdo é a documentação da API do curso, no estilo
 * Swagger/OpenAPI, cada módulo uma rota com a resposta de exemplo.
 */

const METODOS = [
  { m: "GET", cor: "#61affe" },
  { m: "POST", cor: "#49cc90" },
  { m: "PUT", cor: "#fca130" },
  { m: "GET", cor: "#61affe" },
  { m: "PATCH", cor: "#50e3c2" },
  { m: "POST", cor: "#49cc90" },
  { m: "GET", cor: "#61affe" },
];

export function BackendPublico({ itens }: PublicoProps) {
  const hora = (i: number) => `14:02:${String(11 + i * 7).padStart(2, "0")}`;
  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07090f] font-mono text-[12.5px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2 text-[11.5px] text-white/50">
          <Server className="h-3.5 w-3.5 text-(--accent-2)" /> logs · api
          <span className="ml-auto flex items-center gap-1.5 text-[#49cc90]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#49cc90]" /> ao vivo
          </span>
        </div>
        <div className="space-y-0.5 px-4 py-4">
          <p className="text-white/45">
            <span className="text-(--accent)">$</span> node server.js
          </p>
          <p className="pb-2 text-(--accent-2)">▲ API ouvindo em http://localhost:3000</p>
          {itens.map((item, i) => (
            <div key={item} className="border-l-2 border-[#49cc90]/50 py-1.5 pl-3">
              <p className="flex flex-wrap items-center gap-x-2 text-[11.5px] text-white/40">
                <span>{hora(i)}</span>
                <span className="rounded bg-[#49cc90]/15 px-1 font-bold text-[#49cc90]">POST</span>
                <span className="text-white/60">/matriculas</span>
                <span className="text-[#49cc90]">201</span>
                <span>{12 + ((i * 7) % 30)}ms</span>
              </p>
              <p className="mt-0.5 [font-family:Poppins,system-ui,sans-serif] text-[14px] leading-snug text-white/90">{item}</p>
            </div>
          ))}
          <p className="pt-3 font-bold text-[#49cc90]">✓ 201 Created · Esse curso é pra você</p>
        </div>
      </div>

      {/* Inspetor da última requisição */}
      <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19] font-mono text-[12.5px]">
        <p className="border-b border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
          Resposta · POST /matriculas
        </p>
        <div className="space-y-1 px-4 py-4 leading-6">
          <p>
            <span className="text-[#49cc90]">HTTP/1.1 201</span> <span className="text-white/60">Created</span>
          </p>
          <p className="text-white/45">content-type: application/json</p>
          <p className="pt-2 text-white/80">{"{"}</p>
          <p className="pl-4">
            <span className="text-[#f07178]">&quot;aluno&quot;</span>
            <span className="text-white/60">: </span>
            <span className="text-(--accent-2)">&quot;você&quot;</span>
            <span className="text-white/60">,</span>
          </p>
          <p className="pl-4">
            <span className="text-[#f07178]">&quot;perfisAtendidos&quot;</span>
            <span className="text-white/60">: </span>
            <span className="text-[#f78c6c]">{itens.length}</span>
            <span className="text-white/60">,</span>
          </p>
          <p className="pl-4">
            <span className="text-[#f07178]">&quot;cursoIdeal&quot;</span>
            <span className="text-white/60">: </span>
            <span className="text-[#f78c6c]">true</span>
          </p>
          <p className="text-white/80">{"}"}</p>
        </div>
        {/* métricas do servidor */}
        <div className="mt-auto grid grid-cols-3 border-y border-white/10 text-center">
          {[
            ["requisições", String(itens.length)],
            ["erros", "0"],
            ["p95", "38ms"],
          ].map(([rotulo, valor]) => (
            <div key={rotulo} className="border-r border-white/10 px-2 py-3 last:border-r-0">
              <p className="text-[18px] font-bold text-white">{valor}</p>
              <p className="mt-0.5 text-[10.5px] uppercase tracking-[0.15em] text-white/35">{rotulo}</p>
            </div>
          ))}
        </div>
        <p className="flex items-center gap-2 bg-[#49cc90]/10 px-4 py-4 text-[15px] font-bold text-white [font-family:Poppins,system-ui,sans-serif]">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#49cc90]" /> Esse curso é pra você
        </p>
      </div>
    </div>
  );
}

// ── Documentação da API (estilo Swagger) ───────────────────────────────────

export function BackendConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [aberto, setAberto] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(aberto, total - 1);
  const rota = (i: number, t: string) => `/modulos/${nn(i)}/${curto(t)}`;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f19]">
      {/* Cabeçalho da documentação */}
      <div className="border-b border-white/10 px-4 py-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-2xl font-black tracking-tight text-white">API do curso</p>
          <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[11px] font-bold text-white/70">v{tierIndex + 1}.0</span>
          <span className="rounded-full bg-[#49cc90]/20 px-2 py-0.5 font-mono text-[11px] font-bold text-[#49cc90]">OAS 3.1</span>
        </div>
        <p className="mt-1 font-mono text-[12px] text-white/40">/openapi.json · {course.nome}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Servidor</span>
          {course.tiers.length > 1 ? (
            <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} rotulo={(n, i) => `/v${i + 1} · ${n}`} />
          ) : (
            <span className="rounded-md border border-white/10 px-3 py-1.5 font-mono text-[12px] text-white/70">/v1 · {tier.levelName}</span>
          )}
        </div>
      </div>

      {/* Rotas */}
      <div className="space-y-2.5 px-3 py-5 sm:px-6">
        <p className="flex items-baseline justify-between border-b border-white/10 pb-2">
          <span className="text-lg font-bold text-white">modulos</span>
          <span className="font-mono text-[12px] text-white/40">{total} rotas</span>
        </p>
        {tier.modules.map((mod, i) => {
          const { m: metodo, cor } = METODOS[i % METODOS.length];
          const on = i === atual;
          return (
            <div key={mod.title} className="overflow-hidden rounded-md border" style={{ borderColor: `${cor}80`, background: `${cor}14` }}>
              <button type="button" onClick={() => setAberto(i)} className="flex w-full flex-wrap items-center gap-x-3 gap-y-1 px-2.5 py-2 text-left sm:flex-nowrap">
                <span className="w-[68px] shrink-0 rounded py-1 text-center font-mono text-[12px] font-bold text-[#0b0f19]" style={{ background: cor }}>
                  {metodo}
                </span>
                <span className="min-w-0 truncate font-mono text-[12.5px] font-semibold text-white/85 sm:max-w-[45%]">{rota(i, mod.title)}</span>
                <span className="min-w-0 flex-1 basis-full text-[14px] leading-snug text-white/75 sm:basis-auto">{mod.title}</span>
                {on ? <ChevronDown className="h-4 w-4 shrink-0 text-white/50" /> : <ChevronRight className="h-4 w-4 shrink-0 text-white/40" />}
              </button>
              {on && (
                <div className="border-t bg-[#0b0f19]/70 px-3 py-4 sm:px-4" style={{ borderColor: `${cor}55` }}>
                  <p className="text-[13px] font-bold text-white">Respostas</p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-[70px_1fr]">
                    <p className="font-mono text-[13px] font-bold text-[#49cc90]">200</p>
                    <div className="min-w-0">
                      <p className="text-[13px] text-white/60">
                        Módulo {i + 1} de {total} · exemplo de resposta
                      </p>
                      <div className="mt-2 rounded-md bg-[#1b2030] p-3 font-mono text-[12.5px] leading-6">
                        <p className="text-white/70">{"{"}</p>
                        <p className="pl-4">
                          <span className="text-[#f07178]">&quot;modulo&quot;</span>
                          <span className="text-white/60">: </span>
                          <span className="text-[#f78c6c]">{i + 1}</span>
                          <span className="text-white/60">,</span>
                        </p>
                        <p className="pl-4">
                          <span className="text-[#f07178]">&quot;topicos&quot;</span>
                          <span className="text-white/60">: [</span>
                        </p>
                        {mod.topics.map((t, k) => (
                          <p key={t} className="pl-8 [font-family:Poppins,system-ui,sans-serif] text-[14px] leading-6 text-white/90">
                            <span className="font-mono text-(--accent-2)">&quot;</span>
                            {t}
                            <span className="font-mono text-(--accent-2)">&quot;</span>
                            {k < mod.topics.length - 1 && <span className="font-mono text-white/60">,</span>}
                          </p>
                        ))}
                        <p className="pl-4 text-white/60">]</p>
                        <p className="text-white/70">{"}"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Schemas: resultado e ferramentas */}
      <div className="grid gap-4 border-t border-white/10 px-4 py-5 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0 rounded-md border border-white/10 p-4">
          <p className="font-mono text-[12.5px] font-bold text-white">
            Resultado <span className="font-normal text-white/40">{"{ }"} schema</span>
          </p>
          <OutcomeText text={tier.outcome} className="mt-2 text-[14px] leading-snug text-white/85" />
          <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
        </div>
        <div className="min-w-0 rounded-md border border-white/10 p-4">
          <p className="font-mono text-[12.5px] font-bold text-white">
            Ferramentas <span className="font-normal text-white/40">string[]</span>
          </p>
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
