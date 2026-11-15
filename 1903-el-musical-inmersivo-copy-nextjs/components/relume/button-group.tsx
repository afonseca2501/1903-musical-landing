"use client";

import { cn } from "@/lib/utils";
import { useListRow } from "@/lib/list-row";
import { Button } from "./button";

export interface ButtonGroupProps {
  items?: Record<string, any>[];
  buttonGroupAlignment?: "Left" | "Center" | "Right";
  buttonGroupFullwidth?: boolean;
  contentHorizontalAlignment?: "Left" | "Center";
  buttonGroupStackOnTablet?: boolean;
}

export function ButtonGroup(props: ButtonGroupProps) {
  const listRow = useListRow();
  const buttonGroupStackOnTablet = props.buttonGroupStackOnTablet ?? listRow?.buttonGroupStackOnTablet ?? false;
  const contentHorizontalAlignment = props.contentHorizontalAlignment ?? listRow?.contentHorizontalAlignment ?? "Left";
  const buttonGroupAlignment = props.buttonGroupAlignment ?? listRow?.buttonGroupAlignment ?? "Left";
  const buttonGroupFullwidth = props.buttonGroupFullwidth ?? listRow?.buttonGroupFullwidth ?? false;
  const items = props.items ?? [{  }, { buttonHierarchy: "Secondary" }];
  return (
    <div
      className={cn("button-group", buttonGroupStackOnTablet && "button-group-stack-on-tablet", (buttonGroupAlignment === "Center" || (buttonGroupAlignment === "Left" && (contentHorizontalAlignment === "Center")) || (buttonGroupAlignment === "Right" && (contentHorizontalAlignment === "Center"))) && "align-center row-center", buttonGroupFullwidth && "button-group-fullwidth", (buttonGroupAlignment === "Right") && "align-right")}
    >
      {items.map((row, index) => <Button key={index} {...row} />)}
    </div>
  );
}
