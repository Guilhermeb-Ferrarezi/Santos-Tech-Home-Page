# Consistência do design system e componentes — detalhe dos achados

> Parte da [Auditoria de UI, UX e Design de 24/09/2026](../README.md#68) · nota da dimensão **5/10** · **31 achados** (🔴 0 · 🟠 0 · 🟡 15 · ⚪ 16)

O site tem uma identidade forte na home, mas ela não se sustenta de uma página para outra: os mesmos elementos aparecem com cara diferente conforme a rota.

- **Peças repetidas copiadas à mão em vez de reaproveitadas.** Botão de WhatsApp, FAQ, cartões de contato e fundos decorativos foram refeitos em cada página. **Consequência:** o pai sente que passou para "outro site" ao sair da home, e cada ajuste precisa ser feito em 5 a 20 lugares.
- **A cor não segue uma regra.** São mais de 2.000 códigos de cor soltos no código, e o mesmo programa aparece em 2 ou 3 tons. Na home o Júnior é verde, e na página do Júnior vira roxo. **Consequência:** a cor deixa de indicar a faixa de idade justamente no momento em que o pai está escolhendo.
- **O /particular virou outra marca.** Usa fundo preto, não tem o azul da escola, mistura dois estilos de ilustração e mostra o logo do Windows em destaque. **Consequência:** o adulto não reconhece a mesma escola e a página de venda perde o ar profissional.
- **O botão mais chamativo não é o de venda.** O "Entrar" (login de quem já é aluno) tem o mesmo verde do CTA em todas as telas. **Consequência:** ele disputa o clique com o botão de matrícula.
- **O guia de marca (DESIGN_SYSTEM.md) está desatualizado.** Ele contradiz o código em cores, tipografia, rodapé e animações. **Consequência:** cada nova página inventa o próprio padrão, e é isso que alimenta os problemas acima.
- **Textos com grafias diferentes para a mesma coisa.** Exemplos: "Portal ST" e "Portal do Aluno", "Aula Individual" e "Aula individual". **Consequência:** passa a impressão de descuido.

**Recomendação:** primeiro atualizar o guia e criar um botão de CTA único para o site todo. Depois, decidir as cores dos programas.

| Id | Sev. | Achado | Rotas | Onde | Esforço |
|---|---|---|---|---|---|
| [`F001`](#f001) | 🟡 | CTA primário não tem componente: 20+ variações de classe para o mesmo botão verde | `/`, `/cursos` +6 | [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421) | médio |
| [`F002`](#f002) | 🟡 | CTA primário rounded-md ao lado de secundário rounded-full no mesmo grupo de botões | `/`, `/cursos/create` +8 | [src/components/course-page.tsx:244](../../../../src/components/course-page.tsx#L244) | trivial |
| [`F010`](#f010) | 🟡 | CTA secundário com dois estilos na mesma página de curso (hero uppercase/black vs. final bold sem uppercase) | `/cursos`, `/cursos/create` +3 | [src/components/course-page.tsx:969](../../../../src/components/course-page.tsx#L969) | trivial |
| [`F012`](#f012) | 🟡 | 2.373 hex crus em TSX (700+ valores distintos); DS não documenta a paleta de 8 acentos do /particular | `/particular/cursos/* (52 páginas)`, `/` +2 | [src/components/course-skins/index.ts:13](../../../../src/components/course-skins/index.ts#L13) | pequeno |
| [`F018`](#f018) | 🟡 | Quatro implementações de FAQ com visual e movimento diferentes | `/`, `/cursos/*/*-anos (9 páginas)` +6 | [src/components/course-skins/common.tsx:316](../../../../src/components/course-skins/common.tsx#L316) | médio |
| [`F026`](#f026) | 🟡 | Home reimplementa cartões de 'Como chegar' e 'Prova social' já existentes em /sobre, /contato e /particular com 4 estilos | `/`, `/contato` +2 | [src/routes/contato.tsx:108](../../../../src/routes/contato.tsx#L108) | pequeno |
| [`F030`](#f030) | 🟡 | DESIGN_SYSTEM.md desatualizado em 6 pontos que o código já superou (ícone do CTA, numeração §7, footer, H1, raio de card) | `todas` | [DESIGN_SYSTEM.md:403](../../../../DESIGN_SYSTEM.md#L403) | pequeno |
| [`F234`](#f234) | 🟡 | Duas paletas de programa concorrentes: Júnior=verde/Create=azul (home, /cursos, header) vs JR=roxo/CREATE=#0067BE (páginas do programa, footer, DS) | `/`, `/cursos` +4 | [src/routes/index.tsx:561](../../../../src/routes/index.tsx#L561) | médio |
| [`F236`](#f236) | 🟡 | Botão 'Entrar' (login) em verde CTA + glow no header de todas as páginas compete com o CTA de venda | `/`, `/cursos` +8 | [src/components/site-header.tsx:271](../../../../src/components/site-header.tsx#L271) | trivial |
| [`F239`](#f239) | 🟡 | Academies: módulos coloridos com esmeralda #10b981 e violeta #8b5cf6 fora da paleta; violeta colide com o roxo do JR | `/cursos/academies` | [src/routes/cursos.academies.tsx:94](../../../../src/routes/cursos.academies.tsx#L94) | trivial |
| [`F240`](#f240) | 🟡 | Família /particular abandona a identidade da marca: preto neutral-900 + verde, sem azul, pill 'PARTICULAR' e 'Login' pretos | `/particular`, `/particular/cursos/* (todas as 52)` | [src/routes/particular.index.tsx:164](../../../../src/routes/particular.index.tsx#L164) | grande |
| [`F245`](#f245) | 🟡 | Cor do programa CAMPS (#1C8299) e hex fora do guia (#5AB0F0, #7CC4F0, #021F3A) na página /sobre | `/sobre` | [src/routes/sobre.index.tsx:186](../../../../src/routes/sobre.index.tsx#L186) | trivial |
| [`F251`](#f251) | 🟡 | Pele Informática imita a área de trabalho do Windows com logos Microsoft/Google/Notion/OpenAI coloridos dominando o hero | `/particular/cursos/informatica` | [src/components/course-skins/informatica.tsx:49](../../../../src/components/course-skins/informatica.tsx#L49) | pequeno |
| [`F286`](#f286) | 🟡 | Duas linguagens de ilustração na mesma página de curso: mockup UI realista no hero, cartoon flat abaixo | `/particular/cursos/canva`, `/particular/cursos/autocad`, `todas as 52 páginas de /particular/cursos/* que usam course-illustrations` | [src/components/course-illustrations.tsx:5](../../../../src/components/course-illustrations.tsx#L5) | médio |
| [`F305`](#f305) | 🟡 | Badge 'Mais procurado' arco-íris animado usa 7 cores fora da paleta e texto de 9px | `/`, `/cursos`, `/cursos/camps` | [src/components/rarity-badge.tsx:17](../../../../src/components/rarity-badge.tsx#L17) | pequeno |
| [`F009`](#f009) | ⚪ | Pílula de ícone tem 5 raios diferentes (xl 37×, full 14×, md 12×, 2xl 9×, lg 4×) | `/`, `/cursos/create` +2 | [src/components/course-page.tsx:460](../../../../src/components/course-page.tsx#L460) | trivial |
| [`F015`](#f015) | ⚪ | Tokens definidos em styles.css sem nenhum consumidor: .dark shadcn, --chart-*, --sidebar-*, 8 --st-*, .glow-blue, 3 .bg-program-* | `todas` | [src/styles.css:80](../../../../src/styles.css#L80) | médio |
| [`F017`](#f017) | ⚪ | Template padrão de /particular/cursos (500 linhas) é código morto e duplica CommonSections com drift | `/particular/cursos/* (52 páginas)` | [src/components/particular-course-page.tsx:228](../../../../src/components/particular-course-page.tsx#L228) | pequeno |
| [`F020`](#f020) | ⚪ | Padrão de pontos e divisor de onda reimplementados inline 22× cada, com 4 tamanhos e 3 formas | `/`, `/cursos` +5 | [src/routes/index.tsx:378](../../../../src/routes/index.tsx#L378) | médio |
| [`F023`](#f023) | ⚪ | SiteFooter: 5 campos de tema definidos e nunca usados; DS §9.6 descreve um footer que não existe | `todas (exceto /particular e /links)` | [src/components/site-footer.tsx:5](../../../../src/components/site-footer.tsx#L5) | trivial |
| [`F028`](#f028) | ⚪ | Estratégia híbrida de ícones (§7) só existe em 7 arquivos; home e /particular ignoram Phosphor | `/`, `/sobre` +2 | [src/routes/index.tsx:829](../../../../src/routes/index.tsx#L829) | trivial |
| [`F057`](#f057) | ⚪ | DESIGN_SYSTEM §6 está desatualizado em relação ao motion real do site | `(documentação) DESIGN_SYSTEM.md` | [DESIGN_SYSTEM.md:311](../../../../DESIGN_SYSTEM.md#L311) | pequeno |
| [`F098`](#f098) | ⚪ | Eyebrow com 4 receitas diferentes (text-sm/text-xs, black/bold, tracking 0.18–0.25em) | `/cursos`, `/cursos/camps` +3 | [src/components/course-page.tsx:328](../../../../src/components/course-page.tsx#L328) | pequeno |
| [`F247`](#f247) | ⚪ | --st-blue-dark #04325A continua divergente do guia (#0E2937/#212D3A) e está propagado em footer, preloader e 32 hex crus | `site inteiro` | [src/styles.css:81](../../../../src/styles.css#L81) | pequeno |
| [`F250`](#f250) | ⚪ | Tema de footer por rota muda a cor de fundo inteira, mas o header muda só o 'TECH' em tons escuros indistinguíveis; acento CAMPS 3,9:1 | `/cursos/junior*`, `/cursos/create*` +2 | [src/components/site-footer.tsx:55](../../../../src/components/site-footer.tsx#L55) | trivial |
| [`F281`](#f281) | ⚪ | OG images de /particular/cursos/* estão desatualizadas: badge "SANTOS TECH · ADULTOS" | `todas as 52 páginas de /particular/cursos/*` | [public/og/particular/excel.png:360](../../../../public/og/particular/excel.png#L360) | trivial |
| [`F290`](#f290) | ⚪ | Badge "logo da ferramenta" recebe ícone genérico (estrela teal / clipart PROJECT) em cursos de IA e ADS | `/particular/cursos/ia`, `/particular/cursos/agentes-ia`, `/particular/cursos/ads` | [src/routes/particular.cursos.ads.tsx:22](../../../../src/routes/particular.cursos.ads.tsx#L22) | pequeno |
| [`F318`](#f318) | ⚪ | Dropdown 'Programas': o item 'Tecnologia Create' perde a faixa de idade porque o badge ocupa o lugar | `/` | [src/components/site-header.tsx:388](../../../../src/components/site-header.tsx#L388) | trivial |
| [`F352`](#f352) | ⚪ | Rótulos do header: itens do Sobre em CAIXA ALTA nos dados e grupo "Também" sem significado | `/` | [src/components/site-header.tsx:36](../../../../src/components/site-header.tsx#L36) | trivial |
| [`F357`](#f357) | ⚪ | Três grafias para o mesmo produto: "Portal do Aluno", "PORTAL DO ALUNO ST", "Portal ST" | `/`, `/cursos/create` | [src/routes/cursos.create.index.tsx:236](../../../../src/routes/cursos.create.index.tsx#L236) | trivial |
| [`F369`](#f369) | ⚪ | Rótulos duplicados com capitalização divergente na mesma página ("Aula Individual" vs "Aula individual") | `todas as 52 páginas de /particular/cursos/*`, `/particular` | [src/components/course-skins/shared.tsx:121](../../../../src/components/course-skins/shared.tsx#L121) | trivial |

<a id="f001"></a>

## F001 · 🟡 CTA primário não tem componente: 20+ variações de classe para o mesmo botão verde

- **Rotas:** `/`, `/cursos`, `/cursos/create`, `/cursos/junior`, `/sobre`, `/particular`, `/particular/cursos/* (52 páginas)`, `/cursos/*/*-anos (9 páginas)`
- **Onde:** [src/routes/index.tsx:421](../../../../src/routes/index.tsx#L421)
- **Evidência:** grep de className com bg-st-green\|bg-[#0DB88F] retorna 20 strings distintas. Ex.: index.tsx:421 `rounded-md bg-st-green px-8 py-4 ... shadow-[0_12px_30px_-10px_rgba(13,184,143,0.65)] ... hover:scale-[1.03] glow-green animate-cta-pulse`; course-page.tsx:961 `rounded-md ... px-7 py-3.5 ... shadow-lg`; particular-course-page.tsx:708 `rounded-lg bg-[#0DB88F] px-10 py-4 ... shadow-[0_8px_28px_-8px_rgba(13,184,143,0.7)] hover:scale-[1.02] hover:bg-[#0aaa82] active:scale-[0.99]`; site-header.tsx:271 `rounded-md bg-st-green px-5 py-2.5 text-base font-bold`. Raios: rounded-md 17×, rounded-lg 9×, rounded-full 0× no primário. DS §8.1 define UM padrão: `rounded-full bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider shadow-xl hover:scale-[1.03] glow-green`.
- **Problema:** O elemento de maior peso comercial do site (o botão de WhatsApp) muda de raio, padding, sombra, hover e até de cor de hover conforme a página. Pai que navega da home para a página do curso vê um botão 'diferente' — perde-se reconhecimento e a sensação de produto único. Também impede ajuste global (ex.: mudar o raio em 1 lugar).
- **Correção sugerida:** Criar src/components/cta-button.tsx com <CtaPrimary size='md'\|'lg' pulse?> usando as classes do DS §8.1 (rounded-full bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:scale-[1.03] glow-green) e migrar os botões aos poucos, começando por home, course-page e particular-course-page.
- **Esforço:** médio · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Inconsistência existe: botões verdes usam rounded-md 17×, rounded-lg 14×, rounded-full 18×, rounded-xl 8×; DS §8.1 (DESIGN_SYSTEM.md:403) pede rounded-full. Contagens do achado imprecisas e impacto é consistência visual, não conversão: rebaixado para média. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f002"></a>

## F002 · 🟡 CTA primário rounded-md ao lado de secundário rounded-full no mesmo grupo de botões

- **Rotas:** `/`, `/cursos/create`, `/cursos/junior`, `/cursos/*/*-anos (9 páginas)`, `/cursos/create/*-anos`, `/cursos/junior/*-anos`, `/cursos`, `/sobre`, `/contato`, `/cursos/*`
- **Onde:** [src/components/course-page.tsx:244](../../../../src/components/course-page.tsx#L244)
- **Evidência:** course-page.tsx:244 primário `rounded-md bg-st-green ...` e :252 secundário `rounded-full border-2 border-white/30 ...` dentro do mesmo `<Reveal className="mt-8 flex flex-wrap items-center gap-3">`. Mesmo par em index.tsx:421/428 e cursos.create.index.tsx:593/600. DS §8.1 e §8.2 usam `rounded-full` em ambos.
- **Problema:** Dois botões lado a lado com geometrias diferentes (um retângulo levemente arredondado, um pill) parecem vir de sistemas distintos; o olho lê como erro, não como hierarquia.
- **Correção sugerida:** Confirmado: course-page.tsx:244 `rounded-md` ao lado de :252 `rounded-full`; mesmo par em index.tsx:421/428, cursos.create.index.tsx:246/253 (não 593/600), cursos.junior.index.tsx:275/282, course-page.tsx:961/969, cursos.create.index.tsx:433/440. Porém `rounded-md bg-st-green` é o CTA de fato em 20+ lugares, incluindo o header (site-header.tsx:271/278) — o DS §8.1 é que está desatualizado (o próprio DS admite drift em §15). Caminho de menor risco: igualar o SECUNDÁRIO ao primário, trocando `rounded-full` por `rounded-md` nos 6 pares acima, e atualizar DS §5.1 (`rounded-md`: 'botões CTA'), §8.1 e §8.2 para `rounded-md`. Alternativa (decisão de marca do Henrique): `rounded-full` nos ~20 primários via busca por `rounded-md bg-st-green` — muda o header e todos os CTAs. Não tocar em `rounded-full border-2 border-white` de avatares (course-page.tsx:142/542/648), que não são botões.
- **Esforço:** trivial · **Severidade:** Média · **Também apontado como:** F303
- **Verificação:** confirmado: course-page.tsx:244 `rounded-md bg-st-green` + :252 `rounded-full border-2` no mesmo Reveal; index.tsx:421/428 idem (visível em routes/home/mobile.fold.png). DS §8.1 e §5.1 mandam `rounded-full` em botão principal (`rounded-md` = 'inputs, botões pequenos'). Correção de linhas: cursos.create.index.tsx é :246/:253 e :433/:440 (arquivo tem 452 linhas), cursos.junior.index.tsx :275/:282 e :596/:603.

<a id="f010"></a>

## F010 · 🟡 CTA secundário com dois estilos na mesma página de curso (hero uppercase/black vs. final bold sem uppercase)

- **Rotas:** `/cursos`, `/cursos/create`, `/cursos/junior`, `/sobre`, `/cursos/*/*-anos (9 páginas)`
- **Onde:** [src/components/course-page.tsx:969](../../../../src/components/course-page.tsx#L969)
- **Evidência:** course-page.tsx:252 (CourseHero) `rounded-full border-2 border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wider text-white` (3×) vs. course-page.tsx:969 (CourseCtaFinal) `rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white` sem uppercase/tracking (6×: também cursos.index.tsx:335, cursos.create.index.tsx:787, cursos.junior.index.tsx:603, sobre.index.tsx:431). DS §8.2 pede `font-black uppercase tracking-wider`.
- **Problema:** O mesmo botão 'Ver outros programas' aparece em caixa alta no topo e em caixa mista no rodapé da mesma página; ao lado do primário (sempre uppercase) o secundário do rodapé parece um link solto.
- **Correção sugerida:** Unificar os 9 pontos (course-page.tsx:252 e :969, cursos.index.tsx:335, cursos.create.index.tsx ×2, cursos.junior.index.tsx ×2, sobre.index.tsx, sobre.visao.tsx) em uma única classe: `inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white/10`. Extrair como `CtaSecondaryOnDark` em src/components/cta.tsx (aceita `to` ou `href`). Registrar como pendência separada: o CTA primário é `rounded-md` em 18 pontos enquanto DS §8.1 pede `rounded-full` — decidir qual forma é a oficial, porque hoje primário (quadrado) e secundário (pílula) convivem lado a lado.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: course-page.tsx:252 font-black uppercase tracking-wider vs :969 font-bold sem uppercase; screenshot cursos__create__8-9-anos/mobile.seg14.png mostra 'Voltar ao CREATE' em caixa mista sob o primário em caixa alta. Linhas corrigidas: cursos.create.index.tsx:440 (não 787), sobre.index.tsx:292 (não 431); também sobre.visao.tsx:194.

<a id="f012"></a>

## F012 · 🟡 2.373 hex crus em TSX (700+ valores distintos); DS não documenta a paleta de 8 acentos do /particular

- **Rotas:** `/particular/cursos/* (52 páginas)`, `/`, `/particular`, `/particular/cursos/* (todas as 52)`
- **Onde:** [src/components/course-skins/index.ts:13](../../../../src/components/course-skins/index.ts#L13)
- **Evidência:** course-skins/index.ts:13 comentário 'Cada categoria tem um layout próprio e uma paleta própria'. Acentos: informatica.tsx:49 #0F6CD4; planilha.tsx:44 #21A366 (verde Excel); ia.tsx:27 #8B5CF6 + #E879F9; ide.tsx:21 #4B8BF5 + #FFD43B; ti.tsx:26 #0D9488 + #A3E635 (lima); oficina.tsx:33 #F97316 (laranja); design.tsx:33 #DB2777 (rosa) + #FBBF24; marketing.tsx:33 #E5484D (vermelho) + #FFC53D. O botão 'QUERO SABER MAIS' usa `bg-(--accent)`: rosa em canva, laranja em autocad, vermelho em copywriting, azul em backend, verde-Excel em excel (screenshots routes/particular__cursos__{canva,autocad,copywriting,backend,excel}/desktop.fold.png) — enquanto na mesma tela a sidebar mostra 'Entrar na conta' em #0DB88F. Nenhum desses 16 hex está em DESIGN_SYSTEM §2.
- **Problema:** Existe um sistema visual inteiro (peles por categoria, hero neutral-900, 8 acentos) rodando em 52 páginas sem estar na fonte da verdade. Um auditor ou dev novo não consegue distinguir decisão de marca de drift — e o DS §11 ('cores fora da paleta') tecnicamente reprova a família inteira.
- **Correção sugerida:** Adicionar ao DESIGN_SYSTEM.md seção '2.6 Paleta /particular' com tabela dos 8 temas (accent, accentHover, accent2, heroBg) e a regra de uso do acento; centralizar os `*_THEME` em src/lib/course-themes.ts. A regra 'verde da marca nos CTAs' é decisão de marca: registrar como pergunta ao Henrique, não aplicar.
- **Esforço:** pequeno · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: DS não cita /particular nem peles (grep vazio). THEMEs espalhados: design.tsx:33, ia.tsx:27, ide.tsx:21, ti.tsx:26 etc. Números inflados/diferentes: medi 2566 hex e 661 distintos. É dívida de documentação, sem impacto direto no usuário. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f018"></a>

## F018 · 🟡 Quatro implementações de FAQ com visual e movimento diferentes

- **Rotas:** `/`, `/cursos/*/*-anos (9 páginas)`, `/particular`, `/particular/cursos/* (52 páginas)`, `9 páginas de curso infantil`, `/cursos/camps`, `/cursos/academies`, `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [src/components/course-skins/common.tsx:316](../../../../src/components/course-skins/common.tsx#L316)
- **Evidência:** (1) faq-item.tsx:72 `<details>` + GSAP, card `rounded-2xl border-2 border-primary/10 bg-card p-5`, ícone HelpCircle; (2) course-page.tsx:899 shadcn `<Accordion>`, `rounded-xl border-2` + boxShadow inline, `type="single"`; (3) particular-faq.tsx:516 `divide-y`, animação `grid-rows-[0fr→1fr]`, chevron `text-neutral-400`; (4) common.tsx:319-349 `divide-y`, sem animação (`{open && ...}`), chevron `text-(--accent)`. Além de ia-agentes.tsx e ti-suporte.tsx com `aria-expanded` próprios.
- **Problema:** O mesmo padrão de interação (pergunta → abre resposta) tem 4 comportamentos: um anima com GSAP, um com grid-rows, um com Radix e um não anima. Pai que abre um FAQ na home e outro na página do curso sente dois sites. Manutenção quadruplicada (a11y, reduced-motion, ícone).
- **Correção sugerida:** Criar `src/components/faq.tsx` exportando `<Faq items variant="card"\|"divider" accent={cor}>` sobre o shadcn Accordion (`type="single" collapsible`), com `motion-reduce:transition-none` nos AccordionContent/chevron (Tailwind, sem JS). Ordem de migração por risco: (1) course-page.tsx FaqSection (já é shadcn — só extrai); (2) course-skins/common.tsx:315-349 (variant divider, passar `look.divider`/`look.title` via className e `--accent` no chevron; remover useState openFaq); (3) faq-item.tsx da home (variant card; remover GSAP); (4) particular-faq.tsx por último, preservando o `cta` por item. Correção: ia-agentes.tsx e ti-suporte.tsx não existem no repo — ignorar essa parte da evidência.
- **Esforço:** médio · **Severidade:** Média · **Também apontado como:** F047
- **Verificação:** confirmado: Quatro implementações confirmadas: faq-item.tsx:72-100 (<details>+GSAP, HelpCircle, rounded-2xl); course-page.tsx:899-918 (Radix Accordion single, rounded-xl+boxShadow); particular-faq.tsx:29-62 (divide-y, grid-rows 0fr→1fr, chevron neutral-400); common.tsx:316-349 (divide-y, sem animação, chevron accent). Mais ia-agentes.tsx:203 e ti-suporte.tsx:143 com aria-expanded próprios. Linha corrigida: 316.

<a id="f026"></a>

## F026 · 🟡 Home reimplementa cartões de 'Como chegar' e 'Prova social' já existentes em /sobre, /contato e /particular com 4 estilos

- **Rotas:** `/`, `/contato`, `/sobre`, `/particular`
- **Onde:** [src/routes/contato.tsx:108](../../../../src/routes/contato.tsx#L108)
- **Evidência:** Cartão de endereço: index.tsx:1063 `rounded-2xl border-2 border-primary/15 bg-card p-5` + pílula `h-11 w-11 rounded-xl bg-primary/10`; contato.tsx:71 `rounded-xl border border-border bg-card p-6` + pílula `h-12 w-12 rounded-xl bg-primary/10`; particular.index.tsx:544 `rounded-xl border border-neutral-200 bg-white p-5` + pílula `h-11 w-11 rounded-lg bg-[#0DB88F]/10`. Mesmo iframe do Google Maps em 3 wrappers: index.tsx:1087 `rounded-3xl border-2 border-primary/15 shadow-md`, contato.tsx:126 `rounded-3xl border border-border`, particular.index.tsx:568 `rounded-xl border border-neutral-200 shadow-md`. Horário divergente: contato.tsx:108 'Seg a Sex · 8h às 22h / Sábado · 8h às 18h' vs index.tsx:1080 e particular.index.tsx:560 'Seg a Sáb · 8h às 22h'.
- **Problema:** Bloco de conteúdo institucional (endereço, horário, mapa) copiado 3× com raio, borda e pílula diferentes — e com o horário de sábado contraditório entre páginas, o que já é erro factual visível para o cliente.
- **Correção sugerida:** Primeiro: confirmar com o Henrique o horário real de sábado e deixar uma fonte única (`ORG.openingHours` em src/lib/seo.ts). Depois, opcional: extrair `<ContactCards/>`/`<MapEmbed/>` em src/components/contact-block.tsx (DS §67 manda extrair o que se repete 2+ vezes).
- **Esforço:** pequeno · **Severidade:** Média (proposta Baixa, recalibrada na verificação)
- **Verificação:** confirmado: O horário diverge: contato.tsx:108-109 diz 'Seg a Sex 8h-22h / Sábado 8h-18h', enquanto index.tsx (Seg a Sáb 8h às 22h) e particular.index.tsx:434/:560 dizem 'Seg a Sáb 8h-22h'. Um horário errado passado ao cliente pesa mais que a estética dos cards.

<a id="f030"></a>

## F030 · 🟡 DESIGN_SYSTEM.md desatualizado em 6 pontos que o código já superou (ícone do CTA, numeração §7, footer, H1, raio de card)

- **Rotas:** `todas`
- **Onde:** [DESIGN_SYSTEM.md:403](../../../../DESIGN_SYSTEM.md#L403)
- **Evidência:** §8.1 (l.403) exemplifica CTA com `<MessageCircle>`; código usa `<WhatsAppIcon>` em 100% dos CTAs (icons.tsx). §7 tem duas seções '7.2' (l.363 e l.379) e duas '7.3' (l.373 e l.388). §9.6 (l.572) 'qualquer outra → bg-muted/40' vs site-footer.tsx:19 `bg-[#04325A]`. §3.3 (l.197) H1 `text-5xl…7xl` vs home `text-4xl…6xl`. §5.1 (l.282) card = `rounded-2xl` vs 240× `rounded-xl` no código. §2.3 (l.152) marca `--st-blue-dark` como 'decisão pendente' desde a criação; §2.1 nota 'Nomes em revisão (CRIA/MIRIM…)' enquanto o site já vende 'Tecnologia Júnior/Create'. Não existe seção sobre /particular (52 páginas, 8 paletas).
- **Problema:** O documento que a própria regra do repo chama de 'fonte da verdade' contradiz a home ('referência viva') em tipografia, raio e cor de rodapé, e não cobre metade das páginas do site. Auditorias futuras (e devs novos) vão 'corrigir' código bom para bater com doc velho, ou vice-versa.
- **Correção sugerida:** PR docs-only `docs(design-system): sincroniza com o código`: (1) renumerar §7 em 7.1 Phosphor, 7.2 Weight, 7.3 Lucide, 7.4 Tamanhos, 7.5 Pílula; (2) §8.1 trocar `<MessageCircle className="h-4 w-4" />` por `<WhatsAppIcon className="h-4 w-4" />` (import de `@/components/icons`); (3) §9.6 linha `default` → Footer bg `#04325A` (site-footer.tsx:19), acento `#49A8EB`; (4) §3.3 H1 Hero → `text-4xl sm:text-5xl lg:text-6xl` + `leading-[1.02]` (index.tsx:402); (5) §5.1 → `rounded-xl` = card padrão (240 usos), `rounded-2xl` = card de destaque/CTA (155 usos); (6) §2.3 `--st-blue-dark`: escrever 'decisão pendente do Henrique — código usa #04325A' e cobrar em PENDENCIAS.md (é marca, não decidir sozinho); (7) apagar nota l.136 de nomes em revisão; (8) nova §2.6 'Cursos particulares' apontando `src/lib/course-themes.ts` + tabela das 8 `*_THEME` de `course-skins/*.tsx` (accent/accent2/heroBg). NÃO incluir o `scripts/ds-lint.mjs` que falha em hex cru: há 536 hex fora de styles/course-skins (ilustrações, tool-logo, footer, index) — o gate quebraria no dia 1 e seria desligado. Se quiser lint, só modo relatório (`warn`) com allowlist de arquivos de ilustração.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: Tudo confere: l.403 `<MessageCircle>` (código tem 71× WhatsAppIcon, mas ainda 20× MessageCircle — '100%' é exagero); §7 duplica 7.2 (l.363/379) e 7.3 (l.373/388); l.572 `bg-muted/40` vs site-footer.tsx:19 `bg-[#04325A]`; l.197 H1 5xl–7xl vs index.tsx:402 4xl–6xl; l.282 cards 2xl vs 148× `rounded-xl border`; l.152/l.136 pendências; /particular só citado em l.739.

<a id="f234"></a>

## F234 · 🟡 Duas paletas de programa concorrentes: Júnior=verde/Create=azul (home, /cursos, header) vs JR=roxo/CREATE=#0067BE (páginas do programa, footer, DS)

- **Rotas:** `/`, `/cursos`, `/cursos/junior`, `/cursos/junior/*`, `/cursos/create`, `/cursos/create/*`
- **Onde:** [src/routes/index.tsx:561](../../../../src/routes/index.tsx#L561)
- **Evidência:** index.tsx:147-148 `cor: "#0DB88F", corDark: "#04325A"` para Júnior e gradientes `#14C29A→#0A6E57` (verde) / `#2E8FCF→#04325A` (azul) nas linhas 97/109/122/134; index.tsx:561-569 copy explícita 'verde para as crianças e azul para os adolescentes'; cursos.index.tsx:39-45 mesmos gradientes; site-header.tsx:23-28 `color: "#0DB88F"` (Júnior) / `"#187ABF"` (Create). Mas DESIGN_SYSTEM §2.1 define JR = #512374 roxo, CREATE = #0067BE; program-theme.ts:28-40 e site-footer.tsx:30-36 pintam /cursos/junior* de roxo (#512374/#DEABF7). Screenshots: routes/home/desktop.seg06.png (banda 'Tecnologia Júnior' verde) vs routes/cursos__junior/desktop.fold.png (hero JR roxo) e routes/cursos__junior__5-6-anos/desktop.fold.png; header-dropdown.desktop.png ('Tecnologia Júnior' verde).
- **Problema:** O pai aprende na home que 'verde = criança', clica em Tecnologia Júnior e cai numa página inteiramente roxa com footer roxo — a cor que o site acabou de ensinar como código de idade desaparece. §2.1 diz 'não misture, não invente nova' e §2.2 'cores dos programas apenas em peças daquele programa'; hoje o CREATE aparece em #0067BE (banda), #187ABF (páginas de curso) e #2E8FCF (cards da home). A marca parece bagunçada (§1.2) exatamente na jornada de decisão.
- **Correção sugerida:** Tratar junto com F337 (mesma causa: duas taxonomias). Ao decidir a taxonomia, alinhar a cor: se valer Júnior/Create da home, pintar as páginas infantis com verde (#0DB88F/#0A6E57) em program-theme.ts:29,38 e site-footer.tsx:30, e atualizar DS §2.1 (tabela L130-134). #187ABF no CREATE é o Azul principal oficial do DS, não cor inventada.
- **Esforço:** médio · **Severidade:** Média (proposta Alta, recalibrada na verificação) · **Também apontado como:** F237
- **Verificação:** parcial: Verde×roxo é real (index.tsx:561-569 vs program-theme.ts:29, site-footer.tsx:30). Exagero: jornada 'clica Tecnologia Júnior e cai no roxo' não existe, header linka /cursos#tecnologia (site-header.tsx:23). #187ABF é cor oficial do DS (§2.1). Duplicata parcial de F337. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f236"></a>

## F236 · 🟡 Botão 'Entrar' (login) em verde CTA + glow no header de todas as páginas compete com o CTA de venda

- **Rotas:** `/`, `/cursos`, `/cursos/*`, `/sobre`, `/contato`, `/privacidade`, `/termos`, `todas (header)`, `/particular`, `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/site-header.tsx:271](../../../../src/components/site-header.tsx#L271)
- **Evidência:** site-header.tsx:271 `rounded-md bg-st-green px-5 py-2.5 text-base font-bold text-white shadow-sm ... glow-green` e :278 (mobile). Em routes/home/desktop.fold.png o 'Entrar' verde (canto sup. direito) e o 'AGENDE UMA AULA EXPERIMENTAL GRÁTIS' verde aparecem juntos; em menu-mobile-open.png o 'Entrar' vira faixa verde de largura total dominando o menu. Também herda o contraste 2,5:1 (axe contato/desktop.json).
- **Problema:** Login de aluno já matriculado não é conversão de pai visitante, mas recebe o tratamento visual de CTA primário (§8.1: verde + glow) em 100% das telas. Dois botões verdes por fold violam '1 CTA primário dominante' (§14) e treinam o usuário a ignorar o verde.
- **Correção sugerida:** Desktop l.271: `rounded-md border-2 border-primary/20 bg-white px-4 py-2 text-sm font-bold text-st-blue-dark transition hover:border-primary/60` (sem glow-green). Mobile l.278: `mt-2 rounded-md border-2 border-border px-3 py-2 text-base font-semibold text-foreground/80` com texto "Portal do aluno" se o Henrique aprovar o rótulo.
- **Esforço:** trivial · **Severidade:** Média · **Também apontado como:** F024
- **Verificação:** confirmado: l.271 usa bg-st-green + glow-green, o padrão §8.1/§511 do DESIGN_SYSTEM reservado ao CTA de agendar; checklist l.687 pede 1 CTA primário dominante. desktop.seg08.png e menu-mobile-open.png mostram o verde competindo.

<a id="f239"></a>

## F239 · 🟡 Academies: módulos coloridos com esmeralda #10b981 e violeta #8b5cf6 fora da paleta; violeta colide com o roxo do JR

- **Rotas:** `/cursos/academies`
- **Onde:** [src/routes/cursos.academies.tsx:94](../../../../src/routes/cursos.academies.tsx#L94)
- **Evidência:** cursos.academies.tsx:94 `color: "#10b981"` (Robotics Academy) e :113 `color: "#8b5cf6"` (IA Academy); tema da página `primary: "#0411A0", dark: "#020a6b", soft: "#818CF8"` (:61-63). Título do hero em #818CF8 sobre gradiente #0411A0→#020a6b (routes/cursos__academies/desktop.fold.png, 'em Robótica e IA' em lavanda) — 4,42:1 sobre #0411A0, passa só porque é texto grande.
- **Problema:** Cores Tailwind default (#10b981 emerald-500, #8b5cf6 violet-500) dentro de um programa cuja cor oficial é #0411A0; o violeta é praticamente o roxo do JR (#512374/#DEABF7), embaralhando a leitura de 'qual programa é este'. §2.2: cores de programa só no próprio programa.
- **Correção sugerida:** Robótica: color '#0411A0' (primary do ACADEMIES). IA: color '#187ABF' (azul principal, cerca de 4,6:1 sobre branco). Não usar #0DB88F nem #818CF8 como cor de texto sobre branco, porque também reprovam no contraste. No AcademyCard, a tagline (L193) e o rótulo 'Leva pra casa' (L212) devem usar a cor do módulo só se ela passar 4,5:1; se não, usar THEME.dark.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: L94 usa #10b981 e L113 usa #8b5cf6, as duas fora da paleta (DS §2.1). Pior que isso: viram texto sobre branco no card (L193, L212) e fundo da pílula branca de 10px (L183). #10b981 sobre branco dá cerca de 2,5:1 e #8b5cf6 cerca de 4,2:1, ambos reprovam no WCAG 1.4.3. A cor sugerida no achado original (#0DB88F) também reprovaria.

<a id="f240"></a>

## F240 · 🟡 Família /particular abandona a identidade da marca: preto neutral-900 + verde, sem azul, pill 'PARTICULAR' e 'Login' pretos

- **Rotas:** `/particular`, `/particular/cursos/* (todas as 52)`
- **Onde:** [src/routes/particular.index.tsx:164](../../../../src/routes/particular.index.tsx#L164)
- **Evidência:** particular.index.tsx:164 hero `bg-neutral-900`, :416/:487 seções `bg-neutral-900`, :285/:388 `bg-neutral-50`; particular.tsx:369-371 pill `bg-neutral-900 text-white` 'particular', :603-608 botão 'Login' preto (routes/particular/mobile.fold.png); títulos `text-neutral-900` (nunca `text-st-blue-dark`); rg: 912 usos de classes `neutral-*` e 229 `slate-*` em src, contra 0 usos de `--st-blue`/`text-primary` em particular.index.tsx e particular-course-page.tsx. Screenshots routes/particular/desktop.fold.png e mobile.seg06.png (cards cinza/preto/verde; nenhum azul).
- **Problema:** O guia (§2.2, §15) define branco + azul #187ABF + azul-marinho como base e verde como destaque; o /particular troca a base por preto/cinza Tailwind e vira 'outro site' — o adulto que chega da home (azul) e vai para /particular (preto) não reconhece a mesma escola. O DS não documenta nenhuma sub-marca 'Particular', então esta divergência é não sancionada.
- **Correção sugerida:** Decisão de marca do Henrique. Proposta mínima: na landing e no shell (não nas peles por categoria, que são intencionais) trocar bg-neutral-900 por bg-[#0E2937] (escuro oficial do guia) em particular.index.tsx:164 e seções escuras, e o pill 'particular' (particular.tsx:369) por bg-[#0E2937]. Registrar no DESIGN_SYSTEM uma seção 'Área Particular' com a regra das peles.
- **Esforço:** grande · **Severidade:** Média (proposta Alta, recalibrada na verificação)
- **Verificação:** parcial: Divergência real: DS §2.2 pede branco+azul, preto só como apoio; hero particular.index.tsx:164 bg-neutral-900 e pill particular.tsx:369 neutral-900. Exagerado: verde #0DB88F é da paleta, preto é 'apoio' permitido e as peles por categoria são escolha de produto, não descuido. Contagem 912 neutral-* não prova nada isolada. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f245"></a>

## F245 · 🟡 Cor do programa CAMPS (#1C8299) e hex fora do guia (#5AB0F0, #7CC4F0, #021F3A) na página /sobre

- **Rotas:** `/sobre`
- **Onde:** [src/routes/sobre.index.tsx:186](../../../../src/routes/sobre.index.tsx#L186)
- **Evidência:** sobre.index.tsx:186-190 card 'Informática' com `borderColor: "#1C829933"`, `background: "#1C8299"`, `color: "#0f5a6b"` — exatamente a paleta CAMPS/footer camps (program-theme.ts:31, site-footer.tsx:52-58); :132/:146 `text-[#5AB0F0]`; :231 `text-[#7CC4F0]`; :124 gradiente `#04325A → #021F3A`. Screenshot specials/keyboard-focus-6tabs.desktop.png: card 'Informática' com ícone teal e título teal escuro ao lado de 'Tecnologia' azul.
- **Problema:** §2.2 'cores dos programas apenas em peças daquele programa' — o eixo Informática ganha a cor da Colônia de Férias, enquanto na home o mesmo eixo Informática é verde (Júnior) / azul (Create). Os hex #5AB0F0/#7CC4F0 são tons inventados próximos do #49A8EB oficial.
- **Correção sugerida:** Card Informática (186-190): usar a mesma cor da home (index.tsx:148 usa #0DB88F), com `borderColor: "#0DB88F33"`, ícone `bg-st-green` e título `text-[#0A6E57]` (tom de texto verde já usado em index.tsx:561). Trocar `text-[#5AB0F0]` (:146) e `text-[#7CC4F0]` (:231) por `text-[#49A8EB]`. O `#021F3A` do gradiente (:124) pode ficar, porque é só profundidade.
- **Esforço:** trivial · **Severidade:** Média
- **Verificação:** confirmado: sobre.index.tsx:186-190 usam #1C8299/#0f5a6b = --st-camps (styles.css:89). Isso viola o DS §2.2 (cor de programa só em peças daquele programa). Os hex #5AB0F0/#7CC4F0 estão fora da paleta. O #021F3A é detalhe menor.

<a id="f251"></a>

## F251 · 🟡 Pele Informática imita a área de trabalho do Windows com logos Microsoft/Google/Notion/OpenAI coloridos dominando o hero

- **Rotas:** `/particular/cursos/informatica`
- **Onde:** [src/components/course-skins/informatica.tsx:49](../../../../src/components/course-skins/informatica.tsx#L49)
- **Evidência:** Screenshot routes/particular__cursos__informatica/desktop.fold.png: janela 'Boas-vindas' com logotipo de 4 quadrados azuis (marca Windows) no título e num tile flutuante à direita, explorador 'Documentos' com ícones Word/Excel/PowerPoint nas cores oficiais, barra de tarefas com logos Gmail, Word, Excel, PowerPoint, Notion e ChatGPT. Código: informatica.tsx:94-98 `FALLBACK_ICONS` com `bg: "#1A73E8"` (Google), `"#FF4F00"` (Zapier), `"#1E8E3E"` (Workspace); tool-logo.tsx (42 hex de marcas: #127FBF, #E87D0D, #7C3AED, #02027B…). Nenhuma cor da paleta Santos Tech aparece no fold além do botão azul #0F6CD4 (que também não é da paleta).
- **Problema:** §11 proíbe 'insinuar parceria oficial com Microsoft'; reproduzir o logo do Windows e a UI do sistema no hero de uma página de venda cria exatamente essa insinuação e, do ponto de vista de identidade, o fold pertence à Microsoft, não à escola (HIG branding: marcas de terceiros nunca como elemento dominante). As cores oficiais das ferramentas (Word azul, Excel verde, PowerPoint laranja, Gmail vermelho) somam 6 cores berrantes que a paleta não prevê.
- **Correção sugerida:** Remover o logo do Windows (4 quadrados) do título 'Boas-vindas' e do tile flutuante do hero, trocando por ícone genérico lucide (`Monitor`/`LayoutGrid`) na cor do accent. Manter os ícones da barra de tarefas (são as ferramentas ensinadas, uso nominativo). O botão #0F6CD4 é o accent da pele, deliberado: não trocar.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** parcial: Confirmado em desktop.fold.png: logo Windows no título e em tile grande. É risco de marca registrada e insinua vínculo (DS §11 veta insinuar parceria com a Microsoft). Os logos da barra de tarefas e o azul do accent são contexto legítimo do curso (Windows 11 é ementa). ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f286"></a>

## F286 · 🟡 Duas linguagens de ilustração na mesma página de curso: mockup UI realista no hero, cartoon flat abaixo

- **Rotas:** `/particular/cursos/canva`, `/particular/cursos/autocad`, `todas as 52 páginas de /particular/cursos/* que usam course-illustrations`
- **Onde:** [src/components/course-illustrations.tsx:5](../../../../src/components/course-illustrations.tsx#L5)
- **Evidência:** course-illustrations.tsx:5-8 declara "pessoas sem rosto, formas simples e um círculo pastel" (SKIN #f1c7a4, HAIR #2b2118) e é importada por common.tsx, informatica.tsx e 7 variants. routes/particular__cursos__canva/desktop.fold.png: hero com editor Canva escuro, régua, brand kit realista; logo abaixo (y≈760) personagem flat de camiseta rosa com laptop e círculo pastel. Mesmo padrão em autocad/desktop.fold.png (personagem laranja) e canva/desktop.full.png (seções "Quem está do outro lado", "Como as aulas funcionam").
- **Problema:** Dois vocabulários — interface escura fotorrealista e clipart flat estilo undraw — competem na mesma rolagem; o flat lembra "clipart genérico" (DS §11) e reduz o ar premium que as cenas do hero constroem.
- **Correção sugerida:** Confirmado em canva/desktop.fold.png: mockup escuro realista no hero e personagem flat rosa a 760px. Fazer em 2 fases. Fase 1 (agora, sem decisão de marca): na seção 'Como as aulas funcionam' (common.tsx:198-214) trocar `Illo` por ícone Phosphor duotone em pílula, reusando o padrão que já existe no mesmo arquivo (l.151): `<span className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--accent)/12 text-(--accent)"><Icon className="h-6 w-6" /></span>` com `UsersThree`, `CalendarCheck`, `MapPinArea` via `phosphor(Ph..., "duotone")` em top-level (DS §7.1/§7.3). Isso remove 3 dos 5 cartoons por página e alinha ao DS. Fase 2 (decisão do Henrique, roadmap 'Design/SVGs' já adiado): substituir `OneOnOne`/`CertificateSpot` (l.169/184) e `PersonAtDesk` (19 variants + informatica.tsx) pelos SVGs próprios, mantendo a API `({theme, className})` e tingindo com `theme.accent`. Não misturar uma terceira linguagem no meio-termo.
- **Esforço:** médio · **Severidade:** Média
- **Verificação:** confirmado: canva/desktop.fold.png: hero com mockup escuro realista do editor Canva; em y≈760 personagem flat sem rosto com círculo pastel. Mesmo em autocad/desktop.fold.png. course-skins/common.tsx:5,204-210 injeta OneOnOne/CalendarSpot/SchoolSpot em todas as páginas de curso (52 rotas particular.cursos.*). Ressalva: ilustrações são originais (l.6), não 'clipart' do DS §11 — o achado real é a mistura de vocabulários.

<a id="f305"></a>

## F305 · 🟡 Badge 'Mais procurado' arco-íris animado usa 7 cores fora da paleta e texto de 9px

- **Rotas:** `/`, `/cursos`, `/cursos/camps`
- **Onde:** [src/components/rarity-badge.tsx:17](../../../../src/components/rarity-badge.tsx#L17)
- **Evidência:** styles.css:296-321 `.rarity-badge` gradient #ff2d55 #ff9500 #ffe600 #34c759 #00c7ff #5e5ce6 #af52de + `badge-rainbow 4s infinite` + `::after` shine infinito + glow roxo; rarity-badge.tsx:17 `text-[9px]`. Usado em site-header.tsx, index.tsx, cursos.index.tsx, cursos.camps.tsx. Visível em specials/header-dropdown.desktop.png e routes/home/desktop.seg11.png. home/desktop.json › smallText: 'MAIS PROCURADO' 9px ×2.
- **Problema:** DESIGN_SYSTEM §2.1 'Nunca fuja da paleta' e §11 'Muitos efeitos ao mesmo tempo / cores berrantes'. design-principles.md › Delight: 'Don't mistake delight for decoration'. typography.md › Ensuring legibility: mínimo 11pt. É o único elemento do site que grita 'jogo' num site que quer parecer 'jovem sem ser infantil'.
- **Correção sugerida:** Achado principal do grupo (F053/F238/F013 são duplicatas). Trocar por chip estático da marca: `rounded-full bg-st-green px-2.5 py-1 text-[11px] font-black uppercase leading-none text-white` com o Sparkles estático, e remover .rarity-badge e os keyframes (styles.css:300-336). O comentário no código indica escolha intencional ("item ultra-raro de jogo"), então confirmar com o Henrique antes.
- **Esforço:** pequeno · **Severidade:** Média
- **Verificação:** confirmado: styles.css:315-318 usa 7 cores fora da paleta, com 2 animações infinitas e glow roxo. rarity-badge.tsx:17 usa text-[9px], abaixo do mínimo de 11pt do HIG. Aparece em specials/header-dropdown.desktop.png e fere o DS §2.1/§11. O reduced-motion já está tratado (L333-336).

<a id="f009"></a>

## F009 · ⚪ Pílula de ícone tem 5 raios diferentes (xl 37×, full 14×, md 12×, 2xl 9×, lg 4×)

- **Rotas:** `/`, `/cursos/create`, `/cursos/*/*-anos (9 páginas)`, `/particular`
- **Onde:** [src/components/course-page.tsx:460](../../../../src/components/course-page.tsx#L460)
- **Evidência:** DS §7.3 define `flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10`. grep do padrão `flex h-1[0-4] w-1[0-4] items-center justify-center rounded-*`: rounded-xl 37, rounded-full 14, rounded-md 12, rounded-2xl 9, rounded-lg 4. `rounded-md` em course-page.tsx:460 (FormatSection), :790 (ToolGrid), :860 (Methodology), :729 (BridgeBanner); index.tsx:611 (PASSOS); cursos.create.index.tsx:468 (MethodPoint). `rounded-xl` em index.tsx:535, :928, :961 e sobre.index.tsx:393.
- **Problema:** Na mesma página de curso, a pílula do ícone é quadrada-arredondada (md) nos pilares e arredondada (xl) em outros blocos; o home usa xl. Componente visual repetido 76× sem uma forma canônica.
- **Correção sugerida:** Padronizar em `rounded-xl` (DS §7.3) trocando a classe nos 15 pontos de pílula de ícone: course-page.tsx:460, :729, :790, :860; cursos.create.index.tsx:121; cursos.junior.index.tsx:196; cursos.academies.tsx:175, :345, :430; index.tsx:611; particular.index.tsx:370, :545, :555; course-skins/informatica.tsx:267; course-skins/variants/ide-jogos.tsx:191. NÃO tocar site-header.tsx:137 (é o botão hambúrguer, `rounded-md` correto para botão pequeno). `rounded-full` continua reservado a selos/badges (ModuleCard, LessonAccordion). Componente `<IconPill>` é opcional — só vale se alguém for criar nova página; a troca de classe já resolve.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: grep reproduz exatamente 37/14/12/9/4. course-page.tsx:460, :790, :860 e :729 usam rounded-md; index.tsx:611 rounded-md vs :535/:928/:961 rounded-xl. Correções de linha: sobre.index.tsx:254 (não 393) e cursos.create.index.tsx:121 MethodPoint h-10 w-10 (não 468). DS §7.3 pede rounded-xl.

<a id="f015"></a>

## F015 · ⚪ Tokens definidos em styles.css sem nenhum consumidor: .dark shadcn, --chart-*, --sidebar-*, 8 --st-*, .glow-blue, 3 .bg-program-*

- **Rotas:** `todas`
- **Onde:** [src/styles.css:80](../../../../src/styles.css#L80)
- **Evidência:** grep -l em src (fora de styles.css): `--st-blue-muted`, `--st-create`, `--st-jr`, `--st-jr-soft`, `--st-camps`, `--st-academies`, `--st-blue-hover`, `--st-green-hover` (styles.css:80-90) = 0 arquivos; `.glow-blue` (299) = 0; `.bg-program-jr/camps/academies` (284-292) = 0 (só `.bg-program-create` é usado, 5×); `--chart-1..5` e `--sidebar-*` (91-103, 126-138) = 0; bloco `.dark {}` (106-139) redefine 20 tokens shadcn, mas a única aplicação da classe `dark` (particular.tsx:277) está numa árvore que usa 0 tokens shadcn. Enquanto isso as páginas de programa hardcodam a mesma paleta: cursos.junior.index.tsx:46-48 `const JR = "#512374"; JR_SOFT = "#DEABF7"; JR_DARK = "#3d1858"`, cursos.create.index.tsx:394-396, program-theme.ts:27-42, site-footer.tsx:5-73.
- **Problema:** ~70 linhas de CSS morto convivem com a mesma paleta copiada em 6 arquivos TS. O DS §2.3 apresenta os tokens `--st-*` como 'implementados', mas eles não governam nada — trocar `--st-jr` não muda a página do JR.
- **Correção sugerida:** (1) Remover o CSS morto: --chart-*, --sidebar-*, .glow-blue, .bg-program-jr/camps/academies e --st-* sem consumidor. Avaliar o bloco .dark junto com particular.tsx:277 antes de apagar. (2) Centralizar a paleta de programas em src/lib/program-theme.ts e importar dali em cursos.junior.index.tsx:45-47 e nas demais; fazer isso em PR separado.
- **Esforço:** médio · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: O grep em src/**/*.tsx\|ts por st-blue-muted, st-jr, glow-blue, bg-program-jr, chart-, sidebar- não encontrou nenhum uso. A classe dark só aparece em particular.tsx:277. cursos.junior.index.tsx:45-47 fixa #512374 no código, enquanto DESIGN_SYSTEM.md:157 diz que --st-jr está "implementado". O visitante não vê nada disso; é dívida técnica.

<a id="f017"></a>

## F017 · ⚪ Template padrão de /particular/cursos (500 linhas) é código morto e duplica CommonSections com drift

- **Rotas:** `/particular/cursos/* (52 páginas)`
- **Onde:** [src/components/particular-course-page.tsx:228](../../../../src/components/particular-course-page.tsx#L228)
- **Evidência:** particular-course-page.tsx:208 `if (course.tema && course.logo) { ... return <Skin .../> }` — grep em src/routes/particular.cursos.*.tsx: 52 arquivos, 52 com `tema:`, 0 sem. Logo o fallback das linhas 227-735 nunca renderiza. Ele reimplementa Diferenciais (391-419), Professores+Certificado (422-484), Formato (487-531, com dados inline em 499-514 idênticos ao `FORMATO` exportado em shared.tsx:558, que tem 0 importadores), Investimento (534-676), CTA final (681-729) e copyright (731) — tudo já em common.tsx. `WHATSAPP_EXIBICAO` (shared.tsx:599) também tem 0 importadores. Copyright duplicado em 4 lugares: common.tsx:373, particular-course-page.tsx:732, particular.index.tsx:683, site-footer.tsx:86.
- **Problema:** Duas implementações da parte comercial das páginas de venda. Quem corrigir preço, texto de certificado ou CTA no template morto acha que corrigiu o site; o `Formato` inline pode divergir silenciosamente do `FORMATO` compartilhado. DS §1.5: 'se um padrão se repete em 2+ lugares, extrair'.
- **Correção sugerida:** Tornar `tema` e `logo` obrigatórios no tipo CourseData e apagar o fallback JSX (l.228-735); remover `FORMATO` (shared.tsx:181) e `WHATSAPP_EXIBICAO` (shared.tsx:222) sem importadores; extrair um <Copyright/> único usado em common.tsx:373, site-footer.tsx:86 e particular.index.tsx:683.
- **Esforço:** pequeno · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: 52/52 rotas têm `tema:` (grep -L retorna 0), então l.228-735 nunca renderiza; FORMATO/WHATSAPP_EXIBICAO sem importadores (linhas reais 181/222, não 558/599). Risco de manutenção, invisível ao usuário — rebaixado.

<a id="f020"></a>

## F020 · ⚪ Padrão de pontos e divisor de onda reimplementados inline 22× cada, com 4 tamanhos e 3 formas

- **Rotas:** `/`, `/cursos`, `/sobre`, `/contato`, `/particular`, `/particular/cursos/* (52 páginas)`, `/cursos/camps`
- **Onde:** [src/routes/index.tsx:378](../../../../src/routes/index.tsx#L378)
- **Evidência:** index.tsx:377 `bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white`, :387-388 dois blobs `bg-[#187ABF]/25 blur-3xl animate-blob` + `bg-[#0DB88F]/20 blur-3xl animate-blob`, :390 `<DecorativeElements color="#187ABF" />` (hexágonos, cubo, chip, '01001 10110', '</>' — 8 elementos), H1 com `.text-gradient-hero` (styles.css:263), CTA `glow-green`. Mesmo empilhamento em cursos.index.tsx:228-238, sobre.index.tsx:63-73, contato.tsx, cursos.camps.tsx:159-168. Screenshot routes/home/desktop.fold.png: binário '01001 10110' sobrepõe o texto '329 avaliações de pais e alunos'; routes/cursos/desktop.fold.png: '10110' colide com 'CRIANÇAS · 5–9 ANOS'.
- **Problema:** Três curvas de onda diferentes no mesmo site (a do hero da home não é a das faixas de produto logo abaixo) e pontos de densidade variável quebram a assinatura visual 'tecnológica' que o guia pede. É retrabalho garantido a cada nova página.
- **Correção sugerida:** Extrair aos poucos: classe '.dotted-bg-blue' em styles.css (radial-gradient rgba(24,122,191,.35) 1px, 24px) para os cerca de 10 fundos de pontos inline, e um <WaveDivider> com o path do DS §9 (DESIGN_SYSTEM.md:479) para as ondas das páginas institucionais. No hero da home, afastar o '01001 10110' do DecorativeElements (ex.: esconder abaixo de xl ou mudar a posição) para não encostar em 'alunos'.
- **Esforço:** médio · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Há 10 radial-gradient de pontos inline com backgroundSize de 9 a 32px e 37 <path d="M0..."> de onda, mas muitos são decoração de skin. Título e evidência não batem. desktop.fold.png mostra o binário encostado em 'alunos'. É dívida de manutenção (DS §1.5), não quebra visual. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f023"></a>

## F023 · ⚪ SiteFooter: 5 campos de tema definidos e nunca usados; DS §9.6 descreve um footer que não existe

- **Rotas:** `todas (exceto /particular e /links)`
- **Onde:** [src/components/site-footer.tsx:5](../../../../src/components/site-footer.tsx#L5)
- **Evidência:** site-footer.tsx:5-15 `type FooterTheme = { wrapper, brandHeading, brandHeadingAccent, bodyText, headings, links, iconColor, bottomBar, bottomText }`; JSX (79-101) consome só `t.wrapper`, `t.bottomBar`, `t.bottomText`, `t.links` (grep `t\.` = 4 campos). `brandHeading`, `brandHeadingAccent`, `bodyText`, `headings`, `iconColor` preenchidos 5× cada e mortos. DS §9.6 tabela diz 'qualquer outra → Footer bg `bg-muted/40`', mas code :19 `default: wrapper: "bg-[#04325A] text-white"`. Hex em classe: `bg-[#04325A]`, `text-[#49A8EB]`, `text-[#6EC4CC]`, `text-[#818CF8]` (19-73) em vez de tokens.
- **Problema:** O footer foi reduzido a uma barra de copyright, mas o objeto de tema e a documentação continuam descrevendo o footer completo (brand heading, links, ícones) — quem for reativar seções vai se guiar por campos que não fazem nada, e o DS mente sobre a cor padrão.
- **Correção sugerida:** Reduzir `FooterTheme` a `{ wrapper, links, bottomBar, bottomText }`, trocar `bg-[#04325A]` por `bg-st-blue-dark` e corrigir DESIGN_SYSTEM §9.6 (linha 563 e 572: default = #04325A).
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: site-footer.tsx:5-15 declara 9 campos; JSX usa só wrapper, bottomBar, bottomText, links (:83-94). DESIGN_SYSTEM.md:572 diz `bg-muted/40`, código :19 usa #04325A.

<a id="f028"></a>

## F028 · ⚪ Estratégia híbrida de ícones (§7) só existe em 7 arquivos; home e /particular ignoram Phosphor

- **Rotas:** `/`, `/sobre`, `/particular`, `/particular/cursos/* (52 páginas)`
- **Onde:** [src/routes/index.tsx:829](../../../../src/routes/index.tsx#L829)
- **Evidência:** DS §7.2: 'Pillars do método (4 cards com ícone em container tintado claro) → Phosphor duotone'. grep: 7 arquivos importam `@phosphor-icons/react` (course-page.tsx, cursos.academies.tsx, cursos.create.8-9-anos.tsx, cursos.create.index.tsx, cursos.junior.5-6-anos.tsx, cursos.junior.index.tsx, lib/phosphor.tsx) vs 105 com lucide. Pilares da home (index.tsx:66-72 `icon: Users, Cpu, Shield, BookOpen, Gift` lucide, renderizados em :535), VALORES de sobre.index.tsx:184-189 (lucide), todo o /particular (lucide). Também emoji em UI: index.tsx:829 `Olá, família 👋` (DS §7: 'Nunca ... emojis em UI') e glifos `✓`/`✖`/`✦` em 15 cenas de skin (code-data.tsx:107, office-apps.tsx:449,479).
- **Problema:** Os pilares da home (a 'referência viva') e os pilares de metodologia das páginas de curso mostram o mesmo conceito com duas bibliotecas de traço diferente (lucide stroke 2px vs Phosphor duotone). Manter duas libs para usar a segunda em 6 páginas custa bundle e consistência.
- **Correção sugerida:** Não migrar bibliotecas agora. (1) Trocar o emoji em index.tsx:829 'Olá, família 👋' por texto + <Hand className="h-3.5 w-3.5 shrink-0" /> (lucide). (2) Resolver a contradição do DS: §7 diz Phosphor para pilares e §14 (checklist, linha 688) pergunta 'Ícones são lucide-react?'; ajustar o checklist para 'lucide (funcional) ou Phosphor via phosphor() (destaque)'. Os diferenciais da home são 'Diferenciais', não 'Pillars do método', e podem continuar lucide.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Emoji em UI existe (index.tsx:829) e viola DS §7 linha 346. Mas os 5 cards da home (index.tsx:66-72) são diferenciais, não 'pilares do método' do §7.2; e o próprio DS se contradiz no checklist (DESIGN_SYSTEM.md:688). Duas libs coexistem por decisão documentada, não por descuido. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f057"></a>

## F057 · ⚪ DESIGN_SYSTEM §6 está desatualizado em relação ao motion real do site

- **Rotas:** `(documentação) DESIGN_SYSTEM.md`
- **Onde:** [DESIGN_SYSTEM.md:311](../../../../DESIGN_SYSTEM.md#L311)
- **Evidência:** ## 6. Animações — Definidas em src/styles.css:148-206. \| animate-float-slow \| animate-float-slower \| animate-blob \| ... Wrappers herdam `transition-all duration-700 ease-out`. > Regra: animação serve a leitura, não a si mesma.  // O código real: reveal.tsx:23 usa `transition-[transform,opacity]`; styles.css tem 12 keyframes (float-y, spin-slow, cta-pulse, curve-breathe, marquee, crossfade, pulse-ring, consent-in, badge-rainbow/shine) não documentados; nenhuma menção a prefers-reduced-motion, GSAP/ScrollTrigger/ScrollSmoother, preloader, magnetic, tilt, scroll-stage.
- **Problema:** A fonte de verdade da marca descreve 3 classes e um Reveal com `transition-all`, enquanto o site roda GSAP, ScrollSmoother, pin/scrub, preloader, 12 keyframes e 4 padrões de FAQ. Sem tokens de duração/curva e sem a regra de reduced-motion escrita, cada nova tela inventa o seu — é o que produziu a inconsistência mapeada nos achados acima.
- **Correção sugerida:** Fundir no mesmo PR do F030. Reescrever §6 documentando o que EXISTE, sem inventar tokens que o código não tem: (1) corrigir Reveal para `transition-[transform,opacity] duration-700 ease-out will-change-transform` (reveal.tsx:23); (2) tabela dos 13 keyframes de styles.css (float-slow, float-slower, blob, spin-slow, float-y, cta-pulse, curve-breathe, marquee, cf-fade-in, pulse-ring, consent-in, badge-rainbow, badge-shine) com propósito e onde usar; (3) seção 'GSAP/ScrollTrigger' listando scroll-stage, preloader, magnetic-button, tilt-card, page-transition-link e a regra já praticada: 'todo efeito checa `matchMedia("(prefers-reduced-motion: reduce)")` e cai para layout estático' (já feito em 20 arquivos + 7 blocos @media no CSS); (4) regras duras: animar só transform/opacity; hover ≤ 200ms; UI ≤ 300ms; marketing ≤ 700ms (o Reveal real é 700). Tokens `--dur-*`/`--ease-*` só entram se o mesmo PR os criar em styles.css e migrar ao menos Reveal e o CTA — senão vira nova divergência doc↔código.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: §6 lista 3 classes e diz `transition-all`; reveal.tsx:23 usa `transition-[transform,opacity]`. styles.css tem 13 @keyframes (10 fora do doc) e 8 blocos prefers-reduced-motion (l.160, 201, 213…); GSAP em 10 arquivos (preloader, scroll-stage, tilt-card…). Correção: DS l.73 cita reduced-motion genericamente — não é 'nenhuma menção', mas §6 de fato omite. Só lacuna de doc; código está correto.

<a id="f098"></a>

## F098 · ⚪ Eyebrow com 4 receitas diferentes (text-sm/text-xs, black/bold, tracking 0.18–0.25em)

- **Rotas:** `/cursos`, `/cursos/camps`, `/cursos/create/8-9-anos`, `/cursos/junior/5-6-anos`, `/cursos/academies`
- **Onde:** [src/components/course-page.tsx:328](../../../../src/components/course-page.tsx#L328)
- **Evidência:** cursos/mobile.fold.png: "NOSSOS PROGRAMAS" (`text-sm font-bold uppercase tracking-wider`, cursos.index.tsx:242) logo acima de "TECNOLOGIA" (`text-sm font-black tracking-[0.25em]`, :199) — tracking visivelmente diferente na mesma tela. Em course-page.tsx: seções claras `text-sm font-black tracking-[0.25em]` (:376, :441, :574) vs ProgressionTrail `text-xs font-black tracking-[0.25em]` (:328) vs chip do hero `text-xs` (:220). CAMPS chip `text-xs font-bold tracking-[0.18em]` (cursos.camps.tsx:175). O próprio DS diverge: §3.4 diz `text-xs font-bold`, §3.5 diz `text-sm font-black`.
- **Problema:** O eyebrow é o marcador de seção mais repetido do site; variar tamanho e tracking entre seções vizinhas quebra o ritmo e revela que o DS tem duas definições conflitantes.
- **Correção sugerida:** Resolver o conflito do DS a favor do que já domina o código: §3.5 continua `text-sm font-black uppercase tracking-[0.25em]` (eyebrow de seção); reescrever a linha de §3.4 como "Label de metadado (dentro de card)" = `text-xs font-bold uppercase tracking-wider`; variante chip do hero (§3.5) = `text-xs font-bold uppercase tracking-[0.18em]`. Corrigir os desvios: cursos.index.tsx:242 `text-sm font-bold uppercase tracking-wider`→`text-sm font-black uppercase tracking-[0.25em]`; course-page.tsx:328 `text-xs`→`text-sm`; course-page.tsx:220 `font-black tracking-[0.25em]`→`font-bold tracking-[0.18em]` (alinha com o chip do CAMPS :175 e com o DS). Não trocar as 59 seções pra `text-xs` — a recomendação original inverteria a receita majoritária.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** confirmado: cursos.index.tsx:242 `text-sm font-bold tracking-wider` vs :199 `text-sm font-black tracking-[0.25em]` — diferença visível em cursos/mobile.fold.png. course-page.tsx:328 e :220 `text-xs` vs :376/:441/:574 `text-sm`. DS §3.4 (`text-xs font-bold`) conflita com §3.5 (`text-sm font-black`). Ressalva: chip do CAMPS (:175) segue a variante chip do DS §3.5, não é desvio.

<a id="f247"></a>

## F247 · ⚪ --st-blue-dark #04325A continua divergente do guia (#0E2937/#212D3A) e está propagado em footer, preloader e 32 hex crus

- **Rotas:** `site inteiro`
- **Onde:** [src/styles.css:81](../../../../src/styles.css#L81)
- **Evidência:** styles.css:81 `--st-blue-dark: #04325A`; DESIGN_SYSTEM §2.3 marca '⚠️ Divergente — guia pede #0E2937 ou #212D3A' e §2.3 nota '🚧 Decisão pendente'. Uso direto: site-footer.tsx:19/41 `bg-[#04325A]`, preloader.tsx:71, __root.tsx:186 `document.body.style.backgroundColor = "#04325A"`, index.tsx:881, sobre.index.tsx:124/213, cursos.create.*.tsx:61 `dark: "#04325A"`, cursos.camps.tsx:44 — 32 ocorrências cruas.
- **Problema:** Pendência registrada há tempo no próprio DS sem decisão; enquanto isso a cor se espalha em hex cru, aumentando o custo de alinhar depois. O #04325A é mais saturado/azul que o marinho do guia, então header, footer e seções escuras não batem com o material impresso/PDF da marca.
- **Correção sugerida:** Pedir ao Henrique a decisão de marca: recomendo manter #04325A como "azul-marinho digital" e registrar no DS §2.3. Depois, trocar os ~33 hex crus nos .tsx (bg-[#04325A], from-[#04325A], dark: "#04325A") por bg-st-blue-dark / var(--st-blue-dark). Em __root.tsx usar getComputedStyle ou manter a constante.
- **Esforço:** pequeno · **Severidade:** Baixa · **Também apontado como:** F246
- **Verificação:** confirmado: Confirmado: styles.css:81 define --st-blue-dark #04325A, e DS §2.3 marca como divergente e decisão pendente. Há cerca de 33 ocorrências cruas espalhadas em 21 arquivos .tsx (grep). Trocar por token não muda nada visual e deixa a decisão futura num diff só.

<a id="f250"></a>

## F250 · ⚪ Tema de footer por rota muda a cor de fundo inteira, mas o header muda só o 'TECH' em tons escuros indistinguíveis; acento CAMPS 3,9:1

- **Rotas:** `/cursos/junior*`, `/cursos/create*`, `/cursos/camps`, `/cursos/academies`
- **Onde:** [src/components/site-footer.tsx:55](../../../../src/components/site-footer.tsx#L55)
- **Evidência:** program-theme.ts:28-33 ACCENT_DARK: default #04325A, jr #3d1858, create #04325A, camps #0f5a6b, academies #020a6b — usado só em site-header.tsx:94 (`<span style={{ color: accentColor }}>TECH`). site-footer.tsx:19-69: fundo inteiro muda (#04325A / #512374 / #0f5a6b / #020a6b) com links hover em #49A8EB/#DEABF7/#6EC4CC/#818CF8. Cálculo: #6EC4CC sobre #0f5a6b = 3,87:1 (links pequenos do footer camps no hover falham); #3d1858, #0f5a6b e #020a6b são hex fora da paleta §2.1. Screenshots: routes/cursos__junior/desktop.fold.png ('TECH' roxo escuro quase igual ao navy) vs routes/cursos__create__8-9-anos/desktop.fold.png.
- **Problema:** O header dá um sinal de tema imperceptível (variação de 'TECH' entre #04325A e #3d1858) enquanto o footer muda drasticamente — o pai vê a página abrir azul (header) e fechar roxa (footer), sem transição coerente. Os tons 'dark' criados para o header (#3d1858, #0f5a6b, #020a6b) e o #6EC4CC são cinco hex novos fora do guia.
- **Correção sugerida:** Manter o tema por rota, que é decisão documentada. Só no tema camps trocar `hover:text-[#6EC4CC]` e `text-[#6EC4CC]` por um tom mais claro, ex.: `#A8DFE4`, e atualizar a tabela em DESIGN_SYSTEM.md §9.6. Ajustar o hex só depois de medir o contraste real.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: Os hex não estão fora do guia: estão registrados em DESIGN_SYSTEM.md:566-571 (§9.6), que também manda o header mudar só o 'TECH'. Achar o header 'imperceptível' é gosto pessoal. O único problema real é o hover/ícone #6EC4CC sobre #0f5a6b, que dá cerca de 3,9:1. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f281"></a>

## F281 · ⚪ OG images de /particular/cursos/* estão desatualizadas: badge "SANTOS TECH · ADULTOS"

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`
- **Onde:** [public/og/particular/excel.png:360](../../../../public/og/particular/excel.png#L360)
- **Evidência:** public/og/particular/excel.png e informatica.png (abertos) mostram o chip "SANTOS TECH · ADULTOS" no topo; o script atual escreve `badge: \`Santos Tech · Particular\`` (linha 360) e não contém a string "ADULTOS". Últimos commits: PNGs 23/09 13:02, script 23/09 13:05 — os PNGs foram gerados antes do rename /adultos→/particular.
- **Problema:** Quem compartilha um curso no WhatsApp (canal principal de venda) vê o nome antigo do programa na prévia — o primeiro contato visual contradiz a página. Memória do projeto registra que `bun run build` regenera OGs, mas o commit não trouxe a nova versão.
- **Correção sugerida:** FALSO POSITIVO no impacto: produção já serve `SANTOS TECH · PARTICULAR` (curl de https://santos-tech.com/og/particular/excel.png hoje) porque `bun run build` roda o script antes do vite build — o WhatsApp mostra a prévia certa. Só o git está desatualizado (63 PNGs divergem, incl. infantil e og-image.png; geração é determinística — dois runs = mesmo md5). Correção: rodar `bun run generate:og` e commitar `public/og/**` + `public/og-image.png` num `chore(og): sincroniza PNGs com o script`. Depois, decidir uma vez: OU (a) manter PNGs no git e trocar a regra da memória 'restaurar public/og antes do commit' por 'commitar o que o build gerou quando o script mudou'; OU (b) adicionar `public/og/` e `public/og-image.png` ao .gitignore, já que são artefato de build. Recomendo (b): elimina a classe de erro. Sem regra nova no CLAUDE.md.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** parcial: PNGs do repo estão mesmo velhos (excel.png aberto mostra 'SANTOS TECH · ADULTOS'; premiere.png, regerado no 4083b03, já mostra PARTICULAR). Mas produção está correta: Dockerfile:27 roda `bun run build`, que executa generate-og-images.mjs antes do vite (package.json:8); baixei https://santos-tech.com/og/particular/excel.png — md5 diferente do repo e badge 'SANTOS TECH · PARTICULAR'. Quem compartilha no WhatsApp vê o nome certo. Fica só higiene do repo. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f290"></a>

## F290 · ⚪ Badge "logo da ferramenta" recebe ícone genérico (estrela teal / clipart PROJECT) em cursos de IA e ADS

- **Rotas:** `/particular/cursos/ia`, `/particular/cursos/agentes-ia`, `/particular/cursos/ads`
- **Onde:** [src/routes/particular.cursos.ads.tsx:22](../../../../src/routes/particular.cursos.ads.tsx#L22)
- **Evidência:** particular.cursos.ia.tsx:22 e agentes-ia.tsx:22 `logo: "ia"` → src/assets/logos/ia.svg (letras "AI" com faísca, routes/particular__cursos__ia/mobile.fold.png badge y≈1400); ads.tsx:22 `logo: "projeto"` → projeto.png (clipart de folha com engrenagem e etiqueta "PROJECT", routes/particular__cursos__ads/desktop.fold.png x≈1370,y≈128). tool-logo.tsx:125-131 `case "ia": default:` desenha estrela branca em quadrado #0D9488. course-hero-art.tsx:8 descreve o slot como "logo oficial da ferramenta flutuando".
- **Problema:** O slot que nas outras 49 páginas exibe uma marca reconhecível (Excel, Canva, Bambu Lab) aqui mostra um pictograma genérico ou clipart em inglês — DS §11 "cliparts genéricos"; enfraquece a percepção de curso com ferramenta concreta.
- **Correção sugerida:** ADS: remover `logo: "projeto"` e usar o selo Santos Tech (<Mark/>) no badge, como oficina.tsx:166 já faz. IA/agentes: manter ia.svg. TripleLogo não existe no repo.
- **Esforço:** pequeno · **Severidade:** Baixa
- **Verificação:** parcial: O clipart "PROJECT" em inglês aparece em particular__cursos__ads/desktop.fold.png. Em IA, o ToolLogo usa ia.svg (existe em assets/logos); a estrela teal de tool-logo.tsx:282 é só fallback, e a linha 125 está errada. A recomendação original cita um componente inexistente. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f318"></a>

## F318 · ⚪ Dropdown 'Programas': o item 'Tecnologia Create' perde a faixa de idade porque o badge ocupa o lugar

- **Rotas:** `/`
- **Onde:** [src/components/site-header.tsx:388](../../../../src/components/site-header.tsx#L388)
- **Evidência:** site-header.tsx:24 `badge: true` em 'Tecnologia Create' sem `meta` visível; specials/header-dropdown.desktop.png: 'Tecnologia Júnior 5–9 anos', 'Tecnologia Create [MAIS PROCURADO]', 'Informática Júnior 5–9 anos', 'Informática Create 10–15 anos' — só um dos quatro não mostra idade.
- **Problema:** layout.md › Visual hierarchy: 'Align elements to make them easier to scan… People assume that aligned items are related'. A idade é o critério de decisão do pai; a coluna quebra justamente no produto principal.
- **Correção sugerida:** Em :388-392 renderizar sempre `p.meta` à direita e o badge junto ao label: `<span className="flex items-center gap-2"><span style={{color:p.color}}>{p.label}</span>{p.badge && <RarityBadge className="shrink-0" />}</span>{p.meta && <span ...>{p.meta}</span>}`.
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** confirmado: O meta '10–15 anos' existe (site-header.tsx:24), mas o ternário em :388-392 mostra o badge no lugar dele. Idade some justo no produto destacado.

<a id="f352"></a>

## F352 · ⚪ Rótulos do header: itens do Sobre em CAIXA ALTA nos dados e grupo "Também" sem significado

- **Rotas:** `/`
- **Onde:** [src/components/site-header.tsx:36](../../../../src/components/site-header.tsx#L36)
- **Evidência:** site-header.tsx:36-37: SOBRE_ITEMS = "SOBRE NÓS", "NOSSA VISÃO" (texto já em maiúsculas nos dados, e a classe ainda aplica `uppercase` em L207,452), enquanto os demais itens são Title Case ("Início", "Blog", "Contato" L108,121,129) — ver specials/header-dropdown-sobre.desktop.png vs header-dropdown.desktop.png. L31,185,428: grupo de links chamado "Também" contendo só "Colônia de Férias".
- **Problema:** Maiúsculas hardcoded fazem leitores de tela soletrarem "S-O-B-R-E" em alguns motores e travam a decisão visual no dado em vez do CSS; "Também" é rótulo de grupo que não diz nada ao pai ("também o quê?").
- **Correção sugerida:** Dados em :36-37 → "Sobre nós" / "Nossa visão" (a classe `uppercase` em :207/:452 mantém o visual). Grupo "Também" (:185/:428) → "Férias".
- **Esforço:** trivial · **Severidade:** Baixa
- **Verificação:** parcial: CAIXA ALTA hardcoded confirmada em :36-37 e 'Também' em :185/:428 com só Colônia de Férias. Alegação de leitores soletrarem é exagerada para palavras comuns; é higiene de dado/copy. ⚠️ _parcialmente confirmado — o problema existe, mas menor ou em outro lugar que o descrito; vale a nota do verificador._

<a id="f357"></a>

## F357 · ⚪ Três grafias para o mesmo produto: "Portal do Aluno", "PORTAL DO ALUNO ST", "Portal ST"

- **Rotas:** `/`, `/cursos/create`
- **Onde:** [src/routes/cursos.create.index.tsx:236](../../../../src/routes/cursos.create.index.tsx#L236)
- **Evidência:** cursos.create.index.tsx:39 e L236 "PORTAL DO ALUNO ST" (caixa alta, em <strong>), L262 "Plataforma própria (Portal ST)", L358 "PORTAL DO ALUNO ST — plataforma própria", L425 "Portal do Aluno". Home: index.tsx:70,152,161,787,827,870 sempre "Portal do Aluno". Visível em routes/cursos__create/mobile.fold.png.
- **Problema:** Caixa alta em texto corrido lê como grito e cria a impressão de produtos diferentes ("Portal ST" vs "Portal do Aluno"); pai que viu a seção da home não reconhece o mesmo benefício na página do CREATE.
- **Correção sugerida:** Padronizar 'Portal do Aluno' em cursos.create.index.tsx:39, :198, :236, :262 ('Plataforma própria (Portal do Aluno)') e :358, alinhado à home (index.tsx:781).
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: Confirmado: 'PORTAL DO ALUNO ST' em :39, :198, :236, :358; 'Portal ST' em :262; 'Portal do Aluno' em :425 e na home. Inconsistência de copy, polimento.

<a id="f369"></a>

## F369 · ⚪ Rótulos duplicados com capitalização divergente na mesma página ("Aula Individual" vs "Aula individual")

- **Rotas:** `todas as 52 páginas de /particular/cursos/*`, `/particular`
- **Onde:** [src/components/course-skins/shared.tsx:121](../../../../src/components/course-skins/shared.tsx#L121)
- **Evidência:** shared.tsx:121-167 DIFERENCIAIS em Title Case ("Aula Individual", "Horário Flexível", "Reagendamento sem Custo", "Aulas Gravadas a Pedido", "Certificado Reconhecido"); common.tsx:204-206 cards de Formato em caixa de frase ("Aula individual", "Horário flexível", "100% presencial"). mobile.json (ex.: manutencao › dom.headings) lista h3 "Aula Individual" e depois h3 "Aula individual" na mesma página. particular.index.tsx:97-112: três títulos em caixa de frase e o 4º "Conteúdo Sempre Atualizado" em Title Case. shared.tsx:181-197 FORMATO (Title Case) não é importado em nenhum lugar (grep) — cópia morta que divergiu de common.tsx:205.
- **Problema:** Title Case não é convenção do português e o mesmo rótulo aparece de dois jeitos em cada página de curso; a constante FORMATO virou cópia morta com texto diferente do que renderiza.
- **Correção sugerida:** Passar todos os títulos de DIFERENCIAIS (shared.tsx:117-167) para caixa de frase: "Aula individual", "Horário flexível", "Reagendamento sem custo", "Aulas gravadas a pedido", "Aula online se precisar", "Certificado reconhecido", "100% prático", "Trilha estruturada", "Exercícios contextualizados", "Conteúdo sempre atualizado"; idem particular.index.tsx:112. Apagar a constante FORMATO (shared.tsx:181-197), que não é importada em lugar nenhum.
- **Esforço:** trivial · **Severidade:** Baixa (proposta Média, recalibrada na verificação)
- **Verificação:** confirmado: shared.tsx:121 "Aula Individual" (Title Case) e common.tsx:204 "Aula individual" na mesma página; particular.index.tsx:112 "Conteúdo Sempre Atualizado" destoa dos outros três. grep: FORMATO só aparece na própria definição (shared.tsx:181), é código morto. Polimento de copy, não quebra nada.
