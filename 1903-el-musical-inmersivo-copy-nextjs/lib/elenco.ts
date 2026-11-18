export type CastMember = {
  name: string;
  role: string;
  imageSource: string;
};

const ELENCO_DIR = "/assets/Elenco/estelar";

export const CAST_MEMBERS: CastMember[] = [
  {
    name: "Alejandro Lagrotta",
    role: "Manuel Amador Guerrero",
    imageSource: `${ELENCO_DIR}/Alejandro.webp`,
  },
  {
    name: "Randy Domínguez",
    role: "Theodore Roosevelt",
    imageSource: "/placeholders/placeholder-8ef0c9cf.svg",
  },
  {
    name: "Juliette Roy",
    role: "María De La Ossa de Amador",
    imageSource: `${ELENCO_DIR}/Juliette.webp`,
  },
  {
    name: "Diego De Obaldía",
    role: "Philippe Bunau Varilla",
    imageSource: `${ELENCO_DIR}/Diego.webp`,
  },
  {
    name: "Hugo Víctor Rodríguez",
    role: "William Nelson Cromwell",
    imageSource: `${ELENCO_DIR}/Hugo.webp`,
  },
  {
    name: "Elmis Castillo",
    role: "José Domingo De Obaldía",
    imageSource: `${ELENCO_DIR}/Elmis.webp`,
  },
  {
    name: "Omar Stevens",
    role: "General Esteban Huertas",
    imageSource: "/placeholders/placeholder-8ef0c9cf.svg",
  },
  {
    name: "Lucho Gotti",
    role: "José Agustín Arango",
    imageSource: "/placeholders/placeholder-8ef0c9cf.svg",
  },
];
