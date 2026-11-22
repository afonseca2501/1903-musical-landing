"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import {
  CAST_PLACEHOLDER,
  splitCastMarqueeRows,
  type CastMember,
} from "@/lib/elenco";
import { withSectionTemplate } from "@/lib/section-template";
import styles from "./cast-grid.module.css";

function CastCard({
  member,
  duplicate = false,
}: {
  member: CastMember;
  duplicate?: boolean;
}) {
  const isPlaceholder = member.imageSource === CAST_PLACEHOLDER;

  return (
    <article
      className={styles.card}
      data-duplicate={duplicate ? "true" : undefined}
      tabIndex={duplicate ? -1 : 0}
      aria-hidden={duplicate || undefined}
    >
      <div className={styles.photo}>
        <Image
          className={styles.photoImage}
          src={member.imageSource}
          alt={duplicate ? "" : member.name}
          fill
          sizes="(max-width: 767px) 36vw, 168px"
          unoptimized={isPlaceholder}
        />
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
    </article>
  );
}

export function HomeTeam(props: { backdropClass?: string }) {
  const rows = splitCastMarqueeRows(3);

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
        <div className={styles.headerWrap}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>En escena</p>
            <h2 className={styles.title}>Elenco estelar</h2>
            <p className={styles.intro}>
              El elenco completo de 33 intérpretes da vida a los personajes que
              decidieron el nacimiento de la República. Estos son los rostros
              que vas a ver sobre el escenario.
            </p>
          </header>
        </div>

        <div
          className={styles.marquee}
          aria-label="Carrusel del elenco estelar"
        >
          {rows.map((members, rowIndex) => {
            const reverse = rowIndex % 2 === 1;
            const duration = `${46 + rowIndex * 6}s`;

            return (
              <div
                key={`cast-row-${rowIndex}`}
                className={`${styles.row} ${reverse ? styles.rowReverse : ""}`}
              >
                <div
                  className={styles.track}
                  style={{
                    ["--cast-marquee-duration" as string]: duration,
                  }}
                >
                  {members.map((member) => (
                    <CastCard
                      key={`${rowIndex}-a-${member.name}`}
                      member={member}
                    />
                  ))}
                  {members.map((member) => (
                    <CastCard
                      key={`${rowIndex}-b-${member.name}`}
                      member={member}
                      duplicate
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
