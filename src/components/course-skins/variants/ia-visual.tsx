import { useId, useState } from "react";
import { AudioLines, Clapperboard, Download, Heart, Image as ImageIcon, Layers, Mic, Play, Sparkles, WandSparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import { tierMeta } from "@/components/course-skins/shared";
import type { CourseTheme } from "@/lib/course-themes";
import {
  ACCENT_TEXT,
  BORDER,
  CARD,
  GradientFrame,
  Heading,
  MUTED,
  PANEL,
  TEXT,
  TITLE,
  TierIntro,
  ToolList,
  type IaBlockProps,
} from "@/components/course-skins/variants/ia-kit";
import { pad } from "@/components/course-skins/variants/ia-util";

/**
 * IA para Criadores: "Para quem é" é um moodboard de gerações, cada perfil é o
 * prompt de uma imagem, e o conteúdo é a fila de gerações por mídia (imagem,
 * vídeo, áudio), com a grade de variações que cada módulo "gera". As artes são
 * composições SVG originais, desenhadas aqui.
 */

// ── Artes originais (SVG 100×100, cortadas pelo contêiner) ────────────────────

type ArtKind = 0 | 1 | 2 | 3 | 4 | 5;

function Art({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  const id = useId().replace(/:/g, "");
  const g = (n: string) => `${id}-${n}`;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      {kind === 0 && (
        <>
          {/* Montanhas ao entardecer */}
          <defs>
            <linearGradient id={g("sky")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7c3aed" />
              <stop offset="0.55" stopColor="#e879f9" />
              <stop offset="1" stopColor="#fbbf77" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${g("sky")})`} />
          <circle cx="62" cy="52" r="15" fill="#fff4d6" fillOpacity="0.9" />
          <path d="M0 70 L22 46 L38 62 L58 38 L80 60 L100 44 V100 H0Z" fill="#5b21b6" fillOpacity="0.75" />
          <path d="M0 82 L18 66 L40 80 L64 60 L100 78 V100 H0Z" fill="#2e1065" />
        </>
      )}
      {kind === 1 && (
        <>
          {/* Retrato com halo */}
          <defs>
            <radialGradient id={g("bg")} cx="0.5" cy="0.35" r="0.8">
              <stop offset="0" stopColor="#c4b5fd" />
              <stop offset="1" stopColor="#4c1d95" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${g("bg")})`} />
          <circle cx="50" cy="40" r="26" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.2" />
          <circle cx="50" cy="40" r="14" fill="#1e1036" />
          <path d="M18 100 C20 72 34 60 50 60 C66 60 80 72 82 100Z" fill="#1e1036" />
          <path d="M74 18 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2Z" fill="#fff" />
        </>
      )}
      {kind === 2 && (
        <>
          {/* Ondas abstratas */}
          <defs>
            <linearGradient id={g("w")} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ede9fe" />
              <stop offset="1" stopColor="#f5d0fe" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${g("w")})`} />
          <path d="M0 40 C20 28 35 52 55 40 S85 26 100 36 V100 H0Z" fill="#a78bfa" fillOpacity="0.55" />
          <path d="M0 58 C18 48 38 70 58 58 S86 46 100 56 V100 H0Z" fill="#8b5cf6" fillOpacity="0.7" />
          <path d="M0 76 C22 66 40 88 62 76 S88 66 100 74 V100 H0Z" fill="#6d28d9" />
          <circle cx="24" cy="20" r="7" fill="#e879f9" fillOpacity="0.8" />
        </>
      )}
      {kind === 3 && (
        <>
          {/* Cidade à noite */}
          <defs>
            <linearGradient id={g("n")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0f0a1f" />
              <stop offset="1" stopColor="#3b1f78" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${g("n")})`} />
          <circle cx="76" cy="22" r="9" fill="#fde68a" />
          <circle cx="80" cy="19" r="8" fill="#0f0a1f" fillOpacity="0.9" />
          {[
            [4, 52, 16],
            [22, 40, 14],
            [38, 58, 12],
            [52, 34, 18],
            [72, 50, 14],
            [88, 62, 12],
          ].map(([x, y, w]) => (
            <g key={x}>
              <rect x={x} y={y} width={w} height={100 - y} fill="#1e1036" />
              {[0, 1, 2, 3].map((r) => (
                <rect key={r} x={x + 3} y={y + 6 + r * 9} width="3" height="3" fill="#e879f9" fillOpacity={(x + r) % 3 ? 0.9 : 0.25} />
              ))}
            </g>
          ))}
        </>
      )}
      {kind === 4 && (
        <>
          {/* Produto no pedestal */}
          <defs>
            <linearGradient id={g("p")} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fdf4ff" />
              <stop offset="1" stopColor="#ddd6fe" />
            </linearGradient>
            <linearGradient id={g("b")} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#7c3aed" />
              <stop offset="1" stopColor="#c026d3" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${g("p")})`} />
          <circle cx="50" cy="44" r="30" fill="#fff" fillOpacity="0.7" />
          <ellipse cx="50" cy="80" rx="30" ry="7" fill="#c4b5fd" />
          <rect x="20" y="80" width="60" height="20" fill="#c4b5fd" />
          <rect x="40" y="36" width="20" height="44" rx="6" fill={`url(#${g("b")})`} />
          <rect x="45" y="28" width="10" height="9" rx="2" fill="#2e1065" />
          <rect x="43" y="50" width="14" height="10" rx="2" fill="#fff" fillOpacity="0.85" />
        </>
      )}
      {kind === 5 && (
        <>
          {/* Planeta com anel */}
          <rect width="100" height="100" fill="#140c26" />
          {[
            [12, 14],
            [30, 70],
            [84, 12],
            [90, 80],
            [60, 90],
            [8, 56],
            [70, 30],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="#fff" fillOpacity="0.8" />
          ))}
          <defs>
            <linearGradient id={g("pl")} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f0abfc" />
              <stop offset="1" stopColor="#6d28d9" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="52" r="22" fill={`url(#${g("pl")})`} />
          <ellipse cx="50" cy="54" rx="38" ry="8" fill="none" stroke="#fde68a" strokeOpacity="0.85" strokeWidth="2" transform="rotate(-14 50 54)" />
        </>
      )}
    </svg>
  );
}

