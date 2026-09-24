# Pendências — Santos Tech Home Page

## Abertas

- [ ] **Duração dos cards "populares" da home do `/particular` (`POPULARES`
      em `particular.index.tsx`) não é derivada de `TIER_META` e já está
      inconsistente com ele** — achado durante o PR #37 (correção do FAQ
      genérico), mas é um item distinto da pendência "Estatística '24 aulas
      por curso'" logo abaixo (aquela é sobre o bloco "Ritmo"; esta é sobre
      o campo `duracao` de cada card em `POPULARES`, ex.: `{ slug: "ia",
      duracao: "2 meses" }`). Os valores parecem editoriais/avulsos, não
      uma leitura de `TIER_META`: Cibersegurança mostra "4 meses" e Redes
      Sociais mostra "1 mês", nenhum dos dois batendo com o intensivo
      (~3 meses) nem o padrão (~6 meses) que esses mesmos cursos têm hoje
      em `TIER_META`/`course-skins/shared.tsx`. Não mexi porque não é uma
      correção mecânica: exigiria decidir o que esse número deveria
      representar (intensivo? padrão? uma média?) pra depois escolher se
      vale a pena derivar de `TIER_META` ou deixar como texto livre.
      _Aguardando Henrique._

- [ ] **Estatística "24 aulas por curso" na home do `/particular` agora
      está desatualizada pra quase todo o catálogo** — achado pela auditoria
      de resquícios do modelo antigo (23/09), reaberto pela conclusão da
      unificação de tiers. O bloco "Ritmo" (`particular.index.tsx`) mostra
      1h/aula, 24 aulas/curso, ~3 meses no ritmo padrão e ~1 mês no
      intensivo como se fosse universal. Com a unificação de tiers 100%
      concluída (ver item resolvido acima), **48 aulas é o padrão do
      catálogo inteiro** — só Canva/CapCut/Git/Manutenção/Impressão 3D
      continuam em 24h. A estatística da home ficou invertida: descreve a
      exceção como se fosse a regra. Não mexi porque não é um bug mecânico:
      é decisão de posicionamento (qual número mostrar como representativo
      — 48 aulas? uma média? tirar o número fixo?) que toca como o site se
      apresenta, não uma correção óbvia de copy.
      _Aguardando Henrique._

## Resolvidas

