import { Sparkles } from "lucide-react";

/**
 * Etiqueta "Mais escolhido" — estilo item ultra-raro de jogo (fundo arco-íris
 * animado + brilho passando + glow). Estilos em styles.css (.rarity-badge).
 * O conteúdo fica em z-10 pra não ser apagado pelo brilho que passa por cima.
 */
export function RarityBadge({
  label = "Mais procurado",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`rarity-badge inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-black uppercase leading-none tracking-tight text-white ${className}`}
      title="O programa mais procurado pelas famílias"
    >
      <span className="relative z-10 inline-flex items-center gap-0.5">
        <Sparkles className="h-2.5 w-2.5" />
        {label}
      </span>
    </span>
  );
}
