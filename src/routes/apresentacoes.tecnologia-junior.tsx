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

// ── ANO 1 ────────────────────────────────────────────────────────────────────
const ANO1_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Minecraft + MakeCode", cor: "", foco: "Primeiros comandos e o Agente", semanas: ["O primeiro comando: digitar uma palavra e o Minecraft obedecer (evento).", "Controlar o Agente numa sequência de passos.", "Repetição (loop): o Agente faz fileiras sem cansar.", "Mini-construção feita por código (1º entregável)."] },
  { mes: "Mês 2", ferramenta: "Minecraft + MakeCode", cor: "", foco: "Construir com código", semanas: ["Posição e direção: colocar blocos no lugar certo.", "Repetição dentro de repetição: construir áreas.", "Variável: a 'caixinha' que muda o tamanho.", "Uma casa ou torre completa por programa."] },
  { mes: "Mês 3", ferramenta: "Minecraft + MakeCode", cor: "", foco: "Regras e mini-jogos", semanas: ["Condição (se/então): o jogo decide.", "Eventos do mundo: o jogo reage.", "Placar: uma pontuação que sobe.", "Um mini-jogo jogável no Minecraft."] },
  { mes: "Mês 4", ferramenta: "Scratch", cor: "", foco: "Meu primeiro jogo 2D", semanas: ["Palco, personagens e movimento.", "Eventos: reagir a cliques e teclas, com sons.", "Pontuação e mensagens na tela.", "Primeiro joguinho 2D próprio."] },
  { mes: "Mês 5", ferramenta: "Scratch", cor: "", foco: "Jogos com regras", semanas: ["Colisão e fases.", "Vidas e fim de jogo.", "Dificuldade e sorteio (aleatório).", "Projeto de jogo 2D com regras (entregável)."] },
  { mes: "Mês 6", ferramenta: "Maya", cor: "", foco: "Primeiro contato com o 3D", semanas: ["Conhecendo o Maya: girar e enxergar em 3D.", "Formas básicas (cubo, esfera) viram objetos.", "Mover, girar e escalar; juntar formas.", "Um objeto 3D simples e próprio."] },
  { mes: "Mês 7", ferramenta: "Maya", cor: "", foco: "Modelar de verdade + Impressão 3D", semanas: ["Modelar um objeto com mais detalhes.", "Cores e materiais simples.", "Preparar o modelo para a impressora 3D.", "Imprime de verdade e leva pra casa (entregável)."] },
  { mes: "Mês 8", ferramenta: "Maya", cor: "", foco: "Montar uma cena 3D", semanas: ["Compor uma cena com vários objetos.", "Câmera e enquadramento.", "Iluminação básica.", "Gerar uma imagem (render) da cena."] },
  { mes: "Mês 9", ferramenta: "MagicaVoxel", cor: "", foco: "Arte 3D em cubinhos (voxel)", semanas: ["O que é voxel: criar um personagem de cubinhos.", "Cores e detalhes.", "Variações e poses do personagem.", "Uma galeria de arte voxel (entregável)."] },
  { mes: "Mês 10", ferramenta: "Roblox (Criador Iniciante)", cor: "", foco: "Meu mundo no Roblox", semanas: ["Roblox Studio: terreno e cenário.", "Colocar peças, objetos e decoração.", "Ponto de partida e checkpoints.", "Um cenário navegável."] },
  { mes: "Mês 11", ferramenta: "Roblox (Criador Iniciante)", cor: "", foco: "Jogabilidade (obby)", semanas: ["Obstáculos e plataformas.", "Itens e moedas (em blocos).", "Regra simples de vitória.", "Um obby jogável."] },
  { mes: "Mês 12", ferramenta: "Roblox (Criador Iniciante)", cor: "", foco: "Publicar + Demo Day", semanas: ["Ajustes e testes com os colegas.", "Publicar o jogo no Roblox.", "Preparar a apresentação.", "Demo Day (capstone) + certificado do nível."] },
];

