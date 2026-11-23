"use client";

import { Reveal } from "@/components/Reveal";
import { useListRow } from "@/lib/list-row";
import { TeamItemMedium } from "./team-item-medium";

export interface TeamListGrid4ColumnVerticalSectionProps {
  items?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function TeamListGrid4ColumnVerticalSection(props: TeamListGrid4ColumnVerticalSectionProps) {
  const listRow = useListRow();
  const items = props.items ?? [{  }, {  }, {  }, {  }];
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  return (
    <div className="grid-column-4">
      {items.map((row, index) => (
        <Reveal key={index} delay={Math.min(index * 0.05, 0.2)}>
          <TeamItemMedium
            {...row}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />
        </Reveal>
      ))}
    </div>
  );
}
