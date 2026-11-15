import { clsx, type ClassValue } from "clsx";
import { cloneElement, isValidElement, type ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** A slot's fill with the props its host gives every fill: `under` its own, `over` them. */
export function fillSlot(node: ReactNode, under: object, over: object): ReactNode {
  if (!isValidElement<object>(node) || typeof node.type === "string") return node;
  return cloneElement(node, { ...under, ...node.props, ...over });
}
