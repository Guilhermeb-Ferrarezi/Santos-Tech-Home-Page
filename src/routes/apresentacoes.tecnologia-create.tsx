import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Rocket,
  Clock,
  Users,
  CalendarDays,
  Trophy,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MesesGrade, type MesGrade } from "@/components/ementa-meses";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import { noindexMeta } from "@/lib/seo";

export const Route = createFileRoute("/apresentacoes/tecnologia-create")({
  component: TecCreateApresentacao,
  head: () =>
    noindexMeta({
      title: "Tecnologia Create — Apresentação e Ementa | Santos Tech (interno)",
    }),
});

const BLUE = "#2E8FCF";
const BLUE_DARK = "#04325A";
const BLUE_GRAD = "linear-gradient(135deg, #2E8FCF 0%, #04325A 100%)";

const METODO = [
  { etapa: "Aquecimento / revisão", min: "10 min", o: "Retomar a aula anterior e mostrar o que vão construir hoje." },
  { etapa: "Conteúdo novo guiado", min: "15 min", o: "O professor ensina o conceito/técnica nova passo a passo." },
  { etapa: "Mão na massa", min: "25 min", o: "O aluno desenvolve sozinho o desafio da aula (o professor orienta)." },
  { etapa: "Desafio extra + compartilhar", min: "10 min", o: "Quem termina vai além; todos mostram o que criaram." },
];

// ── ANO 1 — Programação de verdade com Python ────────────────────────────────
const ANO1_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/3", ferramenta: "Python", cor: "", foco: "Lógica e primeiros programas", semanas: ["Variáveis, tipos e entrada/saída.", "Operações e expressões.", "Primeiros programas interativos.", "Um programa que conversa com o usuário."] },
  { mes: "Mês 2", projeto: "2/3", ferramenta: "Python", cor: "", foco: "Decisões e repetição", semanas: ["Condições (if/elif/else).", "Repetição (while e for).", "Lógica (E / OU / NÃO).", "Um jogo de adivinhação ou quiz."] },
  { mes: "Mês 3", projeto: "3/3", ferramenta: "Python", cor: "", foco: "Funções e organização", semanas: ["Funções e parâmetros.", "Retorno de valores.", "Organizar e reutilizar código.", "Um programa com funções (entregável)."] },
  { mes: "Mês 4", projeto: "1/3", ferramenta: "Python", cor: "", foco: "Listas e dicionários", semanas: ["Listas e percursos.", "Dicionários (chave → valor).", "Strings e manipulação de texto.", "Trabalhar com coleções de dados."] },
  { mes: "Mês 5", projeto: "2/3", ferramenta: "Python", cor: "", foco: "Dados, arquivos e módulos", semanas: ["Ler e escrever arquivos.", "Tratar e organizar dados.", "Usar bibliotecas (módulos).", "Um programa que guarda informações."] },
  { mes: "Mês 6", projeto: "3/3", ferramenta: "Python", cor: "", foco: "Um app útil", semanas: ["Planejar um mini-app.", "Construir (calculadora / organizador).", "Testar e melhorar.", "Um app próprio (entregável)."] },
  { mes: "Mês 7", projeto: "1/3", ferramenta: "Python + Pygame", cor: "", foco: "Meu jogo em código", semanas: ["Conhecer o Pygame: janela e loop.", "Sprites e imagens.", "Movimento e controles.", "A base de um jogo 2D rodando."] },
  { mes: "Mês 8", projeto: "2/3", ferramenta: "Python + Pygame", cor: "", foco: "Mecânicas de jogo", semanas: ["Colisões.", "Pontuação e vidas.", "Fases e sons.", "Um jogo com regras."] },
  { mes: "Mês 9", projeto: "3/3", ferramenta: "Python + Pygame", cor: "", foco: "Jogo 2D completo", semanas: ["Telas (menu, game over).", "Balanceamento e dificuldade.", "Polir e ajustar.", "Um jogo 2D em código (entregável)."] },
  { mes: "Mês 10", projeto: "1/3", ferramenta: "Python", cor: "", foco: "Algoritmos e problemas", semanas: ["Pensamento computacional.", "Resolver problemas passo a passo.", "Eficiência (uma noção).", "Desafios de lógica."] },
  { mes: "Mês 11", projeto: "2/3", ferramenta: "Python", cor: "", foco: "Projeto autoral", semanas: ["Escolher e planejar o projeto.", "Construir (jogo ou app).", "Testar com os colegas.", "Versão pronta."] },
  { mes: "Mês 12", projeto: "3/3", ferramenta: "Python", cor: "", foco: "Finalizar + portfólio", semanas: ["Polir o projeto.", "Documentar o código.", "Montar o início do portfólio.", "Demo Day + certificado do Ano 1."] },
];

