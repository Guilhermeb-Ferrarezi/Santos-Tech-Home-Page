import { useEffect, useRef, useState } from "react";
import { COLONIA_PHOTOS } from "@/assets/colonia-photos";

/**
 * Carrossel de 2 fotos grandes da Colônia de Férias, em crossfade (a próxima
 * entra por cima — sem fundo branco no meio), igual ao herói da home.
 * As fotos vêm de src/assets/colonia/ (ver assets/colonia-photos.ts).
 */
type Layer = { src: string; id: number };

function CrossfadeTile({ src, className }: { src: string; className: string }) {
  const [stack, setStack] = useState<Layer[]>([{ src, id: 0 }]);
  const idRef = useRef(0);
  const prev = useRef(src);

  useEffect(() => {
    if (src === prev.current) return;
    prev.current = src;
    idRef.current += 1;
    const id = idRef.current;
    setStack((s) => [...s, { src, id }]);
    const t = setTimeout(() => setStack((s) => s.filter((l) => l.id === id)), 1700);
    return () => clearTimeout(t);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {stack.map((l, i) => (
        <img
          key={l.id}
          src={l.src}
          alt="Crianças na Colônia de Férias da Santos Tech"
          className={`absolute inset-0 h-full w-full object-cover ${i > 0 ? "crossfade-in" : ""}`}
        />
      ))}
    </div>
  );
}

export function ColoniaPhotos() {
  const photos = COLONIA_PHOTOS;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => setOffset((o) => (o + 1) % photos.length), 5000);
    return () => clearInterval(id);
  }, [photos.length]);

  if (photos.length === 0) return null;

  const half = Math.max(1, Math.floor(photos.length / 2));
  const a = photos[offset % photos.length];
  const b = photos[(offset + half) % photos.length];

  return (
    <div className="grid grid-cols-2 gap-4">
      <CrossfadeTile
        src={a}
        className="aspect-[4/5] rotate-[-2deg] rounded-3xl border-2 border-white/50 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]"
      />
      <CrossfadeTile
        src={b}
        className="mt-8 aspect-[4/5] rotate-[2deg] rounded-3xl border-2 border-white/50 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}
