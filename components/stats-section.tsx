const stats = [
  { value: "+1M", label: "toneladas exportadas" },
  { value: "+3.000", label: "clientes atendidos" },
  { value: "+10K", label: "produtos movimentados" },
]

export function StatsSection() {
  return (
    <section id="autoridade" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-mono">
            Autoridade
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Números que mostram nossa escala
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Resultados construídos com base em operações reais e relacionamento
            de longo prazo.
          </p>
        </div>

        <dl className="mt-16 grid gap-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-white/15 pt-6">
              <dt className="font-mono text-5xl md:text-6xl font-semibold tracking-tight">
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
  )
}
