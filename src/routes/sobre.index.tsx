import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Users,
  Cpu,
  Shield,
  Gift,
  Sparkles,
  Star,
  MapPin,
  ArrowRight,
  Gamepad2,
  Monitor,
  Trophy,
  Heart,
  Instagram,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { DecorativeElements } from "@/components/decorative-elements";
import { Img } from "@/components/img";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, buildBreadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/sobre/")({
  component: SobreNosPage,
  head: () =>
    pageMeta({
      title:
        "Sobre a Santos Tech — Escola Premium de Tecnologia para Crianças e Adolescentes",
      description:
        "A Santos Tech é uma escola presencial premium de tecnologia para crianças e adolescentes (5 a 15 anos) no Jardim América, Ribeirão Preto. Turmas de até 10 alunos, equipamentos de ponta e um método que forma criadores — não só usuários da tecnologia.",
      path: "/sobre",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const PILARES = [
  { icon: Users, t: "Turmas de até 10", d: "Atenção individual de verdade — não sala lotada." },
  { icon: Cpu, t: "Equipamentos de ponta", d: "Computadores potentes, impressora 3D e ferramentas profissionais." },
  { icon: Shield, t: "100% presencial", d: "Ambiente seguro e preparado, com professor ao lado em cada passo." },
  { icon: Gift, t: "Leva o que cria", d: "Jogos, projetos e objetos impressos em 3D saem da escola pra casa." },
];

const VALORES = [
  { icon: Trophy, t: "Excelência", d: "5,0 no Google e mais de 329 avaliações de famílias da região." },
  { icon: Users, t: "Atenção individual", d: "Turmas de até 10 — o professor sabe o nome e o ritmo de cada criança." },
  { icon: Sparkles, t: "Resultado que se vê", d: "Seu filho leva pra casa o que cria, e você acompanha cada evolução." },
  { icon: Heart, t: "Presencial de verdade", d: "Criança aprende com presença, atenção e orientação — não atrás de uma tela." },
];

function SobreNosPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
        ])}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />
        <DecorativeElements variant="code" color="#187ABF" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Sobre Nós</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Uma escola feita pra seu filho{" "}
              <span className="text-gradient-hero">criar a tecnologia</span>
            </h1>
            <p className="mx-auto mt-5 text-lg text-muted-foreground">
              Somos uma escola presencial premium de tecnologia para crianças e
              adolescentes em Ribeirão Preto. Aqui seu filho não aprende só a usar
              a tecnologia — aprende a criar: jogos, projetos em 3D, programação e
              o domínio real do computador.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Img name="marina-aula" alt="Aula presencial na Santos Tech" className="rounded-3xl shadow-xl" />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Quem somos</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Tecnologia de verdade, do jeito que{" "}
              <span className="text-gradient-santos">criança aprende melhor</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              A Santos Tech fica no <strong>Jardim América, em Ribeirão Preto</strong>, e atende
              crianças e adolescentes de <strong>5 a 15 anos</strong>. Trabalhamos com dois
              caminhos — <strong>Tecnologia</strong> (criação de jogos, 3D e programação) e{" "}
              <strong>Informática</strong> (o domínio real do computador, do Office à IA) — em
              turmas de até 10 alunos.
            </p>
            <p className="mt-4 text-muted-foreground">
              A Santos Tech nasceu de uma ideia simples: toda criança merece aprender a{" "}
              <strong>criar</strong> a tecnologia, e não só consumir. Por isso somos 100%
              presenciais, com equipamentos de ponta e professores que dominam de verdade o que
              ensinam.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO — fundo colorido #1 */}
      <section
        className="relative isolate overflow-hidden py-24 text-white"
        style={{ background: "linear-gradient(135deg, #04325A 0%, #021F3A 100%)" }}
      >
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#187ABF]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0DB88F]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5AB0F0]">Nosso jeito</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              "Onde seu filho aprende a criar a tecnologia — não só a usar."
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Não é um curso de computador qualquer. É um lugar pensado pra cada criança sair
              com algo que ela mesma construiu — e com habilidades que valem pra vida toda.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 text-left backdrop-blur">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#5AB0F0]">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-black">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-white/75">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ENSINAMOS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">O que ensinamos</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Dois caminhos, do iniciante ao avançado
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada eixo tem turmas separadas por idade — Júnior (5 a 9 anos) e Create (10 a 15
              anos) — pra cada criança aprender no ritmo certo.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border-2 border-primary/20 bg-card p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl text-white" style={{ background: "#187ABF" }}>
                  <Gamepad2 className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-2xl font-black text-st-blue-dark">Tecnologia</h3>
                <p className="mt-3 text-muted-foreground">
                  Criação de jogos, modelagem e impressão 3D, e programação de verdade — do
                  Minecraft e Roblox ao Python e à realidade virtual.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border-2 bg-card p-8" style={{ borderColor: "#1C829933" }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-xl text-white" style={{ background: "#1C8299" }}>
                  <Monitor className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-2xl font-black" style={{ color: "#0f5a6b" }}>Informática</h3>
                <p className="mt-3 text-muted-foreground">
                  O domínio real do computador: trabalhos, apresentações, Excel que calcula
                  sozinho e os primeiros passos com inteligência artificial.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-primary hover:underline"
            >
              Ver todos os programas <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NÚMEROS — fundo colorido #2 */}
      <section
        className="relative isolate overflow-hidden py-20 text-white"
        style={{ background: "linear-gradient(135deg, #187ABF 0%, #04325A 100%)" }}
      >
        <div className="absolute inset-0 dotted-bg opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              A confiança de quem já faz parte
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { icon: Star, n: "5,0", l: "nota no Google" },
              { icon: Trophy, n: "329", l: "avaliações 5★" },
              { icon: Instagram, n: "+14 mil", l: "no Instagram" },
              { icon: Users, n: "Até 10", l: "alunos por turma" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div className="flex flex-col items-center">
                  <s.icon className="h-8 w-8 text-[#7CC4F0]" />
                  <p className="mt-3 text-4xl font-black sm:text-5xl">{s.n}</p>
                  <p className="mt-1 text-sm text-white/80">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Nossos valores</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              O que orienta cada decisão da escola
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="h-full rounded-xl border-2 border-primary/15 bg-card p-7 transition hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO + CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-program-create px-8 py-14 text-center text-white shadow-xl sm:px-16">
              <div className="pointer-events-none absolute inset-0 dotted-bg opacity-20" />
              <div className="relative">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Venha conhecer a Santos Tech</h2>
                <p className="mx-auto mt-4 max-w-xl text-white/90">
                  Agende uma visita ou uma aula experimental gratuita pra ver o espaço, conhecer
                  a equipe e descobrir o programa ideal pro seu filho. Sem compromisso.
                </p>
                <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/85">
                  <MapPin className="h-4 w-4" /> Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-st-green px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.03] glow-green"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Agendar visita
                  </a>
                  <Link
                    to="/sobre/visao"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Conheça nossa visão <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
