import { BOOKING_PATH } from '../config.js'

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-indigo-600 sm:text-xs ${className}`}
    >
      {children}
    </p>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>
      )}
    </div>
  )
}

const bookingProps = { href: BOOKING_PATH }

export function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Primary CTA: dark navy button with a split arrow segment, as in the hero. */
export function BookCallButton({ children = 'Schedule a Call', variant = 'dark' }) {
  const styles =
    variant === 'light'
      ? 'bg-white text-ink hover:bg-slate-100 divide-slate-200'
      : 'bg-ink text-white hover:bg-slate-800 divide-white/15'
  return (
    <a
      {...bookingProps}
      className={`group inline-flex items-stretch divide-x rounded-md text-[15px] font-semibold shadow-[0_8px_24px_-8px_rgba(15,23,42,0.45)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:text-base ${styles}`}
    >
      <span className="px-6 py-3.5 sm:px-8 sm:py-4">{children}</span>
      <span className="flex items-center px-4 sm:px-5">
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  )
}

/** Secondary outline CTA used in the nav. */
export function BookCallOutline({ children = 'Schedule a Call' }) {
  return (
    <a
      {...bookingProps}
      className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:px-5 sm:py-2.5 sm:text-[15px]"
    >
      {children}
    </a>
  )
}

export function Logo({ className = '', href = '#top' }) {
  return (
    <a
      href={href}
      className={`font-display text-[1.6rem] font-extrabold tracking-[-0.04em] text-ink ${className}`}
      aria-label="CompliAI home"
    >
      Compli<span className="text-gradient">AI</span>
    </a>
  )
}
