"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Icon } from "./icon";

export interface TaglineProps {
  taglineText?: string;
  taglineHasIcon?: boolean;
  iconGlyph?: string;
  contentHorizontalAlignment?: "Left" | "Center";
}

export function Tagline(props: TaglineProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const taglineHasIcon = props.taglineHasIcon ?? false;
  const taglineText = props.taglineText ?? "Tagline";
  return (
    <div
      className={cn("tagline", (contentHorizontalAlignment === "Center") && "align-center text-align-center", taglineHasIcon && "tagline-has-icon")}
    >
      {taglineHasIcon && <Icon iconSize={"XSmall"} iconColorSource={"Inherit"} />}
      <div>{taglineText}</div>
    </div>
  );
}
