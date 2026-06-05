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

// ── ANO 1 — 3D, impressão 3D e jogos em pixel art (intro, cria e leva pra casa) ─
const ANO1_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/2", ferramenta: "MagicaVoxel", cor: "", logos: ["voxel"], foco: "Arte 3D em voxel", semanas: ["Conhecer o MagicaVoxel (3D em cubinhos).", "Modelar um personagem ou objeto.", "Cores e detalhes.", "Preparar o modelo pra impressão."] },
  { mes: "Mês 2", projeto: "2/2", ferramenta: "Bambu Studio", cor: "", logos: ["bambulab"], foco: "Imprimir em 3D (Bambu Studio)", semanas: ["O que é impressão 3D (Bambu Lab).", "Preparar o arquivo no Bambu Studio.", "Fatiar e configurar a impressão.", "Peça impressa pra levar pra casa (entregável)."] },
  { mes: "Mês 3", projeto: "1/2", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Modelagem 3D no Maya", semanas: ["Conhecer o Maya (3D profissional).", "Navegar e modelar formas.", "Detalhes e proporção.", "Um modelo pronto pra imprimir."] },
  { mes: "Mês 4", projeto: "2/2", ferramenta: "Orca Slicer", cor: "", logos: ["orca"], foco: "Fatiar e imprimir (Orca Slicer)", semanas: ["Conhecer o Orca Slicer.", "Importar o modelo do Maya.", "Suportes, preenchimento e fatiar.", "Imprimir e levar pra casa (entregável)."] },
  { mes: "Mês 5", projeto: "1/2", ferramenta: "Blender", cor: "", logos: ["blender"], foco: "Modelagem 3D no Blender", semanas: ["Conhecer o Blender (3D gratuito).", "Modelar um objeto.", "Materiais e acabamento.", "Um modelo pronto pra imprimir."] },
  { mes: "Mês 6", projeto: "2/2", ferramenta: "Orca Slicer", cor: "", logos: ["orca"], foco: "Imprimir o modelo do Blender", semanas: ["Importar o modelo do Blender.", "Ajustes de impressão.", "Imprimir.", "Peça impressa (entregável)."] },
  { mes: "Mês 7", projeto: "1/4", ferramenta: "Aseprite", cor: "", logos: ["aseprite"], foco: "Pixel art", semanas: ["Conhecer o Aseprite.", "Desenhar sprites (16×16).", "Paleta e personagem.", "Conjunto de sprites pro jogo."] },
  { mes: "Mês 8", projeto: "2/4", ferramenta: "Construct 3", cor: "", logos: ["construct"], foco: "Meu jogo 2D", semanas: ["Conhecer o Construct 3.", "Montar o jogo com os sprites.", "Eventos (regras) e movimento.", "Um joguinho funcionando."] },
  { mes: "Mês 9", projeto: "3/4", ferramenta: "Aseprite", cor: "", logos: ["aseprite"], foco: "Animação em pixel art", semanas: ["Animar: idle e walk cycle.", "Efeitos (moeda, explosão).", "Exportar pro jogo.", "Sprites animados."] },
  { mes: "Mês 10", projeto: "4/4", ferramenta: "Construct 3", cor: "", logos: ["construct"], foco: "Fechar o jogo 2D", semanas: ["Trazer as animações.", "Pontos, vidas e telas.", "Inimigos e sons.", "Um jogo 2D completo (entregável)."] },
  { mes: "Mês 11", projeto: "1/2", ferramenta: "MagicaVoxel", cor: "", logos: ["voxel"], foco: "Personagens do jogo em voxel", semanas: ["Recriar o personagem do jogo em voxel.", "Itens e cenário em 3D.", "Cores e detalhes.", "Personagens 3D prontos."] },
  { mes: "Mês 12", projeto: "2/2", ferramenta: "Bambu Studio", cor: "", logos: ["bambulab"], foco: "Imprimir os personagens", semanas: ["Preparar os modelos no Bambu Studio.", "Fatiar e imprimir.", "Os personagens do jogo na sua mão.", "Demo + certificado do Ano 1."] },
];

