import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  MapPin,
  User,
  CalendarClock,
  Video,
  Award,
  Dumbbell,
  Route,
  BookOpen,
  RefreshCw,
  Wrench,
  Building2,
  Wifi,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { AdultosFaq, ADULTOS_FAQ_ITEMS } from "@/components/adultos-faq";
import { JsonLd } from "@/components/json-ld";
import { buildAdultPageSchemas } from "@/lib/seo";

// ── Types ─────────────────────────────────────────────────────────────────

export type TopicGroup = { title: string; topics: string[] };

export type Tier = {
  label: string;
  levelName: string;
  totalHours: string;
  outcome: string;
  modules: TopicGroup[];
  tools: string[];
};

export type CourseData = {
  nome: string;
  categoria: string;
  tagline: string;
  targetAudience: string[];
  tiers: Tier[];
  pricePerAula?: number;
};

// ── Preços e ritmo por nível ───────────────────────────────────────────────

const TIER_META: Record<string, { price: string; aulas: string; intensivo: string; padrao: string }> = {
  Essencial: { price: "R$ 1.970", aulas: "24 aulas", intensivo: "~1 mês", padrao: "~3 meses" },
  Intermediário: { price: "R$ 3.940", aulas: "48 aulas", intensivo: "~2 meses", padrao: "~6 meses" },
  "Profissional + IA": { price: "R$ 5.910", aulas: "72 aulas", intensivo: "~3 meses", padrao: "~9 meses" },
};

// ── Diferenciais hardcoded ─────────────────────────────────────────────────

const DIFERENCIAIS = [
  {
    icon: User,
    title: "Aula Individual",
    desc: "Só você e o professor — foco total, sem fila de dúvidas.",
  },
  {
    icon: CalendarClock,
    title: "Horário Flexível",
    desc: "Você define o dia, o horário e a frequência — sua rotina manda.",
  },
  {
    icon: RefreshCw,
    title: "Reagendamento sem Custo",
    desc: "Precisou faltar? Avisa e remarcamos — sem burocracia, sem penalidade.",
  },
  {
    icon: Video,
    title: "Aulas Gravadas a Pedido",
    desc: "Solicite a gravação de qualquer aula e revise quando quiser.",
  },
  {
    icon: Wifi,
    title: "Aula Online se Precisar",
    desc: "Se não puder vir presencialmente, a aula acontece online ao vivo — ou é gravada e enviada.",
  },
  {
    icon: Award,
    title: "Certificado Reconhecido",
    desc: "Válido em todo o Brasil.",
  },
  {
    icon: Dumbbell,
    title: "100% Prático",
    desc: "Mão na massa desde a primeira aula.",
  },
  {
    icon: Route,
    title: "Trilha Estruturada",
    desc: "Do básico ao projeto final sem lacunas.",
  },
  {
    icon: BookOpen,
    title: "Exercícios Contextualizados",
    desc: "Exercícios semanais alinhados ao tópico da sua aula — você pratica exatamente o que acabou de aprender.",
  },
  {
    icon: TrendingUp,
    title: "Conteúdo Sempre Atualizado",
    desc: "Currículo revisado continuamente para refletir o que o mercado realmente exige hoje.",
  },
];

// ── Guia de orientação por nível ──────────────────────────────────────────

const TIER_GUIDE: Record<string, string> = {
  Essencial: "Nunca usei, sei muito pouco ou quero construir uma base sólida do zero",
  Intermediário: "Já uso no dia a dia, mas quero ir mais fundo e trabalhar de forma mais eficiente",
  "Profissional + IA": "Quero dominar tudo — incluindo os recursos de inteligência artificial",
};

// ── Subcomponents ──────────────────────────────────────────────────────────

