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

// ── ANO 1 — Primeiros jogos e mundos (lúdico, blocos) ────────────────────────
const ANO1_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Minecraft + MakeCode", cor: "", foco: "Primeiros comandos e o Agente", semanas: ["O primeiro comando: digitar uma palavra e o jogo obedecer (evento).", "Controlar o Agente (robô) numa sequência de passos.", "Repetição (loop): o Agente faz fileiras sem cansar.", "Mini-construção feita por código."] },
  { mes: "Mês 2", ferramenta: "Minecraft + MakeCode", cor: "", foco: "Construir e mini-jogos", semanas: ["Variável: a 'caixinha' que muda a construção.", "Condição (se/então): o jogo decide.", "Eventos do mundo + placar (pontos que sobem).", "Um mini-jogo jogável no Minecraft."] },
  { mes: "Mês 3", ferramenta: "Scratch", cor: "", foco: "Meu primeiro jogo 2D", semanas: ["Palco, personagens e movimento.", "Eventos: reagir a cliques e teclas, com sons.", "Pontuação e mensagens na tela.", "Primeiro joguinho 2D próprio."] },
  { mes: "Mês 4", ferramenta: "Scratch", cor: "", foco: "Jogos com regras", semanas: ["Colisão e fases.", "Vidas e fim de jogo.", "Dificuldade e sorteio (aleatório).", "Um jogo 2D com regras."] },
  { mes: "Mês 5", ferramenta: "Construct 3", cor: "", foco: "Jogos sem digitar código", semanas: ["Conhecer o Construct: cenário e objetos.", "Eventos (regras) sem digitar: 'quando... faça...'.", "Movimento e controles do personagem.", "Um joguinho funcionando."] },
  { mes: "Mês 6", ferramenta: "Construct 3", cor: "", foco: "Mecânicas de jogo", semanas: ["Pontos, vidas e tela de vitória.", "Inimigos e colisão.", "Sons e efeitos.", "Um jogo mais completo no Construct."] },
  { mes: "Mês 7", ferramenta: "Projeto 1 — Jogo 2D", cor: "", foco: "Planejar, criar e apresentar", semanas: ["Planejar o jogo (no papel).", "Construir o jogo (Scratch ou Construct).", "Testar com os colegas e ajustar.", "Apresentar o projeto (entregável grande)."] },
  { mes: "Mês 8", ferramenta: "MagicaVoxel", cor: "", foco: "Arte 3D em cubinhos (voxel)", semanas: ["O que é 3D: girar e ver em volta.", "Criar um personagem de cubinhos.", "Cores e detalhes.", "Variações do personagem."] },
  { mes: "Mês 9", ferramenta: "MagicaVoxel", cor: "", foco: "Cenário 3D + Impressão 3D", semanas: ["Montar um cenário/objeto em voxel.", "Preparar o modelo pra impressora 3D.", "Imprimir de verdade.", "Levar a criação pra casa (entregável)."] },
  { mes: "Mês 10", ferramenta: "Roblox (Criador Iniciante)", cor: "", foco: "Meu mundo no Roblox", semanas: ["Roblox Studio: terreno e cenário.", "Colocar peças, objetos e decoração.", "Ponto de partida e checkpoints.", "Obstáculos simples (obby)."] },
  { mes: "Mês 11", ferramenta: "Projeto 2 — Jogo no Roblox", cor: "", foco: "Construir, publicar e apresentar", semanas: ["Planejar o jogo no Roblox.", "Construir e ajustar.", "Publicar o jogo.", "Demo Day para os pais (entregável grande)."] },
  { mes: "Mês 12", ferramenta: "Maya", cor: "", foco: "Primeiro contato com o 3D profissional", semanas: ["Conhecer o Maya (software da indústria).", "Formas básicas viram objetos.", "Mover, girar e escalar.", "Um objeto simples — gancho pro Ano 2."] },
];

