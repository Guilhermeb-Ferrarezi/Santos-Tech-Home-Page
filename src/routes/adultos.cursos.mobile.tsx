import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/mobile")({
  component: MobilePage,
  head: () =>
    pageMeta({
      title:
        "Curso de Desenvolvimento de Aplicativos para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda React Native e Flutter do zero e publique apps nas lojas. Aulas individuais presenciais em Ribeirão Preto para quem quer trabalhar com desenvolvimento mobile.",
      path: "/adultos/cursos/mobile",
    }),
})

const COURSE_DATA = {
  nome: "Desenvolvimento de Aplicativos",
  categoria: "Programação",
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
      label: "Profissional + IA",
      levelName: "Profissional",
      totalHours: "72h",
      outcome:
        "Desenvolver apps completos com React Native e Flutter: autenticação, consumo de APIs, acesso a recursos nativos do dispositivo e gerenciamento de estado robusto",
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
          title: "Introdução ao Flutter e Dart",
          topics: [
            "Sintaxe do Dart: tipos, funções, classes e null safety",
            "Widgets stateless e stateful: diferenças e uso correto",
            "Layout com Column, Row, Container, Expanded e Stack",
            "Comparativo prático: quando usar Flutter vs React Native",
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
        "Flutter",
        "Dart",
        "VS Code",
      ],
    },
    {
      label: "6 meses",
      levelName: "Avançado",
      totalHours: "120h",
      outcome:
        "Publicar apps completos nas lojas com performance otimizada, testes automatizados, CI/CD mobile e recursos de IA integrados — com domínio de React Native e Flutter em nível profissional",
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
          title: "Introdução ao Flutter e Dart",
          topics: [
            "Sintaxe do Dart: tipos, funções, classes e null safety",
            "Widgets stateless e stateful: diferenças e uso correto",
            "Layout com Column, Row, Container, Expanded e Stack",
            "Comparativo prático: quando usar Flutter vs React Native",
          ],
        },
        {
          title: "Flutter Avançado com Riverpod",
          topics: [
            "Riverpod 3.x: providers, notifiers e async state management",
            "Clean Architecture em Flutter: camadas de dados, domínio e apresentação",
            "GoRouter para navegação tipada e rotas aninhadas no Flutter",
            "Animações avançadas com AnimationController e Hero transitions",
            "Testes de widgets e integração com flutter_test",
          ],
        },
        {
          title: "Backend Mobile e Firebase",
          topics: [
            "Firebase Firestore: operações CRUD, queries e listeners em tempo real",
            "Firebase Storage para upload de imagens e arquivos do app",
            "Firebase Remote Config para feature flags e A/B testing",
            "Supabase como alternativa open source ao Firebase",
          ],
        },
        {
          title: "Performance e Otimização",
          topics: [
            "Profiling com Flipper e detecção de re-renders desnecessários",
            "Hermes engine, lazy loading de módulos e bundle splitting",
            "Imagens otimizadas com expo-image e cache de assets",
            "Testes de performance em dispositivos físicos Android e iOS",
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
          title: "IA em Aplicativos Mobile",
          topics: [
            "Integração da API OpenAI (GPT-4o) e Google Gemini em apps React Native",
            "Reconhecimento de imagens com Google ML Kit (OCR e detecção de objetos)",
            "TensorFlow Lite para modelos de ML on-device sem internet",
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
        "Flutter",
        "Dart",
        "Riverpod",
        "EAS Build",
        "Google Play Console",
        "App Store Connect",
        "OpenAI API",
        "Google ML Kit",
        "TensorFlow Lite",
        "GitHub Actions",
        "VS Code",
      ],
    },
  ],
}

function MobilePage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
