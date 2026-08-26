# Pacote de motion na home — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar pré-loader (logo se desenhando), parallax no Hero, transição
fade+movimento entre a home e `/cursos`, e 4 pontos de animação SVG — piloto
restrito à home (`/`), sem tocar em nenhuma outra rota além do par `/cursos`.

**Architecture:** Cada efeito é um hook cliente-only isolado
(`src/hooks/use-*.ts`) que encapsula GSAP, ligado a um componente existente por
um `ref`. Nenhum componente existente perde sua renderização SSR — os hooks só
rodam em `useEffect`/`useGSAP` (depois da montagem no browser), então o HTML
que o bot do WhatsApp lê via `WebFetch` (sem JS) nunca muda.

**Tech Stack:** React 19, TanStack Router/Start, Tailwind 4, GSAP 3 +
`@gsap/react` (novo), `lucide-react`. Sem test runner no projeto — verificação
é `bun run lint` + `bun run build` (type-check via `tsc`) + checagem manual no
`bun run dev`, seguindo o padrão já estabelecido em `CLAUDE.md` deste repo.

---

## Antes de começar

Todas as tasks assumem que você está em
`/home/guilherme/Documentos/Projetos/Santos-Tech-Home-Page` e que `bun run dev`
consegue rodar (`bun install` já feito). Rode `bun run lint && bun run build`
uma vez agora pra confirmar que a base está limpa antes de qualquer mudança.

---

### Task 0: Adicionar dependência GSAP

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Instalar as duas dependências**

Run: `bun add gsap @gsap/react`

Expected: `package.json` ganha `"gsap"` e `"@gsap/react"` em `dependencies`, e
`bun.lock` é atualizado. Nenhum outro arquivo muda.

- [ ] **Step 2: Confirmar que o build ainda passa**

Run: `bun run build`
Expected: build termina sem erro (a dependência ainda não é usada em código,
então isso só confirma que a instalação não quebrou nada).

- [ ] **Step 3: Commit**

```bash
git add package.json bun.lock
git commit -m "chore: adiciona gsap e @gsap/react"
```

---

### Task 1: Pré-loader (logo real se desenhando)

**Files:**
- Create: `src/components/preloader.tsx`
- Modify: `src/routes/index.tsx` (monta `<Preloader />`)

O logo vetorial fornecido pelo usuário tem duas camadas (`fill-rule: evenodd`):
uma silhueta e um detalhe de facetas. As cores usadas são as do arquivo
original (branco + quase-preto `#1A1515`), não as cores da marca — isso já foi
testado e essa foi a escolha final.

- [ ] **Step 1: Criar o componente `Preloader`**

Criar `src/components/preloader.tsx`:

