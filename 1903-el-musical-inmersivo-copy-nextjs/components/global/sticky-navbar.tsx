"use client";

import { useEffect, useId, useState } from "react";
import styles from "./sticky-navbar.module.css";

const NAV_LINKS = [
  { href: "#historia", label: "Historia" },
  { href: "#menu-de-comida", label: "Comida" },
  { href: "#menu-de-bebidas", label: "Bebidas" },
  { href: "#mapa", label: "Recorrido" },
  { href: "#ficha-tecnica", label: "Ficha técnica" },
  { href: "#programa", label: "Programa" },
  { href: "#nikki-de-roy", label: "Nikki" },
  { href: "#voces-del-publico", label: "Chat en vivo" },
  { href: "#patrocinadores", label: "Patrocinadores" },
] as const;

const HERO_ID = "hero-poster-y-fechas";

export function GlobalStickyNavbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const hero = document.getElementById(HERO_ID);
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const show = !entry.isIntersecting;
        setVisible(show);
        if (!show) setOpen(false);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 992px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`${styles.bar} ${visible ? styles.barVisible : styles.barHidden}${open ? ` ${styles.menuOpen}` : ""}`}
      aria-hidden={!visible}
    >
      <div className={styles.inner}>
        <a className={styles.brand} href={`#${HERO_ID}`} tabIndex={visible ? 0 : -1}>
          1903
        </a>

        <nav className={styles.desktopNav} aria-label="Índice de la página">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className={styles.link}
              href={link.href}
              tabIndex={visible ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          tabIndex={visible ? 0 : -1}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className={`${styles.mobilePanel}${open ? ` ${styles.mobilePanelOpen}` : ""}`}
        hidden={!open}
      >
        <nav aria-label="Índice de la página">
          <ul className={styles.mobileList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.mobileLink}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
