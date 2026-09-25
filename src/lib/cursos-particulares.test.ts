// Confere o catálogo de cursos particulares contra as rotas reais, o canonical e o sitemap.
// O repo não tem test runner: roda com o próprio Node (tira os tipos sozinho desde a 23.6):
//   node --test src/lib/cursos-particulares.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { CURSOS_PARTICULARES, cursoParticularPath } from "./cursos-particulares.ts";

const ROTAS = new URL("../routes/", import.meta.url);
const PREFIXO = "particular.cursos.";
const slugsDasRotas = readdirSync(ROTAS)
  .filter((arquivo) => arquivo.startsWith(PREFIXO) && arquivo.endsWith(".tsx"))
  .map((arquivo) => arquivo.slice(PREFIXO.length, -".tsx".length))
  .sort();

test("toda rota /particular/cursos/* está no catálogo, e só elas", () => {
  assert.ok(slugsDasRotas.length > 0, "nenhuma rota encontrada");
  assert.deepEqual(CURSOS_PARTICULARES.map((c) => c.slug).sort(), slugsDasRotas);
});

test("nenhum slug repetido", () => {
  const slugs = CURSOS_PARTICULARES.map((c) => c.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("nome igual ao COURSE_DATA.nome e URL igual ao canonical da página do curso", () => {
  for (const { slug, nome } of CURSOS_PARTICULARES) {
    const fonte = readFileSync(new URL(`${PREFIXO}${slug}.tsx`, ROTAS), "utf8");
    assert.equal(fonte.match(/\bnome: "([^"]+)"/)?.[1], nome, `${slug}: nome diferente da página`);
    assert.ok(fonte.includes(`path: "${cursoParticularPath(slug)}"`), `${slug}: canonical diferente`);
  }
});

test("toda URL do catálogo está no sitemap", () => {
  const sitemap = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
  for (const { slug } of CURSOS_PARTICULARES) {
    const loc = `<loc>https://santos-tech.com${cursoParticularPath(slug)}</loc>`;
    assert.ok(sitemap.includes(loc), `${slug}: fora do sitemap`);
  }
});
