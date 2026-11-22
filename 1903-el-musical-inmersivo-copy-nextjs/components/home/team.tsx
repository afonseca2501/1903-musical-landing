"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CAST_MEMBERS, CAST_PLACEHOLDER } from "@/lib/elenco";
import styles from "./cast-grid.module.css";

export function HomeTeam(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <section
        className={`scheme-2 section ${props.backdropClass ?? ""} ${styles.section}`.trim()}
      >
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>En escena</p>
            <h2 className={styles.title}>Elenco estelar</h2>
            <p className={styles.intro}>
              El elenco completo de 33 intérpretes da vida a los personajes que
              decidieron el nacimiento de la República. Estos son los rostros
              que vas a ver sobre el escenario.
            </p>
          </header>

          <div className={styles.grid}>
            {CAST_MEMBERS.map((member, index) => {
              const isPlaceholder = member.imageSource === CAST_PLACEHOLDER;
              return (
                <Reveal key={member.name} delay={Math.min(index * 0.02, 0.4)}>
                  <article className={styles.card}>
                    <div className={styles.photo}>
                      <Image
                        className={styles.photoImage}
                        src={member.imageSource}
                        alt={member.name}
                        fill
                        sizes="(max-width: 479px) 50vw, (max-width: 767px) 33vw, (max-width: 1199px) 25vw, 16vw"
                        unoptimized={isPlaceholder}
                      />
                    </div>
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
