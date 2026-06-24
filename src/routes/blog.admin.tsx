import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { PenLine, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/blog/admin")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin top bar */}
      <header className="sticky top-[80px] z-30 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            to="/blog/admin"
            className="flex items-center gap-2 font-bold text-foreground hover:text-primary"
          >
            <PenLine className="h-5 w-5 text-primary" />
            <span>Admin do Blog</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/blog"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Ver blog
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/blog/admin/novo"
              className="rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              + Novo Post
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
