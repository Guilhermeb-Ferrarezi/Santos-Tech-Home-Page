# Pendências — Santos Tech Home Page

## Abertas

- [ ] **`nginx.conf` está morto/não usado no deploy real** — o `Dockerfile` não
      copia nem referencia esse arquivo; o container final roda só
      `bun run ./docker/server.ts`, que serve estático + SSR direto, sem nginx
      na frente. O `README.md` (linha 6) descreve um comportamento de nginx que
      hoje é feito pelo próprio `docker/server.ts`. Isso foi descoberto ao
      testar o redirect 301 do PR #12 (ver item resolvido abaixo) — o bloco que
      eu tinha colocado em `nginx.conf` nunca rodava em produção. Vale decidir:
      apagar `nginx.conf` e corrigir o README, ou reintroduzir nginx de verdade
      no `Dockerfile` — hoje o arquivo só engana quem olhar o repo achando que
      tem um nginx na frente. _Aguardando Henrique/Guilherme._

## Resolvidas

- [x] **Redirect 301 `/adultos` → `/particular`** — o bloco em `nginx.conf`
      (PR #12) nunca era executado, porque nginx não roda no container (ver
      pendência acima). Corrigido de verdade em `docker/server.ts`
      (`redirectLegacyParticularPath`), testado rodando o servidor de produção
      local (`bun run ./docker/server.ts`) e confirmando com `curl`:
      `/adultos/cursos/davinci` → `301` → `/particular/cursos/davinci`.
