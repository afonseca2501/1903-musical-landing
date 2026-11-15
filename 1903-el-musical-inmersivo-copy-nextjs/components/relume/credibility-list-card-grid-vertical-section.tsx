import { cn } from "@/lib/utils";
import { ListRow } from "@/lib/list-row";
import { CustomerLogoCard } from "./customer-logo-card";

export interface CredibilityListCardGridVerticalSectionProps {
  customerLogoItems?: Record<string, any>[];
  columnsVertical?: "3" | "4" | "5";
  cardScheme?: string;
  containerBorder?: "Inherit" | "Visible" | "Hidden";
}

export function CredibilityListCardGridVerticalSection(props: CredibilityListCardGridVerticalSectionProps) {
  const columnsVertical = props.columnsVertical ?? "3";
  const customerLogoItems = props.customerLogoItems ?? [{ customerLogoSource: "/assets/external/414de6df.svg" }, { customerLogoSource: "/assets/external/b4482920.svg" }, { customerLogoSource: "/assets/external/d6498010.svg" }, { customerLogoSource: "/assets/external/91e25d80.svg" }, { customerLogoSource: "/assets/external/11b293a7.svg" }, { customerLogoSource: "/assets/external/b9d39826.svg" }];
  const cardScheme = props.cardScheme ?? "";
  const containerBorder = props.containerBorder ?? "Inherit";
  return (
    <div
      className={cn(props.cardScheme, "gap-grid-logo", (columnsVertical === "3") && "grid-column-card-3", (columnsVertical === "4") && "grid-column-card-4", (columnsVertical === "5") && "grid-column-card-5")}
    >
      {customerLogoItems.map((row, index) => <ListRow key={index} values={{ containerBorder: containerBorder }}>
        <CustomerLogoCard
          {...row}
          cardScheme={cardScheme}
          containerBorder={containerBorder}
        />
      </ListRow>)}
    </div>
  );
}
