import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlugFn } from "@/lib/blog-fns";
import { pageMeta, buildBreadcrumbSchema, buildBlogPostingSchema, BASE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { marked } from "marked";

// @ts-expect-error — marked v18 setOptions typing varies by version
marked.setOptions({ gfm: true });

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPostBySlugFn({ data: params.slug });
    if (!post) throw notFound();
    const html = String(marked.parse(post.content));
    return { post, html };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const base = pageMeta({
      title: `${post.title} — Blog Santos Tech`,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      ogImage: post.cover_url ?? `${BASE_URL}/og-image.png`,
    });
    return {
      ...base,
      meta: [
        ...base.meta,
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.published_at! },
        { property: "article:author", content: post.author },
        ...post.tags.map((tag) => ({ property: "article:tag", content: tag })),
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Post não encontrado</h1>
        <p className="mt-2 text-muted-foreground">
          Este artigo pode ter sido removido ou o link está incorreto.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
        </Link>
      </div>
    </div>
  ),
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogPostPage() {
  const { post, html } = Route.useLoaderData();
  const hasCover = !!post.cover_url;

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          buildBlogPostingSchema({
            title: post.title,
            excerpt: post.excerpt,
            slug: post.slug,
            author: post.author,
            published_at: post.published_at!,
            updated_at: post.updated_at,
            cover_url: post.cover_url,
          }),
        ]}
      />

      <article>
        {/* Cover hero */}
        {hasCover && (
          <div className="relative aspect-[21/8] w-full overflow-hidden bg-muted">
            <img
              src={post.cover_url!}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        )}

        {/* Post header */}
        <div
          className={`mx-auto max-w-3xl px-4 ${hasCover ? "-mt-32 relative z-10" : "pt-12"}`}
        >
          <div className={hasCover ? "text-white" : "text-foreground"}>
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      hasCover
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <div
              className={`mt-5 flex flex-wrap items-center gap-4 text-sm ${
                hasCover ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              <span className="font-semibold">{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.published_at!)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.reading_time} min de leitura
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 py-10">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        {/* Back link */}
        <div className="mx-auto max-w-3xl border-t border-border px-4 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Blog
          </Link>
        </div>
      </article>
    </>
  );
}