// ── ANO 2 — Unity e o motor de jogos profissional (C#) ───────────────────────
const ANO2_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/3", ferramenta: "Unity (C#)", cor: "", foco: "Conhecer o Unity", semanas: ["Interface e cena do Unity.", "GameObjects e componentes.", "Mover objetos na cena.", "O primeiro projeto no Unity."] },
  { mes: "Mês 2", projeto: "2/3", ferramenta: "Unity (C#)", cor: "", foco: "Programar com C#", semanas: ["Scripts em C#.", "Variáveis e métodos.", "Controlar objetos por código.", "Um objeto que responde ao jogador."] },
  { mes: "Mês 3", projeto: "3/3", ferramenta: "Unity (C#)", cor: "", foco: "Primeiro jogo 2D", semanas: ["Input do jogador.", "Física 2D e colisões.", "Pontuação simples.", "Um joguinho 2D no Unity (entregável)."] },
  { mes: "Mês 4", projeto: "1/3", ferramenta: "Unity (C#)", cor: "", foco: "Mecânicas e sistemas", semanas: ["Prefabs e instanciar objetos.", "Inimigos e spawn.", "Power-ups e itens.", "Um jogo com mais sistemas."] },
  { mes: "Mês 5", projeto: "2/3", ferramenta: "Unity (C#)", cor: "", foco: "UI, sons e dados", semanas: ["Menus e HUD.", "Sons e efeitos.", "Salvar pontuação/recorde.", "Um jogo com cara de jogo."] },
  { mes: "Mês 6", projeto: "3/3", ferramenta: "Unity (C#)", cor: "", foco: "Jogo 2D completo", semanas: ["Várias fases.", "Balanceamento.", "Polir e testar.", "Um jogo 2D completo (entregável)."] },
  { mes: "Mês 7", projeto: "1/3", ferramenta: "Blender", cor: "", foco: "Modelar pra jogos (3D)", semanas: ["Modelagem low-poly pra games.", "Materiais e cores.", "Boas práticas pra motor de jogo.", "Assets 3D próprios."] },
  { mes: "Mês 8", projeto: "2/3", ferramenta: "Blender + Unity", cor: "", foco: "Levar o 3D pro Unity", semanas: ["Exportar do Blender.", "Importar e ajustar no Unity.", "Materiais e prefabs 3D.", "Modelos prontos no Unity."] },
  { mes: "Mês 9", projeto: "3/3", ferramenta: "Unity (C#)", cor: "", foco: "Mundo 3D", semanas: ["Cena 3D, câmera e luz.", "Movimento 3D do personagem.", "Colisão e física 3D.", "Um mundo 3D navegável (entregável)."] },
  { mes: "Mês 10", projeto: "1/3", ferramenta: "Unity (C#)", cor: "", foco: "Mecânicas 3D", semanas: ["Câmera de jogo (3ª pessoa).", "Interações e gatilhos.", "Objetivos do jogo.", "Mecânicas 3D funcionando."] },
  { mes: "Mês 11", projeto: "2/3", ferramenta: "Unity (C#)", cor: "", foco: "Construir o jogo 3D", semanas: ["Montar o jogo com os assets.", "UI, áudio e efeitos.", "Ajustes e testes.", "Versão jogável."] },
  { mes: "Mês 12", projeto: "3/3", ferramenta: "Unity (C#)", cor: "", foco: "Publicar + portfólio", semanas: ["Gerar o build do jogo.", "Publicar (web / itch.io).", "Atualizar o portfólio.", "Demo Day + certificado do Ano 2."] },
];

