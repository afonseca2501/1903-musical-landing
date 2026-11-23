export type MapLegendMarker = {
  id: string;
  marker: string;
  label: string;
};

/** Gate / entrance markers on the printed map (yellow badges). */
export function isMapGateCode(code: string): boolean {
  return code === "A" || code === "B";
}

/** Pull a leading map code from labels like `7A · Eventos & Eventos`. */
export function parseLeadingMapCode(
  label: string,
): { code: string; rest: string } | null {
  const match = label.match(/^([ABX]|[1-9]|[1-9][A-C])\s*[·•\-–—]\s*(.+)$/i);
  if (!match) return null;
  return { code: match[1].toUpperCase(), rest: match[2].trim() };
}

export const MAP_IMAGE_SRC = "/assets/mapa_1903_1080x1920.webp";
export const MAP_IMAGE_WIDTH = 1080;
export const MAP_IMAGE_HEIGHT = 1920;

export const MAP_LEGEND_MARKERS: MapLegendMarker[] = [
  { id: "a", marker: "A", label: "PUERTA DE TIERRA (ENTRADA Y SALIDA)" },
  { id: "x", marker: "X", label: "PLAZA Y GAZEBO" },
  { id: "1", marker: "1", label: "SAN FELIPE (MUSEO OCA)" },
  { id: "2", marker: "2", label: "SAN FELIPE (REST.-BAR)" },
  { id: "3", marker: "3", label: "PARIS (REST.-BAR)" },
  { id: "4", marker: "4", label: "ESTADOS UNIDOS (REST.)" },
  { id: "5a", marker: "5A", label: "COLÓN (REST)" },
  { id: "5b", marker: "5B", label: "COLÓN (MESAS)" },
  { id: "6", marker: "6", label: "BOGOTÁ (BAR PRINCIPAL)" },
  { id: "7a", marker: "7A", label: "EVENTOS & EVENTOS" },
  { id: "7b", marker: "7B", label: "LA DALIA (SEDERÍA)" },
  { id: "8a", marker: "8A", label: "GLOBAL BANK" },
  { id: "8b", marker: "8B", label: "TAD (TIENDA)" },
  { id: "8c", marker: "8C", label: "BONLAC (HELADERÍA)" },
  { id: "9", marker: "9", label: "PRISIÓN (PHOTO OPP)" },
  { id: "b", marker: "B", label: "ENTRADA AL TEATRO" },
];
