import { ClipboardList, Handshake, Ship } from "lucide-react";
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

        <div className="mt-10 sm:mt-14">
          <div className="motion-reveal-soft relative overflow-hidden rounded-xl border border-primary/10 bg-primary shadow-2xl shadow-primary/10">
            <video
              className="aspect-[21/9] min-h-72 w-full object-cover sm:min-h-80 lg:min-h-0"
              src="/how-it-works/video-ship.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,hsl(from_var(--primary)_h_s_l/0.82),hsl(from_var(--primary)_h_s_l/0.42)_48%,transparent),linear-gradient(0deg,hsl(from_var(--primary)_h_s_l/0.38),transparent_58%)]"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 max-w-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-white text-balance sm:text-3xl">
                {content.highlightTitle}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-white/78">
                {content.highlight}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.highlightMetrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-md border border-white/14 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {metric}
                  </span>
                ))}
              </div>
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
                  <div className="absolute bottom-4 left-4">
                    <div className="motion-icon inline-flex size-11 items-center justify-center rounded-xl border border-white/18 bg-primary/70 text-white backdrop-blur-sm">
                      <Icon className="size-5" aria-hidden />
                    </div>
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
