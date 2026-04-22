import { ClipboardList, Handshake, Ship } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    desc: "Entendemos seu produto, volume, margem e objetivos. Você sai com um plano claro.",
  },
  {
    icon: Handshake,
    title: "Sourcing & Negociação",
    desc: "Encontramos fábricas homologadas e negociamos diretamente na China.",
  },
  {
    icon: Ship,
    title: "Logística & Entrega",
    desc: "Cuidamos de frete, alfândega e documentação até a porta da sua empresa.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Três passos para importar com segurança
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Um processo direto, sem burocracia desnecessária, com acompanhamento
            ponta a ponta.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon className="size-5" aria-hidden />
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
