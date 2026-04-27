import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { copy, type Language } from "@/lib/i18n";

const authorityImages = [
  "/autoridade/aut_1.jpeg",
  "/autoridade/aut_2.jpeg",
  "/autoridade/aut_3.jpeg",
  "/autoridade/aut_4.jpeg",
  "/autoridade/aut_5.jpeg",
  "/autoridade/aut_6.jpeg",
  "/autoridade/aut_7.jpeg",
  "/autoridade/aut_8.jpeg",
  "/autoridade/aut_9.jpeg",
] as const;

type AuthorityMediaSectionProps = {
  content: (typeof copy)[Language]["authorityMedia"];
};

export function AuthorityMediaSection({ content }: AuthorityMediaSectionProps) {
  const marqueeImages = [...authorityImages, ...authorityImages];

  return (
    <section
      id="autoridade"
      className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(from_var(--accent)_h_s_l_/_0.18),transparent_32%),linear-gradient(180deg,transparent,hsl(from_var(--accent)_h_s_l_/_0.07))]"
        aria-hidden
      />
      <div
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl shadow-black/20">
            <video
              className="aspect-video w-full object-cover"
              src="/video/video_container.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
              <PlayCircle className="size-3.5 text-accent" aria-hidden />
              {content.videoLabel}
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-mono">
              {content.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/72">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] sm:mt-16">
        <div className="media-marquee flex w-max gap-4 pr-4">
          {marqueeImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-44 w-72 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/8 sm:h-56 sm:w-88"
            >
              <Image
                src={src}
                alt={content.imageAlt}
                fill
                sizes="(min-width: 640px) 352px, 288px"
                className="object-cover"
              />
              <div
                className="absolute inset-0 ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