// ── ANO 2 — Criador de jogos com arte própria ────────────────────────────────
const ANO2_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Construct 3", cor: "", foco: "Jogos com mais sistemas", semanas: ["Revisão + variáveis no Construct.", "Vários níveis e progressão.", "Power-ups e itens.", "Um jogo com sistemas."] },
  { mes: "Mês 2", ferramenta: "Construct 3", cor: "", foco: "Polir e publicar", semanas: ["Menu e telas.", "Salvar a pontuação (recorde).", "Ajustar a dificuldade.", "Publicar e compartilhar o jogo."] },
  { mes: "Mês 3", ferramenta: "Aseprite", cor: "", foco: "Desenhar meus sprites (pixel art)", semanas: ["Conhecer o Aseprite: frames e camadas.", "Paleta de cores e desenhar um objeto (16×16).", "Desenhar um personagem simples.", "Um conjunto de sprites pro jogo."] },
  { mes: "Mês 4", ferramenta: "Aseprite", cor: "", foco: "Dar vida: animação", semanas: ["Idle de 2 frames ('respirando') — bom timing vale mais que muitos frames.", "Onion skin pra alinhar os frames.", "Moeda girando (4 frames) e item flutuando.", "Exportar GIF / sprite sheet pro jogo."] },
  { mes: "Mês 5", ferramenta: "Projeto 1 — Jogo com arte própria", cor: "", foco: "Sprites próprios dentro do jogo", semanas: ["Planejar o jogo + a arte.", "Desenhar e animar os sprites.", "Montar o jogo com a arte própria.", "Apresentar (entregável grande)."] },
  { mes: "Mês 6", ferramenta: "Maya", cor: "", foco: "Modelar objetos 3D", semanas: ["Revisão do Maya + formas.", "Modelar um objeto com detalhes.", "Proporção e ajustes.", "Um modelo próprio."] },
  { mes: "Mês 7", ferramenta: "Maya", cor: "", foco: "Materiais + Impressão 3D", semanas: ["Cores e materiais.", "Preparar pra impressão.", "Imprimir o modelo.", "Levar pra casa (entregável)."] },
  { mes: "Mês 8", ferramenta: "Roblox", cor: "", foco: "Construir mundos", semanas: ["Terreno, ambiente e iluminação.", "Modelos e decoração.", "Clima e detalhes do cenário.", "Um mundo navegável bonito."] },
  { mes: "Mês 9", ferramenta: "Roblox", cor: "", foco: "Jogabilidade", semanas: ["Spawns e checkpoints.", "Itens, moedas e obstáculos.", "Regra de vitória.", "Um jogo jogável."] },
  { mes: "Mês 10", ferramenta: "Teachable Machine", cor: "", foco: "Conhecer a IA", semanas: ["O que é IA e como ela aprende com exemplos.", "Treinar a IA com imagens.", "Treinar com sons ou poses.", "Testar a IA treinada."] },
  { mes: "Mês 11", ferramenta: "Teachable Machine + Scratch", cor: "", foco: "IA dentro do jogo", semanas: ["Conectar a IA ao Scratch.", "Controlar o jogo com gesto/som.", "Criar um jogo que usa a IA.", "Um joguinho com IA."] },
  { mes: "Mês 12", ferramenta: "Projeto 2 — Capstone", cor: "", foco: "Juntar tudo + Demo Day", semanas: ["Escolher o tema do projeto.", "Construir (jogo + arte + IA).", "Ensaiar a apresentação.", "Demo Day + certificado do Ano 2."] },
];

