"use client";

import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/relume/media";
import { IconList } from "@/components/relume/icon-list";
import { FeatureListSectionLeftVertical } from "@/components/relume/feature-list-section-left-vertical";

export function HomeFeatureList(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <FeatureListSectionLeftVertical
        sectionScheme={"scheme-3"}
        sectionPadding={"Top & Bottom"}
        showSectionContentBlock={true}
        headingText={<>El menú y la experiencia inmersiva</>}
        paragraphText={<>
        Antes de la función y en el intermedio, el mercado inmersivo de Islas de Atlapa abre con oferta gastronómica y bebidas temáticas de la época.
      </>}
        itemsRows={[{ buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
        showTagline={true}
        taglineText={"Dentro del recinto"}
        taglineHasIcon={false}
        showHeading={true}
        showParagraph={true}
        showSupportingList={false}
        supportingListSlot={<IconList
          items={[{ paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }]}
        />}
        showAction={false}
        actionRows={[{ buttonHierarchy: "Primary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }, { buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
        featureListRows={[
          {
            showItemMedia: true,
            itemMediaSlot: (
              <Media
                imageFit={"Cover"}
                imageObjectPosition={"Center"}
                mediaWidth={"100%"}
                aspectRatio={"Square"}
                mediaType={"Image"}
                imageSource={"/assets/dentroRecinto/1.webp"}
                placeholderType={"Photography"}
              />
            ),
            showHeading: true,
            headingText: <>Mercado inmersivo</>,
            showTagline: false,
            taglineHasIcon: false,
            showParagraph: true,
            paragraphText: <>
              Un mercado de 1903 construido dentro del recinto: puestos y vitrinas que puedes recorrer antes de entrar a la sala.
            </>,
            showButtonGroup: false,
            buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }],
          },
          {
            showItemMedia: true,
            itemMediaSlot: (
              <Media
                imageFit={"Cover"}
                imageObjectPosition={"Center"}
                mediaWidth={"100%"}
                aspectRatio={"Square"}
                mediaType={"Image"}
                imageSource={"/assets/dentroRecinto/2.webp"}
                placeholderType={"Photography"}
              />
            ),
            showHeading: true,
            headingText: <>Sabores de la época</>,
            showTagline: false,
            taglineHasIcon: false,
            showParagraph: true,
            paragraphText: <>
              Oferta gastronómica servida en el mercado durante la temporada, para comer antes de la función o en el intermedio.
            </>,
            showButtonGroup: false,
            buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }],
          },
          {
            showItemMedia: true,
            itemMediaSlot: (
              <Media
                imageFit={"Cover"}
                imageObjectPosition={"Center"}
                mediaWidth={"100%"}
                aspectRatio={"Square"}
                mediaType={"Image"}
                imageSource={"/assets/dentroRecinto/3.webp"}
                placeholderType={"Photography"}
              />
            ),
            showHeading: true,
            headingText: <>Bebidas temáticas</>,
            showTagline: false,
            taglineHasIcon: false,
            showParagraph: true,
            paragraphText: <>
              Coctelería y bebidas sin alcohol pensadas para la obra, con nombres que salen de la historia.
            </>,
            showButtonGroup: false,
            buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }],
          },
        ]}
        backdropClass={props.backdropClass}
      />
    </Reveal>
  );
}
