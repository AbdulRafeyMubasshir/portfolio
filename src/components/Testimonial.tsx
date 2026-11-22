import type { Testimonial as TestimonialData } from "@/content/site";
import styles from "./Testimonial.module.css";

/** A client's own words. Renders nothing until a real quote is added. */
export function Testimonial({ data }: { data: TestimonialData | null }) {
  if (!data) return null;
  return (
    <figure className={styles.figure}>
      <blockquote className={styles.quote}>
        <p>{data.quote}</p>
      </blockquote>
      <figcaption className={styles.by}>
        <span className={styles.name}>{data.name}</span>, {data.title}
      </figcaption>
    </figure>
  );
}
