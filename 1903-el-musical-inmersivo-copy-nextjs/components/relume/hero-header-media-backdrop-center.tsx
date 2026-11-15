import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroContentBlockVerticalCenterSectionCopy } from "./hero-content-block-vertical-center-section-copy";
import { BackdropMedia } from "./backdrop-media";

export interface HeroHeaderMediaBackdropCenterProps {
  sectionScheme?: string;
  sectionHeight?: "Auto" | "Viewport";
  contentVerticalPosition?: "Top" | "Center" | "Bottom";
  overlay?: "None" | "Dark 30" | "Dark 40" | "Dark 50";
  mediaType?: "Image" | "Video";
  imageSource?: string;
  placeholderType?: "Photography" | "Headshot" | "Interface" | "Graphic" | "Diagram";
  backgroundVideoSource?: string;
  imageFit?: "Cover" | "Contain";
  imageObjectPosition?: "Top Left" | "Top Center" | "Top Right" | "Center Left" | "Center" | "Center Right" | "Bottom Left" | "Bottom Center" | "Bottom Right";
  showContainer?: boolean;
  showHeaderContentBlockVertical?: boolean;
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
  showBackdropMediaWrapper?: boolean;
  showMediaOverlay?: boolean;
  showHeroMediaBackdrop?: boolean;
  backdropClass?: string;
}

export function HeroHeaderMediaBackdropCenter(props: HeroHeaderMediaBackdropCenterProps) {
  const sectionHeight = props.sectionHeight ?? "Viewport";
  const contentVerticalPosition = props.contentVerticalPosition ?? "Center";
  const contentVerticalPositionActive = sectionHeight === "Viewport" ? contentVerticalPosition : "Center";
  const showHeaderContentBlockVertical = props.showHeaderContentBlockVertical ?? true;
  const showContainer = props.showContainer ?? true;
  const imageFit = props.imageFit ?? "Cover";
  const mediaType = props.mediaType ?? "Image";
  const imageSource = props.imageSource ?? "/assets/external/79db9652.svg";
  const placeholderType = props.placeholderType ?? "Photography";
  const imageObjectPosition = props.imageObjectPosition ?? "Center";
  const backgroundVideoSource = props.backgroundVideoSource ?? "";
  const showHeroMediaBackdrop = props.showHeroMediaBackdrop ?? true;
  const overlay = props.overlay ?? "Dark 40";
  const showMediaOverlay = props.showMediaOverlay ?? true;
  const showBackdropMediaWrapper = props.showBackdropMediaWrapper ?? true;
  return (
    (showContainer || showBackdropMediaWrapper) && <section
      className={cn(props.sectionScheme ?? "scheme-1", "section", props.backdropClass, (sectionHeight === "Viewport") && "section-100vh")}
    >
      {showContainer && (showHeaderContentBlockVertical && <div
        className={cn("container z-index-1", ((sectionHeight === "Viewport" && (contentVerticalPositionActive === "Top"))) && "self-start", ((sectionHeight === "Viewport" && (contentVerticalPositionActive === "Bottom"))) && "self-end")}
      >
        {showHeaderContentBlockVertical && <HeroContentBlockVerticalCenterSectionCopy
          showContentTop={props.showContentTop}
          showHeading={props.showHeading}
          headingText={props.headingText}
          showEyebrowWrapper={props.showEyebrowWrapper}
          showHeroEyebrow={props.showHeroEyebrow}
          heroEyebrowSlot={props.heroEyebrowSlot}
          showContentBottom={props.showContentBottom}
          showWrapper={props.showWrapper}
          showAction={props.showAction}
          actionSlot={props.actionSlot}
          showTextWrapper={props.showTextWrapper}
          showParagraph={props.showParagraph}
          paragraphText={props.paragraphText}
          showSupportingList={props.showSupportingList}
          supportingListSlot={props.supportingListSlot}
          showCredibilityReinforcement={props.showCredibilityReinforcement}
          credibilityReinforcementSlot={props.credibilityReinforcementSlot}
          contentHorizontalAlignment={"Center"}
        />}
      </div>)}
      {showBackdropMediaWrapper && ((showHeroMediaBackdrop || showMediaOverlay) && <div className="backdrop-media-wrapper">
        {showHeroMediaBackdrop && <BackdropMedia
          imageFit={imageFit}
          mediaType={mediaType}
          imageSource={imageSource}
          placeholderType={placeholderType}
          imageObjectPosition={imageObjectPosition}
          backgroundVideoSource={backgroundVideoSource}
        />}
        {showMediaOverlay && <div
          className={cn((overlay === "None") && "media-overlay-none", (overlay === "Dark 30") && "media-overlay-dark30", (overlay === "Dark 40") && "media-overlay-dark40", (overlay === "Dark 50") && "media-overlay-dark50")}
        />}
      </div>)}
    </section>
  );
}
