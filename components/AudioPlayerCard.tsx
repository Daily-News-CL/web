"use client";

import { useRef, useState } from "react";

const bars = [30, 55, 80, 45, 65, 25, 70, 90, 40, 60, 35, 75, 50, 85, 30, 55];

type AudioPlayerCardProps = {
  date: string;
  duration: string;
  storyCount: number;
  // TODO: reemplazar con la URL real del audio en S3 generado por el pipeline
  src?: string;
};

export default function AudioPlayerCard({
  date,
  duration,
  storyCount,
  src,
}: AudioPlayerCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio || !src) {
      setPlaying((p) => !p);
      return;
    }
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  }

  return (
    <div className="bg-teal p-7 text-paper sm:p-8">
      <p className="label-caps text-xs text-paper/60">
        Ejemplo · audio de muestra
      </p>
      <p className="mt-2 font-serif text-2xl">{date}</p>

      <div className="mt-8 flex h-20 items-end gap-[3px]">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`w-1.5 transition-colors ${
              playing ? "bg-paper" : "bg-paper/50"
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-paper/20 pt-5">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pausar" : "Reproducir"}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-paper/50 transition hover:border-paper"
        >
          {playing ? (
            <span className="flex gap-1" aria-hidden>
              <span className="h-4 w-1.5 bg-paper" />
              <span className="h-4 w-1.5 bg-paper" />
            </span>
          ) : (
            <span
              className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-paper"
              aria-hidden
            />
          )}
        </button>
        <div className="text-sm">
          <p className="text-paper">
            {storyCount} historias · {duration}
          </p>
          <p className="text-paper/60">Narrado por Daily News</p>
        </div>
      </div>

      {src && (
        <audio
          ref={audioRef}
          src={src}
          onEnded={() => setPlaying(false)}
          className="hidden"
        />
      )}
    </div>
  );
}
