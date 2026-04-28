import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { copy, type Language } from "@/lib/i18n";

type FaqSectionProps = {
  content: (typeof copy)[Language]["faq"];
}

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section className="py-16 md:py-32 bg-secondary/35">
      <div className="mx-auto max-w-4xl px-6">
        <div className="motion-reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {content.title}
          </h2>
        </div>

        <div className="motion-card motion-reveal-soft mt-10 rounded-3xl border border-border bg-card px-6 py-2 sm:px-8 hover:border-accent/35">
          <Accordion type="single" collapsible>
            {content.items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="py-6 text-base text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
