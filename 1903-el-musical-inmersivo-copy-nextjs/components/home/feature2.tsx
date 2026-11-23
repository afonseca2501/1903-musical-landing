"use client";

import { Reveal } from "@/components/Reveal";
import { MapGuideAccordion } from "@/components/home/map-guide-accordion";
import { MapLegendPreview } from "@/components/home/map-legend-modal";
import { MAP_GUIDE_INTRO } from "@/lib/map-guide";
import { withSectionTemplate } from "@/lib/section-template";
import styles from "./feature2.module.css";

export function HomeFeature2(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <section
        className={withSectionTemplate(
          1,
          "section",
          props.backdropClass,
          styles.section,
        )}
        data-template="1"
      >
        <div className={`container ${styles.stack}`}>
          <div className={styles.mapBleed}>
            <MapLegendPreview />
          </div>

          <header className={styles.header}>
            <p className={styles.eyebrow}>Para ubicarte</p>
            <h2 className={styles.title}>Guía del recorrido</h2>
            <p className={styles.intro}>{MAP_GUIDE_INTRO}</p>
          </header>

          <Reveal delay={0.12} className={styles.guide}>
            <MapGuideAccordion />
          </Reveal>
        </div>
      </section>
    </Reveal>
  );
}
