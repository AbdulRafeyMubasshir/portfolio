import type { Metadata } from "next";
import { TubeLoop } from "@/components/Media";
import { WorkPage } from "@/components/WorkPage";
import { tube } from "@/content/site";

export const metadata: Metadata = {
  title: "London Underground Route Finder case study",
  description:
    "A RAPTOR journey planner on real TfL timetables, running in the browser with property-based tests and live disruption routing.",
  alternates: { canonical: "/work/tube-route-finder" },
};

const glance = [
  { label: "Median query", value: "0.34 ms" },
  { label: "Departures", value: "~25,000" },
  { label: "Automated tests", value: "143" },
  { label: "Works offline", value: "Yes" },
];

export default function TubeCaseStudy() {
  return (
    <WorkPage study={tube} glance={glance}>
      <TubeLoop />

      <h2>Why I built it</h2>
      <p>
        Most route finder side projects run shortest-path search over a station graph. That finds
        the shortest line on a map, not the journey you can actually catch. I wanted to build a
        planner the way production journey planners work, on real timetables, and to engineer it to
        a standard I’d put in front of a client.
      </p>

      <h2>What’s inside</h2>
      <ul>
        <li>
          <strong>RAPTOR on real timetables.</strong> The algorithm behind production journey
          planners, running on about 25,000 TfL departures, entirely in the browser. A median query
          takes 0.34 ms.
        </li>
        <li>
          <strong>Correctness I can show.</strong> Property-based tests compare it with reference
          solvers on generated networks. They found three real bugs that example tests had missed.
        </li>
        <li>
          <strong>Live disruptions.</strong> Journeys reroute around closures, and the app explains
          why a route changed.
        </li>
        <li>
          <strong>Honest data.</strong> Where timings are estimated rather than timetabled, the app
          says so.
        </li>
        <li>
          <strong>Built like a product.</strong> A reproducible data pipeline, 143 automated tests
          in CI, decision records, a weekly automated data refresh, and offline support as a PWA.
        </li>
      </ul>

      <h2>Read more</h2>
      <ul>
        {tube.links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </WorkPage>
  );
}
