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
  CheckCircle2,
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
  { mes: "Mês 1", projeto: "1/2", ferramenta: "Teachable Machine", cor: "", foco: "Conhecer a IA", semanas: ["O que é IA e como ela aprende com exemplos.", "Treinar a IA com imagens.", "Treinar com sons ou poses.", "Testar a IA treinada."] },
  { mes: "Mês 2", projeto: "2/2", ferramenta: "Teachable Machine + Scratch", cor: "", logos: ["teachable", "scratch"], foco: "IA num projeto", semanas: ["Conectar a IA ao Scratch.", "Controlar algo com gesto/som.", "Criar um mini-projeto que usa a IA.", "Apresentar o que a IA faz."] },
  { mes: "Mês 3", projeto: "1/4", ferramenta: "Aseprite", cor: "", foco: "Sprites pro jogo do ano", semanas: ["Revisão do Aseprite + boas práticas.", "Desenhar o personagem principal.", "Tileset simples (peças de cenário).", "Conjunto de sprites pro jogo."] },
  { mes: "Mês 4", projeto: "2/4", ferramenta: "Construct 3", cor: "", foco: "Começar o jogo 2D (mais sistemas)", semanas: ["Montar o jogo com os sprites.", "Variáveis e vários níveis.", "Power-ups e itens.", "Esqueleto do jogo com sistemas."] },
  { mes: "Mês 5", projeto: "3/4", ferramenta: "Aseprite", cor: "", foco: "Animar o jogo", semanas: ["Walk cycle de 4 frames (contato/passagem).", "Idle e uma ação (ataque/pulo).", "Efeitos: poeira e explosão (pequeno → grande).", "Exportar as animações pro jogo."] },
  { mes: "Mês 6", projeto: "4/4", ferramenta: "Construct 3", cor: "", foco: "Fechar e publicar o jogo 2D", semanas: ["Trazer as animações pro jogo.", "Inimigos, colisão e dificuldade.", "Menu, telas e recorde.", "Jogo 2D completo publicado (entregável)."] },
  { mes: "Mês 7", projeto: "1/6", ferramenta: "Maya", cor: "", foco: "Começar o jogo 3D: o cenário", semanas: ["Planejar o jogo 3D (o projeto grande do ano).", "Conhecer/revisar a modelagem no Maya.", "Modelar as primeiras peças do cenário.", "O cenário do jogo começando a tomar forma."] },
  { mes: "Mês 8", projeto: "2/6", ferramenta: "Maya", cor: "", foco: "Modelar os itens do jogo", semanas: ["Modelar itens e objetos do jogo.", "Vertex color: pintar os modelos.", "Proporção e acabamento.", "Um conjunto de itens 3D pro jogo."] },
  { mes: "Mês 9", projeto: "3/6", ferramenta: "Roblox", cor: "", foco: "Montar o mapa com os modelos", semanas: ["Importar os modelos do Maya pro Roblox.", "Montar o mapa com o cenário e os itens.", "Ver o que ainda falta pro jogo.", "Primeira versão do mundo navegável."] },
  { mes: "Mês 10", projeto: "4/6", ferramenta: "Maya", cor: "", foco: "Voltar à modelagem: mais itens", semanas: ["Modelar o que faltou (personagens/itens).", "Vertex color e acabamento.", "Imprimir um modelo em 3D pra levar pra casa.", "Novos assets 3D prontos pro jogo."] },
  { mes: "Mês 11", projeto: "5/6", ferramenta: "Roblox", cor: "", foco: "Polir a jogabilidade", semanas: ["Trazer os novos modelos pro mapa.", "Spawns, itens, moedas e obstáculos.", "Regras e objetivo do jogo.", "Jogo jogável e divertido."] },
  { mes: "Mês 12", projeto: "6/6", ferramenta: "Roblox", cor: "", foco: "Polimento final + lançamento", semanas: ["Ajustes finais e correção de bugs.", "Publicar o jogo (mais completo) no Roblox.", "Demo Day pros pais.", "Certificado do Ano 2."] },
];

