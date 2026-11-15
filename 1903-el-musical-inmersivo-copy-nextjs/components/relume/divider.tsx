import { cn } from "@/lib/utils";

export interface DividerProps {
  dividerOrientation?: "Horizontal" | "Vertical";
}

export function Divider(props: DividerProps) {
  const dividerOrientation = props.dividerOrientation ?? "Horizontal";
  return (
    <div
      className={cn((dividerOrientation === "Horizontal") && "divider-horizontal", (dividerOrientation === "Vertical") && "divider-vertical")}
    />
  );
}
