"use client";

import { Reveal } from "@/components/Reveal";
import {
  formatSongCredits,
  MUSICAL_PROGRAM_ACTS,
  MUSICAL_PROGRAM_INTRO,
} from "@/lib/musical-program";
import styles from "./musical-program.module.css";

export function HomeMusicalProgram(props: { backdropClass?: string }) {
  return (
    <Reveal>
      <section
        className={`scheme-2 section ${props.backdropClass ?? ""} ${styles.section}`.trim()}
      >
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>En escena</p>
            <h2 className={styles.title}>Programa Musical</h2>
            <p className={styles.intro}>{MUSICAL_PROGRAM_INTRO}</p>
          </header>

          <div className={styles.acts}>
            {MUSICAL_PROGRAM_ACTS.map((act, actIndex) => (
              <Reveal key={act.id} delay={Math.min(0.06 * actIndex, 0.18)}>
                <article className={styles.act}>
                  <h3 className={styles.actTitle}>{act.title}</h3>
                  <ol className={styles.songList}>
                    {act.songs.map((song) => {
                      const isCierre = song.title === "LA FIESTA (Cierre)";
                      return (
                        <li
                          key={`${act.id}-${song.number}`}
                          className={`${styles.song}${isCierre ? ` ${styles.songCierre}` : ""}`}
                          value={Number(song.number)}
                        >
                          <p className={styles.number}>{song.number}</p>
                          <div className={styles.songBody}>
                            <h4 className={styles.songTitle}>{song.title}</h4>
                            <p className={styles.credits}>
                              {formatSongCredits(song)}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
