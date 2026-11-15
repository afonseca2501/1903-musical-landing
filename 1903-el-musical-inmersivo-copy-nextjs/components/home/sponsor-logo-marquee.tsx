"use client";

import {
  SPONSOR_LOGOS,
  splitSponsorLogoColumns,
  type SponsorLogo,
} from "@/lib/sponsor-logos";
import styles from "./sponsor-logo-marquee.module.css";

function LogoStack({
  logos,
  keyPrefix,
}: {
  logos: SponsorLogo[];
  keyPrefix: string;
}) {
  return (
    <>
      {logos.map((logo, index) => (
        <div key={`${keyPrefix}-${index}`} className={styles.logo}>
          <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
        </div>
      ))}
    </>
  );
}

export function SponsorLogoMarquee() {
  const columns = splitSponsorLogoColumns(3);

  return (
    <div
      className={styles.root}
      aria-label={`Logos de patrocinadores (${SPONSOR_LOGOS.length})`}
    >
      <div className={styles.columns}>
        {columns.map((logos, columnIndex) => {
          const loop = [...logos, ...logos, ...logos];
          const duration = `${40 + columnIndex * 7}s`;
          const goesDown = columnIndex % 2 === 1;

          return (
            <div
              key={columnIndex}
              className={`${styles.column} ${goesDown ? styles.columnDown : ""}`}
            >
              <div
                className={styles.track}
                style={{ ["--sponsor-marquee-duration" as string]: duration }}
              >
                <LogoStack logos={loop} keyPrefix={`col-${columnIndex}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
