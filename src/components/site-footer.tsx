import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.svg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Santos Tech" className="h-12 w-12" />
            <span className="text-lg font-bold">
              SANTOS <span className="text-primary">TECH</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Centro presencial de aprendizagem de programação para crianças e
            jovens em Ribeirão Preto. CREATE, JR, CAMPS e ACADEMIES —
            transformando tempo de tela em tempo de habilidade.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Início</Link></li>
            <li><Link to="/cursos" className="hover:text-primary">Cursos</Link></li>
            <li><Link to="/sobre" className="hover:text-primary">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto, SP</span>
            </li>
            <li>
              <a href="https://wa.me/5516992578710" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
                <MessageCircle className="h-4 w-4 text-primary" /> (16) 99257-8710
              </a>
            </li>
            <li>
              <a href="https://instagram.com/santostech" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Instagram className="h-4 w-4 text-primary" /> @santostech
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>contato@santos-tech.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Santos Tech. Todos os direitos reservados.</p>
          <p>Escola de programação · Ribeirão Preto</p>
        </div>
      </div>
    </footer>
  );
}
