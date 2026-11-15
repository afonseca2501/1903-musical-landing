"use client";

import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/relume/media";
import { TextList } from "@/components/relume/text-list";
import { FeatureSectionMediaHorizontal } from "@/components/relume/feature-section-media-horizontal";

export function HomeFeature2(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <FeatureSectionMediaHorizontal
        sectionScheme={"scheme-1"}
        columnRatio={"1:1"}
        sectionPadding={"Top & Bottom"}
        assetHorizontalPosition={"Left"}
        headingText={<>Cómo está distribuido el recinto</>}
        paragraphText={<>
        El recinto se organiza alrededor de la plaza central: restaurantes y bares a los costados, experiencias y servicios en el corredor este. Los números del plano corresponden a esta lista, y los accesos A y B marcan la entrada principal y el acceso de shows.
      </>}
        showTagline={true}
        taglineText={"Para ubicarte"}
        taglineHasIcon={false}
        showParagraph={true}
        showFeatureSupportingList={true}
        featureSupportingListSlot={
          <Reveal delay={0.12}>
            <TextList
              items={[{ paragraphText: <><strong>X</strong>{" · PLAZA Y GAZEBO"}</> }, { paragraphText: <><strong>1</strong>{" · SAN FELIPE (MUSEO OCA)"}</> }, { paragraphText: <><strong>2</strong>{" · SAN FELIPE (REST.-BAR)"}</> }, { paragraphText: <><strong>3</strong>{" · PARIS (REST.-BAR)"}</> }, { paragraphText: <><strong>4</strong>{" · ESTADOS UNIDOS (REST.)"}</> }, { paragraphText: <><strong>5A</strong>{" · COLÓN (REST)"}</> }, { paragraphText: <><strong>5B</strong>{" · COLÓN (MESAS)"}</> }, { paragraphText: <><strong>6</strong>{" · BOGOTÁ (BAR PRINCIPAL)"}</> }, { paragraphText: <><strong>7A</strong>{" · EVENTOS & EVENTOS"}</> }, { paragraphText: <><strong>7B</strong>{" · LA DALIA (SEDERÍA)"}</> }, { paragraphText: <><strong>8A</strong>{" · GLOBAL BANK"}</> }, { paragraphText: <><strong>8B</strong>{" · TAD (TIENDA)"}</> }, { paragraphText: <><strong>8C</strong>{" · BONLAC (HELADERÍA)"}</> }, { paragraphText: <><strong>9</strong>{" · PRISIÓN (PHOTO OPP)"}</> }, { paragraphText: <><strong>A</strong>{" · «PUERTA DE TIERRA» ACCESO PRINCIPAL"}</> }, { paragraphText: <><strong>B</strong>{" · ARCOS (ACCESO SHOWS)"}</> }]}
              listMarker={"None"}
            />
          </Reveal>
        }
        showButtonGroup={false}
        buttonGroupRows={[{ buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
        mediaSlot={
          <Reveal delay={0.18}>
            <Media
              imageFit={"Contain"}
              imageObjectPosition={"Center"}
              mediaWidth={"100%"}
              aspectRatio={"Auto"}
              mediaType={"Image"}
              imageSource={"/assets/f3d870ec-cc88-4a87-8baf-110bf69efb6d.jpg"}
              placeholderType={"Diagram"}
            />
          </Reveal>
        }
        backdropClass={props.backdropClass}
      />
    </Reveal>
  );
}
