import { PRODUCE_LOGOS } from "@/lib/sponsor-logos";
import styles from "./produce-logos.module.css";

export function ProduceLogos() {
  return (
    <div className={styles.root} aria-label="Productoras">
      {PRODUCE_LOGOS.map((logo) => (
        <div key={logo.src} className={styles.logo}>
          <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  );
}
