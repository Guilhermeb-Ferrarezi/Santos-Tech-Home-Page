# 🔁 Retomada — Auditoria de UI/UX (santos-tech.com)

> **Para quem abre a próxima sessão:** leia este arquivo primeiro. Ele tem o estado exato em
> que a atividade parou, o que falta, o que depende do Henrique e como recomeçar sem refazer
> nada. Sessão original: 24–28/09/2026 (encerrada por limite semanal de uso, não por bloqueio).

**Progresso do plano da auditoria: ~65%** — Fases 1 e 2 no ar; Fase 3 aguardando decisões de
marca do Henrique.

---

## 1. Estado em 28/09/2026

| Etapa | Status | Onde |
|---|---|---|
| Auditoria (326 achados, nota 5,1/10) | ✅ Publicada | [README.md](README.md) + [achados/](achados/) — PR #58 |
| Fase 1 · quick wins | ✅ No ar (25/09) | PR #60 · [plano](../../superpowers/plans/2026-09-25-ui-ux-fase1.md) |
| Fase 2 · consistência | ✅ No ar (25/09) | PR #63 · [plano](../../superpowers/plans/2026-09-25-ui-ux-fase2.md) |
| `F181` (robótica fora da home) | ✅ No ar (28/09) | PR #68 |
| Fase 3 · evolução de marca | ⬜ Bloqueada por decisões | seção 4 abaixo |
| Backlog não planejado (~280 achados 🟡/⚪) | ⬜ Não iniciado | seção 5 abaixo |

Nada ficou sem commit: todas as branches da sessão foram mergeadas no `master` e o deploy
(Cloudflare, automático no push em `master`, ~2–5 min) foi conferido ao vivo após cada merge.

### Já feito — não refazer

