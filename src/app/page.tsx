import { Elenco } from "@/components/Elenco";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Historia } from "@/components/Historia";
import { MapaMercado } from "@/components/MapaMercado";
import { MenuExperiencia } from "@/components/MenuExperiencia";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <MapaMercado />
        <Elenco />
        <MenuExperiencia />
      </main>
      <Footer />
    </>
  );
}
