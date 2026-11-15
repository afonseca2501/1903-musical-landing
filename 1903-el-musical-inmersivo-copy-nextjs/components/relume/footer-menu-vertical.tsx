import { type ReactNode } from "react";
import { cn, fillSlot } from "@/lib/utils";
import { CompanyLogo } from "./company-logo";
import { ImageList } from "./image-list";
import { ContactDetailsList } from "./contact-details-list";
import { FooterMenu } from "./footer-menu";
import { FooterSignup } from "./footer-signup";
import { SocialLinkList } from "./social-link-list";
import { TextLinkList } from "./text-link-list";
import { CompanyNameImage } from "./company-name-image";
import { Divider } from "./divider";
import { Text } from "./text";
import styles from "./footer-menu-vertical.module.css";

export interface FooterMenuVerticalProps {
  sectionScheme?: string;
  showContainer?: boolean;
  showStack?: boolean;
  showContentTop?: boolean;
  showImageList?: boolean;
  imageListRows?: Record<string, any>[];
  showFooterMenu?: boolean;
  footerMenuRows?: Record<string, any>[];
  showLogoWrapper?: boolean;
  showCompanyLogo?: boolean;
  companyLogoLink?: string;
  companyLogoHeight?: "24px" | "28px" | "32px" | "36px" | "40px" | "44px" | "48px";
  showFooterAction?: boolean;
  footerActionSlot?: ReactNode;
  showSocialLinkList?: boolean;
  socialLinkListRows?: Record<string, any>[];
  showContactDetailsList?: boolean;
  contactDetailsListRows?: Record<string, any>[];
  showBottomWrapper?: boolean;
  showBottomBar?: boolean;
  showDivider?: boolean;
  dividerOrientation?: "Horizontal" | "Vertical";
  showBottomRow?: boolean;
  showCopyright?: boolean;
  textContent?: ReactNode;
  showProduceLogos?: boolean;
  produceLogosSlot?: ReactNode;
  showTextLinkList?: boolean;
  textLinkListRows?: Record<string, any>[];
  showCompanyNameImage?: boolean;
  companyNameImageSource?: string;
  backdropClass?: string;
}

export function FooterMenuVertical(props: FooterMenuVerticalProps) {
  const showCompanyLogo = props.showCompanyLogo ?? true;
  const showLogoWrapper = props.showLogoWrapper ?? true;
  const showFooterMenu = props.showFooterMenu ?? true;
  const showSocialLinkList = props.showSocialLinkList ?? true;
  const showContactDetailsList = props.showContactDetailsList ?? false;
  const showFooterAction = props.showFooterAction ?? false;
  const showImageList = props.showImageList ?? false;
  const showContentTop = props.showContentTop ?? true;
  const showCompanyNameImage = props.showCompanyNameImage ?? false;
  const showDivider = props.showDivider ?? true;
  const showCopyright = props.showCopyright ?? true;
  const showProduceLogos = props.showProduceLogos ?? false;
  const showTextLinkList = props.showTextLinkList ?? true;
  const showBottomRow = props.showBottomRow ?? true;
  const showBottomBar = props.showBottomBar ?? true;
  const showBottomWrapper = props.showBottomWrapper ?? true;
  const showStack = props.showStack ?? true;
  const showContainer = props.showContainer ?? true;
  return (
    showContainer && <footer
      className={cn(props.sectionScheme ?? "scheme-1", "section section-medium ws-29c0069f3062-footer-compact", props.backdropClass)}
    >
      {showContainer && (showStack && <div className="container">
        {showStack && ((showContentTop || showBottomWrapper) && <div className="stack gap-element-large">
          {showContentTop && ((showLogoWrapper || showFooterMenu || showSocialLinkList || showContactDetailsList || showFooterAction || showImageList) && <div
            className="stack gap-element-medium max-width-lg center-block align-items-center"
          >
            {showLogoWrapper && (showCompanyLogo && <div className="row align-center">
              {showCompanyLogo && <CompanyLogo
                companyLogoLink={props.companyLogoLink}
                companyLogoHeight={props.companyLogoHeight}
              />}
            </div>)}
            {showFooterMenu && <FooterMenu
              items={props.footerMenuRows}
              contentHorizontalAlignment={"Center"}
            />}
            {showSocialLinkList && <SocialLinkList
              items={props.socialLinkListRows ?? [{ socialPlatform: "Facebook" }, { socialPlatform: "Instagram" }, { socialPlatform: "X" }, { socialPlatform: "LinkedIn" }, { socialPlatform: "YouTube" }]}
              contentHorizontalAlignment={"Center"}
            />}
            {showContactDetailsList && <ContactDetailsList
              items={props.contactDetailsListRows ?? [{ contactText: "Level 1, 12 Sample St, Sydney NSW 2000", contactTitle: "Address:", contactChannel: "Location", contactMarkVisible: false, contactTitleVisible: true }, { contactText: "Email us at email@example.com", contactTitle: "Get in touch", contactChannel: "Email", contactMarkVisible: false, contactTitleVisible: true }]}
              contentHorizontalAlignment={"Center"}
            />}
            {showFooterAction && <div className={styles.slot}>
              {(props.footerActionSlot && fillSlot(props.footerActionSlot, { contentHorizontalAlignment: "Center" }, {  })) ?? <FooterSignup contentHorizontalAlignment={"Center"} />}
            </div>}
            {showImageList && <ImageList
              credentialItems={props.imageListRows}
              contentHorizontalAlignment={"Center"}
            />}
          </div>)}
          {showBottomWrapper && ((showCompanyNameImage || showBottomBar) && <div className="footer-content-block-bottom">
            {showCompanyNameImage && <CompanyNameImage
              companyNameImageSource={props.companyNameImageSource}
            />}
            {showBottomBar && ((showDivider || showBottomRow) && <div className="stack gap-element-small">
              {showDivider && <Divider dividerOrientation={props.dividerOrientation} />}
              {showBottomRow && ((showProduceLogos || showCopyright || showTextLinkList) && <div className="stack gap-element-small align-items-center">
                {showProduceLogos && <div className={styles.slot}>
                  {props.produceLogosSlot}
                </div>}
                {(showCopyright || showTextLinkList) && <div
                  className="wrap gap-element-horizontal-medium row row-center text-align-center"
                >
                  {showCopyright && <Text textContent={props.textContent} textSize={"Small"} />}
                  {showTextLinkList && <TextLinkList items={props.textLinkListRows} />}
                </div>}
              </div>)}
            </div>)}
          </div>)}
        </div>)}
      </div>)}
    </footer>
  );
}
