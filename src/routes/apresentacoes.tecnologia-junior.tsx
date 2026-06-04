import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Gamepad2,
  Clock,
  Users,
  CalendarDays,
  Trophy,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MesesGrade, type MesGrade } from "@/components/ementa-meses";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import { noindexMeta } from "@/lib/seo";

export const Route = createFileRoute("/apresentacoes/tecnologia-junior")({
  component: TecJuniorApresentacao,
  head: () =>
    noindexMeta({
      title: "Tecnologia Júnior — Apresentação e Ementa | Santos Tech (interno)",
    }),
});

const GREEN = "#0DB88F";
const GREEN_DARK = "#0A6E57";
const GREEN_GRAD = "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)";

const METODO = [
  { etapa: "Aquecimento / revisão", min: "10 min", o: "Relembrar a aula anterior e mostrar o que vão criar hoje." },
  { etapa: "Conteúdo novo guiado", min: "15 min", o: "O professor ensina o conceito novo passo a passo." },
  { etapa: "Mão na massa", min: "25 min", o: "A criança faz sozinha o desafio da aula (o professor ajuda)." },
  { etapa: "Desafio extra + compartilhar", min: "10 min", o: "Quem terminou faz o extra; todos mostram o que criaram." },
];

// ── ANO 1 — Primeiros jogos e mundos (blocos → 2D com arte → 3D → Roblox) ─────
// Sequência: Minecraft · Minecraft · Scratch · Scratch · Construct · Aseprite ·
// Aseprite · Construct · MagicaVoxel · Roblox · Maya · Roblox  (sem mês "projeto"
// solto — o projeto nasce dentro do par de ferramentas).
const ANO1_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/2", ferramenta: "Minecraft + MakeCode", cor: "", logos: ["minecraft", "makecode"], foco: "Primeiros comandos e o Agente", semanas: ["O primeiro comando: digitar uma palavra e o jogo obedecer (evento).", "Controlar o Agente (robô) numa sequência de passos.", "Repetição (loop): o Agente faz fileiras sem cansar.", "Mini-construção feita por código."] },
  { mes: "Mês 2", projeto: "2/2", ferramenta: "Minecraft + MakeCode", cor: "", logos: ["minecraft", "makecode"], foco: "Construir e mini-jogos", semanas: ["Variável: a 'caixinha' que muda a construção.", "Condição (se/então): o jogo decide.", "Eventos do mundo + placar (pontos que sobem).", "Um mini-jogo jogável no Minecraft."] },
  { mes: "Mês 3", projeto: "1/2", ferramenta: "Scratch", cor: "", foco: "Meu primeiro jogo 2D", semanas: ["Palco, personagens e movimento.", "Eventos: reagir a cliques e teclas, com sons.", "Pontuação e mensagens na tela.", "Primeiro joguinho 2D próprio."] },
  { mes: "Mês 4", projeto: "2/2", ferramenta: "Scratch", cor: "", foco: "Jogos com regras", semanas: ["Colisão e fases.", "Vidas e fim de jogo.", "Dificuldade e sorteio (aleatório).", "Um jogo 2D com regras."] },
  { mes: "Mês 5", projeto: "1/4", ferramenta: "Construct 3", cor: "", foco: "Começar um jogo 2D de verdade", semanas: ["Conhecer o Construct: cenário e objetos.", "Eventos (regras) sem digitar: 'quando... faça...'.", "Movimento e controles do personagem.", "O esqueleto do jogo funcionando (com arte de teste)."] },
  { mes: "Mês 6", projeto: "2/4", ferramenta: "Aseprite", cor: "", foco: "Desenhar os sprites do jogo (pixel art)", semanas: ["Conhecer o Aseprite: frames e camadas.", "Paleta de cores e desenhar um objeto (16×16).", "Desenhar o personagem do jogo.", "Conjunto de sprites pro jogo do Construct."] },
  { mes: "Mês 7", projeto: "3/4", ferramenta: "Aseprite", cor: "", foco: "Dar vida: animação", semanas: ["Idle de 2 frames ('respirando') — bom timing vale mais que muitos frames.", "Onion skin pra alinhar os frames.", "Moeda girando (4 frames) e item flutuando.", "Exportar GIF / sprite sheet pro jogo."] },
  { mes: "Mês 8", projeto: "4/4", ferramenta: "Construct 3", cor: "", foco: "Montar o jogo com a arte própria", semanas: ["Trazer os sprites desenhados pro jogo.", "Pontos, vidas e tela de vitória.", "Inimigos, colisão e sons.", "Jogo 2D completo, com arte própria (entregável)."] },
  { mes: "Mês 9", projeto: "1/2", ferramenta: "MagicaVoxel", cor: "", foco: "Arte 3D em cubinhos + Impressão 3D", semanas: ["O que é 3D: girar e ver em volta (criar em voxel).", "Criar um personagem de cubinhos.", "Cores, detalhes e variações.", "Preparar e imprimir em 3D (levar pra casa)."] },
  { mes: "Mês 10", projeto: "2/2", ferramenta: "Roblox (Criador Iniciante)", cor: "", foco: "Meu mundo no Roblox", semanas: ["Roblox Studio: terreno e cenário.", "Colocar peças, objetos e decoração.", "Ponto de partida e checkpoints.", "Obstáculos simples (obby)."] },
  { mes: "Mês 11", projeto: "1/2", ferramenta: "Maya", cor: "", foco: "Primeiro contato com o 3D profissional", semanas: ["Conhecer o Maya (software da indústria) — kit travado, poucos botões.", "Formas básicas viram objetos.", "Mover, girar, escalar e colorir.", "Um objeto/asset simples pra levar pro Roblox."] },
  { mes: "Mês 12", projeto: "2/2", ferramenta: "Roblox", cor: "", foco: "Publicar meu jogo + Demo Day", semanas: ["Trazer o asset do Maya pro mundo.", "Montar o jogo e ajustar.", "Publicar o jogo.", "Demo Day pros pais + certificado do Ano 1."] },
];

