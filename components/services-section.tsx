import { Container, Search, Users, Globe2 } from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const serviceIcons = [Container, Search, Users, Globe2];

type ServicesSectionProps = {
  content: (typeof copy)[Language]["services"];
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section id="servicos" className="py-16 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              {content.eyebrow}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              {content.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 border border-border">
          {content.items.map((item, index) => {
            const Icon = serviceIcons[index];

            return (
              <div
                key={item.title}
                className="bg-card p-6 sm:p-8 md:p-10 flex flex-col gap-4 transition-colors hover:bg-background"
              >
                <Icon className="size-6 text-accent" aria-hidden />
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
