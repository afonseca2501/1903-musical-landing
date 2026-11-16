export type FoodDish = {
  name: string;
};

export type FoodMenuRegion = {
  id: string;
  title: string;
  dishes: FoodDish[];
};

export const FOOD_MENU_INTRO =
  "Come Coco Kitchen by La Tapa del Coco · Propuesta gastronómica creada para la experiencia, inspirada en las ciudades que marcaron la historia de 1903.";

export const FOOD_MENU_REGIONS: FoodMenuRegion[] = [
  {
    id: "san-felipe",
    title: "San Felipe",
    dishes: [
      { name: "Patty de tamal" },
      { name: "París" },
      { name: "Brioche de plantain tart con helado" },
    ],
  },
  {
    id: "estados-unidos",
    title: "Estados Unidos (Washington y Nueva York)",
    dishes: [{ name: "Smoky Dog" }, { name: "Chilli Cheese Melt" }],
  },
  {
    id: "colon",
    title: "Colón",
    dishes: [
      { name: "Patty de carne" },
      { name: "Dominguera" },
      { name: "Bowl de jawarma" },
    ],
  },
  {
    id: "bogota",
    title: "Bogotá",
    dishes: [{ name: "Arepa" }],
  },
];
