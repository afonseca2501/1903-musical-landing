"use client";

import { IconList } from "@/components/relume/icon-list";
import { FaqSectionListLeftVertical } from "@/components/relume/faq-section-list-left-vertical";
import { CREDIT_GROUPS, CREDITS_INTRO } from "@/lib/credits";
import { ORCHESTRA_MEMBERS } from "@/lib/orchestra";
import { sectionTemplateClass } from "@/lib/section-template";

function CreditAnswer({
  lines,
}: {
  lines: { label: string; value: string }[];
}) {
  return (
    <>
      {lines.map((line) => (
        <p key={`${line.label}-${line.value}`} className="rt-paragraph">
          <strong>{`${line.label}: `}</strong>
          {line.value}
        </p>
      ))}
    </>
  );
}

export function HomeFaq(props: { backdropClass?: string }) {
  const faqListRows = [
    ...CREDIT_GROUPS.map((group) => ({
      faqQuestion: <>{group.title}</>,
      faqAnswer: <CreditAnswer lines={group.lines} />,
    })),
    {
      faqQuestion: <>La orquesta en vivo</>,
      faqAnswer: (
        <CreditAnswer
          lines={ORCHESTRA_MEMBERS.map((member) => ({
            label: member.role,
            value: member.name,
          }))}
        />
      ),
    },
  ];

  return (
    <FaqSectionListLeftVertical
      sectionPadding={"Top & Bottom"}
      headingText={<>Quién hace posible 1903</>}
      sectionScheme={sectionTemplateClass(3)}
      sectionRole={"Section"}
      backdropClass={["section-pad-top-tight", props.backdropClass]
        .filter(Boolean)
        .join(" ")}
      showSectionContentBlock={true}
      paragraphText={<>{CREDITS_INTRO}</>}
      itemsRows={[
        {
          buttonHierarchy: "Secondary",
          buttonHasLeadingIcon: false,
          buttonHasTrailingIcon: false,
        },
      ]}
      showTagline={true}
      taglineText={"Ficha técnica"}
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
          ]}
        />
      }
      showButtonGroup={false}
      faqListRows={faqListRows}
      showSectionCtaBlock={false}
      buttonsRows={[
        {
          buttonHierarchy: "Secondary",
          buttonHasLeadingIcon: false,
          buttonHasTrailingIcon: false,
        },
      ]}
    />
  );
}
