"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { TextListItem } from "./text-list-item";

export interface TextListProps {
  items?: Record<string, any>[];
  listMarker?: "None" | "Bullet" | "Numbered";
  contentHorizontalAlignment?: "Left" | "Center";
}

export function TextList(props: TextListProps) {
  const listRow = useListRow();
  const listMarker = props.listMarker ?? "Bullet";
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const items = props.items ?? [{  }, {  }, {  }];
  return (
    <ul
      className={cn("text-list body-max-width", (listMarker === "None") && "text-list-none", (contentHorizontalAlignment === "Center") && "text-list-center", (listMarker === "Bullet") && "text-list-bullet", (listMarker === "Numbered") && "text-list-numbered")}
      role="list"
    >
      {items.map((row, index) => <TextListItem
        key={index}
        {...row}
        contentHorizontalAlignment={contentHorizontalAlignment}
      />)}
    </ul>
  );
}
