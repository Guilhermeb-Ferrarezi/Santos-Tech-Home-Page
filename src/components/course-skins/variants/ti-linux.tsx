import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  ACC_TEXT,
  SectionHead,
  StatusLed,
  TierSwitch,
  nn,
  type TiBlockProps,
} from "@/components/course-skins/variants/ti-kit";

/**
 * T.I · Linux: a visão do sysadmin, sem editor nem terminal (pra não repetir a
 * pele de Programação). O público-alvo é o painel de serviços do servidor, com
 * cada perfil como um serviço ativo; o conteúdo é a árvore de diretórios a
 * partir da raiz "/", com cada módulo num diretório, o uso de disco ao lado,
 * os pacotes instalados (ferramentas) e o resultado como a mensagem do dia.
 */

// ── Para quem é: painel de serviços ──────────────────────────────────────────

function Chave() {
  return (
    <span className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-(--accent-2)" aria-hidden="true">
      <span className="absolute right-0.5 h-4 w-4 rounded-full bg-[#0b1412]" />
    </span>
  );
}

export function LinuxPublico({ course }: TiBlockProps) {
  const n = course.targetAudience.length;
  return (
    <section className="sb-bleed py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="01" label="Para quem é" title="Este curso é ideal se você...">
          No servidor do curso, cada perfil é um serviço. Se você se reconhece em um deles, ele já está ativo e sobe junto com o sistema.
        </SectionHead>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl bg-[#0b1412] text-white shadow-[0_40px_80px_-40px_rgba(8,20,18,0.7)] ring-1 ring-black/5 dark:bg-[#0c1917] dark:ring-white/10">
            {/* Barra do painel */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="flex items-center gap-2 text-sm font-black">
                <StatusLed blink /> srv-01 · Serviços
              </p>
              <div className="flex gap-1 rounded-lg bg-black/30 p-1 text-xs font-bold">
                <span className="rounded-md bg-white/10 px-3 py-1">Ativos ({n})</span>
                <span className="px-3 py-1 text-white/40">Inativos (0)</span>
                <span className="px-3 py-1 text-white/40">Com falha (0)</span>
              </div>
              <p className="ml-auto font-mono text-[11px] text-white/45">uptime 42 dias · carga 0,12</p>
            </div>

            <ul className="grid gap-px bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
              {course.targetAudience.map((item, i) => (
                <li key={item} className="flex flex-col gap-3 bg-[#0b1412] p-5 dark:bg-[#0c1917]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 truncate font-mono text-[13px] font-bold text-(--accent-2)">aluno@{i + 1}.service</span>
                    <Chave />
                  </div>
                  <p className="text-[15px] font-semibold leading-snug text-white/90">{item}</p>
                  <p className="mt-auto flex items-center gap-2 border-t border-white/[0.07] pt-3 font-mono text-[11px] text-white/45">
                    <StatusLed className="h-1.5 w-1.5" /> ativo (executando) · habilitado no boot
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Conteúdo: árvore de diretórios ───────────────────────────────────────────

/** Diretório de cada módulo, na ordem (a partir do 7º, cai no genérico). */
const DIRS = ["/home/voce", "/usr/bin", "/etc", "/var/lib", "/var/www", "/opt/scripts"];
const dirDe = (i: number) => DIRS[i] ?? `/srv/modulo-${nn(i + 1)}`;

function Pasta({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 16" className={`shrink-0 ${className}`} aria-hidden="true">
      <path d="M1 3 a2 2 0 0 1 2 -2 H8 l2 2 H17 a2 2 0 0 1 2 2 V13 a2 2 0 0 1 -2 2 H3 a2 2 0 0 1 -2 -2 Z" fill="var(--accent)" />
      <path d="M1 6 H19 V13 a2 2 0 0 1 -2 2 H3 a2 2 0 0 1 -2 -2 Z" fill="var(--accent-2)" fillOpacity="0.9" />
    </svg>
  );
}

export function LinuxConteudo(props: TiBlockProps) {
  const { tier, metricas } = props;
  const total = tier.modules.length;
  const maxTopicos = Math.max(...tier.modules.map((m) => m.topics.length), 1);

  return (
    <section className="sb-bleed bg-white py-20 dark:bg-[#081210]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" title="O que você vai aprender">
          O curso é o sistema de arquivos do servidor: {total} diretórios a partir da raiz, cada módulo guardado no lugar onde ele vive de verdade num Linux.
        </SectionHead>
        <TierSwitch {...props} />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_320px]">
          {/* Árvore */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-xl bg-[#0b1412] px-4 py-2.5 text-white ring-1 ring-black/5 dark:ring-white/10">
                <span className="font-mono text-2xl font-black leading-none text-(--accent-2)">/</span>
                <span className="font-mono text-[12px] text-white/60">raiz · {total} diretórios</span>
              </span>
            </Reveal>

            <ol className="ml-5 border-l-2 border-[#0b1412] dark:border-white/25">
              {tier.modules.map((m, i) => {
                const ultimo = i === total - 1;
                return (
                  <Reveal as="li" key={`${tier.levelName}:${m.title}`} delay={40 * i} className="relative pl-7 pt-6 sm:pl-10">
                    {/* Galho: └── até o diretório */}
                    <span
                      className="absolute -left-0.5 top-0 h-[54px] w-6 rounded-bl-lg border-b-2 border-l-2 border-[#0b1412] sm:w-9 dark:border-white/25"
                      aria-hidden="true"
                    />
                    {/* No último diretório o tronco para no galho (└──) */}
                    {ultimo && <span className="absolute -left-0.5 bottom-0 top-[54px] w-0.5 bg-white dark:bg-[#081210]" aria-hidden="true" />}
                    <div className="overflow-hidden rounded-xl border border-[#dbe4e1] bg-white shadow-[0_1px_2px_rgba(8,20,18,0.05)] dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[#e3eae8] bg-[#f3f6f5] px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                        <Pasta className="h-4 w-5" />
                        <span className={`font-mono text-[15px] font-black ${ACC_TEXT}`}>{dirDe(i)}</span>
                        <span className="font-mono text-[11px] text-[#7a8a86] dark:text-white/40">drwxr-xr-x · módulo {nn(i + 1)}</span>
                      </div>
                      <div className="px-4 pb-4 pt-3">
                        <h3 className="text-lg font-black leading-snug text-[#0b1412] dark:text-white">{m.title}</h3>
                        <ul className="mt-2.5 grid gap-x-6 gap-y-2 md:grid-cols-2">
                          {m.topics.map((t) => (
                            <li key={t} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#33423e] dark:text-white/75">
                              <span className="mt-[7px] h-2.5 w-2 shrink-0 rounded-[2px] border-[1.5px] border-(--accent)" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          {/* Painel lateral: uso de disco + pacotes */}
          <Reveal delay={120} className="space-y-4 lg:sticky lg:top-8">
            <div className="rounded-2xl bg-[#0b1412] p-5 text-white ring-1 ring-black/5 dark:ring-white/10">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Uso de disco · por diretório</p>
              <ul className="mt-4 space-y-3">
                {tier.modules.map((m, i) => (
                  <li key={m.title}>
                    <div className="flex items-baseline justify-between gap-3 font-mono text-[12px]">
                      <span className="truncate text-white/85">{dirDe(i)}</span>
                      <span className="shrink-0 text-white/45">{m.topics.length} tópicos</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
                        style={{ width: `${Math.round((m.topics.length / maxTopicos) * 100)}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {tier.tools.length > 0 && (
              <div className="rounded-2xl border border-[#dbe4e1] bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#5f6f6b] dark:text-white/50">
                  Pacotes instalados · ferramentas
                </p>
                <ul className="mt-3 divide-y divide-[#e3eae8] dark:divide-white/[0.07]">
                  {tier.tools.map((tool) => (
                    <li key={tool} className="flex items-center justify-between gap-3 py-2">
                      <span className="text-sm font-bold text-[#0b1412] dark:text-white">{tool}</span>
                      <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[11px] text-[#3f6212] dark:text-(--accent-2)">
                        <Check className="h-3 w-3" strokeWidth={3} /> instalado
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>

        {/* Mensagem do dia: o resultado */}
        <Reveal delay={80} className="mt-10">
          <div className="rounded-2xl border-2 border-dashed border-(--accent) bg-[#0b1412] p-5 text-white sm:p-7 dark:bg-[#0c1917]">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent-2)">Mensagem do dia · no seu último login do curso</p>
            <p className="mt-3 text-base font-semibold leading-relaxed sm:text-lg">{tier.outcome}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-white/50">
              {metricas.map((m) => (
                <span key={m.label}>
                  {m.label.toLowerCase()} <span className="font-bold text-white/85">{m.value}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
