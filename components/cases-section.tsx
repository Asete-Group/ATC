import { Factory, ShieldCheck, Truck } from "lucide-react";

const cases = [
  {
    icon: Factory,
    title: "Projeto com indústria automotiva",
    desc: "Coordenação internacional para atendimento de demanda industrial com critérios técnicos, validação de fornecedor e controle de risco operacional.",
  },
  {
    icon: Truck,
    title: "Exportação de proteína",
    desc: "Estruturação de operação internacional para produto brasileiro, com alinhamento comercial, documentação e execução logística de ponta a ponta.",
  },
  {
    icon: ShieldCheck,
    title: "Operações industriais complexas",
    desc: "Gestão de projetos com múltiplas etapas, fornecedores homologados e acompanhamento rigoroso de produção, conformidade e entrega.",
  },
];

export function CasesSection() {
  return (
    <section className="py-16 md:py-32 bg-secondary/35">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Casos e projetos
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Experiência aplicada em operações que exigem lastro real
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            Atuação em projetos industriais, exportações estruturadas e
            operações internacionais que demandam execução precisa.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <item.icon className="size-6 text-accent" aria-hidden />
              <h3 className="mt-6 text-lg font-semibold text-foreground">
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