// ── ANO 2 — IA, arte animada e os primeiros modelos 3D nos jogos ──────────────
// Sequência: Teachable Machine · Teachable Machine · Aseprite · Construct ·
// Aseprite · Construct · PROJETO (polir) · Maya · Roblox · Maya · Roblox · PROJETO
const ANO2_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Teachable Machine", cor: "", foco: "Conhecer a IA", semanas: ["O que é IA e como ela aprende com exemplos.", "Treinar a IA com imagens.", "Treinar com sons ou poses.", "Testar a IA treinada."] },
  { mes: "Mês 2", ferramenta: "Teachable Machine + Scratch", cor: "", logos: ["teachable", "scratch"], foco: "IA num projeto", semanas: ["Conectar a IA ao Scratch.", "Controlar algo com gesto/som.", "Criar um mini-projeto que usa a IA.", "Apresentar o que a IA faz."] },
  { mes: "Mês 3", ferramenta: "Aseprite", cor: "", foco: "Sprites pro jogo do ano", semanas: ["Revisão do Aseprite + boas práticas.", "Desenhar o personagem principal.", "Tileset simples (peças de cenário).", "Conjunto de sprites pro jogo."] },
  { mes: "Mês 4", ferramenta: "Construct 3", cor: "", foco: "Começar o jogo 2D (mais sistemas)", semanas: ["Montar o jogo com os sprites.", "Variáveis e vários níveis.", "Power-ups e itens.", "Esqueleto do jogo com sistemas."] },
  { mes: "Mês 5", ferramenta: "Aseprite", cor: "", foco: "Animar o jogo", semanas: ["Walk cycle de 4 frames (contato/passagem).", "Idle e uma ação (ataque/pulo).", "Efeitos: poeira e explosão (pequeno → grande).", "Exportar as animações pro jogo."] },
  { mes: "Mês 6", ferramenta: "Construct 3", cor: "", foco: "Fechar o jogo 2D", semanas: ["Trazer as animações pro jogo.", "Inimigos, colisão e dificuldade.", "Menu, telas e recorde.", "Jogo 2D completo."] },
  { mes: "Mês 7", ferramenta: "Projeto 1 — Polir e publicar", cor: "", foco: "Deixar o jogo redondo", semanas: ["Playtest com os colegas.", "Corrigir bugs e ajustar a dificuldade.", "Caprichar no visual e nos sons.", "Publicar e compartilhar (entregável grande)."] },
  { mes: "Mês 8", ferramenta: "Maya", cor: "", foco: "Modelar pro jogo (vertex color)", semanas: ["Revisão do Maya + formas.", "Modelar um objeto/asset do jogo.", "Vertex color: pintar o modelo.", "Asset 3D próprio."] },
  { mes: "Mês 9", ferramenta: "Roblox", cor: "", foco: "Aplicar o modelo no mundo", semanas: ["Trazer o asset do Maya pro Roblox.", "Montar o cenário com os modelos.", "Iluminação e clima.", "Mundo navegável com arte própria."] },
  { mes: "Mês 10", ferramenta: "Maya", cor: "", foco: "Mais modelos + Impressão 3D", semanas: ["Modelar um personagem simples.", "Vertex color e detalhes.", "Preparar e imprimir em 3D.", "Personagem impresso (entregável)."] },
  { mes: "Mês 11", ferramenta: "Roblox", cor: "", foco: "Jogabilidade", semanas: ["Spawns e checkpoints.", "Itens, moedas e obstáculos.", "Regra de vitória.", "Jogo jogável com os modelos."] },
  { mes: "Mês 12", ferramenta: "Projeto 2 — Publicar no Roblox", cor: "", foco: "Lançar + Demo Day", semanas: ["Finalizar e testar o jogo.", "Publicar no Roblox.", "Demo Day pros pais.", "Certificado do Ano 2."] },
];

