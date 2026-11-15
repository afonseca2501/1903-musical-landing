"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import styles from "./media.module.css";

export interface MediaProps {
  mediaSize?: "Medium" | "Large";
  mediaRadius?: "None" | "Standard";
  imageFit?: "Cover" | "Contain";
  imageObjectPosition?: "Top Left" | "Top Center" | "Top Right" | "Center Left" | "Center" | "Center Right" | "Bottom Left" | "Bottom Center" | "Bottom Right";
  mediaWidth?: "100%" | "Auto";
  aspectRatio?: "Auto" | "Fill" | "Square" | "Portrait" | "Landscape" | "Widescreen" | "Classic Portrait" | "Classic Landscape";
  contentHorizontalAlignment?: "Left" | "Center";
  mediaFillColumn?: boolean;
  imagePlacement?: "None" | "Card Vertical" | "Card Horizontal Left" | "Card Horizontal Right";
  mediaType?: "Image" | "Video";
  imageSource?: string;
  placeholderType?: "Photography" | "Headshot" | "Interface" | "Graphic" | "Diagram";
  backgroundVideoSource?: string;
}

export function Media(props: MediaProps) {
  const listRow = useListRow();
  const mediaSize = props.mediaSize ?? listRow?.mediaSize ?? "Large";
  const mediaRadius = props.mediaRadius ?? listRow?.mediaRadius ?? "Standard";
  const mediaFillColumn = props.mediaFillColumn ?? listRow?.mediaFillColumn ?? false;
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const aspectRatio = props.aspectRatio ?? "Auto";
  const mediaWidth = props.mediaWidth ?? "100%";
  const imagePlacement = props.imagePlacement ?? listRow?.imagePlacement ?? "None";
  const imageFit = props.imageFit ?? "Cover";
  const mediaType = props.mediaType ?? "Image";
  const imageObjectPosition = props.imageObjectPosition ?? "Center";
  const imageSource = props.imageSource ?? "/assets/external/79db9652.svg";
  const backgroundVideoSource = props.backgroundVideoSource ?? "";
  return (
    ((mediaType === "Image") || (mediaType === "Video")) && <div
      className={cn("media-wrapper", (mediaSize === "Medium") && "media-medium", (mediaRadius === "None") && styles.rootMediaRadiusNone, mediaFillColumn && "media-column-fill", (contentHorizontalAlignment === "Center") && "align-center", (aspectRatio === "Fill") && "media-fill", (aspectRatio === "Square") && "aspect-square", (aspectRatio === "Portrait") && "aspect-portrait", (aspectRatio === "Landscape") && "aspect-landscape", (aspectRatio === "Widescreen") && "aspect-widescreen", (aspectRatio === "Classic Portrait") && "aspect-classic-portrait", (aspectRatio === "Classic Landscape") && "aspect-classic-landscape", (mediaWidth === "Auto") && "media-width-fit", ((mediaWidth === "Auto" && (imagePlacement === "Card Vertical"))) && "icon-placed-stacked", ((mediaWidth === "Auto" && (imagePlacement === "Card Horizontal Left"))) && "image-placed-beside-left", ((mediaWidth === "Auto" && (imagePlacement === "Card Horizontal Right"))) && "image-placed-beside-right", ((mediaWidth === "Auto" && mediaFillColumn)) && styles.rootMediaFillColumnTrueMediaWidthAuto, ((mediaWidth === "Auto" && ((aspectRatio === "Fill" && (imagePlacement === "Card Horizontal Left"))))) && styles.rootAspectRatioFillImagePlacementCardHorizontalLeftMediaWidthAuto, ((mediaWidth === "Auto" && ((aspectRatio === "Fill" && (imagePlacement === "Card Horizontal Right"))))) && styles.rootAspectRatioFillImagePlacementCardHorizontalRightMediaWidthAuto, (imageFit === "Contain") && "object-contain", (mediaSize === "Large") && "media-large")}
    >
      {(mediaType === "Image") && <img
        className={cn("media", (imageFit === "Cover") && "object-cover", (imageObjectPosition === "Top Left") && styles.imageObjectPositionTopLeft, (imageObjectPosition === "Top Center") && styles.imageObjectPositionTopCenter, (imageObjectPosition === "Top Right") && styles.imageObjectPositionTopRight, (imageObjectPosition === "Center Left") && styles.imageObjectPositionCenterLeft, (imageObjectPosition === "Center Right") && styles.imageObjectPositionCenterRight, (imageObjectPosition === "Bottom Left") && styles.imageObjectPositionBottomLeft, (imageObjectPosition === "Bottom Center") && styles.imageObjectPositionBottomCenter, (imageObjectPosition === "Bottom Right") && styles.imageObjectPositionBottomRight, (imageFit === "Contain") && "object-contain")}
        src={imageSource}
        alt=""
      />}
      {(mediaType === "Video") && <video
        className={cn("media", (imageFit === "Cover") && "object-cover", (imageObjectPosition === "Top Left") && styles.videoImageObjectPositionTopLeft, (imageObjectPosition === "Top Center") && styles.videoImageObjectPositionTopCenter, (imageObjectPosition === "Top Right") && styles.videoImageObjectPositionTopRight, (imageObjectPosition === "Center Left") && styles.videoImageObjectPositionCenterLeft, (imageObjectPosition === "Center Right") && styles.videoImageObjectPositionCenterRight, (imageObjectPosition === "Bottom Left") && styles.videoImageObjectPositionBottomLeft, (imageObjectPosition === "Bottom Center") && styles.videoImageObjectPositionBottomCenter, (imageObjectPosition === "Bottom Right") && styles.videoImageObjectPositionBottomRight, (imageFit === "Contain") && "object-contain")}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        poster="/assets/external/f30989ff.svg"
      >
        <source
          className="media object-cover"
          src={backgroundVideoSource}
          type="video/mp4"
        />
      </video>}
    </div>
  );
}
