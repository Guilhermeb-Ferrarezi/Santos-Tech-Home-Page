# Pacote de motion na home (pré-loader, parallax, transição de página, SVG)

**Data:** 2026-08-25
**Página alvo:** `/` (`src/routes/index.tsx`) como piloto — não o site inteiro
**Status:** design aprovado (pré-loader e transição validados em mockups navegáveis;
tentativa de elemento 3D no Hero foi explorada à parte e abandonada — ver "Fora de escopo")

## Objetivo

Deixar a home visualmente mais sofisticada, na linha de sites de agência (GSAP.com):
pré-loader com o logo real se desenhando, parallax no Hero, transição animada ao navegar
pra `/cursos`, e pontos de animação SVG espalhados pela página. Piloto restrito à home
antes de decidir se espalha pro site inteiro (~80 rotas).

## Contexto técnico já existente (não é do zero)

O site já tem uma base de motion própria e cuidada, sem dependências:
- `src/components/reveal.tsx` — fade + `translateY` via `IntersectionObserver`
  (`src/hooks/use-reveal.ts`).
- `src/components/scroll-stage.tsx` — scroll-scrub estilo Apple, com
  `useScrollScrub` (`src/hooks/use-scroll-scrub.ts`) rodando só enquanto a seção
  está visível, `prefers-reduced-motion` tratado, estado estático no SSR.

Duas restrições não-negociáveis herdadas do projeto (`CLAUDE.md`):
- **Bot do WhatsApp** (`santos-tech-infra/apps/bot-go`) lê rotas via `WebFetch`
  **sem executar JS**, usando `public/sitemap.xml` como lista de páginas válidas.
  Todo o motion deste pacote é *client-side enhancement* por cima do HTML já
  renderizado no servidor — nada pode esconder ou atrasar o conteúdo real.
- `prefers-reduced-motion: reduce` deve ser respeitado em todos os itens, com
  fallback estático (mesmo padrão de `Reveal`/`ScrollStage`).

## Dependência nova: GSAP

Hoje o site não usa nenhuma lib de animação. Vamos adicionar `gsap` + `@gsap/react`
(hook `useGSAP` pro lifecycle em React), usados **só onde compensam**:
parallax do Hero (`ScrollTrigger`) e a orquestração da transição de página.
Microinterações simples (hover, entrada de ícone) continuam hand-rolled/CSS,
consistente com o que já existe.

GSAP é 100% gratuito desde 2025 (Webflow comprou e liberou os plugins que eram
pagos, incluindo `ScrollTrigger`) — sem pegadinha de licença. Ainda assim é peso de
bundle novo (~30–70kB) numa base que hoje não tem nenhuma lib de animação — troca
consciente, não gratuita.

---

## 1. Pré-loader

Componente novo `src/components/preloader.tsx`, montado **só na rota `/`**, toda
vez que a home carrega (não é gated por `sessionStorage` — decisão do usuário).

- Usa o **logo vetorial real** da marca (arquivo fornecido pelo usuário, duas
  camadas `fill-rule: evenodd` — silhueta + facetas de detalhe; é uma ilustração
  geométrica complexa, não uma linha simples).
- Cores **como no arquivo original**: silhueta branca + detalhe quase-preto
  (`#1A1515`), sobre fundo azul-marinho escuro. Não recolorir pro azul/verde da
  marca (testado em mockup e revertido a pedido do usuário).
- Técnica: cada camada (`<path>`) tem o contorno traçado via
  `path.getTotalLength()` + `stroke-dasharray`/`stroke-dashoffset` animados — essa
  técnica funciona em qualquer path, mesmo complexo como esse (não depende de ser
  uma linha única). Depois do traço, crossfade pro preenchimento (`fill-opacity`).
- Traço **grosso** (~4–4.5px, `stroke-linejoin: round`) e **rápido**: ~0.6s de
  traço + preenchimento no total (testado ~1.5s inicialmente e achado lento).
- Overlay cobre a viewport inteira e bloqueia interação (`pointer-events`) até
  terminar; depois remove-se (unmount), revelando o conteúdo real por baixo.
- Timeline **fixa** (não é progresso real de carregamento de assets) — decorativo.

Mockup de 4 estilos + variações de cor/espessura foi validado em Artifact antes de
fechar nessa direção (ver histórico da conversa).

## 2. Parallax no Hero

Escopo: **só a primeira dobra** (`<section>` do Hero em `index.tsx`), não nas
faixas de produto nem no resto da página.

- **Scroll-linked**, não mouse-linked (decisão do usuário — funciona igual em
  mobile/touch, onde "mouse" não existe).
- Reaproveita o hook `useScrollScrub` (já existe, já é rAF-throttled e só roda
  com a seção visível) em vez de um novo listener de scroll.
- Camadas com velocidades diferentes (profundidade clássica):
  - fundo pontilhado (`radial-gradient` de bolinhas) — mais devagar;
  - os dois blobs desfocados (`animate-blob`) — velocidade intermediária;
  - `HeroCollage` (a colagem de fotos) — mais rápido, em primeiro plano.
