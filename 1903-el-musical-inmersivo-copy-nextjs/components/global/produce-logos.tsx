import Image from "next/image";
import { PRODUCE_LOGOS } from "@/lib/sponsor-logos";
import styles from "./produce-logos.module.css";

export function ProduceLogos() {
  return (
    <div className={styles.root} aria-label="Productoras">
      {PRODUCE_LOGOS.map((logo) => (
        <div key={logo.src} className={styles.logo}>
          <Image
            className={styles.logoImage}
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={56}
            sizes="10rem"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
