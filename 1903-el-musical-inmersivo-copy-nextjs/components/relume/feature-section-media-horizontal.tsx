import { type ReactNode } from "react";
import { cn, fillSlot } from "@/lib/utils";
import { FeatureContentBlockHorizontal } from "./feature-content-block-horizontal";
import { Media } from "./media";
import styles from "./feature-section-media-horizontal.module.css";

export interface FeatureSectionMediaHorizontalProps {
  sectionScheme?: string;
  columnRatio?: "1:1" | "2:3";
  sectionPadding?: "Top & Bottom" | "Top Only";
  assetHorizontalPosition?: "Left" | "Right";
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
  mediaSlot?: ReactNode;
  backdropClass?: string;
}

export function FeatureSectionMediaHorizontal(props: FeatureSectionMediaHorizontalProps) {
  const sectionPadding = props.sectionPadding ?? "Top & Bottom";
  const assetHorizontalPosition = props.assetHorizontalPosition ?? "Right";
  const columnRatio = props.columnRatio ?? "1:1";
  return (
    <section
      className={cn(props.sectionScheme ?? "scheme-1", "section", props.backdropClass, (sectionPadding === "Top Only") && "section-padding-bottom-0")}
    >
      <div className="container">
        <div
          className={cn("grid-column-2", ((columnRatio === "2:3" && (assetHorizontalPosition === "Left"))) && "column-three-two", ((columnRatio === "2:3" && (assetHorizontalPosition === "Right"))) && "column-two-three")}
        >
          {(assetHorizontalPosition === "Left") ? <>
            <div className="stack fill-height stack-center">
              <div className={styles.slot}>
                {(props.mediaSlot && fillSlot(props.mediaSlot, { aspectRatio: "Square", mediaSize: "Large", imageFit: "Cover", mediaRadius: "Standard" }, {  })) ?? <Media
                  aspectRatio={"Square"}
                  mediaSize={"Large"}
                  imageFit={"Cover"}
                  mediaRadius={"Standard"}
                />}
              </div>
            </div>
            <FeatureContentBlockHorizontal
              headingText={props.headingText}
              paragraphText={props.paragraphText}
              showTagline={props.showTagline}
              taglineText={props.taglineText}
              taglineHasIcon={props.taglineHasIcon}
              iconGlyph={props.iconGlyph}
              showParagraph={props.showParagraph}
              showFeatureSupportingList={props.showFeatureSupportingList}
              featureSupportingListSlot={props.featureSupportingListSlot}
              showButtonGroup={props.showButtonGroup}
              buttonGroupRows={props.buttonGroupRows}
              contentVerticalAlignment={props.contentVerticalAlignment ?? "Center"}
            />
          </> : <>
            <FeatureContentBlockHorizontal
              headingText={props.headingText}
              paragraphText={props.paragraphText}
              showTagline={props.showTagline}
              taglineText={props.taglineText}
              taglineHasIcon={props.taglineHasIcon}
              iconGlyph={props.iconGlyph}
              showParagraph={props.showParagraph}
              showFeatureSupportingList={props.showFeatureSupportingList}
              featureSupportingListSlot={props.featureSupportingListSlot}
              showButtonGroup={props.showButtonGroup}
              buttonGroupRows={props.buttonGroupRows}
              contentVerticalAlignment={props.contentVerticalAlignment ?? "Center"}
            />
            <div className="stack fill-height stack-center">
              <div className={styles.slot}>
                {(props.mediaSlot && fillSlot(props.mediaSlot, { aspectRatio: "Square", mediaSize: "Large", imageFit: "Cover", mediaRadius: "Standard" }, {  })) ?? <Media
                  aspectRatio={"Square"}
                  mediaSize={"Large"}
                  imageFit={"Cover"}
                  mediaRadius={"Standard"}
                />}
              </div>
            </div>
          </>}
        </div>
      </div>
    </section>
  );
}