// ── ANO 3 — Primeiro código (Lua) e 3D sério ─────────────────────────────────
const ANO3_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Roblox + Lua", cor: "", foco: "O que é código (script pronto)", semanas: ["O que é um script (vs blocos).", "Ler um script pronto e ver o que ele faz.", "Trocar valores e ver o jogo mudar.", "Um objeto que reage por script."] },
  { mes: "Mês 2", ferramenta: "Roblox + Lua", cor: "", foco: "Mexer no script", semanas: ["Variáveis no código.", "Mudar comportamento (velocidade, cor, tamanho).", "Juntar dois scripts prontos.", "Um comportamento próprio (a partir de prontos)."] },
  { mes: "Mês 3", ferramenta: "Roblox + Lua", cor: "", foco: "Montar comportamentos", semanas: ["Eventos: quando tocar/clicar, faça.", "Condições simples no código.", "Um sistema (porta, botão, armadilha).", "Mini-jogo com scripts."] },
  { mes: "Mês 4", ferramenta: "Aseprite", cor: "", foco: "Animação mais rica", semanas: ["Squash & stretch: a bola que pula (3 frames).", "Antecipação (preparar antes da ação).", "Arcos: movimento em curva.", "Animar uma ação do personagem."] },
  { mes: "Mês 5", ferramenta: "Aseprite", cor: "", foco: "Walk cycle + efeitos", semanas: ["Walk cycle de 4 frames (contato/passagem).", "Espelhar metades pra facilitar.", "Efeitos: explosão/poeira (começa pequeno → grande).", "Exportar tudo pro jogo."] },
  { mes: "Mês 6", ferramenta: "Projeto 1 — Jogo com sprites animados", cor: "", foco: "Arte animada no jogo", semanas: ["Planejar o jogo + as animações.", "Desenhar e animar os sprites.", "Montar o jogo com a arte animada.", "Apresentar (entregável)."] },
  { mes: "Mês 7", ferramenta: "Blender", cor: "", foco: "Primeiro 3D no Blender", semanas: ["Conhecer o Blender (3D gratuito).", "Navegar e mover objetos em 3D.", "Modelar formas básicas.", "Um objeto simples no Blender."] },
  { mes: "Mês 8", ferramenta: "Blender", cor: "", foco: "Modelar + Impressão 3D", semanas: ["Modelar um objeto mais elaborado.", "Materiais e cores.", "Preparar e imprimir em 3D.", "Peça impressa (entregável)."] },
  { mes: "Mês 9", ferramenta: "Maya", cor: "", foco: "Modelagem intermediária", semanas: ["Modelar um objeto do jogo.", "Detalhes e proporção.", "Materiais.", "Asset 3D próprio."] },
  { mes: "Mês 10", ferramenta: "Maya", cor: "", foco: "Personagem + Impressão 3D", semanas: ["Modelar um personagem.", "Pose e materiais.", "Preparar e imprimir.", "Personagem impresso (entregável)."] },
  { mes: "Mês 11", ferramenta: "Projeto 2 — Capstone (montar)", cor: "", foco: "Montar o jogo grande do ano", semanas: ["Planejar o jogo grande.", "Construir o mundo + colocar os modelos 3D.", "Adicionar os sprites animados.", "Versão jogável."] },
  { mes: "Mês 12", ferramenta: "Projeto 2 — Capstone (publicar)", cor: "", foco: "Publicar + Demo Day", semanas: ["Programar as regras (scripts).", "Testar e corrigir.", "Publicar.", "Demo Day + certificado do Ano 3."] },
];

// ── ANO 4 — Criador completo (capstone) ──────────────────────────────────────
const ANO4_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Roblox + Lua", cor: "", foco: "Editar e escrever scripts", semanas: ["Escrever comandos simples em Lua.", "Variáveis e funções (com apoio).", "Mudar e criar comportamentos.", "Um script feito pelo aluno."] },
  { mes: "Mês 2", ferramenta: "Roblox + Lua", cor: "", foco: "Mecânicas com código", semanas: ["Pontuação e regras por código.", "Vidas, respawn e feedback.", "Eventos do jogo.", "Uma mecânica própria."] },
  { mes: "Mês 3", ferramenta: "Roblox + Lua", cor: "", foco: "Sistemas de jogo", semanas: ["Loja e moedas.", "Inventário simples.", "Noção de salvar progresso.", "Um sistema completo."] },
  { mes: "Mês 4", ferramenta: "Maya", cor: "", foco: "Modelagem avançada", semanas: ["Modelo detalhado.", "Materiais avançados.", "Iluminação e câmera.", "Render de qualidade."] },
  { mes: "Mês 5", ferramenta: "Maya", cor: "", foco: "Asset do jogo + Impressão 3D", semanas: ["Modelar um asset do projeto.", "Preparar pro jogo / impressão.", "Imprimir.", "Asset pronto (entregável)."] },
  { mes: "Mês 6", ferramenta: "Projeto 1 — Jogo integrado", cor: "", foco: "Código + 3D + arte juntos", semanas: ["Planejar o jogo.", "Juntar código + modelos 3D + arte.", "Testar e ajustar.", "Apresentar (entregável)."] },
  { mes: "Mês 7", ferramenta: "Blender", cor: "", foco: "3D mais elaborado", semanas: ["Modelagem avançada no Blender.", "Materiais e texturas.", "Compor uma cena.", "Um modelo elaborado."] },
  { mes: "Mês 8", ferramenta: "Blender", cor: "", foco: "Cena + render + Impressão 3D", semanas: ["Iluminação e câmera.", "Render da cena.", "Preparar e imprimir.", "Peça/imagem final (entregável)."] },
  { mes: "Mês 9", ferramenta: "IA (ML for Kids)", cor: "", foco: "IA que aprende", semanas: ["Treinar um modelo (texto/imagem).", "Como a IA decide.", "Usar a IA num projeto.", "Um modelo de IA próprio."] },
  { mes: "Mês 10", ferramenta: "IA (ML for Kids)", cor: "", foco: "IA aplicada no jogo", semanas: ["Conectar a IA ao jogo.", "Um NPC ou recurso inteligente.", "Testar a IA.", "Jogo com IA (entregável)."] },
  { mes: "Mês 11", ferramenta: "Projeto 2 — Capstone autoral", cor: "", foco: "Construir o projeto final", semanas: ["Definir a ideia do projeto final.", "Planejar (escopo, telas, mecânicas).", "Construir mundo + assets + arte.", "Versão jogável inicial."] },
  { mes: "Mês 12", ferramenta: "Projeto 2 — Capstone autoral", cor: "", foco: "Publicar + portfólio + Demo Day", semanas: ["Programar e integrar tudo (Lua + IA).", "Testar, polir e publicar.", "Montar o portfólio.", "Demo Day final → ponte pro CREATE."] },
];