function TierTabs({
  tiers,
  selected,
  onSelect,
  dark,
}: {
  tiers: Tier[];
  selected: number;
  onSelect: (i: number) => void;
  dark: boolean;
}) {
  if (tiers.length <= 1) return null;
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {tiers.map((t, i) => (
        <button
          key={t.levelName}
          onClick={() => onSelect(i)}
          className={`rounded-lg border px-5 py-2 text-sm font-bold transition-all duration-200 ${
            selected === i
              ? dark
                ? "border-[#0DB88F] bg-[#0DB88F]/20 text-[#0DB88F]"
                : "border-[#0DB88F] bg-[#0DB88F] text-white"
              : dark
                ? "border-white/20 bg-white/5 text-white/60 hover:border-white/40 hover:text-white/80"
                : "border-neutral-300 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
          }`}
        >
          {t.levelName}
        </button>
      ))}
    </div>
  );
}

function TierGuide({
  tiers,
  selected,
  onSelect,
}: {
  tiers: Tier[];
  selected: number;
  onSelect: (i: number) => void;
}) {
  if (tiers.length <= 1) return null;
  return (
    <div className="mt-8">
      <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
        Por onde começar?
      </p>
      <div
        className={`grid gap-3 ${
          tiers.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
        }`}
      >
        {tiers.map((t, i) => {
          const isSelected = selected === i;
          const guide = TIER_GUIDE[t.levelName] ?? "";
          return (
            <button
              key={t.levelName}
              type="button"
              onClick={() => onSelect(i)}
              className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                isSelected
                  ? "border-[#0DB88F] bg-[#0DB88F]/5 dark:bg-[#0DB88F]/10"
                  : "border-neutral-200 bg-white hover:border-[#0DB88F]/40 hover:bg-[#0DB88F]/[0.02] dark:border-neutral-700 dark:bg-neutral-900"
              }`}
            >
              <p
                className={`text-sm font-black ${
                  isSelected
                    ? "text-[#0DB88F]"
                    : "text-neutral-900 dark:text-white"
                }`}
              >
                {t.levelName}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                {guide}
              </p>
              {isSelected && (
                <span className="mt-3 inline-block rounded bg-[#0DB88F] px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white">
                  selecionado
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ModuleCard({ group }: { group: TopicGroup }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80">
      <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-3 dark:border-neutral-800 dark:bg-neutral-800/60">
        <h4 className="text-sm font-black text-neutral-900 dark:text-white">{group.title}</h4>
      </div>
      <ul className="flex flex-1 flex-col gap-1.5 p-5">
        {group.topics.map((topic) => (
          <li key={topic} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0DB88F]" />
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export function AdultosCursosPage({
  course,
  whatsappUrl,
}: {
  course: CourseData;
  whatsappUrl: string;
}) {
  const [selectedTier, setSelectedTier] = useState(0);
  const tier = course.tiers[selectedTier];
  const multiTier = course.tiers.length > 1;
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const schemas = buildAdultPageSchemas({
    courseName: course.nome,
    courseDescription: course.tagline,
    path: pathname,
    tiers: course.tiers.map((t) => ({
      levelName: t.levelName,
      totalHours: t.totalHours,
      outcome: t.outcome,
    })),
    faq: ADULTOS_FAQ_ITEMS.map(({ q, a }) => ({ q, a })),
  });

  return (
    <>
      <JsonLd data={schemas} />
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-neutral-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#0DB88F]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 pb-24 pt-14 text-center sm:px-6 sm:pt-18 lg:px-8 lg:pb-32 lg:pt-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Santos Tech · Adultos · {course.categoria}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {course.nome}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">
              {course.tagline}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0DB88F] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_8px_24px_-8px_rgba(13,184,143,0.6)] transition hover:scale-[1.02] hover:bg-[#0aaa82] active:scale-[0.99]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Quero saber mais
              </a>
            </div>
          </Reveal>

          {multiTier && (
            <Reveal delay={420}>
              <TierTabs
                tiers={course.tiers}
                selected={selectedTier}
                onSelect={setSelectedTier}
                dark
              />
            </Reveal>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            className="block h-[48px] w-full fill-white dark:fill-neutral-950 sm:h-[72px]"
          >
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" />
          </svg>
        </div>
      </section>

      {/* ── 2. PARA QUEM É ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Para quem é
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Este curso é ideal se você...
            </h2>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <div className="mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900">
              <ul className="grid gap-4 md:grid-cols-2">
                {course.targetAudience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0DB88F]" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. CONTEÚDO PROGRAMÁTICO ────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Conteúdo Programático
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              O que você vai aprender
            </h2>
          </Reveal>

          {multiTier && (
            <Reveal delay={100}>
              <TierGuide
                tiers={course.tiers}
                selected={selectedTier}
                onSelect={setSelectedTier}
              />
            </Reveal>
          )}

          <Reveal delay={150}>
            {/* Outcome em destaque */}
            <div className="mt-8 rounded-xl border border-[#0DB88F]/30 bg-[#0DB88F]/5 px-6 py-5 dark:border-[#0DB88F]/20 dark:bg-[#0DB88F]/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0DB88F]">
                Nível {tier.levelName} · {TIER_META[tier.levelName]?.aulas ?? tier.totalHours}
              </p>
              <p className="mt-1.5 text-base font-semibold text-neutral-800 dark:text-neutral-200">
                {tier.outcome}
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tier.modules.map((group, i) => (
              <Reveal key={group.title} delay={i * 60}>
                <ModuleCard group={group} />
              </Reveal>
            ))}
          </div>

          {/* Ferramentas */}
          {tier.tools.length > 0 && (
            <Reveal delay={200} className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  <Wrench className="h-3.5 w-3.5" />
                  Ferramentas
                </span>
                {tier.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── 4. DIFERENCIAIS SANTOS TECH ─────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Por que a Santos Tech
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Mais do que um curso — um método
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {DIFERENCIAIS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={i * 60}>
                  <div className="group flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-0.5 hover:border-[#0DB88F]/40 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 transition group-hover:bg-[#0DB88F]/10 group-hover:text-[#0DB88F] dark:bg-neutral-800 dark:text-neutral-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 text-sm font-black text-neutral-900 dark:text-white">{d.title}</h3>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{d.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4b. PROFESSORES + CERTIFICADO ───────────────────────────────── */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-20 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">

            {/* Professores */}
            <Reveal>
              <div className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0DB88F]/10 text-[#0DB88F]">
                  <User className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-black text-neutral-900 dark:text-white">
                  Quem está do outro lado da mesa
                </h3>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  Critério rigoroso de contratação — não contratamos por disponibilidade.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Competência técnica comprovada nas ferramentas que ensina",
                    "Experiência prática no mercado — não só teoria",
                    "Habilidade pedagógica exigida: não basta saber, precisa saber ensinar",
                    "Atualização contínua com as demandas reais do mercado",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0DB88F]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Certificado */}
            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0DB88F]/10 text-[#0DB88F]">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-black text-neutral-900 dark:text-white">
                  O que você recebe ao concluir
                </h3>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  Certificado emitido pela Santos Tech, reconhecido em todo o território nacional.
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  Mas o que realmente importa é o que você consegue fazer depois. Cada aula é
                  projetada pra entregar habilidade aplicável — o certificado é a consequência
                  natural de quem chegou lá.
                </p>
                <div className="mt-5 rounded-lg border border-[#0DB88F]/20 bg-[#0DB88F]/5 p-4 dark:bg-[#0DB88F]/10">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0DB88F]">
                    O papel prova que você concluiu
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    A habilidade prova que você aprendeu.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── 5. SOBRE O CURSO ────────────────────────────────────────────── */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Formato
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Como as aulas funcionam
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: User,
                title: "Aula Individual",
                desc: "Você não compete atenção com ninguém. O professor é só seu durante toda a aula.",
              },
              {
                icon: CalendarClock,
                title: "Horário Flexível",
                desc: "Encaixa na sua rotina — você agenda o dia e horário que funciona pra você.",
              },
              {
                icon: Building2,
                title: "100% Presencial",
                desc: "Ribeirão Preto/SP — Av. Nove de Julho, 1992 · Jardim América.",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 120}>
                  <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0DB88F]/10 text-[#0DB88F]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-black text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{card.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. INVESTIMENTO ─────────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0DB88F]">
              Investimento
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Escolha o seu plano
            </h2>
          </Reveal>

          <div
            className={`mt-12 grid gap-6 ${
              course.tiers.length === 1
                ? "max-w-sm mx-auto"
                : course.tiers.length === 2
                  ? "md:grid-cols-2 max-w-3xl mx-auto"
                  : "md:grid-cols-3"
            }`}
          >
            {course.tiers.map((t, i) => {
              const base = TIER_META[t.levelName];
              const meta = course.pricePerAula && base
                ? {
                    ...base,
                    price: `R$ ${Math.round(parseInt(t.totalHours) * course.pricePerAula).toLocaleString("pt-BR")}`,
                  }
                : base;
              return (
                <Reveal key={t.levelName} delay={i * 120}>
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="border-b border-neutral-100 px-6 py-5 dark:border-neutral-800">
                      <h3 className="text-xl font-black text-neutral-900 dark:text-white">{t.levelName}</h3>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                        <Clock className="h-3.5 w-3.5" />
                        {meta?.aulas ?? t.totalHours}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-5 p-6">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.outcome}</p>

                      <div>
                        <p className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white">
                          {meta?.price ?? "—"}
                        </p>
                        <p className="mt-0.5 text-xs text-neutral-400">preço total do curso</p>
                      </div>

                      {meta && (
                        <div className="space-y-2.5 rounded-lg border border-neutral-100 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-800/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-black text-[#0DB88F]">Intensivo</span>
                              <span className="rounded bg-[#0DB88F]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#0DB88F]">sugerido</span>
                            </div>
                            <span className="text-sm font-bold text-neutral-900 dark:text-white">{meta.intensivo}</span>
                          </div>
                          <div className="flex items-center justify-between border-t border-neutral-100 pt-2.5 dark:border-neutral-700">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">Padrão (2×/semana)</span>
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">{meta.padrao}</span>
                          </div>
                        </div>
                      )}

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#0DB88F] px-5 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[0_6px_18px_-6px_rgba(13,184,143,0.5)] transition hover:scale-[1.02] hover:bg-[#0aaa82] active:scale-[0.99]"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Quero o {t.levelName}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mt-10">
            <div className="mx-auto max-w-2xl space-y-4">
              {/* Custos únicos */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  Custos únicos — pagos uma vez só
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/50">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Matrícula</p>
                    <p className="mt-1 text-xl font-black text-neutral-900 dark:text-white">R$ 199,90</p>
                  </div>
                  <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/50">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Material didático</p>
                    <p className="mt-1 text-xl font-black text-neutral-900 dark:text-white">R$ 389,90</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
                  Cobrados uma única vez por curso, junto com o investimento no curso.
                </p>
              </div>

              {/* Formas de pagamento */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  Formas de pagamento
                </p>
                <p className="mt-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Pix · Crédito · Débito · Boleto · Dinheiro em espécie
                </p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Combinações aceitas — entrada no Pix e o restante no crédito, por exemplo.
                  Boleto parcelado de acordo com a duração do seu curso.
                </p>
              </div>

              {/* Trilha personalizada */}
              <div className="rounded-xl border border-[#0DB88F]/30 bg-[#0DB88F]/5 p-6 dark:bg-[#0DB88F]/10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0DB88F]">
                  Não se encaixa em nenhum nível?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  Não importa se você está no zero absoluto, já domina parte do conteúdo ou quer pular etapas que já conhece. Como as aulas são individuais, o professor avalia o seu nível na primeira aula e monta o percurso certo pra você — sem revisitar o que você já sabe, sem pular o que você ainda precisa aprender.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0DB88F] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#0aaa82]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Falar sobre o meu caso
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AdultosFaq whatsappUrl={whatsappUrl} />

      {/* ── 7. CTA FINAL ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-neutral-900 px-8 py-14 text-center text-white shadow-xl sm:px-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#0DB88F]/10 blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Pronto pra começar?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-neutral-400">
                  Fale com a gente pelo WhatsApp, tire suas dúvidas e descubra
                  qual plano é o certo pra você.
                </p>

                <div className="mt-8 flex justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0DB88F] px-10 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_8px_28px_-8px_rgba(13,184,143,0.7)] transition hover:scale-[1.02] hover:bg-[#0aaa82] active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-sm text-neutral-500">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP
                  </span>
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    (16) 99257-8710
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
