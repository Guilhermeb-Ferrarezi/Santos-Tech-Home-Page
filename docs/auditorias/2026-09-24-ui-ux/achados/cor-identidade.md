# Cor, contraste e identidade visual — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#62) · nota da dimensão **5/10** · **11 achados** (🔴 0 · 🟠 5 · 🟡 4 · ⚪ 2)

A marca é reconhecível e bem aplicada em geral, mas **as cores aparecem quase sempre nos pontos onde se vende**: botões, preço e títulos de card estão com contraste baixo demais para ler bem.

- **O verde da marca foi pensado como fundo de botão com letra branca, e essa combinação é difícil de ler.** O botão principal ("agendar aula" / WhatsApp) fica apagado no celular, principalmente no sol. Isso tira clique de venda na home, nos cursos e nos cursos particulares.
- **Os textos mais importantes são os mais apagados.** Preço, parcelas, estatísticas e rótulos pequenos usam cinza claro ou branco transparente. Quanto menor o texto, mais apagado ele fica, e deveria ser o contrário. Numa oferta de R$ 3 a 8 mil, preço difícil de ler parece "letra miúda" e gera desconfiança.
- **As cores foram digitadas direto no código em vez de puxadas da paleta oficial.** Por isso existem verdes e azuis parecidos mas diferentes, e o CAMPS tem duas cores próprias. Hoje, ajustar uma cor da marca exige mexer em dezenas de lugares.
- **A cor não mantém o mesmo significado.** O verde marca ao mesmo tempo "comprar", "entrar como aluno" e "crianças". No /contato, o botão de agendar nem é verde. O pai perde a pista visual de onde clicar.
- **Faltam regras no design system.** A seção 12 diz que o verde passa no teste de contraste, e isso está errado. Também não existe um mínimo para texto sobre fundo escuro, então o erro se repete a cada página nova.

