import { createFileRoute, Link, redirect, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import {
  checkAuthFn,
  getAllPostsFn,
  deletePostFn,
  togglePublishFn,
} from "@/lib/blog-fns";
import type { PostView } from "@/lib/db";
import { Pencil, Trash2, Eye, EyeOff, Loader2, LogOut } from "lucide-react";

export const Route = createFileRoute("/blog/admin/")({
  loader: async () => {
    const auth = await checkAuthFn();
    if (!auth.authenticated) throw redirect({ to: "/blog/entrar" });
    return await getAllPostsFn();
  },
  component: AdminDashboard,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function AdminDashboard() {
  const initial = Route.useLoaderData();
  const [posts, setPosts] = useState<PostView[]>(initial);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const router = useRouter();

  async function handleToggle(post: PostView) {
    setLoadingId(post.id);
    try {
      await togglePublishFn({ data: { id: post.id, published: post.published !== 1 } });
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, published: post.published === 1 ? 0 : 1 } : p
        )
      );
    } finally {
      setLoadingId(null);
    }
  }

  async function handleDelete(post: PostView) {
    if (!confirm(`Excluir "${post.title}"? Esta ação não pode ser desfeita.`)) return;
    setLoadingId(post.id);
    try {
      await deletePostFn({ data: post.id });
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    } finally {
      setLoadingId(null);
    }
  }

  function handleLogout() {
    document.cookie = "blog_session=; Path=/; Max-Age=0; SameSite=Strict";
    router.navigate({ to: "/blog/entrar" });
  }

  const published = posts.filter((p) => p.published === 1).length;
  const drafts = posts.filter((p) => p.published === 0).length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-foreground">Posts</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {published} publicados · {drafts} rascunhos · {posts.length} total
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center">
          <p className="text-lg font-semibold text-muted-foreground">
            Nenhum post ainda.
          </p>
          <Link
            to="/blog/admin/novo"
            className="mt-4 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white"
          >
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Título
                  </th>
                  <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
                    Status
                  </th>
                  <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">
                    Criado em
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className={`border-b border-border last:border-0 transition-colors hover:bg-muted/20 ${
                      loadingId === post.id ? "opacity-50" : ""
                    }`}
                  >
                    <td className="px-5 py-4">
                      <p className="line-clamp-1 font-semibold text-foreground">
                        {post.title}
                      </p>
                      {post.tags.length > 0 && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {post.tags.join(", ")}
                        </p>
                      )}
                    </td>
                    <td className="hidden px-4 py-4 sm:table-cell">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          post.published === 1
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {post.published === 1 ? "Publicado" : "Rascunho"}
                      </span>
                    </td>
                    <td className="hidden px-4 py-4 text-sm text-muted-foreground md:table-cell">
                      {formatDate(post.created_at)}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-1">
                        {loadingId === post.id ? (
                          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        ) : (
                          <>
                            <button
                              onClick={() => handleToggle(post)}
                              title={
                                post.published === 1 ? "Despublicar" : "Publicar"
                              }
                              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              {post.published === 1 ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </button>
                            <Link
                              to="/blog/admin/$id/editar"
                              params={{ id: String(post.id) }}
                              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              <Pencil className="h-4 w-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(post)}
                              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-red-50 hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