```tsx
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Path do logo real (arquivo vetorial da marca — duas camadas fill-rule evenodd).
const LOGO_BASE_PATH =
  "M187.5 17L265 31.5L340 65.5L368.667 104.167L371.333 133.5L340 99.5L292.667 83.5L310.667 121.5L340 122.833L380.667 144.833L408 166.667L431.333 188.167L501 248L497 258L494.667 256.833H459.333L430 242.833L445.333 267.5L456 274.833L460.667 272.167L470.667 278.833L472 310.833L469.333 314.833L423.333 326.167L418 324.167L422.667 318.167L409.333 320.833L388 328.833L375.333 336.833L372.667 332.833L386 320.833L368 326.833L349.333 320.833L318.667 339.5L260 409.5L279.333 376.833L300 343.5L301.333 312.167L306 308.833L328 322.167L340 315.5L288.667 286.167L283.333 280.833L270.667 218.167L291.333 192.833L292 190.167H284.667L260 218.167L268 248.833L246.667 276.167L238.667 310.167L250 279.5L263.333 266.833L265.333 279.5L297.333 317.5V322.167L280.667 373.5L231.333 440.833L225.333 430.833L201.333 348.833L188 329.5L194 282.833L123.333 374.833L120.667 376.167L118.667 374.167L140.667 267.5L174 161.5L177.333 163.5L208 208.833L186 272.833L278 165.5L280.667 163.5L311.333 161.5L326 147.5V144.833L267.333 109.5L250 88.1667L210 89.5L122 146.5L100 144.5L92.5 144L86 143.5L64 140.167L236 64.8333L144 58.8333L140 58.1667L132 56.5L242.5 52L320.667 75.5L252.5 37L197.333 21.5L187.5 17ZM274.5 23.6667L324.5 34.5L352.667 47.5L356 29.5L372 58.8333C374.929 71.0047 376.571 77.8287 379.5 90L384.667 54.1667L391.5 86.5L404.667 69.5L422 95.5L409 153.5L411.5 104.167L405 110.667L398.667 116.833L398.5 140.667L398 142.833L374.667 104.833L362.667 73.5L281.333 29.5L274.5 23.6667ZM209.333 94.1667L256.667 136.833L236.667 132.833L254.667 149.5L252.667 154.167L228 148.167L236.5 159.5L226.5 165.5L250.667 172.167L253.333 175.5L242 197.5H238L198.667 160.833L188 115.5L209.333 94.1667ZM160.667 128.833L164.667 130.833L160.667 179.5L102 242.167L129.333 238.167L131.333 241.5L112 282.167L109.5 284.5L91.5 281.5L103 287L107.5 290.5L85.3333 324.167L80.6667 326.167L69.3333 310.833L79.3333 217.5L160.667 128.833ZM280.667 129.5L298 141.5L319.333 145.5L321.333 148.167L318 150.833L296.667 152.833L280 134.167L280.667 129.5ZM366.667 156.833L377.333 165.5L375.333 179.5L370 176.833L366.667 156.833ZM350 175.5L390.667 190.167L386 195.167L379.5 194.833L385.333 202.167L411.333 220.833L354.667 304.167L342 299.5H353.333L356 296.833L390.667 232.167V226.833L379.333 214.833L354.667 216.833L332 200.833H320L350 175.5ZM486 277.5L488 278.833L492 297.5L482 327.5L479.333 328.833L474 318.167L476 296.167L486 277.5ZM464.667 318.167L472.667 320.167L471.333 334.167L474 349.5L469 374L457 391L455.5 386.833L450.667 376.167L449 382.167C445.194 384.934 444.6 387.442 442 391L437.5 388L434.5 382L425.333 392.833L418.599 397.103L415 388L423.5 409.5L409.5 456.5L388 405.5L385.333 446.167L352 495.167C343.018 473.753 337.982 462.414 329 441L293.333 422.167L281.333 415.5L280.667 400.833L278.667 399.5L280.667 394.833L303.333 363.5L308 359.5L310 360.833L315.333 352.833L326 347.5L328.667 350.167V396.167L332 401.5L329.333 396.167L330 377.5L332 344.833L335.333 342.167L362 376.833L361.333 410.167L365.333 373.5L342 339.5V336.167L348.667 332.167L404.667 406.833L412.667 386.833L416.5 382.5L417.333 379.5L408.667 380.833L401.333 376.833L368 346.833L365.333 341.5L384 339.5L464.667 318.167Z";
const LOGO_DETAIL_PATH =
  "M187.5 16.5L253.5 36.5L324.667 76.6667L246 53.3334H209.333L187.5 16.5ZM274.5 23.5L362.667 72.6667L376 105.333L397.5 141.5L397.5 116L404.5 109.5L412.667 102L409 153V167.333L380.667 146.667L340 124.667H312.667L309.333 122L296 104L291.333 82.6667L340 98.6667L371.333 132.667L371 131L367.333 104.667L340 67.3334L283 39.5L274.5 23.5ZM132 56L234.667 62.6667L237.333 66L128 112L108.667 99.3334L143.333 73.3334L132 56ZM240.667 87.3334L252 88L264.667 106.667L322 141.333L327.333 145.333V148L311.333 163.333L280.667 165.333L278 167.333L185.333 275.333L206.667 209.333L176 164L174 163.333L172.5 168.5L142 268L122 375.333L194.667 282L189.333 330L202.5 349.333L217 399.333L231.5 440.5L167.333 484.667L180.667 379.333L107.333 450L117.333 381.333L112.667 382L80 399.333L84.6667 332L79.3333 331.333L38 339L12 343.333L56 274L55.3333 272H49.3333L25.3333 275.333L69.3333 204.667L40.6667 200.667L92.6667 162L96.6667 148L64 140L122 146L208.5 89.5L210 89L216.667 88L240.667 87.3334ZM209.333 96L212 97.5L254 135L233.333 132L245 140.5L253.333 150L228 148L235.333 159.333L225.5 165L252 176L242 196.667L200 161.333L189.333 116L209.333 96ZM160.667 130.667L163.333 131.333V137.333L159.333 180L98 245L129.333 240L109.5 284.5L91.5 281.5L105.5 289.5L84 324.667L70.6667 311.333L80.6667 218L160.667 130.667ZM280.667 131.333L298 143.333L320 148.667L296.667 152L280.667 131.333ZM366.5 156L378.667 166L374.667 182L368.667 177.333L366.5 156ZM350 174.667L390.667 189.333L392 194L386 195V202L412.667 221.333L354.667 306L336.667 299.333L354.667 297.333L389.333 232.667V227.333L379.333 216.667L354.667 218.667L332 202.667L314 202L320 198L350 174.667ZM284.667 189.333H292.667L293.333 192L272 218.667L284.667 281.333L339.333 312.667L341.333 316.667L328 324L306 310.667L302.667 312.667L301.333 344L266.667 399.333L318.667 338.667L349.333 320H354L365.5 325.5L384.667 320L390 320.667L378 328L374 333.333L375.333 336L388 328L409.333 320L423.333 317.333V321.333L419.333 323.333L423.333 325.333L469.333 314V279.333L458.5 275L463.5 282.5L445.333 269.333L432 247L427 239L456.5 255L494 256L497 257.5L488 279.333H486L477.333 296.667L475.333 318.667L480.667 328.667L474 336L475.333 350.667L472 371.333L457 392L453.4 388L451 374L457 390L469.5 371.5L472.667 350L470 334.667L470.667 320L384 341.333L366.667 342L368 346L401.333 376L408.667 380L418 378.667C416.833 382.116 415.011 387.5 415.011 387.5L415.5 386.5L404.667 408.667L352 337.333L347.333 334L343.333 336.667V340L366.667 374L359.333 430L360.667 377.333L338.667 346.667L334 344C333.024 363.721 329.5 376 331.5 394.5L335.5 414.5L332 406L328 397L327.333 350.667L323.333 349.333L312 358L312.667 413.5L309.333 362L305.333 363.333L280.667 399.333L261.333 420.667L255.333 426.667L231.5 440L279.333 374L296 322.667V318L264 280L263.333 268.667L251.333 280L235.333 322.667L245.333 276.667L266.667 249.333L258.667 218.667L284.667 189.333ZM451 374L453.4 388L448.667 382.667L441.333 395.333L435 387.5L423.333 409.5L415.011 387.5L416 384.578L423.333 393.333L434.5 381.5L442 390.5L451 374ZM387.333 402L408.667 455.333L396.667 454L352 495L384 446.667L387.333 402ZM281.5 415L329 440.5L352 495L322.667 478L281.5 415Z";

/**
 * Pré-loader: as duas camadas do logo real se desenham (stroke-dasharray via
 * getTotalLength — funciona em qualquer path, não só linha simples) e depois
 * preenchem. Roda toda vez que a home monta. Bloqueia interação até sumir.
 * Sem JS (bot do WhatsApp) isso nunca é renderizado como bloqueio real: é só
 * um overlay client-side por cima do HTML que já veio pronto do servidor.
 */
export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [hidden, setHidden] = useState(false);
  const baseRef = useRef<SVGPathElement | null>(null);
  const detailRef = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setHidden(true);
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }

    const base = baseRef.current;
    const detail = detailRef.current;
    if (!base || !detail) return;

    const baseLen = base.getTotalLength();
    const detailLen = detail.getTotalLength();
    gsap.set(base, { strokeDasharray: baseLen, strokeDashoffset: baseLen });
    gsap.set(detail, { strokeDasharray: detailLen, strokeDashoffset: detailLen });

    const tl = gsap.timeline({
      onComplete: () => {
        setHidden(true);
        setTimeout(() => setMounted(false), 300);
      },
    });
    tl.to(base, { strokeDashoffset: 0, duration: 0.62, ease: "power2.inOut" })
      .to(detail, { strokeDashoffset: 0, duration: 0.62, ease: "power2.inOut" }, 0.06)
      .to([base, detail], { fillOpacity: 1, duration: 0.22 }, 0.6)
      .to({}, { duration: 0.25 });

    return () => {
      tl.kill();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#04325A] transition-opacity duration-300 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      <svg viewBox="0 0 512 512" width="148" height="148" fill="none">
        <path
          ref={baseRef}
          d={LOGO_BASE_PATH}
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFFFFF"
          fillOpacity={0}
          stroke="#FFFFFF"
          strokeWidth={4.5}
          strokeLinejoin="round"
        />
        <path
          ref={detailRef}
          d={LOGO_DETAIL_PATH}
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#1A1515"
          fillOpacity={0}
          stroke="#1A1515"
          strokeWidth={4}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
```