// ── ANO 3 — Modelagem 3D, impressão 3D e um jogo em Voxel Art ─────────────────
// Sequência: MagicaVoxel · Impressão 3D · Blender · Roblox · Blender · Roblox ·
// Blender · Impressão 3D · MagicaVoxel ×2 · Roblox ×2 (jogo em Voxel Art)
const ANO3_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/2", ferramenta: "MagicaVoxel", cor: "", foco: "Modelar em 3D (voxel)", semanas: ["Revisão do MagicaVoxel: criar em 'cubinhos'.", "Modelar um personagem ou objeto em voxel.", "Cores, detalhes e variações.", "Preparar o modelo pra impressão 3D."] },
  { mes: "Mês 2", projeto: "2/2", ferramenta: "Impressão 3D (Bambu Lab)", cor: "", foco: "Imprimir o modelo em 3D", semanas: ["O que é impressão 3D e como funciona a impressora Bambu Lab.", "Preparar o arquivo no Bambu Studio (fatiar).", "Acompanhar a impressão de perto.", "Levar a peça impressa pra casa (entregável)."] },
  { mes: "Mês 3", projeto: "1/4", ferramenta: "Blender", cor: "", foco: "Conhecer o Blender (3D)", semanas: ["Conhecer o Blender (3D gratuito e profissional).", "Navegar e mover objetos em 3D.", "Modelar formas básicas.", "Um objeto simples no Blender."] },
  { mes: "Mês 4", projeto: "2/4", ferramenta: "Roblox", cor: "", foco: "Levar o 3D pro Roblox", semanas: ["Exportar o modelo do Blender.", "Importar pro Roblox Studio.", "Posicionar no mundo e ajustar.", "Cenário com o modelo próprio."] },
  { mes: "Mês 5", projeto: "3/4", ferramenta: "Blender", cor: "", foco: "Modelar mais no Blender", semanas: ["Modelar um objeto mais elaborado.", "Materiais e cores.", "Proporção e acabamento.", "Mais assets 3D próprios."] },
  { mes: "Mês 6", projeto: "4/4", ferramenta: "Roblox", cor: "", foco: "Montar a cena no Roblox", semanas: ["Trazer os novos modelos pro Roblox.", "Montar uma cena bonita com eles.", "Iluminação e clima.", "Cena 3D navegável (entregável)."] },
  { mes: "Mês 7", projeto: "1/2", ferramenta: "Blender", cor: "", foco: "Modelar pra imprimir", semanas: ["Planejar uma peça pra impressão.", "Modelar com cuidado no Blender.", "Ajustes e acabamento.", "Modelo pronto pra impressão."] },
  { mes: "Mês 8", projeto: "2/2", ferramenta: "Impressão 3D (Bambu Lab)", cor: "", foco: "Imprimir mais criações", semanas: ["Preparar os arquivos no Bambu Studio.", "Fatiar e configurar a impressão.", "Imprimir as criações na Bambu Lab.", "Peças impressas pra levar pra casa (entregável)."] },
  { mes: "Mês 9", projeto: "1/4", ferramenta: "MagicaVoxel", cor: "", foco: "Jogo em Voxel Art: os assets", semanas: ["Planejar um jogo todo em Voxel Art.", "Modelar o cenário em voxel.", "Modelar os personagens em voxel.", "Primeiros assets do jogo."] },
  { mes: "Mês 10", projeto: "2/4", ferramenta: "MagicaVoxel", cor: "", foco: "Mais assets voxel pro jogo", semanas: ["Modelar itens e obstáculos em voxel.", "Cores e variações.", "Exportar os modelos pro Roblox.", "Pacote de assets voxel completo."] },
  { mes: "Mês 11", projeto: "3/4", ferramenta: "Roblox", cor: "", foco: "Montar o jogo voxel", semanas: ["Importar os assets voxel pro Roblox.", "Montar o mapa do jogo.", "Spawns, itens e regras.", "Jogo voxel jogável."] },
  { mes: "Mês 12", projeto: "4/4", ferramenta: "Roblox", cor: "", foco: "Lançar o jogo voxel + Demo Day", semanas: ["Ajustes finais e correção de bugs.", "Publicar o jogo todo em Voxel Art.", "Demo Day pros pais.", "Certificado do Ano 3."] },
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

