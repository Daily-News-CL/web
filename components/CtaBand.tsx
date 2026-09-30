import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/config";

export default function CtaBand() {
  return (
    <section id="suscribirse" className="bg-teal text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-20">
        <div>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Empieza tu día bien informado.
          </h2>
          <p className="mt-3 max-w-md text-paper/70">
            Gratis, todos los días a las 7 AM, directo a tu WhatsApp.
          </p>
        </div>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-rust px-7 py-3.5 text-center text-sm font-medium text-paper transition hover:bg-rust-dim"
        >
          Recibir en WhatsApp
        </Link>
      </div>
    </section>
  );
}