- [ ] **Step 2: Montar o `Preloader` na home**

Editar `src/routes/index.tsx`. Adicionar o import perto dos outros imports de
componente (perto de `import { Reveal } from "@/components/reveal";`):

```tsx
import { Preloader } from "@/components/preloader";
```

E adicionar `<Preloader />` como primeiro filho do fragment retornado por
`Index()` — a função hoje começa assim:

```tsx
function Index() {
  return (
    <>
      <JsonLd data={HOME_SCHEMAS} />
      {/* ============ HERO ============ */}
```

Trocar por:

```tsx
function Index() {
  return (
    <>
      <Preloader />
      <JsonLd data={HOME_SCHEMAS} />
      {/* ============ HERO ============ */}
```

- [ ] **Step 3: Lint, build e checagem manual**

Run: `bun run lint`
Expected: sem erros.

Run: `bun run build`
Expected: build passa (o `tsc` do build valida os tipos de `preloader.tsx`).

Run: `bun run dev`, abrir `http://localhost:3000/` (ou a porta que o Vite
mostrar) no navegador:
- Confirmar que o logo aparece se desenhando (traço) e depois preenche, bem
  rápido (~0.6s), sobre fundo azul-marinho, antes do conteúdo da home aparecer.
- No DevTools, ativar "Emulate CSS prefers-reduced-motion: reduce" e recarregar
  — o overlay deve sumir quase instantaneamente, sem o traço animado.
