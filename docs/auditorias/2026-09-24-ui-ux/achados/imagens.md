# Imagens, ilustrações e ícones — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#69) · nota da dimensão **5/10** · **19 achados** (🔴 0 · 🟠 0 · 🟡 12 · ⚪ 7)

O site tem fotos reais e já tem uma estrutura que otimiza imagens, mas faltam **fotos** (poucas e repetidas) e a estrutura existente não é aproveitada. Por isso a prova visual fica fraca justamente onde o pai decide.

- **Falta de fotos, e as poucas se repetem:** as mesmas fotos, com a mesma aluna, aparecem na home, no JR e na Colônia. Resultado: a escola parece pequena e a nota de "329 avaliações" perde força.
- **O texto da imagem nem sempre bate com a foto:** a descrição escondida da foto (lida por leitores de tela e pelo Google) às vezes diz algo que a foto não mostra, como "criança de 6 anos" numa foto de adolescente, ou "Colônia" numa foto de aula normal. Isso quebra a promessa de mostrar aulas reais.
- **No celular falta foto onde mais importa:** a home não mostra nenhuma foto no topo no celular, e o topo do JR corta o rosto das pessoas. O pai de criança pequena lê dois scrolls de tela sem ver uma criança na escola.
- **Qualidade desigual:** fotos pequenas esticadas ficam borradas em 12 páginas. Logos do Google aparecem pixelados, e os do Office estão desatualizados. Passa a impressão de "material velho" logo nos cursos que vendem atualidade.
- **Peso desnecessário no celular:** a estrutura que gera versões leves das imagens existe, mas o código não diz ao navegador o tamanho de cada imagem, então ele baixa sempre a versão maior. Logos e favicon (o ícone da aba) também estão enormes. Consequência: página mais lenta na internet móvel, onde está o público.
- **Imagens genéricas:** fotos de banco de imagem em /particular e prévias de WhatsApp sem nenhum aluno deixam a marca parecida com a de qualquer concorrente.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F275`](#f275) | 🟡 | Fotos students-1..4 têm só 305px de fonte e são esticadas a ~600px (borradas em 12 páginas) | `/`, `/cursos/junior` +8 | [src/components/course-page.tsx:201](../../../../src/components/course-page.tsx#L201) | pequeno |
| [`F276`](#f276) | 🟡 | Colônia de Férias usa as 4 fotos da aula regular (mesma criança) com alt "Crianças na Colônia" | `/cursos/camps` | [src/components/colonia-photos.tsx:32](../../../../src/components/colonia-photos.tsx#L32) | pequeno |
| [`F277`](#f277) | 🟡 | Uma única aluna aparece em 5 dos 9 espaços de foto da home (2 dos 4 quadros do hero, sempre) | `/` | [src/components/hero-collage.tsx:14](../../../../src/components/hero-collage.tsx#L14) | pequeno |
| [`F278`](#f278) | 🟡 | Hero do JR recorta a foto em círculo e mostra só o torso do professor (cabeça fora do quadro) | `/cursos/junior` | [src/routes/cursos.junior.index.tsx:322](../../../../src/routes/cursos.junior.index.tsx#L322) | pequeno |
| [`F279`](#f279) | 🟡 | Logos de ferramentas servidas como PNG bruto de até 3840px para ícones de 14–16px (3,1 MB na pasta) | `todas as 52 páginas de /particular/cursos/*`, `/apresentacoes/*` +3 | [src/components/tool-logo.tsx:4](../../../../src/components/tool-logo.tsx#L4) | pequeno |
| [`F280`](#f280) | 🟡 | favicon.png de 1080×1080 (87 KB) é o favicon E o apple-touch-icon; sem .ico/.svg/180px e invisível em aba escura | `todas` | [src/routes/__root.tsx:137](../../../../src/routes/__root.tsx#L137) | pequeno |
| [`F282`](#f282) | 🟡 | Cards "Cursos mais populares" em /particular usam fotos stock genéricas (rede neural, código matrix) | `/particular` | [src/routes/particular.index.tsx:145](../../../../src/routes/particular.index.tsx#L145) | médio |
| [`F284`](#f284) | 🟡 | Home no celular não mostra nenhuma foto no hero (colagem é `hidden lg:block`) | `/` | [src/components/hero-collage.tsx:78](../../../../src/components/hero-collage.tsx#L78) | pequeno |
| [`F285`](#f285) | 🟡 | Alt text contradiz a foto: mesma imagem descrita como "criança de 6 anos" e "adolescente" | `/`, `/cursos/junior` | [src/routes/cursos.junior.index.tsx:546](../../../../src/routes/cursos.junior.index.tsx#L546) | trivial |
| [`F287`](#f287) | 🟡 | Logos do Office desatualizadas (estilo 2013–2018) ao lado de Gmail/Notion/ChatGPT atuais | `/particular/cursos/informatica`, `/particular/cursos/office` +5 | [src/assets/logos/excel.png](../../../../src/assets/logos/excel.png) | trivial |
| [`F289`](#f289) | 🟡 | Decoração binária "01001/10110" sobrepõe texto no hero da home e na legenda de /cursos | `/`, `/cursos` | [src/components/decorative-elements.tsx:68](../../../../src/components/decorative-elements.tsx#L68) | trivial |
| [`F324`](#f324) | 🟡 | `<Img>` sem `sizes` faz o srcset escolher 100vw — logo de 48 px baixa candidato de 1440 px | `/`, `/cursos/*` +6 | [src/components/img.tsx:21](../../../../src/components/img.tsx#L21) | pequeno |
| [`F288`](#f288) | ⚪ | Logos do Google (79–92px) ficam borradas a 36–48px @2x ao lado de logos de 1280–3840px | `/particular/cursos/informatica`, `/particular/cursos/copywriting` +3 | [src/assets/logos/gmail.png](../../../../src/assets/logos/gmail.png) | pequeno |
| [`F291`](#f291) | ⚪ | OG images de 65 páginas são só ícone lucide + título no mesmo fundo; nenhuma mostra aluno ou escola | `/cursos/create/*`, `/cursos/junior/*` +3 | [scripts/generate-og-images.mjs:241](../../../../scripts/generate-og-images.mjs#L241) | médio |
| [`F293`](#f293) | ⚪ | Foto da impressora 3D (5,8 MB + 6 derivados) não é usada; claim "Impressões 3D inclusas" fica sem prova | `/`, `/particular/cursos/impressao-3d`, `/cursos/camps` | [src/assets/impressora-3d.png:155](../../../../src/assets/impressora-3d.png#L155) | pequeno |
| [`F294`](#f294) | ⚪ | /links: 4 imagens PNG de 1080–1200px servidas a 328px (173px no mobile) sem srcset/WebP | `/links` | [src/routes/links.tsx:140](../../../../src/routes/links.tsx#L140) | médio |
| [`F295`](#f295) | ⚪ | Fotos da colônia usam <img> cru: 1200×2133 sem srcset, sem lazy e fora do pipeline <Img> | `/cursos/camps` | [src/components/colonia-photos.tsx:29](../../../../src/components/colonia-photos.tsx#L29) | pequeno |
| [`F296`](#f296) | ⚪ | /sobre: única foto da página é retrato dominado pela nuca do professor, rosto da criança escondido | `/sobre` | [src/routes/sobre.index.tsx:96](../../../../src/routes/sobre.index.tsx#L96) | trivial |
| [`F335`](#f335) | ⚪ | /particular: logo da barra superior com `loading="lazy"` acima da dobra e `width/height` incoerentes com a classe | `/particular`, `/particular/cursos/* (52)` | [src/routes/particular.tsx:589](../../../../src/routes/particular.tsx#L589) | trivial |

<a id="f275"></a>

## F275 · 🟡 Fotos students-1..4 têm só 305px de fonte e são esticadas a ~600px (borradas em 12 páginas)

- **Rotas:** `/`, `/cursos/junior`, `/cursos/create`, `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/academies`
- **Onde:** [src/components/course-page.tsx:201](../../../../src/components/course-page.tsx#L201)
- **Evidência:** src/assets/students-{1..4}.png medem 305×305 e o pipeline só gerou students-N-305.{avif,webp}. home/desktop.json › dom.imgIssues: "students-4-305.avif rendered 597x400 — superdimensionada" e "students-2-305.avif rendered 597x400"; cursos__junior/desktop.json: students-2 e students-3 renderizadas a 590×440. course-page.tsx:201 `getOptimizedUrl(imageName, 800, "avif")` cai pro único tamanho (305) para students-1 (6 rotas CREATE, grep imageName) e students-4 (academies). Screenshot routes/cursos__academies/desktop.fold.png e routes/cursos__create/desktop.fold.png: círculo do hero visivelmente borrado (teclado/mãos sem definição).
- **Problema:** Upscale de 2× (4× em tela retina) em fotos que são a prova social da escola: bandas de programa da home, AgeBlocks do JR, hero de todos os 6 cursos CREATE e da Academies. Contradiz DS §10 (fotos com energia, ambiente organizado) e HIG images (nunca esticar bitmap acima do tamanho nativo).
- **Correção sugerida:** Prioridade 1 (decisão do Henrique): reexportar students-1..4 em ≥1200px e rodar `node scripts/optimize-images.mjs` — o pipeline já gera 400/800/1200 automaticamente. Paliativo seguro agora: nos 6 CREATE trocar `imageName="students-1"` por `"marina-roblox"` e em academies `"students-4"` por `"marina-pc"` (2160×3840; o `<image preserveAspectRatio="xMidYMid slice">` no viewBox 600×600 recorta o retrato sem distorcer); em index.tsx:110/135 trocar students-4/2 por marina-digitacao/marina-3d. NÃO aplicar `max-w-[300px]` no hero: o wrapper `h-[440px]` trava a linha do grid e encolher o blob quebra a composição desktop.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: PIL: students-1..4.png = 305x305; só existe optimized/students-N-305.{avif,webp}; getOptimizedUrl (img.tsx:79-81) cai no maior disponível = 305. Renderizado a 440-520px (course-page.tsx:262) e 597x400 na home / 590x440 no JR (JSONs). Crops dos heroes 8-9-anos e academies mostram borrão claro. Rebaixado pra média: no CourseHero a foto é hidden lg:block, então o pai no celular não a vê; obs.: '1440px→597px' no JSON é bug da ferramenta, não a fonte.

<a id="f276"></a>

## F276 · 🟡 Colônia de Férias usa as 4 fotos da aula regular (mesma criança) com alt "Crianças na Colônia"

- **Rotas:** `/cursos/camps`
- **Onde:** [src/components/colonia-photos.tsx:32](../../../../src/components/colonia-photos.tsx#L32)
- **Evidência:** Comparação pixel a pixel (PIL, thumbnail 16×16, crop central): colonia-01 ≈ marina-aula (dist 25), colonia-02 = marina-roblox (0.0), colonia-03 = marina-3d (0.0), colonia-04 = marina-pc (0.0). Screenshot routes/cursos__camps/desktop.fold.png: os 2 quadros do hero mostram a mesma menina (com professor / com miniaturas 3D). colonia-photos.tsx:32 fixa `alt="Crianças na Colônia de Férias da Santos Tech"` para qualquer arquivo. A página promete "Arte", "Recreação", "novos amigos" (cursos.camps.tsx:61-64) sem nenhuma foto de grupo, arte ou recreação.
- **Problema:** Pais que leem a home e depois a colônia veem exatamente as mesmas imagens — perde credibilidade da promessa "Tecnologia, Arte e Recreação" e o alt afirma algo que a foto não mostra (DS §10.1 "pessoas de aulas reais", §11 não prometer o que não entrega).
- **Correção sugerida:** Duas camadas. (1) Agora, em `colonia-photos.tsx:32`: `alt="Aluna da Santos Tech em atividade de tecnologia"` (verdadeiro para as 4 fotos). (2) Pendência para o Henrique: soltar 4–6 fotos reais de edições anteriores da colônia (turma, arte/pintura, recreação) em `src/assets/colonia/` — o loader já é drop-in, sem código. Não usar `students-3`: tem 305×305, ficaria borrada num quadro 4:5 de 292px @2x. Registrar em PENDENCIAS.md como _Aguardando Henrique_.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado por PIL: colonia-02/03/04 = marina-roblox/3d/pc (dist ≤1.0), colonia-01 ≈ marina-aula (15.5); hero-collage.tsx:15-22 usa as mesmas 4 na home. alt fixo em :32 diz 'Crianças' (plural) para foto de 1 aluna; PILARES em cursos.camps.tsx:60-65 promete Arte/Recreação sem foto. Rebaixado a média: são alunos reais (DS §10.1 ok), perda de conversão não demonstrada.

<a id="f277"></a>

## F277 · 🟡 Uma única aluna aparece em 5 dos 9 espaços de foto da home (2 dos 4 quadros do hero, sempre)

- **Rotas:** `/`
- **Onde:** [src/components/hero-collage.tsx:14](../../../../src/components/hero-collage.tsx#L14)
- **Evidência:** POOL (hero-collage.tsx:14-23) alterna marina/students nos índices 0,2,4,6 vs 1,3,5,7; TILES usa `(offset + i*2) % 8`, então a cada ciclo 2 dos 4 quadros são fotos "marina-*" da mesma criança — visível em routes/home/desktop.fold.png (menina no quadro superior direito e inferior direito). Na mesma página: scroll-stage `photo={{name:"marina-roblox"}}` (index.tsx:466), banda Tecnologia Júnior `image: "marina-3d"` (index.tsx:98, repete foto do hero — desktop.seg05.png) e Informática Júnior `marina-digitacao` (index.tsx:123).
- **Problema:** A home parece ter uma única aluna. DS §10.1 pede alunos reais e engajados — pluralidade transmite escola cheia; repetição transmite acervo pobre e enfraquece "329 avaliações".
- **Correção sugerida:** A reordenação proposta não resolve: com 4 fotos marina num pool de 8 e 4 quadros por paridade, sempre aparecem 2. Correto: manter só 2 fotos marina no POOL em índices de paridade diferente (ex.: 0 e 1) e completar com `capa-jr` + 1 foto nova de outro aluno. Em index.tsx:98 trocar `marina-3d` por outra foto.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Marina está nos índices 0,3,4,7 (não 0,2,4,6 como descrito) → offset par mostra 0,4; ímpar 3,7: sempre 2 de 4, confirmado em home/desktop.fold. Mais index.tsx:98,123,466. Depende de fotos reais novas do Henrique. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f278"></a>

## F278 · 🟡 Hero do JR recorta a foto em círculo e mostra só o torso do professor (cabeça fora do quadro)

- **Rotas:** `/cursos/junior`
- **Onde:** [src/routes/cursos.junior.index.tsx:322](../../../../src/routes/cursos.junior.index.tsx#L322)
- **Evidência:** cursos.junior.index.tsx:323-331 usa `<image href={getOptimizedUrl("capa-jr",800)} width=600 height=600 preserveAspectRatio="xMidYMid slice">` sobre uma foto retrato 2160×3840 (professor em pé + criança). O recorte central pega a camiseta "Escola Santos Tech" e o braço; routes/cursos__junior/desktop.fold.png mostra o círculo sem rosto de ninguém. No mobile o círculo nem existe (mobile.fold.png só texto).
- **Problema:** O hero do programa para 5–8 anos — onde o pai decide se "é pra criança pequena" — não mostra criança nenhuma; DS §10.2 "crianças paradas/fotos sem energia" e HIG images (ponto focal preservado no crop).
- **Correção sugerida:** Ajustar o ponto focal do <image> (L322-330): testar preserveAspectRatio="xMidYMin slice" e conferir visualmente se entram rosto do professor e criança; se a composição não ajudar, trocar a foto do blob por uma com criança em primeiro plano (ex.: 'marina-3d', já usada na home). Foto no mobile é opcional (hidden lg:block é escolha de layout).
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: desktop.fold.png: blob (não círculo) mostra só torso/camiseta 'Escola Santos Tech', sem rosto nem criança. slice central em foto retrato confirmado no código L327. Ausência no mobile é intencional (hidden lg:block, L305), não bug. Rebaixado para media.

<a id="f279"></a>

## F279 · 🟡 Logos de ferramentas servidas como PNG bruto de até 3840px para ícones de 14–16px (3,1 MB na pasta)

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`, `/apresentacoes/*`, `/particular/cursos/* (todas as 52)`, `/cursos/create/*`, `/cursos/junior/*`
- **Onde:** [src/components/tool-logo.tsx:4](../../../../src/components/tool-logo.tsx#L4)
- **Evidência:** tool-logo.tsx:4-8 importa `../assets/logos/*.{png,svg,webp,jpg}` com `?url` eager (arquivo cru, sem otimização) e renderiza `<img src={url} alt="" aria-hidden className=...>` (linha 93) sem `loading`, `width`, `height`. Tamanhos reais: suno.png 742 KB, gemini.png 500 KB, python.png 369 KB, deepseek.png 200 KB, javascript.png 137 KB, canva.png 86 KB. Lighthouse /particular/cursos/excel image-delivery: excel.png 960×907 exibido a 40×38 (17 KB desperdiçados), powerbi.png 960×960 a 16×16 (11 KB). Manifest: /particular/cursos/informatica 19–20 imgIssues (`word.png 960px→16px`, `sem-lazy-abaixo-da-fold`), /particular/cursos/ia-visual `suno.png 1000px→14px`, /particular/cursos/office 22–23 issues.
- **Problema:** Cada página de IA baixa ~1 MB de logos para desenhar ícones de 14px; decodificação de PNG 3840² em celular custa CPU e memória. Também gera inconsistência de nitidez (ver achado das logos Google).
- **Correção sugerida:** Script one-off com sharp redimensionando src/assets/logos/*.png para 128px (mantendo alpha, PNG ou WebP) — sem srcset; SVG oficial onde houver. No <img> (tool-logo.tsx:93) adicionar `loading="lazy" decoding="async" width={64} height={64}`.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: glob ?url sem otimização (tool-logo.tsx:4-8); suno.png 742 KB 1000², gemini 500 KB 1280², python 369 KB 3840² para ícones de 14-16px. Peso real em mobile, mas não bloqueia tarefa — média.

<a id="f280"></a>

## F280 · 🟡 favicon.png de 1080×1080 (87 KB) é o favicon E o apple-touch-icon; sem .ico/.svg/180px e invisível em aba escura

- **Rotas:** `todas`
- **Onde:** [src/routes/__root.tsx:137](../../../../src/routes/__root.tsx#L137)
- **Evidência:** __root.tsx:137-138 `{rel:"icon", href:"/favicon.png"}` e `{rel:"apple-touch-icon", href:"/apple-touch-icon.png"}`; ambos os arquivos têm 1080×1080 RGBA, 87 226 bytes (idênticos ao src/assets/logo.png). Lighthouse produção: favicon.png é o 2º maior request em contato.mobile.json (87 742 B), cursos__create__8-9-anos (87 747 B) e particular__cursos__excel (87 745 B). O PNG é leão preto sobre alpha 0 (PIL: canto (255,255,255,0)) — em aba/tema escuro do Chrome/Safari o ícone fica preto sobre preto.
- **Problema:** 87 KB a mais em toda navegação (maior que qualquer foto da página em várias rotas) só para um ícone de 16–32px; apple-touch-icon sem fundo vira quadrado preto no iOS; sem `sizes` o Chrome ainda reamostra 1080px.
- **Correção sugerida:** Gerar `public/favicon-32.png` (32×32), `public/favicon.svg` e `public/apple-touch-icon.png` 180×180 com fundo sólido #04325A ou branco. Em __root.tsx:137-138: `{rel:"icon", type:"image/svg+xml", href:"/favicon.svg"}`, `{rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32.png"}`, `{rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"}`.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: Verificado com PIL: public/favicon.png e apple-touch-icon.png são idênticos (cmp), 1080×1080 RGBA, 87.226 B, com canto alpha 0. __root.tsx:137-138 não declara `sizes`. O arquivo fica em cache depois da 1ª visita, então o custo é pontual. Rebaixei para media.

<a id="f282"></a>

## F282 · 🟡 Cards "Cursos mais populares" em /particular usam fotos stock genéricas (rede neural, código matrix)

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:145](../../../../src/routes/particular.index.tsx#L145)
- **Evidência:** particular.index.tsx:145-154 aponta `img: "/courses/ia.jpg"`, `excel.jpg`, `python.jpg`… (10 JPGs 800×400 em public/courses). routes/particular/mobile.seg08.png: card IA com rede de pontos azul abstrata; desktop.full.png: Excel = foto de planilha de bolsa impressa, Python = tela de código verde estilo "matrix". particular/desktop.json › imgIssues: 3 JPGs 800px renderizados a 358×144 sem srcset.
- **Problema:** DS §10.2 veda "banco de imagem com cara artificial"; os cards não têm relação com as cenas SVG das próprias páginas de destino (Excel + IA mostra planilha escura com assistente; Informática mostra área de trabalho Windows) — quebra a continuidade visual entre lista e página.
- **Correção sugerida:** Trocar img dos POPULARES pela arte da pele de cada curso (miniatura de CourseHeroArt em aspect-[5/2], pointer-events-none, aria-hidden) ou por um SVG próprio por categoria na paleta #0DB88F/#04325A. Depois apagar public/courses/*.jpg sem uso.
- **Esforço:** médio · **Severidade:** Média
- **Verificação:** confirmado: Particular.index.tsx:145-154 usa /courses/*.jpg. Public/courses/python.jpg é uma foto stock de código borrado estilo "matrix", que se encaixa em DESIGN_SYSTEM.md §10.2 "Banco de imagem com cara artificial". Também não tem relação visual com as cenas SVG das páginas de destino.

<a id="f284"></a>

## F284 · 🟡 Home no celular não mostra nenhuma foto no hero (colagem é `hidden lg:block`)

- **Rotas:** `/`
- **Onde:** [src/components/hero-collage.tsx:78](../../../../src/components/hero-collage.tsx#L78)
- **Evidência:** hero-collage.tsx:78 `<div className="relative hidden h-[480px] lg:block">` — invisível abaixo de 1024 px (confirmado em routes/home/mobile.fold.png: sem fotos). Mas cada tile renderiza `<Img ... priority />` (linha 56) → HTML de produção tem 5 `<img loading="eager" fetchPriority="high">`. Lighthouse mobile home network: marina-roblox-800 77 KB, marina-aula-800 48 KB, marina-pc-800 46 KB, marina-3d-800 37 KB + students-1..4 ~44 KB, todos baixados no viewport 412 px.
- **Problema:** Público principal (pais lendo no celular) percorre duas telas sem ver uma criança na escola; a única prova visual inicial é texto. HIG images: imagens acima da dobra em mobile carregam a mensagem quando o texto encolhe.
- **Correção sugerida:** Adicionar no hero mobile uma faixa `flex gap-3 lg:hidden` com 3 fotos (marina-aula, students-3, capa-jr) em `h-28 w-24 rounded-xl border-2 border-primary/25 object-cover`, usando `<Img sizesAttr="96px" />` sem `priority`. Na colagem desktop, tirar `priority` do CrossfadeImage (linha 56) para não baixar 5 fotos eager ocultas no celular.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: hero-collage.tsx:78 `hidden lg:block` e :56 `priority` (eager, baixa mesmo oculto). mobile.seg01.png sem foto. Mas o 'duas telas sem criança' é exagero: a seção seguinte (scroll-stage, mobile.seg02) mostra fotos no celular e saiu vazia por artefato de captura. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f285"></a>

## F285 · 🟡 Alt text contradiz a foto: mesma imagem descrita como "criança de 6 anos" e "adolescente"

- **Rotas:** `/`, `/cursos/junior`
- **Onde:** [src/routes/cursos.junior.index.tsx:546](../../../../src/routes/cursos.junior.index.tsx#L546)
- **Evidência:** students-2 (adolescente de moletom digitando código, students-2-305.webp) recebe `imageAlt="Criança de 6 anos criando jogo no ScratchJr"` (cursos.junior.index.tsx:546) e `imageAlt: "Adolescente na Informática Create"` (index.tsx:136). students-3 (grupo de adolescentes em cadeiras gamer) = "Criança de 7 anos programando no Scratch" (junior:569). capa-jr (professor + menina no PC) = "Criança de 5 anos em atividade de lógica" (junior:523) e "Criança de 5 anos" no hero JR.
- **Problema:** Leitor de tela e Google Imagens recebem descrição falsa; DS §10.3 exige alt descritivo em PT-BR e §11 veda prometer o que não se entrega. Também revela que as fotos do JR são de adolescentes — o programa infantil não tem foto de criança pequena programando.
- **Correção sugerida:** Corrigir alts agora: junior:546 e :569 descrever a foto real ou, melhor, trocar imageName para fotos de criança (marina-3d / marina-digitacao, já usadas na home index.tsx:98,123) com alt fiel. Fotos reais de ScratchJr ficam como pendência.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Vi students-2-305.webp (adolescente digitando código) com alt 'Criança de 6 anos… ScratchJr' (:546) e students-3 (grupo de adolescentes em cadeiras gamer) com 'Criança de 7 anos' (:569). Home index.tsx:136 descreve students-2 como adolescente. Alt falso, WCAG 1.1.1.

<a id="f287"></a>

## F287 · 🟡 Logos do Office desatualizadas (estilo 2013–2018) ao lado de Gmail/Notion/ChatGPT atuais

- **Rotas:** `/particular/cursos/informatica`, `/particular/cursos/office`, `/particular/cursos/excel`, `/particular/cursos/excel-ia`, `/particular/cursos/word`, `/particular/cursos/powerpoint`, `/particular/cursos/excel-power-bi`
- **Onde:** [src/assets/logos/excel.png](../../../../src/assets/logos/excel.png)
- **Evidência:** routes/particular__cursos__informatica/desktop.fold.png (barra de tarefas y≈679): Word/Excel/PowerPoint com o ícone antigo "letra + folha de documento" (W azul, X verde com grade, P laranja) enquanto Gmail usa o M multicolor 2020 e Notion/ChatGPT são atuais. routes/particular__cursos__excel-ia/desktop.fold.png badge do hero: mesmo Excel antigo. Arquivos word.png/excel.png/ppt.png 960×907.
- **Problema:** Ícone de marca de terceiro fora da versão vigente (Microsoft redesenhou em 2019) passa "material datado" — DS §11 "imagens datadas" — justamente nos cursos que vendem "o Excel que o mercado usa hoje".
- **Correção sugerida:** Substituir `src/assets/logos/{excel,word,ppt}.png` pelos ícones Microsoft 365 atuais (Fluent 2019+) em SVG oficial (Microsoft Brand Central / arquivos 'Microsoft Office Excel (2019–present).svg' etc. do Wikimedia Commons — NÃO usar simple-icons: removeu as marcas Microsoft em 2024). Salvar como `excel.svg`, `word.svg`, `ppt.svg` e APAGAR os PNGs (o glob de `tool-logo.tsx` resolve por basename; dois arquivos com o mesmo nome dão colisão). Sem mudança de código; conferir `bun run build` e o hero de /particular/cursos/excel-ia.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Confirmado: word.png/excel.png/ppt.png (960×907) são o ícone 2013–2018 (letra + aba de documento); visível em particular__cursos__informatica/desktop.fold.png (barra y≈679) ao lado do Gmail M 2020 e no badge do hero de excel-ia. Correção de referência: 'imagens datadas' é DS §10.2, não §11.

<a id="f289"></a>

## F289 · 🟡 Decoração binária "01001/10110" sobrepõe texto no hero da home e na legenda de /cursos

- **Rotas:** `/`, `/cursos`
- **Onde:** [src/components/decorative-elements.tsx:68](../../../../src/components/decorative-elements.tsx#L68)
- **Evidência:** decorative-elements.tsx:68 `<Binary style={{ bottom: "14%", left: "38%" }} …>` na variant `default`, usada em index.tsx:390 e cursos.index.tsx:238. routes/home/desktop.fold.png (x≈548, y≈800): "01001 10110" encosta no fim de "329 avaliações de pais e alunos". routes/cursos/desktop.full.png (y≈280): o binário fica em cima da legenda "CRIANÇAS · 5–9 ANOS".
- **Problema:** Elemento decorativo compete com a prova social e com a legenda de cores — DS §11 "poluição visual" e HIG (ornamento nunca sobre conteúdo). Em 1440px o texto ainda é legível; em 1280px o overlap aumenta.
- **Correção sugerida:** Remover o <Binary> da variant default (l.68) ou tirá-lo da coluna de texto com style={{ top: "30%", right: "3%" }}. Em /cursos (layout centralizado), nada decorativo deve ficar entre left 30% e 70% abaixo do título.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: routes/cursos/desktop.fold.png: "01001/10110" fica em cima de "CRIANÇAS · 5–9 ANOS", que é a legenda de cores. routes/home/desktop.fold.png: o binário cola no fim de "329 avaliações de pais e alunos". Decoração em cima de conteúdo (DS §11, poluição visual).

<a id="f324"></a>

## F324 · 🟡 `<Img>` sem `sizes` faz o srcset escolher 100vw — logo de 48 px baixa candidato de 1440 px

- **Rotas:** `/`, `/cursos/*`, `/particular`, `/particular/cursos/*`, `/links`, `/contato`, `/sobre`, `todas`
- **Onde:** [src/components/img.tsx:21](../../../../src/components/img.tsx#L21)
- **Evidência:** img.tsx:59-60 emite `srcSet` com todos os tamanhos e `sizes={sizesAttr}` — `sizesAttr` é opcional e 10 dos 15 usos não passam (site-header.tsx:91 logo, hero-collage.tsx:56, index.tsx:225 cards de programa, particular.tsx:349/589, links.tsx:60). Sem `sizes` o navegador assume 100vw. Manifest home desktop.json › dom.imgIssues: `logo-192.avif superdimensionada 1439px→48px`, `marina-3d-1200 1440px→597px` ×4 cards; mobile: `logo 390px→28px` em /particular, /contato, /links, /cursos/camps. Lighthouse home: `uses-responsive-images` marina-3d-800 para 380 px (24 KiB) e `image-delivery` marina-roblox 674×1422 para 254×452 (67 KiB).
- **Problema:** O pipeline AVIF/WebP existe, mas o `sizes` ausente anula o ganho: o navegador baixa a maior variante em quase todas as fotos e no logo que aparece em todas as páginas.
- **Correção sugerida:** Passar `sizesAttr` onde falta: index.tsx:225 `sizesAttr="(min-width:1024px) 600px, 100vw"`, hero-collage.tsx:56 `sizesAttr="260px"`, sobre.index.tsx:96 e cursos.junior.index.tsx:100 com a largura real; logos com `sizesAttr="48px"`/`"28px"`. Depois tornar `sizesAttr` obrigatório no tipo para o tsc barrar esquecimentos.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação) · **Também apontado como:** F298
- **Verificação:** parcial: Confirmado: img.tsx:21 `sizesAttr?` opcional; 9 usos sem sizes (site-header:91, hero-collage:56, index:225...). O logo tem só a variante 192px, então o custo é mínimo ('1439px' é o slot do sizes, não o download). A perda real está nas fotos do desktop (marina-*-1200 exibidas a ~250px, home/desktop.json). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f288"></a>

## F288 · ⚪ Logos do Google (79–92px) ficam borradas a 36–48px @2x ao lado de logos de 1280–3840px

- **Rotas:** `/particular/cursos/informatica`, `/particular/cursos/copywriting`, `/particular/cursos/office`, `/particular/cursos/chatgpt`, `/particular/cursos/excel-ia`
- **Onde:** [src/assets/logos/gmail.png](../../../../src/assets/logos/gmail.png)
- **Evidência:** PIL: gmail.png 86×85, docs.png 86×85, drive.png 86×85, sheets.png 86×85, slides.png 86×85, forms.png 79×79, meet.png 82×82, calendar.png 92×91. particular__cursos__informatica/desktop.json › imgIssues: gmail.png renderizada a 36×36 e 48×48 (≥72–96 px físicos em DPR 2). copywriting: docs.png a 48×48 no badge do hero (course-hero-art.tsx:52 `h-10 w-10 sm:h-12 sm:w-12`). A pasta mistura png/svg/webp e escalas de 79 px a 3840 px.
- **Problema:** No mesmo grid, uns logos ficam nítidos e outros pixelados — inconsistência visível no badge flutuante do hero (o elemento mais destacado da arte) do curso de Copywriting.
- **Correção sugerida:** Não converter a pasta inteira. Trocar só os 10 rasters abaixo de 128px (gmail, docs, drive, sheets, slides, forms, meet, calendar, maps, earth — todos 79–92px) por SVG ou PNG ≥256px dos ícones oficiais Google Workspace/Maps, mantendo os mesmos basenames. Guarda opcional: `scripts/check-logos.mjs` com sharp (já é dependência) que falha se qualquer png/webp/jpg em `src/assets/logos` tiver lado < 144px (48px @3x), chamado em `optimize:images`; não acoplar ao `lint`.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Fontes pequenas confirmadas (gmail 86×85, docs 86×85, forms 79). Mas desktop.json mostra gmail a 24×24 e 36×36 (não 36/48); o 48×48 é docs.png no copywriting (course-hero-art.tsx:52). A 36px@2x cabe nos 86px; só 48px@2x (96px) ou DPR3 ampliam. Screenshots são DPR1 — sem borrado visível. Inconsistência de escala real, impacto pequeno. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f291"></a>

## F291 · ⚪ OG images de 65 páginas são só ícone lucide + título no mesmo fundo; nenhuma mostra aluno ou escola

- **Rotas:** `/cursos/create/*`, `/cursos/junior/*`, `/cursos/camps`, `/cursos/academies`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [scripts/generate-og-images.mjs:241](../../../../scripts/generate-og-images.mjs#L241)
- **Evidência:** generate-og-images.mjs:241-290 `buildCourseSvg` compõe gradiente + `iconNode` (lucide `__iconNode`) em círculo à direita + título. public/og/infantil/create-8-9-anos.png: controle de videogame outline; public/og/particular/excel.png: grade de tabela; informatica.png: monitor+celular — mesmo layout, mesma paleta azul, ícone monocromático. og-image.png (home) também sem foto.
- **Problema:** No WhatsApp a prévia de um curso infantil é indistinguível da de um curso adulto e não carrega a promessa da marca (DS §10.1 "crianças engajadas, tecnologia em uso"); legível, mas genérico.
- **Correção sugerida:** Dividir em duas fases. Fase 1 (pequeno, sem decisão de marca): no `generate-og-images.mjs`, criar `const PARTICULAR_THEMES = { 'IA': {bgDark:'#120d1f', bgLight:'#8B5CF6', accent:'#E879F9'}, 'Office …': {bgDark:'#0d1712', bgLight:'#21A366', accent:'#9BE7C1'}, 'Marketing': {bgDark:'#170c10', bgLight:'#E5484D', accent:'#FFC53D'}, … }` copiando exatamente as 8 `*_THEME` de `course-skins/*.tsx` (não dá pra importar TSX no .mjs; comentar a origem) e escolher por `course.tag` (a categoria já é lida em l.131), com fallback `PARTICULAR_THEME`. Fase 2 (médio, DEPOIS do Henrique aprovar): para `PROGRAM_THEME` compor foto real à direita via `sharp(src/assets/optimized/marina-roblox-800.avif).resize(420,420).composite([{input: <svg circle mask>, blend:'dest-in'}])` e sobrepor em x≈760. Perguntar antes: usar foto de aluna menor de idade em prévia que circula fora do site é decisão de imagem/marca dele.
- **Esforço:** médio · **Severidade:** Baixa
- **Verificação:** confirmado: buildCourseSvg (l.241–290) compõe gradiente + ícone lucide monocromático + título; conferido visualmente em excel.png, create-8-9-anos.png e og-image.png (home): mesmo layout azul, nenhuma foto. Infantil e adulto diferem só pelo chip e pela cor do ícone. Contradiz DS §10.1, mas é legível e funcional — polimento, não bug.

<a id="f293"></a>

## F293 · ⚪ Foto da impressora 3D (5,8 MB + 6 derivados) não é usada; claim "Impressões 3D inclusas" fica sem prova

- **Rotas:** `/`, `/particular/cursos/impressao-3d`, `/cursos/camps`
- **Onde:** [src/assets/impressora-3d.png:155](../../../../src/assets/impressora-3d.png#L155)
- **Evidência:** `grep -rn "impressora-3d" src` (excluindo manifest) não retorna nenhum uso, mas src/assets/impressora-3d.png (2160×3840, 5 847 545 B) e optimized/impressora-3d-{400,800,1200}.{avif,webp} existem (foto real da Bambu Lab imprimindo — impressora-3d-400.webp). index.tsx:155 "Impressões 3D inclusas — o filamento e as impressões entram no material" e :68 "impressora 3D" são só texto; /particular/cursos/impressao-3d usa cena SVG (routes/particular__cursos__impressao-3d/desktop.fold.png).
- **Problema:** Asset pesado versionado sem uso (peso no repo/clone) enquanto o diferencial mais tangível da escola — objeto impresso que vai para casa — não tem foto na home nem no curso de impressão 3D.
- **Correção sugerida:** Usar `<Img name="impressora-3d" alt="Impressora 3D da Santos Tech imprimindo um projeto de aluno" />` na seção de material/"leva o que cria" da home ou em /particular/cursos/impressao-3d; se não houver lugar, remover o PNG de 5,8 MB e os 6 derivados em src/assets/optimized.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: grep "impressora-3d" em src (sem manifest) = zero usos; src/assets/impressora-3d.png tem 5.847.545 B + 6 derivados avif/webp. Claim textual em index.tsx sem foto de prova.

<a id="f294"></a>

## F294 · ⚪ /links: 4 imagens PNG de 1080–1200px servidas a 328px (173px no mobile) sem srcset/WebP

- **Rotas:** `/links`
- **Onde:** [src/routes/links.tsx:140](../../../../src/routes/links.tsx#L140)
- **Evidência:** links/desktop.json › dom.imgIssues: 4 itens "alt-vazio, superdimensionada 1080px→328px" / "1200px→328px"; mobile.json: 1080px→173px. links.tsx:140-146 `<img src={item.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" loading={index < 2 ? "eager" : "lazy"}>` — URL vinda da API (src "30/d7a125819b1e961b.png"). routes/links/mobile.full.png: cards 2 colunas com fotos pequenas.
- **Problema:** Página feita para o link da bio no Instagram (celular, rede móvel) baixa ~4 PNGs full-size para miniaturas de 173px; a primeira delas é LCP.
- **Correção sugerida:** Se o backend de upload suportar, pedir variante `?w=400&fmt=webp` e usar `srcSet`/`sizes="(min-width:768px) 328px, 45vw"`. Sem suporte, registrar em PENDENCIAS como dependência de backend.
- **Esforço:** médio · **Severidade:** Baixa
- **Verificação:** confirmado: links.tsx:140-146 usa <img src={item.imageUrl}> sem srcset. O mobile.json mostra imagens de 1080px exibidas a 173px. Depende da API externa, por isso o esforço real é médio.

<a id="f295"></a>

## F295 · ⚪ Fotos da colônia usam <img> cru: 1200×2133 sem srcset, sem lazy e fora do pipeline <Img>

- **Rotas:** `/cursos/camps`
- **Onde:** [src/components/colonia-photos.tsx:29](../../../../src/components/colonia-photos.tsx#L29)
- **Evidência:** colonia-photos.tsx:28-36 renderiza `<img src={l.src} alt=… className="absolute inset-0 h-full w-full object-cover">` sem `loading`, `sizes` ou `srcSet`; colonia-photos.ts:11 importa `./colonia/*.{jpg,...}` com `?url`. cursos__camps/desktop.json: colonia-01/03 1200px→292×361; mobile.json: colonia-02/04 1200px→174×215 + "sem-lazy-abaixo-da-fold" (no mobile ficam abaixo do texto, routes/cursos__camps/mobile.fold.png só texto).
- **Problema:** Quatro fotos de ~100 KB cada carregam eager para quadros de 174px no celular, duplicando o que já existe otimizado em `optimized/marina-*-400.avif` (são as mesmas fotos).
- **Correção sugerida:** Ganho rápido seguro em `colonia-photos.tsx:29-34`: `loading={i === 0 ? "lazy" : undefined} decoding="async"` (só a camada base; camadas de crossfade continuam eager, senão a transição pode entrar vazia). NÃO trocar por `<Img name="marina-*">`: quebra o fluxo 'solta foto na pasta' documentado em `assets/colonia-photos.ts` e as fotos vão mudar (F276). Quando as fotos reais entrarem, estender `scripts/optimize-images.mjs` para ler `src/assets/colonia/*` e gerar `optimized/colonia-NN-{400,800,1200}` e aí usar `<Img>` com `sizesAttr="(min-width:1024px) 300px, 45vw"`.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado: <img> em :29-34 sem loading/srcSet/sizes; colonia-photos.ts:10-14 importa via ?url (fora do <Img> de img.tsx). cursos__camps/mobile.json: colonia-02/04 1200px→174×215 + sem-lazy-abaixo-da-fold; arquivos 77–141 KB. Fotos idênticas já existem em optimized/marina-*-400.avif. Linha correta é 29 (não 28).

<a id="f296"></a>

## F296 · ⚪ /sobre: única foto da página é retrato dominado pela nuca do professor, rosto da criança escondido

- **Rotas:** `/sobre`
- **Onde:** [src/routes/sobre.index.tsx:96](../../../../src/routes/sobre.index.tsx#L96)
- **Evidência:** sobre.index.tsx:96 `<Img name="marina-aula" alt="Aula presencial na Santos Tech" className="rounded-3xl shadow-xl" />` sem `object-cover`/aspect nem `sizesAttr`; sobre/desktop.json › imgIssues: renderizada a 584×1038 (1440px baixados). routes/sobre/desktop.fold.png (y≥580): cabeça e ombro do professor ocupam ~45% do quadro, menina aparece só pelo cabelo no canto inferior esquerdo.
- **Problema:** Página "quem somos" mostra uma foto de 1038px de altura sem ponto focal em criança ou professor de frente — contraria DS §10.1 ("engajados", "criatividade e descoberta") e §10.3 (`object-cover`, raio, polaroid).
- **Correção sugerida:** `<Img name="marina-aula" alt="Aluna criando no Roblox com o professor na Santos Tech" className="aspect-[4/5] w-full rounded-3xl border-4 border-white object-cover object-[50%_60%] shadow-xl" sizesAttr="(min-width:1024px) 560px, 100vw" />`. Trocar por capa-jr só se o Henrique preferir.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: routes/sobre/desktop.fold.png: nuca do professor domina o quadro e o retrato ocupa 1038px. A foto é real e mostra tecnologia em uso (DS §10.1). O problema de fato é a falta de aspect/object-cover (DS §10.3) e o alt genérico. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f335"></a>

## F335 · ⚪ /particular: logo da barra superior com `loading="lazy"` acima da dobra e `width/height` incoerentes com a classe

- **Rotas:** `/particular`, `/particular/cursos/* (52)`
- **Onde:** [src/routes/particular.tsx:589](../../../../src/routes/particular.tsx#L589)
- **Evidência:** HTML de produção de /particular/cursos/excel: `<img src="/assets/logo-192-….webp" loading="lazy" decoding="async" width="192" height="192" class="h-8 w-8 shrink-0">` e um segundo `width="28" height="28" class="h-7 w-7"` (particular.tsx:349-350 e :589) — nenhum passa `priority` nem `sizesAttr`. Manifest /particular mobile.json › imgIssues `logo-192.avif 390px→28px`.
- **Problema:** O logo é o primeiro elemento visível da página (LCP candidato) e chega com prioridade baixa; sem `sizes` baixa a variante de 390 px para 28 px.
- **Correção sugerida:** Topbar mobile :589: `<Img name="logo" alt="Santos Tech" width={28} height={28} sizesAttr="28px" priority className="h-7 w-7 shrink-0" />`.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: A sidebar (particular.tsx:349-354) já passa `sizesAttr="40px"`, então a evidência erra. Só o topbar (:589) está sem sizes/priority. Um logo de 28px dificilmente é o LCP, então é ganho pequeno de bytes. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._
