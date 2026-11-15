"use client";

import { type ReactNode } from "react";
import { fillSlot } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { ButtonGroup } from "./button-group";
import { Heading } from "./heading";
import { Media } from "./media";
import { Paragraph } from "./paragraph";
import { SocialLinkList } from "./social-link-list";
import { Text } from "./text";
import styles from "./team-item-medium.module.css";

export interface TeamItemMediumProps {
  contentHorizontalAlignment?: "Left" | "Center";
  teamMemberName?: ReactNode;
  teamMemberRole?: ReactNode;
  paragraphText?: ReactNode;
  showTeamMedia?: boolean;
  teamMediaSlot?: ReactNode;
  showRole?: boolean;
  showParagraph?: boolean;
  showButtonGroup?: boolean;
  buttonGroupRows?: Record<string, any>[];
  showLinks?: boolean;
  linksSlot?: ReactNode;
}

export function TeamItemMedium(props: TeamItemMediumProps) {
  const listRow = useListRow();
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const showTeamMedia = props.showTeamMedia ?? true;
  const teamMemberName = props.teamMemberName ?? <>Full name</>;
  const teamMemberRole = props.teamMemberRole ?? <>Job title</>;
  const showRole = props.showRole ?? true;
  const paragraphText = props.paragraphText ?? <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </>;
  const showParagraph = props.showParagraph ?? true;
  const showLinks = props.showLinks ?? true;
  const showButtonGroup = props.showButtonGroup ?? false;
  return (
    <div className="stack gap-element-large">
      {showTeamMedia && <div className="row">
        {showTeamMedia && <div className={styles.slot}>
          {(props.teamMediaSlot && fillSlot(props.teamMediaSlot, { aspectRatio: "Square", avatarSize: "Large", placeholderType: "Headshot" }, { contentHorizontalAlignment: contentHorizontalAlignment, mediaType: "Image" })) ?? <Media
            aspectRatio={"Square"}
            contentHorizontalAlignment={contentHorizontalAlignment}
            placeholderType={"Headshot"}
            mediaType={"Image"}
          />}
        </div>}
      </div>}
      <div className="stack gap-element-small">
        <div className="stack gap-element-tiny">
          <Heading
            headingSize={"H6"}
            headingTag={"H4"}
            headingText={teamMemberName}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />
          {showRole && <Text
            textContent={teamMemberRole}
            contentHorizontalAlignment={contentHorizontalAlignment}
          />}
        </div>
        {showParagraph && <Paragraph
          paragraphText={paragraphText}
          contentHorizontalAlignment={contentHorizontalAlignment}
        />}
      </div>
      {showLinks && <div className={styles.slot}>
        {(props.linksSlot && fillSlot(props.linksSlot, {  }, { contentHorizontalAlignment: contentHorizontalAlignment })) ?? <SocialLinkList contentHorizontalAlignment={contentHorizontalAlignment} />}
      </div>}
      {showButtonGroup && <ButtonGroup
        items={props.buttonGroupRows ?? [{ buttonHierarchy: "Link" }]}
        contentHorizontalAlignment={contentHorizontalAlignment}
      />}
    </div>
  );
}