// ── ANO 2 — IA criativa (imagem, áudio, vídeo) e web (HTML/CSS, JS, Python, dados) ─
const ANO2_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/4", ferramenta: "ChatGPT + Sora", cor: "", logos: ["chatgpt", "sora"], foco: "IA cria vídeo", semanas: ["Gerar vídeo com IA (Sora).", "Roteiro e descrição de cenas.", "Vários clipes.", "Material de vídeo da IA."] },
  { mes: "Mês 2", projeto: "2/4", ferramenta: "Gemini + Veo", cor: "", logos: ["gemini", "veo"], foco: "Mais vídeo com IA", semanas: ["Gerar vídeo com IA (Veo).", "Cenas e movimentos.", "Mais clipes pro projeto.", "Banco de vídeos da IA."] },
  { mes: "Mês 3", projeto: "3/4", ferramenta: "CapCut", cor: "", logos: ["capcut"], foco: "Editar os vídeos da IA", semanas: ["Conhecer o CapCut.", "Juntar os vídeos do Sora e do Veo.", "Cortes, transições e ritmo.", "Um vídeo montado."] },
  { mes: "Mês 4", projeto: "4/4", ferramenta: "CapCut", cor: "", logos: ["capcut"], foco: "Vídeo profissional", semanas: ["Efeitos e recursos avançados.", "Textos e legendas.", "Trilha e exportação.", "Um vídeo profissional (entregável)."] },
  { mes: "Mês 5", projeto: "1/1", ferramenta: "Suno + ElevenLabs", cor: "", logos: ["suno", "elevenlabs"], foco: "Som, música e voz com IA", semanas: ["Criar música com IA (Suno).", "Gerar voz e narração (ElevenLabs).", "Efeitos sonoros.", "Trilha e vozes próprias (entregável)."] },
  { mes: "Mês 6", projeto: "1/2", ferramenta: "ChatGPT + DALL-E", cor: "", logos: ["chatgpt", "dalle"], foco: "IA cria imagens", semanas: ["Gerar imagens com IA (DALL-E).", "Prompts visuais.", "Conceitos e arte.", "Uma galeria de imagens com IA."] },
  { mes: "Mês 7", projeto: "2/2", ferramenta: "Gemini + Nano Banana", cor: "", logos: ["gemini", "nanobanana"], foco: "Mais imagem com IA", semanas: ["Gerar e editar imagens (Nano Banana).", "Variações e ajustes.", "Texturas e ícones.", "Pacote de imagens próprio."] },
  { mes: "Mês 8", projeto: "1/5", ferramenta: "Canva", cor: "", logos: ["canva"], foco: "UI do jogo", semanas: ["O que é a interface (UI) de um jogo.", "Menus, botões e HUD.", "Ícones e identidade visual.", "A UI do jogo pronta (Canva)."] },
  { mes: "Mês 9", projeto: "2/5", ferramenta: "Roblox Studio + Lua", cor: "", logos: ["roblox", "lua"], foco: "Implementar a UI no jogo", semanas: ["Roblox Studio: começar o jogo.", "Trazer a UI feita no Canva.", "Lua: menus e botões funcionais.", "Interface funcionando no jogo."] },
  { mes: "Mês 10", projeto: "3/5", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Modelar os assets 3D", semanas: ["Modelar os personagens.", "Itens e cenário.", "Materiais e acabamento.", "Assets 3D do jogo."] },
  { mes: "Mês 11", projeto: "4/5", ferramenta: "Roblox Studio + Lua", cor: "", logos: ["roblox", "lua"], foco: "Montar e publicar o jogo", semanas: ["Trazer os modelos do Maya.", "Mecânicas em Lua.", "Testar e ajustar.", "Jogo publicado."] },
  { mes: "Mês 12", projeto: "5/5", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Assets finais + Demo Day", semanas: ["Modelar melhorias e extras.", "Acabamento final dos assets.", "Atualizar o jogo.", "Demo Day + certificado do Ano 2."] },
];

// ── ANO 3 — Jogo no Roblox, site completo, Python e impressão 3D ──────────────
// 4 projetos: Maya↔Roblox (jogo) · web HTML/CSS/JS + dados (5m) · Python (2m) · impressão 3D
const ANO3_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/4", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Modelar os assets do jogo", semanas: ["Conhecer/revisar o Maya.", "Modelar personagens e itens.", "Detalhes e proporção.", "Primeiros assets 3D."] },
  { mes: "Mês 2", projeto: "2/4", ferramenta: "Roblox Studio + Lua", cor: "", logos: ["roblox", "lua"], foco: "Montar o jogo no Roblox", semanas: ["Roblox Studio: cenário e mundo.", "Importar os assets do Maya.", "Lua: primeiros scripts.", "Jogo tomando forma."] },
  { mes: "Mês 3", projeto: "3/4", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Mais assets 3D", semanas: ["Modelar mais itens e cenário.", "Materiais e acabamento.", "Otimizar pro Roblox.", "Novos assets prontos."] },
  { mes: "Mês 4", projeto: "4/4", ferramenta: "Roblox Studio + Lua", cor: "", logos: ["roblox", "lua"], foco: "Programar e publicar", semanas: ["Mecânicas em Lua.", "Pontuação, itens e regras.", "Testar e ajustar.", "Jogo publicado (entregável)."] },
  { mes: "Mês 5", projeto: "1/5", ferramenta: "HTML + CSS", cor: "", logos: ["html", "css"], foco: "A web: HTML e CSS", semanas: ["O que é a web e como um site funciona.", "HTML: textos, imagens e links.", "CSS: cores, fontes e espaçamentos.", "Sua primeira página no ar."] },
  { mes: "Mês 6", projeto: "2/5", ferramenta: "HTML + CSS", cor: "", logos: ["html", "css"], foco: "HTML e CSS intermediário", semanas: ["Layout (box model e flexbox).", "Responsivo (celular e PC).", "Componentes e seções.", "Um site bonito e completo."] },
  { mes: "Mês 7", projeto: "3/5", ferramenta: "JavaScript", cor: "", logos: ["javascript"], foco: "Sites interativos (JS)", semanas: ["JavaScript: o que é e onde roda.", "Variáveis, funções e eventos.", "Mudar a página ao clicar (DOM).", "Uma página interativa."] },
  { mes: "Mês 8", projeto: "4/5", ferramenta: "JavaScript", cor: "", logos: ["javascript"], foco: "JavaScript intermediário", semanas: ["Condições e loops.", "Formulários e respostas.", "Deixar o site completo e interativo.", "Site interativo pronto."] },
  { mes: "Mês 9", projeto: "5/5", ferramenta: "Banco de dados + Domínio + Hospedagem", cor: "", logos: ["database", "hosting"], foco: "Colocar o site no ar", semanas: ["Banco de dados: guardar e consultar.", "Registrar um domínio.", "Hospedar (colocar no ar).", "Seu site online pra todo mundo (entregável)."] },
  { mes: "Mês 10", projeto: "1/2", ferramenta: "Python", cor: "", logos: ["python"], foco: "Programação com Python", semanas: ["Lógica: variáveis, condições e loops.", "Funções, listas e dicionários.", "Resolver problemas (algoritmos).", "Um programa próprio."] },
  { mes: "Mês 11", projeto: "2/2", ferramenta: "Python", cor: "", logos: ["python"], foco: "Python intermediário", semanas: ["Trabalhar com dados e arquivos.", "Organizar o código em funções e módulos.", "Bibliotecas úteis.", "Um projeto em Python (entregável)."] },
  { mes: "Mês 12", projeto: "1/1", ferramenta: "Bambu Studio", cor: "", logos: ["bambulab"], foco: "Imprimir as criações do ano", semanas: ["Escolher os modelos feitos no ano (Maya).", "Preparar no Bambu Studio.", "Fatiar e imprimir.", "Peças impressas pra levar pra casa + certificado do Ano 3."] },
];

