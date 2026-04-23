import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";

export function CtaSection() {
  return (
    <section id="contato" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner.png-js6JePtkQQ59cB8ihIwJCdTVXVjGrE.jpeg"
          alt=""
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
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
          Pronto para importar com segurança e escala?
        </h2>
        <p className="mt-6 text-white/75 max-w-xl mx-auto leading-relaxed">
          Fale com um especialista da ATC China Brasil e receba um diagnóstico
          gratuito do seu projeto.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full h-12 px-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a
              href={buildWhatsAppUrl(
                "Olá, quero solicitar uma cotação internacional.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              Solicitar cotação internacional
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full h-12 px-8 bg-white text-foreground hover:bg-white/90"
          >
            <a
              href={buildWhatsAppUrl(
                "Olá, quero falar com um especialista da ATC.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Falar com especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
