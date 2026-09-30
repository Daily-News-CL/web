import type { Story } from "@/components/StoryList";

// TODO: reemplazar con datos reales del backend (tabla `stories`/`articles`
// y URL de audio en S3 generada por el pipeline de audio).

export const edition = {
  date: "Martes 26 de agosto, 2026",
  duration: "6:42",
  audioSrc: undefined as string | undefined,
};

export const stories: Story[] = [
  {
    category: "Economía",
    headline: "Banco Central mantiene la tasa de interés en 5,5%",
    teaser:
      "El consejo evaluó la inflación reciente y las proyecciones de crecimiento antes de decidir mantener el instituto emisor sin cambios por tercer mes consecutivo.",
  },
  {
    category: "Política",
    headline: "Congreso avanza en la discusión de la reforma previsional",
    teaser:
      "La comisión de Hacienda despachó el proyecto que ahora pasa a sala, tras meses de negociación entre oficialismo y oposición.",
  },
  {
    category: "Santiago",
    headline: "Metro anuncia extensión de la Línea 7 hacia Renca",
    teaser:
      "Las obras comenzarían el próximo año y se espera que la nueva línea esté operativa hacia 2029.",
  },
  {
    category: "Deportes",
    headline: "La Roja confirma nómina para las próximas Eliminatorias",
    teaser:
      "El entrenador citó a cuatro jugadores debutantes para los partidos de la próxima fecha doble.",
  },
  {
    category: "Clima",
    headline: "Alerta amarilla por sistema frontal en la zona central",
    teaser:
      "Onemi advierte por lluvias intensas y posibles anegamientos entre la Región de Valparaíso y el Maule durante el fin de semana.",
  },
];
