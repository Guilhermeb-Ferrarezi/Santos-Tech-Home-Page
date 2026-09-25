# Acessibilidade — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#64) · nota da dimensão **4.5/10** · **21 achados** (🔴 1 · 🟠 4 · 🟡 8 · ⚪ 8)

A base é boa (quase todas as animações já respeitam o "reduzir movimento" do celular, a semântica é quase toda correta), mas a área que mais vende (/particular) e as cores da marca têm falhas que prejudicam a venda, não só a conformidade com a norma.

- **Contraste da marca quebrado na origem:** o verde e o azul oficiais, como são usados hoje, deixam o texto branco de "Entrar", dos botões de aula experimental e do aviso de cookies abaixo do mínimo legível. Um pai lendo no sol não enxerga o botão que gera o contato.
- **Menu do /particular feito só para quem usa mouse no desktop:** no desktop a lista de cursos some (branco sobre branco). No celular, quem navega por teclado ou leitor de tela passa por dezenas de links invisíveis, e o menu não fecha pelo teclado. Isso afeta as 53 páginas de curso particular.
- **Conteúdo "fechado" continua lá:** FAQ e grupos recolhidos seguem sendo lidos e focados, então o usuário se perde.
- **Elementos sobrepostos e alvos pequenos no celular:** o botão do WhatsApp cobre "Cookies" e "Termos de Uso" (exigência da LGPD), e os links do rodapé e do menu são pequenos demais para o polegar.
- **Movimento sem desligar:** o efeito de surgir ao rolar e as animações em loop ignoram a preferência de reduzir movimento. Isso incomoda quem tem enjoo ou TDAH.
- **Estado só por cor:** o nível selecionado (e, com ele, o preço) não é anunciado para leitor de tela.