// ── ANO 2 ────────────────────────────────────────────────────────────────────
const ANO2_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Scratch Avançado", cor: "", foco: "Jogos com sistemas", semanas: ["Clones e múltiplos inimigos.", "Listas: guardar vários valores.", "Física simples (gravidade, pulo).", "Um jogo com vários elementos."] },
  { mes: "Mês 2", ferramenta: "Scratch Avançado", cor: "", foco: "Polir o jogo", semanas: ["Telas e menu inicial.", "Várias fases.", "Dificuldade progressiva.", "Um jogo 2D mais completo (entregável)."] },
  { mes: "Mês 3", ferramenta: "Maya", cor: "", foco: "Modelagem de personagens", semanas: ["Revisão do 3D e das formas.", "Modelar um personagem simples.", "Proporções e detalhes.", "Um personagem próprio."] },
  { mes: "Mês 4", ferramenta: "Maya", cor: "", foco: "Materiais e cores", semanas: ["Aplicar materiais e cores.", "Texturas simples.", "Deixar o modelo bonito.", "Personagem finalizado."] },
  { mes: "Mês 5", ferramenta: "Maya", cor: "", foco: "Cena + Impressão 3D", semanas: ["Montar uma cena com o personagem.", "Iluminação e câmera.", "Preparar para impressão.", "Imprime o personagem (entregável)."] },
  { mes: "Mês 6", ferramenta: "Roblox Studio", cor: "", foco: "Construir mundos", semanas: ["Terreno e ambiente.", "Modelos e decoração.", "Iluminação do mundo.", "Um mundo navegável."] },
  { mes: "Mês 7", ferramenta: "Roblox Studio", cor: "", foco: "Jogabilidade", semanas: ["Spawns e checkpoints.", "Itens e coletáveis.", "Obstáculos e desafios.", "Um jogo jogável (sem código pesado)."] },
  { mes: "Mês 8", ferramenta: "Roblox Studio", cor: "", foco: "Publicar e jogar juntos", semanas: ["Noção de multiplayer.", "Testar com colegas.", "Ajustes finais.", "Publicar o jogo."] },
  { mes: "Mês 9", ferramenta: "Teachable Machine", cor: "", foco: "Conhecendo a IA", semanas: ["O que é IA e como ela aprende com exemplos.", "Treinar a IA com imagens.", "Treinar com sons ou poses.", "Testar a IA treinada."] },
  { mes: "Mês 10", ferramenta: "Teachable Machine + Scratch", cor: "", foco: "IA dentro do jogo", semanas: ["Conectar a IA ao Scratch.", "Controlar o jogo com a IA (gesto/som).", "Criar um jogo que usa a IA.", "Um joguinho controlado por IA (entregável)."] },
  { mes: "Mês 11", ferramenta: "Projeto do ano", cor: "", foco: "Juntando tudo", semanas: ["Escolher: jogo, personagem 3D ou IA.", "Planejar o projeto.", "Construir.", "Polir."] },
  { mes: "Mês 12", ferramenta: "Projeto do ano", cor: "", foco: "Capstone + Demo Day", semanas: ["Finalizar o projeto.", "Preparar a apresentação.", "Demo Day para os pais.", "Certificado do Ano 2."] },
];

