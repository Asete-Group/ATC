import { Container, Search, Users, Globe2 } from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const serviceIcons = [Container, Search, Users, Globe2];

type ServicesSectionProps = {
  content: (typeof copy)[Language]["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden py-16 md:py-32 bg-[linear-gradient(135deg,hsl(from_var(--primary)_h_s_l_/_0.06),var(--secondary)_55%,hsl(from_var(--accent)_h_s_l_/_0.055))]"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden />
      <div className="absolute -left-24 bottom-10 h-64 w-64 rounded-full border border-primary/10 bg-primary/5 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
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

        <div className="mt-10 sm:mt-14 grid gap-px bg-primary/12 rounded-2xl overflow-hidden md:grid-cols-2 border border-primary/10 shadow-sm shadow-primary/5">
          {content.items.map((item, index) => {
            const Icon = serviceIcons[index];

            return (
              <div
                key={item.title}
                className="bg-background/88 p-6 sm:p-8 md:p-10 flex flex-col gap-4 transition-colors hover:bg-background"
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