// ── ANO 3 — Primeiro código (Lua, scripts prontos) e 3D mais sério ────────────
// Sequência: Aseprite · Construct · Construct (2D avançado) · Roblox+Lua ×3
// (projeto grande) · PROJETO (polir+lançar) · Maya · Maya · Roblox+Lua ×3
const ANO3_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Aseprite", cor: "", foco: "Pixel art avançada", semanas: ["Revisão + luz e sombra na paleta.", "Tileset de cenário (peças que encaixam).", "Personagem com mais detalhes.", "Conjunto de sprites pro jogo 2D."] },
  { mes: "Mês 2", ferramenta: "Construct 3", cor: "", foco: "Jogo 2D mais avançado", semanas: ["Montar o jogo com os sprites.", "Vários níveis e inimigos com comportamento.", "Power-ups, HUD e loja simples.", "Esqueleto do jogo avançado."] },
  { mes: "Mês 3", ferramenta: "Construct 3", cor: "", foco: "Fechar o 2D avançado", semanas: ["Animações e efeitos.", "Balanceamento e dificuldade.", "Menu, recorde e telas.", "Jogo 2D avançado publicado (entregável)."] },
  { mes: "Mês 4", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "O que é código (script pronto)", semanas: ["O que é um script (vs blocos).", "Ler um script pronto e ver o que ele faz.", "Trocar valores e ver o jogo mudar.", "Um objeto que reage por script."] },
  { mes: "Mês 5", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "Mexer nos scripts", semanas: ["Variáveis no código.", "Mudar comportamento (velocidade, cor, tamanho).", "Juntar dois scripts prontos.", "Um sistema simples (porta, botão, armadilha)."] },
  { mes: "Mês 6", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "Montar o projeto grande", semanas: ["Planejar o jogo grande do ano.", "Construir o mundo (terreno, cenário).", "Aplicar os scripts nas mecânicas.", "Versão jogável inicial."] },
  { mes: "Mês 7", ferramenta: "Projeto 1 — Polir e lançar", cor: "", foco: "Lançar o projeto grande", semanas: ["Playtest com a turma.", "Corrigir bugs e ajustar.", "Publicar o jogo grande.", "Apresentar (entregável grande)."] },
  { mes: "Mês 8", ferramenta: "Maya", cor: "", foco: "Modelagem intermediária", semanas: ["Modelar um asset do jogo.", "Detalhes e proporção.", "Vertex color / materiais.", "Asset 3D próprio."] },
  { mes: "Mês 9", ferramenta: "Maya", cor: "", foco: "Personagem + Impressão 3D", semanas: ["Modelar um personagem.", "Pose e materiais.", "Preparar e imprimir.", "Personagem impresso (entregável)."] },
  { mes: "Mês 10", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "Trazer o 3D pro jogo", semanas: ["Importar os modelos do Maya.", "Montar uma fase nova com eles.", "Scripts pra dar vida aos objetos.", "Fase nova jogável."] },
  { mes: "Mês 11", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "Sistemas de jogo", semanas: ["Pontuação e regras por script.", "Itens e recompensas.", "Ajustes de jogabilidade.", "Jogo mais completo."] },
  { mes: "Mês 12", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "Publicar + Demo Day", semanas: ["Finalizar e testar.", "Publicar a versão final.", "Demo Day pros pais.", "Certificado do Ano 3."] },
];

