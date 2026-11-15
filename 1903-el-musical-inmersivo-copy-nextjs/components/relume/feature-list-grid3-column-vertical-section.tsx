"use client";

import { Reveal } from "@/components/Reveal";
import { ListRow } from "@/lib/list-row";
import { FeatureItemMediumVertical } from "./feature-item-medium-vertical";

export interface FeatureListGrid3ColumnVerticalSectionProps {
  items?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function FeatureListGrid3ColumnVerticalSection(props: FeatureListGrid3ColumnVerticalSectionProps) {
  const items = props.items ?? [{  }, {  }, {  }];
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? "Left";
  return (
    <div className="grid-column-3">
      {items.map((row, index) => (
        <Reveal key={index} delay={index * 0.1}>
          <ListRow values={{ contentHorizontalAlignment: contentHorizontalAlignment }}>
            <FeatureItemMediumVertical
              {...row}
              contentHorizontalAlignment={contentHorizontalAlignment}
            />
          </ListRow>
        </Reveal>
      ))}
    </div>
  );
}
