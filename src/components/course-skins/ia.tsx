import type { ComponentType } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CommonSections, type Look } from "@/components/course-skins/common";
import { WhatsAppIcon } from "@/components/icons";
import { CourseHeroArt } from "@/components/course-hero-art";
import { IaScene, type IaVariante } from "@/components/course-skins/scenes/ia";
import type { CourseTheme } from "@/lib/course-themes";
import type { SkinProps } from "@/components/course-skins/shared";
import { ACCENT_TEXT, BORDER, Eyebrow, LevelPicker, MUTED, PAGE, PANEL, TEXT, TITLE, type IaBlockProps } from "@/components/course-skins/variants/ia-kit";
import { GeralAudience, GeralProgram } from "@/components/course-skins/variants/ia-geral";
import { ChatAudience, ChatProgram } from "@/components/course-skins/variants/ia-chat";
import { AgentesAudience, AgentesProgram } from "@/components/course-skins/variants/ia-agentes";
import { RagAudience, RagProgram } from "@/components/course-skins/variants/ia-rag";
import { VisualAudience, VisualProgram } from "@/components/course-skins/variants/ia-visual";
import { ConteudoAudience, ConteudoProgram } from "@/components/course-skins/variants/ia-conteudo";

/**
 * Pele "Conversa com a IA" (categoria Inteligência Artificial). O hero é comum à
 * categoria: a caixa de mensagem do chat é o CTA. "Para quem é" e "Conteúdo
 * programático" são de cada curso, com a metáfora da própria ferramenta
 * (variants/ia-*.tsx): chat, fila de agente, base de conhecimento, moodboard,
 * calendário editorial ou trilha de evolução. A parte comercial usa o bloco comum
 * com acabamento lavanda, cantos arredondados e botões em pílula.
 */

export const IA_THEME: CourseTheme = { accent: "#8B5CF6", accentHover: "#7c3aed", accent2: "#E879F9", heroBg: "#120d1f" };

const IA_LOOK: Look = {
  bgA: PANEL,
  bgB: PAGE,
  title: TITLE,
  text: TEXT,
  muted: MUTED,
  card: `border ${BORDER} bg-white shadow-[0_1px_2px_rgba(40,20,90,0.05)] dark:bg-white/[0.04] dark:shadow-none`,
  radius: "rounded-2xl",
  eyebrow: `text-xs font-bold uppercase tracking-[0.22em] ${ACCENT_TEXT}`,
  h2: "text-3xl font-bold tracking-tight sm:text-4xl",
  button: "rounded-full",
  cta: "bg-[radial-gradient(120%_130%_at_100%_0%,#3b1f78_0%,#171029_60%)] text-white ring-1 ring-white/10",
  divider: "divide-[#ece7f8] dark:divide-white/10",
  // O violeta puro fica no limite de contraste em texto pequeno sobre branco.
  accentText: ACCENT_TEXT,
};

/** Rótulos que acompanham o curso dentro da categoria. */
const VARIANTES: Record<IaVariante, { composer: string }> = {
  geral: { composer: "Como uso IA para ganhar horas na minha semana?" },
  chat: { composer: "Como escrevo prompts que funcionam de verdade?" },
  agentes: { composer: "Quero um agente que atenda meus clientes 24h…" },
  rag: { composer: "Quero uma IA que responda com os documentos da empresa…" },
  visual: { composer: "Quero criar imagens, vídeos e áudios com IA…" },
  conteudo: { composer: "Quero produzir um mês de posts em uma tarde…" },
};

function varianteDe(v?: string): IaVariante {
  return v && v in VARIANTES ? (v as IaVariante) : "geral";
}

/** Blocos "Para quem é" e "Conteúdo" de cada curso. */
const BLOCOS: Record<IaVariante, { Audience: ComponentType<IaBlockProps>; Program: ComponentType<IaBlockProps> }> = {
  geral: { Audience: GeralAudience, Program: GeralProgram },
  chat: { Audience: ChatAudience, Program: ChatProgram },
  agentes: { Audience: AgentesAudience, Program: AgentesProgram },
  rag: { Audience: RagAudience, Program: RagProgram },
  visual: { Audience: VisualAudience, Program: VisualProgram },
  conteudo: { Audience: ConteudoAudience, Program: ConteudoProgram },
};

