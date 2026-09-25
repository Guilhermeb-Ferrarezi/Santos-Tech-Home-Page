# Tipografia e formatação de texto — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#61) · nota da dimensão **5/10** · **66 achados** (🔴 0 · 🟠 2 · 🟡 28 · ⚪ 36)

**Estado geral:** a base (Poppins, títulos fortes, design system escrito) é boa, mas o texto foi montado página a página, sem receita fixa. Resultado: o site parece feito por várias mãos, e o que vende fica menos legível do que o que enfeita.

- **Informação de decisão em letra miúda.** Preço à vista, formas de pagamento, faixa etária no menu, selo "Mais procurado" e cookies aparecem em 8 a 12px. O pai no celular não lê, e isso passa cara de "letra miúda escondida".
- **Blocos densos onde está o argumento de venda.** Resultado do curso inteiro em negrito, parágrafos de 7 a 9 linhas (alguns centralizados), linhas com mais de 100 caracteres no desktop e resultado repetido na mesma página. Quem lê em 30 segundos desiste antes do botão.
- **Caixa alta e nomes longos quebram títulos e botões.** CTA com "GRÁTIS" sozinho na segunda linha, título de curso com 5 linhas no celular, palavras soltas no fim de título. O botão principal perde força.
- **Hierarquia apagada.** Só 3 pesos da fonte são carregados, e por isso "semibold" sai igual a "bold". Há mais de 20 combinações de tamanho por página e o peso do título muda de pele para pele. Nada se destaca.
- **Grafia inconsistente.** O mesmo curso aparece com até 4 nomes (CREATE1 / CREATE Ano 1…), o horário de sábado diverge entre páginas, a nota sai como "5.0", e há aspas retas e "~" em textos para leigos. Isso mina a imagem de escola "organizada e confiável".

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F083`](#f083) | 🟠 | MetricCard com valores textuais ("Avançado", "Hands-on") sobrepõe texto no mobile | `/cursos/academies`, `/cursos/create/12-13-anos` +3 | [src/components/course-page.tsx:130](../../../../src/components/course-page.tsx#L130) | pequeno |
| [`F104`](#f104) | 🟠 | Resultado do curso (outcome) é um parágrafo único de 250–416 caracteres, todo em negrito | `/particular/cursos/* (52 páginas)` | [src/components/course-skins/variants/planilha-excel.tsx:88](../../../../src/components/course-skins/variants/planilha-excel.tsx#L88) | médio |
| [`F005`](#f005) | 🟡 | Poppins carrega só 400/700/900, mas o código usa font-semibold (249×), font-medium (17×) e font-light (4×) | `/`, `/cursos` +12 | [src/styles.css:7](../../../../src/styles.css#L7) | pequeno |
| [`F014`](#f014) | 🟡 | Texto de 8–10px em elementos reais de UI (header, sidebar, cards de curso) — abaixo do mínimo text-xs | `todas (header)`, `/particular` +5 | [src/routes/particular.tsx:365](../../../../src/routes/particular.tsx#L365) | pequeno |
| [`F059`](#f059) | 🟡 | Nota '5,0★' vira '5.0★' (ponto decimal) depois da animação de contagem | `/` | [src/hooks/use-count-up.ts:17](../../../../src/hooks/use-count-up.ts#L17) | trivial |
| [`F061`](#f061) | 🟡 | Páginas legais: linhas de ~96 caracteres no desktop e parágrafos de 380–484 caracteres | `/privacidade`, `/termos` | [src/components/legal-page.tsx:17](../../../../src/components/legal-page.tsx#L17) | pequeno |
| [`F063`](#f063) | 🟡 | Depoimentos cortados por line-clamp-5 no meio da frase, sem forma de ler o resto | `/` | [src/components/testimonials.tsx:97](../../../../src/components/testimonials.tsx#L97) | trivial |
| [`F067`](#f067) | 🟡 | Horário de funcionamento divergente entre home, contato e FAQ | `/`, `/contato` | [src/routes/index.tsx:1080](../../../../src/routes/index.tsx#L1080) | trivial |
| [`F074`](#f074) | 🟡 | Painel de cookies: badge 'SEMPRE ATIVOS' a 10px e descrições de categoria a 12px | `banner de cookies (todas as rotas)` | [src/components/cookie-consent.tsx:434](../../../../src/components/cookie-consent.tsx#L434) | trivial |
| [`F075`](#f075) | 🟡 | Rodapé: texto legal a 12px e, no mobile, FAB do WhatsApp cobre 'Cookies' e 'reservados.' | `/`, `/sobre` +5 | [src/components/site-footer.tsx:85](../../../../src/components/site-footer.tsx#L85) | trivial |
| [`F082`](#f082) | 🟡 | CTA primário em caixa alta quebra em 2 linhas no mobile (órfã "GRÁTIS") | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +5 | [src/components/course-page.tsx:244](../../../../src/components/course-page.tsx#L244) | pequeno |
| [`F085`](#f085) | 🟡 | Micro-textos em 9–11px (selos, pílulas "Aulas", "Conquista", "Gratuito", "Mais procurado") | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +10 | [src/components/course-page.tsx:150](../../../../src/components/course-page.tsx#L150) | pequeno |
| [`F087`](#f087) | 🟡 | Nome do curso grafado de 4 formas: "CREATE1", "CREATE Ano 1", "CREATE 1+", "Tecnologia Create" | `/cursos/create`, `/cursos/create/8-9-anos` +7 | [src/routes/cursos.create.8-9-anos.tsx:242](../../../../src/routes/cursos.create.8-9-anos.tsx#L242) | médio |
| [`F093`](#f093) | 🟡 | Parágrafos de 6–8 linhas centralizados no mobile (ProgressionTrail, ToolGrid, intros de overview) | `/cursos/create/8-9-anos`, `/cursos/create/13-14-anos` +4 | [src/components/course-page.tsx:332](../../../../src/components/course-page.tsx#L332) | pequeno |
| [`F095`](#f095) | 🟡 | Linhas de 116–148 caracteres no desktop (BridgeBanner e footnote do FormatSection) | `/cursos/create/8-9-anos`, `/cursos/create/12-13-anos` +4 | [src/components/course-page.tsx:736](../../../../src/components/course-page.tsx#L736) | trivial |
| [`F096`](#f096) | 🟡 | Corpo principal de cards, checklist e FAQ em 14px, contra o text-base do DS §3.4 | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +9 | [src/components/course-page.tsx:913](../../../../src/components/course-page.tsx#L913) | pequeno |
| [`F097`](#f097) | 🟡 | Escala tipográfica sem disciplina: 23–27 variantes tamanho/peso por página | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +7 | [src/components/course-page.tsx:511](../../../../src/components/course-page.tsx#L511) | pequeno |
| [`F103`](#f103) | 🟡 | Texto decorativo "10110" sobreposto à legenda "CRIANÇAS · 5–9 ANOS" no desktop | `/cursos` | [src/components/decorative-elements.tsx:68](../../../../src/components/decorative-elements.tsx#L68) | trivial |
| [`F105`](#f105) | 🟡 | Subtítulo do hero em monospace 14px a 55% nas 14 páginas de Programação | `/particular/cursos/python`, `/particular/cursos/typescript` +12 | [src/components/course-skins/ide.tsx:84](../../../../src/components/course-skins/ide.tsx#L84) | trivial |
| [`F106`](#f106) | 🟡 | Público-alvo, tópicos e resultado renderizados como código monospace 12,5px na pele IDE | `/particular/cursos/python`, `/particular/cursos/typescript` +16 | [src/components/course-skins/variants/ide-kit.tsx:48](../../../../src/components/course-skins/variants/ide-kit.tsx#L48) | médio |
| [`F107`](#f107) | 🟡 | Texto de pagamento a 12px com 104 caracteres por linha no card de custos (todas as 52 páginas) | `/particular/cursos/* (52 páginas)` | [src/components/course-skins/common.tsx:293](../../../../src/components/course-skins/common.tsx#L293) | trivial |
| [`F108`](#f108) | 🟡 | Preço à vista e '12x de' em 12px muted enquanto a parcela tem 30px — hierarquia invertida | `/particular/cursos/* (52 páginas)` | [src/components/course-skins/common.tsx:255](../../../../src/components/course-skins/common.tsx#L255) | trivial |
| [`F109`](#f109) | 🟡 | Serifa de sistema (Times/Georgia) usada como fonte decorativa nas peles Design e Copywriting | `/particular/cursos/canva`, `/particular/cursos/photoshop` +4 | [src/components/course-skins/design.tsx:247](../../../../src/components/course-skins/design.tsx#L247) | pequeno |
| [`F110`](#f110) | 🟡 | CTA em caixa alta com nome longo vira botão de 2 linhas ('QUERO O DESENVOLVIMENTO DE JOGOS: UNITY E GODOT') | `/particular/cursos/jogos`, `/particular/cursos/conteudo-ia` +9 | [src/components/course-skins/common.tsx:272](../../../../src/components/course-skins/common.tsx#L272) | trivial |
| [`F111`](#f111) | 🟡 | H1 com nome de curso de até 65 caracteres ocupa 5 linhas no celular | `/particular/cursos/ia`, `/particular/cursos/impressao-3d` +11 | [src/routes/particular.cursos.ia.tsx:19](../../../../src/routes/particular.cursos.ia.tsx#L19) | pequeno |
| [`F113`](#f113) | 🟡 | Rótulos de 10–11px em caixa alta com tracking largo nos heros das peles | `/particular/cursos/* (peles marketing, ti, design, oficina, planilha — 35 páginas)` | [src/components/course-skins/marketing.tsx:303](../../../../src/components/course-skins/marketing.tsx#L303) | pequeno |
| [`F115`](#f115) | 🟡 | Peso e escala de h1/h2 divergem entre as 8 peles (font-bold vs font-black, 4xl vs 5xl) | `/particular/cursos/* (52 páginas)` | [src/components/course-skins/ia.tsx:123](../../../../src/components/course-skins/ia.tsx#L123) | médio |
| [`F118`](#f118) | 🟡 | Tópicos do conteúdo com 116–156 caracteres por linha em Informática e Power BI (desktop) | `/particular/cursos/informatica`, `/particular/cursos/power-bi` +3 | [src/components/course-skins/informatica.tsx:527](../../../../src/components/course-skins/informatica.tsx#L527) | trivial |
| [`F119`](#f119) | 🟡 | Resultado do curso aparece duas vezes na mesma página com o texto idêntico | `/particular/cursos/* (52 páginas)`, `/particular` | [src/components/course-skins/common.tsx:247](../../../../src/components/course-skins/common.tsx#L247) | pequeno |
| [`F364`](#f364) | 🟡 | Nome do curso interpolado em frase gera títulos ilegíveis ("Pronto pra começar com Impressão 3D: Do Fatiamento ao Produto Final?") | `/particular/cursos/impressao-3d`, `/particular/cursos/ia` +8 | [src/components/course-skins/common.tsx:358](../../../../src/components/course-skins/common.tsx#L358) | pequeno |
| [`F006`](#f006) | ⚪ | Escala do H1 do hero diverge do DS §3.3 e varia entre páginas irmãs (22 combinações) | `/`, `/cursos` +4 | [src/routes/index.tsx:402](../../../../src/routes/index.tsx#L402) | pequeno |
| [`F027`](#f027) | ⚪ | H2 do ScrollStage e títulos de LegalPage/404 usam font-bold; DS §3.3 fixa font-black para H1/H2 | `/`, `/privacidade` +3 | [src/components/scroll-stage.tsx:172](../../../../src/components/scroll-stage.tsx#L172) | trivial |
| [`F029`](#f029) | ⚪ | font-mono (493×) introduz 2ª família tipográfica sem token nem fonte carregada; renderiza diferente por SO | `/particular/cursos/* (52 páginas)` | [src/components/course-skins/common.tsx:74](../../../../src/components/course-skins/common.tsx#L74) | trivial |
| [`F058`](#f058) | ⚪ | Subtítulo do hero da home é um bloco de 7 linhas no mobile (DS §1.4 proíbe 5+ linhas) | `/` | [src/routes/index.tsx:409](../../../../src/routes/index.tsx#L409) | trivial |
| [`F062`](#f062) | ⚪ | Páginas legais: h3 tem o mesmo tamanho do corpo (15px) e o mesmo peso do <strong> | `/privacidade`, `/termos` | [src/components/legal-page.tsx:34](../../../../src/components/legal-page.tsx#L34) | trivial |
| [`F064`](#f064) | ⚪ | CTAs em caixa alta com tracking largo quebram em 2 linhas no mobile | `/` | [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421) | trivial |
| [`F065`](#f065) | ⚪ | Títulos com palavra órfã na última linha no desktop ('…do seu / filho', '…à / matrícula') | `/`, `/sobre/visao` +6 | [src/styles.css:141](../../../../src/styles.css#L141) | trivial |
| [`F066`](#f066) | ⚪ | Faixa etária formatada de 2 jeitos: '5–9 anos' (travessão) vs '5 a 9 anos' | `/`, `/sobre`, `header (dropdown Programas)` | [src/routes/index.tsx:566](../../../../src/routes/index.tsx#L566) | trivial |
| [`F068`](#f068) | ⚪ | Parágrafos centralizados de 4–7 linhas no mobile (home e /sobre) | `/`, `/sobre` | [src/routes/sobre.index.tsx:81](../../../../src/routes/sobre.index.tsx#L81) | trivial |
| [`F069`](#f069) | ⚪ | /sobre 'Quem somos': parágrafo de 8 linhas com 5 trechos em negrito | `/sobre` | [src/routes/sobre.index.tsx:104](../../../../src/routes/sobre.index.tsx#L104) | pequeno |
| [`F070`](#f070) | ⚪ | Eyebrows com 4 receitas diferentes (tracking 0.05 / 0.14 / 0.25 / 0.28em; bold vs black) | `/`, `/sobre`, `/contato` | [src/routes/sobre.index.tsx:76](../../../../src/routes/sobre.index.tsx#L76) | trivial |
| [`F072`](#f072) | ⚪ | Dropdown 'Sobre' em CAIXA ALTA hardcoded vs 'Programas' em Title Case | `header (todas as rotas)` | [src/components/site-header.tsx:36](../../../../src/components/site-header.tsx#L36) | trivial |
| [`F076`](#f076) | ⚪ | Aspas retas e curvas misturadas ("…" em /sobre, /sobre/visao, /termos vs “…” na home) | `/sobre`, `/sobre/visao` +14 | [src/routes/sobre.index.tsx:134](../../../../src/routes/sobre.index.tsx#L134) | pequeno |
| [`F077`](#f077) | ⚪ | Ilustração do Portal do Aluno usa textos de 10px e legenda de 11px | `/` | [src/routes/index.tsx:851](../../../../src/routes/index.tsx#L851) | trivial |
| [`F078`](#f078) | ⚪ | Respostas da FAQ em parágrafo único de até 375 caracteres, sem âncora em negrito | `/` | [src/routes/index.tsx:306](../../../../src/routes/index.tsx#L306) | pequeno |
| [`F079`](#f079) | ⚪ | /contato: h2 e h3 com o mesmo tamanho e peso (text-2xl font-black) | `/contato` | [src/routes/contato.tsx:117](../../../../src/routes/contato.tsx#L117) | trivial |
| [`F080`](#f080) | ⚪ | H2 de duas frases ocupa 4 linhas de 36px no mobile ('Não é curso de computador…') | `/` | [src/routes/index.tsx:498](../../../../src/routes/index.tsx#L498) | trivial |
| [`F081`](#f081) | ⚪ | /links sem h1: 'Santos Tech' e os títulos dos cards são <p> | `/links` | [src/routes/links.tsx:63](../../../../src/routes/links.tsx#L63) | trivial |
| [`F086`](#f086) | ⚪ | Eyebrows longos em caixa alta com tracking 0.25em quebram em 2 linhas no mobile | `/cursos/create/13-14-anos`, `/cursos/create` +2 | [src/routes/cursos.create.13-14-anos.tsx:231](../../../../src/routes/cursos.create.13-14-anos.tsx#L231) | pequeno |
| [`F088`](#f088) | ⚪ | Faixa etária formatada de 3 jeitos: "8–9", "8 a 9 anos", "9-10 anos" (hífen) | `/cursos/create/8-9-anos`, `/cursos/create/10-11-anos` +3 | [src/routes/cursos.create.8-9-anos.tsx:211](../../../../src/routes/cursos.create.8-9-anos.tsx#L211) | trivial |
| [`F089`](#f089) | ⚪ | Programa ACADEMIES grafado como "ACADEMIES", "Academies", "Academy" e "Academia" na mesma página | `/cursos/academies` | [src/routes/cursos.academies.tsx:140](../../../../src/routes/cursos.academies.tsx#L140) | pequeno |
| [`F090`](#f090) | ⚪ | "PORTAL DO ALUNO ST" em bold caixa alta dentro de frase; 3 grafias do nome | `/cursos/create` | [src/routes/cursos.create.index.tsx:236](../../../../src/routes/cursos.create.index.tsx#L236) | trivial |
| [`F094`](#f094) | ⚪ | Bloco "A proposta" e BridgeBanner com 8–9 linhas corridas no mobile | `/cursos/create/8-9-anos`, `/cursos/create/12-13-anos` +2 | [src/routes/cursos.create.8-9-anos.tsx:286](../../../../src/routes/cursos.create.8-9-anos.tsx#L286) | pequeno |
| [`F099`](#f099) | ⚪ | Preço com formatação mista no mesmo card: "R$ 939,90 / semana" vs "≈ R$ 895 / semana" | `/cursos/camps` | [src/routes/cursos.camps.tsx:79](../../../../src/routes/cursos.camps.tsx#L79) | trivial |
| [`F101`](#f101) | ⚪ | Trigger do accordion transforma eyebrow + título + meta num único h3 | `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos` +7 | [src/components/course-page.tsx:645](../../../../src/components/course-page.tsx#L645) | trivial |
| [`F102`](#f102) | ⚪ | Rótulo "O que vê"/"Ferramentas" é h3, mas "O que ele leva pra casa" com o mesmo estilo é <p> | `/cursos/junior` | [src/routes/cursos.junior.index.tsx:159](../../../../src/routes/cursos.junior.index.tsx#L159) | trivial |
| [`F112`](#f112) | ⚪ | Pele Oficina força UPPERCASE em h1/h2/h3 longos e destrói grafia de marcas (AUTOCAD, SKETCHUP) | `/particular/cursos/modelagem-3d`, `/particular/cursos/impressao-3d` +2 | [src/components/course-skins/oficina.tsx:192](../../../../src/components/course-skins/oficina.tsx#L192) | trivial |
| [`F116`](#f116) | ⚪ | Cards 'Experiência' da landing com parágrafos de 6–7 linhas em 14px no celular | `/particular` | [src/routes/particular.index.tsx:121](../../../../src/routes/particular.index.tsx#L121) | trivial |
| [`F117`](#f117) | ⚪ | Respostas do FAQ em 14px muted com 101 caracteres por linha no desktop | `/particular`, `/particular/cursos/* (52 páginas)` | [src/components/particular-faq.tsx:52](../../../../src/components/particular-faq.tsx#L52) | trivial |
| [`F120`](#f120) | ⚪ | Sidebar trunca nomes de curso com line-clamp ('TypeScript para Desenvolvimento…') | `/particular`, `/particular/cursos/* (52 páginas, sidebar desktop e menu mobile)` | [src/routes/particular.tsx:511](../../../../src/routes/particular.tsx#L511) | trivial |
| [`F121`](#f121) | ⚪ | Nomes de módulo truncados com reticências no 'explorer' da pele IDE | `/particular/cursos/python`, `/particular/cursos/typescript` +3 | [src/components/course-skins/variants/ide-python.tsx:85](../../../../src/components/course-skins/variants/ide-python.tsx#L85) | pequeno |
| [`F122`](#f122) | ⚪ | Tilde '~3 meses' como prefixo de duração em chips e tabelas, inclusive chip solto sem rótulo | `/particular`, `/particular/cursos/* (52 páginas)`, `todas as 52 páginas de /particular/cursos/*` | [src/routes/particular.index.tsx:505](../../../../src/routes/particular.index.tsx#L505) | trivial |
| [`F123`](#f123) | ⚪ | Órfã 'BI' no bullet 'Do Excel ao Python, do Canva ao Power BI' no celular | `/particular` | [src/routes/particular.index.tsx:55](../../../../src/routes/particular.index.tsx#L55) | trivial |
| [`F367`](#f367) | ⚪ | Outcomes quebram paralelismo: infinitivo em 49 cursos, 3ª pessoa em backend/frontend/python-apis | `/particular/cursos/backend`, `/particular/cursos/frontend`, `/particular/cursos/python-apis` | [src/routes/particular.cursos.backend.tsx:39](../../../../src/routes/particular.cursos.backend.tsx#L39) | trivial |
| [`F368`](#f368) | ⚪ | Listas "Para quem é" misturam "Você quer...", substantivo ("Empreendedor que...") e verbo solto ("Quer abrir...") na mesma página | `/particular/cursos/photoshop`, `/particular/cursos/ciberseguranca` +11 | [src/routes/particular.cursos.photoshop.tsx:26](../../../../src/routes/particular.cursos.photoshop.tsx#L26) | médio |
| [`F378`](#f378) | ⚪ | Taglines com comprimento de 51 a 117 caracteres — as longas viram 4 linhas no hero mobile | `/particular/cursos/excel-ia`, `/particular/cursos/chatgpt` +5 | [src/routes/particular.cursos.excel-ia.tsx:25](../../../../src/routes/particular.cursos.excel-ia.tsx#L25) | pequeno |

<a id="f083"></a>

## F083 · 🟠 MetricCard com valores textuais ("Avançado", "Hands-on") sobrepõe texto no mobile

- **Rotas:** `/cursos/academies`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/create/8-9-anos`, `/cursos/junior/5-6-anos`
- **Onde:** [src/components/course-page.tsx:130](../../../../src/components/course-page.tsx#L130)
- **Evidência:** routes/cursos__academies/mobile.seg02.png: na barra de métricas (grid 2 colunas) "Avançado" invade a célula vizinha e se sobrepõe a "Hands-on", que ainda hifeniza em "Hands-/on" — texto ilegível. Código: MetricCard `text-4xl font-black` (course-page.tsx:130) sem `break-words`/`min-w-0`; valores em cursos.academies.tsx:293-294. Em cursos__create__12-13-anos/mobile.seg02.png e 13-14/mobile.seg02.png "Unity" e "Mestre" cabem, mas os labels "MOTOR PROFISSIONAL" e "TÍTULO DE FORMATURA" quebram em 2 linhas enquanto os vizinhos têm 1, desalinhando a barra.
- **Problema:** Componente desenhado pra números curtos (DS §9.4 item 2: semanas, horas, aulas, faixa etária) recebeu palavras de 8 caracteres em 36px; em 390px cada célula tem ~150px, insuficiente. Resultado é colisão de texto na primeira tela da landing ACADEMIES.
- **Correção sugerida:** Duas frentes. (1) Dado: em src/routes/cursos.academies.tsx:290-295 trocar por valores numéricos reais (o FAQ da própria página diz que carga horária varia por módulo — não inventar horas): `{ value: "2", label: "Módulos" }, { value: "9–14", label: "Faixa etária" }, { value: "100%", label: "Prático" }, { value: "1", label: "Projeto final" }`. Nas rotas 12-13 e 13-14 encurtar labels pra ≤ 14 chars: "Motor profissional" → "Motor 3D", "Título de formatura" → "Título final". (2) Blindar o componente em course-page.tsx:127-133: `<div className="min-w-0 text-center">` e no valor `className={`break-words font-black text-white ${value.length > 6 ? "text-2xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}`. Limiar 6 (não 4) mantém "12–13", "Unity" e "Mestre" no tamanho atual, que cabem (confirmado em 12-13/mobile.seg02.png).
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: cursos__academies/mobile.seg02.png mostra "Avançado" sobrepondo "Hands-/on" — ilegível. course-page.tsx:130 `text-4xl font-black` sem break-words/min-w-0; grid `grid-cols-2` em :294; valores em cursos.academies.tsx:293-294. Nas páginas CREATE 12-13 só há desalinhamento de label em 2 linhas (menor), sem colisão.

<a id="f104"></a>

## F104 · 🟠 Resultado do curso (outcome) é um parágrafo único de 250–416 caracteres, todo em negrito

- **Rotas:** `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/course-skins/variants/planilha-excel.tsx:88](../../../../src/components/course-skins/variants/planilha-excel.tsx#L88)
- **Evidência:** manifest › denseBlocks: n8n (397 chars), python (394), seo (409), sql (416) em desktop e mobile; longLines desktop: ia 101 cpl @18px, marketing/meta-ads/redes-sociais 119 cpl @18px, linux 121 cpl @18px, excel-power-bi 150 cpl @15px, office 148 cpl @15px, powerpoint 150 cpl @15px. Screenshots: routes/particular__cursos__excel/mobile.seg03.png (célula 'Resultado fx' com 9 linhas em semibold), routes/particular__cursos__python/mobile.seg04.png (terminal, ~10 linhas mono), crops power-bi desktop s03 (4 linhas bold ~150 cpl). Código: todas as 52 rotas têm `outcome:` com 88–416 chars; renderers em negrito: planilha-excel.tsx:88 `font-semibold`, ia-geral.tsx:280 `font-semibold`, marketing-marketing.tsx:198 `font-semibold`, ti-suporte.tsx:180 `font-semibold`, ti-ciberseguranca.tsx:194 `font-bold`, design-canva.tsx:505 `text-lg font-semibold`, oficina-impressao.tsx:114 `font-semibold`, planilha-power-bi.tsx:215 `font-semibold leading-snug`.
- **Problema:** Viola DESIGN_SYSTEM §1.4 ('bloco de texto denso é proibido', 'bold estratégico, nunca o parágrafo inteiro', 'se não cabe numa respiração, divide'). É a frase de maior valor comercial da página e vira uma parede de negrito de 6–10 linhas no celular; negrito em tudo = nada se destaca.
- **Correção sugerida:** Criar componente compartilhado `OutcomeText` (não existe hoje; cada variante renderiza `tier.outcome` à mão) que divide no primeiro ' — ': gancho em `font-semibold` e resto em `font-normal text-sm sm:text-base` com a lista separada por vírgulas virando bullets. Médio prazo: reescrever os outcomes em ≤ 2 frases (copy).
- **Esforço:** médio · **Severidade:** Alta
- **Verificação:** confirmado: 53 outcomes em src/routes: mediana 299, máx 429 chars. Renderers citados conferem em negrito (planilha-excel:88, ia-geral:280, ti-ciberseguranca:194 font-bold, design-canva:505 etc.). Viola DS §1.4 ('nunca o parágrafo inteiro'). Não há componente compartilhado: a correção é por variante ou exige criar um.

<a id="f005"></a>

## F005 · 🟡 Poppins carrega só 400/700/900, mas o código usa font-semibold (249×), font-medium (17×) e font-light (4×)

- **Rotas:** `/`, `/cursos`, `/particular`, `/particular/cursos/* (52 páginas)`, `todas (header)`, `/sobre`, `/sobre/visao`, `/contato`, `/links`, `/privacidade`, `/termos`, `/pagina-que-nao-existe-404`, `header e rodapé (todas as rotas)`, `banner de cookies (todas as rotas)`
- **Onde:** [src/styles.css:7](../../../../src/styles.css#L7)
- **Evidência:** styles.css:7-9 importa apenas @fontsource/poppins 400/700/900 e __root.tsx:16-18 faz preload só desses três woff2 (nenhuma face itálica). O código usa 249× `font-semibold` e 17× `font-medium` em src/ (site-header.tsx:104-126 nav, cookie-consent.tsx:298-305 botões, legal-page.tsx:34-37 h3/strong/a, __root.tsx:38-47 404, index.tsx:481 rótulos das stats) e `italic` em index.tsx:772. routes/home/desktop.json › dom.fonts lista '14px/20px w600 ×10', '12px/16px w600 ×14', '14px/20px w500 ×4' — pesos computados sem face correspondente.
- **Problema:** Sem os pesos 500/600/300 declarados em @font-face, o browser faz font-matching para o peso mais próximo: 600→700, 500→400, 300→400. Na prática `font-semibold` renderiza idêntico a `font-bold`, `font-medium` idêntico a `font-normal` e `font-light` vira regular. A hierarquia planejada (nav semibold vs. CTA bold; strong semibold dentro de parágrafo) não existe na tela, e 270 classes mentem sobre o que renderizam.
- **Correção sugerida:** Opção recomendada: adicionar `@import "@fontsource/poppins/600.css";` em styles.css:9 (sem preload, só 400/700/900 continuam no __root.tsx:16-18), preservando a hierarquia nav/strong semibold vs CTA bold que o código já expressa em 249 lugares. Trocar os 17 `font-medium` por `font-normal` ou `font-semibold` conforme o caso e remover os 4 `font-light`. Registrar no DESIGN_SYSTEM §3 os pesos permitidos (400/600/700/900).
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: styles.css:7-9 importa só 400/700/900; grep em src: 249 font-semibold, 17 font-medium, 4 font-light. Sem face 600/500/300, o matching CSS renderiza 600→700 e 500/300→400. Hierarquia some, mas nada quebra: inconsistência, não prejuízo de leitura.

<a id="f014"></a>

## F014 · 🟡 Texto de 8–10px em elementos reais de UI (header, sidebar, cards de curso) — abaixo do mínimo text-xs

- **Rotas:** `todas (header)`, `/particular`, `/particular/cursos/* (52 páginas)`, `/cursos/*/*-anos (9 páginas)`, `/`, `header (todas as rotas)`, `header (dropdown Programas, todas as rotas)`
- **Onde:** [src/routes/particular.tsx:365](../../../../src/routes/particular.tsx#L365)
- **Evidência:** particular.tsx:365 e :591 `text-[8px] font-light uppercase tracking-[0.2em]` ('Escola'); particular.index.tsx:177 `text-[9px]`, :619 `text-[8px]`; particular.tsx:370,594 e rarity-badge.tsx:17 `text-[9px]`; site-header.tsx:377 `text-[10px] font-black uppercase` (título de grupo do menu) e :391 `text-[10px]` ('5–9 anos'); course-page.tsx:150 `text-[10px]` (descrição do selo), :511, :548, :796; index.tsx:851,862,869 `text-[10px]/[11px]`. Totais no repo: 8px 65×, 9px 115×, 10px 144×, 11px 296× (a maioria em course-skins/scenes, que são ilustrações de UI). DS §3.4 menor tamanho = `text-xs` (12px); HIG Typography: mínimo 11pt para texto legível.
- **Problema:** O público-alvo lê no celular; 8px é menor que a legenda de uma bula. No header, a idade da turma ('5–9 anos', 10px) é informação de decisão para o pai. Além disso `font-light` nem existe carregado (vira 400), então o lockup 'Escola / SANTOS TECH' renderiza diferente do desenhado.
- **Correção sugerida:** Texto informativo com mínimo `text-[11px]`/`text-xs`: site-header.tsx:377 e :391 → `text-xs` (a idade é informação de decisão); course-page.tsx:150 desc do selo → `text-xs`; rarity-badge.tsx:17 → `text-[11px]`. O rótulo 'Escola' (particular.tsx:365/591) → `text-[10px] font-normal` ou remover. Tirar `font-light`, que não está carregado (só 400/700/900 em styles.css:7-9). Ilustrações aria-hidden ficam de fora.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação) · **Também apontado como:** F073, F060
- **Verificação:** confirmado: Visto: particular.tsx:365/591 text-[8px] font-light; site-header.tsx:377,391 text-[10px]; course-page.tsx:150 text-[10px]; rarity-badge.tsx:17 text-[9px]. O DS §3.4 define microcopy como text-xs, não um "mínimo" formal. Rebaixada: afeta rótulos, não o corpo do texto.

<a id="f059"></a>

## F059 · 🟡 Nota '5,0★' vira '5.0★' (ponto decimal) depois da animação de contagem

- **Rotas:** `/`
- **Onde:** [src/hooks/use-count-up.ts:17](../../../../src/hooks/use-count-up.ts#L17)
- **Evidência:** routes/home/desktop.seg05.png e mobile.seg05.png mostram '5.0★' na barra de stats; o pill de depoimentos logo abaixo mostra '5,0' (desktop.seg06.png). use-count-up.ts:17 `${prefix}${value.toFixed(decimals)}${suffix}`; index.tsx:174 define o texto estático '5,0★', sobrescrito no onUpdate.
- **Problema:** Número com ponto decimal em site pt-BR é erro de formatação visível no principal selo de prova social, e a mesma nota aparece de dois jeitos a poucos pixels ('5.0★' vs '5,0'). Formatação inconsistente de número mina a sensação de 'organizada / confiável' do DS §1.1.
- **Correção sugerida:** use-count-up.ts:17 → `return `${prefix}${value.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;` Isso corrige também o caminho do prefers-reduced-motion (linha 44), que usa o mesmo format().
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação) · **Também apontado como:** F319
- **Verificação:** confirmado: routes/home/mobile.seg05.png mostra '5.0★'. O texto estático em index.tsx:174 é '5,0★' e é sobrescrito pelo toFixed em use-count-up.ts:17. O mesmo acontece com reduced-motion (linha 44). É um erro de formatação visível, mas não bloqueia nada, então rebaixei para media.

