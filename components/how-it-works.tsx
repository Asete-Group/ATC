import { BadgeCheck, ClipboardList, Handshake, Ship } from "lucide-react";
import Image from "next/image";
import { copy, type Language } from "@/lib/i18n";

const stepIcons = [ClipboardList, Handshake, Ship];
const stepImages = [
  "/how-it-works/estrategico-1.webp",
  "/how-it-works/validacao-1.webp",
  "/how-it-works/entrega-1.webp",
];

type HowItWorksProps = {
  content: (typeof copy)[Language]["howItWorks"];
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden py-16 md:py-32 bg-[linear-gradient(180deg,hsl(from_var(--primary)_h_s_l/0.045),hsl(from_var(--accent)_h_s_l/0.035)_48%,var(--background))]"
    >
      <div
        className="absolute right-0 top-10 h-56 w-56 rounded-full border border-primary/10 bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="motion-reveal max-w-2xl">
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

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[1.55fr_0.85fr] lg:items-stretch">
          <div className="motion-reveal-soft relative overflow-hidden rounded-xl border border-primary/10 bg-primary shadow-2xl shadow-primary/10">
            <video
              className="aspect-video h-full w-full object-cover"
              src="/how-it-works/video-ship.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent"
              aria-hidden
            />
          </div>

          <div className="motion-reveal-soft flex flex-col justify-center rounded-xl border border-primary/10 bg-background/90 p-6 shadow-sm shadow-primary/5 sm:p-8 lg:p-10">
            <div>
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <BadgeCheck className="size-5" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                {content.highlightTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.highlight}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-primary/10 pt-5">
              {content.highlightMetrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-md bg-primary/5 px-3 py-2 text-center text-xs font-medium text-primary"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ol className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.steps.map((step, i) => {
            const Icon = stepIcons[i];

            return (
              <li
                key={step.title}
                className="motion-card motion-reveal-soft group relative overflow-hidden rounded-xl border border-primary/10 bg-background shadow-sm shadow-primary/5 hover:border-accent/40"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary/8">
                  <Image
                    src={stepImages[i]}
                    alt=""
                    loading="eager"
                    fill
                    aria-hidden
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/5 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="motion-icon inline-flex size-11 items-center justify-center rounded-xl border border-white/18 bg-primary/70 text-white backdrop-blur-sm">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <span className="font-mono text-sm text-white/80">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
