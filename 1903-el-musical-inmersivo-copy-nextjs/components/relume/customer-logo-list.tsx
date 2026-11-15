"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { CustomerLogo } from "./customer-logo";
import { Text } from "./text";

export interface CustomerLogoListProps {
  customerLogoItems?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
  customerLogoLabel?: ReactNode;
  showText?: boolean;
}

export function CustomerLogoList(props: CustomerLogoListProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const customerLogoLabel = props.customerLogoLabel ?? <>Trusted by the world's best companies</>;
  const showText = props.showText ?? true;
  const customerLogoItems = props.customerLogoItems ?? [{ customerLogoSource: "/assets/external/414de6df.svg" }, { customerLogoSource: "/assets/external/b4482920.svg" }, { customerLogoSource: "/assets/external/d6498010.svg" }, { customerLogoSource: "/assets/external/91e25d80.svg" }];
  return (
    <div className="stack gap-element-small">
      {showText && <Text
        textWeight={"Strong"}
        textSize={"Regular"}
        contentHorizontalAlignment={contentHorizontalAlignment}
        textContent={customerLogoLabel}
      />}
      <div
        className={cn("customer-logo-row", (contentHorizontalAlignment === "Center") && "align-center align-items-center")}
      >
        {customerLogoItems.map((row, index) => <CustomerLogo key={index} {...row} />)}
      </div>
    </div>
  );
}
