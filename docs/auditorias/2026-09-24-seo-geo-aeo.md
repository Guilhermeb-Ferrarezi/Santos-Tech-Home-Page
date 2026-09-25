# Auditoria SEO · GEO · AEO — santos-tech.com

**Data:** 24/09/2026 (coleta principal; parte das medições da rodada de lacunas é de 25/09/2026)
**Para:** Henrique (dono e decisor) · Guilherme (dev)
**Autor:** CTO (responsável técnico)
**Progresso:** auditoria 100% concluída (coleta, verificação e relatório). Execução das correções: 0%. A Fase 1 do plano (§7) leva a execução a cerca de 35%.

> **Como ler este relatório**
> - Henrique: leia o §2 (resumo), o §4 (10 ganhos rápidos) e o §6 (decisões que só você pode tomar). O resto é referência técnica.
> - Guilherme: o §5 traz cada achado com evidência, fonte oficial e recomendação concreta, e o §7 organiza a execução em pacotes, já sem duplicatas.
> - Marcadores: 🔴 crítica · 🟠 alta · 🟡 média · 🟢 baixa · ✅ ok · ⚠️ atenção/obrigatório.

---

## 1. Escopo, método e limites

### 1.1 Escopo

- **Site:** [https://santos-tech.com](https://santos-tech.com), um site institucional em React 19 + TanStack Start. As páginas são montadas no servidor (Bun) e passam pelo Cloudflare. São 74 URLs públicas no sitemap: 22 institucionais/infantis e 52 cursos particulares.
- **Blog** em `/blog`, um app separado que fica fora deste repositório. Foi auditado pelo HTML de produção.
- **Borda e infraestrutura:** Cloudflare (DNS, redirects, cache, bots) e o proxy da origem (Traefik/Dokploy).
- **Presença externa**, no que dá para ver de fora: Perfil da Empresa no Google (GBP), Bing Places, cadastro do CNPJ e diretórios.
- **Frentes (dimensões):** técnico/rastreio/indexação, dados estruturados, on-page/conteúdo, arquitetura/links internos, performance/Core Web Vitals, GEO (crawlers de IA), AEO (respostas), SEO local, social/marca/ícones, acessibilidade/semântica, estratégia de conteúdo/intenção e blog/integração. Houve ainda uma rodada de lacunas com 4 frentes: infraestrutura, conteúdo/E-E-A-T, GEO/AEO e performance/acessibilidade.

### 1.2 Método

1. **Pesquisa de diretriz por frente, em fonte oficial**, com foco no que mudou entre 2024 e 2026. Fontes: Google Search Central, web.dev, Chrome/Lighthouse, schema.org, W3C/WAI, Cloudflare, Bing, Meta, LinkedIn, TanStack e RFC 9110. A lista completa está no Anexo A.
2. **Coleta no site real:**
   - `curl` com vários user-agents: navegador, Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot e outros 13.
   - Consulta de DNS via DoH.
   - Lighthouse 13.5 local, em mobile e desktop.
   - [validator.schema.org](https://validator.schema.org).
   - Playwright + axe-core.
   - Leitura do código do repositório.
3. **Verificação adversarial:** cada achado foi reaberto por um verificador que tentou derrubá-lo. Ele reproduziu a evidência, conferiu se a fonte diz o que o achado afirma e recalibrou a severidade.
4. **Funil dos achados:**

| Etapa | Quantidade |
|---|---|
| Achados brutos (1ª rodada) | 238 |
| Após deduplicação (1ª rodada) | 156 |
| Rodada de lacunas (novos) | +33 |
| **Verificados neste relatório** | **189** |
| · confirmados (evidência e fonte batem integralmente) | 40 |
| · parciais (verdadeiros, com severidade, fonte ou recomendação corrigidas pelo verificador) | 149 |
| Refutados (falsos positivos) | 0 |
| Não verificados | 0 |

⚠️ **Sobreposição:** os 33 achados da rodada de lacunas **não** foram deduplicados contra a 1ª rodada, nem entre si. Vários descrevem o mesmo problema visto de frentes diferentes. Exemplos: compressão Brotli (lacuna-infra-01 = lacuna-perf-01), e-mails ofuscados (lacuna-conteudo-08 = lacuna-geo-04) e ementa infantil fora do HTML (lacuna-conteudo-01 = lacuna-geo-02). O §5 mantém os 189 registros para rastreabilidade, e o §7 os reagrupa em **pacotes de trabalho únicos**, para ninguém fazer a mesma coisa duas vezes.

**Régua de severidade** usada pelos verificadores:
- 🔴 **crítica:** impede indexação ou gera penalidade.
- 🟠 **alta:** impacto direto em ranking, CTR, Core Web Vitals ou citação por IA.
- 🟡 **média:** ganho provável ou problema de consistência.
- 🟢 **baixa:** higiene.

Nenhum achado ficou como crítico depois da verificação.

**Aliases dos IDs da rodada de lacunas** (os IDs originais são longos):
- `lacuna-infra-NN` = `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--NN`
- `lacuna-conteudo-NN` = `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-NN`
- `lacuna-geo-NN` = `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-NN`
- `lacuna-perf-NN` = `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-NN`

### 1.3 O que NÃO foi medido (limites honestos)

- **Dados de campo (usuários reais), ou seja, CrUX e Core Web Vitals do Search Console: não medidos.** A API do PageSpeed Insights sem chave devolveu HTTP 429 (cota diária 0) nas 8 combinações testadas, e a CrUX API devolveu 403 sem chave. **Todo número de performance deste relatório é de laboratório**, com celular simulado.
- **INP**, o tempo de resposta a cliques, só existe em dado de campo e por isso **não foi medido**.
- **Search Console, Bing Webmaster Tools, Perfil da Empresa no Google e painel do Cloudflare:** não houve acesso. Os itens que dependem deles estão marcados como "não verificado".
- **SERP de Ribeirão Preto:** as buscas foram feitas por WebSearch, com índice dos EUA. São uma aproximação, a confirmar no Search Console.
- **Rich Results Test:** não foi executado. O vocabulário foi validado no Schema Markup Validator.
- **Google Trends:** HTTP 429, então a sazonalidade não foi medida.
- **Citação real em ChatGPT, Perplexity, Copilot e Modo IA:** não testada.
- **Repositório do frontend do blog:** não foi localizado nesta máquina. As recomendações de blog não trazem arquivo nem linha.
- **Variação de laboratório:** duas rodadas de Lighthouse no mesmo dia deram números diferentes. Por exemplo, `/particular` no mobile teve nota 65 numa e 78 noutra. Isso é normal em laboratório, e só o dado de campo resolve.

### 1.4 Medições de referência (laboratório, Lighthouse local, 24/09/2026 ~13h50)

| Página | Disp. | Perf | Acessib. | Boas práticas | SEO | FCP | LCP | CLS | TBT | Speed Index |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | mobile | 66 | 93 | 96 | 100 | 2,9 s | **5,7 s** | 0 | 220 ms | 5,4 s |
| `/` | desktop | 91 | 93 | 96 | 100 | 0,7 s | 1,7 s | 0,018 | 0 ms | 1,8 s |
| `/particular` | mobile | 78 | 100 | 100 | 100 | 3,9 s | **4,1 s** | 0 | 0 ms | 3,9 s |
| `/particular` | desktop | 99 | 100 | 100 | 100 | 0,8 s | 0,8 s | 0 | 0 ms | 0,9 s |
| `/particular/cursos/excel` | mobile | 74 | 100 | 100 | 100 | 4,4 s | **4,4 s** | 0 | 0 ms | 4,4 s |
| `/particular/cursos/excel` | desktop | 98 | 100 | 100 | 100 | 0,9 s | 0,9 s | 0,013 | 0 ms | 1,1 s |
| `/cursos/create/8-9-anos` | mobile | 89 | 96 | 96 | 100 | 2,9 s | 3,0 s | 0 | 4 ms | 3,1 s |
| `/cursos/create/8-9-anos` | desktop | 99 | 96 | 96 | 100 | 0,7 s | 0,8 s | 0 | 0 ms | 1,0 s |

Limiar oficial ([web.dev/vitals](https://web.dev/articles/vitals)), no p75 de campo: LCP ≤ 2,5 s, CLS ≤ 0,1, INP ≤ 200 ms. No mobile de laboratório, a home, `/particular` e o curso de Excel passam do limite de LCP, e o CLS está bom em todas.

Outros números de laboratório da mesma coleta:
- **JavaScript não usado** (em todas as páginas): o chunk `index-*.js` tem cerca de 310 KB transferidos, dos quais 142 a 173 KB não são usados. Nas páginas `/particular` há ainda o `course-skins-*.js`, com cerca de 196 KB transferidos e 171 a 178 KB não usados.
- **Home no mobile:** 54 requisições, cerca de 813 KB transferidos e tempo de resposta do documento entre 330 e 570 ms.
- **`favicon.png`:** cerca de 86 KB, baixado em toda página.

**Gate do repositório (24/09/2026):** `bun run lint` passou com 0 erros (e 128 avisos react-refresh), e `bun run build` terminou OK.

---

## 2. Resumo executivo (para o Henrique)

**O que está bom.** O site já sai "montado do servidor": Google e IAs leem o texto sem precisar rodar programa nenhum. As 74 páginas respondem sem erro, e cada uma diz ao Google qual é o endereço oficial dela. O robots (o arquivo que diz aos robôs o que podem ler) libera buscadores e IAs. No computador o site é rápido, com nota de 91 a 99. Não há nenhuma falha grave que impeça o Google de indexar o site.

**Os 5 problemas que mais custam clientes e visibilidade:**
1. **O hub `/particular` e os 52 cursos particulares (53 páginas, 72% do site) não têm nenhum link vindo do menu, do rodapé ou da home.** As 12 páginas de currículo infantil também não, porque os cards levam direto ao WhatsApp. O Google e as IAs só chegam a elas pelo sitemap (a lista de endereços que entregamos ao Google). Pela home, um robô alcança 8 das 74 páginas.
2. **No celular a página inicial é lenta:** leva cerca de 5,7 s para mostrar o conteúdo principal (o LCP, "tempo até aparecer o maior bloco da tela"), e o bom é até 2,5 s. Dois motivos: o texto do topo nasce invisível esperando uma animação, e há uma tela azul de abertura.
3. **As respostas dos FAQs e a ementa aula a aula de 61 páginas só aparecem depois de um clique.** São 52 cursos particulares e 9 infantis, e sem o clique esse texto não está no HTML (o código que o Google lê). Em 18 cursos, só o 1º módulo da ementa existe para o Google.
4. **O site se contradiz em fatos básicos.** Exemplos: as faixas de idade (5–9/10–15 contra 5–8/8–14), a robótica (a home diz "não trabalhamos", mas existe uma página vendendo "Robotics Academy"), o sábado (fecha às 18h ou às 22h?), o CEP, o pino do mapa (cerca de 1 km fora), 3 e-mails diferentes e o número de cursos (43 ou 52). Isso derruba a confiança do Google, do Maps e das IAs.
5. **Uma linha do robots bloqueia a pasta `/assets/`**, que guarda o visual (CSS) e o código (JS) do próprio site. O Google enxerga a página "sem roupa". Corrigir é apagar essa linha.

**Recomendação de ordem de ataque:**
- (1) **Nesta semana:** correções de uma linha e de links (robots, rodapé e home com links para os cursos, topo da página visível sem animação, FAQs no HTML).
- (2) **Em paralelo, as suas decisões do §6** (idades, robótica, sábado, e-mail, CEP), para centralizarmos cada fato num lugar só do código.
- (3) **Em 1–2 semanas:** velocidade no celular e limpeza dos dados estruturados (as etiquetas invisíveis que descrevem a escola para o Google).
- (4) **Contínuo:** conteúdo com prova de experiência (professores, fotos reais, blog para adultos) e medição mensal no Search Console.

---

## 3. Placar por dimensão

A nota de 0 a 10 é **estimada**: é um julgamento do CTO a partir dos achados verificados, não uma medição.

| Dimensão | Nota (0–10, estimada) | 🔴 | 🟠 | 🟡 | 🟢 | Total | Destaque |
|---|---|---|---|---|---|---|---|
| Técnico, rastreio e indexação | 6 | 0 | 1 | 6 | 8 | 15 | ✅ SSR e canonical exemplares · ⚠️ robots bloqueia `/assets/`, http→https é 302 e `www` não existe |
| Dados estruturados | 6 | 0 | 0 | 2 | 6 | 8 | ✅ grafo por `@id` · ⚠️ 1 erro no validador (instructor) e hubs sem ItemList |
| On-page e conteúdo | 5 | 0 | 0 | 9 | 1 | 10 | ✅ titles únicos em 100% · ⚠️ fatos divergentes, boilerplate e H1 sem intenção |
| Arquitetura e links internos | 3 | 0 | 2 | 7 | 3 | 12 | ⚠️ a partir da home um robô alcança 8 de 74 URLs |
| Performance e Core Web Vitals | 5 | 0 | 1 | 6 | 13 | 20 | ✅ desktop 91–99 · ⚠️ LCP mobile 4,1–5,7 s (lab) |
| GEO: crawlers de IA | 7 | 0 | 0 | 2 | 5 | 7 | ✅ 19 bots de IA recebem 200 com HTML completo · ⚠️ preço infantil ausente nas páginas de curso |
| AEO: respostas | 4 | 0 | 1 | 6 | 4 | 11 | ⚠️ respostas de FAQ fora do HTML em 61 páginas |
| SEO local | 5 | 0 | 0 | 8 | 10 | 18 | ✅ endereço visível padronizado · ⚠️ geo, CEP, sábado, e-mail e legalName divergentes |
| Social, marca e ícones | 6 | 0 | 0 | 2 | 10 | 12 | ✅ Open Graph em todas as rotas · ⚠️ capas genéricas e favicon fraco |
| Acessibilidade e semântica | 6 | 0 | 0 | 6 | 9 | 15 | ✅ SEO Lighthouse 100 · ⚠️ contraste do verde e dropdowns só por hover |
| Estratégia de conteúdo e intenção | 4 | 0 | 1 | 8 | 4 | 13 | ⚠️ ausente nas buscas de adulto e contradição sobre robótica |
| Blog e integração | 5 | 0 | 0 | 4 | 11 | 15 | ✅ subdiretório, SSR e autor nomeado · ⚠️ sem link para o site e para `/particular` |
| Lacunas: infraestrutura | — | 0 | 0 | 3 | 5 | 8 | complementa Técnico e Performance |
| Lacunas: conteúdo e E-E-A-T | — | 0 | 0 | 6 | 3 | 9 | complementa On-page e AEO |
| Lacunas: GEO/AEO | — | 0 | 0 | 5 | 4 | 9 | complementa GEO e AEO (há sobreposições, ver §7) |
| Lacunas: performance e a11y | — | 0 | 1 | 6 | 0 | 7 | complementa Performance e Acessibilidade |
| **Total** | — | **0** | **7** | **86** | **96** | **189** | |

**Por escopo** (onde a correção acontece):
- repositório deste site: 135
- blog (outro app): 19
- infraestrutura (Cloudflare/proxy): 15
- decisão de negócio: 14
- externo (GBP, Bing, diretórios): 6

**Por status:** 40 confirmados · 149 parciais.

---

## 4. Top 10 ganhos rápidos (esforço S/M, impacto alto/médio)

| # | IDs | O quê | Por quê | Esforço | Impacto | Onde | Fonte |
|---|---|---|---|---|---|---|---|
| 1 | `tecnico-rastreio-indexacao-01` (+ `-04`) | Apagar `Disallow: /assets/`. Em `/apresentacoes` e `/professores`, trocar o Disallow só pelo noindex | O Google precisa do CSS e do JS para ver a página como o celular vê | S | alto | `public/robots.txt` | [Google — recursos de rastreio](https://developers.google.com/search/blog/2024/12/crawling-december-resources) |
| 2 | `arquitetura-links-internos-01` + `-02` | Ligar `/particular` ao site: CTA na home e em `/cursos`, bloco no rodapé, e dentro de `/particular` um logo e um rodapé que voltam a `/`, `/cursos`, `/contato` e `/privacidade` | 53 páginas (72% do sitemap) não recebem nenhum link | S | alto | `site-footer.tsx`, `index.tsx`, `cursos.index.tsx`, `particular.tsx` | [Google — links rastreáveis](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) |
| 3 | `arquitetura-links-internos-03` | No header, apontar Tecnologia Júnior para `/cursos/junior` e Create para `/cursos/create`, e incluir Academies. Nos cards de `/cursos`, um link "Ver currículo", mantendo o WhatsApp | 12 páginas de currículo sem nenhum link de navegação | S | alto | `site-header.tsx`, `cursos.index.tsx` | [Google — sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) ⚠️ depende da decisão 1 (§6) |
| 4 | `arquitetura-links-internos-06` | Rodapé com `<nav>` (Programas, Cursos particulares, Institucional) e endereço/telefone em `<address>` com `tel:` | Hoje o rodapé só tem Privacidade e Termos | S | alto | `site-footer.tsx` | [Search Console — relatório Links](https://support.google.com/webmasters/answer/9049606) |
| 5 | `performance-cwv-01` | Tirar o `<Reveal>` do topo (badge, H1 e CTAs) na home, no curso particular e no curso infantil, e animar só com CSS | O H1 nasce com `opacity:0` e o LCP mobile fica em 5,7 s | S | alto | `index.tsx`, `particular-course-page.tsx`, `course-page.tsx` | [web.dev — otimizar LCP](https://web.dev/articles/optimize-lcp) |
| 6 | `performance-cwv-02` | Remover o Preloader (a tela azul de abertura) | Cobre o site até o JS rodar, em toda visita à home | S | alto | `preloader.tsx`, `index.tsx`, `preloader-signal.ts`, `cookie-consent.tsx` | [web.dev — otimizar LCP](https://web.dev/articles/optimize-lcp) ⚠️ decisão de marca 13 |
| 7 | `performance-cwv-07` | Converter os logos de ferramentas em PNG (suno 742 KB, gemini 500 KB, python 369 KB…) para WebP de 192 px | `/particular/cursos/ia` baixa 1,07 MB de logos exibidos entre 14 e 48 px | S | alto | `src/assets/logos`, `tool-logo.tsx` | [Lighthouse — imagens modernas](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images) |
| 8 | `aeo-respostas-01` + `-02` + `lacuna-conteudo-01` | Deixar FAQs e ementa aula a aula sempre no HTML (`<details>` nativo) nos 52 cursos particulares, nas 9 páginas infantis e em Colônia e Academies | As respostas e as 360 aulas não existem no HTML servido | S | médio | `course-skins/common.tsx`, `course-page.tsx` | [Google — políticas de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) |
| 9 | `seo-local-02` + `dados-estruturados-03` + `-15` | Limpar o JSON-LD: remover `aggregateRating` (da organização e dos 52 Course), remover `instructor`=Organization e mover `audience` para o Course | A nota da escola copiada no curso é marcação enganosa, e hoje há 1 erro no validador | S | médio | `src/lib/seo.ts` | [Google — review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) |
| 10 | `lacuna-perf-03` | `/links`: reenviar pelo painel as 4 imagens dos cards em WebP de ~800 px (<100 KB). O passo 1 não exige código | A página da bio do Instagram baixa 5,5 MB e tem LCP de laboratório de 31 s | M (passo 1 = S) | alto | painel de links / `santos-tech-infra` | [web.dev — otimizar LCP](https://web.dev/articles/optimize-lcp) |

**Fora do top 10 só porque dependem de uma decisão sua**, mas o impacto é alto:
- `estrategia-conteudo-intencao-04` (robótica)
- `on-page-conteudo-01` (idades)
- `seo-local-06` (sábado)
- `geo-crawlers-ia-01` (preço nas páginas infantis)
- `seo-local-01`/`-03` (pino e CEP)

---

## 5. Achados completos por dimensão

Em cada dimensão, os achados vão da maior severidade para a menor e, dentro da mesma severidade, pelo ID. "Diretriz" resume o que a fonte oficial diz. Quando a fonte citada originalmente não sustentou a afirmação, isso aparece com ⚠️ e a fonte correta vai na nota do verificador.

### 5.1 Técnico, rastreio e indexação (15 achados: 🟠 1 · 🟡 6 · 🟢 8)

#### 🟠 `tecnico-rastreio-indexacao-01` — robots.txt bloqueia /assets/: o CSS e o JS do site ficam invisíveis para o renderizador do Google
**Status:** parcial · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `public/robots.txt`
- **Evidência:**
  - `public/robots.txt:8` tem `Disallow: /assets/`, igual em produção.
  - O HTML da home referencia 86 URLs em `/assets/`: CSS, JS, 25 modulepreload e as fontes Poppins. `/sobre` referencia 48 e `/particular` 51.
  - O servidor entrega o CSS ao Googlebot (200, HIT). A regra do robots é a única barreira.
  - Engloba `performance-cwv-03` (mesma linha, do ponto de vista de performance).
- **Diretriz:** não bloquear no robots.txt CSS, JS e imagens necessários para renderizar a página. O Google indexa pela versão móvel e precisa dos mesmos recursos que o navegador. [Google Search Central — recursos no rastreio (dez/2024)](https://developers.google.com/search/blog/2024/12/crawling-december-resources)
- **Recomendação:**
  - Apagar a linha `Disallow: /assets/`, sem criar exceções `Allow`, e manter `Disallow: /api/`.
  - Não há efeito colateral: os arquivos têm hash e cache immutable, e `/blog` não é afetado.
  - Depois do deploy, rodar a Inspeção de URL ("Testar URL ativa") em `/`, `/particular` e num curso particular. O item "Recursos da página" não pode listar bloqueios.
  - O Google guarda o robots.txt em cache por até 24 h. A nossa borda guarda por 7 dias, então é preciso fazer purge (ver `lacuna-infra-03`).
  - Tratar no mesmo ciclo o `opacity:0` do hero (`performance-cwv-01`).
- **Nota do verificador:** o SSR já entrega title, meta, JSON-LD e o texto no HTML bruto, então a indexação básica não é impedida (por isso não é crítica). Mas, sem CSS, o Google não avalia layout, experiência mobile nem CLS, e o hero fica com `opacity:0` no render.

#### 🟡 `tecnico-rastreio-indexacao-04` — Conflito Disallow + noindex em /apresentacoes e /professores
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/robots.txt`, `src/routes/apresentacoes.index.tsx`, `src/routes/professores.tecnologia-create.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - O robots.txt tem `Disallow: /apresentacoes` (:12) e `Disallow: /professores` (:15).
  - As páginas respondem 200 com `noindex, nofollow, noarchive, noimageindex`.
  - Não há login: o material marcado como "restrito" é acessível a qualquer um. `/professores` (o índice) responde 404.
  - Engloba `on-page-conteudo-12`.
- **Diretriz:** para tirar uma página do índice, use noindex e **não** a bloqueie no robots. Se ela estiver bloqueada, o rastreador nunca vê o noindex e a URL pode aparecer nos resultados. [Google — bloquear indexação](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- **Recomendação:**
  - Remover os dois `Disallow` e manter `noindexMeta()` (`src/lib/seo.ts:455`).
  - Se o material for restrito de verdade, proteger com senha: Cloudflare Access, ou um gate com `useSession`/`beforeLoad` que redirecione para `auth.santos-tech.com`. Só então o Disallow pode voltar.
  - Monitorar o status "Indexada, mas bloqueada pelo robots.txt" no Search Console.
- **Nota do verificador:** rebaixado de alta para média. O efeito é só o risco de 2 páginas internas aparecerem sem snippet se alguém as linkar, e hoje não há link interno para elas nem estão no sitemap. Material "restrito" aberto ao público é uma questão de negócio e segurança à parte.

#### 🟡 `tecnico-rastreio-indexacao-06` — http→https responde 302 (temporário) em vez de 301, e o redirect vem da origem, não da borda
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra
- **Evidência:**
  - `curl -D - http://santos-tech.com/` → `302 Found`, corpo "Found", `cf-cache-status: DYNAMIC`. Isso indica redirect gerado no Traefik/Dokploy (`permanent=false`), não no Cloudflare.
  - Há cadeia de redirects: `http://…/adultos` → 302 → 301 → `/particular` (2 saltos).
  - Engloba `performance-cwv-22`.
- **Diretriz:** 301/308 são sinal forte de canônico. Um 302/307 o Google segue, mas não usa como sinal. [Google — redirecionamentos](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- **Recomendação:**
  - (1) No Cloudflare, criar um Single Redirect: `(not ssl) and (http.host eq "santos-tech.com")` → `concat("https://santos-tech.com", http.request.uri.path)`, 301, preservando a query string. A alternativa é ligar "Always Use HTTPS" e conferir o código de status via `curl` com GET e com HEAD.
  - (2) No Traefik/Dokploy, `permanent: true` no redirect de esquema. Hoje ele devolve 302 em GET e 307 em HEAD.
  - (3) Depois, ligar HSTS (achado 10), começando com max-age curto.
  - (4) Validar: `curl -I http://santos-tech.com/` deve voltar 301.
- **Nota do verificador:** rebaixado de alta. Canonical, sitemap e links já usam https, e o Google já indexa a versão https. O ganho é higiene e cortar um salto.

#### 🟡 `tecnico-rastreio-indexacao-07` — www.santos-tech.com não existe no DNS (NXDOMAIN)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** infra
- **Evidência:**
  - A consulta DoH para `www` (tipo A e CNAME) volta com Status 3 (NXDOMAIN), com autoridade `marty.ns.cloudflare.com`.
  - `curl https://www.santos-tech.com/` nem resolve o nome. O apex funciona.
  - Engloba `arquitetura-links-internos-14` e `geo-crawlers-ia-13`.
- **Diretriz:** consolidar www e raiz com 301/308. O Cloudflare tem exemplo oficial de www→raiz. [Cloudflare — redirect www→raiz](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-www-to-root/) ⚠️ a página citada não sustentou tudo (ver nota).
- **Recomendação:**
  - (1) No DNS, criar `www` como CNAME para `santos-tech.com` com proxy ligado (nuvem laranja). Outra opção é A `192.0.2.1` + AAAA `100::`, como placeholder.
  - (2) Em Redirect Rules, `https://www.*` → `https://${1}`, 301, preservando a query. Cobrir também `http://www`.
  - (3) Validar com `curl -I https://www.santos-tech.com/cursos?utm_source=x`.
  - (4) No Search Console, usar a propriedade de Domínio.
  - É tudo no painel do Cloudflare, sem mexer no repositório.
- **Nota do verificador:** `www` sem DNS não cria duplicata nem prejudica o apex. O dano real é que quem digita `www` recebe erro de conexão, o que é UX e perda de lead. Severidade ajustada de alta para média.

#### 🟡 `tecnico-rastreio-indexacao-08` — Barra final redireciona com 307 e cria cadeias de 2 saltos
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra · **Arquivos:** `docker/server.ts`, `src/router.tsx`
- **Evidência:**
  - `/cursos/` → 307 → `/cursos`, e `/particular/` → 307.
  - `http://…/sobre/` → 302 → 307: 2 saltos.
  - `/adultos/cursos/python/` → 301 → 307: 2 saltos.
  - O 307 é o padrão do `redirect()` do TanStack Router (`redirect.js:20`) na normalização de `trailingSlash`, e não há opção de mudar o statusCode ali.
  - Engloba `arquitetura-links-internos-13`.
- **Diretriz:** normalizações permanentes devem usar 301/308 ([Google — redirecionamentos](https://developers.google.com/search/docs/crawling-indexing/301-redirects)). ⚠️ A fonte citada originalmente ([erros HTTP](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)) não sustenta as afirmações sobre 10 saltos e custo de rastreio.
- **Recomendação:**
  - (1) http→https como no achado 06.
  - (2) No Cloudflare, um Single Redirect por wildcard: `https://santos-tech.com/*/` → `https://santos-tech.com/${1}`, 301, preservando a query. Antes dele, uma regra de exceção para `/blog`. ⚠️ O blog usa `/blog/` com barra como canônico, e sem a exceção vira loop.
  - (3) Em `docker/server.ts`, na `redirectLegacyParticularPath`, tirar a barra final antes de montar o `Location`, para que `/adultos/x/` chegue em 1 salto.
  - (4) Manter o 307 do TanStack como fallback. Uma alternativa é fazer o strip da barra na origem com 301, excluindo `/blog`.
- **Nota do verificador:** a fonte citada estava errada, e o 302 vem do Traefik, não do Cloudflare. A evidência técnica é verdadeira.

#### 🟡 `tecnico-rastreio-indexacao-09` — URLs com maiúsculas e barra dupla respondem 200 (duplicatas)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra · **Arquivos:** `docker/server.ts`
- **Evidência:**
  - `/Cursos`, `/SOBRE`, `//cursos` e `/PARTICULAR/CURSOS/EXCEL` respondem 200 com canonical em minúsculas.
  - Não há normalização em `docker/server.ts` nem no Cloudflare.
  - A variante `/PARTICULAR/...` renderiza layout quebrado: header, footer e sidebar juntos.
  - Engloba `arquitetura-links-internos-16`.
- **Diretriz:** o Google trata `/APPLE` e `/apple` como URLs distintas. Em força de sinal, redirect > canonical > sitemap. [Google — estrutura de URL](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- **Recomendação:**
  - Fazer no repositório, seguindo a diretriz de centralizar na plataforma própria. Em `docker/server.ts`, antes do `serveStaticAsset`, calcular `norm = pathname.replace(/\/{2,}/g,"/").toLowerCase()` e responder 301 se `norm` for diferente do path original.
  - ⚠️ **Excluir** `/assets/` (os hashes têm maiúsculas, ex.: `index-_iR9xpKv.js`), `/blog`, `/og/`, `/courses/` e arquivos com extensão.
  - Reaproveitar o ajuste de `x-forwarded-proto` que já existe (l.134-136).
  - Complemento barato: em `__root.tsx:173` e `particular.tsx:159`, comparar com `pathname.toLowerCase()`.
- **Nota do verificador:** a regra de Cloudflare proposta originalmente, sem exclusões, **derrubaria todos os bundles** com maiúscula no hash. Não aplicar como estava.

#### 🟡 `tecnico-rastreio-indexacao-15` — As 74 rotas são estáticas e poderiam ser pré-renderizadas; hoje um erro de SSR vira 500 em massa
**Status:** parcial · **Esforço:** L · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `vite.config.ts`, `docker/server.ts`, `src/start.ts`
- **Evidência:**
  - `vite.config.ts` usa `tanstackStart()` sem `prerender`.
  - Nenhuma rota tem `loader:` ou `ssr:`, ou seja, nenhuma depende de dado em runtime.
  - `src/start.ts` e `src/server.ts` convertem qualquer exceção de SSR em 500. Há um comentário registrando um incidente real de "site inteiro fora do ar" causado pelo Sentry no servidor.
  - O HTML da home tem 270 KB (34 KB em Brotli).
- **Diretriz:** o Google recomenda SSR ou renderização estática, e 5xx persistentes derrubam o rastreio. [TanStack Start — Static Prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering)
- **Recomendação:**
  - Configurar `prerender: { enabled: true, crawlLinks: false, autoSubfolderIndex: false, failOnError: true, filter: ({ path }) => !path.startsWith('/apresentacoes') && !path.startsWith('/professores') }`. O `autoStaticPathsDiscovery` já descobre as rotas. Conferir no log do build que saem exatamente as 74 URLs do sitemap.
  - Em `docker/server.ts`, servir `dist/client/<path>.html` com `Cache-Control` + `ETag` antes do worker, e manter o fallback para 404.
  - ⚠️ Testar `bun run build` dentro da imagem Alpine. O prerender roda o worker em workerd/miniflare, e esse risco não foi verificado.
  - O argumento mais forte: com `failOnError`, um erro de SSR quebra o **build**, não a produção.
- **Nota do verificador:** as linhas citadas de `src/server.ts` estavam erradas (o certo é 68-79), e são 52 cursos, não 55. O esforço L se deve à compatibilidade do `@cloudflare/vite-plugin` dentro do container.

#### 🟢 `tecnico-rastreio-indexacao-05` — Página 404 emite o título da home e "index, follow"
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/__root.tsx`, `src/lib/seo.ts`, `src/routes/index.tsx`, `src/lib/error-page.ts`, `src/routes/links.tsx`
- **Evidência:**
  - `/pagina-xyz-nao-existe` responde 404, o que está correto.
  - Mas a página sai com o `<title>`, a description e o `og:url` da home, e com `robots: index, follow`. O mesmo acontece em `/cursos/create/99-anos` e `/particular/cursos/nao-existe`.
  - Causa: o `NotFoundComponent` não tem `head()` (`__root.tsx:33-55`) e herda os defaults do root (106-112).
  - Engloba `on-page-conteudo-14`.
- **Diretriz:** a página de erro não deve emitir sinais de página válida. O Google ignora o conteúdo de respostas 4xx. [Google — JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- **Recomendação:**
  - No root: `head: ({ match }) => isNotFound(match.error) ? noindexMeta({ title: "Página não encontrada — Santos Tech", description: "A página que você procura não existe ou foi movida." }) : {...}`.
  - Trocar os defaults `HOMEPAGE_*`, que viraram código morto, por um fallback neutro "Santos Tech".
  - Tirar do root `og:url`, `og:title`, description e `twitter:*`, já que cada rota injeta os seus via `pageMeta()`.
  - Validar com `curl` numa rota inexistente, na home e num curso.
  - À parte: `/links` precisa de um `<h1>`.
  - Tudo leva menos de 2 h.
- **Nota do verificador:** com 404 real, não há impacto de ranking. É higiene. A fonte citada originalmente (erros HTTP) não sustentava a afirmação; a correta é a de JS SEO.

#### 🟢 `tecnico-rastreio-indexacao-10` — Sem HSTS e sem cabeçalhos de segurança no HTML
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra · **Arquivos:** `PENDENCIAS.md`
- **Evidência:**
  - Faltam `Strict-Transport-Security`, `X-Content-Type-Options`, CSP e `X-Frame-Options`.
  - O app `/dashboard`, que roda no mesmo host, já envia `nosniff`.
- **Diretriz:** HSTS com max-age de 1 a 12 meses, sem `includeSubDomains` até que todos os subdomínios sirvam HTTPS válido. [Cloudflare — HSTS](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/)
- **Recomendação:**
  - Passo do Henrique, no painel do Cloudflare (SSL/TLS → Edge Certificates → HSTS): max-age de 6 meses (15552000), `includeSubDomains` desligado até inventariar os registros DNS, Preload desligado e No-Sniff ligado.
  - Alternativa no repositório: os mesmos headers em `docker/server.ts`. Mas isso cobre só este app, então a borda é preferível.
  - Registrar em `PENDENCIAS.md` como `_Aguardando Henrique._`.
  - Não vender como ganho de SEO.
- **Nota do verificador:** HSTS e nosniff não afetam indexação, ranking, CWV nem citação por IA. "dashboard" é o path `/dashboard` do apex, não um subdomínio (`dashboard.santos-tech.com` dá NXDOMAIN).

#### 🟢 `tecnico-rastreio-indexacao-12` — lastmod do sitemap desatualizado na home e nas páginas infantis
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/sitemap.xml`, `CLAUDE.md`
- **Evidência:**
  - 18 URLs estão com `lastmod` 2026-06-11: home, `/sobre`, `/contato`, `/cursos`, os hubs e as 9 páginas por idade. Outras 53 estão com 2026-09-23.
  - `src/routes/index.tsx` teve 17 commits desde 11/06.
  - As 74 entradas têm `<priority>` e `<changefreq>`.
  - Engloba `arquitetura-links-internos-12`.
- **Diretriz:** o Google só usa `lastmod` quando ele é consistente e verificável, e ignora `priority` e `changefreq`. [Google — criar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **Recomendação:**
  - Corrigir à mão as 5 URLs comprovadamente desatualizadas: `/` → 2026-09-23; `/sobre` e `/contato` → 2026-08-10; `/termos` → 2026-09-23; `/privacidade` → 2026-09-03.
  - Manter as páginas infantis em 06-11, salvo se houve mudança real de conteúdo.
  - Remover `priority` e `changefreq` (ver `lacuna-infra-07`).
  - ⚠️ Não usar `git log -1` como fonte de data: ele registra refactors e ignora mudanças em componentes compartilhados.
  - Automação é opcional (esforço M): um `updatedAt` explícito no `pageMeta()`.
- **Nota do verificador:** rebaixado para baixa. São 74 URLs com rastreio fácil, e no pior caso o Google só passa a ignorar o `lastmod`.

#### 🟢 `tecnico-rastreio-indexacao-14` — Sem IndexNow: Bing e Copilot dependem do rastreio passivo
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/robots.txt`, `docker/server.ts`, `scripts/`, `public/`, `docker/Dockerfile`
- **Evidência:**
  - Não existe o arquivo `{key}.txt` em `public/`, e `/sitemap-index.xml` dá 404.
  - `docker/server.ts:78` referencia `/sitemap-0.xml`, que não existe.
  - No sitemap do blog, 4 URLs estão sem `lastmod`.
  - Não foi possível verificar o Crawler Hints sem acesso ao painel.
  - Engloba `geo-crawlers-ia-07`.
- **Diretriz:** o IndexNow funciona com uma chave `{key}.txt` na raiz e um POST com as URLs alteradas. Atende Bing, Yandex, Naver, Seznam, Yep e Amazon; o Google não participa. [IndexNow — documentação](https://www.indexnow.org/documentation)
- **Recomendação:**
  - (1) Chave hex de 32 caracteres em `public/<chave>.txt` e um `scripts/indexnow.mjs` que envia, num único POST após o build, as URLs do sitemap com `lastmod` nos últimos 7 dias.
  - (2) Bing Webmaster Tools importando do GSC, com os dois sitemaps submetidos.
  - (3) Crawler Hints só depois de ativar cache de HTML na borda (`performance-cwv-06`).
  - (4) Remover `/sitemap-0.xml` do código.
  - (5) Colocar `lastmod` no sitemap do blog.
- **Nota do verificador:** o sitemap index **não** é problema. Duas linhas `Sitemap:` no robots.txt são válidas.

#### 🟢 `tecnico-rastreio-indexacao-16` — Link "Área do aluno" passa por um 301 que rebaixa para http e depois por um 302
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra · **Arquivos:** `src/lib/auth.ts`
- **Evidência:**
  - `src/lib/auth.ts:12` define `APP_URL = "https://santos-tech.com/dashboard"`, usado em `site-header.tsx:291,324`.
  - `/dashboard` → 301 com `Location: http://…/dashboard/` → 302 para https. São 2 saltos, e o primeiro rebaixa para http.
- **Diretriz:** o Google prefere HTTPS como canônica. Evitar redirecionar para HTTP e preferir um salto único. [Google — consolidar URLs duplicadas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- **Recomendação:**
  - (1) `APP_URL = "https://santos-tech.com/dashboard/"`, com barra. Essa URL responde 200 sem redirect.
  - (2) No nginx do dashboard (outro app), `absolute_redirect off;`.
  - (3) `X-Robots-Tag: noindex` no `/dashboard/`, que hoje é indexável. **Sem** Disallow junto, para não repetir o problema do achado 04.
  - (4) O HSTS (achado 10) atenua o problema no meio-tempo.
- **Nota do verificador:** o link só aparece para usuário logado, então não é problema de indexação. É UX e segurança. A fonte citada originalmente não sustentava a afirmação.

#### 🟢 `tecnico-rastreio-indexacao-17` — Blog: páginas 404 com canonical para /blog/ e "index, follow"
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:**
  - `/blog/xyz-nao-existe-123` responde 404, mas carrega `canonical` para `/blog/` e `robots: index, follow`.
  - O corpo é byte a byte igual ao do índice do blog (35.579 bytes).
  - No sitemap do blog, 4 URLs de listagem estão sem `lastmod`.
  - Engloba `blog-integracao-14`.
- **Diretriz:** o Google ignora o conteúdo de páginas 4xx, e o canonical não deve ser usado para "consolidar" 404. ⚠️ A fonte citada ([erros HTTP](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)) não trata de 404 com canonical.
- **Recomendação:**
  - No frontend do blog (o repositório não foi localizado localmente), criar uma página 404 própria: title "Página não encontrada · Blog Santos Tech", sem canonical, com noindex e um link para `/blog/`.
  - Colocar `lastmod` nas 4 listagens.
  - Localizar o repositório real antes de executar.
- **Nota do verificador:** não afeta a indexação, porque o status já é 404 de verdade. É higiene.

#### 🟢 `tecnico-rastreio-indexacao-18` — Sitemap mantido à mão sem checagem automática (hoje bate 74/74)
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/sitemap.xml`, `CLAUDE.md`, `package.json`
- **Evidência:**
  - Em 24/09, as 74 `<loc>` do repositório e da produção são idênticas.
  - Todas respondem 200 com canonical igual à `<loc>`.
  - Os 52 slugs de `particular.cursos.*` batem 1:1 com o sitemap.
  - Não existe workflow nem script que valide isso. Hoje é só uma regra escrita no `CLAUDE.md`.
- **Diretriz:** o sitemap deve listar URLs absolutas, na forma canônica. [Google — criar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **Recomendação:** criar `scripts/check-sitemap.mjs` e encadear no gate (`lint`). O script:
  - (a) faz glob em `src/routes/*.tsx`, ignora `__root`, converte nomes em paths e deduplica layout + index;
  - (b) exclui arquivos que contêm `noindexMeta(` (⚠️ isso não aparece em `routeTree.gen.ts`);
  - (c) compara com `public/sitemap.xml` nos dois sentidos;
  - (d) valida o prefixo `https://santos-tech.com/` e a ausência de barra final.
  
  Isso também protege o bot de WhatsApp, que só lê as URLs do sitemap.
- **Nota do verificador:** hoje há 0 divergências. O risco é futuro.

#### 🟢 `tecnico-rastreio-indexacao-20` — /llms.txt ausente na raiz, enquanto o blog publica o dele
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/`, `docker/server.ts`, `PENDENCIAS.md`
- **Evidência:**
  - `/llms.txt` e `/llms-full.txt` dão 404.
  - `/blog/llms.txt` dá 200, no formato correto.
  - `robots.txt:2` diz "Permite indexação completa por crawlers tradicionais e LLMs".
  - Engloba `geo-crawlers-ia-15`.
- **Diretriz:** o Google Search **ignora** o llms.txt; ele não ajuda nem prejudica. É uma convenção de mercado ([llmstxt.org](https://llmstxt.org)). [Google — otimização para IA generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- **Recomendação:**
  - Opcional, como higiene de GEO. Criar um `public/llms.txt` estático, que já é servido por `docker/server.ts:39` sem mudança.
  - Conteúdo: H1 "Santos Tech", um blockquote com `ORG.shortDescription`, NAP, os programas, as 52 URLs de curso particular e um apontamento para `/blog/llms.txt`.
  - Adicionar ao `CLAUDE.md` a regra "mexeu em rota, atualiza sitemap **e** llms.txt".
  - Não criar `llms-full.txt`.
  - Não confundir com o "llms.txt central" da infraestrutura, que é documentação de API autenticada.
- **Nota do verificador:** sem promessa de ganho no Google. A fonte citada originalmente não falava de llms.txt.

### 5.2 Dados estruturados (8 achados: 🟡 2 · 🟢 6)

#### 🟡 `dados-estruturados-04` — Hubs /particular e /cursos sem ItemList (lista de cursos para o Google)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/particular.index.tsx`, `src/components/particular-faq-items.ts`, `src/components/course-skins/shared.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - `/particular` emite só Organization e WebSite. O arquivo `particular.index.tsx` não importa `JsonLd`, embora a página tenha 52 links de curso e um FAQ visível.
  - `/cursos` emite só BreadcrumbList.
  - Engloba `geo-crawlers-ia-02`.
- **Diretriz:** o rich result Course list exige pelo menos 3 cursos, marcados com ItemList (ListItem com `position` e `url`) numa página-resumo. `name` e `description` são obrigatórios. O rich result só é exibido em inglês. [Google — Course list](https://developers.google.com/search/docs/appearance/structured-data/course)
- **Recomendação:**
  - Criar `buildCourseListSchema(items)` em `seo.ts`, gerando um ListItem com `position` e `url` absoluta para cada curso.
  - Emitir em `particular.index.tsx` com os 52 cursos, a partir da **mesma** lista que gera os cards, e em `cursos.index.tsx` com os programas infantis.
  - Em `/particular`, acrescentar BreadcrumbList e FAQPage. O FAQ já está visível, então a marcação bate com a página.
  - As URLs devem ser iguais ao canonical de cada curso e ao sitemap.
  - Não prometer carrossel: o ganho esperado é consistência de entidade para o Google e para as IAs.
  - Preço na FAQ é decisão do Henrique (§6, item 7).
- **Nota do verificador:** rebaixado de alta. Nenhum rich result visível é perdido em pt-BR hoje: o Course list só aparece em inglês e o FAQ foi descontinuado.

#### 🟡 `dados-estruturados-11` — Cursos sem offers, carga horária e imagem no JSON-LD, embora tudo esteja visível na página
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/components/particular-course-page.tsx`, `src/components/course-skins/shared.tsx`
- **Evidência:**
  - A página de Excel mostra "12x de R$ 380,46 sem juros no cartão ou R$ 4.565,50 à vista", mas o Course não tem `offers` nem `image`. A imagem `/og/particular/excel.png` existe, em 1200x630.
  - A página infantil mostra "40 Aulas · 80h Carga horária · 40 Semanas", mas o Course não tem `courseWorkload`, `courseSchedule` nem `image`.
  - Engloba `geo-crawlers-ia-22`.
- **Diretriz:** quanto mais propriedades recomendadas, melhor. O rich result "Course info" foi descontinuado, então o ganho é semântico, para LLMs e Bing. [Google — políticas de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- **Recomendação:**
  - `image = absoluteUrl(inferOgImagePath(path))` nos dois builders. Para isso, exportar a função, hoje privada em `seo.ts:410`.
  - No particular: `offers` com `{@type Offer, price 4565.50, priceCurrency "BRL", availability InStock, url}`, calculado da mesma fonte do card (TIER_META × MARKUP em `shared.tsx`).
  - No infantil: `courseWorkload "PT80H"` e `courseSchedule {Weekly, repeatCount 40}`, lidos dos `metrics` da rota.
  - ⚠️ **Não** emitir `offers` no curso infantil enquanto o preço não aparecer na página do curso (depende de `geo-crawlers-ia-01`).
  - `priceRange`: ver `dados-estruturados-13`.
  - Validar no Rich Results Test e no validator antes do merge.
- **Nota do verificador:** a sub-recomendação original de colocar `offers` no infantil marcaria um preço que não está visível, exatamente o que a fonte proíbe. Por isso o achado ficou como parcial.

#### 🟢 `dados-estruturados-03` — `CourseInstance.instructor` como Organization gera ERRO no Schema Markup Validator
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`
- **Evidência:**
  - `seo.ts:347-351` define `instructor: {"@type":"Organization","name":"Santos Tech"}`.
  - O validator.schema.org acusa 1 erro em `/particular/cursos/excel`: `INVALID_OBJECT`, esperado Person ou Role.
  - O erro se repete nas 52 páginas de curso particular.
- **Diretriz:** no schema.org, `CourseInstance.instructor` aceita Person ou Role. [schema.org — CourseInstance](https://schema.org/CourseInstance)
- **Recomendação:**
  - Remover o bloco `instructor` em `buildParticularCourseSchema()`. O `provider` já identifica a escola.
  - Não trocar por uma Person genérica. Só usar Person quando houver um professor nomeado e visível na página (ver `on-page-conteudo-09`).
  - Revalidar no validator depois.
- **Nota do verificador:** são 52 páginas, não 55. A severidade é baixa porque o rich result "Course info", o único que consumia `instructor`, foi descontinuado.

#### 🟢 `dados-estruturados-07` — A home emite 4 Course com URL de âncora (`/cursos#tecnologia`)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:**
  - `index.tsx:328-360` monta os `HOME_SCHEMAS` com `/cursos#tecnologia` (2 vezes) e `/cursos#informatica` (2 vezes).
  - As páginas reais são `/cursos/junior` e `/cursos/create`, e têm outros nomes e outras idades.
- **Diretriz:** a marcação deve ficar na página que descreve o item, e a URL deve ser a canônica. O "Course info" foi descontinuado. [Google — políticas de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- **Recomendação:**
  - Remover os 4 Course da home e manter só o FAQPage. Os Course ficam nas páginas de detalhe.
  - Se quiser uma lista na home, usar um único ItemList com URLs reais.
  - Mais valioso do que o schema: unificar nome e idade dos programas (`on-page-conteudo-01`) e apontar header e cards para as páginas reais (`arquitetura-links-internos-03`).
- **Nota do verificador:** não há rich result em jogo, e a marcação atual não tem risco de penalidade.

#### 🟢 `dados-estruturados-08` — Organization + WebSite repetidos em todas as rotas, inclusive na 404 e em páginas noindex
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:**
  - `__root.tsx:194` emite os dois blocos em todas as rotas.
  - Eles aparecem também na 404 e em `/professores/tecnologia-create`, que tem Disallow e noindex.
- **Diretriz:** Organization na home ou numa página "sobre"; WebSite (nome do site) na home. [Google — nomes de site](https://developers.google.com/search/docs/appearance/site-names) ⚠️ a URL citada originalmente estava quebrada; esta é a correta.
- **Recomendação:**
  - Mover a emissão para `src/routes/index.tsx`. Opcionalmente, repetir o Organization em `/sobre`.
  - As demais rotas referenciam `{"@id": "https://santos-tech.com/#organization"}`, como já fazem em `provider` e `publisher`.
  - Atualizar o comentário de `seo.ts:184`: o sitelinks search box foi descontinuado em 11/2024.
- **Nota do verificador:** o nó tem cerca de 5 KB brutos (2 KB comprimidos), não os ~9 KB citados. O Google diz que "não precisa" repetir em todas as páginas, não que é proibido. É higiene.

#### 🟢 `dados-estruturados-13` — `priceRange: "R$$$"` não comunica faixa real
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`
- **Evidência:**
  - `seo.ts:180` define `priceRange: "R$$$"`.
  - A página mostra R$ 539,90/mês, matrícula de R$ 299,90 e material de R$ 690/ano. A colônia custa R$ 939,90/semana e o Excel, R$ 4.565,50.
  - Engloba `seo-local-09`.
- **Diretriz:** `priceRange` é texto livre, exibido quando tem menos de 100 caracteres. [Google — Local business](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- **Recomendação:** escolher uma de duas formas:
  - (a) `"$$$"`, a escala normalizada sem o "R". É a recomendada.
  - (b) Uma faixa numérica com unidade, ex.: `"R$ 380 – R$ 540/mês"`.
  - ⚠️ Não usar "R$ 380 – R$ 940", que mistura mensalidade com semana de colônia.
  - Qual produto destacar é decisão do Henrique.
- **Nota do verificador:** o Google aceita "$$$" como formato válido.

#### 🟢 `dados-estruturados-15` — `audience` no nó Organization gera aviso UNKNOWN_FIELD
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:** `seo.ts:168-172` coloca 3 objetos EducationalAudience no Organization. O validator dá 6 avisos por página, porque `audience` não é propriedade de Organization nem de Place.
- **Diretriz:** usar só propriedades definidas para o tipo. [schema.org — validador](https://schema.org/docs/validator.html)
- **Recomendação:** remover `audience` de `buildOrganizationSchema()` e colocar nos Course:
  - infantil: `{EducationalAudience, educationalRole "student", audienceType "Crianças e adolescentes de 5 a 15 anos"}`. ⚠️ A faixa depende da decisão 1 do §6.
  - particular: `audienceType "Adultos e profissionais — qualquer idade"`.
  
  Revalidar no validator depois.
- **Nota do verificador:** é um aviso, não um erro, e não há penalidade.

#### 🟢 `dados-estruturados-19` — Serialização do JSON-LD não escapa `<`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:**
  - `json-ld.tsx:32` usa `JSON.stringify(item)` sem escape.
  - Hoje nenhum bloco da home contém `<`, mas os dados do curso de SQL já têm `<` e `>` (`particular.cursos.sql.tsx:55`).
- **Diretriz:** o conteúdo de um `<script>` não pode encerrar a tag antes da hora. [WHATWG — restrições do elemento script](https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements)
- **Recomendação:**
  - Criar um helper `serializeJsonLd` que substitui `<` por `<`, e também `>` e `&`.
  - Atualizar o comentário que diz "XSS-safe por construção".
  - Adicionar um teste. O repositório não tem test runner, então: vitest (preferível) ou um script no gate.
  - Não é urgente.
- **Nota do verificador:** a fonte citada originalmente não sustentava a afirmação; a correta é a spec WHATWG. O risco é de regressão, não um bug ativo.

### 5.3 On-page e conteúdo (10 achados: 🟡 9 · 🟢 1)

#### 🟡 `on-page-conteudo-01` — Dois catálogos infantis paralelos, com faixas etárias e nomes conflitantes
**Status:** parcial · **Esforço:** M · **Impacto:** alto · **Escopo:** negócio · **Arquivos:** `src/routes/index.tsx`, `src/routes/cursos.index.tsx`, `src/routes/cursos.create.index.tsx`, `src/routes/cursos.junior.index.tsx`, `src/components/site-header.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - A home, `/cursos` e o header vendem 4 produtos: Tecnologia Júnior 5–9, Tecnologia Create 10–15, Informática Júnior e Informática Create (`index.tsx:92-136`, `cursos.index.tsx:67-113`, `site-header.tsx:23-30`).
  - As páginas de programa dizem "CREATE (8 a 14 anos)" e "JR (5 a 8 anos)", inclusive no JSON-LD (`cursos.create.index.tsx:37-39`, `cursos.junior.index.tsx:36-38`).
  - O header, dentro da própria página que diz "8 a 14", anuncia 10–15.
- **Diretriz:** imprecisões são evidência de qualidade baixa, e a marcação deve bater com o texto visível. [Search Quality Rater Guidelines (PDF)](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)
- **Recomendação:**
  - **Decisão do Henrique (§6, item 1)**: qual trilha é vendida hoje.
  - Recomendação técnica: tratar o modelo de 4 produtos como canônico.
  - Se JR/CREATE não é mais vendido: 301 de `/cursos/junior(/*)` e `/cursos/create(/*)` para as trilhas, e tirar as 11 URLs do sitemap **no mesmo commit** (o bot de WhatsApp lê o sitemap).
  - Se JR/CREATE é o currículo por ano da mesma oferta: reescrever title, H1 e `typicalAgeRange`, e linkar essas páginas a partir da home.
  - Padronizar a frase geral ("5 a 15 anos") em `index.tsx:55/:468` e `seo.ts:56/169`.
  - Validar com `curl --compressed | grep -aoE '[0-9]+ a [0-9]+ anos' | sort | uniq -c`.
- **Nota do verificador:** a contradição é real, não são produtos diferentes. A colônia (5 a 14) é um produto separado. ⚠️ Este achado bloqueia `arquitetura-links-internos-03` e `estrategia-conteudo-intencao-05`/`-18`.

#### 🟡 `on-page-conteudo-03` — Promessas de resultado profissional e alegações de autoridade não verificáveis
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** negócio · **Arquivos:** `src/lib/seo.ts`, `src/routes/particular.cursos.ads.tsx`, `src/routes/particular.cursos.suporte.tsx`, `src/components/course-skins/shared.tsx`, `src/components/course-skins/common.tsx`, `src/components/particular-course-page.tsx`, `src/routes/sobre.index.tsx`
- **Evidência:**
  - Description do curso ADS: "Do zero ao mercado de TI em até 6 meses".
  - Description do curso de Suporte: "Entre na área de TI em até 60 dias".
  - `ORG.description` (em todas as páginas): "referência em ensino de tecnologia particular em Ribeirão Preto" e "certificado reconhecido em todo o Brasil" (`seo.ts:56`, `338-339`, `shared.tsx:146-147`, `common.tsx:187`).
  - Title de `/sobre`: "Escola Premium".
- **Diretriz:** alegações exageradas e títulos que prometem mais do que a página entrega rebaixam a nota de qualidade. Página que envolve dinheiro e promessa de carreira pede precisão. [Rater Guidelines (PDF)](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)
- **Recomendação** (texto aprovado pelo dono):
  - "Trilha de 48 aulas (~6 meses no ritmo padrão)".
  - "Preparação para CompTIA A+ em 48 aulas".
  - "Certificado de conclusão emitido pela Santos Tech (curso livre)".
  - Trocar "referência…" por um fato ("329 avaliações 5,0 no Google").
  - Em `/sobre`, trocar "Premium" por atributos concretos: turmas de até 10, equipamentos, endereço.
- **Nota do verificador:** as Rater Guidelines não são fator direto de ranking. O item realmente problemático é o "certificado reconhecido em todo o Brasil" para um curso livre.

#### 🟡 `on-page-conteudo-04` — Fatos numéricos e cadastrais divergem entre JSON-LD, texto e Termos
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/particular.index.tsx`, `src/components/testimonials.tsx`, `src/routes/sobre.index.tsx`, `src/routes/termos.tsx`, `src/components/course-skins/shared.tsx`, `src/routes/index.tsx`
- **Evidência:**
  - Número de cursos: "43 cursos" (`seo.ts:56`, `:58`) contra "52 cursos" (`particular.index.tsx:54`). Existem 52 rotas.
  - Avaliações: "mais de 325" no slogan contra `reviewCount` 329 e o texto "329 avaliações".
  - Razão social: `legalName` "Santos Tech — Escola de Tecnologia" contra "R. L. DOS SANTOS GAMES" nos Termos.
  - E-mail: `ceo@santos-games.com`, em outro domínio.
- **Diretriz:** o dado estruturado deve espelhar o conteúdo visível. [Google — políticas de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- **Recomendação:**
  - Uma constante `COURSE_COUNT` derivada da lista real de cursos.
  - Um `ORG.rating` único, usado em todos os lugares.
  - `legalName` igual à razão social (`seo-local-04`).
  - E-mail em `@santos-tech.com` (§6, item 4).
  - Deixar claro que "Aula Online se Precisar" é exceção (`lacuna-conteudo-03`).
- **Nota do verificador:** "mais de 325" é tecnicamente verdade. Rebaixado de alta: é inconsistência, não violação.

#### 🟡 `on-page-conteudo-05` — Titles dos 52 cursos particulares em micro-boilerplate
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/particular.cursos.canva.tsx`, `...ads.tsx`, `...davinci.tsx`, `...photoshop.tsx`, `...premiere.tsx`
- **Evidência:**
  - Os 52 titles seguem "Curso de … em Ribeirão Preto — Santos Tech", e 48 deles encaixam "Particular" no meio.
  - Média de 72 caracteres; o mais longo tem 94 (ADS). 29 passam de 70 caracteres, e 7 têm dois travessões.
  - Nenhum é duplicado.
- **Diretriz:** evitar texto repetido entre títulos de páginas parecidas e usar a marca de forma concisa. [Google — title links](https://developers.google.com/search/docs/appearance/title-link)
- **Recomendação:**
  - Formato "Curso particular de {Ferramenta} em Ribeirão Preto | Santos Tech".
  - Variar o benefício nos 10 a 15 cursos mais disputados (ex.: "Excel do básico ao VBA").
  - ADS: "Formação em Análise e Desenvolvimento de Sistemas (ADS)" (ver `lacuna-conteudo-04`).
  - Eliminar o travessão duplo e deixar o essencial nos primeiros ~55 caracteres.
  - Fazer junto com `arquitetura-links-internos-09`, que cria a fonte única de nomes.
- **Nota do verificador:** não existe limite oficial de 70 caracteres; o problema documentado é o padrão repetitivo.

#### 🟡 `on-page-conteudo-06` — Title e description longos na home, em /cursos e em /camps; a description da home promete "cursos particulares" que a página não mostra
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/cursos.index.tsx`, `src/routes/cursos.camps.tsx`
- **Evidência:**
  - Tamanho em caracteres (title/description): home 93/368, `/cursos` 88/279, `/camps` 80/317.
  - A description da home cita cursos particulares, mas o texto visível da home tem 0 menções a "particular" e 0 links para `/particular`.
- **Diretriz:** o Google trunca pela largura da tela e prefere o conteúdo da página quando a description não bate com ele. [Google — title links](https://developers.google.com/search/docs/appearance/title-link) ⚠️ a fonte não sustenta literalmente "1–2 frases".
- **Recomendação:**
  - Home: description com ~150–160 caracteres, sobre o que a página mostra. Unificar `__root.tsx:94-97` com `index.tsx:52-55`.
  - Tirar a frase dos particulares até existir uma seção ou um link (`arquitetura-links-internos-01`).
  - Title da home com ~60–70 caracteres, ex.: "Escola de Tecnologia para Crianças em Ribeirão Preto | Santos Tech".
  - `/cursos` e `/camps`: title com até ~70 caracteres e description com até ~160.
  - Conferir no Search Console depois de 2–4 semanas.
- **Nota do verificador:** a doc oficial aceita a marca no início do title. O ponto mais forte do achado é a promessa sem conteúdo correspondente.

#### 🟡 `on-page-conteudo-07` — H1 das páginas principais não carrega a intenção de busca
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/routes/cursos.create.index.tsx`, `src/components/course-page.tsx`, `src/routes/contato.tsx`, `src/routes/particular.index.tsx`, `src/components/particular-course-page.tsx`
- **Evidência:** H1 atuais:
  - home: "Onde seu filho aprende a criar a tecnologia — não só a usar."
  - `/cursos`: "Escolha o caminho do seu filho"
  - `/cursos/create`: "CREATE"
  - `/cursos/create/8-9-anos`: "Fundamentos do Arcade"
  - `/contato`: "Vamos conversar"
  - `/particular`: "Comece do zero ou se especialize"
  - cursos: "Excel Avançado", "Python para Automações"
  
  Nenhum contém "curso", "particular", "Ribeirão Preto" ou a faixa etária.
- **Diretriz:** quando o `<title>` é boilerplate ou pouco descritivo, o Google usa o título visualmente principal (o H1). [Google — title links](https://developers.google.com/search/docs/appearance/title-link)
- **Recomendação:**
  - H1 descritivo, com o slogan mantido como eyebrow ou `<p>`.
  - Primeiro nas 5 páginas principais: home, `/cursos`, `/cursos/create`, `/contato` e `/particular` (esforço S).
  - Os cursos particulares vêm numa 2ª fase: `particular-course-page.tsx:251` e as 8 skins que têm H1 próprio (design, ia, ide, informatica, marketing, oficina, planilha, ti).
  - Não repetir "Ribeirão Preto" mecanicamente em todos os H1.
- **Nota do verificador:** o `<title>` já é descritivo, então o ganho é provável, não crítico. A linha citada de `particular-course-page` estava errada.

#### 🟡 `on-page-conteudo-08` — De 39% a 59% do texto de cada curso particular é boilerplate repetido em 52 URLs
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/particular-course-page.tsx`, `src/components/course-skins/common.tsx`, `src/components/course-skins/shared.tsx`, `src/components/particular-faq-items.ts`
- **Evidência:**
  - Em Excel, Python e Canva, 51 trechos (447 palavras) são idênticos. Isso dá 39% do texto em Excel, 59% em Python e 49% em Canva.
  - Os blocos repetidos: os mesmos H2, os 10 diferenciais, os critérios de professor, formato, pagamento e o FAQ genérico.
- **Diretriz:** conteúdo com informação e análise originais. [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) ⚠️ a fonte não sustenta uma "proporção mínima" de texto exclusivo.
- **Recomendação:**
  - Primeiro, criar um bloco exclusivo obrigatório no `CourseData`: projeto final concreto, ferramentas e versões, exemplos e professor responsável.
  - Só depois enxugar os diferenciais e os critérios, movendo "método", pagamento e critérios para o hub `/particular`, com link.
  - Enxugar sem acrescentar conteúdo próprio não melhora a unicidade das páginas.
- **Nota do verificador:** reenquadrado. O objetivo é relevância e diferenciação entre 52 URLs quase gêmeas, não evitar uma ação manual.

#### 🟡 `on-page-conteudo-09` — Nenhuma página de autoridade: sem professor, fundador ou equipe nomeada; /sobre sem história nem ano de fundação
**Status:** confirmado · **Esforço:** M · **Impacto:** médio · **Escopo:** negócio · **Arquivos:** `src/routes/sobre.index.tsx`, `src/components/course-skins/shared.tsx`, `src/components/course-skins/common.tsx`, `src/lib/seo.ts`, `src/routes/professores.tecnologia-create.tsx`, `src/routes/sobre.visao.tsx`
- **Evidência:**
  - `/sobre` (550 palavras) não tem nenhum nome, foto de equipe, formação ou data de fundação.
  - As rotas `/professores/*` são material restrito, com noindex.
  - Os cursos particulares listam só critérios abstratos em "Quem está do outro lado da mesa".
  - No JSON-LD, `instructor` é a Organization.
- **Diretriz:** avaliadores procuram quem criou o conteúdo, o que o site diz de si e o que terceiros dizem ("Who, How, Why"). A confiança é o componente central. [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Recomendação** (decisão do dono, porque envolve dados pessoais dos colaboradores):
  - (1) `/sobre/equipe`, ou uma seção em `/sobre`, com fundador(es), professores, formação, tempo de casa, foto real e Person JSON-LD.
  - (2) "Fundada em {ano}" e 2–3 parágrafos de história.
  - (3) Um campo opcional `professor` no `CourseData`, usado também como `instructor` Person.
  - (4) Avaliar renomear `/professores` para `/material-professor`.
- **Nota do verificador:** o impacto caiu de alto para médio. Para uma escola local, o Perfil da Empresa e as avaliações pesam mais.

#### 🟡 `on-page-conteudo-13` — `knowsAbout` com frases de busca e "Ribeirão Preto" repetido: lista de palavras-chave invisível
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`
- **Evidência:**
  - `seo.ts:118-167` preenche `knowsAbout` com frases como "Curso de Excel avançado em Ribeirão Preto" e "Escola de TI Ribeirão Preto".
  - O `alternateName` inclui "Santos Tech Ribeirão Preto".
  - O bloco sai em todas as 74 páginas e nada dele aparece como texto visível.
  - Engloba `dados-estruturados-16`.
- **Diretriz:** repetir frases ou listar cidades de forma artificial é keyword stuffing ([Google — políticas de spam](https://developers.google.com/search/docs/essentials/spam-policies)), e não se deve marcar conteúdo que não está visível (sd-policies).
- **Recomendação:**
  - Reduzir para 8–12 tópicos, sem cidade e sem "Curso de": "Programação para crianças", "Python", "Excel", "Power BI", "Inteligência artificial" etc. O ideal é usar `Thing` com `sameAs` para a Wikipedia em português.
  - Deixar a localização só em `address`, `geo` e `areaServed`.
  - `alternateName` só com "Escola Santos Tech" (e, se quiser, "Santos Tech Particular").
  - Leva menos de 1 h.
- **Nota do verificador:** as frentes contaram números diferentes (43, 40 e 46). O valor real é 40 entradas, 30 delas com a cidade.

#### 🟢 `on-page-conteudo-15` — Anos vencidos no conteúdo ("em 2025", "requisitada de 2026")
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/particular.cursos.seo.tsx`, `...power-apps.tsx`, `...redes-sociais.tsx`, `...autocad.tsx`, `...modelagem-3d.tsx`, `...revit.tsx`, `...excel-ia.tsx`
- **Evidência:**
  - `seo.tsx:31`: "em 2025". `power-apps.tsx:31`: "em 2025". `redes-sociais.tsx:43`: "em 2025". `excel-ia.tsx:32`: "requisitada de 2026".
  - AutoCAD, SketchUp, Lumion e Revit 2025 são versões de software.
- **Diretriz:** datas desatualizadas podem levar o Google a reescrever o título. [Google — title links](https://developers.google.com/search/docs/appearance/title-link) ⚠️ isso vale para o `<title>`, não para o corpo da página.
- **Recomendação:**
  - Remover o ano das frases vencidas ("hoje", "atuais").
  - Manter as versões de software, centralizadas numa constante por curso.
  - Trocar "requisitada de 2026" por "mais requisitada do mercado".
  - Opcional: um lint com grep por anos.
  - Nunca colocar ano em title ou H1.
- **Nota do verificador:** metade dos itens são versões de software válidas.

### 5.4 Arquitetura e links internos (12 achados: 🟠 2 · 🟡 7 · 🟢 3)

#### 🟠 `arquitetura-links-internos-01` — O hub /particular e os 52 cursos (53 páginas, 72% do sitemap) não recebem nenhum link: nem do header, nem do footer, da home, de /cursos ou do blog
**Status:** parcial · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/components/site-header.tsx`, `src/routes/index.tsx`, `src/components/site-footer.tsx`, `src/routes/__root.tsx`, `src/routes/cursos.index.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - O HTML de produção tem 0 `href="/particular"` na home, em `/cursos`, `/sobre`, `/contato` e `/cursos/create/8-9-anos`.
  - A home tem só 12 links internos únicos, todos do header ou do footer.
  - `site-header.tsx:22-38` não tem nenhum item para `/particular`.
  - Um rastreio que parte da home e segue só os links (sem JS, excluindo o blog) alcança **8 das 74** URLs do sitemap: `/`, `/contato`, `/cursos`, `/cursos/camps`, `/privacidade`, `/sobre`, `/sobre/visao` e `/termos`.
- **Diretriz:** toda página importante deve receber link de pelo menos uma outra página do site; a maioria das páginas novas é descoberta por links, não pelo sitemap. [Google — links rastreáveis](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- **Recomendação:**
  - (1) 1º commit, sem decisão de marca:
    - no footer, o hub `/particular` (ver `-06`: só o hub, sem listar cursos);
    - um CTA textual com `<a href="/particular">` na home e em `/cursos`;
    - no layout de `/particular`, links de volta para `/`, `/cursos`, `/contato` e `/blog` (ver `-02`).
  - (2) Um item "Cursos particulares" no menu principal muda o posicionamento de uma marca hoje infantil. **É decisão do Henrique (§6, item 6).** Recomendo fazer, com rótulo separado dos programas infantis.
  - (3) No mesmo commit, trocar as âncoras `#tecnologia` e `#informatica` por links reais (`-03`).
  - (4) Validar com grep no HTML de produção e, depois, no Search Console > Links.
- **Nota do verificador:** a nota defendia "crítica" (72% do sitemap só é encontrado pelo sitemap); o registro final ficou em alta. Estar órfã não impede a indexação, porque o sitemap existe e a página responde 200. O dano é rastreio lento ou parcial, e crawlers de IA sem JS não têm nenhum caminho até essas páginas. A frase sobre Bing/Copilot foi retirada.

#### 🟠 `arquitetura-links-internos-03` — Programas infantis (/cursos/create, /cursos/junior, 9 páginas por faixa etária e /cursos/academies) fora da navegação: os cards vão para o WhatsApp e o header aponta para âncoras
**Status:** confirmado · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/routes/cursos.index.tsx`, `src/components/site-header.tsx`, `src/routes/cursos.academies.tsx`, `src/routes/index.tsx`
- **Evidência:**
  - `cursos.index.tsx:131`: cada card é inteiro um `<a href={WHATSAPP} target="_blank">`.
  - O header aponta para `/cursos#tecnologia` e `/cursos#informatica`.
  - `/cursos/academies` só recebe link de si mesma.
  - Pelo rastreio a partir da home, essas 12 páginas não são alcançadas.
- **Diretriz:** o sitemap é complemento, não substitui os links. Páginas importantes precisam ser alcançáveis pela navegação. [Google — sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- **Recomendação:**
  - (1) No header, Tecnologia Júnior → `/cursos/junior`, Tecnologia Create → `/cursos/create`, e "Academies" em `NAV_EXTRAS`.
  - (2) Em `/cursos`, **não** trocar o card inteiro por link interno. O WhatsApp continua como ação principal, e entra um link-texto "Ver currículo e idades". O wrapper do card vira `<div>`, para não aninhar `<a>`.
  - (3) Um bloco "Outros programas" com `/cursos/academies` e `/cursos/camps`.
  - (4) Em `index.tsx`, trocar pelos endereços reais as URLs com `#` usadas no schema.
  - (5) Informática não tem página própria: manter a âncora até a decisão (ver `estrategia-conteudo-intencao-05`).
  - (6) Medir no PostHog os cliques no WhatsApp a partir de `/cursos`, para confirmar que a conversão não caiu.
- **Nota do verificador:** severidade alta mantida. As 12 páginas de currículo dependem só do sitemap e de um post do blog. ⚠️ **Depende da decisão 1 do §6** (idades e programas). Se JR/CREATE forem redirecionados, os links passam a apontar para as páginas novas.

#### 🟡 `arquitetura-links-internos-02` — /particular é uma ilha também no sentido inverso: não linka a home, /cursos, /contato, /sobre, /blog, Privacidade nem Termos
**Status:** parcial · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/routes/particular.tsx`, `src/routes/__root.tsx`, `src/components/site-footer.tsx`
- **Evidência:**
  - `__root.tsx:196-198` não renderiza SiteHeader nem SiteFooter em `/particular`.
  - A sidebar tem só os cursos, o WhatsApp e o login.
  - As 52 páginas de curso não têm link para `/`, `/privacidade` nem `/termos`.
- **Diretriz:** a estrutura do site deve ser lógica e navegável em todas as páginas. [Google — sitelinks](https://developers.google.com/search/docs/appearance/sitelinks)
- **Recomendação:**
  - (a) Logo e nome como `<Link to="/">`, na sidebar e na topbar mobile.
  - (b) Um rodapé enxuto no layout `particular.tsx`, que vale para o hub e para os 52 cursos: Site institucional, Cursos infantis, Contato, Sobre, Blog, Privacidade, Termos, Cookies, endereço e telefone.
  - (c) Não inflar a sidebar com links institucionais.
  - Fazer junto com `-01`.
- **Nota do verificador:** o hub `/particular` **tem** footer; só as 52 páginas de curso não têm. Rebaixado de crítica, porque as páginas são indexáveis. O acesso à Política de Privacidade é um ponto de LGPD.

#### 🟡 `arquitetura-links-internos-04` — O corpo da home não tem nenhum link interno contextual; todos os CTAs vão para o WhatsApp
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`
- **Evidência:**
  - `index.tsx` não usa `<Link>`.
  - Os hrefs do corpo são o WhatsApp (linhas 262, 418, 623, 725, 1039 e 1114), `#programas` e o Instagram.
  - As 4 faixas de produto não linkam as páginas de programa.
- **Diretriz:** linkar páginas relevantes com texto-âncora que descreva o destino. [Google — links rastreáveis](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) ⚠️ A frase "linkar de forma mais agressiva", atribuída ao Google, não está na fonte.
- **Recomendação:**
  - Em cada ProductBand, o h3 vira `<Link to="/cursos/junior">` (ou `/cursos/create`), mais um link "Ver o currículo do Tecnologia Create" ao lado do CTA do WhatsApp.
  - No FAQ, linkar `/cursos/camps` e `/contato`.
  - Um teaser para `/particular` e outro para `/sobre`.
  - Meta: 6 a 10 links contextuais, sem número fixo.
- **Nota do verificador:** rebaixado. As páginas de programa já são alcançáveis pelo header, então não há problema de descoberta, só de contexto e âncora.

#### 🟡 `arquitetura-links-internos-06` — Footer sem navegação e sem endereço/telefone: só Privacidade, Termos e Cookies
**Status:** parcial · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/components/site-footer.tsx`, `src/lib/seo.ts`, `src/routes/__root.tsx`
- **Evidência:**
  - `site-footer.tsx:83-101` renderiza só "©", `/privacidade`, `/termos` e o botão Cookies.
  - Não tem `<nav>`, endereço, telefone, programas, `/particular`, `/contato`, `/sobre`, `/blog` nem Instagram.
  - Engloba `on-page-conteudo-10`.
- **Diretriz:** o rodapé faz parte da navegação. O relatório Links do Search Console serve para garantir que as páginas mais linkadas sejam as importantes para o negócio. [Search Console — relatório Links](https://support.google.com/webmasters/answer/9049606)
- **Recomendação:** um `<nav aria-label="Rodapé">` com três grupos:
  - **Programas:** `/cursos`, `/cursos/junior`, `/cursos/create`, `/cursos/camps` e `/cursos/academies`.
  - **Cursos particulares:** só o hub `/particular`. Listar cursos no rodapé repetiria âncoras em todas as páginas.
  - **Institucional:** `/sobre`, `/contato`, `/blog` e Instagram.
  
  Além disso, endereço e telefone em `<address>`, com `href="tel:+55..."` e link de WhatsApp, idênticos **caractere a caractere** ao JSON-LD e ao Perfil da Empresa. Manter a linha legal.
- **Nota do verificador:** que "privacidade/termos são as páginas mais linkadas" é inferência, a confirmar no Search Console.

#### 🟡 `arquitetura-links-internos-07` — BreadcrumbList do JSON-LD não bate com o breadcrumb visível
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/components/particular-course-page.tsx`, `src/components/course-page.tsx`
- **Evidência:**
  - Cursos particulares: o schema diz Início → Santos Tech Particular → curso, mas a página não tem trilha visível nenhuma.
  - Cursos infantis: o schema tem 4 níveis, e a página mostra 1 link ("← CREATE").
- **Diretriz:** a marcação deve representar o conteúdo visível. [Google — políticas de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) ⚠️ A doc de Breadcrumb não diz isso literalmente.
- **Recomendação:**
  - Criar um componente único `src/components/breadcrumb.tsx`, alimentado pelo mesmo array de `buildBreadcrumbSchema`, e usar em `course-page.tsx` e `particular-course-page.tsx`.
  - Alinhar o nome do 2º nível e o do 4º nível.
  - Leva menos de 2 h. Validar 2 URLs no Rich Results Test.
- **Nota do verificador:** o schema não é enganoso, porque os níveis são páginas reais. O breadcrumb só aparece na busca no desktop desde 01/2025.

#### 🟡 `arquitetura-links-internos-09` — O nome de cada curso particular muda entre sidebar, card, H1, breadcrumb e `<title>`
**Status:** confirmado · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/particular.tsx`, `src/routes/particular.index.tsx`, `src/lib/seo.ts`, `src/components/particular-course-page.tsx`
- **Evidência:**
  - Excel: "Excel" na sidebar, "Excel Avançado" no card e no H1, "Curso de Excel Particular…" no title.
  - IA: "Inteligência Artificial" na sidebar, "Inteligência Artificial: do Essencial ao Profissional com Agentes" no H1.
  - ADS: "ADS / Formação Profissional" na sidebar e "ADS — Análise e Desenvolvimento de Sistemas" no H1.
- **Diretriz:** o Google monta o title link a partir de `<title>`, H1, `og:title` e do texto dos links que apontam para a página. [Google — title links](https://developers.google.com/search/docs/appearance/title-link)
- **Recomendação:**
  - Criar `src/data/particular-catalogo.ts` com `{ slug, nome, nomeCurto?, legenda?, grupo }` como **fonte única**.
  - Dela derivam H1, breadcrumb, `Course.name`, `og:title`/title, card e sidebar (esta usa `nomeCurto ?? nome`).
  - Title com no máximo 60–65 caracteres.
  - Fazer junto com `on-page-conteudo-05`.
- **Nota do verificador:** o Google reescrever o título não é penalidade; o impacto é em CTR.

#### 🟡 `arquitetura-links-internos-10` — As 9 páginas por faixa etária não linkam entre si nem para o ano seguinte
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-page.tsx`, `src/routes/cursos.create.index.tsx`, `src/routes/cursos.junior.index.tsx`
- **Evidência:**
  - `/cursos/create/8-9-anos` só linka `/cursos/create` (2 vezes).
  - A única transição entre programas está em `cursos.junior.7-8-anos.tsx`.
- **Diretriz:** linkar recursos relevantes. [Google — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide#link-to-relevant-resources)
- **Recomendação:**
  - Um bloco "Trilha" com "Faixa anterior" e "Próxima faixa", usando âncora descritiva (ex.: "CREATE 9 a 10 anos").
  - Gerar a partir das listas que já existem.
  - A última faixa do JR linka `/cursos/create`, e a última do CREATE linka `/cursos/academies`.
- **Nota do verificador:** a fonte citada originalmente era o guia de IA, que não trata de links internos. A correta é o Starter Guide.

#### 🟡 `arquitetura-links-internos-11` — Os cursos particulares só se ligam pela sidebar: não há "cursos relacionados" nem ligação entre as 3 páginas de Excel
**Status:** confirmado · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/particular-course-page.tsx`, `src/routes/particular.tsx`
- **Evidência:**
  - `particular-course-page.tsx` só tem hrefs de WhatsApp.
  - A página de Excel não menciona `excel-power-bi` nem `excel-ia` no corpo.
- **Diretriz:** links internos com âncora relevante ajudam descoberta e autoridade, e páginas irmãs devem ser distintas e se cruzar com contexto. [Bing — Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- **Recomendação:**
  - Uma seção "Cursos relacionados", com 3–4 cards do mesmo grupo, antes do FAQ.
  - Nos 3 cursos de Excel, um parágrafo explícito "Se você já domina o Excel, veja…".
  - Para isso, exportar `GRUPOS` de `particular.tsx` para um módulo compartilhado.

#### 🟢 `arquitetura-links-internos-08` — Âncoras genéricas ou enganosas ("Ver currículo completo", pílulas de categoria que levam a um curso específico)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/cursos.junior.index.tsx`, `src/routes/particular.index.tsx`, `src/routes/cursos.create.index.tsx`
- **Evidência:**
  - "Ver currículo completo" é o **único** link para cada faixa em `/cursos/junior`.
  - As pílulas levam de categoria a um curso: "Programação" → `/logica`, "T.I" → `/suporte`, "Universo 3D" → `/modelagem-3d`.
  - O CTA do hub diz "Conhecer este curso".
- **Diretriz:** o texto-âncora deve ser descritivo e dizer o que há no destino. [Lighthouse — link-text](https://developer.chrome.com/docs/lighthouse/seo/link-text)
- **Recomendação:**
  - (1) Em `/cursos/junior`: "Ver currículo de JR1 (5 a 6 anos)".
  - (2) Pílulas com o nome do curso, ou apontando para um hub de categoria real. No CTA do hub: "Ver o curso Pacote Office + IA".
  - (3) Em `/cursos/create`, `aria-label` descritivo no card.
  - O Lighthouse não detecta âncoras genéricas em português, então não serve de métrica.

#### 🟢 `arquitetura-links-internos-19` — O menu mobile só renderiza os sub-itens quando aberto (hoje sem impacto)
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/site-header.tsx`
- **Evidência:** em `site-header.tsx:174-187` e `200-213`, os sub-itens só entram no DOM quando o menu abre. O dropdown desktop mantém os mesmos links no HTML.
- **Diretriz:** na indexação mobile-first, o mesmo conteúdo e os mesmos links devem estar no DOM do mobile. [Google — mobile-first](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
- **Recomendação:** renderizar sempre e alternar a visibilidade por classe ou altura. Fazer junto com `-01`.

#### 🟢 `arquitetura-links-internos-20` — /links está no sitemap, mas não recebe link interno, e os cards são carregados no navegador
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/links.tsx`, `src/lib/link-showcase-api.ts`, `public/sitemap.xml`
- **Evidência:**
  - O HTML servido de `/links` tem 4 links internos e mostra "Carregando…".
  - Os cards vêm via `useQuery` no navegador.
  - Engloba `tecnico-rastreio-indexacao-13`.
- **Diretriz:** os links essenciais devem estar no HTML servido. [Google — links rastreáveis](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) ⚠️ O Google renderiza JS, apenas com atraso.
- **Recomendação:** **decisão de negócio (§6, item 18).**
  - Se `/links` for indexável: link no footer e um `loader` SSR (`queryClient.ensureQueryData`).
  - Se não for: `noindexMeta` e retirar do sitemap.
  - Para a performance da mesma página, ver `lacuna-perf-03`.
- **Nota do verificador:** ganho de SEO marginal; é higiene.

### 5.5 Performance e Core Web Vitals (20 achados: 🟠 1 · 🟡 6 · 🟢 13)

> Todos os números desta seção são de **laboratório**, sem dados de campo (ver §1.3). O `performance-cwv-03` (robots bloqueando `/assets/`) e o `performance-cwv-22` (http→https com 302) foram fundidos em `tecnico-rastreio-indexacao-01` e `-06`.

#### 🟠 `performance-cwv-01` — O conteúdo da primeira dobra chega invisível do servidor (`Reveal` com `opacity:0`), e o LCP no mobile fica entre 4,7 e 6,0 s
**Status:** confirmado · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/components/reveal.tsx`, `src/hooks/use-reveal.ts`, `src/routes/index.tsx`, `src/components/particular-course-page.tsx`, `src/components/course-page.tsx`
- **Evidência:**
  - O `useReveal` começa com `visible=false`. O wrapper sai do servidor com `transform:translateY(24px);opacity:0`.
  - Na home há 70 wrappers assim, e um deles envolve o **H1**. Em `/particular/cursos/excel` e em `/cursos/create/8-9-anos` são 38 cada, também com o H1 dentro.
  - O texto só aparece depois de baixar ~410 KB de JS (Brotli), hidratar e o IntersectionObserver disparar.
  - Lighthouse (home): LCP de 5,7 s, com 1.644 ms de *element render delay*.
- **Diretriz:** o atraso de renderização do elemento LCP deve ficar abaixo de 10% do LCP, e esse elemento precisa poder ser pintado assim que o HTML e o CSS chegam, sem depender de JS. [web.dev — otimizar LCP](https://web.dev/articles/optimize-lcp)
- **Recomendação:**
  - (1) Tirar do `<Reveal>` tudo o que fica acima da dobra: badge, H1, parágrafo, CTAs e prova social. Isso vale para `index.tsx:395-441`, `particular-course-page.tsx:242-277` e `course-page.tsx`.
  - No lugar, animar só com CSS: `@keyframes` com `animation-fill-mode: backwards`, animando só `transform`/`opacity` e partindo de uma opacidade maior que 0. Desligar em `prefers-reduced-motion`.
  - (2) Resolver o Preloader (`-02`).
  - (3) **Não** refatorar o Reveal global agora. Os outros ~60 wrappers ficam abaixo da dobra e não mexem no LCP.
  - (4) Medir com Lighthouse mobile antes e depois nas 4 rotas, olhando o `elementRenderDelay` e qual elemento vira o LCP.
- **Nota do verificador:** a linha citada (879-884) é imprecisa, porque o arquivo tem 29 linhas. Severidade alta mantida: afeta um Core Web Vital em todas as rotas.

#### 🟡 `performance-cwv-02` — O Preloader de tela cheia sai no HTML da home e cobre o site até a hidratação, mais ~1,7 s de animação
**Status:** parcial · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/components/preloader.tsx`, `src/routes/index.tsx`, `src/lib/preloader-signal.ts`
- **Evidência:**
  - O overlay (`fixed inset-0 z-[200] bg-[#04325A] opacity-100`) está no HTML de produção.
  - A timeline do GSAP só começa depois que o chunk `index` (306 KB em Brotli) executa.
  - Roda a cada montagem da home, não só na primeira visita.
  - O banner de cookies espera o preloader terminar.
  - Lighthouse (home): Speed Index de 4,7 s.
- **Diretriz:** o SSR deve entregar conteúdo utilizável imediatamente. [web.dev — otimizar LCP](https://web.dev/articles/optimize-lcp) ⚠️ A fonte citada não trata de overlay (ver nota).
- **Recomendação:**
  - Remover: o import e a linha 374 de `index.tsx`, e os arquivos `preloader.tsx` e `preloader-signal.ts`.
  - Em `cookie-consent.tsx:96`, chamar direto em vez de `whenPreloaderDone`.
  - ⚠️ **Não** adotar a variante "mounted começa false". Nela o conteúdo aparece e depois é coberto pela tela azul.
  - Se a marca exigir a animação, animar só o logo do header, sem overlay.
  - Validar Speed Index e TBT.
  - **Decisão de marca (§6, item 13).**
- **Nota do verificador:** uma div colorida não é candidata a LCP, então o ganho aparece em Speed Index e na sensação de velocidade, não necessariamente no LCP oficial.

#### 🟡 `performance-cwv-04` — Bundle crítico de 306 KB em Brotli em toda página, com GSAP, PostHog e Sentry executando antes da hidratação
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/router.tsx`, `src/routes/__root.tsx`, `src/hooks/use-smooth-scroll.ts`, `src/hooks/use-route-enter-fade.ts`, `src/lib/posthog.ts`, `src/lib/sentry.ts`, `vite.config.ts`
- **Evidência:**
  - `index-_iR9xpKv.js` tem 305.166 B em Brotli (923.876 B sem compressão).
  - Total de JS da home: 409.938 B em Brotli, em 29 arquivos.
  - `src/router.tsx:6-9` inicia o Sentry e o PostHog no escopo do módulo.
  - Lighthouse: 146 a 177 KB de JS não usado.
- **Diretriz:** dividir o código e adiar o que é de terceiros. [web.dev — code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting)
- **Recomendação:**
  - (1) PostHog, o maior ganho (~262 KB minificados): `import('posthog-js')` dentro de `requestIdleCallback`, depois da hidratação, mantendo o opt-out e o modo cookieless.
  - (2) Sentry lazy (ou Loader Script), com um buffer mínimo em `window.onerror`.
  - (3) GSAP/ScrollSmoother por último e com teste E2E, porque há risco de salto visual. Avaliar desligar o ScrollSmoother em telas de toque.
  - (4) `manualChunks` não é prioridade.
  - (5) Medir TBT, bootup e CLS.
- **Nota do verificador:** o impacto é médio porque o SSR entrega o HTML, então o custo recai sobre TBT/INP. Quem sai da página em menos de ~1 s pode não gerar `$pageview`.

#### 🟡 `performance-cwv-05` — /particular e as 52 páginas de curso baixam o chunk `course-skins` de 200 KB, com 91% não usado
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-skins/index.ts`, `src/components/particular-course-page.tsx`, `src/routes/particular.index.tsx`
- **Evidência:**
  - `course-skins/index.ts:4-11` importa as 8 skins de forma estática.
  - O `course-skins-2Wt0GaZX.js` tem 200.210 B, dos quais 182.625 B (91,2%) são desperdiçados.
  - O hub `/particular` baixa esse chunk sem renderizar nenhuma skin.
- **Diretriz:** carregar só o necessário por rota. [React — lazy](https://react.dev/reference/react/lazy) ⚠️ A fonte citada descreve algo que já está ativo.
- **Recomendação:**
  - (1) Esforço S: mover as constantes `*_THEME` para `src/lib/course-themes.ts` (`COURSE_THEMES`) e trocar `SKINS` por essas constantes em `particular.tsx:18/165`. Assim o hub deixa de baixar ~183 KB.
  - (2) Esforço S/M: cada `particular.cursos.<slug>.tsx` importa só a própria skin e a passa por prop para `ParticularCoursePage`. Fica sem Suspense e sem risco de *flash* na hidratação.
  - Conferir no `bun run build`.
- **Nota do verificador:** no hub, a causa é o layout `particular.tsx:18`, não o `particular.index.tsx`.

#### 🟡 `performance-cwv-06` — O HTML sai sem Cache-Control e não é cacheado na borda (DYNAMIC), então todo acesso paga o tempo da origem
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** infra · **Arquivos:** `docker/server.ts`
- **Evidência:**
  - `docker/server.ts:80-87` só define cache para os assets.
  - O HTML sai sem `Cache-Control`, `ETag` e `Last-Modified`, com `cf-cache-status: DYNAMIC`.
  - TTFB medido a partir do Brasil: 0,35 a 1,0 s. No Lighthouse, o tempo de resposta do servidor ficou entre 370 e 730 ms.
- **Diretriz:** o Cloudflare não cacheia HTML por padrão. [Cloudflare — cache padrão](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/)
- **Recomendação:**
  - (1) Para HTML 200, enviar `Cache-Control: public, max-age=0, must-revalidate` e `CDN-Cache-Control: max-age=86400, stale-while-revalidate=604800`.
  - (2) Criar uma Cache Rule "Eligible for cache" com "use cache-control header if present, BYPASS if not". Não usar "default", porque isso cachearia os sites de `/srv/site-routes`.
  - (3) ⚠️ **O purge no deploy é obrigatório.** HTML antigo na borda aponta para chunks que deixam de existir e quebra a hidratação. Criar um token com escopo só de Cache Purge é passo do Henrique.
  - (4) Validar o HIT com curl.
- **Nota do verificador:** TTFB não é Core Web Vital, e o TTFB quente já fica abaixo de 0,8 s. Com pouco tráfego, a taxa de HIT será baixa. Rebaixado de alta.

#### 🟡 `performance-cwv-07` — Logos de ferramentas em PNG sem otimização: /particular/cursos/ia baixa 1,07 MB de logos
**Status:** parcial · **Esforço:** S · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/components/tool-logo.tsx`, `src/assets/logos`, `scripts/optimize-images.mjs`
- **Evidência:**
  - `tool-logo.tsx:4-8` importa tudo via `import.meta.glob`, sem dimensões.
  - Tamanhos: suno.png 742 KB, gemini.png 500 KB, python.png 369 KB, deepseek 200 KB, javascript 137 KB.
  - `/particular/cursos/ia` baixa gemini, python, canva, claude e chatgpt. O gemini aparece com **14 px**.
- **Diretriz:** servir imagens em AVIF/WebP no tamanho em que são exibidas. [Lighthouse — imagens modernas](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images)
- **Recomendação:**
  - Converter uma única vez para WebP com alfa, 192 px no maior lado: `sharp(in).resize(192,192,{fit:'inside'}).webp({quality:85})`.
  - Converter os logos grandes (suno, gemini, python, deepseek, javascript, dalle, scratch, canva) e qualquer outro acima de 20 KB.
  - O glob já aceita `.webp`, então `tool-logo.tsx` não muda.
  - Opcional: `loading="lazy"` e `decoding="async"`.
  - Tirar screenshot nas skins claras e escuras.

#### 🟡 `performance-cwv-08` — Hero da home: 5 imagens com fetchpriority=high, colagem escondida no mobile mas baixada, e srcset sem `sizes`
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/hero-collage.tsx`, `src/components/img.tsx`, `src/components/scroll-stage.tsx`
- **Evidência:**
  - Os tiles têm entre 208 e 256 px e ficam dentro de uma div `hidden lg:block`, que some abaixo de 1024 px.
  - Cada tile usa `priority`, que vira `eager` + `fetchpriority=high`, sem `sizes`. Resultado: o navegador escolhe a variante de 1200w.
- **Diretriz:** `fetchpriority="high"` só na imagem LCP, e `sizes` é obrigatório quando o srcset usa larguras. [web.dev — fetch priority](https://web.dev/articles/fetch-priority)
- **Recomendação:**
  - (1) `sizesAttr="256px"` e nenhum tile com prioridade alta: usar `eager` + `low`, ou deixar `priority` só no 1º tile se o Lighthouse desktop o apontar como LCP.
  - (2) Montar a colagem só com `matchMedia('(min-width:1024px)')`, com um placeholder de mesma altura para não gerar CLS.
  - (3) Tirar o ScrollStage da lista, porque ele já tem `sizes`.
- **Nota do verificador:** os ganhos em KB e em ms não foram reproduzidos. Os números de linha estavam deslocados.

#### 🟢 `performance-cwv-09` — ScrollSmoother com `normalizeScroll: true` no site inteiro
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/hooks/use-smooth-scroll.ts`, `src/routes/__root.tsx`, `src/styles.css`, `src/router.tsx`
- **Evidência:** `use-smooth-scroll.ts:26-31` cria o ScrollSmoother com `normalizeScroll: true`, o que intercepta toque e roda do mouse com listeners não passivos.
- **Diretriz:** [GSAP — normalizeScroll](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/) ⚠️ A fonte citada não sustentou a evidência de main thread.
- **Recomendação:**
  - Usar `normalizeScroll: false`, ou ligar só com `(hover: hover) and (pointer: fine)`.
  - Não prometer queda de main thread com isso. Os 42,6 s de main thread vêm do `setInterval` do hero-collage e do colonia-photos remontando imagens, de animações infinitas e do badge-rainbow.
  - Ver também `lacuna-perf-04` (âncoras quebradas pelo smoother).
- **Nota do verificador:** a atribuição dos 42,6 s ao ScrollSmoother foi **refutada** pela medição.

#### 🟢 `performance-cwv-10` — Animações infinitas caras (box-shadow do CTA, blobs com blur)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/styles.css`, `src/routes/index.tsx`, `src/components/whatsapp-fab.tsx`
- **Evidência:**
  - O `cta-pulse` anima `box-shadow`, que é propriedade de paint e não passa pelo compositor.
  - Há blobs com `blur-3xl`, `curve-breathe`, floats e `pulse-ring` no botão de WhatsApp.
- **Diretriz:** animar só `transform` e `opacity`. [web.dev — guia de animações](https://web.dev/articles/animations-guide) ⚠️ A fonte citada não sustentou tudo.
- **Recomendação:**
  - `cta-pulse` e `rarity-badge` via `::after`, animando `transform` e `opacity`.
  - `prefers-reduced-motion` em float, blob e pulse-ring.
  - Opcional: pausar as animações fora da tela.
  - `content-visibility`, só depois de medir.
  - Validar com Paint flashing no DevTools.
- **Nota do verificador:** só o `cta-pulse` e o `rarity-badge` não passam pelo compositor. As demais animações já usam `transform`.

#### 🟢 `performance-cwv-11` — Toda visita dispara 2 requisições que falham com 401 (`/auth/me` e `/auth/refresh`)
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/hooks/use-session.ts`, `src/lib/auth.ts`, `src/components/site-header.tsx`
- **Evidência:**
  - O `use-session` chama `api.santos-tech.com/auth/me`, que responde 401. Em seguida chama `/auth/refresh`.
  - O Lighthouse registra `errors-in-console`, único motivo de Boas práticas estar em 96.
- **Diretriz:** [Lighthouse — erros no console](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console)
- **Recomendação:**
  - Ativar a query só quando houver um indício de sessão: um cookie não-HttpOnly (`st_session=1`, `Domain=.santos-tech.com`, sem dado sensível) gravado pelo api-go no login e no refresh, e apagado no logout.
  - ⚠️ `localStorage` não funciona aqui, porque o login acontece em outra origem.
  - Exige mudança no `santos-tech-infra`.
- **Nota do verificador:** são 2 requisições, não 3. O esforço é M porque envolve 2 repositórios.

#### 🟢 `performance-cwv-12` — Sem preload de rota
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/router.tsx`, `src/routes/__root.tsx`
- **Evidência:** `createRouter` não define `defaultPreload`. Não há speculation rules, e o Speed Brain fica sem efeito com o HTML em DYNAMIC.
- **Diretriz:** [TanStack Router — preloading](https://tanstack.com/router/latest/docs/framework/react/guide/preloading)
- **Recomendação:**
  - Adicionar `defaultPreload: 'intent'` (uma linha) e conferir se o `PageTransitionLink` herda o comportamento.
  - **Não** fazer speculation rules nem Speed Brain agora, porque há risco de pageview fantasma.
- **Nota do verificador:** não mexe no LCP da primeira carga.

#### 🟢 `performance-cwv-13` — Sem 103 Early Hints; o CSS único bloqueia a renderização
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra · **Arquivos:** `docker/server.ts`, `src/styles.css`, `src/routes/__root.tsx`
- **Evidência:**
  - Não há header `Link` nas respostas.
  - O CSS tem 36 KB em Brotli (265 KB sem compressão).
  - O Lighthouse aponta 450 ms de render-blocking.
- **Diretriz:** [Cloudflare — Early Hints](https://developers.cloudflare.com/cache/advanced-configuration/early-hints/)
- **Recomendação:**
  - Nas respostas HTML, adicionar o header `Link` com preload do CSS e das fontes, usando os nomes do `dist/client/.vite/manifest.json` lidos uma vez só, na subida do servidor.
  - Ligar Early Hints no painel (não depende de cachear HTML).
  - Avaliar tirar o `tw-animate-css`.
  - Medir com WebPageTest e `curl --http2 -v`.
- **Nota do verificador:** o ganho é superestimado. Early Hints só funciona em Chromium e só aproveita a janela do TTFB.

#### 🟢 `performance-cwv-14` — Google Maps embutido em 3 páginas sem facade
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/routes/particular.index.tsx`, `src/routes/contato.tsx`
- **Evidência:** o iframe já é `loading="lazy"` e tem altura fixa, mas carrega o app completo do Maps quando entra na tela. O peso não foi medido.
- **Diretriz:** [web.dev — JS de terceiros](https://web.dev/articles/efficiently-load-third-party-javascript)
- **Recomendação:**
  - Manter o mapa em `/contato`.
  - Na home e em `/particular`, trocar por uma facade: um card com o endereço e o botão "Ver no Google Maps", que carrega o mapa só no clique.
  - ⚠️ Não usar screenshot do Maps, por causa dos termos de uso.
  - Medir antes. Se o ganho for pequeno, fechar como "não vale".

#### 🟢 `performance-cwv-15` — Dados de campo (CrUX/Search Console) não verificados
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** externo · **Arquivos:** `PENDENCIAS.md`
- **Evidência:** a API do PSI sem chave respondeu 429 (cota 0), e a CrUX API respondeu 403.
- **Diretriz:** a aprovação nos Core Web Vitals é medida no p75 de campo. [Chrome — CrUX API](https://developer.chrome.com/docs/crux/api)
- **Recomendação:**
  - (1) O Henrique abre [pagespeed.web.dev](https://pagespeed.web.dev), que mostra o CrUX sem chave, e o relatório Core Web Vitals do Search Console.
  - (2) Se não houver amostra, usar RUM próprio: o Sentry browser tracing coleta LCP, INP e CLS reais (confirmar que está ligado).
  - (3) Chave e script mensal só se o CrUX tiver amostra.
- **Nota do verificador:** é uma lacuna da auditoria, não um defeito do site.

#### 🟢 `performance-cwv-16` — 25 modulepreloads, 20 deles de ícones lucide entre 350 e 810 B
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `vite.config.ts`
- **Evidência:** a home tem 25 `<link rel="modulepreload">`, com `numScripts` 26 e `numRequests` 58 no Lighthouse.
- **Diretriz:** [web.dev — code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting)
- **Recomendação:**
  - No Vite 8/Rolldown, usar `build.rolldownOptions.output.codeSplitting.groups`, só no ambiente client.
  - Conferir que o chunk de ícones não puxa ícones de outras rotas.
  - Medir antes de prometer ganho.
- **Nota do verificador:** a recomendação original usava APIs do Rollup que não existem no Rolldown.

#### 🟢 `performance-cwv-17` — A maioria das `<img>` não tem width/height; o CLS é 0 só porque os contêineres têm altura fixa
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/img.tsx`, `src/assets/manifest.ts`, `src/routes/particular.index.tsx`, `src/components/tool-logo.tsx`, `src/routes/index.tsx`, `src/components/hero-collage.tsx`
- **Evidência:**
  - Na home, 9 de 10 `<img>` não têm width/height. No Excel, 6 de 8. Os cards do hub também não.
  - CLS medido: 0 no mobile e entre 0,013 e 0,018 no desktop.
  - Engloba `on-page-conteudo-16`.
- **Diretriz:** [web.dev — otimizar CLS](https://web.dev/articles/optimize-cls)
- **Recomendação:**
  - Higiene preventiva: `width={800} height={400}` nos cards do hub, que também ganham mais servidos em WebP/AVIF.
  - Dimensões no ToolLogo.
  - Mudar o manifest é opcional.

#### 🟢 `performance-cwv-19` — Scripts de terceiros do Cloudflare: beacon de analytics e ofuscação de e-mail
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra
- **Evidência:**
  - O `beacon.min.js` (10.338 B) é injetado pela borda em todas as páginas.
  - O `email-decode.min.js` roda de forma síncrona em `/particular` e `/contato`.
- **Diretriz:** [Cloudflare — Email Address Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/) ⚠️ A fonte citada não fala do beacon.
- **Recomendação:**
  - Desligar o Email Obfuscation (ver `lacuna-geo-04`).
  - **Manter** o beacon RUM por enquanto: é a única fonte gratuita de Core Web Vitals de campo.
- **Nota do verificador:** o e-mail que está no JSON-LD não é ofuscado, e o beacon é assíncrono.

#### 🟢 `performance-cwv-20` — O HTML da home tem 270 KB: 236 SVGs inline (145 KB) e 1.542 elementos no DOM
**Status:** confirmado · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/components/decorative-elements.tsx`, `src/components/icons.tsx`
- **Evidência:**
  - Os 236 `<svg>` somam 144.994 B, com cerca de 110 estrelas.
  - O DOM tem 1.542 elementos, perto do limite do Lighthouse.
- **Diretriz:** [web.dev — otimizar INP](https://web.dev/articles/optimize-inp)
- **Recomendação:**
  - Um sprite `<symbol>`/`<use>`, ou um único componente de estrelas.
  - `DecorativeElements` montado só no navegador.
  - `content-visibility:auto` nas seções abaixo da dobra.
  - Prioridade baixa: com Brotli, a transferência cai para 34 KB.

#### 🟢 `performance-cwv-21` — O hero das páginas de curso infantil usa `<image>` dentro de SVG, sem srcset
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/course-page.tsx`, `src/assets/manifest.ts`
- **Evidência:**
  - `<image href=".../students-1-305-*.avif">` usa uma imagem de 305 px esticada para 600.
  - A foto é `hidden lg:block`, ou seja, não existe no mobile.
- **Diretriz:** [web.dev — otimizar LCP](https://web.dev/articles/optimize-lcp)
- **Recomendação:**
  - Trocar por `<picture>`/`<img>` com `clip-path`, gerando variantes de 520, 800 e 1040 px.
  - ⚠️ Não usar `priority` incondicional: com `display:none`, a imagem seria baixada no mobile mesmo sem aparecer. Usar `<source media="(min-width:1024px)">` ou um preload com `media`.
- **Nota do verificador:** o LCP mobile vem do `-01`, não daqui. O ganho principal deste item é a nitidez da foto no desktop.

#### 🟢 `performance-cwv-23` — Poppins com `font-display: swap` sem fallback com métricas ajustadas
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/styles.css`
- **Evidência:** não há `@font-face` de fallback. CLS no desktop: 0,018 na home e 0,014 no Excel.
- **Diretriz:** [web.dev — boas práticas de fontes](https://web.dev/articles/font-best-practices)
- **Recomendação:**
  - Criar uma `@font-face` "Poppins Fallback" com `src: local('Arial')` e `size-adjust`, `ascent-override`, `descent-override` e `line-gap-override` calculados de verdade (capsize ou fontaine).
  - Medir o CLS antes e depois.
- **Nota do verificador:** o import fica em `styles.css:7-9`.

### 5.6 GEO: crawlers de IA (7 achados: 🟡 2 · 🟢 5)

#### 🟡 `geo-crawlers-ia-01` — As páginas de curso infantil não respondem "quanto custa?", enquanto a home publica R$ 539,90
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/cursos.create.8-9-anos.tsx`, `src/routes/cursos.junior.5-6-anos.tsx`, `src/routes/index.tsx`, `src/lib/seo.ts`, `templates/novo-curso.template.tsx`
- **Evidência:**
  - No FAQ de `cursos.create.8-9-anos.tsx:214-215`, a resposta sobre preço é "Te passamos valor e formas de pagamento na aula experimental…". O `junior.5-6-anos` faz o mesmo.
  - O HTML servido ao GPTBot tem 0 ocorrências de "R$".
  - A home, por outro lado, publica no FAQ e no FAQPage: "A mensalidade é R$ 539,90" e material de "R$ 690/ano".
  - Engloba `aeo-respostas-06`.
- **Diretriz:** o Modo IA em português cita a página específica. Uma resposta evasiva é pior do que a da home. [Google — Modo IA em português](https://blog.google/intl/pt-br/produtos/busca-do-google-agora-o-brasil-ja-pode-usar-o-modo-ia-em-portugues/)
- **Recomendação:**
  - Criar a constante `src/lib/precos.ts` com: mensalidade 539,90; matrícula 299,90; material de Tecnologia 690/ano e de Informática 290/ano.
  - Reusar essa constante no `PRECOS` da home.
  - Nas 9 rotas infantis e no template, responder assim: "Mensalidade de R$ 539,90 (curso de 12 meses, turma de até 10 alunos) + matrícula única de R$ 299,90 + material de R$ X/ano conforme a trilha. Aula experimental grátis pelo WhatsApp."
  - Não publicar números que ainda não foram conferidos no código.
  - `offers` só onde o preço estiver visível.
  - Deixar `/cursos/academies` para depois, até o preço estar definido.
- **Nota do verificador:** rebaixado de alta. O preço já está público na home, então o problema é inconsistência e perda de citação da página específica.

#### 🟡 `geo-crawlers-ia-10` — Poucas estatísticas nomeadas, nenhuma fonte externa e zero tabelas
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/routes/sobre.index.tsx`, `src/routes/cursos.index.tsx`, `src/components/particular-course-page.tsx`
- **Evidência:**
  - Os números da home são "5–15 anos", "Até 10 alunos", "5,0", "329" e "R$ 539,90".
  - Não há ano de fundação nem número de alunos formados.
  - Nenhuma das 6 páginas analisadas tem `<table>`.
- **Diretriz:** no estudo GEO-bench (KDD 2024), adicionar estatísticas deu +33%, citar fontes deu +28% e citações diretas deram +41%. Encher de palavras-chave deu -9%. [arXiv 2311.09735](https://arxiv.org/abs/2311.09735). É um estudo acadêmico com motores simulados, não diretriz oficial.
- **Recomendação:**
  - (0) **Primeiro:** marcar o mockup "Portal do Aluno" (`index.tsx:832-850`) como "exemplo ilustrativo", com `aria-hidden` nos números, ou trocar os números. Hoje uma IA pode citar "96% de frequência / nota 9,4" como fato da escola.
  - (1) Um bloco "Santos Tech em números", só com fatos reais fornecidos pelo Henrique.
  - (2) Uma tabela com `<caption>` comparando Júnior e Create, e outra com os planos (ver `aeo-respostas-14`).
  - (3) Links de referência (MakeCode, Roblox Education, BNCC) são opcionais.
- **Nota do verificador:** o impacto em leads é incerto. A fonte é acadêmica.

#### 🟢 `geo-crawlers-ia-08` — Nenhuma data visível nem datePublished/dateModified em nenhuma página
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/components/course-page.tsx`, `src/components/particular-course-page.tsx`, `src/components/site-footer.tsx`
- **Evidência:** não há `dateModified` nem `datePublished` nas 6 páginas analisadas, e nenhuma usa o schema WebPage.
- **Diretriz:** [Google — datas de publicação](https://developers.google.com/search/docs/appearance/publication-dates) ⚠️ A fonte não exige data em site institucional.
- **Recomendação:**
  - Primeiro, um `lastmod` real no sitemap (`tecnico-rastreio-indexacao-12`) e o IndexNow.
  - Opcional: `dateModified` com a data real da última mudança de conteúdo, só no Course, e batendo com o `lastmod`.
  - ⚠️ Nunca usar a data do build.
- **Nota do verificador:** rebaixado. O site não é editorial.

#### 🟢 `geo-crawlers-ia-16` — Não há política explícita para bots de treino de IA (decisão de negócio)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** negócio · **Arquivos:** `public/robots.txt`, `PENDENCIAS.md`
- **Evidência:**
  - O robots.txt tem só `User-agent: *` / `Allow: /`.
  - Os 19 user-agents testados receberam 200 com HTML idêntico.
  - O Managed robots.txt do Cloudflare está desligado.
  - O comentário na linha 2 do robots já expressa a intenção de liberar os LLMs.
  - Engloba `blog-integracao-19`.
- **Diretriz:** bloquear bots de treino não tira o site das respostas de IA; bloquear bots de busca ou fetchers de usuário tira. [Cloudflare — managed robots.txt](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/)
- **Recomendação:**
  - Manter tudo liberado e registrar a decisão, com data, em `PENDENCIAS.md` (§6, item 15).
  - Se um dia a decisão for bloquear só o treino: criar blocos por user-agent que repitam os Disallow de `/apresentacoes` e `/professores`, e acrescentar `Content-Signal: search=yes, ai-input=yes, ai-train=no`.
  - Nunca bloquear bots de busca nem fetchers de usuário.

#### 🟢 `geo-crawlers-ia-17` — Configuração de bots no Cloudflare (AI Crawl Control, Bot Fight Mode, Pay per Crawl) não auditável sem acesso ao painel
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** infra
- **Evidência:**
  - De fora, os user-agents recebem 200, sem `cf-mitigated`.
  - O site não exibe anúncios, então o novo padrão do Cloudflare de 15/09/2026 não se aplica.
  - **Não verificado no painel.**
- **Diretriz:** [Cloudflare — bloquear bots de IA](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/)
- **Recomendação:**
  - (1) Tarefa do Henrique, cerca de 10 min: em AI Crawl Control / Security → Bots, conferir Search e Agent como "Allow", nenhum bot em "Charge", Bot Fight Mode sem desafio para bots verificados e Managed robots.txt desligado. Registrar o resultado.
  - (2) Buscar evidência real no relatório de crawlers ou nos logs da origem. O curl com user-agent falso não reproduz um bot verificado.
  - (3) Opcional: um alerta automático de "zero acessos de bots de IA em 7 dias".

#### 🟢 `geo-crawlers-ia-18` — Não existe baseline de visibilidade em IA (Search Console, Bing e teste de citação)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** externo
- **Evidência:**
  - Não houve acesso ao Search Console nem ao Bing.
  - O WebSearch ainda retorna `/adultos` com o título antigo.
  - O DNS tem 2 registros TXT `google-site-verification`, ou seja, o Search Console provavelmente já está verificado por domínio.
  - Engloba `aeo-respostas-19`.
- **Diretriz:** o relatório de desempenho em IA generativa do Search Console serve de baseline antes e depois. [Google — relatórios de IA generativa](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
- **Recomendação:**
  - (1) Henrique: na propriedade de domínio do Search Console, submeter `/sitemap.xml` e `/blog/sitemap.xml` e exportar Páginas + IA generativa com data de 24/09 (baseline).
  - (2) No Bing Webmaster Tools, usar "Importar do Google Search Console".
  - (3) Uma planilha mensal com 5 prompts fixos em ChatGPT, Perplexity, Copilot e Modo IA.
  - (4) No PostHog, clique no WhatsApp quebrado por `$referring_domain`.
- **Nota do verificador:** as métricas citadas do Bing não têm fonte verificável.

#### 🟢 `geo-crawlers-ia-21` — "Dos 5 aos 14 anos" na home contra "5 a 15 anos" no título, no FAQ e no JSON-LD
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - `index.tsx:468` diz "5 aos 14 anos".
  - `:55`, `:311` e `seo.ts:56/:169` dizem "5 a 15 anos".
- **Diretriz:** [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) ⚠️ A fonte citada originalmente tratava de outro tema.
- **Recomendação:** trocar a linha 468 e resolver o conflito CREATE 8–14 × Create 10–15 (§6, item 1). Depois, centralizar as faixas numa constante.

### 5.7 AEO: respostas (11 achados: 🟠 1 · 🟡 6 · 🟢 4)

#### 🟠 `aeo-respostas-01` — As respostas do FAQ dos 52 cursos particulares não existem no HTML servido, só no JSON-LD
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-skins/common.tsx`
- **Evidência:**
  - `common.tsx:331` renderiza a resposta só quando o item está aberto (`{open && …}`).
  - Em produção, "Atendemos de segunda a sábado, das 8h às 22h" aparece **uma vez** no HTML de `/particular/cursos/excel`, dentro do JSON-LD.
  - Mesmo resultado em python e canva.
  - Relacionado a `acessibilidade-semantica-09`.
- **Diretriz:** "Não marque conteúdo que não está visível para o leitor". O dado estruturado deve representar a página de verdade. [Google — políticas de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- **Recomendação:**
  - Manter a resposta sempre no DOM, usando `<details>`/`<summary>` nativo (como já faz `faq-item.tsx`) ou `grid-rows` + `inert`.
  - Não usar só `aria-hidden`, porque o bloco tem um CTA focável. Nada de `display:none`.
  - Aceite: `curl -s https://santos-tech.com/particular/cursos/excel | grep -o 'Atendemos de segunda' | wc -l` deve dar 2.
  - A alternativa de remover o FAQPage é pior.
- **Nota do verificador:** rebaixado de crítica para alta. O rich result de FAQ já não aparece para este site, então uma ação manual é improvável. O dano real é o texto das respostas ficar fora do conteúdo indexado (snippet e AI Overviews).

#### 🟡 `aeo-respostas-02` — As respostas do FAQ infantil (9 cursos + Colônia + Academies) também ficam fora do HTML, porque o Accordion do Radix desmonta o conteúdo fechado
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-page.tsx`, `src/components/ui/accordion.tsx`
- **Evidência:**
  - `course-page.tsx:885-925` usa o Accordion do Radix sem `forceMount`.
  - Em `/cursos/create/8-9-anos`, a resposta aparece só uma vez, no JSON-LD.
  - Em `/cursos/camps`, "1 semana R$ 939,90", **o preço da colônia**, só existe no JSON-LD.
- **Diretriz:** o conteúdo precisa estar no HTML para ser indexado. [Google — JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- **Recomendação:**
  - Trocar pelo `FaqItem`, que usa `<details>`. Uma única mudança cobre create, junior, camps e academies.
  - Alternativa: `forceMount`, testando as animações.
  - Aceite: `curl -s https://santos-tech.com/cursos/camps | grep -ao '1 semana R\$ 939,90' | wc -l` deve dar 2 ou mais.
  - Tirar screenshot da tela.
- **Nota do verificador:** a nota comenta "alta", mas o registro final ficou em média. O mesmo defeito atinge a ementa aula a aula (`lacuna-conteudo-01`), e os dois devem ir no mesmo PR.

#### 🟡 `aeo-respostas-05` — O FAQ "Quanto custa?" dos cursos particulares esconde o preço que a própria página mostra
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/particular-faq-items.ts`, `src/components/particular-course-page.tsx`, `src/components/course-skins/shared.tsx`
- **Evidência:**
  - `particular-faq-items.ts:32-35` responde "O valor varia conforme o curso e o plano escolhido…". Isso vai para 52 FAQPage.
  - A mesma página mostra "12x de R$ 380,46 … ou R$ 4.565,50 à vista", matrícula de R$ 199,90 e material de R$ 389,90.
- **Diretriz:** o snippet eleva trechos que respondem de forma direta e completa. [Google — featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets)
- **Recomendação:**
  - Em `buildCourseFaqItems()`, calcular a resposta a partir de `tierMeta(course, tier).investimento` + `CUSTOS_UNICOS`, a mesma fonte do card, seguida do CTA.
  - ⚠️ No hub `/particular`, a faixa precisa passar por `getInvestimento()`, com o MARKUP de 1,15 (ex.: 1970 × 1,15 = R$ 2.265,50). Isso é decisão do Henrique (§6, item 7).
- **Nota do verificador:** os valores R$ 1.970 e R$ 3.940, sugeridos no achado original, são o preço-base **sem** a margem. Publicá-los mostraria um preço menor que o do card.

#### 🟡 `aeo-respostas-11` — Cinco páginas-chave sem FAQ e sem parágrafo-resposta
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo
- **Evidência:**
  - `/cursos`, `/cursos/create`, `/cursos/junior`, `/sobre` e `/contato` não têm FAQPage nem seção de perguntas.
  - Os H1 de `/cursos`, `/sobre` e `/contato` são slogans.
- **Diretriz:** ter no HTML um parágrafo ou lista que responda de forma direta. [Google — featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets)
- **Recomendação:**
  - Começar por `/cursos` e `/contato`: um parágrafo factual de 40 a 60 palavras logo abaixo do H1.
  - Em `/sobre`, `/cursos/create` e `/cursos/junior`, o lead factual já existe. Basta ajustar o H1 ou o subtítulo.
  - Um FAQ visível com 4 a 6 perguntas em `/cursos`, `/cursos/create` e `/cursos/junior`.
  - Em `/contato`, endereço, telefone e horário em texto.
- **Nota do verificador:** é falso que "só a home tem lead factual".

#### 🟡 `aeo-respostas-12` — O banco de perguntas não cobre dúvidas de alta intenção (computador, certificado, matrícula, online)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo
- **Evidência:**
  - "levar/notebook/computador" tem 0 ocorrências nas páginas.
  - "certificado" nunca aparece em FAQ.
  - "Como matricular" só aparece na home.
- **Diretriz:** responder o que o público realmente pergunta. [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Recomendação:**
  - No FAQ infantil: "Preciso levar computador ou tablet?" e "Meu filho recebe certificado?".
  - **Não** criar "Tem aula online?" no infantil, porque o `index.tsx:314` já responde.
  - No FAQ particular: certificado, notebook, matrícula e "É online ou presencial?", de forma coerente com `lacuna-conteudo-03`.
  - ⚠️ Nenhuma resposta vai ao ar sem confirmação do Henrique.
- **Nota do verificador:** o achado original ignorava 2 perguntas do FAQ da home que já cobriam parte disso.

#### 🟡 `aeo-respostas-14` — Nenhuma tabela comparativa nos hubs (idade × programa; curso × aulas × preço)
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo
- **Evidência:**
  - As 12 páginas analisadas têm 0 `<table>`.
  - Existe uma tabela semântica em `/cursos/create/13-14-anos`, que é a contraprova.
  - Os dados já estão no código (`TIER_META` em `shared.tsx:26-32`).
- **Diretriz:** o Bing recomenda headings claros, tabelas e FAQ. [Bing — AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- **Recomendação:**
  - (1) Em `/particular`, uma `<table>` com `<caption>`: Curso | Área | Aulas | Ritmo | Intensivo | Investimento, gerada do catálogo e do `TIER_META`.
  - (2) Em `/cursos`, uma tabela: Programa | Idade | Frequência | Duração.
  - Preço infantil só com a decisão do Henrique.
  - Reusar o estilo de `cursos.create.13-14-anos.tsx:389`.

#### 🟡 `aeo-respostas-20` — Perfil da Empresa no Google (GBP) não conferido contra os fatos do site
**Status:** parcial · **Esforço:** S · **Impacto:** alto · **Escopo:** externo
- **Evidência:**
  - **Não verificado** (sem acesso ao painel).
  - O próprio site diverge no horário de sábado. A fonte do 18h está em `seo.ts:113-115`, `contato.tsx:109` e `index.tsx:315`. A do 22h, em `particular.index.tsx:434`, `particular-faq-items.ts:14` e `course-skins/common.tsx:205`.
- **Diretriz:** para negócio local, o Google usa o GBP nas respostas de IA. [Ajuda do Perfil da Empresa — classificação local](https://support.google.com/business/answer/7091)
- **Recomendação:**
  - (1) Decidir o horário (§6, item 3) e unificar no site.
  - (2) Henrique confere no GBP, sem presumir que diverge: horário, categoria principal, descrição cobrindo infantil e particular, telefone (16) 99257-8710, site e link para `/particular`.
  - (3) E-mail (§6, item 4).
- **Nota do verificador:** a source_url original não tratava de GBP.

#### 🟢 `aeo-respostas-10` — As perguntas do FAQ não são headings na home nem nos cursos particulares
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:** `faq-item.tsx` usa `<summary><span>`. `particular-faq.tsx` e `common.tsx` usam `<button><span>`. Só o Radix gera `<h3><button>`.
- **Diretriz:** usar HTML semântico quando possível. [Google — otimização para IA generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- **Recomendação:**
  - `<h3><button aria-expanded>` em `particular-faq.tsx` e em `common.tsx`.
  - `<summary><h3 className="inline">` em `faq-item.tsx`.
  - É higiene de semântica e acessibilidade. Pode ir no mesmo PR dos outros ajustes de FAQ.

#### 🟢 `aeo-respostas-13` — Seis perguntas genéricas repetidas, com as mesmas palavras, em 53 páginas
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo
- **Evidência:**
  - `PARTICULAR_FAQ_ITEMS` (`particular-faq-items.ts:11-36`) é anexado a todos os cursos.
  - "Na Santos Tech Particular não existem turmas" aparece no hub, no Excel, no Python e no Canva.
  - Engloba `dados-estruturados-17`.
- **Diretriz:** [Google — otimização para IA generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- **Recomendação:**
  - Personalizar as genéricas (nome do curso, número de aulas, preço).
  - Passar de 2 para 3 ou 4 perguntas específicas por curso.
  - FAQPage no hub, que já mostra as perguntas na tela.
  - Prioridade baixa.
- **Nota do verificador:** não há penalidade, e cada curso já tem perguntas próprias.

#### 🟢 `aeo-respostas-16` — Respostas longas e promocionais em vez de começarem pelo fato
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:**
  - A resposta "Quanto custa?" da home tem 65 palavras, com a comparação "no mesmo patamar de … inglês ou natação de alto padrão".
  - A pergunta do Excel "Preciso já saber Excel avançado?" tem 70 palavras.
- **Diretriz:** [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) ⚠️ A fonte não trata do tamanho das respostas.
- **Recomendação:**
  - Não reescrever em massa.
  - Ajustar só a resposta de preço da home: tirar a comparação, manter "A mensalidade é R$ 539,90" e o que está incluso.
  - Tratar a faixa de 40 a 60 palavras como heurística interna, não como regra do Google.

#### 🟢 `aeo-respostas-17` — O código ainda trata FAQPage como alavanca de SERP, mas o rich result foi descontinuado em 07/05/2026
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:**
  - Os comentários em `seo.ts:5-13` e em `index.tsx:285` e `:1013` citam o rich result.
  - O FAQPage é emitido na home, nos infantis, na colônia, em academies e nos 52 cursos particulares.
- **Diretriz:** o FAQ rich result "não aparece mais no Google Search a partir de 7 de maio de 2026". [Google Search — atualizações](https://developers.google.com/search/updates#removing-faq-rich-result)
- **Recomendação:**
  - Manter o markup só onde ele espelha texto visível. Serve de sinal para LLMs.
  - Atualizar os comentários.
  - Não migrar para QAPage.
  - FAQPage no hub `/particular` só por consistência (`dados-estruturados-04`), não pelo rich result.

### 5.8 SEO local (18 achados: 🟡 8 · 🟢 10)

> ⚠️ **Conflito resolvido nesta seção.** Alguns pontos positivos de outras frentes (Anexo C) e o achado `seo-local-15` tratam o CEP 14025-000 como correto. O `seo-local-03` provou pelos Correios (ViaCEP) que o CEP certo do nº 1992 é **14020-170**. Use 14020-170 depois que o Henrique conferir com o GBP e o CNPJ.

#### 🟡 `seo-local-01` — As coordenadas `geo` do LocalBusiness apontam para a Av. Sumaré, a ~1,1 km do endereço real
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/__root.tsx`
- **Evidência:**
  - `seo.ts:52` tem `geo: { latitude: -21.1957, longitude: -47.8104 }`, com 4 casas decimais. As mesmas coordenadas saem nas metas `geo.position` e `ICBM`.
  - A geocodificação reversa (Nominatim) dessas coordenadas dá "Avenida Sumaré, Jardim Sumaré, 14025-450".
  - O endereço real, Av. Nove de Julho, 1992, geocodifica para -21.1924068 / -47.8014063.
- **Diretriz:** `geo` com pelo menos 5 casas decimais, coerente com o local. [Google — Local business](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- **Recomendação:**
  - Usar as coordenadas do pino do Perfil da Empresa no Google (o Henrique copia do painel) com 5 ou mais casas.
  - Sem acesso ao GBP, usar -21.19241 / -47.80141 e conferir no Maps.
  - O `__root.tsx` já lê `ORG.geo`, então a correção propaga sozinha.
  - Anotar no comentário da linha 51 de onde vieram as coordenadas.
- **Nota do verificador:** rebaixado de crítica. `geo` é recomendado, não obrigatório. O risco é incoerência entre o site e o GBP.

#### 🟡 `seo-local-02` — `aggregateRating` autorreferente na Organization e copiado nos 52 Course particulares
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/components/testimonials.tsx`
- **Evidência:**
  - `seo.ts:173-179` coloca a nota 5.0 / 329 avaliações na entidade da própria escola.
  - `seo.ts:365-371` repete a **mesma** nota dentro de cada Course de `/particular/cursos/*`.
  - As 329 avaliações são da escola no Google, não do curso de Excel. Na página do curso, o texto visível tem 0 ocorrências de "5,0" e de "329".
- **Diretriz:** se a entidade controla as avaliações sobre si mesma, páginas com LocalBusiness ou Organization **não são elegíveis** a estrelas. As notas devem vir diretamente de usuários. [Google — review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- **Recomendação:**
  - Remover `aggregateRating` dos dois builders.
  - Manter `ORG.rating` só como constante para o texto visível e alinhar 325 com 329.
  - Não trocar por markup de Review.
  - Conferir no validator.
  - As estrelas do Maps e do Local Pack vêm do GBP e **não** são afetadas.
- **Nota do verificador:** a nota defendia "crítica": colocar a nota da escola, que não aparece na página, em 52 páginas de curso pode render ação manual por dados estruturados enganosos. O registro final ficou em média.

#### 🟡 `seo-local-03` — O CEP do JSON-LD (14025-000) diverge do CEP das páginas legais (14020-170), e o ViaCEP confirma 14020-170 para o nº 1992
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/privacidade.tsx`, `src/routes/contato.tsx`
- **Evidência:**
  - `seo.ts:49` tem `postalCode: "14025-000"`, que vai para a Organization e para os 52 Course.
  - `privacidade.tsx:27-28` diz "CEP 14020-170".
  - ViaCEP:
    - 14020-170 = Av. Nove de Julho, de 1324 a 99998, lado par, Jardim América.
    - 14025-000 = Av. Nove de Julho, de 2 a 1322, lado par.
  - O OSM está desatualizado.
- **Diretriz:** as citações de NAP (nome, endereço e telefone) devem ser idênticas, e erro de CEP não é variação tolerável. O Google usa o site para corroborar o perfil. [Ajuda do Perfil da Empresa — endereço](https://support.google.com/business/answer/3480441)
- **Recomendação:**
  - Trocar para "14020-170" (o Henrique confere com o GBP e o CNPJ).
  - Mostrar o endereço completo, com CEP, em `/contato` e no rodapé, com o mesmo texto do schema.
  - Na mesma passada, alinhar o horário de sábado (`-06`), o número de cursos (43, 52 ou 55 em lugares diferentes) e o número de avaliações (325 ou 329).
- **Nota do verificador:** rebaixado de alta. O Google identifica o negócio pelo GBP e pelo pino, não pelo CEP do schema.

#### 🟡 `seo-local-04` — `legalName` inventado no JSON-LD; a razão social real é "R. L. DOS SANTOS GAMES" (CNPJ 37.565.993/0001-59)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/privacidade.tsx`, `src/routes/termos.tsx`
- **Evidência:**
  - `seo.ts:35` tem `legalName: "Santos Tech — Escola de Tecnologia"`.
  - `privacidade.tsx` e `termos.tsx` declaram "R. L. DOS SANTOS GAMES, CNPJ 37.565.993/0001-59".
  - A BrasilAPI mostra razão social igual, nome fantasia "SANTOS GAMES", empresário individual, situação ativa e início em 2020-06-30.
  - Engloba `dados-estruturados-09`.
- **Diretriz:** `legalName` é o nome legal registrado. `taxID` e `foundingDate` ajudam a desambiguar a entidade. [Google — Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
- **Recomendação:**
  - `legalName: "R. L. DOS SANTOS GAMES"` e `taxID: "37.565.993/0001-59"`, mantendo `name` como "Santos Tech".
  - ⚠️ Não usar 2020-06-30 como `foundingDate` sem confirmação: é a abertura de um CNPJ com CNAE de software, não necessariamente a fundação da escola.
  - O Henrique precisa aceitar expor a razão social no schema (§6, item 11). Ela já é pública nas páginas legais.
- **Nota do verificador:** é consistência de entidade, sem penalidade.

#### 🟡 `seo-local-05` — O cadastro do CNPJ na Receita tem outro endereço, outro nome fantasia e CNAE de software
**Status:** parcial · **Esforço:** L · **Impacto:** médio · **Escopo:** negócio · **Arquivos:** `src/lib/seo.ts`
- **Evidência:**
  - BrasilAPI/Minha Receita: bairro Alto do Ipiranga, CEP 14055-450, nome fantasia "SANTOS GAMES".
  - O CNAE principal é 6201-5/01, desenvolvimento de software. O CNAE de ensino (8599-6/03) aparece só como secundário.
  - Diretórios automáticos repetem esses dados. Por exemplo, o cnpj.linkana.com mostra "Rua Martim Afonso de Souza, 121 - Alto do Ipiranga".
- **Diretriz:** citações com endereço errado fazem o Google desconfiar dos dados. [BrightLocal — o que é NAP](https://www.brightlocal.com/learn/what-is-nap/). É referência de mercado, não oficial.
- **Recomendação:**
  - (1) No código (esforço S): CEP, `taxID` e `legalName` (achados `-03` e `-04`).
  - (2) **Decisão do Henrique com o contador (§6, item 20):** avaliar atualizar na Receita e na Junta o endereço, o nome fantasia e o CNAE principal. O ganho em SEO é secundário. Registrar como "Aguardando Henrique".
  - (3) Pedir correção nos diretórios só depois do item 2.
- **Nota do verificador:** o endereço da Receita pode ser a sede fiscal legítima. Rebaixado de alta.

#### 🟡 `seo-local-06` — O horário de sábado é inconsistente dentro do próprio site (8h–18h contra 8h–22h)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/index.tsx`, `src/routes/particular.index.tsx`, `src/routes/contato.tsx`
- **Evidência:**
  - Sábado 08:00–18:00 no JSON-LD (`seo.ts:104-117`), em `/contato` e no FAQ da home.
  - "Seg a Sáb · 8h às 22h" em "Como chegar" da home (`index.tsx:1080`), em `/particular` (`:561-562`) e na description do JSON-LD (`seo.ts:56`).
  - O Google já indexou "Monday through Saturday, 8 AM to 10 PM".
  - Engloba `geo-crawlers-ia-04`.
- **Diretriz:** o horário precisa ser exato. O Google pode alterar o GBP quando o site corrobora outra informação. A diretriz também cita escolas entre os negócios que não deveriam informar horário, o que exige uma decisão registrada. [Ajuda do Perfil da Empresa — horário](https://support.google.com/business/answer/6303076)
- **Recomendação:**
  - **Henrique decide (§6, item 3).** Sugestão: dois horários com rótulo, "Atendimento/recepção" e "Aulas particulares agendadas: seg a sáb até 22h".
  - Depois, uma fonte única em `ORG`, consumida em `index.tsx:1080`, `index.tsx:315`, `contato.tsx:108-109`, `particular.index.tsx:434/560`, `particular-faq-items.ts:14` e `course-skins/common.tsx:205`.
  - Alinhar `seo.ts:56`, conferir o GBP e registrar a decisão.
- **Nota do verificador:** a diferença pode ser intencional (recepção vs. aulas). Rebaixado de alta.

#### 🟡 `seo-local-07` — Três e-mails diferentes, e o principal está em outro domínio (santos-games.com)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/contato.tsx`, `src/routes/termos.tsx`, `src/routes/privacidade.tsx`, `src/routes/particular.index.tsx`
- **Evidência:**
  - `ceo@santos-games.com` está no JSON-LD de todas as páginas e em `/contato` (`contato.tsx:82-88`).
  - `ceo@santos-tech.com` é o DPO e aparece em `/privacidade`.
  - `contato@santos-tech.com` aparece em `/privacidade`, `/particular` e `/termos`.
  - Engloba `dados-estruturados-06`.
- **Diretriz:** o `email` da Organization deve ser o contato oficial e coerente com o site. [Google — Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
- **Recomendação:**
  - **Henrique define a caixa oficial (§6, item 4).** Recomendo `contato@santos-tech.com`: já está em 3 páginas, e o domínio tem MX.
  - Trocar `ORG.email` e o `contato.tsx:82-88`, e criar uma constante única.
  - Manter `ceo@santos-tech.com` só como DPO.
  - Acrescentar um `contactPoint` com `contactType "customer service"`.
  - Ver também a ofuscação de e-mail em `lacuna-geo-04`.
- **Nota do verificador:** o achado original disse que `/termos` mostrava `santos-games`, e isso estava errado: mostra `contato@santos-tech.com`. Os dois domínios têm MX.

#### 🟡 `seo-local-08` — `hasMap` ausente e `sameAs` só com o Instagram
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/components/testimonials.tsx`, `src/routes/contato.tsx`, `src/routes/links.tsx`, `src/components/site-footer.tsx`
- **Evidência:**
  - `seo.ts:98` tem `sameAs: [ORG.instagram]` e nada mais.
  - Existe a página [facebook.com/EscolaSantosTech](https://www.facebook.com/EscolaSantosTech/), que não está no schema.
  - O único link para o Maps é uma busca genérica.
  - Engloba `dados-estruturados-10`.
- **Diretriz:** `hasMap` é a URL de um mapa do local, e `sameAs` lista os perfis da mesma entidade. [schema.org — hasMap](https://schema.org/hasMap)
- **Recomendação:**
  - (1) Incluir o Facebook oficial no `sameAs`. Antes, decidir entre as **duas** páginas existentes (`seo-local-13`).
  - (2) Passo privilegiado do Henrique: copiar a URL do perfil no Maps (com CID). Ela vai para `sameAs`, para `hasMap` e para o `GOOGLE_REVIEWS_URL`.
  - (3) Links visíveis para as redes no footer.
  - Não inventar perfis que não existem.
- **Nota do verificador:** `hasMap` não está na doc do Google, então o impacto é indireto (desambiguação da entidade).

#### 🟢 `seo-local-11` — O botão de avaliações aponta para uma busca genérica do Maps, não para o perfil, e não há CTA "Avalie no Google"
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/testimonials.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - `testimonials.tsx:73-76` define `GOOGLE_REVIEWS_URL` como uma busca do Maps, com um TODO "Troque pelo link direto…" que nunca foi feito.
  - O site não tem nenhum link para escrever avaliação.
  - Engloba `on-page-conteudo-18`.
- **Diretriz:** o Google oferece um link e um QR code oficiais para pedir avaliações. [Ajuda do Perfil da Empresa — link de avaliação](https://support.google.com/business/answer/16816815)
- **Recomendação:**
  - O Henrique gera o link "Receber mais avaliações" e copia a URL do perfil.
  - Trocar a constante e incluir um botão "Avaliar a Santos Tech no Google", sem incentivo e sem filtrar alunos.
  - O maior ganho está **fora** do site: enviar o link no pós-matrícula e no WhatsApp.
  - Registrar em `PENDENCIAS.md` como "Aguardando Henrique".

#### 🟢 `seo-local-12` — O mapa embutido usa um endpoint não documentado e mostra o pino do endereço, não o do estabelecimento
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/routes/contato.tsx`, `src/routes/particular.index.tsx`
- **Evidência:** as 3 páginas usam `https://www.google.com/maps?q=…&output=embed`, sem link de "Como chegar". Já usam `loading="lazy"`.
- **Diretriz:** [Google Maps — Embed API](https://developers.google.com/maps/documentation/embed/get-started)
- **Recomendação:**
  - Um componente único `MapaEscola` com um link visível "Como chegar / Abrir no Google Maps", apontando para o perfil. Não precisa de chave e leva menos de 2 h.
  - O Embed API em modo `place` é opcional e exige chave restrita.
  - Uma alternativa sem chave é usar `q=` com o nome e o endereço, conferindo visualmente o resultado.

#### 🟢 `seo-local-13` — O nome da marca varia entre plataformas, e há duas páginas no Facebook
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** externo · **Arquivos:** `src/lib/seo.ts`, `src/components/particular-course-page.tsx`, `src/routes/contato.tsx`, `scripts/generate-og-images.mjs`, `src/components/testimonials.tsx`
- **Evidência:**
  - No site, o nome é consistente: "Santos Tech".
  - No Facebook aparece "Escola Santos Tech | Ribeirão Prêto SP", e há **duas páginas**: `/EscolaSantosTech` e `/SantosTech.br`.
  - Na Receita, o nome fantasia é "SANTOS GAMES".
  - Engloba `social-marca-icones-11`.
- **Diretriz:** o nome deve ser consistente. [Google — nomes de site](https://developers.google.com/search/docs/appearance/site-names) ⚠️ A regra de "nome sem localidade" é do GBP.
- **Recomendação:**
  - (1) O Henrique escolhe a página oficial do Facebook, e a outra é mesclada ou desativada (§6, item 19).
  - (2) Conferir que o nome no GBP não tem "Ribeirão Preto".
  - (3) Manter o `alternateName`.
  - Não mexer no "| Ribeirão Prêto SP": quase certamente é o Facebook que acrescenta.

#### 🟢 `seo-local-14` — Nenhum cartão local encontrado no Bing (Bing Places não verificado)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** externo
- **Evidência:** a busca automatizada no Bing não mostrou cartão de negócio. **Não é prova**, porque o fetch pode ter sido geolocalizado fora do Brasil.
- **Diretriz:** o Bing Places foi relançado em 10/2025 com importação e sincronização a partir do GBP. [Bing — novo Bing Places](https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research)
- **Recomendação:**
  - O Henrique confere em bing.com/forbusiness e, se não houver listagem, importa do GBP com sincronização semanal.
  - Fazer o mesmo no Apple Business Connect.
  - Só colocar no `sameAs` depois de ter as URLs públicas.

#### 🟢 `seo-local-15` — /contato não se declara como página de contato (ContactPage)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/contato.tsx`, `src/lib/seo.ts`
- **Evidência:** a página só tem BreadcrumbList. Não há ContactPage nem `mainEntity`, e o endereço visível aparece sem CEP.
- **Diretriz:** o schema.org define ContactPage. É boa prática, não diretriz do Google. [schema.org — ContactPage](https://schema.org/ContactPage)
- **Recomendação:**
  - Adicionar `{"@type":"ContactPage","@id":".../contato#webpage","mainEntity":{"@id":".../#organization"},"isPartOf":{"@id":".../#website"}}`.
  - Mostrar o CEP. ⚠️ **Usar 14020-170** (`seo-local-03`), não o 14025-000 que este achado sugeria.
  - Um link "Abrir no Google Maps".

#### 🟢 `seo-local-16` — Telefone em formato não padronizado e sem link `tel:`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/lib/whatsapp.ts`
- **Evidência:**
  - `seo.ts:40` tem `"+55-16-99257-8710"`, que é válido.
  - Não há `contactPoint`.
  - Não existe **nenhum** link `tel:` em produção.
- **Diretriz:** o telefone deve incluir o código do país e o DDD. [Google — Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
- **Recomendação:**
  - Opcional: `+5516992578710`.
  - O ganho concreto é transformar "(16) 99257-8710" em `<a href="tel:+5516992578710">`, o que ajuda a conversão no celular.
  - Centralizar a exibição do número, hoje duplicada em `whatsapp.ts:19` e em `shared.tsx:222`.

#### 🟢 `seo-local-17` — O site não fala de estacionamento, acessibilidade nem transporte (decisão de negócio)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** negócio · **Arquivos:** `src/routes/index.tsx`, `src/routes/contato.tsx`
- **Evidência:** "estacionamento", "cadeirante" e "ônibus" têm 0 ocorrências nas páginas públicas.
- **Diretriz:** o "Ask" do Maps responde a partir do perfil e das avaliações. [Ajuda do Perfil da Empresa — atributos](https://support.google.com/business/answer/7690269) ⚠️ A ligação com o site não é comprovada.
- **Recomendação:**
  - O Henrique informa os fatos.
  - (1) Preencher os atributos no GBP.
  - (2) Acrescentar uma ou duas linhas em "Onde estamos" e no FAQ.
  - Nunca inventar nenhum desses dados.

#### 🟢 `seo-local-18` — `areaServed` só com "Ribeirão Preto" (decisão de negócio)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** negócio · **Arquivos:** `src/lib/seo.ts`, `src/routes/index.tsx`, `src/routes/sobre.index.tsx`
- **Evidência:** `seo.ts:99-103` tem uma City só. Os textos falam em "zona sul" e "região" sem detalhar.
- **Diretriz:** `areaServed` é onde o serviço é prestado, sem inflar. [schema.org — areaServed](https://schema.org/areaServed)
- **Recomendação:**
  - Só se o Henrique confirmar que atende famílias de cidades vizinhas: um array de City e uma frase natural no texto.
  - ⚠️ Nunca uma lista de bairros, que vira keyword stuffing.

#### 🟢 `seo-local-19` — O endereço aparece duplicado em 5 blocos Place por página, e sem CEP no Course infantil
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`
- **Evidência:**
  - A home tem 5 PostalAddress.
  - `buildCourseSchema` (infantil) monta o endereço **sem** `postalCode`, e o particular monta **com**.
- **Diretriz:** [schema.org — location](https://schema.org/location) ⚠️ A consolidação por `@id` é boa prática do schema.org, não regra do Google.
- **Recomendação:** `location: { "@id": ".../#organization" }` nos dois builders, ou, no mínimo, `postalCode` no infantil.

#### 🟢 `seo-local-22` — Depoimentos do Google exibidos sem data e sem link individual
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/testimonials.tsx`
- **Evidência:** `testimonials.tsx:16-71` exibe 9 depoimentos sem data e sem link para a avaliação original. Corretamente, não há markup de Review.
- **Diretriz:** [Google — review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) ⚠️ A política do Maps não cria obrigação sobre depoimentos exibidos no site.
- **Recomendação:**
  - (1) Link direto para as avaliações do perfil (junto com `-11`).
  - (2) Opcional: mês e ano de cada avaliação.
  - (3) Mostrar "329 avaliações em set/2026" com data de referência, ou puxar pela API.
  - (4) O Henrique confirma que nenhum depoente é funcionário ou familiar de sócio (CONAR).
  - (5) Continuar sem markup de Review.

### 5.9 Social, marca e ícones (12 achados: 🟡 2 · 🟢 10)

#### 🟡 `social-marca-icones-01` — og:image:width/height/alt vêm ANTES do og:image, e o alt de todas as rotas é o da home
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/__root.tsx`
- **Evidência:**
  - O `__root.tsx:120-123` emite og:image, width, height e alt globais. O `pageMeta()` sobrescreve só o og:image.
  - Resultado no HTML: [7] width, [8] height, [9] alt … [15] og:image.
  - Em `/particular/cursos/excel`, a imagem é a do Excel, mas o alt continua descrevendo a home, com "43 cursos particulares".
- **Diretriz:** as propriedades estruturadas vêm **depois** da tag raiz que descrevem. [Open Graph protocol](https://ogp.me/)
- **Recomendação:**
  - O `pageMeta()` emite, nesta ordem: og:image, secure_url, type (image/png), width 1200, height 630, alt derivado do título da página e twitter:image:alt.
  - O `__root` remove width, height e alt, mas **mantém o og:image como fallback**. As rotas `/apresentacoes/*` e `/professores/*` não usam `pageMeta` e ficariam sem imagem.
  - Conferir no Sharing Debugger da Meta.
- **Nota do verificador:** rebaixado de alta. As redes sociais mostram a imagem mesmo com width e height ausentes ou fora de ordem.

#### 🟡 `social-marca-icones-07` — As og:image são cards de texto + ícone, e home, /particular, /sobre, /cursos e /contato compartilham a mesma capa genérica
**Status:** confirmado · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `scripts/generate-og-images.mjs`, `src/routes/index.tsx`, `src/routes/particular.index.tsx`, `src/routes/sobre.index.tsx`
- **Evidência:**
  - `generate-og-images.mjs` gera todas as imagens como gradiente + badge + texto + ícone.
  - `inferOgImagePath` só cria imagem própria para os cursos. Nenhuma rota sobrescreve com `ogImage:`.
  - `/`, `/particular`, `/contato`, `/cursos`, `/links` e `/privacidade` usam a mesma `og-image.png`.
  - As dimensões e o peso estão corretos: 1200x630, entre 160 e 228 KB.
- **Diretriz:** og:image e primaryImageOfPage são a imagem preferida para as miniaturas da Busca e do Discover. Devem ser representativas da página, evitando logo e imagem cheia de texto. [Google — Imagens](https://developers.google.com/search/docs/appearance/google-images)
- **Recomendação:**
  - Manter o gerador para os cursos.
  - Usar uma foto real (1200x630, menos de 300 KB, pouco texto por cima) em `/`, `/particular`, `/sobre`, `/cursos` e `/contato`, passando `ogImage` no `pageMeta()`.
  - Numa 2ª etapa, fotos também em `/cursos/create` e `/cursos/junior`.
  - O Henrique escolhe as fotos a partir de `src/assets/marina-*` e `students-*` (§6, item 21).
- **Nota do verificador:** `/cursos/create` e `/cursos/junior` já têm cards próprios, mas também são texto + ícone. O efeito é no CTR de compartilhamento (WhatsApp) e das miniaturas.

#### 🟢 `social-marca-icones-02` — Twitter/X card sem twitter:image:alt e sem twitter:site
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:** só aparecem `twitter:card`, `title`, `description` e `image`. A documentação do X estava inacessível na sessão.
- **Diretriz:** [X Cards — markup (arquivo)](https://web.archive.org/web/2023/https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) ⚠️ A fonte não abriu.
- **Recomendação:**
  - **Não** criar twitter:image:alt, porque ele herda o og:image:alt.
  - Resolver o og:image:alt por página (`-01`). Hoje ele cita "43 cursos" e "325 avaliações", dois números defasados.
  - Os `twitter:*` redundantes podem sair.
  - `twitter:site` só se existir uma conta ativa no X. Não inventar o @.

#### 🟢 `social-marca-icones-03` — /favicon.ico dá 404; o único ícone é um PNG de 1080x1080 com 87 KB
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/favicon.png`, `src/routes/__root.tsx`, `docker/server.ts`, `src/lib/seo.ts`, `public/apple-touch-icon.png`
- **Evidência:**
  - `/favicon.ico` e `/icon.svg` dão 404.
  - `favicon.png` tem 1080x1080 e 87.226 B, e é declarado sem `sizes`.
  - É o mesmo arquivo do apple-touch-icon.
  - Engloba `tecnico-rastreio-indexacao-19`.
- **Diretriz:** o favicon deve ser quadrado, de preferência maior que 48x48, num formato aceito. [Google — favicon](https://developers.google.com/search/docs/appearance/favicon-in-search) ⚠️ O favicon atual já atende o Google.
- **Recomendação:**
  - (1) Criar `public/favicon.ico` com 16, 32 e 48 px.
  - (2) Um PNG pequeno (96 ou 192 px) e um apple-touch de 180 px.
  - (3) Declarar `sizes`.
  - (4) ⚠️ **Não** reduzir o `favicon.png` antes de trocar o `ORG.logo` para um arquivo próprio (ex.: `/logo-512.png`). Hoje o logo da Organization usa o mesmo arquivo.
- **Nota do verificador:** o problema real são os 87 KB baixados em toda página e o ruído de 404 nos logs.

#### 🟢 `social-marca-icones-04` — apple-touch-icon transparente e sem margem
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/apple-touch-icon.png`, `src/routes/__root.tsx`
- **Evidência:** é o mesmo arquivo do favicon (mesmo md5), com transparência e a arte ocupando cerca de 95% da largura.
- **Diretriz:** o apple-touch-icon deve ser PNG de 180x180, sem transparência, porque o iOS preenche o fundo. [Apple — configurar web apps](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
- **Recomendação:** um PNG de 180x180, opaco, com fundo `#04325A` ou `#187ABF`, 10 a 12% de margem e `sizes: '180x180'`.
- **Nota do verificador:** só aparece quando alguém adiciona o site à tela de início do iPhone.

#### 🟢 `social-marca-icones-05` — O favicon (leão preto e cinza sobre transparente) some nos temas escuros (decisão de marca)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** negócio · **Arquivos:** `public/favicon.png`, `src/assets/logo.png`
- **Evidência:** composto sobre fundo escuro, só o cinza aparece; sobre branco, só o preto. Em 16x16, o traço vira borrão.
- **Diretriz:** o favicon deve representar a marca. [Google — favicon](https://developers.google.com/search/docs/appearance/favicon-in-search) ⚠️ A diretriz de "fundo branco" citada é a do logo da Organization.
- **Recomendação:**
  - Uma variante com fundo sólido `#187ABF` e o leão branco simplificado.
  - O logo da Organization numa versão feita para fundo branco.
  - **Precisa do ok do Henrique (§6, item 21).**

#### 🟢 `social-marca-icones-06` — Sem Web App Manifest
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/__root.tsx`, `docker/server.ts`, `public/`
- **Evidência:** `/manifest.webmanifest`, `/manifest.json` e `/site.webmanifest` dão 404, e não há `<link rel=manifest>`. O `theme-color` `#187ABF` já está correto.
- **Diretriz:** [MDN — Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest)
- **Recomendação:**
  - Um manifest com `name`, `short_name`, ícones de 192 e 512 (mais um maskable), `start_url` e `display: "browser"`.
  - Conferir se o Bun serve com `Content-Type: application/manifest+json`.

#### 🟢 `social-marca-icones-08` — As imagens OG são regeneradas a cada build com o mesmo nome, e o cache das redes sociais não atualiza
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `scripts/generate-og-images.mjs`, `src/lib/seo.ts`, `package.json`
- **Evidência:**
  - O `build` roda `generate-og-images.mjs`, que reescreve cerca de 60 PNGs em todo deploy.
  - As URLs não têm versão.
- **Diretriz:** a Meta guarda as imagens em cache pela URL. [Meta — Sharing para webmasters](https://developers.facebook.com/docs/sharing/webmasters/)
- **Recomendação:**
  - Gravar em `public/og/manifest.json` um hash das **entradas** (título, tagline, ícone e versão do template), e o `inferOgImagePath` acrescenta `?v=<hash>`.
  - O script só reescreve o PNG quando esse hash muda. Isso também acaba com os arquivos "sujos" no git depois de cada build.
  - Depois de trocar uma arte, passar a URL no Sharing Debugger e no Post Inspector.

#### 🟢 `social-marca-icones-09` — og:title repete a marca e og:description da home é longa
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/routes/index.tsx`
- **Evidência:** 48 títulos têm "Santos Tech". O og:title da home tem 93 caracteres e a og:description, 368.
- **Diretriz:** o og:title deve ir sem branding, porque o og:site_name já traz a marca. [Meta — Sharing para webmasters](https://developers.facebook.com/docs/sharing/webmasters)
- **Recomendação:**
  - Um `ogTitle?` opcional no `pageMeta()`.
  - Na falta dele, tirar só o prefixo ou sufixo de marca.
  - Manter o `<title>` como está.
  - A description da home tem 4 frases, e não 5, então já atende a Meta. Encurtar pensando no snippet do Google.

#### 🟢 `social-marca-icones-13` — Blog: og:image é o logo de 192x192 em WebP, /blog/favicon.ico dá 404 e og:site_name diverge
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** o og:image de `/blog/` é `/assets/logo-192-CDh-yrLA.webp` (192x192, 8.576 B). O og:site_name é "Blog Santos Tech".
- **Diretriz:** o LinkedIn pede no mínimo 1200x627 e só aceita JPG, PNG ou GIF. [LinkedIn — imagens de compartilhamento](https://www.linkedin.com/help/linkedin/answer/a521928)
- **Recomendação:** no repositório do blog:
  - `https://santos-tech.com/og-image.png` com width, height e alt nas páginas sem capa.
  - og:site_name "Santos Tech".
  - Um `/blog/favicon.ico`.
  - Ver `lacuna-infra-08`.
- **Nota do verificador:** os posts já têm capa em JPG. O problema é só na home e nas categorias do blog.

#### 🟢 `social-marca-icones-14` — Imagens OG em PNG com 160–228 KB, quando JPEG q82 ficaria em ~32 KB
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `scripts/generate-og-images.mjs`, `src/lib/seo.ts`
- **Evidência:**
  - `og-image.png` tem 227.981 B e, reencodada em JPEG q82, fica com 31.586 B.
  - O `public/og` inteiro tem 12,95 MB.
- **Diretriz:** o WhatsApp aceita og:image com menos de 600 KB, então hoje já cumpre. [Meta — prévias de link no WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews)
- **Recomendação:**
  - Usar `.jpeg({ quality: 82, mozjpeg: true })` nas linhas 343, 367 e 389, com extensão `.jpg`.
  - Atualizar `inferOgImagePath` (linhas 412, 418 e 421), `ORG.image` (linha 38) e `__root.tsx:120/128`.
  - A tag `og:image:type` **não existe** hoje.
  - Remover os PNGs antigos e fazer junto com o `-08`.

#### 🟢 `social-marca-icones-15` — A página de erro de servidor tem `lang="en"`, título sem acento e nada da marca
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/error-page.ts`
- **Evidência:** `error-page.ts:3` tem `lang="en"`, `:6` tem "Esta pagina não carregou", e não há ícone nem theme-color.
- **Diretriz:** [W3C — idioma da página](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- **Recomendação:**
  - `lang="pt-BR"` e "Esta página não carregou — Santos Tech".
  - Ícone `/favicon.png`. ⚠️ **Não** usar `/favicon.ico`, que dá 404.
  - Acrescentar `theme-color`.
  - O noindex é dispensável, porque a resposta já é um 500.

### 5.10 Acessibilidade e semântica (15 achados: 🟡 6 · 🟢 9)

> A nota de Acessibilidade do Lighthouse não é fator de ranking. O impacto destes itens é em uso real, conversão e conformidade WCAG, e só indiretamente em SEO.

#### 🟡 `acessibilidade-semantica-01` — Os dropdowns "Programas" e "Sobre" do header desktop só abrem com o mouse (hover): não funcionam pelo teclado nem informam o estado
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/site-header.tsx`
- **Evidência:**
  - O painel usa `invisible … group-hover:visible`, e o botão não tem `aria-expanded`.
  - Teste no Chrome a 1280px: o painel não abre com foco, Enter ou clique, e o Tab pula os 6 links.
- **Diretriz:** padrão Disclosure: `<button aria-expanded>` ativado por Enter e Espaço. WCAG 2.1.1 (A). [WAI-ARIA APG — Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- **Recomendação:**
  - Um componente `DesktopDisclosure`: `useState`, `onClick`, `aria-expanded`, `aria-controls` (via `useId`) e `group-focus-within:visible` como rede de segurança.
  - Escape fecha e devolve o foco. `onBlur` fecha quando o foco sai.
  - Um teste E2E: Tab até o botão, Enter, depois Tab até `/cursos`.
- **Nota do verificador:** os links estão no HTML, então a indexação não é afetada.

#### 🟡 `acessibilidade-semantica-02` — O verde da marca (#0DB88F) com texto branco tem contraste de 2,54:1 nos CTAs principais (decisão de marca)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** negócio · **Arquivos:** `src/styles.css`, `src/components/particular-course-page.tsx`, `src/routes/particular.index.tsx`, `src/routes/index.tsx`, `src/components/cookie-consent.tsx`, `src/components/site-header.tsx`, `src/components/particular-faq.tsx`
- **Evidência:**
  - Lighthouse: Acessibilidade 0,93 na home (botão "Aceitar" do cookie) e 0,96 no create e no `/contato`.
  - Branco sobre `#0DB88F` dá 2,54:1; no hover, 3,20:1.
  - Há 71 ocorrências de `bg-st-green` ou `bg-[#0DB88F]`.
- **Diretriz:** WCAG 1.4.3 (AA) exige 4,5:1 para texto normal. CTAs de 14px em negrito contam como texto normal. [axe — color-contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast)
- **Recomendação:**
  - Um token `--st-green-strong: #0A7F63` (4,97:1), com hover `#08705A` (6,04:1).
  - Aplicar em `styles.css:83-84` e `:270-271` e nos botões com `text-white`.
  - Manter o `#0DB88F` só em elementos decorativos.
  - **O Henrique aprova depois de ver a comparação lado a lado (§6, item 14).**
- **Nota do verificador:** o efeito real é na legibilidade e na conversão dos CTAs de WhatsApp.

#### 🟡 `acessibilidade-semantica-03` — Textos pequenos em verde #0DB88F e em azul primary #0083c4 ficam abaixo de 4,5:1
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/components/particular-course-page.tsx`, `src/routes/particular.index.tsx`, `src/components/particular-faq.tsx`, `src/components/cookie-consent.tsx`, `src/routes/contato.tsx`
- **Evidência:**
  - O kicker `text-primary` (#0083c4 sobre branco) dá 4,16:1 e aparece 8 vezes na home.
  - Em `/contato`, `#e5f3f9` sobre `#0083c4` dá 3,67:1.
  - No banner de cookie, `text-[#496B84]/80` dá 3,67:1.
  - Os kickers verdes de 12px dão 2,54:1.
- **Diretriz:** [axe — color-contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast)
- **Recomendação:**
  - Escurecer o token `--primary` (para ~oklch 0,53 ou `#187ABF`). Isso corrige também `cursos.index`, `sobre`, `sobre.visao` e `testimonials`.
  - Um token de verde escuro (`#0A7F63`) para textos de até 18px.
  - Em `cookie-consent.tsx:320`, tirar o `/80`.
  - No card de `/contato`, trocar o fundo.

#### 🟡 `acessibilidade-semantica-06` — /particular: a sidebar fora da tela no mobile continua recebendo foco (66 controles invisíveis)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/particular.tsx`, `src/routes/__root.tsx`
- **Evidência:**
  - O `<aside>` vem antes do `<main>`, sem `aria-label`, com 55 links e 11 botões.
  - A 375px ele fica fora da tela com `inert=false`: são 66 elementos focáveis invisíveis.
  - O hambúrguer não tem `aria-expanded`.
- **Diretriz:** a ordem de foco não pode incluir elementos invisíveis. [W3C — ordem do foco](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- **Recomendação:**
  - (1) **Prioritário:** `inert` e `aria-hidden` quando a tela for menor que `lg` e o menu estiver fechado. Usar `matchMedia` em estado; o SSR sai sem `inert`.
  - (2) No hambúrguer, `aria-expanded`, `aria-controls` e fechar com Escape.
  - (3) `aria-label` no `aside` e no `nav`.
  - (4) Um skip link e `<main id="conteudo">`.
- **Nota do verificador:** a falha de "bypass" (2.4.1) não se confirma, porque o `<main>` existe. As linhas citadas estavam desatualizadas.

#### 🟡 `acessibilidade-semantica-07` — Os botões de abrir e fechar (hambúrguer, "Cursos" e os 8 grupos da sidebar) não informam se estão abertos
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/site-header.tsx`, `src/routes/particular.tsx`
- **Evidência:**
  - O `site-header.tsx:136` usa `aria-label="Abrir menu"` fixo e não tem `aria-expanded`.
  - Na sidebar de `/particular`, os 11 botões têm 0 `aria-expanded`.
- **Diretriz:** [WAI-ARIA APG — Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- **Recomendação:**
  - `aria-expanded={open}` e `aria-controls="menu-mobile"`, com `id` na div da linha 146.
  - Em `particular.tsx`: botão "Cursos" (l.415), grupos (l.460) e hambúrguer (l.612).
  - `inert` nos painéis recolhidos (l.447 e l.481).

#### 🟡 `acessibilidade-semantica-09` — FAQ de /particular: as respostas recolhidas continuam expostas ao leitor de tela, e o botão não está dentro de um heading
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/particular-faq.tsx`, `src/components/particular-faq-items.ts`
- **Evidência:**
  - `particular-faq.tsx:36-83` recolhe com `grid-rows-[0fr]`, que não oculta o conteúdo do leitor de tela.
  - O `<button>` fica fora de um `<h3>`.
  - Há um CTA "Falar no WhatsApp" escondido e focável.
- **Diretriz:** botão como único filho de um heading, `aria-controls`, e o painel realmente oculto quando recolhido. [WAI-ARIA APG — Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- **Recomendação:**
  - (1) No hub: `<h3>`, `aria-controls` e `inert={!isOpen}`, mantendo o texto no HTML. Sem `role=region`.
  - (2) Em `course-skins/common.tsx:316-345`, painel sempre renderizado com `hidden`/`inert`. É a mesma correção de `aeo-respostas-01`.
  - (3) Conferir `ia-agentes.tsx:203` e `ti-suporte.tsx:143`.
- **Nota do verificador:** a afirmação sobre `/particular/cursos/excel` estava errada. Lá o componente é outro, e a resposta nem é renderizada.

#### 🟢 `acessibilidade-semantica-04` — O gradiente do H1 e dos H2 termina em verde com 2,22:1
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/styles.css`, `src/routes/index.tsx`
- **Evidência:**
  - O `.text-gradient-hero` (`styles.css:263-268`) termina em `#0DB88F`.
  - Sobre `#e6f1fa` dá 2,22:1; sobre branco, 2,54:1.
  - O axe não avalia texto em gradiente.
- **Diretriz:** texto grande precisa de pelo menos 3:1. [axe — color-contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast)
- **Recomendação:**
  - Trocar a parada final para `#0B9A78` (3,10:1) ou `#0A7F63` (4,33:1 sobre `#e6f1fa`).
  - Uma classe só corrige home, `/cursos`, `/sobre`, `/sobre/visao`, `/apresentacoes` e os depoimentos.

#### 🟢 `acessibilidade-semantica-05` — `aria-label` em `<span>` sem role nas estrelas dos depoimentos
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/testimonials.tsx`
- **Evidência:** `testimonials.tsx:82` tem `<span aria-label="5 de 5 estrelas">`. O Lighthouse aponta `aria-prohibited-attr` em 10 nós.
- **Diretriz:** [axe — aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr)
- **Recomendação:** `role="img"` no span, e `aria-hidden` nas estrelas que ficam dentro do link (`:132`). Medir o score de novo depois.

#### 🟢 `acessibilidade-semantica-08` — O skip link não é o primeiro elemento focável: o banner de cookies vem antes
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/__root.tsx`
- **Evidência:** o `<CookieConsent />` vem antes do skip link. O primeiro Tab cai em "Gerenciar".
- **Diretriz:** [W3C — pular blocos](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- **Recomendação:**
  - Mover o skip link para antes do cookie e colocar `tabIndex={-1}` no `<main>`.
  - ⚠️ Antes, renomear os `id="conteudo"` duplicados das skins de `/particular` (design-canva:328, capcut:187, davinci:372, photoshop:287, premiere:206 e `design.tsx:281`).

#### 🟢 `acessibilidade-semantica-10` — Animações infinitas não param com `prefers-reduced-motion`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/styles.css`, `src/components/reveal.tsx`, `src/components/whatsapp-fab.tsx`, `src/components/hero-collage.tsx`
- **Evidência:** as animações `float`, `blob`, `spin-slow` e `pulse-ring` são infinitas e não têm bloco de reduced-motion.
- **Diretriz:** [W3C — técnica C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39) ⚠️ A C39 atende ao critério 2.3.3 (AAA), não ao 2.2.2.
- **Recomendação:**
  - (1) Um bloco `prefers-reduced-motion` com `animation: none`.
  - (2) Para cumprir o 2.2.2, parar o movimento em até 5 s: o anel do FAB com 2 iterações e os floats limitados ou pausados.
  - (3) Nos blobs, basta o reduced-motion.
  - O Reveal é opcional.

#### 🟢 `acessibilidade-semantica-11` — Seis links "Quero saber mais" idênticos na home
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/lib/whatsapp.ts`
- **Evidência:** os 6 links vão para o mesmo wa.me, com a mesma mensagem genérica.
- **Diretriz:** [W3C — finalidade do link](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- **Recomendação:**
  - Uma mensagem de WhatsApp por programa em `whatsapp.ts`. O ganho principal é de negócio: triagem do lead e medição por programa.
  - Um texto `sr-only` "sobre {programa} pelo WhatsApp (abre em nova aba)", que começa pelo texto visível (WCAG 2.5.3).

#### 🟢 `acessibilidade-semantica-12` — Landmarks sem nome único (`<nav>` sem aria-label, `<nav>` decorativo nas skins)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/site-header.tsx`, `src/routes/particular.tsx`, `src/components/course-skins/variants/ide-python.tsx`, `.../ide-logica.tsx`, `.../design-canva.tsx`, `.../planilha-pacote.tsx`
- **Evidência:** o `<nav>` do header não tem `aria-label`. Em `/particular/cursos/python` há dois `<nav>`, um da sidebar e um da skin IDE.
- **Diretriz:** [WAI-ARIA APG — landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- **Recomendação:**
  - `aria-label="Principal"` no header e `aria-label="Cursos"` na sidebar (`particular.tsx:399`).
  - Em `ide-python:55` e `ide-logica:92`, usar `role="group"` ou `tablist`, porque os botões são reais.
  - Em `design-canva:354` e `planilha-pacote:119`, trocar `<nav aria-hidden>` por `<div aria-hidden>`.

#### 🟢 `acessibilidade-semantica-13` — Ícones Phosphor e SVGs decorativos de curva sem `aria-hidden`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/phosphor.tsx`, `src/components/tech-hero.tsx`, `src/routes/index.tsx`
- **Evidência:** 21 SVGs do Phosphor sem `aria-hidden` em `/cursos/create/8-9-anos`, e 6 curvas na home.
- **Diretriz:** [W3C — imagens decorativas](https://www.w3.org/WAI/tutorials/images/decorative/)
- **Recomendação:**
  - `aria-hidden="true"` e `focusable="false"` no wrapper `phosphor()`.
  - Nas curvas: `tech-hero.tsx:67`, `index.tsx:210/275/451`, `particular.index.tsx:247` e `particular-course-page.tsx:289`, que cobre os 52 cursos.

#### 🟢 `acessibilidade-semantica-15` — Os seletores de nível (TierTabs) não informam qual está selecionado
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/particular-course-page.tsx`, `src/components/course-skins/variants/marketing-kit.tsx`, `.../ide-kit.tsx`, `.../planilha-pacote.tsx`
- **Evidência:** são botões com destaque só visual. As skins usam `role=tab` sem navegação por setas.
- **Diretriz:** [web.dev — ARIA e HTML](https://web.dev/learn/accessibility/aria-html)
- **Recomendação:**
  - `aria-pressed` e `role="group"` no TierTabs de `design-ui.tsx`, que é o que está em produção nas 5 skins de design.
  - O TierTabs de `particular-course-page` é código morto: remover ou ajustar.
  - Nas demais skins, `aria-pressed`, ou o padrão de abas completo.

#### 🟢 `acessibilidade-semantica-16` — O 100 de Acessibilidade em /particular é inflado, porque o Reveal deixa quase tudo com `opacity:0` e o axe ignora
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/reveal.tsx`, `src/hooks/use-reveal.ts`, `PENDENCIAS.md`
- **Evidência:** 38 blocos saem com `opacity:0` no Excel. O axe não avalia contraste em elementos invisíveis.
- **Diretriz:** [axe — color-contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast) ⚠️ A fonte não descreve o mecanismo.
- **Recomendação:**
  - Não usar o 100 como prova de nada.
  - Rodar o axe depois de rolar a página inteira, ou com um CSS de teste que força `opacity: 1`.
  - Não criar `?reveal=all` em produção.
  - Registrar o procedimento em `PENDENCIAS.md`.

### 5.11 Estratégia de conteúdo e intenção de busca (13 achados: 🟠 1 · 🟡 8 · 🟢 4)

> **Contexto da SERP:** observação aproximada de 24/09 via WebSearch, com índice dos EUA; confirmar no Search Console.
> - A Santos Tech **aparece** em 3 de 10 buscas: "curso de programação para crianças ribeirão preto", "colônia de férias ribeirão preto tecnologia" (é a home que aparece, não `/cursos/camps`) e "santos tech ribeirão preto".
> - **Não aparece** nas buscas de adulto:
>   - "escola de tecnologia RP"
>   - "curso de excel RP"
>   - "curso de informática RP"
>   - "curso de robótica RP"
>   - "curso de inteligência artificial RP"
>   - "aula particular de informática RP"
> - Nessas buscas dominam Senac, SESI, Funtec e Superprof.

#### 🟠 `estrategia-conteudo-intencao-04` — Robótica: a home diz "não trabalhamos com robótica de montagem", mas /cursos/academies vende uma Robotics Academy com kits físicos (decisão de negócio)
**Status:** confirmado · **Esforço:** S · **Impacto:** alto · **Escopo:** negócio
- **Evidência:**
  - O FAQ da home (`index.tsx:298-300`, também no FAQPage) diz: "Não trabalhamos com robótica de montagem…".
  - `cursos.academies.tsx:86-105` anuncia: "Robotics Academy — Robôs físicos que se mexem… Kits educacionais com motores, sensores… A criança monta, programa e testa robôs reais".
  - O FAQ da própria página de academies diz: "A criança monta o robô do zero".
  - `/cursos/academies` não recebe nenhum link interno.
  - Na busca "curso de robótica RP" aparecem Senac, SESI e Happy Code, e a Santos Tech não aparece.
  - Engloba `aeo-respostas-07`.
- **Diretriz:** o conteúdo deve ser preciso e consistente. Afirmações opostas sobre o mesmo serviço minam a confiança. [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Recomendação:**
  - (1) **Decisão do Henrique (§6, item 2):** a Robotics Academy (9–14 anos, com kit) é vendida hoje?
  - (2) **Se SIM:**
    - Reescrever a resposta em `index.tsx:299`. O FAQ visível e o JSON-LD saem do mesmo array, então mudam juntos.
    - Separar a "robótica tangível com Bee-Bot" (JR, 5–8 anos) da "Robotics Academy com kit" (9–14 anos).
    - Linkar `/cursos/academies` a partir da home.
  - (3) **Se NÃO:**
    - 301 de `/cursos/academies` para `/cursos`.
    - Tirar a URL do sitemap e o JSON-LD **no mesmo commit**.
    - Revisar `cursos.camps.tsx` e `index.tsx:469`.
    - Conferir o bot de WhatsApp.
  - (4) Nos dois casos, atualizar o `lastmod`.
- **Nota do verificador:** a severidade alta se mantém porque a resposta "não" está no FAQPage, que as IAs extraem com facilidade.

#### 🟡 `estrategia-conteudo-intencao-05` — Os 4 produtos infantis anunciados não têm URL própria: "curso de informática para crianças" cai numa âncora
**Status:** parcial · **Esforço:** M · **Impacto:** alto · **Escopo:** repo
- **Evidência:**
  - No header, Informática Júnior e Informática Create apontam para `/cursos#informatica`.
  - Os cards levam ao WhatsApp.
  - A home emite 4 Course sem página dedicada.
  - `/cursos/junior` e `/cursos/create` só cobrem a trilha de programação.
  - Na busca "curso de informática para crianças RP", aparece a home.
- **Diretriz:** fragmentos (#) não são páginas indexáveis, e cada conteúdo deve ter uma URL. [Google — estrutura de URL](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- **Recomendação:**
  - (A) Esforço S, fazer já: apontar Tecnologia Júnior e Tecnologia Create para as páginas que já existem, no header e nos schemas (`index.tsx:333/341`).
  - (B) Esforço M: criar `/cursos/informatica-infantil` como hub único, com seções Júnior 5–9 e Create 10–15, a partir de `src/data/ementa-inf-*`.
    - Title: "Curso de Informática para Crianças em Ribeirão Preto | Santos Tech".
    - No mesmo commit: header, schemas, card e sitemap.
  - ⚠️ **Não** usar `/cursos/informatica`, que já está ocupada por uma landing adulta de outro app, fora deste repositório e do sitemap. O destino dela é uma decisão à parte.
- **Nota do verificador:** a fonte citada originalmente não sustentava a afirmação. ⚠️ **Depende da decisão 1 do §6.**

#### 🟡 `estrategia-conteudo-intencao-06` — As páginas de curso particular não mostram prova de experiência: professor anônimo e nenhuma foto real
**Status:** parcial · **Esforço:** L · **Impacto:** médio · **Escopo:** repo
- **Evidência:**
  - `particular-course-page.tsx:426-450` tem só bullets genéricos.
  - `instructor` é a própria Organization.
  - A página do Excel tem 8 `<img>`: 6 decorativas com `alt=""` e 2 do logo. Nenhuma é foto de aula.
  - A home, em comparação, tem 10 fotos reais com alt descritivo.
- **Diretriz:** conteúdo com perspectiva de especialista e imagens de qualidade. [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) ⚠️ A fonte não trata especificamente de autor e fotos.
- **Recomendação:**
  - Campos opcionais no `CourseData`: `professor {nome, foto, bio}` e `fotos [{src, alt}]`. Renderizar só quando houver dado real; sem dado, fica o bloco atual.
  - Começar pelos cursos de maior intenção: excel, informatica, ia, python e power-bi.
  - `instructor` como Person só com nome autorizado.
  - Depende do Henrique (§6, item 10).
- **Nota do verificador:** não vender isso como risco de "scaled content abuse". Cada página tem FAQ e title próprios.

#### 🟡 `estrategia-conteudo-intencao-07` — Falta em /particular o vocabulário que o público adulto usa na busca
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** repo
- **Evidência:**
  - Em `/particular`: "aula particular" 0 vezes, "curso particular" 0, "professor particular" 0, "curso de informática" 0.
  - O H1 é "Comece do zero ou se especialize".
- **Diretriz:** pensar nas palavras que o usuário busca e colocá-las no título, no H1 e no corpo. [Google — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- **Recomendação:**
  - Em `particular.index.tsx`, um H1 ou subtítulo com "aulas particulares de tecnologia e informática em Ribeirão Preto".
  - Usar "curso de informática", "curso de Excel" e "aula particular" de forma natural no parágrafo de abertura.
  - Nos cursos, um parágrafo logo abaixo do H1: "Aula particular de <software> em Ribeirão Preto".
  - No máximo 1 ou 2 ocorrências por seção.
- **Nota do verificador:** a seção "Sobre o curso" citada no achado não existe.

#### 🟡 `estrategia-conteudo-intencao-10` — Colônia de férias sem datas de edição e marcada como Course, que não tem mais rich result (decisão de negócio)
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** negócio
- **Evidência:**
  - `cursos.camps.tsx:106-108` diz: "As datas exatas … a gente divulga e confirma no WhatsApp".
  - O JSON-LD usa Course, e não aparece nenhuma data em produção.
  - A busca "colônia … julho 2026" traz a home, não `/cursos/camps`.
  - O Course info foi removido em 09/2025.
  - Engloba `dados-estruturados-12`.
- **Diretriz:** o tipo Event exige `name`, `startDate` em ISO 8601 e `location` física, e só vale com datas reais e visíveis na página. [Google — Event](https://developers.google.com/search/docs/appearance/structured-data/event)
- **Recomendação:**
  - (1) O Henrique publica o calendário real (§6, item 12).
  - (2) Uma seção "Próximas edições" com semana, datas, vagas e R$ 939,90.
  - (3) Um `buildEventSchema` que gera um Event por semana, com:
    - `startDate` e `endDate` com fuso -03:00;
    - `EventScheduled`;
    - Place com o endereço;
    - `offers` 939.90 BRL;
    - `organizer`.
  - (4) Remover da página as edições passadas.
  - **Sem datas reais, não marcar Event.**

#### 🟡 `estrategia-conteudo-intencao-11` — O blog só fala com pais e crianças (8 posts) e não linka /particular
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** blog
- **Evidência:**
  - As categorias são "família" e "programação".
  - O índice do blog só linka `/privacidade` e `/termos`.
  - 7 dos 8 posts linkam `/cursos/*` no corpo, e nenhum linka `/particular`.
- **Diretriz:** conteúdo pensado para pessoas, com links internos entre conteúdo informativo e páginas de serviço. [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Recomendação:**
  - (1) Header e footer do blog com links para `/cursos` e `/particular` (esforço S).
  - (2) Um link contextual no post "brainrot-e-saude-mental".
  - (3) Uma categoria adulta, ex.: "carreira-e-trabalho", com posts escritos ou revisados por professor, cada um linkando o curso correspondente.
  - (4) Assinatura com nome e cargo.
- **Nota do verificador:** o título do achado exagera ao dizer "nem para /cursos". A lacuna real é `/particular` e a navegação do blog.

#### 🟡 `estrategia-conteudo-intencao-17` — Não criar páginas por bairro ou cidade (decisão correta); concentrar o sinal local em /contato e no GBP
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo
- **Evidência:**
  - Hoje não existem páginas por bairro, o que está correto.
  - O H1 de `/contato` é "Vamos conversar", sem localização e sem texto sobre como chegar.
- **Diretriz:** páginas-porta ("doorway") violam a política de spam. [Google — políticas de spam](https://developers.google.com/search/docs/essentials/spam-policies)
- **Recomendação:**
  - Manter a decisão de **não** criar páginas por bairro ou cidade.
  - Em `/contato`:
    - um H1 ou subtítulo "Santos Tech no Jardim América, Ribeirão Preto";
    - uma seção "Como chegar" só com fatos reais;
    - uma foto da fachada com alt local;
    - "Atendemos famílias de…" só com dados confirmados.
  - O Business Profile é uma tarefa à parte ([Perfil da Empresa — classificação local](https://support.google.com/business/answer/7091)).
- **Nota do verificador:** a afirmação sobre um concorrente (Código Kid) não foi reproduzida.

#### 🟡 `estrategia-conteudo-intencao-18` — As páginas por faixa etária usam jargão interno nos títulos e H1 ("CREATE Ano 6 — Arquitetura Viva: POO + Jogo Autoral")
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo
- **Evidência:**
  - Titles como "CREATE Ano 6 (13 a 14 anos) — Arquitetura Viva: POO + Jogo Autoral | Santos Tech".
  - H1 dos hubs: "CREATE" e "JR".
  - O `lastmod` dessas páginas é 2026-06-11.
- **Diretriz:** títulos descritivos, com as palavras que o usuário busca. [Google — title links](https://developers.google.com/search/docs/appearance/title-link)
- **Recomendação:**
  - Colocar primeiro no title o que o pai procura, ex.: "Curso de programação para crianças de 8 a 9 anos em Ribeirão Preto | CREATE Ano 1 – Santos Tech".
  - H1 descritivo nos hubs, com o nome do programa como eyebrow.
  - H1 das faixas com a idade e "programação".
  - Atualizar o `lastmod`.
  - Não criar páginas novas.
- **Nota do verificador:** o verificador subiu a severidade de baixa para média. ⚠️ **Depende da decisão 1 do §6.**

#### 🟡 `estrategia-conteudo-intencao-19` — O site não mede o valor da visita: o PostHog só captura pageview e consentimento, e os cliques no WhatsApp não viram evento nomeado
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** infra
- **Evidência:**
  - `posthog.capture` só aparece em `posthog.ts:112` (`$pageview`) e `:122` (`cookie_consent_decided`).
  - Nenhum dos ~30 CTAs de WhatsApp dispara evento.
  - O `$autocapture` já registra os cliques de quem consentiu.
  - Não há meta de verificação do Search Console, mas o DNS tem os TXT de verificação.
- **Diretriz:** medir o valor das visitas e usar os relatórios de Desempenho e de IA generativa. [Ajuda do Search Console — relatório de IA generativa](https://support.google.com/webmasters/answer/16984139?hl=en)
- **Recomendação:**
  - (1) Criar `trackCta(origem, destino)` em `posthog.ts`, emitindo `whatsapp_click` e `aula_experimental_click` a partir de um componente único de link de WhatsApp.
  - Decidir, com base no parecer de LGPD, se esse evento anônimo entra em `EVENTS_WITHOUT_CONSENT`.
  - Incluir o evento no Analytics do api-go.
  - (2) Search Console: relatórios de Desempenho e de IA generativa. Bing: importar do GSC.

#### 🟢 `estrategia-conteudo-intencao-08` — /particular não tem hub de categoria: 7 páginas de IA disputam a mesma intenção
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo
- **Evidência:**
  - As 8 "categorias" de `particular.index.tsx:38-45` apontam para um curso específico.
  - `/particular/ia` dá 404.
- **Diretriz:** agrupar páginas de tópicos parecidos. [Google — SEO Starter Guide: organize o site](https://developers.google.com/search/docs/fundamentals/seo-starter-guide#organize-your-site) ⚠️ A fonte não impõe hubs.
- **Recomendação:**
  - **Não** criar 8 rotas de hub.
  - Usar `/particular/cursos/ia` e `/office` como páginas amplas, com um bloco de links para os cursos específicos.
  - Diferenciar `ia` e `chatgpt`, ou juntar as duas.
  - Só criar categorias se o Search Console mostrar necessidade.

#### 🟢 `estrategia-conteudo-intencao-12` — Cinco páginas disputam "escola de tecnologia/programação em Ribeirão Preto" nos títulos
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo
- **Evidência:** home, `/sobre`, `/cursos`, `/contato` e `/links` têm títulos genéricos, e o delimitador alterna entre "—" e "|".
- **Diretriz:** title único, claro e conciso. [Google — title links](https://developers.google.com/search/docs/appearance/title-link)
- **Recomendação:**
  - Encurtar o title da home.
  - Padronizar o delimitador num helper.
  - Dar a `/contato` um título específico, ex.: "Endereço e WhatsApp — Santos Tech, Jardim América, Ribeirão Preto".
  - Não aplicar noindex em `/links` sem avaliar antes.
- **Nota do verificador:** rebaixado. A afirmação de que a description da home repete a do JSON-LD é **falsa**.

#### 🟢 `estrategia-conteudo-intencao-16` — O endereço antigo /adultos ainda aparece na busca pela marca, com o título "para Adultos"
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** externo
- **Evidência:**
  - `/adultos` responde 301 para `/particular`, o que está correto.
  - O WebSearch ainda mostra o título antigo, e o rename tem só 1 dia.
  - Não verificado: se o GBP, a bio do Instagram e o Facebook usam `/adultos`.
  - Engloba `seo-local-21`.
- **Diretriz:** o 301 sinaliza a URL canônica nova. [Google — redirecionamentos](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- **Recomendação:**
  - Não há o que corrigir no site.
  - Trocar os links externos (GBP, Instagram, Facebook e assinatura de e-mail) para `/particular`.
  - Inspeção de URL é opcional.
  - Manter o 301 por pelo menos 1 ano, e nunca reaproveitar `/adultos`.
  - Reavaliar em 2 a 4 semanas.

#### 🟢 `estrategia-conteudo-intencao-20` — Não há calendário editorial ligado à sazonalidade (férias em jun/jul e dez/jan; matrículas em fev/mar e ago)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** blog
- **Evidência:**
  - Os 8 posts são de 06/08 a 24/09, e nenhum fala de colônia nem de volta às aulas.
  - O Google Trends devolveu 429, então a sazonalidade **não foi medida**.
- **Diretriz:** [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) ⚠️ A fonte cobre só o método.
- **Recomendação:**
  - (1) Primeiro, esforço S: publicar em `/cursos/camps` as datas da edição dez/2026–jan/2027. A intenção de busca já começa em outubro.
  - (2) Depois, um calendário enxuto com 12 pautas numa spec datada, sem pautas que dependam de decisões ainda não tomadas.
  - Confirmar os picos manualmente no Google Trends.

### 5.12 Blog e integração (15 achados: 🟡 4 · 🟢 11)

> Exceto o `blog-integracao-11`, que está neste repositório, as correções são no **repositório do blog**, que não foi localizado nesta máquina.

#### 🟡 `blog-integracao-03` — Posts sem author.url e sem página de autor (ProfilePage)
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** blog
- **Evidência:**
  - O `author` é `{"@type":"Person","name":"Guilherme Barbosa Ferrarezi"}`, sem `url` nem `sameAs`.
  - O byline não é link.
  - `/blog/autor/guilherme` dá 404.
- **Diretriz:** Article com `author.url`, e uma página de autor com ProfilePage e Person. [Google — Profile page](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- **Recomendação:**
  - Criar `/blog/autor/guilherme` com ProfilePage e Person: `jobTitle`, credencial real, foto real, `worksFor` apontando para o `@id` da organização e `sameAs`.
  - Emitir o `author` com `@id` e `url`, e transformar o byline em link.
  - Incluir a página no sitemap.
  - Usar só credenciais confirmadas.

#### 🟡 `blog-integracao-04` — O blog não tem nenhum link para o site principal (home, /cursos, /particular, /contato)
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** blog
- **Evidência:**
  - O índice do blog só linka `/privacidade` e `/termos`.
  - O logo e o item "Início" apontam para `/blog`.
  - O post "brainrot" não tem nenhum link.
  - Engloba `arquitetura-links-internos-15`.
- **Diretriz:** toda página importante precisa receber link. [Google — links rastreáveis](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- **Recomendação:**
  - (1) No header: "Site Santos Tech", "Cursos" e "Aulas particulares".
  - (2) No rodapé: endereço, telefone e links.
  - (3) Um bloco de CTA obrigatório no template do post.
  - (4) Link para `/particular/cursos/<slug>` só quando existirem posts para adultos.

#### 🟡 `blog-integracao-05` — O blog diz que o CREATE é de 8 a 14 anos; o site, de 10 a 15
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** blog
- **Evidência:** o post "ja-sabe-mexer-no-computador" diz "JR (5 a 9 anos)" e "CREATE (8 a 14 anos)". O Course da home diz 10–15.
- **Diretriz:** [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Recomendação:**
  - Primeiro, a decisão 1 (§6).
  - Depois, aplicar no site inteiro, incluindo o `typicalAgeRange`.
  - Só então corrigir o blog.
  - Uma constante única em `src/lib/programas.ts`.
  - ⚠️ Não trocar o blog para 10–15 sozinho, porque ele passaria a contradizer `/cursos/create`.

#### 🟡 `blog-integracao-13` — O sitemap do blog não tem lastmod nas listagens, e o logo do blog está numa URL bloqueada pelo robots
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** blog · **Arquivos:** `public/robots.txt`, `public/sitemap.xml`, `src/lib/seo.ts`, `src/assets/optimized/logo-192.webp`
- **Evidência:**
  - As 4 listagens do sitemap não têm `lastmod`.
  - O `sitemap_index.xml` dá 404, o que não é problema.
  - O logo da Organization e do `publisher` do blog é `/assets/logo-192-CDh-yrLA.webp`. Essa URL está **bloqueada** pelo `Disallow: /assets/` e tem hash no nome.
  - Engloba `blog-integracao-01`.
- **Diretriz:** o `lastmod` só é usado quando é preciso. [Google — criar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **Recomendação:**
  - (1) Servir o logo numa URL estável e rastreável, `public/logo-512.png` (sem hash, 112 px ou mais, quadrado), e usá-la no logo, no `publisher` e no og:image do blog. Isso se resolve também com `tecnico-rastreio-indexacao-01`.
  - (2) Colocar `lastmod` nas listagens.
  - (3) O sitemap index é opcional.

#### 🟢 `blog-integracao-02` — /blog emite um WebSite duplicado, com o nome "Blog · Santos Tech"
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog · **Arquivos:** `src/lib/seo.ts`, `src/routes/__root.tsx`
- **Evidência:** o blog declara um WebSite próprio, com `name` "Blog · Santos Tech" e `og:site_name` "Blog Santos Tech".
- **Diretriz:** o Google não suporta nome de site em subdiretório. [Google — nomes de site](https://developers.google.com/search/docs/appearance/site-names)
- **Recomendação:**
  - No app do blog, trocar por um nó `Blog`, com `isPartOf` e `publisher` apontando para os `@id` do site.
  - Remover a Organization duplicada.
  - Os arquivos deste repositório já estão corretos.

#### 🟢 `blog-integracao-06` — O `publisher` do BlogPosting não reusa o `@id` da Organization
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** o `publisher` não tem `@id`, e o índice do blog emite uma 3ª Organization.
- **Diretriz:** [Google — Article](https://developers.google.com/search/docs/appearance/structured-data/article) ⚠️ A fonte não trata do `@id` em si.
- **Recomendação:**
  - `publisher` com `{Organization, "@id": ".../#organization", name, url, logo}`.
  - O índice referencia o mesmo `@id`.
  - Um logo único, de 112 px ou mais, em PNG ou JPG.

#### 🟢 `blog-integracao-07` — Variantes de URL do blog (barra final, maiúsculas) respondem 404 em vez de redirecionar
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog · **Arquivos:** `docker/server.ts`
- **Evidência:** `/blog/post/…/` e `/blog/Post/…` dão 404.
- **Diretriz:** [Google — estrutura de URL](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- **Recomendação:**
  - No app do blog, 301 de `/blog/<x>/` para `/blog/<x>`, exceto o índice.
  - No site principal, trocar o 307 por 301 (`tecnico-rastreio-indexacao-08`).

#### 🟢 `blog-integracao-08` — A data do post aparece sem rótulo e sem `<time datetime>`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** a página mostra só "24/09/2026", sem `datetime` nenhum.
- **Diretriz:** data visível, com rótulo e igual à do markup. [Google — datas de publicação](https://developers.google.com/search/docs/appearance/publication-dates)
- **Recomendação:**
  - `<time datetime>Publicado em …</time>`.
  - "Atualizado em" só quando houver edição real.
  - `dateModified` vindo do `updated_at`.
- **Nota do verificador:** a data visível já bate com o markup.

#### 🟢 `blog-integracao-09` — BlogPosting.image com uma só imagem e proporção fora de 16:9, 4:3 ou 1:1
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** as capas têm 1600x823 e 2000x1333. A capa do post "brainrot" é retrato (2129x3193).
- **Diretriz:** [Google — Article](https://developers.google.com/search/docs/appearance/structured-data/article)
- **Recomendação:**
  - Gerar versões 16:9, 4:3 e 1:1, com 1200 px de largura ou mais.
  - Corrigir a capa em retrato e a capa repetida.
  - Adicionar `max-image-preview:large`.

#### 🟢 `blog-integracao-10` — O BreadcrumbList do blog começa em "Blog", não na home do site
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** a trilha é Blog → Família → post, sem "Início".
- **Diretriz:** [Google — Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- **Recomendação:** acrescentar "Início" (`https://santos-tech.com/`) no início da trilha e exibir um breadcrumb visível com link. Isso resolve junto com `-04`.

#### 🟢 `blog-integracao-11` — A home e o rodapé do site quase não expõem o blog (só 1 link no header)
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/site-footer.tsx`, `src/routes/links.tsx`, `src/routes/index.tsx`
- **Evidência:**
  - A home tem 2 hrefs para `/blog`: o do header desktop e o do mobile.
  - O footer não tem nenhum.
  - Em `/links`, o card "Blog" vem da API e não aparece no HTML servido.
- **Diretriz:** [Google — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) ⚠️ A fonte não sustenta tudo.
- **Recomendação:**
  - "Blog" no footer.
  - Em `/links`, um link fixo no HTML ou o prefetch no loader.
  - Uma seção "Do blog" na home é opcional.
- **Nota do verificador:** o blog já recebe link em todas as páginas pelo header, por isso o impacto é baixo.

#### 🟢 `blog-integracao-12` — O feed RSS não tem imagem de capa (enclosure)
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** o RSS 2.0 é válido, mas o `content:encoded` não tem `<img>` nem `<enclosure>`.
- **Diretriz:** [Google — sitemaps e RSS](https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom) ⚠️ A fonte não trata disso.
- **Recomendação:**
  - `<enclosure>` ou `media:content` em cada item.
  - `application/rss+xml` é opcional.
- **Nota do verificador:** a parte sobre "sem autodiscovery" foi **refutada**. O `<link rel="alternate">` já existe.

#### 🟢 `blog-integracao-15` — O Open Graph dos artigos está incompleto
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** faltam `article:modified_time`, `article:section` e `article:tag`, e o `article:author` é texto, não URL.
- **Diretriz:** [Open Graph protocol](https://ogp.me/)
- **Recomendação:**
  - Emitir `article:modified_time` (igual ao `dateModified`) e `article:section`.
  - `article:tag` só se houver tags.
  - `article:author` com a URL do autor, depois do `-03`.

#### 🟢 `blog-integracao-16` — O alt da capa repete o título, e os nomes de arquivo são hashes
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog
- **Evidência:** o alt da capa é igual ao título do post, e os arquivos têm nomes como `d71a0a20bc305eeb.jpg`.
- **Diretriz:** alt que descreve a cena, e nome de arquivo descritivo. [Google — Imagens](https://developers.google.com/search/docs/appearance/google-images)
- **Recomendação:**
  - Um campo "alt da capa" no CMS.
  - Nome de arquivo descritivo gerado a partir do título.
  - ⚠️ **Não** mudar o `alt=""` do logo e dos cards: eles ficam dentro de links que já têm texto.

#### 🟢 `blog-integracao-18` — O HTML de cada post repete o conteúdo inteiro no estado de hidratação
**Status:** parcial · **Esforço:** M · **Impacto:** baixo · **Escopo:** blog
- **Evidência:**
  - O post tem 58 KB, e o corpo aparece duas vezes.
  - `/blog/?page=999` responde 200, o que é um soft 404.
- **Diretriz:** [web.dev — Core Web Vitals](https://web.dev/articles/vitals) ⚠️ A fonte não trata disso.
- **Recomendação:**
  - Prioridade mínima.
  - Mais urgente: fazer `/blog/?page=999` responder 404 e investigar o cache do SSR, que devolve o mesmo `dehydratedAt` para posts diferentes.

### 5.13 Rodada de lacunas: SEO técnico e infraestrutura (8 achados: 🟡 3 · 🟢 5)

#### 🟡 `lacuna-infra-01` — O servidor Bun comprime todo HTML em Brotli nível 11 de forma síncrona e só depois de ter a página inteira: ~120 ms de CPU por página, e o Cloudflare recomprime de qualquer jeito
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--01`
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `docker/server.ts`
- **Evidência:**
  - Em `docker/server.ts:155-159`, o servidor faz `await response.arrayBuffer()`, que espera o SSR terminar por inteiro, e depois chama `brotliCompressSync(body)`. No Bun 1.3.14 o nível padrão é o 11.
  - Tempo de compressão por página: home 121–130 ms (no nível 4, 1,2 ms), Excel 109 ms, `/particular` 80 ms.
  - O Cloudflare pede `br, gzip` à origem e recomprime.
  - É o mesmo achado que `lacuna-perf-01`.
- **Diretriz:** manter o TTFB baixo sob carga. [web.dev — otimizar TTFB](https://web.dev/articles/optimize-ttfb)
- **Recomendação:**
  - Usar `BROTLI_PARAM_QUALITY: 4`, que custa ~1 ms e gera um arquivo ~15% maior, ou não comprimir `text/html` na origem.
  - Adicionar o `vary` com `append`, sem duplicar.
  - Deixar o streaming para um 2º passo, depois de confirmar que o SSR realmente faz streaming.
  - Validar com 8 requisições simultâneas.
- **Nota do verificador:** não se reproduziu que o RUM seja a causa da recompressão. Rebaixado de alta.

#### 🟡 `lacuna-infra-02` — JS, CSS e imagens chegam em gzip, não em Brotli, a navegadores reais; e AVIF, PNG e JPEG são recomprimidos
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--02`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `docker/server.ts`, `Dockerfile`
- **Evidência:**
  - Com o `Accept-Encoding` do Chrome, o `index-_iR9xpKv.js` chega em gzip com 316.336 B. Em Brotli 11 seriam 259.155 B.
  - O CSS chega com 40.862 B em gzip, contra 28.671 B em Brotli.
  - O `logo-192.avif` fica **maior** comprimido.
  - É o mesmo achado que `lacuna-perf-02`.
- **Diretriz:** [Traefik — middleware compress](https://doc.traefik.io/traefik/reference/routing-configuration/http/middlewares/compress/)
- **Recomendação:** qualquer uma destas três saídas:
  - Pré-comprimir no build (`.br` em q11 e `.gz` em nível 9) e servir o arquivo certo com `Vary`.
  - No Dokploy/Coolify, `encodings 'br,gzip'` e `excludedContentTypes 'image/*,font/woff2'`.
  - Desligar o compress para `/assets` e deixar o Cloudflare comprimir (ele entrega zstd).
  - Validar com o `Accept-Encoding` real do Chrome.
- **Nota do verificador:** atribuir o gzip ao Traefik é inferência, porque a configuração de infra não está no repositório.

#### 🟡 `lacuna-infra-03` — robots.txt servido com max-age de 7 dias e cacheado na borda, sem purge no deploy
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--03`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra · **Arquivos:** `docker/server.ts`, `public/robots.txt`
- **Evidência:**
  - `docker/server.ts:75-86` aplica 604800 s (7 dias) ao robots, ao sitemap e ao `sitemap-0` (que dá 404).
  - Na borda, o robots estava em HIT com `Age` de 77.698 s, uma cópia anterior ao deploy do PR #57.
  - Não existe script de purge.
  - É o mesmo achado que `lacuna-geo-06`.
- **Diretriz:** o Google guarda o robots.txt em cache por até 24 h, mas respeita o `max-age`. [Google — robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- **Recomendação:**
  - Baixar o `max-age` para 3600 e remover o `/sitemap-0.xml`.
  - Passo do Henrique: criar um token com escopo `Zone.Cache Purge` e fazer purge por URL depois de cada deploy. Antes, confirmar se a plataforma é Coolify ou Dokploy.
  - Até isso existir, fazer purge manual depois de mudar o robots.
- **Nota do verificador:** isolado, o impacto é baixo. Importa porque a correção do `tecnico-rastreio-indexacao-01` depende dele.

#### 🟢 `lacuna-infra-04` — Requisições cujo Accept não inclui text/html recebem HTTP 500, e qualquer /_serverFn/* também
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--04`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `docker/server.ts`, `src/server.ts`
- **Evidência:**
  - Com `Accept: text/markdown` (e também `text/plain`, `application/json` ou `xhtml`), a resposta é 500 com `{"error":"Only HTML requests are supported here"}`. A origem é `createStartHandler.js:342`.
  - É o mesmo achado que `lacuna-geo-03`.
- **Diretriz:** quando nenhuma representação atende o Accept, o servidor responde 406 ou ignora o header. Nunca 500. [RFC 9110 §12.5.1](https://www.rfc-editor.org/rfc/rfc9110.html#section-12.5.1)
- **Recomendação:**
  - Em `docker/server.ts`, reescrever o Accept para `text/html` nas páginas.
  - `/_serverFn/*` passa a responder 404.
  - Adicionar um teste.
- **Nota do verificador:** o Googlebot manda `text/html` e recebe 200, então o efeito é pequeno. A mesma questão aparece em média em `lacuna-geo-03`, e o plano (§7) trata as duas como um item só.

#### 🟢 `lacuna-infra-05` — Um cache MISS no Cloudflare custa ~590 ms, contra ~175 ms indo direto à origem (não verificado no painel)
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--05`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra
- **Evidência:**
  - `/sitemap.xml` em DYNAMIC: 175–198 ms. Em MISS: 585–611 ms. Em HIT: 39–55 ms.
  - A origem é uma VPS Contabo. A página oficial de localizações da Contabo não lista datacenter na América do Sul.
- **Diretriz:** [Cloudflare — Tiered Cache](https://developers.cloudflare.com/cache/how-to/tiered-cache/)
- **Recomendação:**
  - Conferir no painel se o Tiered Cache está ativo e anotar a região da VPS.
  - Fazer um teste A/B com pelo menos 10 amostras.
  - Prioridade baixa.
  - Mover a origem para São Paulo é decisão de custo (§6, item 22).
- **Nota do verificador:** a medição se confirma, mas a causa não. O efeito aparece só no primeiro acesso por POP depois do deploy.

#### 🟢 `lacuna-infra-06` — Sem validador HTTP confiável: o HTML e o sitemap vêm sem ETag e sem Last-Modified, então o Googlebot nunca recebe 304
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--06`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `docker/server.ts`
- **Evidência:**
  - Uma requisição condicional (`If-None-Match` ou `If-Modified-Since`) recebe 200 com a página inteira.
  - Nos estáticos, o `last-modified` é igual ao `Date` de cada requisição.
  - É o mesmo achado que `lacuna-geo-07`.
- **Diretriz:** os crawlers do Google suportam ETag e Last-Modified, e preferem ETag. [Google — visão geral dos crawlers](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers)
- **Recomendação:**
  - Gerar um ETag forte a partir do hash do corpo, antes da compressão, e responder 304 quando bater.
  - `hash(build + pathname)` só serve se o SSR for determinístico.
  - Nos estáticos, ETag por tamanho + data de modificação e um `Last-Modified` real.
  - ⚠️ A ofuscação de e-mail muda os bytes da resposta a cada requisição em 4 páginas.

#### 🟢 `lacuna-infra-07` — O sitemap mantém `<priority>` e `<changefreq>` nas 74 URLs
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--07`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `public/sitemap.xml`
- **Evidência:** os campos aparecem nas 74 URLs. A home declara `changefreq weekly`, mas tem `lastmod` 2026-06-11.
- **Diretriz:** o Google ignora `priority` e `changefreq`. [Google — criar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **Recomendação:** remover os dois campos e deixar só `<loc>` + um `lastmod` real, num commit isolado.
- **Nota do verificador:** a "automação do sitemap já pendente" citada no achado **não existe** em `PENDENCIAS.md`.

#### 🟢 `lacuna-infra-08` — O blog usa um arquivo com hash do build do site principal como logo e og:image
**ID completo:** `lacuna-seo-t-cnico-e-infraestrutura-headers-cache-redirects-sitemap-robots-servidor-bun-cloudflare--08`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** blog · **Arquivos:** `src/assets/optimized/logo-192.webp`
- **Evidência:**
  - As 12 URLs do blog usam `/assets/logo-192-CDh-yrLA.webp`.
  - Cada deploy gera um `dist` novo sem os hashes antigos. Se o hash mudar, o logo dá 404 e o preview no WhatsApp quebra.
- **Diretriz:** uma URL com hash de conteúdo muda sempre que o arquivo muda. [web.dev — cache](https://web.dev/articles/love-your-cache)
- **Recomendação:**
  - No repositório do blog, o og:image passa a ser `https://santos-tech.com/og-image.png` (1200x630).
  - O logo do header passa a ser `/favicon.png` ou um `public/brand/logo-192.webp`. Neste caso, incluir `/brand/` em `PUBLIC_SUBDIRS`.

### 5.14 Rodada de lacunas: conteúdo, E-E-A-T e links internos (9 achados: 🟡 6 · 🟢 3)

#### 🟡 `lacuna-conteudo-01` — A ementa "As 40 aulas do ano, uma por uma" das 9 páginas infantis não está no HTML (o Radix desmonta os módulos fechados): ~6.700 palavras somem do índice
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-01`
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-page.tsx`, `src/components/ui/accordion.tsx`, `src/routes/cursos.create.8-9-anos.tsx`, `src/routes/cursos.junior.5-6-anos.tsx`
- **Evidência:**
  - O `LessonAccordion` (`course-page.tsx:611-697`) não usa `forceMount`.
  - Nas 9 rotas, 0 de 40 objetivos de aula estão no HTML.
  - "Bem-vindo ao Arcade", "Meu Personagem em Pixels" e "Sistema de Vidas" não aparecem em `/cursos/create/8-9-anos`.
  - Ficam escondidas de 632 a 847 palavras por página.
  - É o mesmo achado que `lacuna-geo-02`.
- **Diretriz:** o conteúdo precisa estar no DOM para ser indexado, e o Google não interage com a página. [Google — lazy-loading](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading)
- **Recomendação:**
  - Trocar por `<details>`/`<summary>` nativo, no padrão do `faq-item.tsx`.
  - Alternativa: `forceMount` só nesse `AccordionContent`, conferindo a animação.
  - Não inflar o `syllabusSections`.
  - Validar com `curl -s URL | grep -c 'Bem-vindo ao Arcade'` (esperado ≥ 1) nas 9 rotas, e tirar screenshot com o módulo aberto e fechado.
  - Fazer no mesmo PR do `aeo-respostas-02`.
- **Nota do verificador:** a nota defendia "alta", mas o registro final ficou em média. ⚠️ Este achado **corrige** um ponto positivo da frente de acessibilidade, que dizia que o conteúdo recolhido do Radix fica no HTML (Anexo B).

#### 🟡 `lacuna-conteudo-02` — Em 18 cursos particulares, só o conteúdo do módulo aberto existe no HTML: 603 de 696 tópicos (87%) estão fora
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-02`
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-skins/variants/ide-python-apis.tsx`, `src/components/course-skins/informatica.tsx`, `src/components/course-skins/variants/ia-chat.tsx`, `src/components/course-skins/ide.tsx`, `src/components/course-skins/variants/ide-ads.tsx`
- **Evidência:**
  - As skins renderizam só o módulo selecionado: `useState(0)` e depois `tier.modules[atual]`.
  - Tópicos no HTML: ads 4/73, fullstack 4/57, python-apis 6/46, typescript 5/43, n8n 6/40, python 6/39, informatica 5/38, make 6/38. Também afeta agentes-ia, backend, chatgpt, davinci, frontend, git, jogos, logica, mobile e premiere.
  - No total, 93 de 696 tópicos estão presentes.
  - É o mesmo achado que `lacuna-geo-01`.
- **Diretriz:** [Google — lazy-loading](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading)
- **Recomendação:**
  - Renderizar desde o SSR os tópicos de **todos** os módulos e recolher os inativos com `hidden` ou CSS, sem desmontar.
  - Não criar uma `<ol>` duplicada.
  - Um script de checagem (tópicos da rota × HTML, sem contar o JSON-LD) rodando contra o build local, com meta de 100% nos cursos particulares.
- **Nota do verificador:** sobre as páginas completas, a frente GEO contou 34, e o verificador desta frente contou 37 numa base de 55 páginas. A contagem deve ser confirmada pelo script, usando como base as 52 rotas do sitemap.

#### 🟡 `lacuna-conteudo-03` — A modalidade se contradiz: os 52 cursos oferecem "Aula Online se Precisar", mas a mesma página, o hub e o JSON-LD dizem "100% presencial" (decisão de negócio)
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-03`
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** negócio · **Arquivos:** `src/components/course-skins/shared.tsx`, `src/routes/particular.index.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - Os DIFERENCIAIS (`shared.tsx:136-142`) incluem "Aulas Gravadas a Pedido" e "Aula Online se Precisar".
  - A mesma página diz "100% presencial".
  - O hub diz "Aula de verdade, não mais um curso online".
  - O JSON-LD usa `courseMode: Onsite`.
  - É o mesmo achado que `lacuna-geo-05`.
- **Diretriz:** [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Recomendação:**
  - **Decisão do Henrique (§6, item 9).**
  - Se o online for exceção (reposição): trocar por "Presencial em Ribeirão Preto", renomear o card para "Reposição online ao vivo" e manter `Onsite`.
  - Se for oferta regular: usar `Blended`. Hoje `seo.ts:227` não mapeia "blended", então é preciso acrescentar esse ramo.
  - Nos dois casos, uma pergunta "Tem aula online?" no FAQ.

#### 🟡 `lacuna-conteudo-04` — /particular/cursos/ads usa nome e vocabulário de graduação regulada ("Formado em ADS", "disciplinas", "Projeto de Conclusão de Curso") para um curso livre de 48 h (decisão de negócio)
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-04`
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** negócio · **Arquivos:** `src/routes/particular.cursos.ads.tsx`, `src/components/course-skins/variants/ide-ads.tsx`, `public/sitemap.xml`
- **Evidência:**
  - O title é "Curso de ADS — Formação Profissional…" e o H1, "ADS — Análise e Desenvolvimento de Sistemas".
  - A skin mostra "disciplina X de 16" e o selo "Formado em ADS".
  - Há um "Projeto de Conclusão de Curso".
  - São 48 h no total, cerca de 3 h por "disciplina".
  - O público-alvo é descrito como "quer formação formal", e o resultado prometido é "pleno/sênior".
- **Diretriz:** ADS é graduação tecnológica. [IFRS — curso de ADS](https://ifrs.edu.br/bento/o-curso-de-ads/). É referência de graduação, não diretriz do Google.
- **Recomendação:**
  - (1) Title: "Curso de Desenvolvimento de Sistemas (curso livre) em Ribeirão Preto — Santos Tech".
  - Trocar "disciplina" por "módulo", "Projeto de Conclusão de Curso" por "Projeto final" e "Formado em ADS" por "Trilha concluída". Tirar "pleno/sênior".
  - (2) Perto do H1 e no FAQ: "Curso livre presencial, com certificado da Santos Tech. Não é graduação nem tecnólogo reconhecido pelo MEC."
  - (3) Trocar o slug é decisão do Henrique. Se trocar, fazer 301 e atualizar o sitemap no mesmo commit.
- **Nota do verificador:** o risco maior é de comunicação ao consumidor, não de SEO.

#### 🟡 `lacuna-conteudo-05` — /sobre, /sobre/visao e /contato apresentam a escola só como infantil e omitem a linha particular (53 URLs)
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-05`
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/sobre.index.tsx`, `src/routes/sobre.visao.tsx`, `src/routes/contato.tsx`
- **Evidência:**
  - `/sobre` diz "escola presencial premium de tecnologia para crianças e adolescentes".
  - As palavras "particular", "adulto" e "qualquer idade" têm 0 ocorrências no texto visível.
  - O JSON-LD, por outro lado, fala em dois públicos.
- **Diretriz:** [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Recomendação:**
  - Um bloco em `/sobre` com as duas linhas de negócio, com links para `/cursos` e `/particular`.
  - Ajustar as meta descriptions de `/sobre` e `/contato`.
  - Derivar a contagem de cursos da fonte de dados e corrigir o "43 cursos" do JSON-LD no mesmo commit.
  - `/sobre/visao` pode continuar focada no infantil.

#### 🟡 `lacuna-conteudo-06` — Fotos de adolescentes com alt de "Criança de 6 anos" e "Criança de 7 anos" em /cursos/junior (5 a 9 anos); na home, a foto de um menino vira "Aluna"
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-06`
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/routes/cursos.junior.index.tsx`, `src/components/hero-collage.tsx`, `src/routes/index.tsx`
- **Evidência:**
  - `cursos.junior.index.tsx:545-546`: `students-2`, com alt "Criança de 6 anos criando jogo no ScratchJr", mostra um adolescente digitando código num editor de texto.
  - `:568-569`: `students-3`, com alt "Criança de 7 anos programando no Scratch", mostra 4 adolescentes conversando.
  - `hero-collage.tsx:17` descreve a foto de um menino como "Aluna".
- **Diretriz:** o alt deve descrever a imagem fielmente. [Google — Imagens](https://developers.google.com/search/docs/appearance/google-images)
- **Recomendação:**
  - Corrigir os 3 alts:
    - "Aluno adolescente programando em editor de código na Santos Tech"
    - "Grupo de alunos em aula na Santos Tech"
    - "Aluno programando na aula de tecnologia da Santos Tech"
  - Melhor ainda: tirar essas fotos de `/cursos/junior`.
  - No médio prazo, uma sessão de fotos das turmas JR com termo de uso de imagem (§6, item 21).
  - O alt de `index.tsx:136` está correto.

#### 🟢 `lacuna-conteudo-07` — O link "Blog" do header aponta para /blog, que faz 301 para /blog/
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-07`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/site-header.tsx`
- **Evidência:** `site-header.tsx:118` e `:216` usam `href="/blog"`, que responde 301 para o canônico `/blog/`.
- **Diretriz:** o link interno deve apontar direto para a URL canônica. [Google — consolidar URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- **Recomendação:** trocar por `href="/blog/"`. Validar com `curl -s --compressed https://santos-tech.com/ | grep -ao 'href="/blog[^"]*"'`.

#### 🟢 `lacuna-conteudo-08` — Os e-mails de contato aparecem como "[email protected]" no HTML de /contato, /particular, /privacidade e /termos
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-08`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** infra · **Arquivos:** `src/routes/contato.tsx`, `src/components/legal-page.tsx`, `src/routes/particular.index.tsx`
- **Evidência:**
  - O Email Obfuscation do Cloudflare está ativo.
  - Em `/contato`, o endereço decodificado é `ceo@santos-games.com` (`contato.tsx:88`).
  - Em `/privacidade` há 2 e-mails ofuscados.
  - É o mesmo achado que `lacuna-geo-04`.
- **Diretriz:** [Cloudflare — Email Address Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/)
- **Recomendação:**
  - Desligar no painel (passo do Henrique). O `<!--email_off-->` no JSX não sai no SSR.
  - Trocar o `ceo@santos-games.com` em `contato.tsx:82/88` e em `seo.ts:39`.
- **Nota do verificador:** o achado original dizia que `/contato` decodificava para `contato@santos-tech.com`, e isso estava errado.

#### 🟢 `lacuna-conteudo-09` — O H1 de 6 páginas sai com palavras coladas quando o texto é extraído sem CSS ("aprende acriar", "Design GráficoCanva Pro")
**ID completo:** `lacuna-conte-do-on-page-e-e-a-t-e-links-internos-09`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/index.tsx`, `src/components/course-skins/design.tsx`
- **Evidência:**
  - O H1 da home é montado com `<span class="block">` sem espaço entre eles.
  - A skin de design faz o mesmo em canva, capcut, davinci, premiere e photoshop.
- **Diretriz:** [MDN — textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- **Recomendação:** inserir `{" "}` entre os spans em `index.tsx:403-405` e em `design.tsx:246-249`, e conferir as outras skins. O visual não muda.

### 5.15 Rodada de lacunas: GEO/AEO e citabilidade (9 achados: 🟡 5 · 🟢 4)

> Cinco destes achados são o mesmo problema de outras frentes, visto pelo ângulo de GEO:
> - `lacuna-geo-01` = `lacuna-conteudo-02`
> - `-02` = `lacuna-conteudo-01`
> - `-03` = `lacuna-infra-04`
> - `-04` = `lacuna-conteudo-08`
> - `-05` = `lacuna-conteudo-03`
> - `-06` = `lacuna-infra-03`
> - `-07` = `lacuna-infra-06`
>
> Aqui estão só a evidência e a recomendação complementares.

#### 🟡 `lacuna-geo-01` — Conteúdo programático de 18 dos 52 cursos fora do HTML: 603 de 1.753 tópicos do catálogo (34%) invisíveis para Google e LLMs
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-01`
**Status:** parcial · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-skins/variants/ide-ads.tsx`, `.../ide-python.tsx`, `src/components/course-skins/informatica.tsx`, `.../ia-chat.tsx`, `.../ia-agentes.tsx`, `.../design-davinci.tsx`, `.../design-premiere.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - Um script comparou os 1.753 tópicos declarados no código com o HTML de produção (25/09): faltam 603.
  - Afeta 13 dos 14 cursos de Programação (só o de SQL escapa), agentes-ia, chatgpt, davinci, premiere e informatica.
  - Os outros 34 cursos (Office, Marketing, TI e 3D) estão 100% no HTML.
- **Diretriz:** o Google não interage com a página, e o conteúdo importante deve estar em forma de texto. [Google — lazy-loading](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading)
- **Recomendação:**
  - Renderizar no SSR todos os módulos das 7 skins afetadas, ocultando os não selecionados com `hidden="until-found"` ou CSS. A interação continua igual.
  - Um teste de regressão: o SSR de cada rota deve conter 100% dos tópicos do `COURSE_DATA`.
  - Prioridade média, **depois** dos itens de lead local (link para `/particular`, rodapé com endereço e telefone, GBP).
  - Corrigir a referência para `seo.ts:341`.
- **Nota do verificador:** as páginas continuam indexadas por título, módulos e FAQ. Perdem-se os termos de cauda longa, como "Next.js App Router".

#### 🟡 `lacuna-geo-02` — Das 360 aulas das 9 páginas infantis, nenhum objetivo chega ao HTML
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-02`
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/course-page.tsx`, `src/components/ui/accordion.tsx`, `src/routes/cursos.create.8-9-anos.tsx`
- **Evidência:**
  - São 360 aulas declaradas, e 0 objetivos no HTML.
  - Só 2 títulos aparecem, e por coincidência, porque o mesmo texto está em outra seção.
  - O H2 "As 40 aulas do ano, uma por uma" está no HTML, mas o conteúdo não.
- **Diretriz:** [Google — lazy-loading](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) ⚠️ A frase "o Google não clica em acordeões" não está literalmente na fonte.
- **Recomendação:**
  - `forceMount` no `AccordionPrimitive.Content`. Com isso o Radix aplica `hidden` quando o item está fechado, sem desmontar.
  - Conferir a animação e usar `data-[state=closed]:hidden` se precisar.
  - Aplicar ao FAQ infantil no mesmo PR.
  - O `syllabusSections` é opcional.
- **Nota do verificador:** o nome, as horas e a insígnia dos módulos **estão** no HTML. A página descreve o currículo por módulo, mas não por aula.

#### 🟡 `lacuna-geo-03` — Requisições com Accept sem text/html (ex.: `text/markdown`, usado por agentes de IA) recebem HTTP 500 em todas as rotas
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-03`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `docker/server.ts`
- **Evidência:**
  - Dá 500 nas rotas `/`, `/cursos`, `/contato`, `/sobre`, `/particular` e create.
  - Também dá 500 com os Accept `text/plain`, `application/json`, `text/*` e `TEXT/HTML` (em maiúsculas).
  - O `/blog/` responde 200.
- **Diretriz:** o servidor responde 406 ou ignora o header, nunca 500. Erros 5xx fazem o Google reduzir o rastreio. [RFC 9110 §12.5.1](https://www.rfc-editor.org/rfc/rfc9110#section-12.5.1)
- **Recomendação:**
  - Em `docker/server.ts`, normalizar o Accept para minúsculas e, se não houver `text/html`, `*/*` nem `text/*`, reescrever para `text/html`.
  - **Não** adicionar `Vary: Accept`.
  - Um teste de regressão com `text/markdown`, `TEXT/HTML` e `application/json`.
- **Nota do verificador:** impacto baixo. Googlebot, GPTBot, ClaudeBot e PerplexityBot recebem 200. Só é afetado um nicho, pequeno mas crescente.

#### 🟡 `lacuna-geo-04` — Os e-mails visíveis chegam ofuscados; crawlers e LLMs só leem o e-mail do outro domínio que está no JSON-LD
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-04`
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** infra · **Arquivos:** `src/routes/contato.tsx`, `src/routes/particular.tsx`, `src/components/legal-page.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot e Googlebot recebem `[email protected]`.
  - A ofuscação não atua dentro de `<script>`, então o único e-mail legível sem JS é o `ceo@santos-games.com` do JSON-LD.
- **Diretriz:** a decodificação depende de JavaScript. [Cloudflare — Email Address Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/)
- **Recomendação:**
  - (1) Definir o e-mail oficial (§6, item 4).
  - (2) Uma Configuration Rule que desligue o Email Obfuscation.
  - (3) Alinhar `seo.ts:39` e expor `contactPoint`.
  - (4) Validar com `curl -A GPTBot https://santos-tech.com/contato | grep -c __cf_email__`, que deve dar 0.

#### 🟡 `lacuna-geo-05` — A modalidade se contradiz na mesma página: "100% presencial" e "Aula Online se Precisar", com `courseMode` Onsite
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-05`
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** negócio · **Arquivos:** `src/components/course-skins/shared.tsx`, `src/components/course-skins/common.tsx`, `src/routes/particular.index.tsx`, `src/lib/seo.ts`
- **Evidência:**
  - `common.tsx:206` diz "100% presencial".
  - `shared.tsx:141-142` diz "Aula Online se Precisar".
  - O hub (`particular.index.tsx:102, :395`) diz "não mais um curso online".
  - O schema tem `courseMode: "Onsite"` (`seo.ts:345`).
- **Diretriz:** o dado estruturado deve bater com o texto visível. `courseMode` aceita Online, Onsite ou Blended. [schema.org — courseMode](https://schema.org/courseMode)
- **Recomendação:** a mesma de `lacuna-conteudo-03`, que depende da decisão do §6, item 9. Registrar a decisão com data.

#### 🟢 `lacuna-geo-06` — robots.txt com max-age de 7 dias, cacheado na borda
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-06`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `docker/server.ts`, `public/robots.txt`
- **Evidência:** no mesmo momento, a borda servia um robots com `last-modified` de um deploy anterior aos dos arquivos estáticos. O conteúdo é igual ao do repositório.
- **Diretriz:** [Google — robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- **Recomendação:**
  - A mesma de `lacuna-infra-03`: 3600 s, purge e registrar o passo no `CLAUDE.md`.
  - Fazer junto com a correção do robots (`tecnico-rastreio-indexacao-01` e `-04`).
- **Nota do verificador:** hoje não há dano, porque o conteúdo cacheado é igual ao atual.

#### 🟢 `lacuna-geo-07` — HTML e sitemap sem ETag e sem Last-Modified
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-07`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `docker/server.ts`
- **Evidência:** o sitemap responde 200 mesmo com `If-Modified-Since`. A ofuscação muda os bytes a cada requisição.
- **Diretriz:** [Google — crawlers e fetchers](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers)
- **Recomendação:**
  - A mesma de `lacuna-infra-06`.
  - Um ETag fraco `W/"<buildId>-<pathname>"` **só** se o conteúdo mudar apenas no deploy.
  - Tratar junto com o cache de HTML na borda.

#### 🟢 `lacuna-geo-08` — Cenas decorativas dos cursos entram no texto lido por IA: métricas fictícias e domínios reais de terceiros
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-08`
**Status:** parcial · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/components/course-hero-art.tsx`, `src/components/course-skins/scenes/marketing-ads.tsx`, `.../marketing-web.tsx`, `src/components/testimonials.tsx`
- **Evidência:**
  - O `CourseHeroArt` tem `aria-hidden`, mas o texto continua no HTML. Exemplos:
    - power-bi: "Receita R$ 1,28 mi · Margem 31,4%"
    - excel: "+32% vs. 1º tri 2025"
    - ciberseguranca: "0 invasões hoje 1.284 bloqueios"
    - meta-ads: um anúncio falso "Café da Esquina … cafedaesquina.com.br"
  - Também aparecem `padariadobairro.com.br`, `doceriadamaria.com.br` e `minhaloja.com`.
  - Os depoimentos duplicados da esteira também entram no texto.
- **Diretriz:** `data-nosnippet` impede o uso do trecho em snippets, AI Overviews e AI Mode. [Google — robots meta tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- **Recomendação:**
  - `data-nosnippet` no wrapper (`course-hero-art.tsx:36`) e no `<li>` duplicado (`testimonials.tsx:202`).
  - **Prioridade maior:** trocar os domínios reais por `example.com` ou `loja.example`, pelo risco de ser marca de terceiro (§6, item 23).
- **Nota do verificador:** o benefício em GEO não é comprovado.

#### 🟢 `lacuna-geo-09` — JSON-LD sem grafo de página: 70 Course sem `@id`, nenhum WebPage e nenhuma `mainEntity`
**ID completo:** `lacuna-geo-aeo-citabilidade-por-llms-crawlers-de-ia-faqs-e-respostas-diretas-dados-estruturados-09`
**Status:** confirmado · **Esforço:** S · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/lib/seo.ts`, `src/components/json-ld.tsx`
- **Evidência:**
  - Nas 74 URLs: 74 Organization, 74 WebSite, 70 BreadcrumbList, 70 Course e 64 FAQPage.
  - Só a Organization e o WebSite têm `@id`.
  - Há 0 WebPage e 0 `@graph`.
- **Diretriz:** `mainEntityOfPage` e `mainEntity` ligam a página à entidade principal. [schema.org — mainEntityOfPage](https://schema.org/mainEntityOfPage)
- **Recomendação:**
  - `@id` `<url>#course` e `<url>#breadcrumb`.
  - Um WebPage (ItemPage ou CollectionPage) com `isPartOf`, `breadcrumb` e `mainEntity`.
  - `@graph` é opcional.
  - Validar no Rich Results Test e no validator.
- **Nota do verificador:** o grafo já existe em parte (`provider`/`publisher` por `@id`). O ganho é plausível, não comprovado.

### 5.16 Rodada de lacunas: performance, imagens e acessibilidade (7 achados: 🟠 1 · 🟡 6)

#### 🟠 `lacuna-perf-03` — /links, a página da bio do Instagram, baixa 5,5 MB de PNG para cards de 184 px, e as imagens só aparecem depois do JS e da API: LCP de 31 s e CLS de 0,098 no laboratório
**ID completo:** `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-03`
**Status:** confirmado · **Esforço:** M · **Impacto:** alto · **Escopo:** repo · **Arquivos:** `src/routes/links.tsx`, `src/lib/link-showcase-api.ts`
- **Evidência:**
  - Lighthouse mobile (25/09): LCP de 31,0 s, 5.871 KiB baixados, CLS de 0,098 e 5.284 KiB economizáveis em imagem.
  - A API `/public/links` entrega PNGs de 2.632.104 B, 1.425.740 B, 1.158.573 B e 273.721 B, exibidos a 184x124.
  - O cache dos uploads é de 4 h, mesmo com hash no nome.
  - `links.tsx:39` busca os dados no navegador, e a página mostra "Carregando…".
- **Diretriz:** o LCP deve ficar em até 2,5 s, e a imagem do LCP precisa ser descobrível no HTML. [web.dev — otimizar LCP](https://web.dev/articles/optimize-lcp)
- **Recomendação:**
  - (1) **Sem código, hoje:** reenviar pelo painel as 4 imagens em WebP de ~800 px (menos de 100 KB cada). Isso elimina ~5,3 MB.
  - (2) No `santos-tech-infra`: redimensionar e converter no upload, e servir os uploads com hash com cache longo e immutable.
  - (3) Em `links.tsx`:
    - um `loader` com timeout de ~1,5 s e fallback estático;
    - `fetchpriority=high` na 1ª imagem;
    - `sizes` coerente;
    - um placeholder de altura fixa, que resolve o CLS;
    - um `<h1>` visível.
  - (4) Cloudflare Image Transformations só com o ok do Henrique, porque tem custo (§6, item 22).
- **Nota do verificador:** o arquivo `260a…` tem 1080x1920, não 1080x726. O impacto é sobretudo na conversão do funil da bio, mais do que no ranking.

#### 🟡 `lacuna-perf-01` — Brotli nível 11 síncrono na origem (visão de performance)
**ID completo:** `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-01`
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `docker/server.ts`
- **Evidência:**
  - Benchmark no Bun 1.3.14, mediana de 5 execuções: home (270 KB) 123 ms, Excel 107 ms, create 81 ms e `/particular` 78 ms. No nível 4: 0,8 a 1,3 ms.
  - O Cloudflare recomprime a resposta.
  - É o mesmo achado que `lacuna-infra-01`.
- **Diretriz:** [Cloudflare — compressão](https://developers.cloudflare.com/speed/optimization/content/compression/)
- **Recomendação:**
  - Tirar o `text/html` da compressão, ou usar Brotli 4–5 em stream (`createBrotliCompress`), e remover também o `gzipSync`.
  - Antes, conferir no painel o que força a recompressão: Rocket Loader, Automatic HTTPS Rewrites, Email Obfuscation, Web Analytics ou regras.
  - Validar com `curl -w '%{time_starttransfer}'`, com pelo menos 10 amostras.

#### 🟡 `lacuna-perf-02` — JS e CSS chegam ao Chrome em gzip fraco: +132 KB na 1ª visita a /particular e +69 KB na home
**ID completo:** `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-02`
**Status:** confirmado · **Esforço:** M · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `docker/server.ts`, `package.json`, `vite.config.ts`
- **Evidência:**
  - O `course-skins` chega em gzip com 201.578 B. Em Brotli 11 seriam 138.761 B; em gzip -9, 181.776 B. Ou seja, o gzip servido usa um nível baixo.
  - O `marina-3d-1200.avif` fica maior com gzip.
  - É o mesmo achado que `lacuna-infra-02`.
- **Diretriz:** [Cloudflare — compressão](https://developers.cloudflare.com/speed/optimization/content/compression/)
- **Recomendação:**
  - Caminho mais barato (S): desligar a compressão do proxy em `/assets/*` e deixar o Cloudflare comprimir. O teste mostrou que ele entrega zstd. Depois, purge.
  - Caminho completo (M): pré-comprimir no build.
  - Validar com `Accept-Encoding: gzip, deflate, br, zstd`.

#### 🟡 `lacuna-perf-04` — No desktop, "Informática Júnior" e "Informática Create" do menu levam ao topo de /cursos, porque o ScrollSmoother anula a rolagem até #informatica
**ID completo:** `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-04`
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/hooks/use-smooth-scroll.ts`, `src/components/site-header.tsx`, `src/routes/__root.tsx`
- **Evidência:**
  - Playwright no desktop (1350x940): em `/cursos#informatica`, a página fica em `scrollY` 4 e a seção fica em `top` = 1253 px, fora da tela.
  - No mobile com toque, a rolagem funciona (`scrollY` 1726).
- **Diretriz:** [GSAP — ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)
- **Recomendação:**
  - Num `useEffect` ligado ao hash, chamar `ScrollSmoother.get()?.scrollTo('#'+hash, false, 'top 96px')` dentro de um `requestAnimationFrame`, e também logo após o `create`.
  - Avaliar desligar o `hashScrollIntoView` do router.
  - A correção estrutural é apontar os itens do menu para páginas reais (`arquitetura-links-internos-03`).
  - Validar com Playwright no desktop e no mobile.
- **Nota do verificador:** a medição não foi reproduzida pelo verificador. O código, a marcação de produção e a fonte batem.

#### 🟡 `lacuna-perf-05` — O banner de cookies não é modal, ocupa 35% da tela no celular e esconde por completo o elemento que está com foco
**ID completo:** `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-05`
**Status:** confirmado · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/cookie-consent.tsx`, `src/styles.css`
- **Evidência:**
  - No mobile (412x823), o card ocupa a faixa de y 505 a 811 e não há `scroll-padding-bottom`.
  - Elementos com foco totalmente cobertos: 12 de 25 na home e 4 de 10 em `/sobre`.
  - No desktop, o card cobre 27 de 76 links da sidebar do Excel, e um clique em "Ver os programas" acerta o banner.
- **Diretriz:** WCAG 2.4.11: o foco não pode ficar encoberto. [W3C — Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- **Recomendação:**
  - `scroll-padding-bottom: var(--st-consent-height)` enquanto o card estiver aberto. A variável já existe. Validar junto com o ScrollSmoother.
  - Compactar o card no mobile para até ~20% da tela.
  - Não mudar de canto.
  - Transformar em modal é decisão de produto.
  - Aceite: 0 elementos cobertos.
- **Nota do verificador:** os números exatos variam com o método. O mais seguro é dizer "cerca de 25 a 30% dos elementos com foco".

#### 🟡 `lacuna-perf-06` — O carrossel do hero de /cursos/camps baixa 4 fotos de 1200 px (400 KB) para quadros de 312 px, e a pasta "é só soltar a foto" não passa pelo otimizador
**ID completo:** `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-06`
**Status:** parcial · **Esforço:** S · **Impacto:** médio · **Escopo:** repo · **Arquivos:** `src/components/colonia-photos.tsx`, `src/assets/colonia-photos.ts`, `scripts/optimize-images.mjs`
- **Evidência:**
  - As fotos `colonia-01` a `04.webp` têm 90.532, 141.182, 76.870 e 92.666 B, somando 409.769 B em imagens.
  - Não há `srcset`, `sizes`, `width` nem `height`.
  - O glob importa o arquivo original, sem passar por otimização.
  - O Lighthouse aponta 355 KiB economizáveis.
- **Diretriz:** [web.dev — imagens responsivas](https://web.dev/learn/design/responsive-images)
- **Recomendação:**
  - (a) Estender o `optimize-images.mjs` para `src/assets/colonia/`, aceitando jpg, png, webp e avif e gerando versões de 400 e 800 px em AVIF e WebP. Depois, usar `<Img>` com `sizes`.
  - (b) Ou usar o `vite-imagetools` no build, para que ninguém precise lembrar de rodar o script.
  - `fetchpriority=high` só no 1º par de fotos e `lazy` nas demais.
  - Atualizar o comentário de `colonia-photos.ts`.
- **Nota do verificador:** a dimensão real é 1200x2133, não 1200x1512. As métricas do Lighthouse não foram reproduzidas.

#### 🟡 `lacuna-perf-07` — As cores de tema dos programas também reprovam contraste (#0E9E8E 3,33:1, #10b981 2,53:1, azul sobre azul-claro 3,86:1)
**ID completo:** `lacuna-performance-core-web-vitals-imagens-fontes-js-de-terceiros-acessibilidade-07`
**Status:** confirmado · **Esforço:** M · **Impacto:** baixo · **Escopo:** repo · **Arquivos:** `src/routes/cursos.camps.tsx`, `src/routes/cursos.academies.tsx`, `src/routes/cursos.create.8-9-anos.tsx`, `src/routes/cursos.create.index.tsx`, `src/lib/program-theme.ts`
- **Evidência:** o axe, rodado depois de rolar a página inteira, encontrou:
  - camps: `#0E9E8E` sobre branco, 3,33:1, em 7 kickers;
  - academies: `#10b981`, 2,53:1, e `#8b5cf6`, 4,23:1;
  - create 8–9: `#187ABF` sobre `#dceefb`, 3,86:1;
  - `/cursos/create`: `#556574` sobre `#cce1f2`, 4,46:1.
  
  Sem rolar, o Lighthouse só vê de 1 a 3 nós.
- **Diretriz:** WCAG 1.4.3. [W3C — contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- **Recomendação:**
  - Um token `text` no `CourseTheme`, reusando o `ACCENT_DARK` de `src/lib/program-theme.ts` (camps `#0f5a6b`, create `#04325A`, academies `#020a6b`).
  - Aplicar em kickers, chips, tagline e no selo de academies (`cursos.academies.tsx:193` e `:212`).
  - `theme.primary` só em decoração.
  - Um axe pós-rolagem no gate.

---

## 5b. Achados não verificados (triagem pendente)

Nenhum. Todos os 189 achados passaram pela verificação adversarial. Os itens que dependem de painel ou conta sem acesso (Cloudflare, Search Console, Bing e GBP) estão dentro dos próprios achados, marcados como "não verificado", e aparecem como passos do Henrique no §7.

---

## 6. Decisões de negócio para o Henrique

Cada item traz a **recomendação** e o **motivo em uma frase**. As decisões 1 a 7 bloqueiam trabalho técnico e são as que devem ser respondidas primeiro. Pode responder citando o número (ex.: "1: sim, 4 produtos; 2: não vendemos mais").

### 🔝 Responder primeiro (bloqueiam código)

1. **Catálogo infantil: quais nomes e faixas de idade são os oficiais?** Hoje convivem Tecnologia/Informática Júnior (5–9) e Create (10–15), na home e no menu, com JR (5–8) e CREATE (8–14), nas páginas de currículo e no blog.
   - **Recomendação:** oficializar o modelo de 4 produtos da home. Manter as 9 páginas de currículo ano a ano, que são o conteúdo mais forte e difícil de copiar do site, reescrevendo nome e idade para bater com o produto vendido. Usar 301 só se algum programa não existir mais.
   - **Motivo:** hoje o site responde "a partir de que idade?" de três jeitos diferentes, e isso tira a confiança do Google e das IAs.
   - IDs: `on-page-conteudo-01`, `geo-crawlers-ia-21`, `blog-integracao-05`, `estrategia-conteudo-intencao-05`/`-18`, `arquitetura-links-internos-03`.
2. **A Robotics Academy (9–14 anos, com kit de robô) é vendida hoje?**
   - **Recomendação:** responder sim ou não. Se sim, corrigimos o FAQ da home que diz "não trabalhamos com robótica de montagem". Se não, redirecionamos a página.
   - **Motivo:** a resposta "não" fica justo no FAQ que as IAs mais citam, e a busca "curso de robótica Ribeirão Preto" hoje só mostra concorrentes.
   - ID: `estrategia-conteudo-intencao-04`.
3. **Horário de sábado: até as 18h ou até as 22h?**
   - **Recomendação:** se for o caso, publicar os dois com rótulo: "Atendimento/recepção: sáb 8h–18h" e "Aulas particulares agendadas: seg a sáb até 22h".
   - **Motivo:** o Google pode alterar o horário do seu Perfil da Empresa com base no site, e o cliente que chega às 19h de sábado encontra a porta fechada.
   - IDs: `seo-local-06`, `aeo-respostas-20`.
4. **E-mail oficial.**
   - **Recomendação:** `contato@santos-tech.com` como contato principal, mantendo `ceo@santos-tech.com` só para o encarregado de dados (LGPD). Tirar o `ceo@santos-games.com` do site.
   - **Motivo:** um e-mail em outro domínio reduz a confiança, e o endereço recomendado já aparece em 3 páginas e o domínio recebe e-mail (tem MX).
   - IDs: `seo-local-07`, `on-page-conteudo-04`, `lacuna-geo-04`.
5. **CEP e pino do mapa.**
   - **Recomendação:** confirmar o CEP 14020-170 (é o dos Correios para o nº 1992) e copiar as coordenadas do pino do seu Perfil da Empresa no Google.
   - **Motivo:** o CEP do site está errado, e o pino marca um ponto a ~1 km, no Jardim Sumaré.
   - IDs: `seo-local-01`, `seo-local-03`.
6. **Incluir "Cursos particulares" no menu principal?**
   - **Recomendação:** sim, com esse rótulo e separado dos programas infantis.
   - **Motivo:** o hub e os 52 cursos (53 páginas, 72% do site) não têm nenhuma porta de entrada, e o menu é a porta mais forte.
   - IDs: `arquitetura-links-internos-01`.
7. **Publicar preços em mais lugares.**
   - **Recomendação:** sim em três pontos: (a) a mensalidade infantil nas páginas de curso, que já é pública na home; (b) a resposta "Quanto custa?" de cada curso particular com o valor que o card já mostra; (c) uma faixa no hub `/particular`, calculada com a margem, como o card faz.
   - **Motivo:** a pergunta de maior intenção hoje recebe uma resposta evasiva, e as IAs citam a página que responde de forma direta.
   - IDs: `geo-crawlers-ia-01`, `aeo-respostas-05`, `aeo-respostas-14`.

### Demais decisões

8. **Remover do código as "avaliações 5,0 / 329" autodeclaradas** (as etiquetas invisíveis para o Google).
   - **Recomendação:** remover. É um comunicado, e o CTO executa.
   - **Motivo:** o Google não mostra estrelas para a própria escola, e copiar a nota da escola nos 52 cursos é marcação enganosa. As estrelas do Maps não mudam.
   - ID: `seo-local-02`.
9. **Aula online: é só reposição ou é uma oferta?**
   - **Recomendação:** se for só reposição, dizer "presencial, com reposição online ao vivo se precisar".
   - **Motivo:** hoje a mesma página diz "100% presencial" e "aula online se precisar".
   - IDs: `lacuna-conteudo-03`, `lacuna-geo-05`.
10. **Professores e equipe em público** (nome, foto, formação), com autorização de cada um.
    - **Recomendação:** sim, começando pelo fundador e pelos professores dos cursos mais procurados (Excel, Informática, IA, Python, Power BI).
    - **Motivo:** o Google e as IAs procuram "quem ensina"; hoje o site não nomeia ninguém.
    - IDs: `on-page-conteudo-09`, `estrategia-conteudo-intencao-06`.
11. **Mostrar a razão social "R. L. DOS SANTOS GAMES" e o CNPJ nas etiquetas do Google.**
    - **Recomendação:** sim, porque já estão públicos nas páginas de Privacidade e Termos. A data de fundação só entra se você confirmar.
    - **Motivo:** hoje o site declara um nome legal que não existe.
    - ID: `seo-local-04`.
12. **Datas da colônia de férias (dez/2026–jan/2027).**
    - **Recomendação:** publicar agora, com semanas e vagas.
    - **Motivo:** a busca por colônia começa em outubro, e sem datas não dá para marcar o evento no Google.
    - IDs: `estrategia-conteudo-intencao-10`, `-20`.
13. **Tela azul de abertura (Preloader).**
    - **Recomendação:** remover. Se a marca quiser a animação, animamos só o logo no topo, sem cobrir a tela.
    - **Motivo:** ela cobre o site em toda visita à home e custa segundos no celular.
    - ID: `performance-cwv-02`.
14. **Verde dos botões.**
    - **Recomendação:** aprovar um verde mais escuro (`#0A7F63`) só nos botões com texto branco, mantendo o verde atual na decoração. Mostramos a comparação antes.
    - **Motivo:** o contraste atual (2,54:1) fica abaixo do mínimo de leitura (4,5:1) e prejudica o botão principal de WhatsApp.
    - IDs: `acessibilidade-semantica-02`, `-03`.
15. **Robôs de IA que usam o site para treino** (GPTBot, ClaudeBot etc.).
    - **Recomendação:** manter liberado e registrar a decisão com data.
    - **Motivo:** bloquear o treino não traz ganho para a escola, e bloquear por engano os robôs de busca tiraria o site das respostas.
    - ID: `geo-crawlers-ia-16`.
16. **Arquivo `llms.txt`** (um resumo do site para IAs).
    - **Recomendação:** fazer depois, com baixa prioridade.
    - **Motivo:** o Google declara que ignora o `llms.txt`; custa pouco, mas não resolve nada urgente.
    - ID: `tecnico-rastreio-indexacao-20`.
17. **Cidades e bairros atendidos.**
    - **Recomendação:** citar cidades vizinhas só se a escola de fato recebe famílias delas. Nunca uma lista de bairros.
    - **Motivo:** lista de bairros é vista pelo Google como spam, e páginas por bairro de uma escola com uma única sede são proibidas.
    - IDs: `seo-local-18`, `estrategia-conteudo-intencao-17`.
18. **A página `/links` (bio do Instagram) deve aparecer no Google?**
    - **Recomendação:** tirar do Google (noindex) e do sitemap, e investir na velocidade dela.
    - **Motivo:** é uma página de atalhos, que não responde a nenhuma busca, e hoje leva 31 s para carregar no teste.
    - IDs: `arquitetura-links-internos-20`, `lacuna-perf-03`.
19. **Facebook: há duas páginas (`/EscolaSantosTech` e `/SantosTech.br`).**
    - **Recomendação:** escolher uma como oficial e mesclar ou desativar a outra.
    - **Motivo:** duas páginas dividem as avaliações e confundem o Google sobre qual é a escola.
    - ID: `seo-local-13`.
20. **Cadastro do CNPJ na Receita** (endereço no Alto do Ipiranga, nome fantasia "SANTOS GAMES", atividade principal "software").
    - **Recomendação:** conversar com o contador sobre atualizar. Não é urgente para SEO.
    - **Motivo:** diretórios automáticos copiam esses dados e espalham um endereço diferente do real.
    - ID: `seo-local-05`.
21. **Fotos reais:** das turmas JR (com termo de uso de imagem dos responsáveis), para as capas de compartilhamento das páginas principais, e uma variante de ícone com fundo azul.
    - **Recomendação:** sim. Você escolhe as fotos.
    - **Motivo:** hoje a página de 5 a 9 anos mostra adolescentes, e todas as páginas compartilham a mesma capa genérica.
    - IDs: `lacuna-conteudo-06`, `social-marca-icones-07`, `-05`.
22. **Custos de infraestrutura** (redimensionar imagens no Cloudflare, servidor em São Paulo).
    - **Recomendação:** não por agora. Primeiro resolvemos no código, que é de graça, e medimos.
    - **Motivo:** o ganho não está provado e envolve mensalidade.
    - IDs: `lacuna-perf-03`, `lacuna-infra-05`.
23. **Domínios de exemplo nas ilustrações dos cursos** (`cafedaesquina.com.br`, `padariadobairro.com.br`…).
    - **Recomendação:** trocar por domínios claramente fictícios.
    - **Motivo:** podem ser negócios reais, e a página parece anunciar para eles.
    - ID: `lacuna-geo-08`.
24. **Promessas de marketing:** "certificado reconhecido em todo o Brasil", "do zero ao mercado em 6 meses", "Formado em ADS".
    - **Recomendação:** trocar por fatos, por exemplo: "certificado de conclusão emitido pela Santos Tech (curso livre)", "trilha de 48 aulas" e "Desenvolvimento de Sistemas (curso livre)".
    - **Motivo:** curso livre não dá diploma reconhecido, e prometer isso gera risco com o consumidor e perda de confiança.
    - IDs: `on-page-conteudo-03`, `lacuna-conteudo-04`.
25. **Acesso aos painéis** (Search Console, Bing Webmaster, Perfil da Empresa, Cloudflare).
    - **Recomendação:** dar acesso de leitura ao Guilherme e fazer, com ele, os passos de painel do §7 (Fase 0).
    - **Motivo:** sem isso não há medição de resultado, e vários itens desta auditoria ficaram como "não verificado".
    - IDs: `geo-crawlers-ia-17`, `-18`, `performance-cwv-15`.

---

## 7. Plano de execução

### 7.1 Pacotes de trabalho (sem duplicatas)

Os 189 achados viram 15 pacotes. Quando dois IDs aparecem ligados por "=", é o mesmo problema visto de frentes diferentes: faz-se uma vez só.

| Pacote | O que resolve | IDs |
|---|---|---|
| **P1 Robots e sitemap** | Liberar `/assets/`, conflito Disallow + noindex, max-age do robots, lastmod, priority/changefreq, checagem automática do sitemap, IndexNow e llms.txt (opcional) | `tecnico-rastreio-indexacao-01`, `-04`, `-12`, `-14`, `-18`, `-20`; `lacuna-infra-03` = `lacuna-geo-06`; `lacuna-infra-07` |
| **P2 Malha de links internos** | Links para `/particular` e para os programas; rodapé com navegação e endereço; volta a partir de `/particular`; trilha entre faixas; cursos relacionados; âncoras; menu mobile; `/links`; `/blog/`; link da área do aluno; âncoras quebradas pelo ScrollSmoother | `arquitetura-links-internos-01`, `-02`, `-03`, `-04`, `-06`, `-08`, `-10`, `-11`, `-19`, `-20`; `estrategia-conteudo-intencao-05`; `blog-integracao-11`; `lacuna-conteudo-07`; `tecnico-rastreio-indexacao-16`; `lacuna-perf-04` |
| **P3 Conteúdo que precisa estar no HTML** | FAQ particular e infantil, ementa aula a aula, tópicos das 18 skins e headings do FAQ | `aeo-respostas-01` (+ `acessibilidade-semantica-09`), `aeo-respostas-02`, `aeo-respostas-10`; `lacuna-conteudo-01` = `lacuna-geo-02`; `lacuna-conteudo-02` = `lacuna-geo-01` |
| **P4 Fonte única de fatos** (depende das decisões 1–5 e 9) | Idades, robótica, sábado, e-mail, CEP, geo, razão social, contagem de cursos, avaliações, modalidade e a linha particular no `/sobre` | `on-page-conteudo-01`, `-04`; `geo-crawlers-ia-21`; `seo-local-01`, `-03`, `-04`, `-06`, `-07`; `aeo-respostas-20`; `estrategia-conteudo-intencao-04`; `lacuna-conteudo-03` = `lacuna-geo-05`; `lacuna-conteudo-05` |
| **P5 Limpeza e enriquecimento do JSON-LD** | aggregateRating, instructor, audience, knowsAbout, Course na home, Organization só na home, priceRange, escape, ItemList nos hubs, offers/imagem, breadcrumb visível, grafo `@id`, hasMap/sameAs, ContactPage, Place, head da 404 e comentários de FAQ | `seo-local-02`, `-08`, `-15`, `-19`; `dados-estruturados-03`, `-04`, `-07`, `-08`, `-11`, `-13`, `-15`, `-19`; `on-page-conteudo-13`; `arquitetura-links-internos-07`; `lacuna-geo-09`; `tecnico-rastreio-indexacao-05`; `aeo-respostas-17` |
| **P6 Performance no celular** | Hero sem Reveal, Preloader, logos, bundle, skins, hero-collage, ScrollSmoother, animações, preload de rota, ícones, dimensões, SVGs, hero infantil, fonte, mapas, colônia e `/links` | `performance-cwv-01`, `-02`, `-04`, `-05`, `-07`, `-08`, `-09`, `-10`, `-12`, `-14`, `-16`, `-17`, `-20`, `-21`, `-23`; `lacuna-perf-03`, `-06` |
| **P7 Origem e borda** (servidor Bun e Cloudflare) | Brotli nível 4, compressão dos assets, Accept que gera 500, ETag, cache de HTML com purge, Early Hints, http 301, www, barra final, maiúsculas, HSTS, ofuscação de e-mail, bots, 401 de sessão, tiered cache e pré-render | `lacuna-infra-01` = `lacuna-perf-01`; `lacuna-infra-02` = `lacuna-perf-02`; `lacuna-infra-04` = `lacuna-geo-03`; `lacuna-infra-06` = `lacuna-geo-07`; `lacuna-infra-05`; `performance-cwv-06`, `-11`, `-13`, `-19`; `tecnico-rastreio-indexacao-06`, `-07`, `-08`, `-09`, `-10`, `-15`; `lacuna-conteudo-08` = `lacuna-geo-04`; `geo-crawlers-ia-17` |
| **P8 Títulos, H1 e vocabulário** | Titles dos cursos, descriptions longas, H1 com intenção, catálogo de nomes, vocabulário adulto, jargão por faixa etária, ADS, promessas, anos vencidos, H1 colado e og:title | `on-page-conteudo-03`, `-05`, `-06`, `-07`, `-15`; `arquitetura-links-internos-09`; `estrategia-conteudo-intencao-07`, `-12`, `-18`; `lacuna-conteudo-04`, `-09`; `social-marca-icones-09` |
| **P9 Respostas e preços (AEO)** | Preço nas páginas infantis e no FAQ particular, parágrafo-resposta, perguntas de alta intenção, FAQ genérico, tabelas, respostas curtas e números citáveis | `geo-crawlers-ia-01`, `-10`; `aeo-respostas-05`, `-11`, `-12`, `-13`, `-14`, `-16` |
| **P10 Acessibilidade** | Dropdowns, contraste, sidebar, aria-expanded, skip link, animações, links repetidos, landmarks, ícones, tier tabs, banner de cookies e cores de tema | `acessibilidade-semantica-01`, `-02`, `-03`, `-04`, `-05`, `-06`, `-07`, `-08`, `-10`, `-11`, `-12`, `-13`, `-15`, `-16`; `lacuna-perf-05`, `-07` |
| **P11 Marca e social** | Ordem e alt do og:image, capas com foto, favicon/ico, apple-touch, manifest, versão das OG, JPEG, página de erro, twitter e cenas decorativas | `social-marca-icones-01`, `-02`, `-03`, `-04`, `-05`, `-06`, `-07`, `-08`, `-14`, `-15`; `lacuna-geo-08` |
| **P12 Presença local externa** | CNPJ na Receita, link de avaliação, mapa, nome/Facebook, Bing Places, tel:, atributos, área atendida, depoimentos, `/adultos` fora do site e `/contato` local | `seo-local-05`, `-11`, `-12`, `-13`, `-14`, `-16`, `-17`, `-18`, `-22`; `estrategia-conteudo-intencao-16`, `-17` |
| **P13 Blog** (outro repositório) | 404, WebSite duplicado, autor, links para o site, idades, `@id`, variantes de URL, datas, imagens, breadcrumb, RSS, sitemap/logo, OG de artigo, alt, hidratação, logo com hash, calendário e categoria adulta | `blog-integracao-02`, `-03`, `-04`, `-05`, `-06`, `-07`, `-08`, `-09`, `-10`, `-12`, `-13`, `-15`, `-16`, `-18`; `tecnico-rastreio-indexacao-17`; `social-marca-icones-13`; `lacuna-infra-08`; `estrategia-conteudo-intencao-11`, `-20` |
| **P14 E-E-A-T e conteúdo exclusivo** | Boilerplate, equipe, prova de experiência, hubs de categoria, colônia com Event, alts de foto e datas | `on-page-conteudo-08`, `-09`; `estrategia-conteudo-intencao-06`, `-08`, `-10`; `lacuna-conteudo-06`; `geo-crawlers-ia-08` |
| **P15 Medição** | Eventos de conversão, baseline no GSC e no Bing, dado de campo e registro da política de bots | `estrategia-conteudo-intencao-19`; `geo-crawlers-ia-16`, `-18`; `performance-cwv-15` |

### 7.2 Fase 0: hoje (Henrique, ~1–2 h, sem código)

Passos que só você faz. Cada um traz o que conferir depois.

1. **Responder as decisões 1 a 7 do §6.** Isso destrava o P4 e parte do P2 e do P8.
2. **Cloudflare** (painel da zona santos-tech.com):
   - Scrape Shield → Email Address Obfuscation: **Off**. Conferir: `/contato` passa a mostrar o e-mail em texto.
   - SSL/TLS → Edge Certificates → Always Use HTTPS: **On**. Conferir: `curl -I http://santos-tech.com/` responde **301** (se vier 302 ou 307, criar a Single Redirect do `tecnico-rastreio-indexacao-06`).
   - DNS: criar `www` (CNAME → santos-tech.com, proxy laranja) e a Redirect Rule `https://www.*` → `https://${1}` (301).
   - Security → Bots / AI Crawl Control: conferir que Search e Agent estão em "Allow", que não há nada em "Charge" e que o Managed robots.txt está desligado. Anotar o resultado.
   - Speed → Early Hints: **On**.
   - Criar um API token com escopo **só de Cache Purge** e entregar ao Guilherme como secret. Isso é pré-requisito do cache de HTML (P7).
   - HSTS fica para a Fase 2, depois que o 301 estiver estável.
3. **Perfil da Empresa no Google:**
   - copiar as coordenadas do pino e a URL do perfil (link com CID);
   - gerar o link "Receber mais avaliações";
   - conferir horário, categoria, telefone e site;
   - trocar qualquer link `/adultos` por `/particular`.
4. **Search Console** (propriedade de domínio, que já está verificada por DNS):
   - submeter `/sitemap.xml` e `/blog/sitemap.xml`;
   - exportar "Páginas" e "Desempenho em IA generativa" como baseline;
   - abrir [pagespeed.web.dev](https://pagespeed.web.dev) com a home, para ver se há dado de campo (CrUX).
5. **Bing Webmaster Tools:** "Importar do Google Search Console".
6. **`/links`:** reenviar pelo painel as 4 imagens dos cards em WebP com ~800 px e menos de 100 KB cada.

### 7.3 Fase 1: 1–2 dias (código, sem depender de decisão)

**Progresso esperado ao fim da fase: ~35%.**

Gate obrigatório antes de cada commit/push:
- `bun run lint` e `bun run build` sem erro.
- ⚠️ O `bun run build` regenera as imagens OG: restaurar `public/og/**` se a mudança não for intencional.
- Worktree novo precisa de `bun install`.
- Um commit por pacote, com `git add` só dos arquivos daquele pacote.
- Mexeu em rota? Atualizar o `public/sitemap.xml` no mesmo commit.

| Ordem | Pacote | Entregas |
|---|---|---|
| 1 | P1 | Remover `Disallow: /assets/`, `/apresentacoes` e `/professores` · robots/sitemap com max-age 3600 · remover `/sitemap-0.xml` · remover priority/changefreq · lastmod das 5 URLs · `scripts/check-sitemap.mjs` no lint · purge do robots após o deploy |
| 2 | P2 (parte sem decisão) | Rodapé com `<nav>` + `<address>`/`tel:` · CTA para `/particular` na home e em `/cursos` · logo e mini-rodapé em `/particular` · `href="/blog/"` · `APP_URL` com barra · trilha anterior/próxima nas faixas · âncoras descritivas · menu mobile sempre no DOM |
| 3 | P3 | FAQ particular (`common.tsx`) e infantil (`course-page.tsx`) com `<details>` · `LessonAccordion` com `<details>` ou `forceMount` · `<h3>` nas perguntas |
| 4 | P6 (rápidos) | Hero sem Reveal (3 templates) · Preloader (se a decisão 13 for "remover") · logos em WebP de 192 px · temas das skins fora do chunk (hub) · `defaultPreload: 'intent'` · `sizes` e prioridade no hero-collage |
| 5 | P5 (sem decisão) | Remover aggregateRating, instructor e audience da Organization · knowsAbout com 8–12 tópicos · Organization/WebSite só na home · head da 404 com noindex · escape no JSON-LD · comentários de FAQPage atualizados · ItemList + Breadcrumb + FAQPage em `/particular` |
| 6 | P7 (código) | Brotli nível 4 · Accept normalizado (fim do 500) · `/_serverFn/*` → 404 |
| 7 | P10 (rápidos) | Dropdown por teclado · aria-expanded/controls · sidebar com `inert` no mobile · `role="img"` nas estrelas · `scroll-padding-bottom` no banner de cookies · aria-hidden nos ícones decorativos |
| 8 | P8 (rápidos) | Espaços no H1 · anos vencidos · description da home sem a promessa de "particulares" (até existir a seção) |

**Como provar que a Fase 1 funcionou:**
- **Rastreio a partir da home** (script BFS): alcançar 74/74 URLs do sitemap. Hoje: 8/74.
- `curl -s https://santos-tech.com/particular/cursos/excel | grep -o 'Atendemos de segunda' | wc -l` → 2. Hoje: 1.
- `curl -s https://santos-tech.com/cursos/create/8-9-anos | grep -c 'Bem-vindo ao Arcade'` → pelo menos 1. Hoje: 0.
- **validator.schema.org** em `/particular/cursos/excel` → 0 erros. Hoje: 1.
- **Inspeção de URL** no Search Console: sem recursos bloqueados.
- **Lighthouse mobile** (4 rotas, antes e depois): o LCP da home deve cair em relação aos 5,7 s de hoje. A meta final é o limiar oficial de 2,5 s, a ser confirmada em dado de campo.

### 7.4 Fase 2: 1–2 semanas (depois das decisões)

**Progresso esperado ao fim da fase: ~75%.**

| Pacote | Entregas |
|---|---|
| P4 | Constantes únicas (`src/lib/programas.ts`, `precos.ts` e ORG com horário, e-mail, CEP, geo, legalName/taxID, COURSE_COUNT e rating), consumidas por todas as rotas, pelo JSON-LD e pelo blog · robótica corrigida ou 301 · modalidade · bloco das duas linhas de negócio no `/sobre` |
| P2 (com decisão) | Menu com "Cursos particulares" · header apontando para as páginas reais dos programas · hub de Informática infantil (`/cursos/informatica-infantil`) com sitemap no mesmo commit · cursos relacionados · correção das âncoras do ScrollSmoother |
| P8 | Catálogo único de nomes dos cursos particulares (`src/data/particular-catalogo.ts`) → titles, H1, breadcrumb, sidebar · titles e H1 com intenção nas páginas infantis e principais · ADS como curso livre · promessas trocadas por fatos |
| P9 | Preço nas 9 páginas infantis · FAQ "Quanto custa?" do particular calculado · parágrafo-resposta em `/cursos` e `/contato` · perguntas novas (após confirmação) · tabelas comparativas · mockup "Portal do Aluno" marcado como ilustrativo |
| P3 | Tópicos de todos os módulos nas 18 skins, com teste de regressão |
| P6 | PostHog e Sentry carregados depois da hidratação · uma skin por rota · imagens da colônia pelo otimizador · `/links` com loader SSR e placeholder · animações compostas |
| P7 | Cache de HTML na borda **com purge automático no deploy** · pré-compressão ou compress do proxy corrigido · ETag/304 · barra final e maiúsculas com 301 (com as exclusões de `/assets/` e `/blog`) · HSTS de 6 meses · Link/Early Hints · cookie-hint de sessão (com o api-go) |
| P10 | Tokens de contraste (verde escuro, primary mais escuro, texto por programa) após a decisão 14 · E2E de teclado |
| P11 | og:image em ordem, com alt por página · capas com foto nas 5 páginas principais · favicon.ico + manifest + apple-touch opaco · OG em JPEG com versão por hash |
| P15 | Evento `whatsapp_click` com página e programa · IndexNow |

### 7.5 Fase 3: contínuo (conteúdo e presença)

- **P14 (E-E-A-T):**
  - `/sobre/equipe` com Person JSON-LD.
  - Um bloco exclusivo por curso (projeto final, professor, fotos).
  - Colônia com seção "Próximas edições" e Event.
  - Sessão de fotos das turmas JR.
- **P13 (blog):**
  - Links para o site e para `/particular`.
  - Página de autor.
  - Categoria adulta ("carreira-e-trabalho").
  - Calendário de 12 pautas amarrado à sazonalidade.
  - 404 correto.
- **P12 (local):**
  - Atributos do GBP.
  - Pedido de avaliação no pós-matrícula e no WhatsApp.
  - Bing Places e Apple Business Connect.
  - Um Facebook único.
  - Conversa com o contador sobre o CNPJ.
- **P7:** pré-render estático (`tecnico-rastreio-indexacao-15`), depois de testar o build dentro do container.
- **Revisão mensal:** Search Console, planilha de 5 prompts em IAs e PostHog.

### 7.6 Métricas de sucesso e como medir

| Objetivo | Métrica | Onde medir | Linha de base (24/09/2026) | Meta |
|---|---|---|---|---|
| Descoberta | URLs do sitemap alcançáveis por links a partir da home | script BFS (curl) | 8/74 | 74/74 |
| Indexação | URLs indexadas e "Descoberta, não indexada" | Search Console → Páginas | não medido | 74/74 indexadas |
| Links internos | Páginas mais linkadas | Search Console → Links | não medido | `/particular` e os programas entre as mais linkadas |
| Core Web Vitals (campo) | LCP, INP e CLS no p75 | pagespeed.web.dev (CrUX), relatório CWV do Search Console ou RUM (Sentry) | não medido | LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1 |
| Performance (lab) | LCP mobile nas 4 rotas | Lighthouse local | 5,7 / 4,1 / 4,4 / 3,0 s | queda contínua até ≤ 2,5 s |
| Dados estruturados | Erros e avisos | validator.schema.org + Rich Results Test | 1 erro (instructor) + avisos de audience | 0 erros, 0 avisos de audience |
| Conteúdo no HTML | Respostas e aulas presentes no HTML servido | script grep | FAQ particular 1 ocorrência · 0/360 objetivos de aula · 93/696 tópicos nas 18 skins | 2 ocorrências · 360/360 · 100% |
| Busca orgânica | Impressões e cliques em "curso de excel ribeirão preto", "aula particular de informática", "curso de programação para crianças ribeirão preto" | Search Console → Desempenho | não medido | tendência de alta em 90 dias |
| Respostas de IA | Impressões por página em AI Overviews e Modo IA · citação em ChatGPT, Perplexity e Copilot | relatório de IA generativa do Search Console · Bing AI Performance · planilha mensal de 5 prompts | não medido | baseline em set/2026 e tendência mensal |
| Local | Ligações, rotas, cliques no site e número de avaliações | GBP → Desempenho | 329 avaliações, nota 5,0 | tendência de alta |
| Conversão | Cliques no WhatsApp por página, programa e origem (chatgpt.com, perplexity.ai, copilot.microsoft.com, bing.com) | PostHog | evento inexistente | evento no ar e baseline no 1º mês |

---

## 8. Fora de escopo (YAGNI) e riscos

### 8.1 O que NÃO vamos fazer (e por quê)

- ❌ **Páginas por bairro ou cidade vizinha.** O Google classifica como página-porta (spam) numa escola com uma única sede.
- ❌ **8 rotas de hub de categoria em `/particular`.** Criariam sobreposição e muito texto novo. Primeiro usamos `/particular/cursos/ia` e `/office` como páginas amplas.
- ❌ **`llms-full.txt`, versão Markdown para IA ou "chunking".** O Google declara que não usa nada disso.
- ❌ **FAQPage, HowTo, Speakable ou QAPage como alavanca de rich result.** O rich result de FAQ acabou em 07/05/2026, e os outros não se aplicam a escola.
- ❌ **Markup de Review nos depoimentos da própria escola.** É autoavaliação e não é elegível.
- ❌ **Sitemap index.** Duas linhas `Sitemap:` no robots.txt já são válidas.
- ❌ **Speculation rules, Speed Brain e `manualChunks` agora.** Ganho baixo e risco de pageview fantasma.
- ❌ **Refatoração global do Reveal.** Só o conteúdo acima da dobra afeta o LCP.
- ❌ **Screenshot do Google Maps ou Static Maps API.** Os termos de uso restringem, e a API exige chave e cobrança.
- ❌ **WebPage e datePublished em todas as rotas, ou data no rodapé.** O site não é editorial, e uma data de build seria inventada.
- ❌ **Gerador automático do sitemap que mude o contrato com o bot de WhatsApp.** Primeiro, só o script que confere o sitemap.
- ❌ **PWA ou service worker.** O manifest basta para o ícone da tela inicial.
- ❌ **Cloudflare Image Transformations e servidor em São Paulo** sem o ok do Henrique (custo) e sem medição antes.
- ❌ **Criar `/cursos/informatica`.** A rota já está ocupada por outro app. Usar `/cursos/informatica-infantil`.

### 8.2 Riscos e efeitos colaterais das recomendações

- ⚠️ **Cache de HTML na borda sem purge no deploy vai quebrar o site.** HTML antigo aponta para chunks JS que deixam de existir. O purge automático é pré-requisito, não opcional (`performance-cwv-06`).
- ⚠️ **Normalizar maiúsculas sem exclusões derruba todos os bundles.** Os hashes têm maiúsculas. Excluir `/assets/`, `/blog`, `/og/`, `/courses/` e arquivos com extensão (`tecnico-rastreio-indexacao-09`).
- ⚠️ **Tirar a barra final de forma global cria loop no blog**, que usa `/blog/` como canônico. Precisa de uma regra de exceção antes (`tecnico-rastreio-indexacao-08`).
- ⚠️ **Trocar o card inteiro de `/cursos` por um link interno pode reduzir leads no WhatsApp.** Manter o WhatsApp como ação principal e medir no PostHog (`arquitetura-links-internos-03`).
- ⚠️ **301 em `/cursos/junior` ou `/cursos/create`** (se a decisão 1 for essa) exige atualizar o sitemap **no mesmo commit**, porque o bot de WhatsApp lê o sitemap.
- ⚠️ **Carregar PostHog e Sentry depois da hidratação** perde pageviews de quem sai em menos de ~1 s e erros de hidratação que acontecem antes do init. Aceitável, mas precisa ficar registrado.
- ⚠️ **Mexer no ScrollSmoother** pode causar salto visual ou CLS. Exige E2E e screenshot.
- ⚠️ **`forceMount` no Radix** pode cortar a animação de fechar. Conferir no navegador, ou preferir `<details>`.
- ⚠️ **HSTS com `includeSubDomains` ou preload é, na prática, irreversível.** Começar com 6 meses e sem subdomínios.
- ⚠️ **Normalizar o Accept:** não adicionar `Vary: Accept`, porque fragmentaria o cache sem ganho.
- ⚠️ **Publicar `offers` no curso infantil sem o preço visível na página** viola as políticas do Google. Primeiro o preço na página (`dados-estruturados-11`).
- ⚠️ **Trocar o e-mail do site antes de a caixa `contato@` estar monitorada** perde contatos.
- ⚠️ **Publicar a razão social "Santos Games"** é uma decisão de marca, embora ela já seja pública.

### 8.3 Conflitos entre achados, e como foram resolvidos

| Conflito | Resolução |
|---|---|
| `arquitetura-links-internos-01` sugere 6–8 cursos no rodapé; `-06` sugere só o hub | **Só o hub** no rodapé. Os cursos ficam na sidebar e nos "relacionados". |
| `on-page-conteudo-01` admite 301 de JR/CREATE; `arquitetura-links-internos-03` e `estrategia-conteudo-intencao-18` linkam e retitulam essas páginas | **A decisão 1 vem antes.** A recomendação do CTO é manter as páginas e alinhar nome e idade. |
| `seo-local-15` e alguns pontos positivos usam o CEP 14025-000; `seo-local-03` prova que é 14020-170 | **14020-170**, após a conferência no GBP e no CNPJ. |
| `aeo-respostas-17` diz "não criar FAQ JSON-LD no hub só pelo rich result"; `dados-estruturados-04` e `aeo-respostas-13` recomendam FAQPage no hub | Criar, mas **por consistência de entidade**, sem expectativa de rich result. |
| `lacuna-infra-04` (baixa) × `lacuna-geo-03` (média): mesmo problema | Um item só no P7. |
| `tecnico-rastreio-indexacao-12` (manter o lastmod infantil em 06-11) × `estrategia-conteudo-intencao-18` (atualizar o lastmod) | O lastmod muda **quando o conteúdo muda**. Retitular conta como mudança. |
| `performance-cwv-19` (manter o beacon RUM) × `lacuna-perf-01` (o que força a recompressão?) | Manter o beacon e investigar no painel as outras causas (Rocket Loader, Email Obfuscation etc.). |
| Ponto positivo de acessibilidade ("o conteúdo do Radix fica no HTML") × `lacuna-conteudo-01` | O achado prevalece: o conteúdo **não** está no HTML (0/40 objetivos). |
| Pontos positivos de dados estruturados e GEO ("FAQ visível = FAQPage") × `aeo-respostas-01` | Vale só para a home e o hub. Nos 52 cursos e nas páginas infantis, a resposta está só no JSON-LD. |

---

## 9. Anexos

### Anexo A: fontes consultadas (lista única)

Os títulos abaixo são descritivos. Fontes de mercado e acadêmicas estão marcadas como **(não oficial)**. As fontes citadas pelos achados e conferidas diretamente pelo CTO em 24/09/2026 levam ✅.

**Google Search Central: rastreio e indexação**
- ✅ [Atualizações da documentação (changelog): fim do rich result de FAQ em 07/05/2026, sitelinks search box removido, breadcrumbs só no desktop](https://developers.google.com/search/updates) · [trecho do FAQ](https://developers.google.com/search/updates#removing-faq-rich-result)
- [Recursos no rastreio: CSS e JS (dez/2024)](https://developers.google.com/search/blog/2024/12/crawling-december-resources)
- ✅ [Bloquear indexação com noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- ✅ [Redirecionamentos 301/308 e 302/307](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Especificação do robots.txt e cache](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [Meta tag robots, data-nosnippet e controles de snippet para IA](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Erros HTTP e de rede](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)
- [Estrutura de URL](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- [Consolidar URLs duplicadas (canonical)](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Criar e enviar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) · [Visão geral de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Links rastreáveis](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Indexação mobile-first](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
- [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) · [Lazy-loading](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading)
- [Visão geral dos crawlers do Google (ETag e Last-Modified)](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers) · [Crawlers e fetchers](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers)
- [Boas práticas de sitemaps XML e RSS/Atom (2014)](https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom)

**Google Search Central: conteúdo, aparência e IA**
- ✅ [Otimização para recursos de IA generativa (atualizado em 10/07/2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Relatórios de desempenho em IA generativa (jun/2026)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) · [Ajuda do Search Console: relatório de IA generativa](https://support.google.com/webmasters/answer/16984139?hl=en)
- [Conteúdo útil, confiável e feito para pessoas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · [linkar recursos relevantes](https://developers.google.com/search/docs/fundamentals/seo-starter-guide#link-to-relevant-resources) · [organizar o site](https://developers.google.com/search/docs/fundamentals/seo-starter-guide#organize-your-site)
- [Políticas de spam](https://developers.google.com/search/docs/essentials/spam-policies)
- [Title links](https://developers.google.com/search/docs/appearance/title-link) · [Featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets) · [Sitelinks](https://developers.google.com/search/docs/appearance/sitelinks) · [Nomes de site](https://developers.google.com/search/docs/appearance/site-names)
- [Datas de publicação](https://developers.google.com/search/docs/appearance/publication-dates) · [Google Imagens](https://developers.google.com/search/docs/appearance/google-images) · [Favicon na Busca](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Search Quality Rater Guidelines (PDF, set/2025)](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)
- [Search Console: relatório Links](https://support.google.com/webmasters/answer/9049606)
- [Modo IA em português no Brasil (blog Google Brasil)](https://blog.google/intl/pt-br/produtos/busca-do-google-agora-o-brasil-ja-pode-usar-o-modo-ia-em-portugues/)

**Google Search Central: dados estruturados**
- [Políticas gerais de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- ✅ [Course list (ItemList, mínimo de 3 cursos, só em inglês)](https://developers.google.com/search/docs/appearance/structured-data/course) · ✅ [versão da doc de 08/09/2026](https://developers.google.com/search/docs/data-types/courses)
- ✅ [Simplificação dos resultados: Course info descontinuado (jun/2025)](https://developers.google.com/search/blog/2025/06/simplifying-search-results)
- ✅ [Review snippet: avaliações "self-serving" inelegíveis](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Local business](https://developers.google.com/search/docs/appearance/structured-data/local-business) · [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization) · [Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Article](https://developers.google.com/search/docs/appearance/structured-data/article) · [Profile page](https://developers.google.com/search/docs/appearance/structured-data/profile-page) · [Event](https://developers.google.com/search/docs/appearance/structured-data/event)

**Perfil da Empresa no Google (ajuda oficial)**
- [Classificação local](https://support.google.com/business/answer/7091) · [Endereço](https://support.google.com/business/answer/3480441) · [Horário](https://support.google.com/business/answer/6303076) · [Atributos](https://support.google.com/business/answer/7690269) · [Link e QR code de avaliação](https://support.google.com/business/answer/16816815)
- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)

**schema.org**
- [CourseInstance](https://schema.org/CourseInstance) · [courseMode](https://schema.org/courseMode) · [hasMap](https://schema.org/hasMap) · [ContactPage](https://schema.org/ContactPage) · [areaServed](https://schema.org/areaServed) · [location](https://schema.org/location) · [mainEntityOfPage](https://schema.org/mainEntityOfPage) · [Validador](https://schema.org/docs/validator.html)

**web.dev e Chrome/Lighthouse (performance)**
- [Core Web Vitals](https://web.dev/articles/vitals) · [Otimizar LCP](https://web.dev/articles/optimize-lcp) · [Otimizar CLS](https://web.dev/articles/optimize-cls) · [Otimizar INP](https://web.dev/articles/optimize-inp) · [Otimizar TTFB](https://web.dev/articles/optimize-ttfb)
- [Code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting) · [Fetch priority](https://web.dev/articles/fetch-priority) · [Guia de animações](https://web.dev/articles/animations-guide) · [JS de terceiros](https://web.dev/articles/efficiently-load-third-party-javascript) · [Fontes](https://web.dev/articles/font-best-practices) · [Cache HTTP](https://web.dev/articles/love-your-cache) · [Imagens responsivas](https://web.dev/learn/design/responsive-images)
- [Lighthouse: imagens modernas](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images) · [Lighthouse: link-text](https://developer.chrome.com/docs/lighthouse/seo/link-text) · [Lighthouse: erros no console](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console) · [CrUX API](https://developer.chrome.com/docs/crux/api)

**Acessibilidade (W3C/WAI, Deque, MDN)**
- [WCAG 2.2: contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) · [Ordem do foco](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) · [Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) · [Pular blocos](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) · [Finalidade do link](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) · [Idioma da página](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html) · [Técnica C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39)
- [APG: Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) · [APG: Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) · [APG: Landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) · [Imagens decorativas](https://www.w3.org/WAI/tutorials/images/decorative/)
- [axe: color-contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast) · [axe: aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr) · [web.dev: ARIA e HTML](https://web.dev/learn/accessibility/aria-html)
- [MDN: Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) · [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

**Cloudflare**
- [Cache padrão (HTML não é cacheado)](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/) · [Tiered Cache](https://developers.cloudflare.com/cache/how-to/tiered-cache/) · [Early Hints](https://developers.cloudflare.com/cache/advanced-configuration/early-hints/) · [Compressão](https://developers.cloudflare.com/speed/optimization/content/compression/)
- [HSTS](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/) · [Redirect www→raiz](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-www-to-root/) · [Email Address Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/)
- [Managed robots.txt](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/) · [Bloquear bots de IA](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/)

**Bing, Meta, LinkedIn, Apple, X**
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) · [Bing AI Performance (fev/2026)](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) · [Novo Bing Places (out/2025)](https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research) · [IndexNow](https://www.indexnow.org/documentation)
- [Meta: Sharing para webmasters](https://developers.facebook.com/docs/sharing/webmasters/) · [Meta: prévias de link no WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews) · [LinkedIn: imagens de compartilhamento](https://www.linkedin.com/help/linkedin/answer/a521928)
- [Apple: configurar web apps (apple-touch-icon)](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) · [X Cards (arquivo; a doc atual estava inacessível)](https://web.archive.org/web/2023/https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) · [Open Graph protocol](https://ogp.me/)

**Frameworks, especificações e outros**
- [TanStack Start: Static Prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering) · [TanStack Router: preloading](https://tanstack.com/router/latest/docs/framework/react/guide/preloading) · [React: lazy](https://react.dev/reference/react/lazy)
- [GSAP: ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/) · [GSAP: normalizeScroll](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/)
- [Traefik: middleware compress](https://doc.traefik.io/traefik/reference/routing-configuration/http/middlewares/compress/)
- [RFC 9110 §12.5.1: negociação de conteúdo (Accept)](https://www.rfc-editor.org/rfc/rfc9110.html#section-12.5.1) · [WHATWG: restrições do elemento script](https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements)
- [GEO: Generative Engine Optimization, KDD 2024 (arXiv)](https://arxiv.org/abs/2311.09735) **(não oficial: estudo acadêmico)**
- [BrightLocal: o que é NAP](https://www.brightlocal.com/learn/what-is-nap/) **(não oficial: mercado)**
- [IFRS: curso de ADS (graduação tecnológica)](https://ifrs.edu.br/bento/o-curso-de-ads/) **(não oficial: referência de graduação)**
- [llmstxt.org](https://llmstxt.org) **(não oficial: proposta comunitária)**

### Anexo B: falsos positivos descartados e afirmações corrigidas

**Achados refutados por completo: 0.** Nenhum dos 189 achados foi derrubado inteiro.

Mesmo assim, os verificadores **corrigiram afirmações específicas** dentro de achados parciais. O time não deve repetir estes erros:

| Afirmação original | Por que foi descartada | Achado |
|---|---|---|
| "Os 42,6 s de main thread vêm do ScrollSmoother" | Refutado pela medição. A causa é o `setInterval` do hero-collage/colonia-photos, as animações infinitas e o badge-rainbow. | `performance-cwv-09` |
| "O feed RSS não tem autodiscovery" | O `<link rel="alternate">` já existe no head do índice e dos posts. | `blog-integracao-12` |
| "/links não linka o blog" | O card "Blog" vem da API e é renderizado no navegador. Só não aparece no HTML bruto. | `blog-integracao-11` |
| "Falha de WCAG 2.4.1 (bypass) em /particular" | O `<main>` já satisfaz o bypass. O problema real é a ordem do foco (2.4.3). | `acessibilidade-semantica-06` |
| "curl com UA de GPTBot prova que os bots reais passam" | UA falso não reproduz bot verificado. Evidência real = relatório de crawlers ou logs da origem. | `geo-crawlers-ia-17` |
| "É preciso sitemap index" | Duas linhas `Sitemap:` no robots.txt são válidas. | `tecnico-rastreio-indexacao-14` |
| "/termos mostra ceo@santos-games.com" | `/termos` mostra `contato@santos-tech.com`. | `seo-local-07` |
| "/contato decodifica para contato@santos-tech.com" | Decodifica para `ceo@santos-games.com`. | `lacuna-conteudo-08` |
| "Preço do hub: R$ 1.970 a R$ 3.940" | São preço-base **sem** a margem de 15%. O preço do card é outro (ex.: R$ 2.265,50). | `aeo-respostas-05` |
| "Regra do Cloudflare de minúsculas" (sem exclusões) | Derrubaria todos os bundles com maiúscula no hash. | `tecnico-rastreio-indexacao-09` |
| "Usar `offers` no curso infantil" | Marcaria um preço que não aparece na página, o que é proibido pelas políticas. | `dados-estruturados-11` |
| "Usar `mounted=false` no Preloader" | Pioraria: o conteúdo aparece e depois é coberto. | `performance-cwv-02` |
| "Flag de sessão em localStorage" | O login é feito em outra origem, então a flag nunca seria gravada. | `performance-cwv-11` |
| "`manualChunks` / `experimentalMinChunkSize`" | Não existem no Rolldown/Vite 8. | `performance-cwv-16` |
| "Mostrar CEP 14025-000 em /contato" | O CEP correto é 14020-170 (ViaCEP). | `seo-local-15` |
| "55 cursos particulares" | São 52 rotas e 52 URLs no sitemap. | vários |
| "A description da home repete a ORG.description" | Falso: `seo.ts:55` tem outro texto. | `estrategia-conteudo-intencao-12` |
| "Só a home tem lead factual" | `/sobre`, `/cursos/junior` e `/cursos/create` também têm. | `aeo-respostas-11` |
| "Achados sobre concorrentes na SERP (ex.: Código Kid)" | Não reproduzidos. O WebSearch usa índice dos EUA. | `estrategia-conteudo-intencao-17` |
| "Afirmações sobre métricas de 'Citation Share' do Bing" | Sem fonte verificável. | `geo-crawlers-ia-18` |

**Pontos positivos que se mostraram errados** (corrigidos no Anexo C):
- "O Accordion do Radix mantém o conteúdo recolhido no HTML (indexável)". **Errado:** 0 de 40 objetivos de aula estão no HTML (`lacuna-conteudo-01`).
- "FAQ visível = FAQPage; nenhum dado só no markup". **Errado** nos 52 cursos e nas páginas infantis, onde a resposta fica só no JSON-LD (`aeo-respostas-01`, `-02`).
- "O NAP é consistente, com CEP 14025-000 e sábado das 8h às 18h também em /particular". **Errado:** o CEP correto é 14020-170, e `/particular` diz "Seg a Sáb 8h às 22h" (`seo-local-03`, `-06`).
- "Compressão ponta a ponta correta". **Parcial:** o HTML usa Brotli nível 11 síncrono, e os assets chegam em gzip (`lacuna-infra-01`, `-02`).

### Anexo C: o que já está correto e NÃO deve ser mexido

**Renderização e rastreio**
- ✅ **SSR real em todas as rotas públicas.** Title, description, canonical, robots, JSON-LD, H1, FAQ (as perguntas) e listas de cursos estão no HTML bruto, verificado com curl sem JS em 14 páginas. Não há `ssr:` desligado nem `<noscript>` escondendo conteúdo.
- ✅ **Canonical absoluto, em HTTPS e auto-referente em 74/74 URLs, igual à `<loc>`.** O `HeadContent` deduplica (1 description, 1 robots e 1 og:url por página). Variantes com `?utm_` mantêm o canonical limpo.
- ✅ **As rotas de layout sem `head()`** (`cursos.tsx`, `particular.tsx` etc.) não são problema: cada folha chama `pageMeta()`.
- ✅ **`/adultos` → `/particular` com 301 em um salto**, também para sub-rotas, sem links residuais. Manter pelo menos até set/2027 e nunca reaproveitar `/adultos`.
- ✅ **404 real, e não soft 404**, em rotas inexistentes e em assets.
- ✅ **Páginas privadas** (`/apresentacoes`, `/professores/*`) com `noindex, nofollow, noarchive, noimageindex` e fora do sitemap. Só falta tirar o Disallow.
- ✅ **Googlebot, Bingbot, GPTBot, ClaudeBot e mais 15 bots de IA recebem 200** com HTML idêntico ao do navegador. Não há desafio de WAF nem Managed robots.txt ativos. **Não mexer.**
- ✅ **Assets com hash** servidos com `Cache-Control: public, max-age=31536000, immutable` e HIT na borda.
- ✅ **Sitemap XML válido**, com 74 URLs idênticas entre o repositório e a produção, todas respondendo 200. O robots.txt lista os dois sitemaps (site e blog). As URLs são limpas: minúsculas, com hífens, sem acento e sem parâmetros.
- ✅ **`<html lang="pt-BR">`, `og:locale pt_BR`, `inLanguage pt-BR`.** O site é monolíngue, então **não** adicionar hreflang.
- ✅ **HTML leve para o Googlebot:** a home tem 270 KB (34 KB em Brotli), muito abaixo do limite de 2 MB.
- ✅ **Links de navegação são `<a href>` reais.** O `PageTransitionLink` mantém o href e respeita ctrl/cmd-clique.
- ✅ **Os 52 cursos particulares estão linkados na sidebar**, presente no DOM do mobile (só escondida por CSS).
- ✅ **Nenhum `rel="nofollow"` em link interno**, e os links externos usam só `noreferrer`.

**Dados estruturados**
- ✅ **O JSON-LD vem no HTML servido**, sem depender da hidratação, e passa no `json.loads` em todos os blocos.
- ✅ **Grafo por `@id`:** `#organization` e `#website` são definidos uma vez e referenciados em `provider` e `publisher`. Há um único builder para o nó institucional.
- ✅ **WebSite** com `name` "Santos Tech", coerente com `og:site_name`, e sem SearchAction morto.
- ✅ **Logo** (`favicon.png`, 1080x1080) e **imagens OG** (1200x630) respondem 200 e são rastreáveis.
- ✅ **PostalAddress completo, telefone com +55 e DDD e openingHoursSpecification no formato certo.** Só o conteúdo precisa de correção (CEP, sábado, geo).
- ✅ **Os tipos `[EducationalOrganization, LocalBusiness]` são válidos** e fazem o Google ler a escola como negócio local.
- ✅ **BreadcrumbList estruturalmente correto**, com 0 erros no validador.
- ✅ **Course particular com `courseWorkload PT48H`**, que bate com as "48 aulas" visíveis.
- ✅ **Course infantil com nome, descrição e idade que refletem o texto**, e `url` igual ao canonical.
- ✅ **Cada curso particular tem FAQs específicos no schema**, com a resposta de duração calculada pelos tiers reais.

**On-page e conteúdo**
- ✅ **Title e meta description únicos em 100% das 74 rotas.** Um único `<title>` por documento (os outros são `<title>` de SVG).
- ✅ **Exatamente 1 H1 por página de conteúdo** (exceção: `/links`). Os eyebrows são `<p>`.
- ✅ **Sem `<meta keywords>`.** Charset, viewport e lang presentes. Titles em português natural, com a marca no fim.
- ✅ **Robots `index, follow, max-image-preview:large`**, sem `nosnippet`, `max-snippet` ou `data-nosnippet`: o conteúdo está elegível para AI Overviews e Modo IA. **Não mexer.**
- ✅ **0 `<img>` sem alt.** Logos decorativos com `alt=""` + `aria-hidden`. Fotos da home com alt descritivo em pt-BR (exceto os 3 alts do `lacuna-conteudo-06`).
- ✅ **Os 52 cursos têm conteúdo próprio real** (módulos, público, ferramentas e FAQs), então não são páginas-porta.
- ✅ **As páginas infantis ano a ano são o conteúdo mais forte do site:** 40 aulas, módulos, insígnias e FAQ de pais. **Manter.** Só falta pôr as aulas no HTML e alinhar nome e idade.
- ✅ **Depoimentos reais do Google** em texto, com nome e papel, sem markup de Review falso e sem review gating.
- ✅ **`/termos` publica a razão social e o CNPJ, e `/privacidade` e `/termos` mostram a data de atualização.**

**Performance e acessibilidade**
- ✅ **Desktop já está bom:** nota entre 91 e 99, LCP entre 0,8 e 1,7 s, TBT de 0 ms.
- ✅ **CLS de laboratório entre 0 e 0,018** em todas as páginas medidas.
- ✅ **Fontes Poppins self-hosted em WOFF2**, com subset, `swap` e preload com `crossorigin`.
- ✅ **O componente `<Img>` gera AVIF + WebP com srcset 400/800/1200 e lazy por padrão.** Faltam só `sizes`, dimensões e o uso em todos os lugares.
- ✅ **Code splitting por rota ativo:** as páginas `/particular` não entram no bundle da home.
- ✅ **bfcache elegível:** sem listener `unload` e sem `no-store`.
- ✅ **PostHog começa com opt-out e sem persistência**, sem scripts extras antes do consentimento. **Rocket Loader desligado. Manter assim.**
- ✅ **SEO do Lighthouse em 100** nas páginas testadas.
- ✅ **Skip link e `<main id="conteudo">` no layout principal**, `scroll-padding-top` sob o header fixo e foco visível preservado.
- ✅ **Botões e links só com ícone têm nome acessível** (WhatsApp, logo, fechar cookies, Instagram). O `target-size` passa.
- ✅ **O menu mobile do header usa `inert` + `aria-hidden`.** É o padrão a copiar em `/particular`.
- ✅ **O FAQ da home usa `<details>`/`<summary>` nativo**, que funciona sem JS. É o padrão a replicar nos outros FAQs. O FAQ do hub `/particular` também mantém a resposta no DOM.
- ✅ **`prefers-reduced-motion` já é respeitado** no ScrollSmoother, no Preloader, no parallax, no count-up e no marquee.
- ✅ **Banner de cookies:** `role="region"`, foco gerenciado, Escape, switches com `aria-checked` e botões do mesmo tamanho.
- ✅ **Iframe do mapa** com `title` e `loading="lazy"`.

**Local, marca e social**
- ✅ **O endereço textual visível é idêntico** em todas as páginas ("Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP"). Telefone (16) 99257-8710 com fonte única em `src/lib/whatsapp.ts`.
- ✅ **FAQ da home com endereço, horário, idade, preço (R$ 539,90) e "como agendar"**, e FAQ da colônia com o preço por semana. São o modelo de resposta-fato.
- ✅ **Metas `geo.*` já leem de `ORG.geo`**, então corrigir as coordenadas propaga sozinho.
- ✅ **Todas as rotas têm og:title, og:type, og:image (HTTPS) e og:url = canonical.** Há 65 imagens OG por rota em 1200x630 e com menos de 300 KB. Os crawlers sociais recebem 200.
- ✅ **`theme-color #187ABF`** igual ao azul principal do design system. O `twitter:card` é `summary_large_image`.
- ✅ **Nenhuma página por bairro ou cidade.** Decisão correta, manter.

**Blog**
- ✅ **O blog fica em subdiretório (`/blog`) no mesmo host**, não em subdomínio: herda o nome do site, o robots e o Search Console.
- ✅ **SSR no blog**, com canonical absoluto, BlogPosting, BreadcrumbList e corpo completo no HTML, e 200 para todos os bots.
- ✅ **Autor humano nomeado** (Guilherme Barbosa Ferrarezi) no byline, no JSON-LD e no RSS. Datas em ISO 8601.
- ✅ **RSS 2.0 válido, com conteúdo completo, e `llms.txt` do blog no formato llmstxt.org.**
- ✅ **6 dos 8 posts já têm CTA** para `/cursos/create`, `/cursos/junior`, `/cursos` ou `/contato`, com âncoras descritivas.
- ✅ **O header do site linka `/blog` com `<a href>`**, com comentário correto no código. Só falta a barra final (`lacuna-conteudo-07`).

---

*Fim do relatório. 189 achados verificados · 0 refutados · 0 não verificados · dados de campo (CrUX/INP) não medidos.*
