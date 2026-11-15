"use client";

import { CredibilityListSectionCaptionCenterVertical } from "@/components/relume/credibility-list-section-caption-center-vertical";
import { CredibilityListCardGridVerticalSection } from "@/components/relume/credibility-list-card-grid-vertical-section";

export function HomeCredibilityList(props: { backdropClass?: string }) {
  return (
    <CredibilityListSectionCaptionCenterVertical
      sectionScheme={"scheme-1"}
      sectionPadding={"Top & Bottom"}
      headingText={<>Con el respaldo de</>}
      paragraphText={<>
      Patrocinadores, aliados culturales y entidades oficiales que hacen posible esta producción.
    </>}
      showCaptionBlock={true}
      showHeading={true}
      showParagraph={true}
      credibilityListVariant={<CredibilityListCardGridVerticalSection
        customerLogoItems={[{ companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }]}
        columnsVertical={"3"}
        containerBorder={"Inherit"}
      />}
      credibilityListRows={[{ companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }, { companyLogoHeight: "32px" }]}
      backdropClass={props.backdropClass}
    />
  );
}
