import { career } from "@/content/site";
import styles from "./Timeline.module.css";

/** Career as a line with stops, newest first. */
export function Timeline() {
  return (
    <ol className={styles.line}>
      {career.map((stop) => (
        <li key={`${stop.title}-${stop.period}`} className={styles.stop}>
          <p className={styles.period}>{stop.period}</p>
          <h3 className={styles.title}>{stop.title}</h3>
          {stop.place && <p className={styles.place}>{stop.place}</p>}
          <p className={styles.detail}>{stop.detail}</p>
        </li>
      ))}
    </ol>
  );
}
