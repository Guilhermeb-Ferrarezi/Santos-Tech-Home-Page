import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ExternalLink } from "lucide-react";
import { Img } from "@/components/img";
import { WhatsAppIcon } from "@/components/icons";
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
  const { data: items, isLoading, isError } = usePublicLinkShowcaseItems();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Links", path: "/links" },
        ])}
      />
      <section className="flex min-h-screen w-full flex-col items-center bg-st-blue-dark px-4 py-12 sm:py-16">
        <div className="flex w-full max-w-md flex-col items-center gap-6">
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
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5"
                >
                  <span className="relative flex h-20 items-end bg-st-green p-3">
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
                  <span className="relative flex h-20 items-end bg-st-blue p-3">
                    <Instagram className="absolute left-3 top-3 h-5 w-5 text-white/80" />
                    <span className="text-sm font-bold text-white">Instagram</span>
                  </span>
                </a>
              </div>
            )}

            {!isLoading && !isError && items?.length === 0 && (
              <p className="text-center text-sm text-white/70">Nenhum link disponível no momento.</p>
            )}

            {!isLoading && !isError && (items?.length ?? 0) > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {items?.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div
                      className={`relative flex h-20 items-end p-3 ${item.imageUrl ? "bg-cover bg-center" : "bg-st-blue"}`}
                      style={item.imageUrl ? { backgroundImage: `url(${item.imageUrl})` } : undefined}
                    >
                      {item.imageUrl ? (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      ) : (
                        <ExternalLink className="absolute left-3 top-3 h-5 w-5 text-white/80" />
                      )}
                      <p className="relative text-sm font-bold text-white">{item.title}</p>
                    </div>
                    {item.description && (
                      <div className="p-3 pt-2">
                        <hr className="mb-2 border-t border-st-blue-dark/10" />
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
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
