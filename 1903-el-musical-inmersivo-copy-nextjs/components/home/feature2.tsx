"use client";

import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/relume/media";
import { FeatureSectionMediaHorizontal } from "@/components/relume/feature-section-media-horizontal";
import { MapGuideAccordion } from "@/components/home/map-guide-accordion";
import { MAP_GUIDE_INTRO } from "@/lib/map-guide";

export function HomeFeature2(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <FeatureSectionMediaHorizontal
        sectionScheme={"scheme-1"}
        columnRatio={"1:1"}
        sectionPadding={"Top Only"}
        assetHorizontalPosition={"Left"}
        contentVerticalAlignment={"Top"}
        headingText={<>Guía del recorrido</>}
        paragraphText={<>{MAP_GUIDE_INTRO}</>}
        showTagline={true}
        taglineText={"Para ubicarte"}
        taglineHasIcon={false}
        showParagraph={true}
        showFeatureSupportingList={true}
        featureSupportingListSlot={
          <Reveal delay={0.12}>
            <MapGuideAccordion />
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
              imageSource={"/assets/mapa.webp"}
              placeholderType={"Diagram"}
              alt="Mapa del recinto"
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </Reveal>
        }
        backdropClass={props.backdropClass}
      />
    </Reveal>
  );
}
