import { Container, Eyebrow } from './ui.jsx'

const principles = [
  {
    n: '01',
    title: 'Operational AI',
    body: 'Experience translating AI capabilities into practical workflows that improve operational efficiency.',
    icon: <path d="M4 14.5 8 10l3 3 5-6.5M13 6.5h3v3" />,
  },
  {
    n: '02',
    title: 'Reliability & Exception Handling',
    body: 'An engineering approach that prioritizes consistency, identifying unusual cases, and appropriate safeguards.',
    icon: (
      <>
        <path d="M10 3 4.5 5.2v4.3c0 3.4 2.3 6.2 5.5 7.5 3.2-1.3 5.5-4.1 5.5-7.5V5.2L10 3Z" />
        <path d="M10 7.5v3M10 12.8v.1" />
      </>
    ),
  },
  {
    n: '03',
    title: 'Human Oversight',
    body: 'Automation designed to support QA professionals rather than replace their judgment.',
    icon: (
      <>
        <circle cx="10" cy="7" r="2.8" />
        <path d="M4.5 16.5c.8-2.8 3-4.3 5.5-4.3s4.7 1.5 5.5 4.3" />
      </>
    ),
  },
]

export default function WhyCompliAI() {
  return (
    <section id="why" className="relative scroll-mt-20 overflow-hidden bg-console py-20 text-slate-200 sm:py-28">
      {/* faint technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow className="text-indigo-300!">Why CompliAI</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-[2.6rem] sm:leading-[1.1]">
              Built on experience in{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                safety-critical AI
              </span>{' '}
              systems.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Our team brings experience developing and operationalizing AI-powered workflows in
              autonomous vehicle technology, where reliability, efficiency, and careful handling of
              exceptions matter.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              We bring that engineering mindset to food manufacturing quality workflows—designing
              automation that reduces repetitive work while keeping people in control of important
              decisions.
            </p>
          </div>

          <ul className="grid gap-4">
            {principles.map((p) => (
              <li
                key={p.title}
                className="flex gap-5 rounded-2xl border border-console-line bg-console-raised/80 p-6 backdrop-blur-sm transition-colors hover:border-indigo-500/40 sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/30">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-indigo-400">{p.n}</p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
