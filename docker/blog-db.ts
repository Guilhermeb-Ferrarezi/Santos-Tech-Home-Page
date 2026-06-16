/**
 * Inicializa o banco SQLite do blog usando bun:sqlite (Bun nativo).
 * Este arquivo roda APENAS no servidor Bun (docker/server.ts) — nunca
 * entra no bundle do Vite. O DB fica exposto via globalThis.__BLOG_DB__
 * para as server functions do TanStack Start.
 */
import { Database } from "bun:sqlite";

const DB_PATH = process.env.BLOG_DB_PATH ?? "/data/blog.db";

export function initBlogDb(): void {
  const db = new Database(DB_PATH, { create: true });
  db.run("PRAGMA journal_mode = WAL");
  db.run("PRAGMA foreign_keys = ON");
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL DEFAULT 'Santos Tech',
      tags TEXT NOT NULL DEFAULT '[]',
      cover_url TEXT,
      published INTEGER NOT NULL DEFAULT 0,
      published_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  (globalThis as Record<string, unknown>).__BLOG_DB__ = db;
  console.log(`[blog-db] SQLite pronto em ${DB_PATH}`);
}
