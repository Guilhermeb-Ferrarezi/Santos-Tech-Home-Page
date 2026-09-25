# Pendências — Santos Tech Home Page

## Abertas

### Auditoria de UI/UX (24/09) e Fase 1 (25/09)

- [ ] 🔴 **`www.santos-tech.com` não existe no DNS** (mesmo item da Fase 0 da auditoria de SEO, abaixo) — quem digita ou recebe o link com
      `www` cai em erro de navegador (conferido em 24/09: `nslookup www.santos-tech.com 1.1.1.1`
      → NXDOMAIN; o domínio sem `www` responde 200). Passo privilegiado no painel da
      Cloudflare, com o passo a passo pronto no achado `F323` da
      [auditoria de UI/UX](docs/auditorias/2026-09-24-ui-ux/achados/tecnico.md#f323).
      Validação depois: `curl -sI https://www.santos-tech.com/particular` deve responder
      `301` para `https://santos-tech.com/particular`. _Aguardando Henrique._

- [ ] **11 decisões de marca/escopo da auditoria de UI/UX (24/09)** — catálogo infantil
      único, cor dos programas, preço no infantil, número "+300 alunos", nome do curso
      ADS, template único do /particular, ensaio fotográfico, SVGs, preloader, banner de
      cookies e formulário de contato. Cada uma já vem com recomendação e motivo na
      [seção 4 do relatório](docs/auditorias/2026-09-24-ui-ux/README.md#4-decisões-que-só-o-henrique-toma).
      _Aguardando Henrique._

- [ ] **4 perguntas de fato da Fase 1 da auditoria (25/09)** — o código não tem a
      resposta e inventar seria pior que perguntar:
      1. **Robótica existe?** (= decisão 2 da auditoria de SEO, abaixo — responder uma vez só) A home promete "robôs" e "Robótica, games e IA", o FAQ da
         home diz "Não trabalhamos com robótica de montagem" e `/cursos/academies` vende
         uma "Robotics Academy" com kits físicos. Qual é a verdade? (bloqueia o `F181`)
      2. **Sábado nos cursos particulares vai até 22h?** (= decisão 3 da auditoria de SEO) `/particular`, o FAQ particular e
         a descrição GEO (`seo.ts:56`) dizem seg–sáb 8h–22h; o schema da escola, o
         `/contato` e a home (já corrigida) dizem sábado até 18h.
      3. **O certificado traz carga horária e conteúdo?** Se sim, o texto do certificado
         (hoje "Certificado de conclusão do curso, emitido pela Santos Tech") ganha
         ", com carga horária e conteúdo do curso".
      4. **Existe banca avaliadora no ADS?** O módulo 16 dizia "defesa do projeto para
         banca avaliadora" (linguagem de TCC, sem fonte). Pela regra "sem fonte, corta",
         virou "apresentação do projeto ao professor". Se existir banca, é só voltar.
      _Aguardando Henrique._

- [ ] **Backlog de UI/UX (achados das Fases 1 e 2, fora do escopo delas):**
      - Header em tablet (768px): "SANTOS TECH" encosta em "Início" — a nav desktop entra
        em `md:` e não cabe logo + 5 itens + Entrar. Subir a nav para `lg:` ou reduzir o gap.
      - Frases de público-alvo ainda falam em salário/renda (`F362`): backend:27, mobile:30,
        manutencao:31, jogos:31, ciberseguranca:31; taglines limítrofes em google-ads,
        tiktok-ads, marketing, git e agentes-ia.
      - `/particular` no desktop: o bloco "Cursos por área" repete a lista que a sidebar já
        mostra ao lado (no celular, onde a sidebar é gaveta, faz sentido). Decidir se fica
        só no celular.
      - Avisos de contraste do verificador da sidebar (`scripts/verificar-sidebar-fusao.mjs`,
        ~400, 0 falhas): rótulos na divisa entre duas seções (ex.: "Automações No-Code Make"
        sobre a faixa azul da pele de Programação). Limitação conhecida do #57.

- [~] **Executar o plano da auditoria de UI/UX** — 326 achados confirmados (🔴 4 · 🟠 32 ·
      🟡 139 · ⚪ 151) em [docs/auditorias/2026-09-24-ui-ux/](docs/auditorias/2026-09-24-ui-ux/README.md).
      - ✅ **Fase 1** (25/09, PR #60, no ar): os 3 críticos do site + promessas sem prova,
        contraste, entrada para `/particular`, WhatsApp no celular, "Cookies" no `/particular`.
        Plano: [2026-09-25-ui-ux-fase1.md](docs/superpowers/plans/2026-09-25-ui-ux-fase1.md).
      - ✅ **Fase 2** (25/09, branch `claude-henrique/ui-ux-fase2`): gaveta e menus acessíveis,
        âncoras que prendiam a página com o scroll suave, WhatsApp por programa, "Ver valores",
        conteúdo visível sem JS, métricas sem estouro, 8px de rolagem em `/cursos/junior`
        (causa real: brilho do AgeBlock, não o TechHero), resultado do curso legível, FAQ de
        preço com o valor real, pílulas levando à lista da área, 38 trocas de copy sem
        promessa, código morto removido, catálogo único da sidebar, 12 erros de `tsc`
        zerados e `tsc --noEmit` no `bun run lint`, `DESIGN_SYSTEM.md` sincronizado. Plano:
        [2026-09-25-ui-ux-fase2.md](docs/superpowers/plans/2026-09-25-ui-ux-fase2.md).
      - ⚠️ **Ficaram para decisão do Henrique:** cor/formato do botão verde e dos CTAs das
        peles e o estilo do "Entrar" (`F233`/`F241`/`F001`/`F236` = decisão 2) e o
        preloader (`F036` = decisão 9). _Aguardando Henrique._
      - **Fase 3** (evolução de marca) depende das 11 decisões.

### Auditoria de SEO/GEO/AEO (24/09)

> Origem de todos os itens abaixo: auditoria SEO/GEO/AEO de 24/09/2026 —
> [`docs/auditorias/2026-09-24-seo-geo-aeo.md`](docs/auditorias/2026-09-24-seo-geo-aeo.md)
> (189 achados verificados: 0 🔴 · 7 🟠 · 86 🟡 · 96 🟢). Os IDs entre parênteses
> apontam para o §5 do relatório; o §7 tem a ordem de execução e como provar cada fase.

#### 🔴 Segurança (fora do escopo da auditoria de SEO — achado em 25/09/2026)

- [ ] **Material "restrito" dos professores está num JavaScript público.** As rotas
      `/professores/*` mostram só o cabeçalho sem login, mas o conteúdo inteiro vai
      embutido nos chunks públicos do build (ex.: `/assets/professores.tecnologia-create-*.js`,
      ~4,5 MB; o texto das aulas aparece em claro no arquivo). Qualquer pessoa que abrir o
      DevTools baixa o material. O `Disallow: /professores` do robots.txt nunca protegeu
      nada (robots não é controle de acesso). Correção provável: servir o material por uma
      API autenticada (ou rota com checagem de sessão no servidor) em vez de importar os
      dados no bundle. _Aguardando priorização — não é SEO._

#### ⚠️ Decisões do Henrique que bloqueiam código (§6 do relatório)

- [ ] **1. Nomes e faixas de idade oficiais do infantil** (5–9/10–15 × 5–8/8–14).
      Recomendação: oficializar os 4 produtos da home e alinhar as 9 páginas de
      currículo. _Aguardando Henrique._
- [ ] **2. Robotics Academy é vendida hoje?** A home diz "não trabalhamos com
      robótica de montagem" e `/cursos/academies` vende a Robotics Academy.
      _Aguardando Henrique._
- [ ] **3. Sábado até 18h ou 22h?** `/contato` e o JSON-LD dizem 18h; a descrição
      da escola diz "segunda a sábado das 8h às 22h". _Aguardando Henrique._
- [ ] **4. E-mail oficial.** Recomendação: `contato@santos-tech.com`, tirando
      `ceo@santos-games.com` do site. _Aguardando Henrique._
- [ ] **5. CEP e pino do mapa.** Correios (ViaCEP, conferido em 25/09): Av. Nove de
      Julho nº 1992 = **14020-170, Jardim América**; o site usa 14025-000 (trecho
      2–1322, Jardim Sumaré). Falta copiar as coordenadas do pino do Perfil da
      Empresa. _Aguardando Henrique._
- [x] **6. "Cursos particulares" no menu principal.** Recomendação: sim.
      ✅ Feito na Fase 1 de UI/UX (25/09, `F175`): item no dropdown Programas e no menu
      mobile, link no rodapé e bloco na home. Se o Henrique preferir no menu de primeiro
      nível, é um ajuste pequeno.
- [ ] **7. Preço em mais lugares** (páginas infantis, FAQ dos particulares, faixa no
      hub). _Aguardando Henrique._
- [ ] **8–25. Demais decisões** (avaliações autodeclaradas, aula online,
      professores públicos, razão social/CNPJ, datas da colônia, Preloader, verde
      dos botões, bots de IA, llms.txt, bairros, `/links`, Facebook duplicado,
      cadastro do CNPJ, fotos reais, custos de infra, domínios de exemplo,
      promessas de marketing, acesso aos painéis). Detalhe e recomendação de cada
      uma no §6. _Aguardando Henrique._

#### Fase 0 — painéis (só o Henrique; §7.2)

- [ ] Cloudflare: Email Obfuscation Off · Always Use HTTPS (http→https hoje é
      **302**, deveria ser 301) · criar `www` (hoje **NXDOMAIN**) com 301 · conferir
      AI Crawl Control · Early Hints · token só de Cache Purge para o Guilherme.
      _Aguardando Henrique._
- [ ] Perfil da Empresa: coordenadas do pino, URL com CID, link de avaliação,
      conferir horário/categoria, trocar links `/adultos`. _Aguardando Henrique._
- [ ] Search Console + Bing Webmaster: submeter os 2 sitemaps, exportar baseline
      (Páginas e Desempenho em IA generativa), importar no Bing. _Aguardando Henrique._

#### Fase 1 — pendências que sobraram (a Fase 1 em si está em Resolvidas)

- [ ] ⚠️ **Purge do `robots.txt` e do `sitemap.xml` no Cloudflare.** A origem já serve
      o robots novo (conferido em 25/09 com `?verificacao=` → sem `Disallow: /assets/`),
      mas a borda guarda a cópia antiga por até 7 dias (`cf-cache-status: HIT`,
      `max-age=604800`). No painel: Caching → Configuration → Custom Purge → URLs
      `https://santos-tech.com/robots.txt` e `https://santos-tech.com/sitemap.xml`.
      Conferir depois: `node scripts/verificar-seo.mjs https://santos-tech.com` → 10/10.
      _Aguardando Henrique._
- [ ] **Cloudflare reescreve o cache do navegador para 4 h** (`Cache-Control: max-age=14400`
      na borda, a origem manda 3600). É a configuração "Browser Cache TTL" do painel.
      Deixar em "Respect Existing Headers". _Aguardando Henrique._
- [ ] **Não bloqueantes da revisão final da Fase 1 (25/09)**, para a Fase 2:
      - Pílulas de categoria do hub levam a um curso específico com rótulo de área
        (ex.: "Programação" → `/particular/cursos/logica`) e o CTA "Conhecer este curso"
        do card "Pacote Office + IA" (`arquitetura-links-internos-08`, item 2).
      - 20 dos 52 nomes do ItemList do hub não batem com o rótulo curto da sidebar
        (`src/lib/cursos-particulares.ts`) — alinhar ao catálogo único do P8.
      - `/contato` e `/sobre` ficaram sem o nó da organização no JSON-LD (só a home tem):
        acrescentar ContactPage/AboutPage com referência ao `@id`.
      - 404 dentro de `/particular/cursos/*` sai sem header/rodapé (título e noindex
        corretos; só UX).
      - HEAD sem `Accept-Encoding` renderiza o SSR inteiro sem consumir o stream (log
        "SSR stream transform exceeded maximum lifetime"): responder HEAD sem corpo.
      - `id` duplicado `mkt-mark-marketing` na pele de marketing (já existia) → `useId()`.
      - `scripts/check-sitemap.mjs` não confere lastmod.
      - Anos vencidos no texto (`on-page-conteudo-15`) não foram trocados na Fase 1.
- [ ] **Medir o efeito real (dado de campo)** em ~28 dias (a partir de 23/10/2026):
      pagespeed.web.dev da home, do hub e de 2 cursos, e o relatório de Core Web Vitals
      do Search Console. O laboratório não decide (ver Resolvidas, Fase 1 SEO).

#### Fase 2 e 3 (§7.4 e §7.5)

- [ ] P4 fonte única de fatos (depende das decisões 1–5 e 9) · P9 respostas e
      preços · P11 marca e social · P12 presença local externa · P13 blog (outro
      repositório) · P14 E-E-A-T · P15 medição (evento `whatsapp_click`, IndexNow).

## Resolvidas

- [x] **Fase 1 da auditoria SEO/GEO/AEO** — aprovada pelo Henrique em 25/09 e publicada no
      mesmo dia (PR #61, `50e8eaf`). Plano em `docs/superpowers/plans/2026-09-25-seo-fase-1.md`.
      Causa-raiz dos problemas: o site já era SSR, mas escondia o que o robô precisa ver —
      conteúdo do topo com `opacity:0` até o JS, FAQ e ementa só no JSON-LD, 53 páginas sem
      nenhum link de entrada, robots bloqueando `/assets/` e Accept não-HTML gerando 500.
      **Prova:** `scripts/verificar-seo.mjs` contra a produção — **0/10 antes** (25/09, antes
      do código) → **9/10 depois do deploy**; a única falha é o robots.txt antigo no cache
      da borda (purge pendente acima; a origem já serve o novo). Links: 8/74 → **74/74** URLs
      alcançáveis a partir da home. Validador schema.org: erro de `instructor` e avisos de
      `audience` eliminados. Lighthouse mobile na produção (mediana de 3 rodadas, mesma
      máquina da auditoria): **home 66 → 80, LCP 5,7 s → 3,8 s, TBT 220 ms → 9 ms,
      acessibilidade 93 → 96**; hub `/particular` 40% mais leve (não carrega mais as peles).
      ⚠️ Nas páginas de curso o LCP *simulado* subiu (ex.: CREATE 8–9 3,0 → 5,0 s) porque o
      número antigo media o **logo do cabeçalho** — o conteúdo nascia invisível e era
      ignorado. Com lentidão aplicada de verdade (`--throttling-method=devtools`), o texto
      de abertura aparece junto com o primeiro desenho: CREATE 8–9 FCP = LCP = 2,5 s, Excel
      2,6 s. Gate: lint 0 erros (com check-sitemap 74=74), `node --test` 8/8, build OK,
      `tsc` com os mesmos 12 erros antigos (nenhum novo). Integrada com a Fase 1 de UI/UX
      (#60) sem duplicar a seção de cursos particulares da home.

- [x] **FAQ "Em quanto tempo termino o curso?" era texto fixo genérico nas ~52
      páginas de `/particular/cursos/*`, desconectado do `TIER_META` real de
      cada curso** — pedido direto do Henrique, 23/09. Causa raiz: o item de
      duração em `PARTICULAR_FAQ_ITEMS` (`particular-faq.tsx`) sempre foi um
      texto único hardcoded ("a maioria dos cursos tem 48 aulas... a duração
      exata está no card de Investimento"), correto só como aproximação —
      nunca foi recalculado por curso, mesmo depois da unificação de tiers
      (ver item abaixo) tornar quase todo curso "plano único" com duração
      exata conhecida. Resolvido calculando a resposta a partir dos tiers
      reais do curso (`tierMeta()`, mesma fonte do card de Investimento) em
      `buildCourseFaqItems()`, usada nos 3 pontos que hoje montam o FAQ de
      uma página de curso (acordeon do template padrão, pele visual via
      `SkinProps.faq`, e o JSON-LD `FAQPage`) — a landing `/particular` (sem
      curso específico) continua com o texto genérico, sem mudança. **Caso
      multi-tier:** nenhum curso do catálogo usa hoje (unificação 100%
      concluída, ver item abaixo), mas como a estrutura (`course.tiers`) e o
      resto do código ainda tratam esse caso em toda parte (`multiTier`),
      implementado por consistência: mostra a faixa do tier mais rápido
      (ritmo intensivo) ao mais completo (ritmo padrão), em vez de listar
      todos os níveis ou manter o texto genérico. Extraída a lógica pura pra
      `particular-faq-items.ts`, deixando `particular-faq.tsx` só com o
      componente (elimina 1 warning de fast-refresh pré-existente do
      arquivo). Verificado com `bun run lint` (0 erros, 128 warnings — 1 a
      menos que antes) e `bun run build` (gate do `CLAUDE.md`, sem erros) e
      visualmente no `bun run dev`: `/particular/cursos/git` (24 aulas,
      mostra "~3 meses"/"~1 mês"), `/particular/cursos/excel` (48 aulas,
      maioria do catálogo, mostra "~6 meses"/"~3 meses") e `/particular`
      (landing, texto genérico preservado) — FAQ expandido bate com o card
      de Investimento da mesma página em cada caso; JSON-LD inspecionado via
      console do navegador confirma o mesmo texto dinâmico. PR
      [#54](https://github.com/Guilhermeb-Ferrarezi/Santos-Tech-Home-Page/pull/54).

- [x] **Estatística "24 aulas por curso" e ritmo do bloco "Ritmo" na home
      do `/particular` estavam desatualizados pra quase todo o catálogo**
      — pendência aberta pela auditoria de resquícios do modelo antigo
      (23/09), reaberta pela conclusão da unificação de tiers. Causa raiz:
      o bloco "Ritmo" (`particular.index.tsx`) ainda mostrava 24 aulas/
      curso, ~3 meses no ritmo padrão e ~1 mês no intensivo como se fosse
      universal — números do modelo de tiers 24/48/72h que a unificação
      substituiu. Com o catálogo 100% migrado, 48 aulas é o padrão de
      quase todo curso (só Canva/CapCut/Git/Manutenção/Impressão 3D
      continuam em 24h), e o padrão de ritmo para curso de 48 aulas em
      `TIER_META` já era intensivo "~3 meses" / padrão "~6 meses". Henrique
      confirmou a atualização mecânica pros 3 números afetados (a
      estatística de "1h por aula" não muda). Verificado com `bun run
      lint` + `bun run build` (gate do `CLAUDE.md`, sem erros) e
      visualmente no `bun run dev`: `/particular`, seção "Ritmo", mostrando
      1h / 48 / 6 meses / 3 meses.

- [x] **Duração dos cards "populares" da home do `/particular` (`POPULARES`
      em `particular.index.tsx`) não era derivada de `TIER_META` e já
      estava inconsistente com ele** — achado durante o PR #37 (correção
      do FAQ genérico). Causa raiz: o campo `duracao` de cada card era
      digitado à mão (ex.: Cibersegurança "4 meses", Redes Sociais
      "1 mês"), sem bater com o intensivo (~3 meses) nem o padrão
      (~6 meses) que esses mesmos cursos já tinham em `TIER_META`. Exigia
      decidir o que esse número deveria representar antes de corrigir —
      Henrique confirmou usar o ritmo **intensivo** (não padrão), na linha
      da intenção original do array (valores antigos majoritariamente
      1-2 meses, ritmo mais vendável). Trocado o campo solto `duracao` por
      `tierKey` (a chave exata do curso em `TIER_META`) e o card passou a
      renderizar `TIER_META[tierKey].intensivo` diretamente — reajuste
      futuro em `TIER_META` reflete automaticamente nos 10 cards, sem
      sincronizar 2 lugares. Verificado com `bun run lint` + `bun run
      build` (sem erros) e visualmente no `bun run dev`: `/particular`,
      seção "Cursos mais populares", os 10 cards (incluindo "Mostrar mais")
      mostrando "~3 meses" de forma consistente.

- [x] **Card de investimento: parcela em destaque lia ambíguo, e a cláusula
      do boleto tinha sumido de todas as 52 páginas** — achado pelo
      Henrique revisando o card ao vivo (PR #49). Dois problemas
      distintos: (1) "R$ 380,46" seguido de "12x sem juros no cartão"
      embaixo podia ser lido como se 380,46 fosse o total sendo dividido
      em 12 (quando já é o valor de cada parcela) — reescrito pro padrão
      sem ambiguidade "12x de / R$ 380,46 / sem juros no cartão"; (2) a
      frase "Boleto parcelado de acordo com a duração do seu curso" foi
      derrubada silenciosamente quando o card de pagamento foi condensado
      no refactor de identidade visual (`course-skins/common.tsx`) —
      ninguém notou porque não quebra build nem lint, só falta conteúdo.
      Restaurada via `FORMAS_PAGAMENTO_DETALHE`
      (`course-skins/shared.tsx`), aplicada também no template padrão
      (`particular-course-page.tsx`, hoje sem uso mas mantido como
      fallback). Verificado com `bun run lint` + `bun run build` e
      visualmente no preview local.

- [x] **Unificação de tiers em opção única — catálogo 100% migrado (47 de
      47 cursos particulares)** (spec completa em
      [`docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md`](docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md),
      PR #20-#43). Todos os grupos convertidos: Premiere (piloto), T.I,
      Universo 3D, Informática, Design & Criação, Marketing & Negócios,
      Office (8 cursos), Inteligência Artificial (6 cursos) e Programação
      (13 cursos — `git` já era plano único antes desta spec, só
      reclassificação de preço). Henrique confirmou a tabela de taxa
      técnica (R$110-180/h) em 23/09: faixa aprovada como sugerida na spec,
      cursos de IA (ia/agentes-ia/ia-visual/typescript) formalizados em
      109,90/h com RAG subindo pra 115/h, Pacote Office mantém-se símples
      sem Power BI/Copilot (curso dedicado já existe), `mobile` unifica em
      React Native (remove Flutter/Dart/Riverpod por completo), `jogos`
      mantém Unity + Godot juntos, `capcut`/`manutencao`/`impressao-3d`
      seguem curtos (24h sem nivelar). `fullstack` e `ads` eram
      "repetitivos" (tier de 48h já continha o Essencial inteiro) — só
      promovidos, sem cortar conteúdo (13 e 16 módulos preservados; ADS é
      o curso mais abrangente e mais caro do catálogo, teto da faixa
      técnica).
      **Bug recorrente de pele visual encontrado e corrigido 5x durante a
      conversão** (Office ×2, IA ×2, Programação ×1 — `ide-jogos.tsx`,
      "Mundo N · {tier.levelName}"): texto tipo "nível {tier.levelName}"
      sem checar `multiTier`, repetindo o nome inteiro do curso de forma
      redundante ou sem sentido assim que um curso vira tier único.
      Corrigido a cada ocorrência com o guard `multiTier`/`tiers.length >
      1`. A varredura sistemática e definitiva desse padrão (~19
      ocorrências em todo `course-skins/`, incluindo as que ainda não
      tinham sido expostas por nenhuma conversão) foi feita em sessão
      separada logo em seguida — ver item própio abaixo.
      **Também corrigidos 4 pontos de meta description/copy** que ficaram
      desatualizados em relação ao currículo comprimido (prometiam
      ferramenta ou prazo que deixou de ser ensinado/verdadeiro):
      `ia-visual.tsx` (Sora → Kling, só Kling ganhou cobertura real),
      `sql.tsx` (removeu "cloud e IA" do headline, virou só menção de
      panorama), `backend.tsx` (removeu "NestJS" e "SaaS em produção" do
      headline, virou só menção de próximo passo), `ads.tsx` ("12 meses"
      em 3 lugares — description, targetAudience e FAQ — trocado por "6
      meses"/"poucos meses", consistente com o ritmo real de 48 aulas que
      a própria página já mostra).
      Verificado com `bun run lint` + `bun run build` (gate do
      `CLAUDE.md`, sem erros) em cada um dos 3 lotes (Office, IA,
      Programação) e visualmente no preview local — pelo menos 2-3 páginas
      por lote, incluindo os casos mais arriscados (Excel + IA e Power Apps
      pra confirmar o fix da pele; Pacote Office pra confirmar ausência de
      Power BI/Copilot; Jogos e ADS pra confirmar renderização com pele
      customizada e módulos preservados).

- [x] **`ia-geral.tsx` (componente `Trilha`) ficou com sub-legenda incorreta
      assim que o curso "ia" converteu pra plano único, no meio desta
      sessão** — inicialmente registrado como pendência em aberto (esta
      mesma sessão, ver commit anterior), porque o curso "IA: Essencial ao
      Profissional com Agentes" ainda não tinha convertido e a correção
      parecia exigir redesenho, não só texto. O `master` andou 2x durante a
      sessão (PR #42 Office, depois PR #43 IA) — na sincronização com o PR
      #43 o curso `ia` já tinha virado plano único, e a checagem visual em
      `/particular/cursos/ia` mostrou o problema ao vivo: "Cada nível é uma
      etapa da trilha. Escolha a etapa..." continuava aparecendo com um só
      card "etapa 01" estático (sem seletor, sem barra de progresso — esses
      dois já eram condicionais a `n > 1` antes). Reavaliado: o visual
      degrada bem sozinho (card único desabilitado, sem elementos vazios ou
      quebrados); só o texto ficava incoerente. Corrigido com o mesmo padrão
      do resto da revisão: `sub={n > 1 ? "Cada nível é uma etapa da
      trilha..." : "Acompanhe os módulos na linha do tempo, do primeiro
      prompt ao primeiro agente."}` (reaproveitando o `n` que a função já
      calculava). Observação à parte, não corrigida agora por ser um ponto
      de design (não usa a palavra "nível", foge do escopo desta revisão):
      cada módulo do curso de tier único repete o nome inteiro do curso como
      kicker (ex.: "IA: ESSENCIAL AO PROFISSIONAL COM AGENTES · MÓDULO 01"
      em todo módulo) — funciona, mas é repetitivo; fica pra quem revisar a
      identidade visual desse skin depois. Verificado com `bun run lint` +
      `bun run build` (sem erros) e visualmente em `/particular/cursos/ia`
      no `bun run dev`.

- [x] **Rótulos genéricos "nível" em `course-skins/variants/*` não checavam
      `multiTier` — ~19 ocorrências corrigidas, incluindo 4 que já eram o
      bug grave (nome do curso injetado depois de "nível")** — achado
      apontado num curso já existente sobre `planilha-pacote.tsx`,
      `planilha-power-bi.tsx` e `planilha-powerpoint.tsx` ("Ao final deste
      nível" / "Resultado do nível" incondicionais). Causa raiz: `Tier.
      levelName` virou o nome do curso/software em cursos de plano único
      (decisão da unificação de tiers, ver spec
      [`2026-09-23-cursos-particulares-plano-unico-design.md`](docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md)),
      mas muitos rótulos escritos quando todo curso era multi-tier nunca
      foram revisados. Rodei `grep` por "nível" (com acento) em todo
      `src/components/course-skins/` (84 ocorrências) e classifiquei cada
      uma: comentário/JSDoc (não é texto de tela) → ignorado; "nível" da
      arquitetura em `oficina-revit.tsx` (cota de elevação do desenho
      técnico, sem relação com tier) → ignorado, falso positivo por
      homônimo; componente que já retorna `null`/já está dentro de
      `{multiTier && (...)}` (`TierIntro`, `TierSwitch`, `TierTabs`,
      `TierGuide` em todos os 8 call sites, badge "Escolha o nível" em
      `ia.tsx`, "Não se encaixa em nenhum nível?" em `common.tsx`) → já
      seguro, sem mudança; rótulo genérico incondicional → corrigido pra
      `multiTier ? "…nível…" : "…curso…"`. **Nessa varredura apareceram mais
      4 ocorrências do bug grave já corrigido antes noutro lugar** (nome do
      tier colado depois de "nível", tipo "conversa do nível Excel + IA")
      que ainda não tinham sido pegas — `ia-agentes.tsx` ("Você começa o
      nível {tier.levelName}"), `ia-chat.tsx` ("ao final do nível
      {tier.levelName}"), `planilha-excel-ia.tsx` ("conversa do nível
      {tier.levelName}") e `planilha-power-apps.tsx` ("Quando você começa o
      nível {tier.levelName}") — hoje inofensivas porque nenhum desses 4
      cursos foi convertido pra plano único ainda, mas quebrariam
      automaticamente na conversão (mesma classe do bug do badge "Nível X" e
      do JSON-LD duplicado, já corrigidos antes). Corrigidas junto, com a
      mesma regra. **Arquivos alterados (15):** `ia-agentes.tsx`,
      `ia-chat.tsx`, `ia-conteudo.tsx`, `ia-rag.tsx`, `ia-visual.tsx`,
      `ide-logica.tsx`, `ide-n8n.tsx`, `ide-python-apis.tsx`,
      `marketing-funil-vendas.tsx`, `marketing-kit.tsx` (default não usado
      de `ToolsRow`), `planilha-excel-ia.tsx`, `planilha-pacote.tsx`,
      `planilha-power-apps.tsx`, `planilha-power-bi.tsx`,
      `planilha-powerpoint.tsx`. Nos componentes sem prop `multiTier` já
      pronta (família `ia-*`/`IaBlockProps`, família `ide-*`/`ConteudoProps`,
      `marketing-funil-vendas.tsx`/`MktBlockProps`), segui o mesmo padrão já
      usado em `TierIntro`/`TierTabs`/`NivelSeletor`: `const multiTier =
      course.tiers.length > 1` calculado localmente. Deixei de fora
      `ia-geral.tsx` (ver pendência aberta acima — precisa de redesenho, não
      de troca de texto) e a tag decorativa `<Nivel nome="…">` de
      `ide-frontend.tsx` (sem acento, é estética de "código falso" no
      metáfora do skin, não prosa real). Verificado com `bun run lint` (0
      erros, só os 129 warnings pré-existentes de fast-refresh em rotas,
      nenhum nos arquivos alterados) e `bun run build` (limpo, TypeScript
      incluído) — precisei rodar `bun install` antes porque este worktree
      nunca tinha sido instalado (`node_modules` não existia; script
      `generate-og-images.mjs` falhava com `ERR_MODULE_NOT_FOUND` por causa
      disso, não por causa da mudança). Restaurei `public/og/**` e
      `public/og-image.png` depois de cada build (efeito colateral
      conhecido, ver memória). No meio da sessão o `master` andou (PR #42,
      grupo Office inteiro convertido pra plano único) e trouxe conflito
      real em `planilha-excel-ia.tsx` e `planilha-power-apps.tsx` — a outra
      sessão tinha corrigido, nos mesmos 2 arquivos, exatamente o mesmo bug
      grave que essa varredura também pegou (`multiTier ? "…nível
      {tier.levelName}" : "…curso"`, palavra por palavra igual em
      `planilha-power-apps.tsx`), o que valida a correção; resolvido
      mantendo a versão desta sessão pra a `<span>` de "conversa do
      nível/curso" (fica consistente com "Resumo do nível/curso" duas
      linhas abaixo, no mesmo arquivo, em vez de esconder a legenda
      inteira). `bun run lint`/`build` rodados de novo depois do merge,
      ainda limpos. Verificado visualmente no `bun run dev` **depois do
      merge**: `/particular/cursos/funil-vendas`, `/particular/cursos/
      office`, `/particular/cursos/power-bi`, `/particular/cursos/
      powerpoint`, `/particular/cursos/excel-ia` e `/particular/cursos/
      power-apps` (todos já plano único, os 2 últimos convertidos pelo PR
      #42 que chegou no meio desta sessão) mostram a versão "curso" em cada
      rótulo; `/particular/cursos/chatgpt` (ainda multi-tier) continua
      mostrando "ao final do nível Essencial" / "Troque o nível no seletor
      de modelo" sem nenhuma mudança de comportamento.

- [x] **Copywriting mencionava "revisão em grupo" no projeto final e no
      FAQ** — pendência aberta em 23/09 durante a conversão do curso pra
      opção única, sem causa raiz confirmada (podia ser resquício de
      quando o curso foi pensado com alguma dinâmica de turma, ou
      simplesmente copy nunca revisada). Resolvido sem precisar decidir
      qual dos dois cenários é o real: nos dois casos "revisão em grupo"
      contradiz o modelo 100% individual (1 aluno + 1 professor) que é a
      proposta central do `/particular` — reforçado em
      `particular-course-page.tsx` ("Aula Individual — Só você e o
      professor — foco total, sem fila de dúvidas") e no FAQ genérico
      (`particular-faq.tsx`). Trocado "revisão em grupo" por "revisão
      individual com o professor" nos dois trechos de
      `particular.cursos.copywriting.tsx` (último tópico do módulo final
      em `tiers[0].modules`, e a resposta de `faqItems[1]`, "Dá pra usar
      esse curso pra virar freelancer de copywriting?"), mantendo a ideia
      de que o projeto final passa por revisão e feedback estruturado
      antes da entrega. PR #40. Verificado com `bun run lint` + `bun run
      build` (gate do `CLAUDE.md`, sem erros) e visualmente no `bun run
      dev`: `/particular/cursos/copywriting`, capítulo "Análise,
      Otimização e Projeto Final" e o FAQ mostrando o texto novo.

- [x] **Ritmo intensivo dos cursos de 48 aulas atualizado de "~2 meses" pra
      "~3 meses"; e um aprendizado sobre sessões paralelas no mesmo repo**
      — a tarefa que originou o PR #37 (correção do FAQ genérico de
      duração) partia da premissa de que `TIER_META`
      (`particular-course-page.tsx`) já usava "~3 meses". No meu branch o
      valor ainda era "~2 meses", e busquei em todo o histórico do git sem
      achar essa mudança em lugar nenhum — então registrei como divergência
      e perguntei pro Henrique, que confirmou em 23/09 que queria mesmo
      "~3 meses". Implementei (21 entradas de 48 aulas em `TIER_META`,
      recontadas com `grep` — não são 17 como cheguei a estimar antes — e o
      FAQ genérico). **Só depois** de já ter feito isso, outra sessão em
      paralelo (que tinha originado esta tarefa) avisou: ela mesma já tinha
      feito e mergeado essa exata mudança em `master` via PR #35, ANTES do
      meu branch puxar essa atualização — ou seja, não era uma divergência
      real, só timing (meu branch estava desatualizado quando eu chequei o
      histórico). Uma terceira sessão, também em paralelo, fez um refactor
      grande que moveu `TIER_META`/`TIER_GUIDE`/`DIFERENCIAIS`/
      `getInvestimento` de `particular-course-page.tsx` pra
      `src/components/course-skins/shared.tsx` — meu commit de `TIER_META`
      virou redundante/conflitante ao sincronizar com master. Resolvido o
      merge aceitando a versão de master no arquivo (meu hunk não tinha
      mais nada a contribuir ali); a parte que sobreviveu e era mesmo
      necessária foi só o FAQ genérico (`particular-faq.tsx`), que
      continuava com o exemplo desatualizado e nenhuma outra sessão tinha
      corrigido. Não mexi em `particular.index.tsx` (`POPULARES.duracao`,
      cards da home) — esse campo já é uma pendência separada (abaixo) e os
      valores não seguem `TIER_META` de forma mecânica (ex.: Cibersegurança
      mostra "4 meses", Redes Sociais mostra "1 mês", nenhum dos dois
      batendo com intensivo nem padrão), então trocar só o "2"→"3" ali
      seria arbitrário. Verificado com `bun run lint` + `bun run build`
      (gate do `CLAUDE.md`, sem erros, rodado de novo depois do merge) e
      visualmente no `bun run dev`: `/particular/cursos/excel` mostra
      Intermediário (48 aulas) com Intensivo "~3 meses" / Padrão "~6
      meses", e o FAQ com o mesmo número.
      **Aprendizado:** múltiplas sessões Claude trabalhando em paralelo no
      mesmo repo (inclusive uma spawnando a outra) podem convergir pra
      descobrir e corrigir o mesmo problema ao mesmo tempo, sem saber uma
      da outra — o custo aqui foi só um merge extra, mas vale checar
      `git log origin/master` antes de assumir que um valor "sempre foi
      assim" quando várias sessões estão ativas no mesmo repo.

- [x] **`nginx.conf` estava morto/não usado no deploy real** — o `Dockerfile`
      nunca copiava nem referenciava esse arquivo; o container final roda só
      `bun run ./docker/server.ts`, que já serve estático + SSR direto, sem
      nginx na frente. Confirmado com nova checagem em todo o repo (sem
      `docker-compose`, sem workflow de CI/CD, sem nenhuma outra automação
      referenciando o arquivo) antes de remover. Removido `nginx.conf` e
      corrigido `README.md` (seção "Deploy") pra descrever a arquitetura real:
      Bun exposto direto na porta 3000, sem proxy reverso no container.

- [x] **Redirect 301 `/adultos` → `/particular`** — o bloco em `nginx.conf`
      (PR #12) nunca era executado, porque nginx não roda no container (ver
      item acima). Corrigido de verdade em `docker/server.ts`
      (`redirectLegacyParticularPath`), testado rodando o servidor de produção
      local (`bun run ./docker/server.ts`) e confirmando com `curl`:
      `/adultos/cursos/davinci` → `301` → `/particular/cursos/davinci`.

- [x] **Redirect `/adultos` saía com `Location: http://` em vez de
      `https://`** — achado pela auditoria de 23/09 (workflow paralelo).
      Causa: o Cloudflare termina o TLS e repassa pro Bun em HTTP puro; o
      redirect só trocava o `pathname`, herdando o protocolo `http:` do
      request interno — o cliente levava um `301 → 302` (Cloudflare
      reescrevendo pra https) em vez de um redirect limpo. Corrigido usando
      o header `x-forwarded-proto` (que o Cloudflare sempre envia) pra decidir
      o protocolo do `Location`, com https como padrão seguro. Testado local
      simulando o header do Cloudflare.

- [x] **Texto quebrado (tofu-box) nas imagens de Open Graph** — achado pelo
      Henrique em produção depois do deploy do PR #12/#13. Causa raiz: o
      Alpine (base da imagem Docker) não tem nenhuma fonte instalada, e
      `scripts/generate-og-images.mjs` depende de fonte de sistema pra
      renderizar texto no SVG (as imagens são geradas **uma vez, em build
      time** — não há geração em runtime, então não é uma "race condition de
      cold start": é sempre o build inteiro que sai bom ou ruim, dependendo
      só de a fonte estar instalada naquele build). Bug pré-existente da
      automação de OG (commit `b0beb5f`), exposto porque nenhum build de
      produção tinha rodado desde então. Corrigido no `Dockerfile` (PR #14):
      `apk add fontconfig font-liberation && fc-cache -f` antes do
      `bun run build`. Reproduzido e verificado com Docker local, buildando o
      estágio `build` isolado antes e depois da correção.

- [x] **Cache do Cloudflare servindo OG image quebrada** — o fix de fonte já
      estava no ar na origem, mas o Cloudflare guardou as imagens
      quebradas em cache por até 4h antes do fix terminar de subir.
      **Henrique purgou o cache manualmente em 23/09** (painel Cloudflare →
      Purge Everything). Confirmado pela auditoria e por verificação direta
      que a origem já servia a versão corrigida.

- [x] **Copyright do rodapé inconsistente** — achado pela auditoria de
      23/09. Causa raiz: 3 estados diferentes de copyright coexistindo —
      `SiteFooter` (institucional/infantil) já usava ano dinâmico
      (`{new Date().getFullYear()}`), mas o rodapé próprio de
      `/particular` (as rotas `/particular/*` usam um layout com sidebar
      que pula o `SiteFooter`) tinha o ano hardcoded em "2025", e o
      componente compartilhado das ~52 páginas `/particular/cursos/*`
      (`particular-course-page.tsx`) não tinha nenhuma linha de copyright.
      Corrigido trocando o "2025" fixo por `{new Date().getFullYear()}` em
      `particular.index.tsx` e adicionando uma linha de copyright discreta
      (mesmo padrão dinâmico) ao fim de `particular-course-page.tsx` — sem
      reusar o `SiteFooter`, que é acoplado ao sistema de tema
      (`useProgramKey`) do outro layout. Verificado com `bun run lint` e
      `bun run build` (gate do `CLAUDE.md`, sem erros) e visualmente no
      `bun run dev`: `/particular` e uma página de curso
      (`/particular/cursos/excel`) mostrando "© 2026 Santos Tech" no
      rodapé, e a home (`/`) sem regressão no `SiteFooter`.