// ── O que a criança domina no fim de cada ano (dinâmico por aba) ─────────────
const ANO1_DOMINA = [
  "Entende a lógica por trás dos jogos: sequência, repetição, variável, condição e eventos.",
  "Cria jogos 2D do zero no Scratch e no Construct 3 — montando regras, sem digitar código.",
  "Desenha e ANIMA os próprios personagens em pixel art (Aseprite).",
  "Modela em 3D 'de cubinhos' no MagicaVoxel e leva a criação impressa em 3D pra casa.",
  "Tem o primeiro contato com o Maya, software 3D profissional de cinema e games.",
  "Cria, publica e apresenta o próprio jogo no Roblox (Demo Day) — 5 projetos no ano.",
];
const ANO2_DOMINA = [
  "Treina a primeira inteligência artificial (Teachable Machine) e usa num projeto.",
  "Cria um jogo 2D com arte 100% própria: sprites desenhados e animados (walk cycle, efeitos).",
  "Modela cenário, itens e personagens 3D no Maya, com vertex color.",
  "Monta e publica um jogo 3D completo no Roblox — indo e voltando entre modelar e montar.",
  "Trabalha um projeto maior, com mais tempo pra preparar e polir o próprio jogo.",
  "Conclui 3 projetos no ano e fecha com Demo Day + certificado.",
];
const ANO3_DOMINA = [
  "Modela em 3D de voxel (MagicaVoxel) e no Blender, software 3D profissional e gratuito.",
  "Imprime as próprias criações em 3D de verdade na impressora Bambu Lab (Bambu Studio).",
  "Leva modelos do Blender pra dentro de mundos no Roblox.",
  "Cria um jogo completo todo em Voxel Art e publica no Roblox.",
  "Pega prática no fluxo de um estúdio: modelar → imprimir / aplicar no jogo.",
  "Conclui 4 projetos no ano, fechando com Demo Day + certificado.",
];
const ANO4_DOMINA = [
  "Escreve os próprios scripts em Lua: variáveis, funções e mecânicas de jogo.",
  "Treina modelos de IA (ML for Kids) e aplica dentro do jogo.",
  "Modela em dois softwares 3D profissionais: Maya e Blender.",
  "Cria itens 3D e publica na lojinha (UGC) do Roblox.",
  "Lança 2 jogos próprios ao longo do ano.",
  "Monta um portfólio e conclui a trilha Júnior — ponte pro CREATE.",
];

const ANOS = [
  { titulo: "Ano 1", foco: "Primeiros jogos e mundos", ferramentas: "Minecraft · Scratch · Construct 3 · Aseprite · MagicaVoxel · Maya · Roblox", trofeu: "5 projetos no ano", meses: ANO1_MESES, domina: ANO1_DOMINA },
  { titulo: "Ano 2", foco: "IA, arte animada e os primeiros modelos 3D nos jogos", ferramentas: "Teachable Machine · Aseprite · Construct 3 · Maya · Roblox", trofeu: "3 projetos no ano", meses: ANO2_MESES, domina: ANO2_DOMINA },
  { titulo: "Ano 3", foco: "Modelagem 3D, impressão 3D e um jogo em Voxel Art", ferramentas: "MagicaVoxel · Blender · Bambu Lab (impressão 3D) · Roblox", trofeu: "4 projetos no ano", meses: ANO3_MESES, domina: ANO3_DOMINA },
  { titulo: "Ano 4", foco: "Criador completo: 2 jogos, IA e itens 3D pra vender", ferramentas: "IA (ML for Kids) · Blender · Maya · Roblox + Lua", trofeu: "2 jogos + itens 3D à venda na loja + portfólio", meses: ANO4_MESES, domina: ANO4_DOMINA },
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
  { n: "Bambu Studio", d: "O software da Bambu Lab pra preparar (fatiar) e imprimir as criações em 3D de verdade." },
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

      {/* O QUE DOMINA — dinâmico por ano */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: GREEN }}>
              No fim do {atual.titulo}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que a criança domina
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {atual.domina.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: GREEN }} />
                <span className="text-sm text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
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
