# Layout, espaçamento e responsividade — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#63) · nota da dimensão **5.5/10** · **48 achados** (🔴 1 · 🟠 2 · 🟡 20 · ⚪ 25)

**Estado geral:** a base de layout é sólida, mas o site foi afinado para o desktop largo. No celular e no tablet, onde estão os pais, aparecem sobreposições, buracos e páginas longas demais.

- **Elementos fixos disputam a mesma área.** Botão do WhatsApp, banner de cookies, header de 80px e menu sem rolagem ficam por cima de textos, CTAs e até do link de cookies exigido pela LGPD. **Consequência:** toques caem no botão errado e a primeira tela perde espaço útil.
- **A técnica de "vazar" o fundo por baixo da sidebar do /particular é frágil.** Ela deixa o menu ilegível (texto branco sobre cinza), cria rolagem lateral em metade das páginas de curso e põe decorações por baixo do menu. **Consequência:** o adulto que compra curso particular vê um site com cara de quebrado.
- **Componentes feitos para texto curto quebram com texto real.** Métricas, selos, eyebrows e botões principais quebram linha ou se sobrepõem no celular. **Consequência:** a hierarquia se inverte justamente na primeira dobra.
- **O ritmo vertical não segue regra.** O espaçamento entre seções varia (py-8 a py-24) sem padrão, há seções vazias e conteúdo repetido. **Consequência:** as páginas de venda passam de 12 a 18 mil px e o pai desiste antes do preço.
- **Os pontos de quebra (breakpoints, larguras em que o layout muda) estão mal calibrados.** Em 768px (iPad) e em 1024–1279px (notebook) o header colide, os cards ficam espremidos ou esticados e a coluna fica vazia.
- **A grade não é única.** Largura de container, raio de card e alinhamento mudam de uma seção para outra, e as linhas de texto passam de 80 caracteres.

