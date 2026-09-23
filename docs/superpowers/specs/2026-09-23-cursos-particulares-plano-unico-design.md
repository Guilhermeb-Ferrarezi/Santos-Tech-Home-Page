# Cursos particulares: unificação em opção única de investimento

> Spec da conversão de todo o catálogo `/particular/cursos/*` (52 cursos) do
> modelo de 1-3 tiers (Essencial/Intermediário/Profissional + IA) para
> **opção única de investimento**, por curso.

## Decisões, confirmadas em 23/09

1. **Problema:** apresentar 3 níveis de investimento pode gerar âncora
   negativa na conversão — aluno que não consegue pagar o nível profissional
   pode inferir que o nível essencial (mais barato) "não é suficiente" pra
   ele, mesmo quando é.
2. **Regra geral:** todo curso particular vira **1 tier só**. Acabam os
   nomes Essencial/Intermediário/Profissional + IA como conceito de
   catálogo.
3. **Carga horária padrão: 48 aulas.** Só foge disso curso com conteúdo
   naturalmente curto — exemplos dados: digitação, hardware. Não force
   redução em curso sem motivo lógico real.
4. **Preço — duas faixas por hora-aula:**
   - **Símples:** R$ 82,70/hora. Régua: Informática. Já aplicado no
     Premiere (48h × 82,70 = R$ 3.969,60 → R$ 3.970).
   - **Técnico:** R$ 110 a R$ 180/hora, variando com a profundidade do
     conteúdo. Exemplos dados: programação, modelagem 3D, Java.
   - Henrique já avisou: **isso vai exigir reajuste de preço em muitos
     cursos** — a tabela atual (`TIER_META`) foi calculada a R$ 82,08/hora
     pro nível Essencial (R$ 1.970 / 24h), não R$ 82,70.
5. **Os 5 cursos que já eram plano único hoje** (Canva Pro, CapCut, Git e
   GitHub, Montagem e Manutenção, Impressão 3D) **mantêm a taxa antiga R$
   82,08/hora** — não entram nesse reajuste de taxa. _(confirmado por
   pergunta direta, 23/09)._
