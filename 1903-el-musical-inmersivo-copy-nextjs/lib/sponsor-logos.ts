export type SponsorLogoShape = "horizontal" | "compact";
export type SponsorLogoScale = "default" | "prominent";

export type SponsorLogo = {
  src: string;
  alt: string;
  shape: SponsorLogoShape;
  scale: SponsorLogoScale;
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
    "LOGO FONDO TRANSPARENTE.webp": "Fundación Nikki de Roy",
    "LOGO_TAD_TRANSPARENTE.webp": "TAD",
    "LTDC.webp": "La Tapa del Coco",
    "Logo horizontal.webp": "Aliado institucional",
    "LogoMuseo01-A.webp": "Museo del Casco Antiguo",
    "LogoOldParrOscuro.webp": "Old Parr",
    "Meeting-&-show-.webp": "Meeting & Show",
    "Momi.webp": "Momi",
    "PHOTO-2026-10-30-08-43-03.webp": "Aliado institucional",
    "RIGSA_Logo_Positivo.webp": "RIGSA",
    "bonlac.webp": "Bonlac",
    "oro-de-cana.webp": "Oro de Caña",
    "panaticket.webp": "Panatickets",
    "SecoHerrerano.webp": "Seco Herrerano",
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

/** Compact / square / vertical marks — sized by max-height. */
const COMPACT_LOGO_FILES = new Set([
  "LOGO FONDO TRANSPARENTE.webp",
  "LOGO_TAD_TRANSPARENTE.webp",
  "LTDC.webp",
  "Logo horizontal.webp",
  "LogoMuseo01-A.webp",
]);

/**
 * Logos that read too small at the default scale — bump presence.
 * Compact → taller (h-16 / h-20). Horizontal → wider (w-40 / w-48).
 */
const PROMINENT_LOGO_FILES = new Set([
  "ATP.webp",
  "Global Bank.webp",
  "LOGO FONDO TRANSPARENTE.webp",
  "LOGO_TAD_TRANSPARENTE.webp",
  "LTDC.webp",
  "Logo horizontal.webp",
  "LogoMuseo01-A.webp",
  "PHOTO-2026-10-30-08-43-03.webp",
]);

function shapeFromFilename(filename: string): SponsorLogoShape {
  return COMPACT_LOGO_FILES.has(filename) ? "compact" : "horizontal";
}

function scaleFromFilename(filename: string): SponsorLogoScale {
  return PROMINENT_LOGO_FILES.has(filename) ? "prominent" : "default";
}

/** Sponsor / ally logos in `public/assets/logos` (excludes `produce/`). */
const SPONSOR_LOGO_FILES = [
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
  "SecoHerrerano.webp",
  "bonlac.webp",
  "oro-de-cana.webp",
  "panaticket.webp",
] as const;

/** Production company logos in `public/assets/logos/produce`. */
const PRODUCE_LOGO_FILES = [
  "Logo Full House.webp",
  "Logo Stardust.webp",
  "ALPHA.webp",
] as const;

export const SPONSOR_LOGOS: SponsorLogo[] = SPONSOR_LOGO_FILES.map((filename) => ({
  src: logoPath(filename),
  alt: altFromFilename(filename),
  shape: shapeFromFilename(filename),
  scale: scaleFromFilename(filename),
}));

export const PRODUCE_LOGOS: SponsorLogo[] = PRODUCE_LOGO_FILES.map((filename) => ({
  src: logoPath(`produce/${filename}`),
  alt: altFromFilename(filename),
  shape: "horizontal" as const,
  scale: "default" as const,
}));

/** Split logos across N columns for a multi-track vertical marquee. */
export function splitSponsorLogoColumns(columns = 3): SponsorLogo[][] {
  const tracks: SponsorLogo[][] = Array.from({ length: columns }, () => []);
  SPONSOR_LOGOS.forEach((logo, index) => {
    tracks[index % columns].push(logo);
  });
  return tracks;
}
