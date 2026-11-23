export type FoodDish = {
  id: string;
  name: string;
  description: string;
  /** Display price (e.g. "$5.00"). Null → "Precio por confirmar". */
  price: string | null;
  imageSource: string;
};

export type FoodMenuRegion = {
  id: string;
  title: string;
  dishes: FoodDish[];
};

export const FOOD_PLACEHOLDER = "/placeholders/placeholder-8ef0c9cf.svg";

const FOOD_DIR = "/assets/Menu/comidas";

export const FOOD_MENU_INTRO =
  "Come Coco Kitchen by La Tapa del Coco · Propuesta gastronómica creada para la experiencia, inspirada en las ciudades que marcaron la historia de 1903.";

export const FOOD_MENU_REGIONS: FoodMenuRegion[] = [
  {
    id: "san-felipe",
    title: "San Felipe",
    dishes: [
      {
        id: "patty-de-tamal",
        name: "Patty de Tamal",
        description:
          "Patty rellena de masa de tamal y costillita con guiso panameño.",
        price: "$5.00",
        imageSource: `${FOOD_DIR}/patty-de-tamal.webp`,
      },
    ],
  },
  {
    id: "paris",
    title: "París",
    dishes: [
      {
        id: "plantain-tart-french-toast",
        name: "Plantain Tart French Toast",
        description:
          "Brioche caramelizado hecho en casa, relleno de plantain tart y helado de vainilla.",
        price: "$8.00",
        imageSource: `${FOOD_DIR}/plantain-tart-french-toast.webp`,
      },
    ],
  },
  {
    id: "usa",
    title: "Estados Unidos",
    dishes: [
      {
        id: "smoky-dog",
        name: "Smoky Dog",
        description:
          "Salchicha ahumada en sweet roll con mantequilla de ajo, jerkchup, tártara, scovitch y chips de plátano.",
        price: "$10.00",
        imageSource: `${FOOD_DIR}/smoky-dog.webp`,
      },
      {
        id: "chili-cheese-melt",
        name: "Chili Cheese Melt",
        description:
          "Emparedado relleno de chili con carne y queso derretido, servido con pepinillos caseros.",
        price: "$8.00",
        imageSource: `${FOOD_DIR}/chili-cheese-melt.webp`,
      },
    ],
  },
  {
    id: "colon",
    title: "Colón",
    dishes: [
      {
        id: "patty-de-carne",
        name: "Patty de Carne",
        description:
          "Empanada caribeña rellena de carne, tomillo y ají chombo.",
        price: "$5.00",
        imageSource: `${FOOD_DIR}/patty-de-carne.webp`,
      },
      {
        id: "dominguera-patty",
        name: "Dominguera Patty",
        description:
          "Patty rellena de doble proteína, arrocito con coco, curry colonense y tajada madura.",
        price: "$8.00",
        imageSource: `${FOOD_DIR}/dominguera-patty.webp`,
      },
      {
        id: "mild-jerk-chicken-bowl",
        name: "Mild Jerk Chicken Bowl",
        description:
          "Mild jerk chicken desmechado en salsa de tomate ahumada, sobre base de arroz con frijoles, vegetales frescos, vinagreta Chinatown, cebolla crispy y un toque de chili oil.",
        price: "$10.00",
        imageSource: `${FOOD_DIR}/mild-jerk-chicken-bowl.webp`,
      },
    ],
  },
  {
    id: "bogota",
    title: "Bogotá",
    dishes: [
      {
        id: "arepa-de-pastrami",
        name: "Arepa de Pastrami",
        description:
          "Arepa rellena de pastrami, oxtail, aguacate, queso costeño y frijoles rojos.",
        price: "$10.00",
        imageSource: `${FOOD_DIR}/arepa-de-pastrami.webp`,
      },
    ],
  },
];
