/**
 * Floating WhatsApp button.
 *
 * Botão fixo no canto inferior direito, presente em todas as páginas.
 * Mount em __root.tsx (não usar em página individual).
 *
 * Pulse: 2 anéis com delay alternado pra dar continuidade fluida.
 * Animation definida em styles.css (.animate-pulse-ring).
 */

import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";

// Cor oficial do WhatsApp (não o verde Santos Tech) — o usuário reconhece o brand.
const WHATSAPP_GREEN = "#25D366";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL.fab}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      title="Fale com a Santos Tech no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      {/* Pulse ring 1 */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: WHATSAPP_GREEN }}
        aria-hidden
      />
      {/* Pulse ring 2 (delay pra continuidade) */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full animate-pulse-ring [animation-delay:1s]"
        style={{ background: WHATSAPP_GREEN }}
        aria-hidden
      />

      {/* Botão principal */}
      <span
        className="relative flex h-full w-full items-center justify-center rounded-full text-white shadow-xl transition-transform duration-200 group-hover:scale-110"
        style={{ background: WHATSAPP_GREEN }}
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
