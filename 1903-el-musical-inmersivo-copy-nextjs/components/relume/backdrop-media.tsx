import { cn } from "@/lib/utils";
import styles from "./backdrop-media.module.css";

export interface BackdropMediaProps {
  mediaType?: "Image" | "Video";
  imageSource?: string;
  placeholderType?: "Photography" | "Headshot" | "Interface" | "Graphic" | "Diagram";
  backgroundVideoSource?: string;
  imageFit?: "Cover" | "Contain";
  imageObjectPosition?: "Top Left" | "Top Center" | "Top Right" | "Center Left" | "Center" | "Center Right" | "Bottom Left" | "Bottom Center" | "Bottom Right";
}

export function BackdropMedia(props: BackdropMediaProps) {
  const imageFit = props.imageFit ?? "Cover";
  const mediaType = props.mediaType ?? "Image";
  const imageObjectPosition = props.imageObjectPosition ?? "Center";
  const imageSource = props.imageSource ?? "/assets/external/79db9652.svg";
  const backgroundVideoSource = props.backgroundVideoSource ?? "";
  return (
    ((mediaType === "Image") || (mediaType === "Video")) && <div
      className={cn("media-wrapper media-fill", (imageFit === "Contain") && "object-contain")}
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
