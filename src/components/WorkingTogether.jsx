import { Section, SectionHeader } from './ui.jsx'

const steps = [
  {
    n: '01',
    title: 'Understand',
    body: 'Learn how your team currently receives, reviews, and manages supplier COAs.',
  },
  {
    n: '02',
    title: 'Identify',
    body: 'Find repetitive tasks and opportunities for reliable automation.',
  },
  {
    n: '03',
    title: 'Implement',
    body: 'Design and integrate an automation solution with appropriate QA oversight.',
  },
]

export default function WorkingTogether() {
  return (
    <Section id="approach">
      <SectionHeader
        eyebrow="Working together"
        title="Built around your existing workflow."
        description="We aim to work alongside the ERP, QMS, and tools your team already uses—not ask you to replace them."
      />

      <ol className="relative mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-8">
        {/* connecting line (desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-[16.66%] right-[16.66%] top-5 hidden h-px bg-gradient-to-r from-indigo-200 via-indigo-400 to-violet-300 md:block"
        />
        {steps.map((s) => (
          <li key={s.n} className="relative text-center">
            <span className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-white font-mono text-xs font-medium text-indigo-600 shadow-[0_0_0_6px_var(--color-canvas)]">
              {s.n}
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
