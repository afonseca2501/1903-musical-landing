import { type ReactNode } from "react";
import { cn, fillSlot } from "@/lib/utils";
import { Tagline } from "./tagline";
import { ButtonGroup } from "./button-group";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import { IconList } from "./icon-list";
import styles from "./feature-content-block-horizontal.module.css";

export interface FeatureContentBlockHorizontalProps {
  contentVerticalAlignment?: "Top" | "Center" | "Bottom" | "Space-between";
  headingText?: ReactNode;
  paragraphText?: ReactNode;
  showTagline?: boolean;
  taglineText?: string;
  taglineHasIcon?: boolean;
  iconGlyph?: string;
  showParagraph?: boolean;
  showFeatureSupportingList?: boolean;
  featureSupportingListSlot?: ReactNode;
  showButtonGroup?: boolean;
  buttonGroupRows?: Record<string, any>[];
}

export function FeatureContentBlockHorizontal(props: FeatureContentBlockHorizontalProps) {
  const contentVerticalAlignment = props.contentVerticalAlignment ?? "Center";
  const showTagline = props.showTagline ?? true;
  const headingText = props.headingText ?? <>Heading goes here</>;
  const paragraphText = props.paragraphText ?? <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique, at fermentum eros mi vitae diam.
    </>;
  const showParagraph = props.showParagraph ?? true;
  const showFeatureSupportingList = props.showFeatureSupportingList ?? false;
  const showButtonGroup = props.showButtonGroup ?? true;
  return (
    <div
      className={cn("stack fill-height", (contentVerticalAlignment === "Top") && "stack-top", (contentVerticalAlignment === "Center") && "stack-center", (contentVerticalAlignment === "Bottom") && "stack-bottom", (contentVerticalAlignment === "Space-between") && "stack-between")}
    >
      <div className="stack gap-element-small">
        {showTagline && <div className="row">
          {showTagline && <Tagline
            taglineText={props.taglineText}
            taglineHasIcon={props.taglineHasIcon}
            iconGlyph={props.iconGlyph}
          />}
        </div>}
        <Heading headingSize={"H2"} headingTag={"H2"} headingText={headingText} />
      </div>
      {((showParagraph || showFeatureSupportingList) || showButtonGroup) && <div className="stack gap-element-large">
        {(showParagraph || showFeatureSupportingList) && <div className="stack">
          {showParagraph && <Paragraph paragraphText={paragraphText} />}
          {showFeatureSupportingList && <div className={styles.slot}>
            {(props.featureSupportingListSlot && fillSlot(props.featureSupportingListSlot, { contentHorizontalAlignment: "Left" }, {  })) ?? <IconList contentHorizontalAlignment={"Left"} />}
          </div>}
        </div>}
        {showButtonGroup && <ButtonGroup
          items={props.buttonGroupRows ?? [{ buttonHierarchy: "Secondary" }]}
        />}
      </div>}
    </div>
  );
}
