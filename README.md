# CompliAI — Landing Page

Marketing landing page for CompliAI: supplier COA review automation for U.S. food manufacturers.

Built with **React + Vite + Tailwind CSS v4**. No backend, no auth — a static site.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build check:

```bash
npm run build
npm run preview    # serves ./dist at http://localhost:4173
```

## Connect Calendly

Every "Schedule a Call" button links to `/book-a-call`, which embeds your Calendly calendar.

```bash
cp .env.example .env.local
# then edit .env.local:
# VITE_CALENDLY_URL=https://calendly.com/your-name/20min
# VITE_CONTACT_EMAIL=you@yourdomain.com   (optional, footer contact)
# VITE_PRIVACY_URL=https://...            (optional, footer Privacy Policy link)
```

Restart `npm run dev` after editing. Until `VITE_CALENDLY_URL` is set to a `https://calendly.com/...`
link, the page shows a "scheduling is being set up" placeholder (plus a setup hint that only
appears in local dev).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project →** import the repo. Vercel auto-detects Vite
   (build: `npm run build`, output: `dist`).
3. Add `VITE_CALENDLY_URL` (and optionally `VITE_CONTACT_EMAIL`) under
   **Settings → Environment Variables**, then redeploy.

Or from the CLI: `npx vercel` (preview) and `npx vercel --prod`.

`vercel.json` rewrites `/book-a-call` to `index.html` so the page works on direct visits.

## Structure

```
src/
  main.jsx                picks the page from the URL path (/ or /book-a-call)
  App.jsx                 landing page composition (section order)
  config.js               booking path, Calendly URL, contact email
  pages/
    BookCallPage.jsx      /book-a-call: headline + Calendly embed (or setup placeholder)
  index.css               Tailwind import + theme tokens (colors, fonts)
  components/
    ui.jsx                shared primitives: Container, Section, SectionHeader, Eyebrow, buttons, Logo
    Nav.jsx               sticky top bar
    Hero.jsx              headline + CTA + console
    CoaConsole.jsx        dark "COA Review Console" illustration (sample data)
    Problem.jsx           problem + manual vs. CompliAI comparison
    WhyCompliAI.jsx       credibility: safety-critical AI experience + three principles
    WorkingTogether.jsx   Understand → Identify → Implement
    FinalCta.jsx          dark closing call to action (#book)
    Footer.jsx
```

## Content guardrails

CompliAI is pre-launch. Keep the copy free of testimonials, customer logos, performance
statistics, and claims that the automation is deployed. The console in the hero is labelled
as an illustrative workflow with sample data.
