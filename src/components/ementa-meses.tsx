import { ChevronDown } from "lucide-react";
import { ToolLogo, logoKey } from "@/components/tool-logo";

export type MesGrade = {
  mes: string; // "Mês 1"
  ferramenta: string; // "Minecraft + MakeCode"
  cor: string; // cor da bolinha da ferramenta (agrupa meses da mesma ferramenta)
  foco: string; // foco do mês (1 linha)
  semanas: string[]; // tópico de cada semana
  logos?: string[]; // opcional: chaves de logo explícitas (ex.: ["ia","imageai"])
  projeto?: string; // opcional: selo de projeto do ano (ex.: "1/4" = 1º mês de um projeto de 4 meses)
};

/**
 * Grade de 12 cards de mês. Cada card mostra ferramenta + foco e EXPANDE
 * (click) mostrando o tópico de cada semana. Usa <details> nativo (sem JS).
 */
export function MesesGrade({ meses, accent }: { meses: MesGrade[]; accent: string }) {
  return (
    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {meses.map((m) => (
        <details
          key={m.mes}
          className="group rounded-2xl border border-border bg-card shadow-sm transition open:shadow-md hover:border-primary/30"
        >
          <summary className="flex min-h-[150px] cursor-pointer list-none flex-col gap-2 p-5 [&::-webkit-details-marker]:hidden">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-muted-foreground">
                {m.mes}
              </span>
              <span className="flex items-center gap-1.5">
                {m.projeto ? (
                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-black"
                    style={{ color: accent }}
                    title="Projeto do ano"
                  >
                    <ToolLogo name="projeto" className="h-4 w-4" />
                    {m.projeto}
                  </span>
                ) : null}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-180" />
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex shrink-0 items-center gap-1">
                {(m.logos ?? m.ferramenta.split(" / ").map((t) => logoKey(t))).map((k) => (
                  <ToolLogo key={k} name={k} className="h-8 w-8" />
                ))}
              </span>
              <span className="font-black leading-tight text-st-blue-dark">{m.ferramenta}</span>
            </div>
            <span className="text-sm text-muted-foreground">{m.foco}</span>
          </summary>
          <div className="border-t border-border px-5 pb-5 pt-4">
            <p
              className="text-[11px] font-black uppercase tracking-wider"
              style={{ color: accent }}
            >
              O que vê nas semanas
            </p>
            <ul className="mt-2 space-y-2">
              {m.semanas.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground/85">
                  <span className="font-black" style={{ color: accent }}>
                    {i + 1}.
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
