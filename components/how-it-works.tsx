import { BadgeCheck, ClipboardList, Handshake, Ship } from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const stepIcons = [ClipboardList, Handshake, Ship];

type HowItWorksProps = {
  content: (typeof copy)[Language]["howItWorks"];
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden py-16 md:py-32 bg-[linear-gradient(180deg,hsl(from_var(--primary)_h_s_l_/_0.045),hsl(from_var(--accent)_h_s_l_/_0.035)_48%,var(--background))]"
    >
      <div
        className="absolute right-0 top-10 h-56 w-56 rounded-full border border-primary/10 bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
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
                className="group relative rounded-2xl border border-primary/10 bg-background/90 p-6 sm:p-8 shadow-sm shadow-primary/5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
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
      </div>
    </section>
  );
}