// ── ANO 4 — Criador completo: 2 jogos, IA e itens 3D pra vender no Roblox ──────
// Sequência: ML for Kids ×2 · PROJETO jogo #1 · Blender · Blender · Roblox ·
// Maya · Maya · Roblox · Maya · Roblox (loja) · PROJETO jogo #2 + loja
const ANO4_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "IA (ML for Kids)", cor: "", foco: "IA que aprende", semanas: ["Treinar um modelo (texto/imagem).", "Como a IA decide — e onde ela erra.", "Usar a IA num mini-projeto.", "Um modelo de IA próprio."] },
  { mes: "Mês 2", ferramenta: "IA (ML for Kids)", cor: "", foco: "IA dentro do jogo", semanas: ["Ideias de IA num jogo (NPC, reconhecimento).", "Conectar a IA a um projeto.", "Testar e ajustar.", "Protótipo com IA (entregável)."] },
  { mes: "Mês 3", ferramenta: "Projeto 1 — Jogo #1", cor: "", foco: "Lançar o primeiro jogo do ano", semanas: ["Definir e planejar o jogo.", "Construir (mundo + mecânicas + IA).", "Testar e polir.", "Publicar o jogo #1 (entregável grande)."] },
  { mes: "Mês 4", ferramenta: "Blender", cor: "", foco: "3D no Blender", semanas: ["Conhecer/avançar no Blender.", "Modelar um asset do jogo.", "Materiais e cores.", "Um modelo próprio."] },
  { mes: "Mês 5", ferramenta: "Blender", cor: "", foco: "Modelo + Impressão 3D", semanas: ["Modelo mais elaborado.", "Preparar pro jogo e pra impressão.", "Imprimir em 3D.", "Peça impressa (entregável)."] },
  { mes: "Mês 6", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "Aplicar o 3D no jogo", semanas: ["Importar os modelos do Blender.", "Montar uma fase com eles.", "Scripts pra dar vida.", "Fase jogável nova."] },
  { mes: "Mês 7", ferramenta: "Maya", cor: "", foco: "Modelar itens vendáveis", semanas: ["Modelar um item/acessório (escopo de loja).", "Proporção pro avatar.", "Vertex color / materiais.", "Um item 3D pronto."] },
  { mes: "Mês 8", ferramenta: "Maya", cor: "", foco: "Mais itens + acabamento", semanas: ["Modelar um segundo item.", "Caprichar no acabamento.", "Preparar pro Roblox.", "Uma coleção de itens."] },
  { mes: "Mês 9", ferramenta: "Roblox + Lua", cor: "", logos: ["roblox", "lua"], foco: "Montar o jogo com os itens", semanas: ["Trazer os itens pro mundo.", "Integrar com as mecânicas.", "Ajustes de jogabilidade.", "Jogo atualizado."] },
  { mes: "Mês 10", ferramenta: "Maya", cor: "", foco: "Item especial da loja", semanas: ["Modelar o item principal da loja.", "Detalhes e materiais.", "Preparar pro upload.", "Item especial pronto."] },
  { mes: "Mês 11", ferramenta: "Roblox", cor: "", foco: "Loja: publicar itens (UGC)", semanas: ["Como funciona a lojinha (UGC) do Roblox.", "Preparar e enviar um item.", "Preço e descrição.", "Item publicado na loja."] },
  { mes: "Mês 12", ferramenta: "Projeto 2 — Jogo #2 + Loja", cor: "", foco: "Lançar tudo + portfólio + Demo Day", semanas: ["Finalizar o jogo #2 (Lua + 3D + IA).", "Publicar o jogo #2.", "Revisar os itens à venda na loja.", "Demo Day final + portfólio → ponte pro CREATE."] },
];

