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
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-16">
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
              "linear-gradient(180deg, rgba(8,24,48,0.55) 0%, rgba(8,24,48,0.65) 55%, rgba(8,24,48,0.85) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-14 pb-20 sm:pt-24 sm:pb-28 md:pt-36 md:pb-40">
        <div className="max-w-3xl">
          <h1 className="motion-reveal mt-4 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white text-balance">
            {content.title}
          </h1>

          <p className="motion-reveal mt-5 text-sm sm:text-base md:text-lg text-white/75 max-w-xl leading-relaxed text-pretty [animation-delay:120ms]">
            {content.description}
          </p>

          <div className="motion-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 [animation-delay:220ms]">
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

          <dl className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
            {content.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="motion-reveal-soft border-l border-white/20 pl-3 sm:pl-4"
                style={{ animationDelay: `${320 + index * 90}ms` }}
              >
                <dt className="font-mono text-base sm:text-xl md:text-2xl font-semibold text-white">
                  {stat.value}
                </dt>
                <dd className="text-[10px] sm:text-xs text-white/60 mt-1 leading-snug">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
