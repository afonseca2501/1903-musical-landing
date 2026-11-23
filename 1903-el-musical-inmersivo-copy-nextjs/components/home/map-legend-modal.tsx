"use client";

import Image from "next/image";
import {
  useEffect,
  useEffectEvent,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { isMapGateCode, MAP_LEGEND_MARKERS } from "@/lib/map-legend";
import styles from "./map-legend-modal.module.css";

export function MapLegendPreview() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = useEffectEvent(() => {
    lastFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setOpen(true);
  });

  const closeModal = useEffectEvent(() => {
    setOpen(false);
    lastFocusRef.current?.focus();
  });

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.mapButton}
        aria-label="Abrir leyenda del mapa del mercado 1903"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openModal}
      >
        <span className={styles.mapFrame}>
          <Image
            className={styles.mapImage}
            src="/assets/mapa_1903_1080x1920.webp"
            alt="Mapa vertical del mercado 1903 en Islas de Atlapa"
            width={1080}
            height={1920}
            sizes="(max-width: 991px) 90vw, 22rem"
            priority
          />
        </span>
      </button>

      <button
        type="button"
        className={styles.legendTrigger}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openModal}
      >
        Ver leyenda del mapa
      </button>

      {mounted && open
        ? createPortal(
            <div
              className={styles.backdrop}
              role="presentation"
              onMouseDown={handleBackdropClick}
            >
              <div
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
              >
                <div className={styles.dialogHeader}>
                  <div>
                    <p className={styles.dialogEyebrow}>1903 · Mercado</p>
                    <h3 id={titleId} className={styles.dialogTitle}>
                      Leyenda del mapa
                    </h3>
                  </div>
                  <button
                    ref={closeRef}
                    type="button"
                    className={styles.closeButton}
                    aria-label="Cerrar leyenda del mapa"
                    onClick={closeModal}
                  >
                    ×
                  </button>
                </div>

                <p className={styles.dialogIntro}>
                  Cada marcador del recorrido corresponde a un pabellón o
                  experiencia del mercado inmersivo.
                </p>

                <ul className={styles.list}>
                  {MAP_LEGEND_MARKERS.map((item) => (
                    <li key={item.id} className={styles.item}>
                      <span
                        className={`${styles.marker} ${
                          isMapGateCode(item.marker)
                            ? styles.markerGate
                            : styles.markerPoint
                        }`}
                      >
                        {item.marker}
                      </span>
                      <p className={styles.label}>{item.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
