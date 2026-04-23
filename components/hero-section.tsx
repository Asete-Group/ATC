import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner-atc.png"
          alt=""
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
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white text-balance">
            Soluções em importação, exportação e sourcing internacional
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/75 max-w-xl leading-relaxed text-pretty">
            Conectamos sua empresa diretamente às melhores fábricas do mundo,
            com segurança, estratégia e presença local na China.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 h-12 bg-white text-foreground hover:bg-white/90"
            >
              <a
                href={buildWhatsAppUrl(
                  "Olá, quero falar com um especialista da ATC.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                Falar com especialista
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-6 h-12 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#como-funciona">Como funciona</a>
            </Button>
          </div>

          <dl className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
            {[
              { v: "+1M", l: "toneladas exportadas" },
              { v: "+3.000", l: "clientes atendidos" },
              { v: "+8", l: "países com operações" },
            ].map((s) => (
              <div key={s.l} className="border-l border-white/20 pl-3 sm:pl-4">
                <dt className="font-mono text-base sm:text-xl md:text-2xl font-semibold text-white">
                  {s.v}
                </dt>
                <dd className="text-[10px] sm:text-xs text-white/60 mt-1 leading-snug">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
