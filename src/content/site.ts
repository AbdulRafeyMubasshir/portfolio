/**
 * All site copy lives here, so it can be reviewed and edited in one place.
 *
 * A "lens" tailors the page to the role a visitor is hiring for. Only emphasis
 * changes between lenses (order, wording, highlights); every fact is the same.
 */

export const LENSES = ["engineering", "solutions", "delivery"] as const;
export type Lens = (typeof LENSES)[number];
export const DEFAULT_LENS: Lens = "engineering";

export const LENS_LABELS: Record<Lens, string> = {
  engineering: "Engineering",
  solutions: "Solutions & sales",
  delivery: "Delivery & customer success",
};

export function parseLens(value: string | null | undefined): Lens {
  return LENSES.includes(value as Lens) ? (value as Lens) : DEFAULT_LENS;
}

export const person = {
  name: "Rafey Mohammed",
  fullName: "Abdul Rafey Mubasshir Mohammed",
  location: "London",
  email: "armubbu@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammed-abdul-rafey-mubasshir/",
  github: "https://github.com/AbdulRafeyMubasshir",
  url: "https://rafey-mohammed.vercel.app",
};

export const hero = {
  headline: "I build software for customers, and see it through.",
  intro: {
    engineering:
      "Full-stack engineer working in TypeScript, React, Next.js and Supabase. I’ve shipped four production apps for a national client, and built a journey planner that answers in a third of a millisecond.",
    solutions:
      "I find the problem, build the fix and close the deal. I sold and delivered a £20,000 scheduling platform to Berry Recruitment Group, with no sales team behind me.",
    delivery:
      "I take software from first conversation to daily use: discovery, rollout, training, monthly reviews and quick fixes. My platform schedules 295+ rail workers every week.",
  } satisfies Record<Lens, string>,
};

export interface Fact {
  id: string;
  value: string;
  label: string;
}

const FACTS: Record<string, Fact> = {
  deal: {
    id: "deal",
    value: "£20,000",
    label: "contract I closed with Berry Recruitment Group, negotiated directly",
  },
  workers: {
    id: "workers",
    value: "295+",
    label: "rail workers scheduled across 75+ UK stations, 800+ shifts a week",
  },
  hours: { id: "hours", value: "20+ hours", label: "of manual scheduling saved every week" },
  apps: {
    id: "apps",
    value: "4 apps",
    label: "in production for one client, with row-level security and role-based access",
  },
  speed: {
    id: "speed",
    value: "0.34 ms",
    label: "median journey query in my RAPTOR engine on real TfL timetables",
  },
  account: {
    id: "account",
    value: "1 year+",
    label: "running the account after the sale: monthly reviews, training, new features",
  },
  downtime: {
    id: "downtime",
    value: "85%",
    label: "less client downtime at Deloitte after I diagnosed production issues",
  },
};

export const factsByLens: Record<Lens, Fact[]> = {
  engineering: [FACTS.apps!, FACTS.speed!, FACTS.workers!, FACTS.downtime!],
  solutions: [FACTS.deal!, FACTS.workers!, FACTS.hours!, FACTS.account!],
  delivery: [FACTS.workers!, FACTS.hours!, FACTS.account!, FACTS.deal!],
};

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  role: string;
  period: string;
  summary: Record<Lens, string>;
  stack: string[];
  links: { label: string; href: string }[];
}

export const berry: CaseStudy = {
  slug: "berry",
  title: "Workforce scheduling for Berry Recruitment Group",
  client: "Berry Recruitment Group",
  role: "Founder and sole engineer, Elegant Trends Ltd",
  period: "2025 to now",
  summary: {
    engineering:
      "Four production planners (Shift, SIA, ATP, Dispatch) on Next.js, Node.js and Supabase. An auto-scheduler respects availability, rest periods and certifications, and private portals replaced a WhatsApp process. I designed the security model with row-level security and role-based access.",
    solutions:
      "I found the client, mapped their rota problem with the Managing Director, IT Director and Head of Rail Operations, built the product and closed £20,000: £8,000 up front and £12,000 a year, negotiated myself. I built the ROI case on hours saved and zero missed constraint violations.",
    delivery:
      "I rolled the platform out with training sessions and three user guides, then ran monthly reviews for over a year, expanding scope from client feedback. When React Server Components CVEs were announced I briefed the client, and I cleared every critical and high vulnerability.",
  },
  stack: ["React", "Next.js", "Node.js", "Supabase", "PostgreSQL", "Vercel"],
  links: [],
};

