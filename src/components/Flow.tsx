import type { CSSProperties } from "react";
import styles from "./Flow.module.css";

export interface FlowStage {
  title: string;
  items: string[];
}

/**
 * A system drawn as a line of stages, the way data moves through it.
 * Left to right on wide screens, top to bottom on narrow ones.
 */
export function Flow({
  label,
  stages,
  note,
}: {
  label: string;
  stages: FlowStage[];
  note?: string;
}) {
  return (
    <figure className={styles.figure}>
      <ol
        className={styles.flow}
        aria-label={label}
        style={{ "--stages": stages.length } as CSSProperties}
      >
        {stages.map((stage) => (
          <li key={stage.title} className={styles.stage}>
            <span className={styles.stop} aria-hidden="true" />
            <h3 className={styles.title}>{stage.title}</h3>
            <ul className={styles.items}>
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      {note && <figcaption className={styles.note}>{note}</figcaption>}
    </figure>
  );
}
