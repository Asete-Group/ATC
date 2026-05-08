import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";
import { copy, type Language } from "@/lib/i18n";

type CtaSectionProps = {
  content: (typeof copy)[Language]["cta"];
};

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section id="contato" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cta-section/banner-atc.webp"
          alt=""
          loading="eager"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,24,48,0.8) 0%, rgba(8,24,48,0.9) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 md:py-32 text-center">
        <h2 className="motion-reveal text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
          {content.title}
        </h2>
        <p className="motion-reveal mt-6 text-white/75 max-w-xl mx-auto leading-relaxed [animation-delay:120ms]">
          {content.description}
        </p>

        <div className="motion-reveal mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center [animation-delay:220ms]">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full h-12 px-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a
              href={buildWhatsAppUrl(content.quoteMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              {content.quoteLabel}
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full h-12 px-8 bg-white text-foreground hover:bg-white/90"
          >
            <a
              href={buildWhatsAppUrl(content.specialistMessage)}
              target="_blank"
              rel="noreferrer"
            >
              {content.specialistLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
