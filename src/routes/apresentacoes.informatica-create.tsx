import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Monitor,
  Clock,
  Users,
  CalendarDays,
  Trophy,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MesesGrade, type MesGrade } from "@/components/ementa-meses";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import { noindexMeta } from "@/lib/seo";

export const Route = createFileRoute("/apresentacoes/informatica-create")({
  component: InfCreateApresentacao,
  head: () =>
    noindexMeta({
      title: "Informática Create — Apresentação e Ementa | Santos Tech (interno)",
    }),
});

const BLUE = "#2E8FCF";
const BLUE_DARK = "#04325A";
const BLUE_GRAD = "linear-gradient(135deg, #2E8FCF 0%, #04325A 100%)";

const METODO = [
  { etapa: "Aquecimento / revisão", min: "10 min", o: "Retomar a aula anterior e mostrar o resultado que vão produzir hoje." },
  { etapa: "Conteúdo novo guiado", min: "15 min", o: "O professor ensina a técnica nova passo a passo." },
  { etapa: "Mão na massa", min: "25 min", o: "O aluno resolve sozinho o desafio real da aula (o professor orienta)." },
  { etapa: "Desafio extra + compartilhar", min: "10 min", o: "Quem termina vai além; todos mostram o que produziram." },
];

// ── ANO 1 — Básico: fundamentos, 4 IAs, Office + Google e ferramentas do dia a dia
// Módulos (sem automação): fundamentos · 4 IAs · Excel · Planilhas · Forms · Word ·
// Docs · PowerPoint · Apresentações · comunicação Google · (Earth/Maps/Drive + manutenção)
const ANO1_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Fundamentos da informática", cor: "", logos: ["pc"], foco: "Como o computador funciona", semanas: ["Hardware × software e os periféricos.", "Arquivos: tipos, extensões e pastas.", "Salvar, copiar, mover e organizar.", "Digitação: postura e velocidade (treino)."] },
  { mes: "Mês 2", ferramenta: "Inteligência Artificial", cor: "", logos: ["chatgpt", "gemini", "deepseek", "perplexity"], foco: "4 IAs — 1 semana cada", semanas: ["ChatGPT: pesquisar, escrever e resumir.", "Gemini: a IA do Google.", "DeepSeek: outra IA poderosa.", "Perplexity: a IA que pesquisa com fontes."] },
  { mes: "Mês 3", ferramenta: "Excel", cor: "", foco: "Primeira planilha no Excel", semanas: ["Células, linhas, colunas e abas.", "Digitar dados e formatar (cores, bordas).", "Fórmulas básicas (SOMA, MÉDIA).", "Uma tabela que calcula (entregável)."] },
  { mes: "Mês 4", ferramenta: "Google Planilhas", cor: "", foco: "Planilhas na nuvem", semanas: ["Conhecer o Google Planilhas.", "Funções e colaboração em tempo real.", "Gráficos simples.", "A mesma planilha, agora na nuvem."] },
  { mes: "Mês 5", ferramenta: "Google Forms", cor: "", logos: ["forms"], foco: "Formulários e quizzes", semanas: ["Criar um formulário do zero.", "Tipos de pergunta e validação.", "Coletar respostas.", "Ver as respostas no Planilhas."] },
  { mes: "Mês 6", ferramenta: "Word", cor: "", foco: "Documentos no Word", semanas: ["Escrever e formatar (fonte, parágrafo).", "Listas, alinhamento e imagens.", "Cabeçalho, rodapé e impressão.", "Um documento bem formatado (entregável)."] },
  { mes: "Mês 7", ferramenta: "Google Docs", cor: "", foco: "Documentos na nuvem", semanas: ["Conhecer o Google Docs.", "Colaborar, comentar e sugerir.", "Histórico de versões e modelos.", "Um documento colaborativo."] },
  { mes: "Mês 8", ferramenta: "PowerPoint", cor: "", foco: "Apresentações no PowerPoint", semanas: ["Slides e design no PowerPoint.", "Transições e animações com propósito.", "Modo apresentador.", "Uma apresentação de impacto (entregável)."] },
  { mes: "Mês 9", ferramenta: "Google Apresentações", cor: "", foco: "Apresentações no Google", semanas: ["Slides com texto e imagem.", "Temas, transições e animações.", "Colaborar e apresentar online.", "Uma apresentação na nuvem."] },
  { mes: "Mês 10", ferramenta: "Gmail · Agenda · Meet", cor: "", logos: ["gmail", "calendar", "meet"], foco: "Comunicação e organização", semanas: ["Gmail: escrever e organizar e-mails.", "Google Agenda: eventos e lembretes.", "Google Meet: reuniões online.", "Tudo integrado: e-mail, agenda e reunião."] },
  { mes: "Mês 11", ferramenta: "Earth · Maps · Drive · Manutenção", cor: "", logos: ["earth", "maps", "drive", "pc"], foco: "Mapas, nuvem e manutenção", semanas: ["Google Earth: explorar o mundo em 3D.", "Google Maps: rotas e lugares.", "Google Drive: guardar e compartilhar arquivos.", "Manutenção do PC (instalar/formatar) + certificado do Ano 1."] },
];

