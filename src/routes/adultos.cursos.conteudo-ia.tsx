import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/conteudo-ia")({
  component: ConteudoIaPage,
  head: () =>
    pageMeta({
      title: "Curso de Criação de Conteúdo com IA para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar imagens, vídeos e textos profissionais com ChatGPT, Midjourney, Runway e Canva IA em Ribeirão Preto.",
      path: "/adultos/cursos/conteudo-ia",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Criação de Conteúdo com IA",
  categoria: "Inteligência Artificial",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome: "Criar posts, imagens e roteiros profissionais usando IA, com um fluxo de produção de conteúdo funcional do zero",
      modules: [
        {
          title: "Panorama das Ferramentas de IA Criativa",
          topics: [
            "Mapa do ecossistema: ChatGPT, Midjourney, DALL-E, Firefly, ElevenLabs e Runway",
            "Custo x benefício de cada ferramenta: planos gratuitos, pagos e limites de uso",
            "Canva Magic Studio: visão geral dos recursos de IA integrados",
            "Como escolher a ferramenta certa para cada tipo de conteúdo",
            "Configuração de contas e primeiros testes práticos em cada plataforma",
          ],
        },
        {
          title: "Imagens com IA: do Prompt à Arte Profissional",
          topics: [
            "Midjourney: estrutura de prompt, parâmetros --ar, --v e --style na prática",
            "Vary Region e Upscale: refinando imagens para uso profissional",
            "DALL-E 3 no ChatGPT: geração e edição de imagens por conversa",
            "Adobe Firefly no Photoshop: preenchimento generativo e extensão de imagem",
            "Consistência de marca: manter paleta, estilo e identidade visual nas gerações",
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
          title: "Voz e Áudio com IA",
          topics: [
            "ElevenLabs: criando narração profissional para vídeos e podcasts",
            "Clonagem de voz: possibilidades, limitações e uso ético",
            "Adobe Podcast Enhance: limpeza de áudio com um clique",
            "Legendas automáticas com Whisper e Captions.ai para acessibilidade e alcance",
            "Projeto prático: produzir um vídeo narrado com voz sintética e legenda automática",
          ],
        },
      ],
      tools: ["ChatGPT", "Midjourney", "DALL-E", "Adobe Firefly", "Canva Magic Studio", "ElevenLabs", "Captions.ai"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome: "Planejar e executar campanhas de conteúdo completas com IA, entregando copy, imagens, vídeos e carrosséis em um pipeline profissional",
      modules: [
        {
          title: "Vídeo com IA: Criação e Edição Avançada",
          topics: [
            "Runway Gen-3: geração de vídeo a partir de texto e imagem com controle de câmera",
            "CapCut com IA: corte automático, efeitos e legendas sincronizadas",
            "HeyGen: criando avatar digital para vídeos institucionais e vendas",
            "Pictory.ai: transformando artigos e scripts em vídeos narrados automaticamente",
            "Descript: editar vídeo editando a transcrição — corte, remoção de vícios de linguagem e overdub",
          ],
        },
        {
          title: "Identidade Visual Consistente com IA",
          topics: [
            "Consistência de personagem no Midjourney com --seed e style reference (sref)",
            "Brand Kit no Canva: fontes, cores e logos integrados às gerações de IA",
            "Técnicas para manter estilo visual coeso em múltiplas peças de uma campanha",
            "Limitações atuais das IAs de imagem e estratégias para contorná-las",
            "Criando um guia de prompts de marca reutilizável para equipes e clientes",
          ],
        },
        {
          title: "Estratégia de Conteúdo com IA",
          topics: [
            "Planejamento mensal com ChatGPT: pauta, formatos e frequência por plataforma",
            "Calendário editorial automatizado com Notion AI e planilhas inteligentes",
            "Repurposing com IA: transformar 1 conteúdo em 10 formatos diferentes",
            "Análise de tendências: usar IA para identificar temas em alta antes da concorrência",
            "Métricas que importam: como usar dados para ajustar a estratégia continuamente",
          ],
        },
        {
          title: "Fluxo de Trabalho Profissional com IA",
          topics: [
            "Pipeline completo: ideia → pesquisa → escrita → design → publicação com IA em cada etapa",
            "Qualidade vs velocidade: quando revisar e quando publicar direto da IA",
            "Organizando entregas para clientes com pastas, aprovações e controle de versão",
            "Automações simples: conectando ferramentas para publicar conteúdo automaticamente",
            "Precificação e proposta de valor ao oferecer serviços de conteúdo com IA",
          ],
        },
        {
          title: "Projeto Final: Campanha de Conteúdo Completa com IA",
          topics: [
            "Definição de produto ou serviço real e briefing de campanha com ChatGPT",
            "Criação de copy: headline, legenda, CTA e e-mail usando Claude e ChatGPT",
            "Geração de imagens e identidade visual da campanha no Midjourney e Canva",
            "Produção de vídeo curto de 30 segundos com Runway, CapCut e ElevenLabs",
            "Montagem do carrossel final, revisão e publicação — campanha pronta para o mercado",
          ],
        },
      ],
      tools: ["ChatGPT", "Midjourney", "Runway", "CapCut", "HeyGen", "Descript", "Canva Magic Studio", "ElevenLabs", "Notion AI", "Captions.ai"],
    },
  ],
}

function ConteudoIaPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
