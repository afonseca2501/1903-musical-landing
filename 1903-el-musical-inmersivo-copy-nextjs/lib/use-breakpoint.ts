import { useSyncExternalStore } from "react";

export type Breakpoint = "desktop" | "tablet" | "mobile";

function current(): Breakpoint {
  const width = window.innerWidth;
  if (width <= 479) return "mobile";
  return width <= 991 ? "tablet" : "desktop";
}

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

export function useBreakpoint(): Breakpoint {
  return useSyncExternalStore(subscribe, current, () => "desktop");
}