// ── ANO 3 — 3D profissional (Maya) + Estúdio de Criação com IA ───────────────
const ANO3_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/3", ferramenta: "Maya", cor: "", foco: "Modelagem profissional", semanas: ["Modelagem poligonal no Maya.", "Topologia (a malha certa).", "Formas complexas.", "Um modelo bem feito."] },
  { mes: "Mês 2", projeto: "2/3", ferramenta: "Maya", cor: "", foco: "UV e materiais", semanas: ["Abrir UVs.", "Texturas e materiais.", "Detalhes e acabamento.", "Um modelo texturizado."] },
  { mes: "Mês 3", projeto: "3/3", ferramenta: "Maya", cor: "", foco: "Asset pro jogo", semanas: ["Modelar um personagem/asset.", "Otimizar pro motor de jogo.", "Exportar.", "Um asset profissional (entregável)."] },
  { mes: "Mês 4", projeto: "1/3", ferramenta: "Maya", cor: "", foco: "Rigging básico", semanas: ["Esqueleto (joints).", "Skinning simples.", "Controles de pose.", "Um personagem pronto pra animar."] },
  { mes: "Mês 5", projeto: "2/3", ferramenta: "Maya", cor: "", foco: "Animação 3D", semanas: ["Keyframes e timing.", "Ciclos (andar/idle).", "Princípios de animação.", "Uma animação própria."] },
  { mes: "Mês 6", projeto: "3/3", ferramenta: "Maya + Unity", cor: "", foco: "Pipeline 3D pro Unity", semanas: ["Exportar modelo + animação.", "Importar no Unity.", "Configurar no motor.", "Asset animado dentro do Unity (entregável)."] },
  { mes: "Mês 7", projeto: "1/3", ferramenta: "Estúdio de Criação com IA", cor: "", foco: "Imagem e arte com IA", semanas: ["Conceitos e referências com IA de imagem (Nano Banana).", "Texturas e ícones.", "Arte e capa no Canva.", "Pacote visual do jogo."] },
  { mes: "Mês 8", projeto: "2/3", ferramenta: "Estúdio de Criação com IA", cor: "", foco: "Som, música e voz com IA", semanas: ["Música com IA (Suno).", "Voz e narração com IA (ElevenLabs).", "Efeitos sonoros.", "Trilha e vozes do jogo."] },
  { mes: "Mês 9", projeto: "3/3", ferramenta: "Estúdio de Criação com IA", cor: "", foco: "Vídeo e trailer com IA", semanas: ["Vídeo com IA (Sora / Veo).", "Edição no CapCut.", "Montar o trailer do jogo.", "Trailer pronto (entregável)."] },
  { mes: "Mês 10", projeto: "1/3", ferramenta: "Unity + Maya", cor: "", foco: "Montar o jogo", semanas: ["Integrar modelos do Maya.", "Aplicar os assets de IA.", "Cena e mecânicas.", "Jogo tomando forma."] },
  { mes: "Mês 11", projeto: "2/3", ferramenta: "Unity (C#)", cor: "", foco: "Polir e dar vida", semanas: ["Animações no jogo.", "Áudio e efeitos.", "Ajustes de jogabilidade.", "Versão polida."] },
  { mes: "Mês 12", projeto: "3/3", ferramenta: "Unity (C#)", cor: "", foco: "Lançar + trailer + portfólio", semanas: ["Build e publicação.", "Trailer feito com IA.", "Atualizar o portfólio.", "Demo Day + certificado do Ano 3."] },
];

