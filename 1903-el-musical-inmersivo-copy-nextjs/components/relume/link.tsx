"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";

export interface LinkProps {
  linkText?: string;
  linkHref?: string;
  contentHorizontalAlignment?: "Left" | "Center";
  linkHasUnderline?: boolean;
}

export function Link(props: LinkProps) {
  const listRow = useListRow();
  const linkHasUnderline = props.linkHasUnderline ?? listRow?.linkHasUnderline ?? true;
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const linkHref = props.linkHref ?? "";
  const linkText = props.linkText ?? "Link";
  return (
    <a
      className={cn("text-style-small link", linkHasUnderline && "text-underline", !linkHasUnderline && "text-decoration-none", (contentHorizontalAlignment === "Center") && "align-center")}
      href={linkHref || undefined}
    >
      {linkText}
    </a>
  );
}
