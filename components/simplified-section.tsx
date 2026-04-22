import { Clock } from "lucide-react";

const points = [
  "Você envia o produto ou ideia que deseja importar.",
  "Encontramos e auditamos a fábrica ideal na China.",
  "Fechamos a negociação e cuidamos de toda a logística.",
  "Você recebe o produto com segurança, no prazo e no custo certo.",
];

export function SimplifiedSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Importação simplificada
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
            Um modelo direto para você entender como tirar sua ideia do papel
            sem complicação.
          </p>

          <ol className="mt-10 space-y-5">
            {points.map((p, i) => (
              <li
                key={p}
                className="flex gap-4 items-start border-b border-border/60 last:border-0 pb-5 last:pb-0"
              >
                <span className="font-mono text-sm text-accent-foreground bg-accent/90 rounded-full size-7 inline-flex items-center justify-center shrink-0 font-semibold">
                  {i + 1}
                </span>
                <p className="text-foreground/90 leading-relaxed pt-0.5">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
