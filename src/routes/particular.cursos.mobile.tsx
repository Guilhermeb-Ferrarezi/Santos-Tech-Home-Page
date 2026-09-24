import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/mobile")({
  component: MobilePage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento de Aplicativos Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda React Native do zero e publique apps nas lojas. Aulas individuais presenciais em Ribeirão Preto para quem quer trabalhar com desenvolvimento mobile.",
      path: "/particular/cursos/mobile",
    }),
})

const COURSE_DATA = {
  nome: "Desenvolvimento de Aplicativos",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "javascript",
  variante: "mobile",
  tagline: "Crie apps nativos para iOS e Android com uma única base de código",
  targetAudience: [
    "Você já tem noções de JavaScript ou React e quer expandir para o desenvolvimento mobile",
    "Você é desenvolvedor web e quer adicionar mobile ao seu portfólio sem aprender linguagens nativas",
    "Você tem uma ideia de aplicativo e quer tirá-la do papel com tecnologia moderna",
    "Você quer publicar apps nas lojas (App Store e Play Store) e entender o processo completo",
    "Você busca vagas de desenvolvedor mobile que oferecem salários acima da média de mercado",
    "Você trabalha em empresa que está migrando ou criando produtos mobile e precisa se atualizar",
  ],
  tiers: [
    {
      levelName: "Desenvolvimento de Aplicativos",
      totalHours: "48h",
      outcome:
        "Desenvolver apps completos com React Native e Expo — navegação, estado global, autenticação, recursos nativos e integração de IA — e publicar de verdade na Google Play e na App Store com CI/CD automatizado, pronto para atuar como desenvolvedor mobile",
      modules: [
        {
          title: "Fundamentos do Desenvolvimento Mobile",
          topics: [
            "Diferença entre apps nativos, híbridos e cross-platform",
            "Configuração do ambiente com Node.js, Expo CLI e Expo Go",
            "Estrutura de um projeto Expo: pastas, arquivos e fluxo de execução",
            "Hot reload e debugging com Expo Dev Tools e React DevTools",
          ],
        },
        {
          title: "React Native Core Components",
          topics: [
            "View, Text, Image, ScrollView, FlatList e SectionList",
            "Estilização com StyleSheet: Flexbox no contexto mobile",
            "TouchableOpacity, Pressable e feedback visual ao toque",
            "TextInput, teclado virtual e gerenciamento de foco",
          ],
        },
        {
          title: "Navegação e Estrutura de App",
          topics: [
            "Expo Router: file-based routing e estrutura de pastas",
            "Stack Navigator: telas empilhadas e passagem de parâmetros",
            "Tab Navigator: barra inferior com ícones customizados",
            "Deep linking: abrir telas específicas via URL",
          ],
        },
        {
          title: "Gerenciamento de Estado e Dados",
          topics: [
            "useState e useContext para estado local e compartilhado",
            "Zustand: store global simples e performático",
            "React Query (TanStack Query): cache de dados, refetch e loading states",
            "AsyncStorage: persistência de dados locais no dispositivo",
          ],
        },
        {
          title: "Autenticação e Segurança",
          topics: [
            "Autenticação com JWT: login, logout e refresh token",
            "SecureStore do Expo para armazenamento seguro de tokens",
            "Login social com Google e Apple via Expo AuthSession",
            "Proteção de rotas e redirecionamento por estado de autenticação",
          ],
        },
        {
          title: "Recursos Nativos do Dispositivo",
          topics: [
            "Câmera: captura de fotos e vídeos com expo-camera",
            "Geolocalização com expo-location e integração com React Native Maps",
            "Push Notifications com Expo Notifications e Firebase Cloud Messaging",
            "Sensores: acelerômetro, giroscópio e bússola com expo-sensors",
          ],
        },
        {
          title: "Publicação e CI/CD Mobile",
          topics: [
            "Build com EAS Build (Expo Application Services) para APK e IPA",
            "Submissão na Google Play Console: AAB, assinatura e track de produção",
            "Submissão na App Store Connect: provisioning profiles e review guidelines",
            "CI/CD com GitHub Actions + EAS para builds automáticos por branch",
          ],
        },
        {
          title: "Performance, Otimização e IA em Apps React Native",
          topics: [
            "Profiling com Flipper e detecção de re-renders desnecessários",
            "Hermes engine, lazy loading de módulos e bundle splitting",
            "Imagens otimizadas com expo-image e cache de assets",
            "Integração da API OpenAI (GPT-4o) e Google Gemini em apps React Native",
            "Reconhecimento de imagens com Google ML Kit (OCR e detecção de objetos) e modelos on-device com TensorFlow Lite",
            "Chatbot conversacional com histórico de mensagens e streaming de resposta",
          ],
        },
      ],
      tools: [
        "React Native",
        "Expo",
        "Expo Go",
        "Expo Router",
        "Zustand",
        "React Query",
        "Firebase",
        "expo-camera",
        "React Native Maps",
        "EAS Build",
        "Google Play Console",
        "App Store Connect",
        "GitHub Actions",
        "OpenAI API",
        "Google ML Kit",
        "TensorFlow Lite",
        "VS Code",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso já saber programar pra fazer esse curso?",
      a: "Sim, alguma base ajuda bastante. O curso assume que você já tem noções de JavaScript ou React — se você é desenvolvedor web querendo migrar pra mobile, esse é o ponto de partida ideal.",
    },
    {
      q: "Vou realmente aprender a publicar um app nas lojas, ou só a programar?",
      a: "As duas coisas. Tem um módulo inteiro dedicado a isso: build com EAS Build, submissão na Google Play Console e na App Store Connect, e CI/CD com GitHub Actions pra automatizar os builds — você sai sabendo o processo completo, não só o código.",
    },
  ],
}

function MobilePage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