**Recomendação:** corrigir primeiro o menu do /particular e os tokens de cor no design system. É uma correção pequena com efeito no site inteiro.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F255`](#f255) | 🔴 | Sidebar do /particular fica ilegível no desktop: texto branco sobre fundo claro (fusion tone) | `/particular`, `/particular/cursos/backend` +2 | [src/routes/particular.tsx:216](../../../../src/routes/particular.tsx#L216) | pequeno |
| [`F256`](#f256) | 🟠 | FAB do WhatsApp cobre o botão "Cookies" e "Termos de Uso" do rodapé no mobile | `todas as 23 páginas com SiteFooter (home, /links, /sobre, /contato, /cursos/**, /privacidade, /termos, 404)`, `todas as 23 páginas com SiteHeader/SiteFooter (desktop e mobile)` | [src/components/whatsapp-fab.tsx:32](../../../../src/components/whatsapp-fab.tsx#L32) | trivial |
| [`F257`](#f257) | 🟠 | Sidebar do /particular fora da tela continua focável no mobile; drawer sem foco, Escape ou inert | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/routes/particular.tsx:323](../../../../src/routes/particular.tsx#L323) | pequeno |
| [`F260`](#f260) | 🟠 | Conteúdo colapsado com grid-rows-[0fr] continua focável e lido: FAQ do /particular e grupos da sidebar | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/components/particular-faq.tsx:49](../../../../src/components/particular-faq.tsx#L49) | pequeno |
| [`F268`](#f268) | 🟠 | axe color-contrast agregado: branco sobre verde #0DB88F (2,53:1) em "Entrar", CTAs e banner de cookies; eyebrows text-primary 4,18:1 | `21 páginas com o botão "Entrar" do header`, `/` +6 | [src/components/site-header.tsx:271](../../../../src/components/site-header.tsx#L271) | médio |
| [`F258`](#f258) | 🟡 | /particular sem skip link, sem <header> e com sidebar de 30+ controles antes do conteúdo | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/routes/particular.tsx:622](../../../../src/routes/particular.tsx#L622) | trivial |
| [`F259`](#f259) | 🟡 | Estrelas dos depoimentos: aria-label em <span> sem role (aria-prohibited-attr ×10 na home) | `/` | [src/components/testimonials.tsx:82](../../../../src/components/testimonials.tsx#L82) | trivial |
| [`F261`](#f261) | 🟡 | Páginas legais renderizam <main> dentro de <main>: landmarks duplicados (axe ×3 por página) | `/privacidade`, `/termos` | [src/components/legal-page.tsx:17](../../../../src/components/legal-page.tsx#L17) | trivial |
| [`F262`](#f262) | 🟡 | /links não tem nenhum heading (page-has-heading-one) | `/links` | [src/routes/links.tsx:63](../../../../src/routes/links.tsx#L63) | trivial |
| [`F263`](#f263) | 🟡 | Hambúrguer do header: nome fixo "Abrir menu" com ícone X, sem aria-expanded/aria-controls nem type | `todas as 23 páginas com SiteHeader (mobile)`, `/` | [src/components/site-header.tsx:136](../../../../src/components/site-header.tsx#L136) | trivial |
| [`F265`](#f265) | 🟡 | Barra de status da skin IDE e carrossel da skin mobile são roláveis sem acesso por teclado (axe ×13) | `/particular/cursos/backend`, `/particular/cursos/frontend` +10 | [src/components/course-skins/ide.tsx:124](../../../../src/components/course-skins/ide.tsx#L124) | pequeno |
| [`F269`](#f269) | 🟡 | Reveal e animações infinitas (pulse do FAB, float da colagem, blob, spin) ignoram prefers-reduced-motion | `/ (colagem do herói, FAB)`, `/contato (animate-blob)` +14 | [src/styles.css:243](../../../../src/styles.css#L243) | trivial |
| [`F271`](#f271) | 🟡 | Foco visível depende do outline padrão; nenhum token/estilo de focus-visible no design system | `todas as 75 rotas` | [src/styles.css:77](../../../../src/styles.css#L77) | pequeno |
| [`F264`](#f264) | ⚪ | Seleção de nível (TierTabs/TierGuide) e abas/expansores das aulas sem estado acessível — só cor | `páginas de /particular/cursos/* com mais de um nível (ex.: excel, python, ia, marketing)`, `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos` | [src/components/aula-detalhada.tsx:221](../../../../src/components/aula-detalhada.tsx#L221) | trivial |
| [`F266`](#f266) | ⚪ | Alvos pequenos em /particular: "Recolher menu" 22×22, hambúrguer 32×32 e 25 itens da sidebar com 32px | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/routes/particular.tsx:378](../../../../src/routes/particular.tsx#L378) | trivial |
| [`F267`](#f267) | ⚪ | Links de texto de 16px de altura no rodapé, breadcrumb dos cursos e ícones de 36px no /links | `todas as 23 páginas com SiteFooter (mobile)`, `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`, `/links` | [src/components/site-footer.tsx:88](../../../../src/components/site-footer.tsx#L88) | trivial |
| [`F270`](#f270) | ⚪ | Ícones decorativos <aside> nas skins viram landmarks aninhados; <nav> da sidebar sem aria-label | `/particular/cursos/canva`, `/particular/cursos/chatgpt` +7 | [src/routes/particular.tsx:399](../../../../src/routes/particular.tsx#L399) | pequeno |
| [`F272`](#f272) | ⚪ | Links target=_blank (WhatsApp, Instagram, Google) sem aviso de nova aba | `todas as 75 rotas` | [src/components/particular-course-page.tsx:266](../../../../src/components/particular-course-page.tsx#L266) | pequeno |
| [`F273`](#f273) | ⚪ | Banner de cookies não é anunciado ao aparecer e injeta um <h2> solto no outline de todas as páginas | `todas as 75 rotas (primeira visita)` | [src/components/cookie-consent.tsx:199](../../../../src/components/cookie-consent.tsx#L199) | trivial |
| [`F274`](#f274) | ⚪ | Colagem do herói troca fotos automaticamente a cada 5s sem pausa (WCAG 2.2.2) | `/ (desktop ≥1024px)` | [src/components/hero-collage.tsx:73](../../../../src/components/hero-collage.tsx#L73) | pequeno |
| [`F353`](#f353) | ⚪ | Alt redundante no logo do header e alts vagos na colagem do hero | `/` | [src/components/hero-collage.tsx:21](../../../../src/components/hero-collage.tsx#L21) | trivial |

<a id="f255"></a>

## F255 · 🔴 Sidebar do /particular fica ilegível no desktop: texto branco sobre fundo claro (fusion tone)

- **Rotas:** `/particular`, `/particular/cursos/backend`, `/particular/cursos/photoshop`, `todas as 52 páginas de /particular/cursos/* cujo hero não usa .sb-bleed ou muda de tom ao longo da altura`
- **Onde:** [src/routes/particular.tsx:216](../../../../src/routes/particular.tsx#L216)
- **Evidência:** routes/particular/desktop.fold.png e routes/particular__cursos__backend/desktop.fold.png: rótulos "Cursos", "INFORMÁTICA", "OFFICE", "Falar no WhatsApp", "Modo escuro" praticamente invisíveis (branco sobre #fafafa); routes/particular__cursos__photoshop/desktop.fold.png: "Modo escuro" apagado no rodapé da sidebar. Código: sample() em particular.tsx:216-231 amostra UM ponto (x = sidebar+24, y = 35% da tela) e aplica data-fusion-tone="dark" (texto #fff, linha 298) à sidebar inteira, enquanto o fundo real atrás dela é o bg-neutral-50 do wrapper (linha 279) porque o hero de particular.index.tsx não vaza (.sb-bleed) por baixo.
- **Problema:** A navegação principal da área de vendas para adultos vira texto branco sobre branco em telas ≥1024px — contraste ~1.05:1 (WCAG 1.4.3 exige 4.5:1). Quem chega em /particular no desktop não enxerga a lista de cursos nem o botão de tema; só o item ativo (verde) aparece.
- **Correção sugerida:** Manter a 'fusão', mas pintar a sidebar com a cor amostrada em vez de transparent: em sample() guardar aside.style.setProperty('--sb-bg', getComputedStyle(el).backgroundColor) e no CSS (particular.tsx:294) trocar 'background: transparent' por 'background: var(--sb-bg)'. Garante contraste do texto com o próprio fundo, independente do sb-bleed. Alternativa: bg-white/95 dark:bg-neutral-900/95 backdrop-blur.
- **Esforço:** pequeno · **Severidade:** Crítica
- **Verificação:** confirmado: Visto em particular/desktop.fold.png: 'Cursos', grupos, 'Falar no WhatsApp', 'Modo escuro' brancos sobre #fafafa. Causa: hero particular.index.tsx:164 sem .sb-bleed; sample() (:216) lê o hero escuro e aplica tom dark; CSS :294 zera o fundo. Achado principal; F158/F214/F242 são o mesmo defeito. · ✅ **Conferido ao vivo pelo CTO:** screenshot de /particular/cursos/python em 1440px: rótulos brancos sobre fundo claro.

<a id="f256"></a>

## F256 · 🟠 FAB do WhatsApp cobre o botão "Cookies" e "Termos de Uso" do rodapé no mobile

- **Rotas:** `todas as 23 páginas com SiteFooter (home, /links, /sobre, /contato, /cursos/**, /privacidade, /termos, 404)`, `todas as 23 páginas com SiteHeader/SiteFooter (desktop e mobile)`
- **Onde:** [src/components/whatsapp-fab.tsx:32](../../../../src/components/whatsapp-fab.tsx#L32)
- **Evidência:** routes/home/mobile.footer.png e routes/links/mobile.fold.png: a linha "Política de Privacidade · Termos de Uso · Co…" termina atrás do botão verde de 56px; "Cookies" fica totalmente encoberto. whatsapp-fab.tsx:134 `fixed bottom-5 right-5 h-14 w-14`; site-footer.tsx:85 rodapé com `py-6` e itens `justify-between` alinhados à direita no sm+, centralizados no mobile mas na mesma faixa de 44px do FAB.
- **Problema:** O mecanismo de revogar consentimento (LGPD art. 8º §5º, comentado no próprio site-footer.tsx:92) fica inalcançável por toque no celular — o público prioritário. Também viola WCAG 2.4.11 (foco não obscurecido) e 2.5.8 quando o alvo está coberto.
- **Correção sugerida:** Em site-footer.tsx:85, reservar a faixa do FAB só no mobile: trocar `py-6` por `pt-6 pb-24 sm:py-6` na div da barra inferior (o FAB é `bottom-5 h-14` = 76px). Assim 'Cookies' e 'Termos de Uso' ficam acima do botão verde sem mexer no FAB. Conferir depois em mobile.footer.png e /links.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: Confirmado em routes/home/mobile.footer.png: o FAB cobre 'Co…okies' e o fim do copyright. Como o rodapé é o fim da página, não dá para rolar e tirar o link de baixo do FAB. A classe fica em whatsapp-fab.tsx:32, não na linha 134. O botão de revogar os cookies (LGPD) fica em site-footer.tsx:92-96.

<a id="f257"></a>

## F257 · 🟠 Sidebar do /particular fora da tela continua focável no mobile; drawer sem foco, Escape ou inert

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:323](../../../../src/routes/particular.tsx#L323)
- **Evidência:** mobile.json › dom.smallTargets de qualquer rota /particular lista 25 controles da sidebar ("Início", "Cursos", "INFORMÁTICA", "Pacote Office", "Excel"…) embora routes/particular/mobile.fold.png mostre só a topbar — o <aside> (particular.tsx:323-338) sai da tela com `-translate-x-full` mas não recebe inert/aria-hidden/visibility. Overlay (315-320) é <div onClick> sem teclado; hambúrguer (612-619) sem aria-expanded/aria-controls e com aria-label fixo "Abrir menu" mesmo quando mostra o X. Compare com site-header.tsx:148-149 que já usa `inert={!open} aria-hidden={!open}`.
- **Problema:** Usuário de teclado/leitor de tela no celular percorre 25+ links invisíveis antes do conteúdo (WCAG 2.4.3 Ordem de foco, 1.3.2) e, ao abrir o drawer, o foco não entra nele nem há como fechar sem mouse (2.1.1, 2.1.2).
- **Correção sugerida:** No <aside>: `inert={!mobileOpen && !isDesktop}` com `useMediaQuery('(min-width:1024px)')` (ou classes `invisible lg:visible` + `visible` quando mobileOpen). useEffect ao abrir: focar o primeiro link; listener `keydown` Escape → setMobileOpen(false) e devolver o foco ao hambúrguer. Hambúrguer (612): `aria-expanded={mobileOpen} aria-controls="particular-sidebar" aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}`. Overlay (315): `aria-hidden`.
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: particular.tsx:329-331 só usa `-translate-x-full`, sem inert/aria-hidden/visibility; grep não encontra Escape, inert nem aria-expanded no arquivo. Hambúrguer com aria-label fixo "Abrir menu" (615). site-header.tsx já usa esse padrão com inert.

<a id="f260"></a>

## F260 · 🟠 Conteúdo colapsado com grid-rows-[0fr] continua focável e lido: FAQ do /particular e grupos da sidebar

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/particular-faq.tsx:49](../../../../src/components/particular-faq.tsx#L49)
- **Evidência:** particular-faq.tsx:327-347: painel fechado é `grid-rows-[0fr]` + `overflow-hidden`, mas o `<a href={whatsappUrl}>Falar no WhatsApp` (336-344) e o texto continuam no DOM sem hidden/inert — o link recebe Tab com 0px de altura visível. Mesmo padrão nos grupos da sidebar (particular.tsx:481-527: 8 links de OFFICE ficam tabuláveis com o grupo fechado) e no dropdown "Cursos" (447-453). O botão tem aria-expanded (318) mas não aria-controls.
- **Problema:** Foco em elemento invisível (WCAG 2.4.3, 2.4.7) e leitor de tela ouvindo respostas "fechadas" — o usuário não sabe onde está e o CTA de conversão do FAQ pode ser ativado às cegas.
- **Correção sugerida:** No wrapper do painel: `<div id={`faq-${i}`} inert={!isOpen} className={`grid ... ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>` e no botão `aria-controls={`faq-${i}`}` (use useId para não colidir entre FAQs). Na sidebar de src/routes/particular.tsx: `inert={!(cursosOpen && !collapsed)}` no grid da l.447 e `inert={!gruposOpen[id]}` no grid da l.482, com aria-expanded/aria-controls nos botões de grupo (l.460).
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: Linha citada (327) não existe: arquivo tem 78 linhas; o painel está em particular-faq.tsx:49-67, sem inert/hidden, link WhatsApp tabulável. Sidebar particular.tsx:447-452 e 482-487 mesmo padrão; botões de grupo nem têm aria-expanded. site-header.tsx:148 já usa inert — padrão do repo.

<a id="f268"></a>

## F268 · 🟠 axe color-contrast agregado: branco sobre verde #0DB88F (2,53:1) em "Entrar", CTAs e banner de cookies; eyebrows text-primary 4,18:1

- **Rotas:** `21 páginas com o botão "Entrar" do header`, `/`, `/contato`, `/cursos/create/*-anos (labels #187ABF sobre #dceefb 3,86:1)`, `/cursos/camps (#0E9E8E)`, `/termos`, `/privacidade`, `404`
- **Onde:** [src/components/site-header.tsx:271](../../../../src/components/site-header.tsx#L271)
- **Evidência:** Agregação de axe.violations color-contrast em todos os *.json: ×21 `<a href="https://auth.santos-tech.com/..." class="... bg-st-green ... text-white">Entrar` 2,53:1 (site-header.tsx:271); CTAs `bg-st-green text-white` (course-page.tsx:243, home, /contato) 2,53:1; botões "Aceitar"/"Salvar" do banner (cookie-consent.tsx:545, 630) 2,53:1 — Lighthouse home/contato/create falham color-contrast por eles; `text-primary` = oklch(0.58 0.14 240) → #0083c4 (styles.css:65) em eyebrows 14px bold: 4,18:1 (home mobile ×11, /sobre, /cursos, /sobre/visao); `style="color:#187ABF"` sobre #dceefb 3,86:1 nos cards de ferramentas dos cursos infantis; `text-primary-foreground/90` sobre #0083c4 3,67:1 (/contato:118). DESIGN_SYSTEM §12 afirma que "verde/azul Santos Tech sobre branco passam" — o verde não passa (2,53:1) nem invertido.
- **Problema:** O botão de login e os CTAs de conversão (aula experimental, aceitar cookies) ficam abaixo de 3:1 até para texto grande — falha WCAG 1.4.3 AA em todas as páginas; o texto azul de 14px dos eyebrows também fica abaixo de 4,5:1. (Achado de contraste consolidado aqui pela agregação do axe; cruzar com o agente de cor.)
- **Correção sugerida:** Verde de botão: trocar o texto para `text-st-blue-dark` (#04325A sobre #0DB88F ≈ 5,1:1) OU criar token `--st-green-cta: #0A8F6F` (≈4,1:1, aceitável só com texto ≥18px bold / 14px bold não basta). Texto azul: `--primary` em styles.css:65 → `#0067BE` (≈5,7:1) para eyebrows/links, #187ABF só em fundos. Corrigir DESIGN_SYSTEM.md:649 ('verde… sobre branco passam' é falso) e listar os pares aprovados.
- **Esforço:** médio · **Severidade:** Alta
- **Verificação:** confirmado: Axe confirma 2,53:1 (#fff sobre #0db88f, 16px bold) em 22 JSONs (ex.: routes/contato/desktop.json) e 4,18:1 do #0083c4 (styles.css:65) em eyebrows da home. Falha WCAG 1.4.3 real. Esforço médio: mexe na cor de CTA da marca, pede aval do Henrique.

<a id="f258"></a>

## F258 · 🟡 /particular sem skip link, sem <header> e com sidebar de 30+ controles antes do conteúdo

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:622](../../../../src/routes/particular.tsx#L622)
- **Evidência:** desktop.json/mobile.json › dom.landmarks em todas as rotas /particular: `header: 0, skipLink: false` (páginas de curso também `footer: 0`); axe region ×2 em 53 páginas: `<div class="flex items-center gap-2">` (logo/nome, particular.tsx:588) e `<a href="https://auth.santos-tech.com">Login` (604) fora de landmark. __root.tsx:200-202 renderiza `<Outlet/>` puro para /particular, pulando o skip link e o <main id="conteudo"> das linhas 204-224; o <main> do layout (622) não tem id.
- **Problema:** Sem mecanismo de pular blocos (WCAG 2.4.1, nível A): no desktop a sidebar vem antes do <main> no DOM, então cada página exige ~10 Tabs (grupos fechados) a 35 Tabs (grupo aberto) até o H1. Leitores de tela não encontram banner/contentinfo nas 53 páginas.
- **Correção sugerida:** Antes do <aside> (323): `<a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground">Pular para o conteúdo</a>`; `<main id="conteudo">` (622); topbar mobile (586) `<div>` → `<header>`.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: __root.tsx:200-201 pula o skip link; <main> (622) sem id; topbar é <div> (586). Mas há landmarks <aside>/<nav>/<main>, o que já atende parcialmente o 2.4.1 (técnica ARIA11). Não é violação grave; a correção é trivial. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f259"></a>

## F259 · 🟡 Estrelas dos depoimentos: aria-label em <span> sem role (aria-prohibited-attr ×10 na home)

- **Rotas:** `/`
- **Onde:** [src/components/testimonials.tsx:82](../../../../src/components/testimonials.tsx#L82)
- **Evidência:** axe aria-prohibited-attr serious ×10 (desktop e mobile.json da home; Lighthouse home.mobile.json a11y 0.92 pelo mesmo motivo): `<span class="inline-flex " aria-label="5 de 5 estrelas">`. Origem: Stars() em testimonials.tsx:80-88, usado no Header (116), em cada ReviewCard (94) e dentro do GoogleButton (132).
- **Problema:** aria-label em elemento genérico é ignorado ou lido de forma inconsistente pelos leitores de tela; os 5 ícones Star (lucide, aria-hidden) não têm texto alternativo, então a nota 5,0 dos depoimentos não é anunciada (WCAG 1.1.1, 4.1.2).
- **Correção sugerida:** Stars(): `<span role="img" aria-label="5 de 5 estrelas" className={`inline-flex ${className}`}>`; aceitar prop `decorative` e usar `aria-hidden="true"` sem label no GoogleButton (133) e no Header (116, já tem '5,0' ao lado).
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: axe aria-prohibited-attr serious, 10 nós em routes/home/desktop.json e mobile.json; span sem role em testimonials.tsx:82. Rebaixado a média: nota 5,0 já aparece em texto no header; perda é só nos cards.

<a id="f261"></a>

## F261 · 🟡 Páginas legais renderizam <main> dentro de <main>: landmarks duplicados (axe ×3 por página)

- **Rotas:** `/privacidade`, `/termos`
- **Onde:** [src/components/legal-page.tsx:17](../../../../src/components/legal-page.tsx#L17)
- **Evidência:** desktop.json/mobile.json › dom.landmarks: `main: 2, header: 2`; axe landmark-no-duplicate-main, landmark-main-is-top-level e landmark-unique em /privacidade e /termos. legal-page.tsx:252 `<main className="mx-auto w-full max-w-3xl ...">` e :253 `<header>` são renderizados dentro do `<main id="conteudo">` de __root.tsx:222.
- **Problema:** Dois landmarks main quebram a navegação por regiões dos leitores de tela (atalho "ir para conteúdo principal" fica ambíguo) e o <header> extra vira um segundo banner.
- **Correção sugerida:** legal-page.tsx:17 e :42 trocar <main ...> e </main> por <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-6 sm:py-20">...</article>. O <header> da l.18 dentro de <article> deixa de ser landmark banner.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: A linha citada estava errada: o arquivo tem cerca de 44 linhas, e o <main> fica na l.17. Ele é renderizado dentro de <main id="conteudo"> (__root.tsx:222), o que gera dois landmarks main, como apontado pelo axe. Correção de uma linha.

<a id="f262"></a>

## F262 · 🟡 /links não tem nenhum heading (page-has-heading-one)

- **Rotas:** `/links`
- **Onde:** [src/routes/links.tsx:63](../../../../src/routes/links.tsx#L63)
- **Evidência:** mobile.json › dom.headings = [] e h1Count 0 em desktop e mobile; axe page-has-heading-one moderate. links.tsx:202 `<p className="text-lg font-black text-white">Santos Tech</p>` é o título visual da página. routes/links/mobile.fold.png mostra "Santos Tech" como título centralizado.
- **Problema:** Leitores de tela não têm ponto de entrada por heading (WCAG 1.3.1, 2.4.6) e mecanismos de busca não identificam o tema da página de bio-link.
- **Correção sugerida:** links.tsx:63 → <h1 className="text-lg font-black text-white">Santos Tech</h1>, sem mudança visual.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Confirmado: links/mobile.json tem h1Count 0, headings [] e axe page-has-heading-one. O arquivo tem 177 linhas; o título está em links.tsx:63, não na 202.

<a id="f263"></a>

## F263 · 🟡 Hambúrguer do header: nome fixo "Abrir menu" com ícone X, sem aria-expanded/aria-controls nem type

- **Rotas:** `todas as 23 páginas com SiteHeader (mobile)`, `/`
- **Onde:** [src/components/site-header.tsx:136](../../../../src/components/site-header.tsx#L136)
- **Evidência:** site-header.tsx:136-142 `<button className=... onClick={...} aria-label="Abrir menu">{open ? <X/> : <Menu/>}</button>` — sem type="button" (dom.buttonsWithoutType = 1 em todas as rotas), sem aria-expanded, sem aria-controls; painel em 146 sem id. specials/menu-mobile-open.png: menu aberto exibindo X enquanto o nome acessível segue "Abrir menu" (mobile.json › smallTargets label "Abrir menu"). Não há tratamento de Escape.
- **Problema:** Leitor de tela anuncia "Abrir menu" com o menu já aberto e não informa estado expandido/recolhido (WCAG 4.1.2). Teclado não fecha com Esc.
- **Correção sugerida:** No botão (l.136): `type="button" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"}`; `id="menu-mobile"` no div da l.146. Esc opcional (useEffect com keydown → closeAll()). Repetir aria-expanded/label dinâmico em src/routes/particular.tsx:612-619 (já tem type).
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: site-header.tsx:136-142 confirma label fixo "Abrir menu" com X quando aberto, sem aria-expanded/aria-controls (WCAG 4.1.2). Falta de type é inócua (fora de form). particular.tsx:615 tem o mesmo label fixo, mas já tem type="button".

<a id="f265"></a>

## F265 · 🟡 Barra de status da skin IDE e carrossel da skin mobile são roláveis sem acesso por teclado (axe ×13)

- **Rotas:** `/particular/cursos/backend`, `/particular/cursos/frontend`, `/particular/cursos/fullstack`, `/particular/cursos/jogos`, `/particular/cursos/logica`, `/particular/cursos/make`, `/particular/cursos/mobile`, `/particular/cursos/n8n`, `/particular/cursos/python`, `/particular/cursos/python-apis`, `/particular/cursos/sql`, `/particular/cursos/typescript`
- **Onde:** [src/components/course-skins/ide.tsx:124](../../../../src/components/course-skins/ide.tsx#L124)
- **Evidência:** axe scrollable-region-focusable serious em 12 rotas (mobile.json): `<div class="relative flex items-center gap-5 overflow-x-auto bg-(--accent) px-4 py-1 font-mono text-[11px] text-white">` = ide.tsx:124-133 (branch, erros, nível, aulas, linguagem, UTF-8 com `shrink-0`). Em /particular/cursos/mobile ×2: também `<div class="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto ...">` = variants/ide-mobile.tsx:38 (3 "telas" de 270px com o texto "Este curso é ideal se você…").
- **Problema:** Conteúdo que transborda (no mobile a barra corta "Node.js · API REST · UTF-8"; o carrossel esconde os passos 2 e 3) só é alcançável arrastando — usuário de teclado não consegue rolar (WCAG 2.1.1).
- **Correção sugerida:** ide.tsx:124: trocar `overflow-x-auto` por `overflow-hidden` e manter os spans `shrink-0` com `min-w-0 truncate` no último; não esconder com aria-hidden (a barra mostra nível e aulas). variants/ide-mobile.tsx:38: adicionar `tabIndex={0} role="region" aria-label="Para quem é este curso"` e `focus-visible:outline-2 focus-visible:outline-(--accent)` no wrapper.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: ide.tsx:124 tem `overflow-x-auto` sem tabindex. variants/ide-mobile.tsx:38 é um carrossel com `overflow-x-auto` e snap, sem foco por teclado. Viola WCAG 2.1.1 (axe scrollable-region-focusable).

<a id="f269"></a>

## F269 · 🟡 Reveal e animações infinitas (pulse do FAB, float da colagem, blob, spin) ignoram prefers-reduced-motion

- **Rotas:** `/ (colagem do herói, FAB)`, `/contato (animate-blob)`, `todas as páginas (Reveal em todo bloco; FAB em 44 páginas)`, `todas as rotas`, `/`, `/cursos`, `/cursos/create`, `/cursos/junior`, `/cursos/camps`, `/cursos/academies`, `/sobre`, `/sobre/visao`, `/contato`, `9 páginas de curso infantil`, `todas as 52 páginas de /particular/cursos/* (cenas dos skins)`, `todas as rotas fora de /particular (FAB WhatsApp)`
- **Onde:** [src/styles.css:243](../../../../src/styles.css#L243)
- **Evidência:** styles.css:185-193 `.animate-float-slow/-slower/-float-y/-blob/-spin-slow` e :243 `.animate-pulse-ring` não têm bloco `@media (prefers-reduced-motion: reduce)` (só cta-pulse, curve-breathe, marquee, crossfade, consent-card e rarity-badge têm — linhas 201, 213, 225, 232, 252, 333). reveal.tsx:171-186 aplica `transition-[transform,opacity] duration-700` + translateY(24px)/opacity 0 sem checar a preferência (use-reveal.ts não consulta matchMedia). specials/reduced-motion.home.fold.png: o halo do pulse-ring continua visível ao redor do FAB e a colagem segue com `animate-float-*` (hero-collage.tsx:26-29).
- **Problema:** Quem ativou "reduzir movimento" ainda vê dois anéis pulsando sem parar no canto de todas as páginas, fotos flutuando e centenas de blocos deslizando ao rolar (WCAG 2.3.3 / HIG Motion). O sistema já respeita a preferência em 15 outros pontos — a regra existe, mas não é sistêmica.
- **Correção sugerida:** Em styles.css: `@media (prefers-reduced-motion: reduce){ .animate-pulse-ring,.animate-float-slow,.animate-float-slower,.animate-float-y,.animate-blob,.animate-spin-slow{animation:none} }`. Em reveal.tsx:23 usar `motion-safe:transition-[transform,opacity] motion-safe:duration-700`. Em use-reveal.ts, se `matchMedia('(prefers-reduced-motion: reduce)').matches`, chamar setVisible(true) e não observar.
- **Esforço:** trivial · **Severidade:** Média · **Também apontado como:** F035, F037
- **Verificação:** confirmado: styles.css:185-193 e :243 não têm bloco reduced-motion. O bloco global de L159-163 só ajusta o scroll-behavior. use-reveal.ts não consulta matchMedia e reveal.tsx:16-23 aplica translate/opacity sempre. hero-collage.tsx:69 só interrompe o crossfade; o float continua.

<a id="f271"></a>

## F271 · 🟡 Foco visível depende do outline padrão; nenhum token/estilo de focus-visible no design system

- **Rotas:** `todas as 75 rotas`
- **Onde:** [src/styles.css:77](../../../../src/styles.css#L77)
- **Evidência:** specials/keyboard-focus.json: elemento focado "VER TODOS OS PROGRAMAS" com `outline: auto 1px rgb(16,16,16)`, `boxShadow: none` — é o anel default do Chromium; keyboard-focus-6tabs.desktop.png mostra o retângulo fino preto. styles.css:77 define `--ring: oklch(0.58 0.14 240)` mas nenhuma regra `:focus-visible` o usa; grep de "focus" em styles.css retorna 0 linhas; componentes usam `hover:` sem par `focus-visible:` (ex.: site-header.tsx:104, particular.tsx:426). DESIGN_SYSTEM §12 não cita foco.
- **Problema:** Passa no mínimo da WCAG 2.4.7 (o navegador desenha algo), mas o anel de 1px preto some sobre o footer #04325A e o hero azul, e todos os estados de hover (cor, escala, fundo) não têm equivalente para teclado (WCAG 2.4.13 AAA / HIG Focus).
- **Correção sugerida:** Em styles.css, dentro de @layer base: `:focus-visible { outline: 3px solid var(--st-blue); outline-offset: 3px; }` e `footer :focus-visible, .bg-program-create :focus-visible { outline-color: #fff; }`. Documentar em DESIGN_SYSTEM §12. Hoje só as peles de curso (informatica.tsx:119/351/484) têm foco próprio.
- **Esforço:** pequeno · **Severidade:** Média (proposta Baixa, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: styles.css não tem nenhuma regra de foco, --ring (:77) não é usado para isso, e specials/keyboard-focus.json mostra o contorno padrão do navegador (1px rgb(16,16,16)), que some sobre o footer #04325A. Isso é problema real de contraste do foco (WCAG 1.4.11), por isso subi para média.

<a id="f264"></a>

## F264 · ⚪ Seleção de nível (TierTabs/TierGuide) e abas/expansores das aulas sem estado acessível — só cor

- **Rotas:** `páginas de /particular/cursos/* com mais de um nível (ex.: excel, python, ia, marketing)`, `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`
- **Onde:** [src/components/aula-detalhada.tsx:221](../../../../src/components/aula-detalhada.tsx#L221)
- **Evidência:** particular-course-page.tsx:84-98 `<button key=... onClick=... className={selected===i ? 'border-[#0DB88F] bg-[#0DB88F] text-white' : 'border-neutral-300 ...'}>` — sem type="button", sem aria-pressed; TierGuide (128-140) idem. aula-detalhada.tsx:222-233 botões de aba com `ativo` só via background; 250-256 botão que expande a aula (`setAberto`) sem aria-expanded. grep de `aria-` em aula-detalhada.tsx: 0 ocorrências.
- **Problema:** O nível/aba selecionado é comunicado apenas por cor (WCAG 1.4.1) e sem estado programático (4.1.2): leitor de tela ouve três botões iguais "Básico, Intermediário, Avançado" e não sabe qual preço está sendo exibido — decisão de compra às cegas.
- **Correção sugerida:** TabBtn: `aria-pressed={ativo}`; botão da AulaCard (l.250): `aria-expanded={aberto}`. Nos TierTabs (particular-course-page.tsx:84 e course-skins/variants/design-ui.tsx:91) adicionar `type="button" aria-pressed={selected===i}` preventivamente.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: TierTabs/TierGuide retornam null com 1 tier (l.80; design-ui.tsx:84) e nenhum dos 52 cursos tem >1 levelName — nunca renderizam. AulaCard só é usada em /professores/* (noindex), não nas páginas /cursos/* citadas. Falha a11y real, mas fora do funil de venda. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f266"></a>

## F266 · ⚪ Alvos pequenos em /particular: "Recolher menu" 22×22, hambúrguer 32×32 e 25 itens da sidebar com 32px

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:378](../../../../src/routes/particular.tsx#L378)
- **Evidência:** desktop.json › dom.smallTargets em todas as rotas /particular: `{"tag":"button","label":"Recolher menu","size":"22x22"}` = particular.tsx:378-385 (`p-1` + ícone h-3.5). mobile.json › smallTargets: 25 itens `201x32`/`218x32` = links `py-1.5` (505) e botões de grupo `py-2` (464), empilhados com `space-y-0.5`; hambúrguer `p-1.5` + h-5 = 32px (612-619). routes/particular__cursos__excel/desktop.fold.png mostra o ícone de recolher minúsculo no canto da sidebar.
- **Problema:** "Recolher menu" fica abaixo do mínimo de 24px da WCAG 2.5.8 (AA). Os demais passam da WCAG pela exceção de espaçamento, mas ficam bem abaixo dos 44pt da HIG numa lista densa em que o polegar erra o curso vizinho — e o público de /particular escolhe o curso justamente por essa lista.
- **Correção sugerida:** Recolher/Expandir (378 e seguinte): trocar `rounded-md p-1` por `flex h-8 w-8 items-center justify-center rounded-md` mantendo ícone h-4 w-4. Hambúrguer (612): `flex h-11 w-11 -mr-2 items-center justify-center rounded-md`. Links da sidebar (505): `py-2.5 lg:py-1.5` (alvo maior só no drawer mobile, sem alongar a lista desktop); botão de grupo (464): `py-3 lg:py-2`.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Tamanhos confirmados em particular.tsx:378-385 (p-1 + h-3.5 = 22px), 505 (py-1.5), 612-619 (p-1.5 + h-5). Mas o botão está isolado no cabeçalho, então passa pela exceção de espaçamento da WCAG 2.5.8; não é violação AA. Só falha a meta de 44pt da HIG (recomendação, não lei). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f267"></a>

## F267 · ⚪ Links de texto de 16px de altura no rodapé, breadcrumb dos cursos e ícones de 36px no /links

- **Rotas:** `todas as 23 páginas com SiteFooter (mobile)`, `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`, `/links`
- **Onde:** [src/components/site-footer.tsx:88](../../../../src/components/site-footer.tsx#L88)
- **Evidência:** mobile.json › dom.smallTargets em todas as rotas não-/particular: `Política de Privacidade 136x16`, `Termos de Uso 89x16`, `Cookies 47x16` = site-footer.tsx:88-96 (`text-xs`, sem padding, `gap-2`). /cursos/create/8-9-anos mobile: `PROGRAMA CREATE 146x16` = course-page.tsx:205-210 (`text-xs` sem padding). /links: `Site oficial 36x36`, `Instagram 36x36` = links.tsx:209/218 (`h-9 w-9`). routes/home/mobile.footer.png confirma a linha de 12px no rodapé.
- **Problema:** Alvos de 16px de altura no celular são metade do mínimo confortável (HIG 44pt) e ficam no limite da WCAG 2.5.8 só pela exceção de espaçamento; combinados com o FAB por cima (achado anterior), os links legais do rodapé são os mais difíceis de acionar do site.
- **Correção sugerida:** Rodapé: links/botão com `inline-flex min-h-11 items-center px-1` e container `gap-1`. Breadcrumb (course-page.tsx:208): `inline-flex min-h-11 items-center -my-3`. /links (links.tsx:70 e 79): `h-11 w-11`.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: 16px de altura confere (site-footer.tsx:88-96, course-page.tsx:208). Mas passa na WCAG 2.5.8 pela exceção de espaçamento, e 36px no /links também passa AA. Os ícones ficam em links.tsx:70/79, não 209/218. É conforto (HIG 44pt), não violação. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f270"></a>

## F270 · ⚪ Ícones decorativos <aside> nas skins viram landmarks aninhados; <nav> da sidebar sem aria-label

- **Rotas:** `/particular/cursos/canva`, `/particular/cursos/chatgpt`, `/particular/cursos/git`, `/particular/cursos/office`, `/particular/cursos/photoshop`, `/particular/cursos/revit`, `/particular/cursos/word`, `/particular/cursos/logica`, `/particular/cursos/python`
- **Onde:** [src/routes/particular.tsx:399](../../../../src/routes/particular.tsx#L399)
- **Evidência:** axe landmark-complementary-is-top-level em 7 rotas: `<aside>` usados como painel de ferramentas/camadas dentro do <main> — variants/design-canva.tsx:209, design-photoshop.tsx:151, ia-chat.tsx:151, ide-git.tsx:88, oficina-revit.tsx:283, planilha-pacote.tsx:315, planilha-word.tsx:223. axe landmark-unique em /logica e /python (desktop.json landmarks `nav: 2`): `<nav class="flex-1 overflow-y-auto ...">` = particular.tsx:399 sem aria-label, coexistindo com um <nav> da cena da skin.
- **Problema:** Leitor de tela lista "complementar" e "navegação" repetidos sem nome, poluindo a lista de regiões e confundindo qual é o menu real de cursos (WCAG 1.3.1).
- **Correção sugerida:** particular.tsx:399 → `<nav aria-label="Cursos particulares">`. Nas skins, trocar os `<aside>` (canva:209, photoshop:151, ia-chat:151, ide-git:88, revit:283, pacote:315, word:223) por `<div>`. Nav interativo (ide-logica:92 tem botões) → `aria-label="Módulos do curso"`, NUNCA aria-hidden; ide-python:55 → `<div>`.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: particular.tsx:399 confirmado sem aria-label, e os asides nas skins também. A recomendação original erra: ide-logica.tsx:92 contém <button> interativos, e aria-hidden ali esconderia controles focáveis (viola WCAG 4.1.2).

<a id="f272"></a>

## F272 · ⚪ Links target=_blank (WhatsApp, Instagram, Google) sem aviso de nova aba

- **Rotas:** `todas as 75 rotas`
- **Onde:** [src/components/particular-course-page.tsx:266](../../../../src/components/particular-course-page.tsx#L266)
- **Evidência:** dom.externalNoRel = 0 em todas as rotas (rel="noreferrer" presente, bom), mas nenhum link externo indica que abre em nova aba: particular-course-page.tsx:106-114, course-page.tsx:241-249, contato.tsx:60, 92, 121, testimonials.tsx:126, links.tsx:252-258, particular.tsx:540-550. DESIGN_SYSTEM §12 exige só `target="_blank" rel="noreferrer"`.
- **Problema:** Usuário de leitor de tela ou com dificuldade cognitiva é jogado no app do WhatsApp/Instagram sem aviso e perde o contexto de onde estava (WCAG 3.2.5 / técnica G201, HIG: nunca surpreender ao mudar de contexto).
- **Correção sugerida:** Adicionar `<span className="sr-only"> (abre em nova aba)</span>` nos CTAs de WhatsApp/Instagram principais; componente `<ExternalLink>` só se for aplicado nos ~50 usos de uma vez.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: Linha 106 é TierGuide; target=_blank real em :266, 603, 664, 706 (50 no src). Nenhum aviso de nova aba existe. Porém WCAG 3.2.5 é AAA e G201 é técnica consultiva — não é violação AA. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f273"></a>

## F273 · ⚪ Banner de cookies não é anunciado ao aparecer e injeta um <h2> solto no outline de todas as páginas

- **Rotas:** `todas as 75 rotas (primeira visita)`
- **Onde:** [src/components/cookie-consent.tsx:199](../../../../src/components/cookie-consent.tsx#L199)
- **Evidência:** cookie-consent.tsx:439-443 `<div role="region" aria-label="Consentimento de cookies">` sem aria-live; o foco só é movido no painel "Gerenciar" (371-373, decisão intencional). :471 `<h2>Ajuda a gente a melhorar o site?</h2>` fica no fim do <body>, depois do footer. specials/cookie-banner.mobile.png: card surge 1,2s após o load, por cima do conteúdo.
- **Problema:** Quem usa leitor de tela não recebe aviso de que uma pergunta apareceu (WCAG 4.1.3 Mensagens de status) e encontra um h2 de cookies ao navegar por títulos em qualquer página.
- **Correção sugerida:** Trocar o wrapper (l.199-203) para `role="dialog" aria-labelledby="consent-title" aria-describedby="consent-desc"` (omitir `aria-modal` — false é o padrão), pôr `id="consent-title"` no `<h2>` (l.231) e `id="consent-desc"` no `<p>` de cada painel. Manter o `<h2>`: título de dialog rotulado é o padrão WAI-ARIA e HIG; ele só sai do outline 'solto' porque passa a pertencer ao dialog. NÃO colocar `aria-live` no wrapper: ele é montado junto com o conteúdo (`if (!open) return null`, l.194), e região live inserida já cheia não é anunciada. Em vez disso, renderizar sempre (fora do `if`) um `<div aria-live="polite" className="sr-only">` cujo texto vira 'Pergunta sobre cookies disponível no fim da página.' quando `open && view === "prompt"` e vazio caso contrário — anuncia sem roubar foco. Manter o foco automático só no painel Gerenciar.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: Sem aria-live no `role="region"` (l.199-203) e foco só no painel (l.131-133): correto. Mas linhas citadas erradas (439/471/371 → 199/231/131) e o <h2> (l.231) NÃO fica após o footer: CookieConsent monta em __root.tsx:198, ANTES do header/main/footer. Axe (routes/home/mobile.json) não acusa a região. Prompt sem roubar foco é escolha defensável; baixa. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f274"></a>

## F274 · ⚪ Colagem do herói troca fotos automaticamente a cada 5s sem pausa (WCAG 2.2.2)

- **Rotas:** `/ (desktop ≥1024px)`
- **Onde:** [src/components/hero-collage.tsx:73](../../../../src/components/hero-collage.tsx#L73)
- **Evidência:** hero-collage.tsx:73 `setInterval(() => setOffset(o => (o+1) % POOL.length), 5000)` — 4 quadros trocam de foto a cada 5s indefinidamente; só para com prefers-reduced-motion (67-72). routes/home/desktop.fold.png mostra os 4 quadros com fotos de alunos.
- **Problema:** Conteúdo que se atualiza sozinho por mais de 5s sem controle de pausa/parada (WCAG 2.2.2, nível A) — para quem tem déficit de atenção ou lê devagar, o movimento periódico ao lado do H1 e do CTA compete pela atenção.
- **Correção sugerida:** Pausar o setInterval em `onMouseEnter`/`onFocusCapture` do wrapper e quando `document.hidden` (listener visibilitychange); opcionalmente parar após uma volta completa em POOL.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: hero-collage.tsx:73 troca a cada 5s sem pausa; já respeita prefers-reduced-motion (67-72) e só existe em lg (hidden lg:block). Fotos decorativas, não 'informação' — enquadramento 2.2.2 é discutível. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f353"></a>

## F353 · ⚪ Alt redundante no logo do header e alts vagos na colagem do hero

- **Rotas:** `/`
- **Onde:** [src/components/hero-collage.tsx:21](../../../../src/components/hero-collage.tsx#L21)
- **Evidência:** site-header.tsx:90-91: <Link aria-label="Santos Tech — página inicial"><Img alt="Logo Santos Tech"/> — leitor de tela anuncia "Santos Tech — página inicial, Logo Santos Tech". hero-collage.tsx:21 alt "Aluno avançado da Santos Tech", L20 "Turma da Santos Tech em aula" — não descrevem o que a foto mostra. routes/home/mobile.json › dom.imgIssues aponta o logo.
- **Problema:** Redundância de nome acessível no link mais frequente do site e alts que não descrevem a cena (HIG accessibility: descrever o conteúdo, não o rótulo do produto).
- **Correção sugerida:** site-header.tsx:91 alt="" (higiene, o aria-label do Link já nomeia). hero-collage.tsx:21 trocar "Aluno avançado da Santos Tech" por algo que descreva a cena real da foto (ex.: "Aluno programando um jogo no computador na Santos Tech"), conferindo a imagem antes.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: O aria-label do Link (site-header.tsx:90) substitui o nome dos filhos, então o leitor de tela não anuncia "Logo Santos Tech"; a redundância é só teórica. Só o alt de hero-collage.tsx:21 é vago; o da L20, "Turma da Santos Tech em aula", é aceitável. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._