- [x] **Unificação de tiers em opção única — catálogo 100% migrado (47 de
      47 cursos particulares)** (spec completa em
      [`docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md`](docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md),
      PR #20-#43). Todos os grupos convertidos: Premiere (piloto), T.I,
      Universo 3D, Informática, Design & Criação, Marketing & Negócios,
      Office (8 cursos), Inteligência Artificial (6 cursos) e Programação
      (13 cursos — `git` já era plano único antes desta spec, só
      reclassificação de preço). Henrique confirmou a tabela de taxa
      técnica (R$110-180/h) em 23/09: faixa aprovada como sugerida na spec,
      cursos de IA (ia/agentes-ia/ia-visual/typescript) formalizados em
      109,90/h com RAG subindo pra 115/h, Pacote Office mantém-se símples
      sem Power BI/Copilot (curso dedicado já existe), `mobile` unifica em
      React Native (remove Flutter/Dart/Riverpod por completo), `jogos`
      mantém Unity + Godot juntos, `capcut`/`manutencao`/`impressao-3d`
      seguem curtos (24h sem nivelar). `fullstack` e `ads` eram
      "repetitivos" (tier de 48h já continha o Essencial inteiro) — só
      promovidos, sem cortar conteúdo (13 e 16 módulos preservados; ADS é
      o curso mais abrangente e mais caro do catálogo, teto da faixa
      técnica).
      **Bug recorrente de pele visual encontrado e corrigido 5x** em
      `course-skins/variants/*`: texto tipo "nível {tier.levelName}" ou
      "Mundo N · {tier.levelName}" sem checar `multiTier` — com o curso em
      tier único, repetia o nome inteiro do curso de forma redundante ou
      sem sentido (`planilha-excel-ia.tsx`, `planilha-power-apps.tsx`,
      `ia-chat.tsx`, `ia-agentes.tsx`, `ide-jogos.tsx`). Corrigido em cada
      caso com o guard `multiTier`/`tiers.length > 1`, mesmo padrão já
      usado em `ti-suporte.tsx`. Depois da 2ª e da 5ª ocorrência, rodei
      greps sistemáticos em todo `course-skins/variants/*` — a versão mais
      ampla (qualquer rótulo curto seguido de `{tier.levelName}` cru, não
      só os que citam a palavra "nível") não achou mais nenhuma instância
      quebrada; os poucos casos restantes (`ide-n8n.tsx`, `ide-make.tsx`,
      `ide-git.tsx`, `ide-backend.tsx`) são rótulos genéricos de UI (tipo
      "Workflow · Nome do Curso") que já leem bem com o nome cheio, ou já
      tinham o guard correto. Registrado como item de backlog separado
      (não corrigido agora, fora do escopo desta sessão) um padrão mais
      leve e disseminado: rótulos genéricos como "Ao final deste nível"
      sem nome de curso injetado — não quebra a frase, mas ainda
      pressupõe múltiplos níveis.
      **Também corrigidos 4 pontos de meta description/copy** que ficaram
      desatualizados em relação ao currículo comprimido (prometiam
      ferramenta ou prazo que deixou de ser ensinado/verdadeiro):
      `ia-visual.tsx` (Sora → Kling, só Kling ganhou cobertura real),
      `sql.tsx` (removeu "cloud e IA" do headline, virou só menção de
      panorama), `backend.tsx` (removeu "NestJS" e "SaaS em produção" do
      headline, virou só menção de próximo passo), `ads.tsx` ("12 meses"
      em 3 lugares — description, targetAudience e FAQ — trocado por "6
      meses"/"poucos meses", consistente com o ritmo real de 48 aulas que
      a própria página já mostra).
      Verificado com `bun run lint` + `bun run build` (gate do
      `CLAUDE.md`, sem erros) em cada um dos 3 lotes (Office, IA,
      Programação) e visualmente no preview local — pelo menos 2-3 páginas
      por lote, incluindo os casos mais arriscados (Excel + IA e Power Apps
      pra confirmar o fix da pele; Pacote Office pra confirmar ausência de
      Power BI/Copilot; Jogos e ADS pra confirmar renderização com pele
      customizada e módulos preservados).

- [x] **Copywriting mencionava "revisão em grupo" no projeto final e no
      FAQ** — pendência aberta em 23/09 durante a conversão do curso pra
      opção única, sem causa raiz confirmada (podia ser resquício de
      quando o curso foi pensado com alguma dinâmica de turma, ou
      simplesmente copy nunca revisada). Resolvido sem precisar decidir
      qual dos dois cenários é o real: nos dois casos "revisão em grupo"
      contradiz o modelo 100% individual (1 aluno + 1 professor) que é a
      proposta central do `/particular` — reforçado em
      `particular-course-page.tsx` ("Aula Individual — Só você e o
      professor — foco total, sem fila de dúvidas") e no FAQ genérico
      (`particular-faq.tsx`). Trocado "revisão em grupo" por "revisão
      individual com o professor" nos dois trechos de
      `particular.cursos.copywriting.tsx` (último tópico do módulo final
      em `tiers[0].modules`, e a resposta de `faqItems[1]`, "Dá pra usar
      esse curso pra virar freelancer de copywriting?"), mantendo a ideia
      de que o projeto final passa por revisão e feedback estruturado
      antes da entrega. PR #40. Verificado com `bun run lint` + `bun run
      build` (gate do `CLAUDE.md`, sem erros) e visualmente no `bun run
      dev`: `/particular/cursos/copywriting`, capítulo "Análise,
      Otimização e Projeto Final" e o FAQ mostrando o texto novo.

- [x] **Ritmo intensivo dos cursos de 48 aulas atualizado de "~2 meses" pra
      "~3 meses"; e um aprendizado sobre sessões paralelas no mesmo repo**
      — a tarefa que originou o PR #37 (correção do FAQ genérico de
      duração) partia da premissa de que `TIER_META`
      (`particular-course-page.tsx`) já usava "~3 meses". No meu branch o
      valor ainda era "~2 meses", e busquei em todo o histórico do git sem
      achar essa mudança em lugar nenhum — então registrei como divergência
      e perguntei pro Henrique, que confirmou em 23/09 que queria mesmo
      "~3 meses". Implementei (21 entradas de 48 aulas em `TIER_META`,
      recontadas com `grep` — não são 17 como cheguei a estimar antes — e o
      FAQ genérico). **Só depois** de já ter feito isso, outra sessão em
      paralelo (que tinha originado esta tarefa) avisou: ela mesma já tinha
      feito e mergeado essa exata mudança em `master` via PR #35, ANTES do
      meu branch puxar essa atualização — ou seja, não era uma divergência
      real, só timing (meu branch estava desatualizado quando eu chequei o
      histórico). Uma terceira sessão, também em paralelo, fez um refactor
      grande que moveu `TIER_META`/`TIER_GUIDE`/`DIFERENCIAIS`/
      `getInvestimento` de `particular-course-page.tsx` pra
      `src/components/course-skins/shared.tsx` — meu commit de `TIER_META`
      virou redundante/conflitante ao sincronizar com master. Resolvido o
      merge aceitando a versão de master no arquivo (meu hunk não tinha
      mais nada a contribuir ali); a parte que sobreviveu e era mesmo
      necessária foi só o FAQ genérico (`particular-faq.tsx`), que
      continuava com o exemplo desatualizado e nenhuma outra sessão tinha
      corrigido. Não mexi em `particular.index.tsx` (`POPULARES.duracao`,
      cards da home) — esse campo já é uma pendência separada (abaixo) e os
      valores não seguem `TIER_META` de forma mecânica (ex.: Cibersegurança
      mostra "4 meses", Redes Sociais mostra "1 mês", nenhum dos dois
      batendo com intensivo nem padrão), então trocar só o "2"→"3" ali
      seria arbitrário. Verificado com `bun run lint` + `bun run build`
      (gate do `CLAUDE.md`, sem erros, rodado de novo depois do merge) e
      visualmente no `bun run dev`: `/particular/cursos/excel` mostra
      Intermediário (48 aulas) com Intensivo "~3 meses" / Padrão "~6
      meses", e o FAQ com o mesmo número.
      **Aprendizado:** múltiplas sessões Claude trabalhando em paralelo no
      mesmo repo (inclusive uma spawnando a outra) podem convergir pra
      descobrir e corrigir o mesmo problema ao mesmo tempo, sem saber uma
      da outra — o custo aqui foi só um merge extra, mas vale checar
      `git log origin/master` antes de assumir que um valor "sempre foi
      assim" quando várias sessões estão ativas no mesmo repo.

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
