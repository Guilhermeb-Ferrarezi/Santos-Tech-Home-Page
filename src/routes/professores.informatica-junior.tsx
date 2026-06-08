import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Lock, Clock, BookOpen, Target, Monitor, Trophy, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MesEmentaView } from "@/components/aula-detalhada";
import { MESES_INF_JUNIOR, INF_JUNIOR_INFO } from "@/data/ementa-inf-junior";
import { noindexMeta } from "@/lib/seo";

export const Route = createFileRoute("/professores/informatica-junior")({
  component: MaterialInfJunior,
  head: () =>
    noindexMeta({
      title: "Informática Júnior — Material do Professor (restrito) | Santos Tech",
    }),
});

const GREEN = "#0DB88F";
const GREEN_DARK = "#0A6E57";
const GREEN_GRAD = "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)";

const RITMO = [
  { etapa: "Aquecimento / revisão", min: "10 min", o: "Relembrar a aula anterior e mostrar o que vão fazer hoje." },
  { etapa: "Conteúdo novo guiado", min: "15 min", o: "O professor ensina o recurso novo passo a passo." },
  { etapa: "Mão na massa", min: "25 min", o: "A criança faz sozinha o desafio da aula (o professor ajuda)." },
  { etapa: "Desafio extra + compartilhar", min: "10 min", o: "Quem terminou faz o extra; todos mostram o que criaram." },
];

function MaterialInfJunior() {
  const [mesAtivo, setMesAtivo] = useState(0);
  const mes = MESES_INF_JUNIOR[mesAtivo];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="relative overflow-hidden text-white" style={{ background: GREEN_GRAD }}>
        <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
          <Link
            to="/apresentacoes"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[12px] font-bold uppercase tracking-wide">
            <Lock className="h-3.5 w-3.5" /> Material restrito — uso dos professores
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Informática Júnior — Material do Professor
          </h1>
          <p className="mt-2 inline-flex items-center gap-2 text-[15px] font-bold text-white/90">
            <Monitor className="h-4 w-4" /> {INF_JUNIOR_INFO.foco}
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/90">
            Ementa detalhada aula por aula (1 hora cada, 2 aulas por semana). Cada aula traz
            descrição, um treinamento passo a passo para o professor e 5 atividades com gabarito —
            pensado para que mesmo um professor iniciante conduza a aula com segurança.
          </p>
          <p className="mt-2 text-[13px] text-white/70">Público: crianças de 5 a 9 anos.</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-10 px-5 py-10 sm:py-14">
        {/* COMO USAR */}
        <Reveal>
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="flex items-center gap-2 text-lg font-black text-slate-800">
              <BookOpen className="h-5 w-5" style={{ color: GREEN }} /> Como usar este material
            </h2>
            <div className="mt-3 grid gap-2 text-[14px] text-slate-600 sm:grid-cols-2">
              <p className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" style={{ color: GREEN }} /> Cada{" "}
                <strong className="font-bold text-slate-800">aula dura 1 hora</strong> (2 aulas por
                semana). Clique numa aula para abrir.
              </p>
              <p className="flex items-start gap-2">
                <Target className="mt-0.5 h-4 w-4 shrink-0" style={{ color: GREEN }} /> Cada aula tem{" "}
                <strong className="font-bold text-slate-800">5 atividades (munições)</strong>: use
                quantas couberem — se usar só 3, tudo bem.
              </p>
            </div>

            <p className="mt-5 text-[12px] font-extrabold uppercase tracking-wide text-slate-400">
              Ritmo sugerido de cada aula de 1 hora
            </p>
            <div className="mt-2 grid gap-2 sm:grid-cols-4">
              {RITMO.map((r) => (
                <div key={r.etapa} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="text-[13px] font-extrabold text-slate-800">{r.etapa}</div>
                  <div className="mt-0.5 text-[12px] font-black" style={{ color: GREEN_DARK }}>
                    {r.min}
                  </div>
                  <div className="mt-1 text-[12px] leading-snug text-slate-500">{r.o}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* O QUE A CRIANÇA DOMINA */}
        <Reveal>
          <section className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-lg font-black text-slate-800">
              <Trophy className="h-5 w-5" style={{ color: GREEN_DARK }} /> O que a criança domina no ano
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {INF_JUNIOR_INFO.domina.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-[13.5px] text-slate-700">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: GREEN }} />
                  {d}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* SELETOR DE MÊS */}
        <Reveal>
          <section>
            <h2 className="mb-3 text-sm font-black uppercase tracking-wide text-slate-400">
              Escolha o mês
            </h2>
            <div className="flex flex-wrap gap-2">
              {MESES_INF_JUNIOR.map((m, i) => {
                const ativo = i === mesAtivo;
                const vazio = m.aulas.length === 0;
                return (
                  <button
                    key={m.mes}
                    type="button"
                    onClick={() => setMesAtivo(i)}
                    className={`rounded-xl border px-3 py-2 text-left transition ${
                      ativo ? "border-transparent text-white shadow-sm" : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                    style={ativo ? { background: GREEN_DARK } : undefined}
                  >
                    <span className={`block text-[12px] font-black ${ativo ? "text-white" : ""}`} style={ativo ? undefined : { color: GREEN_DARK }}>
                      {m.mes}
                    </span>
                    <span className={`block text-[11.5px] font-semibold ${ativo ? "text-white/85" : "text-slate-500"}`}>
                      {m.ferramenta}
                    </span>
                    <span className={`block text-[10.5px] ${ativo ? "text-white/70" : vazio ? "text-amber-500" : "text-slate-400"}`}>
                      {vazio ? "em produção" : `${m.aulas.length} aulas`}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </Reveal>

        {/* MÊS SELECIONADO */}
        <Reveal key={mes.mes}>
          <section>
            <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="rounded-lg px-2.5 py-1 text-sm font-black text-white" style={{ background: GREEN_DARK }}>
                {mes.mes}
              </span>
              <h2 className="text-xl font-black text-slate-800">{mes.ferramenta}</h2>
              <span className="text-sm font-semibold text-slate-500">— {mes.foco}</span>
              <span className="ml-auto text-[13px] font-bold text-slate-400">{mes.aulas.length} aulas</span>
            </div>
            {mes.aulas.length > 0 ? (
              <MesEmentaView mes={mes} accent={GREEN_DARK} accentDark={GREEN_DARK} />
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-sm text-slate-500">
                As aulas deste mês ainda estão em produção.
              </div>
            )}
          </section>
        </Reveal>

        <div className="pt-2">
          <Link
            to="/apresentacoes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para apresentações
          </Link>
        </div>
      </div>
    </main>
  );
}
