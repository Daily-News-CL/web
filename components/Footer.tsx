import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-serif text-sm text-ink/70">Daily News</p>
        <p>© 2026 Daily News. Resúmenes generados con asistencia de IA.</p>
        <div className="flex gap-5">
          <Link href="/ejemplo" className="hover:text-rust">
            Ejemplo
          </Link>
          <Link href="/privacidad" className="hover:text-rust">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-rust">
            Términos
          </Link>
        </div>
      </div>
    </footer>
  );
}
