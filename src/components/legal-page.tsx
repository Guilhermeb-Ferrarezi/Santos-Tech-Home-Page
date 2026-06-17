import type { ReactNode } from "react";

// LegalPage — layout enxuto e legível para documentos jurídicos (Política de
// Privacidade, Termos de Uso). O header/footer do site vêm do __root.
export function LegalPage({
  title,
  subtitle,
  updatedAt,
  children,
}: {
  title: string;
  subtitle?: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: {updatedAt}
        </p>
      </header>

      <div
        className={
          "space-y-4 text-[15px] leading-relaxed text-muted-foreground " +
          "[&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground " +
          "[&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-foreground " +
          "[&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 " +
          "[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 " +
          "[&_strong]:font-semibold [&_strong]:text-foreground"
        }
      >
        {children}
      </div>
    </main>
  );
}
