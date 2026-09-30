import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayerCard from "@/components/AudioPlayerCard";
import StoryList from "@/components/StoryList";
import { edition, stories } from "./data";

export const metadata: Metadata = {
  title: "Ejemplo de edición",
  description: "Así se ve y se escucha una edición diaria de Daily News.",
};

export default function EjemploPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 sm:py-20">
        <p className="label-caps text-xs text-muted">Ejemplo de edición</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {edition.date}
        </h1>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <AudioPlayerCard
              date={edition.date}
              duration={edition.duration}
              storyCount={stories.length}
              src={edition.audioSrc}
            />
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Audio de muestra con fines ilustrativos — la edición real se
              genera y envía cada mañana a las 7 AM.
            </p>
          </div>

          <StoryList stories={stories} />
        </div>
      </main>
      <Footer />
    </>
  );
}
