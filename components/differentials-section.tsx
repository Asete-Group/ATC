import { Check } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Presença internacional real",
    desc: "Equipe e operações entre China, Brasil e hubs estratégicos internacionais.",
  },
  {
    title: "Acesso direto à origem",
    desc: "Relacionamento com fábricas e negociação sem intermediários.",
  },
  {
    title: "Segurança jurídica internacional",
    desc: "Contratos estruturados no país de origem com proteção operacional.",
  },
  {
    title: "Capacidade de operações complexas",
    desc: "Experiência com projetos industriais, commodities e contratos de grande escala.",
  },
];

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="relative aspect-video sm:aspect-4/5 lg:aspect-auto lg:h-130 rounded-2xl overflow-hidden bg-primary">
            <Image
              src="https://br.lexlatin.com/sites/default/files/2023-02/exporta%C3%A7%C3%B5es.png"
              alt="Navio cargueiro com containers"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <Image
                src="/atc-icon-white.svg"
                alt=""
                width={1205}
                height={375}
                aria-hidden
                className="w-3/5 max-w-70 h-auto"
              />
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Diferenciais
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Estrutura global + inteligência operacional
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              A operação combina presença internacional, execução local e
              governança comercial para reduzir risco em negociações globais.
            </p>

            <ul className="mt-8 space-y-5 sm:space-y-6">
              {items.map((it) => (
                <li key={it.title} className="flex gap-4">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {it.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
