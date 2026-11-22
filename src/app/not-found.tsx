import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      style={{ maxWidth: "var(--measure)", padding: "6rem clamp(1.25rem, 4vw, 4rem)" }}
    >
      <h1 style={{ fontSize: "var(--step-3)", fontWeight: 800 }}>This stop isn’t on the line.</h1>
      <p style={{ marginTop: "1rem" }}>
        The page you asked for doesn’t exist. <Link href="/">Go back to the start</Link>.
      </p>
    </main>
  );
}
