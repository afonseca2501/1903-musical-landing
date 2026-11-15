"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Icon } from "./icon";
import styles from "./button.module.css";

export interface ButtonProps {
  buttonHierarchy?: "Primary" | "Secondary" | "Link";
  buttonSize?: "Regular" | "Small";
  buttonHasLeadingIcon?: boolean;
  buttonLeadingIcon?: string;
  buttonHasTrailingIcon?: boolean;
  buttonTrailingIcon?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

export function Button(props: ButtonProps) {
  const listRow = useListRow();
  const buttonHasTrailingIcon = props.buttonHasTrailingIcon ?? false;
  const buttonHasLeadingIcon = props.buttonHasLeadingIcon ?? false;
  const buttonSize = props.buttonSize ?? listRow?.buttonSize ?? "Regular";
  const buttonHierarchy = props.buttonHierarchy ?? "Primary";
  const buttonLink = props.buttonLink ?? "";
  const buttonLeadingIcon = props.buttonLeadingIcon ?? "category";
  const buttonLabel = props.buttonLabel ?? "Button";
  const buttonTrailingIcon = props.buttonTrailingIcon ?? "arrow_forward";
  return (
    <a
      className={cn("button", buttonHasTrailingIcon && "button-trailing-icon", buttonHasLeadingIcon && "button-leading-icon", (buttonSize === "Small") && "button-small", (buttonHierarchy === "Secondary") && "button-secondary", (buttonHierarchy === "Link") && "button-link")}
      href={buttonLink || undefined}
    >
      {buttonHasLeadingIcon && <Icon
        iconGlyph={buttonLeadingIcon}
        iconSize={buttonHasLeadingIcon ? "XSmall" : buttonHasTrailingIcon ? undefined : "XSmall"}
        iconColorSource={"Inherit"}
        iconIgnoreHeight={true}
      />}
      <div
        className={cn(styles.buttonText, (buttonHierarchy === "Link") && "button-link-label")}
      >
        {buttonLabel}
      </div>
      {buttonHasTrailingIcon && <Icon
        iconGlyph={buttonTrailingIcon}
        iconSize={buttonHasLeadingIcon ? buttonHasTrailingIcon ? "XSmall" : undefined : "XSmall"}
        iconColorSource={"Inherit"}
        iconIgnoreHeight={true}
      />}
    </a>
  );
}
