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
| Git e GitHub (git) | **1 (já único, 24h)** | R$ 1.970 (taxa símples) | n/a | ⚠️ Hoje precificado como símples, mas é ferramenta de dev | Ver "pontos em aberto" |
| Automações + N8N (n8n) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Técnico (115/h) | R$ 5.520 — webhooks/API/agentes |
| Automações No-Code — Make (make) | 2 (24/48h) | R$1.970 / 3.940 | Cumulativo-leve | Técnico (110/h) | R$ 5.280 |
| Banco de Dados c/ SQL (sql) | 3 (24/48/72h) | R$1.970 / 3.940 / 5.910 | Cumulativo-leve | Técnico (120/h) | R$ 5.760 |
| Dev Web Front-End (frontend) | 2 (48/72h) | R$3.940 / 5.910 | Cumulativo-leve | Técnico (130/h) | R$ 6.240 — React/TS/Next.js |
| Dev Web Back-End (backend) | 2 (48/72h) | R$3.940 / 5.910 | Cumulativo-leve | Técnico (135/h) | R$ 6.480 — escopo amplo |
| Full Stack Web Developer (fullstack) | 2 (24/48h) | R$1.970 / 3.940 | Repetitivo — Intermediário já contém o Essencial | Técnico (150/h) | R$ 7.200 |
| Dev de Aplicativos (mobile) | 2 (48/72h) | R$3.940 / 5.910 | ⚠️ Cumulativo forte — frameworks diferentes (React Native vs Flutter) | Técnico (140/h) | Ver "pontos em aberto" |
| Jogos: Unity e Godot (jogos) | 2 (48/72h) | R$3.940 / 5.910 | ⚠️ Cumulativo — já mistura as 2 engines desde o início | Técnico (140/h) | Ver "pontos em aberto" |
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
| CapCut (capcut) | **1 (já único, 24h)** | R$ 1.970 (taxa símples) | n/a | ⚠️ Hoje mais raso que os irmãos do grupo (DaVinci/Premiere, 48h+) | Ver "pontos em aberto" |
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
   inferência, não confirmação dele. Pergunta: aplico as sugestões como
   estão, ou ele quer revisar/ajustar os números antes?
2. **`git`** está precificado hoje como símples (junto com Canva/CapCut),
   mas é ferramenta de desenvolvedor, não uma ferramenta de uso geral —
   reclassifica pra técnico?
3. **`capcut`** está em 24h hoje, mais raso que os irmãos de grupo
   (DaVinci/Premiere, que ficam em 48h) — nivela pra 48h por consistência,
   ou mantém 24h porque CapCut é objetivamente mais simples que os outros
   dois?
4. **`mobile`** (React Native no tier atual vs. Flutter no outro) e
   **`jogos`** (Unity e Godot já misturados) — aqui os tiers usam
   **ferramentas diferentes**, não só profundidade diferente do mesmo
   assunto. Precisa decisão de escopo antes de fundir: o curso único foca
   em 1 framework/engine, ou mantém visão geral dos 2? Isso muda o
   currículo de verdade, não é só um corte de conteúdo como foi no
   Premiere.
5. **`manutencao`** e **`impressao-3d`** — confirma que ficam com carga
   horária menor que 48h (24h), como já estão hoje?

## Plano de execução proposto

Depois das respostas acima, converter por grupo de menu (replicando o
padrão do Premiere: fundir módulos onde cumulativo, criar entrada em
`TIER_META`, remover/ajustar FAQ que compara tiers, `bun run lint` + `bun
run build`, conferir no preview local, commit por curso, PR por grupo).
Ordem sugerida: grupos pequenos primeiro (T.I, Universo 3D) pra validar o
ritmo, depois os grupos maiores (Programação, Marketing & Negócios).

## Checklist final

- [ ] Henrique decide os 5 pontos em aberto acima.
- [ ] Conversão dos 45 cursos restantes, por grupo.
- [ ] `TIER_META` com entrada própria por curso convertido.
- [ ] FAQ de cada curso sem pergunta comparando tiers inexistentes.
- [ ] `bun run lint` e `bun run build` limpos a cada lote.
- [ ] Verificação visual no preview local a cada lote.
- [ ] `public/sitemap.xml` — conferir que nenhuma rota mudou (não deveria).
