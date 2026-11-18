"use client";

import { Reveal } from "@/components/Reveal";
import { DRINKS_BARS, DRINKS_MENU_INTRO } from "@/lib/drinks-menu";
import styles from "./food-menu.module.css";

export function HomeDrinksMenu(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <section
        className={`scheme-2 section ${props.backdropClass ?? ""} ${styles.section}`.trim()}
      >
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>Bebidas</p>
            <h2 className={styles.title}>Menú de bebidas</h2>
            <p className={styles.intro}>{DRINKS_MENU_INTRO}</p>
          </header>

          <div className={styles.grid}>
            {DRINKS_BARS.map((bar, index) => (
              <Reveal key={bar.id} delay={0.06 * index}>
                <article className={styles.card}>
                  <div className={`${styles.photoSlot} ${styles.photoFilled}`}>
                    <img
                      className={styles.photoImage}
                      src={encodeURI(bar.imageSource)}
                      alt={bar.name}
                      width={1200}
                      height={900}
                    />
                  </div>
                  <h3 className={styles.dishName}>{bar.name}</h3>
                  <p className={styles.location}>{bar.location}</p>
                  <p className={styles.description}>{bar.description}</p>
                  <div className={styles.meta}>
                    <p className={styles.price}>Menú / precios próximamente</p>
                    <p className={styles.availability}>Categorías TBD</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
