"use client";

import { Reveal } from "@/components/Reveal";
import {
  FOOD_MENU_INTRO,
  FOOD_MENU_REGIONS,
} from "@/lib/food-menu";
import styles from "./food-menu.module.css";

export function HomeFoodMenu(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <section
        className={`scheme-3 section ${props.backdropClass ?? ""} ${styles.section}`.trim()}
      >
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>Gastronomía</p>
            <h2 className={styles.title}>Menú de comida</h2>
            <p className={styles.intro}>{FOOD_MENU_INTRO}</p>
          </header>

          <div className={styles.regions}>
            {FOOD_MENU_REGIONS.map((region, regionIndex) => (
              <Reveal key={region.id} delay={0.06 * regionIndex}>
                <div className={styles.region}>
                  <h3 className={styles.regionTitle}>{region.title}</h3>
                  <div className={styles.grid}>
                    {region.dishes.map((dish) => (
                      <article key={dish.name} className={styles.card}>
                        <div className={styles.photoSlot} aria-hidden="true">
                          <span className={styles.photoHint}>Foto próximamente</span>
                        </div>
                        <h4 className={styles.dishName}>{dish.name}</h4>
                        <div className={styles.meta}>
                          <p className={styles.price}>Precio próximamente</p>
                          <p className={styles.availability}>Disponibilidad TBD</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
