"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Icon } from "./icon";

export interface TagProps {
  tagHasIcon?: boolean;
  iconGlyph?: string;
  tagSize?: "Regular" | "Small";
  contentHorizontalAlignment?: "Left" | "Center";
  tagText?: string;
  tagIgnoreHeight?: boolean;
  showIcon?: boolean;
}

export function Tag(props: TagProps) {
  const listRow = useListRow();
  const tagIgnoreHeight = props.tagIgnoreHeight ?? listRow?.tagIgnoreHeight ?? false;
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const tagSize = props.tagSize ?? listRow?.tagSize ?? "Regular";
  const tagHasIcon = props.tagHasIcon ?? false;
  const iconGlyph = props.iconGlyph ?? "category";
  const showIcon = props.showIcon ?? tagHasIcon;
  const tagText = props.tagText ?? "Tag";
  return (
    <span
      className={cn("tag", tagIgnoreHeight && "tag-ignore-height", (contentHorizontalAlignment === "Center") && "align-center text-align-center", (tagSize === "Small") && "tag-small", tagHasIcon && "tag-has-icon")}
    >
      {showIcon && <Icon
        iconSize={tagHasIcon ? tagSize === "Small" ? "Tiny" : "XXSmall" : "XXSmall"}
        iconGlyph={iconGlyph}
        iconColorSource={"Inherit"}
      />}
      <div>{tagText}</div>
    </span>
  );
}
