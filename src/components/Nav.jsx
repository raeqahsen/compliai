import { useEffect, useState } from 'react'
import { BookCallOutline, Container, Logo } from './ui.jsx'

const links = [
  { href: '#problem', label: 'The problem' },
  { href: '#why', label: 'Why CompliAI' },
  { href: '#approach', label: 'How we work' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-200 ${
        scrolled
          ? 'border-b border-line/80 bg-canvas/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[88px]">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <BookCallOutline />
      </Container>
    </header>
  )
}
