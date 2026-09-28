# Histórico — Santos Tech Home Page

Registro das sessões de trabalho: objetivo, o que foi entregue, provas e o que ficou em
aberto. O que está pendente vive em [`PENDENCIAS.md`](PENDENCIAS.md); aqui fica só o que
aconteceu. Entrada mais recente no topo.

---

## 24–28/09/2026 · Auditoria de UI/UX e design + Fases 1 e 2

**Objetivo:** auditoria completa de UI, UX, design e formatação de texto do site, com
multi-agentes, e execução do que não depende de decisão de marca.

**Entregue**

- ✅ **Auditoria** — [`docs/auditorias/2026-09-24-ui-ux/`](docs/auditorias/2026-09-24-ui-ux/README.md)
  (PR #58). 75 rotas + 404 capturadas em desktop, mobile e tablet (script reproduzível
  `scripts/auditoria-ui/capturar-evidencias.mjs`), 18 lentes de agentes, verificação
  adversarial de cada achado, painel de 3 designers, crítico de completude. **326 achados**
  (🔴 4 · 🟠 32 · 🟡 139 · ⚪ 151), nota geral 5,1/10, plano em 3 fases e 11 decisões do dono.
  Referências: `DESIGN_SYSTEM.md`, Apple HIG (skill `apple-design-review`), WCAG 2.2.
- ✅ **Fase 1 — quick wins** (PR #60, no ar em 25/09): tela em branco ao clicar "Ver todos
  os programas" em `/cursos`, sidebar do `/particular` ilegível (integrada com o #57),
  promessas sem prova (emprego em 60 dias, certificado "reconhecido", ADS como graduação,
  "engenheiro", certificação Blackmagic "inclusa"), entrada para `/particular` no header,
  rodapé e home, WhatsApp no celular do `/particular`, "Cookies" (LGPD) no `/particular`,
  horário de sábado da home, contraste de preço, `robots.txt`.
- ✅ **Fase 2 — consistência** (PR #63, no ar em 25/09): âncoras que prendiam a página com
  o ScrollSmoother, gaveta do celular como diálogo modal, WhatsApp por programa, "Ver valores",
  conteúdo visível sem JS (62 → 0 `opacity:0` no HTML), métricas sem estouro, rolagem
  horizontal de `/cursos/junior`, resultado do curso legível (52/52 idêntico ao original),
  FAQ de preço com o valor real, pílulas → lista da área, 38 trocas de copy sem promessa,
  ~510 linhas de código morto removidas, catálogo único da sidebar, 12 erros de `tsc`
  zerados e `tsc --noEmit` no `bun run lint`, `DESIGN_SYSTEM.md` sincronizado.
- ✅ **`F181`** (28/09): hero e card da home sem "robôs"/"Robótica" — desbloqueado pela
  decisão do Henrique de 26/09 (robótica não é vendida).

**Provas:** `bun run lint` (ESLint + sitemap + `tsc`) e `bun run build` verdes em cada PR;
`node --test` 8/8; `scripts/verificar-seo.mjs` 10/10 na branch; `scripts/verificar-sidebar-fusao.mjs`
318 verificações / 0 falhas; revisão adversarial por 2 agentes antes de cada PR (Fase 1:
8 correções; Fase 2: 1 bloqueante + 8 correções); conferência ao vivo em produção após
cada merge.

**Lições**

- Dar `git fetch` e olhar `origin/master` antes de começar cada fase e antes do PR: outras
  sessões mergearam #57 (mesma sidebar) e #59/#61 (SEO) em paralelo.
- ScrollSmoother + âncora `#` rola o `#smooth-wrapper` e prende a página; o salto tem que
  passar pelo smoother e sem `pushState` do hash (o router faz `scrollIntoView`).
- Enxames grandes de agentes estouram o limite do plano: 1 verificador por lote, dados em
  disco, e extrair do `journal.jsonl` em vez de confiar no resume.

**Ficou em aberto** (detalhe em `PENDENCIAS.md`): decisão 2 (cor/formato do botão verde,
CTAs das peles, "Entrar"), decisão 9 (preloader), as demais decisões de marca da auditoria
(Fase 3), perguntas 3 e 4 (certificado e banca do ADS), `www` no DNS e purge do
`robots.txt` no Cloudflare.
