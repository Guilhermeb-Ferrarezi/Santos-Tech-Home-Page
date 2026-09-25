import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  ACC_TEXT,
  INK,
  SectionHead,
  StatusLed,
  TierSwitch,
  nn,
  type TiBlockProps,
} from "@/components/course-skins/variants/ti-kit";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * T.I · Montagem e Manutenção: a bancada do técnico. O público-alvo é uma
 * ordem de serviço presa na prancheta, com o checklist de entrada; o conteúdo
 * é um PC em vista explodida, com cada módulo numerado como uma etapa da
 * montagem, o resultado como laudo técnico e as ferramentas em gavetas.
 */

// ── Ilustração: bancada antistática com uma peça solta ───────────────────────

function Bancada() {
  return (
    <svg viewBox="0 0 360 250" className="w-full" role="img" aria-label="Bancada de manutenção com placa, memória e chave de fenda">
      {/* Manta antistática */}
      <rect x="10" y="40" width="340" height="190" rx="14" fill="#0f2622" />
      <g stroke="#ffffff10">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={46 + i * 34} y1="40" x2={46 + i * 34} y2="230" />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`h${i}`} x1="10" y1={72 + i * 32} x2="350" y2={72 + i * 32} />
        ))}
      </g>
      <circle cx="330" cy="60" r="7" fill="none" stroke="#A3E635" strokeWidth="2" />
      <path d="M330 67 C 330 100, 350 110, 356 130" fill="none" stroke="#A3E635" strokeWidth="2" strokeLinecap="round" />

      {/* Placa-mãe */}
      <rect x="40" y="70" width="150" height="130" rx="6" fill="#13463e" stroke="#1f6b5f" />
      <path d="M52 186 H120 V150 M140 186 V160 H176" fill="none" stroke="#2dd4bf" strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x="70" y="92" width="44" height="44" rx="3" fill="#0b1412" stroke="#A3E635" strokeDasharray="4 3" />
      {[0, 1, 2, 3].map((k) => (
        <rect key={k} x={130 + k * 9} y="84" width="5" height="70" rx="1.5" fill="#0b1412" />
      ))}
      <rect x="54" y="160" width="110" height="7" rx="2" fill="#0b1412" />

      {/* Processador saindo do soquete */}
      <g transform="translate(78 30)">
        <rect width="30" height="30" rx="3" fill="#d6dee0" />
        <rect x="5" y="5" width="20" height="20" rx="2" fill="#b7c3c6" />
        <path d="M2 34 V46 M28 34 V46" stroke="#A3E635" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>

      {/* Pente de memória */}
      <g transform="translate(214 88) rotate(-8)">
        <rect width="92" height="22" rx="2" fill="#0D9488" />
        {[0, 1, 2, 3, 4].map((k) => (
          <rect key={k} x={6 + k * 17} y="5" width="12" height="9" rx="1" fill="#0b1412" />
        ))}
        <rect y="18" width="92" height="4" fill="#E2B93B" />
      </g>

      {/* Chave de fenda */}
      <g transform="translate(222 176) rotate(-18)">
        <rect width="54" height="16" rx="7" fill="#A3E635" />
        <rect x="8" y="3" width="3" height="10" rx="1.5" fill="#0b1412" fillOpacity="0.35" />
        <rect x="18" y="3" width="3" height="10" rx="1.5" fill="#0b1412" fillOpacity="0.35" />
        <rect x="54" y="6" width="60" height="4" fill="#cbd5e1" />
        <rect x="112" y="5" width="8" height="6" rx="1" fill="#94a3b8" />
      </g>

      {/* Parafusos soltos */}
      {[
        [212, 140],
        [232, 150],
        [300, 138],
      ].map(([cx, cy]) => (
        <g key={`${cx}`}>
          <circle cx={cx} cy={cy} r="5" fill="#94a3b8" />
          <path d={`M${cx - 3} ${cy} H${cx + 3} M${cx} ${cy - 3} V${cy + 3}`} stroke="#334155" strokeWidth="1.3" />
        </g>
      ))}

      {/* Etiqueta da OS na manta */}
      <g transform="translate(262 12) rotate(6)">
        <rect width="86" height="30" rx="4" fill="#fff" />
        <rect x="8" y="8" width="44" height="4" rx="2" fill="#0b1412" fillOpacity="0.7" />
        <rect x="8" y="17" width="64" height="4" rx="2" fill="#0b1412" fillOpacity="0.25" />
        <circle cx="76" cy="10" r="3" fill="#0D9488" />
      </g>
    </svg>
  );
}

