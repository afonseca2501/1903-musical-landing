"use client";

import { useId } from "react";
import { useListRow } from "@/lib/list-row";

export interface SignUpInputProps {
  labelText?: string;
  placeholderText?: string;
  hasLabel?: boolean;
  required?: boolean;
  inputType?: "Plain" | "Email" | "Phone" | "Number" | "URL" | "Date";
  fieldName?: string;
  showFormLabel?: boolean;
}

export function SignUpInput(props: SignUpInputProps) {
  const fieldId = useId();
  const listRow = useListRow();
  const hasLabel = props.hasLabel ?? true;
  const labelText = props.labelText ?? "Label";
  const showFormLabel = props.showFormLabel ?? hasLabel;
  const inputType = props.inputType ?? listRow?.inputType ?? "Email";
  const placeholderText = props.placeholderText ?? "Enter your email";
  const fieldName = props.fieldName ?? "";
  const required = props.required ?? true;
  return (
    <div className="form_input-wrapper">
      {showFormLabel && <label className="input-label" htmlFor={fieldId}>{labelText}</label>}
      <input
        className="input"
        type={({plain:'text',email:'email',phone:'tel',number:'number',url:'url'})[String(inputType).toLowerCase()] || 'text'}
        placeholder={placeholderText}
        name={fieldName}
        required={required}
        id={showFormLabel ? fieldId : undefined}
        aria-label={showFormLabel ? undefined : labelText || undefined}
      />
    </div>
  );
}
