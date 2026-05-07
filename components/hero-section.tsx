import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";
import { copy, localizedHref, type Language } from "@/lib/i18n";

type HeroSectionProps = {
  lang: Language;
  content: (typeof copy)[Language]["hero"];
};

export function HeroSection({ lang, content }: HeroSectionProps) {
  const imageSlots: Record<Language, string[]> = {
    pt: ["Sourcing", "Trading", "Inteligência"],
    en: ["Sourcing", "Trading", "Intelligence"],
    zh: ["采购", "贸易", "情报"],
  };

  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-[5.25rem] md:pt-[6.75rem]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner-atc.webp"
          alt=""
          loading="eager"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,22,37,0.92) 0%, rgba(8,24,48,0.64) 18%, rgba(8,24,48,0.65) 55%, rgba(8,24,48,0.85) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="motion-reveal mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-balance">
            {content.title}
          </h1>

          <p className="motion-reveal mt-5 text-base md:text-xl text-white/82 max-w-3xl leading-relaxed text-pretty [animation-delay:120ms]">
            {content.description}
          </p>

          <div className="motion-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 [animation-delay:260ms]">
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 h-12 bg-white text-foreground hover:bg-white/90"
            >
              <a
                href={buildWhatsAppUrl(content.primaryCtaMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                {content.primaryCtaLabel}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-6 h-12 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={localizedHref(lang, "#como-funciona")}>
                {content.secondaryCtaLabel}
              </a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-4xl gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
            {content.stats.map((stat, index) => (
              <article
                key={stat.label}
                className="motion-reveal-soft group relative min-h-36 overflow-hidden rounded-xl border border-white/14 bg-white/8 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:min-h-44"
                style={{ animationDelay: `${360 + index * 90}ms` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_40%),linear-gradient(180deg,rgba(7,22,37,0.08),rgba(7,22,37,0.84))]" />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    {imageSlots[lang][index]}
                  </span>
                  <span className="h-px flex-1 bg-white/14" aria-hidden />
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-mono text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-white/62">
                    {stat.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
