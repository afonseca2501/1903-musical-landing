"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Paragraph } from "./paragraph";
import { Icon } from "./icon";

export interface IconListItemVerticalProps {
  itemIcon?: string;
  paragraphText?: ReactNode;
  contentHorizontalAlignment?: "Left" | "Center";
}

export function IconListItemVertical(props: IconListItemVerticalProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const itemIcon = props.itemIcon ?? "check";
  const paragraphText = props.paragraphText ?? <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>;
  return (
    <li
      className={cn("icon-list-item", (contentHorizontalAlignment === "Center") && "align-center")}
    >
      <Icon iconGlyph={itemIcon} iconSize={"XSmall"} />
      <Paragraph paragraphText={paragraphText} paragraphSize={"Regular"} />
    </li>
  );
}
