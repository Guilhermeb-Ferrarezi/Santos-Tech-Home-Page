/**
 * WhatsApp — fonte única de URLs e mensagens.
 *
 * Toda chamada wa.me/* no projeto deve importar daqui.
 * Não hardcodar número ou mensagens em outros arquivos.
 *
 * Pra adicionar um contexto novo (ex.: matrícula, suporte técnico):
 *   1. Adicionar entrada em WHATSAPP_URL com a mensagem desejada
 *   2. Importar e usar
 */

const PHONE = "5516992578710";

function build(text: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

/** Número formatado pra display em texto (ex: footer, página /contato). */
export const WHATSAPP_PHONE_DISPLAY = "(16) 99257-8710";

/** Número raw sem formatação — caso precise direto. */
export const WHATSAPP_NUMBER = PHONE;

/** URLs prontas pros contextos do site. */
export const WHATSAPP_URL = {
  /**
   * Footer — quando o usuário clica no número exibido em texto.
   * Mensagem: "Olá, quero mais informações sobre os cursos"
   */
  footer: build("Olá, quero mais informações sobre os cursos"),

  /**
   * Padrão pra todos os CTAs do site (matricular, agendar, "falar no WhatsApp").
   * Mensagem: "Olá, quero saber mais sobre os cursos da Santos Tech"
   */
  courses: build("Olá, quero saber mais sobre os cursos da Santos Tech"),

  /**
   * Botão flutuante (FAB) — primeiro contato.
   * Mensagem: "Olá, quero conhecer a Santos Tech."
   */
  fab: build("Olá, quero conhecer a Santos Tech."),
} as const;
