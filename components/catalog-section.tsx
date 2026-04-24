import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Language } from "@/lib/i18n";
import { productCatalog } from "@/lib/product-catalog";

type CatalogSectionProps = {
  lang: Language;
};

export function CatalogSection({ lang }: CatalogSectionProps) {
  const content = productCatalog[lang];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(90,209,255,0.2),_transparent_28%),linear-gradient(180deg,_rgba(8,24,48,0.04),_transparent_18%),linear-gradient(135deg,_#f8fbff_0%,_#eef4fa_100%)]">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Button asChild variant="outline" className="rounded-full bg-white/80 backdrop-blur">
          <a href={`/?lang=${lang}#inicio`} className="inline-flex items-center gap-2">
            <ArrowLeft className="size-4" />
            {content.backLabel}
          </a>
        </Button>

        <div className="mt-8 max-w-3xl">
          <span className="inline-flex rounded-full border border-accent/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {content.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {content.categories.map((category) => (
            <section
              key={category.id}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_-48px_rgba(8,24,48,0.45)] backdrop-blur sm:p-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {category.products.map((product) => (
                  <article
                    key={product.title}
                    className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-background shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-foreground">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
