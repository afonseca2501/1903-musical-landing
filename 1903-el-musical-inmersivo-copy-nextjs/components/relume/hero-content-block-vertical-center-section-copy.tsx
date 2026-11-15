"use client";

import { type ReactNode } from "react";
import { fillSlot } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Tagline } from "./tagline";
import { ButtonGroup } from "./button-group";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import { IconList } from "./icon-list";
import { CustomerLogoList } from "./customer-logo-list";
import styles from "./hero-content-block-vertical-center-section-copy.module.css";

export interface HeroContentBlockVerticalCenterSectionCopyProps {
  contentHorizontalAlignment?: "Left" | "Center";
  showContentTop?: boolean;
  showHeading?: boolean;
  headingText?: ReactNode;
  showEyebrowWrapper?: boolean;
  showHeroEyebrow?: boolean;
  heroEyebrowSlot?: ReactNode;
  showContentBottom?: boolean;
  showWrapper?: boolean;
  showAction?: boolean;
  actionSlot?: ReactNode;
  showTextWrapper?: boolean;
  showParagraph?: boolean;
  paragraphText?: ReactNode;
  showSupportingList?: boolean;
  supportingListSlot?: ReactNode;
  showCredibilityReinforcement?: boolean;
  credibilityReinforcementSlot?: ReactNode;
}

export function HeroContentBlockVerticalCenterSectionCopy(props: HeroContentBlockVerticalCenterSectionCopyProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const showHeroEyebrow = props.showHeroEyebrow ?? true;
  const showEyebrowWrapper = props.showEyebrowWrapper ?? true;
  const showHeading = props.showHeading ?? false;
  const showContentTop = props.showContentTop ?? true;
  const showParagraph = props.showParagraph ?? true;
  const showSupportingList = props.showSupportingList ?? false;
  const showTextWrapper = props.showTextWrapper ?? true;
  const showAction = props.showAction ?? true;
  const showWrapper = props.showWrapper ?? true;
  const showCredibilityReinforcement = props.showCredibilityReinforcement ?? false;
  const showContentBottom = props.showContentBottom ?? true;
  return (
    (showContentTop || showContentBottom) && <div className="stack">
      {showContentTop && ((showEyebrowWrapper || showHeading) && <div className="stack gap-element-small">
        {showEyebrowWrapper && (showHeroEyebrow && <div className="row">
          {showHeroEyebrow && <div className={styles.slot}>
            {(props.heroEyebrowSlot && fillSlot(props.heroEyebrowSlot, {  }, { contentHorizontalAlignment: contentHorizontalAlignment })) ?? <Tagline contentHorizontalAlignment={contentHorizontalAlignment} />}
          </div>}
        </div>)}
        {showHeading && <Heading
          headingText={props.headingText}
          headingTag={"H1"}
          headingSize={"H1"}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>)}
      {showContentBottom && ((showWrapper || showCredibilityReinforcement) && <div className="stack gap-element-xlarge">
        {showWrapper && ((showTextWrapper || showAction) && <div className="stack gap-element-large">
          {showTextWrapper && ((showParagraph || showSupportingList) && <div className="stack">
            {showParagraph && <Paragraph
              paragraphText={props.paragraphText}
              paragraphSize={"Medium"}
              contentHorizontalAlignment={contentHorizontalAlignment}
            />}
            {showSupportingList && <div className={styles.slot}>
              {(props.supportingListSlot && fillSlot(props.supportingListSlot, {  }, { contentHorizontalAlignment: contentHorizontalAlignment })) ?? <IconList contentHorizontalAlignment={contentHorizontalAlignment} />}
            </div>}
          </div>)}
          {showAction && <div className={styles.slot}>
            {(props.actionSlot && fillSlot(props.actionSlot, { items: [{  }] }, { buttonGroupAlignment: contentHorizontalAlignment, contentHorizontalAlignment: contentHorizontalAlignment })) ?? <ButtonGroup
              items={[{  }]}
              buttonGroupAlignment={contentHorizontalAlignment}
              contentHorizontalAlignment={contentHorizontalAlignment}
            />}
          </div>}
        </div>)}
        {showCredibilityReinforcement && <div className={styles.slot}>
          {(props.credibilityReinforcementSlot && fillSlot(props.credibilityReinforcementSlot, {  }, { contentHorizontalAlignment: contentHorizontalAlignment })) ?? <CustomerLogoList
            contentHorizontalAlignment={contentHorizontalAlignment}
          />}
        </div>}
      </div>)}
    </div>
  );
}