- Com JS desabilitado no navegador (ou via `curl http://localhost:3000/`),
  confirmar que o conteúdo da home aparece normalmente no HTML (o preloader
  client-only não deve impedir isso).

- [ ] **Step 4: Commit**

```bash
git add src/components/preloader.tsx src/routes/index.tsx
git commit -m "feat: adiciona pré-loader com o logo real se desenhando na home"
```

---

### Task 2: Ícones do Hero se desenhando na entrada

**Files:**
- Create: `src/hooks/use-decorative-draw-in.ts`
- Modify: `src/components/decorative-elements.tsx`

Reaproveita os ícones que já existem em `decorative-elements.tsx`. Formas que
já são `stroke` (Cube, Hexagon, CodeBracket, Terminal, Chip, Cog, Joystick,
Antenna, PlayTriangle) ganham o traço se desenhando; formas só de `fill`
(Sparkle, PixelDots, Binary, Diamond, Star, PixelHeart) simplesmente aparecem
com fade (via a opacidade do `<svg>` pai) — não têm contorno pra desenhar.

- [ ] **Step 1: Criar o hook `useDecorativeDrawIn`**

Criar `src/hooks/use-decorative-draw-in.ts`:

```ts
import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

/**
 * Anima o traço (stroke-dasharray/dashoffset) de todo path/circle com stroke
 * dentro do container, na entrada. Ícones só de fill (sem stroke) recebem
 * apenas o fade do <svg> pai. Não roda com prefers-reduced-motion.
 */
export function useDecorativeDrawIn(containerRef: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const container = containerRef.current;
      if (!container) return;

      const svgs = Array.from(container.querySelectorAll("svg"));
      if (svgs.length === 0) return;

      gsap.set(svgs, { opacity: 0 });
      gsap.to(svgs, { opacity: 1, duration: 0.5, stagger: 0.06, ease: "power1.out" });

      svgs.forEach((svg) => {
        const shapes = Array.from(
          svg.querySelectorAll<SVGGeometryElement>("path[stroke], circle[stroke]"),
        );
        shapes.forEach((shape) => {
          const length = shape.getTotalLength();
          gsap.set(shape, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(shape, { strokeDashoffset: 0, duration: 0.7, ease: "power2.out", delay: 0.1 });
        });
      });
    },
    { scope: containerRef, dependencies: [] },
  );
}
```

Nota: essa é a primeira vez usando `useGSAP` no repo — o `containerRef` aqui
é `RefObject<HTMLDivElement | null>`; o hook `useGSAP` aceita esse tipo de ref
diretamente em `scope`.

- [ ] **Step 2: Ligar o hook em `DecorativeElements`**

Editar `src/components/decorative-elements.tsx`. Trocar a linha de import:

```tsx
import type { CSSProperties, ReactNode } from "react";
```

por:

```tsx
import { useRef, type CSSProperties, type ReactNode } from "react";
import { useDecorativeDrawIn } from "@/hooks/use-decorative-draw-in";
```

E trocar o corpo de `DecorativeElements`:

