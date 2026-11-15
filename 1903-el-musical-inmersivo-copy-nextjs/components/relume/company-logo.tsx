import { type CSSProperties } from "react";

export interface CompanyLogoProps {
  companyLogoSource?: string;
  companyLogoLink?: string;
  companyLogoHeight?: "24px" | "28px" | "32px" | "36px" | "40px" | "44px" | "48px";
}

export function CompanyLogo(props: CompanyLogoProps) {
  const companyLogoLink = props.companyLogoLink ?? "/#";
  const companyLogoHeight = props.companyLogoHeight ?? "40px";
  const companyLogoSource = props.companyLogoSource ?? "/assets/external/06845410.svg";
  return (
    <a
      className="company-logo-wrapper"
      aria-label="Home"
      href={companyLogoLink || undefined}
    >
      {(props.companyLogoSource === undefined) ? <>
        <img
          className="company-logo logo-light"
          style={{ ...({ height: companyLogoHeight } as CSSProperties), display: "var(--logo-light-display, block)" }}
          src="/assets/4c6800fe-be6c-4c74-9b0a-f92f70ffea3d.png"
          alt="Company logo"
        />
        <img
          className="company-logo logo-dark"
          style={{ ...({ height: companyLogoHeight } as CSSProperties), display: "var(--logo-dark-display, none)" }}
          src="/assets/4c6800fe-be6c-4c74-9b0a-f92f70ffea3d.png"
          alt="Company logo"
        />
      </> : <img
        className="company-logo"
        style={{ height: companyLogoHeight } as CSSProperties}
        src={companyLogoSource}
        alt=""
      />}
    </a>
  );
}