- Implementado com GSAP `ScrollTrigger` (`scrub: true`) já que essa parte se
  beneficia da ergonomia de timeline/scrub do GSAP.

## 3. Transição entre páginas

Piloto: **home ⇄ `/cursos`** (não o site inteiro ainda).

Estilo escolhido — **fade + movimento** (comparado lado a lado com "cortina
colorida" e "cortina + logo" em mockup navegável; fade venceu):
- Página atual: fade-out + leve `translateY`/`scale` pra cima (~300ms).
- Nova página: entra de baixo com fade-in + `translateY`/`scale` (~380ms),
  `cubic-bezier` tipo "ease-out" suave.

**Risco real, sinalizado com antecedência:** TanStack Router, ao contrário do
Next.js, **não tem hook nativo de exit/enter transition**. Vai precisar de um
hook próprio (`src/hooks/use-page-transition.ts` ou similar) que:
1. Intercepta o clique nos `Link`/navegação programática pro par piloto;
2. Roda a animação de saída via GSAP;
3. Só então deixa o router navegar (`router.navigate`);
4. Anima a entrada no novo conteúdo montado.

Casos a testar com atenção (mais frágil que os outros 3 itens do pacote):
back/forward do navegador, navegação por teclado, scroll-restoration do router.

## 4. Animações SVG (4 pontos)

1. **Ícones decorativos do Hero** (`src/components/decorative-elements.tsx`):
   traço se desenhando na entrada (mesma técnica do pré-loader — `getTotalLength`
   + `stroke-dasharray`), e só depois entra o `animate-float-*` contínuo que já
   existe hoje.
2. **Ícones dos cards ao rolar** (seções "Por que a Santos Tech", "Como
   funciona", diferenciais etc.): pequena animação (scale/rotate) disparada
   junto do `Reveal` já existente — reaproveita a detecção de visibilidade do
   `useReveal`, não duplica `IntersectionObserver`.
3. **Curvas divisórias** (os `<svg><path>` que separam as faixas coloridas dos
   produtos): movimento sutil e **barato** — "respiração" leve via `transform`
   (`scaleY`/`translateY` pequeno), **não** morphing do atributo `d` do path a
   cada frame (caro, e o ganho visual numa curva decorativa não compensa o
   custo).
4. **Hover nos ícones**: **CSS puro** (`:hover`/`group-hover`, como o resto do
   site já faz), sem GSAP — não precisa do peso de uma lib pra isso.

---

## Fora de escopo

- **Elemento 3D no Hero** (foguete ou fachada da escola): explorado à parte via
  Blender MCP, com validação por painel de 5 subagents julgando cada versão
  (diretor de arte, crítico técnico 3D, consultor de marca, persona de pai/mãe,
  cético). 4 rodadas, nota nunca passou de ~5/10 — a causa raiz (faltava um
  elemento concreto reconhecível ligando a peça a "uma criança criou isso") nunca
  foi resolvida por ajustes de cenário/luz/cor. Usuário decidiu parar essa linha;
  o Hero **não** ganha elemento 3D neste pacote.
- Não aplica nada disso no site inteiro ainda — só na home, como piloto.
- Não adiciona GSAP em microinterações simples (hover, fade de card) onde CSS já
  resolve.

## Arquivos

- **Novo:** `src/components/preloader.tsx`
- **Novo:** `src/hooks/use-page-transition.ts` (ou nome equivalente)
- **Editado:** `src/routes/index.tsx` — monta `Preloader`, aplica parallax no
  Hero, aplica animação de entrada nos ícones do `DecorativeElements`.
- **Editado:** `src/components/decorative-elements.tsx` — suporte a entrada
  animada (traço).
- **Editado:** seções com ícones em card (dentro de `index.tsx`) — liga a
  microanimação ao `Reveal`/`useReveal` existente.
- **Editado:** `src/components/scroll-stage.tsx` ou onde ficam as curvas
  divisórias — adiciona a "respiração" sutil via `transform`.
- **Editado:** `package.json` — adiciona `gsap`, `@gsap/react`.
- **Inalterado:** `public/sitemap.xml` (nenhuma rota nova).

## Verificação

- `bun run lint` e `bun run build` passam limpos.
- Testar com `prefers-reduced-motion` ativo: pré-loader não bloqueia, parallax
  vira estático, ícones aparecem direto (sem traço), transição de página vira
  navegação normal sem animação.
- Conferir que o conteúdo da home e de `/cursos` aparece com JS desabilitado
  (SSR intacto) — testar especificamente que o bot de WhatsApp (via `curl`/
  `WebFetch` simulando sem JS) ainda lê o conteúdo normalmente.
- Testar navegação home ⇄ `/cursos` com botão voltar/avançar do navegador e
  navegação por teclado (Tab + Enter no link).
- Testar no mobile real (parallax por touch-scroll, sem "mouse").
