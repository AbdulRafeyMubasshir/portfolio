"use client";

import { factsByLens } from "@/content/site";
import { useLens } from "@/lib/lens";
import styles from "./Facts.module.css";

/** Proof, set like a timetable: value on the left, what it means on the right. */
export function Facts() {
  const { lens } = useLens();
  return (
    <dl className={styles.facts} aria-label="Highlights">
      {factsByLens[lens].map((fact) => (
        <div key={fact.id} className={styles.row}>
          <dt className={styles.value}>{fact.value}</dt>
          <dd className={styles.label}>{fact.label}</dd>
        </div>
      ))}
    </dl>
  );
}
