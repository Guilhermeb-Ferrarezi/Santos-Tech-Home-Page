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
          // O JSON é construído pelos builders em src/lib/seo.ts.
          // Não há dados de usuário aqui — XSS-safe por construção.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