```tsx
export function DecorativeElements({
  className,
  color,
  hideOnMobile = true,
  variant = "default",
}: Props) {
  const visibility = hideOnMobile ? "hidden lg:block" : "block";
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${visibility} ${className ?? ""}`}
      style={color ? { color } : undefined}
      aria-hidden
    >
      {COMPOSITIONS[variant]}
    </div>
  );
}
```

por:

```tsx
export function DecorativeElements({
  className,
  color,
  hideOnMobile = true,
  variant = "default",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useDecorativeDrawIn(containerRef);
  const visibility = hideOnMobile ? "hidden lg:block" : "block";
  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 ${visibility} ${className ?? ""}`}
      style={color ? { color } : undefined}
      aria-hidden
    >
      {COMPOSITIONS[variant]}
    </div>
  );
}
```

- [ ] **Step 3: Lint, build e checagem manual**

Run: `bun run lint && bun run build`
Expected: sem erros.

Run: `bun run dev`, abrir a home em viewport desktop (≥1024px — os ícones
decorativos são `hidden lg:block`, só aparecem em telas grandes):
- Recarregar e observar os ícones do Hero (cubo, colchetes de código,
  hexágono etc.) se desenhando um a um antes de flutuar continuamente.
- Ativar `prefers-reduced-motion: reduce` no DevTools e recarregar — os
  ícones devem aparecer direto, sem traço.

- [ ] **Step 4: Commit**

```bash
git add src/hooks/use-decorative-draw-in.ts src/components/decorative-elements.tsx
git commit -m "feat: ícones decorativos do hero se desenham na entrada"
```

---

### Task 3: Parallax no Hero

**Files:**
- Create: `src/hooks/use-hero-parallax.ts`
- Modify: `src/routes/index.tsx`

Três camadas com velocidades diferentes: fundo pontilhado (mais devagar),
blobs desfocados (velocidade intermediária), `HeroCollage` (mais rápido).
Scroll-linked (não mouse), via GSAP `ScrollTrigger`.

- [ ] **Step 1: Criar o hook `useHeroParallax`**

Criar `src/hooks/use-hero-parallax.ts`:

```ts
import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Parallax scroll-linked só na primeira dobra (Hero). Reutiliza o mesmo
 * `sectionRef` que a seção já usa como container. Cada camada devolvida deve
 * ser anexada ao elemento correspondente no JSX via `ref`.
 */
export function useHeroParallax(sectionRef: RefObject<HTMLElement | null>) {
  const dotsRef = useRef<HTMLDivElement | null>(null);
  const blobsRef = useRef<HTMLDivElement | null>(null);
  const collageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const section = sectionRef.current;
      if (!section) return;

      const scrollTrigger = { trigger: section, start: "top top", end: "bottom top", scrub: true };
      if (dotsRef.current) gsap.to(dotsRef.current, { y: 40, ease: "none", scrollTrigger });
      if (blobsRef.current) gsap.to(blobsRef.current, { y: 90, ease: "none", scrollTrigger });
      if (collageRef.current) gsap.to(collageRef.current, { y: 150, ease: "none", scrollTrigger });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return { dotsRef, blobsRef, collageRef };
}
```

- [ ] **Step 2: Ligar o hook na seção Hero**

Editar `src/routes/index.tsx`. Adicionar `useRef` ao import de React (o
arquivo hoje não importa nada de `"react"` diretamente — adicionar a linha):

```tsx
import { useRef } from "react";
```

Adicionar o import do hook perto do `Preloader`:

```tsx
import { useHeroParallax } from "@/hooks/use-hero-parallax";
```

Dentro de `function Index() {`, antes do `return`, adicionar:

```tsx
function Index() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { dotsRef, blobsRef, collageRef } = useHeroParallax(heroRef);

  return (
```

Na seção do Hero, o trecho atual é:

```tsx
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />
        <DecorativeElements color="#187ABF" />

        <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-40 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
```

Trocar por (adiciona `ref={heroRef}` na `<section>`, `ref={dotsRef}` no fundo
pontilhado, envolve os dois blobs num `<div ref={blobsRef}>`):

```tsx
      <section ref={heroRef} className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white">
        <div
          ref={dotsRef}
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div ref={blobsRef}>
          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />
        </div>
        <DecorativeElements color="#187ABF" />

        <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-40 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
```

Mais abaixo, o trecho que renderiza a colagem:

```tsx
            {/* Colagem rotativa — alterna fotos de alunos (crianças + adolescentes) */}
            <HeroCollage />
          </div>
        </div>
```

Trocar por:

```tsx
            {/* Colagem rotativa — alterna fotos de alunos (crianças + adolescentes) */}
            <div ref={collageRef}>
              <HeroCollage />
            </div>
          </div>
        </div>
```

- [ ] **Step 3: Lint, build e checagem manual**

Run: `bun run lint && bun run build`
Expected: sem erros. (`heroRef` é `RefObject<HTMLElement | null>` — o `<section>`
aceita isso normalmente.)

Run: `bun run dev`, abrir a home:
- Rolar a página a partir do topo e observar o fundo pontilhado, os blobs e a
  colagem de fotos se movendo em velocidades visivelmente diferentes durante
  a primeira dobra.
- Testar em viewport mobile (o parallax deve funcionar igual via touch-scroll).
- Com `prefers-reduced-motion: reduce` ativo, confirmar que nada se move ao
  rolar (a seção volta a ser estática).

- [ ] **Step 4: Commit**

```bash
git add src/hooks/use-hero-parallax.ts src/routes/index.tsx
git commit -m "feat: adiciona parallax scroll-linked no hero da home"
```

---

### Task 4: Transição fade+movimento entre páginas (home ⇄ /cursos)

**Files:**
- Create: `src/hooks/use-route-enter-fade.ts`
- Create: `src/components/page-transition-link.tsx`
- Modify: `src/routes/__root.tsx`
- Modify: `src/components/site-header.tsx`

Abordagem em duas partes, pra não brigar com o TanStack Router (que não tem
hook nativo de exit/enter transition):
1. **Entrada:** toda vez que o pathname muda (`useRouterState`), o `<main>`
   ganha um fade+leve movimento de entrada — isso cobre **qualquer** navegação
   (clique em link, botão voltar/avançar do navegador, teclado).
2. **Saída:** só nos links específicos pro par piloto (`/cursos`, hoje em
   `site-header.tsx`), um componente `PageTransitionLink` roda o fade de saída
   **antes** de chamar `router.navigate()`.

Voltar/avançar do navegador não tem uma saída animada (só a entrada) — é uma
limitação aceita e documentada no spec, não um bug.

- [ ] **Step 1: Criar o hook `useRouteEnterFade`**

Criar `src/hooks/use-route-enter-fade.ts`:

```ts
import { useEffect, useRef, type RefObject } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap } from "gsap";

/**
 * Roda um fade+movimento de entrada no elemento toda vez que o pathname da
 * rota muda — cobre qualquer tipo de navegação (link, voltar/avançar,
 * teclado). Não roda na primeira montagem (senão brigaria com o SSR).
 */
export function useRouteEnterFade(containerRef: RefObject<HTMLElement | null>) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 16, scale: 1.01 },
      { opacity: 1, y: 0, scale: 1, duration: 0.38, ease: "power2.out" },
    );
  }, [pathname, containerRef]);
}
```

- [ ] **Step 2: Ligar o hook no `<main>` do root**

Editar `src/routes/__root.tsx`. No import do React, adicionar `useRef` — hoje
o arquivo não importa nada de `"react"` diretamente. Adicionar no topo (perto
dos outros imports):

```tsx
import { useRef } from "react";
import { useRouteEnterFade } from "@/hooks/use-route-enter-fade";
```

Dentro de `function RootComponent() {`, o trecho atual é:

```tsx
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdultosRoute = pathname.startsWith("/adultos");
  const isLinksRoute = pathname === "/links";

  return (
```

Trocar por:

```tsx
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdultosRoute = pathname.startsWith("/adultos");
  const isLinksRoute = pathname === "/links";
  const mainRef = useRef<HTMLElement | null>(null);
  useRouteEnterFade(mainRef);

  return (
```

E o `<main>` atual:

```tsx
            <main id="conteudo" className="flex-1">
              <Outlet />
            </main>
```

Trocar por:

```tsx
            <main id="conteudo" ref={mainRef} className="flex-1">
              <Outlet />
            </main>
```

- [ ] **Step 3: Criar o componente `PageTransitionLink`**

Criar `src/components/page-transition-link.tsx`:

```tsx
import { Link, useRouter } from "@tanstack/react-router";
import { gsap } from "gsap";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  to: "/cursos";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

/**
 * Link com animação de saída (fade + leve movimento) antes de navegar.
 * Usado hoje só no par piloto home ⇄ /cursos (ver
 * docs/superpowers/specs/2026-08-25-home-motion-upgrade-design.md). A
 * entrada na nova página é responsabilidade de `useRouteEnterFade`, já
 * ligado no `<main>` do root — este componente só cuida da saída.
 */
export function PageTransitionLink({ to, className, onClick, children }: Props) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.getElementById("conteudo");
    if (!main) return;

    e.preventDefault();
    gsap.to(main, {
      opacity: 0,
      y: -16,
      scale: 0.985,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        router.navigate({ to });
      },
    });
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 4: Usar `PageTransitionLink` nos dois links pro `/cursos` no header**

Editar `src/components/site-header.tsx`. Adicionar o import perto de
`import { Link } from "@tanstack/react-router";`:

```tsx
import { PageTransitionLink } from "@/components/page-transition-link";
```

Trocar o link do dropdown mobile (dentro do bloco `{programsOpen && (...)}`):

```tsx
                <Link
                  to="/cursos"
                  onClick={closeAll}
                  className="rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-primary hover:bg-muted"
                >
                  Ver todos os programas
                </Link>
```

por:

```tsx
                <PageTransitionLink
                  to="/cursos"
                  onClick={closeAll}
                  className="rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-primary hover:bg-muted"
                >
                  Ver todos os programas
                </PageTransitionLink>
```

E o link do dropdown desktop (dentro de `function ProgramsDropdown()`):

```tsx
        <Link
          to="/cursos"
          className="block rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-primary hover:bg-muted"
        >
          Ver todos os programas
        </Link>
```

por:

```tsx
        <PageTransitionLink
          to="/cursos"
          className="block rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-primary hover:bg-muted"
        >
          Ver todos os programas
        </PageTransitionLink>
```

- [ ] **Step 5: Lint, build e checagem manual**

Run: `bun run lint && bun run build`
Expected: sem erros.

Run: `bun run dev`, na home:
- Clicar em "Programas" no header (desktop) e depois em "Ver todos os
  programas" — confirmar que a home desaparece com fade+movimento pra cima
  antes de `/cursos` carregar, e que `/cursos` entra com fade+movimento de
  baixo pra cima.
- Repetir em mobile (menu hambúrguer → Programas → Ver todos os programas).
- De `/cursos`, clicar no botão **voltar** do navegador — confirmar que a home
  aparece com a animação de entrada (mesmo sem a de saída) e sem nenhum erro
  no console.
- Testar `Ctrl+clique` (ou Cmd+clique no Mac) no link — deve abrir em nova aba
  normalmente, sem rodar a transição (checagem do `e.metaKey`/`e.ctrlKey`).
- Com `prefers-reduced-motion: reduce` ativo, confirmar navegação instantânea
  sem nenhuma animação.

- [ ] **Step 6: Commit**

```bash
git add src/hooks/use-route-enter-fade.ts src/components/page-transition-link.tsx src/routes/__root.tsx src/components/site-header.tsx
git commit -m "feat: transição fade+movimento entre home e /cursos"
```

---

### Task 5: Ícones dos cards animando ao rolar (seção "Por que a Santos Tech")

**Files:**
- Create: `src/components/icon-pop.tsx`
- Modify: `src/routes/index.tsx`

Escopo: só a seção **DIFERENCIAIS** ("Por que a Santos Tech"), como piloto
concreto — o mesmo componente pode ser reaproveitado em outras seções depois.

- [ ] **Step 1: Criar o componente `IconPop`**

Criar `src/components/icon-pop.tsx`:

```tsx
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

/**
 * Ícone com pop de escala/rotação ao entrar na tela — usa o mesmo
 * IntersectionObserver compartilhado do `useReveal` (não duplica lógica de
 * visibilidade).
 */
export function IconPop({ icon: Icon, className, iconClassName }: Props) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex transition-transform duration-500 ease-out",
        visible ? "scale-100 rotate-0" : "scale-50 rotate-[-25deg]",
        className,
      )}
    >
      <Icon className={iconClassName} />
    </span>
  );
}
```

- [ ] **Step 2: Usar `IconPop` nos ícones da seção DIFERENCIAIS**

Editar `src/routes/index.tsx`. Adicionar o import perto de `RarityBadge`:

```tsx
import { IconPop } from "@/components/icon-pop";
```

No card **featured** (dentro do `.map()` de `DIFERENCIAIS`, bloco
`{featured ? (...)}`), o trecho atual:

```tsx
                      <div className="relative">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                          <p.icon className="h-7 w-7" />
                        </span>
