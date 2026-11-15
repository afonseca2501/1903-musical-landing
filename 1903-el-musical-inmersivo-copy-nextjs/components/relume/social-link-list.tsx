"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { SocialLink } from "./social-link";

export interface SocialLinkListProps {
  items?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function SocialLinkList(props: SocialLinkListProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const items = props.items ?? [{  }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }];
  return (
    <div
      className={cn("row gap-element-horizontal-small wrap", (contentHorizontalAlignment === "Center") && "align-center row-center")}
    >
      {items.map((row, index) => <SocialLink key={index} {...row} />)}
    </div>
  );
}
