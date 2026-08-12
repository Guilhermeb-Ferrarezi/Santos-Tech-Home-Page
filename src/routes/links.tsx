import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Img } from "@/components/img";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, buildBreadcrumbSchema, ORG } from "@/lib/seo";
import { usePublicLinkShowcaseItems } from "@/lib/link-showcase-api";

export const Route = createFileRoute("/links")({
  component: LinksPage,
  head: () =>
    pageMeta({
      title: "Links — Santos Tech | Escola de Tecnologia em Ribeirão Preto",
      description:
        "Todos os links da Santos Tech em um só lugar: blog, artigos, cursos e redes sociais.",
      path: "/links",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

function LinksPage() {
  const { data, isLoading, isError } = usePublicLinkShowcaseItems();
  const items = data?.links;
  const backgroundImageUrl = data?.backgroundImageUrl;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Links", path: "/links" },
        ])}
      />
      <section
        className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-st-blue-dark bg-cover bg-center px-4 py-12 sm:py-16"
        style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
      >
        {backgroundImageUrl && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true" />
        )}
        <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6 md:max-w-2xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-2">
            <Img name="logo" alt="Logo Santos Tech" priority width={48} height={48} className="h-full w-full object-contain" />
          </div>
          <div className="text-center">
            <p className="text-lg font-black text-white">Santos Tech</p>
            <p className="mt-1 text-sm text-white/70">Escola de tecnologia — Ribeirão Preto</p>
          </div>

          <div className="w-full">
            {isLoading && <p className="text-center text-sm text-white/70">Carregando…</p>}

            {isError && (
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5"
                >
                  <span className="relative flex h-20 items-end bg-st-green p-3 md:h-32 md:p-4">
                    <WhatsAppIcon className="absolute left-3 top-3 h-5 w-5 text-white/80" />
                    <span className="text-sm font-bold text-white">Fale no WhatsApp</span>
                  </span>
                </a>
                <a
                  href={ORG.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5"
                >
                  <span className="relative flex h-20 items-end bg-st-blue p-3 md:h-32 md:p-4">
                    <InstagramIcon className="absolute left-3 top-3 h-5 w-5 text-white/80" />
                    <span className="text-sm font-bold text-white">Instagram</span>
                  </span>
                </a>
              </div>
            )}

            {!isLoading && !isError && items?.length === 0 && (
              <p className="text-center text-sm text-white/70">Nenhum link disponível no momento.</p>
            )}

            {!isLoading && !isError && (items?.length ?? 0) > 0 && (
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {items?.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {item.imageUrl ? (
                      <>
                        <div className="p-3 pb-2 md:p-4 md:pb-2">
                          <p className="text-sm font-bold text-st-blue-dark md:text-base">{item.title}</p>
                          <hr className="mt-1.5 border-t border-st-blue-dark/10" />
                        </div>
                        <div className="h-32 bg-cover bg-center md:h-44" style={{ backgroundImage: `url(${item.imageUrl})` }} />
                      </>
                    ) : (
                      <>
                        <div className="relative flex h-32 items-end bg-st-blue p-3 md:h-44 md:p-4">
                          <ExternalLink className="absolute left-3 top-3 h-5 w-5 text-white/80" />
                          <p className="relative text-sm font-bold text-white md:text-base">{item.title}</p>
                        </div>
                        {item.description && (
                          <div className="p-2 pt-1.5 md:p-3 md:pt-1.5">
                            <hr className="mb-1.5 border-t border-st-blue-dark/10" />
                            <p className="line-clamp-2 text-xs text-muted-foreground md:text-sm">{item.description}</p>
                          </div>
                        )}
                      </>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
