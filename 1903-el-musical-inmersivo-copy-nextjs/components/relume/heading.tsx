"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";

export interface HeadingProps {
  headingTag?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  headingSize?: "Display Large" | "Display Small" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  headingText?: ReactNode;
  contentHorizontalAlignment?: "Left" | "Center";
  maxWidth?: "Default" | "None";
}

export function Heading(props: HeadingProps) {
  const listRow = useListRow();
  const headingTag = props.headingTag ?? listRow?.headingTag ?? "H2";
  const Tag = headingTag === "H2" ? "h2" : headingTag === "H3" ? "h3" : headingTag === "H4" ? "h4" : headingTag === "H5" ? "h5" : headingTag === "H6" ? "h6" : "h1";
  const maxWidth = props.maxWidth ?? listRow?.maxWidth ?? "Default";
  const headingSize = props.headingSize ?? listRow?.headingSize ?? "H2";
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const headingText = props.headingText ?? <>Heading goes here</>;
  return (
    <Tag
      className={cn((maxWidth === "Default") && "heading-max-width", (headingSize === "Display Large") && "text-style-display-large", (contentHorizontalAlignment === "Center") && "align-center text-align-center", (headingSize === "Display Small") && "text-style-display-small", (headingSize === "H1") && "heading-style-h1", (headingSize === "H2") && "heading-style-h2", (headingSize === "H3") && "heading-style-h3", (headingSize === "H4") && "heading-style-h4", (headingSize === "H5") && "heading-style-h5", (headingSize === "H6") && "heading-style-h6")}
    >
      {headingText}
    </Tag>
  );
}
