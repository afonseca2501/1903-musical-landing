import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import styles from "./customer-logo.module.css";

export interface CustomerLogoProps {
  customerLogoSource?: string;
  companyLogoHeight?: "24px" | "28px" | "32px" | "36px" | "40px" | "44px" | "48px";
}

export function CustomerLogo(props: CustomerLogoProps) {
  const companyLogoHeight = props.companyLogoHeight ?? "32px";
  const customerLogoSource = props.customerLogoSource ?? "/assets/external/d6498010.svg";
  return (
    <div className={cn("customer-logo-wrapper", styles.root)}>
      <img
        className={cn("customer-logo", props.customerLogoSource === undefined && "asset-invert")}
        style={{ height: companyLogoHeight } as CSSProperties}
        src={customerLogoSource}
        alt=""
      />
    </div>
  );
}