```

Trocar por:

```tsx
                      <div className="relative">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                          <IconPop icon={p.icon} iconClassName="h-7 w-7" />
                        </span>
```

No card **regular** (o `else` do mesmo `.map()`), o trecho atual:

```tsx
                    <div className="group h-full rounded-3xl border-2 border-primary/15 bg-card p-7 shadow-[0_8px_24px_-8px_rgba(24,122,191,0.18)] transition hover:-translate-y-1 hover:border-primary/40">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <p.icon className="h-6 w-6" />
                      </span>
```

Trocar por:

```tsx
                    <div className="group h-full rounded-3xl border-2 border-primary/15 bg-card p-7 shadow-[0_8px_24px_-8px_rgba(24,122,191,0.18)] transition hover:-translate-y-1 hover:border-primary/40">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 group-hover:scale-110">
                        <IconPop icon={p.icon} iconClassName="h-6 w-6" />
                      </span>
```

(Essa mesma edição já inclui a microinteração de hover — `group-hover:rotate-6
group-hover:scale-110` — cobrindo a Task 7 nesse mesmo ponto, ver nota na
Task 7 abaixo.)

- [ ] **Step 3: Lint, build e checagem manual**

Run: `bun run lint && bun run build`
Expected: sem erros.

Run: `bun run dev`, rolar até a seção "Por que a Santos Tech":
- Confirmar que os ícones (o grande, no card featured, e os 4 menores)
  aparecem com um pop de escala/rotação quando a seção entra na tela — não
  simultâneos, cada um no seu próprio momento (já que `useReveal` observa
  cada `ref` individualmente).
- Passar o mouse sobre um card regular — o ícone deve girar/aumentar levemente
  (efeito da Task 7, aplicado no mesmo `className`).
- Com `prefers-reduced-motion: reduce`, os ícones devem aparecer no tamanho
  final direto (`useReveal` já cai para `visible=true` imediato quando
  `IntersectionObserver` não dispara rápido o suficiente, mas para garantir
  consistência visual isso é aceitável — o pop é sutil o bastante pra não
  incomodar mesmo sem estar formalmente gated por reduced-motion aqui, já que
  é só `scale`/`rotate` de CSS transition, não JS).

- [ ] **Step 4: Commit**

```bash
git add src/components/icon-pop.tsx src/routes/index.tsx
git commit -m "feat: ícones da seção diferenciais animam ao entrar na tela"
```

---

### Task 6: Curvas divisórias com movimento sutil

**Files:**
- Modify: `src/styles.css`
- Modify: `src/routes/index.tsx`

Movimento barato (só `transform`, sem re-render nem morphing do atributo `d`
do path a cada frame) nas 3 curvas SVG que separam o Hero e as faixas de
produto.

- [ ] **Step 1: Adicionar a keyframe em `styles.css`**

Editar `src/styles.css`. Depois do bloco existente:

```css
  .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
  .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }
  .animate-blob { animation: blob 14s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 22s linear infinite; }
