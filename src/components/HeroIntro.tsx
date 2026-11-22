"use client";

import { hero } from "@/content/site";
import { useLens } from "@/lib/lens";

/** The opening paragraph, worded for the role the visitor is hiring for. */
export function HeroIntro() {
  const { lens } = useLens();
  return (
    <p
      data-testid="hero-intro"
      aria-live="polite"
      style={{ fontSize: "var(--step-1)", maxWidth: "38rem" }}
    >
      {hero.intro[lens]}
    </p>
  );
}
