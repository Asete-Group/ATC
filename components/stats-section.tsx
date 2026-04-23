const stats = [
  { value: "+1MM", label: "toneladas exportadas" },
  { value: "+3.000", label: "clientes atendidos" },
  { value: "+8", label: "países com operações" },
];

export function StatsSection() {
  return (
    <section
      id="autoridade"
      className="py-16 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-mono">
            Autoridade
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Números que sustentam nossa operação
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Resultados construídos em operações internacionais reais, com
            capacidade de execução em diferentes mercados e níveis de
            complexidade.
          </p>
        </div>

        <dl className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-t border-white/15 pt-5 sm:pt-6"
            >
              <dt className="font-mono text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                {s.value}
              </dt>
              <dd className="mt-3 text-sm text-white/70 leading-relaxed">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
