import { type ReactNode } from "react";
import { cn, fillSlot } from "@/lib/utils";
import { CredibilityListInlineVerticalSection } from "./credibility-list-inline-vertical-section";
import { CaptionBlockVertical } from "./caption-block-vertical";

export interface CredibilityListSectionCaptionCenterVerticalProps {
  sectionScheme?: string;
  sectionPadding?: "Top & Bottom" | "Top Only";
  headingText?: ReactNode;
  paragraphText?: ReactNode;
  showCaptionBlock?: boolean;
  showHeading?: boolean;
  showParagraph?: boolean;
  credibilityListVariant?: ReactNode;
  credibilityListRows?: Record<string, any>[];
  backdropClass?: string;
}

export function CredibilityListSectionCaptionCenterVertical(props: CredibilityListSectionCaptionCenterVerticalProps) {
  const sectionPadding = props.sectionPadding ?? "Top & Bottom";
  const headingText = props.headingText ?? <>Used by the world's leading companies</>;
  const paragraphText = props.paragraphText ?? <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>;
  const showCaptionBlock = props.showCaptionBlock ?? true;
  return (
    <section
      className={cn(props.sectionScheme ?? "scheme-1", "section section-medium", props.backdropClass, (sectionPadding === "Top Only") && "section-padding-bottom-0")}
    >
      <div className="container">
        <div className="stack gap-element-xlarge">
          {showCaptionBlock && <CaptionBlockVertical
            showHeading={props.showHeading}
            showParagraph={props.showParagraph}
            contentHorizontalAlignment={"Center"}
            headingText={headingText}
            paragraphText={paragraphText}
          />}
          {(props.credibilityListVariant && fillSlot(props.credibilityListVariant, { customerLogoItems: props.credibilityListRows, contentHorizontalAlignment: "Center" }, {  })) ?? <CredibilityListInlineVerticalSection
            customerLogoItems={props.credibilityListRows}
            contentHorizontalAlignment={"Center"}
          />}
        </div>
      </div>
    </section>
  );
}
