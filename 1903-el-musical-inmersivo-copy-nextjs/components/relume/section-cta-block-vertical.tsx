"use client";

import { type ReactNode } from "react";
import { useListRow } from "@/lib/list-row";
import { ButtonGroup } from "./button-group";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

export interface SectionCtaBlockVerticalProps {
  contentHorizontalAlignment?: "Left" | "Center";
  ctaHeadingText?: ReactNode;
  ctaParagraphText?: ReactNode;
  showHeading?: boolean;
  showParagraph?: boolean;
  buttonsRows?: Record<string, any>[];
}

export function SectionCtaBlockVertical(props: SectionCtaBlockVerticalProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const ctaHeadingText = props.ctaHeadingText ?? <>Heading goes here</>;
  const showHeading = props.showHeading ?? true;
  const ctaParagraphText = props.ctaParagraphText ?? <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique, at fermentum eros mi vitae diam.
    </>;
  const showParagraph = props.showParagraph ?? true;
  return (
    <div className="stack gap-element-large">
      {(showHeading || showParagraph) && <div className="stack gap-element-small">
        {showHeading && <Heading
          headingSize={"H4"}
          headingTag={"H3"}
          contentHorizontalAlignment={contentHorizontalAlignment}
          headingText={ctaHeadingText}
        />}
        {showParagraph && <Paragraph
          contentHorizontalAlignment={contentHorizontalAlignment}
          paragraphText={ctaParagraphText}
        />}
      </div>}
      <ButtonGroup
        items={props.buttonsRows ?? [{ buttonHierarchy: "Secondary" }]}
        contentHorizontalAlignment={contentHorizontalAlignment}
      />
    </div>
  );
}
