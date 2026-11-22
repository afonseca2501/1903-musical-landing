export type CreditLine = {
  label: string;
  value: string;
};

export type CreditGroup = {
  id: string;
  title: string;
  lines: CreditLine[];
};

export const CREDITS_INTRO =
  "Ficha técnica actualizada: el equipo creativo y técnico detrás de la producción, y la orquesta que toca en vivo cada función.";

export const CREDIT_GROUPS: CreditGroup[] = [
  {
    id: "libreto-musica-direccion",
    title: "Libreto, música y dirección",
    lines: [
      { label: "Libreto", value: "Diego De Obaldía" },
      {
        label: "Música Original",
        value:
          "Diego De Obaldía, Eduardo Charry, Alejandro Lagrotta, Noel Sanchez, Aaron Zebede",
      },
      { label: "Dirección Artística", value: "Aaron Zebede" },
      {
        label: "Producción",
        value:
          "Stardust Entertainment; Full House Entertainment; Alpha Productions",
      },
      {
        label: "Dirección Musical, Arreglo vocal, Diseño y operación de sonido",
        value: 'José "Pepe" Casís',
      },
      { label: "Dirección de Orquesta", value: "Eduardo Charry" },
      { label: "Coreografías", value: "Maryelin Barahona" },
      { label: "Asistente del Director", value: "Ana Melissa Durán" },
    ],
  },
  {
    id: "escenografia-mercado-iluminacion",
    title: "Escenografía, mercado e iluminación",
    lines: [
      { label: "Confección de Escenografía", value: "Rafael Navarro" },
      { label: "Realización de Escenografía", value: "NAFER, S.A." },
      {
        label: "Diseño de Mercado Inmersivo",
        value: "Kenia Rodríguez, María Fernanda Achurra",
      },
      {
        label: "Confección de Mercado Inmersivo",
        value: "Proyectos gráficos y estructuras",
      },
      { label: "Diseño de Iluminación", value: "Eric De León" },
      {
        label: "Equipo de Luces, Sonido, Pantallas y Tarimas",
        value: "Meeting & Show",
      },
      { label: "Diseño de Vestuario", value: "Jaime Ávila" },
      {
        label: "Coordinación y Confección de Utilería",
        value: "Ana Fernández",
      },
    ],
  },
  {
    id: "equipo-tecnico-escena",
    title: "Equipo técnico y escena",
    lines: [
      { label: "Ingeniero de sonido", value: "Eduardo Bosano" },
      {
        label: "Asistente de Audio/Microfonía",
        value: "Ángelo Flores",
      },
      {
        label: "Asistentes Técnicos y Operadores de Consola",
        value: "Alexa Casanova; Ferdinand Suárez",
      },
      { label: "Diseño y manejo de Pantallas", value: "Joey Lalo" },
      {
        label: "Asistentes de Producción",
        value:
          "Kenia Rodríguez; Sandra Saavedra; Marlane Salazar; Isabella De Freitas",
      },
      { label: "Coordinadora de Escena", value: "Ana Fernández" },
      {
        label: "Equipo de Backstage",
        value:
          "Michell Martinez; Victoria Arias; William Badillo; Alejandro Valery; Mateo Nariño",
      },
      {
        label: "Perseguidoras",
        value: "Marcelo Quiñones; Alex Lefevre",
      },
      { label: "Maquillaje", value: "Bolívar Aparicio" },
    ],
  },
  {
    id: "comunicacion-programa-boleteria",
    title: "Comunicación, programa y boletería",
    lines: [
      {
        label: "Fotografía y flyer oficial",
        value: "Javier Alejandro Solís",
      },
      {
        label: "Diseño de programa de mano",
        value: "Anthony Fonseca",
      },
      { label: "Coordinadora de mercadeo", value: "Mafe Casis" },
      {
        label: "Community manager",
        value: 'Jesús "Yisus" Marín',
      },
      { label: "Producción de videos", value: "Mariano González" },
      { label: "Editor de videos", value: "Rogelio Reyes" },
      {
        label: "Boletería",
        value: "Panatickets / Victora Trejos",
      },
    ],
  },
];
