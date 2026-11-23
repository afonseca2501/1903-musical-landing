import Image from "next/image";
import styles from "./map-legend-modal.module.css";

export function MapLegendPreview() {
  return (
    <div className={styles.wrap}>
      <figure className={styles.mapFrame}>
        <Image
          className={styles.mapImage}
          src="/assets/mapa_1903_1080x1920.webp"
          alt="Mapa vertical del mercado 1903 en Islas de Atlapa"
          width={1080}
          height={1920}
          sizes="(max-width: 991px) 90vw, 22rem"
          priority
        />
      </figure>
    </div>
  );
}
