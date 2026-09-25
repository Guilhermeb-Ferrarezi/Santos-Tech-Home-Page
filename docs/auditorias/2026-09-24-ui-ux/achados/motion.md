# Motion e interação — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#67) · nota da dimensão **4.5/10** · **16 achados** (🔴 1 · 🟠 2 · 🟡 5 · ⚪ 8)

O site tem movimento caprichado, mas hoje ele atrasa, esconde ou atrapalha o conteúdo mais do que ajuda a vender, sobretudo no celular.

- **Animação que pode deixar a página vazia.** Uma transição entre páginas e o efeito de "surgir ao rolar" começam com o conteúdo invisível. Se algo falha, seja um clique no link da própria página ou o JavaScript demorando num 3G, o pai vê uma tela em branco e desiste.
- **Espera imposta antes do conteúdo.** Tem abertura de marca em toda visita à home, rolagem "presa" de umas 6 telas e rolagem suavizada com atraso. É tempo de tela antes do botão de agendar aula, justamente onde a conversão acontece.
- **Efeitos pensados para mouse e aplicados ao toque.** A rolagem horizontal dos depoimentos, os destaques que passam ao rolar e o sequestro do scroll nativo fazem o polegar pular a proposta de valor e a prova social.
- **Excesso no botão principal.** O CTA acumula cinco efeitos (pulso, brilho, ímã, aumento, aparecer). No celular, onde está a maioria do público, falta o que importa: resposta ao toque.
- **Movimento sem fim e sem pausa.** O anel do WhatsApp e a troca de fotos do topo rodam para sempre. Isso distrai a leitura e descumpre a regra de acessibilidade que pede um jeito de pausar.
- **Falta de padrão.** Tempos e curvas mudam de um componente para outro. /particular já resolveu parte disso e o resto do site não acompanhou.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F032`](#f032) | 🔴 | Clicar em "Ver todos os programas" já em /cursos deixa a página em branco (main fica opacity 0) | `/cursos (link presente no header desktop e no menu mobile de todas as rotas)`, `/ → /cursos (saída)`, `todas as rotas fora de /particular (entrada)` | [src/components/page-transition-link.tsx:31](../../../../src/components/page-transition-link.tsx#L31) | trivial |
| [`F034`](#f034) | 🟠 | Reveal/IconPop nascem com opacity:0 no HTML do servidor — conteúdo invisível até hidratar (ou para sempre sem JS) | `todas as rotas (Reveal envolve praticamente todos os blocos: home, institucional, /cursos/*, 9 páginas infantis, /particular e as 52 páginas de curso)`, `/cursos/*` +5 | [src/hooks/use-reveal.ts:42](../../../../src/hooks/use-reveal.ts#L42) | pequeno |
| [`F036`](#f036) | 🟠 | Preloader bloqueia a home por ~1,4s em TODA montagem, sem cancelar nem lembrar a sessão | `/` | [src/components/preloader.tsx:48](../../../../src/components/preloader.tsx#L48) | pequeno |
| [`F038`](#f038) | 🟡 | ScrollStage no celular: 340vh de scroll preso e cada destaque legível por ~33vh; h-screen ignora a barra do navegador | `/` | [src/components/scroll-stage.tsx:117](../../../../src/components/scroll-stage.tsx#L117) | pequeno |
| [`F039`](#f039) | 🟡 | Depoimentos: 300vh de scroll-jack horizontal no mobile torna a prova social difícil de ler | `/` | [src/components/testimonials.tsx:218](../../../../src/components/testimonials.tsx#L218) | pequeno |
| [`F040`](#f040) | 🟡 | FAB do WhatsApp: dois anéis pulsando para sempre em todas as páginas, sem pausa nem reduced-motion | `todas as rotas exceto /particular/* e /links`, `/` +4 | [src/styles.css:243](../../../../src/styles.css#L243) | trivial |
| [`F041`](#f041) | 🟡 | Colagem do herói troca fotos a cada 5s sem controle de pausa e remonta <Img priority> em loop | `/` | [src/components/hero-collage.tsx:73](../../../../src/components/hero-collage.tsx#L73) | pequeno |
| [`F042`](#f042) | 🟡 | ScrollSmoother com smooth 1.2s e normalizeScroll sequestra o scroll do site inteiro, inclusive no touch | `todas as rotas exceto /particular/*` | [src/hooks/use-smooth-scroll.ts:26](../../../../src/hooks/use-smooth-scroll.ts#L26) | pequeno |
| [`F043`](#f043) | ⚪ | `transition` do Tailwind no mesmo elemento que o GSAP anima transform (MagneticButton/TiltCard): dupla interpolação | `/` | [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421) | trivial |
| [`F044`](#f044) | ⚪ | MagneticButton no CTA principal: alvo que se move sob o cursor + elastic bounce + um tween por mousemove | `/` | [src/components/magnetic-button.tsx:35](../../../../src/components/magnetic-button.tsx#L35) | trivial |
| [`F045`](#f045) | ⚪ | `animate-cta-pulse` anima box-shadow infinitamente no CTA, empilhado com glow, hover-scale, magnetic e reveal | `/` | [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421) | trivial |
| [`F048`](#f048) | ⚪ | HoverWashCard: efeito de hover com 700ms via clip-path — dez vezes o tempo de uma resposta de hover | `/cursos/create`, `/cursos/academies`, `9 páginas de curso infantil (ModuleCard)` | [src/components/hover-wash-card.tsx:79](../../../../src/components/hover-wash-card.tsx#L79) | trivial |
| [`F049`](#f049) | ⚪ | CTAs da home e das páginas infantis não dão feedback de press (`active:`); só /particular tem | `/`, `/cursos/*`, `9 páginas de curso infantil` | [src/routes/index.tsx:265](../../../../src/routes/index.tsx#L265) | pequeno |
| [`F051`](#f051) | ⚪ | Cookie banner: `hover:scale` só em Aceitar/Salvar, não em Gerenciar/Recusar — assimetria que o próprio arquivo veta | `todas as rotas (primeira visita e link Cookies do rodapé)` | [src/components/cookie-consent.tsx:305](../../../../src/components/cookie-consent.tsx#L305) | trivial |
| [`F052`](#f052) | ⚪ | Sidebar /particular: ease-in-out em width/margin/padding de todas as seções e drawer mobile sem fade de overlay | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/routes/particular.tsx:309](../../../../src/routes/particular.tsx#L309) | pequeno |
| [`F055`](#f055) | ⚪ | `transition-all` em 15 pontos do código (sistêmico) | `/cursos/*`, `9 páginas de curso infantil` +3 | [src/components/course-skins/variants/ide-ads.tsx:90](../../../../src/components/course-skins/variants/ide-ads.tsx#L90) | pequeno |

<a id="f032"></a>

## F032 · 🔴 Clicar em "Ver todos os programas" já em /cursos deixa a página em branco (main fica opacity 0)

- **Rotas:** `/cursos (link presente no header desktop e no menu mobile de todas as rotas)`, `/ → /cursos (saída)`, `todas as rotas fora de /particular (entrada)`
- **Onde:** [src/components/page-transition-link.tsx:31](../../../../src/components/page-transition-link.tsx#L31)
- **Evidência:** gsap.to(main, { opacity: 0, y: -16, scale: 0.985, duration: 0.3, ease: "power2.in", onComplete: () => { router.navigate({ to }); } });  // e em use-route-enter-fade.ts:14-29 o fade de entrada só roda em useEffect([pathname]) — `router.navigate({to:'/cursos'})` estando em /cursos não muda o pathname.
- **Problema:** A saída esconde o <main> inteiro (opacity 0) e delega a volta ao `useRouteEnterFade`, que só dispara quando o pathname MUDA. Se o visitante já está em /cursos (ou /cursos#tecnologia) e clica em "Ver todos os programas" no dropdown Programas ou no menu mobile, o main desaparece e nunca volta — página branca até recarregar. É o link de navegação principal para a família de programas.
- **Correção sugerida:** Logo após o `if (!main) return;` do handleClick: `if (router.state.location.pathname === to) return;`. Como rede de segurança, no onComplete: `router.navigate({ to }); setTimeout(() => gsap.set(main, { clearProps: "opacity,transform" }), 600);`.
- **Esforço:** trivial · **Severidade:** Crítica
- **Verificação:** confirmado: page-transition-link.tsx:31 zera a opacidade do main; use-route-enter-fade.ts só roda quando o pathname muda (`[pathname]`). Em /cursos, 'Ver todos os programas' (site-header.tsx:176 e :416) navega para /cursos, que tem o mesmo pathname, e a página fica em branco. Não reproduzido no navegador, mas a lógica está clara no código. · ✅ **Conferido ao vivo pelo CTO:** em /cursos, abrir Programas → "Ver todos os programas" deixa o <main> com opacity 0 (página em branco), medido via getComputedStyle após o clique.

<a id="f034"></a>

## F034 · 🟠 Reveal/IconPop nascem com opacity:0 no HTML do servidor — conteúdo invisível até hidratar (ou para sempre sem JS)

- **Rotas:** `todas as rotas (Reveal envolve praticamente todos os blocos: home, institucional, /cursos/*, 9 páginas infantis, /particular e as 52 páginas de curso)`, `/cursos/*`, `/sobre`, `/contato`, `/particular`, `todas as 52 páginas de /particular/cursos/*`, `9 páginas de curso infantil`
- **Onde:** [src/hooks/use-reveal.ts:42](../../../../src/hooks/use-reveal.ts#L42)
- **Evidência:** className={cn("transition-[transform,opacity] duration-700 ease-out will-change-transform", className)} style={{ transitionDelay: `${delay}ms`, ... }}  // course-page.tsx:239 `<Reveal delay={360}>` no CTA, :260 `delay={400} y={40}` na imagem do herói, :294 `delay={520}`; particular-course-page.tsx:262 `delay={300}`, :277 `delay={420}`; particular.index.tsx:233 `delay={600}`; hero-collage.tsx:26-29 delays 400-760.
- **Problema:** O HTML que sai do SSR carrega `style="opacity:0;transform:translateY(24px)"` em cada bloco, inclusive o H1 e o CTA do herói. Em 3G/celular fraco a página chega "pronta" mas vazia até o bundle hidratar; se o JS falhar, fica vazia. Também empurra o LCP: o maior elemento visível só existe depois da hidratação + IntersectionObserver + 700ms. O comentário do hook ("SSR-safe") descreve um comportamento que o código não entrega.
- **Correção sugerida:** Visível por padrão no SSR: estado inicial `visible=true`; num useLayoutEffect, se houver IntersectionObserver e o elemento estiver abaixo da dobra (`el.getBoundingClientRect().top > innerHeight`), setar false e observar. Herói e CTA nunca nascem ocultos. Corrigir o comentário 'SSR-safe' do hook.
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: use-reveal.ts:42 `useState(false)` → Reveal (reveal.tsx:17-18) emite opacity:0/translateY no SSR. HTML de produção da home tem 70 ocorrências de `opacity:0`. O comentário do hook promete SSR-safe, o que não acontece.

<a id="f036"></a>

## F036 · 🟠 Preloader bloqueia a home por ~1,4s em TODA montagem, sem cancelar nem lembrar a sessão

- **Rotas:** `/`
- **Onde:** [src/components/preloader.tsx:48](../../../../src/components/preloader.tsx#L48)
- **Evidência:** const tl = gsap.timeline({ onComplete: () => { setHidden(true); markPreloaderDone(); setTimeout(() => setMounted(false), 300); } }); tl.to(base, { strokeDashoffset: 0, duration: 0.62, ... }).to(detail, {...}, 0.06).to([base, detail], { fillOpacity: 1, duration: 0.22 }, 0.6).to({}, { duration: 0.25 });  // l.17: "Roda toda vez que a home monta. Bloqueia interação até sumir."  l.71: `fixed inset-0 z-[200] ... bg-[#04325A]`
- **Problema:** ~1,07s de timeline + 0,3s de fade = ~1,4s de overlay opaco `z-[200]` sobre um HTML que já chegou pronto do servidor — não pré-carrega nada, é só assinatura de marca. Repete a cada volta para a home (clicar no logo, botão voltar, link "Início"), sem clique para pular e sem `sessionStorage`. HIG Motion: "Let people cancel motion… especially if they have to experience the animation more than once". Para pais no celular, é 1,4s de tela azul antes do CTA em cada visita, e o próprio cookie banner espera por ele (preloader-signal.ts).
- **Correção sugerida:** Opção preferida: remover <Preloader /> de src/routes/index.tsx:374 (e o sinal em preloader-signal.ts). Se a marca exigir manter: iniciar `useState(false)` (nada no SSR), no useLayoutEffect só montar se `!sessionStorage.getItem('st:preloader')` (try/catch) e gravar a flag; total ≤700ms (sem `.to({}, {duration:0.25})`); `pointer-events-none` no overlay e onClick/onKeyDown chamando `tl.progress(1)`.
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: Pior que o descrito: mounted inicia true (l.21), então o overlay opaco sai no HTML do SSR — confirmado no HTML de produção (`fixed inset-0 z-[200] ... bg-[#04325A] ... opacity-100`). Tela azul da primeira pintura até hidratar + ~1,4s, a cada montagem da home; sem JS fica azul para sempre.

<a id="f038"></a>

## F038 · 🟡 ScrollStage no celular: 340vh de scroll preso e cada destaque legível por ~33vh; h-screen ignora a barra do navegador

- **Rotas:** `/`
- **Onde:** [src/components/scroll-stage.tsx:117](../../../../src/components/scroll-stage.tsx#L117)
- **Evidência:** const start = 0.34; const seg = 0.15; const activeIdx = mobile ? Math.floor((p - start) / seg) : -1; ... const fade = 0.18; const op = clamp(local / fade) * clamp((1 - local) / fade);  // l.71 `heightVh = 340`; l.207 `<div ref={pinRef} className="flex h-screen ...">`; l.228 destaques em `max-[820px]:absolute max-[820px]:bottom-[8vh]`
- **Problema:** No mobile a seção ocupa 3,4 telas de rolagem e mostra UM destaque por vez: cada um vive em 15% do progresso (~51vh de scroll) e só está em opacidade plena entre 18% e 82% desse trecho (~33vh). Uma rolada de polegar comum (60-100% da tela) pula um destaque inteiro — o pai lê metade da proposta de valor, ou nada. Entre p=0,24 e 0,34 (~34vh) não há texto nenhum, só o celular crescendo. Somado aos 300vh dos depoimentos, a home tem ~640vh de scroll "preso" (~5.200px num iPhone) antes dos programas. `h-screen` (100vh) em iOS/Chrome Android inclui a área atrás da barra de URL: os destaques em `bottom-[8vh]` podem ficar sob a barra — e com `normalizeScroll:true` a barra nunca recolhe.
- **Correção sugerida:** No useLayoutEffect (l.85-88) ativar o scrub só acima de 820px: `if (!reduce && window.matchMedia('(min-width: 821px)').matches) setEnhanced(true)`; no mobile fica o layout estático (l.166-192), que já mostra os 4 destaques em grade. Se o scrub for mantido no mobile, trocar `h-screen` por `h-dvh` na l.207.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Código confere (l.117-131, h-screen l.207, heightVh=340 l.71, normalizeScroll no use-smooth-scroll.ts:31). Mas a rolagem presa é de 240vh (340-100), não 340vh; cada destaque dura ~36vh. Problema real de ritmo no mobile, mas não bloqueia tarefa: severidade média. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f039"></a>

## F039 · 🟡 Depoimentos: 300vh de scroll-jack horizontal no mobile torna a prova social difícil de ler

- **Rotas:** `/`
- **Onde:** [src/components/testimonials.tsx:218](../../../../src/components/testimonials.tsx#L218)
- **Evidência:** <div ref={rootRef} className="relative" style={{ height: "300vh" }}> <div ref={pinRef} className="flex h-screen flex-col justify-center overflow-hidden bg-white"> ... track.style.transform = `translate3d(${(-p * distRef.current).toFixed(1)}px,0,0)`  // l.151: ativa em qualquer largura sem reduced-motion; l.167 mapeia 200vh de scroll vertical em ~2.900px horizontais (9 cards × 300px + gaps).
- **Problema:** No celular, 9 avaliações de 5 linhas deslizam lateralmente ~1,4px por pixel rolado enquanto a seção fica presa por 3 telas. Para reler a avaliação nº 6 o usuário precisa achar a posição vertical certa; não dá para arrastar o dedo na horizontal (gesto natural para cards). Depoimentos são a prova social da decisão de matrícula — HIG: "avoid adding motion that makes people wait"; STANDARDS: scroll-driven só quando há direção espacial clara. O fallback CSS (l.193-212) já existe e é melhor no touch.
- **Correção sugerida:** Ativar o pin só em `matchMedia('(min-width:1024px) and (pointer:fine)')` além de não-reduce (linha 150). No fallback, trocar `animate-marquee` (que também fere WCAG 2.2.2, movimento >5s sem pausa) por `<ul className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-4 pb-4 [scrollbar-width:none]">` com `snap-start` nos `<li>` e sem duplicar REVIEWS.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: 300vh + pin ativo em qualquer largura sem reduced-motion (testimonials.tsx:149-151, 218). Scroll-jack no celular atrapalha, mas o conteúdo continua acessível rolando; média. O fallback marquee atual também é problemático.

<a id="f040"></a>

## F040 · 🟡 FAB do WhatsApp: dois anéis pulsando para sempre em todas as páginas, sem pausa nem reduced-motion

- **Rotas:** `todas as rotas exceto /particular/* e /links`, `/`, `/cursos`, `/sobre`, `/contato`, `/cursos/*`
- **Onde:** [src/styles.css:243](../../../../src/styles.css#L243)
- **Evidência:** index.tsx:414-421 `MagneticButton … glow-green animate-cta-pulse` (styles.css:171-177 pulso infinito 2,2s); whatsapp-fab.tsx:33-47 dois `animate-pulse-ring` infinitos; ambos abrem WHATSAPP. routes/home/desktop.fold.png: CTA verde à esquerda (y≈676) e FAB verde pulsando à direita (y≈845). No mobile o FAB cobre texto: routes/contato/mobile.full.png ('Ribeirão Pre…' sob o FAB), routes/cursos__create__8-9-anos/mobile.seg08.png ('programar' cortado).
- **Problema:** Um elemento fixo no canto, com dois anéis crescendo até 1,75× em ciclo contínuo, compete com o conteúdo em toda a leitura do site (§6: "animação serve a leitura, não a si mesma"; §11: "muitos efeitos ao mesmo tempo"). Frequência: é visto 100% do tempo — pela tabela de frequência, deveria ter o mínimo de motion. WCAG 2.2.2: movimento automático >5s em paralelo ao conteúdo precisa de mecanismo de pausa; aqui não há.
- **Correção sugerida:** styles.css:243 → `.animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0,0.2,0.8,1) 3; }` e adicionar `@media (prefers-reduced-motion: reduce) { .animate-pulse-ring { animation: none; opacity: 0; } }`. Em whatsapp-fab.tsx:40-45 remover o segundo anel.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: styles.css:243 pulse-ring `infinite` e sem regra reduced-motion (todas as outras animações têm, ex. l.201, 213, 225). whatsapp-fab.tsx:35-45 dois anéis. O cta-pulse citado da home já tem pausa no hover e reduced-motion (l.200-203).

<a id="f041"></a>

## F041 · 🟡 Colagem do herói troca fotos a cada 5s sem controle de pausa e remonta <Img priority> em loop

- **Rotas:** `/`
- **Onde:** [src/components/hero-collage.tsx:73](../../../../src/components/hero-collage.tsx#L73)
- **Evidência:** const id = setInterval(() => setOffset((o) => (o + 1) % POOL.length), 5000);  // l.55-56: cada troca monta `<div className="crossfade-in"><Img name={l.name} alt={l.alt} priority .../>` → img.tsx:53-55 `loading=eager`, `decoding=sync`, `fetchPriority=high`; l.78 `hidden lg:block` (display:none, mas o <img> continua no DOM e é baixado).
- **Problema:** Quatro quadros trocando de foto em ciclo infinito (1,4s de crossfade a cada 5s) é conteúdo auto-atualizável sem botão de pausa (WCAG 2.2.2, nível A) — só quem já tem reduced-motion escapa. Cada troca cria uma camada nova com `priority` (fetchpriority=high + decoding=sync), disputando prioridade de rede com o LCP e bloqueando decodificação na thread principal a cada 5s; no celular a colagem está `display:none` mas o DOM é o mesmo, então as 8 fotos são baixadas sem nunca aparecer.
- **Correção sugerida:** (1) Em CrossfadeImage passar priority só na camada inicial (i === 0 && l.id === 0); nas outras, loading="lazy" decoding="async". (2) No useEffect, só iniciar o setInterval se matchMedia('(min-width:1024px)').matches e pausar quando document.hidden. (3) Para o WCAG 2.2.2, parar a rotação depois de 3 ciclos (ex.: clearInterval quando o contador passar de 12).
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: hero-collage.tsx:56 monta <Img priority> a cada troca (img.tsx: eager/sync/fetchPriority high). l.73: o intervalo roda mesmo no mobile, onde l.78 esconde a colagem com display:none; imagem eager é baixada mesmo escondida. Não há botão de pausa, só o prefers-reduced-motion (l.69).

<a id="f042"></a>

## F042 · 🟡 ScrollSmoother com smooth 1.2s e normalizeScroll sequestra o scroll do site inteiro, inclusive no touch

- **Rotas:** `todas as rotas exceto /particular/*`
- **Onde:** [src/hooks/use-smooth-scroll.ts:26](../../../../src/hooks/use-smooth-scroll.ts#L26)
- **Evidência:** const smoother = ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.2, effects: false, normalizeScroll: true });  // __root.tsx:177 `useSmoothScroll(!isParticularRoute)`; styles.css:147 `html { scroll-behavior: smooth }` continua ativo em paralelo.
- **Problema:** `smooth: 1.2` significa 1,2s para o conteúdo "alcançar" a roda do mouse (padrão do GSAP é 0,8) — lag perceptível em leitura rápida e em quem usa trackpad. `normalizeScroll: true` intercepta o toque e passa a rolar via JS: perde o feel nativo do iOS/Android, a barra de endereço nunca recolhe (menos área útil), e pull-to-refresh/overscroll mudam. Apple (Fluid Interfaces): "never fight the platform scroll"; STANDARDS: motion tem que carregar a velocidade do gesto do usuário, não impor a sua. Também dobra com `scroll-behavior: smooth` do html em âncoras.
- **Correção sugerida:** Antes do create: `if (ScrollTrigger.isTouch === 1 \|\| window.matchMedia("(pointer: coarse)").matches) return;` e usar `smooth: 0.8, normalizeScroll: false`. Testar os pins (testimonials) no desktop depois. scroll-behavior:smooth do html (styles.css:147) pode ficar: sem smoother no touch, é o scroll nativo.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: use-smooth-scroll.ts:26-32 confirma smooth 1.2 + normalizeScroll true em qualquer dispositivo fora de /particular (__root.tsx:177). Reduced-motion já é respeitado (l.24), mas no touch o scroll nativo é sequestrado.

<a id="f043"></a>

## F043 · ⚪ `transition` do Tailwind no mesmo elemento que o GSAP anima transform (MagneticButton/TiltCard): dupla interpolação

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421)
- **Evidência:** <MagneticButton ... className="... shadow-[...] transition hover:scale-[1.03] glow-green animate-cta-pulse">  // magnetic-button.tsx:35 `gsap.to(el, { x: x*0.35, y: y*0.35, duration: 0.35 })` escreve `transform` inline a cada tick. Mesmo padrão em index.tsx:1117 e em TiltCard (index.tsx:667 `... bg-card transition ${` + tilt-card.tsx:35 `rotateY/rotateX/scale`).
- **Problema:** No Tailwind 4 o utilitário `transition` inclui `transform` (além de translate/scale/rotate). Cada valor que o GSAP escreve em `transform` passa ainda por uma transição CSS de 150ms — o elemento fica correndo atrás do próprio tween, com atraso e "borracha" perceptíveis no follow do cursor. É a fonte clássica de magnetic/tilt que parecem lentos mesmo com `power2.out`.
- **Correção sugerida:** No MagneticButton (index.tsx:421, 1117) e no TiltCard (index.tsx:667): trocar 'transition' por 'transition-[background-color,box-shadow,color,border-color] duration-150'. Manter 'hover:scale' (usa a propriedade 'scale', separada de 'transform' no Tailwind 4).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Tailwind ^4.3.3: o utilitário 'transition' inclui 'transform'. magnetic-button.tsx:35 e tilt-card.tsx:35 escrevem transform inline via GSAP, e aí ocorre a dupla interpolação. Só roda com hover:hover e sem reduced-motion (magnetic-button.tsx:28-29), então afeta só o desktop.

<a id="f044"></a>

## F044 · ⚪ MagneticButton no CTA principal: alvo que se move sob o cursor + elastic bounce + um tween por mousemove

- **Rotas:** `/`
- **Onde:** [src/components/magnetic-button.tsx:35](../../../../src/components/magnetic-button.tsx#L35)
- **Evidência:** function handleMove(e) { ... gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.35, ease: "power2.out" }); } function handleLeave() { gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" }); }  // aplicado em index.tsx:417 ("Agende uma aula experimental grátis") e :1113 (CTA final).
- **Problema:** É o botão de conversão nº 1 do site. Deslocar 35% da distância do cursor (até ~35px num botão de 200px) faz o alvo escapar de quem mira a borda; hover é ação de "dezenas de vezes por dia" → tabela de frequência pede reduzir/remover. `elastic.out` no retorno adiciona quique em interação sem momentum (Apple: bounce só quando o gesto carregou velocidade; damping 1.0 como padrão). Cada `mousemove` cria um tween novo sem `overwrite`, acumulando dezenas de tweens vivos por segundo.
- **Correção sugerida:** Reduzir fator para 0.15, usar `const xTo = gsap.quickTo(el,'x',{duration:0.3,ease:'power3'})` (idem y) no lugar de gsap.to por mousemove, e retorno `power3.out` 0.35s sem elastic.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Já há gate de `(hover: hover)` e prefers-reduced-motion (l.28-29). O botão se move EM DIREÇÃO ao cursor, não foge — o clique não é perdido. Tweens sem overwrite e elastic são polimento, não problema de conversão. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f045"></a>

## F045 · ⚪ `animate-cta-pulse` anima box-shadow infinitamente no CTA, empilhado com glow, hover-scale, magnetic e reveal

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421)
- **Evidência:** @keyframes cta-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(13,184,143,0.45); } 50% { box-shadow: 0 0 0 10px rgba(13,184,143,0); } } .animate-cta-pulse { animation: cta-pulse 2.2s ease-out infinite; }  // index.tsx:421 e :1117: `shadow-[0_12px_30px_-10px_...] transition hover:scale-[1.03] glow-green animate-cta-pulse` dentro de <MagneticButton> dentro de <Reveal>.
- **Problema:** `box-shadow` não é composta na GPU: cada quadro repinta o botão (e o que está sob a sombra) por 2,2s em loop, no elemento mais importante da página. Sobre ele há ainda `glow-green` (segunda sombra estática), `hover:scale`, atração magnética e o fade do Reveal — cinco efeitos num só botão, exatamente o que §11 ("excesso de sombras", "muitos efeitos ao mesmo tempo") proíbe. O pulso infinito também compete com o texto do herói.
- **Correção sugerida:** Tirar `glow-green` de index.tsx:421 e :1117. As duas regras disputam o mesmo box-shadow com a `shadow-[...]`, e durante a animação a própria cta-pulse sobrescreve as duas. Opcional: limitar o pulso com `animation-iteration-count: 3`. Não precisa reescrever com pseudo-elemento.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: styles.css:196-203 já tem pausa no hover e bloco prefers-reduced-motion. Repintar o box-shadow de um botão é custo desprezível. O problema real é o empilhamento: glow-green e shadow-[] são sobrescritas pelo keyframe, ou seja, código redundante. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f048"></a>

## F048 · ⚪ HoverWashCard: efeito de hover com 700ms via clip-path — dez vezes o tempo de uma resposta de hover

- **Rotas:** `/cursos/create`, `/cursos/academies`, `9 páginas de curso infantil (ModuleCard)`
- **Onde:** [src/components/hover-wash-card.tsx:79](../../../../src/components/hover-wash-card.tsx#L79)
- **Evidência:** <div className="pointer-events-none absolute inset-0 [clip-path:circle(0%_at_top_right)] transition-all duration-700 ease-out group-hover:[clip-path:circle(150%_at_top_right)]" style={{ background: accent, opacity: 0.2 }} />  // l.74 bolinha `transition-opacity duration-700`; l.61 card `transition hover:-translate-y-1` (150ms) — dois tempos no mesmo hover.
- **Problema:** Hover é interação de "dezenas de vezes por dia" (tabela de frequência: remover ou reduzir drasticamente). 700ms faz o card ainda estar "pintando" quando o cursor já saiu; o `-translate-y-1` termina em 150ms e o wash em 700ms, então o card sobe rápido e muda de cor devagar — dois ritmos que leem como lentidão. O wash a 20% da cor de destaque sobre o card inteiro também altera o contraste de todo o texto no hover.
- **Correção sugerida:** l.79: "transition-[clip-path] duration-300 ease-out" no lugar de "transition-all duration-700 ease-out"; l.74: "transition-opacity duration-300". Manter o wash no card inteiro (opacidade 0.2 não compromete o contraste).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: hover-wash-card.tsx:74 e :79 usam duration-700 e o translate do card (l.61) usa 150ms: dois ritmos no mesmo hover. O efeito é intencional ("wash"), então só encurtar. Só existe em desktop com hover.

<a id="f049"></a>

## F049 · ⚪ CTAs da home e das páginas infantis não dão feedback de press (`active:`); só /particular tem

- **Rotas:** `/`, `/cursos/*`, `9 páginas de curso infantil`
- **Onde:** [src/routes/index.tsx:265](../../../../src/routes/index.tsx#L265)
- **Evidência:** className="mt-8 inline-flex items-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:scale-[1.03] glow-green"  // idem index.tsx:421, 626, 728, 1042, 1117 e course-page.tsx:244, 252 — zero ocorrências de `active:` nesses arquivos; particular-course-page.tsx:268/605/708 e particular.index.tsx:209/606 já usam `active:scale-[0.99]`.
- **Problema:** No celular (público principal) não existe hover: o único feedback possível é no toque. Sem `:active`, o botão "Agende uma aula experimental grátis" não reage ao dedo até o WhatsApp abrir — Apple: "respond on pointer-down, not on release; waiting for touch-up to show feedback feels dead". A família /particular já resolveu; o restante do site ficou sem.
- **Correção sugerida:** Nos CTAs de index.tsx (265, 421, 626, 728, 1042, 1117) e course-page.tsx (244, 252): acrescentar 'active:scale-[0.97]' e trocar 'hover:scale-[1.03]' por 'hover:scale-[1.02]', igual a /particular. No Tailwind 4 'scale' é propriedade separada de 'transform', então não briga com o GSAP do MagneticButton.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: grep 'active:' em index.tsx e course-page.tsx não retorna nada; particular-course-page.tsx já usa active:scale. No toque o link abre o WhatsApp mesmo assim, então é polimento de feedback, não bloqueio.

<a id="f051"></a>

## F051 · ⚪ Cookie banner: `hover:scale` só em Aceitar/Salvar, não em Gerenciar/Recusar — assimetria que o próprio arquivo veta

- **Rotas:** `todas as rotas (primeira visita e link Cookies do rodapé)`
- **Onde:** [src/components/cookie-consent.tsx:305](../../../../src/components/cookie-consent.tsx#L305)
- **Evidência:** <button ... onClick={onAccept} className="... bg-st-green ... transition-transform duration-200 hover:scale-[1.02]">Aceitar</button>  // l.298 Gerenciar: `transition-colors hover:bg-[#F5F8FA]` (sem scale); l.383 Recusar tudo idem; l.390 Salvar com `hover:scale-[1.02]`. Comentário l.291-293: "Mesmo tamanho e mesmo peso de fonte nos dois — Gerenciar não pode virar o botão apagado ao lado do Aceitar".
- **Problema:** O arquivo documenta o risco LGPD (art. 8º) de a recusa ser menos convidativa que o aceite e lista mitigação de peso igual — mas o motion contradiz: só o botão afirmativo "cresce" ao passar o mouse, um micro-nudge a favor do aceite. Em auditoria de consentimento, feedback assimétrico entre aceitar e recusar pesa como dark pattern.
- **Correção sugerida:** Igualar o feedback nos 4 botões sem mexer nas cores. Em `cookie-consent.tsx:298` (Gerenciar) e `:383` (Recusar tudo) trocar `transition-colors hover:bg-[#F5F8FA]` por `transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-[#F5F8FA]`. Aceitar (`:305`) e Salvar (`:390`) já têm `transition-transform duration-200 hover:scale-[1.02]` (o `.bg-st-green:hover` do CSS já dá a mudança de cor). Acrescentar ao comentário de `:291`: 'e a mesma animação de hover'.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Assimetria de scale existe (:305 e :390 hover:scale-[1.02]; :298 e :383 só hover:bg). Porém Gerenciar/Recusar têm feedback hover próprio, mesmo h-11/text-sm/font-semibold, e o scale segue o padrão de CTA primário do DS §8.1. 2% de escala não é dark pattern documentado em LGPD/HIG/WCAG — é opinião; risco real é o já assumido no header do arquivo (:24-29). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f052"></a>

## F052 · ⚪ Sidebar /particular: ease-in-out em width/margin/padding de todas as seções e drawer mobile sem fade de overlay

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:309](../../../../src/routes/particular.tsx#L309)
- **Evidência:** .sb-bleed { margin-left: calc(-1 * var(--sbw, 256px)); padding-left: var(--sbw, 256px); width: calc(100% + var(--sbw, 256px)); transition: margin-left .3s ease-in-out, padding-left .3s ease-in-out, width .3s ease-in-out; }  // l.331 drawer `-translate-x-full transition-transform duration-300 ease-in-out`; l.335 `lg:transition-[width] lg:duration-300 lg:ease-in-out`; l.584 conteúdo `transition-[padding-left] duration-300 ease-in-out`; l.315-320 overlay `{mobileOpen && <div className="fixed inset-0 z-40 bg-black/40" />}` sem transição.
- **Problema:** Recolher a sidebar anima `width` da aside, `padding-left` do conteúdo e `margin/padding/width` de CADA seção `.sb-bleed` — reflow de página inteira por 300ms a cada clique (STANDARDS: animar layout é achado de performance; aqui é layout em N elementos ao mesmo tempo). `ease-in-out` em entrada de drawer começa lento (o momento que o usuário observa); a curva certa para gaveta é a do iOS `cubic-bezier(0.32,0.72,0,1)`. O overlay aparece/desaparece de estalo enquanto a gaveta desliza — dois ritmos no mesmo gesto.
- **Correção sugerida:** Overlay mobile (:315-320): renderizar sempre com `fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}` e `aria-hidden`. Drawer (:331): trocar `ease-in-out` por `ease-out`. Deixar o colapso desktop (.sb-bleed) como está, a menos que o Lighthouse/Performance aponte jank.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: overlay monta/desmonta sem fade (:315); ease-in-out em :309, :331, :335, :584. O reflow do .sb-bleed é real mas ocorre só no clique de recolher (desktop), sem prova de jank medido. Polimento de motion, não media. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f055"></a>

## F055 · ⚪ `transition-all` em 15 pontos do código (sistêmico)

- **Rotas:** `/cursos/*`, `9 páginas de curso infantil`, `/particular`, `todas as 52 páginas de /particular/cursos/*`, `header (todas as rotas)`
- **Onde:** [src/components/course-skins/variants/ide-ads.tsx:90](../../../../src/components/course-skins/variants/ide-ads.tsx#L90)
- **Evidência:** className={`rounded-lg border px-5 py-2 text-sm font-bold transition-all duration-200 ${  // também: particular-course-page.tsx:132; hover-wash-card.tsx:79; particular-faq.tsx:49; site-header.tsx:322/415/447; ui/accordion.tsx:25; particular.tsx:439; course-skins/variants/ia-geral.tsx:222, ide-ads.tsx:90, marketing-copywriting.tsx:46, marketing-meta-ads.tsx:25/62/64.
- **Problema:** `transition: all` é o primeiro item da lista de gatilhos dos STANDARDS: anima qualquer propriedade que mude (incluindo width/height/left, que disparam layout) e torna o custo imprevisível quando alguém adiciona uma classe. Nas barras de progresso dos skins (`width` + `transition-all duration-500`) o efeito é exatamente esse: layout animado.
- **Correção sugerida:** Corrigir só o que anima layout: ide-ads.tsx:90 barra de progresso → `origin-left transition-transform` com `style={{transform:`scaleX(${progresso/100})`}}`. Nos dropdowns do header (322/415/447) usar `transition-[opacity,visibility]`. Regra de lint é opcional.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: 15 ocorrências confirmadas (grep). Só ide-ads.tsx:90 anima width; marketing-meta-ads:64 é linha SVG; demais animam cor/opacidade sem custo real. Linha citada (particular-course-page:87) é tab, impacto nulo. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._
