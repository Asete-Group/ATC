import {
  BadgeCheck,
  ClipboardList,
  Handshake,
  Ship,
} from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const stepIcons = [ClipboardList, Handshake, Ship];

type HowItWorksProps = {
  content: (typeof copy)[Language]["howItWorks"];
}

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="como-funciona" className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {content.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {content.description}
          </p>
        </div>

        <ol className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.steps.map((step, i) => {
            const Icon = stepIcons[i];

            return (
              <li
                key={step.title}
                className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/8 p-5 text-sm text-foreground">
          <BadgeCheck
            className="mt-0.5 size-4 shrink-0 text-accent"
            aria-hidden
          />
          <p className="leading-relaxed">
            {content.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
