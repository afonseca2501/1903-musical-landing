export type DrinksBar = {
  id: string;
  name: string;
  location: string;
  description: string;
  imageSource: string;
};

export const DRINKS_MENU_INTRO =
  "Sección independiente y de acceso rápido para consultar qué pedir y dónde encontrarlo.";

export const DRINKS_BARS: DrinksBar[] = [
  {
    id: "barra-principal",
    name: "Barra principal",
    location: "Bogotá",
    description: "Menú general de bebidas.",
    imageSource: "/assets/bebidas/barra-principal.webp",
  },
  {
    id: "barra-de-burbujas",
    name: "Barra de Burbujas",
    location: "París",
    description: "Vinos espumantes y otras burbujas.",
    imageSource: "/assets/bebidas/barra-de-burbujas.webp",
  },
  {
    id: "seco-de-oro",
    name: "Seco de Oro",
    location: "San Felipe",
    description:
      "Experiencia de coctelería con Seco de Oro, asociado a Rubén Blades y Mario Castrellón.",
    imageSource: "/assets/bebidas/seco-de-oro.webp",
  },
];
