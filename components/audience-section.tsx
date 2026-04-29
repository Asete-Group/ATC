import Image from "next/image";
import { copy, type Language } from "@/lib/i18n";

const audienceImages = [
  "/audience/industry.webp",
  "/audience/distributors.webp",
  "/audience/importers.webp",
];

type AudienceSectionProps = {
  content: (typeof copy)[Language]["audience"];
}

export function AudienceSection({ content }: AudienceSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 bg-[linear-gradient(180deg,var(--background),hsl(from_var(--primary)_h_s_l/0.055)_42%,hsl(from_var(--accent)_h_s_l/0.04))]">
      <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" aria-hidden />
      <div className="absolute left-8 top-20 h-40 w-40 rounded-full border border-primary/10 bg-primary/5 blur-2xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="motion-reveal max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {content.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className="motion-card motion-reveal-soft group overflow-hidden rounded-3xl border border-primary/10 bg-background/90 shadow-sm shadow-primary/5 hover:border-accent/35"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary/8">
                <Image
                  src={audienceImages[index]}
                  alt=""
                  fill
                  aria-hidden
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/45 via-primary/5 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-accent">
                  {content.profileLabel}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
