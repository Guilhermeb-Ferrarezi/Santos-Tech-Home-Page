# Santos Tech — Design System

> Guia visual e de implementação para qualquer página, post ou peça nova da **Santos Tech**.
> Esta é a fonte da verdade — combina o **guia oficial de identidade visual** (PDF da marca) com o que já está implementado no código.
> **Não improvise** cores, tipografia ou espaçamento fora desta referência.

**Stack:** TanStack Start + React 19 + Tailwind CSS v4 + shadcn/ui ("new-york") + lucide-react.

---

## 1. Princípios de Marca

### 1.1 A marca **deve parecer**

- Moderna
- Tecnológica
- Divertida
- Organizada
- Confiável
- Jovem **sem** ser infantil demais

### 1.2 A marca **não pode parecer**

- Bagunçada
- Genérica
- Amadora
- "Curso chato"
- Recreação sem método
- Infantilizada demais (cliparts, fontes "fofas", excesso de cores berrantes)

### 1.3 Princípios de copy aplicados ao visual

| Princípio | O que significa na prática |
|---|---|
| **Aspiracional + acolhedor** | Texto de mãe/pai pra mãe/pai. Confiante, sem hype. Frases curtas. |
| **Resultado, não funcionalidade** | "Seu filho cria o próprio jogo" > "currículo gamificado". |
| **Tela vira habilidade** | Toda peça reforça o arco: jogar → criar → futuro. |
| **Aventura, não escolinha** | Cores vivas, gradientes, ondas, animações flutuantes. Nunca burocrático. |
| **Especificidade como prova** | Idade, ferramenta real (MakeCode, Roblox), o que o aluno leva pra casa. |

**Tom de voz** (copy):
- Português BR, caloroso, direto.
- Headlines: arco emocional em 1 linha. Subs: 1 frase concreta com idade/lugar/promessa.
- Um CTA dominante por seção. Hierarquia: **primário = agendar aula experimental**; **secundário = ver programas**.

### 1.4 Formatação de texto = leitura em 1ª prioridade

> **Regra:** sempre formatar texto pensando em leitura escaneável. Bloco de texto denso é proibido — quebra em parágrafos curtos, listas, ou bold estratégico.

**Por quê:** a maioria dos pais lê no celular, no intervalo do almoço, em 30 segundos. Texto corrido espesso é abandonado antes do CTA. Hierarquia visual é parte do copy, não decoração.

**Como aplicar:**
- Subtítulo de hero: máximo **2 parágrafos curtos** com `space-y-3`. Nunca 1 bloco de 5+ linhas.
- Descrição de card / módulo: 1 frase de gancho + lista de bullets + 1 frase de fechamento (padrão `ProgramFeatures`).
- Bold em **negrito estratégico** nas palavras-âncora ("sem precisar saber ler", "3 cursos de 1 ano"). Nunca o parágrafo inteiro.
- Se o texto não couber em uma respiração, **divide**. Se dividir parecer artificial, **encurta**.
- Antes de mergir, **leia em voz alta**: se travou ou bocejou, refaz.

### 1.5 Engenharia: código limpo, organizado e otimizado

> **Regra:** todo código deve priorizar performance no PageSpeed Insights, leitura por outro dev, e manutenção sem retrabalho.

**Por quê:** site de venda — Largest Contentful Paint ruim derruba conversão. Código bagunçado vira retrabalho na próxima feature.

**Como aplicar:**
- **Imagens:** `loading="lazy"` em tudo abaixo da fold; tamanho real próximo do renderizado; preferir formatos otimizados (WebP/AVIF quando viável).
- **Componentes:** se um padrão se repete em 2+ lugares, extrair pra componente. Se aparece 1x, deixar inline.
- **Imports:** só o que está em uso. Sem ícones, libs, utilitários "por garantia".
- **CSS:** Tailwind utilitário; classes na ordem layout → spacing → color → effects. Sem `style={{...}}` inline quando há classe Tailwind equivalente — exceto pra cores dinâmicas (ex.: cor do programa via variável).
- **Estado:** evitar useState/useEffect quando não há necessidade real. Server components / SSR primeiro.
- **JS bundle:** dividir rotas pesadas em lazy load. Acordeões, FAQ, etc. — usar shadcn (que tree-shake bem).
- **Fonts:** `preconnect` + `display=swap` (já feito em `__root.tsx`).
- **Animações:** `will-change-transform` só em elementos que de fato animam; `prefers-reduced-motion` quando relevante.
- **Antes de marcar tarefa como pronta:** rodar a página no PageSpeed (mobile + desktop) — meta: 90+ em Performance.

### 1.6 Convenção de nomes dos cursos

Cada programa tem **cursos numerados por idade**. Identificador interno = `{programa}{n}`:

| Programa | Cursos | Faixas |
|---|---|---|
| JR | JR1 · JR2 · JR3 | 5–6 · 6–7 · 7–8 |
| CREATE | CREATE1 · CREATE2 · CREATE3 · CREATE4 · CREATE5 · CREATE6 | 8–9 · 9–10 · 10–11 · 11–12 · 12–13 · 13–14 |
| CAMPS | a definir | 5–14 (semanas temáticas) |
| ACADEMIES | a definir | módulos avançados |