/** Tela do monitor: grade 2×2 de gerações (SVG 400×320). */
function GridScreen({ theme, x, y, w, h }: { theme: CourseTheme; x: number; y: number; w: number; h: number }) {
  const cw = (w - 18) / 2;
  const ch = (h - 18) / 2;
  const cores = [theme.accent, theme.accent2, "#fbbf77", "#a78bfa"];
  return (
    <g>
      {[0, 1, 2, 3].map((i) => {
        const cx = x + 6 + (i % 2) * (cw + 6);
        const cy = y + 6 + Math.floor(i / 2) * (ch + 6);
        return (
          <g key={i}>
            <rect x={cx} y={cy} width={cw} height={ch} rx="4" fill={cores[i]} fillOpacity={i === 1 ? 1 : 0.8} />
            <circle cx={cx + cw * 0.7} cy={cy + ch * 0.35} r={ch * 0.18} fill="#fff" fillOpacity="0.7" />
            <path d={`M${cx} ${cy + ch} L${cx + cw * 0.35} ${cy + ch * 0.5} L${cx + cw * 0.6} ${cy + ch * 0.75} L${cx + cw} ${cy + ch * 0.45} V${cy + ch}Z`} fill="#1e1036" fillOpacity="0.5" />
          </g>
        );
      })}
      <rect x={x + 6 + cw - 4} y={y + 6} width={cw + 10} height={ch + 10} rx="5" fill="none" stroke="#fff" strokeWidth="1.5" />
    </g>
  );
}

