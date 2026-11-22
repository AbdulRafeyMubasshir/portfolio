import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/overpass";
import "./globals.css";
import { certifications, person } from "@/content/site";

const description =
  "Rafey Mohammed builds software for customers and sees it through: engineering, selling and delivering B2B products in London.";

export const metadata: Metadata = {
  metadataBase: new URL(person.url),
  title: { default: `${person.name}, software for customers`, template: `%s | ${person.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: person.name, title: person.name, description, url: "/" },
  twitter: { card: "summary_large_image", title: person.name, description },
};

export const viewport: Viewport = { themeColor: "#f4f6f5" };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.fullName,
  alternateName: person.name,
  url: person.url,
  email: `mailto:${person.email}`,
  jobTitle: "Software engineer",
  address: { "@type": "PostalAddress", addressLocality: person.location, addressCountry: "GB" },
  sameAs: [person.linkedin, person.github],
  hasCredential: certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.name,
    recognizedBy: { "@type": "Organization", name: c.issuer },
  })),
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Westminster" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