// ── ANO 4 — Impressão 3D e os motores mais avançados (Unity/C#, Unreal/C++) ───
// 4 projetos: MagicaVoxel+impressão · Maya+Orca · Blender↔Unity · Maya↔Unreal
const ANO4_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/2", ferramenta: "MagicaVoxel", cor: "", logos: ["voxel"], foco: "Arte 3D em voxel", semanas: ["Conhecer o MagicaVoxel (3D em cubinhos).", "Modelar um personagem ou objeto.", "Cores e detalhes.", "Preparar pra impressão."] },
  { mes: "Mês 2", projeto: "2/2", ferramenta: "Bambu Studio", cor: "", logos: ["bambulab"], foco: "Imprimir o voxel em 3D", semanas: ["Preparar o arquivo no Bambu Studio.", "Fatiar e configurar.", "Imprimir.", "Peça impressa pra levar pra casa (entregável)."] },
  { mes: "Mês 3", projeto: "1/2", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Modelagem 3D no Maya", semanas: ["Modelar um objeto/personagem.", "Detalhes e proporção.", "Materiais.", "Modelo pronto pra imprimir."] },
  { mes: "Mês 4", projeto: "2/2", ferramenta: "Orca Slicer", cor: "", logos: ["orca"], foco: "Fatiar e imprimir (Orca Slicer)", semanas: ["Importar o modelo do Maya.", "Suportes e preenchimento.", "Fatiar e imprimir.", "Peça impressa (entregável)."] },
  { mes: "Mês 5", projeto: "1/4", ferramenta: "Blender", cor: "", logos: ["blender"], foco: "Modelar pro Unity", semanas: ["Conhecer/revisar o Blender.", "Modelar assets 3D.", "Materiais.", "Assets prontos pro Unity."] },
  { mes: "Mês 6", projeto: "2/4", ferramenta: "Unity + C#", cor: "", logos: ["unity", "csharp"], foco: "Conhecer o Unity", semanas: ["Interface e cena do Unity.", "Importar os modelos do Blender.", "C#: primeiros scripts.", "Mover um personagem."] },
  { mes: "Mês 7", projeto: "3/4", ferramenta: "Blender", cor: "", logos: ["blender"], foco: "Mais 3D no Blender", semanas: ["Modelar cenário e itens.", "Render e detalhes.", "Otimizar pro Unity.", "Novos assets 3D."] },
  { mes: "Mês 8", projeto: "4/4", ferramenta: "Unity + C#", cor: "", logos: ["unity", "csharp"], foco: "Montar e publicar o jogo", semanas: ["Mecânicas em C#.", "Física, UI e sons.", "Testar e ajustar.", "Um jogo no Unity (entregável)."] },
  { mes: "Mês 9", projeto: "1/4", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Modelar pro Unreal", semanas: ["Modelagem 3D avançada.", "Personagens e cenário.", "Materiais.", "Assets pro Unreal."] },
  { mes: "Mês 10", projeto: "2/4", ferramenta: "Unreal Engine + C++", cor: "", logos: ["unreal", "cpp"], foco: "Conhecer a Unreal", semanas: ["O motor mais avançado (Unreal).", "Importar os modelos do Maya.", "Blueprints + noção de C++.", "Uma cena na Unreal."] },
  { mes: "Mês 11", projeto: "3/4", ferramenta: "Maya", cor: "", logos: ["maya"], foco: "Mais assets 3D", semanas: ["Modelar mais itens.", "Detalhes e acabamento.", "Otimizar pro Unreal.", "Novos assets."] },
  { mes: "Mês 12", projeto: "4/4", ferramenta: "Unreal Engine + C++", cor: "", logos: ["unreal", "cpp"], foco: "Montar e lançar o jogo", semanas: ["Mecânicas (Blueprints + C++).", "Gráficos e materiais.", "Polir e publicar.", "Demo Day final + certificado da trilha."] },
];

// ── O que o aluno domina no fim de cada ano (dinâmico por aba) ────────────────
const ANO1_DOMINA = [
  "Modela em 3D (MagicaVoxel, Maya e Blender) e imprime de verdade (Bambu Studio e Orca Slicer).",
  "Leva pra casa as próprias criações impressas em 3D.",
  "Desenha e anima em pixel art (Aseprite).",
  "Cria um jogo 2D completo no Construct 3.",
  "Transforma os personagens do próprio jogo em modelos 3D.",
  "Imprime os personagens do próprio jogo.",
];
const ANO2_DOMINA = [
  "Cria vídeos com IA (Sora e Veo) e edita no CapCut.",
  "Cria som, música e voz com IA (Suno e ElevenLabs).",
  "Cria imagens com IA (DALL-E e Nano Banana).",
  "Desenha a interface (UI) dos jogos no Canva.",
  "Modela em 3D no Maya e monta o jogo no Roblox Studio (Lua).",
  "Conclui 4 projetos, terminando com um jogo próprio publicado.",
];
const ANO3_DOMINA = [
  "Cria um jogo completo no Roblox Studio com Lua e assets 3D (Maya).",
  "Constrói um site completo: HTML, CSS, JavaScript, banco de dados, domínio e hospedagem.",
  "Programa em Python (lógica e projetos).",
  "Imprime em 3D as criações do ano (Bambu Studio).",
  "Conduz 4 projetos do início ao fim.",
  "Junta jogos, web e programação num só ano.",
];
const ANO4_DOMINA = [
  "Modela em voxel e em 3D (MagicaVoxel, Maya) e imprime de verdade (Bambu Studio, Orca Slicer).",
  "Cria um jogo no Unity programando em C#.",
  "Cria um jogo na Unreal Engine, o motor mais avançado, com C++.",
  "Modela os assets 3D dos próprios jogos (Blender e Maya).",
  "Domina o fluxo de um estúdio: modelar → aplicar na engine.",
  "Conclui a trilha com 4 projetos e um portfólio de jogos.",
];

const ANOS = [
  { titulo: "Ano 1", foco: "3D, impressão 3D e jogos em pixel art", ferramentas: "MagicaVoxel · Bambu Studio · Maya · Orca Slicer · Blender · Aseprite · Construct 3", trofeu: "5 projetos no ano", meses: ANO1_MESES, domina: ANO1_DOMINA },
  { titulo: "Ano 2", foco: "IA criativa (vídeo, áudio, imagem) e um jogo no Roblox com UI própria", ferramentas: "ChatGPT · Gemini · Sora · Veo · CapCut · Suno · ElevenLabs · DALL-E · Nano Banana · Canva · Maya · Roblox Studio + Lua", trofeu: "4 projetos no ano", meses: ANO2_MESES, domina: ANO2_DOMINA },
  { titulo: "Ano 3", foco: "Jogo no Roblox, site completo (HTML/CSS/JS + dados), Python e impressão 3D", ferramentas: "Maya · Roblox Studio + Lua · HTML/CSS · JavaScript · Banco de dados · Python · Bambu Studio", trofeu: "4 projetos no ano", meses: ANO3_MESES, domina: ANO3_DOMINA },
  { titulo: "Ano 4", foco: "Impressão 3D e os motores mais avançados: Unity (C#) e Unreal (C++)", ferramentas: "MagicaVoxel · Bambu Studio · Maya · Orca Slicer · Blender · Unity + C# · Unreal Engine + C++", trofeu: "4 projetos no ano", meses: ANO4_MESES, domina: ANO4_DOMINA },
];

const CONCEITOS = [
  "Criação digital e IA",
  "Web (HTML, CSS, JS)",
  "Programação (Python, C#, C++, Lua)",
  "Banco de dados e deploy",
  "Jogos (Construct, Roblox, Unity, Unreal)",
  "3D (Maya, Blender, voxel)",
  "Impressão 3D",
  "IA (texto, imagem, áudio, vídeo)",
  "Realidade Virtual",
  "Portfólio de jogos",
];

const FERRAMENTAS = [
  // Programação e web
  { n: "Python", d: "A linguagem mais usada do mundo — lógica e projetos." },
  { n: "C#", d: "A linguagem do Unity (jogos)." },
  { n: "C++", d: "Linguagem de alta performance (Unreal e games)." },
  { n: "Lua", d: "A linguagem do Roblox Studio." },
  { n: "HTML", d: "A estrutura dos sites." },
  { n: "CSS", d: "O estilo dos sites: cores, fontes e layout." },
  { n: "JavaScript", d: "Deixa os sites interativos e vivos." },
  { n: "Banco de dados", d: "Guardar e consultar dados de verdade." },
  { n: "Hospedagem e domínio", d: "Colocar o projeto no ar, na internet." },
  // Motores de jogo
  { n: "Construct 3", d: "Criar jogos 2D sem digitar código." },
  { n: "Unity", d: "Motor de jogos profissional (C#) — 2D, 3D e VR." },
  { n: "Unreal Engine", d: "O motor mais avançado, com gráficos de ponta." },
  { n: "Roblox Studio", d: "Criar e publicar jogos no Roblox, programando em Lua." },
  // 3D e impressão
  { n: "Maya", d: "3D profissional: modelar, texturizar e animar." },
  { n: "Blender", d: "3D gratuito e profissional." },
  { n: "MagicaVoxel", d: "Arte 3D em voxel (cubinhos) — gratuita e divertida." },
  { n: "Bambu Studio", d: "Impressão 3D de verdade (Bambu Lab)." },
  { n: "Orca Slicer", d: "Fatiar e preparar modelos para a impressão 3D." },
  // Realidade virtual
  { n: "Realidade Virtual", d: "Experiências imersivas em VR (dentro do Unity e da Unreal)." },
  // Arte e mídia
  { n: "Aseprite", d: "Desenhar e animar em pixel art." },
  { n: "Canva", d: "Design visual: posts, capas e apresentações." },
  { n: "CapCut", d: "Edição de vídeo, do básico ao profissional." },
  // IA
  { n: "ChatGPT", d: "IA assistente para escrever, pesquisar e criar." },
  { n: "Gemini", d: "A IA do Google." },
  { n: "Claude", d: "IA robusta: arquivos, Artifacts e Projects." },
  { n: "DALL-E", d: "Gerar imagens com IA (via ChatGPT)." },
  { n: "Nano Banana", d: "Gerar e editar imagens com IA (via Gemini)." },
  { n: "Sora", d: "Gerar vídeos com IA (via ChatGPT)." },
  { n: "Veo", d: "Gerar vídeos com IA (via Gemini)." },
  { n: "Suno", d: "Criar música com IA." },
  { n: "ElevenLabs", d: "Gerar voz e narração com IA." },
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
            Da criação digital ao desenvolvimento profissional: <strong>web</strong>,{" "}
            <strong>programação</strong> (Python, JS), <strong>jogos</strong> (Unity, Unreal),{" "}
            <strong>3D</strong>, <strong>IA</strong> e <strong>Realidade Virtual</strong>.
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
              Do mais fácil ao mais avançado: a cada ano a turma sobe de nível, dos primeiros sites e
              jogos até a Unreal, a IA e a Realidade Virtual.{" "}
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
