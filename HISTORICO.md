# Histórico

Registro do que cada sessão entregou (mais recente no topo). O que ficou em aberto vai
pro `PENDENCIAS.md`.

## 24–28/09 — Auditoria SEO/GEO/AEO, Fase 1 no ar e referência da Code Ninjas ✅

Relatório em `docs/auditorias/2026-09-24-seo-geo-aeo.md`; plano da Fase 1 em
`docs/superpowers/plans/2026-09-25-seo-fase-1.md`.

- **Auditoria (PR #59):** 12 frentes com diretrizes de fontes oficiais (Google Search
  Central, web.dev, schema.org, Bing, OpenAI, Anthropic, Perplexity, Cloudflare), 238
  achados brutos → 189 verificados por revisão adversarial (0 🔴 · 7 🟠 · 86 🟡 · 96 🟢),
  plano em 4 fases e 25 decisões de negócio.
- **Fase 1 (PR #61, no ar em 25/09):** robots sem bloquear `/assets/` e sem conflito com
  noindex; sitemap só com `loc`/`lastmod` e conferido no `bun run lint`; Brotli nível 4;
  `Accept` não-HTML sem 500; JSON-LD limpo (sem avaliação autodeclarada, sem `instructor`
  inválido, ItemList no hub); FAQ e ementa no HTML servido; H1 visível do servidor; rodapé
  com navegação e endereço; trilha entre faixas; acessibilidade de teclado.
  Integrada com a Fase 1 de UI/UX (#60) sem duplicar a seção de particulares da home.
- **Aceite automatizado:** `scripts/verificar-seo.mjs` (10 checagens, cada uma ligada a um
  achado). Produção: **0/10 antes do código → 10/10 em 28/09**. Links alcançáveis a partir
  da home: **8/74 → 74/74**.
- **Performance (Lighthouse mobile na produção, mediana de 3):** home 66 → 80, LCP
  5,7 → 3,8 s, TBT 220 → 9 ms. Nos cursos o LCP simulado subiu porque antes media o logo
  (conteúdo nascia invisível); com lentidão aplicada, o texto aparece no primeiro desenho
  (2,5–2,6 s). Dado de campo a conferir por volta de 23/10.
- **Decisões do Henrique (26/09, PR #64):** Robotics Academy sai do site; sábado com aulas
  até 20h e atendimento agendado até 22h (texto a validar); e-mail `contato@santos-tech.com`;
  CEP 14020-170.
- **Referência da Code Ninjas (PR #65):** JR 5–7 e CREATE 8–14 (conferido nas páginas
  oficiais), para a decisão das idades. Recomendação: opção C (manter 5–9 / 10–15 com
  regra de borda) e reescrever as 9 páginas de currículo a partir da ementa real.
- **Achado fora do escopo:** material "restrito" dos professores está num JavaScript
  público (🔴 no `PENDENCIAS.md`).
- **Em aberto (no `PENDENCIAS.md`):** aprovar a opção C das idades, validar o texto do
  sábado, AI Academy, preços e as demais decisões; "Browser Cache TTL" do Cloudflare;
  Fase 2 (fonte única de fatos, preços, respostas diretas, blog), que deve rodar numa
  sessão nova.
