"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { IconListItemVertical } from "./icon-list-item-vertical";

export interface IconListProps {
  items?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function IconList(props: IconListProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const items = props.items ?? [{  }, {  }, {  }];
  return (
    <ul
      className={cn("icon-list body-max-width", (contentHorizontalAlignment === "Center") && "align-center align-items-center")}
    >
      {items.map((row, index) => <IconListItemVertical key={index} {...row} />)}
    </ul>
  );
}
