"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { TICKETS_URL, eventMeta } from "@/data/content";

type HeroProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export function Hero({
  videoSrc = "/media/hero.mp4",
  posterSrc = "/media/hero-poster.webp",
}: HeroProps) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduce) {
      video.pause();
      return;
    }
    video.play().catch(() => undefined);
  }, [reduce]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterSrc}
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-top"
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stage/70 via-stage/45 to-stage/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center">
        <h1 className="font-display text-7xl leading-none tracking-[0.08em] text-gold">
          1903
          <span className="mt-3 block text-sm tracking-[0.42em] text-parchment">
            EL MUSICAL
          </span>
          <span className="mt-1 block font-sans text-[11px] font-semibold tracking-[0.38em] text-gold-aged">
            INMERSIVO
          </span>
        </h1>
        <p className="mt-6 max-w-[18rem] text-sm leading-relaxed text-parchment">
          {eventMeta.line}
        </p>
        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-gold bg-gold px-8 text-sm font-semibold uppercase tracking-[0.18em] text-stage transition-colors hover:bg-transparent hover:text-gold"
        >
          Comprar boletos
        </a>
      </div>
    </section>
  );
}
