"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Credential } from "./credential";

export interface ImageListProps {
  contentHorizontalAlignment?: "Left" | "Center";
  credentialItems?: Record<string, any>[];
}

export function ImageList(props: ImageListProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const credentialItems = props.credentialItems ?? [{  }, {  }, {  }];
  return (
    <div
      className={cn("row gap-element-horizontal-medium", (contentHorizontalAlignment === "Center") && "align-center align-items-center")}
    >
      {credentialItems.map((row, index) => <Credential key={index} {...row} />)}
    </div>
  );
}
