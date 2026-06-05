import { useState } from "react";
import {
  ChevronDown,
  Target,
  BookOpen,
  GraduationCap,
  ListChecks,
  MessagesSquare,
  TriangleAlert,
  Package,
  Lightbulb,
  Play,
  CircleCheck,
  Clock,
  Images,
  type LucideIcon,
} from "lucide-react";
import { IlustracaoAula } from "@/components/ilustracoes-aula";
import type { Aula, Exercicio, MesEmenta } from "@/data/ementa-inf-junior/tipos";

/* ───────────────────────── texto formatado ───────────────────────── */
function TextoFormatado({ texto, tom = "slate" }: { texto: string; tom?: "slate" | "dark" }) {
  const cor = tom === "dark" ? "text-slate-800" : "text-slate-700";
  const linhas = texto.split("\n");
  const blocos: React.ReactNode[] = [];
  let lista: string[] = [];
  let listaTipo: "ul" | "ol" | null = null;
  let paragrafo: string[] = [];

  const flushParagrafo = () => {
    if (paragrafo.length) {
      blocos.push(
        <p key={`p${blocos.length}`} className={`text-[14.5px] leading-relaxed ${cor}`}>
          {paragrafo.join(" ")}
        </p>,
      );
      paragrafo = [];
    }
  };
  const flushLista = () => {
    if (lista.length) {
      const items = lista.map((t, i) => (
        <li key={i} className={`text-[14.5px] leading-relaxed ${cor}`}>
          {t}
        </li>
      ));
      blocos.push(
        listaTipo === "ol" ? (
          <ol key={`l${blocos.length}`} className="ml-5 list-decimal space-y-1 marker:font-bold marker:text-slate-400">
            {items}
          </ol>
        ) : (
          <ul key={`l${blocos.length}`} className="ml-5 list-disc space-y-1 marker:text-slate-300">
            {items}
          </ul>
        ),
      );
    }
    lista = [];
    listaTipo = null;
  };

  for (const raw of linhas) {
    const linha = raw.trim();
    if (!linha) {
      flushParagrafo();
      flushLista();
      continue;
    }
    const mNum = linha.match(/^(\d+)\.\s+(.*)$/);
    if (linha.startsWith("- ") || linha.startsWith("• ")) {
      flushParagrafo();
      if (listaTipo !== "ul") {
        flushLista();
        listaTipo = "ul";
      }
      lista.push(linha.replace(/^[-•]\s+/, ""));
      continue;
    }
    if (mNum) {
      flushParagrafo();
      if (listaTipo !== "ol") {
        flushLista();
        listaTipo = "ol";
      }
      lista.push(mNum[2]);
      continue;
    }
    flushLista();
    paragrafo.push(linha);
  }
  flushParagrafo();
  flushLista();
  return <div className="space-y-2.5">{blocos}</div>;
}

/* ───────────────────────── treinamento em blocos ───────────────────────── */
function iconeSecao(heading: string): LucideIcon {
  const h = heading.toLowerCase();
  if (h.includes("precisa saber") || h.includes("teoria")) return GraduationCap;
  if (h.includes("passo a passo") || h.includes("aula")) return ListChecks;
  if (h.includes("explicar") || h.includes("crianç")) return MessagesSquare;
  if (h.includes("erro") || h.includes("ajudar")) return TriangleAlert;
  return BookOpen;
}

