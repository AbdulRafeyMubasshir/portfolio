import { CaseStudy } from "@/components/CaseStudy";
import { Certifications } from "@/components/Certifications";
import { Credentials } from "@/components/Credentials";
import { Facts } from "@/components/Facts";
import { HeroIntro } from "@/components/HeroIntro";
import { LensSwitch } from "@/components/LensSwitch";
import { BerryHeroLoop, BerryVideo, TubeLoop } from "@/components/Media";
import { RailNav, type Station } from "@/components/RailNav";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { berry, hero, parseLens, person, tube } from "@/content/site";
import { LensProvider } from "@/lib/lens";
import styles from "./page.module.css";

const stations: Station[] = [
  { id: "intro", label: "Start" },
  { id: "berry", label: "Berry" },
  { id: "route-finder", label: "Route finder" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = params.for;
  const lens = parseLens(Array.isArray(raw) ? raw[0] : raw);

  return (
    <LensProvider initial={lens}>
      <div className={styles.shell}>
        <aside className={styles.side}>
          <p className={styles.name}>{person.name}</p>
          <RailNav stations={stations} />
        </aside>

        <main id="main" className={styles.main}>
          <section id="intro" className={styles.hero} aria-labelledby="headline">
            <div className={styles.heroText}>
              <h1 id="headline" className={styles.headline}>
                {hero.headline}
              </h1>
              <HeroIntro />
            </div>
            <div className={styles.heroMedia}>
              <BerryHeroLoop />
            </div>
            <div className={styles.heroProof}>
              <LensSwitch />
              <Facts />
              <Credentials />
            </div>
          </section>

          <section id="berry" className={styles.section} aria-labelledby="berry-heading">
            <h2 id="berry-heading" className={styles.heading}>
              Client work
            </h2>
            <CaseStudy study={berry} media={<BerryVideo />} readMore="/work/berry" />
          </section>

          <section
            id="route-finder"
            className={styles.section}
            aria-labelledby="route-finder-heading"
          >
            <h2 id="route-finder-heading" className={styles.heading}>
              Engineering in the open
            </h2>
            <CaseStudy study={tube} media={<TubeLoop />} readMore="/work/tube-route-finder" />
          </section>

          <section id="experience" className={styles.section} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className={styles.heading}>
              Experience
            </h2>
            <Timeline />
            <Certifications />
          </section>

          <section id="skills" className={styles.section} aria-labelledby="skills-heading">
            <h2 id="skills-heading" className={styles.heading}>
              What I bring
            </h2>
            <Skills />
          </section>

          <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
            <h2 id="contact-heading" className={styles.heading}>
              Let’s talk
            </h2>
            <p className={styles.contactLead}>
              I’m open to engineering, solutions, delivery and customer success roles in London or
              remote. Email is the quickest way to reach me.
            </p>
            <ul className={styles.contactList}>
              <li>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </li>
              <li>
                <a href={person.linkedin}>LinkedIn</a>
              </li>
              <li>
                <a href={person.github}>GitHub</a>
              </li>
              {person.cv && (
                <li>
                  <a href={person.cv} download>
                    Download CV
                  </a>
                </li>
              )}
            </ul>
          </section>
        </main>
      </div>
    </LensProvider>
  );
}
