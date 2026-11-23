"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { withSectionTemplate } from "@/lib/section-template";
import styles from "./nikki-de-roy.module.css";

const NARRATIVE = [
  "En 2018, cuando 1903 era todavía una idea y un sueño por realizar, Nikki de Roy fue la primera productora que creyó en este proyecto. Creyó en una historia que merecía ser contada, en el talento de los jóvenes y en el poder del arte para celebrar lo que somos como país.",
  "Hoy Nikki ya no está físicamente con nosotros, pero sentimos que su espíritu sigue presente en cada rincón de esta experiencia. Su legado continúa también a través de su hija, Juliet Roy, quien hoy forma parte de 1903 como productora.",
  "Su historia nos recuerda la importancia de creer en las ideas, de abrirles camino a nuevas generaciones, de apostar por el arte y, sobre todo, de creer en Panamá.",
] as const;

export function HomeNikkiDeRoy(props: { backdropClass?: string }) {
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
        aria-labelledby="nikki-de-roy-title"
      >
        <div className="container">
          <div className={styles.layout}>
            <Reveal className={styles.revealFull} delay={0.05}>
              <div className={styles.portraitCol}>
                <div className={styles.portraitFrame}>
                  <Image
                    className={styles.portraitImage}
                    src="/assets/NIKKI.webp"
                    alt="Retrato de Nikki de Roy"
                    fill
                    sizes="(max-width: 991px) 88vw, 22rem"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal className={styles.revealFull} delay={0.1}>
              <div className={styles.narrativeCol}>
                <p className={styles.eyebrow}>En honor a Nikki de Roy</p>
                <h2 id="nikki-de-roy-title" className={styles.title}>
                  Una historia que comenzó con alguien que se atrevió a creer.
                </h2>

                <div className={styles.body}>
                  {NARRATIVE.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <p className={styles.closing}>
                  Gracias, Nikki, por creer desde el principio.
                </p>

                <div className={styles.foundation}>
                  <div className={styles.logoSlot}>
                    <Image
                      className={styles.logoImage}
                      src="/assets/FundacionNikki.webp"
                      alt="Logotipo de la Fundación Nikki de Roy"
                      width={640}
                      height={240}
                      sizes="(max-width: 991px) 80vw, 32rem"
                    />
                  </div>
                  <p className={styles.foundationNote}>
                    1903: La Experiencia Inmersiva se presenta a beneficio de la
                    Fundación Nikki de Roy.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
