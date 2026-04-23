import { Factory, ShieldCheck, Truck } from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const caseIcons = [Factory, Truck, ShieldCheck];

type CasesSectionProps = {
  content: (typeof copy)[Language]["cases"];
}

export function CasesSection({ content }: CasesSectionProps) {
  return (
    <section className="py-16 md:py-32 bg-secondary/35">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
                className="rounded-3xl border border-border bg-card p-6 sm:p-8"
              >
                <Icon className="size-6 text-accent" aria-hidden />
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
