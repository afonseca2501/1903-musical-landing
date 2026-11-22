import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HomeHero } from "@/components/home/hero";
import { GlobalStickyNavbar } from "@/components/global/sticky-navbar";

const HomeFeature = dynamic(() =>
  import("@/components/home/feature").then((m) => m.HomeFeature),
);
const HomeFoodMenu = dynamic(() =>
  import("@/components/home/food-menu").then((m) => m.HomeFoodMenu),
);
const HomeDrinksMenu = dynamic(() =>
  import("@/components/home/drinks-menu").then((m) => m.HomeDrinksMenu),
);
const HomeFeature2 = dynamic(() =>
  import("@/components/home/feature2").then((m) => m.HomeFeature2),
);
const HomeFaq = dynamic(() =>
  import("@/components/home/faq").then((m) => m.HomeFaq),
);
const HomeTeam = dynamic(() =>
  import("@/components/home/team").then((m) => m.HomeTeam),
);
const HomeMusicalProgram = dynamic(() =>
  import("@/components/home/musical-program").then((m) => m.HomeMusicalProgram),
);
const HomeNikkiDeRoy = dynamic(() =>
  import("@/components/home/nikki-de-roy").then((m) => m.HomeNikkiDeRoy),
);
const HomeCredibilityList = dynamic(() =>
  import("@/components/home/credibility-list").then(
    (m) => m.HomeCredibilityList,
  ),
);
const GlobalFooter = dynamic(() =>
  import("@/components/global/footer").then((m) => m.GlobalFooter),
);

export const metadata: Metadata = {
  title: "1903: El Musical Inmersivo | Islas de Atlapa, Panamá",
  description:
    "La historia de Panamá cantada con flow moderno. Del 23 de noviembre al 2 de diciembre de 2026 en Islas de Atlapa. Entradas en Panatickets.",
};

export default function HomePage() {
  return (
    <>
      <GlobalStickyNavbar />
      <main id="main-content">
        <div id="hero-poster-y-fechas" className="page-section">
          <HomeHero backdropClass="bg-s188qb" />
        </div>
        <div id="historia" className="page-section">
          <HomeFeature />
        </div>
        <div id="mapa" className="page-section">
          <HomeFeature2 />
        </div>
        <div id="menu-de-comida" className="page-section">
          <HomeFoodMenu />
        </div>
        <div id="menu-de-bebidas" className="page-section">
          <HomeDrinksMenu />
        </div>
        <div id="ficha-tecnica" className="page-section">
          <HomeFaq />
        </div>
        <div id="elenco-estelar" className="page-section">
          <HomeTeam />
        </div>
        <div id="programa" className="page-section">
          <HomeMusicalProgram />
        </div>
        <div id="nikki-de-roy" className="page-section">
          <HomeNikkiDeRoy />
        </div>
        <div id="patrocinadores" className="page-section">
          <HomeCredibilityList />
        </div>
      </main>
      <div id="footer" className="page-section">
        <GlobalFooter />
      </div>
    </>
  );
}