// ── ANO 3 ────────────────────────────────────────────────────────────────────
const ANO3_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Roblox + Lua (introdução)", cor: "", foco: "Primeiro código de texto", semanas: ["O que é código de texto (vs blocos).", "Primeiros comandos em Lua (print, variáveis).", "Mudar partes do jogo por código.", "Um script simples funcionando."] },
  { mes: "Mês 2", ferramenta: "Roblox + Lua (introdução)", cor: "", foco: "Eventos e funções", semanas: ["Funções: blocos de código reutilizáveis.", "Eventos: quando algo acontece.", "Tocar/clicar e reagir.", "Um objeto interativo por código."] },
  { mes: "Mês 3", ferramenta: "Roblox + Lua (introdução)", cor: "", foco: "Lógica em código", semanas: ["Condições (if/else) em Lua.", "Repetição (for/while).", "Juntar a lógica num script.", "Um mini-sistema (porta, botão)."] },
  { mes: "Mês 4", ferramenta: "Lua (jogos)", cor: "", foco: "Mecânicas de jogo", semanas: ["Pontuação por código.", "Vidas e respawn.", "Coletáveis com efeito.", "Uma mecânica própria."] },
  { mes: "Mês 5", ferramenta: "Lua (jogos)", cor: "", foco: "Sistemas de jogo", semanas: ["Loja e moedas simples.", "Inventário básico.", "Noção de salvar progresso.", "Um sistema de jogo."] },
  { mes: "Mês 6", ferramenta: "Lua (jogos)", cor: "", foco: "Jogo com regras", semanas: ["Regras de vitória e derrota.", "Temporizador.", "Feedback (mensagens, sons).", "Um jogo com regras (entregável)."] },
  { mes: "Mês 7", ferramenta: "Maya (modelagem)", cor: "", foco: "Modelagem intermediária", semanas: ["Modelar um objeto do jogo.", "Detalhes e proporção.", "Materiais.", "Um asset 3D próprio."] },
  { mes: "Mês 8", ferramenta: "Maya (modelagem)", cor: "", foco: "Personagem do jogo", semanas: ["Modelar um personagem.", "Cores e materiais.", "Pose do personagem.", "O personagem do jogo."] },
  { mes: "Mês 9", ferramenta: "Maya (modelagem)", cor: "", foco: "Levar pro jogo + Impressão", semanas: ["Exportar o modelo.", "Usar o modelo no Roblox (noção).", "Preparar a impressão.", "Imprime o asset (entregável)."] },
  { mes: "Mês 10", ferramenta: "Roblox + Lua (jogo completo)", cor: "", foco: "Montar o jogo", semanas: ["Planejar o jogo.", "Construir o mundo.", "Adicionar os modelos 3D.", "Cenário pronto."] },
  { mes: "Mês 11", ferramenta: "Roblox + Lua (jogo completo)", cor: "", foco: "Programar o jogo", semanas: ["Programar as mecânicas (Lua).", "Pontuação e regras.", "Testar e corrigir.", "Jogo funcionando."] },
  { mes: "Mês 12", ferramenta: "Roblox + Lua (jogo completo)", cor: "", foco: "Publicar + Demo Day", semanas: ["Polir e publicar.", "Preparar a apresentação.", "Demo Day.", "Certificado do Ano 3."] },
];

// ── ANO 4 ────────────────────────────────────────────────────────────────────
const ANO4_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Lua (avançado)", cor: "", foco: "Sistemas complexos", semanas: ["Organizar o código em módulos.", "Tabelas e dados em Lua.", "Sistema de loja completo.", "Inventário avançado."] },
  { mes: "Mês 2", ferramenta: "Lua (avançado)", cor: "", foco: "Multiplayer e interação", semanas: ["Interação entre jogadores.", "Placar global.", "Eventos do servidor.", "Um recurso multiplayer."] },
  { mes: "Mês 3", ferramenta: "Lua (avançado)", cor: "", foco: "Polimento profissional", semanas: ["Efeitos e animações por código.", "Som e feedback.", "Otimização.", "Um jogo com cara profissional."] },
  { mes: "Mês 4", ferramenta: "IA (ML for Kids)", cor: "", foco: "IA que aprende", semanas: ["Treinar um modelo de IA (texto/imagem).", "Como a IA decide.", "Usar a IA num projeto.", "Um modelo de IA próprio."] },
  { mes: "Mês 5", ferramenta: "IA (ML for Kids)", cor: "", foco: "IA aplicada no jogo", semanas: ["Conectar a IA ao jogo.", "Um NPC ou recurso inteligente.", "Testar a IA.", "Jogo com IA aplicada (entregável)."] },
  { mes: "Mês 6", ferramenta: "Maya", cor: "", foco: "Modelagem avançada", semanas: ["Um modelo detalhado.", "Materiais avançados.", "Iluminação.", "Render de qualidade."] },
  { mes: "Mês 7", ferramenta: "Maya", cor: "", foco: "Asset do capstone", semanas: ["Modelar um asset do projeto final.", "Detalhar.", "Preparar pro jogo / impressão.", "Asset pronto."] },
  { mes: "Mês 8", ferramenta: "Maya", cor: "", foco: "Impressão 3D final", semanas: ["Finalizar o modelo.", "Preparar a impressão.", "Imprimir.", "Peça física do projeto (entregável)."] },
  { mes: "Mês 9", ferramenta: "Projeto autoral (capstone)", cor: "", foco: "Planejar o projeto", semanas: ["Definir a ideia do projeto.", "Planejar escopo, telas e mecânicas.", "Organizar as etapas.", "Plano pronto."] },
  { mes: "Mês 10", ferramenta: "Projeto autoral (capstone)", cor: "", foco: "Construir", semanas: ["Construir o mundo / cenário.", "Adicionar os assets 3D.", "Programar o núcleo.", "Versão jogável inicial."] },
  { mes: "Mês 11", ferramenta: "Projeto autoral (capstone)", cor: "", foco: "Programar e integrar", semanas: ["Mecânicas completas (Lua).", "Integrar a IA.", "Testar e corrigir.", "Projeto completo."] },
  { mes: "Mês 12", ferramenta: "Projeto autoral (capstone)", cor: "", foco: "Publicar + Demo Day final", semanas: ["Polir tudo.", "Publicar.", "Demo Day + portfólio.", "Certificado do Júnior → ponte pro CREATE."] },
];