// ── Para quem é: moodboard de prompts ─────────────────────────────────────────

const FORMATOS: { ar: string; aspect: string; estilo: string }[] = [
  { ar: "4:5", aspect: "aspect-[4/5]", estilo: "entardecer" },
  { ar: "1:1", aspect: "aspect-square", estilo: "retrato" },
  { ar: "16:9", aspect: "aspect-[16/9]", estilo: "abstrato" },
  { ar: "1:1", aspect: "aspect-square", estilo: "noturno" },
  { ar: "4:5", aspect: "aspect-[4/5]", estilo: "produto" },
  { ar: "16:9", aspect: "aspect-[16/9]", estilo: "cósmico" },
];

/** Coluna de cada cartão no desktop: a 1ª coluna tem o título, então recebe os cartões baixos (16:9). */
const COLUNA = [1, 2, 0, 1, 2, 0];

function PromptCard({ item, i }: { item: string; i: number }) {
  const f = FORMATOS[i % FORMATOS.length];
  return (
    <Reveal delay={(i % 3) * 80} y={16} className={`${CARD} overflow-hidden`}>
      <div className={`relative ${f.aspect} overflow-hidden`}>
        <Art kind={(i % 6) as ArtKind} className="absolute inset-0 h-full w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur">
          #{pad(i + 1)}
        </span>
      </div>
      <div className="p-4">
        <p className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${ACCENT_TEXT}`}>
          <WandSparkles className="h-3.5 w-3.5" /> prompt
        </p>
        <p className={`mt-1.5 text-[15px] leading-relaxed ${TEXT}`}>{item}</p>
        <div className={`mt-3 flex flex-wrap items-center gap-2 border-t ${BORDER} pt-3`}>
          <span className={`rounded-md bg-(--accent)/10 px-2 py-0.5 font-mono text-xs ${ACCENT_TEXT}`}>--ar {f.ar}</span>
          <span className={`rounded-md bg-(--accent)/10 px-2 py-0.5 font-mono text-xs ${ACCENT_TEXT}`}>--estilo {f.estilo}</span>
          <span className={`ml-auto flex gap-2.5 ${MUTED}`} aria-hidden="true">
            <Heart className="h-4 w-4" />
            <Download className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export function VisualAudience({ course, theme, tema }: IaBlockProps) {
  const itens = course.targetAudience.map((item, i) => ({ item, i }));
  const titulo = (
    <div className="pb-2 pr-2 pt-1 sm:col-span-2 lg:col-span-1">
      <Heading
        eyebrow="Para quem é"
        title="Um moodboard de quem cria com a gente"
        sub="Cada imagem nasceu de um prompt. Aqui, o prompt é você: veja se alguma dessas descrições é a sua."
        icon={<WandSparkles className="h-3.5 w-3.5" />}
      />
      <Reveal delay={120}>
        <PersonAtDesk theme={theme} tema={tema} renderScreen={(box) => <GridScreen theme={theme} {...box} />} className="mt-6 hidden w-full max-w-sm sm:block" />
      </Reveal>
    </div>
  );
  return (
    <section id="para-quem-ia" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Celular e tablet: título e depois os cartões em ordem */}
        <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
          {titulo}
          {itens.map(({ item, i }) => (
            <PromptCard key={item} item={item} i={i} />
          ))}
        </div>
        {/* Desktop: três colunas de alturas diferentes, como um moodboard */}
        <div className="hidden grid-cols-3 items-start gap-5 lg:grid">
          {[0, 1, 2].map((c) => (
            <div key={c} className="space-y-5">
              {c === 0 && titulo}
              {itens
                .filter(({ i }) => COLUNA[i % COLUNA.length] === c)
                .map(({ item, i }) => (
                  <PromptCard key={item} item={item} i={i} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Conteúdo: fila de gerações por mídia ──────────────────────────────────────

type Midia = "imagem" | "video" | "audio" | "mix";

const MIDIAS: Record<Midia, { label: string; icon: LucideIcon; saida: string }> = {
  imagem: { label: "Imagem", icon: ImageIcon, saida: "4 variações" },
  video: { label: "Vídeo", icon: Clapperboard, saida: "clipe + quadros" },
  audio: { label: "Áudio", icon: AudioLines, saida: "faixa de voz" },
  mix: { label: "Multimídia", icon: Layers, saida: "imagem + vídeo + áudio" },
};

function midiaDe(title: string): Midia {
  const t = title.toLowerCase();
  const video = /v[íi]deo/.test(t);
  const audio = /[áa]udio|narra|voz/.test(t);
  if ((video && audio) || /fluxo|produ[çc][ãa]o|fundamento/.test(t)) return "mix";
  if (video) return "video";
  if (audio) return "audio";
  return "imagem";
}

function Waveform({ seed, className = "" }: { seed: number; className?: string }) {
  return (
    <span className={`flex items-center gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: 22 }, (_, i) => {
        const v = 0.25 + Math.abs(Math.sin((i + seed) * 1.7) * Math.cos((i + seed) * 0.6)) * 0.75;
        return <span key={i} className="w-[3px] rounded-full bg-white" style={{ height: `${Math.round(v * 100)}%`, opacity: 0.55 + v * 0.45 }} />;
      })}
    </span>
  );
}

