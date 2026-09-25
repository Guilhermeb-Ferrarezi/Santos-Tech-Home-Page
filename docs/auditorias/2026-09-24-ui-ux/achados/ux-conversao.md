# UX, navegação e conversão — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#65) · nota da dimensão **5/10** · **61 achados** (🔴 0 · 🟠 9 · 🟡 32 · ⚪ 20)

O site tem conteúdo bom e bastante coisa para mostrar, mas **atrapalha quem quer comprar**. Ele é fácil de ler e difícil de levar alguém até a matrícula.

- **Público adulto escondido.** Nem o menu, nem o rodapé, nem a home levam a `/particular`, e de lá não há caminho de volta. O pai que também quer um curso de Excel para ele mesmo nunca descobre que a escola oferece. É venda cruzada perdida.
- **Catálogo que não fecha.** Os programas mudam de nome e de faixa de idade entre as páginas (JR, CREATE, Academies), e há páginas de curso que nenhum link alcança. O pai fica confuso e a escola perde credibilidade.
- **Botão de contato que some ou não explica nada.** As páginas de curso passam de 10 a 12 telas de celular sem nenhum botão de contato. Quando aparece, o texto é genérico ("Quero saber mais") e muda de página para página. O resultado é menos conversas no WhatsApp, e conversas que chegam sem contexto.
- **Informação que decide a compra aparece tarde ou não aparece.** Preço, custo total, endereço, horário e prova social ficam ausentes ou muito para baixo da página. Quem precisa dessas respostas para decidir sai do site para perguntar, ou desiste.
- **Promessas que não se sustentam.** A home fala em robótica e o FAQ desmente. Os números de avaliações não batem entre páginas e o e-mail de contato é de outro domínio. Cada contradição dessas custa confiança.
- **Barreiras no primeiro contato.** O banner de cookies cobre quase metade da tela, o preloader trava a home e os menus do topo só abrem com o mouse passando por cima. Isso atrapalha quem usa tablet ou teclado.