// ── ANO 2 — Automação (VBA + Apps Script), edição de vídeo, Canva, formulários e nuvem ─
// Módulos: Excel+VBA ×3 · Planilhas+Apps Script ×3 · CapCut ×2 · Canva ×2 · Formulários · Cloud
const ANO2_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Excel + VBA", cor: "", logos: ["excel", "vba"], foco: "Macros: automatizar o Excel", semanas: ["O que é automação e o que é uma macro.", "Gravar a primeira macro.", "Entender o código gerado (VBA).", "Automatizar uma tarefa repetitiva."] },
  { mes: "Mês 2", ferramenta: "Excel + VBA", cor: "", logos: ["excel", "vba"], foco: "Programar no VBA", semanas: ["Editor VBA e variáveis.", "Condições e loops.", "Mexer em células e planilhas por código.", "Mensagens e botões."] },
  { mes: "Mês 3", ferramenta: "Excel + VBA", cor: "", logos: ["excel", "vba"], foco: "Um sistema no Excel", semanas: ["Juntar macros num fluxo.", "Um mini-sistema (cadastro / relatório).", "Tratar erros.", "Planilha automatizada (entregável)."] },
  { mes: "Mês 4", ferramenta: "Planilhas + Apps Script", cor: "", logos: ["sheets", "appsscript"], foco: "Automatizar o Google", semanas: ["O que é o Google Apps Script.", "Primeiro script no Google Planilhas.", "Funções personalizadas.", "Automação simples funcionando."] },
  { mes: "Mês 5", ferramenta: "Planilhas + Apps Script", cor: "", logos: ["sheets", "appsscript"], foco: "Apps Script na prática", semanas: ["Variáveis, condições e loops.", "Manipular a planilha por código.", "Menus e botões personalizados.", "Uma automação útil."] },
  { mes: "Mês 6", ferramenta: "Planilhas + Apps Script", cor: "", logos: ["sheets", "appsscript"], foco: "Automação na nuvem", semanas: ["Conectar Planilhas + Gmail.", "Gatilhos (triggers) por tempo e evento.", "Uma rotina que roda sozinha.", "Automação na nuvem (entregável)."] },
  { mes: "Mês 7", ferramenta: "CapCut", cor: "", logos: ["capcut"], foco: "Edição de vídeo", semanas: ["Conhecer o CapCut.", "Cortes, transições e ritmo.", "Textos, legendas e trilha.", "Um primeiro vídeo editado."] },
  { mes: "Mês 8", ferramenta: "CapCut", cor: "", logos: ["capcut"], foco: "Vídeos mais profissionais", semanas: ["Efeitos e recursos avançados.", "Legendas automáticas e áudio.", "Exportar com qualidade.", "Um vídeo profissional (entregável)."] },
  { mes: "Mês 9", ferramenta: "Canva", cor: "", logos: ["canva"], foco: "Design no Canva", semanas: ["Conhecer o Canva a fundo.", "Documentos, cartazes e posts.", "Identidade visual (cores e fontes).", "Peças visuais próprias."] },
  { mes: "Mês 10", ferramenta: "Canva", cor: "", logos: ["canva"], foco: "Canva avançado", semanas: ["Apresentações e infográficos.", "Recursos de IA do Canva.", "Vídeo e animação no Canva.", "Um material visual completo (entregável)."] },
  { mes: "Mês 11", ferramenta: "Google Formulários", cor: "", logos: ["forms"], foco: "Formulários e dados", semanas: ["Criar formulários e quizzes.", "Tipos de pergunta e validação.", "Coletar respostas e ver no Planilhas.", "Um formulário com análise das respostas."] },
  { mes: "Mês 12", ferramenta: "Cloud (computação em nuvem)", cor: "", logos: ["cloud"], foco: "Computação em nuvem", semanas: ["O que é a nuvem (cloud) e como funciona.", "Armazenamento e backup na nuvem.", "Trabalhar e colaborar online.", "Segurança na nuvem + certificado do Ano 2."] },
];

