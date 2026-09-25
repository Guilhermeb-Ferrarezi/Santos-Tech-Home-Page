/**
 * Serialização de JSON-LD para dentro de `<script type="application/ld+json">`.
 *
 * O conteúdo de um `<script>` não pode conter `</script>` nem `<!--`: o HTML encerra a tag
 * antes da hora e o resto do JSON vira HTML da página
 * (https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements).
 * Os dados já trazem `<` e `>` (ex.: o curso de SQL), então o escape é obrigatório.
 *
 * `<`, `>` e `&` viram `<`, `>` e `&`: para quem faz o parse (Google, Bing,
 * LLMs) o JSON é idêntico, e nenhum texto consegue fechar a tag. Teste: `json-ld.test.ts`.
 *
 * Sem imports de propósito: o teste roda direto no Node (`node --test src/lib/json-ld.test.ts`).
 */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
