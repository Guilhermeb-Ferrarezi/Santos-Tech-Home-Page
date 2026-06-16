# Seção com scroll interativo na home (estilo "D2" — device + texto ao redor)

**Data:** 2026-06-15
**Página alvo:** `/` (`src/routes/index.tsx`)
**Status:** design aprovado (efeito validado em protótipo navegável)

## Objetivo

Adicionar à home um efeito de **scroll-driven animation** (estilo Apple): uma
seção que "prende" na tela enquanto o usuário rola e, conforme a rolagem avança,
um celular sobe no centro com a foto se montando dentro dele e quatro destaques
da escola surgem em sequência ao redor.

O efeito foi escolhido e refinado pelo usuário num protótipo navegável. Esta é a
variação **D2 — device com texto ao redor**.

## Onde entra

Nova `<section>` em `src/routes/index.tsx`, **entre o Hero (termina ~linha 407)
e a barra de estatísticas (STATS BAR, ~linha 409)**. É a primeira coisa depois da
primeira dobra.

**Não cria rota nova.** É uma seção dentro de `/`. Portanto `public/sitemap.xml`
**não muda**.

## Componente

Componente novo e isolado: `src/components/scroll-stage.tsx`.

API por props (nada hardcoded — a home passa o conteúdo):

```ts
type Feature = {
  icon: React.ComponentType<{ className?: string }>; // ícone lucide-react
  title: string;
  desc: string;
};

type ScrollStageProps = {
  heading: React.ReactNode;     // título da seção
  features: Feature[];          // exatamente 4 (2 por lado no desktop)
  photo: { src: string; alt: string };
  heightVh?: number;            // altura do palco; default 340
};
```

A home importa `ScrollStage` e os ícones, montando o array de features.

## Conteúdo (aprovado)

- **Título:** "Uma escola pra formar criadores de tecnologia"
- **Destaques** (emoji → ícone `lucide-react`):
  1. `Brain` — **Lógica desde cedo** — Pensamento computacional dos 5 aos 14 anos, na medida certa pra cada idade.
  2. `Bot` — **Robótica, games e IA** — Projetos reais que ganham vida — do bloco ao código de verdade.
  3. `Users` — **Professores presentes** — Turmas pequenas e acompanhamento de perto, aula após aula.
  4. `Smartphone` — **Portal pra família** — O pai acompanha notas, presença e projetos na palma da mão.

Ordem de aparição no scroll: 1 (esq) → 2 (dir) → 3 (esq) → 4 (dir).

## Foto

`src/assets/marina-roblox.png` (aluna no Roblox; bom no formato retrato do device).

O original é grande (~8 MB). Gerar versão otimizada `.webp` (largura ~700px,
qualidade ~80) em `src/assets/optimized/marina-roblox-700.webp` e importar essa.
Reaproveitar o padrão de `scripts/optimize-images.mjs` se aplicável.

## Mecânica da animação

Calculada em JS a partir do progresso da seção (`0..1`):

```
progresso = clamp( -rect.top / (rect.height - innerHeight) )
```

Fases ao longo do progresso:
- **0 → ~0.32:** título aparece; device entra (`scale` + `translateY`); a foto
  sobe de baixo pra dentro da tela (`translateY 100% → 0`); o brilho azul atrás
  cresce e ganha opacidade. O título some ao fim desta fase.
- **~0.34 → ~0.92:** os 4 destaques entram em sequência, cada um numa janela de
  ~0.15. Desktop: deslizam das laterais (`translateX`) e **acumulam** visíveis.
  Mobile: aparecem **um de cada vez** embaixo do device (fade-in/out, sem
  sobrepor).

Só anima `transform` e `opacity` (composições GPU). Sem `width`/`top`/`left`
animados.

### Layout responsivo
- **Desktop (>820px):** grid `texto | device | texto`. Dois destaques por lado.
- **Mobile (≤820px):** device no topo; destaques aparecem **um por vez**,
  centralizados abaixo do device. (Corrige o bug de sobreposição visto na 1ª
  versão mobile.)

## Performance

- O loop `requestAnimationFrame` **só roda quando a seção está visível**, ligado/
  desligado por `IntersectionObserver`. Fora da viewport, não consome CPU.
- Listeners de scroll, se usados, são `{ passive: true }`.
- `will-change: transform` apenas nos elementos animados.

## Acessibilidade

- Respeitar `prefers-reduced-motion: reduce`: nesse caso a seção renderiza o
  **estado final estático** (device com a foto já montada, os 4 destaques
  visíveis) e a altura do palco colapsa para uma seção normal (sem 340vh de
  scroll). Nenhum movimento ligado ao scroll.
- Imagens com `alt` significativo. Texto é HTML real (não dentro de canvas).

## SSR / SEO

- TanStack Start renderiza no servidor. O markup sai já no **estado final**
  (textos e foto visíveis); o JS apenas "esconde e re-anima" no cliente após
  montar. Assim, sem JS, o conteúdo aparece normalmente — Google e o bot de
  WhatsApp leem tudo.
- Acesso a `window`/`document` apenas dentro de `useEffect` (client-only).

## Identidade visual

- Azuis institucionais (`#187ABF` / tokens `--primary`), Poppins, cantos
  arredondados como no resto da home. Reaproveitar classes utilitárias da home
  (`text-st-blue-dark`, gradientes) quando fizer sentido. Fundo da seção pode ser
  escuro (radial azul) pra dar contraste e destacar o device, como no protótipo.

## Arquivos

- **Novo:** `src/components/scroll-stage.tsx`
- **Novo:** `src/assets/optimized/marina-roblox-700.webp` (gerado)
- **Editado:** `src/routes/index.tsx` (importa e renderiza `ScrollStage` entre
  Hero e STATS BAR)
- **Inalterado:** `public/sitemap.xml` (não há rota nova)

## Fora de escopo

- Nenhuma rota nova.
- Não trocar o Hero nem outras seções.
- Não adicionar biblioteca de animação (Framer Motion / GSAP).

## Verificação

- `bun run lint` e `bun run build` passam limpos.
- Testar manualmente no desktop e no mobile (largura ≤820px) — incluindo o tunnel
  Cloudflare pra abrir no celular real.
- Verificar com `prefers-reduced-motion` ativo (estado estático, sem palco alto).
- Conferir que o conteúdo aparece com JS desabilitado (estado final no HTML).
