import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Instagram, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { DecorativeElements } from "@/components/decorative-elements";

export const Route = createFileRoute("/contato")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato — Santos Tech" },
      { name: "description", content: "Fale com a Santos Tech: WhatsApp, e-mail e endereço em Ribeirão Preto. Agende uma aula experimental gratuita." },
      { property: "og:title", content: "Contato — Santos Tech" },
      { property: "og:description", content: "Agende uma aula experimental gratuita." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

const WHATSAPP = WHATSAPP_URL.courses;

function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f1fa] via-[#f3f8fc] to-white py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(24,122,191,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#187ABF]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-[#0DB88F]/20 blur-3xl animate-blob [animation-delay:3s]" />
        <DecorativeElements variant="games" color="#187ABF" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Fale com a gente</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Vamos <span className="text-primary">conversar</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Tire dúvidas, conheça as turmas e agende uma aula experimental gratuita.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-black">Informações de contato</h2>
            <div className="mt-8 space-y-6">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <WhatsAppIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                  <p className="mt-1 text-lg font-bold">(16) 99257-8710</p>
                  <p className="mt-1 text-sm text-muted-foreground">Resposta rápida — toque para abrir o chat.</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Endereço</p>
                  <p className="mt-1 text-lg font-bold">Av. Nove de Julho, 1992</p>
                  <p className="text-sm text-muted-foreground">Jardim América — Ribeirão Preto, SP</p>
                </div>
              </div>

              <a href="mailto:ceo.santosgames@gmail.com" className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">E-mail</p>
                  <p className="mt-1 text-lg font-bold">ceo.santosgames@gmail.com</p>
                </div>
              </a>

              <a href="https://instagram.com/escolasantostech" target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Instagram</p>
                  <p className="mt-1 text-lg font-bold">@escolasantostech</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Horários</p>
                  <p className="mt-1 text-lg font-bold">Seg a Sex · 9h às 21h</p>
                  <p className="text-sm text-muted-foreground">Sábados · 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-primary p-10 text-primary-foreground shadow-xl">
              <h3 className="text-2xl font-black">Aula experimental gratuita</h3>
              <p className="mt-3 text-primary-foreground/90">
                Conheça a escola, o método e os professores antes de matricular. Sem compromisso.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition hover:bg-background/90">
                <WhatsAppIcon className="h-4 w-4" /> Agendar agora
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Localização Santos Tech"
                src="https://www.google.com/maps?q=Av.+Nove+de+Julho%2C+1992+-+Jardim+Am%C3%A9rica%2C+Ribeir%C3%A3o+Preto+-+SP&output=embed"
                className="h-80 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
