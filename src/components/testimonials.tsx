import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Review = { quote: string; name: string; role: string };

// ──────────────────────────────────────────────────────────────────────────
// Avaliações REAIS do Google (curadas). Para adicionar/trocar, edite a lista.
// Privacidade: não citar nomes dos sócios; evitar sobrenomes de familiares.
// ──────────────────────────────────────────────────────────────────────────
const REVIEWS: Review[] = [
  {
    quote:
      "Meu filho já estudou em 2 outras escolas de programação de Ribeirão Preto e achei surpreendente o nível das máquinas daqui. A escola envolve os alunos em projetos reais, como um jogo que estão desenvolvendo — e os alunos fazem parte da equipe. Hoje meu filho faz parte da turma de programação.",
    name: "Eduardo Nascimento",
    role: "Pai de aluno · Google",
  },
  {
    quote:
      "Escola acolhedora, com estrutura moderna. Excelente qualidade, ótimo atendimento e muita paciência no ensino, com ótimas ferramentas para os estudantes. A escola perfeita para quem procura aprender programação e informática.",
    name: "Milena Santos",
    role: "Aluna · Google",
  },
  {
    quote:
      "Ótima escola, com ótimos professores e atendimento perfeito! Aprendi muito sobre 3D e muito rápido. Os computadores são muito bons, cadeiras confortáveis, ar-condicionado. Além de aprender, fiz amizade com o pessoal. Nota mil!",
    name: "Emilly Takassaki",
    role: "Aluna · Google",
  },
  {
    quote:
      "Faço informática e estou gostando bastante do atendimento, do professor e do ambiente. Nunca tinha pegado em um computador e hoje consigo ver minha evolução. Recomendo muito a escola.",
    name: "Raul Barbosa",
    role: "Aluno · Google",
  },
  {
    quote:
      "Espaço muito bem equipado, com professores excelentes e realmente apaixonados por games! Lugares assim em Ribeirão Preto são bem difíceis de encontrar. Recomendo de +!",
    name: "Lucas Sambudio",
    role: "Aluno · Google",
  },
  {
    quote:
      "Curso completo, com professores pacientes. Se você é de Ribeirão Preto e quer aprender informática ou Excel, essa é a escolha certa!",
    name: "Igor Oliveira",
    role: "Aluno · Google",
  },
  {
    quote:
      "Os professores conseguem se adaptar aos alunos com mais dificuldade e fazem o que parece difícil ser aprendido de forma fácil. Hoje faço o curso de programação e estou criando os meus próprios projetos de game.",
    name: "João Victor Marini",
    role: "Aluno · Google",
  },
  {
    quote:
      "Recebi um atendimento excelente, com aulas personalizadas que atenderam exatamente às minhas necessidades. O ambiente é bonito, limpo e organizado, com equipamentos novos e modernos. Recomendo.",
    name: "Cleyton Silva",
    role: "Aluno · Google",
  },
  {
    quote:
      "Equipe muito atenciosa e prestativa, superou minhas expectativas. Profissionais capacitados e atendimento rápido. Ambiente limpo, organizado e muito agradável. Espaço super aconchegante e familiar.",
    name: "Johnata Carvalho",
    role: "Aluno · Google",
  },
];

// Link para as avaliações no Google. Troque pelo link direto do seu Perfil da
// Empresa (Google Meu Negócio → Avaliações → "Receber mais avaliações").
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Escola+Santos+Tech+Ribeir%C3%A3o+Preto";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex ${className}`} aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            O que as famílias e alunos <span className="text-gradient-hero">dizem</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border-2 border-amber-200 bg-amber-50 px-5 py-2">
            <Stars />
            <span className="font-black text-st-blue-dark">5,0</span>
            <span className="text-sm text-muted-foreground">· 329 avaliações no Google</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <Reveal key={r.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <Stars />
                  <Quote className="h-7 w-7 text-primary/15" />
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-black text-st-blue-dark">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-border px-7 py-3 text-sm font-bold text-st-blue-dark transition hover:border-primary/40 hover:bg-muted"
          >
            <Stars className="scale-90" /> Ver as 329 avaliações no Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
