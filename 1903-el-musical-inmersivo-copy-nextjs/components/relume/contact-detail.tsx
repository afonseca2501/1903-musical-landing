"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Paragraph } from "./paragraph";
import { ContactMark } from "./contact-mark";
import { Text } from "./text";

export interface ContactDetailProps {
  contactText?: ReactNode;
  contentHorizontalAlignment?: "Left" | "Center";
  contactTitle?: ReactNode;
  contactTitleVisible?: boolean;
  contactMarkVisible?: boolean;
  contactChannel?: "Email" | "Phone" | "Location" | "LinkedIn" | "X" | "Instagram" | "Facebook" | "YouTube" | "TikTok" | "GitHub" | "Dribbble";
  showMark?: boolean;
  iconColorSource?: "Token" | "Inherit";
  showTitle?: boolean;
}

export function ContactDetail(props: ContactDetailProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const contactMarkVisible = props.contactMarkVisible ?? true;
  const contactChannel = props.contactChannel ?? "Email";
  const showMark = props.showMark ?? contactMarkVisible;
  const contactTitleVisible = props.contactTitleVisible ?? false;
  const contactTitle = props.contactTitle ?? <>Title</>;
  const showTitle = props.showTitle ?? contactTitleVisible;
  const contactText = props.contactText ?? <>hello@company.com</>;
  return (
    <div
      className={cn("stack gap-element-tiny", (contentHorizontalAlignment === "Center") && "align-items-center width-auto")}
    >
      <div
        className={cn((contentHorizontalAlignment === "Left") && "row gap-element-horizontal-small row-top", (contentHorizontalAlignment === "Center") && "stack align-items-center gap-element-horizontal-tiny")}
      >
        {showMark && <ContactMark
          iconColorSource={props.iconColorSource}
          contactChannel={contactChannel}
        />}
        <div className="stack gap-0">
          {showTitle && <Text
            textContent={contactTitle}
            textWeight={"Strong"}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />}
          <Paragraph paragraphText={contactText} paragraphSize={"Regular"} />
        </div>
      </div>
    </div>
  );
}
