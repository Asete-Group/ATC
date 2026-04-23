const audiences = [
  {
    title: "Indústrias",
    desc: "Para empresas que precisam de fornecimento internacional confiável, padronização técnica e escala operacional.",
  },
  {
    title: "Distribuidores",
    desc: "Para operações que buscam margem, previsibilidade de abastecimento e acesso direto à origem.",
  },
  {
    title: "Importadores",
    desc: "Para negócios que querem reduzir risco, validar fornecedores e profissionalizar a cadeia internacional.",
  },
];

export function AudienceSection() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Para quem é
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            A ATC opera para empresas e projetos que tratam comércio
            internacional como estratégia
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-accent">
                Perfil
              </p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
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
