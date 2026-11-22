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
      { label: "Dirección Artística", value: "Diego De Obaldía" },
      {
        label: "Música Original",
        value:
          "Alejandro Lagrotta, Eduardo Charry, Diego De Obaldía, Aaron Zebede, Noel Sánchez, Arian Abadi",
      },
      {
        label: "Producción",
        value:
          "Aaron Zebede, Stardust Entertainment, Full House Entertainment, Alpha Productions",
      },
      {
        label: "Dirección Musical, Arreglo vocal, Diseño y operación de sonido",
        value: "José «Pepe» Casis",
      },
      { label: "Dirección de Orquesta", value: "Eduardo Charry" },
      { label: "Coreografías", value: "Maryelin Barahona" },
      { label: "Asistente del Director", value: "Ana Fernández" },
    ],
  },
  {
    id: "escenografia-mercado-iluminacion",
    title: "Escenografía, mercado e iluminación",
    lines: [
      { label: "Confección de Escenografía", value: "Rafael Navarro" },
      { label: "Realización de Escenografía", value: "NAFER, S.A" },
      {
        label: "Diseño de Mercado Inmersivo",
        value: "Kenia Rodríguez, María Fernanda Achurra",
      },
      { label: "Confección de Mercado Inmersivo", value: "Eric De León" },
      {
        label: "Proyectos gráficos y estructuras",
        value: "Meeting & Show",
      },
      { label: "Diseño de Iluminación", value: "Ana Melissa Durán" },
      {
        label: "Equipo de Luces, Sonido, Pantallas y Tarimas",
        value: "Jaime Ávila",
      },
      { label: "Diseño de Vestuario", value: "Eduardo Bosano" },
      {
        label: "Coordinación y Confección de Utilería",
        value: "Ángelo Flores",
      },
    ],
  },
  {
    id: "equipo-tecnico-escena",
    title: "Equipo técnico y escena",
    lines: [
      { label: "Ingeniero de sonido", value: "Alexa Casanova" },
      {
        label: "Asistente de Audio/Microfonía",
        value: "Ferdinand Suárez",
      },
      {
        label: "Asistentes Técnicos y Operadores de Consola",
        value: "Joey Lalo",
      },
      {
        label: "Diseño y manejo de Pantallas",
        value: "Kenia Rodríguez",
      },
      { label: "Asistentes de Producción", value: "Sandra Saavedra" },
      { label: "Coordinadora de Escena", value: "Marlane Salazar" },
      { label: "Equipo de Backstage", value: "Isabella De Freitas" },
      { label: "Perseguidoras", value: "Ana Fernández" },
      { label: "Maquillaje", value: "Michell Martinez" },
    ],
  },
  {
    id: "comunicacion-programa-boleteria",
    title: "Comunicación, programa y boletería",
    lines: [
      {
        label: "Fotografía y flyer oficial",
        value: "Victoria Arias",
      },
      {
        label: "Diseño de programa de mano",
        value: "William Badillo",
      },
      {
        label: "Coordinadora de mercadeo",
        value: "Alejandro Valery",
      },
      { label: "Community manager", value: "Mateo Nariño" },
      { label: "Producción de videos", value: "Marcelo Quiñones" },
      { label: "Editor de videos", value: "Alex Lefevre" },
      {
        label: "Boletería",
        value:
          "Bolívar Aparicio, Javier Alejandro Solis, Anthony Fonseca, MaFe Casis, Jesús «Yisus» Marin, Mariano González, Rodrigo Reyes Ulala, Panatickets/Victoria Trejos",
      },
    ],
  },
];
