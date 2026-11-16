export type DrinksBar = {
  id: string;
  name: string;
  location: string;
  description: string;
};

export const DRINKS_MENU_INTRO =
  "Sección independiente y de acceso rápido para consultar qué pedir y dónde encontrarlo.";

export const DRINKS_BARS: DrinksBar[] = [
  {
    id: "barra-principal",
    name: "Barra principal",
    location: "Bogotá",
    description: "Menú general de bebidas.",
  },
  {
    id: "barra-de-burbujas",
    name: "Barra de Burbujas",
    location: "París",
    description: "Vinos espumantes y otras burbujas.",
  },
  {
    id: "seco-de-oro",
    name: "Seco de Oro",
    location: "San Felipe",
    description:
      "Experiencia de coctelería con Seco de Oro, asociado a Rubén Blades y Mario Castrellón.",
  },
];
