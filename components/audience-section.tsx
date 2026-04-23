import { copy, type Language } from "@/lib/i18n";

type AudienceSectionProps = {
  content: (typeof copy)[Language]["audience"];
}

export function AudienceSection({ content }: AudienceSectionProps) {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
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
              className="rounded-3xl border border-border bg-card p-6"
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
