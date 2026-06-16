/**
 * Acesso ao banco SQLite do blog.
 *
 * O banco é inicializado em docker/blog-db.ts (código Bun puro, fora do bundle
 * do Vite) e exposto via globalThis.__BLOG_DB__. Desta forma o bundle do
 * TanStack Start nunca importa bun:sqlite diretamente, o que é incompatível
 * com o @cloudflare/vite-plugin usado para o SSR.
 */

// Interface mínima compatível com bun:sqlite Database
type SqliteStatement = {
  all(...args: unknown[]): unknown[];
  get(...args: unknown[]): unknown | null;
  run(...args: unknown[]): void;
};

export type SqliteDb = {
  query(sql: string): SqliteStatement;
  run(sql: string, ...args: unknown[]): void;
};

export function getDb(): SqliteDb {
  const db = (globalThis as Record<string, unknown>).__BLOG_DB__ as SqliteDb | undefined;
  if (!db) {
    throw new Error(
      "Blog DB não inicializado. " +
        "Em produção: certifique-se que docker/server.ts está rodando. " +
        "Em desenvolvimento: o blog requer o ambiente Docker."
    );
  }
  return db;
}

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string;
  cover_url: string | null;
  published: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type PostView = Omit<Post, "tags"> & {
  tags: string[];
  reading_time: number;
};

export function toPostView(post: Post): PostView {
  const words = post.content.trim().split(/\s+/).length;
  return {
    ...post,
    tags: JSON.parse(post.tags || "[]"),
    reading_time: Math.max(1, Math.ceil(words / 200)),
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