// ── Peças do hero ─────────────────────────────────────────────────────────────

/** CTA do hero: a caixa de mensagem do chat, já com a pergunta digitada. */
function Composer({ href, placeholder }: { href: string; placeholder: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex w-full max-w-xl flex-col gap-3 rounded-2xl border ${BORDER} bg-white p-2 pt-3.5 shadow-[0_20px_50px_-24px_rgba(91,33,182,0.55)] transition hover:border-(--accent)/60 dark:bg-[#1a1429] sm:flex-row sm:items-center sm:pl-4 sm:pt-2`}
    >
      <span className={`flex min-w-0 flex-1 items-start gap-2 px-2 text-sm sm:items-center sm:px-0 ${MUTED}`}>
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-(--accent) sm:mt-0" />
        <span className="min-w-0 sm:truncate">{placeholder}</span>
      </span>
      <span className="inline-flex shrink-0 items-center justify-center gap-2 self-end rounded-xl bg-(--accent) px-4 py-2.5 text-sm font-bold text-white transition group-hover:bg-(--accent-hover) sm:self-auto">
        <WhatsAppIcon className="h-4 w-4" />
        <span>Quero saber mais</span>
        <ArrowUp className="h-4 w-4" />
      </span>
    </a>
  );
}

// ── Pele ──────────────────────────────────────────────────────────────────────

export function IaSkin(props: SkinProps) {
  const { course, theme, logo, whatsappUrl, selectedTier, onSelectTier } = props;
  const multiTier = course.tiers.length > 1;
  const variante = varianteDe(course.variante);
  const { Audience, Program } = BLOCOS[variante];

  const verConteudo = () => document.getElementById("conteudo-ia")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const blockProps: IaBlockProps = { ...props, verConteudo };

  return (
    <div className={`sb-bleed ${PAGE}`}>
      {/* ── HERO: a caixa de mensagem é o CTA ─────────────────────────────── */}
      <section className="sb-bleed relative isolate overflow-hidden bg-[#f4f0ff] dark:bg-(--hero-bg)">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-(--accent)/25 blur-3xl dark:bg-(--accent)/30" />
        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[460px] w-[460px] rounded-full bg-(--accent-2)/20 blur-3xl dark:bg-(--accent-2)/12" />
        <div className="pointer-events-none absolute left-1/3 top-10 h-[260px] w-[260px] rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] dark:opacity-[0.12]"
          style={{ backgroundImage: "radial-gradient(#c4b5fd 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-20 lg:pt-20">
          <div className="min-w-0">
            <Reveal>
              <Eyebrow>{course.categoria} · aula particular</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 bg-[linear-gradient(120deg,#1c1530_30%,#6d28d9)] bg-clip-text pb-1 text-4xl font-bold leading-[1.06] tracking-tight text-transparent dark:bg-[linear-gradient(120deg,#ffffff_35%,#c4b5fd)] sm:text-5xl lg:text-[3.4rem]">
                {course.nome}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className={`mt-5 max-w-xl text-base sm:text-lg ${MUTED}`}>{course.tagline}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8">
                <Composer href={whatsappUrl} placeholder={VARIANTES[variante].composer} />
                <p className={`mt-2.5 pl-1 text-xs ${MUTED}`}>A IA pode errar. No curso, você aprende a conferir cada resposta.</p>
              </div>
            </Reveal>
            {multiTier && (
              <Reveal delay={340}>
                <div className="mt-8">
                  <p className={`mb-2 text-[11px] font-bold uppercase tracking-[0.2em] ${MUTED}`}>Escolha o nível</p>
                  <LevelPicker course={course} selected={selectedTier} onSelect={onSelectTier} />
                </div>
              </Reveal>
            )}
          </div>
          <Reveal delay={200}>
            <CourseHeroArt theme={theme} logo={logo}>
              <IaScene variante={variante} />
            </CourseHeroArt>
          </Reveal>
        </div>
        <div className="h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] opacity-40" />
      </section>

      {/* ── PARA QUEM É e CONTEÚDO: cada curso tem a metáfora da própria ferramenta ── */}
      <Audience {...blockProps} />
      <Program {...blockProps} />

      <CommonSections {...props} lookKey="oficina" look={IA_LOOK} />
    </div>
  );
}