const ANOS = [
  { titulo: "Ano 1", foco: "Primeiros jogos e mundos (blocos → 2D com arte → 3D → Roblox)", ferramentas: "Minecraft · Scratch · Construct 3 · Aseprite · MagicaVoxel · Maya · Roblox", trofeu: "2 jogos: 2D autoral + Roblox", meses: ANO1_MESES },
  { titulo: "Ano 2", foco: "IA, arte animada e os primeiros modelos 3D nos jogos", ferramentas: "Teachable Machine · Aseprite · Construct 3 · Maya · Roblox", trofeu: "Jogo 2D autoral + jogo no Roblox + 1ª IA", meses: ANO2_MESES },
  { titulo: "Ano 3", foco: "Primeiro código (Lua, scripts prontos) e 3D mais sério", ferramentas: "Aseprite · Construct 3 · Roblox + Lua · Maya", trofeu: "Jogo grande no Roblox com código (Lua) + 3D", meses: ANO3_MESES },
  { titulo: "Ano 4", foco: "Criador completo: 2 jogos, IA e itens 3D pra vender", ferramentas: "IA (ML for Kids) · Blender · Maya · Roblox + Lua", trofeu: "2 jogos + itens 3D à venda na loja + portfólio", meses: ANO4_MESES },
];

const CONCEITOS = [
  "Sequência",
  "Repetição (loop)",
  "Variável",
  "Condição (se/então)",
  "Evento",
  "Design de jogos",
  "Pixel art e animação",
  "Modelagem e impressão 3D",
  "Vertex color (pintar 3D)",
  "Primeiro código (Lua)",
  "Treinar uma IA",
  "Publicar e vender (loja Roblox)",
];

const FERRAMENTAS = [
  { n: "Minecraft + MakeCode", d: "Programação em blocos dentro do Minecraft — o gancho perfeito (a criança já ama o jogo)." },
  { n: "Scratch", d: "Plataforma do MIT pra criar jogos arrastando blocos — a base de programação infantil mais usada no mundo." },
  { n: "Construct 3", d: "Motor de jogos 2D sem digitar código: a criança cria jogos montando regras (eventos)." },
  { n: "Aseprite", d: "Onde a criança desenha e ANIMA os próprios personagens em pixel art pra usar nos jogos." },
  { n: "MagicaVoxel", d: "Arte 3D em 'cubinhos' (voxel) — gratuita e divertida." },
  { n: "Maya", d: "Software 3D profissional da Autodesk (cinema e games). Do contato ao avançado, com licença pro aluno." },
  { n: "Blender", d: "Software 3D gratuito e profissional — um segundo programa de modelagem 3D." },
  { n: "Roblox", d: "Onde a criança cria, publica e vende o próprio jogo num motor de jogo de verdade." },
  { n: "Lua", d: "A primeira linguagem de texto do aluno — programa jogos no Roblox (começa com scripts prontos)." },
  { n: "IA (Teachable Machine / ML for Kids)", d: "A criança treina uma inteligência artificial com exemplos e usa nos próprios projetos." },
];

function BackLink({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/apresentacoes"
      className={`inline-flex items-center gap-2 text-sm font-bold transition ${
        light ? "text-white/90 hover:text-white" : "text-st-blue-dark hover:text-primary"
      }`}
    >
      <ArrowLeft className="h-4 w-4" /> Voltar para as apresentações
    </a>
  );
}

function Chip({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-bold backdrop-blur">
      <Icon className="h-4 w-4" /> {children}
    </span>
  );
}