// ── O que o aluno domina no fim de cada ano (dinâmico por aba) ────────────────
const ANO1_DOMINA = [
  "Entende o computador por dentro: arquivos, hardware, software, periféricos e digitação.",
  "Dá os primeiros passos com 4 IAs: ChatGPT, Gemini, DeepSeek e Perplexity.",
  "Cria planilhas (Excel e Google Planilhas) e formulários (Google Forms).",
  "Escreve documentos (Word e Google Docs) e monta apresentações (PowerPoint e Apresentações).",
  "Usa as ferramentas do dia a dia: Gmail, Agenda, Meet, Drive, Maps e Earth.",
  "Sabe instalar/desinstalar programas e o que é formatar um computador.",
];
const ANO2_DOMINA = [
  "Automatiza o Excel com macros e VBA — o primeiro código de verdade.",
  "Automatiza o Google Planilhas com Apps Script (e gatilhos na nuvem).",
  "Edita vídeos do básico ao profissional (CapCut).",
  "Domina o design visual no Canva, de forma aprofundada.",
  "Cria formulários e quizzes e coleta dados (Google Formulários).",
  "Entende computação em nuvem: armazenamento, backup, colaboração e segurança.",
];

const ANOS = [
  { titulo: "Ano 1", foco: "Fundamentos, 4 IAs, Office + Google e ferramentas do dia a dia", ferramentas: "Fundamentos · 4 IAs · Excel/Planilhas · Forms · Word/Docs · PowerPoint/Apresentações · Google · Manutenção", trofeu: "Base sólida de informática", meses: ANO1_MESES, domina: ANO1_DOMINA },
  { titulo: "Ano 2", foco: "Automação (VBA + Apps Script), edição de vídeo, Canva, formulários e nuvem", ferramentas: "Excel + VBA · Planilhas + Apps Script · CapCut · Canva · Formulários · Cloud", trofeu: "Automação, mídia e nuvem", meses: ANO2_MESES, domina: ANO2_DOMINA },
];

const CONCEITOS = [
  "Documentos profissionais",
  "Apresentações de impacto",
  "Excel avançado",
  "Tabelas dinâmicas",
  "Dashboards de dados",
  "Automação (VBA)",
  "Apps Script (Google)",
  "IA na produtividade",
  "E-mail e nuvem profissionais",
  "Design (Canva / CapCut)",
  "Conteúdo de certificação (MOS)",
  "Portfólio profissional",
];

