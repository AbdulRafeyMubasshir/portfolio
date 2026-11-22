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
 * A short, silent loop that plays like a GIF. It never autoplays for visitors
 * who prefer reduced motion: they see the poster frame instead.
 */
export function Loop({
  src,
  poster,
  label,
  caption,
}: {
  src: string;
  poster: string;
  label: string;
  caption: string;
}) {
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
        poster={poster}
        aria-label={label}
        width={1280}
        height={720}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

export function TubeLoop() {
  return (
    <Loop
      src="/media/tube-demo.mp4"
      poster="/media/tube-route.webp"
      label="Planning a journey across London in the route finder"
      caption="Planning a journey on real TfL timetables."
    />
  );
}

export function BerryHeroLoop() {
  return (
    <Loop
      src="/media/berry-hero.mp4"
      poster="/media/berry-hero.webp"
      label="Berry's scheduler generating a week of rail shifts and filling the rota"
      caption="Berry generating a week of rail shifts: 275 stations assigned in one click. Live product, names blurred."
    />
  );
}
