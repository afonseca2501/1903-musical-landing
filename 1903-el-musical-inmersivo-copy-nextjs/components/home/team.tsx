"use client";

import { Reveal } from "@/components/Reveal";
import { TeamSectionListLeftVertical } from "@/components/relume/team-section-list-left-vertical";
import { Media } from "@/components/relume/media";
import { IconList } from "@/components/relume/icon-list";
import { SocialLinkList } from "@/components/relume/social-link-list";
import { TeamListGrid4ColumnVerticalSection } from "@/components/relume/team-list-grid4-column-vertical-section";
import { CAST_MEMBERS } from "@/lib/elenco";

const teamListRows = CAST_MEMBERS.map((member) => ({
  teamMemberName: <>{member.name}</>,
  teamMemberRole: <>{member.role}</>,
  showTeamMedia: true,
  teamMediaSlot: (
    <Media
      imageFit="Cover"
      imageObjectPosition="Center"
      mediaWidth="100%"
      aspectRatio="Portrait"
      imageSource={member.imageSource}
      placeholderType="Headshot"
    />
  ),
  showRole: true,
  showParagraph: false,
  showButtonGroup: false,
  buttonGroupRows: [
    {
      buttonHierarchy: "Link",
      buttonHasLeadingIcon: false,
      buttonHasTrailingIcon: false,
    },
  ],
  showLinks: false,
  linksSlot: (
    <SocialLinkList
      items={[
        { socialPlatform: "LinkedIn" },
        { socialPlatform: "X" },
        { socialPlatform: "Instagram" },
      ]}
    />
  ),
}));

export function HomeTeam(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <TeamSectionListLeftVertical
        sectionScheme="scheme-2"
        sectionPadding="Top & Bottom"
        headingText={<>Elenco estelar</>}
        showSectionContentBlock={true}
        paragraphText={
          <>
            33 intérpretes dan vida a los personajes que decidieron el
            nacimiento de la República. Estos son algunos de los rostros que vas
            a ver sobre el escenario.
          </>
        }
        itemsRows={[
          {
            buttonHierarchy: "Secondary",
            buttonHasLeadingIcon: false,
            buttonHasTrailingIcon: false,
          },
        ]}
        showTagline={true}
        taglineText="En escena"
        taglineHasIcon={false}
        showHeading={true}
        showParagraph={true}
        showSupportingList={false}
        supportingListSlot={
          <IconList
            items={[
              {
                paragraphText: (
                  <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
                ),
              },
              {
                paragraphText: (
                  <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
                ),
              },
              {
                paragraphText: (
                  <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
                ),
              },
            ]}
          />
        }
        teamListVariant={<TeamListGrid4ColumnVerticalSection items={teamListRows} />}
        teamListRows={teamListRows}
        showSectionCtaBlock={false}
        buttonsRows={[
          {
            buttonHierarchy: "Secondary",
            buttonHasLeadingIcon: false,
            buttonHasTrailingIcon: false,
          },
        ]}
        backdropClass={props.backdropClass}
      />
    </Reveal>
  );
}
