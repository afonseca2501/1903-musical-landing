import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface CustomerLogoCardProps {
  customerLogoSource?: string;
  cardScheme?: string;
  containerBorder?: "Inherit" | "Visible" | "Hidden";
  companyLogoHeight?: "24px" | "28px" | "32px" | "36px" | "40px" | "44px" | "48px";
}

export function CustomerLogoCard(props: CustomerLogoCardProps) {
  const containerBorder = props.containerBorder ?? "Inherit";
  const companyLogoHeight = props.companyLogoHeight ?? "36px";
  const customerLogoSource = props.customerLogoSource ?? "/assets/external/414de6df.svg";
  return (
    <div
      className={cn("card customer-logo-wrapper media-width-auto card-padding-small", (containerBorder === "Visible") && "container-border-on", (containerBorder === "Hidden") && "container-border-off")}
    >
      <img
        className={cn("customer-logo", props.customerLogoSource === undefined && "asset-invert")}
        style={{ height: companyLogoHeight } as CSSProperties}
        src={customerLogoSource}
        alt=""
      />
    </div>
  );
}
