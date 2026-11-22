"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CAST_MEMBERS, CAST_PLACEHOLDER, type CastMember } from "@/lib/elenco";
import { withSectionTemplate } from "@/lib/section-template";
import styles from "./cast-grid.module.css";

function CastCard({ member }: { member: CastMember }) {
  const isPlaceholder = member.imageSource === CAST_PLACEHOLDER;

  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <Image
          className={styles.photoImage}
          src={member.imageSource}
          alt={member.name}
          fill
          sizes="(max-width: 599px) 100vw, (max-width: 991px) 50vw, 33vw"
          unoptimized={isPlaceholder}
        />
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
    </article>
  );
}

export function HomeTeam(props: { backdropClass?: string }) {
  return (
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
        <Reveal>
          <header className={styles.header}>
            <p className={styles.eyebrow}>En escena</p>
            <h2 className={styles.title}>Elenco estelar</h2>
            <p className={styles.intro}>
              El elenco completo de 33 intérpretes da vida a los personajes que
              decidieron el nacimiento de la República. Estos son los rostros
              que vas a ver sobre el escenario.
            </p>
          </header>
        </Reveal>

        <div className={styles.grid} aria-label="Elenco estelar completo">
          {CAST_MEMBERS.map((member) => (
            <CastCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
