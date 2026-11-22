"use client";

import { useRef, type KeyboardEvent } from "react";
import { LENSES, LENS_LABELS } from "@/content/site";
import { useLens } from "@/lib/lens";
import styles from "./LensSwitch.module.css";

/** "What are you hiring for?" — a radio group that re-tailors the page. */
export function LensSwitch() {
  const { lens, setLens } = useLens();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + LENSES.length) % LENSES.length;
    setLens(LENSES[next]!);
    refs.current[next]?.focus();
  };

  return (
    <div className={styles.wrap}>
      <p id="lens-label" className={styles.label}>
        What are you hiring for?
      </p>
      <div role="radiogroup" aria-labelledby="lens-label" className={styles.group}>
        {LENSES.map((option, index) => (
          <button
            key={option}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={lens === option}
            tabIndex={lens === option ? 0 : -1}
            className={styles.option}
            onClick={() => setLens(option)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {LENS_LABELS[option]}
          </button>
        ))}
      </div>
    </div>
  );
}