**Recomendação:** corrigir primeiro a sidebar do /particular e os elementos fixos no mobile, que são trocas pequenas com efeito direto em venda e LGPD.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F159`](#f159) | 🔴 | Pele IDE e landing /particular não vazam o fundo: sidebar inteira com texto branco sobre cinza-claro | `/particular`, `/particular/cursos/python` +2 | [src/components/course-skins/ide.tsx:62](../../../../src/components/course-skins/ide.tsx#L62) | pequeno |
| [`F125`](#f125) | 🟠 | FAB do WhatsApp cobre o link "Cookies" do rodapé no mobile (revogação LGPD) | `/`, `/links` +6 | [src/components/site-footer.tsx:85](../../../../src/components/site-footer.tsx#L85) | trivial |
| [`F142`](#f142) | 🟠 | Métricas do hero estouram a coluna no mobile e tablet ("Avançado"/"Hands-on" sobrepostos) | `/cursos/academies` | [src/components/course-page.tsx:130](../../../../src/components/course-page.tsx#L130) | trivial |
| [`F124`](#f124) | 🟡 | Header colide com o logo no tablet (768px): nav desktop entra cedo demais | `/`, `/sobre` +7 | [src/components/site-header.tsx:101](../../../../src/components/site-header.tsx#L101) | trivial |
| [`F127`](#f127) | 🟡 | ScrollStage fixa 340vh: 3+ telas de azul quase vazias no mobile e tablet | `/` | [src/components/scroll-stage.tsx:70](../../../../src/components/scroll-stage.tsx#L70) | médio |
| [`F128`](#f128) | 🟡 | Depoimentos fixos em 300vh deixam ~280–340px vazios antes do botão do Google | `/` | [src/components/testimonials.tsx:218](../../../../src/components/testimonials.tsx#L218) | pequeno |
| [`F131`](#f131) | 🟡 | Menu mobile sem altura máxima nem scroll: itens finais somem em telas baixas | `todas as rotas com SiteHeader` | [src/components/site-header.tsx:150](../../../../src/components/site-header.tsx#L150) | pequeno |
| [`F134`](#f134) | 🟡 | Banner de cookies no mobile ocupa ~70% da tela e joga o FAB por cima do texto do hero | `todas as rotas (1ª visita)` | [src/components/cookie-consent.tsx:200](../../../../src/components/cookie-consent.tsx#L200) | pequeno |
| [`F141`](#f141) | 🟡 | Selo "5,0 · 329 avaliações no Google" quebra desalinhado no mobile | `/` | [src/components/testimonials.tsx:115](../../../../src/components/testimonials.tsx#L115) | trivial |
| [`F144`](#f144) | 🟡 | ToolGrid com 1 ferramenta deixa metade da seção vazia no desktop | `/cursos/create/8-9-anos` | [src/components/course-page.tsx:765](../../../../src/components/course-page.tsx#L765) | trivial |
| [`F146`](#f146) | 🟡 | Elementos decorativos do hero sobrepõem o CTA primário e encostam no breadcrumb (desktop) | `/cursos/create`, `/cursos/create/9-10-anos` +6 | [src/components/decorative-elements.tsx:87](../../../../src/components/decorative-elements.tsx#L87) | pequeno |
| [`F147`](#f147) | 🟡 | Ritmo vertical no mobile: py-20 fixo gera vazios de 160–220px entre seções | `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`, `/cursos/academies` +3 | [src/components/course-page.tsx:204](../../../../src/components/course-page.tsx#L204) | pequeno |
| [`F149`](#f149) | 🟡 | CTA primário do hero quebra em 2 linhas no mobile em todas as páginas CREATE | `/cursos/create`, `/cursos/create/8-9-anos` +8 | [src/components/course-page.tsx:244](../../../../src/components/course-page.tsx#L244) | trivial |
| [`F151`](#f151) | 🟡 | Hero de /cursos não tem CTA: primeira tela do mobile termina sem ação | `/cursos` | [src/routes/cursos.index.tsx:260](../../../../src/routes/cursos.index.tsx#L260) | trivial |
| [`F160`](#f160) | 🟡 | Overflow horizontal no desktop em 25 das 52 páginas de curso (docScrollWidth 1442–1522 px) | `/particular/cursos/excel-power-bi`, `/particular/cursos/power-bi` +22 | [src/routes/particular.tsx:303](../../../../src/routes/particular.tsx#L303) | pequeno |
| [`F161`](#f161) | 🟡 | Decorações do hero ancoradas em left-0 aparecem sob/sobre a sidebar (REC, régua, trilho de rack) | `/particular/cursos/davinci`, `/particular/cursos/premiere` +8 | [src/components/course-skins/design.tsx:197](../../../../src/components/course-skins/design.tsx#L197) | pequeno |
| [`F164`](#f164) | 🟡 | Landing: três seções seguidas com o mesmo bg-neutral-50 criam buracos de ~160 px | `/particular` | [src/routes/particular.index.tsx:532](../../../../src/routes/particular.index.tsx#L532) | trivial |
| [`F165`](#f165) | 🟡 | Landing: cards 'Escolha o seu caminho' com alturas desiguais na mesma linha | `/particular` | [src/routes/particular.index.tsx:298](../../../../src/routes/particular.index.tsx#L298) | trivial |
| [`F166`](#f166) | 🟡 | Landing tablet: grid vira 3 colunas em 768 px e os cards ficam com ~213 px de largura | `/particular` | [src/routes/particular.index.tsx:296](../../../../src/routes/particular.index.tsx#L296) | trivial |
| [`F169`](#f169) | 🟡 | Páginas de curso terminam sem rodapé (só '©'), enquanto a landing tem footer completo | `todas as 52 páginas de /particular/cursos/*` | [src/components/course-skins/common.tsx:372](../../../../src/components/course-skins/common.tsx#L372) | pequeno |
| [`F170`](#f170) | 🟡 | Hero mobile empilha a arte inteira abaixo do texto e o hero passa de uma tela; páginas chegam a 18 mil px | `todas as 52 páginas de /particular/cursos/*` | [src/components/course-skins/design.tsx:208](../../../../src/components/course-skins/design.tsx#L208) | médio |
| [`F301`](#f301) | 🟡 | Home repete a mesma mensagem várias vezes: prova social 5×, Portal 3×, dois fechamentos consecutivos | `/` | [src/routes/index.tsx:981](../../../../src/routes/index.tsx#L981) | médio |
| [`F308`](#f308) | 🟡 | Página de curso infantil mostra os 4 módulos três vezes (trilha de selos, cards e acordeão) | `/cursos/create/*-anos`, `/cursos/junior/*-anos` | [src/components/course-page.tsx:611](../../../../src/components/course-page.tsx#L611) | médio |
| [`F008`](#f008) | ⚪ | Raio de card: DS pede rounded-2xl, mas rounded-xl domina (240×) e a mesma página mistura 3 raios | `/`, `/cursos/*/*-anos (9 páginas)` +6 | [src/components/course-page.tsx:453](../../../../src/components/course-page.tsx#L453) | pequeno |
| [`F126`](#f126) | ⚪ | FAB de 56px + anéis de pulso cobre texto e CTAs no canto inferior direito do mobile | `/`, `/contato` +6 | [src/components/whatsapp-fab.tsx:32](../../../../src/components/whatsapp-fab.tsx#L32) | trivial |
| [`F129`](#f129) | ⚪ | Contato: grid vira 2 colunas só em lg; tablet fica com cards de 720px e CTA lá embaixo | `/contato` | [src/routes/contato.tsx:56](../../../../src/routes/contato.tsx#L56) | trivial |
| [`F130`](#f130) | ⚪ | Hero da home no tablet: coluna direita vazia e 130px de gradiente sem conteúdo | `/` | [src/components/hero-collage.tsx:78](../../../../src/components/hero-collage.tsx#L78) | trivial |
| [`F132`](#f132) | ⚪ | Menu mobile abre sem scrim: conteúdo da página aparece colado sob o botão Entrar | `todas as rotas com SiteHeader` | [src/components/site-header.tsx:146](../../../../src/components/site-header.tsx#L146) | pequeno |
| [`F133`](#f133) | ⚪ | Header fixo de 80px ocupa 10–12% do viewport no celular | `todas as rotas com SiteHeader`, `todas as rotas (componente global)` | [src/components/site-header.tsx:89](../../../../src/components/site-header.tsx#L89) | pequeno |
| [`F135`](#f135) | ⚪ | Páginas legais: linhas de 96 caracteres no desktop (bloco de 720px a 15px) | `/privacidade`, `/termos` | [src/components/legal-page.tsx:17](../../../../src/components/legal-page.tsx#L17) | trivial |
| [`F136`](#f136) | ⚪ | 404 e tela de erro usam min-h-screen dentro do layout: conteúdo descentralizado e rodapé fora da dobra | `/pagina-que-nao-existe-404 (qualquer 404)` | [src/routes/__root.tsx:35](../../../../src/routes/__root.tsx#L35) | trivial |
| [`F138`](#f138) | ⚪ | Padding do hero difere entre páginas institucionais (py-16/20 vs py-20/28 vs padrão DS) | `/sobre`, `/sobre/visao`, `/contato` | [src/routes/sobre.visao.tsx:61](../../../../src/routes/sobre.visao.tsx#L61) | trivial |
| [`F139`](#f139) | ⚪ | Home alterna py-20 / py-24 / py-12 / py-8 entre seções sem regra | `/` | [src/routes/index.tsx:585](../../../../src/routes/index.tsx#L585) | pequeno |
| [`F140`](#f140) | ⚪ | Pílula eyebrow do hero quebra em 2 linhas no mobile | `/` | [src/routes/index.tsx:396](../../../../src/routes/index.tsx#L396) | trivial |
| [`F143`](#f143) | ⚪ | Grids lg:grid-cols-2 viram coluna única no tablet: cards de 705px e linhas de 120–155 caracteres | `/cursos`, `/cursos/academies` | [src/routes/cursos.index.tsx:203](../../../../src/routes/cursos.index.tsx#L203) | trivial |
| [`F145`](#f145) | ⚪ | BridgeBanner: parágrafo de 928px (~116 caracteres por linha) no desktop | `/cursos/create/8-9-anos`, `/cursos/create/12-13-anos` +3 | [src/components/course-page.tsx:736](../../../../src/components/course-page.tsx#L736) | trivial |
| [`F148`](#f148) | ⚪ | /cursos: padding vertical inconsistente entre seções (py-12 vs py-16/py-20) | `/cursos` | [src/routes/cursos.index.tsx:289](../../../../src/routes/cursos.index.tsx#L289) | trivial |
| [`F152`](#f152) | ⚪ | Larguras de container variam 5 vezes na mesma sales page (1280/1152/1024/896/768px) | `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`, `/cursos/academies` +6 | [src/components/course-page.tsx:572](../../../../src/components/course-page.tsx#L572) | pequeno |
| [`F154`](#f154) | ⚪ | Métricas do hero da Colônia quebram em 3+1 no desktop ("2×/ano" órfão) | `/cursos/camps` | [src/routes/cursos.camps.tsx:212](../../../../src/routes/cursos.camps.tsx#L212) | trivial |
| [`F155`](#f155) | ⚪ | Eyebrow do hero quebra em 2 linhas no mobile por causa do tracking largo | `/cursos/create/13-14-anos`, `/cursos/create` | [src/components/course-page.tsx:220](../../../../src/components/course-page.tsx#L220) | trivial |
| [`F157`](#f157) | ⚪ | AgeBlock do JR: moldura rotacionada invade o gutter de 16px no mobile | `/cursos/junior` | [src/routes/cursos.junior.index.tsx:97](../../../../src/routes/cursos.junior.index.tsx#L97) | trivial |
| [`F162`](#f162) | ⚪ | Breakpoint lg compartilhado: em 1024–1279 px a sidebar toma 256 px e os grids já viram 2/3/5 colunas | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/components/course-skins/common.tsx:145](../../../../src/components/course-skins/common.tsx#L145) | pequeno |
| [`F163`](#f163) | ⚪ | Landing: seções com py-16 e py-20 misturadas sem motivo (DS §4.2 pede py-20) | `/particular` | [src/routes/particular.index.tsx:259](../../../../src/routes/particular.index.tsx#L259) | trivial |
| [`F167`](#f167) | ⚪ | Landing: cabeçalhos de seção alternam entre centralizados e alinhados à esquerda | `/particular` | [src/routes/particular.index.tsx:346](../../../../src/routes/particular.index.tsx#L346) | trivial |
| [`F168`](#f168) | ⚪ | Texto corrido sem max-width: linhas de 101 a 148 caracteres no desktop | `/particular`, `/particular/cursos/informatica` +3 | [src/components/course-skins/informatica.tsx:527](../../../../src/components/course-skins/informatica.tsx#L527) | trivial |
| [`F171`](#f171) | ⚪ | Diferenciais: 10 cards em coluna única no mobile somam ~2,5 mil px de rolagem | `todas as 52 páginas de /particular/cursos/*` | [src/components/course-skins/common.tsx:145](../../../../src/components/course-skins/common.tsx#L145) | trivial |
| [`F174`](#f174) | ⚪ | Largura do container varia entre max-w-6xl e max-w-7xl na mesma página de curso | `/particular/cursos/informatica`, `/particular/cursos/office` | [src/components/course-skins/informatica.tsx:328](../../../../src/components/course-skins/informatica.tsx#L328) | trivial |
| [`X07`](#x07) | ⚪ | IA Visual: 'Para quem é' ocupa 3.639 px no celular, 3× as outras páginas | `/particular/cursos/ia-visual` | [src/components/course-skins/variants/ia-visual.tsx:251](../../../../src/components/course-skins/variants/ia-visual.tsx#L251) | pequeno |

<a id="f159"></a>

## F159 · 🔴 Pele IDE e landing /particular não vazam o fundo: sidebar inteira com texto branco sobre cinza-claro

- **Rotas:** `/particular`, `/particular/cursos/python`, `/particular/cursos/typescript`, `todas as 14 páginas com tema 'programacao'`
- **Onde:** [src/components/course-skins/ide.tsx:62](../../../../src/components/course-skins/ide.tsx#L62)
- **Evidência:** routes/particular__cursos__python/desktop.fold.png e particular__cursos__typescript/desktop.fold.png: coluna da sidebar em branco/cinza-claro com rótulos 'Início', 'Cursos', 'INFORMÁTICA', 'OFFICE' etc. praticamente invisíveis (só o grupo ativo em azul aparece); particular__cursos__python/desktop.full.png mostra a coluna esquerda branca ao longo de toda a página enquanto o conteúdo é azul-marinho. routes/particular/desktop.fold.png: mesmo efeito na landing ('Cursos', 'INFORMÁTICA'… brancos sobre #fafafa). Código: ide.tsx:60 põe `bg-(--hero-bg)` no wrapper (que respeita o pl-64) e a section `sb-bleed` em ide.tsx:62 não tem background; particular.index.tsx:164 usa `<section className="relative isolate overflow-hidden bg-neutral-900">` sem `sb-bleed`.
- **Problema:** O ponto amostrado (dentro do hero escuro) define tom 'dark' → texto branco, mas o que está atrás da sidebar é o `bg-neutral-50` do layout (particular.tsx:279), não o hero. Resultado: navegação ilegível na landing e em todas as páginas de programação, do topo ao rodapé.
- **Correção sugerida:** 1) ide.tsx:60 tirar bg do wrapper e pôr `bg-(--hero-bg)` nas sections sb-bleed (62, 137; a 147 vira `bg-(--hero-bg)` + overlay `bg-white/[0.02]`). 2) particular.index.tsx:164 e demais sections da landing: adicionar `sb-bleed`. 3) Blindar o sampler (particular.tsx:216): usar `document.elementsFromPoint(aside.offsetWidth/2, y)` ignorando o próprio aside, para medir o fundo que realmente está atrás da sidebar.
- **Esforço:** pequeno · **Severidade:** Crítica
- **Verificação:** confirmado: Screenshots python/desktop.fold e particular/desktop.fold: rótulos brancos sobre neutral-50, só item ativo legível. Causa: sampler (particular.tsx:219) mede x=sidebar+24 (hero escuro), mas a section ide.tsx:62 não tem fundo e a landing (particular.index.tsx:164) não usa sb-bleed. Regressão do PR #56. · ✅ **Conferido ao vivo pelo CTO:** screenshot de /particular/cursos/python em 1440px: só o item ativo da sidebar é legível.

<a id="f125"></a>

## F125 · 🟠 FAB do WhatsApp cobre o link "Cookies" do rodapé no mobile (revogação LGPD)

- **Rotas:** `/`, `/links`, `/contato`, `todas as rotas (rodapé global)`, `/cursos`, `/cursos/create/8-9-anos`, `/cursos/junior/5-6-anos`, `todas as rotas (componente global)`
- **Onde:** [src/components/site-footer.tsx:85](../../../../src/components/site-footer.tsx#L85)
- **Evidência:** routes/cursos/mobile.footer.png: "© 2026 Santos Tech. Todos os direitos reserva…" e o link "Co(okies)" ficam atrás do botão verde. Medido ao vivo em 375px com o rodapé no fim da rolagem: <p> legal vai de x=39 a 336 e o FAB ocupa x=299–355 (sobreposição). Código: rodapé `py-6` sem espaço reservado (site-footer.tsx l.85) e FAB `fixed bottom-5 right-5 h-14 w-14` (whatsapp-fab.tsx l.32).
- **Problema:** No fim da rolagem o FAB (56px + anéis de pulso) ocupa exatamente a área onde a linha de links legais termina no mobile. O botão "Cookies" é o mecanismo de revogar consentimento (comentário na l.92-93 cita LGPD art. 8º §5º) e fica inclicável/ilegível.
- **Correção sugerida:** Mesma correção de F075: container da l.85 com `pb-24 sm:pb-6`, assim o link Cookies (revogação LGPD, l.92-96) fica acima do FAB de 56px no fim da rolagem.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: Confirmado em home/mobile.footer.png: botão 'Cookies' fica atrás do FAB verde. Esse link é o jeito de revogar o consentimento (comentário l.92-93, LGPD art. 8º §5º). Duplicata de F075: um único commit resolve os dois.

<a id="f142"></a>

## F142 · 🟠 Métricas do hero estouram a coluna no mobile e tablet ("Avançado"/"Hands-on" sobrepostos)

- **Rotas:** `/cursos/academies`
- **Onde:** [src/components/course-page.tsx:130](../../../../src/components/course-page.tsx#L130)
- **Evidência:** routes/cursos__academies/tablet.fold.png e mobile.seg02.png mostram "Avançado" invadindo "Hands-on" (texto ilegível). Medido ao vivo: em 375px o <p> de 36px tem scrollWidth 195 e 143 numa célula de 135px; em 768px (sm:grid-cols-4, 48px) scrollWidth 260 e 190 numa célula de 142px. Código: MetricCard `text-4xl sm:text-5xl` (l.130) dentro de `grid grid-cols-2 sm:grid-cols-4` (l.294), sem quebra nem redução de fonte para valores textuais.
- **Problema:** O componente foi dimensionado para números curtos ("40", "80h"); qualquer valor em palavra estoura a célula e sobrepõe a vizinha, quebrando a barra de resumo (item 2 da sales page, DS §9.4) justamente na primeira tela.
- **Correção sugerida:** Duas frentes. Código (course-page.tsx:127-133): `const textual = /[A-Za-zÀ-ÿ]{4,}/.test(value); <div className="min-w-0 text-center"><p className={`font-black text-white ${textual ? "text-2xl sm:text-3xl lg:text-4xl" : "text-4xl sm:text-5xl"}`}>{value}</p>...`. Não usar `[overflow-wrap:anywhere]` — quebraria "Avançado" no meio da palavra. Conteúdo (cursos.academies.tsx:293-294): trocar `{ value: "Avançado", label: "Nível técnico" }`→`{ value: "2", label: "Áreas: Robótica e IA" }` e `{ value: "Hands-on", label: "100% prático" }`→`{ value: "100%", label: "Mão na massa" }`. Verificar também "Unity" e "Mestre" (13-14) em 375px após a mudança.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: tablet.fold.png e mobile.seg02.png de cursos__academies: "Avançado" sobrepõe "Hands-on", ilegível na primeira tela. Código: MetricCard `text-4xl sm:text-5xl` (:130) em `grid-cols-2 sm:grid-cols-4` (:294) sem quebra/redução; valores em palavra em cursos.academies.tsx:293-294. Não há overflow horizontal da página (overflowEls vazio), o dano é intra-card.

<a id="f124"></a>

## F124 · 🟡 Header colide com o logo no tablet (768px): nav desktop entra cedo demais

- **Rotas:** `/`, `/sobre`, `/contato`, `todas as rotas com SiteHeader`, `/cursos`, `/cursos/camps`, `/cursos/academies`, `/cursos/create/8-9-anos`, `todas as rotas (componente global)`
- **Onde:** [src/components/site-header.tsx:101](../../../../src/components/site-header.tsx#L101)
- **Evidência:** routes/cursos/tablet.fold.png, routes/cursos__camps/tablet.fold.png e routes/cursos__academies/tablet.fold.png mostram "SANTOS TECHInício Programas Sobre Blog Contato Entrar" sem espaço entre logo e nav. Medido ao vivo em 768px: borda direita do link do logo = 190px e borda esquerda do <nav> = 190px (gap zero). Código: `<nav className="hidden items-center gap-8 md:flex">` (l.101) dentro de `flex h-20 ... justify-between px-4 sm:px-6` (l.89).
- **Problema:** Em 768px a soma logo (≈190px) + 6 itens + 5 gaps de 32px + botão Entrar + gutters passa da largura útil; o flex `justify-between` zera o espaço entre marca e nav e o texto do logo cola no primeiro link. É exatamente a largura do iPad em retrato, dispositivo comum de pais.
- **Correção sugerida:** Passar a nav para lg: `hidden items-center gap-8 lg:flex` (l.101), toggle `lg:hidden` (l.137) e painel mobile `lg:hidden` (l.150). Adicionar `shrink-0` no Link do logo (l.90).
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: routes/cursos/tablet.fold.png mostra 'SANTOS TECHInício' colado, gap zero entre o logo e a nav no iPad em retrato. É defeito visual evidente, mas a navegação continua funcionando: média.

<a id="f127"></a>

## F127 · 🟡 ScrollStage fixa 340vh: 3+ telas de azul quase vazias no mobile e tablet

- **Rotas:** `/`
- **Onde:** [src/components/scroll-stage.tsx:70](../../../../src/components/scroll-stage.tsx#L70)
- **Evidência:** routes/home/mobile.seg02.png: viewport inteiro azul-escuro com o celular apagado (tela preta) e nada mais; mobile.seg05.png: viewport inteiro azul/índigo vazio antes dos stats; tablet.seg02.png: título a 40% de opacidade e celular minúsculo em 1024px de altura; desktop.seg02.png: 900px de azul com só o topo do celular. Código: `heightVh = 340` (l.70), `pin` com `pinSpacing:false` (l.156-157), device começa em `scale(0.5) translateY(110px)` e foto em `translateY(100%)` (l.107-110). manifest: home mobile pageHeight 24089px (≈28 telas).
- **Problema:** Logo após o hero, o pai no celular rola 3,4 telas onde o único conteúdo é um aparelho preto crescendo; cada destaque aparece um por vez e o resto é fundo. É o maior "buraco" de ritmo vertical do site e antecede stats e depoimentos (prova social). DS §4.5 pede respiro, não vazio.
- **Correção sugerida:** No mobile, encurtar e começar com conteúdo: passar `heightVh` menor em telas ≤MOBILE_BP (ex.: 240); título visível desde p=0 (`lerp(0,1,clamp(p/0.08))` → começar em 1 no mobile); foto `lerp(40,0,...)` em vez de 100 (l.110) para o aparelho nunca aparecer preto; `start = 0.25` no mobile.
- **Esforço:** médio · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: mobile.seg02.png confirma: só um aparelho preto sobre azul, com o título em opacidade 0 (l.113). Mas é scrollytelling intencional: os destaques aparecem um a um e seg05 mostra a saída do pin. 'Três telas vazias' é exagero; o frame inicial vazio é real. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f128"></a>

## F128 · 🟡 Depoimentos fixos em 300vh deixam ~280–340px vazios antes do botão do Google

- **Rotas:** `/`
- **Onde:** [src/components/testimonials.tsx:218](../../../../src/components/testimonials.tsx#L218)
- **Evidência:** routes/home/desktop.seg08.png: cards terminam em y≈570 e o botão "Ver as 329 avaliações no Google" só em y≈853; routes/home/tablet.seg08.png: cards em y≈262, botão em y≈605; desktop.seg06/seg07 repetem o mesmo título por 3 telas. Código: `style={{ height: "300vh" }}` (l.218), pin `h-screen flex-col justify-center` (l.219) e GoogleButton fora do pin em bloco `pb-20` separado (l.235-237).
- **Problema:** O conteúdo fixado (~560px) é centralizado num viewport de 900px e, ao soltar o pin, o botão vem num bloco separado — soma ~170px de sobra interna + margens, gerando um vazio visível entre os cards e o CTA. No mobile o pin também roda (mobile.seg07.png), com o hint "role para ver mais" e mais espaço morto.
- **Correção sugerida:** Mover `<GoogleButton />` para dentro do pin (após o hint, `mt-6`) e trocar o bloco l.235-237 por nada (ou `pb-12`); reduzir para `height: "200vh"`. Em <1024px, usar o fallback marquee: no useLayoutEffect, `setEnhanced(!reduce && window.matchMedia("(min-width: 1024px)").matches)`.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: desktop.seg08.png: cards terminam ~y570 e o botão Google aparece só ~y853, vazio de ~280px. Código: 300vh (l.218), pin h-screen justify-center (l.219), botão fora em pb-20 (l.235-237).

<a id="f131"></a>

## F131 · 🟡 Menu mobile sem altura máxima nem scroll: itens finais somem em telas baixas

- **Rotas:** `todas as rotas com SiteHeader`
- **Onde:** [src/components/site-header.tsx:150](../../../../src/components/site-header.tsx#L150)
- **Evidência:** specials/menu-mobile-open.png: com tudo fechado o header + menu já vai até y≈385px de 844 (5 itens de 40px + Entrar). Código: painel `h-0 overflow-hidden border-t ... md:hidden` (l.150) dentro de `<header className="fixed ...">` (l.88); acordeão Programas adiciona ≈9 linhas (l.174-187) e Sobre +3 (l.200-213), sem `max-h`/`overflow-y-auto`.
- **Problema:** O header é fixo e o painel cresce com `height:auto`; com Programas expandido o conjunto passa de ~690px e, em viewports de 667px (iPhone SE/8, landscape), Contato e Entrar ficam fora da tela sem forma de rolar — o menu simplesmente corta.
- **Correção sugerida:** Wrapper l.150: adicionar `max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain`; no GSAP (l.68) animar até `Math.min(el.scrollHeight, window.innerHeight - 80)`. Header é fixed, então sem isso o excesso fica inalcançável.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Painel dentro de header `fixed` (l.88) sem max-h/overflow (l.150). Screenshot menu-mobile-open.png: menu fechado já vai a ~385px CSS; Programas aberto soma ~9 linhas de 40px → passa de 667px (iPhone SE/landscape), Contato/Entrar ficam fora.

<a id="f134"></a>

## F134 · 🟡 Banner de cookies no mobile ocupa ~70% da tela e joga o FAB por cima do texto do hero

- **Rotas:** `todas as rotas (1ª visita)`
- **Onde:** [src/components/cookie-consent.tsx:200](../../../../src/components/cookie-consent.tsx#L200)
- **Evidência:** specials/cookie-banner.mobile.png: card de y≈1050 a 1650 (@2x) = ~300px de 844 visíveis + FAB deslocado para y≈955 cobrindo "programação e o domínio real do computador". Código: wrapper `fixed inset-x-3 bottom-3` (l.200), card `p-4 ... max-w-[27rem]` com título, parágrafo longo, 2 botões, link e nota (l.207-323); FAB `translateY(calc(-1*min(var(--st-consent-height),45vh)))` (whatsapp-fab.tsx:134).
- **Problema:** O banner em si é legítimo, mas a combinação empilha dois elementos fixos sobre o hero: o card cobre o CTA principal e o FAB, empurrado para cima, cobre o parágrafo. Além disso o card usa gutter de 12px (`inset-x-3`) enquanto todo o site usa 16px.
- **Correção sugerida:** Confirmado na evidência: card ≈300px de 844 (36%, não 70%) e o FAB, empurrado por `translateY(calc(-1*min(var(--st-consent-height),45vh)))` (whatsapp-fab.tsx:32), fica em cima do parágrafo do hero. Correção em 2 partes: (1) em cookie-consent.tsx, no useEffect da linha 137, além de `--st-consent-height` fazer `root.toggleAttribute("data-consent-open", open && view === "prompt")` (e remover no cleanup); no FAB trocar o translate por esconder só no mobile: `max-sm:[html[data-consent-open]_&]:pointer-events-none max-sm:[html[data-consent-open]_&]:opacity-0 transition-opacity duration-300` (Tailwind v4 aceita variante arbitrária empilhada). O FAB volta assim que a pessoa decide — o banner dura segundos, não vale disputar espaço com o hero. Manter o translate atual para o painel Gerenciar aberto pelo rodapé (já tem consentimento, o FAB pode subir). (2) Compactar o card mobile: no `<p>` da linha 320 usar `hidden sm:block` (a mesma informação já está no ManagePanel/rodapé) e trocar o wrapper `inset-x-3 bottom-3` por `inset-x-4 bottom-4` para alinhar ao gutter de 16px (`px-4`) do site inteiro.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Existe, mas exagerado: specials/cookie-banner.mobile.png (780x1688 @2x) mostra card y≈1050→1650 = ~300 de 844 CSS px ≈ 36%, não '70%'. FAB sobre o texto do hero confirmado (whatsapp-fab.tsx:32, não :134). Gutter 12px (`inset-x-3`, l.200) vs `px-4` do DS §4.1 confirmado. Comportamento do FAB é intencional (comentário l.10-15). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f141"></a>

## F141 · 🟡 Selo "5,0 · 329 avaliações no Google" quebra desalinhado no mobile

- **Rotas:** `/`
- **Onde:** [src/components/testimonials.tsx:115](../../../../src/components/testimonials.tsx#L115)
- **Evidência:** routes/home/mobile.seg07.png: pílula amarela com estrelas + "5,0" à esquerda e "· 329 avaliações no Google" quebrado em 2 linhas à direita, ponto-médio órfão no início da linha. Código: `inline-flex items-center gap-2.5 rounded-full border-2 ... px-5 py-2` (l.115-119) sem `flex-wrap`.
- **Problema:** Em 390px o conteúdo (≈340px) excede a largura útil e o flex empurra o último span para wrap interno, gerando uma pílula de 2 alturas com texto centralizado apenas no 2º span.
- **Correção sugerida:** l.115: `inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1`; l.118: tirar o "· " inicial e usar `whitespace-nowrap text-sm` em "329 avaliações no Google", para quebrar a linha inteira abaixo das estrelas no mobile.
- **Esforço:** trivial · **Severidade:** Média (proposta Baixa, recalibrada na verificação)
- **Verificação:** confirmado: home/mobile.seg07.png: o texto "· 329 avaliações no Google" quebra em 2 linhas centralizadas dentro da pílula, com o ponto órfão. É um selo de confiança na home mobile e a quebra fica visível.

<a id="f144"></a>

## F144 · 🟡 ToolGrid com 1 ferramenta deixa metade da seção vazia no desktop

- **Rotas:** `/cursos/create/8-9-anos`
- **Onde:** [src/components/course-page.tsx:765](../../../../src/components/course-page.tsx#L765)
- **Evidência:** Medido ao vivo em 1440px: grid de 1088px com um único card de 534px alinhado à esquerda (metade direita vazia). Código: `const cols = tools.length >= 4 ? "lg:grid-cols-4" : tools.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"` (l.765) + `grid gap-5 sm:grid-cols-2 ${cols}` (l.779) — não há caso para 1 item. Em cursos.create.8-9-anos.tsx TOOLS tem 1 entrada (l.175-182).
- **Problema:** A seção "Uma ferramenta, mil possibilidades" fica visualmente desbalanceada: título centralizado e um card órfão encostado na esquerda, contrariando o "respiro" e a hierarquia do DS §4.5.
- **Correção sugerida:** course-page.tsx:765 e :779 — `const cols = tools.length === 1 ? "mx-auto max-w-xl" : tools.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : tools.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";` e `<div className={`mt-12 grid gap-5 ${cols}`}>`. Com 1 item o card fica centralizado sob o título centralizado; com 2 itens deixa de forçar `lg:grid-cols-2` redundante. Nenhuma outra rota é afetada (8-9 é a única com 1 ferramenta).
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: course-page.tsx:765 não trata 1 item (cai em `lg:grid-cols-2`) e :779 `sm:grid-cols-2` — card único ocupa só a coluna esquerda, título centralizado (:769). cursos.create.8-9-anos.tsx:175-182 tem 1 ferramenta. Prova é o código: desktop.full.png está em branco abaixo de ~20% (Reveal não disparou), não serve de evidência visual.

<a id="f146"></a>

## F146 · 🟡 Elementos decorativos do hero sobrepõem o CTA primário e encostam no breadcrumb (desktop)

- **Rotas:** `/cursos/create`, `/cursos/create/9-10-anos`, `/cursos/create/12-13-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`
- **Onde:** [src/components/decorative-elements.tsx:87](../../../../src/components/decorative-elements.tsx#L87)
- **Evidência:** routes/cursos__create__9-10-anos/desktop.fold.png e routes/cursos__create/desktop.fold.png: hexágono azul encostado/sobre a borda esquerda do botão verde; routes/cursos__create__12-13-anos/desktop.fold.png idem; routes/cursos__junior__5-6-anos/desktop.fold.png: estrela sobre o "← PROGRAMA JR". Medido ao vivo em 1440px (9-10): svg Hexagon x=57–113 vs CTA a partir de x=105 (8px de sobreposição); Joystick y=194–233 vs breadcrumb y=235 (2px). Código: variante `games` com Hexagon `top 60% left 4%` (l.89) e Joystick `top 11% left 5%` (l.87); `playful` Star `top 12% left 5%` (l.123). O container max-w-7xl em 1440px começa em x=105 (7,3%), então tudo posicionado em left 4–6% invade a coluna de texto.
- **Problema:** Decoração (pointer-events-none, mas visível) invade a área do CTA principal e do breadcrumb, sujando exatamente os alvos de ação do herói — vai contra DS §11 ("poluição visual", "muitos efeitos ao mesmo tempo").
- **Correção sugerida:** Nas variants, trocar left "4%"/"5%" das peças de borda por left: "max(0.5rem, calc(50% - 44rem))". Como isso ainda invade o padding em 1280px, renderizar as peças laterais só em telas largas: className com "hidden min-[1400px]:block" em Joystick/Hexagon/Star/Cube (l.87, 89, 123, 125).
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: routes/cursos__create__9-10-anos/desktop.fold.png: o joystick se funde ao breadcrumb "← PROGRAMA CREATE" e o hexágono encosta na borda esquerda do CTA verde. O max-w-7xl começa em x≈105 e left 4–5% cai em 57–72px. Pouca opacidade, mas fica bem em cima do alvo de ação.

<a id="f147"></a>

## F147 · 🟡 Ritmo vertical no mobile: py-20 fixo gera vazios de 160–220px entre seções

- **Rotas:** `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`, `/cursos/academies`, `/cursos/camps`, `/cursos/junior`, `/cursos/create`
- **Onde:** [src/components/course-page.tsx:204](../../../../src/components/course-page.tsx#L204)
- **Evidência:** routes/cursos__academies/mobile.seg02.png (wave do hero termina em y≈600 e o eyebrow "POR QUE ACADEMIES" só aparece em y≈800 @2x: ~110px CSS em branco + 80px de pb do hero); routes/cursos__create__13-14-anos/mobile.seg02.png; routes/cursos__camps/mobile.seg04.png (faixa colorida com ~100px vazios após o último card); routes/cursos__junior/mobile.seg05.png (~170px entre o texto da intro e a foto). Medido ao vivo em 375px: todas as seções com padding-top/bottom 80px e hero `py-20` (course-page.tsx l.204 `px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32`; seções l.322, 372, 438, 571, 621, 767, 838, 887, 945 `py-20`).
- **Problema:** No celular (público principal: pais) 80px+80px entre blocos, somados à wave de 60px, criam buracos que parecem fim de página e alongam sales pages já longas (12.000–13.700px). O DS §4.2 define py-20 como padrão, mas o HIG/layout responsivo pede espaçamento proporcional à tela.
- **Correção sugerida:** Em src/components/course-page.tsx trocar `py-20` por `py-14 sm:py-20` nas seções l.322, 372, 438, 571, 621, 767, 838, 887, 945 e no hero l.204 usar `px-4 py-14 sm:px-6 sm:py-24 lg:px-8 lg:py-32`. Em tech-hero.tsx l.67 wave `h-[40px] sm:h-[100px]` (o viewBox 1440x100 + preserveAspectRatio=none escala sem distorcer). Adicionar linha 'Padrão mobile \| `py-14 sm:py-20`' na tabela do DS §4.2. Conferir screenshot mobile de /cursos/academies e /cursos/create/8-9-anos antes de fechar.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Código confirma py-20 fixo em todas as seções (l.322, 372, 438, 571, 621, 767, 838, 887, 945) e hero py-20 + wave de 60px (tech-hero.tsx:67); academies/mobile.seg02.png mostra ~200px CSS vazios. Porém py-20 é o padrão explícito do DS §4.2 — não é violação, e HIG não fixa proporção. Problema real é a soma hero pb + wave + pt da seção seguinte. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f149"></a>

## F149 · 🟡 CTA primário do hero quebra em 2 linhas no mobile em todas as páginas CREATE

- **Rotas:** `/cursos/create`, `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior`, `/cursos/academies`, `todas as 9 páginas de curso`
- **Onde:** [src/components/course-page.tsx:244](../../../../src/components/course-page.tsx#L244)
- **Evidência:** routes/cursos__create__8-9-anos/mobile.fold.png, cursos__create__9-10-anos/mobile.fold.png, cursos__create__13-14-anos/mobile.fold.png e cursos__create/mobile.fold.png: "AGENDAR AULA EXPERIMENTAL / GRÁTIS" em 2 linhas, ícone do WhatsApp isolado à esquerda e texto alinhado à esquerda. Medido ao vivo em 375px: botão com 343×72px (line-height 20px) contra 52px nas páginas JR onde o label cabe. Código: `inline-flex items-center gap-2 rounded-md ... px-8 py-4 text-sm font-black uppercase tracking-wider` (course-page.tsx l.244; idem cursos.create.index.tsx l.246).
- **Problema:** O botão mais importante da página perde a forma de botão (bloco de 72px com texto quebrado e ícone deslocado), enquanto o secundário logo abaixo fica perfeito — hierarquia invertida na primeira tela do celular.
- **Correção sugerida:** course-page.tsx l.244: `inline-flex w-full items-center justify-center gap-2 rounded-md bg-st-green px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:scale-[1.03] glow-green sm:w-auto sm:px-8 sm:tracking-wider`. Aplicar o mesmo no secundário (l.252) com `w-full justify-center sm:w-auto` pra dupla de botões empilhar alinhada no mobile. Idem em cursos.create.index.tsx l.246. Manter o label 'Agendar aula experimental grátis' (é o CTA padrão do site); se ainda quebrar em 343px após tracking-wide/px-6, aí sim encurtar pra 'Agendar aula grátis' em todas as páginas CREATE, nunca só em algumas.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Confirmado em cursos__create__8-9-anos, 13-14-anos e cursos__create mobile.fold.png: label em 2 linhas, ícone isolado à esquerda. Código l.244 (e cursos.create.index.tsx:246) sem text-center/justify-center nem label curto para mobile. Correção: /cursos/junior NÃO tem o problema ('AGENDAR VISITA GUIADA GRÁTIS' cabe em 1 linha em cursos__junior/mobile.fold.png) — remover da lista de rotas.

<a id="f151"></a>

## F151 · 🟡 Hero de /cursos não tem CTA: primeira tela do mobile termina sem ação

- **Rotas:** `/cursos`
- **Onde:** [src/routes/cursos.index.tsx:260](../../../../src/routes/cursos.index.tsx#L260)
- **Evidência:** routes/cursos/mobile.fold.png: hero com eyebrow, H1, parágrafo e legenda de cores; nenhum botão até o fim da tela (a primeira ação, "Quero saber mais", está dentro do card em y≈2.000px, routes/cursos/mobile.full.png). Código: bloco do hero (l.240-261) contém apenas <p>, <h1>, <p> e a legenda de cores — sem CTA primário/secundário, ao contrário do template do DS §9 item 1 ("Headline + sub + CTA primário + CTA secundário").
- **Problema:** É a página-índice dos programas: no celular o pai vê uma tela inteira de introdução e legenda de cores sem um único botão, e precisa rolar ~2 telas até a primeira ação.
- **Correção sugerida:** Após a legenda (fim do Reveal em ~l.260) inserir `<div className="mt-8 flex flex-wrap justify-center gap-3">` com CTA primário `<a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white glow-green">Agendar aula experimental grátis</a>` e secundário `<a href="#tecnologia" …>Ver os programas</a>`.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Hero :236-261 só tem eyebrow, h1, p e legenda de cores; nenhum botão. DESIGN_SYSTEM.md:44 define primário=agendar aula e secundário=ver programas. Os cards são links, mas começam abaixo da dobra no mobile.

<a id="f160"></a>

## F160 · 🟡 Overflow horizontal no desktop em 25 das 52 páginas de curso (docScrollWidth 1442–1522 px)

- **Rotas:** `/particular/cursos/excel-power-bi`, `/particular/cursos/power-bi`, `/particular/cursos/powerpoint`, `/particular/cursos/office`, `/particular/cursos/power-apps`, `/particular/cursos/git`, `/particular/cursos/frontend`, `/particular/cursos/mobile`, `/particular/cursos/n8n`, `/particular/cursos/impressao-3d`, `/particular/cursos/linux`, `/particular/cursos/python-apis`, `/particular/cursos/logica`, `/particular/cursos/revit`, `/particular/cursos/suporte`, `/particular/cursos/funil-vendas`, `/particular/cursos/redes`, `/particular/cursos/typescript`, `/particular/cursos/ciberseguranca`, `/particular/cursos/davinci`, `/particular/cursos/photoshop`, `/particular/cursos/python`, `/particular/cursos/seo`, `/particular/cursos/ia-visual`
- **Onde:** [src/routes/particular.tsx:303](../../../../src/routes/particular.tsx#L303)
- **Evidência:** desktop.json › dom.horizontalOverflow=true e dom.docScrollWidth: excel-power-bi 1522, power-bi 1492, powerpoint 1492, git 1499, frontend/mobile/n8n 1481, office/power-apps 1469, impressao-3d/linux/python-apis 1466, logica/revit/suporte 1454, funil-vendas/redes/typescript 1446, ciberseguranca/davinci/photoshop/python/seo/ia-visual 1442 (viewport 1440). dom.overflowEls aponta as próprias sections `.sb-bleed` (ex.: office: 'section sb-bleed py-20' right 1469 width 1454) e, nas de 1442, os blobs decorativos `absolute -right-40 … w-[560px]`. Código: particular.tsx:305-309 (`margin-left: calc(-1*var(--sbw)); width: calc(100% + var(--sbw))` com transition) e planilha.tsx:170 (wrapper `sb-bleed` com sections `sb-bleed` aninhadas de common.tsx:142-353).
- **Problema:** Metade das páginas de curso ganha barra de rolagem horizontal no desktop (até 82 px de sobra). O truque de margem negativa + largura calculada no `.sb-bleed`, aninhado em wrappers que também são `.sb-bleed`, deixa as sections mais largas que a viewport; a causa exata varia por pele e não foi isolada, mas o sintoma está medido em todas.
- **Correção sugerida:** Curto prazo (seguro, não quebra o sticky da topbar): no wrapper de particular.tsx:279 usar `className={`relative min-h-screen overflow-x-clip ${dark ? ...}`}`. Depois isolar a causa: remover o `transition` de margin/width do `.sb-bleed` (304-309) e o `.sb-bleed` do wrapper aninhado de planilha.tsx:170, e reconferir docScrollWidth=1440 em excel-power-bi, git e office.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Overflow medido em 24 desktop.json (1442–1522px), mas as causas diferem: nas de 1442 são blobs `-right-40 w-[560px]`; nas demais, sections sb-bleed com width 1440 e right 1446–1481 (deslocadas, causa não isolada, possível transição do margin-left). /particular não tem overflow-hidden como o smooth-wrapper de __root.tsx:211. Severidade alta exagerada. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f161"></a>

## F161 · 🟡 Decorações do hero ancoradas em left-0 aparecem sob/sobre a sidebar (REC, régua, trilho de rack)

- **Rotas:** `/particular/cursos/davinci`, `/particular/cursos/premiere`, `/particular/cursos/capcut`, `/particular/cursos/photoshop`, `/particular/cursos/canva`, `/particular/cursos/redes`, `/particular/cursos/manutencao`, `/particular/cursos/ciberseguranca`, `/particular/cursos/linux`, `/particular/cursos/suporte`
- **Onde:** [src/components/course-skins/design.tsx:197](../../../../src/components/course-skins/design.tsx#L197)
- **Evidência:** routes/particular__cursos__davinci/desktop.fold.png (recorte 0–300×0–120): '● REC 00:00:00:00' desenhado em x≈30–130, y≈10, por cima do cabeçalho 'ESCOLA SANTOS TECH' da sidebar; particular__cursos__photoshop/desktop.fold.png: régua 0/100/200 cruzando o topo da sidebar; particular__cursos__redes/desktop.fold.png e manutencao/desktop.fold.png: trilho do rack com numeração 01–12 visível em x=0–28 atrás da sidebar. Código: design.tsx:197 `absolute inset-x-0 top-0 …` e design.tsx:205 `<Ruler />`; ti.tsx:100 `RackRail … absolute inset-y-0 left-0 … xl:flex`.
- **Problema:** Como a section vaza 256 px para a esquerda (`sb-bleed`), tudo que é `absolute left-0` passa a começar embaixo da sidebar transparente, criando sobreposição com o logo e o menu — ruído visual no primeiro segundo de leitura.
- **Correção sugerida:** Confirmado: `.sb-bleed` em particular.tsx:305 aplica `margin-left: calc(-1*var(--sbw))`, e `--sbw` já existe (256px/60px). Decorações `absolute inset-x-0`/`left-0` começam sob a sidebar. Correção: design.tsx:197 → `absolute right-0 top-0 left-0 lg:left-(--sbw)`; no `Ruler` idem; ti.tsx:100 `RackRail` esquerdo → `absolute inset-y-0 left-0 lg:left-(--sbw) …`. Repetir em qualquer `absolute left-0`/`inset-x-0` dentro de `section.sb-bleed` (grep nas 8 peles). Não depender da sidebar ganhar fundo — a var já resolve e respeita o estado colapsado.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: davinci desktop.fold.png: '● REC 00:00:00:00' desenhado sobre o cabeçalho 'ESCOLA SANTOS TECH' da sidebar; photoshop desktop.fold.png: régua 0/100/200 cruzando o topo da sidebar; redes desktop.fold.png: trilho 01–06 visível atrás da sidebar. Código: design.tsx:197 inset-x-0 top-0, :205 Ruler, ti.tsx:100 RackRail left-0 xl:flex, dentro de section sb-bleed.

<a id="f164"></a>

## F164 · 🟡 Landing: três seções seguidas com o mesmo bg-neutral-50 criam buracos de ~160 px

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:532](../../../../src/routes/particular.index.tsx#L532)
- **Evidência:** routes/particular/mobile.seg10.png: entre a última pergunta do FAQ (y≈480) e o eyebrow 'ONDE ESTAMOS' (y≈860) há ~190 px CSS de cinza vazio; routes/particular/desktop.full.png (recorte 5000–6458): entre os cards de endereço/mapa e o cartão 'Difícil escolher?' há ~160 px vazios. Código: particular-faq.tsx:18 `py-20 bg-neutral-50`, particular.index.tsx:532 `py-20 bg-neutral-50`, :582 `py-20 bg-neutral-50` — três sections consecutivas com o mesmo fundo, somando 80+80 px de padding em cada emenda sem nenhuma divisa visual.
- **Problema:** Sem mudança de fundo, o padding duplo vira um vazio que parece fim de página, justamente antes do CTA final — quebra o ritmo e enfraquece a conversão no mobile.
- **Correção sugerida:** Alternar fundo: FAQ (particular-faq.tsx:18) fica `bg-neutral-50`, 'Onde estamos' (:532) vira `bg-white dark:bg-neutral-950`, CTA final (:582) mantém `bg-neutral-50`. Se preferir não mexer no FAQ (é reutilizado nas páginas de curso), usar `pt-20 pb-10` em :532 e `pt-10 pb-20` em :582.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: mobile.seg10.png: ~190 px de cinza vazio entre 'Quanto custa?' e 'ONDE ESTAMOS'. particular-faq.tsx:18, :532 e :582 usam o mesmo bg-neutral-50 + py-20. ParticularFaq é compartilhado — por isso preferir mexer em :532.

<a id="f165"></a>

## F165 · 🟡 Landing: cards 'Escolha o seu caminho' com alturas desiguais na mesma linha

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:298](../../../../src/routes/particular.index.tsx#L298)
- **Evidência:** specials/hover-card.particular.png: bases dos três cards em y=772, 792 e 803 (diferença de até 31 px), botões desalinhados. routes/particular/tablet.full.png (recorte 1000–1900): o mesmo, com 'Pacote Office + IA' ~60 px mais alto. Código: particular.index.tsx:298 `<Reveal key={p.id} …>` envolvendo o card `min-h-[300px] flex flex-col` (:300); reveal.tsx:23 renderiza um `div` sem `h-full`, então o item do grid estica mas o card não.
- **Problema:** Cards da mesma linha com bases e CTAs em alturas diferentes — o oposto do 'grid de cards' do DS §9 item 5; no hover um deles sobe e a diferença fica ainda mais visível.
- **Correção sugerida:** `<Reveal key={p.id} delay={i * 120} className="h-full">` (:298) e no card (:300) trocar `min-h-[300px]` por `h-full min-h-[300px]`. Mesmo ajuste `className="h-full"` no Reveal de EXPERIENCIA (:368) e colocar `h-full` no card interno (:369).
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Confirmado em specials/hover-card.particular.png: bases em ~772/792/803 px e botões desalinhados; tablet.full igual. reveal.tsx renderiza div sem h-full. Diferenciais (:401) já tem h-full no card mas o Reveal não — mesmo defeito latente.

<a id="f166"></a>

## F166 · 🟡 Landing tablet: grid vira 3 colunas em 768 px e os cards ficam com ~213 px de largura

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:296](../../../../src/routes/particular.index.tsx#L296)
- **Evidência:** routes/particular/tablet.full.png (recorte 1000–1900): três cards lado a lado com texto quebrando a cada 2–3 palavras ('Aprenda uma / habilidade e aplique / direto no trabalho', 'Do Excel ao Python, / do Canva ao Power / BI'), títulos 'Pacote / Office + IA' em duas linhas e botões com rótulo quebrado ('Ver todos os / cursos'). Código: particular.index.tsx:296 `grid gap-5 md:grid-cols-3` com cards `p-8` (:300).
- **Problema:** Em 768 px a coluna útil é 768 − 48 (px-6) − 40 (gaps) = 680 px → 3 cards de ~213 px com 32 px de padding interno; sobram ~150 px para o texto. Cedo demais para 3 colunas; DS §4.3 usa `sm:grid-cols-2 lg:grid-cols-4` para cards.
- **Correção sugerida:** particular.index.tsx:296 → `grid gap-5 lg:grid-cols-3` (1 coluna até 1024 px). Alternativa: `sm:grid-cols-2 lg:grid-cols-3` com o 3º card `sm:col-span-2 lg:col-span-1`.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Visto em tablet.full.png (y 1000-1900): 3 cards estreitos, texto quebrando a cada 2-3 palavras, 'Pacote / Office + IA' e 'Ver todos os / cursos' em 2 linhas. Código :296 `md:grid-cols-3` com cards p-8 (:300).

<a id="f169"></a>

## F169 · 🟡 Páginas de curso terminam sem rodapé (só '©'), enquanto a landing tem footer completo

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:372](../../../../src/components/course-skins/common.tsx#L372)
- **Evidência:** routes/particular__cursos__excel/mobile.footer.png e particular__cursos__excel/desktop.footer.png: depois do cartão CTA vem apenas '© 2026 Santos Tech — Todos os direitos reservados.' em `text-xs` centralizado; routes/particular/desktop.footer.png: a landing traz footer com logo, endereço, lista de cursos e contato (particular.index.tsx:612-660). Código: common.tsx:372 `<p className="sb-bleed py-6 text-center text-xs …">© …</p>`; desktop.json › dom.landmarks.footer = 0 em todas as rotas de curso vs 1 na landing.
- **Problema:** Quem chega direto numa página de curso (SEO/anúncio) não encontra endereço, telefone nem caminho para os outros cursos ao terminar de ler — a página acaba num '©' solto, sem fechamento de layout e sem landmark `<footer>`.
- **Correção sugerida:** 1) Mover `CATEGORIAS` (particular.index.tsx:37) para `src/lib/particular-categorias.ts` e importar na landing. 2) Criar `src/components/particular-footer.tsx` recebendo `look: Look` e renderizando `<footer className={`sb-bleed border-t py-12 ${look.bgA} ${look.muted}`}>` com as 3 colunas (marca+endereço, lista CATEGORIAS com `<Link>`, contato WhatsApp) usando `look.title`/`look.muted`/`planBorder` em vez das cores fixas `white/10`/`neutral-500` da landing (que só funcionam em fundo escuro — a pele planilha é branca). Linha do © fica dentro do footer. 3) Em common.tsx:372 substituir o `<p>` por `<ParticularFooter look={look} />`; repetir em particular-course-page.tsx (página legada) se ainda estiver em uso.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: __root.tsx:200 renderiza só <Outlet/> em /particular (sem SiteFooter); a landing tem <footer> próprio (particular.index.tsx:612) mas as peles terminam num <p> '©' (common.tsx:372). desktop.json/mobile.json de excel e jogos: landmarks.footer = 0; screenshots excel/mobile.footer.png e desktop.footer.png confirmam. No desktop a sidebar ainda dá navegação, o que evita 'alta'.

<a id="f170"></a>

## F170 · 🟡 Hero mobile empilha a arte inteira abaixo do texto e o hero passa de uma tela; páginas chegam a 18 mil px

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/course-skins/design.tsx:208](../../../../src/components/course-skins/design.tsx#L208)
- **Evidência:** routes/particular__cursos__davinci/mobile.fold.png: o hero (barra REC, chip, título, duração, tagline, CTA, 'Ver o conteúdo', 3 chips de ferramentas) ocupa toda a primeira tela e a arte (janela 'curta_final — Color') só começa em y≈720 CSS, continuando abaixo; particular__cursos__excel/mobile.fold.png: planilha + gráfico + badge '+32%' ocupam ~700 px depois do CTA; particular__cursos__autocad/mobile.fold.png: 8 chips de ferramentas empurram a arte para y>680. manifest.json › mobile.pageHeight: 10.539 (python) a 18.445 px (ia-visual) e 18.132 (copywriting) — 12 a 22 telas de 844 px. Código: grids `grid … lg:grid-cols-[1.05fr_1fr]` (design.tsx:208, ide.tsx:70, planilha.tsx:178) empilham a coluna de arte em tamanho integral abaixo de 1024 px.
- **Problema:** No celular (público principal) a arte decorativa duplica a altura do hero e adia a seção 'Para quem é' para a 3ª tela; somado às demais seções, a página fica longa demais para leitura no polegar.
- **Correção sugerida:** Confirmado: grids `lg:grid-cols-[1.05fr_1fr]` (design.tsx:208, ti.tsx:103, ide, planilha) empilham a arte integral abaixo de 1024px; páginas de 10-18 mil px no mobile. Correção por pele, no wrapper `<Reveal delay={200}>` da coluna de arte: `className="max-lg:max-h-[300px] max-lg:overflow-hidden max-lg:[mask-image:linear-gradient(#000_70%,transparent)]"` e no filho da cena `max-lg:scale-[0.82] max-lg:origin-top`; elementos flutuantes secundários (badge +32%, terminal, cards secundários) recebem `hidden md:block`. Chips de ferramentas: limitar a 4 no mobile (`.slice(0, 4)` + `md:` mostra todos). Validar com screenshot mobile de 1 pele por vez; não mexer nas seções abaixo do hero nesta tarefa.
- **Esforço:** médio · **Severidade:** Média
- **Verificação:** confirmado: davinci mobile.fold.png (780×1688, 2x): hero ocupa a tela toda e a janela 'curta_final — Color' só começa em y≈735 CSS. manifest.json mobile.pageHeight: mín 10.539 (python), máx 18.445 (ia-visual), 18.132 (copywriting) — 12 a 22 telas. design.tsx:208, ti.tsx:104 grids lg:grid-cols empilham a arte integral abaixo de 1024px.

<a id="f301"></a>

## F301 · 🟡 Home repete a mesma mensagem várias vezes: prova social 5×, Portal 3×, dois fechamentos consecutivos

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:981](../../../../src/routes/index.tsx#L981)
- **Evidência:** '5,0 no Google · 329' em index.tsx:439 (hero), :174-175 (stats), testimonials.tsx:117-118, index.tsx:994-995 (seção 'Prova social'), :1135 (CTA final). Portal do Aluno em :471 (feature do ScrollStage 'Portal pra família'), :782-878 (seção própria) e no heading 'Acesso de pai/mãe' da seção Material (home/desktop.json › headings). Headings finais: h2 'Venha nos conhecer' seguido de h2 'Venha conhecer pessoalmente' (desktop.footer.png mostra o card azul logo abaixo do mapa).
- **Problema:** Princípio Simplicidade — 'every element earning its place'. A repetição não aumenta convicção, aumenta o scroll: 16 seções para 4 argumentos (método, programas, preço, prova). Dois CTAs de encerramento seguidos anulam um ao outro.
- **Correção sugerida:** Juntar 'Venha nos conhecer' (L1055) e 'Venha conhecer pessoalmente' (L1106) num único bloco final (endereço + mapa + CTA). Avaliar cortar a seção Prova social (L981-1012), já coberta pelo hero L439 e pelos depoimentos. Manter as repetições do '5,0 no Google' no hero e no CTA final: repetir a prova perto do CTA é prática válida.
- **Esforço:** médio · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: dois h2 de fechamento seguidos (L1056 e L1106), '5,0 no Google' em L439, L995 e L1135, e Portal em L154, L471 e L802. Repetir a prova social junto aos CTAs é defensável; a meta '≤11 seções' é opinião. Só a duplicação do fechamento é problema claro. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f308"></a>

## F308 · 🟡 Página de curso infantil mostra os 4 módulos três vezes (trilha de selos, cards e acordeão)

- **Rotas:** `/cursos/create/*-anos`, `/cursos/junior/*-anos`
- **Onde:** [src/components/course-page.tsx:611](../../../../src/components/course-page.tsx#L611)
- **Evidência:** cursos.create.8-9-anos.tsx:339 `<ProgressionTrail>`, :358 `<ModuleGrid>`, e LessonAccordion (course-page.tsx:611-701). Screenshots routes/cursos__create__8-9-anos/mobile.seg06.png (Pixel Estrategista / Pixel Criador), mobile.seg08.png (cards 'Módulo 1 · Fundamentos do Arcade… Conquista Pixel Estrategista') e mobile.seg10.png (acordeão 'MÓDULO 1 · AULAS 1 A 10 Fundamentos do Arcade… Insígnia Pixel Aprendiz'). manifest: mobile pageHeight 12004px (14 fatias).
- **Problema:** layout.md › Visual hierarchy: 'Use progressive disclosure to make layouts cleaner… reduce how much content to initially display'. O mesmo nome de módulo, duração e insígnia aparece em três componentes; o pai rola 14 telas para ler 4 blocos de informação.
- **Correção sugerida:** A DS §9.4 hoje exige os itens 5 (selos), 6 (cards) e 7 (acordeão) separados — a mudança é revisão de padrão, não só código. Proposta: fundir 6+7 em `ModuleAccordion` (course-page.tsx): o `AccordionTrigger` recebe o layout do ModuleCard (ícone, 'Módulo N · aulas', nome, foco, ferramenta, insígnia); o `AccordionContent` mantém mini-projeto + lista de aulas. Trocar `<ModuleGrid>` + `<LessonAccordion>` por `<ModuleAccordion id="curriculo" …>` nas 9 rotas e reescrever §9.4 itens 6-7 no mesmo PR. Manter ProgressionTrail (é o sistema de selos, não repetição). Registrar no PENDENCIAS como decisão de layout aprovada pelo Henrique antes de executar.
- **Esforço:** médio · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Existe repetição real: ModuleCard (501-533) e LessonAccordion trigger (654-660) mostram nome, 'Aulas X a Y', duração, horas e insígnia iguais (seg08 vs headings do desktop.json). Mas ProgressionTrail (319-345) exibe só nome+desc curta da insígnia, não nome/duração do módulo — 'três vezes' é exagero; são 2 repetições + trilha. Página 12004px confirmada. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f008"></a>

## F008 · ⚪ Raio de card: DS pede rounded-2xl, mas rounded-xl domina (240×) e a mesma página mistura 3 raios

- **Rotas:** `/`, `/cursos/*/*-anos (9 páginas)`, `/sobre`, `/contato`, `/particular/cursos/* (52 páginas)`, `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`, `/cursos/academies`, `/cursos/junior/5-6-anos`
- **Onde:** [src/components/course-page.tsx:453](../../../../src/components/course-page.tsx#L453)
- **Evidência:** DS §5.1: `rounded-2xl` = cards, `rounded-3xl` = cards grandes/CTA. grep: rounded-xl 240×, rounded-2xl 155×, rounded-3xl 38×. course-page.tsx usa rounded-xl em FormatSection (453), ToolGrid (783), MethodologySection (853), FaqSection (904), LessonAccordion (639), mas ParaQuemE (384) rounded-2xl e CourseCtaFinal (949) rounded-3xl. Home: DIFERENCIAIS rounded-3xl (534), PASSOS rounded-xl (607), MATRICULA rounded-2xl (957), PRECOS rounded-3xl (667). contato.tsx:60 e sobre.index.tsx:392 rounded-xl.
- **Problema:** Cards do mesmo nível hierárquico alternam entre 16px, 20px e 24px de raio dentro de uma única página de curso; o efeito é de peças montadas de kits diferentes. O DS documenta um valor que o código majoritariamente não segue.
- **Correção sugerida:** Alinhar o DS ao que domina (240× xl vs 155× 2xl) e corrigir só os desvios: DS §5.1 → `rounded-xl` = card padrão (p-6/p-7, border-2); `rounded-2xl` = card grande/destaque (preços, checklist); `rounded-3xl` = só bloco de CTA/banner. Código: course-page.tsx:384 `rounded-2xl` → `rounded-xl`; index.tsx:534 (Diferenciais) `rounded-3xl` → `rounded-xl`; index.tsx:957 (Matrícula) `rounded-2xl` → `rounded-xl`; index.tsx:667 (Preços) pode ficar `rounded-3xl` → `rounded-2xl`. Não criar `<Card>` agora — não existe componente no repo (só snippet no DS §8.3) e a troca de classe resolve.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Contagens batem (rounded-xl 240, 2xl 155, 3xl 38). course-page.tsx:453/783/853/904/639 rounded-xl vs :384 rounded-2xl e :949 rounded-3xl; index.tsx:534/607/957/667 e contato.tsx:60 conferem. Correção: sobre.index.tsx tem 304 linhas — o rounded-xl é na linha 253, não 392. DS §5.1 pede rounded-2xl em cards.

<a id="f126"></a>

## F126 · ⚪ FAB de 56px + anéis de pulso cobre texto e CTAs no canto inferior direito do mobile

- **Rotas:** `/`, `/contato`, `/privacidade`, `/sobre`, `todas as rotas`, `/cursos/create/13-14-anos`, `/cursos/camps`, `todas as 9 páginas de curso (CTA secundário do hero)`
- **Onde:** [src/components/whatsapp-fab.tsx:32](../../../../src/components/whatsapp-fab.tsx#L32)
- **Evidência:** routes/contato/mobile.full.png: card Endereço com "Jardim América — Ribeirão Pre…" cortado pelo FAB. routes/home/mobile.seg09.png: pill "Diferencial premium" sob o FAB. routes/home/mobile.seg13.png: "Ideal para: Transformar o tempo de tel…" coberto. routes/privacidade/mobile.fold.png: parágrafo "principa…" coberto. routes/home/mobile.fold.png: anel de pulso encosta em "pais e alunos".
- **Problema:** O FAB tem 56px de botão mais dois anéis `animate-pulse-ring` (`absolute inset-0`) que ampliam a pegada visual para ~70px; em 390px de largura isso equivale a ~18% da linha de texto de qualquer bloco que termine à direita. Como todas as seções usam a largura total (px-4), sempre há texto atrás dele.
- **Correção sugerida:** FAB: `h-12 w-12 bottom-4 right-4 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16`; spans de anel (l.35-45) com `hidden sm:block`. Ocultar ao rolar é opcional e dispensável.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação) · **Também apontado como:** F150
- **Verificação:** parcial: Linha citada (134) não existe: arquivo tem 56 linhas; classe na l.32. Os .full.png congelam o elemento fixed num ponto; na navegação real o texto só passa por baixo ao rolar — padrão comum de FAB. Sobreposição existe, mas é transitória. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f129"></a>

## F129 · ⚪ Contato: grid vira 2 colunas só em lg; tablet fica com cards de 720px e CTA lá embaixo

- **Rotas:** `/contato`
- **Onde:** [src/routes/contato.tsx:56](../../../../src/routes/contato.tsx#L56)
- **Evidência:** routes/contato/tablet.full.png: cards WhatsApp/Endereço/E-mail ocupando 24→744px (720px) com 2 linhas de texto cada. routes/contato/mobile.full.png: card azul "Aula experimental gratuita" só aparece em y≈1220 de 2109px, depois dos 5 cards informativos; mapa em seguida. Código: `grid ... gap-12 ... lg:grid-cols-2` (l.56); coluna CTA é o 2º filho (l.115).
- **Problema:** Entre 768 e 1023px sobra largura para duas colunas (DS §4.3 usa `md:` para comparativos de 2 cards), mas a página empilha tudo em 1 coluna com cards esticados. No mobile o bloco de conversão (aula experimental) fica a 1,5 telas de rolagem, abaixo de horários e e-mail.
- **Correção sugerida:** Na l.56, trocar `lg:grid-cols-2` por `md:grid-cols-2`, com `gap-8 lg:gap-12`. Na coluna do CTA (l.115), usar `order-first md:order-none` para 'Aula experimental gratuita' vir logo após o hero no mobile. Conferir o screenshot em 768px.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: contato.tsx:56 só divide em colunas em lg. Na l.115 o card CTA é o 2º filho, depois de 5 cards; no mobile, pageHeight é 2109 (mobile.json). Como o card WhatsApp já vem primeiro, é polimento.

<a id="f130"></a>

## F130 · ⚪ Hero da home no tablet: coluna direita vazia e 130px de gradiente sem conteúdo

- **Rotas:** `/`
- **Onde:** [src/components/hero-collage.tsx:78](../../../../src/components/hero-collage.tsx#L78)
- **Evidência:** routes/home/tablet.fold.png: texto ocupa só a metade esquerda (max-w-xl), nada à direita, e entre as estrelas (y≈627) e a seção azul (y≈805) só gradiente. Código: colagem `relative hidden h-[480px] lg:block` (l.78); hero `pb-32 pt-16 ... lg:pb-40` e `grid ... lg:grid-cols-2` (index.tsx:392-393).
- **Problema:** Em 768–1023px a colagem de fotos (prova visual da escola) some por completo e o `pb-32` pensado para acomodar a curva com a colagem vira espaço morto. O hero perde a metade emocional da mensagem justamente no iPad.
- **Correção sugerida:** Correção barata: escalonar o padding do hero em index.tsx:392 para "pb-20 md:pb-24 lg:pb-40". Mostrar a colagem em md seria alteração maior: com 4 quadros absolutos de 480px de altura, precisaria de outro layout para tablet.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: routes/home/tablet.fold.png: texto só na metade esquerda e cerca de 170px de gradiente vazio antes da seção azul. Tablet é pouco tráfego para o público (pais no celular). Na mesma captura aparece "SANTOS TECHInício" colado no header em 768px, que é outro achado.

<a id="f132"></a>

## F132 · ⚪ Menu mobile abre sem scrim: conteúdo da página aparece colado sob o botão Entrar

- **Rotas:** `todas as rotas com SiteHeader`
- **Onde:** [src/components/site-header.tsx:146](../../../../src/components/site-header.tsx#L146)
- **Evidência:** specials/menu-mobile-open.png: logo abaixo do botão verde "Entrar" (y≈745) o parágrafo do hero ("…seu filho não aprende só a usar…") continua visível e rolável, sem separação nem escurecimento. Código: painel inline no header (l.146-151), sem backdrop nem `overflow-hidden` no body.
- **Problema:** O painel de navegação e o conteúdo competem visualmente; a página continua rolando por baixo, o foco pode escapar para conteúdo `inert` invisível e o limite do menu se perde (HIG: diferenciar controles de conteúdo).
- **Correção sugerida:** Com o menu aberto, travar a rolagem (a página usa #smooth-wrapper/GSAP em __root.tsx:211, então pausar o smoother além de body overflow-hidden) e adicionar o backdrop `fixed inset-0 top-20 -z-10 bg-st-blue-dark/30 md:hidden` com onClick={closeAll}.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: specials/menu-mobile-open.png: o hero aparece logo abaixo do botão Entrar, sem scrim. O painel (l.146-151) é inline no header fixo e não tem backdrop nem trava de rolagem (grep não acha overflow nem lock).

<a id="f133"></a>

## F133 · ⚪ Header fixo de 80px ocupa 10–12% do viewport no celular

- **Rotas:** `todas as rotas com SiteHeader`, `todas as rotas (componente global)`
- **Onde:** [src/components/site-header.tsx:89](../../../../src/components/site-header.tsx#L89)
- **Evidência:** routes/home/mobile.fold.png: barra branca de 0→160px (@2x) = 80px CSS antes do hero; logo de 48px. Código: `flex h-20 ... items-center` (l.89), spacer `<div className="h-20 shrink-0">` (__root.tsx:221).
- **Problema:** Em 844px o header fixo consome 9,5% (12% em 667px) de cada tela, todo o tempo, empurrando o CTA do hero e reduzindo a área útil de leitura. HIG orienta chrome compacto na largura compacta (barras de 44–56pt); o site mantém a altura desktop.
- **Correção sugerida:** `h-16 md:h-20` no container (l.89) e no spacer (__root.tsx:221 `h-16 md:h-20`); logo `h-10 w-10 md:h-12 md:w-12` (l.91); âncoras index.tsx:551/1014 `scroll-mt-20 md:scroll-mt-24`. Conferir screenshots mobile depois.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação) · **Também apontado como:** F156
- **Verificação:** parcial: h-20 confirmado (l.89; __root.tsx:221). 80px = 9,5% de 844px: real, mas é padrão comum em sites e não bloqueia o CTA. Ganho de 16px é polimento. Exige revisar offsets sticky e scroll-mt. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f135"></a>

## F135 · ⚪ Páginas legais: linhas de 96 caracteres no desktop (bloco de 720px a 15px)

- **Rotas:** `/privacidade`, `/termos`
- **Onde:** [src/components/legal-page.tsx:17](../../../../src/components/legal-page.tsx#L17)
- **Evidência:** privacidade/desktop.json › dom.longLines: 13 blocos com cpl 96, width 720, fontSize 15 (ex.: "Esta Política de Privacidade descreve como a Santos Tech…"); termos/desktop.json › dom.longLines: 6 blocos idem. routes/privacidade/desktop.full.png confirma parágrafos de borda a borda em coluna de 768px. Código: `<main className="mx-auto w-full max-w-3xl px-5 ...">` (l.277) e corpo `text-[15px]` (l.292).
- **Problema:** A medida ideal para leitura contínua é 45–75 caracteres por linha; 96 cpl com fonte de 15px cansa e faz o olho perder a linha — justamente em texto denso e obrigatório (LGPD). DS §1.4 coloca legibilidade como 1ª prioridade.
- **Correção sugerida:** No <div> do corpo (l.30-31) trocar `text-[15px]` por `text-base` e adicionar `max-w-[70ch]`; manter `max-w-3xl` no <main> para o header.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Problema existe, mas o arquivo tem 44 linhas: <main max-w-3xl> está na l.17 e `text-[15px]` na l.31 (não 277/292). 96 cpl é real, porém em páginas legais de baixo tráfego; rebaixado para baixa. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f136"></a>

## F136 · ⚪ 404 e tela de erro usam min-h-screen dentro do layout: conteúdo descentralizado e rodapé fora da dobra

- **Rotas:** `/pagina-que-nao-existe-404 (qualquer 404)`
- **Onde:** [src/routes/__root.tsx:35](../../../../src/routes/__root.tsx#L35)
- **Evidência:** routes/pagina-que-nao-existe-404/desktop.full.png: página com 1045px (80 header + 900 bloco + 65 rodapé) para viewport de 900 — "404" centrado em y≈530, rodapé só após rolar; mobile.full.png: 1013px, bloco 404 começa ~200px abaixo do que deveria. Código: `flex min-h-screen items-center justify-center` no NotFound (l.35) e no ErrorComponent (l.62), renderizados dentro de `<main className="flex-1">` que já vem após o spacer `h-20` (l.221-222).
- **Problema:** O `min-h-screen` soma 100vh ao header de 80px: o centro visual fica 40px abaixo do centro real e o rodapé (com links legais) só aparece após rolagem numa página que deveria caber numa tela.
- **Correção sugerida:** l.35 e l.62: `flex min-h-[calc(100dvh-5rem)] items-center justify-center bg-background px-4`.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: NotFound (l.35) e o erro (l.62) usam min-h-screen dentro do <main>, que já vem depois do spacer h-20 (l.221-222). A página fica 80px mais alta que o viewport e o rodapé cai para fora da dobra.

<a id="f138"></a>

## F138 · ⚪ Padding do hero difere entre páginas institucionais (py-16/20 vs py-20/28 vs padrão DS)

- **Rotas:** `/sobre`, `/sobre/visao`, `/contato`
- **Onde:** [src/routes/sobre.visao.tsx:61](../../../../src/routes/sobre.visao.tsx#L61)
- **Evidência:** sobre.visao.tsx:61 `py-20 sm:py-28`; sobre.index.tsx:63 `py-16 sm:py-20`; contato.tsx:31 `py-16 sm:py-20`; DS §4.2 define hero como `pt-16 sm:pt-20 lg:pt-24 pb-32 lg:pb-40`. routes/sobre__visao/desktop.full.png: hero de ~330px de altura vs routes/sobre/desktop.full.png ~400px e contato ~315px (desktop.full.png), todos com o mesmo fundo/decoração.
- **Problema:** Três páginas irmãs com o mesmo visual de hero (gradiente + pontilhado + blobs + DecorativeElements) têm alturas e respiro diferentes sem motivo de conteúdo; ao navegar Sobre → Visão o topo "pula".
- **Correção sugerida:** Igualar o padding do hero nas três páginas: em sobre.visao.tsx:61 trocar `py-20 sm:py-28` por `py-16 sm:py-20`, igual a sobre.index.tsx:63 e contato.tsx:31. Criar o componente <PageHero> é opcional. Atualizar DS §4.2 com a variante de hero de página interna.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado: visao:61 usa py-20 sm:py-28, e sobre:63 e contato:31 usam py-16 sm:py-20, com o mesmo fundo. O padrão de hero do DS §4.2 (pb-32 lg:pb-40) é o da home, então ele também precisa listar a variante de página interna.

<a id="f139"></a>

## F139 · ⚪ Home alterna py-20 / py-24 / py-12 / py-8 entre seções sem regra

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:585](../../../../src/routes/index.tsx#L585)
- **Evidência:** index.tsx: stats `py-12` (l.477), Por que `py-24` (l.491), programas intro `pt-4 … pb-12` (l.551-552), nota Matrícula anual `py-8` (l.585), Como funciona `py-20` (l.595), Preços `py-24` (l.636), Portal `py-20` (l.782), Professores `py-24` (l.880), Método `py-24` (l.941), FAQ `py-20` (l.1014). routes/home/desktop.seg13.png: faixa "Matrícula anual…" espremida (py-8) entre a banda azul e "Como funciona"; desktop.seg10.png: 100px de cinza entre os cards e "OS PROGRAMAS".
- **Problema:** DS §4.2 fixa `py-20` como padrão e reserva `py-24+` para bandas coloridas (ProgramBand). Na home as seções brancas/cinza usam py-24 e py-20 alternadamente, e a nota de matrícula fica com respiro menor que qualquer outra, quebrando o ritmo vertical.
- **Correção sugerida:** Levar a nota "Matrícula anual…" para dentro da seção Como funciona (l.595) como `<p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">` e apagar a seção py-8 (l.585-592). Normalizar para `py-20` só as seções claras l.491, 636 e 941; manter `py-24` em l.879 (banda escura, DS §4.2).
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: Confirmado: py-8 em l.585; py-24 em seções claras l.491/636/941. Mas l.879 é banda escura (`#04325A`, text-white), onde py-24 é o previsto no DS §4.2; a recomendação original de mudá-la está errada. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f140"></a>

## F140 · ⚪ Pílula eyebrow do hero quebra em 2 linhas no mobile

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:396](../../../../src/routes/index.tsx#L396)
- **Evidência:** routes/home/mobile.fold.png: pill "ESCOLA PRESENCIAL DE TECNOLOGIA · RIBEIRÃO PRETO" ocupa 2 linhas dentro de um `rounded-full` de ~360px, com o ícone alinhado à 1ª linha. Código: `rounded-full ... px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]` (l.396).
- **Problema:** Texto de 48 caracteres em caixa alta com tracking 0.18em não cabe em 358px; a pílula vira um retângulo alto com a 2ª linha órfã ("RIBEIRÃO PRETO"), o primeiro elemento que o pai vê no celular.
- **Correção sugerida:** Texto curto no mobile: <span className="sm:hidden">Escola presencial · Ribeirão Preto</span><span className="hidden sm:inline">Escola presencial de tecnologia · Ribeirão Preto</span>. Opcional: 'tracking-[0.12em] sm:tracking-[0.18em]'.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: routes/home/mobile.fold.png: a pílula quebra em 2 linhas e 'RIBEIRÃO PRETO' fica sozinho na segunda. Continua legível, então é polimento.

<a id="f143"></a>

## F143 · ⚪ Grids lg:grid-cols-2 viram coluna única no tablet: cards de 705px e linhas de 120–155 caracteres

- **Rotas:** `/cursos`, `/cursos/academies`
- **Onde:** [src/routes/cursos.index.tsx:203](../../../../src/routes/cursos.index.tsx#L203)
- **Evidência:** routes/cursos/tablet.json › dom.longLines: 2 parágrafos com cpl 94 e width 656px a 14px; routes/cursos__academies/tablet.json › longLines cpl 93 (652px). Medido ao vivo em 768px: cards de programa com w=705px e pitch de 14px com ~121 cpl (cursos.index.tsx l.203 `mt-10 grid gap-6 lg:grid-cols-2`); AcademyCard w=705px e descrição com ~155 cpl (cursos.academies.tsx l.381 `mt-14 grid gap-6 lg:grid-cols-2`). routes/cursos/tablet.fold.png mostra o card esticado na largura toda.
- **Problema:** Em 768–1023px os cards (pensados para ~590px) esticam para 705px: texto de 14px em linhas de 120–155 caracteres (WCAG 1.4.8 recomenda ≤80) e muito espaço vazio dentro de cada card, com a página ficando ~2x mais longa no tablet do que precisaria.
- **Correção sugerida:** Adicionar `max-w-prose` aos parágrafos dos cards (ProgramCardItem e AcademyCard) em vez de forçar 2 colunas a 768px, onde cards com p-8 ficariam apertados; alternativa: `md:grid-cols-2` só em cursos.academies.tsx:381 se o conteúdo couber.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Grids lg:grid-cols-2 confirmados (cursos.index.tsx:203, cursos.academies.tsx:381). Mas o tablet.json mede ~94 cpl, não 121–155; exagerado. Só afeta 768–1023px. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f145"></a>

## F145 · ⚪ BridgeBanner: parágrafo de 928px (~116 caracteres por linha) no desktop

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/7-8-anos`, `/cursos/academies`
- **Onde:** [src/components/course-page.tsx:736](../../../../src/components/course-page.tsx#L736)
- **Evidência:** desktop.json › dom.longLines em cursos__create__8-9-anos, cursos__create__12-13-anos, cursos__create__13-14-anos, cursos__junior__7-8-anos e cursos__academies: cpl 116, width 928px, fontSize 16. Medido ao vivo: <p> do banner com 928px. Código: `<div className="flex-1 min-w-[280px]">` + `<p className="mt-1.5 text-sm text-white/90 sm:text-base">` sem max-width (l.734-736), dentro de container max-w-6xl.
- **Problema:** Linhas de 116 caracteres a 16px em fundo colorido são cansativas de ler (recomendação 45–75, no máximo 80) e o banner vira um bloco denso de texto, contra DS §1.4 (leitura em 1ª prioridade).
- **Correção sugerida:** course-page.tsx:736 — `<p className="mt-1.5 max-w-prose text-sm leading-relaxed text-white/90 sm:text-base">`. `max-w-prose` (65ch ≈ 620px em Poppins 16px) resolve nos 5 usos sem alterar o layout ícone+texto; não dividir em 2 colunas (mais código pra ganho igual). O `<p>` recebe `children` com `<strong>` — continua válido.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: desktop.json › dom.longLines nas 5 rotas (8-9, 12-13, 13-14, junior 7-8, academies): cpl 116, width 928px, fontSize 16. Código: `flex-1 min-w-[280px]` (:734) + `<p>` sem max-width (:736) em container max-w-6xl. Linha de 116 caracteres excede o limite usual de 75–80; DS §1.4 exige leitura escaneável.

<a id="f148"></a>

## F148 · ⚪ /cursos: padding vertical inconsistente entre seções (py-12 vs py-16/py-20)

- **Rotas:** `/cursos`
- **Onde:** [src/routes/cursos.index.tsx:289](../../../../src/routes/cursos.index.tsx#L289)
- **Evidência:** Medido ao vivo em 768px: seções com padding 80/80/80/48/80px. Código: hero `py-16 sm:py-20` (l.228), Tecnologia `py-16 sm:py-20` (l.265), Informática `bg-muted/40 py-16 sm:py-20` (l.277), "Não sabe por qual começar?" `py-12` (l.289), CTA final `py-20` (l.311). routes/cursos/mobile.full.png mostra o card "Não sabe por qual começar?" espremido entre a faixa cinza e o CTA azul.
- **Problema:** Três valores diferentes de padding na mesma página sem motivo; o card de orientação fica colado à faixa cinza acima e solto do CTA abaixo, quebrando o ritmo que o DS §4.2 pede (py-20 padrão).
- **Correção sugerida:** Trocar a seção de l.289 `py-12` por `py-16 sm:py-20` alinhando às vizinhas, ou (melhor) mover o card "Não sabe por qual começar?" para o topo da seção CTA de l.311 como `<div className="mx-auto mb-12 max-w-3xl">` e apagar a seção isolada.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: Confirmado: hero/tecnologia/informática `py-16 sm:py-20` (l.228,265,277), card `py-12` (l.289), CTA `py-20` (l.311). Mas é um interstício de card único — respiro menor é defensável; inconsistência leve, não quebra de ritmo. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f152"></a>

## F152 · ⚪ Larguras de container variam 5 vezes na mesma sales page (1280/1152/1024/896/768px)

- **Rotas:** `todas as 9 páginas /cursos/create/*-anos e /cursos/junior/*-anos`, `/cursos/academies`, `/cursos/camps`, `/cursos/*/*-anos (9 páginas)`, `/privacidade`, `/termos`, `/cursos/create/*-anos`, `/cursos/junior/*-anos`
- **Onde:** [src/components/course-page.tsx:572](../../../../src/components/course-page.tsx#L572)
- **Evidência:** Medido ao vivo em 1440px (/cursos/create/8-9-anos), containers `section > div.mx-auto` na ordem: 1280 (max-w-7xl hero l.204), 1152 (max-w-6xl l.277/373/439), 1280 (max-w-7xl ModuleGrid l.572), 896 (max-w-4xl LessonAccordion l.622), 1152 (ToolGrid l.768, Methodology l.839), 768 (max-w-3xl FAQ l.888), 1024 (max-w-5xl CTA l.946). DS §4.1: "Sempre use a mesma cápsula: mx-auto max-w-7xl px-4 sm:px-6 lg:px-8".
- **Problema:** As bordas laterais dos blocos mudam a cada seção (cards de módulo com 596px de largura seguidos de accordion de 896px e cards de ferramenta de 257px), o que tira a sensação de grade única que o DS exige; a intenção (limitar leitura) é legítima, mas está sendo feita na cápsula em vez de no conteúdo.
- **Correção sugerida:** Padronizar a cápsula externa em `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` nas l.326, 373, 439, 622, 768, 839, 888, 946 e limitar leitura por dentro: LessonAccordion envolver o Accordion em `<div className="mx-auto max-w-4xl">`, FaqSection em `<div className="mx-auto max-w-3xl">`, CTA final em `<div className="mx-auto max-w-5xl">`. Seções de cards (l.373, 439, 768, 839) podem ficar em 7xl direto — validar visualmente em 1440px que ToolGrid/Methodology não ficam largos demais; se ficarem, envolver o grid em `max-w-6xl`.
- **Esforço:** pequeno · **Severidade:** Baixa · **Também apontado como:** F022
- **Verificação:** confirmado: Código confirma: max-w-7xl (l.204, 572), max-w-6xl (l.326, 373, 439, 768, 839), max-w-4xl (l.622), max-w-3xl (l.888), max-w-5xl (l.946). DESIGN_SYSTEM.md:236-239 diz 'Sempre use a mesma cápsula' max-w-7xl. Impacto visual pequeno (cards centrados); baixa está correta.

<a id="f154"></a>

## F154 · ⚪ Métricas do hero da Colônia quebram em 3+1 no desktop ("2×/ano" órfão)

- **Rotas:** `/cursos/camps`
- **Onde:** [src/routes/cursos.camps.tsx:212](../../../../src/routes/cursos.camps.tsx#L212)
- **Evidência:** routes/cursos__camps/desktop.fold.png: "Seg–Sex · Dia todo · Por semana" na 1ª linha e "2×/ano" sozinho na 2ª, desalinhado das outras três. Código: `<Reveal delay={480} className="mt-8 flex flex-wrap gap-x-8 gap-y-4">` (l.212) — flex-wrap com larguras livres dentro da coluna de texto (~588px); o DS §4.3 prescreve para stats `grid grid-cols-2 gap-6 md:grid-cols-4`.
- **Problema:** A barra de 4 números perde o efeito de "resumo em números" (DS §9 item 3): três itens alinhados e um perdido na linha de baixo, sem colunas.
- **Correção sugerida:** l.212: `className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"`, ajustando o valor para `text-xl sm:text-2xl` se "Por semana" não couber.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: cursos__camps/desktop.fold.png: "Seg–Sex · Dia todo · Por semana" ocupa a 1ª linha e "2×/ano" fica órfão na 2ª. O motivo é o flex-wrap livre da l.212.

<a id="f155"></a>

## F155 · ⚪ Eyebrow do hero quebra em 2 linhas no mobile por causa do tracking largo

- **Rotas:** `/cursos/create/13-14-anos`, `/cursos/create`
- **Onde:** [src/components/course-page.tsx:220](../../../../src/components/course-page.tsx#L220)
- **Evidência:** routes/cursos__create__13-14-anos/mobile.fold.png: chip "CREATE ANO 6 · 13 A 14 ANOS · FORMATURA" em 2 linhas (medido ao vivo: 343×46px); routes/cursos__create/mobile.fold.png: "PROGRAMA CARRO-CHEFE · 8 A 14 ANOS" em 2 linhas. Código: `text-xs font-black uppercase tracking-[0.25em] ... px-4 py-1.5` (course-page.tsx l.220; cursos.create.index.tsx l.212).
- **Problema:** O chip-eyebrow foi desenhado como pílula de 1 linha; com tracking de 0,25em e label longo vira um bloco de 2 linhas com padding desproporcional, empurrando o H1 para baixo na primeira tela.
- **Correção sugerida:** course-page.tsx l.220: `inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-center text-xs font-black uppercase tracking-[0.15em] text-white sm:tracking-[0.25em]`; idem cursos.create.index.tsx l.212. Não mexer nos labels: 'CREATE Ano 6 · 13 a 14 anos · Formatura' é o padrão dos 6 anos de CREATE e a ordem proposta ('Formatura · 13–14') perde clareza pro pai. Se ainda quebrar, aceitar 2 linhas centralizadas — o `text-center` já resolve o aspecto de bloco torto.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado nos dois screenshots: cursos__create__13-14-anos/mobile.fold.png ('CREATE ANO 6 · 13 A 14 ANOS · FORMATURA' em 2 linhas) e cursos__create/mobile.fold.png ('PROGRAMA CARRO-CHEFE · 8 A 14 ANOS' em 2 linhas). Código l.220 tracking-[0.25em] sem variante mobile; idem cursos.create.index.tsx:212. Só afeta labels longos; baixa correta.

<a id="f157"></a>

## F157 · ⚪ AgeBlock do JR: moldura rotacionada invade o gutter de 16px no mobile

- **Rotas:** `/cursos/junior`
- **Onde:** [src/routes/cursos.junior.index.tsx:97](../../../../src/routes/cursos.junior.index.tsx#L97)
- **Evidência:** Medido ao vivo em ~375px: as 3 molduras `rotate-[-2deg]` ficam com x=10 e right=365 (viewport 383) — 6px dentro do gutter de 16px; routes/cursos__junior/mobile.seg05.png mostra a borda lilás quase encostada na lateral da tela. Código: `overflow-hidden rounded-2xl border-4 ... rotate-[-2deg]` (l.97) com `<Img className="h-[360px] w-full object-cover sm:h-[420px]">` (l.103). Sem overflow horizontal (docScrollWidth = viewport).
- **Problema:** A rotação decorativa faz sentido no desktop (imagem em coluna de 590px), mas no celular consome o único respiro lateral e deixa a foto colada na borda, contrariando o gutter de 16px do DS §4.1.
- **Correção sugerida:** Na moldura (l.97) trocar `rotate-[-2deg]` por `sm:rotate-[-2deg]`; opcional na Img (l.103) `h-[300px] sm:h-[420px]`.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: l.97 tem `rotate-[-2deg]` sem breakpoint; geometricamente 360px de altura × sen2° ≈ 6px por lado, coerente com x=10 medido. Sem overflow horizontal; é polimento de gutter (DS §4.1).

<a id="f162"></a>

## F162 · ⚪ Breakpoint lg compartilhado: em 1024–1279 px a sidebar toma 256 px e os grids já viram 2/3/5 colunas

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:145](../../../../src/components/course-skins/common.tsx#L145)
- **Evidência:** Código: particular.tsx:584 `lg:pl-64` (sidebar fixa a partir de 1024 px) enquanto os grids das peles usam o mesmo `lg:` — common.tsx:145 `grid gap-4 sm:grid-cols-2 lg:grid-cols-5`, common.tsx:166 `lg:grid-cols-2`, ide.tsx:70 / planilha.tsx:178 / design.tsx:208 `lg:grid-cols-[1.05fr_1fr]`. Em 1024 px: 1024 − 256 (sidebar) − 64 (px-8) = 704 px úteis → 5 cards de 128 px com gap-4; hero em duas colunas de ~340 px. Não há screenshot em 1024 px; achado por leitura de código.
- **Problema:** O mesmo breakpoint dispara a perda de 256 px de largura e o aumento de colunas. Notebooks de 1024–1280 px (muito comuns) recebem cards espremidos e hero de duas colunas em espaço de tablet, contrariando o 'respiro' do DS §4.5.
- **Correção sugerida:** Correção mínima nos grids, sem mexer no breakpoint da sidebar: common.tsx:145 `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`; heroes de duas colunas (ide.tsx:70, planilha.tsx:178, design.tsx:208) `xl:grid-cols-[1.05fr_1fr]`. Container queries só se aparecer um segundo caso.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Conta correta: em 1024px, 1024−256−64 = 704px → cards de 128px com p-5 (common.tsx:145,150). Mas não há screenshot em 1024–1279px; é inferência de código. Subir a sidebar para xl é mudança maior que o problema. Não verificado visualmente. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f163"></a>

## F163 · ⚪ Landing: seções com py-16 e py-20 misturadas sem motivo (DS §4.2 pede py-20)

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:259](../../../../src/routes/particular.index.tsx#L259)
- **Evidência:** particular.index.tsx:259 `<section id="categorias" className="py-16 …">` e :285 `<section className="py-16 bg-neutral-50 …">`; as demais sections da mesma página usam `py-20` (:344, :388, :416, :466, :532, :582) e particular-faq.tsx:18 `py-20`. Visível em routes/particular/desktop.full.png: o bloco 'O que você quer aprender' e 'Escolha o seu caminho' têm respiro menor que 'A forma mais eficiente' e seguintes.
- **Problema:** Ritmo vertical irregular na página de maior tráfego do produto; DESIGN_SYSTEM §4.2 define `py-20` como padrão de seção.
- **Correção sugerida:** Trocar `py-16` por `py-20` em particular.index.tsx:259 (section #categorias) e :285 (Pilares), alinhando ao padrão DS §4.2.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: :259 e :285 usam py-16; demais sections (:344, :388, :416, :466, :532, :582) e particular-faq.tsx:18 usam py-20. DESIGN_SYSTEM.md §4.2 define py-20 como padrão. Diferença de 16 px por lado: polimento, não media.

<a id="f167"></a>

## F167 · ⚪ Landing: cabeçalhos de seção alternam entre centralizados e alinhados à esquerda

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:346](../../../../src/routes/particular.index.tsx#L346)
- **Evidência:** routes/particular/desktop.full.png: 'O que você quer aprender?', 'Escolha o seu caminho', 'Aula de verdade…', 'Perguntas frequentes', 'Venha nos conhecer' centralizados; 'A forma mais eficiente de aprender tecnologia' à esquerda dentro de uma coluna centralizada (fica deslocado em relação ao grid de cards abaixo) e 'Cursos mais populares' colado à esquerda em largura total. Código: particular.index.tsx:346 `<div className="mx-auto max-w-2xl">` sem `text-center`; :468-474 h2 sem wrapper/alinhamento.
- **Problema:** Dois padrões de alinhamento na mesma página, sem regra aparente — o leitor perde o eixo visual entre uma seção e outra (HIG layout: consistência de alinhamento).
- **Correção sugerida:** Padronizar centralizado: em :346 `<div className="mx-auto max-w-2xl text-center">`; em :468 `<Reveal className="mx-auto max-w-2xl text-center">` para 'Cursos mais populares'.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado no código: :346 `mx-auto max-w-2xl` sem text-center (título fica deslocado da grade abaixo, visível em mobile.seg04 à esquerda); :468 h2 à esquerda; as demais seções usam text-center. Inconsistência de polimento, não prejudica leitura.

<a id="f168"></a>

## F168 · ⚪ Texto corrido sem max-width: linhas de 101 a 148 caracteres no desktop

- **Rotas:** `/particular`, `/particular/cursos/informatica`, `/particular/cursos/office`, `/particular/cursos/python`, `/particular/cursos/power-bi`
- **Onde:** [src/components/course-skins/informatica.tsx:527](../../../../src/components/course-skins/informatica.tsx#L527)
- **Evidência:** desktop.json › dom.longLines: informatica 5 linhas de 116 cpl (17 px, width 990, 'Partes físicas do computador…'), office 148 cpl (15 px, width 1113, 'Dominar Word, Excel e PowerPoint…'), python 131 cpl (12.5 px, width 818), power-bi 7 linhas longas; particular desktop.json e tablet.json: 5 respostas do FAQ com 101–103 cpl (14 px, width 704–720). Código: informatica.tsx:328 container `max-w-6xl` com item `flex-1 text-[17px]` (:361) sem limite; variants/planilha-pacote.tsx:268 `<p className="mt-1 text-[15px] …">{tier.outcome}</p>` dentro de `max-w-7xl` (:246); particular-faq.tsx:19 `max-w-3xl` com respostas em `text-sm`.
- **Problema:** Acima de ~80 caracteres por linha o olho perde a volta de linha (WCAG 1.4.8 recomenda ≤ 80; DS §1.4 prioriza leitura). Os textos mais importantes da venda (ementa, outcome, FAQ) são justamente os que estouram.
- **Correção sugerida:** Tratar junto com F118. informatica.tsx:527: `max-w-[70ch]` no <p> do tópico. variants/planilha-pacote.tsx:268: `max-w-[70ch]` no outcome. particular-faq.tsx: subir as respostas para `text-base` (cerca de 80 cpl em 672px).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Linha errada: informatica.tsx:361 é um bilhete num grid lg:grid-cols-3 (curto). Os 116 cpl vêm dos tópicos em :527 (desktop.json: width 990). FAQ com 101 cpl estimado a 14px/704px, real cerca de 90: marginal. Duplica F118. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f171"></a>

## F171 · ⚪ Diferenciais: 10 cards em coluna única no mobile somam ~2,5 mil px de rolagem

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:145](../../../../src/components/course-skins/common.tsx#L145)
- **Evidência:** routes/particular__cursos__excel/mobile.seg08.png: cards 'Horário Flexível', 'Reagendamento sem Custo', 'Aulas Gravadas a Pedido', 'Aula Online se Precisar' empilhados, cada um com ~320 px de altura (2×) para 2 linhas de texto; a seção inteira ocupa as fatias seg07–seg09. Código: common.tsx:145 `grid gap-4 sm:grid-cols-2 lg:grid-cols-5` — uma coluna até 640 px; cards `p-5` com ícone 36 px, título e descrição curta.
- **Problema:** Conteúdo curto (título + 1 frase) em cards de largura total gera muito espaço vazio à direita e rolagem longa antes de 'Investimento' e do FAQ, que são as seções de decisão.
- **Correção sugerida:** common.tsx:145 → `mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5` e no card (linha 150) `h-full p-4 sm:p-5`. Manter `text-sm` no h3; peles que sobrescrevem `look.small` para `text-sm` continuam legíveis em 2 colunas (≈160 px úteis no 375). Conferir screenshot mobile do card 'Aula Online se Precisar' (descrição mais longa, ~6 linhas) antes de dar como pronto.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: common.tsx:145 `grid gap-4 sm:grid-cols-2 lg:grid-cols-5` — coluna única abaixo de 640px; DIFERENCIAIS em shared.tsx:118 tem 10 itens. excel/mobile.seg08.png mostra 4 cards empilhados, cada um ~160px CSS para título + 1 frase, com espaço vazio à direita. Polimento, não bloqueia.

<a id="f174"></a>

## F174 · ⚪ Largura do container varia entre max-w-6xl e max-w-7xl na mesma página de curso

- **Rotas:** `/particular/cursos/informatica`, `/particular/cursos/office`
- **Onde:** [src/components/course-skins/informatica.tsx:328](../../../../src/components/course-skins/informatica.tsx#L328)
- **Evidência:** informatica.tsx:328 e :435 usam `mx-auto max-w-6xl px-4 sm:px-6 lg:px-8` nas seções 'Para quem é' e 'Conteúdo', enquanto o hero (:202, :264) e as CommonSections (common.tsx:143, :166, :200, :222) usam `max-w-7xl`; variants/planilha-pacote.tsx:113 `max-w-6xl` vs :246 `max-w-7xl`. Em routes/particular__cursos__informatica/desktop.full.png as bordas laterais do bloco 'monitor' e do bloco 'Pasta 1' não se alinham com os cards de 'Mais do que um curso'.
- **Problema:** DESIGN_SYSTEM §4.1 pede sempre a mesma cápsula (`max-w-7xl px-4 sm:px-6 lg:px-8`); alternar 6xl/7xl desloca as margens laterais em 64 px de uma seção para outra.
- **Correção sugerida:** Trocar `max-w-6xl` por `max-w-7xl` em informatica.tsx:328 e :435 e planilha-pacote.tsx:113 (há 18 ocorrências de max-w-6xl em course-skins; revisar as de container de seção). Estreitar só o texto com `max-w-[65ch]` quando necessário.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado: informatica.tsx:328/435 e planilha-pacote.tsx:113 usam max-w-6xl; hero :202/:264 e planilha-pacote:246 usam max-w-7xl. DESIGN_SYSTEM.md:239 e checklist :683 pedem max-w-7xl em toda seção.

<a id="x07"></a>

## X07 · ⚪ IA Visual: 'Para quem é' ocupa 3.639 px no celular, 3× as outras páginas

- **Rotas:** `/particular/cursos/ia-visual`
- **Onde:** [src/components/course-skins/variants/ia-visual.tsx:251](../../../../src/components/course-skins/variants/ia-visual.tsx#L251)
- **Evidência:** Altura medida da seção no celular (390×844): #para-quem-ia tem 3.639 px, contra 1.370 px em /particular/cursos/ia, 1.330 em google-ads, 1.207 em python e 981 em excel. É a página mais longa do site no celular (18.445 px), e o preço 'Seu investimento' só aparece em y=15.873 (~19 telas). Cada perfil vira um PromptCard com uma arte decorativa de proporção 4:5, 1:1 ou 16:9 em largura cheia, mais os chips falsos '--ar 4:5 --estilo entardecer' e ícones de curtir/baixar (ia-visual.tsx:204-228). No celular a grade é de 1 coluna (l.251-255). Prints: .../scratchpad/audit/routes/particular__cursos__ia-visual/mobile.seg02.png a seg05.png.
- **Problema:** Para ler 6 frases de 'é para você se...', o adulto rola mais de 4 telas de planetas e frascos roxos genéricos, que não mostram nenhum trabalho real de aluno. O preço fica ainda mais distante, e quem não chega até ele sai sem saber quanto custa.
- **Correção sugerida:** No bloco lg:hidden (l.251-255), usar no PromptCard uma variante compacta com a arte em miniatura 16:9, de altura máxima em torno de 96px, ao lado do texto, ou sem arte. O moodboard completo fica só no desktop. Os chips --ar/--estilo e os ícones decorativos podem ficar só no desktop. Meta: 1.400px ou menos em 390×844, com screenshot.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: No celular, a grade é de 1 coluna (sm:grid-cols-2 só a partir de 640px), e cada card leva arte em largura cheia com proporção 4:5, 1:1 ou 16:9 (l.207-209). Pela conta, 6 cards dão cerca de 3.400px, o que confirma a medida de 3.639px. Os ícones Heart/Download são aria-hidden e só decorativos.
