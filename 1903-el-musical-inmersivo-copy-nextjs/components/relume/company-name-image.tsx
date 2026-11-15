import { cn } from "@/lib/utils";

export interface CompanyNameImageProps {
  companyNameImageSource?: string;
}

export function CompanyNameImage(props: CompanyNameImageProps) {
  const companyNameImageSource = props.companyNameImageSource ?? "/assets/external/14d0522d.svg";
  return (
    <div className="full-width">
      <img
        className={cn("full-width", props.companyNameImageSource === undefined && "asset-invert")}
        src={companyNameImageSource}
        alt="Company name"
      />
    </div>
  );
}