6. **Premiere é o piloto**, já feito: 2 tiers (Intermediário 48h/R$ 3.940 +
   Profissional + IA 72h/R$ 5.910) → 1 tier (48h/R$ 3.970), currículo
   fundido cronologicamente do zero ao avançado/IA. PRs
   [#20](https://github.com/Guilhermeb-Ferrarezi/Santos-Tech-Home-Page/pull/20)
   e [#21](https://github.com/Guilhermeb-Ferrarezi/Santos-Tech-Home-Page/pull/21)
   (título condicional) já mergeados.
7. **Título "Escolha o seu plano"** na seção Investimento (compartilhado por
   `particular-course-page.tsx`) já ficou condicional a `multiTier`: com 1
   tier mostra "Seu investimento". Já corrige automaticamente todo curso que
   for convertido daqui pra frente — nenhum trabalho extra por curso nesse
   ponto.

## Fora de escopo (YAGNI)

- **Não cria curso novo de "digitação"** — foi citado como exemplo de
  categoria de carga horária curta, mas não existe hoje no catálogo.
- **Não mexe no FAQ genérico compartilhado** (`particular-faq.tsx`) — só os
  `faqItems` específicos de cada curso que citam o nome de um tier (como
  tinha no Premiere) precisam de ajuste, curso a curso.
- **Não decide sozinho a taxa técnica exata (110 a 180) por curso** — a
  tabela abaixo traz sugestão, mas é decisão dele antes de eu aplicar em
  massa (ver seção de pontos em aberto).

## Escopo técnico (arquivos afetados)

- **45 arquivos de rota** `src/routes/particular.cursos.*.tsx` restantes
  (52 no catálogo − Premiere já feito − 5 que já eram plano único, embora
  2 desses 5 tenham ajuste de nivelamento em aberto — ver pontos em aberto).
- `src/components/particular-course-page.tsx` — tabela `TIER_META` precisa
  de 1 entrada nova por curso (a maioria vai sair dos preços-padrão
  24h/48h/72h de Essencial/Intermediário/Profissional, então cada curso
  passa a ter preço próprio, igual foi feito com `"Adobe Premiere"`).
- `faqItems` de cada curso — remover/ajustar pergunta que compara tiers
  (padrão igual ao que foi feito no Premiere).
- `public/sitemap.xml` — **sem mudança** (rotas continuam as mesmas, só o
  conteúdo da página muda).

## Levantamento completo (52 cursos, agrupados pelo menu)

Preço sugerido = carga horária proposta × taxa sugerida. "Cumulativo" =
tiers ensinam coisas diferentes e complementares (exige mesclar/reescrever
currículo, como foi o caso do Premiere). "Repetitivo" = tiers mais
parecidos entre si, tier maior já contém o menor (mais fácil de colapsar
sem reescrever muito).

### Informática

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| Informática (informatica) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Repetitivo — Intermediário já contém o Essencial | Símples (régua do Henrique) | R$ 3.970 |

### Office

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| Pacote Office (office) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Símples | R$ 3.970 — decidir se Power BI/Copilot (hoje só no tier 3) entram |
| Excel + Power BI (excel-power-bi) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo — Power BI só entra no Intermediário | Técnico (~115/h) | R$ 5.520 — DAX/Power Query é linguagem de consulta real |
| Excel Avançado (excel) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Símples — por analogia com Informática (não citado nominalmente) | R$ 3.970 |
| Excel + IA (excel-ia) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Símples — usa ferramentas de IA prontas, não constrói | R$ 3.970 |
| Word Profissional (word) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Símples | R$ 3.970 |
| PowerPoint (powerpoint) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Símples | R$ 3.970 |
| Power BI (power-bi) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Técnico (~115/h) | R$ 5.520 — DAX/Power Query |
| Power Apps + Power Automate (power-apps) | 2 (24/48h) | R$1.970 / 3.940 | Cumulativo-leve | Técnico (~115/h) | R$ 5.520 — lógica real (Dataverse, RPA) |

### Inteligência Artificial

> Grupo já tem um split real hoje: 4 cursos com override de preço
> (`pricePerAula` ≈ 109,9, ou seja já tratados como técnico) e 2 sem
> override (tratados como símples). Vale manter essa divisão no spec em
> vez de tratar "IA" como categoria única.

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| IA: Essencial ao Profissional c/ Agentes (ia) | 3 (24/48/72h) | override 109,9/h | Cumulativo — Profissional muda de "usar IA" pra "construir agentes" | Técnico (já ~110/h) | R$ 5.280 |
| Agentes de IA c/ N8N e LLMs (agentes-ia) | 2 (24h/**72h**, pula o meio) | override 109,9/h | Cumulativo — salto grande, agente básico → multiagente | Técnico (já ~110/h) | R$ 5.280 |
| RAG (rag) | 2 (48/72h, sem Essencial) | override 109,9/h | Cumulativo — vai a GraphRAG, bancos vetoriais, governança | Técnico (sugestão 115/h) | R$ 5.520 |
| IA para Criadores (ia-visual) | 2 (24/48h) | override 109,9/h | Cumulativo-leve — ComfyUI é ferramenta node-based | Técnico (já ~110/h) | R$ 5.280 |
| ChatGPT e IA para Profissionais (chatgpt) | 2 (24/48h) | R$1.970 / 3.940 (sem override) | Cumulativo-leve | Símples — usa ferramenta pronta | R$ 3.970 |
| Criação de Conteúdo com IA (conteudo-ia) | 2 (24/48h) | R$1.970 / 3.940 (sem override) | Cumulativo-leve | Símples — mesmo padrão do ChatGPT | R$ 3.970 |

### Programação

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| Lógica de Programação (logica) | 2 (24/48h) | R$1.970 / 3.940 | Cumulativo-leve | Técnico, piso da faixa (110/h) | R$ 5.280 — fundamentos, nível de entrada |
| Python p/ Automações (python) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Técnico (120/h) | R$ 5.760 |
| APIs c/ Python (python-apis) | 2 (48/72h) | R$3.940 / 5.910 | Cumulativo — FastAPI básico → filas assíncronas/agentes | Técnico (130/h) | R$ 6.240 |
| TypeScript Moderno (typescript) | 2 (48/72h) | override 109,9/h | Cumulativo-leve | Técnico (já ~110/h) | R$ 5.280 |
| Git e GitHub (git) | **1 (já único, 24h)** | R$ 1.970 (taxa símples) | n/a | **Decidido:** técnico (110/h) | R$ 2.640 (mantém 24h) |
| Automações + N8N (n8n) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Técnico (115/h) | R$ 5.520 — webhooks/API/agentes |
| Automações No-Code — Make (make) | 2 (24/48h) | R$1.970 / 3.940 | Cumulativo-leve | Técnico (110/h) | R$ 5.280 |
| Banco de Dados c/ SQL (sql) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Técnico (120/h) | R$ 5.760 |
| Dev Web Front-End (frontend) | 2 (48/72h) | R$3.940 / 5.910 | Cumulativo-leve | Técnico (130/h) | R$ 6.240 — React/TS/Next.js |
| Dev Web Back-End (backend) | 2 (48/72h) | R$3.940 / 5.910 | Cumulativo-leve | Técnico (135/h) | R$ 6.480 — escopo amplo |
| Full Stack Web Developer (fullstack) | 2 (24/48h) | R$1.970 / 3.940 | Repetitivo — Intermediário já contém o Essencial | Técnico (150/h) | R$ 7.200 |
| Dev de Aplicativos (mobile) | 2 (48/72h) | R$3.940 / 5.910 | **Decidido:** foca só em React Native (ver pesquisa acima) | Técnico (140/h) | R$ 6.720 |
| Jogos: Unity e Godot (jogos) | 2 (48/72h) | R$3.940 / 5.910 | **Decidido:** mantém Unity + Godot juntos (ver pesquisa acima) | Técnico (140/h) | R$ 6.720 |
| ADS (ads) | 2 (24/48h) | R$1.970 / 3.940 | Repetitivo — Intermediário já contém o Essencial | Técnico, teto da faixa (180/h) | R$ 8.640 — curso mais abrangente do catálogo |

### T.I

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| Suporte Técnico / Help Desk (suporte) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Repetitivo | Técnico (115/h) | R$ 5.520 |
| Montagem e Manutenção (manutencao) | **1 (já único, 24h)** | R$ 1.970 (taxa símples) | n/a | Provável curso por trás do exemplo "hardware" que ele deu — mantém curto | R$ 1.970 (mantém) |
| Redes e Infraestrutura (redes) | 2 (48/72h) | R$3.940 / 5.910 | Repetitivo | Técnico (130/h) — categoria técnica clara por analogia, não citada nominalmente | R$ 6.240 |
| Cibersegurança (ciberseguranca) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Repetitivo | Técnico (150/h) — categoria técnica clara por analogia, não citada nominalmente | R$ 7.200 |
| Linux Essencial (linux) | 2 (24/48h) | R$1.970 / 3.940 | Repetitivo | Técnico (120/h) | R$ 5.760 |

### Universo 3D

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| Modelagem 3D: Blender e SketchUp (modelagem-3d) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Repetitivo-parcial | Técnico (150/h) — exemplo citado nominalmente pelo Henrique | R$ 7.200 — combina 2 softwares, decidir se mantém os 2 |
| Impressão 3D (impressao-3d) | **1 (já único, 24h)** | override 150/h → R$ 3.600 | n/a | Já técnico | Candidato secundário fraco a ficar <48h — mesma lógica de "operar equipamento" |
| AutoCAD (autocad) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Repetitivo-parcial | Técnico (140/h) | R$ 6.720 |
| Revit BIM (revit) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Repetitivo-parcial | Técnico (150/h) | R$ 7.200 — especialização de alto valor |

### Design & Criação

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| Canva Pro (canva) | **1 (já único, 24h)** | R$ 1.970 (taxa símples) | n/a | Símples — exemplo já confirmado por ele antes | R$ 1.970 (mantém) |
| Photoshop + Illustrator (photoshop) | 2 (48/72h) | R$3.940 / 5.910 | Cumulativo-leve | Símples (borderline — 2 softwares, mais denso que os outros símples) | R$ 3.970 |
| CapCut (capcut) | **1 (já único, 24h)** | R$ 1.970 (taxa símples) | n/a | **Decidido:** mantém 24h, sem nivelar com DaVinci/Premiere | R$ 1.970 (sem mudança) |
| DaVinci Resolve (davinci) | 2 (48/72h) | R$3.940 / 5.910 | ⚠️ Cumulativo — par exato do Premiere pré-unificação | Símples (mesma taxa do Premiere) | R$ 3.970 — usar a conversão do Premiere como molde |

### Marketing & Negócios

| Curso | Tiers hoje | Preço hoje | Currículo | Categoria sugerida | Preço sugerido |
|---|---|---|---|---|---|
| Marketing Digital (marketing) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Repetitivo-parcial | Símples | R$ 3.970 |
| Meta Ads (meta-ads) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo | Símples — operação de plataforma | R$ 3.970 |
| Google Ads (google-ads) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo | Símples | R$ 3.970 |
| TikTok Ads (tiktok-ads) | 2 (24/48h) | R$1.970 / 3.940 | Cumulativo | Símples | R$ 3.970 |
| Copywriting & Persuasão (copywriting) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo | Símples | R$ 3.970 |
| Funil de Vendas + CRM (funil-vendas) | 2 (24/48h) | R$1.970 / 3.940 | Cumulativo-leve | Símples | R$ 3.970 |
| SEO (seo) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo | Símples | R$ 3.970 |
| Gestão de Redes Sociais (redes-sociais) | 2 (24/48h) | R$1.970 / 3.940 | Repetitivo | Símples | R$ 3.970 |
| E-commerce & Vendas Online (ecommerce) | 2 (24/48h) | R$1.970 / 3.940 | Cumulativo | Símples | R$ 3.970 |

## Pontos em aberto — decisão do Henrique antes de executar em massa

1. **Taxa técnica exata (110-180) por curso.** As sugestões acima seguem uma
   lógica (escopo, quantidade de ferramentas, nível de mercado), mas são
   inferência, não confirmação dele. **Ainda em aberto** — Henrique vai
   revisar a tabela e sinalizar ajustes.

### Decididos em 23/09

2. **`git`** — reclassificado pra **técnico** (~110/h, piso da faixa).
   _(confirmado por pergunta direta)_
3. **`capcut`** — **mantém 24h**, não nivela com DaVinci/Premiere. Sem
   mudança nenhuma nesse curso (já é plano único, já usa a taxa antiga R$
   82,08/h confirmada na decisão #5 da seção anterior). _(confirmado por
   pergunta direta)_
4. **`mobile`** — unifica em **React Native** (não Flutter). Pesquisa de
   mercado (set/2026): o mercado brasileiro está **tecnicamente
   equilibrado ou com leve vantagem pro Flutter** em vagas (~3.800 Flutter
   vs. ~3.300 React Native no LinkedIn Brasil; Flutter também aparece
   como mercado forte no Brasil em comparações globais) — ou seja, a
   escolha **não** vem de dominância de mercado do React Native, que não
   existe claramente no Brasil. Decide pela **sinergia pedagógica**: o
   curso de Frontend da própria Santos Tech já ensina React/TypeScript, e
   React Native reaproveita esse modelo mental quase inteiro (componentes,
   hooks, JSX) — num curso fixo de 48h, isso sobra mais tempo pra
   conteúdo mobile de verdade (APIs nativas, publicação nas lojas) em vez
   de aprender Dart do zero. Confiança moderada (~60%) — Flutter também é
   escolha defensável, principalmente se o público-alvo não vier do
   Frontend.
5. **`jogos`** — **mantém Unity + Godot juntos**, não escolhe 1 só.
   Pesquisa de mercado confirma que resolvem problemas diferentes, não
   competem pelo mesmo papel: Unity domina esmagadoramente o mercado de
   jogos mobile/comercial (~48% share, ~70% dos jogos mobile mais
   rentáveis) — é o que dá empregabilidade real; Godot é o motor que mais
   cresce, gratuito e MIT (sem risco de mudança de licença tipo a crise de
   preço da Unity em 2023), virou o padrão de quem quer publicar jogo
   indie sem custo. Isso bate com o próprio currículo atual, que já
   mistura os dois desde o tier de entrada — não é um problema a
   resolver, é o padrão já estabelecido. Confiança alta (~80%).
6. **`manutencao`** e **`impressao-3d`** — assumido que ficam com carga
   horária menor que 48h (24h), como já estão hoje, por ausência de
   objeção. Se não for isso, avisar antes da conversão desses 2.

## Plano de execução proposto

Depois das respostas acima, converter por grupo de menu (replicando o
padrão do Premiere: fundir módulos onde cumulativo, criar entrada em
`TIER_META`, remover/ajustar FAQ que compara tiers, `bun run lint` + `bun
run build`, conferir no preview local, commit por curso, PR por grupo).
Ordem sugerida: grupos pequenos primeiro (T.I, Universo 3D) pra validar o
ritmo, depois os grupos maiores (Programação, Marketing & Negócios).

## Checklist final

- [x] Henrique decide os pontos 2-6 (git, capcut, mobile, jogos,
      manutenção/impressão 3D) — 23/09.
- [ ] Henrique revisa a tabela de taxa técnica (ponto 1) antes da
      conversão dos cursos técnicos restantes.
- [x] **Grupo T.I convertido** (PR #25): Suporte Técnico, Redes e
      Infraestrutura, Cibersegurança, Linux. Montagem e Manutenção não
      precisou de mudança.
- [x] **Grupo Universo 3D convertido** (PR #26): Modelagem 3D (Blender +
      SketchUp), AutoCAD, Revit BIM. Impressão 3D não precisou de mudança.
- [x] **Grupo Informática convertido** (PR #29): Informática (único curso
      do grupo).
- [x] **Grupo Design & Criação completo** (PR #29): Photoshop +
      Illustrator, DaVinci Resolve (usou o Premiere como molde). Canva Pro
      e CapCut já eram plano único.
- [x] **Grupo Marketing & Negócios completo** (PR #30, todos os 9 cursos
      do grupo): Marketing Digital, Meta Ads, Google Ads, TikTok Ads,
      Copywriting, Funil de Vendas, SEO, Redes Sociais, E-commerce.
- [ ] Conversão dos **27 cursos restantes**: Office (8), Inteligência
      Artificial (6), Programação (13 — Git já resolvido à parte, só
      reclassificação de preço). Quase todos dependem da revisão da taxa
      técnica (ponto acima) antes de converter. Grupos T.I, Universo 3D,
      Informática, Design & Criação e Marketing & Negócios estão 100%
      migrados (20 de 47 cursos).
- [x] `TIER_META` com entrada própria por curso convertido (20 entradas
      novas: Premiere + 7 T.I/Universo 3D + Informática/Photoshop/DaVinci +
      9 Marketing & Negócios).

## Margem embutida (15%) + parcelamento em 12x — decisão de 23/09

> Decisão separada da unificação de tiers acima (não resolve o ponto 1 em
> aberto — a tabela de taxa técnica 110-180/h continua **aguardando
> Henrique**). Pedido trazido pelo gerente de marketing.

1. **Regra:** todo curso de `/particular` — os que já existem e os que
   nascerem — embute **15% sobre o valor-base já determinado pro curso**
   (a própria tabela `TIER_META`/`pricePerAula` de hoje, sem mudar nenhum
   número dela). Os 15% são margem/juros interno — **nunca aparecem pro
   aluno** como "15%" ou "juros" em nenhum texto da página.
2. **Escopo:** só as ~52 páginas `/particular/cursos/*`. Não afeta o card
   de mensalidade dos programas infantil/T.I. na home (`src/routes/index.tsx`,
   modelo de mensalidade recorrente, não de preço total parcelado) nem as
   páginas de curso infantil/turma, que não mostram preço hoje.
   _(confirmado por pergunta direta, 23/09)._
3. **Matrícula (R$ 199,90) e material didático (R$ 389,90)** — cobranças
   únicas, **não** recebem os 15%. Só o valor do curso. _(confirmado por
   pergunta direta, 23/09)._
4. **Apresentação no card de investimento:** a parcela (valor-base × 1,15
   ÷ 12) vira o número em destaque, com "12x sem juros no cartão" embaixo,
   e o total à vista (valor-base × 1,15) aparece menor, abaixo disso (ex.:
   "ou R$ 4.565,50 à vista"). Antes mostrava só o preço total como número
   principal. _(confirmado por pergunta direta, 23/09)._
5. **Formas de pagamento:** o 12x sem juros vale só pro **crédito**. O
   boleto mantém o parcelamento por duração do curso, sem mudança.
   _(confirmado por pergunta direta, 23/09)._
6. **Arredondamento:** parcela = `Math.round` padrão de 2 casas decimais
   sobre valor-base × 1,15 ÷ 12, sem redistribuir centavo residual entre
   as 12 parcelas (padrão de mercado pra card de marketing — Henrique
   autorizou decidir sozinho, 23/09).

**Implementação:** `src/components/particular-course-page.tsx` —
`TIER_META.price` passou de string formatada pra número puro (valor-base,
sem markup); constantes `MARKUP = 1.15` e `INSTALLMENTS = 12` e a função
`getInvestimento()` calculam total com margem e parcela a partir desse
valor-base, tanto pra cursos com preço fixo na tabela quanto pros que usam
`pricePerAula`. Aplicado uma vez no componente compartilhado — cobre as 52
páginas automaticamente, sem editar curso por curso; as 20 entradas de
`TIER_META` migradas pelos PRs #29/#30 (Informática, Design & Criação,
Marketing & Negócios) já entram nesse cálculo sem precisar de ajuste
manual.
- [x] FAQ de cada curso convertido sem pergunta comparando tiers
      inexistentes.
- [x] `bun run lint` e `bun run build` limpos em cada lote convertido até
      aqui.
- [x] Verificação visual no preview local em cada lote convertido até
      aqui.
- [ ] `public/sitemap.xml` — conferir que nenhuma rota mudou (não deveria)
      — sem mudança até aqui, como esperado.

## Ritmo intensivo dos cursos de 48 aulas — decisão de 23/09

> Terceira decisão registrada nesta spec, separada das duas acima (não
> mexe em preço nem em margem). Consequência direta da unificação: como a
> maioria dos cursos agora tem 48 aulas (em vez dos antigos tiers de
> 24/48/72h), o ritmo "intensivo" precisa refletir isso.

1. **Regra:** todo curso com **48 aulas** em `TIER_META` — intensivo passa
   de "~2 meses" pra **"~3 meses"**. Padrão continua "~6 meses", sem
   mudança. _(confirmado por pergunta direta, 23/09)._
2. **Só 2 opções de ritmo por curso de 48h daqui pra frente:** 3 meses
   (intensivo) ou 6 meses (padrão) — nenhuma terceira opção.
3. **Escopo:** só entradas com `aulas: "48 aulas"` (21 hoje, incluindo
   `Intermediário`, usado pelos cursos ainda não convertidos pro plano
   único). Cursos de 24h (~1 mês/~3 meses) e 72h (~3 meses/~9 meses) **não
   mudam**.
4. **FAQ genérico** (`particular-faq.tsx`) ficou com o exemplo de duração
   desatualizado por causa dessa mudança (ainda cita 24 aulas como
   maioria) — sinalizado como item separado, fora do escopo desta edição
   (ver `PENDENCIAS.md` ou o chip de sugestão da sessão).

**Implementação:** troca mecânica de `intensivo: "~2 meses"` por
`intensivo: "~3 meses"` em toda entrada de `TIER_META` com
`aulas: "48 aulas"` — 21 entradas, `padrao` inalterado.
