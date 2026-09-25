# Santos Tech — Home Page (santos-tech.com)

## ⚠️ OBRIGATÓRIO — verificar build e lint antes de commitar/pushar/deployar

**NUNCA** commite, faça push ou dispare deploy sem antes rodar a verificação de **build**
e **lint** e confirmar que passam **sem erros**. Build quebrado = deploy quebrado.

- **Frontend (React/Vite):** `bun run lint` **e** `bun run build` (o build faz o type-check `tsc`).
- **Go:** `gofmt -l .` (saída vazia) · `go vet ./...` · `go build ./...` · `go test ./...`.

Se qualquer etapa falhar, **corrija antes de prosseguir** — não pushe "pra ver se passa no CI".


Site institucional público da Santos Tech (escola de tecnologia e informática em
Ribeirão Preto). Vitrine da marca: institucional, programas/cursos (infantil **e
particulares** — rota `/particular`, cursos individuais 1 aluno + 1 professor,
qualquer idade), professores e contato.

## Stack
- **React 19** + **Vite 7** + **TanStack Router** (roteamento por arquivos).
- Rotas em `src/routes/` (nomes com pontos = segmentos, ex.: `cursos.create.8-9-anos.tsx`
  → `/cursos/create/8-9-anos`). `src/routeTree.gen.ts` é **gerado** — não edite à mão.
- SEO em `src/lib/seo.ts`. Identidade visual institucional (ver guia do ecossistema).

## Rodar
```bash
bun install
bun run dev      # vite dev
bun run build    # build de produção
bun run lint     # eslint + scripts/check-sitemap.mjs — deve passar limpo
node scripts/verificar-seo.mjs http://localhost:3000   # aceite de SEO (ver abaixo)
```

## ⚠️ Regra: manter o `public/sitemap.xml` SEMPRE atualizado

`public/sitemap.xml` é **estático e mantido à mão** (não é gerado pelo build). Ele é a
**fonte de verdade das rotas públicas** e é consumido por outro serviço:

> O **bot de WhatsApp** (`santos-tech-infra/apps/bot-go`) busca este sitemap e usa as
> URLs nele como as **únicas páginas que pode ler via WebFetch** para responder
> clientes. Rota fora do sitemap = o bot **não consegue** responder sobre ela; URL
> obsoleta no sitemap = o bot tenta abrir um **404**.

**Por isso, em TODA mudança de rota, atualize `public/sitemap.xml` no mesmo commit:**
- **Adicionou** uma rota/página em `src/routes/` → adicione o `<url><loc>` correspondente.
- **Removeu/renomeou** uma rota → remova/ajuste a `<loc>` antiga.
- Mantenha `<lastmod>` na data da última mudança **de conteúdo** da página (refactor,
  className ou troca de ícone não contam). Não use `<priority>`/`<changefreq>` — o Google ignora.

Checagem automática: o `bun run lint` roda `scripts/check-sitemap.mjs`, que compara as
rotas públicas de `src/routes/` com as `<loc>` e **falha** se faltar ou sobrar URL.

## ⚠️ Regra: SEO verificável — `scripts/verificar-seo.mjs`

Lê o HTML servido como um robô (sem JavaScript) e checa 10 critérios da auditoria de
24/09/2026 (`docs/auditorias/2026-09-24-seo-geo-aeo.md`): robots, sitemap, alcance de
**todas** as URLs do sitemap por links a partir da home, FAQ e ementa no HTML, H1 sem
`opacity:0`, `Accept` sem 500, JSON-LD limpo, 404 com noindex e rodapé com NAP.
Rode depois do build, contra o servidor de produção local:
```bash
PORT=3000 bun run docker/server.ts &
node scripts/verificar-seo.mjs http://localhost:3000
```
Mexeu em navegação, FAQ, hero, JSON-LD, robots/sitemap ou `docker/server.ts`? Tem que
continuar **10/10**. Página nova precisa ser alcançável por `<a href>` (o sitemap sozinho
não basta).

## Pré-commit
- [ ] `bun run lint` e `bun run build` passam.
- [ ] Mexeu em rotas? **Atualizei `public/sitemap.xml`** no mesmo commit (regra acima).
- [ ] Mexeu em navegação, conteúdo, hero, JSON-LD ou servidor? `verificar-seo.mjs` 10/10.
- [ ] Identidade visual institucional respeitada.
- [ ] Commit no imperativo, com escopo.
