# Processo de Curadoria de Cursos — Santos Tech

> Padrão oficial para **pesquisar, definir e publicar** um curso novo no site
> (`santos-tech.com`). Vale para toda a seção de adultos (`/adultos/cursos/*`) e,
> no que couber, para os programas infantis.

## Princípio central

**Curso e nível só existem se fizerem sentido real — no mercado e na prática pedagógica.**
Nada entra no site "pra encher catálogo". Cada curso responde a uma demanda real de
mercado, e cada nível (tier) representa um aluno real, com um nível de entrada e um
objetivo-fim de verdade.

---

## As 5 etapas

### 1. Pesquisa real de mercado
Antes de escrever qualquer coisa, pesquise o estado atual do tema:
- Quais ferramentas o mercado realmente usa/pede **hoje** (não o que era padrão há 3 anos).
- Quais tendências estão em ascensão e valem ser ensinadas.
- O que as empresas exigem de quem atua na área.

> Referência histórica: a seção de adultos nasceu do commit `ba651cd —
> "/adultos: 32 páginas de cursos com pesquisa real de mercado"`. Esse é o padrão:
> pesquisa real, não achismo.

### 2. Posicionamento e diferenciação
- Defina o **ângulo** do curso em uma frase.
- Verifique cursos irmãos para **não canibalizar**. Ex.: `Excel + IA` é a *camada de IA
  sobre planilhas* (produtividade); `Excel Avançado` é o *domínio profundo do Excel*
  (VBA, Power Query, modelagem). São complementares, não concorrentes.

### 3. Definição de níveis — o **Teste do Tier**
Um curso pode ter **1, 2 ou 3 tiers**. A quantidade **nunca é automática** — é decidida
pelo teste abaixo. Só crie um tier se ele passar nas **três** perguntas:

1. **O tema é profundo o suficiente?** A ferramenta/assunto tem muitos recursos,
   camadas e usos? (Se for uma ferramenta única e enxuta, provavelmente é **1 tier**.)
2. **Existe um nível de entrada distinto?** Há um aluno num ponto de partida
   claramente diferente dos outros tiers?
3. **Existe um objetivo-fim onde esse aluno pararia e estaria completo?** O tier
   entrega, sozinho, uma competência utilizável?

Se os três forem "sim", o tier existe. Se algum for "não", **não invente o tier**.

**Exemplos aplicados:**
| Curso | Tiers | Por quê |
|---|---|---|
| Canva Pro | **1** | Ferramenta única e focada. Um objetivo: criar peças visuais profissionais. |
| Excel Avançado | **3** | Ferramenta profunda: base → Power Query/VBA → IA e modelagem. |
| Excel + IA | **3** | Tema amplo (Copilot, Claude, ChatGPT, Gemini, Python, agentes) com 3 objetivos reais: produtividade → análise → automação. |

> Os tiers são **cumulativos** e casam com a precificação (ver etapa 4): quanto mais
> longe o aluno vai, maior o pacote de aulas e o investimento.

### 4. Preenchimento do padrão editorial (schema `CourseData`)
Todo curso de adulto é um objeto `CourseData` renderizado por
[`adultos-course-page.tsx`](../src/components/adultos-course-page.tsx). A página (hero,
"para quem é", conteúdo, diferenciais, investimento, FAQ, CTA) é **compartilhada** — você
só preenche os dados.

Campos e padrão de qualidade:
- `nome` — nome comercial do curso.
- `categoria` — subtítulo curto exibido no hero (ex.: `"Office + IA"`).
- `tagline` — uma frase de valor, concreta.
- `targetAudience` — **~6 itens**, em 2ª pessoa (`"Você…"`), cada um uma dor/objetivo real.
- `tiers[]` — cada tier com:
  - `label` / `levelName` — **use exatamente** `Essencial`, `Intermediário` ou
    `Profissional + IA`. Esses nomes acionam o preço e o texto de orientação automáticos
    (mapa `TIER_META` no componente).
  - `totalHours` — `"24h"` / `"48h"` / `"72h"` (casam com 24/48/72 aulas e o preço).
  - `outcome` — uma frase: o que o aluno consegue fazer ao terminar **este** nível.
  - `modules[]` — **4 a 5 módulos**, cada um com `title` + **~5 `topics`** concretos.
  - `tools[]` — ferramentas reais usadas no nível.

Preços/ritmo são calculados pelo componente a partir do `levelName` — **não** hardcode
preço na página. Tabela atual: Essencial `R$ 1.970` (24 aulas) · Intermediário
`R$ 3.940` (48) · Profissional + IA `R$ 5.910` (72).

**Tom:** direto, prático, sem enrolação. Foco no que o aluno vai *fazer*, não em teoria.

### 5. Publicação — sitemap + build/lint
Antes de considerar o curso "pronto":
1. **Crie a rota** em `src/routes/adultos.cursos.<slug>.tsx` (copie um curso existente
   como base, ex.: [`adultos.cursos.canva.tsx`](../src/routes/adultos.cursos.canva.tsx)).
2. **Adicione ao menu** em [`src/routes/adultos.tsx`](../src/routes/adultos.tsx) (array
   `GRUPOS`, no grupo correto).
3. **Atualize o `public/sitemap.xml`** no mesmo commit — regra dura do projeto: o sitemap
   é a fonte de verdade consumida pelo **bot de WhatsApp**. Curso fora do sitemap = o bot
   não consegue responder sobre ele. Use `<lastmod>` na data da alteração,
   `changefreq monthly`, `priority 0.7`.
4. **Rode `bun run lint` e `bun run build`** e confirme que passam sem erros (o build
   type-checka e regenera `src/routeTree.gen.ts`). Build quebrado = deploy quebrado.

---

## Checklist final
- [ ] Pesquisa de mercado feita (ferramentas e tendências atuais).
- [ ] Posicionamento definido e diferenciado dos cursos irmãos.
- [ ] Nº de tiers decidido pelo **Teste do Tier** (não no automático).
- [ ] `CourseData` preenchido no padrão editorial (tom, contagens, `levelName` corretos).
- [ ] Rota criada + adicionada ao `GRUPOS` do menu.
- [ ] `public/sitemap.xml` atualizado no mesmo commit.
- [ ] `bun run lint` e `bun run build` passam limpos.

---

## Exemplo aplicado: **Excel + IA** (curadoria de jul/2026)

- **Pesquisa:** mapeadas as integrações de IA em planilhas — Copilot no Excel (modos
  chat/plan/edit + Agent Mode, com Python), Python no Excel via linguagem natural,
  Claude for Excel (leitura multi-aba com citação célula a célula), ChatGPT for Excel,
  Gemini no Google Sheets (`=AI()` + construção de planilhas), e a camada em escala
  (Numerous.ai, GPT for Work).
- **Posicionamento:** camada de IA sobre planilhas (produtividade). Complementar ao
  Excel Avançado, sem canibalizar.
- **Teste do Tier → 3 tiers.** Tema profundo (múltiplas IAs + Python + agentes),
  três níveis de entrada e três objetivos-fim reais:
  - *Essencial* → IA como copiloto no dia a dia (produtividade).
  - *Intermediário* → análise de dados de verdade com IA (analista).
  - *Profissional + IA* → fluxos automatizados e agênticos (automação).
- **Ajuste de escopo:** o Essencial **não** ensina Excel do zero (papel do Excel
  Avançado/Informática) — assume base e foca na IA. Mantém os tiers honestos.
