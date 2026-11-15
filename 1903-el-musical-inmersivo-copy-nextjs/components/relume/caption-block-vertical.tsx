"use client";

import { type ReactNode } from "react";
import { useListRow } from "@/lib/list-row";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

export interface CaptionBlockVerticalProps {
  headingText?: ReactNode;
  paragraphText?: ReactNode;
  contentHorizontalAlignment?: "Left" | "Center";
  showHeading?: boolean;
  showParagraph?: boolean;
}

export function CaptionBlockVertical(props: CaptionBlockVerticalProps) {
  const listRow = useListRow();
  const headingText = props.headingText ?? <>Used by the world's leading companies</>;
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const showHeading = props.showHeading ?? true;
  const paragraphText = props.paragraphText ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const showParagraph = props.showParagraph ?? false;
  return (
    (showHeading || showParagraph) && <div className="stack gap-element-small">
      {showHeading && <Heading
        headingSize={"H6"}
        headingText={headingText}
        contentHorizontalAlignment={contentHorizontalAlignment}
      />}
      {showParagraph && <Paragraph
        paragraphText={paragraphText}
        contentHorizontalAlignment={contentHorizontalAlignment}
      />}
    </div>
  );
}
