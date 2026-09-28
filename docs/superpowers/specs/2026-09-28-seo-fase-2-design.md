# SEO/GEO/AEO — Fase 2 (rascunho de spec + retomada)

**Status:** ⬜ rascunho — **não começar código** antes das decisões marcadas ⚠️ abaixo.
**Escrito em:** 28/09/2026, no fechamento da sessão "Auditoria SEO/GEO/AEO + Fase 1", encerrada
porque o limite semanal de tokens do Henrique acabou. Este arquivo existe para a próxima sessão
retomar **sem perder nada**.
**Origem:** [`docs/auditorias/2026-09-24-seo-geo-aeo.md`](../../auditorias/2026-09-24-seo-geo-aeo.md)
(§7.4 Fase 2, §7.5 Fase 3, §8 riscos). Fase 1: [`plans/2026-09-25-seo-fase-1.md`](../plans/2026-09-25-seo-fase-1.md).

---

## 0. Como retomar (colar numa sessão nova)

> Retomar a auditoria SEO/GEO/AEO do santos-tech.com. Leia, nesta ordem:
> `docs/superpowers/specs/2026-09-28-seo-fase-2-design.md` (este arquivo),
> a seção "Auditoria de SEO/GEO/AEO" do `PENDENCIAS.md`, a entrada de 24–28/09 do
> `HISTORICO.md` e o §7.4 de `docs/auditorias/2026-09-24-seo-geo-aeo.md`.
> Confira o estado real antes de planejar: rode `node scripts/verificar-seo.mjs https://santos-tech.com`
> (tem que dar 10/10) e o §2 deste arquivo. Depois me mostre as decisões ainda abertas (§3),
> com recomendação, e só então escreva o plano da Fase 2.

Título sugerido da sessão: **"SEO Fase 2"**.

---

## 1. Onde paramos (28/09/2026)

