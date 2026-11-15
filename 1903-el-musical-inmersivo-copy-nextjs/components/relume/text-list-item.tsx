"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";

export interface TextListItemProps {
  paragraphText?: ReactNode;
  contentHorizontalAlignment?: "Left" | "Center";
}

export function TextListItem(props: TextListItemProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const paragraphText = props.paragraphText ?? <>Lorem ipsum dolor sit amet</>;
  return (
    <li
      className={cn("text-list-item", (contentHorizontalAlignment === "Center") && "text-list-item-center")}
    >
      {paragraphText}
    </li>
  );
}