**Recomendação:** primeiro os ajustes rápidos (menu, botão de contato fixo, textos), depois alinhar o catálogo.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F175`](#f175) | 🟠 | /particular não tem nenhuma entrada no header, footer ou home — público adulto órfão | `/`, `/sobre` +18 | [src/components/site-header.tsx:22](../../../../src/components/site-header.tsx#L22) | pequeno |
| [`F177`](#f177) | 🟠 | Dropdowns do header abrem só por hover — teclado e touch em tablet não alcançam os itens | `todas (header desktop ≥768px)` | [src/components/site-header.tsx:405](../../../../src/components/site-header.tsx#L405) | pequeno |
| [`F181`](#f181) | 🟠 | Home promete 'robôs' e 'Robótica' no hero, mas o FAQ diz que a escola não trabalha com robótica | `/` | [src/routes/index.tsx:413](../../../../src/routes/index.tsx#L413) | trivial |
| [`F188`](#f188) | 🟠 | Banner de cookies: aceitar em 1 clique, recusar em 2 — e o card cobre ~40% da tela no celular | `todas`, `/` | [src/components/cookie-consent.tsx:294](../../../../src/components/cookie-consent.tsx#L294) | trivial |
| [`F197`](#f197) | 🟠 | /cursos e header vendem 4 produtos que não batem com os programas reais (idades e nomes) | `/cursos`, `/cursos/junior`, `/cursos/create` | [src/routes/cursos.index.tsx:62](../../../../src/routes/cursos.index.tsx#L62) | médio |
| [`F216`](#f216) | 🟠 | Sem CTA persistente: 10 telas mobile seguidas sem nenhum botão de contato nas páginas de curso | `/particular/cursos/*` | [src/routes/__root.tsx:200](../../../../src/routes/__root.tsx#L200) | trivial |
| [`F217`](#f217) | 🟠 | FAQ "Quanto custa?" manda pro WhatsApp na mesma página que mostra o preço | `/particular`, `/particular/cursos/*` | [src/components/particular-faq-items.ts:36](../../../../src/components/particular-faq-items.ts#L36) | pequeno |
| [`F218`](#f218) | 🟠 | Chips de categoria da landing levam a UM curso, não à lista da área | `/particular` | [src/routes/particular.index.tsx:274](../../../../src/routes/particular.index.tsx#L274) | médio |
| [`F299`](#f299) | 🟠 | 11 páginas de programa/curso infantil não têm nenhum link a partir da home, header, footer ou /cursos | `/`, `/cursos` +5 | [src/components/site-header.tsx:23](../../../../src/components/site-header.tsx#L23) | pequeno |
| [`F176`](#f176) | 🟡 | 'Entrar' é o único botão do header; não existe CTA de conversão no topo nem no menu mobile | `todas (header)` | [src/components/site-header.tsx:269](../../../../src/components/site-header.tsx#L269) | pequeno |
| [`F178`](#f178) | 🟡 | Footer sem endereço, horário, WhatsApp nem navegação — só copyright e 3 links | `todas (footer)` | [src/components/site-footer.tsx:83](../../../../src/components/site-footer.tsx#L83) | pequeno |
| [`F179`](#f179) | 🟡 | Home não linka para nenhuma página de programa: as 4 faixas só têm 'Quero saber mais' → WhatsApp | `/` | [src/routes/index.tsx:261](../../../../src/routes/index.tsx#L261) | pequeno |
| [`F180`](#f180) | 🟡 | 6 dos 11 CTAs da home são 'Quero saber mais' idênticos, todos com a mesma mensagem genérica de WhatsApp | `/`, `/sobre` +11 | [src/lib/whatsapp.ts:36](../../../../src/lib/whatsapp.ts#L36) | pequeno |
| [`F182`](#f182) | 🟡 | Números-chave divergem entre páginas: 329 vs 325 avaliações, '5 aos 14' vs '5–15', horário de sábado | `/`, `/contato` +2 | [src/routes/index.tsx:468](../../../../src/routes/index.tsx#L468) | pequeno |
| [`F183`](#f183) | 🟡 | E-mail de contato em outro domínio (ceo@santos-games.com) mina a confiança | `/contato` | [src/routes/contato.tsx:82](../../../../src/routes/contato.tsx#L82) | trivial |
| [`F189`](#f189) | 🟡 | Prova social fala com pais, mas 8 dos 9 depoimentos são de alunos adultos e as citações são cortadas | `/` | [src/components/testimonials.tsx:97](../../../../src/components/testimonials.tsx#L97) | médio |
| [`F190`](#f190) | 🟡 | Preloader full-screen bloqueia a home por ~1,5s toda vez que ela monta, inclusive ao voltar | `/` | [src/components/preloader.tsx:27](../../../../src/components/preloader.tsx#L27) | trivial |
| [`F192`](#f192) | 🟡 | Home mobile tem 24 mil px; preço e 'como matricular' só depois de ~9 telas e duas seções com scroll travado | `/` | [src/routes/index.tsx:458](../../../../src/routes/index.tsx#L458) | pequeno |
| [`F198`](#f198) | 🟡 | Cards de /cursos pulam a página do programa: 4 CTAs iguais 'Quero saber mais' direto ao WhatsApp | `/cursos` | [src/routes/cursos.index.tsx:131](../../../../src/routes/cursos.index.tsx#L131) | pequeno |
| [`F199`](#f199) | 🟡 | Preço ausente em todas as sales pages e na Academies; só a Colônia mostra valor | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +8 | [src/routes/cursos.create.8-9-anos.tsx:214](../../../../src/routes/cursos.create.8-9-anos.tsx#L214) | pequeno |
| [`F200`](#f200) | 🟡 | Sales page tem ~12 telas de celular sem nenhum CTA entre o hero e o card final | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +7 | [src/components/course-page.tsx:561](../../../../src/components/course-page.tsx#L561) | pequeno |
| [`F201`](#f201) | 🟡 | Onde fica e quais horários? Sales pages e footer não informam endereço, mapa nem turnos | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +8 | [src/components/course-page.tsx:436](../../../../src/components/course-page.tsx#L436) | pequeno |
| [`F202`](#f202) | 🟡 | Oferta do CTA primário muda por programa: visita guiada, aula experimental, 'Conhecer', 'Garantir a vaga' | `/cursos`, `/cursos/junior` +9 | [src/routes/cursos.junior.index.tsx:278](../../../../src/routes/cursos.junior.index.tsx#L278) | pequeno |
| [`F203`](#f203) | 🟡 | 'Conhecer as Academies' é botão de WhatsApp com rótulo de navegação | `/cursos/academies` | [src/routes/cursos.academies.tsx:284](../../../../src/routes/cursos.academies.tsx#L284) | trivial |
| [`F204`](#f204) | 🟡 | Nome do curso muda entre páginas: CREATE1 no overview, 'CREATE Ano 1' na sales page | `/cursos/create`, `/cursos/create/8-9-anos` +5 | [src/routes/cursos.create.8-9-anos.tsx:242](../../../../src/routes/cursos.create.8-9-anos.tsx#L242) | pequeno |
| [`F205`](#f205) | 🟡 | JR3 promete 'Faixa Branca do CREATE', um sistema que não existe nas páginas CREATE | `/cursos/junior`, `/cursos/junior/7-8-anos`, `/cursos/create/8-9-anos` | [src/routes/cursos.junior.7-8-anos.tsx:234](../../../../src/routes/cursos.junior.7-8-anos.tsx#L234) | trivial |
| [`F206`](#f206) | 🟡 | Sem navegação entre cursos irmãos (anterior/próximo); FAQ cita o Ano 2 sem link | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +7 | [src/components/course-page.tsx:966](../../../../src/components/course-page.tsx#L966) | pequeno |
| [`F207`](#f207) | 🟡 | Nenhuma prova social nas sales pages e overviews de programa | `/cursos/junior`, `/cursos/create` +4 | [src/components/course-page.tsx:832](../../../../src/components/course-page.tsx#L832) | médio |
| [`F208`](#f208) | 🟡 | Colônia: 'período integral' sem horário, sem datas da próxima edição e sem dizer se inclui refeição | `/cursos/camps` | [src/routes/cursos.camps.tsx:46](../../../../src/routes/cursos.camps.tsx#L46) | pequeno |
| [`F209`](#f209) | 🟡 | Trilha Pixel promete 5 conquistas e 'Pixel Iniciante', mas exibe 4 insígnias | `/cursos/create/8-9-anos` | [src/routes/cursos.create.8-9-anos.tsx:350](../../../../src/routes/cursos.create.8-9-anos.tsx#L350) | trivial |
| [`F215`](#f215) | 🟡 | Hierarquia de CTA invertida: "Entrar na conta"/"Login" é o botão mais forte, WhatsApp é item cinza | `/particular`, `/particular/cursos/*` | [src/routes/particular.tsx:568](../../../../src/routes/particular.tsx#L568) | pequeno |
| [`F219`](#f219) | 🟡 | Sem caminho de volta ao site principal nem links legais: logo não é link e não há header/footer global | `/particular`, `/particular/cursos/*` | [src/routes/particular.tsx:349](../../../../src/routes/particular.tsx#L349) | pequeno |
| [`F220`](#f220) | 🟡 | Prova social sem verificação: nota Google sem link, stat duplicado e zero depoimentos em toda a área particular | `/particular`, `/particular/cursos/*` | [src/routes/particular.index.tsx:216](../../../../src/routes/particular.index.tsx#L216) | pequeno |
| [`F221`](#f221) | 🟡 | Custo total do curso nunca aparece: matrícula e material ficam em card separado do preço | `/particular/cursos/*` | [src/components/course-skins/common.tsx:249](../../../../src/components/course-skins/common.tsx#L249) | pequeno |
| [`F222`](#f222) | 🟡 | Fold das páginas de curso não mostra preço nem duração em várias peles; informação varia por pele | `/particular/cursos/excel`, `/particular/cursos/word` +7 | [src/components/course-skins/planilha.tsx:186](../../../../src/components/course-skins/planilha.tsx#L186) | pequeno |
| [`F224`](#f224) | 🟡 | Jargão de curadoria interna vaza no hero: "Office Específico", "Office + IA" | `/particular/cursos/excel`, `/particular/cursos/word` +4 | [src/routes/particular.cursos.excel.tsx:19](../../../../src/routes/particular.cursos.excel.tsx#L19) | trivial |
| [`F225`](#f225) | 🟡 | CTA da pele IA imita uma caixa de chat: parece campo para digitar, mas é um link | `/particular/cursos/ia`, `/particular/cursos/agentes-ia` +4 | [src/components/course-skins/ia.tsx:73](../../../../src/components/course-skins/ia.tsx#L73) | pequeno |
| [`F227`](#f227) | 🟡 | Rodapé das 52 páginas de curso é só o "©": sem telefone, endereço, horário ou e-mail | `/particular/cursos/*` | [src/components/course-skins/common.tsx:372](../../../../src/components/course-skins/common.tsx#L372) | pequeno |
| [`F229`](#f229) | 🟡 | Landing não menciona certificado, reagendamento e aula online — diferenciais que só aparecem dentro dos cursos | `/particular` | [src/routes/particular.index.tsx:94](../../../../src/routes/particular.index.tsx#L94) | pequeno |
| [`X01`](#x01) | 🟡 | Botão principal do hero some da 1ª tela em notebooks 1280/1366 e celulares 360×640 | `/`, `/cursos/camps` +10 | [src/hooks/use-reveal.ts:37](../../../../src/hooks/use-reveal.ts#L37) | pequeno |
| [`X03`](#x03) | 🟡 | Endereço, WhatsApp e Instagram em texto morto na home e no /particular (sem toque) | `/`, `/particular` | [src/routes/index.tsx:1124](../../../../src/routes/index.tsx#L1124) | pequeno |
| [`F184`](#f184) | ⚪ | /contato: primeira tela sem CTA e página sem formulário — só WhatsApp/e-mail após rolar | `/contato` | [src/routes/contato.tsx:44](../../../../src/routes/contato.tsx#L44) | pequeno |
| [`F185`](#f185) | ⚪ | Mesmo CTA de WhatsApp muda de nome em cada página: 'Agendar visita', 'Agendar agora', 'Começar pelo WhatsApp' | `/`, `/sobre` +2 | [src/routes/contato.tsx:122](../../../../src/routes/contato.tsx#L122) | trivial |
| [`F187`](#f187) | ⚪ | Página 404 só oferece 'Voltar ao início' e mantém o título da home na aba | `/pagina-que-nao-existe-404` | [src/routes/__root.tsx:33](../../../../src/routes/__root.tsx#L33) | pequeno |
| [`F191`](#f191) | ⚪ | Dois elementos verdes pulsando na primeira tela mobile: CTA do hero e FAB do WhatsApp | `/` | [src/routes/index.tsx:424](../../../../src/routes/index.tsx#L424) | trivial |
| [`F193`](#f193) | ⚪ | /links abre todo card em nova aba, inclusive links internos do próprio site | `/links` | [src/routes/links.tsx:112](../../../../src/routes/links.tsx#L112) | trivial |
| [`F194`](#f194) | ⚪ | Cards de preço: mesmo valor nos dois, diferença real (material) escondida e CTA que não diz o próximo passo | `/` | [src/routes/index.tsx:731](../../../../src/routes/index.tsx#L731) | pequeno |
| [`F195`](#f195) | ⚪ | Menu mobile exige 3 toques para chegar a qualquer programa e não oferece WhatsApp | `todas (header mobile)` | [src/components/site-header.tsx:45](../../../../src/components/site-header.tsx#L45) | pequeno |
| [`F196`](#f196) | ⚪ | Painéis 'Sobre nós' e 'Nossa visão' repetem a home e não puxam para programas/particular | `/sobre`, `/sobre/visao` | [src/routes/sobre.index.tsx:134](../../../../src/routes/sobre.index.tsx#L134) | pequeno |
| [`F210`](#f210) | ⚪ | Card 'Não sabe por qual começar?' em /cursos é beco sem saída, sem link nem CTA | `/cursos` | [src/routes/cursos.index.tsx:292](../../../../src/routes/cursos.index.tsx#L292) | trivial |
| [`F211`](#f211) | ⚪ | Breadcrumb do curso tem alvo de 16px, contraste reduzido e não leva a 'Programas' | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +7 | [src/components/course-page.tsx:207](../../../../src/components/course-page.tsx#L207) | trivial |
| [`F212`](#f212) | ⚪ | FAQ das sales pages usa siglas internas (JR, JR3, CREATE Ano 1) como se o pai já conhecesse | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +4 | [src/routes/cursos.create.8-9-anos.tsx:186](../../../../src/routes/cursos.create.8-9-anos.tsx#L186) | pequeno |
| [`F213`](#f213) | ⚪ | Academies alterna 'Robotics Academy / AI Academy' na UI com 'Academia de Robótica / IA' no título e no schema | `/cursos/academies` | [src/routes/cursos.academies.tsx:89](../../../../src/routes/cursos.academies.tsx#L89) | pequeno |
| [`F223`](#f223) | ⚪ | Nome do curso muda entre sidebar, H1, card de preço e CTA | `/particular/cursos/ia`, `/particular/cursos/revit` +7 | [src/routes/particular.tsx:28](../../../../src/routes/particular.tsx#L28) | médio |
| [`F226`](#f226) | ⚪ | Páginas de curso sem breadcrumb ou "voltar": a etiqueta de área é decorativa | `/particular/cursos/*` | [src/routes/particular.tsx:589](../../../../src/routes/particular.tsx#L589) | pequeno |
| [`F228`](#f228) | ⚪ | Três rótulos diferentes para o mesmo destino e nenhum diz que abre o WhatsApp; padrão da marca (aula experimental) não é oferecido | `/particular`, `/particular/cursos/*` | [src/components/course-skins/common.tsx:271](../../../../src/components/course-skins/common.tsx#L271) | trivial |
| [`F230`](#f230) | ⚪ | Links internos da landing usam <a href> e recarregam a SPA inteira | `/particular` | [src/routes/particular.index.tsx:272](../../../../src/routes/particular.index.tsx#L272) | trivial |
| [`F231`](#f231) | ⚪ | Cards "Cursos mais populares" mostram "~3 meses" sem dizer que é ritmo intensivo, sem preço e sem prova de popularidade | `/particular` | [src/routes/particular.index.tsx:505](../../../../src/routes/particular.index.tsx#L505) | trivial |
| [`F232`](#f232) | ⚪ | Marca aparece duas vezes na primeira tela mobile da landing antes do H1 | `/particular` | [src/routes/particular.index.tsx:176](../../../../src/routes/particular.index.tsx#L176) | trivial |
| [`F316`](#f316) | ⚪ | Peles das páginas /particular imitam chrome de software (barras, status, toolbar) que parece clicável e rouba o fold mobile | `/particular/cursos/*` | [src/components/course-skins/design.tsx:209](../../../../src/components/course-skins/design.tsx#L209) | trivial |
| [`F320`](#f320) | ⚪ | Mock do Portal do Aluno exibe dados fictícios (9,4 · 96% · 72%) com aviso de 11px | `/` | [src/routes/index.tsx:872](../../../../src/routes/index.tsx#L872) | trivial |

<a id="f175"></a>

## F175 · 🟠 /particular não tem nenhuma entrada no header, footer ou home — público adulto órfão

- **Rotas:** `/`, `/sobre`, `/contato`, `todas (header/footer)`, `todas (header)`, `/cursos/junior`, `/cursos/create`, `/cursos/academies`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos`, `/particular`, `/particular/cursos/*`
- **Onde:** [src/components/site-header.tsx:22](../../../../src/components/site-header.tsx#L22)
- **Evidência:** site-header.tsx:23-24 → 'Tecnologia Júnior' e 'Tecnologia Create' ambos href="/cursos#tecnologia"; 27-28 → 'Informática Júnior' e 'Informática Create' ambos href="/cursos#informatica". Páginas /cursos/junior, /cursos/create e as 9 páginas por idade (no sitemap) não aparecem no menu; /cursos/academies também não (só 'Colônia de Férias' em NAV_EXTRAS:31). specials/header-dropdown.desktop.png confirma os 5 itens.
- **Problema:** Um adulto que entra pela home (ou por qualquer página) não descobre que a escola vende cursos particulares individuais — o segundo público do site só chega por URL direta ou busca orgânica. Perde-se toda a venda cruzada de quem já está no site (pai que também quer Excel/IA pra si).
- **Correção sugerida:** Adicionar em NAV_EXTRAS (l.30-32) `{ label: "Cursos particulares", meta: "adultos · individual", href: "/particular", color: "#0067BE" }`; na home, um bloco curto 'Também para adultos: aulas particulares' com CTA secundário → /particular; no footer, link na coluna Programas.
- **Esforço:** pequeno · **Severidade:** Alta (proposta Crítica, recalibrada na verificação) · **Também apontado como:** F314
- **Verificação:** confirmado: grep por "/particular" fora das rotas particular só acha __root.tsx:173 (troca de layout). Nenhum link no header, footer, home ou /cursos. Só a meta description da home (index.tsx:55) cita. Perde venda cruzada, mas o público chega por busca: alta, não crítica.

<a id="f177"></a>

## F177 · 🟠 Dropdowns do header abrem só por hover — teclado e touch em tablet não alcançam os itens

- **Rotas:** `todas (header desktop ≥768px)`
- **Onde:** [src/components/site-header.tsx:405](../../../../src/components/site-header.tsx#L405)
- **Evidência:** ProgramsDropdown (405-411) e SobreDropdown (437-443): `<button type="button">` sem onClick, sem aria-expanded, sem aria-haspopup; painel 415/447 é `invisible ... group-hover:visible` (visibility:hidden = não focável) sem `group-focus-within:visible`. specials/keyboard-focus.json: após 6 Tabs o foco está em 'VER TODOS OS PROGRAMAS' do corpo da página /sobre, ou seja, pulou todos os itens dos dois menus.
- **Problema:** Usuário de teclado, leitor de tela ou iPad em paisagem (≥ md) não consegue abrir 'Programas' nem 'Sobre' — o botão não faz nada ao toque/Enter. Todo o catálogo de programas fica inacessível por esse caminho (WCAG 2.1.1, 4.1.2).
- **Correção sugerida:** Nos três menus (ProgramsDropdown 405, SobreDropdown 437, menu de conta 309): estado `open`, `onClick={()=>setOpen(o=>!o)}`, `aria-expanded={open}`, `aria-controls`; painel com `${open?'visible opacity-100':''} group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100`; fechar em Escape e clique fora. Ou `@radix-ui/react-navigation-menu`.
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** parcial: Código confirma: botão sem onClick/aria-expanded e painel `invisible … group-hover:visible` sem focus-within (site-header.tsx:405-415, 437-447). Parte de touch exagerada: iOS Safari emula :hover no toque. keyboard-focus.json é ambíguo (texto existe também em sobre.index.tsx:204). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f181"></a>

## F181 · 🟠 Home promete 'robôs' e 'Robótica' no hero, mas o FAQ diz que a escola não trabalha com robótica

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:413](../../../../src/routes/index.tsx#L413)
- **Evidência:** index.tsx:410 (hero): 'seu filho cria jogos, robôs e projetos reais desde a primeira aula'; 469 (ScrollStage): título 'Robótica, games e IA'; 299 (FAQ): 'Não trabalhamos com robótica de montagem'. Visível em routes/home/mobile.fold.png (hero) e mobile.seg03.png (ScrollStage).
- **Problema:** A primeira tela vende algo que a página mais abaixo desmente. Pai que veio buscando robótica agenda, descobre no WhatsApp ou na escola que não existe, e sai com a sensação de propaganda enganosa — pior do que não ter mencionado. Viola DS §13 ('Especificidade como prova', 'nunca inventar').
- **Correção sugerida:** Hero L413: 'cria jogos, objetos em 3D e projetos reais' (ou aplicar o texto de F058). ScrollStage L469: { icon: Gamepad2, title: "Jogos, 3D e IA", desc: "Do Minecraft e Roblox ao Python — projetos reais que ganham vida." } (trocar ícone Bot). Manter o FAQ de robótica (L298-299).
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: Confirmado: 'robôs' em index.tsx:413 (hero, visível em mobile.fold.png), 'Robótica, games e IA' em L469, e FAQ L299 'Não trabalhamos com robótica de montagem'. Promessa contraditória na primeira dobra afeta confiança e expectativa.

<a id="f188"></a>

## F188 · 🟠 Banner de cookies: aceitar em 1 clique, recusar em 2 — e o card cobre ~40% da tela no celular

- **Rotas:** `todas`, `/`
- **Onde:** [src/components/cookie-consent.tsx:294](../../../../src/components/cookie-consent.tsx#L294)
- **Evidência:** PromptPanel (293-309) oferece só 'Gerenciar' e 'Aceitar'; 'Recusar tudo' existe apenas no ManagePanel (385). O próprio arquivo registra o risco (24-35: 'aceite em 1 clique contra recusa em 2 é o desenho que a CNIL multou... ANPD trata como consentimento viciado'). specials/cookie-banner.mobile.png: card ocupa da altura 1050 a 1650 de 1688px e o FAB do WhatsApp sobe por cima do subtítulo do hero ('programação e o domínio real do computador').
- **Problema:** Risco jurídico (LGPD art. 8º §5º, §3º — consentimento livre) e de reputação para uma escola que se apresenta como 'transparência total'. No celular o card esconde a proposta de valor e o FAB fica flutuando sobre texto na primeira visita, exatamente quando o pai decide se fica.
- **Correção sugerida:** O achado é real e o próprio arquivo o registra como risco assumido (l.24-40). A recomendação de 3 botões iguais NÃO é segura: no card mobile (390px − 32 de wrapper − 32 de padding − 36 do ícone − 12 de gap ≈ 278px) três botões `h-11 px-3 text-sm font-semibold` ficam com ~86px cada e 'Gerenciar' estoura. Fazer exatamente o que o comentário da l.39-40 já prevê: no PromptPanel manter `grid grid-cols-2 gap-2` com `Recusar` (classe do botão 'Gerenciar' atual, onClick={onReject} → `decide(false, "recusar")`) e `Aceitar`; mover 'Gerenciar' para a linha de links da l.311: `<button type="button" onClick={onManage} className="font-medium underline underline-offset-2 hover:text-st-blue">Gerenciar preferências</button> · <Link to="/privacidade">Política de Privacidade</Link>`. Ao mesmo tempo encurtar o parágrafo (l.280-289) para 'Usamos cookies só para saber quais páginas as famílias mais visitam. Sem anúncios, sem venda de dados.' (2 linhas no mobile). Atualizar o cabeçalho do arquivo (remover a seção de risco assumido) e `captureConsentDecision` continua funcionando (surface 'prompt', action 'recusar').
- **Esforço:** trivial · **Severidade:** Alta · **Também apontado como:** F312
- **Verificação:** confirmado: PromptPanel (l.294-309) só tem Gerenciar/Aceitar; 'Recusar tudo' só em ManagePanel (l.380-386). O arquivo assume o risco LGPD/ANPD explicitamente (l.24-40) como decisão do dono. Screenshot mobile: card ≈36% (não 40%) e FAB sobre o subtítulo. Alta mantida: risco jurídico real + cobre o CTA do hero na 1ª visita; corrigir é decisão de negócio.

<a id="f197"></a>

## F197 · 🟠 /cursos e header vendem 4 produtos que não batem com os programas reais (idades e nomes)

- **Rotas:** `/cursos`, `/cursos/junior`, `/cursos/create`
- **Onde:** [src/routes/cursos.index.tsx:62](../../../../src/routes/cursos.index.tsx#L62)
- **Evidência:** cursos.index.tsx:62-123 define 'Tecnologia Júnior 5 a 9 anos', 'Tecnologia Create 10 a 15 anos', 'Informática Júnior', 'Informática Create'; legenda do hero (l.254-257) 'Crianças 5–9 / Adolescentes 10–15'. cursos.junior.index.tsx:36 vende 'JR (5 a 8 anos)' com JR1–JR3; cursos.create.index.tsx:37 vende 'CREATE (8 a 14 anos)' com CREATE1–6. Não existe nenhuma rota para 'Informática'. Screenshots routes/cursos/mobile.full.png vs routes/cursos__create/mobile.fold.png.
- **Problema:** Um pai com filho de 9 anos lê em /cursos que ele é 'Júnior (5–9)', mas em /cursos/create descobre que 9 anos é 'CREATE Ano 2'. Dois catálogos contraditórios no mesmo site destroem a confiança e travam a decisão ('qual é o curso certo?'). Metade da oferta anunciada (Informática) não tem página para onde ir.
- **Correção sugerida:** Decisão de negócio (Henrique): o header declara '4 produtos reais' (site-header.tsx:17) — se esse é o catálogo vigente, as páginas JR (5–8) e CREATE (8–14) são legado e devem ser atualizadas para as faixas 5–9/10–15 ou retiradas do sitemap (regra do CLAUDE.md). Se JR/CREATE são os reais, alinhar /cursos e o menu a eles. Um único catálogo.
- **Esforço:** médio · **Severidade:** Alta (proposta Crítica, recalibrada na verificação)
- **Verificação:** parcial: Contradição real (cursos.index.tsx:62-123 vs junior.index:7 e create.index:37). Mas as páginas JR/CREATE não são linkadas em lugar nenhum; o pai só vê as duas versões vindo do Google/bot. 'Informática sem página' vale para todos os 4 cards (todos vão ao WhatsApp). Não é crítica. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f216"></a>

## F216 · 🟠 Sem CTA persistente: 10 telas mobile seguidas sem nenhum botão de contato nas páginas de curso

- **Rotas:** `/particular/cursos/*`
- **Onde:** [src/routes/__root.tsx:200](../../../../src/routes/__root.tsx#L200)
- **Evidência:** __root.tsx:200-228: em rota /particular renderiza só <Outlet/>, sem <WhatsAppFab/>. manifest: ctaCount = 4 em 49 das 52 rotas (hero, card de preço, CTA final, sidebar). Excel mobile.seg02–seg11 (≈9.000px, do "Para quem é" até "Investimento") não têm nenhum CTA visível; topbar sticky só tem Login + hambúrguer (particular.tsx:586-620). pageHeight mobile: 10.5k–18.4k px.
- **Problema:** Quem se convence no meio da página (conteúdo programático, diferenciais, professores) precisa rolar até o card de preço ou voltar ao topo para agir. Em sales pages de 14 segmentos isso mata micro-momentos de decisão. Custo: queda de conversão em mobile, onde está o público.
- **Correção sugerida:** Passo 1 (trivial): montar `<WhatsAppFab />` também no ramo `isParticularRoute` do __root.tsx:200-202, com `lg:hidden` se não quiser duplicar o CTA da sidebar no desktop. Passo 2 (opcional, depois de medir): barra sticky inferior `fixed inset-x-0 bottom-0 lg:hidden` com a parcela e o botão 'Falar no WhatsApp'.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: __root.tsx:200-202 renderiza só <Outlet/> em /particular, e o WhatsAppFab só é montado na linha 228. particular.tsx:586 tem uma topbar sticky sem CTA de contato. No desktop, a sidebar fixa (particular.tsx:328) compensa em parte. No mobile não há CTA persistente.

<a id="f217"></a>

## F217 · 🟠 FAQ "Quanto custa?" manda pro WhatsApp na mesma página que mostra o preço

- **Rotas:** `/particular`, `/particular/cursos/*`
- **Onde:** [src/components/particular-faq-items.ts:36](../../../../src/components/particular-faq-items.ts#L36)
- **Evidência:** particular-faq-items.ts:36-40: `q: "Quanto custa?", a: "O valor varia conforme o curso e o plano escolhido. Fale com a gente pelo WhatsApp…"`; buildCourseFaqItems (72-78) só substitui a resposta de duração, mantendo essa genérica. Excel mobile.seg12 mostra "12x de R$ 380,46 · ou R$ 4.565,50 à vista" e seg13 logo abaixo tem "Quanto custa?" com a resposta evasiva. Na landing (/particular) não existe nenhum valor — só a FAQ evasiva (mobile.seg10).
- **Problema:** Resposta contradiz a página e soa como esconder preço — exatamente a objeção que a §9.4 manda responder. Na landing, o adulto comparando escolas sai sem nenhuma referência de investimento. Custo: desconfiança + abandono de quem não quer "pedir preço" no WhatsApp.
- **Correção sugerida:** Em buildCourseFaqItems, substituir também a resposta de 'Quanto custa?' por uma gerada com os dados reais do curso: `O curso de ${nome} custa 12x de ${parcelaFormatted} sem juros ou ${totalFormatted} à vista, mais matrícula (R$ 199,90) e material didático (R$ 389,90), pagos uma vez.` Na landing, usar a faixa mín–máx calculada do catálogo, nunca números digitados à mão.
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: particular-faq-items.ts:36-38 responde 'O valor varia... Fale no WhatsApp', e buildCourseFaqItems (72-78) só troca a resposta de duração. A mesma página mostra o preço (particular-course-page.tsx:575-581) e matrícula/material (:627/:631, R$ 199,90 / R$ 389,90). A faixa 188,80–828,00 do achado não foi verificada.

<a id="f218"></a>

## F218 · 🟠 Chips de categoria da landing levam a UM curso, não à lista da área

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:274](../../../../src/routes/particular.index.tsx#L274)
- **Evidência:** PILARES (particular.index.tsx:59 e 73): `href: "#categorias"` nos dois primeiros cards; #categorias é a seção de 8 chips que fica ACIMA dos pilares (mobile.seg02 vs seg03). O card "Profissões" promete "Trilha estruturada: da primeira aula ao primeiro emprego" e "Orientação sobre qual área combina com você" (66-71), mas não existe nenhuma página/seção de profissões no repo (rotas: só particular.index e particular.cursos.*).
- **Problema:** Quem clica em "Programação" espera ver os 14 cursos da área e cai na página de Lógica de Programação, sem indicação de que há outros 13. Os outros cursos ficam escondidos no menu lateral (fechado por padrão, gruposOpen = {} em particular.tsx:137). Custo: o adulto que quer Python/Full Stack acha que só existe Lógica e sai.
- **Correção sugerida:** Solução mínima: renderizar, na própria landing, uma seção id='cursos-por-area' que reusa GRUPOS de particular.tsx em grid (área → lista de cursos com link), e apontar os chips (L274 e L643) e o card 'Ver todos os cursos' (L59) para as âncoras de cada área. O card 'Profissões' (L63-73) deve apontar para algo real ou sair: também promete 'primeiro emprego', o que fere o DS §11.
- **Esforço:** médio · **Severidade:** Alta
- **Verificação:** confirmado: Os chips em particular.index.tsx:274 levam a /particular/cursos/${slug} (ex.: Programação → 'logica', um curso só, L41). Os cards L59/L73 apontam para #categorias, que são esses mesmos chips. particular.tsx:137 gruposOpen={} deixa os grupos fechados. Não existe página de profissões.

<a id="f299"></a>

## F299 · 🟠 11 páginas de programa/curso infantil não têm nenhum link a partir da home, header, footer ou /cursos

- **Rotas:** `/`, `/cursos`, `/cursos/create`, `/cursos/junior`, `/cursos/academies`, `/cursos/create/*-anos`, `/cursos/junior/*-anos`
- **Onde:** [src/components/site-header.tsx:23](../../../../src/components/site-header.tsx#L23)
- **Evidência:** grep por `cursos/create\|cursos/junior\|cursos/academies` em index.tsx, cursos.index.tsx, site-header.tsx e site-footer.tsx retorna 0 links. cursos.index.tsx:131 `<a href={WHATSAPP}>` envolve o card inteiro do programa; index.tsx:725 o CTA da banda aponta para WHATSAPP; site-header.tsx:23-28 os 4 itens do menu apontam para `/cursos#tecnologia\|#informatica`. Screenshot routes/cursos/mobile.full.png: 4 cards, todos com 'Quero saber mais' (WhatsApp).
- **Problema:** Princípio Agência (design-principles.md › Agency: 'Give people the freedom to explore… without being locked into specific flows'). O pai que quer ler o currículo antes de falar com alguém não tem caminho: toda superfície clicável do funil infantil leva ao WhatsApp. As 9 sales pages ricas (ementa, insígnias, FAQ) e as 2 overviews só são alcançáveis por URL/sitemap. Também viola layout.md › Visual hierarchy 'Use progressive disclosure' — o detalhe existe, mas não é revelável.
- **Correção sugerida:** Depende da decisão de F197. Se JR/CREATE/Academies forem produtos vigentes: NAV_TEC → '/cursos/junior' e '/cursos/create', adicionar Academies em NAV_EXTRAS (o comentário l.17-18 promete 'Robótica/IA' e não entrega), e card de /cursos vira <Link> com WhatsApp secundário. Se forem legado: remover do sitemap em vez de linkar.
- **Esforço:** pequeno · **Severidade:** Alta (proposta Crítica, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: grep em src só acha links para /cursos/create\|junior\|academies dentro das próprias páginas; header aponta para /cursos#tecnologia (site-header.tsx:23-28), cards de /cursos vão ao WhatsApp (l.131). 11 páginas órfãs, só via sitemap. Crítica exagerada — alta.

<a id="f176"></a>

## F176 · 🟡 'Entrar' é o único botão do header; não existe CTA de conversão no topo nem no menu mobile

- **Rotas:** `todas (header)`
- **Onde:** [src/components/site-header.tsx:269](../../../../src/components/site-header.tsx#L269)
- **Evidência:** site-header.tsx:269-282 renderiza 'Entrar' com bg-st-green glow-green (o mesmo verde/glow do CTA primário do DS §8.1); é o elemento de maior peso visual em desktop.fold.png e o único botão full-width no fim do menu mobile (specials/menu-mobile-open.png). Nenhum link WhatsApp/agendar no header (nav 101-133) nem no menu mobile (153-232). 'Programas' e 'Sobre' nascem colapsados no mobile (174, 200): ver um programa = 3 toques.
- **Problema:** Pai/mãe visitante lê 'Entrar' como 'preciso de conta' (o botão leva ao login do dashboard, loginUrl() → santos-tech.com/dashboard) e não encontra a ação principal do site no lugar mais previsível. O verde da marca está gasto num botão para aluno já matriculado, não para o lead.
- **Correção sugerida:** Rebaixar 'Entrar' para link texto 'Portal do Aluno' (classe dos itens de nav, l.104) e usar o botão bg-st-green para o CTA 'Aula grátis' → WHATSAPP_URL (target=_blank rel=noreferrer). No menu mobile, colocar o mesmo CTA no topo. Não abrir 'Programas' expandido por padrão: menu muito longo.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: l.269-282 renderiza 'Entrar' em bg-st-green com glow e não há CTA de lead no header (l.101-133) nem no menu mobile (l.152-232). Porém o FAB do WhatsApp fica sempre visível e cobre o lead: impacto na conversão menor que o descrito. Média. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f178"></a>

## F178 · 🟡 Footer sem endereço, horário, WhatsApp nem navegação — só copyright e 3 links

- **Rotas:** `todas (footer)`
- **Onde:** [src/components/site-footer.tsx:83](../../../../src/components/site-footer.tsx#L83)
- **Evidência:** site-footer.tsx:83-101: único conteúdo é '© Santos Tech', Política de Privacidade, Termos de Uso e botão Cookies. Confirmado em routes/home/mobile.footer.png, routes/contato/mobile.full.png, routes/pagina-que-nao-existe-404/mobile.full.png. Em /sobre/visao, /privacidade, /termos e 404 não há endereço/telefone em lugar nenhum da página.
- **Problema:** Rodapé é onde o pai procura 'onde fica / que horas / número' quando chega ao fim de qualquer página. Hoje ele precisa reabrir o menu e ir a /contato; nas páginas legais e no 404 fica sem nenhum caminho para programas, /particular ou contato. Custo direto: abandono no fim da leitura.
- **Correção sugerida:** Adicionar acima da barra legal uma grade `grid gap-8 sm:grid-cols-3 py-10` com: marca + 'Escola presencial de tecnologia · Ribeirão Preto'; Programas (/cursos, /cursos/camps, /particular); Contato (endereço, WhatsApp via WHATSAPP_URL.footer, /contato). Usar os tokens t.headings/t.bodyText/t.iconColor que já existem no tema e não são usados.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Rodapé tem só copyright e 3 links (site-footer.tsx:83-101); os tokens brandHeading/headings/iconColor definidos nas l.5-15 nem são usados. Mas a home e /contato já mostram endereço e WhatsApp num card antes do rodapé (home/mobile.footer.png). Falta real nas páginas legais e no 404: severidade média. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f179"></a>

## F179 · 🟡 Home não linka para nenhuma página de programa: as 4 faixas só têm 'Quero saber mais' → WhatsApp

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:261](../../../../src/routes/index.tsx#L261)
- **Evidência:** ProductBand (index.tsx:260-268) tem um único CTA `href={WHATSAPP}` 'Quero saber mais'. grep por to="/cursos ou href="/cursos em index.tsx: zero ocorrências; o único link interno da página é `href="#programas"` (427). desktop.json › dom.ctas lista 11 CTAs, todos WhatsApp.
- **Problema:** Pai que quer ver currículo, ementa, horários ou o que muda entre Júnior e Create antes de falar com alguém não tem caminho na home — é empurrado direto para o WhatsApp (fricção alta para quem ainda está comparando) ou precisa adivinhar o menu. As sales pages (DS §9.4) ficam sem tráfego da página mais visitada.
- **Correção sugerida:** Em ProductBand (L261-268) adicionar CTA secundário ao lado do WhatsApp: <Link to="/cursos" hash={p.family === 'Tecnologia' ? 'tecnologia' : 'informatica'} className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-4 text-sm font-black uppercase tracking-wider text-white hover:bg-white/10">Ver o programa <ArrowRight className="h-4 w-4"/></Link>. Não apontar para /cursos/junior ou /cursos/create enquanto F337 não for decidido (faixas contraditórias).
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: nenhum to/href para /cursos em index.tsx (grep), band só tem WhatsApp (L261). Exagero: o header 'Programas' e o 'Ver os programas' do hero dão caminho; não precisa adivinhar. Link para /cursos/junior propagaria a contradição de F337. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f180"></a>

## F180 · 🟡 6 dos 11 CTAs da home são 'Quero saber mais' idênticos, todos com a mesma mensagem genérica de WhatsApp

- **Rotas:** `/`, `/sobre`, `/sobre/visao`, `/contato`, `/cursos`, `/cursos/junior`, `/cursos/create`, `/cursos/camps`, `/cursos/academies`, `/cursos/create/8-9-anos`, `/cursos/junior/5-6-anos`, `/particular`, `/particular/cursos/*`
- **Onde:** [src/lib/whatsapp.ts:36](../../../../src/lib/whatsapp.ts#L36)
- **Evidência:** whatsapp.ts:37: `courses: build("Olá, quero saber mais sobre os cursos da Santos Tech")`. As 52 rotas passam `WHATSAPP_URL.courses` (grep: 52/52, ex.: particular.cursos.excel.tsx:125). Em common.tsx:271-273 o botão diz "Quero o Excel Avançado" e em 363-365 "Quero saber mais" — ambos abrem o mesmo texto genérico. dom.ctas excel: ["Falar no WhatsApp","QUERO SABER MAIS","QUERO O EXCEL AVANÇADO","QUERO SABER MAIS"].
- **Problema:** 'Quero saber mais' não diz o que acontece (abre WhatsApp? formulário?) nem sobre o quê. A mensagem chega igual venha da faixa 'Informática Júnior' ou do card de preço 'Tecnologia', então o atendimento recomeça do zero ('qual idade? qual programa?') e não dá para medir qual seção converte. Repetição sem variação também anestesia o botão (DS §1.3: um CTA dominante, específico).
- **Correção sugerida:** Em whatsapp.ts, adicionar `program: (nome: string) => build(`Olá! Quero saber mais sobre o programa ${nome} da Santos Tech`)`. Na home, trocar os 5 botões do map de programas (index.tsx:731) por `Falar sobre ${p.nome}` com WHATSAPP_URL.program(p.nome). Manter 'Agende a aula experimental grátis' como o CTA dominante. Não precisa criar mais mensagens do que isso (YAGNI).
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: O dom.ctas da home tem 6× 'QUERO SABER MAIS' (index.tsx:267 + o map em :731), e todos usam WHATSAPP_URL.courses (whatsapp.ts:36). A lista de rotas está exagerada: /cursos/junior só tem 'Agendar visita guiada'. É um prejuízo de atendimento e de medição, não um bloqueio. Rebaixei para media.

<a id="f182"></a>

## F182 · 🟡 Números-chave divergem entre páginas: 329 vs 325 avaliações, '5 aos 14' vs '5–15', horário de sábado

- **Rotas:** `/`, `/contato`, `/links`, `/sobre`
- **Onde:** [src/routes/index.tsx:468](../../../../src/routes/index.tsx#L468)
- **Evidência:** Idade: index.tsx:468 'dos 5 aos 14 anos' vs 172 '5–15' e header 24 '10–15 anos'. Avaliações: '329' hardcoded em index.tsx:175, 439, 995, 1135, testimonials.tsx:118, 132 e sobre.index.tsx:225; seo.ts:53,56,58 diz 'mais de 325' e o card do Google exibido em /links (routes/links/mobile.full.png) mostra '5,0 ★ (325)'. Horário: index.tsx:1080 'Seg a Sáb · 8h às 22h' vs contato.tsx:108-109 'Seg a Sex 8h–22h / Sábado 8h–18h' (e FAQ index.tsx:311 concorda com contato).
- **Problema:** Pai atento percebe que o site não bate consigo mesmo — exatamente na seção 'Transparência total'. Quem planeja ir no sábado à noite pela home encontra a escola fechada. Cada número duplicado é um ponto futuro de divergência.
- **Correção sugerida:** index.tsx:468 → 'dos 5 aos 15 anos'. seo.ts:53,56 → 'mais de 325' passa a derivar de ORG.rating.count (329, seo.ts:60); testimonials.tsx:118,132, sobre.index.tsx:46,225 e index.tsx:175 também passam a ler ORG.rating.count. O horário é tratado no F067 (duplicado).
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Confirmado: index.tsx:468 '5 aos 14' contra 172 '5–15'; seo.ts:53,56 '325' contra seo.ts:60 count 329 e '329' hardcoded em 5+ lugares. Exagero: header '10–15 anos' é a faixa da turma Create, não diverge. O horário duplica o F067.

<a id="f183"></a>

## F183 · 🟡 E-mail de contato em outro domínio (ceo@santos-games.com) mina a confiança

- **Rotas:** `/contato`
- **Onde:** [src/routes/contato.tsx:82](../../../../src/routes/contato.tsx#L82)
- **Evidência:** contato.tsx:88 `href="mailto:ceo@santos-games.com"` e :94 texto 'ceo@santos-games.com'; routes/contato/desktop.fold.png mostra o card E-MAIL com esse endereço. O rodapé de /particular usa 'contato@santos-tech.com' (routes/particular/mobile.footer.png).
- **Problema:** Site é santos-tech.com, o e-mail é santos-games.com e a caixa é do 'ceo'. Para pai/mãe isso parece endereço errado ou golpe, e para o negócio significa lead comercial caindo na caixa do dono em vez do atendimento. Canal de e-mail vira canal morto.
- **Correção sugerida:** Trocar para `contato@santos-tech.com` em contato.tsx:82 (href) e :88 (texto) e em seo.ts:39 (ORG.email), e fazer o contato.tsx importar ORG.email em vez do literal. Antes, o Henrique confirma que a caixa contato@santos-tech.com existe e recebe (há MX mail.santos-tech.com, mas a caixa não foi verificada).
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: contato.tsx:82,88 e seo.ts:39 usam ceo@santos-games.com. Já particular.index.tsx:672, privacidade.tsx:173 e termos.tsx:123 usam contato@santos-tech.com. O WhatsApp é o canal principal, por isso rebaixei para media. Duplicata de F339: corrigir uma vez só.

<a id="f189"></a>

## F189 · 🟡 Prova social fala com pais, mas 8 dos 9 depoimentos são de alunos adultos e as citações são cortadas

- **Rotas:** `/`
- **Onde:** [src/components/testimonials.tsx:97](../../../../src/components/testimonials.tsx#L97)
- **Evidência:** REVIEWS (testimonials.tsx:16-71): só Eduardo Nascimento é 'Pai de aluno'; os outros 8 são 'Aluno/Aluna' com falas de adulto ('Nunca tinha pegado em um computador e hoje consigo ver minha evolução', 'aulas personalizadas que atenderam às minhas necessidades', 'fiz amizade com o pessoal'). Título 'O que as famílias e alunos dizem' (113). blockquote com `line-clamp-5` (97) sem expandir: routes/home/mobile.seg06.png mostra 'ferramentas para os estudantes. A…' truncado.
- **Problema:** Pai procura outro pai dizendo 'meu filho de 8 anos adorou'. Ler nove adultos elogiando o curso de informática deles reforça a dúvida 'isso é escola pra criança mesmo?'. A citação cortada no meio da frase, sem 'ler mais', passa impressão de descuido justamente na seção de credibilidade.
- **Correção sugerida:** Imediato: remover `line-clamp-5` (l.97) — cards já são h-full/flex, a altura se ajusta. Conteúdo (decisão do Henrique): curar 3-4 avaliações reais de pais no Google e colocar primeiro; levar as de adultos (Excel/informática) para /particular. Não inventar texto nem idade.
- **Esforço:** médio · **Severidade:** Média
- **Verificação:** parcial: Só 1 de 9 é "Pai de aluno" (l.21) — confirmado. Mas vários "Aluno" parecem crianças/adolescentes (games, 3D, turma de programação); "falas de adulto" é exagero. Truncamento com reticências confirmado em desktop.seg08.png. Trocar depoimentos exige reviews reais. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f190"></a>

## F190 · 🟡 Preloader full-screen bloqueia a home por ~1,5s toda vez que ela monta, inclusive ao voltar

- **Rotas:** `/`
- **Onde:** [src/components/preloader.tsx:27](../../../../src/components/preloader.tsx#L27)
- **Evidência:** preloader.tsx:14-20 ('Roda toda vez que a home monta. Bloqueia interação até sumir'), timeline 55-58 ≈ 0,62+0,22+0,25s + fade 300ms, overlay `fixed inset-0 z-[200] bg-[#04325A]` (71). cookie-consent.tsx:83-95 espera o preloader terminar antes de perguntar. Montado só em index.tsx:391.
- **Problema:** Pai no celular, no intervalo, clica em 'Início' ou volta pela seta e recebe uma tela azul com o logo se desenhando de novo. É espera artificial sem conteúdo (HIG Feedback: nunca bloquear sem necessidade), atrasa o banner e o primeiro toque no CTA.
- **Correção sugerida:** No início do useLayoutEffect: `let visto=false; try{visto=sessionStorage.getItem('st-preloader')==='1'; sessionStorage.setItem('st-preloader','1')}catch{}; if(visto){setMounted(false); markPreloaderDone(); return;}` Como é layout effect, não pisca.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Comentário l.17: "Roda toda vez que a home monta. Bloqueia interação". Timeline l.55-58 dá ~1,1s, mais 300ms de fade (l.52). Overlay fixed z-[200] (l.71). Repetir isso ao voltar para a home é espera artificial.

<a id="f192"></a>

## F192 · 🟡 Home mobile tem 24 mil px; preço e 'como matricular' só depois de ~9 telas e duas seções com scroll travado

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:458](../../../../src/routes/index.tsx#L458)
- **Evidência:** manifest › home.mobile.pageHeight = 24089 (≈ 28 telas de 844px); ordem em index.tsx: hero (395) → ScrollStage pinado (455) → stats (484) → Testimonials pinado com 'ROLE PARA VER MAIS ↓' (497; mobile.seg06.png) → Por quê (500) → Programas (553) → Como funciona (600) → Investimento (642, preço em 696) → Portal → Material → Matrícula → FAQ (1015) → Onde estamos (1050). Preço aparece em mobile.seg09/10.
- **Problema:** As duas perguntas que o pai faz primeiro ('quanto custa' e 'como funciona') estão atrás de duas seções de scroll-jacking e de 9 telas. No celular isso é abandono antes do preço — e o único atalho do hero (#programas) para nas faixas, não nos valores.
- **Correção sugerida:** Passo barato primeiro: dar id="investimento" + scroll-mt-24 à <section> da linha 636 e pôr no hero, ao lado do link #programas (l.427), um link secundário 'Ver valores ↓' apontando pra #investimento. Encurtar a pinagem no mobile (ScrollStage heightVh menor; Testimonials 300vh → ~180vh) fica pra uma segunda etapa, que depende de validação visual.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: mobile.json pageHeight=24089. ScrollStage (l.458, scroll-stage.tsx:206 = 340vh) e Testimonials (l.488, testimonials.tsx:218 = 300vh) prendem o scroll. A seção de investimento (l.636) não tem id, e o único atalho do hero (l.427) leva a #programas. A linha citada (455) estava errada.

<a id="f198"></a>

## F198 · 🟡 Cards de /cursos pulam a página do programa: 4 CTAs iguais 'Quero saber mais' direto ao WhatsApp

- **Rotas:** `/cursos`
- **Onde:** [src/routes/cursos.index.tsx:131](../../../../src/routes/cursos.index.tsx#L131)
- **Evidência:** cursos.index.tsx:131 <a href={WHATSAPP} target='_blank'> envolve o card; l.176 'Quero saber mais' com ícone WhatsApp em cada um dos 4 cards + l.331 'Falar no WhatsApp' no CTA final. desktop.json › dom.ctas lista 4 cards + 'FALAR NO WHATSAPP' (ctaCount 6). DESIGN_SYSTEM §1.3: um CTA dominante por seção; secundário = ver programas.
- **Problema:** O pai está na fase de comparar programas e o site o empurra para uma conversa de vendas antes de ele saber duração, ementa ou preço. Cinco botões verdes com o mesmo peso e o mesmo destino não criam hierarquia — e o clique abre o WhatsApp sem contexto de qual card foi escolhido.
- **Correção sugerida:** Resolver junto com F197/F299. Mínimo seguro: trocar o rótulo do card para descrever a ação ('Conversar no WhatsApp') e passar mensagem pré-preenchida por programa (ex.: `${WHATSAPP}?text=Quero saber sobre ${program.name}`). Só apontar o card para página de programa depois que o catálogo estiver unificado.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: card inteiro é <a href={WHATSAPP}> (l.131), rótulo 'Quero saber mais' (l.176). Mas não há página correspondente a 'Tecnologia Júnior 5–9' nem 'Informática' para linkar; WhatsApp é o canal de venda deliberado. Hierarquia fraca, não perda clara. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f199"></a>

## F199 · 🟡 Preço ausente em todas as sales pages e na Academies; só a Colônia mostra valor

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/cursos/academies`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:214](../../../../src/routes/cursos.create.8-9-anos.tsx#L214)
- **Evidência:** cursos.create.8-9-anos.tsx:213-216 FAQ 'Qual o investimento?' → 'Te passamos valor e formas de pagamento na aula experimental'; cursos.junior.5-6-anos.tsx FAQ idem ('no agendamento da visita guiada'); cursos.academies.tsx:160-162 'Varia por módulo'. Em contraste, cursos.camps.tsx:78-82 e 328 publicam R$ 939,90/semana. DESIGN_SYSTEM §9.4 item 10: FAQ deve responder objeções de pai, preço em primeiro.
- **Problema:** Curso anual é compra de alto valor; o pai que compara escolas no celular abandona a página que esconde o preço e vai para a que mostra. A FAQ levanta a pergunta e não responde — pior que não perguntar. A inconsistência com a Colônia (que mostra) sugere que o valor é problema, não política.
- **Correção sugerida:** Decisão de negócio (Henrique). A home já publica 'A mensalidade é R$ 539,90' (index.tsx:307); alinhar as FAQs 'Qual o investimento?' de create.*, junior.* e academies com esse mesmo valor (se válido para esses programas) + o que inclui, mantendo o convite à aula experimental. Não inventar valor para Academies.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Exagerado: não é 'só a Colônia' que mostra preço — a FAQ da home (index.tsx:307) publica R$ 539,90/mês. As sales pages (create 8-9:214, junior 5-6:211, academies:161) de fato escondem. Inconsistência interna, não ausência total. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f200"></a>

## F200 · 🟡 Sales page tem ~12 telas de celular sem nenhum CTA entre o hero e o card final

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`
- **Onde:** [src/components/course-page.tsx:561](../../../../src/components/course-page.tsx#L561)
- **Evidência:** routes/cursos__create__8-9-anos/mobile.seg02.png até seg13.png (≈10.000 px de 12.004 de pageHeight) não contêm nenhum botão além do FAB flutuante; mobile.json › dom.ctas = ['AGENDAR AULA EXPERIMENTAL GRÁTIS','AGENDAR AULA EXPERIMENTAL',''] (ctaCount 3 = hero + final + FAB). ModuleGrid (course-page.tsx:561-593), LessonAccordion (611-706) e FaqSection (885-923) não têm slot de CTA.
- **Problema:** O momento de maior convencimento (leu os 4 módulos, abriu a ementa, leu a FAQ) não tem convite para agir; o pai precisa rolar até o fim ou achar o FAB genérico. Em página de 12 mil px isso custa conversão real — quem para no meio não converte.
- **Correção sugerida:** Adicionar prop opcional `cta?: { href: string; label: string; hint?: string }` em ModuleGrid (l.561) e FaqSection (l.885). Render ao final da cápsula: `<Reveal delay={200} className="mt-12 text-center"><p className="mb-4 text-base text-muted-foreground">{cta.hint}</p><a href={cta.href} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:scale-[1.03] glow-green sm:w-auto"><WhatsAppIcon className="h-4 w-4" />{cta.label}</a></Reveal>`. Nas 8 rotas passar `cta={{ href: WHATSAPP, label: 'Agendar aula experimental grátis', hint: 'Quer ver o Módulo 1 ao vivo?' }}`. Não fazer barra sticky: conflita com o FAB e com o banner de consentimento (whatsapp-fab.tsx já compensa --st-consent-height).
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: mobile.json dom.ctas = 3 (hero, final, FAB) em create 8-9 (12.004px) e 13-14 (13.680px); junior 5-6 idem. ModuleGrid (l.561-593), LessonAccordion, ToolGrid, Methodology e FaqSection (l.885-923) não têm slot de CTA; BridgeBanner (l.721) não tem link; seg08.png confirma. Rebaixado para media: o FAB WhatsApp (whatsapp-fab.tsx:32) fica visível em toda a rolagem.

<a id="f201"></a>

## F201 · 🟡 Onde fica e quais horários? Sales pages e footer não informam endereço, mapa nem turnos

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/cursos/academies`, `/cursos/camps`
- **Onde:** [src/components/course-page.tsx:436](../../../../src/components/course-page.tsx#L436)
- **Evidência:** grep -i 'nove de julho\|99257\|horário' nas rotas do escopo só encontra cursos.junior.5-6-anos.tsx:204 (resposta da FAQ 'É 100% presencial?'). site-footer.tsx:83-100 renderiza apenas copyright + Privacidade/Termos/Cookies (routes/cursos__create__8-9-anos/mobile.footer.png). FormatSection (course-page.tsx:436-482) fala '2 horas por semana' mas nunca diz em quais dias/turnos.
- **Problema:** Para um pai, 'onde fica' e 'que dia/hora tem turma' são pré-requisitos de qualquer aula experimental. Hoje ele precisa sair da sales page, achar 'Contato' no header e voltar — ou perguntar no WhatsApp. Cada pergunta evitável no WhatsApp é um lead que esfria.
- **Correção sugerida:** Criar `LocalSection({ theme })` em course-page.tsx (seção `py-14 sm:py-20`, cápsula 7xl, card com MapPin/Clock do lucide) inserida antes de CourseCtaFinal nas 8 rotas, com: 'Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP' linkado a `https://maps.google.com/?q=Av.+Nove+de+Julho,+1992,+Ribeirão+Preto` (target _blank rel noreferrer), horário 'Seg a sex 8h–22h · Sáb 8h–18h' e frase 'Turmas em vários horários — confirme a vaga no WhatsApp' + link WhatsApp. Centralizar endereço/horário em `src/lib/site-info.ts` e consumir também em index.tsx:1080 (hoje diz 'Seg a Sáb · 8h às 22h', divergente da FAQ index.tsx:315 que diz sáb até 18h). Não inventar turnos específicos (tarde/noite): confirmar com o Henrique antes de publicar; até lá usar o texto genérico. Footer com endereço+telefone: registrar em PENDENCIAS.md.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: grep confirma: endereço só em cursos.junior.5-6-anos.tsx:204 (FAQ); nenhuma rota create/junior 6-7/7-8 cita endereço, mapa ou turno. FormatSection (l.418-434) fala '2h/semana, 1 aula de 2h ou 2 de 1h' sem dias/horários. site-footer.tsx:83-100 só copyright + links legais (mobile.footer.png). Rebaixado para media: header tem 'Contato' (site-header.tsx:125) e FAB WhatsApp sempre visível.

<a id="f202"></a>

## F202 · 🟡 Oferta do CTA primário muda por programa: visita guiada, aula experimental, 'Conhecer', 'Garantir a vaga'

- **Rotas:** `/cursos`, `/cursos/junior`, `/cursos/create`, `/cursos/camps`, `/cursos/academies`, `/cursos/junior/5-6-anos`, `/cursos/create/8-9-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/sobre`, `/sobre/visao`
- **Onde:** [src/routes/cursos.junior.index.tsx:278](../../../../src/routes/cursos.junior.index.tsx#L278)
- **Evidência:** DESIGN_SYSTEM §1.3: "Hierarquia: primário = agendar aula experimental". JR: "Agendar visita guiada grátis" (cursos.junior.index.tsx:278,599; cursos.junior.5-6-anos.tsx:253,350; 6-7:238,373; 7-8:239,383) e FAQ "Vamos te passar o valor … no agendamento da visita guiada" (5-6:212). CREATE: "Agendar aula experimental grátis" (cursos.create.index.tsx:249; create.*-anos). Sobre: "Agendar visita" (sobre.index.tsx:289; sobre.visao.tsx:190, com texto "Visita guiada gratuita" L179). Academies: "Conhecer as Academies" (cursos.academies.tsx:284,478). Camps: "Garantir a vaga" (L202). /cursos: cards "Quero saber mais" (cursos.index.tsx:176). Confirmado em dom.ctas de cursos__junior ("AGENDAR VISITA GUIADA GRÁTIS" ×2) vs cursos__create ("AGENDAR AULA EXPERIMENTAL GRÁTIS").
- **Problema:** O pai que viu 'aula experimental grátis' na home cai em JR e lê 'visita guiada' — ganhou ou perdeu algo? No CTA final do CREATE o 'grátis' desaparece, justamente no ponto de decisão. Sete rótulos para uma única ação diluem o reconhecimento do próximo passo.
- **Correção sugerida:** Só a divergência JR ('Agendar visita guiada grátis') × CREATE/home ('aula experimental grátis') é real. Confirmar com o Henrique se o JR (5–8) oferece aula experimental; se sim, trocar os rótulos JR para 'Agendar aula experimental grátis' (junior.index:278, 5-6:253,350, 6-7:238,373, 7-8:239,383) e FAQs; se não, manter 'visita guiada' mas incluir linha sob o botão explicando. No CTA final do CREATE devolver 'grátis' ('Agendar aula experimental grátis'). Camps/Academies podem manter rótulo próprio.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: 'Garantir a vaga' (camps:202) e 'Conhecer as Academies' são produtos distintos, rótulo próprio é aceitável. JR usa visita guiada de forma coerente e deliberada (5-6:349). CREATE final perde 'grátis' (8-9:385 etc.). Depende de decisão de negócio. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f203"></a>

## F203 · 🟡 'Conhecer as Academies' é botão de WhatsApp com rótulo de navegação

- **Rotas:** `/cursos/academies`
- **Onde:** [src/routes/cursos.academies.tsx:284](../../../../src/routes/cursos.academies.tsx#L284)
- **Evidência:** cursos.academies.tsx:290-295 metrics = '2 Módulos', '9–14', 'Avançado', 'Hands-on' (dois deles não são números); FAQ l.141 'Duração e carga horária variam por módulo — consulta a gente'; l.161 'Varia por módulo'. Comparar com CourseHero das sales pages ('40 aulas · 80h · 40 semanas') e DESIGN_SYSTEM §13 'especificidade como prova'. routes/cursos__academies/desktop.fold.png.
- **Problema:** HIG (buttons.md): o rótulo deve descrever o resultado. 'Conhecer' promete informação na página; abrir o WhatsApp surpreende e gera fechamento de aba. Dois botões que 'parecem' fazer o mesmo anulam a hierarquia primário/secundário.
- **Correção sugerida:** Na L284 e na L478: primaryCta.label = 'Agendar aula experimental grátis', igual às outras páginas de curso (ex.: 13-14-anos). Manter 'Ver os módulos' como secundário.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: O DS §1.3 define 'primário = agendar aula experimental'. O botão 'Conhecer as Academies' abre o WhatsApp (href WHATSAPP, L284 e L478), como mostra cursos__academies/mobile.fold.png. O texto de evidência do achado (que fala das métricas) não corresponde ao problema; a alegação em si procede.

<a id="f204"></a>

## F204 · 🟡 Nome do curso muda entre páginas: CREATE1 no overview, 'CREATE Ano 1' na sales page

- **Rotas:** `/cursos/create`, `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:242](../../../../src/routes/cursos.create.8-9-anos.tsx#L242)
- **Evidência:** cursos.create.index.tsx:65-111 cards com id 'CREATE1'…'CREATE6' e hero 'CREATE1 a CREATE6' (l.234); cursos.create.8-9-anos.tsx:46 title 'CREATE Ano 1', :242 eyebrow 'CREATE Ano 1 · 8 a 9 anos', :211 FAQ 'A trilha vai até o Ano 5/6'. JR usa 'JR1' em ambos os níveis (cursos.junior.5-6-anos.tsx eyebrow 'JR1 · 5 a 6 anos'). DESIGN_SYSTEM §1.6: eyebrow deve mostrar `{programa}{n} · {idade}`.
- **Problema:** O pai clica em 'CREATE2' e chega em 'CREATE Ano 2' — funciona, mas exige tradução mental e mina a sensação de sistema único; no WhatsApp ele vai dizer 'Ano 2' e a escola registra 'CREATE2'. Quebra a convenção oficial do design system.
- **Correção sugerida:** Nas 6 rotas cursos.create.*-anos.tsx: eyebrow 'CREATE1 · 8 a 9 anos' (etc.), title 'CREATE1 (8 a 9 anos) — Fundamentos do Arcade \| Santos Tech', courseName e textos 'Ano N' → 'CREATEN'; na FAQ de 8-9-anos:211 trocar 'vai até o Ano 5/6' por 'vai até o CREATE6 (Unity + C#)'.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Confirmado: 8-9-anos:46 e :242 usam 'CREATE Ano 1'; 10-11-anos:229 'CREATE Ano 3'; create.index.tsx:65-111/234 usa CREATE1…CREATE6. DESIGN_SYSTEM.md:87 exige eyebrow `{programa}{n} · {idade}`. FAQ :211 'Ano 5/6' é hedge incoerente.

<a id="f205"></a>

## F205 · 🟡 JR3 promete 'Faixa Branca do CREATE', um sistema que não existe nas páginas CREATE

- **Rotas:** `/cursos/junior`, `/cursos/junior/7-8-anos`, `/cursos/create/8-9-anos`
- **Onde:** [src/routes/cursos.junior.7-8-anos.tsx:234](../../../../src/routes/cursos.junior.7-8-anos.tsx#L234)
- **Evidência:** cursos.junior.7-8-anos.tsx:234, 270, 305, 355 e cursos.junior.index.tsx:567 falam em 'Faixa Branca do CREATE' / 'Pré-Faixa Branca'. cursos.create.8-9-anos.tsx:65-70 e 339-356 apresentam a progressão do CREATE como 'Insígnias Pixel' — nenhuma faixa. DESIGN_SYSTEM §11 lista 'belts' (faixas) como vocabulário de concorrente a evitar.
- **Problema:** O pai de um JR3 vai à página do CREATE1 procurar a 'Faixa Branca' e não encontra; parece que leu sobre outra escola. Além de contradizer o guia da marca, a ponte JR→CREATE (o principal argumento de continuidade/renovação) fica incoerente.
- **Correção sugerida:** Em cursos.junior.7-8-anos.tsx:32, 140, 154, 171, 179, 187 e 234 trocar 'Faixa Branca do CREATE' por 'CREATE1 — Fundamentos do Arcade' (em :234 com <Link to="/cursos/create/8-9-anos">). Em :171 'programação por níveis (do CREATE1 ao CREATE6)'.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Confirmado em 7-8-anos:32,140,154,171,179,187,234. Linhas 270/305/355 e cursos.junior.index.tsx:567 citadas não contêm o termo (grep -i). CREATE usa Insígnias Pixel; DESIGN_SYSTEM.md:641 veta 'belts'.

<a id="f206"></a>

## F206 · 🟡 Sem navegação entre cursos irmãos (anterior/próximo); FAQ cita o Ano 2 sem link

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`
- **Onde:** [src/components/course-page.tsx:966](../../../../src/components/course-page.tsx#L966)
- **Evidência:** course-page.tsx:966-973 CourseCtaFinal só aceita um secondaryCta ('Voltar ao CREATE'/'Voltar ao programa JR', routes/cursos__create__8-9-anos/mobile.seg13.png). cursos.create.8-9-anos.tsx:209-212 FAQ 'E depois do Ano 1?' descreve o Ano 2 em texto puro; JR3 (7-8-anos.tsx:305) fala do CREATE sem link. dom.genericLinks vazio; nenhum link para rota irmã nas 9 páginas.
- **Problema:** O pai que acha o curso 'avançado demais' ou 'básico demais' para o filho precisa voltar ao overview e reescolher — dois cliques e perda de contexto. A trilha de 6 anos, principal argumento de retenção, não é navegável.
- **Correção sugerida:** Em course-page.tsx, CourseCtaFinal: adicionar `siblings?: { prev?: { href; label }; next?: { href; label } }` e renderizar abaixo dos botões um `<nav aria-label="Trilha" className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-white/85">` com `<Link className="inline-flex items-center gap-1.5 py-2">← CREATE 1 · 8-9 anos</Link>` / `CREATE 3 →`. Nas 9 rotas, na FAQ 'E depois do Ano 1?', trocar o texto 'Ano 2 (9-10 anos)' por `<Link to="/cursos/create/9-10-anos" className="font-bold underline underline-offset-4">Ano 2 (9-10 anos)</Link>` (FaqItem.a já aceita ReactNode). Primeiro/último curso mostram só um lado.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: grep 'to="/cursos/(create\|junior)/' nas 9 rotas de curso retorna vazio; CourseCtaFinal (966-973) só aceita 1 secondaryCta e todas apontam pro overview. FAQ 8-9-anos.tsx:209-212 cita Ano 2 em texto puro. Ressalva: JR3 (7-8-anos.tsx:384) tem CTA 'Conheça o CREATE' no final, só o BridgeBanner (305) é sem link.

<a id="f207"></a>

## F207 · 🟡 Nenhuma prova social nas sales pages e overviews de programa

- **Rotas:** `/cursos/junior`, `/cursos/create`, `/cursos/academies`, `/cursos/create/8-9-anos`, `/cursos/junior/5-6-anos`, `/cursos/camps`
- **Onde:** [src/components/course-page.tsx:832](../../../../src/components/course-page.tsx#L832)
- **Evidência:** grep -rl 'Testimonials' em src retorna só src/routes/index.tsx e src/components/testimonials.tsx. Sequência das 9 páginas (headings em desktop.json): Hero → Proposta → Para quem é → Formato → Progressão → Módulos → Ementa → Ferramentas → Metodologia → FAQ → CTA — nenhum depoimento, nota Google ou número de alunos.
- **Problema:** Curso anual de alto valor vendido por 12 mil px de argumento da própria escola, sem uma voz de pai. A Metodologia (course-page.tsx:832-874) afirma 'professores treinados', 'turmas pequenas' sem evidência externa — a objeção 'isso funciona mesmo?' fica sem resposta antes do CTA.
- **Correção sugerida:** Não filtrar por programa: REVIEWS em testimonials.tsx não têm tag de programa. Criar `<TestimonialsCompact theme quotes={[...]} />` em src/components/testimonials.tsx (2 cards, sem GSAP, grid sm:grid-cols-2, card `rounded-xl border-2 bg-white p-7` com borderColor `${theme.soft}66` igual à MethodologySection, Star em theme.primary) e inserir entre MethodologySection e FaqSection nas 9 rotas + overviews. Nas páginas infantis usar as citações de pais (Eduardo Nascimento); em Academies as de alunos de programação/3D. Sem 'Nota 4,9 · N famílias' até haver número real verificado.
- **Esforço:** médio · **Severidade:** Média
- **Verificação:** confirmado: grep -i testimonial/depoimento em src/routes/cursos.*.tsx e course-page.tsx: zero. Componente Testimonials só é importado em src/routes/index.tsx. Headings de cursos__create__8-9-anos/desktop.json confirmam sequência Hero→…→Metodologia→FAQ→CTA sem nenhuma prova social. DEFAULT_PILLARS (825-830) afirma sem evidência externa.

<a id="f208"></a>

## F208 · 🟡 Colônia: 'período integral' sem horário, sem datas da próxima edição e sem dizer se inclui refeição

- **Rotas:** `/cursos/camps`
- **Onde:** [src/routes/cursos.camps.tsx:46](../../../../src/routes/cursos.camps.tsx#L46)
- **Evidência:** cursos.camps.tsx:46-51 METRICS 'Seg–Sex / Dia todo / Por semana / 2×/ano' (nenhum horário); :68 'As datas de cada edição saem com antecedência'; :106-108 FAQ 'As datas exatas… no WhatsApp'; :73-76 INCLUSO só 'Período integral' e 'Tecnologia, arte, cultura e recreação'. Hero CTA 'Garantir a vaga' (l.202) sem data. routes/cursos__camps/mobile.seg06.png e seg07.png.
- **Problema:** O pai que trabalha compra a Colônia por três respostas: que horas deixo e busco, quais dias exatos, meu filho almoça lá? Nenhuma está na página. 'Garantir a vaga' sem data é promessa vazia e leva a uma conversa de WhatsApp que a página deveria ter poupado.
- **Correção sugerida:** Pedir ao Henrique o horário real de entrada e saída, se a colônia inclui almoço/lanche e as datas da próxima edição. Com os dados em mãos: na métrica 'Dia todo' (L48), trocar por o horário real; completar INCLUSO (L73-76) com a alimentação; e adicionar um bloco 'Próxima edição: dd/mm a dd/mm' acima de PRECOS. Sem dado, não publicar nada inventado.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: cursos.camps.tsx:46-51 não traz nenhum horário, INCLUSO (L73-76) não fala de alimentação e o FAQ da L106-108 manda as datas para o WhatsApp. A dúvida óbvia do pai que trabalha fica sem resposta. A correção depende de dados de negócio.

<a id="f209"></a>

## F209 · 🟡 Trilha Pixel promete 5 conquistas e 'Pixel Iniciante', mas exibe 4 insígnias

- **Rotas:** `/cursos/create/8-9-anos`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:350](../../../../src/routes/cursos.create.8-9-anos.tsx#L350)
- **Evidência:** cursos.create.8-9-anos.tsx:48 meta description 'Trilha de Insígnias Pixel com 5 conquistas'; :349-350 'Já na primeira aula seu filho recebe a insígnia Pixel Iniciante'; :65-70 INSIGNIAS tem 4 itens (Aprendiz, Construtor, Estrategista, Criador), renderizados em ProgressionTrail (routes/cursos__create__8-9-anos/mobile.seg05.png e seg06.png); FAQ :207 lista 4.
- **Problema:** O pai lê '5 conquistas' e 'Pixel Iniciante', conta 4 círculos e não encontra a Iniciante. Em página que vende 'transparência total' (l.615), uma contagem que não bate corrói exatamente o argumento de progressão visível.
- **Correção sugerida:** Remover a menção a 'Pixel Iniciante' em :349-350 (ex.: 'A cada módulo seu filho conquista uma nova insígnia…') e mudar a meta :48 para 'Trilha de Insígnias Pixel com 4 conquistas + Selo CREATE1'. Só adicionar um 5º badge se ele de fato existir no Portal.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Meta :48 diz '5 conquistas'; :350 cita 'Pixel Iniciante'; INSIGNIAS :65-70 tem só 4 itens e FAQ :207 lista 4. Contagem inconsistente na própria página.

<a id="f215"></a>

## F215 · 🟡 Hierarquia de CTA invertida: "Entrar na conta"/"Login" é o botão mais forte, WhatsApp é item cinza

- **Rotas:** `/particular`, `/particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:568](../../../../src/routes/particular.tsx#L568)
- **Evidência:** particular.tsx:568-577: <a href="https://auth.santos-tech.com"> com `bg-[#0DB88F] text-white font-bold` (única cor primária sólida da sidebar); 604-609: topbar mobile com pill preta "Login". Já "Falar no WhatsApp" (540-550) usa `text-neutral-500` como item de menu comum. Screenshots: todo mobile.fold (excel, python, canva, revit…) mostra "Login" preto no canto superior direito; desktop.fold mostra "Entrar na conta" verde fixo no rodapé da sidebar.
- **Problema:** O visitante é um prospect, não aluno matriculado — login não tem valor para ele, mas recebe o peso visual de CTA primário (DESIGN_SYSTEM §1.3: um CTA dominante, primário = falar/agendar). No mobile, a única ação persistente da barra é "Login". Custo: atenção e cliques desviados para um destino sem conversão (auth.santos-tech.com).
- **Correção sugerida:** Rodapé da sidebar: `<a href={WHATSAPP_URL.courses} target="_blank" rel="noreferrer" className="... bg-[#0DB88F] text-white font-bold">Falar no WhatsApp</a>`, com login como link texto `text-xs sb-fg-soft` ("Já é aluno? Entrar"). Topbar mobile (604): trocar a pill "Login" por um botão verde de WhatsApp e levar o login para dentro do drawer. Remover o item cinza duplicado (540-550).
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: particular.tsx:568-577: login com bg-[#0DB88F], o único botão sólido; WhatsApp (540-550) é text-neutral-500; topbar mobile (604-609) tem só "Login" em destaque. Rebaixado para media porque o conteúdo das páginas já traz CTAs próprios de WhatsApp.

<a id="f219"></a>

## F219 · 🟡 Sem caminho de volta ao site principal nem links legais: logo não é link e não há header/footer global

- **Rotas:** `/particular`, `/particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:349](../../../../src/routes/particular.tsx#L349)
- **Evidência:** particular.tsx:349-356 e 589: <Img name="logo"> sem <Link> ao redor (sidebar e topbar). __root.tsx:200-201 remove SiteHeader/SiteFooter em /particular. Footer da landing (particular.index.tsx:612-685) só tem categorias, WhatsApp e e-mail; footer das 52 páginas é só "©" (common.tsx:372-374). Nenhum link para "/", /cursos (infantil), /sobre, /contato, /privacidade ou /termos — embora CookieConsent apareça em /particular (__root.tsx:198). landmarks mobile: header 0, footer 0/1.
- **Problema:** Um pai que entra em /particular por engano (ou um adulto que quer ver a escola/"Sobre nós" antes de pagar R$ 4–10 mil) não consegue ir para o site institucional sem editar a URL. O banner de cookies pede consentimento sem oferecer a política de privacidade na página. Custo: beco sem saída + risco de percepção de site "solto".
- **Correção sugerida:** Envolver o <Img name="logo"> da sidebar (349) e da topbar (589) em `<Link to="/" aria-label="Ir para o site da Santos Tech">`. No footer da landing e no © de common.tsx:372 acrescentar links: "Cursos para crianças" → /cursos, "Sobre a escola" → /sobre, "Privacidade" → /privacidade, "Termos" → /termos.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado: logo sem Link, __root.tsx:200 renderiza só <Outlet/>, rodapé do curso é só © (common.tsx:372-374). Mas o argumento dos cookies está errado: cookie-consent.tsx:313 e :397 já linkam /privacidade. Botão voltar existe, então não é beco sem saída total. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f220"></a>

## F220 · 🟡 Prova social sem verificação: nota Google sem link, stat duplicado e zero depoimentos em toda a área particular

- **Rotas:** `/particular`, `/particular/cursos/*`
- **Onde:** [src/routes/particular.index.tsx:216](../../../../src/routes/particular.index.tsx#L216)
- **Evidência:** particular.index.tsx:216-231: "329 avaliações ★★★★★ 5,0 no Google" em <span>, sem <a> para o perfil do Google. 233-244: grid com "+300 alunos formados", "+300 carreiras transformadas" (mesmo número, rótulos redundantes) e "5,0★ nota no Google" (repete a linha imediatamente acima — visível em mobile.fold). Headings de /particular e das 52 rotas (dom.headings) não contêm nenhuma seção de depoimentos; grep por depoimento/testimon em particular*/course-skins só acha "avalia o seu nível"/"avaliação técnica".
- **Problema:** Para um ticket de R$ 4–10 mil, a única prova é um número não clicável e dois stats iguais — parece preenchimento. DESIGN_SYSTEM §13 exige "especificidade como prova" e proíbe estatística sem fonte. Custo: objeção "isso é sério?" fica sem resposta.
- **Correção sugerida:** 1) Envolver a linha '329 avaliações ★★★★★ 5,0 no Google' (:216-230) num <a href="https://www.google.com/maps/search/?api=1&query=Escola+Santos+Tech+Ribeir%C3%A3o+Preto" target="_blank" rel="noreferrer"> (mesma URL já usada em src/components/testimonials.tsx:76). 2) No grid :233-237 remover o item '+300 carreiras transformadas' e o '5,0★ nota no Google' (duplica a linha acima); trocar por '52 cursos' e '8 áreas' (dados reais já citados em PILARES). 3) Reusar <Testimonials /> (já existe e é usado na home) na landing /particular, só com depoimentos reais de alunos adultos; sem dado real, não criar.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Confirmado: :216-230 é <span> sem link; :234-236 repete '+300' e '5,0★'. Porém já existe src/components/testimonials.tsx (home) com link do Google — dá para reusar. 'Depoimento por curso' não tem dado real; fica fora. Não é crítica. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f221"></a>