function Thumb({ midia, seed }: { midia: Midia; seed: number }) {
  const k = (n: number) => ((seed + n) % 6) as ArtKind;
  if (midia === "imagem") {
    return (
      <div className="grid aspect-square grid-cols-2 gap-1.5">
        {[0, 1, 2, 3].map((n) => (
          <div key={n} className={`overflow-hidden rounded-lg ${n === 1 ? "ring-2 ring-(--accent) ring-offset-2 ring-offset-white dark:ring-offset-[#171126]" : ""}`}>
            <Art kind={k(n)} className="h-full w-full" />
          </div>
        ))}
      </div>
    );
  }
  if (midia === "video") {
    return (
      <div className="space-y-1.5">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Art kind={k(0)} className="absolute inset-0 h-full w-full" />
          <span className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-(--accent) shadow">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </span>
          <span className="absolute inset-x-2 bottom-2 h-1 overflow-hidden rounded-full bg-white/40">
            <span className="block h-full w-2/5 rounded-full bg-white" />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="aspect-video overflow-hidden rounded-md">
              <Art kind={k(n)} className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (midia === "audio") {
    return (
      <div className="flex aspect-square flex-col justify-between rounded-lg bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] p-3 text-white">
        <span className="flex items-center gap-1.5 text-xs font-semibold">
          <Mic className="h-4 w-4" /> narração.wav
        </span>
        <Waveform seed={seed} className="h-16" />
        <span className="flex items-center justify-between font-mono text-[11px] text-white/85">
          <span>0:00</span>
          <span>1:24</span>
        </span>
      </div>
    );
  }
  return (
    <div className="grid aspect-square grid-cols-2 gap-1.5">
      <div className="overflow-hidden rounded-lg">
        <Art kind={k(0)} className="h-full w-full" />
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <Art kind={3} className="h-full w-full" />
        <Play className="absolute inset-0 m-auto h-6 w-6 fill-white text-white drop-shadow" />
      </div>
      <div className="flex items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] p-2">
        <Waveform seed={seed} className="h-8" />
      </div>
      <div className="flex items-center justify-center rounded-lg bg-(--accent)/10 text-(--accent)">
        <Sparkles className="h-6 w-6" />
      </div>
    </div>
  );
}

function Geracoes({ course, selectedTier }: IaBlockProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const jobs = tier.modules.map((m, i) => ({ m, i, midia: midiaDe(m.title) }));
  const presentes = (Object.keys(MIDIAS) as Midia[]).filter((k) => jobs.some((j) => j.midia === k));
  const [filtro, setFiltro] = useState<Midia | "tudo">("tudo");
  const visiveis = filtro === "tudo" ? jobs : jobs.filter((j) => j.midia === filtro);

  const chip = (on: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
      on ? "bg-(--accent) text-white" : `border ${BORDER} bg-white hover:border-(--accent)/60 dark:bg-white/5 ${TEXT}`
    }`;

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={chip(filtro === "tudo")} aria-pressed={filtro === "tudo"} onClick={() => setFiltro("tudo")}>
          Tudo <span className="opacity-70">{jobs.length}</span>
        </button>
        {presentes.map((k) => {
          const Icon = MIDIAS[k].icon;
          const n = jobs.filter((j) => j.midia === k).length;
          return (
            <button key={k} type="button" className={chip(filtro === k)} aria-pressed={filtro === k} onClick={() => setFiltro(k)}>
              <Icon className="h-4 w-4" /> {MIDIAS[k].label} <span className="opacity-70">{n}</span>
            </button>
          );
        })}
        <span className={`ml-auto text-xs font-semibold ${MUTED}`}>
          {tier.levelName} · {meta?.aulas ?? tier.totalHours}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {visiveis.map(({ m, i, midia }) => {
          const M = MIDIAS[midia];
          const Icon = M.icon;
          return (
            <Reveal key={m.title} delay={Math.min(i, 3) * 50} y={14} className={`${CARD} grid gap-5 p-4 sm:p-5 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]`}>
              <div className="mx-auto w-full max-w-[260px] md:max-w-none">
                <Thumb midia={midia} seed={i * 2 + 1} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`font-mono text-xs font-bold ${MUTED}`}>geração #{pad(i + 1)}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-(--accent)/10 px-2.5 py-0.5 text-xs font-semibold text-[#6d28d9] dark:text-[#c4b5fd]">
                    <Icon className="h-3.5 w-3.5" /> {M.label}
                  </span>
                  <span className={`text-xs ${MUTED}`}>{M.saida}</span>
                </div>
                <h3 className={`mt-2 text-lg font-bold leading-snug ${TITLE}`}>{m.title}</h3>
                <ul className="mt-3 grid gap-x-6 gap-y-2 lg:grid-cols-2">
                  {m.topics.map((topic) => (
                    <li key={topic} className={`flex items-start gap-2.5 text-[15px] leading-relaxed ${TEXT}`}>
                      <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-(--accent)" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Resultado: a peça final, já em alta */}
      <Reveal className="mt-8">
        <GradientFrame inner="grid gap-5 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto md:min-h-[160px]">
            <Art kind={0} className="absolute inset-0 h-full w-full" />
            <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur">upscale 4×</span>
          </div>
          <div className="min-w-0">
            <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${ACCENT_TEXT}`}>Versão final · ao fim do nível</p>
            <p className={`mt-2 text-base font-semibold leading-relaxed sm:text-lg ${TITLE}`}>{tier.outcome}</p>
            <ToolList tools={tier.tools} label="Modelos e ferramentas deste nível" />
          </div>
        </GradientFrame>
      </Reveal>
    </div>
  );
}

export function VisualProgram(props: IaBlockProps) {
  const tier = props.course.tiers[props.selectedTier];
  return (
    <section id="conteudo-ia" className={`scroll-mt-6 border-y ${BORDER} ${PANEL} py-20`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Heading
          center
          eyebrow="Conteúdo programático"
          title="Sua fila de gerações, módulo a módulo"
          sub="Cada módulo é uma geração: imagem, vídeo, áudio ou tudo junto. Filtre por mídia para ver onde cada uma aparece."
          icon={<ImageIcon className="h-3.5 w-3.5" />}
        />
        <TierIntro {...props} />
        <Geracoes key={tier.levelName} {...props} />
      </div>
    </section>
  );
}
