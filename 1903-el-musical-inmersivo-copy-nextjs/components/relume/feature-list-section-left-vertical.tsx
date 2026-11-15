import { type ReactNode } from "react";
import { cn, fillSlot } from "@/lib/utils";
import { ButtonGroup } from "./button-group";
import { FeatureListGrid3ColumnVerticalSection } from "./feature-list-grid3-column-vertical-section";
import { SectionContentBlockVerticalLeftSection } from "./section-content-block-vertical-left-section";

export interface FeatureListSectionLeftVerticalProps {
  sectionScheme?: string;
  sectionPadding?: "Top & Bottom" | "Top Only";
  showSectionContentBlock?: boolean;
  sectionContentBlockVariant?: ReactNode;
  headingText?: ReactNode;
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
  showAction?: boolean;
  actionRows?: Record<string, any>[];
  featureListVariant?: ReactNode;
  featureListRows?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
  backdropClass?: string;
}

export function FeatureListSectionLeftVertical(props: FeatureListSectionLeftVerticalProps) {
  const sectionPadding = props.sectionPadding ?? "Top & Bottom";
  const showSectionContentBlock = props.showSectionContentBlock ?? true;
  const showAction = props.showAction ?? false;
  return (
    <section
      className={cn(props.sectionScheme ?? "scheme-1", "section", props.backdropClass, (sectionPadding === "Top Only") && "section-padding-bottom-0")}
    >
      <div className="container">
        <div className="stack gap-section-content z-index-1">
          {showSectionContentBlock && ((props.sectionContentBlockVariant && fillSlot(props.sectionContentBlockVariant, { headingText: props.headingText, paragraphText: props.paragraphText, items: props.itemsRows, showTagline: props.showTagline, taglineText: props.taglineText, taglineHasIcon: props.taglineHasIcon, iconGlyph: props.iconGlyph, showHeading: props.showHeading, showParagraph: props.showParagraph, showSupportingList: props.showSupportingList, supportingListSlot: props.supportingListSlot, showButtonGroup: props.showButtonGroup, contentHorizontalAlignment: "Left" }, {  })) ?? <SectionContentBlockVerticalLeftSection
            headingText={props.headingText}
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
          />)}
          {(props.featureListVariant && fillSlot(props.featureListVariant, { items: props.featureListRows, contentHorizontalAlignment: props.contentHorizontalAlignment ?? "Left" }, {  })) ?? <FeatureListGrid3ColumnVerticalSection
            items={props.featureListRows}
            contentHorizontalAlignment={props.contentHorizontalAlignment ?? "Left"}
          />}
          {showAction && <ButtonGroup
            items={props.actionRows}
            contentHorizontalAlignment={"Left"}
          />}
        </div>
      </div>
    </section>
  );
}
