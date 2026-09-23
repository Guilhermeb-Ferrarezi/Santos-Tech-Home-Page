/** Número com dois dígitos ("01", "02"…), usado nos rótulos de módulo e perfil. */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}
