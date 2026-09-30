import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Cómo Daily News trata los datos usados por su servicio de WhatsApp.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24">
        <p className="label-caps text-xs text-rust">Última actualización: 30 de septiembre de 2026</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          Política de privacidad
        </h1>

        <div className="mt-10 space-y-8 text-base leading-7 text-ink/75">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Quiénes somos</h2>
            <p className="mt-3">
              Daily News es un proyecto informativo en etapa piloto que prepara resúmenes
              narrados de noticias chilenas y los entrega a las personas que solicitan el
              servicio por WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Datos que tratamos</h2>
            <p className="mt-3">
              Cuando escribes al servicio podemos guardar tu número de WhatsApp, el texto
              de tus mensajes, identificadores técnicos de entrega, fechas de interacción
              y tus preferencias de suscripción. No solicitamos datos sensibles ni datos
              de pago mediante WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Para qué los usamos</h2>
            <p className="mt-3">
              Usamos esos datos para responder tus solicitudes, enviarte los resúmenes que
              hayas aceptado recibir, registrar altas y bajas, operar el servicio y resolver
              problemas de entrega. No vendemos tus datos personales.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Proveedores</h2>
            <p className="mt-3">
              El servicio utiliza proveedores tecnológicos para mensajería, alojamiento,
              almacenamiento y generación de contenido. Entre ellos pueden estar Twilio,
              Meta/WhatsApp, Amazon Web Services y el proveedor donde se aloja este sitio.
              Estos proveedores pueden procesar información en otros países bajo sus
              propias condiciones y medidas de seguridad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Tus decisiones</h2>
            <p className="mt-3">
              Puedes escribir <strong>baja</strong> en cualquier momento para dejar de recibir
              mensajes. También puedes solicitar información, corrección o eliminación de
              tus datos escribiéndonos por el mismo canal. Conservaremos únicamente la
              información necesaria para atender la solicitud y cumplir obligaciones aplicables.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">Contacto</h2>
            <p className="mt-3">
              Para consultas sobre privacidad, contáctanos mediante el canal oficial de{" "}
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust underline underline-offset-4"
              >
                WhatsApp de Daily News
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
