"use client";

import { Reveal } from "@/components/Reveal";
import { IconList } from "@/components/relume/icon-list";
import { FeatureSectionMediaHorizontal } from "@/components/relume/feature-section-media-horizontal";
import { HistoriaVideoSequence } from "@/components/home/historia-video-sequence";

export function HomeFeature(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <FeatureSectionMediaHorizontal
        sectionScheme={"scheme-2"}
        columnRatio={"1:1"}
        sectionPadding={"Top & Bottom"}
        assetHorizontalPosition={"Right"}
        headingText={<>La historia no solo se cuenta. Se vive.</>}
        paragraphText={<>
        <p className="rt-paragraph">
          De las páginas de Con ardientes fulgores de gloria, de Juan David Morgan, al guion de Diego de Obaldía y las tablas del Teatro Nacional de Panamá… hoy nuestra historia cobra vida de una manera nunca antes vista. Bienvenidos a 1903: La Experiencia Inmersiva. Un viaje para descubrir, sentir y saborear los acontecimientos que nos convirtieron en República; una celebración de nuestras raíces y de las culturas que se encontraron en nuestra tierra. Esta vez, no solo serás testigo de la historia. Serás parte de ella.
        </p>
        <p className="rt-paragraph">
          <strong>Cómo vivir la experiencia</strong>
        </p>
        <p className="rt-paragraph">
          Recorre todos los pabellones: cada uno reúne historias, sabores y actividades inspiradas en una ciudad vinculada con el nacimiento de la República. Come Coco Kitchen by La Tapa del Coco ha creado platos especiales para este recorrido.
        </p>
      </>}
        showTagline={true}
        taglineText={"La historia"}
        taglineHasIcon={false}
        showParagraph={true}
        showFeatureSupportingList={false}
        featureSupportingListSlot={<IconList
          items={[{ paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }]}
        />}
        showButtonGroup={false}
        buttonGroupRows={[{ buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
        mediaSlot={
          <Reveal delay={0.15}>
            <HistoriaVideoSequence />
          </Reveal>
        }
        backdropClass={props.backdropClass}
      />
    </Reveal>
  );
}
