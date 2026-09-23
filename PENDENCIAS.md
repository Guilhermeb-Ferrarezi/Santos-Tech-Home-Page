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

- [ ] **Purgar o cache do Cloudflare pra `/og/*` e `/og-image.png`** — o fix
      de fonte do PR #14 já está 100% no ar na origem (confirmado com
      cache-busting), mas o Cloudflare guardou as imagens quebradas em cache
      por até 4h (`Cache-Control: public, max-age=14400`) antes do fix
      terminar de subir. Enquanto não purgar, quem abrir um link do site que
      já foi acessado antes do fix continua vendo a imagem de OG quebrada
      (tofu-box) no preview de WhatsApp/redes sociais.
      **Ação exata:** painel do Cloudflare → domínio `santos-tech.com` →
      **Caching → Configuration → Purge Cache → Purge Everything** (ou,
      pra ser cirúrgico, "Custom Purge" só com as URLs `/og-image.png` e
      `/og/*`). Depois de purgar, o WhatsApp ainda pode mostrar o preview
      antigo em conversas onde o link já foi enviado antes — isso é cache do
      próprio WhatsApp, não tem como forçar de fora, só enviando o link de
      novo depois de um tempo. _Aguardando Henrique — só ele tem acesso ao
      painel do Cloudflare._

## Resolvidas

- [x] **Redirect 301 `/adultos` → `/particular`** — o bloco em `nginx.conf`
      (PR #12) nunca era executado, porque nginx não roda no container (ver
      pendência acima). Corrigido de verdade em `docker/server.ts`
      (`redirectLegacyParticularPath`), testado rodando o servidor de produção
      local (`bun run ./docker/server.ts`) e confirmando com `curl`:
      `/adultos/cursos/davinci` → `301` → `/particular/cursos/davinci`.

- [x] **Texto quebrado (tofu-box) nas imagens de Open Graph** — achado pelo
      Henrique em produção depois do deploy do PR #12/#13. Causa raiz: o
      Alpine (base da imagem Docker) não tem nenhuma fonte instalada, e
      `scripts/generate-og-images.mjs` depende de fonte de sistema pra
      renderizar texto no SVG. Bug pré-existente da automação de OG (commit
      `b0beb5f`), exposto porque nenhum build de produção tinha rodado desde
      então. Corrigido no `Dockerfile` (PR #14): `apk add fontconfig
      font-liberation && fc-cache -f` antes do `bun run build`. Reproduzido e
      verificado com Docker local, buildando o estágio `build` isolado antes
      e depois da correção — confirmado no ar na origem (ver pendência do
      Cloudflare acima pro cache).
