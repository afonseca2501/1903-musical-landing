"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Link } from "./link";

export interface TextLinkListProps {
  items?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function TextLinkList(props: TextLinkListProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const items = props.items ?? [{ linkText: "Privacy Policy" }, { linkText: "Terms of Service" }];
  return (
    <div
      className={cn("row wrap gap-element-horizontal-medium", (contentHorizontalAlignment === "Center") && "align-center row-center")}
    >
      {items.map((row, index) => <Link key={index} {...row} />)}
    </div>
  );
}
