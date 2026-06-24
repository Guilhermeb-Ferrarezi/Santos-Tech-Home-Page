import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import { getDb, toPostView, type Post } from "./db";
import {
  createSessionToken,
  validateSessionToken,
  buildSessionCookieString,
  COOKIE_NAME,
} from "./blog-auth";

// ── Auth helpers ──────────────────────────────────────────────────────────

async function getAuthToken(): Promise<string | null> {
  try {
    return getCookie(COOKIE_NAME) ?? null;
  } catch {
    return null;
  }
}

async function requireAuth(): Promise<void> {
  const token = await getAuthToken();
  if (!token || !(await validateSessionToken(token))) {
    throw new Error("UNAUTHORIZED");
  }
}

// ── Public server functions ───────────────────────────────────────────────

export const getPublishedPostsFn = createServerFn({ method: "GET" })
  .validator((d: { page?: number } | undefined) => d ?? {})
  .handler(async ({ data }) => {
    const db = getDb();
    const page = (data as { page?: number }).page ?? 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const posts = db
      .query(`SELECT * FROM posts WHERE published = 1 ORDER BY published_at DESC LIMIT ? OFFSET ?`)
      .all(limit, offset) as Post[];
    const row = db
      .query(`SELECT COUNT(*) as count FROM posts WHERE published = 1`)
      .get() as { count: number };
    return {
      posts: posts.map(toPostView),
      total: row.count,
      page,
      pages: Math.ceil(row.count / limit),
    };
  });

export const getPostBySlugFn = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const db = getDb();
    const post = db
      .query(`SELECT * FROM posts WHERE slug = ? AND published = 1`)
      .get(slug) as Post | null;
    return post ? toPostView(post) : null;
  });

// ── Auth server functions ─────────────────────────────────────────────────

export const loginFn = createServerFn({ method: "POST" })
  .validator((password: string) => password)
  .handler(async ({ data: password }) => {
    const adminPassword = process.env.BLOG_ADMIN_PASSWORD;
    if (!adminPassword) throw new Error("BLOG_ADMIN_PASSWORD não está configurado no servidor");
    if (password !== adminPassword) throw new Error("Senha incorreta");
    const token = await createSessionToken();
    return { token, cookieStr: buildSessionCookieString(token) };
  });

export const checkAuthFn = createServerFn({ method: "GET" }).handler(async () => {
  const token = await getAuthToken();
  if (!token) return { authenticated: false };
  return { authenticated: await validateSessionToken(token) };
});

// ── Admin CRUD ────────────────────────────────────────────────────────────

export const getAllPostsFn = createServerFn({ method: "GET" }).handler(async () => {
  await requireAuth();
  const db = getDb();
  return (db.query(`SELECT * FROM posts ORDER BY created_at DESC`).all() as Post[]).map(toPostView);
});

export const getPostByIdFn = createServerFn({ method: "GET" })
  .validator((id: number) => id)
  .handler(async ({ data: id }) => {
    await requireAuth();
    const db = getDb();
    const post = db.query(`SELECT * FROM posts WHERE id = ?`).get(id) as Post | null;
    return post ? toPostView(post) : null;
  });

export type PostInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  cover_url?: string;
  published: boolean;
};

export type PostUpdate = PostInput & { id: number };

export const createPostFn = createServerFn({ method: "POST" })
  .validator((d: PostInput) => d)
  .handler(async ({ data }) => {
    await requireAuth();
    const db = getDb();
    const published_at = data.published ? new Date().toISOString() : null;
    const result = db
      .query(
        `INSERT INTO posts (slug, title, excerpt, content, author, tags, cover_url, published, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`
      )
      .get(
        data.slug,
        data.title,
        data.excerpt,
        data.content,
        data.author,
        JSON.stringify(data.tags),
        data.cover_url || null,
        data.published ? 1 : 0,
        published_at
      ) as { id: number };
    return { id: result.id, slug: data.slug };
  });

export const updatePostFn = createServerFn({ method: "POST" })
  .validator((d: PostUpdate) => d)
  .handler(async ({ data }) => {
    await requireAuth();
    const db = getDb();
    const existing = db
      .query(`SELECT published, published_at FROM posts WHERE id = ?`)
      .get(data.id) as { published: number; published_at: string | null } | null;
    if (!existing) throw new Error("Post não encontrado");
    const published_at =
      existing.published_at ?? (data.published ? new Date().toISOString() : null);
    db.run(
      `UPDATE posts
       SET slug=?, title=?, excerpt=?, content=?, author=?, tags=?, cover_url=?,
           published=?, published_at=?, updated_at=datetime('now')
       WHERE id=?`,
      data.slug,
      data.title,
      data.excerpt,
      data.content,
      data.author,
      JSON.stringify(data.tags),
      data.cover_url || null,
      data.published ? 1 : 0,
      published_at,
      data.id
    );
    return { ok: true };
  });

export const deletePostFn = createServerFn({ method: "POST" })
  .validator((id: number) => id)
  .handler(async ({ data: id }) => {
    await requireAuth();
    const db = getDb();
    db.run(`DELETE FROM posts WHERE id = ?`, id);
    return { ok: true };
  });

export const togglePublishFn = createServerFn({ method: "POST" })
  .validator((d: { id: number; published: boolean }) => d)
  .handler(async ({ data }) => {
    await requireAuth();
    const db = getDb();
    const published_at = data.published ? new Date().toISOString() : null;
    db.run(
      `UPDATE posts SET published=?, published_at=COALESCE(published_at, ?), updated_at=datetime('now') WHERE id=?`,
      data.published ? 1 : 0,
      published_at,
      data.id
    );
    return { ok: true };
  });
