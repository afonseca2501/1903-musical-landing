"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import {
  CAST_MEMBERS,
  CAST_PLACEHOLDER,
  type CastMember,
} from "@/lib/elenco";
import { withSectionTemplate } from "@/lib/section-template";
import styles from "./cast-grid.module.css";

function hasCastPhoto(member: CastMember): boolean {
  return member.imageSource !== CAST_PLACEHOLDER;
}

function CastCard({ member }: { member: CastMember }) {
  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <Image
          className={styles.photoImage}
          src={member.imageSource}
          alt={member.name}
          fill
          sizes="(max-width: 767px) 50vw, 33vw"
        />
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
    </article>
  );
}

function EnsembleEntry({ member }: { member: CastMember }) {
  return (
    <li className={styles.ensembleItem}>
      <span className={styles.ensembleMark} aria-hidden="true" />
      <div className={styles.ensembleCopy}>
        <p className={styles.ensembleName}>{member.name}</p>
        <p className={styles.ensembleRole}>{member.role}</p>
      </div>
    </li>
  );
}

export function HomeTeam(props: { backdropClass?: string }) {
  const withPhoto = CAST_MEMBERS.filter(hasCastPhoto);
  const withoutPhoto = CAST_MEMBERS.filter((member) => !hasCastPhoto(member));

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

        <div className={styles.castContent}>
          {withPhoto.length > 0 ? (
            <div
              className={styles.grid}
              aria-label="Elenco estelar con fotografía"
            >
              {withPhoto.map((member) => (
                <CastCard key={member.name} member={member} />
              ))}
            </div>
          ) : null}

          {withoutPhoto.length > 0 ? (
            <div className={styles.ensembleBlock}>
              <div className={styles.ensembleRule} aria-hidden="true" />
              <p className={styles.ensembleEyebrow}>Ensemble y reparto</p>
              <ul
                className={styles.ensembleGrid}
                aria-label="Ensemble y reparto sin fotografía"
              >
                {withoutPhoto.map((member) => (
                  <EnsembleEntry key={member.name} member={member} />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
