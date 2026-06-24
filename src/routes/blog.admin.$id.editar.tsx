import { createFileRoute, Link, redirect, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { checkAuthFn, getPostByIdFn, updatePostFn, type PostUpdate } from "@/lib/blog-fns";
import { marked } from "marked";
import { ArrowLeft, Eye, Edit2, Loader2, Save, Globe } from "lucide-react";

export const Route = createFileRoute("/blog/admin/$id/editar")({
  loader: async ({ params }) => {
    const auth = await checkAuthFn();
    if (!auth.authenticated) throw redirect({ to: "/blog/entrar" });
    const post = await getPostByIdFn({ data: Number(params.id) });
    if (!post) throw redirect({ to: "/blog/admin" });
    return post;
  },
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: EditPostPage,
});

function EditPostPage() {
  const post = Route.useLoaderData();
  const router = useRouter();
  const [tab, setTab] = useState<"edit" | "preview">("edit");
  const [saving, setSaving] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [tagsRaw, setTagsRaw] = useState(post.tags.join(", "));

  const [form, setForm] = useState({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    author: post.author,
    cover_url: post.cover_url ?? "",
    published: post.published === 1,
  });

  useEffect(() => {
    if (tab === "preview" && form.content) {
      setPreviewHtml(String(marked.parse(form.content)));
    }
  }, [tab, form.content]);

  async function save(publish: boolean) {
    if (!form.title.trim() || !form.slug.trim() || !form.excerpt.trim() || !form.content.trim()) {
      alert("Preencha: título, slug, resumo e conteúdo.");
      return;
    }
    setSaving(true);
    try {
      const tags = tagsRaw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      await updatePostFn({
        data: {
          id: post.id,
          title: form.title,
          slug: form.slug,
          excerpt: form.excerpt,
          content: form.content,
          author: form.author,
          cover_url: form.cover_url || undefined,
          tags,
          published: publish,
        } satisfies PostUpdate,
      });
      router.navigate({ to: "/blog/admin" });
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Erro ao salvar post");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-5">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/blog/admin"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => save(false)}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Salvar rascunho
          </button>
          <button
            onClick={() => save(true)}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Globe className="h-4 w-4" />
            )}
            {form.published ? "Atualizar" : "Publicar"}
          </button>
        </div>
      </div>

      {/* Meta fields */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Informações do Post
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="label">Título *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="field"
            />
          </div>

          <div>
            <label className="label">URL (slug) *</label>
            <div className="flex items-center gap-1 overflow-hidden rounded-lg border border-input bg-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <span className="shrink-0 border-r border-input bg-muted px-2.5 py-2.5 text-xs text-muted-foreground">
                /blog/
              </span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm text-foreground outline-none"
              />
            </div>
          </div>

          <div>
            <label className="label">Autor</label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
              className="field"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="label">
              Resumo * <span className="font-normal text-muted-foreground">(aparece na listagem e no Google)</span>
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
              rows={2}
              className="field resize-none"
            />
          </div>

          <div>
            <label className="label">Tags <span className="font-normal text-muted-foreground">(separadas por vírgula)</span></label>
            <input
              type="text"
              value={tagsRaw}
              onChange={(e) => setTagsRaw(e.target.value)}
              className="field"
            />
          </div>

          <div>
            <label className="label">URL da imagem de capa <span className="font-normal text-muted-foreground">(opcional)</span></label>
            <input
              type="url"
              value={form.cover_url}
              onChange={(e) => setForm((f) => ({ ...f, cover_url: e.target.value }))}
              className="field"
            />
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center border-b border-border px-4 py-2.5">
          <div className="flex gap-1">
            <button
              onClick={() => setTab("edit")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                tab === "edit"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Edit2 className="h-3.5 w-3.5" />
              Escrever
            </button>
            <button
              onClick={() => setTab("preview")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                tab === "preview"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              Pré-visualizar
            </button>
          </div>
          <span className="ml-auto text-xs text-muted-foreground">Markdown</span>
        </div>

        {tab === "edit" ? (
          <textarea
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            className="min-h-[550px] w-full resize-y bg-transparent p-5 font-mono text-sm leading-relaxed text-foreground focus:outline-none"
            spellCheck
          />
        ) : (
          <div className="min-h-[550px] p-6">
            {previewHtml ? (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: previewHtml }}
              />
            ) : (
              <p className="italic text-muted-foreground">
                Nada para pré-visualizar ainda.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
