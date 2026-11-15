"use client";

import { type ReactNode } from "react";
import { fillSlot } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Tagline } from "./tagline";
import { ButtonGroup } from "./button-group";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import { IconList } from "./icon-list";
import styles from "./section-content-block-vertical-left-section.module.css";

export interface SectionContentBlockVerticalLeftSectionProps {
  contentHorizontalAlignment?: "Left" | "Center";
  headingText?: ReactNode;
  paragraphText?: ReactNode;
  sectionRole?: "Section" | "Page Header";
  items?: Record<string, any>[];
  hasHeaderAction?: boolean;
  showTagline?: boolean;
  taglineText?: string;
  taglineHasIcon?: boolean;
  iconGlyph?: string;
  showHeading?: boolean;
  showParagraph?: boolean;
  showSupportingList?: boolean;
  supportingListSlot?: ReactNode;
  showButtonGroup?: boolean;
}

export function SectionContentBlockVerticalLeftSection(props: SectionContentBlockVerticalLeftSectionProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const showTagline = props.showTagline ?? true;
  const headingText = props.headingText ?? <>Heading goes here</>;
  const sectionRole = props.sectionRole ?? listRow?.sectionRole ?? "Section";
  const showHeading = props.showHeading ?? true;
  const paragraphText = props.paragraphText ?? <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique, at fermentum eros mi vitae diam.
    </>;
  const showParagraph = props.showParagraph ?? true;
  const showSupportingList = props.showSupportingList ?? false;
  const hasHeaderAction = props.hasHeaderAction ?? listRow?.hasHeaderAction ?? false;
  const items = props.items ?? [{ buttonHierarchy: "Secondary" }];
  const showButtonGroup = props.showButtonGroup ?? hasHeaderAction;
  return (
    ((showTagline || showHeading) || ((showParagraph || showSupportingList) || showButtonGroup)) && <div className="stack">
      {(showTagline || showHeading) && <div className="stack gap-element-small">
        {showTagline && <div className="row">
          {showTagline && <Tagline
            taglineText={props.taglineText}
            taglineHasIcon={props.taglineHasIcon}
            iconGlyph={props.iconGlyph}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />}
        </div>}
        {showHeading && <Heading
          headingSize={sectionRole === "Page Header" ? "H1" : "H2"}
          headingTag={sectionRole === "Page Header" ? "H1" : "H2"}
          headingText={headingText}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>}
      {((showParagraph || showSupportingList) || showButtonGroup) && <div className="stack gap-element-large">
        {(showParagraph || showSupportingList) && <div className="stack">
          {showParagraph && <Paragraph
            contentHorizontalAlignment={contentHorizontalAlignment}
            paragraphText={paragraphText}
          />}
          {showSupportingList && <div className={styles.slot}>
            {(props.supportingListSlot && fillSlot(props.supportingListSlot, {  }, { contentHorizontalAlignment: contentHorizontalAlignment })) ?? <IconList contentHorizontalAlignment={contentHorizontalAlignment} />}
          </div>}
        </div>}
        {showButtonGroup && <ButtonGroup
          items={items}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>}
    </div>
  );
}