export const tube: CaseStudy = {
  slug: "tube-route-finder",
  title: "London Underground Route Finder",
  client: "Personal project",
  role: "Design, engineering and data",
  period: "2025 to 2026",
  summary: {
    engineering:
      "A journey planner running RAPTOR, the algorithm behind production journey planners, on about 25,000 TfL departures in the browser. Property-based tests against reference solvers found three real bugs. It routes around live disruptions and works offline.",
    solutions:
      "Proof that I can turn messy public data into a product people trust: real timetables, honest labels where data is estimated, and a clear explanation whenever a journey is rerouted around a closure.",
    delivery:
      "Shipped like a client project: a reproducible data pipeline, 143 automated tests in CI, design decisions written up as records, a weekly automated data refresh, and a full write-up for other engineers.",
  },
  stack: ["TypeScript", "React", "Vite", "Vercel Edge", "Vitest", "PWA"],
  links: [
    { label: "Try it", href: "https://tube-route-finder.vercel.app" },
    { label: "Code", href: "https://github.com/AbdulRafeyMubasshir/tube_route_finder" },
    {
      label: "How it works",
      href: "https://github.com/AbdulRafeyMubasshir/tube_route_finder/blob/master/docs/how-it-works.md",
    },
  ],
};

export interface Stop {
  period: string;
  title: string;
  place: string;
  detail: string;
}

/** Career, newest first. */
export const career: Stop[] = [
  {
    period: "2025 to now",
    title: "Founder and engineer",
    place: "Elegant Trends Ltd, London",
    detail:
      "Find, build for and sell to B2B clients. Delivered the Berry scheduling suite end to end and run the account.",
  },
  {
    period: "2024 to now",
    title: "Sales assistant",
    place: "Holland & Barrett, London",
    detail: "Face-to-face sales and customer service, alongside building my company.",
  },
  {
    period: "2023 to 2025",
    title: "IT operator and support engineer",
    place: "Ace Ltd, Stanmore",
    detail:
      "First and second line support. Configured Salesforce: case management, omni-channel routing, onboarding automation, account dashboards and a legacy data migration.",
  },
  {
    period: "2023 to 2024",
    title: "MSc Software Engineering",
    place: "University of Westminster",
    detail:
      "£3,000 merit scholarship. AI applications, machine learning architectures, scalable systems and data engineering.",
  },
  {
    period: "2022 to 2023",
    title: "Analyst, Salesforce developer",
    place: "Deloitte, Hyderabad",
    detail:
      "Built a live REST integration between Salesforce and Towbook, and cut client downtime by 85% by diagnosing production issues. Three Salesforce certifications.",
  },
  {
    period: "Earlier",
    title: "BEng Civil Engineering, Computer Science minor",
    place: "",
    detail: "Maths foundations in probability, statistics, linear algebra and optimisation.",
  },
];

export interface SkillGroup {
  name: string;
  lens: Lens;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: "Build",
    lens: "engineering",
    items: [
      "TypeScript, React, Next.js, Node.js",
      "Supabase and PostgreSQL, row-level security",
      "Python, REST APIs, Salesforce and Apex",
      "Vercel, AWS, Azure",
      "Testing: Vitest, property-based testing, CI",
    ],
  },
  {
    name: "Sell",
    lens: "solutions",
    items: [
      "Finding clients and qualifying problems",
      "Discovery with directors and operations leads",
      "Demos, ROI cases and proposals",
      "Negotiating and closing directly",
    ],
  },
  {
    name: "Deliver",
    lens: "delivery",
    items: [
      "Requirements, BPMN and UML",
      "Rollout, training and user guides",
      "Monthly reviews and roadmap from feedback",
      "Security reviews and incident briefings",
    ],
  },
];