Cada curso tem **nome próprio** (ex.: JR1 = "Primeiros Passos") e **URL por idade** (ex.: `/cursos/junior/5-6-anos`). Na UI, o eyebrow mostra `{programa}{n} · {idade}`.

---

## 2. Cores

### 2.1 Paleta oficial (do guia da marca)

**Use sempre essas cores. Nunca fuja da paleta.**

#### Primárias

| Função | Hex | Quando usar |
|---|---|---|
| **Azul principal** | `#187ABF` | Identidade. Links, ícones de destaque, gradientes. |
| Azul (tom claro) | `#338FBF` | Variação suave do principal. |
| Azul (tom médio) | `#2D8ABD` | Variação. |
| Azul claro vibrante | `#49A8EB` | Destaques e detalhes vivos. |
| Azul vivo | `#0270E0` | Destaques de alto contraste. |
| **Verde-água / teal** (destaque) | `#0DB88F` | **CTA principal**, ícones, detalhes. |
| **Azul-marinho escuro** | `#0E2937` / `#212D3A` | Seções escuras, títulos sobre fundo claro. |

#### Neutros

| Função | Hex |
|---|---|
| Fundo principal | `#FFFFFF` |
| Fundo cinza claro | `#F5F8FA` |
| Texto padrão | `#212121` |
| Preto (apoio, contraste forte) | `#000000` |

#### Secundárias / apoio

| Função | Hex | Uso |
|---|---|---|
| Azul de interação / hover | `#0067BE` | Hover de azul principal, link ativo. |
| Azul acinzentado | `#496B84` | Texto secundário sobre fundo claro. |

#### Cores por programa (gradientes)

Cada programa tem cor própria — **não misture, não invente nova**.

| Programa | Cor principal | Apoio | Classe de fundo | Faixa etária |
|---|---|---|---|---|
| **CREATE** (carro-chefe) | `#0067BE` | — | `bg-program-create` | 8–14 |
| **JR** (infantil) | `#512374` | `#DEABF7` (claro) | `bg-program-jr` | 5–7 |
| **CAMPS** (férias) | `#1C8299` | — | `bg-program-camps` | 5–14 |
| **ACADEMIES** (avançado) | `#0411A0` | — | `bg-program-academies` | Robótica / IA |

> ⚠️ Nomes em revisão (proposta BR: **CRIA / MIRIM / FÉRIAS TECH / AVANÇADO**). Confirmar antes de criar páginas dedicadas ou peças com nome do programa.

### 2.2 Regra prática de uso

- **Branco** como fundo principal na maior parte das peças.
- **Azul principal** + **azul escuro** para títulos, áreas de contraste e blocos importantes.
- **Verde** para botões, CTA, destaques e detalhes.
- **Preto** só quando precisar de contraste forte.
- **Cores dos programas** apenas em peças daquele programa específico.

### 2.3 Tokens implementados (em [src/styles.css](src/styles.css))

| Token CSS | Hex atual | Bate com o guia? |
|---|---|---|
| `--st-blue` | `#187ABF` | ✅ Azul principal |
| `--st-blue-hover` | `#0067BE` | ✅ Hover / interação |
| `--st-blue-dark` | `#04325A` | ⚠️ **Divergente** — guia pede `#0E2937` ou `#212D3A` |
| `--st-blue-muted` | `#496B84` | ✅ Azul de apoio |
| `--st-green` | `#0DB88F` | ✅ Verde-água |
| `--st-green-hover` | `#0aa37e` | derivado (hover) — fora do guia |
| `--st-create` | `#0067BE` | ✅ |
| `--st-jr` | `#512374` | ✅ |
| `--st-jr-soft` | `#DEABF7` | ✅ |
| `--st-camps` | `#1C8299` | ✅ |
| `--st-academies` | `#0411A0` | ✅ |

> 🚧 **Decisão pendente** sobre `--st-blue-dark`: alinhar ao guia (`#0E2937` ou `#212D3A`) muda a cor de todos os títulos do hero e do header. Antes de alterar, validar visualmente com a marca. **Tokens que ainda não existem no CSS** (e provavelmente vão precisar quando ampliar a paleta visual): `#338FBF`, `#2D8ABD`, `#49A8EB`, `#0270E0`, `#F5F8FA`, `#212121`.

### 2.4 Classes utilitárias prontas

- `bg-st-green` / `text-st-green`
- `bg-st-blue-dark` / `text-st-blue-dark`
- Gradientes de texto: `.text-gradient-hero` (azul→verde) e `.text-gradient-santos` (azul claro→escuro)
- Gradientes de banda: `.bg-program-create`, `.bg-program-jr`, `.bg-program-camps`, `.bg-program-academies`

### 2.5 Sistema shadcn (UI neutra)

`--background`, `--foreground`, `--primary`, `--muted`, `--card`, `--border`, etc. — usados em componentes `ui/`. Não editar arbitrariamente; alterar via tokens, nunca direto no componente.

---

## 3. Tipografia

### 3.1 Diretrizes do guia oficial

