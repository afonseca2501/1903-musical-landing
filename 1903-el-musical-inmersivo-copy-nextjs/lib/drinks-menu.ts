export type DrinkItem = {
  id: string;
  name: string;
  /** Mixers / serving notes shown under the name. */
  detail?: string;
  price: string;
};

export type DrinkCategory = {
  id: string;
  title: string;
  items: DrinkItem[];
};

export const DRINKS_MENU_INTRO =
  "PANABAR 1903 · Carta de bebidas con precios en USD. Incluye mixers donde aplica.";

export const DRINK_CATEGORIES: DrinkCategory[] = [
  {
    id: "espumante",
    title: "Espumante",
    items: [
      {
        id: "cava-vilarnau-rosado",
        name: "Botella Cava Vilarnau Rosado",
        price: "$60.00",
      },
      {
        id: "copa-mionetto-proseco",
        name: "Copa Mionetto proseco",
        price: "$10.00",
      },
    ],
  },
  {
    id: "vino",
    title: "Vino",
    items: [
      {
        id: "copa-beronia-verdejo",
        name: "Copa Beronia Verdejo",
        detail: "blanco",
        price: "$8.00",
      },
      {
        id: "botella-beronia-verdejo",
        name: "Botella Beronia Verdejo",
        detail: "blanco",
        price: "$45.00",
      },
      {
        id: "copa-beronia-crianza",
        name: "Copa Beronia Crianza",
        detail: "tinto",
        price: "$7.00",
      },
      {
        id: "botella-beronia-crianza",
        name: "Botella Beronia Crianza",
        detail: "tinto",
        price: "$45.00",
      },
    ],
  },
  {
    id: "whisky",
    title: "Whisky",
    items: [
      {
        id: "trago-old-parr-12",
        name: "Trago Old Parr 12",
        detail: "agua, Perrier o Coca-Cola",
        price: "$10.00",
      },
      {
        id: "botella-old-parr-12",
        name: "Botella Old Parr 12",
        detail: "incluye 2 mezcladores",
        price: "$110.00",
      },
      {
        id: "coctel-old-parr-mule",
        name: "Coctel Old Parr Mule",
        price: "$12.00",
      },
      {
        id: "trago-whisky-18",
        name: "Trago whisky 18 años",
        detail: "agua, Perrier o Coca-Cola",
        price: "$12.00",
      },
      {
        id: "botella-whisky-18",
        name: "Botella whisky 18 años",
        detail: "incluye 3 latas de mezcladores",
        price: "$160.00",
      },
    ],
  },
  {
    id: "gin",
    title: "Gin",
    items: [
      {
        id: "gin-tonic-tanqueray",
        name: "Gin tonic Tanqueray",
        price: "$10.00",
      },
      {
        id: "botella-tanqueray",
        name: "Botella Tanqueray",
        detail: "incluye 2 mezcladores",
        price: "$75.00",
      },
    ],
  },
  {
    id: "tequila",
    title: "Tequila",
    items: [
      {
        id: "trago-don-julio",
        name: "Trago Don Julio",
        detail: "agua, Perrier o Ginger",
        price: "$12.00",
      },
      {
        id: "botella-don-julio",
        name: "Botella Don Julio",
        detail: "incluye 2 Perrier",
        price: "$110.00",
      },
      {
        id: "trago-margarita",
        name: "Trago Margarita",
        price: "$12.00",
      },
    ],
  },
  {
    id: "vodka",
    title: "Vodka",
    items: [
      {
        id: "trago-smirnoff-tonica",
        name: "Trago Smirnoff con tónica",
        price: "$8.00",
      },
      {
        id: "botella-smirnoff",
        name: "Botella Smirnoff",
        detail: "incluye 2 mezcladores",
        price: "$50.00",
      },
    ],
  },
  {
    id: "ron",
    title: "Ron",
    items: [
      {
        id: "trago-ron-abuelo",
        name: "Trago Ron Abuelo Añejo",
        detail: "Perrier, agua o Coca-Cola",
        price: "$8.00",
      },
      {
        id: "botella-ron-abuelo",
        name: "Botella Ron Abuelo Añejo",
        detail: "incluye 1 mezclador",
        price: "$70.00",
      },
      {
        id: "botella-seco-herrerano-cristalino-reposado",
        name: "Botella Seco Herrerano Cristalino Reposado",
        detail: "incluye 2 mezcladores",
        price: "$60.00",
      },
    ],
  },
  {
    id: "cerveza",
    title: "Cerveza",
    items: [
      {
        id: "cerveza-nacional",
        name: "Cerveza nacional",
        price: "$5.00",
      },
      {
        id: "cerveza-importada",
        name: "Cerveza importada",
        price: "$7.00",
      },
    ],
  },
  {
    id: "mezcladores",
    title: "Mezcladores",
    items: [
      {
        id: "jugo-naranja",
        name: "Jugo de naranja Litro",
        price: "$6.00",
      },
      {
        id: "jugo-cranberry",
        name: "Jugo de cranberry Litro",
        price: "$6.00",
      },
      {
        id: "agua-tonica",
        name: "Agua tónica",
        price: "$3.00",
      },
      {
        id: "club-soda",
        name: "Club soda",
        price: "$3.00",
      },
      {
        id: "ginger-beer",
        name: "Ginger Beer Lata",
        price: "$3.00",
      },
    ],
  },
  {
    id: "aguas-sin-alcohol",
    title: "Aguas y bebidas sin alcohol",
    items: [
      {
        id: "perrier-lemon",
        name: "Perrier Lemon",
        detail: "lata",
        price: "$5.00",
      },
      {
        id: "perrier-strawberry",
        name: "Perrier Strawberry",
        detail: "lata",
        price: "$5.00",
      },
      {
        id: "coca-cola-regular",
        name: "Coca-Cola regular",
        price: "$4.00",
      },
      {
        id: "coca-cola-zero",
        name: "Coca-Cola Zero",
        price: "$4.00",
      },
      {
        id: "ginger-ale",
        name: "Ginger Ale",
        price: "$4.00",
      },
      {
        id: "agua-panama-blue",
        name: "Agua Panama Blue",
        price: "$3.00",
      },
    ],
  },
];
