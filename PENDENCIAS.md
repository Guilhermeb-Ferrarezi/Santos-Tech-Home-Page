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
