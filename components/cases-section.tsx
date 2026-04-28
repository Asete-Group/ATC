import { Factory, ShieldCheck, Truck } from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const caseIcons = [Factory, Truck, ShieldCheck];

type CasesSectionProps = {
  content: (typeof copy)[Language]["cases"];
};

export function CasesSection({ content }: CasesSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 bg-primary/5">
      <div
        className="absolute right-0 top-1/4 h-36 w-1 bg-primary/55"
        aria-hidden
      />
      <div
        className="absolute -right-20 bottom-12 h-72 w-72 rounded-full border border-accent/15 bg-accent/8 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="motion-reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              {content.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              {content.title}
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = caseIcons[index];

            return (
              <article
                key={item.title}
                className="motion-card motion-reveal-soft rounded-3xl border border-primary/10 bg-background/90 p-6 sm:p-8 shadow-sm shadow-primary/5 hover:border-accent/35"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <Icon className="motion-icon size-6 text-accent" aria-hidden />
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
