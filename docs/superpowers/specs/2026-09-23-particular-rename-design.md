# Renomear rota `/adultos` para `/particular` + separar DaVinci/Premiere

> Spec da mudança de nomenclatura da seção de cursos individuais
> (`santos-tech.com/adultos/*`) e da divisão do curso de edição de vídeo.

## Decisões, confirmadas em 23/09

1. **Problema:** o termo "Adultos" descreve a idade do público, não o que
   realmente diferencia esses cursos — que são **individuais/particulares**
   (1 aluno + 1 professor), o mesmo conteúdo de uma turma comum, só que sem
   dividir a atenção do professor. Isso quebra na prática: um responsável
   procurando um curso de Modelagem 3D pra um filho de 12 anos encontra a
   rota "Adultos" e desiste por achar que não é pra idade dele — quando na
   verdade o curso serve perfeitamente, só que no formato particular.
2. **Nomenclatura escolhida:** **"Particular"** substitui "Adultos" em toda
   a comunicação (pill do hero, menu lateral, tags de marca, títulos SEO,
   breadcrumb, meta description).
3. **Escopo:** rótulo visível **+ URL**. A rota migra de `/adultos/*` para
   `/particular/*`. Justifica o escopo maior porque a palavra "adultos"
   aparece na própria URL indexada pelo Google — só trocar o texto da tela
   deixaria a URL contradizendo a nova comunicação.
4. **Pill do curso individual** (`adultos-course-page.tsx`, compartilhado
   pelas ~50 páginas de curso): troca `Santos Tech · Adultos · {categoria}`
   por **`Escola Santos Tech · Particular`** — sem a categoria do curso.
5. **DaVinci Resolve e Adobe Premiere viram cursos distintos**, cada um com
   ementa própria (hoje é 1 curso só, com Premiere encaixado como módulo
   dentro do tier do DaVinci). DaVinci mantém o slug atual; Premiere ganha
   rota nova. Cada um passa pelo **Teste do Tier** do
   [processo de curadoria](../../processo-curadoria-cursos.md)
   independentemente.

## Fora de escopo (YAGNI)

- **Não mexe** no site/Instagram voltado a crianças e adolescentes — esse é
  um posicionamento e canal totalmente separado.
- **Não renomeia** o conceito "adultos" onde ele aparece como palavra comum
  fora da seção `/adultos` (ex.: ementas pedagógicas do infantil que citam
  "adultos" no sentido genérico de pessoas crescidas, ou a distinção legal
  "aluno adulto" em `privacidade.tsx`).
- **Não cria mecanismo de redirect dinâmico/roteado na aplicação** — o
  redirect 301 de `/adultos/*` pro `/particular/*` é feito na camada de
  infra (`nginx.conf`), que já fica na frente da aplicação.
- **Não regenera manualmente as imagens de OG** — o script
  `scripts/generate-og-images.mjs` já roda automaticamente no `bun run
  build`; só ajusta o script pra escrever em `public/og/particular/`.

## Escopo técnico (arquivos afetados)

- **53 arquivos de rota** `src/routes/adultos*.tsx` → `particular*.tsx`
  (`git mv` + ajuste de `createFileRoute(...)`, `path:` do `pageMeta` e do
  título SEO "... para Adultos em Ribeirão Preto ..." → "... Particular ...").
- `src/components/adultos-course-page.tsx` → `particular-course-page.tsx`
  (export `AdultosCursosPage` → `ParticularCursosPage`, texto do pill).
- `src/components/adultos-faq.tsx` → `particular-faq.tsx` (export
  `AdultosFaq`/`ADULTOS_FAQ_ITEMS` → `ParticularFaq`/`PARTICULAR_FAQ_ITEMS`,
  texto "Na Santos Tech adultos não existem turmas" → "Na Santos Tech
  Particular não existem turmas").
- `src/routes/__root.tsx` — `isAdultosRoute` → `isParticularRoute`, checagem
  de path.
- `src/hooks/use-smooth-scroll.ts` — comentário.
- `src/lib/seo.ts` — descrição padrão, keywords por curso, breadcrumb
  ("Santos Tech para Adultos" → "Santos Tech Particular"), regex/õ path do
  OG image (`/adultos/cursos/*` → `/particular/cursos/*`, pasta
  `/og/adultos/` → `/og/particular/`).
- `scripts/generate-og-images.mjs` — descoberta de rotas
  (`adultos.cursos.*.tsx` → `particular.cursos.*.tsx`) e pasta de saída.
- `public/og/adultos/*.png` (64 arquivos) → `git mv` pra
  `public/og/particular/`.
- `src/routes/index.tsx` — meta description da home.
- `src/routes/termos.tsx` — texto sobre público atendido.
- `public/sitemap.xml` — todas as ~54 URLs `/adultos/...` → `/particular/...`.
- `nginx.conf` — bloco de redirect 301 `/adultos(/.*)?` → `/particular$1`.
- Tags de marca "para adultos" (menu lateral `particular.tsx` x2, hero e
  rodapé de `particular.index.tsx`) → "particular".
- `src/routeTree.gen.ts` — **não editar à mão**, regenerado pelo build.

## DaVinci / Premiere — Teste do Tier aplicado

- **DaVinci Resolve** (sozinho): tema profundo (Cut/Edit, Fairlight, Color
  com sistema de nós, Fusion), nível de entrada distinto do avançado, e
  objetivo-fim real em cada ponta → **mantém 2 tiers** (Intermediário 48h /
  Profissional + IA 72h), removendo os módulos e menções ao Premiere.
- **Adobe Premiere** (sozinho): também ferramenta profunda (Lumetri, Dynamic
  Link com After Effects, IA generativa/Sensei) usada amplamente em
  agências/emissoras → **2 tiers** (Intermediário 48h / Profissional + IA
  72h), com ementa 100% Premiere.
- Ambos entram no grupo de menu "Design & Criação", como hoje.

## Checklist final (mapeia pro `PENDENCIAS.md` se algo ficar pra depois)

- [ ] Rename mecânico de rotas + componentes + imports.
- [ ] Split DaVinci/Premiere com ementa própria.
- [ ] Copy atualizada (pill, menu, SEO, breadcrumb, meta descriptions).
- [ ] `sitemap.xml` batendo 1:1 com as rotas públicas reais.
- [ ] Redirect 301 no `nginx.conf`.
- [ ] `bun run lint` e `bun run build` passam limpos (routeTree regenerado).
- [ ] Verificação visual no preview local (pill, menu, páginas renomeadas).
