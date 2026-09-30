import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Condiciones de uso del servicio informativo Daily News.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24">
        <p className="label-caps text-xs text-rust">Última actualización: 30 de septiembre de 2026</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          Términos de uso
        </h1>

        <div className="mt-10 space-y-8 text-base leading-7 text-ink/75">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">El servicio</h2>
            <p className="mt-3">
              Daily News ofrece resúmenes informativos y audios elaborados a partir de
              fuentes periodísticas. El servicio se encuentra en etapa piloto y puede
              cambiar, interrumpirse o incorporar nuevas funciones.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Uso informativo</h2>
            <p className="mt-3">
              Los resúmenes pueden contener errores u omisiones y no sustituyen la lectura
              de las fuentes originales. No constituyen asesoría legal, financiera, médica
              ni profesional. Las fuentes conservan la autoría de su contenido original.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Mensajes de WhatsApp</h2>
            <p className="mt-3">
              Al solicitar el servicio aceptas recibir los mensajes relacionados con la
              modalidad que escogiste. Puedes retirar ese consentimiento en cualquier
              momento escribiendo <strong>baja</strong>. No debes usar el canal para enviar
              contenido ilegal, abusivo o que afecte a terceros.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Disponibilidad</h2>
            <p className="mt-3">
              Hacemos esfuerzos razonables por mantener el servicio disponible y entregar
              información oportuna, pero no garantizamos continuidad, horarios exactos ni
              ausencia total de errores técnicos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Contacto</h2>
            <p className="mt-3">
              Para consultas sobre estos términos, contáctanos mediante el canal oficial de{" "}
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust underline underline-offset-4"
              >
                WhatsApp de Daily News
              </Link>
              . Consulta también nuestra{" "}
              <Link href="/privacidad" className="text-rust underline underline-offset-4">
                política de privacidad
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
