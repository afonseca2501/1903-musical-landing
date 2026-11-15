"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";

export interface TextProps {
  textContent?: ReactNode;
  textSize?: "Tiny" | "Small" | "Regular" | "Medium" | "Large";
  textWeight?: "Regular" | "Strong";
  contentHorizontalAlignment?: "Left" | "Center";
  textHeadingSize?: "None" | "Display Large" | "Display Small" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  textTrim?: boolean;
  textColorSource?: "Token" | "Inherit";
  maxWidth?: "Default" | "None";
}

export function Text(props: TextProps) {
  const listRow = useListRow();
  const textColorSource = props.textColorSource ?? listRow?.textColorSource ?? "Token";
  const textSize = props.textSize ?? listRow?.textSize ?? "Regular";
  const maxWidth = props.maxWidth ?? listRow?.maxWidth ?? "None";
  const textTrim = props.textTrim ?? listRow?.textTrim ?? false;
  const textHeadingSize = props.textHeadingSize ?? listRow?.textHeadingSize ?? "None";
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const textWeight = props.textWeight ?? listRow?.textWeight ?? "Regular";
  const textContent = props.textContent ?? <>Text goes here</>;
  return (
    <div
      className={cn((textColorSource === "Token") && "scheme-heading", (textSize === "Tiny") && "text-style-tiny", (maxWidth === "Default") && "body-max-width", textTrim && "text-trim", (textHeadingSize === "Display Large") && "text-style-display-large", (textHeadingSize === "Display Small") && "text-style-display-small", (textHeadingSize === "H1") && "heading-style-h1", (textHeadingSize === "H2") && "heading-style-h2", (textHeadingSize === "H3") && "heading-style-h3", (textHeadingSize === "H4") && "heading-style-h4", (textHeadingSize === "H5") && "heading-style-h5", (textHeadingSize === "H6") && "heading-style-h6", (contentHorizontalAlignment === "Center") && "text-align-center align-center", (textWeight === "Strong") && "text-weight-strong", (textSize === "Small") && "text-style-small", ((textSize === "Regular" && (textHeadingSize === "None"))) && "text-style-regular", (textSize === "Medium") && "text-style-medium", (textSize === "Large") && "text-style-large")}
    >
      {textContent}
    </div>
  );
}