// ── Para quem é: ordem de serviço na prancheta ──────────────────────────────

export function ManutencaoPublico({ course }: TiBlockProps) {
  return (
    <section className="sb-bleed py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHead n="01" label="Para quem é" title="Este curso é ideal se você...">
              Toda máquina que chega na bancada ganha uma ordem de serviço. A sua já foi aberta, e o checklist de entrada é este.
            </SectionHead>

            {/* Prancheta */}
            <Reveal delay={100} className="mt-10">
              <div className="relative rounded-[22px] bg-[#1c2b27] p-3 pt-7 shadow-[0_30px_60px_-30px_rgba(8,20,18,0.6)] sm:p-4 sm:pt-8 dark:bg-[#15211e]">
                {/* Presilha metálica */}
                <div className="absolute left-1/2 top-0 h-9 w-32 -translate-x-1/2 -translate-y-3 rounded-lg bg-[linear-gradient(180deg,#e2e8f0,#94a3b8)] shadow-[0_4px_10px_rgba(0,0,0,0.35)] sm:w-40">
                  <span className="absolute left-1/2 top-2 h-2.5 w-10 -translate-x-1/2 rounded-full bg-[#475569]" />
                </div>

                <div className="rounded-xl bg-[#fbfdfc] px-5 py-6 text-[#0b1412] sm:px-8 sm:py-8 dark:bg-[#0f1a18] dark:text-white">
                  {/* Cabeçalho da OS */}
                  <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-[#0b1412] pb-3 dark:border-white/70">
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#5f6f6b] dark:text-white/50">Santos Tech · bancada</p>
                      <p className="mt-1 text-xl font-black tracking-tight sm:text-2xl">Ordem de serviço</p>
                    </div>
                    <p className="font-mono text-lg font-bold text-[#b91c1c] dark:text-[#fca5a5]">Nº 0417</p>
                  </div>
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-2 border-b border-dashed border-[#c5d1ce] py-3 text-sm sm:grid-cols-3 dark:border-white/15">
                    {[
                      ["Cliente", "Você"],
                      ["Equipamento", "Seu próximo PC"],
                      ["Serviço", "Formação técnica"],
                    ].map(([k, val]) => (
                      <div key={k} className="min-w-0">
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-[#7a8a86] dark:text-white/40">{k}</dt>
                        <dd className="truncate font-bold">{val}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#5f6f6b] dark:text-white/50">
                    Checklist de entrada
                  </p>
                  <ul className="mt-3 space-y-1">
                    {course.targetAudience.map((item, i) => (
                      <li key={item} className="flex items-start gap-3 border-b border-[#e3eae8] py-3 last:border-0 dark:border-white/[0.07]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-2 border-[#0b1412] bg-(--accent-2) dark:border-(--accent-2)">
                          <Check className="h-3.5 w-3.5 text-[#0b1412]" strokeWidth={3.5} />
                        </span>
                        <span className="min-w-0 flex-1 text-[15px] font-semibold leading-snug">{item}</span>
                        <span className="hidden shrink-0 pt-0.5 font-mono text-[11px] text-[#7a8a86] sm:inline dark:text-white/35">item {nn(i + 1)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Rodapé: diagnóstico + carimbo */}
                  <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#7a8a86] dark:text-white/40">Diagnóstico</p>
                      <p className="mt-1 text-sm font-bold">Perfil compatível: pode entrar na bancada.</p>
                      <div className="mt-5 w-48 border-t border-[#0b1412] pt-1 font-mono text-[11px] text-[#7a8a86] dark:border-white/60 dark:text-white/40">
                        técnico responsável
                      </div>
                    </div>
                    <span className="-rotate-6 rounded-md border-[3px] border-[#0f766e] px-4 py-1.5 font-mono text-lg font-black uppercase tracking-[0.18em] text-[#0f766e] opacity-90 dark:border-(--accent-2) dark:text-(--accent-2)">
                      Aprovado
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:sticky lg:top-8 lg:pt-24">
            <div className="rounded-2xl bg-[#0b1412] p-4 ring-1 ring-black/5 dark:ring-white/10">
              <Bancada />
              <p className="mt-3 flex items-center gap-2 px-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                <StatusLed /> bancada 02 · manta aterrada
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#5f6f6b] dark:text-white/55">
              Aqui não tem teoria solta: cada aula acontece com a peça na mão, do diagnóstico ao primeiro boot.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Conteúdo: PC em vista explodida ─────────────────────────────────────────

/** Onde cada etapa (módulo) é marcada no desenho, na ordem dos módulos. */
const MARCAS = [
  { x: 60, y: 200, peca: "placa" },
  { x: 236, y: 44, peca: "cpu" },
  { x: 38, y: 318, peca: "ssd" },
  { x: 352, y: 128, peca: "ram" },
  { x: 290, y: 404, peca: "gpu" },
  { x: 360, y: 354, peca: "fonte" },
] as const;

type Peca = (typeof MARCAS)[number]["peca"];

function PcExplodido({ total }: { total: number }) {
  // Peças que correspondem a um módulo ficam acesas; as outras, apagadas.
  const acesa = (p: Peca) => MARCAS.findIndex((m) => m.peca === p) < total;
  const op = (p: Peca) => (acesa(p) ? 1 : 0.5);
  const guia = { stroke: "#A3E635", strokeWidth: 1.5, strokeDasharray: "4 4", fill: "none", strokeOpacity: 0.7 };

  return (
    <svg viewBox="0 0 400 440" className="w-full" role="img" aria-label="Computador em vista explodida, com as peças numeradas por etapa">
      {/* Guias de encaixe */}
      <path d="M178 82 V104" {...guia} />
      <path d="M178 144 V192" {...guia} />
      <path d="M318 200 H262" {...guia} />
      <path d="M185 388 V310" {...guia} />
      <path d="M80 327 H122" {...guia} />
      <path d="M340 380 V300 H292" {...guia} />

      {/* Placa-mãe */}
      <g opacity={op("placa")}>
        <rect x="90" y="150" width="200" height="222" rx="6" fill="#13463e" stroke="#1f6b5f" strokeWidth="2" />
        <rect x="90" y="162" width="16" height="74" fill="#2c4a44" />
        <path d="M112 356 H176 V334 M200 356 V340 H270 M240 170 V150" fill="none" stroke="#2dd4bf" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="150" y="192" width="56" height="56" rx="3" fill="#0b1412" stroke="#A3E635" strokeDasharray="4 3" />
        <rect x="160" y="202" width="36" height="36" fill="none" stroke="#ffffff20" />
        {[0, 1, 2, 3].map((k) => (
          <rect key={k} x={226 + k * 9} y="178" width="5" height="92" rx="1.5" fill="#0b1412" />
        ))}
        <rect x="110" y="303" width="150" height="8" rx="2" fill="#0b1412" />
        <rect x="122" y="324" width="70" height="6" rx="2" fill="#0b1412" />
        <rect x="276" y="286" width="10" height="30" rx="2" fill="#0b1412" />
      </g>

      {/* Cooler + processador */}
      <g opacity={op("cpu")}>
        <rect x="148" y="18" width="60" height="62" rx="8" fill="#1c2b27" stroke="#2c4a44" strokeWidth="2" />
        <circle cx="178" cy="49" r="24" fill="#0b1412" />
        {[0, 72, 144, 216, 288].map((a) => (
          <path key={a} d="M178 49 q6 -16 18 -14 q-6 8 -18 14" fill="#0D9488" transform={`rotate(${a} 178 49)`} />
        ))}
        <circle cx="178" cy="49" r="5" fill="#A3E635" />
        <rect x="158" y="104" width="40" height="40" rx="3" fill="#d6dee0" />
        <rect x="165" y="111" width="26" height="26" rx="2" fill="#b7c3c6" />
      </g>

      {/* Memória */}
      <g opacity={op("ram")}>
        {[0, 1].map((k) => (
          <g key={k} transform={`translate(${320 + k * 16} 150)`}>
            <rect width="11" height="100" rx="2" fill="#0D9488" />
            {[0, 1, 2, 3].map((c) => (
              <rect key={c} x="2" y={10 + c * 22} width="7" height="15" rx="1" fill="#0b1412" />
            ))}
            <rect x="9" width="2" height="100" fill="#E2B93B" />
          </g>
        ))}
      </g>

      {/* SSD M.2 */}
      <g opacity={op("ssd")}>
        <rect x="16" y="320" width="64" height="15" rx="2" fill="#0D9488" />
        <rect x="24" y="323" width="16" height="9" rx="1" fill="#0b1412" />
        <rect x="44" y="323" width="16" height="9" rx="1" fill="#0b1412" />
        <rect x="16" y="320" width="6" height="15" fill="#E2B93B" />
      </g>

      {/* Placa de vídeo */}
      <g opacity={op("gpu")}>
        <rect x="96" y="388" width="176" height="38" rx="5" fill="#1c2b27" stroke="#2c4a44" strokeWidth="2" />
        {[140, 222].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="407" r="14" fill="#0b1412" />
            <circle cx={cx} cy="407" r="4" fill="#38BDF8" />
          </g>
        ))}
      </g>

      {/* Fonte */}
      <g opacity={op("fonte")}>
        <rect x="308" y="380" width="80" height="50" rx="5" fill="#1c2b27" stroke="#2c4a44" strokeWidth="2" />
        <circle cx="348" cy="405" r="17" fill="#0b1412" />
        {[-8, 0, 8].map((d) => (
          <line key={d} x1={336} y1={405 + d} x2={360} y2={405 + d} stroke="#ffffff30" strokeWidth="2" />
        ))}
      </g>

      {/* Marcas numeradas */}
      {MARCAS.slice(0, total).map((m, i) => (
        <g key={m.peca}>
          <circle cx={m.x} cy={m.y} r="15" fill="#A3E635" stroke={INK} strokeWidth="3" />
          <text x={m.x} y={m.y + 5} textAnchor="middle" fontSize="14" fontWeight="900" fill={INK} fontFamily="ui-monospace, monospace">
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Parafuso de cabeça philips (marcador dos tópicos). */
function Parafuso() {
  return (
    <svg viewBox="0 0 14 14" className="mt-[3px] h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <circle cx="7" cy="7" r="6" fill="#cbd5e1" stroke="#64748b" />
      <path d="M4 7 H10 M7 4 V10" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ManutencaoConteudo(props: TiBlockProps) {
  const { tier, metricas } = props;
  const total = tier.modules.length;

  return (
    <section className="sb-bleed bg-white py-20 dark:bg-[#081210]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" title="O que você vai aprender">
          O manual de montagem do curso: {total} etapas, cada uma marcada numa peça do PC. Você segue a ordem e, no fim, a máquina liga.
        </SectionHead>
        <TierSwitch {...props} />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Desenho explodido */}
          <Reveal delay={80} className="lg:sticky lg:top-8">
            <div className="rounded-2xl bg-[#0b1412] bg-[radial-gradient(circle,#ffffff14_1px,transparent_1px)] [background-size:18px_18px] p-5 ring-1 ring-black/5 sm:p-7 dark:ring-white/10">
              <p className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                <span>Vista explodida · fig. 1</span>
                <span className="flex items-center gap-2">
                  <StatusLed /> {total} etapas
                </span>
              </p>
              <div className="mx-auto mt-4 max-w-sm">
                <PcExplodido total={total} />
              </div>
            </div>
          </Reveal>

          {/* Passos do manual */}
          <ol className="relative space-y-5">
            {tier.modules.map((m, i) => (
              <Reveal as="li" key={`${tier.levelName}:${m.title}`} delay={60 * i} className="relative flex gap-4 sm:gap-5">
                {/* Linha tracejada até a próxima etapa */}
                <span className="absolute -bottom-5 left-[21px] top-11 border-l-2 border-dashed border-[#c5d1ce] dark:border-white/15" aria-hidden="true" />
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#0b1412] bg-(--accent-2) font-mono text-base font-black text-[#0b1412]">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1 rounded-xl border border-[#dbe4e1] bg-white p-5 shadow-[0_1px_2px_rgba(8,20,18,0.05)] dark:border-white/10 dark:bg-white/[0.03]">
                  <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.18em] ${ACC_TEXT}`}>Etapa {nn(i + 1)}</p>
                  <h3 className="mt-1 text-lg font-black leading-snug text-[#0b1412] dark:text-white">{m.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {m.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#33423e] dark:text-white/75">
                        <Parafuso />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            {/* Laudo técnico: o resultado */}
            <Reveal as="li" delay={120} className="relative flex gap-4 sm:gap-5">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#0b1412] bg-[#0b1412] text-(--accent-2) dark:border-(--accent-2)">
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
              <div className="relative min-w-0 flex-1 overflow-hidden rounded-xl bg-[#0b1412] p-5 text-white ring-1 ring-black/5 dark:ring-white/10">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-(--accent-2)">Laudo técnico · ao final do curso</p>
                <OutcomeText text={tier.outcome} className="mt-2 pr-2 text-base leading-relaxed sm:pr-24 sm:text-lg" />
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-white/50">
                  {metricas.map((m) => (
                    <span key={m.label}>
                      {m.label.toLowerCase()} <span className="font-bold text-white/85">{m.value}</span>
                    </span>
                  ))}
                </div>
                <span className="pointer-events-none absolute right-4 top-5 hidden rotate-[8deg] rounded border-[3px] border-(--accent-2) px-3 py-1 font-mono text-sm font-black uppercase tracking-[0.2em] text-(--accent-2) sm:block">
                  Apto
                </span>
              </div>
            </Reveal>
          </ol>
        </div>

        {/* Caixa de ferramentas */}
        {tier.tools.length > 0 && (
          <Reveal delay={80} className="mt-12">
            <div className="rounded-2xl border-[3px] border-[#0b1412] bg-[#0D9488] p-3 sm:p-4 dark:border-white/10">
              <div className="flex items-center justify-between gap-3 px-1 pb-3">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white">Caixa de ferramentas do técnico</p>
                <span className="h-2.5 w-16 rounded-full bg-[#0b1412]/40" aria-hidden="true" />
              </div>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {tier.tools.map((tool) => (
                  <li key={tool} className="rounded-lg bg-[#0b1412] px-4 pb-3 pt-2 text-center shadow-[inset_0_-3px_0_rgba(255,255,255,0.06)]">
                    <span className="mx-auto block h-1.5 w-10 rounded-full bg-white/25" aria-hidden="true" />
                    <span className="mt-2 block text-sm font-bold text-white">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
