import { useState } from "react";
import { ChevronDown, ChevronRight, FileCode2, FileText, Folder, FolderOpen } from "lucide-react";
import { PersonAtDesk } from "@/components/course-illustrations";
import { Code, F, K, M, N, P, Q, Win, type L } from "@/components/course-skins/variants/ide-kit";
import { C, kebab, nn, ritmo, slug, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";

/**
 * Python: a referência da pele. “Para quem é” é um script .py rodando no
 * terminal; o conteúdo é o editor completo (explorer + arquivo + terminal).
 */

export function PythonPublico({ itens, theme, tema }: PublicoProps) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
      <Win title="publico_alvo.py">
        <Code
          lines={[
            [0, <><P>publico_alvo</P> <P>=</P> <P>[</P></>],
            ...itens.map((item): L => [2, <><Q>{item}</Q><P>,</P></>]),
            [0, <P>]</P>],
            null,
            [0, <><K>if</K> <P>voce</P> <K>in</K> <P>publico_alvo:</P></>],
            [2, <><F>print</F><P>(</P><Q>Esse curso é pra você</Q><P>)</P></>],
          ]}
        />
      </Win>
      <div>
        <PersonAtDesk theme={theme} tema={tema} className="mx-auto w-full max-w-sm" />
        <div className="mt-4 rounded-lg border border-white/10 bg-black/60 p-4 font-mono text-[13px]">
          <p className="text-white/50">
            <span className="text-(--accent)">$</span> python publico_alvo.py
          </p>
          <p className="mt-1 text-(--accent-2)">Esse curso é pra você</p>
        </div>
      </div>
    </div>
  );
}

export function PythonConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [file, setFile] = useState(0);
  const reqIndex = tier.modules.length;
  const activeFile = Math.min(file, reqIndex);
  const arquivo = (i: number, t: string) => `${nn(i)}_${slug(t)}.py`;
  const tabLabel = activeFile === reqIndex ? "requirements.txt" : arquivo(activeFile, tier.modules[activeFile].title);
  const m = tier.modules[activeFile];
  const selectTier = (i: number) => {
    onSelectTier(i);
    setFile(0);
  };

  return (
    <div className="grid overflow-hidden rounded-lg border border-white/10 bg-[#0b0f19] lg:grid-cols-[270px_1fr]">
      {/* Explorer */}
      <nav className="min-w-0 border-b border-white/10 bg-white/[0.02] py-3 font-mono text-[12.5px] lg:border-b-0 lg:border-r">
        <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Explorer</p>
        <p className="flex items-center gap-1.5 truncate px-3 py-1 text-white/70">
          <ChevronDown className="h-3.5 w-3.5 shrink-0" /> {slug(course.nome)}/
        </p>
        {course.tiers.map((t, ti) => {
          const open = ti === tierIndex;
          return (
            <div key={t.levelName}>
              <button
                type="button"
                onClick={() => selectTier(ti)}
                className={`flex w-full items-center gap-1.5 py-1 pl-6 pr-3 text-left transition hover:bg-white/5 ${open ? "text-white" : "text-white/50"}`}
              >
                {open ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
                {open ? <FolderOpen className="h-3.5 w-3.5 shrink-0 text-(--accent-2)" /> : <Folder className="h-3.5 w-3.5 shrink-0 text-(--accent-2)/70" />}
                <span className="truncate">{slug(t.levelName)}/</span>
              </button>
              {open && (
                <>
                  {t.modules.map((mod, mi) => (
                    <button
                      key={mod.title}
                      type="button"
                      onClick={() => setFile(mi)}
                      className={`flex w-full items-center gap-1.5 py-1 pl-12 pr-3 text-left transition ${
                        activeFile === mi ? "bg-(--accent)/15 text-white" : "text-white/55 hover:bg-white/5"
                      }`}
                    >
                      <FileCode2 className="h-3.5 w-3.5 shrink-0 text-(--accent)" />
                      <span className="truncate">{arquivo(mi, mod.title)}</span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setFile(reqIndex)}
                    className={`flex w-full items-center gap-1.5 py-1 pl-12 pr-3 text-left transition ${
                      activeFile === reqIndex ? "bg-(--accent)/15 text-white" : "text-white/55 hover:bg-white/5"
                    }`}
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0 text-white/40" /> requirements.txt
                  </button>
                </>
              )}
            </div>
          );
        })}
      </nav>

      {/* Editor */}
      <div className="min-w-0">
        <div className="flex border-b border-white/10 bg-white/[0.02] font-mono text-[11px]">
          <span className="min-w-0 truncate border-r border-t-2 border-r-white/10 border-t-(--accent) bg-[#0b0f19] px-4 py-2 text-white/80">{tabLabel}</span>
        </div>
        <div className="min-h-[300px]">
          {activeFile === reqIndex ? (
            <Code
              lines={tier.tools.map((tool): L => [
                0,
                <>
                  <P>{kebab(tool)}</P>
                  <M>{`  # ${tool}`}</M>
                </>,
              ])}
            />
          ) : (
            <Code
              lines={[
                [0, <><K>def</K> <F>{slug(m.title)}</F><P>():</P></>],
                [2, <span className={C.str}>&quot;&quot;&quot;{m.title} · módulo {activeFile + 1} de {tier.modules.length}&quot;&quot;&quot;</span>],
                ...m.topics.map((t): L => [2, <><F>aprender</F><P>(</P><Q>{t}</Q><P>)</P></>]),
                [2, <><K>return</K> <N>True</N></>],
              ]}
            />
          )}
        </div>
        {/* Terminal */}
        <div className="border-t border-white/10 bg-black/50 px-4 py-3 font-mono text-[12.5px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Terminal</p>
          <p className="mt-2 break-words text-white/50">
            <span className="text-(--accent)">$</span> python -m curso --nivel {slug(tier.levelName)}
          </p>
          <p className="mt-1 whitespace-pre-wrap text-white/85">
            <span className="text-(--accent-2)">✓</span> {tier.outcome}
          </p>
          <p className="mt-1 text-white/40">{ritmo(tier, meta)}</p>
        </div>
      </div>
    </div>
  );
}