| Etapa | Progresso | Onde está |
|---|---|---|
| Auditoria (189 achados verificados) | ✅ 100% | `docs/auditorias/2026-09-24-seo-geo-aeo.md` (PR #59) |
| Fase 1 (código sem decisão) | ✅ 100% — **10/10 na produção em 28/09** | PR #61, `HISTORICO.md` |
| Referência de idades da Code Ninjas | ✅ 100% | `docs/referencias/2026-09-26-code-ninjas-idades.md` (PR #65) |
| Decisões de negócio | 🟡 parcial — ver §3 | `PENDENCIAS.md` |
| **Plano completo da auditoria (Fases 0–3)** | **~35%** | Fase 2 leva a ~75% |

Resultado medido da Fase 1 (produção):
- `scripts/verificar-seo.mjs`: **0/10 → 10/10** (links alcançáveis pela home 8/74 → 74/74).
- Lighthouse mobile, mediana de 3 rodadas, mesma máquina: **home 66 → 80, LCP 5,7 → 3,8 s,
  TBT 220 → 9 ms, acessibilidade 93 → 96**. Hub `/particular` ~40% mais leve.
- ⚠️ Nas páginas de curso o LCP **simulado** subiu (CREATE 8–9 3,0 → 5,0 s; Excel 4,4 → 5,9 s)
  porque o número antigo media o **logo do cabeçalho** (o conteúdo nascia invisível). Com
  `--throttling-method=devtools`, FCP = LCP = 2,5–2,6 s no texto real. **Dado de campo (CrUX /
  Search Console) a partir de ~23/10/2026** é o árbitro — conferir e registrar no `HISTORICO.md`.

---

## 2. Estado real do código em 28/09 (conferido na master `a482b76`)

Fatos já decididos mas **ainda não aplicados** no site (são o P4, "fonte única de fatos"):

| Fato | Decisão | No código hoje |
|---|---|---|
| E-mail oficial | `contato@santos-tech.com` (26/09) | `santos-games.com` ainda em 2 arquivos de `src/` |
| CEP | 14020-170 (26/09; confere com os Correios p/ nº 1992) | `14025-000` ainda em 1 arquivo (`src/lib/seo.ts`) |
| Sábado | aulas 8h–20h; atendimento com hora marcada até 22h (26/09) — **texto a validar** | "Sábado · 8h às 18h" em 2 lugares; "seg a sáb 8h às 22h" em 4 |
| Robótica | sai do site (26/09) | ✅ hero e card da home já sem robótica (UI/UX `F181`, 28/09); **`/cursos/academies` ainda no ar** (depende da AI Academy) |
| Menu "Cursos particulares" | sim | ✅ feito pela UI/UX (`F175`) |
| Avaliação autodeclarada no JSON-LD | remover | ✅ feito na Fase 1 |

Painéis (Fase 0 — só o Henrique), conferidos em 28/09:
- `http://` → `https://` ainda responde **302** (deveria ser 301: Cloudflare → Always Use HTTPS).
- `www.santos-tech.com` **sem DNS** (criar CNAME + redirect 301).
- Cloudflare reescreve o cache para **4 h** (`max-age=14400`): Browser Cache TTL → "Respect Existing Headers".
- E-mail ainda **ofuscado** pelo Cloudflare no `/contato` (Scrape Shield → Email Obfuscation: Off).
- Perfil da Empresa: copiar coordenadas do pino e URL com CID; Search Console + Bing: submeter os
  sitemaps e exportar baseline. Token do Cloudflare **só de Cache Purge** para o Guilherme.

---

## 3. ⚠️ Decisões — o que o Henrique já respondeu e o que falta

Respondidas (26/09, registradas no `PENDENCIAS.md`, PR #64): robótica sai; sábado (texto a
validar); e-mail; CEP.

**Abertas — perguntadas em 26/09, sem resposta até 28/09** (cada uma com recomendação; ele pode
responder "ok nas recomendações" e apontar exceções):

1. **Idades do infantil (decisão 1):** aprovar a **opção C** — manter 5–9 / 10–15 (o que a escola
   vende e ensina) + regra de borda (aos 9–10 anos a aula experimental decide; avanço por nível).
   ⚠️ As 9 páginas de currículo copiam a estrutura da Code Ninjas (ScratchJr, MakeCode, Unity;
   idades 5–8 e 8–14) e **precisam ser reescritas a partir da ementa real** (`src/data/ementa-*`),
   não só renumeradas. É o maior item da Fase 2.
2. **Texto do sábado:** "Seg a sex · 8h às 22h" / "Sábado · aulas das 8h às 20h · atendimento com
   hora marcada até 22h" + "Aos sábados, venha com horário marcado". JSON-LD e Perfil da Empresa:
   sábado 08:00–20:00.
3. **AI Academy** sai junto com a robótica? (rec.: sim → `/cursos/academies` vira 301 para `/cursos`,
   sai do sitemap **no mesmo commit** e do rodapé).
4. **Preço infantil (decisão 7):** publicar R$ 539,90 + matrícula + material (hoje só na home) em
   `/cursos`, `/cursos/junior`, `/cursos/create` e nas 9 páginas de ano; FAQ "Quanto custa?" dos
   particulares com o valor do card. (rec.: sim)
5. Demais (decisões 9–25 do §6 do relatório), lista completa no `PENDENCIAS.md`: Preloader
   (rec.: remover), aula online = reposição?, professores no site, razão social/CNPJ no JSON-LD,
   datas da colônia, verde dos botões, cidades vizinhas (**precisa da informação dele**), `/links`
   fora do Google, Facebook oficial (**precisa da informação dele**), fotos reais, acesso aos painéis.

⚠️ **Sobreposição com a auditoria de UI/UX** (`docs/auditorias/2026-09-24-ui-ux/`): o Preloader
(UI/UX decisão 9), o preço no infantil, o "catálogo infantil único" (= decisão 1 daqui) e a cor dos
programas (≈ decisão 14 daqui) são **a mesma pergunta** nas duas auditorias. Responder uma vez só e
registrar nas duas seções do `PENDENCIAS.md`.

---

## 4. Escopo da Fase 2 (do §7.4 do relatório), com o que destrava cada pacote

| Pacote | Entregas | Destravado? |
|---|---|---|
| **P4 Fonte única de fatos** | Constantes únicas (ORG com horário, e-mail, CEP, geo, legalName/taxID, contagem de cursos) consumidas por rotas, JSON-LD e blog; robótica/academies; modalidade; linha particular no `/sobre` | e-mail e CEP **já**; horário após item 2; academies após item 3; legalName após decisão 11 |
| **P2 (com decisão)** | Header para as páginas reais dos programas; hub de Informática infantil em `/cursos/informatica-infantil` (⚠️ `/cursos/informatica` é de outro app); cursos relacionados; pílulas do hub com rótulo certo | após item 1 |
| **P8 Títulos, H1 e vocabulário** | Catálogo único de nomes dos particulares (`src/data/particular-catalogo.ts`) → titles, H1, breadcrumb, sidebar, ItemList do hub (20 de 52 nomes divergem hoje); H1 com intenção; anos vencidos (`on-page-conteudo-15`) | já (exceto idades) |
| **P9 Respostas e preços** | Preço nas páginas infantis; FAQ "Quanto custa?" calculado; parágrafo-resposta em `/cursos` e `/contato`; tabelas comparativas | após item 4 |
| **P3 Conteúdo no HTML** | Tópicos de todos os módulos nas 18 skins (93/696 no HTML na medição de 24/09; remedir) com teste de regressão | já |
| **P6 Performance** | PostHog/Sentry após a hidratação; uma skin por rota; imagens da colônia pelo otimizador; `/links` com loader SSR; Preloader (decisão) | já (exceto Preloader) |
| **P7 Origem e borda** | Cache de HTML na borda **com purge automático no deploy** (sem purge quebra o site — §8.2); ETag/304; barra final e maiúsculas com 301 (excluir `/assets/`, `/blog`, `/og/`, `/courses/`); HSTS 6 meses; Early Hints; HEAD sem corpo; 401 de sessão para visitante anônimo | precisa do token de purge (Fase 0) |
| **P10 Acessibilidade** | Tokens de contraste (após decisão 14); E2E de teclado | parcial |
| **P11 Marca e social** | og:image com alt por página; capas com foto; `favicon.ico` + manifest; OG em JPEG versionado | já (fotos após decisão 21) |
| **P15 Medição** | Evento `whatsapp_click` com página/programa/origem no PostHog; IndexNow | já |
| Sobras da Fase 1 | `/contato` e `/sobre` com nó da organização no JSON-LD; 404 dentro de `/particular/cursos/*` sem layout; `id` duplicado na pele de marketing; lastmod no `check-sitemap` | já |

Fora de escopo (YAGNI) e riscos: §8 do relatório — não duplicar aqui. Destaques: nada de página
por bairro; nada de `llms-full.txt`; FAQPage não dá mais rich result (só dado semântico).

🔴 Fora do SEO, sessão própria: material "restrito" dos professores num JavaScript público
(`PENDENCIAS.md`, seção Segurança).

---

## 5. Como verificar (valeu na Fase 1, manter)

- **Gate** (ver `CLAUDE.md` do repo): `bun run lint` (ESLint + `check-sitemap` + `tsc --noEmit`) e
  `bun run build`. O build regenera `public/og/**`: `git checkout -- public/og public/og-image.png`
  depois, se a mudança não for intencional. Worktree nova precisa de `bun install`.
- **Aceite de SEO:** `PORT=3000 bun run docker/server.ts &` e
  `node scripts/verificar-seo.mjs http://localhost:3000` → 10/10 antes do PR; na produção depois do deploy.
  Critério novo da Fase 2 → **escrever a checagem primeiro, ver falhar, depois implementar** (TDD).
- **JSON-LD:** POST em `https://validator.schema.org/validate` com `url=` (resposta prefixada com `)]}'`).
- **Performance:** API do PageSpeed sem chave dá 429 nesta máquina. Usar
  `bunx lighthouse <url> --output=json` com `CHROME_PATH` do Chrome instalado; **3 rodadas, mediana**;
  comparar o **elemento** do LCP (`lcp-breakdown-insight`), não só o número; confirmar com
  `--throttling-method=devtools`. Servidor local não comprime JS → números locais só comparam entre si.
- **Sitemap:** mudou rota → sitemap no mesmo commit (o bot de WhatsApp lê esse arquivo).

## 6. Armadilhas que custaram tempo (não repetir)

- **Outras sessões mexem nos mesmos arquivos** (a auditoria de UI/UX rodou em paralelo e fez
  PRs #60, #63, #66, #68 em `index.tsx`, `site-footer.tsx`, `particular.tsx`, `seo.ts`,
  `PENDENCIAS.md`). Antes de abrir PR: `git fetch` e integrar a master; resolver juntando as duas
  intenções (não sobrescrever). Depois de outro PR entrar, `gh pr merge` pode acusar conflito.
- Cache da borda: robots/sitemap antigos ficaram até 3 dias no Cloudflare (a origem mandava
  `max-age` de 7 dias; hoje manda 1 h, mas a borda força 4 h). Mudou robots/sitemap → purge.
- Script de Workflow gravado por Python no Windows sai com CRLF e é recusado; normalizar para LF.
- Limite de uso interrompeu workflows grandes 3 vezes: preferir lotes menores e retomar pelo
  cache (mesmo prompt/opções = resultado reaproveitado).
