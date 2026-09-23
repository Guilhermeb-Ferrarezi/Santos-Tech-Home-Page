# Plano — Renomear `/adultos` → `/particular` + split DaVinci/Premiere

> Ver spec: [2026-09-23-particular-rename-design.md](../specs/2026-09-23-particular-rename-design.md)

## 1. Rename mecânico de rotas e componentes
- [ ] `git mv` de todos os `src/routes/adultos*.tsx` → `particular*.tsx` (53 arquivos)
- [ ] Ajustar `createFileRoute("/adultos...")` → `createFileRoute("/particular...")` em cada arquivo
- [ ] Ajustar `path: "/adultos/..."` (pageMeta) → `/particular/...` em cada arquivo
- [ ] Ajustar título SEO "... para Adultos em Ribeirão Preto ..." → "... Particular em Ribeirão Preto ..."
- [ ] `git mv adultos-course-page.tsx particular-course-page.tsx`, renomear export `AdultosCursosPage` → `ParticularCursosPage`, atualizar os 53 imports
- [ ] `git mv adultos-faq.tsx particular-faq.tsx`, renomear exports, atualizar texto e os imports
- [ ] Atualizar `__root.tsx` (`isAdultosRoute` → `isParticularRoute`)
- [ ] Atualizar comentário em `use-smooth-scroll.ts`
- [ ] Atualizar `particular.tsx` (menu): rota `to="/particular"`, tags "para adultos" → "particular"
- [ ] Atualizar `particular.index.tsx`: pill do hero, tags "para adultos" → "particular", links internos `/adultos/cursos/*` → `/particular/cursos/*`

## 2. Pill do curso individual
- [ ] Trocar `Santos Tech · Adultos · {categoria}` por `Escola Santos Tech · Particular` em `particular-course-page.tsx`

## 3. Split DaVinci / Premiere
- [ ] Reescrever `particular.cursos.davinci.tsx` — ementa 100% DaVinci Resolve (2 tiers)
- [ ] Criar `particular.cursos.premiere.tsx` — ementa 100% Adobe Premiere (2 tiers)
- [ ] Atualizar `GRUPOS` em `particular.tsx`: renomear item "davinci" pra "DaVinci Resolve", adicionar item "premiere" → "Adobe Premiere"

## 4. SEO, sitemap e OG images
- [ ] Atualizar `src/lib/seo.ts` (descrição padrão, keywords, breadcrumb, regex do OG image)
- [ ] Atualizar `scripts/generate-og-images.mjs` (descoberta de rotas + pasta de saída)
- [ ] `git mv public/og/adultos public/og/particular`
- [ ] Reescrever `public/sitemap.xml` inteiro com as URLs `/particular/...` (incluindo a nova `premiere`)
- [ ] Atualizar `src/routes/index.tsx` (meta description da home) e `src/routes/termos.tsx`

## 5. Infra
- [ ] Adicionar redirect 301 `/adultos(/.*)?` → `/particular$1` no `nginx.conf`

## 6. Verificação
- [ ] `bun run lint` sem erros
- [ ] `bun run build` sem erros (routeTree.gen.ts regenerado sozinho)
- [ ] Conferir `grep -c "<loc>" public/sitemap.xml` bate com as rotas públicas reais
- [ ] Preview local: pill, menu (DaVinci + Premiere separados), página `/particular`, tags "particular"
- [ ] Commits por task (Conventional Commits, sem `Co-Authored-By`), push da branch, abrir PR
