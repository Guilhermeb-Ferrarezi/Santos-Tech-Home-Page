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

// ── ANO 1 — Básico: fundamentos, Office + Google e primeiros passos com IA ────
// Módulos mês a mês (sem automação): fundamentos · Excel/Planilhas · Word/Docs ·
// Apresentações/PowerPoint · comunicação Google · manutenção do PC · ChatGPT · Gemini
const ANO1_MESES: MesGrade[] = [
  { mes: "Mês 1", ferramenta: "Fundamentos da informática", cor: "", logos: ["pc"], foco: "Como o computador funciona", semanas: ["Hardware × software e os periféricos.", "Arquivos: tipos, extensões e pastas.", "Salvar, copiar, mover e organizar.", "Digitação: postura e velocidade (treino)."] },
  { mes: "Mês 2", ferramenta: "Excel", cor: "", foco: "Primeira planilha no Excel", semanas: ["Células, linhas, colunas e abas.", "Digitar dados e formatar (cores, bordas).", "Fórmulas básicas (SOMA, MÉDIA).", "Uma tabela que calcula (entregável)."] },
  { mes: "Mês 3", ferramenta: "Google Planilhas", cor: "", foco: "Planilhas na nuvem", semanas: ["Conhecer o Google Planilhas.", "Funções e colaboração em tempo real.", "Gráficos simples.", "A mesma planilha, agora na nuvem."] },
  { mes: "Mês 4", ferramenta: "Word", cor: "", foco: "Documentos no Word", semanas: ["Escrever e formatar (fonte, parágrafo).", "Listas, alinhamento e imagens.", "Cabeçalho, rodapé e impressão.", "Um documento bem formatado (entregável)."] },
  { mes: "Mês 5", ferramenta: "Google Docs", cor: "", foco: "Documentos na nuvem", semanas: ["Conhecer o Google Docs.", "Colaborar, comentar e sugerir.", "Histórico de versões e modelos.", "Um documento colaborativo."] },
  { mes: "Mês 6", ferramenta: "Google Apresentações", cor: "", foco: "Apresentações no Google", semanas: ["Slides com texto e imagem.", "Temas, transições e animações.", "Colaborar e apresentar online.", "Uma apresentação na nuvem."] },
  { mes: "Mês 7", ferramenta: "PowerPoint", cor: "", foco: "Apresentações no PowerPoint", semanas: ["Slides e design no PowerPoint.", "Transições e animações com propósito.", "Modo apresentador.", "Uma apresentação de impacto (entregável)."] },
  { mes: "Mês 8", ferramenta: "Gmail · Agenda · Meet", cor: "", logos: ["gmail", "calendar", "meet"], foco: "Comunicação e organização", semanas: ["Gmail: escrever e organizar e-mails.", "Google Agenda: eventos e lembretes.", "Google Meet: reuniões online.", "Tudo integrado: e-mail, agenda e reunião."] },
  { mes: "Mês 9", ferramenta: "Earth · Maps · Drive", cor: "", logos: ["earth", "maps", "drive"], foco: "Mapas e nuvem", semanas: ["Google Drive: guardar e compartilhar arquivos.", "Google Maps: rotas e lugares.", "Google Earth: explorar o mundo em 3D.", "Usar as três no dia a dia."] },
  { mes: "Mês 10", ferramenta: "Manutenção do PC", cor: "", logos: ["pc"], foco: "Cuidar do computador", semanas: ["Instalar programas com segurança.", "Desinstalar o que não usa.", "O que é formatar um computador.", "Boas práticas e segurança."] },
  { mes: "Mês 11", ferramenta: "IA — ChatGPT", cor: "", foco: "Conhecer a IA (ChatGPT)", semanas: ["O que é IA e o que é o ChatGPT.", "Fazer boas perguntas (prompts).", "Pesquisar, resumir e tirar dúvidas.", "Usar com responsabilidade (só texto)."] },
  { mes: "Mês 12", ferramenta: "IA — Gemini", cor: "", logos: ["gemini"], foco: "Conhecer a IA (Gemini)", semanas: ["Conhecer o Gemini (a IA do Google).", "Diferenças entre ChatGPT e Gemini.", "Usar o Gemini no dia a dia.", "IA com responsabilidade + certificado do Ano 1."] },
];

