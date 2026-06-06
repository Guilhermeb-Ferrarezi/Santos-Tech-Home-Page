import type { Aula, MesEmenta } from "./tipos";

/**
 * Importa automaticamente todos os arquivos de aula (m01-aula-01.ts ...
 * m48-aula-08.ts). Numeração contínua: Ano 1 = m01-m12, Ano 2 = m13-m24,
 * Ano 3 = m25-m36, Ano 4 = m37-m48.
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

const BLUE = "#2E8FCF";

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
    foco: "3D, impressão 3D e jogos em pixel art",
    trofeu: "5 projetos no ano",
    domina: [
      "Modela em 3D (MagicaVoxel, Maya e Blender) e imprime de verdade (Bambu Studio e Orca Slicer).",
      "Leva pra casa as próprias criações impressas em 3D.",
      "Desenha e anima em pixel art (Aseprite).",
      "Cria um jogo 2D completo no Construct 3.",
      "Transforma os personagens do próprio jogo em modelos 3D.",
      "Imprime os personagens do próprio jogo.",
    ],
    meses: [
      { ferramenta: "MagicaVoxel", foco: "Arte 3D em voxel" },
      { ferramenta: "Bambu Studio", foco: "Imprimir em 3D (Bambu Studio)" },
      { ferramenta: "Maya", foco: "Modelagem 3D no Maya" },
      { ferramenta: "Orca Slicer", foco: "Fatiar e imprimir (Orca Slicer)" },
      { ferramenta: "Blender", foco: "Modelagem 3D no Blender" },
      { ferramenta: "Orca Slicer", foco: "Imprimir o modelo do Blender" },
      { ferramenta: "Aseprite", foco: "Pixel art" },
      { ferramenta: "Construct 3", foco: "Meu jogo 2D" },
      { ferramenta: "Aseprite", foco: "Animação em pixel art" },
      { ferramenta: "Construct 3", foco: "Fechar o jogo 2D" },
      { ferramenta: "MagicaVoxel", foco: "Personagens do jogo em voxel" },
      { ferramenta: "Bambu Studio", foco: "Imprimir os personagens" },
    ],
  },
  {
    titulo: "Ano 2",
    foco: "IA criativa (vídeo + trilha + imagem) e um jogo no Roblox com UI própria",
    trofeu: "3 projetos no ano",
    domina: [
      "Cria vídeos com IA (Sora e Veo), faz a trilha sonora com IA (Suno e ElevenLabs) e edita tudo no CapCut.",
      "Cria imagens com IA (DALL-E e Nano Banana).",
      "Desenha a interface (UI) dos jogos no Canva.",
      "Modela em 3D no Maya e monta o jogo no Roblox Studio (Lua).",
      "Reaproveita a música, a voz e a arte da IA dentro dos próprios jogos.",
      "Conclui 3 grandes projetos, terminando com um jogo próprio publicado.",
    ],
    meses: [
      { ferramenta: "ChatGPT + Sora", foco: "IA cria vídeo" },
      { ferramenta: "Gemini + Veo", foco: "Mais vídeo com IA" },
      { ferramenta: "Suno + ElevenLabs", foco: "Som, música e voz com IA" },
      { ferramenta: "CapCut", foco: "Editar o vídeo (com a trilha da IA)" },
      { ferramenta: "CapCut", foco: "Vídeo profissional" },
      { ferramenta: "ChatGPT + DALL-E", foco: "IA cria imagens" },
      { ferramenta: "Gemini + Nano Banana", foco: "Mais imagem com IA" },
      { ferramenta: "Canva", foco: "UI do jogo" },
      { ferramenta: "Roblox Studio + Lua", foco: "Implementar a UI no jogo" },
      { ferramenta: "Maya", foco: "Modelar os assets 3D" },
      { ferramenta: "Roblox Studio + Lua", foco: "Montar e publicar o jogo" },
      { ferramenta: "Maya", foco: "Assets finais + Demo Day" },
    ],
  },
  {
    titulo: "Ano 3",
    foco: "Jogo no Roblox (Maya/Lua + impressão 3D), site completo e Python",
    trofeu: "3 projetos no ano",
    domina: [
      "Cria um jogo completo no Roblox Studio com Lua e assets 3D (Maya).",
      "Imprime em 3D, na vida real, os personagens e itens do próprio jogo (Bambu Studio).",
      "Constrói um site completo: HTML, CSS, JavaScript, banco de dados, domínio e hospedagem.",
      "Programa em Python (lógica e projetos).",
      "Conduz 3 grandes projetos do início ao fim.",
      "Junta jogos, impressão 3D, web e programação num só ano.",
    ],
    meses: [
      { ferramenta: "Maya", foco: "Modelar os assets do jogo" },
      { ferramenta: "Roblox Studio + Lua", foco: "Montar o jogo no Roblox" },
      { ferramenta: "Maya", foco: "Mais assets 3D" },
      { ferramenta: "Roblox Studio + Lua", foco: "Programar e publicar" },
      { ferramenta: "Bambu Studio", foco: "Imprimir os personagens do jogo" },
      { ferramenta: "HTML + CSS", foco: "A web: HTML e CSS" },
      { ferramenta: "HTML + CSS", foco: "HTML e CSS intermediário" },
      { ferramenta: "JavaScript", foco: "Sites interativos (JS)" },
      { ferramenta: "JavaScript", foco: "JavaScript intermediário" },
      { ferramenta: "Banco de dados + Domínio + Hospedagem", foco: "Colocar o site no ar" },
      { ferramenta: "Python", foco: "Programação com Python" },
      { ferramenta: "Python", foco: "Python intermediário" },
    ],
  },
  {
    titulo: "Ano 4",
    foco: "Claude, Realidade Virtual e os motores Unity (C#) e Unreal (C++)",
    trofeu: "4 projetos no ano",
    domina: [
      "Usa o Claude como assistente de verdade: lê os arquivos do projeto e dá referências melhores.",
      "Cria uma experiência em Realidade Virtual no Unity (C#).",
      "Cria um jogo no Unity programando em C#.",
      "Cria um jogo na Unreal Engine, o motor mais avançado, com C++.",
      "Modela os assets 3D dos próprios jogos (Blender e Maya).",
      "Conclui a trilha com 4 projetos e um portfólio de jogos.",
    ],
    meses: [
      { ferramenta: "Claude", foco: "Claude: a IA que ajuda nos projetos" },
      { ferramenta: "Realidade Virtual (Unity)", foco: "Introdução à VR no Unity" },
      { ferramenta: "Realidade Virtual (Unity)", foco: "Interação em VR" },
      { ferramenta: "Realidade Virtual (Unity)", foco: "Uma experiência VR" },
      { ferramenta: "Blender", foco: "Modelar pro Unity" },
      { ferramenta: "Unity + C#", foco: "Conhecer o Unity" },
      { ferramenta: "Blender", foco: "Mais 3D no Blender" },
      { ferramenta: "Unity + C#", foco: "Montar e publicar o jogo" },
      { ferramenta: "Maya", foco: "Modelar pro Unreal" },
      { ferramenta: "Unreal Engine + C++", foco: "Conhecer a Unreal" },
      { ferramenta: "Maya", foco: "Mais assets 3D" },
      { ferramenta: "Unreal Engine + C++", foco: "Montar e lançar o jogo" },
    ],
  },
];

export const ANOS_TEC_CREATE: AnoEmenta[] = ANOS_META.map((ano, ai) => ({
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
      cor: BLUE,
      aulas: aulasDoMes(globalMM),
    } as MesEmenta;
  }),
}));
