import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/content/site";
import { person } from "@/content/site";
import styles from "./WorkPage.module.css";

/** Shared frame for a full case study: back link, title, at-a-glance facts, body. */
export function WorkPage({
  study,
  glance,
  children,
}: {
  study: CaseStudy;
  glance: { label: string; value: string }[];
  children: ReactNode;
}) {
  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <Link href="/" className={styles.home}>
          {person.name}
        </Link>
      </header>
      <main id="main" className={styles.main}>
        <p className={styles.back}>
          <Link href="/">Back to all work</Link>
        </p>
        <h1 className={styles.title}>{study.title}</h1>
        <p className={styles.meta}>
          {study.role}, {study.period}
        </p>
        <dl className={styles.glance}>
          {glance.map((g) => (
            <div key={g.label}>
              <dt>{g.label}</dt>
              <dd>{g.value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.body}>{children}</div>
        <footer className={styles.footer}>
          <p>
            Want to hear more? Email <a href={`mailto:${person.email}`}>{person.email}</a> or find
            me on <a href={person.linkedin}>LinkedIn</a>.
          </p>
        </footer>
      </main>
    </div>
  );
}

/** A captioned screenshot inside a case study. */
export function Still({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className={styles.still}>
      {/* Plain img: stills are pre-sized WebP files, so next/image adds nothing here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1280} height={720} loading="lazy" decoding="async" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
