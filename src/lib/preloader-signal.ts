/**
 * Sinal de "o pré-loader saiu da frente".
 *
 * O <Preloader /> da home cobre a tela inteira (z-200) por ~1,4s. Quem aparece
 * por tempo — hoje o banner de cookies — precisa esperar, senão surge por baixo
 * do overlay e já está lá, sem animação, quando ele some.
 *
 * Fica num módulo próprio (e não dentro de `preloader.tsx`) para o arquivo do
 * componente continuar exportando só componentes — regra do react-refresh.
 */

const PRELOADER_DONE_EVENT = "st:preloader-done";

/** Marcado no mount do <Preloader />, limpo quando ele termina. */
let active = false;

export function markPreloaderActive() {
  active = true;
}

export function markPreloaderDone() {
  if (!active) return;
  active = false;
  window.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
}

/**
 * Chama `callback` assim que a tela estiver livre — na hora, se não houver
 * pré-loader na página. Devolve a função de limpeza.
 */
export function whenPreloaderDone(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  if (!active) {
    callback();
    return () => {};
  }
  window.addEventListener(PRELOADER_DONE_EVENT, callback, { once: true });
  return () => window.removeEventListener(PRELOADER_DONE_EVENT, callback);
}
