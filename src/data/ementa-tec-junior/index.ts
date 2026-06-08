import type { Aula, MesEmenta } from "./tipos";

/**
 * Importa automaticamente todos os arquivos de aula da trilha (m01-aula-01.ts
 * ... m48-aula-08.ts). Numeração contínua de mês: Ano 1 = m01-m12, Ano 2 =
 * m13-m24, Ano 3 = m25-m36, Ano 4 = m37-m48. Cada arquivo exporta `aula`.
 */
const modules = import.meta.glob("./m*-aula-*.ts", { eager: true }) as Record<
  string,
  { aula: Aula }
>;

function aulasDoMes(mm: number): Aula[] {
  const prefixo = `/m${String(mm).padStart(2, "0")}-aula-`;
  return Object.entries(modules)
    .filter(([path]) => path.includes(prefixo))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.aula)
    .filter(Boolean);
}

const GREEN = "#0DB88F";

export type AnoEmenta = {
  titulo: string;
  foco: string;
  trofeu: string;
  domina: string[];
  meses: MesEmenta[];
};

type MesMeta = { ferramenta: string; foco: string };

const ANOS_META: { titulo: string; foco: string; trofeu: string; domina: string[]; meses: MesMeta[] }[] = [
  {
    titulo: "Ano 1",
    foco: "Primeiros jogos e mundos",
    trofeu: "5 projetos no ano",
    domina: [
      "Entende a lógica por trás dos jogos: sequência, repetição, variável, condição e eventos.",
      "Cria jogos 2D do zero no Scratch e no Construct 3 — montando regras, sem digitar código.",
      "Desenha e ANIMA os próprios personagens em pixel art (Aseprite).",
      "Modela em 3D de cubinhos no MagicaVoxel e leva a criação impressa em 3D pra casa.",
      "Tem o primeiro contato com o Maya, software 3D profissional de cinema e games.",
      "Cria, publica e apresenta o próprio jogo no Roblox (Demo Day) — 5 projetos no ano.",
    ],
    meses: [
      { ferramenta: "Minecraft + MakeCode", foco: "Primeiros comandos e o Agente" },
      { ferramenta: "Minecraft + MakeCode", foco: "Construir e mini-jogos" },
      { ferramenta: "Scratch", foco: "Meu primeiro jogo 2D" },
      { ferramenta: "Scratch", foco: "Jogos com regras" },
      { ferramenta: "Construct 3", foco: "Começar um jogo 2D de verdade" },
      { ferramenta: "Aseprite", foco: "Desenhar os sprites do jogo (pixel art)" },
      { ferramenta: "Aseprite", foco: "Dar vida: animação" },
      { ferramenta: "Construct 3", foco: "Montar o jogo com a arte própria" },
      { ferramenta: "MagicaVoxel", foco: "Arte 3D em cubinhos + Impressão 3D" },
      { ferramenta: "Roblox (Criador Iniciante)", foco: "Meu mundo no Roblox" },
      { ferramenta: "Maya", foco: "Primeiro contato com o 3D profissional" },
      { ferramenta: "Roblox", foco: "Publicar meu jogo + Demo Day" },
    ],
  },
  {
    titulo: "Ano 2",
    foco: "IA, arte animada e os primeiros modelos 3D nos jogos",
    trofeu: "3 projetos no ano",
    domina: [
      "Treina a primeira inteligência artificial (Teachable Machine) e usa num projeto.",
      "Cria um jogo 2D com arte 100% própria: sprites desenhados e animados (walk cycle, efeitos).",
      "Modela cenário, itens e personagens 3D no Maya, com vertex color.",
      "Monta e publica um jogo 3D completo no Roblox — indo e voltando entre modelar e montar.",
      "Trabalha um projeto maior, com mais tempo pra preparar e polir o próprio jogo.",
      "Conclui 3 projetos no ano e fecha com Demo Day + certificado.",
    ],
    meses: [
      { ferramenta: "Teachable Machine", foco: "Conhecer a IA" },
      { ferramenta: "Teachable Machine + Scratch", foco: "IA num projeto" },
      { ferramenta: "Aseprite", foco: "Sprites pro jogo do ano" },
      { ferramenta: "Construct 3", foco: "Começar o jogo 2D (mais sistemas)" },
      { ferramenta: "Aseprite", foco: "Animar o jogo" },
      { ferramenta: "Construct 3", foco: "Fechar e publicar o jogo 2D" },
      { ferramenta: "Maya", foco: "Começar o jogo 3D: o cenário" },
      { ferramenta: "Maya", foco: "Modelar os itens do jogo" },
      { ferramenta: "Roblox", foco: "Montar o mapa com os modelos" },
      { ferramenta: "Maya", foco: "Voltar à modelagem: mais itens" },
      { ferramenta: "Roblox", foco: "Polir a jogabilidade" },
      { ferramenta: "Roblox", foco: "Polimento final + lançamento" },
    ],
  },
  {
    titulo: "Ano 3",
    foco: "Modelagem 3D, impressão 3D e um jogo em Voxel Art",
    trofeu: "4 projetos no ano",
    domina: [
      "Modela em 3D de voxel (MagicaVoxel) e no Blender, software 3D profissional e gratuito.",
      "Imprime as próprias criações em 3D de verdade na impressora Bambu Lab (Bambu Studio).",
      "Leva modelos do Blender pra dentro de mundos no Roblox.",
      "Cria um jogo completo todo em Voxel Art e publica no Roblox.",
      "Pega prática no fluxo de um estúdio: modelar, imprimir e aplicar no jogo.",
      "Conclui 4 projetos no ano, fechando com Demo Day + certificado.",
    ],
    meses: [
      { ferramenta: "MagicaVoxel", foco: "Modelar em 3D (voxel)" },
      { ferramenta: "Impressão 3D (Bambu Lab)", foco: "Imprimir o modelo em 3D" },
      { ferramenta: "Blender", foco: "Conhecer o Blender (3D)" },
      { ferramenta: "Roblox", foco: "Levar o 3D pro Roblox" },
      { ferramenta: "Blender", foco: "Modelar mais no Blender" },
      { ferramenta: "Roblox", foco: "Montar a cena no Roblox" },
      { ferramenta: "Blender", foco: "Modelar pra imprimir" },
      { ferramenta: "Impressão 3D (Bambu Lab)", foco: "Imprimir mais criações" },
      { ferramenta: "MagicaVoxel", foco: "Jogo em Voxel Art: os assets" },
      { ferramenta: "MagicaVoxel", foco: "Mais assets voxel pro jogo" },
      { ferramenta: "Roblox", foco: "Montar o jogo voxel" },
      { ferramenta: "Roblox", foco: "Lançar o jogo voxel + Demo Day" },
    ],
  },
  {
    titulo: "Ano 4",
    foco: "IA, itens pra vender (UGC), impressão 3D e jogo com código (Lua)",
    trofeu: "4 projetos no ano",
    domina: [
      "Treina uma IA (ML for Kids) e usa num projeto próprio.",
      "Produz itens 3D pra loja (UGC) em três ferramentas — MagicaVoxel, Blender e Maya — e entende a diferença entre elas.",
      "Publica os próprios itens à venda na loja do Roblox (UGC).",
      "Modela e imprime itens em 3D de verdade (Maya + Bambu Lab).",
      "Tem o primeiro contato com código de texto (Lua) e cria um jogo no Roblox.",
      "Monta um portfólio e conclui a trilha Júnior — ponte pro CREATE.",
    ],
    meses: [
      { ferramenta: "IA (ML for Kids)", foco: "IA que aprende" },
      { ferramenta: "IA (ML for Kids)", foco: "IA dentro do jogo" },
      { ferramenta: "MagicaVoxel", foco: "Itens pra loja (voxel)" },
      { ferramenta: "Blender", foco: "Itens pra loja (Blender)" },
      { ferramenta: "Maya", foco: "Itens pra loja (Maya)" },
      { ferramenta: "Roblox", foco: "Publicar os itens na loja (UGC)" },
      { ferramenta: "Maya", foco: "Modelar itens novos pra imprimir" },
      { ferramenta: "Impressão 3D (Bambu Lab)", foco: "Imprimir os itens em 3D" },
      { ferramenta: "Roblox + Lua", foco: "Introdução ao Lua" },
      { ferramenta: "Roblox + Lua", foco: "Mais Lua: mecânicas" },
      { ferramenta: "Roblox + Lua", foco: "Montar o jogo" },
      { ferramenta: "Roblox + Lua", foco: "Finalizar + publicar + Demo Day" },
    ],
  },
];

export const ANOS_TEC_JUNIOR: AnoEmenta[] = ANOS_META.map((ano, ai) => ({
  titulo: ano.titulo,
  foco: ano.foco,
  trofeu: ano.trofeu,
  domina: ano.domina,
  meses: ano.meses.map((m, mi) => {
    const globalMM = ai * 12 + mi + 1;
    return {
      mes: `Mês ${mi + 1}`,
      ferramenta: m.ferramenta,
      foco: m.foco,
      cor: GREEN,
      aulas: aulasDoMes(globalMM),
    } as MesEmenta;
  }),
}));

/** Compat: Ano 1 isolado (uso anterior). */
export const MESES_TEC_JUNIOR_ANO1: MesEmenta[] = ANOS_TEC_JUNIOR[0].meses;
