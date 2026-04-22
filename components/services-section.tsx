import { Container, Search, Users, Globe2 } from "lucide-react"

const services = [
  {
    icon: Container,
    title: "Importação completa",
    desc: "Do pedido à entrega. Você foca no negócio, nós cuidamos do processo.",
  },
  {
    icon: Search,
    title: "Sourcing na China",
    desc: "Encontramos a fábrica certa, ao melhor custo, com auditoria.",
  },
  {
    icon: Users,
    title: "Intermediação de negócios",
    desc: "Negociação direta com fornecedores e suporte cultural.",
  },
  {
    icon: Globe2,
    title: "Exportação",
    desc: "Commodities e produtos brasileiros para o mercado internacional.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Serviços
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              O que entregamos para sua empresa
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Quatro frentes integradas para escalar sua operação internacional
            com previsibilidade.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 border border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-8 md:p-10 flex flex-col gap-4 transition-colors hover:bg-background"
            >
              <s.icon className="size-6 text-accent" aria-hidden />
              <h3 className="text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
