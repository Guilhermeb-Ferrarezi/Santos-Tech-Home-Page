# Auditoria de UI, UX e Design — santos-tech.com

> **Data:** 24/09/2026 · **Base:** commit `5885a36` (igual ao `master` em produção) · **Escopo:** as 75 rotas públicas do `sitemap.xml` + página 404, em desktop, mobile e tablet.
> **Método:** enxame de agentes em 5 etapas — 18 lentes especializadas acharam problemas → verificação adversarial (cada achado checado no código e na screenshot, tentando refutar) → painel de 3 designers + juiz → crítico de completude → síntese. Referências: `DESIGN_SYSTEM.md` (fonte de verdade da marca), Apple Human Interface Guidelines e WCAG 2.2.
> **Como ler:** 🔴 crítica · 🟠 alta · 🟡 média · ⚪ baixa. Cada achado tem id (ex.: `F012`), rota, arquivo:linha e a correção sugerida. Comece pelas seções 1 a 4; a seção 6 é o detalhe técnico.

## 1. Sumário executivo

**Nota 5,1/10.** Média das 10 dimensões, pesada pelo número de problemas de cada uma. O painel de 3 designers, olhando só a tela, deu 5,8; o código revelou o que a tela esconde.

**Estado geral.** A marca é forte e o conteúdo é rico, mas o site foi montado página a página, sem regra única. É bonito de ver e difícil de comprar: o que decide a matrícula (preço, programa certo, botão de contato) chega tarde, apagado ou contraditório. São 346 problemas confirmados, nenhum refutado.

**5 padrões que explicam a maior parte**
- **Botão e preço difíceis de ler.** O verde da marca com letra branca reprova o teste de contraste (legibilidade) em todos os botões de venda; o preço sai em cinza claro de 12px. Pai no sol não enxerga onde clicar.
- **Dois catálogos no mesmo site.** Home e menu vendem "Júnior 5–9 / Create 10–15"; as páginas de curso dizem "JR 5–8 / CREATE 8–14", com outra cor. E 11 dessas páginas não recebem nenhum link.
- **Público adulto escondido.** Nada no menu, rodapé ou home leva ao /particular. No computador, a lista de cursos fica branca sobre branco.
- **Promessa sem prova.** "Emprego em 60 dias", "certificado reconhecido", "robôs" que o FAQ nega, horário de sábado errado. Risco no Código de Defesa do Consumidor.
- **Enfeite na frente do conteúdo.** Abertura de 1,4s, blocos que nascem invisíveis, WhatsApp cobrindo o link de cookies (LGPD), home com 14 telas no celular.

**O que já está bom**
- Identidade reconhecível (azul + verde, Poppins, números grandes) e design system escrito.
- Fotos reais de aula e nota 5,0 com 329 avaliações no Google.
- Ementa detalhada e preço em 12x nas 52 páginas particulares.
- Quase todas as animações respeitam o "reduzir movimento".

**O que muda para o pai e o aluno**
- Acha o curso certo para a idade do filho, com uma resposta só.
- Vê preço e contato sem caçar, e chega no WhatsApp já dizendo qual curso quer.
- O adulto descobre a aula particular, e o site parece uma escola só: organizada e confiável.

### Notas por dimensão

