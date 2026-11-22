// Central place for site-wide settings.

// Every "Schedule a Call" button links to this page.
export const BOOKING_PATH = '/book-a-call'

// Calendly scheduling link embedded on /book-a-call, e.g.
//   https://calendly.com/your-name/20min
// Set VITE_CALENDLY_URL in .env.local (and in Vercel → Project → Settings →
// Environment Variables). Until it's set, the page shows a setup placeholder.
export const CALENDLY_URL = (import.meta.env.VITE_CALENDLY_URL || '').trim()

// Optional contact email shown in the final CTA and footer. Leave empty to hide.
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || ''

// Optional Privacy Policy URL for the footer. Until set, the footer shows the label without a link.
export const PRIVACY_URL = (import.meta.env.VITE_PRIVACY_URL || '').trim()
