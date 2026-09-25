# Técnico percebido: performance, estabilidade e metadados — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#610) · nota da dimensão **6/10** · **16 achados** (🔴 0 · 🟠 1 · 🟡 4 · ⚪ 11)

O site funciona e carrega, mas há falhas técnicas silenciosas: elas fecham a porta para parte dos visitantes e reduzem a presença no Google, sem ninguém perceber no dia a dia.

- **Portas de entrada quebradas:** `www.santos-tech.com` dá erro. O pai que recebe o link pelo WhatsApp ou pelo cartão nem chega ao site. É venda perdida antes do primeiro clique.
- **O Google enxerga o site pela metade:** o `robots.txt` (arquivo que diz ao Google o que ele pode ler) bloqueia o visual e as fotos do site. Ele avalia a versão para celular de forma errada e as fotos reais não aparecem nas buscas. Além disso, a nota da escola aparece repetida nos 52 cursos, o que arrisca uma punição que apaga os destaques do site no Google.
- **Peso desnecessário no celular:** cada página de curso baixa o visual de todos os outros cursos. O mesmo acontece com o analytics e com uma checagem de login que 99% dos visitantes nunca usam. Resultado: o adulto espera mais de 4 s pela primeira imagem.
- **Textos de busca fora do padrão:** títulos e descrições passam do limite que o Google mostra. Justo o "Ribeirão Preto" e a "aula experimental grátis" ficam cortados no resultado de busca.
- **Pontos de compartilhamento genéricos:** o card da página /particular no WhatsApp e a página de erro (404) reaproveitam a imagem e o texto da home. Perde-se o gancho de "curso individual".

