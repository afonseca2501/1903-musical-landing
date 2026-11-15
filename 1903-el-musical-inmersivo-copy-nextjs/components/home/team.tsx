"use client";

import { Reveal } from "@/components/Reveal";
import { TeamSectionListLeftVertical } from "@/components/relume/team-section-list-left-vertical";
import { Media } from "@/components/relume/media";
import { IconList } from "@/components/relume/icon-list";
import { SocialLinkList } from "@/components/relume/social-link-list";
import { TeamListGrid4ColumnVerticalSection } from "@/components/relume/team-list-grid4-column-vertical-section";

export function HomeTeam(props: { backdropClass?: string }) {
  return (
    <Reveal>
    <TeamSectionListLeftVertical
      sectionScheme={"scheme-2"}
      sectionPadding={"Top & Bottom"}
      headingText={<>Elenco estelar</>}
      showSectionContentBlock={true}
      paragraphText={<>
      33 intérpretes dan vida a los personajes que decidieron el nacimiento de la República. Estos son algunos de los rostros que vas a ver sobre el escenario.
    </>}
      itemsRows={[{ buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
      showTagline={true}
      taglineText={"En escena"}
      taglineHasIcon={false}
      showHeading={true}
      showParagraph={true}
      showSupportingList={false}
      supportingListSlot={<IconList
        items={[{ paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }, { paragraphText: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</> }]}
      />}
      teamListVariant={<TeamListGrid4ColumnVerticalSection
        items={[{ teamMemberName: <>Alejandro Lagrotta</>, teamMemberRole: <>Manuel Amador Guerrero</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Randy Domínguez</>, teamMemberRole: <>Theodore Roosevelt</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Juliette Roy</>, teamMemberRole: <>María De La Ossa de Amador</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Diego De Obaldía</>, teamMemberRole: <>Philippe Bunau Varilla</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Hugo Víctor Rodríguez</>, teamMemberRole: <>William Nelson Cromwell</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Elmis Castillo</>, teamMemberRole: <>José Domingo De Obaldía</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Omar Stevens</>, teamMemberRole: <>General Esteban Huertas</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Lucho Gotti</>, teamMemberRole: <>José Agustín Arango</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }]}
      />}
      teamListRows={[{ teamMemberName: <>Alejandro Lagrotta</>, teamMemberRole: <>Manuel Amador Guerrero</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Randy Domínguez</>, teamMemberRole: <>Theodore Roosevelt</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Juliette Roy</>, teamMemberRole: <>María De La Ossa de Amador</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Diego De Obaldía</>, teamMemberRole: <>Philippe Bunau Varilla</>, paragraphText: <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Hugo Víctor Rodríguez</>, teamMemberRole: <>William Nelson Cromwell</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Elmis Castillo</>, teamMemberRole: <>José Domingo De Obaldía</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Omar Stevens</>, teamMemberRole: <>General Esteban Huertas</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }, { teamMemberName: <>Lucho Gotti</>, teamMemberRole: <>José Agustín Arango</>, showTeamMedia: true, teamMediaSlot: <Media
  imageFit={"Cover"}
  imageObjectPosition={"Center"}
  mediaWidth={"100%"}
  aspectRatio={"Portrait"}
  imageSource={"/placeholders/placeholder-8ef0c9cf.svg"}
  placeholderType={"Headshot"}
/>, showRole: true, showParagraph: false, showButtonGroup: false, buttonGroupRows: [{ buttonHierarchy: "Link", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }], showLinks: false, linksSlot: <SocialLinkList
  items={[{ socialPlatform: "LinkedIn" }, { socialPlatform: "X" }, { socialPlatform: "Instagram" }]}
/> }]}
      showSectionCtaBlock={false}
      buttonsRows={[{ buttonHierarchy: "Secondary", buttonHasLeadingIcon: false, buttonHasTrailingIcon: false }]}
      backdropClass={props.backdropClass}
    />
    </Reveal>
  );
}