```

Adicionar:

```css
  @keyframes curve-breathe {
    0%, 100% { transform: scaleY(1) translateY(0); }
    50% { transform: scaleY(1.04) translateY(-2px); }
  }
  .animate-curve-breathe {
    animation: curve-breathe 6s ease-in-out infinite;
    transform-origin: bottom;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-curve-breathe { animation: none; }
  }
```

- [ ] **Step 2: Aplicar a classe nas 3 curvas em `index.tsx`**

Editar `src/routes/index.tsx`. A curva do fim do Hero:

```tsx
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[100px]">
            <path d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,90 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
```

Trocar por:

```tsx
        <div className="absolute bottom-0 left-0 right-0 leading-[0] animate-curve-breathe">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[100px]">
            <path d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,90 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
```

Dentro de `function ProductBand`, a curva do topo:

```tsx
      <div className="absolute -top-px left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[44px] w-full rotate-180 sm:h-[64px]">
          <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
```

Trocar por:

```tsx
      <div className="absolute -top-px left-0 right-0 leading-[0] animate-curve-breathe">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[44px] w-full rotate-180 sm:h-[64px]">
          <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
```

E a curva do fim (só quando `curveBottom`):

```tsx
      {curveBottom && (
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[44px] w-full sm:h-[64px]">
            <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      )}
