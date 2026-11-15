"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { CustomerLogo } from "./customer-logo";

export interface CredibilityListInlineVerticalSectionProps {
  customerLogoItems?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function CredibilityListInlineVerticalSection(props: CredibilityListInlineVerticalSectionProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const customerLogoItems = props.customerLogoItems ?? [{ customerLogoSource: "/assets/external/414de6df.svg" }, { customerLogoSource: "/assets/external/b4482920.svg" }, { customerLogoSource: "/assets/external/d6498010.svg" }, { customerLogoSource: "/assets/external/91e25d80.svg" }, { customerLogoSource: "/assets/external/11b293a7.svg" }, { customerLogoSource: "/assets/external/b9d39826.svg" }, { customerLogoSource: "/assets/external/cbb8c2c2.svg" }];
  return (
    <div
      className={cn("customer-logo-row", (contentHorizontalAlignment === "Center") && "align-items-center")}
    >
      {customerLogoItems.map((row, index) => <CustomerLogo key={index} {...row} />)}
    </div>
  );
}
