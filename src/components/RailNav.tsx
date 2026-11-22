"use client";

import { useEffect, useState } from "react";
import styles from "./RailNav.module.css";

export interface Station {
  id: string;
  label: string;
}

/**
 * The page as a line: each section is a station. Shows where you are as you
 * scroll and takes you anywhere on the line. Stations behind you are filled,
 * the current one is marked, the rest are still to come.
 */
export function RailNav({ stations }: { stations: Station[] }) {
  const [current, setCurrent] = useState(stations[0]?.id ?? "");

  useEffect(() => {
    const sections = stations
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;
    const order = stations.map((s) => s.id);
    const visible = new Set<string>();
    const update = () => {
      // At the very bottom the last (short) section may never reach the band.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const last = order[order.length - 1];
      if (atBottom && last && window.scrollY > 0) return setCurrent(last);
      const latest = order.filter((id) => visible.has(id)).pop();
      if (latest) setCurrent(latest);
    };
    // A section is "current" once its top passes 35% down the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        update();
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [stations]);

  const currentIndex = stations.findIndex((s) => s.id === current);

  return (
    <nav className={styles.rail} aria-label="Sections">
      <ol className={styles.line}>
        {stations.map((station, index) => (
          <li
            key={station.id}
            className={styles.station}
            data-state={
              index < currentIndex ? "passed" : index === currentIndex ? "current" : "ahead"
            }
          >
            <a
              href={`#${station.id}`}
              aria-current={index === currentIndex ? "location" : undefined}
            >
              <span className={styles.dot} aria-hidden="true" />
              {station.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
