"use client";

import { Reveal } from "@/components/Reveal";
import { CredibilityListSectionCaptionCenterVertical } from "@/components/relume/credibility-list-section-caption-center-vertical";
import { SponsorLogoMarquee } from "@/components/home/sponsor-logo-marquee";
import { sectionTemplateClass } from "@/lib/section-template";

export function HomeCredibilityList(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <CredibilityListSectionCaptionCenterVertical
        sectionScheme={sectionTemplateClass(1)}
        sectionPadding={"Top & Bottom"}
        headingText={<>Con el respaldo de</>}
        paragraphText={<>
        Patrocinadores, aliados culturales y entidades oficiales que hacen posible esta producción.
      </>}
        showCaptionBlock={true}
        showHeading={true}
        showParagraph={true}
        credibilityListVariant={<SponsorLogoMarquee />}
        backdropClass={props.backdropClass}
      />
    </Reveal>
  );
}
