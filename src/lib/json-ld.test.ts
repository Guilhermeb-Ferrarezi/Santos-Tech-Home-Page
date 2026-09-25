// Teste do serializador de JSON-LD. O repo não tem test runner: roda com o próprio Node,
// que tira os tipos do TypeScript sozinho a partir da versão 23.6:
//   node --test src/lib/json-ld.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { serializeJsonLd } from "./json-ld.ts";

test("texto com </script> não fecha a tag", () => {
  const saida = serializeJsonLd({ name: "</script><script>alert(1)</script>" });
  assert.ok(!saida.includes("<"), saida);
  assert.ok(!saida.includes(">"), saida);
});

test("não abre comentário HTML nem entidade", () => {
  const saida = serializeJsonLd({ text: "<!-- a & b -->" });
  assert.ok(!saida.includes("<!--"), saida);
  assert.ok(!saida.includes("&"), saida);
});

test("o JSON continua idêntico para quem faz o parse", () => {
  const dado = { "@type": "Course", name: "SQL: WHERE com =, >, <, LIKE & IN", n: 52, ok: true };
  assert.deepEqual(JSON.parse(serializeJsonLd(dado)), dado);
});

test("sem caractere especial, a saída é o JSON.stringify puro", () => {
  const dado = { "@context": "https://schema.org", "@type": "ItemList", name: "Cursos particulares" };
  assert.equal(serializeJsonLd(dado), JSON.stringify(dado));
});
