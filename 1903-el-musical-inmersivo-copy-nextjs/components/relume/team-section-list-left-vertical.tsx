import { type ReactNode } from "react";
import { cn, fillSlot } from "@/lib/utils";
import { SectionCtaBlockVertical } from "./section-cta-block-vertical";
import { SectionContentBlockVerticalLeftSection } from "./section-content-block-vertical-left-section";
import { TeamListGrid3ColumnVerticalSection } from "./team-list-grid3-column-vertical-section";

export interface TeamSectionListLeftVerticalProps {
  sectionScheme?: string;
  sectionPadding?: "Top & Bottom" | "Top Only";
  headingText?: ReactNode;
  showSectionContentBlock?: boolean;
  sectionContentBlockVariant?: ReactNode;
  paragraphText?: ReactNode;
  itemsRows?: Record<string, any>[];
  showTagline?: boolean;
  taglineText?: string;
  taglineHasIcon?: boolean;
  iconGlyph?: string;
  showHeading?: boolean;
  showParagraph?: boolean;
  showSupportingList?: boolean;
  supportingListSlot?: ReactNode;
  showButtonGroup?: boolean;
  teamListVariant?: ReactNode;
  teamListRows?: Record<string, any>[];
  showSectionCtaBlock?: boolean;
  sectionCtaBlockVariant?: ReactNode;
  ctaHeadingText?: ReactNode;
  ctaParagraphText?: ReactNode;
  buttonsRows?: Record<string, any>[];
  backdropClass?: string;
}

export function TeamSectionListLeftVertical(props: TeamSectionListLeftVerticalProps) {
  const sectionPadding = props.sectionPadding ?? "Top & Bottom";
  const headingText = props.headingText ?? <>Our Team</>;
  const showSectionContentBlock = props.showSectionContentBlock ?? true;
  const showSectionCtaBlock = props.showSectionCtaBlock ?? true;
  return (
    <section
      className={cn(props.sectionScheme ?? "scheme-1", "section", props.backdropClass, (sectionPadding === "Top Only") && "section-padding-bottom-0")}
    >
      <div className="container">
        <div className="stack gap-section-content z-index-1">
          {showSectionContentBlock && ((props.sectionContentBlockVariant && fillSlot(props.sectionContentBlockVariant, { paragraphText: props.paragraphText, items: props.itemsRows, showTagline: props.showTagline, taglineText: props.taglineText, taglineHasIcon: props.taglineHasIcon, iconGlyph: props.iconGlyph, showHeading: props.showHeading, showParagraph: props.showParagraph, showSupportingList: props.showSupportingList, supportingListSlot: props.supportingListSlot, showButtonGroup: props.showButtonGroup, contentHorizontalAlignment: "Left" }, { headingText: headingText })) ?? <SectionContentBlockVerticalLeftSection
            paragraphText={props.paragraphText}
            items={props.itemsRows}
            showTagline={props.showTagline}
            taglineText={props.taglineText}
            taglineHasIcon={props.taglineHasIcon}
            iconGlyph={props.iconGlyph}
            showHeading={props.showHeading}
            showParagraph={props.showParagraph}
            showSupportingList={props.showSupportingList}
            supportingListSlot={props.supportingListSlot}
            showButtonGroup={props.showButtonGroup}
            headingText={headingText}
            contentHorizontalAlignment={"Left"}
          />)}
          {(props.teamListVariant && fillSlot(props.teamListVariant, { items: props.teamListRows, sliderLayout: "Left" }, {  })) ?? <TeamListGrid3ColumnVerticalSection items={props.teamListRows} />}
          {showSectionCtaBlock && ((props.sectionCtaBlockVariant && fillSlot(props.sectionCtaBlockVariant, { ctaHeadingText: props.ctaHeadingText, ctaParagraphText: props.ctaParagraphText, showHeading: props.showHeading, showParagraph: props.showParagraph, buttonsRows: props.buttonsRows, contentHorizontalAlignment: "Left" }, {  })) ?? <SectionCtaBlockVertical
            ctaHeadingText={props.ctaHeadingText}
            ctaParagraphText={props.ctaParagraphText}
            showHeading={props.showHeading}
            showParagraph={props.showParagraph}
            buttonsRows={props.buttonsRows}
            contentHorizontalAlignment={"Left"}
          />)}
        </div>
      </div>
    </section>
  );
}
