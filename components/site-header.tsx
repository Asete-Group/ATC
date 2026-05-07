import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";
import { ArrowRight } from "lucide-react";
import { CommodityTicker } from "@/components/commodity-ticker";
import {
  copy,
  languages,
  localizedHref,
  localizedPath,
  type Language,
} from "@/lib/i18n";

type SiteHeaderProps = {
  lang: Language;
  content: (typeof copy)[Language]["header"];
};

export function SiteHeader({ lang, content }: SiteHeaderProps) {
  const resolveNavHref = (href: string) =>
    href.startsWith("/")
      ? localizedPath(lang, href)
      : localizedHref(lang, href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href={localizedHref(lang, "#inicio")}
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
          {/*<span className="hidden pl-5 sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {content.brandLabel}
          </span>*/}
        </a>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Menu principal"
        >
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={resolveNavHref(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border bg-background/80 p-1">
            {languages.map((option) => (
              <a
                key={option}
                href={localizedHref(option, "#inicio")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  option === lang
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                hrefLang={option}
              >
                {option === "pt" ? "PT" : option === "en" ? "EN" : "中文"}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="rounded-full px-5">
            <a
              href={buildWhatsAppUrl(content.ctaMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              {content.ctaLabel}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <details className="group md:hidden relative">
          <summary className="flex cursor-pointer list-none items-center rounded-md px-3 py-2 text-sm text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
            {content.menuLabel}
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-72 rounded-2xl border border-border/80 bg-background p-4 shadow-xl">
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              {content.nav.map((item) => (
                <a
                  key={item.href}
                  href={resolveNavHref(item.href)}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex items-center rounded-full border border-border bg-background/80 p-1">
              {languages.map((option) => (
                <a
                  key={option}
                  href={localizedHref(option, "#inicio")}
                  className={`flex-1 rounded-full px-3 py-2 text-center text-xs font-medium transition-colors ${
                    option === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  hrefLang={option}
                >
                  {option === "pt" ? "PT" : option === "en" ? "EN" : "中文"}
                </a>
              ))}
            </div>
            <Button asChild size="sm" className="mt-4 w-full rounded-full">
              <a
                href={buildWhatsAppUrl(content.ctaMessage)}
                target="_blank"
                rel="noreferrer"
              >
                {content.ctaLabel}
              </a>
            </Button>
          </div>
        </details>
      </div>
      <CommodityTicker lang={lang} />
    </header>
  );
}
