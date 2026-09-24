import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/ia-visual")({
  component: IaVisualPage,
  head: () =>
    pageMeta({
      title: "Curso de IA para Criadores: Imagem, Vídeo e Áudio em Ribeirão Preto — Santos Tech",
      description: "Domine Midjourney, DALL-E, Runway, Kling e ElevenLabs para criar imagens, vídeos e áudios profissionais com IA. Curso presencial em Ribeirão Preto para criadores de conteúdo.",
      path: "/particular/cursos/ia-visual",
    }),
})

const COURSE_DATA = {
  nome: "IA para Criadores: Imagem, Vídeo e Áudio",
  categoria: "Inteligência Artificial",
  tema: "ia" as const,
  logo: "dalle",
  variante: "visual",
  tagline: "Crie imagens, vídeos e áudios profissionais com IA em minutos",
  targetAudience: [
    "Você é criador de conteúdo e quer produzir visuais e vídeos de alta qualidade sem depender de designer ou editor",
    "Você trabalha com marketing e precisa gerar dezenas de peças criativas rapidamente sem estourar o orçamento de produção",
    "Você tem uma ideia na cabeça mas não sabe desenhar, editar vídeo nem gravar locução profissional",
    "Você já tentou usar ferramentas de IA criativa mas os resultados foram genéricos e decepcionantes — quer aprender a dominar o prompt visual",
    "Você quer monetizar sua criatividade como freelancer de IA e cobrar por projetos de imagem, vídeo e áudio gerados com IA",
    "Você é empreendedor ou profissional liberal que precisa de materiais visuais e audiovisuais para redes sociais, anúncios e apresentações sem contratar agência",
  ],
  tiers: [
    {
      levelName: "IA para Criadores",
      ctaLabel: "curso de IA para Criadores",
      totalHours: "48h",
      outcome:
        "Criar imagens, vídeos e áudios com IA do zero absoluto — prompt visual, Midjourney e DALL-E — até fluxos de produção completos com identidade visual consistente, vídeo com Runway e Kling e narração profissional com ElevenLabs, pronto para atuar como criador de conteúdo, freelancer de IA criativa ou profissional de marketing que produz o próprio material visual.",
      modules: [
        {
          title: "Fundamentos de IA Generativa para Mídia",
          topics: [
            "Como modelos de difusão (Stable Diffusion, DALL-E, Midjourney) geram imagens a partir de texto",
            "Diferenças entre modelos de imagem: Midjourney v6.1, DALL-E 3, Flux 1.1 Pro e Adobe Firefly",
            "Conceitos de latent space, denoising e CFG scale para controlar resultados",
            "Capacidades e limitações reais: rostos, mãos, texto em imagem e consistência de personagens",
            "Configurando contas no Midjourney (Discord), DALL-E via ChatGPT e Ideogram",
          ],
        },
        {
          title: "Prompt Visual: a Linguagem dos Modelos de Imagem",
          topics: [
            "Anatomia de um prompt de imagem: sujeito, estilo, iluminação, câmera e humor",
            "Descritores de estilo fotográfico: RAW photo, bokeh, golden hour, editorial lighting",
            "Referências artísticas: estilos de pintores, movimentos artísticos e fotógrafos no prompt",
            "Parâmetros do Midjourney: --ar (aspect ratio), --stylize, --chaos, --no e --seed",
            "Técnica de prompting negativo para eliminar elementos indesejados",
            "Iteração e refinamento: usando /vary, zoom out e pan no Midjourney",
          ],
        },
        {
          title: "Criação de Imagens Profissionais e Identidade Visual Consistente",
          topics: [
            "Gerando thumbnails, covers e banners para YouTube, Instagram e LinkedIn",
            "Midjourney Style Reference (--sref) e Character Reference (--cref): identidade visual e personagens consistentes entre imagens e projetos",
            "Adobe Firefly no Photoshop: Generative Fill, Generative Expand e Text to Image para mockups e retoques",
            "Flux 1.1 Pro via fal.ai e Replicate: controle de LoRA para estilos personalizados sem instalação local",
            "Upscaling e aumento de resolução com Magnific AI e Topaz Gigapixel",
            "Criação de identidade visual de marca — paleta de cores e estilo fixos do primeiro ao último asset — e exportação otimizada para web e impressão",
          ],
        },
        {
          title: "Vídeo e Áudio com IA: Primeiros Passos",
          topics: [
            "Como modelos de vídeo (Runway Gen-3, Kling, Sora) geram clipes a partir de texto e imagem",
            "Runway Gen-3 Alpha: Text to Video e Image to Video com prompts cinematográficos",
            "Controle de câmera em Runway: zoom, pan, dolly e câmera estática",
            "ElevenLabs: clonagem de voz, Text to Speech e ajuste de emoção e ritmo",
            "Suno: geração de trilhas sonoras e jingles com prompt de texto",
          ],
        },
        {
          title: "Produção de Vídeo Avançada e Narração Profissional com IA",
          topics: [
            "Runway Gen-3 Alpha Turbo: clipes de alta resolução e prompting cinematográfico — planos, movimentos de câmera e transições em texto",
            "Kling 1.6: vídeos mais longos com consistência de personagem e cenário, e quando escolher Kling em vez de Runway",
            "Panorama rápido de outros modelos de vídeo (Sora, Hailuo MiniMax, Veo 3) e seus pontos fortes",
            "Edição e montagem de clipes gerados por IA com CapCut e DaVinci Resolve",
            "ElevenLabs Voice Design e Projects: vozes sintéticas customizadas e narração de roteiros longos com voz consistente",
            "Clonagem de voz com poucos segundos de áudio: ética, limitações legais e uso responsável",
            "Udio e Suno: composição de trilhas com controle de gênero e BPM, sincronização de narração com vídeo e limpeza de áudio com Adobe Podcast",
          ],
        },
        {
          title: "Fluxos de Produção Completos para Criadores",
          topics: [
            "Produção de vídeo curto para Instagram Reels e TikTok do roteiro ao upload",
            "Criação de apresentação executiva com slides gerados por Gamma e imagens do Midjourney",
            "Podcast sintético: roteiro com ChatGPT, vozes com ElevenLabs e trilha com Suno",
            "Campanha de anúncios com 10 variações de imagem e 3 vídeos gerados por IA em 2 horas",
            "Construindo portfólio de serviços de criação com IA para freelancing",
            "Precificação e proposta comercial para projetos de IA criativa",
          ],
        },
      ],
      tools: [
        "Midjourney v6.1",
        "DALL-E 3",
        "Ideogram",
        "Adobe Firefly",
        "Flux 1.1 Pro",
        "Magnific AI",
        "Runway Gen-3",
        "ElevenLabs",
        "Suno",
        "Kling 1.6",
        "CapCut",
        "DaVinci Resolve",
        "Udio",
        "Adobe Podcast",
        "Gamma",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber desenhar ou editar vídeo pra fazer esse curso?",
      a: "Não. A proposta é justamente resolver isso com IA: você aprende a gerar imagens, vídeos e narração a partir de texto (prompt), sem precisar saber desenhar, editar vídeo profissionalmente ou gravar locução — o curso ensina a controlar as ferramentas, não a técnica manual tradicional.",
    },
    {
      q: "Já tentei usar Midjourney e ChatGPT e os resultados saíram genéricos. Esse curso resolve isso?",
      a: "É exatamente o problema que o curso ataca. Boa parte do conteúdo é sobre prompt visual de verdade — anatomia do prompt, parâmetros do Midjourney, referências de estilo e técnicas de prompting negativo — pra sair do resultado genérico e conseguir imagens e vídeos com identidade visual consistente.",
    },
  ],
}

function IaVisualPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
