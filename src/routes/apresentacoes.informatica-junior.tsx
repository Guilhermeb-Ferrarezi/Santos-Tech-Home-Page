import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Monitor,
  Clock,
  Users,
  CalendarDays,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MesesGrade, type MesGrade } from "@/components/ementa-meses";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import { noindexMeta } from "@/lib/seo";

export const Route = createFileRoute("/apresentacoes/informatica-junior")({
  component: InfJuniorApresentacao,
  head: () =>
    noindexMeta({
      title: "Informática Júnior — Apresentação e Ementa | Santos Tech (interno)",
    }),
});

const GREEN = "#0DB88F";
const GREEN_DARK = "#0A6E57";
const GREEN_GRAD = "linear-gradient(135deg, #14C29A 0%, #0A6E57 100%)";

const COR = {
  pc: "#64748B",
  word: "#2B579A",
  ppt: "#C43E1C",
  excel: "#217346",
  ia: "#14B8A6",
  canva: "#00C4CC",
} as const;

const METODO = [
  { etapa: "Aquecimento / revisão", min: "10 min", o: "Relembrar a aula anterior e mostrar o que vão criar hoje." },
  { etapa: "Conteúdo novo guiado", min: "15 min", o: "O professor ensina o recurso novo passo a passo." },
  { etapa: "Mão na massa", min: "25 min", o: "A criança faz sozinha o desafio da aula (o professor ajuda)." },
  { etapa: "Desafio extra + compartilhar", min: "10 min", o: "Quem terminou faz o extra; todos mostram o que criaram." },
];

// ── O ano (1 ano) — 12 meses, tempo ponderado por ferramenta ─────────────────
const MESES: MesGrade[] = [
  {
    mes: "Mês 1",
    ferramenta: "Dominando o computador",
    cor: COR.pc,
    foco: "Conhecendo o computador",
    semanas: [
      "Ligar, desligar, mouse e cliques.",
      "O teclado e a tela; abrir e fechar janelas.",
      "Abrir e fechar programas.",
      "Primeiros jogos de digitação.",
    ],
  },
  {
    mes: "Mês 2",
    ferramenta: "Dominando o computador",
    cor: COR.pc,
    foco: "Digitação e arquivos",
    semanas: [
      "Digitar com as duas mãos (posição dos dedos).",
      "Salvar, abrir e renomear arquivos.",
      "Organizar tudo em pastas.",
      "Pendrive e nuvem: levar e trazer arquivos.",
    ],
  },
  {
    mes: "Mês 3",
    ferramenta: "Dominando o computador",
    cor: COR.pc,
    foco: "Internet com segurança",
    semanas: [
      "Navegar e pesquisar com segurança.",
      "Senhas fortes e privacidade.",
      "Gentileza e cuidado online (cidadania digital).",
      "Pesquisar uma imagem/informação para um trabalho.",
    ],
  },
  {
    mes: "Mês 4",
    ferramenta: "Word / Google Docs",
    cor: COR.word,
    foco: "Criar documentos",
    semanas: [
      "Escrever e formatar (fonte, cor, negrito).",
      "Listas e alinhamento.",
      "Inserir imagens; corretor ortográfico.",
      "Um cartaz, história ou diploma (entregável).",
    ],
  },
  {
    mes: "Mês 5",
    ferramenta: "PowerPoint / Google Apresentações",
    cor: COR.ppt,
    foco: "Apresentações",
    semanas: [
      "Slides com texto e imagem.",
      "Transições e animações.",
      "Organizar uma apresentação.",
      "Apresentar para a turma.",
    ],
  },
  {
    mes: "Mês 6",
    ferramenta: "PowerPoint / Google Apresentações",
    cor: COR.ppt,
    foco: "Jogo no PowerPoint",
    semanas: [
      "Hyperlinks: clicar e ir para outro slide.",
      "Montar um quiz ou aventura clicável.",
      "Sons e efeitos.",
      "Um joguinho clicável próprio (entregável + demo).",
    ],
  },
  {
    mes: "Mês 7",
    ferramenta: "Excel / Google Planilhas",
    cor: COR.excel,
    foco: "Primeira planilha",
    semanas: [
      "Células, linhas e colunas.",
      "Digitar dados e montar uma tabela.",
      "Formatar (cores, bordas).",
      "Uma tabela própria (coleção, notas, time...).",
    ],
  },
  {
    mes: "Mês 8",
    ferramenta: "Excel / Google Planilhas",
    cor: COR.excel,
    foco: "Contas automáticas",
    semanas: [
      "Soma automática (SUM).",
      "Média e contagem simples.",
      "Arrastar fórmulas para várias células.",
      "Uma planilha que calcula sozinha.",
    ],
  },
  {
    mes: "Mês 9",
    ferramenta: "Excel / Google Planilhas",
    cor: COR.excel,
    foco: "Gráficos",
    semanas: [
      "Transformar dados em gráfico.",
      "Tipos de gráfico (barra, pizza).",
      "Deixar o gráfico claro e bonito.",
      "Um painel simples com gráfico (entregável).",
    ],
  },
  {
    mes: "Mês 10",
    ferramenta: "Inteligência Artificial",
    cor: COR.ia,
    logos: ["gemini", "nanobanana"],
    foco: "Conhecendo a IA",
    semanas: [
      "O que é inteligência artificial.",
      "Criar imagens com IA (texto vira imagem).",
      "Usar a IA com responsabilidade.",
      "Uma galeria de figuras feitas com IA.",
    ],
  },
  {
    mes: "Mês 11",
    ferramenta: "Canva",
    cor: COR.canva,
    foco: "Criar artes no Canva",
    semanas: [
      "Conhecer o Canva: modelos prontos e arrastar elementos.",
      "Texto, cores e figurinhas para deixar bonito.",
      "Inserir fotos e imagens nas artes.",
      "Um cartaz, convite ou cartão próprio (entregável).",
    ],
  },
  {
    mes: "Mês 12",
    ferramenta: "Projeto final",
    cor: COR.ia,
    foco: "Projeto final + Demo Day",
    semanas: [
      "Escolher o tema e planejar o projeto.",
      "Criar tudo: documento, planilha com gráfico, figura com IA e arte no Canva.",
      "Montar e ensaiar a apresentação final.",
      "Demo Day para os pais + certificado do nível.",
    ],
  },
];