const ANOS = [
  { titulo: "Ano 1", foco: "Lógica, jogos 2D, 3D e o primeiro motor de jogo", ferramentas: "Minecraft · Scratch · Maya · Roblox", trofeu: "Jogo publicado no Roblox", meses: ANO1_MESES },
  { titulo: "Ano 2", foco: "Jogos avançados, modelagem 3D e a primeira IA", ferramentas: "Scratch · Maya · Roblox Studio · Teachable Machine", trofeu: "Jogo + 1ª IA treinada", meses: ANO2_MESES },
  { titulo: "Ano 3", foco: "Primeiro código de verdade (texto)", ferramentas: "Roblox + Lua · Maya", trofeu: "Jogo com código + modelo 3D", meses: ANO3_MESES },
  { titulo: "Ano 4", foco: "Criador completo + IA (capstone)", ferramentas: "Lua · ML for Kids · Maya", trofeu: "Projeto autoral + portfólio", meses: ANO4_MESES },
];

const CONCEITOS = [
  "Sequência", "Repetição (loop)", "Variável", "Condição (se/então)", "Evento",
  "Funções", "Listas e dados", "Lógica em código (Lua)", "Treinar uma IA",
];

const FERRAMENTAS = [
  { n: "Minecraft + MakeCode", d: "Programação em blocos dentro do Minecraft — o gancho perfeito (a criança já ama o jogo)." },
  { n: "Scratch", d: "Plataforma do MIT para criar jogos e animações arrastando blocos — a base de programação infantil mais usada no mundo." },
  { n: "Maya", d: "Software 3D profissional da Autodesk, usado no cinema e nos games. Do simples ao avançado; o aluno recebe licença e se acostuma com a ferramenta da indústria." },
  { n: "MagicaVoxel", d: "Ferramenta gratuita e divertida para criar arte 3D em 'cubinhos' (voxel)." },
  { n: "Roblox", d: "Onde a criança cria e publica o próprio jogo num motor de jogo de verdade." },
  { n: "Lua", d: "A primeira linguagem de programação de texto do aluno — usada para programar jogos no Roblox." },
  { n: "IA (Teachable Machine / ML for Kids)", d: "Ferramentas gratuitas onde a criança treina uma inteligência artificial com exemplos e usa nos próprios projetos." },
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
            jogos, do 3D ao primeiro código, com 4 ferramentas por ano.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Chip icon={Users}>5 a 9 anos</Chip>
            <Chip icon={CalendarDays}>Trilha de 4 anos</Chip>
            <Chip icon={Clock}>2h por semana</Chip>
            <Chip icon={Users}>Turmas de até 10</Chip>
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
              Cada ferramenta tem o tempo que precisa. <strong>Clique num mês</strong> para ver o que é
              trabalhado em cada semana.
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
