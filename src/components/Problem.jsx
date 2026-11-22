import { Section, SectionHeader } from './ui.jsx'

const manual = [
  'Open and review supplier PDFs',
  'Enter and compare test results',
  'Identify missing information and exceptions',
]

const automated = [
  'Automatically extract COA data',
  'Compare results against specifications',
  'Flag exceptions for QA review',
]

function Mark({ variant }) {
  if (variant === 'manual') {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 7v3.2l2 1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    )
  }
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-[0_4px_12px_-4px_rgba(99,102,241,0.7)]">
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" aria-hidden="true">
        <path d="m5 10.5 3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function Problem() {
  return (
    <Section id="problem" className="border-t border-line bg-white">
      <SectionHeader
        eyebrow="The problem"
        title="Your QA team has better things to do than manually review PDFs."
        description="Supplier COAs arrive in different formats. Reviewing results, comparing specifications, and identifying missing information can consume valuable QA time."
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink sm:text-lg">
        CompliAI is designed to automate repetitive checks and surface exceptions for human review.
      </p>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
        {/* before */}
        <div className="rounded-2xl border border-line bg-canvas p-7 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
            Manual process
          </p>
          <ul className="mt-6 space-y-4">
            {manual.map((item) => (
              <li key={item} className="flex items-center gap-3.5 text-[15px] text-ink-soft sm:text-base">
                <Mark variant="manual" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* arrow between the two cards */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-90 items-center justify-center rounded-full border border-line bg-white text-indigo-600 shadow-sm md:rotate-0"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        {/* after */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-white p-7 shadow-[0_20px_48px_-28px_rgba(79,70,229,0.45)] sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-400/15 blur-3xl"
          />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.24em] text-indigo-600">
            With CompliAI
          </p>
          <ul className="relative mt-6 space-y-4">
            {automated.map((item) => (
              <li key={item} className="flex items-center gap-3.5 text-[15px] font-medium text-ink sm:text-base">
                <Mark variant="auto" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
