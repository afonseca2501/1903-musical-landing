export type CastMember = {
  name: string;
  role: string;
  imageSource: string;
};

export const CAST_PLACEHOLDER = "/placeholders/placeholder-8ef0c9cf.svg";

const ELENCO_DIR = "/assets/Elenco/estelar";
const ENSEMBLE_DIR = "/assets/Elenco/ensamble";

/** Explicit headshots keyed by full cast name (as in CAST_RAW). */
const HEADSHOT_BY_FULL_NAME: Record<string, string> = {
  "Alejandro Lagrotta": `${ELENCO_DIR}/alejandro-lagrotta.webp`,
  "Randy Domínguez": `${ELENCO_DIR}/randy-dominguez.webp`,
  "Juliette Roy": `${ELENCO_DIR}/juliette-roy.webp`,
  "Diego De Obaldía": `${ELENCO_DIR}/diego-de-obaldia.webp`,
  "José Alejandro Rodríguez": `${ELENCO_DIR}/jose-alejandro-rodriguez.webp`,
  "Hugo Víctor Rodríguez": `${ELENCO_DIR}/hugo-victor-rodriguez.webp`,
  "Lucho Gotti": `${ELENCO_DIR}/lucho-gotti.webp`,
  "Eusebio Pedroza": `${ELENCO_DIR}/eusebio-pedroza.webp`,
  "Alex Montes": `${ELENCO_DIR}/alex-montes.webp`,
  "Freddy Araúz": `${ELENCO_DIR}/freddy-arauz.webp`,
  "Mariano González": `${ELENCO_DIR}/mariano-gonzalez.webp`,
  "Kevin Carrillo (Robinho)": `${ELENCO_DIR}/kevin-carrillo.webp`,
  "Edixo Jiménez": `${ELENCO_DIR}/edixo-jimenez.webp`,
  "Santiago Bustamante": `${ELENCO_DIR}/santiago-bustamante.webp`,
  "Elmis Castillo": `${ELENCO_DIR}/elmis-castillo.webp`,
  "Omar Stevens": `${ELENCO_DIR}/omar-stevens.webp`,
  "Juan Rangel": `${ELENCO_DIR}/juan-rangel.webp`,
  "Aaron Zebede": `${ELENCO_DIR}/aaron-zebede.webp`,
  "Hermes Mendoza": `${ELENCO_DIR}/hermes-mendoza.webp`,
  "Juan Diego Araúz": `${ELENCO_DIR}/juan-diego-arauz.webp`,
};

/** Ensemble / reparto portraits (shown under “Ensemble y reparto”). */
const ENSEMBLE_HEADSHOT_BY_FULL_NAME: Record<string, string> = {
  "Jordi Alvarado": `${ENSEMBLE_DIR}/jordi-alvarado.webp`,
  "Odette Versailles": `${ENSEMBLE_DIR}/odette-versailles.webp`,
  "Mia Rocha": `${ENSEMBLE_DIR}/mia-rocha.webp`,
  "Adela Owens": `${ENSEMBLE_DIR}/adela-owens.webp`,
  "Angeli Pino": `${ENSEMBLE_DIR}/angeli-pino.webp`,
  "Daniella Córdoba": `${ENSEMBLE_DIR}/daniella-cordoba.webp`,
  "Nasharin Kruskaya Rodriguez": `${ENSEMBLE_DIR}/nasharin-kruskaya-rodriguez.webp`,
  "Juliette Carles": `${ENSEMBLE_DIR}/juliette-carles.webp`,
  "Yheilin Lee": `${ENSEMBLE_DIR}/yheilin-lee.webp`,
  "Anthony De León": `${ENSEMBLE_DIR}/anthony-de-leon.webp`,
  "Santiago Benavides V.": `${ENSEMBLE_DIR}/santiago-benavides.webp`,
};

export function castImageFor(name: string): string {
  return (
    HEADSHOT_BY_FULL_NAME[name] ??
    ENSEMBLE_HEADSHOT_BY_FULL_NAME[name] ??
    CAST_PLACEHOLDER
  );
}

export function hasStarringPhoto(member: CastMember): boolean {
  return Boolean(HEADSHOT_BY_FULL_NAME[member.name]);
}

export function hasEnsemblePhoto(member: CastMember): boolean {
  return Boolean(ENSEMBLE_HEADSHOT_BY_FULL_NAME[member.name]);
}

const CAST_RAW: { name: string; role: string }[] = [
  { name: "Alejandro Lagrotta", role: "Manuel Amador Guerrero" },
  { name: "Randy Domínguez", role: "Theodore Roosevelt" },
  { name: "Juliette Roy", role: "María De La Ossa de Amador" },
  { name: "Diego De Obaldía", role: "Philippe Bunau Varilla" },
  { name: "José Alejandro Rodríguez", role: "Narrador / Ascanio" },
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
    role: "Manuel Espinosa Batista / Porfirio Meléndez",
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
  { name: "Jordi Alvarado", role: "Cura / Ensemble" },
  { name: "Hermes Mendoza", role: "Victoriano Lorenzo / Ensemble" },
  {
    name: "Juan Diego Araúz",
    role: "Juan Bautista Pérez y Soto / John Hay / Herbert Prescott",
  },
  {
    name: "Odette Versailles",
    role: "Tía Goya / Tiffany Kimberly Clark / Clara Hay / Ensemble",
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

/** Split cast across marquee rows (round-robin for photo mix). */
export function splitCastMarqueeRows(rowCount = 3): CastMember[][] {
  const rows: CastMember[][] = Array.from({ length: rowCount }, () => []);
  CAST_MEMBERS.forEach((member, index) => {
    rows[index % rowCount].push(member);
  });
  return rows;
}
