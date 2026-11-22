import { certifications, person } from "@/content/site";
import styles from "./Certifications.module.css";

/** Credentials, listed plainly, with a pointer to where they can be verified. */
export function Certifications() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.heading}>Certifications</h3>
      <ul className={styles.list}>
        {certifications.map((c) => (
          <li key={c.name}>
            <span className={styles.name}>{c.name}</span>
            <span className={styles.issuer}>{c.issuer}</span>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        Verifiable on <a href={person.linkedin}>my LinkedIn</a>.
      </p>
    </div>
  );
}
