"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Icon } from "./icon";
import styles from "./submit-button.module.css";

export interface SubmitButtonProps {
  submitButtonHierarchy?: "Primary" | "Secondary";
  buttonSize?: "Regular" | "Small";
  buttonHasLeadingIcon?: boolean;
  buttonLeadingIcon?: string;
  buttonHasTrailingIcon?: boolean;
  buttonTrailingIcon?: string;
  buttonLabel?: string;
}

export function SubmitButton(props: SubmitButtonProps) {
  const listRow = useListRow();
  const buttonHasTrailingIcon = props.buttonHasTrailingIcon ?? false;
  const buttonHasLeadingIcon = props.buttonHasLeadingIcon ?? false;
  const buttonSize = props.buttonSize ?? listRow?.buttonSize ?? "Regular";
  const submitButtonHierarchy = props.submitButtonHierarchy ?? "Primary";
  const buttonLeadingIcon = props.buttonLeadingIcon ?? "category";
  const buttonLabel = props.buttonLabel ?? "Sign up";
  const buttonTrailingIcon = props.buttonTrailingIcon ?? "arrow_forward";
  return (
    <button
      className={cn("button", styles.root, buttonHasTrailingIcon && "button-trailing-icon", buttonHasLeadingIcon && "button-leading-icon", (buttonSize === "Small") && "button-small", (submitButtonHierarchy === "Secondary") && "button-secondary")}
      type="submit"
    >
      {buttonHasLeadingIcon && <Icon
        iconGlyph={buttonLeadingIcon}
        iconSize={buttonHasLeadingIcon ? "XSmall" : buttonHasTrailingIcon ? undefined : "XSmall"}
        iconColorSource={"Inherit"}
        iconIgnoreHeight={true}
      />}
      <div className={styles.buttonText}>{buttonLabel}</div>
      {buttonHasTrailingIcon && <Icon
        iconGlyph={buttonTrailingIcon}
        iconSize={buttonHasLeadingIcon ? buttonHasTrailingIcon ? "XSmall" : undefined : "XSmall"}
        iconColorSource={"Inherit"}
        iconIgnoreHeight={true}
      />}
    </button>
  );
}