<a id="f061"></a>

## F061 · 🟡 Páginas legais: linhas de ~96 caracteres no desktop e parágrafos de 380–484 caracteres

- **Rotas:** `/privacidade`, `/termos`
- **Onde:** [src/components/legal-page.tsx:17](../../../../src/components/legal-page.tsx#L17)
- **Evidência:** routes/privacidade/desktop.json › dom.longLines: 13 blocos com cpl 96 (width 720, fontSize 15); dom.denseBlocks: 2 <p> com 419 e 484 chars ('O tratamento de dados de crianças…', privacidade.tsx:70-79). routes/termos/desktop.json: 6 longLines cpl 96 + 1 denseBlock 384 chars (termos.tsx:24-32). routes/termos/desktop.fold.png (§1 com 5 linhas cheias) e crop de routes/privacidade/mobile.full.png (§4 com 12+ linhas). legal-page.tsx:17 `max-w-3xl` + :32 `text-[15px]`.
- **Problema:** 96 caracteres por linha excede a faixa de conforto (45–75, tolerável até ~85–90): o olho perde a linha na volta. Os parágrafos densos concentram justamente o que mais interessa ao pai (dados de crianças, §4). DS §1.4 proíbe bloco denso em qualquer peça.
- **Correção sugerida:** Manter o `max-w-3xl` do <main> e pôr `max-w-[70ch]` no div de conteúdo (linha 30), com `text-[15px]` → `text-base`. Quebrar o §4 de privacidade (dados de crianças) em lista com 3 itens.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: legal-page.tsx:17 max-w-3xl (720px úteis) + :32 text-[15px]; privacidade/desktop.json longLines cpl 96. Tem base: DS §1.4 (sem bloco denso) e faixa de conforto de leitura. Rebaixado para media: são páginas legais, pouco lidas e sem impacto em conversão.

<a id="f063"></a>

## F063 · 🟡 Depoimentos cortados por line-clamp-5 no meio da frase, sem forma de ler o resto

- **Rotas:** `/`
- **Onde:** [src/components/testimonials.tsx:97](../../../../src/components/testimonials.tsx#L97)
- **Evidência:** testimonials.tsx:97 `line-clamp-5` no <blockquote>. routes/home/desktop.seg06.png: 'A escola perfeita para quem…', 'como um jogo…', 'Além de…'; mobile.seg06.png e mobile.seg07.png: 'ferramentas para os estudantes. A…', 'limpo, organizado e muito…'. 5 dos 9 REVIEWS têm mais de 200 caracteres (o primeiro tem 292).
- **Problema:** Prova social truncada com reticências parece conteúdo escondido e corta o argumento no melhor trecho ('A escola perfeita para quem…'). O único caminho para ler é sair do site pelo botão 'Ver as 329 avaliações no Google'.
- **Correção sugerida:** Remover `line-clamp-5` do blockquote (97); os cards já têm `h-full` e a faixa flex estica todos à altura do maior. Não reescrever as citações de avaliações reais do Google (risco de alterar depoimento); se precisar encurtar, cortar com '[…]' fiel ao original.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: `line-clamp-5` em testimonials.tsx:97 corta citações longas sem forma de expandir. Problema real de leitura, mas é polimento de prova social, não bloqueio — média.

<a id="f067"></a>

## F067 · 🟡 Horário de funcionamento divergente entre home, contato e FAQ

- **Rotas:** `/`, `/contato`
- **Onde:** [src/routes/index.tsx:1080](../../../../src/routes/index.tsx#L1080)
- **Evidência:** index.tsx:1080 'Seg a Sáb · 8h às 22h' (routes/home/desktop.seg13.png); contato.tsx:108-109 'Seg a Sex · 8h às 22h' + 'Sábado · 8h às 18h' (routes/contato/mobile.full.png); index.tsx:315 FAQ 'segunda a sexta das 8h às 22h e aos sábados das 8h às 18h'.
- **Problema:** Três redações e dois conteúdos para o mesmo dado: a home diz que sábado vai até 22h, o contato e a FAQ dizem 18h. Além do conflito factual, a notação muda (abreviado com '·' vs frase corrida).
- **Correção sugerida:** index.tsx:1080 → 'Seg a Sex · 8h às 22h · Sáb · 8h às 18h' (ou duas linhas <p>), alinhado com contato.tsx:108-109, FAQ l.315 e o openingHoursSpecification de seo.ts:104-116. Se o WhatsApp atende em horário diferente da escola, trocar o rótulo para 'Atendimento no WhatsApp' e confirmar com o Henrique.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** parcial: index.tsx:1080 fica no card 'WhatsApp' e pode ser o horário de atendimento, não o da escola; mesmo assim, diverge de contato.tsx:108-109, FAQ l.315 e seo.ts:113-115 (sábado até 18h). É o mesmo problema de horário do F182. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f074"></a>

## F074 · 🟡 Painel de cookies: badge 'SEMPRE ATIVOS' a 10px e descrições de categoria a 12px

- **Rotas:** `banner de cookies (todas as rotas)`
- **Onde:** [src/components/cookie-consent.tsx:434](../../../../src/components/cookie-consent.tsx#L434)
- **Evidência:** cookie-consent.tsx:434 `text-[10px] font-bold uppercase tracking-wide`; :446 descrição `text-xs`; :368 'O que nunca fazemos' `text-xs`; :320 'Dá para mudar quando quiser…' `text-xs text-[#496B84]/80`. specials/cookie-manage.mobile.png e cookie-banner.mobile.png.
- **Problema:** É o texto que fundamenta o consentimento LGPD (o que cada categoria faz, o que nunca é feito, como revogar). A 12px com cor rebaixada e 10px em caps, a leitura é a mais difícil do site justamente onde a decisão informada é exigência legal.
- **Correção sugerida:** Em `cookie-consent.tsx`: `:446` descrição → `mt-1.5 text-sm leading-relaxed text-[#496B84]`; `:368` 'O que nunca fazemos' → `mt-3 text-sm leading-relaxed text-[#496B84]`; `:320` → `mt-2 text-xs text-[#496B84]` (remover `/80`: 3,67:1 falha AA); `:434` badge → `rounded-full bg-st-green/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-st-blue-dark` (`text-st-green` a 10px dá 2,38:1, falha AA; azul-marinho da paleta dá 12:1). Card já tem `max-h-[85dvh]` + scroll condicional e barra sticky, então o aumento é seguro.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** parcial: Tamanhos confirmados (:434 text-[10px], :446/:368/:320 text-xs). Descrições #496B84 sobre #F5F8FA dão 5.29:1 (AA ok) e legíveis em cookie-manage.mobile.png — 'leitura mais difícil do site' é exagero (home tem 9px). Problemas reais não citados: :320 text-[#496B84]/80 = 3.67:1 (falha AA) e badge :434 verde sobre verde/10 = 2.18:1 (falha). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f075"></a>

## F075 · 🟡 Rodapé: texto legal a 12px e, no mobile, FAB do WhatsApp cobre 'Cookies' e 'reservados.'

- **Rotas:** `/`, `/sobre`, `/sobre/visao`, `/contato`, `/links`, `/privacidade`, `/termos`
- **Onde:** [src/components/site-footer.tsx:85](../../../../src/components/site-footer.tsx#L85)
- **Evidência:** site-footer.tsx:85 `text-xs` no bloco inteiro (copyright + 3 links). routes/home/mobile.footer.png: '…direitos reservad' e 'Co' cortados pelo botão verde; routes/links/mobile.full.png e routes/contato/mobile.full.png idem ('Cooki'). whatsapp-fab.tsx:32 `fixed bottom-5 right-5 h-14 w-14` sem compensação no rodapé. O mesmo FAB cobre texto corrido em routes/contato/mobile.fold.png ('Ribeirão Pre\|SP'), routes/sobre/mobile.fold.png e routes/privacidade/mobile.fold.png.
- **Problema:** O link 'Cookies' é o mecanismo de revogação prometido na Política (§7) e fica permanentemente escondido atrás do FAB no fim da página no mobile; 12px para links jurídicos em fundo escuro é pequeno para leitura e para o toque.
- **Correção sugerida:** Na l.85 trocar `py-6 text-xs` por `pt-6 pb-24 text-sm sm:pb-6`; na l.87 usar `flex flex-wrap justify-center gap-x-3 gap-y-2`; nos links e no botão Cookies adicionar `inline-block py-1` para alvo ≥24px (WCAG 2.5.8).
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: home/mobile.footer.png mostra 'reserv' e 'Co' cobertos pelo FAB (whatsapp-fab.tsx:32 fixed bottom-5 right-5). Texto xs na l.85. É duplicata de F125: corrigir junto. O FAB cobrindo texto corrido no meio da página é transitório (rolagem), não é bloqueio.

<a id="f082"></a>

## F082 · 🟡 CTA primário em caixa alta quebra em 2 linhas no mobile (órfã "GRÁTIS")

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/create`
- **Onde:** [src/components/course-page.tsx:244](../../../../src/components/course-page.tsx#L244)
- **Evidência:** routes/cursos__create__8-9-anos/mobile.fold.png e cursos__create/mobile.fold.png: botão verde ocupa a largura toda com "AGENDAR AULA EXPERIMENTAL" na linha 1 e "GRÁTIS" sozinho na linha 2, ícone desalinhado. Mesmo padrão na CTA final (mobile.seg14.png: "AGENDAR AULA / EXPERIMENTAL"). Código: course-page.tsx:244 e :961 `text-sm font-black uppercase tracking-wider` com label de 32 caracteres (cursos.create.8-9-anos.tsx:262 "Agendar aula experimental grátis"; cursos.create.index.tsx:249). Nas páginas JR o label "Agendar visita guiada grátis" (28 chars) cabe em 1 linha (cursos__junior__5-6-anos/mobile.fold.png).
- **Problema:** O botão mais importante da sales page (DS §9.4 item 1) fica visualmente quebrado em 100% das 6 páginas CREATE e no overview no celular — exatamente o dispositivo do público-alvo. Caixa alta + tracking-wider em 14px estoura os 326px úteis; a palavra órfã "GRÁTIS" perde peso de leitura.
- **Correção sugerida:** Duas frentes. (1) Layout, independente de copy — nos dois `<a>` primários de course-page.tsx (:244 e :961) adicionar `justify-center text-center text-balance` e `shrink-0` no `<WhatsAppIcon>`; assim, quando quebrar, fica 'AGENDAR AULA / EXPERIMENTAL GRÁTIS' centralizado, sem órfã (Tailwind 4 suporta `text-balance`). (2) Copy — decisão de marca do Henrique: usar no hero das 6 páginas CREATE e em cursos.create.index.tsx o mesmo label do CTA final, 'Agendar aula experimental' (25 chars, cabe em 1 linha a 390px/375px/360px), ou 'Aula experimental grátis' (24 chars) se quiser manter 'grátis'. Não usar `whitespace-nowrap` (estoura em 360px) nem reduzir para 13px (DS §3.4).
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: cursos__create__8-9-anos/mobile.fold.png e cursos__create/mobile.fold.png mostram 'AGENDAR AULA EXPERIMENTAL / GRÁTIS'; seg14 mostra CTA final em 2 linhas; JR (28 chars) cabe em 1 linha. Ícone está centralizado (items-center), não desalinhado. Rebaixado: botão continua legível e tocável; DS §8.1 usa o mesmo label/classes, então a origem é o próprio DS.

<a id="f085"></a>

## F085 · 🟡 Micro-textos em 9–11px (selos, pílulas "Aulas", "Conquista", "Gratuito", "Mais procurado")

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/cursos`, `/cursos/camps`, `/cursos/academies`
- **Onde:** [src/components/course-page.tsx:150](../../../../src/components/course-page.tsx#L150)
- **Evidência:** mobile.json › dom.minFont = 10 nas 9 páginas de curso; dom.smallText lista "Sprites, movimento e cenário" (p, 10px), "AULAS 1 A 10" (span, 10px), "CONQUISTA" (10px), "MINI-PROJETO" (11px), "GRATUITO" (10px). Código: course-page.tsx:150 `text-[10px]` (desc do selo), :511 `text-[10px]` (pílula aulas), :535 `text-[11px]`, :548 `text-[10px]`, :796 `text-[10px]`; cursos.academies.tsx:182, 212, 218 `text-[10px]`; cursos.index.tsx:149 `text-[10px]`; RarityBadge "MAIS PROCURADO" 9px (cursos/mobile.json minFont 9, cursos__camps minFont 9). Visível em cursos__create__8-9-anos/mobile.seg06.png (descrição dos selos minúscula sob o nome).
- **Problema:** Abaixo do piso de 12px (HIG: 11pt mínimo; DS §3.4 microcopy = text-xs). A descrição do selo é conteúdo (o que a criança conquista), não decoração — pais lendo no celular não conseguem ler.
- **Correção sugerida:** Piso = `text-xs` (DS §3.4 microcopy). Em course-page.tsx: :150 `mt-0.5 max-w-[150px] text-xs leading-snug text-white/80`; :511 `text-xs font-bold uppercase tracking-wide`; :535 e :670 `text-xs`; :548 `text-xs`; :796 `text-xs`. Em cursos.academies.tsx:182, :212, :218 e cursos.index.tsx:149 → `text-xs`. RarityBadge (src/components/rarity-badge.tsx:17) → `text-[11px]` com `px-2.5` (12px com tracking pode estourar o header do card ao lado do ícone em 390px — conferir cursos/mobile.fold.png após a troca). Registrar em DESIGN_SYSTEM §3.4: "Piso tipográfico: nunca abaixo de text-xs; exceção única RarityBadge 11px". Deixar particular.* e site-header fora deste PR (design próprio, outro escopo).
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Confirmado: course-page.tsx:150, :511, :548, :796 `text-[10px]`; :535 e :670 `text-[11px]`; cursos.academies.tsx:182/212/218 e cursos.index.tsx:149 `text-[10px]`; rarity-badge.tsx:17 `text-[9px]`. mobile.json minFont 10 (cursos: 9). DS §3.4 microcopy = text-xs; HIG typography.md:18 mínimo 11pt. A desc do selo (:150) é conteúdo.

<a id="f087"></a>

## F087 · 🟡 Nome do curso grafado de 4 formas: "CREATE1", "CREATE Ano 1", "CREATE 1+", "Tecnologia Create"

- **Rotas:** `/cursos/create`, `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/academies`, `/cursos`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:242](../../../../src/routes/cursos.create.8-9-anos.tsx#L242)
- **Evidência:** DS §1.6 define identificador `{programa}{n}` e eyebrow `{programa}{n} · {idade}`. Overview segue (cursos.create.index.tsx:65 "CREATE1", :234 "CREATE1 a CREATE6", cursos__create/mobile.fold.png); páginas de curso usam "CREATE Ano 1" (cursos.create.8-9-anos.tsx:242 eyebrow, :321, :383; FAQ "Ano 5/6" em :211); ACADEMIES usa "CREATE 1+" e "CREATE 2+" com espaço (cursos.academies.tsx:104, :123; cursos__academies/mobile.seg05.png); /cursos chama de "Tecnologia Create" em title-case e "Tecnologia Júnior" em vez de JR (cursos.index.tsx:80, :66; cursos/mobile.full.png). JR segue a spec ("JR1 · 5 a 6 anos", cursos.junior.5-6-anos.tsx:239).
- **Problema:** O pai que clica em "CREATE1" no overview cai numa página chamada "CREATE Ano 1" e lê "CREATE 1+" em ACADEMIES — três nomes pra mesma coisa numa jornada de 2 cliques. Quebra a convenção escrita no DS e enfraquece a marca do produto.
- **Correção sugerida:** Seguir o DS §1.6: eyebrow 'CREATE1 · 8 a 9 anos' (L242 e equivalentes nas outras 5 páginas); no corpo e no FAQ, 'CREATE1…CREATE6' no lugar de 'CREATE Ano N'; ACADEMIES L104/L123 → 'CREATE1+' / 'CREATE2+'. Deixar /cursos fora deste achado.
- **Esforço:** médio · **Severidade:** Média
- **Verificação:** parcial: Há 34 ocorrências de 'CREATE Ano' nas páginas de curso, contra 'CREATE1' no overview e o padrão do DS:87. Em /cursos, 'Tecnologia Create' (L80, 10 a 15 anos) é outra linha comercial, com faixa própria também usada no site-header.tsx:24. Não é só grafia diferente, então essa parte fica fora. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f093"></a>

## F093 · 🟡 Parágrafos de 6–8 linhas centralizados no mobile (ProgressionTrail, ToolGrid, intros de overview)

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/13-14-anos`, `/cursos/junior`, `/cursos`, `/cursos/academies`, `/cursos/camps`
- **Onde:** [src/components/course-page.tsx:332](../../../../src/components/course-page.tsx#L332)
- **Evidência:** cursos__create__8-9-anos/mobile.seg05.png: descrição da ProgressionTrail em 7 linhas centralizadas (course-page.tsx:332 `mx-auto max-w-2xl text-lg` dentro de `Reveal className="text-center"`); cursos__create__13-14-anos/mobile.seg05.png: 8 linhas centralizadas com 2 strongs; cursos__create__8-9-anos/mobile.seg11.png: ToolGrid description 6 linhas centralizadas (:775); cursos__junior/mobile.seg02.png: intro "Antes mesmo de aprender a ler…" 7 linhas centralizadas (cursos.junior.index.tsx:350); cursos/mobile.fold.png: sub do hero 4 linhas + descrição de família 4 linhas com órfã "dele." (cursos.index.tsx:246, :201); cursos__academies/mobile.seg02.png: 6 linhas centralizadas (cursos.academies.tsx:309).
- **Problema:** Texto centralizado tem margem esquerda irregular; acima de 3 linhas o olho perde o início de cada linha (HIG/WCAG 1.4.8 recomendam alinhamento à esquerda pra blocos). DS §1.4: "se não cabe numa respiração, divide" — 7–8 linhas em 18px no celular é bloco denso.
- **Correção sugerida:** Não usar `text-left sm:text-center`: parágrafo à esquerda sob h2 centralizado fica desalinhado e foge do padrão do repo. Aplicar o DS §1.4 diretamente: (1) em course-page.tsx:332, :775, :580 e nas intros de overview, trocar `text-lg` por `text-base sm:text-lg` (DS §3.4 subtítulo) — já corta ~1 linha no mobile; (2) trocar o `<p>` de descrição por `<div className="mx-auto mt-5 max-w-2xl space-y-3 text-base text-white/85 sm:text-lg">` (ProgressionTrail) e equivalente com `text-muted-foreground` no ToolGrid/ModuleGrid, pra aceitar 2 `<p>`; (3) nas rotas, dividir a copy em 2 parágrafos de ≤ 2 frases ou cortar pra ≤ 160 chars — ex.: ProgressionTrail 8-9 vira "Já na primeira aula seu filho recebe a insígnia **Pixel Iniciante**. A cada módulo, uma nova." + "No Showcase Final fecha o ano com o **Selo CREATE Ano 1**, pronto pro Ano 2."
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Blocos densos existem: 8-9 seg05 (7 linhas, :332), seg11 (6 linhas, :775), academies seg02 (6 linhas). Mas centralização é o padrão do próprio DS (`mx-auto max-w-3xl text-center`, §3.5) e WCAG 1.4.8 é AAA — a base sólida é DS §1.4 (dividir/encurtar), não o alinhamento. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f095"></a>

## F095 · 🟡 Linhas de 116–148 caracteres no desktop (BridgeBanner e footnote do FormatSection)

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/7-8-anos`, `/cursos/academies`
- **Onde:** [src/components/course-page.tsx:736](../../../../src/components/course-page.tsx#L736)
- **Evidência:** cursos__create__8-9-anos/desktop.json › dom.longLines: {cpl: 116, width: 928, fontSize: 16, text: "Quem fez o JR3 chega já tendo visto blocos…"} — BridgeBanner `<div className="flex-1 min-w-[280px]"><p …>` sem max-width (course-page.tsx:734-736) dentro de container max-w-6xl. cursos__junior__5-6-anos/desktop.json › dom.longLines: {cpl: 148, width: 1038, fontSize: 14, text: "Sobre o formato dividido…"} — footnote `<p className="text-sm">` (course-page.tsx:475) em card de largura total. cursos__academies/desktop.json: cpl 116 (BridgeBanner). manifest: longLines=1 em 8-9, 12-13, 13-14, 5-6, 7-8, academies.
- **Problema:** Acima de ~75–90 caracteres por linha o olho perde a linha ao voltar (HIG typography, WCAG 1.4.8: ≤ 80). 148 caracteres em 14px é o pior caso do escopo, justamente no texto que explica o formato de aula.
- **Correção sugerida:** BridgeBanner (course-page.tsx:736): `<p className="mt-1.5 max-w-[75ch] text-sm text-white/90 sm:text-base">` — 75ch fica na faixa 75–90 e não deixa o banner gradiente visivelmente vazio à direita como `max-w-prose` (65ch) deixaria. Footnote (course-page.tsx:473-476): `<div className="mx-auto mt-8 max-w-3xl rounded-xl border bg-white p-6 shadow-sm">` e `<p className="text-base">` — 48rem a 16px dá ~85 cpl. Grid de 2 colunas é overengineering pra um parágrafo único.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: desktop.json longLines: cpl 116/928px em 8-9, 12-13, 13-14, junior 7-8 e academies (BridgeBanner :734-736, `min-w-[280px]` sem max-w); cpl 148/1038px 14px em junior 5-6 (footnote :475). platform-design-web SKILL.md:629-635 limita ~75ch. desktop.full do 5-6 está em branco (Reveal), mas a medição do DOM confirma.

<a id="f096"></a>

## F096 · 🟡 Corpo principal de cards, checklist e FAQ em 14px, contra o text-base do DS §3.4

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`, `/cursos/academies`, `/cursos/camps`
- **Onde:** [src/components/course-page.tsx:913](../../../../src/components/course-page.tsx#L913)
- **Evidência:** mobile.json › dom.fonts das 9 páginas de curso: a variante mais frequente é "14px/20px w400 Poppins ×20–21". Código: checklist `text-sm` (course-page.tsx:390), desc do FormatSection `text-sm` (:466), objetivos do módulo `text-sm` (:521), mini-projeto `text-sm` (:532), meta da aula `text-sm` (:692), papel da ferramenta `text-sm` (:802), pilar `text-sm` (:866), resposta do FAQ `text-sm` (:913). Visível em cursos__create__8-9-anos/mobile.seg06.png (objetivos do módulo em 14px após h3 de 24px) e seg13/14 (FAQ).
- **Problema:** DS §3.4 define parágrafo padrão como `text-base text-muted-foreground`; o conteúdo que responde às objeções do pai (FAQ, o que a criança aprende, formato) está todo 1 degrau abaixo, com contraste de escala grande demais em relação aos h3 font-black (24px→14px).
- **Correção sugerida:** Subir pra `text-base` só o que é conteúdo argumentativo, não tudo: resposta do FAQ (course-page.tsx:913 → `px-4 pb-5 text-base text-muted-foreground`), objetivos do módulo (:521 → `mt-4 text-base text-foreground/85`), descrição do formato (:466 → `mt-2 text-base text-muted-foreground`), footnote (:475, junto com F095) e checklist "Para quem é" (:390 → `text-base`). Manter `text-sm` em metadados curtos: meta da aula (:692), mini-projeto (:532), papel da ferramenta (:802) e pilar (:866) — são one-liners em grid de card, onde text-sm é padrão de mercado. Conferir os cards do FormatSection em md:grid-cols-3 no desktop após a troca.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Todas as linhas conferem `text-sm` (:390, :466, :521, :532, :692, :802, :866, :913) e mobile.json mostra 14px como fonte mais frequente. Porém DS §3.4 define text-base para "parágrafo padrão" de seção; não fixa tamanho de corpo de card/FAQ. Vale como recomendação (FAQ e objetivos são conteúdo de objeção), não como violação literal. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f097"></a>

## F097 · 🟡 Escala tipográfica sem disciplina: 23–27 variantes tamanho/peso por página

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`
- **Onde:** [src/components/course-page.tsx:511](../../../../src/components/course-page.tsx#L511)
- **Evidência:** manifest: fontVariants desktop = 25 (8-9), 27 (13-14), 23–25 nas demais páginas de curso. cursos__create__8-9-anos/desktop.json › dom.fonts: 11 tamanhos (10, 11, 12, 14, 16, 18, 20, 24, 36, 48, 72px) × pesos 400/500/600/700/900, incluindo triplas quase idênticas: "12px w900", "12px w700", "12px w600", "12px w500", "12px w400" e "10px w700", "10px w900", "11px w900". Microlabels em 4 receitas: `text-xs font-black uppercase tracking-[0.25em]` (:508), `text-[10px] font-bold uppercase` (:511), `text-[11px] font-black uppercase tracking-wider` (:535), `text-[10px] font-bold uppercase tracking-wider` (:548), `text-[10px] font-black uppercase tracking-wider` (:796).
- **Problema:** DS §3.3–3.5 define ~8 estilos (H1, H2, H3 card, sub, parágrafo, bullets, eyebrow, chip). Com 25 combinações, elementos do mesmo papel (rótulo de metadado) têm aparências diferentes na mesma tela e nada se destaca — HIG: "use a limited set of text styles".
- **Correção sugerida:** Não criar classes `.t-*` (Tailwind v4 exigiria `@utility`; o padrão do repo é receita inline). Fixar 3 receitas no DESIGN_SYSTEM.md e aplicá-las em course-page.tsx: (a) eyebrow de seção = `text-sm font-black uppercase tracking-[0.25em]` (já é a dominante: 59 usos no site) — l.376, 441, 574, 624, 770, 841, 890 já estão certas; l.328 (ProgressionTrail) trocar `text-xs`→`text-sm`; (b) label de metadado = `text-xs font-bold uppercase tracking-wider` — aplicar em l.131, 147 (`font-black`→`font-bold`), 209, 508 (`tracking-[0.25em]`→`tracking-wider`, `font-black`→`font-bold`), 511, 535, 548, 654, 670, 796 (todos `text-[10px]`/`text-[11px]`→`text-xs`, `font-black`→`font-bold`); (c) meta = `text-xs font-semibold text-muted-foreground` — l.518 já é; l.658 acrescentar `font-semibold`. l.150 (`text-[10px]` desc do selo) → `text-xs`. Resultado: zero 10/11px no arquivo, ~16 variantes/página.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: desktop.json (8-9) › dom.fonts lista 25 combinações: 11 tamanhos (10–72px) × pesos 400/500/600/700/900, com 12px em 5 pesos e 10px em 700/900. Receitas de microlabel divergentes confirmadas em course-page.tsx:508, :511, :535, :548, :796 e :654/:670. manifest: 23–27 variantes nas 8 páginas de curso.

<a id="f103"></a>

## F103 · 🟡 Texto decorativo "10110" sobreposto à legenda "CRIANÇAS · 5–9 ANOS" no desktop

- **Rotas:** `/cursos`
- **Onde:** [src/components/decorative-elements.tsx:68](../../../../src/components/decorative-elements.tsx#L68)
- **Evidência:** cursos/desktop.fold.png e desktop.full.png: o binário decorativo "01001 / 10110" em monoespaçada (desktop.json › dom.fonts: "14px/21px w700 monospace ×2") aparece imediatamente abaixo/sobre a legenda "CRIANÇAS · 5–9 ANOS", colidindo com o texto. Código: `<DecorativeElements variant="default" color="#187ABF" />` (cursos.index.tsx:238) posicionado sobre o hero de `max-w-3xl` centralizado.
- **Problema:** Elemento decorativo com texto legível colide com texto informativo, reduzindo a legibilidade da legenda que explica o código de cores da página.
- **Correção sugerida:** No variant default, tirar o Binary do centro: trocar `style={{ bottom: "14%", left: "38%" }}` por `style={{ bottom: "18%", left: "6%" }}` e adicionar `hidden lg:block` ao className (fica na lateral, longe de texto centralizado). Conferir também o hero da home (index.tsx:390), que usa o mesmo variant.
- **Esforço:** trivial · **Severidade:** Média (proposta Baixa, recalibrada na verificação)
- **Verificação:** confirmado: cursos/desktop.fold.png: "01001/10110" sobre "CRIANÇAS · 5–9 ANOS". Causa real: Binary em left:38%/bottom:14% no variant default (decorative-elements.tsx:68), não cursos.index.tsx:238. Colisão visível no primeiro fold: sobe para media.

<a id="f105"></a>

## F105 · 🟡 Subtítulo do hero em monospace 14px a 55% nas 14 páginas de Programação

- **Rotas:** `/particular/cursos/python`, `/particular/cursos/typescript`, `/particular/cursos/jogos`, `/particular/cursos/logica`, `/particular/cursos/git`, `/particular/cursos/n8n`, `/particular/cursos/make`, `/particular/cursos/sql`, `/particular/cursos/frontend`, `/particular/cursos/backend`, `/particular/cursos/fullstack`, `/particular/cursos/mobile`, `/particular/cursos/python-apis`, `/particular/cursos/ads`
- **Onde:** [src/components/course-skins/ide.tsx:84](../../../../src/components/course-skins/ide.tsx#L84)
- **Evidência:** ide.tsx:332 `<p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-white/55 sm:text-base">` envolvendo `v.doc[0] + tagline + v.doc[1]` (ide-variantes.ts:26 `'"""'`, :50 `/** */`, :62 `<!-- -->`). Screenshots: routes/particular__cursos__python/mobile.fold.png ('"""Automatize tarefas repetitivas…"""' em mono cinza), routes/particular__cursos__typescript/mobile.fold.png ('/** Escreva JavaScript… */'), routes/particular__cursos__jogos/desktop.fold.png. python mobile.json › fonts: '12.5px/24px w400 ui-monospace ×33', '9.5px ui-monospace ×27'.
- **Problema:** DESIGN_SYSTEM §3.4 define sub de hero como `text-base sm:text-lg` em Poppins muted; aqui a promessa do curso vai para 14px em fonte de sistema (Consolas/Menlo, varia por SO), cercada de aspas/barras de comentário que o público iniciante em programação não decodifica. É a segunda linha mais importante da venda e é a menos legível da página.
- **Correção sugerida:** ide.tsx:84 → `<p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">` com `<span className="font-mono text-white/30">{v.doc[0]}</span><span className="font-sans">{course.tagline}</span><span className="font-mono text-white/30">{v.doc[1]}</span>`.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Existe em ide.tsx:84 (não 332; arquivo tem 169 linhas). Mono 14/16px a 55% confirmado no python/desktop.fold, mas o contraste passa AA (~6:1) e é metáfora intencional da pele; desvio de DS §3.4 real, impacto moderado. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f106"></a>

## F106 · 🟡 Público-alvo, tópicos e resultado renderizados como código monospace 12,5px na pele IDE

- **Rotas:** `/particular/cursos/python`, `/particular/cursos/typescript`, `/particular/cursos/jogos`, `/particular/cursos/sql`, `/particular/cursos/git`, `/particular/cursos/backend`, `/particular/cursos/frontend`, `/particular/cursos/fullstack`, `/particular/cursos/mobile`, `/particular/cursos/logica`, `/particular/cursos/make`, `/particular/cursos/n8n`, `/particular/cursos/python-apis`, `/particular/cursos/ads`, `/particular/cursos/canva`, `/particular/cursos/copywriting`, `/particular/cursos/photoshop`, `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/course-skins/variants/ide-kit.tsx:48](../../../../src/components/course-skins/variants/ide-kit.tsx#L48)
- **Evidência:** manifest › fontVariants: canva 57 desktop/51 mobile, backend 48/49, copywriting 47/45, git 46/47, photoshop 45/43; mínimo 31 (python); landing 26. canva mobile.json › fonts inclui Poppins, ui-monospace e ui-serif em 40 combinações (8px, 9px, 10px, 11px, 12px, 14px, 15px, 16px, 18px, 20px, 24px, 30px, 31px, 36px, 48px, 60px). Tamanhos arbitrários no código: ide-kit.tsx:48 `text-[12.5px] sm:text-[13px]`, ide-typescript.tsx:116 `text-[12.5px]`, informatica.tsx:361 `text-[17px]`, :493 `text-[15px]`, planilha-excel-power-bi.tsx:210 `text-[15px]`, ti-linux.tsx:58 `text-[13px]`, marketing-copywriting.tsx:79 `text-[17px]`.
- **Problema:** Corpo de texto abaixo de 14px em monospace com quebra de linha no meio de strings: as frases de identificação ('Você perde horas por semana…') e o conteúdo programático — decisão de compra — ficam mais difíceis de ler do que a moldura decorativa. A pele já resolve isso em ide-sql.tsx:167 (`[font-family:Poppins] text-[14px]`) mas não nas outras 13 variantes.
- **Correção sugerida:** Prop `prose` no Ln/Code resolve só ide-python.tsx (única variante que usa Code). Nas demais (git, jogos, logica, n8n, make, mobile, fullstack, ads) trocar texto de conteúdo `font-mono text-[12px]/[12.5px]` por `[font-family:Poppins,system-ui,sans-serif] text-[14px] sm:text-[15px] leading-relaxed text-white/90`, padrão já usado em ide-sql.tsx:167 e ide-backend.tsx:47.
- **Esforço:** médio · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: ide-kit.tsx:48 `text-[12.5px] sm:text-[13px]` confirmado, mas só ide-python usa o kit. backend, typescript, frontend, sql e python-apis já usam Poppins no conteúdo (contradiz 'as outras 13'). Evidência de fontVariants não prova o achado. python/mobile.seg04 legível, porém denso. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f107"></a>

## F107 · 🟡 Texto de pagamento a 12px com 104 caracteres por linha no card de custos (todas as 52 páginas)

- **Rotas:** `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/course-skins/common.tsx:293](../../../../src/components/course-skins/common.tsx#L293)
- **Evidência:** common.tsx:133 `const small = look.small ?? "text-xs"`; :293-294 `<p className={`mt-4 ${small} ${look.muted}`}>{FORMAS_PAGAMENTO}</p>` e `{FORMAS_PAGAMENTO_DETALHE}` (shared.tsx:588-592, 76 e 131 chars). manifest › longLines desktop em 50 rotas: 'Combinações aceitas — entrada no Pix…' cpl 104, width 622, fontSize 12. Screenshots: crops/particular__cursos__excel.desktop.s07.png (duas linhas cinza-claro de 12px), routes/particular__cursos__excel/mobile.seg13.png.
- **Problema:** Informação que decide a compra (formas de pagamento, parcelamento, boleto) está no menor tamanho da página, em cor muted, com linhas acima do limite de 80–90 caracteres — exatamente o texto que o pai/aluno vai procurar antes de chamar no WhatsApp.
- **Correção sugerida:** common.tsx:293-294: `<p className={`mt-4 text-sm leading-relaxed ${look.text}`}>{FORMAS_PAGAMENTO}</p>` e `<p className={`mt-2 max-w-[60ch] text-sm leading-relaxed ${look.muted}`}>{FORMAS_PAGAMENTO_DETALHE}</p>`. Manter `text-xs` só no rótulo 'Custos únicos'. Chips/`<ul>` são desnecessários — o separador '·' já escaneia bem.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Código confere: small = text-xs (linha 133), aplicado em :293-294 ao FORMAS_PAGAMENTO_DETALHE (shared.tsx:214, 131 chars). desktop.json excel: cpl 104, width 622, 12px. Porém no mobile (seg13) o texto quebra em ~45 chars e é legível; a linha longa só ocorre no desktop e a info principal (Pix, 12x) está na primeira linha. Severidade alta exagerada. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f108"></a>

## F108 · 🟡 Preço à vista e '12x de' em 12px muted enquanto a parcela tem 30px — hierarquia invertida

- **Rotas:** `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/course-skins/common.tsx:255](../../../../src/components/course-skins/common.tsx#L255)
- **Evidência:** common.tsx:249 `<p className={`${small} ${look.muted}`}>12x de</p>`; :250 parcela `text-3xl font-black`; :253 'sem juros no cartão' `${small}`; :255 `ou {m.investimento.totalFormatted} à vista` em `${small} ${look.muted}` (12px). Screenshots: crops/particular__cursos__excel.desktop.s06.png ('ou R$ 4.565,50 à vista' minúsculo sob 'R$ 380,46'), routes/particular__cursos__jogos/mobile.seg11.png ('ou R$ 7.728,00 à vista' em 12px cinza).
- **Problema:** O valor total do curso (R$ 4.565,50 a R$ 9.936,00) — a informação que o comprador compara — aparece no mesmo tamanho do disclaimer, em cinza. Um adulto lendo no celular pode entender que o curso custa R$ 380 e descobrir o total só no WhatsApp; a assimetria também soa como 'letra miúda'.
- **Correção sugerida:** common.tsx:249 → `<p className={`text-sm ${look.muted}`}>12x de</p>`; :253 manter `${small}`; :255 → `<p className={`mt-1.5 text-sm font-semibold ${look.text}`}>ou {m.investimento.totalFormatted} à vista</p>`. Parcela continua em `text-3xl` como âncora; total passa a 14px em cor de texto, não muted.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Confirmado no código (:249 '12x de' e :255 'ou … à vista' em text-xs muted; :250 parcela text-3xl) e no screenshot jogos/mobile.seg11.png ('ou R$ 7.728,00 à vista' 12px cinza). Mas 'parcela grande + total menor' é padrão de mercado e o total está logo abaixo, visível; não é 'letra miúda' escondida. Merece destaque maior, não é alta. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f109"></a>

## F109 · 🟡 Serifa de sistema (Times/Georgia) usada como fonte decorativa nas peles Design e Copywriting

- **Rotas:** `/particular/cursos/canva`, `/particular/cursos/photoshop`, `/particular/cursos/capcut`, `/particular/cursos/davinci`, `/particular/cursos/premiere`, `/particular/cursos/copywriting`
- **Onde:** [src/components/course-skins/design.tsx:247](../../../../src/components/course-skins/design.tsx#L247)
- **Evidência:** design.tsx:247 `<span className="block font-serif text-2xl italic text-(--accent-2) sm:text-3xl">{kicker}</span>` (h1 'Design Gráfico' / 'Edição de Vídeo'); marketing-copywriting.tsx:21 `const SERIF = "font-serif"` aplicado em :62, :79 (público-alvo `text-[17px]`), :152-153 (h3 e outcome `italic`), :163, :183-187. design-canva.tsx:98,113,145,160 números em `font-serif text-5xl italic`. canva mobile.json › fonts: '60px/60px w400 ui-serif ×5', '30px/37.5px w400 ui-serif ×2', '48px/48px w400 ui-serif'. styles.css:155 define só Poppins. Screenshots: routes/particular__cursos__canva/mobile.fold.png e premiere/davinci/photoshop mobile.fold.png (kicker amarelo em itálico serifado), crops/particular__cursos__copywriting.desktop.s02.png e .s04.png (Times em todo o conteúdo).
- **Problema:** DESIGN_SYSTEM §3.1 pede 'sem serifa, 1 fonte principal, no máximo 1 de apoio' e §11 lista 'fontes amadoras ou decorativas' como regra dura. `font-serif` do Tailwind resolve para `ui-serif` — Times New Roman no Windows, Georgia/Times no Mac — sem controle de peso, itálico ou métricas, e muda de máquina para máquina; em Copywriting é o corpo inteiro do bloco de conteúdo.
- **Correção sugerida:** Confirmado: 22 usos de `font-serif` (design.tsx:247, marketing-copywriting.tsx, design-canva.tsx); styles.css só importa Poppins 400/700/900, então `font-serif` cai em Times/Georgia do sistema. Fase 1 (segura): kicker em design.tsx:247 → `block text-2xl font-bold italic text-(--accent-2) sm:text-3xl` e números do canva → `font-black tabular-nums` (adicionar `@import "@fontsource/poppins/700-italic.css"` em styles.css, já existe em node_modules). Fase 2 (decisão de marca): se Copywriting mantiver a metáfora editorial, importar uma única serifa (`@fontsource/source-serif-4` 600 + 600-italic), registrar `--font-serif` em @theme, usar só em h3/kicker; corpo e público-alvo voltam a Poppins.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: design.tsx:247 kicker em font-serif italic (visível em davinci mobile.fold.png, 'Edição de Vídeo' em serifa amarela); marketing-copywriting.tsx:21 SERIF aplicado a h3, público-alvo e corpo (:62,:79,:152-187); design-canva.tsx:98-160 números. canva mobile.json fonts: 'ui-serif' 60px ×5, 30px ×2. styles.css:155 só Poppins; DESIGN_SYSTEM §3.1 'Sem serifa… Decorativa é proibido'.

<a id="f110"></a>

## F110 · 🟡 CTA em caixa alta com nome longo vira botão de 2 linhas ('QUERO O DESENVOLVIMENTO DE JOGOS: UNITY E GODOT')

- **Rotas:** `/particular/cursos/jogos`, `/particular/cursos/conteudo-ia`, `/particular/cursos/redes`, `/particular/cursos/logica`, `/particular/cursos/mobile`, `/particular/cursos/frontend`, `/particular/cursos/backend`, `/particular/cursos/make`, `/particular/cursos/n8n`, `/particular/cursos/* (52 páginas)`, `/particular/cursos/ia`
- **Onde:** [src/components/course-skins/common.tsx:272](../../../../src/components/course-skins/common.tsx#L272)
- **Evidência:** common.tsx:284 `<p className={`text-xs font-black uppercase tracking-[0.2em] ${look.muted}`}>Custos únicos — pagos uma vez só</p>` (32 chars + tracking 0,2em em card de 326px). Screenshots: routes/particular__cursos__excel/mobile.seg13.png e routes/particular__cursos__jogos/mobile.seg12.png ('CUSTOS ÚNICOS — PAGOS UMA VEZ' / 'SÓ'). ia-geral.tsx:138 `{etapa} · módulo {pad(i+1)}` em `text-[11px] font-bold uppercase tracking-[0.18em]` gera 'IA: ESSENCIAL AO PROFISSIONAL COM AGENTES · MÓDULO 02' (52 chars) em 2 linhas — routes/particular__cursos__ia/mobile.seg05.png.
- **Problema:** Caixa alta + tracking largo em frase de 35–47 caracteres reduz muito a velocidade de leitura (HIG typography: uppercase só em rótulos curtos) e quebra o botão em duas linhas com dois pontos no meio, perdendo a força do CTA principal.
- **Correção sugerida:** Duas partes: (1) adicionar `ctaLabel` curto nos 8 tiers sem ele (jogos: 'Jogos', frontend: 'Front-End', backend: 'Back-End', mobile: 'Apps', redes: 'Redes', logica: 'Lógica', conteudo-ia: 'Conteúdo com IA', make: 'Make') — o padrão `Quero o {ctaLabel ?? levelName}` já existe em common.tsx:272 e particular-course-page.tsx:608; (2) common.tsx:284 trocar texto por 'Custos únicos' e `tracking-[0.2em]` por `tracking-[0.15em]`, movendo 'pagos uma vez só' para um `<span className={`ml-2 normal-case tracking-normal font-medium`}>`. O item ia-geral.tsx:138 é caso separado: `tracking-[0.18em]` → `[0.12em]` e omitir o nome da etapa quando for igual ao do curso.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: common.tsx:272 usa `t.ctaLabel ?? t.levelName`; particular.cursos.jogos.tsx:35 não define ctaLabel, então o botão (uppercase tracking-wider, :112) recebe 'Desenvolvimento de Jogos: Unity e Godot' — jogos/mobile.seg12.png mostra 2 linhas. 'CUSTOS ÚNICOS — PAGOS UMA VEZ / SÓ' órfão confirmado (common.tsx:284, seg12/seg13). Correção simples: ctaLabel na rota.

<a id="f111"></a>

## F111 · 🟡 H1 com nome de curso de até 65 caracteres ocupa 5 linhas no celular

- **Rotas:** `/particular/cursos/ia`, `/particular/cursos/impressao-3d`, `/particular/cursos/ads`, `/particular/cursos/excel-power-bi`, `/particular/cursos/photoshop`, `/particular/cursos/ia-visual`, `/particular/cursos/typescript`, `/particular/cursos/jogos`, `/particular/cursos/manutencao`, `/particular/cursos/meta-ads`, `/particular/cursos/rag`, `/particular/cursos/seo`, `/particular/cursos/make`
- **Onde:** [src/routes/particular.cursos.ia.tsx:19](../../../../src/routes/particular.cursos.ia.tsx#L19)
- **Evidência:** nome: 'Inteligência Artificial: do Essencial ao Profissional com Agentes' (65 chars) renderizado em ia.tsx:540 `text-4xl … sm:text-5xl lg:text-[3.4rem]`; impressao-3d 44 chars em h1 `uppercase` (oficina.tsx:854); ads 43, excel-power-bi 42, photoshop 40, ia-visual 40, typescript 39, jogos 39, manutencao 37. Screenshots: routes/particular__cursos__ia/mobile.fold.png (h1 em 5 linhas de 36px, empurrando o CTA para baixo da dobra), routes/particular__cursos__impressao-3d/mobile.fold.png (3 linhas em caixa alta), routes/particular__cursos__typescript/mobile.fold.png (3 linhas + cursor). O mesmo nome reaparece em 'Pronto pra começar com {nome}?' (common.tsx:358) e no card de plano (common.tsx:241).
- **Problema:** DESIGN_SYSTEM §1.3: 'Headlines: arco emocional em 1 linha; subs: 1 frase concreta'. Cinco linhas de h1 preto consomem a dobra inteira do celular e o subtítulo/CTA só aparecem depois do scroll. A pele Design já resolve com `splitNome` (kicker + principal), mas as outras 7 não.
- **Correção sugerida:** Levar splitNome de design.tsx:75 para um util compartilhado e usá-lo no h1 de ia.tsx:123. "Inteligência Artificial" fica como principal e "do Essencial ao Profissional com Agentes" vira uma linha menor (text-lg font-semibold). Não mexer em nome/levelName por causa das chaves de TIER_META.
- **Esforço:** pequeno · **Severidade:** Média · **Também apontado como:** F114
- **Verificação:** parcial: O nome está em ia.tsx:19 (não na 21) e o h1 em skins/ia.tsx:123. A screenshot mobile.fold confirma 5 linhas. Mas o CTA "Quero saber mais" continua visível na dobra (~545px de 844), então "CTA abaixo da dobra" é falso. Os outros cursos têm 2 a 3 linhas, o que é aceitável. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f113"></a>

## F113 · 🟡 Rótulos de 10–11px em caixa alta com tracking largo nos heros das peles

- **Rotas:** `/particular/cursos/* (peles marketing, ti, design, oficina, planilha — 35 páginas)`
- **Onde:** [src/components/course-skins/marketing.tsx:303](../../../../src/components/course-skins/marketing.tsx#L303)
- **Evidência:** marketing.tsx:636 `<dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">` (CANAL/FORMATO/CARGA/ETAPAS/PLANO), :594 eyebrow `text-[11px] … tracking-[0.18em]`; ti.tsx:708 `<dt className="… text-[10px] font-bold uppercase tracking-wider">` (CARGA/INTENSIVO/PADRÃO), :624 eyebrow `font-mono text-[11px] … tracking-[0.22em]`, :688 'online' 11px; design.tsx:238 categoria `font-mono text-[10px] … tracking-[0.2em]`, :197 barra REC 10px, :268 duração 11px; oficina.tsx:849 eyebrow `font-mono text-[11px] … tracking-[0.2em]`, :719 Dim 11px, :872 chips 11px; planilha.tsx:188 tag `font-mono text-[11px]`, :227 status 11px; marketing-tokens.ts:18 `KICKER = "text-[11px] font-bold uppercase tracking-[0.16em]"`. Screenshots: routes/particular__cursos__marketing/desktop.fold.png (faixa CANAL…), routes/particular__cursos__suporte/desktop.fold.png, routes/particular__cursos__canva/desktop.fold.png ('DESIGN & CRIAÇÃO' 10px).
- **Problema:** DESIGN_SYSTEM §3.4 fixa microcopy/eyebrow em `text-xs` (12px) e §12 exige AA; 10px em branco a 40–45% sobre fundo escuro, ainda com tracking de 0,18–0,22em, é ilegível em desktop 1× e falha na regra prática de 12px mínimo (o próprio smallText do audit marca tudo < 12px). São rótulos que carregam fatos do curso (carga, ritmo, canal).
- **Correção sugerida:** Nos rótulos que carregam fatos do curso: marketing.tsx:303 `text-[10px] ... text-white/40` → `text-xs ... text-white/65`; ti.tsx:130 `text-[10px]` → `text-xs`, `text-white/45` → `text-white/65`; design.tsx:238 → `text-xs`; variants/marketing-tokens.ts:18 KICKER → `text-xs`. Mocks decorativos (design.tsx:197 REC) podem ficar.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Linhas corrigidas: marketing.tsx:303 (dt de 10px a white/40, contraste abaixo de AA), ti.tsx:130, design.tsx:238, marketing-tokens.ts:18. DS §3.4 manda eyebrow em text-xs. Os números 636/708/849 citados não existem (os arquivos têm menos de 340 linhas).

<a id="f115"></a>

## F115 · 🟡 Peso e escala de h1/h2 divergem entre as 8 peles (font-bold vs font-black, 4xl vs 5xl)

- **Rotas:** `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/course-skins/ia.tsx:123](../../../../src/components/course-skins/ia.tsx#L123)
- **Evidência:** ia.tsx:540 h1 `text-4xl font-bold … sm:text-5xl lg:text-[3.4rem]` e :455 `h2: "text-3xl font-bold"`; design.tsx:250 principal `text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl`; informatica.tsx:230 `text-5xl font-black … sm:text-6xl`; planilha.tsx:193, ti.tsx:694, marketing.tsx:600, ide.tsx:326 `text-4xl font-black … sm:text-5xl lg:text-6xl`; oficina.tsx:854 `uppercase`. Eyebrows: planilha `text-xs font-black tracking-[0.25em]` (common.tsx:59), ide `font-mono text-sm` sem uppercase (:74 — 'Investimento', 'Dúvidas frequentes' em minúsculas, routes/particular__cursos__jogos/mobile.seg11.png), oficina `font-mono text-[11px]`, ia `text-xs font-bold tracking-[0.22em]`, informatica `text-sm font-bold tracking-[0.18em]`. Screenshots: routes/particular__cursos__ia/desktop.fold.png vs routes/particular__cursos__excel/desktop.fold.png vs routes/particular__cursos__canva/desktop.fold.png.
- **Problema:** DESIGN_SYSTEM §3.3 fixa H1 hero e H2 em `font-black tracking-tight` e §3.5 um único padrão de eyebrow. Ao navegar entre categorias pela sidebar, o título muda de peso, tamanho e caixa, e o eyebrow muda de família e caixa — o usuário sente que trocou de site, não de curso.
- **Correção sugerida:** Confirmado: `Look` já existe em common.tsx:26 com `eyebrow`/`h2` por pele, mas ia.tsx:38 usa `font-bold` no h2 e :123 `font-bold` no h1; design/informatica `text-5xl…lg:text-7xl`, demais `text-4xl…lg:text-6xl`; eyebrow do ide é `font-mono text-sm` sem uppercase. Não existe shared.ts — criar as constantes em course-skins/shared.tsx: `H1 = "text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl"`, `H2 = "text-3xl font-black tracking-tight sm:text-4xl"`, `EYEBROW = "text-xs font-bold uppercase tracking-[0.2em]"`; os `Look` de common.tsx e os objetos locais de ia/design/ti/marketing/informatica/oficina compõem `${H2} text-(--accent)`. Exceção documentada: design mantém kicker + `lg:text-7xl`; oficina mantém `uppercase` no H1; ide pode manter `font-mono` no eyebrow mas com `uppercase tracking-[0.2em]`.
- **Esforço:** médio · **Severidade:** Média
- **Verificação:** confirmado: Linha errada: h1 da pele IA está em ia.tsx:123 (text-4xl font-bold … lg:text-[3.4rem]) e h2 em :38 (font-bold); informatica.tsx:230 text-5xl font-black sm:text-6xl; planilha:193/ti:116/marketing:267/ide:78 text-4xl font-black lg:text-6xl; oficina:192 uppercase. Eyebrows: common.tsx:59 text-xs font-black, ia:37 text-xs font-bold, informatica:72 text-sm font-bold, ide:74 font-mono sem uppercase. DESIGN_SYSTEM §3.3/§3.5 fixam font-black e um padrão só.

<a id="f118"></a>

## F118 · 🟡 Tópicos do conteúdo com 116–156 caracteres por linha em Informática e Power BI (desktop)

- **Rotas:** `/particular/cursos/informatica`, `/particular/cursos/power-bi`, `/particular/cursos/excel-power-bi`, `/particular/cursos/office`, `/particular/cursos/powerpoint`
- **Onde:** [src/components/course-skins/informatica.tsx:527](../../../../src/components/course-skins/informatica.tsx#L527)
- **Evidência:** informatica.tsx:527 `<p className="mt-0.5 text-base leading-relaxed text-slate-800 sm:text-[17px]">{t}</p>` em lista `max-w-6xl` sem limite de linha — informatica desktop.json › longLines ×5: cpl 116, width 990, 17px. planilha-power-bi.tsx:138-146 tabela `w-full text-sm` — power-bi desktop.json › longLines ×5: cpl 156, width 1090, 14px; outcome 15px 148–150 cpl em office/powerpoint/excel-power-bi (planilha-pacote.tsx:268, planilha-powerpoint.tsx:215, planilha-excel-power-bi.tsx:210). Screenshots: crops/particular__cursos__informatica.desktop.s04.png (tópicos 1.4 e 1.5 atravessando ~1000px), crops/particular__cursos__power-bi.desktop.s03.png.
- **Problema:** Linhas de 116–156 caracteres fazem o olho perder o retorno de linha; ironicamente a pele Informática é a que declara priorizar leitura para público iniciante e mais velho (informatica.tsx:36-38).
- **Correção sugerida:** informatica.tsx:527: `className="mt-0.5 max-w-[70ch] text-base ..."`. variants/planilha-power-bi.tsx:146: `<td className="max-w-[70ch] py-2 ...">` ou tabela `max-w-4xl`. Outcomes em planilha-pacote.tsx:268, planilha-powerpoint.tsx e planilha-excel-power-bi.tsx: `max-w-[65ch]`.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: desktop.json: informatica com 5 linhas de 116 cpl em 990px a 17px, power-bi 156 cpl em 1090px, office outcome 148 cpl. Código em informatica.tsx:527 e planilha-power-bi.tsx:138-146 (`w-full`) sem limite de medida.

<a id="f119"></a>

## F119 · 🟡 Resultado do curso aparece duas vezes na mesma página com o texto idêntico

- **Rotas:** `/particular/cursos/* (52 páginas)`, `/particular`
- **Onde:** [src/components/course-skins/common.tsx:247](../../../../src/components/course-skins/common.tsx#L247)
- **Evidência:** common.tsx:249 '12x de' e shared.tsx:589 'Crédito em até 12x sem juros' (letra x) vs common.tsx:265 'Padrão (2×/semana)' (sinal ×), design.tsx:272 '24 aulas × 1h', particular.index.tsx:450 'no ritmo padrão (2×/sem)' (abreviado). Carga: '48 aulas' (common.tsx:243), '48 aulas · 1h cada' (oficina.tsx:859), 'Duração · 48 aulas de 1h' (design.tsx:272 vídeo), '24 aulas × 1h' (design.tsx:272 design), '1h por aula' (index.tsx:448). Screenshots: crops/particular__cursos__excel.desktop.s06.png, routes/particular__cursos__canva/mobile.fold.png ('24 aulas × 1h'), routes/particular__cursos__modelagem-3d/mobile.fold.png ('48 aulas · 1h cada').
- **Problema:** DESIGN_SYSTEM §11 lista 'excesso de texto' como regra dura; repetir 300–400 caracteres dobra a rolagem até o preço e o CTA, e o card de investimento (que deveria ser escaneável) vira o bloco mais denso da página.
- **Correção sugerida:** Escopo corrigido: a duplicação real é `tier.outcome` no bloco de audiência das variants (design-canva:505, capcut:332, davinci:479, photoshop:359, premiere:388, ia-agentes:286, ia-chat:263, informatica:468/569) E de novo no card de plano (common.tsx:247) — ~10 páginas, não 52. Nas demais o outcome aparece 1× mas com 300+ chars no card. Correção: em common.tsx:247 usar `<p className={`text-sm leading-relaxed ${look.text} line-clamp-3`}>{t.pitch ?? t.outcome}</p>` e adicionar `pitch?: string` (≤120 chars) ao tipo de tier em particular-course-page.tsx:31, preenchendo gradualmente. Bônus trivial: unificar '12x' vs '2×' → usar '×' só em multiplicação de carga ('24 aulas × 1h') e 'x' em parcelas.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Duplicação existe: tier.outcome é renderizado no hero da pele (ide-jogos.tsx:255, planilha-excel.tsx:88, design-*/ia-* idem) e de novo no card de plano (common.tsx:247) — jogos/mobile.seg11.png mostra o parágrafo de 6 linhas no card. Evidência mistura outro problema (x vs ×) e cita linhas erradas (oficina.tsx:859 → :197); /particular não repete outcome. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f364"></a>

## F364 · 🟡 Nome do curso interpolado em frase gera títulos ilegíveis ("Pronto pra começar com Impressão 3D: Do Fatiamento ao Produto Final?")

- **Rotas:** `/particular/cursos/impressao-3d`, `/particular/cursos/ia`, `/particular/cursos/davinci`, `/particular/cursos/ads`, `/particular/cursos/excel-power-bi`, `/particular/cursos/jogos`, `/particular/cursos/modelagem-3d`, `/particular/cursos/rag`, `/particular/cursos/seo`, `/particular/cursos/meta-ads`
- **Onde:** [src/components/course-skins/common.tsx:358](../../../../src/components/course-skins/common.tsx#L358)
- **Evidência:** common.tsx:358 `Pronto pra começar com {course.nome}?`; particular-faq-items.ts:55 `O curso de ${course.nome} tem ${m.aulas}`. Nomes com subtítulo: ia.tsx:19 "Inteligência Artificial: do Essencial ao Profissional com Agentes", impressao-3d.tsx:18 "Impressão 3D: Do Fatiamento ao Produto Final", davinci.tsx:19 "Edição de Vídeo — DaVinci Resolve" (11 nomes com ":" ou "—"). mobile.json impressao-3d › dom.headings: h2 "PRONTO PRA COMEÇAR COM IMPRESSÃO 3D: DO FATIAMENTO AO PRODUTO FINAL?"; davinci: "Pronto pra começar com Edição de Vídeo — DaVinci Resolve?".
- **Problema:** Dois-pontos e travessão dentro de uma pergunta quebram a leitura e o H2 vira 3-4 linhas no mobile; no FAQ a frase "O curso de Inteligência Artificial: do Essencial ao Profissional com Agentes tem 48 aulas" é agramatical.
- **Correção sugerida:** Confirmado: common.tsx:358, particular-course-page.tsx:696/700 e particular-faq-items.ts:55/61 interpolam `course.nome` (11+ nomes com ":"/"—"). Adicionar `nomeCurto?: string` em `CourseData` (particular-course-page.tsx:38) e um helper em course-skins/shared.tsx: `export const nomeCurto = (c: CourseData) => c.nomeCurto ?? c.nome.split(/\s*[:—–]\s*/)[0].trim()`. Trocar as 5 interpolações por `nomeCurto(course)`. Preencher `nomeCurto` explícito só onde o split gera algo ruim (ex.: "Edição de Vídeo — DaVinci Resolve" → "DaVinci Resolve", não "Edição de Vídeo"). H1 e `<title>` continuam com o nome completo.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: common.tsx:358 interpola course.nome na pergunta; particular-faq-items.ts:55 idem na frase do FAQ. 16 rotas em src/routes/particular.cursos.*.tsx têm nome com ':' ou '—' (ia.tsx:19, impressao-3d.tsx:18, davinci.tsx:19). impressao-3d mobile.json registra h2 'PRONTO PRA COMEÇAR COM IMPRESSÃO 3D: DO FATIAMENTO AO PRODUTO FINAL?'.

<a id="f006"></a>

## F006 · ⚪ Escala do H1 do hero diverge do DS §3.3 e varia entre páginas irmãs (22 combinações)

- **Rotas:** `/`, `/cursos`, `/sobre`, `/contato`, `/particular`, `/cursos/*/*-anos (9 páginas)`
- **Onde:** [src/routes/index.tsx:402](../../../../src/routes/index.tsx#L402)
- **Evidência:** DS §3.3: H1 Hero = `text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]`. Home index.tsx:402 `text-4xl ... sm:text-5xl lg:text-6xl leading-[1.02]`; /cursos cursos.index.tsx:243, /sobre sobre.index.tsx:217, /contato contato.tsx:46 `text-4xl font-black tracking-tight sm:text-5xl` (sem degrau lg); course-page.tsx:228 `text-5xl sm:text-6xl lg:text-7xl leading-[0.95]` (único que bate); particular.index.tsx:187 `leading-[1.1]`; grep `<h1 className=` = 22 strings distintas com leading 0.9/0.95/0.98/1.02/1.03/1.04/1.05/1.1.
- **Problema:** A 'referência viva' (home) contradiz a fonte da verdade (DS) e cada página escolhe seu próprio leading. Páginas institucionais irmãs (/cursos, /sobre, /contato) param em 5xl no desktop enquanto a home vai a 6xl — o hero parece 'menor' ao navegar.
- **Correção sugerida:** Atualizar a tabela do DS §3.3 (DESIGN_SYSTEM.md:197) com 2 escalas: Hero institucional 'text-4xl sm:text-5xl lg:text-6xl leading-[1.02]' e Hero de curso 'text-5xl sm:text-6xl lg:text-7xl leading-[0.95]'. Acrescentar 'lg:text-6xl leading-[1.02]' em cursos.index.tsx:243, sobre.index.tsx:78 e contato.tsx:46.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Divergência real: a home usa 4xl/5xl/6xl com leading 1.02 contra 5xl/6xl/7xl no DS:197, e /cursos, /sobre e /contato param em sm:text-5xl. A linha do /sobre é a 78, não a 217. As '22 combinações' incluem páginas especiais (apresentações, 404), o que infla o número. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f027"></a>

## F027 · ⚪ H2 do ScrollStage e títulos de LegalPage/404 usam font-bold; DS §3.3 fixa font-black para H1/H2

- **Rotas:** `/`, `/privacidade`, `/termos`, `404`, `/pagina-que-nao-existe-404`
- **Onde:** [src/components/scroll-stage.tsx:172](../../../../src/components/scroll-stage.tsx#L172)
- **Evidência:** scroll-stage.tsx:172 e :217 `<h2 className="mt-2.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">` — único h2 de seção da home em bold (os outros 64 h2 do site são `font-black`); legal-page.tsx:19 `<h1 className="text-3xl font-bold ...">` e :33 `[&_h2]:font-bold`; __root.tsx:37 `<h1 className="text-7xl font-bold">404</h1>`, :38 h2 `font-semibold`. contato.tsx:58 `<h2 className="text-2xl font-black">` (sem `sm:text-4xl`, sem tracking).
- **Problema:** Logo abaixo do hero da home, a seção 'Uma escola pra formar criadores' tem título visivelmente mais leve que todos os demais H2 — quebra a cadência 'forte nos títulos' do guia. Páginas legais e 404 usam pesos que nem estão carregados (semibold).
- **Correção sugerida:** scroll-stage.tsx:172 e :217 → `font-black`; legal-page.tsx:19 → `font-black`; __root.tsx:37 → `font-black`, :38 `font-semibold` → `font-bold` (600 não é carregado). contato.tsx:58 pode ficar (subtítulo de coluna).
- **Esforço:** trivial · **Severidade:** Baixa · **Também apontado como:** F071
- **Verificação:** confirmado: DESIGN_SYSTEM.md:198 fixa font-black para H2. scroll-stage.tsx:172/217, legal-page.tsx:19, __root.tsx:37 usam font-bold; styles.css:7-9 só carrega Poppins 400/700/900, então semibold é sintetizado.

<a id="f029"></a>

## F029 · ⚪ font-mono (493×) introduz 2ª família tipográfica sem token nem fonte carregada; renderiza diferente por SO

- **Rotas:** `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/course-skins/common.tsx:74](../../../../src/components/course-skins/common.tsx#L74)
- **Evidência:** common.tsx:74 LOOKS.ide `eyebrow: "font-mono text-sm text-(--accent)"`, :89 LOOKS.oficina `eyebrow: "font-mono text-[11px] font-bold uppercase ..."`; ide.tsx 6×, design.tsx 5×, oficina.tsx 3×, scenes/* ~470×. grep `font-mono` = 493. Nenhum `@fontsource/*mono*` ou `--font-mono` em styles.css; Tailwind cai em `ui-monospace, SFMono-Regular, Menlo, Consolas...`. DS §3.1: 'Preferência: 1 fonte principal, no máximo 1 de apoio' — a de apoio não está definida.
- **Problema:** O eyebrow das peles Programação e Universo 3D (texto real, não ilustração) sai em Menlo no Mac, Consolas no Windows e Droid Sans Mono no Android — a 'identidade' dessas categorias muda por dispositivo. E a decisão de usar mono como fonte de apoio não está no DS.
- **Correção sugerida:** Manter `font-mono` só nas ilustrações (scenes/*, aria-hidden) e tirar do texto real: em common.tsx:74 trocar `eyebrow` da pele ide por `text-xs font-black uppercase tracking-[0.25em] text-(--accent)` e em :89 (oficina) remover `font-mono`, ficando `text-[11px] font-bold uppercase tracking-[0.25em] text-(--accent)`. Não carregar fonte nova: DS §3.2 define Poppins como única família e o ganho de identidade não paga 20 KB + decisão de marca.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: common.tsx:74 e :89 usam `font-mono` no eyebrow (ide/oficina); styles.css só importa @fontsource/poppins (linhas 7-9, 155), sem fonte mono. mobile.json de jogos lista 'ui-monospace' como família renderizada (fallback do SO). DS linha 185 pede 1 fonte principal + 1 de apoio definida; linha 209 define eyebrow em Poppins uppercase. Polimento.

<a id="f058"></a>

## F058 · ⚪ Subtítulo do hero da home é um bloco de 7 linhas no mobile (DS §1.4 proíbe 5+ linhas)

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:409](../../../../src/routes/index.tsx#L409)
- **Evidência:** routes/home/mobile.fold.png: o parágrafo 'Escola presencial de tecnologia… desde a primeira aula.' ocupa 7 linhas de 16px entre o H1 e o CTA. index.tsx:409-414 é um único <p> com 213 caracteres.
- **Problema:** DESIGN_SYSTEM §1.4: 'Subtítulo de hero: máximo 2 parágrafos curtos com space-y-3. Nunca 1 bloco de 5+ linhas.' O pai que lê no celular encontra o bloco mais denso da dobra exatamente entre a headline e o CTA principal, empurrando o botão para o fim da tela em 390×844.
- **Correção sugerida:** Trocar o <p> (L409-414) por <div className="mt-6 max-w-xl space-y-3 text-base text-muted-foreground sm:text-lg"><p>Escola presencial de tecnologia para crianças e adolescentes em Ribeirão Preto.</p><p>Turmas de até <strong>10 alunos</strong> e projetos reais <strong>desde a primeira aula</strong>.</p></div> (resolve junto o 'robôs' de F181).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: mobile.fold.png: o parágrafo tem 6 linhas (não 7) e o CTA principal continua acima da dobra em 390×844, então não empurra o botão para fora. Viola DS §1.4 (bloco de 5+ linhas), mas é polimento. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f062"></a>

## F062 · ⚪ Páginas legais: h3 tem o mesmo tamanho do corpo (15px) e o mesmo peso do <strong>

- **Rotas:** `/privacidade`, `/termos`
- **Onde:** [src/components/legal-page.tsx:34](../../../../src/components/legal-page.tsx#L34)
- **Evidência:** legal-page.tsx:34 `[&_h3]:mt-6 [&_h3]:font-semibold` sem classe de tamanho (herda 15px) e :37 `[&_strong]:font-semibold`. routes/privacidade/desktop.json › dom.fonts '15px/24.375px w600 ×41' agrupa h3 e strong; dom.headings lista h3 '2.1. Dados de responsáveis e alunos adultos', '2.2…', '2.3…'. Em routes/privacidade/desktop.full.png o '2.1.' é igual aos rótulos em negrito dos bullets ('Identificação:').
- **Problema:** Subtítulo de seção indistinguível de ênfase inline: o leitor não percebe que 2.1/2.2/2.3 são subseções. Como o peso 600 cai em 700 (achado dos pesos), h3 e strong ficam literalmente iguais.
- **Correção sugerida:** l.34: "[&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-foreground" (ou text-lg). Opcional em l.33: [&_h2]:text-2xl. Manter [&_strong]:font-semibold.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: legal-page.tsx:34: o h3 não tem classe de tamanho e herda 15px com peso semibold, igual ao strong da l.37. Subseção e ênfase inline ficam iguais. Páginas legais têm pouco tráfego, por isso é polimento.

<a id="f064"></a>

## F064 · ⚪ CTAs em caixa alta com tracking largo quebram em 2 linhas no mobile

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421)
- **Evidência:** routes/home/mobile.fold.png: 'AGENDE UMA AULA EXPERIMENTAL / GRÁTIS' em 2 linhas com o ícone deslocado; mobile.seg14.png: 'AGENDE A AULA / EXPERIMENTAL GRÁTIS'. index.tsx:421-424 e :1117-1120 `text-sm font-black uppercase tracking-wider` com 35 e 33 caracteres.
- **Problema:** Caixa alta + tracking + 35 caracteres numa coluna de 358px sempre quebra; caps em 2 linhas é o formato mais lento de ler (sem ascendentes/descendentes) e o CTA principal perde a forma de botão. DS §1.3 pede frases curtas e §8.1 mostra o CTA em 1 linha.
- **Correção sugerida:** <span className="sm:hidden">Agendar aula grátis</span><span className="hidden sm:inline">Agende uma aula experimental grátis</span> em index.tsx:424 e no CTA de :1117-1120. Manter o texto longo no desktop.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: mobile.fold.png: 'AGENDE UMA AULA EXPERIMENTAL / GRÁTIS' quebra em 2 linhas. O botão continua claramente um botão e legível, então 'perde a forma de botão' é exagero. Polimento de leitura.

<a id="f065"></a>

## F065 · ⚪ Títulos com palavra órfã na última linha no desktop ('…do seu / filho', '…à / matrícula')

- **Rotas:** `/`, `/sobre/visao`, `/cursos/create/8-9-anos`, `/cursos/create/13-14-anos`, `/cursos/junior`, `/cursos/camps`, `/cursos/academies`, `/cursos`
- **Onde:** [src/styles.css:141](../../../../src/styles.css#L141)
- **Evidência:** routes/home/desktop.seg09.png: h2 'Escolha o caminho do seu / filho'; desktop.seg12.png: 'Simples do primeiro contato à / matrícula'; desktop.seg08.png: card 'A tecnologia que ele não tem em / casa.'; routes/sobre__visao/desktop.full.png: h1 'Um mundo onde / crianças escrevem o / código.'. Nenhum h1/h2/h3 do escopo usa `text-balance` (0 ocorrências em src/routes e src/components).
- **Problema:** Órfã em título centralizado cria uma linha de 1 palavra que parece erro e desequilibra o bloco — detalhe que separa 'organizada' de 'amadora' (DS §1.1/§1.2).
- **Correção sugerida:** Em @layer base (styles.css ~L141): `h1, h2, h3 { text-wrap: balance; }`. Nos parágrafos curtos centralizados, usar `text-pretty`.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação) · **Também apontado como:** F092, F091
- **Verificação:** confirmado: routes/home/desktop.seg09.png mostra a órfã "casa." no card "A tecnologia que ele não tem em / casa.". Não há text-balance em src (a única ocorrência de text-wrap é marketing-tiktok-ads.tsx:83). É polimento: custo mínimo e ganho visual real.

<a id="f066"></a>

## F066 · ⚪ Faixa etária formatada de 2 jeitos: '5–9 anos' (travessão) vs '5 a 9 anos'

- **Rotas:** `/`, `/sobre`, `header (dropdown Programas)`
- **Onde:** [src/routes/index.tsx:566](../../../../src/routes/index.tsx#L566)
- **Evidência:** index.tsx:172 '5–15', :566 'Crianças · 5–9 anos', :569 'Adolescentes · 10–15 anos' e site-header.tsx:22-25 meta '5–9 anos'/'10–15 anos'; mas index.tsx:92/104/117/129 age '5 a 9 anos'/'10 a 15 anos', FAQ :291/:311 e sobre.index.tsx:106/167 '5 a 15 anos'/'5 a 9 anos'. routes/home/mobile.seg10.png ('CRIANÇAS · 5–9 ANOS') vs mobile.seg11.png ('5 A 9 ANOS') na mesma rolagem.
- **Problema:** A mesma informação em duas notações a poucos pixels de distância (legenda vs chip do band). Em caixa alta o travessão vira um traço longo que parece hífen mal digitado.
- **Correção sugerida:** Trocar '5–9 anos' e '10–15 anos' por '5 a 9 anos' e '10 a 15 anos' em index.tsx:566,569 e site-header.tsx:23,24,27,28. Manter '5–15' só no número da stats bar (l.172). Não criar helper, que é abstração desnecessária para 6 strings.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: index.tsx:566/569 e site-header.tsx:23-28 usam travessão; index.tsx:92, FAQ 291/311 e sobre usam 'a'. É polimento, não prejudica a compreensão.

<a id="f068"></a>

## F068 · ⚪ Parágrafos centralizados de 4–7 linhas no mobile (home e /sobre)

- **Rotas:** `/`, `/sobre`
- **Onde:** [src/routes/sobre.index.tsx:81](../../../../src/routes/sobre.index.tsx#L81)
- **Evidência:** routes/sobre/mobile.fold.png: sub do hero com 7 linhas centralizadas a 18px (sobre.index.tsx:82-87, 212 chars). routes/home/mobile.seg10.png: 'Dois eixos — Tecnologia e Informática…' 6 linhas centralizadas (index.tsx:558-563); mobile.seg08.png: 'A maioria das escolas ensina…' 4 linhas (index.tsx:500-506). Crop de routes/sobre/mobile.full.png: manifesto 'Não é um curso de computador qualquer…' 5 linhas centralizadas (sobre.index.tsx:136-139).
- **Problema:** Texto centralizado com mais de 3 linhas obriga o olho a procurar o início de cada linha em posição diferente — legibilidade cai justamente para quem lê no celular. DS §1.4 limita subtítulo a 2 parágrafos curtos.
- **Correção sugerida:** Só o hero de /sobre: trocar o <p> de 81-86 por `<div className="mx-auto mt-5 max-w-2xl space-y-3 text-lg text-muted-foreground"><p>Escola presencial de tecnologia para crianças e adolescentes em Ribeirão Preto.</p><p>Aqui seu filho aprende a <strong>criar</strong>: jogos, projetos em 3D, programação e o domínio real do computador.</p></div>`. Os parágrafos da home (index.tsx:500, 558) são 1-2 frases e podem ficar.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: sobre.index.tsx:81-86 são 212 caracteres num único bloco centralizado; o DS §1.4 proíbe blocos de 5+ linhas no hero. Os casos da home são frases únicas de 4-6 linhas e só pedem polimento. Linha correta é 81. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f069"></a>

## F069 · ⚪ /sobre 'Quem somos': parágrafo de 8 linhas com 5 trechos em negrito

- **Rotas:** `/sobre`
- **Onde:** [src/routes/sobre.index.tsx:104](../../../../src/routes/sobre.index.tsx#L104)
- **Evidência:** Crop de routes/sobre/mobile.full.png (y≈3000–3400): 1º parágrafo com 8 linhas a 16px e negrito em 'Jardim América, em Ribeirão Preto', '5 a 15 anos', 'Tecnologia', 'Informática' (sobre.index.tsx:105-108); 2º parágrafo com 5 linhas e mais um negrito (:111-116).
- **Problema:** DS §1.4: bold é 'estratégico nas palavras-âncora… nunca o parágrafo inteiro'. Com 4 âncoras em 4 linhas nada se destaca, e o bloco de 8 linhas é o 'texto corrido espesso' que o pai abandona antes do CTA.
- **Correção sugerida:** `<p>Ficamos no Jardim América, em Ribeirão Preto, e atendemos de <strong>5 a 15 anos</strong>, em turmas de até 10 alunos.</p><ul className="mt-4 space-y-2.5 text-muted-foreground"><li><strong>Tecnologia</strong>: jogos, 3D e programação</li><li><strong>Informática</strong>: o domínio real do computador, do Office à IA</li></ul>`, mantendo o 2º parágrafo.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: sobre.index.tsx:104-109 tem 4 negritos num parágrafo de ~50 palavras (5-8 linhas no mobile). O DS §1.4 pede gancho + bullets e negrito só em palavras-âncora. A regra é do DS; impacto baixo.

<a id="f070"></a>

## F070 · ⚪ Eyebrows com 4 receitas diferentes (tracking 0.05 / 0.14 / 0.25 / 0.28em; bold vs black)

- **Rotas:** `/`, `/sobre`, `/contato`
- **Onde:** [src/routes/sobre.index.tsx:76](../../../../src/routes/sobre.index.tsx#L76)
- **Evidência:** DS §3.5 define `text-sm font-black uppercase tracking-[0.25em] text-primary`. sobre.index.tsx:77 e contato.tsx:45 usam `text-sm font-bold uppercase tracking-wider` (0.05em) — routes/sobre/desktop.fold.png ('SOBRE NÓS' compacto) vs routes/home/desktop.seg08.png ('POR QUE A SANTOS TECH' espaçado). scroll-stage.tsx:171/216 `text-xs tracking-[0.14em]`; index.tsx:235 `tracking-[0.28em]` (acima do teto 0.25em do §3.4); contato.tsx:65-107 labels `text-sm font-bold uppercase tracking-wider text-muted-foreground`.
- **Problema:** O mesmo elemento de hierarquia muda de tamanho, peso e espaçamento entre páginas irmãs; o olho aprende um padrão na home e ele não se repete, o que faz o site parecer montado por mãos diferentes (DS §1.2 'genérica / amadora').
- **Correção sugerida:** Trocar sobre.index.tsx:76 e contato.tsx:45 para a receita do DS §3.5: `text-sm font-black uppercase tracking-[0.25em] text-primary`. index.tsx:235 (rótulo de família em card) → `tracking-[0.18em]` (microcopy §3.4). Componente <Eyebrow> é opcional; a troca de classe resolve.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: A própria /sobre mistura: :76 'tracking-wider font-bold' e :98/:132/:162 'tracking-[0.25em] font-black'. contato.tsx:45 igual ao :76. index.tsx:235 é rótulo de card (0.28em > teto do §3.4). Linha correta é 76, não 77.

<a id="f072"></a>

## F072 · ⚪ Dropdown 'Sobre' em CAIXA ALTA hardcoded vs 'Programas' em Title Case

- **Rotas:** `header (todas as rotas)`
- **Onde:** [src/components/site-header.tsx:36](../../../../src/components/site-header.tsx#L36)
- **Evidência:** specials/header-dropdown-sobre.desktop.png: 'SOBRE NÓS' / 'NOSSA VISÃO' em `text-sm font-black uppercase tracking-wider` (site-header.tsx:452 e menu mobile :207) com as strings já em maiúsculas em SOBRE_ITEMS (:35-38); specials/header-dropdown.desktop.png: itens 'Tecnologia Júnior' em `text-sm font-bold` Title Case (:385).
- **Problema:** Dois menus vizinhos com convenções tipográficas opostas; caixa alta hardcoded na string faz leitores de tela soletrarem e impede reuso do label.
- **Correção sugerida:** SOBRE_ITEMS: `"Sobre nós"` e `"Nossa visão"`; nos itens (l.207 e l.452) usar a mesma classe dos itens de NavGroup: `text-sm font-bold text-foreground/85` sem uppercase.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Confirmado nas l.36-37, 207 e 452, contra itens Title Case em l.385. Leitores de tela modernos não soletram palavras em caixa alta (claim exagerado). O menu Programas também usa caps em "Ver todos" (l.418): inconsistência leve. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f076"></a>

## F076 · ⚪ Aspas retas e curvas misturadas ("…" em /sobre, /sobre/visao, /termos vs “…” na home)

- **Rotas:** `/sobre`, `/sobre/visao`, `/termos`, `/privacidade`, `/`, `/cursos/create`, `/cursos/camps`, `/cursos/academies`, `/cursos/create/8-9-anos`, `/cursos/create/11-12-anos`, `/cursos/junior/5-6-anos`, `/particular/cursos/informatica`, `/particular/cursos/office`, `/particular/cursos/git`, `/particular/cursos/chatgpt`, `/particular/cursos/tiktok-ads`
- **Onde:** [src/routes/sobre.index.tsx:134](../../../../src/routes/sobre.index.tsx#L134)
- **Evidência:** Aspas retas em título h2: sobre.index.tsx:135 "Onde seu filho aprende…" (dom.headings de sobre confirma); sobre.visao.tsx:165-166 (blockquote); termos.tsx:84 "Santos Tech"; privacidade.tsx:29; cursos.create.index.tsx:353 "estuda"; cursos.camps.tsx:273 "passar o tempo"; cursos.academies.tsx:455 "criar jogos". Já usam curvas: index.tsx:773-774 (“ ”), cookie-consent.tsx:321, privacidade.tsx:131-133,138. Hífen como intervalo: cursos.create.8-9-anos.tsx:211 "Ano 2 (9-10 anos)" vs padrão en dash "5–6" (cursos.junior.index.tsx:262).
- **Problema:** Em título de 30–48px a aspa reta é visivelmente um glifo de máquina de escrever; e a mesma página (privacidade) alterna as duas formas.
- **Correção sugerida:** Trocar as aspas retas por curvas “…” em sobre.index.tsx:134 e nos demais textos de tela. Em sobre.visao.tsx:158-159 remover as aspas, porque o ícone <Quote> já marca a citação. Trocar hífen por en dash nos intervalos de idade ("9–10 anos").
- **Esforço:** pequeno · **Severidade:** Baixa · **Também apontado como:** F100, F381
- **Verificação:** confirmado: Confirmado: sobre.index.tsx:134 tem aspas retas em h2 de até 48px, e index.tsx:773 usa aspas curvas. Em sobre.visao.tsx:158 a citação tem aspas retas e o ícone Quote ao mesmo tempo, marcação dupla. A linha citada (165) está desatualizada.

<a id="f077"></a>

## F077 · ⚪ Ilustração do Portal do Aluno usa textos de 10px e legenda de 11px

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:851](../../../../src/routes/index.tsx#L851)
- **Evidência:** routes/home/desktop.json › dom.smallText: 'Nota', 'Frequência', 'Projetos' e 'Jogo de plataforma publicado no Roblox' a 10px; 'Ilustração do Portal do Aluno.' a 11px. index.tsx:851 e :862 `text-[10px]`, :869 `text-[11px]`. Seção não consta nas fatias capturadas; evidência por JSON + código.
- **Problema:** A legenda 'Ilustração do Portal do Aluno.' é informação real (evita que o pai ache que é captura de tela) e está abaixo de 12px; os rótulos das métricas a 10px não passam no zoom padrão do celular.
- **Correção sugerida:** Legenda :869 `text-[11px]` → `text-xs`. Rótulos :851 e :862 `text-[10px]` → `text-xs` (valores podem seguir `text-lg`). Mockup é ilustrativo, então a legenda é o item que importa.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado em index.tsx:851 e :862 (`text-[10px]`) e :869 (`text-[11px]`, 'Ilustração do Portal do Aluno.'). Fica dentro de um mockup decorativo, então o impacto é só de polimento.

<a id="f078"></a>

## F078 · ⚪ Respostas da FAQ em parágrafo único de até 375 caracteres, sem âncora em negrito

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:306](../../../../src/routes/index.tsx#L306)
- **Evidência:** index.tsx:288-325 FAQ_ITEMS com respostas de 375 ('Quanto custa?'), 335, 325, 302 e 264 caracteres, renderizadas por faq-item.tsx:87 como um único `<p className="mt-3 pl-8 text-muted-foreground">` (16px → ~9 linhas em 358px). Não aparece nas screenshots porque os <details> estão fechados (denseBlocks=0 mede só o visível).
- **Problema:** A resposta de preço — a mais lida — enterra 'R$ 539,90' e 'aula experimental grátis' em 9 linhas de cinza. DS §1.4 pede gancho + bullets + fechamento e bold nas palavras-âncora.
- **Correção sugerida:** Priorizar só a resposta de preço (index.tsx:305-306): pôr 'R$ 539,90/mês' e 'aula experimental grátis' em <strong>. Para isso, FaqItem passa a aceitar 'a: ReactNode' e um 'aText: string' separado para buildFaqSchema. Encurtar a comparação com inglês/natação. As outras respostas (2-3 frases) podem ficar como estão.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: faq-item.tsx:87 renderiza um único <p> sem negrito; a resposta de preço tem cerca de 375 caracteres. Mas o conteúdo fica fechado em <details> e responde uma pergunta direta, com 2-3 frases no padrão FAQ. DS §1.4 pede negrito nas âncoras, e é isso que falta. Exigir bullets é exagero. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f079"></a>

## F079 · ⚪ /contato: h2 e h3 com o mesmo tamanho e peso (text-2xl font-black)

- **Rotas:** `/contato`
- **Onde:** [src/routes/contato.tsx:117](../../../../src/routes/contato.tsx#L117)
- **Evidência:** contato.tsx:58 h2 'Informações de contato' e :117 h3 'Aula experimental gratuita' ambos `text-2xl font-black`; routes/contato/desktop.json › dom.fonts '24px/32px w900 ×2'. routes/contato/desktop.full.png mostra os dois títulos lado a lado no mesmo tamanho.
- **Problema:** Sem diferença entre os níveis, a coluna do CTA parece uma seção paralela e não um card dentro da seção. Escala do DS §3.3: H2 `text-3xl sm:text-4xl`, H3 `text-lg`–`2xl`.
- **Correção sugerida:** h2 na l.58: `text-3xl font-black tracking-tight sm:text-4xl`; h3 na l.117: `text-xl font-black`.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: contato.tsx:58 (h2) e :117 (h3) usam os dois `text-2xl font-black`, sem hierarquia visual entre os níveis.

<a id="f080"></a>

## F080 · ⚪ H2 de duas frases ocupa 4 linhas de 36px no mobile ('Não é curso de computador…')

- **Rotas:** `/`
- **Onde:** [src/routes/index.tsx:498](../../../../src/routes/index.tsx#L498)
- **Evidência:** routes/home/mobile.seg08.png: 'Não é curso de / computador. É o futuro / do seu filho — / começando agora.' (4 linhas, font-black 36px) seguido de sub de 4 linhas centralizadas. index.tsx:497-499, 71 caracteres com ponto final e travessão.
- **Problema:** DS §1.3: 'Headlines: arco emocional em 1 linha'. Duas frases em display black no celular ocupam meia tela antes do primeiro card e o ritmo 'título forte → sub curto' (DS §9.1) se perde.
- **Correção sugerida:** Encurtar o H2 para "Não é curso de computador. É o futuro do seu filho." e levar "começando agora" para o início do sub. O tamanho no mobile já é `text-3xl`, não mexer.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: H2 de 2 frases confirmado (index.tsx:497-499); DS l.43 pede headline em 1 linha. Mas no mobile a classe já é text-3xl (30px, não 36px), e a screenshot citada (mobile.seg08) mostra depoimentos, não este H2. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f081"></a>

## F081 · ⚪ /links sem h1: 'Santos Tech' e os títulos dos cards são <p>

- **Rotas:** `/links`
- **Onde:** [src/routes/links.tsx:63](../../../../src/routes/links.tsx#L63)
- **Evidência:** routes/links/desktop.json › dom.h1Count = 0 e dom.headings vazio; axe 'page-has-heading-one' no mobile.json. links.tsx:63 `<p className="text-lg font-black text-white">Santos Tech</p>`; :123 e :153 títulos de card em <p>. routes/links/desktop.full.png.
- **Problema:** Sem hierarquia semântica de títulos a página não tem estrutura para leitores de tela nem para SEO da rota; visualmente o nome da escola (18px) mal se destaca dos títulos dos cards (16px bold) — nada 'manda' na página.
- **Correção sugerida:** links.tsx:63 `<p className="text-lg font-black text-white">` → `<h1 className="text-xl font-black text-white">Santos Tech</h1>`. Títulos de card (:123 e :153) → `<h2>` com as mesmas classes.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: links.tsx:63 é um <p>, não há nenhum h1 e o axe acusa page-has-heading-one. É WCAG 1.3.1 leve e a correção é trivial.

<a id="f086"></a>

## F086 · ⚪ Eyebrows longos em caixa alta com tracking 0.25em quebram em 2 linhas no mobile

- **Rotas:** `/cursos/create/13-14-anos`, `/cursos/create`, `/cursos/create/8-9-anos`, `/cursos/junior`
- **Onde:** [src/routes/cursos.create.13-14-anos.tsx:231](../../../../src/routes/cursos.create.13-14-anos.tsx#L231)
- **Evidência:** cursos__create__13-14-anos/mobile.fold.png: chip "CREATE ANO 6 · 13 A 14 ANOS · / FORMATURA" em 2 linhas dentro da pílula; cursos__create/mobile.fold.png: "PROGRAMA CARRO-CHEFE · 8 A 14 / ANOS" (órfã); cursos__create__8-9-anos/mobile.seg05.png: "TRILHA PIXEL · SISTEMA PRÓPRIO / SANTOS TECH"; cursos__junior/mobile.seg03.png: "3 SISTEMAS PRÓPRIOS SANTOS / TECH". Código: chip `text-xs font-black uppercase tracking-[0.25em]` (course-page.tsx:220, :328; cursos.create.index.tsx:212-216; cursos.junior.index.tsx:~411) com strings de 30–42 caracteres (cursos.create.13-14-anos.tsx:231, cursos.create.8-9-anos.tsx:341).
- **Problema:** Caixa alta + 0.25em de tracking multiplica a largura em ~1.5×; acima de ~24 caracteres o eyebrow vira bloco de 2 linhas e compete com o H1 em vez de rotulá-lo (HIG typography: all-caps só pra rótulos curtos). Pílula com 2 linhas perde a forma de chip.
- **Correção sugerida:** Encurtar o eyebrow para 'CREATE6 · 13–14 anos' (ver F087) e mover 'Formatura' para o subtítulo. No chip do hero (course-page.tsx:220), usar tracking-[0.18em] sm:tracking-[0.25em], como o CAMPS já faz (cursos.camps.tsx:175). Não aplicar whitespace-nowrap: a 375px o texto transbordaria.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: cursos__create__13-14-anos/mobile.fold.png mostra a pílula quebrando em 2 linhas ('...13 A 14 ANOS · / FORMATURA'). A causa é course-page.tsx:220 (text-xs uppercase tracking-[0.25em]). A sugestão original de whitespace-nowrap causaria overflow horizontal.

<a id="f088"></a>

## F088 · ⚪ Faixa etária formatada de 3 jeitos: "8–9", "8 a 9 anos", "9-10 anos" (hífen)

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:211](../../../../src/routes/cursos.create.8-9-anos.tsx#L211)
- **Evidência:** Na mesma página: métrica "8–9" com travessão curto (cursos.create.8-9-anos.tsx:272), eyebrow "8 a 9 anos" (:242) e FAQ "Ano 2 (9-10 anos)" com hífen simples (:211). Idem cursos.create.10-11-anos.tsx:202 "11-12 anos", 11-12-anos.tsx:203 "12-13 anos", 11-12-anos.tsx:178 "Anos 1-3", 12-13-anos.tsx:179 "Anos 1-4" (visível em cursos__create__12-13-anos/mobile.seg02.png "Anos 1-4"). /cursos: legenda "5–9 anos" (cursos.index.tsx:254) vs meta "5 a 9 anos" (:67) na mesma tela (cursos/mobile.fold.png + mobile.full.png).
- **Problema:** Intervalo numérico em PT-BR usa travessão curto (–) ou "de X a Y"; hífen (-) é erro tipográfico e, misturado com en dash na mesma página, denuncia falta de sistema. Números/preços são o que o pai escaneia primeiro.
- **Correção sugerida:** Trocar o hífen por travessão curto (–) nos intervalos: 8-9-anos.tsx:211 '(9–10 anos)', 10-11-anos.tsx:202 '(11–12 anos)', 11-12-anos.tsx:178 'Anos 1–3' e :203 '(12–13 anos)', 12-13-anos.tsx:179 'Anos 1–4'. Manter '8–9' nas métricas e 'de 8 a 9 anos' na prosa: os dois já estão corretos.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: O hífen nos FAQs está confirmado (8-9-anos.tsx:211, 11-12-anos.tsx:178). Mas '8–9' na métrica (L272) junto com '8 a 9 anos' no eyebrow não é erro: o próprio DS §1.6 usa '8–9' em tabela e 'a' em texto. O erro real se resume aos hífens. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f089"></a>

## F089 · ⚪ Programa ACADEMIES grafado como "ACADEMIES", "Academies", "Academy" e "Academia" na mesma página

- **Rotas:** `/cursos/academies`
- **Onde:** [src/routes/cursos.academies.tsx:140](../../../../src/routes/cursos.academies.tsx#L140)
- **Evidência:** cursos.academies.tsx:51 title SEO "Academia de Robótica e Academia de IA"; :132 FAQ "ACADEMIES e CREATE"; :140 "formato de uma ACADEMY"; :156 "Posso fazer as duas Academies?"; :263 eyebrow "ACADEMIES · Módulos avançados"; :284 CTA "Conhecer as Academies"; :371-372 h2 "Duas Academies"; :399 h2 "Como funciona uma Academy"; :310 "As ACADEMIES formam". Visível em cursos__academies/mobile.seg02.png ("ACADEMIES" em versalete bold no corpo) e seg04.png ("Duas Academies" em title-case).
- **Problema:** Quatro grafias, dois idiomas e dois números gramaticais pro mesmo produto; "ACADEMIES" em caixa alta dentro de frase (strong uppercase) grita no meio do parágrafo. JR e CREATE mantêm uma grafia só.
- **Correção sugerida:** Usar 'ACADEMIES' em caixa alta só no eyebrow e no chip (L263, L303). Em prosa, 'as Academies' sem <strong> em caixa alta (L310, L454). Na L140, trocar 'uma ACADEMY' por 'um módulo'. O title SEO (L51) fica como está até o Henrique decidir o nome BR. Registrar a regra no DS §1.6.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: L132/L136/L310/L454 usam 'ACADEMIES', L156/L284/L372 'Academies', L140 'ACADEMY', L399 'uma Academy' e L51 'Academia'. É inconsistência de grafia; o nome definitivo depende de decisão de marca pendente (DS:136).

<a id="f090"></a>

## F090 · ⚪ "PORTAL DO ALUNO ST" em bold caixa alta dentro de frase; 3 grafias do nome

- **Rotas:** `/cursos/create`
- **Onde:** [src/routes/cursos.create.index.tsx:236](../../../../src/routes/cursos.create.index.tsx#L236)
- **Evidência:** cursos__create/mobile.fold.png: parágrafo do hero termina em "no PORTAL DO ALUNO ST." em negrito e caixa alta, ocupando 2 linhas. Código: cursos.create.index.tsx:236 `<strong>PORTAL DO ALUNO ST</strong>`; :358 "PORTAL DO ALUNO ST — plataforma própria"; :262 "Portal ST"; :425 "Portal do Aluno".
- **Problema:** Caixa alta em prosa é o padrão do DS pra eyebrow, não pra nome próprio no corpo — parece grito e reduz legibilidade (HIG writing: evitar all caps em texto corrido). Três grafias do mesmo produto na mesma página.
- **Correção sugerida:** Padronizar como "Portal do Aluno ST" em :236 (`<strong>Portal do Aluno ST</strong>`), :262 ("Plataforma própria (Portal do Aluno ST)"), :358 e também nas meta descriptions :39 e :198; :425 "Portal do Aluno" pode ficar (já é title-case).
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: cursos.create.index.tsx:236 `<strong>PORTAL DO ALUNO ST</strong>`, :262 "Portal ST", :358 caixa alta, :425 "Portal do Aluno"; também :39/:198 (SEO). Resto do site usa "Portal do Aluno" (11 ocorrências).

<a id="f094"></a>

## F094 · ⚪ Bloco "A proposta" e BridgeBanner com 8–9 linhas corridas no mobile

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/academies`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:286](../../../../src/routes/cursos.create.8-9-anos.tsx#L286)
- **Evidência:** cursos__create__8-9-anos/mobile.seg02.png: parágrafo "Na primeira aula seu filho já constrói…" com 8 linhas em 18px, 4 frases num só `<p>` (cursos.create.8-9-anos.tsx:286-293); mobile.seg03.png: BridgeBanner com 9 linhas de texto corrido (:302-306, renderizado por course-page.tsx:736 `text-sm sm:text-base` sem quebra). cursos__create__12-13-anos/mobile.seg02.png: "Não é começar do zero…" 7 linhas. cursos__academies BridgeBanner idem (cursos.academies.tsx:322-326).
- **Problema:** DS §1.4 proíbe bloco denso e pede "1 frase de gancho + bullets + fechamento"; 4 frases encadeadas em 8 linhas são abandonadas antes do CTA no celular (o próprio DS cita os 30 segundos do pai no almoço).
- **Correção sugerida:** Quebrar o <p> de :286-293 em 2 parágrafos curtos dentro de `<div className="mt-5 space-y-3 text-lg text-muted-foreground">` (gancho: primeira aula já funciona; resultado: mini-projeto por módulo + jogo no Showcase). BridgeBanner: encurtar para 2 frases.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Um único <p> text-lg com 5 frases (:286-293) e BridgeBanner de 3 frases (:302-306, course-page.tsx:736). DESIGN_SYSTEM.md:48 proíbe bloco denso. A regra de 'gancho+bullets' (l.54) é para cards, não este bloco.

<a id="f099"></a>

## F099 · ⚪ Preço com formatação mista no mesmo card: "R$ 939,90 / semana" vs "≈ R$ 895 / semana"

- **Rotas:** `/cursos/camps`
- **Onde:** [src/routes/cursos.camps.tsx:79](../../../../src/routes/cursos.camps.tsx#L79)
- **Evidência:** cursos__camps/mobile.seg07.png: card 1 mostra "R$ 939,90" e abaixo "R$ 939,90 / semana"; card 2 mostra "R$ 1.790,90" e "≈ R$ 895 / semana" (sem centavos, com sinal de aproximação). Código: PRECOS em cursos.camps.tsx:79-81 (`porSemana: "R$ 939,90 / semana"`, `"≈ R$ 895 / semana"`, `"≈ R$ 830 / semana"`).
- **Problema:** Na mesma coluna o pai compara "939,90" com "895" — precisões diferentes dificultam a comparação que a seção existe pra fazer, e o card 1 repete o valor total como "por semana" (redundante).
- **Correção sugerida:** l.79: `porSemana: "valor da semana avulsa"` ou omitir a linha no card de 1 semana. l.80-81 manter "≈ R$ 895/semana" e "≈ R$ 830/semana" com R$&nbsp;.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: cursos.camps.tsx:79 repete "R$ 939,90 / semana" igual ao preço total, enquanto as l.80-81 usam valor arredondado com ≈. A precisão fica inconsistente e há redundância no card 1.

<a id="f101"></a>

## F101 · ⚪ Trigger do accordion transforma eyebrow + título + meta num único h3

- **Rotas:** `/cursos/create/8-9-anos`, `/cursos/create/9-10-anos`, `/cursos/create/10-11-anos`, `/cursos/create/11-12-anos`, `/cursos/create/12-13-anos`, `/cursos/create/13-14-anos`, `/cursos/junior/5-6-anos`, `/cursos/junior/6-7-anos`, `/cursos/junior/7-8-anos`
- **Onde:** [src/components/course-page.tsx:645](../../../../src/components/course-page.tsx#L645)
- **Evidência:** desktop.json › dom.headings de todas as páginas de curso: h3 com texto "MÓDULO 1 · AULAS 1 A 10 Fundamentos do Arcade: O Mundo dos Sprites 10 semanas · 20h · Insígnia Pixel Aprendiz" (3 parágrafos concatenados). Código: AccordionTrigger (ui/accordion.tsx:21 `AccordionPrimitive.Header` = h3) recebe em course-page.tsx:646-662 três `<p>` (eyebrow :654, nome `text-lg font-black` :657, meta `text-xs` :658). Em cursos__create__8-9-anos/mobile.seg10.png a meta ainda quebra com órfã "Aprendiz".
- **Problema:** O nome do módulo — o verdadeiro título — é um `<p>`, e o heading semântico vira uma frase de 100+ caracteres. Hierarquia visual e semântica divergem; leitores de tela anunciam metadados como título.
- **Correção sugerida:** Em course-page.tsx:646-662: (1) trocar os três `<p>` por `<span className="block ...">` — `<p>` dentro de `<button>` é HTML inválido; (2) dar `id={`mod-${mod.n}-nome`}` ao span do nome e passar `aria-labelledby={`mod-${mod.n}-nome`}` no `AccordionTrigger` (Radix repassa props ao button). Assim o nome acessível do botão e do h3 vira só o nome do módulo; eyebrow e meta continuam visíveis e legíveis em modo de navegação. Não mover eyebrow/meta pra fora do trigger nem usar `aria-hidden` — o pai escaneia "Módulo 1 · Aulas 1 a 10" com o accordion fechado, e esconder do leitor de tela tira informação útil.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: ui/accordion.tsx:21 `AccordionPrimitive.Header` (h3 por padrão) envolve o trigger; course-page.tsx:654-660 coloca 3 `<p>` dentro. desktop.json › headings: h3 = "MÓDULO 1 · AULAS 1 A 10 Fundamentos do Arcade… Insígnia Pixel Aprendiz". mobile.seg10.png mostra a órfã "Aprendiz".

<a id="f102"></a>

## F102 · ⚪ Rótulo "O que vê"/"Ferramentas" é h3, mas "O que ele leva pra casa" com o mesmo estilo é <p>

- **Rotas:** `/cursos/junior`
- **Onde:** [src/routes/cursos.junior.index.tsx:159](../../../../src/routes/cursos.junior.index.tsx#L159)
- **Evidência:** cursos__junior/mobile.seg06.png: três rótulos roxos em caixa alta com o mesmo visual ("O QUE VÊ", "FERRAMENTAS", "O QUE ELE LEVA PRA CASA"). Código: os dois primeiros são `<h3 className="text-sm font-black uppercase tracking-wider">` (cursos.junior.index.tsx:128, :141); o terceiro é `<p className="text-sm font-bold uppercase tracking-wider">` (:159). desktop.json › dom.headings lista "O QUE VÊ"/"FERRAMENTAS" como h3 sob cada h2 de curso, mas não o terceiro.
- **Problema:** Mesmo papel visual (rótulo de lista) com tags e pesos diferentes (black vs bold); a hierarquia do documento fica arbitrária e o pai vê rótulos "quase iguais".
- **Correção sugerida:** Em l.159 trocar `<p className="text-sm font-bold uppercase tracking-wider">` por `<h3 className="text-sm font-black uppercase tracking-wider">` (mesmo peso e tag dos rótulos de l.128/141).
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: Confirmado h3 font-black (l.128,141) vs p font-bold (l.159). Porém o terceiro está num callout com borda própria, então o contexto visual já difere; diferença é só bold vs black. Impacto pequeno. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f112"></a>

## F112 · ⚪ Pele Oficina força UPPERCASE em h1/h2/h3 longos e destrói grafia de marcas (AUTOCAD, SKETCHUP)

- **Rotas:** `/particular/cursos/modelagem-3d`, `/particular/cursos/impressao-3d`, `/particular/cursos/autocad`, `/particular/cursos/revit`
- **Onde:** [src/components/course-skins/oficina.tsx:192](../../../../src/components/course-skins/oficina.tsx#L192)
- **Evidência:** oficina.tsx:854 `<h1 className="mt-6 text-4xl font-black uppercase leading-[0.98] …">`; common.tsx:90 `LOOKS.oficina.h2: "text-3xl font-black uppercase tracking-tight sm:text-4xl"` (h2 de todas as seções comuns); oficina-modelagem.tsx:540 `<h3 className="… font-black uppercase …">{m.title}</h3>`. Screenshots: routes/particular__cursos__autocad/mobile.fold.png ('AUTOCAD'), routes/particular__cursos__modelagem-3d/desktop.fold.png ('MODELAGEM 3D: BLENDER E SKETCHUP'), routes/particular__cursos__impressao-3d/mobile.fold.png (3 linhas caixa alta), routes/particular__cursos__modelagem-3d/mobile.seg04.png ('FUNDAMENTOS DO BLENDER: INTERFACE E MODELAGEM POLIGONAL' em 3 linhas), mobile.seg14.png ('COMO AS AULAS FUNCIONAM').
- **Problema:** Caixa alta em frases de 25–55 caracteres perde a silhueta das palavras e cansa (HIG: 'avoid all caps for long text'); DESIGN_SYSTEM §3.3 define h1/h2 em `font-black tracking-tight` sem uppercase. Além disso 'AutoCAD', 'SketchUp' e 'Revit BIM' são nomes próprios com grafia registrada que a transformação CSS apaga.
- **Correção sugerida:** Manter o uppercase no h1 e nos eyebrows (estética industrial da pele, nomes curtos). Remover `uppercase` só dos títulos longos de módulo: variants/oficina-modelagem.tsx:540, oficina-autocad.tsx:381, oficina-impressao.tsx:88 e oficina-revit.tsx:330. Avaliar common.tsx:90 e oficina-base.tsx:30 (h2) para `normal-case`.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: h1 em oficina.tsx:192 (não :854). Caixa alta em h3 de 40-55 caracteres (modelagem:540) prejudica a leitura. No h1 curto ('AUTOCAD') é escolha de estilo da pele, e o DS usa uppercase em CTAs. O ponto sobre grafia de marca é válido, mas é menor. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f116"></a>

## F116 · ⚪ Cards 'Experiência' da landing com parágrafos de 6–7 linhas em 14px no celular

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:121](../../../../src/routes/particular.index.tsx#L121)
- **Evidência:** particular.index.tsx:121-122 texto de 213 chars ('Competência técnica comprovada e habilidade de ensinar — as duas são exigidas. Não basta dominar a ferramenta…'), :134 e :140 ~150 chars; renderizado em :376 `<p className="mt-2 text-sm leading-relaxed text-neutral-500">`. Screenshot: routes/particular/mobile.seg04.png (card 'Professores selecionados com critério' com 7 linhas de texto cinza).
- **Problema:** DESIGN_SYSTEM §1.4: 'nunca 1 bloco de 5+ linhas', 'descrição de card: 1 frase de gancho + bullets'. São quatro cards seguidos com o mesmo padrão, na parte da landing que justifica o preço.
- **Correção sugerida:** Encurtar só o texto de 'Professores selecionados com critério' (:121-122) para: "Cada professor passa por avaliação técnica e pedagógica — não basta dominar a ferramenta, precisa saber ensinar." Os outros três (~150 chars, 4-5 linhas) podem ficar. Manter text-sm.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: mobile.seg04.png mostra 6 linhas só no 1º card; os demais são menores. A regra '5+ linhas' do DS §1.4 é para subtítulo de hero; para card vale 'gancho + bullets', que é recomendação, não violação grave. Exagerado como media. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f117"></a>

## F117 · ⚪ Respostas do FAQ em 14px muted com 101 caracteres por linha no desktop

- **Rotas:** `/particular`, `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/particular-faq.tsx:52](../../../../src/components/particular-faq.tsx#L52)
- **Evidência:** particular-faq.tsx:652 `<p className="pb-5 text-sm leading-relaxed text-neutral-500 …">{item.a}</p>` dentro de `max-w-3xl` (:619); common.tsx:334 mesmo padrão `text-sm leading-relaxed ${look.muted}` em `max-w-3xl` (:317). particular desktop.json › longLines: 5 respostas com cpl 101, width 704, fontSize 14 ('Atendemos de segunda a sábado…', 'Depende do seu ritmo e do curso…' 254 chars). Respostas de 117–254 chars (particular-faq-items.ts:9-38).
- **Problema:** Acima do limite de 80–90 caracteres por linha para leitura confortável, em cinza e 14px — pior justamente na pergunta 'Quanto custa?' e na de duração, que são as mais abertas pelos pais.
- **Correção sugerida:** particular-faq.tsx:52 e common.tsx:~334: `max-w-[65ch] text-[15px] sm:text-base leading-relaxed` mantendo a cor do look (contraste já verificado em outro achado).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: O arquivo tem 78 linhas: o <p> fica na l.52, não na 652. 101 cpl a 14px é real no desktop, mas as respostas têm 1 a 3 frases; no celular (público principal) a coluna é estreita. Impacto pequeno. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f120"></a>

## F120 · ⚪ Sidebar trunca nomes de curso com line-clamp ('TypeScript para Desenvolvimento…')

- **Rotas:** `/particular`, `/particular/cursos/* (52 páginas, sidebar desktop e menu mobile)`
- **Onde:** [src/routes/particular.tsx:511](../../../../src/routes/particular.tsx#L511)
- **Evidência:** particular.tsx:511 `<span className="line-clamp-2 text-sm font-medium">{nome}</span>` e :515 legenda `truncate text-xs`; nomes em GRUPOS: 'TypeScript para Desenvolvimento Moderno' (:71, 39 chars), 'IA para Criadores: Imagem, Vídeo e Áudio' (:59), 'Power Apps + Power Automate' (:49). Screenshot: crops/python_sidebar_zoom.png (ampliação da sidebar em routes/particular__cursos__python/desktop.fold.png mostrando 'TypeScript para / Desenvolvimento…').
- **Problema:** Menu de navegação com texto cortado por reticências esconde o próprio nome do curso que o usuário está procurando; a informação que sobra ('TypeScript para') não diferencia o item.
- **Correção sugerida:** No GRUPOS: `{ slug: "typescript", nome: "TypeScript", legenda: "Desenvolvimento Moderno" }` e `{ slug: "ia-visual", nome: "IA para Criadores", legenda: "Imagem, Vídeo e Áudio" }`. Manter line-clamp-2 como proteção e conferir que nenhum `nome` passe de ~2 linhas em 256px.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: crops/python_sidebar_zoom.png mostra 'TypeScript para / Desenvolvimento…'. Existe, mas é exagerado: o prefixo 'TypeScript' já identifica o item e o Link tem `title` com o nome completo (particular.tsx:503). Afeta 1-2 itens. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f121"></a>

## F121 · ⚪ Nomes de módulo truncados com reticências no 'explorer' da pele IDE

- **Rotas:** `/particular/cursos/python`, `/particular/cursos/typescript`, `/particular/cursos/backend`, `/particular/cursos/sql`, `/particular/cursos/git`
- **Onde:** [src/components/course-skins/variants/ide-python.tsx:85](../../../../src/components/course-skins/variants/ide-python.tsx#L85)
- **Evidência:** ide-python.tsx:85 `<span className="truncate">{arquivo(mi, mod.title)}</span>` (título do módulo convertido em `06_integracao_com_apis_rest_e_automacao….py`); ide-typescript.tsx:116 `truncate text-[12.5px]`; ide-backend.tsx:148 `truncate font-mono text-[12.5px]`; ide-kit.tsx:37 `truncate font-mono text-[11px]`. Screenshot: routes/particular__cursos__python/mobile.seg04.png ('06_integracao_com_apis_rest_e_automacao…', '07_automacao_inteligente_com_ia_generat…').
- **Problema:** O título do módulo é conteúdo de venda (o que a pessoa vai aprender) e vira snake_case cortado por reticências em 12,5px; no celular metade dos 7 módulos fica ilegível antes do clique.
- **Correção sugerida:** Trocar `truncate` por `break-all` (ou `whitespace-normal break-words`) no span do explorer e adicionar `title={mod.title}`; não é preciso redesenhar o explorer — o título legível já aparece ao abrir o arquivo.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: ide-python.tsx:85 `truncate` sobre `${nn}_${slug(title)}.py` (:44) confirmado. É a metáfora da pele IDE; o título completo aparece no painel ao clicar. Impacto menor que o descrito. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f122"></a>

## F122 · ⚪ Tilde '~3 meses' como prefixo de duração em chips e tabelas, inclusive chip solto sem rótulo

- **Rotas:** `/particular`, `/particular/cursos/* (52 páginas)`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/routes/particular.index.tsx:505](../../../../src/routes/particular.index.tsx#L505)
- **Evidência:** shared.tsx:404-470 `intensivo: "~1 mês"`, `padrao: "~3 meses"` em todas as entradas de TIER_META; exibido em common.tsx:262/266, ti.tsx:711 (métricas do hero), particular.index.tsx:505 `{TIER_META[curso.tierKey].intensivo}` como chip isolado ao lado da categoria. Screenshots: routes/particular/mobile.seg09.png (chips 'Office' e '~3 meses' sem dizer o que é), routes/particular__cursos__suporte/mobile.fold.png ('INTENSIVO ~3 meses'), crops/particular__cursos__excel.desktop.s06.png.
- **Problema:** O til é notação de programador/matemático, não de texto comercial em PT-BR (DESIGN_SYSTEM §13: 'Português BR, caloroso, direto'); no chip da landing '~3 meses' aparece sem rótulo, e a pessoa não sabe se é duração, prazo de matrícula ou carência.
- **Correção sugerida:** No chip da landing, dar rótulo: `{TIER_META[curso.tierKey].intensivo.replace(/^~/, "")} no intensivo` ou prefixo 'Duração: '. Manter '~' em cards de métrica onde já há rótulo (INTENSIVO).
- **Esforço:** trivial · **Severidade:** Baixa · **Também apontado como:** F375
- **Verificação:** parcial: TIER_META está em shared.tsx:26-93 (arquivo tem 251 linhas; linha 404 não existe). Chip sem rótulo confirmado em particular.index.tsx:505. Em cards com rótulo 'INTENSIVO ~3 meses' o til é aceitável — problema real é só o chip solto. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f123"></a>

## F123 · ⚪ Órfã 'BI' no bullet 'Do Excel ao Python, do Canva ao Power BI' no celular

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:55](../../../../src/routes/particular.index.tsx#L55)
- **Evidência:** particular.index.tsx:55 `"Do Excel ao Python, do Canva ao Power BI"` renderizado em :323 `text-sm`. Screenshot: routes/particular/mobile.seg02.png (linha 2 do bullet só com 'BI').
- **Problema:** Nome de produto ('Power BI') quebrado em duas linhas com órfã de 2 letras — o leitor lê 'Power' e 'BI' como coisas separadas.
- **Correção sugerida:** Na string de :55 trocar o espaço de 'Power BI' por U+00A0: `"Do Excel ao Python, do Canva ao Power BI"`.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: No mobile.seg02.png o 'BI' aparece sozinho na segunda linha do bullet. particular.index.tsx:55 confirmado.

<a id="f367"></a>

## F367 · ⚪ Outcomes quebram paralelismo: infinitivo em 49 cursos, 3ª pessoa em backend/frontend/python-apis

- **Rotas:** `/particular/cursos/backend`, `/particular/cursos/frontend`, `/particular/cursos/python-apis`
- **Onde:** [src/routes/particular.cursos.backend.tsx:39](../../../../src/routes/particular.cursos.backend.tsx#L39)
- **Evidência:** backend.tsx:39 "Desenvolve APIs REST seguras..."; frontend.tsx:39 "Desenvolve aplicações React completas..."; python-apis.tsx:38 "Domina o ciclo completo...". Todos os demais começam em infinitivo: excel.tsx:36 "Dominar Excel...", ads.tsx:40 "Desenvolver...", python.tsx "Programar em Python..." (courses.json › tiers[0].outcome). O outcome é exibido no card de preço (common.tsx:247) e no eyebrow de conteúdo.
- **Problema:** Em três páginas o texto lê como se descrevesse uma pessoa ("Desenvolve APIs...") em vez do resultado do curso; quebra o padrão "o que você vai conseguir fazer" usado no resto do catálogo.
- **Correção sugerida:** backend.tsx:39 'Desenvolve' → 'Desenvolver'; frontend.tsx:39 'Desenvolve' → 'Desenvolver'; python-apis.tsx:38 'Domina' → 'Dominar' (ajustar a concordância dos demais verbos da frase: 'consome e cria' → 'consumir e criar').
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: backend.tsx:39 e frontend.tsx:39 'Desenvolve...', python-apis.tsx:38 'Domina...'. Os outros ~48 outcomes começam no infinitivo (Dominar, Criar, Sair, Editar...).

<a id="f368"></a>

## F368 · ⚪ Listas "Para quem é" misturam "Você quer...", substantivo ("Empreendedor que...") e verbo solto ("Quer abrir...") na mesma página

- **Rotas:** `/particular/cursos/photoshop`, `/particular/cursos/ciberseguranca`, `/particular/cursos/linux`, `/particular/cursos/manutencao`, `/particular/cursos/canva`, `/particular/cursos/capcut`, `/particular/cursos/redes`, `/particular/cursos/redes-sociais`, `/particular/cursos/suporte`, `/particular/cursos/marketing`, `/particular/cursos/davinci`, `/particular/cursos/premiere`, `/particular/cursos/ecommerce`
- **Onde:** [src/routes/particular.cursos.photoshop.tsx:26](../../../../src/routes/particular.cursos.photoshop.tsx#L26)
- **Evidência:** photoshop.tsx:26 "Aspira trabalhar em agência...", :27 "Já usa Canva mas...", :28 "Fotógrafo que quer dominar..." (3 estruturas na mesma lista). ciberseguranca.tsx:28 "Está preparando-se para..." (ênclise artificial; PT-BR natural: "Está se preparando") ao lado de "Gestor de TI responsável..." e "Quer se tornar...". linux.tsx:29 "Prepara-se para certificações". Já 38 cursos usam "Você ..." em todos os itens (ex.: excel.tsx, python.tsx). Heading da seção: "Este curso é ideal se você..." (mobile.json › dom.headings).
- **Problema:** Sob o título "Este curso é ideal se você...", itens como "Fotógrafo que quer dominar retoque" ou "Aspira trabalhar em agência" não completam a frase; o leitor precisa reprocessar cada bullet. Paralelismo é regra básica de lista escaneável (§1.4).
- **Correção sugerida:** Reescrever os targetAudience fora do padrão com "Você ...", o padrão de 38 cursos. Exemplos: "Você quer trabalhar em agência...", "Você é fotógrafo e quer dominar retoque...". Corrigir ciberseguranca.tsx:28 para "Você está se preparando para..." e linux.tsx:29 para "Você está se preparando para certificações...".
- **Esforço:** médio · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Photoshop.tsx:26-30 mistura "Aspira...", "Já usa...", "Fotógrafo que..." e "Profissional de marketing que...". Ciberseguranca.tsx:28 "Está preparando-se" e linux.tsx:29 "Prepara-se" confirmados. Não compromete o entendimento, então é baixa.

<a id="f378"></a>

## F378 · ⚪ Taglines com comprimento de 51 a 117 caracteres — as longas viram 4 linhas no hero mobile

- **Rotas:** `/particular/cursos/excel-ia`, `/particular/cursos/chatgpt`, `/particular/cursos/tiktok-ads`, `/particular/cursos/sql`, `/particular/cursos/conteudo-ia`, `/particular/cursos/excel-power-bi`, `/particular/cursos/power-apps`
- **Onde:** [src/routes/particular.cursos.excel-ia.tsx:25](../../../../src/routes/particular.cursos.excel-ia.tsx#L25)
- **Evidência:** excel-ia.tsx:24 tagline 117 chars ("Faça em minutos o que levava horas — planilhas turbinadas com Copilot, Claude, ChatGPT e Python por linguagem natural") → 4 linhas em routes/particular__cursos__excel-ia/mobile.fold.png; chatgpt.tsx:24 98; tiktok-ads.tsx:24 91; sql.tsx:24 91; conteudo-ia.tsx:24 91; excel-power-bi.tsx:24 90; power-apps.tsx:24 90. Contra: suporte.tsx:24 51 chars (2 linhas, mobile.fold.png), linux 53, excel 56.
- **Problema:** §1.3 pede "Subs: 1 frase concreta"; §1.4 "se não couber em uma respiração, encurta". A tagline do Excel + IA repete a lista de ferramentas que já está na description e no outcome, e empurra o CTA para baixo da dobra em telas menores.
- **Correção sugerida:** Encurtar só as taglines acima de ~90 caracteres, sem criar regra no tipo. excel-ia: "Faça em minutos o que levava horas, com IA dentro da planilha"; chatgpt: "Multiplique sua produtividade com IA, de forma prática e segura"; sql: "Consulte, modele e analise dados reais com SQL".
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: O texto está em excel-ia.tsx:25 (117 caracteres), e não na linha 24, que só abre o campo. Chatgpt.tsx:24 tem 98. Cada uma continua sendo 1 frase, então não viola o §1.3 ao pé da letra. O excesso é real e repete as ferramentas já listadas na description, mas é polimento. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._
