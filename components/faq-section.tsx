import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A ATC atua apenas com importação da China?",
    answer:
      "Não. A operação tem forte presença na China, mas também estruturamos exportações brasileiras e intermediações internacionais em diferentes mercados.",
  },
  {
    question: "Vocês podem operar desde a busca do fornecedor até a entrega final?",
    answer:
      "Sim. No modelo chave na mão, conduzimos planejamento, sourcing, validação, negociação, produção, qualidade, logística, desembaraço e entrega.",
  },
  {
    question: "A empresa atende projetos industriais e operações complexas?",
    answer:
      "Sim. A atuação inclui operações industriais, commodities e projetos com exigência técnica, documental e contratual mais elevada.",
  },
  {
    question: "É possível contratar apenas consultoria ou intermediação?",
    answer:
      "Sim. Também atuamos em formato consultivo e de intermediação para empresas que já possuem equipe interna e precisam de suporte estratégico na origem.",
  },
  {
    question: "Como iniciar uma análise da minha operação?",
    answer:
      "O primeiro passo é falar com a equipe pelo WhatsApp para apresentar produto, volume, objetivo e estágio atual da operação. A partir disso, definimos o melhor modelo de atuação.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-32 bg-secondary/35">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Respostas objetivas para decisões internacionais mais seguras
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card px-6 py-2 sm:px-8">
          <Accordion type="single" collapsible>
            {faqs.map((item) => (
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
