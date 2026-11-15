"use client";

import { type ReactNode } from "react";
import { cn, fillSlot } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { SectionCtaBlockVertical } from "./section-cta-block-vertical";
import { FaqListAccordion1ColumnVerticalSection } from "./faq-list-accordion1-column-vertical-section";
import { SectionContentBlockVerticalLeftSection } from "./section-content-block-vertical-left-section";

export interface FaqSectionListLeftVerticalProps {
  sectionPadding?: "Top & Bottom" | "Top Only";
  headingText?: ReactNode;
  sectionScheme?: string;
  sectionRole?: "Section" | "Page Header";
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
  faqListVariant?: ReactNode;
  faqListRows?: Record<string, any>[];
  expandMode?: "Single" | "Multiple";
  iconPosition?: "Leading" | "Trailing";
  iconType?: "Chevron" | "Plus & Minus";
  showSectionCtaBlock?: boolean;
  sectionCtaBlockVariant?: ReactNode;
  ctaHeadingText?: ReactNode;
  ctaParagraphText?: ReactNode;
  buttonsRows?: Record<string, any>[];
  backdropClass?: string;
}

export function FaqSectionListLeftVertical(props: FaqSectionListLeftVerticalProps) {
  const listRow = useListRow();
  const sectionPadding = props.sectionPadding ?? "Top & Bottom";
  const headingText = props.headingText ?? <>FAQs</>;
  const sectionRole = props.sectionRole ?? listRow?.sectionRole ?? "Section";
  const showSectionContentBlock = props.showSectionContentBlock ?? true;
  const showSectionCtaBlock = props.showSectionCtaBlock ?? true;
  return (
    <section
      className={cn(props.sectionScheme ?? "scheme-1", "section", props.backdropClass, (sectionPadding === "Top Only") && "section-padding-bottom-0")}
    >
      <div className="container">
        <div className="stack gap-section-content z-index-1">
          {showSectionContentBlock && ((props.sectionContentBlockVariant && fillSlot(props.sectionContentBlockVariant, { paragraphText: props.paragraphText, items: props.itemsRows, showTagline: props.showTagline, taglineText: props.taglineText, taglineHasIcon: props.taglineHasIcon, iconGlyph: props.iconGlyph, showHeading: props.showHeading, showParagraph: props.showParagraph, showSupportingList: props.showSupportingList, supportingListSlot: props.supportingListSlot, showButtonGroup: props.showButtonGroup, contentHorizontalAlignment: "Left" }, { headingText: headingText, sectionRole: sectionRole })) ?? <SectionContentBlockVerticalLeftSection
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
            contentHorizontalAlignment={"Left"}
            headingText={headingText}
            sectionRole={sectionRole}
          />)}
          {(props.faqListVariant && fillSlot(props.faqListVariant, { items: props.faqListRows, iconPosition: props.iconPosition ?? "Trailing", iconType: props.iconType ?? "Chevron", expandMode: props.expandMode ?? "Single", contentHorizontalAlignment: "Left" }, {  })) ?? <FaqListAccordion1ColumnVerticalSection
            items={props.faqListRows}
            iconPosition={props.iconPosition ?? "Trailing"}
            iconType={props.iconType ?? "Chevron"}
            expandMode={props.expandMode ?? "Single"}
            contentHorizontalAlignment={"Left"}
          />}
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
