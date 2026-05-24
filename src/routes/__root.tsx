import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
// Preload das 3 fonts críticas — Vite resolve com hash, evita o roundtrip
// CSS→woff2 que atrasa o LCP (PSI flagou cadeia crítica de 1215ms).
import poppins400 from "@fontsource/poppins/files/poppins-latin-400-normal.woff2?url";
import poppins700 from "@fontsource/poppins/files/poppins-latin-700-normal.woff2?url";
import poppins900 from "@fontsource/poppins/files/poppins-latin-900-normal.woff2?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { JsonLd } from "@/components/json-ld";
import {
  BASE_URL,
  ORG,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar atualizar a página ou
          voltar para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

const HOMEPAGE_TITLE = "Santos Tech — Escola de Programação para Crianças em Ribeirão Preto";
const HOMEPAGE_DESCRIPTION =
  "Escola presencial de programação para crianças e adolescentes de 5 a 14 anos em Ribeirão Preto. Programas CREATE, JR, Robótica, IA e Férias Tech. Aulas 100% presenciais no Jardim América.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#187ABF" },
        { title: HOMEPAGE_TITLE },
        { name: "description", content: HOMEPAGE_DESCRIPTION },
        // SEO complementar
        { name: "author", content: ORG.name },
        { name: "publisher", content: ORG.name },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "googlebot", content: "index, follow, max-image-preview:large" },
        // Open Graph (default — páginas individuais sobrescrevem)
        { property: "og:title", content: HOMEPAGE_TITLE },
        { property: "og:description", content: HOMEPAGE_DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: ORG.name },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:url", content: BASE_URL },
        { property: "og:image", content: `${BASE_URL}/og-image.png` },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: `${ORG.name} — ${ORG.shortDescription}` },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: HOMEPAGE_TITLE },
        { name: "twitter:description", content: HOMEPAGE_DESCRIPTION },
        { name: "twitter:image", content: `${BASE_URL}/og-image.png` },
        // GEO signals — ajuda mecanismos de busca a entender localização
        { name: "geo.region", content: "BR-SP" },
        { name: "geo.placename", content: "Ribeirão Preto" },
        { name: "geo.position", content: `${ORG.geo.latitude};${ORG.geo.longitude}` },
        { name: "ICBM", content: `${ORG.geo.latitude}, ${ORG.geo.longitude}` },
      ],
      links: [
        // Favicon
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        // Canonical é definido em cada rota via pageMeta() em src/lib/seo.ts.
        // Não definir aqui evita duplicação de <link rel="canonical">.
        // CSS principal
        { rel: "stylesheet", href: appCss },
        // Preload das 3 fonts críticas — quebra a cadeia CSS→font do PSI
        { rel: "preload", as: "font", type: "font/woff2", href: poppins400, crossOrigin: "anonymous" },
        { rel: "preload", as: "font", type: "font/woff2", href: poppins700, crossOrigin: "anonymous" },
        { rel: "preload", as: "font", type: "font/woff2", href: poppins900, crossOrigin: "anonymous" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Skip-to-content link — a11y. Aparece só ao receber foco (Tab). */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      {/* JSON-LD institucional — aplicado em todas as rotas (Organization + WebSite). */}
      <JsonLd data={[buildOrganizationSchema(), buildWebSiteSchema()]} />

      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
