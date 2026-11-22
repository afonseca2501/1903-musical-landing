import { cn } from "@/lib/utils";

/** Visual section templates: 1 Pergamino, 2 Sepia, 3 Azul marino. */
export type SectionTemplate = 1 | 2 | 3;

export const SECTION_TEMPLATE_LABELS: Record<SectionTemplate, string> = {
  1: "Claro / Pergamino",
  2: "Chocolate / Sepia",
  3: "Azul marino",
};

/** CSS class for a template (`template-1` | `template-2` | `template-3`). */
export function sectionTemplateClass(template: SectionTemplate): string {
  return `template-${template}`;
}

/**
 * Props to spread onto a section root.
 * Prefer over scheme-* when assigning Template 1/2/3.
 *
 * @example
 * <section {...sectionTemplateProps(1)} className="section">...</section>
 * <FeatureSectionMediaHorizontal
 *   sectionScheme={undefined}
 *   backdropClass={sectionTemplateClass(3)}
 * />
 */
export function sectionTemplateProps(template: SectionTemplate) {
  return {
    "data-template": String(template) as `${SectionTemplate}`,
    className: sectionTemplateClass(template),
  };
}

/** Merge template class with other section classes. */
export function withSectionTemplate(
  template: SectionTemplate,
  ...classes: Array<string | undefined | false | null>
): string {
  return cn(sectionTemplateClass(template), ...classes);
}
