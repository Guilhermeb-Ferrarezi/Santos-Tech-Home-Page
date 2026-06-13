# Santos Tech — Home Page (santos-tech.com)

Site institucional público da Santos Tech (escola de tecnologia e informática em
Ribeirão Preto). Vitrine da marca: institucional, programas/cursos (infantil **e
adultos**), professores e contato.

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
bun run lint     # eslint — deve passar limpo
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
- Mantenha `<lastmod>` na data da alteração.

Checagem rápida (a contagem deve bater com as rotas públicas reais):
```bash
grep -c "<loc>" public/sitemap.xml
```

## Pré-commit
- [ ] `bun run lint` e `bun run build` passam.
- [ ] Mexeu em rotas? **Atualizei `public/sitemap.xml`** no mesmo commit (regra acima).
- [ ] Identidade visual institucional respeitada.
- [ ] Commit no imperativo, com escopo.
