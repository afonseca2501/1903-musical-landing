"use client";

import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/relume/media";
import { IconList } from "@/components/relume/icon-list";
import { FeatureSectionMediaHorizontal } from "@/components/relume/feature-section-media-horizontal";

export function HomeFeature(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <FeatureSectionMediaHorizontal
        sectionScheme={"scheme-2"}
        columnRatio={"1:1"}
        sectionPadding={"Top & Bottom"}
        assetHorizontalPosition={"Right"}
        headingText={<>La noche en que nació la República</>}
        paragraphText={<>
        <p className="rt-paragraph">
          Noviembre de 1903. Panamá lleva medio siglo intentando separarse de Colombia y una noticia desde Washington lo acelera todo: el canal ya no se hará en Nicaragua. En una sola noche se cruzan el médico que conspira desde hace años, el general que se niega a disparar contra su pueblo y el ingeniero francés que firma un tratado en un hotel de Nueva York.
        </p>
        <p className="rt-paragraph">
          La República nace, y nadie sale igual. 1903 lleva esa noche al escenario con música original en vivo, 33 intérpretes y un mercado inmersivo que se recorre antes de entrar a la sala.
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
            <Media
              imageObjectPosition={"Center"}
              mediaWidth={"100%"}
              aspectRatio={"Classic Landscape"}
              mediaType={"Image"}
              imageSource={"/assets/7fc99183-1c51-42c2-912e-20291a573ac5.jpg"}
              placeholderType={"Photography"}
            />
          </Reveal>
        }
        backdropClass={props.backdropClass}
      />
    </Reveal>
  );
}