## F221 · 🟡 Custo total do curso nunca aparece: matrícula e material ficam em card separado do preço

- **Rotas:** `/particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:249](../../../../src/components/course-skins/common.tsx#L249)
- **Evidência:** common.tsx:249-256 mostra "12x de R$ 380,46 · ou R$ 4.565,50 à vista"; 283-295 renderiza CUSTOS_UNICOS (R$ 199,90 + R$ 389,90) em outro card, abaixo. Excel mobile.seg12: o card de preço termina no CTA "Quero o Excel Avançado" e só depois vem "Custos únicos — pagos uma vez só". O total real (4.565,50 + 589,80 = R$ 5.155,30) não é exibido em lugar nenhum.
- **Problema:** O aluno ancora em R$ 4.565,50 e descobre +R$ 589,80 depois (ou só no WhatsApp) — sensação de letra miúda, justamente o que a §9.4 pede para evitar em sales page. Custo: atrito na negociação e desconfiança.
- **Correção sugerida:** Em shared.tsx:206 dar valor numérico aos custos (`{ label, value: 199.9 }` + formatBRL na renderização) e exportar `CUSTOS_UNICOS_TOTAL = 589.8`; em getInvestimento devolver também `total` numérico. Em common.tsx após a linha 255 (e no equivalente particular-course-page.tsx) renderizar `<p className={`mt-1.5 ${small} ${look.muted}`}>+ {formatBRL(CUSTOS_UNICOS_TOTAL)} de matrícula e material (uma vez) · total {formatBRL(total + CUSTOS_UNICOS_TOTAL)}</p>`. Manter o card detalhado abaixo.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Preço em common.tsx:249-256, custos únicos em 283-295 (CUSTOS_UNICOS shared.tsx:206-209); nenhum total somado. Evidência correta é excel/mobile.seg13.png (não seg12): card termina no CTA e só depois vem 'Custos únicos'. FAQ 'Quanto custa?' (particular-faq-items.ts:33-34) também não dá o total. §9.4 não fala em 'letra miúda' literalmente, mas o problema existe.

<a id="f222"></a>

## F222 · 🟡 Fold das páginas de curso não mostra preço nem duração em várias peles; informação varia por pele

- **Rotas:** `/particular/cursos/excel`, `/particular/cursos/word`, `/particular/cursos/powerpoint`, `/particular/cursos/python`, `/particular/cursos/typescript`, `/particular/cursos/jogos`, `/particular/cursos/ia`, `/particular/cursos/chatgpt`, `/particular/cursos/agentes-ia`
- **Onde:** [src/components/course-skins/planilha.tsx:186](../../../../src/components/course-skins/planilha.tsx#L186)
- **Evidência:** planilha.tsx:186-204 (hero) e ide.tsx:70-93: tag, H1, tagline e botão — sem carga horária, ritmo ou preço. excel/word/powerpoint mobile.fold e python/typescript/jogos mobile.fold confirmam. Já ti (redes/ciberseguranca/manutencao mobile.fold) mostra "48 aulas · ~3 meses · ~6 meses", oficina (revit/autocad) "48 aulas · 1h cada", informatica "48 aulas · Só você e o professor · Presencial". O preço só aparece no seg12 de 14 (excel) em todas as peles; secundário "Ver o conteúdo ↓" só existe em design e marketing.
- **Problema:** A pergunta nº 1 do adulto (quanto custa / quanto tempo) só é respondida a 80% da rolagem, e a resposta muda de lugar conforme a pele. Quem chega direto do Google numa página Office ou Programação vê só um botão "Quero saber mais" e não tem âncora para pular ao investimento. Custo: abandono antes do preço e inconsistência entre 52 páginas da mesma loja.
- **Correção sugerida:** Nas peles planilha (planilha.tsx:196, após a tagline) e ia (ia.tsx:123+), exibir `{meta?.aulas ?? tier.totalHours} · 1h cada · Só você e o professor`, como já fazem oficina.tsx:197 e design.tsx:272. Adicionar `id="investimento" className="scroll-mt-16"` à seção Planos (common.tsx:221) e um link secundário 'Ver investimento ↓'. Não pôr preço no hero sem decisão do Henrique.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Confirmado para planilha (planilha.tsx:186-204 sem carga) e ia. A pele ide mostra aulas/nível na status bar (ide.tsx:128-130, 11px). As peles design, marketing, ti, oficina e informatica já mostram as aulas no hero (design.tsx:272, marketing.tsx:298, ti.tsx:87). A seção Planos não tem id. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f224"></a>

## F224 · 🟡 Jargão de curadoria interna vaza no hero: "Office Específico", "Office + IA"

- **Rotas:** `/particular/cursos/excel`, `/particular/cursos/word`, `/particular/cursos/powerpoint`, `/particular/cursos/power-bi`, `/particular/cursos/power-apps`, `/particular/cursos/excel-ia`
- **Onde:** [src/routes/particular.cursos.excel.tsx:19](../../../../src/routes/particular.cursos.excel.tsx#L19)
- **Evidência:** grep de `categoria:` nas 52 rotas: 5× "Office Específico", 1× "Office + IA", 1× "Pacote Office", 1× "Office" (as demais áreas são coerentes com o label do grupo). planilha.tsx:188-190 renderiza no hero "A1 · PARTICULAR · OFFICE ESPECÍFICO" — visível em excel desktop.fold e mobile.fold, word desktop.fold, powerpoint mobile.fold. Na sidebar o grupo se chama "Office".
- **Problema:** "Office Específico" é rótulo do processo de curadoria (Teste do Tier), não linguagem do cliente; o adulto lê como erro ou categoria estranha, e a etiqueta não bate com a área do menu. Ruído na primeira linha da página.
- **Correção sugerida:** Duplicado do F377, corrigir junto: usar categoria: "Office" em excel, word, powerpoint, power-bi, power-apps, excel-ia e office. Conferir o skin ide.tsx:74, que usa slug(course.categoria).
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Excel.tsx:19 tem "Office Específico", o mesmo valor de word:19, powerpoint:21, power-bi:19 e power-apps:20. Planilha.tsx:189 renderiza `{v.tag} · Particular · {course.categoria}` no eyebrow, e o grupo da sidebar se chama "Office". Mesmo achado do F377.

<a id="f225"></a>

## F225 · 🟡 CTA da pele IA imita uma caixa de chat: parece campo para digitar, mas é um link

- **Rotas:** `/particular/cursos/ia`, `/particular/cursos/agentes-ia`, `/particular/cursos/chatgpt`, `/particular/cursos/rag`, `/particular/cursos/ia-visual`, `/particular/cursos/conteudo-ia`
- **Onde:** [src/components/course-skins/ia.tsx:73](../../../../src/components/course-skins/ia.tsx#L73)
- **Evidência:** ia.tsx:73-95: componente Composer é um <a href={whatsappUrl}> com visual de input (fundo branco, ícone, texto "Como uso IA para ganhar horas na minha semana…" em MUTED) e botão "Quero saber mais ↑". dom.ctas de /ia registra o link como "Como uso IA para ganhar horas na minha semana? Quero saber m…" (texto do placeholder vira nome do CTA). Screenshots ia desktop.fold, agentes-ia e chatgpt mobile.fold. Abaixo há aviso "A IA pode errar…" reforçando a ideia de chat funcional.
- **Problema:** O usuário tenta tocar/digitar na "caixa" e é jogado para o WhatsApp — affordance falsa (HIG: controles devem parecer o que fazem; entering-data). Leitor de tela anuncia uma frase-pergunta como nome do link. O ícone ↑ sugere "enviar" dentro do site, não abrir app externo.
- **Correção sugerida:** Confirmado: ia.tsx:73-95 `Composer` é `<a>` inteiro com visual de input + texto em MUTED + ícone ArrowUp; :133 reforça com 'A IA pode errar'. Reescrever: `<div className="… ">` (mesmo visual) contendo `<span aria-hidden="true">…{placeholder}</span>` e o `<a href={href} target="_blank" rel="noreferrer" aria-label={`Falar no WhatsApp sobre o curso ${nomeCurto(course)}`} className="inline-flex … bg-(--accent) …"><WhatsAppIcon/> Falar no WhatsApp</a>`; remover `ArrowUp`. Manter hover só no botão (`hover:bg-(--accent-hover)`), tirar `group hover:border` do container. Alternativa menor: manter `<a>` no container mas adicionar `aria-label` e trocar a seta por `ExternalLink` — resolve a11y, não a affordance.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: ia.tsx:73-95: Composer é <a> com aparência de input (bg-white, Sparkles, placeholder em MUTED, botão com ArrowUp); :133 'A IA pode errar…' logo abaixo. ia/mobile.json dom.ctas registra o link como 'Como uso IA para ganhar horas na minha semana? Quero saber m…'. ia desktop.fold.png confirma o visual de campo de chat. Sem aria-label corrigindo o nome acessível.

<a id="f227"></a>

## F227 · 🟡 Rodapé das 52 páginas de curso é só o "©": sem telefone, endereço, horário ou e-mail

- **Rotas:** `/particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:372](../../../../src/components/course-skins/common.tsx#L372)
- **Evidência:** common.tsx:372-374: `<p>© {ano} Santos Tech — Todos os direitos reservados.</p>` é o último elemento; CTA final (353-370) não traz telefone/endereço. python mobile.seg13 e excel mobile.footer mostram o CTA seguido apenas da linha de copyright. dom.landmarks: footer = 0 nas 52 rotas. WHATSAPP_EXIBICAO (shared.tsx:222) é exportado e nunca usado nas peles. O endereço aparece só dentro do card "100% presencial" (206) e o número de telefone em lugar nenhum da página.
- **Problema:** Adulto que prefere ligar, ver o mapa ou anotar o endereço não encontra nada ao chegar ao fim de 13 mil px — o único caminho é o WhatsApp. Quebra o padrão do próprio site (landing /particular tem endereço, horário, telefone, e-mail e mapa em 531-685).
- **Correção sugerida:** Extrair o `<footer>` de particular.index.tsx:612-685 para `src/components/particular-footer.tsx` (fundo `bg-neutral-900`, texto branco/neutral-500 — funciona sobre qualquer pele) recebendo `whatsappUrl`; renderizar em common.tsx no lugar do `<p>©` (372-374) dentro de `<footer className="sb-bleed ...">` e reusar na landing para não duplicar. Usar WHATSAPP_PHONE_DISPLAY de src/lib/whatsapp.ts e apagar o WHATSAPP_EXIBICAO morto de shared.tsx:222.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: __root.tsx:199-201 renderiza só <Outlet/> em /particular, sem SiteFooter; common.tsx:372-374 é o último elemento (só ©). excel/mobile.footer.png confirma; landmarks footer=0 nos mobile.json. WHATSAPP_EXIBICAO (shared.tsx:222) não é usado. Landing tem footer completo em particular.index.tsx:612-685 (não particular.tsx).

<a id="f229"></a>

## F229 · 🟡 Landing não menciona certificado, reagendamento e aula online — diferenciais que só aparecem dentro dos cursos

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:94](../../../../src/routes/particular.index.tsx#L94)
- **Evidência:** DIFERENCIAIS da landing (particular.index.tsx:94-115): "Aula 100% individual", "100% presencial", "Ferramentas reais", "Conteúdo Sempre Atualizado" (mobile.seg06-07). DIFERENCIAIS compartilhados das páginas de curso (shared.tsx:118-169) têm 10 itens incluindo "Reagendamento sem Custo", "Aulas Gravadas a Pedido", "Aula Online se Precisar", "Certificado Reconhecido". FAQ da landing (particular-faq-items.ts:12-40) também não fala de certificado nem de falta/reposição.
- **Problema:** As objeções mais comuns do adulto que trabalha ("e se eu faltar?", "tem certificado?", "e se eu não puder ir presencialmente?") só são respondidas depois de escolher um curso. Na landing, "100% presencial" sem "online se precisar" pode afastar quem viaja. Custo: perda antes de chegar a qualquer página de curso.
- **Correção sugerida:** Criar dois itens em PARTICULAR_FAQ_ITEMS (src/components/particular-faq-items.ts): "E se eu precisar faltar?" (reagendamento sem custo) e "Tem certificado?". Trocar ou complementar o card "100% presencial" por "Presencial, com opção online se precisar", reaproveitando os textos de DIFERENCIAIS em components/course-skins/shared.tsx.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: O array local em particular.index.tsx:94-115 tem 4 itens, sem certificado, reagendamento ou online. As 6 perguntas do FAQ (particular-faq-items.ts:13-33) cobrem horário, dias, duração e preço, mas não falta nem certificado. Esses diferenciais existem em course-skins/shared.tsx.

<a id="x01"></a>

## X01 · 🟡 Botão principal do hero some da 1ª tela em notebooks 1280/1366 e celulares 360×640

- **Rotas:** `/`, `/cursos/camps`, `/cursos/academies`, `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`
- **Onde:** [src/hooks/use-reveal.ts:37](../../../../src/hooks/use-reveal.ts#L37)
- **Evidência:** Medição ao vivo (dev :5199, 1,5–3 s após carregar, sem rolar): o link de WhatsApp do hero está dentro da primeira tela, mas com opacidade 0. Em 1366×768: /cursos/academies, create 8-9, 9-10 e 13-14 (top 703–731 px). Em 1280×720: /, /cursos/camps, create 8-9 até 12-13, junior 6-7 e 7-8. Em 360×640: /, camps, junior 5-6, 6-7 e 7-8. Prints: C:/Users/55169/AppData/Local/Temp/claude/C--Users-55169-Documents-GitHub-Santos-Tech-Home-Page--claude-worktrees-elated-swartz-6ae59b/8073a6cc-a85f-4e47-88de-a1d22633d35e/scratchpad/critico/fold-cta-invisivel.1280x720.home.png (espaço vazio onde deveria estar 'Agende uma aula experimental grátis'), fold-cta-invisivel.360x640.cursos__junior__5-6-anos.png e n1366.cursos__create__8-9-anos.png. Causa: o IntersectionObserver compartilhado usa threshold 0.15 e rootMargin '0px 0px -60px 0px' (use-reveal.ts:37), e o Reveal ainda empurra o bloco 24 px para baixo (reveal.tsx:13). O grupo de CTAs do hero está dentro de um Reveal (index.tsx:416, course-page.tsx:239).
- **Problema:** Nos notebooks mais comuns no Brasil (1366×768 e 1280×720) e em celulares Android pequenos, a primeira tela mostra título e texto, mas não o botão de agendar: sobra um buraco no lugar dele. O botão só aparece depois que a pessoa rola a página. A auditoria original não viu porque usou 1440×900 e 390×844, onde por acaso ele aparece. Consequência: o pai que não rola não vê a ação principal. É o pior lugar para perder conversão.
- **Correção sugerida:** Em useReveal, logo após obs.observe(el): se el.getBoundingClientRect().top < window.innerHeight, chamar setVisible(true) e unobserve (quem já está na 1ª tela nasce visível). Não mexer no rootMargin global (afeta o site todo). Tirar o grupo de CTAs do hero do Reveal em index.tsx:416 e course-page.tsx:239 (e nos heros de camps/academies). Validar com prints em 1280×720, 1366×768, 360×640 e 390×844.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado no código: threshold 0.15 + rootMargin -60px (use-reveal.ts:37) + translateY 24px (reveal.tsx:13), e o print 1280×720 mostra o vazio abaixo do texto. Rebaixado porque o botão flutuante de WhatsApp continua visível no canto e ali o CTA já ficaria cortado na dobra. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="x03"></a>

## X03 · 🟡 Endereço, WhatsApp e Instagram em texto morto na home e no /particular (sem toque)

- **Rotas:** `/`, `/particular`
- **Onde:** [src/routes/index.tsx:1124](../../../../src/routes/index.tsx#L1124)
- **Evidência:** index.tsx:1124-1141 (bloco final 'Venha conhecer pessoalmente'): endereço, '(16) 99257-8710', '5,0 no Google · 329 avaliações' e '@escolasantostech' estão todos em <p>, sem link. index.tsx:1068-1079 (cards 'Onde estamos'): endereço e WhatsApp também em <p>. particular.index.tsx:549-550 e 630: endereço em <p>. Um grep por 'tel:' no src não acha nada, e não existe link de rota (maps/dir, Waze) em lugar nenhum. A única forma de chegar é o iframe do Google Maps (index.tsx:1088, contato.tsx:127, particular.index.tsx:569), que carrega sem pedir consentimento e não aparece na Política de Privacidade (privacidade.tsx:81-86 lista os parceiros sem citar o Google). Print do trecho nunca capturado antes: .../scratchpad/critico/tail/home.m.15.png.
- **Problema:** No celular, o pai lê o endereço e o WhatsApp no fim da home, toca, e nada acontece. Para traçar a rota, precisa acertar o link 'Abrir no Maps' de ~11 px dentro do mapa; para seguir o Instagram, precisa copiar o @ à mão. Cada toque sem resposta é um contato que pode não acontecer. De quebra, o iframe manda o IP do visitante ao Google antes de qualquer consentimento, o que contradiz a promessa de privacidade do banner.
- **Correção sugerida:** Transformar em <a> com alvo de 44px ou mais: o endereço vira link para google.com/maps/dir/?api=1&destination=..., o telefone usa WHATSAPP_URL.footer (src/lib/whatsapp.ts:30), o Instagram usa SEO instagram (seo.ts:42) e a nota do Google usa o link de testimonials.tsx:76. Vale nos 2 blocos da home (l.1068-1079 e 1124-1141) e no /particular (l.549-550 e 630). Citar o Google Maps em privacidade.tsx seção 5 ou trocar o iframe por um botão 'Abrir rota'.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Confirmado: tudo em <p> nas linhas citadas, nenhum 'tel:' ou 'maps/dir' no src, e a seção 5 de privacidade.tsx não cita o Google. Ressalva: a home tem um link para o Instagram em outro ponto (index.tsx:999), e o contato.tsx já usa links.

<a id="f184"></a>

## F184 · ⚪ /contato: primeira tela sem CTA e página sem formulário — só WhatsApp/e-mail após rolar

- **Rotas:** `/contato`
- **Onde:** [src/routes/contato.tsx:44](../../../../src/routes/contato.tsx#L44)
- **Evidência:** Hero (contato.tsx:44-52) tem eyebrow, H1 'Vamos conversar' e subtítulo, sem botão; routes/contato/mobile.fold.png mostra a primeira tela terminando no card WhatsApp sem ação clicável explícita (o card é link, mas não parece botão). mobile.json › dom.inputs = [] (não há formulário); único CTA rotulado 'Agendar agora' fica no card azul a ~1.400px (mobile.full.png). Título da rota diz 'Agende uma aula experimental' (15).
- **Problema:** Quem chega em /contato já decidiu falar — e a página faz rolar para achar como. Quem não quer abrir WhatsApp (ou está no desktop sem WhatsApp Web) só tem um mailto para caixa do CEO. Sem formulário não há captura de lead fora do horário de resposta.
- **Correção sugerida:** No hero (contato.tsx:47-51), adicionar o botão `bg-st-green` 'Agendar aula experimental grátis' com href={WHATSAPP}. Formulário próprio de leads fica fora de escopo: exige endpoint no backend e é decisão do Henrique. Registrar em PENDENCIAS.md.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: routes/contato/mobile.fold.png: o card WhatsApp ('toque para abrir o chat') e o FAB verde aparecem na primeira tela, então 'sem CTA' é exagero. Faltam só um botão explícito no hero e uma alternativa ao WhatsApp. O formulário é feature nova, não bug. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f185"></a>

## F185 · ⚪ Mesmo CTA de WhatsApp muda de nome em cada página: 'Agendar visita', 'Agendar agora', 'Começar pelo WhatsApp'

- **Rotas:** `/`, `/sobre`, `/sobre/visao`, `/contato`
- **Onde:** [src/routes/contato.tsx:122](../../../../src/routes/contato.tsx#L122)
- **Evidência:** Todos com href={WHATSAPP_URL.courses}: index.tsx:430 'Agende uma aula experimental grátis', 629 'Começar pelo WhatsApp', 1120 'Agende a aula experimental grátis'; sobre.index.tsx:288 e sobre.visao.tsx:190 'Agendar visita'; contato.tsx:122 'Agendar agora'. sobre.json/sobre__visao.json › dom.ctas = ['AGENDAR VISITA'].
- **Problema:** 'Visita', 'aula experimental' e 'agendar agora' soam como três ofertas diferentes (visita guiada? aula? matrícula?) mas abrem o mesmo chat com a mesma frase. Quebra Familiaridade (HIG) e dilui a oferta única e forte da escola — a aula experimental grátis.
- **Correção sugerida:** Padronizar o CTA primário de WhatsApp como 'Agendar aula experimental grátis' em contato.tsx:122, sobre.index.tsx:288 e sobre.visao.tsx:190. Se a visita ao espaço for uma oferta real, manter 'Agendar visita' como botão secundário, com mensagem própria em whatsapp.ts.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Rótulos confirmados: contato.tsx:122 'Agendar agora', sobre.index.tsx:288 e sobre.visao.tsx:190 'Agendar visita', todos com WHATSAPP_URL.courses. Mas sobre.index.tsx:275 oferece explicitamente 'visita ou aula experimental', então 'visita' não é engano. O pior caso é o vago 'Agendar agora'. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f187"></a>

## F187 · ⚪ Página 404 só oferece 'Voltar ao início' e mantém o título da home na aba

- **Rotas:** `/pagina-que-nao-existe-404`
- **Onde:** [src/routes/__root.tsx:33](../../../../src/routes/__root.tsx#L33)
- **Evidência:** NotFoundComponent (__root.tsx:33-55): H1 '404', texto, um único `<Link to="/">Voltar ao início</Link>`; `min-h-screen` dentro do main gera tela quase vazia (routes/pagina-que-nao-existe-404/mobile.full.png). manifest: title da rota = 'Santos Tech — Cursos de Tecnologia... para Crianças em Ribeirão Preto' (title da home). mobile.json › dom.ctas = [''] (só o FAB).
- **Problema:** Link quebrado de anúncio, Instagram ou bot do WhatsApp (que lê o sitemap) joga o pai numa tela sem programas, sem contato e sem busca. Voltar ao início reinicia a jornada (e dispara o preloader de novo).
- **Correção sugerida:** No NotFoundComponent, abaixo do texto, colocar 3 links: `/cursos` 'Ver programas (5 a 15 anos)', `/particular` 'Cursos particulares', `/contato` 'Falar com a escola'. Botão primário `bg-st-green` com WhatsApp. Trocar `min-h-screen` por `py-24`. Fazer junto com o F331, na mesma mudança.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: __root.tsx:33-55 tem só o H1 404 e um Link 'Voltar ao início', dentro de min-h-screen. Header e FAB continuam disponíveis, então o usuário não fica sem saída. É a mesma tela do F331 e deve ser corrigida junto.

<a id="f191"></a>

## F191 · ⚪ Dois elementos verdes pulsando na primeira tela mobile: CTA do hero e FAB do WhatsApp

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:424](../../../../src/routes/index.tsx#L424)
- **Evidência:** index.tsx:424 CTA primário com `animate-cta-pulse` + `glow-green`; whatsapp-fab.tsx:137-147 dois anéis `animate-pulse-ring` no FAB, visível ao lado do bloco de estrelas em routes/home/mobile.fold.png (canto inferior direito). Ambos abrem WhatsApp, com mensagens diferentes (courses vs fab).
- **Problema:** DS §1.3 pede um CTA dominante por seção. Dois botões verdes animados ao mesmo tempo dividem a atenção e o FAB ainda cobre parte do texto de prova social ('329 avaliações de pais e alunos') no fold. Quem toca no FAB manda a mensagem genérica 'quero conhecer' em vez de 'agendar aula'.
- **Correção sugerida:** Remover 'animate-cta-pulse' do CTA do hero (index.tsx:421) e deixar pulsando só o FAB, ou desligar os anéis do FAB (whatsapp-fab.tsx:36,42) enquanto o hero estiver visível. Esconder o FAB fica opcional.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Os dois pulsos coexistem (styles.css:195-199 e whatsapp-fab.tsx:36/42). Em mobile.fold.png o FAB fica ao lado do texto de avaliações e não o cobre. O argumento da mensagem diferente é secundário, porque as duas levam ao WhatsApp. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f193"></a>

## F193 · ⚪ /links abre todo card em nova aba, inclusive links internos do próprio site

- **Rotas:** `/links`
- **Onde:** [src/routes/links.tsx:112](../../../../src/routes/links.tsx#L112)
- **Evidência:** links.tsx:112-118: `<a href={item.url} target="_blank" rel="noreferrer">` incondicional para todos os itens da vitrine; routes/links/mobile.full.png mostra cards 'Conheça nossos programas' e 'Agende uma aula experimental grátis' (destinos do próprio domínio ou WhatsApp). O ícone 'globo' (77) para o site também é `<a href="/">` sem target — comportamento inconsistente entre os dois.
- **Problema:** Quem vem do Instagram toca em 'Conheça nossos programas' e ganha uma segunda aba do mesmo site no navegador in-app, sem aviso de que abre em nova janela. Multiplica abas e quebra o botão voltar.
- **Correção sugerida:** `const externo = /^https?:\/\//.test(item.url) && !/santos-tech\.com/.test(item.url);` e aplicar `target/rel` só quando `externo`. Links wa.me/instagram continuam em nova aba.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: links.tsx:112-118 aplica target=_blank a todos os cards. O destino vem da API, e a maioria é externa (WhatsApp/Instagram), onde nova aba faz sentido. O problema só existe nos cards com URL do próprio site. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f194"></a>

## F194 · ⚪ Cards de preço: mesmo valor nos dois, diferença real (material) escondida e CTA que não diz o próximo passo

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:731](../../../../src/routes/index.tsx#L731)
- **Evidência:** PRECOS (147-150): dois cards com 'R$ 539,90 por mês' (696-699); a única diferença é 'Material R$ 690/ano' vs 'R$ 290/ano' (linha `p.material`, 722). CTA de cada card 'Quero saber mais' (731). Nota 'Matrícula anual. Você renova a cada ano, só se quiser' está isolada numa seção própria de texto miúdo (592-597), fora do card.
- **Problema:** Pai compara dois cards iguais e não entende por que existem dois; a informação decisiva (é contrato anual de 12 meses) não está no card, o que gera a objeção 'letra miúda' que a própria seção diz não ter. O CTA não avança a jornada ('agendar aula' seria o passo natural após ver o preço).
- **Correção sugerida:** Trocar o CTA "Quero saber mais" (l.731) por "Agendar aula experimental", seguindo a hierarquia do DS l.44. WHATSAPP_URL.pricing não existe: criar `pricing: build("Olá, vi os valores no site e quero agendar uma aula experimental")` em src/lib/whatsapp.ts. Unir os dois cards é decisão de negócio (do Henrique).
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: Exagerado: o card já diz "por mês · curso de 12 meses" (l.698) e os cards diferem no material (l.147-148). Procede só o CTA: DS l.44 define o primário como agendar aula experimental. `WHATSAPP_URL.pricing` citado não existe. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f195"></a>

## F195 · ⚪ Menu mobile exige 3 toques para chegar a qualquer programa e não oferece WhatsApp

- **Rotas:** `todas (header mobile)`
- **Onde:** [src/components/site-header.tsx:45](../../../../src/components/site-header.tsx#L45)
- **Evidência:** site-header.tsx:164-187: 'Programas' é botão accordion com `programsOpen` iniciando false; itens (NavGroup) só aparecem após o segundo toque. specials/menu-mobile-open.png: menu aberto mostra Início, Programas ▾, Sobre ▾, Blog, Contato e o botão 'Entrar' — nenhum número/WhatsApp/endereço. A ação primária do site não existe no menu.
- **Problema:** No celular o menu é o único mapa do site. Pai abre, não vê programas (colapsados) nem um jeito de falar com a escola, vê 'Blog' e 'Entrar'. Custo: toques extras e a saída mais provável é fechar o menu.
- **Correção sugerida:** Listar os programas sem accordion no mobile (ou `useState(true)` para programsOpen só no painel mobile) e acrescentar no fim do menu o CTA primário verde "Agendar aula experimental grátis" (WHATSAPP_URL). Fazer junto com F131 (max-h + scroll), senão o menu fica ainda mais alto.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: programsOpen inicia false (l.45), accordion l.164-187 confirmado. Mas o FAB de WhatsApp continua visível com o menu aberto (menu-mobile-open.png), então "sem jeito de falar com a escola" é exagerado. Mover para lista aumenta altura — depende de F131. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f196"></a>

## F196 · ⚪ Painéis 'Sobre nós' e 'Nossa visão' repetem a home e não puxam para programas/particular

- **Rotas:** `/sobre`, `/sobre/visao`
- **Onde:** [src/routes/sobre.index.tsx:134](../../../../src/routes/sobre.index.tsx#L134)
- **Evidência:** sobre.index.tsx:134 repete literalmente o H1 da home como manifesto; PILARES (38-43) = DIFERENCIAIS da home; NÚMEROS (222-227) = STATS da home. sobre.json/sobre__visao.json › dom.ctas = ['AGENDAR VISITA'] — um CTA cada, no rodapé da página; único link para catálogo é texto 'Ver todos os programas' (200-205). /sobre/visao termina em 'Sobre nós' (193) e /sobre termina em 'Conheça nossa visão' (293): loop entre as duas.
- **Problema:** Quem já viu a home lê tudo de novo; quem chegou pelo Google em /sobre não é levado ao produto (nem infantil por idade, nem particular). O dropdown 'Sobre' com duas páginas de conteúdo sobreposto aumenta a árvore sem adicionar informação.
- **Correção sugerida:** Passo barato: trocar o CTA secundário do final de /sobre (:291 "Conheça nossa visão") e de /sobre/visao (:193 "Sobre nós") por links para /cursos e /particular ("Ver programas"). Fundir as páginas e atualizar o sitemap é decisão de escopo do Henrique, fica para depois.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: Confirmado: o manifesto em sobre.index.tsx:134 repete o H1 da home (index.tsx:403), e os CTAs finais se apontam um para o outro (sobre.index:291 → /sobre/visao, visao:193 → /sobre). Já existe link para /cursos em :201, então dizer que não leva ao produto é exagero. Fundir as páginas mexe em rota e sitemap. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f210"></a>

## F210 · ⚪ Card 'Não sabe por qual começar?' em /cursos é beco sem saída, sem link nem CTA

- **Rotas:** `/cursos`
- **Onde:** [src/routes/cursos.index.tsx:292](../../../../src/routes/cursos.index.tsx#L292)
- **Evidência:** cursos.index.tsx:292-305: div com h3 'Não sabe por qual começar?' e parágrafo 'Na conversa a gente indica o ponto de partida ideal' — nenhum <a>/<Link> dentro. routes/cursos/mobile.full.png mostra o card entre as famílias e o CTA final.
- **Problema:** É exatamente o pai indeciso — o lead mais quente para atendimento consultivo — e o card promete 'a conversa' sem oferecer o caminho para ela. Ele precisa rolar até o CTA final e clicar num botão genérico.
- **Correção sugerida:** Após o <p> (l.~304) adicionar `<a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-black uppercase tracking-wider text-primary hover:underline">Pedir indicação no WhatsApp <ArrowRight className="h-4 w-4" /></a>` (usar whatsappFor só se o helper existir).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Card :292-305 promete 'Na conversa a gente indica…' sem link. Rebaixado: o CTA final vem logo na seção seguinte, então não é beco sem saída real.

<a id="f211"></a>

## F211 · ⚪ Breadcrumb do curso tem alvo de 16px, contraste reduzido e não leva a 'Programas'

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`
- **Onde:** [src/components/course-page.tsx:207](../../../../src/components/course-page.tsx#L207)
- **Evidência:** course-page.tsx:207-212: <Link> com 'text-xs … text-white/70', sem padding; mobile.json › dom.smallTargets registra {label:'PROGRAMA CREATE', size:'146x16'} e {label:'PROGRAMA JR', size:'112x16'}. O JSON-LD (coursePageSchemas) declara Início › Programas › CREATE › curso, mas a UI só mostra um nível.
- **Problema:** É a única navegação estrutural da sales page e no celular tem 16px de altura (WCAG 2.5.8 pede ≥24px) — o pai erra o toque e desiste. Sem o nível 'Programas', voltar para comparar JR × CREATE exige o menu.
- **Correção sugerida:** course-page.tsx:205-213: substituir o Link único por `<nav aria-label="Navegação estrutural" className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs font-bold uppercase tracking-wider">` com `<Link to="/cursos" className="inline-flex items-center py-2 text-white/75 hover:text-white">Programas</Link>`, separador `<span aria-hidden className="px-1 text-white/40">/</span>`, `<Link to={breadcrumb.href} className="inline-flex items-center py-2 text-white/90 hover:text-white">{breadcrumb.label}</Link>`. Manter o ArrowRight rotacionado só no primeiro item. `py-2` leva o alvo a ~32px (WCAG 2.5.8).
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: course-page.tsx:207-212: text-xs text-white/70, sem padding; mobile.json de 8-9-anos e junior 5-6 registram 'PROGRAMA CREATE' 146x16 e 'PROGRAMA JR' 112x16. seo.ts:302 declara nível 'Programas' ausente na UI. Baixa mantida: link isolado (mt-6, sem alvo vizinho) tende a passar pela exceção de espaçamento do 2.5.8; contraste white/70 não foi medido.

<a id="f212"></a>

## F212 · ⚪ FAQ das sales pages usa siglas internas (JR, JR3, CREATE Ano 1) como se o pai já conhecesse

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:186](../../../../src/routes/cursos.create.8-9-anos.tsx#L186)
- **Evidência:** cursos.create.8-9-anos.tsx:186 'Meu filho não fez o JR. Pode entrar direto no CREATE Ano 1?'; :190 'Qual a diferença pro JR3?'; :191 resposta cita 'JR3', 'trilha CREATE' sem link. routes/cursos__create__8-9-anos/mobile.seg12.png. Como as sales pages são o ponto de entrada via Google (ver achado de órfãs), o pai chega sem contexto.
- **Problema:** Pergunta de FAQ deve ser a pergunta que o pai faria; ninguém que entrou pelo Google pergunta 'qual a diferença pro JR3?'. Sigla sem explicação vira ruído e a objeção real ('meu filho nunca programou, pode entrar?') fica escondida atrás dela.
- **Correção sugerida:** l.186: "Meu filho nunca programou. Pode começar direto aqui, aos 8 anos?"; l.190: "Qual a diferença para o programa JR (5 a 8 anos)?", com <Link to="/cursos/junior"> na resposta. Replicar nas outras páginas CREATE.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: cursos.create.8-9-anos.tsx:186 e :190-191 usam "JR", "JR3" e "trilha CREATE" sem explicar nem linkar. Quem chega pelo Google não conhece as siglas.

<a id="f213"></a>

## F213 · ⚪ Academies alterna 'Robotics Academy / AI Academy' na UI com 'Academia de Robótica / IA' no título e no schema

- **Rotas:** `/cursos/academies`
- **Onde:** [src/routes/cursos.academies.tsx:89](../../../../src/routes/cursos.academies.tsx#L89)
- **Evidência:** cursos.academies.tsx:51 title 'Academia de Robótica e Academia de IA'; :243 e :251 schema 'Academia de Robótica'/'Academia de IA'; :89 e :108 cards na tela 'Robotics Academy' e 'AI Academy'; FAQ :144-149 repete em inglês. routes/cursos__academies/mobile.fold.png.
- **Problema:** O pai vem da busca 'robótica para crianças Ribeirão Preto', o título promete 'Academia de Robótica' e a página mostra 'Robotics Academy' — quebra de expectativa e nome difícil de repetir no WhatsApp (DESIGN_SYSTEM §13: português BR, caloroso).
- **Correção sugerida:** Padronizar em português nos cards (l.89, l.108), FAQ (l.137-161) e l.376: "Academia de Robótica" e "Academia de IA", coerente com o title (l.51) e o schema (l.243/251). O nome do produto é decisão do Henrique.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado: o title e o schema estão em PT (l.51, 243, 251) e a tela está em inglês (l.89, 108, 137, 144, 148, 153, 161, 376). A troca de texto é trivial, mas mexe no nome do produto.

<a id="f223"></a>

## F223 · ⚪ Nome do curso muda entre sidebar, H1, card de preço e CTA

- **Rotas:** `/particular/cursos/ia`, `/particular/cursos/revit`, `/particular/cursos/photoshop`, `/particular/cursos/canva`, `/particular/cursos/linux`, `/particular/cursos/impressao-3d`, `/particular/cursos/modelagem-3d`, `/particular/cursos/manutencao`, `/particular/cursos/excel-power-bi`
- **Onde:** [src/routes/particular.tsx:28](../../../../src/routes/particular.tsx#L28)
- **Evidência:** GRUPOS (particular.tsx:28-131) vs COURSE_DATA.nome nas rotas: "Revit" × H1 "REVIT BIM PARA ARQUITETURA" × card "Revit BIM" (revit mobile.fold); "Inteligência Artificial" × H1 "Inteligência Artificial: do Essencial ao Profissional com Agentes" × card "IA: Essencial ao Profissional com Agentes" × CTA "Quero o curso de IA com agentes" (dom.ctas/headings ia); "Photoshop + Illustrator" × H1 "Design Gráfico Photoshop + Illustrator" × CTA final "Pronto pra começar com Design Gráfico — Photoshop + Illustrator?"; "Linux Essencial" × "Linux"; "Impressão 3D" × "Impressão 3D: Do Fatiamento ao Produto Final"; "Montagem e Manutenção" × "Montagem e Manutenção de Computadores"; POPULARES (index 145-154) usa ainda um 3º nome ("Excel Avançado", "Pacote Office Completo").
- **Problema:** O usuário clica em "Revit" e cai numa página cujo título, plano e CTA usam três nomes diferentes — dúvida se é o mesmo curso, principalmente quando o H1 é longo e o card de preço mostra outro rótulo. Fere consistência/familiaridade (HIG) e a convenção de nomes da §1.6.
- **Correção sugerida:** Primeiro passo barato: alinhar os rótulos da sidebar (GRUPOS, particular.tsx:28-131) e POPULARES (particular.index.tsx:145-154) ao início do `nome` de cada COURSE_DATA (ex.: 'Revit BIM', 'Linux', 'Montagem e Manutenção de Computadores'). Fonte única (`nomeCurto` exportado) só se o 2º consumidor justificar; registrar em PENDENCIAS.md.
- **Esforço:** médio · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: sidebar 'Revit' (:103) × revit.tsx:18 'Revit BIM para Arquitetura'; 'Inteligência Artificial' × ia.tsx:19 nome longo; 'Photoshop + Illustrator' × 'Design Gráfico — Photoshop + Illustrator'. Nome curto no menu e longo no H1 é padrão comum; confusão real é baixa.

<a id="f226"></a>

## F226 · ⚪ Páginas de curso sem breadcrumb ou "voltar": a etiqueta de área é decorativa

- **Rotas:** `/particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:589](../../../../src/routes/particular.tsx#L589)
- **Evidência:** planilha.tsx:188-190 (<p> "A1 · Particular · Office Específico"), ti.tsx:107-109 (<Tape> categoria · área), ide.tsx:72-74 (linha de terminal decorativa), oficina/design/marketing idem — nenhum é <Link>. common.tsx não tem breadcrumb nem link "Início". No mobile a única volta é hambúrguer → "Início" (particular.tsx:402-410). Todos os mobile.fold de curso mostram só topbar (logo não clicável, Login, menu).
- **Problema:** Quem compara 3–4 cursos da mesma área (ex.: Excel vs Excel + Power BI vs Power BI) precisa abrir o menu, expandir o grupo e escolher — 3 toques por comparação. Sem trilha, o usuário perde a noção de onde está dentro das 52 páginas.
- **Correção sugerida:** Envolver o logo e o nome da topbar mobile (particular.tsx:588-600) em `<Link to="/particular" aria-label="Santos Tech Particular — início">`. Opcional: bloco 'Outros cursos de {grupo}' com chips dos irmãos do GRUPO antes do FAQ. Breadcrumb completo não é necessário.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Exagerado. No desktop a sidebar expande o grupo atual e destaca o curso ativo (particular.tsx:167-174, 497). No mobile o drawer abre já expandido, então são 2 toques e não 3. Real: o logo da topbar mobile é <div> e não link (particular.tsx:588-589). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f228"></a>

## F228 · ⚪ Três rótulos diferentes para o mesmo destino e nenhum diz que abre o WhatsApp; padrão da marca (aula experimental) não é oferecido

- **Rotas:** `/particular`, `/particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:271](../../../../src/components/course-skins/common.tsx#L271)
- **Evidência:** Na mesma página: hero "Quero saber mais" (planilha.tsx:202), card de preço "Quero o {levelName}" (common.tsx:271-273), CTA final "Quero saber mais" (363-365), FAQ "Falar no WhatsApp" (338-340) — todos para o mesmo wa.me. dom.ctas excel: ["Falar no WhatsApp","QUERO SABER MAIS","QUERO O EXCEL AVANÇADO","QUERO SABER MAIS"]. DESIGN_SYSTEM §1.3 e §8.1 definem o CTA primário como "Agendar aula experimental grátis"; nenhuma página de /particular menciona aula experimental ou visita.
- **Problema:** "Quero saber mais" é vago (saber mais onde? formulário? página?) e "Quero o Excel Avançado" soa como compra imediata, mas ambos só abrem uma conversa genérica. Sem uma oferta de baixo risco (aula experimental/visita), o único próximo passo é "falar com vendedor". Custo: hesitação em clicar e menor taxa de clique no CTA de maior intenção.
- **Correção sugerida:** Unificar os rótulos genéricos em `Falar no WhatsApp` (hero das peles, CTA final common.tsx:364 e FAQ — já usa) e deixar o card de preço com o texto de F363. Não introduzir 'Agendar aula experimental grátis' nem 'Quero me matricular' sem decisão do Henrique: §1.3/§8.1 descrevem o funil dos pais (infantil); em /particular não há oferta de aula experimental registrada.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Rótulos confirmados: planilha.tsx:202 e common.tsx:364 'Quero saber mais', 272 'Quero o {…}', 339 'Falar no WhatsApp' — todos wa.me; dom.ctas do excel bate. Porém a parte 'aula experimental' é premissa de negócio: DESIGN_SYSTEM §1.3/§8.1 foi escrito pro site infantil; nenhuma fonte confirma que curso particular oferece aula experimental. Inconsistência de rótulo é real; a oferta sugerida precisa de decisão do Henrique. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f230"></a>

## F230 · ⚪ Links internos da landing usam <a href> e recarregam a SPA inteira

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:272](../../../../src/routes/particular.index.tsx#L272)
- **Evidência:** particular.index.tsx:272 (chips de categoria), 329 (CTAs dos pilares, inclusive href="/particular/cursos/office"), 480 (cards de cursos populares) e 642 (footer) usam `<a href={`/particular/cursos/${slug}`}>`; a sidebar (particular.tsx:402, 499) usa <Link>. Rotas são internas do TanStack Router.
- **Problema:** Cada clique nesses 20+ links faz full reload: preloader, perda do estado da sidebar (grupo expandido, modo escuro persiste só via localStorage) e transição mais lenta que a navegação por <Link>. Inconsistente com o resto da área.
- **Correção sugerida:** Trocar `<a href={`/particular/cursos/${slug}`}>` por `<Link to={`/particular/cursos/${slug}`}>` em :272 (chips), :480 (populares) e :642 (footer), e no CTA dos pilares quando `href` começar com '/'. Âncoras '#categorias' continuam <a>.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado: :272, :480 e :642 usam <a href> para rotas internas, enquanto a sidebar (particular.tsx:402) usa <Link>. Cada clique recarrega a SPA inteira.

<a id="f231"></a>

## F231 · ⚪ Cards "Cursos mais populares" mostram "~3 meses" sem dizer que é ritmo intensivo, sem preço e sem prova de popularidade

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:505](../../../../src/routes/particular.index.tsx#L505)
- **Evidência:** particular.index.tsx:505: `{TIER_META[curso.tierKey].intensivo}` renderiza "~3 meses" como chip ao lado da categoria (mobile.seg08-09: "IA · ~3 meses", "Programação · ~3 meses"). Subtítulo 472-474: "Confira os preferidos dos nossos alunos." Lista POPULARES (144-155) é fixa, sem métrica. Cards não trazem preço embora TIER_META tenha price.
- **Problema:** "~3 meses" contradiz a seção Ritmo logo acima ("6 meses no ritmo padrão (2×/sem)", 450) — o usuário não sabe qual vale. "Preferidos dos alunos" sem número é afirmação vazia (§13). Falta o dado que mais ajuda a comparar cards: o preço.
- **Correção sugerida:** Chip: `{TIER_META[curso.tierKey].intensivo} (intensivo)` ou uma faixa intensivo–padrão. Subtítulo :473 → 'Comece por aqui.'. Preço fica fora (decisão de preços adiada pelo Henrique).
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: Confirmado que :505 mostra só `intensivo` sem rótulo e que :473 afirma 'preferidos' sem dado. A parte do preço é decisão de negócio adiada no roadmap, por isso não entra na correção. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f232"></a>

## F232 · ⚪ Marca aparece duas vezes na primeira tela mobile da landing antes do H1

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:176](../../../../src/routes/particular.index.tsx#L176)
- **Evidência:** routes/particular/mobile.fold.png: topbar fixo "ESCOLA SANTOS TECH · PARTICULAR" (particular.tsx:588-599) e, 120px abaixo, badge "ESCOLA / SANTOS TECH — PARTICULAR" no hero (particular.index.tsx:176-183). O H1 só começa a ~y=370 de 844.
- **Problema:** Repetição gasta ~100px do fold com a mesma informação e empurra headline e CTA para baixo; no desktop o badge tem função (sidebar colapsada), no mobile não.
- **Correção sugerida:** No wrapper Reveal/div do badge (:176-183) adicionar `hidden lg:inline-flex` (trocando `inline-flex`), liberando cerca de 90px do fold no mobile.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: No mobile.fold.png o topbar 'ESCOLA SANTOS TECH PARTICULAR' aparece e logo abaixo o badge idêntico no hero. O H1 começa em ~y=370 de 844 (imagem 2x).

<a id="f316"></a>

## F316 · ⚪ Peles das páginas /particular imitam chrome de software (barras, status, toolbar) que parece clicável e rouba o fold mobile

- **Rotas:** `/particular/cursos/*`
- **Onde:** [src/components/course-skins/design.tsx:209](../../../../src/components/course-skins/design.tsx#L209)
- **Evidência:** routes/particular__cursos__excel/desktop.fold.png: barra verde 'Salvamento automático · Excel Avançado — Santos Tech' e rodapé 'Pronto · 100%'; python/desktop.fold.png: status bar 'main · ✓ 0 problemas · UTF-8'; photoshop/mobile.fold.png: régua + toolbar com 5 ferramentas ocupam y=110→320 antes do título. Nenhum desses controles tem ação.
- **Problema:** design-principles.md › Familiarity: 'Provide clear feedback. Show when controls are available'. Pela lente do design lead, as skins são o ponto de vista mais forte do site (merecem ficar). Mas ícones de ferramenta e botões de janela sem função criam affordance falsa, e no celular custam 200px do primeiro scroll.
- **Correção sugerida:** Adicionar `aria-hidden="true"` nas toolbars e barras decorativas que ainda não têm: design.tsx:209 (toolbar), barra de título planilha.tsx:173 e status bar ide.tsx:124 se for decorativa. Não esconder no mobile: o título e o CTA já aparecem no fold.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: photoshop/mobile.fold.png: régua + toolbar ocupam cerca de 100px CSS, e o h1, a meta e o CTA seguem visíveis no fold, então a afirmação de que roubam 200px é exagerada. Os controles são <span> sem hover (design.tsx:214-231), com pouca affordance falsa. Ruler/art já têm aria-hidden (design.tsx:130/156). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f320"></a>

## F320 · ⚪ Mock do Portal do Aluno exibe dados fictícios (9,4 · 96% · 72%) com aviso de 11px

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:872](../../../../src/routes/index.tsx#L872)
- **Evidência:** index.tsx:835 'Progresso — Tecnologia Create 72%', :851-855 '9,4 Nota / 96% Frequência / 7 Projetos', :863-866 'Novo projeto entregue — Jogo de plataforma publicado no Roblox'; :872 legenda `text-[11px]` 'Ilustração do Portal do Aluno.' home/desktop.json › smallText: 'Nota', 'Frequência', 'Projetos' 10px.
- **Problema:** design-principles.md › Responsibility: 'Be fully transparent about what your product does'. Números concretos parecem prova; a única ressalva está no menor texto da página.
- **Correção sugerida:** Subir a legenda de l.871-873 para `text-xs font-semibold` com o texto "Exemplo ilustrativo — dados fictícios de demonstração" e trocar os `text-[10px]` de l.854 e l.863 por `text-xs`.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: index.tsx:835/851-855 mostram 72%, 9,4, 96%, 7; a única ressalva é `text-[11px]` "Ilustração do Portal do Aluno." (l.872). Os rótulos usam text-[10px] (l.854, 863). Ressalva existe, só é discreta demais.
