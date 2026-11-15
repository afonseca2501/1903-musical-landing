"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { ButtonGroup } from "./button-group";
import { Paragraph } from "./paragraph";
import { Text } from "./text";

export interface FooterCtaBlockProps {
  contentHorizontalAlignment?: "Left" | "Center";
  ctaHeadingText?: ReactNode;
  ctaParagraphText?: ReactNode;
  showHeading?: boolean;
  showParagraph?: boolean;
  buttonsRows?: Record<string, any>[];
}

export function FooterCtaBlock(props: FooterCtaBlockProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const ctaHeadingText = props.ctaHeadingText ?? <>Get started</>;
  const showHeading = props.showHeading ?? true;
  const ctaParagraphText = props.ctaParagraphText ?? <>Create an account and start building today.</>;
  const showParagraph = props.showParagraph ?? true;
  return (
    <div
      className={cn("stack max-width-sm", (contentHorizontalAlignment === "Center") && "items-center text-align-center align-center")}
    >
      {(showHeading || showParagraph) && <div className="stack gap-element-tiny">
        {showHeading && <Text
          textWeight={"Strong"}
          textContent={ctaHeadingText}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
        {showParagraph && <Paragraph
          paragraphText={ctaParagraphText}
          paragraphSize={"Small"}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>}
      <ButtonGroup
        items={props.buttonsRows ?? [{  }]}
        contentHorizontalAlignment={contentHorizontalAlignment}
      />
    </div>
  );
}