// ── ANO 4 — Avançado: Realidade Virtual, IA aplicada, ética e projeto pro ────
const ANO4_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/3", ferramenta: "Realidade Virtual (Unity)", cor: "", foco: "Introdução à VR", semanas: ["O que é VR e como funciona.", "Configurar o projeto VR no Unity.", "A primeira cena em VR.", "Olhar em volta dentro do jogo."] },
  { mes: "Mês 2", projeto: "2/3", ferramenta: "Realidade Virtual (Unity)", cor: "", foco: "Interação em VR", semanas: ["Controles e mãos.", "Pegar e usar objetos.", "Locomoção (teleporte).", "Interagir com o mundo VR."] },
  { mes: "Mês 3", projeto: "3/3", ferramenta: "Realidade Virtual (Unity)", cor: "", foco: "Uma experiência VR", semanas: ["Planejar a experiência.", "Construir o ambiente.", "Testar no dispositivo.", "Uma experiência VR própria (entregável)."] },
  { mes: "Mês 4", projeto: "1/3", ferramenta: "IA aplicada", cor: "", foco: "IA dentro do jogo", semanas: ["NPCs com comportamento.", "Decisões e estados (máquina de estados).", "IA generativa no jogo.", "Um inimigo/NPC inteligente."] },
  { mes: "Mês 5", projeto: "2/3", ferramenta: "IA aplicada (Python)", cor: "", foco: "Usar IA por código", semanas: ["Chamar uma IA por código (API).", "Texto, imagem ou voz via IA.", "Integrar num projeto.", "Um recurso com IA de verdade."] },
  { mes: "Mês 6", projeto: "3/3", ferramenta: "Ética e letramento em IA", cor: "", foco: "IA com responsabilidade", semanas: ["Como a IA aprende (e erra).", "Viés, privacidade e direitos autorais.", "Usar IA com ética.", "Um projeto/posicionamento crítico (entregável)."] },
  { mes: "Mês 7", projeto: "1/3", ferramenta: "Projeto Profissional", cor: "", foco: "Planejar como estúdio", semanas: ["Ideia e conceito do projeto.", "Game Design Document (escopo).", "Cronograma e papéis.", "Projeto planejado."] },
  { mes: "Mês 8", projeto: "2/3", ferramenta: "Projeto Profissional", cor: "", foco: "Produção", semanas: ["Construir (código + 3D + IA).", "Integrar tudo.", "Acompanhar o cronograma.", "Versão jogável inicial."] },
  { mes: "Mês 9", projeto: "3/3", ferramenta: "Projeto Profissional", cor: "", foco: "Playtest e iteração", semanas: ["Testar com pessoas (playtest).", "Coletar feedback.", "Ajustar e melhorar.", "Versão refinada."] },
  { mes: "Mês 10", projeto: "1/3", ferramenta: "Projeto Profissional", cor: "", foco: "Finalizar e publicar", semanas: ["Polimento final.", "Build e otimização.", "Publicar (loja / web / itch).", "Projeto publicado (entregável grande)."] },
  { mes: "Mês 11", projeto: "2/3", ferramenta: "Portfólio profissional", cor: "", foco: "Portfólio + presença", semanas: ["Montar o portfólio.", "GitHub e itch.io.", "Trailer e apresentação.", "Portfólio pronto pro mercado."] },
  { mes: "Mês 12", projeto: "3/3", ferramenta: "Demo Day + carreira", cor: "", foco: "Demo Day + próximos passos", semanas: ["Ensaiar a apresentação.", "Demo Day final.", "Caminhos: mercado, freela, faculdade.", "Certificado da trilha Create."] },
];

// ── O que o aluno domina no fim de cada ano (dinâmico por aba) ────────────────
const ANO1_DOMINA = [
  "Programa de verdade em Python — a linguagem mais usada do mundo.",
  "Domina lógica: variáveis, condições, loops, funções, listas e dicionários.",
  "Cria jogos 2D em código com Pygame.",
  "Lê e escreve dados e usa bibliotecas (módulos).",
  "Resolve problemas com algoritmos e pensamento computacional.",
  "Entrega projetos autorais e começa o portfólio.",
];
const ANO2_DOMINA = [
  "Usa o Unity, motor de jogos profissional da indústria.",
  "Programa em C# (orientação a objetos na prática).",
  "Cria jogos 2D e 3D com física, UI, sons e dados.",
  "Modela assets 3D no Blender e integra no Unity (pipeline).",
  "Publica um jogo (web / itch.io) e amplia o portfólio.",
  "Pensa como desenvolvedor de games de verdade.",
];
const ANO3_DOMINA = [
  "Modela, texturiza e anima em 3D profissional no Maya.",
  "Domina o pipeline 3D: do Maya pro Unity.",
  "Produz assets com IA: imagem (Nano Banana), música (Suno), voz (ElevenLabs) e vídeo (Sora/Veo).",
  "Edita e finaliza com Canva e CapCut.",
  "Cria um jogo 3D com arte e trilha próprias — e um trailer feito com IA.",
  "Trabalha como um pequeno estúdio (arte + código + áudio).",
];
const ANO4_DOMINA = [
  "Cria experiências em Realidade Virtual (VR) no Unity.",
  "Aplica IA dentro dos jogos (NPCs, IA generativa) e via código (Python).",
  "Entende como a IA funciona e a usa com ética e responsabilidade.",
  "Conduz um projeto autoral grande, como num estúdio.",
  "Publica o projeto e monta um portfólio profissional (GitHub, trailer).",
  "Sai preparado para os próximos passos: mercado, freela ou faculdade.",
];

