# Pendências — Santos Tech Home Page

## Abertas

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

- [x] **`nginx.conf` estava morto/não usado no deploy real** — o `Dockerfile`
      nunca copiava nem referenciava esse arquivo; o container final roda só
      `bun run ./docker/server.ts`, que já serve estático + SSR direto, sem
      nginx na frente. Confirmado com nova checagem em todo o repo (sem
      `docker-compose`, sem workflow de CI/CD, sem nenhuma outra automação
      referenciando o arquivo) antes de remover. Removido `nginx.conf` e
      corrigido `README.md` (seção "Deploy") pra descrever a arquitetura real:
      Bun exposto direto na porta 3000, sem proxy reverso no container.

- [x] **Redirect 301 `/adultos` → `/particular`** — o bloco em `nginx.conf`
      (PR #12) nunca era executado, porque nginx não roda no container (ver
      item acima). Corrigido de verdade em `docker/server.ts`
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
