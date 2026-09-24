import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/conteudo-ia")({
  component: ConteudoIaPage,
  head: () =>
    pageMeta({
      title: "Curso de Criação de Conteúdo com IA Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar imagens, vídeos e textos profissionais com ChatGPT, Midjourney, Runway e Canva IA em Ribeirão Preto.",
      path: "/particular/cursos/conteudo-ia",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Criação de Conteúdo com IA",
  categoria: "Inteligência Artificial",
  tema: "ia" as const,
  logo: "canva",
  variante: "conteudo",
  tagline: "Produza imagens, vídeos e textos profissionais com as melhores ferramentas de IA do mercado",
  targetAudience: [
    "Você quer criar conteúdo de qualidade profissional sem precisar de uma agência",
    "Você sente que perde horas produzindo posts e não consegue manter consistência",
    "Você quer usar IA para escalar sua produção sem perder a identidade da sua marca",
    "Você nunca usou Midjourney ou Runway e não sabe por onde começar",
    "Você produz conteúdo para clientes e precisa entregar mais rápido com mais qualidade",
    "Você quer dominar as ferramentas de IA criativa antes que elas se tornem pré-requisito no mercado",
  ],
  tiers: [
    {
      levelName: "Criação de Conteúdo com IA",
      ctaLabel: "curso de Criação de Conteúdo com IA",
      totalHours: "48h",
      outcome:
        "Dominar as principais ferramentas de IA criativa do zero ao avançado — imagens, textos, Canva Magic Studio, vídeo e voz — e entregar uma campanha de conteúdo completa, com copy, identidade visual, vídeo e carrossel prontos para publicar",
      modules: [
        {
          title: "Panorama das Ferramentas de IA Criativa",
          topics: [
            "Mapa do ecossistema de IA criativa: imagem (Midjourney, DALL-E, Firefly), texto (ChatGPT), vídeo (Runway, CapCut) e voz (ElevenLabs)",
            "Custo x benefício de cada ferramenta: planos gratuitos, pagos e limites de uso",
            "Canva Magic Studio: visão geral dos recursos de IA integrados",
            "Como escolher a ferramenta certa para cada tipo de conteúdo e etapa da produção",
            "Configuração de contas e primeiros testes práticos em cada plataforma",
          ],
        },
        {
          title: "Imagens e Identidade Visual com IA",
          topics: [
            "Midjourney: estrutura de prompt, parâmetros --ar, --v e --style na prática",
            "Vary Region e Upscale: refinando imagens para uso profissional",
            "DALL-E 3 no ChatGPT: geração e edição de imagens por conversa",
            "Adobe Firefly no Photoshop: preenchimento generativo e extensão de imagem",
            "Consistência de marca entre peças: paleta, estilo e --seed/style reference no Midjourney para manter a identidade visual coesa",
          ],
        },
        {
          title: "Copywriting e Texto com IA",
          topics: [
            "ChatGPT e Claude para posts, threads, legendas e artigos de blog",
            "Adaptar tom e linguagem para Instagram, LinkedIn, TikTok e e-mail",
            "Técnicas de prompt para obter textos prontos para publicar na primeira tentativa",
            "Checagem de fatos e cuidados éticos ao usar IA para produção de conteúdo",
            "Sistema de produção: templates de prompt reutilizáveis para escalar criação",
          ],
        },
        {
          title: "Canva Magic Studio Completo",
          topics: [
            "Magic Write e Magic Design: criando apresentações e posts em segundos",
            "Magic Media e Text to Image: gerando visuais originais dentro do Canva",
            "Magic Animate e transições automáticas para stories e reels",
            "Background Remover e Magic Eraser em fluxos de produção reais",
            "Combinando recursos Magic para entregar um carrossel completo em 30 minutos",
          ],
        },
        {
          title: "Vídeo e Voz com IA",
          topics: [
            "Runway Gen-3: geração de vídeo a partir de texto e imagem com controle de câmera",
            "CapCut com IA: corte automático, efeitos e legendas sincronizadas para redes sociais",
            "ElevenLabs: criando narração profissional para vídeos e podcasts, com clonagem de voz e uso ético",
            "Adobe Podcast Enhance: limpeza de áudio com um clique",
            "Legendas automáticas com Whisper e Captions.ai para acessibilidade e alcance",
          ],
        },
        {
          title: "Projeto Final: Campanha de Conteúdo com IA",
          topics: [
            "Definição de produto ou serviço real e briefing de campanha com ChatGPT",
            "Criação de copy: headline, legenda, CTA e e-mail usando ChatGPT e Claude",
            "Geração de imagens e identidade visual da campanha no Midjourney e Canva",
            "Produção de vídeo curto de 30 segundos com Runway, CapCut e ElevenLabs",
            "Montagem do carrossel final, revisão e publicação — campanha pronta para divulgar",
          ],
        },
      ],
      tools: ["ChatGPT", "Midjourney", "DALL-E", "Adobe Firefly", "Canva Magic Studio", "Runway", "CapCut", "ElevenLabs", "Captions.ai"],
    },
  ],
  faqItems: [
    {
      q: "Nunca usei Midjourney ou Runway, consigo acompanhar?",
      a: "Sim, o curso foi desenhado para esse perfil. O primeiro módulo é um panorama das ferramentas com configuração de conta e primeiros testes práticos, antes de entrar na estrutura de prompt do Midjourney e na geração de vídeo com Runway, já nos módulos seguintes.",
    },
    {
      q: "Produzo conteúdo pra clientes e preciso entregar mais rápido, o curso ajuda nisso?",
      a: "Sim. O curso monta um fluxo enxuto de produção com IA: templates de prompt reutilizáveis para copy, combinações prontas no Canva Magic Studio para fechar um carrossel em minutos, e um projeto final que simula uma campanha completa do briefing à publicação — o ganho de velocidade vem de aplicar esse fluxo no seu dia a dia.",
    },
  ],
}

function ConteudoIaPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
