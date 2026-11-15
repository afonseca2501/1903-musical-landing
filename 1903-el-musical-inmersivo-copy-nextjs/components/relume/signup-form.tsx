"use client";

import { type CSSProperties, type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { SubmitButton } from "./submit-button";
import { SignUpInput } from "./sign-up-input";
import { Text } from "./text";
import styles from "./signup-form.module.css";

export interface SignupFormProps {
  submitLabel?: string;
  microcopy?: ReactNode;
  contentHorizontalAlignment?: "Left" | "Center";
  signupFormStacked?: boolean;
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
}

export function SignupForm(props: SignupFormProps) {
  const listRow = useListRow();
  const [status, setStatus] = useState("idle");
  const [errorText, setErrorText] = useState("");
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const formName = props.formName ?? "";
  const signupFormStacked = props.signupFormStacked ?? listRow?.signupFormStacked ?? false;
  const submitLabel = props.submitLabel ?? "Sign up";
  const errorMessage = props.errorMessage ?? "Something went wrong. Please try again.";
  const microcopy = props.microcopy ?? <>By signing up, you agree to our Terms and Privacy Policy.</>;
  const showMicrocopy = props.showMicrocopy ?? false;
  const successMessage = props.successMessage ?? "Thanks — you're signed up.";
  return (
    <form
      className={cn("stack gap-element-small max-width-sm signup-min-width", (contentHorizontalAlignment === "Center") && "align-center")}
      name={formName}
      onSubmit={(event: any) => event.preventDefault()}
    >
      <div
        style={{ display: status === 'success' ? 'none' : 'contents' } as CSSProperties}
      >
        <div className={styles.captcha} data-captcha-container="true" />
        <div
          className={cn("signup-form-wrapper row", signupFormStacked && styles.formWrapperSignupFormStackedTrue)}
        >
          <SignUpInput
            labelText={props.labelText}
            placeholderText={props.placeholderText}
            required={props.required}
            fieldName={props.fieldName}
            showFormLabel={props.showFormLabel}
            hasLabel={props.hasLabel ?? false}
          />
          <SubmitButton
            submitButtonHierarchy={props.submitButtonHierarchy}
            buttonHasLeadingIcon={props.buttonHasLeadingIcon}
            buttonLeadingIcon={props.buttonLeadingIcon}
            buttonHasTrailingIcon={props.buttonHasTrailingIcon}
            buttonTrailingIcon={props.buttonTrailingIcon}
            buttonLabel={submitLabel}
          />
        </div>
        <p
          className="text-style-small"
          style={{ display: status === 'error' ? 'block' : 'none' } as CSSProperties}
          role="alert"
        >
          {errorText || errorMessage}
        </p>
        {showMicrocopy && <Text
          textContent={microcopy}
          textSize={"Tiny"}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>
      <p
        className="text-style-medium"
        style={{ display: status === 'success' ? 'contents' : 'none' } as CSSProperties}
        role="status"
      >
        {successMessage}
      </p>
    </form>
  );
}
