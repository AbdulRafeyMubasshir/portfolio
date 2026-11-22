"use client";

import { useEffect, useRef } from "react";
import styles from "./Media.module.css";

/** The Berry product video: plays only when asked, with sound and controls. */
export function BerryVideo() {
  return (
    <figure className={styles.figure}>
      <video
        className={styles.video}
        controls
        preload="none"
        playsInline
        poster="/media/berry-poster.webp"
        width={1280}
        height={720}
      >
        <source src="/media/berry-demo.mp4" type="video/mp4" />
      </video>
      <figcaption className={styles.caption}>
        76-second walkthrough of the live product. Worker names are blurred.
      </figcaption>
    </figure>
  );
}

/**
 * A short silent loop of the route finder. Loops like a GIF, but pauses
 * (and never autoplays) for visitors who prefer reduced motion.
 */
export function TubeLoop() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (query.matches) video.pause();
      else void video.play().catch(() => undefined);
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <figure className={styles.figure}>
      <video
        ref={ref}
        className={styles.video}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/tube-route.webp"
        aria-label="Planning a journey across London in the route finder"
      >
        <source src="/media/tube-demo.mp4" type="video/mp4" />
      </video>
      <figcaption className={styles.caption}>Planning a journey on real TfL timetables.</figcaption>
    </figure>
  );
}
