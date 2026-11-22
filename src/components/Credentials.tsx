import { credentials } from "@/content/site";
import styles from "./Credentials.module.css";

/** Names a recruiter recognises at a glance. */
export function Credentials() {
  return (
    <dl className={styles.list}>
      {credentials.map((c) => (
        <div key={c.name} className={styles.item}>
          <dt>{c.role}</dt>
          <dd>{c.name}</dd>
        </div>
      ))}
    </dl>
  );
}
