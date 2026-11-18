"use client";

import Image from "next/image";
import { Tagline } from "@/components/relume/tagline";
import { ButtonGroup } from "@/components/relume/button-group";
import { HeroHeaderMediaBackdropCenter } from "@/components/relume/hero-header-media-backdrop-center";
import { IconList } from "@/components/relume/icon-list";
import { CustomerLogoList } from "@/components/relume/customer-logo-list";
import styles from "./hero.module.css";

export function HomeHero(props: { backdropClass?: string }) {
  return (
    <HeroHeaderMediaBackdropCenter
      sectionScheme={"scheme-2"}
      sectionHeight={"Viewport"}
      contentVerticalPosition={"Center"}
      overlay={"None"}
      mediaType={"Video"}
      backgroundVideoSource={"/assets/hero.mp4"}
      imageSource={"/assets/9e000270-19a8-4671-b762-c7bd9f39c465.jpg"}
      placeholderType={"Photography"}
      imageFit={"Cover"}
      imageObjectPosition={"Center"}
      showContainer={true}
      showHeaderContentBlockVertical={true}
      showContentTop={true}
      showHeading={true}
      headingText={
        <Image
          className={styles.brandMark}
          src="/assets/1903.webp"
          alt="1903"
          width={896}
          height={320}
          priority
          sizes="(max-width: 768px) 72vw, 28rem"
        />
      }
      showEyebrowWrapper={true}
      showHeroEyebrow={false}
      heroEyebrowSlot={<Tagline
        taglineText={"23 nov – 2 dic 2026 · Islas de Atlapa"}
        taglineHasIcon={true}
        iconGlyph={"location_on"}
      />}
      showContentBottom={true}
      showWrapper={true}
      showAction={false}
      actionSlot={<ButtonGroup
        items={[{ buttonHierarchy: "Primary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: true, buttonTrailingIcon: "confirmation_number", buttonLabel: "Comprar boletos", buttonLink: "https://www.panatickets.com" }]}
      />}
      showTextWrapper={true}
      showParagraph={false}
      paragraphText={<>
      Con flow moderno. 33 intérpretes, 12 músicos en vivo y un mercado inmersivo de 1903 dentro del recinto.
    </>}
      showSupportingList={false}
      supportingListSlot={<IconList
        items={[{ paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }]}
      />}
      showCredibilityReinforcement={false}
      credibilityReinforcementSlot={<CustomerLogoList
        customerLogoItems={[{ companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }]}
        showText={true}
      />}
      showBackdropMediaWrapper={true}
      showMediaOverlay={true}
      showHeroMediaBackdrop={true}
      backdropClass={props.backdropClass}
    />
  );
}
