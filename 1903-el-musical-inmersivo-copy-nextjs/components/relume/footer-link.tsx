"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Tag } from "./tag";

export interface FooterLinkProps {
  footerLabel?: string;
  footerLinkHref?: string;
  footerLinkStyle?: "Column" | "Menu";
  showTag?: boolean;
  tagHasIcon?: boolean;
  iconGlyph?: string;
  tagText?: string;
  showIcon?: boolean;
}

export function FooterLink(props: FooterLinkProps) {
  const listRow = useListRow();
  const footerLinkStyle = props.footerLinkStyle ?? listRow?.footerLinkStyle ?? "Column";
  const footerLinkHref = props.footerLinkHref ?? "#";
  const footerLabel = props.footerLabel ?? "Link";
  const showTag = props.showTag ?? false;
  return (
    <a
      className={cn((footerLinkStyle === "Column") && "footer-link", (footerLinkStyle === "Menu") && "footer-link-menu")}
      href={footerLinkHref || undefined}
    >
      <span>{footerLabel}</span>
      {showTag && <Tag
        tagHasIcon={props.tagHasIcon}
        iconGlyph={props.iconGlyph}
        tagText={props.tagText}
        showIcon={props.showIcon}
        tagSize={"Small"}
      />}
    </a>
  );
}
