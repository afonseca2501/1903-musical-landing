"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ListRow, useListRow } from "@/lib/list-row";
import { FaqItemAccordion } from "./faq-item-accordion";

export interface FaqListAccordion1ColumnVerticalSectionProps {
  items?: Record<string, any>[];
  expandMode?: "Single" | "Multiple";
  iconPosition?: "Leading" | "Trailing";
  iconType?: "Chevron" | "Plus & Minus";
  contentHorizontalAlignment?: "Left" | "Center";
}

export function FaqListAccordion1ColumnVerticalSection(props: FaqListAccordion1ColumnVerticalSectionProps) {
  const listRow = useListRow();
  const [openKeys, setOpenKeys] = useState(",");
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const items = props.items ?? [{ faqQuestion: "Question text goes here", faqAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla." }, { faqQuestion: "Question text goes here", faqAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla." }, { faqQuestion: "Question text goes here", faqAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla." }, { faqQuestion: "Question text goes here", faqAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla." }];
  const expandMode = props.expandMode ?? "Single";
  const iconPosition = props.iconPosition ?? "Trailing";
  const iconType = props.iconType ?? "Chevron";
  return (
    <div
      className={cn("faq-list", (contentHorizontalAlignment === "Center") && "max-width-xl")}
    >
      {items.map((row, index) => <ListRow
        key={index}
        values={{ iconPosition: iconPosition, iconType: iconType }}
      >
        <FaqItemAccordion
          {...row}
          isOpen={openKeys.indexOf(',' + index + ',') !== -1}
          toggleAction={() => {
var key = ',' + index + ','; var open = openKeys.indexOf(key) !== -1; if (expandMode === 'Multiple') { setOpenKeys(open ? openKeys.split(key).join(',') : openKeys + index + ','); } else { setOpenKeys(open ? ',' : ',' + index + ','); }
}}
          iconPosition={iconPosition}
          iconType={iconType}
        />
      </ListRow>)}
    </div>
  );
}
