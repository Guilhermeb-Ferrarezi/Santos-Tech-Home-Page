# Pendências — Santos Tech Home Page

## Abertas

- [ ] **Estatística "24 aulas por curso" na home do `/particular` vai ficando
      menos precisa conforme a unificação de tiers avança** — achado pela
      auditoria de resquícios do modelo antigo (23/09). O bloco "Ritmo"
      (`particular.index.tsx`) mostra 1h/aula, 24 aulas/curso, ~3 meses no
      ritmo padrão e ~1 mês no intensivo como se fosse universal. Hoje ainda
      é o caso pra maioria (entrada Essencial dos 45 cursos não convertidos +
      Canva/CapCut/Git/Manutenção/Impressão 3D, todos 24h), mas a unificação
      de tiers definiu 48 aulas como novo padrão (ver pendência abaixo) e o
      Premiere — primeiro curso convertido — já está em 48h, contradizendo a
      estatística. Não mexi agora porque não é um bug claro: é decisão de
      posicionamento (qual número mostrar como representativo) que toca
      como o site se apresenta, não uma correção óbvia. Revisar quando a
      conversão dos 45 cursos avançar. _Aguardando Henrique._

- [~] **Unificação de tiers em opção única — falta só revisar a tabela de
      taxa técnica antes de converter os 45 cursos restantes** (spec
      completa em
      [`docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md`](docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md),
      PR #22/#24). Decidido em 23/09: `git` vira técnico (110/h); `capcut`
      mantém 24h sem nivelar; `mobile` unifica em React Native (pesquisa
      de mercado mostrou Brasil sem vantagem clara do RN — decisão veio da
      sinergia com o curso de Frontend, que já ensina React); `jogos`
      mantém Unity + Godot juntos (mercados diferentes: Unity pra
      empregabilidade mobile, Godot pra publicar indie sem custo);
      `manutencao`/`impressao-3d` seguem curtos (24h), sem objeção.
      **Falta:** Henrique revisar a tabela de taxa técnica (R$110-180/h,
      ~25 cursos) — são sugestões da spec, não confirmadas. Premiere já é
      o piloto pronto (PR #20/#21). _Aguardando Henrique._

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
