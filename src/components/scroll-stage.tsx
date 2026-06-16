/**
 * <ScrollStage> — seção com scroll-driven animation (estilo Apple).
 *
 * Conforme o usuário rola, um celular sobe no centro com a foto se "montando"
 * dentro dele e quatro destaques surgem em sequência ao redor (nas laterais no
 * desktop, um-por-vez embaixo no mobile).
 *
 * Progressive enhancement:
 * - SSR / sem-JS / prefers-reduced-motion → layout ESTÁTICO simples (device +
 *   grid de destaques, tudo visível). Bom pra SEO e pro bot de WhatsApp.
 * - Com JS + movimento permitido → ativa o modo "scrub": a seção fica alta
 *   (heightVh) e o miolo gruda na tela (sticky) enquanto a animação acompanha
 *   o scroll.
 *
 * Performance:
 * - O loop só roda enquanto há rolagem (useScrollScrub) e só anima transform/
 *   opacity (composição GPU).
 * - O fundo NÃO é reconstruído por frame: são camadas de gradiente fixas e só
 *   a opacidade muda (sem repaint, só composição).
 */
import { useLayoutEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Img } from "@/components/img";
import { cn } from "@/lib/utils";
import { useScrollScrub } from "@/hooks/use-scroll-scrub";

export type ScrollFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type ScrollStageProps = {
  heading: React.ReactNode;
  /** Exatamente 4 destaques (2 por lado no desktop). */
  features: ScrollFeature[];
  /** Nome da imagem no manifest (<Img name="...">) + alt. */
  photo: { name: string; alt: string };
  /** Altura do palco em vh no modo scrub. Default 340. */
  heightVh?: number;
};

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const MOBILE_BP = 820;

// Camadas de fundo (fixas) — a transição de cor é feita por opacidade, barato.
const GRAD_BLUE = "radial-gradient(circle at 50% 35%, #16336a, #0a1428)";
const GRAD_TEAL = "radial-gradient(circle at 50% 35%, #0e4b63, #06202a)";
const GRAD_INDIGO = "radial-gradient(circle at 50% 35%, #241a6e, #0b0a26)";
const HALO = "radial-gradient(circle at 50% 42%, rgba(91,141,240,0.5), transparent 60%)";

function FeatureCard({ feature }: { feature: ScrollFeature }) {
  const Icon = feature.icon;
  return (
    <>
      <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#5b8df0] shadow-[0_10px_30px_rgba(47,107,214,0.5)]">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#aebfe0]">{feature.desc}</p>
    </>
  );
}