- **Sem serifa**, moderna, limpa.
- **Forte nos títulos** (bold ou semibold). Decorativa é proibido.
- **Limpa no corpo**, leve, legível.
- **Fácil leitura no celular** — mobile-first.
- Preferência: **1 fonte principal**, no máximo 1 de apoio.

A tipografia precisa transmitir: **tecnologia · clareza · energia · profissionalismo**.

### 3.2 Implementação atual

**Família:** `Poppins`, fallback `system-ui, -apple-system, sans-serif`. Definida em [src/styles.css:143](src/styles.css#L143). Poppins atende todos os critérios do guia.

### 3.3 Escala de títulos

| Uso | Tailwind | Peso | Tracking |
|---|---|---|---|
| **H1 Hero** | `text-5xl sm:text-6xl lg:text-7xl` | `font-black` | `tracking-tight leading-[0.95]` |
| **H2 Seção** | `text-3xl sm:text-4xl` (até `5xl` em destaque) | `font-black` | `tracking-tight` |
| **H3 Card** | `text-lg` (até `2xl` em destaques) | `font-bold` ou `font-black` | — |
| **H3 ProgramBand** | `text-6xl sm:text-7xl lg:text-8xl` | `font-black` | `tracking-tight` |

### 3.4 Corpo

| Uso | Tailwind |
|---|---|
| Subtítulo hero | `text-base sm:text-lg`, cor `text-muted-foreground` |
| Parágrafo padrão | `text-base`, cor `text-muted-foreground` |
| Bullets em banda colorida | `text-base sm:text-lg`, cor `text-white/85` |
| Microcopy / eyebrow | `text-xs font-bold uppercase tracking-[0.18em]–[0.25em]` |

### 3.5 Eyebrow (label acima de título)

Padrão visual recorrente:

```tsx
<p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
  O que oferecemos
</p>
```

Variante "chip" (com borda):

```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
  <Bot className="h-6 w-6 shrink-0" />
  Texto do chip
</span>
```

---

## 4. Espaçamento & Layout

### 4.1 Container

**Sempre** use a mesma cápsula horizontal:

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

### 4.2 Padding vertical de seção

| Densidade | Tailwind |
|---|---|
| Padrão | `py-20` |
| Hero | `pt-16 sm:pt-20 lg:pt-24 pb-32 lg:pb-40` |
| ProgramBand (banda colorida cheia) | `py-24 sm:py-28 lg:py-32` |

### 4.3 Grid responsivo

| Conteúdo | Grid |
|---|---|
| Hero (texto + arte) | `grid items-center gap-10 lg:grid-cols-2` |
| Cards 4 colunas | `grid gap-6 sm:grid-cols-2 lg:grid-cols-4` |
| Stats | `grid grid-cols-2 gap-6 md:grid-cols-4` |
| Comparativo 2 cards | `grid gap-6 lg:grid-cols-2` |

### 4.4 Gap interno entre elementos

- Eyebrow → título: `mt-2`
- Título → subtítulo: `mt-4` ou `mt-6`
- Subtítulo → CTAs: `mt-8`
- Lista de bullets entre itens: `space-y-2.5`

### 4.5 Respiro

> Do guia: "blocos com bastante respiro" + "leitura rápida".

Não comprima. Se a peça parecer apertada, **tira coisa antes de espremer**. Hierarquia visual > quantidade de informação.

---

## 5. Bordas, Raios, Sombras

### 5.1 Raios (do `--radius: 0.75rem`)

| Token | Uso |
|---|---|
| `rounded-md` (8px) | Inputs, botões pequenos. |
| `rounded-xl` (16px) | Ícones em containers, badges. |
| `rounded-2xl` (20px) | Cards. |
| `rounded-3xl` (24px) | Cards grandes, blocos de CTA. |
| `rounded-full` | Pills, chips, botões principais, avatares. |

### 5.2 Bordas

- Cards: `border border-border bg-card`
- Botões secundários: `border-2 border-primary/20 ... hover:border-primary/60`
- Imagens "polaroid" (hero/programas): `border-[4–6px] border-white shadow-2xl`

### 5.3 Sombras & Glows

| Classe | Uso |
|---|---|
| `shadow-sm` | Chips, inputs. |
| `shadow-lg` | Botões secundários elevados. |
| `shadow-xl` | Cards no hover. |
| `shadow-2xl` | Imagens em destaque (hero, ProgramBand). |
| `glow-green` | Glow verde sob CTA principal. |
| `glow-blue` | Glow azul (alternativo). |

> Do guia: "pequenos brilhos ou glow leve". **Glow é OK quando contido**; **excesso de sombra é proibido**.

```tsx
className="... bg-st-green shadow-[0_12px_30px_-10px_rgba(13,184,143,0.65)] glow-green"
```

---

## 6. Animações

Definidas em [src/styles.css:148-206](src/styles.css#L148-L206).

| Classe | Efeito | Uso |
|---|---|---|
| `animate-float-slow` | Flutua 14px com leve rotação (6s) | Imagens hero, polaroides. |
| `animate-float-slower` | Flutua 22px (8s) | Imagens secundárias. |
| `animate-blob` | Blob orgânico (14s) | Bolhas de fundo decorativas. |

**Entrada com scroll-reveal** — use sempre o componente [`<Reveal>`](src/components/reveal.tsx):

```tsx
<Reveal delay={120} y={30}>
  <h2>Título que aparece com fade-up</h2>
</Reveal>
```

- `delay` em ms (escalone 0/120/240/360 entre filhos).
- `y` = deslocamento inicial (default 24).
- Wrappers herdam `transition-all duration-700 ease-out`.

> Regra: **animação serve a leitura, não a si mesma**. Se distrai do conteúdo, tira.

---

## 7. Iconografia

**Estratégia híbrida — duas bibliotecas:**

| Biblioteca | Quando usar | Por quê |
|---|---|---|
| [`lucide-react`](https://lucide.dev/) | Ícones funcionais / utilitários (checks, setas, menus, navegação) | Catálogo enxuto, clean, padrão da indústria |
| [`@phosphor-icons/react`](https://phosphoricons.com/) | **Destaques visuais** (badges, pillars, eyebrows de impacto, métodos) | 6 pesos (thin → fill → duotone), look premium |

Nunca misture com Font Awesome, Heroicons, emojis em UI, ou cliparts.

### 7.1 Phosphor — wrapper obrigatório

Phosphor tem 6 pesos (`thin / light / regular / bold / fill / duotone`). Pra manter compatibilidade com o sistema (`BadgeChip`, `ModuleCard`, etc. esperam `ComponentType<{ className?: string }>`), **sempre** envolva com o helper [`phosphor()`](src/lib/phosphor.tsx) em **top-level do módulo** (nunca dentro de render):

```tsx
import { Lightning as PhLightning } from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";

// Top-level: define uma vez
const Lightning = phosphor(PhLightning, "bold");

// No render:
<Lightning className="h-7 w-7 text-white" />
```

### 7.2 Convenções de weight

| Contexto | Weight | Por quê |
|---|---|---|
| **Badges em fundo colorido** (Insígnias, Selos, Marcos) — ícone branco | `bold` | Presença forte em fundo escuro/colorido |
| **Pillars do método** (4 cards com ícone em container tintado claro) | `duotone` | 2 cores dão riqueza visual em bg claro |
| **Ícones de módulo** (containers tintados claros, h-5/h-6) | `duotone` | Discreto mas refinado |
| **Eyebrow chips** (chips coloridos com ícone pequeno) | `duotone` ou `bold` | Depende do tamanho — bold em <h-5 |
| **Ferramentas** (tools grid em cards brancos) | `duotone` | Look limpo, presença adequada |

### 7.3 Ícones lucide ainda em uso

Funcionais: `ArrowRight, CheckCircle2, ChevronDown, Clock, Calendar, Users, MapPin, Mail, Instagram, Menu, X, Lock, Lightbulb, Sparkles` (alguns).

(Vários ícones de domínio — Cog, Trophy, Award, Brain, etc. — foram migrados pra Phosphor nas páginas de destaque.)

### 7.2 Tamanhos padrão

| Contexto | Tailwind |
|---|---|
| Chip / eyebrow | `h-5 w-5` ou `h-6 w-6` (sempre `shrink-0`) |
| Botão (junto a texto) | `h-4 w-4` |
| Card icon (em container colorido) | `h-6 w-6` ou `h-7 w-7` |
| Lista de features | `h-5 w-5` |

### 7.3 Padrão ícone em "pílula" colorida (cards de pilares)

```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
  <Icon className="h-6 w-6" />
</div>
```

---

## 8. Componentes Reutilizáveis

### 8.1 Botão CTA Primário

```tsx
<a className="inline-flex items-center gap-2 rounded-full bg-st-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:scale-[1.03] glow-green">
  <MessageCircle className="h-4 w-4" />
  Agendar aula experimental grátis
</a>
```

### 8.2 Botão CTA Secundário

```tsx
<Link className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-st-blue-dark transition hover:border-primary/60 hover:text-primary">
  Ver programas <ArrowRight className="h-4 w-4" />
</Link>
```

### 8.3 Card padrão (pilares / o que se aprende)

```tsx
<div className="group h-full rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
  {/* icon pill, h3, p */}
</div>
```

### 8.4 ProgramBand (banda colorida de programa)

Componente em [src/routes/index.tsx](src/routes/index.tsx). Props:

```ts
{
  bg: "bg-program-create" | "bg-program-jr" | "bg-program-camps" | "bg-program-academies";
  age: string;          // "8 a 14 anos"
  brand: string;        // "SANTOS TECH"
  title: string;        // "CREATE"
  description: ReactNode;
  image, imageAlt;
  reverse?, curveTop?, curveBottom?;
}
```

**Descrição deve seguir o padrão:** `<p>hook</p>` → `<ProgramFeatures items={[…]} />` → `<p>fechamento</p>`.

### 8.5 Reveal (animação de entrada)

Sempre envolva blocos de conteúdo em `<Reveal>` para preservar a sensação de movimento da home.

### 8.6 AgeBlock (bloco de detalhe de idade/curso)

Usado em páginas overview de programa pra mostrar o resumo de cada curso/idade. Hoje vive dentro de [src/routes/cursos.junior.index.tsx](src/routes/cursos.junior.index.tsx). Se for reutilizado em outro programa, extrair pra `src/components/`.

Estrutura: imagem polaroid (com glow soft na cor do programa) + eyebrow + título + descrição + grid 2 colunas (Ementa | Ferramentas) + callout "O que ele leva pra casa". Aceita prop `href` pra linkar pra página de curso detalhada (`/cursos/<programa>/<curso>`).

### 8.7 Card central sobre fundo da cor do programa

Padrão "Método X" (inspirado no CodeNinjas) — fundo gradient da cor do programa, dotted-bg, e 4 pilares dentro com ícone em pílula `bg-{cor}-soft/40 text-{cor}-soft` + título branco + descrição `text-white/85`.

### 8.8 Selos / progressão por níveis

Quando o curso tem sistema próprio de progressão (ex.: "Passaporte do Inventor" do JR 5–6: Faísca → Circuito → Engrenagem → Foguete → Estrela Tech), renderizar como **trilha horizontal de 5 ícones** com:

- Ícone `lucide-react` único por nível (Zap · Cpu · Cog · Rocket · Award)
- Cor própria por nível (graduação visível de progresso)
- Nome do selo abaixo
- Linha conectora entre selos (trilha)

Esse padrão dá ao pai a sensação visual de "meu filho está avançando".

---

## 9. Padrões de Seção

Toda nova página deve combinar destes blocos, **nesta ordem geral**:

1. **Hero** com gradiente claro `from-[#e6f1fa] via-[#f3f8fc] to-white`, fundo `radial-gradient` pontilhado, e blobs azul + verde flutuando. Headline em texto + sub + CTA primário + CTA secundário.
2. **Wave divider** entre seções claras e coloridas:

   ```tsx
   <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[100px]">
     <path d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,90 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
   </svg>
   ```

3. **Stats bar** com 4 números grandes (`text-4xl sm:text-5xl text-primary`).
4. **Bandas coloridas** (ProgramBand) com curvas (`curveTop`/`curveBottom`).
5. **Pilares / grid de cards** (fundo branco ou `bg-muted/40`).
6. **Comparativo 2 colunas** (cards lado a lado).
7. **Galeria** (4 imagens quadradas).
8. **CTA final** num cartão colorido (`bg-program-create`) com `dotted-bg` em cima.

### 9.1 Estrutura visual de peça única (post, banner, criativo)

Ordem ideal, do guia:

1. **Título forte** (1 linha, alto contraste)
2. **Subtítulo / complemento curto**
3. **Destaque visual principal** (imagem, ilustração ou número grande)
4. **Apoio gráfico** (ícone, shape, barra de progresso)
5. **CTA ou fechamento**

> Regra do guia: **a pessoa precisa entender a peça em poucos segundos**.

### 9.2 Hero de página de programa

Template oficial pra páginas overview de programa (JR, CREATE, CAMPS, ACADEMIES). Difere do hero da home (que é claro/azul).

- **Fundo:** `linear-gradient(135deg, {cor-do-programa} 0%, {cor-mais-escura} 100%)` + `.dotted-bg opacity-20` + 2 blobs flutuantes (`animate-blob`) usando a cor do programa e seu apoio.
- **Texto:** todo em branco. Eyebrow é chip com borda translúcida.
- **Headline:** gigante (`text-7xl sm:text-8xl lg:text-9xl`) — costuma ser só o nome do programa.
- **Sub:** `text-lg sm:text-xl text-white/90`.
- **Visual:** imagem clipada por SVG blob (vide hero do JR).
- **CTAs:** primário verde (`bg-st-green` + `glow-green`, sempre **WhatsApp pra agendar**), secundário borda branca translúcida.
- **Wave divider** em branco no fim, transitando pra próxima seção clara.

### 9.3 Página overview de programa (`/cursos/<programa>`)

Sequência canônica:

1. Hero do programa (§ 9.2)
2. "Por que começar / Por que esse programa" — texto curto, fundo branco
3. **O método** — card sobre fundo da cor do programa, 4 pilares (§ 8.7)
4. Intro dos blocos (curta) — fundo branco
5. **AgeBlock por curso** alternando `reverse` (§ 8.6)
6. CTA final na cor do programa

### 9.4 Página de curso individual (`/cursos/<programa>/<curso>`) — **sales page**

Cursos têm investimento alto. A página precisa cheirar a profissionalismo e responder objeções. Sequência obrigatória:

1. **Hero do curso** — cor do programa, eyebrow com idade, H1 com nome do curso, sub explicando, CTAs.
2. **Resumo em números** — barra com 4 métricas (semanas, horas, aulas, faixa etária).
3. **Para quem é** — perfil do aluno + checklist de 3 itens ("ideal se..." / "não é pra...").
4. **Como funciona** — duração, frequência, carga horária. Explicar formato 1×2h vs 2×1h.
5. **Sistema de progressão / selos** — se houver (§ 8.8).
6. **Os módulos** — 4 cards com nome, duração, foco, ferramenta, selo conquistado.
7. **Ementa completa aula a aula** — `Accordion` (shadcn) com 1 item por módulo, expandindo pra mostrar as aulas.
8. **Ferramentas usadas** — grid mostrando cada ferramenta, gratuita ou paga, e função.
9. **Metodologia Santos Tech** — pilares do método (turmas pequenas, professores treinados, ambiente).
10. **FAQ** — `Accordion` com objeções de pai (preço, idade certa, leitura, frequência, fica frustrado?).
11. **CTA final forte** — repete o CTA verde + reduz fricção ("visita guiada, sem compromisso").

### 9.5 Routing por programa (TanStack Router file-based)

Convenção: **a rota intermediária é sempre um layout** que renderiza só `<Outlet />`. O conteúdo overview vai em `<rota>.index.tsx`. Cursos individuais ficam como filhos no mesmo nível.

```text
src/routes/
  cursos.tsx                      ← layout: <Outlet />
  cursos.index.tsx                ← overview de /cursos
  cursos.junior.tsx               ← layout do JR: <Outlet />
  cursos.junior.index.tsx         ← overview de /cursos/junior
  cursos.junior.5-6-anos.tsx      ← curso específico
  cursos.junior.6-7-anos.tsx
  cursos.junior.7-8-anos.tsx
```

**Por quê:** TanStack Router (dot-notation) trata `cursos.junior.tsx` como **pai** de `cursos.junior.5-6-anos.tsx`. Se a pai renderiza conteúdo direto (sem `<Outlet />`), a filha nunca aparece — a URL muda mas o conteúdo continua sendo o da pai. Solução: **pai = só Outlet**, conteúdo da própria rota vai em `.index.tsx`.

### 9.6 Tema por rota (Header + Footer)

**Fonte única da verdade:** [src/lib/program-theme.ts](src/lib/program-theme.ts).

Mapeia `pathname → ProgramKey` e expõe a cor de acento usada em:
- **SiteFooter** — `bg`, `brandHeading`, `brandHeadingAccent`, `links`, `icons` (tema completo).
- **SiteHeader** — só o "TECH" do logo (texto colorido sobre fundo branco).

| Pathname | ProgramKey | Footer bg | Acento (TECH + footer accent) |
|---|---|---|---|
| `/cursos/junior*` | `jr` | `#512374` | `#DEABF7` |
| `/cursos/create*` | `create` | `#04325A` | `#49A8EB` |
| `/cursos/camps*` | `camps` | `#0f5a6b` | `#6EC4CC` |
| `/cursos/academies*` | `academies` | `#020a6b` | `#818CF8` |
| qualquer outra | `default` | `bg-muted/40` | `--primary` |

**Quando adicionar um programa novo** (ex.: `/cursos/clubes`):
1. Adicionar `"clubes"` à union `ProgramKey` em `program-theme.ts`
2. Adicionar a regra `if (pathname.startsWith("/cursos/clubes")) return "clubes"` em `getProgramKey()`
3. Adicionar a cor no `ACCENT_COLOR` map
4. Adicionar o tema completo em `themes` no `SiteFooter`

Header e footer pegam a mudança automaticamente — não tocar.

### 9.7 Programa "ano-a-ano" vs "página única"

Nem todo programa tem cursos sequenciais por idade. **Decida a estrutura de routing pelo modelo de venda**:

| Modelo | Exemplos | Routing |
|---|---|---|
| **Ano-a-ano** (curso anual, criança progride sequencialmente) | JR (3 cursos), CREATE (6 cursos) | Layout + `.index` + 1 arquivo por curso (§ 9.5) |
| **Página única** (catálogo de opções paralelas, sem progressão obrigatória) | CAMPS (semanas temáticas) | 1 arquivo só (`cursos.<programa>.tsx`) |

**Por quê página única para CAMPS:** as semanas temáticas (Roblox, Minecraft, Robótica, etc.) são independentes — o pai escolhe a semana que cabe na agenda, não há "ano 1 → ano 2". Criar sub-rotas por tema só faz sentido se cada tema virar uma sales page robusta (não é o caso hoje).

**Quando migrar de página única pra multi-rota:** quando uma semana temática começar a ter conteúdo extenso (currículo detalhado próprio, FAQ específica, depoimentos). Aí extrai pra `/cursos/camps/roblox`, etc. seguindo o padrão JR/CREATE.

Implementação em [src/components/site-footer.tsx](src/components/site-footer.tsx) com objeto `themes` indexado por nome. Pra adicionar tema novo: declare e adicione `if` em `useFooterTheme()`. Header **não muda** — só o footer.

---

## 10. Imagens e Fotos

### 10.1 Preferir

- Imagens com **energia**
- Crianças/jovens **engajados** (não posados)
- Tecnologia **em uso** (mão na massa)
- Ambiente **organizado**
- Sensação de **criatividade e descoberta**
- Pessoas mostradas devem ser de **aulas reais da Santos Tech** (não stock genérico)

### 10.2 Evitar

- Fotos escuras demais
- Banco de imagem com cara artificial
- Fundos poluídos
- Crianças entediadas ou paradas
- Imagens datadas / com cara de "escolinha"

### 10.3 Implementação

- Sempre `object-cover`, `rounded-2xl` ou `rounded-3xl`.
- Bordas brancas grossas (`border-[4–6px] border-white`) para "polaroid".
- Hero usa colagem com `rotate-[-6deg]` a `rotate-[4deg]` e animações `float-*`.
- Alt text descritivo em PT-BR: "Aluno do CREATE programando na Santos Tech".

---

## 11. O que EVITAR (regra dura do guia)

Lista negra. Se a peça tem qualquer um destes, refaz:

- ❌ Poluição visual
- ❌ Excesso de texto na peça
- ❌ Excesso de sombras
- ❌ Muitos efeitos ao mesmo tempo
- ❌ Cliparts genéricos
- ❌ Visual infantil demais
- ❌ Visual de "escola antiga" / quadro-negro
- ❌ Layout apertado, sem respiro
- ❌ Cores fora da paleta
- ❌ Fontes amadoras ou decorativas
- ❌ Nomes de concorrente: `dojo, sensei, ninja, belts`
- ❌ Insinuar parceria oficial com Microsoft (a escola **usa** MakeCode, não tem parceria)
- ❌ Prometer emprego, retorno financeiro ou resultado garantido

---

## 12. Acessibilidade

- Contraste mínimo AA — verde/azul Santos Tech sobre branco passam; sobre fundo colorido, use `text-white` ou `text-white/85`.
- Todo `<a>` externo: `target="_blank" rel="noreferrer"`.
- Botão "puro" (ex.: menu mobile): incluir `aria-label`.
- `<img>` sempre com `alt`.

---

## 13. Voice & Tone (Copy)

| Faça | Não faça |
|---|---|
| "Na primeira aula, seu filho monta o próprio jogo." | "Currículo gamificado com módulos progressivos." |
| "Aqui ele cria. Sai na frente para o futuro." | "Habilidades 4.0 para o profissional de amanhã." |
| Idade + lugar + ferramenta real (Roblox, MakeCode) | Adjetivos vagos sem prova ("revolucionário", "incrível") |
| Marcador `[VERIFICAR: X]` se não tiver certeza do número | Inventar estatística ou prêmio |
| "Aulas presenciais em Ribeirão Preto" | "Plataforma omnichannel de aprendizagem" |

---

## 14. Checklist para Nova Página / Peça

Antes de publicar, conferir **todos**:

### Identidade
- [ ] Está usando **as cores da paleta** (sem hex aleatório)?
- [ ] **Título forte** e fácil de ler em poucos segundos?
- [ ] Tem **contraste suficiente**?
- [ ] Parece **moderna e tecnológica**?
- [ ] Parece **divertida sem ser infantil demais**?
- [ ] **Funciona bem no celular**?
- [ ] **Não tem informação demais**?
- [ ] Está **coerente com o resto do site**?

### Código
- [ ] Usei `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` em toda seção?
- [ ] Tipografia segue a escala (`font-black` em headlines, `font-bold` em H3 de card)?
- [ ] Cores vieram dos tokens (`--st-*` ou shadcn), nunca hex direto?
- [ ] Cada bloco de conteúdo está dentro de `<Reveal>`?
- [ ] Tem **1 CTA primário dominante** com `bg-st-green` + `glow-green`?
- [ ] Ícones são `lucide-react`?
- [ ] Imagens têm `alt` descritivo em PT-BR?
- [ ] Links externos têm `target="_blank" rel="noreferrer"`?
- [ ] Meta `head` com `title`, `description`, `og:*` e `canonical` definidos na rota?
- [ ] Testei em **mobile** (≤640px), **tablet** (≥768px) e **desktop** (≥1024px)?
- [ ] Copy passa pelo filtro do tom de voz (sem hype, com promessa concreta)?

---

## 15. Resumo ultraobjetivo (do guia)

**Use sempre:**
`#187ABF` · `#0E2937` (escuro do guia — atualmente `#04325A` no código) · `#0DB88F` · `#FFFFFF` · `#000000` (apoio)

**Use como apoio:**
`#0067BE` · `#496B84` · `#F5F8FA` · `#212121`

**Por programa, quando necessário:**
CREATE → `#0067BE` · JR → `#512374` (apoio `#DEABF7`) · CAMPS → `#1C8299` · ACADEMIES → `#0411A0`

**Estilo:** moderno · tecnológico · organizado · vibrante · limpo

**Tipografia:** sem serifa · forte nos títulos · limpa no corpo · fácil leitura mobile

**Elementos:** ícones simples · linhas e shapes tecnológicos · barras de progresso · cards arredondados · glow leve · destaques visuais bem controlados

**Evitar:** excesso de efeito · excesso de informação · visual infantilizado · fontes ruins · arte poluída · fugir da paleta

---

## 16. Onde está cada coisa

| Coisa | Caminho |
|---|---|
| Tokens, animações, gradientes, glows | [src/styles.css](src/styles.css) |
| Tokens shadcn (`components.json`) | [components.json](components.json) |
| Componentes `ui/` (shadcn) | [src/components/ui/](src/components/ui/) |
| Header + Footer | [src/components/site-header.tsx](src/components/site-header.tsx) / [site-footer.tsx](src/components/site-footer.tsx) |
| Animação de scroll | [src/components/reveal.tsx](src/components/reveal.tsx) + [src/hooks/use-reveal.ts](src/hooks/use-reveal.ts) |
| Utilitário `cn()` | [src/lib/utils.ts](src/lib/utils.ts) |
| Home (referência viva) | [src/routes/index.tsx](src/routes/index.tsx) |
| SEO + GEO helpers (schema.org, canonical) | [src/lib/seo.ts](src/lib/seo.ts) |
| Tema por programa (acentos light/dark) | [src/lib/program-theme.ts](src/lib/program-theme.ts) |
| Componentes compartilhados de curso | [src/components/course-page.tsx](src/components/course-page.tsx) |
| Otimização de imagens | [scripts/optimize-images.mjs](scripts/optimize-images.mjs) + [src/components/img.tsx](src/components/img.tsx) |
| Template pra novo curso | [templates/novo-curso.template.tsx](templates/novo-curso.template.tsx) |

---

## 17. Adicionar um novo curso (recipe)

**Cenário comum:** vai entrar um curso novo (ex: "Informática Básico", "Programação Adultos"). Em vez de inventar, siga esta receita:

1. **Copie o template:** [templates/novo-curso.template.tsx](templates/novo-curso.template.tsx) → `src/routes/cursos.<programa>.<slug>.tsx`. O instruction block no topo do template tem todos os passos.

2. **Edite o path da rota** dentro de `createFileRoute(...)` pra bater com o nome do arquivo. Convenção:
   - Arquivo: `cursos.informatica.basico.tsx`
   - Rota: `/cursos/informatica/basico`

3. **Preencha todos os blocos marcados `// TODO`** — `pageMeta`, `THEME`, `MODULES`, `FAQ`, `coursePageSchemas`, props do `<CourseHero>`, etc.

4. **Adicione a URL** ao [public/sitemap.xml](public/sitemap.xml) com `<priority>0.8</priority>`.

5. **Se for programa novo (não é variação do JR/CREATE/etc):**
   - Adicione entrada em [src/lib/program-theme.ts](src/lib/program-theme.ts) (ProgramKey, ACCENT_DARK, ACCENT_SOFT, getProgramKey)
   - Adicione link no header em [src/components/site-header.tsx](src/components/site-header.tsx) (`PROGRAMAS_PRINCIPAIS` ou `PROGRAMAS_ADICIONAIS`)
   - Adicione tema de footer em [src/components/site-footer.tsx](src/components/site-footer.tsx) (`themes` record)

6. **Rode `npm run dev` uma vez** — TanStack Router gera `src/routeTree.gen.ts` automaticamente com a nova rota.

7. **Confira `npm run build`** localmente. Se passar, commit + push. Disparar deploy manual no Easypanel (ver [DEPLOY.md](DEPLOY.md)).

**Por que isso importa pra SEO/GEO:** cada novo curso registrado via template já vem com `Course` schema (Google), `BreadcrumbList`, `FAQPage` e meta tags otimizadas. LLMs (ChatGPT, Perplexity, Claude) e Google entendem automaticamente o que é o curso, faixa etária, programa pai e onde fica.

---

## 18. SEO + GEO (Generative Engine Optimization)

**SEO tradicional** (Google/Bing) e **GEO** (LLMs como ChatGPT, Perplexity, Claude com web search) compartilham as mesmas práticas. O que fizemos:

### Schema.org JSON-LD
Implementado em [src/lib/seo.ts](src/lib/seo.ts) + componente [src/components/json-ld.tsx](src/components/json-ld.tsx).
- **Root** (todas as rotas): `Organization` (EducationalOrganization + LocalBusiness) + `WebSite`
- **Rotas internas**: `BreadcrumbList`
- **Páginas de curso**: `Course` schema com `typicalAgeRange`, `provider`, `courseMode`
- **FAQs**: `FAQPage` schema (cada par Q&A vira `Question`/`Answer`)

### Meta tags
- **Canonical absoluto** (`https://santos-tech.com/cursos`) em todas as rotas via `pageMeta()` helper.
- **Meta description rica** — diz o quê + pra quem + onde + diferencial. Max ~155 chars.
- **GEO signals**: `geo.region`, `geo.placename`, `geo.position`, `ICBM` no `<head>`.
- **`lang="pt-BR"`** no `<html>` (não `"en"`).
- **`robots.txt`** + **`sitemap.xml`** em `public/`.

### Copy pra LLMs
Frases declarativas curtas (sujeito + verbo + complemento) em vez de marketing abstrato. LLMs extraem fatos, não slogans.

Ruim (marketing):
> Onde o tempo de tela vira a habilidade do futuro.

Bom (factual + citável):
> A Santos Tech é uma escola presencial de programação para crianças e adolescentes de 5 a 14 anos em Ribeirão Preto.

Use AS DUAS — slogan na home grande, factual em parágrafos abaixo e em metas.

---

**Em dúvida?** Olhe a [home](src/routes/index.tsx) — ela é a referência viva. Replique padrões dela em vez de inventar.
