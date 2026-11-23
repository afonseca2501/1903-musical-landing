"use client";

import { Reveal } from "@/components/Reveal";
import { DRINK_CATEGORIES, DRINKS_MENU_INTRO } from "@/lib/drinks-menu";
import { withSectionTemplate } from "@/lib/section-template";
import styles from "./drinks-menu.module.css";

export function HomeDrinksMenu(props: { backdropClass?: string }) {
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
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>PANABAR 1903</p>
            <h2 className={styles.title}>Menú de bebidas</h2>
            <p className={styles.intro}>{DRINKS_MENU_INTRO}</p>
          </header>

          <div className={styles.categories}>
            {DRINK_CATEGORIES.map((category, index) => (
              <Reveal key={category.id} delay={Math.min(0.05 * index, 0.2)}>
                <div className={styles.category}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <ul className={styles.list}>
                    {category.items.map((item) => (
                      <li key={item.id} className={styles.row}>
                        <div className={styles.copy}>
                          <p className={styles.name}>{item.name}</p>
                          {item.detail ? (
                            <p className={styles.detail}>{item.detail}</p>
                          ) : null}
                        </div>
                        <span
                          className={styles.price}
                          tabIndex={0}
                          aria-label={`${item.name}: ${item.price}`}
                        >
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
