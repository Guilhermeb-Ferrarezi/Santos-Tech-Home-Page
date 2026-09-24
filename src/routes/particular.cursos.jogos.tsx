import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/jogos")({
  component: JogosPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento de Jogos Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar jogos 2D e 3D com Unity e Godot 4 em Ribeirão Preto. Do plataformer ao jogo comercial publicado na Steam — aulas presenciais e individuais na Santos Tech.",
      path: "/particular/cursos/jogos",
    }),
})

const COURSE_DATA = {
  nome: "Desenvolvimento de Jogos: Unity e Godot",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "unity",
  variante: "jogos",
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
      levelName: "Desenvolvimento de Jogos: Unity e Godot",
      totalHours: "48h",
      outcome:
        "Criar jogos 2D e 3D do zero absoluto até um projeto de ação em 3D publicável, dominando Unity e Godot 4 lado a lado — sistemas completos de animação, áudio e save, shaders, IA de inimigos avançada e o caminho real de build e publicação na Steam e em lojas mobile",
      modules: [
        {
          title: "Fundamentos do Godot 4 e Lógica de Jogos",
          topics: [
            "Interface do Godot 4 e a arquitetura de cenas e nós (nodes) — a base de todo projeto",
            "GDScript: variáveis, funções, estruturas de controle e sinais (signals) para comunicação entre objetos",
            "Sprites, AnimatedSprite e física 2D com CharacterBody2D para movimento e colisões",
            "Input Map: captura de teclado, mouse e controle para os comandos do jogador",
            "Organização do projeto em cenas reutilizáveis, instanciação e transição entre telas",
          ],
        },
        {
          title: "Godot 4: Sistemas de Jogo e Projeto 2D",
          topics: [
            "AnimationPlayer e AnimationTree para animações de personagem com blend",
            "Sistema de áudio: SFX, música com fade in/out e bus de mixagem",
            "TileMap e TileSet para criação de fases com blocos reutilizáveis",
            "Autoload e Singletons para dados globais (score, configurações)",
            "Sistema de save/load com ResourceSaver e arquivos JSON",
            "Projeto prático: um jogo 2D completo juntando animação, áudio, fases e progresso salvo",
          ],
        },
        {
          title: "Fundamentos de Unity e C#",
          topics: [
            "Interface do Unity 6: Hierarchy, Inspector, Project e Game View",
            "C# fundamentos para Unity: MonoBehaviour, Start, Update e eventos",
            "Physics 3D: Rigidbody, Colliders e detecção de triggers",
            "Sistema de animações com Animator Controller e Mecanim",
            "Criação de prefabs, instanciação e destruição de objetos em runtime",
          ],
        },
        {
          title: "Unity: Projeto de Jogo 3D de Ação",
          topics: [
            "Controlador de personagem em terceira pessoa com Cinemachine",
            "Sistema de inimigos: patrulha com NavMesh e detecção do jogador",
            "Interface de usuário com Canvas, HUD de vida e mini-mapa",
            "Sistema de itens coletáveis e inventário básico",
          ],
        },
        {
          title: "Shaders e Efeitos Visuais: Unity e Godot",
          topics: [
            "Shader Graph no Unity: criação de materiais sem código",
            "Shaders visuais no Godot 4 com VisualShader e ShaderMaterial",
            "Sistema de partículas — com introdução ao VFX Graph no Unity — para explosões, fogo, fumaça e impactos",
            "Post-processing: bloom, depth of field, motion blur e color grading",
          ],
        },
        {
          title: "IA de Inimigos Avançada",
          topics: [
            "Máquina de estados (FSM) para comportamentos de IA complexos",
            "Behavior Trees para decisões avançadas de NPCs em Unity e Godot",
            "NavMesh dinâmico: obstáculos que mudam em tempo real",
            "Percepção sensorial: campo de visão, audição e investigação de ruídos",
          ],
        },
        {
          title: "Publicação e Horizontes Avançados",
          topics: [
            "Build para PC (Windows, Mac, Linux) e publicação na Steam com Steamworks SDK",
            "Build para mobile: Android e iOS com Unity e Godot",
            "Panorama de multiplayer e monetização: sincronização em rede, ads e compras in-app para quem quiser evoluir o projeto",
            "Horizontes avançados: ML Agents (IA com aprendizado de máquina no Unity) e ferramentas de IA generativa para assets, diálogos e testes",
          ],
        },
      ],
      tools: [
        "Unity 6",
        "Godot 4",
        "C#",
        "GDScript",
        "Visual Studio",
        "Cinemachine",
        "NavMesh",
        "Shader Graph",
        "Blender",
        "Steam",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber programar antes de começar esse curso?",
      a: "É recomendável ter noções básicas de lógica de programação, já que o curso avança rápido para C# no Unity e GDScript no Godot 4. Se você nunca programou, vale fazer antes o curso de Lógica de Programação para chegar com mais confiança.",
    },
    {
      q: "Sou artista ou designer, não programador — esse curso serve pra mim?",
      a: "Sim. O curso foi pensado também para quem vem do lado visual e quer entender a parte técnica para colaborar melhor em equipes de gamedev, cobrindo desde a lógica de programação em C# e GDScript até shaders e efeitos que têm forte componente visual.",
    },
  ],
}

function JogosPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