const FERRAMENTAS = [
  { n: "Excel", d: "Planilhas, fórmulas e automação com macros (VBA)." },
  { n: "Word", d: "Documentos profissionais no padrão Microsoft." },
  { n: "PowerPoint", d: "Apresentações de impacto." },
  { n: "Google Planilhas, Docs e Apresentações", d: "A suíte do Google na nuvem, com colaboração em tempo real." },
  { n: "Google Apps Script", d: "Automação do Google Workspace por código." },
  { n: "Gmail, Drive e Agenda", d: "Comunicação e organização do dia a dia (com Google Meet)." },
  { n: "IA (ChatGPT e Gemini)", d: "Assistentes de IA para pesquisar, escrever, resumir e aprender." },
  { n: "Canva", d: "Design visual aprofundado: documentos, posts, apresentações e vídeo." },
  { n: "CapCut", d: "Edição de vídeo — de cortes simples a vídeos profissionais." },
  { n: "Google Formulários", d: "Formulários, quizzes e coleta de dados ligada às Planilhas." },
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

function InfCreateApresentacao() {
  const [ano, setAno] = useState(0);
  const atual = ANOS[ano];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-14 text-white" style={{ background: BLUE_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <Monitor className="pointer-events-none absolute -bottom-12 -right-10 h-72 w-72 rotate-12 text-white/10" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackLink light />
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Monitor className="h-8 w-8" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Adolescentes · Informática</p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Informática Create</h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            A informática que o mercado exige: dominar o <strong>Office</strong> e o{" "}
            <strong>Google Workspace</strong>, Excel avançado, <strong>automação</strong> e{" "}
            <strong>inteligência artificial</strong> — com o conteúdo das certificações Microsoft.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Chip icon={Users}>10 a 15 anos</Chip>
            <Chip icon={CalendarDays}>2 anos · 24 meses</Chip>
            <Chip icon={Clock}>2h por semana</Chip>
            <Chip icon={Trophy}>Office, Google e IA</Chip>
          </div>
        </div>
      </section>

      {/* COMO É CADA AULA */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>Como é cada aula</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">2 horas por semana, com ritmo</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METODO.map((m, i) => (
              <Reveal key={m.etapa} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white" style={{ background: BLUE_DARK }}>{i + 1}</span>
                    <span className="text-xs font-black uppercase tracking-wider" style={{ color: BLUE }}>{m.min}</span>
                  </div>
                  <h3 className="mt-3 font-black text-st-blue-dark">{m.etapa}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GRADE — ANO A ANO (seletor) — banda colorida */}
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: BLUE_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">A grade, ano a ano</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Escolha o ano e veja a grade mês a mês</h2>
            <p className="mt-3 text-white/90">
              Cada habilidade é trabalhada na versão <strong>Microsoft</strong> e na do{" "}
              <strong>Google</strong> — do jeito que o mercado usa.{" "}
              <strong>Clique num mês</strong> para ver o que é trabalhado em cada semana.
            </p>
          </Reveal>

          {/* tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {ANOS.map((a, i) => {
              const ativo = i === ano;
              return (
                <button
                  key={a.titulo}
                  type="button"
                  onClick={() => setAno(i)}
                  className={`rounded-full px-5 py-2.5 text-sm font-black uppercase tracking-wider transition ${
                    ativo ? "bg-white shadow-md" : "border-2 border-white/40 text-white hover:bg-white/10"
                  }`}
                  style={ativo ? { color: BLUE_DARK } : undefined}
                >
                  {a.titulo}
                </button>
              );
            })}
          </div>

          {/* resumo do ano ativo */}
          <div className="mt-6 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-white">{atual.titulo} — {atual.foco}</h3>
                <p className="mt-1 text-sm text-white/85">{atual.ferramentas}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold" style={{ color: BLUE_DARK }}>
                <Trophy className="h-4 w-4" /> {atual.trofeu}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <MesesGrade meses={atual.meses} accent={BLUE_DARK} />
          </div>

          {/* Conceitos */}
          <Reveal className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-white" />
              <h3 className="font-black text-white">O que o aluno domina na trilha</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONCEITOS.map((c) => (
                <span key={c} className="rounded-full border border-white/40 px-3.5 py-1.5 text-sm font-bold text-white">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* O QUE DOMINA — dinâmico por ano */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>
              No fim do {atual.titulo}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que o aluno domina
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {atual.domina.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: BLUE }} />
                <span className="text-sm text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FERRAMENTAS — banda colorida */}
      <section className="relative isolate overflow-hidden py-16 text-white" style={{ background: BLUE_GRAD }}>
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">As ferramentas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">As ferramentas do mercado</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FERRAMENTAS.map((f) => (
              <div key={f.n} className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ToolLogo name={logoKey(f.n)} className="h-8 w-8" />
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