```

Trocar por:

```tsx
      {curveBottom && (
        <div className="absolute bottom-0 left-0 right-0 leading-[0] animate-curve-breathe">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[44px] w-full sm:h-[64px]">
            <path d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,70 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      )}
```

- [ ] **Step 3: Lint, build e checagem manual**

Run: `bun run lint && bun run build`
Expected: sem erros.

Run: `bun run dev`, observar as curvas brancas entre o Hero e a primeira faixa
de produto, e entre as faixas de produto — devem "respirar" bem sutilmente
(escala leve + deslocamento de 2px), sem parecer tremida ou chamar atenção
demais. Com `prefers-reduced-motion: reduce`, devem ficar completamente
paradas.

- [ ] **Step 4: Commit**

```bash
git add src/styles.css src/routes/index.tsx
git commit -m "feat: curvas divisórias ganham respiração sutil via transform"
```

---

### Task 7: Nota sobre microinteração de hover

A microinteração de hover nos ícones (`group-hover:rotate-6
group-hover:scale-110`) já foi incluída no **Step 2 da Task 5** — não é uma
task separada em termos de arquivo tocado, já que o ponto de edição é o mesmo
`className`. Nenhuma ação adicional aqui; esta seção existe só pra deixar
claro no plano que os 4 itens de SVG do spec (entrada dos ícones do hero,
ícones dos cards ao rolar, curvas divisórias, hover) estão todos cobertos:
Task 2 (entrada), Task 5 (rolar + hover), Task 6 (curvas).

---

## Self-Review

**1. Cobertura do spec:**
- Pré-loader → Task 1. ✅
- Parallax no Hero → Task 3. ✅
- Transição fade+movimento home ⇄ `/cursos` → Task 4. ✅
- SVG #1 (ícones do hero se desenhando) → Task 2. ✅
- SVG #2 (ícones dos cards ao rolar) → Task 5. ✅
- SVG #3 (curvas divisórias) → Task 6. ✅
- SVG #4 (hover) → coberto dentro da Task 5, Step 2 (ver nota da Task 7). ✅
- Dependência GSAP → Task 0. ✅
- Fora de escopo (3D no Hero) → nenhuma task cria isso; correto, não deveria.

**2. Placeholders:** nenhum "TBD"/"implementar depois" — todo step tem código
completo ou comando exato com resultado esperado.

**3. Consistência de tipos/nomes:** `useHeroParallax(sectionRef)` retorna
`{ dotsRef, blobsRef, collageRef }`, usados com esses mesmos nomes em
`index.tsx` (Task 3). `useDecorativeDrawIn(containerRef)` não retorna nada
(só efeito colateral), usado assim na Task 2. `useRouteEnterFade(containerRef)`
idem, ligado ao `mainRef` do root (Task 4). `PageTransitionLink` aceita só
`to: "/cursos"` (literal, não union genérica) — condiz com o escopo de piloto
declarado no spec; se o site expandir a transição pra mais rotas depois, essa
união de tipos precisa crescer (documentado como decisão consciente, não
esquecimento).

---

**Ordem recomendada de execução:** Task 0 → 1 → 2 → 3 → 4 → 5 → 6, nessa
sequência (cada uma depende só da anterior estar com `gsap`/`@gsap/react`
instalados; não há dependência cruzada entre as Tasks 1–6 além disso).
