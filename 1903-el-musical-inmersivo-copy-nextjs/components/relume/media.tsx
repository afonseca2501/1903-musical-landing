"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import styles from "./media.module.css";

export interface MediaProps {
  mediaSize?: "Medium" | "Large";
  mediaRadius?: "None" | "Standard";
  imageFit?: "Cover" | "Contain";
  imageObjectPosition?:
    | "Top Left"
    | "Top Center"
    | "Top Right"
    | "Center Left"
    | "Center"
    | "Center Right"
    | "Bottom Left"
    | "Bottom Center"
    | "Bottom Right";
  mediaWidth?: "100%" | "Auto";
  aspectRatio?:
    | "Auto"
    | "Fill"
    | "Square"
    | "Portrait"
    | "Landscape"
    | "Widescreen"
    | "Classic Portrait"
    | "Classic Landscape";
  contentHorizontalAlignment?: "Left" | "Center";
  mediaFillColumn?: boolean;
  imagePlacement?:
    | "None"
    | "Card Vertical"
    | "Card Horizontal Left"
    | "Card Horizontal Right";
  mediaType?: "Image" | "Video";
  imageSource?: string;
  placeholderType?:
    | "Photography"
    | "Headshot"
    | "Interface"
    | "Graphic"
    | "Diagram";
  backgroundVideoSource?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
}

function objectPositionClass(
  imageObjectPosition: NonNullable<MediaProps["imageObjectPosition"]>,
  kind: "image" | "video",
) {
  const map = {
    "Top Left":
      kind === "image"
        ? styles.imageObjectPositionTopLeft
        : styles.videoImageObjectPositionTopLeft,
    "Top Center":
      kind === "image"
        ? styles.imageObjectPositionTopCenter
        : styles.videoImageObjectPositionTopCenter,
    "Top Right":
      kind === "image"
        ? styles.imageObjectPositionTopRight
        : styles.videoImageObjectPositionTopRight,
    "Center Left":
      kind === "image"
        ? styles.imageObjectPositionCenterLeft
        : styles.videoImageObjectPositionCenterLeft,
    Center: undefined,
    "Center Right":
      kind === "image"
        ? styles.imageObjectPositionCenterRight
        : styles.videoImageObjectPositionCenterRight,
    "Bottom Left":
      kind === "image"
        ? styles.imageObjectPositionBottomLeft
        : styles.videoImageObjectPositionBottomLeft,
    "Bottom Center":
      kind === "image"
        ? styles.imageObjectPositionBottomCenter
        : styles.videoImageObjectPositionBottomCenter,
    "Bottom Right":
      kind === "image"
        ? styles.imageObjectPositionBottomRight
        : styles.videoImageObjectPositionBottomRight,
  } as const;
  return map[imageObjectPosition];
}

export function Media(props: MediaProps) {
  const listRow = useListRow();
  const mediaSize = props.mediaSize ?? listRow?.mediaSize ?? "Large";
  const mediaRadius = props.mediaRadius ?? listRow?.mediaRadius ?? "Standard";
  const mediaFillColumn =
    props.mediaFillColumn ?? listRow?.mediaFillColumn ?? false;
  const contentHorizontalAlignment =
    props.contentHorizontalAlignment ??
    listRow?.contentHorizontalAlignment ??
    "Left";
  const aspectRatio = props.aspectRatio ?? "Auto";
  const mediaWidth = props.mediaWidth ?? "100%";
  const imagePlacement =
    props.imagePlacement ?? listRow?.imagePlacement ?? "None";
  const imageFit = props.imageFit ?? "Cover";
  const mediaType = props.mediaType ?? "Image";
  const imageObjectPosition = props.imageObjectPosition ?? "Center";
  const imageSource = props.imageSource ?? "/assets/external/79db9652.svg";
  const backgroundVideoSource = props.backgroundVideoSource ?? "";
  const sizes =
    props.sizes ??
    (aspectRatio === "Portrait"
      ? "(max-width: 991px) 50vw, 25vw"
      : "(max-width: 991px) 100vw, 50vw");
  const isSvg = imageSource.endsWith(".svg");
  const useFill = aspectRatio !== "Auto";

  return (
    ((mediaType === "Image") || (mediaType === "Video")) && (
      <div
        className={cn(
          "media-wrapper",
          mediaSize === "Medium" && "media-medium",
          mediaRadius === "None" && styles.rootMediaRadiusNone,
          mediaFillColumn && "media-column-fill",
          contentHorizontalAlignment === "Center" && "align-center",
          aspectRatio === "Fill" && "media-fill",
          aspectRatio === "Square" && "aspect-square",
          aspectRatio === "Portrait" && "aspect-portrait",
          aspectRatio === "Landscape" && "aspect-landscape",
          aspectRatio === "Widescreen" && "aspect-widescreen",
          aspectRatio === "Classic Portrait" && "aspect-classic-portrait",
          aspectRatio === "Classic Landscape" && "aspect-classic-landscape",
          mediaWidth === "Auto" && "media-width-fit",
          mediaWidth === "Auto" &&
            imagePlacement === "Card Vertical" &&
            "icon-placed-stacked",
          mediaWidth === "Auto" &&
            imagePlacement === "Card Horizontal Left" &&
            "image-placed-beside-left",
          mediaWidth === "Auto" &&
            imagePlacement === "Card Horizontal Right" &&
            "image-placed-beside-right",
          mediaWidth === "Auto" &&
            mediaFillColumn &&
            styles.rootMediaFillColumnTrueMediaWidthAuto,
          mediaWidth === "Auto" &&
            aspectRatio === "Fill" &&
            imagePlacement === "Card Horizontal Left" &&
            styles.rootAspectRatioFillImagePlacementCardHorizontalLeftMediaWidthAuto,
          mediaWidth === "Auto" &&
            aspectRatio === "Fill" &&
            imagePlacement === "Card Horizontal Right" &&
            styles.rootAspectRatioFillImagePlacementCardHorizontalRightMediaWidthAuto,
          imageFit === "Contain" && "object-contain",
          mediaSize === "Large" && "media-large",
        )}
      >
        {mediaType === "Image" &&
          (useFill ? (
            <Image
              className={cn(
                "media",
                imageFit === "Cover" && "object-cover",
                imageFit === "Contain" && "object-contain",
                objectPositionClass(imageObjectPosition, "image"),
              )}
              src={imageSource}
              alt={props.alt ?? ""}
              fill
              sizes={sizes}
              priority={props.priority}
              unoptimized={isSvg}
            />
          ) : (
            <Image
              className={cn(
                "media",
                imageFit === "Cover" && "object-cover",
                imageFit === "Contain" && "object-contain",
                objectPositionClass(imageObjectPosition, "image"),
              )}
              src={imageSource}
              alt={props.alt ?? ""}
              width={1600}
              height={1200}
              sizes={sizes}
              priority={props.priority}
              unoptimized={isSvg}
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        {mediaType === "Video" && (
          <video
            className={cn(
              "media",
              imageFit === "Cover" && "object-cover",
              imageFit === "Contain" && "object-contain",
              objectPositionClass(imageObjectPosition, "video"),
            )}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            poster="/assets/external/f30989ff.svg"
            preload="metadata"
          >
            <source
              className="media object-cover"
              src={backgroundVideoSource}
              type="video/mp4"
            />
          </video>
        )}
      </div>
    )
  );
}
