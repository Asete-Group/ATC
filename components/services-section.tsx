import { Container, Search, Users, Globe2 } from "lucide-react";
import Image from "next/image";
import { copy, type Language } from "@/lib/i18n";

const serviceIcons = [Container, Search, Users, Globe2];

type ServicesSectionProps = {
  content: (typeof copy)[Language]["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-32"
    >
      <Image
        src="/shanghai-port.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover"
        loading="eager"
        sizes="100vw"
      />
      <div className="absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,hsl(from_var(--primary)_h_s_l_/_0.78),hsl(from_var(--primary)_h_s_l_/_0.32)_50%,hsl(from_var(--primary)_h_s_l_/_0.7)),linear-gradient(0deg,hsl(from_var(--primary)_h_s_l_/_0.68),transparent_45%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/80 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="motion-reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {content.eyebrow}
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-primary-foreground/78">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = serviceIcons[index];

            return (
              <div
                key={item.title}
                className="motion-card motion-reveal-soft flex min-h-58 flex-col rounded-lg border border-white/16 bg-primary/40 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm hover:border-accent/45 hover:bg-primary/32 sm:p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div>
                  <span className="inline-flex size-11 items-center justify-center rounded-lg border border-white/12 bg-primary-foreground/10">
                    <Icon
                      className="motion-icon size-5 text-accent"
                      aria-hidden
                    />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-primary-foreground/76">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
