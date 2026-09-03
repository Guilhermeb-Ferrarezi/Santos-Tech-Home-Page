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

## Os dois cards

1. **Pergunta** — motivo + `[Gerenciar]` `[Aceitar]`.
2. **Painel** (`Gerenciar`, ou “Cookies” no rodapé) — categorias com controle
   próprio, `[Recusar tudo]` `[Salvar]`.

## As alavancas de aceite que estão no ar

| Alavanca | Implementação |
|---|---|
| Pedido, não aviso | “Ajuda a gente a melhorar o site?” em vez de “este site usa cookies” |
| Motivo concreto | “quais páginas as famílias mais visitam” — não “melhorar sua experiência” |
| Objeção respondida antes | “Nada de anúncios, e seus dados não são vendidos” |
| Reversibilidade | “Dá para mudar quando quiser, em ‘Cookies’ no rodapé” |
| Timing | aparece 1,2s depois do pré-loader sair, ou no primeiro scroll |
| Baixo atrito | card no canto, não modal preto; uma decisão só, dois botões |
| Decisão forçada (sem “X”) | fechar sem escolher não é resposta |
| CTA na cor da marca | “Aceitar” em `#0DB88F`; “Gerenciar” mesmo tamanho e peso |

## ⚠️ O risco assumido: recusar custa 2 cliques

O card de pergunta oferece **Gerenciar** e **Aceitar** — a recusa mora no
painel. Decisão do dono do site, tomada ciente de que a LGPD (art. 8º) pede que
recusar seja tão fácil quanto aceitar. Aceite em 1 clique contra recusa em 2 é
o desenho que a CNIL multou em Google e Facebook e que a ANPD trata como
consentimento viciado.

**Mitigações que não podem sair** sem piorar o risco:

- “Recusar tudo” é o **primeiro** botão do painel, um clique, sem toggle pra
  mexer antes.
- “Gerenciar” tem o mesmo tamanho e peso de “Aceitar” — não é link escondido
  nem cinza-sobre-cinza.
- Nenhum toggle nasce ligado; fechar ou ignorar nunca vira aceite.

Para voltar ao desenho seguro: trocar “Gerenciar” por “Recusar” no card e
mover “Gerenciar” pra linha de links abaixo dos botões.

## O que continua fora de cogitação

- Toggle de análise já ligado, ou “continuar navegando = aceitar”.
- Modal que só fecha aceitando, ou re-perguntar toda visita para cansar.
- Categorias inventadas (“marketing”, “publicidade”) que o site nem usa.
- Enterrar o “Recusar tudo” mais fundo, atrás de outro clique dentro do painel.

## O que sai do navegador em cada estado

Verificado no navegador em 03/09/2026, com a chave real de produção:

| Estado | Scripts do PostHog | Eventos enviados | Cookie | localStorage |
|---|---|---|---|---|
| **Sem decidir** | nenhum | nenhum | nenhum | nenhum |
| **Recusou** | nenhum | só `$pageview` / `$pageleave`, com `distinct_id` `cookieless_…` | nenhum | só o registro da escolha |
| **Aceitou** | nenhum | tudo | `ph_<token>_posthog` | `ph_<token>_posthog` |

Duas travas garantem isso e **não devem ser removidas**:

- `disable_external_dependency_loading` + `advanced_disable_flags` +
  `capture_exceptions/performance/dead_clicks: false`. Sem elas o SDK injeta 4
  scripts de `us-assets.i.posthog.com` **já no init, mesmo opted-out** — o que
  manda o IP do visitante pro PostHog antes de ele decidir qualquer coisa. Nada
  disso é usado pelo site (erro é Sentry; a tela de Analytics do api-go consulta
  só `$pageview`). Efeito colateral: **feature flags, experimentos, session
  replay e surveys ficam indisponíveis** — para usar qualquer um, religar e
  fazê-lo só depois do aceite.
- `before_send` corta tudo que não seja `$pageview`/`$pageleave` enquanto não há
  consentimento. Sem isso, `$autocapture` (cliques) vazava de quem recusou —
  aconteceu nos testes antes da trava entrar.

## Como medir e iterar

O evento `cookie_consent_decided` vai pro PostHog com `choice`, `action`,
`surface`, `decision_ms` e `path` — mas só de quem **aceitou** (é o único que
tem consentimento pra evento nomeado).

O denominador vem do modo cookieless: quem recusou gera `$pageview` com
`distinct_id` começando em `cookieless_`. A taxa é

```sql
-- aceites / (aceites + visitantes cookieless), na janela que interessar
SELECT
  countIf(event = 'cookie_consent_decided') AS aceites,
  count(distinct if(distinct_id LIKE 'cookieless_%', distinct_id, null)) AS recusas_aprox
FROM events
WHERE timestamp > now() - INTERVAL 30 DAY
```

`decision_ms` mostra se as pessoas leem ou clicam no reflexo; `action` separa
quem aceitou direto de quem passou pelo painel. Para testar variações de copy
sem feature flag (elas estão desligadas, ver acima), dá pra alternar o texto por
build e comparar janelas de tempo.
