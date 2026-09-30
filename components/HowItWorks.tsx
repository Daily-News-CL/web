const steps = [
  {
    n: "01",
    title: "Recopilamos",
    body: "Rastreamos EMOL, Cooperativa, BioBío, T13, CNN Chile y otros medios durante todo el día.",
  },
  {
    n: "02",
    title: "Agrupamos",
    body: "Detectamos qué artículos hablan de la misma historia y descartamos lo repetido.",
  },
  {
    n: "03",
    title: "Narramos",
    body: "Redactamos un resumen claro y lo convertimos en audio con voz natural.",
  },
  {
    n: "04",
    title: "Enviamos",
    body: "A las 7 AM llega a tu WhatsApp, listo para escuchar en el trayecto.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <p className="label-caps text-xs text-muted">Cómo funciona</p>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1.1fr] lg:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`pr-6 ${
                i > 0 ? "lg:border-l lg:border-ink/10 lg:pl-8" : ""
              }`}
            >
              <span className="font-serif text-4xl text-rust">{step.n}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
