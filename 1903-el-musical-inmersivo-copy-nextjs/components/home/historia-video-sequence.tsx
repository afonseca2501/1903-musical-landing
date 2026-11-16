"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./historia-video-sequence.module.css";

const HISTORIA_VIDEOS = [
  "/assets/historia_videoO/1699723f388cf78c8389fec83f5ee186a1ccc4fc671edf9dbcca5ecdd482d467.mp4",
  "/assets/historia_videoO/37e3a24fa48824a428b51de80e4b1cbba37e8d6333780d85e5e372266596dad6.mp4",
] as const;

export function HistoriaVideoSequence() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay can be blocked until interaction; muted + playsInline usually allows it.
      });
    }
  }, [index]);

  return (
    <div className={styles.root}>
      <video
        key={HISTORIA_VIDEOS[index]}
        ref={videoRef}
        className={styles.video}
        src={HISTORIA_VIDEOS[index]}
        muted
        autoPlay
        playsInline
        preload="auto"
        onEnded={() => {
          setIndex((current) => (current + 1) % HISTORIA_VIDEOS.length);
        }}
      />
    </div>
  );
}
