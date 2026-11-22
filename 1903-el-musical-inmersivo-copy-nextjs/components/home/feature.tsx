"use client";

import { Reveal } from "@/components/Reveal";
import { IconList } from "@/components/relume/icon-list";
import { FeatureSectionMediaHorizontal } from "@/components/relume/feature-section-media-horizontal";
import { HistoriaVideoSequence } from "@/components/home/historia-video-sequence";
import { sectionTemplateClass } from "@/lib/section-template";
import styles from "./feature.module.css";

export function HomeFeature(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <FeatureSectionMediaHorizontal
        sectionScheme={sectionTemplateClass(2)}
        columnRatio={"1:1"}
        sectionPadding={"Top & Bottom"}
        assetHorizontalPosition={"Right"}
        headingText={<>La historia no solo se cuenta. Se vive.</>}
        paragraphText={
          <>
            <p className="rt-paragraph">
              De Con ardientes fulgores de gloria, de Juan David Morgan, al
              guion de Diego de Obaldía: 1903 cobra vida como experiencia
              inmersiva. Un viaje para descubrir, sentir y saborear el nacimiento
              de la República. Esta vez no solo serás testigo: serás parte de
              ella.
            </p>
            <p className="rt-paragraph">
              <strong>Cómo vivir la experiencia</strong>
              {" — "}
              Recorre los pabellones: cada uno reúne historias, sabores y
              actividades inspiradas en las ciudades que marcaron 1903, con
              platos de Come Coco Kitchen by La Tapa del Coco.
            </p>
          </>
        }
        showTagline={true}
        taglineText={"La historia"}
        taglineHasIcon={false}
        showParagraph={true}
        showFeatureSupportingList={false}
        featureSupportingListSlot={
          <IconList
            items={[
              {
                paragraphText: (
                  <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
                ),
              },
              {
                paragraphText: (
                  <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
                ),
              },
              {
                paragraphText: (
                  <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
                ),
              },
            ]}
          />
        }
        showButtonGroup={false}
        buttonGroupRows={[
          {
            buttonHierarchy: "Secondary",
            buttonHasLeadingIcon: false,
            buttonHasTrailingIcon: false,
          },
        ]}
        mediaSlot={
          <Reveal delay={0.15}>
            <HistoriaVideoSequence />
          </Reveal>
        }
        backdropClass={[
          "section-pad-top-tight",
          styles.compactSection,
          props.backdropClass,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </Reveal>
  );
}
