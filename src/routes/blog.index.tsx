import { createFileRoute, Link } from "@tanstack/react-router";
import { getPublishedPostsFn } from "@/lib/blog-fns";
import { pageMeta, buildBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  validateSearch: (s: Record<string, unknown>) => ({
    page: Number(s.page) || 1,
  }),
  loaderDeps: ({ search }) => ({ page: search.page }),
  loader: async ({ deps }) => getPublishedPostsFn({ data: { page: deps.page } }),
  head: () =>
    pageMeta({
      title: "Blog Santos Tech — Tecnologia e Educação para Crianças",
      description:
        "Artigos sobre tecnologia, programação, criação de jogos e educação digital para crianças e adolescentes. Blog da Santos Tech — escola de tecnologia em Ribeirão Preto.",
      path: "/blog",
    }),
  component: BlogPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogPage() {
  const { posts, total, page, pages } = Route.useLoaderData();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#04325A] to-[#187ABF] py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#0DB88F]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-white/80">
              Blog Santos Tech
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-2 text-4xl font-black leading-tight sm:text-5xl">
              Tecnologia e{" "}
              <span className="text-[#0DB88F]">Criatividade</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Artigos sobre programação, criação de jogos, impressão 3D e o futuro
              da educação tecnológica para crianças e adolescentes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        {posts.length === 0 ? (
          <Reveal>
            <div className="py-24 text-center">
              <p className="text-xl font-semibold text-muted-foreground">
                Em breve novos artigos por aqui!
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fique de olho no nosso blog para conteúdos sobre tecnologia e educação.
              </p>
            </div>
          </Reveal>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={i * 60}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Cover */}
                    {post.cover_url ? (
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img
                          src={post.cover_url}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#187ABF]/10 via-[#187ABF]/5 to-[#0DB88F]/10">
                        <span className="text-5xl opacity-25">💡</span>
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-5">
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="line-clamp-2 flex-1 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(post.published_at!)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.reading_time} min
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          Ler <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Pagination */}
            {pages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    to="/blog"
                    search={{ page: p }}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                      p === page
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