const ANOS = [
  { titulo: "Ano 1", foco: "Programação de verdade com Python", ferramentas: "Python · Pygame", trofeu: "4 projetos no ano", meses: ANO1_MESES, domina: ANO1_DOMINA },
  { titulo: "Ano 2", foco: "Unity e o motor de jogos profissional (C#)", ferramentas: "Unity · C# · Blender", trofeu: "4 projetos no ano", meses: ANO2_MESES, domina: ANO2_DOMINA },
  { titulo: "Ano 3", foco: "3D profissional (Maya) e Estúdio de Criação com IA", ferramentas: "Maya · IA (imagem, som, vídeo) · Unity", trofeu: "4 projetos no ano", meses: ANO3_MESES, domina: ANO3_DOMINA },
  { titulo: "Ano 4", foco: "Realidade Virtual, IA aplicada, ética e projeto profissional", ferramentas: "Unity VR · IA aplicada · Python · Portfólio", trofeu: "4 projetos no ano", meses: ANO4_MESES, domina: ANO4_DOMINA },
];

const CONCEITOS = [
  "Programação (Python)",
  "Pensamento computacional",
  "Jogos com código",
  "Unity + C#",
  "3D profissional (Maya)",
  "Pipeline 3D",
  "Estúdio de Criação com IA",
  "Realidade Virtual",
  "IA aplicada",
  "Ética e letramento em IA",
  "Publicação de jogos",
  "Portfólio profissional",
];

const FERRAMENTAS = [
  { n: "Python", d: "A linguagem mais usada do mundo — programação de verdade, do zero ao projeto (e jogos com Pygame)." },
  { n: "Unity", d: "Motor de jogos profissional (C#) usado na indústria — jogos 2D, 3D e VR." },
  { n: "Blender", d: "Modelagem 3D gratuita e profissional para assets de jogos." },
  { n: "Maya", d: "3D profissional da Autodesk: modelagem, textura e animação (cinema e games)." },
  { n: "Estúdio de Criação com IA", d: "Suno (música), ElevenLabs (voz), Sora/Veo (vídeo), Nano Banana (imagem), Canva e CapCut — para produzir os assets do jogo." },
  { n: "Realidade Virtual", d: "Criar experiências imersivas em VR dentro do Unity." },
  { n: "IA aplicada", d: "Usar IA dentro dos jogos e via código (Python) — sempre com ética e responsabilidade." },
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

function TecCreateApresentacao() {
  const [ano, setAno] = useState(0);
  const atual = ANOS[ano];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-14 text-white" style={{ background: BLUE_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <Rocket className="pointer-events-none absolute -bottom-12 -right-10 h-72 w-72 rotate-12 text-white/10" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackLink light />
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Rocket className="h-8 w-8" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Adolescentes · Tecnologia</p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Tecnologia Create</h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Programação séria e produção de games de verdade: <strong>Python</strong>,{" "}
            <strong>Unity (C#)</strong>, 3D profissional no <strong>Maya</strong>, um{" "}
            <strong>estúdio de criação com IA</strong> e <strong>Realidade Virtual</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Chip icon={Users}>10 a 15 anos</Chip>
            <Chip icon={CalendarDays}>Trilha de 4 anos</Chip>
            <Chip icon={Clock}>2h por semana</Chip>
            <Chip icon={Trophy}>Portfólio profissional</Chip>
          </div>
        </div>
      </section>

      {/* COMO É CADA AULA */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>Como é cada aula</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">2 horas por semana, com ritmo</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METODO.map((m, i) => (
              <Reveal key={m.etapa} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white" style={{ background: BLUE_DARK }}>{i + 1}</span>
                    <span className="text-xs font-black uppercase tracking-wider" style={{ color: BLUE }}>{m.min}</span>
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
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: BLUE_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">A grade, ano a ano</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Escolha o ano e veja os 12 meses</h2>
            <p className="mt-3 text-white/90">
              Da lógica ao código profissional, do 3D à IA e à Realidade Virtual — construindo um
              jogo de verdade a cada ano.{" "}
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
                  style={ativo ? { color: BLUE_DARK } : undefined}
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
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold" style={{ color: BLUE_DARK }}>
                <Trophy className="h-4 w-4" /> {atual.trofeu}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <MesesGrade meses={atual.meses} accent={BLUE_DARK} />
          </div>

          {/* Conceitos */}
          <Reveal className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-white" />
              <h3 className="font-black text-white">O que o aluno domina na trilha</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONCEITOS.map((c) => (
                <span key={c} className="rounded-full border border-white/40 px-3.5 py-1.5 text-sm font-bold text-white">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* O QUE DOMINA — dinâmico por ano */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>
              No fim do {atual.titulo}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que o aluno domina
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {atual.domina.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: BLUE }} />
                <span className="text-sm text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FERRAMENTAS — banda colorida */}
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: BLUE_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">As ferramentas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">As ferramentas do mercado</h2>
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
