/**
 * <JsonLd> — injeta JSON-LD structured data no DOM.
 *
 * Renderiza como `<script type="application/ld+json">` com o JSON serializado.
 * Crawlers (Google, Bing) e LLMs (ChatGPT, Perplexity, Claude com web search)
 * encontram e parseiam tanto em <head> quanto em <body>.
 *
 * Uso:
 *   <JsonLd data={buildOrganizationSchema()} />
 *   <JsonLd data={[orgSchema, courseSchema]} />
 *
 * Aceita objeto único ou array de objetos. Cada item vira um <script>
 * separado (recomendado pra parsing mais robusto).
 */

import { serializeJsonLd } from "@/lib/json-ld";

type JsonLdData = Record<string, unknown>;

type Props = {
  data: JsonLdData | JsonLdData[];
};

export function JsonLd({ data }: Props) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Os dados vêm dos builders de src/lib/seo.ts, mas o texto dos cursos já tem
          // `<` e `>` — `serializeJsonLd` escapa os dois (e `&`) pra nenhum texto fechar
          // a tag </script> antes da hora.
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(item) }}
        />
      ))}
    </>
  );
}
