# Copy e consistência de linguagem — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#66) · nota da dimensão **5/10** · **37 achados** (🔴 1 · 🟠 7 · 🟡 11 · ⚪ 18)

O texto do site é caloroso e específico na maior parte, mas **promete mais do que a escola pode provar** e **dá informações diferentes sobre o mesmo assunto** em páginas diferentes.

- **Promessa de resultado e selo que a escola não tem.** Emprego em 60 dias, "formação formal" comparada a faculdade, "certificado reconhecido", certificação Blackmagic "incluída", "venda todos os dias". *Consequência:* risco com o Código de Defesa do Consumidor e aluno frustrado que vira avaliação ruim.
- **Nenhuma fonte única para os dados da escola.** Horário, CEP, número de avaliações, faixas de idade e nomes dos programas estão digitados à mão em cada página, então cada uma diz uma coisa. *Consequência:* o pai lê "Júnior 5–9" e cai numa página "CREATE 8–14", ou chega às 19h de sábado e encontra a escola fechada.
- **O texto de uma página não bate com a página seguinte.** Card "Office + IA" leva a um curso sem IA; "Faixa Branca" não existe no CREATE; a home fala em "robôs" e o FAQ nega robótica. *Consequência:* a promessa se quebra justamente no clique de compra.
- **Hype no lugar de prova.** "Premium", "altíssima demanda", "+300 carreiras transformadas" sem fonte e anos fixos (2025) que já venceram. *Consequência:* soa como propaganda, e texto datado passa a impressão de catálogo abandonado.
- **Descuido de acabamento.** O botão principal muda de nome 6 vezes no funil; "Quero o Impressão 3D" sai com o gênero errado; aparecem "T.I" e "TI", "N8N" e "n8n", "Login" e "Entrar na conta", "você" misturado com "tu". *Consequência:* passa sensação de amadorismo numa marca que se diz premium.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F358`](#f358) | 🔴 | Promessa de emprego em prazo fixo no hero do Suporte Técnico ("primeiro emprego em TI em 60 dias") | `/particular/cursos/suporte` | [src/routes/particular.cursos.suporte.tsx:24](../../../../src/routes/particular.cursos.suporte.tsx#L24) | trivial |
| [`F337`](#f337) | 🟠 | Faixas etárias e nomes de programa contradizem-se entre Home/Programas e páginas JR/CREATE | `/`, `/cursos` +8 | [src/routes/index.tsx:92](../../../../src/routes/index.tsx#L92) | grande |
| [`F338`](#f338) | 🟠 | Home promete "robôs"/"Robótica" no hero, mas o FAQ da mesma página nega robótica | `/`, `/cursos/academies`, `/contato` | [src/routes/index.tsx:413](../../../../src/routes/index.tsx#L413) | pequeno |
| [`F340`](#f340) | 🟠 | Horário de funcionamento: "Seg a Sáb · 8h às 22h" na home contradiz sábado até 18h | `/`, `/contato`, `/particular` | [src/routes/index.tsx:1080](../../../../src/routes/index.tsx#L1080) | trivial |
| [`F359`](#f359) | 🟠 | ADS: 48 aulas vendidas como "formação formal" substituta de graduação e nível "sênior" | `/particular/cursos/ads` | [src/routes/particular.cursos.ads.tsx:40](../../../../src/routes/particular.cursos.ads.tsx#L40) | pequeno |
| [`F360`](#f360) | 🟠 | "Certificado reconhecido em todo o território nacional" — claim sem base para curso livre | `todas as 52 páginas de /particular/cursos/*` | [src/components/course-skins/common.tsx:187](../../../../src/components/course-skins/common.tsx#L187) | trivial |
| [`F361`](#f361) | 🟠 | Card "Pacote Office + IA" vende IA, mas o curso linkado (/office) não tem IA | `/particular` | [src/routes/particular.index.tsx:79](../../../../src/routes/particular.index.tsx#L79) | trivial |
| [`F379`](#f379) | 🟠 | DaVinci e Premiere compartilham bullets copiados e FAQ promete certificação Blackmagic como parte do curso | `/particular/cursos/davinci`, `/particular/cursos/premiere` | [src/routes/particular.cursos.davinci.tsx:111](../../../../src/routes/particular.cursos.davinci.tsx#L111) | trivial |
| [`F302`](#f302) | 🟡 | Rótulo do CTA primário muda 6 vezes no mesmo funil (Agende/Agendar/Quero saber mais/Começar/Visita guiada) | `/`, `/cursos` +3 | [src/routes/cursos.junior.5-6-anos.tsx:253](../../../../src/routes/cursos.junior.5-6-anos.tsx#L253) | pequeno |
| [`F313`](#f313) | 🟡 | /particular: '+300 alunos formados' e '+300 carreiras transformadas' — mesmo número, sem fonte, promete resultado | `/particular` | [src/routes/particular.index.tsx:235](../../../../src/routes/particular.index.tsx#L235) | trivial |
| [`F342`](#f342) | 🟡 | CEP da escola diverge entre Política de Privacidade e schema (14020-170 vs 14025-000) | `/privacidade` | [src/routes/privacidade.tsx:28](../../../../src/routes/privacidade.tsx#L28) | trivial |
| [`F343`](#f343) | 🟡 | "Faixa Branca do CREATE" usa vocabulário de faixas (lista negra §11) e não existe no CREATE | `/cursos/junior`, `/cursos/junior/7-8-anos` | [src/routes/cursos.junior.7-8-anos.tsx:234](../../../../src/routes/cursos.junior.7-8-anos.tsx#L234) | pequeno |
| [`F345`](#f345) | 🟡 | CREATE Ano 1 cita insígnia "Pixel Iniciante" inexistente e promete 5 conquistas tendo 4 | `/cursos/create/8-9-anos` | [src/routes/cursos.create.8-9-anos.tsx:350](../../../../src/routes/cursos.create.8-9-anos.tsx#L350) | trivial |
| [`F362`](#f362) | 🟡 | Taglines com promessa de resultado garantido/hype ("venda todos os dias", "zero erros", "campanhas lucrativas") | `/particular/cursos/ecommerce`, `/particular/cursos/meta-ads` +6 | [src/routes/particular.cursos.ecommerce.tsx:24](../../../../src/routes/particular.cursos.ecommerce.tsx#L24) | pequeno |
| [`F363`](#f363) | 🟡 | CTA do card de preço gera concordância errada e rótulo inconsistente ("Quero o Impressão 3D Completa", "Quero o Hardware") | `todas as 52 páginas de /particular/cursos/*`, `/particular` | [src/components/course-skins/common.tsx:272](../../../../src/components/course-skins/common.tsx#L272) | trivial |
| [`F372`](#f372) | 🟡 | Bullets datados já vencidos ("em 2025") e futuro que vai vencer ("de 2026") | `/particular/cursos/power-apps`, `/particular/cursos/seo` +2 | [src/routes/particular.cursos.power-apps.tsx:31](../../../../src/routes/particular.cursos.power-apps.tsx#L31) | trivial |
| [`F373`](#f373) | 🟡 | FAQ "Quanto custa?" diz que o valor "varia conforme o plano" logo abaixo do preço exibido em plano único | `todas as 52 páginas de /particular/cursos/*`, `/particular` | [src/components/particular-faq-items.ts:33](../../../../src/components/particular-faq-items.ts#L33) | pequeno |
| [`F377`](#f377) | 🟡 | Campo `categoria` com 4 variantes para Office, exibido no eyebrow do hero | `/particular/cursos/excel`, `/particular/cursos/excel-ia` +6 | [src/routes/particular.cursos.excel.tsx:19](../../../../src/routes/particular.cursos.excel.tsx#L19) | trivial |
| [`X05`](#x05) | 🟡 | Mesma página diz '100% presencial' e 'aula online se precisar' e repete 2 cards | `/particular/cursos/* (52 páginas)` | [src/components/course-skins/common.tsx:204](../../../../src/components/course-skins/common.tsx#L204) | pequeno |
| [`F309`](#f309) | ⚪ | /sobre repete o H1 da home e os mesmos números em vez de contar a história da escola | `/sobre` | [src/routes/sobre.index.tsx:213](../../../../src/routes/sobre.index.tsx#L213) | grande |
| [`F310`](#f310) | ⚪ | A marca se autodenomina 'premium' 4 vezes em vez de provar | `/`, `/sobre` | [src/routes/index.tsx:530](../../../../src/routes/index.tsx#L530) | trivial |
| [`F341`](#f341) | ⚪ | Total de avaliações Google inconsistente ("mais de 325", "329", "mais de 329") | `/`, `/sobre` | [src/routes/sobre.index.tsx:46](../../../../src/routes/sobre.index.tsx#L46) | pequeno |
| [`F346`](#f346) | ⚪ | Academies usa nomes em inglês ("Robotics Academy", "AI Academy", "Hands-on") para pais | `/cursos/academies` | [src/routes/cursos.academies.tsx:294](../../../../src/routes/cursos.academies.tsx#L294) | grande |
| [`F348`](#f348) | ⚪ | Hype sem prova: "altíssima demanda", "possibilidades ilimitadas", "habilidade mais valiosa da década" | `/`, `/sobre` +3 | [src/routes/index.tsx:773](../../../../src/routes/index.tsx#L773) | pequeno |
| [`F349`](#f349) | ⚪ | Copy ataca "a maioria das escolas" e "a escola" do filho — tom fora do acolhedor | `/`, `/cursos` | [src/routes/index.tsx:651](../../../../src/routes/index.tsx#L651) | trivial |
| [`F350`](#f350) | ⚪ | "As ferramentas que todo emprego exige" generaliza e beira promessa de mercado (§11) | `/`, `/cursos` | [src/routes/index.tsx:131](../../../../src/routes/index.tsx#L131) | trivial |
| [`F351`](#f351) | ⚪ | Referência só a "o pai" em trechos genéricos, enquanto o resto do site diz "pai/mãe" | `/`, `/cursos/camps` | [src/routes/index.tsx:471](../../../../src/routes/index.tsx#L471) | trivial |
| [`F354`](#f354) | ⚪ | Frase truncada em Nossa Visão: "confiam a primeira escola … dos filhos na gente" | `/sobre/visao` | [src/routes/sobre.visao.tsx:179](../../../../src/routes/sobre.visao.tsx#L179) | trivial |
| [`F355`](#f355) | ⚪ | Academies: métrica "9–14" para as duas academias, mas IA é 11–14; duração indefinida | `/cursos/academies` | [src/routes/cursos.academies.tsx:292](../../../../src/routes/cursos.academies.tsx#L292) | trivial |
| [`F356`](#f356) | ⚪ | Mistura de pessoa verbal nas FAQs: "Conversa/consulta com a gente" vs "Fale/Aproveitamos" | `/cursos/academies`, `/cursos/junior/7-8-anos` +3 | [src/routes/cursos.academies.tsx:137](../../../../src/routes/cursos.academies.tsx#L137) | trivial |
| [`F365`](#f365) | ⚪ | "T.I" (com ponto) na navegação e categorias vs "TI" no corpo dos textos | `/particular`, `/particular/cursos/suporte` +4 | [src/routes/particular.tsx:86](../../../../src/routes/particular.tsx#L86) | trivial |
| [`F366`](#f366) | ⚪ | "N8N" em maiúsculas nos nomes/títulos vs "n8n" (grafia oficial) em outros cursos | `/particular`, `/particular/cursos/n8n` +3 | [src/routes/particular.cursos.n8n.tsx:19](../../../../src/routes/particular.cursos.n8n.tsx#L19) | pequeno |
| [`F374`](#f374) | ⚪ | FAQ genérico com duas perguntas quase idênticas (horários vs dias) e eyebrow repetindo o H2 | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/components/particular-faq-items.ts:13](../../../../src/components/particular-faq-items.ts#L13) | trivial |
| [`F376`](#f376) | ⚪ | Sidebar rotula o curso de Linux como "Linux Essencial" — nome de tier extinto, conteúdo é avançado | `/particular`, `todas as 52 páginas de /particular/cursos/* (sidebar)` | [src/routes/particular.tsx:92](../../../../src/routes/particular.tsx#L92) | trivial |
| [`F383`](#f383) | ⚪ | Mesma ação com dois rótulos: "Entrar na conta" (sidebar) vs "Login" (topbar mobile) | `/particular`, `todas as 52 páginas de /particular/cursos/*` | [src/routes/particular.tsx:608](../../../../src/routes/particular.tsx#L608) | trivial |
| [`X04`](#x04) | ⚪ | Selo '● ONLINE' piscando no hero das 5 páginas de T.I sugere curso online | `/particular/cursos/suporte`, `/particular/cursos/manutencao` +3 | [src/components/course-skins/ti.tsx:111](../../../../src/components/course-skins/ti.tsx#L111) | trivial |
| [`X06`](#x06) | ⚪ | CREATE Ano 6 manda para as Academies 'depois, 14+', mas elas atendem só até 14 anos | `/cursos/create/13-14-anos`, `/cursos/academies` | [src/routes/cursos.create.13-14-anos.tsx:403](../../../../src/routes/cursos.create.13-14-anos.tsx#L403) | trivial |

<a id="f358"></a>

## F358 · 🔴 Promessa de emprego em prazo fixo no hero do Suporte Técnico ("primeiro emprego em TI em 60 dias")

- **Rotas:** `/particular/cursos/suporte`
- **Onde:** [src/routes/particular.cursos.suporte.tsx:24](../../../../src/routes/particular.cursos.suporte.tsx#L24)
- **Evidência:** suporte.tsx:24 tagline "Do atendimento ao primeiro emprego em TI em 60 dias"; :13 description "Entre na área de TI em até 60 dias"; :30 targetAudience "curso com saída de emprego rápida e demanda garantida"; :37 outcome termina em "...e o primeiro emprego em TI". Visível em routes/particular__cursos__suporte/mobile.fold.png logo abaixo do H1.
- **Problema:** DESIGN_SYSTEM §11 proíbe "prometer emprego, retorno financeiro ou resultado garantido". O hero promete emprego em 60 dias e o bullet fala em "demanda garantida" — além do risco legal (CDC, publicidade enganosa), o próprio TIER_META diz que o curso leva ~3 meses no intensivo, o que contradiz os 60 dias.
- **Correção sugerida:** tagline L24: 'Do atendimento N1 ao técnico N2 — a base para entrar em TI'. description L13: 'Aprenda hardware, redes, Active Directory e ticketing e prepare-se para a CompTIA A+ com aulas individuais e presenciais em Ribeirão Preto.' L30: 'Quer entrar numa área com alta demanda por técnicos de suporte'. L37: remover 'e o primeiro emprego em TI'.
- **Esforço:** trivial · **Severidade:** Crítica
- **Verificação:** confirmado: suporte.tsx:24 'primeiro emprego em TI em 60 dias', :13 'em até 60 dias', :30 'demanda garantida', :37 'primeiro emprego'. Viola DS §11:643 (promessa de emprego). TIER_META (course-skins/shared.tsx, 'Suporte Técnico') dá ~3 meses no intensivo, o que contradiz os 60 dias. · ✅ **Conferido ao vivo pelo CTO:** particular.cursos.suporte.tsx:24, tagline "Do atendimento ao primeiro emprego em TI em 60 dias".

<a id="f337"></a>

## F337 · 🟠 Faixas etárias e nomes de programa contradizem-se entre Home/Programas e páginas JR/CREATE

- **Rotas:** `/`, `/cursos`, `/sobre`, `/termos`, `/cursos/junior`, `/cursos/create`, `/cursos/junior/5-6-anos`, `/cursos/create/8-9-anos`, `/cursos/create/*-anos`, `/cursos/junior/*-anos`
- **Onde:** [src/routes/index.tsx:92](../../../../src/routes/index.tsx#L92)
- **Evidência:** Home vende 4 produtos "Tecnologia Júnior 5 a 9 anos" / "Tecnologia Create 10 a 15 anos" / "Informática Júnior" / "Informática Create" (index.tsx:92,104,117,129; STATS "5–15" L172; FAQ L291,311; legenda L566-569), repetido em site-header.tsx:23-28, cursos.index.tsx:27,67,81,99,113,254,257, sobre.index.tsx:31,106,167, termos.tsx:39 e seo.ts:56. Já /cursos/junior diz "JR (5 a 8 anos)" com JR1 5–6, JR2 6–7, JR3 7–8 (cursos.junior.index.tsx:36,243,262-264) e /cursos/create diz "CREATE (8 a 14 anos)" com CREATE1 8–9 … CREATE6 13–14 (cursos.create.index.tsx:37,216,66-106). DESIGN_SYSTEM §1.6 confirma JR 5–8 e CREATE 8–14. Screenshots: routes/cursos/mobile.fold.png ("Crianças · 5–9 / Adolescentes · 10–15") vs routes/cursos__junior/mobile.fold.png ("Idades de 5 a 8 anos") vs routes/cursos__create/mobile.fold.png ("8 a 14 anos"). Não existe página de programa para "Informática" nem para "Júnior/Create" da home; o header (site-header.tsx:23-28) linka só para /cursos#tecnologia e /cursos#informatica, nunca para /cursos/junior ou /cursos/create.
- **Problema:** Um pai com filho de 9 anos lê "Júnior 5–9" na home e "CREATE 8–14" na página de curso; o de 15 anos vê "até 15" na home e "até 14" no programa. Dois sistemas de nomenclatura (Tecnologia/Informática × Júnior/Create vs JR/CREATE) para a mesma escola, com faixas incompatíveis, quebram a confiança e a especificidade que o DESIGN_SYSTEM §1.3 exige ("Idade + ferramenta real como prova").
- **Correção sugerida:** Decisão de negócio para o Henrique: qual taxonomia vale. Hoje home/header/cursos (Tecnologia\|Informática × Júnior 5–9\|Create 10–15) é a mais recente e é a navegada; JR/CREATE (5–8/8–14) são páginas órfãs (header, footer e /cursos não linkam /cursos/junior nem /cursos/create; só sitemap). Recomendo: alinhar as páginas JR/CREATE e o DS §1.6 à taxonomia da home, ou tirá-las do sitemap até revisar. Não trocar metas antes da decisão.
- **Esforço:** grande · **Severidade:** Alta (proposta Crítica, recalibrada na verificação) · **Também apontado como:** F300
- **Verificação:** confirmado: Confirmado: index.tsx:92,104 '5 a 9'/'10 a 15'; site-header.tsx:23-28; junior.index '5 a 8'; create '8 a 14'. Rebaixado de critica: páginas JR/CREATE não são alcançáveis pelo menu (grep sem links), só via Google/sitemap. Exige decisão de marca.

<a id="f338"></a>

## F338 · 🟠 Home promete "robôs"/"Robótica" no hero, mas o FAQ da mesma página nega robótica

- **Rotas:** `/`, `/cursos/academies`, `/contato`
- **Onde:** [src/routes/index.tsx:413](../../../../src/routes/index.tsx#L413)
- **Evidência:** Hero: "seu filho cria jogos, robôs e projetos reais desde a primeira aula" (index.tsx:412-413, visível em routes/home/mobile.fold.png). ScrollStage: "Robótica, games e IA — Projetos reais que ganham vida" (index.tsx:469) e "dos 5 aos 14 anos" (L468). FAQ da mesma página: "Não trabalhamos com robótica de montagem" (index.tsx:299). Enquanto /cursos/academies vende "Robotics Academy … A criança monta, programa e testa robôs reais" e "monta o robô do zero" (cursos.academies.tsx:92,145).
- **Problema:** Três afirmações incompatíveis sobre o mesmo tema na home e no site; o FAQ é indexado como FAQPage (schema) e vai aparecer no Google negando o que o hero afirma. Pai que busca robótica recebe sinal contraditório na primeira tela e na resposta "oficial".
- **Correção sugerida:** Alinhar as três falas. Hero L412-413: 'cria jogos, objetos em 3D e projetos reais desde a primeira aula'. ScrollStage L469: title 'Jogos, 3D e IA'. FAQ L299: 'Nosso foco é a criação digital… A robótica física aparece na Robotics Academy (/cursos/academies#robotica), módulo de especialização com kits de motores e sensores.' L468: trocar 'dos 5 aos 14' pela faixa do FAQ L311 ('5 a 15 anos').
- **Esforço:** pequeno · **Severidade:** Alta
- **Verificação:** confirmado: index.tsx:413 'robôs'; L469 'Robótica, games e IA'; FAQ L299 'Não trabalhamos com robótica de montagem'; cursos.academies.tsx:92,145 vende robôs reais montados. L468 '5 aos 14' contradiz FAQ L311 '5 a 15'. Contradição real no FAQPage indexado.

<a id="f340"></a>

## F340 · 🟠 Horário de funcionamento: "Seg a Sáb · 8h às 22h" na home contradiz sábado até 18h

- **Rotas:** `/`, `/contato`, `/particular`
- **Onde:** [src/routes/index.tsx:1080](../../../../src/routes/index.tsx#L1080)
- **Evidência:** index.tsx:1080 (card WhatsApp da seção "Onde estamos"): "Seg a Sáb · 8h às 22h". Mesma página, FAQ index.tsx:315: "de segunda a sexta das 8h às 22h e aos sábados das 8h às 18h". contato.tsx:108-109: "Seg a Sex · 8h às 22h / Sábado · 8h às 18h". seo.ts:104-117 (schema openingHours): sábado 08:00–18:00.
- **Problema:** O único lugar em que o horário aparece em destaque (card) diz sábado até 22h; o FAQ, o /contato e o schema dizem 18h. Pai que chega às 19h de sábado confiando no card encontra a escola fechada.
- **Correção sugerida:** Trocar L1080 por duas linhas: <p className="text-sm text-muted-foreground">Seg a Sex · 8h às 22h</p><p className="text-sm text-muted-foreground">Sáb · 8h às 18h</p>. Idealmente derivar de uma constante única, usada também em contato.tsx:108-109.
- **Esforço:** trivial · **Severidade:** Alta · **Também apontado como:** F311
- **Verificação:** confirmado: index.tsx:1080 'Seg a Sáb · 8h às 22h' contra o FAQ da mesma página (L315: sábados 8h às 18h) e contato.tsx. Informação errada de horário leva o pai a encontrar a escola fechada.

<a id="f359"></a>

## F359 · 🟠 ADS: 48 aulas vendidas como "formação formal" substituta de graduação e nível "sênior"

- **Rotas:** `/particular/cursos/ads`
- **Onde:** [src/routes/particular.cursos.ads.tsx:40](../../../../src/routes/particular.cursos.ads.tsx#L40)
- **Evidência:** ads.tsx:40 outcome "...pronto para posições de desenvolvedor júnior a pleno/sênior em TI"; :13 description "Do zero ao mercado de TI em até 6 meses"; :27 "sem precisar fazer uma graduação de 4 anos"; :30 "qualificação profissional reconhecida pelo mercado em poucos meses, não em anos de graduação"; :239 FAQ "formação formal em desenvolvimento de sistemas"; :10 title "Curso de ADS — Formação Profissional em Programação". TIER_META (shared.tsx:93) = 48 aulas de 1h.
- **Problema:** "ADS" é o nome de um curso superior (Tecnólogo em Análise e Desenvolvimento de Sistemas). Chamar 48 horas de "formação formal", compará-las com "graduação de 4 anos" e prometer nível sênior induz o comprador a supor equivalência acadêmica e resultado garantido — viola §11 e §13 ("especificidade como prova", nunca inventar). 16 módulos em 48h também não é crível.
- **Correção sugerida:** outcome L40: terminar em '…fechando com um projeto de conclusão para o portfólio — base sólida para buscar vagas júnior'. Remover 'formação formal' (L29 e FAQ L239) e 'reconhecida pelo mercado… não em anos de graduação' (L27 e L30). description L13 sem 'em até 6 meses'. Avaliar o nome 'Trilha Full Stack (inspirada na grade de ADS)'; o nome é decisão de marca.
- **Esforço:** pequeno · **Severidade:** Alta (proposta Crítica, recalibrada na verificação)
- **Verificação:** confirmado: ads.tsx:40 'júnior a pleno/sênior'; :27 compara com 'graduação de 4 anos'; :29 e :239 'formação formal'; :30 'reconhecida pelo mercado'; 48h (L38). Viola DS §11 (DESIGN_SYSTEM.md:643). Rebaixado de crítica para alta: não promete emprego explicitamente.

<a id="f360"></a>

## F360 · 🟠 "Certificado reconhecido em todo o território nacional" — claim sem base para curso livre

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:187](../../../../src/components/course-skins/common.tsx#L187)
- **Evidência:** common.tsx:187 "Certificado emitido pela Santos Tech, reconhecido em todo o território nacional."; shared.tsx:146-147 card "Certificado Reconhecido / Válido em todo o Brasil."; mesmo texto em particular-course-page.tsx:464. Aparece como h3 "Certificado Reconhecido" em todo mobile.json (ex.: routes/particular__cursos__davinci/mobile.json › dom.headings).
- **Problema:** Certificado de curso livre não passa por reconhecimento de órgão algum; "reconhecido" sugere chancela oficial (MEC) que não existe. §13 manda usar [VERIFICAR] em vez de inventar credencial; §11 proíbe insinuar chancela que a escola não tem.
- **Correção sugerida:** common.tsx:187 e particular-course-page.tsx:464 → `Certificado de conclusão emitido pela Santos Tech, com carga horária e conteúdo detalhados.`; shared.tsx:146-147 → title `Certificado de conclusão`, desc `Com carga horária e ementa para o seu currículo.`; seo.ts:339 → `Certificado de Conclusão — emitido pela Santos Tech, com carga horária e ementa`. Grep final por 'reconhecido' e 'Válido em todo o Brasil' para garantir zero ocorrências.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: Texto literal em common.tsx:187, shared.tsx:146-147 ('Certificado Reconhecido / Válido em todo o Brasil'), particular-course-page.tsx:464 e ainda seo.ts:339 (JSON-LD). h3 'Certificado Reconhecido' presente nos mobile.json (excel, manutencao, impressao-3d, davinci). Sem órgão que 'reconheça' curso livre; §13 manda [VERIFICAR] em vez de inventar credencial. §11 cita só Microsoft, não chancela geral.

<a id="f361"></a>

## F361 · 🟠 Card "Pacote Office + IA" vende IA, mas o curso linkado (/office) não tem IA

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:79](../../../../src/routes/particular.index.tsx#L79)
- **Evidência:** particular.index.tsx:79 titulo "Pacote Office + IA", :83 bullet "Inteligência Artificial aplicada ao trabalho real", :87 href "/particular/cursos/office". office.tsx:19 nome "Pacote Office"; única menção a IA no arquivo é office.tsx:76 ("Designer do PowerPoint (IA embutida)"). Screenshot routes/particular/mobile.seg03.png mostra o card com badge "Mais procurado".
- **Problema:** O card mais destacado da landing promete um produto ("Office + IA") que não existe no catálogo; quem clica cai em "Pacote Office" sem módulo de IA. Quebra de expectativa no CTA principal de conversão e inconsistência de nome entre landing e página do curso.
- **Correção sugerida:** Alinhar o card ao curso destino: titulo "Pacote Office" e trocar o bullet da linha 83 por "Recursos atuais como o Designer do PowerPoint" (fato presente em particular.cursos.office.tsx:76). Alternativa: manter "+ IA" apontando para /particular/cursos/excel-ia (rota existe) e reescrever os bullets para Excel + IA.
- **Esforço:** trivial · **Severidade:** Alta
- **Verificação:** confirmado: particular.index.tsx:79/83 promete "Office + IA" e IA aplicada; href :87 leva a particular.cursos.office.tsx:19 nome "Pacote Office", cuja única menção a IA é :76 (Designer do PowerPoint). Promessa no card de maior destaque sem entrega no destino.

<a id="f379"></a>

## F379 · 🟠 DaVinci e Premiere compartilham bullets copiados e FAQ promete certificação Blackmagic como parte do curso

- **Rotas:** `/particular/cursos/davinci`, `/particular/cursos/premiere`
- **Onde:** [src/routes/particular.cursos.davinci.tsx:111](../../../../src/routes/particular.cursos.davinci.tsx#L111)
- **Evidência:** davinci.tsx:27-29 e premiere.tsx:27-29 idênticos ("Videomaker que já edita no celular...", "Profissional de comunicação que precisa editar vídeos institucionais...", "YouTuber ou criador de conteúdo..."). davinci.tsx:111 FAQ: "O projeto final do curso inclui a certificação Blackmagic Design: DaVinci Resolve Operator"; :97 tópico diz apenas "Preparação para a certificação".
- **Problema:** A certificação Blackmagic é emitida pela Blackmagic Design mediante exame próprio — a escola pode preparar, não "incluir" (§11: não insinuar chancela de terceiro). Bullets copiados entre dois cursos concorrentes empobrecem a diferenciação que a própria FAQ do Premiere (premiere.tsx:113-114) tenta explicar.
- **Correção sugerida:** davinci.tsx:111 → 'O curso prepara você para a certificação Blackmagic Design DaVinci Resolve Operator (o exame é feito diretamente com a Blackmagic) e termina com um showreel de 2-3 minutos pronto para o Vimeo e o LinkedIn.' Os bullets copiados do Premiere (premiere.tsx:27-29) ficam como melhoria secundária.
- **Esforço:** trivial · **Severidade:** Alta (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: davinci.tsx:111 responde 'Sim... inclui a certificação Blackmagic', enquanto o tópico l.97 diz só 'Preparação'. Prometer certificação de terceiro é risco de propaganda enganosa (CDC). Os 3 bullets repetidos são reais, mas premiere.tsx:30 já diferencia.

<a id="f302"></a>

## F302 · 🟡 Rótulo do CTA primário muda 6 vezes no mesmo funil (Agende/Agendar/Quero saber mais/Começar/Visita guiada)

- **Rotas:** `/`, `/cursos`, `/cursos/create/*-anos`, `/cursos/junior/*-anos`, `/particular`
- **Onde:** [src/routes/cursos.junior.5-6-anos.tsx:253](../../../../src/routes/cursos.junior.5-6-anos.tsx#L253)
- **Evidência:** home/desktop.json › ctas: 'AGENDE UMA AULA EXPERIMENTAL GRÁTIS', 'QUERO SABER MAIS' ×6, 'COMEÇAR PELO WHATSAPP', 'AINDA TEM DÚVIDA? FALE NO WHATSAPP', 'AGENDE A AULA EXPERIMENTAL GRÁTIS'. cursos.junior.5-6-anos.tsx:253 'Agendar visita guiada grátis'; cursos.create.8-9-anos.tsx:262 'Agendar aula experimental grátis' e :385 'Agendar aula experimental' (sem grátis). Todos apontam para o mesmo WHATSAPP.
- **Problema:** writing.md › Best practices: 'Build language patterns… An action keeps its name through the whole flow'. 'Quero saber mais' não diz o que acontece (abre WhatsApp) e 'visita guiada' vs 'aula experimental' faz o pai achar que JR e CREATE têm ofertas diferentes. DESIGN_SYSTEM §1.3 fixa 'primário = agendar aula experimental'.
- **Correção sugerida:** Padronizar o CTA primário como 'Agendar aula experimental grátis' (DS §1.3) em index.tsx:424/1120 e create.8-9-anos.tsx:385 (falta 'grátis'); secundário 'Tirar dúvidas no WhatsApp'. 'Visita guiada' do JR (l.253, 350, FAQ l.211) só muda se o Henrique confirmar que o JR oferece aula e não visita — é decisão de oferta.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Variações reais (index.tsx:424 'Agende uma', 1120 'Agende a', 629 'Começar pelo WhatsApp'; create 8-9:262 vs :385). Mas 'visita guiada' no JR aparece coerente em CTA e FAQ (junior 5-6:211), provável oferta distinta. Inconsistência de copy, não alta. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f313"></a>

## F313 · 🟡 /particular: '+300 alunos formados' e '+300 carreiras transformadas' — mesmo número, sem fonte, promete resultado

- **Rotas:** `/particular`
- **Onde:** [src/routes/particular.index.tsx:235](../../../../src/routes/particular.index.tsx#L235)
- **Evidência:** particular.index.tsx:235 "+300 alunos formados", :236 "+300 carreiras transformadas", :237 "5,0★ nota no Google"; :221 "329 avaliações" e :229 "5,0 no Google" logo acima. Screenshot routes/particular/mobile.fold.png: linha de estrelas + grid com 3 stats na mesma dobra. linux.tsx:24 "96% dos servidores do mundo" também sem fonte.
- **Problema:** DESIGN_SYSTEM §13 'Inventar estatística' e §11 'Prometer emprego, retorno financeiro ou resultado garantido'. writing.md › 'Be clear'. Dois números idênticos com rótulos diferentes lêem como enchimento; 'carreiras transformadas' é promessa de resultado que a escola não controla.
- **Correção sugerida:** Substituir os 3 stats por fatos verificáveis: { n: "52", l: "cursos em 8 áreas" }, { n: "1:1", l: "aula só você e o professor" }, { n: "5,0★", l: "329 avaliações no Google" }. Remover 'carreiras transformadas'; se '+300 alunos' for real, manter com [VERIFICAR] até confirmação.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: particular.index.tsx:235-237 '+300 alunos formados', '+300 carreiras transformadas', '5,0★' logo abaixo de '329 avaliações · 5,0 no Google' (:221-229). Viola DS §13 (inventar estatística) e §11 (prometer resultado). Visível em desktop.fold.png. Redundância, não bloqueio: media.

<a id="f342"></a>

## F342 · 🟡 CEP da escola diverge entre Política de Privacidade e schema (14020-170 vs 14025-000)

- **Rotas:** `/privacidade`
- **Onde:** [src/routes/privacidade.tsx:28](../../../../src/routes/privacidade.tsx#L28)
- **Evidência:** privacidade.tsx:28: "CEP 14020-170" no bloco de identificação da controladora. seo.ts:49: postalCode "14025-000" (vai para o JSON-LD LocalBusiness de todas as páginas e para as páginas /particular).
- **Problema:** Documento jurídico e dado estruturado publicam CEPs diferentes para o mesmo endereço; um dos dois está errado e o LocalBusiness com CEP incorreto prejudica a validação do Google Business.
- **Correção sugerida:** Henrique confirma o CEP real da Av. Nove de Julho, 1992 (Correios/conta de consumo). Depois, unificar em seo.ts:49 e em privacidade.tsx:28 usar `{ORG.address.postalCode}` importando ORG de @/lib/seo, sem literal.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: privacidade.tsx:28 '14020-170' vs seo.ts:49 postalCode '14025-000' (usado no JSON-LD em seo.ts:90 e 360). Não dá pra saber qual está certo sem confirmar nos Correios. Não chutar.

<a id="f343"></a>

## F343 · 🟡 "Faixa Branca do CREATE" usa vocabulário de faixas (lista negra §11) e não existe no CREATE

- **Rotas:** `/cursos/junior`, `/cursos/junior/7-8-anos`
- **Onde:** [src/routes/cursos.junior.7-8-anos.tsx:234](../../../../src/routes/cursos.junior.7-8-anos.tsx#L234)
- **Evidência:** cursos.junior.7-8-anos.tsx:32 (meta description), 140, 154, 171, 179, 187, 209, 234, 270, 305, 355 ("a Pré-Faixa Branca") e cursos.junior.index.tsx:567 ("entra na Faixa Branca aos 8 anos") — 12 ocorrências. DESIGN_SYSTEM §11 lista "belts" (faixas) como vocabulário de concorrente proibido. Nenhuma das 6 páginas CREATE nem cursos.create.index.tsx menciona "faixa"; o CREATE usa "Insígnias Pixel" e "Selo CREATE Ano N" (cursos.create.8-9-anos.tsx:65-70,207).
- **Problema:** O JR3 promete ao pai que o filho "entra na Faixa Branca do CREATE", mas ao abrir o CREATE não existe faixa nenhuma — o sistema é de insígnias. Além de quebrar a expectativa, importa o vocabulário de dojo/faixas que o guia da marca proíbe explicitamente ("se a peça tem qualquer um destes, refaz").
- **Correção sugerida:** Trocar as 11 ocorrências em cursos.junior.7-8-anos.tsx (L32,140,154,171,179,187,209,234,270,305,355) e cursos.junior.index.tsx:567 por 'CREATE 1 (8–9 anos)' / 'CREATE Ano 1'. Ex.: L234 'entra no <strong>CREATE 1</strong> aos 8 anos, sem salto brusco'; L355 '<strong>Criador Pronto para o CREATE</strong> — a ponte para o CREATE 1'. Manter 'Faixa etária' (rótulo de idade, não é belt). Guard em CI opcional: grep -riE 'faixa branca\|dojo\|sensei\|ninja\|belt' src/.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: 'Faixa Branca' em 7-8-anos.tsx:32,140,154,171,179,187,209,234,270,305,355 e junior.index.tsx:567; zero em cursos.create.*. DS §11 (L641) proíbe 'belts'. Rebaixado para media: incoerência de vocabulário, não bloqueia matrícula.

<a id="f345"></a>

## F345 · 🟡 CREATE Ano 1 cita insígnia "Pixel Iniciante" inexistente e promete 5 conquistas tendo 4

- **Rotas:** `/cursos/create/8-9-anos`
- **Onde:** [src/routes/cursos.create.8-9-anos.tsx:350](../../../../src/routes/cursos.create.8-9-anos.tsx#L350)
- **Evidência:** ProgressionTrail: "Já na primeira aula seu filho recebe a insígnia Pixel Iniciante" (L349-350; visível em routes/cursos__create__8-9-anos/mobile.seg05.png). INSIGNIAS (L65-70) tem 4 itens: Aprendiz, Construtor, Estrategista, Criador — nenhum "Iniciante". Meta description L48: "Trilha de Insígnias Pixel com 5 conquistas". FAQ L207 lista 4 ("Aprendiz → Construtor → Estrategista → Criador"). FAQ L211: "A trilha vai até o Ano 5/6" (vago; a página-índice diz 6 cursos).
- **Problema:** O pai lê que o filho ganha uma insígnia na primeira aula que não aparece na trilha desenhada logo abaixo, e o Google exibe "5 conquistas" numa página que mostra 4. Sistema de progressão é o argumento de venda central da página — não pode ter buraco.
- **Correção sugerida:** Reescrever l.349-351: 'A cada módulo concluído seu filho conquista uma insígnia Pixel — são quatro no ano. No Showcase Final, fecha o ano com o <strong>Selo CREATE Ano 1</strong>…'; corrigir meta description (l.48) para '4 conquistas' (ou '4 insígnias + Selo CREATE'); FAQ l.211 'Ano 5/6' → 'até o Ano 6 (13–14 anos)'. Conferir o mesmo padrão nas outras 5 páginas create.*.
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: l.350 cita 'Pixel Iniciante'; INSIGNIAS (l.65-70) tem 4 itens sem ele; meta l.48 diz '5 conquistas'; FAQ l.207 lista 4. Incoerência de copy, mas não bloqueia compra — rebaixado para média.

<a id="f362"></a>

## F362 · 🟡 Taglines com promessa de resultado garantido/hype ("venda todos os dias", "zero erros", "campanhas lucrativas")

- **Rotas:** `/particular/cursos/ecommerce`, `/particular/cursos/meta-ads`, `/particular/cursos/typescript`, `/particular/cursos/agentes-ia`, `/particular/cursos/frontend`, `/particular/cursos/office`, `/particular/cursos/informatica`, `/particular/cursos/davinci`
- **Onde:** [src/routes/particular.cursos.ecommerce.tsx:24](../../../../src/routes/particular.cursos.ecommerce.tsx#L24)
- **Evidência:** ecommerce.tsx:24 "venda todos os dias no piloto automático"; meta-ads.tsx:24 "Crie campanhas lucrativas ... e venda todos os dias" e :13 "campanhas lucrativas"; typescript.tsx:25 "zero erros em produção"; agentes-ia.tsx:24 "trabalham por você 24h com inteligência real"; frontend.tsx:24 "impressionam recrutadores"; office.tsx:13 "conquiste melhores vagas e promoções". Também bullets: backend.tsx:27 "aumentar seu salário", mobile.tsx:30 "salários acima da média", manutencao.tsx:31 "retorno financeiro rápido", jogos.tsx:31 "renda global", ciberseguranca.tsx:31 "áreas de maior salário".
- **Problema:** §11 ("prometer retorno financeiro ou resultado garantido") e §13 ("adjetivos vagos sem prova"). "Zero erros em produção" é tecnicamente falso; "venda todos os dias" e "lucrativas" prometem resultado que depende do aluno.
- **Correção sugerida:** ecommerce L24: 'Monte sua loja virtual do zero e estruture suas vendas online'. meta-ads L13/L24: 'Crie e otimize campanhas no Facebook e Instagram com método'. typescript L25: '…tipagem, autocomplete e menos erros em produção'. agentes-ia L24: 'Crie agentes de IA que executam tarefas por você, com memória e ferramentas'. Nos bullets de salário/renda, trocar por uma competência concreta.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: Frases conferidas: ecommerce:24, meta-ads:13/24, typescript:25 ('zero erros em produção'), agentes-ia:24, frontend:25, office:13. É hype, fere DS §11/§13 (DESIGN_SYSTEM.md:643,656), mas não promete emprego. Rebaixado para média. Os bullets de outros arquivos não foram verificados um a um.

<a id="f363"></a>

## F363 · 🟡 CTA do card de preço gera concordância errada e rótulo inconsistente ("Quero o Impressão 3D Completa", "Quero o Hardware")

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`, `/particular`
- **Onde:** [src/components/course-skins/common.tsx:272](../../../../src/components/course-skins/common.tsx#L272)
- **Evidência:** common.tsx:272 `Quero o {t.ctaLabel ?? t.levelName}`. Só 18 cursos definem ctaLabel (grep), com dois padrões: "curso de X" (16) vs nome de produto ("Hardware" manutencao.tsx:36, "Power Apps" power-apps.tsx:36). Resultado renderizado em mobile.json › dom.ctas: impressao-3d "QUERO O IMPRESSÃO 3D COMPLETA", manutencao "QUERO O HARDWARE", davinci "QUERO O DAVINCI RESOLVE".
- **Problema:** Artigo masculino fixo quebra a concordância com nomes femininos (Impressão, Edição, Lógica, Cibersegurança, Modelagem...) e o botão principal de compra fala em "Hardware" para um curso chamado "Montagem e Manutenção". Copy do CTA de conversão não pode depender de cada arquivo lembrar de preencher ctaLabel.
- **Correção sugerida:** common.tsx:272 e particular-course-page.tsx:608 → `{multiTier ? `Quero o plano ${t.levelName}` : "Quero este curso"}` (levelName dos multi-tier são 'Essencial', 'Intermediário', 'Profissional + IA' — concordam com 'plano'). Depois remover `ctaLabel` do tipo (particular-course-page.tsx:31) e dos 18 arquivos de rota para o campo não voltar a gerar rótulo inconsistente (checar `tsc` após remover).
- **Esforço:** trivial · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** confirmado: common.tsx:272 `Quero o {t.ctaLabel ?? t.levelName}` (mesmo padrão em particular-course-page.tsx:608). Grep: 18 rotas com ctaLabel, 16 'curso de X', 2 nome de produto (manutencao.tsx:36 'Hardware', power-apps.tsx:36). dom.ctas renderizado: 'QUERO O IMPRESSÃO 3D COMPLETA', 'QUERO O HARDWARE'. Erro de concordância visível no botão principal, mas não bloqueia a tarefa — media, não alta.

<a id="f372"></a>

## F372 · 🟡 Bullets datados já vencidos ("em 2025") e futuro que vai vencer ("de 2026")

- **Rotas:** `/particular/cursos/power-apps`, `/particular/cursos/seo`, `/particular/cursos/redes-sociais`, `/particular/cursos/excel-ia`
- **Onde:** [src/routes/particular.cursos.power-apps.tsx:31](../../../../src/routes/particular.cursos.power-apps.tsx#L31)
- **Evidência:** power-apps.tsx:31 "ferramentas de automação que as empresas mais buscam em 2025"; seo.tsx:31 "trabalhar como freelancer ou consultor de SEO em 2025"; redes-sociais.tsx:43 "Algoritmos do Instagram, TikTok, Facebook e LinkedIn em 2025"; excel-ia.tsx:32 "a competência mais requisitada de 2026". Data de hoje: 24/09/2026.
- **Problema:** Texto com ano fixo já está desatualizado em três páginas (2025) e sinaliza catálogo abandonado — contradiz o diferencial "Conteúdo Sempre Atualizado" (shared.tsx:166). "Competência mais requisitada de 2026" é estatística sem fonte (§13).
- **Correção sugerida:** power-apps:31 "...que as empresas mais buscam hoje"; seo:31 "...consultor de SEO"; redes-sociais:43 "Algoritmos atuais do Instagram, TikTok, Facebook e LinkedIn"; excel-ia:32 "...dominando a combinação de Excel e Inteligência Artificial", sem "mais requisitada", que é afirmação sem fonte.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: Grep confirma "2025" em power-apps:31, seo:31 e redes-sociais:43, e "de 2026" em excel-ia:32. Hoje é 24/09/2026, então os três "2025" já estão vencidos. Correção de minutos e de alto sinal de catálogo atualizado.

<a id="f373"></a>

## F373 · 🟡 FAQ "Quanto custa?" diz que o valor "varia conforme o plano" logo abaixo do preço exibido em plano único

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`, `/particular`
- **Onde:** [src/components/particular-faq-items.ts:33](../../../../src/components/particular-faq-items.ts#L33)
- **Evidência:** particular-faq-items.ts:33-35 q "Quanto custa?" a "O valor varia conforme o curso e o plano escolhido. Fale com a gente pelo WhatsApp...". Na página de curso o FAQ vem imediatamente após a seção Investimento com parcela e total (common.tsx:249-255) e todo curso tem 1 tier (comentário em particular-faq-items.ts:43-44: "todos já migraram pra plano único"). common.tsx:360 também diz "descubra qual plano é o certo pra você".
- **Problema:** Resposta desatualizada e evasiva: o preço está na tela, não há "plano escolhido", e mandar para o WhatsApp para saber o preço mina a transparência que a seção acabou de construir.
- **Correção sugerida:** Em buildCourseFaqItems, substituir a resposta de "Quanto custa?" quando `tiers.length===1` e `tierMeta` existir: `O curso de ${course.nome} sai por 12x de ${m.investimento.parcelaFormatted} sem juros no cartão, ou ${m.investimento.totalFormatted} à vista. Os detalhes estão no card de Investimento acima.` Manter o genérico na landing. common.tsx:360: "tire suas dúvidas e combine seu horário."
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: particular-faq-items.ts:33-35 diz "varia conforme o curso e o plano escolhido"; comentário l.43-44 confirma plano único; common.tsx:249-255 mostra parcela e total logo acima. Não citar matrícula/material sem conferir os dados em tierMeta.

<a id="f377"></a>

## F377 · 🟡 Campo `categoria` com 4 variantes para Office, exibido no eyebrow do hero

- **Rotas:** `/particular/cursos/excel`, `/particular/cursos/excel-ia`, `/particular/cursos/excel-power-bi`, `/particular/cursos/office`, `/particular/cursos/word`, `/particular/cursos/powerpoint`, `/particular/cursos/power-bi`, `/particular/cursos/power-apps`
- **Onde:** [src/routes/particular.cursos.excel.tsx:19](../../../../src/routes/particular.cursos.excel.tsx#L19)
- **Evidência:** grep categoria: "Office Específico" (excel, word, powerpoint, power-bi, power-apps), "Office + IA" (excel-ia.tsx:20), "Pacote Office" (office.tsx:20), "Office" (excel-power-bi.tsx:20). Renderizado em planilha.tsx:189 `{v.tag} · Particular · {course.categoria}` — screenshot routes/particular__cursos__excel-ia/mobile.fold.png mostra "A1 · PARTICULAR · OFFICE + IA". Sidebar (particular.tsx:40) chama o grupo de "Office".
- **Problema:** "Office Específico" é jargão interno de organização de catálogo vazando para o usuário; a mesma área aparece com 4 nomes no eyebrow enquanto o menu diz só "Office".
- **Correção sugerida:** Padronizar categoria: "Office" nos 8 arquivos (excel, word, powerpoint, power-bi, power-apps, excel-ia, office, excel-power-bi). A diferenciação fica com variante/tema.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: O grep confirma 4 variantes: "Office Específico" ×5, "Office + IA" (excel-ia:20), "Pacote Office" (office:20) e "Office" (excel-power-bi:20). A linha certa no excel.tsx é a 19, não a 20. O valor é renderizado em planilha.tsx:189.

<a id="x05"></a>

## X05 · 🟡 Mesma página diz '100% presencial' e 'aula online se precisar' e repete 2 cards

- **Rotas:** `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/course-skins/common.tsx:204](../../../../src/components/course-skins/common.tsx#L204)
- **Evidência:** Em common.tsx:143-160, a seção 'Mais do que um curso — um método' renderiza DIFERENCIAIS (shared.tsx:118-167): 'Aula Individual', 'Horário Flexível' e 'Aula Online se Precisar — a aula acontece online ao vivo' (shared.tsx:138-142). Duas seções depois, common.tsx:201-207 ('Como as aulas funcionam') repete 'Aula individual' e 'Horário flexível' e acrescenta '100% presencial'. Print do trecho do celular que nunca tinha sido capturado: .../scratchpad/critico/tail/particular__cursos__ia-visual.m.01.png ('Aula Online se Precisar') e .m.05.png ('100% presencial'). O F369 só tratou da capitalização diferente dos dois cards; a contradição e a redundância não foram apontadas.
- **Problema:** O adulto lê 'aula online se precisar' e, cerca de 1.500 px abaixo, '100% presencial'. As duas frases não podem ser verdade ao mesmo tempo, e a dúvida sobre a modalidade vira pergunta no WhatsApp ou abandono. Além disso, a seção repetida acrescenta ~1.200 px no celular (3 ilustrações de h-36) sem informação nova, em páginas que já passam de 12 mil px.
- **Correção sugerida:** Decisão do Henrique: confirmar se a aula online ao vivo existe de fato. Se existir, renomear o card de shared.tsx:138-142 para 'Presencial, com online se precisar' e trocar '100% presencial' (common.tsx:204) por 'Presencial em Ribeirão Preto'. Se não existir, remover o item. Tirar da seção Formato os 2 cards repetidos (individual e flexível). Não inventar dado novo, como a duração '1h', sem fonte.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: shared.tsx:138-142 diz 'Aula Online se Precisar — a aula acontece online ao vivo', e common.tsx:204 diz '100% presencial'. 'Aula individual' e 'Horário flexível' se repetem entre DIFERENCIAIS e a seção Formato (l.202-203). Contradição real.

<a id="f309"></a>

## F309 · ⚪ /sobre repete o H1 da home e os mesmos números em vez de contar a história da escola

- **Rotas:** `/sobre`
- **Onde:** [src/routes/sobre.index.tsx:213](../../../../src/routes/sobre.index.tsx#L213)
- **Evidência:** routes/sobre/mobile.full.png: hero 'Uma escola feita pra seu filho criar a tecnologia' (home: 'Onde seu filho aprende a criar a tecnologia'); bloco 'A confiança de quem já faz parte' com 5,0 / 329 / +14 mil / Até 10 — os mesmos stats da home; 1 única foto. sobre.index.tsx:83 'Somos uma escola presencial premium…'. wordCount 499.
- **Problema:** design-principles.md › Delight: 'Create defining moments… show what your software stands for' e branding.md › 'Use your brand's unique voice'. A página 'Sobre' é onde o pai procura quem está por trás (fundador, professores, espaço, desde quando). Sem isso, é a home reescrita.
- **Correção sugerida:** Registrar em PENDENCIAS.md como decisão de conteúdo do Henrique: fornecer história real (fundação, ano, fundador), fotos do espaço e equipe. Enquanto isso, remover o bloco de stats duplicado da home (sobre.index.tsx:211-235) ou trocar por dados exclusivos da escola. Não inventar história.
- **Esforço:** grande · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Stats repetidos confirmados (sobre.index.tsx:225 e index.tsx:175). Mas a 'história' depende de fatos reais que não estão no repo, e o hero diferencia a copy da home. É estratégia de conteúdo, não bug; a citação da HIG é genérica. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f310"></a>

## F310 · ⚪ A marca se autodenomina 'premium' 4 vezes em vez de provar

- **Rotas:** `/`, `/sobre`
- **Onde:** [src/routes/index.tsx:530](../../../../src/routes/index.tsx#L530)
- **Evidência:** index.tsx:530 chip 'Diferencial premium'; :754 'atividades premium que a família já investe'; :793 'Premium de verdade é poder ver o que está sendo construído'; sobre.index.tsx:83 'escola presencial premium'. Visível em routes/home/desktop.seg09.png (chip no card azul).
- **Problema:** writing.md › 'Be clear… Check each word to be sure it needs to be there'; DESIGN_SYSTEM §13 'Adjetivos vagos sem prova' vs 'Idade + lugar + ferramenta real'. Premium é conclusão do leitor, não afirmação da marca.
- **Correção sugerida:** Remover o chip "Diferencial premium" (index.tsx:529-531) e reescrever :793 como "Você vê o que está sendo construído: no Portal do Aluno, acompanha a evolução do seu filho quando quiser." Manter "premium" no /sobre (title SEO :29 e :83) até o Henrique decidir o posicionamento.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: Confirmado: index.tsx:530, :754, :793 e sobre.index.tsx:29/:83. DS l.662 condena adjetivo vago sem prova, mas "premium" é posicionamento de preço, decisão de marca; no chip e em :793 é redundante. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f341"></a>

## F341 · ⚪ Total de avaliações Google inconsistente ("mais de 325", "329", "mais de 329")

- **Rotas:** `/`, `/sobre`
- **Onde:** [src/routes/sobre.index.tsx:46](../../../../src/routes/sobre.index.tsx#L46)
- **Evidência:** seo.ts:53,56,58 (slogan e descrições do schema Organization/WebSite): "mais de 325 avaliações"; seo.ts:60 rating.count = 329; index.tsx:175,439,995,1135 e testimonials.tsx:118,132: "329 avaliações"; sobre.index.tsx:46: "mais de 329 avaliações" enquanto a mesma página em L225 mostra "329" exato. Bônus no mesmo arquivo: seo.ts:56,58 afirmam "43 cursos" particulares, mas o manifesto lista 52 rotas /particular/cursos/*.
- **Problema:** "Mais de 329" é logicamente incompatível com "329" na mesma tela, e o número enviado ao Google (325) difere do exibido ao visitante (329). Número de prova social precisa ser exato — inconsistência sugere dado inventado (§13: nunca inventar estatística).
- **Correção sugerida:** sobre.index.tsx:46 → `5,0 no Google e ${ORG.rating.count} avaliações de famílias da região.`; seo.ts:53,56,58 trocar 'mais de 325' por `${ORG.rating.count}` (template); index.tsx:175/439 e testimonials usar ORG.rating.count. Recontar os cursos particulares reais (há 52 arquivos particular.cursos.*, conferir se todos são cursos) e corrigir '43 cursos' em seo.ts:56,58.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: sobre.index.tsx:46 'mais de 329' vs :225 '329'; seo.ts:53/56/58 'mais de 325' vs seo.ts:60 count 329. 'Mais de 325' não é falso; o erro real é 'mais de 329' e o '43 cursos' desatualizado (52 rotas).

<a id="f346"></a>

## F346 · ⚪ Academies usa nomes em inglês ("Robotics Academy", "AI Academy", "Hands-on") para pais

- **Rotas:** `/cursos/academies`
- **Onde:** [src/routes/cursos.academies.tsx:294](../../../../src/routes/cursos.academies.tsx#L294)
- **Evidência:** cursos.academies.tsx:89 "Robotics Academy", 108 "AI Academy", 294 métrica "Hands-on · 100% prático", 456 "hands-on", 133-157 FAQ misturando "ACADEMIES", "Academies", "Academy". A própria meta da página traduz: "Academia de Robótica e Academia de IA" (L51) e o schema Course usa "Academia de Robótica"/"Academia de IA" (L243,251). Confirmado em routes/cursos__academies/mobile.fold.png ("CONHECER AS ACADEMIES").
- **Problema:** Público é pai/mãe lendo no celular (DESIGN_SYSTEM §1.3 "texto de mãe/pai pra mãe/pai"; §2.9 tudo em português). O título indexado diz "Academia de Robótica" e a página diz "Robotics Academy": três grafias para dois produtos, e "Hands-on" como métrica numérica não comunica nada a quem não fala inglês.
- **Correção sugerida:** Agora: trocar a métrica da L294 por { value: "100%", label: "prático, mão na massa" } e, na L456, trocar 'hands-on' por 'mão na massa'. Os nomes 'Robotics Academy'/'AI Academy' são decisão de marca: o DS §1.6 deixa ACADEMIES 'a definir' e o §2.1 registra os nomes em revisão (proposta 'AVANÇADO'). Fica como pendência do Henrique, sem trocar por conta.
- **Esforço:** grande · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: L89/L108 usam nome em inglês, e o title SEO da L51 e o schema das L243/L251 dizem 'Academia'. Mas CREATE e ACADEMIES também são nomes de marca em inglês, e o DS marca a nomenclatura como em revisão (DESIGN_SYSTEM.md:85 e :136). Só o 'Hands-on' como métrica (L294) é problema claro e barato. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f348"></a>

## F348 · ⚪ Hype sem prova: "altíssima demanda", "possibilidades ilimitadas", "habilidade mais valiosa da década"

- **Rotas:** `/`, `/sobre`, `/sobre/visao`, `/cursos/camps`, `/cursos/academies`
- **Onde:** [src/routes/index.tsx:773](../../../../src/routes/index.tsx#L773)
- **Evidência:** index.tsx:299 "habilidades de altíssima demanda"; L748 "por uma habilidade que vale a vida toda"; L773-774 citação em itálico sem autor "…pela habilidade mais valiosa da próxima década"; L793 "Premium de verdade". sobre.index.tsx:29,31,84 "escola premium" (3×) e L139 "habilidades que valem pra vida toda". sobre.visao.tsx:159-160 aspas atribuídas ao "fundador" (comentário L150) sem nome: "destravar possibilidades ilimitadas". cursos.camps.tsx:183 "Férias incríveis". cursos.academies.tsx:274 "áreas que vão definir os próximos 10 anos", L332 "Quem começa cedo sai na frente". DESIGN_SYSTEM §13 "Não faça: adjetivos vagos sem prova ('revolucionário', 'incrível')".
- **Problema:** Frases de superlativo sem número, fonte ou exemplo concreto contrariam o princípio "Especificidade como prova" (§1.3) e o tom "confiante, sem hype". Citação sem autor lê como slogan inventado.
- **Correção sugerida:** Remover a citação sem autor de index.tsx:773-774, ou atribuí-la a uma pessoa real depois que o Henrique confirmar o nome (não inventar). cursos.camps.tsx:183 'Férias incríveis' → 'Férias com propósito pro seu filho —'. index.tsx:299 → 'habilidades que a criança usa todos os dias'. sobre.visao.tsx:159 deve ser atribuída com nome real ou virar texto institucional sem aspas.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Confirmados index.tsx:299, 773-774 (aspas sem autor), sobre.visao.tsx:159-160 e camps.tsx:183 'incríveis' (DS §13:662 cita 'incrível'). 'Premium' em sobre.index.tsx:31 é meta description. A recomendação original inventava o nome 'Rodrigo Santos', o que não pode ser feito. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f349"></a>

## F349 · ⚪ Copy ataca "a maioria das escolas" e "a escola" do filho — tom fora do acolhedor

- **Rotas:** `/`, `/cursos`
- **Onde:** [src/routes/index.tsx:651](../../../../src/routes/index.tsx#L651)
- **Evidência:** index.tsx:651-652: "A maioria das escolas esconde o preço pra te prender numa conversa. A gente prefere o contrário". index.tsx:501-503: "A maioria das escolas ensina a usar a tecnologia". cursos.index.tsx:105: highlight "A base digital que a escola não dá" (a escola regular do filho). DESIGN_SYSTEM §1.3: "Aspiracional + acolhedor… confiante, sem hype"; §13: prova por especificidade, não por comparação.
- **Problema:** Acusar concorrentes de "prender numa conversa" e dizer que a escola regular do filho "não dá" base digital pode ofender o pai (que escolheu essa escola) e soa defensivo — o oposto do posicionamento premium/confiável da §1.1.
- **Correção sugerida:** Trocar só L651-652 por: 'Aqui o preço está na mesa desde o começo — sem precisar de conversa pra descobrir.' Manter L501-503 (usar vs criar é o gancho central e não acusa ninguém). cursos.index.tsx:105 é opcional: 'A base digital que complementa a escola'.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: A linha 651 insinua má-fé dos concorrentes ('pra te prender'), o que destoa de DS §1.3 'acolhedor'. O DS não proíbe comparação (§1.3/§13 falam de especificidade), então o contraste 'usar/criar' da l.501 é legítimo. Exagero no conjunto. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f350"></a>

## F350 · ⚪ "As ferramentas que todo emprego exige" generaliza e beira promessa de mercado (§11)

- **Rotas:** `/`, `/cursos`
- **Onde:** [src/routes/index.tsx:131](../../../../src/routes/index.tsx#L131)
- **Evidência:** index.tsx:131 "Aprende as ferramentas que todo emprego exige — Excel, apresentações…" e L132 "Preparar o adolescente pro mercado de trabalho desde cedo"; cursos.index.tsx:115 repete "todo emprego exige" e L119 "Termina com portfólio pro mercado". Visível em routes/home/desktop.seg13.png. DESIGN_SYSTEM §11: "Prometer emprego, retorno financeiro ou resultado garantido" é lista negra.
- **Problema:** "Todo emprego" é uma afirmação absoluta falsa por construção e aproxima a copy da promessa de empregabilidade que a marca se proíbe de fazer, para um público de 10–14 anos.
- **Correção sugerida:** index.tsx:131 e cursos.index.tsx:115: 'Aprende as ferramentas mais usadas no escritório — Excel, apresentações, organização de dados e IA. Termina com um portfólio próprio.' index.tsx:132: 'Dar ao adolescente uma base profissional desde cedo.' cursos.index.tsx:119: 'Termina com portfólio próprio'.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Texto existe (index.tsx:131-132, cursos.index.tsx:115/119). 'Todo emprego' é absoluto, mas não promete emprego ou resultado, que é o que o DS §11 (linha 643) proíbe. Ajuste de precisão de copy, não violação grave. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f351"></a>

## F351 · ⚪ Referência só a "o pai" em trechos genéricos, enquanto o resto do site diz "pai/mãe"

- **Rotas:** `/`, `/cursos/camps`
- **Onde:** [src/routes/index.tsx:471](../../../../src/routes/index.tsx#L471)
- **Evidência:** index.tsx:471: "O pai acompanha notas, presença e projetos na palma da mão." cursos.camps.tsx:241: "o pai continua no trabalho — mas a criança não tem escola". Nas mesmas páginas o padrão é inclusivo: index.tsx:70 "acesso de pai/mãe", L154 "Acesso de pai/mãe", L161, L802 "Acesso de pai e mãe"; camps.tsx:399 "pro pai e pra mãe".
- **Problema:** A maioria dos leitores no celular (persona do §1.4) são mães; "o pai acompanha" exclui a leitora principal e quebra a consistência do próprio site.
- **Correção sugerida:** index.tsx:471 → "A família acompanha notas, presença e projetos na palma da mão."; cursos.camps.tsx:241 → "Nas férias escolares, pai e mãe continuam trabalhando — mas a criança não tem escola."
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: index.tsx:471 "O pai acompanha…" e camps.tsx:241 "o pai continua no trabalho", enquanto index.tsx:70,154,161,802 e camps.tsx:399 usam "pai/mãe"/"pai e mãe". Inconsistência real no próprio site.

<a id="f354"></a>

## F354 · ⚪ Frase truncada em Nossa Visão: "confiam a primeira escola … dos filhos na gente"

- **Rotas:** `/sobre/visao`
- **Onde:** [src/routes/sobre.visao.tsx:179](../../../../src/routes/sobre.visao.tsx#L179)
- **Evidência:** sobre.visao.tsx:179-181: "Visita guiada gratuita pra você ver o método em ação — e entender por que tantas famílias confiam a primeira escola de programação dos filhos na gente." Título da mesma seção L176: "Viva o efeito Santos Tech".
- **Problema:** Regência quebrada ("confiam X na gente" → "confiam X à gente") deixa a frase difícil de ler em voz alta (teste do §1.4); "efeito Santos Tech" é slogan vazio sem definição na página.
- **Correção sugerida:** L179-181: "Visita guiada gratuita pra você ver o método em ação — e entender por que tantas famílias escolhem a Santos Tech como a primeira escola de programação dos filhos." O título L176 pode ficar; trocar só se o Henrique quiser ("Venha ver o método ao vivo").
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: sobre.visao.tsx:179-181 confirma a construção truncada "confiam a primeira escola… na gente" (mistura confiar-a com confiar-em). É coloquial, não é erro grave. Chamar "Viva o efeito Santos Tech" de slogan vazio é gosto pessoal, sem base no DS. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f355"></a>

## F355 · ⚪ Academies: métrica "9–14" para as duas academias, mas IA é 11–14; duração indefinida

- **Rotas:** `/cursos/academies`
- **Onde:** [src/routes/cursos.academies.tsx:292](../../../../src/routes/cursos.academies.tsx#L292)
- **Evidência:** cursos.academies.tsx:292 métrica do hero { value: "9–14", label: "Faixa etária" } enquanto AI Academy é "11 a 14 anos" (L114, L153, schema L255-256). L141 FAQ: "Duração e carga horária variam por módulo — consulta a gente"; L407 "Módulo multi-semanas" sem número; L161 "Qual o investimento? Varia por módulo". Todas as outras páginas de curso dão 40 aulas / 80h / 40 semanas.
- **Problema:** Pai de criança de 9 anos lê "9–14" no hero e só descobre no rodapé que IA começa aos 11. Sem duração nem carga horária, a página viola "Especificidade como prova" (§1.3) e destoa das outras 9 páginas de curso que são exatas.
- **Correção sugerida:** Na L292, usar { value: "9+ · 11+", label: "Robótica · IA" }. Duração e carga horária só entram quando o Henrique passar os números reais; até lá, não inventar e registrar no PENDENCIAS.md.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: '9–14' na L292 omite que IA começa aos 11. Porém a pílula '11 a 14 anos' aparece no card do módulo (L114/L183) e o checklist da L465 também deixa claro. A afirmação 'só descobre no rodapé' é exagerada. Falta mesmo a duração (L141, L407), mas isso é dado que não existe no repo. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f356"></a>

## F356 · ⚪ Mistura de pessoa verbal nas FAQs: "Conversa/consulta com a gente" vs "Fale/Aproveitamos"

- **Rotas:** `/cursos/academies`, `/cursos/junior/7-8-anos`, `/cursos/create/13-14-anos`, `/cursos/create/8-9-anos`, `/cursos/junior/5-6-anos`
- **Onde:** [src/routes/cursos.academies.tsx:137](../../../../src/routes/cursos.academies.tsx#L137)
- **Evidência:** Imperativo na 2ª pessoa (tu) informal: cursos.academies.tsx:137 "Conversa com a gente pra avaliar", L141 "consulta a gente pro detalhe"; cursos.junior.7-8-anos.tsx:14 e cursos.create.13-14-anos.tsx:14 "Conversa com a gente que avaliamos"; cursos.create.8-9-anos.tsx:215 "Aproveita pra conhecer". Imperativo em você no resto: index.tsx:141 "Fale com a gente", L323 "chame a gente", cursos.junior.5-6-anos.tsx:212 "Aproveitamos pra te mostrar", cursos.index.tsx:321 "Fale com a gente".
- **Problema:** Alternar "conversa/consulta/aproveita" (tu) com "fale/chame" (você) na mesma trilha de páginas soa descuidado para o público adulto; a norma do site (home, /cursos) é "você".
- **Correção sugerida:** Padronizar o imperativo em "você": "Converse com a gente" (academies:137, create.10-11:178, create.13-14:180, junior.7-8:167), "consulte a gente" (academies:141), "Aproveite pra conhecer" (create.8-9:215, create.9-10:209, junior.6-7:191, junior.7-8:191).
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: A mistura existe, mas as linhas estão erradas: junior.7-8 é :167 (não :14) e create.13-14 é :180 (não :14). "Aproveitamos" (junior.5-6:212) não é imperativo e não entra na lista. Há mais ocorrências não citadas (create.9-10:209, junior.6-7:191). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f365"></a>

## F365 · ⚪ "T.I" (com ponto) na navegação e categorias vs "TI" no corpo dos textos

- **Rotas:** `/particular`, `/particular/cursos/suporte`, `/particular/cursos/redes`, `/particular/cursos/linux`, `/particular/cursos/ciberseguranca`, `/particular/cursos/manutencao`
- **Onde:** [src/routes/particular.tsx:86](../../../../src/routes/particular.tsx#L86)
- **Evidência:** "T.I": particular.tsx:86 label sidebar; particular.index.tsx:42, :66, :149, :154; categoria em suporte.tsx:20, redes.tsx:21, linux.tsx:20, ciberseguranca.tsx:20, manutencao.tsx:20. "TI": suporte.tsx:13/24/26/38, ads.tsx:13/27/29, linux.tsx:13/26, ciberseguranca.tsx:26/29 (grep). Screenshot routes/particular__cursos__suporte/mobile.fold.png: pill "T.I · HELP DESK" e tagline "emprego em TI" na mesma tela.
- **Problema:** A sigla correta em português é "TI" (sem pontos; "T.I" nem sequer é abreviação consistente, faltaria o segundo ponto). A mesma tela mostra as duas grafias.
- **Correção sugerida:** Substituir "T.I" por "TI" em particular.tsx:86 (label), particular.index.tsx:42, :66 ('área de TI'), :149, :154 e `categoria: "TI"` em suporte, redes, linux, ciberseguranca e manutencao. Tema resolve por `id: "ti"`, sem impacto de código; conferir se algum filtro compara `categoria === "T.I"` antes (grep).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: particular.tsx:86 label 'T.I'; particular.index.tsx:42/66/149/154; linux.tsx:20 e manutencao.tsx:20 categoria 'T.I'; hover-card.particular.png mostra pill 'T.I'. Corpo dos cursos usa 'TI'. Grafia inconsistente, polimento de copy.

<a id="f366"></a>

## F366 · ⚪ "N8N" em maiúsculas nos nomes/títulos vs "n8n" (grafia oficial) em outros cursos

- **Rotas:** `/particular`, `/particular/cursos/n8n`, `/particular/cursos/agentes-ia`, `/particular/cursos/ia`, `/particular/cursos/make`
- **Onde:** [src/routes/particular.cursos.n8n.tsx:19](../../../../src/routes/particular.cursos.n8n.tsx#L19)
- **Evidência:** "N8N": n8n.tsx:11 title, :13 description, :19 nome, :35 levelName (+20 tópicos); agentes-ia.tsx:19 nome e 20 ocorrências; particular.tsx:57 e :73 (sidebar); shared.tsx:73/85 (TIER_META). "n8n": ia.tsx:39, :71 (título de módulo "Automação sem Código com n8n"), :74, :77, :108, :120; make.tsx:44, :139.
- **Problema:** A marca se escreve "n8n" (minúsculo) — o próprio arquivo ia.tsx usa a forma correta, então o catálogo apresenta a mesma ferramenta de dois jeitos, inclusive no menu lateral.
- **Correção sugerida:** Trocar "N8N" por "n8n" em nome, levelName, title, description, na sidebar (particular.tsx:57,73) e nas chaves de TIER_META ao mesmo tempo. Depois rodar grep -rn "N8N" src para zerar e conferir as páginas.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Há 53 ocorrências de "N8N" em src (n8n.tsx:11,13,19; particular.tsx:57,73), enquanto ia.tsx:39,71,74 usa "n8n". A inconsistência é real, mas é só grafia de marca: polimento.

<a id="f374"></a>

## F374 · ⚪ FAQ genérico com duas perguntas quase idênticas (horários vs dias) e eyebrow repetindo o H2

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/particular-faq-items.ts:13](../../../../src/components/particular-faq-items.ts#L13)
- **Evidência:** particular-faq-items.ts:13-15 "Quais são os horários de aula?" → "segunda a sábado, das 8h às 22h. Você escolhe o horário..."; :17-19 "Quais dias têm aula?" → "Qualquer dia de segunda a sábado... você decide quando quer estudar". Eyebrow "Dúvidas frequentes" + h2 "Perguntas frequentes" em particular-faq.tsx:22/25 e common.tsx:318.
- **Problema:** Duas entradas dizem a mesma coisa (dias e horários livres, seg-sáb 8h-22h); eyebrow e título são sinônimos, desperdiçando a hierarquia que em outras seções traz informação ("Investimento" → "Seu investimento").
- **Correção sugerida:** Fundir :13-19 em { q: "Quando são as aulas?", a: "De segunda a sábado, das 8h às 22h, no dia e horário que você escolher — sem turma fixa. É só combinar pelo WhatsApp." }. Eyebrow em particular-faq.tsx:22 e common.tsx:318 → "Antes de decidir".
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: particular-faq-items.ts:13-15 e :17-19 repetem 'seg-sáb, horário livre'. Eyebrow 'Dúvidas frequentes' + H2 'Perguntas frequentes' em particular-faq.tsx:22/25 e common.tsx:318 confirmados.

<a id="f376"></a>

## F376 · ⚪ Sidebar rotula o curso de Linux como "Linux Essencial" — nome de tier extinto, conteúdo é avançado

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/* (sidebar)`
- **Onde:** [src/routes/particular.tsx:92](../../../../src/routes/particular.tsx#L92)
- **Evidência:** particular.tsx:92 `{ slug: "linux", nome: "Linux Essencial" }`; linux.tsx:19 nome "Linux", :35 levelName "Linux", :37 outcome "...até colocar serviços web e banco de dados em produção... DevOps"; grep "Essencial" em linux.tsx = 0. Outros rótulos da sidebar também divergem do nome real: :78 "Full Stack" vs "Full Stack Web Developer", :109 "Canva Pro" vs "Design Gráfico — Canva Pro".
- **Problema:** "Essencial" era o nome do tier básico (TIER_GUIDE shared.tsx:174: "Nunca usei, sei muito pouco") e sinaliza curso introdutório, mas a página vende administração de servidores em produção (48 aulas, R$ 5.760 base). Rótulo do menu contradiz a página de destino.
- **Correção sugerida:** particular.tsx:92 → `{ slug: "linux", nome: "Linux" }` (igual a linux.tsx:19). Opcional: legenda "Servidores e DevOps" para diferenciar.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Rótulo 'Linux Essencial' (:92) diverge de linux.tsx:19 'Linux' e sugere nível básico num curso de 48 aulas/R$ 5.760 (shared.tsx:43). Mas 'Essencial' não é tier extinto: shared.tsx:27 e :174 ainda o usam. Justificativa exagerada; correção vale. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f383"></a>

## F383 · ⚪ Mesma ação com dois rótulos: "Entrar na conta" (sidebar) vs "Login" (topbar mobile)

- **Rotas:** `/particular`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/routes/particular.tsx:608](../../../../src/routes/particular.tsx#L608)
- **Evidência:** particular.tsx:576 botão do rodapé da sidebar "Entrar na conta"; :608 botão da topbar mobile "Login" (ambos href https://auth.santos-tech.com). Screenshots routes/particular/desktop.fold.png ("Entrar na conta") e mobile.fold.png ("Login").
- **Problema:** Regra §2.9 pede texto de tela em português; o mesmo destino com rótulos diferentes por breakpoint quebra a consistência de linguagem.
- **Correção sugerida:** Trocar o texto "Login" (particular.tsx:608) e "Entrar na conta" (:576 e title :572) por um único rótulo, "Entrar", nos dois lugares.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: Confirmado: particular.tsx:576 diz "Entrar na conta" e :608 diz "Login", e os dois apontam para https://auth.santos-tech.com. A regra de texto de tela em português também pede trocar "Login".

<a id="x04"></a>

## X04 · ⚪ Selo '● ONLINE' piscando no hero das 5 páginas de T.I sugere curso online

- **Rotas:** `/particular/cursos/suporte`, `/particular/cursos/manutencao`, `/particular/cursos/redes`, `/particular/cursos/ciberseguranca`, `/particular/cursos/linux`
- **Onde:** [src/components/course-skins/ti.tsx:111](../../../../src/components/course-skins/ti.tsx#L111)
- **Evidência:** C:/Users/55169/AppData/Local/Temp/claude/C--Users-55169-Documents-GitHub-Santos-Tech-Home-Page--claude-worktrees-elated-swartz-6ae59b/8073a6cc-a85f-4e47-88de-a1d22633d35e/scratchpad/audit/routes/particular__cursos__ciberseguranca/mobile.fold.png: '● ONLINE' ao lado da etiqueta 'T.I · SEGURANÇA', logo acima do H1. Código: <StatusLed blink /> online (ti.tsx:111), com LED em motion-safe:animate-pulse (ti-kit.tsx:80). Só as 5 rotas com TiSkin são afetadas. Um leitor de tela lê a sequência 'T.I · Segurança online Cibersegurança'.
- **Problema:** O escritório de propósito imita um painel de servidor, mas o único rótulo ao lado do nome do curso diz 'ONLINE'. Para um adulto comparando cursos, isso se lê como 'este curso é online'. A escola vende presença física e Ribeirão Preto como diferencial, e um visitante de outra cidade pode seguir achando que dá para fazer à distância. É informação falsa sobre o produto no ponto mais visto da página.
- **Correção sugerida:** Trocar o texto 'online' por 'sistema ativo', que mantém o clima de servidor sem falar de modalidade, ou por 'presencial'. Mudança de uma linha em ti.tsx:111. Conferir o mobile.fold das 5 páginas de T.I.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Existe: '<StatusLed blink /> online' em ti.tsx:111 (o LED está em variants/ti-kit.tsx, não em ti-kit.tsx). Rebaixado: texto pequeno em mono white/50 no clima de painel, e a oferta de 'Aula Online se Precisar' (shared.tsx:138) torna 'online' ambíguo, não falso. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="x06"></a>

## X06 · ⚪ CREATE Ano 6 manda para as Academies 'depois, 14+', mas elas atendem só até 14 anos

- **Rotas:** `/cursos/create/13-14-anos`, `/cursos/academies`
- **Onde:** [src/routes/cursos.create.13-14-anos.tsx:403](../../../../src/routes/cursos.create.13-14-anos.tsx#L403)
- **Evidência:** A tabela 'A jornada CREATE completa' termina com a linha 'Depois · 14+ · Academies avançadas: Robótica e IA' (cursos.create.13-14-anos.tsx:403). O FAQ diz que as Academies são 'para o aluno que terminou o CREATE' (linha 196). Já cursos.academies.tsx diz 'Robótica 9 a 14 anos' (l.95), 'IA 11 a 14 anos' (l.114) e 'As ACADEMIES funcionam como entrada também' (l.137), e o schema repete 9–14 e 11–14 (l.243, 251). O trecho do celular nunca tinha sido capturado: .../scratchpad/critico/tail/cursos__create__13-14-anos.m.02.png.
- **Problema:** O pai do aluno de 13–14 anos lê que o próximo passo é a Academy 'aos 14+'. Ao abrir a página, descobre que ela acaba aos 14 e serve também para iniciantes de 9 anos. Ele fica sem saber se o filho ainda tem para onde ir, e a escola perde a renovação natural do fim do CREATE, justamente o aluno mais fiel. O F355 cobre só a métrica '9–14' dentro da página das Academies; esta contradição entre páginas é nova.
- **Correção sugerida:** Trocar a linha da tabela por 'Em paralelo ou depois · até 14 · Academies de Robótica (9+) e IA (11+)' e ajustar o FAQ da l.196 para 'podem ser feitas junto com o CREATE ou depois, até os 14 anos'. Se a escola atende 15+, quem decide é o Henrique, e aí é preciso atualizar as faixas em cursos.academies.tsx no mesmo commit.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: A l.403 diz 'Depois · 14+', e academies.tsx diz 9 a 14 e 11 a 14 (l.95, 114, 248, 256) e 'funcionam como entrada também' (l.137). A contradição é real. Rebaixado: fica no rodapé de uma única página, e o impacto na renovação é especulativo.
