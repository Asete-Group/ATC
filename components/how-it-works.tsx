import {
  BadgeCheck,
  ClipboardList,
  Factory,
  Handshake,
  Ship,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico Estratégico",
    desc: "Analisamos produto, volume, margem, mercado e viabilidade da operação. Você recebe uma visão clara antes de investir.",
  },
  {
    icon: Handshake,
    title: "Sourcing, Validação & Negociação",
    desc: "Identificamos fábricas qualificadas, realizamos due diligence e negociamos direto na origem, sem intermediários desnecessários.",
  },
  {
    icon: Factory,
    title: "Produção & Controle de Qualidade",
    desc: "Acompanhamos produção, inspeção e conformidade para garantir padrão, segurança e previsibilidade.",
  },
  {
    icon: Ship,
    title: "Logística Internacional & Entrega Final",
    desc: "Gerenciamos frete, documentação, desembaraço e entrega até o destino final da operação.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Um processo estruturado para reduzir risco e maximizar resultado
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Operamos com um modelo validado internacionalmente, garantindo
            controle em cada etapa da importação.
          </p>
        </div>

        <ol className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-accent/40"
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

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/8 p-5 text-sm text-foreground">
          <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
          <p className="leading-relaxed">
            Cada etapa é desenhada para dar visibilidade, controle e segurança
            comercial antes da tomada de decisão.
          </p>
        </div>
      </div>
    </section>
  );
}
