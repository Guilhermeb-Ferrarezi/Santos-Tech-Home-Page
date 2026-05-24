# Deploy — Santos Tech Home Page

Stack de produção, fluxo de atualização e armadilhas conhecidas.

## Stack

| Camada | Tecnologia |
|---|---|
| **Hospedagem** | VPS Contabo (Henrique) |
| **PaaS** | [Easypanel](https://easypanel.io/) (auto-hospedado na própria VPS) |
| **Build** | Docker (`Dockerfile` na raiz) |
| **Runtime** | Bun 1.3.14 alpine |
| **Web server** | `docker/server.ts` rodando em `Bun.serve` na porta 3000 |
| **DNS** | Cloudflare — **só DNS**, não hospedagem |
| **Repo** | GitHub `Guilhermeb-Ferrarezi/Santos-Tech-Home-Page` branch `master` |

> ⚠️ O `wrangler.jsonc` na raiz é resquício de tentativa antiga de deploy via
> Cloudflare Worker. **Não está em uso.** Ignorar.

## Como deployar uma mudança

1. `git commit` + `git push origin master`
2. Abrir o painel **Easypanel** na VPS Contabo
3. Localizar a aplicação Santos Tech
4. Clicar **Deploy** / **Implantar**
5. Acompanhar o log até "Container started" / "Application is live" (~2-5 min)

**Auto-deploy via webhook GitHub** ainda não está ativo. Quando estiver,
o passo 2-4 deixa de existir.

## Como o `docker/server.ts` serve arquivos

A ordem dos handlers em [docker/server.ts](docker/server.ts) é:

1. **`serveStaticAsset`** — Bundled assets + arquivos públicos top-level
   - `/assets/*` → cache eterno (têm hash no nome)
   - `/algo.ext` (raiz, 1 segmento + extensão) → cache 1h (favicon, og-image, robots.txt, etc)
   - Arquivos ocultos `/.algo` são ignorados (segurança)
2. **`servePublishedSite`** — Rotas publicadas via Site Publisher (de `/srv/site-routes`)
3. **Fallback** → SSR via Cloudflare Worker entry (TanStack Start)

### Adicionando um arquivo público novo

Pôr em `public/` na raiz do repo. Ele aparece em `dist/client/` após
`vite build` e é servido em `/<nome-do-arquivo>` automaticamente.
**Não precisa mexer no docker/server.ts.**

Exemplo: `public/robots.txt` → disponível em `https://santos-tech.com/robots.txt`.

### Não funciona em `public/`

- Subdiretórios não são servidos (regex aceita só 1 segmento). Se precisar de
  `/static/foo.png`, ou move pra raiz ou edita o regex em `docker/server.ts`.

## Armadilhas conhecidas

### bun.lock × package.json

O Dockerfile usa `bun install --frozen-lockfile`. Toda vez que mudar
`package.json` (adicionar/remover dep, mudar versão), rodar:

```bash
npx bun install
git add package.json bun.lock
git commit -m "..."
```

Se esquecer, o build na Contabo falha no `bun install` com `exit code 1`.

### Build local com Bun no Windows

`bun run build` quebra no Windows ("Cannot find module 'workerd'") porque
o Bun não baixa o binário Windows do workerd direito. Não é problema —
no Linux alpine da Contabo funciona normal. Pra rodar build localmente
no Windows, usar `npm run build`.

### Cache do browser para favicon

Após mudar favicon ou seu path, browsers cacheiam por dias. Pedir hard
refresh (Ctrl+Shift+R) ou abrir em janela anônima.

## Configurar auto-deploy (TODO)

No painel Easypanel dessa aplicação, procurar **"Webhooks"** ou toggle
**"Implantar automaticamente"**. Se gerar uma URL de webhook, adicionar em:

> github.com/Guilhermeb-Ferrarezi/Santos-Tech-Home-Page →
> Settings → Webhooks → Add webhook

Precisa de permissão de **admin** no repo. Henrique tem acesso colaborador
mas pode precisar do Guilherme pra configurar webhook.
