import { BriefcaseBusiness, PackageCheck } from "lucide-react";

const models = [
  {
    icon: BriefcaseBusiness,
    title: "Consultoria + intermediação",
    desc: "Estruturamos a operação, validamos fornecedores e conduzimos a negociação para empresas que já possuem time interno e precisam de inteligência local para executar com segurança.",
    highlight: "Ideal para quem quer manter controle interno com suporte estratégico.",
  },
  {
    icon: PackageCheck,
    title: "Importação completa (chave na mão)",
    desc: "Assumimos o fluxo completo da operação internacional, do planejamento ao destino final, com gestão integrada de sourcing, produção, qualidade, logística e documentação.",
    highlight: "Modelo indicado para empresas que buscam escala com previsibilidade operacional.",
  },
];

export function OperationModelsSection() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Modelos de operação
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Estrutura comercial adaptada ao nível de suporte que sua operação exige
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Atuamos tanto como parceiro estratégico na intermediação quanto na
            execução integral da importação, conforme a maturidade e o objetivo
            do seu negócio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.title}
              className="rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-accent">
                <model.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {model.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {model.desc}
              </p>
              <p className="mt-6 rounded-2xl bg-secondary/70 px-4 py-3 text-sm font-medium leading-relaxed text-foreground">
                {model.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
