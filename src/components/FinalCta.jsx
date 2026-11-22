import { BookCallButton, Container, Eyebrow } from './ui.jsx'

export default function FinalCta() {
  return (
    <section id="book" className="scroll-mt-20 pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-console px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-3xl"
          />
          <div className="relative">
            <Eyebrow className="text-indigo-300!">Next step</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.05]">
              Let’s take a look at your COA review process.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Tell us how your team handles supplier COAs. We’ll explore where automation could
              reduce manual work and improve consistency.
            </p>
            <div className="mt-10 flex justify-center">
              <BookCallButton variant="light" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
