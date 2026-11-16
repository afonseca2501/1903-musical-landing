"use client";

import { type CSSProperties, type ReactNode, type SyntheticEvent } from "react";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Paragraph } from "./paragraph";
import { Text } from "./text";
import styles from "./faq-item-accordion.module.css";

export interface FaqItemAccordionProps {
  faqQuestion?: ReactNode;
  faqAnswer?: ReactNode;
  iconType?: "Chevron" | "Plus & Minus";
  iconPosition?: "Leading" | "Trailing";
  columnBreak?: string;
  isOpen?: boolean;
  toggleAction?: (event: SyntheticEvent, trigger?: Record<string, any>) => void;
}

export function FaqItemAccordion(props: FaqItemAccordionProps) {
  const listRow = useListRow();
  const columnBreak = props.columnBreak ?? "auto";
  const iconPosition = props.iconPosition ?? listRow?.iconPosition ?? "Trailing";
  const isOpen = props.isOpen ?? listRow?.isOpen ?? false;
  const iconType = props.iconType ?? listRow?.iconType ?? "Chevron";
  const faqQuestion = props.faqQuestion ?? <>Question text goes here</>;
  const faqAnswer = props.faqAnswer ?? <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
    </>;
  return (
    <div
      className={cn("faq-item", styles.root)}
      style={{ breakBefore: columnBreak } as CSSProperties}
    >
      <h3 className="faq-question-wrapper">
        <button
          className={cn("faq-question", (iconPosition === "Leading") && "faq-icon-leading")}
          type="button"
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={(event) => props.toggleAction?.(event)}
        >
          {(iconPosition === "Leading") ? <>
            <div
              className="faq-icon-toggle"
              style={{ transform: isOpen ? (iconType === 'Plus & Minus' ? 'rotate(45deg)' : 'rotate(180deg)') : 'rotate(0deg)' } as CSSProperties}
            >
              <span className="icon-wrapper icon-small">
                <span className={styles.glyph}>keyboard_arrow_down</span>
              </span>
            </div>
            <Text
              textContent={faqQuestion}
              textWeight={"Strong"}
              textSize={"Regular"}
            />
          </> : <>
            <Text
              textContent={faqQuestion}
              textWeight={"Strong"}
              textSize={"Regular"}
            />
            <div
              className="faq-icon-toggle"
              style={{ transform: isOpen ? (iconType === 'Plus & Minus' ? 'rotate(45deg)' : 'rotate(180deg)') : 'rotate(0deg)' } as CSSProperties}
            >
              <span className="icon-wrapper icon-small">
                <span className={styles.glyph}>keyboard_arrow_down</span>
              </span>
            </div>
          </>}
        </button>
      </h3>
      <div
        className="faq-answer"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' } as CSSProperties}
      >
        <div className="faq-answer-inner">
          <div className="faq-answer-body">
            <Paragraph paragraphText={faqAnswer} />
          </div>
        </div>
      </div>
    </div>
  );
}
