"use client";

import { skills } from "@/content/site";
import { useLens } from "@/lib/lens";
import styles from "./Skills.module.css";

/** Skills in three groups; the group matching the visitor's lens comes first. */
export function Skills() {
  const { lens } = useLens();
  const ordered = [...skills].sort((a, b) => Number(b.lens === lens) - Number(a.lens === lens));
  return (
    <div className={styles.grid}>
      {ordered.map((group) => (
        <section key={group.name} aria-labelledby={`skills-${group.name}`}>
          <h3 id={`skills-${group.name}`} className={styles.name}>
            {group.name}
          </h3>
          <ul className={styles.list}>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
