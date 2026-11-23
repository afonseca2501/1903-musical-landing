export type MapGuideBlock = {
  label?: string;
  text: string;
};

export type MapGuideItem = {
  id: string;
  title: string;
  /** Map marker codes shown on the printed plano (e.g. "1", "5A", "X"). */
  codes: string[];
  lead?: string;
  blocks: MapGuideBlock[];
};

export const MAP_GUIDE_INTRO =
  "Explora cada pabellón del recorrido. Abre un punto del mapa para saber qué encontrarás, qué saborear y qué vivir antes de entrar al teatro.";

export const MAP_GUIDE_ITEMS: MapGuideItem[] = [
  {
    id: "arrabal-santa-ana",
    title: "Puerta de tierra · Entrada y salida",
    codes: ["A"],
    lead: "El comienzo de nuestro viaje.",
    blocks: [
      {
        text: "En el Panamá colonial, el Arrabal de Santa Ana era un barrio de comerciantes, artesanos y vecinos de distintas culturas, fuera de la ciudad amurallada de San Felipe. La Puerta de Tierra conectaba ambos espacios: se abría durante el día para el tránsito de personas y mercancías y se cerraba de noche como medida de protección. Atraviésala y viaja al pasado.",
      },
      {
        label: "Servicios",
        text: "Entrada y salida del espectáculo. Baños ubicados en el Arrabal de Santa Ana.",
      },
    ],
  },
  {
    id: "san-felipe",
    title: "Pabellón San Felipe",
    codes: ["1"],
    lead: "El escenario donde nació nuestra República.",
    blocks: [
      {
        label: "1 · Historia del Casco Antiguo · Oficina del Casco Antiguo",
        text: "De la fundación de la nueva ciudad en 1673 hasta el presente.",
      },
      {
        label: "2 · Come Coco Kitchen · Rest.-Bar",
        text: "Patty de tamal.",
      },
      {
        label: "Seco de Oro",
        text: "Experiencia de coctelería con Seco de Oro.",
      },
    ],
  },
  {
    id: "paris",
    title: "Pabellón París",
    codes: ["3"],
    lead: "La conexión francesa con el destino del Canal de Panamá.",
    blocks: [
      {
        label: "Café de la Paix",
        text: "Un café inspirado en el París de la Belle Époque.",
      },
      {
        label: "Come Coco Kitchen",
        text: "Brioche de plantain tart con helado.",
      },
      {
        label: "Barra de Burbujas",
        text: "Vinos espumantes para brindar al estilo parisino.",
      },
    ],
  },
  {
    id: "estados-unidos",
    title: "Pabellón Estados Unidos · Washington y Nueva York",
    codes: ["4"],
    lead: "Dos ciudades, un capítulo decisivo para el futuro de Panamá.",
    blocks: [
      {
        label: "Washington",
        text: "La fachada evoca el centro político estadounidense.",
      },
      {
        label: "Nueva York · Waldorf Astoria",
        text: "El interior recrea la atmósfera del antiguo hotel y su habitación 1162, vinculada en la narrativa de 1903 con Manuel Amador Guerrero y Philippe Bunau-Varilla.",
      },
      {
        label: "Come Coco Kitchen · Estados Unidos",
        text: "Smoky Dog · Chilli Cheese Melt.",
      },
      {
        label: "Come Coco Kitchen · Bogotá",
        text: "Arepa, servida también en esta zona.",
      },
      {
        label: "Old Parr",
        text: "Oportunidad fotográfica.",
      },
    ],
  },
  {
    id: "colon",
    title: "Pabellón Colón",
    codes: ["5A"],
    lead: "El ferrocarril que conectó dos océanos y transformó nuestra historia.",
    blocks: [
      {
        label: "5A · Come Coco Kitchen · Rest",
        text: "Patty de carne · Dominguera · Bowl de jawarma.",
      },
      {
        label: "5B · Mesas · Ferrocarril de Panamá",
        text: "Siéntate y disfruta de un momento dentro de un vagón inspirado en el ferrocarril, acompañado por los personajes de 1903.",
      },
    ],
  },
  {
    id: "bogota",
    title: "Pabellón Bogotá",
    codes: ["6"],
    lead: "Una nación, dos caminos. El despecho de una separación.",
    blocks: [
      {
        label: "Bar del Despecho",
        text: "Inspirado en la separación de Panamá y Colombia y en la canción «Partido en dos».",
      },
      {
        label: "Barra principal",
        text: "Punto principal de venta de bebidas. Ver menú de bebidas.",
      },
    ],
  },
  {
    id: "plaza-independencia",
    title: "Plaza de la Independencia",
    codes: ["X"],
    lead: "El corazón de nuestra celebración: experiencias, tiendas y sabores para descubrir.",
    blocks: [
      {
        label: "X · Plaza y gazebo",
        text: "Punto central de la plaza para encontrarse, celebrar y orientarse en el recorrido.",
      },
      {
        label: "Experiencia Don Julio · Un mensaje a la Patria",
        text: "Entra a la cabina telefónica y deja un mensaje dedicado a Panamá.",
      },
      {
        label: "7A · Eventos & Eventos · Pop Deli",
        text: "Palomitas de maíz dulces y saladas.",
      },
      {
        label: "7B · Sedería La Dalia · Tienda oficial de 1903",
        text: "Inspirada en la tienda donde María Rosa compró sus telas. Compra mercancía oficial y personaliza gorras con bordados.",
      },
      {
        label: "8A · Experiencia Global Bank",
        text: "Activación por definir: caricaturista en vivo o experiencia de chocolates.",
      },
      {
        label: "8B · TAD by Todo a Dollar",
        text: "¡Más panameño que nunca! Artículos inspirados en Panamá y sus tradiciones.",
      },
      {
        label: "8C · Heladería Bonlac · Calidad que da gusto",
        text: "Degustación de helados nacionales y dulces panameños. Sabores: Philippe Bunau Vainilla (vainilla) · Galleta María Ossa (galleta María) · Dulce Separación (dulce de leche) · Choco-lón (chocolate).",
      },
    ],
  },
  {
    id: "prision",
    title: "La Prisión",
    codes: ["9"],
    lead: "¿Te atreves a quedar tras las rejas de 1903?",
    blocks: [
      {
        text: "Descubre una referencia a las prisiones de la época y a Victoriano Lorenzo, líder liberal e indígena ejecutado en 1903.",
      },
      {
        label: "Oportunidad fotográfica",
        text: "Entra a la prisión escenográfica y llévate una fotografía tras las rejas.",
      },
    ],
  },
  {
    id: "entrada-teatro",
    title: "Entrada al teatro",
    codes: ["B"],
    lead: "El gran momento ha llegado.",
    blocks: [
      {
        text: "Después de recorrer los pabellones, entra al teatro y prepárate para presenciar los acontecimientos que cambiaron el destino de Panamá.",
      },
    ],
  },
];
