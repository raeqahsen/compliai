import { useEffect } from 'react'
import { CALENDLY_URL, CONTACT_EMAIL } from '../config.js'
import { Container, Eyebrow, Logo } from '../components/ui.jsx'

const isCalendlyUrl = /^https:\/\/calendly\.com\/[^\s]+$/i.test(CALENDLY_URL)

function calendlyEmbedSrc(url) {
  const u = new URL(url)
  u.searchParams.set('embed_type', 'Inline')
  u.searchParams.set('embed_domain', window.location.hostname)
  u.searchParams.set('hide_gdpr_banner', '1')
  u.searchParams.set('primary_color', '4f46e5') // indigo-600, matches the site accent
  return u.toString()
}

function BackLink() {
  return (
    <a
      href="/"
      className="group inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
    >
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 10H4m0 0 5-5m-5 5 5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to Home
    </a>
  )
}

function CalendlyEmbed() {
  return (
    <iframe
      title="Schedule a call with CompliAI"
      src={calendlyEmbedSrc(CALENDLY_URL)}
      className="block h-[1080px] w-full sm:h-[760px]"
      loading="lazy"
    />
  )
}

function SetupPlaceholder() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[520px]">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
        </svg>
      </span>
      <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">
        Online scheduling is being set up
      </h2>
      <p className="mt-2 max-w-sm leading-relaxed text-ink-soft">
        The booking calendar will appear here shortly.
        {CONTACT_EMAIL && (
          <>
            {' '}
            In the meantime, email{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-indigo-600 underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>{' '}
            to find a time.
          </>
        )}
      </p>

      {/* Setup hint: only visible while running locally (npm run dev), never in production. */}
      {import.meta.env.DEV && (
        <div className="mt-8 w-full max-w-md rounded-lg border border-dashed border-indigo-300 bg-indigo-50/60 p-4 text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-600">
            Dev setup
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Add your Calendly link to <code className="font-mono text-ink">.env.local</code> and
            restart the dev server:
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-console px-3 py-2 font-mono text-xs text-slate-200">
            VITE_CALENDLY_URL=https://calendly.com/your-name/20min
          </pre>
          {CALENDLY_URL && !isCalendlyUrl && (
            <p className="mt-2 text-sm text-rose-600">
              The current value isn’t a calendly.com link: {CALENDLY_URL}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default function BookCallPage() {
  useEffect(() => {
    document.title = 'Schedule a Call — CompliAI'
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line/80">
        <Container className="flex h-16 items-center justify-between sm:h-[88px]">
          <Logo href="/" />
          <BackLink />
        </Container>
      </header>

      <main className="relative flex-1 overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-56 -z-10 mx-auto h-[420px] max-w-4xl rounded-full bg-indigo-400/10 blur-3xl"
        />
        <Container className="text-center">
          <Eyebrow>Schedule a call</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            Let’s Talk About Your <span className="text-gradient">COA</span> Process.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl sm:leading-[1.6]">
            Schedule a 20-minute call to discuss your current COA review process and explore how
            automation could help.
          </p>
        </Container>

        <Container className="mt-12 max-w-4xl! sm:mt-14">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
            {isCalendlyUrl ? <CalendlyEmbed /> : <SetupPlaceholder />}
          </div>
        </Container>
      </main>
    </div>
  )
}
