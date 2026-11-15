import { cn } from "@/lib/utils";
import styles from "./credential.module.css";

export interface CredentialProps {
  imageSource?: string;
  aspectRatio?: "Auto" | "Fill" | "Square" | "Portrait" | "Landscape" | "Widescreen" | "Classic Portrait" | "Classic Landscape";
}

export function Credential(props: CredentialProps) {
  const aspectRatio = props.aspectRatio ?? "Auto";
  const imageSource = props.imageSource ?? "/assets/external/79db9652.svg";
  return (
    <div className="customer-logo-wrapper width-auto">
      <img
        className={cn("credential-image", (aspectRatio === "Fill") && "media-fill", (aspectRatio === "Square") && "aspect-square", (aspectRatio === "Square") && styles.imageAspectRatioSquare, (aspectRatio === "Portrait") && "aspect-portrait", (aspectRatio === "Portrait") && styles.imageAspectRatioPortrait, (aspectRatio === "Landscape") && "aspect-landscape", (aspectRatio === "Landscape") && styles.imageAspectRatioLandscape, (aspectRatio === "Widescreen") && "aspect-widescreen", (aspectRatio === "Widescreen") && styles.imageAspectRatioWidescreen, (aspectRatio === "Classic Portrait") && "aspect-classic-portrait", (aspectRatio === "Classic Portrait") && styles.imageAspectRatioClassicPortrait, (aspectRatio === "Classic Landscape") && "aspect-classic-landscape", (aspectRatio === "Classic Landscape") && styles.imageAspectRatioClassicLandscape, props.imageSource === undefined && "asset-invert")}
        src={imageSource}
        alt=""
      />
    </div>
  );
}
