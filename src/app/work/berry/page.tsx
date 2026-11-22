import type { Metadata } from "next";
import { BerryVideo } from "@/components/Media";
import { Flow } from "@/components/Flow";
import { Testimonial } from "@/components/Testimonial";
import { Still, WorkPage } from "@/components/WorkPage";
import { berry, berryTestimonial } from "@/content/site";

export const metadata: Metadata = {
  title: "Berry Recruitment Group case study",
  description:
    "How I found, built, sold and delivered a £20,000 workforce scheduling platform that schedules 295+ rail workers a week.",
  alternates: { canonical: "/work/berry" },
};

const glance = [
  { label: "Contract", value: "£20,000" },
  { label: "Workers scheduled", value: "295+" },
  { label: "Stations", value: "75+" },
  { label: "Time saved", value: "20+ hrs/week" },
];

export default function BerryCaseStudy() {
  return (
    <WorkPage study={berry} glance={glance}>
      <BerryVideo />
      <Testimonial data={berryTestimonial} />

      <h2>The problem</h2>
      <p>
        Berry Recruitment Group supplies staff to UK rail: station workers, security officers and
        dispatch teams across more than 75 stations. Every week, planners built rotas by hand from
        availability that arrived as WhatsApp messages and phone calls. Each rota had to respect who
        was available, which stations they could cover, required certifications and rest periods. It
        took more than 20 hours a week, and one missed constraint meant an unfilled shift or a
        non-compliant one.
      </p>

      <h2>What I did</h2>
      <p>I was the whole team: sales, discovery, engineering, rollout and support.</p>
      <ol>
        <li>
          <strong>Found the client and ran discovery</strong> with the Managing Director, IT
          Director and Head of Rail Operations, mapping how each planner actually worked and where
          time went.
        </li>
        <li>
          <strong>Built four planners</strong> (Shift, SIA, ATP and Dispatch) on Next.js, Node.js
          and Supabase, each fitted to how that team schedules, with a shared auto-scheduler that
          respects availability, station coverage, certifications and rest.
        </li>
        <li>
          <strong>Replaced WhatsApp with private portals.</strong> Each worker and supervisor gets
          their own link to submit availability and rotas, so data arrives structured and on time.
        </li>
        <li>
          <strong>Closed the deal myself:</strong> £8,000 up front plus £12,000 a year, backed by an
          ROI case built on hours saved and zero missed constraint violations.
        </li>
        <li>
          <strong>Rolled it out</strong> with training sessions and three user guides, then ran
          monthly reviews for over a year, growing the product from client feedback.
        </li>
        <li>
          <strong>Kept it secure.</strong> I designed the access model with row-level security and
          role-based access. When the React Server Components CVEs were announced I briefed the
          client and cleared every critical and high vulnerability.
        </li>
      </ol>

      <h2>How it fits together</h2>
      <Flow
        label="How data moves through the Berry platform"
        stages={[
          {
            title: "Private portals",
            items: [
              "Each worker gets a link to submit weekly availability",
              "Supervisors submit rotas the same way",
            ],
          },
          {
            title: "Supabase and PostgreSQL",
            items: [
              "Row-level security on every table",
              "Role-based access for planners and supervisors",
              "Audit trail of every change",
            ],
          },
          {
            title: "Auto-scheduler",
            items: [
              "Matches availability to station cover",
              "Respects certifications and rest periods",
              "Lists anything it can’t fill",
            ],
          },
          {
            title: "Four planners",
            items: [
              "Shift, SIA, ATP and Dispatch",
              "Review and adjust by hand",
              "Export to Excel or PDF",
            ],
          },
        ]}
        note="Built on Next.js and Node.js, deployed on Vercel."
      />

      <h2>The product, step by step</h2>
      <Still
        src="/media/berry-s-workers.webp"
        alt="Workers screen listing each worker with the stations they can cover"
        caption="Planners add each worker once, with the stations they can cover."
      />
      <Still
        src="/media/berry-s-availability.webp"
        alt="Worker portal where a worker marks each day as early, late, any shift or not available"
        caption="Workers submit availability through their own link, in place of WhatsApp."
      />
      <Still
        src="/media/berry-s-generate.webp"
        alt="Dialog for picking the week-ending date before generating a schedule"
        caption="Pick the week and generate the schedule in one click."
      />
      <Still
        src="/media/berry-s-result.webp"
        alt="Generated weekly schedule with stations and shift times filled in for each worker"
        caption="The result: 275 stations assigned automatically in this demo week."
      />
      <Still
        src="/media/berry-s-unassigned.webp"
        alt="Unassigned stations list with a worker picker and an assign button for each row"
        caption="Anything that can’t be filled is listed, ready to assign by hand."
      />
      <Still
        src="/media/berry-s-audit.webp"
        alt="Audit trail table showing old and new location and time for each change"
        caption="Every manual change is recorded in an audit trail."
      />

      <h2>Results</h2>
      <ul>
        <li>295+ rail workers scheduled across 75+ stations, 800+ shifts a week.</li>
        <li>20+ hours of manual scheduling saved every week.</li>
        <li>Four apps in production, with row-level security and role-based access.</li>
        <li>A £20,000 contract and an account I’ve run for over a year.</li>
      </ul>
    </WorkPage>
  );
}
