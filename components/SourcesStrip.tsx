const sources = [
  "EMOL",
  "Cooperativa",
  "BioBío Chile",
  "CNN Chile",
  "ADN Radio",
  "24 Horas",
  "T13",
  "Chilevisión",
  "Publimetro",
  "La Nación",
  "El Mostrador",
];

export default function SourcesStrip() {
  return (
    <section className="border-y border-ink/10 bg-paper-dim/60">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <p className="label-caps text-xs text-muted">Fuentes que seguimos</p>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif text-lg text-ink/80 sm:text-xl">
          {sources.map((s, i) => (
            <span key={s} className="flex items-baseline gap-3">
              {s}
              {i < sources.length - 1 && (
                <span className="text-rust" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
