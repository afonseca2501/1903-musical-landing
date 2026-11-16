import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { HomeFeature } from "@/components/home/feature";
import { HomeFoodMenu } from "@/components/home/food-menu";
import { HomeDrinksMenu } from "@/components/home/drinks-menu";
import { HomeFeature2 } from "@/components/home/feature2";
import { HomeFaq } from "@/components/home/faq";
import { HomeTeam } from "@/components/home/team";
import { HomeMusicalProgram } from "@/components/home/musical-program";
import { HomeNikkiDeRoy } from "@/components/home/nikki-de-roy";
import { HomeCredibilityList } from "@/components/home/credibility-list";
import { GlobalStickyNavbar } from "@/components/global/sticky-navbar";
import { GlobalFooter } from "@/components/global/footer";

export const metadata: Metadata = {
  title: "1903: El Musical Inmersivo | Islas de Atlapa, Panamá",
  description: "La historia de Panamá cantada con flow moderno. Del 23 de noviembre al 2 de diciembre de 2026 en Islas de Atlapa. Entradas en Panatickets.",
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
        <div id="menu-de-comida" className="page-section">
          <HomeFoodMenu />
        </div>
        <div id="menu-de-bebidas" className="page-section">
          <HomeDrinksMenu />
        </div>
        <div id="mapa" className="page-section">
          <HomeFeature2 />
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
