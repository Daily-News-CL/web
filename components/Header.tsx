import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
          Daily News
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/ejemplo"
            className="label-caps text-xs text-ink/70 transition hover:text-rust"
          >
            Ejemplo
          </Link>
          <Link
            href="#suscribirse"
            className="label-caps rounded-none border border-ink px-4 py-2 text-xs transition hover:border-rust hover:text-rust"
          >
            Suscribirse
          </Link>
        </nav>
      </div>
    </header>
  );
}
