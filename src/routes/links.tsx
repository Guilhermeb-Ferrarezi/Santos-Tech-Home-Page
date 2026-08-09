import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ExternalLink } from "lucide-react";
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
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-st-blue text-xl font-black text-white">
            ST
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
                  className="flex flex-col rounded-2xl bg-white p-4 transition hover:-translate-y-0.5"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-st-green/10">
                    <WhatsAppIcon className="h-5 w-5 text-st-green" />
                  </span>
                  <span className="text-sm font-bold text-st-blue-dark">Fale no WhatsApp</span>
                </a>
                <a
                  href={ORG.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col rounded-2xl bg-white p-4 transition hover:-translate-y-0.5"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-st-blue/10">
                    <Instagram className="h-5 w-5 text-st-blue" />
                  </span>
                  <span className="text-sm font-bold text-st-blue-dark">Instagram</span>
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
                    className="flex flex-col rounded-2xl bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt="" className="mb-3 h-10 w-10 rounded-lg object-cover" />
                    ) : (
                      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-st-blue/10">
                        <ExternalLink className="h-5 w-5 text-st-blue" />
                      </span>
                    )}
                    <p className="text-sm font-bold text-st-blue-dark">{item.title}</p>
                    {item.description && (
                      <>
                        <hr className="my-2 border-t border-st-blue-dark/10" />
                        <p className="text-xs text-muted-foreground">{item.description}</p>
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
