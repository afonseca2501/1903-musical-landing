"use client";

import { FooterMenuVertical } from "@/components/relume/footer-menu-vertical";
import { FooterCtaBlock } from "@/components/relume/footer-cta-block";

export function GlobalFooter(props: { backdropClass?: string }) {
  return (
    <FooterMenuVertical
      sectionScheme={"scheme-2"}
      showContainer={true}
      showStack={true}
      showContentTop={true}
      showImageList={false}
      imageListRows={[{ aspectRatio: "Auto" }, { aspectRatio: "Auto" }, { aspectRatio: "Auto" }]}
      showFooterMenu={false}
      footerMenuRows={[{ footerLabel: "El elenco", footerLinkHref: "/#elenco-estelar", showTag: false }, { footerLabel: "Cómo llegar", footerLinkHref: "/#elenco-estelar", showTag: false }, { footerLabel: "Boletos", footerLinkHref: "https://www.panatickets.com", showTag: false }]}
      showLogoWrapper={false}
      showCompanyLogo={false}
      companyLogoLink={"/"}
      companyLogoHeight={"48px"}
      showFooterAction={true}
      footerActionSlot={<FooterCtaBlock
        ctaHeadingText={<>Nos vemos en 1903.</>}
        ctaParagraphText={<>
      La República vuelve a nacer el 23 de noviembre en Islas de Atlapa. Guarda esta página: es tu programa de mano para ubicarte en el recinto, saber quién está en escena y llegar a tiempo. La historia empieza cuando llegues.
    </>}
        showHeading={false}
        showParagraph={false}
        buttonsRows={[]}
      />}
      showSocialLinkList={false}
      socialLinkListRows={[{ socialPlatform: "Instagram", socialLink: "https://www.instagram.com/1903musical" }, { socialPlatform: "Instagram", socialLink: "https://www.instagram.com/1903musical" }, { socialPlatform: "TikTok", socialLink: "https://www.tiktok.com/@1903musical" }, { socialPlatform: "TikTok", socialLink: "https://www.tiktok.com/@1903musical" }]}
      showContactDetailsList={false}
      contactDetailsListRows={[{ contactText: <>Level 1, 12 Sample St, Sydney NSW 2000</>, contactTitle: <>Address:</>, contactTitleVisible: true, contactMarkVisible: false, contactChannel: "Location" }, { contactText: <>Email us at email@example.com</>, contactTitle: <>Get in touch</>, contactTitleVisible: true, contactMarkVisible: false, contactChannel: "Email" }]}
      showBottomWrapper={true}
      showBottomBar={true}
      showDivider={true}
      showBottomRow={true}
      showCopyright={true}
      textContent={<>Una producción de Stardust Entertainment.</>}
      showTextLinkList={false}
      textLinkListRows={[{ linkText: "Privacy Policy" }, { linkText: "Terms of Service" }]}
      showCompanyNameImage={false}
      backdropClass={props.backdropClass}
    />
  );
}