export function ScrollStage({ heading, features, photo, heightVh = 340 }: ScrollStageProps) {
  const [enhanced, setEnhanced] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const tealRef = useRef<HTMLDivElement>(null);
  const indigoRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Decide se ativa o modo scrub (client-only, respeita reduced-motion).
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setEnhanced(true);
  }, []);

  // Aplica o estado da animação pro progresso atual da seção.
  function applyProgress() {
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const p = total > 0 ? clamp(-rect.top / total) : 0;
    const mobile = window.innerWidth <= MOBILE_BP;
    const d = clamp(p / 0.34);

    // fundo: crossfade azul → teal → índigo só com opacidade (sem repaint)
    if (tealRef.current) tealRef.current.style.opacity = `${clamp(p / 0.5)}`;
    if (indigoRef.current) indigoRef.current.style.opacity = `${clamp((p - 0.5) / 0.5)}`;
    if (haloRef.current) haloRef.current.style.opacity = `${lerp(0, 0.55, d)}`;

    // device entra menor e mais baixo (abaixo do título) e cresce/sobe pro centro
    if (deviceRef.current)
      deviceRef.current.style.transform = `scale(${lerp(0.5, 1, clamp(d * 1.25))}) translateY(${lerp(110, 0, d)}px)`;
    if (photoRef.current)
      photoRef.current.style.transform = `translateY(${lerp(100, 0, clamp((p - 0.06) / 0.3))}%)`;
    // título: aparece, depois some ANTES do device chegar ao centro (sem colisão)
    if (headingRef.current) {
      headingRef.current.style.opacity = `${lerp(0, 1, clamp(p / 0.08)) * lerp(1, 0, clamp((p - 0.14) / 0.1))}`;
      headingRef.current.style.transform = `translateY(${lerp(0, -16, clamp(p / 0.24))}px)`;
    }

    // destaques em sequência
    const start = 0.34;
    const seg = 0.15;
    // mobile: UM por vez (índice ativo pelo segmento) — nunca dois sobrepostos
    const activeIdx = mobile ? Math.floor((p - start) / seg) : -1;
    featRefs.current.forEach((f, i) => {
      if (!f) return;
      if (mobile) {
        if (i !== activeIdx) {
          f.style.opacity = "0";
          f.style.transform = "translate(-50%, 18px)";
          return;
        }
        const local = (p - start) / seg - i; // 0..1 dentro do segmento
        const fade = 0.18;
        const op = clamp(local / fade) * clamp((1 - local) / fade);
        f.style.opacity = `${op}`;
        f.style.transform = `translate(-50%, ${lerp(18, 0, clamp(local / fade))}px)`;
      } else {
        const a = start + i * seg;
        const t = clamp(((p - a) / seg) * 1.4);
        const dir = i % 2 === 0 ? -1 : 1;
        f.style.opacity = `${t}`;
        f.style.transform = `translateX(${lerp(dir * 60, 0, t)}px)`;
      }
    });
  }

  // Aplica o estado inicial antes do paint (evita flash).
  useLayoutEffect(() => {
    if (enhanced) applyProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enhanced]);

  // Loop eficiente: só roda enquanto há scroll e a seção está visível.
  useScrollScrub(enhanced, rootRef, applyProgress);

  // ── Modo ESTÁTICO (SSR / sem-JS / reduced-motion) ───────────────────────
  if (!enhanced) {
    return (
      <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: GRAD_BLUE }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#9dc0ff]">Santos Tech</span>
            <h2 className="mt-2.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </div>
          <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
            <div className="w-[min(56vw,230px)] shrink-0 overflow-hidden rounded-[40px] border-8 border-[#0a0a0a] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[9/19]">
                <Img name={photo.name} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover" sizesAttr="230px" />
              </div>
            </div>
            <div className="grid max-w-2xl gap-8 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="max-w-xs">
                  <FeatureCard feature={f} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Modo SCRUB (JS + movimento) ─────────────────────────────────────────
  const leftFeatures = [
    { f: features[0], i: 0 },
    { f: features[2], i: 2 },
  ];
  const rightFeatures = [
    { f: features[1], i: 1 },
    { f: features[3], i: 3 },
  ];

  return (
    <div ref={rootRef} className="relative" style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden" style={{ background: "#0a1428" }}>
        {/* camadas de fundo (crossfade por opacidade) */}
        <div className="pointer-events-none absolute inset-0" style={{ background: GRAD_BLUE }} />
        <div ref={tealRef} className="pointer-events-none absolute inset-0 opacity-0" style={{ background: GRAD_TEAL, willChange: "opacity" }} />
        <div ref={indigoRef} className="pointer-events-none absolute inset-0 opacity-0" style={{ background: GRAD_INDIGO, willChange: "opacity" }} />
        <div ref={haloRef} className="pointer-events-none absolute inset-0 opacity-0" style={{ background: HALO, willChange: "opacity" }} />

        {/* título */}
        <div ref={headingRef} className="absolute left-0 right-0 top-[13vh] z-[5] px-5 text-center text-white opacity-0" style={{ willChange: "opacity, transform" }}>
          <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#9dc0ff]">Santos Tech</span>
          <h2 className="mt-2.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{heading}</h2>
        </div>

        {/* cena: texto | device | texto */}
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:gap-12 sm:px-12 lg:gap-[72px] lg:px-20 max-[820px]:flex max-[820px]:flex-col max-[820px]:items-center max-[820px]:justify-center max-[820px]:px-5 max-[820px]:pb-[16vh]">
          {/* coluna esquerda */}
          <div className="z-[4] flex flex-col gap-[clamp(30px,8vh,80px)] max-[820px]:contents">
            {leftFeatures.map(({ f, i }) => (
              <div
                key={f.title}
                ref={(el) => { featRefs.current[i] = el; }}
                className="max-w-[300px] text-[#eaf1ff] opacity-0 max-[820px]:absolute max-[820px]:bottom-[8vh] max-[820px]:left-1/2 max-[820px]:w-[84vw] max-[820px]:max-w-[340px] max-[820px]:text-center"
                style={{ willChange: "opacity, transform" }}
              >
                <div className="max-[820px]:[&>div:first-child]:mx-auto">
                  <FeatureCard feature={f} />
                </div>
              </div>
            ))}
          </div>

          {/* device */}
          <div
            ref={deviceRef}
            className="relative z-[3] aspect-[9/19] w-[min(58vw,272px)] justify-self-center overflow-hidden rounded-[40px] border-8 border-[#0a0a0a] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.6)] max-[820px]:w-[min(46vw,172px)]"
            style={{ willChange: "transform" }}
          >
            <div className="absolute left-1/2 top-2.5 z-[4] h-[18px] w-[34%] -translate-x-1/2 rounded-b-[12px] bg-[#0a0a0a]" />
            <div ref={photoRef} className="absolute inset-0" style={{ willChange: "transform" }}>
              <Img name={photo.name} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover" sizesAttr="(max-width:820px) 200px, 300px" />
            </div>
          </div>

          {/* coluna direita */}
          <div className="z-[4] flex flex-col items-end gap-[clamp(30px,8vh,80px)] text-right max-[820px]:contents">
            {rightFeatures.map(({ f, i }) => (
              <div
                key={f.title}
                ref={(el) => { featRefs.current[i] = el; }}
                className={cn(
                  "max-w-[300px] text-[#eaf1ff] opacity-0",
                  "max-[820px]:absolute max-[820px]:bottom-[8vh] max-[820px]:left-1/2 max-[820px]:w-[84vw] max-[820px]:max-w-[340px] max-[820px]:text-left",
                )}
                style={{ willChange: "opacity, transform" }}
              >
                {/* desktop: ícone alinhado à direita; mobile: centralizado */}
                <div className="[&>div:first-child]:ml-auto max-[820px]:[&>div:first-child]:mx-auto max-[820px]:text-center">
                  <FeatureCard feature={f} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
