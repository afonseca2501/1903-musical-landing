export type SponsorLogo = {
  src: string;
  alt: string;
};

function logoPath(filename: string, folder = "logos") {
  const encoded = filename.split("/").map(encodeURIComponent).join("/");
  return `/assets/${folder}/${encoded}`;
}

function altFromFilename(filename: string) {
  const overrides: Record<string, string> = {
    "ALPHA.webp": "Alpha",
    "ATP.webp": "ATP",
    "BUDGET.webp": "Budget",
    "EVENTOS & EVENTOS.webp": "Eventos & Eventos",
    "Global Bank.webp": "Global Bank",
    "LOGO FONDO TRANSPARENTE.webp": "Aliado",
    "LOGO_TAD_TRANSPARENTE.webp": "TAD",
    "LTDC.webp": "LTDC",
    "Logo horizontal.webp": "Aliado",
    "LogoMuseo01-A.webp": "Museo",
    "LogoOldParrOscuro.webp": "Old Parr",
    "Meeting-&-show-.webp": "Meeting & Show",
    "Momi.webp": "Momi",
    "PHOTO-2026-10-30-08-43-03.webp": "Aliado",
    "RIGSA_Logo_Positivo.webp": "RIGSA",
    "bonlac.webp": "Bonlac",
    "oro-de-cana.webp": "Oro de Caña",
    "panaticket.webp": "Panatickets",
    "Logo Full House.webp": "Full House",
    "Logo Stardust.webp": "Stardust Entertainment",
  };

  if (overrides[filename]) return overrides[filename];

  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Sponsor / ally logos in `public/assets/logos` (excludes `produce/`). */
const SPONSOR_LOGO_FILES = [
  "ALPHA.webp",
  "ATP.webp",
  "BUDGET.webp",
  "EVENTOS & EVENTOS.webp",
  "Global Bank.webp",
  "LOGO FONDO TRANSPARENTE.webp",
  "LOGO_TAD_TRANSPARENTE.webp",
  "LTDC.webp",
  "Logo horizontal.webp",
  "LogoMuseo01-A.webp",
  "LogoOldParrOscuro.webp",
  "Meeting-&-show-.webp",
  "Momi.webp",
  "PHOTO-2026-10-30-08-43-03.webp",
  "RIGSA_Logo_Positivo.webp",
  "bonlac.webp",
  "oro-de-cana.webp",
  "panaticket.webp",
] as const;

/** Production company logos in `public/assets/logos/produce`. */
const PRODUCE_LOGO_FILES = [
  "Logo Full House.webp",
  "Logo Stardust.webp",
] as const;

export const SPONSOR_LOGOS: SponsorLogo[] = SPONSOR_LOGO_FILES.map((filename) => ({
  src: logoPath(filename),
  alt: altFromFilename(filename),
}));

export const PRODUCE_LOGOS: SponsorLogo[] = PRODUCE_LOGO_FILES.map((filename) => ({
  src: logoPath(`produce/${filename}`),
  alt: altFromFilename(filename),
}));

/** Split logos across N columns for a multi-track vertical marquee. */
export function splitSponsorLogoColumns(columns = 3): SponsorLogo[][] {
  const tracks: SponsorLogo[][] = Array.from({ length: columns }, () => []);
  SPONSOR_LOGOS.forEach((logo, index) => {
    tracks[index % columns].push(logo);
  });
  return tracks;
}
