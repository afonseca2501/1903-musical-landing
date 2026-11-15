"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { FooterLink } from "./footer-link";

export interface FooterMenuProps {
  items?: Record<string, any>[];
  contentHorizontalAlignment?: "Left" | "Center";
}

export function FooterMenu(props: FooterMenuProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const items = props.items ?? [{  }, {  }, {  }, {  }, {  }];
  return (
    <div
      className={cn((contentHorizontalAlignment === "Left") && "footer-menu", (contentHorizontalAlignment === "Center") && "footer-menu-center")}
    >
      {items.map((row, index) => <FooterLink
        key={index}
        {...row}
        footerLinkStyle={row.footerLinkStyle ?? "Menu"}
      />)}
    </div>
  );
}
