# Rafey Mohammed, portfolio

My personal site: **I build software for customers, and see it through.**

It shows two projects in depth, a commercial scheduling platform I sold and delivered to Berry Recruitment Group, and a RAPTOR journey planner for the London Underground, alongside my experience and contact details.

## The idea: one page, three audiences

I'm open to engineering, solutions and delivery roles, and each kind of hiring manager looks for different proof. A "What are you hiring for?" switch re-tailors the page: the intro, the four headline facts and each case study's summary change emphasis. Every fact stays the same; only the order and wording change.

The choice lives in the URL, so I can send a tailored link:

- `/?for=engineering` (default)
- `/?for=solutions`
- `/?for=delivery`

The server reads `?for=` and renders that view directly, so a shared link arrives tailored, with no flash of the default and full content for crawlers. Switching in the browser updates the URL in place with `history.replaceState`.

## Design

The page is drawn as a rail line. The left rail is the section navigation: each section is a station, the line shows how far you've travelled, and the current station is marked as you scroll (an `IntersectionObserver` scroll-spy). Headline facts are set like a timetable. One typeface (Overpass, self-hosted), a pale signal-box palette and a single amber accent.

## Stack

- Next.js 16 (App Router) and React 19, TypeScript in strict mode
- CSS Modules, no UI framework
- Vitest and Testing Library
- ESLint, Prettier and GitHub Actions CI
- Hosted on Vercel

## Quality

- **Accessible:** skip link, semantic landmarks, a keyboard-operable radio group for the lens switch, visible focus, and reduced motion respected (the route finder loop never autoplays for those visitors).
- **Fast:** no client-side data fetching, self-hosted fonts, the product video loads only when played, and stills are pre-sized WebP.
- **Findable:** per-page metadata, a generated social card, sitemap, robots and `Person` structured data.
- **Tested:** content invariants, URL parsing, lens switching (content, URL and keyboard) and the rail's scroll states.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run ci       # lint, format check, typecheck, tests and build
```

## Editing content

All copy is in [`src/content/site.ts`](src/content/site.ts). Media is in `public/media`.

Two optional pieces stay hidden until they're filled in:

- **CV download:** put the PDF in `public/` (for example `public/Rafey-Mohammed-CV.pdf`) and set `person.cv` to `"/Rafey-Mohammed-CV.pdf"`.
- **Client testimonial:** set `berryTestimonial` to a real quote, with the person's name and title, used with their permission.
