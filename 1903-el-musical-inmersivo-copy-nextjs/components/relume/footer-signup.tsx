"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Paragraph } from "./paragraph";
import { SignupForm } from "./signup-form";
import { Text } from "./text";

export interface FooterSignupProps {
  signupHeadingText?: ReactNode;
  signupDescription?: ReactNode;
  contentHorizontalAlignment?: "Left" | "Center";
  submitLabel?: string;
  microcopy?: ReactNode;
  formName?: string;
  successMessage?: string;
  errorMessage?: string;
  labelText?: string;
  placeholderText?: string;
  hasLabel?: boolean;
  required?: boolean;
  fieldName?: string;
  showFormLabel?: boolean;
  submitButtonHierarchy?: "Primary" | "Secondary";
  buttonHasLeadingIcon?: boolean;
  buttonLeadingIcon?: string;
  buttonHasTrailingIcon?: boolean;
  buttonTrailingIcon?: string;
  showMicrocopy?: boolean;
  showHeading?: boolean;
  showParagraph?: boolean;
}

export function FooterSignup(props: FooterSignupProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const signupHeadingText = props.signupHeadingText ?? <>Subscribe</>;
  const showHeading = props.showHeading ?? true;
  const signupDescription = props.signupDescription ?? <>Stay up to date on our latest releases</>;
  const showParagraph = props.showParagraph ?? true;
  return (
    <div
      className={cn("stack max-width-sm", (contentHorizontalAlignment === "Center") && "items-center text-align-center align-center")}
    >
      {(showHeading || showParagraph) && <div className="stack gap-element-tiny">
        {showHeading && <Text
          textWeight={"Strong"}
          textContent={signupHeadingText}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
        {showParagraph && <Paragraph
          paragraphText={signupDescription}
          paragraphSize={"Small"}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>}
      <SignupForm
        submitLabel={props.submitLabel}
        microcopy={props.microcopy}
        formName={props.formName}
        successMessage={props.successMessage}
        errorMessage={props.errorMessage}
        labelText={props.labelText}
        placeholderText={props.placeholderText}
        hasLabel={props.hasLabel}
        required={props.required}
        fieldName={props.fieldName}
        showFormLabel={props.showFormLabel}
        submitButtonHierarchy={props.submitButtonHierarchy}
        buttonHasLeadingIcon={props.buttonHasLeadingIcon}
        buttonLeadingIcon={props.buttonLeadingIcon}
        buttonHasTrailingIcon={props.buttonHasTrailingIcon}
        buttonTrailingIcon={props.buttonTrailingIcon}
        showMicrocopy={props.showMicrocopy}
      />
    </div>
  );
}