- **Fase 1:** `F032` tela em branco em `/cursos` · `F255`/`F159` sidebar do `/particular`
  ilegível (a solução que ficou é a do PR #57, de outra sessão, + complementos) · `F358`
  emprego em 60 dias · `F360` certificado "reconhecido" · `F359` ADS como graduação · `F379`
  certificação Blackmagic "inclusa" · `F361` card Office + IA · `F244` contraste de preço ·
  `F175` entrada para `/particular` · `F340` horário de sábado na home · `F256`/`F125` FAB
  cobrindo "Cookies" · `F216` WhatsApp no celular do `/particular` · `F322` robots · link
  "Cookies" (LGPD) no `/particular` · `F181` robótica.
- **Fase 2:** `F180` WhatsApp por programa · `F192` "Ver valores" · `F289` binário decorativo ·
  `F034` conteúdo visível sem JS · `F083`/`F142` métricas · `F104` resultado do curso legível ·
  `F217` preço real no FAQ · `F218` pílulas → lista da área · `F257` gaveta modal · `F030`
  `DESIGN_SYSTEM.md` sincronizado · âncoras que prendiam a página com o ScrollSmoother ·
  38 trocas de copy sem promessa · 12 erros de `tsc` zerados e `tsc` no `bun run lint` ·
  código morto e catálogo único da sidebar. (`F177` já tinha vindo no PR #61 de SEO.)

---

## 2. O que depende do Henrique (destrava a Fase 3)

Numeração = seção 4 do [relatório](README.md#4-decisões-que-só-o-henrique-toma). Cada uma
já tem recomendação e motivo lá.

| # | Decisão | Status em 28/09 | Destrava |
|---|---|---|---|
| 1 | Catálogo infantil único (nomes e idades) | ⬜ Aberta — a sessão de SEO trouxe a referência da Code Ninjas e recomenda manter 5–9 / 10–15 (opção C) | `F197`, `F337`, `F299`* |
| 2 | Cor dos programas e verde reservado ao botão de ação | ⬜ Aberta | `F233`, `F241`, `F001`, `F236`, `F234`, `F304` |
| 3 | Preço no infantil | ⬜ Aberta (= decisão 7 da auditoria de SEO) | `F199` |
| 4 | Número real de alunos ("+300") | ⬜ Aberta | `F313`, `F220` |
| 5 | Nome do curso ADS | ⬜ Aberta | — |
| 6 | Template único do `/particular` com a cara da escola | ⬜ Aberta | `F240`, `F286` |
| 7 | Ensaio fotográfico + depoimentos reais | ⬜ Aberta | `F277`, `F275`, `F284`, `F282`, `F189` |
| 8 | Fase de SVGs próprios (depois das fotos) | ⬜ Aberta | — |
| 9 | Preloader da home (recomendação: remover) | ⬜ Aberta | `F036` |
| 10 | Banner de cookies: "Recusar" com o mesmo peso de "Aceitar" | ⬜ Aberta | `F188` |
| 11 | Formulário no `/contato` (recomendação: não fazer agora) | ⬜ Aberta | — |

\* `F299` (11 páginas infantis sem link de entrada): provavelmente já resolvido pelo PR #61 de
SEO (74/74 URLs alcançáveis a partir da home) — **conferir antes de mexer**.

**Perguntas de fato** (detalhe em `PENDENCIAS.md`): robótica ✅ respondida (não é vendida — a
saída da Robotics Academy de `/cursos/academies` segue com a decisão 2 **da auditoria de SEO**,
que ainda espera a AI Academy) · sábado ✅ respondida (aulas até 20h, atendimento agendado até
22h; texto a validar, aplicar junto com o P4 de SEO) · certificado com carga horária? ⬜ ·
banca no ADS? ⬜.

**Passo manual do Henrique:** criar `www.santos-tech.com` na Cloudflare (hoje NXDOMAIN) — passo a
passo no achado [`F323`](achados/tecnico.md#f323).

---

## 3. Próximos passos, em ordem

1. **Henrique:** responder as decisões 1, 2 e 9 (as que mais destravam) e criar o `www`.
2. **Nova sessão (Fase 3):** spec → plano → código, em
   `docs/superpowers/specs/AAAA-MM-DD-ui-ux-fase3-design.md`, com as decisões datadas no topo.
   Itens da Fase 3 do [relatório](README.md#3-plano-de-ataque): `F197`, `F337`, `F299`, `F234`,
   `F304`, `F199`, `F240`, `F286`, `F282`, `F277`, `F275`, `F284`, `F189`, `F220`, `F313` + os
   de botão que ficaram da Fase 2 (`F233`, `F241`, `F001`, `F236`, `F036`).
3. **Backlog sem decisão** (pode rodar em paralelo à Fase 3): itens abertos em
   `PENDENCIAS.md` › "Backlog de UI/UX" (header colado em 768px, frases de salário `F362`,
   bloco "Cursos por área" repetindo a sidebar no desktop, avisos de contraste do #57).

---

## 4. Como recomeçar (checklist técnico)

```bash
git fetch origin && git log --oneline origin/master -10   # outras sessões mexem no mesmo repo
git switch -c claude-henrique/ui-ux-fase3 origin/master
bun install                                               # worktree novo não tem node_modules
bun run dev --port 5199 --strictPort                      # mesma config "dev-audit" de .claude/launch.json
```

Gate e verificações (todas precisam passar antes de PR/merge):

```bash
bun run lint                                           # ESLint + sitemap + tsc --noEmit (0 erros)
bun run build                                          # depois: git restore public/og-image.png public/og/
node --test src/lib/*.test.ts                          # 8/8
node scripts/verificar-seo.mjs http://localhost:5199   # 10/10
node scripts/verificar-sidebar-fusao.mjs http://localhost:5199   # 318 verificações, 0 falhas
```

Reauditar uma tela (gera screenshots desktop/mobile/tablet + métricas de DOM + axe; ~300 MB, fora do repo):

```bash
node scripts/auditoria-ui/capturar-evidencias.mjs ../evidencias-ui 4 http://localhost:5199
```

**Ferramentas instaladas nesta máquina** (em `C:/Users/55169/.claude/skills/`): `apple-design-review`
(Apple HIG, 123 páginas + 8 princípios), `platform-design-web` (WCAG 2.2), `apple-design` e
`review-animations` (motion).

**Lições que custaram caro nesta sessão**

- Outras sessões mergearam PRs no mesmo arquivo enquanto esta trabalhava (#57 sidebar, #59/#61
  SEO, #66/#67 histórico): `git fetch` antes de cada fase **e** antes de cada PR.
- `ScrollSmoother` + link `#âncora`: o salto tem que passar pelo smoother
  (`src/hooks/use-smooth-scroll.ts`); não fazer `pushState` do hash (o router faz `scrollIntoView`
  no wrapper e prende a página de novo).
- `bun run build` regenera `public/og/**` — restaurar antes de commitar.
- Revisão adversarial (2 agentes: correção/a11y e copy/visual) antes de cada PR achou problemas
  reais nas duas fases (8 e 9) — manter.
- Enxames grandes estouram o limite de uso: 1 verificador por lote com dados em disco; o
  `resumeFromRunId` não reaproveitou agentes concluídos depois de falha por limite.

---

## 5. Os ~280 achados fora do plano

O plano de 3 fases cobre ~45 dos 326 achados (os de maior impacto ÷ esforço). Os demais —
quase todos 🟡 médios e ⚪ polimento — estão, com arquivo:linha e correção sugerida, nos arquivos
de [`achados/`](achados/) (um por dimensão). Antes de corrigir qualquer um, **conferir no código
atual**: as Fases 1–2 e a Fase 1 de SEO mudaram muitos arquivos depois da auditoria, e vários
podem já estar resolvidos (como aconteceu com `F177` e `F257`).

---

## 6. Prompt sugerido para abrir a próxima sessão

> Retomar a auditoria de UI/UX do santos-tech.com. Leia `docs/auditorias/2026-09-24-ui-ux/RETOMADA.md`,
> `PENDENCIAS.md` e `HISTORICO.md`. Decisões que eu tomei desde então: [listar]. Comece pela Fase 3
> (spec → plano → código) com o que essas decisões destravam.
