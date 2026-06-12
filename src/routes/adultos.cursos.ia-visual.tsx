import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/ia-visual")({
  component: IaVisualPage,
  head: () =>
    pageMeta({
      title: "Curso de IA para Criadores: Imagem, Vídeo e Áudio em Ribeirão Preto — Santos Tech",
      description: "Domine Midjourney, DALL-E, Runway, Sora e ElevenLabs para criar imagens, vídeos e áudios profissionais com IA. Curso presencial em Ribeirão Preto para criadores de conteúdo.",
      path: "/adultos/cursos/ia-visual",
    }),
})

const COURSE_DATA = {
  nome: "IA para Criadores: Imagem, Vídeo e Áudio",
  categoria: "Inteligência Artificial",
  tagline: "Crie imagens, vídeos e áudios profissionais com IA em minutos",
  pricePerAula: 109.9,
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
      label: "Tier 1",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Gerar imagens, clipes de vídeo e locuções com IA usando Midjourney, DALL-E 3, Runway Gen-3 e ElevenLabs para produzir conteúdo visual profissional sem experiência prévia em design ou edição",
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
          title: "Criação de Imagens para Redes Sociais e Marketing",
          topics: [
            "Gerando thumbnails, covers e banners para YouTube, Instagram e LinkedIn",
            "Consistência de personagem com Midjourney Character Reference (--cref)",
            "Adobe Firefly no Photoshop: Generative Fill, Generative Expand e Text to Image",
            "Criação de mockups de produto com fundo gerado por IA",
            "Upscaling e aumento de resolução com Magnific AI e Topaz Gigapixel",
            "Exportando e otimizando imagens para web e impressão",
          ],
        },
        {
          title: "Primeiros Passos com Vídeo e Áudio com IA",
          topics: [
            "Como modelos de vídeo (Runway Gen-3, Kling, Sora) geram clipes a partir de texto e imagem",
            "Runway Gen-3 Alpha: Text to Video e Image to Video com prompts cinematográficos",
            "Controle de câmera em Runway: zoom, pan, dolly e câmera estática",
            "ElevenLabs: clonagem de voz, Text to Speech e ajuste de emoção e ritmo",
            "Suno AI: geração de trilhas sonoras e jingles com prompt de texto",
          ],
        },
      ],
      tools: [
        "Midjourney v6.1",
        "DALL-E 3",
        "Adobe Firefly",
        "Runway Gen-3",
        "ElevenLabs",
        "Suno AI",
        "Ideogram",
        "Magnific AI",
      ],
    },
    {
      label: "Tier 2",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Produzir campanhas visuais completas, vídeos com roteiro e narração, podcasts sintéticos e fluxos de criação semi-automatizados usando Midjourney, Runway, Sora, ElevenLabs e ComfyUI para entregar projetos de nível profissional para clientes e marcas",
      modules: [
        {
          title: "Domínio Avançado de Imagem com Midjourney e Flux",
          topics: [
            "Midjourney Style Reference (--sref): criando identidade visual consistente entre imagens",
            "Personagens consistentes em múltiplas cenas com --cref e seeds fixos",
            "Flux 1.1 Pro via fal.ai e Replicate: controle de LoRA e prompting estruturado",
            "Inpainting e outpainting precisos com Adobe Photoshop Generative Fill",
            "Criação de identidade visual de marca com paleta de cores e estilo fixos",
            "Fluxo editorial: da ideia ao asset final em menos de 30 minutos",
          ],
        },
        {
          title: "ComfyUI: Controle Profissional de Geração de Imagem",
          topics: [
            "Instalação e configuração do ComfyUI no Windows com GPU Nvidia ou via RunPod",
            "Entendendo o workflow visual: nós de checkpoint, sampler, VAE e upscaler",
            "Carregando e combinando LoRAs para estilos personalizados e personagens fixos",
            "ControlNet: geração guiada por pose (OpenPose), profundidade e contorno (Canny)",
            "IP-Adapter: transferência de estilo e rosto a partir de imagem de referência",
            "Exportando workflows como JSON e compartilhando com clientes e equipes",
          ],
        },
        {
          title: "Produção de Vídeo com IA: Runway, Kling e Sora",
          topics: [
            "Runway Gen-3 Alpha Turbo: produção de clipes de 5 e 10 segundos em alta resolução",
            "Prompting cinematográfico: planos, movimentos de câmera e transições em texto",
            "Kling 1.6: vídeos de até 2 minutos com consistência de personagem e cenário",
            "Sora (OpenAI): storyboard mode e criação de vídeo a partir de imagens estáticas",
            "Hailuo MiniMax e Veo 3 (Google): comparativo de qualidade por tipo de cena",
            "Edição e montagem de clipes gerados por IA com CapCut e DaVinci Resolve",
          ],
        },
        {
          title: "Áudio e Narração Profissional com IA",
          topics: [
            "ElevenLabs Voice Design: criando vozes sintéticas customizadas do zero",
            "Clonagem de voz com 30 segundos de áudio: ética, limitações legais e uso responsável",
            "ElevenLabs Projects: narração de artigos e roteiros longos com voz consistente",
            "Udio e Suno v4: composição de trilhas para vídeo com controle de gênero e BPM",
            "Adobe Podcast Enhanced Speech: limpeza de áudio e remoção de ruído com IA",
            "Sincronização de narração com vídeo gerado por IA no CapCut",
          ],
        },
        {
          title: "Fluxos de Produção Completos para Criadores",
          topics: [
            "Produção de vídeo curto para Instagram Reels e TikTok do roteiro ao upload",
            "Criação de apresentação executiva com slides gerados por Gamma e imagens do Midjourney",
            "Podcast sintético: roteiro com ChatGPT, vozes com ElevenLabs e trilha com Suno",
            "Campanha de anúncios com 10 variações de imagem e 3 vídeos gerados por IA em 2 horas",
            "Construindo portfolio de serviços de criação com IA para freelancing",
            "Precificação e proposta comercial para projetos de IA criativa",
          ],
        },
      ],
      tools: [
        "Midjourney v6.1",
        "Flux 1.1 Pro",
        "ComfyUI",
        "ControlNet",
        "IP-Adapter",
        "Runway Gen-3",
        "Kling 1.6",
        "Sora",
        "ElevenLabs",
        "Udio",
        "Suno v4",
        "Adobe Podcast",
        "CapCut",
        "DaVinci Resolve",
        "Gamma",
      ],
    },
  ],
}

function IaVisualPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
