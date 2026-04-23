import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";
import { ArrowRight } from "lucide-react";

const nav = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#autoridade", label: "Resultados" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center"
          aria-label="ATC China Brasil"
        >
          <Image
            src="/atc-icon-black.svg"
            alt="ATC China Brasil"
            width={1205}
            height={375}
            priority
            className="h-6 w-auto"
          />
          <span className="hidden pl-5 sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">
            China Brasil
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Menu principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="sm" className="rounded-full px-5">
            <a
              href={buildWhatsAppUrl(
                "Olá, quero solicitar uma cotação internacional.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              Falar com especialista
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <details className="group md:hidden relative">
          <summary className="flex cursor-pointer list-none items-center rounded-md px-3 py-2 text-sm text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-72 rounded-2xl border border-border/80 bg-background p-4 shadow-xl">
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button asChild size="sm" className="mt-4 w-full rounded-full">
              <a
                href={buildWhatsAppUrl(
                  "Olá, quero solicitar uma cotação internacional.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Falar com especialista
              </a>
            </Button>
          </div>
        </details>
      </div>
    </header>
  );
}
