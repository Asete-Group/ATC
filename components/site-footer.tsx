import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <Image
            src="/atc-icon-black.svg"
            alt="ATC China Brasil"
            width={1205}
            height={375}
            className="h-7 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Soluções em importação, exportação e sourcing internacional.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
          <a
            href="mailto:contato@atcchinabrasil.com"
            className="hover:text-foreground transition-colors"
          >
            contato@atcchinabrasil.com
          </a>
          <a
            href="https://wa.me/5547997270458"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
          <span className="mt-2 text-xs">
            © {new Date().getFullYear()} ATC China Brasil. Todos os direitos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