function TecJuniorApresentacao() {
  const [ano, setAno] = useState(0);
  const atual = ANOS[ano];
  const nProjetos = atual.meses.filter((m) => m.projeto?.startsWith("1/")).length;

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-14 text-white" style={{ background: GREEN_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <Gamepad2 className="pointer-events-none absolute -bottom-12 -right-10 h-72 w-72 rotate-12 text-white/10" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackLink light />
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Gamepad2 className="h-8 w-8" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Crianças · Tecnologia</p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Tecnologia Júnior</h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            A criança aprende a <strong>criar a tecnologia</strong> — não só a usar. Da lógica aos
            jogos, do 3D ao primeiro código, com ferramentas que mudam a cada ano.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Chip icon={Users}>5 a 9 anos</Chip>
            <Chip icon={CalendarDays}>Trilha de 4 anos</Chip>
            <Chip icon={Clock}>2h por semana</Chip>
            <Chip icon={Trophy}>2 projetos por ano</Chip>
          </div>
        </div>
      </section>

      {/* COMO É CADA AULA */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: GREEN }}>Como é cada aula</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">2 horas por semana, com ritmo</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METODO.map((m, i) => (
              <Reveal key={m.etapa} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white" style={{ background: GREEN_DARK }}>{i + 1}</span>
                    <span className="text-xs font-black uppercase tracking-wider" style={{ color: GREEN }}>{m.min}</span>
                  </div>
                  <h3 className="mt-3 font-black text-st-blue-dark">{m.etapa}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GRADE — ANO A ANO (seletor) — banda colorida */}
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: GREEN_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">A grade, ano a ano</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Escolha o ano e veja os 12 meses</h2>
            <p className="mt-3 text-white/90">
              As ferramentas se intercalam de propósito: cria-se a arte/modelo numa ferramenta e
              volta-se pro motor de jogo pra aplicar — igual a um estúdio de verdade.{" "}
              <strong>Clique num mês</strong> para ver o que é trabalhado em cada semana.
            </p>
          </Reveal>

          {/* tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {ANOS.map((a, i) => {
              const ativo = i === ano;
              return (
                <button
                  key={a.titulo}
                  type="button"
                  onClick={() => setAno(i)}
                  className={`rounded-full px-5 py-2.5 text-sm font-black uppercase tracking-wider transition ${
                    ativo ? "bg-white shadow-md" : "border-2 border-white/40 text-white hover:bg-white/10"
                  }`}
                  style={ativo ? { color: GREEN_DARK } : undefined}
                >
                  {a.titulo}
                </button>
              );
            })}
          </div>

          {/* resumo do ano ativo */}
          <div className="mt-6 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-white">{atual.titulo} — {atual.foco}</h3>
                <p className="mt-1 text-sm text-white/85">{atual.ferramentas}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold" style={{ color: GREEN_DARK }}>
                <Trophy className="h-4 w-4" /> {atual.trofeu}
              </span>
            </div>
          </div>

          {/* legenda do selo de projeto */}
          {nProjetos > 0 ? (
            <div className="mt-4 flex flex-wrap items-center gap-2.5 rounded-xl bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur">
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-black" style={{ color: GREEN_DARK }}>
                <ToolLogo name="projeto" className="h-4 w-4" /> 2/4
              </span>
              <span>
                O selo mostra o <strong>projeto do ano</strong> de cada mês — ex.: <strong>2/4</strong> = 2º mês
                de um projeto de 4 meses. São <strong>{nProjetos} projetos</strong> no {atual.titulo}.
              </span>
            </div>
          ) : null}

          <div className="mt-8">
            <MesesGrade meses={atual.meses} accent={GREEN_DARK} />
          </div>

          {/* Conceitos */}
          <Reveal className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-white" />
              <h3 className="font-black text-white">Conceitos que o aluno domina na trilha</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONCEITOS.map((c) => (
                <span key={c} className="rounded-full border border-white/40 px-3.5 py-1.5 text-sm font-bold text-white">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FERRAMENTAS — banda colorida */}
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: GREEN_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">As ferramentas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">O que seu filho vai usar</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FERRAMENTAS.map((f) => (
              <div key={f.n} className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ToolLogo name={logoKey(f.n)} className="h-8 w-8" />
                </span>
                <div>
                  <p className="font-black">{f.n}</p>
                  <p className="mt-1 text-sm text-white/85">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLTAR */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackLink />
        </div>
      </section>
    </div>
  );
}