| Dimensão | Nota | Achados | Mais importantes |
|---|---:|---:|---|
| [Tipografia e formatação de texto](#61) | 5 | 66 | [`F083`](achados/tipografia-texto.md#f083) [`F108`](achados/tipografia-texto.md#f108) [`F104`](achados/tipografia-texto.md#f104) |
| [Cor, contraste e identidade visual](#62) | 5 | 11 | [`F233`](achados/cor-identidade.md#f233) [`F244`](achados/cor-identidade.md#f244) [`F241`](achados/cor-identidade.md#f241) |
| [Layout, espaçamento e responsividade](#63) | 5,5 | 48 | [`F159`](achados/layout-responsivo.md#f159) [`F142`](achados/layout-responsivo.md#f142) [`F125`](achados/layout-responsivo.md#f125) |
| [Acessibilidade](#64) | 4,5 | 21 | [`F255`](achados/acessibilidade.md#f255) [`F268`](achados/acessibilidade.md#f268) [`F257`](achados/acessibilidade.md#f257) |
| [UX, navegação e conversão](#65) | 5 | 61 | [`F175`](achados/ux-conversao.md#f175) [`F216`](achados/ux-conversao.md#f216) [`F197`](achados/ux-conversao.md#f197) |
| [Copy e consistência de linguagem](#66) | 5 | 37 | [`F358`](achados/copy.md#f358) [`F337`](achados/copy.md#f337) [`F360`](achados/copy.md#f360) |
| [Motion e interação](#67) | 4,5 | 16 | [`F032`](achados/motion.md#f032) [`F034`](achados/motion.md#f034) [`F036`](achados/motion.md#f036) |
| [Consistência do design system e componentes](#68) | 5 | 31 | [`F001`](achados/design-system.md#f001) [`F234`](achados/design-system.md#f234) [`F240`](achados/design-system.md#f240) |
| [Imagens, ilustrações e ícones](#69) | 5 | 19 | [`F275`](achados/imagens.md#f275) [`F284`](achados/imagens.md#f284) [`F276`](achados/imagens.md#f276) |
| [Técnico percebido: performance, estabilidade e metadados](#610) | 6 | 16 | [`F323`](achados/tecnico.md#f323) [`F322`](achados/tecnico.md#f322) [`F325`](achados/tecnico.md#f325) |

**Em números:**

| Etapa | Quantidade |
|---|---:|
| Achados brutos (18 lentes) | 445 |
| Únicos após deduplicação automática | 383 |
| Confirmados na verificação | 346 |
| Refutados ou descartados (listados no fim) | 37 |
| Sem verificação (falha de agente) | 0 |
| Extras do crítico de completude confirmados | 7 |
| Duplicatas fundidas na síntese | 27 |
| **Achados finais** | **326** (🔴 4 · 🟠 32 · 🟡 139 · ⚪ 151) |

### Lighthouse mobile (produção, santos-tech.com)

| Página | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---|---|---|
| `/contato` | 81 | 96 | 96 | 100 | 3.8 s | 0 | 0 ms |
| `/cursos/create/8-9-anos` | 70 | 96 | 96 | 100 | 5.1 s | 0 | 10 ms |
| `/` | 68 | 92 | 96 | 100 | 5.7 s | 0 | 90 ms |
| `/particular/cursos/excel` | 73 | 100 | 100 | 100 | 4.6 s | 0 | 0 ms |

_Meta do `DESIGN_SYSTEM.md` §1.5: 90+ em Performance. LCP (tempo até o maior elemento aparecer) acima de 2,5 s é considerado lento pelo Google._

## 2. Top 10 prioridades (impacto ÷ esforço)

| # | Achado | Sev. | Esforço | Por quê |
|---:|---|---|---|---|
| 1 | [`F032`](achados/motion.md#f032) Clicar em "Ver todos os programas" já em /cursos deixa a página em branco (main fica opacity 0) | 🔴 | trivial | Quem clica em "Ver todos os programas" estando na própria página de cursos fica com a tela em branco, e é o link principal para o catálogo; a correção é de uma linha. |
| 2 | [`F323`](achados/tecnico.md#f323) www.santos-tech.com não resolve — quem digita com www cai em erro de DNS | 🟠 | trivial | Quem digita www.santos-tech.com ou recebe o link assim pelo WhatsApp ou pelo cartão cai numa página de erro, e a venda se perde antes do primeiro clique; o conserto leva 5 minutos no Cloudflare. |
| 3 | [`F175`](achados/ux-conversao.md#f175) /particular não tem nenhuma entrada no header, footer ou home — público adulto órfão | 🟠 | pequeno | Nenhum menu, rodapé ou bloco da home leva às aulas particulares, então o pai que também quer Excel ou IA para si nunca descobre que a escola vende isso. |
| 4 | [`F255`](achados/acessibilidade.md#f255) Sidebar do /particular fica ilegível no desktop: texto branco sobre fundo claro (fusion tone) | 🔴 | pequeno | No computador, a lista de cursos do /particular aparece branca sobre branco, e o adulto que chega para comprar não enxerga o catálogo de 52 cursos. |
| 5 | [`F358`](achados/copy.md#f358) Promessa de emprego em prazo fixo no hero do Suporte Técnico ("primeiro emprego em TI em 60 dias") | 🔴 | trivial | Prometer "primeiro emprego em TI em 60 dias" é promessa de resultado que a escola não controla; expõe a escola ao Código de Defesa do Consumidor e contradiz a própria duração do curso. |
| 6 | [`F244`](achados/cor-identidade.md#f244) Preço e condições de pagamento em cinza #a3a3a3 (2,5:1) sobre branco no card de investimento | 🟠 | trivial | Parcela, valor à vista e condições aparecem em cinza claro de 12px, o que parece letra miúda escondida justamente numa compra de R$ 3 a 8 mil. |
| 7 | [`F216`](achados/ux-conversao.md#f216) Sem CTA persistente: 10 telas mobile seguidas sem nenhum botão de contato nas páginas de curso | 🟠 | trivial | As páginas de curso particular passam 10 telas de celular sem nenhum botão de contato, e quem se convence no meio da leitura precisa caçar onde falar com a escola. |
| 8 | [`F256`](achados/acessibilidade.md#f256) FAB do WhatsApp cobre o botão "Cookies" e "Termos de Uso" do rodapé no mobile | 🟠 | trivial | No celular, o botão do WhatsApp cobre o link de Cookies e os Termos de Uso, que a LGPD exige que possam ser clicados; a correção é trivial e tira um risco legal. |
| 9 | [`F180`](achados/ux-conversao.md#f180) 6 dos 11 CTAs da home são 'Quero saber mais' idênticos, todos com a mesma mensagem genérica de WhatsApp | 🟡 | pequeno | A maioria dos botões manda a mesma mensagem genérica ao WhatsApp, e a equipe recomeça cada conversa perguntando curso e idade, quando o site já sabia essas duas coisas. |
| 10 | [`F233`](achados/cor-identidade.md#f233) CTA verde #0DB88F com texto branco tem 2,5:1 — falha AA em todos os botões primários do site | 🟠 | médio | O botão verde de agendar aula, que gera todo o contato, é o texto menos legível do site no sol; corrigir num lugar só melhora todas as páginas de venda. |

## 3. Plano de ataque

### Fase 1 · Quick wins (1–2 dias)

**Objetivo:** Tirar do ar, sem mexer na marca, o que hoje quebra venda, confiança ou lei: tela em branco, www fora do ar, Google enxergando o site pela metade, público adulto escondido, sidebar ilegível, promessas sem prova, informações erradas, preço apagado, contato ausente e link de cookies coberto.  
**Esforço estimado:** 1–2 dias de desenvolvimento + 5 minutos do Henrique no painel do Cloudflare (registro www e redirecionamento, com o passo a passo pronto no achado F323)

| Achado | Sev. | Esforço | Onde |
|---|---|---|---|
| [`F032`](achados/motion.md#f032) Clicar em "Ver todos os programas" já em /cursos deixa a página em branco (main fica opacity 0) | 🔴 | trivial | [src/components/page-transition-link.tsx:31](../../../src/components/page-transition-link.tsx#L31) |
| [`F323`](achados/tecnico.md#f323) www.santos-tech.com não resolve — quem digita com www cai em erro de DNS | 🟠 | trivial | DNS Cloudflare (fora do repo) — public/robots.txt |
| [`F322`](achados/tecnico.md#f322) robots.txt bloqueia /assets/ — Googlebot não consegue renderizar CSS, JS, fontes e imagens | 🟡 | trivial | [public/robots.txt:8](../../../public/robots.txt#L8) |
| [`F175`](achados/ux-conversao.md#f175) /particular não tem nenhuma entrada no header, footer ou home — público adulto órfão | 🟠 | pequeno | [src/components/site-header.tsx:22](../../../src/components/site-header.tsx#L22) |
| [`F255`](achados/acessibilidade.md#f255) Sidebar do /particular fica ilegível no desktop: texto branco sobre fundo claro (fusion tone) | 🔴 | pequeno | [src/routes/particular.tsx:216](../../../src/routes/particular.tsx#L216) |
| [`F159`](achados/layout-responsivo.md#f159) Pele IDE e landing /particular não vazam o fundo: sidebar inteira com texto branco sobre cinza-claro | 🔴 | pequeno | [src/components/course-skins/ide.tsx:62](../../../src/components/course-skins/ide.tsx#L62) |
| [`F358`](achados/copy.md#f358) Promessa de emprego em prazo fixo no hero do Suporte Técnico ("primeiro emprego em TI em 60 dias") | 🔴 | trivial | [src/routes/particular.cursos.suporte.tsx:24](../../../src/routes/particular.cursos.suporte.tsx#L24) |
| [`F360`](achados/copy.md#f360) "Certificado reconhecido em todo o território nacional" — claim sem base para curso livre | 🟠 | trivial | [src/components/course-skins/common.tsx:187](../../../src/components/course-skins/common.tsx#L187) |
| [`F359`](achados/copy.md#f359) ADS: 48 aulas vendidas como "formação formal" substituta de graduação e nível "sênior" | 🟠 | pequeno | [src/routes/particular.cursos.ads.tsx:40](../../../src/routes/particular.cursos.ads.tsx#L40) |
| [`F361`](achados/copy.md#f361) Card "Pacote Office + IA" vende IA, mas o curso linkado (/office) não tem IA | 🟠 | trivial | [src/routes/particular.index.tsx:79](../../../src/routes/particular.index.tsx#L79) |
| [`F181`](achados/ux-conversao.md#f181) Home promete 'robôs' e 'Robótica' no hero, mas o FAQ diz que a escola não trabalha com robótica | 🟠 | trivial | [src/routes/index.tsx:413](../../../src/routes/index.tsx#L413) |
| [`F340`](achados/copy.md#f340) Horário de funcionamento: "Seg a Sáb · 8h às 22h" na home contradiz sábado até 18h | 🟠 | trivial | [src/routes/index.tsx:1080](../../../src/routes/index.tsx#L1080) |
| [`F244`](achados/cor-identidade.md#f244) Preço e condições de pagamento em cinza #a3a3a3 (2,5:1) sobre branco no card de investimento | 🟠 | trivial | [src/components/particular-course-page.tsx:575](../../../src/components/particular-course-page.tsx#L575) |
| [`F256`](achados/acessibilidade.md#f256) FAB do WhatsApp cobre o botão "Cookies" e "Termos de Uso" do rodapé no mobile | 🟠 | trivial | [src/components/whatsapp-fab.tsx:32](../../../src/components/whatsapp-fab.tsx#L32) |
| [`F216`](achados/ux-conversao.md#f216) Sem CTA persistente: 10 telas mobile seguidas sem nenhum botão de contato nas páginas de curso | 🟠 | trivial | [src/routes/__root.tsx:200](../../../src/routes/__root.tsx#L200) |

### Fase 2 · Sprint de consistência (1 semana)

**Objetivo:** Uma receita única para botão, cor, texto e movimento: botões e preços legíveis em todo o site, WhatsApp chegando com o nome do curso, conteúdo visível sem esperar animação, menus que funcionam no toque e no teclado, home mais curta no celular e design system atualizado para o erro não voltar.  
**Esforço estimado:** 5–7 dias de desenvolvimento, sem depender do Henrique (o preloader de F036 segue a decisão 9)

| Achado | Sev. | Esforço | Onde |
|---|---|---|---|
| [`F233`](achados/cor-identidade.md#f233) CTA verde #0DB88F com texto branco tem 2,5:1 — falha AA em todos os botões primários do site | 🟠 | médio | [src/routes/index.tsx:265](../../../src/routes/index.tsx#L265) |
| [`F241`](achados/cor-identidade.md#f241) CTAs coloridos das peles têm texto branco abaixo de 4,5:1 (laranja 2,8, verde-Excel 3,2, azul IDE 3,3, teal TI 3,7, vermelho 3,9) | 🟠 | pequeno | [src/components/course-skins/oficina.tsx:76](../../../src/components/course-skins/oficina.tsx#L76) |
| [`F180`](achados/ux-conversao.md#f180) 6 dos 11 CTAs da home são 'Quero saber mais' idênticos, todos com a mesma mensagem genérica de WhatsApp | 🟡 | pequeno | [src/lib/whatsapp.ts:36](../../../src/lib/whatsapp.ts#L36) |
| [`F217`](achados/ux-conversao.md#f217) FAQ "Quanto custa?" manda pro WhatsApp na mesma página que mostra o preço | 🟠 | pequeno | [src/components/particular-faq-items.ts:36](../../../src/components/particular-faq-items.ts#L36) |
| [`F001`](achados/design-system.md#f001) CTA primário não tem componente: 20+ variações de classe para o mesmo botão verde | 🟡 | médio | [src/routes/index.tsx:421](../../../src/routes/index.tsx#L421) |
| [`F236`](achados/design-system.md#f236) Botão 'Entrar' (login) em verde CTA + glow no header de todas as páginas compete com o CTA de venda | 🟡 | trivial | [src/components/site-header.tsx:271](../../../src/components/site-header.tsx#L271) |
| [`F034`](achados/motion.md#f034) Reveal/IconPop nascem com opacity:0 no HTML do servidor — conteúdo invisível até hidratar (ou para sempre sem JS) | 🟠 | pequeno | [src/hooks/use-reveal.ts:42](../../../src/hooks/use-reveal.ts#L42) |
| [`F036`](achados/motion.md#f036) Preloader bloqueia a home por ~1,4s em TODA montagem, sem cancelar nem lembrar a sessão | 🟠 | pequeno | [src/components/preloader.tsx:48](../../../src/components/preloader.tsx#L48) |
| [`F177`](achados/ux-conversao.md#f177) Dropdowns do header abrem só por hover — teclado e touch em tablet não alcançam os itens | 🟠 | pequeno | [src/components/site-header.tsx:405](../../../src/components/site-header.tsx#L405) |
| [`F257`](achados/acessibilidade.md#f257) Sidebar do /particular fora da tela continua focável no mobile; drawer sem foco, Escape ou inert | 🟠 | pequeno | [src/routes/particular.tsx:323](../../../src/routes/particular.tsx#L323) |
| [`F104`](achados/tipografia-texto.md#f104) Resultado do curso (outcome) é um parágrafo único de 250–416 caracteres, todo em negrito | 🟠 | médio | [src/components/course-skins/variants/planilha-excel.tsx:88](../../../src/components/course-skins/variants/planilha-excel.tsx#L88) |
| [`F083`](achados/tipografia-texto.md#f083) MetricCard com valores textuais ("Avançado", "Hands-on") sobrepõe texto no mobile | 🟠 | pequeno | [src/components/course-page.tsx:130](../../../src/components/course-page.tsx#L130) |
| [`F192`](achados/ux-conversao.md#f192) Home mobile tem 24 mil px; preço e 'como matricular' só depois de ~9 telas e duas seções com scroll travado | 🟡 | pequeno | [src/routes/index.tsx:458](../../../src/routes/index.tsx#L458) |
| [`F289`](achados/imagens.md#f289) Decoração binária "01001/10110" sobrepõe texto no hero da home e na legenda de /cursos | 🟡 | trivial | [src/components/decorative-elements.tsx:68](../../../src/components/decorative-elements.tsx#L68) |
| [`F030`](achados/design-system.md#f030) DESIGN_SYSTEM.md desatualizado em 6 pontos que o código já superou (ícone do CTA, numeração §7, footer, H1, raio de card) | 🟡 | pequeno | [DESIGN_SYSTEM.md:403](../../../DESIGN_SYSTEM.md#L403) |

### Fase 3 · Evolução de marca (decisões do dono)

**Objetivo:** Depois das decisões do Henrique: um catálogo infantil só (nome, idade, cor e link), preço no infantil, /particular com a cara da escola num template único, e material real (fotos, depoimentos e projetos de aluno) no lugar do genérico.  
**Esforço estimado:** 2–4 semanas de desenvolvimento após as decisões + 1 dia de ensaio fotográfico e coleta de depoimentos reais

| Achado | Sev. | Esforço | Onde |
|---|---|---|---|
| [`F197`](achados/ux-conversao.md#f197) /cursos e header vendem 4 produtos que não batem com os programas reais (idades e nomes) | 🟠 | médio | [src/routes/cursos.index.tsx:62](../../../src/routes/cursos.index.tsx#L62) |
| [`F337`](achados/copy.md#f337) Faixas etárias e nomes de programa contradizem-se entre Home/Programas e páginas JR/CREATE | 🟠 | grande | [src/routes/index.tsx:92](../../../src/routes/index.tsx#L92) |
| [`F299`](achados/ux-conversao.md#f299) 11 páginas de programa/curso infantil não têm nenhum link a partir da home, header, footer ou /cursos | 🟠 | pequeno | [src/components/site-header.tsx:23](../../../src/components/site-header.tsx#L23) |
| [`F234`](achados/design-system.md#f234) Duas paletas de programa concorrentes: Júnior=verde/Create=azul (home, /cursos, header) vs JR=roxo/CREATE=#0067BE (páginas do programa, footer, DS) | 🟡 | médio | [src/routes/index.tsx:561](../../../src/routes/index.tsx#L561) |
| [`F304`](achados/cor-identidade.md#f304) Verde da marca significa três coisas: CTA de conversão, botão 'Entrar' (login) e 'produto para crianças' | 🟡 | pequeno | [src/components/site-header.tsx:271](../../../src/components/site-header.tsx#L271) |
| [`F199`](achados/ux-conversao.md#f199) Preço ausente em todas as sales pages e na Academies; só a Colônia mostra valor | 🟡 | pequeno | [src/routes/cursos.create.8-9-anos.tsx:214](../../../src/routes/cursos.create.8-9-anos.tsx#L214) |
| [`F240`](achados/design-system.md#f240) Família /particular abandona a identidade da marca: preto neutral-900 + verde, sem azul, pill 'PARTICULAR' e 'Login' pretos | 🟡 | grande | [src/routes/particular.index.tsx:164](../../../src/routes/particular.index.tsx#L164) |
| [`F286`](achados/design-system.md#f286) Duas linguagens de ilustração na mesma página de curso: mockup UI realista no hero, cartoon flat abaixo | 🟡 | médio | [src/components/course-illustrations.tsx:5](../../../src/components/course-illustrations.tsx#L5) |
| [`F282`](achados/imagens.md#f282) Cards "Cursos mais populares" em /particular usam fotos stock genéricas (rede neural, código matrix) | 🟡 | médio | [src/routes/particular.index.tsx:145](../../../src/routes/particular.index.tsx#L145) |
| [`F277`](achados/imagens.md#f277) Uma única aluna aparece em 5 dos 9 espaços de foto da home (2 dos 4 quadros do hero, sempre) | 🟡 | pequeno | [src/components/hero-collage.tsx:14](../../../src/components/hero-collage.tsx#L14) |
| [`F275`](achados/imagens.md#f275) Fotos students-1..4 têm só 305px de fonte e são esticadas a ~600px (borradas em 12 páginas) | 🟡 | pequeno | [src/components/course-page.tsx:201](../../../src/components/course-page.tsx#L201) |
| [`F284`](achados/imagens.md#f284) Home no celular não mostra nenhuma foto no hero (colagem é `hidden lg:block`) | 🟡 | pequeno | [src/components/hero-collage.tsx:78](../../../src/components/hero-collage.tsx#L78) |
| [`F189`](achados/ux-conversao.md#f189) Prova social fala com pais, mas 8 dos 9 depoimentos são de alunos adultos e as citações são cortadas | 🟡 | médio | [src/components/testimonials.tsx:97](../../../src/components/testimonials.tsx#L97) |
| [`F220`](achados/ux-conversao.md#f220) Prova social sem verificação: nota Google sem link, stat duplicado e zero depoimentos em toda a área particular | 🟡 | pequeno | [src/routes/particular.index.tsx:216](../../../src/routes/particular.index.tsx#L216) |
| [`F313`](achados/copy.md#f313) /particular: '+300 alunos formados' e '+300 carreiras transformadas' — mesmo número, sem fonte, promete resultado | 🟡 | trivial | [src/routes/particular.index.tsx:235](../../../src/routes/particular.index.tsx#L235) |

## 4. Decisões que só o Henrique toma

⚠️ _Aguardando Henrique._ Cada item já vem com a recomendação — basta responder numerado ("1 sim, 2 não…").

1. Qual catálogo infantil vale hoje? Recomendo o da home (Júnior 5–9 / Create 10–15), atualizando as 11 páginas JR/CREATE e ligando-as ao menu. Motivo: é o mais recente e o que o pai navega, e hoje ele recebe duas respostas para a mesma idade.

2. Cor dos programas: recomendo cor por faixa etária (Júnior roxo, Create azul), com o verde reservado ao botão de ação. Motivo: hoje o verde quer dizer ao mesmo tempo 'comprar', 'entrar' e 'crianças', e o pai perde a pista de onde clicar.

3. Mostrar preço no infantil: recomendo 'a partir de R$ X/mês' com o que está incluído, num bloco de investimento, e a pergunta de preço no topo do FAQ. Motivo: preço é a primeira objeção de quem compara escolas. Até você decidir, nenhum valor entra no site.

4. Número real de alunos formados: recomendo passar um número verificável ou remover o '+300', que hoje aparece duas vezes no /particular. Motivo: número sem fonte repetido em duas métricas soa como propaganda para o adulto que está comparando.

5. Nome do curso 'ADS': recomendo 'Trilha Full Stack (inspirada na grade de ADS)'. Motivo: ADS é o nome de um curso superior, e usar o nome sozinho sugere um diploma que a escola não emite.

6. /particular com a cara da escola: recomendo aprovar um template único com o fundo azul-marinho da paleta oficial, mudando só a cor de destaque por categoria. Motivo: hoje as 8 categorias parecem 8 empresas diferentes, e o adulto não reconhece a Santos Tech.

7. Ensaio fotográfico de 1 dia (incluindo aula individual de adulto) e 2 depoimentos reais do Google por programa: recomendo fazer já. Motivo: as mesmas 3 crianças se repetem em todo o site, e uma escola premium se prova com gente e trabalho reais.

8. Retomar a fase de SVGs que você adiou: recomendo começar só depois do ensaio fotográfico. Motivo: foto real tira a cara de genérico mais rápido e mais barato que ilustração.

9. Tela de abertura (preloader) da home: recomendo remover. Motivo: são 1,4 s de tela azul em toda visita, sem carregar nada. Se quiser manter como assinatura, que apareça só na primeira visita da sessão.

10. Banner de cookies: recomendo que 'Recusar' tenha o mesmo peso de 'Aceitar', ou seja, um clique só. Motivo: a LGPD exige consentimento livre, e hoje o código registra essa diferença como risco assumido.

11. Formulário no /contato: recomendo não fazer agora. Motivo: o WhatsApp com a mensagem do curso já resolve a maior parte, e um formulário passaria a coletar dado pessoal (LGPD) e exigiria backend.

**Recomendação final:** Aprovar hoje a Fase 1, que leva 1 a 2 dias de desenvolvimento e não mexe na marca, e fazer em paralelo os 5 minutos no Cloudflare para o www voltar a funcionar. Enquanto ela roda, responder as decisões 1 a 3 (catálogo, cor dos programas e preço do infantil): são elas que liberam a Fase 3. A Fase 2 começa logo depois da Fase 1 e não depende de você.

## 5. Direção de design — painel de 3 designers + juiz

**Nota de consenso: 5.8/10**

Nota 5,8, média das três visões (6,5 / 5,5 / 5,5). O painel concorda no diagnóstico: o lado infantil tem uma ideia clara e um sistema visual coeso. Já o /particular parece outra empresa, e a jornada entrega o que vende (preço, programas, contexto do curso) tarde demais. Conferi as alegações no código e nas capturas. A maioria se confirma. Achei ainda um problema maior do que o painel viu: existem duas classificações de programa convivendo. Home, /cursos e menu vendem 'Júnior 5–9 verde / Create 10–15 azul'. As páginas de venda dizem JR 5–8 roxo e CREATE 8–14. E nenhuma página do menu, da home, de /cursos ou do rodapé leva a /cursos/junior ou /cursos/create: as 11 páginas de curso com ementa só são achadas pelo Google. As melhores relações entre impacto e esforço são mudanças pequenas: entrada para o Particular no menu, WhatsApp com a mensagem do curso, sidebar legível, preço na primeira tela e remover os enfeites que se sobrepõem ao texto. As mudanças maiores são o template único do /particular e trocar o genérico por material próprio (fotos, projetos, depoimentos, SVGs). Essas dependem de fotos e SVGs do Henrique. Três pontos são decisão dele e já estão sinalizados: a classificação dos programas, o preço do infantil e o início da fase de SVGs. Próximo passo recomendado: executar já os itens 1 a 3 e 6 e levar os outros três ao Henrique numa lista numerada.

| # | Mudança de maior alavancagem | Impacto | Esforço | Apoiada por |
|---:|---|---|---|---|
| 1 | **Entrada para o Particular no site principal + dois sinais de confiança quebrados** — Verificado: site-header.tsx não tem nenhum link para /particular. O menu mobile mostra só Início/Programas/Sobre/Blog/Contato/Entrar, então quem procura aula particular não acha as 52 páginas. Além disso, /contato e o JSON-LD exibem ceo@santos-games.com (seo.ts:39, contato.tsx:82-88), enquanto termos, privacidade e /particular usam contato@santos-tech.com. E /particular mostra '+300 alunos formados' e '+300 carreiras transformadas' (particular.index.tsx:235-236): o mesmo número em duas métricas, o que o §13 proíbe. _Como:_ Item 'Aulas particulares' no header desktop e no menu mobile. O rótulo é 'particular', não 'adultos', pela decisão de 23/09. Faixa curta na home antes do CTA final e card em /cursos: 'Aula particular · qualquer idade · 1 aluno + 1 professor'. No /particular, link de volta para 'Cursos em turma (5–15 anos)'. Trocar o e-mail em seo.ts e contato.tsx. Remover '+300 carreiras transformadas' ou marcar [VERIFICAR] até o Henrique passar o número real. Não cria rota nova, então o sitemap não muda. _Onde:_ `/`, `/cursos` +5 | alto | trivial | conversao, marca-visual |
| 2 | **WhatsApp com o contexto do curso + botão flutuante que não compete** — Verificado: whatsapp.ts tem só 3 mensagens, e cerca de 40 rotas usam WHATSAPP_URL.courses ('quero saber mais sobre os cursos'). O pai que leu o CREATE 8–9, ou o adulto que viu o preço do Excel, chega sem curso nem idade, e a escola recomeça a qualificação do zero. Ao mesmo tempo, o botão flutuante (FAB) cobre conteúdo e duplica o CTA verde do hero, contra a regra de um CTA dominante por seção (§1.3). _Como:_ Em src/lib/whatsapp.ts: builders courseTrial(programa, curso, idade), particularCourse(nome) e home, com o nome do curso na mensagem. Nenhum dado pessoal na URL. O FAB lê a rota (program-theme.ts) e usa a mesma mensagem, some enquanto um CTA primário está visível (IntersectionObserver), respeita a safe area e ganha padding-bottom no mobile. No /particular desktop o FAB sai, porque a sidebar já tem WhatsApp. Medir com evento de clique por rota: utm em link wa.me não é lido. Teste unitário dos builders. _Onde:_ `/`, `/cursos/create/*` +5 | alto | pequeno | conversao, craft-hig |
| 3 | **/particular: sidebar legível, CTA sempre verde e 'Entrar' igual ao institucional** — Verificado em python/desktop.fold.png e crop_python_sidebar: os rótulos da sidebar são texto claro sobre fundo claro e só o item ativo aparece. É a navegação principal do produto particular, quebrada em Programação e no índice. O CTA do hero muda de cor por curso (azul no Python, vermelho no Marketing, roxo na IA), quebrando a regra verde = ação do §2.2. No mobile, o header mostra 'Login' preto contra 'Entrar' verde no resto do site. _Como:_ Sidebar com tema fixo: fundo claro, texto #212121, item ativo com o acento da categoria, desacoplada das variáveis de cor do skin. CTA primário sempre bg-st-green + glow-green em particular-course-page.tsx; a cor da categoria fica só em bordas, eyebrow e ícone. Rótulo 'Entrar' verde unificado. Validar as 8 categorias em 375 e 1440px e no modo escuro, com screenshot conferido. _Onde:_ `/particular`, `/particular/cursos/python` +2 | alto | pequeno | craft-hig, marca-visual |
| 4 | **Preço e formato na primeira tela de decisão (Particular agora, infantil após decisão)** — Particular: no Excel mobile (12.494px), o preço (12x R$ 380,46, intensivo ~3 meses) está no seg13 de 14; a primeira tela só tem 'Quero saber mais'. Infantil: 'Qual o investimento?' é o último item do FAQ e responde 'te passamos valor na aula experimental' (cursos.create.8-9-anos.tsx:214-215). Preço é a primeira objeção de quem compara escolas. _Como:_ Particular: 'barra de decisão' logo abaixo do hero ('48 aulas · intensivo ~3 meses ou padrão ~6 · 12x R$ X · aula individual'). Os valores vêm do TIER_META como fonte única, porque a revisão de preços está pendente. CTA do hero vira 'Ver preço e começar', com âncora para o bloco completo. Infantil: é decisão de dinheiro do Henrique. Recomendo 'a partir de R$ X/mês' + o que inclui, num bloco 'Investimento' entre 'Como funciona' e os selos, com a pergunta de preço no topo do FAQ. Até ele decidir, nenhum valor inventado. _Onde:_ `/particular/cursos/*`, `/cursos/create/*` +3 | alto | pequeno | conversao |
| 5 | **Uma só classificação de programa: nome, idade, cor e link** — A marca-visual viu a divergência de cor. A verificação no código achou um problema maior. Home, /cursos e o menu vendem 'Tecnologia/Informática Júnior 5–9 (verde) e Create 10–15 (azul)' (index.tsx:561, cursos.index.tsx:67-113, site-header.tsx:23-28). As páginas de venda dizem JR 5–8 roxo e CREATE 8–14, com CREATE1 para 8–9 anos. E nenhuma página do menu, da home, de /cursos ou do rodapé leva a /cursos/junior ou /cursos/create: as 11 páginas de curso, com ementa aula a aula, só são alcançáveis pelo Google e pelo sitemap. O pai de uma criança de 8 anos recebe duas respostas: a marca parece desorganizada (§1.2). _Como:_ Decisão de escopo e marca do Henrique: qual grade é vendida hoje. Recomendação: cor = faixa etária usando as cores de programa do DS (Júnior roxo #512374, Create azul #0067BE). O verde fica exclusivo do CTA e sai a frase 'verde para as crianças'. Alinhar as faixas etárias em home, /cursos, menu e páginas de programa, e fazer os cards de programa levarem às páginas de programa (hoje vão para âncora ou WhatsApp). Atualizar o DS §2.1 e program-theme.ts. O sitemap já contém as rotas. _Onde:_ `/`, `/cursos` +6 | alto | pequeno | marca-visual |
| 6 | **Acabamento: tirar o que colide com o texto, o movimento sem função e os contrastes reprovados** — Verificado em crops/cursos_legend_overlap.png: o '01001 10110' sobrepõe a legenda 'CRIANÇAS · 5–9 ANOS'. Na home ele encosta nas avaliações, e em /sobre o losango invade o parágrafo. Os mesmos ícones decorativos nos 6 heros dão cara de template (§1.2, §11). O axe reprovou contraste em 11 elementos na home mobile e 7 no CREATE 8–9 (o §12 exige AA). Os depoimentos fixados na rolagem, com 'role para ver mais', ocupam 3 telas. _Como:_ Remover decorative-elements dos heros internos. Na home, no máximo 3 peças numa área própria do grid, fora da coluna de texto, sem capturar clique (pointer-events none), testadas em 375, 768 e 1440px. Manter blobs e Reveal, que são marca (§9.1, §1.3, §8.5). Badge 'Mais procurado' vira estático. Depoimentos: rolagem lateral nativa com encaixe no mobile e grid no desktop, sem fixar a rolagem. Corrigir os 18 elementos reprovados em contraste e reauditar com o axe. Quando o acervo de SVGs entrar (item 8), uma peça por hero. _Onde:_ `/`, `/cursos` +5 | alto | pequeno | craft-hig, marca-visual |
| 7 | **Home mobile: programas até a 3ª tela** — A home mobile tem 24.089px (~14 telas). Os segs 02–05 são o celular fixado na rolagem, um deles quase vazio, e 'Escolha o caminho do seu filho' só aparece no seg 11. No hero, o CTA quebra em 2 linhas em caixa alta e o subtítulo tem 6 linhas (o §1.4 pede no máximo 2 parágrafos curtos). O CTA já está na primeira tela: o problema é peso, não posição. _Como:_ Nova ordem: hero enxuto → chips de idade que rolam até o programa → cards de programa compactos → estatísticas + 1 depoimento + 'ver as 329' → por que / 3 pilares → como funciona → CTA final. No hero: subtítulo com até 2 frases e CTA 'AGENDAR AULA GRÁTIS' em 1 linha a 375px (mantém a caixa alta do §8.1), com a linha de avaliações acima dele. A seção do celular vira bloco estático de 1 tela abaixo do breakpoint md; no desktop, animação encurtada. Meta: até 12.000px no mobile. E2E + screenshot a 375px conferido. _Onde:_ `/`, `src/routes/index.tsx`, `src/components/scroll-stage.tsx` | alto | médio | marca-visual, conversao, craft-hig |
| 8 | **Material real no lugar do genérico: foto própria, projeto de aluno, depoimento por programa e acervo SVG** — As mesmas 3 crianças se repetem na home, no Sobre e nas bandas. Nas páginas particulares, ilustrações flat estilo unDraw (pessoas à mesa, certificado com laço, prédio; excel mobile segs 10–12) contrariam o §11 (clipart), e o stock abstrato contraria o §10.2. As páginas de curso não têm nenhum depoimento nem projeto de aluno, justamente onde se decide, e o depoimento de Excel está na home infantil. Premium se prova com gente e trabalho reais. _Como:_ (a) Ensaio de 1 dia com lista de fotos por faixa etária e atividade, incluindo aula individual de adulto. Formato polaroid do §10.3 no lugar do círculo recortado. (b) 2 depoimentos reais por programa (Google, com nome) + 1 projeto de aluno por página de curso; o depoimento de Excel vai para o /particular. (c) brand-art.tsx com peças do acervo de SVGs recoloridas pelos tokens, uma por seção; certificado real no lugar do ilustrado. Dependência: fotos e acervo são do Henrique, e a fase de SVGs foi adiada por ele ('segundo momento'), então pedir o ok antes de começar. Sem asset, foto em vez de ilustração; nunca inventar depoimento. _Onde:_ `/`, `/sobre` +7 | alto | médio | marca-visual, conversao, craft-hig |
| 9 | **Um template só no /particular: só a cor de acento muda por categoria** — As 8 categorias viraram 8 identidades: terminal azul em mono, planilha branca, magenta com serifa itálica, laranja em caixa alta, verde neon. Chega a 43 variantes de fonte (Photoshop), com fonte mínima de 8px, e o hero é preto sem foto. Quem compara Excel com Python acha que mudou de site; isso quebra o §1.2 (bagunçada) e o §3.1 (fonte decorativa proibida). _Como:_ Um hero e um kit de componentes em particular-course-page.tsx, variando só a variável --accent por categoria (mesmo mecanismo do program-theme.ts). Fundo base navy #0E2937, da paleta. As telas simuladas (planilha, editor, painel) ficam como conteúdo do hero. Tipografia: só Poppins + a mono registrada no DS §3 como fonte de apoio, restrita a eyebrows e mockups. Rodapé navy institucional com tema por rota. Validar as 8 categorias em 3 viewports. _Onde:_ `/particular`, `/particular/cursos/*` +2 | alto | grande | marca-visual, craft-hig |

**Divergências e descartes do juiz:** Conflitos resolvidos:
(1) Cor do JR. A marca-visual pede para decidir entre verde e roxo. Decisão: cor por faixa etária usando as cores de programa do DS: Júnior roxo #512374, Create azul #0067BE. O verde fica só para o CTA (§2.2) e sai a frase 'verde para as crianças' (index.tsx:561). Motivo: três verdes competindo tiram o sinal de ação. A decisão final é do Henrique, porque as faixas etárias também divergem.
(2) Fundo do hero do /particular. A craft-hig propõe #0F1A1A, que está fora da paleta §2.1. Adotado o navy #0E2937 proposto pela marca-visual, que é cor oficial.
(3) Sidebar do /particular. A marca-visual queria transformá-la em 'trilha colapsável' sob o header do site. A craft-hig quer uma sidebar fixa e clara. Com 52 cursos, a sidebar é navegação legítima (HIG: sidebar para coleções grandes). Fica no desktop, com tema fixo claro, e o que se unifica é a identidade: logo, 'Entrar' verde e rodapé.
(4) Fonte mono. A marca-visual quer espalhá-la no infantil (números das estatísticas, chips de idade). A craft-hig quer mono só nos mockups. Decisão: registrar a mono no DS §3 como a única fonte de apoio, restrita a eyebrows e mockups do /particular. Levar ao infantil é decisão de marca do Henrique; hoje os números em Poppins Black são assinatura.
(5) Ordem da home. marca-visual e conversão propõem ordens diferentes. Fundidas: hero → chips de idade → programas → prova social → por que → como funciona → CTA. Esforço fica 'médio', não 'pequeno' como disse a marca-visual, porque exige refatorar a seção fixada na rolagem (scroll-stage).

Descartados ou corrigidos:
(a) Craft-hig: 'CTA só aparece após 1.200px'. Falso positivo: mobile.fold.png mostra o CTA na primeira tela, por volta de 570px. O problema real é o botão em 2 linhas e o subtítulo de 6 linhas.
(b) Craft-hig: remover os blobs animados. Conflita com o DS §9 item 1, §1.3 ('animações flutuantes') e §8.5 (Reveal), que são marca. Saem só os ícones decorativos e a seção de depoimentos fixada na rolagem.
(c) Craft-hig: CTA em sentence case. Conflita com o §8.1, que usa caixa alta. A solução é encurtar o texto ('AGENDAR AULA GRÁTIS'), não mudar a caixa.
(d) Conversão: rótulo 'Cursos para adultos'. Contraria o rename de 23/09/2026: o comprador de aula particular pode ser pai de menor. O rótulo é 'Aulas particulares'.
(e) Conversão: utm na URL do wa.me. O WhatsApp não lê esses parâmetros. Trocado por evento de clique por rota.
(f) Conversão: formulário no /contato. Adiado. Exige backend e coleta de dado pessoal (LGPD), o que é decisão do Henrique, e a mensagem contextual no WhatsApp resolve a maior parte. Vai para PENDENCIAS.md. A troca do e-mail santos-games foi mantida.
(g) Craft-hig: elevar a trilha de selos. Tem valor, mas fica fora do top 9: o DS §8.8 já define o padrão e o ícone próprio depende do acervo de SVGs. Vai para o backlog.
(h) Fora do painel, mas incluído no item 6: o axe reprovou contraste em 11 elementos na home mobile e 7 no CREATE 8–9. O DS §12 exige AA.

<details><summary><b>Visão completa · marca-visual</b> — nota 6.5/10</summary>

O site infantil já passa "moderna, tecnológica e confiável" em 3 segundos: hero com fotos reais de alunos, Poppins Black, CTA verde único, ritmo de bandas coloridas. O que falta é o salto de "bem feito" pra "premium com identidade": a decoração são doodles Lucide espalhados (hexágono, cubo, binário) que qualquer template tem; a fotografia repete as mesmas 3 crianças; e a cor por programa se contradiz (home/cursos dizem "verde = crianças", JR é roxo). O /particular é o ponto mais forte em criatividade (skins de Excel, VS Code, painel de marketing) e o mais fraco em marca: layout de docs/SaaS, hero preto, CTA que muda de cor por curso, ilustrações flat genéricas e fotos stock. Hoje parecem duas empresas. A alavanca é uma casca única + sistema de ilustração próprio a partir do acervo SVG.

- **Uma só marca: casca comum entre infantil e /particular** (alto, grande) — Pai e adulto chegam pelo mesmo Google e pela mesma home. Hoje o /particular tem header próprio (chip PARTICULAR, botão Login preto), hero preto sem foto, sidebar de documentação e CTA que vira vermelho no Marketing, azul no Python e roxo na IA — quebra a regra 'verde = ação' do DS §2.2 e faz parecer outra empresa. Confiança vem de reconhecimento. _Como:_ Manter as skins criativas (grade do Excel, editor do Python, painel do Marketing) como camada de conteúdo do hero, mas por baixo da mesma casca: header do site (logo + TECH colorido + nav), CTA primário sempre bg-st-green + glow-green (a cor do skin fica em bordas, eyebrows e ícones), footer navy do infantil com tema por rota (§9.6) em vez do preto; hero do /particular index em navy #0E2937 com foto real de aluno adulto, igual à gramática dos heros de programa (§9.2). Sidebar vira 'trilha de cursos' colapsável dentro da casca, não substitui o header.

- **Sistema de ilustração próprio a partir do acervo SVG (matar os doodles)** (alto, médio) — O que hoje 'decora' os heros são ícones Lucide soltos (hexágono, cubo, estrela, coração pixel, texto '01001 10110' que encosta na linha das avaliações). É o padrão de template — DS §1.2 proíbe genérico e §11 proíbe poluição. Um acervo moderno de SVGs é exatamente o ativo que diferencia; hoje ele não aparece. _Como:_ Criar `src/components/brand-art.tsx` com 4–6 composições grandes (uma por contexto: home, programas, curso infantil, particular, contato/sobre), cada uma um único SVG do acervo recolorido pelos tokens (--st-blue, --st-green, cor do programa), posicionado como peça de fundo/lateral do hero em desktop e como faixa acima do título no mobile. Remover `decorative-elements.tsx` do hero e o binário. Regra: 1 peça por seção, nunca constelação de ícones.

- **Decidir e unificar a cor por programa** (alto, pequeno) — Home e /cursos dizem literalmente 'verde para as crianças e azul para os adolescentes'; o dropdown do header segue isso; mas /cursos/junior/5-6-anos é roxo (#512374) do DS. O pai clica em 'Tecnologia Júnior' verde e cai numa página roxa — sensação de 'entrei no lugar errado', e marca que parece desorganizada (§1.2). _Como:_ Decisão de negócio em uma linha: ou JR passa a ser verde (e o roxo sai do DS §2.1 e do program-theme) ou a home/cursos/dropdown adotam roxo pro JR e param de prometer 'verde = crianças'. Recomendo roxo no JR: verde já é a cor do CTA e da Informática Júnior, então verde-para-crianças cria três verdes concorrentes. Aplicar no ProgramBand da home, cards de /cursos, dropdown e footer.

- **Direção de fotografia: banco próprio com variedade, sem stock** (alto, médio) — As mesmas 3 crianças (menina no Roblox, menino de headset) aparecem no hero, na tela do celular, no Sobre e nas bandas. O hero do JR1 mostra as costas de um professor com a camiseta cortada dentro de um círculo. No /particular, 'Cursos mais populares' usa stock abstrato (rede azul, matrix de código) — DS §10.2 veta explicitamente. Premium se prova com gente real e variada. _Como:_ Sessão de 1 dia na escola com shot-list: por faixa etária (5–7, 8–10, 11–14, adulto), por atividade (tapete desplugado, MakeCode, Unity, impressora 3D, Excel, aula individual adulto), sempre em uso e com ambiente organizado. Substituir stock do /particular por foto de aluno adulto com professor; hero JR1 com criança no tapete. Voltar ao formato polaroid do DS §10.3 (borda branca, leve rotação) no lugar do círculo clipado, que é o padrão mais genérico de landing.

- **Ritmo da home: cortar o vazio e trazer os programas pra cima** (alto, pequeno) — Home tem 17.872px no desktop (24k no mobile). Logo após o hero vem um bloco navy de ~2.500px com um celular no meio e 3 telas quase vazias antes de aparecer qualquer texto (seg02–04). O pai no celular, em 30 segundos, não chega em 'Escolha o caminho do seu filho'. Ritmo é parte da marca 'organizada'. _Como:_ Compactar o scroll-stage pra uma tela (celular + 4 pilares lado a lado, sem pinning longo) ou mover pra depois dos programas. Ordem recomendada: hero → stats → programas (bandas) → por que a Santos Tech → depoimentos → como funciona → preços → CTA. Meta: programas visíveis antes de 2.500px no mobile.

- **Tipografia com assinatura: Poppins + mono de apoio oficial** (medio, pequeno) — Poppins Black é sólida, mas é a fonte de 8 em 10 sites de escola de tecnologia — não dá personalidade sozinha. O /particular já introduziu uma mono (eyebrows tipo `~/santos-tech $`, células A1/B2) que funciona e é 'tech' de verdade, mas só existe lá. O DS §3.1 permite 1 fonte de apoio; hoje ela é informal e inconsistente. _Como:_ Registrar a mono (JetBrains Mono ou similar, 1 peso) no DS §3 como fonte de apoio oficial e usá-la nos dois lados: eyebrows, números das stats bars, chips de idade ('JR1 · 5–6 ANOS'), legendas de ferramenta. Manter Poppins em títulos e corpo. Padronizar o gradiente de texto (hoje azul→verde em títulos aleatórios) só no H1 e em uma palavra por seção.

- **Trocar as ilustrações flat genéricas do /particular por acervo próprio** (medio, pequeno) — Nas 50+ páginas de curso particular, os blocos 'Quem está do outro lado da mesa', 'O que você recebe ao concluir' e 'Como as aulas funcionam' usam ilustrações de pessoas em mesa, certificado com laço e prédio — estilo unDraw. É o ponto onde um adulto pagando R$ 4–5 mil sente template; DS §11 chama isso de clipart. _Como:_ Substituir por 3 peças do acervo SVG recoloridas pelo skin do curso (mesmo componente `brand-art`) ou por foto real de aula individual adulto + professor. Se o acervo não cobrir, preferir foto a ilustração. Certificado: usar mockup do certificado real da escola.

</details>

<details><summary><b>Visão completa · conversao</b> — nota 5.5/10</summary>

O site tem material de venda acima da média (ementa aula a aula, insígnias, preço aberto no particular, 329 avaliações 5,0), mas a jornada entrega isso na ordem errada e tarde demais. No celular, o pai leva ~14 telas pra chegar aos programas na home, o preço do infantil é uma resposta evasiva no último item do FAQ, e todo CTA de WhatsApp — do CREATE Ano 1 ao Excel Avançado — abre a mesma mensagem genérica "quero saber mais sobre os cursos", jogando fora o contexto que a página construiu. O adulto no /particular só vê preço a ~90% de scroll da página do curso, e o público adulto sequer tem entrada no menu principal. Corrigir sequência, contexto e transparência de preço vale mais que qualquer polimento visual: são mudanças pequenas de código com impacto direto na taxa de conversa iniciada e na qualidade do lead.

- **CTA de WhatsApp com contexto do curso (mensagem, página e faixa etária)** (alto, pequeno) — Evidência: src/lib/whatsapp.ts tem só 3 mensagens (footer, courses, fab) e todos os CTAs do site usam WHATSAPP_URL.courses = 'Olá, quero saber mais sobre os cursos da Santos Tech'. O pai que leu 12 mil px sobre CREATE Ano 1 e clicou 'Agendar aula experimental' chega no WhatsApp sem dizer qual curso, idade ou intenção; o adulto que clicou 'Quero o Excel Avançado' (com preço na tela) também. A escola recomeça a qualificação do zero, o lead esfria e a taxa de resposta cai. Para o particular, onde o preço já foi visto, isso é lead quente tratado como frio. _Como:_ Em src/lib/whatsapp.ts, criar build(msg) por contexto: courseTrial(programa, curso, idade) → 'Olá! Quero agendar a aula experimental grátis do CREATE Ano 1 (8–9 anos) para meu filho.'; particularCourse(nome, plano) → 'Olá! Vi o Excel Avançado no site (12x R$ 380,46) e quero começar no ritmo intensivo.'; home → 'Quero agendar aula experimental grátis; meu filho tem __ anos'. Acrescentar utm_source=site&utm_content=<rota> na URL e um evento de clique por rota. Nas páginas de curso, o CTA do hero, o do CTA final e o FAB devem usar a mensagem contextual da rota (o FAB lê a rota atual via program-theme.ts).

- **Home mobile: programas e prova social antes do show de scroll (cortar de 14 pra ~7 telas)** (alto, médio) — Evidência: home mobile tem 24.089 px (~14 viewports). Entre o hero e os programas ficam: seção pinada do celular (segs 02–05, 4 telas, sendo uma quase vazia com um phone preto), stats, depoimentos com scroll horizontal pinado ('role para ver mais', segs 06–08) e os 5 pilares. Os cards de programa — a decisão que o pai precisa tomar — só aparecem no seg 11 (~80% da página). Pai lendo no intervalo do almoço (DESIGN_SYSTEM §1.4) abandona antes de saber que existe 'Júnior 5–9' vs 'Create 10–15'. No desktop os programas nem aparecem na dobra; só o carrossel de fotos. _Como:_ Nova ordem mobile: hero → seletor de idade em 1 linha (chips '5–9 anos' / '10–15 anos' que rolam pro card certo) → cards de programa (versão compacta: nome, idade, 3 tags, CTA) → stats + 1 depoimento estático com link 'ver as 329' → pilares (3, não 5) → CTA final. Transformar a seção pinada do phone-mockup em bloco estático de 1 tela (foto + 3 bullets) em ≤ md e manter a animação só no desktop; substituir scroll-pin de depoimentos por carrossel simples (swipe nativo) sem altura extra. Meta: ≤ 12.000 px no mobile, programas visíveis até a 3ª tela.

- **Preço/investimento do infantil: de resposta evasiva no FAQ pra bloco de 'Investimento' transparente** (alto, pequeno) — Evidência: em cursos.create.8-9-anos.tsx, 'Qual o investimento?' é o último item do FAQ e responde 'Te passamos valor na aula experimental'. Já o /particular expõe 12x R$ 380,46, matrícula R$ 199,90 e material R$ 389,90 — a escola claramente sabe cobrar em público. Pai pesquisando escola de tecnologia compara 2–3 opções; 'preço só no WhatsApp' é a objeção nº 1 e o motivo de não clicar. Esconder preço também atrai lead desqualificado que descobre o valor e some, gastando tempo do atendimento. Guia §13: 'especificidade como prova'. _Como:_ Na página de curso (§9.4), inserir seção 'Investimento' entre 'Como funciona' e 'Insígnias' com: mensalidade (ou faixa 'a partir de R$ X/mês'), o que inclui (40 aulas, material, Showcase, portal do aluno), formas de pagamento e a frase 'Aula experimental grátis antes de decidir'. Se o Henrique não quiser valor cheio, usar faixa + 'sem matrícula na aula experimental'. Mover 'Qual o investimento?' pro 1º item do FAQ com a mesma informação. Adicionar linha de preço-âncora nos cards de programa em /cursos ('a partir de R$ X/mês'). Decisão de negócio (dinheiro) — precisa do Henrique; recomendação: mostrar faixa.

- **Particular: preço e formato no topo da página do curso, não a 90% do scroll** (alto, pequeno) — Evidência: /particular/cursos/excel mobile tem 12.494 px; o bloco de preço (12x R$ 380,46, intensivo 3 meses, 'Quero o Excel Avançado') está no seg 13 de 14. Antes dele vêm mockup de planilha, 4 cards de método, 'quem está do outro lado da mesa', certificado, formato. Adulto comprando curso particular decide por 3 variáveis — quanto custa, quanto tempo leva, quando começo — e nenhuma está na dobra (fold mostra só 'Do Excel básico ao Power Query' e um botão 'Quero saber mais'). Quem chega por Google Ads/Instagram procurando preço sai antes. _Como:_ Em particular-course-page.tsx, adicionar sob o hero uma 'barra de decisão' sticky-ish (mobile: card logo após o hero): '48 aulas · 3 meses intensivo ou 6 meses · 12x R$ 380,46 · Aula individual' + CTA contextual. Manter o bloco completo de preço onde está, mas o resumo já responde a objeção na 1ª tela. Trocar 'Quero saber mais' do hero por 'Ver preço e começar' com âncora pro bloco de investimento, ou pelo CTA de WhatsApp contextual (mudança 1). Adicionar 'Próxima turma / início imediato' se aplicável — aula individual permite prometer 'começa na semana que vem'.

- **Dar entrada e ponte ao público adulto no site principal (menu, home, /cursos)** (alto, trivial) — Evidência: grep de 'particular' em site-header.tsx não retorna nada; o menu mobile aberto mostra Início / Programas / Sobre / Blog / Contato / Entrar. A home fala só com pais ('Onde seu filho aprende…'). Um adulto que chega em santos-tech.com pelo Google ('curso de Excel Ribeirão Preto') não encontra nenhum caminho pro /particular sem adivinhar a URL — perde-se 100% desse tráfego na porta. O inverso também: no /particular não há link claro pro infantil (pai que quer Excel pra si e Roblox pro filho é comum). _Como:_ Header e menu mobile: item 'Cursos para adultos' (ou 'Particular') com destaque visual distinto (badge preta como no /particular). Home: uma faixa curta antes do CTA final — 'Também para você: 52 cursos particulares (Excel, Python, IA, Office)… 1 aluno + 1 professor' com CTA 'Ver cursos para adultos'. /cursos: card 'Adultos · qualquer idade' ao lado dos 4 cards. No /particular, link 'Cursos infantis' no footer/sidebar. Atualizar sitemap se surgir rota nova.

- **/contato: formulário curto de agendamento como alternativa ao WhatsApp** (medio, médio) — Evidência: /contato tem 107 palavras e é só uma lista de canais (WhatsApp, endereço, e-mail ceo@santos-games.com, Instagram, horários) + card 'Agendar agora' que abre WhatsApp. Não existe nenhum <form> no site (grep só acha forms de mockup em course-skins). Parte dos pais — e sobretudo adultos em horário de trabalho — não quer abrir uma conversa de WhatsApp; quer deixar nome, idade do filho/curso e horário e ser chamado. Sem isso, o único funil é síncrono e depende de alguém responder rápido; fora do horário (seg–sex 8–22h) o lead evapora. E o e-mail exposto é de outro domínio (santos-games), o que mina confiança. _Como:_ Formulário de 4 campos: nome, WhatsApp, 'para quem?' (meu filho — idade / para mim — curso), melhor horário. Enviar pro backend já existente do ecossistema (leads_list existe na plataforma) e disparar auto-resposta no WhatsApp. Colocar o mesmo formulário compacto como segunda opção no CTA final das páginas de curso ('Prefere que a gente te chame? Deixe seu número'). Trocar o e-mail pra contato@santos-tech.com (já usado no footer do /particular). Adicionar no /contato o mapa e 'como chegar' que hoje só existe no /particular.

- **Prova social específica no ponto de decisão (não só a nota 5,0 repetida)** (medio, pequeno) — Evidência: '5,0 · 329 avaliações' aparece 4x na home (hero, stats, depoimentos, CTA final) e nos stats do /particular ('+300 alunos formados', '+300 carreiras transformadas' — número idêntico, soa inventado; guia §13 proíbe estatística sem prova). Nas páginas de curso (CREATE 8–9, Excel, Python) não há nenhum depoimento, foto de projeto de aluno ou resultado — justamente onde o pai decide. Os depoimentos da home são genéricos ('equipe atenciosa', 'ambiente limpo') e o de Igor Oliveira fala de Excel numa home voltada a crianças. Prova social só funciona quando é sobre o que a pessoa está comprando. _Como:_ Curar 2 depoimentos por programa (JR, CREATE, Informática, Particular) com nome, idade do filho/ocupação e a frase concreta ('meu filho de 9 anos publicou o jogo…'). Na página de curso, inserir 1 depoimento + 1 foto/GIF de projeto real de aluno logo após 'Para quem é' e outro antes do CTA final. No /particular, substituir '+300 carreiras transformadas' por número verificável ou remover; usar depoimentos de alunos adultos (Igor Oliveira pertence ao /particular, não à home). Reduzir a repetição da nota 5,0 na home a 2 ocorrências (hero e CTA final).

</details>

<details><summary><b>Visão completa · craft-hig</b> — nota 5.5/10</summary>

O site é dois produtos com uma marca só. O lado infantil (home, /cursos, JR, CREATE) tem tese clara — "criar, não usar" — e um sistema coeso: Poppins, azul/verde, ondas, cards por programa. O lado /particular abandona isso: cada categoria virou um site próprio (terminal escuro, planilha branca, magenta serifada, laranja caps, verde neon), com botão, eyebrow, tipografia e sidebar diferentes em cada um. Isso quebra Familiaridade e Simplicidade da Apple e o próprio DESIGN_SYSTEM §1.2 ("não pode parecer bagunçada"). O acabamento falha onde a marca mais aparece: ícones decorativos colidindo com texto, botão de WhatsApp cobrindo conteúdo, sidebar ilegível, motion sem função. A boa notícia: a estrutura de vendas (para quem é, ementa, investimento, FAQ) é sólida e igual em todos. O trabalho é de subtração e consolidação, não de redesenho.

- **Uma só linguagem visual pro /particular: cor por categoria, componentes idênticos** (alto, grande) — Hoje 8 categorias = 8 identidades (Office: planilha branca e botão verde 3D; Programação: terminal azul com fonte mono; Design: fundo magenta com serifa itálica; 3D: laranja em caixa alta; T.I: verde neon; IA: lilás; Marketing: vermelho). Quem compara Excel com Python acha que mudou de site. Apple, Familiaridade: 'estabeleça uma aparência e aplique-a em todo o design'. DESIGN_SYSTEM §1.2 proíbe 'bagunçada' e §11 proíbe 'muitos efeitos ao mesmo tempo'. Adulto comprando curso precisa confiar na escola, não no tema da página. _Como:_ Manter UM template de hero e UM conjunto de componentes (eyebrow chip, botão primário pill verde com ícone WhatsApp, chips de ferramentas, barra de métricas), variando SÓ a cor de acento via variável CSS por categoria (como já faz program-theme.ts para JR/CREATE). Remover fontes por categoria: só Poppins; mono apenas dentro dos mockups de código. Fundo do hero: um único dark neutro (#0F1A1A já usado no /particular) com o acento da categoria em gradiente sutil. Os mockups ilustrativos (planilha, terminal, timeline) podem ficar — eles são o conteúdo, não a moldura.

- **Tirar a decoração que colide com o conteúdo (Craft)** (alto, pequeno) — Os ícones flutuantes de hero (hexágono, cubo, </>, binário '01001 10110', pontinhos) aparecem em TODA página institucional e colidem com texto: na home desktop o '01001' sobrepõe a linha de avaliações Google; em /cursos o '10110' cobre a legenda 'CRIANÇAS · 5-9 ANOS'; em /sobre o losango fura o parágrafo. Apple, Craft: 'Cada elemento mostra o quanto você se importa'. Delight ≠ decoração. Repetir o mesmo enfeite em 6 heros também anula o efeito. _Como:_ Remover os ornamentos flutuantes de todos os heros exceto a home; nela, limitar a 3 elementos posicionados com clamp() fora da coluna de texto (grid area própria, pointer-events none, z-index abaixo do conteúdo) e testar em 375/768/1440. Manter só o gradiente + radial pontilhado do §9 como textura de marca.

- **Botão flutuante de WhatsApp: só onde não há CTA visível** (alto, pequeno) — O FAB verde cobre conteúdo em toda rota: as estrelas do hero na home mobile, o card 'Tecnologia Create' no desktop, o card de endereço no /contato mobile, o texto dos módulos no CREATE. Ao mesmo tempo, o hero já tem CTA verde de WhatsApp — são dois botões iguais competindo na mesma tela. Simplicidade: 'cada elemento precisa ganhar seu lugar'. DESIGN_SYSTEM §1.3: 'um CTA dominante por seção'. _Como:_ Esconder o FAB enquanto qualquer CTA primário de WhatsApp estiver no viewport (IntersectionObserver); exibir só após rolar o hero. No mobile, reduzir para 56px, encostar à safe-area e adicionar padding-bottom nas seções de card para nunca sobrepor texto. No /particular, que tem sidebar com 'Falar no WhatsApp', remover o FAB por completo no desktop.

- **Sidebar do /particular legível e consistente em todas as categorias** (alto, médio) — Na mesma família de páginas a sidebar aparece clara com texto escuro (Office), escura com texto claro (T.I) e, em Programação e no próprio /particular, com labels invisíveis (texto branco sobre fundo claro — ver crop_python_sidebar: só o item ativo aparece). É a navegação principal do produto adulto; se ela some, o aluno não consegue comparar cursos. Familiaridade + Acessibilidade: 'mantenha controles em posições consistentes'. _Como:_ Uma sidebar só, com tema fixo (fundo claro, texto #101010, item ativo com acento da categoria), independente do tema do hero. Corrigir a herança de cor: a sidebar não deve ler variáveis de texto do conteúdo. No mobile, a sidebar vira o menu hamburguer — hoje o header mostra 'Login' preto que não existe no institucional ('Entrar' verde): unificar o rótulo e o estilo.

- **Fold mobile em 30 segundos: CTA de uma linha e sub de duas frases** (alto, pequeno) — Público-alvo é pai no celular (DS §1.4). Na home mobile o botão 'AGENDE UMA AULA EXPERIMENTAL GRÁTIS' quebra em 2 linhas em caixa alta, o subtítulo tem 6 linhas e o CTA só aparece após 1.200px de rolagem. Em /sobre e /cursos mobile o parágrafo do hero tem 7 linhas centralizadas. A regra do próprio DS diz 'máximo 2 parágrafos curtos'. Simplicidade: 'seja conciso'. _Como:_ Hero mobile: headline 3 linhas, sub ≤ 2 frases alinhado à esquerda, CTA 'Agendar aula grátis' (sentence case, cabe em 1 linha a 375px), CTA secundário como link de texto. Mover a linha '5,0 no Google · 329 avaliações' para cima do CTA como prova social. Aplicar o mesmo padrão nos heros de programa e de curso.

- **Motion com propósito: manter só o que informa** (medio, pequeno) — Blobs animados, ícones flutuando, badge 'MAIS PROCURADO' com gradiente animado e o carrossel de depoimentos com 'ROLE PARA VER MAIS' são movimento sem função. Reduced-motion está respeitado (evidência ok), mas o estado normal cansa e compete com a foto real dos alunos, que é o melhor ativo da marca. Apple, motion: 'breve, com propósito, rara em interações frequentes'. DS §11: 'muitos efeitos ao mesmo tempo'. _Como:_ Manter três animações: entrada escalonada dos cards de programa (uma vez, 300ms), hover dos cards (elevação 2px), e transição de abrir/fechar accordion. Remover blobs animados e ícones flutuantes; badge 'Mais procurado' vira chip estático amarelo. Depoimentos: grid 2 colunas no desktop e snap-scroll no mobile, sem texto 'role para ver mais'.

- **O único Delight que vale manter: a trilha de conquistas dos cursos infantis** (medio, médio) — Nos cursos JR/CREATE, cada módulo termina num selo com nome ('Pixel Aprendiz', 'Engrenagem', 'Foguete', 'Estrela Tech'). É o único momento em que o design encena a promessa da marca (jogar → criar → futuro) e fala com a criança e o pai ao mesmo tempo. Apple, Delight: 'crie momentos definidores' e 'não confunda delight com decoração'. Todo o resto do enfeite pode sair se este ficar. _Como:_ Elevar a trilha a componente próprio, no topo da página de curso, logo após a barra de métricas: 4 selos em linha com estado 'a conquistar', ícone vetorial próprio por selo (hoje é ícone genérico Lucide em círculo) e nome do selo em destaque. Reaproveitar o mesmo selo no card do módulo. No /particular, o equivalente é o certificado no fim — manter, sem inventar gamificação para adulto.

</details>

## 6. Achados por dimensão

Cada dimensão tem um diagnóstico aqui e o detalhe completo (evidência, problema, correção, verificação) no seu arquivo em `achados/`. Nas tabelas abaixo aparecem só os 🔴 e 🟠; os 🟡 e ⚪ estão no arquivo de cada dimensão.

<a id="61"></a>

### 6.1 Tipografia e formatação de texto — nota 5/10

**66 achados** (🔴 0 · 🟠 2 · 🟡 28 · ⚪ 36) → [detalhe completo](achados/tipografia-texto.md)

**Estado geral:** a base (Poppins, títulos fortes, design system escrito) é boa, mas o texto foi montado página a página, sem receita fixa. Resultado: o site parece feito por várias mãos, e o que vende fica menos legível do que o que enfeita.

- **Informação de decisão em letra miúda.** Preço à vista, formas de pagamento, faixa etária no menu, selo "Mais procurado" e cookies aparecem em 8 a 12px. O pai no celular não lê, e isso passa cara de "letra miúda escondida".
- **Blocos densos onde está o argumento de venda.** Resultado do curso inteiro em negrito, parágrafos de 7 a 9 linhas (alguns centralizados), linhas com mais de 100 caracteres no desktop e resultado repetido na mesma página. Quem lê em 30 segundos desiste antes do botão.
- **Caixa alta e nomes longos quebram títulos e botões.** CTA com "GRÁTIS" sozinho na segunda linha, título de curso com 5 linhas no celular, palavras soltas no fim de título. O botão principal perde força.
- **Hierarquia apagada.** Só 3 pesos da fonte são carregados, e por isso "semibold" sai igual a "bold". Há mais de 20 combinações de tamanho por página e o peso do título muda de pele para pele. Nada se destaca.
- **Grafia inconsistente.** O mesmo curso aparece com até 4 nomes (CREATE1 / CREATE Ano 1…), o horário de sábado diverge entre páginas, a nota sai como "5.0", e há aspas retas e "~" em textos para leigos. Isso mina a imagem de escola "organizada e confiável".

**Quick wins:** [`F005`](achados/tipografia-texto.md#f005) [`F108`](achados/tipografia-texto.md#f108) [`F107`](achados/tipografia-texto.md#f107) [`F059`](achados/tipografia-texto.md#f059) [`F067`](achados/tipografia-texto.md#f067) [`F065`](achados/tipografia-texto.md#f065) [`F014`](achados/tipografia-texto.md#f014) [`F075`](achados/tipografia-texto.md#f075)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F083`](achados/tipografia-texto.md#f083) | 🟠 | MetricCard com valores textuais ("Avançado", "Hands-on") sobrepõe texto no mobile | [src/components/course-page.tsx:130](../../../src/components/course-page.tsx#L130) | pequeno |
| [`F104`](achados/tipografia-texto.md#f104) | 🟠 | Resultado do curso (outcome) é um parágrafo único de 250–416 caracteres, todo em negrito | [src/components/course-skins/variants/planilha-excel.tsx:88](../../../src/components/course-skins/variants/planilha-excel.tsx#L88) | médio |

<a id="62"></a>

### 6.2 Cor, contraste e identidade visual — nota 5/10

**11 achados** (🔴 0 · 🟠 5 · 🟡 4 · ⚪ 2) → [detalhe completo](achados/cor-identidade.md)

A marca é reconhecível e bem aplicada em geral, mas **as cores aparecem quase sempre nos pontos onde se vende**: botões, preço e títulos de card estão com contraste baixo demais para ler bem.

- **O verde da marca foi pensado como fundo de botão com letra branca, e essa combinação é difícil de ler.** O botão principal ("agendar aula" / WhatsApp) fica apagado no celular, principalmente no sol. Isso tira clique de venda na home, nos cursos e nos cursos particulares.
- **Os textos mais importantes são os mais apagados.** Preço, parcelas, estatísticas e rótulos pequenos usam cinza claro ou branco transparente. Quanto menor o texto, mais apagado ele fica, e deveria ser o contrário. Numa oferta de R$ 3 a 8 mil, preço difícil de ler parece "letra miúda" e gera desconfiança.
- **As cores foram digitadas direto no código em vez de puxadas da paleta oficial.** Por isso existem verdes e azuis parecidos mas diferentes, e o CAMPS tem duas cores próprias. Hoje, ajustar uma cor da marca exige mexer em dezenas de lugares.
- **A cor não mantém o mesmo significado.** O verde marca ao mesmo tempo "comprar", "entrar como aluno" e "crianças". No /contato, o botão de agendar nem é verde. O pai perde a pista visual de onde clicar.
- **Faltam regras no design system.** A seção 12 diz que o verde passa no teste de contraste, e isso está errado. Também não existe um mínimo para texto sobre fundo escuro, então o erro se repete a cada página nova.

**Recomendação:** corrigir primeiro os botões e o preço, que são poucas trocas e afetam o site inteiro, e depois registrar as regras no design system para o erro não voltar.

**Quick wins:** [`F084`](achados/cor-identidade.md#f084) [`F244`](achados/cor-identidade.md#f244) [`F249`](achados/cor-identidade.md#f249) [`F016`](achados/cor-identidade.md#f016) [`F241`](achados/cor-identidade.md#f241) [`F243`](achados/cor-identidade.md#f243) [`F025`](achados/cor-identidade.md#f025) [`F304`](achados/cor-identidade.md#f304)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F016`](achados/cor-identidade.md#f016) | 🟠 | CAMPS usa #0E9E8E no código, mas DS §2.1 e --st-camps definem #1C8299 | [src/routes/cursos.camps.tsx:44](../../../src/routes/cursos.camps.tsx#L44) | pequeno |
| [`F084`](achados/cor-identidade.md#f084) | 🟠 | Título dos cards de pilares em CAMPS fica invisível (h3 herda text-white sobre card branco) | [src/routes/cursos.camps.tsx:127](../../../src/routes/cursos.camps.tsx#L127) | trivial |
| [`F233`](achados/cor-identidade.md#f233) | 🟠 | CTA verde #0DB88F com texto branco tem 2,5:1 — falha AA em todos os botões primários do site | [src/routes/index.tsx:265](../../../src/routes/index.tsx#L265) | médio |
| [`F241`](achados/cor-identidade.md#f241) | 🟠 | CTAs coloridos das peles têm texto branco abaixo de 4,5:1 (laranja 2,8, verde-Excel 3,2, azul IDE 3,3, teal TI 3,7, vermelho 3,9) | [src/components/course-skins/oficina.tsx:76](../../../src/components/course-skins/oficina.tsx#L76) | pequeno |
| [`F244`](achados/cor-identidade.md#f244) | 🟠 | Preço e condições de pagamento em cinza #a3a3a3 (2,5:1) sobre branco no card de investimento | [src/components/particular-course-page.tsx:575](../../../src/components/particular-course-page.tsx#L575) | trivial |

<a id="63"></a>

### 6.3 Layout, espaçamento e responsividade — nota 5,5/10

**48 achados** (🔴 1 · 🟠 2 · 🟡 20 · ⚪ 25) → [detalhe completo](achados/layout-responsivo.md)

**Estado geral:** a base de layout é sólida, mas o site foi afinado para o desktop largo. No celular e no tablet, onde estão os pais, aparecem sobreposições, buracos e páginas longas demais.

- **Elementos fixos disputam a mesma área.** Botão do WhatsApp, banner de cookies, header de 80px e menu sem rolagem ficam por cima de textos, CTAs e até do link de cookies exigido pela LGPD. **Consequência:** toques caem no botão errado e a primeira tela perde espaço útil.
- **A técnica de "vazar" o fundo por baixo da sidebar do /particular é frágil.** Ela deixa o menu ilegível (texto branco sobre cinza), cria rolagem lateral em metade das páginas de curso e põe decorações por baixo do menu. **Consequência:** o adulto que compra curso particular vê um site com cara de quebrado.
- **Componentes feitos para texto curto quebram com texto real.** Métricas, selos, eyebrows e botões principais quebram linha ou se sobrepõem no celular. **Consequência:** a hierarquia se inverte justamente na primeira dobra.
- **O ritmo vertical não segue regra.** O espaçamento entre seções varia (py-8 a py-24) sem padrão, há seções vazias e conteúdo repetido. **Consequência:** as páginas de venda passam de 12 a 18 mil px e o pai desiste antes do preço.
- **Os pontos de quebra (breakpoints, larguras em que o layout muda) estão mal calibrados.** Em 768px (iPad) e em 1024–1279px (notebook) o header colide, os cards ficam espremidos ou esticados e a coluna fica vazia.
- **A grade não é única.** Largura de container, raio de card e alinhamento mudam de uma seção para outra, e as linhas de texto passam de 80 caracteres.

**Recomendação:** corrigir primeiro a sidebar do /particular e os elementos fixos no mobile, que são trocas pequenas com efeito direto em venda e LGPD.

**Quick wins:** [`F125`](achados/layout-responsivo.md#f125) [`F142`](achados/layout-responsivo.md#f142) [`F149`](achados/layout-responsivo.md#f149) [`F126`](achados/layout-responsivo.md#f126) [`F160`](achados/layout-responsivo.md#f160) [`F124`](achados/layout-responsivo.md#f124) [`F151`](achados/layout-responsivo.md#f151) [`F140`](achados/layout-responsivo.md#f140)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F159`](achados/layout-responsivo.md#f159) | 🔴 | Pele IDE e landing /particular não vazam o fundo: sidebar inteira com texto branco sobre cinza-claro | [src/components/course-skins/ide.tsx:62](../../../src/components/course-skins/ide.tsx#L62) | pequeno |
| [`F125`](achados/layout-responsivo.md#f125) | 🟠 | FAB do WhatsApp cobre o link "Cookies" do rodapé no mobile (revogação LGPD) | [src/components/site-footer.tsx:85](../../../src/components/site-footer.tsx#L85) | trivial |
| [`F142`](achados/layout-responsivo.md#f142) | 🟠 | Métricas do hero estouram a coluna no mobile e tablet ("Avançado"/"Hands-on" sobrepostos) | [src/components/course-page.tsx:130](../../../src/components/course-page.tsx#L130) | trivial |

<a id="64"></a>

### 6.4 Acessibilidade — nota 4,5/10

**21 achados** (🔴 1 · 🟠 4 · 🟡 8 · ⚪ 8) → [detalhe completo](achados/acessibilidade.md)

A base é boa (quase todas as animações já respeitam o "reduzir movimento" do celular, a semântica é quase toda correta), mas a área que mais vende (/particular) e as cores da marca têm falhas que prejudicam a venda, não só a conformidade com a norma.

- **Contraste da marca quebrado na origem:** o verde e o azul oficiais, como são usados hoje, deixam o texto branco de "Entrar", dos botões de aula experimental e do aviso de cookies abaixo do mínimo legível. Um pai lendo no sol não enxerga o botão que gera o contato.
- **Menu do /particular feito só para quem usa mouse no desktop:** no desktop a lista de cursos some (branco sobre branco). No celular, quem navega por teclado ou leitor de tela passa por dezenas de links invisíveis, e o menu não fecha pelo teclado. Isso afeta as 53 páginas de curso particular.
- **Conteúdo "fechado" continua lá:** FAQ e grupos recolhidos seguem sendo lidos e focados, então o usuário se perde.
- **Elementos sobrepostos e alvos pequenos no celular:** o botão do WhatsApp cobre "Cookies" e "Termos de Uso" (exigência da LGPD), e os links do rodapé e do menu são pequenos demais para o polegar.
- **Movimento sem desligar:** o efeito de surgir ao rolar e as animações em loop ignoram a preferência de reduzir movimento. Isso incomoda quem tem enjoo ou TDAH.
- **Estado só por cor:** o nível selecionado (e, com ele, o preço) não é anunciado para leitor de tela.

**Recomendação:** corrigir primeiro o menu do /particular e os tokens de cor no design system. É uma correção pequena com efeito no site inteiro.

**Quick wins:** [`F256`](achados/acessibilidade.md#f256) [`F269`](achados/acessibilidade.md#f269) [`F258`](achados/acessibilidade.md#f258) [`F263`](achados/acessibilidade.md#f263) [`F261`](achados/acessibilidade.md#f261) [`F262`](achados/acessibilidade.md#f262) [`F259`](achados/acessibilidade.md#f259) [`F271`](achados/acessibilidade.md#f271)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F255`](achados/acessibilidade.md#f255) | 🔴 | Sidebar do /particular fica ilegível no desktop: texto branco sobre fundo claro (fusion tone) | [src/routes/particular.tsx:216](../../../src/routes/particular.tsx#L216) | pequeno |
| [`F256`](achados/acessibilidade.md#f256) | 🟠 | FAB do WhatsApp cobre o botão "Cookies" e "Termos de Uso" do rodapé no mobile | [src/components/whatsapp-fab.tsx:32](../../../src/components/whatsapp-fab.tsx#L32) | trivial |
| [`F257`](achados/acessibilidade.md#f257) | 🟠 | Sidebar do /particular fora da tela continua focável no mobile; drawer sem foco, Escape ou inert | [src/routes/particular.tsx:323](../../../src/routes/particular.tsx#L323) | pequeno |
| [`F260`](achados/acessibilidade.md#f260) | 🟠 | Conteúdo colapsado com grid-rows-[0fr] continua focável e lido: FAQ do /particular e grupos da sidebar | [src/components/particular-faq.tsx:49](../../../src/components/particular-faq.tsx#L49) | pequeno |
| [`F268`](achados/acessibilidade.md#f268) | 🟠 | axe color-contrast agregado: branco sobre verde #0DB88F (2,53:1) em "Entrar", CTAs e banner de cookies; eyebrows text-primary 4,18:1 | [src/components/site-header.tsx:271](../../../src/components/site-header.tsx#L271) | médio |

<a id="65"></a>

### 6.5 UX, navegação e conversão — nota 5/10

**61 achados** (🔴 0 · 🟠 9 · 🟡 32 · ⚪ 20) → [detalhe completo](achados/ux-conversao.md)

O site tem conteúdo bom e bastante coisa para mostrar, mas **atrapalha quem quer comprar**. Ele é fácil de ler e difícil de levar alguém até a matrícula.

- **Público adulto escondido.** Nem o menu, nem o rodapé, nem a home levam a `/particular`, e de lá não há caminho de volta. O pai que também quer um curso de Excel para ele mesmo nunca descobre que a escola oferece. É venda cruzada perdida.
- **Catálogo que não fecha.** Os programas mudam de nome e de faixa de idade entre as páginas (JR, CREATE, Academies), e há páginas de curso que nenhum link alcança. O pai fica confuso e a escola perde credibilidade.
- **Botão de contato que some ou não explica nada.** As páginas de curso passam de 10 a 12 telas de celular sem nenhum botão de contato. Quando aparece, o texto é genérico ("Quero saber mais") e muda de página para página. O resultado é menos conversas no WhatsApp, e conversas que chegam sem contexto.
- **Informação que decide a compra aparece tarde ou não aparece.** Preço, custo total, endereço, horário e prova social ficam ausentes ou muito para baixo da página. Quem precisa dessas respostas para decidir sai do site para perguntar, ou desiste.
- **Promessas que não se sustentam.** A home fala em robótica e o FAQ desmente. Os números de avaliações não batem entre páginas e o e-mail de contato é de outro domínio. Cada contradição dessas custa confiança.
- **Barreiras no primeiro contato.** O banner de cookies cobre quase metade da tela, o preloader trava a home e os menus do topo só abrem com o mouse passando por cima. Isso atrapalha quem usa tablet ou teclado.

**Recomendação:** primeiro os ajustes rápidos (menu, botão de contato fixo, textos), depois alinhar o catálogo.

**Quick wins:** [`F175`](achados/ux-conversao.md#f175) [`F216`](achados/ux-conversao.md#f216) [`F181`](achados/ux-conversao.md#f181) [`F188`](achados/ux-conversao.md#f188) [`F217`](achados/ux-conversao.md#f217) [`F190`](achados/ux-conversao.md#f190) [`F176`](achados/ux-conversao.md#f176) [`F210`](achados/ux-conversao.md#f210)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F175`](achados/ux-conversao.md#f175) | 🟠 | /particular não tem nenhuma entrada no header, footer ou home — público adulto órfão | [src/components/site-header.tsx:22](../../../src/components/site-header.tsx#L22) | pequeno |
| [`F177`](achados/ux-conversao.md#f177) | 🟠 | Dropdowns do header abrem só por hover — teclado e touch em tablet não alcançam os itens | [src/components/site-header.tsx:405](../../../src/components/site-header.tsx#L405) | pequeno |
| [`F181`](achados/ux-conversao.md#f181) | 🟠 | Home promete 'robôs' e 'Robótica' no hero, mas o FAQ diz que a escola não trabalha com robótica | [src/routes/index.tsx:413](../../../src/routes/index.tsx#L413) | trivial |
| [`F188`](achados/ux-conversao.md#f188) | 🟠 | Banner de cookies: aceitar em 1 clique, recusar em 2 — e o card cobre ~40% da tela no celular | [src/components/cookie-consent.tsx:294](../../../src/components/cookie-consent.tsx#L294) | trivial |
| [`F197`](achados/ux-conversao.md#f197) | 🟠 | /cursos e header vendem 4 produtos que não batem com os programas reais (idades e nomes) | [src/routes/cursos.index.tsx:62](../../../src/routes/cursos.index.tsx#L62) | médio |
| [`F216`](achados/ux-conversao.md#f216) | 🟠 | Sem CTA persistente: 10 telas mobile seguidas sem nenhum botão de contato nas páginas de curso | [src/routes/__root.tsx:200](../../../src/routes/__root.tsx#L200) | trivial |
| [`F217`](achados/ux-conversao.md#f217) | 🟠 | FAQ "Quanto custa?" manda pro WhatsApp na mesma página que mostra o preço | [src/components/particular-faq-items.ts:36](../../../src/components/particular-faq-items.ts#L36) | pequeno |
| [`F218`](achados/ux-conversao.md#f218) | 🟠 | Chips de categoria da landing levam a UM curso, não à lista da área | [src/routes/particular.index.tsx:274](../../../src/routes/particular.index.tsx#L274) | médio |
| [`F299`](achados/ux-conversao.md#f299) | 🟠 | 11 páginas de programa/curso infantil não têm nenhum link a partir da home, header, footer ou /cursos | [src/components/site-header.tsx:23](../../../src/components/site-header.tsx#L23) | pequeno |

<a id="66"></a>

### 6.6 Copy e consistência de linguagem — nota 5/10

**37 achados** (🔴 1 · 🟠 7 · 🟡 11 · ⚪ 18) → [detalhe completo](achados/copy.md)

O texto do site é caloroso e específico na maior parte, mas **promete mais do que a escola pode provar** e **dá informações diferentes sobre o mesmo assunto** em páginas diferentes.

- **Promessa de resultado e selo que a escola não tem.** Emprego em 60 dias, "formação formal" comparada a faculdade, "certificado reconhecido", certificação Blackmagic "incluída", "venda todos os dias". *Consequência:* risco com o Código de Defesa do Consumidor e aluno frustrado que vira avaliação ruim.
- **Nenhuma fonte única para os dados da escola.** Horário, CEP, número de avaliações, faixas de idade e nomes dos programas estão digitados à mão em cada página, então cada uma diz uma coisa. *Consequência:* o pai lê "Júnior 5–9" e cai numa página "CREATE 8–14", ou chega às 19h de sábado e encontra a escola fechada.
- **O texto de uma página não bate com a página seguinte.** Card "Office + IA" leva a um curso sem IA; "Faixa Branca" não existe no CREATE; a home fala em "robôs" e o FAQ nega robótica. *Consequência:* a promessa se quebra justamente no clique de compra.
- **Hype no lugar de prova.** "Premium", "altíssima demanda", "+300 carreiras transformadas" sem fonte e anos fixos (2025) que já venceram. *Consequência:* soa como propaganda, e texto datado passa a impressão de catálogo abandonado.
- **Descuido de acabamento.** O botão principal muda de nome 6 vezes no funil; "Quero o Impressão 3D" sai com o gênero errado; aparecem "T.I" e "TI", "N8N" e "n8n", "Login" e "Entrar na conta", "você" misturado com "tu". *Consequência:* passa sensação de amadorismo numa marca que se diz premium.

**Quick wins:** [`F358`](achados/copy.md#f358) [`F360`](achados/copy.md#f360) [`F340`](achados/copy.md#f340) [`F361`](achados/copy.md#f361) [`F379`](achados/copy.md#f379) [`F363`](achados/copy.md#f363) [`F313`](achados/copy.md#f313) [`F372`](achados/copy.md#f372)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F358`](achados/copy.md#f358) | 🔴 | Promessa de emprego em prazo fixo no hero do Suporte Técnico ("primeiro emprego em TI em 60 dias") | [src/routes/particular.cursos.suporte.tsx:24](../../../src/routes/particular.cursos.suporte.tsx#L24) | trivial |
| [`F337`](achados/copy.md#f337) | 🟠 | Faixas etárias e nomes de programa contradizem-se entre Home/Programas e páginas JR/CREATE | [src/routes/index.tsx:92](../../../src/routes/index.tsx#L92) | grande |
| [`F338`](achados/copy.md#f338) | 🟠 | Home promete "robôs"/"Robótica" no hero, mas o FAQ da mesma página nega robótica | [src/routes/index.tsx:413](../../../src/routes/index.tsx#L413) | pequeno |
| [`F340`](achados/copy.md#f340) | 🟠 | Horário de funcionamento: "Seg a Sáb · 8h às 22h" na home contradiz sábado até 18h | [src/routes/index.tsx:1080](../../../src/routes/index.tsx#L1080) | trivial |
| [`F359`](achados/copy.md#f359) | 🟠 | ADS: 48 aulas vendidas como "formação formal" substituta de graduação e nível "sênior" | [src/routes/particular.cursos.ads.tsx:40](../../../src/routes/particular.cursos.ads.tsx#L40) | pequeno |
| [`F360`](achados/copy.md#f360) | 🟠 | "Certificado reconhecido em todo o território nacional" — claim sem base para curso livre | [src/components/course-skins/common.tsx:187](../../../src/components/course-skins/common.tsx#L187) | trivial |
| [`F361`](achados/copy.md#f361) | 🟠 | Card "Pacote Office + IA" vende IA, mas o curso linkado (/office) não tem IA | [src/routes/particular.index.tsx:79](../../../src/routes/particular.index.tsx#L79) | trivial |
| [`F379`](achados/copy.md#f379) | 🟠 | DaVinci e Premiere compartilham bullets copiados e FAQ promete certificação Blackmagic como parte do curso | [src/routes/particular.cursos.davinci.tsx:111](../../../src/routes/particular.cursos.davinci.tsx#L111) | trivial |

<a id="67"></a>

### 6.7 Motion e interação — nota 4,5/10

**16 achados** (🔴 1 · 🟠 2 · 🟡 5 · ⚪ 8) → [detalhe completo](achados/motion.md)

O site tem movimento caprichado, mas hoje ele atrasa, esconde ou atrapalha o conteúdo mais do que ajuda a vender, sobretudo no celular.

- **Animação que pode deixar a página vazia.** Uma transição entre páginas e o efeito de "surgir ao rolar" começam com o conteúdo invisível. Se algo falha, seja um clique no link da própria página ou o JavaScript demorando num 3G, o pai vê uma tela em branco e desiste.
- **Espera imposta antes do conteúdo.** Tem abertura de marca em toda visita à home, rolagem "presa" de umas 6 telas e rolagem suavizada com atraso. É tempo de tela antes do botão de agendar aula, justamente onde a conversão acontece.
- **Efeitos pensados para mouse e aplicados ao toque.** A rolagem horizontal dos depoimentos, os destaques que passam ao rolar e o sequestro do scroll nativo fazem o polegar pular a proposta de valor e a prova social.
- **Excesso no botão principal.** O CTA acumula cinco efeitos (pulso, brilho, ímã, aumento, aparecer). No celular, onde está a maioria do público, falta o que importa: resposta ao toque.
- **Movimento sem fim e sem pausa.** O anel do WhatsApp e a troca de fotos do topo rodam para sempre. Isso distrai a leitura e descumpre a regra de acessibilidade que pede um jeito de pausar.
- **Falta de padrão.** Tempos e curvas mudam de um componente para outro. /particular já resolveu parte disso e o resto do site não acompanhou.

**Quick wins:** [`F032`](achados/motion.md#f032) [`F040`](achados/motion.md#f040) [`F043`](achados/motion.md#f043) [`F044`](achados/motion.md#f044) [`F045`](achados/motion.md#f045) [`F048`](achados/motion.md#f048) [`F049`](achados/motion.md#f049) [`F051`](achados/motion.md#f051)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F032`](achados/motion.md#f032) | 🔴 | Clicar em "Ver todos os programas" já em /cursos deixa a página em branco (main fica opacity 0) | [src/components/page-transition-link.tsx:31](../../../src/components/page-transition-link.tsx#L31) | trivial |
| [`F034`](achados/motion.md#f034) | 🟠 | Reveal/IconPop nascem com opacity:0 no HTML do servidor — conteúdo invisível até hidratar (ou para sempre sem JS) | [src/hooks/use-reveal.ts:42](../../../src/hooks/use-reveal.ts#L42) | pequeno |
| [`F036`](achados/motion.md#f036) | 🟠 | Preloader bloqueia a home por ~1,4s em TODA montagem, sem cancelar nem lembrar a sessão | [src/components/preloader.tsx:48](../../../src/components/preloader.tsx#L48) | pequeno |

<a id="68"></a>

### 6.8 Consistência do design system e componentes — nota 5/10

**31 achados** (🔴 0 · 🟠 0 · 🟡 15 · ⚪ 16) → [detalhe completo](achados/design-system.md)

O site tem uma identidade forte na home, mas ela não se sustenta de uma página para outra: os mesmos elementos aparecem com cara diferente conforme a rota.

- **Peças repetidas copiadas à mão em vez de reaproveitadas.** Botão de WhatsApp, FAQ, cartões de contato e fundos decorativos foram refeitos em cada página. **Consequência:** o pai sente que passou para "outro site" ao sair da home, e cada ajuste precisa ser feito em 5 a 20 lugares.
- **A cor não segue uma regra.** São mais de 2.000 códigos de cor soltos no código, e o mesmo programa aparece em 2 ou 3 tons. Na home o Júnior é verde, e na página do Júnior vira roxo. **Consequência:** a cor deixa de indicar a faixa de idade justamente no momento em que o pai está escolhendo.
- **O /particular virou outra marca.** Usa fundo preto, não tem o azul da escola, mistura dois estilos de ilustração e mostra o logo do Windows em destaque. **Consequência:** o adulto não reconhece a mesma escola e a página de venda perde o ar profissional.
- **O botão mais chamativo não é o de venda.** O "Entrar" (login de quem já é aluno) tem o mesmo verde do CTA em todas as telas. **Consequência:** ele disputa o clique com o botão de matrícula.
- **O guia de marca (DESIGN_SYSTEM.md) está desatualizado.** Ele contradiz o código em cores, tipografia, rodapé e animações. **Consequência:** cada nova página inventa o próprio padrão, e é isso que alimenta os problemas acima.
- **Textos com grafias diferentes para a mesma coisa.** Exemplos: "Portal ST" e "Portal do Aluno", "Aula Individual" e "Aula individual". **Consequência:** passa a impressão de descuido.

**Recomendação:** primeiro atualizar o guia e criar um botão de CTA único para o site todo. Depois, decidir as cores dos programas.

**Quick wins:** [`F236`](achados/design-system.md#f236) [`F002`](achados/design-system.md#f002) [`F010`](achados/design-system.md#f010) [`F245`](achados/design-system.md#f245) [`F239`](achados/design-system.md#f239) [`F318`](achados/design-system.md#f318) [`F357`](achados/design-system.md#f357) [`F369`](achados/design-system.md#f369)

<a id="69"></a>

### 6.9 Imagens, ilustrações e ícones — nota 5/10

**19 achados** (🔴 0 · 🟠 0 · 🟡 12 · ⚪ 7) → [detalhe completo](achados/imagens.md)

O site tem fotos reais e já tem uma estrutura que otimiza imagens, mas faltam **fotos** (poucas e repetidas) e a estrutura existente não é aproveitada. Por isso a prova visual fica fraca justamente onde o pai decide.

- **Falta de fotos, e as poucas se repetem:** as mesmas fotos, com a mesma aluna, aparecem na home, no JR e na Colônia. Resultado: a escola parece pequena e a nota de "329 avaliações" perde força.
- **O texto da imagem nem sempre bate com a foto:** a descrição escondida da foto (lida por leitores de tela e pelo Google) às vezes diz algo que a foto não mostra, como "criança de 6 anos" numa foto de adolescente, ou "Colônia" numa foto de aula normal. Isso quebra a promessa de mostrar aulas reais.
- **No celular falta foto onde mais importa:** a home não mostra nenhuma foto no topo no celular, e o topo do JR corta o rosto das pessoas. O pai de criança pequena lê dois scrolls de tela sem ver uma criança na escola.
- **Qualidade desigual:** fotos pequenas esticadas ficam borradas em 12 páginas. Logos do Google aparecem pixelados, e os do Office estão desatualizados. Passa a impressão de "material velho" logo nos cursos que vendem atualidade.
- **Peso desnecessário no celular:** a estrutura que gera versões leves das imagens existe, mas o código não diz ao navegador o tamanho de cada imagem, então ele baixa sempre a versão maior. Logos e favicon (o ícone da aba) também estão enormes. Consequência: página mais lenta na internet móvel, onde está o público.
- **Imagens genéricas:** fotos de banco de imagem em /particular e prévias de WhatsApp sem nenhum aluno deixam a marca parecida com a de qualquer concorrente.

**Quick wins:** [`F285`](achados/imagens.md#f285) [`F289`](achados/imagens.md#f289) [`F287`](achados/imagens.md#f287) [`F280`](achados/imagens.md#f280) [`F324`](achados/imagens.md#f324) [`F335`](achados/imagens.md#f335) [`F296`](achados/imagens.md#f296) [`F279`](achados/imagens.md#f279)

<a id="610"></a>

### 6.10 Técnico percebido: performance, estabilidade e metadados — nota 6/10

**16 achados** (🔴 0 · 🟠 1 · 🟡 4 · ⚪ 11) → [detalhe completo](achados/tecnico.md)

O site funciona e carrega, mas há falhas técnicas silenciosas: elas fecham a porta para parte dos visitantes e reduzem a presença no Google, sem ninguém perceber no dia a dia.

- **Portas de entrada quebradas:** `www.santos-tech.com` dá erro. O pai que recebe o link pelo WhatsApp ou pelo cartão nem chega ao site. É venda perdida antes do primeiro clique.
- **O Google enxerga o site pela metade:** o `robots.txt` (arquivo que diz ao Google o que ele pode ler) bloqueia o visual e as fotos do site. Ele avalia a versão para celular de forma errada e as fotos reais não aparecem nas buscas. Além disso, a nota da escola aparece repetida nos 52 cursos, o que arrisca uma punição que apaga os destaques do site no Google.
- **Peso desnecessário no celular:** cada página de curso baixa o visual de todos os outros cursos. O mesmo acontece com o analytics e com uma checagem de login que 99% dos visitantes nunca usam. Resultado: o adulto espera mais de 4 s pela primeira imagem.
- **Textos de busca fora do padrão:** títulos e descrições passam do limite que o Google mostra. Justo o "Ribeirão Preto" e a "aula experimental grátis" ficam cortados no resultado de busca.
- **Pontos de compartilhamento genéricos:** o card da página /particular no WhatsApp e a página de erro (404) reaproveitam a imagem e o texto da home. Perde-se o gancho de "curso individual".

**Recomendação:** começar pelo `www` e pelo `robots.txt`. Levam minutos, e sem eles o resto rende menos.

**Quick wins:** [`F323`](achados/tecnico.md#f323) [`F322`](achados/tecnico.md#f322) [`F332`](achados/tecnico.md#f332) [`F329`](achados/tecnico.md#f329) [`F336`](achados/tecnico.md#f336) [`F331`](achados/tecnico.md#f331) [`F050`](achados/tecnico.md#f050) [`F328`](achados/tecnico.md#f328)

| Id | Sev. | Achado | Onde | Esforço |
|---|---|---|---|---|
| [`F323`](achados/tecnico.md#f323) | 🟠 | www.santos-tech.com não resolve — quem digita com www cai em erro de DNS | DNS Cloudflare (fora do repo) — public/robots.txt | trivial |

## 7. Método, cobertura e transparência

- **Captura:** Playwright/Chromium no dev server desta branch — 75 rotas + 404 em desktop 1440×900, mobile 390×844 (tela de iPhone) e tablet 768×1024 (16 páginas-chave); estados especiais: banner de cookies, menu mobile, dropdowns do header, foco por teclado, hover, `prefers-reduced-motion` e zoom 200%. O script é reproduzível: `scripts/auditoria-ui/capturar-evidencias.mjs`.
- **Métricas por rota:** títulos, fontes renderizadas, blocos densos, linhas longas, texto < 12px, alvos de toque < 44px, overflow horizontal, imagens, CTAs, landmarks, e varredura **axe-core 4.10** (WCAG).
- **Lighthouse 12** (mobile) em produção nas páginas da tabela da seção 1.
- **Skills de design usadas:** `apple-design-review` (123 páginas da HIG da Apple + 8 princípios de design), `platform-design-web` (WCAG 2.2), `apple-design` e `review-animations` (qualidade de motion).
- **Verificação:** os primeiros 66 achados passaram por 2 verificadores independentes (verdade no código + impacto); os outros 317, por 1 verificador adversarial que abriu o arquivo e a screenshot de cada um tentando refutar. Resultado: nenhum achado se mostrou inexistente, mas **37 foram descartados** por não valerem o custo, **123 só se confirmaram em parte** (exagerados ou mal localizados; a nota do verificador vale mais que o texto original) e **183 tiveram a severidade rebaixada**. Os 4 críticos e o problema de DNS foram conferidos ao vivo pelo CTO antes da publicação (marcados com ✅).
- **Lighthouse:** a rodada de `/particular` não completou (timeout do Chrome local) e a de `/particular/cursos/excel` terminou com aviso de timeout; os números dela são indicativos.
- **Limitação conhecida:** as capturas `desktop.full.png` de páginas internas ficaram em branco abaixo da primeira tela (a animação de entrada só dispara com rolagem real). Os agentes usaram as fatias por viewport e o mobile nesses casos — nenhum achado se baseia nessa área em branco.

### Cobertura declarada pelas lentes

| Lente | Achados brutos | O que olhou |
|---|---:|---|
| texto:G1 | 27 | Li DESIGN_SYSTEM.md (§1.4, §3, §8, §13), src/styles.css e o código de todas as rotas do escopo (index.tsx + scroll-stage/hero-collage/testimonials/faq-item/rarity-badge, sobre.index.tsx, sobre.visao.tsx, contato.tsx, links.tsx, legal-page.tsx + privacidade/termos, __root.tsx/404, site-header, site-footer, whatsapp-fab, cookie-consent, preloader, use-count-up). Abri desktop.fold + mobile.fold de todas as 8 rotas, as 1… |
| texto:G2 | 24 | Famílias C e D completas: fold desktop+mobile das 14 rotas (/cursos, /cursos/create, /cursos/junior, /cursos/camps, /cursos/academies e as 9 páginas de curso); fatias mobile completas de /cursos/create/8-9-anos (seg01–14), /cursos/junior/5-6-anos (seg03–07, 11), /cursos/create/13-14-anos (seg01–02, 05–07), /cursos/junior (seg02–06), /cursos/camps (seg03–07), /cursos/academies (seg01–02, 04–05), mobile.full de /cursos… |
| texto:G3 | 24 | Li DESIGN_SYSTEM.md (§1.3, §1.4, §3, §11, §12), styles.css, particular.tsx (layout/sidebar), particular.index.tsx, particular-course-page.tsx, particular-faq.tsx, particular-faq-items.ts, course-skins/common.tsx, shared.tsx e as 8 peles (planilha, ide, ia, ti, oficina, design, marketing, informatica) + variantes relevantes (ide-python, ide-kit, ia-geral, marketing-copywriting, planilha-power-bi, design-canva). Métric… |
| layout:G1 | 19 | Rotas do escopo (A, B, G): home (desktop.fold + seg02–13, mobile.fold + seg02/03/05/07/09/11/13 + footer, tablet.fold + seg02/05/08), /sobre (desktop/mobile/tablet full), /sobre/visao (desktop/mobile full), /contato (desktop/mobile/tablet full), /links (desktop/mobile full), /privacidade (desktop full, mobile fold), /termos (mobile full), 404 (desktop/mobile full). Specials: menu-mobile-open, cookie-banner.desktop/mo… |
| layout:G2 | 21 | Abri desktop.fold + mobile.fold das 14 rotas do escopo (/cursos, /cursos/create, /cursos/junior, /cursos/camps, /cursos/academies e as 9 páginas de curso), tablet.fold de /cursos, /cursos/camps, /cursos/academies e /cursos/create/8-9-anos, e as fatias completas mobile (segNN) de 8-9-anos, 13-14-anos, junior/5-6-anos, /cursos/junior, /cursos/camps e /cursos/academies, além de mobile.footer/desktop.footer. Limitação en… |
| layout:G3 | 17 | Lidas as fontes: DESIGN_SYSTEM.md §4/§5/§9, src/routes/particular.tsx (layout+sidebar), particular.index.tsx, particular-course-page.tsx, particular-faq.tsx, course-skins/common.tsx, planilha.tsx, ide.tsx, ti.tsx, design.tsx, informatica.tsx e trechos de variants. Screenshots: /particular em desktop.fold/full/footer, tablet.fold/full, mobile.fold/seg02-04/06/08/10/footer, hover-card.particular; folds desktop+mobile d… |
| ux:G1 | 23 | Rotas percorridas (desktop.fold + mobile.fold, mais fatias/full e footer): / (seg03, seg06, seg09, mobile.footer), /sobre, /sobre/visao (mobile.full), /contato (mobile.fold + full), /links (mobile.full), /privacidade (mobile.fold), /termos, /pagina-que-nao-existe-404 (mobile.full). Specials: cookie-banner.mobile, cookie-manage.mobile, header-dropdown.desktop, header-scrolled.desktop, keyboard-focus-6tabs + keyboard-f… |
| ux:G2 | 22 | Li DESIGN_SYSTEM.md (§1.3, §1.6, §8, §9.2–9.4, §11, §13), src/lib/whatsapp.ts, site-header.tsx, site-footer.tsx, course-page.tsx, cursos.index.tsx, cursos.create.index.tsx, cursos.junior.index.tsx, cursos.camps.tsx, cursos.academies.tsx, cursos.create.8-9-anos.tsx, cursos.junior.5-6-anos.tsx e trechos de cursos.junior.7-8-anos.tsx; grep de links internos para /cursos/junior\|create\|academies em todo src. Screenshots… |
| ux:G3 | 22 | Li particular.tsx (layout/sidebar), particular.index.tsx, particular-course-page.tsx, particular-faq.tsx, particular-faq-items.ts, course-skins/common.tsx, shared.tsx, planilha.tsx, trechos de ide/ti/ia/informatica, whatsapp.ts, site-header.tsx, __root.tsx, DESIGN_SYSTEM §1.3/§8/§9.4/§13. Screenshots: /particular (desktop.fold, desktop.full, mobile.fold, mobile.seg01–12, footer, crop da sidebar); /particular/cursos/e… |
| cor-identidade | 28 | Li DESIGN_SYSTEM.md (§1–§15), src/styles.css (tokens/gradientes/glows/rarity-badge), program-theme.ts, site-header/footer, particular.tsx (sidebar fusão), particular-course-page.tsx, course-page.tsx, course-themes.ts e as 8 peles em course-skins/*.tsx; rodei grep de hex cru em src (2.298 ocorrências, 655 hex distintos, 137 arquivos), de text-white/NN e de cores Tailwind fora da paleta; calculei contraste WCAG (fórmul… |
| acessibilidade | 22 | Li manifest.json (75 rotas) e agreguei axe.violations/incomplete + dom.landmarks/headings/smallTargets/imgIssues/inputs/externalNoRel/buttonsWithoutType de TODOS os desktop.json/mobile.json (dump em scratchpad/a11y_dump.txt). Abri desktop.fold + mobile.fold de home, /particular, /particular/cursos/{backend,excel,photoshop}, /cursos/camps, /cursos/create/8-9-anos, /links, home mobile.footer; specials keyboard-focus-6t… |
| imagens | 25 | Abri desktop.fold + mobile.fold de home, /sobre, /contato, /links, /cursos, /cursos/junior, /cursos/create, /cursos/camps, /cursos/academies, /cursos/create/8-9-anos, /particular e 10 páginas /particular/cursos/* (informatica, office, excel-ia, ia, copywriting, canva, autocad, backend, impressao-3d, ads), mais fatias (home seg03–10 desktop e seg01–07 mobile; junior, 8-9-anos, camps, particular, informatica mobile seg… |
| hig-critica | 31 | Li apple-design-review/SKILL.md + hig/design-principles.md, layout.md, typography.md, color.md, branding.md, writing.md e o DESIGN_SYSTEM.md (§1–§15) + src/styles.css. Screenshots abertos: home (desktop fold + seg02/05/07/09/10/11/13/14 + footer; mobile fold + seg02/06/09/12/13/14), /cursos (desktop fold/full, mobile fold/full), /cursos/create (fold), /cursos/create/8-9-anos (desktop fold/full; mobile seg02/04/06/08/… |
| tecnico-percebido | 25 | Lighthouse mobile de produção (home, /contato, /cursos/create/8-9-anos, /particular/cursos/excel — scores 68/81/70/73, LCP 5,7/3,8/5,1/4,6 s, CLS 0 em todas), HTML SSR real de santos-tech.com (home, /particular/cursos/excel, /apresentacoes, 404), headers de favicon/CSS/OG, DNS de www, robots.txt e sitemap (74 URLs = rotas públicas; apresentacoes/professores fora com noindex e sem links internos — intencional, OK). Có… |
| copy-infantil | 26 | Li o código-fonte completo de: index.tsx, sobre.index.tsx, sobre.visao.tsx, contato.tsx, links.tsx, privacidade.tsx, termos.tsx, legal-page.tsx, __root.tsx (404/erro), cursos.index.tsx, cursos.create.index.tsx, cursos.junior.index.tsx, cursos.camps.tsx, cursos.academies.tsx, course-page.tsx, aula-detalhada.tsx, ementa-meses.tsx, testimonials.tsx, faq-item.tsx, site-header.tsx, site-footer.tsx, cookie-consent.tsx, wha… |
| copy-particular | 30 | Li na íntegra src/routes/particular.index.tsx, particular.tsx, src/components/particular-course-page.tsx, particular-faq.tsx, particular-faq-items.ts, course-skins/shared.tsx e course-skins/common.tsx; extraí via script (scratchpad/copy/courses.json) título/description/nome/categoria/tagline/targetAudience/tiers/outcome/tools/faqItems dos 52 arquivos particular.cursos.*.tsx e li o texto completo de todos (summary.txt… |
| design-system-codigo, motion-codigo | 59 | Fase 1: leitura integral do código (tokens, componentes, animações), sem screenshots. |

### Lacunas apontadas pelo crítico de completude

- A captura parava em 14 segmentos por página. Por isso 45 combinações de rota e tela têm trechos que nunca foram fotografados: a home no celular ficou 47% sem imagem (11.429 px) e mais de 40 páginas /particular/cursos/* no celular não têm nenhuma imagem do preço, do FAQ nem do CTA final. Consequência: os achados dessas regiões vieram só do código.

- O desktop.full.png das páginas /particular sai deslocado cerca de 230 px para a direita, com o conteúdo cortado na borda. É defeito da captura de página inteira com a barra lateral fixa, não do site: no fold e em tela real o layout está correto. Qualquer achado de 'corte à direita' tirado desse arquivo precisa ser conferido no fold.

- Só três tamanhos de tela foram usados: 1440×900, 390×844 e 768×1024. Ficaram de fora o notebook 1280×720 e 1366×768 e o celular pequeno 360×640, justamente onde o botão principal do hero some (achado extra 1).

- O celular deitado (844×390) nunca foi auditado. Nele, o header de 81 px, o card de cookies de 275 px e o botão flutuante do WhatsApp cobrem 100% da tela, e aparece o menu de desktop que só abre com o mouse passando por cima, sem toque. O cartão de cookies grande demais já está em F134/F188; a novidade é que, deitado, não sobra nada visível.

- O modo escuro do /particular (botão na barra lateral, escolha salva no navegador) nunca tinha sido capturado nas 53 páginas. Conferi 10 páginas nos dois tamanhos: o visual funciona, e o problema real é o piscar ao carregar (achado extra 2).

- Os estados especiais de zoom 200%, header rolado e hover em card foram gerados, mas nenhum achado os citava. Conferi os três: o zoom 200% se reorganiza corretamente e não há problema novo neles.

- O print menu-mobile-programas.png nunca foi gerado, porque o seletor clicou no botão de desktop escondido. O submenu Programas aberto no celular ficou sem prova visual, e F195 se apoia só no código.

- A etapa 'contato-form' do log marcou ok, mas o site não tem formulário. Nenhum estado de formulário, erro ou validação existe para testar.

- O axe rodou só no estado inicial: sem banner de cookies, menu, gaveta do /particular ou FAQ abertos, e sem tablet (a opção skipAxe estava ligada). Violações em estados interativos ficaram fora da conta.

- A barra lateral recolhida (60 px) e a gaveta aberta do /particular não tinham captura. Capturei as duas: os links invisíveis que continuam recebendo foco pelo teclado usam o mesmo grid-rows-[0fr] do F260, então não é achado novo.

- O F192 subestima a distância até o preço na home: no celular, 'Sem surpresa: você sabe exatamente o que vai pagar' está a 14.419 px, cerca de 17 telas de 844 px, e não ~9. Convém corrigir o número no relatório.

- Três áreas ficaram fora da auditoria: /apresentacoes/* e /professores/* (internas, noindex e bloqueadas no robots) e /blog, um app separado que o header linka. Nenhuma foi olhada.

- No tablet só 16 das 75 rotas foram capturadas, e das 52 páginas de curso particular só 5. Nenhuma pele de IA, Marketing ou Oficina foi vista em 768 px.

<details><summary><b>Refutados ou descartados na verificação (37)</b> — listados por transparência; não são problemas</summary>

- `F158` Sidebar transparente fica ilegível onde o fundo da página muda abaixo do ponto amostrado (src/routes/particular.tsx) — _descartado_: confirmado: davinci/desktop.fold.png: abaixo de y≈730 a coluna fica clara e 'Falar no WhatsApp'/'Modo escuro' somem. Um único ponto amostrado (particular.tsx:216-231) define o tom da coluna toda. Mesma causa-raiz de F255; não abrir tarefa separada.

- `F214` Sidebar desktop fica ilegível: tom de texto amostrado em 1 ponto vira branco sobre fundo claro (src/routes/particular.tsx) — _descartado_: confirmado: Confirmado em particular/desktop.fold.png e backend/desktop.fold.png: sidebar branca sobre fundo claro. Mesma causa-raiz e mesma correção de F255; consolidar.

- `F242` Sidebar 'fusão' do /particular renderiza texto branco sobre coluna clara — itens de navegação ilegíveis (src/routes/particular.tsx) — _descartado_: confirmado: backend/desktop.fold.png: sidebar inteira ilegível mesmo com sb-bleed no hero IDE, porque o bg está no div pai (ide.tsx:60). CSS particular.tsx:294-298 confirmado. Mesmo defeito de F255.

- `F033` Dropdowns Programas/Sobre só abrem por hover — teclado nunca alcança a navegação de programas (src/components/site-header.tsx) — _descartado_: confirmado: Mesmo defeito de F177 (site-header.tsx:415 `invisible … group-hover:visible`, botão sem aria-expanded). Válido, mas não deve contar como achado separado; vale_corrigir=false só para não duplicar o trabalho.

- `F321` Preloader full-screen da home soma ~1,4 s de tela azul depois do JS já carregado (src/components/preloader.tsx) — _descartado_: parcial: Premissa errada: afirma que só entra após hidratação/depois do FCP, mas o HTML de produção já traz o overlay opaco z-[200]; o FCP provavelmente é a tela azul. O problema existe (e é maior), porém é o mesmo achado de F036.

- `F013` Badge 'Mais procurado' usa arco-íris de 7 cores Apple fora da paleta + 3 efeitos simultâneos (src/styles.css) — _descartado_: parcial: Duplicata do F305. Exagero na afirmação de que o texto é "ilegível": em specials/header-dropdown.desktop.png o selo "MAIS PROCURADO" dá para ler no desktop. O problema real é o tamanho de 9px e as cores fora da paleta.

- `F238` Badge 'Mais procurado' com gradiente arco-íris animado, brilho passando e glow roxo — fora da paleta e §11 (src/styles.css) — _descartado_: confirmado: Mesmo problema do F305 (styles.css:300-332, rarity-badge.tsx:17, site-header.tsx:389). Fica confirmado, mas consolidar em um único item para não contar em dobro.

- `F339` E-mail de contato divergente: santos-games.com no /contato vs santos-tech.com no legal (src/lib/seo.ts) — _descartado_: confirmado: É o mesmo problema de F183. Confirmado: seo.ts:39 põe ceo@santos-games.com no schema Organization, e privacidade.tsx:172-173 e termos.tsx:123 usam santos-tech.com. Marquei vale_corrigir=false só para não contar o trabalho em dobro: a correção vai no F183.

- `F004` /particular usa paleta neutral-* do Tailwind (918×) em vez dos tokens shadcn — duas escalas de cinza no site (src/components/particular-course-page.tsx) — _descartado_: parcial: Confirmado: 916 classes neutral-*, 0 tokens shadcn em particular*.tsx. A diferença de temperatura dos cinzas é sutil e /particular é uma família visual própria (tem tema escuro, particular.tsx:138/277). Refatoração de ~900 pontos com risco de regressão visual e ganho baixo para o usuário.

- `F007` Eyebrow tem 36 combinações de tamanho/peso/tracking; DS §3.5 define uma (src/routes/contato.tsx) — _descartado_: parcial: O grep dá 33 combinações, não 36, e muitas são rótulos de card (ex.: 'WhatsApp' em contato.tsx:62), não eyebrows. DS §3.2 (linha 209) permite tracking de 0.18em a 0.25em. A variação é real, mas trocar cerca de 250 ocorrências custa mais do que vale.

- `F019` Sombras arbitrárias: 170 ocorrências com ~130 valores distintos; escala do DS quase não é usada (src/routes/index.tsx) — _descartado_: parcial: Contagem confirmada: 170 ocorrências e 122 únicas. Boa parte fica em course-skins/scenes (ilustrações) e o próprio DS §5.3:306 dá um exemplo com shadow arbitrária. Em course-page.tsx:456-907 o padrão é consistente e tematizado. Não há inconsistência visível que justifique o custo.

- `F021` Padding vertical de seção varia (py-12/14/16/20/24) sem regra; DS §4.2 só prevê py-20 (src/routes/index.tsx) — _descartado_: parcial: Variação existe, mas as contagens estão infladas: grep em section de uma linha dá py-20 69×, py-16 23×, py-12 5×, py-14 4×, py-24 4×. DS §4.2 prevê py-24+ para bandas coloridas. Duplica F139/F148; custo supera o valor.

- `F031` /particular usa cores default do Tailwind (blue-500, amber-400/500, neutral-900) e gradientes quase-pretos inventados (src/routes/particular.index.tsx) — _descartado_: parcial: Existe: hero `bg-neutral-900` (:164) e pilares com gradientes próprios (:60, :74, :88). Mas o escuro neutro é consistente em toda a área /particular (topbar e badge em particular.tsx:593), o que indica um sub-tema intencional. Mudar exige decisão de marca, que o roadmap marca como adiada.

- `F046` Menu mobile anima `height` com power2.in ao fechar; sub-acordeões Programas/Sobre abrem sem animação (src/components/site-header.tsx) — _descartado_: parcial: Código confere: height animado nas l.64-75, power2.in no fechamento e sub-acordeões condicionais (l.174/200). Mas é um menu aberto uma vez por visita; animar height de um único elemento não causa jank perceptível. Reduced-motion já é tratado (l.58-61).

- `F053` RarityBadge: arco-íris + brilho infinitos repintam a cada quadro na navegação e nos cards de preço (src/styles.css) — _descartado_: parcial: Duplicata do F305. O argumento de desempenho é exagerado: é um selo de 9px e o dropdown invisível tem pintura desprezível. O reduced-motion já está tratado em styles.css:333-336. O problema real é identidade visual (F305).

- `F054` Dropdowns desktop nascem em fade puro, sem origem no gatilho nem deslocamento (src/components/site-header.tsx) — _descartado_: parcial: O fade de 150ms existe (l.322, 415, 447), mas nem HIG nem o DS proíbem fade puro em dropdown. transition-all é necessário para a visibility. É polimento de gosto, sem impacto.

- `F056` Barra de progresso anima `width` e toggles animam `left` — propriedades de layout em vez de transform (src/hooks/use-fill-on-scroll.ts) — _descartado_: confirmado: Confirmado: width no gsap (use-fill-on-scroll.ts:23-26), transition-[left] em cookie-consent.tsx:477 e transition-all com left em marketing-meta-ads.tsx:25. São elementos minúsculos animados uma vez, sem jank perceptível. O ganho é teórico.

- `F137` Largura de container varia por seção (3xl/4xl/5xl/6xl/7xl) contra a cápsula única do DS §4.1 (src/routes/sobre.index.tsx) — _descartado_: parcial: As larguras variam de fato (sobre.index.tsx:75 3xl, :94 7xl, :130 5xl, :160 6xl, :268 5xl) e o DS §4.1 diz "Sempre" 7xl. Mas hero centralizado, manifesto e card de CTA são blocos centrados de propósito, e o desalinhamento quase não se nota. O que falta é documentar o padrão.

- `F153` Seção de abertura alinhada à esquerda enquanto todas as demais são centralizadas (src/routes/cursos.create.8-9-anos.tsx) — _descartado_: parcial: Existe: `<Reveal className="max-w-3xl">` em 8-9:278, 9-10:272, 10-11:265, 11-12:266, 12-13:267, 13-14:268, junior 6-7:255, 7-8:256; course-page.tsx usa text-center. Porém prosa longa à esquerda é escolha legível, não defeito; centralizar pioraria a leitura.

- `F172` Barra de topo do layout + barra de 'chrome' da pele empilham ~100 px antes do hero no mobile (src/components/course-skins/planilha.tsx) — _descartado_: parcial: planilha.tsx:173 h-9 (36px) e marketing.tsx:246 h-11 empilham com o topbar h-14 (particular.tsx:586). Mas design.tsx:197 é `absolute top-0` sobre o hero, não empilha. Faixa é a metáfora visual da pele, não redundância pura; ~92px, não 100.

- `F173` Stats do hero da landing em 3 colunas fixas no mobile: células de ~110 px e rótulos em 2 linhas (src/routes/particular.index.tsx) — _descartado_: parcial: No mobile.fold.png os 3 rótulos quebram em 2 linhas, mas de forma igual, e as células ficam com a mesma altura. A 'irregularidade' descrita não aparece. O grid está em :235 e a célula em :239.

- `F186` 'Ver os programas' no hero vai para âncora da home; 'Programas' no header vai para /cursos (src/routes/index.tsx) — _descartado_: parcial: index.tsx:427 aponta para #programas e o header (site-header.tsx:177/417) aponta para /cursos. A âncora interna é um padrão comum e mostra os mesmos programas em resumo. A confusão de modelo mental é hipotética, sem evidência de uso.

- `F235` Verde do CTA usado como cor de identidade (programa Júnior, eyebrows e acentos do /particular) — dilui a hierarquia de ação (src/routes/particular.index.tsx) — _descartado_: parcial: Usos verdes existem (:262, :288, :189), mas DS §2.1/§2.2 autoriza #0DB88F para 'CTA principal, ícones, detalhes' e 'destaques'. Eyebrow verde não viola regra; no hover-card.particular.png o CTA sólido verde continua dominante. Mudança é decisão de marca, não bug.

- `F248` Indisciplina de cores de texto: 21 cores na home e até 27 por página nas peles do /particular (src/components/course-skins/common.tsx) — _descartado_: parcial: Contagem de textColors do manifest é real, mas inclui acentos temáticos e opacidades sobre fundo escuro das peles, que são deliberadas. Âncora l.565 cai no fallback morto (ver F017). Métrica sem regra correspondente no DESIGN_SYSTEM.md.

- `F252` Modo escuro existe só no /particular (toggle na sidebar); restante do site não tem dark mode (src/routes/particular.tsx) — _descartado_: confirmado: Toggle existe em particular.tsx:557-567 e __root/site-header não têm tema escuro. Mas o /particular é uma área tipo app, separada do resto; remover as centenas de variantes dark: custa caro e o ganho é pequeno. É decisão de produto.

- `F253` Dois verdes lado a lado em todo fold: FAB WhatsApp #25D366 e CTA #0DB88F (src/components/whatsapp-fab.tsx) — _descartado_: parcial: whatsapp-fab.tsx:21-22 registra a decisão deliberada de usar a cor oficial do WhatsApp para reconhecimento, e o FAB verde do WhatsApp é convenção de mercado. Os dois verdes são reais (home fold), mas é preferência de marca, não violação do DS.

- `F283` Hero de /particular é o único do site sem imagem ou ilustração — melhor lugar para os SVGs novos (src/routes/particular.index.tsx) — _descartado_: parcial: O hero só com texto é real (mobile.fold.png), mas o §9.2 citado vale para programas infantis (JR, CREATE, CAMPS, ACADEMIES), não para /particular. O hero atual tem CTA, prova social e métricas visíveis na dobra. Exige asset novo, ou seja, decisão de marca.

- `F292` Mesma foto no hero de 7 páginas CREATE e 3 páginas JR; ilustração por ano teria mais impacto (src/routes/cursos.create.8-9-anos.tsx) — _descartado_: confirmado: As 6 rotas usam imageName="students-1" (ex.: 8-9:264, 10-11:251, 13-14:254) e create.index:31 idem; course-page.tsx:259 `hidden lg:block` esconde no mobile. Fato real, mas é polimento/decisão de arte, não bug.

- `F297` Scroll-stage no mobile mostra celular com tela preta por uma tela inteira antes da foto subir (src/components/scroll-stage.tsx) — _descartado_: parcial: scroll-stage.tsx:108-109 confirma foto fora até p=0.06, mas a captura estática congela um frame de animação scroll-scrub; no scroll real a tela preta dura pouco e fica sob o título. Majoritariamente artefato de captura.

- `F306` Glifos decorativos 'tech' (binário, </>, terminal, chip) nos heros são clipart genérico e colidem com texto (src/components/decorative-elements.tsx) — _descartado_: parcial: A colisão já está coberta por F289 e F146. Chamar de "clipart genérico" (DS §11) é leitura subjetiva: os glifos são traço fino, opacidade 15–30%, e o próprio arquivo (l.4) os declara como vocabulário visual da marca. Removê-los muda a identidade, então a decisão é de negócio.

- `F307` /cursos repete a home quase 1:1 (mesmo H2, mesmos 4 cards) e não ganha o direito de existir (src/routes/cursos.index.tsx) — _descartado_: parcial: H1 idêntico ao H2 da home (cursos.index.tsx:244 vs index.tsx:556) é real. Mas a página é destino dos menus e o 'não ganha o direito de existir' é opinião; redirect quebraria âncoras e sitemap.

- `F315` Nas 52 páginas /particular/cursos/* a cor do CTA primário muda com a 'pele' (verde, azul, rosa, vermelho) (src/components/course-skins/common.tsx) — _descartado_: parcial: Existe (ia.tsx:85, common.tsx:62/113 usam bg-(--accent)) e diverge do DS §8.1/§2.2. Mas o accent por categoria é intencional (particular.tsx:157-165). Cada página é consistente internamente. O argumento de que o usuário reaprende 52 vezes é exagerado. Decisão de marca.

- `F317` Peles de /particular chegam a 57 variantes tipográficas por página, com monoespaçado de 8–10px (src/routes/particular.tsx) — _descartado_: parcial: Contagem de variantes infla por mocks (cenas de Excel/IDE em mono 10px), que são imagem e não texto de leitura. O '8px w300 Poppins' é o lockup 'Escola' da topbar (particular.tsx:591). Os rótulos reais pequenos já estão cobertos pelo F113.

- `F327` ScrollSmoother com normalizeScroll no site todo: 55,6 s de main-thread na home vs 2,3 s em /particular (src/hooks/use-smooth-scroll.ts) — _descartado_: parcial: Números conferidos em scratchpad/lighthouse (home 55,6 s, excel 2,3 s). Mas TBT é 0-90 ms e o score de /contato (0,81) supera o do /particular (0,73). A causa pode ser marquee/pulsos, não só o smoother, e não há atraso de interatividade comprovado. Duplicado de F042.

- `F344` "Quero saber mais" é CTA genérico que abre WhatsApp em vez de levar às páginas dos programas (src/routes/cursos.index.tsx) — _descartado_: parcial: Fatos corretos (cursos.index.tsx:176, index.tsx:267 e 731), mas repete F198/F299 quase integralmente. Consolidar para não contar o mesmo problema três vezes.

- `F380` Registro misto "pra" vs "para" dentro da mesma página (src/routes/particular.cursos.excel.tsx) — _descartado_: parcial: A linha 110 está errada: o FAQ fica em :114-119. O próprio DS §1 (linha 35) usa 'pra'. Alternar pra/para é normal no português escrito; é opinião sem base normativa e custa caro em 52 arquivos.

- `F382` Anglicismo não aportuguesado "rankear/rankeie/rankeamento" na página de SEO (src/routes/particular.cursos.seo.tsx) — _descartado_: parcial: As ocorrências existem (seo.tsx:13, 40, 82, 129). Mas 'rankear' é o jargão usado no mercado e nas buscas, então numa página de SEO pode ser escolha de palavra-chave. Chamar de 'amador' é exagero.

</details>

---
_Evidências (screenshots e JSONs, ~325 MB) ficam fora do repositório; regenerar com o script de captura citado acima._
