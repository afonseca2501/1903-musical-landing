"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";

export interface ParagraphProps {
  paragraphText?: ReactNode;
  paragraphSize?: "Tiny" | "Small" | "Regular" | "Medium" | "Large";
  textWeight?: "Regular" | "Strong";
  contentHorizontalAlignment?: "Left" | "Center";
  textHeadingSize?: "None" | "Display Large" | "Display Small" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  maxWidth?: "Default" | "None";
  textTruncate?: "None" | "Single Line" | "1 Line" | "2 Lines" | "3 Lines";
}

export function Paragraph(props: ParagraphProps) {
  const listRow = useListRow();
  const maxWidth = props.maxWidth ?? listRow?.maxWidth ?? "Default";
  const textHeadingSize = props.textHeadingSize ?? listRow?.textHeadingSize ?? "None";
  const paragraphSize = props.paragraphSize ?? listRow?.paragraphSize ?? "Regular";
  const textTruncate = props.textTruncate ?? listRow?.textTruncate ?? "None";
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const textWeight = props.textWeight ?? listRow?.textWeight ?? "Regular";
  const paragraphText = props.paragraphText ?? <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique, at fermentum eros mi vitae diam.
    </>;
  return (
    <p
      className={cn(((textHeadingSize === "None" && (maxWidth === "Default"))) && "body-max-width", (paragraphSize === "Tiny") && "text-style-tiny", (textTruncate === "Single Line") && "text-truncate", (textTruncate === "1 Line") && "text-clamp-1", (textTruncate === "2 Lines") && "text-clamp-2", (textTruncate === "3 Lines") && "text-clamp-3", (textHeadingSize === "Display Large") && "text-style-display-large", (textHeadingSize !== "None") && "heading-max-width", (textHeadingSize === "Display Small") && "text-style-display-small", (textHeadingSize === "H1") && "heading-style-h1", (textHeadingSize === "H2") && "heading-style-h2", (textHeadingSize === "H3") && "heading-style-h3", (textHeadingSize === "H4") && "heading-style-h4", (textHeadingSize === "H5") && "heading-style-h5", (textHeadingSize === "H6") && "heading-style-h6", (contentHorizontalAlignment === "Center") && "align-center text-align-center", (textWeight === "Strong") && "text-weight-strong", (paragraphSize === "Small") && "text-style-small", ((paragraphSize === "Regular" && (textHeadingSize === "None"))) && "text-style-regular", (paragraphSize === "Medium") && "text-style-medium", (paragraphSize === "Large") && "text-style-large")}
    >
      {paragraphText}
    </p>
  );
}
