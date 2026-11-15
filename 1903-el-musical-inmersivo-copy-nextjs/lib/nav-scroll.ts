"use client";

import { useEffect } from "react";

// The Within scroll-fill contract: stamped by the frame, keyed on by the
// concept CSS, the runtime-inclusion check, and nav_scroll.ts.
export const NAV_PLACEMENT_ATTR = 'data-placement';
export const NAV_PLACEMENT_WITHIN = 'within';
export const NAV_SCROLLED_CLASS = 'nav-scrolled';

// Within-navbar scroll fill: once the section a transparent bar overlays
// passes under it, `nav-scrolled` fills the bar with its own scheme background
// (CSS in schemeCSSBlock/backgroundCSSBlock). Keyed on the section's real
// geometry, never a scroll distance.

export function initNavScrollFill(): () => void {
  const targets: Array<{ bar: HTMLElement; next: Element }> = [];
  for (const bar of Array.from(
    document.querySelectorAll<HTMLElement>(
      `[${NAV_PLACEMENT_ATTR}="${NAV_PLACEMENT_WITHIN}"]`,
    ),
  )) {
    const sibling = bar.closest('.page-section')?.nextElementSibling;
    // Published pages place content inside `main`, while component fragments
    // retain the flat section shape. In both cases observe the first section
    // the Within navbar overlays, not the document-level wrapper.
    const next =
      sibling?.tagName === 'MAIN' ? sibling.firstElementChild : sibling;
    if (next) targets.push({ bar, next });
  }
  if (targets.length === 0) return () => {};

  let observers: IntersectionObserver[] = [];
  const arm = () => {
    for (const observer of observers) observer.disconnect();
    // Read phase: measure every bar before any observer is constructed.
    // Top-inset by the bar height: "intersecting" = still under the bar.
    const heights = targets.map(
      ({ bar }) => Math.round(bar.getBoundingClientRect().height) || 80,
    );
    observers = targets.map(({ bar, next }, i) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[entries.length - 1];
          if (!entry) return;
          bar.classList.toggle(NAV_SCROLLED_CLASS, !entry.isIntersecting);
        },
        { rootMargin: `-${heights[i]}px 0px 0px 0px` },
      );
      observer.observe(next);
      return observer;
    });
  };
  arm();

  // Bar height changes with breakpoint; re-arm with fresh measurements.
  let raf = 0;
  const onResize = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      arm();
    });
  };
  window.addEventListener('resize', onResize);

  return () => {
    if (raf) cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
    for (const observer of observers) observer.disconnect();
  };
}

/** Fills a Within navbar with its own scheme once the section below scrolls under it. */
export function useNavScrollFill() {
  useEffect(() => initNavScrollFill(), []);
}