const DOMINA = [
  "Usa o computador com autonomia e digita com as duas mãos.",
  "Cria documentos, apresentações e planilhas próprios.",
  "Faz contas e gráficos no Excel / Sheets.",
  "Navega com segurança e usa IA com responsabilidade.",
  "Cria artes simples no Canva (cartazes, convites e cartões).",
  "Apresenta um projeto próprio no Demo Day.",
];

const FERRAMENTAS: { n: string; d: string; logo?: string }[] = [
  { n: "Windows + Digitação", d: "Dominar o computador: mouse, teclado, digitação e organização de arquivos." },
  { n: "Word", d: "Criar e formatar documentos no padrão Microsoft." },
  { n: "Google Docs", d: "A versão do Google para documentos, direto na nuvem." },
  { n: "PowerPoint", d: "Apresentações no padrão Microsoft — e até um jogo clicável." },
  { n: "Google Apresentações", d: "A versão do Google para apresentações, na nuvem." },
  { n: "Excel", d: "A primeira planilha: dados, contas automáticas e gráficos." },
  { n: "Google Planilhas", d: "A versão do Google para planilhas, na nuvem." },
  { n: "Inteligência Artificial", d: "A plataforma de IA que a turma usa (com supervisão) para aprender e criar.", logo: "gemini" },
  { n: "IA de imagem (geradora)", d: "A ferramenta que transforma texto em imagem — a criança experimenta, sempre com supervisão.", logo: "nanobanana" },
  { n: "Canva", d: "Design para crianças: cartazes, convites e cartões com modelos prontos, no arrastar e soltar." },
];

function BackLink({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/apresentacoes"
      className={`inline-flex items-center gap-2 text-sm font-bold transition ${
        light ? "text-white/90 hover:text-white" : "text-st-blue-dark hover:text-primary"
      }`}
    >
      <ArrowLeft className="h-4 w-4" /> Voltar para as apresentações
    </a>
  );
}

function Chip({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-bold backdrop-blur">
      <Icon className="h-4 w-4" /> {children}
    </span>
  );
}

function InfJuniorApresentacao() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-14 text-white" style={{ background: GREEN_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <Monitor className="pointer-events-none absolute -bottom-12 -right-10 h-72 w-72 rotate-12 text-white/10" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackLink light />
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Monitor className="h-8 w-8" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">
                Crianças · Informática
              </p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Informática Júnior</h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            A base digital que a escola não dá: dominar o computador de verdade, criar no Office e dar
            os primeiros passos com inteligência artificial.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Chip icon={Users}>5 a 9 anos</Chip>
            <Chip icon={CalendarDays}>1 ano (12 meses)</Chip>
            <Chip icon={Clock}>2h por semana</Chip>
            <Chip icon={Users}>Turmas de até 10</Chip>
          </div>
        </div>
      </section>

      {/* COMO É CADA AULA */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: GREEN }}>
              Como é cada aula
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              2 horas por semana, com ritmo
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METODO.map((m, i) => (
              <Reveal key={m.etapa} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white" style={{ background: GREEN_DARK }}>
                      {i + 1}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider" style={{ color: GREEN }}>
                      {m.min}
                    </span>
                  </div>
                  <h3 className="mt-3 font-black text-st-blue-dark">{m.etapa}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* O ANO — 12 MESES (banda colorida) */}
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: GREEN_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
              O ano — mês a mês
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Os 12 meses</h2>
            <p className="mt-3 text-white/90">
              Cada ferramenta tem o tempo que precisa: Word é rápido, Excel ganha mais meses.{" "}
              <strong>Clique em um mês</strong> para ver o que é trabalhado em cada semana.
            </p>
          </Reveal>
          <div className="mt-10">
            <MesesGrade meses={MESES} accent={GREEN_DARK} />
          </div>
        </div>
      </section>

      {/* O QUE DOMINA */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: GREEN }}>
              No fim do ano
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que a criança domina
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {DOMINA.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: GREEN }} />
                <span className="text-sm text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FERRAMENTAS — banda colorida */}
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: GREEN_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
              As ferramentas
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que seu filho vai usar
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FERRAMENTAS.map((f) => (
              <div key={f.n} className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ToolLogo name={f.logo ?? logoKey(f.n)} className="h-8 w-8" />
                </span>
                <div>
                  <p className="font-black">{f.n}</p>
                  <p className="mt-1 text-sm text-white/85">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLTAR */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackLink />
        </div>
      </section>
    </div>
  );
}