// ── ANO 2 — Automação (VBA + Apps Script + IA), bloco profissional e produção ──
// 4 projetos: VBA (3) · Apps Script + IA (3) · Profissional Gmail/Drive/Agenda (3) · Produção+Final (3)
const ANO2_MESES: MesGrade[] = [
  { mes: "Mês 1", projeto: "1/3", ferramenta: "Excel + VBA", cor: "", foco: "Macros: o Excel sozinho", semanas: ["O que é uma macro: gravar a primeira.", "Entender o código gerado.", "Editor VBA (introdução).", "Automatizar uma tarefa repetitiva."] },
  { mes: "Mês 2", projeto: "2/3", ferramenta: "Excel + VBA", cor: "", foco: "Programar no VBA", semanas: ["Variáveis, condições e loops.", "Mexer em células por código.", "Mensagens e botões.", "Uma automação útil."] },
  { mes: "Mês 3", projeto: "3/3", ferramenta: "Excel + VBA", cor: "", foco: "Um sistema no Excel", semanas: ["Juntar macros num fluxo.", "Um mini-sistema (cadastro / relatório).", "Tratar erros.", "Planilha automatizada (entregável)."] },
  { mes: "Mês 4", projeto: "1/3", ferramenta: "Google Apps Script", cor: "", foco: "Automatizar o Google", semanas: ["O que é o Apps Script.", "Automatizar o Google Sheets.", "Funções personalizadas.", "Primeiro script funcionando."] },
  { mes: "Mês 5", projeto: "2/3", ferramenta: "Google Apps Script", cor: "", foco: "Automação na nuvem", semanas: ["Automatizar Gmail e Docs.", "Gatilhos (triggers) por tempo e evento.", "Conectar planilha + e-mail.", "Uma automação rodando sozinha."] },
  { mes: "Mês 6", projeto: "3/3", ferramenta: "IA + automação", cor: "", foco: "IA que programa com você", semanas: ["Usar IA pra gerar macros e scripts.", "Ler e entender o código da IA.", "Corrigir e adaptar.", "Automação feita com apoio de IA (entregável)."] },
  { mes: "Mês 7", projeto: "1/3", ferramenta: "Gmail", cor: "", foco: "E-mail profissional", semanas: ["Conta e identidade profissional.", "Escrever e-mails que funcionam (etiqueta).", "Assinatura, filtros e marcadores.", "Caixa de entrada organizada."] },
  { mes: "Mês 8", projeto: "2/3", ferramenta: "Google Drive", cor: "", foco: "Nuvem e organização", semanas: ["Organizar arquivos e pastas.", "Compartilhar com segurança (permissões).", "Versões e backup.", "Um Drive profissional organizado."] },
  { mes: "Mês 9", projeto: "3/3", ferramenta: "Google Agenda", cor: "", foco: "Agenda e produtividade", semanas: ["Criar eventos e lembretes.", "Reuniões e Google Meet.", "Compartilhar agenda e gerir o tempo.", "Uma rotina organizada (entregável)."] },
  { mes: "Mês 10", projeto: "1/3", ferramenta: "Canva", cor: "", foco: "Design profissional", semanas: ["Canva para documentos e apresentações.", "Identidade visual e posts pra redes.", "Recursos de IA do Canva.", "Peças visuais profissionais."] },
  { mes: "Mês 11", projeto: "2/3", ferramenta: "CapCut + IA", cor: "", foco: "Vídeo e conteúdo com IA", semanas: ["CapCut para vídeos curtos.", "Legendas e edição ágil.", "IA para roteiro e conteúdo.", "Um vídeo ou post profissional."] },
  { mes: "Mês 12", projeto: "3/3", ferramenta: "Projeto — Final + Portfólio", cor: "", foco: "Portfólio + certificação", semanas: ["Projeto final integrando tudo.", "Montar o portfólio profissional.", "Conteúdo de certificação (MOS / Google).", "Demo Day + certificado → ponte pro mercado."] },
];

// ── O que o aluno domina no fim de cada ano (dinâmico por aba) ────────────────
const ANO1_DOMINA = [
  "Entende o computador por dentro: arquivos, hardware, software, periféricos e digitação.",
  "Cria planilhas no Excel e no Google Planilhas.",
  "Escreve documentos no Word e no Google Docs.",
  "Monta apresentações no PowerPoint e no Google Apresentações.",
  "Usa as ferramentas do dia a dia: Gmail, Agenda, Meet, Drive, Maps e Earth.",
  "Instala e desinstala programas, entende o que é formatar — e dá os primeiros passos com IA (ChatGPT e Gemini).",
];
const ANO2_DOMINA = [
  "Automatiza o Excel com macros e VBA — o primeiro código de verdade.",
  "Automatiza o Google Workspace com Apps Script (Sheets, Gmail, gatilhos).",
  "Usa IA pra gerar e entender automações.",
  "Domina o pacote profissional: e-mail, nuvem e agenda (Gmail, Drive, Agenda).",
  "Produz conteúdo profissional com Canva e CapCut (com IA).",
  "Monta um portfólio e fecha com conteúdo de certificação — pronto pro mercado.",
];

const ANOS = [
  { titulo: "Ano 1", foco: "Fundamentos, Office + Google e primeiros passos com IA", ferramentas: "Fundamentos · Excel/Planilhas · Word/Docs · Apresentações/PowerPoint · Google · ChatGPT · Gemini", trofeu: "Base sólida de informática", meses: ANO1_MESES, domina: ANO1_DOMINA },
  { titulo: "Ano 2", foco: "Automação (VBA + Apps Script + IA), bloco profissional e produção com IA", ferramentas: "VBA · Apps Script · Gmail · Drive · Agenda · Canva · CapCut · IA", trofeu: "4 projetos no ano", meses: ANO2_MESES, domina: ANO2_DOMINA },
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
  { n: "Word", d: "Documentos no padrão Microsoft — do currículo ao relatório." },
  { n: "Excel", d: "A planilha nº 1 do mercado: fórmulas avançadas, tabelas dinâmicas, dashboards e automação (VBA)." },
  { n: "PowerPoint", d: "Apresentações profissionais de impacto." },
  { n: "Google Docs, Sheets e Apresentações", d: "A suíte do Google na nuvem, com colaboração em tempo real." },
  { n: "Gmail, Drive e Agenda", d: "O pacote profissional do Google: e-mail, nuvem e agenda." },
  { n: "Automação: VBA e Apps Script", d: "Macros no Excel e scripts no Google para automatizar tarefas — o primeiro código." },
  { n: "IA (ChatGPT, Copilot e Gemini)", d: "Assistentes de IA para escrever, analisar dados, criar e programar — com responsabilidade." },
  { n: "Canva", d: "Design profissional: documentos, apresentações e redes — com recursos de IA." },
  { n: "CapCut", d: "Edição de vídeo ágil para conteúdo e redes, com IA." },
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
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Escolha o ano e veja os 12 meses</h2>
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
