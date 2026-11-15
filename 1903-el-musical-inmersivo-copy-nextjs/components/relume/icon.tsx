"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import styles from "./icon.module.css";

export interface IconProps {
  iconGlyph?: string;
  iconSize?: "Tiny" | "XXSmall" | "XSmall" | "Small" | "Medium" | "Large" | "XLarge";
  iconFill?: boolean;
  contentHorizontalAlignment?: "Left" | "Center";
  iconPlacement?: "None" | "Card Vertical" | "Card Horizontal Left" | "Card Horizontal Right" | "Eyebrow";
  iconColorSource?: "Token" | "Inherit";
  iconIgnoreHeight?: boolean;
}

export function Icon(props: IconProps) {
  const listRow = useListRow();
  const iconColorSource = props.iconColorSource ?? listRow?.iconColorSource ?? "Token";
  const iconSize = props.iconSize ?? listRow?.iconSize ?? "Medium";
  const iconIgnoreHeight = props.iconIgnoreHeight ?? listRow?.iconIgnoreHeight ?? false;
  const iconPlacement = props.iconPlacement ?? listRow?.iconPlacement ?? "None";
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const iconFill = props.iconFill ?? listRow?.iconFill ?? false;
  const iconGlyph = props.iconGlyph ?? "category";
  return (
    <span
      className={cn("icon-wrapper", (iconColorSource === "Token") && "icon-color", (iconSize === "Tiny") && "icon-tiny", iconIgnoreHeight && "ignore-height", (iconPlacement === "Card Vertical") && "icon-placed-stacked", (iconPlacement === "Card Horizontal Left") && "icon-placed-beside-left", (iconPlacement === "Card Horizontal Right") && "icon-placed-beside-right", (iconPlacement === "Eyebrow") && "icon-placed-eyebrow", (contentHorizontalAlignment === "Center") && "align-center", (iconSize === "XXSmall") && "icon-xxsmall", (iconSize === "XSmall") && "icon-xsmall", (iconSize === "Small") && "icon-small", (iconSize === "Medium") && "icon-medium", (iconSize === "Large") && "icon-large", (iconSize === "XLarge") && "icon-xlarge")}
    >
      <span className={cn(styles.icon, iconFill && styles.iconFillTrue)}>
        {iconGlyph}
      </span>
    </span>
  );
}