function Treinamento({ texto, accent }: { texto: string; accent: string }) {
  const secoes = texto
    .split(/\n*##\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((bloco) => {
      const nl = bloco.indexOf("\n");
      return nl === -1
        ? { heading: bloco, body: "" }
        : { heading: bloco.slice(0, nl).trim(), body: bloco.slice(nl).trim() };
    });

  return (
    <div className="space-y-3">
      {secoes.map((s, i) => {
        const Icon = iconeSecao(s.heading);
        return (
          <div key={i} className="rounded-xl border border-slate-200 bg-white">
            <div
              className="flex items-center gap-2.5 rounded-t-xl px-4 py-2.5"
              style={{ background: `${accent}10` }}
            >
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-white"
                style={{ background: accent }}
              >
                <Icon className="h-4 w-4" />
              </span>
              <h5 className="text-[14px] font-extrabold text-slate-800">{s.heading}</h5>
            </div>
            <div className="px-4 py-3">
              <TextoFormatado texto={s.body} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ───────────────────────── exercício ───────────────────────── */
function ExercicioCard({ ex, n, accent }: { ex: Exercicio; n: number; accent: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 bg-slate-50/70 px-4 py-3">
        <span
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[14px] font-black text-white"
          style={{ background: accent }}
        >
          {n}
        </span>
        <span className="text-[15px] font-extrabold text-slate-800">{ex.titulo}</span>
        <span className="ml-auto flex items-center gap-2">
          <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-slate-500 ring-1 ring-slate-200">
            {ex.tipo}
          </span>
          {ex.tempo ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-slate-500 ring-1 ring-slate-200">
              <Clock className="h-3 w-3" />
              {ex.tempo}
            </span>
          ) : null}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="rounded-lg border border-sky-100 bg-sky-50/60 p-3">
          <p className="mb-1 flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide text-sky-700">
            <MessagesSquare className="h-3.5 w-3.5" /> Como o professor explica
          </p>
          <TextoFormatado texto={ex.guiaProfessor} />
        </div>

        <div className="rounded-lg border p-3" style={{ borderColor: `${accent}40`, background: `${accent}0D` }}>
          <p
            className="mb-1 flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide"
            style={{ color: accent }}
          >
            <Play className="h-3.5 w-3.5" /> Atividade para a turma
          </p>
          <TextoFormatado texto={ex.atividade} tom="dark" />
        </div>

        <details className="group/gab rounded-lg border border-emerald-200 bg-white p-3">
          <summary className="flex cursor-pointer list-none items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide text-emerald-700">
            <CircleCheck className="h-3.5 w-3.5" />
            Gabarito
            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-open/gab:rotate-180" />
          </summary>
          <div className="mt-2 border-t border-emerald-100 pt-2">
            <TextoFormatado texto={ex.gabarito} />
          </div>
        </details>
      </div>
    </div>
  );
}

/* ───────────────────────── card da aula (com abas) ───────────────────────── */
type Aba = "visao" | "treino" | "ativ" | "prep";

function TabBtn({
  ativo,
  onClick,
  icon: Icon,
  children,
  accent,
}: {
  ativo: boolean;
  onClick: () => void;
  icon: LucideIcon;
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-bold transition ${
        ativo ? "text-white shadow-sm" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
      }`}
      style={ativo ? { background: accent } : undefined}
    >
      <Icon className="h-4 w-4" />
      {children}
    </button>
  );
}

export function AulaCard({
  aula,
  accent,
  accentDark,
}: {
  aula: Aula;
  accent: string;
  accentDark: string;
}) {
  const [aberto, setAberto] = useState(false);
  const [aba, setAba] = useState<Aba>("visao");

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        className="flex w-full items-center gap-3 p-4 text-left hover:bg-slate-50"
      >
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-black text-white"
          style={{ background: accentDark }}
        >
          {aula.numero}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[15.5px] font-extrabold leading-tight text-slate-800">
            {aula.titulo}
          </span>
          <span className="mt-0.5 block text-[12.5px] text-slate-500">
            {aula.semana} · {aula.duracao}
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${aberto ? "rotate-180" : ""}`}
        />
      </button>

      {aberto && (
        <div className="border-t border-slate-100">
          {/* objetivo */}
          <div className="flex items-start gap-2.5 px-4 pt-4 sm:px-6">
            <div
              className="flex items-start gap-2.5 rounded-xl px-3.5 py-2.5"
              style={{ background: `${accent}12` }}
            >
              <Target className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accentDark }} />
              <p className="text-[13.5px] leading-snug text-slate-700">
                <span className="font-extrabold" style={{ color: accentDark }}>
                  Objetivo:{" "}
                </span>
                {aula.objetivo}
              </p>
            </div>
          </div>

          {/* abas */}
          <div className="flex flex-wrap gap-2 px-4 pb-1 pt-3 sm:px-6">
            <TabBtn ativo={aba === "visao"} onClick={() => setAba("visao")} icon={BookOpen} accent={accentDark}>
              Visão geral
            </TabBtn>
            <TabBtn ativo={aba === "treino"} onClick={() => setAba("treino")} icon={GraduationCap} accent={accentDark}>
              Treinamento
            </TabBtn>
            <TabBtn ativo={aba === "ativ"} onClick={() => setAba("ativ")} icon={ListChecks} accent={accentDark}>
              Atividades ({aula.exercicios.length})
            </TabBtn>
            <TabBtn ativo={aba === "prep"} onClick={() => setAba("prep")} icon={Package} accent={accentDark}>
              Preparação
            </TabBtn>
          </div>

          <div className="px-4 pb-6 pt-3 sm:px-6">
            {aba === "visao" && (
              <div className="space-y-4">
                <TextoFormatado texto={aula.descricao} />
                {aula.ilustracoes && aula.ilustracoes.length > 0 && (
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide text-slate-400">
                      <Images className="h-3.5 w-3.5" /> Ilustrações para mostrar à turma
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {aula.ilustracoes.map((il) => (
                        <IlustracaoAula key={il.id} id={il.id} legenda={il.legenda} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {aba === "treino" && <Treinamento texto={aula.treinamento} accent={accentDark} />}

            {aba === "ativ" && (
              <div className="space-y-3">
                <p className="rounded-lg bg-slate-50 px-3 py-2 text-[12.5px] text-slate-500">
                  <span className="font-bold text-slate-700">5 munições.</span> Use quantas couberem no
                  tempo — se usar só 3, tudo bem. Cada uma traz como explicar, a atividade e o gabarito.
                </p>
                {aula.exercicios.map((ex, i) => (
                  <ExercicioCard key={i} ex={ex} n={i + 1} accent={accentDark} />
                ))}
              </div>
            )}

            {aba === "prep" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide text-slate-500">
                    <Package className="h-3.5 w-3.5" /> Materiais
                  </p>
                  <ul className="ml-4 list-disc space-y-1.5 text-[13.5px] text-slate-700 marker:text-slate-300">
                    {aula.materiais.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide text-slate-500">
                    <Lightbulb className="h-3.5 w-3.5" /> Conceitos-chave
                  </p>
                  <ul className="space-y-1.5 text-[13.5px] text-slate-700">
                    {aula.conceitosChave.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function MesEmentaView({
  mes,
  accent,
  accentDark,
}: {
  mes: MesEmenta;
  accent: string;
  accentDark: string;
}) {
  return (
    <div className="space-y-3">
      {mes.aulas.map((aula) => (
        <AulaCard key={aula.numero} aula={aula} accent={accent} accentDark={accentDark} />
      ))}
    </div>
  );
}
