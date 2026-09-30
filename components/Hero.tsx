import Link from "next/link";

const bars = [40, 70, 30, 90, 55, 20, 65, 45, 80, 35, 60, 25, 75, 50, 30];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-32">
      <div>
        <p className="label-caps text-xs text-rust">Boletín diario narrado</p>
        <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Las noticias de Chile,
          <br />
          contadas en voz alta.
        </h1>
        <p className="mt-6 max-w-md text-lg text-ink/70">
          Cada mañana revisamos decenas de medios chilenos, agrupamos lo que
          realmente importa y te lo enviamos como un audio de pocos minutos.
          Nada de scrollear titulares — solo escuchar.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Link
            href="#suscribirse"
            className="bg-rust px-7 py-3.5 text-sm font-medium text-paper transition hover:bg-rust-dim"
          >
            Recibir en WhatsApp
          </Link>
          <Link
            href="/ejemplo"
            className="label-caps text-xs text-ink underline decoration-rust decoration-2 underline-offset-4 transition hover:text-rust"
          >
            Ver un ejemplo →
          </Link>
        </div>
      </div>

      <div className="bg-teal p-7 text-paper shadow-none lg:justify-self-end lg:p-8">
        <p className="label-caps text-xs text-paper/60">Martes 26 de agosto</p>
        <p className="mt-2 font-serif text-2xl">Edición de hoy</p>

        <div className="mt-8 flex h-16 items-end gap-[3px]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-1.5 bg-paper/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-paper/20 pt-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-paper/50">
            <span
              className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-paper"
              aria-hidden
            />
          </span>
          <div className="text-sm">
            <p className="text-paper">6 historias · 6:42 min</p>
            <p className="text-paper/60">Narrado por Daily News</p>
          </div>
        </div>
      </div>
    </section>
  );
}
