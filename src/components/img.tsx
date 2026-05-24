/**
 * <Img> — wrapper que renderiza <picture> com AVIF + WebP + PNG fallback.
 *
 * Lê o manifest auto-gerado de src/assets/manifest.ts e monta srcset
 * com os tamanhos disponíveis pra cada imagem.
 *
 * Uso:
 *   <Img name="capa-jr" alt="..." className="..." sizesAttr="(min-width:1024px) 800px, 100vw" />
 *
 * Default loading: lazy. Pra imagem above-the-fold (hero), passa `priority`.
 */

import type { ComponentProps } from "react";
import { IMAGES } from "@/assets/manifest";

type ImgProps = {
  /** Nome base do arquivo (sem extensão nem sufixo de tamanho). Ex: "capa-jr". */
  name: string;
  alt: string;
  /** Hint pro browser de qual tamanho usar em cada breakpoint. */
  sizesAttr?: string;
  /** Marca como above-the-fold (eager load + fetchpriority high). */
  priority?: boolean;
} & Omit<ComponentProps<"img">, "src" | "srcSet" | "sizes">;

export function Img({
  name,
  alt,
  sizesAttr,
  priority = false,
  loading,
  decoding,
  ...rest
}: ImgProps) {
  const entry = IMAGES[name];
  if (!entry) {
    if (import.meta.env.DEV) {
      console.warn(`<Img name="${name}"> — imagem não encontrada no manifest.`);
    }
    return null;
  }

  const avifSrcSet = entry.sizes
    .filter((s) => entry.avif[s])
    .map((s) => `${entry.avif[s]} ${s}w`)
    .join(", ");

  const webpSrcSet = entry.sizes
    .filter((s) => entry.webp[s])
    .map((s) => `${entry.webp[s]} ${s}w`)
    .join(", ");

  const effectiveLoading = loading ?? (priority ? "eager" : "lazy");
  const effectiveDecoding = decoding ?? (priority ? "sync" : "async");
  const fetchPriority = priority ? "high" : undefined;

  return (
    <picture>
      {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizesAttr} />}
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizesAttr} />}
      <img
        src={entry.fallback}
        alt={alt}
        loading={effectiveLoading}
        decoding={effectiveDecoding}
        // @ts-expect-error — fetchpriority é HTML válido mas o TS lib ainda não tem.
        fetchpriority={fetchPriority}
        {...rest}
      />
    </picture>
  );
}

/** Retorna apenas a URL otimizada (AVIF) num tamanho específico. Útil pra SVG <image>. */
export function getOptimizedUrl(name: string, size: number, format: "avif" | "webp" = "avif"): string {
  const entry = IMAGES[name];
  if (!entry) return "";
  const map = format === "avif" ? entry.avif : entry.webp;
  // Pega o tamanho exato OU o próximo maior disponível
  const sorted = entry.sizes.slice().sort((a, b) => a - b);
  const target = sorted.find((s) => s >= size) ?? sorted[sorted.length - 1];
  return map[target] ?? entry.fallback;
}
