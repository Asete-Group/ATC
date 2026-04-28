import { BriefcaseBusiness, PackageCheck } from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const modelIcons = [BriefcaseBusiness, PackageCheck];

type OperationModelsSectionProps = {
  content: (typeof copy)[Language]["operationModels"];
}

export function OperationModelsSection({
  content,
}: OperationModelsSectionProps) {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="motion-reveal max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {content.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {content.items.map((item, index) => {
            const Icon = modelIcons[index];

            return (
              <article
                key={item.title}
                className="motion-card motion-reveal-soft rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-accent/35"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="motion-icon inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-accent">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <p className="mt-6 rounded-2xl bg-secondary/70 px-4 py-3 text-sm font-medium leading-relaxed text-foreground">
                  {item.highlight}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
