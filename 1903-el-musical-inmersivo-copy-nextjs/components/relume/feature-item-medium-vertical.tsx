"use client";

import { type ReactNode } from "react";
import { fillSlot } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Tagline } from "./tagline";
import { ButtonGroup } from "./button-group";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import { Icon } from "./icon";
import styles from "./feature-item-medium-vertical.module.css";

export interface FeatureItemMediumVerticalProps {
  contentHorizontalAlignment?: "Left" | "Center";
  showItemMedia?: boolean;
  itemMediaSlot?: ReactNode;
  showHeading?: boolean;
  headingText?: ReactNode;
  showTagline?: boolean;
  taglineText?: string;
  taglineHasIcon?: boolean;
  iconGlyph?: string;
  showParagraph?: boolean;
  paragraphText?: ReactNode;
  showButtonGroup?: boolean;
  buttonGroupRows?: Record<string, any>[];
}

export function FeatureItemMediumVertical(props: FeatureItemMediumVerticalProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const showItemMedia = props.showItemMedia ?? true;
  const showTagline = props.showTagline ?? false;
  const showHeading = props.showHeading ?? true;
  const showParagraph = props.showParagraph ?? true;
  const showButtonGroup = props.showButtonGroup ?? true;
  return (
    (showItemMedia || ((showTagline || showHeading) || showParagraph) || showButtonGroup) && <div className="stack gap-element-large">
      {showItemMedia && <div className="row">
        {showItemMedia && <div className={styles.slot}>
          {(props.itemMediaSlot && fillSlot(props.itemMediaSlot, { iconGlyph: props.iconGlyph, aspectRatio: "Landscape", iconSize: "Medium" }, { contentHorizontalAlignment: contentHorizontalAlignment })) ?? <Icon
            iconGlyph={props.iconGlyph}
            iconSize={"Medium"}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />}
        </div>}
      </div>}
      {((showTagline || showHeading) || showParagraph) && <div className="stack gap-element-small">
        {(showTagline || showHeading) && <div className="stack gap-element-small">
          {showTagline && <Tagline
            taglineText={props.taglineText}
            taglineHasIcon={props.taglineHasIcon}
            iconGlyph={props.iconGlyph}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />}
          {showHeading && <Heading
            headingText={props.headingText}
            headingSize={"H4"}
            headingTag={"H4"}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />}
        </div>}
        {showParagraph && <Paragraph
          paragraphText={props.paragraphText}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>}
      {showButtonGroup && <ButtonGroup
        buttonGroupAlignment={contentHorizontalAlignment}
        items={props.buttonGroupRows ?? [{ buttonHierarchy: "Link" }]}
      />}
    </div>
  );
}
