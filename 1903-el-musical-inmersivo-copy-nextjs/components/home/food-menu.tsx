"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import {
  FOOD_MENU_INTRO,
  FOOD_MENU_REGIONS,
  FOOD_PLACEHOLDER,
} from "@/lib/food-menu";
import { withSectionTemplate } from "@/lib/section-template";
import styles from "./food-menu.module.css";

export function HomeFoodMenu(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <section
        className={withSectionTemplate(
          3,
          "section",
          props.backdropClass,
          styles.section,
        )}
        data-template="3"
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
                    {region.dishes.map((dish) => {
                      const isPlaceholder =
                        dish.imageSource === FOOD_PLACEHOLDER;
                      return (
                        <article key={dish.id} className={styles.card}>
                          <div
                            className={`${styles.photoSlot} ${styles.photoFilled}`}
                          >
                            <Image
                              className={styles.photoImage}
                              src={dish.imageSource}
                              alt={
                                isPlaceholder
                                  ? `Espacio reservado para foto de ${dish.name}`
                                  : dish.name
                              }
                              fill
                              sizes="(max-width: 599px) 100vw, (max-width: 991px) 50vw, 33vw"
                              unoptimized={isPlaceholder}
                            />
                            <span
                              className={styles.priceBadge}
                              tabIndex={0}
                              aria-label={`${dish.name}: ${dish.price ?? "precio por confirmar"}`}
                            >
                              {dish.price ?? "Precio por confirmar"}
                            </span>
                            {isPlaceholder ? (
                              <span className={styles.photoHint}>
                                Foto próximamente
                              </span>
                            ) : null}
                          </div>
                          <h4 className={styles.dishName}>{dish.name}</h4>
                          <p className={styles.description}>
                            {dish.description}
                          </p>
                        </article>
                      );
                    })}
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
