"use client";

import { IconList } from "@/components/relume/icon-list";
import { FaqSectionListLeftVertical } from "@/components/relume/faq-section-list-left-vertical";

export function HomeFaq(props: { backdropClass?: string }) {
  return (
    <FaqSectionListLeftVertical
      sectionPadding={"Top & Bottom"}
      headingText={<>Quién hace posible 1903</>}
      sectionScheme={"scheme-1"}
      sectionRole={"Section"}
      showSectionContentBlock={true}
      paragraphText={<>
      El equipo creativo y técnico detrás de la producción, más los doce músicos que tocan en vivo cada función.
    </>}
      itemsRows={[{ buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
      showTagline={true}
      taglineText={"Ficha técnica"}
      taglineHasIcon={false}
      showHeading={true}
      showParagraph={true}
      showSupportingList={false}
      supportingListSlot={<IconList
        items={[{ paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }]}
      />}
      showButtonGroup={false}
      faqListRows={[{ faqQuestion: <>Libreto y música original</>, faqAnswer: <>
      <p className="rt-paragraph">
        <strong>{"Libreto: "}</strong>
        Diego de Obaldía
      </p>
      <p className="rt-paragraph">
        <strong>{"Música original: "}</strong>
        Alejandro Lagrotta, Eduardo Charry, Diego de Obaldía, Aaron Zebede, Noel Sánchez y Arian Abadi
      </p>
    </> }, { faqQuestion: <>Dirección y producción</>, faqAnswer: <>
      <p className="rt-paragraph">
        <strong>{"Dirección artística: "}</strong>
        Aaron Zebede
      </p>
      <p className="rt-paragraph">
        <strong>{"Asistente del director: "}</strong>
        Ana Melissa Durán
      </p>
      <p className="rt-paragraph">
        <strong>{"Dirección musical, arreglo vocal y sonido: "}</strong>
        José «Pepe» Casís
      </p>
      <p className="rt-paragraph">
        <strong>{"Dirección de orquesta: "}</strong>
        Eduardo Charry
      </p>
      <p className="rt-paragraph">
        <strong>{"Coreografías: "}</strong>
        Maryelin Barahona
      </p>
      <p className="rt-paragraph">
        <strong>{"Producción: "}</strong>
        Stardust Entertainment, Full House Entertainment y Alpha Productions
      </p>
    </> }, { faqQuestion: <>Escenografía, vestuario e iluminación</>, faqAnswer: <>
      <p className="rt-paragraph">
        <strong>{"Confección de escenografía: "}</strong>
        Rafael Navarro
      </p>
      <p className="rt-paragraph">
        <strong>{"Realización de escenografía: "}</strong>
        NAFER, S.A.
      </p>
      <p className="rt-paragraph">
        <strong>{"Diseño de iluminación: "}</strong>
        Eric De León
      </p>
      <p className="rt-paragraph">
        <strong>{"Diseño de vestuario: "}</strong>
        Jaime Ávila
      </p>
      <p className="rt-paragraph">
        <strong>{"Diseño del mercado inmersivo: "}</strong>
        Kenia Rodríguez y María Fernanda Achurra
      </p>
      <p className="rt-paragraph">
        <strong>{"Confección del mercado inmersivo: "}</strong>
        Proyectos Gráficos y Estructuras
      </p>
    </> }, { faqQuestion: <>Equipo técnico y backstage</>, faqAnswer: <>
      <p className="rt-paragraph">
        <strong>{"Ingeniero de sonido: "}</strong>
        Eduardo Bosano
      </p>
      <p className="rt-paragraph">
        <strong>{"Asistente de audio y microfonía: "}</strong>
        Ángelo Flores
      </p>
      <p className="rt-paragraph">
        <strong>{"Operadores de consola: "}</strong>
        Alexa Casanova y Ferdinand Suárez
      </p>
      <p className="rt-paragraph">
        <strong>{"Diseño y manejo de pantallas: "}</strong>
        Joey Lalo
      </p>
      <p className="rt-paragraph">
        <strong>{"Luces, sonido, pantallas y tarimas: "}</strong>
        {"Meeting & Show"}
      </p>
      <p className="rt-paragraph">
        <strong>{"Coordinación de escena y utilería: "}</strong>
        Ana Fernández
      </p>
      <p className="rt-paragraph">
        <strong>{"Asistentes de producción: "}</strong>
        Kenia Rodríguez, Sandra Saavedra, Marlane Salazar e Isabella De Freitas
      </p>
      <p className="rt-paragraph">
        <strong>{"Backstage: "}</strong>
        Michell Martínez, Victoria Arias, William Badillo, Alejandro Valery y Mateo Nariño
      </p>
      <p className="rt-paragraph">
        <strong>{"Perseguidoras: "}</strong>
        Marcelo Quiñones y Alex Lefevre
      </p>
      <p className="rt-paragraph">
        <strong>{"Maquillaje: "}</strong>
        Bolívar Aparicio
      </p>
    </> }, { faqQuestion: <>Comunicación, programa y boletería</>, faqAnswer: <>
      <p className="rt-paragraph">
        <strong>{"Programa de mano: "}</strong>
        Anthony Fonseca
      </p>
      <p className="rt-paragraph">
        <strong>{"Fotografía y flyer oficial: "}</strong>
        Javier Alejandro Solís
      </p>
      <p className="rt-paragraph">
        <strong>{"Producción de videos: "}</strong>
        Mariano González
      </p>
      <p className="rt-paragraph">
        <strong>{"Edición de videos: "}</strong>
        Rodrigo Reyes Ulala
      </p>
      <p className="rt-paragraph">
        <strong>{"Coordinación de mercadeo: "}</strong>
        MaFe Casís
      </p>
      <p className="rt-paragraph">
        <strong>{"Community manager: "}</strong>
        Jesús «Yisus» Marín
      </p>
      <p className="rt-paragraph">
        <strong>{"Boletería: "}</strong>
        Panatickets, Victora Trejos
      </p>
    </> }, { faqQuestion: <>La orquesta en vivo</>, faqAnswer: <>
      <p className="rt-paragraph">
        <strong>{"Dirección, piano y teclados: "}</strong>
        Eduardo Charry
      </p>
      <p className="rt-paragraph">
        <strong>{"Guitarra acústica y eléctrica: "}</strong>
        Daniel Mellado
      </p>
      <p className="rt-paragraph">
        <strong>{"Guitarra eléctrica y mejoranera: "}</strong>
        Gustavo Salamín
      </p>
      <p className="rt-paragraph">
        <strong>{"Bajo eléctrico: "}</strong>
        Hever Montero
      </p>
      <p className="rt-paragraph">
        <strong>{"Percusión: "}</strong>
        Juan Pablo Ordoñez
      </p>
      <p className="rt-paragraph"><strong>{"Batería: "}</strong>Luis Mitil</p>
      <p className="rt-paragraph">
        <strong>{"Violín: "}</strong>
        Arlene Magallón
      </p>
      <p className="rt-paragraph"><strong>{"Violín: "}</strong>Gerardo Roa</p>
      <p className="rt-paragraph">
        <strong>{"Cello: "}</strong>
        Alejandra Ordoñez
      </p>
      <p className="rt-paragraph">
        <strong>{"Trompeta y flugelhorn: "}</strong>
        Alex Rodríguez
      </p>
      <p className="rt-paragraph">
        <strong>{"Saxofón tenor y flauta: "}</strong>
        Néstor González
      </p>
      <p className="rt-paragraph">
        <strong>{"Trombón: "}</strong>
        Héctor Torres
      </p>
    </> }]}
      showSectionCtaBlock={false}
      buttonsRows={[{ buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
      backdropClass={props.backdropClass}
    />
  );
}
