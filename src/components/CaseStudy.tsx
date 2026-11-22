"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy as CaseStudyData } from "@/content/site";
import { useLens } from "@/lib/lens";
import styles from "./CaseStudy.module.css";

interface Props {
  study: CaseStudyData;
  media: ReactNode;
  /** Path of the full write-up on this site. */
  readMore: string;
}

/** A case study on the home page: what it is, the lens-specific angle, and proof. */
export function CaseStudy({ study, media, readMore }: Props) {
  const { lens } = useLens();
  return (
    <article className={styles.study} aria-labelledby={`${study.slug}-title`}>
      <h3 id={`${study.slug}-title`} className={styles.title}>
        {study.title}
      </h3>
      <p className={styles.meta}>
        {study.role}, {study.period}
      </p>
      <div className={styles.media}>{media}</div>
      <p className={styles.summary} aria-live="polite">
        {study.summary[lens]}
      </p>
      <ul className={styles.stack} aria-label="Built with">
        {study.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={styles.links}>
        <Link href={readMore} className={styles.primary}>
          Read the case study
        </Link>
        {study.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </p>
    </article>
  );
}
