import { BOOKING_PATH, CONTACT_EMAIL, PRIVACY_URL } from '../config.js'
import { Container, Logo } from './ui.jsx'

const linkClass = 'transition-colors hover:text-ink'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo className="text-xl!" />
        <div className="flex flex-col gap-3 text-sm text-ink-soft sm:flex-row sm:items-center sm:gap-6">
          {/* Contact: shows VITE_CONTACT_EMAIL when set, otherwise points to the scheduling page. */}
          {CONTACT_EMAIL ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
          ) : (
            <a href={BOOKING_PATH} className={linkClass}>
              Contact
            </a>
          )}
          {/* Privacy Policy: links to VITE_PRIVACY_URL once you publish one. */}
          {PRIVACY_URL ? (
            <a href={PRIVACY_URL} className={linkClass}>
              Privacy Policy
            </a>
          ) : (
            <span className="text-slate-400" title="Privacy Policy coming soon">
              Privacy Policy
            </span>
          )}
          <p>© {new Date().getFullYear()} CompliAI</p>
        </div>
      </Container>
    </footer>
  )
}
