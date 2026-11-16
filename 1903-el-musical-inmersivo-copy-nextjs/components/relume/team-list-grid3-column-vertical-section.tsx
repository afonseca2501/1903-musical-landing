"use client";

import { Reveal } from "@/components/Reveal";
import { useListRow } from "@/lib/list-row";
import { TeamItemMedium } from "./team-item-medium";

export interface TeamListGrid3ColumnVerticalSectionProps {
  items?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function TeamListGrid3ColumnVerticalSection(props: TeamListGrid3ColumnVerticalSectionProps) {
  const listRow = useListRow();
  const items = props.items ?? [{  }, {  }, {  }];
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  return (
    <div className="grid-column-3">
      {items.map((row, index) => (
        <Reveal key={index} delay={index * 0.06}>
          <TeamItemMedium
            {...row}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />
        </Reveal>
      ))}
    </div>
  );
}