const ANOS = [
  { titulo: "Ano 1", foco: "Primeiros jogos e mundos (blocos → 2D → 3D → motor de jogo)", ferramentas: "Minecraft · Scratch · Construct 3 · MagicaVoxel · Roblox · Maya", trofeu: "2 jogos publicados (2D + Roblox)", meses: ANO1_MESES },
  { titulo: "Ano 2", foco: "Criador de jogos com arte própria", ferramentas: "Construct 3 · Aseprite · Maya · Roblox · Teachable Machine", trofeu: "Jogo com sprites próprios + 1ª IA", meses: ANO2_MESES },
  { titulo: "Ano 3", foco: "Primeiro código (Lua) e 3D mais sério", ferramentas: "Roblox + Lua · Aseprite · Blender · Maya", trofeu: "Jogo com código + modelos 3D", meses: ANO3_MESES },
  { titulo: "Ano 4", foco: "Criador completo (capstone)", ferramentas: "Roblox + Lua · Maya · Blender · IA (ML for Kids)", trofeu: "Projeto autoral + portfólio → CREATE", meses: ANO4_MESES },
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
  "Primeiro código (Lua)",
  "Treinar uma IA",
];

const FERRAMENTAS = [
  { n: "Minecraft + MakeCode", d: "Programação em blocos dentro do Minecraft — o gancho perfeito (a criança já ama o jogo)." },
  { n: "Scratch", d: "Plataforma do MIT pra criar jogos arrastando blocos — a base de programação infantil mais usada no mundo." },
  { n: "Construct 3", d: "Motor de jogos 2D sem digitar código: a criança cria jogos montando regras (eventos)." },
  { n: "Aseprite", d: "Onde a criança desenha e ANIMA os próprios personagens em pixel art pra usar nos jogos." },
  { n: "MagicaVoxel", d: "Arte 3D em 'cubinhos' (voxel) — gratuita e divertida." },
  { n: "Maya", d: "Software 3D profissional da Autodesk (cinema e games). Do contato ao avançado, com licença pro aluno." },
  { n: "Blender", d: "Software 3D gratuito e profissional — um segundo programa de modelagem 3D." },
  { n: "Roblox", d: "Onde a criança cria e publica o próprio jogo num motor de jogo de verdade." },
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

      {/* GRADE — ANO A ANO (seletor) */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: GREEN }}>A grade, ano a ano</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Escolha o ano e veja os 12 meses</h2>
            <p className="mt-3 text-muted-foreground">
              Ferramentas diversificadas a cada ano (repetem só as de mais demanda: Roblox e Maya).{" "}
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
                    ativo ? "text-white shadow-md" : "border-2 text-st-blue-dark hover:bg-muted"
                  }`}
                  style={ativo ? { background: GREEN_GRAD } : { borderColor: `${GREEN}40` }}
                >
                  {a.titulo}
                </button>
              );
            })}
          </div>

          {/* resumo do ano ativo */}
          <div className="mt-6 rounded-2xl border-2 p-6" style={{ borderColor: `${GREEN}25`, background: `${GREEN}0d` }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-st-blue-dark">{atual.titulo} — {atual.foco}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{atual.ferramentas}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold text-white" style={{ background: GREEN_DARK }}>
                <Trophy className="h-4 w-4" /> {atual.trofeu}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <MesesGrade meses={atual.meses} accent={GREEN_DARK} />
          </div>

          {/* Conceitos */}
          <Reveal className="mt-10 rounded-2xl border border-border bg-muted/40 p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" style={{ color: GREEN }} />
              <h3 className="font-black text-st-blue-dark">Conceitos que o aluno domina na trilha</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONCEITOS.map((c) => (
                <span key={c} className="rounded-full border px-3.5 py-1.5 text-sm font-bold" style={{ borderColor: `${GREEN}55`, color: GREEN_DARK }}>{c}</span>
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