**Recomendação:** começar pelo `www` e pelo `robots.txt`. Levam minutos, e sem eles o resto rende menos.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F323`](#f323) | 🟠 | www.santos-tech.com não resolve — quem digita com www cai em erro de DNS | `/` | DNS Cloudflare (fora do repo) — public/robots.txt | trivial |
| [`F322`](#f322) | 🟡 | robots.txt bloqueia /assets/ — Googlebot não consegue renderizar CSS, JS, fontes e imagens | `todas`, `/apresentacoes/*`, `/professores/*` | [public/robots.txt:8](../../../../public/robots.txt#L8) | trivial |
| [`F325`](#f325) | 🟡 | Chunk course-skins (200 KB) carregado inteiro em cada uma das 52 páginas particulares — 87% não usado | `/particular/cursos/* (todas as 52)` | [src/components/course-skins/index.ts:4](../../../../src/components/course-skins/index.ts#L4) | médio |
| [`F332`](#f332) | 🟡 | Schema Course: aggregateRating da escola replicado em 52 cursos e cursos infantis sem `offers`/carga horária | `/particular/cursos/* (52)`, `/cursos/create/*`, `/cursos/junior/*` | [src/lib/seo.ts:365](../../../../src/lib/seo.ts#L365) | pequeno |
| [`X02`](#x02) | 🟡 | Modo escuro do /particular abre claro e só escurece depois de 0,5–2 s a cada página | `/particular`, `/particular/cursos/* (52 páginas)` | [src/routes/particular.tsx:138](../../../../src/routes/particular.tsx#L138) | pequeno |
| [`F050`](#f050) | ⚪ | Reveal aplica will-change-transform permanente em centenas de elementos por página | `todas as rotas`, `/` +6 | [src/components/reveal.tsx:23](../../../../src/components/reveal.tsx#L23) | trivial |
| [`F326`](#f326) | ⚪ | Sentry, PostHog e GSAP inicializam no boot — bundle principal de 318 KB com ~50% não usado em toda página | `todas` | [src/router.tsx:7](../../../../src/router.tsx#L7) | pequeno |
| [`F328`](#f328) | ⚪ | Pesos 500/600/800 usados em 284 lugares mas só 400/700/900 carregados — hierarquia tipográfica colapsa | `todas` | [src/styles.css:7](../../../../src/styles.css#L7) | pequeno |
| [`F329`](#f329) | ⚪ | favicon.png de 87 KB baixado em toda página e usado como `logo` no schema.org | `todas` | [src/routes/__root.tsx:137](../../../../src/routes/__root.tsx#L137) | trivial |
| [`F330`](#f330) | ⚪ | 66 de 70 títulos passam de 60 caracteres e o sufixo da marca varia (\| vs —, prefixo vs sufixo) | `/`, `/cursos` +7 | [src/lib/seo.ts:436](../../../../src/lib/seo.ts#L436) | médio |
| [`F331`](#f331) | ⚪ | Página 404 herda título, description e OG da home — sem metadados próprios | `/pagina-que-nao-existe-404 (qualquer URL inexistente)`, `/pagina-que-nao-existe-404` | [src/routes/__root.tsx:33](../../../../src/routes/__root.tsx#L33) | pequeno |
| [`F333`](#f333) | ⚪ | Toda visita anônima dispara /auth/me e /auth/refresh com 401 — erros de console em produção em todas as páginas | `todas` | [src/lib/auth.ts:48](../../../../src/lib/auth.ts#L48) | pequeno |
| [`F334`](#f334) | ⚪ | TTFB da home 860 ms (2–3× as outras páginas): HTML SSR de 270 KB com 1.404 nós DOM | `/` | [src/server.ts:66](../../../../src/server.ts#L66) | médio |
| [`F336`](#f336) | ⚪ | Landing /particular compartilha a OG image institucional genérica com a home | `/particular` | [src/lib/seo.ts:410](../../../../src/lib/seo.ts#L410) | pequeno |
| [`F370`](#f370) | ⚪ | Meta descriptions acima de 155 caracteres em 30+ cursos (até 225) e titles até 94 caracteres | `/particular/cursos/manutencao`, `/particular/cursos/premiere` +14 | [src/routes/particular.cursos.manutencao.tsx:13](../../../../src/routes/particular.cursos.manutencao.tsx#L13) | médio |
| [`F371`](#f371) | ⚪ | Padrão de title quebrado: "Particular" posicionado após o nome do software e ausente em 4 cursos | `/particular/cursos/davinci`, `/particular/cursos/premiere` +8 | [src/routes/particular.cursos.davinci.tsx:10](../../../../src/routes/particular.cursos.davinci.tsx#L10) | pequeno |

<a id="f323"></a>

## F323 · 🟠 www.santos-tech.com não resolve — quem digita com www cai em erro de DNS

- **Rotas:** `/`
- **Onde:** DNS Cloudflare (fora do repo) — public/robots.txt
- **Evidência:** `curl -v https://www.santos-tech.com/` → `Could not resolve host: www.santos-tech.com` (23/09). O apex responde 200 e `http://` redireciona 302 para https. Nenhum registro/redirect para www.
- **Problema:** Parte dos pais digita ou recebe links com www (WhatsApp, cartão, Instagram). Hoje isso é erro de navegador — venda perdida sem nem chegar ao site; também gera backlinks quebrados.
- **Correção sugerida:** Passo privilegiado (painel Cloudflare — NS confirmados raquel/marty.ns.cloudflare.com), quem tem acesso executa: (1) DNS → Add record: tipo `CNAME`, nome `www`, destino `santos-tech.com`, Proxy ON; (2) Rules → Redirect Rules → 'www para apex': condição `Hostname equals www.santos-tech.com`, ação Dynamic redirect, expressão `concat("https://santos-tech.com", http.request.uri.path)`, status 301, preservar query string ON; (3) SSL/TLS → Edge Certificates → ligar 'Always Use HTTPS' (troca o 302 atual de http→https por 301). Validar: `curl -sI https://www.santos-tech.com/particular` deve retornar `301` com `location: https://santos-tech.com/particular`. Registrar em PENDENCIAS.md como `_Aguardando Henrique._` até validado.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: Reproduzido em 24/09 com resolvedor público: `nslookup www.santos-tech.com 1.1.1.1` → NXDOMAIN; apex resolve (104.21.31.236 / Cloudflare) e responde 200; http:// → 302 https. Não é artefato local. Falha total pra quem digita www (erro de navegador, sem fallback); correção é 1 registro CNAME + redirect na Cloudflare, fora do repo. · ✅ **Conferido ao vivo pelo CTO:** nslookup www.santos-tech.com @1.1.1.1 → Non-existent domain; curl em https://www.santos-tech.com falha no DNS; o domínio sem www responde 200.

<a id="f322"></a>

## F322 · 🟡 robots.txt bloqueia /assets/ — Googlebot não consegue renderizar CSS, JS, fontes e imagens

- **Rotas:** `todas`, `/apresentacoes/*`, `/professores/*`
- **Onde:** [public/robots.txt:8](../../../../public/robots.txt#L8)
- **Evidência:** public/robots.txt:8 `Disallow: /assets/`. Todo CSS (`/assets/styles-*.css`), todo JS (`/assets/index-*.js`, chunks), as 3 fontes woff2 preloaded e todas as fotos otimizadas (`/assets/*.avif\|webp`) ficam sob esse prefixo (HTML de produção). Lighthouse `is-crawlable` passa porque só avalia a página, não os recursos.
- **Problema:** O Google renderiza páginas com um Chrome headless; sem CSS/JS ele avalia layout/mobile-friendliness errado e as fotos reais dos alunos ficam fora do Google Imagens — ao contrário do que §18 pretende.
- **Correção sugerida:** Em `public/robots.txt`, remover a linha 8 `Disallow: /assets/` e ajustar o comentário da l.7 para 'Bloqueia só a API (bundles em /assets/ são públicos e o Google precisa deles pra renderizar)'. Manter `Disallow: /api/`, `/apresentacoes` e `/professores` (intencionais). Depois do deploy: Search Console → Inspecionar URL `https://santos-tech.com/particular` → Testar página publicada → aba 'Mais informações' não pode listar recursos bloqueados. Commit `fix(seo): libera /assets/ no robots.txt para renderização do Googlebot`.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: robots.txt:8 `Disallow: /assets/` confirmado em produção; HTML real carrega `/assets/styles-BD71s0kg.css`, 3 woff2 Poppins, chunks JS e fotos `.webp` (colonia-02…) nesse prefixo. Rebaixado pra media: o site é SSR (vite.config.ts:16, `<h1>` já vem no HTML de 172 KB), então o texto indexa sem JS; o dano real é render/mobile-friendliness e fotos fora do Google Imagens.

<a id="f325"></a>

## F325 · 🟡 Chunk course-skins (200 KB) carregado inteiro em cada uma das 52 páginas particulares — 87% não usado

- **Rotas:** `/particular/cursos/* (todas as 52)`
- **Onde:** [src/components/course-skins/index.ts:4](../../../../src/components/course-skins/index.ts#L4)
- **Evidência:** course-skins/index.ts:4-11 importa estaticamente as 8 peles (Informatica, Planilha, Ia, Ide, Ti, Oficina, Design, Marketing — 8.961 linhas em course-skins/**) e particular-course-page.tsx:209 escolhe uma em runtime (`SKINS[course.tema]`). Lighthouse /particular/cursos/excel: `course-skins-BaTI4e9z.js` 200 KB transferidos, 174 KB (87%) não usados; `unused-javascript` total 341 KiB; FCP 4,4 s, LCP 4,6 s.
- **Problema:** Quem abre a página de Excel baixa e compila as cenas SVG de IA, Marketing, Design, TI etc. O adulto no celular espera 4,4 s pelo primeiro pixel de uma página que poderia carregar ~180 KB a menos.
- **Correção sugerida:** Mover os 8 `*_THEME` para src/lib/course-themes.ts (particular.tsx:18/165 importa SKINS só pelo tema e arrasta as 8 peles para o layout). Em index.ts usar `lazy(() => import('./planilha').then(m => ({ default: m.PlanilhaSkin })))` por categoria e envolver `<Skin>` em `<Suspense fallback={<div className="min-h-screen bg-(--hero-bg)" />}>` em particular-course-page.tsx:209.
- **Esforço:** médio · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: index.ts:4-11 importa as 8 peles estaticamente; lighthouse/particular__cursos__excel.mobile.json: course-skins-BaTI4e9z.js 200045 B, 174798 B não usados; FCP 4,4 s (throttling simulado). Rebaixado: index.js também desperdiça 174 KB, ganho real é parcial.

<a id="f332"></a>

## F332 · 🟡 Schema Course: aggregateRating da escola replicado em 52 cursos e cursos infantis sem `offers`/carga horária

- **Rotas:** `/particular/cursos/* (52)`, `/cursos/create/*`, `/cursos/junior/*`
- **Onde:** [src/lib/seo.ts:365](../../../../src/lib/seo.ts#L365)
- **Evidência:** seo.ts:365-371 `buildParticularCourseSchema` injeta `aggregateRating { ratingValue: 5.0, reviewCount: 329 }` (avaliação Google da ORGANIZAÇÃO) dentro de cada `Course` — o mesmo número aparece em 52 cursos diferentes. seo.ts:213-240 `buildCourseSchema` (infantil) não tem `offers` nem `courseWorkload`/`courseSchedule` em `hasCourseInstance`.
- **Problema:** As diretrizes de Review snippet do Google exigem que a avaliação seja sobre o item marcado; rating da escola em cada curso é candidato a ação manual de "structured data" e a perda de todos os rich results. Já os cursos infantis não cumprem os campos obrigatórios do rich result "Course info" (offers + instância com carga horária), então nunca aparecem como carrossel de cursos.
- **Correção sugerida:** Remover o `aggregateRating` de `buildParticularCourseSchema` (seo.ts:365-371); a nota da escola fica só no schema da Organization (seo.ts:173). Nos dois builders, adicionar `offers: {"@type":"Offer", category:"Paid"}`. Em `buildCourseSchema` (infantil), adicionar `courseWorkload: "PT80H"` (40 aulas de 2h, ver course-page.tsx:427/614) em `hasCourseInstance`. Validar em validator.schema.org via POST.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: seo.ts:365 injeta ORG.rating (5.0/329, que é da escola) em cada Course particular. A diretriz do Google exige que a nota seja do item marcado. buildCourseSchema (seo.ts:213-240) não tem offers nem courseWorkload.

<a id="x02"></a>

## X02 · 🟡 Modo escuro do /particular abre claro e só escurece depois de 0,5–2 s a cada página

- **Rotas:** `/particular`, `/particular/cursos/* (52 páginas)`
- **Onde:** [src/routes/particular.tsx:138](../../../../src/routes/particular.tsx#L138)
- **Evidência:** Com localStorage 'particular:dark'=true, medi quadro a quadro (requestAnimationFrame) em /particular/cursos/excel com 390×844. O primeiro quadro com layout sai claro aos 62 ms e a classe 'dark' só entra aos 554 ms. Com a CPU 4× mais lenta (celular intermediário), só aos 1.969 ms. Medido no dev server; em produção o tempo cai, mas o salto existe por construção do código. Prints: .../scratchpad/critico/dark-flash.t0.png (página branca, hero vazio) e dark-flash.t5.png (página escura). Código: useState(false) na linha 138, e o localStorage só é lido no useEffect das linhas 141-143 (o comentário diz que é para casar com o SSR); a classe é aplicada num wrapper na linha 277, não no <html>.
- **Problema:** Quem escolheu o modo escuro vê a tela piscar de branco para preto em toda página aberta, com o hero vazio durante o piscar. Isso piora porque a landing usa <a href> com recarga completa (F230): cada clique recarrega e pisca de novo. À noite, o flash branco incomoda, e a sensação é de site lento ou quebrado justamente para quem se deu ao trabalho de personalizar.
- **Correção sugerida:** O app é TanStack Start com SSR, então o script inline é o caminho certo: em __root.tsx, colocar no <head> um script bloqueante que, com pathname começando por '/particular' e localStorage 'particular:dark'==='true', adiciona 'dark' no <html>. O layout passa a ler e alternar a classe do <html>, e não mais a do wrapper da linha 277. A opção do cookie lido no SSR também serve. Validar por requestAnimationFrame: nenhum quadro claro.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: useState(false) na l.138, localStorage lido só no useEffect (l.141-143) e classe aplicada no wrapper (l.277). Os prints dark-flash.t0 e t5 existem. Só afeta quem escolheu o modo escuro, mas é um flash a cada página.

<a id="f050"></a>

## F050 · ⚪ Reveal aplica will-change-transform permanente em centenas de elementos por página

- **Rotas:** `todas as rotas`, `/`, `/cursos/create/*`, `/cursos/junior/*`, `/particular`, `/particular/cursos/*`, `/sobre`, `/contato`
- **Onde:** [src/components/reveal.tsx:23](../../../../src/components/reveal.tsx#L23)
- **Evidência:** reveal.tsx:15-19 injeta style inline `opacity:0; translateY(24px)` já no HTML do servidor — no HTML de produção da home há 51 blocos com `style="...opacity:0"`. Lighthouse mobile (produção): home LCP 5,7 s com Render Delay 4.842 ms (85%); /cursos/create/8-9-anos LCP 5,1 s (Render Delay 88%) e o elemento LCP é o `span.text-lg` do logo do header; /particular/cursos/excel LCP 4,6 s e o LCP é o breadcrumb `span.truncate text-xs` — ou seja, tudo o que importa fica invisível até o bundle de 318 KB baixar, hidratar e o IntersectionObserver disparar (use-reveal.ts:46-57). CLS 0 em todas.
- **Problema:** `will-change` promove cada wrapper a uma camada de composição própria pelo tempo de vida da página — 300 camadas com textura em GPU num celular de entrada é memória e tempo de composição desperdiçados para uma animação que roda uma vez e acaba. A transição em `transform` já promove a camada durante a animação; o hint permanente só custa. STANDARDS/Apple: `will-change` "where motion is imminent", não como estado padrão.
- **Correção sugerida:** Remover `will-change-transform` do className fixo; se quiser manter o hint, aplicar só antes de revelar: `cn('transition-[transform,opacity] duration-700 ease-out', !visible && 'will-change-transform', className)`.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Crítica, recalibrada na verificação)
- **Verificação:** parcial: will-change permanente existe (reveal.tsx:23). Porém 'crítica' é exagero, e a evidência (opacity:0 no SSR, LCP) é do F034, não do will-change. Não há medição de memória ou composição que prove o impacto; é polimento. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f326"></a>

## F326 · ⚪ Sentry, PostHog e GSAP inicializam no boot — bundle principal de 318 KB com ~50% não usado em toda página

- **Rotas:** `todas`
- **Onde:** [src/router.tsx:7](../../../../src/router.tsx#L7)
- **Evidência:** router.tsx:7-8 `initClientSentry(); initClientPostHog();` executam na criação do router, antes do primeiro paint; posthog.ts:32 `posthog.init` síncrono. Lighthouse produção: `index-BBlh1P97.js` 318 KB em todas as páginas, `unused-javascript` 126–147 KiB (48–56%), `bootup-time` home 4,5 s (score 0), /contato 3,3 s, 8-9-anos 3,5 s; `uses-rel-preconnect` aponta us.i.posthog.com (380 ms na home).
- **Problema:** Analytics e monitoramento de erro entram no caminho crítico da hidratação — o pai espera pelo SDK do PostHog antes de ver o H1.
- **Correção sugerida:** Manter o Sentry no boot, porque adiar perde os erros de hidratação. Adiar só o PostHog com `requestIdleCallback(() => import('@/lib/posthog').then(m => m.initClientPostHog()))` (fallback `setTimeout(…,2000)`). O gsap é usado pelo header e pelo preloader, então não sai do chunk principal. Medir com `bunx vite-bundle-visualizer` antes e depois.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: router.tsx:7-8 inicializa os dois no carregamento do módulo. O site tem SSR (TanStack Start), então o H1 aparece antes da hidratação e a frase 'pai espera o SDK para ver o H1' é falsa. O impacto é em TBT/interatividade. Não verifiquei os números do Lighthouse. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f328"></a>

## F328 · ⚪ Pesos 500/600/800 usados em 284 lugares mas só 400/700/900 carregados — hierarquia tipográfica colapsa

- **Rotas:** `todas`
- **Onde:** [src/styles.css:7](../../../../src/styles.css#L7)
- **Evidência:** styles.css:7-9 importa apenas `@fontsource/poppins/400\|700\|900.css`; __root.tsx:16-18 faz preload dos mesmos 3. No código: `font-semibold` (600) ×249, `font-extrabold` (800) ×18, `font-medium` (500) ×17. Manifest /particular/cursos/excel desktop.json › dom.fonts: `14px w500 Poppins ×52` é o estilo mais frequente da página, `12px w600 ×9`, `14px w600 ×4`; home `12px w600 ×14`, `14px w500 ×4`. Fontes de produção: só 400, 700, 900 woff2 (Lighthouse network).
- **Problema:** Pelo algoritmo de font-matching, 500 sem arquivo cai para 400 (fica igual ao corpo), 600 vira 700 e 800 vira 900 — `font-medium` e `font-semibold` não fazem nada visível e o design não corresponde ao que o Tailwind declara (§3 do DESIGN_SYSTEM só prevê black/bold).
- **Correção sugerida:** Opção (a): padronizar nos 3 pesos carregados com sed: font-medium→font-normal, font-semibold→font-bold, font-extrabold→font-black. O resultado na tela não muda (já é assim que renderiza) e o código passa a ser honesto. Documentar no DS §3 que só existem 400/700/900. Evitar a opção (b), porque mudaria o visual em 249 lugares.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: styles.css:7-9 e __root.tsx:16-18/144-146 carregam só 400/700/900. No src há font-semibold ×249, font-extrabold ×18 e font-medium ×17. Pelo font-matching, 500 cai para 400, 600 para 700 e 800 para 900. O impacto visual é pequeno: a hierarquia já é lida como bold.

<a id="f329"></a>

## F329 · ⚪ favicon.png de 87 KB baixado em toda página e usado como `logo` no schema.org

- **Rotas:** `todas`
- **Onde:** [src/routes/__root.tsx:137](../../../../src/routes/__root.tsx#L137)
- **Evidência:** __root.tsx:137 `{ rel: "icon", type: "image/png", href: "/favicon.png" }`; `public/favicon.png` = 87.226 bytes, idêntico em tamanho ao `apple-touch-icon.png` (87.226 bytes). Lighthouse produção `total-byte-weight` lista `favicon.png` 87.742 B como 2º–3º maior recurso em todas as 4 páginas (home 816 KB total). Headers: `Cache-Control: public, max-age=14400` (4 h). seo.ts:37 `logo: ${BASE_URL}/favicon.png`.
- **Problema:** Um ícone de aba não deveria pesar mais que o CSS inteiro (40 KB); com cache de 4 h ele volta a ser baixado a cada visita nova do pai.
- **Correção sugerida:** Gerar `favicon-48.png` (menos de 2 KB, com sharp) e `apple-touch-icon.png` em 180x180 (cerca de 10 KB). Apontar o link de __root.tsx:137 para o novo arquivo. Para `ORG.logo` (seo.ts:37), usar um `logo-512.png` dedicado. O cache é definido em docker/server.ts:80-86 (3600s para public), não em `_headers`, que este deploy não usa.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: public/favicon.png é um PNG de 1080x1080 com 87.226 bytes, idêntico ao apple-touch-icon.png. Como ícone de aba, é desperdício claro. A recomendação original de `public/_headers` não se aplica: o servidor é o docker/server.ts.

<a id="f330"></a>

## F330 · ⚪ 66 de 70 títulos passam de 60 caracteres e o sufixo da marca varia (\| vs —, prefixo vs sufixo)

- **Rotas:** `/`, `/cursos`, `/cursos/create/*`, `/cursos/junior/*`, `/particular/cursos/*`, `/contato`, `/sobre/visao`, `/links`, `todas`
- **Onde:** [src/lib/seo.ts:436](../../../../src/lib/seo.ts#L436)
- **Evidência:** Manifest › dom.title: home 93 chars ("Santos Tech — Cursos de Tecnologia, Programação e Informática para Crianças em Ribeirão Preto"), /particular/cursos/ads 94, /particular/cursos/photoshop 92, /particular/cursos/manutencao 89, /cursos 88, /cursos/camps 80. Padrões: 13 páginas infantis terminam em "\| Santos Tech", 55 em "— Santos Tech", home começa com "Santos Tech —", e /contato, /links, /sobre/visao misturam os dois ("Contato — Santos Tech \| Escola de…"). `pageMeta()` (seo.ts:436) não valida tamanho.
- **Problema:** O Google corta em ~60 caracteres: na SERP o pai vê "Curso de Design Gráfico — Photoshop + Illustrator Particu…" sem cidade nem marca; a inconsistência de separador enfraquece o reconhecimento da marca nos resultados.
- **Correção sugerida:** Padronizar o sufixo como ' \| Santos Tech' e colocar o termo de busca primeiro, com no máximo cerca de 60 caracteres (ex.: 'Excel Particular em Ribeirão Preto \| Santos Tech'). Em `pageMeta()`, adicionar `if (import.meta.env.DEV && input.title.length > 60) console.warn('title >60:', input.path)`. Fazer por lotes, começando pela home e por /particular.
- **Esforço:** médio · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Manifest: 63 de 75 títulos passam de 60 caracteres; 55 terminam em '— Santos Tech' e 13 em '\| Santos Tech'; /contato e /sobre/visao misturam os dois. O corte só afeta a exibição na SERP (o Google reescreve títulos), não o ranking, por isso rebaixei. Reescrever cerca de 70 títulos leva horas, não é 'pequeno'. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f331"></a>

## F331 · ⚪ Página 404 herda título, description e OG da home — sem metadados próprios

- **Rotas:** `/pagina-que-nao-existe-404 (qualquer URL inexistente)`, `/pagina-que-nao-existe-404`
- **Onde:** [src/routes/__root.tsx:33](../../../../src/routes/__root.tsx#L33)
- **Evidência:** Manifest routes/pagina-que-nao-existe-404 › dom.title = "Santos Tech — Cursos de Tecnologia, Programação e Informática para Crianças em Ribeirão Preto" (93 chars, idêntico à home), canonical None, metaDescription = a da home. `NotFoundComponent` (__root.tsx:33-55) não define `head`. Status HTTP 404 está correto (`curl` → 404). Screenshot routes/pagina-que-nao-existe-404/mobile.fold.png: só "404 / Página não encontrada / Voltar ao início".
- **Problema:** A aba do navegador e o histórico mostram o título da home numa página de erro; o `og:url`/`og:description` da home também vão para qualquer link quebrado compartilhado no WhatsApp.
- **Correção sugerida:** Criar a rota catch-all `src/routes/$.tsx` com `head: () => noindexMeta({ title: 'Página não encontrada \| Santos Tech' })` (helper já existe em seo.ts), ou definir `document.title` num useEffect do NotFoundComponent. Não entra no sitemap.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Manifest: o title da rota 404 é igual ao da home (93 caracteres). NotFoundComponent não tem head. O status HTTP 404 já está correto, então não há risco de indexação. O impacto é só a aba e a prévia de link compartilhado.

<a id="f333"></a>

## F333 · ⚪ Toda visita anônima dispara /auth/me e /auth/refresh com 401 — erros de console em produção em todas as páginas

- **Rotas:** `todas`
- **Onde:** [src/lib/auth.ts:48](../../../../src/lib/auth.ts#L48)
- **Evidência:** auth.ts:36 `fetch(${API_URL}/auth/me)` e :53 `fetch(${API_URL}/auth/refresh)` chamados por `useSession()` no header (site-header.tsx:251) para qualquer visitante. Lighthouse PRODUÇÃO (não é o CORS local): `errors-in-console` score 0 em /, /contato e /cursos/create/8-9-anos com "Failed to load resource: 401" para api.santos-tech.com/auth/me e /auth/refresh — 4 ocorrências na home (duas rodadas). Best Practices 96 em vez de 100.
- **Problema:** Duas requisições de rede inúteis (e um refresh-token tentado) por página para 99% dos visitantes, que nunca fizeram login; além do custo, Lighthouse/Search Console reportam erro em todas as URLs.
- **Correção sugerida:** A dica em localStorage não funciona porque o login acontece em auth.santos-tech.com, que é outra origem. Opções: (a) a API grava um cookie não-httpOnly `st_has_session=1` em `.santos-tech.com` no login e o apaga no logout; o site só chama `me()` quando `document.cookie.includes('st_has_session=1')`, via `enabled` no useQuery de src/hooks/use-session.ts; ou (b) `/auth/me` devolve 200 `{user:null}` para anônimo. Nos dois casos, o /auth/refresh só é tentado com a dica presente.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: auth.ts:36/53 chama /auth/me e depois /auth/refresh; use-session.ts roda para todo visitante (site-header.tsx:251). Visitante nenhum vê o efeito, é só Lighthouse/best-practices. A correção depende do backend (repo infra), por isso rebaixei.

<a id="f334"></a>

## F334 · ⚪ TTFB da home 860 ms (2–3× as outras páginas): HTML SSR de 270 KB com 1.404 nós DOM

- **Rotas:** `/`
- **Onde:** [src/server.ts:66](../../../../src/server.ts#L66)
- **Evidência:** Lighthouse mobile produção home: `server-response-time` 857 ms (score 0; `document-latency-insight` estima 760 ms de economia) vs 250 ms /contato, 350 ms 8-9-anos, 400 ms excel. `curl` do HTML da home: 269.934 bytes descomprimidos (37 KB gzip), `dom-size` 1.404 elementos (score 0), 9 `<script>` inline, 51 blocos Reveal. index.tsx tem >1.100 linhas de JSX renderizadas no servidor (FAQ, depoimentos, 4 programas, preços, mapa).
- **Problema:** Quase 1 s só esperando o primeiro byte do servidor no celular — antes de qualquer CSS/JS — e depois o navegador ainda parseia 270 KB de HTML.
- **Correção sugerida:** Em server.ts, para GET de HTML com status 200, adicionar `Cache-Control: public, s-maxage=300, stale-while-revalidate=86400` antes de retornar a resposta; validar com `curl -I` em produção e medir TTFB de novo (3+ amostras). Redução de DOM (FAQ via <details>) fica como segundo passo.
- **Esforço:** médio · **Severidade:** Baixa
- **Verificação:** parcial: Não verificado em produção: medição Lighthouse de amostra única. Confirmado no código: server.ts não define Cache-Control em nenhum lugar; index.tsx tem 1.148 linhas. Número de 860ms plausível, mas precisa de repetição antes de priorizar. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f336"></a>

## F336 · ⚪ Landing /particular compartilha a OG image institucional genérica com a home

- **Rotas:** `/particular`
- **Onde:** [src/lib/seo.ts:410](../../../../src/lib/seo.ts#L410)
- **Evidência:** seo.ts:410-422 `inferOgImagePath`: só `/particular/cursos/<slug>` e `/cursos/...` recebem imagem própria; `/particular` cai em `/og-image.png` — a capa "Santos Tech · Escola de tecnologia presencial em Ribeirão Preto" (public/og-image.png, 228 KB) usada também pela home, /sobre, /contato.
- **Problema:** Ao compartilhar a landing de cursos particulares (adultos) no WhatsApp, o card não diz "cursos particulares/individuais" — a mesma imagem da home infantil, perdendo o gancho do produto.
- **Correção sugerida:** Em generate-og-images.mjs, gerar public/og/particular.png ("Cursos Particulares · 1 aluno + 1 professor"). Em inferOgImagePath, adicionar `if (/^\/particular\/?$/.test(path)) return "/og/particular.png"` antes do fallback.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: seo.ts:410-424: /particular não casa com nenhum regex e cai em /og-image.png, a capa institucional usada também pela home. Adultos que recebem o link no WhatsApp veem o card infantil/genérico.

<a id="f370"></a>

## F370 · ⚪ Meta descriptions acima de 155 caracteres em 30+ cursos (até 225) e titles até 94 caracteres

- **Rotas:** `/particular/cursos/manutencao`, `/particular/cursos/premiere`, `/particular/cursos/davinci`, `/particular/cursos/fullstack`, `/particular/cursos/photoshop`, `/particular/cursos/modelagem-3d`, `/particular/cursos/ads`, `/particular/cursos/agentes-ia`, `/particular/cursos/revit`, `/particular/cursos/typescript`, `/particular/cursos/linux`, `/particular/cursos/excel-power-bi`, `/`, `/cursos`, `/cursos/camps`, `/sobre`
- **Onde:** [src/routes/particular.cursos.manutencao.tsx:13](../../../../src/routes/particular.cursos.manutencao.tsx#L13)
- **Evidência:** Contagem via courses.json: manutencao.tsx:12 description 225 chars; premiere.tsx:12 210; davinci.tsx:12 209; fullstack.tsx:12 207; photoshop.tsx:12 198; modelagem-3d.tsx:12 194; revit 182; agentes-ia 182; ads 181; typescript 180; linux 179; excel-power-bi 177 (33 dos 52 acima de 155). Titles: ads.tsx:10 94 chars, photoshop.tsx:10 92, manutencao.tsx:10 89, davinci.tsx:10 85. DESIGN_SYSTEM §18: "Meta description rica ... Max ~155 chars".
- **Problema:** Google trunca descriptions ~155-160 chars e titles ~60; o final ("...presencial em Ribeirão Preto" — o diferencial local) some no snippet. Viola o próprio padrão do design system.
- **Correção sugerida:** Encurtar para ≤155 caracteres mantendo "o quê + pra quem + Ribeirão Preto". Exemplo para manutencao: "Monte, conserte e atualize PCs: hardware, diagnóstico e Windows. Aulas individuais e presenciais em Ribeirão Preto." Title: "Curso de Manutenção de Computadores em Ribeirão Preto \| Santos Tech".
- **Esforço:** médio · **Severidade:** Baixa (proposta Média, recalibrada na verificação) · **Também apontado como:** F347
- **Verificação:** confirmado: Manutencao.tsx:13 tem description de ~225 caracteres e o title da linha 11 tem 89. DESIGN_SYSTEM.md:777 pede "Max ~155 chars". O Google só trunca o snippet, sem perda de indexação, por isso rebaixei a severidade.

<a id="f371"></a>

## F371 · ⚪ Padrão de title quebrado: "Particular" posicionado após o nome do software e ausente em 4 cursos

- **Rotas:** `/particular/cursos/davinci`, `/particular/cursos/premiere`, `/particular/cursos/capcut`, `/particular/cursos/canva`, `/particular/cursos/photoshop`, `/particular/cursos/ads`, `/particular/cursos/git`, `/particular/cursos/ia-visual`, `/particular/cursos/python-apis`, `/particular/cursos/typescript`
- **Onde:** [src/routes/particular.cursos.davinci.tsx:10](../../../../src/routes/particular.cursos.davinci.tsx#L10)
- **Evidência:** davinci.tsx:10 "Curso de Edição de Vídeo — DaVinci Resolve Particular em Ribeirão Preto — Santos Tech"; premiere.tsx:10 "...Adobe Premiere Particular em..."; ads.tsx:10 "...Formação Profissional em Programação Particular em...". Sem "Particular": git.tsx:11 "Curso de Git e GitHub para Profissionais em Ribeirão Preto", ia-visual.tsx:10, python-apis.tsx:11, typescript.tsx:10. Os outros 48 seguem "Curso de X Particular em Ribeirão Preto — Santos Tech".
- **Problema:** "DaVinci Resolve Particular" e "Programação Particular" leem como adjetivo do produto, não do curso; e 4 páginas fogem do padrão, perdendo a palavra-chave "particular" que define a rota.
- **Correção sugerida:** Corrigir só os ~10 desvios, sem reescrever os 48 que seguem o padrão. Sem 'Particular' (git, ia-visual, python-apis, typescript): 'Curso Particular de Git e GitHub em Ribeirão Preto — Santos Tech' etc. Com o padrão '— X Particular' (davinci, premiere, capcut, canva, photoshop, ads): 'Curso Particular de DaVinci Resolve em Ribeirão Preto — Santos Tech'.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: git.tsx:11, ia-visual.tsx:10, python-apis.tsx:11 e typescript.tsx:10 não têm 'Particular'. davinci, premiere, capcut, canva, photoshop e ads usam 'Categoria — Software Particular'. Os outros 48 seguem 'Curso de X Particular em Ribeirão Preto'.
