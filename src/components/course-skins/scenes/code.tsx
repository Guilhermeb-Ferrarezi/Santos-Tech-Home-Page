import type { ComponentType } from "react";
import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";
import { BackendScene, FrontendScene, FullstackScene, MobileScene, PythonApisScene, TypescriptScene } from "@/components/course-skins/scenes/code-web";
import { AdsScene, GitScene, LogicaScene, SqlScene } from "@/components/course-skins/scenes/code-data";
import { MakeScene, N8nScene } from "@/components/course-skins/scenes/code-nocode";
import { GameScene } from "@/components/course-skins/scenes/code-game";

// ── Programação: editor + terminal ────────────────────────────────────────────

type Tok = [string, "kw" | "fn" | "str" | "var" | "cm" | "pl"];

const CODIGO: Tok[][] = [
  [["import", "kw"], [" pandas ", "pl"], ["as", "kw"], [" pd", "pl"]],
  [["from", "kw"], [" pathlib ", "pl"], ["import", "kw"], [" Path", "fn"]],
  [],
  [["# junta todas as planilhas do mês", "cm"]],
  [["arquivos", "var"], [" = ", "pl"], ["Path", "fn"], ["(", "pl"], ['"notas"', "str"], [").", "pl"], ["glob", "fn"], ["(", "pl"], ['"*.xlsx"', "str"], [")", "pl"]],
  [["df", "var"], [" = ", "pl"], ["pd", "pl"], [".", "pl"], ["concat", "fn"], ["(", "pl"]],
  [["    pd", "pl"], [".", "pl"], ["read_excel", "fn"], ["(a) ", "pl"], ["for", "kw"], [" a ", "pl"], ["in", "kw"], [" arquivos", "var"]],
  [[")", "pl"]],
  [["df", "var"], [".", "pl"], ["to_excel", "fn"], ["(", "pl"], ['"relatorio.xlsx"', "str"], [")", "pl"]],
];

export function CodeScene({ theme }: { theme: CourseTheme }) {
  const color = { kw: "#c792ea", fn: theme.accent, str: theme.accent2, var: "#f78c6c", cm: "#ffffff55", pl: "#ffffffcc" };
  return (
    <>
      <AppWindow title="automatiza.py" className="left-0 top-[10%] w-[90%]">
        <div className="py-2 font-mono text-[9.5px] leading-[1.75] sm:text-[11px]">
          {CODIGO.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-7 shrink-0 pr-2 text-right text-white/25">{i + 1}</span>
              <span className="whitespace-pre">
                {line.map(([t, k], j) => (
                  <span key={j} style={{ color: color[k] }}>
                    {t}
                  </span>
                ))}
                {i === CODIGO.length - 1 && (
                  <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse align-middle" style={{ background: theme.accent }} />
                )}
              </span>
            </div>
          ))}
        </div>
      </AppWindow>

      {/* Terminal */}
      <div className="animate-float-y absolute bottom-[3%] right-[2%] w-[62%] rounded-xl border border-white/10 bg-black/95 p-3 font-mono text-[9.5px] leading-relaxed shadow-[0_24px_48px_-16px_rgba(0,0,0,0.9)] sm:text-[10.5px]">
        <p className="text-white/50">
          <span style={{ color: theme.accent }}>~/automacoes</span> $ python automatiza.py
        </p>
        <p className="text-white/80">
          <span style={{ color: theme.accent2 }}>✓</span> 128 planilhas lidas
        </p>
        <p className="text-white/80">
          <span style={{ color: theme.accent2 }}>✓</span> relatorio.xlsx gerado em 2,4s
        </p>
        <p className="mt-1 text-white/45">3h de trabalho manual → 2 segundos</p>
      </div>

    </>
  );
}


// ── Cena do hero por curso (variante) ────────────────────────────────────────

const CENAS: Record<string, ComponentType<{ theme: CourseTheme }>> = {
  python: CodeScene,
  "python-apis": PythonApisScene,
  typescript: TypescriptScene,
  git: GitScene,
  n8n: N8nScene,
  make: MakeScene,
  sql: SqlScene,
  frontend: FrontendScene,
  backend: BackendScene,
  fullstack: FullstackScene,
  mobile: MobileScene,
  jogos: GameScene,
  logica: LogicaScene,
  ads: AdsScene,
};

/** Escolhe a cena do hero pela `variante` do curso (sem variante: a de Python). */
export function CodeSceneFor({ variante, theme }: { variante?: string; theme: CourseTheme }) {
  const Cena = (variante && CENAS[variante]) || CodeScene;
  return <Cena theme={theme} />;
}