**Recomendação:** corrigir primeiro os botões e o preço, que são poucas trocas e afetam o site inteiro, e depois registrar as regras no design system para o erro não voltar.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F016`](#f016) | 🟠 | CAMPS usa #0E9E8E no código, mas DS §2.1 e --st-camps definem #1C8299 | `/cursos/camps`, `todas (header)` | [src/routes/cursos.camps.tsx:44](../../../../src/routes/cursos.camps.tsx#L44) | pequeno |
| [`F084`](#f084) | 🟠 | Título dos cards de pilares em CAMPS fica invisível (h3 herda text-white sobre card branco) | `/cursos/camps` | [src/routes/cursos.camps.tsx:127](../../../../src/routes/cursos.camps.tsx#L127) | trivial |
| [`F233`](#f233) | 🟠 | CTA verde #0DB88F com texto branco tem 2,5:1 — falha AA em todos os botões primários do site | `/`, `/cursos` +12 | [src/routes/index.tsx:265](../../../../src/routes/index.tsx#L265) | médio |
| [`F241`](#f241) | 🟠 | CTAs coloridos das peles têm texto branco abaixo de 4,5:1 (laranja 2,8, verde-Excel 3,2, azul IDE 3,3, teal TI 3,7, vermelho 3,9) | `/particular/cursos/autocad`, `/particular/cursos/revit` +42 | [src/components/course-skins/oficina.tsx:76](../../../../src/components/course-skins/oficina.tsx#L76) | pequeno |
| [`F244`](#f244) | 🟠 | Preço e condições de pagamento em cinza #a3a3a3 (2,5:1) sobre branco no card de investimento | `/particular/cursos/* (todas as 52)` | [src/components/particular-course-page.tsx:575](../../../../src/components/particular-course-page.tsx#L575) | trivial |
| [`F025`](#f025) | 🟡 | Callout 'Mini-projeto' hardcoda verde #075b45/#0a6e54 e ignora o tema do programa (roxo no JR, índigo no ACADEMIES) | `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos` +8 | [src/components/course-page.tsx:535](../../../../src/components/course-page.tsx#L535) | trivial |
| [`F243`](#f243) | 🟡 | 194 textos em branco a ≤40% de opacidade sobre fundo escuro (≤3,8:1) nas peles e landing do /particular | `/particular`, `/particular/cursos/* (peles ide, ti, design, oficina, marketing)`, `/particular/cursos/* (cabeçalho da sidebar)` | [src/routes/particular.index.tsx:456](../../../../src/routes/particular.index.tsx#L456) | pequeno |
| [`F249`](#f249) | 🟡 | Card azul da /contato: texto branco/90 sobre #0083C4 = 3,7:1 e botão branco quebra o padrão de CTA verde | `/contato` | [src/routes/contato.tsx:118](../../../../src/routes/contato.tsx#L118) | trivial |
| [`F304`](#f304) | 🟡 | Verde da marca significa três coisas: CTA de conversão, botão 'Entrar' (login) e 'produto para crianças' | `/`, `/cursos`, `/particular` | [src/components/site-header.tsx:271](../../../../src/components/site-header.tsx#L271) | pequeno |
| [`F003`](#f003) | ⚪ | Família /particular ignora os tokens da marca: 93 hex crus do verde e dois hovers diferentes | `/particular`, `/particular/cursos/* (52 páginas)` | [src/components/particular-course-page.tsx:268](../../../../src/components/particular-course-page.tsx#L268) | pequeno |
| [`F011`](#f011) | ⚪ | Azuis fora da paleta nas páginas institucionais: #5AB0F0, #7CC4F0, #2E8FCF, #14C29A, #0A6E57, #021F3A | `/`, `/cursos`, `/sobre` | [src/routes/index.tsx:889](../../../../src/routes/index.tsx#L889) | pequeno |

<a id="f016"></a>

## F016 · 🟠 CAMPS usa #0E9E8E no código, mas DS §2.1 e --st-camps definem #1C8299

- **Rotas:** `/cursos/camps`, `todas (header)`
- **Onde:** [src/routes/cursos.camps.tsx:44](../../../../src/routes/cursos.camps.tsx#L44)
- **Evidência:** cursos.camps.tsx:44 `const THEME = { primary: "#0E9E8E", dark: "#04325A", soft: "#8FDCCF" }`; eyebrows em :233 `style={{ color: THEME.primary }}`; título :184 span 'tranquilidade pra você' em #0E9E8E; site-header.tsx:31 'Colônia de Férias' `color: "#0E9E8E"`. axe cursos__camps/mobile.json: 5 nós color-contrast — '#0e9e8e sobre #ffffff bold 14px' = 3,33 ('A solução das férias', 'Como funciona', 'É ideal se você' 12px) e sobre #f9fbfe = 3,21. Cálculo: #0E9E8E/branco 3,33:1; token oficial #1C8299/branco = 4,47:1. CTA final :317 `linear-gradient(${THEME.dark} → #0A6E57)` mistura azul-marinho com verde do Júnior. Screenshot routes/cursos__camps/desktop.fold.png: hero em gradiente claro (from-[#e6f4f4]) enquanto §9.2 manda hero escuro na cor do programa (compare cursos__create/desktop.fold.png e cursos__junior/desktop.fold.png).
- **Problema:** A mesma página de Colônia de Férias tem a cor 'oficial' do programa no rodapé e uma cor diferente no hero e no item do menu. É exatamente o caso que o DS §2.1 proíbe ('não misture, não invente nova').
- **Correção sugerida:** Seguir o DS: cursos.camps.tsx:44 → `{ primary: "#1C8299", dark: "#0f5a6b", soft: "#6EC4CC" }` e site-header.tsx:31 → `#1C8299`. Para os eyebrows pequenos (text-sm, :233 e similares), usar `THEME.dark` (#0f5a6b, 7,8:1), porque #1C8299 dá 4,47:1 e ainda reprova AA em texto de 14px. CTA final :317: trocar `#0A6E57` por `#1C8299`.
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: DESIGN_SYSTEM.md:133,159,706 e styles.css:89 definem CAMPS #1C8299, e o código usa #0E9E8E (camps.tsx:44, site-header.tsx:31). O axe aponta 5 falhas color-contrast de 3,33:1. Calculei #1C8299 = 4,47:1, que ainda falha em texto pequeno. A parte do 'hero claro vs §9.2' não foi verificada.

<a id="f084"></a>

## F084 · 🟠 Título dos cards de pilares em CAMPS fica invisível (h3 herda text-white sobre card branco)

- **Rotas:** `/cursos/camps`
- **Onde:** [src/routes/cursos.camps.tsx:127](../../../../src/routes/cursos.camps.tsx#L127)
- **Evidência:** routes/cursos__camps/mobile.seg05.png e seg06.png: os 4 cards da seção "Muito além de passar o tempo" mostram ícone, um espaço vazio e a descrição — os títulos "Tecnologia", "Arte", "Cultura", "Recreação" não aparecem. Código: InfoCard `<h3 className="mt-5 text-base font-bold">` (cursos.camps.tsx:127) sem cor explícita; a section pai (linha 260) tem `text-white`, e o card tem `bg-white`. Na seção clara "Por que" (seg03.png) os mesmos títulos aparecem normalmente.
- **Problema:** A hierarquia do card some: o pai lê só a descrição sem saber qual pilar é. Texto branco sobre branco = contraste 1:1, falha WCAG 1.4.3 e quebra o padrão de card do DS §8.3.
- **Correção sugerida:** No InfoCard, fixar a cor do título: `<h3 className="mt-5 text-base font-bold text-foreground">{item.t}</h3>` e, por segurança, `text-foreground` no wrapper `div` do card (linha ~117), para que o card branco nunca herde `text-white` da section de atividades (linha 260).
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: Confirmado: h3 sem cor (cursos.camps.tsx:127) herda text-white da section (l.260) sobre card bg-white. mobile.seg05.png mostra só ícone e descrição; títulos 'Cultura'/'Recreação' somem. Contraste 1:1, WCAG 1.4.3.

<a id="f233"></a>

## F233 · 🟠 CTA verde #0DB88F com texto branco tem 2,5:1 — falha AA em todos os botões primários do site

- **Rotas:** `/`, `/cursos`, `/cursos/create/*`, `/cursos/junior/*`, `/cursos/camps`, `/cursos/academies`, `/contato`, `/sobre`, `/particular`, `/particular/cursos/* (todas as 52)`, `/sobre/visao`, `/privacidade`, `/termos`, `/pagina-que-nao-existe-404`
- **Onde:** [src/routes/index.tsx:265](../../../../src/routes/index.tsx#L265)
- **Evidência:** `--primary: oklch(0.58 0.14 240)` renderiza #0083c4 (axe: 'foreground color: #0083c4'), enquanto `--st-blue` = #187ABF (styles.css:79). axe: 10 nós '#0083c4 sobre #ffffff bold' = 4,18 (eyebrows `text-sm font-black uppercase tracking-[0.25em] text-primary` em home 'Depoimentos'/'Os programas', cursos 'Tecnologia', sobre 'Quem somos') + 8 nós normal = 4,18 (nav ativo 'Início'/'Contato' site-header, links mailto em /privacidade 15px, botão 404 bg-primary) + 3 nós sobre #f9fbfe = 4,04. `text-primary` aparece 24× em index.tsx, 10× em contato.tsx, 6× em sobre.index.tsx. Visível em routes/home/desktop.seg08.png (eyebrow 'DEPOIMENTOS' azul claro) e routes/pagina-que-nao-existe-404/desktop.fold.png.
- **Problema:** O botão de conversão principal (agendar aula / WhatsApp) e o 'Entrar' do header são os textos com pior contraste do site. Pais lendo no celular ao sol ou com baixa visão perdem justamente o CTA de venda. Viola WCAG 1.4.3 de forma sistêmica e a própria §12 do design system está errada.
- **Correção sugerida:** Criar token `--st-green-ink: #087F63` (branco sobre ele ≈5,0:1) e usar `bg-st-green-ink hover:bg-st-green-hover` nos ~20 botões `bg-st-green text-white` (index.tsx:265/421/626/1042/1117, course-page.tsx:244/961, site-header.tsx:270, cookie-consent.tsx:305/390 etc.), mantendo #0DB88F em ícones/glow. Alternativa: `text-st-blue-dark` sobre o verde (5,1:1). À parte: eyebrows `text-primary` (#0083c4, 4,18:1) → `text-st-blue-hover`. Corrigir §12 do DS, que afirma que o verde passa.
- **Esforço:** médio · **Severidade:** Alta (proposta Crítica, recalibrada na verificação)
- **Verificação:** parcial: Real: #0DB88F com branco = 2,54:1 (calculado), 14px black não é texto grande; ex.: index.tsx:265, site-header.tsx:270 'Entrar'. Mas a evidência citada trata de outro problema (--primary azul 4,18:1) e styles.css:83 não é a linha certa. DESIGN_SYSTEM.md:649 afirma, erroneamente, que o verde passa. Trocar a cor do botão é decisão de marca. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f241"></a>

## F241 · 🟠 CTAs coloridos das peles têm texto branco abaixo de 4,5:1 (laranja 2,8, verde-Excel 3,2, azul IDE 3,3, teal TI 3,7, vermelho 3,9)

- **Rotas:** `/particular/cursos/autocad`, `/particular/cursos/revit`, `/particular/cursos/modelagem-3d`, `/particular/cursos/impressao-3d`, `/particular/cursos/excel`, `/particular/cursos/office`, `/particular/cursos/word`, `/particular/cursos/powerpoint`, `/particular/cursos/power-bi`, `/particular/cursos/power-apps`, `/particular/cursos/excel-ia`, `/particular/cursos/excel-power-bi`, `/particular/cursos/backend`, `/particular/cursos/frontend`, `/particular/cursos/fullstack`, `/particular/cursos/python*`, `/particular/cursos/typescript`, `/particular/cursos/sql`, `/particular/cursos/mobile`, `/particular/cursos/jogos`, `/particular/cursos/n8n`, `/particular/cursos/make`, `/particular/cursos/git`, `/particular/cursos/logica`, `/particular/cursos/ads`, `/particular/cursos/manutencao`, `/particular/cursos/suporte`, `/particular/cursos/redes`, `/particular/cursos/ciberseguranca`, `/particular/cursos/linux`, `/particular/cursos/marketing`, `/particular/cursos/meta-ads`, `/particular/cursos/google-ads`, `/particular/cursos/tiktok-ads`, `/particular/cursos/copywriting`, `/particular/cursos/funil-vendas`, `/particular/cursos/seo`, `/particular/cursos/redes-sociais`, `/particular/cursos/ecommerce`, `/particular/cursos/ia*`, `/particular/cursos/agentes-ia`, `/particular/cursos/rag`, `/particular/cursos/chatgpt`, `/particular/cursos/conteudo-ia`
- **Onde:** [src/components/course-skins/oficina.tsx:76](../../../../src/components/course-skins/oficina.tsx#L76)
- **Evidência:** Cálculo WCAG (branco sobre accent): oficina #F97316 = 2,80; planilha #21A366 = 3,23; ide #4B8BF5 = 3,33; ti #0D9488 = 3,74; marketing #E5484D = 3,91; ia #8B5CF6 = 4,23 — todos < 4,5 para o texto 14px bold do botão. Passam só design #DB2777 (4,6) e informatica #0F6CD4 (5,1). Botões visíveis em routes/particular__cursos__autocad/desktop.fold.png ('QUERO SABER MAIS' laranja), excel (verde Excel), backend/mobile.fold.png ('Quero saber mais' azul #4B8BF5), manutencao (teal), copywriting (vermelho). axe não registrou porque o fundo é `var(--accent)` via CSS var + gradientes (classificado como 'incomplete').
- **Problema:** Em 40+ páginas de venda com ticket de R$ 2–8 mil, o botão que abre o WhatsApp é o texto de menor contraste da tela. Além do risco de acessibilidade, 'laranja com branco' e 'vermelho com branco' são combinações que a própria paleta da marca não prevê.
- **Correção sugerida:** Adicionar `accentInk` ao CourseTheme (lib/course-themes.ts) e `--accent-ink` em themeVars; usar `text-(--accent-ink)` nos CTAs (ide.tsx:43, oficina.tsx:76, planilha.tsx:151, marketing.tsx:167, ia.tsx:85, common.tsx:62/113). Valores: #171717 para oficina (6,4:1), planilha (5,6), ide (5,4), ti (4,8), marketing (4,6); IA manter branco trocando fundo do CTA para #7C3AED.
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: Recalculado: branco sobre #F97316 2,80; #21A366 3,23; #4B8BF5 3,33; #0D9488 3,74; #E5484D 3,91; #8B5CF6 4,23 — falha WCAG 1.4.3 para 14px bold. Linha 33 é o tema; CTA está em oficina.tsx:76. Argumento 'paleta não prevê' é fraco: o próprio #0DB88F com branco dá 2,54.

<a id="f244"></a>

## F244 · 🟠 Preço e condições de pagamento em cinza #a3a3a3 (2,5:1) sobre branco no card de investimento

- **Rotas:** `/particular/cursos/* (todas as 52)`
- **Onde:** [src/components/particular-course-page.tsx:575](../../../../src/components/particular-course-page.tsx#L575)
- **Evidência:** particular-course-page.tsx:575 `<p className="text-xs text-neutral-400">12x de</p>`, :579 `text-xs text-neutral-400` 'sem juros no cartão', :581 `text-xs text-neutral-400` 'ou R$ X à vista', :634 e :698 idem; particular.index.tsx:549/:559 'Endereço'/'Horário de atendimento' em `text-neutral-400`. rg: 47 usos de `text-neutral-400` em contexto claro (sem prefixo `dark:`). Cálculo: #a3a3a3 sobre #ffffff = 2,52:1; sobre #fafafa (bg-neutral-50) ainda menor. Screenshot routes/particular__cursos__excel/desktop.full.png (bloco 'Seu investimento': '12x de' e 'sem juros' em cinza-claro 12px).
- **Problema:** Informação de dinheiro (parcelas, valor à vista, juros) é a que mais precisa ser lida e está em 12px com metade do contraste mínimo — falha WCAG 1.4.3 e pode gerar reclamação de 'letra miúda' em oferta de R$ 3–8 mil.
- **Correção sugerida:** Nas linhas 575, 579 e 581 (e nos equivalentes em :634 e :698) trocar `text-neutral-400` por `text-neutral-600 dark:text-neutral-400` (#525252, ~7,8:1). Em particular.index.tsx:549/559 usar `text-neutral-500` (4,7:1). Revisar os outros `text-neutral-400` sem prefixo dark: com o mesmo critério.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: particular-course-page.tsx:575/579/581 '12x de', 'sem juros no cartão' e 'ou R$ X à vista' em text-xs text-neutral-400 (#a3a3a3 sobre branco = 2,5:1), no tema claro padrão (particular.tsx:138 dark=false). Falha WCAG 1.4.3 justamente na informação de preço.

<a id="f025"></a>

## F025 · 🟡 Callout 'Mini-projeto' hardcoda verde #075b45/#0a6e54 e ignora o tema do programa (roxo no JR, índigo no ACADEMIES)

- **Rotas:** `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/cursos/create/*-anos (6 páginas)`, `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`
- **Onde:** [src/components/course-page.tsx:535](../../../../src/components/course-page.tsx#L535)
- **Evidência:** course-page.tsx:523 `style={{ background: \`${theme.soft}30\` }}` (caixa da ferramenta) e :526 `<p className="font-bold" style={{ color: theme.primary }}>{mod.tool}</p>`; THEME dos cursos CREATE: `primary: "#187ABF", soft: "#49A8EB"` (cursos.create.8-9-anos.tsx:60-62). axe: 18 nós '#187abf sobre #dceefb bold 14px' = 3,86 ('MakeCode Arcade (gratuito)', 'Unity 2D + C#', 'MakeCode Arcade · JavaScript') nas 6 páginas CREATE mobile; mais 6 nós eyebrow 'Para quem é' #187ABF sobre #f9fbfe = 4,42 (course-page.tsx:376). Nas páginas JR o mesmo componente passa porque #512374 é escuro (axe JR: 0 violações de contraste).
- **Problema:** Nas 3 páginas do JR (roxo #512374) o card de módulo mistura roxo com um verde-escuro aleatório; DS §2.2: 'Cores dos programas apenas em peças daquele programa específico'. Inconsistência dentro do mesmo componente (ModuleCard vs LessonAccordion).
- **Correção sugerida:** course-page.tsx:535-536 → `<p className="text-[11px] font-black uppercase tracking-wider" style={{ color: theme.primary }}>Mini-projeto</p>` e `<p className="mt-0.5 text-foreground/85">{mod.project}</p>`, espelhando o LessonAccordion (:668-673). Opcional: `borderColor: theme.soft` em vez de `mod.badge.color + "40"` (:532) para o card seguir só o tema. Abrir item separado para o rótulo da ferramenta (:526): `theme.primary` sobre `${theme.soft}30` dá 3,86:1 nas páginas CREATE (falha AA) — trocar o fundo por `${theme.soft}1a` ou o texto por `theme.dark`.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Hardcode verde existe (course-page.tsx:535-536) e aparece sobre o roxo em cursos__junior__6-7-anos/mobile.seg07.png. Mas JR 5-6 não tem campo project (nada renderiza) e ACADEMIES não usa ModuleGrid — afeta 2 páginas JR, não 3+índigo. O contraste 3,86 (axe, 18 nós) vem de mod.tool em :526 (theme.primary sobre soft/30), defeito distinto que merece item próprio. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f243"></a>

## F243 · 🟡 194 textos em branco a ≤40% de opacidade sobre fundo escuro (≤3,8:1) nas peles e landing do /particular

- **Rotas:** `/particular`, `/particular/cursos/* (peles ide, ti, design, oficina, marketing)`, `/particular/cursos/* (cabeçalho da sidebar)`
- **Onde:** [src/routes/particular.index.tsx:456](../../../../src/routes/particular.index.tsx#L456)
- **Evidência:** rg em src: `text-white/40` 122×, `/35` 45×, `/30` 15×, `/25` 8×, `/20` 4× (194 total); maiores concentrações em course-skins/variants/ide-frontend.tsx (11), ide-backend.tsx (10), design-premiere.tsx (10), ide-typescript/ide-n8n/ide-mobile (9 cada), particular.index.tsx (5). Exemplos: particular.index.tsx:456 `text-xs text-white/40` (labels 'alunos formados' dos stats), :177 `text-[9px] ... text-white/35` ('ESCOLA'), :320 `text-white/45`. Cálculo sobre #171717 (neutral-900): /40 = 3,84:1, /35 = 3,22, /30 = 2,72, /25 = 2,26; sobre #0b0f19 (hero IDE): /40 = 3,81. Visível em routes/particular/desktop.fold.png (legendas cinza dos +300/+300/5,0) e routes/particular/mobile.fold.png ('ESCOLA' quase invisível).
- **Problema:** Opacidade é usada como escala tipográfica: quanto menor o texto, mais transparente — exatamente o inverso do que o contraste exige. Todos esses casos falham AA (4,5:1) e ficam abaixo até de AA-large (3:1) nos /30 e /25.
- **Correção sugerida:** Em textos (não ícones/decoração) sobre fundo escuro, subir text-white/40\|35\|30\|25 para text-white/60 no mínimo; começar por particular.index.tsx:177, :320 (/45→/70), :456, :619, :636, :655 e rótulos das peles. Registrar no DS §12: 'texto sobre fundo escuro: mínimo /60'.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação) · **Também apontado como:** F254
- **Verificação:** parcial: Contagem confere (123+45+15+8+4) mas inclui ícones, placeholders e decoração, não são 194 textos. Casos reais: particular.index.tsx:456 text-xs white/40 (~3,8:1, falha AA), :177 9px white/35. Rótulos secundários, não bloqueiam tarefa: media. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f249"></a>

## F249 · 🟡 Card azul da /contato: texto branco/90 sobre #0083C4 = 3,7:1 e botão branco quebra o padrão de CTA verde

- **Rotas:** `/contato`
- **Onde:** [src/routes/contato.tsx:118](../../../../src/routes/contato.tsx#L118)
- **Evidência:** contato.tsx:116 `rounded-3xl bg-primary p-10 text-primary-foreground`, :118 `<p className="mt-3 text-primary-foreground/90">Conheça a escola...</p>`, :120-122 botão branco 'Agendar agora' com texto azul. axe contato/desktop.json: 2 nós '#e5f3f9 sobre #0083c4 normal 16px' = 3,67. Screenshot routes/contato/desktop.fold.png: card 'Aula experimental gratuita' azul-ciano com botão branco, ao lado do 'Entrar' verde no header.
- **Problema:** É o único lugar do site onde o CTA de agendamento não é verde (§8.1/§9.2 'primário verde, sempre WhatsApp'), e o parágrafo de apoio falha AA. O ciano #0083C4 do `--primary` também destoa do azul-marinho dos outros cartões de CTA final (home: `linear-gradient(#04325A→#021F3A)`).
- **Correção sugerida:** Na l.116, trocar o card para `bg-st-blue-dark text-white`. Na l.118, usar `text-white/90`. Na l.120, o botão vira `bg-st-green text-st-blue-dark font-black glow-green` (cerca de 5:1). Evitar branco sobre verde: o axe mede 2,53:1.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: axe contato/desktop.json: #e5f3f9 sobre #0083c4 dá 3,67 (falha AA). O botão com texto #0083c4 sobre branco, 14px bold, fica em cerca de 4,18 e também falha. DS §9.2 (DESIGN_SYSTEM.md:511) define o CTA primário verde com WhatsApp.

<a id="f304"></a>

## F304 · 🟡 Verde da marca significa três coisas: CTA de conversão, botão 'Entrar' (login) e 'produto para crianças'

- **Rotas:** `/`, `/cursos`, `/particular`
- **Onde:** [src/components/site-header.tsx:271](../../../../src/components/site-header.tsx#L271)
- **Evidência:** site-header.tsx:271 'Entrar' `bg-st-green glow-green` (mesmo tratamento do CTA hero index.tsx:419); index.tsx:556-560 copy 'a cor já mostra de quem é cada um: verde para as crianças e azul para os adolescentes' (routes/home/desktop.seg10.png); DESIGN_SYSTEM §2.2 'Verde para botões, CTA'. No menu mobile o único botão é 'Entrar' verde full-width (site-header.tsx:278; specials/menu-mobile-open.png) — sem CTA de agendamento.
- **Problema:** color.md › Best practices: 'Avoid using the same color to mean different things… using the same or similar color to stylize noninteractive text is confusing'. branding.md › 'Apply your app's accent color judiciously… for primary actions'. Login é ação de aluno matriculado, não do prospect; competir em cor com 'Agende a aula' dilui o CTA. E codificar idade por cor viola color.md › Inclusive color ('Avoid relying solely on color').
- **Correção sugerida:** Header desktop: 'Entrar' vira secundário `border border-border text-foreground hover:bg-muted` (sem glow-green). Menu mobile: adicionar CTA verde 'Agendar aula experimental' acima de 'Entrar'. Manter a frase da cor por idade em index.tsx:558-560 só se os chips de idade continuarem visíveis (já estão) — não é violação, pois a cor não é o único código.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Entrar usa o mesmo bg-st-green+glow-green do CTA (site-header.tsx:271) e não há CTA de agendamento no header (grep 'Agend' vazio). Mas a codificação por idade tem rótulo textual, então 'depender só da cor' é exagero. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f003"></a>

## F003 · ⚪ Família /particular ignora os tokens da marca: 93 hex crus do verde e dois hovers diferentes

- **Rotas:** `/particular`, `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/particular-course-page.tsx:268](../../../../src/components/particular-course-page.tsx#L268)
- **Evidência:** grep: `bg-[#0DB88F]` 45×, `text-[#0DB88F]` 36×, `border-[#0DB88F]` 12× — todos em particular*.tsx e course-skins/; `bg-st-green`/`text-primary` = 0 nesses arquivos. Hover: `hover:bg-[#0aaa82]` 9× (particular-course-page.tsx:268,605,666,708; particular.index.tsx:209,606; particular.tsx:572; particular-faq.tsx:548) e course-themes.ts:33 `accentHover: "#0aaa82"`, enquanto o token oficial é styles.css:84 `--st-green-hover: #0aa37e` (usado por `.bg-st-green:hover`).
- **Problema:** O mesmo verde da marca vive em duas grafias e o hover em dois tons distintos (#0aa37e vs #0aaa82). Qualquer ajuste de paleta precisa ser feito em ~100 pontos; DS §14 exige 'cores vieram dos tokens, nunca hex direto'.
- **Correção sugerida:** Buscar e substituir: `bg-[#0DB88F]`→`bg-st-green`, `text-[#0DB88F]`→`text-st-green`, `hover:bg-[#0aaa82]`→remover, course-themes.ts:33 `accentHover: "#0aa37e"`. Antes, criar `.border-st-green` e `.bg-st-green/10` em styles.css:270+ (hoje não existem). Cuidado com `bg-[#0DB88F]/10`, que precisa de token equivalente.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: 45 bg + 36 text + 12 border com hex cru, e 9 hovers #0aaa82 contra o token styles.css:84 #0aa37e. A diferença entre os dois hovers é imperceptível, então é higiene de código (DS §14) e não defeito visível. Rebaixado para baixa. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f011"></a>

## F011 · ⚪ Azuis fora da paleta nas páginas institucionais: #5AB0F0, #7CC4F0, #2E8FCF, #14C29A, #0A6E57, #021F3A

- **Rotas:** `/`, `/cursos`, `/sobre`
- **Onde:** [src/routes/index.tsx:889](../../../../src/routes/index.tsx#L889)
- **Evidência:** index.tsx:889,891,912,913,917 `text-[#5AB0F0]`/`border-[#5AB0F0]/60`; sobre.index.tsx:132,146 `text-[#5AB0F0]`, :231 `text-[#7CC4F0]`; index.tsx:881 e sobre.index.tsx:124 gradiente `#04325A → #021F3A`; index.tsx:637 `from-[#eef5fb]`; gradientes KIDS/TEENS `#14C29A→#0A6E57` e `#2E8FCF→#04325A` duplicados em index.tsx:97-134 e cursos.index.tsx:39-44 (e em 8 rotas apresentacoes/professores). Nenhum desses hex está em DS §2; o azul-claro oficial é `#49A8EB`. Comentário stale em cursos.index.tsx:35: 'crianças = laranja, adolescentes = roxo' (código é verde/azul).
- **Problema:** O guia lista `#49A8EB` como azul claro vibrante, mas o código inventou dois vizinhos (#5AB0F0, #7CC4F0) e dois verdes/azuis de gradiente (#14C29A, #2E8FCF) sem registro. Os gradientes de idade (regra de comunicação visual 'verde crianças / azul adolescentes') vivem copiados em 10 arquivos — mudar a cor de uma faixa exige 10 edições.
- **Correção sugerida:** Substituir text-[#5AB0F0]/border-[#5AB0F0]/bg-[#5AB0F0] (index.tsx:889,891,912,913,917; sobre.index.tsx:132,146) e text-[#7CC4F0] (sobre:231) por #49A8EB via token --st-blue-light em styles.css. Corrigir o comentário de cursos.index.tsx:35 para 'crianças = verde, adolescentes = azul'. Centralizar os gradientes KIDS/TEENS (8 arquivos) em uma constante de src/lib.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: grep confirma que #5AB0F0/#7CC4F0 não estão no DS (§2 lista #49A8EB na l.104). #14C29A aparece em 8 arquivos. O comentário de cursos.index.tsx:35 diz 'laranja/roxo', mas o código usa verde/azul. Os tons são quase iguais, então o impacto visual é baixo.
