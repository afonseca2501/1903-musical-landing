export type CastMember = {
  name: string;
  role: string;
  imageSource: string;
};

export const CAST_PLACEHOLDER = "/placeholders/placeholder-8ef0c9cf.svg";

const ELENCO_DIR = "/assets/Elenco/estelar";

/** First-name files present in `public/assets/Elenco/estelar`. */
const KNOWN_HEADSHOTS: Record<string, string> = {
  Alejandro: `${ELENCO_DIR}/Alejandro.webp`,
  Diego: `${ELENCO_DIR}/Diego.webp`,
  Elmis: `${ELENCO_DIR}/Elmis.webp`,
  Hugo: `${ELENCO_DIR}/Hugo.webp`,
  Juliette: `${ELENCO_DIR}/Juliette.webp`,
};

/** Juliette.webp is for Juliette Roy only (not Juliette Carles). */
const HEADSHOT_BY_FULL_NAME: Record<string, string> = {
  "Juliette Roy": KNOWN_HEADSHOTS.Juliette,
};

export function castImageFor(name: string): string {
  if (HEADSHOT_BY_FULL_NAME[name]) return HEADSHOT_BY_FULL_NAME[name];
  const first = name.split(/\s+/)[0];
  if (first === "Juliette") return CAST_PLACEHOLDER;
  return KNOWN_HEADSHOTS[first] ?? CAST_PLACEHOLDER;
}

const CAST_RAW: { name: string; role: string }[] = [
  { name: "Alejandro Lagrotta", role: "Manuel Amador Guerrero" },
  { name: "Randy Domínguez", role: "Theodore Roosevelt" },
  { name: "Juliette Roy", role: "María De La Ossa de Amador" },
  { name: "Diego De Obaldía", role: "Philippe Bunau Varilla" },
  { name: "José Alejandro Rodríguez", role: "Narrador/Ascanio" },
  {
    name: "Hugo Víctor Rodríguez",
    role: "William Nelson Cromwell / James Shaler",
  },
  { name: "Lucho Gotti", role: "José Agustín Arango" },
  { name: "Eusebio Pedroza", role: "Carlos Constantino Arosemena" },
  { name: "Alex Montes", role: "General Nicanor De Obarrio" },
  { name: "Freddy Araúz", role: "Ricardo Arias" },
  { name: "Mariano González", role: "Federico Boyd" },
  {
    name: "Kevin Carrillo (Robinho)",
    role: "Manuel Espinosa Batista/Porfirio Meléndez",
  },
  { name: "Edixo Jiménez", role: "Tomás Arias" },
  {
    name: "Santiago Bustamante",
    role: "Presidente José Manuel Marroquín",
  },
  { name: "Elmis Castillo", role: "José Domingo De Obaldía" },
  { name: "Omar Stevens", role: "General Esteban Huertas" },
  { name: "Juan Rangel", role: "Coronel Torres" },
  { name: "Aaron Zebede", role: "General Tobar" },
  { name: "Jordi Alvarado", role: "Cura/Ensemble" },
  { name: "Hermes Mendoza", role: "Victoriano Lorenzo/Ensemble" },
  {
    name: "Juan Diego Araúz",
    role: "Juan Bautista Pérez y Soto/Duque/John Hay / Herbert Prescott/Ensemble",
  },
  {
    name: "Odette Versailles",
    role: "Tía Goya/Tiffany Kimberly Clark/Clara Hay/Ensemble",
  },
  { name: "Mia Rocha", role: "Anita / Ensemble" },
  { name: "Adela Owens", role: "Ensemble" },
  { name: "Angeli Pino", role: "Ensemble" },
  { name: "Daniella Córdoba", role: "Ensemble" },
  { name: "Nasharin Kruskaya Rodriguez", role: "Ensemble" },
  { name: "Juliette Carles", role: "Ensemble" },
  { name: "Ana Elena Navarro", role: "Ensemble" },
  { name: "Yheilin Lee", role: "Ligia / Ensemble" },
  { name: "Anthony De León", role: "Ensemble" },
  {
    name: "Santiago Benavides V.",
    role: "Presidente del Congreso / Ensemble",
  },
  { name: "Marcell Chávez (Arvejita)", role: "Edecan de PBV" },
];

export const CAST_MEMBERS: CastMember[] = CAST_RAW.map((member) => ({
  ...member,
  imageSource: castImageFor(member.name),
}));
