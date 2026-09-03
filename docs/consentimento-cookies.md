# Consentimento de cookies — como funciona e como aumentar o aceite

Banner de cookies do site (LGPD). Código:

- [`src/lib/consent.ts`](../src/lib/consent.ts) — estado da decisão (fonte da verdade).
- [`src/components/cookie-consent.tsx`](../src/components/cookie-consent.tsx) — o card.
- [`src/lib/posthog.ts`](../src/lib/posthog.ts) — o gate: o PostHog sobe *opted-out*.
- Link **“Cookies”** no rodapé reabre o card para trocar/revogar.

## O que o gate garante

Antes do “Aceitar”, o PostHog sobe com `opt_out_capturing_by_default`,
`opt_out_persistence_by_default` e `persistence: "memory"`: **nenhum cookie,
nenhum localStorage** (fora o registro do próprio consentimento) e **nenhum
evento enviado**. Ao aceitar, liga captura + persistência e emite o `$pageview`
da visita. Ao recusar (ou revogar depois), desliga e roda `reset(true)`.

Prazos de validade em `consent.ts`: aceite vale **1 ano**, recusa vale **6
meses**. Vencido, o banner pergunta de novo — e o gate desfaz um opt-in antigo
guardado pelo próprio SDK.

## As alavancas de aceite que estão no ar

Todas são de persuasão legítima — nenhuma esconde ou dificulta o “Recusar”.

| Alavanca | Implementação |
|---|---|
| Pedido, não aviso | “Ajuda a gente a melhorar o site?” em vez de “este site usa cookies” |
| Motivo concreto | “quais páginas as famílias mais visitam” — não “melhorar sua experiência” |
| Objeção respondida antes | “Nada de anúncios, e seus dados não são vendidos” |
| Reversibilidade | “Dá para mudar quando quiser, em ‘Cookies’ no rodapé” |
| Timing | aparece 1,2s depois do pré-loader sair, ou no primeiro scroll |
| Baixo atrito | card no canto, não modal preto; uma decisão só, dois botões |
| Decisão forçada (sem “X”) | fechar sem escolher não é resposta — só há aceitar/recusar |
| CTA na cor da marca | “Aceitar” em `#0DB88F`; “Recusar” mesmo tamanho e contraste legível |

## O que **não** vale fazer aqui

Dark pattern de consentimento invalida o consentimento (LGPD, art. 8º) e vira
risco de sanção — além de queimar a confiança da marca com pai/mãe, que é o
ativo do site. Fora de cogitação:

- “Recusar” escondido atrás de “Gerenciar preferências”, ou cinza-sobre-cinza.
- Toggle de análise já ligado, ou “continuar navegando = aceitar”.
- Modal que só fecha aceitando, ou re-perguntar toda visita para cansar.
- Categorias inventadas (“marketing”, “publicidade”) que o site nem usa.

## Como medir e iterar

O evento `cookie_consent_decided` vai pro PostHog com `choice`, `surface`,
`details_expanded`, `decision_ms` e `path`.

**Cuidado com o denominador:** quem recusa não é rastreado, então o PostHog
sozinho só enxerga os aceites — a taxa parece 100%. Para ter a taxa real,
habilite o modo cookieless no projeto do PostHog e ligue
`VITE_POSTHOG_COOKIELESS_ON_REJECT=true`: quem recusa passa a ser contado **sem
cookie e sem storage**. Sem esse passo, o número de aceites só serve como
tendência (comparar semana contra semana), nunca como taxa.

Com o denominador no ar, dá para testar variações de copy do título e do corpo
via feature flag do PostHog e comparar `choice=accepted / total`. `decision_ms`
mostra se as pessoas estão lendo ou clicando no reflexo; `details_expanded`
mostra se vale investir mais no texto curto ou no detalhamento.
