import { ChevronDown } from "lucide-react";
import type { Aula, Exercicio, MesEmenta } from "@/data/ementa-inf-junior/tipos";

/**
 * Renderiza texto puro (convenção da ementa) em parágrafos, subtítulos ("## "),
 * listas com tópicos ("- ") e listas numeradas ("1. ").
 */
function TextoFormatado({ texto }: { texto: string }) {
  const linhas = texto.split("\n");
  const blocos: React.ReactNode[] = [];
  let lista: string[] = [];
  let listaTipo: "ul" | "ol" | null = null;
  let paragrafo: string[] = [];

  const flushParagrafo = () => {
    if (paragrafo.length) {
      blocos.push(
        <p key={`p${blocos.length}`} className="text-[14.5px] leading-relaxed text-slate-700">
          {paragrafo.join(" ")}
        </p>,
      );
      paragrafo = [];
    }
  };
  const flushLista = () => {
    if (lista.length) {
      const items = lista.map((t, i) => (
        <li key={i} className="text-[14.5px] leading-relaxed text-slate-700">
          {t}
        </li>
      ));
      blocos.push(
        listaTipo === "ol" ? (
          <ol key={`l${blocos.length}`} className="ml-5 list-decimal space-y-1">
            {items}
          </ol>
        ) : (
          <ul key={`l${blocos.length}`} className="ml-5 list-disc space-y-1">
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
    if (linha.startsWith("## ")) {
      flushParagrafo();
      flushLista();
      blocos.push(
        <h5 key={`h${blocos.length}`} className="pt-1 text-[13px] font-extrabold uppercase tracking-wide text-slate-500">
          {linha.slice(3)}
        </h5>,
      );
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

function Bloco({
  titulo,
  accent,
  children,
}: {
  titulo: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h4 className="text-sm font-black" style={{ color: accent }}>
        {titulo}
      </h4>
      {children}
    </section>
  );
}

function ExercicioCard({ ex, n, accent }: { ex: Exercicio; n: number; accent: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-black text-white"
          style={{ background: accent }}
        >
          {n}
        </span>
        <span className="text-[15px] font-extrabold text-slate-800">{ex.titulo}</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500">
          {ex.tipo}
        </span>
        {ex.tempo ? (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500">
            {ex.tempo}
          </span>
        ) : null}
      </div>

      <div className="space-y-3">
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="mb-1 text-[12px] font-extrabold uppercase tracking-wide text-slate-400">
            Guia do professor
          </p>
          <TextoFormatado texto={ex.guiaProfessor} />
        </div>
        <div>
          <p className="mb-1 text-[12px] font-extrabold uppercase tracking-wide text-slate-400">
            Atividade
          </p>
          <TextoFormatado texto={ex.atividade} />
        </div>
        <details className="group/gab rounded-lg border border-dashed border-slate-300 bg-white p-3">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-[12px] font-extrabold uppercase tracking-wide text-slate-400">
            <ChevronDown className="h-3.5 w-3.5 transition-transform group-open/gab:rotate-180" />
            Gabarito
          </summary>
          <div className="mt-2">
            <TextoFormatado texto={ex.gabarito} />
          </div>
        </details>
      </div>
    </div>
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
  return (
    <details className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <summary className="flex cursor-pointer list-none items-center gap-3 p-4 hover:bg-slate-50">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-black text-white"
          style={{ background: accentDark }}
        >
          {aula.numero}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-extrabold leading-tight text-slate-800">
            {aula.titulo}
          </span>
          <span className="mt-0.5 block text-[12.5px] text-slate-500">
            {aula.semana} · {aula.duracao} · {aula.objetivo}
          </span>
        </span>
        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>

      <div className="space-y-5 border-t border-slate-100 px-4 pb-6 pt-4 sm:px-6">
        <Bloco titulo="Sobre a aula" accent={accent}>
          <TextoFormatado texto={aula.descricao} />
        </Bloco>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-wide text-slate-400">
              Materiais
            </p>
            <ul className="ml-4 list-disc space-y-0.5 text-[13.5px] text-slate-700">
              {aula.materiais.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-wide text-slate-400">
              Conceitos-chave
            </p>
            <ul className="ml-4 list-disc space-y-0.5 text-[13.5px] text-slate-700">
              {aula.conceitosChave.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <Bloco titulo="Treinamento do professor" accent={accent}>
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <TextoFormatado texto={aula.treinamento} />
          </div>
        </Bloco>

        <Bloco titulo={`Exercícios — ${aula.exercicios.length} munições`} accent={accent}>
          <p className="-mt-1 text-[12.5px] text-slate-500">
            5 atividades para diversificar o aprendizado. Use quantas couberem no tempo — se usar
            só 3, tudo bem.
          </p>
          <div className="space-y-3">
            {aula.exercicios.map((ex, i) => (
              <ExercicioCard key={i} ex={ex} n={i + 1} accent={accent} />
            ))}
          </div>
        </Bloco>
      </div>
    </details>
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
