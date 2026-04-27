import { copy, type Language } from "@/lib/i18n";

type AudienceSectionProps = {
  content: (typeof copy)[Language]["audience"];
}

export function AudienceSection({ content }: AudienceSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 bg-[linear-gradient(180deg,var(--background),hsl(from_var(--primary)_h_s_l_/_0.055)_42%,hsl(from_var(--accent)_h_s_l_/_0.04))]">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden />
      <div className="absolute left-8 top-20 h-40 w-40 rounded-full border border-primary/10 bg-primary/5 blur-2xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {content.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-primary/10 bg-background/90 p-6 shadow-sm shadow-primary/5"
            >
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-accent">
                {content.profileLabel}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
