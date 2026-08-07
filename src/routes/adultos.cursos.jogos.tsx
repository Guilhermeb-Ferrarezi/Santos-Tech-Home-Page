import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/jogos")({
  component: JogosPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento de Jogos para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar jogos 2D e 3D com Unity e Godot 4 em Ribeirão Preto. Do plataformer ao jogo comercial publicado na Steam — aulas presenciais e individuais na Santos Tech.",
      path: "/adultos/cursos/jogos",
    }),
})

const COURSE_DATA = {
  nome: "Desenvolvimento de Jogos: Unity e Godot",
  categoria: "Programação",
  tagline: "Crie jogos completos do conceito à publicação com engines profissionais",
  targetAudience: [
    "Você é jogador apaixonado que sempre quis criar seus próprios games mas não sabia por onde começar",
    "Você tem noções de programação e quer aplicá-las criando projetos criativos e interativos",
    "Você quer trabalhar em estúdios de jogos, como freelancer ou lançar seus próprios jogos indie",
    "Você é artista ou designer e quer entender a parte técnica para colaborar melhor em equipes de gamedev",
    "Você quer criar jogos sérios (serious games) ou simulações para treinamento e educação",
    "Você busca uma carreira criativa em tecnologia com possibilidade de renda global via Steam e lojas mobile",
  ],
  tiers: [
    {
      label: "Tier 1",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Desenvolver jogos 2D e 3D com física avançada, animações, áudio e sistema de save usando Unity e Godot",
      modules: [
        {
          title: "Godot 4 Avançado: Sistemas de Jogo",
          topics: [
            "AnimationPlayer e AnimationTree para animações de personagem com blend",
            "Sistema de áudio: SFX, música com fade in/out e bus de mixagem",
            "TileMap e TileSet para criação de fases com blocos reutilizáveis",
            "Autoload e Singletons para dados globais (score, configurações)",
            "Sistema de save/load com ResourceSaver e arquivos JSON",
          ],
        },
        {
          title: "Unity: Introdução e Jogo 3D",
          topics: [
            "Interface do Unity 6: Hierarchy, Inspector, Project e Game View",
            "C# fundamentos para Unity: MonoBehaviour, Start, Update e eventos",
            "Physics 3D: Rigidbody, Colliders e detecção de triggers",
            "Sistema de animações com Animator Controller e Mecanim",
            "Criação de prefabs, instanciação e destruição de objetos em runtime",
          ],
        },
        {
          title: "Projeto: Jogo 3D de Ação com Unity",
          topics: [
            "Controlador de personagem em terceira pessoa com Cinemachine",
            "Sistema de inimigos: patrulha com NavMesh e detecção do jogador",
            "Interface de usuário com Canvas, HUD de vida e mini-mapa",
            "Sistema de itens coletáveis e inventário básico",
          ],
        },
      ],
      tools: [
        "Unity 6",
        "C#",
        "Visual Studio",
        "Godot 4",
        "Cinemachine",
        "NavMesh",
        "Blender (importação de assets)",
      ],
    },
    {
      label: "Tier 2",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Criar e publicar jogos comerciais completos com shaders, multiplayer, IA de inimigos avançada e estratégias de monetização",
      modules: [
        {
          title: "Shaders e Efeitos Visuais",
          topics: [
            "Shader Graph no Unity: criação de materiais sem código",
            "Shaders visuais no Godot 4 com VisualShader e ShaderMaterial",
            "Sistema de partículas para explosões, fogo, fumaça e impactos",
            "Post-processing: bloom, depth of field, motion blur e color grading",
            "VFX Graph no Unity para efeitos com milhares de partículas em GPU",
          ],
        },
        {
          title: "IA de Inimigos e Comportamentos Avançados",
          topics: [
            "Máquina de estados (FSM) para comportamentos de IA complexos",
            "Behavior Trees com pacote de BT para Unity ou Godot",
            "NavMesh dinâmico: obstáculos que mudam em tempo real",
            "Percepção sensorial: campo de visão, audição e investigação de ruídos",
            "Integração de ML Agents (Unity): treinar NPCs com aprendizado de máquina",
          ],
        },
        {
          title: "Multiplayer e Redes",
          topics: [
            "Multiplayer online no Godot 4 com MultiplayerAPI e ENet",
            "Sincronização de estado: posição, animações e eventos via RPC",
            "Lobby e matchmaking com Nakama ou serviços de relay",
            "Prevenção de cheat: validação server-side de ações do jogador",
          ],
        },
        {
          title: "Publicação e Monetização",
          topics: [
            "Build para PC (Windows, Mac, Linux) e publicação na Steam com Steamworks SDK",
            "Build para mobile: Android e iOS com Unity e Godot",
            "Monetização: ads com Unity Ads, compras in-app e modelo premium",
            "Página de loja na Steam: trailer, screenshots, tags e estratégia de lançamento",
            "Marketing indie: devlog no itch.io, TikTok e Reddit r/gamedev",
          ],
        },
        {
          title: "Ferramentas de IA para Game Developers",
          topics: [
            "Geração de assets com IA: pixel art com Stable Diffusion e música com Suno",
            "Roteiro e diálogos de NPCs gerados com API da OpenAI (GPT-4o)",
            "Geração procedural assistida por IA: mapas, itens e missões dinâmicas",
            "Playtesting automatizado com agentes de IA para encontrar bugs de balanceamento",
          ],
        },
      ],
      tools: [
        "Unity 6",
        "Godot 4",
        "Shader Graph",
        "Blender",
        "Steam",
        "Nakama",
        "ML Agents",
        "Stable Diffusion",
        "OpenAI API",
        "Aseprite",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber programar antes de começar esse curso?",
      a: "É recomendável ter noções básicas de programação, já que o curso começa direto no nível Intermediário com C# no Unity e sistemas avançados no Godot 4. Se você nunca programou, vale fazer antes o curso de Lógica de Programação para chegar com mais confiança.",
    },
    {
      q: "Qual a diferença entre os dois níveis do curso de jogos?",
      a: "O primeiro nível foca em desenvolver jogos 2D e 3D com física, animações, áudio e sistema de save no Unity e no Godot. O nível Profissional + IA avança para shaders, efeitos visuais, IA de inimigos, multiplayer e publicação comercial na Steam e em lojas mobile.",
    },
    {
      q: "Sou artista ou designer, não programador — esse curso serve pra mim?",
      a: "Sim. O curso foi pensado também para quem vem do lado visual e quer entender a parte técnica para colaborar melhor em equipes de gamedev, cobrindo desde a lógica de programação em C# até shaders e efeitos que têm forte componente visual.",
    },
  ],
}

function JogosPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
