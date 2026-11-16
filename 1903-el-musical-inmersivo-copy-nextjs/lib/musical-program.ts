export type MusicalSong = {
  number: string;
  title: string;
  lyrics?: string;
  music: string;
};

export type MusicalAct = {
  id: string;
  title: string;
  songs: MusicalSong[];
};

export const MUSICAL_PROGRAM_INTRO =
  "Canciones del espectáculo, acto por acto.";

export const MUSICAL_PROGRAM_ACTS: MusicalAct[] = [
  {
    id: "primer-acto",
    title: "Primer Acto",
    songs: [
      {
        number: "01",
        title: "SAN FELIPE",
        lyrics: "Diego De Obaldía",
        music: "Diego De Obaldía & Eduardo Charry",
      },
      {
        number: "02",
        title: "NO SE GANA (PERO SE GOZA)",
        lyrics: "Diego De Obaldía",
        music: "Diego De Obaldía & Eduardo Charry",
      },
      {
        number: "03",
        title: "ARTISTAS SEPARATISTAS",
        lyrics: "Diego De Obaldía",
        music: "Mista Bombo",
      },
      {
        number: "04",
        title: "DUELO EN EL CONGRESO",
        lyrics: "Diego De Obaldía",
        music: "Gustavo Salamín",
      },
      {
        number: "05",
        title: "PHILIPPE BUNAU-VARILLA",
        lyrics: "Diego De Obaldía",
        music: "Diego De Obaldía & Eduardo Charry",
      },
      {
        number: "06",
        title: "ERES MI HOGAR",
        lyrics: "Alejandro Lagrotta & Diego De Obaldía",
        music: "Alejandro Lagrotta",
      },
      {
        number: "07",
        title: "EL NEGOCIO DE LA SEPARACIÓN",
        lyrics: "Diego De Obaldía",
        music: "Diego De Obaldía & Eduardo Charry",
      },
      {
        number: "08",
        title: "1162 WALDORF ASTORIA",
        lyrics: "Diego De Obaldía",
        music: "Diego De Obaldía & Eduardo Charry",
      },
      {
        number: "09",
        title: "HEAVY METAL",
        lyrics: "Diego De Obaldía",
        music: "Noel Sánchez & Randy Domínguez",
      },
      {
        number: "10",
        title: "BANDERA",
        lyrics: "Diego De Obaldía, Aaron Zebede & Alejandro Lagrotta",
        music:
          "Diego De Obaldía, Aaron Zebede, Eduardo Charry & Alejandro Lagrotta",
      },
      {
        number: "11",
        title: "CON ARDIENTES FULGORES DE GLORIA",
        lyrics: "Diego De Obaldía",
        music: "Aaron Zebede & Eduardo Charry",
      },
    ],
  },
  {
    id: "segundo-acto",
    title: "Segundo Acto",
    songs: [
      {
        number: "01",
        title: "COLÓN (DICE ON)",
        lyrics: "Diego De Obaldía",
        music: "Mista Bombo & Eduardo Charry",
      },
      {
        number: "02",
        title: "SE PARA TU PATRIA",
        lyrics: "Diego De Obaldía & Alejandro Lagrotta",
        music:
          "Alejandro Lagrotta, Diego De Obaldía, Aaron Zebede, Eduardo Charry & Leon Cybul",
      },
      {
        number: "03",
        title: "PIENSA BIEN",
        lyrics: "Diego De Obaldía & Alejandro Lagrotta",
        music:
          "Alejandro Lagrotta, Diego De Obaldía, Eduardo Charry & Leon Cybul",
      },
      {
        number: "04",
        title: "MANIFIESTO / BANDERA (Reprise)",
        lyrics: "Diego De Obaldía & Eusebio A. Morales",
        music:
          "Diego De Obaldía, Eduardo Charry, Aaron Zebede & Alejandro Lagrotta",
      },
      {
        number: "05",
        title: "EL SOBORNO / COLÓN (DICE ON) (Reprise)",
        lyrics: "Diego De Obaldía",
        music: "Mista Bombo & Eduardo Charry",
      },
      {
        number: "06",
        title: "LA FIESTA",
        lyrics: "Mista Bombo, Mr. Fox & Diego De Obaldía",
        music: "Mista Bombo",
      },
      {
        number: "07",
        title: "PARTIDO EN DOS",
        lyrics: "Diego De Obaldía",
        music: "Diego De Obaldía & Eduardo Charry",
      },
      {
        number: "08",
        title: "FINALE",
        music: "Eduardo Charry, Alejandro Lagrotta & Aaron Zebede",
      },
      {
        number: "09",
        title: "LA FIESTA (Cierre)",
        lyrics: "Mr. Fox & Diego De Obaldía",
        music: "Mista Bombo",
      },
    ],
  },
];

export function formatSongCredits(song: MusicalSong): string {
  if (song.lyrics) {
    return `Letra: ${song.lyrics} | Música: ${song.music}`;
  }
  return `Música: ${song.music}`;
}
