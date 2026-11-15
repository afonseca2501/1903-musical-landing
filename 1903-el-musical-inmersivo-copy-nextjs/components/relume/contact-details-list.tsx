"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { ContactDetail } from "./contact-detail";

export interface ContactDetailsListProps {
  contentHorizontalAlignment?: "Left" | "Center";
  items?: Record<string, any>[];
}

export function ContactDetailsList(props: ContactDetailsListProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const items = props.items ?? [{ contactText: "Level 1, 123 Sample St, Sydney NSW 2000", contactChannel: "Location", contentHorizontalAlignment: "Left", contactTitle: "Title", contactTitleVisible: false, contactMarkVisible: true }, { contactText: "Call us on 9876 5432", contactChannel: "Phone", contentHorizontalAlignment: "Left", contactTitle: "Title", contactTitleVisible: false, contactMarkVisible: true }, { contactText: "Email us at email@example.com", contactChannel: "Email", contentHorizontalAlignment: "Left", contactTitle: "Title", contactTitleVisible: false, contactMarkVisible: true }];
  return (
    <div
      className={cn("stack gap-element-small body-max-width", (contentHorizontalAlignment === "Center") && "align-center align-items-center")}
    >
      {items.map((row, index) => <ContactDetail
        key={index}
        {...row}
        contentHorizontalAlignment={contentHorizontalAlignment}
        contactTitleVisible={row.contactTitleVisible ?? false}
      />)}
    </div>
  );
}
