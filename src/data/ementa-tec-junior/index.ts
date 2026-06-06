import type { Aula, MesEmenta } from "./tipos";

/**
 * Importa automaticamente todos os arquivos de aula (m01-aula-01.ts ...
 * m12-aula-08.ts) via glob — assim não é preciso listar 96 imports à mão.
 * Cada arquivo exporta `aula`.
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

const META: { mes: string; ferramenta: string; foco: string; projeto: string }[] = [
  { mes: "Mês 1", ferramenta: "Minecraft + MakeCode", foco: "Primeiros comandos e o Agente", projeto: "Projeto Minecraft (1/2)" },
  { mes: "Mês 2", ferramenta: "Minecraft + MakeCode", foco: "Construir e mini-jogos", projeto: "Projeto Minecraft (2/2)" },
  { mes: "Mês 3", ferramenta: "Scratch", foco: "Meu primeiro jogo 2D", projeto: "Projeto Scratch (1/2)" },
  { mes: "Mês 4", ferramenta: "Scratch", foco: "Jogos com regras", projeto: "Projeto Scratch (2/2)" },
  { mes: "Mês 5", ferramenta: "Construct 3", foco: "Começar um jogo 2D de verdade", projeto: "Jogo 2D com arte própria (1/4)" },
  { mes: "Mês 6", ferramenta: "Aseprite", foco: "Desenhar os sprites do jogo (pixel art)", projeto: "Jogo 2D com arte própria (2/4)" },
  { mes: "Mês 7", ferramenta: "Aseprite", foco: "Dar vida: animação", projeto: "Jogo 2D com arte própria (3/4)" },
  { mes: "Mês 8", ferramenta: "Construct 3", foco: "Montar o jogo com a arte própria", projeto: "Jogo 2D com arte própria (4/4)" },
  { mes: "Mês 9", ferramenta: "MagicaVoxel", foco: "Arte 3D em cubinhos + Impressão 3D", projeto: "Personagem 3D impresso (1/2)" },
  { mes: "Mês 10", ferramenta: "Roblox (Criador Iniciante)", foco: "Meu mundo no Roblox", projeto: "Mundo no Roblox (2/2)" },
  { mes: "Mês 11", ferramenta: "Maya", foco: "Primeiro contato com o 3D profissional", projeto: "Jogo publicado no Roblox (1/2)" },
  { mes: "Mês 12", ferramenta: "Roblox", foco: "Publicar meu jogo + Demo Day", projeto: "Jogo publicado no Roblox (2/2)" },
];

export const MESES_TEC_JUNIOR_ANO1: MesEmenta[] = META.map((m, i) => ({
  mes: m.mes,
  ferramenta: m.ferramenta,
  foco: m.foco,
  cor: GREEN,
  aulas: aulasDoMes(i + 1),
}));

export const ANO1_INFO = {
  titulo: "Ano 1",
  foco: "Primeiros jogos e mundos",
  ferramentas: "Minecraft · Scratch · Construct 3 · Aseprite · MagicaVoxel · Maya · Roblox",
  trofeu: "5 projetos no ano",
  domina: [
    "Entende a lógica por trás dos jogos: sequência, repetição, variável, condição e eventos.",
    "Cria jogos 2D do zero no Scratch e no Construct 3 — montando regras, sem digitar código.",
    "Desenha e ANIMA os próprios personagens em pixel art (Aseprite).",
    "Modela em 3D de cubinhos no MagicaVoxel e leva a criação impressa em 3D pra casa.",
    "Tem o primeiro contato com o Maya, software 3D profissional de cinema e games.",
    "Cria, publica e apresenta o próprio jogo no Roblox (Demo Day) — 5 projetos no ano.",
  ],
};
