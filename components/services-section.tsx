import { Container, Search, Users, Globe2 } from "lucide-react";

const services = [
  {
    icon: Container,
    title: "Importação Estratégica (End-to-End)",
    desc: "Operação completa, do planejamento à entrega. Modelo chave na mão para empresas que buscam escala com segurança.",
  },
  {
    icon: Search,
    title: "Sourcing & Desenvolvimento na China",
    desc: "Busca, validação e negociação direta com fábricas homologadas, incluindo auditoria, amostras e análise técnica.",
  },
  {
    icon: Users,
    title: "Intermediação Internacional de Negócios",
    desc: "Conectamos compradores e fornecedores globais com segurança jurídica e inteligência cultural.",
  },
  {
    icon: Globe2,
    title: "Exportação & Commodities",
    desc: "Estruturação e execução de operações internacionais para produtos brasileiros.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Serviços
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Soluções completas para operações internacionais
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Atuação consultiva e operacional para empresas que precisam escalar
            com inteligência, controle e execução internacional confiável.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 border border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-6 sm:p-8 md:p-10 flex flex-col gap-4 transition-colors hover:bg-background"
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
  );
}
